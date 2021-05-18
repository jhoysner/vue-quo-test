
<template>
    <div>
        <div class="d-flex justify-content-center">
            <b-form-input v-model="search" placeholder="Nombre" style="width: 49%;"></b-form-input>
        </div>
        <b-list-group>
        <b-list-group-item v-for="(value, index) in favoritosByName" :key="index+value.id" class="list-class">
                <FavoriteItem :item="value" :position="index" :key="index+value.id"/>
        </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>

import FavoriteItem from './FavoriteItem'
import Bus from "../utils/EventBus";

export default {
    name: "FavoriteList",
    components: {
        FavoriteItem
    },
   
    data(){
        return {
            favoritos: [],
            search: '',
        }
    },
    mounted(){
        this.loadFavorite();
    },
    methods: {
        removeFavorite(value, index){
            let favoritos = JSON.parse(localStorage.getItem('favoritos'));
            favoritos.splice(index, 1);
            localStorage.setItem('favoritos',  JSON.stringify(favoritos))
            this.loadFavorite();
            this.showToast();
        },
        loadFavorite(){
            if (localStorage.getItem('favoritos')) {
                    this.favoritos = JSON.parse(localStorage.getItem('favoritos'));
                    console.log(this.favoritos);
            }
        },
       
    },
    created: function () {
        Bus.$on('removeFavorite', function (value, index) {
          this.removeFavorite(value,index)
        }.bind(this));
    },
    
    beforeDestroy() {
        Bus.$off('removeFavorite');
    },
    computed:{

        favoritosByName(){
            let filteredfavorites = this.favoritos.filter((fav) => {
                return fav.name.toLowerCase().includes(this.search.toLowerCase());
            })
            return filteredfavorites;
        }
    }
};
</script>

<style scoped>
    .list-class{
        display: flex;
        justify-content: center;
    }
    .list-group-item {
        position: relative;
        display: block;
        padding: 0.5rem 1rem;
        color: #212529;
        text-decoration: none;
        background-color: #fff;
        border: 0 !important;
    }
</style>