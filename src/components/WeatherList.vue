
<template>
    <b-list-group class="list-class">
      <b-list-group-item v-for="value in data" :key="value.id">
            <WeatherDetail :item="value"  :key="value.id"/>
      </b-list-group-item>
    </b-list-group>
</template>

<script>

import WeatherDetail from './WeatherDetail'
import Bus from "../utils/EventBus";

export default {
    name: "WeahterList",
    components: {
        WeatherDetail
    },
    data(){
        return {
        data: [],
        }
    },
    methods: {
    addFavorite(value){
        console.log(value)

        if (localStorage.getItem('favoritos')) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos'));
            localStorage.setItem('favoritos',  [])
            let newValue = [...favoritos, value] 
            localStorage.setItem('favoritos',  JSON.stringify(newValue))
        }
        else{
            let favoritos = [];
            favoritos = [...favoritos, value] 
            localStorage.setItem('favoritos', JSON.stringify(favoritos))
        }
       
    }
    },
    created: function () {
        Bus.$on('addFavorite', function (value) {
          this.addFavorite(value)
        }.bind(this));
    },

    beforeDestroy() {
        Bus.$off('addFavorite');
    },

    mounted(){
            this.axios
            .get("http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=60b53dc06e7cb09728684c870e9d860e")
            .then(response => {
                console.log(response.data.list)
                this.data = response.data.list;
        
            });
     
    },
    computed: {
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