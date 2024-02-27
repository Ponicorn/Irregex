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
    <Actions :precedent="precedent" :suivant="suivant">
      <button @click="ouvert = !ouvert" class="btn">
        {{ ouvert ? 'Désouvrir' : 'Ouvrir' }}
      </button>
    </Actions>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Expression from '@/components/Expression.vue'
import Actions from '@/components/Actions.vue'

defineProps([ 'precedent', 'suivant' ])
const ouvert = ref(false)
</script>
