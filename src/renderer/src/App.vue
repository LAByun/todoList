<script setup lang="ts">
// import Versions from './components/Versions.vue'
import ICDselect from './view/ICDselect.vue';
import { RouterLink, RouterView } from 'vue-router'
// import { ref } from 'vue';
// const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <main >
    <RouterView />
  </main>
  <!-- <div style="display: flex; width: 100vw; height: 100vh; margin: auto; padding: auto; background-color: transparent;app-region: drag; border: 1px solid red; flex-direction: column; justify-content: center;align-items: center;">
    <span>das</span>
  </div> -->
</template>
<style>

body {

  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';

}
/* 设置滚动条全局滚动条样式 */
body::-webkit-scrollbar{
    width: 0px;
    height: 0px;
}



</style>