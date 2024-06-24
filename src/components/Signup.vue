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
        <div class="alert alert-success" v-if="messagerSuccess" role="alert">
        {{ messagerSuccess }}
      </div>
        <h5 class="card-title">Sign Up</h5>
        <form @submit.prevent="signUp">
          <div data-mdb-input-init class="form-outline mb-4">
            <input v-model="user.name" type="text" id="form1Example1" class="form-control" />
            <label class="form-label" for="form1Example1">Name</label>
          </div>
          <div data-mdb-input-init class="form-outline mb-4">
            <input v-model="user.email" type="email" id="form1Example1" class="form-control" />
            <label class="form-label" for="form1Example1">Email address</label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input v-model="user.password" type="password" id="form1Example2" class="form-control" />
            <label class="form-label" for="form1Example2">Password</label>
          </div>

          <button data-mdb-ripple-init type="submit" class="btn btn-primary btn-block">Sign up</button>
        </form>
      </div>
      <div class="alert alert-danger" v-if="messagerError" role="alert">
        {{ messagerError }}
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { projectAuth, projectFirestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import router from '../router/index';

export default {
  name: 'SignupView',
  components: {},
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        uid: ''
      },
      ref: collection(projectFirestore, 'users'),
      messagerError: '',
      messagerSuccess: ''

    };
  },
  methods: {
    async signUp() {
      try {
        const userCredential = await createUserWithEmailAndPassword(projectAuth, this.user.email, this.user.password);
        const user = userCredential.user;
        await addDoc(this.ref, {
          name: this.user.name,
          email: this.user.email,
          uid: user.uid
        });
        localStorage.setItem("uidUser", user.uid); // Enregistrez l'UID dans le localStorage
        this.messagerSuccess = 'Welcome!';
        router.push({ name: 'signin' });
      } catch (error) {
        console.error("Error signing up: ", error);
        this.messagerError = 'Invalid email and password';
      }
    }
  }
}
</script>

<style>
</style>
