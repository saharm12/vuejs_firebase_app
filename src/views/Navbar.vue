<template>
    
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;" >
  <div class="container-fluid">
    
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/"  >Home</router-link>
        </li>
        <li class="nav-item"  v-if="user">
          <router-link class="nav-link active"  aria-current="page" to="/about">About</router-link>
        </li>
        <li class="nav-item"  v-if="user" >
          <router-link class="nav-link active"  aria-current="page" to="/products">Products</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link class="nav-link active"  aria-current="page" to="/my-products">MyProducts</router-link>
        </li>
        <li class="nav-item"  v-if="!user">
          <router-link class="nav-link active"  aria-current="page" to="/signin">Signin</router-link>
        </li>
         <li class="nav-item" v-if="!user" >
          <router-link class="nav-link active"  aria-current="page" to="/signup">Signup</router-link>
        </li>
        <li class="nav-item" v-if="user">
          <a class="nav-link active" href="#" @click.prevent="logout">Logout</a>
        </li>
       
       
        
        
      </ul>
     
    </div>
  </div>
  
  <div class="content">
</div>
</nav>

</template>

<script>

import router from '../router/index';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { projectAuth } from '../firebase';

export default {

  name: 'NavbarView',
  components: {
  },

  data() {
    return {
      user: null
    } 
  },
  created(){
    onAuthStateChanged(projectAuth, (userAuth) => {
    if (userAuth) {
      console.log('User is logged in:', userAuth);
      this.user = userAuth;
    } else {
      console.log('No user is logged in');
      this.user = null;
    }
  });
  },
  methods:{
    logout(){
      signOut(projectAuth)
        .then(() => {
          router.push({ name: 'signin' });
        })
        .catch((error) => {
          console.error("Error signing out: ", error);
        });
    }
  
  },
}
</script>


<style>
.navbar {
  margin-bottom: 20px; 
}

.content {
  padding: 20px; 
}
</style>