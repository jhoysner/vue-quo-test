
<template>
    <div class="favorite-container">
    <b-card no-body class="overflow-hidden" style="width: 50%;">
        <b-row >
        <b-col md="6">
            <b-card-body :title="detail.name">
            <b-card-text>
                Temperatura : {{detail.main.temp}}<br>
                Humedad : {{detail.main.humidity}}<br>
                Presion : {{detail.main.pressure}}<br>
                Vientos : {{detail.wind.speed}}<br>
                Tiempo : {{detail.weather[0]['description']}}<br>
                Nubes : {{detail.clouds.today}}%<br>
            </b-card-text>
            </b-card-body>
        </b-col>
        <b-col md="6" class="removeFavorite">
              <b-button pill variant="danger" @click="removeFavorite(detail)">remove Favorito</b-button>
        </b-col>
        </b-row>
    </b-card>
    </div>
</template>

<script>

import Bus from "../utils/EventBus";

export default {
  name: "FavoriteItem",
  props:['item','position'],
  data(){
    return {
      detail: this.item,
      posicion: this.position,
    }
  },
  methods: {
    removeFavorite(value){
        Bus.$emit('removeFavorite', value, this.posicion);
   }
  },
};
</script>

<style scoped>
.removeFavorite{
    display:flex;
    justify-content: center;
    align-items: center;
}
.favorite-container{
    display: flex;
    width: 100%;
    justify-content: center;
}
</style>