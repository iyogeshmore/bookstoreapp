<template>
  <div>
    <v-card outlined>
      <v-card-title>Payment Details</v-card-title>
      <v-card-text>
        <v-text-field label="name" />
        <v-text-field label="email" />
        <p>Total: ${{totalCartPrice}}</p>
        <v-btn to="/Checkout" text color="primary" @click="goToCheckout">
          Checkout
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkoutForm: null,
      nameRules: [],
      name: '',
      emailRules: [],
      email: '',
      totalCartPrice:''
    }
  },
  methods:{
    totalCartPrice(){
      product.book.price * counter
      console.log(totalCartPrice);
    }
  }
}
</script>
