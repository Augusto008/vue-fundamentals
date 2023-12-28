<template>
  <div>
    <Picture />
    <h2>{{ Person }}</h2>
    <Info />
  </div>
</template>
<script>
  import Info from './Info.vue';
  import Picture from './Picture.vue';
  export default {
    name: 'Person',
    components: {
        Info,
        Picture
    },
    data() {
      return {
        name: "Ambrózio"
      }
    }
  }
</script>