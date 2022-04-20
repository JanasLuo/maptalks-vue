<!--
 * @Author: janasluo
 * @Date: 2022-04-06 17:07:28
 * @LastEditTime: 2022-04-06 17:07:30
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-03-29 16:44:07
 * @LastEditTime: 2022-04-06 17:04:28
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
   var url = 'https://t0.tianditu.gov.cn/vec_c/wmts?request=GetCapabilities&service=wmts&tk=6901643c38b65f1f9770196343cf72b2';

      maptalks.SpatialReference.loadWMTS(url, function (err, conf) {
        if (err) {
          throw new Error(err);
        }
        debugger
        var params = conf[0];
        console.log('params', params)
        params.urlTemplate += '&tk=6901643c38b65f1f9770196343cf72b2';
        var spatialReference = params.spatialReference;
        var tileLayer = new maptalks.TileLayer('tilelayer', params);
        // var spatialReference = params.spatialReference;
       
        var map = new maptalks.Map('map', {
          center: [114.3404041441181, 30.548730054693106],
          zoom: 10,
          spatialReference : spatialReference,
          // baseLayer: tileLayer
           layers: [tileLayer]
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
