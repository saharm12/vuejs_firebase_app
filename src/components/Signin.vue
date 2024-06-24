<template>
  <div class="container">
    <br>
    <br>
    <div class="alert alert-primary" role="alert">
      Welcome to Signin page!
    </div>
    <br>
    <br>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sign In</h5>
        <form @submit.prevent="loginUser()">
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input v-model="user.email" type="text"  class="form-control" />
            <label class="form-label" >Email address</label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input  v-model="user.password"  type="password"  class="form-control" />
            <label class="form-label" >Password</label>
          </div>

          

          <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block">Sign in</button>
        </form>
        <div class="alert alert-danger"   v-if="messagerError" role="alert">
    {{ messagerError }}
</div>
      </div>
    </div>
  </div>
</template>


<script>
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { projectAuth } from '../firebase';

import router from '../router/index';
export default {
  name: 'SigninView',
  components: {},
  data(){
    return{ 
      user :{
        email:'',
        password:''
      },
      messagerError:''
    }

  },
  methods: {
    async loginUser() {
      try {
        const userCredential = await signInWithEmailAndPassword(projectAuth, this.user.email, this.user.password);
        const uid = userCredential.user.uid;
        localStorage.setItem("uidUser", uid); // Enregistrez l'UID dans le localStorage
        this.uid = uid; // Mettez à jour l'UID dans l'état du composant
        router.push({ name: 'home' }); // Redirigez l'utilisateur vers la page d'accueil
      } catch (error) {
        console.error('Error signing in: ', error);
        this.messagerError = 'Invalid email and password'; // Gestion des erreurs d'authentification
      }
    },
  }
  }
</script>

<style>
</style>
