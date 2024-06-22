<template>
  
  <div class="container">

    <br>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> New product </button>

<br>
<br>
<section style="background-color: #eee;">
  <div class="text-center container py-5">
    <h4 class="mt-4 "><strong>My Products </strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

     


      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              class="w-100" />
            <a href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">Product name</h5>
            </a>
            <a href="" class="text-reset">
              <p>Category</p>
            </a>
            <h6 class="mb-3">
              <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        
      </div>
      <div class="modal-body">
        <form style="width: 26rem;">
          <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Title</label>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="number" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Price</label>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Image</label>
  </div>
  <div data-mdb-input-init class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Description</label>
  </div>
          <br>
          <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" data-mdb-ripple-init>Save</button>
</div>

        </form>
       </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
</template>


  
<script>
export default {
  name: 'MyproductsView',
  components: {
  }
}
</script>

<style>

</style>
  