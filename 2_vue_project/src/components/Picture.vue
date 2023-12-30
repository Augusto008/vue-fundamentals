<template>
  <div>
    <img :src="avatar" :alt="description" width="120px">
    <ChangeImageButton @change-image="changeImage" />
  </div>
</template>

<script>
  import ChangeImageButton from './forms/elements/ChangeImageButton.vue';

  export default {
    name: 'Picture',
    data() {
        return {
            avatar: 'img/wolf.webp',
            description: "User Avatar"
        };
    },
    components: { 
      ChangeImageButton 
    },
    methods: {
      changeImage() {
        this.avatar = 'img/abutre.jpg'
      }
    }
  }
</script>