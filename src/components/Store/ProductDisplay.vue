<template>

  <v-container mb-12>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" elevation="6" outlined cols="6" sm="12">
          <v-select :items="items" filled label="Sort By"></v-select>
        </v-col>
      </v-row>
    </v-container>
    <center>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <h2> Books </h2> <br>
          <center>
            <v-btn @click="sortBookByName()" elevation="6" outlined>Sort by Book Name</v-btn>
            &nbsp &nbsp
            <v-btn @click="sortByLowToHighPrice()" elevation="6" outlined>Book Price Low to High</v-btn>
            &nbsp &nbsp
            <v-btn @click="sortByHighToLowPrice()" elevation="6" outlined>Book Price High to Low</v-btn>
            &nbsp &nbsp
          </center>
        </v-col>
      </v-row>
    </center>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col sm="6" md="4" v-for="product in bookData" :key="product.name">
            <VerticalProduct :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import BookService from "@/Service/BookService";
import VerticalProduct from "../Card/VerticalProduct.vue"

export default {
  name: 'productDisplay',
  components: { VerticalProduct, },
  data() {
    return {
      bookData: [],
      snackbar: false,
      text: `Item added cart sucesfully!!`,
      items: ['Book Name',
        'Low To High Price',
        'High To Low Price'],
    };
  },
  methods: {
    sortBookByName() {
      BookService.sortBookByName().then((response) => {
        console.log(response.data.data);
        this.bookData = response.data.data;
      });
      console.log("sort Book By Name");
    },
    sortByLowToHighPrice() {
      BookService.sortByLowToHighPrice().then((response) => {
        console.log(response.data.data);
        this.bookData = response.data.data;
      });
      console.log("sort By Low To High Price");
    },
    sortByHighToLowPrice() {
      BookService.sortByHighToLowPrice().then((response) => {
        console.log(response.data.data);
        this.bookData = response.data.data;
      });
      console.log("sort By High To Low Price");
    },
    getAllBooks() {
      BookService.getAllBooks().then((response) => {
        console.log(response.data.data);
        this.bookData = response.data.data;
        this.displayMessage();
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