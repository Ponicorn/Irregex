<template>
  <div class="hommeAverti">
    <h1>Un homme averti en vaut deux</h1>
    <Expression>
      <div id="homme1" :class="{ averti }">
        <img src="../assets/homme.png" alt="Un homme">
      </div>
      <div id="homme2" :class="{ averti }">
        <img src="../assets/homme.png" alt="Un homme">
      </div>
    </Expression>
    <Actions :precedent="precedent" :suivant="suivant">
      <button @click="averti = !averti" class="btn">
        {{ averti ? 'Désavertir' : 'Avertir' }}
      </button>
    </Actions>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Expression from '@/components/Expression.vue'
import Actions from '@/components/Actions.vue'

defineProps([ 'precedent', 'suivant' ])
const averti = ref(false)
</script>
