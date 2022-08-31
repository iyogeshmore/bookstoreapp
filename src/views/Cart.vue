<template>
  <v-container>
    <v-row>
      <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
        <ProductList />
      </v-col>
      <v-col sm="4" md="3" order="first" order-sm="last">
        <CheckoutBox />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductList from '../components/Cart/ProductList.vue'
import CheckoutBox from '../components/Cart/CheckoutBox.vue'
export default {
  name: 'Cart',
  components: {
    ProductList,
    CheckoutBox,
  },
}
</script>
