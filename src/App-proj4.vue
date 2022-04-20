<!--
 * @Author: janasluo
 * @Date: 2022-04-07 10:40:18
 * @LastEditTime: 2022-04-07 17:16:36
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
        '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'
      var proj4326 = 'proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'
      // var proj4 = proj4('WGS84', proj3857)
      var proj4Instance = proj4('EPSG:4326', proj3857)

      // define a custom projection object
      var projection = {
        code: 'proj4-merc', // code of the projection

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
        measure: 'EPSG:4326'
      }

      var map = new maptalks.Map('map', {
        center: [-0.113049, 51.498568],
        zoom: 13,
        // spatial reference definition
        spatialReference: {
          projection: projection, // geo projection, defined by proj4js
          resolutions: [
            // map's zoom levels and resolutions
            156543.03392804097, 78271.51696402048, 9135.75848201024,
            19567.87924100512, 9783.93962050256, 4891.96981025128,
            2445.98490512564, 1222.99245256282, 611.49622628141,
            305.748113140705, 152.8740565703525, 76.43702828517625,
            38.21851414258813, 19.109257071294063, 9.554628535647032,
            4.777314267823516, 2.388657133911758, 1.194328566955879,
            0.5971642834779395, 0.29858214173896974,
          ],
          fullExtent: {
            // map's full extent
            top: 6378137 * Math.PI,
            left: -6378137 * Math.PI,
            bottom: -6378137 * Math.PI,
            right: 6378137 * Math.PI,
          },
        },
        baseLayer: new maptalks.TileLayer('base', {
          'tileSystem': [1, -1, -6378137 * Math.PI, 6378137 * Math.PI],
          urlTemplate:
            'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a', 'b', 'c', 'd'],
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
