<template>
    <div class="text-center">
        <v-overlay :value="overlay" class="flex-column">
            <p>Processing order...</p>
            <v-progress-circular indeterminate size="64" />
        </v-overlay>
        <v-container v-if="!overlay">
            <v-row>
                <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
                    <h2> Thank you for your purchase! It will be shipped soon. </h2>
                </v-col>
            </v-row>
            <div class="text-center"><br>
                <v-card class="elevation-16 mx-auto" width="300">
                    <v-card-title class="text-h5">
                        Rate Our Bookstore
                    </v-card-title>
                    <v-card-text>
                        If you enjoy using bookstore, please take a few seconds to rate your experience with the
                        bookstoreapp. It really helps!
                        <div class="text-center mt-12">
                            <v-rating v-model="rating" color="yellow darken-3" background-color="grey darken-1"
                                empty-icon="$ratingFull" half-increments hover large></v-rating>
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions class="justify-space-between">
                    </v-card-actions>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'ThankYou',
    data() {
        return {
            overlay: false,
            rating: 2.5,
        }
    },
    mounted() {
        setTimeout(() => {
            this.overlay = false
        }, 3000)
    },
    beforeMount() {
        this.overlay = true
    }
}
</script>
