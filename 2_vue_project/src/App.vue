<template>
  <div>
    <FirstComponent />
    <LifeCycle />
    <Person />
    <ActionButton id="button-id" classes="button-classes" type="button" content="Button Test" event="click" jsAction="buttonFunction" />
    <ActionButton id="button2-id" classes="button-classes" type="button" content="Button2 Test" event="mouseover" jsAction="buttonActive" />
    <ActionButton id="button3-id" classes="button-classes" type="button" content="Button3 Test" event="focus" jsAction="buttonMouseover" />
  </div>
</template>

<script>

  import FirstComponent from './components/FirstComponent.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import Person from './components/Person.vue';
  import ActionButton from './components/forms/elements/ActionButton.vue';

  export default {
    name: 'App',
    components: {
      ActionButton,
      FirstComponent,
      LifeCycle,
      Person
    }
  }
</script>
