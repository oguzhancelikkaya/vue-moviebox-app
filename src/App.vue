
<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter></appFooter>
  </div> 
</template>

<script>
import Header from './view/Header.vue';
import Footer from './view/Footer.vue';
export default {
  components:{
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style lang="scss">

</style>
