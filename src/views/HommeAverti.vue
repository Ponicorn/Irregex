<template>
  <div class="hommeAverti">
    <h1>Un homme averti en vaut deux</h1>
    <div class="content-wrap">
      <div class="content" :class="{ averti }">
        <div id="homme1">
          <img src="../assets/homme.png" alt="Un homme">
        </div>
        <div id="homme2">
          <img src="../assets/homme.png" alt="Un homme">
        </div>
      </div>
    </div>
    <div class="actions">
      <button @click="averti = !averti" class="btn">
        {{ averti ? 'Désavertir' : 'Avertir' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HommeAverti',
  data () {
    return {
      averti: false
    }
  }
}
</script>

<style lang="scss" scoped>
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

    &.averti {
      #homme1 img{
        transform:translate(calc(-50% - 5px));
        z-index: 20;
      }

      #homme2 img{
        transform:translate(calc(50% + 5px));
      }
    }
  }
}
</style>
