<template>
  <div class="header"> 
    <b-nav pills class="nav">
      <b-nav-item >   
        <RouterLink
        class="header__nav__link"
        :to="{ name: 'weather'}"
        >Weather</RouterLink>
      </b-nav-item>
      <b-nav-item>
        <RouterLink
        class="header__nav__link"
        :to="{ name: 'favorites'}"
        >Favorites</RouterLink>
      </b-nav-item>
  
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .header{
    margin-top: 1rem;
  }
  .nav {
    display: flex;
    justify-content: center;
  }
</style>

