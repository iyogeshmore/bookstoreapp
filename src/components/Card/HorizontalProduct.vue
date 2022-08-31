<template>
  <v-card outlined min-width="100%" class="mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img :src="product.book.profilePic" width="120px" height="120px" />
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{  product.book.bookName  }}
        </v-card-title>
        <div> &nbsp;&nbsp;&nbsp;
          <p class="ml-4">Quantity :
            <button @click="decrement">-</button>
            {{  counter  }}
            <button @click="increment">+</button>
          </p>
        </div>
        <v-card-subtitle>
          ${{  product.book.price * counter  }}
        </v-card-subtitle>
        <v-btn color="error" class="ml-4" outlined small @click="remove(product.cartId)">
          <v-icon small left>mdi-minus</v-icon>
          Remove from Cart
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import CartService from '@/Service/CartService';
export default {
  name: 'HorizontalProduct',
  props: {
    product: Object,
  },
  data() {
    return {
      counter: 1,
      cartData: []
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    displayMessage() {
      console.log("Cart is here");
    },
    remove(id) {
      console.log(id);
      var answer = window.confirm(
        "Press ok to delete Cart Item..."
      );
      if (answer === true) {
        CartService.deleteCartById(id)
          .then((data) => {
            alert("Cart Item deleted Successfully!!");
            window.location.reload();
          })
          .catch((error) => {
            alert("Something Went Wrong!");
          });
      } else {
        alert("Cart Item Not Deleted!!!");
      }
    },
  },
  created() {
    this.displayMessage();
  },
}
</script>