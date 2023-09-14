<!--
 * @Author: wxfeiang
 * @Description: 
 * @Date: 2022-03-06 13:12:29
 * @LastEditTime: 2022-11-20 11:46:00
 * @FilePath: /piniaVite_ts/src/components/contbtn.vue
-->
<template>
  <div class="" id="">
    <div>
      <button @click="hadmClick">修改状态数据(简单直接修改）</button>
      <!--  -->
      <p>修改的4中方式</p>
      <p>$patch</p>
      <button @click="hadmClickPAth">修改状态数据($patch)</button>
      <button @click="hadmClickPAthMethod">修改状态数据($patch 传递函数)</button>
      <button @click="store.changeSate">
        修改状态数据($patch actions store.changeSate 直接调用)
      </button>
      <button @click="hadmClickPAthAction">修改状态数据($patch actions 方法处理)</button>
    </div>
    <div>
      <hr />
      <p>getters 缓存测试</p>
      <button @click="hadmPhone">修改电话号码</button>
    </div>
    <div>
      <hr />
      <p>store 之间的调用</p>
      <button @click="handList">获取list</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { mainSrore } from "../store";
const store = mainSrore();

const hadmClick = () => {
  store.cont++;
};
// $patch
// 多数据同时改变的时候 可用
const hadmClickPAth = () => {
  store.$patch({
    cont: store.cont + 2,
    hello: store.hello === "hello" ? "wangpeng" : "hello",
  });
};
//  传递方法
const hadmClickPAthMethod = () => {
  store.$patch((state) => {
    // 仓库里面的 state
    state.cont += 5;
    state.hello = state.hello === "hello" ? "wangpengSate" : "hello";
  });
};
//  业务逻辑笔记复杂的情况
//可以在直接调用
const hadmClickPAthAction = () => {
  store.changeSate();
};

//  getters   几乎和计算属性一样
//  比如吧获取到电话 脱敏
// 值不变不会触发
const hadmPhone = () => {
  store.phone = 12345678901;
};
const handList = () => {
  //  方法名尽量避免重复
  store.getList();
};
</script>
<style scoped></style>
