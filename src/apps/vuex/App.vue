<template>
<div id="">
  <all-price></all-price>
  <banner></banner>
  <orange></orange>
</div>
</template>

<script>
//导入组件

import Banner from './components/banner'
import Orange from './components/orange'
import AllPrice from './components/allPrice'

export default {
    name: 'app',
    components: {
        Banner,
        Orange,
        AllPrice
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
