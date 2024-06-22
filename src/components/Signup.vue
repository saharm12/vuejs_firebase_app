<template>
    <div class="container">
    <br>
    <br>
    <div class="alert alert-primary" role="alert">
      Welcome to Signup page!
    </div>
    <br>
    <br>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sign Up</h5>
        <form>
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form1Example1" class="form-control" />
            <label class="form-label" for="form1Example1">Email address</label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="form1Example2" class="form-control" />
            <label class="form-label" for="form1Example2">Password</label>
          </div>

        

          <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block">Sign up</button>
        </form>
      </div>
    </div>
  </div>
  </template>

  
<script>
export default {
  name: 'SignupView',
  components: {
  }
}
</script>

<style>
</style>
  