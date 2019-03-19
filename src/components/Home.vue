<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                        <v-carousel>
                            <v-carousel-item
                                    v-for="ad in ads"
                                    :key="ad.id"
                                    :src="ad.imgSrc"
                            >
                                <div class="item-link">
                                    <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                                </div>
                            </v-carousel-item>
                        </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container
            grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="ad of ads"
                        :key="ad.id">
                    <v-card>
                        <v-img
                                :src="ad.imgSrc"
                                aspect-ratio="2.75"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ ad.title }}</h3>
                                <div> {{ ad.description }} </div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn :to="'/ad/' + ad.id" flat>More</v-btn>
                            <v-btn raised class="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
    export default {
        data () {
            return{
                ads: [
                    {
                        title: 'Sekiro',
                        description: 'Hello, stranger',
                        promo: false,
                        imgSrc: 'https://www.actugaming.net/wp-content/uploads/2018/08/Sekiro.jpg',
                        id: '1'
                    },
                    {
                        title: 'God of war IV',
                        description: 'Hello, stranger',
                        promo: true,
                        imgSrc: 'http://hdqwalls.com/wallpapers/god-of-war-4-2018-oo.jpg',
                        id: '12'
                    },
                    {
                        title: 'Devil may cry V',
                        description: 'Hello, stranger',
                        promo: true,
                        imgSrc: 'https://cdn.wccftech.com/wp-content/uploads/2018/06/Devil-May-Cry-5-livestream.jpg',
                        id: '123'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .item-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>