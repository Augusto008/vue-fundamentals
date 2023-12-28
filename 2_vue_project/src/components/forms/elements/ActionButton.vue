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
      alert("Button Clicked");
    },
    buttonActive() {
      alert("Activated");
      this.$refs.btn.setAttribute('active', 'true')
    },
    buttonMouseover() {
      this.$refs.btn.setAttribute('style', 'background-color: gray; color: white;');
    }
  }
};
</script>