<template>
  <div class="perche">
    <h1>Tendre une perche</h1>
    <div class="content-wrap">
      <div class="content">
        <div id="perche" :class="{ tendu }">
          <img src="../assets/perche.png" alt="Une perche">
        </div>
      </div>
    </div>
    <div class="actions">
      <button @click="tendu = !tendu" class="btn">
        {{ tendu ? 'Détendre' : 'Tendre' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Perche',
  data () {
    return {
      tendu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.perche {
  text-align: center;
  #perche {
    img  {
      transition: 1s;
    }
    &.tendu img {
      // On a une largeur max de 75% de l'écran
      // avec un scale a 1.3 on est toujours dedans garanti
      transform: scale(1.3,0.7);
    }
  }
}
</style>
