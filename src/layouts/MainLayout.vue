<template>
    <div class="content">
        <FullscreenLoading />
        <Header />   
        <Aside />

        <main class="main">
        <router-view />
        </main>

        <TransitionGroup class="alerts" tag="div" name="alerts">
        <Alert v-for="item of alertsStore.alerts" :key="item.createdAt" :type="item.type" :header="item.header" :message="item.message" />
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
    import Header from "@/widgets/Header/Header.vue"
    import Aside from "@/widgets/Aside/Aside.vue"
    import Alert from "@/widgets/Alert/Alert.vue"
    import FullscreenLoading from "@/widgets/FullscreenLoading/FullscreenLoading.vue"
    import { useAlertsStore } from "@/features/alerts/store/alertsStore"

    const alertsStore = useAlertsStore()
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

  body * {
    overflow: hidden;
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
