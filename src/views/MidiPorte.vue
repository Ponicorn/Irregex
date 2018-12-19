<template>
  <div class="midiPorte">
    <h1>Voir midi à sa porte</h1>
    <div class="content-wrap">
      <div class="content">
        <div id="porte" :class="{ ouvert }">
          <img src="../assets/porte.png" alt="Une porte">
        </div>
        <div id="midi">
          <img src="../assets/midi.png" alt="L'heure">
        </div>
      </div>
    </div>
    <div class="actions">
      <button @click="ouvert = !ouvert" class="btn">
        {{ ouvert ? 'Désouvrir' : 'Ouvrir' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MidiPorte',
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
