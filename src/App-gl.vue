<!--
 * @Author: janasluo
 * @Date: 2022-04-06 10:34:17
 * @LastEditTime: 2022-04-06 10:34:20
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-03-24 10:37:05
 * @LastEditTime: 2022-03-28 13:54:38
 * @LastEditors: janasluo
 * @Description: 
-->
<template>
  <div id="map" class="container"></div>
</template>

<script>
import * as maptalks from "maptalks";
import "@maptalks/gl";
import "@maptalks/vt";
import "maptalks/dist/maptalks.css";
export default {
  name: 'App',
  mounted() {
    let map;
    fetch("/map.json").then((data) => {
      return data.json();
    }).then((data) => {
        map = maptalks.Map.fromJSON("map", data);
        const groupGLLayer = map.getLayer('group')
         // 动态设置建筑数据
        const buildingLayer = groupGLLayer.getLayer('building')
        const buildingDataUrl = '/res/temp-resources/geojson/028/02845305-2153-47a5-81e6-6bcefff7a035/data.geojson'
        buildingLayer.setData(buildingDataUrl)

        // 动态设置道路数据
        const roadLayer = groupGLLayer.getLayer('road')
        const roadDataUrl = '/res/temp-resources/geojson/cc8/cc8257a1-ddde-42f3-b766-00b0ac8880b8/data.geojson'
        roadLayer.setData(roadDataUrl)

        // animateRoad动画速度
        const animateRoadLayer = groupGLLayer.getLayer('animateRoad')
        animateRoadLayer.setData(roadDataUrl)
        const style = animateRoadLayer.getStyle()
        style.style[0].symbol.linePatternAnimSpeed = 0.3
        animateRoadLayer.setStyle(style)

        // 动态设置水域数据
        const waterLayer = groupGLLayer.getLayer('water')
        const waterDataUrl = '/res/temp-resources/geojson/189/1896fc0b-9240-4e53-af23-c189e610cad3/data.geojson'
        waterLayer.setData(waterDataUrl)
    });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#map {
  height: 100vh;
  width: 100ww;
}
</style>
