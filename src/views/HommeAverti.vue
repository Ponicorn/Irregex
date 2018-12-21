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

<script>
import Expression from '@/components/Expression.vue'
import Actions from '@/components/Actions.vue'

export default {
  name: 'HommeAverti',
  props: [ 'precedent', 'suivant' ],
  components: { Expression, Actions },
  data () {
    return {
      averti: false
    }
  }
}
</script>

<style lang="scss">
.hommeAverti {
  text-align: center;

  .content {
    position: relative;
    #homme1, #homme2 {
      width: 50%;
      position: absolute;
      img {
        transition: 1s;
      }
    }
    #homme1.averti img{
      transform:translate(calc(-50% - 5px));
      z-index: 20;
    }

    #homme2.averti img{
      transform:translate(calc(50% + 5px));
    }
  }
}
</style>
