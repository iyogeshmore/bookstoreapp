<template>
  <v-app>
    <v-main>
      <router-view />
      <VerticalProduct />
      <div>
        <v-app-bar app color="red" dark>
          <v-toolbar-title>Boookstore</v-toolbar-title>
          <v-spacer></v-spacer>
          <span class="hidden-sm-and-up">
            <v-btn @click.stop="drawer = !drawer">
              Menu
            </v-btn>
          </span>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn to="/" text>
              <v-icon small left>mdi-home</v-icon>
              Home
            </v-btn>
            <v-btn to="/ProductDispaly" text>
              <v-icon small left>mdi-store</v-icon>
              Store
            </v-btn>
            <v-btn to="cart" text>
              <v-badge left color="green">
                <span slot="badge">{{count}}</span>
              </v-badge>  
              <v-icon small left>mdi-cart </v-icon>
              Cart
            </v-btn>
          </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary right>
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
              <v-list-item-icon>
                <v-icon small>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import VerticalProduct from './components/Card/VerticalProduct.vue';
import CartService from './Service/CartService';
export default {
  name: 'App',
  components: { VerticalProduct, },
  data() {
    return {
      cartData:[],
      count:'',
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: 'ProductDispaly', icon: 'shopping-basket' },
        { title: 'Cart', link: 'cart', icon: 'shopping-cart' }
      ]
    }
  },
  methods: {
    GetAllCartData() {
            CartService.GetAllCartData().then((response) => {
                console.log(response.data.data);
                this.cartData = response.data.data;
                this.count = response.data.data.length;
        console.log(this.count);
      });
    }
  },
  created(){
    this.GetAllCartData();
  }
}
</script>
