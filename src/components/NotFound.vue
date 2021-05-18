<template>
  <div class="not-found">
     Ruta no Encontrada
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.not-found {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  color: black;
  font-size: 3rem;
}
</style>