<template>
  <div>
    <button @click="turn">Click</button>
    <span v-show="activate">Activated!</span>
  </div>
</template>

<script>
  export default {
    name: 'Reuse',
    data() {
      return {
        activate: false
      }
    },
    methods: {
      turn() {
        this.activate = !this.activate
      }
    }
  }

</script>