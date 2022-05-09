
<!--
 * @Author: janasluo
 * @Date: 2022-03-24 10:37:05
 * @LastEditTime: 2022-04-27 16:57:14
 * @LastEditors: janasluo
 * @Description: 
-->
<template>
  <div id="map" class="container"></div>
</template>

<script>
import {createApp,h} from 'vue'
import * as THREE from 'three';
import * as maptalks from 'maptalks';
import { ThreeLayer, BaseObject } from 'maptalks.three';
import { DeckGLLayer } from 'maptalks-deckgllayer';
// import * as deck from 'deck.gl';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { lineLength, getLinePosition } from './geoutil'
import "maptalks/dist/maptalks.css";

import { MeshLine, MeshLineMaterial, MeshLineRaycast } from './THREE.MeshLine';
import heatmapData from './heatmapData.json'
console.log('Geometry', THREE.Geometry)

export default {
  name: 'App',
  mounted() {
     var map = new maptalks.Map("map", {
            center: [-1.0761489169943843, 52.141304256882876],
            zoom: 6,
            pitch: 70,
            bearing: 180,
            centerCross: true,
            doubleClickZoom: false,
            baseLayer: new maptalks.TileLayer('tile', {
                urlTemplate: 'http://mt0.google.cn/vt/lyrs=m&x={x}&y={y}&z={z}',
                cssFilter: 'sepia(100%) invert(90%)'
            })
        });

      
        const deckglLayer = new DeckGLLayer('kkkk', {});
        map.addLayer(deckglLayer);
       

        // addHexagonLayer();
        function addHexagonLayer() {
          // let data = response.map(d => [Number(d.lng), Number(d.lat)]);
           console.log('heatmapData', heatmapData)
          const COLOR_RANGE = [
              [1, 152, 189],
              [73, 227, 206],
              [216, 254, 181],
              [254, 237, 177],
              [254, 173, 84],
              [209, 55, 78]
          ];

          const LIGHT_SETTINGS = {
              lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
              ambientRatio: 0.4,
              diffuseRatio: 0.6,
              specularRatio: 0.2,
              lightsStrength: [0.8, 0.0, 0.8, 0.0],
              numberOfLights: 2
          };
          const options = {
              radius: 1000,
              coverage: 1,
              upperPercentile: 100
          }

          const hexagonLayer = {
              layerType: "HexagonLayer",
              id: 'heatmap',
              colorRange: COLOR_RANGE,
              heatmapData,
              elevationRange: [0, 1000],
              elevationScale: 250,
              extruded: true,
              pickable: true,
              getPosition: d => d,
              onHover: info => { console.log(info) },
              lightSettings: LIGHT_SETTINGS,
              opacity: 1,
              ...options
          };
          deckglLayer.setProps({
              layers: [hexagonLayer]
          });
        }
       
  }

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
  background-color: #000;
}
</style>
