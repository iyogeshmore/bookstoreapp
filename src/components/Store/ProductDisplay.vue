<template>
  <v-container mb-12>
    <center>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <h2> Books</h2><br>
          <center>
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <v-icon small left>mdi-filter</v-icon>
                    Filter
                  </v-btn>
                </template>
                <v-list>
                  <P> Available Books: {{ count }}</P>
                  <v-list-item @click="sortBookByName">
                    <v-list-item-title>Book Name</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="sortByLowToHighPrice">
                    <v-list-item-title>Price Low to High</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="sortByHighToLowPrice">
                    <v-list-item-title>Price High to Low</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
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
      count: [],
      snackbar: false,
      text: `Item added cart sucesfully!!`,
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
        this.count = response.data.data.length;
        console.log(this.count);
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