<!--
 * @Author: janasluo
 * @Date: 2022-04-07 12:17:53
 * @LastEditTime: 2022-04-07 17:56:53
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-03-29 16:44:07
 * @LastEditTime: 2022-04-07 12:16:45
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
    // const url = 'https://ows.terrestris.de/osm/service'
    // const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World/tileImage.png" // 4326
    const url = "https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China/tileImage.png" // 3857
    new maptalks.Map('map', {
        // center: [-0.113049, 51.498568],
        // zoom: 2,
        // center: [0, 0],
        center: [116.397451, 39.909187],
        zoom: 11,
        spatialReference: {
          // projection: 'EPSG:4326'
          projection: 'EPSG:3857',
           fullExtent :{
             top: 6378137 * Math.PI,
            left: -6378137 * Math.PI,
            bottom: -6378137 * Math.PI,
            right: 6378137 * Math.PI,
          }
        },
        baseLayer: new maptalks.WMSTileLayer('wms', {
          // 'tileSystem': [1, -1, -180, 90],
          'urlTemplate': url,
          // 'crs': 'EPSG:3857',
          'crs': 'EPSG:4326',
          // 'layers': 'OSM-WMS',
          'layers': 'supermap', // 使用超图服务
          // 'styles': '',
          'version': '1.2.0', // 版本需要大于1.3（按DEGREE计算）
          // 'format': 'image/png',
          // 'transparent': true,
          // 'uppercase': true
        }),
        attribution: {
          content: '&copy ows.terrestris.de'
        }
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
