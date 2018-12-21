<template>
  <div class="actions">
    <div class="nav">
      <router-link tag="button" class="btn nav" v-if="precedent" :to="precedent">&larr;</router-link>
    </div>
    <div class="slot">
      <slot></slot>
    </div>
    <div class="nav">
      <router-link tag="button" class="btn nav" v-if="suivant" :to="suivant">&rarr;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'precedent',
    'suivant'
  ]
}
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
  .nav {
      width: 50px;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    .btn {
      border: none;
      text-align: center;
    }
  }
  .slot {
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
