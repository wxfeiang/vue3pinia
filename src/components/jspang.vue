<!--
 * @Author: wxfeiang
 * @Description: 
 * @Date: 2022-03-05 20:57:53
 * @LastEditTime: 2022-11-20 11:44:50
 * @FilePath: /piniaVite_ts/src/components/jspang.vue
-->
<template>
  <div class="" id="">
    {{ store.hello }}
  </div>

  <div>
    {{ store.cont }}
  </div>
  <div>
    {{ store.phone }}
  </div>
  <div>
    {{ phonehide }}
  </div>
  <hr />
  <p>直接解构遇到的问题 ,但是数据没有响应, 需要 storeToRefs 方法</p>
  <div class="" id="">
    {{ hello }}
  </div>

  <div>
    {{ cont }}
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { mainSrore } from "../store";
const store = mainSrore();
const { hello, cont, phonehide } = storeToRefs(store);
</script>
<style scoped></style>
