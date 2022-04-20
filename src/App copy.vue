<!--
 * @Author: janasluo
 * @Date: 2022-04-07 14:24:41
 * @LastEditTime: 2022-04-07 14:24:42
 * @LastEditors: janasluo
 * @Description: 
-->
<!--
 * @Author: janasluo
 * @Date: 2022-03-29 16:44:07
 * @LastEditTime: 2022-04-07 13:53:55
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
import proj4 from "proj4";
export default {
  name: 'App',
  mounted() {
    const url = 'https://wms.geo.admin.ch/'

     var proj21781 =
        '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 ' +
    '+x_0=600000 +y_0=200000 +ellps=bessel ' +
    '+towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs'
      var proj4Instance = proj4('WGS84', proj21781)

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
      }

    new maptalks.Map('map', {
        // center: [-0.113049, 51.498568],
        // zoom: 6,
        // center: [0, 0],
        center: [8.23, 46.86],
        zoom: 10,
        spatialReference: {
          projection: 'EPSG:4326',
          // projection: projection,
          // resolutions:[485869.5728, 76443.1884, 837076.5648, 299941.7864],
          // fullExtent: {
          //   // map's full extent
          //   top: 6378137 * Math.PI,
          //   left: -6378137 * Math.PI,
          //   bottom: -6378137 * Math.PI,
          //   right: 6378137 * Math.PI,
          // },
        },
        baseLayer: new maptalks.WMSTileLayer('wms', {
          'tileSystem': [1, -1, -180, 90],
          'urlTemplate': url,
          'crs': 'EPSG:4326',
          'layers': 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale',
          // 'layers': 'supermap', // 使用超图服务
          'styles': '',
          'version': '1.3.0', // 版本需要大于1.3（按DEGREE计算）
          'format': 'image/png',
          'transparent': true,
          'uppercase': true
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
