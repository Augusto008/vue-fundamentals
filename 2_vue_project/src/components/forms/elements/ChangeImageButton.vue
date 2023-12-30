<template>
  <div>
    <button @click="$emit('changeImage')">Change Image</button>
  </div>
</template>

<script>
  export default {
    name: "ChangeImageButton",
    emits: ["changeImage"]
  }
</script>