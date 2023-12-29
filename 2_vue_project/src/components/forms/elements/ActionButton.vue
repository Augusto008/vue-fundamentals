<template>
  <button :id="id" :type="type" :class="classes" ref="btn">{{ content }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    classes: String,
    content: String,
    event: String,
    id: String,
    jsAction: String,
    type: String,
  },
  mounted() {
    this.$refs.btn.addEventListener(this.event, this[this.jsAction]);
  },
  beforeDestroy() {
    this.$refs.btn.removeEventListener(this.event, this[this.jsAction]);
  },
  methods: {
    buttonFunction() {
      console.log("Button Clicked");
    },
    buttonActive() {
      console.log("Activated");
      this.$refs.btn.setAttribute('active', 'true')
    },
    buttonMouseover() {
      if (this.$refs.btn.hasAttribute('style')) {
        console.log('remove style')
        this.$refs.btn.removeAttribute('style');
      } else {
        console.log('add style')
        this.$refs.btn.setAttribute('style', 'background-color: gray; color: white;');
      }
    }
  }
};
</script>