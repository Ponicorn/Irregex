<template>
  <div class="perche">
    <h1>Tendre une perche</h1>
    <Expression>
      <div id="perche" :class="{ tendu }">
        <img src="../assets/perche.png" alt="Une perche">
      </div>
    </Expression>
    <Actions :precedent="precedent" :suivant="suivant">
      <button @click="tendu = !tendu" class="btn">
        {{ tendu ? 'Détendre' : 'Tendre' }}
      </button>
    </Actions>
  </div>
</template>

<script>
import Expression from '@/components/Expression.vue'
import Actions from '@/components/Actions.vue'

export default {
  name: 'Perche',
  props: [ 'precedent', 'suivant' ],
  components: { Expression, Actions },
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
