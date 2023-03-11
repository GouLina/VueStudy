<template>
  <div id="app">
    <h1>mmmm</h1>
    <div class="box">
      <Left></Left>
      <!-- <Right></Right> -->
      <Right></Right>
    </div>
  </div>
</template>

<script>

import Left from '@/components/left.vue'
import Right from '@/components/right.vue'



export default {
  name: 'App',
  components: {
   Right,
   Left
  }
}
</script>

<style>
#app {

  padding: 30px;
  /* height: 1000px; */
  color: #2c3e50;
  background-color: greenyellow;
}

.box {
  display: flex;
}
</style>
