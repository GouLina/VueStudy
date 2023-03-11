<template>
  <div>
    <h2>这是left组件</h2>
    <Con></Con>
  </div>
</template>

<script>
export default {

}
</script>

<style lang=less scoped>

div {
    float: left;
    padding: 30px;
    width: 50%;
    height: 300px;
    background-color: pink;

}

/deep/ h3 {
    color: aquamarine;
 }
</style>