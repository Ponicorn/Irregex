<template>
  <div class="midiPorte">
    <h1>Voir midi à sa porte</h1>
    <Expression>
      <div id="porte" :class="{ ouvert }">
        <img src="../assets/porte.png" alt="Une porte">
      </div>
      <div id="midi">
        <img src="../assets/midi.png" alt="L'heure">
      </div>
    </Expression>
    <Actions>
      <button @click="ouvert = !ouvert" class="btn">
        {{ ouvert ? 'Désouvrir' : 'Ouvrir' }}
      </button>
    </Actions>
  </div>
</template>

<script>
import Expression from '@/components/Expression.vue'
import Actions from '@/components/Actions.vue'

export default {
  name: 'MidiPorte',
  components: { Expression, Actions },
  data () {
    return {
      ouvert: false
    }
  }
}
</script>

<style lang="scss" scoped>
.midiPorte {
  text-align: center;
  .content {
    position: relative;
    #porte, #midi {
      position: absolute;
    }

    #porte{
      z-index: 10;
      img {
        transform-origin: left;
        transition: 1s;
      }
    }

    #porte.ouvert img{
      transform: perspective(1000px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
    }
  }
}
</style>
