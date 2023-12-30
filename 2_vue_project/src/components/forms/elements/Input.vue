<template>
  <div>
    <label :for="name">{{name}}</label>
    <input :id="name" :type="type" :name="name" :placeholder="placeholder" :required="require" ref="input">
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 10px;
  }
</style>

<script>
  export default {
    name: 'Input',
    props: {
      id: String,
      type: String,
      require: Boolean,
      placeholder: String,
      value: String,
      name: String
    }
  }
</script>