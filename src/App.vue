<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <div id="main">
      <LeftMenu></LeftMenu>
      <div id="content"><div class="container-box"><router-view/></div></div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav'
import LeftMenu from './components/LeftMenu'
export default {
  name: 'App',
  components:{
    HeaderNav,
    LeftMenu
  }
}
</script>

<style>

</style>
