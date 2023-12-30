<template>
  <form @submit="send($event)" :action="action" :method="method" >
    <loginLayout />
  </form>
</template>

<style scoped>
  form {
    width: fit-content;
    margin: 40px 10px 40px 10px;
    padding: 0 10px 10px 10px;
    border: 2px solid black;
    border-radius: 10px;
  }
</style>

<script>
  import ActionButton from '../elements/ActionButton.vue';
  import LoginLayout from '../layouts/LoginLayout.vue';
  export default {
    name: 'Form1',
    props: {
      action: String,
      method: String
    },
    components: {
      LoginLayout,
      ActionButton
    },
    methods: {
      send(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        alert("Logged in: " + name + " => " + email);
      }
    }
  }
</script>