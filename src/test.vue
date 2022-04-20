<!--
 * @Author: janasluo
 * @Date: 2022-04-14 22:14:24
 * @LastEditTime: 2022-04-15 19:04:00
 * @LastEditors: janasluo
 * @Description: 
-->
<template>
  <div @click="open">test:{{title}}</div>
  <!-- <div >test:{{title}}</div> -->
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  onClick: Function
});
const open = () => {
  debugger
   props.onClick()
}
</script>

<style>
</style>