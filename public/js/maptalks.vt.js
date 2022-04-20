/*!
 * @maptalks/vt v0.63.8
 * LICENSE : undefined
 * (c) 2016-2022 maptalks.org
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("maptalks"), require("@maptalks/gl")) : "function" == typeof define && define.amd ? define([ "exports", "maptalks", "@maptalks/gl" ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).maptalks = t.maptalks || {}, t.maptalks, t.maptalksgl);
}(this, (function(t, e, n) {
    function i(t) {
        if (t && t.t) return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(n) {
            if ("default" !== n) {
                var i = Object.getOwnPropertyDescriptor(t, n);
                Object.defineProperty(e, n, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t[n];
                    }
                });
            }
        })), e.default = t, Object.freeze(e);
    }
    var r = i(e), s = i(n);
    const o = 'function(t){\n/*!\n        Feature Filter by\n\n        (c) mapbox 2016 and maptalks 2018\n        www.mapbox.com | www.maptalks.org\n        License: MIT, header required.\n    */\nconst n=["Unknown","Point","LineString","Polygon","MultiPoint","MultiLineString","MultiPolygon","GeometryCollection"];function i(t){return new Function("f","var p = (f && f.properties || {}); return "+e(t))}function e(t){if(!t)return"true";const n=t[0];if(t.length<=1)return"any"===n?"false":"true";return`(${"=="===n?s(t[1],t[2],"===",!1):"!="===n?s(t[1],t[2],"!==",!1):"<"===n||">"===n||"<="===n||">="===n?s(t[1],t[2],n,!0):"any"===n?o(t.slice(1),"||"):"all"===n?o(t.slice(1),"&&"):"none"===n?u(o(t.slice(1),"||")):"in"===n?a(t[1],t.slice(2)):"!in"===n?u(a(t[1],t.slice(2))):"has"===n?h(t[1]):"!has"===n?u(h(t[1])):"true"})`}function r(t){return"$"===t[0]?"f."+t.substring(1):"p["+JSON.stringify(t)+"]"}function s(t,i,e,s){const o=r(t),a="$type"===t?n.indexOf(i):JSON.stringify(i);return(s?`typeof ${o}=== typeof ${a}&&`:"")+o+e+a}function o(t,n){return t.map(e).join(n)}function a(t,i){"$type"===t&&(i=i.map(t=>n.indexOf(t)));const e=JSON.stringify(i.sort(l)),s=r(t);return i.length<=200?`${e}.indexOf(${s}) !== -1`:`function(v, a, i, j) {\\n        while (i <= j) { var m = (i + j) >> 1;\\n            if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;\\n        }\\n    return false; }(${s}, ${e},0,${i.length-1})`}function h(t){return"$id"===t?\'"id" in f\':JSON.stringify(t)+" in p"}function u(t){return`!(${t})`}function l(t,n){return t<n?-1:t>n?1:0}function c(t){for(let n=1;n<arguments.length;n++){const i=arguments[n];for(const n in i)t[n]=i[n]}return t}function f(t,n){for(let i=0;i<t.stops.length;i++)if(n===t.stops[i][0])return t.stops[i][1];return t.default}function d(t,n){for(var i=0;i<t.stops.length&&!(n<t.stops[i][0]);i++);return t.stops[Math.max(i-1,0)][1]}function y(t,n){for(var i=void 0!==t.base?t.base:1,e=0;!(e>=t.stops.length||n<=t.stops[e][0]);)e++;return 0===e?t.stops[e][1]:e===t.stops.length?t.stops[e-1][1]:function t(n,i,e,r,s,o){return"function"==typeof s?function(){var a=s.apply(void 0,arguments),h=o.apply(void 0,arguments);return t(n,i,e,r,a,h)}:s.length?function(t,n,i,e,r,s){var o=[];for(let a=0;a<r.length;a++)o[a]=p(t,n,i,e,r[a],s[a]);return o}(n,i,e,r,s,o):p(n,i,e,r,s,o)}(n,i,t.stops[e-1][0],t.stops[e][0],t.stops[e-1][1],t.stops[e][1])}function v(t,n){return function(t,n,i){return void 0!==t?t:void 0!==n?n:void 0!==i?i:null}(n,t.default)}function p(t,n,i,e,r,s){var o,a=e-i,h=t-i;return r*(1-(o=1===n?h/a:(Math.pow(n,h)-1)/(Math.pow(n,a)-1)))+s*o}function m(t){return t&&"object"==typeof t&&(t.stops||t.property&&"identity"===t.type)}function g(t){return b(t,"exponential")}function w(t){return b(t,"interval")}function M(t,n){if(!t)return null;var i=!1;if(Array.isArray(t)){var e,r=[];for(let s=0;s<t.length;s++)(e=M(t[s],n))?(r.push(e),i=!0):r.push(t[s]);return i?r:t}var s,o={__fn_types_loaded:!0},a=[];for(s in t)t.hasOwnProperty(s)&&a.push(s);const h=function(t){Object.defineProperty(o,t,{get:function(){return this["__fn_"+t]||(this["__fn_"+t]=g(this["_"+t])),this["__fn_"+t].apply(this,n())},set:function(n){this["_"+t]=n},configurable:!0,enumerable:!0})};for(let n=0,e=a.length;n<e;n++)m(t[s=a[n]])?(i=!0,o["_"+s]=t[s],h(s)):o[s]=t[s];return i?o:t}function b(t,n){if(!m(t))return function(){return t};let i=!0,e=!0;const r=(t=JSON.parse(JSON.stringify(t))).stops;if(r)for(let t=0;t<r.length;t++)if(m(r[t][1])){const s=b(r[t][1],n);i=i&&s.isZoomConstant,e=e&&s.isFeatureConstant,r[t]=[r[t][0],s]}const s=function t(n,i){var e,r,s;if(m(n)){var o,a=n.stops&&"object"==typeof n.stops[0][0],h=a||void 0!==n.property,u=a||!h,l=n.type||i||"exponential";if("exponential"===l)o=y;else if("interval"===l)o=d;else if("categorical"===l)o=f;else{if("identity"!==l)throw new Error(\'Unknown function type "\'+l+\'"\');o=v}if(a){var c={},p=[];for(let t=0;t<n.stops.length;t++){var g=n.stops[t];void 0===c[g[0].zoom]&&(c[g[0].zoom]={zoom:g[0].zoom,type:n.type,property:n.property,default:n.default,stops:[]}),c[g[0].zoom].stops.push([g[0].value,g[1]])}for(let n in c)p.push([c[n].zoom,t(c[n])]);e=function(t,i){const e=y({stops:p,base:n.base},t)(t,i);return"function"==typeof e?e(t,i):e},r=!1,s=!1}else u?(e=function(t){const i=o(n,t);return"function"==typeof i?i(t):i},r=!0,s=!1):(e=function(t,i){const e=o(n,i?i[n.property]:null);return"function"==typeof e?e(t,i):e},r=!1,s=!0)}else e=function(){return n},r=!0,s=!0;return e.isZoomConstant=s,e.isFeatureConstant=r,e}(t,n);return s.isZoomConstant=i&&s.isZoomConstant,s.isFeatureConstant=e&&s.isFeatureConstant,s}let x=0;const F="function"==typeof Object.assign;function A(t,...n){if(F)return Object.assign(t,...n),t;for(let i=0;i<n.length;i++){const e=n[i];for(const n in e)t[n]=e[n]}return t}function k(t){return!O(t)&&("string"==typeof t||null!==t.constructor&&t.constructor===String)}function P(t){return"number"==typeof t&&!isNaN(t)}function S(t){return!O(t)&&("function"==typeof t||null!==t.constructor&&t.constructor===Function)}function _(t){return!Array.isArray(t)&&"object"==typeof t&&!!t}function O(t){return null==t}function I(t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(i)for(let n=0,e=i.length;n<e;n++)t.push(i[n])}return t.length}function T(t){return t<65536?Uint16Array:Uint32Array}function L(t){return t<256?Uint8Array:t<65536?Uint16Array:Uint32Array}function U(t){return(t=Math.abs(t))<128?Int8Array:t<32768?Int16Array:Float32Array}function z(t){return function t(n){if(!Array.isArray(n))return t([n]);const e=[];for(let t=0;t<n.length;t++){let r;r=!0===n[t].filter?function(){return!0}:i(n[t].filter),e.push(c({},n[t],{filter:r}))}return e}(t=t.map(t=>{const n=A({},t);return n.filter&&n.filter.value&&(n.filter=n.filter.value),n}))}function D(t){return m(t)&&t.property}const E="function"==typeof fetch&&"function"==typeof AbortController,C={jsonp:function(t,n){const i="_maptalks_jsonp_"+x++;t.match(/\\?/)?t+="&callback="+i:t+="?callback="+i;let e=document.createElement("script");return e.type="text/javascript",e.src=t,window[i]=function(t){n(null,t),document.getElementsByTagName("head")[0].removeChild(e),e=null,delete window[i]},document.getElementsByTagName("head")[0].appendChild(e),this},get:function(t,n,i){if(S(n)){const t=i;i=n,n=t}(n=n||{}).method&&(n.method=n.method.toUpperCase());const e="POST"===n.method;if(E){const r=new AbortController,s={signal:r.signal,method:n.method||"GET",referrerPolicy:"origin"};return e&&(O(n.body)||(s.body=JSON.stringify(n.body))),O(n.headers)||(s.headers=n.headers),O(n.credentials)||(s.credentials=n.credentials),fetch(t,s).then(t=>{const e=this.t(t,n.returnJSON,n.responseType);e.message?i(e):e.then(e=>{"arraybuffer"===n.responseType?i(null,{data:e,cacheControl:t.headers.get("Cache-Control"),expires:t.headers.get("Expires"),contentType:t.headers.get("Content-Type")}):i(null,e)}).catch(t=>{t.code&&t.code===DOMException.ABORT_ERR||(console.error(t),i(t))})}).catch(t=>{t.code&&t.code===DOMException.ABORT_ERR||(console.error(t),i(t))}),r}{const r=C.s(i);if(r.open(n.method||"GET",t,!0),n){for(const t in n.headers)r.setRequestHeader(t,n.headers[t]);r.withCredentials="include"===n.credentials,n.responseType&&(r.responseType=n.responseType)}return r.send(e?n.body:null),r}},t:(t,n,i)=>200!==t.status?{status:t.status,statusText:t.statusText,message:`incorrect http request with status code(${t.status}): ${t.statusText}`}:"arraybuffer"===i?t.arrayBuffer():n?t.json():t.text(),o:function(t,n){return function(){if(4===t.readyState)if(200===t.status)if("arraybuffer"===t.responseType){0===t.response.byteLength?n({status:200,statusText:t.statusText,message:"http status 200 returned without content."}):n(null,{data:t.response,cacheControl:t.getResponseHeader("Cache-Control"),expires:t.getResponseHeader("Expires"),contentType:t.getResponseHeader("Content-Type")})}else n(null,t.responseText);else n({status:t.status,statusText:t.statusText,message:`incorrect http request with status code(${t.status}): ${t.statusText}`})}},s:function(t){let n;try{n=new XMLHttpRequest}catch(t){try{n=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{n=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}}return n.onreadystatechange=C.o(n,t),n},getArrayBuffer(t,n,i){if(S(n)){const t=i;i=n,n=t}return n||(n={}),n.responseType="arraybuffer",C.get(t,n,i)}};function j(t,n,i,e,r,s){var o=r-i,a=s-e;if(0!==o||0!==a){var h=((t-i)*o+(n-e)*a)/(o*o+a*a);h>1?(i=r,e=s):h>0&&(i+=o*h,e+=a*h)}return(o=t-i)*o+(a=n-e)*a}function N(t,n,i,e){var r={id:void 0===t?null:t,type:n,geometry:i,tags:e,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(t){var n=t.geometry,i=t.type;if("Point"===i||"MultiPoint"===i||"LineString"===i)H(t,n);else if("Polygon"===i||"MultiLineString"===i)for(var e=0;e<n.length;e++)H(t,n[e]);else if("MultiPolygon"===i)for(e=0;e<n.length;e++)for(var r=0;r<n[e].length;r++)H(t,n[e][r])}(r),r}function H(t,n){for(var i=0;i<n.length;i+=3)t.minX=Math.min(t.minX,n[i]),t.minY=Math.min(t.minY,n[i+1]),t.maxX=Math.max(t.maxX,n[i]),t.maxY=Math.max(t.maxY,n[i+1])}function V(t,n,i,e){if(n.geometry){var r=n.geometry.coordinates,s=n.geometry.type,o=Math.pow(i.tolerance/((1<<i.maxZoom)*i.extent),2),a=[],h=n.id;if(i.promoteId?h=n.properties[i.promoteId]:i.generateId&&(h=e||0),"Point"===s)R(r,a);else if("MultiPoint"===s)for(var u=0;u<r.length;u++)R(r[u],a);else if("LineString"===s)$(r,a,o,!1);else if("MultiLineString"===s){if(i.lineMetrics){for(u=0;u<r.length;u++)a=[],$(r[u],a,o,!1),t.push(N(h,"LineString",a,n.properties));return}W(r,a,o,!1)}else if("Polygon"===s)W(r,a,o,!0);else{if("MultiPolygon"!==s){if("GeometryCollection"===s){for(u=0;u<n.geometry.geometries.length;u++)V(t,{id:h,geometry:n.geometry.geometries[u],properties:n.properties},i,e);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<r.length;u++){var l=[];W(r[u],l,o,!0),a.push(l)}}t.push(N(h,s,a,n.properties))}}function R(t,n){n.push(q(t[0])),n.push(B(t[1])),n.push(0)}function $(t,n,i,e){for(var r,s,o=0,a=0;a<t.length;a++){var h=q(t[a][0]),u=B(t[a][1]);n.push(h),n.push(u),n.push(0),a>0&&(o+=e?(r*u-h*s)/2:Math.sqrt(Math.pow(h-r,2)+Math.pow(u-s,2))),r=h,s=u}var l=n.length-3;n[2]=1,function t(n,i,e,r){for(var s,o=r,a=e-i>>1,h=e-i,u=n[i],l=n[i+1],c=n[e],f=n[e+1],d=i+3;d<e;d+=3){var y=j(n[d],n[d+1],u,l,c,f);if(y>o)s=d,o=y;else if(y===o){var v=Math.abs(d-a);v<h&&(s=d,h=v)}}o>r&&(s-i>3&&t(n,i,s,r),n[s+2]=o,e-s>3&&t(n,s,e,r))}(n,0,l,i),n[l+2]=1,n.size=Math.abs(o),n.start=0,n.end=n.size}function W(t,n,i,e){for(var r=0;r<t.length;r++){var s=[];$(t[r],s,i,e),n.push(s)}}function q(t){return t/360+.5}function B(t){var n=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+n)/(1-n))/Math.PI;return i<0?0:i>1?1:i}function G(t,n,i,e,r,s,o,a){if(e/=n,s>=(i/=n)&&o<e)return t;if(o<i||s>=e)return null;for(var h=[],u=0;u<t.length;u++){var l=t[u],c=l.geometry,f=l.type,d=0===r?l.minX:l.minY,y=0===r?l.maxX:l.maxY;if(d>=i&&y<e)h.push(l);else if(!(y<i||d>=e)){var v=[];if("Point"===f||"MultiPoint"===f)J(c,v,i,e,r);else if("LineString"===f)X(c,v,i,e,r,!1,a.lineMetrics);else if("MultiLineString"===f)Y(c,v,i,e,r,!1);else if("Polygon"===f)Y(c,v,i,e,r,!0);else if("MultiPolygon"===f)for(var p=0;p<c.length;p++){var m=[];Y(c[p],m,i,e,r,!0),m.length&&v.push(m)}if(v.length){if(a.lineMetrics&&"LineString"===f){for(p=0;p<v.length;p++)h.push(N(l.id,f,v[p],l.tags));continue}"LineString"!==f&&"MultiLineString"!==f||(1===v.length?(f="LineString",v=v[0]):f="MultiLineString"),"Point"!==f&&"MultiPoint"!==f||(f=3===v.length?"Point":"MultiPoint"),h.push(N(l.id,f,v,l.tags))}}}return h.length?h:null}function J(t,n,i,e,r){for(var s=0;s<t.length;s+=3){var o=t[s+r];o>=i&&o<=e&&(n.push(t[s]),n.push(t[s+1]),n.push(t[s+2]))}}function X(t,n,i,e,r,s,o){for(var a,h,u=Z(t),l=0===r?Q:tt,c=t.start,f=0;f<t.length-3;f+=3){var d=t[f],y=t[f+1],v=t[f+2],p=t[f+3],m=t[f+4],g=0===r?d:y,w=0===r?p:m,M=!1;o&&(a=Math.sqrt(Math.pow(d-p,2)+Math.pow(y-m,2))),g<i?w>i&&(h=l(u,d,y,p,m,i),o&&(u.start=c+a*h)):g>e?w<e&&(h=l(u,d,y,p,m,e),o&&(u.start=c+a*h)):K(u,d,y,v),w<i&&g>=i&&(h=l(u,d,y,p,m,i),M=!0),w>e&&g<=e&&(h=l(u,d,y,p,m,e),M=!0),!s&&M&&(o&&(u.end=c+a*h),n.push(u),u=Z(t)),o&&(c+=a)}var b=t.length-3;d=t[b],y=t[b+1],v=t[b+2],(g=0===r?d:y)>=i&&g<=e&&K(u,d,y,v),b=u.length-3,s&&b>=3&&(u[b]!==u[0]||u[b+1]!==u[1])&&K(u,u[0],u[1],u[2]),u.length&&n.push(u)}function Z(t){var n=[];return n.size=t.size,n.start=t.start,n.end=t.end,n}function Y(t,n,i,e,r,s){for(var o=0;o<t.length;o++)X(t[o],n,i,e,r,s,!1)}function K(t,n,i,e){t.push(n),t.push(i),t.push(e)}function Q(t,n,i,e,r,s){var o=(s-n)/(e-n);return t.push(s),t.push(i+(r-i)*o),t.push(1),o}function tt(t,n,i,e,r,s){var o=(s-i)/(r-i);return t.push(n+(e-n)*o),t.push(s),t.push(1),o}function nt(t,n){for(var i=[],e=0;e<t.length;e++){var r,s=t[e],o=s.type;if("Point"===o||"MultiPoint"===o||"LineString"===o)r=it(s.geometry,n);else if("MultiLineString"===o||"Polygon"===o){r=[];for(var a=0;a<s.geometry.length;a++)r.push(it(s.geometry[a],n))}else if("MultiPolygon"===o)for(r=[],a=0;a<s.geometry.length;a++){for(var h=[],u=0;u<s.geometry[a].length;u++)h.push(it(s.geometry[a][u],n));r.push(h)}i.push(N(s.id,o,r,s.tags))}return i}function it(t,n){var i=[];i.size=t.size,void 0!==t.start&&(i.start=t.start,i.end=t.end);for(var e=0;e<t.length;e+=3)i.push(t[e]+n,t[e+1],t[e+2]);return i}function et(t,n){if(t.transformed)return t;var i,e,r,s=1<<t.z,o=t.x,a=t.y;for(i=0;i<t.features.length;i++){var h=t.features[i],u=h.geometry,l=h.type;if(h.geometry=[],1===l)for(e=0;e<u.length;e+=2)h.geometry.push(rt(u[e],u[e+1],n,s,o,a));else for(e=0;e<u.length;e++){var c=[];for(r=0;r<u[e].length;r+=2)c.push(rt(u[e][r],u[e][r+1],n,s,o,a));h.geometry.push(c)}}return t.transformed=!0,t}function rt(t,n,i,e,r,s){return[Math.round(i*(t*e-r)),Math.round(i*(n*e-s))]}function st(t,n,i,e,r){for(var s=n===r.maxZoom?0:r.tolerance/((1<<n)*r.extent),o={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:e,z:n,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<t.length;a++){o.numFeatures++,ot(o,t[a],s,r);var h=t[a].minX,u=t[a].minY,l=t[a].maxX,c=t[a].maxY;h<o.minX&&(o.minX=h),u<o.minY&&(o.minY=u),l>o.maxX&&(o.maxX=l),c>o.maxY&&(o.maxY=c)}return o}function ot(t,n,i,e){var r=n.geometry,s=n.type,o=[];if("Point"===s||"MultiPoint"===s)for(var a=0;a<r.length;a+=3)o.push(r[a]),o.push(r[a+1]),t.numPoints++,t.numSimplified++;else if("LineString"===s)at(o,r,t,i,!1,!1);else if("MultiLineString"===s||"Polygon"===s)for(a=0;a<r.length;a++)at(o,r[a],t,i,"Polygon"===s,0===a);else if("MultiPolygon"===s)for(var h=0;h<r.length;h++){var u=r[h];for(a=0;a<u.length;a++)at(o,u[a],t,i,!0,0===a)}if(o.length){var l=n.tags||null;if("LineString"===s&&e.lineMetrics){for(var c in l={},n.tags)l[c]=n.tags[c];l.mapbox_clip_start=r.start/r.size,l.mapbox_clip_end=r.end/r.size}var f={geometry:o,type:"Polygon"===s||"MultiPolygon"===s?3:"LineString"===s||"MultiLineString"===s?2:1,tags:l};null!==n.id&&(f.id=n.id),t.features.push(f)}}function at(t,n,i,e,r,s){var o=e*e;if(e>0&&n.size<(r?o:e))i.numPoints+=n.length/3;else{for(var a=[],h=0;h<n.length;h+=3)(0===e||n[h+2]>o)&&(i.numSimplified++,a.push(n[h]),a.push(n[h+1])),i.numPoints++;r&&function(t,n){for(var i=0,e=0,r=t.length,s=r-2;e<r;s=e,e+=2)i+=(t[e]-t[s])*(t[e+1]+t[s+1]);if(i>0===n)for(e=0,r=t.length;e<r/2;e+=2){var o=t[e],a=t[e+1];t[e]=t[r-2-e],t[e+1]=t[r-1-e],t[r-2-e]=o,t[r-1-e]=a}}(a,s),t.push(a)}}function ht(t,n){var i=(n=this.options=function(t,n){for(var i in n)t[i]=n[i];return t}(Object.create(this.options),n)).debug;if(i&&console.time("preprocess data"),n.maxZoom<0||n.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(n.promoteId&&n.generateId)throw new Error("promoteId and generateId cannot be used together.");var e=function(t,n){var i=[];if("FeatureCollection"===t.type)for(var e=0;e<t.features.length;e++)V(i,t.features[e],n,e);else"Feature"===t.type?V(i,t,n):V(i,{geometry:t},n);return i}(t,n);this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",n.indexMaxZoom,n.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(e=function(t,n){var i=n.buffer/n.extent,e=t,r=G(t,1,-1-i,i,0,-1,2,n),s=G(t,1,1-i,2+i,0,-1,2,n);return(r||s)&&(e=G(t,1,-i,1+i,0,-1,2,n)||[],r&&(e=nt(r,1).concat(e)),s&&(e=e.concat(nt(s,-1)))),e}(e,n)).length&&this.splitTile(e,0,0,0),i&&(e.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function ut(t,n,i){return 32*((1<<t)*i+n)+t}function lt(t,n,i,e,r,s){const o=i&&Array.isArray(i[0]);for(let a=0,h=i.length;a<h;a++){t[n]=Math.round((o?i[a][0]:i[a].x)*e),t[n+1]=Math.round((o?i[a][1]:i[a].y)*e);let u=r||0;Array.isArray(r)&&(u=r[a]),u=u?Math.round(e*u):0,t[n+2]=u,n+=3,s&&0!==a&&a!==h-1&&(t[n]=t[n-3],t[n+1]=t[n-2],t[n+2]=t[n-1],n+=3)}return n}function ct(t,n,i,e){const r=t[3*n],s=t[3*n+1],o=t[3*i],a=t[3*i+1];return r===o&&(r<0||r>e)||s===a&&(s<0||s>e)}C.getJSON=function(t,n,i){if(S(n)){const t=i;i=n,n=t}const e=function(t,n){const e="string"==typeof n?JSON.parse(n):n||null;i(t,e)};return n&&n.jsonp?C.jsonp(t,e):((n=n||{}).returnJSON=!0,C.get(t,n,e))},ht.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},ht.prototype.splitTile=function(t,n,i,e,r,s,o){for(var a=[t,n,i,e],h=this.options,u=h.debug;a.length;){e=a.pop(),i=a.pop(),n=a.pop(),t=a.pop();var l=1<<n,c=ut(n,i,e),f=this.tiles[c];if(!f&&(u>1&&console.time("creation"),f=this.tiles[c]=st(t,n,i,e,h),this.tileCoords.push({z:n,x:i,y:e}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",n,i,e,f.numFeatures,f.numPoints,f.numSimplified),console.timeEnd("creation"));var d="z"+n;this.stats[d]=(this.stats[d]||0)+1,this.total++}if(f.source=t,r){if(n===h.maxZoom||n===r)continue;var y=1<<r-n;if(i!==Math.floor(s/y)||e!==Math.floor(o/y))continue}else if(n===h.indexMaxZoom||f.numPoints<=h.indexMaxPoints)continue;if(f.source=null,0!==t.length){u>1&&console.time("clipping");var v,p,m,g,w,M,b=.5*h.buffer/h.extent,x=.5-b,F=.5+b,A=1+b;v=p=m=g=null,w=G(t,l,i-b,i+F,0,f.minX,f.maxX,h),M=G(t,l,i+x,i+A,0,f.minX,f.maxX,h),t=null,w&&(v=G(w,l,e-b,e+F,1,f.minY,f.maxY,h),p=G(w,l,e+x,e+A,1,f.minY,f.maxY,h),w=null),M&&(m=G(M,l,e-b,e+F,1,f.minY,f.maxY,h),g=G(M,l,e+x,e+A,1,f.minY,f.maxY,h),M=null),u>1&&console.timeEnd("clipping"),a.push(v||[],n+1,2*i,2*e),a.push(p||[],n+1,2*i,2*e+1),a.push(m||[],n+1,2*i+1,2*e),a.push(g||[],n+1,2*i+1,2*e+1)}}},ht.prototype.getTile=function(t,n,i){var e=this.options,r=e.extent,s=e.debug;if(t<0||t>24)return null;var o=1<<t,a=ut(t,n=(n%o+o)%o,i);if(this.tiles[a])return et(this.tiles[a],r);s>1&&console.log("drilling down to z%d-%d-%d",t,n,i);for(var h,u=t,l=n,c=i;!h&&u>0;)u--,l=Math.floor(l/2),c=Math.floor(c/2),h=this.tiles[ut(u,l,c)];return h&&h.source?(s>1&&console.log("found parent tile z%d-%d-%d",u,l,c),s>1&&console.time("drilling down"),this.splitTile(h.source,u,l,c,t,n,i),s>1&&console.timeEnd("drilling down"),this.tiles[a]?et(this.tiles[a],r):null):null};class ft{constructor(t,n){this.x=t,this.y=n}clone(){return new ft(this.x,this.y)}normalize(){const t=this.length();this.x/=t,this.y/=t}negate(){this.x=-this.x,this.y=-this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}diff(t){return new ft(this.x-t.x,this.y-t.y)}distance(t){const n=this.x-t.x,i=this.y-t.y;return Math.sqrt(n*n+i*i)}dot(t){return this.x*t.x+this.y*t.y}equals(t){return this.x===t.x&&this.y===t.y}orthogonal(){return new ft(this.y,-this.x)}}function dt(t,n,i){const e=(n.x-t.x)*(i.y-t.y)-(n.y-t.y)*(i.x-t.x);return e>1e-5?1:e<-1e-5?2:0}function yt(t,n,i,e){const r=n.x*e.y-n.y*e.x,s=i.x-t.x,o=i.y-t.y,a=(s*e.y-o*e.x)/r;return new ft(t.x+a*n.x,t.y+a*n.y)}const vt=[];function pt(t,n,i){let e=0;const r=[];for(let s=n;s<i;s+=3)vt[e]?(vt[e].x=t[s],vt[e].y=t[s+1]):vt[e]=new ft(t[s],t[s+1]),r.push(vt[e]),e++;const s=function(t){let n;this.UpdateOmbb=function(t,i,e,r,s,o,a,h){const u=yt(t,i,s,o),l=yt(e,r,s,o),c=yt(a,h,t,i),f=yt(a,h,e,r),d=u.distance(l)*u.distance(c);d<this.BestObbArea&&(n=[u,c,f,l],this.BestObbArea=d)},this.BestObbArea=Number.MAX_VALUE;const i=[];for(let n=0;n<t.length;n++)i.push(t[(n+1)%t.length].diff(t[n])),i[n].normalize();const e=new ft(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),r=new ft(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);let s,o,a,h;for(let n=0;n<t.length;n++){const i=t[n];i.x<e.x&&(e.x=i.x,s=n),i.x>r.x&&(r.x=i.x,o=n),i.y<e.y&&(e.y=i.y,h=n),i.y>r.y&&(r.y=i.y,a=n)}let u=new ft(0,-1),l=new ft(0,1),c=new ft(-1,0),f=new ft(1,0);for(let n=0;n<t.length;n++){const n=[Math.acos(u.dot(i[s])),Math.acos(l.dot(i[o])),Math.acos(c.dot(i[a])),Math.acos(f.dot(i[h]))];switch(n.indexOf(Math.min.apply(Math,n))){case 0:u=i[s].clone(),l=u.clone(),l.negate(),c=u.orthogonal(),f=c.clone(),f.negate(),s=(s+1)%t.length;break;case 1:l=i[o].clone(),u=l.clone(),u.negate(),c=u.orthogonal(),f=c.clone(),f.negate(),o=(o+1)%t.length;break;case 2:c=i[a].clone(),f=c.clone(),f.negate(),u=f.orthogonal(),l=u.clone(),l.negate(),a=(a+1)%t.length;break;case 3:f=i[h].clone(),c=f.clone(),c.negate(),u=f.orthogonal(),l=u.clone(),l.negate(),h=(h+1)%t.length}this.UpdateOmbb(t[s],u,t[o],l,t[a],c,t[h],f)}return n}(function(t){if(t.length<3)return t;let n=t[0];const i=[];for(let i=1;i<t.length;i++)(t[i].x<n.x||Math.abs(t[i].x-n.x)<1e-5&&t[i].y<n.y)&&(n=t[i]);let e=t[0];do{i.unshift(n.clone());for(let i=1;i<t.length;i++){const r=dt(n,e,t[i]);(e.equals(n)||1===r||0===r&&n.distance(t[i])>n.distance(e))&&(e=t[i])}n=e}while(!e.equals(i[i.length-1]));return i}(r)),o=s[0].distance(s[1]),a=s[1].distance(s[2]),h=s.map(t=>[t.x,t.y]);return h.push(+(a>o)),h}var mt="undefined"!=typeof Float32Array?Float32Array:Array;function gt(){var t=new mt(3);return mt!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function wt(t,n,i){var e=new mt(3);return e[0]=t,e[1]=n,e[2]=i,e}function Mt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function bt(t,n,i,e){return t[0]=n,t[1]=i,t[2]=e,t}function xt(t,n,i){return t[0]=n[0]+i[0],t[1]=n[1]+i[1],t[2]=n[2]+i[2],t}function Ft(t,n,i){return t[0]=n[0]/i[0],t[1]=n[1]/i[1],t[2]=n[2]/i[2],t}function At(t,n){var i=n[0],e=n[1],r=n[2],s=i*i+e*e+r*r;return s>0&&(s=1/Math.sqrt(s),t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s),t}function kt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Pt(t,n,i){var e=n[0],r=n[1],s=n[2],o=i[0],a=i[1],h=i[2];return t[0]=r*h-s*a,t[1]=s*o-e*h,t[2]=e*a-r*o,t}var St=function(t,n,i){return t[0]=n[0]-i[0],t[1]=n[1]-i[1],t[2]=n[2]-i[2],t};function _t(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Ot(t,n,i,e,r){return t[0]=n,t[1]=i,t[2]=e,t[3]=r,t}function It(){var t=new mt(4);return mt!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Tt(t,n){var i=n[0]+n[4]+n[8],e=void 0;if(i>0)e=Math.sqrt(i+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{var r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);var s=(r+1)%3,o=(r+2)%3;e=Math.sqrt(n[3*r+r]-n[3*s+s]-n[3*o+o]+1),t[r]=.5*e,e=.5/e,t[3]=(n[3*s+o]-n[3*o+s])*e,t[s]=(n[3*s+r]+n[3*r+s])*e,t[o]=(n[3*o+r]+n[3*r+o])*e}return t}gt(),function(){var t,n=(t=new mt(4),mt!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t)}();var Lt,Ut=function(t,n,i){return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=n[3]*i,t},zt=function(t,n){var i=n[0],e=n[1],r=n[2],s=n[3],o=i*i+e*e+r*r+s*s;return o>0&&(o=1/Math.sqrt(o),t[0]=i*o,t[1]=e*o,t[2]=r*o,t[3]=s*o),t};function Dt(t,n){var i=n[0]-t[0],e=n[1]-t[1];return Math.sqrt(i*i+e*e)}function Et(t,n,i,e,r,s,o,a,h,u){0===t?function(t,n,i,e,r,s,o,a,h){const u=[0,0];for(let r=t;r<n;r+=3){const t=r/3*2,n=e[r],l=e[r+1];i[t]=u[0]+n*s*o/a,i[t+1]=u[1]-l*s*o/h}}(n,i,e,r,0,o,a,h,u):1===t&&function(t,n,i,e){const r=pt(e,t,n),s=r[4],o=r[s],a=r[s+1],h=r[s+2],u=(a[1]-o[1])/(a[0]-o[0]),l=(h[1]-a[1])/(h[0]-a[0]),c=Dt(o,a),f=Dt(a,h);for(let r=t;r<n;r+=3){const t=r/3*2,n=e[r],s=e[r+1];i[t]=jt(n,s,o,u,c),i[t+1]=-jt(n,s,a,l,f)}}(n,i,e,r)}gt(),wt(1,0,0),wt(0,1,0),It(),It(),Lt=new mt(9),mt!=Float32Array&&(Lt[1]=0,Lt[2]=0,Lt[3]=0,Lt[5]=0,Lt[6]=0,Lt[7]=0),Lt[0]=1,Lt[4]=1,Lt[8]=1,function(){var t=function(){var t=new mt(2);return mt!=Float32Array&&(t[0]=0,t[1]=0),t}()}();const Ct=[];function jt(t,n,i,e,r){return Ct[0]=(e*e*i[0]+e*(n-i[1])+t)/(e*e+1),Ct[1]=e*(Ct[0]-i[0])+i[1],Dt(i,Ct)/r}function Nt(t,n,i,e,r){const s=3*n[i-1],o=3*n[i-1]+1,a=t[s],h=t[o];return u=e,l=r,c=a,f=h,Math.sqrt((c-u)*(c-u)+(f-l)*(f-l));var u,l,c,f}"undefined"!=typeof undefinedThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof undefined?global:"undefined"!=typeof self&&self;var Ht=Vt;function Vt(t,n){this.x=t,this.y=n}function Rt(t,n,i){i=i||{},this.w=t||64,this.h=n||64,this.autoResize=!!i.autoResize,this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0}function $t(t,n,i){this.x=0,this.y=t,this.w=this.free=n,this.h=i}function Wt(t,n,i,e,r,s,o){this.id=t,this.x=n,this.y=i,this.w=e,this.h=r,this.maxw=s||e,this.maxh=o||r,this.refcount=0}Vt.prototype={clone:function(){return new Vt(this.x,this.y)},add:function(t){return this.clone().u(t)},sub:function(t){return this.clone().v(t)},multByPoint:function(t){return this.clone().m(t)},divByPoint:function(t){return this.clone().M(t)},mult:function(t){return this.clone().F(t)},div:function(t){return this.clone().A(t)},rotate:function(t){return this.clone().k(t)},rotateAround:function(t,n){return this.clone().P(t,n)},matMult:function(t){return this.clone().S(t)},unit:function(){return this.clone()._()},perp:function(){return this.clone().O()},round:function(){return this.clone().I()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var n=t.x-this.x,i=t.y-this.y;return n*n+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,n){return Math.atan2(this.x*n-this.y*t,this.x*t+this.y*n)},S:function(t){var n=t[0]*this.x+t[1]*this.y,i=t[2]*this.x+t[3]*this.y;return this.x=n,this.y=i,this},u:function(t){return this.x+=t.x,this.y+=t.y,this},v:function(t){return this.x-=t.x,this.y-=t.y,this},F:function(t){return this.x*=t,this.y*=t,this},A:function(t){return this.x/=t,this.y/=t,this},m:function(t){return this.x*=t.x,this.y*=t.y,this},M:function(t){return this.x/=t.x,this.y/=t.y,this},_:function(){return this.A(this.mag()),this},O:function(){var t=this.y;return this.y=this.x,this.x=-t,this},k:function(t){var n=Math.cos(t),i=Math.sin(t),e=n*this.x-i*this.y,r=i*this.x+n*this.y;return this.x=e,this.y=r,this},P:function(t,n){var i=Math.cos(t),e=Math.sin(t),r=n.x+i*(this.x-n.x)-e*(this.y-n.y),s=n.y+e*(this.x-n.x)+i*(this.y-n.y);return this.x=r,this.y=s,this},I:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},Vt.convert=function(t){return t instanceof Vt?t:Array.isArray(t)?new Vt(t[0],t[1]):t},Rt.prototype.pack=function(t,n){t=[].concat(t),n=n||{};for(var i,e,r,s,o=[],a=0;a<t.length;a++)if(i=t[a].w||t[a].width,e=t[a].h||t[a].height,r=t[a].id,i&&e){if(!(s=this.packOne(i,e,r)))continue;n.inPlace&&(t[a].x=s.x,t[a].y=s.y,t[a].id=s.id),o.push(s)}return this.shrink(),o},Rt.prototype.packOne=function(t,n,i){var e,r,s,o,a,h,u,l,c={freebin:-1,shelf:-1,waste:1/0},f=0;if("string"==typeof i||"number"==typeof i){if(e=this.getBin(i))return this.ref(e),e;"number"==typeof i&&(this.maxId=Math.max(i,this.maxId))}else i=++this.maxId;for(o=0;o<this.freebins.length;o++){if(n===(e=this.freebins[o]).maxh&&t===e.maxw)return this.allocFreebin(o,t,n,i);n>e.maxh||t>e.maxw||n<=e.maxh&&t<=e.maxw&&(s=e.maxw*e.maxh-t*n)<c.waste&&(c.waste=s,c.freebin=o)}for(o=0;o<this.shelves.length;o++)if(f+=(r=this.shelves[o]).h,!(t>r.free)){if(n===r.h)return this.allocShelf(o,t,n,i);n>r.h||n<r.h&&(s=(r.h-n)*t)<c.waste&&(c.freebin=-1,c.waste=s,c.shelf=o)}return-1!==c.freebin?this.allocFreebin(c.freebin,t,n,i):-1!==c.shelf?this.allocShelf(c.shelf,t,n,i):n<=this.h-f&&t<=this.w?(r=new $t(f,this.w,n),this.allocShelf(this.shelves.push(r)-1,t,n,i)):this.autoResize?(a=h=this.h,((u=l=this.w)<=a||t>u)&&(l=2*Math.max(t,u)),(a<u||n>a)&&(h=2*Math.max(n,a)),this.resize(l,h),this.packOne(t,n,i)):null},Rt.prototype.allocFreebin=function(t,n,i,e){var r=this.freebins.splice(t,1)[0];return r.id=e,r.w=n,r.h=i,r.refcount=0,this.bins[e]=r,this.ref(r),r},Rt.prototype.allocShelf=function(t,n,i,e){var r=this.shelves[t].alloc(n,i,e);return this.bins[e]=r,this.ref(r),r},Rt.prototype.shrink=function(){if(this.shelves.length>0){for(var t=0,n=0,i=0;i<this.shelves.length;i++){var e=this.shelves[i];n+=e.h,t=Math.max(e.w-e.free,t)}this.resize(t,n)}},Rt.prototype.getBin=function(t){return this.bins[t]},Rt.prototype.ref=function(t){if(1==++t.refcount){var n=t.h;this.stats[n]=1+(0|this.stats[n])}return t.refcount},Rt.prototype.unref=function(t){return 0===t.refcount?0:(0==--t.refcount&&(this.stats[t.h]--,delete this.bins[t.id],this.freebins.push(t)),t.refcount)},Rt.prototype.clear=function(){this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0},Rt.prototype.resize=function(t,n){this.w=t,this.h=n;for(var i=0;i<this.shelves.length;i++)this.shelves[i].resize(t);return!0},$t.prototype.alloc=function(t,n,i){if(t>this.free||n>this.h)return null;var e=this.x;return this.x+=t,this.free-=t,new Wt(i,e,this.y,t,n,t,this.h)},$t.prototype.resize=function(t){return this.free+=t-this.w,this.w=t,!0};var qt={exports:{}};qt.exports=function(){function t(t,n,i){var e=t[n];t[n]=t[i],t[i]=e}function n(t,n){return t<n?-1:t>n?1:0}return function(i,e,r,s,o){!function n(i,e,r,s,o){for(;s>r;){if(s-r>600){var a=s-r+1,h=e-r+1,u=Math.log(a),l=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*l*(a-l)/a)*(h-a/2<0?-1:1),f=Math.max(r,Math.floor(e-h*l/a+c)),d=Math.min(s,Math.floor(e+(a-h)*l/a+c));n(i,e,f,d,o)}var y=i[e],v=r,p=s;for(t(i,r,e),o(i[s],y)>0&&t(i,r,s);v<p;){for(t(i,v,p),v++,p--;o(i[v],y)<0;)v++;for(;o(i[p],y)>0;)p--}0===o(i[r],y)?t(i,r,p):(p++,t(i,p,s)),p<=e&&(r=p+1),e<=p&&(s=p-1)}}(i,e,r||0,s||i.length-1,o||n)}}();var Bt=qt.exports,Gt={exports:{}};function Jt(t,n){if(!(this instanceof Jt))return new Jt(t,n);if(this.data=t||[],this.length=this.data.length,this.compare=n||Xt,this.length>0)for(var i=(this.length>>1)-1;i>=0;i--)this.T(i)}function Xt(t,n){return t<n?-1:t>n?1:0}Gt.exports=Jt,Gt.exports.default=Jt,Jt.prototype={push:function(t){this.data.push(t),this.length++,this.L(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this.T(0)),this.data.pop(),t}},peek:function(){return this.data[0]},L:function(t){for(var n=this.data,i=this.compare,e=n[t];t>0;){var r=t-1>>1,s=n[r];if(i(e,s)>=0)break;n[t]=s,t=r}n[t]=e},T:function(t){for(var n=this.data,i=this.compare,e=this.length>>1,r=n[t];t<e;){var s=1+(t<<1),o=s+1,a=n[s];if(o<this.length&&i(n[o],a)<0&&(s=o,a=n[o]),i(a,r)>=0)break;n[t]=a,t=s}n[t]=r}};var Zt=Gt.exports,Yt={exports:{}},Kt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Qt={exports:{}},tn=function(t){return!(!t||"string"==typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))},nn=Array.prototype.concat,en=Array.prototype.slice,rn=Qt.exports=function(t){for(var n=[],i=0,e=t.length;i<e;i++){var r=t[i];tn(r)?n=nn.call(n,en.call(r)):n.push(r)}return n};rn.wrap=function(t){return function(){return t(rn(arguments))}};var sn=Kt,on=Qt.exports,an=Object.hasOwnProperty,hn={};for(var un in sn)an.call(sn,un)&&(hn[sn[un]]=un);var ln=Yt.exports={to:{},get:{}};function cn(t,n,i){return Math.min(Math.max(n,t),i)}function fn(t){var n=Math.round(t).toString(16).toUpperCase();return n.length<2?"0"+n:n}ln.get=function(t){var n,i;switch(t.substring(0,3).toLowerCase()){case"hsl":n=ln.get.hsl(t),i="hsl";break;case"hwb":n=ln.get.hwb(t),i="hwb";break;default:n=ln.get.rgb(t),i="rgb"}return n?{model:i,value:n}:null},ln.get.rgb=function(t){if(!t)return null;var n,i,e,r=[0,0,0,1];if(n=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(e=n[2],n=n[1],i=0;i<3;i++){var s=2*i;r[i]=parseInt(n.slice(s,s+2),16)}e&&(r[3]=parseInt(e,16)/255)}else if(n=t.match(/^#([a-f0-9]{3,4})$/i)){for(e=(n=n[1])[3],i=0;i<3;i++)r[i]=parseInt(n[i]+n[i],16);e&&(r[3]=parseInt(e+e,16)/255)}else if(n=t.match(/^rgba?\\(\\s*([+-]?\\d+)(?=[\\s,])\\s*(?:,\\s*)?([+-]?\\d+)(?=[\\s,])\\s*(?:,\\s*)?([+-]?\\d+)\\s*(?:[,|\\/]\\s*([+-]?[\\d\\.]+)(%?)\\s*)?\\)$/)){for(i=0;i<3;i++)r[i]=parseInt(n[i+1],0);n[4]&&(n[5]?r[3]=.01*parseFloat(n[4]):r[3]=parseFloat(n[4]))}else{if(!(n=t.match(/^rgba?\\(\\s*([+-]?[\\d\\.]+)\\%\\s*,?\\s*([+-]?[\\d\\.]+)\\%\\s*,?\\s*([+-]?[\\d\\.]+)\\%\\s*(?:[,|\\/]\\s*([+-]?[\\d\\.]+)(%?)\\s*)?\\)$/)))return(n=t.match(/^(\\w+)$/))?"transparent"===n[1]?[0,0,0,0]:an.call(sn,n[1])?((r=sn[n[1]])[3]=1,r):null:null;for(i=0;i<3;i++)r[i]=Math.round(2.55*parseFloat(n[i+1]));n[4]&&(n[5]?r[3]=.01*parseFloat(n[4]):r[3]=parseFloat(n[4]))}for(i=0;i<3;i++)r[i]=cn(r[i],0,255);return r[3]=cn(r[3],0,1),r},ln.get.hsl=function(t){if(!t)return null;var n=t.match(/^hsla?\\(\\s*([+-]?(?:\\d{0,3}\\.)?\\d+)(?:deg)?\\s*,?\\s*([+-]?[\\d\\.]+)%\\s*,?\\s*([+-]?[\\d\\.]+)%\\s*(?:[,|\\/]\\s*([+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)\\s*)?\\)$/);if(n){var i=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,cn(parseFloat(n[2]),0,100),cn(parseFloat(n[3]),0,100),cn(isNaN(i)?1:i,0,1)]}return null},ln.get.hwb=function(t){if(!t)return null;var n=t.match(/^hwb\\(\\s*([+-]?\\d{0,3}(?:\\.\\d+)?)(?:deg)?\\s*,\\s*([+-]?[\\d\\.]+)%\\s*,\\s*([+-]?[\\d\\.]+)%\\s*(?:,\\s*([+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)\\s*)?\\)$/);if(n){var i=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,cn(parseFloat(n[2]),0,100),cn(parseFloat(n[3]),0,100),cn(isNaN(i)?1:i,0,1)]}return null},ln.to.hex=function(){var t=on(arguments);return"#"+fn(t[0])+fn(t[1])+fn(t[2])+(t[3]<1?fn(Math.round(255*t[3])):"")},ln.to.rgb=function(){var t=on(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},ln.to.rgb.percent=function(){var t=on(arguments),n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),e=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+n+"%, "+i+"%, "+e+"%)":"rgba("+n+"%, "+i+"%, "+e+"%, "+t[3]+")"},ln.to.hsl=function(){var t=on(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},ln.to.hwb=function(){var t=on(arguments),n="";return t.length>=4&&1!==t[3]&&(n=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+n+")"},ln.to.keyword=function(t){return hn[t.slice(0,3)]};var dn={exports:{}},yn=Kt,vn={};for(var pn in yn)yn.hasOwnProperty(pn)&&(vn[yn[pn]]=pn);var mn=dn.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var gn in mn)if(mn.hasOwnProperty(gn)){if(!("channels"in mn[gn]))throw new Error("missing channels property: "+gn);if(!("labels"in mn[gn]))throw new Error("missing channel labels property: "+gn);if(mn[gn].labels.length!==mn[gn].channels)throw new Error("channel and label counts mismatch: "+gn);var wn=mn[gn].channels,Mn=mn[gn].labels;delete mn[gn].channels,delete mn[gn].labels,Object.defineProperty(mn[gn],"channels",{value:wn}),Object.defineProperty(mn[gn],"labels",{value:Mn})}function bn(t,n){return Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2)+Math.pow(t[2]-n[2],2)}mn.rgb.hsl=function(t){var n,i,e=t[0]/255,r=t[1]/255,s=t[2]/255,o=Math.min(e,r,s),a=Math.max(e,r,s),h=a-o;return a===o?n=0:e===a?n=(r-s)/h:r===a?n=2+(s-e)/h:s===a&&(n=4+(e-r)/h),(n=Math.min(60*n,360))<0&&(n+=360),i=(o+a)/2,[n,100*(a===o?0:i<=.5?h/(a+o):h/(2-a-o)),100*i]},mn.rgb.hsv=function(t){var n,i,e,r,s,o=t[0]/255,a=t[1]/255,h=t[2]/255,u=Math.max(o,a,h),l=u-Math.min(o,a,h),c=function(t){return(u-t)/6/l+.5};return 0===l?r=s=0:(s=l/u,n=c(o),i=c(a),e=c(h),o===u?r=e-i:a===u?r=1/3+n-e:h===u&&(r=2/3+i-n),r<0?r+=1:r>1&&(r-=1)),[360*r,100*s,100*u]},mn.rgb.hwb=function(t){var n=t[0],i=t[1],e=t[2];return[mn.rgb.hsl(t)[0],100*(1/255*Math.min(n,Math.min(i,e))),100*(e=1-1/255*Math.max(n,Math.max(i,e)))]},mn.rgb.cmyk=function(t){var n,i=t[0]/255,e=t[1]/255,r=t[2]/255;return[100*((1-i-(n=Math.min(1-i,1-e,1-r)))/(1-n)||0),100*((1-e-n)/(1-n)||0),100*((1-r-n)/(1-n)||0),100*n]},mn.rgb.keyword=function(t){var n=vn[t];if(n)return n;var i,e=1/0;for(var r in yn)if(yn.hasOwnProperty(r)){var s=bn(t,yn[r]);s<e&&(e=s,i=r)}return i},mn.keyword.rgb=function(t){return yn[t]},mn.rgb.xyz=function(t){var n=t[0]/255,i=t[1]/255,e=t[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)),100*(.2126*n+.7152*i+.0722*e),100*(.0193*n+.1192*i+.9505*e)]},mn.rgb.lab=function(t){var n=mn.rgb.xyz(t),i=n[0],e=n[1],r=n[2];return e/=100,r/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(i-e),200*(e-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},mn.hsl.rgb=function(t){var n,i,e,r,s,o=t[0]/360,a=t[1]/100,h=t[2]/100;if(0===a)return[s=255*h,s,s];n=2*h-(i=h<.5?h*(1+a):h+a-h*a),r=[0,0,0];for(var u=0;u<3;u++)(e=o+1/3*-(u-1))<0&&e++,e>1&&e--,s=6*e<1?n+6*(i-n)*e:2*e<1?i:3*e<2?n+(i-n)*(2/3-e)*6:n,r[u]=255*s;return r},mn.hsl.hsv=function(t){var n=t[0],i=t[1]/100,e=t[2]/100,r=i,s=Math.max(e,.01);return i*=(e*=2)<=1?e:2-e,r*=s<=1?s:2-s,[n,100*(0===e?2*r/(s+r):2*i/(e+i)),100*((e+i)/2)]},mn.hsv.rgb=function(t){var n=t[0]/60,i=t[1]/100,e=t[2]/100,r=Math.floor(n)%6,s=n-Math.floor(n),o=255*e*(1-i),a=255*e*(1-i*s),h=255*e*(1-i*(1-s));switch(e*=255,r){case 0:return[e,h,o];case 1:return[a,e,o];case 2:return[o,e,h];case 3:return[o,a,e];case 4:return[h,o,e];case 5:return[e,o,a]}},mn.hsv.hsl=function(t){var n,i,e,r=t[0],s=t[1]/100,o=t[2]/100,a=Math.max(o,.01);return e=(2-s)*o,i=s*a,[r,100*(i=(i/=(n=(2-s)*a)<=1?n:2-n)||0),100*(e/=2)]},mn.hwb.rgb=function(t){var n,i,e,r,s,o,a,h=t[0]/360,u=t[1]/100,l=t[2]/100,c=u+l;switch(c>1&&(u/=c,l/=c),e=6*h-(n=Math.floor(6*h)),0!=(1&n)&&(e=1-e),r=u+e*((i=1-l)-u),n){default:case 6:case 0:s=i,o=r,a=u;break;case 1:s=r,o=i,a=u;break;case 2:s=u,o=i,a=r;break;case 3:s=u,o=r,a=i;break;case 4:s=r,o=u,a=i;break;case 5:s=i,o=u,a=r}return[255*s,255*o,255*a]},mn.cmyk.rgb=function(t){var n=t[0]/100,i=t[1]/100,e=t[2]/100,r=t[3]/100;return[255*(1-Math.min(1,n*(1-r)+r)),255*(1-Math.min(1,i*(1-r)+r)),255*(1-Math.min(1,e*(1-r)+r))]},mn.xyz.rgb=function(t){var n,i,e,r=t[0]/100,s=t[1]/100,o=t[2]/100;return i=-.9689*r+1.8758*s+.0415*o,e=.0557*r+-.204*s+1.057*o,n=(n=3.2406*r+-1.5372*s+-.4986*o)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:12.92*i,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,[255*(n=Math.min(Math.max(0,n),1)),255*(i=Math.min(Math.max(0,i),1)),255*(e=Math.min(Math.max(0,e),1))]},mn.xyz.lab=function(t){var n=t[0],i=t[1],e=t[2];return i/=100,e/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(n-i),200*(i-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},mn.lab.xyz=function(t){var n,i,e,r=t[0];n=t[1]/500+(i=(r+16)/116),e=i-t[2]/200;var s=Math.pow(i,3),o=Math.pow(n,3),a=Math.pow(e,3);return i=s>.008856?s:(i-16/116)/7.787,n=o>.008856?o:(n-16/116)/7.787,e=a>.008856?a:(e-16/116)/7.787,[n*=95.047,i*=100,e*=108.883]},mn.lab.lch=function(t){var n,i=t[0],e=t[1],r=t[2];return(n=360*Math.atan2(r,e)/2/Math.PI)<0&&(n+=360),[i,Math.sqrt(e*e+r*r),n]},mn.lch.lab=function(t){var n,i=t[0],e=t[1];return n=t[2]/360*2*Math.PI,[i,e*Math.cos(n),e*Math.sin(n)]},mn.rgb.ansi16=function(t){var n=t[0],i=t[1],e=t[2],r=1 in arguments?arguments[1]:mn.rgb.hsv(t)[2];if(0===(r=Math.round(r/50)))return 30;var s=30+(Math.round(e/255)<<2|Math.round(i/255)<<1|Math.round(n/255));return 2===r&&(s+=60),s},mn.hsv.ansi16=function(t){return mn.rgb.ansi16(mn.hsv.rgb(t),t[2])},mn.rgb.ansi256=function(t){var n=t[0],i=t[1],e=t[2];return n===i&&i===e?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(i/255*5)+Math.round(e/255*5)},mn.ansi16.rgb=function(t){var n=t%10;if(0===n||7===n)return t>50&&(n+=3.5),[n=n/10.5*255,n,n];var i=.5*(1+~~(t>50));return[(1&n)*i*255,(n>>1&1)*i*255,(n>>2&1)*i*255]},mn.ansi256.rgb=function(t){if(t>=232){var n=10*(t-232)+8;return[n,n,n]}var i;return t-=16,[Math.floor(t/36)/5*255,Math.floor((i=t%36)/6)/5*255,i%6/5*255]},mn.rgb.hex=function(t){var n=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},mn.hex.rgb=function(t){var n=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var i=n[0];3===n[0].length&&(i=i.split("").map((function(t){return t+t})).join(""));var e=parseInt(i,16);return[e>>16&255,e>>8&255,255&e]},mn.rgb.hcg=function(t){var n,i=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.max(Math.max(i,e),r),o=Math.min(Math.min(i,e),r),a=s-o;return n=a<=0?0:s===i?(e-r)/a%6:s===e?2+(r-i)/a:4+(i-e)/a+4,n/=6,[360*(n%=1),100*a,100*(a<1?o/(1-a):0)]},mn.hsl.hcg=function(t){var n=t[1]/100,i=t[2]/100,e=1,r=0;return(e=i<.5?2*n*i:2*n*(1-i))<1&&(r=(i-.5*e)/(1-e)),[t[0],100*e,100*r]},mn.hsv.hcg=function(t){var n=t[1]/100,i=t[2]/100,e=n*i,r=0;return e<1&&(r=(i-e)/(1-e)),[t[0],100*e,100*r]},mn.hcg.rgb=function(t){var n=t[0]/360,i=t[1]/100,e=t[2]/100;if(0===i)return[255*e,255*e,255*e];var r,s=[0,0,0],o=n%1*6,a=o%1,h=1-a;switch(Math.floor(o)){case 0:s[0]=1,s[1]=a,s[2]=0;break;case 1:s[0]=h,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=a;break;case 3:s[0]=0,s[1]=h,s[2]=1;break;case 4:s[0]=a,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=h}return r=(1-i)*e,[255*(i*s[0]+r),255*(i*s[1]+r),255*(i*s[2]+r)]},mn.hcg.hsv=function(t){var n=t[1]/100,i=n+t[2]/100*(1-n),e=0;return i>0&&(e=n/i),[t[0],100*e,100*i]},mn.hcg.hsl=function(t){var n=t[1]/100,i=t[2]/100*(1-n)+.5*n,e=0;return i>0&&i<.5?e=n/(2*i):i>=.5&&i<1&&(e=n/(2*(1-i))),[t[0],100*e,100*i]},mn.hcg.hwb=function(t){var n=t[1]/100,i=n+t[2]/100*(1-n);return[t[0],100*(i-n),100*(1-i)]},mn.hwb.hcg=function(t){var n=t[1]/100,i=1-t[2]/100,e=i-n,r=0;return e<1&&(r=(i-e)/(1-e)),[t[0],100*e,100*r]},mn.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},mn.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},mn.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},mn.gray.hsl=mn.gray.hsv=function(t){return[0,0,t[0]]},mn.gray.hwb=function(t){return[0,100,t[0]]},mn.gray.cmyk=function(t){return[0,0,0,t[0]]},mn.gray.lab=function(t){return[t[0],0,0]},mn.gray.hex=function(t){var n=255&Math.round(t[0]/100*255),i=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(i.length)+i},mn.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};var xn=dn.exports;function Fn(t){var n=function(){for(var t={},n=Object.keys(xn),i=n.length,e=0;e<i;e++)t[n[e]]={distance:-1,parent:null};return t}(),i=[t];for(n[t].distance=0;i.length;)for(var e=i.pop(),r=Object.keys(xn[e]),s=r.length,o=0;o<s;o++){var a=r[o],h=n[a];-1===h.distance&&(h.distance=n[e].distance+1,h.parent=e,i.unshift(a))}return n}function An(t,n){return function(i){return n(t(i))}}function kn(t,n){for(var i=[n[t].parent,t],e=xn[n[t].parent][t],r=n[t].parent;n[r].parent;)i.unshift(n[r].parent),e=An(xn[n[r].parent][r],e),r=n[r].parent;return e.conversion=i,e}var Pn=dn.exports,Sn=function(t){for(var n=Fn(t),i={},e=Object.keys(n),r=e.length,s=0;s<r;s++){var o=e[s];null!==n[o].parent&&(i[o]=kn(o,n))}return i},_n={};Object.keys(Pn).forEach((function(t){_n[t]={},Object.defineProperty(_n[t],"channels",{value:Pn[t].channels}),Object.defineProperty(_n[t],"labels",{value:Pn[t].labels});var n=Sn(t);Object.keys(n).forEach((function(i){var e=n[i];_n[t][i]=function(t){var n=function(n){if(null==n)return n;arguments.length>1&&(n=Array.prototype.slice.call(arguments));var i=t(n);if("object"==typeof i)for(var e=i.length,r=0;r<e;r++)i[r]=Math.round(i[r]);return i};return"conversion"in t&&(n.conversion=t.conversion),n}(e),_n[t][i].raw=function(t){var n=function(n){return null==n?n:(arguments.length>1&&(n=Array.prototype.slice.call(arguments)),t(n))};return"conversion"in t&&(n.conversion=t.conversion),n}(e)}))}));var On=_n,In=Yt.exports,Tn=On,Ln=[].slice,Un=["keyword","gray","hex"],zn={};Object.keys(Tn).forEach((function(t){zn[Ln.call(Tn[t].labels).sort().join("")]=t}));var Dn={};function En(t,n){if(!(this instanceof En))return new En(t,n);if(n&&n in Un&&(n=null),n&&!(n in Tn))throw new Error("Unknown model: "+n);var i,e;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof En)this.model=t.model,this.color=t.color.slice(),this.valpha=t.valpha;else if("string"==typeof t){var r=In.get(t);if(null===r)throw new Error("Unable to parse color from string: "+t);this.model=r.model,e=Tn[this.model].channels,this.color=r.value.slice(0,e),this.valpha="number"==typeof r.value[e]?r.value[e]:1}else if(t.length){this.model=n||"rgb",e=Tn[this.model].channels;var s=Ln.call(t,0,e);this.color=Hn(s,e),this.valpha="number"==typeof t[e]?t[e]:1}else if("number"==typeof t)t&=16777215,this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;var o=Object.keys(t);"alpha"in t&&(o.splice(o.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);var a=o.sort().join("");if(!(a in zn))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=zn[a];var h=Tn[this.model].labels,u=[];for(i=0;i<h.length;i++)u.push(t[h[i]]);this.color=Hn(u)}if(Dn[this.model])for(e=Tn[this.model].channels,i=0;i<e;i++){var l=Dn[this.model][i];l&&(this.color[i]=l(this.color[i]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function Cn(t,n,i){return(t=Array.isArray(t)?t:[t]).forEach((function(t){(Dn[t]||(Dn[t]=[]))[n]=i})),t=t[0],function(e){var r;return arguments.length?(i&&(e=i(e)),(r=this[t]()).color[n]=e,r):(r=this[t]().color[n],i&&(r=i(r)),r)}}function jn(t){return function(n){return Math.max(0,Math.min(t,n))}}function Nn(t){return Array.isArray(t)?t:[t]}function Hn(t,n){for(var i=0;i<n;i++)"number"!=typeof t[i]&&(t[i]=0);return t}En.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(t){var n=this.model in In.to?this:this.rgb(),i=1===(n=n.round("number"==typeof t?t:1)).valpha?n.color:n.color.concat(this.valpha);return In.to[n.model](i)},percentString:function(t){var n=this.rgb().round("number"==typeof t?t:1),i=1===n.valpha?n.color:n.color.concat(this.valpha);return In.to.rgb.percent(i)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var t={},n=Tn[this.model].channels,i=Tn[this.model].labels,e=0;e<n;e++)t[i[e]]=this.color[e];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray:function(){var t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject:function(){var t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round:function(t){return t=Math.max(t||0,0),new En(this.color.map(function(t){return function(n){return function(t,n){return Number(t.toFixed(n))}(n,t)}}(t)).concat(this.valpha),this.model)},alpha:function(t){return arguments.length?new En(this.color.concat(Math.max(0,Math.min(1,t))),this.model):this.valpha},red:Cn("rgb",0,jn(255)),green:Cn("rgb",1,jn(255)),blue:Cn("rgb",2,jn(255)),hue:Cn(["hsl","hsv","hsl","hwb","hcg"],0,(function(t){return(t%360+360)%360})),saturationl:Cn("hsl",1,jn(100)),lightness:Cn("hsl",2,jn(100)),saturationv:Cn("hsv",1,jn(100)),value:Cn("hsv",2,jn(100)),chroma:Cn("hcg",1,jn(100)),gray:Cn("hcg",2,jn(100)),white:Cn("hwb",1,jn(100)),wblack:Cn("hwb",2,jn(100)),cyan:Cn("cmyk",0,jn(100)),magenta:Cn("cmyk",1,jn(100)),yellow:Cn("cmyk",2,jn(100)),black:Cn("cmyk",3,jn(100)),x:Cn("xyz",0,jn(100)),y:Cn("xyz",1,jn(100)),z:Cn("xyz",2,jn(100)),l:Cn("lab",0,jn(100)),a:Cn("lab",1),b:Cn("lab",2),keyword:function(t){return arguments.length?new En(t):Tn[this.model].keyword(this.color)},hex:function(t){return arguments.length?new En(t):In.to.hex(this.rgb().round().color)},rgbNumber:function(){var t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity:function(){for(var t=this.rgb().color,n=[],i=0;i<t.length;i++){var e=t[i]/255;n[i]=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return.2126*n[0]+.7152*n[1]+.0722*n[2]},contrast:function(t){var n=this.luminosity(),i=t.luminosity();return n>i?(n+.05)/(i+.05):(i+.05)/(n+.05)},level:function(t){var n=this.contrast(t);return n>=7.1?"AAA":n>=4.5?"AA":""},isDark:function(){var t=this.rgb().color;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var t=this.rgb(),n=0;n<3;n++)t.color[n]=255-t.color[n];return t},lighten:function(t){var n=this.hsl();return n.color[2]+=n.color[2]*t,n},darken:function(t){var n=this.hsl();return n.color[2]-=n.color[2]*t,n},saturate:function(t){var n=this.hsl();return n.color[1]+=n.color[1]*t,n},desaturate:function(t){var n=this.hsl();return n.color[1]-=n.color[1]*t,n},whiten:function(t){var n=this.hwb();return n.color[1]+=n.color[1]*t,n},blacken:function(t){var n=this.hwb();return n.color[2]+=n.color[2]*t,n},grayscale:function(){var t=this.rgb().color,n=.3*t[0]+.59*t[1]+.11*t[2];return En.rgb(n,n,n)},fade:function(t){return this.alpha(this.valpha-this.valpha*t)},opaquer:function(t){return this.alpha(this.valpha+this.valpha*t)},rotate:function(t){var n=this.hsl(),i=n.color[0];return i=(i=(i+t)%360)<0?360+i:i,n.color[0]=i,n},mix:function(t,n){if(!t||!t.rgb)throw new Error(\'Argument to "mix" was not a Color instance, but rather an instance of \'+typeof t);var i=t.rgb(),e=this.rgb(),r=void 0===n?.5:n,s=2*r-1,o=i.alpha()-e.alpha(),a=((s*o==-1?s:(s+o)/(1+s*o))+1)/2,h=1-a;return En.rgb(a*i.red()+h*e.red(),a*i.green()+h*e.green(),a*i.blue()+h*e.blue(),i.alpha()*r+e.alpha()*(1-r))}},Object.keys(Tn).forEach((function(t){if(-1===Un.indexOf(t)){var n=Tn[t].channels;En.prototype[t]=function(){if(this.model===t)return new En(this);if(arguments.length)return new En(arguments,t);var i="number"==typeof arguments[n]?n:this.valpha;return new En(Nn(Tn[this.model][t].raw(this.color)).concat(i),t)},En[t]=function(i){return"number"==typeof i&&(i=Hn(Ln.call(arguments),n)),new En(i,t)}}}));var Vn=En;class Rn{constructor(t,n){this.position=t,this.index=n,this.faces=[],this.neighbors=[]}addUniqueNeighbor(t){-1===this.neighbors.indexOf(t)&&this.neighbors.push(t)}}class $n{constructor(t,n,i,e){this.a=e.a,this.b=e.b,this.c=e.c,this.v1=t,this.v2=n,this.v3=i,this.normal=[],this.computeNormal(),t.faces.push(this),t.addUniqueNeighbor(n),t.addUniqueNeighbor(i),n.faces.push(this),n.addUniqueNeighbor(t),n.addUniqueNeighbor(i),i.faces.push(this),i.addUniqueNeighbor(t),i.addUniqueNeighbor(n)}computeNormal(){const t=this.v1.position,n=this.v2.position,i=this.v3.position,e=Pt([],St([],i,n),St([],t,n));At(this.normal,e)}hasVertex(t){return t===this.v1||t===this.v2||t===this.v3}}\n/*!\n     * Contains code from google filament\n     * https://github.com/google/filament/\n     * License Apache-2.0\n     */const Wn=[],qn=[],Bn=[],Gn=[];function Jn(t,n,i){const e=Pt(qn,n,i);t=Tt(t,function(t,n,i,e,r,s,o,a,h,u){return t[0]=n,t[1]=i,t[2]=e,t[3]=r,t[4]=s,t[5]=o,t[6]=a,t[7]=h,t[8]=u,t}(Wn,i[0],i[1],i[2],...e,...n));if((t=function(t){return t[3]<0?Ut(t,t,-1):t}(t=zt(t,t)))[3]<1/32767){t[3]=1/32767;const n=Math.sqrt(.9999999990686206);t[0]*=n,t[1]*=n,t[2]*=n}const r=i[3]>0?Pt(Bn,i,n):Pt(Bn,n,i);return kt(Pt(Gn,i,n),r)<0&&Ut(t,t,-1),t}function Xn(t,n){const i=[],e=[];let r=0;for(r=0;r<t.length;r+=3){const n=new Rn([t[r],t[r+1],t[r+2]],r/3);i.push(n)}if(!n.length){const t=n;n=[];for(let i=0;i<t;i++)n.push(i)}for(r=0;r<n.length/3;r++){const t={a:n[3*r],b:n[3*r+1],c:n[3*r+2]};new $n(i[t.a],i[t.b],i[t.c],t)}const s=[],o=[0,0,0];for(r=0;r<i.length;r++){const t=i[r],n=t.index;bt(o,0,0,0);let a=t.faces.length;for(let n=0;n<a;n++)xt(o,o,t.faces[n].normal);a=a||1,bt(s,a,a,a),Ft(o,o,s),e[3*n]=o[0],e[3*n+1]=o[1],e[3*n+2]=o[2]}return e}\n/*!\n     * Contains code from THREE.JS\n     * https://github.com/mrdoob/three.js/\n     * License MIT\n     * \n     * Generate tangents per vertex.\n     */function Zn(t,n,i){return t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t}function Yn(t,n,i){return t[0]=n[i],t[1]=n[i+1],t}var Kn={exports:{}};function Qn(t,n,i){i=i||2;var e,r,s,o,a,h,u,l=n&&n.length,c=l?n[0]*i:t.length,f=ti(t,0,c,i,!0),d=[];if(!f||f.next===f.prev)return d;if(l&&(f=function(t,n,i,e){var r,s,o,a,h,u=[];for(r=0,s=n.length;r<s;r++)o=n[r]*e,a=r<s-1?n[r+1]*e:t.length,(h=ti(t,o,a,e,!1))===h.next&&(h.steiner=!0),u.push(ci(h));for(u.sort(ai),r=0;r<u.length;r++)i=ni(i=hi(u[r],i),i.next);return i}(t,n,f,i)),t.length>80*i){e=s=t[0],r=o=t[1];for(var y=i;y<c;y+=i)(a=t[y])<e&&(e=a),(h=t[y+1])<r&&(r=h),a>s&&(s=a),h>o&&(o=h);u=0!==(u=Math.max(s-e,o-r))?1/u:0}return ii(f,d,i,e,r,u),d}function ti(t,n,i,e,r){var s,o;if(r===Ai(t,n,i,e)>0)for(s=n;s<i;s+=e)o=bi(s,t[s],t[s+1],o);else for(s=i-e;s>=n;s-=e)o=bi(s,t[s],t[s+1],o);return o&&vi(o,o.next)&&(xi(o),o=o.next),o}function ni(t,n){if(!t)return t;n||(n=t);var i,e=t;do{if(i=!1,e.steiner||!vi(e,e.next)&&0!==yi(e.prev,e,e.next))e=e.next;else{if(xi(e),(e=n=e.prev)===e.next)break;i=!0}}while(i||e!==n);return n}function ii(t,n,i,e,r,s,o){if(t){!o&&s&&function(t,n,i,e){var r=t;do{null===r.z&&(r.z=li(r.x,r.y,n,i,e)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){var n,i,e,r,s,o,a,h,u=1;do{for(i=t,t=null,s=null,o=0;i;){for(o++,e=i,a=0,n=0;n<u&&(a++,e=e.nextZ);n++);for(h=u;a>0||h>0&&e;)0!==a&&(0===h||!e||i.z<=e.z)?(r=i,i=i.nextZ,a--):(r=e,e=e.nextZ,h--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=e}s.nextZ=null,u*=2}while(o>1)}(r)}(t,e,r,s);for(var a,h,u=t;t.prev!==t.next;)if(a=t.prev,h=t.next,s?ri(t,e,r,s):ei(t))n.push(a.i/i),n.push(t.i/i),n.push(h.i/i),xi(t),t=h.next,u=h.next;else if((t=h)===u){o?1===o?ii(t=si(ni(t),n,i),n,i,e,r,s,2):2===o&&oi(t,n,i,e,r,s):ii(ni(t),n,i,e,r,s,1);break}}}function ei(t){var n=t.prev,i=t,e=t.next;if(yi(n,i,e)>=0)return!1;for(var r=t.next.next;r!==t.prev;){if(fi(n.x,n.y,i.x,i.y,e.x,e.y,r.x,r.y)&&yi(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ri(t,n,i,e){var r=t.prev,s=t,o=t.next;if(yi(r,s,o)>=0)return!1;for(var a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,h=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,u=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,l=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,c=li(a,h,n,i,e),f=li(u,l,n,i,e),d=t.prevZ,y=t.nextZ;d&&d.z>=c&&y&&y.z<=f;){if(d!==t.prev&&d!==t.next&&fi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&yi(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,y!==t.prev&&y!==t.next&&fi(r.x,r.y,s.x,s.y,o.x,o.y,y.x,y.y)&&yi(y.prev,y,y.next)>=0)return!1;y=y.nextZ}for(;d&&d.z>=c;){if(d!==t.prev&&d!==t.next&&fi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&yi(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;y&&y.z<=f;){if(y!==t.prev&&y!==t.next&&fi(r.x,r.y,s.x,s.y,o.x,o.y,y.x,y.y)&&yi(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function si(t,n,i){var e=t;do{var r=e.prev,s=e.next.next;!vi(r,s)&&pi(r,e,e.next,s)&&wi(r,s)&&wi(s,r)&&(n.push(r.i/i),n.push(e.i/i),n.push(s.i/i),xi(e),xi(e.next),e=t=s),e=e.next}while(e!==t);return ni(e)}function oi(t,n,i,e,r,s){var o=t;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&di(o,a)){var h=Mi(o,a);return o=ni(o,o.next),h=ni(h,h.next),ii(o,n,i,e,r,s),void ii(h,n,i,e,r,s)}a=a.next}o=o.next}while(o!==t)}function ai(t,n){return t.x-n.x}function hi(t,n){var i=function(t,n){var i,e=n,r=t.x,s=t.y,o=-1/0;do{if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){var a=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=r&&a>o){if(o=a,a===r){if(s===e.y)return e;if(s===e.next.y)return e.next}i=e.x<e.next.x?e:e.next}}e=e.next}while(e!==n);if(!i)return null;if(r===o)return i;var h,u=i,l=i.x,c=i.y,f=1/0;e=i;do{r>=e.x&&e.x>=l&&r!==e.x&&fi(s<c?r:o,s,l,c,s<c?o:r,s,e.x,e.y)&&(h=Math.abs(s-e.y)/(r-e.x),wi(e,t)&&(h<f||h===f&&(e.x>i.x||e.x===i.x&&ui(i,e)))&&(i=e,f=h)),e=e.next}while(e!==u);return i}(t,n);if(!i)return n;var e=Mi(i,t),r=ni(i,i.next);return ni(e,e.next),n===i?r:n}function ui(t,n){return yi(t.prev,t,n.prev)<0&&yi(n.next,t,t.next)<0}function li(t,n,i,e,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-e)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function ci(t){var n=t,i=t;do{(n.x<i.x||n.x===i.x&&n.y<i.y)&&(i=n),n=n.next}while(n!==t);return i}function fi(t,n,i,e,r,s,o,a){return(r-o)*(n-a)-(t-o)*(s-a)>=0&&(t-o)*(e-a)-(i-o)*(n-a)>=0&&(i-o)*(s-a)-(r-o)*(e-a)>=0}function di(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!function(t,n){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&pi(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(t,n)&&(wi(t,n)&&wi(n,t)&&function(t,n){var i=t,e=!1,r=(t.x+n.x)/2,s=(t.y+n.y)/2;do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(e=!e),i=i.next}while(i!==t);return e}(t,n)&&(yi(t.prev,t,n.prev)||yi(t,n.prev,n))||vi(t,n)&&yi(t.prev,t,t.next)>0&&yi(n.prev,n,n.next)>0)}function yi(t,n,i){return(n.y-t.y)*(i.x-n.x)-(n.x-t.x)*(i.y-n.y)}function vi(t,n){return t.x===n.x&&t.y===n.y}function pi(t,n,i,e){var r=gi(yi(t,n,i)),s=gi(yi(t,n,e)),o=gi(yi(i,e,t)),a=gi(yi(i,e,n));return r!==s&&o!==a||(!(0!==r||!mi(t,i,n))||(!(0!==s||!mi(t,e,n))||(!(0!==o||!mi(i,t,e))||!(0!==a||!mi(i,n,e)))))}function mi(t,n,i){return n.x<=Math.max(t.x,i.x)&&n.x>=Math.min(t.x,i.x)&&n.y<=Math.max(t.y,i.y)&&n.y>=Math.min(t.y,i.y)}function gi(t){return t>0?1:t<0?-1:0}function wi(t,n){return yi(t.prev,t,t.next)<0?yi(t,n,t.next)>=0&&yi(t,t.prev,n)>=0:yi(t,n,t.prev)<0||yi(t,t.next,n)<0}function Mi(t,n){var i=new Fi(t.i,t.x,t.y),e=new Fi(n.i,n.x,n.y),r=t.next,s=n.prev;return t.next=n,n.prev=t,i.next=r,r.prev=i,e.next=i,i.prev=e,s.next=e,e.prev=s,e}function bi(t,n,i,e){var r=new Fi(t,n,i);return e?(r.next=e.next,r.prev=e,e.next.prev=r,e.next=r):(r.prev=r,r.next=r),r}function xi(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Fi(t,n,i){this.i=t,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ai(t,n,i,e){for(var r=0,s=n,o=i-e;s<i;s+=e)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}Kn.exports=Qn,Kn.exports.default=Qn,Qn.deviation=function(t,n,i,e){var r=n&&n.length,s=r?n[0]*i:t.length,o=Math.abs(Ai(t,0,s,i));if(r)for(var a=0,h=n.length;a<h;a++){var u=n[a]*i,l=a<h-1?n[a+1]*i:t.length;o-=Math.abs(Ai(t,u,l,i))}var c=0;for(a=0;a<e.length;a+=3){var f=e[a]*i,d=e[a+1]*i,y=e[a+2]*i;c+=Math.abs((t[f]-t[y])*(t[d+1]-t[f+1])-(t[f]-t[d])*(t[y+1]-t[f+1]))}return 0===o&&0===c?0:Math.abs((c-o)/o)},Qn.flatten=function(t){for(var n=t[0][0].length,i={vertices:[],holes:[],dimensions:n},e=0,r=0;r<t.length;r++){for(var s=0;s<t[r].length;s++)for(var o=0;o<n;o++)i.vertices.push(t[r][s][o]);r>0&&(e+=t[r-1].length,i.holes.push(e))}return i};var ki=Kn.exports;\n/*!\n     * @maptalks/vector-packer v0.63.4\n     * LICENSE : UNLICENSED\n     * (c) 2016-2022 maptalks.com\n     */const Pi={Point:1,LineString:2,Polygon:3,MultiPoint:4,MultiLineString:5,MultiPolygon:6};function Si(t,n={}){var i=[];if("FeatureCollection"===t.type)for(var e=0;e<t.features.length;e++)_i(i,t.features[e],n,e);else _i(i,"Feature"===t.type?t:{geometry:t},n);return i}function _i(t,n,i,e){if(n.geometry&&n.geometry.geometry){var r=n.geometry.coordinates,s=n.geometry.type,o=[],a=n.id;if(i.promoteId?a=n.properties[i.promoteId]:i.generateId&&(a=e||0),"Point"===s)Oi(r,o);else if("MultiPoint"===s)for(var h=0;h<r.length;h++)Oi(r[h],o);else if("LineString"===s)Ti([r],o);else if("MultiLineString"===s){if(i.lineMetrics){for(h=0;h<r.length;h++)Ii(r[h],o=[]),t.push(Li(a,"LineString",o,n.properties));return}Ti(r,o)}else if("Polygon"===s)Ti(r,o);else{if("MultiPolygon"!==s){if("GeometryCollection"===s){for(h=0;h<n.geometry.geometries.length;h++)_i(t,{id:a,geometry:n.geometry.geometries[h],properties:n.properties},i,e);return}return void console.warn(`Input data type(${s}) is not a valid GeoJSON geometry type.`)}for(h=0;h<r.length;h++){var u=[];Ti(r[h],u),o.push(u)}}t.push(Li(a,s,o,n.properties))}}function Oi(t,n){n.push([new Ht(t[0],t[1])])}function Ii(t,n){for(var i=0;i<t.length;i++)n.push(new Ht(t[i][0],t[i][1]))}function Ti(t,n,i,e){for(var r=0;r<t.length;r++){var s=[];Ii(t[r],s),n.push(s)}}function Li(t,n,i,e){return{id:void 0===t?null:t,type:Pi[n],geometry:i,properties:e}}\n/*!\n     * Codes from mapbox-gl-js\n     * github.com/mapbox/mapbox-gl-js\n     * MIT License\n     */function Ui(t,{width:n,height:i},e,r){if(r){if(r.length!==n*i*e)throw new RangeError("mismatched image size")}else r=new Uint8Array(n*i*e);return t.width=n,t.height=i,t.data=r,t}function zi(t,{width:n,height:i},e){if(n===t.width&&i===t.height)return;const r=Ui({},{width:n,height:i},e);Di(t,r,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,n),height:Math.min(t.height,i)},e),t.width=n,t.height=i,t.data=r.data}function Di(t,n,i,e,r,s){if(0===r.width||0===r.height)return n;if(r.width>t.width||r.height>t.height||i.x>t.width-r.width||i.y>t.height-r.height)throw new RangeError("out of range source coordinates for image copy");if(r.width>n.width||r.height>n.height||e.x>n.width-r.width||e.y>n.height-r.height)throw new RangeError("out of range destination coordinates for image copy");const o=t.data,a=n.data;if(o===a)return n;for(let h=0;h<r.height;h++){const u=((i.y+h)*t.width+i.x)*s,l=((e.y+h)*n.width+e.x)*s;for(let t=0;t<r.width*s;t++)a[l+t]=o[u+t]}return n}class Ei{constructor(t,n){Ui(this,t,1,n)}resize(t){zi(this,t,1)}clone(){return new Ei({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,n,i,e,r){Di(t,n,i,e,r,1)}}class Ci{constructor(t,n){Ui(this,t,4,n)}resize(t){zi(this,t,4)}clone(){return new Ci({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,n,i,e,r){Di(t,n,i,e,r,4)}}\n/*!\n     * Codes from mapbox-gl-js\n     * github.com/mapbox/mapbox-gl-js\n     * MIT License\n     */class ji{constructor(t,{pixelRatio:n}){this.paddedRect=t,this.pixelRatio=n||1}get tl(){return[this.paddedRect.x+1,this.paddedRect.y+1]}get br(){return[this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]}get displaySize(){return[(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]}}class Ni{constructor(t){this.glyphMap=t,this.build()}build(){const t=this.glyphMap,n={},i=new Rt(0,0,{autoResize:!0}),e=[];for(const i in t){const r=t[i],s={x:0,y:0,w:r.data.width+2,h:r.data.height+2};e.push(s),n[i]=new ji(s,r)}if(i.pack(e,{inPlace:!0}),!Hi(i.w)||!Hi(i.h)){const t=Vi(i.w),n=Vi(i.h);i.resize(t,n)}const r=new Ci({width:i.w,height:i.h});for(const i in t){const e=t[i],s=n[i].paddedRect;Ci.copy(e.data,r,{x:0,y:0},{x:s.x+1,y:s.y+1},e.data)}this.image=r,this.positions=n}}function Hi(t){return 0==(t&t-1)&&0!==t}function Vi(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}\n/*!\n     * Codes from mapbox-gl-js\n     * github.com/mapbox/mapbox-gl-js\n     * MIT License\n     * TODO 升级为potpack\n     */class Ri{constructor(t){this.glyphMap=t,this.build()}build(){const t=this.glyphMap,n={},i=new Rt(0,0,{autoResize:!0}),e=[];for(const i in t){const r=t[i],s=n[i]={};for(const t in r){const n=r[+t];if(!n||0===n.bitmap.width||0===n.bitmap.height)continue;const i={x:0,y:0,w:n.bitmap.width+2,h:n.bitmap.height+2};e.push(i),s[t]={rect:i,metrics:n.metrics}}}i.pack(e,{inPlace:!0});const r=new Ei({width:i.w,height:i.h});for(const i in t){const e=t[i];for(const t in e){const s=e[+t];if(!s||0===s.bitmap.width||0===s.bitmap.height)continue;const o=n[i][t].rect;Ei.copy(s.bitmap,r,{x:0,y:0},{x:o.x+1,y:o.y+1},s.bitmap)}}this.image=r,this.positions=n}}function $i(t){return t<65536?Uint16Array:Uint32Array}function Wi(t){return(t=Math.abs(t))<128?Int8Array:t<32768?Int16Array:Float32Array}function qi(t){return t<256?Uint8Array:t<65536?Uint16Array:Float32Array}function Bi(t){const n=t.type,i=[];if(1===n||4===n)for(let n=0;n<t.geometry.length;n++)Oi(t.geometry[n],i);else if(2===n)Ti(t.geometry,i);else if(3===n)Ti(t.geometry,i);else if(5===n)Ti(t.geometry,i);else if(6===n)for(let n=0;n<t.geometry.length;n++){const e=[];Ti(t.geometry[n],e),i.push(e)}return t.geometry=i,t}function Gi(t){for(let n=1;n<arguments.length;n++){const i=arguments[n];for(const n in i)t[n]=i[n]}return t}function Ji(t){return null==t}function Xi(t){return"number"==typeof t&&!isNaN(t)}function Zi(t){return"object"==typeof t&&!!t}function Yi(t){return!Ji(t)&&("string"==typeof t||null!==t.constructor&&t.constructor===String)}const Ki=Object.prototype.hasOwnProperty;function Qi(t,n){return Ki.call(t,n)}function te(t){return m(t)&&t.property}function ne(t){let n=0;for(let i,e,r=0,s=t.length,o=s-1;r<s;o=r++)i=t[r],e=t[o],n+=void 0!==i.x?(e.x-i.x)*(i.y+e.y):(e[0]-i[0])*(i[1]+e[1]);return n}function ie(t,n,i,e,r){const s=t[n*e],o=t[n*e+1],a=t[i*e],h=t[i*e+1];return s===a&&(s<0||s>r)&&o!==h||o===h&&(o<0||o>r)&&s!==a}function ee(t,n,i){let e=i;return n&&t&&(e=t[n]),void 0===e&&(e=i),10*(e||0)}function re(t,n,i,e,r,s,o){const a=ee(t.properties,i,e),h=a*n;let u=a;return r?u=ee(t.properties,r,s):o&&(u=a-ee(t.properties,o,0)),u*=n,{altitude:h,height:u}}function se(t,n){return n<1/0&&(t.x<0||t.x>n||t.y<0||t.y>n)}function oe(t){return null==t}function ae(t,n,i){if(t===i||t===n)return t;const e=i-n;return((t-n)%e+e)%e+n}class he{constructor(t,n,i,e){this.feature=t,this.symbol=n,this.fnTypes=i,this.options=e}getPolygonResource(){let t=this.symbol.polygonPatternFile;const{polygonPatternFileFn:n}=this.fnTypes;return this.U(t,n)}getLineResource(){let t=this.symbol.linePatternFile;const{linePatternFileFn:n}=this.fnTypes;return this.U(t,n)}U(t,n){return n&&(t=n(this.options.zoom,this.feature.properties)),t}}const ue={lineWidth:1,lineStrokeWidth:1,lineDx:1,lineDy:1,lineOpacity:1,linePatternAnimSpeed:1,markerWidth:1,markerHeight:1,markerDx:1,markerDy:1,markerSpacing:1,markerOpacity:1,markerRotation:1,textWrapWidth:1,textSpacing:1,textSize:1,textHaloRadius:1,textHaloOpacity:1,textDx:1,textDy:1,textOpacity:1,textRotation:1,polygonOpacity:1};class le{static isAtlasLoaded(t,n={}){const{iconAtlas:i}=n;return!!(!t||i&&i.positions[t])}static genFnTypes(t){const n={};for(const i in t)if(te(t[i])){const e=(i+"_Fn_0").trim(),r=(i+"Fn").trim();ue[i]?(n[e]=g(t[i]),n[r]=(t,i)=>{const r=n[e](t,i);return te(r)?g(r)(t,i):r}):(n[e]=w(t[i]),n[r]=(t,i)=>{const r=n[e](t,i);return te(r)?w(r)(t,i):r})}return n}constructor(t,n,i){this.options=i,this.features=this.D(t),this.symbolDef=n,this.symbol=M(n,()=>[i.zoom]),this.styledVectors=[],this.properties={},this.C=le.genFnTypes(this.symbolDef),te(this.symbolDef.visible)&&(this.j=g(this.symbolDef.visible)),i.atlas&&(this.iconAtlas=i.atlas.iconAtlas,this.glyphAtlas=i.atlas.glyphAtlas)}D(t){if(!t.length)return t;const n="__fea_idx".trim();let e,r=0,s=t[r];for(;!s.geometry;)r++,s=t[r];if(Array.isArray(s.geometry)&&s.properties){let n=s.geometry[0];for(;Array.isArray(n);)n=n[0];n instanceof Ht&&(e=t)}if(!e)if(e=[],Array.isArray(s.geometry))for(let n=0;n<t.length;n++){const i=Gi({},t[n]);e.push(Bi(i))}else for(let i=0;i<t.length;i++){const r=t[i],s=Si(r);for(let t=0;t<s.length;t++){const i=s[t];i[n]=r[n],e.push(i)}}const o=this.options.order;if(o){const t=[];for(let n=0;n<o.length;n++)o[n]&&t.push(i(o[n]));e=e.sort((n,i)=>{const e=t.length;let r=e,s=e;for(let o=0;o<e&&(t[o](n)&&(r=o),t[o](i)&&(s=o),!(r<e&&s<e));o++);return r-s})}return e}load(t=1){const n="__fea_idx".trim(),i="_debug_info".trim(),e=this.C,r=this.styledVectors;this.count=0;const s=this.features;if(!s||!s.length)return Promise.resolve(null);const o={},a={},h={zoom:this.options.zoom},u=M(this.symbolDef,()=>[h.zoom]);let l=0,c=s.length;const f=this.options.debugIndex;try{for(;l<c;l++){const t=s[l];if(!t||!t.geometry)continue;if(void 0!==f&&t[i].index!==f)continue;t.properties||(t.properties={}),t.properties.$layer=t.layer,t.properties.$type=t.type;const c=this.createStyledVector(t,u,e,h,o,a);c&&c.feature.geometry&&(c.featureIdx=void 0===t[n]?l:t[n],this.count++,r.push(c))}}catch(t){return Promise.reject(t)}return this.options.atlas?Promise.resolve(this.pack(t)):this.loadAtlas(o,a).then(()=>this.pack(t))}loadAtlas(t,n){return new Promise((i,e)=>{this.fetchAtlas(t,n,(t,n)=>{if(t)e(t);else{if(n){const{icons:t,glyphs:i}=n;if(t&&Object.keys(t).length){for(const n in t){const i=t[n],{width:e,height:r,data:s}=i.data;i.data=new Ci({width:e,height:r},s)}this.iconAtlas=new Ni(t)}if(i&&Object.keys(i).length){for(const t in i){const n=i[t];for(const t in n){const i=n[t],{width:e,height:r,data:s}=i.bitmap;i.bitmap=new Ei({width:e,height:r},s)}}this.glyphAtlas=new Ri(i)}}i({glyphAtlas:this.glyphAtlas,iconAtlas:this.iconAtlas})}})})}fetchAtlas(t,n,i){Object.keys(t).length>0||Object.keys(n).length>0?this.options.requestor(t,n,i):i()}pack(t){if(!this.count)return null;if(null==t)throw new Error("layout scale is undefined");const n=this.createDataPack(this.styledVectors,t);if(!n)return null;n.properties=this.properties,this.empty&&(n.empty=!0);const i=n.buffers;delete n.buffers;const e={data:n,buffers:i};if(this.iconAtlas){const t=e.data.iconAtlas=ce(this.iconAtlas);if(t.glyphMap)for(const n in t.glyphMap)i.push(t.glyphMap[n].data.data.buffer);i.push(e.data.iconAtlas.image.data.buffer)}return this.glyphAtlas&&(e.data.glyphAtlas=ce(this.glyphAtlas),i.push(e.data.glyphAtlas.image.data.buffer)),e}createStyledVector(t,n,i,e){return new he(t,n,i,e)}createDataPack(t,n){if(!t||!t.length)return null;this.maxIndex=0,this.maxPos=0,this.maxAltitude=0;const i=this.data={};let e=this.elements=[];const r=this.getFormat(Array.isArray(t[0])?t[0][0].symbol:t[0].symbol);for(let t=0;t<r.length;t++)i[r[t].name]=[];let s=[],o=0;const a=[];let h=0,u=!1;for(let e=0,r=t.length;e<r;e++){if(!t[e].feature.geometry)continue;const r=Array.isArray(t[e])?t[e][0].feature.id:t[e].feature.id;Xi(r)&&(Math.abs(r)>h&&(h=Math.abs(r)),r<0&&(u=!0));const l=this.data.aPosition.length;if(Array.isArray(t[e]))for(let i=0;i<t[e].length;i++)this.N(t[e][i],n);else this.N(t[e],n);const c=(i.aPosition.length-l)/3;for(let n=0;n<c;n++)s.push(t[e].featureIdx),Xi(r)&&a.push(r);o=Math.max(o,t[e].featureIdx)}if(this.hasElements()&&!e.length)return null;s=new(qi(o))(s),r[0].type=this.options.positionType?this.options.positionType:Wi(Math.max(this.maxPos,this.maxAltitude));const l=this.options.center;if(l&&(l[0]||l[1])){const t=i.aPosition;for(let n=0;n<t.length;n+=3)t[n]-=l[0],t[n+1]-=l[1]}const c=function(t,n){const i={};for(let e=0;e<t.length;e++){const r=t[e],s=r.type,o=r.name;i[o]=s===Array?n[o]:new s(n[o])}return i}(r,i);c.aPickingId=s;const f=[];for(const t in c)f.push(c[t].buffer);e=new($i(this.maxIndex))(e),f.push(e.buffer);const d={data:c,indices:this.hasElements()?e:null,positionSize:3,\n//!this.maxAltitude ? 2 : 3,\nbuffers:f,symbolIndex:this.symbolDef.index||{index:0}};if(a.length){const t=u?Wi(h):qi(h);d.featureIds=new t(a),f.push(d.featureIds.buffer)}else d.featureIds=[];return d}N(t,n){this.j&&this.j.isZoomConstant&&!this.j(null,t.feature.properties)||this.placeVector(t,n,this.formatWidth)}addElements(...t){this.maxIndex=Math.max(this.maxIndex,...t),this.elements.push(...t)}hasElements(){return!0}getAltitude(t){const{altitudeProperty:n,defaultAltitude:i,altitudeScale:e}=this.options;let r=ee(t,n,i);return e&&(r*=e),this.maxAltitude=Math.max(this.maxAltitude,Math.abs(r)),r}getIconAtlasMaxValue(){const t=this.iconAtlas.positions;let n=0;for(const i in t)if(Qi(t,i)){const{tl:e,displaySize:r}=t[i],s=Math.max(e[0],e[1],r[0]-1,r[1]-1);s>n&&(n=s)}return n}}function ce(t){let n=t.positions,i=t.image&&t.image.format||"alpha";if(t instanceof Ni){n={};for(const i in t.positions){const e=t.positions[i];n[i]={paddedRect:e.paddedRect,pixelRatio:e.pixelRatio,tl:e.tl,br:e.br,displaySize:e.displaySize}}i="rgba"}const e=t.image;return{image:{width:e.width,height:e.height,data:e.data,format:i},glyphMap:t.glyphMap,positions:n}}function fe(t,n,i,e){const r="__fn_textSize".trim();let s=t.textSize;if(Ji(n.textSize))return[16,16];t[r]&&(s=t[r]);const o=[];var a;return o[0]=Ji(a=s)||"function"!=typeof a&&(null===a.constructor||a.constructor!==Function)?s:s(e,i),o[1]=o[0],o}function de(t){const n=t.stops;let i=-1/0;for(let t=0;t<n.length;t++){let e=n[t][1];Zi(n[t][1])&&(e=de(n[t][1])),e>i&&(i=e)}return i}const ye=/\\{([\\w_]+)\\}/g;function ve(t,n){return Yi(t)?t.replace(ye,(function(t,i){if(!n)return"";const e=n[i];return Ji(e)?"":Array.isArray(e)?e.join():e})):t}const pe=t=>t>=11904&&t<=12031,me=t=>t>=12032&&t<=12255,ge=t=>t>=12272&&t<=12287,we=t=>t>=12288&&t<=12351,Me=t=>t>=12352&&t<=12447,be=t=>t>=12448&&t<=12543,xe=t=>t>=12544&&t<=12591,Fe=t=>t>=12704&&t<=12735,Ae=t=>t>=12736&&t<=12783,ke=t=>t>=12784&&t<=12799,Pe=t=>t>=12800&&t<=13055,Se=t=>t>=13056&&t<=13311,_e=t=>t>=13312&&t<=19903,Oe=t=>t>=19968&&t<=40959,Ie=t=>t>=40960&&t<=42127,Te=t=>t>=42128&&t<=42191,Le=t=>t>=63744&&t<=64255,Ue=t=>t>=64336&&t<=65023,ze=t=>t>=65040&&t<=65055,De=t=>t>=65072&&t<=65103,Ee=t=>t>=65104&&t<=65135,Ce=t=>t>=65136&&t<=65279,je=t=>t>=65280&&t<=65519;function Ne(t){return!((t=>t>=1536&&t<=1791)(t)||(t=>t>=1872&&t<=1919)(t)||(t=>t>=2208&&t<=2303)(t)||Ue(t)||Ce(t))}function He(t){return!!(746===t||747===t||!(t<4352)&&(Fe(t)||xe(t)||De(t)&&!(t>=65097&&t<=65103)||Le(t)||Se(t)||pe(t)||Ae(t)||!(!we(t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||_e(t)||Oe(t)||Pe(t)||(t=>t>=12592&&t<=12687)(t)||(t=>t>=43360&&t<=43391)(t)||(t=>t>=55216&&t<=55295)(t)||(t=>t>=4352&&t<=4607)(t)||(t=>t>=44032&&t<=55215)(t)||Me(t)||ge(t)||(t=>t>=12688&&t<=12703)(t)||me(t)||ke(t)||be(t)&&12540!==t||!(!je(t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Ee(t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||(t=>t>=5120&&t<=5759)(t)||(t=>t>=6320&&t<=6399)(t)||ze(t)||(t=>t>=19904&&t<=19967)(t)||Ie(t)||Te(t)))}function Ve(t){return!(He(t)||function(t){return!!((t=>t>=128&&t<=255)(t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||(t=>t>=8192&&t<=8303)(t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||(t=>t>=8448&&t<=8527)(t)||(t=>t>=8528&&t<=8591)(t)||(t=>t>=8960&&t<=9215)(t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||(t=>t>=9216&&t<=9279)(t)&&9251!==t||(t=>t>=9280&&t<=9311)(t)||(t=>t>=9312&&t<=9471)(t)||(t=>t>=9632&&t<=9727)(t)||(t=>t>=9728&&t<=9983)(t)&&!(t>=9754&&t<=9759)||(t=>t>=11008&&t<=11263)(t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||we(t)||be(t)||(t=>t>=57344&&t<=63743)(t)||De(t)||Ee(t)||je(t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Re(t){return t>=1424&&t<=2303||Ue(t)||Ce(t)}const $e=[[9,9],[32,32],[5760,5760],[8192,8198],[8200,8202],[8287,12288],[6158,6158],[8203,8205]];function We(t){for(const n of $e)if(t>=n[0]&&t<=n[1])return!0;return!1}const qe={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\\\":"＼","]":"﹈","^":"＾",H:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};function Be(t,n,i,e,r,s,o,a,h,u){let l=t.trim();2===u&&(l=function(t){let n="";for(let i=0;i<t.length;i++){const e=t.charCodeAt(i+1)||null,r=t.charCodeAt(i-1)||null;n+=e&&Ve(e)&&!qe[t[i+1]]||r&&Ve(r)&&!qe[t[i-1]]||!qe[t[i]]?t[i]:qe[t[i]]}return n}(l));const c=[],f={positionedGlyphs:c,text:l,top:a[1],bottom:a[1],left:a[0],right:a[0],writingMode:u};let d;return d=function(t,n){const i=[];let e=0;for(let r=0;r<n.length;r++){const s=n[r];i.push(t.substring(e,s)),e=s}return e<t.length&&i.push(t.substring(e,t.length)),i}(l,function(t,n,i,e){if(!i)return[];if(!t)return[];const r=[],s=function(t,n,i,e){let r=0;for(let i=0;i<t.length;i++){const s=e[t.charCodeAt(i)];s&&(r+=s.metrics.advance+n)}return r/Math.max(1,Math.ceil(r/i))}(t,n,i,e);let o=0;for(let i=0;i<t.length;i++){const h=t.charCodeAt(i),u=e[h];u&&!Ge[h]&&(o+=u.metrics.advance+n),i<t.length-1&&(Je[h]||!((a=h)<11904)&&(Fe(a)||xe(a)||De(a)||Le(a)||Se(a)||pe(a)||Ae(a)||we(a)||_e(a)||Oe(a)||Pe(a)||je(a)||Me(a)||ge(a)||me(a)||ke(a)||be(a)||ze(a)||Te(a)||Ie(a)))&&r.push(Ye(i+1,o,s,r,Ze(h,t.charCodeAt(i+1)),!1))}var a;return function t(n){return n?t(n.priorBreak).concat(n.index):[]}(Ye(t.length,o,s,r,0,!0))}(l,o,i,n)),function(t,n,i,e,r,s,o,a,h){let u=0,l=8,c=0;const f=t.positionedGlyphs,d="right"===s?1:"left"===s?0:.5;for(let t=0;t<i.length;t++){let r=i[t];if(r=r.trim(),!r.length){l-=e;continue}const s=f.length;for(let t=0;t<r.length;t++){const i=r.charCodeAt(t),e=n[i];e&&(He(i)&&1!==o?(32!==i&&f.push({glyph:i,x:u,y:0,vertical:!0}),u+=h+a):(32!==i&&f.push({glyph:i,x:u,y:l,vertical:!1}),u+=e.metrics.advance+a))}f.length!==s&&(c=Math.max(u-a,c),Qe(f,n,s,f.length-1,d)),u=0,l-=e}const{horizontalAlign:y,verticalAlign:v}=Ke(r);!function(t,n,i,e,r,s,o){const a=(n-i)*r,h=-(-e*o+.5)*s;if(a||h)for(let n=0;n<t.length;n++)t[n].x+=a,t[n].y+=h}(f,d,y,v,c,e,i.length);const p=i.length*e;t.top+=-v*p,t.bottom=t.top+p,t.left+=-y*c,t.right=t.left+c}(f,n,d,e,r,s,u,o,h),!!c.length&&f}const Ge={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},Je={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0};function Xe(t,n,i,e){const r=Math.pow(t-n,2);return e?t<n?r/2:2*r:r+Math.abs(i)*i}function Ze(t,n){let i=0;return 10===t&&(i-=1e4),40!==t&&65288!==t||(i+=50),41!==n&&65289!==n||(i+=50),i}function Ye(t,n,i,e,r,s){let o=null,a=Xe(n,i,r,s);for(let t=0;t<e.length;t++){const h=e[t],u=Xe(n-h.x,i,r,s)+h.badness;u<=a&&(o=h,a=u)}return{index:t,x:n,priorBreak:o,badness:a}}function Ke(t){let n=.5,i=.5;switch(t){case"right":case"top-right":case"bottom-right":n=1;break;case"left":case"top-left":case"bottom-left":n=0}switch(t){case"bottom":case"bottom-right":case"bottom-left":i=1;break;case"top":case"top-right":case"top-left":i=0}return{horizontalAlign:n,verticalAlign:i}}function Qe(t,n,i,e,r){if(!r)return;const s=n[t[e].glyph];if(s){const n=(t[e].x+s.metrics.advance)*r;if(!n)return;for(let r=i;r<=e;r++)t[r].x-=n}}function tr(t){if(!function(t){for(const n of t)if(Re(n.charCodeAt(0)))return!0;return!1}(t))return t;const n=[],i=[],e=[];let r=0,s=0,o=1,a=1;for(const h of t){const t=h.codePointAt(0);We(t)?(e.push(h),r++):(o=Re(t)?-1:1,a!==o?(s=r,i.length&&(a>0&&i.reverse(),n.push(...i)),e.length&&(n.splice(s,0,...e),e.length=0),a=o,i.length=0):e.length&&(i.push(...e),e.length=0),i.push(h),r++)}return e.length&&i.push(...e),i.length&&(a>0&&i.reverse(),n.push(...i)),n.reverse().join("")}const nr=/\\{ *([\\w_]+) *\\}/g;class ir{constructor(t,n,i,e,r){this.feature=t,this.symbolDef=n,this.symbol=i,this.options=r,this.V=this.R.bind(this),this.C=e}R(t,n){return this.feature.properties[n]||"default"}getShape(t,n){if(this.W)return this.W;const{textHorizontalAlignmentFn:i,textVerticalAlignmentFn:e,markerHorizontalAlignmentFn:r,markerVerticalAlignmentFn:s,textWrapWidthFn:o}=this.C;let a;const h=this.symbol,u=this.getIconAndGlyph(),l=this.feature.properties;if(u&&u.glyph){const{font:t,text:r}=u.glyph;if(""===r)return null;const s=this.size[0]/24,c=24,f=h.textKeepUpright,d="map"===h.textRotationAlignment&&"line"===h.textPlacement&&!h.isIconText,y=n.glyphMap[t],v=er(i?i(null,l):h.textHorizontalAlignment,e?e(null,l):h.textVerticalAlignment),p=1.2*c,m=function(t){for(let n=0;n<t.length;n++)if(!Ne(t.charAt(n).charCodeAt(0)))return!1;return!0}(r),g=m&&h.textLetterSpacing/s||0,w=[h.textDx/s||0,h.textDy/s||0],M=((o?o(null,l):h.textWrapWidth)||10*c)/s;a={},a.horizontal=Be(r,y,M,p,v,"center",g,w,c,1),m&&d&&f&&(a.vertical=Be(r,y,M,p,v,"center",g,w,c,2))}else if(u&&u.icon){if(!t.positions[u.icon.url])return null;const n=er(r?r(null,l):h.markerHorizontalAlignment,s?s(null,l):h.markerVerticalAlignment);a=function(t,n){const{horizontalAlign:i,verticalAlign:e}=Ke(n),r=-24*i,s=-24*e;return{image:t,top:s,bottom:s+24,left:r,right:r+24}}(t.positions[u.icon.url],n),this.size||(this.size=a.image.displaySize)}return this.W=a,a}getIconAndGlyph(){if(this.iconGlyph)return this.iconGlyph;const{markerFileFn:t,markerTypeFn:n,markerPathFn:i,markerWidthFn:e,markerHeightFn:r,markerFillFn:s,markerFillPatternFileFn:o,markerFillOpacityFn:a,markerTextFitFn:h,markerTextFitPaddingFn:u,markerLineColorFn:l,markerLineWidthFn:c,markerLineOpacityFn:f,markerLineDasharrayFn:d,markerLinePatternFileFn:y,markerPathWidthFn:v,markerPathHeightFn:p,textNameFn:w,textFaceNameFn:M,textStyleFn:b,textWeightFn:x}=this.C,{zoom:F}=this.options,A={},k=this.symbol,P=this.feature.properties,S=t?t(null,P):k.markerFile,_=n?n(null,P):k.markerType,O=S||_||k.markerPath,I=!Ji(this.symbolDef.textName);let T;if(O){T=function(t,n,i,e,r,s){if(Ji(n.markerWidth)&&Ji(n.markerHeight))return null;const o="__fn_markerWidth".trim(),a="__fn_markerHeight".trim();let h=n.markerWidth||0,u=n.markerHeight||0;return Zi(h)&&("identity"!==h.type?h=de(h):(h=t.markerWidth,t[o]&&(h=t[o](e,i)),Zi(h)&&(h="identity"===h.type?r(e,i):de(h)))),Zi(u)&&("identity"!==u.type?u=de(u):(u=t.markerHeight,t[a]&&(u=t[a](e,i)),Zi(u)&&(u="identity"===u.type?s(e,i):de(u)))),[h,u]}(k,this.symbolDef,P,F,e,r)||[0,0];let t=k.markerTextFit;if(h&&(t=h(F,P)),t&&t&&"none"!==t){const n=k.text.textSize;let i=k.text.textName;m(i)&&(i=g(i)(F,P));const e=ve(i,P);if(e){const i="__fn_textSize".trim(),r="__fn_textSize_0".trim();m(n)&&!k.text[i]&&(k.text[r]=g(n),k.text[i]=(t,n)=>{const i=k.text[r](t,n);return m(i)?g(i)(t,n):i});const s=fe(k.text,k.text,P,F);if("width"!==t&&"both"!==t||(T[0]=s[0]*e.length),"height"!==t&&"both"!==t||(T[1]=s[1]),s[0]&&s[1]){let t=k.markerTextFitPadding||[0,0,0,0];u&&(t=u(F,P)),T[0]+=t[1]+t[3],T[1]+=t[0]+t[2]}}else T[0]=T[1]=-1}}if(I&&(T=fe(k,this.symbolDef,P,F)),!T)return A;if(T[0]=Math.ceil(T[0]),T[1]=Math.ceil(T[1]),this.size=T,O&&T[0]>=0&&T[1]>=0){let t;if(_){const n={};if(n.markerType=_,"path"===_&&(n.markerPath=i?i(null,P):k.markerPath,n.markerPathWidth=v?v(null,P):k.markerPathWidth,n.markerPathHeight=p?p(null,P):k.markerPathHeight),e){const t=e(null,P);Ji(t)||(n.markerWidth=t)}else k.markerWidth>=0&&(n.markerWidth=k.markerWidth);if(r){const t=r(null,P);Ji(t)||(n.markerHeight=t)}else k.markerHeight>=0&&(n.markerHeight=k.markerHeight);if(s){const t=s(null,P);Ji(t)||(n.markerFill=t)}else k.markerFill&&(n.markerFill=k.markerFill);if(o){const t=o(null,P);Ji(t)||(n.markerFillPatternFile=t)}else k.markerFillPatternFile&&(n.markerFillPatternFile=k.markerFillPatternFile);if(a){const t=a(null,P);Ji(t)||(n.markerFillOpacity=t)}else k.markerFillOpacity>=0&&(n.markerFillOpacity=k.markerFillOpacity);if(l){const t=l(null,P);Ji(t)||(n.markerLineColor=t)}else k.markerLineColor&&(n.markerLineColor=k.markerLineColor);if(c){const t=c(null,P);Ji(t)||(n.markerLineWidth=t)}else k.markerLineWidth>=0&&(n.markerLineWidth=k.markerLineWidth);if(f){const t=f(null,P);Ji(t)||(n.markerLineOpacity=t)}else k.markerLineOpacity>=0&&(n.markerLineOpacity=k.markerLineOpacity);if(d){const t=d(null,P);Ji(t)||(n.markerLineDasharray=t)}else k.markerLineDasharray&&(n.markerLineDasharray=k.markerLineDasharray);if(y){const t=y(null,P);Ji(t)||(n.markerLinePatternFile=t)}else k.markerLinePatternFile&&(n.markerLinePatternFile=k.markerLinePatternFile);t="vector://"+JSON.stringify(n)}else t=S?S.replace(nr,this.V):k.markerPath?function(t,n,i){if(!t.markerPath)return null;let e=1;const r=function(t){const n={stroke:{stroke:t.markerLineColor,"stroke-width":t.markerLineWidth,"stroke-opacity":t.markerLineOpacity,"stroke-dasharray":null,"stroke-linecap":"butt","stroke-linejoin":"round"},fill:{fill:t.markerFill,"fill-opacity":t.markerFillOpacity}};return 0===n.stroke["stroke-width"]&&(n.stroke["stroke-opacity"]=0),n}(t);Xi(t.markerOpacity)&&(e=t.markerOpacity),Xi(t.opacity)&&(e*=t.opacity);const s={};if(r){for(const t in r.stroke)Qi(r.stroke,t)&&(Ji(r.stroke[t])||(s[t]=r.stroke[t]));for(const t in r.fill)Qi(r.fill,t)&&(Ji(r.fill[t])||(s[t]=r.fill[t]))}const o=Array.isArray(t.markerPath)?t.markerPath:[t.markerPath];let a;const h=[];for(let t=0;t<o.length;t++)a=Yi(o[t])?{path:o[t]}:o[t],a=Gi({},a,s),a.d=a.path,delete a.path,h.push(a);const u=[\'<svg version="1.1"\',\'xmlns="http://www.w3.org/2000/svg"\'];e<1&&u.push(\'opacity="\'+e+\'"\'),t.markerPathWidth&&t.markerPathHeight&&u.push(\'viewBox="0 0 \'+t.markerPathWidth+" "+t.markerPathHeight+\'"\'),u.push(\'preserveAspectRatio="none"\'),n&&u.push(\'width="\'+n+\'"\'),i&&u.push(\'height="\'+i+\'"\'),u.push("><defs></defs>");for(let t=0;t<h.length;t++){let n="<path ";for(const i in h[t])Qi(h[t],i)&&(n+=" "+i+\'="\'+h[t][i]+\'"\');n+="></path>",u.push(n)}return u.push("</svg>"),"data:image/svg+xml;base64,"+btoa(u.join(" "))}(k,T[0],T[1]):null;A.icon={url:t,size:T}}if(I){const t=w?w(null,P):k.textName;if(t||0===t){const n=function(t,n,i){return[n||"normal",i||"normal","24px",t||"monospace"].join(" ")}(M?M(null,P):k.textFaceName,b?b(null,P):k.textStyle,x?x(null,P):k.textWeight);let i=ve(t,P);i&&i.length&&(i=tr(i),A.glyph={font:n,text:i})}}return this.iconGlyph=A,A}}function er(t,n){n&&"middle"!==n||(n="center"),t&&"middle"!==t||(t="center");let i="center"!==n?n:"";return i+="center"!==t?(i.length?"-":"")+t:"",i\n/*!\n     * From mapbox-gl-js\n     * MIT License\n     * https://github.com/mapbox/mapbox-gl-js\n     */}function rr(t,n,i,e,r){const s=[];for(let o=0;o<t.length;o++){const a=t[o];let h;for(let t=0;t<a.length-1;t++){let o=a[t],u=a[t+1];o.x<n&&u.x<n||(o.x<n?o=new Ht(n,o.y+(n-o.x)/(u.x-o.x)*(u.y-o.y)).I():u.x<n&&(u=new Ht(n,o.y+(n-o.x)/(u.x-o.x)*(u.y-o.y)).I()),o.y<i&&u.y<i||(o.y<i?o=new Ht(o.x+(i-o.y)/(u.y-o.y)*(u.x-o.x),i).I():u.y<i&&(u=new Ht(o.x+(i-o.y)/(u.y-o.y)*(u.x-o.x),i).I()),o.x>=e&&u.x>=e||(o.x>=e?o=new Ht(e,o.y+(e-o.x)/(u.x-o.x)*(u.y-o.y)).I():u.x>=e&&(u=new Ht(e,o.y+(e-o.x)/(u.x-o.x)*(u.y-o.y)).I()),o.y>=r&&u.y>=r||(o.y>=r?o=new Ht(o.x+(r-o.y)/(u.y-o.y)*(u.x-o.x),r).I():u.y>=r&&(u=new Ht(o.x+(r-o.y)/(u.y-o.y)*(u.x-o.x),r).I()),h&&o.equals(h[h.length-1])||(h=[o],s.push(h)),h.push(u)))))}}return s}class sr extends Ht{constructor(t,n,i,e){super(t,n),this.angle=i,void 0!==e&&(this.segment=e)}clone(){return new sr(this.x,this.y,this.angle,this.segment)}}\n/*!\n     * From mapbox-gl-js\n     * MIT License\n     * https://github.com/mapbox/mapbox-gl-js\n     */function or(t,n,i,e,r){if(void 0===n.segment)return!0;let s=n,o=n.segment+1,a=0;for(;a>-i/2;){if(o--,o<0)return!1;a-=t[o].dist(s),s=t[o]}a+=t[o].dist(t[o+1]),o++;const h=[];let u=0;for(;a<i/2;){const n=t[o],i=t[o+1];if(!i)return!1;let s=t[o-1].angleTo(n)-n.angleTo(i);for(s=Math.abs((s+3*Math.PI)%(2*Math.PI)-Math.PI),h.push({distance:a,angleDelta:s}),u+=s;a-h[0].distance>e;)u-=h.shift().angleDelta;if(u>r)return!1;o++,a+=n.dist(i)}return!0}function ar(t,n,i,e,r,s,o,a,h){const u=function(t,n,i){return t?.6*n*i:0}(e,s,o),l=function(t,n){return Math.max(t?t.right-t.left:0,n?n.right-n.left:0)}(e,r),c=0===t[0].x||t[0].x===h||0===t[0].y||t[0].y===h;return n-l*o<n/4&&(n=l*o+n/4),function t(n,i,e,r,s,o,a,h,u){const l=o/2,c=function(t){let n=0;for(let i=0;i<t.length-1;i++)n+=t[i].dist(t[i+1]);return n}(n);let f=0,d=i-e,y=[];for(let t=0;t<n.length-1;t++){const i=n[t],a=n[t+1],h=i.dist(a),v=a.angleTo(i);for(;d+e<f+h;){d+=e;const p=(d-f)/h,m=hr(i.x,a.x,p),g=hr(i.y,a.y,p);if(m>=0&&m<u&&g>=0&&g<u&&d-l>=0&&d+l<=c){const i=new sr(m,g,v,t);i.line=n,i.I(),r&&!or(n,i,o,r,s)||y.push(i)}}f+=h}return h||y.length||a||(y=t(n,f/2,e,r,s,o,a,!0,u)),y}(t,c?n/2*a%n:(l/2+2*s)*o*a%n,n,u,i,l*o,c,!1,h)}function hr(t,n,i){return t*(1-i)+n*i}function ur(t,n){const i=t.length;if(i<=1)return[t];const e=[];let r,s;for(let n=0;n<i;n++){const i=ne(t[n]);0!==i&&(t[n].area=Math.abs(i),void 0===s&&(s=i<0),s===i<0?(r&&e.push(r),r=[t[n]]):r.push(t[n]))}if(r&&e.push(r),n>1)for(let t=0;t<e.length;t++)e[t].length<=n||(Bt(e[t],n,1,e[t].length-1,lr),e[t]=e[t].slice(0,n));return e}function lr(t,n){return n.area-t.area}function cr(t,n,i){const e=n.distSqr(i);if(0===e)return t.distSqr(n);const r=((t.x-n.x)*(i.x-n.x)+(t.y-n.y)*(i.y-n.y))/e;return t.distSqr(r<0?n:r>1?i:i.sub(n).F(r).u(n))}function fr(t,n=1,i=!1){let e=1/0,r=1/0,s=-1/0,o=-1/0;const a=t[0];for(let t=0;t<a.length;t++){const n=a[t];(!t||n.x<e)&&(e=n.x),(!t||n.y<r)&&(r=n.y),(!t||n.x>s)&&(s=n.x),(!t||n.y>o)&&(o=n.y)}const h=Math.min(s-e,o-r);let u=h/2;const l=new Zt(null,dr);if(0===h)return new Ht(e,r);for(let n=e;n<s;n+=h)for(let i=r;i<o;i+=h)l.push(new yr(n+u,i+u,u,t));let c=function(t){let n=0,i=0,e=0;const r=t[0];for(let t=0,s=r.length,o=s-1;t<s;o=t++){const s=r[t],a=r[o],h=s.x*a.y-a.x*s.y;i+=(s.x+a.x)*h,e+=(s.y+a.y)*h,n+=3*h}return new yr(i/n,e/n,0,t)}(t),f=l.length;for(;l.length;){const e=l.pop();(e.d>c.d||!c.d)&&(c=e,i&&console.log("found best %d after %d probes",Math.round(1e4*e.d)/1e4,f)),e.max-c.d<=n||(u=e.h/2,l.push(new yr(e.p.x-u,e.p.y-u,u,t)),l.push(new yr(e.p.x+u,e.p.y-u,u,t)),l.push(new yr(e.p.x-u,e.p.y+u,u,t)),l.push(new yr(e.p.x+u,e.p.y+u,u,t)),f+=4)}return i&&(console.log("num probes: "+f),console.log("best distance: "+c.d)),c.p}function dr(t,n){return n.max-t.max}function yr(t,n,i,e){this.p=new Ht(t,n),this.h=i,this.d=function(t,n){let i=!1,e=1/0;for(let r=0;r<n.length;r++){const s=n[r];for(let n=0,r=s.length,o=r-1;n<r;o=n++){const r=s[n],a=s[o];r.y>t.y!=a.y>t.y&&t.x<(a.x-r.x)*(t.y-r.y)/(a.y-r.y)+r.x&&(i=!i),e=Math.min(e,cr(t,r,a))}}return(i?1:-1)*Math.sqrt(e)}(this.p,e),this.max=this.d+this.h*Math.SQRT2}const vr=45*Math.PI/100;function pr(t,n){const i={},e={},r=[];let s=0;function o(n){r.push(t[n]),s++}function a(t,n,i){const s=e[t];return delete e[t],e[n]=s,r[s].geometry[0].pop(),r[s].geometry[0]=r[s].geometry[0].concat(i[0]),s}function h(t,n,e){const s=i[n];return delete i[n],i[t]=s,r[s].geometry[0].shift(),r[s].geometry[0]=e[0].concat(r[s].geometry[0]),s}function u(t,n,i){const e=i?n[0][n[0].length-1]:n[0][0];return`${t}:${e.x}:${e.y}`}for(let l=0;l<t.length;l++){const c=t[l],f=c.geometry;if(!f)continue;const d=c.properties[n]?c.properties[n].toString():null;if(!d){o(l);continue}const y=u(d,f),v=u(d,f,!0);if(y in e&&v in i&&e[y]!==i[v]){const t=h(y,v,f),n=a(y,v,r[t].geometry);delete i[y],delete e[v],e[u(d,r[n].geometry,!0)]=n,r[t].geometry=null}else y in e?a(y,v,f):v in i?h(y,v,f):(o(l),i[y]=s-1,e[v]=s-1)}return r.filter(t=>t.geometry)}class mr extends le{static needMerge(t){return t.mergeOnProperty&&("line"===t.textPlacement||"line"===t.markerPlacement)}static mergeLineFeatures(t,n,i){const e="__index".trim(),r=function(t,n,i){const e="__index".trim(),r=le.genFnTypes(n),{mergeOnPropertyFn:s}=r;if(!n.mergeOnProperty||"line"!==n.textPlacement&&"line"!==n.markerPlacement)return[];if(!(oe(o=n.mergeOnProperty)||"string"!=typeof o&&(null===o.constructor||o.constructor!==String)||"line"!==n.textPlacement&&"line"!==n.markerPlacement))return[{features:t,property:n.mergeOnProperty}];var o;const a=[],h={},u=[];for(let r=0;r<t.length;r++){t[r][e]=r;const o=t[r].properties=t[r].properties||{};o.$layer=t[r].layer,o.$type=t[r].type;let l=n.markerPlacement;"line"!==l&&(l=n.textPlacement);const c=s?s(i,o):n.mergeOnProperty;"line"!==l||oe(c)?u.push(t[r]):(void 0===h[c]&&(h[c]=a.length,a.push({features:[],property:c})),a[h[c]].features.push(t[r]))}return u.length&&a.push({features:u}),a}(t,n,i);if(r.length){const n=[];for(let i=0;i<r.length;i++)n.push(r[i].property?pr(r[i].features,r[i].property):t);if(1===n.length)return n[0];{let t=[];for(let i=0;i<n.length;i++)t=t.concat(n[i]);return t.sort((t,n)=>t[e]-n[e]),t}}}static splitPointSymbol(t,n=0){const i=[];if(Array.isArray(t)){const n=t;for(let t=0;t<n.length;t++)n[t]&&i.push(...mr.splitPointSymbol(n[t],t));return i}let e=null,r=null;for(const n in t)0===n.indexOf("marker")?(e=e||{},e[n]=t[n]):0===n.indexOf("text")&&(r=r||{},r[n]=t[n]);return e&&(e.isIconText=!0,t.mergeOnProperty&&(e.mergeOnProperty=t.mergeOnProperty),i.push(e)),r&&(e&&(r.textPlacement=e.markerPlacement,r.textSpacing=e.markerSpacing,r.isIconText=!0),t.mergeOnProperty&&(r.mergeOnProperty=t.mergeOnProperty),i.push(r)),void 0!==t.visible&&(e&&(e.visible=t.visible),r&&(r.visible=t.visible)),e&&(e.markerTextFit&&r&&(e.text={},e.text.textName=r.textName,e.text.textSize=r.textSize),e.index={index:n,type:0}),r&&(r.index={index:n,type:1}),i}static isAtlasLoaded(t,n){const{icon:i,glyph:e}=t,{iconAtlas:r,glyphAtlas:s}=n;if(i&&(!r||!r.positions[i.url]))return!1;if(e){if(!s||!s.positions[e.font])return!1;const t=s.positions[e.font],{text:n}=e;for(let i=0;i<n.length;i++)if(!t[n.charCodeAt(i)])return!1}return!0}constructor(t,n,i){super(t,n,i)}createStyledVector(t,n,i,e,r,s){const o=new ir(t,this.symbolDef,n,i,e),a=o.getIconAndGlyph();if(a.icon&&!this.options.atlas){const{url:t,size:n}=a.icon;r[t]||(r[t]=a.icon.size),r[t][0]<n[0]&&(r[t][0]=n[0]),r[t][1]<n[1]&&(r[t][1]=n[1])}if(a.glyph&&!this.options.atlas){const{font:t,text:i}=a.glyph,e=s[t]=s[t]||{};for(let t=0;t<i.length;t++)e[i.charCodeAt(t)]=1;"line"===n.textPlacement&&(s.options={isCharsCompact:!1})}return this.options.allowEmptyPack||a.icon||a.glyph?o:null}getFormat(t){const n=void 0!==t.textName,i=n?function(t){return"line"!==t.textPlacement||t.isIconText?[{type:Int16Array,width:3,name:"aPosition"},{type:Int16Array,width:2,name:"aShape"},{type:Uint16Array,width:2,name:"aTexCoord"},{type:Uint8Array,width:1,name:"aCount"}]:[{type:Int16Array,width:3,name:"aPosition"},{type:Int16Array,width:2,name:"aShape"},{type:Uint16Array,width:2,name:"aTexCoord"},{type:Uint8Array,width:1,name:"aCount"},{type:Int16Array,width:2,name:"aGlyphOffset"},{type:Uint16Array,width:3,name:"aSegment"},{type:Uint8Array,width:1,name:"aVertical"}]}(t):[{type:Int16Array,width:3,name:"aPosition"},{type:Int16Array,width:2,name:"aShape"},{type:Uint16Array,width:2,name:"aTexCoord"}];n?i.push(...this.q()):i.push(...this.B());const{markerOpacityFn:e,textOpacityFn:r,markerPitchAlignmentFn:s,textPitchAlignmentFn:o,markerRotationAlignmentFn:a,textRotationAlignmentFn:h,markerRotationFn:u,textRotationFn:l,markerAllowOverlapFn:c,textAllowOverlapFn:f,markerIgnorePlacementFn:d,textIgnorePlacementFn:y}=this.C;return(e||r)&&i.push({type:Uint8Array,width:1,name:"aColorOpacity"}),(s||o)&&i.push({type:Uint8Array,width:1,name:"aPitchAlign"}),(a||h)&&i.push({type:Uint8Array,width:1,name:"aRotationAlign"}),(u||l)&&i.push({type:Uint16Array,width:1,name:"aRotation"}),(c||f||d||y)&&i.push({type:Uint8Array,width:1,name:"aOverlap"}),i}q(){const{textFillFn:t,textSizeFn:n,textHaloFillFn:i,textHaloRadiusFn:e,textHaloOpacityFn:r,textDxFn:s,textDyFn:o}=this.C,a=[];return t&&a.push({type:Uint8Array,width:4,name:"aTextFill"}),n&&a.push({type:Uint8Array,width:1,name:"aTextSize"}),i&&a.push({type:Uint8Array,width:4,name:"aTextHaloFill"}),e&&a.push({type:Uint8Array,width:1,name:"aTextHaloRadius"}),r&&a.push({type:Uint8Array,width:1,name:"aTextHaloOpacity"}),s&&a.push({type:Int8Array,width:1,name:"aTextDx"}),o&&a.push({type:Int8Array,width:1,name:"aTextDy"}),a}B(){const{markerWidthFn:t,markerHeightFn:n,markerDxFn:i,markerDyFn:e}=this.C,r=[];return t&&r.push({type:Uint8Array,width:1,name:"aMarkerWidth"}),n&&r.push({type:Uint8Array,width:1,name:"aMarkerHeight"}),i&&r.push({type:Int8Array,width:1,name:"aMarkerDx"}),e&&r.push({type:Int8Array,width:1,name:"aMarkerDy"}),r}createDataPack(){if(!this.iconAtlas&&!this.glyphAtlas){if(!this.options.allowEmptyPack)return null;this.empty=!0}this.lineVertex=[];const t=super.createDataPack.apply(this,arguments);return t?(t.lineVertex=new Int16Array(this.lineVertex),t.buffers.push(t.lineVertex.buffer),t):null}placeVector(t,n){const i=t.getShape(this.iconAtlas,this.glyphAtlas);if(!this.options.allowEmptyPack&&!i)return;const e=this.G(t,i,n);if(0===e.length)return;const r=this.data;let s=this.data.aPosition.length/3;const o=t.symbol,a=t.feature.properties,h="line"===o.textPlacement&&!o.isIconText,u=void 0!==o.textName,l=u&&h&&function(t){let n=0;for(let i=0;i<t.length;i++)if(He(t.charAt(i).charCodeAt(0)))n=0;else if(n++,n>=1)return!1;return!0}(t.getIconAndGlyph().glyph.text)?1:0,{textFillFn:c,textSizeFn:f,textHaloFillFn:d,textHaloRadiusFn:y,textHaloOpacityFn:v,textDxFn:p,textDyFn:g,textPitchAlignmentFn:w,textRotationAlignmentFn:M,textRotationFn:b,textAllowOverlapFn:x,textIgnorePlacementFn:F,textOpacityFn:A,markerWidthFn:k,markerHeightFn:P,markerDxFn:S,markerDyFn:_,markerPitchAlignmentFn:O,markerRotationAlignmentFn:I,markerRotationFn:T,markerAllowOverlapFn:L,markerIgnorePlacementFn:U,markerOpacityFn:z}=this.C;let D,E,C,j,N,H,V,R,$,W,q,B,G,J,X,Z,Y;if(u){const n=t.getIconAndGlyph().glyph.font;D=function(t,n,i){const e=t.positionedGlyphs,r=[];for(let s=0;s<e.length;s++){const o=e[s],a=i[o.glyph];if(!a)continue;const h=a.rect;if(!h)continue;const u=4,l=a.metrics.advance/2,c=a.metrics.height/2,f=n?[o.x+l,0]:[0,0],d=n?[0,o.y-c]:[o.x+l,o.y-c],y=a.metrics.left-u-l+d[0],v=a.metrics.top-u+d[1],p=y+h.w,m=v+h.h,g=new Ht(y,v),w=new Ht(p,v),M=new Ht(y,m),b=new Ht(p,m);if(n&&o.vertical){const t=new Ht(-l,l),n=-Math.PI/2,i=new Ht(5,0);g.P(n,t).u(i),w.P(n,t).u(i),M.P(n,t).u(i),b.P(n,t).u(i)}r.push({tl:g,tr:w,bl:M,br:b,tex:h,writingMode:t.writingMode,glyphOffset:f})}return r}(i.horizontal,h,this.glyphAtlas.positions[n]),c&&(E=c(null,a),m(E)?E=[0,0,0,0]:(E=Array.isArray(E)?E.map(t=>255*t):Vn(E).array(),3===E.length&&E.push(255))),f&&(C=f(this.options.zoom,a),oe(C)&&(C=14)),d&&(j=d(null,a),j=Array.isArray(j)?j.map(t=>255*t):Vn(j).array(),3===j.length&&j.push(255)),y&&(N=y(null,a)),v&&(H=255*v(null,a)),p&&(V=p(null,a)||0),g&&(R=g(null,a)||0),w&&(G=+("map"===w(null,a))),M&&(J=+("map"===M(null,a))),b&&(X=ae(b(null,a),0,360)*Math.PI/180)}else D=i?function(t){const n=t.image,i=t.top-1/n.pixelRatio,e=t.left-1/n.pixelRatio,r=t.bottom+1/n.pixelRatio,s=t.right+1/n.pixelRatio;let o,a,h,u;return o=new Ht(e,i),a=new Ht(s,i),h=new Ht(s,r),u=new Ht(e,r),[{tl:o,tr:a,bl:u,br:h,tex:{x:n.tl[0],y:n.tl[1],w:n.displaySize[0],h:n.displaySize[1]},writingMode:void 0,glyphOffset:[0,0]}]}(i):function(){const t=new Ht(0,0),n=new Ht(0,0),i=new Ht(0,0);return[{tl:t,tr:n,bl:new Ht(0,0),br:i,tex:{x:0,y:0,w:0,h:0},writingMode:void 0,glyphOffset:[0,0]}]}(),k&&($=k(null,a)),P&&(W=P(null,a)),S&&(q=S(null,a)),_&&(B=_(null,a)),O&&(G=+("map"===O(null,a))),I&&(J=+("map"===I(null,a))),T&&(X=ae(T(null,a),0,360)*Math.PI/180);const K=L||x;K&&(Z=K(null,a)||0);const Q=U||F;let tt;Q&&(Y=Q(null,a)||0);const nt=A||z;nt&&(tt=255*nt(this.options.zoom,a));const it=this.options.EXTENT,et=D.length,rt=this.getAltitude(t.feature.properties);for(let t=0;t<e.length;t++){const n=e[t];if(it!==1/0&&se(n,it))continue;const i=n.x,o=n.y,a=D.length;for(let t=0;t<a;t++){const e=D[t],{tl:a,tr:c,bl:f,br:d,tex:y}=e;this.J(r,i,o,rt,10*a.x,10*a.y,y.x,y.y+y.h),u&&this.X(r,h,et,e.glyphOffset,n,l),this.Z(r,E,C,j,N,H,V,R,$,W,q,B,tt,G,J,X,Z,Y),this.J(r,i,o,rt,10*c.x,10*c.y,y.x+y.w,y.y+y.h),u&&this.X(r,h,et,e.glyphOffset,n,l),this.Z(r,E,C,j,N,H,V,R,$,W,q,B,tt,G,J,X,Z,Y),this.J(r,i,o,rt,10*f.x,10*f.y,y.x,y.y),u&&this.X(r,h,et,e.glyphOffset,n,l),this.Z(r,E,C,j,N,H,V,R,$,W,q,B,tt,G,J,X,Z,Y),this.J(r,i,o,rt,10*d.x,10*d.y,y.x+y.w,y.y),u&&this.X(r,h,et,e.glyphOffset,n,l),this.Z(r,E,C,j,N,H,V,R,$,W,q,B,tt,G,J,X,Z,Y),this.addElements(s,s+1,s+2),this.addElements(s+1,s+2,s+3),s+=4;const v=Math.max(Math.abs(i),Math.abs(o),Math.abs(rt));v>this.maxPos&&(this.maxPos=v)}}}J(t,n,i,e,r,s,o,a){t.aPosition.push(n,i,e),t.aShape.push(r,s),t.aTexCoord.push(o,a)}X(t,n,i,e,r,s){if(t.aCount.push(i),n){t.aGlyphOffset.push(e[0],e[1]);const n=r.startIndex;t.aSegment.push(r.segment+n,n,r.line.length),t.aVertical.push(s)}}Z(t,n,i,e,r,s,o,a,h,u,l,c,f,d,y,v,p,m){const{textFillFn:g,textSizeFn:w,textHaloFillFn:M,textHaloRadiusFn:b,textHaloOpacityFn:x,textDxFn:F,textDyFn:A,textPitchAlignmentFn:k,textRotationAlignmentFn:P,textRotationFn:S,textAllowOverlapFn:_,textIgnorePlacementFn:O,textOpacityFn:I,markerWidthFn:T,markerHeightFn:L,markerDxFn:U,markerDyFn:z,markerPitchAlignmentFn:D,markerRotationAlignmentFn:E,markerRotationFn:C,markerAllowOverlapFn:j,markerIgnorePlacementFn:N,markerOpacityFn:H}=this.C;g&&t.aTextFill.push(...n),w&&t.aTextSize.push(i),M&&t.aTextHaloFill.push(...e),b&&t.aTextHaloRadius.push(r),x&&t.aTextHaloOpacity.push(s),F&&t.aTextDx.push(o),A&&t.aTextDy.push(a),T&&t.aMarkerWidth.push(h),L&&t.aMarkerHeight.push(u),U&&t.aMarkerDx.push(l),z&&t.aMarkerDy.push(c),(H||I)&&t.aColorOpacity.push(f),(k||D)&&t.aPitchAlign.push(d),(E||P)&&t.aRotationAlign.push(y),(C||S)&&t.aRotation.push(9362*v);const V=j||_,R=N||O;(V||R)&&t.aOverlap.push((V?8:0)+4*p+((R?2:0)+m)),r>0&&(this.properties.hasHalo=1)}G(t,n,i){const{feature:e,symbol:r}=t,s=this.Y(t,r),o=e.properties,{markerSpacingFn:a,textSpacingFn:h}=this.C,u=((a?a(null,o):r.markerSpacing)||(h?h(null,o):r.textSpacing)||250)*i;return function(t,n,i,e,r,s,o){const{feature:a,size:h,symbol:u}=t,l=h?24:0,c=e*(h?h[0]/l:1),f=[];if("line"===s){let t=a.geometry;r&&(t=rr(a.geometry,0,0,r,r));for(let e=0;e<t.length;e++){const s=ar(t[e],o,vr,u.isIconText?null:i.vertical||i.horizontal||i,null,l,u.isIconText?1:c,1,r||1/0);if(u.textPlacement&&!u.isIconText)for(let t=0;t<s.length;t++)s[t].startIndex=n.length/3;if(f.push.apply(f,s),u.textPlacement&&!u.isIconText)for(let i=0;i<t[e].length;i++)n.push(t[e][i].x,t[e][i].y,0)}}else if(3===a.type){const t=ur(a.geometry,0);for(let n=0;n<t.length;n++){const i=t[n];if("vertex"===s)for(let t=0;t<i.length;t++){const n=i[t];for(let t=0;t<n.length;t++)se(n[t],r)||f.push(n[t])}else{const t=fr(i,16);se(t,r)||f.push(t)}}}else if(2===a.type)for(let t=0;t<a.geometry.length;t++){const n=a.geometry[t];if("vertex"===s)for(let t=0;t<n.length;t++)se(n[t],r)||f.push(n[t]);else se(n[0],r)||f.push(n[0])}else if(1===a.type)for(let t=0;t<a.geometry.length;t++){const n=a.geometry[t];for(let t=0;t<n.length;t++){const i=n[t];se(i,r)||f.push(i)}}return f}(t,this.lineVertex,n,i,this.options.EXTENT,s,u)}Y(t,n){return this.C.markerPlacementFn?this.C.markerPlacementFn(this.options.zoom,t.feature.properties):n.markerPlacement||n.textPlacement}}const gr=Math.cos(Math.PI/180*37.5),wr=Math.pow(2,16)/1;class Mr extends le{constructor(t,n,i){super(t,n,i);let e=!1;const{lineDasharrayFn:r,lineDashColorFn:s}=this.C;r&&(e=function(t,n,i){for(let e=0;e<t.length;e++)if(i(n,t[e].properties))return!0;return!1}(t,this.options.zoom,r),e&&(this.dasharrayFn=r)),(Fr(this.symbol.lineDasharray)||e)&&s&&(this.dashColorFn=s)}createStyledVector(t,n,i,e,r){const s=new he(t,n,i,e),o=s.getLineResource();return!this.options.atlas&&o&&(r[o]=[0,0]),s}getFormat(){const{lineWidthFn:t,lineStrokeWidthFn:n,lineStrokeColorFn:i,lineColorFn:e,lineOpacityFn:r,lineDxFn:s,lineDyFn:o,linePatternAnimSpeedFn:a,linePatternGapFn:h}=this.C,u=[{type:Int16Array,width:3,name:"aPosition"}];if(u.push(this.options.center||this.iconAtlas?{type:Int8Array,width:3,name:"aExtrude"}:{type:Int8Array,width:2,name:"aExtrude"}),u.push({type:Uint16Array,width:1,name:"aLinesofar"}),t&&u.push({type:Uint8Array,width:1,name:"aLineWidth"}),n&&u.push({type:Uint8Array,width:1,name:"aLineStrokeWidth"}),e&&u.push({type:Uint8Array,width:4,name:"aColor"}),i&&u.push({type:Uint8Array,width:4,name:"aStrokeColor"}),r&&u.push({type:Uint8Array,width:1,name:"aOpacity"}),this.symbol.lineOffset&&u.push({type:Int8Array,width:2,name:"aExtrudeOffset"}),this.dasharrayFn&&u.push({type:Uint8Array,width:4,name:"aDasharray"}),this.dashColorFn&&u.push({type:Uint8Array,width:4,name:"aDashColor"}),this.iconAtlas){const t=this.getIconAtlasMaxValue();u.push({type:t>255?Uint16Array:Uint8Array,width:4,name:"aTexInfo"})}return s&&u.push({type:Int8Array,width:1,name:"aLineDx"}),o&&u.push({type:Int8Array,width:1,name:"aLineDy"}),a&&u.push({type:Int8Array,width:1,name:"aLinePatternAnimSpeed"}),h&&u.push({type:Uint8Array,width:1,name:"aLinePatternGap"}),u}placeVector(t){const{lineJoinFn:n,lineCapFn:i,lineWidthFn:e,lineStrokeWidthFn:r,lineStrokeColorFn:s,lineColorFn:o,lineOpacityFn:a,lineJoinPatternModeFn:h,lineDxFn:u,lineDyFn:l,linePatternAnimSpeedFn:c,linePatternGapFn:f}=this.C,d=this.symbol,y=t.feature,v=3===y.type,p=y.properties,g=this.elements;v&&(this.elements=[]);let w=d.lineJoin||"miter",M=d.lineCap||"butt";if(n&&(w=n(this.options.zoom,p)||"miter"),i&&(M=i(this.options.zoom,p)||"butt"),e){let t=e(this.options.zoom,p);Ji(t)&&(t=4),this.feaLineWidth=t}else this.feaLineWidth=d.lineWidth;if(r){let t=r(this.options.zoom,p);Ji(t)&&(t=0),this.feaLineStrokeWidth=t}else this.feaLineStrokeWidth=d.lineStrokeWidth||0;if(o&&(this.feaColor=o(this.options.zoom,p)||[0,0,0,255],m(this.feaColor)?this.feaColor=[0,0,0,0]:(this.feaColor=Array.isArray(this.feaColor)?this.feaColor.map(t=>255*t):Vn(this.feaColor).array(),3===this.feaColor.length&&this.feaColor.push(255))),s&&(this.feaStrokeColor=s(this.options.zoom,p)||[0,0,0,255],m(this.feaStrokeColor)?this.feaStrokeColor=[0,0,0,0]:(this.feaStrokeColor=Array.isArray(this.feaStrokeColor)?this.feaStrokeColor.map(t=>255*t):Vn(this.feaStrokeColor).array(),3===this.feaStrokeColor.length&&this.feaStrokeColor.push(255))),a){let t=a(this.options.zoom,p);Ji(t)&&(t=1),this.feaOpacity=255*t}if(this.dasharrayFn){let t=this.dasharrayFn(this.options.zoom,p)||[0,0,0,0];if(t.length<4){const n=t;1===t.length?t=[n[0],n[0],n[0],n[0]]:2===t.length?t=[n[0],n[1],n[0],n[1]]:3===t.length&&(t=[n[0],n[1],n[2],n[2]])}this.feaDash=t}if(this.dashColorFn){let t=(this.dashColorFn?this.dashColorFn(this.options.zoom,p):this.symbol.lineDashColor)||[0,0,0,0];t=Array.isArray(t)?t.map(t=>255*t):Vn(t).array(),3===t.length&&t.push(255),this.feaDashColor=t}if(this.iconAtlas){const n=t.getLineResource(),i=this.iconAtlas.glyphMap[n];if(this.feaTexInfo=this.feaTexInfo||[0,0,0,0],i){const{tl:t,displaySize:i}=this.iconAtlas.positions[n];this.feaTexInfo[0]=t[0]+1,this.feaTexInfo[1]=t[1]+1,this.feaTexInfo[2]=i[0]-3,this.feaTexInfo[3]=i[1]-3}else this.feaTexInfo[0]=this.feaTexInfo[1]=this.feaTexInfo[2]=this.feaTexInfo[3]=0;this.feaJoinPatternMode=h?h(this.options.zoom,p)||0:d.lineJoinPatternMode||0}if(u){let t=u(this.options.zoom,p);Ji(t)&&(t=0),this.feaLineDx=t}if(l){let t=l(this.options.zoom,p);Ji(t)&&(t=0),this.feaLineDy=t}if(c){let t=c(this.options.zoom,p);Ji(t)&&(t=0),0!==t&&(this.properties.hasPatternAnim=1),this.feaPatternAnimSpeed=t}if(f){let t=f(this.options.zoom,p);Ji(t)&&(t=0),this.feaLinePatternGap=t}const b=this.options.EXTENT;let x=y.geometry;b!==1/0&&3!==y.type&&(x=rr(y.geometry,-1,-1,b+1,b+1));for(let t=0;t<x.length;t++)this.offset=this.data.aPosition.length/3,this.K(x[t],y,w,M,2,1.05),v&&(this.tt(g),this.elements=[]);v&&(this.elements=g)}nt(){return this.iconAtlas&&this.feaTexInfo[2]&&this.feaTexInfo[3]}K(t,n,i,e,r,s){const o=this.nt()||Fr(this.feaDash)||Fr(this.symbol.lineDasharray);this.overscaling=1;const a=this.options.EXTENT;if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.symbol.lineGradientProperty&&n.properties&&Qi(n.properties,"mapbox_clip_start")&&Qi(n.properties,"mapbox_clip_end")){this.clipStart=+n.properties.mapbox_clip_start,this.clipEnd=+n.properties.mapbox_clip_end;for(let n=0;n<t.length-1;n++)this.totalDistance+=t[n].dist(t[n+1]);this.updateScaledDistance()}const h=3===n.type;let u=t.length;for(;u>=2&&t[u-1].equals(t[u-2]);)u--;let l=0;for(;l<u-1&&t[l].equals(t[l+1]);)l++;if(u<(h?3:2))return;"bevel"===i&&(r=1.05);const c=this.overscaling<=16?15*a/(512*this.overscaling):0,f={vertexLength:0,primitiveLength:0};let d,y,v,p,m;this.e1=this.e2=-1,h&&(d=t[u-2],m=t[l].sub(d)._().O());for(let n=l;n<u;n++){if(v=n===u-1?h?t[l+1]:void 0:t[n+1],v&&t[n].equals(v))continue;m&&(p=m),d&&(y=d),d=t[n],m=v?v.sub(d)._().O():p,p=p||m;let a=p.add(m);0===a.x&&0===a.y||a._();const g=p.x*m.x+p.y*m.y,w=a.x*m.x+a.y*m.y,M=0!==w?1/w:1/0,b=2*Math.sqrt(2-2*w),x=w<gr&&y&&v,F=p.x*m.y-p.y*m.x>0;if(!o&&x&&n>l){const t=d.dist(y);if(t>2*c){const n=d.sub(d.sub(y).F(c/t).I());this.updateDistance(y,n),this.addCurrentVertex(n,p,0,0,f),y=n}}const A=y&&v;let k=A?i:h?"butt":e;if(A&&"round"===k&&(M<s?k="miter":M<=2&&(k="fakeround")),"miter"===k&&M>r&&(k="bevel"),"bevel"===k&&(M>2&&(k="flipbevel"),M<r&&(k="miter")),y&&this.updateDistance(y,d),(n>l&&n<u-1||h&&n===u-1)&&o){const t=this.feaJoinPatternMode?0:-p.mag()*w;this.addCurrentVertex(d,p,t,t,f),this.it=1}if("miter"===k)a.F(M),this.addCurrentVertex(d,a,0,0,f);else if("flipbevel"===k){if(M>100)a=m.mult(-1);else{const t=M*p.add(m).mag()/p.sub(m).mag();a.O().F(t*(F?-1:1))}this.addCurrentVertex(d,a,0,0,f),this.addCurrentVertex(d,a.mult(-1),0,0,f)}else if("bevel"===k||"fakeround"===k){const t=-Math.sqrt(M*M-1),n=F?t:0,i=F?0:t;if(y&&this.addCurrentVertex(d,p,n,i,f),"fakeround"===k){const t=Math.round(180*b/Math.PI/20);for(let n=1;n<t;n++){let i=n/t;if(.5!==i){const t=i-.5;i+=i*t*(i-1)*((1.0904+g*(g*(3.55645-1.43519*g)-3.2452))*t*t+(.848013+g*(.215638*g-1.06021)))}const e=m.sub(p).F(i).u(p)._().F(F?-1:1);this.addHalfVertex(d,e.x,e.y,!1,F,0,f)}}v&&this.addCurrentVertex(d,m,-n,-i,f)}else if("butt"===k)this.addCurrentVertex(d,a,0,0,f);else if("square"===k){const t=y?1:-1;this.addCurrentVertex(d,a,t,t,f)}else"round"===k&&(y&&(this.addCurrentVertex(d,p,0,0,f),this.addCurrentVertex(d,p,1,1,f,!0)),v&&(this.addCurrentVertex(d,m,-1,-1,f,!0),this.addCurrentVertex(d,m,0,0,f)));if(!o&&x&&n<u-1){const t=d.dist(v);if(t>2*c){const n=d.add(v.sub(d).F(c/t).I());this.updateDistance(d,n),this.addCurrentVertex(n,m,0,0,f),d=n}}if((n>l&&n<u-1||h&&n===l)&&o){delete this.it;const t=this.feaJoinPatternMode?0:m.mag()*w;this.addCurrentVertex(d,m,t,t,f)}}}addCurrentVertex(t,n,i,e,r,s=!1){const o=n.y*e-n.x,a=-n.y-n.x*e;this.addHalfVertex(t,n.x+n.y*i,n.y-n.x*i,s,!1,i,r),this.addHalfVertex(t,o,a,s,!0,-e,r),this.distance>wr/2&&0===this.totalDistance&&(this.distance=0,this.updateScaledDistance(),this.addCurrentVertex(t,n,i,e,r,s))}addHalfVertex({x:t,y:n},i,e,r,s,o,a){this.fillData(this.data,t,n,i,e,r,s,1*this.scaledDistance);const h=a.vertexLength++;this.e1>=0&&this.e2>=0&&(this.addElements(this.e1,this.e2,h),a.primitiveLength++),s?this.e2=h:this.e1=h}fillData(t,n,i,e,r,s,o,a){const{lineWidthFn:h,lineStrokeWidthFn:u,lineStrokeColorFn:l,lineColorFn:c,lineOpacityFn:f,lineDxFn:d,lineDyFn:y,linePatternAnimSpeedFn:v,linePatternGapFn:p}=this.C;if(this.options.center?t.aPosition.push(n,i,0):t.aPosition.push(n=(n<<1)+(s?1:0),i=(i<<1)+(o?1:0),0),t.aExtrude.push(63*e,63*r),this.options.center||this.iconAtlas){let n=0;this.options.center&&(n+=2*s+o),this.iconAtlas&&(n+=4*(this.it&&this.feaJoinPatternMode?1:0)),t.aExtrude.push(n)}t.aLinesofar.push(a),h&&t.aLineWidth.push(Math.round(2*this.feaLineWidth)),u&&t.aLineStrokeWidth.push(Math.round(2*this.feaLineStrokeWidth)),c&&t.aColor.push(...this.feaColor),l&&t.aStrokeColor.push(...this.feaStrokeColor),f&&t.aOpacity.push(this.feaOpacity),this.dasharrayFn&&t.aDasharray.push(...this.feaDash),this.dashColorFn&&t.aDashColor.push(...this.feaDashColor),this.iconAtlas&&t.aTexInfo.push(...this.feaTexInfo),d&&t.aLineDx.push(this.feaLineDx),y&&t.aLineDy.push(this.feaLineDy),v&&t.aLinePatternAnimSpeed.push(127*this.feaPatternAnimSpeed),p&&t.aLinePatternGap.push(10*this.feaLinePatternGap),this.maxPos=Math.max(this.maxPos,Math.abs(n)+1,Math.abs(i)+1)}addElements(t,n,i){super.addElements(this.offset+t,this.offset+n,this.offset+i)}tt(t){const n=this.options.EXTENT,i=this.elements;for(let e=0;e<i.length;e+=3)n!==1/0&&(xr(this.data.aPosition,i[e],i[e+1],3,n)||xr(this.data.aPosition,i[e+1],i[e+2],3,n))||t.push(i[e],i[e+1],i[e+2])}et(t){if(t.length<=1)return t;const n=[],i=this.options.EXTENT;let e,r=!0;for(e=0;e<t.length-1;e++){const s=br(t[e],t[e+1],i);s&&r||(n.push(t[e]),r=s)}return r||n.push(t[e]),n}updateDistance(t,n){this.distance+=t.dist(n),this.updateScaledDistance()}updateScaledDistance(){this.scaledDistance=this.totalDistance>0?(this.clipStart+(this.clipEnd-this.clipStart)*this.distance/this.totalDistance)*(wr-1):this.distance}}function br(t,n,i){return i!==1/0&&(t.x<0&&n.x<0||t.x>i&&n.x>i||t.y<0&&n.y<0||t.y>i&&n.y>i)}function xr(t,n,i,e,r){if(r===1/0)return!1;const s=Math.floor(.5*t[n*e]),o=Math.floor(.5*t[n*e+1]),a=Math.floor(.5*t[i*e]),h=Math.floor(.5*t[i*e+1]);return s===a&&(s<0||s>r)&&o!==h||o===h&&(o<0||o>r)&&s!==a}function Fr(t){if(!Array.isArray(t))return!1;for(let n=0;n<t.length;n++)if(t[n])return!0;return!1}class Ar extends Mr{constructor(t,n,i){super(t,n,i),this.rt=i.altitudeProperty}getFormat(){const{lineColorFn:t,lineWidthFn:n}=this.C,i=[{type:Int16Array,width:3,name:"aPosition"},{type:Uint16Array,width:1,name:"aLinesofar"},{type:Uint8Array,width:1,name:"aUp"},{type:Int16Array,width:3,name:"aExtrudedPosition"},{type:Int8Array,width:2,name:"aExtrude"}];return t&&i.push({type:Uint8Array,width:4,name:"aColor"}),n&&i.push({type:Uint8Array,width:1,name:"aLineWidth"}),this.rt&&i.push({type:Array,width:1,name:"aLineHeight"}),i}placeVector(t){const n=t.feature;if(this.rt){const{altitudeScale:t,altitudeProperty:i,defaultAltitude:e,heightProperty:r,defaultHeight:s,minHeightProperty:o}=this.options,{altitude:a,height:h}=re(n,t,i,e,r,s,o);this.feaAltitude=a,this.feaMinHeight=(a-h)/a*32767,a>this.maxAltitude&&(this.maxAltitude=a)}return super.placeVector(t)}K(t,n,i,e,r,s){const o=this.data.aPosition.length/3;super.K(t,n,i,e,r,s);const a=this.data.aPosition.length/3,h=this.data.aPosition.length/3-this.offset;if(3!==n.type&&h>0&&!1!==this.options.side){const t=!1!==this.options.top?1:0,n=t+4;let i=this.data.aPosition.length/3;for(const t in this.data){const n=this.data[t],e=n.length/i;for(let t=0;t<e;t++)n.push(n[o*e+3*e+t])}i=this.data.aPosition.length/3;for(const t in this.data){const e=this.data[t],r=e.length/i;for(let t=0;t<r;t++)e.push(e[o*r+r*n+t])}i=this.data.aPosition.length/3;for(const t in this.data){const e=this.data[t],r=e.length/i;for(let t=0;t<r;t++)e.push(e[o*r+r*(n+3)+t])}super.addElements(t+1,h+1,h),super.addElements(h,h+1,h+2);const e=this.data.aPosition.length/3-this.offset;i=this.data.aPosition.length/3;for(const t in this.data){const n=this.data[t],e=n.length/i;for(let t=0;t<e;t++)n.push(n[a*e-e+t])}i=this.data.aPosition.length/3;for(const t in this.data){const e=this.data[t],r=e.length/i;for(let t=0;t<r;t++)e.push(e[a*r-n*r-r+t])}i=this.data.aPosition.length/3;for(const t in this.data){const e=this.data[t],r=e.length/i;for(let t=0;t<r;t++)e.push(e[a*r-n*r-3*r+t])}super.addElements(e,h-3,e+1),super.addElements(h-3,e+2,e+1)}}fillData(t,n,i,e,r,s,o,a){const h=!1!==this.options.top,u=!1!==this.options.side,l=this.feaLineWidth||this.symbol.lineWidth/2*(this.options.EXTENT/this.options.tileSize),c=63*e,f=63*r,d=l*e+n,y=l*r+i;this.st(t,n,i,e,r,s,o,a,d,y,c,f),u&&(h&&this.st(t,n,i,e,r,s,o,a,d,y,c,f),this.st(t,n,i,e,r,s,o,a,d,y,c,f),this.ot(t,n,i,e,r,s,o,a,d,y,c,f),this.ot(t,n,i,e,r,s,o,a,d,y,c,f)),this.maxPos=Math.max(this.maxPos,Math.abs(n),Math.abs(i))}st(t,n,i,e,r,s,o,a,h,u,l,c){const{lineColorFn:f,lineWidthFn:d}=this.C;t.aPosition.push(n,i,32767),t.aLinesofar.push(a),t.aUp.push(+o),t.aExtrudedPosition.push(h,u,1),t.aExtrude.push(l,c),f&&t.aColor.push(...this.feaColor),d&&t.aLineWidth.push(Math.round(2*this.feaLineWidth)),this.rt&&t.aLineHeight.push(this.feaAltitude)}ot(t,n,i,e,r,s,o,a,h,u,l,c){const{lineColorFn:f,lineWidthFn:d}=this.C;t.aPosition.push(n,i,this.feaMinHeight||0),t.aLinesofar.push(a),t.aUp.push(+o),t.aExtrudedPosition.push(h,u,1),t.aExtrude.push(l,c),f&&t.aColor.push(...this.feaColor),d&&t.aLineWidth.push(Math.round(2*this.feaLineWidth)),this.rt&&t.aLineHeight.push(this.feaAltitude)}addElements(t,n,i){const e=!1!==this.options.top,r=!1!==this.options.side,s=(e?1:0)+(r?4:0);if(t*=s,n*=s,this.data.aUp[this.offset+(i*=s)+4]){if(e&&super.addElements(n,t,i),r){const t=e?1:0;super.addElements(n+t,i+t,i+t+2),super.addElements(n+t+1,i+t+1+2,n+t+1+2)}}else if(e&&super.addElements(t,i,n),r){const n=e?1:0;super.addElements(t+n,t+n+2,i+n),super.addElements(t+n+1+2,i+n+1+2,i+n+1)}}createDataPack(t,n){this.maxAltitude=0;const i=super.createDataPack(t,n);if(!i)return i;const{data:e,indices:r}=i;this.getFormat().reduce((t,n)=>(t[n.name]={size:n.width},t),{}).aPickingId={size:1};const{aExtrudedPosition:s,aPosition:o,aLinesofar:a,aUp:h,aExtrude:u,aColor:l,aLineHeight:c,aLineWidth:f}=e,d={},y=Xn(s,r);let v,p=!0;for(let t=0;t<y.length;t++)y[t]=-y[t],y[t]%1!=0&&(p=!1);if(!1!==this.options.top&&this.symbol.material&&function(t){for(const n in t)if(n.indexOf("Texture")>=0&&t[n])return!0;return!1}(this.symbol.material)&&(v=function(t,n,i){const e=[];for(let r=0;r<t.length;r+=3){const t=n[r/3];e.push(t/256,i[r/3]?1:0)}return e}(s,a,h)),d.aPosition=o,v&&(d.aTexCoord0=new Float32Array(v)),d.aNormal=p?new Int8Array(y):new Float32Array(y),d.aPickingId=e.aPickingId,d.aExtrude=u,l&&(d.aColor=l),f&&(d.aLineWidth=f),c){const t=Wi(this.maxAltitude);d.aLineHeight=new t(c)}const m=[];for(const t in d)m.push(d[t].buffer);return i.data=d,i.buffers=m,i}}const kr=Math.pow(2,16)/1;class Pr extends le{getFormat(){return[{type:Int16Array,width:3,name:"aPosition"}]}placeVector(t){const n=t.feature,i=3===n.type,e=n.geometry,r=this.elements;i&&(this.elements=[]);for(let t=0;t<e.length;t++)this.offset=this.data.aPosition.length/3,this.K(e[t],n),i&&(this.tt(r),this.elements=[]);i&&(this.elements=r)}K(t,n){const i=3===n.type;let e=t.length;for(;e>=2&&t[e-1].equals(t[e-2]);)e--;let r,s,o,a=0;for(;a<e-1&&t[a].equals(t[a+1]);)a++;if(!(e<(i?3:2))){this.distance=0,this.vertexLength=0,this.primitiveLength=0,this.e1=this.e2=this.e3=-1,i&&(r=t[e-2]);for(let n=a;n<e;n++)o=i&&n===e-1?t[a+1]:t[n+1],o&&t[n].equals(o)||(r&&(s=r),r=t[n],s&&(this.distance+=r.dist(s)),this.addCurrentVertex(r,this.distance))}}addCurrentVertex(t,n){const i=this.vertexLength++;this.addLineVertex(this.data,t,n),i>=1&&this.addElements(i-1,i),n>kr&&(this.distance=0,this.addCurrentVertex(t,this.distance))}addLineVertex(t,n){t.aPosition.push(n.x,n.y,0),this.maxPos=Math.max(this.maxPos,Math.abs(n.x),Math.abs(n.y))}addElements(t,n){super.addElements(this.offset+t,this.offset+n)}tt(t){const n=this.options.EXTENT,i=this.elements;for(let e=0;e<i.length;e+=2)ie(this.data.aPosition,i[e],i[e+1],3,n)||t.push(i[e],i[e+1])}}const Sr=45*Math.PI/100;class _r extends le{getFormat(){return[{type:Int16Array,width:3,name:"aPosition"}]}placeVector(t){const n=this.G(t,this.symbol.markerSpacing||250,this.symbol.markerPlacement||"point"),i=this.getAltitude(t.feature.properties);for(let t=0;t<n.length;t++){const e=n[t];this.data.aPosition.push(e.x,e.y),this.data.aPosition.push(i);const r=Math.max(Math.abs(e.x),Math.abs(e.y));r>this.maxPos&&(this.maxPos=r)}}G(t,n,i){const e=t.feature,r=t.feature.type,s=this.options.EXTENT,o=[];if("line"===i){let t=e.geometry;s&&(t=rr(e.geometry,0,0,s,s));for(let i=0;i<t.length;i++){const e=ar(t[i],n,Sr,null,null,24,1,1,s||1/0);o.push.apply(o,e)}}else if(3===r){const t=ur(e.geometry,0);for(let n=0;n<t.length;n++){const i=fr(t[n],16);se(i,s)||o.push(i)}}else if(2===e.type)for(let t=0;t<e.geometry.length;t++){const n=e.geometry[t];se(n[0],s)||o.push(n[0])}else if(1===e.type)for(let t=0;t<e.geometry.length;t++){const n=e.geometry[t];for(let t=0;t<n.length;t++){const i=n[t];se(i,s)||o.push(i)}}return o}hasElements(){return!1}}\n/*!\n     * from @turf/bboxClip\n     * https://github.com/Turfjs/turf\n     * MIT LICENSE\n     */const Or=[],Ir=[];function Tr(t,n){var i,e,r,s,o,a,h;for(e=1;e<=8;e*=2){for(i=[],s=!(Ur(r=t[t.length-1],n)&e),o=0;o<t.length;o++){if((h=!(Ur(a=t[o],n)&e))!==s){const t=Lr(r,a,e,n);i.push(void 0!==a.x?new Ht(t[0],t[1]):t)}h&&i.push(a),r=a,s=h}if(!(t=i).length)break}return i}function Lr(t,n,i,e){return Or[0]=void 0===t.x?t[0]:t.x,Or[1]=void 0===t.y?t[1]:t.y,t=Or,Ir[0]=void 0===n.x?n[0]:n.x,Ir[1]=void 0===n.y?n[1]:n.y,n=Ir,8&i?[t[0]+(n[0]-t[0])*(e[3]-t[1])/(n[1]-t[1]),e[3]]:4&i?[t[0]+(n[0]-t[0])*(e[1]-t[1])/(n[1]-t[1]),e[1]]:2&i?[e[2],t[1]+(n[1]-t[1])*(e[2]-t[0])/(n[0]-t[0])]:1&i?[e[0],t[1]+(n[1]-t[1])*(e[0]-t[0])/(n[0]-t[0])]:null}function Ur(t,n){Or[0]=void 0===t.x?t[0]:t.x,Or[1]=void 0===t.y?t[1]:t.y;var i=0;return(t=Or)[0]<n[0]?i|=1:t[0]>n[2]&&(i|=2),t[1]<n[1]?i|=4:t[1]>n[3]&&(i|=8),i}class zr extends le{constructor(...t){super(...t),this.lineElements=[]}createStyledVector(t,n,i,e,r){const s=new he(t,n,i,e),o=s.getPolygonResource();return!this.options.atlas&&o&&(r[o]=[0,0]),s}getFormat(){const t=[{type:Int16Array,width:3,name:"aPosition"}],{polygonFillFn:n,polygonOpacityFn:i,uvScaleFn:e,uvOffsetFn:r}=this.C;if(this.iconAtlas){const n=this.getIconAtlasMaxValue();t.push({type:n>255?Uint16Array:Uint8Array,width:4,name:"aTexInfo"})}return n&&t.push({type:Uint8Array,width:4,name:"aColor"}),i&&t.push({type:Uint8Array,width:1,name:"aOpacity"}),e&&t.push({type:Uint16Array,width:2,name:"aUVScale"}),r&&t.push({type:Uint8Array,width:2,name:"aUVOffset"}),t}createDataPack(...t){this.maxLineIndex=0,this.lineElements=[];const n=super.createDataPack(...t);if(!n)return n;let i=this.lineElements;return i=new($i(this.maxLineIndex))(this.lineElements),n.lineIndices=i,n.buffers.push(i.buffer),n}placeVector(t,n){const i=t.feature;this.at(i.geometry,i,n)}at(t,n){let i,e,r,s;const{polygonFillFn:o,polygonOpacityFn:a,uvScaleFn:h,uvOffsetFn:u}=this.C,l=n.properties;o&&(i=o(this.options.zoom,l)||[255,255,255,255],m(i)?i=[0,0,0,0]:(i=Array.isArray(i)?i.map(t=>255*t):Vn(i).array(),3===i.length&&i.push(255))),a&&(e=a(this.options.zoom,l),Ji(e)&&(e=1),e*=255),h&&(r=h(this.options.zoom,l),Ji(r)&&(r=[1,1]),r=[255*r[0],255*r[1]]),u&&(s=u(this.options.zoom,l),Ji(s)&&(s=[0,0]),s=[255*s[0],255*s[1]]);const c=!!this.iconAtlas,f=ur(t,500),d=this.getAltitude(l),y=[0,0],v=[0,0];if(c){const{polygonPatternFileFn:t}=this.C,n=t?t(null,l):this.symbol.polygonPatternFile;if(this.iconAtlas.glyphMap[n]){const t=this.iconAtlas.positions[n];y[0]=t.tl[0]+1,y[1]=t.tl[1]+1,v[0]=t.displaySize[0]-3,v[1]=t.displaySize[1]-3}}const p=[-1,-1,n.extent+1,n.extent+1];for(let t=0;t<f.length;t++){const n=f[t],o=this.data.aPosition.length/3,a=[],h=[];for(let t=0;t<n.length;t++){let o=n[t];if(this.options.EXTENT!==1/0&&(o=Tr(o,p)),0===o.length)continue;0!==t&&h.push(a.length/2);const u=this.lineElements.length;this.data.aPosition.push(o[0].x,o[0].y,d),c&&this.data.aTexInfo.push(...y,...v),void 0!==i&&this.data.aColor.push(...i),void 0!==e&&this.data.aOpacity.push(e),void 0!==r&&this.data.aUVScale.push(...r),void 0!==s&&this.data.aUVOffset.push(...s),this.maxPos=Math.max(this.maxPos,Math.abs(o[0].x),Math.abs(o[0].y)),this.addLineElements(u+o.length-1,u),a.push(o[0].x),a.push(o[0].y);for(let t=1;t<o.length;t++)this.data.aPosition.push(o[t].x,o[t].y,d),c&&this.data.aTexInfo.push(...y,...v),void 0!==i&&this.data.aColor.push(...i),void 0!==e&&this.data.aOpacity.push(e),void 0!==r&&this.data.aUVScale.push(...r),void 0!==s&&this.data.aUVOffset.push(...s),this.maxPos=Math.max(this.maxPos,Math.abs(o[t].x),Math.abs(o[t].y)),this.addLineElements(u+t-1,u+t),a.push(o[t].x),a.push(o[t].y)}const u=ki(a,h);for(let t=0;t<u.length;t+=3)this.addElements(o+u[t],o+u[t+1],o+u[t+2])}}addLineElements(...t){this.maxLineIndex=Math.max(this.maxLineIndex,...t),this.lineElements.push(...t)}}var Dr=Object.freeze({__proto__:null,clipPolygon:Tr,calculateSignedArea:ne,getFeaAltitudeAndHeight:re,convertRTLText:tr});const Er={polygonPatternFile:1,markerFile:1,markerPlacement:1,markerSpacing:1,textName:1,textStyle:1,textFaceName:1,textWeight:1,textPlacement:1,textSpacing:1,lineJoin:1,lineCap:1,linePatternFile:1};Object.assign({visible:1,textHorizontalAlignment:1,textVerticalAlignment:1,textWrapWidth:1,markerHorizontalAlignment:1,markerVerticalAlignment:1},Er),Object.assign({lineDasharray:1},Er);function Cr(t,n,i,e,r,s,o,a,h,u,l,c,f,d,y){const v=n.length,p=r/3;for(let i=2,e=v;i<e;i+=3)t[r+i-2]=n[i-2],t[r+i-1]=n[i-1],t[r+i-0]=n[i]-s;r+=v;for(let i=2,e=v;i<e;i+=3)t[r+i-2]=n[i-2],t[r+i-1]=n[i-1],t[r+i-0]=n[i]-o;r+=v;for(let i=2,e=v;i<e;i+=3)t[r+i-2]=n[i-2],t[r+i-1]=n[i-1],t[r+i-0]=n[i]-s;r+=v;for(let i=2,e=v;i<e;i+=3)t[r+i-2]=n[i-2],t[r+i-1]=n[i-1],t[r+i-0]=n[i]-o;r+=v,(i=i||[]).push(v/3);for(let n=0;n<i.length;n++){jr(p+(i[n-1]||0),p+i[n],t,v/3,a,e,h,u,l,c,f,d,y)}return r}function jr(t,n,i,e,r,s,o,a,h,u,l,c,f){const d=s.length;let y,v;for(let o=t,a=n;o<a-1;o++)y=o,v=o+1,ct(i,y,v,r)||((o-t)%2==1&&(y+=2*e,v+=2*e),s.push(y+e,y,v),s.push(v,v+e,y+e));o&&function(t,n,i,e,r,s,o,a,h){let u,l=0,c=0,f=0,d=0;for(let y=e.length-1;y>=0;y--){const v=3*e[y],p=3*e[y]+1,m=3*e[y]+2,g=i[v],w=i[p],M=i[m];l||c||(l=Math.max(i[m],i[3*e[y-2]+2]),c=Math.min(i[m],i[3*e[y-2]+2]),u=l-c);let b=f;const x=y%6;0===t?(5===x&&(d=Nt(i,e,y,g,w)),b=2===x||3===x||4===x?f:f+d):1===t&&(2===x||3===x||4===x?b=0:5===x?(d=Nt(i,e,y,g,w),b=d):b=d);const F=b*o*a/r,A=M===l?0:u*h/s;n[v/3*2]=F,n[v/3*2+1]=-A,0===x&&(f+=d)}}(a,h,i,s.slice(d,s.length),u[0],u[1],l,c,f)}function Nr(t,n,i,e,r,s,o,a,h,u){void 0===n.top&&(n.top=!0),void 0===n.side&&(n.side=!0);const{altitudeScale:l,altitudeProperty:c,defaultAltitude:f,heightProperty:d,minHeightProperty:y,defaultHeight:v,tangent:p,uv:m,uvScale:M,topUVMode:b,sideUVMode:x,top:F,side:A,topThickness:k}=n,S=function(t,n,{altitudeScale:i,altitudeProperty:e,defaultAltitude:r,heightProperty:s,minHeightProperty:o,defaultHeight:a},{side:h,top:u,topThickness:l,uvOrigin:c,uv:f,uvSize:d,topUVMode:y,sideUVMode:v,glScale:p,localScale:m,vScale:g},w){const M=n/t[0].extent,b=[],x=[],F=[],A=[],k=[],S=[],_=!!f,O=!!u,T=!!h,z=_?[]:null;function D(t,i,e,r){if(O){const r=ki(A,e,3);if(0===r.length)return i;let s;I(k,A),i+=A.length;for(let n=2,i=r.length;n<i;n+=3)s=r[n-1],r[n-1]=r[n]+t/3,r[n]=s+t/3,r[n-2]+=t/3;I(S,r),_&&Et(y||0,t,i,z,k,0,p,m,d[0],d[1]),l>0&&!T&&(i=Cr(k,A,e,S,i,0,l,n,_,v||0,z,d,p,m,g))}return T&&(O&&(l=0),i=Cr(k,A,e,S,i,l,r,n,_,v||0,z,d,p,m,g)),i}let E=0,C=0;const j=[-1,-1,n+1,n+1];let N=0,H=t.length;void 0!==w&&(N=w,H=w+1);let V=0,R=!1;for(;N<H;N++){const h=t[N],u=h.id;P(u)&&(Math.abs(u)>V&&(V=Math.abs(u)),u<0&&(R=!0));const l=h.geometry,{altitude:c,height:f}=Dr.getFeaAltitudeAndHeight(h,i,e,r,s,a,o);E=Math.max(Math.abs(c),E);const d=k.length;let y=C,v=[];A.length=0;for(let t=0,i=l.length;t<i;t++){const e=Dr.calculateSignedArea(l[t])<0;!e&&t>0&&(C=D(y,C,v,f*M),A.length=0,v=[],y=C);let r=l[t];if(n!==1/0&&(r=Dr.clipPolygon(r,j)),!r.length){t===i-1&&(C=D(y,C,v,f*M));continue}const s=r.length;Array.isArray(r[0])?r[0][0]===r[s-1][0]&&r[0][1]===r[s-1][1]||r.push([r[0][0],r[0][1]]):r[0].x===r[s-1].x&&r[0].y===r[s-1].y||r.push(r[0]),e&&v.push(A.length/3),lt(A,A.length,r,M,c),t===i-1&&(C=D(y,C,v,f*M))}const p=k.length-d,m="__fea_idx".trim();for(let t=0;t<p/3;t++)x.push(void 0===h[m]?N:h[m]),b.push(N),P(u)&&F.push(u)}const $=L(x.length?x[x.length-1]:0),W={maxAltitude:E,vertices:new(U(Math.max(512,E)))(k),indices:S,pickingIds:new $(x),featureIndexes:b};if(F.length){const t=R?U(V):L(V);W.featureIds=new t(F)}else W.featureIds=[];return z&&(z.length=k.length/3*2,W.uvs=z),W}(t,i,{altitudeScale:l,altitudeProperty:c,defaultAltitude:f||0,heightProperty:d,minHeightProperty:y,defaultHeight:v||0},{top:F,side:A,topThickness:10*k||0,uv:m||p,uvSize:M?[.5*M[0],.5*M[1]]:[.5,.5],uvOrigin:e,topUVMode:b,sideUVMode:x,glScale:r,localScale:o,vScale:s},u),_=[],O=new(T(S.vertices.length/3))(S.indices);delete S.indices,_.push(O.buffer,S.vertices.buffer,S.pickingIds.buffer);const z=Xn(S.vertices,O);let E=!0;for(let t=0;t<z.length;t++)z[t]=-z[t],z[t]%1!=0&&(E=!1);if(S.normals=z,p){let t=function(t,n,i,e){const r=t.length/3,s=new Array(4*r),o=[],a=[];for(let t=0;t<r;t++)o[t]=[0,0,0],a[t]=[0,0,0];const h=[0,0,0],u=[0,0,0],l=[0,0,0],c=[0,0],f=[0,0],d=[0,0],y=[0,0,0],v=[0,0,0];function p(n,e,r){Zn(h,t,3*n),Zn(u,t,3*e),Zn(l,t,3*r),Yn(c,i,2*n),Yn(f,i,2*e),Yn(d,i,2*r);const s=u[0]-h[0],p=l[0]-h[0],m=u[1]-h[1],g=l[1]-h[1],w=u[2]-h[2],M=l[2]-h[2],b=f[0]-c[0],x=d[0]-c[0],F=f[1]-c[1],A=d[1]-c[1],k=1/(b*A-x*F);bt(y,(A*s-F*p)*k,(A*m-F*g)*k,(A*w-F*M)*k),bt(v,(b*p-x*s)*k,(b*g-x*m)*k,(b*M-x*w)*k),xt(o[n],o[n],y),xt(o[e],o[e],y),xt(o[r],o[r],y),xt(a[n],a[n],v),xt(a[e],a[e],v),xt(a[r],a[r],v)}for(let t=0,n=e.length;t<n;t+=3)p(e[t+0],e[t+1],e[t+2]);const m=[],g=[],w=[],M=[];let b,x,F;function A(t){Zn(w,n,3*t),Mt(M,w),x=o[t],Mt(m,x),St(m,m,function(t,n,i){return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t}(w,w,kt(w,x))),At(m,m),Pt(g,M,x),F=kt(g,a[t]),b=F<0?-1:1,s[4*t]=m[0],s[4*t+1]=m[1],s[4*t+2]=m[2],s[4*t+3]=b}for(let t=0,n=e.length;t<n;t+=3)A(e[t+0]),A(e[t+1]),A(e[t+2]);return s}(S.vertices,S.normals,S.uvs,O);t=function(t,n){const i=new Float32Array(n.length),e=[],r=[],s=[];for(let o=0;o<n.length;o+=4){const a=o/4*3;bt(r,t[a]||0,t[a+1]||0,t[a+2]||0),Ot(e,n[o]||0,n[o+1]||0,n[o+2]||0,n[o+3]||0),Jn(s,r,e),_t(i.subarray(o,o+4),s)}return i}(S.normals,t),S.tangents=t,_.push(t.buffer),delete S.normals}if(S.normals&&(S.normals=E?new Int8Array(S.normals):new Float32Array(S.normals),_.push(S.normals.buffer)),S.uvs){const t=S.uvs;S.uvs=new Float32Array(t),_.push(S.uvs.buffer)}const C=function(t,n,i,e){const r={};if(D(n.polygonFill)){const s={},o=w(n.polygonFill),a=new Uint8Array(4*e.length);for(let n=0;n<e.length;n++){const r=t[e[n]],h=r.properties||{};h.$layer=r.layer,h.$type=r.type;let u=o(i,h);if(delete h.$layer,delete h.$type,Array.isArray(u)||(u=s[u]=s[u]||Vn(u).array()),Array.isArray(u)){for(let t=0;t<u.length;t++)Hr[t]=255*u[t];3===u.length&&(Hr[3]=255)}a[4*n]=Hr[0],a[4*n+1]=Hr[1],a[4*n+2]=Hr[2],a[4*n+3]=Hr[3]}r.aColor=a}if(D(n.polygonOpacity)){const s=g(n.polygonOpacity),o=new Uint8Array(e.length);for(let n=0;n<e.length;n++){const r=t[e[n]],a=r.properties||{};a.$layer=r.layer,a.$type=r.type;const h=s(i,a);delete a.$layer,delete a.$type,o[n]=255*h}r.aOpacity=o}return r}(t,a,h,S.featureIndexes),j={data:{data:{aPosition:S.vertices,aNormal:S.normals,aTexCoord0:S.uvs,aTangent:S.tangents,aPickingId:S.pickingIds},indices:O,properties:{maxAltitude:S.maxAltitude}},buffers:_};return S.featureIds.length?(j.data.featureIds=S.featureIds,_.push(j.data.featureIds.buffer)):j.data.featureIds=[],C.aColor&&(j.data.data.aColor=C.aColor,j.buffers.push(C.aColor.buffer)),C.aOpacity&&(j.data.data.aOpacity=C.aOpacity,j.buffers.push(C.aOpacity.buffer)),j}const Hr=[];function Vr(t,n,{altitudeScale:i,altitudeProperty:e,defaultAltitude:r,heightProperty:s,minHeightProperty:o,defaultHeight:a,bottom:h}){const u=h,l=n/t[0].extent,c=2*function(t,n){let i=0;for(let e=0,r=t.length;e<r;e++){const r=t[e];if(P(r.geometry[0][0])){const t=3*r.geometry.length;i+=n?2*t-6:t}else for(let t=0,e=r.geometry.length;t<e;t++){let e=3*r.geometry[t].length;3===r.type&&(e-=3),i+=n?2*e-6:e}}return i}(t)+3*t.length*2,f=[],d=new Int16Array(c),y=[];function v(t,i,e){const r=i-t,s=d.subarray(t,i),o=d.subarray(i,i+r);o.set(s);for(let t=2,n=o.length;t<n;t+=3)o[t]=s[t]-e;const a=t/3,h=r/3;let l,c;for(let t=a,i=h+a;t<i;t++)t<i-1?(l=t,c=t+1):(l=t,c=a),ct(d,l,c,n)||(y.push(l,c),u&&y.push(l+h,c+h),Rr(d,l,n)||y.push(l,l+h));return i+r}let p=0,m=0;const g="__fea_idx".trim();for(let n=0,h=t.length;n<h;n++){const h=t[n],u=h.geometry,{altitude:c,height:w}=Dr.getFeaAltitudeAndHeight(h,i,e,r,s,a,o);m=Math.max(Math.abs(c),m);let M=p;for(let t=0,n=u.length;t<n;t++){let n=u[t];const i=n.length;n[0][0]===n[i-1][0]&&n[0][1]===n[i-1][1]&&(n=n.slice(0,i-1)),p=lt(d,M,n,l,c),p=v(M,p,w*l),M=p}const b=y.length-f.length;for(let t=0;t<b;t++)f.push(h[g])}const w=new(T(y.reduce((t,n)=>Math.max(t,n),0)))(y),M=L(t.length);return{aPosition:new(U(Math.max(512,m)))(d),indices:w,aPickingId:new M(f)}}function Rr(t,n,i){const e=t[3*n],r=t[3*n+1];return e<0||e>i||r<0||r>i}function $r(t,n,i){const e=Vr(t,i,n),r=[e.aPosition.buffer,e.indices.buffer,e.aPickingId.buffer],s=e.indices;return delete e.indices,{data:{data:e,indices:s},buffers:r}}class Wr{constructor(t,n,i,e,r){this.id=t,this.options=n,this.upload=i,this.ht(n.style),this.requests={},this.ut=0,this.lt=e,this.loadings=r}updateStyle(t,n){this.options.style=t,this.ht(t),this.ut++,n()}updateOptions(t,n){this.options=A(this.options,t),n()}loadTile(t,n){const i=this.loadings,e=t.tileInfo.url,r=this.options.debugTile;if(r){const{x:i,y:e,z:s}=t.tileInfo;if(s!==r.z||i!==r.x||e!==r.y)return void n()}if(this.lt.has(e)){const{features:r,layers:s}=this.lt.get(e),o=i[e];if(delete i[e],!r||!r.length)return this.ct(o),void n();if(o)for(let n=0;n<o.length;n++)this.ft.call(o[n].ref,t,o[n].callback,e,s,r);this.ft(t,n,e,s,r)}else i[e]?i[e].push({callback:n,ref:this}):(i[e]=[{callback:n,ref:this}],this.requests[e]=this.getTileFeatures(t.tileInfo,(n,r,s,o)=>{const a=i[e];if(delete i[e],this.checkIfCanceled(e))return delete this.requests[e],void this.ct(a,null,{canceled:!0});if(delete this.requests[e],this.options.debug&&r)for(let n=0;n<r.length;n++)r[n]._debug_info={index:n,tileId:t.tileInfo.id};if(n)return n.loading||this.lt.add(e,{features:[],layers:[]}),void this.ct(a,n);if(!r||!r.length)return this.lt.add(e,{features:[],layers:[]}),void this.ct(a);if(this.lt.add(e,{features:r,layers:s}),a)for(let n=0;n<a.length;n++)this.ft.call(a[n].ref,t,a[n].callback,e,s,r,o)}))}ft(t,n,i,e,r,s){this.dt(e,r,t).then(t=>{t.canceled?n(null,{canceled:!0}):(t.data.style=this.ut,s&&A(t.data,s),n(null,t.data,t.buffers))}).catch(t=>{n(t)})}abortTile(t,n){delete this.requests[t],this.yt(t),n()}yt(t){const n=this.loadings[t];if(n)for(let t=0;t<n.length;t++)n[t].callback(null,{canceled:!0});delete this.loadings[t]}ct(t,n,i){if(t)for(let e=0;e<t.length;e++)t[e].callback(n,i)}checkIfCanceled(t){return!this.requests[t]}fetchIconGlyphs(t,n,i){this.upload("fetchIconGlyphs",{icons:t,glyphs:n},null,i)}dt(t,n,{glScale:i,zScale:e,tileInfo:r}){if(!n.length)return Promise.resolve({data:null,buffers:[]});const s=!this.options.style.style.length&&!this.options.style.featureStyle.length;let o=this.pluginConfig.slice(0);s&&(o=this.vt(t)),this.featurePlugins&&I(o,this.featurePlugins);const a=n[0].extent,h=r.z,u={x:r.extent2d.xmin*i,y:r.extent2d.ymax*i},l=[],c=[],f=[],d=this.options,y=[],v={},p=[Promise.resolve(this.ut)];let m=0,g=-1;for(let t=0;t<o.length;t++){g++;const r=o[t];r.type!==m&&(g=0,m=r.type);const d=0===r.type?l:c;if(r.symbol&&!1===r.symbol.visible){d[g]=null;continue}const{tileFeatures:w,tileFeaIndexes:M}=this.pt(r.type,r.filter,n,v,t);if(!w.length){d[g]=null;continue}const b=T(M[M.length-1]);d[g]={styledFeatures:new b(M)},f.push({idx:t,typeIdx:g}),y.push(d[g].styledFeatures.buffer);let x=this.gt(w,r,{extent:a,tilePoint:u,glScale:i,zScale:e,zoom:h});s&&(x=x.then(t=>{if(!t)return null;if(t.data)t.data.layer=w[0].layer;else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]&&t[n].data&&(t[n].data.layer=w[0].layer);return t})),p.push(x)}return Promise.all(p).then(([i,...e])=>{function r(t,n){if(void 0===t.data.ref&&(t.data.type=o[f[n].idx].renderPlugin.dataConfig.type,t.data.filter=o[f[n].idx].filter.def,t.buffers&&t.buffers.length))for(let n=0;n<t.buffers.length;n++)y.push(t.buffers[n])}if(i!==this.ut)return{canceled:!0};for(let t=0;t<e.length;t++){if(!e[t])continue;const n=e[t],i=0===o[f[t].idx].type?l:c;if(Array.isArray(n)){const e=[];for(let i=0;i<n.length;i++)n[i]&&(r(n[i],t),(void 0===n[i].data.ref||n[n[i].data.ref])&&e.push(n[i].data));e.length&&(i[f[t].typeIdx].data=e)}else r(n,t),i[f[t].typeIdx].data=n.data}const s={},h=t;if(d.features||d.schema){let t;for(let i=0,e=n.length;i<e;i++)if(t=n[i],h[t.layer].properties||(h[t.layer].properties=Gr(t.properties)),d.features&&t&&v[i])if("id"===d.features)s[i]=t.id;else{const n=A({},t);d.pickingGeometry||delete n.geometry,delete n.extent,delete n.properties.$layer,delete n.properties.$type,delete n.__index,s[i]=n}}return{data:{schema:h,data:l,featureData:c,extent:a,features:s},buffers:y}})}gt(t,n,i){const e=n.renderPlugin.dataConfig,r=n.symbol,s=this.options.tileSize[0],{extent:o,glScale:a,zScale:h,zoom:u,tilePoint:l}=i,c=o/s,f=e.type,d=this.options.debugTile&&this.options.debugTile.index;if("3d-extrusion"===f){const n=Jr(r);return n&&(e.uv=1,2===n&&(e.tangent=1)),Promise.all([Promise.resolve(Nr(t,e,o,l,a,h,this.options.tileSize[1]/o,r,u,d))])}if("3d-wireframe"===f)return Promise.all([Promise.resolve($r(t,e,o))]);if("point"===f){const n=A({},e,{EXTENT:o,requestor:this.fetchIconGlyphs.bind(this),zoom:u,debugIndex:d}),i=mr.splitPointSymbol(r);return mr.needMerge(i[0])&&(t=mr.mergeLineFeatures(t,i[0],u)),Promise.all(i.map(i=>new mr(t,i,n).load(c)))}if("native-point"===f){const n=A({},e,{EXTENT:o,zoom:u,debugIndex:d});return Xr(t,r,n,_r,o/s)}if("line"===f){const n=A({},e,{EXTENT:o,requestor:this.fetchIconGlyphs.bind(this),tileRatio:c,zoom:u,debugIndex:d});return Xr(t,r,n,Mr)}if("native-line"===f){const n=A({},e,{EXTENT:o,zoom:u,debugIndex:d});return Xr(t,r,n,Pr)}if("fill"===f){const n=A({},e,{EXTENT:o,requestor:this.fetchIconGlyphs.bind(this),zoom:u,debugIndex:d});return Xr(t,r,n,zr)}if("line-extrusion"===f){delete r.lineGradientProperty,r.lineJoin="miter",r.lineCap="butt";const n=Jr(r);n&&(e.uv=1,2===n&&(e.tangent=1));const i=A({},e,{EXTENT:o,tileSize:s,zScale:h,glScale:a,zoom:u,debugIndex:d});if(n){const n=[];if(!1!==e.top){const e=A({},i);e.side=!1,n.push(new Ar(t,r,e))}return!1!==e.side&&(i.side=!0,i.top=!1,n.push(new Ar(t,r,i))),Promise.all(n.map(t=>t.load()))}return Promise.all([new Ar(t,r,i).load()])}return Promise.resolve([])}pt(t,n,i,e){const r="__fea_idx".trim(),s=[],o=[],a=i.length;for(let h=0;h<a;h++)if((1===t||void 0===i[h].id||!this.styledFeatures[i[h].id])&&((!n.def||"default"===n.def)&&!e[h]||!0===n.def||Array.isArray(n.def)&&n(i[h]))){e[h]=1;const n=A({},i[h]);if(n[r]=h,o.push(n),s.push(h),1===t)break}return{tileFeatures:o,tileFeaIndexes:s}}ht(t){const{style:n,featureStyle:i}=t,e={};i.forEach(t=>{Array.isArray(t.id)?(t.id.forEach(t=>{e[t]=1}),t.filter=["in","$id",...t.id]):(e[t.id]=1,t.filter=["==","$id",t.id])});const r=z(n);for(let t=0;t<n.length;t++)r[t].filter&&(r[t].filter.def=n[t].filter?n[t].filter.value||n[t].filter:void 0),r[t].type=0;const s=[],o=z(i);for(let t=0;t<i.length;t++)o[t].type=1,o[t].filter.def=i[t].filter?i[t].filter.value||i[t].filter:void 0,o[t].renderPlugin&&s.push(o[t]);this.pluginConfig=r,this.featurePlugins=s,this.styledFeatures=e}vt(t){let n=this.wt;this.wt||(n=this.wt={});const e=["","Point","LineString","Polygon","MultiPoint","MultiLineString","MultiPolygon"],r=[];for(const s in t){const o=s;if(!n[s]){const r=[];for(let n=0;n<t[s].types.length;n++){const a=t[s].types[n],h=["all",["==","$layer",o],["==","$type",e[a]]],u={filter:i(h),renderPlugin:qr(a),symbol:Br(a)};u.filter.def=h,u.type=0,r.push(u)}n[o]=r}r.push(...n[o])}return r}}function qr(t){switch(t){case 1:return{type:"native-point",dataConfig:{type:"native-point",only2D:!0}};case 2:return{type:"native-line",dataConfig:{type:"native-line",only2D:!0}};case 3:return{type:"fill",dataConfig:{type:"fill",only2D:!0}}}return null}function Br(t){switch(t){case 1:return{markerFill:"#f00",markerSize:10};case 2:return{lineColor:"#fff"};case 3:return{polygonFill:"#00f",polygonOpacity:.4}}return null}function Gr(t){if(Array.isArray(t)||!_(t))return{};const n={};for(const i in t){const e=t[i];k(e)?n[i]="string":P(e)?n[i]="number":!0===e||!1===e?n[i]="boolean":Array.isArray(e)?n[i]="array":n[i]="object"}return n}function Jr(t){if(!t)return 0;let n=0;for(const i in t){if(("normalTexture"===i||"bumpTexture"===i)&&t[i])return 2;if(i.indexOf("Texture")>0&&t[i])n=1;else if(_(t[i])){const e=Jr(t[i]);if(2===e)return e;1===e&&(n=1)}}return n}function Xr(t,n,i,e,r){const s={},o=Array.isArray(n)?n:[n];let a=-1;for(let t=0;t<o.length;t++)s[t]=Zr(o[t]),!s[t]&&o[t]&&-1===a&&(a=t);const h=[];for(let n=0;n<o.length;n++)o[n]&&(o[n].index={index:n},s[n]||n===a?h.push(new e(t,o[n],i).load(r)):h.push({data:{ref:a,symbolIndex:{index:n}}}));return Promise.all(h)}function Zr(t){if(!t)return 0;for(const n in t)if(D(t[n]))return 1;return 0}function Yr(t,n){Kr(t.geometry,n)}function Kr(t,n){if(t)switch(t.type){case"Point":Qr(t.coordinates,n);break;case"MultiPoint":case"LineString":ts(t.coordinates,n);break;case"MultiLineString":case"Polygon":ns(t.coordinates,n);break;case"MultiPolygon":!function(t,n){for(let i=0;i<t.length;i++)ns(t[i],n)}(t.coordinates,n);break;case"GeometryCollection":for(let i=0;i<t.geometries.length;i++)Kr(t.geometries[i],n)}}function Qr(t,n){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.max(n[2],t[0]),n[3]=Math.max(n[3],t[1])}function ts(t,n){for(let i=0;i<t.length;i++)Qr(t[i],n)}function ns(t,n){for(let i=0;i<t.length;i++)ts(t[i],n)}class is extends Wr{constructor(t,n,i,e,r,s){super(t,n,i,e,r),(n=n||{}).extent||(n.extent=8192),this.zoomOffset=0,n.tileSize&&(this.zoomOffset=-function(t){if(Math.log2)return Math.log2(t);const n=Math.log(t)*Math.LOG2E,i=Math.round(n);return Math.abs(i-n)<1e-14?i:n}(n.tileSize[0]/256)),this.setData(n.data,s)}setData(t,n){if(delete this.index,!t)return void n();const i={maxZoom:24,tolerance:this.options.extent/this.options.tileSize[0]*1,extent:this.options.extent,buffer:this.options.tileBuffer||64,debug:0,lineMetrics:!0,indexMaxZoom:5,indexMaxPoints:1e5};if(k(t)&&"{"!=t.substring(0,1)||t.url)C.getJSON(t.url?t.url:t,t.url?t:{},(t,e)=>{if(t&&n(t),!e)return void n(null,{extent:null,idMap:{}});const r=e,{first1000:s,idMap:o}=this.Mt(r);this.bt(s,o,r,i,n)});else{"string"==typeof t&&(t=JSON.parse(t));const e=Array.isArray(t)?t:t.features;let r=e;e&&e.length>1e3&&(r=e.slice(0,1e3)),this.bt(r,null,t,i,n)}}bt(t,n,i,e,r){try{const s=t&&t.length?function(t){let n=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];switch(t.type){case"FeatureCollection":for(let i=0;i<t.features.length;i++)Yr(t.features[i],n);break;case"Feature":Yr(t,n);break;default:Kr(t,n)}return n}({type:"FeatureCollection",features:t}):null;this.index=function(t,n){return new ht(t,n)}(i,this.options.geojsonvt||e),r(null,{extent:s,idMap:n})}catch(t){console.warn(t),r({error:t.message})}}Mt(t){const n=[],i={};let e=0;function r(t){t&&("Feature"!==t.type||t.geometry)&&(void 0!==t.id&&null!==t.id||(t.id=e++),i[t.id]=A({},t),t.geometry?(i[t.id].geometry=A({},t.geometry),i[t.id].geometry.coordinates=null):t.coordinates&&(i[t.id].coordinates=null),n.length<1e3&&n.push(t))}return Array.isArray(t)?t.forEach(t=>{r(t)}):t.features&&t.features.forEach(t=>{r(t)}),{first1000:n,idMap:i}}getTileFeatures(t,n){const i=[];if(!this.index)return setTimeout((function(){n({loading:!0})}),1),1;const e=this.index.getTile(t.z+this.zoomOffset,t.x,t.y);if(!e||0===e.features.length)return setTimeout((function(){n(null,i,[])}),1),1;const r=[];for(let t=0,n=e.features.length;t<n;t++){const n=e.features[t];let s=n.layer;void 0===s&&(s="0"),r[s]={types:{}};r[s].types[n.type]=1,n.tags=n.tags||{},i.push({type:n.type,layer:s,id:n.id,geometry:n.geometry,properties:n.tags,extent:this.options.extent})}for(const t in r)r[t].types=Object.keys(r[t].types).map(t=>+t);return setTimeout((function(){n(null,i,r)}),1),1}onRemove(){delete this.index}}var es={\n/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */\nread:function(t,n,i,e,r){var s,o,a=8*r-e-1,h=(1<<a)-1,u=h>>1,l=-7,c=i?r-1:0,f=i?-1:1,d=t[n+c];for(c+=f,s=d&(1<<-l)-1,d>>=-l,l+=a;l>0;s=256*s+t[n+c],c+=f,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=e;l>0;o=256*o+t[n+c],c+=f,l-=8);if(0===s)s=1-u;else{if(s===h)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,e),s-=u}return(d?-1:1)*o*Math.pow(2,s-e)},write:function(t,n,i,e,r,s){var o,a,h,u=8*s-r-1,l=(1<<u)-1,c=l>>1,f=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,d=e?0:s-1,y=e?1:-1,v=n<0||0===n&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(a=isNaN(n)?1:0,o=l):(o=Math.floor(Math.log(n)/Math.LN2),n*(h=Math.pow(2,-o))<1&&(o--,h*=2),(n+=o+c>=1?f/h:f*Math.pow(2,1-c))*h>=2&&(o++,h/=2),o+c>=l?(a=0,o=l):o+c>=1?(a=(n*h-1)*Math.pow(2,r),o+=c):(a=n*Math.pow(2,c-1)*Math.pow(2,r),o=0));r>=8;t[i+d]=255&a,d+=y,a/=256,r-=8);for(o=o<<r|a,u+=r;u>0;t[i+d]=255&o,d+=y,o/=256,u-=8);t[i+d-y]|=128*v}},rs=os,ss=es;function os(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}os.Varint=0,os.Fixed64=1,os.Bytes=2,os.Fixed32=5;var as="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function hs(t){return t.type===os.Bytes?t.readVarint()+t.pos:t.pos+1}function us(t,n,i){return i?4294967296*n+(t>>>0):4294967296*(n>>>0)+(t>>>0)}function ls(t,n,i){var e=n<=16383?1:n<=2097151?2:n<=268435455?3:Math.floor(Math.log(n)/(7*Math.LN2));i.realloc(e);for(var r=i.pos-1;r>=t;r--)i.buf[r+e]=i.buf[r]}function cs(t,n){for(var i=0;i<t.length;i++)n.writeVarint(t[i])}function fs(t,n){for(var i=0;i<t.length;i++)n.writeSVarint(t[i])}function ds(t,n){for(var i=0;i<t.length;i++)n.writeFloat(t[i])}function ys(t,n){for(var i=0;i<t.length;i++)n.writeDouble(t[i])}function vs(t,n){for(var i=0;i<t.length;i++)n.writeBoolean(t[i])}function ps(t,n){for(var i=0;i<t.length;i++)n.writeFixed32(t[i])}function ms(t,n){for(var i=0;i<t.length;i++)n.writeSFixed32(t[i])}function gs(t,n){for(var i=0;i<t.length;i++)n.writeFixed64(t[i])}function ws(t,n){for(var i=0;i<t.length;i++)n.writeSFixed64(t[i])}function Ms(t,n){return(t[n]|t[n+1]<<8|t[n+2]<<16)+16777216*t[n+3]}function bs(t,n,i){t[i]=n,t[i+1]=n>>>8,t[i+2]=n>>>16,t[i+3]=n>>>24}function xs(t,n){return(t[n]|t[n+1]<<8|t[n+2]<<16)+(t[n+3]<<24)}os.prototype={destroy:function(){this.buf=null},readFields:function(t,n,i){for(i=i||this.length;this.pos<i;){var e=this.readVarint(),r=e>>3,s=this.pos;this.type=7&e,t(r,n,this),this.pos===s&&this.skip(e)}return n},readMessage:function(t,n){return this.readFields(t,n,this.readVarint()+this.pos)},readFixed32:function(){var t=Ms(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=xs(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Ms(this.buf,this.pos)+4294967296*Ms(this.buf,this.pos+4);return this.pos+=8,t},readSFixed64:function(){var t=Ms(this.buf,this.pos)+4294967296*xs(this.buf,this.pos+4);return this.pos+=8,t},readFloat:function(){var t=ss.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=ss.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var n,i,e=this.buf;return n=127&(i=e[this.pos++]),i<128?n:(n|=(127&(i=e[this.pos++]))<<7,i<128?n:(n|=(127&(i=e[this.pos++]))<<14,i<128?n:(n|=(127&(i=e[this.pos++]))<<21,i<128?n:function(t,n,i){var e,r,s=i.buf;if(r=s[i.pos++],e=(112&r)>>4,r<128)return us(t,e,n);if(r=s[i.pos++],e|=(127&r)<<3,r<128)return us(t,e,n);if(r=s[i.pos++],e|=(127&r)<<10,r<128)return us(t,e,n);if(r=s[i.pos++],e|=(127&r)<<17,r<128)return us(t,e,n);if(r=s[i.pos++],e|=(127&r)<<24,r<128)return us(t,e,n);if(r=s[i.pos++],e|=(1&r)<<31,r<128)return us(t,e,n);throw new Error("Expected varint not more than 10 bytes")}(n|=(15&(i=e[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,n=this.pos;return this.pos=t,t-n>=12&&as?function(t,n,i){return as.decode(t.subarray(n,i))}(this.buf,n,t):function(t,n,i){var e="",r=n;for(;r<i;){var s,o,a,h=t[r],u=null,l=h>239?4:h>223?3:h>191?2:1;if(r+l>i)break;1===l?h<128&&(u=h):2===l?128==(192&(s=t[r+1]))&&(u=(31&h)<<6|63&s)<=127&&(u=null):3===l?(s=t[r+1],o=t[r+2],128==(192&s)&&128==(192&o)&&((u=(15&h)<<12|(63&s)<<6|63&o)<=2047||u>=55296&&u<=57343)&&(u=null)):4===l&&(s=t[r+1],o=t[r+2],a=t[r+3],128==(192&s)&&128==(192&o)&&128==(192&a)&&((u=(15&h)<<18|(63&s)<<12|(63&o)<<6|63&a)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,l=1):u>65535&&(u-=65536,e+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),e+=String.fromCharCode(u),r+=l}return e}(this.buf,n,t)},readBytes:function(){var t=this.readVarint()+this.pos,n=this.buf.subarray(this.pos,t);return this.pos=t,n},readPackedVarint:function(t,n){if(this.type!==os.Bytes)return t.push(this.readVarint(n));var i=hs(this);for(t=t||[];this.pos<i;)t.push(this.readVarint(n));return t},readPackedSVarint:function(t){if(this.type!==os.Bytes)return t.push(this.readSVarint());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==os.Bytes)return t.push(this.readBoolean());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==os.Bytes)return t.push(this.readFloat());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==os.Bytes)return t.push(this.readDouble());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==os.Bytes)return t.push(this.readFixed32());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==os.Bytes)return t.push(this.readSFixed32());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==os.Bytes)return t.push(this.readFixed64());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==os.Bytes)return t.push(this.readSFixed64());var n=hs(this);for(t=t||[];this.pos<n;)t.push(this.readSFixed64());return t},skip:function(t){var n=7&t;if(n===os.Varint)for(;this.buf[this.pos++]>127;);else if(n===os.Bytes)this.pos=this.readVarint()+this.pos;else if(n===os.Fixed32)this.pos+=4;else{if(n!==os.Fixed64)throw new Error("Unimplemented type: "+n);this.pos+=8}},writeTag:function(t,n){this.writeVarint(t<<3|n)},realloc:function(t){for(var n=this.length||16;n<this.pos+t;)n*=2;if(n!==this.length){var i=new Uint8Array(n);i.set(this.buf),this.buf=i,this.length=n}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),bs(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),bs(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),bs(this.buf,-1&t,this.pos),bs(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),bs(this.buf,-1&t,this.pos),bs(this.buf,Math.floor(t*(1/4294967296)),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,n){var i,e;t>=0?(i=t%4294967296|0,e=t/4294967296|0):(e=~(-t/4294967296),4294967295^(i=~(-t%4294967296))?i=i+1|0:(i=0,e=e+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn\'t fit into 10 bytes");n.realloc(10),function(t,n,i){i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos]=127&t}(i,0,n),function(t,n){var i=(7&t)<<4;if(n.buf[n.pos++]|=i|((t>>>=3)?128:0),!t)return;if(n.buf[n.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(n.buf[n.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(n.buf[n.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(n.buf[n.pos++]=127&t|((t>>>=7)?128:0),!t)return;n.buf[n.pos++]=127&t}(e,n)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var n=this.pos;this.pos=function(t,n,i){for(var e,r,s=0;s<n.length;s++){if((e=n.charCodeAt(s))>55295&&e<57344){if(!r){e>56319||s+1===n.length?(t[i++]=239,t[i++]=191,t[i++]=189):r=e;continue}if(e<56320){t[i++]=239,t[i++]=191,t[i++]=189,r=e;continue}e=r-55296<<10|e-56320|65536,r=null}else r&&(t[i++]=239,t[i++]=191,t[i++]=189,r=null);e<128?t[i++]=e:(e<2048?t[i++]=e>>6|192:(e<65536?t[i++]=e>>12|224:(t[i++]=e>>18|240,t[i++]=e>>12&63|128),t[i++]=e>>6&63|128),t[i++]=63&e|128)}return i}(this.buf,t,this.pos);var i=this.pos-n;i>=128&&ls(n,i,this),this.pos=n-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),ss.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),ss.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var n=t.length;this.writeVarint(n),this.realloc(n);for(var i=0;i<n;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,n){this.pos++;var i=this.pos;t(n,this);var e=this.pos-i;e>=128&&ls(i,e,this),this.pos=i-1,this.writeVarint(e),this.pos+=e},writeMessage:function(t,n,i){this.writeTag(t,os.Bytes),this.writeRawMessage(n,i)},writePackedVarint:function(t,n){n.length&&this.writeMessage(t,cs,n)},writePackedSVarint:function(t,n){n.length&&this.writeMessage(t,fs,n)},writePackedBoolean:function(t,n){n.length&&this.writeMessage(t,vs,n)},writePackedFloat:function(t,n){n.length&&this.writeMessage(t,ds,n)},writePackedDouble:function(t,n){n.length&&this.writeMessage(t,ys,n)},writePackedFixed32:function(t,n){n.length&&this.writeMessage(t,ps,n)},writePackedSFixed32:function(t,n){n.length&&this.writeMessage(t,ms,n)},writePackedFixed64:function(t,n){n.length&&this.writeMessage(t,gs,n)},writePackedSFixed64:function(t,n){n.length&&this.writeMessage(t,ws,n)},writeBytesField:function(t,n){this.writeTag(t,os.Bytes),this.writeBytes(n)},writeFixed32Field:function(t,n){this.writeTag(t,os.Fixed32),this.writeFixed32(n)},writeSFixed32Field:function(t,n){this.writeTag(t,os.Fixed32),this.writeSFixed32(n)},writeFixed64Field:function(t,n){this.writeTag(t,os.Fixed64),this.writeFixed64(n)},writeSFixed64Field:function(t,n){this.writeTag(t,os.Fixed64),this.writeSFixed64(n)},writeVarintField:function(t,n){this.writeTag(t,os.Varint),this.writeVarint(n)},writeSVarintField:function(t,n){this.writeTag(t,os.Varint),this.writeSVarint(n)},writeStringField:function(t,n){this.writeTag(t,os.Bytes),this.writeString(n)},writeFloatField:function(t,n){this.writeTag(t,os.Fixed32),this.writeFloat(n)},writeDoubleField:function(t,n){this.writeTag(t,os.Fixed64),this.writeDouble(n)},writeBooleanField:function(t,n){this.writeVarintField(t,Boolean(n))}};var Fs=Ht,As=ks;function ks(t,n,i,e,r){this.properties={},this.extent=i,this.type=0,this.xt=t,this.Ft=-1,this.At=e,this.kt=r,t.readFields(Ps,this,n)}function Ps(t,n,i){1==t?n.id=i.readVarint():2==t?function(t,n){var i=t.readVarint()+t.pos;for(;t.pos<i;){var e=n.At[t.readVarint()],r=n.kt[t.readVarint()];n.properties[e]=r}}(i,n):3==t?n.type=i.readVarint():4==t&&(n.Ft=i.pos)}function Ss(t){for(var n,i,e=0,r=0,s=t.length,o=s-1;r<s;o=r++)n=t[r],e+=((i=t[o]).x-n.x)*(n.y+i.y);return e}ks.types=["Unknown","Point","LineString","Polygon"],ks.prototype.loadGeometry=function(){var t=this.xt;t.pos=this.Ft;for(var n,i=t.readVarint()+t.pos,e=1,r=0,s=0,o=0,a=[];t.pos<i;){if(r<=0){var h=t.readVarint();e=7&h,r=h>>3}if(r--,1===e||2===e)s+=t.readSVarint(),o+=t.readSVarint(),1===e&&(n&&a.push(n),n=[]),n.push(new Fs(s,o));else{if(7!==e)throw new Error("unknown command "+e);n&&n.push(n[0].clone())}}return n&&a.push(n),a},ks.prototype.bbox=function(){var t=this.xt;t.pos=this.Ft;for(var n=t.readVarint()+t.pos,i=1,e=0,r=0,s=0,o=1/0,a=-1/0,h=1/0,u=-1/0;t.pos<n;){if(e<=0){var l=t.readVarint();i=7&l,e=l>>3}if(e--,1===i||2===i)(r+=t.readSVarint())<o&&(o=r),r>a&&(a=r),(s+=t.readSVarint())<h&&(h=s),s>u&&(u=s);else if(7!==i)throw new Error("unknown command "+i)}return[o,h,a,u]},ks.prototype.toGeoJSON=function(t,n,i){var e,r,s=this.extent*Math.pow(2,i),o=this.extent*t,a=this.extent*n,h=this.loadGeometry(),u=ks.types[this.type];function l(t){for(var n=0;n<t.length;n++){var i=t[n],e=180-360*(i.y+a)/s;t[n]=[360*(i.x+o)/s-180,360/Math.PI*Math.atan(Math.exp(e*Math.PI/180))-90]}}switch(this.type){case 1:var c=[];for(e=0;e<h.length;e++)c[e]=h[e][0];l(h=c);break;case 2:for(e=0;e<h.length;e++)l(h[e]);break;case 3:for(h=function(t){var n=t.length;if(n<=1)return[t];for(var i,e,r=[],s=0;s<n;s++){var o=Ss(t[s]);0!==o&&(void 0===e&&(e=o<0),e===o<0?(i&&r.push(i),i=[t[s]]):i.push(t[s]))}i&&r.push(i);return r}(h),e=0;e<h.length;e++)for(r=0;r<h[e].length;r++)l(h[e][r])}1===h.length?h=h[0]:u="Multi"+u;var f={type:"Feature",geometry:{type:u,coordinates:h},properties:this.properties};return"id"in this&&(f.id=this.id),f};var _s=As,Os=Is;function Is(t,n){this.version=1,this.name=null,this.extent=4096,this.length=0,this.xt=t,this.At=[],this.kt=[],this.Pt=[],t.readFields(Ts,this,n),this.length=this.Pt.length}function Ts(t,n,i){15===t?n.version=i.readVarint():1===t?n.name=i.readString():5===t?n.extent=i.readVarint():2===t?n.Pt.push(i.pos):3===t?n.At.push(i.readString()):4===t&&n.kt.push(function(t){var n=null,i=t.readVarint()+t.pos;for(;t.pos<i;){var e=t.readVarint()>>3;n=1===e?t.readString():2===e?t.readFloat():3===e?t.readDouble():4===e?t.readVarint64():5===e?t.readVarint():6===e?t.readSVarint():7===e?t.readBoolean():null}return n}(i))}Is.prototype.feature=function(t){if(t<0||t>=this.Pt.length)throw new Error("feature index out of bounds");this.xt.pos=this.Pt[t];var n=this.xt.readVarint()+this.xt.pos;return new _s(this.xt,n,this.extent,this.At,this.kt)};var Ls=Os;function Us(t,n,i){if(3===t){var e=new Ls(i,i.readVarint()+i.pos);e.length&&(n[e.name]=e)}}var zs=function(t,n){this.layers=t.readFields(Us,{},n)};class Ds extends Wr{constructor(t,n,i,e,r,s){super(t,n,i,e,r),n=n||{},s()}getTileFeatures(t,n){const i=t.url;return C.getArrayBuffer(i,(t,i)=>{if(t)return void n(t);const e=new zs(new rs(i.data)),r=[];if(!e.layers)return void n(null,r,[]);const s={};let o;for(const n in e.layers)if(a=e.layers,h=n,Object.prototype.hasOwnProperty.call(a,h)){s[n]={types:{}};const i=s[n].types;for(let s=0,a=e.layers[n].length;s<a;s++)try{o=e.layers[n].feature(s),i[o.type]=1,r.push({type:o.type,layer:n,geometry:o.loadGeometry(),properties:o.properties,extent:o.extent})}catch(t){console.warn("error when load vt geometry:",t)}}var a,h;for(const t in s)s[t].types=Object.keys(s[t].types).map(t=>+t);n(null,r,s,{byteLength:i.data.byteLength})})}abortTile(t,n){const i=this.requests[t];delete this.requests[t],i&&i.abort&&i.abort(),this.yt(t),n()}onRemove(){for(const t in this.requests)this.requests[t].abort();this.requests={}}}let Es=0;const Cs=new class{constructor(t){this.max=t,this.reset()}reset(){return this.data={},this.order=[],this}clear(){this.reset()}add(t,n){return this.has(t)?(this.order.splice(this.order.indexOf(t),1),this.data[t]=n,this.order.push(t)):(this.data[t]=n,this.order.push(t),this.order.length>this.max&&this.getAndRemove(this.order[0])),this}has(t){return t in this.data}keys(){return this.order}getAndRemove(t){if(!this.has(t))return null;const n=this.data[t];return delete this.data[t],this.order.splice(this.order.indexOf(t),1),n}get(t){return this.has(t)?this.data[t]:null}remove(t){return this.has(t)?(delete this.data[t],this.order.splice(this.order.indexOf(t),1),this):this}setMaxSize(t){for(this.max=t;this.order.length>this.max;)this.getAndRemove(this.order[0]);return this}}(128),js={};class Ns{constructor(t){this.St={},this._t={},this.workerId=t}addLayer({actorId:t,mapId:n,layerId:i,params:e},r){if(this.Ot(n,i))return;const s=this.It(n,i),o=e.type,a=e.options,h=this.send.bind(this,t);this.St[s]="GeoJSONVectorTileLayer"===o?new is(i,a,h,Cs,js,r):new Ds(i,a,h,Cs,js,r)}removeLayer({mapId:t,layerId:n},i){const e=this.Ot(t,n),r=this.It(t,n);delete this.St[r],e&&(e.onRemove(i),this.Tt())}loadTile({mapId:t,layerId:n,params:i},e){const r=this.Ot(t,n);r&&r.loadTile(i,e)}abortTile({mapId:t,layerId:n,params:i},e){const r=this.Ot(t,n);r&&r.abortTile&&r.abortTile(i.url,e)}removeTile({mapId:t,layerId:n,params:i},e){const r=this.Ot(t,n);r&&r.removeTile(i,e)}updateStyle({mapId:t,layerId:n,params:i},e){const r=this.Ot(t,n);r&&(r.updateStyle(i,e),this.Tt())}updateOptions({mapId:t,layerId:n,params:i},e){const r=this.Ot(t,n);r&&(r.updateOptions(i,e),this.Tt())}setData({mapId:t,layerId:n,params:i},e){const r=this.Ot(t,n);r&&(r.setData(i.data,e),this.Tt())}receive(t){const n=t.callback,i=this._t[n];delete this._t[n],i&&t.error?i(new Error(t.error)):i&&i(null,t.data)}send(t,n,i,e,r){const s=r?`${t}-${Es++}`:null;r&&(this._t[s]=r),postMessage({type:"<request>",workerId:this.workerId,actorId:t,command:n,params:i,callback:String(s)},e||[])}It(t,n){return`${t}-${n}`}Ot(t,n){const i=this.It(t,n);return this.St[i]}Tt(){const t=Object.keys(js);for(let n=0;n<t.length;n++)delete js[t[n]];Cs.reset()}}t.initialize=function(){},t.onmessage=function(t,n){const i=t.data;if(this.dispatcher||(this.dispatcher=new Ns(t.workerId)),"<response>"===t.type)this.dispatcher.workerId===t.workerId&&this.dispatcher.receive(t);else{const e=i.command;this.dispatcher[e]({actorId:t.actorId,mapId:i.mapId,layerId:i.layerId,params:i.params},(t,i,r)=>{t&&console.error(e,t),n(t,i,r)})}},Object.defineProperty(t,"Lt",{value:!0})}';
    /*!
        Feature Filter by

        (c) mapbox 2016 and maptalks 2018
        www.mapbox.com | www.maptalks.org
        License: MIT, header required.
    */
    const a = [ "Unknown", "Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon", "GeometryCollection" ];
    function l(t) {
        return new Function("f", "var p = (f && f.properties || {}); return " + h(t));
    }
    function h(t) {
        if (!t) return "true";
        const e = t[0];
        if (t.length <= 1) return "any" === e ? "false" : "true";
        return `(${"==" === e ? u(t[1], t[2], "===", !1) : "!=" === e ? u(t[1], t[2], "!==", !1) : "<" === e || ">" === e || "<=" === e || ">=" === e ? u(t[1], t[2], e, !0) : "any" === e ? f(t.slice(1), "||") : "all" === e ? f(t.slice(1), "&&") : "none" === e ? y(f(t.slice(1), "||")) : "in" === e ? d(t[1], t.slice(2)) : "!in" === e ? y(d(t[1], t.slice(2))) : "has" === e ? p(t[1]) : "!has" === e ? y(p(t[1])) : "true"})`;
    }
    function c(t) {
        return "$" === t[0] ? "f." + t.substring(1) : "p[" + JSON.stringify(t) + "]";
    }
    function u(t, e, n, i) {
        const r = c(t), s = "$type" === t ? a.indexOf(e) : JSON.stringify(e);
        return (i ? `typeof ${r}=== typeof ${s}&&` : "") + r + n + s;
    }
    function f(t, e) {
        return t.map(h).join(e);
    }
    function d(t, e) {
        "$type" === t && (e = e.map(t => a.indexOf(t)));
        const n = JSON.stringify(e.sort(m)), i = c(t);
        return e.length <= 200 ? `${n}.indexOf(${i}) !== -1` : `function(v, a, i, j) {\n        while (i <= j) { var m = (i + j) >> 1;\n            if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;\n        }\n    return false; }(${i}, ${n},0,${e.length - 1})`;
    }
    function p(t) {
        return "$id" === t ? '"id" in f' : JSON.stringify(t) + " in p";
    }
    function y(t) {
        return `!(${t})`;
    }
    function m(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
    }
    function g(t) {
        for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const e in n) t[e] = n[e];
        }
        return t;
    }
    function v(t, e) {
        for (let n = 0; n < t.stops.length; n++) if (e === t.stops[n][0]) return t.stops[n][1];
        return t.default;
    }
    function x(t, e) {
        for (var n = 0; n < t.stops.length && !(e < t.stops[n][0]); n++) ;
        return t.stops[Math.max(n - 1, 0)][1];
    }
    function b(t, e) {
        for (var n = void 0 !== t.base ? t.base : 1, i = 0; !(i >= t.stops.length || e <= t.stops[i][0]); ) i++;
        return 0 === i ? t.stops[i][1] : i === t.stops.length ? t.stops[i - 1][1] : function t(e, n, i, r, s, o) {
            return "function" == typeof s ? function() {
                var a = s.apply(void 0, arguments), l = o.apply(void 0, arguments);
                return t(e, n, i, r, a, l);
            } : s.length ? function(t, e, n, i, r, s) {
                var o = [];
                for (let a = 0; a < r.length; a++) o[a] = A(t, e, n, i, r[a], s[a]);
                return o;
            }(e, n, i, r, s, o) : A(e, n, i, r, s, o);
        }(e, n, t.stops[i - 1][0], t.stops[i][0], t.stops[i - 1][1], t.stops[i][1]);
    }
    function w(t, e) {
        return function(t, e, n) {
            return void 0 !== t ? t : void 0 !== e ? e : void 0 !== n ? n : null;
        }(e, t.default);
    }
    function A(t, e, n, i, r, s) {
        var o, a = i - n, l = t - n;
        return r * (1 - (o = 1 === e ? l / a : (Math.pow(e, l) - 1) / (Math.pow(e, a) - 1))) + s * o;
    }
    function _(t) {
        return t && "object" == typeof t && (t.stops || t.property && "identity" === t.type);
    }
    function M(t) {
        return P(t, "exponential");
    }
    function S(t) {
        return P(t, "interval");
    }
    function k(t, e) {
        if (!t) return null;
        var n = !1;
        if (Array.isArray(t)) {
            var i, r = [];
            for (let s = 0; s < t.length; s++) (i = k(t[s], e)) ? (r.push(i), n = !0) : r.push(t[s]);
            return n ? r : t;
        }
        var s, o = {
            __fn_types_loaded: !0
        }, a = [];
        for (s in t) t.hasOwnProperty(s) && a.push(s);
        const l = function(t) {
            Object.defineProperty(o, t, {
                get: function() {
                    return this["__fn_" + t] || (this["__fn_" + t] = M(this["_" + t])), this["__fn_" + t].apply(this, e());
                },
                set: function(e) {
                    this["_" + t] = e;
                },
                configurable: !0,
                enumerable: !0
            });
        };
        for (let e = 0, i = a.length; e < i; e++) _(t[s = a[e]]) ? (n = !0, o["_" + s] = t[s], 
        l(s)) : o[s] = t[s];
        return n ? o : t;
    }
    function P(t, e) {
        if (!_(t)) return function() {
            return t;
        };
        let n = !0, i = !0;
        const r = (t = JSON.parse(JSON.stringify(t))).stops;
        if (r) for (let t = 0; t < r.length; t++) if (_(r[t][1])) {
            const s = P(r[t][1], e);
            n = n && s.isZoomConstant, i = i && s.isFeatureConstant, r[t] = [ r[t][0], s ];
        }
        const s = function t(e, n) {
            var i, r, s;
            if (_(e)) {
                var o, a = e.stops && "object" == typeof e.stops[0][0], l = a || void 0 !== e.property, h = a || !l, c = e.type || n || "exponential";
                if ("exponential" === c) o = b; else if ("interval" === c) o = x; else if ("categorical" === c) o = v; else {
                    if ("identity" !== c) throw new Error('Unknown function type "' + c + '"');
                    o = w;
                }
                if (a) {
                    var u = {}, f = [];
                    for (let t = 0; t < e.stops.length; t++) {
                        var d = e.stops[t];
                        void 0 === u[d[0].zoom] && (u[d[0].zoom] = {
                            zoom: d[0].zoom,
                            type: e.type,
                            property: e.property,
                            default: e.default,
                            stops: []
                        }), u[d[0].zoom].stops.push([ d[0].value, d[1] ]);
                    }
                    for (let e in u) f.push([ u[e].zoom, t(u[e]) ]);
                    i = function(t, n) {
                        const i = b({
                            stops: f,
                            base: e.base
                        }, t)(t, n);
                        return "function" == typeof i ? i(t, n) : i;
                    }, r = !1, s = !1;
                } else h ? (i = function(t) {
                    const n = o(e, t);
                    return "function" == typeof n ? n(t) : n;
                }, r = !0, s = !1) : (i = function(t, n) {
                    const i = o(e, n ? n[e.property] : null);
                    return "function" == typeof i ? i(t, n) : i;
                }, r = !1, s = !0);
            } else i = function() {
                return e;
            }, r = !0, s = !0;
            return i.isZoomConstant = s, i.isFeatureConstant = r, i;
        }(t, e);
        return s.isZoomConstant = n && s.isZoomConstant, s.isFeatureConstant = i && s.isFeatureConstant, 
        s;
    }
    let T = 0;
    const O = "function" == typeof Object.assign;
    function F(t, ...e) {
        if (O) return Object.assign(t, ...e), t;
        for (let n = 0; n < e.length; n++) {
            const i = e[n];
            for (const e in i) t[e] = i[e];
        }
        return t;
    }
    function I(t) {
        return !H(t) && ("string" == typeof t || null !== t.constructor && t.constructor === String);
    }
    function C(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function E(t) {
        return !H(t) && ("function" == typeof t || null !== t.constructor && t.constructor === Function);
    }
    function H(t) {
        return null == t;
    }
    function D(t) {
        for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            if (n) for (let e = 0, i = n.length; e < i; e++) t.push(n[e]);
        }
        return t.length;
    }
    function L(t) {
        const e = {};
        for (const n in t) void 0 !== t[n] && null !== t[n] && (t[n].toJSON ? e[n] = t[n].toJSON() : e[n] = t[n]);
        return e;
    }
    function R(t) {
        return function t(e) {
            if (!Array.isArray(e)) return t([ e ]);
            const n = [];
            for (let t = 0; t < e.length; t++) {
                let i;
                i = !0 === e[t].filter ? function() {
                    return !0;
                } : l(e[t].filter), n.push(g({}, e[t], {
                    filter: i
                }));
            }
            return n;
        }(t = t.map(t => {
            const e = F({}, t);
            return e.filter && e.filter.value && (e.filter = e.filter.value), e;
        }));
    }
    function N(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var z = V;
    function V(t, e) {
        this.x = t, this.y = e;
    }
    function j(t, e, n) {
        n = n || {}, this.w = t || 64, this.h = e || 64, this.autoResize = !!n.autoResize, 
        this.shelves = [], this.freebins = [], this.stats = {}, this.bins = {}, this.maxId = 0;
    }
    function U(t, e, n) {
        this.x = 0, this.y = t, this.w = this.free = e, this.h = n;
    }
    function G(t, e, n, i, r, s, o) {
        this.id = t, this.x = e, this.y = n, this.w = i, this.h = r, this.maxw = s || i, 
        this.maxh = o || r, this.refcount = 0;
    }
    V.prototype = {
        clone: function() {
            return new V(this.x, this.y);
        },
        add: function(t) {
            return this.clone().s(t);
        },
        sub: function(t) {
            return this.clone().o(t);
        },
        multByPoint: function(t) {
            return this.clone().u(t);
        },
        divByPoint: function(t) {
            return this.clone().m(t);
        },
        mult: function(t) {
            return this.clone().A(t);
        },
        div: function(t) {
            return this.clone()._(t);
        },
        rotate: function(t) {
            return this.clone().M(t);
        },
        rotateAround: function(t, e) {
            return this.clone().S(t, e);
        },
        matMult: function(t) {
            return this.clone().k(t);
        },
        unit: function() {
            return this.clone().P();
        },
        perp: function() {
            return this.clone().T();
        },
        round: function() {
            return this.clone().O();
        },
        mag: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        equals: function(t) {
            return this.x === t.x && this.y === t.y;
        },
        dist: function(t) {
            return Math.sqrt(this.distSqr(t));
        },
        distSqr: function(t) {
            var e = t.x - this.x, n = t.y - this.y;
            return e * e + n * n;
        },
        angle: function() {
            return Math.atan2(this.y, this.x);
        },
        angleTo: function(t) {
            return Math.atan2(this.y - t.y, this.x - t.x);
        },
        angleWith: function(t) {
            return this.angleWithSep(t.x, t.y);
        },
        angleWithSep: function(t, e) {
            return Math.atan2(this.x * e - this.y * t, this.x * t + this.y * e);
        },
        k: function(t) {
            var e = t[0] * this.x + t[1] * this.y, n = t[2] * this.x + t[3] * this.y;
            return this.x = e, this.y = n, this;
        },
        s: function(t) {
            return this.x += t.x, this.y += t.y, this;
        },
        o: function(t) {
            return this.x -= t.x, this.y -= t.y, this;
        },
        A: function(t) {
            return this.x *= t, this.y *= t, this;
        },
        _: function(t) {
            return this.x /= t, this.y /= t, this;
        },
        u: function(t) {
            return this.x *= t.x, this.y *= t.y, this;
        },
        m: function(t) {
            return this.x /= t.x, this.y /= t.y, this;
        },
        P: function() {
            return this._(this.mag()), this;
        },
        T: function() {
            var t = this.y;
            return this.y = this.x, this.x = -t, this;
        },
        M: function(t) {
            var e = Math.cos(t), n = Math.sin(t), i = e * this.x - n * this.y, r = n * this.x + e * this.y;
            return this.x = i, this.y = r, this;
        },
        S: function(t, e) {
            var n = Math.cos(t), i = Math.sin(t), r = e.x + n * (this.x - e.x) - i * (this.y - e.y), s = e.y + i * (this.x - e.x) + n * (this.y - e.y);
            return this.x = r, this.y = s, this;
        },
        O: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
    }, V.convert = function(t) {
        return t instanceof V ? t : Array.isArray(t) ? new V(t[0], t[1]) : t;
    }, j.prototype.pack = function(t, e) {
        t = [].concat(t), e = e || {};
        for (var n, i, r, s, o = [], a = 0; a < t.length; a++) if (n = t[a].w || t[a].width, 
        i = t[a].h || t[a].height, r = t[a].id, n && i) {
            if (!(s = this.packOne(n, i, r))) continue;
            e.inPlace && (t[a].x = s.x, t[a].y = s.y, t[a].id = s.id), o.push(s);
        }
        return this.shrink(), o;
    }, j.prototype.packOne = function(t, e, n) {
        var i, r, s, o, a, l, h, c, u = {
            freebin: -1,
            shelf: -1,
            waste: 1 / 0
        }, f = 0;
        if ("string" == typeof n || "number" == typeof n) {
            if (i = this.getBin(n)) return this.ref(i), i;
            "number" == typeof n && (this.maxId = Math.max(n, this.maxId));
        } else n = ++this.maxId;
        for (o = 0; o < this.freebins.length; o++) {
            if (e === (i = this.freebins[o]).maxh && t === i.maxw) return this.allocFreebin(o, t, e, n);
            e > i.maxh || t > i.maxw || e <= i.maxh && t <= i.maxw && (s = i.maxw * i.maxh - t * e) < u.waste && (u.waste = s, 
            u.freebin = o);
        }
        for (o = 0; o < this.shelves.length; o++) if (f += (r = this.shelves[o]).h, !(t > r.free)) {
            if (e === r.h) return this.allocShelf(o, t, e, n);
            e > r.h || e < r.h && (s = (r.h - e) * t) < u.waste && (u.freebin = -1, u.waste = s, 
            u.shelf = o);
        }
        return -1 !== u.freebin ? this.allocFreebin(u.freebin, t, e, n) : -1 !== u.shelf ? this.allocShelf(u.shelf, t, e, n) : e <= this.h - f && t <= this.w ? (r = new U(f, this.w, e), 
        this.allocShelf(this.shelves.push(r) - 1, t, e, n)) : this.autoResize ? (a = l = this.h, 
        ((h = c = this.w) <= a || t > h) && (c = 2 * Math.max(t, h)), (a < h || e > a) && (l = 2 * Math.max(e, a)), 
        this.resize(c, l), this.packOne(t, e, n)) : null;
    }, j.prototype.allocFreebin = function(t, e, n, i) {
        var r = this.freebins.splice(t, 1)[0];
        return r.id = i, r.w = e, r.h = n, r.refcount = 0, this.bins[i] = r, this.ref(r), 
        r;
    }, j.prototype.allocShelf = function(t, e, n, i) {
        var r = this.shelves[t].alloc(e, n, i);
        return this.bins[i] = r, this.ref(r), r;
    }, j.prototype.shrink = function() {
        if (this.shelves.length > 0) {
            for (var t = 0, e = 0, n = 0; n < this.shelves.length; n++) {
                var i = this.shelves[n];
                e += i.h, t = Math.max(i.w - i.free, t);
            }
            this.resize(t, e);
        }
    }, j.prototype.getBin = function(t) {
        return this.bins[t];
    }, j.prototype.ref = function(t) {
        if (1 == ++t.refcount) {
            var e = t.h;
            this.stats[e] = 1 + (0 | this.stats[e]);
        }
        return t.refcount;
    }, j.prototype.unref = function(t) {
        return 0 === t.refcount ? 0 : (0 == --t.refcount && (this.stats[t.h]--, delete this.bins[t.id], 
        this.freebins.push(t)), t.refcount);
    }, j.prototype.clear = function() {
        this.shelves = [], this.freebins = [], this.stats = {}, this.bins = {}, this.maxId = 0;
    }, j.prototype.resize = function(t, e) {
        this.w = t, this.h = e;
        for (var n = 0; n < this.shelves.length; n++) this.shelves[n].resize(t);
        return !0;
    }, U.prototype.alloc = function(t, e, n) {
        if (t > this.free || e > this.h) return null;
        var i = this.x;
        return this.x += t, this.free -= t, new G(n, i, this.y, t, e, t, this.h);
    }, U.prototype.resize = function(t) {
        return this.free += t - this.w, this.w = t, !0;
    };
    var W = {
        exports: {}
    };
    !function(t, e) {
        t.exports = function() {
            function t(t, e, n) {
                var i = t[e];
                t[e] = t[n], t[n] = i;
            }
            function e(t, e) {
                return t < e ? -1 : t > e ? 1 : 0;
            }
            return function(n, i, r, s, o) {
                !function e(n, i, r, s, o) {
                    for (;s > r; ) {
                        if (s - r > 600) {
                            var a = s - r + 1, l = i - r + 1, h = Math.log(a), c = .5 * Math.exp(2 * h / 3), u = .5 * Math.sqrt(h * c * (a - c) / a) * (l - a / 2 < 0 ? -1 : 1), f = Math.max(r, Math.floor(i - l * c / a + u)), d = Math.min(s, Math.floor(i + (a - l) * c / a + u));
                            e(n, i, f, d, o);
                        }
                        var p = n[i], y = r, m = s;
                        for (t(n, r, i), o(n[s], p) > 0 && t(n, r, s); y < m; ) {
                            for (t(n, y, m), y++, m--; o(n[y], p) < 0; ) y++;
                            for (;o(n[m], p) > 0; ) m--;
                        }
                        0 === o(n[r], p) ? t(n, r, m) : (m++, t(n, m, s)), m <= i && (r = m + 1), i <= m && (s = m - 1);
                    }
                }(n, i, r || 0, s || n.length - 1, o || e);
            };
        }();
    }(W);
    var B = W.exports, X = {
        exports: {}
    };
    function q(t, e) {
        if (!(this instanceof q)) return new q(t, e);
        if (this.data = t || [], this.length = this.data.length, this.compare = e || J, 
        this.length > 0) for (var n = (this.length >> 1) - 1; n >= 0; n--) this.F(n);
    }
    function J(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
    }
    X.exports = q, X.exports.default = q, q.prototype = {
        push: function(t) {
            this.data.push(t), this.length++, this.I(this.length - 1);
        },
        pop: function() {
            if (0 !== this.length) {
                var t = this.data[0];
                return this.length--, this.length > 0 && (this.data[0] = this.data[this.length], 
                this.F(0)), this.data.pop(), t;
            }
        },
        peek: function() {
            return this.data[0];
        },
        I: function(t) {
            for (var e = this.data, n = this.compare, i = e[t]; t > 0; ) {
                var r = t - 1 >> 1, s = e[r];
                if (n(i, s) >= 0) break;
                e[t] = s, t = r;
            }
            e[t] = i;
        },
        F: function(t) {
            for (var e = this.data, n = this.compare, i = this.length >> 1, r = e[t]; t < i; ) {
                var s = 1 + (t << 1), o = s + 1, a = e[s];
                if (o < this.length && n(e[o], a) < 0 && (s = o, a = e[o]), n(a, r) >= 0) break;
                e[t] = a, t = s;
            }
            e[t] = r;
        }
    };
    var Y = X.exports, $ = {
        exports: {}
    }, Z = {
        aliceblue: [ 240, 248, 255 ],
        antiquewhite: [ 250, 235, 215 ],
        aqua: [ 0, 255, 255 ],
        aquamarine: [ 127, 255, 212 ],
        azure: [ 240, 255, 255 ],
        beige: [ 245, 245, 220 ],
        bisque: [ 255, 228, 196 ],
        black: [ 0, 0, 0 ],
        blanchedalmond: [ 255, 235, 205 ],
        blue: [ 0, 0, 255 ],
        blueviolet: [ 138, 43, 226 ],
        brown: [ 165, 42, 42 ],
        burlywood: [ 222, 184, 135 ],
        cadetblue: [ 95, 158, 160 ],
        chartreuse: [ 127, 255, 0 ],
        chocolate: [ 210, 105, 30 ],
        coral: [ 255, 127, 80 ],
        cornflowerblue: [ 100, 149, 237 ],
        cornsilk: [ 255, 248, 220 ],
        crimson: [ 220, 20, 60 ],
        cyan: [ 0, 255, 255 ],
        darkblue: [ 0, 0, 139 ],
        darkcyan: [ 0, 139, 139 ],
        darkgoldenrod: [ 184, 134, 11 ],
        darkgray: [ 169, 169, 169 ],
        darkgreen: [ 0, 100, 0 ],
        darkgrey: [ 169, 169, 169 ],
        darkkhaki: [ 189, 183, 107 ],
        darkmagenta: [ 139, 0, 139 ],
        darkolivegreen: [ 85, 107, 47 ],
        darkorange: [ 255, 140, 0 ],
        darkorchid: [ 153, 50, 204 ],
        darkred: [ 139, 0, 0 ],
        darksalmon: [ 233, 150, 122 ],
        darkseagreen: [ 143, 188, 143 ],
        darkslateblue: [ 72, 61, 139 ],
        darkslategray: [ 47, 79, 79 ],
        darkslategrey: [ 47, 79, 79 ],
        darkturquoise: [ 0, 206, 209 ],
        darkviolet: [ 148, 0, 211 ],
        deeppink: [ 255, 20, 147 ],
        deepskyblue: [ 0, 191, 255 ],
        dimgray: [ 105, 105, 105 ],
        dimgrey: [ 105, 105, 105 ],
        dodgerblue: [ 30, 144, 255 ],
        firebrick: [ 178, 34, 34 ],
        floralwhite: [ 255, 250, 240 ],
        forestgreen: [ 34, 139, 34 ],
        fuchsia: [ 255, 0, 255 ],
        gainsboro: [ 220, 220, 220 ],
        ghostwhite: [ 248, 248, 255 ],
        gold: [ 255, 215, 0 ],
        goldenrod: [ 218, 165, 32 ],
        gray: [ 128, 128, 128 ],
        green: [ 0, 128, 0 ],
        greenyellow: [ 173, 255, 47 ],
        grey: [ 128, 128, 128 ],
        honeydew: [ 240, 255, 240 ],
        hotpink: [ 255, 105, 180 ],
        indianred: [ 205, 92, 92 ],
        indigo: [ 75, 0, 130 ],
        ivory: [ 255, 255, 240 ],
        khaki: [ 240, 230, 140 ],
        lavender: [ 230, 230, 250 ],
        lavenderblush: [ 255, 240, 245 ],
        lawngreen: [ 124, 252, 0 ],
        lemonchiffon: [ 255, 250, 205 ],
        lightblue: [ 173, 216, 230 ],
        lightcoral: [ 240, 128, 128 ],
        lightcyan: [ 224, 255, 255 ],
        lightgoldenrodyellow: [ 250, 250, 210 ],
        lightgray: [ 211, 211, 211 ],
        lightgreen: [ 144, 238, 144 ],
        lightgrey: [ 211, 211, 211 ],
        lightpink: [ 255, 182, 193 ],
        lightsalmon: [ 255, 160, 122 ],
        lightseagreen: [ 32, 178, 170 ],
        lightskyblue: [ 135, 206, 250 ],
        lightslategray: [ 119, 136, 153 ],
        lightslategrey: [ 119, 136, 153 ],
        lightsteelblue: [ 176, 196, 222 ],
        lightyellow: [ 255, 255, 224 ],
        lime: [ 0, 255, 0 ],
        limegreen: [ 50, 205, 50 ],
        linen: [ 250, 240, 230 ],
        magenta: [ 255, 0, 255 ],
        maroon: [ 128, 0, 0 ],
        mediumaquamarine: [ 102, 205, 170 ],
        mediumblue: [ 0, 0, 205 ],
        mediumorchid: [ 186, 85, 211 ],
        mediumpurple: [ 147, 112, 219 ],
        mediumseagreen: [ 60, 179, 113 ],
        mediumslateblue: [ 123, 104, 238 ],
        mediumspringgreen: [ 0, 250, 154 ],
        mediumturquoise: [ 72, 209, 204 ],
        mediumvioletred: [ 199, 21, 133 ],
        midnightblue: [ 25, 25, 112 ],
        mintcream: [ 245, 255, 250 ],
        mistyrose: [ 255, 228, 225 ],
        moccasin: [ 255, 228, 181 ],
        navajowhite: [ 255, 222, 173 ],
        navy: [ 0, 0, 128 ],
        oldlace: [ 253, 245, 230 ],
        olive: [ 128, 128, 0 ],
        olivedrab: [ 107, 142, 35 ],
        orange: [ 255, 165, 0 ],
        orangered: [ 255, 69, 0 ],
        orchid: [ 218, 112, 214 ],
        palegoldenrod: [ 238, 232, 170 ],
        palegreen: [ 152, 251, 152 ],
        paleturquoise: [ 175, 238, 238 ],
        palevioletred: [ 219, 112, 147 ],
        papayawhip: [ 255, 239, 213 ],
        peachpuff: [ 255, 218, 185 ],
        peru: [ 205, 133, 63 ],
        pink: [ 255, 192, 203 ],
        plum: [ 221, 160, 221 ],
        powderblue: [ 176, 224, 230 ],
        purple: [ 128, 0, 128 ],
        rebeccapurple: [ 102, 51, 153 ],
        red: [ 255, 0, 0 ],
        rosybrown: [ 188, 143, 143 ],
        royalblue: [ 65, 105, 225 ],
        saddlebrown: [ 139, 69, 19 ],
        salmon: [ 250, 128, 114 ],
        sandybrown: [ 244, 164, 96 ],
        seagreen: [ 46, 139, 87 ],
        seashell: [ 255, 245, 238 ],
        sienna: [ 160, 82, 45 ],
        silver: [ 192, 192, 192 ],
        skyblue: [ 135, 206, 235 ],
        slateblue: [ 106, 90, 205 ],
        slategray: [ 112, 128, 144 ],
        slategrey: [ 112, 128, 144 ],
        snow: [ 255, 250, 250 ],
        springgreen: [ 0, 255, 127 ],
        steelblue: [ 70, 130, 180 ],
        tan: [ 210, 180, 140 ],
        teal: [ 0, 128, 128 ],
        thistle: [ 216, 191, 216 ],
        tomato: [ 255, 99, 71 ],
        turquoise: [ 64, 224, 208 ],
        violet: [ 238, 130, 238 ],
        wheat: [ 245, 222, 179 ],
        white: [ 255, 255, 255 ],
        whitesmoke: [ 245, 245, 245 ],
        yellow: [ 255, 255, 0 ],
        yellowgreen: [ 154, 205, 50 ]
    }, K = {
        exports: {}
    }, Q = function(t) {
        return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name));
    }, tt = Array.prototype.concat, et = Array.prototype.slice, nt = K.exports = function(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++) {
            var r = t[n];
            Q(r) ? e = tt.call(e, et.call(r)) : e.push(r);
        }
        return e;
    };
    nt.wrap = function(t) {
        return function() {
            return t(nt(arguments));
        };
    };
    var it = Z, rt = K.exports, st = Object.hasOwnProperty, ot = {};
    for (var at in it) st.call(it, at) && (ot[it[at]] = at);
    var lt = $.exports = {
        to: {},
        get: {}
    };
    function ht(t, e, n) {
        return Math.min(Math.max(e, t), n);
    }
    function ct(t) {
        var e = Math.round(t).toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
    }
    lt.get = function(t) {
        var e, n;
        switch (t.substring(0, 3).toLowerCase()) {
          case "hsl":
            e = lt.get.hsl(t), n = "hsl";
            break;

          case "hwb":
            e = lt.get.hwb(t), n = "hwb";
            break;

          default:
            e = lt.get.rgb(t), n = "rgb";
        }
        return e ? {
            model: n,
            value: e
        } : null;
    }, lt.get.rgb = function(t) {
        if (!t) return null;
        var e, n, i, r = [ 0, 0, 0, 1 ];
        if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
            for (i = e[2], e = e[1], n = 0; n < 3; n++) {
                var s = 2 * n;
                r[n] = parseInt(e.slice(s, s + 2), 16);
            }
            i && (r[3] = parseInt(i, 16) / 255);
        } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
            for (i = (e = e[1])[3], n = 0; n < 3; n++) r[n] = parseInt(e[n] + e[n], 16);
            i && (r[3] = parseInt(i + i, 16) / 255);
        } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
            for (n = 0; n < 3; n++) r[n] = parseInt(e[n + 1], 0);
            e[4] && (e[5] ? r[3] = .01 * parseFloat(e[4]) : r[3] = parseFloat(e[4]));
        } else {
            if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (e = t.match(/^(\w+)$/)) ? "transparent" === e[1] ? [ 0, 0, 0, 0 ] : st.call(it, e[1]) ? ((r = it[e[1]])[3] = 1, 
            r) : null : null;
            for (n = 0; n < 3; n++) r[n] = Math.round(2.55 * parseFloat(e[n + 1]));
            e[4] && (e[5] ? r[3] = .01 * parseFloat(e[4]) : r[3] = parseFloat(e[4]));
        }
        for (n = 0; n < 3; n++) r[n] = ht(r[n], 0, 255);
        return r[3] = ht(r[3], 0, 1), r;
    }, lt.get.hsl = function(t) {
        if (!t) return null;
        var e = t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
        if (e) {
            var n = parseFloat(e[4]);
            return [ (parseFloat(e[1]) % 360 + 360) % 360, ht(parseFloat(e[2]), 0, 100), ht(parseFloat(e[3]), 0, 100), ht(isNaN(n) ? 1 : n, 0, 1) ];
        }
        return null;
    }, lt.get.hwb = function(t) {
        if (!t) return null;
        var e = t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
        if (e) {
            var n = parseFloat(e[4]);
            return [ (parseFloat(e[1]) % 360 + 360) % 360, ht(parseFloat(e[2]), 0, 100), ht(parseFloat(e[3]), 0, 100), ht(isNaN(n) ? 1 : n, 0, 1) ];
        }
        return null;
    }, lt.to.hex = function() {
        var t = rt(arguments);
        return "#" + ct(t[0]) + ct(t[1]) + ct(t[2]) + (t[3] < 1 ? ct(Math.round(255 * t[3])) : "");
    }, lt.to.rgb = function() {
        var t = rt(arguments);
        return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")";
    }, lt.to.rgb.percent = function() {
        var t = rt(arguments), e = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100), i = Math.round(t[2] / 255 * 100);
        return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + n + "%, " + i + "%)" : "rgba(" + e + "%, " + n + "%, " + i + "%, " + t[3] + ")";
    }, lt.to.hsl = function() {
        var t = rt(arguments);
        return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")";
    }, lt.to.hwb = function() {
        var t = rt(arguments), e = "";
        return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")";
    }, lt.to.keyword = function(t) {
        return ot[t.slice(0, 3)];
    };
    var ut = {
        exports: {}
    }, ft = Z, dt = {};
    for (var pt in ft) ft.hasOwnProperty(pt) && (dt[ft[pt]] = pt);
    var yt = ut.exports = {
        rgb: {
            channels: 3,
            labels: "rgb"
        },
        hsl: {
            channels: 3,
            labels: "hsl"
        },
        hsv: {
            channels: 3,
            labels: "hsv"
        },
        hwb: {
            channels: 3,
            labels: "hwb"
        },
        cmyk: {
            channels: 4,
            labels: "cmyk"
        },
        xyz: {
            channels: 3,
            labels: "xyz"
        },
        lab: {
            channels: 3,
            labels: "lab"
        },
        lch: {
            channels: 3,
            labels: "lch"
        },
        hex: {
            channels: 1,
            labels: [ "hex" ]
        },
        keyword: {
            channels: 1,
            labels: [ "keyword" ]
        },
        ansi16: {
            channels: 1,
            labels: [ "ansi16" ]
        },
        ansi256: {
            channels: 1,
            labels: [ "ansi256" ]
        },
        hcg: {
            channels: 3,
            labels: [ "h", "c", "g" ]
        },
        apple: {
            channels: 3,
            labels: [ "r16", "g16", "b16" ]
        },
        gray: {
            channels: 1,
            labels: [ "gray" ]
        }
    };
    for (var mt in yt) if (yt.hasOwnProperty(mt)) {
        if (!("channels" in yt[mt])) throw new Error("missing channels property: " + mt);
        if (!("labels" in yt[mt])) throw new Error("missing channel labels property: " + mt);
        if (yt[mt].labels.length !== yt[mt].channels) throw new Error("channel and label counts mismatch: " + mt);
        var gt = yt[mt].channels, vt = yt[mt].labels;
        delete yt[mt].channels, delete yt[mt].labels, Object.defineProperty(yt[mt], "channels", {
            value: gt
        }), Object.defineProperty(yt[mt], "labels", {
            value: vt
        });
    }
    function xt(t, e) {
        return Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2);
    }
    yt.rgb.hsl = function(t) {
        var e, n, i = t[0] / 255, r = t[1] / 255, s = t[2] / 255, o = Math.min(i, r, s), a = Math.max(i, r, s), l = a - o;
        return a === o ? e = 0 : i === a ? e = (r - s) / l : r === a ? e = 2 + (s - i) / l : s === a && (e = 4 + (i - r) / l), 
        (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + a) / 2, [ e, 100 * (a === o ? 0 : n <= .5 ? l / (a + o) : l / (2 - a - o)), 100 * n ];
    }, yt.rgb.hsv = function(t) {
        var e, n, i, r, s, o = t[0] / 255, a = t[1] / 255, l = t[2] / 255, h = Math.max(o, a, l), c = h - Math.min(o, a, l), u = function(t) {
            return (h - t) / 6 / c + .5;
        };
        return 0 === c ? r = s = 0 : (s = c / h, e = u(o), n = u(a), i = u(l), o === h ? r = i - n : a === h ? r = 1 / 3 + e - i : l === h && (r = 2 / 3 + n - e), 
        r < 0 ? r += 1 : r > 1 && (r -= 1)), [ 360 * r, 100 * s, 100 * h ];
    }, yt.rgb.hwb = function(t) {
        var e = t[0], n = t[1], i = t[2];
        return [ yt.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i))) ];
    }, yt.rgb.cmyk = function(t) {
        var e, n = t[0] / 255, i = t[1] / 255, r = t[2] / 255;
        return [ 100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e ];
    }, yt.rgb.keyword = function(t) {
        var e = dt[t];
        if (e) return e;
        var n, i = 1 / 0;
        for (var r in ft) if (ft.hasOwnProperty(r)) {
            var s = xt(t, ft[r]);
            s < i && (i = s, n = r);
        }
        return n;
    }, yt.keyword.rgb = function(t) {
        return ft[t];
    }, yt.rgb.xyz = function(t) {
        var e = t[0] / 255, n = t[1] / 255, i = t[2] / 255;
        return [ 100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i) ];
    }, yt.rgb.lab = function(t) {
        var e = yt.rgb.xyz(t), n = e[0], i = e[1], r = e[2];
        return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, 
        [ 116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)) ];
    }, yt.hsl.rgb = function(t) {
        var e, n, i, r, s, o = t[0] / 360, a = t[1] / 100, l = t[2] / 100;
        if (0 === a) return [ s = 255 * l, s, s ];
        e = 2 * l - (n = l < .5 ? l * (1 + a) : l + a - l * a), r = [ 0, 0, 0 ];
        for (var h = 0; h < 3; h++) (i = o + 1 / 3 * -(h - 1)) < 0 && i++, i > 1 && i--, 
        s = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, 
        r[h] = 255 * s;
        return r;
    }, yt.hsl.hsv = function(t) {
        var e = t[0], n = t[1] / 100, i = t[2] / 100, r = n, s = Math.max(i, .01);
        return n *= (i *= 2) <= 1 ? i : 2 - i, r *= s <= 1 ? s : 2 - s, [ e, 100 * (0 === i ? 2 * r / (s + r) : 2 * n / (i + n)), 100 * ((i + n) / 2) ];
    }, yt.hsv.rgb = function(t) {
        var e = t[0] / 60, n = t[1] / 100, i = t[2] / 100, r = Math.floor(e) % 6, s = e - Math.floor(e), o = 255 * i * (1 - n), a = 255 * i * (1 - n * s), l = 255 * i * (1 - n * (1 - s));
        switch (i *= 255, r) {
          case 0:
            return [ i, l, o ];

          case 1:
            return [ a, i, o ];

          case 2:
            return [ o, i, l ];

          case 3:
            return [ o, a, i ];

          case 4:
            return [ l, o, i ];

          case 5:
            return [ i, o, a ];
        }
    }, yt.hsv.hsl = function(t) {
        var e, n, i, r = t[0], s = t[1] / 100, o = t[2] / 100, a = Math.max(o, .01);
        return i = (2 - s) * o, n = s * a, [ r, 100 * (n = (n /= (e = (2 - s) * a) <= 1 ? e : 2 - e) || 0), 100 * (i /= 2) ];
    }, yt.hwb.rgb = function(t) {
        var e, n, i, r, s, o, a, l = t[0] / 360, h = t[1] / 100, c = t[2] / 100, u = h + c;
        switch (u > 1 && (h /= u, c /= u), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), 
        r = h + i * ((n = 1 - c) - h), e) {
          default:
          case 6:
          case 0:
            s = n, o = r, a = h;
            break;

          case 1:
            s = r, o = n, a = h;
            break;

          case 2:
            s = h, o = n, a = r;
            break;

          case 3:
            s = h, o = r, a = n;
            break;

          case 4:
            s = r, o = h, a = n;
            break;

          case 5:
            s = n, o = h, a = r;
        }
        return [ 255 * s, 255 * o, 255 * a ];
    }, yt.cmyk.rgb = function(t) {
        var e = t[0] / 100, n = t[1] / 100, i = t[2] / 100, r = t[3] / 100;
        return [ 255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r)) ];
    }, yt.xyz.rgb = function(t) {
        var e, n, i, r = t[0] / 100, s = t[1] / 100, o = t[2] / 100;
        return n = -.9689 * r + 1.8758 * s + .0415 * o, i = .0557 * r + -.204 * s + 1.057 * o, 
        e = (e = 3.2406 * r + -1.5372 * s + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, 
        n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, 
        [ 255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1)) ];
    }, yt.xyz.lab = function(t) {
        var e = t[0], n = t[1], i = t[2];
        return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, 
        [ 116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116)) ];
    }, yt.lab.xyz = function(t) {
        var e, n, i, r = t[0];
        e = t[1] / 500 + (n = (r + 16) / 116), i = n - t[2] / 200;
        var s = Math.pow(n, 3), o = Math.pow(e, 3), a = Math.pow(i, 3);
        return n = s > .008856 ? s : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, 
        i = a > .008856 ? a : (i - 16 / 116) / 7.787, [ e *= 95.047, n *= 100, i *= 108.883 ];
    }, yt.lab.lch = function(t) {
        var e, n = t[0], i = t[1], r = t[2];
        return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [ n, Math.sqrt(i * i + r * r), e ];
    }, yt.lch.lab = function(t) {
        var e, n = t[0], i = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [ n, i * Math.cos(e), i * Math.sin(e) ];
    }, yt.rgb.ansi16 = function(t) {
        var e = t[0], n = t[1], i = t[2], r = 1 in arguments ? arguments[1] : yt.rgb.hsv(t)[2];
        if (0 === (r = Math.round(r / 50))) return 30;
        var s = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
        return 2 === r && (s += 60), s;
    }, yt.hsv.ansi16 = function(t) {
        return yt.rgb.ansi16(yt.hsv.rgb(t), t[2]);
    }, yt.rgb.ansi256 = function(t) {
        var e = t[0], n = t[1], i = t[2];
        return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5);
    }, yt.ansi16.rgb = function(t) {
        var e = t % 10;
        if (0 === e || 7 === e) return t > 50 && (e += 3.5), [ e = e / 10.5 * 255, e, e ];
        var n = .5 * (1 + ~~(t > 50));
        return [ (1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255 ];
    }, yt.ansi256.rgb = function(t) {
        if (t >= 232) {
            var e = 10 * (t - 232) + 8;
            return [ e, e, e ];
        }
        var n;
        return t -= 16, [ Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255 ];
    }, yt.rgb.hex = function(t) {
        var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
        return "000000".substring(e.length) + e;
    }, yt.hex.rgb = function(t) {
        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e) return [ 0, 0, 0 ];
        var n = e[0];
        3 === e[0].length && (n = n.split("").map((function(t) {
            return t + t;
        })).join(""));
        var i = parseInt(n, 16);
        return [ i >> 16 & 255, i >> 8 & 255, 255 & i ];
    }, yt.rgb.hcg = function(t) {
        var e, n = t[0] / 255, i = t[1] / 255, r = t[2] / 255, s = Math.max(Math.max(n, i), r), o = Math.min(Math.min(n, i), r), a = s - o;
        return e = a <= 0 ? 0 : s === n ? (i - r) / a % 6 : s === i ? 2 + (r - n) / a : 4 + (n - i) / a + 4, 
        e /= 6, [ 360 * (e %= 1), 100 * a, 100 * (a < 1 ? o / (1 - a) : 0) ];
    }, yt.hsl.hcg = function(t) {
        var e = t[1] / 100, n = t[2] / 100, i = 1, r = 0;
        return (i = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (r = (n - .5 * i) / (1 - i)), 
        [ t[0], 100 * i, 100 * r ];
    }, yt.hsv.hcg = function(t) {
        var e = t[1] / 100, n = t[2] / 100, i = e * n, r = 0;
        return i < 1 && (r = (n - i) / (1 - i)), [ t[0], 100 * i, 100 * r ];
    }, yt.hcg.rgb = function(t) {
        var e = t[0] / 360, n = t[1] / 100, i = t[2] / 100;
        if (0 === n) return [ 255 * i, 255 * i, 255 * i ];
        var r, s = [ 0, 0, 0 ], o = e % 1 * 6, a = o % 1, l = 1 - a;
        switch (Math.floor(o)) {
          case 0:
            s[0] = 1, s[1] = a, s[2] = 0;
            break;

          case 1:
            s[0] = l, s[1] = 1, s[2] = 0;
            break;

          case 2:
            s[0] = 0, s[1] = 1, s[2] = a;
            break;

          case 3:
            s[0] = 0, s[1] = l, s[2] = 1;
            break;

          case 4:
            s[0] = a, s[1] = 0, s[2] = 1;
            break;

          default:
            s[0] = 1, s[1] = 0, s[2] = l;
        }
        return r = (1 - n) * i, [ 255 * (n * s[0] + r), 255 * (n * s[1] + r), 255 * (n * s[2] + r) ];
    }, yt.hcg.hsv = function(t) {
        var e = t[1] / 100, n = e + t[2] / 100 * (1 - e), i = 0;
        return n > 0 && (i = e / n), [ t[0], 100 * i, 100 * n ];
    }, yt.hcg.hsl = function(t) {
        var e = t[1] / 100, n = t[2] / 100 * (1 - e) + .5 * e, i = 0;
        return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), 
        [ t[0], 100 * i, 100 * n ];
    }, yt.hcg.hwb = function(t) {
        var e = t[1] / 100, n = e + t[2] / 100 * (1 - e);
        return [ t[0], 100 * (n - e), 100 * (1 - n) ];
    }, yt.hwb.hcg = function(t) {
        var e = t[1] / 100, n = 1 - t[2] / 100, i = n - e, r = 0;
        return i < 1 && (r = (n - i) / (1 - i)), [ t[0], 100 * i, 100 * r ];
    }, yt.apple.rgb = function(t) {
        return [ t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255 ];
    }, yt.rgb.apple = function(t) {
        return [ t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535 ];
    }, yt.gray.rgb = function(t) {
        return [ t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255 ];
    }, yt.gray.hsl = yt.gray.hsv = function(t) {
        return [ 0, 0, t[0] ];
    }, yt.gray.hwb = function(t) {
        return [ 0, 100, t[0] ];
    }, yt.gray.cmyk = function(t) {
        return [ 0, 0, 0, t[0] ];
    }, yt.gray.lab = function(t) {
        return [ t[0], 0, 0 ];
    }, yt.gray.hex = function(t) {
        var e = 255 & Math.round(t[0] / 100 * 255), n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
        return "000000".substring(n.length) + n;
    }, yt.rgb.gray = function(t) {
        return [ (t[0] + t[1] + t[2]) / 3 / 255 * 100 ];
    };
    var bt = ut.exports;
    function wt(t) {
        var e = function() {
            for (var t = {}, e = Object.keys(bt), n = e.length, i = 0; i < n; i++) t[e[i]] = {
                distance: -1,
                parent: null
            };
            return t;
        }(), n = [ t ];
        for (e[t].distance = 0; n.length; ) for (var i = n.pop(), r = Object.keys(bt[i]), s = r.length, o = 0; o < s; o++) {
            var a = r[o], l = e[a];
            -1 === l.distance && (l.distance = e[i].distance + 1, l.parent = i, n.unshift(a));
        }
        return e;
    }
    function At(t, e) {
        return function(n) {
            return e(t(n));
        };
    }
    function _t(t, e) {
        for (var n = [ e[t].parent, t ], i = bt[e[t].parent][t], r = e[t].parent; e[r].parent; ) n.unshift(e[r].parent), 
        i = At(bt[e[r].parent][r], i), r = e[r].parent;
        return i.conversion = n, i;
    }
    var Mt = ut.exports, St = function(t) {
        for (var e = wt(t), n = {}, i = Object.keys(e), r = i.length, s = 0; s < r; s++) {
            var o = i[s];
            null !== e[o].parent && (n[o] = _t(o, e));
        }
        return n;
    }, kt = {};
    Object.keys(Mt).forEach((function(t) {
        kt[t] = {}, Object.defineProperty(kt[t], "channels", {
            value: Mt[t].channels
        }), Object.defineProperty(kt[t], "labels", {
            value: Mt[t].labels
        });
        var e = St(t);
        Object.keys(e).forEach((function(n) {
            var i = e[n];
            kt[t][n] = function(t) {
                var e = function(e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n) for (var i = n.length, r = 0; r < i; r++) n[r] = Math.round(n[r]);
                    return n;
                };
                return "conversion" in t && (e.conversion = t.conversion), e;
            }(i), kt[t][n].raw = function(t) {
                var e = function(e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), 
                    t(e));
                };
                return "conversion" in t && (e.conversion = t.conversion), e;
            }(i);
        }));
    }));
    var Pt = kt, Tt = $.exports, Ot = Pt, Ft = [].slice, It = [ "keyword", "gray", "hex" ], Ct = {};
    Object.keys(Ot).forEach((function(t) {
        Ct[Ft.call(Ot[t].labels).sort().join("")] = t;
    }));
    var Et = {};
    function Ht(t, e) {
        if (!(this instanceof Ht)) return new Ht(t, e);
        if (e && e in It && (e = null), e && !(e in Ot)) throw new Error("Unknown model: " + e);
        var n, i;
        if (null == t) this.model = "rgb", this.color = [ 0, 0, 0 ], this.valpha = 1; else if (t instanceof Ht) this.model = t.model, 
        this.color = t.color.slice(), this.valpha = t.valpha; else if ("string" == typeof t) {
            var r = Tt.get(t);
            if (null === r) throw new Error("Unable to parse color from string: " + t);
            this.model = r.model, i = Ot[this.model].channels, this.color = r.value.slice(0, i), 
            this.valpha = "number" == typeof r.value[i] ? r.value[i] : 1;
        } else if (t.length) {
            this.model = e || "rgb", i = Ot[this.model].channels;
            var s = Ft.call(t, 0, i);
            this.color = Nt(s, i), this.valpha = "number" == typeof t[i] ? t[i] : 1;
        } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [ t >> 16 & 255, t >> 8 & 255, 255 & t ], 
        this.valpha = 1; else {
            this.valpha = 1;
            var o = Object.keys(t);
            "alpha" in t && (o.splice(o.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
            var a = o.sort().join("");
            if (!(a in Ct)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
            this.model = Ct[a];
            var l = Ot[this.model].labels, h = [];
            for (n = 0; n < l.length; n++) h.push(t[l[n]]);
            this.color = Nt(h);
        }
        if (Et[this.model]) for (i = Ot[this.model].channels, n = 0; n < i; n++) {
            var c = Et[this.model][n];
            c && (this.color[n] = c(this.color[n]));
        }
        this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
    }
    function Dt(t, e, n) {
        return (t = Array.isArray(t) ? t : [ t ]).forEach((function(t) {
            (Et[t] || (Et[t] = []))[e] = n;
        })), t = t[0], function(i) {
            var r;
            return arguments.length ? (n && (i = n(i)), (r = this[t]()).color[e] = i, r) : (r = this[t]().color[e], 
            n && (r = n(r)), r);
        };
    }
    function Lt(t) {
        return function(e) {
            return Math.max(0, Math.min(t, e));
        };
    }
    function Rt(t) {
        return Array.isArray(t) ? t : [ t ];
    }
    function Nt(t, e) {
        for (var n = 0; n < e; n++) "number" != typeof t[n] && (t[n] = 0);
        return t;
    }
    Ht.prototype = {
        toString: function() {
            return this.string();
        },
        toJSON: function() {
            return this[this.model]();
        },
        string: function(t) {
            var e = this.model in Tt.to ? this : this.rgb(), n = 1 === (e = e.round("number" == typeof t ? t : 1)).valpha ? e.color : e.color.concat(this.valpha);
            return Tt.to[e.model](n);
        },
        percentString: function(t) {
            var e = this.rgb().round("number" == typeof t ? t : 1), n = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
            return Tt.to.rgb.percent(n);
        },
        array: function() {
            return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha);
        },
        object: function() {
            for (var t = {}, e = Ot[this.model].channels, n = Ot[this.model].labels, i = 0; i < e; i++) t[n[i]] = this.color[i];
            return 1 !== this.valpha && (t.alpha = this.valpha), t;
        },
        unitArray: function() {
            var t = this.rgb().color;
            return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), 
            t;
        },
        unitObject: function() {
            var t = this.rgb().object();
            return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), 
            t;
        },
        round: function(t) {
            return t = Math.max(t || 0, 0), new Ht(this.color.map(function(t) {
                return function(e) {
                    return function(t, e) {
                        return Number(t.toFixed(e));
                    }(e, t);
                };
            }(t)).concat(this.valpha), this.model);
        },
        alpha: function(t) {
            return arguments.length ? new Ht(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha;
        },
        red: Dt("rgb", 0, Lt(255)),
        green: Dt("rgb", 1, Lt(255)),
        blue: Dt("rgb", 2, Lt(255)),
        hue: Dt([ "hsl", "hsv", "hsl", "hwb", "hcg" ], 0, (function(t) {
            return (t % 360 + 360) % 360;
        })),
        saturationl: Dt("hsl", 1, Lt(100)),
        lightness: Dt("hsl", 2, Lt(100)),
        saturationv: Dt("hsv", 1, Lt(100)),
        value: Dt("hsv", 2, Lt(100)),
        chroma: Dt("hcg", 1, Lt(100)),
        gray: Dt("hcg", 2, Lt(100)),
        white: Dt("hwb", 1, Lt(100)),
        wblack: Dt("hwb", 2, Lt(100)),
        cyan: Dt("cmyk", 0, Lt(100)),
        magenta: Dt("cmyk", 1, Lt(100)),
        yellow: Dt("cmyk", 2, Lt(100)),
        black: Dt("cmyk", 3, Lt(100)),
        x: Dt("xyz", 0, Lt(100)),
        y: Dt("xyz", 1, Lt(100)),
        z: Dt("xyz", 2, Lt(100)),
        l: Dt("lab", 0, Lt(100)),
        a: Dt("lab", 1),
        b: Dt("lab", 2),
        keyword: function(t) {
            return arguments.length ? new Ht(t) : Ot[this.model].keyword(this.color);
        },
        hex: function(t) {
            return arguments.length ? new Ht(t) : Tt.to.hex(this.rgb().round().color);
        },
        rgbNumber: function() {
            var t = this.rgb().color;
            return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2];
        },
        luminosity: function() {
            for (var t = this.rgb().color, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function(t) {
            var e = this.luminosity(), n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        isDark: function() {
            var t = this.rgb().color;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        negate: function() {
            for (var t = this.rgb(), e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
            return t;
        },
        lighten: function(t) {
            var e = this.hsl();
            return e.color[2] += e.color[2] * t, e;
        },
        darken: function(t) {
            var e = this.hsl();
            return e.color[2] -= e.color[2] * t, e;
        },
        saturate: function(t) {
            var e = this.hsl();
            return e.color[1] += e.color[1] * t, e;
        },
        desaturate: function(t) {
            var e = this.hsl();
            return e.color[1] -= e.color[1] * t, e;
        },
        whiten: function(t) {
            var e = this.hwb();
            return e.color[1] += e.color[1] * t, e;
        },
        blacken: function(t) {
            var e = this.hwb();
            return e.color[2] += e.color[2] * t, e;
        },
        grayscale: function() {
            var t = this.rgb().color, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return Ht.rgb(e, e, e);
        },
        fade: function(t) {
            return this.alpha(this.valpha - this.valpha * t);
        },
        opaquer: function(t) {
            return this.alpha(this.valpha + this.valpha * t);
        },
        rotate: function(t) {
            var e = this.hsl(), n = e.color[0];
            return n = (n = (n + t) % 360) < 0 ? 360 + n : n, e.color[0] = n, e;
        },
        mix: function(t, e) {
            if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof t);
            var n = t.rgb(), i = this.rgb(), r = void 0 === e ? .5 : e, s = 2 * r - 1, o = n.alpha() - i.alpha(), a = ((s * o == -1 ? s : (s + o) / (1 + s * o)) + 1) / 2, l = 1 - a;
            return Ht.rgb(a * n.red() + l * i.red(), a * n.green() + l * i.green(), a * n.blue() + l * i.blue(), n.alpha() * r + i.alpha() * (1 - r));
        }
    }, Object.keys(Ot).forEach((function(t) {
        if (-1 === It.indexOf(t)) {
            var e = Ot[t].channels;
            Ht.prototype[t] = function() {
                if (this.model === t) return new Ht(this);
                if (arguments.length) return new Ht(arguments, t);
                var n = "number" == typeof arguments[e] ? e : this.valpha;
                return new Ht(Rt(Ot[this.model][t].raw(this.color)).concat(n), t);
            }, Ht[t] = function(n) {
                return "number" == typeof n && (n = Nt(Ft.call(arguments), e)), new Ht(n, t);
            };
        }
    }));
    var zt = Ht, Vt = {
        exports: {}
    };
    function jt(t, e, n) {
        n = n || 2;
        var i, r, s, o, a, l, h, c = e && e.length, u = c ? e[0] * n : t.length, f = Ut(t, 0, u, n, !0), d = [];
        if (!f || f.next === f.prev) return d;
        if (c && (f = function(t, e, n, i) {
            var r, s, o, a, l, h = [];
            for (r = 0, s = e.length; r < s; r++) o = e[r] * i, a = r < s - 1 ? e[r + 1] * i : t.length, 
            (l = Ut(t, o, a, i, !1)) === l.next && (l.steiner = !0), h.push(Qt(l));
            for (h.sort(Yt), r = 0; r < h.length; r++) n = Gt(n = $t(h[r], n), n.next);
            return n;
        }(t, e, f, n)), t.length > 80 * n) {
            i = s = t[0], r = o = t[1];
            for (var p = n; p < u; p += n) (a = t[p]) < i && (i = a), (l = t[p + 1]) < r && (r = l), 
            a > s && (s = a), l > o && (o = l);
            h = 0 !== (h = Math.max(s - i, o - r)) ? 1 / h : 0;
        }
        return Wt(f, d, n, i, r, h), d;
    }
    function Ut(t, e, n, i, r) {
        var s, o;
        if (r === fe(t, e, n, i) > 0) for (s = e; s < n; s += i) o = he(s, t[s], t[s + 1], o); else for (s = n - i; s >= e; s -= i) o = he(s, t[s], t[s + 1], o);
        return o && ie(o, o.next) && (ce(o), o = o.next), o;
    }
    function Gt(t, e) {
        if (!t) return t;
        e || (e = t);
        var n, i = t;
        do {
            if (n = !1, i.steiner || !ie(i, i.next) && 0 !== ne(i.prev, i, i.next)) i = i.next; else {
                if (ce(i), (i = e = i.prev) === i.next) break;
                n = !0;
            }
        } while (n || i !== e);
        return e;
    }
    function Wt(t, e, n, i, r, s, o) {
        if (t) {
            !o && s && function(t, e, n, i) {
                var r = t;
                do {
                    null === r.z && (r.z = Kt(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, 
                    r = r.next;
                } while (r !== t);
                r.prevZ.nextZ = null, r.prevZ = null, function(t) {
                    var e, n, i, r, s, o, a, l, h = 1;
                    do {
                        for (n = t, t = null, s = null, o = 0; n; ) {
                            for (o++, i = n, a = 0, e = 0; e < h && (a++, i = i.nextZ); e++) ;
                            for (l = h; a > 0 || l > 0 && i; ) 0 !== a && (0 === l || !i || n.z <= i.z) ? (r = n, 
                            n = n.nextZ, a--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, 
                            s = r;
                            n = i;
                        }
                        s.nextZ = null, h *= 2;
                    } while (o > 1);
                }(r);
            }(t, i, r, s);
            for (var a, l, h = t; t.prev !== t.next; ) if (a = t.prev, l = t.next, s ? Xt(t, i, r, s) : Bt(t)) e.push(a.i / n), 
            e.push(t.i / n), e.push(l.i / n), ce(t), t = l.next, h = l.next; else if ((t = l) === h) {
                o ? 1 === o ? Wt(t = qt(Gt(t), e, n), e, n, i, r, s, 2) : 2 === o && Jt(t, e, n, i, r, s) : Wt(Gt(t), e, n, i, r, s, 1);
                break;
            }
        }
    }
    function Bt(t) {
        var e = t.prev, n = t, i = t.next;
        if (ne(e, n, i) >= 0) return !1;
        for (var r = t.next.next; r !== t.prev; ) {
            if (te(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && ne(r.prev, r, r.next) >= 0) return !1;
            r = r.next;
        }
        return !0;
    }
    function Xt(t, e, n, i) {
        var r = t.prev, s = t, o = t.next;
        if (ne(r, s, o) >= 0) return !1;
        for (var a = r.x < s.x ? r.x < o.x ? r.x : o.x : s.x < o.x ? s.x : o.x, l = r.y < s.y ? r.y < o.y ? r.y : o.y : s.y < o.y ? s.y : o.y, h = r.x > s.x ? r.x > o.x ? r.x : o.x : s.x > o.x ? s.x : o.x, c = r.y > s.y ? r.y > o.y ? r.y : o.y : s.y > o.y ? s.y : o.y, u = Kt(a, l, e, n, i), f = Kt(h, c, e, n, i), d = t.prevZ, p = t.nextZ; d && d.z >= u && p && p.z <= f; ) {
            if (d !== t.prev && d !== t.next && te(r.x, r.y, s.x, s.y, o.x, o.y, d.x, d.y) && ne(d.prev, d, d.next) >= 0) return !1;
            if (d = d.prevZ, p !== t.prev && p !== t.next && te(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && ne(p.prev, p, p.next) >= 0) return !1;
            p = p.nextZ;
        }
        for (;d && d.z >= u; ) {
            if (d !== t.prev && d !== t.next && te(r.x, r.y, s.x, s.y, o.x, o.y, d.x, d.y) && ne(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ;
        }
        for (;p && p.z <= f; ) {
            if (p !== t.prev && p !== t.next && te(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && ne(p.prev, p, p.next) >= 0) return !1;
            p = p.nextZ;
        }
        return !0;
    }
    function qt(t, e, n) {
        var i = t;
        do {
            var r = i.prev, s = i.next.next;
            !ie(r, s) && re(r, i, i.next, s) && ae(r, s) && ae(s, r) && (e.push(r.i / n), e.push(i.i / n), 
            e.push(s.i / n), ce(i), ce(i.next), i = t = s), i = i.next;
        } while (i !== t);
        return Gt(i);
    }
    function Jt(t, e, n, i, r, s) {
        var o = t;
        do {
            for (var a = o.next.next; a !== o.prev; ) {
                if (o.i !== a.i && ee(o, a)) {
                    var l = le(o, a);
                    return o = Gt(o, o.next), l = Gt(l, l.next), Wt(o, e, n, i, r, s), void Wt(l, e, n, i, r, s);
                }
                a = a.next;
            }
            o = o.next;
        } while (o !== t);
    }
    function Yt(t, e) {
        return t.x - e.x;
    }
    function $t(t, e) {
        var n = function(t, e) {
            var n, i = e, r = t.x, s = t.y, o = -1 / 0;
            do {
                if (s <= i.y && s >= i.next.y && i.next.y !== i.y) {
                    var a = i.x + (s - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                    if (a <= r && a > o) {
                        if (o = a, a === r) {
                            if (s === i.y) return i;
                            if (s === i.next.y) return i.next;
                        }
                        n = i.x < i.next.x ? i : i.next;
                    }
                }
                i = i.next;
            } while (i !== e);
            if (!n) return null;
            if (r === o) return n;
            var l, h = n, c = n.x, u = n.y, f = 1 / 0;
            i = n;
            do {
                r >= i.x && i.x >= c && r !== i.x && te(s < u ? r : o, s, c, u, s < u ? o : r, s, i.x, i.y) && (l = Math.abs(s - i.y) / (r - i.x), 
                ae(i, t) && (l < f || l === f && (i.x > n.x || i.x === n.x && Zt(n, i))) && (n = i, 
                f = l)), i = i.next;
            } while (i !== h);
            return n;
        }(t, e);
        if (!n) return e;
        var i = le(n, t), r = Gt(n, n.next);
        return Gt(i, i.next), e === n ? r : e;
    }
    function Zt(t, e) {
        return ne(t.prev, t, e.prev) < 0 && ne(e.next, t, t.next) < 0;
    }
    function Kt(t, e, n, i, r) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function Qt(t) {
        var e = t, n = t;
        do {
            (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
        } while (e !== t);
        return n;
    }
    function te(t, e, n, i, r, s, o, a) {
        return (r - o) * (e - a) - (t - o) * (s - a) >= 0 && (t - o) * (i - a) - (n - o) * (e - a) >= 0 && (n - o) * (s - a) - (r - o) * (i - a) >= 0;
    }
    function ee(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
            var n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && re(n, n.next, t, e)) return !0;
                n = n.next;
            } while (n !== t);
            return !1;
        }(t, e) && (ae(t, e) && ae(e, t) && function(t, e) {
            var n = t, i = !1, r = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
            do {
                n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), 
                n = n.next;
            } while (n !== t);
            return i;
        }(t, e) && (ne(t.prev, t, e.prev) || ne(t, e.prev, e)) || ie(t, e) && ne(t.prev, t, t.next) > 0 && ne(e.prev, e, e.next) > 0);
    }
    function ne(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
    }
    function ie(t, e) {
        return t.x === e.x && t.y === e.y;
    }
    function re(t, e, n, i) {
        var r = oe(ne(t, e, n)), s = oe(ne(t, e, i)), o = oe(ne(n, i, t)), a = oe(ne(n, i, e));
        return r !== s && o !== a || (!(0 !== r || !se(t, n, e)) || (!(0 !== s || !se(t, i, e)) || (!(0 !== o || !se(n, t, i)) || !(0 !== a || !se(n, e, i)))));
    }
    function se(t, e, n) {
        return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y);
    }
    function oe(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function ae(t, e) {
        return ne(t.prev, t, t.next) < 0 ? ne(t, e, t.next) >= 0 && ne(t, t.prev, e) >= 0 : ne(t, e, t.prev) < 0 || ne(t, t.next, e) < 0;
    }
    function le(t, e) {
        var n = new ue(t.i, t.x, t.y), i = new ue(e.i, e.x, e.y), r = t.next, s = e.prev;
        return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, 
        i.prev = s, i;
    }
    function he(t, e, n, i) {
        var r = new ue(t, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, 
        r.next = r), r;
    }
    function ce(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), 
        t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function ue(t, e, n) {
        this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, 
        this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    function fe(t, e, n, i) {
        for (var r = 0, s = e, o = n - i; s < n; s += i) r += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), 
        o = s;
        return r;
    }
    Vt.exports = jt, Vt.exports.default = jt, jt.deviation = function(t, e, n, i) {
        var r = e && e.length, s = r ? e[0] * n : t.length, o = Math.abs(fe(t, 0, s, n));
        if (r) for (var a = 0, l = e.length; a < l; a++) {
            var h = e[a] * n, c = a < l - 1 ? e[a + 1] * n : t.length;
            o -= Math.abs(fe(t, h, c, n));
        }
        var u = 0;
        for (a = 0; a < i.length; a += 3) {
            var f = i[a] * n, d = i[a + 1] * n, p = i[a + 2] * n;
            u += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]));
        }
        return 0 === o && 0 === u ? 0 : Math.abs((u - o) / o);
    }, jt.flatten = function(t) {
        for (var e = t[0][0].length, n = {
            vertices: [],
            holes: [],
            dimensions: e
        }, i = 0, r = 0; r < t.length; r++) {
            for (var s = 0; s < t[r].length; s++) for (var o = 0; o < e; o++) n.vertices.push(t[r][s][o]);
            r > 0 && (i += t[r - 1].length, n.holes.push(i));
        }
        return n;
    };
    var de = Vt.exports;
    /*!
     * @maptalks/vector-packer v0.63.4
     * LICENSE : UNLICENSED
     * (c) 2016-2022 maptalks.com
     */    const pe = {
        Point: 1,
        LineString: 2,
        Polygon: 3,
        MultiPoint: 4,
        MultiLineString: 5,
        MultiPolygon: 6
    };
    function ye(t, e = {}) {
        var n = [];
        if ("FeatureCollection" === t.type) for (var i = 0; i < t.features.length; i++) me(n, t.features[i], e, i); else me(n, "Feature" === t.type ? t : {
            geometry: t
        }, e);
        return n;
    }
    function me(t, e, n, i) {
        if (e.geometry && e.geometry.geometry) {
            var r = e.geometry.coordinates, s = e.geometry.type, o = [], a = e.id;
            if (n.promoteId ? a = e.properties[n.promoteId] : n.generateId && (a = i || 0), 
            "Point" === s) ge(r, o); else if ("MultiPoint" === s) for (var l = 0; l < r.length; l++) ge(r[l], o); else if ("LineString" === s) xe([ r ], o); else if ("MultiLineString" === s) {
                if (n.lineMetrics) {
                    for (l = 0; l < r.length; l++) ve(r[l], o = []), t.push(be(a, "LineString", o, e.properties));
                    return;
                }
                xe(r, o);
            } else if ("Polygon" === s) xe(r, o); else {
                if ("MultiPolygon" !== s) {
                    if ("GeometryCollection" === s) {
                        for (l = 0; l < e.geometry.geometries.length; l++) me(t, {
                            id: a,
                            geometry: e.geometry.geometries[l],
                            properties: e.properties
                        }, n, i);
                        return;
                    }
                    return void console.warn(`Input data type(${s}) is not a valid GeoJSON geometry type.`);
                }
                for (l = 0; l < r.length; l++) {
                    var h = [];
                    xe(r[l], h), o.push(h);
                }
            }
            t.push(be(a, s, o, e.properties));
        }
    }
    function ge(t, e) {
        e.push([ new z(t[0], t[1]) ]);
    }
    function ve(t, e) {
        for (var n = 0; n < t.length; n++) e.push(new z(t[n][0], t[n][1]));
    }
    function xe(t, e, n, i) {
        for (var r = 0; r < t.length; r++) {
            var s = [];
            ve(t[r], s), e.push(s);
        }
    }
    function be(t, e, n, i) {
        return {
            id: void 0 === t ? null : t,
            type: pe[e],
            geometry: n,
            properties: i
        };
    }
    /*!
     * Codes from mapbox-gl-js
     * github.com/mapbox/mapbox-gl-js
     * MIT License
     */    function we(t, {width: e, height: n}, i, r) {
        if (r) {
            if (r.length !== e * n * i) throw new RangeError("mismatched image size");
        } else r = new Uint8Array(e * n * i);
        return t.width = e, t.height = n, t.data = r, t;
    }
    function Ae(t, {width: e, height: n}, i) {
        if (e === t.width && n === t.height) return;
        const r = we({}, {
            width: e,
            height: n
        }, i);
        _e(t, r, {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        }, {
            width: Math.min(t.width, e),
            height: Math.min(t.height, n)
        }, i), t.width = e, t.height = n, t.data = r.data;
    }
    function _e(t, e, n, i, r, s) {
        if (0 === r.width || 0 === r.height) return e;
        if (r.width > t.width || r.height > t.height || n.x > t.width - r.width || n.y > t.height - r.height) throw new RangeError("out of range source coordinates for image copy");
        if (r.width > e.width || r.height > e.height || i.x > e.width - r.width || i.y > e.height - r.height) throw new RangeError("out of range destination coordinates for image copy");
        const o = t.data, a = e.data;
        if (o === a) return e;
        for (let l = 0; l < r.height; l++) {
            const h = ((n.y + l) * t.width + n.x) * s, c = ((i.y + l) * e.width + i.x) * s;
            for (let t = 0; t < r.width * s; t++) a[c + t] = o[h + t];
        }
        return e;
    }
    class Me {
        constructor(t, e) {
            we(this, t, 1, e);
        }
        resize(t) {
            Ae(this, t, 1);
        }
        clone() {
            return new Me({
                width: this.width,
                height: this.height
            }, new Uint8Array(this.data));
        }
        static copy(t, e, n, i, r) {
            _e(t, e, n, i, r, 1);
        }
    }
    class Se {
        constructor(t, e) {
            we(this, t, 4, e);
        }
        resize(t) {
            Ae(this, t, 4);
        }
        clone() {
            return new Se({
                width: this.width,
                height: this.height
            }, new Uint8Array(this.data));
        }
        static copy(t, e, n, i, r) {
            _e(t, e, n, i, r, 4);
        }
    }
    /*!
     * Codes from mapbox-gl-js
     * github.com/mapbox/mapbox-gl-js
     * MIT License
     */    class ke {
        constructor(t, {pixelRatio: e}) {
            this.paddedRect = t, this.pixelRatio = e || 1;
        }
        get tl() {
            return [ this.paddedRect.x + 1, this.paddedRect.y + 1 ];
        }
        get br() {
            return [ this.paddedRect.x + this.paddedRect.w - 1, this.paddedRect.y + this.paddedRect.h - 1 ];
        }
        get displaySize() {
            return [ (this.paddedRect.w - 2) / this.pixelRatio, (this.paddedRect.h - 2) / this.pixelRatio ];
        }
    }
    class Pe {
        constructor(t) {
            this.glyphMap = t, this.build();
        }
        build() {
            const t = this.glyphMap, e = {}, n = new j(0, 0, {
                autoResize: !0
            }), i = [];
            for (const n in t) {
                const r = t[n], s = {
                    x: 0,
                    y: 0,
                    w: r.data.width + 2,
                    h: r.data.height + 2
                };
                i.push(s), e[n] = new ke(s, r);
            }
            if (n.pack(i, {
                inPlace: !0
            }), !Te(n.w) || !Te(n.h)) {
                const t = Oe(n.w), e = Oe(n.h);
                n.resize(t, e);
            }
            const r = new Se({
                width: n.w,
                height: n.h
            });
            for (const n in t) {
                const i = t[n], s = e[n].paddedRect;
                Se.copy(i.data, r, {
                    x: 0,
                    y: 0
                }, {
                    x: s.x + 1,
                    y: s.y + 1
                }, i.data);
            }
            this.image = r, this.positions = e;
        }
    }
    function Te(t) {
        return 0 == (t & t - 1) && 0 !== t;
    }
    function Oe(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    }
    /*!
     * Codes from mapbox-gl-js
     * github.com/mapbox/mapbox-gl-js
     * MIT License
     * TODO 升级为potpack
     */    class Fe {
        constructor(t) {
            this.glyphMap = t, this.build();
        }
        build() {
            const t = this.glyphMap, e = {}, n = new j(0, 0, {
                autoResize: !0
            }), i = [];
            for (const n in t) {
                const r = t[n], s = e[n] = {};
                for (const t in r) {
                    const e = r[+t];
                    if (!e || 0 === e.bitmap.width || 0 === e.bitmap.height) continue;
                    const n = {
                        x: 0,
                        y: 0,
                        w: e.bitmap.width + 2,
                        h: e.bitmap.height + 2
                    };
                    i.push(n), s[t] = {
                        rect: n,
                        metrics: e.metrics
                    };
                }
            }
            n.pack(i, {
                inPlace: !0
            });
            const r = new Me({
                width: n.w,
                height: n.h
            });
            for (const n in t) {
                const i = t[n];
                for (const t in i) {
                    const s = i[+t];
                    if (!s || 0 === s.bitmap.width || 0 === s.bitmap.height) continue;
                    const o = e[n][t].rect;
                    Me.copy(s.bitmap, r, {
                        x: 0,
                        y: 0
                    }, {
                        x: o.x + 1,
                        y: o.y + 1
                    }, s.bitmap);
                }
            }
            this.image = r, this.positions = e;
        }
    }
    function Ie(t) {
        return t < 65536 ? Uint16Array : Uint32Array;
    }
    function Ce(t) {
        return (t = Math.abs(t)) < 128 ? Int8Array : t < 32768 ? Int16Array : Float32Array;
    }
    function Ee(t) {
        return t < 256 ? Uint8Array : t < 65536 ? Uint16Array : Float32Array;
    }
    function He(t) {
        const e = t.type, n = [];
        if (1 === e || 4 === e) for (let e = 0; e < t.geometry.length; e++) ge(t.geometry[e], n); else if (2 === e) xe(t.geometry, n); else if (3 === e) xe(t.geometry, n); else if (5 === e) xe(t.geometry, n); else if (6 === e) for (let e = 0; e < t.geometry.length; e++) {
            const i = [];
            xe(t.geometry[e], i), n.push(i);
        }
        return t.geometry = n, t;
    }
    function De(t) {
        for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const e in n) t[e] = n[e];
        }
        return t;
    }
    function Le(t) {
        return null == t;
    }
    function Re(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function Ne(t) {
        return "object" == typeof t && !!t;
    }
    function ze(t) {
        return !Le(t) && ("string" == typeof t || null !== t.constructor && t.constructor === String);
    }
    const Ve = Object.prototype.hasOwnProperty;
    function je(t, e) {
        return Ve.call(t, e);
    }
    function Ue(t) {
        return _(t) && t.property;
    }
    function Ge(t) {
        let e = 0;
        for (let n, i, r = 0, s = t.length, o = s - 1; r < s; o = r++) n = t[r], i = t[o], 
        e += void 0 !== n.x ? (i.x - n.x) * (n.y + i.y) : (i[0] - n[0]) * (n[1] + i[1]);
        return e;
    }
    function We(t, e, n) {
        let i = n;
        return e && t && (i = t[e]), void 0 === i && (i = n), 10 * (i || 0);
    }
    function Be(t, e) {
        return e < 1 / 0 && (t.x < 0 || t.x > e || t.y < 0 || t.y > e);
    }
    function Xe(t) {
        return null == t;
    }
    function qe(t, e, n) {
        if (t === n || t === e) return t;
        const i = n - e;
        return ((t - e) % i + i) % i + e;
    }
    class Je {
        constructor(t, e, n, i) {
            this.feature = t, this.symbol = e, this.fnTypes = n, this.options = i;
        }
        getPolygonResource() {
            let t = this.symbol.polygonPatternFile;
            const {polygonPatternFileFn: e} = this.fnTypes;
            return this.C(t, e);
        }
        getLineResource() {
            let t = this.symbol.linePatternFile;
            const {linePatternFileFn: e} = this.fnTypes;
            return this.C(t, e);
        }
        C(t, e) {
            return e && (t = e(this.options.zoom, this.feature.properties)), t;
        }
    }
    const Ye = {
        lineWidth: 1,
        lineStrokeWidth: 1,
        lineDx: 1,
        lineDy: 1,
        lineOpacity: 1,
        linePatternAnimSpeed: 1,
        markerWidth: 1,
        markerHeight: 1,
        markerDx: 1,
        markerDy: 1,
        markerSpacing: 1,
        markerOpacity: 1,
        markerRotation: 1,
        textWrapWidth: 1,
        textSpacing: 1,
        textSize: 1,
        textHaloRadius: 1,
        textHaloOpacity: 1,
        textDx: 1,
        textDy: 1,
        textOpacity: 1,
        textRotation: 1,
        polygonOpacity: 1
    };
    class $e {
        static isAtlasLoaded(t, e = {}) {
            const {iconAtlas: n} = e;
            return !!(!t || n && n.positions[t]);
        }
        static genFnTypes(t) {
            const e = {};
            for (const n in t) if (Ue(t[n])) {
                const i = (n + "_Fn_0").trim(), r = (n + "Fn").trim();
                Ye[n] ? (e[i] = M(t[n]), e[r] = (t, n) => {
                    const r = e[i](t, n);
                    return Ue(r) ? M(r)(t, n) : r;
                }) : (e[i] = S(t[n]), e[r] = (t, n) => {
                    const r = e[i](t, n);
                    return Ue(r) ? S(r)(t, n) : r;
                });
            }
            return e;
        }
        constructor(t, e, n) {
            this.options = n, this.features = this.H(t), this.symbolDef = e, this.symbol = k(e, () => [ n.zoom ]), 
            this.styledVectors = [], this.properties = {}, this.D = $e.genFnTypes(this.symbolDef), 
            Ue(this.symbolDef.visible) && (this.L = M(this.symbolDef.visible)), n.atlas && (this.iconAtlas = n.atlas.iconAtlas, 
            this.glyphAtlas = n.atlas.glyphAtlas);
        }
        H(t) {
            if (!t.length) return t;
            const e = "__fea_idx".trim();
            let n, i = 0, r = t[i];
            for (;!r.geometry; ) i++, r = t[i];
            if (Array.isArray(r.geometry) && r.properties) {
                let e = r.geometry[0];
                for (;Array.isArray(e); ) e = e[0];
                e instanceof z && (n = t);
            }
            if (!n) if (n = [], Array.isArray(r.geometry)) for (let e = 0; e < t.length; e++) {
                const i = De({}, t[e]);
                n.push(He(i));
            } else for (let i = 0; i < t.length; i++) {
                const r = t[i], s = ye(r);
                for (let t = 0; t < s.length; t++) {
                    const i = s[t];
                    i[e] = r[e], n.push(i);
                }
            }
            const s = this.options.order;
            if (s) {
                const t = [];
                for (let e = 0; e < s.length; e++) s[e] && t.push(l(s[e]));
                n = n.sort((e, n) => {
                    const i = t.length;
                    let r = i, s = i;
                    for (let o = 0; o < i && (t[o](e) && (r = o), t[o](n) && (s = o), !(r < i && s < i)); o++) ;
                    return r - s;
                });
            }
            return n;
        }
        load(t = 1) {
            const e = "__fea_idx".trim(), n = "_debug_info".trim(), i = this.D, r = this.styledVectors;
            this.count = 0;
            const s = this.features;
            if (!s || !s.length) return Promise.resolve(null);
            const o = {}, a = {}, l = {
                zoom: this.options.zoom
            }, h = k(this.symbolDef, () => [ l.zoom ]);
            let c = 0, u = s.length;
            const f = this.options.debugIndex;
            try {
                for (;c < u; c++) {
                    const t = s[c];
                    if (!t || !t.geometry) continue;
                    if (void 0 !== f && t[n].index !== f) continue;
                    t.properties || (t.properties = {}), t.properties.$layer = t.layer, t.properties.$type = t.type;
                    const u = this.createStyledVector(t, h, i, l, o, a);
                    u && u.feature.geometry && (u.featureIdx = void 0 === t[e] ? c : t[e], this.count++, 
                    r.push(u));
                }
            } catch (t) {
                return Promise.reject(t);
            }
            return this.options.atlas ? Promise.resolve(this.pack(t)) : this.loadAtlas(o, a).then(() => this.pack(t));
        }
        loadAtlas(t, e) {
            return new Promise((n, i) => {
                this.fetchAtlas(t, e, (t, e) => {
                    if (t) i(t); else {
                        if (e) {
                            const {icons: t, glyphs: n} = e;
                            if (t && Object.keys(t).length) {
                                for (const e in t) {
                                    const n = t[e], {width: i, height: r, data: s} = n.data;
                                    n.data = new Se({
                                        width: i,
                                        height: r
                                    }, s);
                                }
                                this.iconAtlas = new Pe(t);
                            }
                            if (n && Object.keys(n).length) {
                                for (const t in n) {
                                    const e = n[t];
                                    for (const t in e) {
                                        const n = e[t], {width: i, height: r, data: s} = n.bitmap;
                                        n.bitmap = new Me({
                                            width: i,
                                            height: r
                                        }, s);
                                    }
                                }
                                this.glyphAtlas = new Fe(n);
                            }
                        }
                        n({
                            glyphAtlas: this.glyphAtlas,
                            iconAtlas: this.iconAtlas
                        });
                    }
                });
            });
        }
        fetchAtlas(t, e, n) {
            Object.keys(t).length > 0 || Object.keys(e).length > 0 ? this.options.requestor(t, e, n) : n();
        }
        pack(t) {
            if (!this.count) return null;
            if (null == t) throw new Error("layout scale is undefined");
            const e = this.createDataPack(this.styledVectors, t);
            if (!e) return null;
            e.properties = this.properties, this.empty && (e.empty = !0);
            const n = e.buffers;
            delete e.buffers;
            const i = {
                data: e,
                buffers: n
            };
            if (this.iconAtlas) {
                const t = i.data.iconAtlas = Ze(this.iconAtlas);
                if (t.glyphMap) for (const e in t.glyphMap) n.push(t.glyphMap[e].data.data.buffer);
                n.push(i.data.iconAtlas.image.data.buffer);
            }
            return this.glyphAtlas && (i.data.glyphAtlas = Ze(this.glyphAtlas), n.push(i.data.glyphAtlas.image.data.buffer)), 
            i;
        }
        createStyledVector(t, e, n, i) {
            return new Je(t, e, n, i);
        }
        createDataPack(t, e) {
            if (!t || !t.length) return null;
            this.maxIndex = 0, this.maxPos = 0, this.maxAltitude = 0;
            const n = this.data = {};
            let i = this.elements = [];
            const r = this.getFormat(Array.isArray(t[0]) ? t[0][0].symbol : t[0].symbol);
            for (let t = 0; t < r.length; t++) n[r[t].name] = [];
            let s = [], o = 0;
            const a = [];
            let l = 0, h = !1;
            for (let i = 0, r = t.length; i < r; i++) {
                if (!t[i].feature.geometry) continue;
                const r = Array.isArray(t[i]) ? t[i][0].feature.id : t[i].feature.id;
                Re(r) && (Math.abs(r) > l && (l = Math.abs(r)), r < 0 && (h = !0));
                const c = this.data.aPosition.length;
                if (Array.isArray(t[i])) for (let n = 0; n < t[i].length; n++) this.R(t[i][n], e); else this.R(t[i], e);
                const u = (n.aPosition.length - c) / 3;
                for (let e = 0; e < u; e++) s.push(t[i].featureIdx), Re(r) && a.push(r);
                o = Math.max(o, t[i].featureIdx);
            }
            if (this.hasElements() && !i.length) return null;
            s = new (Ee(o))(s), r[0].type = this.options.positionType ? this.options.positionType : Ce(Math.max(this.maxPos, this.maxAltitude));
            const c = this.options.center;
            if (c && (c[0] || c[1])) {
                const t = n.aPosition;
                for (let e = 0; e < t.length; e += 3) t[e] -= c[0], t[e + 1] -= c[1];
            }
            const u = function(t, e) {
                const n = {};
                for (let i = 0; i < t.length; i++) {
                    const r = t[i], s = r.type, o = r.name;
                    n[o] = s === Array ? e[o] : new s(e[o]);
                }
                return n;
            }(r, n);
            u.aPickingId = s;
            const f = [];
            for (const t in u) f.push(u[t].buffer);
            i = new (Ie(this.maxIndex))(i), f.push(i.buffer);
            const d = {
                data: u,
                indices: this.hasElements() ? i : null,
                positionSize: 3,
                //!this.maxAltitude ? 2 : 3,
                buffers: f,
                symbolIndex: this.symbolDef.index || {
                    index: 0
                }
            };
            if (a.length) {
                const t = h ? Ce(l) : Ee(l);
                d.featureIds = new t(a), f.push(d.featureIds.buffer);
            } else d.featureIds = [];
            return d;
        }
        R(t, e) {
            this.L && this.L.isZoomConstant && !this.L(null, t.feature.properties) || this.placeVector(t, e, this.formatWidth);
        }
        addElements(...t) {
            this.maxIndex = Math.max(this.maxIndex, ...t), this.elements.push(...t);
        }
        hasElements() {
            return !0;
        }
        getAltitude(t) {
            const {altitudeProperty: e, defaultAltitude: n, altitudeScale: i} = this.options;
            let r = We(t, e, n);
            return i && (r *= i), this.maxAltitude = Math.max(this.maxAltitude, Math.abs(r)), 
            r;
        }
        getIconAtlasMaxValue() {
            const t = this.iconAtlas.positions;
            let e = 0;
            for (const n in t) if (je(t, n)) {
                const {tl: i, displaySize: r} = t[n], s = Math.max(i[0], i[1], r[0] - 1, r[1] - 1);
                s > e && (e = s);
            }
            return e;
        }
    }
    function Ze(t) {
        let e = t.positions, n = t.image && t.image.format || "alpha";
        if (t instanceof Pe) {
            e = {};
            for (const n in t.positions) {
                const i = t.positions[n];
                e[n] = {
                    paddedRect: i.paddedRect,
                    pixelRatio: i.pixelRatio,
                    tl: i.tl,
                    br: i.br,
                    displaySize: i.displaySize
                };
            }
            n = "rgba";
        }
        const i = t.image;
        return {
            image: {
                width: i.width,
                height: i.height,
                data: i.data,
                format: n
            },
            glyphMap: t.glyphMap,
            positions: e
        };
    }
    function Ke(t, e, n, i) {
        const r = "__fn_textSize".trim();
        let s = t.textSize;
        if (Le(e.textSize)) return [ 16, 16 ];
        t[r] && (s = t[r]);
        const o = [];
        var a;
        return o[0] = Le(a = s) || "function" != typeof a && (null === a.constructor || a.constructor !== Function) ? s : s(i, n), 
        o[1] = o[0], o;
    }
    function Qe(t) {
        const e = t.stops;
        let n = -1 / 0;
        for (let t = 0; t < e.length; t++) {
            let i = e[t][1];
            Ne(e[t][1]) && (i = Qe(e[t][1])), i > n && (n = i);
        }
        return n;
    }
    const tn = /\{([\w_]+)\}/g;
    function en(t, e) {
        return ze(t) ? t.replace(tn, (function(t, n) {
            if (!e) return "";
            const i = e[n];
            return Le(i) ? "" : Array.isArray(i) ? i.join() : i;
        })) : t;
    }
    const nn = t => t >= 11904 && t <= 12031, rn = t => t >= 12032 && t <= 12255, sn = t => t >= 12272 && t <= 12287, on = t => t >= 12288 && t <= 12351, an = t => t >= 12352 && t <= 12447, ln = t => t >= 12448 && t <= 12543, hn = t => t >= 12544 && t <= 12591, cn = t => t >= 12704 && t <= 12735, un = t => t >= 12736 && t <= 12783, fn = t => t >= 12784 && t <= 12799, dn = t => t >= 12800 && t <= 13055, pn = t => t >= 13056 && t <= 13311, yn = t => t >= 13312 && t <= 19903, mn = t => t >= 19968 && t <= 40959, gn = t => t >= 40960 && t <= 42127, vn = t => t >= 42128 && t <= 42191, xn = t => t >= 63744 && t <= 64255, bn = t => t >= 64336 && t <= 65023, wn = t => t >= 65040 && t <= 65055, An = t => t >= 65072 && t <= 65103, _n = t => t >= 65104 && t <= 65135, Mn = t => t >= 65136 && t <= 65279, Sn = t => t >= 65280 && t <= 65519;
    function kn(t) {
        return !((t => t >= 1536 && t <= 1791)(t) || (t => t >= 1872 && t <= 1919)(t) || (t => t >= 2208 && t <= 2303)(t) || bn(t) || Mn(t));
    }
    function Pn(t) {
        return !!(746 === t || 747 === t || !(t < 4352) && (cn(t) || hn(t) || An(t) && !(t >= 65097 && t <= 65103) || xn(t) || pn(t) || nn(t) || un(t) || !(!on(t) || t >= 12296 && t <= 12305 || t >= 12308 && t <= 12319 || 12336 === t) || yn(t) || mn(t) || dn(t) || (t => t >= 12592 && t <= 12687)(t) || (t => t >= 43360 && t <= 43391)(t) || (t => t >= 55216 && t <= 55295)(t) || (t => t >= 4352 && t <= 4607)(t) || (t => t >= 44032 && t <= 55215)(t) || an(t) || sn(t) || (t => t >= 12688 && t <= 12703)(t) || rn(t) || fn(t) || ln(t) && 12540 !== t || !(!Sn(t) || 65288 === t || 65289 === t || 65293 === t || t >= 65306 && t <= 65310 || 65339 === t || 65341 === t || 65343 === t || t >= 65371 && t <= 65503 || 65507 === t || t >= 65512 && t <= 65519) || !(!_n(t) || t >= 65112 && t <= 65118 || t >= 65123 && t <= 65126) || (t => t >= 5120 && t <= 5759)(t) || (t => t >= 6320 && t <= 6399)(t) || wn(t) || (t => t >= 19904 && t <= 19967)(t) || gn(t) || vn(t)));
    }
    function Tn(t) {
        return !(Pn(t) || function(t) {
            return !!((t => t >= 128 && t <= 255)(t) && (167 === t || 169 === t || 174 === t || 177 === t || 188 === t || 189 === t || 190 === t || 215 === t || 247 === t) || (t => t >= 8192 && t <= 8303)(t) && (8214 === t || 8224 === t || 8225 === t || 8240 === t || 8241 === t || 8251 === t || 8252 === t || 8258 === t || 8263 === t || 8264 === t || 8265 === t || 8273 === t) || (t => t >= 8448 && t <= 8527)(t) || (t => t >= 8528 && t <= 8591)(t) || (t => t >= 8960 && t <= 9215)(t) && (t >= 8960 && t <= 8967 || t >= 8972 && t <= 8991 || t >= 8996 && t <= 9e3 || 9003 === t || t >= 9085 && t <= 9114 || t >= 9150 && t <= 9165 || 9167 === t || t >= 9169 && t <= 9179 || t >= 9186 && t <= 9215) || (t => t >= 9216 && t <= 9279)(t) && 9251 !== t || (t => t >= 9280 && t <= 9311)(t) || (t => t >= 9312 && t <= 9471)(t) || (t => t >= 9632 && t <= 9727)(t) || (t => t >= 9728 && t <= 9983)(t) && !(t >= 9754 && t <= 9759) || (t => t >= 11008 && t <= 11263)(t) && (t >= 11026 && t <= 11055 || t >= 11088 && t <= 11097 || t >= 11192 && t <= 11243) || on(t) || ln(t) || (t => t >= 57344 && t <= 63743)(t) || An(t) || _n(t) || Sn(t) || 8734 === t || 8756 === t || 8757 === t || t >= 9984 && t <= 10087 || t >= 10102 && t <= 10131 || 65532 === t || 65533 === t);
        }(t));
    }
    function On(t) {
        return t >= 1424 && t <= 2303 || bn(t) || Mn(t);
    }
    const Fn = [ [ 9, 9 ], [ 32, 32 ], [ 5760, 5760 ], [ 8192, 8198 ], [ 8200, 8202 ], [ 8287, 12288 ], [ 6158, 6158 ], [ 8203, 8205 ] ];
    function In(t) {
        for (const e of Fn) if (t >= e[0] && t <= e[1]) return !0;
        return !1;
    }
    const Cn = {
        "!": "︕",
        "#": "＃",
        $: "＄",
        "%": "％",
        "&": "＆",
        "(": "︵",
        ")": "︶",
        "*": "＊",
        "+": "＋",
        ",": "︐",
        "-": "︲",
        ".": "・",
        "/": "／",
        ":": "︓",
        ";": "︔",
        "<": "︿",
        "=": "＝",
        ">": "﹀",
        "?": "︖",
        "@": "＠",
        "[": "﹇",
        "\\": "＼",
        "]": "﹈",
        "^": "＾",
        N: "︳",
        "`": "｀",
        "{": "︷",
        "|": "―",
        "}": "︸",
        "~": "～",
        "¢": "￠",
        "£": "￡",
        "¥": "￥",
        "¦": "￤",
        "¬": "￢",
        "¯": "￣",
        "–": "︲",
        "—": "︱",
        "‘": "﹃",
        "’": "﹄",
        "“": "﹁",
        "”": "﹂",
        "…": "︙",
        "‧": "・",
        "₩": "￦",
        "、": "︑",
        "。": "︒",
        "〈": "︿",
        "〉": "﹀",
        "《": "︽",
        "》": "︾",
        "「": "﹁",
        "」": "﹂",
        "『": "﹃",
        "』": "﹄",
        "【": "︻",
        "】": "︼",
        "〔": "︹",
        "〕": "︺",
        "〖": "︗",
        "〗": "︘",
        "！": "︕",
        "（": "︵",
        "）": "︶",
        "，": "︐",
        "－": "︲",
        "．": "・",
        "：": "︓",
        "；": "︔",
        "＜": "︿",
        "＞": "﹀",
        "？": "︖",
        "［": "﹇",
        "］": "﹈",
        "＿": "︳",
        "｛": "︷",
        "｜": "―",
        "｝": "︸",
        "｟": "︵",
        "｠": "︶",
        "｡": "︒",
        "｢": "﹁",
        "｣": "﹂"
    };
    function En(t, e, n, i, r, s, o, a, l, h) {
        let c = t.trim();
        2 === h && (c = function(t) {
            let e = "";
            for (let n = 0; n < t.length; n++) {
                const i = t.charCodeAt(n + 1) || null, r = t.charCodeAt(n - 1) || null;
                e += i && Tn(i) && !Cn[t[n + 1]] || r && Tn(r) && !Cn[t[n - 1]] || !Cn[t[n]] ? t[n] : Cn[t[n]];
            }
            return e;
        }(c));
        const u = [], f = {
            positionedGlyphs: u,
            text: c,
            top: a[1],
            bottom: a[1],
            left: a[0],
            right: a[0],
            writingMode: h
        };
        let d;
        return d = function(t, e) {
            const n = [];
            let i = 0;
            for (let r = 0; r < e.length; r++) {
                const s = e[r];
                n.push(t.substring(i, s)), i = s;
            }
            return i < t.length && n.push(t.substring(i, t.length)), n;
        }(c, function(t, e, n, i) {
            if (!n) return [];
            if (!t) return [];
            const r = [], s = function(t, e, n, i) {
                let r = 0;
                for (let n = 0; n < t.length; n++) {
                    const s = i[t.charCodeAt(n)];
                    s && (r += s.metrics.advance + e);
                }
                return r / Math.max(1, Math.ceil(r / n));
            }(t, e, n, i);
            let o = 0;
            for (let n = 0; n < t.length; n++) {
                const l = t.charCodeAt(n), h = i[l];
                h && !Hn[l] && (o += h.metrics.advance + e), n < t.length - 1 && (Dn[l] || !((a = l) < 11904) && (cn(a) || hn(a) || An(a) || xn(a) || pn(a) || nn(a) || un(a) || on(a) || yn(a) || mn(a) || dn(a) || Sn(a) || an(a) || sn(a) || rn(a) || fn(a) || ln(a) || wn(a) || vn(a) || gn(a))) && r.push(Nn(n + 1, o, s, r, Rn(l, t.charCodeAt(n + 1)), !1));
            }
            var a;
            return function t(e) {
                return e ? t(e.priorBreak).concat(e.index) : [];
            }(Nn(t.length, o, s, r, 0, !0));
        }(c, o, n, e)), function(t, e, n, i, r, s, o, a, l) {
            let h = 0, c = 8, u = 0;
            const f = t.positionedGlyphs, d = "right" === s ? 1 : "left" === s ? 0 : .5;
            for (let t = 0; t < n.length; t++) {
                let r = n[t];
                if (r = r.trim(), !r.length) {
                    c -= i;
                    continue;
                }
                const s = f.length;
                for (let t = 0; t < r.length; t++) {
                    const n = r.charCodeAt(t), i = e[n];
                    i && (Pn(n) && 1 !== o ? (32 !== n && f.push({
                        glyph: n,
                        x: h,
                        y: 0,
                        vertical: !0
                    }), h += l + a) : (32 !== n && f.push({
                        glyph: n,
                        x: h,
                        y: c,
                        vertical: !1
                    }), h += i.metrics.advance + a));
                }
                f.length !== s && (u = Math.max(h - a, u), Vn(f, e, s, f.length - 1, d)), h = 0, 
                c -= i;
            }
            const {horizontalAlign: p, verticalAlign: y} = zn(r);
            !function(t, e, n, i, r, s, o) {
                const a = (e - n) * r, l = -(-i * o + .5) * s;
                if (a || l) for (let e = 0; e < t.length; e++) t[e].x += a, t[e].y += l;
            }(f, d, p, y, u, i, n.length);
            const m = n.length * i;
            t.top += -y * m, t.bottom = t.top + m, t.left += -p * u, t.right = t.left + u;
        }(f, e, d, i, r, s, h, o, l), !!u.length && f;
    }
    const Hn = {
        9: !0,
        10: !0,
        11: !0,
        12: !0,
        13: !0,
        32: !0
    }, Dn = {
        10: !0,
        32: !0,
        38: !0,
        40: !0,
        41: !0,
        43: !0,
        45: !0,
        47: !0,
        173: !0,
        183: !0,
        8203: !0,
        8208: !0,
        8211: !0,
        8231: !0
    };
    function Ln(t, e, n, i) {
        const r = Math.pow(t - e, 2);
        return i ? t < e ? r / 2 : 2 * r : r + Math.abs(n) * n;
    }
    function Rn(t, e) {
        let n = 0;
        return 10 === t && (n -= 1e4), 40 !== t && 65288 !== t || (n += 50), 41 !== e && 65289 !== e || (n += 50), 
        n;
    }
    function Nn(t, e, n, i, r, s) {
        let o = null, a = Ln(e, n, r, s);
        for (let t = 0; t < i.length; t++) {
            const l = i[t], h = Ln(e - l.x, n, r, s) + l.badness;
            h <= a && (o = l, a = h);
        }
        return {
            index: t,
            x: e,
            priorBreak: o,
            badness: a
        };
    }
    function zn(t) {
        let e = .5, n = .5;
        switch (t) {
          case "right":
          case "top-right":
          case "bottom-right":
            e = 1;
            break;

          case "left":
          case "top-left":
          case "bottom-left":
            e = 0;
        }
        switch (t) {
          case "bottom":
          case "bottom-right":
          case "bottom-left":
            n = 1;
            break;

          case "top":
          case "top-right":
          case "top-left":
            n = 0;
        }
        return {
            horizontalAlign: e,
            verticalAlign: n
        };
    }
    function Vn(t, e, n, i, r) {
        if (!r) return;
        const s = e[t[i].glyph];
        if (s) {
            const e = (t[i].x + s.metrics.advance) * r;
            if (!e) return;
            for (let r = n; r <= i; r++) t[r].x -= e;
        }
    }
    function jn(t) {
        if (!function(t) {
            for (const e of t) if (On(e.charCodeAt(0))) return !0;
            return !1;
        }(t)) return t;
        const e = [], n = [], i = [];
        let r = 0, s = 0, o = 1, a = 1;
        for (const l of t) {
            const t = l.codePointAt(0);
            In(t) ? (i.push(l), r++) : (o = On(t) ? -1 : 1, a !== o ? (s = r, n.length && (a > 0 && n.reverse(), 
            e.push(...n)), i.length && (e.splice(s, 0, ...i), i.length = 0), a = o, n.length = 0) : i.length && (n.push(...i), 
            i.length = 0), n.push(l), r++);
        }
        return i.length && n.push(...i), n.length && (a > 0 && n.reverse(), e.push(...n)), 
        e.reverse().join("");
    }
    const Un = /\{ *([\w_]+) *\}/g;
    class Gn {
        constructor(t, e, n, i, r) {
            this.feature = t, this.symbolDef = e, this.symbol = n, this.options = r, this.V = this.j.bind(this), 
            this.D = i;
        }
        j(t, e) {
            return this.feature.properties[e] || "default";
        }
        getShape(t, e) {
            if (this.U) return this.U;
            const {textHorizontalAlignmentFn: n, textVerticalAlignmentFn: i, markerHorizontalAlignmentFn: r, markerVerticalAlignmentFn: s, textWrapWidthFn: o} = this.D;
            let a;
            const l = this.symbol, h = this.getIconAndGlyph(), c = this.feature.properties;
            if (h && h.glyph) {
                const {font: t, text: r} = h.glyph;
                if ("" === r) return null;
                const s = this.size[0] / 24, u = 24, f = l.textKeepUpright, d = "map" === l.textRotationAlignment && "line" === l.textPlacement && !l.isIconText, p = e.glyphMap[t], y = Wn(n ? n(null, c) : l.textHorizontalAlignment, i ? i(null, c) : l.textVerticalAlignment), m = 1.2 * u, g = function(t) {
                    for (let e = 0; e < t.length; e++) if (!kn(t.charAt(e).charCodeAt(0))) return !1;
                    return !0;
                }(r), v = g && l.textLetterSpacing / s || 0, x = [ l.textDx / s || 0, l.textDy / s || 0 ], b = ((o ? o(null, c) : l.textWrapWidth) || 10 * u) / s;
                a = {}, a.horizontal = En(r, p, b, m, y, "center", v, x, u, 1), g && d && f && (a.vertical = En(r, p, b, m, y, "center", v, x, u, 2));
            } else if (h && h.icon) {
                if (!t.positions[h.icon.url]) return null;
                const e = Wn(r ? r(null, c) : l.markerHorizontalAlignment, s ? s(null, c) : l.markerVerticalAlignment);
                a = function(t, e) {
                    const {horizontalAlign: n, verticalAlign: i} = zn(e), r = -24 * n, s = -24 * i;
                    return {
                        image: t,
                        top: s,
                        bottom: s + 24,
                        left: r,
                        right: r + 24
                    };
                }(t.positions[h.icon.url], e), this.size || (this.size = a.image.displaySize);
            }
            return this.U = a, a;
        }
        getIconAndGlyph() {
            if (this.iconGlyph) return this.iconGlyph;
            const {markerFileFn: t, markerTypeFn: e, markerPathFn: n, markerWidthFn: i, markerHeightFn: r, markerFillFn: s, markerFillPatternFileFn: o, markerFillOpacityFn: a, markerTextFitFn: l, markerTextFitPaddingFn: h, markerLineColorFn: c, markerLineWidthFn: u, markerLineOpacityFn: f, markerLineDasharrayFn: d, markerLinePatternFileFn: p, markerPathWidthFn: y, markerPathHeightFn: m, textNameFn: g, textFaceNameFn: v, textStyleFn: x, textWeightFn: b} = this.D, {zoom: w} = this.options, A = {}, S = this.symbol, k = this.feature.properties, P = t ? t(null, k) : S.markerFile, T = e ? e(null, k) : S.markerType, O = P || T || S.markerPath, F = !Le(this.symbolDef.textName);
            let I;
            if (O) {
                I = function(t, e, n, i, r, s) {
                    if (Le(e.markerWidth) && Le(e.markerHeight)) return null;
                    const o = "__fn_markerWidth".trim(), a = "__fn_markerHeight".trim();
                    let l = e.markerWidth || 0, h = e.markerHeight || 0;
                    return Ne(l) && ("identity" !== l.type ? l = Qe(l) : (l = t.markerWidth, t[o] && (l = t[o](i, n)), 
                    Ne(l) && (l = "identity" === l.type ? r(i, n) : Qe(l)))), Ne(h) && ("identity" !== h.type ? h = Qe(h) : (h = t.markerHeight, 
                    t[a] && (h = t[a](i, n)), Ne(h) && (h = "identity" === h.type ? s(i, n) : Qe(h)))), 
                    [ l, h ];
                }(S, this.symbolDef, k, w, i, r) || [ 0, 0 ];
                let t = S.markerTextFit;
                if (l && (t = l(w, k)), t && t && "none" !== t) {
                    const e = S.text.textSize;
                    let n = S.text.textName;
                    _(n) && (n = M(n)(w, k));
                    const i = en(n, k);
                    if (i) {
                        const n = "__fn_textSize".trim(), r = "__fn_textSize_0".trim();
                        _(e) && !S.text[n] && (S.text[r] = M(e), S.text[n] = (t, e) => {
                            const n = S.text[r](t, e);
                            return _(n) ? M(n)(t, e) : n;
                        });
                        const s = Ke(S.text, S.text, k, w);
                        if ("width" !== t && "both" !== t || (I[0] = s[0] * i.length), "height" !== t && "both" !== t || (I[1] = s[1]), 
                        s[0] && s[1]) {
                            let t = S.markerTextFitPadding || [ 0, 0, 0, 0 ];
                            h && (t = h(w, k)), I[0] += t[1] + t[3], I[1] += t[0] + t[2];
                        }
                    } else I[0] = I[1] = -1;
                }
            }
            if (F && (I = Ke(S, this.symbolDef, k, w)), !I) return A;
            if (I[0] = Math.ceil(I[0]), I[1] = Math.ceil(I[1]), this.size = I, O && I[0] >= 0 && I[1] >= 0) {
                let t;
                if (T) {
                    const e = {};
                    if (e.markerType = T, "path" === T && (e.markerPath = n ? n(null, k) : S.markerPath, 
                    e.markerPathWidth = y ? y(null, k) : S.markerPathWidth, e.markerPathHeight = m ? m(null, k) : S.markerPathHeight), 
                    i) {
                        const t = i(null, k);
                        Le(t) || (e.markerWidth = t);
                    } else S.markerWidth >= 0 && (e.markerWidth = S.markerWidth);
                    if (r) {
                        const t = r(null, k);
                        Le(t) || (e.markerHeight = t);
                    } else S.markerHeight >= 0 && (e.markerHeight = S.markerHeight);
                    if (s) {
                        const t = s(null, k);
                        Le(t) || (e.markerFill = t);
                    } else S.markerFill && (e.markerFill = S.markerFill);
                    if (o) {
                        const t = o(null, k);
                        Le(t) || (e.markerFillPatternFile = t);
                    } else S.markerFillPatternFile && (e.markerFillPatternFile = S.markerFillPatternFile);
                    if (a) {
                        const t = a(null, k);
                        Le(t) || (e.markerFillOpacity = t);
                    } else S.markerFillOpacity >= 0 && (e.markerFillOpacity = S.markerFillOpacity);
                    if (c) {
                        const t = c(null, k);
                        Le(t) || (e.markerLineColor = t);
                    } else S.markerLineColor && (e.markerLineColor = S.markerLineColor);
                    if (u) {
                        const t = u(null, k);
                        Le(t) || (e.markerLineWidth = t);
                    } else S.markerLineWidth >= 0 && (e.markerLineWidth = S.markerLineWidth);
                    if (f) {
                        const t = f(null, k);
                        Le(t) || (e.markerLineOpacity = t);
                    } else S.markerLineOpacity >= 0 && (e.markerLineOpacity = S.markerLineOpacity);
                    if (d) {
                        const t = d(null, k);
                        Le(t) || (e.markerLineDasharray = t);
                    } else S.markerLineDasharray && (e.markerLineDasharray = S.markerLineDasharray);
                    if (p) {
                        const t = p(null, k);
                        Le(t) || (e.markerLinePatternFile = t);
                    } else S.markerLinePatternFile && (e.markerLinePatternFile = S.markerLinePatternFile);
                    t = "vector://" + JSON.stringify(e);
                } else t = P ? P.replace(Un, this.V) : S.markerPath ? function(t, e, n) {
                    if (!t.markerPath) return null;
                    let i = 1;
                    const r = function(t) {
                        const e = {
                            stroke: {
                                stroke: t.markerLineColor,
                                "stroke-width": t.markerLineWidth,
                                "stroke-opacity": t.markerLineOpacity,
                                "stroke-dasharray": null,
                                "stroke-linecap": "butt",
                                "stroke-linejoin": "round"
                            },
                            fill: {
                                fill: t.markerFill,
                                "fill-opacity": t.markerFillOpacity
                            }
                        };
                        return 0 === e.stroke["stroke-width"] && (e.stroke["stroke-opacity"] = 0), e;
                    }(t);
                    Re(t.markerOpacity) && (i = t.markerOpacity), Re(t.opacity) && (i *= t.opacity);
                    const s = {};
                    if (r) {
                        for (const t in r.stroke) je(r.stroke, t) && (Le(r.stroke[t]) || (s[t] = r.stroke[t]));
                        for (const t in r.fill) je(r.fill, t) && (Le(r.fill[t]) || (s[t] = r.fill[t]));
                    }
                    const o = Array.isArray(t.markerPath) ? t.markerPath : [ t.markerPath ];
                    let a;
                    const l = [];
                    for (let t = 0; t < o.length; t++) a = ze(o[t]) ? {
                        path: o[t]
                    } : o[t], a = De({}, a, s), a.d = a.path, delete a.path, l.push(a);
                    const h = [ '<svg version="1.1"', 'xmlns="http://www.w3.org/2000/svg"' ];
                    i < 1 && h.push('opacity="' + i + '"'), t.markerPathWidth && t.markerPathHeight && h.push('viewBox="0 0 ' + t.markerPathWidth + " " + t.markerPathHeight + '"'), 
                    h.push('preserveAspectRatio="none"'), e && h.push('width="' + e + '"'), n && h.push('height="' + n + '"'), 
                    h.push("><defs></defs>");
                    for (let t = 0; t < l.length; t++) {
                        let e = "<path ";
                        for (const n in l[t]) je(l[t], n) && (e += " " + n + '="' + l[t][n] + '"');
                        e += "></path>", h.push(e);
                    }
                    return h.push("</svg>"), "data:image/svg+xml;base64," + btoa(h.join(" "));
                }(S, I[0], I[1]) : null;
                A.icon = {
                    url: t,
                    size: I
                };
            }
            if (F) {
                const t = g ? g(null, k) : S.textName;
                if (t || 0 === t) {
                    const e = function(t, e, n) {
                        return [ e || "normal", n || "normal", "24px", t || "monospace" ].join(" ");
                    }(v ? v(null, k) : S.textFaceName, x ? x(null, k) : S.textStyle, b ? b(null, k) : S.textWeight);
                    let n = en(t, k);
                    n && n.length && (n = jn(n), A.glyph = {
                        font: e,
                        text: n
                    });
                }
            }
            return this.iconGlyph = A, A;
        }
    }
    function Wn(t, e) {
        e && "middle" !== e || (e = "center"), t && "middle" !== t || (t = "center");
        let n = "center" !== e ? e : "";
        return n += "center" !== t ? (n.length ? "-" : "") + t : "", n
        /*!
     * From mapbox-gl-js
     * MIT License
     * https://github.com/mapbox/mapbox-gl-js
     */;
    }
    function Bn(t, e, n, i, r) {
        const s = [];
        for (let o = 0; o < t.length; o++) {
            const a = t[o];
            let l;
            for (let t = 0; t < a.length - 1; t++) {
                let o = a[t], h = a[t + 1];
                o.x < e && h.x < e || (o.x < e ? o = new z(e, o.y + (e - o.x) / (h.x - o.x) * (h.y - o.y)).O() : h.x < e && (h = new z(e, o.y + (e - o.x) / (h.x - o.x) * (h.y - o.y)).O()), 
                o.y < n && h.y < n || (o.y < n ? o = new z(o.x + (n - o.y) / (h.y - o.y) * (h.x - o.x), n).O() : h.y < n && (h = new z(o.x + (n - o.y) / (h.y - o.y) * (h.x - o.x), n).O()), 
                o.x >= i && h.x >= i || (o.x >= i ? o = new z(i, o.y + (i - o.x) / (h.x - o.x) * (h.y - o.y)).O() : h.x >= i && (h = new z(i, o.y + (i - o.x) / (h.x - o.x) * (h.y - o.y)).O()), 
                o.y >= r && h.y >= r || (o.y >= r ? o = new z(o.x + (r - o.y) / (h.y - o.y) * (h.x - o.x), r).O() : h.y >= r && (h = new z(o.x + (r - o.y) / (h.y - o.y) * (h.x - o.x), r).O()), 
                l && o.equals(l[l.length - 1]) || (l = [ o ], s.push(l)), l.push(h)))));
            }
        }
        return s;
    }
    class Xn extends z {
        constructor(t, e, n, i) {
            super(t, e), this.angle = n, void 0 !== i && (this.segment = i);
        }
        clone() {
            return new Xn(this.x, this.y, this.angle, this.segment);
        }
    }
    /*!
     * From mapbox-gl-js
     * MIT License
     * https://github.com/mapbox/mapbox-gl-js
     */    function qn(t, e, n, i, r) {
        if (void 0 === e.segment) return !0;
        let s = e, o = e.segment + 1, a = 0;
        for (;a > -n / 2; ) {
            if (o--, o < 0) return !1;
            a -= t[o].dist(s), s = t[o];
        }
        a += t[o].dist(t[o + 1]), o++;
        const l = [];
        let h = 0;
        for (;a < n / 2; ) {
            const e = t[o], n = t[o + 1];
            if (!n) return !1;
            let s = t[o - 1].angleTo(e) - e.angleTo(n);
            for (s = Math.abs((s + 3 * Math.PI) % (2 * Math.PI) - Math.PI), l.push({
                distance: a,
                angleDelta: s
            }), h += s; a - l[0].distance > i; ) h -= l.shift().angleDelta;
            if (h > r) return !1;
            o++, a += e.dist(n);
        }
        return !0;
    }
    function Jn(t, e, n, i, r, s, o, a, l) {
        const h = function(t, e, n) {
            return t ? .6 * e * n : 0;
        }(i, s, o), c = function(t, e) {
            return Math.max(t ? t.right - t.left : 0, e ? e.right - e.left : 0);
        }(i, r), u = 0 === t[0].x || t[0].x === l || 0 === t[0].y || t[0].y === l;
        return e - c * o < e / 4 && (e = c * o + e / 4), function t(e, n, i, r, s, o, a, l, h) {
            const c = o / 2, u = function(t) {
                let e = 0;
                for (let n = 0; n < t.length - 1; n++) e += t[n].dist(t[n + 1]);
                return e;
            }(e);
            let f = 0, d = n - i, p = [];
            for (let t = 0; t < e.length - 1; t++) {
                const n = e[t], a = e[t + 1], l = n.dist(a), y = a.angleTo(n);
                for (;d + i < f + l; ) {
                    d += i;
                    const m = (d - f) / l, g = Yn(n.x, a.x, m), v = Yn(n.y, a.y, m);
                    if (g >= 0 && g < h && v >= 0 && v < h && d - c >= 0 && d + c <= u) {
                        const n = new Xn(g, v, y, t);
                        n.line = e, n.O(), r && !qn(e, n, o, r, s) || p.push(n);
                    }
                }
                f += l;
            }
            return l || p.length || a || (p = t(e, f / 2, i, r, s, o, a, !0, h)), p;
        }(t, u ? e / 2 * a % e : (c / 2 + 2 * s) * o * a % e, e, h, n, c * o, u, !1, l);
    }
    function Yn(t, e, n) {
        return t * (1 - n) + e * n;
    }
    function $n(t, e) {
        const n = t.length;
        if (n <= 1) return [ t ];
        const i = [];
        let r, s;
        for (let e = 0; e < n; e++) {
            const n = Ge(t[e]);
            0 !== n && (t[e].area = Math.abs(n), void 0 === s && (s = n < 0), s === n < 0 ? (r && i.push(r), 
            r = [ t[e] ]) : r.push(t[e]));
        }
        if (r && i.push(r), e > 1) for (let t = 0; t < i.length; t++) i[t].length <= e || (B(i[t], e, 1, i[t].length - 1, Zn), 
        i[t] = i[t].slice(0, e));
        return i;
    }
    function Zn(t, e) {
        return e.area - t.area;
    }
    function Kn(t, e, n) {
        const i = e.distSqr(n);
        if (0 === i) return t.distSqr(e);
        const r = ((t.x - e.x) * (n.x - e.x) + (t.y - e.y) * (n.y - e.y)) / i;
        return t.distSqr(r < 0 ? e : r > 1 ? n : n.sub(e).A(r).s(e));
    }
    function Qn(t, e = 1, n = !1) {
        let i = 1 / 0, r = 1 / 0, s = -1 / 0, o = -1 / 0;
        const a = t[0];
        for (let t = 0; t < a.length; t++) {
            const e = a[t];
            (!t || e.x < i) && (i = e.x), (!t || e.y < r) && (r = e.y), (!t || e.x > s) && (s = e.x), 
            (!t || e.y > o) && (o = e.y);
        }
        const l = Math.min(s - i, o - r);
        let h = l / 2;
        const c = new Y(null, ti);
        if (0 === l) return new z(i, r);
        for (let e = i; e < s; e += l) for (let n = r; n < o; n += l) c.push(new ei(e + h, n + h, h, t));
        let u = function(t) {
            let e = 0, n = 0, i = 0;
            const r = t[0];
            for (let t = 0, s = r.length, o = s - 1; t < s; o = t++) {
                const s = r[t], a = r[o], l = s.x * a.y - a.x * s.y;
                n += (s.x + a.x) * l, i += (s.y + a.y) * l, e += 3 * l;
            }
            return new ei(n / e, i / e, 0, t);
        }(t), f = c.length;
        for (;c.length; ) {
            const i = c.pop();
            (i.d > u.d || !u.d) && (u = i, n && console.log("found best %d after %d probes", Math.round(1e4 * i.d) / 1e4, f)), 
            i.max - u.d <= e || (h = i.h / 2, c.push(new ei(i.p.x - h, i.p.y - h, h, t)), c.push(new ei(i.p.x + h, i.p.y - h, h, t)), 
            c.push(new ei(i.p.x - h, i.p.y + h, h, t)), c.push(new ei(i.p.x + h, i.p.y + h, h, t)), 
            f += 4);
        }
        return n && (console.log("num probes: " + f), console.log("best distance: " + u.d)), 
        u.p;
    }
    function ti(t, e) {
        return e.max - t.max;
    }
    function ei(t, e, n, i) {
        this.p = new z(t, e), this.h = n, this.d = function(t, e) {
            let n = !1, i = 1 / 0;
            for (let r = 0; r < e.length; r++) {
                const s = e[r];
                for (let e = 0, r = s.length, o = r - 1; e < r; o = e++) {
                    const r = s[e], a = s[o];
                    r.y > t.y != a.y > t.y && t.x < (a.x - r.x) * (t.y - r.y) / (a.y - r.y) + r.x && (n = !n), 
                    i = Math.min(i, Kn(t, r, a));
                }
            }
            return (n ? 1 : -1) * Math.sqrt(i);
        }(this.p, i), this.max = this.d + this.h * Math.SQRT2;
    }
    const ni = 45 * Math.PI / 100;
    function ii(t, e) {
        const n = {}, i = {}, r = [];
        let s = 0;
        function o(e) {
            r.push(t[e]), s++;
        }
        function a(t, e, n) {
            const s = i[t];
            return delete i[t], i[e] = s, r[s].geometry[0].pop(), r[s].geometry[0] = r[s].geometry[0].concat(n[0]), 
            s;
        }
        function l(t, e, i) {
            const s = n[e];
            return delete n[e], n[t] = s, r[s].geometry[0].shift(), r[s].geometry[0] = i[0].concat(r[s].geometry[0]), 
            s;
        }
        function h(t, e, n) {
            const i = n ? e[0][e[0].length - 1] : e[0][0];
            return `${t}:${i.x}:${i.y}`;
        }
        for (let c = 0; c < t.length; c++) {
            const u = t[c], f = u.geometry;
            if (!f) continue;
            const d = u.properties[e] ? u.properties[e].toString() : null;
            if (!d) {
                o(c);
                continue;
            }
            const p = h(d, f), y = h(d, f, !0);
            if (p in i && y in n && i[p] !== n[y]) {
                const t = l(p, y, f), e = a(p, y, r[t].geometry);
                delete n[p], delete i[y], i[h(d, r[e].geometry, !0)] = e, r[t].geometry = null;
            } else p in i ? a(p, y, f) : y in n ? l(p, y, f) : (o(c), n[p] = s - 1, i[y] = s - 1);
        }
        return r.filter(t => t.geometry);
    }
    class ri extends $e {
        static needMerge(t) {
            return t.mergeOnProperty && ("line" === t.textPlacement || "line" === t.markerPlacement);
        }
        static mergeLineFeatures(t, e, n) {
            const i = "__index".trim(), r = function(t, e, n) {
                const i = "__index".trim(), r = $e.genFnTypes(e), {mergeOnPropertyFn: s} = r;
                if (!e.mergeOnProperty || "line" !== e.textPlacement && "line" !== e.markerPlacement) return [];
                if (!(Xe(o = e.mergeOnProperty) || "string" != typeof o && (null === o.constructor || o.constructor !== String) || "line" !== e.textPlacement && "line" !== e.markerPlacement)) return [ {
                    features: t,
                    property: e.mergeOnProperty
                } ];
                var o;
                const a = [], l = {}, h = [];
                for (let r = 0; r < t.length; r++) {
                    t[r][i] = r;
                    const o = t[r].properties = t[r].properties || {};
                    o.$layer = t[r].layer, o.$type = t[r].type;
                    let c = e.markerPlacement;
                    "line" !== c && (c = e.textPlacement);
                    const u = s ? s(n, o) : e.mergeOnProperty;
                    "line" !== c || Xe(u) ? h.push(t[r]) : (void 0 === l[u] && (l[u] = a.length, a.push({
                        features: [],
                        property: u
                    })), a[l[u]].features.push(t[r]));
                }
                return h.length && a.push({
                    features: h
                }), a;
            }(t, e, n);
            if (r.length) {
                const e = [];
                for (let n = 0; n < r.length; n++) e.push(r[n].property ? ii(r[n].features, r[n].property) : t);
                if (1 === e.length) return e[0];
                {
                    let t = [];
                    for (let n = 0; n < e.length; n++) t = t.concat(e[n]);
                    return t.sort((t, e) => t[i] - e[i]), t;
                }
            }
        }
        static splitPointSymbol(t, e = 0) {
            const n = [];
            if (Array.isArray(t)) {
                const e = t;
                for (let t = 0; t < e.length; t++) e[t] && n.push(...ri.splitPointSymbol(e[t], t));
                return n;
            }
            let i = null, r = null;
            for (const e in t) 0 === e.indexOf("marker") ? (i = i || {}, i[e] = t[e]) : 0 === e.indexOf("text") && (r = r || {}, 
            r[e] = t[e]);
            return i && (i.isIconText = !0, t.mergeOnProperty && (i.mergeOnProperty = t.mergeOnProperty), 
            n.push(i)), r && (i && (r.textPlacement = i.markerPlacement, r.textSpacing = i.markerSpacing, 
            r.isIconText = !0), t.mergeOnProperty && (r.mergeOnProperty = t.mergeOnProperty), 
            n.push(r)), void 0 !== t.visible && (i && (i.visible = t.visible), r && (r.visible = t.visible)), 
            i && (i.markerTextFit && r && (i.text = {}, i.text.textName = r.textName, i.text.textSize = r.textSize), 
            i.index = {
                index: e,
                type: 0
            }), r && (r.index = {
                index: e,
                type: 1
            }), n;
        }
        static isAtlasLoaded(t, e) {
            const {icon: n, glyph: i} = t, {iconAtlas: r, glyphAtlas: s} = e;
            if (n && (!r || !r.positions[n.url])) return !1;
            if (i) {
                if (!s || !s.positions[i.font]) return !1;
                const t = s.positions[i.font], {text: e} = i;
                for (let n = 0; n < e.length; n++) if (!t[e.charCodeAt(n)]) return !1;
            }
            return !0;
        }
        constructor(t, e, n) {
            super(t, e, n);
        }
        createStyledVector(t, e, n, i, r, s) {
            const o = new Gn(t, this.symbolDef, e, n, i), a = o.getIconAndGlyph();
            if (a.icon && !this.options.atlas) {
                const {url: t, size: e} = a.icon;
                r[t] || (r[t] = a.icon.size), r[t][0] < e[0] && (r[t][0] = e[0]), r[t][1] < e[1] && (r[t][1] = e[1]);
            }
            if (a.glyph && !this.options.atlas) {
                const {font: t, text: n} = a.glyph, i = s[t] = s[t] || {};
                for (let t = 0; t < n.length; t++) i[n.charCodeAt(t)] = 1;
                "line" === e.textPlacement && (s.options = {
                    isCharsCompact: !1
                });
            }
            return this.options.allowEmptyPack || a.icon || a.glyph ? o : null;
        }
        getFormat(t) {
            const e = void 0 !== t.textName, n = e ? function(t) {
                return "line" !== t.textPlacement || t.isIconText ? [ {
                    type: Int16Array,
                    width: 3,
                    name: "aPosition"
                }, {
                    type: Int16Array,
                    width: 2,
                    name: "aShape"
                }, {
                    type: Uint16Array,
                    width: 2,
                    name: "aTexCoord"
                }, {
                    type: Uint8Array,
                    width: 1,
                    name: "aCount"
                } ] : [ {
                    type: Int16Array,
                    width: 3,
                    name: "aPosition"
                }, {
                    type: Int16Array,
                    width: 2,
                    name: "aShape"
                }, {
                    type: Uint16Array,
                    width: 2,
                    name: "aTexCoord"
                }, {
                    type: Uint8Array,
                    width: 1,
                    name: "aCount"
                }, {
                    type: Int16Array,
                    width: 2,
                    name: "aGlyphOffset"
                }, {
                    type: Uint16Array,
                    width: 3,
                    name: "aSegment"
                }, {
                    type: Uint8Array,
                    width: 1,
                    name: "aVertical"
                } ];
            }(t) : [ {
                type: Int16Array,
                width: 3,
                name: "aPosition"
            }, {
                type: Int16Array,
                width: 2,
                name: "aShape"
            }, {
                type: Uint16Array,
                width: 2,
                name: "aTexCoord"
            } ];
            e ? n.push(...this.G()) : n.push(...this.W());
            const {markerOpacityFn: i, textOpacityFn: r, markerPitchAlignmentFn: s, textPitchAlignmentFn: o, markerRotationAlignmentFn: a, textRotationAlignmentFn: l, markerRotationFn: h, textRotationFn: c, markerAllowOverlapFn: u, textAllowOverlapFn: f, markerIgnorePlacementFn: d, textIgnorePlacementFn: p} = this.D;
            return (i || r) && n.push({
                type: Uint8Array,
                width: 1,
                name: "aColorOpacity"
            }), (s || o) && n.push({
                type: Uint8Array,
                width: 1,
                name: "aPitchAlign"
            }), (a || l) && n.push({
                type: Uint8Array,
                width: 1,
                name: "aRotationAlign"
            }), (h || c) && n.push({
                type: Uint16Array,
                width: 1,
                name: "aRotation"
            }), (u || f || d || p) && n.push({
                type: Uint8Array,
                width: 1,
                name: "aOverlap"
            }), n;
        }
        G() {
            const {textFillFn: t, textSizeFn: e, textHaloFillFn: n, textHaloRadiusFn: i, textHaloOpacityFn: r, textDxFn: s, textDyFn: o} = this.D, a = [];
            return t && a.push({
                type: Uint8Array,
                width: 4,
                name: "aTextFill"
            }), e && a.push({
                type: Uint8Array,
                width: 1,
                name: "aTextSize"
            }), n && a.push({
                type: Uint8Array,
                width: 4,
                name: "aTextHaloFill"
            }), i && a.push({
                type: Uint8Array,
                width: 1,
                name: "aTextHaloRadius"
            }), r && a.push({
                type: Uint8Array,
                width: 1,
                name: "aTextHaloOpacity"
            }), s && a.push({
                type: Int8Array,
                width: 1,
                name: "aTextDx"
            }), o && a.push({
                type: Int8Array,
                width: 1,
                name: "aTextDy"
            }), a;
        }
        W() {
            const {markerWidthFn: t, markerHeightFn: e, markerDxFn: n, markerDyFn: i} = this.D, r = [];
            return t && r.push({
                type: Uint8Array,
                width: 1,
                name: "aMarkerWidth"
            }), e && r.push({
                type: Uint8Array,
                width: 1,
                name: "aMarkerHeight"
            }), n && r.push({
                type: Int8Array,
                width: 1,
                name: "aMarkerDx"
            }), i && r.push({
                type: Int8Array,
                width: 1,
                name: "aMarkerDy"
            }), r;
        }
        createDataPack() {
            if (!this.iconAtlas && !this.glyphAtlas) {
                if (!this.options.allowEmptyPack) return null;
                this.empty = !0;
            }
            this.lineVertex = [];
            const t = super.createDataPack.apply(this, arguments);
            return t ? (t.lineVertex = new Int16Array(this.lineVertex), t.buffers.push(t.lineVertex.buffer), 
            t) : null;
        }
        placeVector(t, e) {
            const n = t.getShape(this.iconAtlas, this.glyphAtlas);
            if (!this.options.allowEmptyPack && !n) return;
            const i = this.B(t, n, e);
            if (0 === i.length) return;
            const r = this.data;
            let s = this.data.aPosition.length / 3;
            const o = t.symbol, a = t.feature.properties, l = "line" === o.textPlacement && !o.isIconText, h = void 0 !== o.textName, c = h && l && function(t) {
                let e = 0;
                for (let n = 0; n < t.length; n++) if (Pn(t.charAt(n).charCodeAt(0))) e = 0; else if (e++, 
                e >= 1) return !1;
                return !0;
            }(t.getIconAndGlyph().glyph.text) ? 1 : 0, {textFillFn: u, textSizeFn: f, textHaloFillFn: d, textHaloRadiusFn: p, textHaloOpacityFn: y, textDxFn: m, textDyFn: g, textPitchAlignmentFn: v, textRotationAlignmentFn: x, textRotationFn: b, textAllowOverlapFn: w, textIgnorePlacementFn: A, textOpacityFn: M, markerWidthFn: S, markerHeightFn: k, markerDxFn: P, markerDyFn: T, markerPitchAlignmentFn: O, markerRotationAlignmentFn: F, markerRotationFn: I, markerAllowOverlapFn: C, markerIgnorePlacementFn: E, markerOpacityFn: H} = this.D;
            let D, L, R, N, V, j, U, G, W, B, X, q, J, Y, $, Z, K;
            if (h) {
                const e = t.getIconAndGlyph().glyph.font;
                D = function(t, e, n) {
                    const i = t.positionedGlyphs, r = [];
                    for (let s = 0; s < i.length; s++) {
                        const o = i[s], a = n[o.glyph];
                        if (!a) continue;
                        const l = a.rect;
                        if (!l) continue;
                        const h = 4, c = a.metrics.advance / 2, u = a.metrics.height / 2, f = e ? [ o.x + c, 0 ] : [ 0, 0 ], d = e ? [ 0, o.y - u ] : [ o.x + c, o.y - u ], p = a.metrics.left - h - c + d[0], y = a.metrics.top - h + d[1], m = p + l.w, g = y + l.h, v = new z(p, y), x = new z(m, y), b = new z(p, g), w = new z(m, g);
                        if (e && o.vertical) {
                            const t = new z(-c, c), e = -Math.PI / 2, n = new z(5, 0);
                            v.S(e, t).s(n), x.S(e, t).s(n), b.S(e, t).s(n), w.S(e, t).s(n);
                        }
                        r.push({
                            tl: v,
                            tr: x,
                            bl: b,
                            br: w,
                            tex: l,
                            writingMode: t.writingMode,
                            glyphOffset: f
                        });
                    }
                    return r;
                }(n.horizontal, l, this.glyphAtlas.positions[e]), u && (L = u(null, a), _(L) ? L = [ 0, 0, 0, 0 ] : (L = Array.isArray(L) ? L.map(t => 255 * t) : zt(L).array(), 
                3 === L.length && L.push(255))), f && (R = f(this.options.zoom, a), Xe(R) && (R = 14)), 
                d && (N = d(null, a), N = Array.isArray(N) ? N.map(t => 255 * t) : zt(N).array(), 
                3 === N.length && N.push(255)), p && (V = p(null, a)), y && (j = 255 * y(null, a)), 
                m && (U = m(null, a) || 0), g && (G = g(null, a) || 0), v && (J = +("map" === v(null, a))), 
                x && (Y = +("map" === x(null, a))), b && ($ = qe(b(null, a), 0, 360) * Math.PI / 180);
            } else D = n ? function(t) {
                const e = t.image, n = t.top - 1 / e.pixelRatio, i = t.left - 1 / e.pixelRatio, r = t.bottom + 1 / e.pixelRatio, s = t.right + 1 / e.pixelRatio;
                let o, a, l, h;
                return o = new z(i, n), a = new z(s, n), l = new z(s, r), h = new z(i, r), [ {
                    tl: o,
                    tr: a,
                    bl: h,
                    br: l,
                    tex: {
                        x: e.tl[0],
                        y: e.tl[1],
                        w: e.displaySize[0],
                        h: e.displaySize[1]
                    },
                    writingMode: void 0,
                    glyphOffset: [ 0, 0 ]
                } ];
            }(n) : function() {
                const t = new z(0, 0), e = new z(0, 0), n = new z(0, 0);
                return [ {
                    tl: t,
                    tr: e,
                    bl: new z(0, 0),
                    br: n,
                    tex: {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0
                    },
                    writingMode: void 0,
                    glyphOffset: [ 0, 0 ]
                } ];
            }(), S && (W = S(null, a)), k && (B = k(null, a)), P && (X = P(null, a)), T && (q = T(null, a)), 
            O && (J = +("map" === O(null, a))), F && (Y = +("map" === F(null, a))), I && ($ = qe(I(null, a), 0, 360) * Math.PI / 180);
            const Q = C || w;
            Q && (Z = Q(null, a) || 0);
            const tt = E || A;
            let et;
            tt && (K = tt(null, a) || 0);
            const nt = M || H;
            nt && (et = 255 * nt(this.options.zoom, a));
            const it = this.options.EXTENT, rt = D.length, st = this.getAltitude(t.feature.properties);
            for (let t = 0; t < i.length; t++) {
                const e = i[t];
                if (it !== 1 / 0 && Be(e, it)) continue;
                const n = e.x, o = e.y, a = D.length;
                for (let t = 0; t < a; t++) {
                    const i = D[t], {tl: a, tr: u, bl: f, br: d, tex: p} = i;
                    this.X(r, n, o, st, 10 * a.x, 10 * a.y, p.x, p.y + p.h), h && this.q(r, l, rt, i.glyphOffset, e, c), 
                    this.J(r, L, R, N, V, j, U, G, W, B, X, q, et, J, Y, $, Z, K), this.X(r, n, o, st, 10 * u.x, 10 * u.y, p.x + p.w, p.y + p.h), 
                    h && this.q(r, l, rt, i.glyphOffset, e, c), this.J(r, L, R, N, V, j, U, G, W, B, X, q, et, J, Y, $, Z, K), 
                    this.X(r, n, o, st, 10 * f.x, 10 * f.y, p.x, p.y), h && this.q(r, l, rt, i.glyphOffset, e, c), 
                    this.J(r, L, R, N, V, j, U, G, W, B, X, q, et, J, Y, $, Z, K), this.X(r, n, o, st, 10 * d.x, 10 * d.y, p.x + p.w, p.y), 
                    h && this.q(r, l, rt, i.glyphOffset, e, c), this.J(r, L, R, N, V, j, U, G, W, B, X, q, et, J, Y, $, Z, K), 
                    this.addElements(s, s + 1, s + 2), this.addElements(s + 1, s + 2, s + 3), s += 4;
                    const y = Math.max(Math.abs(n), Math.abs(o), Math.abs(st));
                    y > this.maxPos && (this.maxPos = y);
                }
            }
        }
        X(t, e, n, i, r, s, o, a) {
            t.aPosition.push(e, n, i), t.aShape.push(r, s), t.aTexCoord.push(o, a);
        }
        q(t, e, n, i, r, s) {
            if (t.aCount.push(n), e) {
                t.aGlyphOffset.push(i[0], i[1]);
                const e = r.startIndex;
                t.aSegment.push(r.segment + e, e, r.line.length), t.aVertical.push(s);
            }
        }
        J(t, e, n, i, r, s, o, a, l, h, c, u, f, d, p, y, m, g) {
            const {textFillFn: v, textSizeFn: x, textHaloFillFn: b, textHaloRadiusFn: w, textHaloOpacityFn: A, textDxFn: _, textDyFn: M, textPitchAlignmentFn: S, textRotationAlignmentFn: k, textRotationFn: P, textAllowOverlapFn: T, textIgnorePlacementFn: O, textOpacityFn: F, markerWidthFn: I, markerHeightFn: C, markerDxFn: E, markerDyFn: H, markerPitchAlignmentFn: D, markerRotationAlignmentFn: L, markerRotationFn: R, markerAllowOverlapFn: N, markerIgnorePlacementFn: z, markerOpacityFn: V} = this.D;
            v && t.aTextFill.push(...e), x && t.aTextSize.push(n), b && t.aTextHaloFill.push(...i), 
            w && t.aTextHaloRadius.push(r), A && t.aTextHaloOpacity.push(s), _ && t.aTextDx.push(o), 
            M && t.aTextDy.push(a), I && t.aMarkerWidth.push(l), C && t.aMarkerHeight.push(h), 
            E && t.aMarkerDx.push(c), H && t.aMarkerDy.push(u), (V || F) && t.aColorOpacity.push(f), 
            (S || D) && t.aPitchAlign.push(d), (L || k) && t.aRotationAlign.push(p), (R || P) && t.aRotation.push(9362 * y);
            const j = N || T, U = z || O;
            (j || U) && t.aOverlap.push((j ? 8 : 0) + 4 * m + ((U ? 2 : 0) + g)), r > 0 && (this.properties.hasHalo = 1);
        }
        B(t, e, n) {
            const {feature: i, symbol: r} = t, s = this.Y(t, r), o = i.properties, {markerSpacingFn: a, textSpacingFn: l} = this.D, h = ((a ? a(null, o) : r.markerSpacing) || (l ? l(null, o) : r.textSpacing) || 250) * n;
            return function(t, e, n, i, r, s, o) {
                const {feature: a, size: l, symbol: h} = t, c = l ? 24 : 0, u = i * (l ? l[0] / c : 1), f = [];
                if ("line" === s) {
                    let t = a.geometry;
                    r && (t = Bn(a.geometry, 0, 0, r, r));
                    for (let i = 0; i < t.length; i++) {
                        const s = Jn(t[i], o, ni, h.isIconText ? null : n.vertical || n.horizontal || n, null, c, h.isIconText ? 1 : u, 1, r || 1 / 0);
                        if (h.textPlacement && !h.isIconText) for (let t = 0; t < s.length; t++) s[t].startIndex = e.length / 3;
                        if (f.push.apply(f, s), h.textPlacement && !h.isIconText) for (let n = 0; n < t[i].length; n++) e.push(t[i][n].x, t[i][n].y, 0);
                    }
                } else if (3 === a.type) {
                    const t = $n(a.geometry, 0);
                    for (let e = 0; e < t.length; e++) {
                        const n = t[e];
                        if ("vertex" === s) for (let t = 0; t < n.length; t++) {
                            const e = n[t];
                            for (let t = 0; t < e.length; t++) Be(e[t], r) || f.push(e[t]);
                        } else {
                            const t = Qn(n, 16);
                            Be(t, r) || f.push(t);
                        }
                    }
                } else if (2 === a.type) for (let t = 0; t < a.geometry.length; t++) {
                    const e = a.geometry[t];
                    if ("vertex" === s) for (let t = 0; t < e.length; t++) Be(e[t], r) || f.push(e[t]); else Be(e[0], r) || f.push(e[0]);
                } else if (1 === a.type) for (let t = 0; t < a.geometry.length; t++) {
                    const e = a.geometry[t];
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        Be(n, r) || f.push(n);
                    }
                }
                return f;
            }(t, this.lineVertex, e, n, this.options.EXTENT, s, h);
        }
        Y(t, e) {
            return this.D.markerPlacementFn ? this.D.markerPlacementFn(this.options.zoom, t.feature.properties) : e.markerPlacement || e.textPlacement;
        }
    }
    const si = Math.cos(Math.PI / 180 * 37.5), oi = Math.pow(2, 16) / 1;
    class ai extends $e {
        constructor(t, e, n) {
            super(t, e, n);
            let i = !1;
            const {lineDasharrayFn: r, lineDashColorFn: s} = this.D;
            r && (i = function(t, e, n) {
                for (let i = 0; i < t.length; i++) if (n(e, t[i].properties)) return !0;
                return !1;
            }(t, this.options.zoom, r), i && (this.dasharrayFn = r)), (ci(this.symbol.lineDasharray) || i) && s && (this.dashColorFn = s);
        }
        createStyledVector(t, e, n, i, r) {
            const s = new Je(t, e, n, i), o = s.getLineResource();
            return !this.options.atlas && o && (r[o] = [ 0, 0 ]), s;
        }
        getFormat() {
            const {lineWidthFn: t, lineStrokeWidthFn: e, lineStrokeColorFn: n, lineColorFn: i, lineOpacityFn: r, lineDxFn: s, lineDyFn: o, linePatternAnimSpeedFn: a, linePatternGapFn: l} = this.D, h = [ {
                type: Int16Array,
                width: 3,
                name: "aPosition"
            } ];
            if (h.push(this.options.center || this.iconAtlas ? {
                type: Int8Array,
                width: 3,
                name: "aExtrude"
            } : {
                type: Int8Array,
                width: 2,
                name: "aExtrude"
            }), h.push({
                type: Uint16Array,
                width: 1,
                name: "aLinesofar"
            }), t && h.push({
                type: Uint8Array,
                width: 1,
                name: "aLineWidth"
            }), e && h.push({
                type: Uint8Array,
                width: 1,
                name: "aLineStrokeWidth"
            }), i && h.push({
                type: Uint8Array,
                width: 4,
                name: "aColor"
            }), n && h.push({
                type: Uint8Array,
                width: 4,
                name: "aStrokeColor"
            }), r && h.push({
                type: Uint8Array,
                width: 1,
                name: "aOpacity"
            }), this.symbol.lineOffset && h.push({
                type: Int8Array,
                width: 2,
                name: "aExtrudeOffset"
            }), this.dasharrayFn && h.push({
                type: Uint8Array,
                width: 4,
                name: "aDasharray"
            }), this.dashColorFn && h.push({
                type: Uint8Array,
                width: 4,
                name: "aDashColor"
            }), this.iconAtlas) {
                const t = this.getIconAtlasMaxValue();
                h.push({
                    type: t > 255 ? Uint16Array : Uint8Array,
                    width: 4,
                    name: "aTexInfo"
                });
            }
            return s && h.push({
                type: Int8Array,
                width: 1,
                name: "aLineDx"
            }), o && h.push({
                type: Int8Array,
                width: 1,
                name: "aLineDy"
            }), a && h.push({
                type: Int8Array,
                width: 1,
                name: "aLinePatternAnimSpeed"
            }), l && h.push({
                type: Uint8Array,
                width: 1,
                name: "aLinePatternGap"
            }), h;
        }
        placeVector(t) {
            const {lineJoinFn: e, lineCapFn: n, lineWidthFn: i, lineStrokeWidthFn: r, lineStrokeColorFn: s, lineColorFn: o, lineOpacityFn: a, lineJoinPatternModeFn: l, lineDxFn: h, lineDyFn: c, linePatternAnimSpeedFn: u, linePatternGapFn: f} = this.D, d = this.symbol, p = t.feature, y = 3 === p.type, m = p.properties, g = this.elements;
            y && (this.elements = []);
            let v = d.lineJoin || "miter", x = d.lineCap || "butt";
            if (e && (v = e(this.options.zoom, m) || "miter"), n && (x = n(this.options.zoom, m) || "butt"), 
            i) {
                let t = i(this.options.zoom, m);
                Le(t) && (t = 4), this.feaLineWidth = t;
            } else this.feaLineWidth = d.lineWidth;
            if (r) {
                let t = r(this.options.zoom, m);
                Le(t) && (t = 0), this.feaLineStrokeWidth = t;
            } else this.feaLineStrokeWidth = d.lineStrokeWidth || 0;
            if (o && (this.feaColor = o(this.options.zoom, m) || [ 0, 0, 0, 255 ], _(this.feaColor) ? this.feaColor = [ 0, 0, 0, 0 ] : (this.feaColor = Array.isArray(this.feaColor) ? this.feaColor.map(t => 255 * t) : zt(this.feaColor).array(), 
            3 === this.feaColor.length && this.feaColor.push(255))), s && (this.feaStrokeColor = s(this.options.zoom, m) || [ 0, 0, 0, 255 ], 
            _(this.feaStrokeColor) ? this.feaStrokeColor = [ 0, 0, 0, 0 ] : (this.feaStrokeColor = Array.isArray(this.feaStrokeColor) ? this.feaStrokeColor.map(t => 255 * t) : zt(this.feaStrokeColor).array(), 
            3 === this.feaStrokeColor.length && this.feaStrokeColor.push(255))), a) {
                let t = a(this.options.zoom, m);
                Le(t) && (t = 1), this.feaOpacity = 255 * t;
            }
            if (this.dasharrayFn) {
                let t = this.dasharrayFn(this.options.zoom, m) || [ 0, 0, 0, 0 ];
                if (t.length < 4) {
                    const e = t;
                    1 === t.length ? t = [ e[0], e[0], e[0], e[0] ] : 2 === t.length ? t = [ e[0], e[1], e[0], e[1] ] : 3 === t.length && (t = [ e[0], e[1], e[2], e[2] ]);
                }
                this.feaDash = t;
            }
            if (this.dashColorFn) {
                let t = (this.dashColorFn ? this.dashColorFn(this.options.zoom, m) : this.symbol.lineDashColor) || [ 0, 0, 0, 0 ];
                t = Array.isArray(t) ? t.map(t => 255 * t) : zt(t).array(), 3 === t.length && t.push(255), 
                this.feaDashColor = t;
            }
            if (this.iconAtlas) {
                const e = t.getLineResource(), n = this.iconAtlas.glyphMap[e];
                if (this.feaTexInfo = this.feaTexInfo || [ 0, 0, 0, 0 ], n) {
                    const {tl: t, displaySize: n} = this.iconAtlas.positions[e];
                    this.feaTexInfo[0] = t[0] + 1, this.feaTexInfo[1] = t[1] + 1, this.feaTexInfo[2] = n[0] - 3, 
                    this.feaTexInfo[3] = n[1] - 3;
                } else this.feaTexInfo[0] = this.feaTexInfo[1] = this.feaTexInfo[2] = this.feaTexInfo[3] = 0;
                this.feaJoinPatternMode = l ? l(this.options.zoom, m) || 0 : d.lineJoinPatternMode || 0;
            }
            if (h) {
                let t = h(this.options.zoom, m);
                Le(t) && (t = 0), this.feaLineDx = t;
            }
            if (c) {
                let t = c(this.options.zoom, m);
                Le(t) && (t = 0), this.feaLineDy = t;
            }
            if (u) {
                let t = u(this.options.zoom, m);
                Le(t) && (t = 0), 0 !== t && (this.properties.hasPatternAnim = 1), this.feaPatternAnimSpeed = t;
            }
            if (f) {
                let t = f(this.options.zoom, m);
                Le(t) && (t = 0), this.feaLinePatternGap = t;
            }
            const b = this.options.EXTENT;
            let w = p.geometry;
            b !== 1 / 0 && 3 !== p.type && (w = Bn(p.geometry, -1, -1, b + 1, b + 1));
            for (let t = 0; t < w.length; t++) this.offset = this.data.aPosition.length / 3, 
            this.Z(w[t], p, v, x, 2, 1.05), y && (this.K(g), this.elements = []);
            y && (this.elements = g);
        }
        tt() {
            return this.iconAtlas && this.feaTexInfo[2] && this.feaTexInfo[3];
        }
        Z(t, e, n, i, r, s) {
            const o = this.tt() || ci(this.feaDash) || ci(this.symbol.lineDasharray);
            this.overscaling = 1;
            const a = this.options.EXTENT;
            if (this.distance = 0, this.scaledDistance = 0, this.totalDistance = 0, this.symbol.lineGradientProperty && e.properties && je(e.properties, "mapbox_clip_start") && je(e.properties, "mapbox_clip_end")) {
                this.clipStart = +e.properties.mapbox_clip_start, this.clipEnd = +e.properties.mapbox_clip_end;
                for (let e = 0; e < t.length - 1; e++) this.totalDistance += t[e].dist(t[e + 1]);
                this.updateScaledDistance();
            }
            const l = 3 === e.type;
            let h = t.length;
            for (;h >= 2 && t[h - 1].equals(t[h - 2]); ) h--;
            let c = 0;
            for (;c < h - 1 && t[c].equals(t[c + 1]); ) c++;
            if (h < (l ? 3 : 2)) return;
            "bevel" === n && (r = 1.05);
            const u = this.overscaling <= 16 ? 15 * a / (512 * this.overscaling) : 0, f = {
                vertexLength: 0,
                primitiveLength: 0
            };
            let d, p, y, m, g;
            this.e1 = this.e2 = -1, l && (d = t[h - 2], g = t[c].sub(d).P().T());
            for (let e = c; e < h; e++) {
                if (y = e === h - 1 ? l ? t[c + 1] : void 0 : t[e + 1], y && t[e].equals(y)) continue;
                g && (m = g), d && (p = d), d = t[e], g = y ? y.sub(d).P().T() : m, m = m || g;
                let a = m.add(g);
                0 === a.x && 0 === a.y || a.P();
                const v = m.x * g.x + m.y * g.y, x = a.x * g.x + a.y * g.y, b = 0 !== x ? 1 / x : 1 / 0, w = 2 * Math.sqrt(2 - 2 * x), A = x < si && p && y, _ = m.x * g.y - m.y * g.x > 0;
                if (!o && A && e > c) {
                    const t = d.dist(p);
                    if (t > 2 * u) {
                        const e = d.sub(d.sub(p).A(u / t).O());
                        this.updateDistance(p, e), this.addCurrentVertex(e, m, 0, 0, f), p = e;
                    }
                }
                const M = p && y;
                let S = M ? n : l ? "butt" : i;
                if (M && "round" === S && (b < s ? S = "miter" : b <= 2 && (S = "fakeround")), "miter" === S && b > r && (S = "bevel"), 
                "bevel" === S && (b > 2 && (S = "flipbevel"), b < r && (S = "miter")), p && this.updateDistance(p, d), 
                (e > c && e < h - 1 || l && e === h - 1) && o) {
                    const t = this.feaJoinPatternMode ? 0 : -m.mag() * x;
                    this.addCurrentVertex(d, m, t, t, f), this.et = 1;
                }
                if ("miter" === S) a.A(b), this.addCurrentVertex(d, a, 0, 0, f); else if ("flipbevel" === S) {
                    if (b > 100) a = g.mult(-1); else {
                        const t = b * m.add(g).mag() / m.sub(g).mag();
                        a.T().A(t * (_ ? -1 : 1));
                    }
                    this.addCurrentVertex(d, a, 0, 0, f), this.addCurrentVertex(d, a.mult(-1), 0, 0, f);
                } else if ("bevel" === S || "fakeround" === S) {
                    const t = -Math.sqrt(b * b - 1), e = _ ? t : 0, n = _ ? 0 : t;
                    if (p && this.addCurrentVertex(d, m, e, n, f), "fakeround" === S) {
                        const t = Math.round(180 * w / Math.PI / 20);
                        for (let e = 1; e < t; e++) {
                            let n = e / t;
                            if (.5 !== n) {
                                const t = n - .5;
                                n += n * t * (n - 1) * ((1.0904 + v * (v * (3.55645 - 1.43519 * v) - 3.2452)) * t * t + (.848013 + v * (.215638 * v - 1.06021)));
                            }
                            const i = g.sub(m).A(n).s(m).P().A(_ ? -1 : 1);
                            this.addHalfVertex(d, i.x, i.y, !1, _, 0, f);
                        }
                    }
                    y && this.addCurrentVertex(d, g, -e, -n, f);
                } else if ("butt" === S) this.addCurrentVertex(d, a, 0, 0, f); else if ("square" === S) {
                    const t = p ? 1 : -1;
                    this.addCurrentVertex(d, a, t, t, f);
                } else "round" === S && (p && (this.addCurrentVertex(d, m, 0, 0, f), this.addCurrentVertex(d, m, 1, 1, f, !0)), 
                y && (this.addCurrentVertex(d, g, -1, -1, f, !0), this.addCurrentVertex(d, g, 0, 0, f)));
                if (!o && A && e < h - 1) {
                    const t = d.dist(y);
                    if (t > 2 * u) {
                        const e = d.add(y.sub(d).A(u / t).O());
                        this.updateDistance(d, e), this.addCurrentVertex(e, g, 0, 0, f), d = e;
                    }
                }
                if ((e > c && e < h - 1 || l && e === c) && o) {
                    delete this.et;
                    const t = this.feaJoinPatternMode ? 0 : g.mag() * x;
                    this.addCurrentVertex(d, g, t, t, f);
                }
            }
        }
        addCurrentVertex(t, e, n, i, r, s = !1) {
            const o = e.y * i - e.x, a = -e.y - e.x * i;
            this.addHalfVertex(t, e.x + e.y * n, e.y - e.x * n, s, !1, n, r), this.addHalfVertex(t, o, a, s, !0, -i, r), 
            this.distance > oi / 2 && 0 === this.totalDistance && (this.distance = 0, this.updateScaledDistance(), 
            this.addCurrentVertex(t, e, n, i, r, s));
        }
        addHalfVertex({x: t, y: e}, n, i, r, s, o, a) {
            this.fillData(this.data, t, e, n, i, r, s, 1 * this.scaledDistance);
            const l = a.vertexLength++;
            this.e1 >= 0 && this.e2 >= 0 && (this.addElements(this.e1, this.e2, l), a.primitiveLength++), 
            s ? this.e2 = l : this.e1 = l;
        }
        fillData(t, e, n, i, r, s, o, a) {
            const {lineWidthFn: l, lineStrokeWidthFn: h, lineStrokeColorFn: c, lineColorFn: u, lineOpacityFn: f, lineDxFn: d, lineDyFn: p, linePatternAnimSpeedFn: y, linePatternGapFn: m} = this.D;
            if (this.options.center ? t.aPosition.push(e, n, 0) : t.aPosition.push(e = (e << 1) + (s ? 1 : 0), n = (n << 1) + (o ? 1 : 0), 0), 
            t.aExtrude.push(63 * i, 63 * r), this.options.center || this.iconAtlas) {
                let e = 0;
                this.options.center && (e += 2 * s + o), this.iconAtlas && (e += 4 * (this.et && this.feaJoinPatternMode ? 1 : 0)), 
                t.aExtrude.push(e);
            }
            t.aLinesofar.push(a), l && t.aLineWidth.push(Math.round(2 * this.feaLineWidth)), 
            h && t.aLineStrokeWidth.push(Math.round(2 * this.feaLineStrokeWidth)), u && t.aColor.push(...this.feaColor), 
            c && t.aStrokeColor.push(...this.feaStrokeColor), f && t.aOpacity.push(this.feaOpacity), 
            this.dasharrayFn && t.aDasharray.push(...this.feaDash), this.dashColorFn && t.aDashColor.push(...this.feaDashColor), 
            this.iconAtlas && t.aTexInfo.push(...this.feaTexInfo), d && t.aLineDx.push(this.feaLineDx), 
            p && t.aLineDy.push(this.feaLineDy), y && t.aLinePatternAnimSpeed.push(127 * this.feaPatternAnimSpeed), 
            m && t.aLinePatternGap.push(10 * this.feaLinePatternGap), this.maxPos = Math.max(this.maxPos, Math.abs(e) + 1, Math.abs(n) + 1);
        }
        addElements(t, e, n) {
            super.addElements(this.offset + t, this.offset + e, this.offset + n);
        }
        K(t) {
            const e = this.options.EXTENT, n = this.elements;
            for (let i = 0; i < n.length; i += 3) e !== 1 / 0 && (hi(this.data.aPosition, n[i], n[i + 1], 3, e) || hi(this.data.aPosition, n[i + 1], n[i + 2], 3, e)) || t.push(n[i], n[i + 1], n[i + 2]);
        }
        nt(t) {
            if (t.length <= 1) return t;
            const e = [], n = this.options.EXTENT;
            let i, r = !0;
            for (i = 0; i < t.length - 1; i++) {
                const s = li(t[i], t[i + 1], n);
                s && r || (e.push(t[i]), r = s);
            }
            return r || e.push(t[i]), e;
        }
        updateDistance(t, e) {
            this.distance += t.dist(e), this.updateScaledDistance();
        }
        updateScaledDistance() {
            this.scaledDistance = this.totalDistance > 0 ? (this.clipStart + (this.clipEnd - this.clipStart) * this.distance / this.totalDistance) * (oi - 1) : this.distance;
        }
    }
    function li(t, e, n) {
        return n !== 1 / 0 && (t.x < 0 && e.x < 0 || t.x > n && e.x > n || t.y < 0 && e.y < 0 || t.y > n && e.y > n);
    }
    function hi(t, e, n, i, r) {
        if (r === 1 / 0) return !1;
        const s = Math.floor(.5 * t[e * i]), o = Math.floor(.5 * t[e * i + 1]), a = Math.floor(.5 * t[n * i]), l = Math.floor(.5 * t[n * i + 1]);
        return s === a && (s < 0 || s > r) && o !== l || o === l && (o < 0 || o > r) && s !== a;
    }
    function ci(t) {
        if (!Array.isArray(t)) return !1;
        for (let e = 0; e < t.length; e++) if (t[e]) return !0;
        return !1;
    }
    /*!
     * from @turf/bboxClip
     * https://github.com/Turfjs/turf
     * MIT LICENSE
     */    const ui = [], fi = [];
    function di(t, e) {
        var n, i, r, s, o, a, l;
        for (i = 1; i <= 8; i *= 2) {
            for (n = [], s = !(yi(r = t[t.length - 1], e) & i), o = 0; o < t.length; o++) {
                if ((l = !(yi(a = t[o], e) & i)) !== s) {
                    const t = pi(r, a, i, e);
                    n.push(void 0 !== a.x ? new z(t[0], t[1]) : t);
                }
                l && n.push(a), r = a, s = l;
            }
            if (!(t = n).length) break;
        }
        return n;
    }
    function pi(t, e, n, i) {
        return ui[0] = void 0 === t.x ? t[0] : t.x, ui[1] = void 0 === t.y ? t[1] : t.y, 
        t = ui, fi[0] = void 0 === e.x ? e[0] : e.x, fi[1] = void 0 === e.y ? e[1] : e.y, 
        e = fi, 8 & n ? [ t[0] + (e[0] - t[0]) * (i[3] - t[1]) / (e[1] - t[1]), i[3] ] : 4 & n ? [ t[0] + (e[0] - t[0]) * (i[1] - t[1]) / (e[1] - t[1]), i[1] ] : 2 & n ? [ i[2], t[1] + (e[1] - t[1]) * (i[2] - t[0]) / (e[0] - t[0]) ] : 1 & n ? [ i[0], t[1] + (e[1] - t[1]) * (i[0] - t[0]) / (e[0] - t[0]) ] : null;
    }
    function yi(t, e) {
        ui[0] = void 0 === t.x ? t[0] : t.x, ui[1] = void 0 === t.y ? t[1] : t.y;
        var n = 0;
        return (t = ui)[0] < e[0] ? n |= 1 : t[0] > e[2] && (n |= 2), t[1] < e[1] ? n |= 4 : t[1] > e[3] && (n |= 8), 
        n;
    }
    class mi extends $e {
        constructor(...t) {
            super(...t), this.lineElements = [];
        }
        createStyledVector(t, e, n, i, r) {
            const s = new Je(t, e, n, i), o = s.getPolygonResource();
            return !this.options.atlas && o && (r[o] = [ 0, 0 ]), s;
        }
        getFormat() {
            const t = [ {
                type: Int16Array,
                width: 3,
                name: "aPosition"
            } ], {polygonFillFn: e, polygonOpacityFn: n, uvScaleFn: i, uvOffsetFn: r} = this.D;
            if (this.iconAtlas) {
                const e = this.getIconAtlasMaxValue();
                t.push({
                    type: e > 255 ? Uint16Array : Uint8Array,
                    width: 4,
                    name: "aTexInfo"
                });
            }
            return e && t.push({
                type: Uint8Array,
                width: 4,
                name: "aColor"
            }), n && t.push({
                type: Uint8Array,
                width: 1,
                name: "aOpacity"
            }), i && t.push({
                type: Uint16Array,
                width: 2,
                name: "aUVScale"
            }), r && t.push({
                type: Uint8Array,
                width: 2,
                name: "aUVOffset"
            }), t;
        }
        createDataPack(...t) {
            this.maxLineIndex = 0, this.lineElements = [];
            const e = super.createDataPack(...t);
            if (!e) return e;
            let n = this.lineElements;
            return n = new (Ie(this.maxLineIndex))(this.lineElements), e.lineIndices = n, e.buffers.push(n.buffer), 
            e;
        }
        placeVector(t, e) {
            const n = t.feature;
            this.it(n.geometry, n, e);
        }
        it(t, e) {
            let n, i, r, s;
            const {polygonFillFn: o, polygonOpacityFn: a, uvScaleFn: l, uvOffsetFn: h} = this.D, c = e.properties;
            o && (n = o(this.options.zoom, c) || [ 255, 255, 255, 255 ], _(n) ? n = [ 0, 0, 0, 0 ] : (n = Array.isArray(n) ? n.map(t => 255 * t) : zt(n).array(), 
            3 === n.length && n.push(255))), a && (i = a(this.options.zoom, c), Le(i) && (i = 1), 
            i *= 255), l && (r = l(this.options.zoom, c), Le(r) && (r = [ 1, 1 ]), r = [ 255 * r[0], 255 * r[1] ]), 
            h && (s = h(this.options.zoom, c), Le(s) && (s = [ 0, 0 ]), s = [ 255 * s[0], 255 * s[1] ]);
            const u = !!this.iconAtlas, f = $n(t, 500), d = this.getAltitude(c), p = [ 0, 0 ], y = [ 0, 0 ];
            if (u) {
                const {polygonPatternFileFn: t} = this.D, e = t ? t(null, c) : this.symbol.polygonPatternFile;
                if (this.iconAtlas.glyphMap[e]) {
                    const t = this.iconAtlas.positions[e];
                    p[0] = t.tl[0] + 1, p[1] = t.tl[1] + 1, y[0] = t.displaySize[0] - 3, y[1] = t.displaySize[1] - 3;
                }
            }
            const m = [ -1, -1, e.extent + 1, e.extent + 1 ];
            for (let t = 0; t < f.length; t++) {
                const e = f[t], o = this.data.aPosition.length / 3, a = [], l = [];
                for (let t = 0; t < e.length; t++) {
                    let o = e[t];
                    if (this.options.EXTENT !== 1 / 0 && (o = di(o, m)), 0 === o.length) continue;
                    0 !== t && l.push(a.length / 2);
                    const h = this.lineElements.length;
                    this.data.aPosition.push(o[0].x, o[0].y, d), u && this.data.aTexInfo.push(...p, ...y), 
                    void 0 !== n && this.data.aColor.push(...n), void 0 !== i && this.data.aOpacity.push(i), 
                    void 0 !== r && this.data.aUVScale.push(...r), void 0 !== s && this.data.aUVOffset.push(...s), 
                    this.maxPos = Math.max(this.maxPos, Math.abs(o[0].x), Math.abs(o[0].y)), this.addLineElements(h + o.length - 1, h), 
                    a.push(o[0].x), a.push(o[0].y);
                    for (let t = 1; t < o.length; t++) this.data.aPosition.push(o[t].x, o[t].y, d), 
                    u && this.data.aTexInfo.push(...p, ...y), void 0 !== n && this.data.aColor.push(...n), 
                    void 0 !== i && this.data.aOpacity.push(i), void 0 !== r && this.data.aUVScale.push(...r), 
                    void 0 !== s && this.data.aUVOffset.push(...s), this.maxPos = Math.max(this.maxPos, Math.abs(o[t].x), Math.abs(o[t].y)), 
                    this.addLineElements(h + t - 1, h + t), a.push(o[t].x), a.push(o[t].y);
                }
                const h = de(a, l);
                for (let t = 0; t < h.length; t += 3) this.addElements(o + h[t], o + h[t + 1], o + h[t + 2]);
            }
        }
        addLineElements(...t) {
            this.maxLineIndex = Math.max(this.maxLineIndex, ...t), this.lineElements.push(...t);
        }
    }
    class gi {
        constructor(t) {
            this.max = t, this.reset();
        }
        reset() {
            return this.data = {}, this.order = [], this;
        }
        clear() {
            this.reset();
        }
        add(t, e) {
            return this.has(t) ? (this.order.splice(this.order.indexOf(t), 1), this.data[t] = e, 
            this.order.push(t)) : (this.data[t] = e, this.order.push(t), this.order.length > this.max && this.getAndRemove(this.order[0])), 
            this;
        }
        has(t) {
            return t in this.data;
        }
        keys() {
            return this.order;
        }
        getAndRemove(t) {
            if (!this.has(t)) return null;
            const e = this.data[t];
            return delete this.data[t], this.order.splice(this.order.indexOf(t), 1), e;
        }
        get(t) {
            return this.has(t) ? this.data[t] : null;
        }
        remove(t) {
            return this.has(t) ? (delete this.data[t], this.order.splice(this.order.indexOf(t), 1), 
            this) : this;
        }
        setMaxSize(t) {
            for (this.max = t; this.order.length > this.max; ) this.getAndRemove(this.order[0]);
            return this;
        }
    }
    /*!
     * based on @mapbox/tiny-sdf
     * https://github.com/mapbox/tiny-sdf
     * @License BSD 2-Clause
     */    var vi = 1e20;
    function xi(t, e, n, i, r, s, o) {
        this.fontSize = t || 24, this.buffer = void 0 === e ? 3 : e, this.cutoff = i || .25, 
        this.fontFamily = r || "sans-serif", this.fontWeight = s || "normal", this.fontStyle = o || "normal", 
        this.radius = n || 8;
        var a = this.size = this.fontSize + 2 * this.buffer;
        this.canvas = "undefined" == typeof document ? new OffscreenCanvas(a, a) : document.createElement("canvas"), 
        this.canvas.width = this.canvas.height = a, this.ctx = this.canvas.getContext("2d"), 
        this.ctx.font = this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily, 
        this.ctx.textBaseline = "middle", this.ctx.fillStyle = "black", this.gridOuter = new Float64Array(a * a), 
        this.gridInner = new Float64Array(a * a), this.f = new Float64Array(a), this.z = new Float64Array(a + 1), 
        this.v = new Uint16Array(a), this.middle = Math.round(a / 2 * (navigator.userAgent.indexOf("Gecko/") >= 0 ? 1.2 : 1));
    }
    function bi(t, e, n, i, r, s) {
        for (var o = 0; o < e; o++) wi(t, o, e, n, i, r, s);
        for (var a = 0; a < n; a++) wi(t, a * e, 1, e, i, r, s);
    }
    function wi(t, e, n, i, r, s, o) {
        var a, l, h, c;
        for (s[0] = 0, o[0] = -vi, o[1] = vi, a = 0; a < i; a++) r[a] = t[e + a * n];
        for (a = 1, l = 0, h = 0; a < i; a++) {
            do {
                h = (r[a] - r[c = s[l]] + a * a - c * c) / (a - c) / 2;
            } while (h <= o[l] && --l > -1);
            s[++l] = a, o[l] = h, o[l + 1] = vi;
        }
        for (a = 0, l = 0; a < i; a++) {
            for (;o[l + 1] < a; ) l++;
            t[e + a * n] = r[c = s[l]] + (a - c) * (a - c);
        }
    }
    xi.prototype.draw = function(t, e, n) {
        this.ctx.clearRect(0, 0, this.size, this.size), this.ctx.textBaseline = "bottom", 
        this.ctx.fillText(t, this.buffer, n - this.buffer + 1);
        for (var i = this.ctx.getImageData(0, 0, e, n), r = new Uint8ClampedArray(e * n), s = 0; s < e * n; s++) {
            var o = i.data[4 * s + 3] / 255;
            this.gridOuter[s] = 1 === o ? 0 : 0 === o ? vi : Math.pow(Math.max(0, .5 - o), 2), 
            this.gridInner[s] = 1 === o ? vi : 0 === o ? 0 : Math.pow(Math.max(0, o - .5), 2);
        }
        for (bi(this.gridOuter, e, n, this.f, this.v, this.z), bi(this.gridInner, e, n, this.f, this.v, this.z), 
        s = 0; s < e * n; s++) {
            var a = Math.sqrt(this.gridOuter[s]) - Math.sqrt(this.gridInner[s]);
            r[s] = Math.round(255 - 255 * (a / this.radius + this.cutoff));
        }
        return r;
    };
    let Ai = 0;
    class _i {
        constructor(t, e = 15, n) {
            this.entries = {}, this.rt = {}, this.st = new gi(2048, (function() {})), this.ot = t, 
            this.at = e, this.lt = n;
        }
        getGlyphs(t, e) {
            if (!t || !Object.keys(t).length) return void e(null, {
                glyphs: null
            });
            const n = this.entries, i = t.options;
            let r = !0;
            i && (r = !1 !== i.isCharsCompact), r = r || this.lt;
            const s = (i, s, a) => {
                let l = 0, h = 0;
                for (const e in t) if ("options" !== e) {
                    n[e] = n[e] || {}, s[e] = s[e] || {};
                    for (const c in t[e]) {
                        if (h++, h <= i) continue;
                        const t = e.split(" "), u = r && "normal" === t[0] && !Pn(+c), f = e + ":" + c + ":" + u;
                        let d;
                        if (this.st.has(f) ? d = this.st.get(f) : (d = this.ht(n[e], t, c, u), this.st.add(f, d), 
                        l++), d = Mi(d), s[e][c] = d, a.push(d.bitmap.data.buffer), l > this.at) return void this.ot(o(h, s, a));
                    }
                }
                e(null, {
                    glyphs: s,
                    buffers: a
                });
            };
            function o(t, e, n) {
                return () => {
                    s(t, e, n);
                };
            }
            s(0, {}, []);
        }
        ht(t, e, n, i) {
            const r = e[0], s = e[1], o = e.slice(3).join(" ");
            let a = t.tinySDF, l = "normal" !== r ? 5 : 2;
            const h = i ? -1 : 2;
            if (!a) {
                let e = "400";
                /bolder/i.test(s) ? e = "1000" : /bold/i.test(s) ? e = "900" : /medium/i.test(s) ? e = "500" : /light/i.test(s) && (e = "200"), 
                a = t.tinySDF = new xi(24, l, 8, .25, o, e, r);
            }
            const c = String.fromCharCode(n), u = a.ctx.measureText(c), f = Math.round(u.width), d = a.draw(String.fromCharCode(n), f + 2 * l, 24 + 2 * l);
            if (Ai < 4) {
                const t = "undefined" != typeof document && document.getElementById("sdf-debug-" + Ai++);
                t && (t.width = f + 2 * l, t.height = a.canvas.height, t.getContext("2d").drawImage(a.canvas, 0, 0));
            }
            return {
                charCode: n,
                bitmap: {
                    width: f + 2 * l,
                    height: 24 + 2 * l,
                    data: d
                },
                metrics: {
                    width: f,
                    height: 24,
                    left: 0,
                    top: -7 - (l - 2),
                    advance: f + l + h
                }
            };
        }
    }
    function Mi(t) {
        const e = {
            width: t.bitmap.width,
            height: t.bitmap.height,
            data: new Uint8ClampedArray(t.bitmap.data)
        };
        return {
            charCode: t.charCode,
            bitmap: e,
            metrics: De({}, t.metrics)
        };
    }
    class Si {
        constructor(t) {
            this.options = t || {}, this.ct = {}, this.st = new gi(256, (function() {}));
            const e = document.createElement("canvas");
            this.ctx = e.getContext("2d");
        }
        getIcons(t, n) {
            if (!t || !Object.keys(t).length) return void n(null, {
                icons: null
            });
            const i = Object.keys(t), r = {}, s = [];
            let o = 0, a = 0;
            const l = this;
            function h(t, e) {
                r[t] = l.ut(t, e), r[t] && "error" !== r[t] ? s.push(r[t].data.data.buffer) : delete r[t], 
                a++, a === o && n(null, {
                    icons: r,
                    buffers: s
                });
            }
            function c(t) {
                const e = l.ct[t.url];
                for (let n = 0; n < e.length; n++) e[n].call(t, t.url, t.size);
                delete l.ct[t.url];
            }
            function u() {
                const t = l.ctx;
                let e, n;
                try {
                    const i = this.width / this.height;
                    e = this.size[0] ? this.size[0] : this.width, this.size[1] ? (n = this.size[1], 
                    this.size[0] || (e = n * i)) : n = this.size[0] ? e / i : this.height, this.size[0] = e, 
                    this.size[1] = n, l.ft(null, this.size), e = this.size[0], n = this.size[1], t.canvas.width = e, 
                    t.canvas.height = n, t.drawImage(this, 0, 0, e, n);
                    const r = t.getImageData(0, 0, e, n).data;
                    l.dt(this.url, r, e, n);
                } catch (t) {
                    console.warn(t);
                }
                c(this);
            }
            function f(t) {
                console.warn(`failed loading icon(${this.index}) at "${this.url}"`), console.warn(t), 
                l.options.iconErrorUrl ? this.src = l.options.iconErrorUrl : (l.dt(this.url), c(this));
            }
            let d, p = !1;
            for (let n = 0; n < i.length; n++) {
                const a = i[n], l = t[a];
                this.ft(a, l);
                const c = this.ut(a, l);
                if (c && "error" !== c) {
                    r[a] = this.ut(a, l);
                    continue;
                }
                if ("error" === c) continue;
                let y, m = a;
                if (0 === a.indexOf("vector://") && (y = JSON.parse(a.substring("vector://".length)), 
                "path" === y.markerType && (m = e.Util.getMarkerPathBase64(y, y.markerWidth, y.markerHeight))), 
                0 === a.indexOf("vector://") && "path" !== y.markerType) {
                    d = d || new e.Marker([ 0, 0 ]);
                    const {markerFill: t, markerLineColor: n} = y;
                    t && Array.isArray(t) && (y.markerFill = ki(t)), n && Array.isArray(n) && (y.markerLineColor = ki(n)), 
                    delete y.markerHorizontalAlignment, delete y.markerVerticalAlignment, delete y.markerDx, 
                    delete y.markerDy, delete y.markerPlacement, delete y.markerFile, y.markerWidth = l[0], 
                    y.markerHeight = l[1], d.setSymbol(y);
                    const i = d["_getSprite".trim()]();
                    if (i) {
                        const t = i.canvas, e = t.width, n = t.height, o = t.getContext("2d").getImageData(0, 0, e, n).data;
                        r[a] = {
                            data: {
                                data: new Uint8ClampedArray(o),
                                width: e,
                                height: n
                            },
                            url: a
                        }, s.push(r[a].data.data.buffer), this.dt(a, o, e, n);
                    }
                } else {
                    if (this.ct[a]) {
                        p = !0, o++, this.ct[a].push(h);
                        continue;
                    }
                    this.ct[a] = [], this.ct[a].push(h);
                    const t = new Image;
                    t.index = n, t.size = l, t.onload = u, t.onerror = f, t.onabort = f, t.url = a, 
                    t.crossOrigin = "Anonymous", p = !0, o++, t.src = m;
                }
            }
            p || n(null, {
                icons: r,
                buffers: s
            });
        }
        pt(t, e, n) {
            const i = this.st.get(t);
            return i && "error" !== i && i.data.width >= e && i.data.height >= n;
        }
        dt(t, e, n, i) {
            this.pt(t, n, i) || this.st.add(t, e ? {
                data: {
                    data: e,
                    width: n,
                    height: i
                },
                url: t
            } : "error");
        }
        ut(t, e) {
            if (!this.pt(t, e[0], e[1])) return null;
            const n = this.st.get(t);
            return n ? "error" === n ? n : {
                data: {
                    data: new Uint8ClampedArray(n.data.data),
                    width: n.data.width,
                    height: n.data.height
                },
                url: n.url
            } : null;
        }
        ft(t, e) {
            if (!e[0] || !e[1]) return;
            const n = this.options.maxSize || 254;
            let [i, r] = e;
            const s = i / r;
            if (t) {
                const e = this.st.get(t);
                if (e && "error" !== e) {
                    const {width: t, height: n} = e.data;
                    t > i && (i = t), n > r && (r = n);
                }
            }
            i > n && (r = n / s, i = n), r > n && (i = n * s, r = n), e[0] = Math.floor(i), 
            e[1] = Math.floor(r);
        }
    }
    function ki(t) {
        return 3 === t.length && t.push(1), t.reduce((t, e, n) => t + (n < 3 ? 255 * e + "," : e + ")"), "rgba(");
    }
    var Pi = Object.freeze({
        __proto__: null,
        clipPolygon: di,
        calculateSignedArea: Ge,
        getFeaAltitudeAndHeight: function(t, e, n, i, r, s, o) {
            const a = We(t.properties, n, i), l = a * e;
            let h = a;
            return r ? h = We(t.properties, r, s) : o && (h = a - We(t.properties, o, 0)), h *= e, 
            {
                altitude: l,
                height: h
            };
        },
        convertRTLText: jn
    });
    const Ti = {
        polygonPatternFile: 1,
        markerFile: 1,
        markerPlacement: 1,
        markerSpacing: 1,
        textName: 1,
        textStyle: 1,
        textFaceName: 1,
        textWeight: 1,
        textPlacement: 1,
        textSpacing: 1,
        lineJoin: 1,
        lineCap: 1,
        linePatternFile: 1
    }, Oi = {
        visible: 1,
        textHorizontalAlignment: 1,
        textVerticalAlignment: 1,
        textWrapWidth: 1,
        markerHorizontalAlignment: 1,
        markerVerticalAlignment: 1
    }, Fi = {
        lineDasharray: 1
    };
    Object.assign(Oi, Ti), Object.assign(Fi, Ti);
    const Ii = [ "GeoJSONVectorTileLayer" ];
    class Ci extends r.worker.Actor {
        constructor(t, e) {
            super(t);
            const n = e.getMap().id;
            this.yt = e, this.gt = n, this.vt = "vt_" + r.Util.UID();
            const i = e.getJSONType();
            this.xt = Ii.indexOf(i) >= 0, this.bt = {}, this.wt = new Si({
                iconErrorUrl: e.options.iconErrorUrl,
                maxSize: e.options.maxIconSize
            });
            const s = !e.getRenderer().isEnableWorkAround("win-intel-gpu-crash");
            this.At = new _i(t => {
                e.getMap().getRenderer().callInNextFrame(t);
            }, e.options.glyphSdfLimitPerFrame, s);
        }
        initialize(t) {
            t(null);
        }
        addLayer(t) {
            const e = this.yt, n = e.getWorkerOptions() || {}, i = this.vt, r = e.getJSONType(), s = {
                mapId: this.gt,
                layerId: i,
                command: "addLayer",
                params: {
                    type: r,
                    options: n
                }
            };
            this.xt ? (void 0 === this.bt[i] && (this.bt[i] = this.getDedicatedWorker()), this.send(s, null, t, this.bt[i])) : this.broadcast(s, null, t);
        }
        abortTile(t, e) {
            const n = this.vt, i = {
                mapId: this.gt,
                layerId: n,
                command: "abortTile",
                params: {
                    url: t
                }
            };
            this.xt ? (void 0 === this.bt[n] && (this.bt[n] = this.getDedicatedWorker()), this.send(i, null, e, this.bt[n])) : this.broadcast(i, null, e);
        }
        removeLayer(t) {
            const e = this.vt, n = {
                mapId: this.gt,
                layerId: e,
                command: "removeLayer"
            };
            this.xt ? (void 0 !== this.bt[e] && this.send(n, null, t, this.bt[e]), delete this.bt[e]) : this.broadcast(n, null, t);
        }
        updateStyle(t, e) {
            const n = this.vt, i = {
                mapId: this.gt,
                layerId: n,
                command: "updateStyle",
                params: t
            };
            this.xt ? void 0 !== this.bt[n] && this.send(i, null, e, this.bt[n]) : this.broadcast(i, null, e);
        }
        updateOptions(t, e) {
            const n = this.vt, i = {
                mapId: this.gt,
                layerId: n,
                command: "updateOptions",
                params: t
            };
            this.xt ? void 0 !== this.bt[n] && this.send(i, null, e, this.bt[n]) : this.broadcast(i, null, e);
        }
        loadTile(t, e) {
            const n = this.vt, i = {
                mapId: this.gt,
                layerId: n,
                command: "loadTile",
                params: {
                    tileInfo: L(t.tileInfo),
                    glScale: t.glScale,
                    zScale: t.zScale
                }
            }, {x: r, y: s} = t.tileInfo, o = (r + s) % this.workers.length;
            this.send(i, null, e, void 0 === this.bt[n] ? this.workers[o].id : this.bt[n]);
        }
        remove() {
            super.remove(), this.bt = {};
        }
        fetchIconGlyphs({icons: t, glyphs: e}, n) {
            this.At.getGlyphs(e, (e, i) => {
                if (e) throw e;
                const r = i.buffers || [];
                this.wt.getIcons(t, (t, e) => {
                    if (t) throw t;
                    e.buffers && e.buffers.length && r.push(...e.buffers), n(null, {
                        icons: e.icons,
                        glyphs: i.glyphs
                    }, r);
                });
            });
        }
        setData(t, e) {
            const n = this.vt, i = {
                mapId: this.gt,
                layerId: n,
                command: "setData",
                params: {
                    data: t
                }
            };
            this.send(i, null, e, this.bt[n]);
        }
        _t(t) {
            return t.id;
        }
    }
    const Ei = {};
    class Hi {
        constructor(t, e, n) {
            this.Mt = t, this.St = e, this.kt = n || [ 0, 1, 0 ];
        }
        draw(t, e, n, i, r) {
            this.Pt || this.Tt();
            if (!this.Ot) {
                this.Ot = this.Mt.buffer(new Uint16Array([ 0, 0, 0, i, 0, i, i, i, i, i, i, 0, i, 0, 0, 0 ]));
                const t = i / n;
                this.Ft = this.Mt.buffer(new Uint16Array([ 0, i - 64 * t, 0, i, 512 * t, i - 64 * t, 512 * t, i ]));
            }
            let s = this.It;
            if (!s) {
                const t = this.St.getDevicePixelRatio() > 1 ? 2 : 1;
                s = this.It = document.createElement("canvas"), s.width = 512 * t, s.height = 64 * t;
                const e = s.getContext("2d");
                e.font = "36px monospace", e.scale(t, t), this.Ct = this.Mt.texture({
                    width: s.width,
                    height: s.height,
                    data: s
                });
            }
            const o = s.getContext("2d");
            o.clearRect(0, 0, s.width, s.height), o.fillStyle = `rgba(${this.kt.map(t => 255 * t).join()})`, 
            o.fillText(t, 20, 36), this.Ct({
                width: s.width,
                height: s.height,
                data: s
            }), this.Pt({
                transform: e,
                data: this.Ot,
                debugLine: 1,
                primitive: "lines",
                framebuffer: r || null,
                image: this.Ct,
                count: 8
            }), this.Pt({
                transform: e,
                data: this.Ft,
                debugLine: 0,
                primitive: "triangle strip",
                framebuffer: r || null,
                image: this.Ct,
                count: 4
            });
        }
        delete() {
            this.Ct && (this.Ct.destroy(), delete this.Ct), this.Et && (this.Et.destroy(), delete this.Et), 
            this.Ot && (this.Ot.destroy(), this.Ft.destroy(), delete this.Ot, delete this.Ft), 
            this.Pt && (this.Pt.destroy(), delete this.Pt);
        }
        Tt() {
            this.Et = this.Mt.buffer(new Uint8Array([ 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1 ])), 
            this.Pt = this.Mt({
                vert: "\n                attribute vec2 aPosition;\n                attribute vec2 aTexCoord;\n                uniform mat4 transform;\n\n                varying vec2 vTexCoord;\n                void main()\n                {\n                    gl_Position = transform * vec4(aPosition, 0.0, 1.0);\n                    vTexCoord = aTexCoord;\n                }\n            ",
                frag: "\n                precision mediump float;\n                uniform sampler2D uImage;\n                uniform vec3 uColor;\n                uniform float uOpacity;\n                uniform float uDebugLine;\n\n                varying vec2 vTexCoord;\n\n                void main()\n                {\n                    if (uDebugLine == 1.) {\n                        gl_FragColor = vec4(uColor, 1.0) * uOpacity;\n                    } else {\n                        gl_FragColor = texture2D(uImage, vTexCoord) * uOpacity;\n                    }\n                    gl_FragColor *= gl_FragColor.a;\n                }\n            ",
                attributes: {
                    aPosition: this.Mt.prop("data"),
                    aTexCoord: this.Et
                },
                uniforms: {
                    transform: this.Mt.prop("transform"),
                    uColor: this.kt,
                    uOpacity: 1,
                    uDebugLine: this.Mt.prop("debugLine"),
                    uImage: this.Mt.prop("image")
                },
                count: this.Mt.prop("count"),
                primitive: this.Mt.prop("primitive"),
                depth: {
                    enable: !1,
                    mask: !1
                },
                blend: {
                    enable: !0,
                    func: {
                        src: "one",
                        dst: "one minus src alpha"
                    },
                    equation: "add"
                },
                stencil: {
                    enable: !1
                },
                viewport: {
                    x: 0,
                    y: 0,
                    width: () => this.St.getRenderer().canvas.width,
                    height: () => this.St.getRenderer().canvas.height
                },
                framebuffer: this.Mt.prop("framebuffer")
            });
        }
    }
    const Di = new Uint8Array([ 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1 ]), Li = [];
    class Ri {
        constructor(t, e, i) {
            this.Mt = t;
            (this.Ht = new n.reshader.Geometry({
                aPosition: Di
            }, null, Di.length / 2, {
                positionSize: 2
            })).generateBuffers(t), this.Dt = new n.reshader.Scene, this.Lt = [], this.Rt = 0, 
            this.Nt = e, this.St = i, this.Tt(t);
        }
        start() {
            this.Rt = 0, this.Dt.clear();
        }
        add(t, e, i) {
            const r = this.zt(i);
            r.setUniform("ref", t), n.vec3.set(Li, e, e, 1);
            const s = r.localTransform;
            n.mat4.fromScaling(s, Li), n.mat4.mul(s, i, s), r.setLocalTransform(s), this.Dt.addMesh(r);
        }
        render(t) {
            this.Vt.render(this.jt, {
                projViewMatrix: this.St.projViewMatrix
            }, this.Dt, t);
        }
        zt() {
            const t = this.Rt++;
            return this.Lt[t] || (this.Lt[t] = new n.reshader.Mesh(this.Ht)), this.Lt[t];
        }
        Tt(t) {
            const e = this.Nt, i = {
                viewport: {
                    x: 0,
                    y: 0,
                    width: () => e.width,
                    height: () => e.height
                },
                stencil: {
                    enable: !0,
                    mask: 255,
                    func: {
                        cmp: "always",
                        ref: (t, e) => e.ref,
                        mask: 255
                    },
                    op: {
                        fail: "replace",
                        zfail: "replace",
                        zpass: "replace"
                    }
                },
                depth: {
                    enable: !0,
                    func: "always",
                    mask: !1
                },
                colorMask: [ !1, !1, !1, !1 ]
            };
            this.jt = new n.reshader.MeshShader({
                vert: "\n#define SHADER_NAME TILE_STENCIL_VERT\nattribute vec2 aPosition;\nuniform mat4 projViewModelMatrix;\n\nvoid main()\n{\n    gl_Position = projViewModelMatrix * vec4(aPosition, 0.0, 1.0);\n}\n",
                frag: "\n#define SHADER_NAME TILE_STENCIL_FRAG\nvoid main()\n{\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 0.1);\n}\n",
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: i
            }), this.Vt = new n.reshader.Renderer(t);
        }
        remove() {
            this.Ht.dispose();
            for (let t = 0; t < this.Lt.length; t++) this.Lt[t].dispose();
            this.Lt.length = 0, this.jt.dispose();
        }
    }
    const Ni = [], zi = [ 0, 0, 0, 0 ], Vi = new r.Point(0, 0);
    class ji extends r.renderer.TileLayerCanvasRenderer {
        supportRenderMode() {
            return !0;
        }
        constructor(t) {
            super(t), this.ready = !1, this.Ut = 0, this.Gt = {}, this.Wt = {}, this.Bt = {}, 
            this.Xt = [];
        }
        getTileLevelValue(t, e) {
            if (this.isBackTile(t.id)) {
                const n = t.z;
                return n - e >= 0 ? 0 : e - n;
            }
            return 0;
        }
        getWorkerConnection() {
            return this.qt;
        }
        setStyle() {
            this.Jt && this.Jt.update(), this.qt ? (this.Ut++, this.qt.updateStyle(this.layer.Yt(), t => {
                if (t) throw new Error(t);
                this.$t = !0, this.clear(), this.Zt(), this.Kt(), this.setToRedraw(), this.layer.fire("refreshstyle");
            })) : this.Kt();
        }
        updateOptions(t) {
            this.qt && this.qt.updateOptions(this.layer.getWorkerOptions(), e => {
                if (e) throw new Error(e);
                (t.features || t.pickingGeometry || t.altitudeProperty) && (this.clear(), this.Zt(), 
                this.Kt()), this.setToRedraw();
            });
        }
        updateSceneConfig(t, e, n) {
            const i = 0 === t ? this.plugins : this.featurePlugins;
            if (!i || !i[e]) return;
            this.$t = !0;
            const r = this.layer.Yt(), s = this.layer.Qt(t, r);
            i[e].config = s[e].renderPlugin, i[e].updateSceneConfig({
                sceneConfig: n
            }), this.setToRedraw();
        }
        updateDataConfig(t, e, n, i) {
            const r = 0 === t ? this.plugins : this.featurePlugins;
            r && r[e] && (this.$t = !0, r[e].updateDataConfig(n, i) ? this.setStyle() : this.setToRedraw());
        }
        updateSymbol(t, e, n) {
            const i = 0 === t ? this.plugins : this.featurePlugins;
            if (!i || !i[e]) return !1;
            const r = this.layer.Yt(), s = this.layer.Qt(t, r), o = i[e];
            o.style = s[e];
            const a = o.updateSymbol(n, s[e].symbol);
            return this.setToRedraw(), a;
        }
        needToRedraw() {
            if (this.Xt.length) return !0;
            const t = super.needToRedraw();
            if (!t) {
                const t = this.te();
                for (let e = 0; e < t.length; e++) if (t[e] && t[e].needToRedraw()) return !0;
            }
            return t;
        }
        needRetireFrames() {
            if (this.$t) return !0;
            const t = this.te();
            for (let e = 0; e < t.length; e++) if (t[e] && t[e].needToRetireFrames()) return !0;
            return !1;
        }
        createContext() {
            const t = this.canvas.gl && this.canvas.gl.wrap;
            t ? (this.gl = this.canvas.gl.wrap(), this.regl = this.canvas.gl.regl) : this.ee(), 
            t && (this.canvas.pickingFBO = this.canvas.pickingFBO || this.regl.framebuffer(this.canvas.width, this.canvas.height)), 
            this.pickingFBO = this.canvas.pickingFBO || this.regl.framebuffer(this.canvas.width, this.canvas.height), 
            this.ne = new Hi(this.regl, this.getMap()), this.ie(), this.Jt = new n.GroundPainter(this.regl, this.layer);
        }
        ee() {
            const t = this.layer, e = t.options.glOptions || {
                alpha: !0,
                depth: !0,
                antialias: this.layer.options.antialias
            };
            e.preserveDrawingBuffer = !0, e.stencil = !0, this.glOptions = e, this.gl = this.gl || this.re(this.canvas, e), 
            this.regl = n.createREGL({
                gl: this.gl,
                attributes: e,
                extensions: [ "ANGLE_instanced_arrays", "OES_element_index_uint", "OES_standard_derivatives" ],
                optionalExtensions: t.options.glExtensions || [ "OES_vertex_array_object", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_texture_float", "OES_texture_float_linear", "WEBGL_draw_buffers", "EXT_shader_texture_lod" ]
            });
        }
        ie() {
            this.qt || (this.qt = new Ci("@maptalks/vt", this.layer));
            this.qt.addLayer((t, e) => {
                this.layer && (this.ready = !0, this.layer.onWorkerReady(t, e), this.layer.fire("workerready"), 
                this.setToRedraw());
            });
        }
        clearCanvas() {
            super.clearCanvas(), this.regl && (this.glOptions.depth ? this.regl.clear({
                color: zi,
                depth: 1,
                stencil: 0
            }) : this.regl.clear({
                color: zi,
                stencil: 0
            }));
        }
        isDrawable() {
            return !0;
        }
        checkResources() {
            return Ni;
        }
        draw(t, e) {
            this.se !== t && (this.$t = !1, this.oe());
            const n = this.layer;
            this.prepareCanvas(), this.ready && n.ready ? (this.plugins || this.Kt(), n.isDefaultRender() || this.plugins.length || this.featurePlugins.length ? (n.options.collision && (n.clearCollisionIndex(), 
            n.clearBackgroundCollisionIndex()), this.ae = t, this.le = this.he(this.getMap().getGLRes()), 
            this.ce = e || {}, this.ue(t), this.fe(), super.draw(t), this.se !== t && this.de(t), 
            this.pe(t), this.completeRender(), this.se = t) : this.completeRender()) : this.completeRender();
        }
        oe() {
            this.te().forEach((t, e) => {
                t.renderIndex = e;
            });
        }
        de() {
            const t = this.te();
            this.ye = [];
            let e = +!!this.layer.getGroundConfig().enable;
            t.forEach((t, n) => {
                t.isVisible() && Wi(t) && (this.ye[n] = e, t.needPolygonOffset() && e++);
            }), this.me = e;
        }
        getFrameTimestamp() {
            return this.ae;
        }
        drawOnInteracting(t, e, n) {
            this.draw(e, n);
        }
        drawOutline(t) {
            (this.ge || this.ve) && (this.ve ? this.paintOutlineAll(t) : this.ge.forEach(e => {
                this[e[0]](t, ...e[1]);
            }));
        }
        getShadowMeshes() {
            const t = [];
            return this.te().forEach((e, n) => {
                if (!e) return;
                if (!this.xe(n)) return;
                const i = e.getShadowMeshes();
                if (Array.isArray(i)) for (let e = 0; e < i.length; e++) t.push(i[e]);
            }), t;
        }
        isForeground(t) {
            return !(!this.be || !this.be[t.properties.tile.id]);
        }
        isBackTile(t) {
            return !(!this.we || !this.we[t]);
        }
        loadTile(t) {
            const {url: e} = t, n = this.Gt[e];
            if (n) n.keys[t.id] || (n.tiles.push(t), n.keys[t.id] = 1); else {
                const n = this.getTileGLScale(t.z);
                this.Gt[e] = {
                    keys: {},
                    tiles: [ t ]
                }, this.Gt[e].keys[t.id] = 1, this.qt.loadTile({
                    tileInfo: t,
                    glScale: n,
                    zScale: this.le
                }, this.Ae.bind(this, e));
            }
            return {};
        }
        getTileGLScale(t) {
            const e = this.getMap();
            return this.layer.getSpatialReference().getResolution(t) / e.getGLRes();
        }
        Ae(t, e, n) {
            if (!this.Gt[t]) return;
            if (n && n.canceled) return;
            const i = this.layer, r = i.isDefaultRender(), {tiles: s} = this.Gt[t];
            if (delete this.Gt[t], e) {
                if (e.status && 404 === e.status) for (let t = 0; t < s.length; t++) {
                    const e = s[t];
                    this.onTileError(Ei, e);
                }
                return;
            }
            if (!n) {
                for (let t = 0; t < s.length; t++) {
                    const e = s[t];
                    this.onTileLoad({
                        _e: !0
                    }, e);
                }
                return;
            }
            if (n.style !== this.Ut) return;
            let o = !1;
            const a = n.features, l = [];
            for (let t = 0; t < n.data.length; t++) {
                const e = n.data[t];
                if (!e || !e.data || !e.styledFeatures.length) continue;
                const {isUpdated: i, layer: r} = this.Me(0, t, e, a, l);
                l.push(r), i && (o = i);
            }
            for (let t = 0; t < n.featureData.length; t++) {
                const e = n.featureData[t];
                e && e.data && e.styledFeatures.length && this.Me(1, t, e, a);
            }
            o && i.Se();
            const h = s[0].z, c = this.layer.getDataSchema(h);
            if (this.ke(c, n.schema), delete n.features, r && n.data.length !== l.length) {
                const t = n.data;
                n.data = [];
                for (let e = 0; e < t.length; e++) t[e] && t[e].features && n.data.push(t[e]);
            }
            n.layers = l;
            for (let t = 0; t < s.length; t++) {
                const e = s[t], i = 0 === t ? n : Ui(n);
                this.Xt.push({
                    tileData: i,
                    tileInfo: e
                });
            }
            this.layer.fire("datareceived");
        }
        Me(t, e, n, i) {
            const {style: r, isUpdated: s} = this.Pe(t, e, n.data), o = this.layer, a = o.isDefaultRender(), l = r.symbol, h = n.styledFeatures, c = {};
            if (function(t) {
                if (!t) return !1;
                for (const e in t) if (void 0 !== t[e] && null !== t[e]) return !0;
                return !1;
            }(i)) for (let t = 0, n = h.length; t < n; t++) {
                let n = i[h[t]];
                "id" === o.options.features && o.getFeature && (n = o.getFeature(n), n.layer = e), 
                c[h[t]] = {
                    feature: n,
                    symbol: l
                };
            }
            delete n.styledFeatures, n.features = c;
            let u = n.data;
            return Array.isArray(u) && (u = u[0]), {
                isUpdated: s,
                layer: a ? {
                    layer: u.layer,
                    type: u.type
                } : null
            };
        }
        ke(t, e) {
            for (const n in e) {
                t[n] || (t[n] = {
                    types: e[n].types,
                    properties: {}
                });
                const i = e[n].properties, r = t[n].properties;
                for (const t in i) (!r[t] || r[t] && "object" !== i[t] && "object" === r[t]) && (r[t] = i[t]);
            }
        }
        Pe(t, e, n) {
            Array.isArray(n) && (n = n[0]);
            const i = this.layer;
            let r, s = !1;
            if (i.isDefaultRender() && 0 === t) {
                let t = this.Te;
                t || (t = this.Te = {});
                const e = n.layer, i = n.type;
                t[e] || (t[e] = []);
                const o = ("plugin_" + i).trim();
                t[e][o] ? r = t[e][o] : (r = this.Oe(i), r.filter = n.filter, t[e].push(r), t[e][o] = r, 
                s = !0);
            } else {
                const o = i.Yt();
                if (r = i.Qt(t, o)[e], !r.renderPlugin) {
                    s = !0;
                    const {plugin: t, symbol: i, renderPlugin: o} = this.Oe(n.type);
                    this.plugins[e] = t, r.symbol = i, r.renderPlugin = o;
                }
            }
            return {
                style: r,
                isUpdated: s
            };
        }
        te(t) {
            let e = this.plugins || [];
            return this.layer.isDefaultRender() && this.Te && (e = [], t ? t.layers.forEach(t => {
                const n = ("plugin_" + t.type).trim();
                e.push(this.Te[t.layer][n].plugin);
            }) : Object.keys(this.Te).forEach(t => {
                for (let n = 0; n < this.Te[t].length; n++) e.push(this.Te[t][n].plugin);
            })), this.featurePlugins && this.featurePlugins.length && (e = e.slice(), D(e, this.featurePlugins)), 
            e;
        }
        Fe() {
            if (this.layer.isDefaultRender() && this.Te) {
                const t = [];
                return Object.keys(this.Te).forEach(e => {
                    for (let n = 0; n < this.Te[e].length; n++) t.push(this.Te[e][n].plugin);
                }), t;
            }
            return this.plugins;
        }
        ue(t) {
            const e = this.layer.isDefaultRender() && this.Te, n = this.ce;
            this.te().forEach((i, r) => {
                if (!i) return;
                if (!this.xe(r)) return;
                const s = e ? i.defaultSymbol : i.style && i.style.symbol, o = {
                    regl: this.regl,
                    layer: this.layer,
                    symbol: s,
                    gl: this.gl,
                    sceneConfig: i.config ? i.config.sceneConfig : null,
                    dataConfig: i.config ? i.config.dataConfig : null,
                    pluginIndex: r,
                    timestamp: t
                };
                n && F(o, n), i.startFrame(o);
            });
        }
        pe(t) {
            const e = this.ce, n = e.renderMode, i = e && e.renderTarget && e.renderTarget.fbo, r = this.getMap().cameraPosition, s = this.te();
            this.layer.options.collision ? s.forEach(e => {
                if (!Wi(e)) return;
                if (n && "default" !== n && !e.supportRenderMode(n)) return;
                const i = this.Ie(e, 0, r, t);
                e.prepareRender(i), e.updateCollision(i);
            }) : s.forEach(e => {
                if (!Wi(e)) return;
                if (n && "default" !== n && !e.supportRenderMode(n)) return;
                const i = this.Ie(e, 0, r, t);
                e.prepareRender(i);
            });
            const o = !e.timestamp || e.isFinalRender, a = this.se !== e.timestamp;
            let l = !1;
            if (a) {
                const e = -this.layer.getPolygonOffset(), n = this.Ie(null, e, r, t);
                n.offsetFactor = n.offsetUnits = e, this.Jt.paint(n);
            }
            s.forEach((e, s) => {
                if (!this.Ce(e)) return;
                if (n && "default" !== n && !e.supportRenderMode(n)) return;
                this.regl.clear({
                    stencil: 255,
                    fbo: i
                }), this.isEnableTileStencil() && e.painter && !e.painter.needClearStencil() && this.Ee(i);
                const o = this.ye[s] || 0, a = this.Ie(e, o, r, t), h = e.endFrame(a);
                h && h.redraw && this.setToRedraw(), l = !0;
            }), l && this.layer.fire("canvasisdirty"), o && this.He();
        }
        getPolygonOffsetCount() {
            return this.me || 0;
        }
        He() {
            if (this.layer.options.debug) {
                const t = this.ce, e = [], i = this.getMap().projViewMatrix;
                for (const r in this.tilesInView) {
                    const s = this.tilesInView[r].info, o = s.transform, a = this.tilesInView[r].image.extent, l = t && t.renderTarget;
                    o && a && this.ne.draw(this.getDebugInfo(s.id), n.mat4.multiply(e, i, o), this.layer.getTileSize().width, a, l && l.fbo);
                }
            }
        }
        Ce(t) {
            if (!t) return !0;
            const e = t.renderIndex, n = this.ce, i = this.xe(e), r = n && n.states && n.states.includesChanged, s = this.De(t.painter.scene.getMeshes());
            return !i || !r && !s ? 0 : s ? 2 : 1;
        }
        Ie(t, e, n, i) {
            const r = {
                regl: this.regl,
                layer: this.layer,
                gl: this.gl,
                sceneConfig: t && t.config.sceneConfig,
                pluginIndex: t && t.renderIndex,
                polygonOffsetIndex: e,
                cameraPosition: n,
                timestamp: i
            }, s = this.ce;
            return s && F(r, s), r;
        }
        De(t) {
            if (!t) return !1;
            const e = this.ce && this.ce.sceneFilter;
            return e ? t.filter(e).length > 0 : t.length > 0;
        }
        Ee(t) {
            const e = this.isEnableTileStencil(), n = this.getCurrentTileZoom();
            let i = this.Le;
            i || (i = this.Le = new Ri(this.regl, this.canvas, this.getMap())), i.start();
            const {tiles: r} = this.Re;
            let {parentTiles: s, childTiles: o} = this.Re, a = 1;
            o = o.sort(Gi);
            for (let t = 0; t < o.length; t++) this.Ne(o[t].info, e ? a : this.getTileLevelValue(o[t].info.z, n)), 
            a++;
            s = s.sort(Gi);
            for (let t = 0; t < s.length; t++) this.Ne(s[t].info, e ? a : this.getTileLevelValue(s[t].info.z, n)), 
            a++;
            const l = r.sort(Gi);
            for (let t = l.length - 1; t >= 0; t--) this.Ne(l[t].info, e ? a : this.getTileLevelValue(l[t].info.z, n)), 
            a++;
            i.render(t);
        }
        Ne(t, e) {
            const n = this.ze, i = Vi.set(t.extent2d.xmin, t.extent2d.ymax), r = t.transform = t.transform || this.calculateTileMatrix(i, t.z);
            t.stencilRef = e, this.Le.add(e, n, r);
        }
        onDrawTileStart(t) {
            super.onDrawTileStart(t);
            const {tiles: e, childTiles: n, parentTiles: i} = t;
            this.be = {}, this.we = {};
            for (let t = 0; t < e.length; t++) this.be[e[t].info.id] = 1;
            for (let t = 0; t < n.length; t++) this.we[n[t].info.id] = 1;
            for (let t = 0; t < i.length; t++) this.we[i[t].info.id] = 1;
            this.Re = t;
        }
        isEnableTileStencil() {
            return this.layer.isOnly2D();
        }
        drawTile(t, e) {
            if (!e.cache) return;
            const n = e.cache, i = Vi.set(t.extent2d.xmin, t.extent2d.ymax), r = t.transform = t.transform || this.calculateTileMatrix(i, t.z), s = t.tileTranslationMatrix = t.tileTranslationMatrix || this.calculateTileTranslationMatrix(i, t.z), o = [];
            D(o, e.data), D(o, e.featureData);
            this.te(e).forEach((i, a) => {
                if (!i) return;
                const l = this.xe(a);
                if (!o[a] || !l) return;
                if (!n[a]) return;
                const h = {
                    regl: this.regl,
                    layer: this.layer,
                    gl: this.gl,
                    sceneConfig: i.config.sceneConfig,
                    pluginIndex: a,
                    tileCache: n[a],
                    tileData: o[a],
                    tileTransform: r,
                    tileTranslationMatrix: s,
                    tileExtent: e.extent,
                    timestamp: this.ae,
                    tileInfo: t,
                    tileZoom: this._tileZoom,
                    bloom: this.ce && this.ce.bloom
                }, c = i.paintTile(h);
                !this.$t && (c.retire || c.redraw) && i.supportRenderMode("taa") && (this.$t = !0), 
                c.redraw && this.setToRedraw();
            }), this.setCanvasUpdated();
        }
        Ve(t, e) {
            if (!e.loadTime || e._e) return;
            let n = e.cache;
            n || (n = e.cache = {}), this.ze || (this.ze = e.extent);
            const i = Vi.set(t.extent2d.xmin, t.extent2d.ymax), r = t.transform = t.transform || this.calculateTileMatrix(i, t.z), s = t.tileTranslationMatrix = t.tileTranslationMatrix || this.calculateTileTranslationMatrix(i, t.z), o = [];
            D(o, e.data), D(o, e.featureData);
            this.te(e).forEach((i, a) => {
                if (!i) return;
                const l = this.xe(a);
                if (!o[a] || !l) return;
                n[a] || (n[a] = {});
                const h = {
                    regl: this.regl,
                    layer: this.layer,
                    gl: this.gl,
                    sceneConfig: i.config.sceneConfig,
                    pluginIndex: a,
                    tileCache: n[a],
                    tileData: o[a],
                    tileTransform: r,
                    tileTranslationMatrix: s,
                    tileExtent: e.extent,
                    timestamp: this.ae,
                    tileInfo: t,
                    tileZoom: this._tileZoom
                }, c = i.createTile(h);
                n[a].geometry && (o[a] = 1), !this.$t && c.retire && i.supportRenderMode("taa") && (this.$t = !0);
            });
        }
        fe() {
            let t = 0;
            const e = this.layer.options.meshLimitPerFrame, n = this.Xt;
            for (;n.length && t < e; ) {
                const {tileData: e, tileInfo: i} = n.shift();
                this.onTileLoad(e, i), this.Ve(i, e), t++;
            }
        }
        pick(t, e, n) {
            const i = [];
            return this.te().forEach((r, s) => {
                if (!r) return;
                if (!this.xe(s)) return;
                const o = r.pick(t, e, n.tolerance);
                o && (o.type = r.getType(), i.push(o));
            }), i;
        }
        deleteTile(t) {
            if (t) {
                if (t.image && !t.image._e) {
                    const e = this.Fe();
                    e && e.forEach((e, n) => {
                        e && e.deleteTile({
                            pluginIndex: n,
                            regl: this.regl,
                            layer: this.layer,
                            gl: this.gl,
                            tileCache: t.image.cache ? t.image.cache[n] : {},
                            tileInfo: t.info,
                            tileData: t.image
                        });
                    }), t.image.cache = {};
                }
                super.deleteTile(t);
            }
        }
        abortTileLoading(t, e) {
            e && e.url && (this.qt && this.qt.abortTile(e.url), delete this.Gt[e.url]), super.abortTileLoading(t, e);
        }
        resizeCanvas(t) {
            super.resizeCanvas(t);
            const e = this.canvas;
            e && (!this.pickingFBO || this.pickingFBO.width === e.width && this.pickingFBO.height === e.height || this.pickingFBO.resize(e.width, e.height), 
            this.te().forEach(t => {
                t && t.resize(e.width, e.height);
            }));
        }
        onRemove() {
            this.Le && this.Le.remove(), this.qt && (this.qt.removeLayer(t => {
                if (t) throw t;
            }), this.qt.remove(), delete this.qt), this.pickingFBO && (this.canvas.pickingFBO || this.pickingFBO.destroy(), 
            delete this.pickingFBO), this.ne && this.ne.delete(), super.onRemove && super.onRemove(), 
            this.Zt();
        }
        Zt() {
            this.te().forEach(t => {
                t.remove();
            }), this.plugins = [];
        }
        hitDetect(t) {
            if (!this.gl || !this.layer.options.hitDetect) return !1;
            const e = this.gl, n = new Uint8Array(4), i = this.canvas.height;
            return e.readPixels(t.x, i - t.y, 1, 1, e.RGBA, e.UNSIGNED_BYTE, n), n[3] > 0;
        }
        Kt() {
            const {style: t, featureStyle: e} = this.layer.Yt(), n = t.map((t, e) => {
                const n = t.renderPlugin;
                if (!n) return null;
                if (!n.type) throw new Error("invalid plugin type for style at " + e);
                const i = this.je(n);
                return i.style = t, i;
            }), i = [];
            return e.forEach((t, e) => {
                const n = t.renderPlugin;
                if (!n) return null;
                if (!n.type) throw new Error("invalid plugin type for features at " + e);
                const r = this.je(n);
                return r.style = t, i.push(r), r;
            }), this.plugins = n, this.featurePlugins = i, this.layer.fire("pluginsinited"), 
            n;
        }
        je(t) {
            const e = this.layer.constructor.getPlugins()[t.type];
            if (!e) throw new Error(`Plugin for (${t.type}) is not loaded.`);
            const n = new e;
            return n.config = t, n.config.sceneConfig || (n.config.sceneConfig = {}), n;
        }
        re(t, e) {
            const n = [ "webgl", "experimental-webgl" ];
            let i = null;
            for (let r = 0; r < n.length; ++r) {
                try {
                    i = t.getContext(n[r], e);
                } catch (t) {}
                if (i) break;
            }
            return i;
        }
        he(t) {
            return this.getMap().distanceToPointAtRes(1e3, 0, t).x / 1e3 / 10;
        }
        debugFBO(t, e) {
            const n = document.getElementById(t), i = e.width, r = e.height;
            n.width = i, n.height = r;
            const s = n.getContext("2d"), o = this.regl.read({
                framebuffer: e
            }), a = r / 2 | 0, l = 4 * i;
            for (let t = 0; t < o.length; t++) o[t] *= 255;
            const h = new Uint8Array(4 * i);
            for (let t = 0; t < a; ++t) {
                const e = t * l, n = (r - t - 1) * l;
                h.set(o.subarray(e, e + l)), o.copyWithin(e, n, n + l), o.set(h, n);
            }
            const c = new ImageData(i, r);
            c.data.set(o), s.putImageData(c, 0, 0);
        }
        Oe(t) {
            let e;
            switch (t) {
              case "native-line":
                e = {
                    type: "native-line",
                    dataConfig: {
                        type: "native-line",
                        only2D: !0
                    }
                };
                break;

              case "native-point":
                e = {
                    type: "native-point",
                    dataConfig: {
                        type: "native-point",
                        only2D: !0
                    }
                };
                break;

              case "fill":
                e = {
                    type: "fill",
                    dataConfig: {
                        type: "fill",
                        only2D: !0
                    },
                    sceneConfig: {
                        antialias: !0
                    }
                };
                break;

              default:
                e = null;
            }
            const n = function(t) {
                switch (t) {
                  case "native-point":
                    return {
                        markerFill: "#f00",
                        markerSize: 6,
                        markerOpacity: .5
                    };

                  case "native-line":
                    return {
                        lineColor: "#bbb",
                        lineOpacity: .5
                    };

                  case "fill":
                    return {
                        polygonFill: "#00f",
                        polygonOpacity: .6
                    };
                }
                return null;
            }(t), i = this.je(e);
            return i.defaultSymbol = n, {
                plugin: i,
                symbol: n,
                renderPlugin: e
            };
        }
        xe() {
            return !0;
        }
        isEnableWorkAround(t) {
            return "win-intel-gpu-crash" === t && (this.layer.options.workarounds["win-intel-gpu-crash"] && function(t) {
                const e = t.getExtension("WEBGL_debug_renderer_info");
                if (e && "undefined" != typeof navigator) {
                    const n = t.getParameter(e.UNMASKED_RENDERER_WEBGL), i = "Win32" === navigator.platform || "Win64" === navigator.platform;
                    if (n && n.toLowerCase().indexOf("intel") >= 0 && i) return !0;
                }
                return !1;
            }(this.gl));
        }
        isCachePlaced(t) {
            return 1 === this.Bt[t];
        }
        placeCache(t) {
            this.Bt[t] = 1;
        }
        fetchCache(t) {
            return this.Wt[t] && this.Wt[t].resource;
        }
        removeCache(t) {
            delete this.Bt[t];
            const e = this.Wt[t];
            e && (e.count--, e.count <= 0 && (e.onDelete && e.onDelete(e.resource), delete this.Wt[t]));
        }
        addToCache(t, e, n) {
            delete this.Bt[t], this.Wt[t] ? this.Wt[t].count++ : this.Wt[t] = {
                resource: e,
                onDelete: n,
                count: 1
            };
        }
        getZScale() {
            return this.le;
        }
        outline(t, e) {
            e && (Array.isArray(e) || (e = [ e ]), this.ge || (this.ge = []), this.ge.push([ "paintOutline", [ t, e ] ]), 
            this.setToRedraw());
        }
        outlineBatch(t) {
            this.ge || (this.ge = []), this.ge.push([ "paintBatchOutline", [ t ] ]), this.setToRedraw();
        }
        outlineAll() {
            this.ve = !0, this.setToRedraw();
        }
        paintOutlineAll(t) {
            const e = this.te();
            for (let n = 0; n < e.length; n++) e[n].outlineAll(t);
        }
        paintOutline(t, e, n) {
            const i = e, r = this.te();
            !r[i] || r[i].painter && !r[i].painter.isVisible() || r[i].outline(t, n);
        }
        paintBatchOutline(t, e) {
            const n = this.te();
            !n[e] || n[e].painter && !n[e].painter.isVisible() || n[e].outlineAll(t);
        }
        cancelOutline() {
            delete this.ge, delete this.ve, this.setToRedraw();
        }
        setZIndex() {
            return this.setToRedraw(), this.$t = !0, super.setZIndex.apply(this, arguments);
        }
    }
    function Ui(t) {
        let e;
        Array.isArray(t.data) ? (e = [], D(e, t.data)) : (e = {}, F(e, t.data));
        const n = F({}, t);
        return n.data = e, n;
    }
    function Gi(t, e) {
        return e.info.z - t.info.z;
    }
    function Wi(t) {
        const e = t.painter && t.painter.scene && t.painter.scene.getMeshes();
        return e && e.length;
    }
    ji.include({
        calculateTileMatrix: function() {
            const t = new Array(3), e = new Array(3), i = new Array(3);
            return function(r, s) {
                const o = this.ze, a = this.getTileGLScale(s), l = r, h = this.layer.getTileSize(), c = n.mat4.identity([]);
                return n.mat4.scale(c, c, n.vec3.set(t, a, a, this.le)), n.mat4.translate(c, c, n.vec3.set(e, l.x, l.y, 0)), 
                n.mat4.scale(c, c, n.vec3.set(i, h.width / o, -h.height / o, 1)), c;
            };
        }(),
        calculateTileTranslationMatrix: function() {
            const t = new Array(3);
            return function(e, i) {
                const r = this.getTileGLScale(i), s = e, o = n.mat4.identity([]);
                return n.mat4.translate(o, o, n.vec3.set(t, s.x * r, s.y * r, 0)), o;
            };
        }()
    });
    var Bi = Array.isArray, Xi = Object.keys, qi = Object.prototype.hasOwnProperty, Ji = function t(e, n) {
        if (e === n) return !0;
        if (e && n && "object" == typeof e && "object" == typeof n) {
            var i, r, s, o = Bi(e), a = Bi(n);
            if (o && a) {
                if ((r = e.length) != n.length) return !1;
                for (i = r; 0 != i--; ) if (!t(e[i], n[i])) return !1;
                return !0;
            }
            if (o != a) return !1;
            var l = e instanceof Date, h = n instanceof Date;
            if (l != h) return !1;
            if (l && h) return e.getTime() == n.getTime();
            var c = e instanceof RegExp, u = n instanceof RegExp;
            if (c != u) return !1;
            if (c && u) return e.toString() == n.toString();
            var f = Xi(e);
            if ((r = f.length) !== Xi(n).length) return !1;
            for (i = r; 0 != i--; ) if (!qi.call(n, f[i])) return !1;
            for (i = r; 0 != i--; ) if (!t(e[s = f[i]], n[s])) return !1;
            return !0;
        }
        return e != e && n != n;
    };
    function Yi(t, e, n) {
        for (let i = 0; i < t.length; i++) {
            const r = t[i], s = F({}, r), {renderPlugin: o} = r, a = F({}, o);
            a.sceneConfig && !Object.keys(a.sceneConfig).length && delete a.sceneConfig;
            let l = -1;
            for (let t = n.length - 1; t >= 0; t--) if (Ji(a, n[t])) {
                l = t;
                break;
            }
            l < 0 && (l = n.length, n.push(a)), s.renderPlugin = l, e.push(s);
        }
    }
    const $i = "function" == typeof fetch && "function" == typeof AbortController, Zi = {
        jsonp: function(t, e) {
            const n = "_maptalks_jsonp_" + T++;
            t.match(/\?/) ? t += "&callback=" + n : t += "?callback=" + n;
            let i = document.createElement("script");
            return i.type = "text/javascript", i.src = t, window[n] = function(t) {
                e(null, t), document.getElementsByTagName("head")[0].removeChild(i), i = null, delete window[n];
            }, document.getElementsByTagName("head")[0].appendChild(i), this;
        },
        get: function(t, e, n) {
            if (E(e)) {
                const t = n;
                n = e, e = t;
            }
            (e = e || {}).method && (e.method = e.method.toUpperCase());
            const i = "POST" === e.method;
            if ($i) {
                const r = new AbortController, s = {
                    signal: r.signal,
                    method: e.method || "GET",
                    referrerPolicy: "origin"
                };
                return i && (H(e.body) || (s.body = JSON.stringify(e.body))), H(e.headers) || (s.headers = e.headers), 
                H(e.credentials) || (s.credentials = e.credentials), fetch(t, s).then(t => {
                    const i = this.Ue(t, e.returnJSON, e.responseType);
                    i.message ? n(i) : i.then(i => {
                        "arraybuffer" === e.responseType ? n(null, {
                            data: i,
                            cacheControl: t.headers.get("Cache-Control"),
                            expires: t.headers.get("Expires"),
                            contentType: t.headers.get("Content-Type")
                        }) : n(null, i);
                    }).catch(t => {
                        t.code && t.code === DOMException.ABORT_ERR || (console.error(t), n(t));
                    });
                }).catch(t => {
                    t.code && t.code === DOMException.ABORT_ERR || (console.error(t), n(t));
                }), r;
            }
            {
                const r = Zi.Ge(n);
                if (r.open(e.method || "GET", t, !0), e) {
                    for (const t in e.headers) r.setRequestHeader(t, e.headers[t]);
                    r.withCredentials = "include" === e.credentials, e.responseType && (r.responseType = e.responseType);
                }
                return r.send(i ? e.body : null), r;
            }
        },
        Ue: (t, e, n) => 200 !== t.status ? {
            status: t.status,
            statusText: t.statusText,
            message: `incorrect http request with status code(${t.status}): ${t.statusText}`
        } : "arraybuffer" === n ? t.arrayBuffer() : e ? t.json() : t.text(),
        We: function(t, e) {
            return function() {
                if (4 === t.readyState) if (200 === t.status) if ("arraybuffer" === t.responseType) {
                    0 === t.response.byteLength ? e({
                        status: 200,
                        statusText: t.statusText,
                        message: "http status 200 returned without content."
                    }) : e(null, {
                        data: t.response,
                        cacheControl: t.getResponseHeader("Cache-Control"),
                        expires: t.getResponseHeader("Expires"),
                        contentType: t.getResponseHeader("Content-Type")
                    });
                } else e(null, t.responseText); else e({
                    status: t.status,
                    statusText: t.statusText,
                    message: `incorrect http request with status code(${t.status}): ${t.statusText}`
                });
            };
        },
        Ge: function(t) {
            let e;
            try {
                e = new XMLHttpRequest;
            } catch (t) {
                try {
                    e = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (t) {
                    try {
                        e = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (t) {}
                }
            }
            return e.onreadystatechange = Zi.We(e, t), e;
        },
        getArrayBuffer(t, e, n) {
            if (E(e)) {
                const t = n;
                n = e, e = t;
            }
            return e || (e = {}), e.responseType = "arraybuffer", Zi.get(t, e, n);
        },
        getJSON: function(t, e, n) {
            if (E(e)) {
                const t = n;
                n = e, e = t;
            }
            const i = function(t, e) {
                const i = "string" == typeof e ? JSON.parse(e) : e || null;
                n(t, i);
            };
            return e && e.jsonp ? Zi.jsonp(t, i) : ((e = e || {}).returnJSON = !0, Zi.get(t, e, i));
        }
    }, Ki = {
        renderer: "gl",
        altitudeProperty: "altitude",
        forceRenderOnZooming: !0,
        forceRenderOnMoving: !0,
        forceRenderOnRotating: !0,
        tileSize: [ 512, 512 ],
        tileSystem: [ 1, -1, -6378137 * Math.PI, 6378137 * Math.PI ],
        features: !0,
        schema: !1,
        cascadeTiles: !0,
        collision: !0,
        picking: !0,
        pickingPoint: !1,
        pickingGeometry: !1,
        glyphSdfLimitPerFrame: 15,
        meshLimitPerFrame: 1,
        maxCacheSize: 72,
        antialias: !1,
        iconErrorUrl: null,
        collisionFrameLimit: 1.5,
        defaultRendering: !0,
        textGamma: 1,
        maxIconSize: 254,
        workarounds: {
            "win-intel-gpu-crash": !0
        },
        pyramidMode: 1,
        styleScale: 1,
        spatialReference: null
    };
    class Qi extends r.TileLayer {
        constructor(t, e) {
            super(t, e), this.VERSION = Qi.VERSION;
            const n = e && e.style;
            this.setStyle(n);
        }
        onAdd() {
            const t = this.getMap(), e = this.getSpatialReference().toJSON().projection, n = t.getSpatialReference().toJSON().projection;
            if ((e && e.toLowerCase()) !== (n && n.toLowerCase())) throw new Error(`VectorTileLayer's projection(${e}) must be the same with map(${n}).`);
        }
        onWorkerReady() {}
        onConfig(t) {
            const e = this.getRenderer();
            e && e.updateOptions(t);
        }
        getWorkerOptions() {
            const t = this.getMap();
            return {
                debug: this.options.debug,
                debugTile: this.options.debugTile,
                altitudeProperty: this.options.altitudeProperty,
                tileSize: this.options.tileSize,
                baseRes: t.getGLRes(),
                style: this.isDefaultRender() ? {
                    style: [],
                    featureStyle: []
                } : this.Yt(),
                features: this.options.features,
                schema: this.options.schema,
                pickingGeometry: this.options.pickingGeometry
            };
        }
        setStyle(t) {
            if (t && (I(t) || t.url)) {
                const e = t, n = e.lastIndexOf("/"), i = n < 0 ? "." : e.substring(0, n);
                return this.ready = !1, Zi.getJSON(t.url ? t.url : t, t.url ? t : {}, (t, n) => {
                    if (t) throw this.setStyle([]), t;
                    let r;
                    n.style ? (r = n, r.$root || (r.$root = i)) : r = {
                        $root: i,
                        style: n
                    }, this.setStyle(r), this.options.style = e;
                }), this;
            }
            if (this.options.style = t, t && (t.$root || t.$iconset)) {
                let e = t.$root, n = t.$iconset;
                e && "/" === e[e.length - 1] && (e = e.substring(0, e.length - 1)), n && "/" === n[n.length - 1] && (n = n.substring(0, n.length - 1)), 
                this.j = function(t) {
                    return "{$root}" === t ? e : "{$iconset}" === t ? n : null;
                };
            }
            this.ready = !0, t = t || [], (Array.isArray(t) || t.renderPlugin) && (t = {
                style: t
            }), t = function(t) {
                if (!t.plugins) return t;
                const {plugins: e, styles: n} = t;
                let {style: i, featureStyle: r} = n;
                i = i || [], r = r || [];
                const s = new Array(i.length);
                for (let t = 0; t < i.length; t++) s[t] = F({}, i[t]), s[t].renderPlugin = e[i[t].renderPlugin];
                const o = new Array(r.length);
                for (let t = 0; t < r.length; t++) o[t] = F({}, r[t]), o[t].renderPlugin = e[r[t].renderPlugin];
                const a = {
                    style: s,
                    featureStyle: o
                };
                return t.$root && (a.$root = t.$root), t.$iconset && (a.$iconset = t.$iconset), 
                a;
            }(t = JSON.parse(JSON.stringify(t))), this.Be = t.featureStyle || [], this.Xe = function(t) {
                if (!t || !Array.isArray(t)) return [];
                const e = [];
                for (let n = 0; n < t.length; n++) {
                    const i = t[n].style;
                    if (i && Array.isArray(i) && i.length) for (let r = 0; r < i.length; r++) {
                        const s = F({}, t[n], i[r]);
                        i[r].qe = e.length, delete s.style, e.push(s);
                    } else e.push(F({}, t[n]));
                }
                return e;
            }(t.featureStyle), this.Je = t.style || [];
            const e = t.background || {};
            this.Ye = {
                enable: e.enable || !1,
                color: er(e.color) || [ 0, 0, 0, 0 ],
                opacity: nr(e.opacity, 1),
                patternFile: e.patternFile,
                depthRange: e.depthRange
            }, this.validateStyle(), this.j && this.$e(), this.Se();
            const n = this.getRenderer();
            return n && n.setStyle(), this.fire("setstyle", {
                style: this.getStyle(),
                computedStyle: this.getComputedStyle()
            }), this;
        }
        getPolygonOffsetCount() {
            const t = this.getRenderer();
            return t ? t.getPolygonOffsetCount() : 0;
        }
        getPolygonOffset() {
            return this.Ze || 0;
        }
        setPolygonOffset(t, e) {
            return this.Ze = t, this.Ke = e, this;
        }
        getTotalPolygonOffset() {
            return this.Ke;
        }
        outlineAll() {
            const t = this.getRenderer();
            return t ? (t.outlineAll(), this) : this;
        }
        outline(t, e) {
            const n = this.getRenderer();
            return n ? (n.outline(t, e), this) : this;
        }
        outlineBatch(t) {
            const e = this.getRenderer();
            return e ? (e.outlineBatch(t), this) : this;
        }
        cancelOutline() {
            const t = this.getRenderer();
            return t ? (t.cancelOutline(), this) : this;
        }
        $e() {
            r.Util.convertStylePath(this.Je, this.j), r.Util.convertStylePath(this.Xe, this.j);
        }
        updateSceneConfig(t, e) {
            return this.Qe(0, t, e);
        }
        updateFeatureSceneConfig(t, e, n) {
            return this.Qe(1, t, n, e);
        }
        Qe(t, e, n, i) {
            const r = this.Qt(t);
            if (!r) return this;
            let s, o = e;
            if (r[e].renderPlugin.sceneConfig || (r[e].renderPlugin.sceneConfig = {}), F(r[e].renderPlugin.sceneConfig, n), 
            void 0 !== i) {
                ir(this.Be, e, i), o = this.Be[e].style[i].qe;
                const t = r[o].renderPlugin;
                t.sceneConfig || (t.sceneConfig = {}), s = t.sceneConfig;
            } else rr(r, e), s = r[e].renderPlugin.sceneConfig;
            if (F(s, n), Array.isArray(this.options.style)) {
                const t = this.options.style[e].renderPlugin;
                t.sceneConfig || (t.sceneConfig = {}), F(t.sceneConfig, n);
            } else {
                const r = this.Qt(t, this.options.style);
                let s;
                void 0 !== i ? (ir(r, e, i), s = r[e].style[i].renderPlugin) : (rr(r, e), s = r[e].renderPlugin), 
                s.sceneConfig || (s.sceneConfig = {}), F(s.sceneConfig, n);
            }
            const a = this.getRenderer();
            return a && a.updateSceneConfig(t, o, n), 0 === t ? this.fire("updatesceneconfig", {
                index: e,
                sceneConfig: n
            }) : 1 === t && this.fire("updatefeaturesceneconfig", {
                index: e,
                styleIdx: i,
                sceneConfig: n
            }), this;
        }
        updateDataConfig(t, e) {
            return this.tn(0, t, e);
        }
        updateFeatureDataConfig(t, e, n) {
            return this.tn(1, t, n, e);
        }
        tn(t, e, n, i) {
            const r = this.Qt(t);
            if (!r) return this;
            let s, o = e;
            void 0 !== i ? (ir(this.Be, e, i), o = this.Be[e].style[i].qe, s = r[o].renderPlugin.dataConfig) : (rr(r, e), 
            s = r[e].renderPlugin.dataConfig);
            const a = F({}, s);
            if (F(s, n), Array.isArray(this.options.style)) F(this.options.style[e].renderPlugin.dataConfig, n); else {
                const r = this.Qt(t, this.options.style);
                let s;
                void 0 !== i ? (ir(r, e, i), s = r[e].style[i].renderPlugin) : (rr(r, e), s = r[e].renderPlugin), 
                s.dataConfig || (s.dataConfig = {}), F(s.dataConfig, n);
            }
            const l = this.getRenderer();
            return l && l.updateDataConfig(t, o, n, a), 0 === t ? this.fire("updatedataconfig", {
                index: e,
                dataConfig: n
            }) : 1 === t && this.fire("updatefeaturedataconfig", {
                index: e,
                styleIdx: i,
                dataConfig: n
            }), this;
        }
        updateSymbol(t, e) {
            return this.en(0, t, e);
        }
        updateFeatureSymbol(t, e, n) {
            return this.en(1, t, n, e);
        }
        en(t, e, n, i) {
            const s = this.Qt(t);
            if (!s) return this;
            let o = e;
            void 0 !== i && (ir(this.Be, e, i), o = this.Be[e].style[i].qe);
            const a = s[o];
            if (!a) throw new Error("No style defined at " + e);
            const l = this, h = this.j;
            function c(n, s, o) {
                if (!n) return !1;
                h && (n = JSON.parse(JSON.stringify(n)), r.Util.parseSymbolPath(n, h));
                const a = Object.keys(n);
                let c = !1;
                for (let t = 0; t < a.length; t++) {
                    const e = a[t];
                    if (tr(s[e]) || tr(n[e])) {
                        c = !0;
                        break;
                    }
                }
                for (const t in n) N(n, t) && (!r.Util.isObject(n[t]) || Array.isArray(n[t]) || n[t].stops ? s[t] = n[t] : (s[t] || (s[t] = {}), 
                F(s[t], n[t])));
                let u = l.options.style;
                Array.isArray(u) || (u = l.Qt(t, l.options.style));
                const f = JSON.parse(JSON.stringify(s));
                return void 0 !== i ? (ir(u, e, i), void 0 === o ? u[e].style[i].symbol = f : u[e].style[i].symbol[o] = f) : (rr(u, e), 
                void 0 === o ? u[e].symbol = f : u[e].symbol[o] = f), c;
            }
            const u = this.getRenderer();
            if (!u) return c(), this.Se(), this;
            let f = !1;
            const d = a.symbol;
            if (Array.isArray(n)) for (let t = 0; t < n.length; t++) {
                const e = c(n[t], d[t], t);
                e && (f = e);
            } else c(n, d);
            return this.Se(), f ? u.setStyle() : (f = u.updateSymbol(t, o, n), f && u.setStyle()), 
            0 === t ? this.fire("updatesymbol", {
                index: e,
                symbol: n
            }) : 1 === t && this.fire("updatefeaturesymbol", {
                index: e,
                featureStyleIndex: i,
                symbol: n
            }), this;
        }
        Qt(t, e) {
            if (e) {
                return 0 === t ? e.style : e.featureStyle;
            }
            return 0 === t ? this.Je : this.Xe;
        }
        isDefaultRender() {
            return !!this.nn && this.options.defaultRendering;
        }
        validateStyle() {
            this.in = !0, this.nn = !1;
            let t = this.Je;
            this.options.style || (this.nn = !0, t = this.Je = []), Array.isArray(t) || (t = this.Je = [ t ]);
            for (let e = 0; e < t.length; e++) {
                let n = t[e].filter;
                if (n && n.value && (n = n.value), void 0 !== n && "default" !== n && !0 !== n && !Array.isArray(n)) throw new Error(`Invalid filter at ${e} : ${JSON.stringify(n)}`);
                t[e].renderPlugin.dataConfig.only2D || (this.in = !1);
            }
        }
        getStyle() {
            return this.options.style ? JSON.parse(JSON.stringify(this.options.style)) : null;
        }
        getGroundConfig() {
            this.rn || (this.rn = {
                enable: !0,
                renderPlugin: {
                    type: "fill",
                    sceneConfig: {}
                },
                symbol: {
                    polygonFill: [ 0, 0, 0, 0 ],
                    polygonOpacity: 1
                }
            });
            const t = this.Yt().background || {};
            return this.rn.enable = t.enable, this.rn.symbol.polygonFill = t.color, this.rn.symbol.polygonOpacity = t.opacity, 
            this.rn.symbol.polygonPatternFile = t.patternFile, this.rn.renderPlugin.sceneConfig.depthRange = t.depthRange, 
            this.rn;
        }
        getComputedStyle() {
            return JSON.parse(JSON.stringify(this.Yt()));
        }
        Yt() {
            return {
                background: this.Ye,
                style: this.Je || [],
                featureStyle: this.Xe || []
            };
        }
        isOnly2D() {
            return this.in;
        }
        getCompiledStyle() {
            return {
                style: this.sn || [],
                featureStyle: this.an || []
            };
        }
        identify(t, e = {}) {
            const n = this.getMap(), i = this.getRenderer();
            if (!n || !i) return [];
            const s = n.coordToContainerPoint(new r.Coordinate(t));
            return this.identifyAtPoint(s, e);
        }
        identifyAtPoint(t, e = {}) {
            const n = this.getMap(), i = this.getRenderer();
            if (!n || !i) return [];
            const r = n.getDevicePixelRatio();
            return i.pick(t.x * r, t.y * r, e);
        }
        getBackgroundCollisionIndex() {
            return this.ln || (this.ln = new r.CollisionIndex), this.ln;
        }
        clearBackgroundCollisionIndex() {
            return this.ln && this.ln.clear(), this;
        }
        getDataSchema(t) {
            return this.hn || (this.hn = {}), H(t) || this.hn[t] || (this.hn[t] = {}), H(t) ? this.hn : this.hn[t];
        }
        onRemove() {
            super.onRemove();
        }
        static fromJSON(t) {
            return t && "VectorTileLayer" === t.type ? new Qi(t.id, t.options) : null;
        }
        Se() {
            this.Je && (this.sn = R(this.Je)), this.Xe && (this.an = R(this.Xe));
        }
        static registerPlugin(t) {
            Qi.plugins || (Qi.plugins = {}), Qi.plugins[t.type] = t;
        }
        static getPlugins() {
            return Qi.plugins || {};
        }
        static compressStyleJSON(t) {
            return Array.isArray(t) && t.length ? function(t) {
                Array.isArray(t) && (t = {
                    style: t,
                    featureStyle: []
                });
                const e = [], n = [], i = [];
                Yi(t.style, e, i), Yi(t.featureStyle, n, i);
                const r = {
                    plugins: i,
                    styles: {
                        style: e,
                        featureStyle: n
                    }
                };
                return t.$root && (r.$root = t.$root), t.$iconset && (r.$iconset = t.$iconset), 
                r;
            }(t) : t;
        }
    }
    function tr(t) {
        return !(!t || !t.properties);
    }
    function er(t) {
        return t ? (Array.isArray(t) || (t = zt(t).unitArray()), 3 === t.length && t.push(1), 
        t) : null;
    }
    function nr(t, e) {
        return null == t ? e : t;
    }
    function ir(t, e, n) {
        if (!t[e] || !t[e].style || !t[e].style[n]) throw new Error(`No plugin defined at feature style of ${e} - ${n}`);
    }
    function rr(t, e) {
        if (!t[e]) throw new Error("No plugin defined at style of " + e);
    }
    Qi.prototype._getTileZoom = function(t) {
        return t = Math.floor(t), r.TileLayer.prototype._getTileZoom.call(this, t);
    }, Qi.registerJSONType("VectorTileLayer"), Qi.mergeOptions(Ki), Qi.registerRenderer("gl", ji), 
    Qi.registerRenderer("canvas", null);
    class sr extends Qi {
        getTileUrl(t, e, n) {
            const i = this.getMap().getResolution(n);
            return super.getTileUrl(t, e, function(t) {
                return 19 - Math.log(t / or) / Math.LN2;
            }(i));
        }
        static fromJSON(t) {
            return t && "MapboxVectorTileLayer" === t.type ? new sr(t.id, t.options) : null;
        }
    }
    sr.registerJSONType("MapboxVectorTileLayer");
    const or = 12756274 * Math.PI / (256 * Math.pow(2, 20));
    class ar extends Qi {
        constructor(t, e = {}) {
            e.spatialReference = null, super(t, e), this.setData(e.data);
        }
        getWorkerOptions() {
            const t = super.getWorkerOptions();
            let e = this.options.data;
            return e = I(e) || e && e.url ? hr(e) : this.features, t.data = e, t.tileBuffer = this.options.tileBuffer, 
            t.extent = this.options.extent, t;
        }
        setData(t) {
            if (this.options.data = t, t && (I(t) || t.url)) {
                return !!this.getRenderer() && this.cn(), this;
            }
            return this.un(t), this.cn(), this;
        }
        un(t) {
            if (this.options.convertFn) {
                t = new Function("data", this.options.convertFn + "\nreturn convert(data)")(t);
            }
            return this.features = t, this.dn(), this;
        }
        cn() {
            const t = this.getRenderer();
            if (t) {
                const e = t.getWorkerConnection();
                if (e) {
                    let n = this.options.data;
                    n = I(n) || n.url ? hr(n) : this.features, e.setData(n, (e, n) => {
                        t.clear(), this.onWorkerReady(null, n), t.setToRedraw();
                    });
                }
            }
        }
        getExtent() {
            return this.pn;
        }
        onWorkerReady(t, e) {
            t ? this.fire("dataerror", {
                error: t
            }) : (e && (e.extent && this.yn(e.extent), e.idMap && (this.mn = e.idMap)), this.fire("dataload", {
                extent: e && e.extent
            }));
        }
        yn(t) {
            this.pn = new r.Extent(...t);
        }
        gn(t, e) {
            I(t) ? Zi.getJSON(t, e) : Zi.getJSON(t.url, t, e);
        }
        getData() {
            return this.features || null;
        }
        getTileUrl(t, e, n) {
            return this.getId() + "," + t + "," + e + "," + n;
        }
        getFeature(t) {
            return this.mn[t];
        }
        static fromJSON(t) {
            return t && "GeoJSONVectorTileLayer" === t.type ? new ar(t.id, t.options) : null;
        }
        dn() {
            if (!this.features) return;
            if (this.features = JSON.parse(JSON.stringify(this.features)), !this.features) return;
            let t = 0;
            this.mn = {};
            const e = this.features;
            Array.isArray(e) ? e.forEach(e => {
                void 0 !== e.id && null !== e.id || (e.id = t++), this.mn[e.id] = e;
            }) : e.features && e.features.forEach(e => {
                void 0 !== e.id && null !== e.id || (e.id = t++), this.mn[e.id] = e;
            });
        }
    }
    function lr(t) {
        let e = document.createElement("a");
        return e.href = t, t = e.href, e = null, t;
    }
    function hr(t) {
        return t.url ? t.url = lr(t.url) : t = lr(t), t;
    }
    ar.registerJSONType("GeoJSONVectorTileLayer"), ar.mergeOptions({
        features: "id",
        tileBuffer: 64,
        extent: 8192,
        pyramidMode: 1
    });
    class cr extends r.OverlayLayer {
        static registerPainter(t, e) {
            cr.painters || (cr.painters = {}), cr.painters[t] = e;
        }
        static get3DPainterClass(t) {
            return cr.painters[t];
        }
        constructor(...t) {
            super(...t), this.options.sceneConfig || (this.options.sceneConfig = {});
        }
        updateSymbol(t, e) {
            if (!this.options.style) throw new Error("can't call update symbol when style is not set");
            const n = Array.isArray(this.options.style) ? this.options.style : this.options.style.style;
            if (!n[t]) throw new Error("invalid style at " + t);
            return F(n[t].symbol, e), this.setStyle(this.options.style), this;
        }
        getPolygonOffsetCount() {
            return 1;
        }
        getPolygonOffset() {
            return this.Ze || 0;
        }
        setPolygonOffset(t, e) {
            return this.Ze = t, this.Ke = e, this;
        }
        getTotalPolygonOffset() {
            return this.Ke;
        }
        identify(t, e = {}) {
            const n = this.getMap(), i = this.getRenderer();
            if (!n || !i) return [];
            const s = n.coordToContainerPoint(new r.Coordinate(t));
            return this.identifyAtPoint(s, e);
        }
        identifyAtPoint(t, e = {}) {
            const n = this.getMap(), i = this.getRenderer();
            if (!n || !i) return [];
            const r = this.getMap().getDevicePixelRatio();
            return i.pick(t.x * r, t.y * r, e);
        }
        getComputedStyle() {
            return {
                style: this.getStyle() || []
            };
        }
        outlineAll() {
            const t = this.getRenderer();
            return t ? (t.outlineAll(), this) : this;
        }
        outline(t) {
            if (!Array.isArray(t) || !t.length) return this;
            const e = this.getRenderer();
            return e ? (e.outline(t), this) : this;
        }
        cancelOutline() {
            const t = this.getRenderer();
            return t ? (t.cancelOutline(), this) : this;
        }
        toJSON() {
            const t = {
                type: this.getJSONType(),
                id: this.getId(),
                options: this.config(),
                geometries: []
            }, e = this.getGeometries();
            for (let n = 0, i = e.length; n < i; n++) {
                const i = e[n].toJSON();
                t.geometries.push(i);
            }
            return t;
        }
    }
    cr.mergeOptions({
        picking: !0,
        renderer: "gl",
        collision: !1,
        textGamma: 1,
        geometryEvents: !0,
        styleScale: 1,
        forceRenderOnZooming: !0,
        forceRenderOnMoving: !0,
        forceRenderOnRotating: !0,
        workarounds: {
            "win-intel-gpu-crash": !0
        }
    });
    const ur = new r.Point(0, 0), fr = "_vector3dlayer_id";
    function dr(t, e, n) {
        const i = "__fea_idx".trim(), s = t.getMap(), o = s.getGLRes();
        let a = t.getCoordinates();
        const l = [];
        let h = 1;
        if (t instanceof r.Marker || t instanceof r.MultiPoint) {
            t instanceof r.Marker && (a = [ a ]);
            for (let t = 0; t < a.length; t++) s.coordToPointAtRes(a[t], o, ur), l.push([ ur.x, ur.y ]);
        } else if (t instanceof r.LineString || t instanceof r.MultiLineString) {
            h = 2, t instanceof r.LineString && (a = [ a ]);
            for (let t = 0; t < a.length; t++) {
                l[t] = [];
                for (let e = 0; e < a[t].length; e++) s.coordToPointAtRes(a[t][e], o, ur), l[t].push([ ur.x, ur.y ]);
            }
        } else if (t instanceof r.Polygon || t instanceof r.MultiPolygon) {
            h = 3, t instanceof r.Polygon && (a = [ a ]);
            let e = 0;
            for (let t = 0; t < a.length; t++) for (let n = 0; n < a[t].length; n++) {
                l[e] = [];
                for (let i = 0; i < a[t][n].length; i++) s.coordToPointAtRes(a[t][n][i], o, ur), 
                l[e].push([ ur.x, ur.y ]);
                e++;
            }
        }
        const c = t.getProperties() ? Object.assign({}, t.getProperties()) : {}, u = t._getInternalSymbol(), f = n ? Array.isArray(n) ? n[0][i] : n[i] : e.id++;
        if (Array.isArray(u) && u.length) {
            const r = [], s = u.length;
            for (let o = 0; o < s; o++) {
                const a = o === s - 1 ? c : F({}, c);
                for (const t in u[o]) if (N(u[o], t)) {
                    a[("_symbol_" + t).trim()] = u[o][t];
                }
                const d = n && n[o] ? n[o][i] : e.pickingId++, p = {
                    type: h,
                    id: f,
                    properties: a,
                    visible: t.isVisible(),
                    geometry: l,
                    extent: 1 / 0
                };
                p[i] = d, r.push(p);
            }
            return r;
        }
        for (const t in u) if (N(u, t)) {
            c[("_symbol_" + t).trim()] = u[t];
        }
        const d = n ? n.id : e.pickingId++, p = {
            type: h,
            id: f,
            properties: c,
            visible: t.isVisible(),
            geometry: l,
            extent: 1 / 0
        };
        return p[i] = d, p;
    }
    const pr = {
        markerFile: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerFile"
        },
        markerWidth: {
            type: "identity",
            default: 20,
            property: "_symbol_markerWidth"
        },
        markerHeight: {
            type: "identity",
            default: 20,
            property: "_symbol_markerHeight"
        },
        markerPathWidth: {
            type: "identity",
            default: 20,
            property: "_symbol_markerPathWidth"
        },
        markerPathHeight: {
            type: "identity",
            default: 20,
            property: "_symbol_markerPathHeight"
        },
        markerDx: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerDx"
        },
        markerDy: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerDy"
        },
        markerType: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerType"
        },
        markerPath: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerPath"
        },
        markerFill: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerFill"
        },
        markerFillPatternFile: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerFillPatternFile"
        },
        markerFillOpacity: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerFillOpacity"
        },
        markerLineColor: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerLineColor"
        },
        markerLineWidth: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerLineWidth"
        },
        markerLineOpacity: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerLineOpacity"
        },
        markerLineDasharray: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerLineDasharray"
        },
        markerLinePatternFile: {
            type: "identity",
            default: void 0,
            property: "_symbol_markerLinePatternFile"
        },
        markerVerticalAlignment: {
            type: "identity",
            default: "top",
            property: "_symbol_markerVerticalAlignment"
        },
        markerHorizontalAlignment: {
            type: "identity",
            default: "middle",
            property: "_symbol_markerHorizontalAlignment"
        },
        markerOpacity: {
            type: "identity",
            default: 1,
            property: "_symbol_markerOpacity"
        },
        markerPitchAlignment: {
            type: "identity",
            default: "viewport",
            property: "_symbol_markerPitchAlignment"
        },
        markerRotationAlignment: {
            type: "identity",
            default: "viewport",
            property: "_symbol_markerRotationAlignment"
        },
        markerRotation: {
            type: "identity",
            default: 0,
            property: "_symbol_markerRotation"
        },
        markerAllowOverlap: {
            type: "identity",
            default: 0,
            property: "_symbol_markerAllowOverlap"
        },
        markerIgnorePlacement: {
            type: "identity",
            default: 0,
            property: "_symbol_markerIgnorePlacement"
        },
        markerTextFit: {
            type: "identity",
            default: null,
            property: "_symbol_markerTextFit"
        },
        markerSpacing: {
            type: "identity",
            default: 250,
            property: "_symbol_markerSpacing"
        },
        markerTextFitPadding: {
            type: "identity",
            default: null,
            property: "_symbol_markerTextFitPadding"
        },
        markerPlacement: {
            type: "identity",
            default: "point",
            property: "_symbol_markerPlacement"
        }
    }, yr = {
        textName: {
            type: "identity",
            default: void 0,
            property: "_symbol_textName"
        },
        textFaceName: {
            type: "identity",
            default: void 0,
            property: "_symbol_textFaceName"
        },
        textWeight: {
            type: "identity",
            default: void 0,
            property: "_symbol_textWeight"
        },
        textStyle: {
            type: "identity",
            default: void 0,
            property: "_symbol_textStyle"
        },
        textWrapWidth: {
            type: "identity",
            default: void 0,
            property: "_symbol_textWrapWidth"
        },
        textHorizontalAlignment: {
            type: "identity",
            default: void 0,
            property: "_symbol_textHorizontalAlignment"
        },
        textVerticalAlignment: {
            type: "identity",
            default: void 0,
            property: "_symbol_textVerticalAlignment"
        },
        textFill: {
            type: "identity",
            default: void 0,
            property: "_symbol_textFill"
        },
        textSize: {
            type: "identity",
            default: void 0,
            property: "_symbol_textSize"
        },
        textHaloRadius: {
            type: "identity",
            default: void 0,
            property: "_symbol_textHaloRadius"
        },
        textHaloFill: {
            type: "identity",
            default: void 0,
            property: "_symbol_textHaloFill"
        },
        textHaloOpacity: {
            type: "identity",
            default: 1,
            property: "_symbol_textHaloOpacity"
        },
        textDx: {
            type: "identity",
            default: void 0,
            property: "_symbol_textDx"
        },
        textDy: {
            type: "identity",
            default: void 0,
            property: "_symbol_textDy"
        },
        textOpacity: {
            type: "identity",
            default: 1,
            property: "_symbol_textOpacity"
        },
        textPitchAlignment: {
            type: "identity",
            default: "viewport",
            property: "_symbol_textPitchAlignment"
        },
        textRotationAlignment: {
            type: "identity",
            default: "viewport",
            property: "_symbol_textRotationAlignment"
        },
        textRotation: {
            type: "identity",
            default: 0,
            property: "_symbol_textRotation"
        },
        textAllowOverlap: {
            type: "identity",
            default: 0,
            property: "_symbol_textAllowOverlap"
        },
        textIgnorePlacement: {
            type: "identity",
            default: 0,
            property: "_symbol_textIgnorePlacement"
        },
        textSpacing: {
            type: "identity",
            default: 250,
            property: "_symbol_textSpacing"
        },
        textPlacement: {
            type: "identity",
            default: "point",
            property: "_symbol_textPlacement"
        }
    }, mr = {
        lineWidth: {
            type: "identity",
            default: 2,
            property: "_symbol_lineWidth"
        },
        lineStrokeWidth: {
            type: "identity",
            default: 0,
            property: "_symbol_lineStrokeWidth"
        },
        lineColor: {
            type: "identity",
            default: [ 1, 0, 0, 1 ],
            property: "_symbol_lineColor"
        },
        lineStrokeColor: {
            type: "identity",
            default: [ 0, 0, 0, 0 ],
            property: "_symbol_lineStrokeColor"
        },
        lineDx: {
            type: "identity",
            default: 0,
            property: "_symbol_lineDx"
        },
        lineDy: {
            type: "identity",
            default: 0,
            property: "_symbol_lineDy"
        },
        linePatternFile: {
            type: "identity",
            default: void 0,
            property: "_symbol_linePatternFile"
        },
        linePatternAnimSpeed: {
            type: "identity",
            default: 0,
            property: "_symbol_linePatternAnimSpeed"
        },
        linePatternGap: {
            type: "identity",
            default: 0,
            property: "_symbol_linePatternGap"
        },
        lineJoinPatternMode: {
            type: "identity",
            default: 0,
            property: "_symbol_lineJoinPatternMode"
        },
        lineOpacity: {
            type: "identity",
            default: 1,
            property: "_symbol_lineOpacity"
        },
        lineJoin: {
            type: "identity",
            default: void 0,
            property: "_symbol_lineJoin"
        },
        lineCap: {
            type: "identity",
            default: void 0,
            property: "_symbol_lineCap"
        },
        lineDasharray: {
            type: "identity",
            default: void 0,
            property: "_symbol_lineDasharray"
        },
        lineDashColor: {
            type: "identity",
            default: void 0,
            property: "_symbol_lineDashColor"
        }
    };
    let gr = 1;
    const vr = "_symbol_", xr = "__fea_idx".trim();
    let br = new Float32Array(1);
    class wr extends r.renderer.CanvasRenderer {
        constructor(...t) {
            super(...t), this.features = {}, this.vn = {}, this.Rt = 1, this.xn = {}, this.bn = {}, 
            this.wn = {}, this.An = {}, this._n = {}, this.Mn = !0, this.Sn = {
                id: 0,
                pickingId: 0
            }, this.kn = F({}, pr, yr), this.Pn = {};
        }
        hasNoAARendering() {
            return !0;
        }
        needToRedraw() {
            const t = super.needToRedraw();
            return t || (this.painter && this.painter.needToRedraw() || this.Tn && this.Tn.needToRedraw() || this.On && this.On.needToRedraw());
        }
        draw(t, e) {
            const n = this.layer;
            if (this.prepareCanvas(), this.le = this.he(this.getMap().getGLRes()), this.Mn) this.buildMesh(), 
            this.Fn(), this.In(), this.Pn = {}, this.Cn = !1, this.Mn = !1, this.En = !1; else if (this.Cn) {
                const t = this.atlas, e = this.Hn, n = this.Dn;
                delete this.atlas, delete this.Hn, delete this.Dn, this.buildMesh(t), this.Fn(e), 
                this.In(n), this.Cn = !1, this.En = !1;
            } else if (this.En) {
                const t = this.Dn;
                delete this.Dn, this.In(t), this.En = !1;
            }
            if (!this.meshes && !this.Ln && !this.Rn) return void this.completeRender();
            this.Nn && (this.zn(), this.Nn = !1), this.Vn(), n.options.collision && n.clearCollisionIndex(), 
            this.ae = t, this.ce = e || {};
            const i = this.jn();
            let r = 0;
            this.painter && this.meshes && (this.painter.startFrame(i), this.painter.addMesh(this.meshes, null, {
                bloom: 1
            }), this.painter.prepareRender(i), i.polygonOffsetIndex = r++, this.painter.render(i)), 
            this.Rn && (this.On.startFrame(i), this.On.addMesh(this.Rn, null, {
                bloom: 1
            }), this.On.prepareRender(i), i.polygonOffsetIndex = r++, this.On.render(i)), this.Ln && (this.Tn.startFrame(i), 
            this.Tn.addMesh(this.Ln, null, {
                bloom: 1
            }), this.Tn.prepareRender(i), n.options.collision && this.Tn.updateCollision(i), 
            this.Tn.render(i)), this.completeRender(), this.layer.fire("canvasisdirty");
        }
        supportRenderMode(t) {
            return "noAa" === t;
        }
        isForeground() {
            return !0;
        }
        jn() {
            const t = {
                regl: this.regl,
                layer: this.layer,
                symbol: this.Un,
                gl: this.gl,
                sceneConfig: this.layer.options.sceneConfig,
                pluginIndex: 0,
                cameraPosition: this.getMap().cameraPosition,
                timestamp: this.getFrameTimestamp()
            };
            return this.ce && F(t, this.ce), t;
        }
        drawOnInteracting(t, e, n) {
            this.draw(e, n);
        }
        getFrameTimestamp() {
            return this.ae;
        }
        Gn() {
            const t = [], e = [ 0, 0, 0, 0 ];
            this.layer._sortGeometries();
            const n = this.layer.getGeometries();
            for (let i = 0; i < n.length; i++) {
                const r = n[i][fr];
                if (!this.features[r]) continue;
                const s = this.features[r];
                if (Array.isArray(s)) for (let n = 0; n < s.length; n++) {
                    const i = s[n];
                    i.visible || (this.Nn = !0), this.Wn(i.geometry, e), t.push(i);
                } else s.visible || (this.Nn = !0), this.Wn(s.geometry, e), t.push(s);
            }
            return t.length || (this.meshes && this.painter && (this.painter.deleteMesh(this.meshes), 
            delete this.meshes), this.Ln && (this.Tn.deleteMesh(this.Ln), delete this.Ln), this.Rn && (this.On.deleteMesh(this.Rn), 
            delete this.Rn)), e[3] && (e[0] /= e[3], e[1] /= e[3]), {
                features: t,
                center: e
            };
        }
        buildMesh() {}
        createVectorPacks(t, e, n, i, r, s) {
            if (!t || !i || !i.length) return Promise.resolve(null);
            return new e(i, n, {
                zoom: this.getMap().getZoom(),
                EXTENT: 1 / 0,
                requestor: this.requestor,
                atlas: r,
                center: s,
                positionType: Float32Array
            }).load();
        }
        createMesh(t, e, i, r, s, o) {
            const a = [], l = [];
            return this.createVectorPacks(t, e, i, r, s, o).then(e => {
                if (!e) return null;
                const i = t.createGeometries([ e.data ], r.map(t => ({
                    feature: t
                })));
                for (let t = 0; t < i.length; t++) this.Bn(i[t].geometry);
                const s = n.mat4.identity([]);
                n.mat4.translate(s, s, n.vec3.set(l, o[0], o[1], 0)), n.mat4.scale(s, s, n.vec3.set(a, 1, 1, this.le));
                const h = t.createMeshes(i, s, {
                    tilePoint: [ o[0], o[1] ]
                });
                for (let t = 0; t < h.length; t++) {
                    const e = h[t];
                    e.setUniform("level", 0);
                    const n = e.defines;
                    n.ENABLE_TILE_STENCIL = 1, e.setDefines(n), e.properties.meshKey = this.layer.getId();
                }
                return {
                    meshes: h,
                    atlas: {
                        iconAtlas: e.data.iconAtlas
                    }
                };
            });
        }
        Wn(t, e) {
            for (let n = 0; n < t.length; n++) if (C(t[n][0])) e[0] += t[n][0], e[1] += t[n][1], 
            e[3] += 1; else for (let i = 0; i < t[n].length; i++) if (C(t[n][i][0])) e[0] += t[n][i][0], 
            e[1] += t[n][i][1], e[3] += 1; else for (let r = 0; r < t[n][i].length; r++) e[0] += t[n][i][r][0], 
            e[1] += t[n][i][r][1], e[3] += 1;
        }
        Bn(t) {
            const e = this.getMap(), n = t.properties;
            Object.defineProperty(n, "tileResolution", {
                enumerable: !0,
                get: function() {
                    return e.getGLRes();
                }
            }), n.tileRatio = 1, n.z = 1, n.tileExtent = 1;
        }
        Xn(t) {
            return "win-intel-gpu-crash" === t && (this.layer.options.workarounds["win-intel-gpu-crash"] && _r(this.gl));
        }
        prepareRequestors() {
            if (this.wt) return;
            const t = this.layer;
            this.wt = new Si({
                iconErrorUrl: t.options.iconErrorUrl
            });
            const e = !this.Xn("win-intel-gpu-crash");
            this.At = new _i(e => {
                t.getMap().getRenderer().callInNextFrame(e);
            }, t.options.glyphSdfLimitPerFrame, e), this.requestor = this.qn.bind(this), this.Jn = this.Yn.bind(this);
        }
        qn(t, e, n) {
            const i = [];
            this.wt.getIcons(t, (t, e) => {
                if (t) throw t;
                e.buffers && i.push(...e.buffers), n(null, {
                    icons: e.icons
                }, i);
            });
        }
        Yn(t, e, n) {
            this.At.getGlyphs(e, (e, i) => {
                if (e) throw e;
                const r = i.buffers || [];
                this.wt.getIcons(t, (t, e) => {
                    if (t) throw t;
                    e.buffers && e.buffers.length && r.push(...e.buffers), n(null, {
                        icons: e.icons,
                        glyphs: i.glyphs
                    }, r);
                });
            });
        }
        Fn(t) {
            const e = Object.keys(this.wn), i = Object.keys(this.An);
            if (!e.length && !i.length) return void (this.Ln && (this.Tn.deleteMesh(this.Ln), 
            delete this.Ln));
            const {features: r, center: s} = this.Gn(), o = [], a = [];
            for (let t = 0; t < r.length; t++) {
                const e = r[t][xr];
                this.wn[e] && o.push(r[t]), this.An[e] && a.push(r[t]);
            }
            if (!o.length && !a.length) return void (this.Ln && (this.Tn.deleteMesh(this.Ln), 
            delete this.Ln));
            const l = this.Nn;
            this.$n = s;
            const h = this.Zn(o, a, t, s);
            this.Hn = {};
            const c = [], u = [];
            this.Kn = !0, Promise.all(h).then(t => {
                if (this.Ln && (this.Tn.deleteMesh(this.Ln), delete this.Ln), !t || !t.length) return void this.setToRedraw();
                const e = this.Tn.createGeometries(t.map(t => t && t.data), this.xn);
                for (let n = 0; n < e.length; n++) this.Bn(e[n].geometry, t[n] && t[n].data);
                const i = t[0] && t[0].data.iconAtlas, r = t[0] && t[0].data.glyphAtlas || t[1] && t[1].data.glyphAtlas;
                i && (this.Hn.iconAtlas = i), r && (this.Hn.glyphAtlas = r);
                const o = n.mat4.identity([]);
                n.mat4.translate(o, o, n.vec3.set(u, s[0], s[1], 0)), n.mat4.scale(o, o, n.vec3.set(c, 1, 1, this.le));
                const a = this.Tn.createMeshes(e, o);
                for (let t = 0; t < a.length; t++) a[t].geometry.properties.originElements = a[t].geometry.properties.elements.slice(), 
                a[t].setUniform("level", 0), a[t].material.set("flipY", 1), a[t].properties.meshKey = gr++;
                this.Ln = a, l && (this.Nn = !0), this.Kn = !1, this.setToRedraw();
            });
        }
        zn() {
            if (this.Ln && (this.Qn(this.Ln[0], this.wn), this.Qn(this.Ln[1], this.An)), this.Rn) for (let t = 0; t < this.Rn.length; t++) this.Qn(this.Rn[t], this._n);
            if (this.meshes) for (let t = 0; t < this.meshes.length; t++) this.Qn(this.meshes[t], this.xn);
        }
        Qn(t, e) {
            if (!t) return;
            const {aPickingId: n, originElements: i} = t.geometry.properties, r = [];
            for (let t = 0; t < i.length; t++) {
                const s = n[i[t]];
                e[s] && e[s].feature.visible && r.push(i[t]);
            }
            const s = t.geometry.properties.elements = new i.constructor(r);
            t.geometry.setElements(s);
        }
        Zn(t, e, n, i) {
            const r = {
                zoom: this.getMap().getZoom(),
                EXTENT: 1 / 0,
                requestor: this.Jn,
                atlas: n,
                center: i,
                positionType: Float32Array,
                altitudeProperty: "altitude",
                defaultAltitude: 0
            }, s = F({}, r);
            r.allowEmptyPack = 1;
            return ri.splitPointSymbol(this.kn).map((n, i) => new ri(0 === i ? t : e, n, 0 === i ? r : s).load());
        }
        updateMesh() {}
        ti(t) {
            const e = t._getInternalSymbol(), n = {
                zoom: this.getMap().getZoom()
            }, i = this.ei(t);
            if (!this.Ln) return !1;
            let r = this.features[i];
            Array.isArray(r) || (r = [ r ]);
            const s = [], o = [], a = this.getMap().getZoom();
            let l, h;
            l = Array.isArray(e) ? e.map(t => t ? k(t, () => a) : t) : k(e, () => a), h = Array.isArray(e) ? e.map(t => t ? $e.genFnTypes(t) : t) : $e.genFnTypes(e);
            for (let t = 0; t < r.length; t++) {
                if (!r[t]) continue;
                const i = Array.isArray(e) ? e[t] : e, s = Array.isArray(l) ? l[t] : l, o = Array.isArray(h) ? h[t] : h, a = new Gn(r, i, s, o, n).getIconAndGlyph();
                if (!this.Hn || !ri.isAtlasLoaded(a, this.Hn)) return this.ni(), this.setToRedraw(), 
                !1;
            }
            for (let t = 0; t < r.length; t++) {
                const e = r[t][xr];
                this.wn[e] && s.push(r[t]), this.An[e] && o.push(r[t]);
            }
            const c = r[0].id, u = this.Zn(s, o, this.Hn, this.$n), f = this.Ln;
            return Promise.all(u).then(t => {
                for (let e = 0; e < t.length; e++) {
                    if (!t[e]) continue;
                    const n = f[e], i = n.geometry.properties.aFeaIds.indexOf(c);
                    if (i < 0) continue;
                    const r = t[e].data.featureIds.length;
                    for (const s in t[e].data.data) {
                        if ("aPickingId" === s) continue;
                        const o = t[e].data.data[s];
                        n.geometry.updateSubData(s, o, i * o.length / r);
                    }
                }
                this.setToRedraw();
            }), !0;
        }
        ii(t) {
            return this.ri(t, this.Rn, this.Dn, this.si, this.On, ai, mr, this.oi);
        }
        ri(t, e, n, i, r, s, o, a) {
            if (!e) return !1;
            if (!n) return this.ni(), this.setToRedraw(), !1;
            const l = t._getInternalSymbol(), h = {
                zoom: this.getMap().getZoom()
            }, c = t[fr];
            let u = this.features[c];
            Array.isArray(u) || (u = [ u ]);
            const f = [];
            for (let t = 0; t < u.length; t++) {
                const e = u[t];
                if (!e) continue;
                const i = Array.isArray(l) ? l[t] : l, r = $e.genFnTypes(i), o = new Je(u, i, r, h), a = s === ai ? o.getLineResource() : o.getPolygonResource();
                if (!$e.isAtlasLoaded(a, n[t])) return this.ni(), this.setToRedraw(), !1;
                f.push(e);
            }
            const d = u[0].id, p = a.call(this, f);
            for (let t = 0; t < p.length; t++) if (p[t].length) {
                const n = e.filter(e => e.feaGroupIndex === t);
                if (!n.length) return this.ni(), this.setToRedraw(), !1;
                if (n[0].geometry.properties.aFeaIds.indexOf(d) < 0) return this.ni(), this.setToRedraw(), 
                !1;
            }
            const y = F({}, o), m = p.map(t => this.createVectorPacks(r, s, y, t, n[0], i));
            return Promise.all(m).then(t => {
                for (let n = 0; n < t.length; n++) {
                    let i;
                    if (Array.isArray(e)) {
                        for (let t = 0; t < e.length; t++) if (e[t].feaGroupIndex === n) {
                            i = e[t];
                            break;
                        }
                    } else i = e;
                    if (!i) continue;
                    const r = i.geometry.properties.aFeaIds, s = r.indexOf(d);
                    if (!(s < 0)) {
                        if (t[n]) {
                            const e = t[n].data.featureIds.length, r = t[n].data.data;
                            for (const t in r) if (N(r, t)) {
                                const n = r[t];
                                i.geometry.updateSubData(t, n, s * n.length / e);
                            }
                        } else {
                            let t = s + 1;
                            for (;r[t] === d; ) t++;
                            const e = t - s;
                            br.length !== 3 * e && (br = new Float32Array(3 * e), br.fill(-1 / 0, 0)), i.geometry.updateSubData(i.geometry.desc.positionAttribute, br, 3 * s);
                        }
                        this.setToRedraw();
                    }
                }
            }), !0;
        }
        In(t) {
            if (!Object.keys(this._n).length) return void (this.Rn && (this.On.deleteMesh(this.Rn), 
            delete this.Rn));
            const {features: e, center: n} = this.Gn();
            if (!e.length) return;
            const i = this.Nn;
            this.si = n;
            const r = this.oi(e), s = F({}, mr), o = r.map((e, i) => this.createMesh(this.On, ai, s, e, t && t[i], n));
            this.ai = !0, Promise.all(o).then(t => {
                this.Rn && this.On.deleteMesh(this.Rn);
                const e = [], n = [];
                for (let i = 0; i < t.length; i++) {
                    const r = t[i] && t[i].meshes;
                    if (r) {
                        for (let t = 0; t < r.length; t++) {
                            const n = r[t];
                            n.feaGroupIndex = i, e.push(n), n.geometry.properties.originElements = n.geometry.properties.elements.slice();
                        }
                        n[i] = t[i].atlas;
                    }
                }
                this.Rn = e, this.Dn = n, i && (this.Nn = i), this.ai = !1, this.setToRedraw();
            });
        }
        oi(t) {
            const e = (vr + "lineDasharray").trim(), n = (vr + "linePatternFile").trim(), i = [], r = [], s = [];
            for (let o = 0; o < t.length; o++) {
                const a = t[o], l = a.properties && a.properties[e];
                l && Pr(l) ? s.push(a) : a.properties && a.properties[n] ? r.push(a) : i.push(a);
            }
            return [ r, s, i ];
        }
        li() {
            this.Cn = !0, this.setToRedraw();
        }
        ni() {
            this.Mn = !0, this.setToRedraw();
        }
        hi(t) {
            const e = this.layer.getId();
            for (let n = 0; n < t.length; n++) {
                const i = t[n];
                let r = !1;
                for (let t = 0; t < this.GeometryTypes.length; t++) if (i instanceof this.GeometryTypes[t]) {
                    r = !0;
                    break;
                }
                if (!r) throw new Error(`${i.getJSONType()} can't be added to ${this.layer.getJSONType()}(id:${e}).`);
                this.ei(i);
            }
        }
        ei(t) {
            t[fr] || (t[fr] = this.Rt++);
            const e = t[fr];
            this.features[e] && this.ci(e), this.features[e] = dr(t, this.Sn, this.features[e]);
            const n = this.features[e];
            return this.ui(n), this.features[e][fr] = e, this.vn[e] = t, e;
        }
        ui(t) {
            if (!t) return;
            const e = Array.isArray(t) ? t[0].id : t.id;
            if (this.bn[e] = t, Array.isArray(t)) for (let e = 0; e < t.length; e++) {
                const n = t[e][xr];
                this.xn[n] = {
                    feature: t[e]
                };
                const i = {
                    feature: t[e]
                };
                Mr(t[e]) && (this.wn[n] = i), Sr(t[e]) && (this.An[n] = i), kr(t[e]) && (this._n[n] = i);
            } else {
                const e = {
                    feature: t
                }, n = t[xr];
                Mr(t) && (this.wn[n] = e), Sr(t) && (this.An[n] = e), kr(t) && (this._n[n] = e), 
                this.xn[n] = e;
            }
        }
        ci(t) {
            const e = this.features[t];
            if (Array.isArray(e)) for (let t = 0; t < e.length; t++) {
                const n = e[t][xr], i = e[t].id;
                delete this.bn[i], delete this.xn[n], delete this.wn[n], delete this.An[n], delete this._n[n];
            } else {
                const t = e[xr], n = e.id;
                delete this.bn[n], delete this.xn[t], delete this.wn[t], delete this.An[t], delete this._n[t];
            }
        }
        pick(t, e, n) {
            const i = [];
            return [ this.painter, this.Tn, this.On ].forEach(r => {
                if (!r) return;
                const s = r.pick(t, e, n.tolerance);
                if (s && s.data && s.data.feature) {
                    const t = s.data.feature;
                    i.push(this.vn[t[fr]]);
                }
            }), i;
        }
        fi(t) {
            const e = t[fr], n = this.features[e];
            return Array.isArray(n) ? n[0][xr] : n[xr];
        }
        Vn() {
            let t = !1;
            for (const e in this.Pn) {
                const n = this.Pn[e], i = this.fi(n);
                if (!this.Kn && (this.wn[i] || this.An[i])) {
                    const e = this.ti(n);
                    t = t || e;
                }
                if (!this.ai && this._n[i]) {
                    const e = this.ii(n);
                    t = t || e;
                }
                if (!this.di) {
                    const e = this.updateMesh(n);
                    t = t || e;
                }
            }
            this.Pn = {}, t && (Ar(this), this.layer.fire("partialupdate"));
        }
        pi(t) {
            this.ei(t), this.ni(), Ar(this);
        }
        onGeometryAdd(t) {
            this.canvas && t && t.length && (this.hi(t), this.ni(), Ar(this));
        }
        onGeometryRemove(t) {
            if (t && t.length) {
                for (let e = 0; e < t.length; e++) {
                    const n = t[e][fr];
                    void 0 !== n && (delete this.vn[n], this.ci(n), delete this.features[n]);
                }
                this.ni(), Ar(this);
            }
        }
        onGeometrySymbolChange(t) {
            const e = t.target._getParent() || t.target, n = t.properties;
            for (const t in n) if (N(n, t) && Fi[t]) return void this.pi(e);
            const i = e[fr], r = e._getInternalSymbol(), s = this.features[i];
            if (this.ei(e), s) if (function(t, e) {
                return Array.isArray(t) ? !!Array.isArray(e) && t.length === e.length : !Array.isArray(e);
            }(r, s)) {
                if (Array.isArray(r)) for (let t = 0; t < r.length; t++) {
                    if (!Tr(r[t], s[t])) return void this.pi(e);
                } else if (!Tr(r, s)) return void this.pi(e);
                this.onGeometryPositionChange(t);
            } else this.pi(e); else this.pi(e);
        }
        onGeometryShapeChange(t) {
            const e = t.target._getParent() || t.target, n = dr(e, {
                id: 0
            }).geometry, i = e[fr], r = this.features[i];
            if (function t(e, n) {
                if (e.length !== n.length) return !1;
                if (Array.isArray(e[0]) && Array.isArray(n[0])) {
                    for (let i = 0; i < e.length; i++) if (!t(e[0], n[0])) return !1;
                } else if (Array.isArray(e[0]) || Array.isArray(n[0])) return !1;
                return !0;
            }(n, (Array.isArray(r) ? r[0] : r).geometry)) return this.Rn && (this.En = !0), 
            void this.onGeometryPositionChange(t);
            this.hi([ e ]), this.li(), Ar(this);
        }
        onGeometryPositionChange(t) {
            const e = t.target._getParent() || t.target, n = e[fr];
            this.hi([ e ]), this.Pn[n] = e, Ar(this);
        }
        onGeometryZIndexChange() {
            this.ni();
        }
        onGeometryShow(t) {
            this.yi(t);
        }
        onGeometryHide(t) {
            this.yi(t);
        }
        yi(t) {
            const e = t.target, n = e[fr], i = this.features[n];
            if (i) {
                const t = e.isVisible();
                if (Array.isArray(i)) {
                    if (t === i[0].visible) return;
                    for (let e = 0; e < i.length; e++) i[e].visible = t;
                } else {
                    if (t === i.visible) return;
                    i.visible = t;
                }
                this.mi(), Ar(this);
            }
        }
        mi() {
            this.Nn = !0;
        }
        onGeometryPropertiesChange(t) {
            const e = t.target, n = e[fr];
            if (this.features[n] = dr(e, this.Sn), Array.isArray(this.features[n])) {
                const t = this.features[n];
                for (let e = 0; e < t.length; e++) t[e][fr] = n;
            } else this.features[n][fr] = n;
            this.ui(this.features[n]), this.ni(), Ar(this);
        }
        createContext() {
            const t = this.canvas.gl && this.canvas.gl.wrap;
            t ? (this.gl = this.canvas.gl.wrap(), this.regl = this.canvas.gl.regl) : this.ee(), 
            t && (this.canvas.pickingFBO = this.canvas.pickingFBO || this.regl.framebuffer(this.canvas.width, this.canvas.height)), 
            this.prepareRequestors(), this.pickingFBO = this.canvas.pickingFBO || this.regl.framebuffer(this.canvas.width, this.canvas.height), 
            this.painter = this.createPainter();
            const e = cr.get3DPainterClass("icon"), n = F({}, pr, yr);
            this.Tn = new e(this.regl, this.layer, n, this.layer.options.sceneConfig, 0), this.Tn.setTextShaderDefines({
                REVERSE_MAP_ROTATION_ON_PITCH: 1
            });
            const i = cr.get3DPainterClass("line"), r = F({}, mr);
            this.On = new i(this.regl, this.layer, r, this.layer.options.sceneConfig, 0), this.layer.getGeometries() && this.onGeometryAdd(this.layer.getGeometries());
        }
        createPainter() {}
        ee() {
            const t = this.layer.options.glOptions || {
                alpha: !0,
                depth: !0,
                antialias: !1
            };
            t.preserveDrawingBuffer = !0, t.stencil = !0, this.glOptions = t, this.gl = this.gl || this.re(this.canvas, t), 
            this.regl = n.createREGL({
                gl: this.gl,
                attributes: t,
                extensions: n.reshader.Constants.WEBGL_EXTENSIONS,
                optionalExtensions: n.reshader.Constants.WEBGL_OPTIONAL_EXTENSIONS
            });
        }
        re(t, e) {
            const n = [ "webgl", "experimental-webgl" ];
            let i = null;
            for (let r = 0; r < n.length; ++r) {
                try {
                    i = t.getContext(n[r], e);
                } catch (t) {}
                if (i) break;
            }
            return i;
        }
        clearCanvas() {
            super.clearCanvas(), this.regl && this.regl.clear({
                color: [ 0, 0, 0, 0 ],
                depth: 1,
                stencil: 255
            });
        }
        resizeCanvas(t) {
            super.resizeCanvas(t);
            const e = this.canvas;
            e && (!this.pickingFBO || this.pickingFBO.width === e.width && this.pickingFBO.height === e.height || this.pickingFBO.resize(e.width, e.height), 
            this.painter && this.painter.resize(e.width, e.height));
        }
        onRemove() {
            super.onRemove(), this.painter && this.painter.delete(), this.Tn && this.Tn.delete(), 
            this.On && this.On.delete();
        }
        drawOutline(t) {
            if (this.ve && (this.painter && this.painter.outlineAll(t), this.Tn.outlineAll(t), 
            this.On.outlineAll(t)), this.gi) for (let e = 0; e < this.gi.length; e++) this.painter && this.painter.outline(t, this.gi[e]), 
            this.Tn.outline(t, this.gi[e]), this.On.outline(t, this.gi[e]);
        }
        outlineAll() {
            this.ve = !0, this.setToRedraw();
        }
        outline(t) {
            this.gi || (this.gi = []);
            const e = [];
            for (let n = 0; n < t.length; n++) {
                const i = this.layer.getGeometryById(t[n]);
                if (i) {
                    const t = this.features[i[fr]];
                    if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e.push(t[n].id); else e.push(t.id);
                }
            }
            this.gi.push(e), this.setToRedraw();
        }
        cancelOutline() {
            delete this.ve, delete this.gi, this.setToRedraw();
        }
        isEnableWorkAround(t) {
            return "win-intel-gpu-crash" === t && (this.layer.options.workarounds["win-intel-gpu-crash"] && _r(this.gl));
        }
        he(t) {
            return this.getMap().distanceToPoint(1e3, 0, t).x / 1e3 / 10;
        }
    }
    function Ar(t) {
        t.setToRedraw();
    }
    function _r(t) {
        const e = t.getExtension("WEBGL_debug_renderer_info");
        if (e && "undefined" != typeof navigator) {
            const n = t.getParameter(e.UNMASKED_RENDERER_WEBGL), i = "Win32" === navigator.platform || "Win64" === navigator.platform;
            if (n && n.toLowerCase().indexOf("intel") >= 0 && i) return !0;
        }
        return !1;
    }
    function Mr({properties: t}) {
        const e = (vr + "markerFile").trim(), n = (vr + "markerType").trim();
        return t[e] || t[n];
    }
    function Sr({properties: t}) {
        return t[(vr + "textName").trim()];
    }
    function kr(t) {
        const e = (vr + "lineWidth").trim();
        return 2 === t.type || 3 === t.type && !!t.properties[e];
    }
    function Pr(t) {
        if (!Array.isArray(t)) return 0;
        let e = 0;
        for (let n = 0; n < t.length; n++) e += t[n];
        return e;
    }
    function Tr(t, e) {
        if (Object.keys(t).sort().join() !== Object.keys(e.properties || {}).filter(t => 0 === t.indexOf(vr)).map(t => t.substring(vr.length)).sort().join()) return !1;
        for (const n in t) if (N(t, n)) {
            const i = (vr + n).trim();
            if (_(t[n]) !== _(e.properties[i])) return !1;
        }
        return !0;
    }
    function Or(t, e, n) {
        if (!t || t.type !== e) return null;
        const i = new n(t.id, t.options), s = t.geometries, o = [];
        for (let t = 0; t < s.length; t++) {
            const e = r.Geometry.fromJSON(s[t]);
            e && o.push(e);
        }
        return i.addGeometry(o), i;
    }
    class Fr extends cr {
        static fromJSON(t) {
            return Or(t, "PointLayer", Fr);
        }
    }
    Fr.mergeOptions({
        glyphSdfLimitPerFrame: 15,
        iconErrorUrl: null,
        workarounds: {
            "win-intel-gpu-crash": !0
        },
        collision: !1,
        collisionFrameLimit: 1,
        sceneConfig: {
            collision: !0,
            fading: !1,
            fadingDuration: 224,
            fadeInDelay: 600,
            fadeOutDelay: 100,
            uniquePlacement: !1,
            depthFunc: "always"
        }
    }), Fr.registerJSONType("PointLayer"), Fr.registerRenderer("canvas", null);
    Fr.registerRenderer("gl", class extends wr {
        constructor(...t) {
            super(...t), this.GeometryTypes = [ r.Marker, r.MultiPoint ];
        }
        onGeometryAdd(t) {
            t && (Array.isArray(t) ? t.forEach(t => {
                t.options.maxMarkerWidth = t.options.maxMarkerHeight = 255;
            }) : t.options.maxMarkerWidth = t.options.maxMarkerHeight = 255, super.onGeometryAdd(t));
        }
    });
    class Ir extends cr {
        static fromJSON(t) {
            return Or(t, "LineStringLayer", Ir);
        }
    }
    Ir.registerJSONType("LineStringLayer");
    Ir.registerRenderer("gl", class extends wr {
        constructor(...t) {
            super(...t), this.GeometryTypes = [ r.LineString, r.MultiLineString ];
        }
    }), Ir.registerRenderer("canvas", null);
    class Cr extends cr {
        static fromJSON(t) {
            return Or(t, "PolygonLayer", Cr);
        }
    }
    Cr.registerJSONType("PolygonLayer");
    const Er = {
        polygonFill: {
            type: "identity",
            default: void 0,
            property: "_symbol_polygonFill"
        },
        polygonPatternFile: {
            type: "identity",
            default: void 0,
            property: "_symbol_polygonPatternFile"
        },
        polygonOpacity: {
            type: "identity",
            default: 1,
            property: "_symbol_polygonOpacity"
        },
        uvScale: {
            type: "identity",
            default: [ 1, 1 ],
            property: "_symbol_uvScale"
        },
        uvOffset: {
            type: "identity",
            default: [ 0, 0 ],
            property: "_symbol_uvOffset"
        }
    };
    Cr.registerRenderer("gl", class extends wr {
        constructor(...t) {
            super(...t), this.PackClass = mi, this.GeometryTypes = [ r.Polygon, r.MultiPolygon ];
        }
        buildMesh(t) {
            const {features: e, center: n} = this.Gn();
            if (!e.length) return;
            const i = this.Nn;
            this.vi = n;
            const r = this.xi(e), s = F({}, Er), o = r.map((e, i) => this.createMesh(this.painter, mi, s, e, t && t[i], n));
            this.di = !0, Promise.all(o).then(t => {
                this.meshes && this.painter.deleteMesh(this.meshes);
                const e = [], n = [];
                for (let i = 0; i < t.length; i++) {
                    const r = t[i] && t[i].meshes;
                    if (r) {
                        e.push(...r);
                        for (let t = 0; t < r.length; t++) r[t].feaGroupIndex = i, r[t].geometry.properties.originElements = r[t].geometry.properties.elements.slice(), 
                        1 === i && (r[t].transparent = !0);
                        n[i] = t[i].atlas;
                    }
                }
                this.meshes = e, this.atlas = n, i && (this.Nn = i), this.di = !1, this.setToRedraw();
            });
        }
        xi(t) {
            const e = [], n = [];
            for (let i = 0; i < t.length; i++) {
                const r = t[i];
                r.properties && r.properties._symbol_polygonOpacity < 1 ? n.push(r) : e.push(r);
            }
            return [ e, n ];
        }
        createPainter() {
            const t = cr.get3DPainterClass("fill");
            this.painterSymbol = F({}, Er);
            return new t(this.regl, this.layer, this.painterSymbol, this.layer.options.sceneConfig, 0);
        }
        updateMesh(t) {
            return this.ri(t, this.meshes, this.atlas, this.vi, this.painter, mi, Er, this.xi);
        }
    }), Cr.registerRenderer("canvas", null);
    /*!
    * Contains code from jquery.easing
    * BSD License
    * https://github.com/gdsmith/jquery.easing/
    */
    var Hr = Math.pow, Dr = Math.sqrt, Lr = Math.sin, Rr = Math.cos, Nr = Math.PI, zr = 1.70158, Vr = 1.525 * zr, jr = 2 * Nr / 3, Ur = 2 * Nr / 4.5;
    function Gr(t) {
        var e = 7.5625, n = 2.75;
        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375;
    }
    function Wr(t, e) {
        switch (t = t.toLowerCase()) {
          case "swing":
            return function(t) {
                return Br(t);
            }(e);

          case "easeinquad":
            return Br(e);

          case "easeoutquad":
            return function(t) {
                return 1 - (1 - t) * (1 - t);
            }(e);

          case "easeinoutquad":
            return function(t) {
                return t < .5 ? 2 * t * t : 1 - Hr(-2 * t + 2, 2) / 2;
            }(e);

          case "easeincubic":
            return function(t) {
                return t * t * t;
            }(e);

          case "easeoutcubic":
            return function(t) {
                return 1 - Hr(1 - t, 3);
            }(e);

          case "easeinoutcubic":
            return function(t) {
                return t < .5 ? 4 * t * t * t : 1 - Hr(-2 * t + 2, 3) / 2;
            }(e);

          case "easeinquart":
            return function(t) {
                return t * t * t * t;
            }(e);

          case "easeoutquart":
            return function(t) {
                return 1 - Hr(1 - t, 4);
            }(e);

          case "easeinoutquart":
            return function(t) {
                return t < .5 ? 8 * t * t * t * t : 1 - Hr(-2 * t + 2, 4) / 2;
            }(e);

          case "easeinquint":
            return function(t) {
                return t * t * t * t * t;
            }(e);

          case "easeoutquint":
            return function(t) {
                return 1 - Hr(1 - t, 5);
            }(e);

          case "easeinoutquint":
            return function(t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 - Hr(-2 * t + 2, 5) / 2;
            }(e);

          case "easeinsine":
            return function(t) {
                return 1 - Rr(t * Nr / 2);
            }(e);

          case "easeoutsine":
            return function(t) {
                return Lr(t * Nr / 2);
            }(e);

          case "easeinoutsine":
            return function(t) {
                return -(Rr(Nr * t) - 1) / 2;
            }(e);

          case "easeinexpo":
            return function(t) {
                return 0 === t ? 0 : Hr(2, 10 * t - 10);
            }(e);

          case "easeoutexpo":
            return function(t) {
                return 1 === t ? 1 : 1 - Hr(2, -10 * t);
            }(e);

          case "easeinoutexpo":
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? Hr(2, 20 * t - 10) / 2 : (2 - Hr(2, -20 * t + 10)) / 2;
            }(e);

          case "easeincirc":
            return function(t) {
                return 1 - Dr(1 - Hr(t, 2));
            }(e);

          case "easeoutcirc":
            return function(t) {
                return Dr(1 - Hr(t - 1, 2));
            }(e);

          case "easeinoutcirc":
            return function(t) {
                return t < .5 ? (1 - Dr(1 - Hr(2 * t, 2))) / 2 : (Dr(1 - Hr(-2 * t + 2, 2)) + 1) / 2;
            }(e);

          case "easeinelastic":
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : -Hr(2, 10 * t - 10) * Lr((10 * t - 10.75) * jr);
            }(e);

          case "easeoutelastic":
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : Hr(2, -10 * t) * Lr((10 * t - .75) * jr) + 1;
            }(e);

          case "easeinoutelastic":
            return function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -Hr(2, 20 * t - 10) * Lr((20 * t - 11.125) * Ur) / 2 : Hr(2, -20 * t + 10) * Lr((20 * t - 11.125) * Ur) / 2 + 1;
            }(e);

          case "easeinback":
            return function(t) {
                return 2.70158 * t * t * t - zr * t * t;
            }(e);

          case "easeoutback":
            return function(t) {
                return 1 + 2.70158 * Hr(t - 1, 3) + zr * Hr(t - 1, 2);
            }(e);

          case "easeinoutback":
            return function(t) {
                return t < .5 ? Hr(2 * t, 2) * (7.189819 * t - Vr) / 2 : (Hr(2 * t - 2, 2) * ((Vr + 1) * (2 * t - 2) + Vr) + 2) / 2;
            }(e);

          case "easeinbounce":
            return function(t) {
                return 1 - Gr(1 - t);
            }(e);

          case "easeoutbounce":
            return function(t) {
                return Gr(t);
            }(e);

          case "easeinoutbounce":
            return function(t) {
                return t < .5 ? (1 - Gr(1 - 2 * t)) / 2 : (1 + Gr(2 * t - 1)) / 2;
            }(e);
        }
        throw new Error("Unsupported easing function:" + t);
    }
    function Br(t) {
        return t * t;
    }
    const Xr = {};
    function qr() {}
    const Jr = qr.prototype;
    Jr.getType = function() {
        return Object.getPrototypeOf(this).constructor.type;
    }, Jr.isVisible = function() {
        throw new Error("to be implemented.");
    }, Jr.prepareRender = function() {
        throw new Error("to be implemented.");
    }, Jr.updateCollision = function() {
        throw new Error("to be implemented.");
    }, Jr.supportRenderMode = function() {
        throw new Error("to be implemented.");
    }, Jr.startFrame = function() {
        throw new Error("to be implemented.");
    }, Jr.endFrame = function() {
        throw new Error("to be implemented.");
    }, Jr.paintTile = function() {
        throw new Error("to be implemented.");
    }, Jr.getShadowMeshes = function() {
        throw new Error("to be implemented.");
    }, Jr.updateSceneConfig = function() {
        throw new Error("to be implemented.");
    }, Jr.updateDataConfig = function() {
        throw new Error("to be implemented.");
    }, Jr.updateSymbol = function() {
        throw new Error("to be implemented.");
    }, Jr.pick = function() {
        throw new Error("to be implemented.");
    }, Jr.resize = function() {
        throw new Error("to be implemented.");
    }, Jr.deleteTile = function() {
        throw new Error("to be implemented.");
    }, Jr.remove = function() {
        throw new Error("to be implemented.");
    }, Jr.needToRedraw = function() {
        throw new Error("to be implemented.");
    }, Jr.needToRetireFrames = function() {
        throw new Error("to be implemented.");
    }, Jr.outline = function() {
        throw new Error("to be implemented.");
    }, Jr.outlineAll = function() {
        throw new Error("to be implemented.");
    }, Jr.needPolygonOffset = function() {
        throw new Error("to be implemented.");
    }, Jr.constructor = qr;
    const Yr = Object.prototype.hasOwnProperty;
    function $r(t) {
        t.registerPlugin(this);
    }
    qr.extend = function(t, e) {
        const n = function() {
            this.init && this.init();
        }, i = Object.create(Jr);
        i.constructor = n, n.prototype = i, n.type = t;
        for (const t in e) Yr.call(e, t) && (n.prototype[t] = e[t]);
        return n.registerAt = $r.bind(n), Xr[t] = n, n;
    };
    const Zr = {
        redraw: !1,
        retire: !1
    }, Kr = [];
    let Qr = 1;
    function ts(t, e) {
        return qr.extend(t, {
            init: function() {
                this.bi = {};
            },
            isVisible() {
                return this.painter && this.painter.isVisible();
            },
            supportRenderMode: function(t) {
                return this.painter.supportRenderMode(t);
            },
            startFrame: function(t) {
                const n = t.layer, i = t.regl, r = t.sceneConfig, s = t.dataConfig, o = t.symbol;
                let a = this.painter;
                if (!a) {
                    const l = t.pluginIndex;
                    a = this.painter = new e(i, n, o, r, l, s);
                }
                this.bi || (this.bi = {});
                const h = r.excludes;
                this.wi ? h !== this.wi && (this.Ai = h ? l(h) : null, this.wi = h) : h && (this.wi = h), 
                a.startFrame(t), this._i = {};
            },
            updateCollision: function(t) {
                const e = this.painter;
                return e && e.isVisible() ? e.updateCollision(t) : null;
            },
            prepareRender: function(t) {
                const e = this.painter;
                return e && e.isVisible() ? e.prepareRender(t) : null;
            },
            endFrame: function(t) {
                const e = this.painter;
                return e && e.isVisible() ? e.render(t) : null;
            },
            getShadowMeshes() {
                const t = this.painter;
                return t && t.getShadowMeshes && t.getShadowMeshes() || Kr;
            },
            createTile: function(t) {
                const {tileCache: e, tileData: n} = t;
                let i = !1;
                const r = this.painter;
                if (!r) return {
                    retire: i
                };
                const s = this.Mi(t);
                let o = e.geometry;
                if (!o) {
                    const s = n.features, a = n.data;
                    if (!a || !a.length) return {
                        retire: i
                    };
                    const l = a;
                    if (this.painter.colorSymbol) for (let t = 0; t < a.length; t++) {
                        const e = this.Si(s, a[t].data.aPickingId, a[t].indices, a[t].data.aPosition, a[t].positionSize);
                        a[t].data.aColor = e;
                    }
                    o = e.geometry = r.createGeometries(l, s);
                    for (let e = 0; e < o.length; e++) o[e] && o[e].geometry && (i = !0, o[e].geometry.properties.features = s, 
                    this.Bn(o[e].geometry, t));
                }
                let a = this.zt(s);
                if (!a) {
                    const {meshes: e, retire: n} = this.ki(o, t);
                    i || (i = n), a = e;
                }
                return {
                    retire: i
                };
            },
            ki(t, e) {
                const {layer: n, tileInfo: i, tileExtent: r, tileTransform: s, tileTranslationMatrix: o, tileZoom: a, sceneConfig: l} = e;
                let h = !1;
                const c = this.painter, u = [ i.extent2d.xmin, i.extent2d.ymax ], f = c.createMeshes(t, s, {
                    tileExtent: r,
                    tilePoint: u,
                    tileZoom: a,
                    tileTranslationMatrix: o
                });
                if (f.length) {
                    const t = n.getRenderer().isEnableTileStencil();
                    for (let n = 0; n < f.length; n++) f[n] && (h = !0, this.Pi(f[n], s, e.timestamp, Qr++, t));
                    l.animation && (f.Ti = e.timestamp);
                    const i = this.Mi(e);
                    this.bi[i] = f;
                }
                return {
                    meshes: f,
                    retire: h
                };
            },
            paintTile: function(t) {
                const {tileCache: e, tileInfo: n, tileZoom: i, sceneConfig: r, bloom: s} = t, o = this.painter;
                if (!o) return Zr;
                let a = e.geometry;
                if (!a) return Zr;
                let l = !1;
                const h = this.Mi(t);
                let c = this.zt(h);
                if (!c) {
                    const {meshes: e, retire: n} = this.ki(a, t);
                    l || (l = n), c = e;
                }
                if (!c.length) return Zr;
                const u = o.getTileLevelValue(n, i);
                c.forEach(t => {
                    t.properties.tile = n, t.properties.level = u, t.setUniform("level", u);
                });
                let f = !1;
                if (!this._i[h]) {
                    let e = null, n = r.animation;
                    if (n) {
                        const i = t.sceneConfig.animationDuration || 800, r = (t.timestamp - c.Ti) / i, s = c[0].properties.createTime;
                        c.Ti - s < i && r < 1 && (!0 !== n && 1 !== n || (n = "linear"), e = "linear" === n ? r : Wr(n, r), 
                        f = !0);
                    }
                    c.forEach(t => {
                        const e = +(!!s && o.isBloom(t));
                        t.bloom = e;
                    }), o.addMesh(c, e, t), this._i[h] = 1;
                }
                return {
                    redraw: f,
                    retire: l
                };
            },
            Pi: function(t, e, n, i, r) {
                if (t.properties.tileTransform = e, t.properties.createTime = n, t.properties.meshKey = i, 
                t.needUpdateShadow = !0, r) {
                    const e = t.defines || {};
                    e.ENABLE_TILE_STENCIL = 1, t.setDefines(e), Object.defineProperty(t.uniforms, "stencilRef", {
                        enumerable: !0,
                        get: function() {
                            return t.properties.tile ? t.properties.tile.stencilRef : 255;
                        }
                    });
                }
            },
            Bn: function(t, e) {
                const {layer: n, tileInfo: i} = e, r = n.getMap(), s = (n.getSpatialReference ? n.getSpatialReference() : r.getSpatialReference()).getResolution(i.z), o = e.tileExtent / n.getTileSize().width;
                t.properties.tileResolution = s, t.properties.tileRatio = o, t.properties.z = i.z, 
                t.properties.tileExtent = e.tileExtent;
            },
            updateSceneConfig: function(t) {
                const e = this.painter;
                e && e.updateSceneConfig(t.sceneConfig);
            },
            updateDataConfig: function(t, e) {
                const n = this.painter;
                return !n || n.updateDataConfig(t, e);
            },
            updateSymbol: function(t, e) {
                const n = this.painter;
                if (!n) return !1;
                if (n.shouldDeleteMeshOnUpdateSymbol(t)) {
                    if (this.bi) for (const t in this.bi) n.deleteMesh(this.bi[t], !0);
                    delete this.bi, delete this._i;
                }
                return n.updateSymbol(t, e);
            },
            pick: function(t, e, n) {
                return this.painter && this.painter.pick ? this.painter.pick(t, e, n) : null;
            },
            deleteTile: function(t) {
                if (!this.bi) return;
                const e = this.Mi(t), n = this.bi[e];
                n && this.painter && this.painter.deleteMesh(n), delete this.bi[e], this._i && delete this._i[e];
            },
            remove: function() {
                const t = this.painter;
                if (t && this.bi) {
                    for (const e in this.bi) t.deleteMesh(this.bi[e]);
                    t.delete(), delete this.painter;
                }
                delete this.bi, delete this._i;
            },
            resize: function(t, e) {
                const n = this.painter;
                n && n.resize(t, e);
            },
            needToRedraw: function() {
                return !!this.painter && this.painter.needToRedraw();
            },
            needToRetireFrames: function() {
                return !!this.painter && this.painter.needToRetireFrames();
            },
            Si: function(t, e, n, i, r = 3) {
                if (!i || !t || !e.length) return null;
                const s = new Uint8Array(i.length / r * 4);
                let o, a;
                const l = this.painter.colorSymbol, h = {};
                let c;
                for (let n = 0, i = e.length; n < i; n++) {
                    const i = e[n];
                    if (o = t[i].symbol, a = h[i], !a) if (l) {
                        let e;
                        e = "function" == typeof l ? l(t[i].feature && t[i].feature.properties) : l, e = zt(e), 
                        a = h[i] = e.array();
                    } else a = h[i] = [ 255, 255, 255 ];
                    c = 4 * n, s[c] = a[0], s[c + 1] = a[1], s[c + 2] = a[2], s[c + 3] = 255 * (o[this.painter.opacitySymbol] || 1);
                }
                return s;
            },
            Mi: function(t) {
                const e = t.tileInfo;
                return e.meshKey || (e.meshKey = Qr++), e.meshKey;
            },
            zt: function(t) {
                return this.bi[t];
            },
            Oi(t, e) {
                if (Array.isArray(t)) t.forEach((t, n) => {
                    const {features: i} = t.properties;
                    this.Fi(t, e[n], i);
                }); else {
                    const {features: n} = t.properties;
                    this.Fi(t, Array.isArray(e) ? e[0] : e, n);
                }
            },
            Fi(t, e, n) {
                const i = e.featureIndexes || e.data.featureIndexes;
                if (i) if (this.Ai) {
                    const r = e.indices;
                    let s = null, o = !1;
                    const a = [];
                    for (let t = 0; t < r.length; t++) {
                        const e = n[i[r[t]]];
                        null !== s && s === r[t] || (o = this.Ai(e.feature), s = r[t]), o || a.push(r[t]);
                    }
                    t.setElements(new e.indices.constructor(a));
                } else t.setElements(e.indices);
            },
            outline(t, e) {
                const n = this.painter;
                n && n.outline(t, e);
            },
            outlineAll(t) {
                const e = this.painter;
                e && e.outlineAll(t);
            },
            needPolygonOffset() {
                const t = this.painter;
                return t && t.needPolygonOffset();
            }
        });
    }
    class es {
        constructor() {
            this.Ii = 1;
        }
        write(t, e) {
            const n = t.gl, i = this.Ii++;
            return t.stencilFunc(n.ALWAYS, i, 255), t.draw(e), i;
        }
        start(t) {
            const e = t.gl;
            e.clearStencil(255), e.clear(e.STENCIL_BUFFER_BIT), this.Ii = 1, t.start();
        }
        end(t) {
            t.end();
        }
    }
    function ns(t) {
        for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const e in n) t[e] = n[e];
        }
        return t;
    }
    function is(t, e, n) {
        return Math.min(n, Math.max(e, t));
    }
    function rs(t, e, n) {
        if (t === n || t === e) return t;
        const i = n - e;
        return ((t - e) % i + i) % i + e;
    }
    function ss(t) {
        return null == t;
    }
    function os(t) {
        return JSON.parse(JSON.stringify(t));
    }
    function as(t, e, n, i, r, s) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                const t = ss(n[i]) || _(n[i]) ? r : n[i];
                return s ? s(t) : t;
            }
        });
    }
    const ls = [];
    function hs(t) {
        for (let e = 0; e < t.length; e++) ls[e] = t[e], ls[e] *= 255;
        return 3 === t.length && (ls[3] = 255), ls;
    }
    function cs(t, e = 4) {
        return us.bind(this, t, e);
    }
    function us(t, e, n) {
        if (Array.isArray(n)) return 3 === n.length && 4 === e && n.push(1), n;
        if (t && t[n]) return t[n];
        const i = zt(n).unitArray();
        return 3 === i.length && 4 === e && i.push(1), t && (t[n] = i), i;
    }
    function fs(t, e, n, i) {
        if (t.fill) t.fill(e, n, i); else for (let r = n; r < i; r++) t[r] = e;
    }
    function ds(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function ps(t) {
        return t && (t.markerFile || t.markerType) && void 0 !== t.textName;
    }
    function ys(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }
    function ms(t) {
        const e = [ t[0] ];
        let n = t[0];
        for (let i = 1; i < t.length; i++) t[i] !== n && (e.push(t[i]), n = t[i]);
        return e;
    }
    const gs = "_fn_type_", vs = {
        textFill: 1,
        textSize: 1,
        textOpacity: 1,
        markerWidth: 1,
        markerHeight: 1,
        markerOpacity: 1,
        markerDx: 1,
        markerDy: 1,
        lineWidth: 1,
        lineColor: 1,
        lineOpacity: 1,
        polygonFill: 1,
        polygonOpacity: 1
    };
    function xs(t, e, n) {
        for (let i = 0; i < n.length; i++) {
            const {symbolName: r} = n[i];
            (t.Ci = t.Ci || {})[r] = e[r], bs(t, e, n[i]);
        }
    }
    function bs(t, e, n) {
        const i = t.properties;
        let r = i.aPickingId;
        r || (r = i.aPickingId = new t.data.aPickingId.constructor(t.data.aPickingId));
        const {attrName: s, symbolName: o, evaluate: a} = n, l = (gs + s + "Index").trim();
        let h = t.data[s];
        if (!h) {
            if (Os(e[o])) {
                h = t.data[s] = new n.type(n.width * r.length), ws(t, e, n);
                return Ps(s, t, t.properties[l], a), h;
            }
            return null;
        }
        return Os(e[o]) ? (ws(t, e, n), h) : (h && h.buffer && h.buffer.destroy && h.buffer.destroy(), 
        delete t.data[s], As(t, s), null);
    }
    function ws(t, e, n) {
        const {attrName: i, symbolName: r} = n, s = function(t) {
            if (!t) return ks;
            const e = [];
            for (let n = 0; n < t.length; n++) _(t[n][1]) && !M(t[n][1]).isZoomConstant && e.push(t[n][0]);
            return e;
        }(e[r].stops), o = "identity" === e[r].type && function(t, e, n) {
            let {features: i} = n.properties;
            Array.isArray(i) || (i = Object.values(i));
            if (!i || !i.length) return !1;
            const {symbolName: r} = t;
            if (!vs[r]) return !1;
            const s = e.property;
            for (let t = 0; t < i.length; t++) {
                const e = i[t] && i[t].feature;
                if (!e) continue;
                const n = e.properties && e.properties[s];
                if (n && (_(n) && !M(n).isZoomConstant)) return !0;
            }
            return !1;
        }(n, e[r], t);
        if (!o && !s.length) return void As(t, i);
        const a = t.properties, {features: l, aPickingId: h} = a, c = function(t, e, n, i, r) {
            const s = [];
            let o = 0, a = e[0];
            for (let l = 1, h = e.length; l < h; l++) e[l] === a && l !== h - 1 || ((r || Ss(t[a].feature, n, i)) && s.push(o, l === h - 1 ? h : l), 
            a = e[l], o = l);
            return s;
        }(l, h, e[r].property, s, o);
        if (!c.length) return void As(t, i);
        const u = t.data[i], f = (gs + i + "Index").trim(), d = (gs + i).trim();
        a[f] = c, a[d] = u.BYTES_PER_ELEMENT ? new u.constructor(u) : new n.type(u.length);
    }
    function As(t, e) {
        const n = t.properties, i = (gs + e + "Index").trim(), r = (gs + e).trim();
        delete n[i], delete n[r];
    }
    function _s(t, e, n, i, r) {
        if (!i) return;
        const s = i.geometry;
        if (s) {
            for (let o = 0; o < n.length; o++) {
                const a = n[o], l = a.attrName, h = (gs + l + "Index").trim();
                if (!Ms(s, e, a)) {
                    const {aPickingId: t} = s.properties;
                    if (!t || s.Ei === r) continue;
                    const e = s.properties[h];
                    if (!e) continue;
                    Ps(l, s, e, a.evaluate);
                    continue;
                }
                if (s.data[l]) {
                    const t = s.data[l];
                    t && t.buffer && t.buffer.destroy && t.buffer.destroy(), delete s.data[l];
                }
                const c = bs(s, e, a), u = a.define;
                if (c) {
                    if (Ps(l, s, s.properties[h], a.evaluate), u) {
                        const t = i.defines;
                        t[u] = 1, i.setDefines(t);
                    }
                    s.generateBuffers(t);
                } else if (u) {
                    const t = i.defines;
                    t[u] && (delete t[u], i.setDefines(t));
                }
            }
            s.Ei = r;
        }
    }
    function Ms(t, e, n) {
        const i = e[n.symbolName], r = t.Ci;
        return i !== r[n.symbolName] && (r[n.symbolName] = i, !0);
    }
    function Ss(t, e, n) {
        for (let i = 0; i < n.length; i++) if ("$" === e[0] && t[e.substring(1)] === n[i] || t.properties[e] === n[i]) return !0;
        return !1;
    }
    const ks = [];
    function Ps(t, e, n, i) {
        const {aPickingId: r, features: s} = e.properties;
        let o;
        if (n) {
            const a = (gs + t).trim();
            o = e.properties[a];
            const l = o.length / r.length, h = n.length;
            for (let t = 0; t < h; t += 2) {
                const a = n[t], h = n[t + 1];
                let c = s[r[a]];
                c && c.feature && Ts(o, c, i, a, h, l, e);
            }
        } else {
            o = e.data[t], o.dirty = !0;
            const n = o.length / r.length, a = r.length;
            let l = 0;
            for (let t = 0; t < a; t++) {
                if (r[t] === r[l] && t < a - 1) continue;
                let h = s[r[l]];
                h && h.feature && (Ts(o, h, i, l, t === a - 1 ? a : t, n, e), l = t);
            }
        }
        o.dirty && (e.updateData(t, o), o.dirty = !1);
    }
    function Ts(t, e, n, i, r, s, o) {
        const a = (e = e.feature).properties || {};
        void 0 === a.$layer && (e.properties || (e.properties = a), a.$layer = e.layer, 
        a.$type = e.type);
        const l = n(a, t[i * s], o);
        if (Array.isArray(l)) {
            let e = !1;
            for (let n = 0; n < s; n++) if (t[i * s + n] !== l[n]) {
                e = !0;
                break;
            }
            if (e) {
                for (let e = i * s; e < r * s; e += s) t.set(l, e);
                t.dirty = !0;
            }
        } else t[i] !== l && (fs(t, l, i, r), t.dirty = !0);
    }
    function Os(t) {
        return t && _(t) && t.property;
    }
    const {loginIBLResOnCanvas: Fs, logoutIBLResOnCanvas: Is, getIBLResOnCanvas: Cs} = n.reshader.pbr.PBRUtils, Es = [], Hs = [], Ds = t => 0 === t.getUniform("level"), Ls = t => t.getUniform("level") > 0;
    class Rs {
        constructor(t, e, i, r, s, o) {
            this.regl = t, this.layer = e, this.canvas = e.getRenderer().canvas, this.sceneConfig = r || {}, 
            this.dataConfig = o || {}, this.pluginIndex = s, this.scene = new n.reshader.Scene, 
            this.pickingFBO = e.getRenderer().pickingFBO, this.Hi = new es, this.level0Filter = Ds, 
            this.levelNFilter = Ls, this.loginTextureCache(), this.symbolDef = Array.isArray(i) ? i.map(t => os(t)) : [ os(i) ], 
            this.Di(), this.pickingViewport = {
                x: 0,
                y: 0,
                width: () => this.canvas ? this.canvas.width : 1,
                height: () => this.canvas ? this.canvas.height : 1
            }, this.sortByCommandKey = Ns.bind(this), this.colorCache = {};
        }
        getMap() {
            return this.layer ? this.layer.getMap() : null;
        }
        getTileLevelValue(t, e) {
            const n = this.layer.getRenderer();
            return n.getTileLevelValue && n.getTileLevelValue(t, e) || 0;
        }
        isVisible() {
            const t = this.L;
            if (t.length) for (let e = 0; e < t.length; e++) if (t[e] && !t[e].isFeatureConstant) return !0;
            const e = this.getSymbols();
            for (let t = 0; t < e.length; t++) {
                const n = e[t].visible;
                if (!1 !== n && 0 !== n) return !0;
            }
            return !1;
        }
        isMeshVisible(t) {
            const e = t && t.properties && t.properties.symbolIndex;
            if (!e) return !1;
            const n = this.L, i = e.index;
            let r;
            if (n[i]) {
                if (!n[i].isFeatureConstant) return !0;
                r = n[i](this.getMap().getZoom());
            } else r = this.getSymbol(e).visible;
            return !1 !== r && 0 !== r;
        }
        needToRedraw() {
            return this.Li;
        }
        needToRetireFrames() {
            return this.$t;
        }
        fillIncludes(t, e, n) {
            const i = n && n.includes;
            if (i) for (const r in i) i[r] && (n[r].uniformDeclares && e.push(...n[r].uniformDeclares), 
            n[r].defines && ns(t, n[r].defines));
        }
        setIncludeUniformValues(t, e) {
            const n = e && e.includes;
            if (n) for (const i in n) n[i] && e[i].renderUniforms && ns(t, e[i].renderUniforms);
        }
        createGeometries(t, e) {
            if (!t.length) return Hs;
            const n = [];
            for (let i = 0; i < t.length; i++) if (t[i]) if (void 0 !== t[i].ref) n[t[i].ref] ? n.push({
                geometry: n[t[i].ref].geometry,
                symbolIndex: t[i].symbolIndex,
                ref: t[i].ref
            }) : n.push(null); else {
                const r = this.createGeometry(t[i], e, i);
                if (r && r.geometry) {
                    const {pickingIdMap: n, idPickingMap: s, hasFeaIds: o} = this.Ri(t[i]), a = r.geometry.properties;
                    a.symbolIndex = r.symbolIndex, a.features = e, o && (a.feaIdPickingMap = n, a.feaPickingIdMap = s);
                }
                this.postCreateGeometry(r, n), n.push(r);
            }
            return n;
        }
        postCreateGeometry() {}
        Ri(t) {
            if (!t) return {};
            if (Array.isArray(t) && !(t = t[0])) return {};
            const e = t.featureIds, n = {}, i = {}, r = e && e.length;
            if (r) for (let r = 0; r < e.length; r++) n[t.data.aPickingId[r]] = e[r], i[e[r]] || (i[e[r]] = []), 
            i[e[r]].push(t.data.aPickingId[r]);
            return {
                hasFeaIds: r,
                idPickingMap: n,
                pickingIdMap: i
            };
        }
        createGeometry() {
            throw new Error("not implemented");
        }
        createMeshes(t, e, n) {
            const i = {}, r = [];
            for (let s = 0; s < t.length; s++) {
                if (!t[s]) continue;
                const o = this.createMesh(t[s], e, n, i);
                Array.isArray(o) ? r.push(...o) : r.push(o);
            }
            return r;
        }
        createMesh() {
            throw new Error("not implemented");
        }
        isBloom(t) {
            return !!this.getSymbol(t.properties.symbolIndex).bloom;
        }
        addMesh(t, e, n) {
            t = t.filter(t => this.isMeshVisible(t));
            const i = !!n.bloom;
            t.forEach(t => {
                const e = this.isBloom(t) && i, n = t.defines || {};
                !!n.HAS_BLOOM !== e && (e ? n.HAS_BLOOM = 1 : delete n.HAS_BLOOM, t.setDefines(n));
            }), this.scene.addMesh(t);
        }
        updateCollision() {}
        render(t) {
            return this.pluginIndex = t.pluginIndex, this.polygonOffsetIndex = t.polygonOffsetIndex, 
            this.paint(t);
        }
        prepareRender(t) {
            if (this.se === t.timestamp) return;
            if (this.se = t.timestamp, !this.createFnTypeConfig) return;
            const e = this.scene.getMeshes();
            if (!e || !e.length) return;
            const n = this.getMap().getZoom();
            for (let t = 0; t < e.length; t++) {
                if (!e[t] || !e[t].geometry) continue;
                const {symbolIndex: i} = e[t].properties, r = this.getSymbolDef(i);
                if (!r) continue;
                const s = this.getFnTypeConfig(i);
                _s(this.regl, r, s, e[t], n);
            }
        }
        paint(t) {
            const e = this.layer.getMap();
            if (!e) return {
                redraw: !1
            };
            this.Ni = t;
            const n = this.getUniformValues(e, t);
            return this.callShader(n, t), {
                redraw: this.Li
            };
        }
        setToRedraw(t) {
            t && (this.$t = t), this.Li = !0;
        }
        callShader(t, e) {
            this.callCurrentTileShader(t, e), this.callBackgroundTileShader(t, e);
        }
        callCurrentTileShader(t, e) {
            this.shader && (this.shader.filter = e.sceneFilter ? [ this.level0Filter, e.sceneFilter ] : this.level0Filter), 
            this.callRenderer(t, e);
        }
        callBackgroundTileShader(t, e) {
            this.shader && (this.shader.filter = e.sceneFilter ? [ this.levelNFilter, e.sceneFilter ] : this.levelNFilter), 
            this.scene.getMeshes().sort(zs), this.callRenderer(t, e);
        }
        callRenderer(t, e) {
            this.renderer.render(this.shader, t, this.scene, this.getRenderFBO(e));
        }
        getRenderFBO(t) {
            return t && t.renderTarget && t.renderTarget.fbo;
        }
        needPolygonOffset() {
            return !1;
        }
        getPolygonOffset() {
            const t = this.layer;
            return {
                factor: (e, n) => {
                    if (n.meshConfig.ssr) return 1;
                    return -(t.getPolygonOffset() + (this.polygonOffsetIndex || 0));
                },
                units: (e, n) => n.meshConfig.ssr ? 1 : -(t.getPolygonOffset() + (this.polygonOffsetIndex || 0))
            };
        }
        getBlendFunc() {
            return {
                src: () => this.sceneConfig.blendSrc || "src alpha",
                dst: () => this.sceneConfig.blendDst || "one minus src alpha"
            };
        }
        pick(t, e, n = 3) {
            if (!this.layer.options.picking || !1 === this.sceneConfig.picking) return null;
            if (!this.pickingFBO || !this.picking) return null;
            const i = this.getMap(), r = this.getUniformValues(i);
            for (let s = 0; s < this.picking.length; s++) {
                const o = this.picking[s];
                o.render(this.scene.getMeshes(), r, !0);
                let a = {};
                o.getRenderedMeshes().length && (a = o.pick(t, e, n, r, {
                    viewMatrix: i.viewMatrix,
                    projMatrix: i.projMatrix,
                    returnPoint: this.layer.options.pickingPoint && !1 !== this.sceneConfig.pickingPoint
                }));
                const {meshId: l, pickingId: h, point: c} = a, u = (0 === l || l) && o.getMeshAt(l);
                if (!u || !u.geometry) continue;
                let f = u.geometry.properties;
                f.features || (f = u.properties), c && c.length && (c[0] = Math.round(1e5 * c[0]) / 1e5, 
                c[1] = Math.round(1e5 * c[1]) / 1e5, c[2] = Math.round(1e5 * c[2]) / 1e5);
                const d = {
                    data: f && f.features && f.features[h],
                    point: c,
                    plugin: this.pluginIndex
                }, p = u.geometry.properties.feaPickingIdMap;
                return p && (d.featureId = p[h]), d;
            }
            return null;
        }
        updateSceneConfig() {}
        updateDataConfig() {
            return !0;
        }
        deleteMesh(t, e) {
            if (t) if (this.scene.removeMesh(t), Array.isArray(t)) for (let n = 0; n < t.length; n++) {
                if (!t[n].isValid()) continue;
                const i = t[n].geometry;
                !e && i && i.dispose(), t[n].material && t[n].material.dispose(), t[n].dispose();
            } else {
                if (!t.isValid()) return;
                !e && t.geometry && t.geometry.dispose(), t.material && t.material.dispose(), t.dispose();
            }
        }
        startFrame(t) {
            this.zi || (this.init(t), this.zi = !0), this.se !== t.timestamp && (this.Li = !1, 
            this.$t = !1), this.scene.clear();
        }
        resize() {}
        delete() {
            if (this.scene.clear(), this.shader && this.shader.dispose(), this.picking) {
                for (let t = 0; t < this.picking.length; t++) this.picking[t].dispose();
                delete this.picking;
            }
            if (this.Vi) {
                for (let t = 0; t < this.Vi.length; t++) this.Vi[t].dispose();
                delete this.Vi;
            }
            this.logoutTextureCache();
        }
        updateSymbol(t, e) {
            const n = this.supportRenderMode("taa");
            Array.isArray(t) || (t = [ t ], e = [ e ]);
            let i = !1;
            for (let n = 0; n < t.length; n++) if (t[n]) {
                const r = this.ji(n, t[n], e[n]);
                r && (i = r);
            }
            return delete this.Ui, this.setToRedraw(n), i;
        }
        Gi(t, e) {
            for (const n in e) if (ys(e, n) && Oi[n] && !Ji(e[n], t[n])) return !0;
            return !1;
        }
        ji(t, e, n) {
            if (!this.Wi) return !1;
            const i = this.Gi(this.symbolDef[t] || {}, n);
            this.symbolDef[t] = os(n);
            const r = this.Wi[t];
            for (const t in r) delete r[t];
            const s = this.getMap(), o = k(this.symbolDef[t], () => [ s.getZoom() ]);
            for (const t in o) {
                const e = Object.getOwnPropertyDescriptor(o, t);
                e.get ? Object.defineProperty(r, t, {
                    get: e.get,
                    set: e.set,
                    configurable: !0,
                    enumerable: !0
                }) : r[t] = o[t];
            }
            return _(n.visible) && (this.L[t] = M(n.visible)), i;
        }
        getSymbolDef(t) {
            return this.symbolDef[t.index];
        }
        getSymbols() {
            return this.Wi;
        }
        getSymbol(t) {
            const e = t.index;
            return this.Wi[e];
        }
        Di() {
            const t = this.getMap(), e = () => [ t.getZoom() ];
            this.Wi = [], this.L = [];
            for (let t = 0; t < this.symbolDef.length; t++) this.Wi[t] = k(ns({}, this.symbolDef[t]), e), 
            this.symbolDef[t] && _(this.symbolDef[t].visible) && (this.L[t] = M(this.symbolDef[t].visible));
        }
        getFnTypeConfig(t) {
            this.Ui || (this.Ui = []);
            const e = t.index;
            if (!this.Ui[e]) {
                const n = this.getSymbolDef(t), i = this.getMap();
                this.Ui[e] = this.createFnTypeConfig(i, n);
            }
            return this.Ui[e];
        }
        Bi() {
            delete this.Ui;
        }
        loginTextureCache() {
            const t = "__gl_textures".trim(), e = this.getMap();
            e[t] || (e[t] = {
                count: 0
            }), e[t].count++;
        }
        logoutTextureCache() {
            const t = "__gl_textures".trim(), e = this.getMap(), n = this.Xi;
            if (n) for (const i in n) ys(n, i) && e[t][i] && (e[t][i].count--, e[t][i].count <= 0 && delete e[t][i]);
            e[t].count--, e[t].count <= 0 && (e[t] = {});
        }
        getCachedTexture(t) {
            const e = "__gl_textures".trim(), n = this.getMap()[e][t];
            return n ? n.data : null;
        }
        addCachedTexture(t, e) {
            const n = "__gl_textures".trim(), i = this.getMap();
            let r = i[n][t];
            r ? r.data = e : r = i[n][t] = {
                data: e,
                count: 0
            }, this.Xi || (this.Xi = {}), r.data.then || this.Xi[t] || (r.count++, this.Xi[t] = 1);
        }
        disposeCachedTexture(t) {
            let e;
            if (e = "string" == typeof t ? t : t.url, !this.Xi || !this.Xi[e]) return;
            const n = "__gl_textures".trim();
            delete this.Xi[e];
            const i = this.getMap();
            i[n][e] && (i[n][e].count--, i[n][e].count <= 0 && delete i[n][e]);
        }
        shouldDeleteMeshOnUpdateSymbol() {
            return !1;
        }
        needClearStencil() {
            return !1;
        }
        supportRenderMode(t) {
            return "taa" === t || "fxaa" === t;
        }
        qi(t) {
            const e = this.scene.getMeshes();
            if (!e.length) return;
            const i = e.map(t => ({
                transform: t.localTransform,
                level: t.getUniform("level"),
                mesh: t
            })).sort(this.Ji), r = this.getMap().projViewMatrix;
            this.Hi.start(t);
            const s = {};
            for (let e = 0; e < i.length; e++) {
                const o = i[e].mesh;
                let a = s[o.properties.tile.id];
                void 0 === a && (n.mat4.multiply(Es, r, i[e].transform), a = this.Hi.write(t, Es), 
                s[o.properties.tile.id] = a), o.setUniform("ref", a);
            }
            this.Hi.end(t), this.regl.Yi();
        }
        Ji(t, e) {
            return e.level - t.level;
        }
        outline(t, e) {
            const n = {};
            for (let i = 0; i < e.length; i++) ss(e[i]) || n[e[i]] || (this.$i(t, e[i]), n[e[i]] = 1);
        }
        $i(t, e) {
            if (!this.picking) return;
            if (this.Zi || (this.Zi = new n.reshader.Scene), !this.Vi && (this.Ki(), !this.Vi)) return void console.warn(`Plugin at ${this.pluginIndex} doesn't support outline.`);
            const i = this.getUniformValues(this.getMap(), this.Ni), r = this.Qi(e);
            if (r.length) for (let n = 0; n < r.length; n++) {
                const s = r[n].geometry.properties.feaIdPickingMap;
                if (s) {
                    const o = s[e];
                    if (o) {
                        const e = {};
                        this.Zi.setMeshes(r[n]);
                        for (let n = 0; n < o.length; n++) {
                            const r = o[n];
                            if (!e[r]) {
                                e[r] = 1, i.highlightPickingId = r;
                                for (let e = 0; e < this.Vi.length; e++) this.renderer.render(this.Vi[e], i, this.Zi, t);
                            }
                        }
                    }
                }
            }
        }
        Qi(t) {
            const e = [], n = this.scene.getMeshes();
            for (let i = 0; i < n.length; i++) {
                const r = n[i], s = r.geometry.properties.feaIdPickingMap;
                s && void 0 !== s[t] && e.push(r);
            }
            return e;
        }
        outlineAll(t) {
            if (!this.picking) return;
            if (!this.Vi && (this.Ki(), !this.Vi)) return void console.warn(`Plugin at ${this.pluginIndex} doesn't support outline.`);
            const e = this.getUniformValues(this.getMap(), this.Ni);
            e.highlightPickingId = -1;
            for (let n = 0; n < this.Vi.length; n++) this.renderer.render(this.Vi[n], e, this.scene, t);
        }
        Ki() {
            if (!this.picking) return;
            const t = this.layer.getRenderer().canvas;
            this.Vi = [];
            for (let e = 0; e < this.picking.length; e++) {
                const i = this.picking[e].getPickingVert(), r = {
                    ENABLE_PICKING: 1,
                    HAS_PICKING_ID: 1
                }, s = this.picking[e].getUniformDeclares().slice(0);
                void 0 !== s.uPickingId && (r.HAS_PICKING_ID = 2), this.Vi[e] = new n.reshader.MeshShader({
                    vert: i,
                    frag: "precision highp float;\nuniform float highlightPickingId;\nvarying float vPickingId;\nvoid main() {\n  if(highlightPickingId < .0 || floor(highlightPickingId + .5) == floor(vPickingId + .5)) {\n    gl_FragColor = vec4(1.);\n  } else {\n    discard;\n  }\n}",
                    uniforms: s,
                    defines: r,
                    extraCommandProps: {
                        viewport: {
                            x: 0,
                            y: 0,
                            width: () => t.width,
                            height: () => t.height
                        },
                        depth: {
                            enable: !0,
                            mask: !1,
                            func: "always"
                        },
                        blend: {
                            enable: !0,
                            func: {
                                src: "src alpha",
                                dst: "one minus src alpha"
                            },
                            equation: "add"
                        }
                    }
                }), this.Vi[e].filter = this.picking[e].filter;
            }
        }
        hasIBL() {
            const t = this.getMap().getLightManager();
            return !!(t && t.getAmbientResource());
        }
        updateIBLDefines(t) {
            const e = t.shaderDefines;
            let n = !1;
            this.hasIBL() ? e[[ "HAS_IBL_LIGHTING" ]] || (e.HAS_IBL_LIGHTING = 1, n = !0) : e[[ "HAS_IBL_LIGHTING" ]] && (delete e.HAS_IBL_LIGHTING, 
            n = !0), n && (t.shaderDefines = e);
        }
        getIBLRes() {
            const t = this.layer.getRenderer().canvas;
            return Cs(t);
        }
        createIBLTextures() {
            const t = this.layer.getRenderer().canvas;
            Fs(t, this.regl, this.getMap()), this.setToRedraw(!0), this.layer.fire("iblupdated");
        }
        disposeIBLTextures() {
            const t = this.layer.getRenderer().canvas;
            Is(t, this.getMap());
        }
        evaluateInFnTypeConfig(t, e, n, i, r) {
            let s = this.er;
            s || (s = this.er = {});
            const o = function(t) {
                let e = 0;
                const n = t && t.length || 0;
                if (!n) return e;
                let i;
                for (let r = 0; r < n; r++) i = t.charCodeAt(r), e = (e << 5) - e + i, e &= e;
                return e;
            }(JSON.stringify(t));
            let a = s[o];
            return a || (a = s[o] = r ? S(t) : M(t)), a(n.getZoom(), i);
        }
    }
    function Ns(t, e) {
        const n = t && t.getCommandKey(this.regl) || "", i = e && e.getCommandKey(this.regl) || "";
        return n.localeCompare(i);
    }
    function zs(t, e) {
        return t.properties.level - e.properties.level;
    }
    class Vs extends Rs {
        constructor(t, e, n, i, r, s) {
            super(t, e, n, i, r, s);
        }
        createGeometry(t, e) {
            if (!t.data) return {
                geometry: null,
                symbolIndex: t.symbolIndex
            };
            t.iconAtlas && t.iconAtlas.image && (t.iconAtlas.image.dataType = t.type, t.iconAtlas.image.type = "icon"), 
            t.glyphAtlas && t.glyphAtlas.image && (t.glyphAtlas.image.type = "glyph");
            const i = ns({}, t.data), r = new n.reshader.Geometry(i, t.indices, 0, {
                primitive: this.getPrimitive(),
                positionSize: t.positionSize
            });
            return r.properties = {
                features: e,
                elements: t.indices
            }, t.iconAtlas && (r.properties.iconAtlas = t.iconAtlas.image), t.glyphAtlas && (r.properties.glyphAtlas = t.glyphAtlas.image), 
            r.properties.aFeaIds = t.featureIds, r.properties.collideIds = t.featureIds && t.featureIds.length ? t.featureIds : t.data.aPickingId, 
            r.properties.uniqueCollideIds = ms(r.properties.collideIds), ns(r.properties, t.properties), 
            {
                geometry: r,
                symbolIndex: t.symbolIndex
            };
        }
        getPrimitive() {
            return "triangles";
        }
        getRenderFBO(t) {
            return t && t.renderTarget && t.renderTarget.fbo;
        }
        supportRenderMode(t) {
            return "noAa" === t;
        }
        createAtlasTexture(t, e) {
            const n = this.regl, i = t, r = {
                width: i.width,
                height: i.height,
                data: i.data,
                format: i.format,
                mag: "linear",
                min: "linear",
                flipY: e
            };
            if ("icon" === t.type) {
                const e = "point" !== t.dataType ? "repeat" : "clamp";
                r.wrapS = e, r.wrapT = e;
            }
            return n.texture(r);
        }
        drawDebugAtlas(t) {
            if (document.getElementById("MAPTALKS_ICON_DEBUG")) {
                const e = document.getElementById("MAPTALKS_ICON_DEBUG");
                let n;
                if (e.width = t.width, e.height = t.height, e.style.width = t.width + "px", e.style.height = t.height + "px", 
                "alpha" === t.format) {
                    n = new Uint8ClampedArray(4 * t.data.length);
                    for (let e = 0; e < t.data.length; e++) n[4 * e + 3] = t.data[e];
                } else n = new Uint8ClampedArray(t.data);
                e.getContext("2d").putImageData(new ImageData(n, t.width, t.height), 0, 0);
            }
        }
    }
    var js = "attribute vec3 aPosition;\nuniform mat4 projViewModelMatrix;\n#include <fbo_picking_vert>\nvoid main() {\n  gl_Position = projViewModelMatrix * vec4(aPosition, 1.);\n  fbo_picking_setData(gl_Position.w, true);\n}";
    function Us(t, e, n) {
        const i = e, r = {
            width: i.width,
            height: i.height,
            data: i.data,
            format: i.format,
            mag: "linear",
            min: "linear",
            flipY: n
        };
        if ("icon" === e.type) {
            const t = "point" !== e.dataType ? "repeat" : "clamp";
            r.wrapS = t, r.wrapT = t;
        }
        return t.texture(r);
    }
    const Gs = {
        polygonFill: [ 1, 1, 1, 1 ],
        polygonOpacity: 1,
        uvScale: [ 1, 1 ],
        uvOffset: [ 0, 0 ]
    };
    class Ws extends Vs {
        prepareSymbol(t) {
            const e = t.polygonFill;
            Array.isArray(e) && (3 === e.length && e.push(1), t.polygonFill = e.map(t => 255 * t));
        }
        supportRenderMode(t) {
            return this.sceneConfig.antialias || void 0 === this.sceneConfig.antialias ? "fxaa" === t || "fxaaBeforeTaa" === t : super.supportRenderMode(t);
        }
        isBloom(t) {
            return !!this.getSymbol(t.properties.symbolIndex).polygonBloom;
        }
        needPolygonOffset() {
            return !0;
        }
        createMesh(t, e, i) {
            const {tilePoint: r} = i, {geometry: s, symbolIndex: o, ref: a} = t, l = s.data.aPosition instanceof Int16Array, h = {
                tileExtent: s.properties.tileExtent,
                tileRatio: s.properties.tileRatio
            }, c = this.getSymbol(o);
            if (as(h, "polygonFill", c, "polygonFill", Gs.polygonFill, cs(this.colorCache)), 
            as(h, "polygonOpacity", c, "polygonOpacity", Gs.polygonOpacity), as(h, "uvScale", c, "uvScale", Gs.uvScale), 
            as(h, "uvOffset", c, "uvOffset", Gs.uvOffset), void 0 === a) {
                const t = this.getSymbolDef(o), e = this.getFnTypeConfig(o);
                xs(s, t, e), s.generateBuffers(this.regl);
            }
            const u = s.properties.iconAtlas;
            if (u && s.data.aTexInfo) {
                const t = this.getMap();
                h.tilePoint = r, Object.defineProperty(h, "tileScale", {
                    enumerable: !0,
                    get: function() {
                        return s.properties.tileResolution / t.getResolution();
                    }
                }), h.polygonPatternFile = Us(this.regl, u, !1), h.atlasSize = [ u.width, u.height ], 
                this.drawDebugAtlas(u);
            }
            const f = new n.reshader.Material(h, Gs), d = new n.reshader.Mesh(s, f, {
                disableVAO: !0,
                castShadow: !1,
                picking: !0
            }), p = {};
            return u && s.data.aTexInfo && (p.HAS_PATTERN = 1), s.data.aColor && (p.HAS_COLOR = 1), 
            s.data.aOpacity && (p.HAS_OPACITY = 1), s.data.aUVScale && (p.HAS_UV_SCALE = 1), 
            s.data.aUVOffset && (p.HAS_UV_OFFSET = 1), l && (p.IS_VT = 1), d.setDefines(p), 
            d.setLocalTransform(e), d.properties.symbolIndex = o, d;
        }
        createFnTypeConfig(t, e) {
            const n = S(e.polygonFill), i = M(e.polygonOpacity), r = M(e.uvScale), s = M(e.uvOffset), o = new Uint8Array(1), a = new Uint16Array(1);
            return [ {
                attrName: "aColor",
                symbolName: "polygonFill",
                type: Uint8Array,
                width: 4,
                define: "HAS_COLOR",
                evaluate: (e, i, r) => {
                    let s = n(t.getZoom(), e);
                    return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e, !0)), Array.isArray(s) || (s = this.colorCache[s] = this.colorCache[s] || zt(s).unitArray()), 
                    s = hs(s), s;
                }
            }, {
                attrName: "aOpacity",
                symbolName: "polygonOpacity",
                type: Uint8Array,
                width: 1,
                define: "HAS_OPACITY",
                evaluate: (e, n, r) => {
                    let s = i(t.getZoom(), e);
                    return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e)), o[0] = 255 * s, o[0];
                }
            }, {
                attrName: "aUVScale",
                symbolName: "uvScale",
                type: Uint16Array,
                width: 2,
                define: "HAS_UV_SCALE",
                evaluate: e => {
                    let n = r(t.getZoom(), e);
                    return a[0] = 10 * n, a[0];
                }
            }, {
                attrName: "aUVOffset",
                symbolName: "uvOffset",
                type: Uint8Array,
                width: 2,
                define: "HAS_UV_OFFSET",
                evaluate: e => {
                    let n = s(t.getZoom(), e);
                    return o[0] = 255 * n, o[0];
                }
            } ];
        }
        paint(t) {
            t.states && t.states.includesChanged.shadow && (this.shader.dispose(), this.nr(t)), 
            super.paint(t);
        }
        init(t) {
            const e = this.regl;
            this.renderer = new n.reshader.Renderer(e), this.nr(t), this.pickingFBO && (this.picking = [ new n.reshader.FBORayPicking(this.renderer, {
                vert: js,
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            }, this.pickingFBO) ]);
        }
        nr(t) {
            const e = this.canvas, i = [ {
                name: "projViewModelMatrix",
                type: "function",
                fn: function(t, e) {
                    const i = [];
                    return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                }
            } ], r = {};
            this.fillIncludes(r, i, t);
            const s = {
                x: 0,
                y: 0,
                width: () => e ? e.width : 1,
                height: () => e ? e.height : 1
            }, o = this.layer.getRenderer(), a = o.isEnableTileStencil && o.isEnableTileStencil(), l = this.sceneConfig.depthRange;
            this.shader = new n.reshader.MeshShader({
                vert: "#define SHADER_NAME FILL\nattribute vec3 aPosition;\n#ifdef HAS_COLOR\nattribute vec4 aColor;\nvarying vec4 vColor;\n#endif\n#ifdef HAS_OPACITY\nattribute float aOpacity;\nvarying float vOpacity;\n#endif\nuniform mat4 projViewModelMatrix;\n#ifndef IS_VT\nuniform mat4 modelMatrix;\n#endif\n#ifdef HAS_PATTERN\nattribute vec4 aTexInfo;\nuniform vec2 tilePoint;\n#ifdef IS_VT\nuniform float tileRatio;\nuniform float tileScale;\n#else\nuniform float glScale;\n#endif\n#ifdef HAS_UV_SCALE\nattribute vec2 aUVScale;\nvarying vec2 vUVScale;\n#endif\n#ifdef HAS_UV_OFFSET\nattribute vec2 aUVOffset;\nvarying vec2 vUVOffset;\n#endif\nvarying vec2 vTexCoord;\nvarying vec4 vTexInfo;\nvec2 c(vec2 d, vec2 e) {\n  vTexInfo = vec4(aTexInfo.xy, e);\n#ifdef IS_VT\nfloat f = d.x / e.x;\n  float h = d.y / e.y;\n  return vec2(f, h);\n#else\nfloat f = (d.x - tilePoint.x) * glScale / e.x;\n  float h = (d.y - tilePoint.y) * glScale / e.y;\n  return vec2(f, -h);\n#endif\n}\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_vert>\n#endif\nvoid main() {\n  vec4 i = vec4(aPosition, 1.);\n  gl_Position = projViewModelMatrix * i;\n#ifdef HAS_PATTERN\nvec2 j = aTexInfo.zw + 1.;\n#ifdef IS_VT\nvec2 k = mod((tilePoint) * tileScale * vec2(1., -1.) / j, 1.);\n  vTexCoord = k + c(aPosition.xy * tileScale / tileRatio, j);\n#else\nvec4 l = modelMatrix * vec4(aPosition, 1.);\n  vTexCoord = c(l.xy, j);\n#endif\n#ifdef HAS_UV_SCALE\nvUVScale = aUVScale / 255.;\n#endif\n#ifdef HAS_UV_OFFSET\nvUVOffset = aUVOffset / 255.;\n#endif\n#endif\n#ifdef HAS_COLOR\nvColor = aColor / 255.;\n#endif\n#ifdef HAS_OPACITY\nvOpacity = aOpacity / 255.;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nshadow_computeShadowPars(i);\n#endif\n}",
                frag: "#define SHADER_NAME FILL\nprecision mediump float;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\n#ifdef HAS_PATTERN\n#ifdef HAS_UV_SCALE\nvarying vec2 vUVScale;\n#else\nuniform vec2 uvScale;\n#endif\n#ifdef HAS_UV_OFFSET\nvarying vec2 vUVOffset;\n#else\nuniform vec2 uvOffset;\n#endif\n#endif\n#ifdef HAS_PATTERN\nuniform sampler2D polygonPatternFile;\nuniform vec2 atlasSize;\nvarying vec2 vTexCoord;\nvarying vec4 vTexInfo;\nvec2 c() {\n  \n#ifdef HAS_UV_SCALE\nvec2 d = vUVScale;\n#else\nvec2 d = uvScale;\n#endif\n#ifdef HAS_UV_OFFSET\nvec2 e = vUVOffset;\n#else\nvec2 e = uvOffset;\n#endif\nvec2 f = mod(vTexCoord * d + e, 1.);\n  vec2 h = vTexInfo.xy;\n  vec2 i = vTexInfo.zw;\n  return (h + f * i) / atlasSize;\n}\n#endif\n#ifdef HAS_COLOR\nvarying vec4 vColor;\n#else\nuniform vec4 polygonFill;\n#endif\n#ifdef HAS_OPACITY\nvarying float vOpacity;\n#else\nuniform lowp float polygonOpacity;\n#endif\nuniform float tileExtent;\nuniform lowp float blendSrcIsOne;\nvoid main() {\n  \n#ifdef HAS_COLOR\nvec4 j = vColor;\n#else\nvec4 j = polygonFill;\n#endif\n#ifdef HAS_PATTERN\nif(vTexInfo.z * vTexInfo.w > 1.) {\n    vec2 f = c();\n    j = texture2D(polygonPatternFile, f);\n  }\n#endif\n#ifdef HAS_OPACITY\ngl_FragColor = j * vOpacity;\n#else\ngl_FragColor = j * polygonOpacity;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat k = shadow_computeShadow();\n  gl_FragColor.rgb = shadow_blend(gl_FragColor.rgb, k);\n#endif\nif(blendSrcIsOne == 1.) {\n    gl_FragColor *= gl_FragColor.a;\n  }\n}",
                uniforms: i,
                defines: r,
                extraCommandProps: {
                    viewport: s,
                    stencil: {
                        enable: !0,
                        mask: 255,
                        func: {
                            cmp: () => a ? "=" : "<=",
                            ref: (t, e) => a ? e.stencilRef : e.level,
                            mask: 255
                        },
                        op: {
                            fail: "keep",
                            zfail: "keep",
                            zpass: "replace"
                        }
                    },
                    depth: {
                        enable: !0,
                        range: l || [ 0, 1 ],
                        mask: (t, e) => {
                            if (!ss(this.sceneConfig.depthMask)) return !!this.sceneConfig.depthMask;
                            if (e.meshConfig.transparent) return !1;
                            const n = e.polygonOpacity;
                            return !(ds(n) && n < 1);
                        },
                        func: this.sceneConfig.depthFunc || "<="
                    },
                    blend: {
                        enable: !0,
                        func: this.getBlendFunc(),
                        equation: "add"
                    },
                    polygonOffset: {
                        enable: !0,
                        offset: this.getPolygonOffset()
                    }
                }
            });
        }
        getUniformValues(t, e) {
            const n = {
                projViewMatrix: t.projViewMatrix,
                glScale: 1 / t.getGLScale(),
                blendSrcIsOne: +!("one" !== this.sceneConfig.blendSrc)
            };
            return this.setIncludeUniformValues(n, e), n;
        }
    }
    var Bs = "#define SHADER_NAME LINE\n#define AA_CLIP_LIMIT 2.0\n#define AA_LINE_WIDTH 16.0\n#define DEVICE_PIXEL_RATIO 1.0\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n#define EXTRUDE_SCALE 63.0;\n#define MAX_LINE_DISTANCE 65535.0\nattribute vec3 aPosition;\n#if defined(HAS_UP) || defined(HAS_PATTERN)\nattribute vec3 aExtrude;\n#else\nattribute vec2 aExtrude;\n#endif\n#if defined(HAS_PATTERN) || defined(HAS_DASHARRAY) || defined(HAS_GRADIENT) || defined(HAS_TRAIL)\nattribute float aLinesofar;\nvarying highp float vLinesofar;\n#endif\nuniform float cameraToCenterDistance;\n#if defined(HAS_STROKE_WIDTH)\nattribute float aLineStrokeWidth;\n#else\nuniform float lineStrokeWidth;\n#endif\nuniform mat4 projViewModelMatrix;\nuniform mat4 modelMatrix;\nuniform float tileResolution;\nuniform float resolution;\nuniform float tileRatio;\n#ifdef HAS_LINE_DX\nattribute float aLineDx;\n#else\nuniform float lineDx;\n#endif\n#ifdef HAS_LINE_DY\nattribute float aLineDy;\n#else\nuniform float lineDy;\n#endif\nuniform vec2 canvasSize;\nuniform float layerScale;\nvarying vec2 vNormal;\nvarying vec2 vWidth;\nvarying float vGammaScale;\n#ifndef ENABLE_TILE_STENCIL\nvarying vec2 vPosition;\n#endif\n#ifdef USE_LINE_OFFSET\nattribute vec2 aExtrudeOffset;\n#endif\n#ifdef HAS_LINE_WIDTH\nattribute float aLineWidth;\n#else\nuniform float lineWidth;\n#endif\n#ifndef PICKING_MODE\n#ifndef HAS_GRADIENT\n#ifdef HAS_COLOR\nattribute vec4 aColor;\nvarying vec4 vColor;\n#endif\n#ifdef HAS_PATTERN\n#ifdef HAS_PATTERN_ANIM\nattribute float aLinePatternAnimSpeed;\nvarying float vLinePatternAnimSpeed;\n#endif\n#ifdef HAS_PATTERN_GAP\nattribute float aLinePatternGap;\nvarying float vLinePatternGap;\n#endif\nattribute vec4 aTexInfo;\nvarying vec4 vTexInfo;\nvarying float vJoin;\n#endif\n#ifdef HAS_DASHARRAY\n#ifdef HAS_DASHARRAY_ATTR\nattribute vec4 aDasharray;\nvarying vec4 vDasharray;\n#endif\n#ifdef HAS_DASHARRAY_COLOR\nattribute vec4 aDashColor;\nvarying vec4 vDashColor;\n#endif\n#endif\n#endif\n#ifdef HAS_STROKE_COLOR\nattribute vec4 aStrokeColor;\nvarying vec4 vStrokeColor;\n#endif\n#ifdef HAS_OPACITY\nattribute float aOpacity;\nvarying float vOpacity;\n#endif\n#ifdef HAS_GRADIENT\nattribute float aGradIndex;\nvarying float vGradIndex;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_vert>\n#endif\n#else\n#include <fbo_picking_vert>\n#endif\nvarying vec3 vVertex;\nvoid main() {\n  vec3 c = aPosition;\n#ifdef HAS_UP\nfloat d = mod(aExtrude.z, 4.);\n  float e = floor(d * .5);\n  float f = d - e * 2.;\n  vNormal = vec2(e, f * 2. - 1.);\n#else\nc.xy = floor(c.xy * .5);\n  vNormal = aPosition.xy - 2. * c.xy;\n  vNormal.y = vNormal.y * 2. - 1.;\n#endif\nvec4 h = vec4(c, 1.);\n  vec4 i = projViewModelMatrix * h;\n  vVertex = (modelMatrix * h).xyz;\n#ifdef HAS_STROKE_WIDTH\nfloat j = aLineStrokeWidth / 2. * layerScale;\n#else\nfloat j = lineStrokeWidth;\n#endif\n#ifdef HAS_LINE_WIDTH\nfloat k = aLineWidth / 2. * layerScale;\n#else\nfloat k = lineWidth * layerScale;\n#endif\nfloat l = k / 2. + j;\n  float m = sign(j) * k / 2.;\n  float n = m + sign(m) * ANTIALIASING;\n  float o = l + sign(l) * ANTIALIASING;\n#ifdef USE_LINE_OFFSET\nvec2 u = lineOffset * (vNormal.y * (aExtrude.xy - aExtrudeOffset) + aExtrudeOffset);\n  vec2 v = (o * aExtrude.xy + u) / EXTRUDE_SCALE;\n#else\nvec2 A = aExtrude.xy / EXTRUDE_SCALE;\n  vec2 v = o * A;\n#endif\nfloat B = tileResolution / resolution;\n  vec4 C = vec4(c + vec3(v, .0) * tileRatio / B, 1.);\n  gl_Position = projViewModelMatrix * C;\n  float D = min(AA_CLIP_LIMIT / canvasSize.x, AA_CLIP_LIMIT / canvasSize.y);\n  float E = distance(gl_Position.xy / gl_Position.w, i.xy / i.w) - D;\n  if(E * k < .0) {\n    float F = -E / D;\n    float G = F * F * F * F * AA_LINE_WIDTH;\n    v += G * A;\n    o += G / 6.;\n    C = vec4(c + vec3(v, .0) * tileRatio / B, 1.);\n    gl_Position = projViewModelMatrix * C;\n  }\n#ifdef HAS_LINE_DX\nfloat H = aLineDx;\n#else\nfloat H = lineDx;\n#endif\n#ifdef HAS_LINE_DY\nfloat I = aLineDy;\n#else\nfloat I = lineDy;\n#endif\nfloat J = gl_Position.w;\n  gl_Position.xy += vec2(H, I) * 2. / canvasSize * J;\n#ifndef PICKING_MODE\nvWidth = vec2(o, n);\n  vGammaScale = J / cameraToCenterDistance;\n#ifndef ENABLE_TILE_STENCIL\nvPosition = c.xy;\n#ifdef USE_LINE_OFFSET\nvPosition += tileRatio * u / EXTRUDE_SCALE;\n#endif\n#endif\n#if defined(HAS_PATTERN) || defined(HAS_DASHARRAY) || defined(HAS_GRADIENT)\n#ifdef HAS_GRADIENT\nvLinesofar = aLinesofar / MAX_LINE_DISTANCE;\n  vGradIndex = aGradIndex;\n#else\nvLinesofar = aLinesofar / tileRatio * B;\n#endif\n#endif\n#ifndef HAS_GRADIENT\n#ifdef HAS_COLOR\nvColor = aColor;\n#endif\n#ifdef HAS_DASHARRAY\n#ifdef HAS_DASHARRAY_ATTR\nvDasharray = aDasharray;\n#endif\n#ifdef HAS_DASHARRAY_COLOR\nvDashColor = aDashColor / 255.;\n#endif\n#endif\n#ifdef HAS_PATTERN\nvTexInfo = vec4(aTexInfo.xy, aTexInfo.zw + 1.);\n  vJoin = floor(aExtrude.z / 4.);\n#ifdef HAS_PATTERN_ANIM\nvLinePatternAnimSpeed = aLinePatternAnimSpeed / 127.;\n#endif\n#ifdef HAS_PATTERN_GAP\nvLinePatternGap = aLinePatternGap / 10.0;\n#endif\n#endif\n#endif\n#ifdef HAS_STROKE_COLOR\nvStrokeColor = aStrokeColor;\n#endif\n#ifdef HAS_OPACITY\nvOpacity = aOpacity / 255.;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nshadow_computeShadowPars(C);\n#endif\n#else\nfbo_picking_setData(J, true);\n#endif\n}";
    class Xs extends Vs {
        prepareSymbol(t) {
            const e = t.lineColor;
            Array.isArray(e) && (3 === e.length && e.push(1), t.lineColor = e.map(t => 255 * t));
            const n = t.lineStrokeColor;
            Array.isArray(n) && (3 === n.length && n.push(1), t.lineStrokeColor = n.map(t => 255 * t));
            const i = t.lineDashColor;
            Array.isArray(i) && (3 === i.length && i.push(1), t.lineDashColor = i.map(t => 255 * t));
        }
        needToRedraw() {
            if (this.ir) return !0;
            const t = this.getSymbols(), e = this.sceneConfig.trailAnimation;
            if (e && e.enable || super.needToRedraw()) return !0;
            for (let e = 0; e < t.length; e++) if (t[e].linePatternAnimSpeed) return !0;
            return !1;
        }
        isBloom(t) {
            return !!this.getSymbol(t.properties.symbolIndex).lineBloom;
        }
        needPolygonOffset() {
            return !0;
        }
        createMesh(t, e) {
            if (!t.geometry) return null;
            const {geometry: i, symbolIndex: r, ref: s} = t;
            if (void 0 === s) {
                xs(i, this.getSymbolDef(r), this.getFnTypeConfig(r));
            }
            const o = this.getSymbol(r), a = {
                tileResolution: i.properties.tileResolution,
                tileRatio: i.properties.tileRatio,
                tileExtent: i.properties.tileExtent
            };
            this.setLineUniforms(o, a), as(a, "lineColor", o, "lineColor", "#000", cs(this.colorCache)), 
            as(a, "lineStrokeColor", o, "lineStrokeColor", [ 0, 0, 0, 0 ], cs(this.colorCache)), 
            as(a, "lineDasharray", o, "lineDasharray", [ 0, 0, 0, 0 ], t => {
                let e;
                if (t && t.length) {
                    const n = t;
                    1 === t.length ? e = [ n[0], n[0], n[0], n[0] ] : 2 === t.length ? e = [ n[0], n[1], n[0], n[1] ] : 3 === t.length ? e = [ n[0], n[1], n[2], n[2] ] : 4 === t.length && (e = t);
                }
                return e || [ 0, 0, 0, 0 ];
            }), as(a, "lineDashColor", o, "lineDashColor", [ 0, 0, 0, 0 ], cs(this.colorCache));
            const l = i.properties.iconAtlas, h = i.data.aPosition instanceof Int16Array;
            l && (a.linePatternFile = Us(this.regl, l, !1), a.atlasSize = l ? [ l.width, l.height ] : [ 0, 0 ], 
            a.flipY = h ? -1 : 1, this.drawDebugAtlas(l)), void 0 === s && (i.properties.hasUp = !h, 
            i.generateBuffers(this.regl));
            const c = new n.reshader.Material(a), u = new n.reshader.Mesh(i, c, {
                castShadow: !1,
                picking: !0
            });
            u.setLocalTransform(e);
            const f = {};
            return l && (f.HAS_PATTERN = 1), u.properties.symbolIndex = r, this.rr(u, f), i.data.aColor && (f.HAS_COLOR = 1), 
            i.data.aStrokeColor && (f.HAS_STROKE_COLOR = 1), this.setMeshDefines(f, i), i.properties.hasUp && (f.HAS_UP = 1), 
            u.setDefines(f), u;
        }
        addMesh(...t) {
            delete this.ir;
            const e = t[0];
            Array.isArray(e) && e.forEach(t => {
                this.sr(t);
            }), super.addMesh(...t);
        }
        sr(t) {
            if (!t.geometry.aLineWidth && t.material.get("lineWidth") <= 0 || !t.geometry.aOpacity && t.material.get("lineOpacity") <= 0) return;
            const e = t.defines;
            this.rr(t, e), t.setDefines(e), t.geometry.properties.hasPatternAnim && (this.ir = 1);
        }
        rr(t, e) {
            const n = t.geometry, i = this.getSymbol(t.properties.symbolIndex);
            n.data.aDasharray || Array.isArray(i.lineDasharray) && i.lineDasharray.reduce((t, e) => t + e, 0) > 0 ? (e.HAS_DASHARRAY = 1, 
            n.data.aDasharray && (e.HAS_DASHARRAY_ATTR = 1), n.data.aDashColor && (e.HAS_DASHARRAY_COLOR = 1)) : e.HAS_DASHARRAY && delete e.HAS_DASHARRAY;
        }
        setLineUniforms(t, e) {
            as(e, "lineWidth", t, "lineWidth", 2), as(e, "lineOpacity", t, "lineOpacity", 1), 
            as(e, "lineStrokeWidth", t, "lineStrokeWidth", 0), as(e, "lineBlur", t, "lineBlur", .7), 
            as(e, "lineOffset", t, "lineOffset", 0), as(e, "lineDx", t, "lineDx", 0), as(e, "lineDy", t, "lineDy", 0), 
            as(e, "linePatternAnimSpeed", t, "linePatternAnimSpeed", 0), as(e, "linePatternGap", t, "linePatternGap", 0);
        }
        setMeshDefines(t, e) {
            e.data.aOpacity && (t.HAS_OPACITY = 1), e.data.aLineWidth && (t.HAS_LINE_WIDTH = 1), 
            e.data.aLineStrokeWidth && (t.HAS_STROKE_WIDTH = 1), e.data.aLineDx && (t.HAS_LINE_DX = 1), 
            e.data.aLineDy && (t.HAS_LINE_DY = 1), e.data.aLinePatternAnimSpeed && (t.HAS_PATTERN_ANIM = 1), 
            e.data.aLinePatternGap && (t.HAS_PATTERN_GAP = 1);
        }
        paint(t) {
            t.states && t.states.includesChanged.shadow && (this.shader.dispose(), this.createShader(t)), 
            super.paint(t);
        }
        createFnTypeConfig(t, e) {
            const n = S(e.lineColor), i = S(e.aLinePatternAnimSpeed), r = S(e.aLinePatternGap), s = this.createShapeFnTypeConfigs(t, e), o = new Int8Array(1);
            return [ {
                attrName: "aColor",
                symbolName: "lineColor",
                type: Uint8Array,
                width: 4,
                define: "HAS_COLOR",
                evaluate: (e, i, r) => {
                    let s = n(t.getZoom(), e);
                    return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e, !0)), Array.isArray(s) || (s = this.colorCache[s] = this.colorCache[s] || zt(s).unitArray()), 
                    s = hs(s), s;
                }
            }, {
                attrName: "aLinePatternAnimSpeed",
                symbolName: "linePatternAnimSpeed",
                type: Int8Array,
                width: 1,
                define: "HAS_PATTERN_ANIM",
                evaluate: (e, n, r) => {
                    let s = i(t.getZoom(), e);
                    return ss(s) && (s = 0), 0 !== s && (r.properties.hasPatternAnim = 1), o[0] = s / 127, 
                    o[0];
                }
            }, {
                attrName: "aLinePatternGap",
                symbolName: "linePatternGap",
                type: Uint8Array,
                width: 1,
                define: "HAS_PATTERN_GAP",
                evaluate: e => {
                    let n = r(t.getZoom(), e);
                    return ss(n) && (n = 0), o[0] = 10 * n, o[0];
                }
            } ].concat(s);
        }
        createShapeFnTypeConfigs(t, e) {
            const n = M(e.lineWidth), i = M(e.lineOpacity), r = M(e.lineStrokeWidth), s = M(e.lineDx), o = M(e.lineDy), a = new Uint16Array(1), l = new Int8Array(1);
            return [ {
                attrName: "aLineWidth",
                symbolName: "lineWidth",
                type: Uint8Array,
                width: 1,
                define: "HAS_LINE_WIDTH",
                evaluate: (e, i, r) => {
                    let s = n(t.getZoom(), e);
                    return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e)), a[0] = Math.round(2 * s), 
                    a[0];
                }
            }, {
                attrName: "aLineStrokeWidth",
                symbolName: "lineStrokeWidth",
                type: Uint8Array,
                width: 1,
                define: "HAS_STROKE_WIDTH",
                evaluate: e => {
                    const n = r(t.getZoom(), e);
                    return a[0] = Math.round(2 * n), a[0];
                }
            }, {
                attrName: "aLineDx",
                symbolName: "lineDx",
                type: Int8Array,
                width: 1,
                define: "HAS_LINE_DX",
                evaluate: e => {
                    const n = s(t.getZoom(), e);
                    return l[0] = n, l[0];
                }
            }, {
                attrName: "aLineDy",
                symbolName: "lineDy",
                type: Int8Array,
                width: 1,
                define: "HAS_LINE_DY",
                evaluate: e => {
                    const n = o(t.getZoom(), e);
                    return l[0] = n, l[0];
                }
            }, {
                attrName: "aOpacity",
                symbolName: "lineOpacity",
                type: Uint8Array,
                width: 1,
                define: "HAS_OPACITY",
                evaluate: (e, n, r) => {
                    let s = i(t.getZoom(), e);
                    return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e)), a[0] = 255 * s, a[0];
                }
            } ];
        }
        Gi(t, e) {
            return super.Gi(t, e) || t.lineJoinPatternMode !== e.lineJoinPatternMode;
        }
        updateSceneConfig(t) {
            t.trailAnimation && this.createShader(this.or);
        }
        init(t) {
            const e = this.regl;
            this.renderer = new n.reshader.Renderer(e), this.createShader(t), this.pickingFBO && (this.picking = [ new n.reshader.FBORayPicking(this.renderer, {
                vert: "#define PICKING_MODE 1\n" + Bs,
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            }, this.pickingFBO) ]);
        }
        createShader(t) {
            this.or = t;
            const e = [], i = {};
            this.fillIncludes(i, e, t), this.sceneConfig.trailAnimation && this.sceneConfig.trailAnimation.enable && (i.HAS_TRAIL = 1), 
            e.push({
                name: "projViewModelMatrix",
                type: "function",
                fn: function(t, e) {
                    const i = [];
                    return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                }
            }), this.shader = new n.reshader.MeshShader({
                vert: Bs,
                frag: "#define SHADER_NAME LINE\n#define DEVICE_PIXEL_RATIO 1.0\nprecision highp float;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\nuniform lowp float blendSrcIsOne;\nuniform lowp float lineBlur;\n#ifdef HAS_COLOR\nvarying vec4 vColor;\n#else\nuniform lowp vec4 lineColor;\n#endif\n#ifdef HAS_STROKE_COLOR\nvarying vec4 vStrokeColor;\n#else\nuniform lowp vec4 lineStrokeColor;\n#endif\n#ifdef HAS_OPACITY\nvarying float vOpacity;\n#else\nuniform lowp float lineOpacity;\n#endif\n#ifdef HAS_PATTERN\nuniform sampler2D linePatternFile;\nuniform vec2 atlasSize;\nuniform float flipY;\n#ifdef HAS_PATTERN_ANIM\nvarying float vLinePatternAnimSpeed;\n#else\nuniform float linePatternAnimSpeed;\n#endif\n#ifdef HAS_PATTERN_GAP\nvarying float vLinePatternGap;\n#else\nuniform float linePatternGap;\n#endif\nvarying vec4 vTexInfo;\nvarying float vJoin;\nvec2 c(vec2 d) {\n  vec2 e = mod(d, 1.);\n  vec2 f = vTexInfo.xy;\n  vec2 h = vTexInfo.zw;\n  return (f + e * h) / atlasSize;\n}\n#endif\nvarying vec2 vNormal;\nvarying vec2 vWidth;\nvarying float vGammaScale;\n#ifndef ENABLE_TILE_STENCIL\nvarying vec2 vPosition;\n#endif\nuniform float tileExtent;\n#ifdef HAS_DASHARRAY\n#ifdef HAS_DASHARRAY_ATTR\nvarying vec4 vDasharray;\n#else\nuniform vec4 lineDasharray;\n#endif\n#ifdef HAS_DASHARRAY_COLOR\nvarying vec4 vDashColor;\n#else\nuniform vec4 lineDashColor;\n#endif\n#endif\n#if defined(HAS_PATTERN) || defined(HAS_DASHARRAY) || defined(HAS_GRADIENT) || defined(HAS_TRAIL)\nvarying highp float vLinesofar;\n#endif\n#ifdef HAS_TRAIL\nuniform float trailSpeed;\nuniform float trailLength;\nuniform float trailCircle;\n#endif\n#if defined(HAS_TRAIL) || defined(HAS_PATTERN)\nuniform float currentTime;\n#endif\nfloat i(float j, float k) {\n  float l = k / 2.;\n  float m = abs(j - l);\n  float n = (.1 + 1. / DEVICE_PIXEL_RATIO) * vGammaScale;\n  return clamp(min(m + n, l - m) / n, .0, 1.);\n}\nvarying vec3 vVertex;\nuniform vec3 cameraPosition;\nuniform float cameraToCenterDistance;\nvoid main() {\n  \n#ifndef ENABLE_TILE_STENCIL\nfloat o = sign(tileExtent - min(tileExtent, abs(vPosition.x))) * sign(1. + sign(vPosition.x)) * sign(tileExtent - min(tileExtent, abs(vPosition.y))) * sign(1. + sign(vPosition.y));\n  if(o == .0) {\n    discard;\n  }\n#endif\n#if defined(HAS_PATTERN) || defined(HAS_DASHARRAY) || defined(HAS_GRADIENT) || defined(HAS_TRAIL)\nfloat u = vLinesofar;\n#endif\nfloat v = length(vNormal) * vWidth.s;\n#ifdef HAS_PATTERN\nvec2 h = vTexInfo.zw;\n  float A = sign(h.x * h.y);\n  float B = mix(lineBlur, .0, A);\n#else\nfloat B = lineBlur;\n#endif\nfloat n = (B + 1. / DEVICE_PIXEL_RATIO) * vGammaScale;\n  float C = clamp(min(v - (vWidth.t - n), vWidth.s - v) / n, .0, 1.);\n#ifdef HAS_COLOR\nvec4 D = vColor / 255.;\n#else\nvec4 D = lineColor;\n#endif\n#ifdef HAS_PATTERN\nif(A == 1.) {\n    \n#ifdef HAS_PATTERN_GAP\nfloat E = vLinePatternGap;\n#else\nfloat E = linePatternGap;\n#endif\n#ifdef HAS_PATTERN_ANIM\nfloat F = vLinePatternAnimSpeed;\n#else\nfloat F = linePatternAnimSpeed;\n#endif\nfloat G = ceil(h.x * vWidth.s * 2. / h.y);\n    float H = G * (1. + E);\n    u += mod(currentTime * -F * .2, H);\n    float I = mod(u / H, 1.);\n    float J = mod((flipY * vNormal.y + 1.) / 2., 1.);\n    vec2 f = vTexInfo.xy;\n    D = mix(texture2D(linePatternFile, c(vec2(I * (1. + E), J))), vec4(.0), sign(vJoin));\n    float K = clamp(sign(1. / (1. + E) - I) + .000001, .0, 1.);\n    D *= K;\n  }\n#endif\n#ifdef HAS_STROKE_COLOR\nvec4 L = vStrokeColor / 255.;\n#else\nvec4 L = lineStrokeColor;\n#endif\nL = mix(D, L, sign(vWidth.t));\n  D = L * C + max(sign(vWidth.t - v), .0) * D * (1. - C);\n#ifdef HAS_DASHARRAY\n#ifdef HAS_DASHARRAY_ATTR\nvec4 M = vDasharray;\n#else\nvec4 M = lineDasharray;\n#endif\n#ifdef HAS_DASHARRAY_COLOR\nvec4 N = vDashColor;\n#else\nvec4 N = lineDashColor;\n#endif\nfloat k = M[0] + M[1] + M[2] + M[3];\n  float j = mod(u, k);\n  float O = max(sign(M[0] - j), .0);\n  float P = j - M[0] - M[1];\n  float Q = max(sign(P), .0) * max(sign(M[2] - P), .0);\n  float R = O + Q;\n  float S = i(j, M[0]);\n  float T = i(P, M[2]);\n  float U = S * O + T * Q;\n  D = D * (1. - U) + C * N * U;\n#endif\n#ifdef HAS_TRAIL\nfloat V = mod(u - currentTime * trailSpeed * .1, trailCircle);\n  float W = V < trailLength ? mix(.0, 1., V / trailLength) : .0;\n  D *= W;\n#endif\n#ifdef HAS_OPACITY\nfloat X = vOpacity;\n#else\nfloat X = lineOpacity;\n#endif\ngl_FragColor = D * X;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat Y = shadow_computeShadow();\n  gl_FragColor.rgb = shadow_blend(gl_FragColor.rgb, Y);\n#endif\nfloat Z = clamp(cameraToCenterDistance * 1.5 / distance(vVertex, cameraPosition), .0, 1.);\n  if(blendSrcIsOne == 1.) {\n    gl_FragColor *= gl_FragColor.a;\n  }\n  gl_FragColor *= Z;\n}",
                uniforms: e,
                defines: i,
                extraCommandProps: this.getExtraCommandProps()
            });
        }
        getExtraCommandProps() {
            const t = this.layer.getRenderer().isEnableTileStencil && this.layer.getRenderer().isEnableTileStencil(), e = this.canvas;
            return {
                viewport: {
                    x: 0,
                    y: 0,
                    width: () => e ? e.width : 1,
                    height: () => e ? e.height : 1
                },
                stencil: {
                    enable: !1,
                    func: {
                        cmp: () => t ? "=" : "<=",
                        ref: (e, n) => t ? n.stencilRef : n.level
                    },
                    op: {
                        fail: "keep",
                        zfail: "keep",
                        zpass: "replace"
                    }
                },
                depth: {
                    enable: !0,
                    range: this.sceneConfig.depthRange || [ 0, 1 ],
                    mask: !1,
                    func: this.sceneConfig.depthFunc || "<="
                },
                blend: {
                    enable: !0,
                    func: this.getBlendFunc(),
                    equation: "add"
                },
                polygonOffset: {
                    enable: !0,
                    offset: this.getPolygonOffset()
                }
            };
        }
        getUniformValues(t, e) {
            const n = t.projViewMatrix, i = t.viewMatrix, r = t.cameraToCenterDistance, s = t.getResolution(), o = [ t.width, t.height ], a = this.sceneConfig.trailAnimation || {}, l = {
                layerScale: this.layer.options.styleScale || 1,
                projViewMatrix: n,
                viewMatrix: i,
                cameraToCenterDistance: r,
                resolution: s,
                canvasSize: o,
                trailSpeed: a.speed || 1,
                trailLength: a.trailLength || 500,
                trailCircle: a.trailCircle || 1e3,
                currentTime: this.layer.getRenderer().getFrameTimestamp() || 0,
                blendSrcIsOne: +!("one" !== this.sceneConfig.blendSrc),
                cameraPosition: t.cameraPosition
            };
            return this.setIncludeUniformValues(l, e), l;
        }
    }
    class qs extends Xs {
        postCreateGeometry(t) {
            const {symbolIndex: e, geometry: n} = t, {features: i} = n.properties, r = this.getSymbol(e).lineGradientProperty, s = n.data.aPickingId, o = new Uint8Array(s.length), a = [];
            let l = s[0];
            a.push(i[l].feature.properties[r]);
            for (let t = 1; t < s.length; t++) s[t] !== l && (l = s[t], a.push(i[l].feature.properties[r])), 
            o[t] = a.length - 1;
            n.data.aGradIndex = o, n.properties.gradients = a;
        }
        createMesh(t, e) {
            const {geometry: i, symbolIndex: r, ref: s} = t;
            if (void 0 === s) {
                xs(i, this.getSymbolDef(r), this.getFnTypeConfig(r));
            }
            const o = {
                tileResolution: i.properties.tileResolution,
                tileRatio: i.properties.tileRatio,
                tileExtent: i.properties.tileExtent
            }, a = this.getSymbol(r);
            this.setLineUniforms(a, o);
            const l = i.properties.gradients;
            let h = 2 * l.length;
            Ys(h) || (h = $s(h));
            const c = this.regl.texture({
                width: 256,
                height: h,
                data: Js(l),
                format: "rgba",
                mag: "linear",
                min: "linear",
                flipY: !1
            });
            o.lineGradientTexture = c, o.lineGradientTextureHeight = c.height, void 0 === s && i.generateBuffers(this.regl);
            const u = new n.reshader.Material(o), f = new n.reshader.Mesh(i, u, {
                castShadow: !1,
                picking: !0
            });
            f.setLocalTransform(e);
            const d = {
                HAS_GRADIENT: 1
            };
            return this.setMeshDefines(d, i), f.setDefines(d), f.properties.symbolIndex = r, 
            f;
        }
        createFnTypeConfig(t, e) {
            return this.createShapeFnTypeConfigs(t, e);
        }
        createShader(t) {
            this.or = t;
            const e = [], i = {};
            this.fillIncludes(i, e, t), this.sceneConfig.trailAnimation && this.sceneConfig.trailAnimation.enable && (i.HAS_TRAIL = 1), 
            e.push({
                name: "projViewModelMatrix",
                type: "function",
                fn: function(t, e) {
                    const i = [];
                    return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                }
            }), this.shader = new n.reshader.MeshShader({
                vert: Bs,
                frag: "#define SHADER_NAME LINE_GRADIENT\n#define DEVICE_PIXEL_RATIO 1.0\n#define MAX_LINE_COUNT 128.0\nprecision mediump float;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\n#ifdef HAS_OPACITY\nvarying float vOpacity;\n#else\nuniform lowp float lineOpacity;\n#endif\nuniform lowp float lineBlur;\nuniform float lineGradientTextureHeight;\nuniform float tileExtent;\nuniform sampler2D lineGradientTexture;\nvarying vec2 vNormal;\nvarying vec2 vWidth;\nvarying float vGammaScale;\nvarying highp float vLinesofar;\nvarying float vGradIndex;\n#ifndef ENABLE_TILE_STENCIL\nvarying vec2 vPosition;\n#endif\n#ifdef HAS_TRAIL\nuniform float trailSpeed;\nuniform float trailLength;\nuniform float trailCircle;\nuniform float currentTime;\n#endif\nvoid main() {\n  \n#ifndef ENABLE_TILE_STENCIL\nfloat c = sign(tileExtent - min(tileExtent, abs(vPosition.x))) * sign(1. + sign(vPosition.x)) * sign(tileExtent - min(tileExtent, abs(vPosition.y))) * sign(1. + sign(vPosition.y));\n  if(c == .0) {\n    discard;\n  }\n#endif\nfloat d = length(vNormal) * vWidth.s;\n  float e = (lineBlur + 1. / DEVICE_PIXEL_RATIO) * vGammaScale;\n  float f = clamp(min(d - (vWidth.t - e), vWidth.s - d) / e, .0, 1.);\n  float h = vLinesofar;\n  vec4 i = texture2D(lineGradientTexture, vec2(h, (vGradIndex * 2. + .5) / lineGradientTextureHeight)) * f;\n  i *= max(sign(MAX_LINE_COUNT - vGradIndex), .0);\n#ifdef HAS_TRAIL\nfloat j = mod(h - currentTime * trailSpeed * .1, trailCircle);\n  float k = j < trailLength ? mix(.0, 1., j / trailLength) : .0;\n  i *= k;\n#endif\n#ifdef HAS_OPACITY\nfloat l = vOpacity;\n#else\nfloat l = lineOpacity;\n#endif\ngl_FragColor = i * l;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat m = shadow_computeShadow();\n  gl_FragColor.rgb = shadow_blend(gl_FragColor.rgb, m);\n#endif\n}",
                uniforms: e,
                defines: i,
                extraCommandProps: this.getExtraCommandProps()
            });
        }
    }
    function Js(t) {
        t.length > 128 && (console.warn("Line count in a tile exceeds maximum limit (128) for line-gradient render plugin."), 
        t = t.slice(0, 128));
        const e = document.createElement("canvas"), n = e.getContext("2d");
        e.width = 256, e.height = 2 * t.length, Ys(e.height) || (e.height = $s(2 * t.length));
        for (let e = 0; e < t.length; e++) {
            const i = t[e], r = n.createLinearGradient(0, 0, 256, 0);
            for (let t = 0; t < i.length; t += 2) r.addColorStop(+i[t], i[t + 1]);
            n.fillStyle = r;
            const s = e % 256;
            n.fillRect(0, 2 * s, 256, 2 * s + 2);
        }
        return n.canvas;
    }
    function Ys(t) {
        return 0 == (t & t - 1) && 0 !== t;
    }
    function $s(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
    }
    class Zs {
        constructor(t) {
            this.Lt = t || [], this.properties = {};
        }
        set meshes(t) {
            this.Lt = t;
        }
        get meshes() {
            return this.Lt;
        }
    }
    const Ks = 224, Qs = 600, to = 100, eo = new Uint8Array(1), no = [], io = {
        collides: 0,
        boxes: []
    };
    class ro extends Vs {
        supportRenderMode(t) {
            return "point" === t;
        }
        startMeshCollision(t) {
            const {meshKey: e} = t.properties, {renderer: n} = this.ar, i = n.isForeground(t instanceof Zs ? t.meshes[0] : t);
            if (t.properties.isForeground = i, t instanceof Zs && t.meshes.length) for (let e = 0; e < t.meshes.length; e++) t.meshes[e].properties.isForeground = i;
            this.lr = performance.now(), this.hr = this.cr(), this.ur = this.dr(e);
        }
        endMeshCollision(t) {
            const e = this.pr.tags[t];
            if (this.hr && e && this.ur) {
                const t = this.getMap();
                e.anchor0 = t.containerPointToCoord(this.yr), e.anchor1 = t.containerPointToCoord(this.mr), 
                e.anchor0.z = t.getZoom(), e.anchor0.width = t.width, e.anchor0.height = t.height;
            }
            this.getMap().collisionFrameTime += performance.now() - this.lr;
        }
        dr(t) {
            const e = this.getMap(), n = e.getZoom(), [i, r] = this.gr(t);
            return !i || !r || i.z !== n || i.width !== e.width || i.height !== e.height || i.distanceTo(this.yr) > 2 || r.distanceTo(this.mr) > 2;
        }
        vr() {
            const t = this.getMap();
            this.xr = {}, this.yr = new r.Point(t.width / 2, t.height / 3), this.mr = new r.Point(t.width / 2, 2 * t.height / 3), 
            delete this.hr, this.pr || (this.pr = {
                tags: {}
            }), this.ar = {
                layer: this.layer,
                renderer: this.layer.getRenderer(),
                frameTimestamp: this.layer.getRenderer().getFrameTimestamp(),
                map: this.getMap(),
                zoom: t.getZoom(),
                collisionTags: this.pr.tags,
                isEnableUniquePlacement: this.isEnableUniquePlacement()
            };
        }
        wr() {
            this.Ar = !1 !== this.sceneConfig.collision;
        }
        _r(t, e) {
            const n = this.pr;
            return n.tags[t] && n.tags[t][e];
        }
        Mr(t, e, n) {
            const i = this.pr;
            i.tags[t] = i.tags[t] || [], i.tags[t][e] = n;
        }
        cr() {
            const t = this.getMap();
            if (!t.isInteracting()) return !0;
            const e = this.layer.options.collisionFrameLimit;
            return t.collisionFrameTime <= e;
        }
        gr(t) {
            const e = "__meshAnchorKey".trim(), n = this.pr.tags[t];
            if (n && n.anchor0) {
                const {anchor0: t, anchor1: i} = n, r = t[e] = t[e] || t.x + "," + t.y, s = i[e] = i[e] || i.x + "," + i.y;
                let o = this.xr[r], a = this.xr[s];
                if (!o || !a) {
                    const e = this.getMap();
                    o = this.xr[r] = e.coordToContainerPoint(t), a = this.xr[s] = e.coordToContainerPoint(i);
                }
                return o.z = t.z, no[0] = o, no[1] = a, o.width = t.width, o.height = t.height, 
                no;
            }
            return no[0] = no[1] = null, no;
        }
        updateBoxCollisionFading(t, e, n, i, r) {
            const {layer: s, renderer: o, zoom: a, collisionTags: l, isEnableUniquePlacement: h} = this.ar, {meshKey: c, isForeground: u} = e.properties;
            if (h && this.Sr(c, r)) return !1;
            const f = n.length;
            let d = l[c] && l[c][r];
            const p = d, y = this.kr && d;
            if (!(y && 0 !== d.collides) && t) {
                const t = y && 0 === d.collides;
                if (this.hr || t) if ((this.ur || d && d.z !== a) && (d = null), d) {
                    if (d.boxes && d.boxes.length) {
                        const {boxes: t, isAllowOverlap: e} = d;
                        let n = 0;
                        if (!e) {
                            let e = 0;
                            for (let i = 0; i < t.length; i++) if (!n) {
                                const r = this.isCollides(t[i]);
                                if (-1 === r) e++; else if (1 === r) {
                                    n = 1;
                                    break;
                                }
                            }
                            e === t.length && (n = -1);
                        }
                        d.collides = n;
                    }
                } else {
                    d = p || {
                        collides: 0,
                        boxes: []
                    }, d.boxes.length = 0, d.z = a;
                    let t = 0;
                    for (let e = 0; e < f; e++) {
                        const {mesh: s, allElements: o, boxCount: a, start: l, end: h} = n[e], c = this.Pr(s, o, a, l, h, i, r);
                        c.isAllowOverlap && (d.isAllowOverlap = 1), 0 === t && (t = c.collides), c.boxes && d.boxes.push(...c.boxes);
                    }
                    d.collides = t, this.Mr(c, r, d);
                }
            }
            let m = t && d && 0 === d.collides, g = 1, v = !1;
            if (this.sceneConfig.fading) {
                const t = this.Tr(e);
                if (this.Or) t[r] = m ? 1 : -1; else if (u && delete e.Fr, g = this.Ir(u, m, t, r), 
                u ? (g > 0 && (m = !0), v = this.isBoxFading(e, r), v && this.setToRedraw()) : m || (this.Cr(t, r), 
                g = 0), m) {
                    const n = e.Fr;
                    if (n && 1 === g && t[r] > 0) {
                        let {fadeOutDelay: t, fadingDuration: e} = this.sceneConfig;
                        ss(e) && (e = Ks), ss(t) && (t = to);
                        const i = is(1 - (o.getFrameTimestamp() - n - t) / e, 0, 1);
                        g *= i, i > 0 && this.setToRedraw();
                    }
                }
            }
            if (d && s.options.debugCollision && this.addCollisionDebugBox(d.boxes, d.collides ? 0 : 1), 
            m || v) {
                const {mesh: t, start: e} = n[0], i = this.getSymbol(t.properties.symbolIndex);
                !this.Er(i, t, e) && d && d.boxes && this.Hr(d.boxes, t);
            }
            if (m) {
                const t = eo[0] = 255 * g;
                for (let e = 0; e < f; e++) {
                    const {mesh: i, allElements: r, start: s, end: o, boxIndex: a} = n[e];
                    this.setCollisionOpacity(i, r, t, s, o, a);
                }
            }
            return m && g > 0;
        }
        isMeshIterable() {
            return !0;
        }
        setCollisionOpacity(t, e, n, i, r) {
            const s = e[i], o = e[r - 1];
            this.Dr(t, n, s, o);
        }
        Dr(t, e, n, i) {
            const {aOpacity: r} = t.geometry.properties;
            if (!r) return;
            const s = n;
            if (r[s] !== e) {
                const t = i;
                for (let n = s; n <= t; n++) r[n] = e;
                r.dirty = !0;
            }
        }
        isBoxFading(t, e) {
            const {frameTimestamp: n} = this.ar;
            let i = this.sceneConfig.fadingDuration;
            ss(i) && (i = Ks);
            return n - Math.abs(this.Tr(t)[e]) < i;
        }
        Pr(t, e, n, i, r, s, o) {
            const a = this.getSymbol(t.properties.symbolIndex), l = this.Er(a, t, e[i]), h = this.Lr(a, t, e[i]);
            if (!1 === this.sceneConfig.collision || l && h) return io;
            const c = this.isBoxCollides(t, e, n, i, r, s, o);
            return h && (c.collides = 0, c.isAllowOverlap = 1), c;
        }
        Er(t, e, n) {
            if (!1 === this.sceneConfig.collision) return !0;
            const i = e.geometry.properties.aOverlap;
            if (!i) return 1 == +t[this.propIgnorePlacement];
            const r = i[n], s = r % 8;
            return r < 2 ? 1 == +t[this.propIgnorePlacement] : s % 2;
        }
        Lr(t, e, n) {
            if (!1 === this.sceneConfig.collision) return !0;
            const i = e.geometry.properties.aOverlap;
            if (!i) return 1 == +t[this.propAllowOverlap];
            const r = i[n], s = r >> 2;
            return r < 2 ? 1 == +t[this.propAllowOverlap] : s % 2;
        }
        Hr(t) {
            if (Array.isArray(t[0])) for (let e = 0; e < t.length; e++) this.insertCollisionBox(t[e]); else this.insertCollisionBox(t);
        }
        Ir(t, e, n, i) {
            let {fadingDuration: r, fadeInDelay: s, fadeOutDelay: o} = this.sceneConfig;
            ss(r) && (r = Ks), ss(s) && (s = Qs), ss(o) && (o = to);
            const {frameTimestamp: a} = this.ar;
            let l = n[i], h = e ? 1 : 0;
            if (!l) return e && t && (n[i] = a + s), 0;
            if (a < Math.abs(l) && (!e && l > 0 || e && l < 0)) {
                const t = a - r;
                n[i] = l = e ? t : -t;
            }
            return a - Math.abs(l) < r ? h = l > 0 ? (a - l) / r : 1 - (a + l) / r : e ? (l < 0 && (n[i] = l = a + s), 
            h = (a - l) / r) : (l > 0 && (n[i] = l = -(a + o)), h = 1 - (a + l) / r), (h < 0 || h > 1) && (h = is(h, 0, 1)), 
            h;
        }
        Tr(t) {
            this.Rr || (this.Rr = {});
            const {meshKey: e} = t.properties;
            if (!this.Rr[e]) {
                const {frameTimestamp: t} = this.ar;
                this.Rr[e] = {
                    timestamp: t
                };
            }
            return this.Rr[e];
        }
        Nr(t) {
            if (!this.zr) return void (this.zr = t);
            const e = this.scene.getMeshes();
            if (e && e.length) {
                for (let n = 0; n < e.length; n++) {
                    const i = this.Tr(e[n]);
                    i.timestamp < this.zr ? delete e[n]._fading_timestamps : i.timestamp = t;
                }
                this.zr = t;
            }
        }
        Cr(t, e) {
            if (!t) return;
            const {frameTimestamp: n} = this.ar;
            let {fadingDuration: i} = this.sceneConfig;
            ss(i) && (i = Ks), t[e] = -(n - i - 1);
        }
        deleteMesh(t, e) {
            if (t) {
                if (Array.isArray(t)) for (let e = 0; e < t.length; e++) {
                    const n = t[e].properties.meshKey;
                    this.pr && delete this.pr.tags[n], this.Rr && delete this.Rr[n];
                } else {
                    const e = t.properties.meshKey;
                    this.pr && delete this.pr.tags[e], this.Rr && delete this.Rr[e];
                }
                super.deleteMesh(t, e);
            }
        }
        delete(t) {
            this.Vr && (this.Vr.geometry.dispose(), this.jr.dispose(), this.Vr.dispose(), delete this.Vr, 
            delete this.jr, delete this.Ur), delete this.pr, super.delete(t);
        }
        isCollides(t) {
            const e = this.layer;
            if (e.getMap().isOffscreen(t)) return -1;
            return +e.getCollisionIndex().collides(t);
        }
        insertCollisionBox(t) {
            this.layer.getCollisionIndex().insertBox(t);
        }
        addCollisionDebugBox(t, e) {
            if (t && t.length) if (Array.isArray(t[0])) for (let n = 0; n < t.length; n++) {
                const i = t[n];
                this.Gr(i, e);
            } else this.Gr(t, e);
        }
        Gr(t, e) {
            if (!t) return;
            const n = this.Wr = this.Wr || {
                aPosition: [],
                aVisible: [],
                indices: []
            };
            if (this.getMap().isOffscreen(t)) return;
            const i = n.aPosition.length / 2;
            n.aPosition.push(t[0], t[1], t[2], t[1], t[2], t[3], t[0], t[3]), n.aVisible.push(e, e, e, e), 
            n.indices.push(i, i + 1, i + 1, i + 2, i + 2, i + 3, i + 3, i);
        }
        Br() {
            return !1 !== this.sceneConfig.collision || this.Ar;
        }
        updateCollision(t) {
            super.updateCollision(t), this.vr(), this.Xr(), this.qr && this.qr.length && (this.Jr(), 
            this.qr && (this.setToRedraw(), this.scene.addMesh(this.qr)));
            (this.getMap().isZooming() || this.qr && this.qr.length) && (this.Yr(), this.$r(this.scene.getMeshes()));
        }
        paint(t) {
            const e = super.paint(t);
            return this.Zr(t), !1 === this.hr && this.setToRedraw(), e;
        }
        callShader(t, e) {
            this.callCurrentTileShader(t, e), this.shouldIgnoreBackground() || this.callBackgroundTileShader(t, e);
        }
        shouldIgnoreBackground() {
            return !this.getMap().isZooming() && !this.qr;
        }
        Xr() {
            const t = this.getMap(), e = t.isZooming();
            if (!e && this.kr) {
                const t = this.layer.getRenderer();
                this.qr = this.scene.getMeshes().filter(e => !t.isForeground(e) && !e.properties.isLinePlacement);
            } else e && !this.kr && (this.Kr = t.getResolution());
            if (e) this.Qr && (clearTimeout(this.Qr), delete this.Or, delete this.Qr), this.Or = this.Kr && t.getResolution() > this.Kr; else if (this.kr && !this.Qr) {
                let {fadeOutDelay: t, fadingDuration: e} = this.sceneConfig;
                ss(t) && (t = to), ss(e) && (e = Ks), this.Qr = setTimeout(() => {
                    delete this.Or, delete this.Qr;
                }, t + e + 1);
            }
            this.kr = e;
        }
        Zr(t) {
            if (!this.Wr || !this.layer.options.debugCollision) return;
            this.Ur || this.ts();
            const {aPosition: e, aVisible: i, indices: r} = this.Wr;
            if (!this.Vr) {
                const t = new n.reshader.Geometry({
                    aPosition: [],
                    aVisible: []
                }, [], 0, {
                    positionSize: 2,
                    primitive: "lines"
                });
                this.Vr = new n.reshader.Mesh(t), this.es = new n.reshader.Scene, this.es.addMesh(this.Vr);
            }
            const s = this.Vr.geometry;
            s.updateData("aPosition", new Float32Array(e)), s.updateData("aVisible", new Uint8Array(i)), 
            s.setElements(r), this.Ur.render(this.jr, {
                size: [ this.canvas.width, this.canvas.height ]
            }, this.es, this.getRenderFBO(t)), delete this.Wr;
        }
        ts() {
            const t = this.regl;
            this.Ur = new n.reshader.Renderer(t);
            const e = this.canvas, i = {
                x: 0,
                y: 0,
                width: () => e ? e.width : 1,
                height: () => e ? e.height : 1
            };
            this.jr = new n.reshader.MeshShader({
                vert: "attribute vec2 aPosition;\nattribute float aVisible;\nuniform vec2 size;\nvarying vec4 vColor;\nvoid main() {\n  vec2 c = (aPosition / size - .5) * 2. * vec2(1., -1.);\n  gl_Position = vec4(c, .0, 1.);\n  vColor = mix(vec4(1., .0, .0, 1.5) * .5, vec4(.0, 1., .0, 1.) * .4, aVisible);\n}",
                frag: "precision mediump float;\nvarying vec4 vColor;\nvoid main() {\n  gl_FragColor = vec4(vColor.rgb, .5);\n}",
                uniforms: [ "size" ],
                extraCommandProps: {
                    viewport: i,
                    depth: {
                        enable: !1
                    },
                    blend: {
                        enable: !0,
                        func: {
                            src: "src alpha",
                            dst: "one minus src alpha"
                        },
                        equation: "add"
                    }
                }
            });
        }
        Jr() {
            let {fadeOutDelay: t, fadingDuration: e} = this.sceneConfig;
            ss(t) && (t = to), ss(e) && (e = Ks);
            const n = this.layer.getRenderer(), i = n.getCurrentTileZoom(), r = n.getFrameTimestamp(), s = [];
            for (let o = 0; o < this.qr.length; o++) {
                const a = this.qr[o], l = a.properties.tile;
                !a.Fr && n.isBackTile(l.id) && (a.Fr = r);
                const h = l.z - i > 0 ? 2 * (l.z - i) - 1 : 2 * (i - l.z);
                a.properties.level = h, a.setUniform("level", h), n.isForeground(a) || a.Fr && r - a.Fr > t + e ? delete a.Fr : s.push(a);
            }
            delete this.qr, s.length && (this.qr = s);
        }
        isEnableCollision() {
            return this.layer.options.collision && !1 !== this.sceneConfig.collision;
        }
        isEnableUniquePlacement() {
            return this.isEnableCollision() && this.sceneConfig.uniquePlacement;
        }
        isMeshUniquePlaced(t) {
            return this.isMeshIterable(t);
        }
        Yr() {
            if (!this.isEnableUniquePlacement()) return;
            const t = this.scene.getMeshes(), e = (t, e, n, i) => {
                const {start: r, end: s} = e[0], o = t.geometry.properties, a = o.elements;
                let l = o.uniquePlacements;
                if (l || (l = o.uniquePlacements = []), void 0 === l[i]) {
                    const e = this.getUniqueEntryKey(t, a[r], i);
                    l[i] = e ? {
                        key: e,
                        index: i,
                        start: a[r],
                        end: a[s - 1]
                    } : null;
                }
            };
            for (let n = 0; n < t.length; n++) {
                const i = t[n];
                this.isMeshUniquePlaced(i) && this.forEachBox(i, e);
            }
        }
        $r(t) {
            if (!this.isEnableUniquePlacement()) return;
            const e = this.getMap().getZoom();
            let n = !this.ns || this.rs !== e;
            if (!n) for (let e = 0; e < t.length; e++) if (!this.ns[t[e].properties.meshKey]) {
                n = !0;
                break;
            }
            if (!n) return;
            this.rs = e, this.ss = {}, this.ns = {}, t = t.sort(oo);
            const i = this.getMap().getGLScale(), r = {};
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (!n.geometry) continue;
                const {meshKey: s} = n.properties;
                this.ns[s] = 1;
                const {uniquePlacements: o} = n.geometry.properties;
                if (o) for (let t = 0; t < o.length; t++) {
                    if (!o[t]) continue;
                    const {key: e, index: s} = o[t], a = this.Tr(n), l = so(e, i), h = r[l];
                    if (h) {
                        const t = h.length, e = h[t - 3].properties.meshKey, i = h[t - 2], r = h[t - 1];
                        this.ss[e] = this.ss[e] || {}, this.ss[e][r] = 1, this.os(a, s, i, r), h.push(n, a, s);
                    } else r[l] = [ n, a, s ];
                }
            }
            for (const t in r) {
                const e = r[t];
                if (e.length <= 6) continue;
                const n = e.length, i = e[n - 2][e[n - 1]];
                if (e[1][e[2]] !== i) for (let t = 0; t < n - 6; t += 3) {
                    e[t + 1][e[t + 2]] = i;
                }
            }
        }
        os(t, e, n, i) {
            if (void 0 !== n[i]) if (void 0 === t[e]) t[e] = n[i]; else {
                let r = t[e];
                Math.abs(n[i]) > Math.abs(r) ? t[e] = n[i] : n[i] = t[e];
            } else void 0 !== t[e] && (n[i] = t[e]);
        }
        Sr(t, e) {
            return this.ss && this.ss[t] && this.ss[t][e];
        }
        as(t, e) {
            const {symbolIndex: n} = t.properties, i = n.type || 0;
            let r = t.properties._collidesBoxes;
            r || (r = t.properties._collidesBoxes = []);
            let s = r[n.index];
            s || (s = t.properties._collidesBoxes = []), s[i] || (s[i] = []), s = s[i];
            const o = e / 6;
            if (!s[o]) {
                const t = [];
                s[o] = {
                    boxes: t,
                    collision: {
                        boxes: t
                    }
                };
            }
            return s[o];
        }
        ls(t) {
            let e = this.hs;
            if (e || (e = this.hs = []), !e[t]) {
                e[t] = [];
                for (let n = 0; n < t; n++) e[t][n] = {};
            }
            return e[t];
        }
        cs(t) {
            if (!t || !t.geometry) return !0;
            if (!t.geometry.properties.glyphAtlas || !t.material.get("isHalo") || t.geometry.data.aTextHaloRadius && t.geometry.properties.hasHalo) return !1;
            if (t.geometry.data.aTextHaloRadius && !t.geometry.properties.hasHalo) return !0;
            return !this.getSymbol(t.geometry.properties.symbolIndex).textHaloRadius;
        }
    }
    function so(t, e) {
        return Math.round(t[0] / e / 10) * Math.round(t[1] / e / 10) * (t[2] ? Math.round(t[2] / 10) : 1) + "-" + t[3];
    }
    function oo(t, e) {
        const n = e.uniforms.level - t.uniforms.level;
        return 0 === n ? t.properties.meshKey - e.properties.meshKey : n;
    }
    var ao = "#define SHADER_NAME MARKER\n#define RAD 0.0174532925\nattribute vec3 aPosition;\nattribute vec2 aShape;\nattribute vec2 aTexCoord;\n#ifdef ENABLE_COLLISION\nattribute float aOpacity;\n#endif\n#ifdef HAS_OPACITY\nattribute float aColorOpacity;\n#endif\n#ifdef HAS_MARKER_WIDTH\nattribute float aMarkerWidth;\n#else\nuniform float markerWidth;\n#endif\n#ifdef HAS_MARKER_HEIGHT\nattribute float aMarkerHeight;\n#else\nuniform float markerHeight;\n#endif\n#ifdef HAS_MARKER_DX\nattribute float aMarkerDx;\n#else\nuniform float markerDx;\n#endif\n#ifdef HAS_MARKER_DY\nattribute float aMarkerDy;\n#else\nuniform float markerDy;\n#endif\n#if defined(HAS_PITCH_ALIGN)\nattribute float aPitchAlign;\n#else\nuniform float pitchWithMap;\n#endif\n#if defined(HAS_ROTATION_ALIGN)\nattribute float aRotationAlign;\n#else\nuniform float rotateWithMap;\n#endif\nuniform float flipY;\n#ifdef HAS_ROTATION\nattribute float aRotation;\n#else\nuniform float markerRotation;\n#endif\n#ifdef HAS_PAD_OFFSET\nattribute float aPadOffsetX;\nattribute float aPadOffsetY;\n#endif\nuniform float cameraToCenterDistance;\nuniform mat4 projViewModelMatrix;\nuniform float markerPerspectiveRatio;\nuniform vec2 iconSize;\nuniform vec2 texSize;\nuniform vec2 canvasSize;\nuniform float mapPitch;\nuniform float mapRotation;\nuniform float zoomScale;\nuniform float tileRatio;\nuniform float layerScale;\n#ifndef PICKING_MODE\nvarying vec2 vTexCoord;\nvarying float vOpacity;\n#else\n#include <fbo_picking_vert>\n#endif\nvoid main() {\n  vec3 c = aPosition;\n#ifdef HAS_MARKER_WIDTH\nfloat d = aMarkerWidth;\n#else\nfloat d = markerWidth;\n#endif\n#ifdef HAS_MARKER_HEIGHT\nfloat e = aMarkerHeight;\n#else\nfloat e = markerHeight;\n#endif\n#ifdef HAS_MARKER_DX\nfloat f = aMarkerDx;\n#else\nfloat f = markerDx;\n#endif\n#ifdef HAS_MARKER_DY\nfloat h = aMarkerDy;\n#else\nfloat h = markerDy;\n#endif\n#if defined(HAS_PITCH_ALIGN)\nfloat i = aPitchAlign;\n#else\nfloat i = pitchWithMap;\n#endif\n#if defined(HAS_ROTATION_ALIGN)\nfloat j = aRotationAlign;\n#else\nfloat j = rotateWithMap;\n#endif\ngl_Position = projViewModelMatrix * vec4(c, 1.);\n  float k = gl_Position.w;\n  float l = (1. - cameraToCenterDistance / k) * markerPerspectiveRatio;\n  float m = clamp(.5 + .5 * (1. - l), .0, 4.);\n#ifdef HAS_ROTATION\nfloat n = aRotation / 9362. - mapRotation * j;\n#else\nfloat n = markerRotation - mapRotation * j;\n#endif\nif(i == 1.) {\n    n += mapRotation;\n  }\n  float o = sin(n);\n  float u = cos(n);\n  mat2 v = mat2(u, -1. * o, o, u);\n  vec2 A = (aShape / 10.0);\n  if(i == 1. && flipY == .0) {\n    A *= vec2(1., -1.);\n  }\n#ifdef HAS_PAD_OFFSET\nA = (A / iconSize * vec2(d, e) + vec2(aPadOffsetX - 1., aPadOffsetY)) * layerScale;\n#else\nA = A / iconSize * vec2(d, e) * layerScale;\n#endif\nA = v * A;\n  if(i == .0) {\n    vec2 B = A * 2. / canvasSize;\n    gl_Position.xy += B * m * k;\n  } else {\n    float C = k / cameraToCenterDistance;\n    vec2 B = A;\n    gl_Position = projViewModelMatrix * vec4(c + vec3(B, .0) * tileRatio / zoomScale * C * m, 1.);\n  }\n  gl_Position.xy += vec2(f, -h) * 2. / canvasSize * k;\n#ifndef PICKING_MODE\nvTexCoord = aTexCoord / texSize;\n#ifdef ENABLE_COLLISION\nvOpacity = aOpacity / 255.;\n#else\nvOpacity = 1.;\n#endif\n#ifdef HAS_OPACITY\nvOpacity *= aColorOpacity / 255.;\n#endif\n#else\n#ifdef ENABLE_COLLISION\nbool D = aOpacity == 255.;\n#else\nbool D = true;\n#endif\nfbo_picking_setData(gl_Position.w, D);\n#endif\n}";
    const lo = [];
    function ho(t, e, i, r, s) {
        return n.vec4.set(lo, e[0], e[1], e[2], 1), n.vec4.transformMat4(lo, lo, i), t[2] = lo[3], 
        n.vec4.scale(lo, lo, 1 / lo[3]), t[0] = (lo[0] + 1) * r / 2, t[1] = (1 - lo[1]) * s / 2, 
        t;
    }
    const co = [], uo = [], fo = [], po = [], yo = [], mo = [];
    function go(t, e, i, r, s, o, a, l, h, c, u, f) {
        const {tileRatio: d, tileResolution: p} = h, y = d / (p / c.getResolution()) * (u / c.cameraToCenterDistance) * f;
        n.vec2.scale(i, i, y), n.vec2.scale(r, r, y), n.vec2.scale(s, s, y), n.vec2.scale(o, o, y), 
        n.vec3.set(co, i[0], i[1], 0), n.vec3.set(uo, r[0], r[1], 0), n.vec3.set(fo, s[0], s[1], 0), 
        n.vec3.set(po, o[0], o[1], 0), n.vec3.add(co, co, e), n.vec3.add(uo, uo, e), n.vec3.add(fo, fo, e), 
        n.vec3.add(po, po, e), ho(i, co, a, c.width, c.height), ho(r, uo, a, c.width, c.height), 
        ho(s, fo, a, c.width, c.height), ho(o, po, a, c.width, c.height), n.vec2.set(yo, Math.min(i[0], r[0], s[0], o[0]), Math.min(i[1], r[1], s[1], o[1])), 
        n.vec2.set(mo, Math.max(i[0], r[0], s[0], o[0]), Math.max(i[1], r[1], s[1], o[1])), 
        n.vec4.set(t, yo[0] + l[0], yo[1] + l[1], mo[0] + l[0], mo[1] + l[1]);
    }
    function vo(t, e, i, r, s, o, a, l) {
        1 !== l && (n.vec2.scale(i, i, l), n.vec2.scale(r, r, l), n.vec2.scale(s, s, l), 
        n.vec2.scale(o, o, l)), n.vec2.set(yo, Math.min(i[0], r[0], s[0], o[0]), Math.min(i[1], r[1], s[1], o[1])), 
        n.vec2.set(mo, Math.max(i[0], r[0], s[0], o[0]), Math.max(i[1], r[1], s[1], o[1])), 
        n.vec4.set(t, e[0] + yo[0] + a[0], e[1] + yo[1] - a[1], e[0] + mo[0] + a[0], e[1] + mo[1] - a[1]);
    }
    function xo(t, e, i, r, s) {
        e -= i * r, 1 === s && (e += i);
        const o = Math.sin(e), a = Math.cos(e);
        return n.mat2.set(t, a, -o, o, a);
    }
    const bo = [], wo = [], Ao = [], _o = [], Mo = [], So = [], ko = [], Po = [], To = [ 1, -1 ], Oo = [ 1, 1 ];
    function Fo(t, e, i, r, s) {
        const o = e.material.uniforms, a = s.cameraToCenterDistance, l = e.geometry.properties, h = this.getSymbol(l.symbolIndex), c = e.geometry.desc.positionSize, u = l.aAnchor, f = n.vec3.set(bo, u[i * c], u[i * c + 1], 2 === c ? 0 : u[i * c + 2]);
        let d = ho(wo, f, r, s.width, s.height);
        const p = d[2];
        let y = 1;
        if (o.markerPerspectiveRatio) {
            y = is(.5 + .5 * (1 - (1 - a / p) * o.markerPerspectiveRatio), 0, 4);
        }
        const {aShape: m, aMarkerDx: g, aMarkerDy: v, aMarkerWidth: x, aMarkerHeight: b, aPitchAlign: w, aRotationAlign: A, aRotation: _} = l, M = g ? g[i] : h.markerDx, S = v ? v[i] : h.markerDy, k = w ? w[i] : o.pitchWithMap, P = A ? A[i] : o.rotateWithMap, T = n.vec2.set(Po, M || 0, -(S || 0));
        let O = n.vec2.set(_o, m[2 * i] / 10, m[2 * i + 1] / 10), F = n.vec2.set(Mo, m[2 * i + 2] / 10, m[2 * i + 3] / 10), I = n.vec2.set(So, m[2 * i + 4] / 10, m[2 * i + 5] / 10), C = n.vec2.set(ko, m[2 * i + 6] / 10, m[2 * i + 7] / 10);
        0 === o.flipY && 1 === k && (n.vec2.multiply(O, O, To), n.vec2.multiply(F, F, To), 
        n.vec2.multiply(I, I, To), n.vec2.multiply(C, C, To));
        let E = x ? x[i] : h.markerWidth;
        ss(E) && (E = 15);
        let H = b ? b[i] : h.markerHeight;
        ss(H) && (H = 15);
        const D = n.vec2.set(Oo, E / 24, H / 24);
        n.vec2.mul(O, O, D), n.vec2.mul(F, F, D), n.vec2.mul(I, I, D), n.vec2.mul(C, C, D);
        let L = _ ? _[i] / 9362 : -(h.markerRotation || 0) * Math.PI / 180;
        const R = s.getBearing() * Math.PI / 180;
        if (R * P || L) {
            const t = xo(Ao, L, R, P, k);
            O = n.vec2.transformMat2(O, O, t), F = n.vec2.transformMat2(F, F, t), I = n.vec2.transformMat2(I, I, t), 
            C = n.vec2.transformMat2(C, C, t);
        }
        return 1 === k ? go(t, f, O, F, I, C, r, T, o, s, p, y) : (n.vec2.multiply(O, O, To), 
        n.vec2.multiply(F, F, To), n.vec2.multiply(I, I, To), n.vec2.multiply(C, C, To), 
        vo(t, d, O, F, I, C, T, y)), t;
    }
    const Io = [], Co = [], Eo = [], Ho = [], Do = [], Lo = [], Ro = [ 1, -1 ];
    function No(t, e, i, r, s, o, a, l, h) {
        const c = r.material.uniforms, u = h.cameraToCenterDistance, f = r.geometry.properties, d = this.getSymbol(f.symbolIndex), p = "line" === d.textPlacement && !ps(d), y = i[2];
        let m = 1;
        if (c.textPerspectiveRatio) {
            m = is(.5 + .5 * (1 - (1 - u / y) * c.textPerspectiveRatio), 0, 4);
        }
        const {aTextDx: g, aTextDy: v, aPitchAlign: x, aRotationAlign: b, aRotation: w} = r.geometry.properties, A = g ? g[a] : d.textDx, _ = v ? v[a] : d.textDy, M = x ? x[a] : c.pitchWithMap, S = b ? b[a] : c.rotateWithMap, k = n.vec2.set(Lo, A || 0, -(_ || 0));
        if (p) {
            const {aOffset: r} = f;
            let s = n.vec2.set(Co, r[2 * a] / 10, r[2 * a + 1] / 10), o = n.vec2.set(Eo, r[2 * a + 2] / 10, r[2 * a + 3] / 10), u = n.vec2.set(Ho, r[2 * a + 4] / 10, r[2 * a + 5] / 10), d = n.vec2.set(Do, r[2 * a + 6] / 10, r[2 * a + 7] / 10);
            1 === M ? go(t, e, s, o, u, d, l, k, c, h, y, m) : (n.vec2.multiply(s, s, Ro), n.vec2.multiply(o, o, Ro), 
            n.vec2.multiply(u, u, Ro), n.vec2.multiply(d, d, Ro), vo(t, i, s, o, u, d, k, m));
        } else {
            const {aShape: r} = f;
            let o = n.vec2.set(Co, r[2 * a] / 10, r[2 * a + 1] / 10), u = n.vec2.set(Eo, r[2 * a + 2] / 10, r[2 * a + 3] / 10), g = n.vec2.set(Ho, r[2 * a + 4] / 10, r[2 * a + 5] / 10), v = n.vec2.set(Do, r[2 * a + 6] / 10, r[2 * a + 7] / 10);
            0 === c.flipY && 1 === M && (n.vec2.multiply(o, o, Ro), n.vec2.multiply(u, u, Ro), 
            n.vec2.multiply(g, g, Ro), n.vec2.multiply(v, v, Ro));
            let x = w ? -w[a] / 9362 : -(d.textRotation || 0) * Math.PI / 180;
            const b = p ? 0 : h.getBearing() * Math.PI / 180;
            if (x || b) {
                const t = xo(Io, x, b, S, M);
                o = n.vec2.transformMat2(o, o, t), u = n.vec2.transformMat2(u, u, t), g = n.vec2.transformMat2(g, g, t), 
                v = n.vec2.transformMat2(v, v, t);
            }
            const A = s / 24;
            n.vec2.scale(o, o, A), n.vec2.scale(u, u, A), n.vec2.scale(g, g, A), n.vec2.scale(v, v, A), 
            1 === M ? go(t, e, o, u, g, v, l, k, c, h, y, m) : vo(t, i, o, u, g, v, k, m);
        }
        return o = o || 0, t[0] -= o + 1, t[1] -= o + 1, t[2] += o + 1, t[3] += o + 1, t;
    }
    function zo(t, e, i) {
        const r = e.geometry.desc.positionSize, s = e.geometry.properties.aAnchor;
        return n.vec3.set(t, s[i * r], s[i * r + 1], 2 === r ? 0 : s[i * r + 2]);
    }
    const Vo = {
        textFill: [ 0, 0, 0, 1 ],
        textOpacity: 1,
        textPitchAlignment: 0,
        textRotationAlignment: 0,
        textHaloRadius: 0,
        textHaloFill: [ 1, 1, 1, 1 ],
        textHaloBlur: 0,
        textHaloOpacity: 1,
        textPerspectiveRatio: 0,
        textSize: 14,
        textDx: 0,
        textDy: 0,
        textRotation: 0
    };
    function jo(t, e, i, r, s, o, a, l, h) {
        const c = [];
        if (e.isDisposed() || 0 === e.data.aPosition.length) return c;
        const u = e.properties.glyphAtlas;
        if (!u) return c;
        if (0 === r.textSize || 0 === r.textOpacity) return c;
        if (xs(e, r, o), !e.properties.aAnchor) {
            Uo.call(this, e, a || h, l);
            const {aTextSize: t, aTextDx: n, aTextDy: i, aPitchAlign: r, aRotationAlign: s, aRotation: o, aOverlap: c} = e.data;
            if (t) {
                const n = (gs + "aTextSize").trim();
                e.properties.aTextSize = e.properties[n] || new t.constructor(t);
            }
            if (n) {
                const t = (gs + "aTextDx").trim();
                e.properties.aTextDx = e.properties[t] || new n.constructor(n);
            }
            if (i) {
                const t = (gs + "aTextDy").trim();
                e.properties.aTextDy = e.properties[t] || new i.constructor(i);
            }
            if (r) {
                const t = (gs + "aPitchAlign").trim();
                e.properties.aPitchAlign = e.properties[t] || new r.constructor(r);
            }
            if (s) {
                const t = (gs + "aRotationAlign").trim();
                e.properties.aRotationAlign = e.properties[t] || new s.constructor(s);
            }
            if (o) {
                const t = (gs + "aRotation").trim();
                e.properties.aRotation = e.properties[t] || new o.constructor(o);
            }
            if (c) {
                const t = (gs + "aOverlap").trim();
                e.properties.aOverlap = e.properties[t] || new c.constructor(c);
            }
        }
        const f = Us(t, u, !1), d = {
            flipY: 0,
            tileResolution: e.properties.tileResolution,
            tileRatio: e.properties.tileRatio,
            texture: f,
            texSize: [ u.width, u.height ]
        };
        Go(e, d, s);
        let p = !1;
        s.textOpacity < 1 && (p = !0), e.properties.memorySize = e.getMemorySize(), e.generateBuffers(t, {
            excludeElementsInVAO: !0
        });
        const y = new n.reshader.Material(d, Vo), m = new n.reshader.Mesh(e, y, {
            disableVAO: !0,
            transparent: p,
            castShadow: !1,
            picking: !0
        });
        if (m.setLocalTransform(i), d.isHalo && (m.properties.isHalo = !0), a && m.setDefines({
            ENABLE_COLLISION: 1
        }), c.push(m), d.isHalo) {
            const t = {
                flipY: 0,
                tileResolution: e.properties.tileResolution,
                tileRatio: e.properties.tileRatio,
                texture: f,
                texSize: [ u.width, u.height ],
                isHalo: 0
            };
            Go(e, t, s);
            const r = new n.reshader.Material(t, Vo), o = new n.reshader.Mesh(e, r, {
                disableVAO: !0,
                transparent: p,
                castShadow: !1,
                picking: !0
            });
            Object.defineProperty(o.properties, "textSize", {
                enumerable: !0,
                get: function() {
                    return t.textSize;
                }
            }), a && o.setDefines({
                ENABLE_COLLISION: 1
            }), o.setLocalTransform(i), c.push(o);
        }
        return c.forEach(t => {
            const n = t.defines || {};
            e.data.aTextFill && (n.HAS_TEXT_FILL = 1), e.data.aTextSize && (n.HAS_TEXT_SIZE = 1), 
            e.data.aColorOpacity && (n.HAS_OPACITY = 1), e.data.aTextHaloFill && t.material.uniforms.isHalo && (n.HAS_TEXT_HALO_FILL = 1), 
            e.data.aTextHaloRadius && t.material.uniforms.isHalo && (n.HAS_TEXT_HALO_RADIUS = 1), 
            e.data.aTextHaloOpacity && t.material.uniforms.isHalo && (n.HAS_TEXT_HALO_OPACITY = 1), 
            e.data.aTextDx && (n.HAS_TEXT_DX = 1), e.data.aTextDy && (n.HAS_TEXT_DY = 1), e.data.aPitchAlign && (n.HAS_PITCH_ALIGN = 1), 
            e.data.aRotationAlign && (n.HAS_ROTATION_ALIGN = 1), e.data.aRotation && (n.HAS_ROTATION = 1), 
            t.setDefines(n), t.properties.symbolIndex = e.properties.symbolIndex;
        }), c;
    }
    function Uo(t, e, n) {
        const i = this.getSymbol(t.properties.symbolIndex), r = "line" === i.textPlacement && !ps(i), {aPosition: s, aShape: o} = t.data, a = s.length / t.desc.positionSize;
        if (t.properties.aPickingId = t.data.aPickingId, t.properties.aCount = t.data.aCount, 
        delete t.data.aCount, (e || r) && (t.properties.aAnchor = s, t.properties.aShape = o), 
        t.properties.visElemts || (t.properties.elements = t.elements, t.properties.visElemts = new t.elements.constructor(t.elements.length)), 
        r) {
            const {aVertical: e, aSegment: n, aGlyphOffset: i} = t.data;
            t.properties.aGlyphOffset = i, t.properties.aSegment = n, t.properties.aVertical = e, 
            delete t.data.aSegment, delete t.data.aVertical, delete t.data.aGlyphOffset, t.data.aOffset = {
                usage: "dynamic",
                data: new Int16Array(o.length)
            }, t.properties.aOffset = new Int16Array(o.length);
        }
        if (e) {
            t.data.aOpacity = {
                usage: "dynamic",
                data: new Uint8Array(a)
            }, t.properties.aOpacity = new Uint8Array(a), n && (t.properties.aOpacity.fill(255, 0), 
            t.data.aOpacity.data.fill(255, 0));
            const {aTextHaloRadius: e} = t.data;
            if (e && !t.properties.aTextHaloRadius) {
                const n = (gs + "aTextHaloRadius").trim();
                t.properties.aTextHaloRadius = t.properties[n] || new e.constructor(e);
            }
        }
    }
    function Go(t, e, n) {
        void 0 === e.isHalo && (e.isHalo = 1), as(e, "textOpacity", n, "textOpacity", Vo.textOpacity), 
        as(e, "textFill", n, "textFill", Vo.textFill, cs()), as(e, "textHaloFill", n, "textHaloFill", Vo.textHaloFill, cs()), 
        as(e, "textHaloBlur", n, "textHaloBlur", Vo.textHaloBlur), as(e, "textHaloRadius", n, "textHaloRadius", Vo.textHaloRadius), 
        as(e, "textHaloOpacity", n, "textHaloOpacity", Vo.textHaloOpacity), as(e, "textPerspectiveRatio", n, "textPerspectiveRatio", Vo.textPerspectiveRatio, t => "line" === n.textPlacement ? 1 : t), 
        as(e, "rotateWithMap", n, "textRotationAlignment", Vo.textRotationAlignment, t => +("map" === t)), 
        as(e, "pitchWithMap", n, "textPitchAlignment", Vo.textPitchAlignment, t => +("map" === t)), 
        as(e, "textSize", n, "textSize", Vo.textSize), as(e, "textDx", n, "textDx", Vo.textDx), 
        as(e, "textDy", n, "textDy", Vo.textDy), as(e, "textRotation", n, "textRotation", Vo.textRotation, t => t * Math.PI / 180);
    }
    function Wo(t, e) {
        const i = t.getRenderer().canvas;
        return {
            uniforms: [ {
                name: "projViewModelMatrix",
                type: "function",
                fn: function(t, e) {
                    return n.mat4.multiply([], e.projViewMatrix, e.modelMatrix);
                }
            }, {
                name: "zoomScale",
                type: "function",
                fn: function(t, e) {
                    return e.tileResolution / e.resolution;
                }
            } ],
            extraCommandProps: {
                viewport: {
                    x: 0,
                    y: 0,
                    width: () => i ? i.width : 1,
                    height: () => i ? i.height : 1
                },
                stencil: {
                    enable: !1,
                    mask: 255,
                    func: {
                        cmp: "<",
                        ref: (t, e) => 2 * e.level + (e.isHalo || 0) + 1,
                        mask: 255
                    },
                    op: {
                        fail: "keep",
                        zfail: "keep",
                        zpass: "replace"
                    }
                },
                blend: {
                    enable: !0,
                    func: {
                        src: "one",
                        dst: "one minus src alpha"
                    },
                    equation: "add"
                },
                depth: {
                    enable: !0,
                    range: e.depthRange || [ 0, 1 ],
                    func: e.depthFunc || "always",
                    mask: !1
                },
                polygonOffset: {
                    enable: !0,
                    offset: this.getPolygonOffset()
                }
            }
        };
    }
    function Bo(t, e) {
        const n = M(e.textFill), i = M(e.textSize), r = M(e.textHaloFill), s = M(e.textHaloRadius), o = M(e.textHaloOpacity), a = M(e.textDx), l = M(e.textDy), h = M(e.textOpacity), c = S(e.textPitchAlignment), u = S(e.textRotationAlignment), f = M(e.textRotation), d = S(e.textAllowOverlapFn), p = S(e.textIgnorePlacement), y = {}, m = new Int16Array(1), g = new Uint16Array(1);
        return [ {
            attrName: "aTextFill",
            symbolName: "textFill",
            define: "HAS_TEXT_FILL",
            type: Uint8Array,
            width: 4,
            evaluate: (e, i, r) => {
                let s = n(t.getZoom(), e);
                return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e, !0)), Array.isArray(s) || (s = y[s] = y[s] || zt(s).unitArray()), 
                s = hs(s), s;
            }
        }, {
            attrName: "aTextSize",
            symbolName: "textSize",
            define: "HAS_TEXT_SIZE",
            type: Uint8Array,
            width: 1,
            evaluate: (e, n, r) => {
                let s = i(t.getZoom(), e) || Vo.textSize;
                return _(s) && (s = this.evaluateInFnTypeConfig(s, r, t, e)), m[0] = s, m[0];
            }
        }, {
            attrName: "aTextHaloFill",
            symbolName: "textHaloFill",
            define: "HAS_TEXT_HALO_FILL",
            type: Uint8Array,
            width: 4,
            evaluate: e => {
                let n = r(t.getZoom(), e);
                return Array.isArray(n) || (n = y[n] = y[n] || zt(n).array()), n = hs(n), n;
            }
        }, {
            attrName: "aTextHaloRadius",
            symbolName: "textHaloRadius",
            define: "HAS_TEXT_HALO_RADIUS",
            type: Uint8Array,
            width: 1,
            evaluate: e => {
                const n = s(t.getZoom(), e);
                return m[0] = n, m[0];
            }
        }, {
            attrName: "aTextHaloOpacity",
            symbolName: "textHaloOpacity",
            define: "HAS_TEXT_HALO_OPACITY",
            type: Uint8Array,
            width: 1,
            evaluate: e => {
                const n = o(t.getZoom(), e);
                return m[0] = n, m[0];
            }
        }, {
            attrName: "aTextDx",
            symbolName: "textDx",
            define: "HAS_TEXT_DX",
            type: Uint8Array,
            width: 1,
            evaluate: e => {
                const n = a(t.getZoom(), e);
                return m[0] = n, m[0];
            }
        }, {
            attrName: "aTextDy",
            symbolName: "textDy",
            define: "HAS_TEXT_DY",
            type: Uint8Array,
            width: 1,
            evaluate: e => {
                const n = l(t.getZoom(), e);
                return m[0] = n, m[0];
            }
        }, {
            attrName: "aColorOpacity",
            symbolName: "textOpacity",
            define: "HAS_OPACITY",
            type: Uint8Array,
            width: 1,
            evaluate: (e, n, i) => {
                let r = h(t.getZoom(), e);
                return _(r) && (r = this.evaluateInFnTypeConfig(r, i, t, e)), m[0] = 255 * r, m[0];
            }
        }, {
            attrName: "aPitchAlign",
            symbolName: "textPitchAlignment",
            type: Uint8Array,
            width: 1,
            define: "HAS_PITCH_ALIGN",
            evaluate: e => +("map" === c(t.getZoom(), e))
        }, {
            attrName: "aRotationAlign",
            symbolName: "textRotationAlignment",
            type: Uint8Array,
            width: 1,
            define: "HAS_ROTATION_ALIGN",
            evaluate: e => +("map" === u(t.getZoom(), e))
        }, {
            attrName: "aRotation",
            symbolName: "textRotation",
            type: Uint16Array,
            width: 1,
            define: "HAS_ROTATION",
            evaluate: e => {
                const n = rs(f(t.getZoom(), e), 0, 360) * Math.PI / 180;
                return g[0] = 9362 * n, g[0];
            }
        }, {
            attrName: "aOverlap",
            symbolName: "textAllowOverlap",
            type: Uint8Array,
            width: 1,
            evaluate: n => {
                let i = d(t.getZoom(), n) || 0, r = (p ? p(t.getZoom(), n) : e.textIgnorePlacement) || 0;
                return i = 1 << 3 + 4 * i, r = (p ? 2 : 0) + r, i + r;
            }
        }, {
            attrName: "aOverlap",
            symbolName: "textIgnorePlacement",
            type: Uint8Array,
            width: 1,
            evaluate: n => {
                let i = (d ? d(t.getZoom(), n) : e.textAllowOverlap) || 0, r = p(t.getZoom(), n) || 0;
                return i = (d ? 8 : 0) + 4 * i, r = 1 << 1 + r, i + r;
            }
        } ];
    }
    const Xo = [], qo = [], Jo = [], Yo = [];
    function $o(t, e, n, i, r, s, o) {
        t = 1 === t ? 1 : 0;
        const a = this.getMap(), l = e.geometry.properties, h = this.getSymbol(l.symbolIndex), c = "line" === h.textPlacement && !ps(h), {aTextSize: u, aTextHaloRadius: f, aShape: d} = l;
        let p = u ? u[n[r]] : e.properties.textSize;
        null == p && (p = Vo.textSize);
        const y = f ? f[n[r]] : e.properties.textHaloRadius, m = zo(Jo, e, n[r]), g = ho(Yo, m, o, a.width, a.height), v = i, {boxes: x, collision: b} = this.as(e, r);
        let w = 0;
        if (c || 1 === e.material.uniforms.rotateWithMap || h.textRotation) {
            let i = 0;
            for (let s = r; s < r + 6 * v; s += 6) {
                const r = x[w] = x[w] || [];
                w++;
                const l = No.call(this, r, m, g, e, p, y, n[s], o, a);
                if (!t) {
                    const e = this.isCollides(l);
                    1 === e ? t = 1 : -1 === e && i++;
                }
            }
            i === v && (t = -1);
        } else {
            let i = n[r], l = d[2 * i + 1];
            for (let h = r; h < s; h += 6) {
                const r = d[2 * n[h] + 1];
                if (l !== r || h === s - 6) {
                    const c = n[h === s - 6 ? h : h - 6], u = No.call(this, Xo, m, g, e, p, y, i, o, a), f = No.call(this, qo, m, g, e, p, y, c, o, a), d = x[w] = x[w] || [];
                    w++, d[0] = Math.min(u[0], f[0]), d[1] = Math.min(u[1], f[1]), d[2] = Math.max(u[2], f[2]), 
                    d[3] = Math.max(u[3], f[3]), i = n[h], l = r, !t && this.isCollides(d) && (t = 1);
                }
            }
        }
        return b.collides = t, b;
    }
    function Zo(t, e) {
        const i = function(t, e) {
            const {aPickingId: n, features: i} = t.geometry.properties, r = n[e];
            return (i && i[r] && i[r].feature).label;
        }(t, e);
        return i ? function(t, e, i) {
            if (!i) return null;
            const r = t.localTransform, s = zo(Ko, t, e);
            n.vec4.set(Qo, s[0], s[1], s[2], 1);
            const o = n.vec4.transformMat4(Qo, Qo, r);
            let a = 0;
            for (let t = 0; t < i.length; t++) a += i.charCodeAt(t);
            return [ Math.floor(o[0]), Math.floor(o[1]), Math.floor(o[2]), a ];
        }(t, e, i) : null;
    }
    const Ko = [], Qo = [];
    var ta = "#define SHADER_NAME TEXT\n#define RAD 0.0174532925\nattribute vec3 aPosition;\nattribute vec2 aShape;\nattribute vec2 aTexCoord;\n#ifdef ENABLE_COLLISION\nattribute float aOpacity;\n#endif\n#ifdef HAS_OPACITY\nattribute float aColorOpacity;\n#endif\n#ifdef HAS_TEXT_SIZE\nattribute float aTextSize;\n#else\nuniform float textSize;\n#endif\n#ifdef HAS_TEXT_DX\nattribute float aTextDx;\n#else\nuniform float textDx;\n#endif\n#ifdef HAS_TEXT_DY\nattribute float aTextDy;\n#else\nuniform float textDy;\n#endif\n#if defined(HAS_PITCH_ALIGN)\nattribute float aPitchAlign;\n#else\nuniform float pitchWithMap;\n#endif\n#if defined(HAS_ROTATION_ALIGN)\nattribute float aRotationAlign;\n#else\nuniform float rotateWithMap;\n#endif\nuniform float flipY;\n#if defined(HAS_ROTATION)\nattribute float aRotation;\n#else\nuniform float textRotation;\n#endif\nuniform float cameraToCenterDistance;\nuniform mat4 projViewModelMatrix;\nuniform float textPerspectiveRatio;\nuniform vec2 texSize;\nuniform vec2 canvasSize;\nuniform float glyphSize;\nuniform float mapPitch;\nuniform float mapRotation;\nuniform float zoomScale;\nuniform float tileRatio;\nuniform float layerScale;\n#ifndef PICKING_MODE\nvarying vec2 vTexCoord;\nvarying float vGammaScale;\nvarying float vSize;\nvarying float vOpacity;\n#ifdef HAS_TEXT_FILL\nattribute vec4 aTextFill;\nvarying vec4 vTextFill;\n#endif\n#ifdef HAS_TEXT_HALO_FILL\nattribute vec4 aTextHaloFill;\nvarying vec4 vTextHaloFill;\n#endif\n#ifdef HAS_TEXT_HALO_RADIUS\nattribute float aTextHaloRadius;\nvarying float vTextHaloRadius;\n#endif\n#ifdef HAS_TEXT_HALO_OPACITY\nattribute float aTextHaloOpacity;\nvarying float vTextHaloOpacity;\n#endif\n#else\n#include <fbo_picking_vert>\n#endif\nvoid main() {\n  vec3 c = aPosition;\n#ifdef HAS_TEXT_SIZE\nfloat d = aTextSize * layerScale;\n#else\nfloat d = textSize * layerScale;\n#endif\n#ifdef HAS_TEXT_DX\nfloat e = aTextDx;\n#else\nfloat e = textDx;\n#endif\n#ifdef HAS_TEXT_DY\nfloat f = aTextDy;\n#else\nfloat f = textDy;\n#endif\n#if defined(HAS_PITCH_ALIGN)\nfloat h = aPitchAlign;\n#else\nfloat h = pitchWithMap;\n#endif\n#if defined(HAS_ROTATION_ALIGN)\nfloat i = aRotationAlign;\n#else\nfloat i = rotateWithMap;\n#endif\nvec2 j = aShape / 10.0;\n  if(h == 1. && flipY == .0) {\n    j = j * vec2(1., -1.);\n  }\n  vec2 k = aTexCoord;\n  gl_Position = projViewModelMatrix * vec4(c, 1.);\n  float l = gl_Position.w;\n  float m = (1. - cameraToCenterDistance / l) * textPerspectiveRatio;\n  float n = clamp(.5 + .5 * (1. - m), .0, 4.);\n#ifdef HAS_ROTATION\nfloat o = aRotation / 9362. - mapRotation * i;\n#else\nfloat o = textRotation - mapRotation * i;\n#endif\nif(h == 1.) {\n    \n#ifdef REVERSE_MAP_ROTATION_ON_PITCH\no += mapRotation;\n#else\no -= mapRotation;\n#endif\n  }\n  float u = sin(o);\n  float v = cos(o);\n  mat2 A = mat2(v, -1. * u, u, v);\n  j = A * (j / glyphSize * d);\n  float B = l / cameraToCenterDistance;\n  if(h == .0) {\n    vec2 C = j * 2. / canvasSize;\n    gl_Position.xy += C * n * l;\n  } else {\n    vec2 C = j;\n    gl_Position = projViewModelMatrix * vec4(c + vec3(C, .0) * tileRatio / zoomScale * B * n, 1.);\n  }\n  gl_Position.xy += vec2(e, -f) * 2. / canvasSize * l;\n#ifndef PICKING_MODE\nif(h == .0) {\n    vGammaScale = mix(1., B, textPerspectiveRatio);\n  } else {\n    vGammaScale = B + mapPitch / 4.;\n  }\n  vTexCoord = k / texSize;\n  vGammaScale = clamp(vGammaScale, .0, 1.);\n  vSize = d;\n#ifdef ENABLE_COLLISION\nvOpacity = aOpacity / 255.;\n#else\nvOpacity = 1.;\n#endif\n#ifdef HAS_OPACITY\nvOpacity *= aColorOpacity / 255.;\n#endif\n#ifdef HAS_TEXT_FILL\nvTextFill = aTextFill / 255.;\n#endif\n#ifdef HAS_TEXT_HALO_FILL\nvTextHaloFill = aTextHaloFill / 255.;\n#endif\n#ifdef HAS_TEXT_HALO_RADIUS\nvTextHaloRadius = aTextHaloRadius;\n#endif\n#ifdef HAS_TEXT_HALO_OPACITY\nvTextHaloOpacity = aTextHaloOpacity;\n#endif\n#else\n#ifdef ENABLE_COLLISION\nbool D = aOpacity == 255.;\n#else\nbool D = true;\n#endif\nfbo_picking_setData(gl_Position.w, D);\n#endif\n}", ea = "#define SHADER_NAME TEXT\n#define SDF_PX 8.0\n#define DEVICE_PIXEL_RATIO 1.0\n#define EDGE_GAMMA 0.105 / DEVICE_PIXEL_RATIO\nprecision mediump float;\nuniform sampler2D texture;\nuniform float textOpacity;\nuniform highp float gammaScale;\nuniform int isHalo;\nuniform highp float textHaloBlur;\n#ifdef HAS_TEXT_HALO_OPACITY\nvarying float vTextHaloOpacity;\n#else\nuniform float textHaloOpacity;\n#endif\nvarying vec2 vTexCoord;\nvarying float vSize;\nvarying float vGammaScale;\nvarying float vOpacity;\n#ifdef HAS_TEXT_FILL\nvarying vec4 vTextFill;\n#else\nuniform vec4 textFill;\n#endif\n#ifdef HAS_TEXT_HALO_FILL\nvarying vec4 vTextHaloFill;\n#else\nuniform vec4 textHaloFill;\n#endif\n#ifdef HAS_TEXT_HALO_RADIUS\nvarying float vTextHaloRadius;\n#else\nuniform highp float textHaloRadius;\n#endif\nvoid main() {\n  \n#ifdef HAS_TEXT_FILL\nvec4 c = vTextFill;\n#else\nvec4 c = textFill;\n#endif\nfloat d = vSize / 24.;\n  lowp vec4 e = c;\n  highp float f = EDGE_GAMMA / (d * gammaScale);\n  lowp float h = 185. / 256.;\n  if(isHalo == 1) {\n    \n#ifdef HAS_TEXT_HALO_FILL\nvec4 i = vTextHaloFill;\n#else\nvec4 i = textHaloFill;\n#endif\n#ifdef HAS_TEXT_HALO_RADIUS\nfloat j = vTextHaloRadius;\n#else\nfloat j = textHaloRadius;\n#endif\ne = i;\n    f = (textHaloBlur * 1.19 / SDF_PX + EDGE_GAMMA) / (d * gammaScale);\n    h = (6. - j / d) / SDF_PX;\n#ifdef HAS_TEXT_HALO_OPACITY\nfloat k = vTextHaloOpacity / 255.;\n#else\nfloat k = textHaloOpacity;\n#endif\ne *= k * 1.25;\n  }\n  float l = texture2D(texture, vTexCoord).a;\n  highp float m = f * vGammaScale * .7;\n  float n = clamp(smoothstep(h - m, h + m, l), .0, 1.);\n  gl_FragColor = e * (n * textOpacity * vOpacity);\n}";
    const na = new Uint16Array(1), ia = new Int8Array(1);
    function ra(t, e, n) {
        xs(t, e, n), function(t) {
            const {aMarkerWidth: e, aMarkerHeight: n, aMarkerDx: i, aMarkerDy: r, aPitchAlign: s, aRotationAlign: o, aRotation: a, aOverlap: l} = t.data;
            if (e) {
                const n = (gs + "aMarkerWidth").trim();
                t.properties.aMarkerWidth = t.properties[n] || new e.constructor(e);
            }
            if (n) {
                const e = (gs + "aMarkerHeight").trim();
                t.properties.aMarkerHeight = t.properties[e] || new n.constructor(n);
            }
            if (i) {
                const e = (gs + "aMarkerDx").trim();
                t.properties.aMarkerDx = t.properties[e] || new i.constructor(i);
            }
            if (r) {
                const e = (gs + "aMarkerDy").trim();
                t.properties.aMarkerDy = t.properties[e] || new r.constructor(r);
            }
            if (s) {
                const e = (gs + "aPitchAlign").trim();
                t.properties.aPitchAlign = t.properties[e] || new s.constructor(s);
            }
            if (o) {
                const e = (gs + "aRotationAlign").trim();
                t.properties.aRotationAlign = t.properties[e] || new o.constructor(o);
            }
            if (a) {
                const e = (gs + "aRotation").trim();
                t.properties.aRotation = t.properties[e] || new a.constructor(a);
            }
            if (l) {
                const e = (gs + "aOverlap").trim();
                t.properties.aOverlap = t.properties[e] || new l.constructor(l);
            }
        }(t);
    }
    function sa(t, e) {
        const n = M(e.markerWidth), i = M(e.markerHeight), r = M(e.markerDx), s = M(e.markerDy), o = M(e.markerOpacity), a = M(e.markerTextFit), l = S(e.markerPitchAlignment), h = S(e.markerRotationAlignment), c = M(e.markerRotation), u = S(e.markerAllowOverlapFn), f = S(e.markerIgnorePlacement), d = new Int16Array(1), p = new Uint16Array(1);
        return [ {
            attrName: "aMarkerWidth",
            symbolName: "markerWidth",
            type: Uint8Array,
            width: 1,
            define: "HAS_MARKER_WIDTH",
            evaluate: (i, r, s) => {
                const o = e.markerTextFit, l = a ? a(t.getZoom(), i) : o;
                if ("both" === l || "width" === l) return r;
                let h = n(t.getZoom(), i);
                return _(h) && (h = this.evaluateInFnTypeConfig(h, s, t, i)), d[0] = h, d[0];
            }
        }, {
            attrName: "aMarkerHeight",
            symbolName: "markerHeight",
            type: Uint8Array,
            width: 1,
            define: "HAS_MARKER_HEIGHT",
            evaluate: (n, r, s) => {
                const o = e.markerTextFit, l = a ? a(t.getZoom(), n) : o;
                if ("both" === l || "height" === l) return r;
                let h = i(t.getZoom(), n);
                return _(h) && (h = this.evaluateInFnTypeConfig(h, s, t, n)), d[0] = h, d[0];
            }
        }, {
            attrName: "aMarkerDx",
            symbolName: "markerDx",
            type: Uint8Array,
            width: 1,
            define: "HAS_MARKER_DX",
            evaluate: (e, n, i) => {
                let s = r(t.getZoom(), e);
                return _(s) && (s = this.evaluateInFnTypeConfig(s, i, t, e)), d[0] = s, d[0];
            }
        }, {
            attrName: "aMarkerDy",
            symbolName: "markerDy",
            type: Uint8Array,
            width: 1,
            define: "HAS_MARKER_DY",
            evaluate: (e, n, i) => {
                let r = s(t.getZoom(), e);
                return _(r) && (r = this.evaluateInFnTypeConfig(r, i, t, e)), d[0] = r, d[0];
            }
        }, {
            attrName: "aColorOpacity",
            symbolName: "markerOpacity",
            type: Uint8Array,
            width: 1,
            define: "HAS_OPACITY",
            evaluate: (e, n, i) => {
                let r = o(t.getZoom(), e);
                return _(r) && (r = this.evaluateInFnTypeConfig(r, i, t, e)), d[0] = 255 * r, d[0];
            }
        }, {
            attrName: "aPitchAlign",
            symbolName: "markerPitchAlignment",
            type: Uint8Array,
            width: 1,
            define: "HAS_PITCH_ALIGN",
            evaluate: e => +("map" === l(t.getZoom(), e))
        }, {
            attrName: "aRotationAlign",
            symbolName: "markerRotationAlignment",
            type: Uint8Array,
            width: 1,
            define: "HAS_ROTATION_ALIGN",
            evaluate: e => +("map" === h(t.getZoom(), e))
        }, {
            attrName: "aRotation",
            symbolName: "markerRotation",
            type: Uint16Array,
            width: 1,
            define: "HAS_ROTATION",
            evaluate: e => {
                const n = rs(c(t.getZoom(), e), 0, 360) * Math.PI / 180;
                return p[0] = 9362 * n, p[0];
            }
        }, {
            attrName: "aOverlap",
            symbolName: "markerAllowOverlap",
            type: Uint8Array,
            width: 1,
            evaluate: n => {
                let i = u(t.getZoom(), n) || 0, r = (f ? f(t.getZoom(), n) : e.markerIgnorePlacement) || 0;
                return i = 1 << 3 + 4 * i, r = (f ? 2 : 0) + r, i + r;
            }
        }, {
            attrName: "aOverlap",
            symbolName: "markerIgnorePlacement",
            type: Uint8Array,
            width: 1,
            evaluate: n => {
                let i = (u ? u(t.getZoom(), n) : e.markerAllowOverlap) || 0, r = f(t.getZoom(), n) || 0;
                return i = (u ? 8 : 0) + 4 * i, r = 2 + r, i + r;
            }
        } ];
    }
    function oa(t, e, n, i) {
        if (!n || !i || "none" === i) return;
        const r = function(t, e, n) {
            let i = t.properties.textFitFn;
            _(n) && (i = t.properties.textFitFn = S(n));
            const r = "none" !== n, s = [], o = t.getElements(), a = t.data.aPickingId;
            let l, h, c;
            e && (l = e.getElements(), h = e.data.aPickingId, c = e.data.aCount);
            const u = t.properties.features;
            let f;
            if (e) {
                let t = l[0];
                f = {
                    pickingId: h[t],
                    start: 0,
                    end: 6 * c[t]
                };
            }
            let d = !1, p = !1, y = 0;
            const m = [];
            for (let t = 0; t < o.length; t += 6) {
                const e = o[t], g = a[e];
                if (!d && f) for (;f.pickingId < g && f.end < l.length; ) {
                    const t = f.end, e = l[t];
                    f.start = t, f.end = t + 6 * c[e], f.pickingId = h[e];
                }
                if (!d && f && f.pickingId < g && (d = !0, !r)) {
                    if (!p) return [];
                    for (let e = t; e < o.length; e += 6) s[y++] = [ -1, -1 ];
                    return s;
                }
                const v = u[g] && u[g].feature, x = v && v.properties || {};
                x.$layer = v && v.layer, x.$type = v && v.type;
                const b = i ? i(null, x) : n;
                if (delete x.$layer, delete x.$type, f && g === f.pickingId) {
                    s[y++] = [ f.start, f.end ];
                    const t = f.end, e = l[t];
                    f.start = t, f.end = t + 6 * c[e], f.pickingId = h[e], p = !0;
                } else if (b && "none" !== b) for (let e = t; e < t + 6; e++) m.push(e); else s[y++] = [ -1, -1 ];
            }
            if (m.length) if (m.length === o.length) t.setElements([]); else {
                const e = [];
                let n = 0, i = m[n];
                for (let t = 0; t < o.length; t++) t < i ? e.push(o[t]) : t === i && (n++, i = m[n]);
                t.setElements(new o.constructor(e));
            }
            if (!p) return [];
            return s;
        }(e, n, i);
        if (!e.getElements().length) return;
        if (!r.length) return;
        e.properties.labelIndex = r;
        if (r.length && i && "none" !== i && n) {
            const i = function(t, e) {
                const n = [], i = t.properties.labelIndex, {aShape: r} = e.data;
                let s = !1;
                for (let t = 0; t < i.length; t++) {
                    const [o, a] = i[t];
                    if (-1 === o) n.push(0, 0, 0, 0); else {
                        s = !0;
                        let t = 1 / 0, i = 1 / 0, l = -1 / 0, h = -1 / 0;
                        const c = e.elements;
                        for (let e = o; e < a; e++) {
                            const n = c[e], s = r[2 * n], o = r[2 * n + 1];
                            s < t && (t = s), s > l && (l = s), o < i && (i = o), o > h && (h = o);
                        }
                        n.push(t, i, l, h);
                    }
                }
                if (!s) return [];
                return n;
            }(e, n);
            i.length && (e.properties.labelShape = i, aa.call(this, t, e, n));
        }
    }
    function aa(t, e) {
        const n = this.getSymbolDef(e.properties.symbolIndex), i = n.markerTextFit, r = e.properties;
        let s = "both" === i || "width" === i, o = "both" === i || "height" === i;
        if (_(n.markerTextFit)) {
            let t = e.properties.textFitFn;
            t || (t = e.properties.textFitFn = M(n.markerTextFit));
            const {features: i} = e.properties, a = e.properties.elements || e.elements, {aPickingId: l} = e.data, h = [], c = [];
            let u = !0;
            for (let e = 0; e < a.length; e += 6) {
                const n = i[l[a[e]]], r = n && n.feature || {}, s = r.properties || {};
                s.$layer = r.layer, s.$type = r.type;
                let o = t(null, s);
                if (_(o)) {
                    o = (s.textFitFn = s.textFitFn || M(o))(null, s);
                }
                delete s.$layer, delete s.$type, "both" === o ? (h.push(e / 6), c.push(e / 6)) : "width" === o ? (u = !1, 
                h.push(e / 6)) : "height" === o && (u = !1, c.push(e / 6));
            }
            u ? (r.fitIcons = h, s = !0, o = !0) : (h.length && (r.fitWidthIcons = h, s = !0), 
            c.length && (r.fitHeightIcons = c, o = !0));
        }
        r.aPickingId || (r.aPickingId = new e.data.aPickingId.constructor(e.data.aPickingId));
        const {aMarkerWidth: a, aMarkerHeight: l, aPickingId: h} = r, c = h.length;
        if (s) if (a) {
            const t = e.data.aMarkerWidth;
            e.data.aMarkerWidth = new Uint16Array(t), r.aMarkerWidth = new Uint16Array(t);
            const n = (gs + "aMarkerWidth").trim();
            r[n] && (r[n] = r.aMarkerWidth);
        } else {
            const t = this.getSymbol(e.properties.symbolIndex).markerWidth || 0;
            r.aMarkerWidth = new Uint16Array(c), r.aMarkerWidth.fill(t), t && (r.aMarkerWidth.dirty = !0), 
            e.data.aMarkerWidth = new Uint16Array(c);
        }
        if (o) if (l) {
            const t = e.data.aMarkerHeight;
            e.data.aMarkerHeight = new Uint16Array(t), r.aMarkerHeight = new Uint16Array(t);
            const n = (gs + "aMarkerHeight").trim();
            r[n] && (r[n] = r.aMarkerHeight);
        } else {
            const t = this.getSymbol(e.properties.symbolIndex).markerHeight || 0;
            r.aMarkerHeight = new Uint16Array(c), r.aMarkerHeight.fill(t), t && (r.aMarkerHeight.dirty = !0), 
            e.data.aMarkerHeight = new Uint16Array(c);
        }
        const u = this.getSymbolDef(e.properties.textGeo.properties.symbolIndex), f = M(u.textSize);
        la.call(this, t, e), (!_(u.textSize) || f.isZoomConstant && f.isFeatureConstant) && (r.isFitConstant = !0);
    }
    function la(t, e) {
        const n = e.properties.textGeo;
        if (!n) return;
        const i = n.properties, r = e.properties;
        if (r.isFitConstant || !r.labelShape || !r.labelShape.length) return;
        const s = this.getSymbolDef(e.properties.symbolIndex), o = this.getSymbolDef(n.properties.symbolIndex).textSize;
        let a;
        _(o) && (a = i.us ? i.us : i.us = M(o));
        const l = s.markerTextFitPadding || [ 0, 0, 0, 0 ];
        let h;
        _(l) && (h = r.fs ? r.fs : r.fs = S(l));
        const c = t.getZoom(), {fitIcons: u, fitWidthIcons: f, fitHeightIcons: d} = r, {aMarkerWidth: p, aMarkerHeight: y, labelShape: m} = r, g = r.elements || e.elements, {features: v, aPickingId: x} = r, b = (t, e, n, i) => {
            const s = m[4 * e], u = m[4 * e + 1], f = m[4 * e + 2], d = m[4 * e + 3];
            if (!(s || u || f || d)) return;
            const g = x[t], b = v[g] && v[g].feature, w = b && b.properties || {};
            w.$layer = b && b.layer, w.$type = b && b.type;
            let A = a ? a(c, w) : o;
            if (_(A)) {
                A = (w.textSizeFn = w.textSizeFn || M(A))(c, w);
            }
            A /= 24;
            let k, P, T = h ? h(c, w) : l;
            if (_(T)) {
                T = (w.fitPaddingFn = w.fitPaddingFn || S(T))(c, w);
            }
            if (T[0] === T[2] && T[1] === T[3] || (k = r.aPadOffsetX, P = r.aPadOffsetY, k || (k = r.aPadOffsetX = new Int8Array(p.length), 
            P = r.aPadOffsetY = new Int8Array(p.length))), delete w.$layer, delete w.$type, 
            p && n) {
                const e = Math.abs((f - s) / 10 * A) + (T[1] + T[3] || 0);
                if (na[0] = e, p[t] !== na[0] && (fs(p, na[0], t, t + 4), p.dirty = !0), k) {
                    const e = (T[1] + T[3]) / 2 - T[3];
                    ia[0] = e, k[t] !== ia[0] && (fs(k, e, t, t + 4), k.dirty = !0);
                }
            }
            if (y && i) {
                const e = Math.abs((d - u) / 10 * A) + (T[0] + T[2] || 0);
                if (na[0] = e, y[t] !== na[0] && (fs(y, na[0], t, t + 4), y.dirty = !0), P) {
                    const e = T[0] - (T[0] + T[2]) / 2;
                    ia[0] = e, P[t] !== ia[0] && (fs(P, e, t, t + 4), P.dirty = !0);
                }
            }
        };
        if (u || f || d) {
            if (u) for (let t = 0; t < u.length; t++) {
                const e = u[t];
                b(g[6 * e], e, !0, !0);
            } else if (f || d) {
                if (f) for (let t = 0; t < f.length; t++) {
                    const e = f[t];
                    b(g[6 * e], e, !0, !1);
                }
                if (d) for (let t = 0; t < d.length; t++) {
                    const e = d[t];
                    b(g[6 * e], e, !1, !0);
                }
            }
        } else for (let t = 0; t < g.length; t += 6) {
            const e = t / 6;
            b(g[t], e, !0, !0);
        }
        const {aPadOffsetX: w, aPadOffsetY: A} = r;
        w && (e.data.aPadOffsetX = w, e.data.aPadOffsetY = A);
    }
    const ha = function(t) {
        const e = this.layer.getRenderer();
        return !this.cs(t) && e.isForeground(t) && !!t.geometry.properties.iconAtlas && !t.geometry.properties.isEmpty;
    }, ca = function(t) {
        const e = this.layer.getRenderer();
        return !(this.cs(t) || e.isForeground(t) || !t.geometry.properties.iconAtlas || t.geometry.properties.isEmpty);
    }, ua = function(t) {
        const e = this.layer.getRenderer();
        return !this.cs(t) && e.isForeground(t) && !!t.geometry.properties.glyphAtlas;
    }, fa = function(t) {
        const e = this.layer.getRenderer();
        return !this.cs(t) && !e.isForeground(t) && !!t.geometry.properties.glyphAtlas;
    }, da = [], pa = {
        colliides: -1
    };
    class ya extends ro {
        constructor(t, e, n, i, r) {
            super(t, e, n, i, r), this.propAllowOverlap = "markerAllowOverlap", this.propIgnorePlacement = "markerIgnorePlacement", 
            this.Ui = {}, this.isLabelCollides = $o.bind(this), this.ds = ha.bind(this), this.ps = ca.bind(this), 
            this.ys = ua.bind(this), this.ms = fa.bind(this), this.gs = [];
        }
        setTextShaderDefines(t) {
            this.vs = t;
        }
        createFnTypeConfig(t, e) {
            return {
                icon: sa.call(this, t, e),
                text: Bo.call(this, t, e)
            };
        }
        startFrame(...t) {
            return this.gs.length = 0, super.startFrame(...t);
        }
        createGeometry(t, e) {
            return t && t.empty && (t.data = {
                aPosition: new Uint8Array(t.data.aPosition),
                aPickingId: t.data.aPickingId
            }), super.createGeometry(t, e);
        }
        postCreateGeometry(t, e) {
            const {geometry: n, symbolIndex: i} = t, r = this.getSymbolDef(i), s = this.getFnTypeConfig(i);
            if (this.xs(n)) n.properties.iconAtlas ? this.drawDebugAtlas(n.properties.iconAtlas) : n.properties.isEmpty = !0, 
            ra(n, r, s.icon); else if (this.bs(n) && ps(r)) {
                const t = e[e.length - 1];
                if (t) {
                    const {geometry: e, symbolIndex: s} = t;
                    if (e && s.index === i.index) {
                        const t = this.getMap(), i = r.markerTextFit;
                        e.properties.textGeo = n, oa.call(this, t, e, n, i);
                    }
                }
            }
        }
        ws(t) {
            if (!this.layer.options.collision) return;
            const {collideIds: e, elements: n, aCount: i} = t.properties, r = e, s = {};
            if (!n) return void (t.properties.collideBoxIndex = s);
            let o = 0, a = n[0], l = 0, h = r[a], c = 1;
            i && (c = i[n[l]]);
            for (let t = 0; t <= n.length; t += 6) a = n[t], r[a] === h && t !== n.length || (s[h] = [ l, t, (t - l) / (6 * c), o++ ], 
            h = r[a], l = t, i && (c = i[n[l]]));
            t.properties.collideBoxIndex = s;
        }
        createMesh(t, e, i, r) {
            const s = this.isEnableCollision(), o = this.layer, {geometry: a, symbolIndex: l} = t;
            a.properties.symbolIndex = l;
            const h = this.getSymbolDef(l), c = this.getSymbol(l), u = this.getFnTypeConfig(l), f = [];
            if (this.xs(a)) {
                const t = function(t, e, i, r, s, o, a, l, h) {
                    if (e.isDisposed() || 0 === e.data.aPosition.length) return null;
                    const c = e.properties.iconAtlas;
                    if (!c && !e.properties.isEmpty) return null;
                    const u = {
                        flipY: 0,
                        tileResolution: e.properties.tileResolution,
                        tileRatio: e.properties.tileRatio
                    };
                    //!geometry.properties.aAnchor 以避免重复创建collision数据
                                        if ((a || h) && !e.properties.aAnchor) {
                        const {aPosition: t, aShape: n} = e.data, i = e.data.aPosition.length / e.desc.positionSize, r = new Uint8Array(i);
                        l && r.fill(255, 0), e.data.aOpacity = {
                            usage: "dynamic",
                            data: r
                        }, e.properties.aOpacity = new Uint8Array(i), l && e.properties.aOpacity.fill(255, 0), 
                        e.properties.aAnchor = t, e.properties.aShape = n;
                    }
                    e.properties.visElemts || (e.properties.elements = e.elements, e.properties.visElemts = new e.elements.constructor(e.elements.length)), 
                    as(u, "markerOpacity", s, "markerOpacity", 1), as(u, "markerPerspectiveRatio", s, "markerPerspectiveRatio", s.markerTextFit ? 0 : 1), 
                    as(u, "markerWidth", s, "markerWidth", 15), as(u, "markerHeight", s, "markerHeight", 15), 
                    as(u, "markerDx", s, "markerDx", 0), as(u, "markerDy", s, "markerDy", 0), as(u, "markerRotation", s, "markerRotation", 0, t => t * Math.PI / 180), 
                    as(u, "pitchWithMap", s, "markerPitchAlignment", 0, t => "map" === t ? 1 : 0), as(u, "rotateWithMap", s, "markerRotationAlignment", 0, t => "map" === t ? 1 : 0), 
                    u.texture = c ? Us(t, c, !1) : null, u.texSize = c ? [ c.width, c.height ] : [ 0, 0 ], 
                    e.generateBuffers(t, {
                        excludeElementsInVAO: !0
                    });
                    const f = new n.reshader.Material(u), d = new n.reshader.Mesh(e, f, {
                        disableVAO: !0,
                        transparent: !0,
                        castShadow: !1,
                        picking: !0
                    }), p = {};
                    return a && (p.ENABLE_COLLISION = 1), e.data.aMarkerWidth && (p.HAS_MARKER_WIDTH = 1), 
                    e.data.aMarkerHeight && (p.HAS_MARKER_HEIGHT = 1), e.data.aColorOpacity && (p.HAS_OPACITY = 1), 
                    e.data.aMarkerDx && (p.HAS_MARKER_DX = 1), e.data.aMarkerDy && (p.HAS_MARKER_DY = 1), 
                    e.data.aPitchAlign && (p.HAS_PITCH_ALIGN = 1), e.data.aRotationAlign && (p.HAS_ROTATION_ALIGN = 1), 
                    e.data.aRotation && (p.HAS_ROTATION = 1), e.data.aPadOffsetX && (p.HAS_PAD_OFFSET = 1), 
                    d.setDefines(p), d.setLocalTransform(i), d.properties.symbolIndex = e.properties.symbolIndex, 
                    d;
                }(this.regl, a, e, 0, c, u.icon, o.options.collision, !s, this.isEnableUniquePlacement());
                t && (delete t.geometry.properties.glyphAtlas, f.push(t));
            } else if (this.bs(a)) {
                const t = jo.call(this, this.regl, a, e, h, c, u.text, o.options.collision, !s, this.isEnableUniquePlacement());
                t.length && (t.forEach(t => {
                    delete t.geometry.properties.iconAtlas;
                }), f.push(...t));
            }
            return "line" === h.markerPlacement && this.As(a, r), "line" !== h.markerPlacement && "line" !== h.textPlacement || f.forEach(t => t.properties.isLinePlacement = !0), 
            this.ws(a), f;
        }
        As(t, e) {
            const {collideIds: n} = t.properties, i = new Uint16Array(n.length);
            if (this.xs(t)) {
                let r = 0;
                for (let t = 0; t < n.length; t += 4) i.fill(r++, t, t + 4);
                t.properties.collideIds = i, t.properties.uniqueCollideIds = ms(i), e.markerCollideMap = {
                    old: n,
                    new: i
                };
            } else if (this.bs(t)) {
                const {collideIds: n, aCount: i} = t.properties;
                if (!i) return;
                if (e.markerCollideMap) {
                    const {markerCollideMap: r} = e;
                    let s = r.new[r.new.length - 1], o = 0, a = n[0], l = e.markerCollideMap.old.indexOf(a), h = i[0];
                    for (let t = 0; t < n.length; ) {
                        const r = n[t];
                        a !== r && (a = r, l = e.markerCollideMap.old.indexOf(a), o = 0);
                        const c = -1 === l ? ++s : e.markerCollideMap.new[l + 4 * o], u = t + 4 * h;
                        n.fill(c, t, u), t += 4 * h, o++, u < n.length && (h = i[u]);
                    }
                    t.properties.uniqueCollideIds = ms(n);
                } else {
                    let e = 0, r = i[0];
                    for (let t = 0; t < n.length; ) {
                        const s = t + 4 * r;
                        n.fill(e++, t, s), t += 4 * r, s < n.length && (r = i[s]);
                    }
                    t.properties.uniqueCollideIds = ms(n);
                }
            }
        }
        addMesh(t) {
            if (this.Br() && t.length > 0) {
                const e = new Zs(t);
                e.properties.uniqueCollideIds = t[0].geometry.properties.uniqueCollideIds, e.properties.meshKey = t[0].properties.meshKey, 
                e.properties.level = t[0].properties.level, this.gs.push(e);
            }
            for (let e = 0; e < t.length; e++) {
                if (!this.isMeshIterable(t[e])) continue;
                const n = t[e].geometry, {symbolIndex: i} = n.properties;
                ps(this.getSymbolDef(i)) && la.call(this, this.getMap(), n);
            }
            const e = this.getMap().getZoom();
            for (let n = 0; n < t.length; n++) {
                if (!this.isMeshIterable(t[n])) continue;
                const i = t[n].geometry, {symbolIndex: r} = i.properties, s = this.getSymbolDef(r), o = this.getFnTypeConfig(r);
                _s(this.regl, s, 0 === r.type ? o.icon : o.text, t[n], e);
                const {aMarkerWidth: a, aMarkerHeight: l, aPadOffsetX: h, aPadOffsetY: c} = i.properties;
                a && a.dirty && (i.updateData("aMarkerWidth", a), a.dirty = !1), l && l.dirty && (i.updateData("aMarkerHeight", l), 
                l.dirty = !1), h && h.dirty && (i.updateData("aPadOffsetX", h), h.dirty = !1), c && c.dirty && (i.updateData("aPadOffsetY", c), 
                c.dirty = !1);
            }
            super.addMesh(...arguments);
        }
        updateCollision(t) {
            if (!this.Br()) return;
            super.updateCollision(t);
            const e = this.scene.getMeshes();
            e && e.length ? (this._s(t.timestamp), this.gs = [], this.wr()) : this.wr();
        }
        callCurrentTileShader(t, e) {
            this.shader.filter = e.sceneFilter ? [ this.ds, e.sceneFilter ] : this.ds, this.renderer.render(this.shader, t, this.scene, this.getRenderFBO(e)), 
            this.Ms.filter = e.sceneFilter ? [ this.ys, e.sceneFilter ] : this.ys, this.renderer.render(this.Ms, t, this.scene, this.getRenderFBO(e));
        }
        callBackgroundTileShader(t, e) {
            this.shader.filter = e.sceneFilter ? [ this.ps, e.sceneFilter ] : this.ps, this.renderer.render(this.shader, t, this.scene, this.getRenderFBO(e)), 
            this.Ms.filter = e.sceneFilter ? [ this.ms, e.sceneFilter ] : this.ms, this.renderer.render(this.Ms, t, this.scene, this.getRenderFBO(e));
        }
        isMeshIterable(t) {
            return t && t.geometry && !t.geometry.properties.isEmpty && t.material && !t.material.get("isHalo") && this.isMeshVisible(t) && !(this.shouldIgnoreBackground() && !this.layer.getRenderer().isForeground(t));
        }
        _s() {
            if (!this.Br()) return;
            let t = this.gs;
            t && t.length && this.Ss(t);
        }
        ks(t, e, n, i) {
            return this.updateBoxCollisionFading(!0, t, e, n, i);
        }
        isEnableUniquePlacement() {
            return this.isEnableCollision() && !0 === this.sceneConfig.uniquePlacement;
        }
        Ss(t) {
            const e = this.layer.getRenderer();
            t = t.sort(ma);
            for (let n = 0; n < t.length; n++) {
                const i = t[n];
                if (!i || !i.meshes.length) continue;
                let r = !1;
                if (1 === i.meshes.length) r = this.isMeshIterable(i.meshes[0]); else for (let t = 0; t < i.meshes.length; t++) if (this.isMeshIterable(i.meshes[t])) {
                    r = !0;
                    break;
                }
                if (!r) continue;
                const s = e.isForeground(i.meshes[0]);
                if (this.shouldIgnoreBackground() && !s) continue;
                const o = i.properties.meshKey;
                this.startMeshCollision(i), this.Ps(i), this.forEachBox(i, this.ks), this.Ts(i), 
                this.endMeshCollision(o);
                for (let t = 0; t < i.meshes.length; t++) this.Os(i.meshes[t]);
            }
        }
        Os(t) {
            const e = t && t.geometry && t.geometry.properties.aOpacity;
            e && e.dirty && (t.geometry.updateData("aOpacity", e), e.dirty = !1);
        }
        forEachBox(t, e) {
            const n = t.properties.uniqueCollideIds;
            if (!n) return;
            const i = {
                boxIndex: 0
            }, r = n.length;
            for (let s = 0; s < r; s++) this.Fs(t, n[s], e, i);
        }
        Fs(t, e, i, r) {
            const s = this.getMap(), {collideBoxIndex: o} = t.meshes[0].geometry.properties;
            if (!(o && o[e])) return !1;
            const a = n.mat4.multiply(da, s.projViewMatrix, t.meshes[0].localTransform);
            let l, h = !1;
            const c = t.meshes;
            let u = 0;
            for (let t = 0; t < c.length; t++) {
                if (!this.isMeshIterable(c[t])) continue;
                const {collideBoxIndex: n} = c[t].geometry.properties;
                n[e] && u++;
            }
            if (!u) return !1;
            l = this.ls(u);
            let f = 0;
            for (let t = 0; t < c.length; t++) {
                const n = c[t];
                if (!this.isMeshIterable(n)) continue;
                h = !0;
                const {elements: i, aCount: r, collideBoxIndex: s} = c[t].geometry.properties, o = s[e];
                if (!o) continue;
                const [a, u, d] = o;
                let p = 1;
                r && (p = r[i[a]]);
                const y = a + 0 * p * 6;
                l[f].mesh = c[t], l[f].start = y, l[f].end = u, l[f].boxCount = d, l[f].allElements = i, 
                f++;
            }
            if (!h) return !1;
            return i.call(this, t, l, a, r.boxIndex++) && this.Is(t, e), !0;
        }
        Ps(t) {
            const e = t.meshes;
            for (let t = 0; t < e.length; t++) {
                const n = e[t], i = n && n.geometry;
                i && (i.properties.visElemts.count = 0);
            }
        }
        Is(t, e) {
            const n = t.meshes;
            for (let t = 0; t < n.length; t++) {
                const i = n[t];
                if (i.properties.isHalo) continue;
                const r = i && i.geometry;
                if (!r || r.properties.isEmpty) continue;
                const {collideBoxIndex: s, elements: o, visElemts: a} = r.properties, l = s[e];
                if (!l) continue;
                const [h, c] = l;
                let u = a.count;
                for (let t = h; t < c; t++) a[u++] = o[t];
                a.count = u;
            }
        }
        Ts(t) {
            const e = t.meshes;
            for (let t = 0; t < e.length; t++) {
                const n = e[t], i = n && n.geometry;
                if (!i) continue;
                const {visElemts: r} = i.properties;
                i.setElements(r, r.count);
            }
        }
        isBoxCollides(t, e, n, i, r, s) {
            if (this.bs(t.geometry)) return $o.call(this, 0, t, e, n, i, r, s);
            if (t.geometry.properties.isEmpty) return pa;
            const o = this.getMap(), {boxes: a, collision: l} = this.as(t, i);
            let h = 0, c = 0, u = 0;
            for (let n = i; n < r; n += 6) {
                const i = a[u] = a[u] || [];
                u++;
                const r = Fo.call(this, i, t, e[n], s, o);
                if (!h) {
                    const t = this.isCollides(r);
                    1 === t ? h = 1 : -1 === t && c++;
                }
            }
            return c === n && (h = -1), l.collides = h, l;
        }
        deleteMesh(t, e) {
            t && (t instanceof Zs && (t = t.meshes), e && (Array.isArray(t) ? t.forEach(t => {
                t && t.material && delete t.material.uniforms.texture;
            }) : t.material && delete t.material.uniforms.texture), super.deleteMesh(t, e));
        }
        isBloom(t) {
            const e = t && t.material && !ss(t.material.get("markerOpacity")), n = this.getSymbol(t.properties.symbolIndex);
            return !!(e ? n.markerBloom : n.textBloom);
        }
        init() {
            const t = this.regl, e = this.canvas;
            this.renderer = new n.reshader.Renderer(t);
            const i = {
                x: 0,
                y: 0,
                width: () => e ? e.width : 1,
                height: () => e ? e.height : 1
            };
            this.shader = new n.reshader.MeshShader({
                vert: ao,
                frag: "#define SHADER_NAME MARKER\nprecision mediump float;\nuniform sampler2D texture;\nuniform lowp float markerOpacity;\nuniform lowp float blendSrcIsOne;\nvarying vec2 vTexCoord;\nvarying float vOpacity;\nvoid main() {\n  gl_FragColor = texture2D(texture, vTexCoord) * markerOpacity * vOpacity;\n  if(blendSrcIsOne == 1.) {\n    gl_FragColor *= gl_FragColor.a;\n  }\n}",
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        return n.mat4.multiply([], e.projViewMatrix, e.modelMatrix);
                    }
                }, {
                    name: "zoomScale",
                    type: "function",
                    fn: function(t, e) {
                        return e.tileResolution / e.resolution;
                    }
                } ],
                extraCommandProps: {
                    viewport: i,
                    blend: {
                        enable: !0,
                        func: this.getBlendFunc(),
                        equation: "add"
                    },
                    depth: {
                        enable: !0,
                        range: () => this.sceneConfig.depthRange || [ 0, 1 ],
                        func: () => this.sceneConfig.depthFunc || "always",
                        mask: !1
                    },
                    polygonOffset: {
                        enable: !0,
                        offset: this.getPolygonOffset()
                    }
                }
            });
            const {uniforms: r, extraCommandProps: s} = Wo.call(this, this.layer, this.sceneConfig), o = this.vs || {};
            if (this.Ms = new n.reshader.MeshShader({
                vert: ta,
                frag: ea,
                uniforms: r,
                extraCommandProps: s,
                defines: o
            }), this.pickingFBO) {
                const t = new n.reshader.FBORayPicking(this.renderer, {
                    vert: "#define PICKING_MODE 1\n" + ao,
                    uniforms: [ {
                        name: "projViewModelMatrix",
                        type: "function",
                        fn: function(t, e) {
                            return n.mat4.multiply([], e.projViewMatrix, e.modelMatrix);
                        }
                    }, {
                        name: "zoomScale",
                        type: "function",
                        fn: function(t, e) {
                            return e.tileResolution / e.resolution;
                        }
                    } ],
                    extraCommandProps: {
                        viewport: this.pickingViewport
                    }
                }, this.pickingFBO);
                t.filter = t => !!t.geometry.properties.iconAtlas;
                const e = new n.reshader.FBORayPicking(this.renderer, {
                    vert: "#define PICKING_MODE 1\n" + ta,
                    uniforms: r,
                    extraCommandProps: {
                        viewport: this.pickingViewport
                    }
                }, this.pickingFBO);
                e.filter = t => !!t.geometry.properties.glyphAtlas, this.picking = [ t, e ];
            }
        }
        getUniformValues(t) {
            const e = t.projViewMatrix, n = t.cameraToCenterDistance, i = [ t.width, t.height ];
            return {
                layerScale: this.layer.options.styleScale || 1,
                mapPitch: t.getPitch() * Math.PI / 180,
                mapRotation: t.getBearing() * Math.PI / 180,
                projViewMatrix: e,
                cameraToCenterDistance: n,
                canvasSize: i,
                iconSize: [ 24, 24 ],
                resolution: t.getResolution(),
                glyphSize: 24,
                gammaScale: 1,
                blendSrcIsOne: +!("one" !== this.sceneConfig.blendSrc)
            };
        }
        getUniqueEntryKey(t, e) {
            if (!this.bs(t.geometry)) return null;
            const {elements: n} = t.geometry.properties;
            return Zo(t, n[e]);
        }
        xs(t) {
            const {symbolIndex: e} = t.properties;
            return 0 === e.type;
        }
        bs(t) {
            const {symbolIndex: e} = t.properties;
            return 1 === e.type;
        }
    }
    function ma(t, e) {
        return t.properties.level - e.properties.level || t.properties.meshKey - e.properties.meshKey;
    }
    const ga = [], va = [], xa = [];
    function ba(t, e, i, r, s, o, a, l) {
        const {aGlyphOffset: h, aSegment: c, aTextDx: u, aTextDy: f, symbolIndex: d} = e.geometry.properties, p = this.getSymbol(d), y = u ? u[s] : p.textDx, m = f ? f[s] : p.textDy, g = n.vec2.set(xa, y || 0, m || 0), v = n.vec2.set(ga, h[2 * s], h[2 * s + 1]), x = n.vec3.set(va, c[3 * s], c[3 * s + 1], c[3 * s + 2]);
        return function(t, e, n, i, r, s, o, a, l, h, c, u) {
            const f = i[0] * h, d = c ? f - r : f + r;
            let p = d > 0 ? 1 : -1, y = 0;
            c && (p *= -1, y = Math.PI), p < 0 && (y += Math.PI);
            const m = a + l, g = Math.abs(d);
            let v = p > 0 ? o : o + 1, x = z.convert(n), b = z.convert(n), w = 0, A = 0;
            for (;w + A <= g; ) {
                if (v += p, v < a || v >= m) return null;
                b.x = x.x, b.y = x.y, x.x = e[3 * v], x.y = e[3 * v + 1], w += A, A = b.dist(x) / u;
            }
            const _ = (g - w) / A, M = x.sub(b), S = M.mult(_).s(b);
            S.s(M.P().T().A(s * p));
            const k = y + Math.atan2(x.y - b.y, x.x - b.x);
            return t[0] = (S.x - n[0]) / u, t[1] = (S.y - n[1]) / u, t[2] = k, t;
        }(t, r, o, v, g[0], g[1], x[0], x[1], x[2], i / 24, l, a);
    }
    const wa = [], Aa = [];
    function _a(t, e, i, r, s, o, a, l, h, c, u) {
        const {aVertical: f} = i.geometry.properties, d = f[o];
        let p, y, m = ba.call(this, wa, i, r, s, o, l, h, !1);
        if (!m) return null;
        if (n.vec3.copy(t, m), m = ba.call(this, Aa, i, r, s, a, l, h, !1), !m) return null;
        if (n.vec3.copy(e, m), u && (n.vec2.transformMat2(wa, wa, u), n.vec2.transformMat2(Aa, Aa, u)), 
        d) {
            const t = Math.abs(Aa[1] - wa[1]), e = Math.abs(Aa[0] - wa[0]) * c;
            y = wa[0] > Aa[0] ? 1 : 0, t > e ? (p = 1, y = wa[1] < Aa[1] ? 0 : 1) : p = 0;
        } else p = 0, y = wa[0] > Aa[0] ? 1 : 0;
        return 2 * y + p;
    }
    var Ma = "#define SHADER_NAME TEXT_LINE\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec2 aOffset;\n#ifdef ENABLE_COLLISION\nattribute float aOpacity;\n#endif\n#ifdef HAS_OPACITY\nattribute float aColorOpacity;\n#endif\n#ifdef HAS_TEXT_SIZE\nattribute float aTextSize;\n#else\nuniform float textSize;\n#endif\n#ifdef HAS_TEXT_DX\nattribute float aTextDx;\n#else\nuniform float textDx;\n#endif\n#ifdef HAS_TEXT_DY\nattribute float aTextDy;\n#else\nuniform float textDy;\n#endif\n#if defined(HAS_PITCH_ALIGN)\nattribute float aPitchAlign;\n#else\nuniform float pitchWithMap;\n#endif\nuniform float zoomScale;\nuniform float cameraToCenterDistance;\nuniform mat4 projViewModelMatrix;\nuniform float textPerspectiveRatio;\nuniform float mapPitch;\nuniform vec2 texSize;\nuniform vec2 canvasSize;\nuniform float tileRatio;\nuniform float layerScale;\n#ifndef PICKING_MODE\nvarying vec2 vTexCoord;\nvarying float vGammaScale;\nvarying float vSize;\nvarying float vOpacity;\n#ifdef HAS_TEXT_FILL\nattribute vec4 aTextFill;\nvarying vec4 vTextFill;\n#endif\n#ifdef HAS_TEXT_HALO_FILL\nattribute vec4 aTextHaloFill;\nvarying vec4 vTextHaloFill;\n#endif\n#ifdef HAS_TEXT_HALO_RADIUS\nattribute float aTextHaloRadius;\nvarying float vTextHaloRadius;\n#endif\n#ifdef HAS_TEXT_HALO_OPACITY\nattribute float aTextHaloOpacity;\nvarying float vTextHaloOpacity;\n#endif\n#else\n#include <fbo_picking_vert>\n#endif\nvoid main() {\n  vec3 c = aPosition;\n#ifdef HAS_TEXT_DX\nfloat d = aTextDx;\n#else\nfloat d = textDx;\n#endif\n#ifdef HAS_TEXT_DY\nfloat e = aTextDy;\n#else\nfloat e = textDy;\n#endif\n#ifdef HAS_TEXT_SIZE\nfloat f = aTextSize * layerScale;\n#else\nfloat f = textSize * layerScale;\n#endif\n#ifdef HAS_PITCH_ALIGN\nfloat h = aPitchAlign;\n#else\nfloat h = pitchWithMap;\n#endif\ngl_Position = projViewModelMatrix * vec4(c, 1.);\n  float i = gl_Position.w;\n  float j = i / cameraToCenterDistance;\n  float k = (1. - cameraToCenterDistance / i) * textPerspectiveRatio;\n  float l = clamp(.5 + .5 * (1. - k), .0, 4.);\n  vec2 m = aOffset / 10.0;\n  vec2 n = aTexCoord;\n  if(h == 1.) {\n    gl_Position = projViewModelMatrix * vec4(c + vec3(m, .0) * tileRatio / zoomScale * j * l, 1.);\n  } else {\n    gl_Position.xy += m * 2. / canvasSize * l * i;\n  }\n  gl_Position.xy += vec2(d, -e) * 2. / canvasSize * i;\n#ifndef PICKING_MODE\nif(h == 1.) {\n    vGammaScale = j + mapPitch / 4.;\n  } else {\n    vGammaScale = mix(1., j, textPerspectiveRatio);\n  }\n  vGammaScale = clamp(vGammaScale, .0, 1.);\n  vTexCoord = n / texSize;\n  vSize = f;\n#ifdef ENABLE_COLLISION\nvOpacity = aOpacity / 255.;\n#else\nvOpacity = 1.;\n#endif\n#ifdef HAS_OPACITY\nvOpacity *= aColorOpacity / 255.;\n#endif\n#ifdef HAS_TEXT_FILL\nvTextFill = aTextFill / 255.;\n#endif\n#ifdef HAS_TEXT_HALO_FILL\nvTextHaloFill = aTextHaloFill / 255.;\n#endif\n#ifdef HAS_TEXT_HALO_RADIUS\nvTextHaloRadius = aTextHaloRadius;\n#endif\n#ifdef HAS_TEXT_HALO_OPACITY\nvTextHaloOpacity = aTextHaloOpacity;\n#endif\n#else\n#ifdef ENABLE_COLLISION\nbool o = aOpacity == 255.;\n#else\nbool o = true;\n#endif\nfbo_picking_setData(gl_Position.w, o);\n#endif\n}";
    const Sa = function(t) {
        const e = this.layer.getRenderer(), n = this.getSymbol(t.properties.symbolIndex);
        return !this.cs(t) && e.isForeground(t) && "line" !== n.textPlacement;
    }, ka = function(t) {
        const e = this.layer.getRenderer(), n = this.getSymbol(t.properties.symbolIndex);
        return !this.cs(t) && !e.isForeground(t) && "line" !== n.textPlacement;
    }, Pa = function(t) {
        const e = this.layer.getRenderer(), n = this.getSymbol(t.properties.symbolIndex);
        return !this.cs(t) && e.isForeground(t) && "line" === n.textPlacement;
    }, Ta = function(t) {
        const e = this.layer.getRenderer(), n = this.getSymbol(t.properties.symbolIndex);
        return !this.cs(t) && !e.isForeground(t) && "line" === n.textPlacement;
    }, Oa = [], Fa = [], Ia = [], Ca = [], Ea = [], Ha = [], Da = [], La = [], Ra = [], Na = [ 1, -1 ], za = new Int16Array(2), Va = [], ja = [];
    class Ua extends ro {
        constructor(t, e, n, i, r) {
            super(t, e, n, i, r), this.propAllowOverlap = "textAllowOverlap", this.propIgnorePlacement = "textIgnorePlacement", 
            this.colorCache = {}, this.Cs = Sa.bind(this), this.Es = ka.bind(this), this.Hs = Pa.bind(this), 
            this.Ds = Ta.bind(this), this.isLabelCollides = $o.bind(this), this.Ls();
        }
        Ls() {
            this.Rs = [];
            for (let t = 0; t < this.symbolDef.length; t++) {
                const e = this.symbolDef[t];
                _(e.textName) && (this.Rs[t] = M(e.textName));
            }
        }
        updateSymbol(...t) {
            const e = super.updateSymbol(...t);
            return this.Ls(), e;
        }
        shouldDeleteMeshOnUpdateSymbol(t) {
            if (!Array.isArray(t)) return (0 === t.textHaloRadius || 0 === this.symbolDef[0].textHaloRadius) && t.textHaloRadius !== this.symbolDef[0].textHaloRadius;
            for (let e = 0; e < t.length; e++) if (t[e] && (0 === t[e].textHaloRadius || 0 === this.symbolDef[e].textHaloRadius) && t[e].textHaloRadius !== this.symbolDef[e].textHaloRadius) return !0;
            return !1;
        }
        createFnTypeConfig(t, e) {
            return Bo(t, e);
        }
        isBloom(t) {
            return !!this.getSymbol(t.properties.symbolIndex).textBloom;
        }
        createGeometry(t, e, n) {
            const i = t;
            if (!i.glyphAtlas) return null;
            const r = super.createGeometry(i);
            if (!r || !r.geometry) return null;
            const {geometry: s} = r;
            return s.properties.glyphAtlas && this.drawDebugAtlas(s.properties.glyphAtlas), 
            s && i.lineVertex && (s.properties.line = i.lineVertex, s.properties.line.id = n), 
            r;
        }
        createMesh(t, e) {
            const n = this.isEnableCollision(), i = this.isEnableUniquePlacement(), {geometry: r, symbolIndex: s} = t;
            r.properties.symbolIndex = s;
            const o = this.getSymbol(s), a = this.getSymbolDef(s), l = this.getFnTypeConfig(s), h = jo.call(this, this.regl, r, e, a, o, l, this.layer.options.collision, !n, i);
            if (h.length) {
                "line" === o.textPlacement ? this.Ns = !0 : this.zs = !0;
            }
            return h;
        }
        updateCollision(t) {
            super.updateCollision(t);
            const e = this.scene.getMeshes();
            e && e.length ? (this.Vs = {}, this.js(t.timestamp), this.wr()) : this.wr();
        }
        callCurrentTileShader(t, e) {
            this.shader.filter = e.sceneFilter ? [ this.Cs, e.sceneFilter ] : this.Cs, this.renderer.render(this.shader, t, this.scene, this.getRenderFBO(e)), 
            this.Us.filter = e.sceneFilter ? [ this.Hs, e.sceneFilter ] : this.Hs, this.renderer.render(this.Us, t, this.scene, this.getRenderFBO(e));
        }
        callBackgroundTileShader(t, e) {
            this.shader.filter = e.sceneFilter ? [ this.Es, e.sceneFilter ] : this.Es, this.renderer.render(this.shader, t, this.scene, this.getRenderFBO(e)), 
            this.Us.filter = e.sceneFilter ? [ this.Ds, e.sceneFilter ] : this.Ds, this.renderer.render(this.Us, t, this.scene, this.getRenderFBO(e));
        }
        js() {
            let t = this.scene.getMeshes();
            if (!t || !t.length) return;
            const e = -this.getMap().getBearing() * Math.PI / 180, i = n.mat2.fromRotation(Ia, e), r = (t, e, n, i) => {
                const {start: r, end: s, mesh: o, allElements: a} = e[0];
                if (this.updateBoxCollisionFading(!0, o, e, n, i)) {
                    let e = t.count;
                    for (let n = r; n < s; n++) t[e++] = a[n];
                    t.count = e;
                }
            }, s = this.Br(), o = this.layer.getRenderer();
            t = t.sort(Xa);
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (!this.isMeshIterable(n)) continue;
                const a = o.isForeground(n);
                if (this.shouldIgnoreBackground() && !a) continue;
                const l = n.geometry, h = this.getSymbol(n.properties.symbolIndex);
                n.properties.textHaloRadius = ss(h.textHaloRadius) ? Vo.textHaloRadius : h.textHaloRadius;
                const c = n.properties.meshKey;
                if ("line" === h.textPlacement) {
                    if (!l.properties.line) continue;
                    s && this.startMeshCollision(n), this.Gs(n, i);
                    const {aOffset: t, aOpacity: e} = l.properties;
                    t.dirty && (l.updateData("aOffset", t), t.dirty = !1), e && e.dirty && (l.updateData("aOpacity", e), 
                    e.dirty = !1), s && this.endMeshCollision(c);
                } else if (s) {
                    this.startMeshCollision(n);
                    const {elements: t, aOpacity: e, visElemts: i} = l.properties;
                    i.count = 0, this.forEachBox(n, (t, e, n, s, o) => {
                        r(i, e, n, s);
                    }), e && e.dirty && l.updateData("aOpacity", e);
                    const s = i.count === t.length && l.count === t.length, o = !i.count && !l.count;
                    s || o || l.setElements(i, i.count), this.endMeshCollision(c);
                }
            }
        }
        isMeshIterable(t) {
            return t.isValid() && t.material && !t.material.get("isHalo") && !(this.shouldIgnoreBackground() && !this.layer.getRenderer().isForeground(t));
        }
        isMeshUniquePlaced(t) {
            if (!this.isMeshIterable(t)) return !1;
            return "line" !== this.getSymbol(t.properties.symbolIndex).textPlacement;
        }
        getUniqueEntryKey(t, e) {
            return Zo(t, e);
        }
        Gs(t, e) {
            const i = this.getMap(), r = t.geometry, s = r.properties, o = this.layer.getRenderer().isForeground(t);
            if (this.shouldIgnoreBackground() && !o) return;
            let a = s.line;
            if (!a) return;
            const l = 1 === t.material.uniforms.pitchWithMap, h = s.elements;
            if (!l) {
                const e = n.mat4.multiply(Oa, i.projViewMatrix, t.localTransform), r = new Array(a.length);
                a = this.Ws(r, a, e, i.width, i.height);
            }
            const c = this.Br(), u = r.properties.visElemts = r.properties.visElemts || new h.constructor(h.length);
            c && (u.count = 0), this.forEachBox(t, (t, n, i, r) => {
                const {start: s, end: o} = n[0];
                let f = this.Bs(t, h, s, o, a, i, l ? e : null, r);
                if (c && (f = this.updateBoxCollisionFading(f, t, n, i, r), f)) {
                    let t = u.count;
                    for (let e = s; e < o; e++) u[t++] = h[e];
                    u.count = t;
                }
            }), !c || u.count === h.length && r.count === u.count || r.setElements(u, u.count);
        }
        Ws(t, e, i, r, s) {
            const o = e.id + "-" + i.join();
            if (this.Vs[o]) return this.Vs[o];
            const a = function(t, e, i, r, s) {
                const o = [];
                for (let a = 0; a < e.length; a += 3) n.vec4.set(o, e[a], e[a + 1], e[a + 2], 1), 
                ho(o, o, i, r, s), t[a] = o[0], t[a + 1] = o[1], t[a + 2] = e[a + 2];
                return t;
            }(t, e, i, r, s);
            return this.Vs[o] = a, a;
        }
        forEachBox(t, e) {
            const i = this.getMap(), r = n.mat4.multiply(Oa, i.projViewMatrix, t.localTransform), {collideIds: s, aCount: o, features: a, elements: l} = t.geometry.properties, h = s, c = this.isEnableUniquePlacement(), u = this.ls(1);
            u[0].allElements = l, u[0].mesh = t;
            let f = 0, d = l[0], p = 0, y = h[d];
            for (let n = 0; n <= l.length; n += 6) if (d = l[n], h[d] !== y || n === l.length) {
                const i = a[y] && a[y].feature;
                if (c && this.isMeshUniquePlaced(t) && i && !i.label) {
                    const e = i.properties || {};
                    e.$layer = i.layer, e.$type = i.type;
                    const r = Wa(this.Rs[n] ? this.Rs[n](null, e) : this.getSymbol(t.properties.symbolIndex).textName, e);
                    delete e.$layer, delete e.$type, i.label = r;
                }
                const s = n, m = o[l[p]];
                for (let n = p; n < s; n += 6 * m) u[0].start = n, u[0].end = n + 6 * m, u[0].boxCount = m, 
                e.call(this, t, u, r, f++);
                y = h[d], p = n;
            }
        }
        Bs(t, e, i, r, s, o, a) {
            const l = this.Br(), h = this.getMap(), c = t.geometry, u = c.desc.positionSize, {aShape: f, aOffset: d, aAnchor: p} = c.properties, y = c.properties.aTextSize, m = !a, g = e[i] * u;
            let v = n.vec3.set(Ca, p[g], p[g + 1], 2 === u ? 0 : p[g + 2]);
            const x = ho(Ea, v, o, h.width, h.height);
            if (n.vec4.set(Ha, x[0], x[1], x[0], x[1]), h.isOffscreen(Ha)) return l || Ba(d, e, i, r), 
            !1;
            m && (v = x);
            const b = m ? 1 : c.properties.tileExtent / this.layer.options.tileSize[0];
            let w = !0;
            const A = e[i], _ = e[r - 1], M = y ? y[A] : t.properties.textSize, S = this.Xs(t, M, s, A, _, v, b, a);
            if (null === S) return Ba(d, e, i, r), !1;
            const k = _ - A <= 3, P = t.material.uniforms, T = 1 === P.pitchWithMap, O = Math.floor(S / 2), F = S % 2;
            for (let o = i; o < r; o += 6) {
                const a = e[o];
                let h;
                if (h = O || o !== i || k ? O || o !== r - 6 || k ? ba.call(this, Fa, t, M, s, a, v, b, O) : ja : Va, 
                !h) {
                    w = !1, l || Ba(d, e, i, r);
                    break;
                }
                let c = h[2];
                F && (c -= Math.PI / 2);
                const u = xo(Da, c, 0, P.rotateWithMap, P.pitchWithMap);
                for (let t = 0; t < 4; t++) n.vec2.set(La, f[2 * (a + t)] / 10, f[2 * (a + t) + 1] / 10), 
                n.vec2.scale(La, La, M / 24), n.vec2.transformMat2(La, La, u), T ? (n.vec2.multiply(La, La, Na), 
                n.vec2.add(Ra, La, h)) : (n.vec2.multiply(Ra, h, Na), n.vec2.add(Ra, La, Ra)), za[0] = 10 * Ra[0], 
                za[1] = 10 * Ra[1], d[2 * (a + t)] === za[0] && d[2 * (a + t) + 1] === za[1] || (d.dirty = !0, 
                d[2 * (a + t)] = za[0], d[2 * (a + t) + 1] = za[1]);
            }
            return w;
        }
        Xs(t, e, n, i, r, s, o, a) {
            const l = r - i <= 3, h = this.getMap();
            return l ? 0 : _a.call(this, Va, ja, t, e, n, i, r, s, o, h.width / h.height, a);
        }
        isBoxCollides(t, e, n, i, r, s) {
            return this.isLabelCollides(0, t, e, n, i, r, s);
        }
        deleteMesh(t, e) {
            t && (e && (Array.isArray(t) ? t.forEach(t => {
                t && t.material && delete t.material.uniforms.texture;
            }) : t.material && delete t.material.uniforms.texture), super.deleteMesh(t, e));
        }
        delete() {
            super.delete(), this.Us.dispose(), delete this.Vs, this.qs && this.qs.dispose();
        }
        needClearStencil() {
            return !0;
        }
        init() {
            const t = this.regl;
            this.renderer = new n.reshader.Renderer(t);
            const {uniforms: e, extraCommandProps: i} = Wo.call(this, this.layer, this.sceneConfig);
            this.shader = new n.reshader.MeshShader({
                vert: ta,
                frag: ea,
                uniforms: e,
                extraCommandProps: i
            });
            let r = i;
            if (this.layer.getRenderer().isEnableWorkAround("win-intel-gpu-crash") && (r = ns({}, i), 
            r.stencil = ns({}, i.stencil), r.stencil.enable = !0), this.Us = new n.reshader.MeshShader({
                vert: Ma,
                frag: ea,
                uniforms: e,
                extraCommandProps: r
            }), this.pickingFBO) {
                const t = new n.reshader.FBORayPicking(this.renderer, {
                    vert: "#define PICKING_MODE 1\n" + ta,
                    uniforms: e,
                    extraCommandProps: {
                        viewport: this.pickingViewport
                    }
                }, this.pickingFBO);
                t.filter = t => {
                    const e = t.properties.symbolIndex;
                    return "line" !== this.getSymbol(e).textPlacement;
                };
                const i = new n.reshader.FBORayPicking(this.renderer, {
                    vert: "#define PICKING_MODE 1\n" + Ma,
                    uniforms: e,
                    extraCommandProps: {
                        viewport: this.pickingViewport
                    }
                }, this.pickingFBO);
                i.filter = t => {
                    const e = t.properties.symbolIndex;
                    return "line" === this.getSymbol(e).textPlacement;
                }, this.picking = [ t, i ];
            }
        }
        getUniformValues(t) {
            const e = t.projViewMatrix, n = t.cameraToCenterDistance, i = [ t.width, t.height ];
            return {
                layerScale: this.layer.options.styleScale || 1,
                mapPitch: t.getPitch() * Math.PI / 180,
                mapRotation: t.getBearing() * Math.PI / 180,
                projViewMatrix: e,
                viewMatrix: t.viewMatrix,
                cameraToCenterDistance: n,
                canvasSize: i,
                glyphSize: 24,
                gammaScale: 1 * (this.layer.options.textGamma || 1),
                resolution: t.getResolution()
            };
        }
    }
    const Ga = /\{([\w_]+)\}/g;
    function Wa(t, e) {
        return t.replace(Ga, (function(t, n) {
            if (!e) return "";
            const i = e[n];
            return null == i ? "" : Array.isArray(i) ? i.join() : i;
        }));
    }
    function Ba(t, e, n, i) {
        for (let r = n; r < i; r += 6) {
            const n = e[r];
            for (let e = 0; e < 4; e++) (t[2 * (n + e)] || t[2 * (n + e) + 1]) && (t.dirty = !0, 
            t[2 * (n + e)] = 0, t[2 * (n + e) + 1] = 0);
        }
    }
    function Xa(t, e) {
        const n = t.uniforms.level - e.uniforms.level;
        return 0 === n ? t.properties.meshKey - e.properties.meshKey : n;
    }
    var qa = "#define SHADER_NAME NATIVE_POINT\n#include <gl2_vert>\nattribute vec3 aPosition;\nuniform mat4 projViewModelMatrix;\nuniform float markerSize;\n#ifdef PICKING_MODE\n#include <fbo_picking_vert>\n#endif\nvoid main() {\n  gl_Position = projViewModelMatrix * vec4(aPosition, 1.);\n  gl_PointSize = markerSize;\n#ifdef PICKING_MODE\nfbo_picking_setData(gl_Position.w, true);\n#endif\n}";
    const Ja = {
        markerFill: [ 0, 0, 0 ],
        markerOpacity: 1,
        markerSize: 10
    };
    class Ya extends Vs {
        getPrimitive() {
            return "points";
        }
        createMesh(t, e) {
            const {geometry: i, symbolIndex: r, ref: s} = t, o = this.getSymbol(r);
            void 0 === s && i.generateBuffers(this.regl);
            const a = {};
            as(a, "markerOpacity", o, "markerOpacity", 1), as(a, "markerSize", o, "markerSize", 10), 
            as(a, "markerFill", o, "markerFill", "#000", cs(this.colorCache, 3));
            const l = new n.reshader.Material(a, Ja);
            l.createDefines = () => "square" !== o.markerType ? {
                USE_CIRCLE: 1
            } : null, l.appendDefines = t => ("square" !== o.markerType && (t.USE_CIRCLE = 1), 
            t);
            const h = new n.reshader.Mesh(i, l, {
                castShadow: !1,
                picking: !0
            });
            return h.setLocalTransform(e), h.properties.symbolIndex = r, h;
        }
        init() {
            const t = this.regl;
            this.renderer = new n.reshader.Renderer(t);
            const e = {
                x: 0,
                y: 0,
                width: () => this.canvas ? this.canvas.width : 1,
                height: () => this.canvas ? this.canvas.height : 1
            }, i = this.layer.getRenderer().isEnableTileStencil && this.layer.getRenderer().isEnableTileStencil(), r = {
                vert: qa,
                frag: "#define SHADER_NAME NATIVE_POINT\nprecision mediump float;\n#include <gl2_frag>\n#ifdef USE_CIRCLE\n#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#define STANDARD_DERIVATIVES_ENABLED 1\n#extension GL_OES_standard_derivatives : enable\n#endif\n#else\n#define STANDARD_DERIVATIVES_ENABLED 1\n#endif\n#endif\nuniform vec3 markerFill;\nuniform float markerOpacity;\nvoid main() {\n  float c = 1.;\n#ifdef USE_CIRCLE\nfloat r = .0, d = .0;\n  vec2 e = 2. * gl_PointCoord - 1.;\n  r = dot(e, e);\n  if(r > 1.) {\n    discard;\n  }\n#ifdef STANDARD_DERIVATIVES_ENABLED\nd = fwidth(r);\n  c = 1. - smoothstep(1. - d, 1. + d, r);\n#endif\n#endif\nglFragColor = vec4(markerFill, 1.) * markerOpacity * c;\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                defines: null,
                extraCommandProps: {
                    viewport: e,
                    stencil: {
                        enable: !0,
                        func: {
                            cmp: () => i ? "=" : "<=",
                            ref: (t, e) => i ? e.stencilRef : e.level,
                            mask: 255
                        },
                        op: {
                            fail: "keep",
                            zfail: "keep",
                            zpass: "replace"
                        }
                    },
                    depth: {
                        enable: !0,
                        mask: !1,
                        range: this.sceneConfig.depthRange || [ 0, 1 ],
                        func: this.sceneConfig.depthFunc || "always"
                    },
                    blend: {
                        enable: !0,
                        func: this.getBlendFunc(),
                        equation: "add"
                    }
                }
            };
            this.shader = new n.reshader.MeshShader(r), this.shader.version = 300, this.pickingFBO && (this.picking = [ new n.reshader.FBORayPicking(this.renderer, {
                vert: "#define PICKING_MODE 1\n" + qa,
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            }, this.pickingFBO) ]);
        }
        getUniformValues(t) {
            return {
                projViewMatrix: t.projViewMatrix
            };
        }
    }
    var $a = "#define SHADER_NAME NATIVE_LINE\nattribute vec3 aPosition;\nuniform mat4 projViewModelMatrix;\n#ifndef PICKING_MODE\n#if defined(HAS_COLOR)\nattribute vec4 aColor;\nvarying vec4 vColor;\n#endif\n#else\n#include <fbo_picking_vert>\n#endif\nvoid main() {\n  gl_Position = projViewModelMatrix * vec4(aPosition, 1.);\n#ifndef PICKING_MODE\n#if defined(HAS_COLOR)\nvColor = aColor / 255.;\n#endif\n#else\nfbo_picking_setData(gl_Position.w, true);\n#endif\n}";
    class Za extends Vs {
        constructor(t, e, n, i, r) {
            if (super(t, e, n, i, r), this.primitive = "lines", _(this.symbolDef.lineColor)) {
                const t = e.getMap(), n = S(this.symbolDef.lineColor);
                this.colorSymbol = e => n(t.getZoom(), e);
            }
        }
        needPolygonOffset() {
            return !0;
        }
        createMesh(t, e) {
            const {geometry: i, symbolIndex: r, ref: s} = t, o = this.getSymbol(r), a = this.getMeshUniforms(i, o);
            void 0 === s && i.generateBuffers(this.regl);
            const l = new n.reshader.Material(a), h = new n.reshader.Mesh(i, l, {
                castShadow: !1,
                picking: !0
            });
            return h.setLocalTransform(e), h.properties.symbolIndex = r, h;
        }
        getMeshUniforms(t, e) {
            const n = {};
            return as(n, "lineColor", e, "lineColor", "#000", cs(this.colorCache)), as(n, "lineOpacity", e, "lineOpacity", 1), 
            n;
        }
        init() {
            const t = this.layer.getRenderer().isEnableTileStencil(), e = this.regl;
            this.renderer = new n.reshader.Renderer(e);
            const i = {
                x: 0,
                y: 0,
                width: () => this.canvas ? this.canvas.width : 1,
                height: () => this.canvas ? this.canvas.height : 1
            }, r = [ {
                name: "projViewModelMatrix",
                type: "function",
                fn: function(t, e) {
                    const i = [];
                    return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                }
            } ], s = this.sceneConfig.depthRange, o = {
                vert: $a,
                frag: "#define SHADER_NAME NATIVE_LINE\nprecision mediump float;\nuniform float lineOpacity;\nuniform vec4 lineColor;\n#if defined(HAS_COLOR)\nvarying vec4 vColor;\n#endif\nvoid main() {\n  gl_FragColor = lineColor * lineOpacity;\n#if defined(HAS_COLOR)\ngl_FragColor *= vColor;\n#endif\n}",
                uniforms: r,
                defines: null,
                extraCommandProps: {
                    viewport: i,
                    stencil: {
                        enable: !0,
                        mask: 255,
                        func: {
                            cmp: () => t ? "=" : "<=",
                            ref: (e, n) => t ? n.stencilRef : n.level,
                            mask: 255
                        },
                        op: {
                            fail: "keep",
                            zfail: "keep",
                            zpass: "replace"
                        }
                    },
                    depth: {
                        enable: !0,
                        range: s || [ 0, 1 ],
                        func: this.sceneConfig.depthFunc || "<="
                    },
                    blend: {
                        enable: !0,
                        func: this.getBlendFunc(),
                        equation: "add"
                    },
                    polygonOffset: {
                        enable: !0,
                        offset: this.getPolygonOffset()
                    }
                }
            };
            this.shader = new n.reshader.MeshShader(o), this.pickingFBO && (this.picking = [ new n.reshader.FBORayPicking(this.renderer, {
                vert: "#define PICKING_MODE 1\n" + $a,
                uniforms: r,
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            }, this.pickingFBO) ]);
        }
        getUniformValues(t) {
            return {
                projViewMatrix: t.projViewMatrix
            };
        }
        getPrimitive() {
            return "lines";
        }
    }
    const Ka = [ 1, 1, 1 ], Qa = [ 1, 1, 1, 1 ], tl = [ 0, 0 ];
    class el extends Rs {
        supportRenderMode(t) {
            return this.isAnimating() ? "fxaa" === t || "fxaaAfterTaa" === t : "taa" === t || "fxaa" === t;
        }
        isAnimating() {
            return !1;
        }
        createMesh(t, e, {tilePoint: i, tileZoom: r}) {
            if (!this.material) return this.setToRedraw(), null;
            const {geometry: s, symbolIndex: o} = t, a = new n.reshader.Mesh(s, this.material);
            if (this.sceneConfig.animation) {
                Ka[2] = .01;
                const t = [];
                n.mat4.fromScaling(t, Ka), n.mat4.multiply(t, e, t), e = t;
            }
            const l = this.getSymbolDef(o), h = this.getFnTypeConfig(o);
            xs(s, l, h);
            const c = this.getShader(), u = c.getGeometryDefines ? c.getGeometryDefines(s) : {}, f = this.getSymbol(o);
            if (s.data.aExtrude) {
                u.IS_LINE_EXTRUSION = 1;
                const {tileResolution: t, tileRatio: e} = s.properties, n = this.getMap();
                Object.defineProperty(a.uniforms, "linePixelScale", {
                    enumerable: !0,
                    get: function() {
                        return e * n.getResolution() / t;
                    }
                }), as(a.uniforms, "lineWidth", f, "lineWidth", 4), as(a.uniforms, "lineOpacity", f, "lineOpacity", 1), 
                as(a.uniforms, "lineColor", f, "lineColor", "#fff", cs(this.colorCache)), Object.defineProperty(a.uniforms, "lineHeight", {
                    enumerable: !0,
                    get: () => {
                        const t = this.dataConfig.defaultAltitude * (this.dataConfig.altitudeScale || 1);
                        return ds(t) ? t : 0;
                    }
                });
            } else as(a.uniforms, "polygonFill", f, "polygonFill", Qa, cs(this.colorCache)), 
            as(a.uniforms, "polygonOpacity", f, "polygonOpacity", 1);
            if (s.data.aColor && (u.HAS_COLOR = 1), s.data.aLineWidth && (u.HAS_LINE_WIDTH = 1), 
            s.data.aLineHeight && (u.HAS_LINE_HEIGHT = 1), s.data.aOpacity) {
                const t = s.data.aOpacity;
                for (let e = 0; e < t.length; e++) if (t[e] < 255) {
                    s.properties.hasAlpha = !0;
                    break;
                }
            }
            s.generateBuffers(this.regl), a.setDefines(u), a.setLocalTransform(e), (s.properties.maxAltitude <= 0 || a.getUniform("level") >= 3) && (a.castShadow = !1), 
            a.setUniform("maxAltitude", a.geometry.properties.maxAltitude);
            const d = this.getMap(), p = d.getGLRes(), y = this.layer.getSpatialReference && this.layer.getSpatialReference(), m = (y ? y.getResolution(r) : d.getResolution(r)) / p;
            return Object.defineProperty(a.uniforms, "uvOrigin", {
                enumerable: !0,
                get: () => {
                    const t = this.getSymbol(o).material.uvScale || [ 1, 1 ], e = this.dataConfig.dataUVScale || [ 1, 1 ], n = t[0] * i[0] * m, r = t[1] * i[1] * m;
                    return [ n / (.5 * e[0]), r / (.5 * e[1]) ];
                }
            }), Object.defineProperty(a.uniforms, "uvOffset", {
                enumerable: !0,
                get: () => {
                    const t = this.getUVOffsetAnim(), e = this.getUVOffset(t);
                    return this.material && this.material.get("noiseTexture") && (e[0] *= -1), e;
                }
            }), Object.defineProperty(a.uniforms, "hasAlpha", {
                enumerable: !0,
                get: () => {
                    const t = this.getSymbol(o);
                    return s.properties.hasAlpha || t.polygonOpacity < 1 || t.lineOpacity < 1;
                }
            }), a.properties.symbolIndex = o, a;
        }
        getUVOffsetAnim() {
            const t = this.getSymbols()[0];
            return t.material && t.material.uvOffsetAnim;
        }
        getUVOffset(t) {
            const e = this.getSymbols()[0], n = e.material && e.material.uvOffset || tl, i = this.layer.getRenderer().getFrameTimestamp(), r = [ n[0], n[1] ], s = !!e.material && e.material.noiseTexture, o = s ? 5e5 : 1e3, a = s ? 256 : 1;
            return t && t[0] && (r[0] = i * t[0] % o / o * a), t && t[1] && (r[1] = i * t[1] % o / o * a), 
            r;
        }
        needPolygonOffset() {
            return this.Js;
        }
        startFrame(...t) {
            return delete this.Js, super.startFrame(...t);
        }
        addMesh(t, e) {
            t.forEach(t => {
                this.sr(t, e);
            }), super.addMesh(...arguments);
        }
        sr(t, e) {
            if (null !== e) {
                const i = t.localTransform;
                0 === e && (e = .01), Ka[2] = e, n.mat4.fromScaling(i, Ka), n.mat4.multiply(i, t.properties.tileTransform, i), 
                t.setLocalTransform(i);
            } else t.setLocalTransform(t.properties.tileTransform);
            t.material !== this.material && t.setMaterial(this.material), t.geometry.properties.maxAltitude <= 0 && (this.Js = !0), 
            this.getSymbol(t.properties.symbolIndex).ssr ? t.ssr = 1 : t.ssr = 0;
        }
        deleteMesh(t, e) {
            if (t) if (this.scene.removeMesh(t), Array.isArray(t)) for (let n = 0; n < t.length; n++) e || t[n].geometry.dispose(), 
            t[n].dispose(); else e || t.geometry.dispose(), t.dispose();
        }
        updateDataConfig(t, e) {
            return !("line-extrusion" === this.dataConfig.type && !t.altitudeProperty && !e.altitudeProperty);
        }
        createFnTypeConfig(t, e) {
            const n = S(e.polygonFill || e.lineColor), i = M(e.polygonOpacity || e.lineOpacity), r = M(e.lineWidth), s = new Uint8Array(1), o = new Uint16Array(1), a = e.polygonFill ? "polygonFill" : e.lineColor ? "lineColor" : "polygonFill", l = e.polygonOpacity ? "polygonOpacity" : e.lineOpacity ? "lineOpacity" : "polygonOpacity";
            return [ {
                attrName: "aColor",
                type: Uint8Array,
                width: 4,
                symbolName: a,
                define: "HAS_COLOR",
                evaluate: e => {
                    let i = n(t.getZoom(), e);
                    return Array.isArray(i) || (i = this.colorCache[i] = this.colorCache[i] || zt(i).unitArray()), 
                    i = hs(i), i;
                }
            }, {
                attrName: "aOpacity",
                type: Uint8Array,
                width: 1,
                symbolName: l,
                evaluate: (e, n, r) => {
                    const o = i(t.getZoom(), e);
                    return s[0] = 255 * o, s[0] < 255 && (r.properties.hasAlpha = !0), s[0];
                }
            }, {
                attrName: "aLineWidth",
                type: Uint8Array,
                width: 1,
                symbolName: "lineWidth",
                define: "HAS_LINE_WIDTH",
                evaluate: e => {
                    const n = r(t.getZoom(), e);
                    return o[0] = Math.round(2 * n), o[0];
                }
            } ];
        }
        getPolygonOffset() {
            return {
                enable: (t, e) => 0 === e.maxAltitude,
                offset: super.getPolygonOffset()
            };
        }
        updateSymbol(t, e) {
            const n = super.updateSymbol(t, e);
            return t.material && this.Ys(t.material), n;
        }
        Gi(t, e) {
            return nl(t) !== nl(e);
        }
    }
    function nl(t) {
        if (!t || !t.material) return !1;
        for (const e in t.material) if (e.indexOf("Texture") > 0 && t.material[e]) return !0;
        return !1;
    }
    class il extends el {
        createGeometry(t) {
            const e = t.data, i = this.getSymbols()[0];
            if (i.material && i.material.extrusionOpacity) {
                const t = new Uint8Array(e.aPosition.length / 3);
                for (let n = 0; n < e.aPosition.length; n += 3) e.aPosition[n + 2] > 0 ? t[n / 3] = 0 : t[n / 3] = 1;
                e.aExtrusionOpacity = t;
            }
            const r = new n.reshader.Geometry(e, t.indices);
            return ns(r.properties, t.properties), {
                geometry: r,
                symbolIndex: {
                    index: 0
                }
            };
        }
        updateSceneConfig(t) {
            let e;
            if (this.sceneConfig.cullFace !== t.cullFace && (e = !0), ns(this.sceneConfig, t), 
            e) {
                const t = this.getShaderConfig();
                this.shader.dispose(), this.shader = new n.reshader.PhongShader(t);
            }
            this.setToRedraw();
        }
        getShader() {
            return this.shader;
        }
        delete(t) {
            this.getMap().off("updatelights", this.$s, this), super.delete(t), this.material.dispose();
        }
        init() {
            this.getMap().on("updatelights", this.$s, this);
            const t = this.regl;
            this.renderer = new n.reshader.Renderer(t);
            const e = this.getShaderConfig();
            this.shader = new n.reshader.PhongShader(e), this.Ys();
            const i = {
                vert: this.getPickingVert(),
                uniforms: [ "projViewMatrix", "modelMatrix", "positionMatrix", {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        return n.mat4.multiply([], e.projViewMatrix, e.modelMatrix);
                    }
                } ],
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            };
            this.picking = [ new n.reshader.FBORayPicking(this.renderer, i, this.layer.getRenderer().pickingFBO) ];
        }
        $s() {
            this.setToRedraw();
        }
        getShaderConfig() {
            const t = this.canvas, e = {
                x: 0,
                y: 0,
                width: () => t ? t.width : 1,
                height: () => t ? t.height : 1
            };
            return {
                extraCommandProps: {
                    cull: {
                        enable: () => void 0 === this.sceneConfig.cullFace || !!this.sceneConfig.cullFace,
                        face: () => {
                            let t = this.sceneConfig.cullFace;
                            return !0 === t && (t = "back"), t || "back";
                        }
                    },
                    stencil: {
                        enable: !0,
                        func: {
                            cmp: "<=",
                            ref: (t, e) => e.level
                        },
                        op: {
                            fail: "keep",
                            zfail: "keep",
                            zpass: "replace"
                        }
                    },
                    depth: {
                        enable: !0,
                        range: this.sceneConfig.depthRange || [ 0, 1 ],
                        func: this.sceneConfig.depthFunc || "<="
                    },
                    blend: {
                        enable: !0,
                        func: {
                            src: "src alpha",
                            dst: "one minus src alpha"
                        },
                        equation: "add"
                    },
                    viewport: e,
                    polygonOffset: this.getPolygonOffset()
                }
            };
        }
        Ys() {
            this.material && this.material.dispose();
            const t = this.getSymbols()[0].material, e = {};
            for (const n in t) ys(t, n) && (e[n] = t[n]);
            this.material = new n.reshader.PhongMaterial(e);
        }
        getUniformValues(t, e) {
            const n = t.viewMatrix, i = t.projMatrix, r = t.cameraPosition, s = this.Zs(), o = ns({
                viewMatrix: n,
                projMatrix: i,
                cameraPosition: r,
                projViewMatrix: t.projViewMatrix
            }, s);
            e && e.jitter ? o.halton = e.jitter : o.halton = [ 0, 0 ];
            const a = this.layer.getRenderer().canvas;
            return o.outSize = [ a.width, a.height ], o;
        }
        getPickingVert() {
            return "\n            attribute vec3 aPosition;\n            uniform mat4 projViewModelMatrix;\n            uniform mat4 modelMatrix;\n            uniform mat4 positionMatrix;\n            //引入fbo picking的vert相关函数\n            #include <fbo_picking_vert>\n            #include <get_output>\n            void main()\n            {\n                mat4 localPositionMatrix = getPositionMatrix();\n                vec4 localPosition = getPosition(aPosition);\n\n                gl_Position = projViewModelMatrix * localPositionMatrix * localPosition;\n                //传入gl_Position的depth值\n                fbo_picking_setData(gl_Position.w, true);\n            }\n        ";
        }
        Zs() {
            const t = this.getMap().getLightManager(), e = t && t.getAmbientLight() || {}, n = t && t.getDirectionalLight() || {};
            return {
                ambientColor: e.color || [ .2, .2, .2 ],
                light0_diffuse: [ ...n.color || [ .1, .1, .1 ], 1 ],
                lightSpecular: n.specular || [ .8, .8, .8 ],
                light0_viewDirection: n.direction || [ 1, 1, -1 ]
            };
        }
    }
    const rl = [ 1, 1, 1 ];
    class sl extends Rs {
        constructor(t, e, n, i, r) {
            if (super(t, e, n, i, r), _(this.symbolDef[0].lineColor)) {
                const t = e.getMap(), n = S(this.symbolDef.lineColor);
                this.colorSymbol = e => n(t.getZoom(), e);
            } else this.colorSymbol = this.getSymbol({
                index: 0
            }).lineColor || "#bbb";
        }
        createGeometry(t) {
            const {data: e, indices: i} = t, r = new n.reshader.Geometry(e, i, 0, {
                primitive: "lines"
            });
            return r.generateBuffers(this.regl), {
                geometry: r,
                symbolIndex: {
                    index: 0
                }
            };
        }
        createMesh(t, e) {
            const {geometry: i} = t, r = new n.reshader.Mesh(i);
            if (r.castShadow = !1, this.sceneConfig.animation) {
                rl[2] = .01;
                const t = [];
                n.mat4.fromScaling(t, rl), n.mat4.multiply(t, e, t), e = t;
            }
            return r.setLocalTransform(e), r.properties.symbolIndex = {
                index: 0
            }, r;
        }
        addMesh(t, e) {
            if (!t.length) return this;
            let i;
            null !== e ? (0 === e && (e = .01), i = t[0].localTransform, rl[2] = e, n.mat4.fromScaling(i, rl), 
            n.mat4.multiply(i, t[0].properties.tileTransform, i)) : i = t[0].properties.tileTransform;
            for (let e = 0; e < t.length; e++) t[e].setLocalTransform(i);
            return this.scene.addMesh(t), this;
        }
        init() {
            const t = this.regl;
            this.scene = new n.reshader.Scene, this.renderer = new n.reshader.Renderer(t);
            const e = {
                x: 0,
                y: 0,
                width: () => this.canvas ? this.canvas.width : 1,
                height: () => this.canvas ? this.canvas.height : 1
            }, i = {
                vert: "\n    attribute vec3 aPosition;\n    attribute vec4 aColor;\n\n    uniform mat4 projViewModelMatrix;\n    uniform vec2 outSize;\n\n    varying vec4 vColor;\n\n    void main()\n    {\n        gl_Position = projViewModelMatrix * vec4(aPosition, 1.0);\n        vColor = aColor / 255.0;\n    }\n",
                frag: "\n    #ifdef GL_ES\n        precision lowp float;\n    #endif\n\n    uniform float opacity;\n\n    varying vec4 vColor;\n\n    void main()\n    {\n        gl_FragColor = vColor * opacity;\n    }\n",
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: {
                    stencil: {
                        enable: !0,
                        func: {
                            cmp: "<=",
                            ref: (t, e) => e.level
                        },
                        op: {
                            fail: "keep",
                            zfail: "keep",
                            zpass: "replace"
                        }
                    },
                    blend: {
                        enable: !0,
                        func: this.getBlendFunc(),
                        equation: "add"
                    },
                    viewport: e
                }
            };
            this.shader = new n.reshader.MeshShader(i);
        }
        getUniformValues(t) {
            const e = this.sceneConfig.opacity || .3, n = this.layer.getRenderer().canvas;
            return {
                projViewMatrix: t.projViewMatrix,
                outSize: [ n.width, n.height ],
                opacity: e
            };
        }
    }
    const {getPBRUniforms: ol} = n.reshader.pbr.PBRUtils, al = [];
    class ll extends el {
        constructor(...t) {
            super(...t), this.Ks = new n.reshader.ResourceLoader, this.scene.sortFunction = this.sortByCommandKey;
        }
        supportRenderMode(t) {
            return this.getSymbols()[0].ssr ? "fxaa" === t || "fxaaAfterTaa" === t : super.supportRenderMode(t);
        }
        isAnimating() {
            const t = this.Qs();
            if (t && (t[0] || t[1])) return !0;
        }
        needToRedraw() {
            const t = this.Qs();
            return !(!t || !t[0] && !t[1]) || super.needToRedraw();
        }
        Qs() {
            const t = this.getSymbols()[0];
            return t.material && t.material.uvOffsetAnim;
        }
        createGeometry(t) {
            if (!t.data || !t.data.aPosition || !t.data.aPosition.length) return null;
            const e = new n.reshader.Geometry(t.data, t.indices, 0, {
                uv0Attribute: "aTexCoord0"
            });
            return ns(e.properties, t.properties), {
                geometry: e,
                symbolIndex: {
                    index: 0
                }
            };
        }
        paint(t) {
            const e = !!t.shadow;
            t.states && t.states.includesChanged && (this.shader.dispose(), delete this.shader, 
            this.nr(t));
            let n = !!t.ssr && this.getSymbols()[0].ssr;
            const i = this.shader, r = i.shaderDefines;
            if (n) {
                const e = ns({}, r, t.ssr.defines);
                i.shaderDefines = e;
            }
            if (t.onlyUpdateDepthInTaa && (this.shader = this.eo, !n && this.no && (this.shader = i, 
            this.setToRedraw(!0))), this.updateIBLDefines(i), super.paint(t), void 0 !== this.shadowCount && e) {
                const t = this.scene.getMeshes().length;
                this.shadowCount !== t && this.setToRedraw();
            }
            this.shader = i, n && (i.shaderDefines = r), delete this.shadowCount;
            const s = this.Qs();
            if (s && (s[0] || s[1])) this.material.set("uvOffset", [ 0, 0 ]); else {
                const t = this.getUVOffset(s);
                this.material.set("uvOffset", t);
            }
            this.no = n;
        }
        getShadowMeshes() {
            if (!this.isVisible()) return al;
            this.shadowCount = this.scene.getMeshes().length;
            const t = this.scene.getMeshes().filter(t => 0 === t.getUniform("level"));
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                n.material !== this.material && n.setMaterial(this.material);
            }
            return t;
        }
        updateSceneConfig(t) {
            ns(this.sceneConfig, t), this.setToRedraw();
        }
        delete() {
            super.delete(), this.disposeIBLTextures(), this.material.dispose(), this.io && this.io.dispose(), 
            this.shader && (this.shader.dispose(), delete this.shader), this.eo && (this.eo.dispose(), 
            delete this.eo);
        }
        init(t) {
            this.getMap().on("updatelights", this.ro, this), this.createIBLTextures(), this.or = this.or || t;
            const e = this.regl;
            this.renderer = new n.reshader.Renderer(e), this.so = this.oo.bind(this), this.ao = this.disposeCachedTexture.bind(this), 
            this.lo = this.ho.bind(this), this.Ys(), this.nr(t);
            const i = {
                vert: "\n                attribute vec3 aPosition;\n                uniform mat4 projViewModelMatrix;\n                uniform mat4 positionMatrix;\n                //引入fbo picking的vert相关函数\n                #include <line_extrusion_vert>\n                #include <get_output>\n                #include <fbo_picking_vert>\n                void main() {\n                    mat4 localPositionMatrix = getPositionMatrix();\n                    #ifdef IS_LINE_EXTRUSION\n                        vec3 linePosition = getLineExtrudePosition(aPosition);\n                        vec4 localVertex = getPosition(linePosition);\n                    #else\n                        vec4 localVertex = getPosition(aPosition);\n                    #endif\n\n                    gl_Position = projViewModelMatrix * localPositionMatrix * localVertex;\n                    fbo_picking_setData(gl_Position.w, true);\n                }\n            ",
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: (t, e) => n.mat4.multiply([], e.projViewMatrix, e.modelMatrix)
                } ],
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            };
            this.picking = [ new n.reshader.FBORayPicking(this.renderer, i, this.layer.getRenderer().pickingFBO) ];
        }
        nr(t) {
            const e = {
                x: 0,
                y: 0,
                width: () => this.canvas ? this.canvas.width : 1,
                height: () => this.canvas ? this.canvas.height : 1
            }, i = {}, r = [];
            r.push(...n.reshader.SsrPass.getUniformDeclares()), this.fillIncludes(i, r, t);
            const s = {
                cull: {
                    enable: () => void 0 === this.sceneConfig.cullFace || !!this.sceneConfig.cullFace,
                    face: this.sceneConfig.cullFace || "back"
                },
                stencil: {
                    enable: (t, e) => void 0 === e.hasAlpha || !!e.hasAlpha,
                    func: {
                        cmp: "<=",
                        ref: (t, e) => e.level
                    },
                    op: {
                        fail: "keep",
                        zfail: "keep",
                        zpass: "replace"
                    }
                },
                viewport: e,
                depth: {
                    enable: !0,
                    range: this.sceneConfig.depthRange || [ 0, 1 ],
                    func: this.sceneConfig.depthFunc || "<="
                },
                blend: {
                    enable: (t, e) => void 0 === e.hasAlpha || !!e.hasAlpha,
                    func: {
                        src: "src alpha",
                        dst: "one minus src alpha"
                    },
                    equation: "add"
                },
                polygonOffset: this.getPolygonOffset()
            }, o = {
                uniforms: r,
                defines: this.co(i),
                extraCommandProps: s
            };
            this.shader = new n.reshader.pbr.StandardShader(o), o.frag = "\n            precision mediump float;\n            #include <gl2_frag>\n            void main() {\n                glFragColor = vec4(0.0);\n                #if __VERSION__ == 100\n                    gl_FragColor = glFragColor;\n                #endif\n            }\n        ", 
            this.eo = new n.reshader.pbr.StandardShader(o);
        }
        oo({resources: t}) {
            for (let e = 0; e < t.length; e++) this.addCachedTexture(t[e].url, t[e].data);
            this.setToRedraw(!0);
        }
        ho() {
            this.setToRedraw(!0);
        }
        Ys(t) {
            const e = t || this.getSymbols()[0].material, i = {};
            let r = !1;
            for (const t in e) if (ys(e, t)) if (t.indexOf("Texture") > 0) {
                let s = e[t];
                if (!s) {
                    i[t] = void 0;
                    continue;
                }
                const o = "string" == typeof s ? s : s.url, a = this.getCachedTexture(o);
                a ? a.then ? o === s ? s = {
                    promise: a,
                    wrap: "repeat"
                } : s.promise = a : o === s ? s = {
                    data: a,
                    wrap: "repeat"
                } : s.data = a : o === s && (s = {
                    url: o,
                    wrap: "repeat"
                }), s.flipY = !0, i[t] = new n.reshader.Texture2D(s, this.Ks), i[t].once("complete", this.so), 
                i[t].once("disposed", this.ao), i[t].promise && this.addCachedTexture(o, i[t].promise), 
                r = !0;
            } else i[t] = e[t];
            if (this.material) {
                for (let t in i) this.material.set(t, i[t]);
                this.setToRedraw(!0);
            } else this.material = new n.reshader.pbr.StandardMaterial(i), this.material.once("complete", this.lo);
            r || this.ho();
        }
        getShader() {
            return this.shader;
        }
        getUniformValues(t, e) {
            const {iblTexes: n, dfgLUT: i} = this.getIBLRes(), r = ol(t, n, i, e && e.ssr, e && e.jitter);
            return this.setIncludeUniformValues(r, e), r;
        }
        co(t) {
            return this.hasIBL() ? t.HAS_IBL_LIGHTING = 1 : delete t.HAS_IBL_LIGHTING, t;
        }
        ro() {
            if (!this.shader) return;
            const t = this.shader.shaderDefines;
            this.co(t), this.shader.shaderDefines = t;
        }
    }
    const hl = [], cl = [], ul = [ 0, 0, 0 ], fl = [ 0, 0, 0 ], dl = [ 1, 1, 1 ], pl = [], yl = [ 1, 1, 1, 1 ], ml = [], gl = t => class extends t {
        constructor(t, e, n, i, r) {
            super(t, e, n, i, r), this.uo = !1, this.scene.sortFunction = this.sortByCommandKey, 
            this.fo = [];
        }
        isAnimating() {
            const t = this.getSymbols();
            for (let e = 0; e < t.length; e++) {
                if (t[e] && this.do[e] && this.po(e)) return !0;
            }
            return !1;
        }
        createGeometry(t, e) {
            if (this.yo(), !this.uo) return null;
            const {data: n, positionSize: i} = t;
            return {
                geometry: {
                    properties: ns({}, t.properties),
                    data: n,
                    positionSize: i,
                    features: e
                },
                symbolIndex: t.symbolIndex
            };
        }
        getFnTypeConfig() {
            return pl;
        }
        createMesh(t, e, {tileTranslationMatrix: i, tileExtent: r}) {
            const s = this.getMap(), {geometry: o} = t, {positionSize: a, features: l} = o, {aPosition: h} = o.data, c = h.length / a;
            if (0 === c) return null;
            const u = {
                instance_vectorA: new Float32Array(4 * c),
                instance_vectorB: new Float32Array(4 * c),
                instance_vectorC: new Float32Array(4 * c),
                aPickingId: []
            };
            this.mo(u, i, r, o.properties.z, h, a);
            const f = {};
            for (const t in u) f[t] = {
                buffer: this.regl.buffer({
                    dimension: u[t].length / c,
                    data: u[t]
                }),
                divisor: 1
            };
            const d = [], p = this.getSymbols();
            for (let t = 0; t < p.length; t++) {
                const e = p[t], r = this.fo[t];
                if (!r) continue;
                const {translation: o, rotation: a, scale: h, fixSizeOnZoom: y} = e, m = this.vo([], o, a, h);
                let g = 0;
                r.forEach(t => {
                    const {geometry: i, nodeMatrix: r} = t, s = n.mat4.multiply(ml, m, r), o = i.boundingBox.copy();
                    o.transform(s);
                    const a = this.xo(o, e);
                    a > g && (g = a);
                });
                const v = [ 0, 0, g ], x = r.map(r => {
                    const {geometry: o, nodeMatrix: a, materialInfo: h, skin: d, morphWeights: p, extraInfo: g} = r, x = new (this.getMaterialClazz(h))(h), b = {}, w = new n.reshader.InstancedMesh(f, c, o, x, {
                        transparent: !1,
                        picking: !0
                    });
                    d && (w.setUniform("jointTexture", d.jointTexture), w.setUniform("jointTextureSize", d.jointTextureSize), 
                    w.setUniform("numJoints", d.numJoints), w.setUniform("skinAnimation", 0), b.HAS_SKIN = 1), 
                    p && (w.setUniform("morphWeights", p), b.HAS_MORPH = 1), w.setUniform("hasAlpha", g.alphaMode && "BLEND" === g.alphaMode.toUpperCase()), 
                    as(w.uniforms, "polygonFill", e, "polygonFill", yl, cs(this.colorCache)), as(w.uniforms, "polygonOpacity", e, "polygonOpacity", 1);
                    const A = n.mat4.multiply([], m, a), _ = [];
                    return n.mat4.fromTranslation(_, v), n.mat4.multiply(A, _, A), w.setPositionMatrix(() => {
                        if (ds(y)) {
                            const t = s.getGLScale() / s.getGLScale(y);
                            return n.vec3.set(hl, t, t, t), n.mat4.fromScaling(_, hl), n.mat4.multiply(_, _, A);
                        }
                        return A;
                    }), w.setLocalTransform(i), o.generateBuffers(this.regl, {
                        excludeElementsInVAO: !0
                    }), u.instance_color && (b.HAS_INSTANCE_COLOR = 1), w.properties.features = l, w.setDefines(b), 
                    w.properties.symbolIndex = {
                        index: t
                    }, w;
                });
                d.push(...x);
            }
            return d.insContext = {
                instanceData: u,
                tileTranslationMatrix: i,
                tileExtent: r,
                aPosition: h,
                positionSize: a
            }, d;
        }
        xo(t, e) {
            const n = e.anchorZ || "bottom";
            let i = 0;
            return "bottom" === n ? i = -t.min[2] : "top" === n ? i = -t.max[2] : "center" === n && (i = -(t.min[2] + t.max[2]) / 2), 
            i;
        }
        addMesh(t) {
            if (!t) return null;
            if (t[0].properties.level > 2) return null;
            for (let e = 0; e < t.length; e++) {
                if (!t[e] || !t[e].geometry) continue;
                const n = this.po(t[e].properties.symbolIndex.index);
                t[e].setUniform("skinAnimation", +n);
            }
            return this.scene.addMesh(t), this;
        }
        prepareRender(t) {
            const e = this.getSymbols();
            let n = !1;
            for (let i = 0; i < e.length; i++) {
                const r = e[i];
                if (!r || !this.do[i]) continue;
                if (this.po(i) && this.do[i]) {
                    n || (n = !0);
                    let e = r.speed;
                    const s = !!r.loop;
                    ss(e) && (e = 1), this.do[i].updateAnimation(t.timestamp, s, e);
                }
            }
            n && this.setToRedraw(!0), super.prepareRender(t);
        }
        getShadowMeshes() {
            if (!this.isVisible()) return pl;
            this.shadowCount = this.scene.getMeshes().length;
            return this.scene.getMeshes().filter(t => 0 === t.getUniform("level"));
        }
        po(t) {
            const e = this.getSymbols()[t];
            return e && e.animation && this.do[t] && this.do[t].hasSkinAnimation();
        }
        mo(t, e, i, r, s, o) {
            function a(e, n, i, r) {
                t[e][4 * n] = i[r], t[e][4 * n + 1] = i[r + 4], t[e][4 * n + 2] = i[r + 8], t[e][4 * n + 3] = i[r + 12];
            }
            const l = s.length / o, h = this.layer.getTileSize().width / i * this.layer.getRenderer().getTileGLScale(r), c = this.layer.getRenderer().getZScale(), u = [], f = [];
            for (let e = 0; e < l; e++) {
                const i = n.vec3.set(u, s[e * o] * h, -s[e * o + 1] * h, 2 === o ? 0 : s[e * o + 2] * c);
                n.mat4.fromTranslation(f, i), a("instance_vectorA", e, f, 0), a("instance_vectorB", e, f, 1), 
                a("instance_vectorC", e, f, 2), t.aPickingId[e] = e;
            }
        }
        getShaderConfig() {
            const t = super.getShaderConfig();
            return t.positionAttribute = "POSITION", t.normalAttribute = "NORMAL", t;
        }
        init(t) {
            super.init(t), this.yo();
        }
        yo() {
            if (this.do) return;
            this.do = [];
            const t = this.layer.getRenderer(), e = this.getSymbols();
            this.bo = 0;
            for (let i = 0; i < e.length; i++) {
                const r = e[i].url;
                if (t.isCachePlaced(r)) continue;
                const s = t.fetchCache(r);
                s ? (this.do[i] = [ s ], this.fo[i] = s.getMeshesInfo(), this.bo++, t.addToCache(r)) : (t.placeCache(r), 
                n.reshader.GLTFHelper.load(r).then(s => {
                    const o = n.reshader.GLTFHelper.exportGLTFPack(s, this.regl);
                    this.do[i] = [ o ], this.fo[i] = o.getMeshesInfo(), t.addToCache(r, o, t => {
                        t.dispose();
                    }), this.bo++, this.bo >= e.length && (this.uo = !0), this.setToRedraw(!0);
                }));
            }
            this.bo >= e.length && (this.uo = !0);
        }
        getPickingVert() {
            return "\n    attribute vec3 aPosition;\n    uniform mat4 projViewModelMatrix;\n    uniform mat4 modelMatrix;\n    uniform mat4 positionMatrix;\n    //引入fbo picking的vert相关函数\n    #include <fbo_picking_vert>\n    #include <get_output>\n    void main()\n    {\n        mat4 localPositionMatrix = getPositionMatrix();\n        vec4 localPosition = getPosition(aPosition);\n\n        gl_Position = projViewModelMatrix * localPositionMatrix * localPosition;\n        //传入gl_Position的depth值\n        fbo_picking_setData(gl_Position.w, true);\n    }";
        }
        deleteMesh(t) {
            if (t) {
                this.scene.removeMesh(t);
                for (let e = 0; e < t.length; e++) t[e].disposeInstanceData(), t[e].dispose();
            }
        }
        delete() {
            super.delete();
            const t = this.getSymbols()[0].url;
            if (this.layer.getRenderer().removeCache(t), this.fo) for (let t = 0; t < this.fo.length; t++) {
                const e = this.fo[t];
                for (let n = 0; n < e.length; n++) {
                    const n = e[t], {geometry: i, materialInfo: r} = n;
                    if (i && i.dispose(), r) for (const t in r) r[t] && r[t].destroy && r[t].destroy();
                }
            }
        }
        vo(t, e, i, r) {
            const s = n.vec3.set(hl, ...e || ul), o = i || fl, a = r || dl, l = n.quat.fromEuler(cl, o[0], o[1], o[2]);
            return n.mat4.fromRotationTranslationScale(t, l, s, a);
        }
    };
    class vl extends(gl(il)){
        getMaterialClazz(t) {
            return t.diffuseFactor ? n.reshader.PhongSpecularGlossinessMaterial : n.reshader.PhongMaterial;
        }
    }
    class xl extends(gl(ll)){
        getMaterialClazz(t) {
            return t.specularGlossinessTexture || t.diffuseTexture ? n.reshader.pbr.StandardSpecularGlossinessMaterial : n.reshader.pbr.StandardMaterial;
        }
    }
    const bl = {
        color: [ 2.0303, 2.028, 2.028 ],
        direction: [ 0, -.2717, -1 ]
    }, wl = {
        index: 0
    }, Al = [ 0, 0, 0 ];
    class _l extends Vs {
        supportRenderMode(t) {
            return "fxaa" === t || "fxaaBeforeTaa" === t;
        }
        needPolygonOffset() {
            return !0;
        }
        needToRedraw() {
            return this.getSymbol(wl).animation;
        }
        createMesh(t, e) {
            const {geometry: i} = t;
            i.generateBuffers(this.regl);
            const r = new n.reshader.Mesh(i, null, {
                castShadow: !1,
                picking: !0
            });
            return r.properties.symbolIndex = wl, r.setLocalTransform(e), r;
        }
        callShader(t, e) {
            super.callShader(t, e), this.transformWater();
            const n = this.wo(this.getMap(), e);
            this.renderer.render(this.Ao, n, this._o, this.getRenderFBO(e));
        }
        addMesh(t, e) {
            this.sr(t, e), super.addMesh(...arguments);
        }
        sr(t) {
            const e = this.getSymbol(wl).ssr;
            for (let n = 0; n < t.length; n++) t[n].ssr = e ? 1 : 0;
        }
        paint(t) {
            t.states && t.states.includesChanged && (this.shader.dispose(), this.Ao.dispose(), 
            this.nr(t));
            const e = !!t.ssr && this.getSymbol(wl).ssr, n = this.Ao, i = n.shaderDefines;
            if (e) {
                const e = ns({}, i, t.ssr.defines);
                n.shaderDefines = e;
            }
            this.updateIBLDefines(n), this.Mo.ssr = e ? 1 : 0, super.paint(t), e && (n.shaderDefines = i);
        }
        init(t) {
            this.createIBLTextures();
            const e = this.regl;
            this.renderer = new n.reshader.Renderer(e), this.createGround(), this.nr(t), this.pickingFBO && (this.picking = [ new n.reshader.FBORayPicking(this.renderer, {
                vert: js,
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: {
                    viewport: this.pickingViewport
                }
            }, this.pickingFBO) ]), this.So();
        }
        So() {
            const t = this.regl;
            this.ko = t.texture(2), this.Po = [ 2, 2 ];
            const e = this.getSymbol({
                index: 0
            }), n = e.texWaveNormal, i = this.getCachedTexture(n), r = this;
            if (i) i.loading || (this.To = this.Oo(t, i)); else {
                const e = new Image;
                e.loading = !0, e.onload = function() {
                    delete this.loading, r.To = r.Oo(t, this), this.Po = [ this.width, this.height ], 
                    r.setToRedraw();
                }, e.onerror = () => {
                    console.error("invalid water wave normal texture:" + n);
                }, this.addCachedTexture(n, e), e.src = n;
            }
            const s = e.texWavePerturbation, o = this.getCachedTexture(s);
            if (o) o.loading || (this.Fo = this.Oo(t, o)); else {
                const e = new Image;
                e.loading = !0, e.onload = function() {
                    delete this.loading, r.Fo = r.Oo(t, this), this.Po = [ this.width, this.height ], 
                    r.setToRedraw();
                }, e.onerror = () => {
                    console.error("invalid water wave perturbation texture:" + s);
                }, this.addCachedTexture(s, e), e.src = s;
            }
        }
        Oo(t, e) {
            return this.ko ? t.texture({
                width: this.Po[0],
                height: this.Po[1],
                mag: "linear",
                min: "linear mipmap linear",
                wrapS: "repeat",
                wrapT: "repeat",
                flipY: !0,
                data: e
            }) : null;
        }
        nr(t) {
            const e = this.canvas, i = [ {
                name: "projViewModelMatrix",
                type: "function",
                fn: function(t, e) {
                    const i = [];
                    return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                }
            }, {
                name: "modelViewNormalMatrix",
                type: "function",
                fn: (t, e) => {
                    const i = n.mat4.multiply([], e.viewMatrix, e.modelMatrix), r = n.mat4.invert(i, i), s = n.mat4.transpose(r, r);
                    return n.mat3.fromMat4([], s);
                }
            }, {
                name: "modelViewMatrix",
                type: "function",
                fn: (t, e) => n.mat4.multiply([], e.viewMatrix, e.modelMatrix)
            } ], r = {
                TIME_NOISE_TEXTURE_REPEAT: .3737
            };
            this.fillIncludes(r, i, t);
            const s = {
                x: 0,
                y: 0,
                width: () => e ? e.width : 1,
                height: () => e ? e.height : 1
            }, o = this.sceneConfig.depthRange;
            this.shader = new n.reshader.MeshShader({
                vert: "\n                attribute vec3 aPosition;\n\n                uniform mat4 projViewModelMatrix;\n\n                void main() {\n                    gl_Position = projViewModelMatrix * vec4(aPosition, 1.);\n                }\n            ",
                frag: "\n    #define SHADER_NAME WATER_STENCIL\n    precision mediump float;\n    void main() {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n    }\n",
                uniforms: [ {
                    name: "projViewModelMatrix",
                    type: "function",
                    fn: function(t, e) {
                        const i = [];
                        return n.mat4.multiply(i, e.projViewMatrix, e.modelMatrix), i;
                    }
                } ],
                extraCommandProps: {
                    viewport: s,
                    colorMask: [ !1, !1, !1, !1 ],
                    stencil: {
                        enable: !0,
                        mask: 255,
                        func: {
                            cmp: "<=",
                            ref: 254,
                            mask: 255
                        },
                        op: {
                            fail: "keep",
                            zfail: "keep",
                            zpass: "replace"
                        }
                    },
                    depth: {
                        enable: !0,
                        range: o || [ 0, 1 ],
                        func: this.sceneConfig.depthFunc || "<="
                    },
                    polygonOffset: {
                        enable: !0,
                        offset: this.getPolygonOffset()
                    }
                }
            });
            const a = {
                viewport: s,
                stencil: {
                    enable: !0,
                    mask: 255,
                    func: {
                        cmp: "==",
                        ref: 254,
                        mask: 255
                    },
                    op: {
                        fail: "keep",
                        zfail: "keep",
                        zpass: "replace"
                    }
                },
                depth: {
                    enable: !1
                }
            };
            i.push(...n.reshader.SsrPass.getUniformDeclares()), this.Ao = new n.reshader.MeshShader({
                vert: "#define SHADER_NAME WATER\nuniform mat4 modelMatrix;\nuniform mat4 projViewModelMatrix;\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform vec2 uvOffset;\nuniform vec2 noiseUvOffset;\nuniform vec2 uvScale;\nvarying vec2 vUv;\nvarying vec2 vNoiseUv;\nvarying vec3 vPos;\nvarying mat3 vTbnMatrix;\n#ifdef HAS_SSR\nuniform mat4 modelViewMatrix;\nvarying vec4 vViewVertex;\n#endif\nmat3 c(in vec3 d) {\n  vec3 t = normalize(cross(d, vec3(.0, 1., .0)));\n  vec3 e = normalize(cross(d, t));\n  return mat3(t, e, d);\n}\n#if defined(HAS_SHADOWING)\n#include <vsm_shadow_vert>\n#endif\nconst vec3 f = vec3(0., 0., 1.);\nvoid main(void) {\n  vec4 h = vec4(aPosition, 1.);\n  vec4 i = modelMatrix * h;\n  vPos = i.xyz;\n  vTbnMatrix = c(f);\n  gl_Position = projViewModelMatrix * h;\n  vUv = aTexCoord * uvScale + uvOffset;\n  vNoiseUv = aTexCoord * uvScale * TIME_NOISE_TEXTURE_REPEAT + noiseUvOffset;\n#ifdef HAS_SSR\nvec4 j = modelViewMatrix * h;\n  vViewVertex = j;\n#endif\n#if defined(HAS_SHADOWING)\nshadow_computeShadowPars(h);\n#endif\n}",
                frag: "#define SHADER_NAME WATER\nprecision highp float;\nprecision highp sampler2D;\n#include <hsv_frag>\nuniform vec3 hsv;\nuniform float contrast;\n#if defined(HAS_SHADOWING)\n#include <vsm_shadow_frag>\n#endif\n#if defined(HAS_IBL_LIGHTING)\nuniform vec3 hdrHsv;\nuniform samplerCube specularPBR;\nuniform float rgbmRange;\nuniform vec3 diffuseSPH[9];\n#else\nuniform vec3 ambientColor;\n#endif\nstruct PBRShadingWater {\n  float NdotL;\n  float NdotV;\n  float NdotH;\n  float VdotH;\n  float LdotH;\n  float VdotN;\n};\nvec3 c(const in vec4 d, const in float e) {\n  if(e <= .0)\n    return d.rgb;\n  return e * d.rgb * d.a;\n}\n#ifdef HAS_SSR\nvarying vec4 vViewVertex;\nuniform mat3 modelViewNormalMatrix;\nuniform sampler2D TextureDepth;\nuniform highp vec2 outSize;\nuniform float ssrFactor;\nuniform float ssrQuality;\nuniform sampler2D TextureReflected;\nuniform highp mat4 projMatrix;\nuniform mat4 invProjMatrix;\nuniform vec4 outputFovInfo[2];\nuniform mat4 reprojViewProjMatrix;\nuniform vec2 cameraNearFar;\nfloat f(const in vec4 h) {\n  return h.r + h.g / 255.;\n}\nfloat i(const in vec2 j, const in float k) {\n  vec3 l = vec3(.06711056, .00583715, 52.9829189);\n  return fract(l.z * fract(dot(j.xy + k * vec2(47., 17.) * .695, l.xy))) * .5;\n}\nvec3 m(const in float n, const in float o, const in vec2 u) {\n  float v = min(o - .01, n);\n  float A = floor(v);\n  float B = min(o, A + 1.);\n  float C = pow(2., B);\n  vec2 D = 2. * C / u;\n  if(v - A > .5)\n    C *= 2.;\n  return vec3(D, C);\n}\nvec2 E(const in vec2 F, const in vec3 G) {\n  vec2 H = max(G.xy, min(1. - G.xy, F));\n  return vec2(2. * H.x, G.z - 1. - H.y) / G.z;\n}\nvec3 I(const in mat4 J, const in vec3 K) {\n  vec4 L = J * vec4(K, 1.);\n  return vec3(.5 + .5 * L.xy / L.w, L.w);\n}\nvec3 M(const in float N, const in vec2 H) {\n  return texture2D(TextureReflected, H).rgb;\n}\nfloat O(float P) {\n  highp mat4 J = projMatrix;\n  highp float z = P * 2. - 1.;\n  return -J[3].z / (z + J[2].z);\n}\nfloat Q(const vec2 H) {\n  float P = f(texture2D(TextureDepth, H));\n  return P;\n}\nvec3 R(const in float k, const in vec3 S, const in vec3 T, const in vec3 U, const in vec3 V, const in float W) {\n  vec2 X;\n  X.x = i(gl_FragCoord.yx, k);\n  X.y = fract(X.x * 52.9829189);\n  X.y = mix(X.y, 1., .7);\n  float Y = 2. * 3.14159 * X.x;\n  float Z = pow(max(X.y, .000001), W / (2. - W));\n  float ba = sqrt(1. - Z * Z);\n  vec3 bb = vec3(ba * cos(Y), ba * sin(Y), Z);\n  bb = bb.x * S + bb.y * T + bb.z * U;\n  return normalize((2. * dot(V, bb)) * bb - V);\n}\nfloat bc(const in float k) {\n  return (i(gl_FragCoord.xy, k) - .5);\n}\nvec3 bd(const in vec3 be, const in float bf, const in vec3 bg) {\n  vec3 bh = I(projMatrix, vViewVertex.xyz + bg * bf);\n  bh.z = 1. / bh.z;\n  bh -= be;\n  float bi = min(1., .99 * (1. - be.x) / max(1e-5, bh.x));\n  float bj = min(1., .99 * (1. - be.y) / max(1e-5, bh.y));\n  float bk = min(1., .99 * be.x / max(1e-5, -bh.x));\n  float bl = min(1., .99 * be.y / max(1e-5, -bh.y));\n  return bh * min(bi, bj) * min(bk, bl);\n}\nfloat bm(const in vec3 be, const in vec3 bh, inout float bn, inout float bo) {\n  float bp = (bo + bn) * .5;\n  vec3 bq = be + bh * bp;\n  float z = Q(bq.xy);\n  float P = O(z);\n  float br = -1. / bq.z;\n  bn = P > br ? bn : bp;\n  bo = P > br ? bp : bo;\n  return bp;\n}\nvec4 bs(const in vec3 be, const in float bf, in float bt, const in vec3 bg, const in float bu, const in float k) {\n  const int bv = 20;\n  float bw = 1. / float(bv);\n  bt *= bw;\n  vec3 bh = bd(be, bf, bg);\n  float bx = bw;\n  vec3 by = vec3(.0, bx, 1.);\n  vec3 bq;\n  float z, P, br, bz, bA, bB;\n  bool bC;\n  float bD = 1.;\n  float bp;\n  for(int bE = 0; bE < bv; bE++) {\n    bq = be + bh * by.y;\n    z = Q(bq.xy);\n    P = O(z);\n    br = -1. / bq.z;\n    bz = br - P;\n    bz *= clamp(sign(abs(bz) - bf * bw * bw), .0, 1.);\n    bC = abs(bz + bt) < bt;\n    bA = clamp(by.x / (by.x - bz), .0, 1.);\n    bB = bC ? by.y + bA * bw - bw : 1.;\n    by.z = min(by.z, bB);\n    by.x = bz;\n    if(bC) {\n      float bn = by.y - bw;\n      float bo = by.y;\n      bp = bm(be, bh, bn, bo);\n      bp = bm(be, bh, bn, bo);\n      bp = bm(be, bh, bn, bo);\n      bD = bp;\n      break;\n    }\n    by.y += bw;\n  }\n  return vec4(be + bh * bD, 1. - bD);\n}\nvec3 bF(in vec4 bG, const in float bH, const in vec3 bI, const in vec3 bJ, const in float bu) {\n  vec4 bK = mix(outputFovInfo[0], outputFovInfo[1], bG.x);\n  bG.xyz = vec3(mix(bK.xy, bK.zw, bG.y), 1.) * -1. / bG.z;\n  bG.xyz = (reprojViewProjMatrix * vec4(bG.xyz, 1.)).xyw;\n  bG.xy /= bG.z;\n  float bL = clamp(6. - 6. * max(abs(bG.x), abs(bG.y)), .0, 1.);\n  bG.xy = .5 + .5 * bG.xy;\n  return vec3(bG.xy, 1.);\n}\nvec3 ssr(const in vec3 bI, const in vec3 bJ, const in float bu, const in vec3 bM, const in vec3 V) {\n  float bN = .0;\n  vec4 bO = vec4(.0);\n  float W = bu * bu;\n  W = W * W;\n  vec3 bP = abs(bM.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 S = normalize(cross(bP, bM));\n  vec3 T = cross(bM, S);\n  float bH = ssrFactor * clamp(-4. * dot(V, bM) + 3.8, .0, 1.);\n  bH *= clamp(4.7 - bu * 5., .0, 1.);\n  vec3 be = I(projMatrix, vViewVertex.xyz);\n  be.z = 1. / be.z;\n  vec3 bg = R(bN, S, T, bM, V, W);\n  float bf = mix(cameraNearFar.y + vViewVertex.z, -vViewVertex.z - cameraNearFar.x, bg.z * .5 + .5);\n  float bt = .5 * bf;\n  vec4 bG;\n  if(dot(bg, bM) > .001 && bH > .0) {\n    bG = bs(be, bf, bt, bg, bu, bN);\n    if(bG.w > .0)\n      return bF(bG, bH, bI, bJ, bu);\n    \n  }\n  return vec3(.0);\n}\n#endif\nconst vec3 bQ = vec3(0., 0., 1.);\nuniform mat4 viewMatrix;\nuniform sampler2D normalTexture;\nuniform sampler2D heightTexture;\nuniform vec4 waveParams;\nuniform vec2 waterDir;\nuniform vec4 waterBaseColor;\nuniform vec3 lightDirection;\nuniform vec3 lightColor;\nuniform vec3 camPos;\nuniform float timeElapsed;\nvarying vec2 vUv;\nvarying vec2 vNoiseUv;\nvarying vec3 vPos;\nvarying mat3 vTbnMatrix;\nfloat bR(vec3 bS, float bT) {\n  float bU = max(.015, bT);\n  return max((bS.x + bS.y) * .3303545 / bU + .3303545, .0);\n}\nconst vec2 bV = vec2(6. / 25., 5. / 24.);\nvec2 bW(sampler2D bX, vec2 H) {\n  return 2. * texture2D(bX, H).rg - 1.;\n}\nfloat bY(vec2 H) {\n  return texture2D(heightTexture, H).b;\n}\nvec3 bZ(sampler2D bX, vec2 H) {\n  return 2. * texture2D(bX, H).rgb - 1.;\n}\nfloat ca(vec2 H, float cb) {\n  return fract(cb);\n}\nfloat cc(vec2 H, float cb) {\n  float cd = ca(H, cb);\n  return 1. - abs(1. - 2. * cd);\n}\nvec3 ce(sampler2D cf, vec2 H, float cb, float cg) {\n  float ch = waveParams[2];\n  float ci = waveParams[3];\n  vec2 cj = bW(cf, H) * ch;\n  float cd = ca(H, cb + cg);\n  float ck = cc(H, cb + cg);\n  vec2 bO = H;\n  bO -= cj * (cd + ci);\n  bO += cg;\n  bO += (cb - cd) * bV;\n  return vec3(bO, ck);\n}\nconst float cl = 7.77;\nvec3 cm(sampler2D cn, sampler2D co, vec2 cp, vec2 cq, float cb) {\n  float bT = waveParams[0];\n  vec2 cr = cb * -cq;\n  float cs = bY(vNoiseUv) * cl;\n  vec3 ct = ce(co, cp + cr, cb + cs, .0);\n  vec3 cu = ce(co, cp + cr, cb + cs, .5);\n  vec3 cv = bZ(cn, ct.xy) * ct.z;\n  vec3 cw = bZ(cn, cu.xy) * cu.z;\n  vec3 cx = normalize(cv + cw);\n  cx.xy *= bT;\n  cx.z = sqrt(1. - dot(cx.xy, cx.xy));\n  return cx;\n}\nvec4 cy(vec2 cp, float cz) {\n  float cA = waveParams[1];\n  vec3 bM = cm(normalTexture, heightTexture, cp * cA, waterDir, cz);\n  float cB = bR(bM, waveParams[0]);\n  return vec4(bM, cB);\n}\nconst float cC = 3.141592653589793;\nconst float cD = 1. / cC;\nconst float cE = .3183098861837907;\nconst float cF = 1.570796326794897;\nconst float cG = .4;\nfloat cH = 2.2;\nvec3 cI(float cJ, vec3 cK, float cL) {\n  return cK + (cL - cK) * pow(1. - cJ, 5.);\n}\nfloat cM(float cN, float bu) {\n  float cO = bu * bu;\n  float cP = cN * cN;\n  float cQ = pow((cP * (cO - 1.) + 1.), cH) * cC;\n  return cO / cQ;\n}\nfloat cR(float cS) {\n  return .25 / (cS * cS);\n}\nvec3 cT(const vec3 x) {\n  return (x * (2.51 * x + .03)) / (x * (2.43 * x + .59) + .14);\n}\nconst float cU = 2.2;\nconst float cV = .4545454545;\nvec4 cW(vec4 d) {\n  return vec4(pow(d.rgb, vec3(cV)), d.w);\n}\nvec3 cX(vec3 d) {\n  return pow(d, vec3(cU));\n}\nconst vec3 cY = vec3(.02, 1., 5.);\nconst vec2 cZ = vec2(.02, .1);\nconst float bu = .06;\nconst float da = 1.7;\nconst vec3 db = vec3(0, .6, .9);\nconst vec3 dc = vec3(.72, .92, 1.);\nconst float dd = .65;\nconst float de = 300000.0;\nconst float df = 500000.0;\nconst float dg = .775;\nconst float dh = .8;\nvec3 di(in vec3 bS, in vec3 dj) {\n  \n#ifdef HAS_IBL_LIGHTING\nvec3 dk = reflect(-dj, bS);\n  return c(textureCube(specularPBR, dk), rgbmRange);\n#else\nreturn ambientColor;\n#endif\n}\nPBRShadingWater dl;\nvec3 dm(in PBRShadingWater dn, float bu, vec3 dp, float dq) {\n  vec3 dr = cI(dn.VdotH, dp, dq);\n  float ds = cM(dn.NdotH, bu);\n  float dt = cR(dn.LdotH);\n  float du = mix(bu + .045, bu + .385, 1. - dn.VdotH);\n  float dv = 1.2;\n  float dw = cM(dn.NdotH, du) * dv;\n  return ((ds + dw) * dt) * dr;\n}\nvec3 dx(float da, float dy, vec3 db, float dz) {\n  return da * (.075 * db * pow(dy, 4.) + 50. * pow(dy, 23.)) * dz;\n}\nvec3 dA(in float Z, in vec3 dB, in vec3 dC) {\n  float dD = pow((1. - Z), cY[2]);\n  return mix(dC, dB, dD);\n}\nvec3 dE(in vec3 bS, in vec3 dj, in vec3 dF, vec3 d, in vec3 dG, in vec3 dH, in float dI, float dJ, vec3 dK) {\n  float dL = 0.;\n  vec3 dM = cX(d);\n  vec3 bb = normalize(dF + dj);\n  dl.NdotL = clamp(dot(bS, dF), .0, 1.);\n  dl.NdotV = clamp(dot(bS, dj), .001, 1.);\n  dl.VdotN = clamp(dot(dj, bS), .001, 1.);\n  dl.NdotH = clamp(dot(bS, bb), .0, 1.);\n  dl.VdotH = clamp(dot(dj, bb), .0, 1.);\n  dl.LdotH = clamp(dot(dF, bb), .0, 1.);\n  float dN = max(dot(dH, dj), .0);\n  vec3 dO = cX(dc);\n  vec3 dP = cX(db);\n  vec3 dc = dA(dN, dO, dP);\n  float dQ = max(dot(dH, dF), .0);\n  float dR = .1 + dQ * .9;\n  dc *= dR;\n  float dS = clamp(dI, .8, 1.);\n  vec3 dT = cI(dl.VdotN, vec3(cY[0]), cY[1]);\n  vec3 dU = dT * dc * dS;\n  vec3 dV = dM * mix(dc, dQ * dG * cD, 2. / 3.) * dS;\n  vec3 dW = vec3(.0);\n  if(dN > .0 && dQ > .0) {\n    vec3 dX = dm(dl, bu, vec3(cZ[0]), cZ[1]);\n    vec3 dY = dG * cD * dI;\n    dW = dl.NdotL * dY * dX;\n  }\n  vec3 cB = vec3(.0);\n  if(dN > .0) {\n    cB = dx(da, dJ, db, dR);\n  }\n  vec3 dZ = vec3(.0);\n#ifdef HAS_SSR\nfloat ea = smoothstep(df, de, -dK.z);\n  mat4 eb = viewMatrix;\n  vec4 ec = vec4(dK.xyz, 1.);\n  vec3 ed = normalize(ec.xyz);\n  vec4 ee = eb * vec4(bS, .0);\n  vec3 ef = normalize(ee.xyz);\n  vec4 eg = eb * vec4(dH, .0);\n  float eh = pow(max(dot(-ed, eg.xyz), .0), cG);\n  vec3 ei = mix(eg.xyz, ef, eh);\n  vec3 ej = ssr(vec3(.0), vec3(1.), bu, normalize(ei), -normalize(vViewVertex.xyz));\n  if(ej.z > .0) {\n    vec2 ek = smoothstep(.3, .6, abs(vec2(.5) - ej.xy));\n    dL = dg * clamp(1. - 1.3 * ek.y, .0, 1.) * ea;\n    vec3 el = M(.0, ej.xy);\n    dZ = cX(el) * dL * dT.y * dd;\n  }\n#endif\nfloat em = mix(dh, dh * .5, dL);\n  return cT((1. - dL) * dU + dZ + dV * em + dW + cB);\n}\nvoid main() {\n  vec3 dH = bQ;\n  vec4 en = cy(vUv, timeElapsed);\n  vec3 bS = normalize(vTbnMatrix * en.xyz);\n  vec3 dj = -normalize(vPos - camPos);\n  vec3 dF = normalize(-lightDirection);\n#if defined(HAS_SHADOWING)\nfloat dI = shadow_computeShadow();\n#else\nfloat dI = 1.;\n#endif\nvec4 eo = viewMatrix * vec4(vPos, 1.);\n  vec4 ep = vec4(dE(bS, dj, dF, waterBaseColor.rgb, lightColor, dH, dI, en.w, eo.xyz), waterBaseColor.a);\n  gl_FragColor = cW(ep);\n  if(contrast != 1.) {\n    gl_FragColor = contrastMatrix(contrast) * gl_FragColor;\n  }\n  if(length(hsv) > .0) {\n    gl_FragColor = hsv_apply(gl_FragColor, hsv);\n  }\n}",
                defines: r,
                uniforms: i,
                extraCommandProps: a
            });
        }
        needClearStencil() {
            return !0;
        }
        getUniformValues(t, e) {
            const n = this.canvas, i = {
                projMatrix: t.projMatrix,
                projViewMatrix: t.projViewMatrix,
                viewMatrix: t.viewMatrix,
                outSize: [ n.width, n.height ],
                halton: [ 0, 0 ]
            };
            return this.setIncludeUniformValues(i, e), i;
        }
        wo(t, e) {
            const {iblTexes: n} = this.getIBLRes(), i = t.projViewMatrix, r = t.getLightManager();
            let s = r && r.getDirectionalLight() || {};
            const o = r && r.getAmbientLight() || {}, a = this.getSymbol(wl), l = this.Io = this.Io || [], h = {
                hdrHsv: o.hsv || [ 0, 0, 0 ],
                specularPBR: n && n.prefilterMap,
                rgbmRange: n && n.rgbmRange,
                ambientColor: o.color || [ .2, .2, .2 ],
                outSize: [ this.canvas.width, this.canvas.height ],
                projMatrix: t.projMatrix,
                projViewMatrix: i,
                viewMatrix: t.viewMatrix,
                cameraNearFar: [ t.cameraNear, t.cameraFar ],
                lightDirection: s.direction || bl.direction,
                lightColor: s.color || bl.color,
                camPos: t.cameraPosition,
                timeElapsed: a.animation ? (this.layer.getRenderer().getFrameTimestamp() || 0) / (1 / (a.waterSpeed || 1) * 1e4) : 0,
                normalTexture: this.To || this.ko,
                heightTexture: this.Fo || this.ko,
                waveParams: [ .09, a.uvScale || 3, .03, -.5 ],
                waterDir: Ml(l, a.waterDirection || 0),
                waterBaseColor: a.waterBaseColor || [ .1451, .2588, .4863, 1 ],
                contrast: a.contrast || 1,
                hsv: a.hsv || Al
            };
            return this.setIncludeUniformValues(h, e), e && e.ssr && e.ssr.renderUniforms && ns(h, e.ssr.renderUniforms), 
            h;
        }
        delete() {
            super.delete(), this.ko && (this.ko.destroy(), delete this.ko), this.To && this.To.destroy(), 
            this.Fo && this.Fo.destroy(), this.shader && this.shader.dispose(), this.Ao && this.Ao.dispose(), 
            this.Mo && (this.Mo.geometry.dispose(), this.Mo.material && this.Mo.material.dispose(), 
            this.Mo.dispose(), delete this.Mo), this.disposeIBLTextures();
        }
        createGround() {
            const t = new n.reshader.Plane;
            t.data.aTexCoord = new Uint8Array([ 0, 1, 1, 1, 0, 0, 1, 0 ]), t.generateBuffers(this.renderer.regl), 
            this.Mo = new n.reshader.Mesh(t, null, {
                castShadow: !1
            }), this._o = new n.reshader.Scene([ this.Mo ]);
        }
        transformWater() {
            const t = this.getMap(), e = n.GroundPainter.getGroundTransform(this.Mo.localTransform, t);
            this.Mo.setLocalTransform(e);
            const i = t._get2DExtentAtRes(t.getGLRes()), r = i.getWidth(), s = i.getHeight(), o = t.cameraLookAt, a = o[0] - r, l = o[1] + s, h = this.Po, c = a / h[0], u = l / h[1], f = c % 1, d = u % 1, p = .3737 * c % 1, y = .3737 * u % 1, m = i.getWidth() / h[0] * 2, g = i.getHeight() / h[1] * 2;
            this.Mo.setUniform("uvOffset", [ f, d ]), this.Mo.setUniform("noiseUvOffset", [ p, y ]), 
            this.Mo.setUniform("uvScale", [ m, -g ]);
        }
    }
    function Ml(t, e) {
        return e = function(t) {
            return Math.PI * t / 180;
        }(e), t[0] = Math.sin(e), t[1] = Math.cos(e), t;
    }
    const Sl = ts("fill", Ws);
    Sl.registerAt(Qi);
    const kl = ts("line", Xs);
    kl.registerAt(Qi);
    const Pl = ts("line-gradient", qs);
    Pl.registerAt(Qi);
    const Tl = ts("icon", ya);
    Tl.registerAt(Qi);
    const Ol = ts("text", Ua);
    Ol.registerAt(Qi);
    const Fl = ts("native-line", Za);
    Fl.registerAt(Qi);
    ts("native-point", Ya).registerAt(Qi);
    const Il = ts("phong", il);
    Il.registerAt(Qi);
    const Cl = ts("wireframe", sl);
    Cl.registerAt(Qi);
    const El = ts("lit", ll);
    El.registerAt(Qi);
    const Hl = ts("gltf-phong", vl);
    Hl.registerAt(Qi);
    const Dl = ts("gltf-lit", xl);
    Dl.registerAt(Qi);
    const Ll = ts("heatmap", class extends Vs {
        createFnTypeConfig(t, e) {
            const n = M(e.heatWeight), i = new Int16Array(1);
            return [ {
                attrName: "aWeight",
                symbolName: "heatWeight",
                type: Uint8Array,
                size: 1,
                evaluate: e => {
                    const r = n(t.getZoom(), e);
                    return i[0] = r, i[0];
                }
            } ];
        }
        createGeometry(t, e) {
            const n = super.createGeometry(t, e);
            return xs(n, this.getSymbolDef({
                index: 0
            }), this.getFnTypeConfig({
                index: 0
            })), n;
        }
        createMesh(t, e) {
            const i = this.getSymbol({
                index: 0
            }), r = {
                tileRatio: t.properties.tileRatio,
                dataResolution: t.properties.tileResolution
            };
            as(r, "heatmapIntensity", i, "heatmapIntensity", 1), as(r, "heatmapRadius", i, "heatmapRadius", 6), 
            as(r, "heatmapWeight", i, "heatmapWeight", 1), as(r, "heatmapOpacity", i, "heatmapOpacity", 1), 
            t.generateBuffers(this.regl);
            const s = new n.reshader.Material(r), o = new n.reshader.Mesh(t, s, {
                transparent: !0,
                castShadow: !1,
                picking: !0
            }), a = {};
            return t.data.aWeight && (a.HAS_HEAT_WEIGHT = 1), o.setDefines(a), o.setLocalTransform(e), 
            o;
        }
        callRenderer(t, e) {
            this.Co.render(this.scene, t, this.getRenderFBO(e));
        }
        getUniformValues(t) {
            const {projViewMatrix: e} = t;
            return {
                glScale: 1 / t.getGLScale(),
                resolution: t.getResolution(),
                projViewMatrix: e
            };
        }
        getHeatmapMeshes() {
            return this.scene.getMeshes();
        }
        delete() {
            super.delete(...arguments), this.Co.dispose(), delete this.Co;
        }
        init() {
            const t = this.regl;
            this.renderer = new n.reshader.Renderer(t);
            const e = this.layer.getRenderer().isEnableTileStencil(), i = {
                enable: !0,
                mask: 255,
                func: {
                    cmp: () => e ? "=" : "<=",
                    ref: (t, n) => e ? n.stencilRef : n.level,
                    mask: 255
                },
                op: {
                    fail: "keep",
                    zfail: "keep",
                    zpass: "replace"
                }
            }, r = this.getPolygonOffset(), s = this.getSymbols()[0];
            this.Co = new n.HeatmapProcess(this.regl, this.sceneConfig, this.layer, s.heatmapColor, i, r);
        }
    });
    Ll.registerAt(Qi);
    const Rl = ts("water", _l);
    Rl.registerAt(Qi), cr.registerPainter("lit", ll), cr.registerPainter("icon", ya), 
    cr.registerPainter("fill", Ws), cr.registerPainter("line", Xs), cr.registerPainter("line-gradient", qs), 
    cr.registerPainter("water", _l), Qi.VERSION = "0.63.8", cr.VERSION = "0.63.8";
    if (s.mat4.create(), s.transcoders) {
        const t = r.Map.VERSION;
        if (t.indexOf("1.0.0-beta") >= 0 || t.indexOf("1.0.0-alpha") >= 0) {
            const t = s.transcoders.inject(o);
            r.registerWorkerAdapter("@maptalks/vt", t);
        } else r.registerWorkerAdapter("@maptalks/vt", (function() {
            return s.transcoders.inject(o);
        }));
    } else r.registerWorkerAdapter("@maptalks/vt", o);
    t.FillPainter = Ws, t.FillPlugin = Sl, t.GLTFPhongPlugin = Hl, t.GLTFStandardPlugin = Dl, 
    t.GeoJSONVectorTileLayer = ar, t.HeatmapPlugin = Ll, t.IconPainter = ya, t.IconPlugin = Tl, 
    t.LineGradientPlugin = Pl, t.LinePainter = Xs, t.LinePlugin = kl, t.LineStringLayer = Ir, 
    t.LitPlugin = El, t.MapboxVectorTileLayer = sr, t.NativeLinePainter = Za, t.NativeLinePlugin = Fl, 
    t.NativePointPainter = Ya, t.PackUtil = Pi, t.PhongPainter = il, t.PhongPlugin = Il, 
    t.PointLayer = Fr, t.PolygonLayer = Cr, t.SYMBOLS_NEED_REBUILD_IN_VECTOR = Fi, t.SYMBOLS_NEED_REBUILD_IN_VT = Oi, 
    t.TextPainter = Ua, t.TextPlugin = Ol, t.Vector3DLayer = cr, t.VectorTileLayer = Qi, 
    t.VectorTileLayerRenderer = ji, t.WaterPlugin = Rl, t.WireframePainter = sl, t.WireframePlugin = Cl, 
    Object.defineProperty(t, "t", {
        value: !0
    }), "undefined" != typeof console && console.log("@maptalks/vt v0.63.8");
}));
