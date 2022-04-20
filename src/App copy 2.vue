<!--
 * @Author: janasluo
 * @Date: 2022-04-07 17:16:34
 * @LastEditTime: 2022-04-07 17:16:34
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-04-07 10:40:18
 * @LastEditTime: 2022-04-07 17:14:53
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-04-06 17:07:28
 * @LastEditTime: 2022-04-07 10:31:38
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
import proj4 from "proj4";
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";


export default {
  name: 'App',
  mounted() {
// EPSG:3857's proj definition
      var proj3857 =
      '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
      var proj4326 = 'proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'
      var proj4Instance = proj4('WGS84', proj3857)

      // define a custom projection object
      var projection = {
        code: '5181', // code of the projection

        project: function (c) {
          // from wgs84 to EPSG3857
          var pc = proj4Instance.forward(c.toArray())
          return new maptalks.Coordinate(pc)
        },

        unproject: function (pc) {
          // from EPSG3857 to wgs84
          var c = proj4Instance.inverse(pc.toArray())
          return new maptalks.Coordinate(c)
        },
        // tell projection how to measure
        // for cartesian coordinates change this to:
        // measure: 'identity'
        // measure: 'EPSG:4326'
      }

      var map = new maptalks.Map('map', {
        center: [127.0, 36.0],
        zoom: 4,
        // spatial reference definition
        spatialReference: {
          projection: projection, // geo projection, defined by proj4js
          // projection:  "EPSG:3857", // geo projection, defined by proj4js
          resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25],
          fullExtent: {
            // map's full extent
            top: 60000,
            left: -30000,
            bottom: -60000,
            right: 30000,
          },
        },
        baseLayer: new maptalks.TileLayer('base', {
          'tileSystem': [1, -1,-30000,60000],
          urlTemplate:
            'http://i{s}.maps.daum-img.net/map/image/G03/i/1.20/L{z}/{y}/{x}.png',
          subdomains: ['1', '2', '3', '4'],
        }),
      })
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
