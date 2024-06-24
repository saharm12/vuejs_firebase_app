import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { projectAuth } from '../firebase' // Importer le module d'authentification

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/Products.vue'),
    meta: { requiresAuth: true } 

  },
  {
    path: '/my-products',
    name: 'my-products',
    component: () => import('../components/Myproducts.vue'),
    meta: { requiresAuth: true } // Ajoutez cette ligne pour les routes nécessitant une authentification
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../components/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//  Guard Auth
router.beforeEach((to, from, next) => {
  //meta require auth
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = projectAuth.currentUser

  if (requiresAuth && !currentUser) {
    next('/signin')
  } else {
    next()
  }
})

export default router
