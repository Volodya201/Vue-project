<template>
    <div>
        <FullscreenLoading />
        
        <main style="height: 100svh">
            <router-view />
        </main>
  </div>
</template>

<script lang="ts" setup>
    import FullscreenLoading from "@/widgets/FullscreenLoading/FullscreenLoading.vue"
</script>

<style>
  /* @import url('@/fonts/PT_Sans/PTSans-Bold.ttf'); */
  @font-face {
    font-family: "OpenSans";  
    src: url("@/fonts/Open_Sans/OpenSans.ttf"); 
    font-style: normal; 
  } 

  @font-face {
    font-family: "PorterSansBlock";
    src: url("@/fonts/Porter_Sans_Block/PorterSansBlock.ttf"); 
    font-style: normal; 
  }

  * {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .container {
    max-width: 95%;
    height: 100%;
    margin: 0 auto;
  }


  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 80px auto;
    grid-template-areas: "header header" "aside main";
    height: 100vh;
  }


  .main {
    grid-area: main;
    padding: 20px;
  }

  li {
    list-style: none;
  }

  .alerts {
    position: absolute;
    z-index: 100;
    right: 10px;
    bottom: 0px
  }


  img {
    width: 100%;
  }

  .alerts-move,
  .alerts-enter-active,
  .alerts-leave-active {
    transition: all 0.5s ease;
  }

  .alerts-enter-from,
  .alerts-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .alerts-leave-active {
    position: absolute;
  }
</style>
