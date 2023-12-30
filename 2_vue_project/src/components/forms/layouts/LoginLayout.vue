<template>
  <div>
    <h2>Login</h2>
    <Input id="name" type="text" name="name" placeholder="name" require="true"/>
    <Input id="email" type="email" name="email" placeholder="email" require="true"/>
    <ActionButton id="login" type="submit" content="Send"/>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    width: fit-content;
    margin: 10px;
  }
</style>

<script>
  import ActionButton from '../elements/ActionButton.vue';
  import Input from '../elements/Input.vue';

  export default {
    name: 'LoginLayout',
    components: {
      ActionButton,
      Input
    }
  }
</script>