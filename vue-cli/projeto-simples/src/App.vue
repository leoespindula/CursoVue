<template>
  <div id="app">
    <h1>{{titulo}}</h1>
    <button @click="titulo += '#'">Alterando Titulo</button>
  </div>


</template>

<script>
  export default {
    data: function(){
      return{
        titulo:'Teste data usando Vue js'
      }
    }
  }
</script>

<style>
  #app{
    background-color: chocolate;
    color: #fff;
  }
</style>
