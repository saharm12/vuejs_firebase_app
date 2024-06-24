<template>
  <div class="container">
    <br>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">New product</button>
    <br><br>
    <section style="background-color: #eee;">
      <div class="text-center container py-5">
        <h4 class="mt-4"><strong>My Products</strong></h4>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4" v-for="product in products" :key="product.id">
            <div class="card">
              <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                <img :src="product.image" class="w-100" />
              </div>
              <div class="card-body">
                <h5 class="card-title mb-3">{{ product.name }}</h5>
                <p>{{ product.description }}</p>
                <h6 class="mb-3">{{ product.price }}</h6>
              </div>
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="getData(product.name, product.price, product.description, product.image, product.id)" type="button">Update product</button>
              <button class="btn btn-danger" @click="deleteProduct(product.id)" type="button">Delete product</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for adding new product -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="newProduct" style="width: 26rem;">
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form4Example1" v-model="newProductData.name" class="form-control" />
                <label class="form-label" for="form4Example1">Name</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="number" id="form4Example2" v-model="newProductData.price" class="form-control" />
                <label class="form-label" for="form4Example2">Price</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form4Example3" v-model="newProductData.image" class="form-control" />
                <label class="form-label" for="form4Example3">Image</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <textarea class="form-control" id="form4Example4" v-model="newProductData.description" rows="4"></textarea>
                <label class="form-label" for="form4Example4">Description</label>
              </div>
              <br>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit" data-mdb-ripple-init>Save</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
          <div class="alert alert-success" v-if="messageSuccess" role="alert">
            {{ messageSuccess }}
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for updating product -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update Product</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProduct" style="width: 26rem;">
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form4Example1" v-model="dataProduct.name" class="form-control" />
                <label class="form-label" for="form4Example1">Name</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="number" id="form4Example2" v-model="dataProduct.price" class="form-control" />
                <label class="form-label" for="form4Example2">Price</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form4Example3" v-model="dataProduct.image" class="form-control" />
                <label class="form-label" for="form4Example3">Image</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <textarea class="form-control" id="form4Example4" v-model="dataProduct.description" rows="4"></textarea>
                <label class="form-label" for="form4Example4">Description</label>
              </div>
              <br>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="submit" data-mdb-ripple-init>Save</button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
          <div class="alert alert-success" v-if="messageSuccess" role="alert">
            {{ messageSuccess }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { projectFirestore } from '../firebase';

export default {
  name: 'MyproductsView',
  data() {
    return {
      products: [],
      newProductData: {
        name: '',
        price: 0,
        description: '',
        image: '',
        uid: localStorage.getItem("uidUser")
      },
      dataProduct: {
        name: '',
        price: 0,
        description: '',
        image: '',
        key: '',
        uid: localStorage.getItem("uidUser")
      },
      uid: localStorage.getItem("uidUser"),
      ref: collection(projectFirestore, 'products'),
      messageSuccess: ''
    };
  },
  methods: {
    async newProduct() {
      try {
        this.newProductData.uid = this.uid;
        await addDoc(this.ref, this.newProductData);
        this.messageSuccess = 'Product added!';
        this.fetchProducts();
        this.newProductData = {
          name: '',
          price: 0,
          description: '',
          image: '',
          uid: this.uid
        };
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    async fetchProducts() {
      try {
        const q = query(this.ref, where("uid", "==", this.uid));
        const querySnapshot = await getDocs(q);
        this.products = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    },
    getData(name, price, description, image, key) {
      this.dataProduct.name = name;
      this.dataProduct.price = price;
      this.dataProduct.description = description;
      this.dataProduct.image = image;
      this.dataProduct.key = key;
    },
    async updateProduct() {
      try {
        const productRef = doc(projectFirestore, 'products', this.dataProduct.key);
        await updateDoc(productRef, {
          name: this.dataProduct.name,
          price: this.dataProduct.price,
          description: this.dataProduct.description,
          image: this.dataProduct.image
        });
        this.messageSuccess = 'Product updated!';
        this.fetchProducts();
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    },
    async deleteProduct(key) {
      try {
        const productRef = doc(projectFirestore, 'products', key);
        await deleteDoc(productRef);
        this.messageSuccess = 'Product deleted!';
        this.fetchProducts();
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style>
.navbar {
  margin-bottom: 20px;
}

.content {
  padding: 20px;
}
</style>
