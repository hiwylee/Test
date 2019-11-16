<template>
  <div class="todo-item">
    <li>{{todo.text}}</li>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: []
  } ,
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  background-color: black;
  color: aqua;
  border: 'solid 1px gray';
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
