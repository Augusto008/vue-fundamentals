<template>
  <img :src="avatar" :alt="description" width="120px">
</template>

<script>
  export default {
    name: 'Picture',
    data() {
      return {
        avatar: 'img/wolf.webp',
        description: "User Avatar"
      }
    }
  }
</script>