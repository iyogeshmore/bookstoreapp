<template>
  <v-card outlined class="mt-10">
    <v-img :src="product.profilePic" width="250 " height="200px" contain />
    <v-card-title>{{ product.bookName }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
    <v-card-subtitle>author: {{ product.authorName }}</v-card-subtitle>
    <v-card-actions>
      <template>
        <div class="text-center ma-2">
          <v-btn dark color="blue-grey darken-2" @click="addCart(product.bookId)">
            <v-icon small left>mdi-plus</v-icon>
            add To Cart
          </v-btn>
          <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import CartService from '../../Service/CartService';
export default {
  name: 'verticalProduct',
  props: {
    product: Object,
  },
  data() {
    return {
      bookData: [],
      snackbar: false,
      text: 'Item added to cart !!!',
      bookQuantity: 1,
    }
  },
  methods: {
    addCart(bookId) {
      let cartDTO = {
        book_Id: bookId,
        quantity: this.bookQuantity,
      }
      console.log(cartDTO);
      CartService.addCart(cartDTO)
        .then((response) => {
          console.log(response);
          console.log(response.data.data);
          this.CartItems = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while adding the Cart!");
        })
      this.snackbar = true
    },
  }
};
</script>
