  <template>
  <div class="container">
    <h1 style="text-align: center;">All Products</h1>
    <div class="row">
      <div class="card" style="width: 18rem;" v-for="item in products" :key="item.key">
        <img :src="item.image" class="card-img-top" :alt="item.name">
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <h5 class="card-title">{{ item.price }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>


  
<script>
import { projectFirestore } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default {
  name: 'ProductsView',
  data() {
    return {
      products: [],
      ref: collection(projectFirestore, 'products'),
    };
  },
  created() {
    // Utilisation de onSnapshot pour écouter les modifications dans la collection
    onSnapshot(this.ref, (querySnapshot) => {
      this.products = [];
      querySnapshot.forEach((doc) => {
        this.products.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
          image: doc.data().image,
        });
      });
    }, (error) => {
      console.error('Error fetching products: ', error);
    });
  },
};

</script>

<style scoped>
</style>