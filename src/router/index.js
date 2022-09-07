import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductDispaly from '../components/Store/ProductDisplay.vue'
import PopularProducts from '../components/Home/PopularProducts'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ThankYou from '../views/ThankYou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ProductDispaly',
    name: 'ProductDispaly',
    component:ProductDispaly
  },
  {
    path: '/',
    name: 'PopularProducts',
    component:PopularProducts
  },
  {
  path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/checkout',
      name: 'Checkout',
      component:Checkout
    },
    {
      path: '/thankyou',
        name: 'ThankYou',
        component:ThankYou
      },
      
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
