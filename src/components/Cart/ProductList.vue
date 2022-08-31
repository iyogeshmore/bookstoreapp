<template>
    <div>
        <h2 class="mt-5">cart Items</h2>&nbsp;
        <v-row v-for="product in cartData" :key="product.name">
            <HorizontalProduct :product="product" btnAction="removeFromCart" />
        </v-row>
        <center>
            <v-btn :disabled="!cartIsEmpty" color="red" outlined small @click="deleteAllCartData()">
                <v-icon small left>mdi-minus</v-icon>
                Empty Cart
            </v-btn>
        </center>
    </div>
</template>

<script>
import HorizontalProduct from '../Card/HorizontalProduct.vue'
import CartService from '../../Service/CartService'
export default {
    components: {
        HorizontalProduct,
    },
    data() {
        return {
            cartData: [],
            cartIsEmpty: true,
        }
    },
    methods: {
        GetAllCartData() {
            CartService.GetAllCartData().then((response) => {
                console.log(response.data.data);
                this.cartData = response.data.data;
            });
        },
        deleteAllCartData() {
            CartService.deleteAllCartData().then((response) => {
                console.log(response.data.data);
                this.cartData = response.data.data;
                window.location.reload();
                this.cartIsEmpty = false
            });
            this.cartIsEmpty = false
        },
        displayMessage() {
            console.log("Cart is here");
        },
    },
    created() {
        this.displayMessage();
        this.GetAllCartData();
    },
}
</script>
