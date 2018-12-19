<template>
  <div class="actions">
    <button class="btn" v-if="precedent"> &larr; </button>
    <slot></slot>
    <button class="btn" v-if="suivant"> &rarr; </button>
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

</style>
