<template>
  <v-container mb-12>
    <Header /> <Footer />
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>Popular Books
          <v-btn to="ProductDispaly" color="primary" small text>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col sm="6" md="4" v-for="product in bookData.slice(0, 3)" :key="product.name">
            <VerticalProduct :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookService from "@/Service/BookService";
import VerticalProduct from "../Card/VerticalProduct.vue";
import Footer from '../Home/Footer.vue'
import Header from "../Home/Header.vue";
export default {
  name: 'PopularProducts',
  components: { VerticalProduct, Footer, Header },
  data() {
    return {
      bookData: [],
      snackbar: false,
      text: `Item added cart sucesfully!!`,
    };
  },
  methods: {
    getAllBooks() {
      BookService.getAllBooks().then((response) => {
        console.log(response.data.data);
        this.bookData = response.data.data;
      });
    },

    displayMessage() {
      console.log("Welcome to Bookstore");
    },
  },
  created() {
    this.displayMessage();
    this.getAllBooks();
  },
};
</script>