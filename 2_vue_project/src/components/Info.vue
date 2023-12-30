<template>
  <div>
    <p v-if="working">I'm working at the moment:</p>
    <p v-else>I'm not working at the moment:</p>
    <Reuse />
    <Reuse />
    <Reuse />
    <Reuse />
    <p>I use these languages:</p>
    <ul>
      <li v-for="(technology, index) in technologies" v-bind:key="index">{{technology}}</li>
    </ul>
    <p>And I'm use these frameworks too:</p>
    <ul>
      <li v-for="framework in frameworks" :key="framework.id">{{framework.framework}}</li>
    </ul>
    <button @click="showEmailOpt" type="button">{{buttonText}}</button>
    <p v-show="showEmail">Send a message to: {{emailAddress}}</p>
    <Form1 action="action" method="POST"/>
    
  </div>
</template>
<script>
  import Reuse from './Reuse.vue'
  import Input from './forms/elements/Input.vue'
  import Form1 from './forms/templates/Form1.vue'
  export default {
    name: 'Info',
    data() {
      return {
        working: false,
        showEmail: false,
        emailAddress: "aquila.real0@gmail.com",
        buttonText: "Show Email",
        technologies: ['C', 'JavaScript', 'PHP', 'Python'],
        frameworks: [
          {id: 1, framework: 'Laravel'},
          {id: 2, framework: 'Bootstrap'},
          {id: 3, framework: 'Node.js'},
          {id: 4, framework: 'Vue.js'}
        ]
      }
    },
    components: {
      Form1,
      Input,
      Reuse
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