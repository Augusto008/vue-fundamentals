<template>
  <nav>
    <h1>Logo</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    margin: 0 2vw 0 2vw;
  }
  ul, nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  li {
    margin-right: 20px;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
    transition: 0.25s;
  }
  a:hover {
    font-weight: bold;
    transition: 0.25s;
  }
  h1 {
    color: red;
  }
</style>

<script>
  export default {
    name: 'HeaderLinks'
  }
</script>