<template>
  <v-card outlined min-width="100%" class="mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img :src="product.book.profilePic" width="120px" height="120px" />
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.book.bookName }}
        </v-card-title>
        <div> &nbsp;&nbsp;
          <v-btn  :disabled="product.quantity <= 1 " @click="decrement(product.cartId, product.quantity, product.totalPrice)"> -</v-btn>&nbsp
          <v-btn> {{ product.quantity }}</v-btn>&nbsp
          <v-btn @click="increment(product.cartId, product.quantity, product.totalPrice)"> +</v-btn>
        </div>
        <v-card-subtitle>
          ${{ product.book.price * product.quantity }}
        </v-card-subtitle>
        <v-btn color="error" class="ml-4" outlined small @click="remove(product.cartId)">
          <v-icon small left>mdi-minus</v-icon>
          Remove from Cart
        </v-btn>
        <v-snackbar v-model="snackbar2">
          {{ texts }}
          <template v-slot:action="{ attrs }">
            <v-btn color="success" text v-bind="attrs" @click="snackbar2 = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
        <v-snackbar v-model="snackbar">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
  </v-card>
</template>

<script>
import CartService from '../../Service/CartService';
export default {
  name: 'HorizontalProduct',
  props: {
    product: Object,
  },
  data() {
    return {
      cartTotalPrice: 0,
      counter: 1,
      cartData: [],
      snackbar: false,
      snackbar2: false,
      texts: 'Cart Item updated Successfully!!',
      text: 'Cart Item deleted Successfully!!',
    }
  },
  computed: {
    updateCartIteams() {
      return {
        cartId: this.cartId,
        quantity: this.quantity,
        totalPrice: this.totalPrice,
      }
    },

  },
  methods: {
    increment(cartId, quantity, totalPrice) {
      console.log(cartId, quantity, totalPrice);
      this.counter = quantity,
        this.counter++;
      console.log(this.counter);
      this.cartTotalPrice = totalPrice * this.counter;
      console.log(this.cartTotalPrice);
      CartService.updateCart(cartId, this.counter, this.cartTotalPrice)
        .then((response) => {
          console.log(response.data.data);
          this.cartData = response.data.data;
          this.snackbar2 = true
          window.location.reload();
          this.snackbar2 = true
        })
      this.snackbar = true
        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while edting the data!");
        });
    },
    getCartById(id) {
      CartService.getCartById(id)
        .then((response) => {
          let object = response.data.data;
          this.setData(object);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setData(obj) {
      console.log(obj);
      this.id = obj.id;
      this.quantity = obj.quantity;
      this.totalPrice = obj.totalPrice;
      console.log(this.form);
    },
    decrement(cartId, quantity, totalPrice) {
      console.log(cartId, quantity, totalPrice);
      this.counter = quantity,
        this.counter--;
      console.log(this.counter);
      this.cartTotalPrice = totalPrice - this.counter;
      console.log(this.cartTotalPrice);
      CartService.updateCart(cartId, this.counter, this.cartTotalPrice)
        .then((response) => {
          console.log(response.data.data);
          this.cartData = response.data.data;
          window.location.reload();
        })
      this.snackbar2 = true
        .catch((error) => {
          console.log(error);
          alert("WARNING!! Error while edting the data!");
        });
    },

    getCartById(id) {
      CartService.getCartById(id)
        .then((response) => {
          let object = response.data.data;
          this.setData(object);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setData(obj) {
      console.log(obj);
      this.id = obj.id;
      this.fullquantityName = obj.quantity;
      this.totalPrice = obj.totalPrice;
      console.log(this.form);
    },

    displayMessage() {
      console.log("Cart is here");
    },
    remove(id) {
      console.log(id);
      var answer = window.Boolean(
        "Press ok to delete Cart Item..."
      );
      if (answer === true) {
        CartService.deleteCartById(id)
          .then((data) => {
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          })
          .catch((error) => {
            alert("Something Went Wrong!");
          });
        this.snackbar = true
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