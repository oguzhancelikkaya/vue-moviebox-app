
<template>
  <div>
    <appHeader></appHeader>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>  
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
    .slide-leave-active {
        transition: opacity .3s ease;
        opacity: 0;
        animation: slide-out .3s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in .3s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
