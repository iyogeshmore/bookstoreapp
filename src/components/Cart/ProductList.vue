<template>
    <div>
        <section v-if="count > 0" justify="center">
            <h2 class="mt-5">cart Items {{ count }} </h2> &nbsp;
            <v-row v-for="product in cartData" :key="product.name">
                <HorizontalProduct :product="product" btnAction="removeFromCart" />
            </v-row>
            <center>
                <v-btn color="red" outlined small @click="deleteAllCartData()">
                    <v-icon small left>mdi-minus</v-icon>
                    Empty Cart
                </v-btn>
            </center>
            <v-snackbar v-model="snackbar">
                {{ text }}
                <template v-slot:action="{ attrs }">
                    <v-btn color="success" text v-bind="attrs" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </section>
        <section v-else>
            <v-card class="mx-auto" max-width="344">

                <v-row align="center" justify="center">
                    <v-col cols="20">
                        <center>
                            <v-card-text>
                                <h2 class="light-green lighten-2 text-center">Your Card</h2>
                                <img src="../../../public/assets/cart.jpg" width="300" />
                                <router-link to="/">
                                    <h3>You can go back to home page to view more books.</h3>
                                </router-link>
                            </v-card-text>
                        </center>
                    </v-col>
                </v-row>
            </v-card>
        </section>
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
            count: '',
            snackbar: false,
            text: 'All Items Removed From Cart.',
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
        },
        
        deleteAllCartData() {
            CartService.deleteAllCartData().then((response) => {
                console.log(response.data.data);
                this.cartData = response.data.data;
                window.location.reload();
            });
            this.snackbar = true
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
