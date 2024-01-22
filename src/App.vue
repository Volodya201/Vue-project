<template>
  <div class="content">
    <Header />   
    <Aside />

    <main class="main">
      <router-view />
    </main>
  </div>
</template>


<script setup lang="ts">
    import Header from "@/widgets/Header/Header.vue"
    import Aside from "@/widgets/Aside/Aside.vue"
</script>

<style>
  * {
    margin: 0;
    padding: 0;
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
</style>
