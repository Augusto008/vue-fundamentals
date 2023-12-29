<template>
  <div>
    <p v-if="working">I'm working at the moment:</p>
    <p v-else>I'm not working at the moment:</p>
    <p>I use these languages:</p>
    <ul>
      <li>C</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>Python</li>
    </ul>
    <button @click="showEmailOpt">{{buttonText}}</button>
    <p v-show="showEmail">Send a message to: {{emailAddress}}</p>
  </div>
</template>
<script>
  export default {
    name: 'Info',
    data() {
      return {
        working: false,
        showEmail: false,
        emailAddress: "aquila.real0@gmail.com",
        buttonText: "Show Email"
      }
    },
    methods: {
      showEmailOpt() {
        this.showEmail = !this.showEmail
        if(!this.showEmail) {
          this.buttonText = "Show Email"
        } else {
          this.buttonText = "Hide Email"
        }
      }
    }
  }
</script>