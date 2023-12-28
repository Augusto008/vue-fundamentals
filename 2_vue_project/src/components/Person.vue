<template>
  <div>
    <h2>{{ Person }}</h2>
    <Info />
  </div>
</template>
<script>
  import Info from './Info.vue';
  export default {
    name: 'Person',
    components: {
        Info
    },
    data() {
      return {
        name: "Ambrózio"
      }
    }
  }
</script>