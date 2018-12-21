<template>
  <div class="home">
    <h1>Expressions Irregulières</h1>
    <router-link tag="p" to="perche">Tendre une perche</router-link>
    <router-link tag="p" to="avertir">Un homme averti en vaut deux</router-link>
    <router-link tag="p" to="midi">Voir midi à sa porte</router-link>
  </div>
</template>

<style lang="scss" scoped>
.home {
  text-align: center;
  p {
    text-decoration: underline;
    color: #1f3a93;
    cursor: pointer;
    font-size: 1.1em;
    margin: 30px 0;
  }
}
</style>
