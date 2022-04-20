<!--
 * @Author: janasluo
 * @Date: 2022-04-06 16:52:52
 * @LastEditTime: 2022-04-06 16:52:55
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-03-29 16:44:07
 * @LastEditTime: 2022-04-06 16:37:44
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
import "maptalks/dist/maptalks.css";
export default {
  name: 'App',
  mounted() {
    var arcUrl = 'https://services.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer';
    let tempLayerArr =  []
      maptalks.SpatialReference.loadArcgis(arcUrl + '?f=pjson',  (err, conf)=> {
        if (err) {
          throw new Error(err);
        }
        var ref = conf.spatialReference;
        ref.projection = 'EPSG:4326';
        
        console.log('conf', conf)
        var layer = new maptalks.TileLayer('base', {
            'tileSystem' : conf.tileSystem,
            // 'tileSize' : conf.tileSize, // [512, 512]
            'tileSize' : conf.tileSize, // [512, 512]
            'urlTemplate' : arcUrl + '/tile/{z}/{y}/{x}',
          })
        var map = new maptalks.Map('map', {
          center: [116.397451, 39.909187],
          zoom: 8,
          minZoom: 1,
          maxZoom : 16,
          spatialReference : ref,
          // baseLayer: 
          layers: [layer]
        });
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
  margin-top: 60px;
}
#map {
  height: 100vh;
  width: 100ww;
}
</style>
