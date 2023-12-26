<template>
  <h1>My name is {{ name }}</h1>
</template>

<script>
  export default {
    name: 'LyfeCycle',
    data() {
      return {
        name: 'Still don\'t know' 
      }
    },
    created() {
      setTimeout(() => {
        this.name = "José"
      }, 5000)
    },
    mounted() {
      setTimeout(() => {
        this.name = "Pedro"
      }, 10000);
    }
  }
</script>