<template>



   

  
        <div class="rightContainer">
    
          <div class="routerView" >
            <RouterView />
          </div>

        </div>






</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// import router from '@/router'
import { RouterView } from 'vue-router'

import router from '@renderer/router'



onMounted(() => {
  // router.push('test/admin')
})
</script>

<style>


/* 右侧设置 */
.rightContainer {
  display: flex;
  flex-direction: column;

}
.routerView{
 
  overflow-y: auto;

}

</style>
