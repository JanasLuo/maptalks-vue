/*!
 * @maptalks/gl v0.67.6
 * LICENSE : UNLICENSED
 * (c) 2016-2022 maptalks.com
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('maptalks')) :
	typeof define === 'function' && define.amd ? define(['exports', 'maptalks'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.maptalksgl = {}, global.maptalks));
})(this, (function (exports, t$1) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var t__namespace = /*#__PURE__*/_interopNamespace(t$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var regl_min = {exports: {}};

	(function (module, exports) {
	(function(Z,ka){module.exports=ka();})(commonjsGlobal,function(){function Z(a,b){this.id=Db++;this.type=a;this.data=b;}function ka(a){if(0===a.length)return [];var b=a.charAt(0),c=a.charAt(a.length-1);if(1<a.length&&b===c&&('"'===b||"'"===b))return ['"'+a.substr(1,a.length-2).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'];if(b=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(a))return ka(a.substr(0,
	b.index)).concat(ka(b[1])).concat(ka(a.substr(b.index+b[0].length)));b=a.split(".");if(1===b.length)return ['"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'];a=[];for(c=0;c<b.length;++c)a=a.concat(ka(b[c]));return a}function cb(a){return "["+ka(a).join("][")+"]"}function db(a,b){if("function"===typeof a)return new Z(0,a);if("number"===typeof a||"boolean"===typeof a)return new Z(5,a);if(Array.isArray(a))return new Z(6,a.map(function(a,e){return db(a)}));if(a instanceof Z)return a}function Eb(){var a=
	{"":0},b=[""];return {id:function(c){var e=a[c];if(e)return e;e=a[c]=b.length;b.push(c);return e},str:function(a){return b[a]}}}function Fb(a,b,c){function e(){var b=window.innerWidth,e=window.innerHeight;a!==document.body&&(e=a.getBoundingClientRect(),b=e.right-e.left,e=e.bottom-e.top);f.width=c*b;f.height=c*e;K(f.style,{width:b+"px",height:e+"px"});}var f=document.createElement("canvas");K(f.style,{border:0,margin:0,padding:0,top:0,left:0});a.appendChild(f);a===document.body&&(f.style.position="absolute",
	K(a.style,{margin:0,padding:0}));var d;a!==document.body&&"function"===typeof ResizeObserver?(d=new ResizeObserver(function(){setTimeout(e);}),d.observe(a)):window.addEventListener("resize",e,!1);e();return {canvas:f,onDestroy:function(){d?d.disconnect():window.removeEventListener("resize",e);a.removeChild(f);}}}function Gb(a,b){function c(c){try{return a.getContext(c,b)}catch(f){return null}}return c("webgl")||c("experimental-webgl")||c("webgl-experimental")}function eb(a){return "string"===typeof a?
	a.split():a}function fb(a){return "string"===typeof a?document.querySelector(a):a}function Hb(a){var b=a||{},c,e,f,d;a={};var n=[],p=[],v="undefined"===typeof window?1:window.devicePixelRatio,k=!1,u=function(a){},r=function(){};"string"===typeof b?c=document.querySelector(b):"object"===typeof b&&("string"===typeof b.nodeName&&"function"===typeof b.appendChild&&"function"===typeof b.getBoundingClientRect?c=b:"function"===typeof b.drawArrays||"function"===typeof b.drawElements?(d=b,f=d.canvas):("gl"in
	b?d=b.gl:"canvas"in b?f=fb(b.canvas):"container"in b&&(e=fb(b.container)),"attributes"in b&&(a=b.attributes),"extensions"in b&&(n=eb(b.extensions)),"optionalExtensions"in b&&(p=eb(b.optionalExtensions)),"onDone"in b&&(u=b.onDone),"profile"in b&&(k=!!b.profile),"pixelRatio"in b&&(v=+b.pixelRatio)));c&&("canvas"===c.nodeName.toLowerCase()?f=c:e=c);if(!d){if(!f){c=Fb(e||document.body,u,v);if(!c)return null;f=c.canvas;r=c.onDestroy;}void 0===a.premultipliedAlpha&&(a.premultipliedAlpha=!0);d=Gb(f,a);}return d?
	{gl:d,canvas:f,container:e,extensions:n,optionalExtensions:p,pixelRatio:v,profile:k,onDone:u,onDestroy:r}:(r(),u("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Ib(a,b){function c(b){b=b.toLowerCase();var c;try{c=e[b]=a.getExtension(b);}catch(f){}return !!c}for(var e={},f=0;f<b.extensions.length;++f){var d=b.extensions[f];if(!c(d))return b.onDestroy(),b.onDone('"'+d+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),
	null}b.optionalExtensions.forEach(c);return {extensions:e,restore:function(){Object.keys(e).forEach(function(a){if(e[a]&&!c(a))throw Error("(regl): error restoring extension "+a);});}}}function S(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=b(e);return c}function gb(a){var b,c;b=(65535<a)<<4;a>>>=b;c=(255<a)<<3;a>>>=c;b|=c;c=(15<a)<<2;a>>>=c;b|=c;c=(3<a)<<1;return b|c|a>>>c>>1}function hb(){function a(a){a:{for(var b=16;268435456>=b;b*=16)if(a<=b){a=b;break a}a=0;}b=c[gb(a)>>2];return 0<b.length?b.pop():
	new ArrayBuffer(a)}function b(a){c[gb(a.byteLength)>>2].push(a);}var c=S(8,function(){return []});return {alloc:a,free:b,allocType:function(b,c){var d=null;switch(b){case 5120:d=new Int8Array(a(c),0,c);break;case 5121:d=new Uint8Array(a(c),0,c);break;case 5122:d=new Int16Array(a(2*c),0,c);break;case 5123:d=new Uint16Array(a(2*c),0,c);break;case 5124:d=new Int32Array(a(4*c),0,c);break;case 5125:d=new Uint32Array(a(4*c),0,c);break;case 5126:d=new Float32Array(a(4*c),0,c);break;default:return null}return d.length!==
	c?d.subarray(0,c):d},freeType:function(a){b(a.buffer);}}}function la(a){return !!a&&"object"===typeof a&&Array.isArray(a.shape)&&Array.isArray(a.stride)&&"number"===typeof a.offset&&a.shape.length===a.stride.length&&(Array.isArray(a.data)||P(a.data))}function ib(a,b,c,e,f,d){for(var n=0;n<b;++n)for(var p=a[n],v=0;v<c;++v)for(var k=p[v],u=0;u<e;++u)f[d++]=k[u];}function jb(a,b,c,e,f){for(var d=1,n=c+1;n<b.length;++n)d*=b[n];var p=b[c];if(4===b.length-c){var v=b[c+1],k=b[c+2];b=b[c+3];for(n=0;n<p;++n)ib(a[n],
	v,k,b,e,f),f+=d;}else for(n=0;n<p;++n)jb(a[n],b,c+1,e,f),f+=d;}function Ha(a){return Ia[Object.prototype.toString.call(a)]|0}function kb(a,b){for(var c=0;c<b.length;++c)a[c]=b[c];}function lb(a,b,c,e,f,d,n){for(var p=0,v=0;v<c;++v)for(var k=0;k<e;++k)a[p++]=b[f*v+d*k+n];}function Jb(a,b,c,e){function f(b){this.id=v++;this.buffer=a.createBuffer();this.type=b;this.usage=35044;this.byteLength=0;this.dimension=1;this.dtype=5121;this.persistentData=null;c.profile&&(this.stats={size:0});}function d(b,c,m){b.byteLength=
	c.byteLength;a.bufferData(b.type,c,m);}function n(a,b,c,g,h,e){a.usage=c;if(Array.isArray(b)){if(a.dtype=g||5126,0<b.length)if(Array.isArray(b[0])){h=mb(b);for(var l=g=1;l<h.length;++l)g*=h[l];a.dimension=g;b=Ua(b,h,a.dtype);d(a,b,c);e?a.persistentData=b:G.freeType(b);}else "number"===typeof b[0]?(a.dimension=h,h=G.allocType(a.dtype,b.length),kb(h,b),d(a,h,c),e?a.persistentData=h:G.freeType(h)):P(b[0])&&(a.dimension=b[0].length,a.dtype=g||Ha(b[0])||5126,b=Ua(b,[b.length,b[0].length],a.dtype),d(a,b,c),
	e?a.persistentData=b:G.freeType(b));}else if(P(b))a.dtype=g||Ha(b),a.dimension=h,d(a,b,c),e&&(a.persistentData=new Uint8Array(new Uint8Array(b.buffer)));else if(la(b)){h=b.shape;var f=b.stride,l=b.offset,t=0,ma=0,k=0,p=0;1===h.length?(t=h[0],ma=1,k=f[0],p=0):2===h.length&&(t=h[0],ma=h[1],k=f[0],p=f[1]);a.dtype=g||Ha(b.data)||5126;a.dimension=ma;h=G.allocType(a.dtype,t*ma);lb(h,b.data,t,ma,k,p,l);d(a,h,c);e?a.persistentData=h:G.freeType(h);}else b instanceof ArrayBuffer&&(a.dtype=5121,a.dimension=h,
	d(a,b,c),e&&(a.persistentData=new Uint8Array(new Uint8Array(b))));}function p(c){b.bufferCount--;e(c);a.deleteBuffer(c.buffer);c.buffer=null;delete k[c.id];}var v=0,k={};f.prototype.bind=function(){a.bindBuffer(this.type,this.buffer);};f.prototype.destroy=function(){p(this);};var u=[];c.profile&&(b.getTotalBufferSize=function(){var a=0;Object.keys(k).forEach(function(b){a+=k[b].stats.size;});return a});return {create:function(e,d,m,g){function h(b){var e=35044,t=null,d=0,r=0,f=1;Array.isArray(b)||P(b)||
	la(b)||b instanceof ArrayBuffer?t=b:"number"===typeof b?d=b|0:b&&("data"in b&&(t=b.data),"usage"in b&&(e=nb[b.usage]),"type"in b&&(r=Ja[b.type]),"dimension"in b&&(f=b.dimension|0),"length"in b&&(d=b.length|0));q.bind();t?n(q,t,e,r,f,g):(d&&a.bufferData(q.type,d,e),q.dtype=r||5121,q.usage=e,q.dimension=f,q.byteLength=d);c.profile&&(q.stats.size=q.byteLength*na[q.dtype]);return h}b.bufferCount++;var q=new f(d);k[q.id]=q;m||h(e);h._reglType="buffer";h._buffer=q;h.subdata=function(b,c){var e=(c||0)|0,
	d;q.bind();if(P(b)||b instanceof ArrayBuffer)a.bufferSubData(q.type,e,b);else if(Array.isArray(b)){if(0<b.length)if("number"===typeof b[0]){var r=G.allocType(q.dtype,b.length);kb(r,b);a.bufferSubData(q.type,e,r);G.freeType(r);}else if(Array.isArray(b[0])||P(b[0]))d=mb(b),r=Ua(b,d,q.dtype),a.bufferSubData(q.type,e,r),G.freeType(r);}else if(la(b)){d=b.shape;var g=b.stride,f=r=0,m=0,y=0;1===d.length?(r=d[0],f=1,m=g[0],y=0):2===d.length&&(r=d[0],f=d[1],m=g[0],y=g[1]);d=Array.isArray(b.data)?q.dtype:Ha(b.data);
	d=G.allocType(d,r*f);lb(d,b.data,r,f,m,y,b.offset);a.bufferSubData(q.type,e,d);G.freeType(d);}return h};c.profile&&(h.stats=q.stats);h.destroy=function(){p(q);};return h},createStream:function(a,b){var c=u.pop();c||(c=new f(a));c.bind();n(c,b,35040,0,1,!1);return c},destroyStream:function(a){u.push(a);},clear:function(){I(k).forEach(p);u.forEach(p);},getBuffer:function(a){return a&&a._buffer instanceof f?a._buffer:null},restore:function(){I(k).forEach(function(b){b.buffer=a.createBuffer();a.bindBuffer(b.type,
	b.buffer);a.bufferData(b.type,b.persistentData||b.byteLength,b.usage);});},_initBuffer:n}}function Kb(a,b,c,e){function f(a){this.id=v++;p[this.id]=this;this.buffer=a;this.primType=4;this.type=this.vertCount=0;}function d(d,e,f,g,h,q,l){d.buffer.bind();var k;e?((k=l)||P(e)&&(!la(e)||P(e.data))||(k=b.oes_element_index_uint?5125:5123),c._initBuffer(d.buffer,e,f,k,3)):(a.bufferData(34963,q,f),d.buffer.dtype=k||5121,d.buffer.usage=f,d.buffer.dimension=3,d.buffer.byteLength=q);k=l;if(!l){switch(d.buffer.dtype){case 5121:case 5120:k=
	5121;break;case 5123:case 5122:k=5123;break;case 5125:case 5124:k=5125;}d.buffer.dtype=k;}d.type=k;e=h;0>e&&(e=d.buffer.byteLength,5123===k?e>>=1:5125===k&&(e>>=2));d.vertCount=e;e=g;0>g&&(e=4,g=d.buffer.dimension,1===g&&(e=0),2===g&&(e=1),3===g&&(e=4));d.primType=e;}function n(a){e.elementsCount--;delete p[a.id];a.buffer.destroy();a.buffer=null;}var p={},v=0,k={uint8:5121,uint16:5123};b.oes_element_index_uint&&(k.uint32=5125);f.prototype.bind=function(){this.buffer.bind();};var u=[];return {create:function(a,
	b){function m(a){if(a)if("number"===typeof a)g(a),h.primType=4,h.vertCount=a|0,h.type=5121;else {var b=null,c=35044,e=-1,f=-1,r=0,p=0;if(Array.isArray(a)||P(a)||la(a))b=a;else if("data"in a&&(b=a.data),"usage"in a&&(c=nb[a.usage]),"primitive"in a&&(e=Ka[a.primitive]),"count"in a&&(f=a.count|0),"type"in a&&(p=k[a.type]),"length"in a)r=a.length|0;else if(r=f,5123===p||5122===p)r*=2;else if(5125===p||5124===p)r*=4;d(h,b,c,e,f,r,p);}else g(),h.primType=4,h.vertCount=0,h.type=5121;return m}var g=c.create(null,
	34963,!0),h=new f(g._buffer);e.elementsCount++;m(a);m._reglType="elements";m._elements=h;m.subdata=function(a,b){g.subdata(a,b);return m};m.destroy=function(){n(h);};return m},createStream:function(a){var b=u.pop();b||(b=new f(c.create(null,34963,!0,!1)._buffer));d(b,a,35040,-1,-1,0,0);return b},destroyStream:function(a){u.push(a);},getElements:function(a){return "function"===typeof a&&a._elements instanceof f?a._elements:null},clear:function(){I(p).forEach(n);}}}function ob(a){for(var b=G.allocType(5123,
	a.length),c=0;c<a.length;++c)if(isNaN(a[c]))b[c]=65535;else if(Infinity===a[c])b[c]=31744;else if(-Infinity===a[c])b[c]=64512;else {pb[0]=a[c];var e=Lb[0],f=e>>>31<<15,d=(e<<1>>>24)-127,e=e>>13&1023;b[c]=-24>d?f:-14>d?f+(e+1024>>-14-d):15<d?f+31744:f+(d+15<<10)+e;}return b}function ra(a){return Array.isArray(a)||P(a)}function sa(a){return "[object "+a+"]"}function qb(a){return Array.isArray(a)&&(0===a.length||"number"===typeof a[0])}function rb(a){return Array.isArray(a)&&0!==a.length&&ra(a[0])?!0:!1}
	function aa(a){return Object.prototype.toString.call(a)}function Va(a){if(!a)return !1;var b=aa(a);return 0<=Mb.indexOf(b)?!0:qb(a)||rb(a)||la(a)}function sb(a,b){36193===a.type?(a.data=ob(b),G.freeType(b)):a.data=b;}function La(a,b,c,e,f,d){a="undefined"!==typeof E[a]?E[a]:V[a]*za[b];d&&(a*=6);if(f){for(e=0;1<=c;)e+=a*c*c,c/=2;return e}return a*c*e}function Nb(a,b,c,e,f,d,n){function p(){this.format=this.internalformat=6408;this.type=5121;this.flipY=this.premultiplyAlpha=this.compressed=!1;this.unpackAlignment=
	1;this.colorSpace=37444;this.channels=this.height=this.width=0;}function v(a,b){a.internalformat=b.internalformat;a.format=b.format;a.type=b.type;a.compressed=b.compressed;a.premultiplyAlpha=b.premultiplyAlpha;a.flipY=b.flipY;a.unpackAlignment=b.unpackAlignment;a.colorSpace=b.colorSpace;a.width=b.width;a.height=b.height;a.channels=b.channels;}function k(a,b){if("object"===typeof b&&b){"premultiplyAlpha"in b&&(a.premultiplyAlpha=b.premultiplyAlpha);"flipY"in b&&(a.flipY=b.flipY);"alignment"in b&&(a.unpackAlignment=
	b.alignment);"colorSpace"in b&&(a.colorSpace=Ob[b.colorSpace]);"type"in b&&(a.type=N[b.type]);var c=a.width,e=a.height,d=a.channels,f=!1;"shape"in b?(c=b.shape[0],e=b.shape[1],3===b.shape.length&&(d=b.shape[2],f=!0)):("radius"in b&&(c=e=b.radius),"width"in b&&(c=b.width),"height"in b&&(e=b.height),"channels"in b&&(d=b.channels,f=!0));a.width=c|0;a.height=e|0;a.channels=d|0;c=!1;"format"in b&&(c=b.format,e=a.internalformat=F[c],a.format=W[e],c in N&&!("type"in b)&&(a.type=N[c]),c in ga&&(a.compressed=
	!0),c=!0);!f&&c?a.channels=V[a.format]:f&&!c&&a.channels!==Oa[a.format]&&(a.format=a.internalformat=Oa[a.channels]);}}function u(b){a.pixelStorei(37440,b.flipY);a.pixelStorei(37441,b.premultiplyAlpha);a.pixelStorei(37443,b.colorSpace);a.pixelStorei(3317,b.unpackAlignment);}function r(){p.call(this);this.yOffset=this.xOffset=0;this.data=null;this.needsFree=!1;this.element=null;this.needsCopy=!1;}function x(a,b){var c=null;Va(b)?c=b:b&&(k(a,b),"x"in b&&(a.xOffset=b.x|0),"y"in b&&(a.yOffset=b.y|0),Va(b.data)&&
	(c=b.data));if(b.copy){var e=f.viewportWidth,d=f.viewportHeight;a.width=a.width||e-a.xOffset;a.height=a.height||d-a.yOffset;a.needsCopy=!0;}else if(!c)a.width=a.width||1,a.height=a.height||1,a.channels=a.channels||4;else if(P(c))a.channels=a.channels||4,a.data=c,"type"in b||5121!==a.type||(a.type=Ia[Object.prototype.toString.call(c)]|0);else if(qb(c)){a.channels=a.channels||4;e=c;d=e.length;switch(a.type){case 5121:case 5123:case 5125:case 5126:d=G.allocType(a.type,d);d.set(e);a.data=d;break;case 36193:a.data=
	ob(e);}a.alignment=1;a.needsFree=!0;}else if(la(c)){e=c.data;Array.isArray(e)||5121!==a.type||(a.type=Ia[Object.prototype.toString.call(e)]|0);var d=c.shape,h=c.stride,y,l,g,t;3===d.length?(g=d[2],t=h[2]):t=g=1;y=d[0];l=d[1];d=h[0];h=h[1];a.alignment=1;a.width=y;a.height=l;a.channels=g;a.format=a.internalformat=Oa[g];a.needsFree=!0;y=t;c=c.offset;g=a.width;t=a.height;l=a.channels;for(var z=G.allocType(36193===a.type?5126:a.type,g*t*l),D=0,ha=0;ha<t;++ha)for(var oa=0;oa<g;++oa)for(var Wa=0;Wa<l;++Wa)z[D++]=
	e[d*oa+h*ha+y*Wa+c];sb(a,z);}else if(aa(c)===Xa||aa(c)===Ya||aa(c)===ub)aa(c)===Xa||aa(c)===Ya?a.element=c:a.element=c.canvas,a.width=a.element.width,a.height=a.element.height,a.channels=4;else if(aa(c)===vb)a.element=c,a.width=c.width,a.height=c.height,a.channels=4;else if(aa(c)===wb)a.element=c,a.width=c.naturalWidth,a.height=c.naturalHeight,a.channels=4;else if(aa(c)===xb)a.element=c,a.width=c.videoWidth,a.height=c.videoHeight,a.channels=4;else if(rb(c)){e=a.width||c[0].length;d=a.height||c.length;
	h=a.channels;h=ra(c[0][0])?h||c[0][0].length:h||1;y=Qa.shape(c);g=1;for(t=0;t<y.length;++t)g*=y[t];g=G.allocType(36193===a.type?5126:a.type,g);Qa.flatten(c,y,"",g);sb(a,g);a.alignment=1;a.width=e;a.height=d;a.channels=h;a.format=a.internalformat=Oa[h];a.needsFree=!0;}}function m(b,c,d,h,g){var y=b.element,f=b.data,t=b.internalformat,l=b.format,k=b.type,z=b.width,D=b.height;u(b);y?a.texSubImage2D(c,g,d,h,l,k,y):b.compressed?a.compressedTexSubImage2D(c,g,d,h,t,z,D,f):b.needsCopy?(e(),a.copyTexSubImage2D(c,
	g,d,h,b.xOffset,b.yOffset,z,D)):a.texSubImage2D(c,g,d,h,z,D,l,k,f);}function g(){return S.pop()||new r}function h(a){a.needsFree&&G.freeType(a.data);r.call(a);S.push(a);}function q(){p.call(this);this.genMipmaps=!1;this.mipmapHint=4352;this.mipmask=0;this.images=Array(16);}function l(a,b,c){var d=a.images[0]=g();a.mipmask=1;d.width=a.width=b;d.height=a.height=c;d.channels=a.channels=4;}function Q(a,b){var c=null;if(Va(b))c=a.images[0]=g(),v(c,a),x(c,b),a.mipmask=1;else if(k(a,b),Array.isArray(b.mipmap))for(var d=
	b.mipmap,e=0;e<d.length;++e)c=a.images[e]=g(),v(c,a),c.width>>=e,c.height>>=e,x(c,d[e]),a.mipmask|=1<<e;else c=a.images[0]=g(),v(c,a),x(c,b),a.mipmask=1;v(a,a.images[0]);}function t(b,c){for(var d=b.images,h=0;h<d.length&&d[h];++h){var g=d[h],y=c,f=h,t=g.element,l=g.data,k=g.internalformat,z=g.format,D=g.type,ha=g.width,oa=g.height;u(g);t?a.texImage2D(y,f,z,z,D,t):g.compressed?a.compressedTexImage2D(y,f,k,ha,oa,0,l):g.needsCopy?(e(),a.copyTexImage2D(y,f,z,g.xOffset,g.yOffset,ha,oa,0)):a.texImage2D(y,
	f,z,ha,oa,0,z,D,l||null);}}function ma(){var a=Y.pop()||new q;p.call(a);for(var b=a.mipmask=0;16>b;++b)a.images[b]=null;return a}function ya(a){for(var b=a.images,c=0;c<b.length;++c)b[c]&&h(b[c]),b[c]=null;Y.push(a);}function w(){this.magFilter=this.minFilter=9728;this.wrapT=this.wrapS=33071;this.anisotropic=1;this.genMipmaps=!1;this.mipmapHint=4352;}function H(a,b){"min"in b&&(a.minFilter=Aa[b.min],0<=Pb.indexOf(a.minFilter)&&!("faces"in b)&&(a.genMipmaps=!0));"mag"in b&&(a.magFilter=T[b.mag]);var c=
	a.wrapS,d=a.wrapT;if("wrap"in b){var e=b.wrap;"string"===typeof e?c=d=ia[e]:Array.isArray(e)&&(c=ia[e[0]],d=ia[e[1]]);}else "wrapS"in b&&(c=ia[b.wrapS]),"wrapT"in b&&(d=ia[b.wrapT]);a.wrapS=c;a.wrapT=d;"anisotropic"in b&&(a.anisotropic=b.anisotropic);if("mipmap"in b){c=!1;switch(typeof b.mipmap){case "string":a.mipmapHint=C[b.mipmap];c=a.genMipmaps=!0;break;case "boolean":c=a.genMipmaps=b.mipmap;break;case "object":a.genMipmaps=!1,c=!0;}!c||"min"in b||(a.minFilter=9984);}}function M(c,d){a.texParameteri(d,
	10241,c.minFilter);a.texParameteri(d,10240,c.magFilter);a.texParameteri(d,10242,c.wrapS);a.texParameteri(d,10243,c.wrapT);b.ext_texture_filter_anisotropic&&a.texParameteri(d,34046,c.anisotropic);c.genMipmaps&&(a.hint(33170,c.mipmapHint),a.generateMipmap(d));}function y(b){p.call(this);this.mipmask=0;this.internalformat=6408;this.id=Qb++;this.refCount=1;this.target=b;this.texture=a.createTexture();this.unit=-1;this.bindCount=0;this.texInfo=new w;n.profile&&(this.stats={size:0});}function U(b){a.activeTexture(33984);
	a.bindTexture(b.target,b.texture);}function wa(){var b=X[0];b?a.bindTexture(b.target,b.texture):a.bindTexture(3553,null);}function B(b){var c=b.texture,e=b.unit,g=b.target;0<=e&&(a.activeTexture(33984+e),a.bindTexture(g,null),X[e]=null);a.deleteTexture(c);b.texture=null;b.params=null;b.pixels=null;b.refCount=0;delete ea[b.id];d.textureCount--;}var C={"don't care":4352,"dont care":4352,nice:4354,fast:4353},ia={repeat:10497,clamp:33071,mirror:33648},T={nearest:9728,linear:9729},Aa=K({mipmap:9987,"nearest mipmap nearest":9984,
	"linear mipmap nearest":9985,"nearest mipmap linear":9986,"linear mipmap linear":9987},T),Ob={none:0,browser:37444},N={uint8:5121,rgba4:32819,rgb565:33635,"rgb5 a1":32820},F={alpha:6406,luminance:6409,"luminance alpha":6410,rgb:6407,rgba:6408,rgba4:32854,"rgb5 a1":32855,rgb565:36194},ga={};b.ext_srgb&&(F.srgb=35904,F.srgba=35906);b.oes_texture_float&&(N.float32=N["float"]=5126);b.oes_texture_half_float&&(N.float16=N["half float"]=36193);b.webgl_depth_texture&&(K(F,{depth:6402,"depth stencil":34041}),
	K(N,{uint16:5123,uint32:5125,"depth stencil":34042}));b.webgl_compressed_texture_s3tc&&K(ga,{"rgb s3tc dxt1":33776,"rgba s3tc dxt1":33777,"rgba s3tc dxt3":33778,"rgba s3tc dxt5":33779});b.webgl_compressed_texture_atc&&K(ga,{"rgb atc":35986,"rgba atc explicit alpha":35987,"rgba atc interpolated alpha":34798});b.webgl_compressed_texture_pvrtc&&K(ga,{"rgb pvrtc 4bppv1":35840,"rgb pvrtc 2bppv1":35841,"rgba pvrtc 4bppv1":35842,"rgba pvrtc 2bppv1":35843});b.webgl_compressed_texture_etc1&&(ga["rgb etc1"]=
	36196);var J=Array.prototype.slice.call(a.getParameter(34467));Object.keys(ga).forEach(function(a){var b=ga[a];0<=J.indexOf(b)&&(F[a]=b);});var E=Object.keys(F);c.textureFormats=E;var ca=[];Object.keys(F).forEach(function(a){ca[F[a]]=a;});var L=[];Object.keys(N).forEach(function(a){L[N[a]]=a;});var Fa=[];Object.keys(T).forEach(function(a){Fa[T[a]]=a;});var pa=[];Object.keys(Aa).forEach(function(a){pa[Aa[a]]=a;});var qa=[];Object.keys(ia).forEach(function(a){qa[ia[a]]=a;});var W=E.reduce(function(a,c){var d=
	F[c];6409===d||6406===d||6409===d||6410===d||6402===d||34041===d||b.ext_srgb&&(35904===d||35906===d)?a[d]=d:32855===d||0<=c.indexOf("rgba")?a[d]=6408:a[d]=6407;return a},{}),S=[],Y=[],Qb=0,ea={},fa=c.maxTextureUnits,X=Array(fa).map(function(){return null});K(y.prototype,{bind:function(){this.bindCount+=1;var b=this.unit;if(0>b){for(var c=0;c<fa;++c){var e=X[c];if(e){if(0<e.bindCount)continue;e.unit=-1;}X[c]=this;b=c;break}n.profile&&d.maxTextureUnits<b+1&&(d.maxTextureUnits=b+1);this.unit=b;a.activeTexture(33984+
	b);a.bindTexture(this.target,this.texture);}return b},unbind:function(){--this.bindCount;},decRef:function(){0>=--this.refCount&&B(this);}});n.profile&&(d.getTotalTextureSize=function(){var a=0;Object.keys(ea).forEach(function(b){a+=ea[b].stats.size;});return a});return {create2D:function(b,c){function e(a,b){var c=f.texInfo;w.call(c);var d=ma();"number"===typeof a?"number"===typeof b?l(d,a|0,b|0):l(d,a|0,a|0):a?(H(c,a),Q(d,a)):l(d,1,1);c.genMipmaps&&(d.mipmask=(d.width<<1)-1);f.mipmask=d.mipmask;v(f,
	d);f.internalformat=d.internalformat;e.width=d.width;e.height=d.height;U(f);t(d,3553);M(c,3553);wa();ya(d);n.profile&&(f.stats.size=La(f.internalformat,f.type,d.width,d.height,c.genMipmaps,!1));e.format=ca[f.internalformat];e.type=L[f.type];e.mag=Fa[c.magFilter];e.min=pa[c.minFilter];e.wrapS=qa[c.wrapS];e.wrapT=qa[c.wrapT];return e}var f=new y(3553);ea[f.id]=f;d.textureCount++;e(b,c);e.subimage=function(a,b,c,d){b|=0;c|=0;d|=0;var y=g();v(y,f);y.width=0;y.height=0;x(y,a);y.width=y.width||(f.width>>
	d)-b;y.height=y.height||(f.height>>d)-c;U(f);m(y,3553,b,c,d);wa();h(y);return e};e.resize=function(b,c){var d=b|0,g=c|0||d;if(d===f.width&&g===f.height)return e;e.width=f.width=d;e.height=f.height=g;U(f);for(var y=0;f.mipmask>>y;++y){var h=d>>y,z=g>>y;if(!h||!z)break;a.texImage2D(3553,y,f.format,h,z,0,f.format,f.type,null);}wa();n.profile&&(f.stats.size=La(f.internalformat,f.type,d,g,!1,!1));return e};e._reglType="texture2d";e._texture=f;n.profile&&(e.stats=f.stats);e.destroy=function(){f.decRef();};
	return e},createCube:function(b,c,e,f,p,r){function C(a,b,c,d,e,f){var g,da=B.texInfo;w.call(da);for(g=0;6>g;++g)q[g]=ma();if("number"===typeof a||!a)for(a=a|0||1,g=0;6>g;++g)l(q[g],a,a);else if("object"===typeof a)if(b)Q(q[0],a),Q(q[1],b),Q(q[2],c),Q(q[3],d),Q(q[4],e),Q(q[5],f);else if(H(da,a),k(B,a),"faces"in a)for(a=a.faces,g=0;6>g;++g)v(q[g],B),Q(q[g],a[g]);else for(g=0;6>g;++g)Q(q[g],a);v(B,q[0]);B.mipmask=da.genMipmaps?(q[0].width<<1)-1:q[0].mipmask;B.internalformat=q[0].internalformat;C.width=
	q[0].width;C.height=q[0].height;U(B);for(g=0;6>g;++g)t(q[g],34069+g);M(da,34067);wa();n.profile&&(B.stats.size=La(B.internalformat,B.type,C.width,C.height,da.genMipmaps,!0));C.format=ca[B.internalformat];C.type=L[B.type];C.mag=Fa[da.magFilter];C.min=pa[da.minFilter];C.wrapS=qa[da.wrapS];C.wrapT=qa[da.wrapT];for(g=0;6>g;++g)ya(q[g]);return C}var B=new y(34067);ea[B.id]=B;d.cubeCount++;var q=Array(6);C(b,c,e,f,p,r);C.subimage=function(a,b,c,d,e){c|=0;d|=0;e|=0;var f=g();v(f,B);f.width=0;f.height=0;
	x(f,b);f.width=f.width||(B.width>>e)-c;f.height=f.height||(B.height>>e)-d;U(B);m(f,34069+a,c,d,e);wa();h(f);return C};C.resize=function(b){b|=0;if(b!==B.width){C.width=B.width=b;C.height=B.height=b;U(B);for(var c=0;6>c;++c)for(var d=0;B.mipmask>>d;++d)a.texImage2D(34069+c,d,B.format,b>>d,b>>d,0,B.format,B.type,null);wa();n.profile&&(B.stats.size=La(B.internalformat,B.type,C.width,C.height,!1,!0));return C}};C._reglType="textureCube";C._texture=B;n.profile&&(C.stats=B.stats);C.destroy=function(){B.decRef();};
	return C},clear:function(){for(var b=0;b<fa;++b)a.activeTexture(33984+b),a.bindTexture(3553,null),X[b]=null;I(ea).forEach(B);d.cubeCount=0;d.textureCount=0;},getTexture:function(a){return null},restore:function(){for(var b=0;b<fa;++b){var c=X[b];c&&(c.bindCount=0,c.unit=-1,X[b]=null);}I(ea).forEach(function(b){b.texture=a.createTexture();a.bindTexture(b.target,b.texture);for(var c=0;32>c;++c)if(0!==(b.mipmask&1<<c))if(3553===b.target)a.texImage2D(3553,c,b.internalformat,b.width>>c,b.height>>c,0,b.internalformat,
	b.type,null);else for(var d=0;6>d;++d)a.texImage2D(34069+d,c,b.internalformat,b.width>>c,b.height>>c,0,b.internalformat,b.type,null);M(b.texInfo,b.target);});},refresh:function(){for(var b=0;b<fa;++b){var c=X[b];c&&(c.bindCount=0,c.unit=-1,X[b]=null);a.activeTexture(33984+b);a.bindTexture(3553,null);a.bindTexture(34067,null);}}}}function Rb(a,b,c,e,f,d){function n(a,b,c){this.target=a;this.texture=b;this.renderbuffer=c;var d=a=0;b?(a=b.width,d=b.height):c&&(a=c.width,d=c.height);this.width=a;this.height=
	d;}function p(a){a&&(a.texture&&a.texture._texture.decRef(),a.renderbuffer&&a.renderbuffer._renderbuffer.decRef());}function v(a,b,c){a&&(a.texture?a.texture._texture.refCount+=1:a.renderbuffer._renderbuffer.refCount+=1);}function k(b,c){c&&(c.texture?a.framebufferTexture2D(36160,b,c.target,c.texture._texture.texture,0):a.framebufferRenderbuffer(36160,b,36161,c.renderbuffer._renderbuffer.renderbuffer));}function u(a){var b=3553,c=null,d=null,e=a;"object"===typeof a&&(e=a.data,"target"in a&&(b=a.target|
	0));a=e._reglType;"texture2d"===a?c=e:"textureCube"===a?c=e:"renderbuffer"===a&&(d=e,b=36161);return new n(b,c,d)}function r(a,b,c,d,g){if(c)return a=e.create2D({width:a,height:b,format:d,type:g}),a._texture.refCount=0,new n(3553,a,null);a=f.create({width:a,height:b,format:d});a._renderbuffer.refCount=0;return new n(36161,null,a)}function x(a){return a&&(a.texture||a.renderbuffer)}function m(a,b,c){a&&(a.texture?a.texture.resize(b,c):a.renderbuffer&&a.renderbuffer.resize(b,c),a.width=b,a.height=c);}
	function g(){this.id=H++;M[this.id]=this;this.framebuffer=a.createFramebuffer();this.height=this.width=0;this.colorAttachments=[];this.depthStencilAttachment=this.stencilAttachment=this.depthAttachment=null;}function h(a){a.colorAttachments.forEach(p);p(a.depthAttachment);p(a.stencilAttachment);p(a.depthStencilAttachment);}function q(b){a.deleteFramebuffer(b.framebuffer);b.framebuffer=null;d.framebufferCount--;delete M[b.id];}function l(b){var d;a.bindFramebuffer(36160,b.framebuffer);var e=b.colorAttachments;
	for(d=0;d<e.length;++d)k(36064+d,e[d]);for(d=e.length;d<c.maxColorAttachments;++d)a.framebufferTexture2D(36160,36064+d,3553,null,0);a.framebufferTexture2D(36160,33306,3553,null,0);a.framebufferTexture2D(36160,36096,3553,null,0);a.framebufferTexture2D(36160,36128,3553,null,0);k(36096,b.depthAttachment);k(36128,b.stencilAttachment);k(33306,b.depthStencilAttachment);a.checkFramebufferStatus(36160);a.isContextLost();a.bindFramebuffer(36160,t.next?t.next.framebuffer:null);t.cur=t.next;a.getError();}function Q(a,
	b){function c(a,b){var d,g=0,f=0,t=!0,k=!0;d=null;var m=!0,q="rgba",p="uint8",y=1,n=null,Q=null,pa=null,M=!1;if("number"===typeof a)g=a|0,f=b|0||g;else if(a){"shape"in a?(f=a.shape,g=f[0],f=f[1]):("radius"in a&&(g=f=a.radius),"width"in a&&(g=a.width),"height"in a&&(f=a.height));if("color"in a||"colors"in a)d=a.color||a.colors;if(!d){"colorCount"in a&&(y=a.colorCount|0);"colorTexture"in a&&(m=!!a.colorTexture,q="rgba4");if("colorType"in a&&(p=a.colorType,!m))if("half float"===p||"float16"===
	p)q="rgba16f";else if("float"===p||"float32"===p)q="rgba32f";"colorFormat"in a&&(q=a.colorFormat,0<=ma.indexOf(q)?m=!0:0<=ya.indexOf(q)&&(m=!1));}if("depthTexture"in a||"depthStencilTexture"in a)M=!(!a.depthTexture&&!a.depthStencilTexture);"depth"in a&&("boolean"===typeof a.depth?t=a.depth:(n=a.depth,k=!1));"stencil"in a&&("boolean"===typeof a.stencil?k=a.stencil:(Q=a.stencil,t=!1));"depthStencil"in a&&("boolean"===typeof a.depthStencil?t=k=a.depthStencil:(pa=a.depthStencil,k=t=!1));}else g=f=1;var W=
	null,H=null,U=null,w=null;if(Array.isArray(d))W=d.map(u);else if(d)W=[u(d)];else for(W=Array(y),d=0;d<y;++d)W[d]=r(g,f,m,q,p);g=g||W[0].width;f=f||W[0].height;n?H=u(n):t&&!k&&(H=r(g,f,M,"depth","uint32"));Q?U=u(Q):k&&!t&&(U=r(g,f,!1,"stencil","uint8"));pa?w=u(pa):!n&&!Q&&k&&t&&(w=r(g,f,M,"depth stencil","depth stencil"));t=null;for(d=0;d<W.length;++d)v(W[d]),W[d]&&W[d].texture&&(k=Za[W[d].texture._texture.format]*Ra[W[d].texture._texture.type],null===t&&(t=k));v(H);v(U);v(w);h(e);
	e.width=g;e.height=f;e.colorAttachments=W;e.depthAttachment=H;e.stencilAttachment=U;e.depthStencilAttachment=w;c.color=W.map(x);c.depth=x(H);c.stencil=x(U);c.depthStencil=x(w);c.width=e.width;c.height=e.height;l(e);return c}var e=new g;d.framebufferCount++;c(a,b);return K(c,{resize:function(a,b){var d=Math.max(a|0,1),f=Math.max(b|0||d,1);if(d===e.width&&f===e.height)return c;for(var g=e.colorAttachments,h=0;h<g.length;++h)m(g[h],d,f);m(e.depthAttachment,d,f);m(e.stencilAttachment,d,f);m(e.depthStencilAttachment,
	d,f);e.width=c.width=d;e.height=c.height=f;l(e);return c},_reglType:"framebuffer",_framebuffer:e,destroy:function(){q(e);h(e);},use:function(a){t.setFBO({framebuffer:c},a);}})}var t={cur:null,next:null,dirty:!1,setFBO:null},ma=["rgba"],ya=["rgba4","rgb565","rgb5 a1"];b.ext_srgb&&ya.push("srgba");b.ext_color_buffer_half_float&&ya.push("rgba16f","rgb16f");b.webgl_color_buffer_float&&ya.push("rgba32f");var w=["uint8"];b.oes_texture_half_float&&w.push("half float","float16");b.oes_texture_float&&w.push("float",
	"float32");var H=0,M={};return K(t,{getFramebuffer:function(a){return "function"===typeof a&&"framebuffer"===a._reglType&&(a=a._framebuffer,a instanceof g)?a:null},create:Q,createCube:function(a){function b(a){var d,f={color:null},g=0,h=null;d="rgba";var t="uint8",l=1;if("number"===typeof a)g=a|0;else if(a){"shape"in a?g=a.shape[0]:("radius"in a&&(g=a.radius|0),"width"in a?g=a.width|0:"height"in a&&(g=a.height|0));if("color"in a||"colors"in a)h=a.color||a.colors;h||("colorCount"in
	a&&(l=a.colorCount|0),"colorType"in a&&(t=a.colorType),"colorFormat"in a&&(d=a.colorFormat));"depth"in a&&(f.depth=a.depth);"stencil"in a&&(f.stencil=a.stencil);"depthStencil"in a&&(f.depthStencil=a.depthStencil);}else g=1;if(h)if(Array.isArray(h))for(a=[],d=0;d<h.length;++d)a[d]=h[d];else a=[h];else for(a=Array(l),h={radius:g,format:d,type:t},d=0;d<l;++d)a[d]=e.createCube(h);f.color=Array(a.length);for(d=0;d<a.length;++d)l=a[d],g=g||l.width,f.color[d]={target:34069,data:a[d]};for(d=0;6>d;++d){for(l=
	0;l<a.length;++l)f.color[l].target=34069+d;0<d&&(f.depth=c[0].depth,f.stencil=c[0].stencil,f.depthStencil=c[0].depthStencil);if(c[d])c[d](f);else c[d]=Q(f);}return K(b,{width:g,height:g,color:a})}var c=Array(6);b(a);return K(b,{faces:c,resize:function(a){var d=a|0;if(d===b.width)return b;var e=b.color;for(a=0;a<e.length;++a)e[a].resize(d);for(a=0;6>a;++a)c[a].resize(d);b.width=b.height=d;return b},_reglType:"framebufferCube",destroy:function(){c.forEach(function(a){a.destroy();});}})},clear:function(){I(M).forEach(q);},
	restore:function(){t.cur=null;t.next=null;t.dirty=!0;I(M).forEach(function(b){b.framebuffer=a.createFramebuffer();l(b);});}})}function $a(){this.w=this.z=this.y=this.x=this.state=0;this.buffer=null;this.size=0;this.normalized=!1;this.type=5126;this.divisor=this.stride=this.offset=0;}function Sb(a,b,c,e,f,d,n){function p(a){if(a!==q.currentVAO){var c=b.oes_vertex_array_object;a?c.bindVertexArrayOES(a.vao):c.bindVertexArrayOES(null);q.currentVAO=a;}}function v(c){if(c!==q.currentVAO){if(c)c.bindAttrs();
	else {for(var d=b.angle_instanced_arrays,e=0;e<m.length;++e){var f=m[e];f.buffer?(a.enableVertexAttribArray(e),f.buffer.bind(),a.vertexAttribPointer(e,f.size,f.type,f.normalized,f.stride,f.offfset),d&&f.divisor&&d.vertexAttribDivisorANGLE(e,f.divisor)):(a.disableVertexAttribArray(e),a.vertexAttrib4f(e,f.x,f.y,f.z,f.w));}n.elements?a.bindBuffer(34963,n.elements.buffer.buffer):a.bindBuffer(34963,null);}q.currentVAO=c;}}function k(){I(h).forEach(function(a){a.destroy();});}function u(){this.id=++g;this.attributes=
	[];this.elements=null;this.ownsElements=!1;this.offset=this.count=0;this.instances=-1;this.primitive=4;var a=b.oes_vertex_array_object;this.vao=a?a.createVertexArrayOES():null;h[this.id]=this;this.buffers=[];}function r(){b.oes_vertex_array_object&&I(h).forEach(function(a){a.refresh();});}var x=c.maxAttributes,m=Array(x);for(c=0;c<x;++c)m[c]=new $a;var g=0,h={},q={Record:$a,scope:{},state:m,currentVAO:null,targetVAO:null,restore:b.oes_vertex_array_object?r:function(){},createVAO:function(a){function b(a){var e;
	Array.isArray(a)?(e=a,c.elements&&c.ownsElements&&c.elements.destroy(),c.elements=null,c.ownsElements=!1,c.offset=0,c.count=0,c.instances=-1,c.primitive=4):(a.elements?(e=a.elements,c.ownsElements?("function"===typeof e&&"elements"===e._reglType?c.elements.destroy():c.elements(e),c.ownsElements=!1):d.getElements(a.elements)?(c.elements=a.elements,c.ownsElements=!1):(c.elements=d.create(a.elements),c.ownsElements=!0)):(c.elements=null,c.ownsElements=!1),e=a.attributes,c.offset=0,c.count=-1,c.instances=
	-1,c.primitive=4,c.elements&&(c.count=c.elements._elements.vertCount,c.primitive=c.elements._elements.primType),"offset"in a&&(c.offset=a.offset|0),"count"in a&&(c.count=a.count|0),"instances"in a&&(c.instances=a.instances|0),"primitive"in a&&(c.primitive=Ka[a.primitive]));a={};var g=c.attributes;g.length=e.length;for(var h=0;h<e.length;++h){var l=e[h],k=g[h]=new $a,q=l.data||l;if(Array.isArray(q)||P(q)||la(q)){var m;c.buffers[h]&&(m=c.buffers[h],P(q)&&m._buffer.byteLength>=q.byteLength?m.subdata(q):
	(m.destroy(),c.buffers[h]=null));c.buffers[h]||(m=c.buffers[h]=f.create(l,34962,!1,!0));k.buffer=f.getBuffer(m);k.size=k.buffer.dimension|0;k.normalized=!1;k.type=k.buffer.dtype;k.offset=0;k.stride=0;k.divisor=0;k.state=1;a[h]=1;}else f.getBuffer(l)?(k.buffer=f.getBuffer(l),k.size=k.buffer.dimension|0,k.normalized=!1,k.type=k.buffer.dtype,k.offset=0,k.stride=0,k.divisor=0,k.state=1):f.getBuffer(l.buffer)?(k.buffer=f.getBuffer(l.buffer),k.size=(+l.size||k.buffer.dimension)|0,k.normalized=!!l.normalized||
	!1,k.type="type"in l?Ja[l.type]:k.buffer.dtype,k.offset=(l.offset||0)|0,k.stride=(l.stride||0)|0,k.divisor=(l.divisor||0)|0,k.state=1):"x"in l&&(k.x=+l.x||0,k.y=+l.y||0,k.z=+l.z||0,k.w=+l.w||0,k.state=2);}for(m=0;m<c.buffers.length;++m)!a[m]&&c.buffers[m]&&(c.buffers[m].destroy(),c.buffers[m]=null);c.refresh();return b}var c=new u;e.vaoCount+=1;b.destroy=function(){for(var a=0;a<c.buffers.length;++a)c.buffers[a]&&c.buffers[a].destroy();c.buffers.length=0;c.ownsElements&&(c.elements.destroy(),c.elements=
	null,c.ownsElements=!1);c.destroy();};b._vao=c;b._reglType="vao";return b(a)},getVAO:function(a){return "function"===typeof a&&a._vao?a._vao:null},destroyBuffer:function(b){for(var c=0;c<m.length;++c){var d=m[c];d.buffer===b&&(a.disableVertexAttribArray(c),d.buffer=null);}},setVAO:b.oes_vertex_array_object?p:v,clear:b.oes_vertex_array_object?k:function(){}};u.prototype.bindAttrs=function(){for(var c=b.angle_instanced_arrays,e=this.attributes,f=0;f<e.length;++f){var g=e[f];g.buffer?(a.enableVertexAttribArray(f),
	a.bindBuffer(34962,g.buffer.buffer),a.vertexAttribPointer(f,g.size,g.type,g.normalized,g.stride,g.offset),c&&g.divisor&&c.vertexAttribDivisorANGLE(f,g.divisor)):(a.disableVertexAttribArray(f),a.vertexAttrib4f(f,g.x,g.y,g.z,g.w));}for(c=e.length;c<x;++c)a.disableVertexAttribArray(c);(c=d.getElements(this.elements))?a.bindBuffer(34963,c.buffer.buffer):a.bindBuffer(34963,null);};u.prototype.refresh=function(){var a=b.oes_vertex_array_object;a&&(a.bindVertexArrayOES(this.vao),this.bindAttrs(),q.currentVAO=
	null,a.bindVertexArrayOES(null));};u.prototype.destroy=function(){if(this.vao){var a=b.oes_vertex_array_object;this===q.currentVAO&&(q.currentVAO=null,a.bindVertexArrayOES(null));a.deleteVertexArrayOES(this.vao);this.vao=null;}this.ownsElements&&(this.elements.destroy(),this.elements=null,this.ownsElements=!1);h[this.id]&&(delete h[this.id],--e.vaoCount);};return q}function Tb(a,b,c,e){function f(a,b,c,d){this.name=a;this.id=b;this.location=c;this.info=d;}function d(a,b){for(var c=0;c<a.length;++c)if(a[c].id===
	b.id){a[c].location=b.location;return}a.push(b);}function n(c,d,e){e=35632===c?k:u;var f=e[d];if(!f){var m=b.str(d),f=a.createShader(c);a.shaderSource(f,m);a.compileShader(f);e[d]=f;}return f}function p(a,b){this.id=m++;this.fragId=a;this.vertId=b;this.program=null;this.uniforms=[];this.attributes=[];this.refCount=1;e.profile&&(this.stats={uniformsCount:0,attributesCount:0});}function v(c,h,k){var m;m=n(35632,c.fragId);var p=n(35633,c.vertId);h=c.program=a.createProgram();a.attachShader(h,m);a.attachShader(h,
	p);if(k)for(m=0;m<k.length;++m)p=k[m],a.bindAttribLocation(h,p[0],p[1]);a.linkProgram(h);p=a.getProgramParameter(h,35718);e.profile&&(c.stats.uniformsCount=p);var r=c.uniforms;for(m=0;m<p;++m)if(k=a.getActiveUniform(h,m)){if(1<k.size)for(var v=0;v<k.size;++v){var u=k.name.replace("[0]","["+v+"]");d(r,new f(u,b.id(u),a.getUniformLocation(h,u),k));}v=k.name;1<k.size&&(v=v.replace("[0]",""));d(r,new f(v,b.id(v),a.getUniformLocation(h,v),k));}p=a.getProgramParameter(h,35721);e.profile&&(c.stats.attributesCount=
	p);c=c.attributes;for(m=0;m<p;++m)(k=a.getActiveAttrib(h,m))&&d(c,new f(k.name,b.id(k.name),a.getAttribLocation(h,k.name),k));}var k={},u={},r={},x=[],m=0;e.profile&&(c.getMaxUniformsCount=function(){var a=0;x.forEach(function(b){b.stats.uniformsCount>a&&(a=b.stats.uniformsCount);});return a},c.getMaxAttributesCount=function(){var a=0;x.forEach(function(b){b.stats.attributesCount>a&&(a=b.stats.attributesCount);});return a});return {clear:function(){var b=a.deleteShader.bind(a);I(k).forEach(b);k={};I(u).forEach(b);
	u={};x.forEach(function(b){a.deleteProgram(b.program);});x.length=0;r={};c.shaderCount=0;},program:function(b,d,e,f){var m=r[d];m||(m=r[d]={});var n=m[b];if(n&&(n.refCount++,!f))return n;var w=new p(d,b);c.shaderCount++;v(w,e,f);n||(m[b]=w);x.push(w);return K(w,{destroy:function(){w.refCount--;if(0>=w.refCount){a.deleteProgram(w.program);var b=x.indexOf(w);x.splice(b,1);c.shaderCount--;}0>=m[w.vertId].refCount&&(a.deleteShader(u[w.vertId]),delete u[w.vertId],delete r[w.fragId][w.vertId]);Object.keys(r[w.fragId]).length||
	(a.deleteShader(k[w.fragId]),delete k[w.fragId],delete r[w.fragId]);}})},restore:function(){k={};u={};for(var a=0;a<x.length;++a)v(x[a],null,x[a].attributes.map(function(a){return [a.location,a.name]}));},shader:n,frag:-1,vert:-1}}function Ub(a,b,c,e,f,d,n){function p(d){var f;f=null===b.next?5121:b.next.colorAttachments[0].texture._texture.type;var p=0,v=0,m=e.framebufferWidth,g=e.framebufferHeight,h=null;P(d)?h=d:d&&(p=d.x|0,v=d.y|0,m=(d.width||e.framebufferWidth-p)|0,g=(d.height||e.framebufferHeight-
	v)|0,h=d.data||null);c();d=m*g*4;h||(5121===f?h=new Uint8Array(d):5126===f&&(h=h||new Float32Array(d)));a.pixelStorei(3333,4);a.readPixels(p,v,m,g,6408,f,h);return h}function v(a){var c;b.setFBO({framebuffer:a.framebuffer},function(){c=p(a);});return c}return function(a){return a&&"framebuffer"in a?v(a):p(a)}}function Ba(a){return Array.prototype.slice.call(a)}function Ca(a){return Ba(a).join("")}function Vb(){function a(){var a=[],b=[];return K(function(){a.push.apply(a,Ba(arguments));},{def:function(){var d=
	"v"+c++;b.push(d);0<arguments.length&&(a.push(d,"="),a.push.apply(a,Ba(arguments)),a.push(";"));return d},toString:function(){return Ca([0<b.length?"var "+b.join(",")+";":"",Ca(a)])}})}function b(){function b(a,e){d(a,e,"=",c.def(a,e),";");}var c=a(),d=a(),e=c.toString,f=d.toString;return K(function(){c.apply(c,Ba(arguments));},{def:c.def,entry:c,exit:d,save:b,set:function(a,d,e){b(a,d);c(a,d,"=",e,";");},toString:function(){return e()+f()}})}var c=0,e=[],f=[],d=a(),n={};return {global:d,link:function(a){for(var b=
	0;b<f.length;++b)if(f[b]===a)return e[b];b="g"+c++;e.push(b);f.push(a);return b},block:a,proc:function(a,c){function d(){var a="a"+e.length;e.push(a);return a}var e=[];c=c||0;for(var f=0;f<c;++f)d();var f=b(),x=f.toString;return n[a]=K(f,{arg:d,toString:function(){return Ca(["function(",e.join(),"){",x(),"}"])}})},scope:b,cond:function(){var a=Ca(arguments),c=b(),d=b(),e=c.toString,f=d.toString;return K(c,{then:function(){c.apply(c,Ba(arguments));return this},"else":function(){d.apply(d,Ba(arguments));
	return this},toString:function(){var b=f();b&&(b="else{"+b+"}");return Ca(["if(",a,"){",e(),"}",b])}})},compile:function(){var a=['"use strict";',d,"return {"];Object.keys(n).forEach(function(b){a.push('"',b,'":',n[b].toString(),",");});a.push("}");var b=Ca(a).replace(/;/g,";\n").replace(/}/g,"}\n").replace(/{/g,"{\n");return Function.apply(null,e.concat(b)).apply(null,f)}}}function Sa(a){return Array.isArray(a)||P(a)||la(a)}function yb(a){return a.sort(function(a,c){return "viewport"===a?-1:"viewport"===
	c?1:a<c?-1:1})}function J(a,b,c,e){this.thisDep=a;this.contextDep=b;this.propDep=c;this.append=e;}function xa(a){return a&&!(a.thisDep||a.contextDep||a.propDep)}function w(a){return new J(!1,!1,!1,a)}function L(a,b){var c=a.type;if(0===c)return c=a.data.length,new J(!0,1<=c,2<=c,b);if(4===c)return c=a.data,new J(c.thisDep,c.contextDep,c.propDep,b);if(5===c)return new J(!1,!1,!1,b);if(6===c){for(var e=c=!1,f=!1,d=0;d<a.data.length;++d){var n=a.data[d];1===n.type?f=!0:2===n.type?e=!0:3===n.type?c=!0:
	0===n.type?(c=!0,n=n.data,1<=n&&(e=!0),2<=n&&(f=!0)):4===n.type&&(c=c||n.data.thisDep,e=e||n.data.contextDep,f=f||n.data.propDep);}return new J(c,e,f,b)}return new J(3===c,2===c,1===c,b)}function Wb(a,b,c,e,f,d,n,p,v,k,u,r,x,m,g){function h(a){return a.replace(".","_")}function q(a,b,c){var d=h(a);Na.push(a);Ea[d]=ta[d]=!!c;ua[d]=b;}function l(a,b,c){var d=h(a);Na.push(a);Array.isArray(c)?(ta[d]=c.slice(),Ea[d]=c.slice()):ta[d]=Ea[d]=c;va[d]=b;}function Q(){var a=Vb(),c=a.link,d=a.global;a.id=sa++;a.batchId=
	"0";var e=c(tb),f=a.shared={props:"a0"};Object.keys(tb).forEach(function(a){f[a]=d.def(e,".",a);});var g=a.next={},da=a.current={};Object.keys(va).forEach(function(a){Array.isArray(ta[a])&&(g[a]=d.def(f.next,".",a),da[a]=d.def(f.current,".",a));});var A=a.constants={};Object.keys(Pa).forEach(function(a){A[a]=d.def(JSON.stringify(Pa[a]));});a.invoke=function(b,d){switch(d.type){case 0:var e=["this",f.context,f.props,a.batchId];return b.def(c(d.data),".call(",e.slice(0,Math.max(d.data.length+1,4)),")");
	case 1:return b.def(f.props,d.data);case 2:return b.def(f.context,d.data);case 3:return b.def("this",d.data);case 4:return d.data.append(a,b),d.data.ref;case 5:return d.data.toString();case 6:return d.data.map(function(c){return a.invoke(b,c)})}};a.attribCache={};var ba={};a.scopeAttrib=function(a){a=b.id(a);if(a in ba)return ba[a];var d=k.scope[a];d||(d=k.scope[a]=new ea);return ba[a]=c(d)};return a}function t(a){var b=a["static"];a=a.dynamic;var c;if("profile"in b){var d=!!b.profile;c=w(function(a,
	b){return d});c.enable=d;}else if("profile"in a){var e=a.profile;c=L(e,function(a,b){return a.invoke(b,e)});}return c}function G(a,b){var c=a["static"],d=a.dynamic;if("framebuffer"in c){var e=c.framebuffer;return e?(e=p.getFramebuffer(e),w(function(a,b){var c=a.link(e),d=a.shared;b.set(d.framebuffer,".next",c);d=d.context;b.set(d,".framebufferWidth",c+".width");b.set(d,".framebufferHeight",c+".height");return c})):w(function(a,b){var c=a.shared;b.set(c.framebuffer,".next","null");c=c.context;b.set(c,
	".framebufferWidth",c+".drawingBufferWidth");b.set(c,".framebufferHeight",c+".drawingBufferHeight");return "null"})}if("framebuffer"in d){var f=d.framebuffer;return L(f,function(a,b){var c=a.invoke(b,f),d=a.shared,e=d.framebuffer,c=b.def(e,".getFramebuffer(",c,")");b.set(e,".next",c);d=d.context;b.set(d,".framebufferWidth",c+"?"+c+".width:"+d+".drawingBufferWidth");b.set(d,".framebufferHeight",c+"?"+c+".height:"+d+".drawingBufferHeight");return c})}return null}function E(a,b,c){function d(a){if(a in
	e){var c=e[a];a=!0;var z=c.x|0,g=c.y|0,h,da;"width"in c?h=c.width|0:a=!1;"height"in c?da=c.height|0:a=!1;return new J(!a&&b&&b.thisDep,!a&&b&&b.contextDep,!a&&b&&b.propDep,function(a,b){var d=a.shared.context,e=h;"width"in c||(e=b.def(d,".","framebufferWidth","-",z));var f=da;"height"in c||(f=b.def(d,".","framebufferHeight","-",g));return [z,g,e,f]})}if(a in f){var ha=f[a];a=L(ha,function(a,b){var c=a.invoke(b,ha),d=a.shared.context,e=b.def(c,".x|0"),f=b.def(c,".y|0"),z=b.def('"width" in ',c,"?",c,
	".width|0:","(",d,".","framebufferWidth","-",e,")"),c=b.def('"height" in ',c,"?",c,".height|0:","(",d,".","framebufferHeight","-",f,")");return [e,f,z,c]});b&&(a.thisDep=a.thisDep||b.thisDep,a.contextDep=a.contextDep||b.contextDep,a.propDep=a.propDep||b.propDep);return a}return b?new J(b.thisDep,b.contextDep,b.propDep,function(a,b){var c=a.shared.context;return [0,0,b.def(c,".","framebufferWidth"),b.def(c,".","framebufferHeight")]}):null}var e=a["static"],f=a.dynamic;if(a=d("viewport")){var g=a;a=new J(a.thisDep,
	a.contextDep,a.propDep,function(a,b){var c=g.append(a,b),d=a.shared.context;b.set(d,".viewportWidth",c[2]);b.set(d,".viewportHeight",c[3]);return c});}return {viewport:a,scissor_box:d("scissor.box")}}function P(a,b){var c=a["static"];if("string"===typeof c.frag&&"string"===typeof c.vert){if(0<Object.keys(b.dynamic).length)return null;var c=b["static"],d=Object.keys(c);if(0<d.length&&"number"===typeof c[d[0]]){for(var e=[],f=0;f<d.length;++f)e.push([c[d[f]]|0,d[f]]);return e}}return null}function H(a,
	c,d){function e(a){if(a in f){var c=b.id(f[a]);a=w(function(){return c});a.id=c;return a}if(a in g){var d=g[a];return L(d,function(a,b){var c=a.invoke(b,d);return b.def(a.shared.strings,".id(",c,")")})}return null}var f=a["static"],g=a.dynamic,h=e("frag"),A=e("vert"),ba=null;xa(h)&&xa(A)?(ba=u.program(A.id,h.id,null,d),a=w(function(a,b){return a.link(ba)})):a=new J(h&&h.thisDep||A&&A.thisDep,h&&h.contextDep||A&&A.contextDep,h&&h.propDep||A&&A.propDep,function(a,b){var c=a.shared.shader,d;d=h?h.append(a,
	b):b.def(c,".","frag");var e;e=A?A.append(a,b):b.def(c,".","vert");return b.def(c+".program("+e+","+d+")")});return {frag:h,vert:A,progVar:a,program:ba}}function M(a,b){function c(a,b){if(a in e){var d=e[a]|0;b?g.offset=d:g.instances=d;return w(function(a,c){b&&(a.OFFSET=d);return d})}if(a in f){var z=f[a];return L(z,function(a,c){var d=a.invoke(c,z);b&&(a.OFFSET=d);return d})}if(b){if(ba)return w(function(a,b){return a.OFFSET=0});if(h)return new J(A.thisDep,A.contextDep,A.propDep,function(a,b){return b.def(a.shared.vao+
	".currentVAO?"+a.shared.vao+".currentVAO.offset:0")})}else if(h)return new J(A.thisDep,A.contextDep,A.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.vao+".currentVAO.instances:-1")});return null}var e=a["static"],f=a.dynamic,g={},h=!1,A=function(){if("vao"in e){var a=e.vao;null!==a&&null===k.getVAO(a)&&(a=k.createVAO(a));h=!0;g.vao=a;return w(function(b){var c=k.getVAO(a);return c?b.link(c):"null"})}if("vao"in f){h=!0;var b=f.vao;return L(b,function(a,c){var d=a.invoke(c,
	b);return c.def(a.shared.vao+".getVAO("+d+")")})}return null}(),ba=!1,O=function(){if("elements"in e){var a=e.elements;g.elements=a;if(Sa(a)){var b=g.elements=d.create(a,!0),a=d.getElements(b);ba=!0;}else a&&(a=d.getElements(a),ba=!0);b=w(function(b,c){if(a){var d=b.link(a);return b.ELEMENTS=d}return b.ELEMENTS=null});b.value=a;return b}if("elements"in f){ba=!0;var c=f.elements;return L(c,function(a,b){var d=a.shared,e=d.isBufferArgs,d=d.elements,f=a.invoke(b,c),z=b.def("null"),e=b.def(e,"(",f,")"),
	f=a.cond(e).then(z,"=",d,".createStream(",f,");")["else"](z,"=",d,".getElements(",f,");");b.entry(f);b.exit(a.cond(e).then(d,".destroyStream(",z,");"));return a.ELEMENTS=z})}return h?new J(A.thisDep,A.contextDep,A.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.elements+".getElements("+a.shared.vao+".currentVAO.elements):null")}):null}(),ja=c("offset",!0),m=function(){if("primitive"in e){var a=e.primitive;g.primitive=a;return w(function(b,c){return Ka[a]})}if("primitive"in
	f){var b=f.primitive;return L(b,function(a,c){var d=a.constants.primTypes,e=a.invoke(c,b);return c.def(d,"[",e,"]")})}return ba?xa(O)?O.value?w(function(a,b){return b.def(a.ELEMENTS,".primType")}):w(function(){return 4}):new J(O.thisDep,O.contextDep,O.propDep,function(a,b){var c=a.ELEMENTS;return b.def(c,"?",c,".primType:",4)}):h?new J(A.thisDep,A.contextDep,A.propDep,function(a,b){return b.def(a.shared.vao+".currentVAO?"+a.shared.vao+".currentVAO.primitive:4")}):null}(),p=function(){if("count"in
	e){var a=e.count|0;g.count=a;return w(function(){return a})}if("count"in f){var b=f.count;return L(b,function(a,c){return a.invoke(c,b)})}return ba?xa(O)?O?ja?new J(ja.thisDep,ja.contextDep,ja.propDep,function(a,b){return b.def(a.ELEMENTS,".vertCount-",a.OFFSET)}):w(function(a,b){return b.def(a.ELEMENTS,".vertCount")}):w(function(){return -1}):new J(O.thisDep||ja.thisDep,O.contextDep||ja.contextDep,O.propDep||ja.propDep,function(a,b){var c=a.ELEMENTS;return a.OFFSET?b.def(c,"?",c,".vertCount-",a.OFFSET,
	":-1"):b.def(c,"?",c,".vertCount:-1")}):h?new J(A.thisDep,A.contextDep,A.propDep,function(a,b){return b.def(a.shared.vao,".currentVAO?",a.shared.vao,".currentVAO.count:-1")}):null}(),l=c("instances",!1);return {elements:O,primitive:m,count:p,instances:l,offset:ja,vao:A,vaoActive:h,elementsActive:ba,"static":g}}function y(a,b){var c=a["static"],d=a.dynamic,e={};Na.forEach(function(a){function b(z,g){if(a in c){var D=z(c[a]);e[f]=w(function(){return D});}else if(a in d){var h=d[a];e[f]=L(h,function(a,
	b){return g(a,b,a.invoke(b,h))});}}var f=h(a);switch(a){case "cull.enable":case "blend.enable":case "dither":case "stencil.enable":case "depth.enable":case "scissor.enable":case "polygonOffset.enable":case "sample.alpha":case "sample.enable":case "depth.mask":return b(function(a){return a},function(a,b,c){return c});case "depth.func":return b(function(a){return ab[a]},function(a,b,c){return b.def(a.constants.compareFuncs,"[",c,"]")});case "depth.range":return b(function(a){return a},function(a,b,c){a=
	b.def("+",c,"[0]");b=b.def("+",c,"[1]");return [a,b]});case "blend.func":return b(function(a){return [Ga["srcRGB"in a?a.srcRGB:a.src],Ga["dstRGB"in a?a.dstRGB:a.dst],Ga["srcAlpha"in a?a.srcAlpha:a.src],Ga["dstAlpha"in a?a.dstAlpha:a.dst]]},function(a,b,c){function d(a,e){return b.def('"',a,e,'" in ',c,"?",c,".",a,e,":",c,".",a)}a=a.constants.blendFuncs;var e=d("src","RGB"),f=d("dst","RGB"),e=b.def(a,"[",e,"]"),z=b.def(a,"[",d("src","Alpha"),"]"),f=b.def(a,"[",f,"]");a=b.def(a,"[",d("dst","Alpha"),"]");
	return [e,f,z,a]});case "blend.equation":return b(function(a){if("string"===typeof a)return [fa[a],fa[a]];if("object"===typeof a)return [fa[a.rgb],fa[a.alpha]]},function(a,b,c){var d=a.constants.blendEquations,e=b.def(),f=b.def();a=a.cond("typeof ",c,'==="string"');a.then(e,"=",f,"=",d,"[",c,"];");a["else"](e,"=",d,"[",c,".rgb];",f,"=",d,"[",c,".alpha];");b(a);return [e,f]});case "blend.color":return b(function(a){return S(4,function(b){return +a[b]})},function(a,b,c){return S(4,function(a){return b.def("+",
	c,"[",a,"]")})});case "stencil.mask":return b(function(a){return a|0},function(a,b,c){return b.def(c,"|0")});case "stencil.func":return b(function(a){return [ab[a.cmp||"keep"],a.ref||0,"mask"in a?a.mask:-1]},function(a,b,c){a=b.def('"cmp" in ',c,"?",a.constants.compareFuncs,"[",c,".cmp]",":",7680);var d=b.def(c,".ref|0");b=b.def('"mask" in ',c,"?",c,".mask|0:-1");return [a,d,b]});case "stencil.opFront":case "stencil.opBack":return b(function(b){return ["stencil.opBack"===a?1029:1028,Ta[b.fail||"keep"],
	Ta[b.zfail||"keep"],Ta[b.zpass||"keep"]]},function(b,c,d){function e(a){return c.def('"',a,'" in ',d,"?",f,"[",d,".",a,"]:",7680)}var f=b.constants.stencilOps;return ["stencil.opBack"===a?1029:1028,e("fail"),e("zfail"),e("zpass")]});case "polygonOffset.offset":return b(function(a){return [a.factor|0,a.units|0]},function(a,b,c){a=b.def(c,".factor|0");b=b.def(c,".units|0");return [a,b]});case "cull.face":return b(function(a){var b=0;"front"===a?b=1028:"back"===a&&(b=1029);return b},function(a,b,c){return b.def(c,
	'==="front"?',1028,":",1029)});case "lineWidth":return b(function(a){return a},function(a,b,c){return c});case "frontFace":return b(function(a){return zb[a]},function(a,b,c){return b.def(c+'==="cw"?2304:2305')});case "colorMask":return b(function(a){return a.map(function(a){return !!a})},function(a,b,c){return S(4,function(a){return "!!"+c+"["+a+"]"})});case "sample.coverage":return b(function(a){return ["value"in a?a.value:1,!!a.invert]},function(a,b,c){a=b.def('"value" in ',c,"?+",c,".value:1");b=
	b.def("!!",c,".invert");return [a,b]})}});return e}function U(a,b){var c=a["static"],d=a.dynamic,e={};Object.keys(c).forEach(function(a){var b=c[a],d;if("number"===typeof b||"boolean"===typeof b)d=w(function(){return b});else if("function"===typeof b){var f=b._reglType;if("texture2d"===f||"textureCube"===f)d=w(function(a){return a.link(b)});else if("framebuffer"===f||"framebufferCube"===f)d=w(function(a){return a.link(b.color[0])});}else ra(b)&&(d=w(function(a){return a.global.def("[",S(b.length,function(a){return b[a]}),
	"]")}));d.value=b;e[a]=d;});Object.keys(d).forEach(function(a){var b=d[a];e[a]=L(b,function(a,c){return a.invoke(c,b)});});return e}function wa(a,c){var d=a["static"],e=a.dynamic,g={};Object.keys(d).forEach(function(a){var c=d[a],e=b.id(a),z=new ea;if(Sa(c))z.state=1,z.buffer=f.getBuffer(f.create(c,34962,!1,!0)),z.type=0;else {var D=f.getBuffer(c);if(D)z.state=1,z.buffer=D,z.type=0;else if("constant"in c){var h=c.constant;z.buffer="null";z.state=2;"number"===typeof h?z.x=h:Da.forEach(function(a,b){b<
	h.length&&(z[a]=h[b]);});}else {var D=Sa(c.buffer)?f.getBuffer(f.create(c.buffer,34962,!1,!0)):f.getBuffer(c.buffer),k=c.offset|0,m=c.stride|0,oa=c.size|0,p=!!c.normalized,l=0;"type"in c&&(l=Ja[c.type]);c=c.divisor|0;z.buffer=D;z.state=1;z.size=oa;z.normalized=p;z.type=l||D.dtype;z.offset=k;z.stride=m;z.divisor=c;}}g[a]=w(function(a,b){var c=a.attribCache;if(e in c)return c[e];var d={isStream:!1};Object.keys(z).forEach(function(a){d[a]=z[a];});z.buffer&&(d.buffer=a.link(z.buffer),d.type=d.type||d.buffer+
	".dtype");return c[e]=d});});Object.keys(e).forEach(function(a){var b=e[a];g[a]=L(b,function(a,c){function d(a){c(D[a],"=",e,".",a,"|0;");}var e=a.invoke(c,b),f=a.shared,z=a.constants,g=f.isBufferArgs,f=f.buffer,D={isStream:c.def(!1)},h=new ea;h.state=1;Object.keys(h).forEach(function(a){D[a]=c.def(""+h[a]);});var k=D.buffer,m=D.type;c("if(",g,"(",e,")){",D.isStream,"=true;",k,"=",f,".createStream(",34962,",",e,");",m,"=",k,".dtype;","}else{",k,"=",f,".getBuffer(",e,");","if(",k,"){",m,"=",k,".dtype;",
	'}else if("constant" in ',e,"){",D.state,"=",2,";","if(typeof "+e+'.constant === "number"){',D[Da[0]],"=",e,".constant;",Da.slice(1).map(function(a){return D[a]}).join("="),"=0;","}else{",Da.map(function(a,b){return D[a]+"="+e+".constant.length>"+b+"?"+e+".constant["+b+"]:0;"}).join(""),"}}else{","if(",g,"(",e,".buffer)){",k,"=",f,".createStream(",34962,",",e,".buffer);","}else{",k,"=",f,".getBuffer(",e,".buffer);","}",m,'="type" in ',e,"?",z.glTypes,"[",e,".type]:",k,".dtype;",D.normalized,"=!!",
	e,".normalized;");d("size");d("offset");d("stride");d("divisor");c("}}");c.exit("if(",D.isStream,"){",f,".destroyStream(",k,");","}");return D});});return g}function B(a){var b=a["static"],c=a.dynamic,d={};Object.keys(b).forEach(function(a){var c=b[a];d[a]=w(function(a,b){return "number"===typeof c||"boolean"===typeof c?""+c:a.link(c)});});Object.keys(c).forEach(function(a){var b=c[a];d[a]=L(b,function(a,c){return a.invoke(c,b)});});return d}function C(a,b,d,e,f){function g(a){var b=p[a];b&&(ja[a]=b);}
	var m=P(a,b),A=G(a),p=E(a,A),O=M(a),ja=y(a),l=H(a,f,m);g("viewport");g(h("scissor.box"));var n=0<Object.keys(ja).length,A={framebuffer:A,draw:O,shader:l,state:ja,dirty:n,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};A.profile=t(a);A.uniforms=U(d);A.drawVAO=A.scopeVAO=O.vao;if(!A.drawVAO&&l.program&&!m&&c.angle_instanced_arrays&&O["static"].elements){var q=!0;a=l.program.attributes.map(function(a){a=b["static"][a];q=q&&!!a;return a});if(q&&0<a.length){var r=k.getVAO(k.createVAO({attributes:a,
	elements:O["static"].elements}));A.drawVAO=new J(null,null,null,function(a,b){return a.link(r)});A.useVAO=!0;}}m?A.useVAO=!0:A.attributes=wa(b);A.context=B(e);return A}function ia(a,b,c){var d=a.shared.context,e=a.scope();Object.keys(c).forEach(function(f){b.save(d,"."+f);var g=c[f].append(a,b);Array.isArray(g)?e(d,".",f,"=[",g.join(),"];"):e(d,".",f,"=",g,";");});b(e);}function T(a,b,c,d){var e=a.shared,f=e.gl,g=e.framebuffer,h;Ma&&(h=b.def(e.extensions,".webgl_draw_buffers"));var k=a.constants,
	e=k.drawBuffer,k=k.backBuffer;a=c?c.append(a,b):b.def(g,".next");d||b("if(",a,"!==",g,".cur){");b("if(",a,"){",f,".bindFramebuffer(",36160,",",a,".framebuffer);");Ma&&b(h,".drawBuffersWEBGL(",e,"[",a,".colorAttachments.length]);");b("}else{",f,".bindFramebuffer(",36160,",null);");Ma&&b(h,".drawBuffersWEBGL(",k,");");b("}",g,".cur=",a,";");d||b("}");}function Aa(a,b,c){var d=a.shared,e=d.gl,f=a.current,g=a.next,k=d.current,m=d.next,O=a.cond(k,".dirty");Na.forEach(function(b){b=h(b);if(!(b in c.state)){var d,
	D;if(b in g){d=g[b];D=f[b];var l=S(ta[b].length,function(a){return O.def(d,"[",a,"]")});O(a.cond(l.map(function(a,b){return a+"!=="+D+"["+b+"]"}).join("||")).then(e,".",va[b],"(",l,");",l.map(function(a,b){return D+"["+b+"]="+a}).join(";"),";"));}else d=O.def(m,".",b),l=a.cond(d,"!==",k,".",b),O(l),b in ua?l(a.cond(d).then(e,".enable(",ua[b],");")["else"](e,".disable(",ua[b],");"),k,".",b,"=",d,";"):l(e,".",va[b],"(",d,");",k,".",b,"=",d,";");}});0===Object.keys(c.state).length&&O(k,".dirty=false;");
	b(O);}function I(a,b,c,d){var e=a.shared,f=a.current,g=e.current,h=e.gl;yb(Object.keys(c)).forEach(function(e){var k=c[e];if(!d||d(k)){var m=k.append(a,b);if(ua[e]){var l=ua[e];xa(k)?m?b(h,".enable(",l,");"):b(h,".disable(",l,");"):b(a.cond(m).then(h,".enable(",l,");")["else"](h,".disable(",l,");"));b(g,".",e,"=",m,";");}else if(ra(m)){var p=f[e];b(h,".",va[e],"(",m,");",m.map(function(a,b){return p+"["+b+"]="+a}).join(";"),";");}else b(h,".",va[e],"(",m,");",g,".",e,"=",m,";");}});}function N(a,b){X&&
	(a.instancing=b.def(a.shared.extensions,".angle_instanced_arrays"));}function F(a,b,c,d,e){function f(){return "undefined"===typeof performance?"Date.now()":"performance.now()"}function g(a){r=b.def();a(r,"=",f(),";");"string"===typeof e?a(p,".count+=",e,";"):a(p,".count++;");m&&(d?(u=b.def(),a(u,"=",n,".getNumPendingQueries();")):a(n,".beginQuery(",p,");"));}function h(a){a(p,".cpuTime+=",f(),"-",r,";");m&&(d?a(n,".pushScopeStats(",u,",",n,".getNumPendingQueries(),",p,");"):a(n,".endQuery();"));}function k(a){var c=
	b.def(q,".profile");b(q,".profile=",a,";");b.exit(q,".profile=",c,";");}var l=a.shared,p=a.stats,q=l.current,n=l.timer;c=c.profile;var r,u;if(c){if(xa(c)){c.enable?(g(b),h(b.exit),k("true")):k("false");return}c=c.append(a,b);k(c);}else c=b.def(q,".profile");l=a.block();g(l);b("if(",c,"){",l,"}");a=a.block();h(a);b.exit("if(",c,"){",a,"}");}function ga(a,b,c,d,e){function f(a){switch(a){case 35664:case 35667:case 35671:return 2;case 35665:case 35668:case 35672:return 3;case 35666:case 35669:case 35673:return 4;
	default:return 1}}function g(c,d,e){function f(){b("if(!",p,".buffer){",m,".enableVertexAttribArray(",l,");}");var c=e.type,g;g=e.size?b.def(e.size,"||",d):d;b("if(",p,".type!==",c,"||",p,".size!==",g,"||",n.map(function(a){return p+"."+a+"!=="+e[a]}).join("||"),"){",m,".bindBuffer(",34962,",",ha,".buffer);",m,".vertexAttribPointer(",[l,g,c,e.normalized,e.stride,e.offset],");",p,".type=",c,";",p,".size=",g,";",n.map(function(a){return p+"."+a+"="+e[a]+";"}).join(""),"}");X&&(c=e.divisor,b("if(",p,
	".divisor!==",c,"){",a.instancing,".vertexAttribDivisorANGLE(",[l,c],");",p,".divisor=",c,";}"));}function k(){b("if(",p,".buffer){",m,".disableVertexAttribArray(",l,");",p,".buffer=null;","}if(",Da.map(function(a,b){return p+"."+a+"!=="+q[b]}).join("||"),"){",m,".vertexAttrib4f(",l,",",q,");",Da.map(function(a,b){return p+"."+a+"="+q[b]+";"}).join(""),"}");}var m=h.gl,l=b.def(c,".location"),p=b.def(h.attributes,"[",l,"]");c=e.state;var ha=e.buffer,q=[e.x,e.y,e.z,e.w],n=["buffer","normalized","offset",
	"stride"];1===c?f():2===c?k():(b("if(",c,"===",1,"){"),f(),b("}else{"),k(),b("}"));}var h=a.shared;d.forEach(function(d){var h=d.name,k=c.attributes[h],m;if(k){if(!e(k))return;m=k.append(a,b);}else {if(!e(Ab))return;var l=a.scopeAttrib(h);m={};Object.keys(new ea).forEach(function(a){m[a]=b.def(l,".",a);});}g(a.link(d),f(d.info.type),m);});}function R(a,c,d,e,f,g){for(var h=a.shared,k=h.gl,m={},l,p=0;p<e.length;++p){var q=e[p],n=q.name,r=q.info.type,u=q.info.size,t=d.uniforms[n];if(1<u){if(!t)continue;var v=
	n.replace("[0]","");if(m[v])continue;m[v]=1;}var q=a.link(q)+".location",x;if(t){if(!f(t))continue;if(xa(t)){n=t.value;if(35678===r||35680===r)r=a.link(n._texture||n.color[0]._texture),c(k,".uniform1i(",q,",",r+".bind());"),c.exit(r,".unbind();");else if(35674===r||35675===r||35676===r)u=a.global.def("new Float32Array(["+Array.prototype.slice.call(n)+"])"),n=2,35675===r?n=3:35676===r&&(n=4),c(k,".uniformMatrix",n,"fv(",q,",false,",u,");");else {switch(r){case 5126:l="1f";break;case 35664:l="2f";break;
	case 35665:l="3f";break;case 35666:l="4f";break;case 35670:l="1i";break;case 5124:l="1i";break;case 35671:l="2i";break;case 35667:l="2i";break;case 35672:l="3i";break;case 35668:l="3i";break;case 35673:l="4i";break;case 35669:l="4i";}1<u?(l+="v",n=a.global.def("["+Array.prototype.slice.call(n)+"]")):n=ra(n)?Array.prototype.slice.call(n):n;c(k,".uniform",l,"(",q,",",n,");");}continue}else x=t.append(a,c);}else {if(!f(Ab))continue;x=c.def(h.uniforms,"[",b.id(n),"]");}35678===r?c("if(",x,"&&",x,'._reglType==="framebuffer"){',
	x,"=",x,".color[0];","}"):35680===r&&c("if(",x,"&&",x,'._reglType==="framebufferCube"){',x,"=",x,".color[0];","}");n=1;switch(r){case 35678:case 35680:r=c.def(x,"._texture");c(k,".uniform1i(",q,",",r,".bind());");c.exit(r,".unbind();");continue;case 5124:case 35670:l="1i";break;case 35667:case 35671:l="2i";n=2;break;case 35668:case 35672:l="3i";n=3;break;case 35669:case 35673:l="4i";n=4;break;case 5126:l="1f";break;case 35664:l="2f";n=2;break;case 35665:l="3f";n=3;break;case 35666:l="4f";n=4;break;
	case 35674:l="Matrix2fv";break;case 35675:l="Matrix3fv";break;case 35676:l="Matrix4fv";}-1===l.indexOf("Matrix")&&1<u&&(l+="v",n=1);if("M"===l.charAt(0)){c(k,".uniform",l,"(",q,",");var q=Math.pow(r-35674+2,2),y=a.global.def("new Float32Array(",q,")");Array.isArray(x)?c("false,(",S(q,function(a){return y+"["+a+"]="+x[a]}),",",y,")"):c("false,(Array.isArray(",x,")||",x," instanceof Float32Array)?",x,":(",S(q,function(a){return y+"["+a+"]="+x+"["+a+"]"}),",",y,")");c(");");}else {if(1<n){for(var r=[],
	w=[],u=0;u<n;++u)Array.isArray(x)?w.push(x[u]):w.push(c.def(x+"["+u+"]")),g&&r.push(c.def());g&&c("if(!",a.batchId,"||",r.map(function(a,b){return a+"!=="+w[b]}).join("||"),"){",r.map(function(a,b){return a+"="+w[b]+";"}).join(""));c(k,".uniform",l,"(",q,",",w.join(","),");");}else g&&(r=c.def(),c("if(!",a.batchId,"||",r,"!==",x,"){",r,"=",x,";")),c(k,".uniform",l,"(",q,",",x,");");g&&c("}");}}}function V(a,b,c,d){function e(f){var g=l[f];return g?g.contextDep&&d.contextDynamic||g.propDep?g.append(a,
	c):g.append(a,b):b.def(m,".",f)}function f(){function a(){c(x,".drawElementsInstancedANGLE(",[n,r,t,q+"<<(("+t+"-5121)>>1)",u],");");}function b(){c(x,".drawArraysInstancedANGLE(",[n,q,r,u],");");}p&&"null"!==p?v?a():(c("if(",p,"){"),a(),c("}else{"),b(),c("}")):b();}function g(){function a(){c(k+".drawElements("+[n,r,t,q+"<<(("+t+"-5121)>>1)"]+");");}function b(){c(k+".drawArrays("+[n,q,r]+");");}p&&"null"!==p?v?a():(c("if(",p,"){"),a(),c("}else{"),b(),c("}")):b();}var h=a.shared,k=h.gl,m=h.draw,l=d.draw,
	p=function(){var e=l.elements,f=b;if(e){if(e.contextDep&&d.contextDynamic||e.propDep)f=c;e=e.append(a,f);l.elementsActive&&f("if("+e+")"+k+".bindBuffer(34963,"+e+".buffer.buffer);");}else e=f.def(),f(e,"=",m,".","elements",";","if(",e,"){",k,".bindBuffer(",34963,",",e,".buffer.buffer);}","else if(",h.vao,".currentVAO){",e,"=",a.shared.elements+".getElements("+h.vao,".currentVAO.elements);",na?"":"if("+e+")"+k+".bindBuffer(34963,"+e+".buffer.buffer);","}");return e}(),n=e("primitive"),q=e("offset"),
	r=function(){var e=l.count,f=b;if(e){if(e.contextDep&&d.contextDynamic||e.propDep)f=c;e=e.append(a,f);}else e=f.def(m,".","count");return e}();if("number"===typeof r){if(0===r)return}else c("if(",r,"){"),c.exit("}");var u,x;X&&(u=e("instances"),x=a.instancing);var t=p+".type",v=l.elements&&xa(l.elements)&&!l.vaoActive;X&&("number"!==typeof u||0<=u)?"string"===typeof u?(c("if(",u,">0){"),f(),c("}else if(",u,"<0){"),g(),c("}")):f():g();}function ca(a,b,c,d,e){b=Q();e=b.proc("body",e);X&&(b.instancing=
	e.def(b.shared.extensions,".angle_instanced_arrays"));a(b,e,c,d);return b.compile().body}function Z(a,b,c,d){N(a,b);c.useVAO?c.drawVAO?b(a.shared.vao,".setVAO(",c.drawVAO.append(a,b),");"):b(a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"):(b(a.shared.vao,".setVAO(null);"),ga(a,b,c,d.attributes,function(){return !0}));R(a,b,c,d.uniforms,function(){return !0},!1);V(a,b,b,c);}function Fa(a,b){var c=a.proc("draw",1);N(a,c);ia(a,c,b.context);T(a,c,b.framebuffer);Aa(a,c,b);I(a,c,b.state);F(a,c,b,!1,!0);
	var d=b.shader.progVar.append(a,c);c(a.shared.gl,".useProgram(",d,".program);");if(b.shader.program)Z(a,c,b,b.shader.program);else {c(a.shared.vao,".setVAO(null);");var e=a.global.def("{}"),f=c.def(d,".id"),g=c.def(e,"[",f,"]");c(a.cond(g).then(g,".call(this,a0);")["else"](g,"=",e,"[",f,"]=",a.link(function(c){return ca(Z,a,b,c,1)}),"(",d,");",g,".call(this,a0);"));}0<Object.keys(b.state).length&&c(a.shared.current,".dirty=true;");a.shared.vao&&c(a.shared.vao,".setVAO(null);");}function pa(a,b,c,d){function e(){return !0}
	a.batchId="a1";N(a,b);ga(a,b,c,d.attributes,e);R(a,b,c,d.uniforms,e,!1);V(a,b,b,c);}function qa(a,b,c,d){function e(a){return a.contextDep&&g||a.propDep}function f(a){return !e(a)}N(a,b);var g=c.contextDep,h=b.def(),k=b.def();a.shared.props=k;a.batchId=h;var m=a.scope(),l=a.scope();b(m.entry,"for(",h,"=0;",h,"<","a1",";++",h,"){",k,"=","a0","[",h,"];",l,"}",m.exit);c.needsContext&&ia(a,l,c.context);c.needsFramebuffer&&T(a,l,c.framebuffer);I(a,l,c.state,e);c.profile&&e(c.profile)&&F(a,l,c,!1,!0);d?(c.useVAO?
	c.drawVAO?e(c.drawVAO)?l(a.shared.vao,".setVAO(",c.drawVAO.append(a,l),");"):m(a.shared.vao,".setVAO(",c.drawVAO.append(a,m),");"):m(a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"):(m(a.shared.vao,".setVAO(null);"),ga(a,m,c,d.attributes,f),ga(a,l,c,d.attributes,e)),R(a,m,c,d.uniforms,f,!1),R(a,l,c,d.uniforms,e,!0),V(a,m,l,c)):(b=a.global.def("{}"),d=c.shader.progVar.append(a,l),k=l.def(d,".id"),m=l.def(b,"[",k,"]"),l(a.shared.gl,".useProgram(",d,".program);","if(!",m,"){",m,"=",b,"[",k,"]=",
	a.link(function(b){return ca(pa,a,c,b,2)}),"(",d,");}",m,".call(this,a0[",h,"],",h,");"));}function W(a,b){function c(a){return a.contextDep&&e||a.propDep}var d=a.proc("batch",2);a.batchId="0";N(a,d);var e=!1,f=!0;Object.keys(b.context).forEach(function(a){e=e||b.context[a].propDep;});e||(ia(a,d,b.context),f=!1);var g=b.framebuffer,h=!1;g?(g.propDep?e=h=!0:g.contextDep&&e&&(h=!0),h||T(a,d,g)):T(a,d,null);b.state.viewport&&b.state.viewport.propDep&&(e=!0);Aa(a,d,b);I(a,d,b.state,function(a){return !c(a)});
	b.profile&&c(b.profile)||F(a,d,b,!1,"a1");b.contextDep=e;b.needsContext=f;b.needsFramebuffer=h;f=b.shader.progVar;if(f.contextDep&&e||f.propDep)qa(a,d,b,null);else if(f=f.append(a,d),d(a.shared.gl,".useProgram(",f,".program);"),b.shader.program)qa(a,d,b,b.shader.program);else {d(a.shared.vao,".setVAO(null);");var g=a.global.def("{}"),h=d.def(f,".id"),k=d.def(g,"[",h,"]");d(a.cond(k).then(k,".call(this,a0,a1);")["else"](k,"=",g,"[",h,"]=",a.link(function(c){return ca(qa,a,b,c,2)}),"(",f,");",k,".call(this,a0,a1);"));}0<
	Object.keys(b.state).length&&d(a.shared.current,".dirty=true;");a.shared.vao&&d(a.shared.vao,".setVAO(null);");}function ka(a,c){function d(b){var g=c.shader[b];g&&e.set(f.shader,"."+b,g.append(a,e));}var e=a.proc("scope",3);a.batchId="a2";var f=a.shared,g=f.current;ia(a,e,c.context);c.framebuffer&&c.framebuffer.append(a,e);yb(Object.keys(c.state)).forEach(function(b){var d=c.state[b].append(a,e);ra(d)?d.forEach(function(c,d){e.set(a.next[b],"["+d+"]",c);}):e.set(f.next,"."+b,d);});F(a,e,c,!0,!0);["elements",
	"offset","count","instances","primitive"].forEach(function(b){var d=c.draw[b];d&&e.set(f.draw,"."+b,""+d.append(a,e));});Object.keys(c.uniforms).forEach(function(d){var g=c.uniforms[d].append(a,e);Array.isArray(g)&&(g="["+g.join()+"]");e.set(f.uniforms,"["+b.id(d)+"]",g);});Object.keys(c.attributes).forEach(function(b){var d=c.attributes[b].append(a,e),f=a.scopeAttrib(b);Object.keys(new ea).forEach(function(a){e.set(f,"."+a,d[a]);});});c.scopeVAO&&e.set(f.vao,".targetVAO",c.scopeVAO.append(a,e));d("vert");
	d("frag");0<Object.keys(c.state).length&&(e(g,".dirty=true;"),e.exit(g,".dirty=true;"));e("a1(",a.shared.context,",a0,",a.batchId,");");}function la(a){if("object"===typeof a&&!ra(a)){for(var b=Object.keys(a),c=0;c<b.length;++c)if(Y.isDynamic(a[b[c]]))return !0;return !1}}function aa(a,b,c){function d(a,b){g.forEach(function(c){var d=e[c];Y.isDynamic(d)&&(d=a.invoke(b,d),b(l,".",c,"=",d,";"));});}var e=b["static"][c];if(e&&la(e)){var f=a.global,g=Object.keys(e),h=!1,k=!1,m=!1,l=a.global.def("{}");g.forEach(function(b){var c=
	e[b];if(Y.isDynamic(c))"function"===typeof c&&(c=e[b]=Y.unbox(c)),b=L(c,null),h=h||b.thisDep,m=m||b.propDep,k=k||b.contextDep;else {f(l,".",b,"=");switch(typeof c){case "number":f(c);break;case "string":f('"',c,'"');break;case "object":Array.isArray(c)&&f("[",c.join(),"]");break;default:f(a.link(c));}f(";");}});b.dynamic[c]=new Y.DynamicVariable(4,{thisDep:h,contextDep:k,propDep:m,ref:l,append:d});delete b["static"][c];}}var ea=k.Record,fa={add:32774,subtract:32778,"reverse subtract":32779};c.ext_blend_minmax&&
	(fa.min=32775,fa.max=32776);var X=c.angle_instanced_arrays,Ma=c.webgl_draw_buffers,na=c.oes_vertex_array_object,ta={dirty:!0,profile:g.profile},Ea={},Na=[],ua={},va={};q("dither",3024);q("blend.enable",3042);l("blend.color","blendColor",[0,0,0,0]);l("blend.equation","blendEquationSeparate",[32774,32774]);l("blend.func","blendFuncSeparate",[1,0,1,0]);q("depth.enable",2929,!0);l("depth.func","depthFunc",513);l("depth.range","depthRange",[0,1]);l("depth.mask","depthMask",!0);l("colorMask","colorMask",
	[!0,!0,!0,!0]);q("cull.enable",2884);l("cull.face","cullFace",1029);l("frontFace","frontFace",2305);l("lineWidth","lineWidth",1);q("polygonOffset.enable",32823);l("polygonOffset.offset","polygonOffset",[0,0]);q("sample.alpha",32926);q("sample.enable",32928);l("sample.coverage","sampleCoverage",[1,!1]);q("stencil.enable",2960);l("stencil.mask","stencilMask",-1);l("stencil.func","stencilFunc",[519,0,-1]);l("stencil.opFront","stencilOpSeparate",[1028,7680,7680,7680]);l("stencil.opBack","stencilOpSeparate",
	[1029,7680,7680,7680]);q("scissor.enable",3089);l("scissor.box","scissor",[0,0,a.drawingBufferWidth,a.drawingBufferHeight]);l("viewport","viewport",[0,0,a.drawingBufferWidth,a.drawingBufferHeight]);var tb={gl:a,context:x,strings:b,next:Ea,current:ta,draw:r,elements:d,buffer:f,shader:u,attributes:k.state,vao:k,uniforms:v,framebuffer:p,extensions:c,timer:m,isBufferArgs:Sa},Pa={primTypes:Ka,compareFuncs:ab,blendFuncs:Ga,blendEquations:fa,stencilOps:Ta,glTypes:Ja,orientationType:zb};Ma&&(Pa.backBuffer=
	[1029],Pa.drawBuffer=S(e.maxDrawbuffers,function(a){return 0===a?[0]:S(a,function(a){return 36064+a})}));var sa=0;return {next:Ea,current:ta,procs:function(){var a=Q(),b=a.proc("poll"),d=a.proc("refresh"),f=a.block();b(f);d(f);var g=a.shared,h=g.gl,k=g.next,m=g.current;f(m,".dirty=false;");T(a,b);T(a,d,null,!0);var l;X&&(l=a.link(X));c.oes_vertex_array_object&&d(a.link(c.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var p=0;p<e.maxAttributes;++p){var n=d.def(g.attributes,"[",p,"]"),r=
	a.cond(n,".buffer");r.then(h,".enableVertexAttribArray(",p,");",h,".bindBuffer(",34962,",",n,".buffer.buffer);",h,".vertexAttribPointer(",p,",",n,".size,",n,".type,",n,".normalized,",n,".stride,",n,".offset);")["else"](h,".disableVertexAttribArray(",p,");",h,".vertexAttrib4f(",p,",",n,".x,",n,".y,",n,".z,",n,".w);",n,".buffer=null;");d(r);X&&d(l,".vertexAttribDivisorANGLE(",p,",",n,".divisor);");}d(a.shared.vao,".currentVAO=null;",a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);");Object.keys(ua).forEach(function(c){var e=
	ua[c],g=f.def(k,".",c),l=a.block();l("if(",g,"){",h,".enable(",e,")}else{",h,".disable(",e,")}",m,".",c,"=",g,";");d(l);b("if(",g,"!==",m,".",c,"){",l,"}");});Object.keys(va).forEach(function(c){var e=va[c],g=ta[c],l,n,p=a.block();p(h,".",e,"(");ra(g)?(e=g.length,l=a.global.def(k,".",c),n=a.global.def(m,".",c),p(S(e,function(a){return l+"["+a+"]"}),");",S(e,function(a){return n+"["+a+"]="+l+"["+a+"];"}).join("")),b("if(",S(e,function(a){return l+"["+a+"]!=="+n+"["+a+"]"}).join("||"),"){",p,"}")):(l=
	f.def(k,".",c),n=f.def(m,".",c),p(l,");",m,".",c,"=",l,";"),b("if(",l,"!==",n,"){",p,"}"));d(p);});return a.compile()}(),compile:function(a,b,c,d,e){var f=Q();f.stats=f.link(e);Object.keys(b["static"]).forEach(function(a){aa(f,b,a);});Xb.forEach(function(b){aa(f,a,b);});var g=C(a,b,c,d,f);Fa(f,g);ka(f,g);W(f,g);return K(f.compile(),{destroy:function(){g.shader.program.destroy();}})}}}function Bb(a,b){for(var c=0;c<a.length;++c)if(a[c]===b)return c;return -1}var K=function(a,b){for(var c=Object.keys(b),
	e=0;e<c.length;++e)a[c[e]]=b[c[e]];return a},Db=0,Y={DynamicVariable:Z,define:function(a,b){return new Z(a,cb(b+""))},isDynamic:function(a){return "function"===typeof a&&!a._reglType||a instanceof Z},unbox:db,accessor:cb},bb={next:"function"===typeof requestAnimationFrame?function(a){return requestAnimationFrame(a)}:function(a){return setTimeout(a,16)},cancel:"function"===typeof cancelAnimationFrame?function(a){return cancelAnimationFrame(a)}:clearTimeout},Cb="undefined"!==typeof performance&&performance.now?
	function(){return performance.now()}:function(){return +new Date},G=hb();G.zero=hb();var Yb=function(a,b){var c=1;b.ext_texture_filter_anisotropic&&(c=a.getParameter(34047));var e=1,f=1;b.webgl_draw_buffers&&(e=a.getParameter(34852),f=a.getParameter(36063));var d=!!b.oes_texture_float;if(d){d=a.createTexture();a.bindTexture(3553,d);a.texImage2D(3553,0,6408,1,1,0,6408,5126,null);var n=a.createFramebuffer();a.bindFramebuffer(36160,n);a.framebufferTexture2D(36160,36064,3553,d,0);a.bindTexture(3553,null);
	if(36053!==a.checkFramebufferStatus(36160))d=!1;else {a.viewport(0,0,1,1);a.clearColor(1,0,0,1);a.clear(16384);var p=G.allocType(5126,4);a.readPixels(0,0,1,1,6408,5126,p);a.getError()?d=!1:(a.deleteFramebuffer(n),a.deleteTexture(d),d=1===p[0]);G.freeType(p);}}p=!0;"undefined"!==typeof navigator&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent))||(p=a.createTexture(),n=G.allocType(5121,36),a.activeTexture(33984),a.bindTexture(34067,p),a.texImage2D(34069,
	0,6408,3,3,0,6408,5121,n),G.freeType(n),a.bindTexture(34067,null),a.deleteTexture(p),p=!a.getError());return {colorBits:[a.getParameter(3410),a.getParameter(3411),a.getParameter(3412),a.getParameter(3413)],depthBits:a.getParameter(3414),stencilBits:a.getParameter(3415),subpixelBits:a.getParameter(3408),extensions:Object.keys(b).filter(function(a){return !!b[a]}),maxAnisotropic:c,maxDrawbuffers:e,maxColorAttachments:f,pointSizeDims:a.getParameter(33901),lineWidthDims:a.getParameter(33902),maxViewportDims:a.getParameter(3386),
	maxCombinedTextureUnits:a.getParameter(35661),maxCubeMapSize:a.getParameter(34076),maxRenderbufferSize:a.getParameter(34024),maxTextureUnits:a.getParameter(34930),maxTextureSize:a.getParameter(3379),maxAttributes:a.getParameter(34921),maxVertexUniforms:a.getParameter(36347),maxVertexTextureUnits:a.getParameter(35660),maxVaryingVectors:a.getParameter(36348),maxFragmentUniforms:a.getParameter(36349),glsl:a.getParameter(35724),renderer:a.getParameter(7937),vendor:a.getParameter(7936),version:a.getParameter(7938),
	readFloat:d,npotTextureCube:p}},P=function(a){return a instanceof Uint8Array||a instanceof Uint16Array||a instanceof Uint32Array||a instanceof Int8Array||a instanceof Int16Array||a instanceof Int32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof Uint8ClampedArray},I=function(a){return Object.keys(a).map(function(b){return a[b]})},Qa={shape:function(a){for(var b=[];a.length;a=a[0])b.push(a.length);return b},flatten:function(a,b,c,e){var f=1;if(b.length)for(var d=0;d<b.length;++d)f*=
	b[d];else f=0;c=e||G.allocType(c,f);switch(b.length){case 0:break;case 1:e=b[0];for(b=0;b<e;++b)c[b]=a[b];break;case 2:e=b[0];b=b[1];for(d=f=0;d<e;++d)for(var n=a[d],p=0;p<b;++p)c[f++]=n[p];break;case 3:ib(a,b[0],b[1],b[2],c,0);break;default:jb(a,b,0,c,0);}return c}},Ia={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,
	"[object ArrayBuffer]":5121},Ja={int8:5120,int16:5122,int32:5124,uint8:5121,uint16:5123,uint32:5125,"float":5126,float32:5126},nb={dynamic:35048,stream:35040,"static":35044},Ua=Qa.flatten,mb=Qa.shape,na=[];na[5120]=1;na[5122]=2;na[5124]=4;na[5121]=1;na[5123]=2;na[5125]=4;na[5126]=4;var Ka={points:0,point:0,lines:1,line:1,triangles:4,triangle:4,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},pb=new Float32Array(1),Lb=new Uint32Array(pb.buffer),Pb=[9984,9986,9985,9987],Oa=[0,6409,
	6410,6407,6408],V={};V[6409]=V[6406]=V[6402]=1;V[34041]=V[6410]=2;V[6407]=V[35904]=3;V[6408]=V[35906]=4;var Xa=sa("HTMLCanvasElement"),Ya=sa("OffscreenCanvas"),ub=sa("CanvasRenderingContext2D"),vb=sa("ImageBitmap"),wb=sa("HTMLImageElement"),xb=sa("HTMLVideoElement"),Mb=Object.keys(Ia).concat([Xa,Ya,ub,vb,wb,xb]),za=[];za[5121]=1;za[5126]=4;za[36193]=2;za[5123]=2;za[5125]=4;var E=[];E[32854]=2;E[32855]=2;E[36194]=2;E[34041]=4;E[33776]=.5;E[33777]=.5;E[33778]=1;E[33779]=1;E[35986]=.5;E[35987]=1;E[34798]=
	1;E[35840]=.5;E[35841]=.25;E[35842]=.5;E[35843]=.25;E[36196]=.5;var R=[];R[32854]=2;R[32855]=2;R[36194]=2;R[33189]=2;R[36168]=1;R[34041]=4;R[35907]=4;R[34836]=16;R[34842]=8;R[34843]=6;var Zb=function(a,b,c,e,f){function d(a){this.id=k++;this.refCount=1;this.renderbuffer=a;this.format=32854;this.height=this.width=0;f.profile&&(this.stats={size:0});}function n(b){var c=b.renderbuffer;a.bindRenderbuffer(36161,null);a.deleteRenderbuffer(c);b.renderbuffer=null;b.refCount=0;delete u[b.id];e.renderbufferCount--;}
	var p={rgba4:32854,rgb565:36194,"rgb5 a1":32855,depth:33189,stencil:36168,"depth stencil":34041};b.ext_srgb&&(p.srgba=35907);b.ext_color_buffer_half_float&&(p.rgba16f=34842,p.rgb16f=34843);b.webgl_color_buffer_float&&(p.rgba32f=34836);var v=[];Object.keys(p).forEach(function(a){v[p[a]]=a;});var k=0,u={};d.prototype.decRef=function(){0>=--this.refCount&&n(this);};f.profile&&(e.getTotalRenderbufferSize=function(){var a=0;Object.keys(u).forEach(function(b){a+=u[b].stats.size;});return a});return {create:function(b,
	c){function k(b,c){var d=0,e=0,n=32854;"object"===typeof b&&b?("shape"in b?(e=b.shape,d=e[0]|0,e=e[1]|0):("radius"in b&&(d=e=b.radius|0),"width"in b&&(d=b.width|0),"height"in b&&(e=b.height|0)),"format"in b&&(n=p[b.format])):"number"===typeof b?(d=b|0,e="number"===typeof c?c|0:d):b||(d=e=1);if(d!==g.width||e!==g.height||n!==g.format)return k.width=g.width=d,k.height=g.height=e,g.format=n,a.bindRenderbuffer(36161,g.renderbuffer),a.renderbufferStorage(36161,n,d,e),f.profile&&(g.stats.size=R[g.format]*
	g.width*g.height),k.format=v[g.format],k}var g=new d(a.createRenderbuffer());u[g.id]=g;e.renderbufferCount++;k(b,c);k.resize=function(b,c){var d=b|0,e=c|0||d;if(d===g.width&&e===g.height)return k;k.width=g.width=d;k.height=g.height=e;a.bindRenderbuffer(36161,g.renderbuffer);a.renderbufferStorage(36161,g.format,d,e);f.profile&&(g.stats.size=R[g.format]*g.width*g.height);return k};k._reglType="renderbuffer";k._renderbuffer=g;f.profile&&(k.stats=g.stats);k.destroy=function(){g.decRef();};return k},clear:function(){I(u).forEach(n);},
	restore:function(){I(u).forEach(function(b){b.renderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,b.renderbuffer);a.renderbufferStorage(36161,b.format,b.width,b.height);});a.bindRenderbuffer(36161,null);}}},Za=[];Za[6408]=4;Za[6407]=3;var Ra=[];Ra[5121]=1;Ra[5126]=4;Ra[36193]=2;var Da=["x","y","z","w"],Xb="blend.func blend.equation stencil.func stencil.opFront stencil.opBack sample.coverage viewport scissor.box polygonOffset.offset".split(" "),Ga={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,
	"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},ab={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ta={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,
	"increment wrap":34055,"decrement wrap":34056,invert:5386},zb={cw:2304,ccw:2305},Ab=new J(!1,!1,!1,function(){}),$b=function(a,b){function c(){this.endQueryIndex=this.startQueryIndex=-1;this.sum=0;this.stats=null;}function e(a,b,d){var e=n.pop()||new c;e.startQueryIndex=a;e.endQueryIndex=b;e.sum=0;e.stats=d;p.push(e);}if(!b.ext_disjoint_timer_query)return null;var f=[],d=[],n=[],p=[],v=[],k=[];return {beginQuery:function(a){var c=f.pop()||b.ext_disjoint_timer_query.createQueryEXT();b.ext_disjoint_timer_query.beginQueryEXT(35007,
	c);d.push(c);e(d.length-1,d.length,a);},endQuery:function(){b.ext_disjoint_timer_query.endQueryEXT(35007);},pushScopeStats:e,update:function(){var a,c;a=d.length;if(0!==a){k.length=Math.max(k.length,a+1);v.length=Math.max(v.length,a+1);v[0]=0;var e=k[0]=0;for(c=a=0;c<d.length;++c){var m=d[c];b.ext_disjoint_timer_query.getQueryObjectEXT(m,34919)?(e+=b.ext_disjoint_timer_query.getQueryObjectEXT(m,34918),f.push(m)):d[a++]=m;v[c+1]=e;k[c+1]=a;}d.length=a;for(c=a=0;c<p.length;++c){var e=p[c],g=e.startQueryIndex,
	m=e.endQueryIndex;e.sum+=v[m]-v[g];g=k[g];m=k[m];m===g?(e.stats.gpuTime+=e.sum/1E6,n.push(e)):(e.startQueryIndex=g,e.endQueryIndex=m,p[a++]=e);}p.length=a;}},getNumPendingQueries:function(){return d.length},clear:function(){f.push.apply(f,d);for(var a=0;a<f.length;a++)b.ext_disjoint_timer_query.deleteQueryEXT(f[a]);d.length=0;f.length=0;},restore:function(){d.length=0;f.length=0;}}};return function(a){function b(){if(0===F.length)t&&t.update(),ca=null;else {ca=bb.next(b);u();for(var a=F.length-1;0<=a;--a){var c=
	F[a];c&&c(H,null,0);}m.flush();t&&t.update();}}function c(){!ca&&0<F.length&&(ca=bb.next(b));}function e(){ca&&(bb.cancel(b),ca=null);}function f(a){a.preventDefault();e();S.forEach(function(a){a();});}function d(a){m.getError();h.restore();B.restore();y.restore();C.restore();P.restore();T.restore();L.restore();t&&t.restore();I.procs.refresh();c();V.forEach(function(a){a();});}function n(a){function b(a,c){var d={},e={};Object.keys(a).forEach(function(b){var f=a[b];if(Y.isDynamic(f))e[b]=Y.unbox(f,b);else {if(c&&
	Array.isArray(f))for(var g=0;g<f.length;++g)if(Y.isDynamic(f[g])){e[b]=Y.unbox(f,b);return}d[b]=f;}});return {dynamic:e,"static":d}}function c(a){for(;n.length<a;)n.push(null);return n}var d=b(a.context||{},!0),e=b(a.uniforms||{},!0),f=b(a.attributes||{},!1);a=b(function(a){function b(a){if(a in c){var d=c[a];delete c[a];Object.keys(d).forEach(function(b){c[a+"."+b]=d[b];});}}var c=K({},a);delete c.uniforms;delete c.attributes;delete c.context;delete c.vao;"stencil"in c&&c.stencil.op&&(c.stencil.opBack=
	c.stencil.opFront=c.stencil.op,delete c.stencil.op);b("blend");b("depth");b("cull");b("stencil");b("polygonOffset");b("scissor");b("sample");"vao"in a&&(c.vao=a.vao);return c}(a),!1);var g={gpuTime:0,cpuTime:0,count:0},h=I.compile(a,f,e,d,g),k=h.draw,l=h.batch,m=h.scope,n=[];return K(function(a,b){var d;if("function"===typeof a)return m.call(this,null,a,0);if("function"===typeof b)if("number"===typeof a)for(d=0;d<a;++d)m.call(this,null,b,d);else if(Array.isArray(a))for(d=0;d<a.length;++d)m.call(this,
	a[d],b,d);else return m.call(this,a,b,0);else if("number"===typeof a){if(0<a)return l.call(this,c(a|0),a|0)}else if(Array.isArray(a)){if(a.length)return l.call(this,a,a.length)}else return k.call(this,a)},{stats:g,destroy:function(){h.destroy();}})}function p(a,b){var c=0;I.procs.poll();var d=b.color;d&&(m.clearColor(+d[0]||0,+d[1]||0,+d[2]||0,+d[3]||0),c|=16384);"depth"in b&&(m.clearDepth(+b.depth),c|=256);"stencil"in b&&(m.clearStencil(b.stencil|0),c|=1024);m.clear(c);}function v(a){F.push(a);c();
	return {cancel:function(){function b(){var a=Bb(F,b);F[a]=F[F.length-1];--F.length;0>=F.length&&e();}var c=Bb(F,a);F[c]=b;}}}function k(){var a=R.viewport,b=R.scissor_box;a[0]=a[1]=b[0]=b[1]=0;H.viewportWidth=H.framebufferWidth=H.drawingBufferWidth=a[2]=b[2]=m.drawingBufferWidth;H.viewportHeight=H.framebufferHeight=H.drawingBufferHeight=a[3]=b[3]=m.drawingBufferHeight;}function u(){H.tick+=1;H.time=x();k();I.procs.poll();}function r(){C.refresh();k();I.procs.refresh();t&&t.update();}function x(){return (Cb()-
	G)/1E3}a=Hb(a);if(!a)return null;var m=a.gl,g=m.getContextAttributes();m.isContextLost();var h=Ib(m,a);if(!h)return null;var q=Eb(),l={vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0},w=h.extensions,t=$b(m,w),G=Cb(),E=m.drawingBufferWidth,J=m.drawingBufferHeight,H={tick:0,time:0,viewportWidth:E,viewportHeight:J,framebufferWidth:E,framebufferHeight:J,drawingBufferWidth:E,drawingBufferHeight:J,pixelRatio:a.pixelRatio},
	E={elements:null,primitive:4,count:-1,offset:0,instances:-1},M=Yb(m,w),y=Jb(m,l,a,function(a){return L.destroyBuffer(a)}),U=Kb(m,w,y,l),L=Sb(m,w,M,l,y,U,E),B=Tb(m,q,l,a),C=Nb(m,w,M,function(){I.procs.poll();},H,l,a),P=Zb(m,w,M,l,a),T=Rb(m,w,M,C,P,l),I=Wb(m,q,w,M,y,U,C,T,{},L,B,E,H,t,a),q=Ub(m,T,I.procs.poll,H),R=I.next,N=m.canvas,F=[],S=[],V=[],Z=[a.onDestroy],ca=null;N&&(N.addEventListener("webglcontextlost",f,!1),N.addEventListener("webglcontextrestored",d,!1));var aa=T.setFBO=n({framebuffer:Y.define.call(null,
	1,"framebuffer")});r();g=K(n,{clear:function(a){if("framebuffer"in a)if(a.framebuffer&&"framebufferCube"===a.framebuffer_reglType)for(var b=0;6>b;++b)aa(K({framebuffer:a.framebuffer.faces[b]},a),p);else aa(a,p);else p(null,a);},prop:Y.define.bind(null,1),context:Y.define.bind(null,2),"this":Y.define.bind(null,3),draw:n({}),buffer:function(a){return y.create(a,34962,!1,!1)},elements:function(a){return U.create(a,!1)},texture:C.create2D,cube:C.createCube,renderbuffer:P.create,framebuffer:T.create,framebufferCube:T.createCube,
	vao:L.createVAO,attributes:g,frame:v,on:function(a,b){var c;switch(a){case "frame":return v(b);case "lost":c=S;break;case "restore":c=V;break;case "destroy":c=Z;}c.push(b);return {cancel:function(){for(var a=0;a<c.length;++a)if(c[a]===b){c[a]=c[c.length-1];c.pop();break}}}},limits:M,hasExtension:function(a){return 0<=M.extensions.indexOf(a.toLowerCase())},read:q,destroy:function(){F.length=0;e();N&&(N.removeEventListener("webglcontextlost",f),N.removeEventListener("webglcontextrestored",d));B.clear();
	T.clear();P.clear();L.clear();C.clear();U.clear();y.clear();t&&t.clear();Z.forEach(function(a){a();});},_gl:m,_refresh:r,poll:function(){u();t&&t.update();},now:x,stats:l});a.onDone(null,g);return g}});
	}(regl_min));

	var f$2 = regl_min.exports;

	/**
	 * Common utilities
	 * @module glMatrix
	 */

	// Configuration Constants
	var EPSILON = 0.000001;
	var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
	var RANDOM = Math.random;

	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	function setMatrixArrayType(type) {
	  ARRAY_TYPE = type;
	}

	var degree = Math.PI / 180;

	/**
	 * Convert Degree To Radian
	 *
	 * @param {Number} a Angle in Degrees
	 */
	function toRadian(a) {
	  return a * degree;
	}

	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 *
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	function equals$9(a, b) {
	  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
	}

	var common = /*#__PURE__*/Object.freeze({
		__proto__: null,
		EPSILON: EPSILON,
		get ARRAY_TYPE () { return ARRAY_TYPE; },
		RANDOM: RANDOM,
		setMatrixArrayType: setMatrixArrayType,
		toRadian: toRadian,
		equals: equals$9
	});

	/**
	 * 2x2 Matrix
	 * @module mat2
	 */

	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	function create$8() {
	  var out = new ARRAY_TYPE(4);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	  }
	  out[0] = 1;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	function clone$8(a) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function copy$8(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	function identity$5(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Create a new mat2 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out A new 2x2 matrix
	 */
	function fromValues$8(m00, m01, m10, m11) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m10;
	  out[3] = m11;
	  return out;
	}

	/**
	 * Set the components of a mat2 to the given values
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out
	 */
	function set$8(out, m00, m01, m10, m11) {
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m10;
	  out[3] = m11;
	  return out;
	}

	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function transpose$2(out, a) {
	  // If we are transposing ourselves we can skip a few steps but have to cache
	  // some values
	  if (out === a) {
	    var a1 = a[1];
	    out[1] = a[2];
	    out[2] = a1;
	  } else {
	    out[0] = a[0];
	    out[1] = a[2];
	    out[2] = a[1];
	    out[3] = a[3];
	  }

	  return out;
	}

	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function invert$5(out, a) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];

	  // Calculate the determinant
	  var det = a0 * a3 - a2 * a1;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = a3 * det;
	  out[1] = -a1 * det;
	  out[2] = -a2 * det;
	  out[3] = a0 * det;

	  return out;
	}

	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	function adjoint$2(out, a) {
	  // Caching this value is nessecary if out == a
	  var a0 = a[0];
	  out[0] = a[3];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = a0;

	  return out;
	}

	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant$3(a) {
	  return a[0] * a[3] - a[2] * a[1];
	}

	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	function multiply$8(out, a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  out[0] = a0 * b0 + a2 * b1;
	  out[1] = a1 * b0 + a3 * b1;
	  out[2] = a0 * b2 + a2 * b3;
	  out[3] = a1 * b2 + a3 * b3;
	  return out;
	}

	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	function rotate$4(out, a, rad) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  out[0] = a0 * c + a2 * s;
	  out[1] = a1 * c + a3 * s;
	  out[2] = a0 * -s + a2 * c;
	  out[3] = a1 * -s + a3 * c;
	  return out;
	}

	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	function scale$8(out, a, v) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var v0 = v[0],
	      v1 = v[1];
	  out[0] = a0 * v0;
	  out[1] = a1 * v0;
	  out[2] = a2 * v1;
	  out[3] = a3 * v1;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	function fromRotation$4(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  out[0] = c;
	  out[1] = s;
	  out[2] = -s;
	  out[3] = c;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	function fromScaling$3(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = v[1];
	  return out;
	}

	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$8(a) {
	  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob$3(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
	}

	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix
	 * @param {mat2} D the diagonal matrix
	 * @param {mat2} U the upper triangular matrix
	 * @param {mat2} a the input matrix to factorize
	 */

	function LDU(L, D, U, a) {
	  L[2] = a[2] / a[0];
	  U[0] = a[0];
	  U[1] = a[1];
	  U[3] = a[3] - L[2] * U[1];
	  return [L, D, U];
	}

	/**
	 * Adds two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	function add$8(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	function subtract$6(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$8(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$8(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2} out
	 */
	function multiplyScalar$3(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  return out;
	}

	/**
	 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2} out the receiving vector
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2} out
	 */
	function multiplyScalarAndAdd$3(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  return out;
	}

	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	var mul$8 = multiply$8;

	/**
	 * Alias for {@link mat2.subtract}
	 * @function
	 */
	var sub$6 = subtract$6;

	var mat2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$8,
		clone: clone$8,
		copy: copy$8,
		identity: identity$5,
		fromValues: fromValues$8,
		set: set$8,
		transpose: transpose$2,
		invert: invert$5,
		adjoint: adjoint$2,
		determinant: determinant$3,
		multiply: multiply$8,
		rotate: rotate$4,
		scale: scale$8,
		fromRotation: fromRotation$4,
		fromScaling: fromScaling$3,
		str: str$8,
		frob: frob$3,
		LDU: LDU,
		add: add$8,
		subtract: subtract$6,
		exactEquals: exactEquals$8,
		equals: equals$8,
		multiplyScalar: multiplyScalar$3,
		multiplyScalarAndAdd: multiplyScalarAndAdd$3,
		mul: mul$8,
		sub: sub$6
	});

	/**
	 * 2x3 Matrix
	 * @module mat2d
	 *
	 * @description
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */

	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	function create$7() {
	  var out = new ARRAY_TYPE(6);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[4] = 0;
	    out[5] = 0;
	  }
	  out[0] = 1;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	function clone$7(a) {
	  var out = new ARRAY_TYPE(6);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  return out;
	}

	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	function copy$7(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  return out;
	}

	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	function identity$4(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = 0;
	  out[5] = 0;
	  return out;
	}

	/**
	 * Create a new mat2d with the given values
	 *
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} A new mat2d
	 */
	function fromValues$7(a, b, c, d, tx, ty) {
	  var out = new ARRAY_TYPE(6);
	  out[0] = a;
	  out[1] = b;
	  out[2] = c;
	  out[3] = d;
	  out[4] = tx;
	  out[5] = ty;
	  return out;
	}

	/**
	 * Set the components of a mat2d to the given values
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} out
	 */
	function set$7(out, a, b, c, d, tx, ty) {
	  out[0] = a;
	  out[1] = b;
	  out[2] = c;
	  out[3] = d;
	  out[4] = tx;
	  out[5] = ty;
	  return out;
	}

	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	function invert$4(out, a) {
	  var aa = a[0],
	      ab = a[1],
	      ac = a[2],
	      ad = a[3];
	  var atx = a[4],
	      aty = a[5];

	  var det = aa * ad - ab * ac;
	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = ad * det;
	  out[1] = -ab * det;
	  out[2] = -ac * det;
	  out[3] = aa * det;
	  out[4] = (ac * aty - ad * atx) * det;
	  out[5] = (ab * atx - aa * aty) * det;
	  return out;
	}

	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant$2(a) {
	  return a[0] * a[3] - a[1] * a[2];
	}

	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	function multiply$7(out, a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5];
	  out[0] = a0 * b0 + a2 * b1;
	  out[1] = a1 * b0 + a3 * b1;
	  out[2] = a0 * b2 + a2 * b3;
	  out[3] = a1 * b2 + a3 * b3;
	  out[4] = a0 * b4 + a2 * b5 + a4;
	  out[5] = a1 * b4 + a3 * b5 + a5;
	  return out;
	}

	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	function rotate$3(out, a, rad) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  out[0] = a0 * c + a2 * s;
	  out[1] = a1 * c + a3 * s;
	  out[2] = a0 * -s + a2 * c;
	  out[3] = a1 * -s + a3 * c;
	  out[4] = a4;
	  out[5] = a5;
	  return out;
	}

	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	function scale$7(out, a, v) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var v0 = v[0],
	      v1 = v[1];
	  out[0] = a0 * v0;
	  out[1] = a1 * v0;
	  out[2] = a2 * v1;
	  out[3] = a3 * v1;
	  out[4] = a4;
	  out[5] = a5;
	  return out;
	}

	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	function translate$3(out, a, v) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var v0 = v[0],
	      v1 = v[1];
	  out[0] = a0;
	  out[1] = a1;
	  out[2] = a2;
	  out[3] = a3;
	  out[4] = a0 * v0 + a2 * v1 + a4;
	  out[5] = a1 * v0 + a3 * v1 + a5;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	function fromRotation$3(out, rad) {
	  var s = Math.sin(rad),
	      c = Math.cos(rad);
	  out[0] = c;
	  out[1] = s;
	  out[2] = -s;
	  out[3] = c;
	  out[4] = 0;
	  out[5] = 0;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	function fromScaling$2(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = v[1];
	  out[4] = 0;
	  out[5] = 0;
	  return out;
	}

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	function fromTranslation$3(out, v) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = v[0];
	  out[5] = v[1];
	  return out;
	}

	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$7(a) {
	  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob$2(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
	}

	/**
	 * Adds two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	function add$7(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	function subtract$5(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  out[4] = a[4] - b[4];
	  out[5] = a[5] - b[5];
	  return out;
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2d} out
	 */
	function multiplyScalar$2(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  return out;
	}

	/**
	 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2d} out the receiving vector
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2d} out
	 */
	function multiplyScalarAndAdd$2(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  out[4] = a[4] + b[4] * scale;
	  out[5] = a[5] + b[5] * scale;
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$7(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$7(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
	}

	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	var mul$7 = multiply$7;

	/**
	 * Alias for {@link mat2d.subtract}
	 * @function
	 */
	var sub$5 = subtract$5;

	var mat2d = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$7,
		clone: clone$7,
		copy: copy$7,
		identity: identity$4,
		fromValues: fromValues$7,
		set: set$7,
		invert: invert$4,
		determinant: determinant$2,
		multiply: multiply$7,
		rotate: rotate$3,
		scale: scale$7,
		translate: translate$3,
		fromRotation: fromRotation$3,
		fromScaling: fromScaling$2,
		fromTranslation: fromTranslation$3,
		str: str$7,
		frob: frob$2,
		add: add$7,
		subtract: subtract$5,
		multiplyScalar: multiplyScalar$2,
		multiplyScalarAndAdd: multiplyScalarAndAdd$2,
		exactEquals: exactEquals$7,
		equals: equals$7,
		mul: mul$7,
		sub: sub$5
	});

	/**
	 * 3x3 Matrix
	 * @module mat3
	 */

	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	function create$6() {
	  var out = new ARRAY_TYPE(9);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	  }
	  out[0] = 1;
	  out[4] = 1;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	function fromMat4$1(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[4];
	  out[4] = a[5];
	  out[5] = a[6];
	  out[6] = a[8];
	  out[7] = a[9];
	  out[8] = a[10];
	  return out;
	}

	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	function clone$6(a) {
	  var out = new ARRAY_TYPE(9);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  return out;
	}

	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function copy$6(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  return out;
	}

	/**
	 * Create a new mat3 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} A new mat3
	 */
	function fromValues$6(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	  var out = new ARRAY_TYPE(9);
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m10;
	  out[4] = m11;
	  out[5] = m12;
	  out[6] = m20;
	  out[7] = m21;
	  out[8] = m22;
	  return out;
	}

	/**
	 * Set the components of a mat3 to the given values
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} out
	 */
	function set$6(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m10;
	  out[4] = m11;
	  out[5] = m12;
	  out[6] = m20;
	  out[7] = m21;
	  out[8] = m22;
	  return out;
	}

	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	function identity$3(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 1;
	  out[5] = 0;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function transpose$1(out, a) {
	  // If we are transposing ourselves we can skip a few steps but have to cache some values
	  if (out === a) {
	    var a01 = a[1],
	        a02 = a[2],
	        a12 = a[5];
	    out[1] = a[3];
	    out[2] = a[6];
	    out[3] = a01;
	    out[5] = a[7];
	    out[6] = a02;
	    out[7] = a12;
	  } else {
	    out[0] = a[0];
	    out[1] = a[3];
	    out[2] = a[6];
	    out[3] = a[1];
	    out[4] = a[4];
	    out[5] = a[7];
	    out[6] = a[2];
	    out[7] = a[5];
	    out[8] = a[8];
	  }

	  return out;
	}

	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function invert$3(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  var b01 = a22 * a11 - a12 * a21;
	  var b11 = -a22 * a10 + a12 * a20;
	  var b21 = a21 * a10 - a11 * a20;

	  // Calculate the determinant
	  var det = a00 * b01 + a01 * b11 + a02 * b21;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = b01 * det;
	  out[1] = (-a22 * a01 + a02 * a21) * det;
	  out[2] = (a12 * a01 - a02 * a11) * det;
	  out[3] = b11 * det;
	  out[4] = (a22 * a00 - a02 * a20) * det;
	  out[5] = (-a12 * a00 + a02 * a10) * det;
	  out[6] = b21 * det;
	  out[7] = (-a21 * a00 + a01 * a20) * det;
	  out[8] = (a11 * a00 - a01 * a10) * det;
	  return out;
	}

	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	function adjoint$1(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  out[0] = a11 * a22 - a12 * a21;
	  out[1] = a02 * a21 - a01 * a22;
	  out[2] = a01 * a12 - a02 * a11;
	  out[3] = a12 * a20 - a10 * a22;
	  out[4] = a00 * a22 - a02 * a20;
	  out[5] = a02 * a10 - a00 * a12;
	  out[6] = a10 * a21 - a11 * a20;
	  out[7] = a01 * a20 - a00 * a21;
	  out[8] = a00 * a11 - a01 * a10;
	  return out;
	}

	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant$1(a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	}

	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	function multiply$6(out, a, b) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2];
	  var a10 = a[3],
	      a11 = a[4],
	      a12 = a[5];
	  var a20 = a[6],
	      a21 = a[7],
	      a22 = a[8];

	  var b00 = b[0],
	      b01 = b[1],
	      b02 = b[2];
	  var b10 = b[3],
	      b11 = b[4],
	      b12 = b[5];
	  var b20 = b[6],
	      b21 = b[7],
	      b22 = b[8];

	  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

	  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

	  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	  return out;
	}

	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	function translate$2(out, a, v) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a10 = a[3],
	      a11 = a[4],
	      a12 = a[5],
	      a20 = a[6],
	      a21 = a[7],
	      a22 = a[8],
	      x = v[0],
	      y = v[1];

	  out[0] = a00;
	  out[1] = a01;
	  out[2] = a02;

	  out[3] = a10;
	  out[4] = a11;
	  out[5] = a12;

	  out[6] = x * a00 + y * a10 + a20;
	  out[7] = x * a01 + y * a11 + a21;
	  out[8] = x * a02 + y * a12 + a22;
	  return out;
	}

	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	function rotate$2(out, a, rad) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a10 = a[3],
	      a11 = a[4],
	      a12 = a[5],
	      a20 = a[6],
	      a21 = a[7],
	      a22 = a[8],
	      s = Math.sin(rad),
	      c = Math.cos(rad);

	  out[0] = c * a00 + s * a10;
	  out[1] = c * a01 + s * a11;
	  out[2] = c * a02 + s * a12;

	  out[3] = c * a10 - s * a00;
	  out[4] = c * a11 - s * a01;
	  out[5] = c * a12 - s * a02;

	  out[6] = a20;
	  out[7] = a21;
	  out[8] = a22;
	  return out;
	}
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	function scale$6(out, a, v) {
	  var x = v[0],
	      y = v[1];

	  out[0] = x * a[0];
	  out[1] = x * a[1];
	  out[2] = x * a[2];

	  out[3] = y * a[3];
	  out[4] = y * a[4];
	  out[5] = y * a[5];

	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  return out;
	}

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	function fromTranslation$2(out, v) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 1;
	  out[5] = 0;
	  out[6] = v[0];
	  out[7] = v[1];
	  out[8] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	function fromRotation$2(out, rad) {
	  var s = Math.sin(rad),
	      c = Math.cos(rad);

	  out[0] = c;
	  out[1] = s;
	  out[2] = 0;

	  out[3] = -s;
	  out[4] = c;
	  out[5] = 0;

	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	function fromScaling$1(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;

	  out[3] = 0;
	  out[4] = v[1];
	  out[5] = 0;

	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	function fromMat2d(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = 0;

	  out[3] = a[2];
	  out[4] = a[3];
	  out[5] = 0;

	  out[6] = a[4];
	  out[7] = a[5];
	  out[8] = 1;
	  return out;
	}

	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	function fromQuat$1(out, q) {
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var yx = y * x2;
	  var yy = y * y2;
	  var zx = z * x2;
	  var zy = z * y2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  out[0] = 1 - yy - zz;
	  out[3] = yx - wz;
	  out[6] = zx + wy;

	  out[1] = yx + wz;
	  out[4] = 1 - xx - zz;
	  out[7] = zy - wx;

	  out[2] = zx - wy;
	  out[5] = zy + wx;
	  out[8] = 1 - xx - yy;

	  return out;
	}

	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	function normalFromMat4(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  var b00 = a00 * a11 - a01 * a10;
	  var b01 = a00 * a12 - a02 * a10;
	  var b02 = a00 * a13 - a03 * a10;
	  var b03 = a01 * a12 - a02 * a11;
	  var b04 = a01 * a13 - a03 * a11;
	  var b05 = a02 * a13 - a03 * a12;
	  var b06 = a20 * a31 - a21 * a30;
	  var b07 = a20 * a32 - a22 * a30;
	  var b08 = a20 * a33 - a23 * a30;
	  var b09 = a21 * a32 - a22 * a31;
	  var b10 = a21 * a33 - a23 * a31;
	  var b11 = a22 * a33 - a23 * a32;

	  // Calculate the determinant
	  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

	  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

	  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

	  return out;
	}

	/**
	 * Generates a 2D projection matrix with the given bounds
	 *
	 * @param {mat3} out mat3 frustum matrix will be written into
	 * @param {number} width Width of your gl context
	 * @param {number} height Height of gl context
	 * @returns {mat3} out
	 */
	function projection(out, width, height) {
	  out[0] = 2 / width;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = -2 / height;
	  out[5] = 0;
	  out[6] = -1;
	  out[7] = 1;
	  out[8] = 1;
	  return out;
	}

	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$6(a) {
	  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob$1(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
	}

	/**
	 * Adds two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	function add$6(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  out[6] = a[6] + b[6];
	  out[7] = a[7] + b[7];
	  out[8] = a[8] + b[8];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	function subtract$4(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  out[4] = a[4] - b[4];
	  out[5] = a[5] - b[5];
	  out[6] = a[6] - b[6];
	  out[7] = a[7] - b[7];
	  out[8] = a[8] - b[8];
	  return out;
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat3} out
	 */
	function multiplyScalar$1(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  out[6] = a[6] * b;
	  out[7] = a[7] * b;
	  out[8] = a[8] * b;
	  return out;
	}

	/**
	 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat3} out the receiving vector
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat3} out
	 */
	function multiplyScalarAndAdd$1(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  out[4] = a[4] + b[4] * scale;
	  out[5] = a[5] + b[5] * scale;
	  out[6] = a[6] + b[6] * scale;
	  out[7] = a[7] + b[7] * scale;
	  out[8] = a[8] + b[8] * scale;
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$6(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$6(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5],
	      a6 = a[6],
	      a7 = a[7],
	      a8 = a[8];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5],
	      b6 = b[6],
	      b7 = b[7],
	      b8 = b[8];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
	}

	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	var mul$6 = multiply$6;

	/**
	 * Alias for {@link mat3.subtract}
	 * @function
	 */
	var sub$4 = subtract$4;

	var mat3 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$6,
		fromMat4: fromMat4$1,
		clone: clone$6,
		copy: copy$6,
		fromValues: fromValues$6,
		set: set$6,
		identity: identity$3,
		transpose: transpose$1,
		invert: invert$3,
		adjoint: adjoint$1,
		determinant: determinant$1,
		multiply: multiply$6,
		translate: translate$2,
		rotate: rotate$2,
		scale: scale$6,
		fromTranslation: fromTranslation$2,
		fromRotation: fromRotation$2,
		fromScaling: fromScaling$1,
		fromMat2d: fromMat2d,
		fromQuat: fromQuat$1,
		normalFromMat4: normalFromMat4,
		projection: projection,
		str: str$6,
		frob: frob$1,
		add: add$6,
		subtract: subtract$4,
		multiplyScalar: multiplyScalar$1,
		multiplyScalarAndAdd: multiplyScalarAndAdd$1,
		exactEquals: exactEquals$6,
		equals: equals$6,
		mul: mul$6,
		sub: sub$4
	});

	/**
	 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
	 * @module mat4
	 */

	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	function create$5() {
	  var out = new ARRAY_TYPE(16);
	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	  }
	  out[0] = 1;
	  out[5] = 1;
	  out[10] = 1;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	function clone$5(a) {
	  var out = new ARRAY_TYPE(16);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  out[9] = a[9];
	  out[10] = a[10];
	  out[11] = a[11];
	  out[12] = a[12];
	  out[13] = a[13];
	  out[14] = a[14];
	  out[15] = a[15];
	  return out;
	}

	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function copy$5(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  out[8] = a[8];
	  out[9] = a[9];
	  out[10] = a[10];
	  out[11] = a[11];
	  out[12] = a[12];
	  out[13] = a[13];
	  out[14] = a[14];
	  out[15] = a[15];
	  return out;
	}

	/**
	 * Create a new mat4 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} A new mat4
	 */
	function fromValues$5(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	  var out = new ARRAY_TYPE(16);
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m03;
	  out[4] = m10;
	  out[5] = m11;
	  out[6] = m12;
	  out[7] = m13;
	  out[8] = m20;
	  out[9] = m21;
	  out[10] = m22;
	  out[11] = m23;
	  out[12] = m30;
	  out[13] = m31;
	  out[14] = m32;
	  out[15] = m33;
	  return out;
	}

	/**
	 * Set the components of a mat4 to the given values
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} out
	 */
	function set$5(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	  out[0] = m00;
	  out[1] = m01;
	  out[2] = m02;
	  out[3] = m03;
	  out[4] = m10;
	  out[5] = m11;
	  out[6] = m12;
	  out[7] = m13;
	  out[8] = m20;
	  out[9] = m21;
	  out[10] = m22;
	  out[11] = m23;
	  out[12] = m30;
	  out[13] = m31;
	  out[14] = m32;
	  out[15] = m33;
	  return out;
	}

	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	function identity$2(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Transpose the values of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function transpose(out, a) {
	  // If we are transposing ourselves we can skip a few steps but have to cache some values
	  if (out === a) {
	    var a01 = a[1],
	        a02 = a[2],
	        a03 = a[3];
	    var a12 = a[6],
	        a13 = a[7];
	    var a23 = a[11];

	    out[1] = a[4];
	    out[2] = a[8];
	    out[3] = a[12];
	    out[4] = a01;
	    out[6] = a[9];
	    out[7] = a[13];
	    out[8] = a02;
	    out[9] = a12;
	    out[11] = a[14];
	    out[12] = a03;
	    out[13] = a13;
	    out[14] = a23;
	  } else {
	    out[0] = a[0];
	    out[1] = a[4];
	    out[2] = a[8];
	    out[3] = a[12];
	    out[4] = a[1];
	    out[5] = a[5];
	    out[6] = a[9];
	    out[7] = a[13];
	    out[8] = a[2];
	    out[9] = a[6];
	    out[10] = a[10];
	    out[11] = a[14];
	    out[12] = a[3];
	    out[13] = a[7];
	    out[14] = a[11];
	    out[15] = a[15];
	  }

	  return out;
	}

	/**
	 * Inverts a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function invert$2(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  var b00 = a00 * a11 - a01 * a10;
	  var b01 = a00 * a12 - a02 * a10;
	  var b02 = a00 * a13 - a03 * a10;
	  var b03 = a01 * a12 - a02 * a11;
	  var b04 = a01 * a13 - a03 * a11;
	  var b05 = a02 * a13 - a03 * a12;
	  var b06 = a20 * a31 - a21 * a30;
	  var b07 = a20 * a32 - a22 * a30;
	  var b08 = a20 * a33 - a23 * a30;
	  var b09 = a21 * a32 - a22 * a31;
	  var b10 = a21 * a33 - a23 * a31;
	  var b11 = a22 * a33 - a23 * a32;

	  // Calculate the determinant
	  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

	  if (!det) {
	    return null;
	  }
	  det = 1.0 / det;

	  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

	  return out;
	}

	/**
	 * Calculates the adjugate of a mat4
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	function adjoint(out, a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
	  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
	  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
	  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
	  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
	  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
	  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
	  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
	  return out;
	}

	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	function determinant(a) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  var b00 = a00 * a11 - a01 * a10;
	  var b01 = a00 * a12 - a02 * a10;
	  var b02 = a00 * a13 - a03 * a10;
	  var b03 = a01 * a12 - a02 * a11;
	  var b04 = a01 * a13 - a03 * a11;
	  var b05 = a02 * a13 - a03 * a12;
	  var b06 = a20 * a31 - a21 * a30;
	  var b07 = a20 * a32 - a22 * a30;
	  var b08 = a20 * a33 - a23 * a30;
	  var b09 = a21 * a32 - a22 * a31;
	  var b10 = a21 * a33 - a23 * a31;
	  var b11 = a22 * a33 - a23 * a32;

	  // Calculate the determinant
	  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	}

	/**
	 * Multiplies two mat4s
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	function multiply$5(out, a, b) {
	  var a00 = a[0],
	      a01 = a[1],
	      a02 = a[2],
	      a03 = a[3];
	  var a10 = a[4],
	      a11 = a[5],
	      a12 = a[6],
	      a13 = a[7];
	  var a20 = a[8],
	      a21 = a[9],
	      a22 = a[10],
	      a23 = a[11];
	  var a30 = a[12],
	      a31 = a[13],
	      a32 = a[14],
	      a33 = a[15];

	  // Cache only the current line of the second matrix
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
	  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
	  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

	  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
	  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	  return out;
	}

	/**
	 * Translate a mat4 by the given vector
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	function translate$1(out, a, v) {
	  var x = v[0],
	      y = v[1],
	      z = v[2];
	  var a00 = void 0,
	      a01 = void 0,
	      a02 = void 0,
	      a03 = void 0;
	  var a10 = void 0,
	      a11 = void 0,
	      a12 = void 0,
	      a13 = void 0;
	  var a20 = void 0,
	      a21 = void 0,
	      a22 = void 0,
	      a23 = void 0;

	  if (a === out) {
	    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	  } else {
	    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

	    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
	    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
	    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

	    out[12] = a00 * x + a10 * y + a20 * z + a[12];
	    out[13] = a01 * x + a11 * y + a21 * z + a[13];
	    out[14] = a02 * x + a12 * y + a22 * z + a[14];
	    out[15] = a03 * x + a13 * y + a23 * z + a[15];
	  }

	  return out;
	}

	/**
	 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	function scale$5(out, a, v) {
	  var x = v[0],
	      y = v[1],
	      z = v[2];

	  out[0] = a[0] * x;
	  out[1] = a[1] * x;
	  out[2] = a[2] * x;
	  out[3] = a[3] * x;
	  out[4] = a[4] * y;
	  out[5] = a[5] * y;
	  out[6] = a[6] * y;
	  out[7] = a[7] * y;
	  out[8] = a[8] * z;
	  out[9] = a[9] * z;
	  out[10] = a[10] * z;
	  out[11] = a[11] * z;
	  out[12] = a[12];
	  out[13] = a[13];
	  out[14] = a[14];
	  out[15] = a[15];
	  return out;
	}

	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	function rotate$1(out, a, rad, axis) {
	  var x = axis[0],
	      y = axis[1],
	      z = axis[2];
	  var len = Math.sqrt(x * x + y * y + z * z);
	  var s = void 0,
	      c = void 0,
	      t = void 0;
	  var a00 = void 0,
	      a01 = void 0,
	      a02 = void 0,
	      a03 = void 0;
	  var a10 = void 0,
	      a11 = void 0,
	      a12 = void 0,
	      a13 = void 0;
	  var a20 = void 0,
	      a21 = void 0,
	      a22 = void 0,
	      a23 = void 0;
	  var b00 = void 0,
	      b01 = void 0,
	      b02 = void 0;
	  var b10 = void 0,
	      b11 = void 0,
	      b12 = void 0;
	  var b20 = void 0,
	      b21 = void 0,
	      b22 = void 0;

	  if (len < EPSILON) {
	    return null;
	  }

	  len = 1 / len;
	  x *= len;
	  y *= len;
	  z *= len;

	  s = Math.sin(rad);
	  c = Math.cos(rad);
	  t = 1 - c;

	  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
	  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
	  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

	  // Construct the elements of the rotation matrix
	  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
	  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
	  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

	  // Perform rotation-specific matrix multiplication
	  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged last row
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }
	  return out;
	}

	/**
	 * Rotates a matrix by the given angle around the X axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function rotateX$3(out, a, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  var a10 = a[4];
	  var a11 = a[5];
	  var a12 = a[6];
	  var a13 = a[7];
	  var a20 = a[8];
	  var a21 = a[9];
	  var a22 = a[10];
	  var a23 = a[11];

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged rows
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }

	  // Perform axis-specific matrix multiplication
	  out[4] = a10 * c + a20 * s;
	  out[5] = a11 * c + a21 * s;
	  out[6] = a12 * c + a22 * s;
	  out[7] = a13 * c + a23 * s;
	  out[8] = a20 * c - a10 * s;
	  out[9] = a21 * c - a11 * s;
	  out[10] = a22 * c - a12 * s;
	  out[11] = a23 * c - a13 * s;
	  return out;
	}

	/**
	 * Rotates a matrix by the given angle around the Y axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function rotateY$3(out, a, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  var a00 = a[0];
	  var a01 = a[1];
	  var a02 = a[2];
	  var a03 = a[3];
	  var a20 = a[8];
	  var a21 = a[9];
	  var a22 = a[10];
	  var a23 = a[11];

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged rows
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }

	  // Perform axis-specific matrix multiplication
	  out[0] = a00 * c - a20 * s;
	  out[1] = a01 * c - a21 * s;
	  out[2] = a02 * c - a22 * s;
	  out[3] = a03 * c - a23 * s;
	  out[8] = a00 * s + a20 * c;
	  out[9] = a01 * s + a21 * c;
	  out[10] = a02 * s + a22 * c;
	  out[11] = a03 * s + a23 * c;
	  return out;
	}

	/**
	 * Rotates a matrix by the given angle around the Z axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function rotateZ$3(out, a, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);
	  var a00 = a[0];
	  var a01 = a[1];
	  var a02 = a[2];
	  var a03 = a[3];
	  var a10 = a[4];
	  var a11 = a[5];
	  var a12 = a[6];
	  var a13 = a[7];

	  if (a !== out) {
	    // If the source and destination differ, copy the unchanged last row
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	  }

	  // Perform axis-specific matrix multiplication
	  out[0] = a00 * c + a10 * s;
	  out[1] = a01 * c + a11 * s;
	  out[2] = a02 * c + a12 * s;
	  out[3] = a03 * c + a13 * s;
	  out[4] = a10 * c - a00 * s;
	  out[5] = a11 * c - a01 * s;
	  out[6] = a12 * c - a02 * s;
	  out[7] = a13 * c - a03 * s;
	  return out;
	}

	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	function fromTranslation$1(out, v) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = v[0];
	  out[13] = v[1];
	  out[14] = v[2];
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	function fromScaling(out, v) {
	  out[0] = v[0];
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = v[1];
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = v[2];
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	function fromRotation$1(out, rad, axis) {
	  var x = axis[0],
	      y = axis[1],
	      z = axis[2];
	  var len = Math.sqrt(x * x + y * y + z * z);
	  var s = void 0,
	      c = void 0,
	      t = void 0;

	  if (len < EPSILON) {
	    return null;
	  }

	  len = 1 / len;
	  x *= len;
	  y *= len;
	  z *= len;

	  s = Math.sin(rad);
	  c = Math.cos(rad);
	  t = 1 - c;

	  // Perform rotation-specific matrix multiplication
	  out[0] = x * x * t + c;
	  out[1] = y * x * t + z * s;
	  out[2] = z * x * t - y * s;
	  out[3] = 0;
	  out[4] = x * y * t - z * s;
	  out[5] = y * y * t + c;
	  out[6] = z * y * t + x * s;
	  out[7] = 0;
	  out[8] = x * z * t + y * s;
	  out[9] = y * z * t - x * s;
	  out[10] = z * z * t + c;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function fromXRotation(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);

	  // Perform axis-specific matrix multiplication
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = c;
	  out[6] = s;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = -s;
	  out[10] = c;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function fromYRotation(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);

	  // Perform axis-specific matrix multiplication
	  out[0] = c;
	  out[1] = 0;
	  out[2] = -s;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = s;
	  out[9] = 0;
	  out[10] = c;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	function fromZRotation(out, rad) {
	  var s = Math.sin(rad);
	  var c = Math.cos(rad);

	  // Perform axis-specific matrix multiplication
	  out[0] = c;
	  out[1] = s;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = -s;
	  out[5] = c;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     let quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	function fromRotationTranslation$1(out, q, v) {
	  // Quaternion math
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var xy = x * y2;
	  var xz = x * z2;
	  var yy = y * y2;
	  var yz = y * z2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  out[0] = 1 - (yy + zz);
	  out[1] = xy + wz;
	  out[2] = xz - wy;
	  out[3] = 0;
	  out[4] = xy - wz;
	  out[5] = 1 - (xx + zz);
	  out[6] = yz + wx;
	  out[7] = 0;
	  out[8] = xz + wy;
	  out[9] = yz - wx;
	  out[10] = 1 - (xx + yy);
	  out[11] = 0;
	  out[12] = v[0];
	  out[13] = v[1];
	  out[14] = v[2];
	  out[15] = 1;

	  return out;
	}

	/**
	 * Creates a new mat4 from a dual quat.
	 *
	 * @param {mat4} out Matrix
	 * @param {quat2} a Dual Quaternion
	 * @returns {mat4} mat4 receiving operation result
	 */
	function fromQuat2(out, a) {
	  var translation = new ARRAY_TYPE(3);
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7];

	  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
	  //Only scale if it makes sense
	  if (magnitude > 0) {
	    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
	    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
	    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
	  } else {
	    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
	    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
	    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	  }
	  fromRotationTranslation$1(out, a, translation);
	  return out;
	}

	/**
	 * Returns the translation vector component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslation,
	 *  the returned vector will be the same as the translation vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive translation component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	function getTranslation$1(out, mat) {
	  out[0] = mat[12];
	  out[1] = mat[13];
	  out[2] = mat[14];

	  return out;
	}

	/**
	 * Returns the scaling factor component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslationScale
	 *  with a normalized Quaternion paramter, the returned vector will be
	 *  the same as the scaling vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive scaling factor component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	function getScaling(out, mat) {
	  var m11 = mat[0];
	  var m12 = mat[1];
	  var m13 = mat[2];
	  var m21 = mat[4];
	  var m22 = mat[5];
	  var m23 = mat[6];
	  var m31 = mat[8];
	  var m32 = mat[9];
	  var m33 = mat[10];

	  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
	  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
	  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

	  return out;
	}

	/**
	 * Returns a quaternion representing the rotational component
	 *  of a transformation matrix. If a matrix is built with
	 *  fromRotationTranslation, the returned quaternion will be the
	 *  same as the quaternion originally supplied.
	 * @param {quat} out Quaternion to receive the rotation component
	 * @param {mat4} mat Matrix to be decomposed (input)
	 * @return {quat} out
	 */
	function getRotation(out, mat) {
	  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
	  var trace = mat[0] + mat[5] + mat[10];
	  var S = 0;

	  if (trace > 0) {
	    S = Math.sqrt(trace + 1.0) * 2;
	    out[3] = 0.25 * S;
	    out[0] = (mat[6] - mat[9]) / S;
	    out[1] = (mat[8] - mat[2]) / S;
	    out[2] = (mat[1] - mat[4]) / S;
	  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
	    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
	    out[3] = (mat[6] - mat[9]) / S;
	    out[0] = 0.25 * S;
	    out[1] = (mat[1] + mat[4]) / S;
	    out[2] = (mat[8] + mat[2]) / S;
	  } else if (mat[5] > mat[10]) {
	    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
	    out[3] = (mat[8] - mat[2]) / S;
	    out[0] = (mat[1] + mat[4]) / S;
	    out[1] = 0.25 * S;
	    out[2] = (mat[6] + mat[9]) / S;
	  } else {
	    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
	    out[3] = (mat[1] - mat[4]) / S;
	    out[0] = (mat[8] + mat[2]) / S;
	    out[1] = (mat[6] + mat[9]) / S;
	    out[2] = 0.25 * S;
	  }

	  return out;
	}

	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     let quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	function fromRotationTranslationScale(out, q, v, s) {
	  // Quaternion math
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var xy = x * y2;
	  var xz = x * z2;
	  var yy = y * y2;
	  var yz = y * z2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;
	  var sx = s[0];
	  var sy = s[1];
	  var sz = s[2];

	  out[0] = (1 - (yy + zz)) * sx;
	  out[1] = (xy + wz) * sx;
	  out[2] = (xz - wy) * sx;
	  out[3] = 0;
	  out[4] = (xy - wz) * sy;
	  out[5] = (1 - (xx + zz)) * sy;
	  out[6] = (yz + wx) * sy;
	  out[7] = 0;
	  out[8] = (xz + wy) * sz;
	  out[9] = (yz - wx) * sz;
	  out[10] = (1 - (xx + yy)) * sz;
	  out[11] = 0;
	  out[12] = v[0];
	  out[13] = v[1];
	  out[14] = v[2];
	  out[15] = 1;

	  return out;
	}

	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     let quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
	  // Quaternion math
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var xy = x * y2;
	  var xz = x * z2;
	  var yy = y * y2;
	  var yz = y * z2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  var sx = s[0];
	  var sy = s[1];
	  var sz = s[2];

	  var ox = o[0];
	  var oy = o[1];
	  var oz = o[2];

	  var out0 = (1 - (yy + zz)) * sx;
	  var out1 = (xy + wz) * sx;
	  var out2 = (xz - wy) * sx;
	  var out4 = (xy - wz) * sy;
	  var out5 = (1 - (xx + zz)) * sy;
	  var out6 = (yz + wx) * sy;
	  var out8 = (xz + wy) * sz;
	  var out9 = (yz - wx) * sz;
	  var out10 = (1 - (xx + yy)) * sz;

	  out[0] = out0;
	  out[1] = out1;
	  out[2] = out2;
	  out[3] = 0;
	  out[4] = out4;
	  out[5] = out5;
	  out[6] = out6;
	  out[7] = 0;
	  out[8] = out8;
	  out[9] = out9;
	  out[10] = out10;
	  out[11] = 0;
	  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
	  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
	  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
	  out[15] = 1;

	  return out;
	}

	/**
	 * Calculates a 4x4 matrix from the given quaternion
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat} q Quaternion to create matrix from
	 *
	 * @returns {mat4} out
	 */
	function fromQuat(out, q) {
	  var x = q[0],
	      y = q[1],
	      z = q[2],
	      w = q[3];
	  var x2 = x + x;
	  var y2 = y + y;
	  var z2 = z + z;

	  var xx = x * x2;
	  var yx = y * x2;
	  var yy = y * y2;
	  var zx = z * x2;
	  var zy = z * y2;
	  var zz = z * z2;
	  var wx = w * x2;
	  var wy = w * y2;
	  var wz = w * z2;

	  out[0] = 1 - yy - zz;
	  out[1] = yx + wz;
	  out[2] = zx - wy;
	  out[3] = 0;

	  out[4] = yx - wz;
	  out[5] = 1 - xx - zz;
	  out[6] = zy + wx;
	  out[7] = 0;

	  out[8] = zx + wy;
	  out[9] = zy - wx;
	  out[10] = 1 - xx - yy;
	  out[11] = 0;

	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;

	  return out;
	}

	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	function frustum(out, left, right, bottom, top, near, far) {
	  var rl = 1 / (right - left);
	  var tb = 1 / (top - bottom);
	  var nf = 1 / (near - far);
	  out[0] = near * 2 * rl;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = near * 2 * tb;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = (right + left) * rl;
	  out[9] = (top + bottom) * tb;
	  out[10] = (far + near) * nf;
	  out[11] = -1;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = far * near * 2 * nf;
	  out[15] = 0;
	  return out;
	}

	/**
	 * Generates a perspective projection matrix with the given bounds.
	 * Passing null/undefined/no value for far will generate infinite projection matrix.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum, can be null or Infinity
	 * @returns {mat4} out
	 */
	function perspective(out, fovy, aspect, near, far) {
	  var f = 1.0 / Math.tan(fovy / 2),
	      nf = void 0;
	  out[0] = f / aspect;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = f;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[11] = -1;
	  out[12] = 0;
	  out[13] = 0;
	  out[15] = 0;
	  if (far != null && far !== Infinity) {
	    nf = 1 / (near - far);
	    out[10] = (far + near) * nf;
	    out[14] = 2 * far * near * nf;
	  } else {
	    out[10] = -1;
	    out[14] = -2 * near;
	  }
	  return out;
	}

	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	function perspectiveFromFieldOfView(out, fov, near, far) {
	  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
	  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
	  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
	  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
	  var xScale = 2.0 / (leftTan + rightTan);
	  var yScale = 2.0 / (upTan + downTan);

	  out[0] = xScale;
	  out[1] = 0.0;
	  out[2] = 0.0;
	  out[3] = 0.0;
	  out[4] = 0.0;
	  out[5] = yScale;
	  out[6] = 0.0;
	  out[7] = 0.0;
	  out[8] = -((leftTan - rightTan) * xScale * 0.5);
	  out[9] = (upTan - downTan) * yScale * 0.5;
	  out[10] = far / (near - far);
	  out[11] = -1.0;
	  out[12] = 0.0;
	  out[13] = 0.0;
	  out[14] = far * near / (near - far);
	  out[15] = 0.0;
	  return out;
	}

	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	function ortho(out, left, right, bottom, top, near, far) {
	  var lr = 1 / (left - right);
	  var bt = 1 / (bottom - top);
	  var nf = 1 / (near - far);
	  out[0] = -2 * lr;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = -2 * bt;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 2 * nf;
	  out[11] = 0;
	  out[12] = (left + right) * lr;
	  out[13] = (top + bottom) * bt;
	  out[14] = (far + near) * nf;
	  out[15] = 1;
	  return out;
	}

	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis.
	 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	function lookAt(out, eye, center, up) {
	  var x0 = void 0,
	      x1 = void 0,
	      x2 = void 0,
	      y0 = void 0,
	      y1 = void 0,
	      y2 = void 0,
	      z0 = void 0,
	      z1 = void 0,
	      z2 = void 0,
	      len = void 0;
	  var eyex = eye[0];
	  var eyey = eye[1];
	  var eyez = eye[2];
	  var upx = up[0];
	  var upy = up[1];
	  var upz = up[2];
	  var centerx = center[0];
	  var centery = center[1];
	  var centerz = center[2];

	  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
	    return identity$2(out);
	  }

	  z0 = eyex - centerx;
	  z1 = eyey - centery;
	  z2 = eyez - centerz;

	  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	  z0 *= len;
	  z1 *= len;
	  z2 *= len;

	  x0 = upy * z2 - upz * z1;
	  x1 = upz * z0 - upx * z2;
	  x2 = upx * z1 - upy * z0;
	  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	  if (!len) {
	    x0 = 0;
	    x1 = 0;
	    x2 = 0;
	  } else {
	    len = 1 / len;
	    x0 *= len;
	    x1 *= len;
	    x2 *= len;
	  }

	  y0 = z1 * x2 - z2 * x1;
	  y1 = z2 * x0 - z0 * x2;
	  y2 = z0 * x1 - z1 * x0;

	  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	  if (!len) {
	    y0 = 0;
	    y1 = 0;
	    y2 = 0;
	  } else {
	    len = 1 / len;
	    y0 *= len;
	    y1 *= len;
	    y2 *= len;
	  }

	  out[0] = x0;
	  out[1] = y0;
	  out[2] = z0;
	  out[3] = 0;
	  out[4] = x1;
	  out[5] = y1;
	  out[6] = z1;
	  out[7] = 0;
	  out[8] = x2;
	  out[9] = y2;
	  out[10] = z2;
	  out[11] = 0;
	  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	  out[15] = 1;

	  return out;
	}

	/**
	 * Generates a matrix that makes something look at something else.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	function targetTo(out, eye, target, up) {
	  var eyex = eye[0],
	      eyey = eye[1],
	      eyez = eye[2],
	      upx = up[0],
	      upy = up[1],
	      upz = up[2];

	  var z0 = eyex - target[0],
	      z1 = eyey - target[1],
	      z2 = eyez - target[2];

	  var len = z0 * z0 + z1 * z1 + z2 * z2;
	  if (len > 0) {
	    len = 1 / Math.sqrt(len);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	  }

	  var x0 = upy * z2 - upz * z1,
	      x1 = upz * z0 - upx * z2,
	      x2 = upx * z1 - upy * z0;

	  len = x0 * x0 + x1 * x1 + x2 * x2;
	  if (len > 0) {
	    len = 1 / Math.sqrt(len);
	    x0 *= len;
	    x1 *= len;
	    x2 *= len;
	  }

	  out[0] = x0;
	  out[1] = x1;
	  out[2] = x2;
	  out[3] = 0;
	  out[4] = z1 * x2 - z2 * x1;
	  out[5] = z2 * x0 - z0 * x2;
	  out[6] = z0 * x1 - z1 * x0;
	  out[7] = 0;
	  out[8] = z0;
	  out[9] = z1;
	  out[10] = z2;
	  out[11] = 0;
	  out[12] = eyex;
	  out[13] = eyey;
	  out[14] = eyez;
	  out[15] = 1;
	  return out;
	}
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	function str$5(a) {
	  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	}

	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	function frob(a) {
	  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
	}

	/**
	 * Adds two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	function add$5(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  out[6] = a[6] + b[6];
	  out[7] = a[7] + b[7];
	  out[8] = a[8] + b[8];
	  out[9] = a[9] + b[9];
	  out[10] = a[10] + b[10];
	  out[11] = a[11] + b[11];
	  out[12] = a[12] + b[12];
	  out[13] = a[13] + b[13];
	  out[14] = a[14] + b[14];
	  out[15] = a[15] + b[15];
	  return out;
	}

	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	function subtract$3(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  out[4] = a[4] - b[4];
	  out[5] = a[5] - b[5];
	  out[6] = a[6] - b[6];
	  out[7] = a[7] - b[7];
	  out[8] = a[8] - b[8];
	  out[9] = a[9] - b[9];
	  out[10] = a[10] - b[10];
	  out[11] = a[11] - b[11];
	  out[12] = a[12] - b[12];
	  out[13] = a[13] - b[13];
	  out[14] = a[14] - b[14];
	  out[15] = a[15] - b[15];
	  return out;
	}

	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat4} out
	 */
	function multiplyScalar(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  out[6] = a[6] * b;
	  out[7] = a[7] * b;
	  out[8] = a[8] * b;
	  out[9] = a[9] * b;
	  out[10] = a[10] * b;
	  out[11] = a[11] * b;
	  out[12] = a[12] * b;
	  out[13] = a[13] * b;
	  out[14] = a[14] * b;
	  out[15] = a[15] * b;
	  return out;
	}

	/**
	 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat4} out the receiving vector
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat4} out
	 */
	function multiplyScalarAndAdd(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  out[4] = a[4] + b[4] * scale;
	  out[5] = a[5] + b[5] * scale;
	  out[6] = a[6] + b[6] * scale;
	  out[7] = a[7] + b[7] * scale;
	  out[8] = a[8] + b[8] * scale;
	  out[9] = a[9] + b[9] * scale;
	  out[10] = a[10] + b[10] * scale;
	  out[11] = a[11] + b[11] * scale;
	  out[12] = a[12] + b[12] * scale;
	  out[13] = a[13] + b[13] * scale;
	  out[14] = a[14] + b[14] * scale;
	  out[15] = a[15] + b[15] * scale;
	  return out;
	}

	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function exactEquals$5(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
	}

	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	function equals$5(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var a4 = a[4],
	      a5 = a[5],
	      a6 = a[6],
	      a7 = a[7];
	  var a8 = a[8],
	      a9 = a[9],
	      a10 = a[10],
	      a11 = a[11];
	  var a12 = a[12],
	      a13 = a[13],
	      a14 = a[14],
	      a15 = a[15];

	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  var b4 = b[4],
	      b5 = b[5],
	      b6 = b[6],
	      b7 = b[7];
	  var b8 = b[8],
	      b9 = b[9],
	      b10 = b[10],
	      b11 = b[11];
	  var b12 = b[12],
	      b13 = b[13],
	      b14 = b[14],
	      b15 = b[15];

	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
	}

	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	var mul$5 = multiply$5;

	/**
	 * Alias for {@link mat4.subtract}
	 * @function
	 */
	var sub$3 = subtract$3;

	var mat4 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$5,
		clone: clone$5,
		copy: copy$5,
		fromValues: fromValues$5,
		set: set$5,
		identity: identity$2,
		transpose: transpose,
		invert: invert$2,
		adjoint: adjoint,
		determinant: determinant,
		multiply: multiply$5,
		translate: translate$1,
		scale: scale$5,
		rotate: rotate$1,
		rotateX: rotateX$3,
		rotateY: rotateY$3,
		rotateZ: rotateZ$3,
		fromTranslation: fromTranslation$1,
		fromScaling: fromScaling,
		fromRotation: fromRotation$1,
		fromXRotation: fromXRotation,
		fromYRotation: fromYRotation,
		fromZRotation: fromZRotation,
		fromRotationTranslation: fromRotationTranslation$1,
		fromQuat2: fromQuat2,
		getTranslation: getTranslation$1,
		getScaling: getScaling,
		getRotation: getRotation,
		fromRotationTranslationScale: fromRotationTranslationScale,
		fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
		fromQuat: fromQuat,
		frustum: frustum,
		perspective: perspective,
		perspectiveFromFieldOfView: perspectiveFromFieldOfView,
		ortho: ortho,
		lookAt: lookAt,
		targetTo: targetTo,
		str: str$5,
		frob: frob,
		add: add$5,
		subtract: subtract$3,
		multiplyScalar: multiplyScalar,
		multiplyScalarAndAdd: multiplyScalarAndAdd,
		exactEquals: exactEquals$5,
		equals: equals$5,
		mul: mul$5,
		sub: sub$3
	});

	/**
	 * 3 Dimensional Vector
	 * @module vec3
	 */

	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	function create$4() {
	  var out = new ARRAY_TYPE(3);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	  }
	  return out;
	}

	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	function clone$4(a) {
	  var out = new ARRAY_TYPE(3);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  return out;
	}

	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	function length$4(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  return Math.sqrt(x * x + y * y + z * z);
	}

	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	function fromValues$4(x, y, z) {
	  var out = new ARRAY_TYPE(3);
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  return out;
	}

	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	function copy$4(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  return out;
	}

	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	function set$4(out, x, y, z) {
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  return out;
	}

	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function add$4(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  return out;
	}

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function subtract$2(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  return out;
	}

	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function multiply$4(out, a, b) {
	  out[0] = a[0] * b[0];
	  out[1] = a[1] * b[1];
	  out[2] = a[2] * b[2];
	  return out;
	}

	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function divide$2(out, a, b) {
	  out[0] = a[0] / b[0];
	  out[1] = a[1] / b[1];
	  out[2] = a[2] / b[2];
	  return out;
	}

	/**
	 * Math.ceil the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to ceil
	 * @returns {vec3} out
	 */
	function ceil$2(out, a) {
	  out[0] = Math.ceil(a[0]);
	  out[1] = Math.ceil(a[1]);
	  out[2] = Math.ceil(a[2]);
	  return out;
	}

	/**
	 * Math.floor the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to floor
	 * @returns {vec3} out
	 */
	function floor$2(out, a) {
	  out[0] = Math.floor(a[0]);
	  out[1] = Math.floor(a[1]);
	  out[2] = Math.floor(a[2]);
	  return out;
	}

	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function min$2(out, a, b) {
	  out[0] = Math.min(a[0], b[0]);
	  out[1] = Math.min(a[1], b[1]);
	  out[2] = Math.min(a[2], b[2]);
	  return out;
	}

	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function max$2(out, a, b) {
	  out[0] = Math.max(a[0], b[0]);
	  out[1] = Math.max(a[1], b[1]);
	  out[2] = Math.max(a[2], b[2]);
	  return out;
	}

	/**
	 * Math.round the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to round
	 * @returns {vec3} out
	 */
	function round$2(out, a) {
	  out[0] = Math.round(a[0]);
	  out[1] = Math.round(a[1]);
	  out[2] = Math.round(a[2]);
	  return out;
	}

	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	function scale$4(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  return out;
	}

	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	function scaleAndAdd$2(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  return out;
	}

	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	function distance$2(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  return Math.sqrt(x * x + y * y + z * z);
	}

	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	function squaredDistance$2(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  return x * x + y * y + z * z;
	}

	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	function squaredLength$4(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  return x * x + y * y + z * z;
	}

	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	function negate$2(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  return out;
	}

	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	function inverse$2(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  return out;
	}

	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	function normalize$4(out, a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var len = x * x + y * y + z * z;
	  if (len > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len = 1 / Math.sqrt(len);
	    out[0] = a[0] * len;
	    out[1] = a[1] * len;
	    out[2] = a[2] * len;
	  }
	  return out;
	}

	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot$4(a, b) {
	  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	}

	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	function cross$1(out, a, b) {
	  var ax = a[0],
	      ay = a[1],
	      az = a[2];
	  var bx = b[0],
	      by = b[1],
	      bz = b[2];

	  out[0] = ay * bz - az * by;
	  out[1] = az * bx - ax * bz;
	  out[2] = ax * by - ay * bx;
	  return out;
	}

	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec3} out
	 */
	function lerp$4(out, a, b, t) {
	  var ax = a[0];
	  var ay = a[1];
	  var az = a[2];
	  out[0] = ax + t * (b[0] - ax);
	  out[1] = ay + t * (b[1] - ay);
	  out[2] = az + t * (b[2] - az);
	  return out;
	}

	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec3} out
	 */
	function hermite(out, a, b, c, d, t) {
	  var factorTimes2 = t * t;
	  var factor1 = factorTimes2 * (2 * t - 3) + 1;
	  var factor2 = factorTimes2 * (t - 2) + t;
	  var factor3 = factorTimes2 * (t - 1);
	  var factor4 = factorTimes2 * (3 - 2 * t);

	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

	  return out;
	}

	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec3} out
	 */
	function bezier(out, a, b, c, d, t) {
	  var inverseFactor = 1 - t;
	  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
	  var factorTimes2 = t * t;
	  var factor1 = inverseFactorTimesTwo * inverseFactor;
	  var factor2 = 3 * t * inverseFactorTimesTwo;
	  var factor3 = 3 * factorTimes2 * inverseFactor;
	  var factor4 = factorTimes2 * t;

	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

	  return out;
	}

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	function random$3(out, scale) {
	  scale = scale || 1.0;

	  var r = RANDOM() * 2.0 * Math.PI;
	  var z = RANDOM() * 2.0 - 1.0;
	  var zScale = Math.sqrt(1.0 - z * z) * scale;

	  out[0] = Math.cos(r) * zScale;
	  out[1] = Math.sin(r) * zScale;
	  out[2] = z * scale;
	  return out;
	}

	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	function transformMat4$2(out, a, m) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
	  w = w || 1.0;
	  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	  return out;
	}

	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat3} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	function transformMat3$1(out, a, m) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  out[0] = x * m[0] + y * m[3] + z * m[6];
	  out[1] = x * m[1] + y * m[4] + z * m[7];
	  out[2] = x * m[2] + y * m[5] + z * m[8];
	  return out;
	}

	/**
	 * Transforms the vec3 with a quat
	 * Can also be used for dual quaternions. (Multiply it with the real part)
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	function transformQuat$1(out, a, q) {
	  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3];
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  // var qvec = [qx, qy, qz];
	  // var uv = vec3.cross([], qvec, a);
	  var uvx = qy * z - qz * y,
	      uvy = qz * x - qx * z,
	      uvz = qx * y - qy * x;
	  // var uuv = vec3.cross([], qvec, uv);
	  var uuvx = qy * uvz - qz * uvy,
	      uuvy = qz * uvx - qx * uvz,
	      uuvz = qx * uvy - qy * uvx;
	  // vec3.scale(uv, uv, 2 * w);
	  var w2 = qw * 2;
	  uvx *= w2;
	  uvy *= w2;
	  uvz *= w2;
	  // vec3.scale(uuv, uuv, 2);
	  uuvx *= 2;
	  uuvy *= 2;
	  uuvz *= 2;
	  // return vec3.add(out, a, vec3.add(out, uv, uuv));
	  out[0] = x + uvx + uuvx;
	  out[1] = y + uvy + uuvy;
	  out[2] = z + uvz + uuvz;
	  return out;
	}

	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	function rotateX$2(out, a, b, c) {
	  var p = [],
	      r = [];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	  p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
	  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	  return out;
	}

	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	function rotateY$2(out, a, b, c) {
	  var p = [],
	      r = [];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	  p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
	  r[1] = p[1];
	  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	  return out;
	}

	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	function rotateZ$2(out, a, b, c) {
	  var p = [],
	      r = [];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
	  p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
	  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
	  r[2] = p[2];

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

	  return out;
	}

	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	function angle$1(a, b) {
	  var tempA = fromValues$4(a[0], a[1], a[2]);
	  var tempB = fromValues$4(b[0], b[1], b[2]);

	  normalize$4(tempA, tempA);
	  normalize$4(tempB, tempB);

	  var cosine = dot$4(tempA, tempB);

	  if (cosine > 1.0) {
	    return 0;
	  } else if (cosine < -1.0) {
	    return Math.PI;
	  } else {
	    return Math.acos(cosine);
	  }
	}

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str$4(a) {
	  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	}

	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function exactEquals$4(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	}

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function equals$4(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
	}

	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	var sub$2 = subtract$2;

	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	var mul$4 = multiply$4;

	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	var div$2 = divide$2;

	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	var dist$2 = distance$2;

	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	var sqrDist$2 = squaredDistance$2;

	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	var len$4 = length$4;

	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	var sqrLen$4 = squaredLength$4;

	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	var forEach$2 = function () {
	  var vec = create$4();

	  return function (a, stride, offset, count, fn, arg) {
	    var i = void 0,
	        l = void 0;
	    if (!stride) {
	      stride = 3;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
	      fn(vec, vec, arg);
	      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
	    }

	    return a;
	  };
	}();

	var vec3 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$4,
		clone: clone$4,
		length: length$4,
		fromValues: fromValues$4,
		copy: copy$4,
		set: set$4,
		add: add$4,
		subtract: subtract$2,
		multiply: multiply$4,
		divide: divide$2,
		ceil: ceil$2,
		floor: floor$2,
		min: min$2,
		max: max$2,
		round: round$2,
		scale: scale$4,
		scaleAndAdd: scaleAndAdd$2,
		distance: distance$2,
		squaredDistance: squaredDistance$2,
		squaredLength: squaredLength$4,
		negate: negate$2,
		inverse: inverse$2,
		normalize: normalize$4,
		dot: dot$4,
		cross: cross$1,
		lerp: lerp$4,
		hermite: hermite,
		bezier: bezier,
		random: random$3,
		transformMat4: transformMat4$2,
		transformMat3: transformMat3$1,
		transformQuat: transformQuat$1,
		rotateX: rotateX$2,
		rotateY: rotateY$2,
		rotateZ: rotateZ$2,
		angle: angle$1,
		str: str$4,
		exactEquals: exactEquals$4,
		equals: equals$4,
		sub: sub$2,
		mul: mul$4,
		div: div$2,
		dist: dist$2,
		sqrDist: sqrDist$2,
		len: len$4,
		sqrLen: sqrLen$4,
		forEach: forEach$2
	});

	/**
	 * 4 Dimensional Vector
	 * @module vec4
	 */

	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	function create$3() {
	  var out = new ARRAY_TYPE(4);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	  }
	  return out;
	}

	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	function clone$3(a) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	function fromValues$3(x, y, z, w) {
	  var out = new ARRAY_TYPE(4);
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  out[3] = w;
	  return out;
	}

	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	function copy$3(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	function set$3(out, x, y, z, w) {
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  out[3] = w;
	  return out;
	}

	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function add$3(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  return out;
	}

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function subtract$1(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  out[2] = a[2] - b[2];
	  out[3] = a[3] - b[3];
	  return out;
	}

	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function multiply$3(out, a, b) {
	  out[0] = a[0] * b[0];
	  out[1] = a[1] * b[1];
	  out[2] = a[2] * b[2];
	  out[3] = a[3] * b[3];
	  return out;
	}

	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function divide$1(out, a, b) {
	  out[0] = a[0] / b[0];
	  out[1] = a[1] / b[1];
	  out[2] = a[2] / b[2];
	  out[3] = a[3] / b[3];
	  return out;
	}

	/**
	 * Math.ceil the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to ceil
	 * @returns {vec4} out
	 */
	function ceil$1(out, a) {
	  out[0] = Math.ceil(a[0]);
	  out[1] = Math.ceil(a[1]);
	  out[2] = Math.ceil(a[2]);
	  out[3] = Math.ceil(a[3]);
	  return out;
	}

	/**
	 * Math.floor the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to floor
	 * @returns {vec4} out
	 */
	function floor$1(out, a) {
	  out[0] = Math.floor(a[0]);
	  out[1] = Math.floor(a[1]);
	  out[2] = Math.floor(a[2]);
	  out[3] = Math.floor(a[3]);
	  return out;
	}

	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function min$1(out, a, b) {
	  out[0] = Math.min(a[0], b[0]);
	  out[1] = Math.min(a[1], b[1]);
	  out[2] = Math.min(a[2], b[2]);
	  out[3] = Math.min(a[3], b[3]);
	  return out;
	}

	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	function max$1(out, a, b) {
	  out[0] = Math.max(a[0], b[0]);
	  out[1] = Math.max(a[1], b[1]);
	  out[2] = Math.max(a[2], b[2]);
	  out[3] = Math.max(a[3], b[3]);
	  return out;
	}

	/**
	 * Math.round the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to round
	 * @returns {vec4} out
	 */
	function round$1(out, a) {
	  out[0] = Math.round(a[0]);
	  out[1] = Math.round(a[1]);
	  out[2] = Math.round(a[2]);
	  out[3] = Math.round(a[3]);
	  return out;
	}

	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	function scale$3(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  return out;
	}

	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	function scaleAndAdd$1(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  out[2] = a[2] + b[2] * scale;
	  out[3] = a[3] + b[3] * scale;
	  return out;
	}

	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	function distance$1(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  var w = b[3] - a[3];
	  return Math.sqrt(x * x + y * y + z * z + w * w);
	}

	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	function squaredDistance$1(a, b) {
	  var x = b[0] - a[0];
	  var y = b[1] - a[1];
	  var z = b[2] - a[2];
	  var w = b[3] - a[3];
	  return x * x + y * y + z * z + w * w;
	}

	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	function length$3(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var w = a[3];
	  return Math.sqrt(x * x + y * y + z * z + w * w);
	}

	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	function squaredLength$3(a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var w = a[3];
	  return x * x + y * y + z * z + w * w;
	}

	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	function negate$1(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = -a[3];
	  return out;
	}

	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	function inverse$1(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  out[3] = 1.0 / a[3];
	  return out;
	}

	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	function normalize$3(out, a) {
	  var x = a[0];
	  var y = a[1];
	  var z = a[2];
	  var w = a[3];
	  var len = x * x + y * y + z * z + w * w;
	  if (len > 0) {
	    len = 1 / Math.sqrt(len);
	    out[0] = x * len;
	    out[1] = y * len;
	    out[2] = z * len;
	    out[3] = w * len;
	  }
	  return out;
	}

	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot$3(a, b) {
	  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	}

	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec4} out
	 */
	function lerp$3(out, a, b, t) {
	  var ax = a[0];
	  var ay = a[1];
	  var az = a[2];
	  var aw = a[3];
	  out[0] = ax + t * (b[0] - ax);
	  out[1] = ay + t * (b[1] - ay);
	  out[2] = az + t * (b[2] - az);
	  out[3] = aw + t * (b[3] - aw);
	  return out;
	}

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	function random$2(out, scale) {
	  scale = scale || 1.0;

	  // Marsaglia, George. Choosing a Point from the Surface of a
	  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
	  // http://projecteuclid.org/euclid.aoms/1177692644;
	  var v1, v2, v3, v4;
	  var s1, s2;
	  do {
	    v1 = RANDOM() * 2 - 1;
	    v2 = RANDOM() * 2 - 1;
	    s1 = v1 * v1 + v2 * v2;
	  } while (s1 >= 1);
	  do {
	    v3 = RANDOM() * 2 - 1;
	    v4 = RANDOM() * 2 - 1;
	    s2 = v3 * v3 + v4 * v4;
	  } while (s2 >= 1);

	  var d = Math.sqrt((1 - s1) / s2);
	  out[0] = scale * v1;
	  out[1] = scale * v2;
	  out[2] = scale * v3 * d;
	  out[3] = scale * v4 * d;
	  return out;
	}

	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	function transformMat4$1(out, a, m) {
	  var x = a[0],
	      y = a[1],
	      z = a[2],
	      w = a[3];
	  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	  return out;
	}

	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	function transformQuat(out, a, q) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3];

	  // calculate quat * vec
	  var ix = qw * x + qy * z - qz * y;
	  var iy = qw * y + qz * x - qx * z;
	  var iz = qw * z + qx * y - qy * x;
	  var iw = -qx * x - qy * y - qz * z;

	  // calculate result * inverse quat
	  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str$3(a) {
	  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	}

	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function exactEquals$3(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	}

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function equals$3(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
	}

	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	var sub$1 = subtract$1;

	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	var mul$3 = multiply$3;

	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	var div$1 = divide$1;

	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	var dist$1 = distance$1;

	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	var sqrDist$1 = squaredDistance$1;

	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	var len$3 = length$3;

	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	var sqrLen$3 = squaredLength$3;

	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	var forEach$1 = function () {
	  var vec = create$3();

	  return function (a, stride, offset, count, fn, arg) {
	    var i = void 0,
	        l = void 0;
	    if (!stride) {
	      stride = 4;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
	      fn(vec, vec, arg);
	      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
	    }

	    return a;
	  };
	}();

	var vec4 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$3,
		clone: clone$3,
		fromValues: fromValues$3,
		copy: copy$3,
		set: set$3,
		add: add$3,
		subtract: subtract$1,
		multiply: multiply$3,
		divide: divide$1,
		ceil: ceil$1,
		floor: floor$1,
		min: min$1,
		max: max$1,
		round: round$1,
		scale: scale$3,
		scaleAndAdd: scaleAndAdd$1,
		distance: distance$1,
		squaredDistance: squaredDistance$1,
		length: length$3,
		squaredLength: squaredLength$3,
		negate: negate$1,
		inverse: inverse$1,
		normalize: normalize$3,
		dot: dot$3,
		lerp: lerp$3,
		random: random$2,
		transformMat4: transformMat4$1,
		transformQuat: transformQuat,
		str: str$3,
		exactEquals: exactEquals$3,
		equals: equals$3,
		sub: sub$1,
		mul: mul$3,
		div: div$1,
		dist: dist$1,
		sqrDist: sqrDist$1,
		len: len$3,
		sqrLen: sqrLen$3,
		forEach: forEach$1
	});

	/**
	 * Quaternion
	 * @module quat
	 */

	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	function create$2() {
	  var out = new ARRAY_TYPE(4);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	  }
	  out[3] = 1;
	  return out;
	}

	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	function identity$1(out) {
	  out[0] = 0;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  return out;
	}

	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	function setAxisAngle(out, axis, rad) {
	  rad = rad * 0.5;
	  var s = Math.sin(rad);
	  out[0] = s * axis[0];
	  out[1] = s * axis[1];
	  out[2] = s * axis[2];
	  out[3] = Math.cos(rad);
	  return out;
	}

	/**
	 * Gets the rotation axis and angle for a given
	 *  quaternion. If a quaternion is created with
	 *  setAxisAngle, this method will return the same
	 *  values as providied in the original parameter list
	 *  OR functionally equivalent values.
	 * Example: The quaternion formed by axis [0, 0, 1] and
	 *  angle -90 is the same as the quaternion formed by
	 *  [0, 0, 1] and 270. This method favors the latter.
	 * @param  {vec3} out_axis  Vector receiving the axis of rotation
	 * @param  {quat} q     Quaternion to be decomposed
	 * @return {Number}     Angle, in radians, of the rotation
	 */
	function getAxisAngle(out_axis, q) {
	  var rad = Math.acos(q[3]) * 2.0;
	  var s = Math.sin(rad / 2.0);
	  if (s > EPSILON) {
	    out_axis[0] = q[0] / s;
	    out_axis[1] = q[1] / s;
	    out_axis[2] = q[2] / s;
	  } else {
	    // If s is zero, return any axis (no rotation - axis does not matter)
	    out_axis[0] = 1;
	    out_axis[1] = 0;
	    out_axis[2] = 0;
	  }
	  return rad;
	}

	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	function multiply$2(out, a, b) {
	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bx = b[0],
	      by = b[1],
	      bz = b[2],
	      bw = b[3];

	  out[0] = ax * bw + aw * bx + ay * bz - az * by;
	  out[1] = ay * bw + aw * by + az * bx - ax * bz;
	  out[2] = az * bw + aw * bz + ax * by - ay * bx;
	  out[3] = aw * bw - ax * bx - ay * by - az * bz;
	  return out;
	}

	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	function rotateX$1(out, a, rad) {
	  rad *= 0.5;

	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bx = Math.sin(rad),
	      bw = Math.cos(rad);

	  out[0] = ax * bw + aw * bx;
	  out[1] = ay * bw + az * bx;
	  out[2] = az * bw - ay * bx;
	  out[3] = aw * bw - ax * bx;
	  return out;
	}

	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	function rotateY$1(out, a, rad) {
	  rad *= 0.5;

	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var by = Math.sin(rad),
	      bw = Math.cos(rad);

	  out[0] = ax * bw - az * by;
	  out[1] = ay * bw + aw * by;
	  out[2] = az * bw + ax * by;
	  out[3] = aw * bw - ay * by;
	  return out;
	}

	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	function rotateZ$1(out, a, rad) {
	  rad *= 0.5;

	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bz = Math.sin(rad),
	      bw = Math.cos(rad);

	  out[0] = ax * bw + ay * bz;
	  out[1] = ay * bw - ax * bz;
	  out[2] = az * bw + aw * bz;
	  out[3] = aw * bw - az * bz;
	  return out;
	}

	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	function calculateW(out, a) {
	  var x = a[0],
	      y = a[1],
	      z = a[2];

	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	  return out;
	}

	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat} out
	 */
	function slerp(out, a, b, t) {
	  // benchmarks:
	  //    http://jsperf.com/quaternion-slerp-implementations
	  var ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];
	  var bx = b[0],
	      by = b[1],
	      bz = b[2],
	      bw = b[3];

	  var omega = void 0,
	      cosom = void 0,
	      sinom = void 0,
	      scale0 = void 0,
	      scale1 = void 0;

	  // calc cosine
	  cosom = ax * bx + ay * by + az * bz + aw * bw;
	  // adjust signs (if necessary)
	  if (cosom < 0.0) {
	    cosom = -cosom;
	    bx = -bx;
	    by = -by;
	    bz = -bz;
	    bw = -bw;
	  }
	  // calculate coefficients
	  if (1.0 - cosom > EPSILON) {
	    // standard case (slerp)
	    omega = Math.acos(cosom);
	    sinom = Math.sin(omega);
	    scale0 = Math.sin((1.0 - t) * omega) / sinom;
	    scale1 = Math.sin(t * omega) / sinom;
	  } else {
	    // "from" and "to" quaternions are very close
	    //  ... so we can do a linear interpolation
	    scale0 = 1.0 - t;
	    scale1 = t;
	  }
	  // calculate final values
	  out[0] = scale0 * ax + scale1 * bx;
	  out[1] = scale0 * ay + scale1 * by;
	  out[2] = scale0 * az + scale1 * bz;
	  out[3] = scale0 * aw + scale1 * bw;

	  return out;
	}

	/**
	 * Generates a random quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	function random$1(out) {
	  // Implementation of http://planning.cs.uiuc.edu/node198.html
	  // TODO: Calling random 3 times is probably not the fastest solution
	  var u1 = RANDOM();
	  var u2 = RANDOM();
	  var u3 = RANDOM();

	  var sqrt1MinusU1 = Math.sqrt(1 - u1);
	  var sqrtU1 = Math.sqrt(u1);

	  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
	  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
	  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
	  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
	  return out;
	}

	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	function invert$1(out, a) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3];
	  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	  var invDot = dot ? 1.0 / dot : 0;

	  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

	  out[0] = -a0 * invDot;
	  out[1] = -a1 * invDot;
	  out[2] = -a2 * invDot;
	  out[3] = a3 * invDot;
	  return out;
	}

	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	function conjugate$1(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = a[3];
	  return out;
	}

	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	function fromMat3(out, m) {
	  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	  // article "Quaternion Calculus and Fast Animation".
	  var fTrace = m[0] + m[4] + m[8];
	  var fRoot = void 0;

	  if (fTrace > 0.0) {
	    // |w| > 1/2, may as well choose w > 1/2
	    fRoot = Math.sqrt(fTrace + 1.0); // 2w
	    out[3] = 0.5 * fRoot;
	    fRoot = 0.5 / fRoot; // 1/(4w)
	    out[0] = (m[5] - m[7]) * fRoot;
	    out[1] = (m[6] - m[2]) * fRoot;
	    out[2] = (m[1] - m[3]) * fRoot;
	  } else {
	    // |w| <= 1/2
	    var i = 0;
	    if (m[4] > m[0]) i = 1;
	    if (m[8] > m[i * 3 + i]) i = 2;
	    var j = (i + 1) % 3;
	    var k = (i + 2) % 3;

	    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
	    out[i] = 0.5 * fRoot;
	    fRoot = 0.5 / fRoot;
	    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
	    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
	    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	  }

	  return out;
	}

	/**
	 * Creates a quaternion from the given euler angle x, y, z.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {x} Angle to rotate around X axis in degrees.
	 * @param {y} Angle to rotate around Y axis in degrees.
	 * @param {z} Angle to rotate around Z axis in degrees.
	 * @returns {quat} out
	 * @function
	 */
	function fromEuler(out, x, y, z) {
	  var halfToRad = 0.5 * Math.PI / 180.0;
	  x *= halfToRad;
	  y *= halfToRad;
	  z *= halfToRad;

	  var sx = Math.sin(x);
	  var cx = Math.cos(x);
	  var sy = Math.sin(y);
	  var cy = Math.cos(y);
	  var sz = Math.sin(z);
	  var cz = Math.cos(z);

	  out[0] = sx * cy * cz - cx * sy * sz;
	  out[1] = cx * sy * cz + sx * cy * sz;
	  out[2] = cx * cy * sz - sx * sy * cz;
	  out[3] = cx * cy * cz + sx * sy * sz;

	  return out;
	}

	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str$2(a) {
	  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	}

	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	var clone$2 = clone$3;

	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	var fromValues$2 = fromValues$3;

	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	var copy$2 = copy$3;

	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	var set$2 = set$3;

	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	var add$2 = add$3;

	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	var mul$2 = multiply$2;

	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	var scale$2 = scale$3;

	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	var dot$2 = dot$3;

	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	var lerp$2 = lerp$3;

	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	var length$2 = length$3;

	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	var len$2 = length$2;

	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	var squaredLength$2 = squaredLength$3;

	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	var sqrLen$2 = squaredLength$2;

	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	var normalize$2 = normalize$3;

	/**
	 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat} a The first quaternion.
	 * @param {quat} b The second quaternion.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	var exactEquals$2 = exactEquals$3;

	/**
	 * Returns whether or not the quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat} a The first vector.
	 * @param {quat} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	var equals$2 = equals$3;

	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	var rotationTo = function () {
	  var tmpvec3 = create$4();
	  var xUnitVec3 = fromValues$4(1, 0, 0);
	  var yUnitVec3 = fromValues$4(0, 1, 0);

	  return function (out, a, b) {
	    var dot = dot$4(a, b);
	    if (dot < -0.999999) {
	      cross$1(tmpvec3, xUnitVec3, a);
	      if (len$4(tmpvec3) < 0.000001) cross$1(tmpvec3, yUnitVec3, a);
	      normalize$4(tmpvec3, tmpvec3);
	      setAxisAngle(out, tmpvec3, Math.PI);
	      return out;
	    } else if (dot > 0.999999) {
	      out[0] = 0;
	      out[1] = 0;
	      out[2] = 0;
	      out[3] = 1;
	      return out;
	    } else {
	      cross$1(tmpvec3, a, b);
	      out[0] = tmpvec3[0];
	      out[1] = tmpvec3[1];
	      out[2] = tmpvec3[2];
	      out[3] = 1 + dot;
	      return normalize$2(out, out);
	    }
	  };
	}();

	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat} out
	 */
	var sqlerp = function () {
	  var temp1 = create$2();
	  var temp2 = create$2();

	  return function (out, a, b, c, d, t) {
	    slerp(temp1, a, d, t);
	    slerp(temp2, b, c, t);
	    slerp(out, temp1, temp2, 2 * t * (1 - t));

	    return out;
	  };
	}();

	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	var setAxes = function () {
	  var matr = create$6();

	  return function (out, view, right, up) {
	    matr[0] = right[0];
	    matr[3] = right[1];
	    matr[6] = right[2];

	    matr[1] = up[0];
	    matr[4] = up[1];
	    matr[7] = up[2];

	    matr[2] = -view[0];
	    matr[5] = -view[1];
	    matr[8] = -view[2];

	    return normalize$2(out, fromMat3(out, matr));
	  };
	}();

	var quat = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$2,
		identity: identity$1,
		setAxisAngle: setAxisAngle,
		getAxisAngle: getAxisAngle,
		multiply: multiply$2,
		rotateX: rotateX$1,
		rotateY: rotateY$1,
		rotateZ: rotateZ$1,
		calculateW: calculateW,
		slerp: slerp,
		random: random$1,
		invert: invert$1,
		conjugate: conjugate$1,
		fromMat3: fromMat3,
		fromEuler: fromEuler,
		str: str$2,
		clone: clone$2,
		fromValues: fromValues$2,
		copy: copy$2,
		set: set$2,
		add: add$2,
		mul: mul$2,
		scale: scale$2,
		dot: dot$2,
		lerp: lerp$2,
		length: length$2,
		len: len$2,
		squaredLength: squaredLength$2,
		sqrLen: sqrLen$2,
		normalize: normalize$2,
		exactEquals: exactEquals$2,
		equals: equals$2,
		rotationTo: rotationTo,
		sqlerp: sqlerp,
		setAxes: setAxes
	});

	/**
	 * Dual Quaternion<br>
	 * Format: [real, dual]<br>
	 * Quaternion format: XYZW<br>
	 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
	 * @module quat2
	 */

	/**
	 * Creates a new identity dual quat
	 *
	 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
	 */
	function create$1() {
	  var dq = new ARRAY_TYPE(8);
	  if (ARRAY_TYPE != Float32Array) {
	    dq[0] = 0;
	    dq[1] = 0;
	    dq[2] = 0;
	    dq[4] = 0;
	    dq[5] = 0;
	    dq[6] = 0;
	    dq[7] = 0;
	  }
	  dq[3] = 1;
	  return dq;
	}

	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat2} a dual quaternion to clone
	 * @returns {quat2} new dual quaternion
	 * @function
	 */
	function clone$1(a) {
	  var dq = new ARRAY_TYPE(8);
	  dq[0] = a[0];
	  dq[1] = a[1];
	  dq[2] = a[2];
	  dq[3] = a[3];
	  dq[4] = a[4];
	  dq[5] = a[5];
	  dq[6] = a[6];
	  dq[7] = a[7];
	  return dq;
	}

	/**
	 * Creates a new dual quat initialized with the given values
	 *
	 * @param {Number} x1 X component
	 * @param {Number} y1 Y component
	 * @param {Number} z1 Z component
	 * @param {Number} w1 W component
	 * @param {Number} x2 X component
	 * @param {Number} y2 Y component
	 * @param {Number} z2 Z component
	 * @param {Number} w2 W component
	 * @returns {quat2} new dual quaternion
	 * @function
	 */
	function fromValues$1(x1, y1, z1, w1, x2, y2, z2, w2) {
	  var dq = new ARRAY_TYPE(8);
	  dq[0] = x1;
	  dq[1] = y1;
	  dq[2] = z1;
	  dq[3] = w1;
	  dq[4] = x2;
	  dq[5] = y2;
	  dq[6] = z2;
	  dq[7] = w2;
	  return dq;
	}

	/**
	 * Creates a new dual quat from the given values (quat and translation)
	 *
	 * @param {Number} x1 X component
	 * @param {Number} y1 Y component
	 * @param {Number} z1 Z component
	 * @param {Number} w1 W component
	 * @param {Number} x2 X component (translation)
	 * @param {Number} y2 Y component (translation)
	 * @param {Number} z2 Z component (translation)
	 * @returns {quat2} new dual quaternion
	 * @function
	 */
	function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
	  var dq = new ARRAY_TYPE(8);
	  dq[0] = x1;
	  dq[1] = y1;
	  dq[2] = z1;
	  dq[3] = w1;
	  var ax = x2 * 0.5,
	      ay = y2 * 0.5,
	      az = z2 * 0.5;
	  dq[4] = ax * w1 + ay * z1 - az * y1;
	  dq[5] = ay * w1 + az * x1 - ax * z1;
	  dq[6] = az * w1 + ax * y1 - ay * x1;
	  dq[7] = -ax * x1 - ay * y1 - az * z1;
	  return dq;
	}

	/**
	 * Creates a dual quat from a quaternion and a translation
	 *
	 * @param {quat2} dual quaternion receiving operation result
	 * @param {quat} q quaternion
	 * @param {vec3} t tranlation vector
	 * @returns {quat2} dual quaternion receiving operation result
	 * @function
	 */
	function fromRotationTranslation(out, q, t) {
	  var ax = t[0] * 0.5,
	      ay = t[1] * 0.5,
	      az = t[2] * 0.5,
	      bx = q[0],
	      by = q[1],
	      bz = q[2],
	      bw = q[3];
	  out[0] = bx;
	  out[1] = by;
	  out[2] = bz;
	  out[3] = bw;
	  out[4] = ax * bw + ay * bz - az * by;
	  out[5] = ay * bw + az * bx - ax * bz;
	  out[6] = az * bw + ax * by - ay * bx;
	  out[7] = -ax * bx - ay * by - az * bz;
	  return out;
	}

	/**
	 * Creates a dual quat from a translation
	 *
	 * @param {quat2} dual quaternion receiving operation result
	 * @param {vec3} t translation vector
	 * @returns {quat2} dual quaternion receiving operation result
	 * @function
	 */
	function fromTranslation(out, t) {
	  out[0] = 0;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = t[0] * 0.5;
	  out[5] = t[1] * 0.5;
	  out[6] = t[2] * 0.5;
	  out[7] = 0;
	  return out;
	}

	/**
	 * Creates a dual quat from a quaternion
	 *
	 * @param {quat2} dual quaternion receiving operation result
	 * @param {quat} q the quaternion
	 * @returns {quat2} dual quaternion receiving operation result
	 * @function
	 */
	function fromRotation(out, q) {
	  out[0] = q[0];
	  out[1] = q[1];
	  out[2] = q[2];
	  out[3] = q[3];
	  out[4] = 0;
	  out[5] = 0;
	  out[6] = 0;
	  out[7] = 0;
	  return out;
	}

	/**
	 * Creates a new dual quat from a matrix (4x4)
	 *
	 * @param {quat2} out the dual quaternion
	 * @param {mat4} a the matrix
	 * @returns {quat2} dual quat receiving operation result
	 * @function
	 */
	function fromMat4(out, a) {
	  //TODO Optimize this
	  var outer = create$2();
	  getRotation(outer, a);
	  var t = new ARRAY_TYPE(3);
	  getTranslation$1(t, a);
	  fromRotationTranslation(out, outer, t);
	  return out;
	}

	/**
	 * Copy the values from one dual quat to another
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the source dual quaternion
	 * @returns {quat2} out
	 * @function
	 */
	function copy$1(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  out[2] = a[2];
	  out[3] = a[3];
	  out[4] = a[4];
	  out[5] = a[5];
	  out[6] = a[6];
	  out[7] = a[7];
	  return out;
	}

	/**
	 * Set a dual quat to the identity dual quaternion
	 *
	 * @param {quat2} out the receiving quaternion
	 * @returns {quat2} out
	 */
	function identity(out) {
	  out[0] = 0;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 1;
	  out[4] = 0;
	  out[5] = 0;
	  out[6] = 0;
	  out[7] = 0;
	  return out;
	}

	/**
	 * Set the components of a dual quat to the given values
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {Number} x1 X component
	 * @param {Number} y1 Y component
	 * @param {Number} z1 Z component
	 * @param {Number} w1 W component
	 * @param {Number} x2 X component
	 * @param {Number} y2 Y component
	 * @param {Number} z2 Z component
	 * @param {Number} w2 W component
	 * @returns {quat2} out
	 * @function
	 */
	function set$1(out, x1, y1, z1, w1, x2, y2, z2, w2) {
	  out[0] = x1;
	  out[1] = y1;
	  out[2] = z1;
	  out[3] = w1;

	  out[4] = x2;
	  out[5] = y2;
	  out[6] = z2;
	  out[7] = w2;
	  return out;
	}

	/**
	 * Gets the real part of a dual quat
	 * @param  {quat} out real part
	 * @param  {quat2} a Dual Quaternion
	 * @return {quat} real part
	 */
	var getReal = copy$2;

	/**
	 * Gets the dual part of a dual quat
	 * @param  {quat} out dual part
	 * @param  {quat2} a Dual Quaternion
	 * @return {quat} dual part
	 */
	function getDual(out, a) {
	  out[0] = a[4];
	  out[1] = a[5];
	  out[2] = a[6];
	  out[3] = a[7];
	  return out;
	}

	/**
	 * Set the real component of a dual quat to the given quaternion
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {quat} q a quaternion representing the real part
	 * @returns {quat2} out
	 * @function
	 */
	var setReal = copy$2;

	/**
	 * Set the dual component of a dual quat to the given quaternion
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {quat} q a quaternion representing the dual part
	 * @returns {quat2} out
	 * @function
	 */
	function setDual(out, q) {
	  out[4] = q[0];
	  out[5] = q[1];
	  out[6] = q[2];
	  out[7] = q[3];
	  return out;
	}

	/**
	 * Gets the translation of a normalized dual quat
	 * @param  {vec3} out translation
	 * @param  {quat2} a Dual Quaternion to be decomposed
	 * @return {vec3} translation
	 */
	function getTranslation(out, a) {
	  var ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3];
	  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
	  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
	  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
	  return out;
	}

	/**
	 * Translates a dual quat by the given vector
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to translate
	 * @param {vec3} v vector to translate by
	 * @returns {quat2} out
	 */
	function translate(out, a, v) {
	  var ax1 = a[0],
	      ay1 = a[1],
	      az1 = a[2],
	      aw1 = a[3],
	      bx1 = v[0] * 0.5,
	      by1 = v[1] * 0.5,
	      bz1 = v[2] * 0.5,
	      ax2 = a[4],
	      ay2 = a[5],
	      az2 = a[6],
	      aw2 = a[7];
	  out[0] = ax1;
	  out[1] = ay1;
	  out[2] = az1;
	  out[3] = aw1;
	  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
	  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
	  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
	  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
	  return out;
	}

	/**
	 * Rotates a dual quat around the X axis
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {number} rad how far should the rotation be
	 * @returns {quat2} out
	 */
	function rotateX(out, a, rad) {
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      ax1 = ax * bw + aw * bx + ay * bz - az * by,
	      ay1 = ay * bw + aw * by + az * bx - ax * bz,
	      az1 = az * bw + aw * bz + ax * by - ay * bx,
	      aw1 = aw * bw - ax * bx - ay * by - az * bz;
	  rotateX$1(out, a, rad);
	  bx = out[0];
	  by = out[1];
	  bz = out[2];
	  bw = out[3];
	  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat around the Y axis
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {number} rad how far should the rotation be
	 * @returns {quat2} out
	 */
	function rotateY(out, a, rad) {
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      ax1 = ax * bw + aw * bx + ay * bz - az * by,
	      ay1 = ay * bw + aw * by + az * bx - ax * bz,
	      az1 = az * bw + aw * bz + ax * by - ay * bx,
	      aw1 = aw * bw - ax * bx - ay * by - az * bz;
	  rotateY$1(out, a, rad);
	  bx = out[0];
	  by = out[1];
	  bz = out[2];
	  bw = out[3];
	  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat around the Z axis
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {number} rad how far should the rotation be
	 * @returns {quat2} out
	 */
	function rotateZ(out, a, rad) {
	  var bx = -a[0],
	      by = -a[1],
	      bz = -a[2],
	      bw = a[3],
	      ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7],
	      ax1 = ax * bw + aw * bx + ay * bz - az * by,
	      ay1 = ay * bw + aw * by + az * bx - ax * bz,
	      az1 = az * bw + aw * bz + ax * by - ay * bx,
	      aw1 = aw * bw - ax * bx - ay * by - az * bz;
	  rotateZ$1(out, a, rad);
	  bx = out[0];
	  by = out[1];
	  bz = out[2];
	  bw = out[3];
	  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat by a given quaternion (a * q)
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {quat} q quaternion to rotate by
	 * @returns {quat2} out
	 */
	function rotateByQuatAppend(out, a, q) {
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3],
	      ax = a[0],
	      ay = a[1],
	      az = a[2],
	      aw = a[3];

	  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
	  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
	  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
	  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
	  ax = a[4];
	  ay = a[5];
	  az = a[6];
	  aw = a[7];
	  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
	  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
	  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
	  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
	  return out;
	}

	/**
	 * Rotates a dual quat by a given quaternion (q * a)
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat} q quaternion to rotate by
	 * @param {quat2} a the dual quaternion to rotate
	 * @returns {quat2} out
	 */
	function rotateByQuatPrepend(out, q, a) {
	  var qx = q[0],
	      qy = q[1],
	      qz = q[2],
	      qw = q[3],
	      bx = a[0],
	      by = a[1],
	      bz = a[2],
	      bw = a[3];

	  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
	  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
	  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
	  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
	  bx = a[4];
	  by = a[5];
	  bz = a[6];
	  bw = a[7];
	  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
	  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
	  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
	  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
	  return out;
	}

	/**
	 * Rotates a dual quat around a given axis. Does the normalisation automatically
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the dual quaternion to rotate
	 * @param {vec3} axis the axis to rotate around
	 * @param {Number} rad how far the rotation should be
	 * @returns {quat2} out
	 */
	function rotateAroundAxis(out, a, axis, rad) {
	  //Special case for rad = 0
	  if (Math.abs(rad) < EPSILON) {
	    return copy$1(out, a);
	  }
	  var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

	  rad = rad * 0.5;
	  var s = Math.sin(rad);
	  var bx = s * axis[0] / axisLength;
	  var by = s * axis[1] / axisLength;
	  var bz = s * axis[2] / axisLength;
	  var bw = Math.cos(rad);

	  var ax1 = a[0],
	      ay1 = a[1],
	      az1 = a[2],
	      aw1 = a[3];
	  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
	  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
	  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
	  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

	  var ax = a[4],
	      ay = a[5],
	      az = a[6],
	      aw = a[7];
	  out[4] = ax * bw + aw * bx + ay * bz - az * by;
	  out[5] = ay * bw + aw * by + az * bx - ax * bz;
	  out[6] = az * bw + aw * bz + ax * by - ay * bx;
	  out[7] = aw * bw - ax * bx - ay * by - az * bz;

	  return out;
	}

	/**
	 * Adds two dual quat's
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @returns {quat2} out
	 * @function
	 */
	function add$1(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  out[2] = a[2] + b[2];
	  out[3] = a[3] + b[3];
	  out[4] = a[4] + b[4];
	  out[5] = a[5] + b[5];
	  out[6] = a[6] + b[6];
	  out[7] = a[7] + b[7];
	  return out;
	}

	/**
	 * Multiplies two dual quat's
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @returns {quat2} out
	 */
	function multiply$1(out, a, b) {
	  var ax0 = a[0],
	      ay0 = a[1],
	      az0 = a[2],
	      aw0 = a[3],
	      bx1 = b[4],
	      by1 = b[5],
	      bz1 = b[6],
	      bw1 = b[7],
	      ax1 = a[4],
	      ay1 = a[5],
	      az1 = a[6],
	      aw1 = a[7],
	      bx0 = b[0],
	      by0 = b[1],
	      bz0 = b[2],
	      bw0 = b[3];
	  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
	  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
	  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
	  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
	  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
	  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
	  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
	  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
	  return out;
	}

	/**
	 * Alias for {@link quat2.multiply}
	 * @function
	 */
	var mul$1 = multiply$1;

	/**
	 * Scales a dual quat by a scalar number
	 *
	 * @param {quat2} out the receiving dual quat
	 * @param {quat2} a the dual quat to scale
	 * @param {Number} b amount to scale the dual quat by
	 * @returns {quat2} out
	 * @function
	 */
	function scale$1(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  out[2] = a[2] * b;
	  out[3] = a[3] * b;
	  out[4] = a[4] * b;
	  out[5] = a[5] * b;
	  out[6] = a[6] * b;
	  out[7] = a[7] * b;
	  return out;
	}

	/**
	 * Calculates the dot product of two dual quat's (The dot product of the real parts)
	 *
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	var dot$1 = dot$2;

	/**
	 * Performs a linear interpolation between two dual quats's
	 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
	 *
	 * @param {quat2} out the receiving dual quat
	 * @param {quat2} a the first operand
	 * @param {quat2} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {quat2} out
	 */
	function lerp$1(out, a, b, t) {
	  var mt = 1 - t;
	  if (dot$1(a, b) < 0) t = -t;

	  out[0] = a[0] * mt + b[0] * t;
	  out[1] = a[1] * mt + b[1] * t;
	  out[2] = a[2] * mt + b[2] * t;
	  out[3] = a[3] * mt + b[3] * t;
	  out[4] = a[4] * mt + b[4] * t;
	  out[5] = a[5] * mt + b[5] * t;
	  out[6] = a[6] * mt + b[6] * t;
	  out[7] = a[7] * mt + b[7] * t;

	  return out;
	}

	/**
	 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a dual quat to calculate inverse of
	 * @returns {quat2} out
	 */
	function invert(out, a) {
	  var sqlen = squaredLength$1(a);
	  out[0] = -a[0] / sqlen;
	  out[1] = -a[1] / sqlen;
	  out[2] = -a[2] / sqlen;
	  out[3] = a[3] / sqlen;
	  out[4] = -a[4] / sqlen;
	  out[5] = -a[5] / sqlen;
	  out[6] = -a[6] / sqlen;
	  out[7] = a[7] / sqlen;
	  return out;
	}

	/**
	 * Calculates the conjugate of a dual quat
	 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
	 *
	 * @param {quat2} out the receiving quaternion
	 * @param {quat2} a quat to calculate conjugate of
	 * @returns {quat2} out
	 */
	function conjugate(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  out[2] = -a[2];
	  out[3] = a[3];
	  out[4] = -a[4];
	  out[5] = -a[5];
	  out[6] = -a[6];
	  out[7] = a[7];
	  return out;
	}

	/**
	 * Calculates the length of a dual quat
	 *
	 * @param {quat2} a dual quat to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	var length$1 = length$2;

	/**
	 * Alias for {@link quat2.length}
	 * @function
	 */
	var len$1 = length$1;

	/**
	 * Calculates the squared length of a dual quat
	 *
	 * @param {quat2} a dual quat to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	var squaredLength$1 = squaredLength$2;

	/**
	 * Alias for {@link quat2.squaredLength}
	 * @function
	 */
	var sqrLen$1 = squaredLength$1;

	/**
	 * Normalize a dual quat
	 *
	 * @param {quat2} out the receiving dual quaternion
	 * @param {quat2} a dual quaternion to normalize
	 * @returns {quat2} out
	 * @function
	 */
	function normalize$1(out, a) {
	  var magnitude = squaredLength$1(a);
	  if (magnitude > 0) {
	    magnitude = Math.sqrt(magnitude);

	    var a0 = a[0] / magnitude;
	    var a1 = a[1] / magnitude;
	    var a2 = a[2] / magnitude;
	    var a3 = a[3] / magnitude;

	    var b0 = a[4];
	    var b1 = a[5];
	    var b2 = a[6];
	    var b3 = a[7];

	    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;

	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;

	    out[4] = (b0 - a0 * a_dot_b) / magnitude;
	    out[5] = (b1 - a1 * a_dot_b) / magnitude;
	    out[6] = (b2 - a2 * a_dot_b) / magnitude;
	    out[7] = (b3 - a3 * a_dot_b) / magnitude;
	  }
	  return out;
	}

	/**
	 * Returns a string representation of a dual quatenion
	 *
	 * @param {quat2} a dual quaternion to represent as a string
	 * @returns {String} string representation of the dual quat
	 */
	function str$1(a) {
	  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
	}

	/**
	 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat2} a the first dual quaternion.
	 * @param {quat2} b the second dual quaternion.
	 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
	 */
	function exactEquals$1(a, b) {
	  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
	}

	/**
	 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat2} a the first dual quat.
	 * @param {quat2} b the second dual quat.
	 * @returns {Boolean} true if the dual quats are equal, false otherwise.
	 */
	function equals$1(a, b) {
	  var a0 = a[0],
	      a1 = a[1],
	      a2 = a[2],
	      a3 = a[3],
	      a4 = a[4],
	      a5 = a[5],
	      a6 = a[6],
	      a7 = a[7];
	  var b0 = b[0],
	      b1 = b[1],
	      b2 = b[2],
	      b3 = b[3],
	      b4 = b[4],
	      b5 = b[5],
	      b6 = b[6],
	      b7 = b[7];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
	}

	var quat2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create$1,
		clone: clone$1,
		fromValues: fromValues$1,
		fromRotationTranslationValues: fromRotationTranslationValues,
		fromRotationTranslation: fromRotationTranslation,
		fromTranslation: fromTranslation,
		fromRotation: fromRotation,
		fromMat4: fromMat4,
		copy: copy$1,
		identity: identity,
		set: set$1,
		getReal: getReal,
		getDual: getDual,
		setReal: setReal,
		setDual: setDual,
		getTranslation: getTranslation,
		translate: translate,
		rotateX: rotateX,
		rotateY: rotateY,
		rotateZ: rotateZ,
		rotateByQuatAppend: rotateByQuatAppend,
		rotateByQuatPrepend: rotateByQuatPrepend,
		rotateAroundAxis: rotateAroundAxis,
		add: add$1,
		multiply: multiply$1,
		mul: mul$1,
		scale: scale$1,
		dot: dot$1,
		lerp: lerp$1,
		invert: invert,
		conjugate: conjugate,
		length: length$1,
		len: len$1,
		squaredLength: squaredLength$1,
		sqrLen: sqrLen$1,
		normalize: normalize$1,
		str: str$1,
		exactEquals: exactEquals$1,
		equals: equals$1
	});

	/**
	 * 2 Dimensional Vector
	 * @module vec2
	 */

	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	function create() {
	  var out = new ARRAY_TYPE(2);
	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	  }
	  return out;
	}

	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	function clone(a) {
	  var out = new ARRAY_TYPE(2);
	  out[0] = a[0];
	  out[1] = a[1];
	  return out;
	}

	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	function fromValues(x, y) {
	  var out = new ARRAY_TYPE(2);
	  out[0] = x;
	  out[1] = y;
	  return out;
	}

	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	function copy(out, a) {
	  out[0] = a[0];
	  out[1] = a[1];
	  return out;
	}

	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	function set(out, x, y) {
	  out[0] = x;
	  out[1] = y;
	  return out;
	}

	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function add(out, a, b) {
	  out[0] = a[0] + b[0];
	  out[1] = a[1] + b[1];
	  return out;
	}

	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function subtract(out, a, b) {
	  out[0] = a[0] - b[0];
	  out[1] = a[1] - b[1];
	  return out;
	}

	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function multiply(out, a, b) {
	  out[0] = a[0] * b[0];
	  out[1] = a[1] * b[1];
	  return out;
	}

	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function divide(out, a, b) {
	  out[0] = a[0] / b[0];
	  out[1] = a[1] / b[1];
	  return out;
	}

	/**
	 * Math.ceil the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to ceil
	 * @returns {vec2} out
	 */
	function ceil(out, a) {
	  out[0] = Math.ceil(a[0]);
	  out[1] = Math.ceil(a[1]);
	  return out;
	}

	/**
	 * Math.floor the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to floor
	 * @returns {vec2} out
	 */
	function floor(out, a) {
	  out[0] = Math.floor(a[0]);
	  out[1] = Math.floor(a[1]);
	  return out;
	}

	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function min(out, a, b) {
	  out[0] = Math.min(a[0], b[0]);
	  out[1] = Math.min(a[1], b[1]);
	  return out;
	}

	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function max(out, a, b) {
	  out[0] = Math.max(a[0], b[0]);
	  out[1] = Math.max(a[1], b[1]);
	  return out;
	}

	/**
	 * Math.round the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to round
	 * @returns {vec2} out
	 */
	function round(out, a) {
	  out[0] = Math.round(a[0]);
	  out[1] = Math.round(a[1]);
	  return out;
	}

	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	function scale(out, a, b) {
	  out[0] = a[0] * b;
	  out[1] = a[1] * b;
	  return out;
	}

	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	function scaleAndAdd(out, a, b, scale) {
	  out[0] = a[0] + b[0] * scale;
	  out[1] = a[1] + b[1] * scale;
	  return out;
	}

	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	function distance(a, b) {
	  var x = b[0] - a[0],
	      y = b[1] - a[1];
	  return Math.sqrt(x * x + y * y);
	}

	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	function squaredDistance(a, b) {
	  var x = b[0] - a[0],
	      y = b[1] - a[1];
	  return x * x + y * y;
	}

	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	function length(a) {
	  var x = a[0],
	      y = a[1];
	  return Math.sqrt(x * x + y * y);
	}

	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	function squaredLength(a) {
	  var x = a[0],
	      y = a[1];
	  return x * x + y * y;
	}

	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	function negate(out, a) {
	  out[0] = -a[0];
	  out[1] = -a[1];
	  return out;
	}

	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	function inverse(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	}

	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	function normalize(out, a) {
	  var x = a[0],
	      y = a[1];
	  var len = x * x + y * y;
	  if (len > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len = 1 / Math.sqrt(len);
	    out[0] = a[0] * len;
	    out[1] = a[1] * len;
	  }
	  return out;
	}

	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot(a, b) {
	  return a[0] * b[0] + a[1] * b[1];
	}

	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	function cross(out, a, b) {
	  var z = a[0] * b[1] - a[1] * b[0];
	  out[0] = out[1] = 0;
	  out[2] = z;
	  return out;
	}

	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
	 * @returns {vec2} out
	 */
	function lerp(out, a, b, t) {
	  var ax = a[0],
	      ay = a[1];
	  out[0] = ax + t * (b[0] - ax);
	  out[1] = ay + t * (b[1] - ay);
	  return out;
	}

	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	function random(out, scale) {
	  scale = scale || 1.0;
	  var r = RANDOM() * 2.0 * Math.PI;
	  out[0] = Math.cos(r) * scale;
	  out[1] = Math.sin(r) * scale;
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat2(out, a, m) {
	  var x = a[0],
	      y = a[1];
	  out[0] = m[0] * x + m[2] * y;
	  out[1] = m[1] * x + m[3] * y;
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat2d(out, a, m) {
	  var x = a[0],
	      y = a[1];
	  out[0] = m[0] * x + m[2] * y + m[4];
	  out[1] = m[1] * x + m[3] * y + m[5];
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat3(out, a, m) {
	  var x = a[0],
	      y = a[1];
	  out[0] = m[0] * x + m[3] * y + m[6];
	  out[1] = m[1] * x + m[4] * y + m[7];
	  return out;
	}

	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	function transformMat4(out, a, m) {
	  var x = a[0];
	  var y = a[1];
	  out[0] = m[0] * x + m[4] * y + m[12];
	  out[1] = m[1] * x + m[5] * y + m[13];
	  return out;
	}

	/**
	 * Rotate a 2D vector
	 * @param {vec2} out The receiving vec2
	 * @param {vec2} a The vec2 point to rotate
	 * @param {vec2} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec2} out
	 */
	function rotate(out, a, b, c) {
	  //Translate point to the origin
	  var p0 = a[0] - b[0],
	      p1 = a[1] - b[1],
	      sinC = Math.sin(c),
	      cosC = Math.cos(c);

	  //perform rotation and translate to correct position
	  out[0] = p0 * cosC - p1 * sinC + b[0];
	  out[1] = p0 * sinC + p1 * cosC + b[1];

	  return out;
	}

	/**
	 * Get the angle between two 2D vectors
	 * @param {vec2} a The first operand
	 * @param {vec2} b The second operand
	 * @returns {Number} The angle in radians
	 */
	function angle(a, b) {
	  var x1 = a[0],
	      y1 = a[1],
	      x2 = b[0],
	      y2 = b[1];

	  var len1 = x1 * x1 + y1 * y1;
	  if (len1 > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len1 = 1 / Math.sqrt(len1);
	  }

	  var len2 = x2 * x2 + y2 * y2;
	  if (len2 > 0) {
	    //TODO: evaluate use of glm_invsqrt here?
	    len2 = 1 / Math.sqrt(len2);
	  }

	  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

	  if (cosine > 1.0) {
	    return 0;
	  } else if (cosine < -1.0) {
	    return Math.PI;
	  } else {
	    return Math.acos(cosine);
	  }
	}

	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} a vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	function str(a) {
	  return 'vec2(' + a[0] + ', ' + a[1] + ')';
	}

	/**
	 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function exactEquals(a, b) {
	  return a[0] === b[0] && a[1] === b[1];
	}

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	function equals(a, b) {
	  var a0 = a[0],
	      a1 = a[1];
	  var b0 = b[0],
	      b1 = b[1];
	  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
	}

	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	var len = length;

	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	var sub = subtract;

	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	var mul = multiply;

	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	var div = divide;

	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	var dist = distance;

	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	var sqrDist = squaredDistance;

	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	var sqrLen = squaredLength;

	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	var forEach = function () {
	  var vec = create();

	  return function (a, stride, offset, count, fn, arg) {
	    var i = void 0,
	        l = void 0;
	    if (!stride) {
	      stride = 2;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];vec[1] = a[i + 1];
	      fn(vec, vec, arg);
	      a[i] = vec[0];a[i + 1] = vec[1];
	    }

	    return a;
	  };
	}();

	var vec2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		create: create,
		clone: clone,
		fromValues: fromValues,
		copy: copy,
		set: set,
		add: add,
		subtract: subtract,
		multiply: multiply,
		divide: divide,
		ceil: ceil,
		floor: floor,
		min: min,
		max: max,
		round: round,
		scale: scale,
		scaleAndAdd: scaleAndAdd,
		distance: distance,
		squaredDistance: squaredDistance,
		length: length,
		squaredLength: squaredLength,
		negate: negate,
		inverse: inverse,
		normalize: normalize,
		dot: dot,
		cross: cross,
		lerp: lerp,
		random: random,
		transformMat2: transformMat2,
		transformMat2d: transformMat2d,
		transformMat3: transformMat3,
		transformMat4: transformMat4,
		rotate: rotate,
		angle: angle,
		str: str,
		exactEquals: exactEquals,
		equals: equals,
		len: len,
		sub: sub,
		mul: mul,
		div: div,
		dist: dist,
		sqrDist: sqrDist,
		sqrLen: sqrLen,
		forEach: forEach
	});

	/*!
	 * @maptalks/gltf-loader v0.25.7
	 * LICENSE : UNLICENSED
	 * (c) 2016-2022 maptalks.org
	 */
	let n=0;function i$1(e){return null==e}function a(e){return !i$1(e)}function o(e){for(let t=1;t<arguments.length;t++){const s=arguments[t];for(const t in s)e[t]=s[t];}return e}function f$1(e){switch(e){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5124:return Int32Array;case 5125:return Uint32Array;case 5126:return Float32Array}throw new Error("unsupported bufferView's component type: "+e)}function u$1(e){return 0===e.indexOf("data:")&&e.indexOf("base64,")>0}function h$1(e){const t=function(e){return "undefined"!=typeof self?self.atob(e):window.atob(e)}(e.substring(e.indexOf(",")+1)),s=t.length,r=new Uint8Array(s);for(let e=0;e<s;e++)r[e]=t.charCodeAt(e);return r.buffer}const c=[],l=[],d$1=[],m$2=[0,0,0],g$2=identity$1([]),p$2=[1,1,1];function b$2(e,t,s,r,n,i,a){const o=f$1(a);if((0===n||n===r*o.BYTES_PER_ELEMENT)&&i%o.BYTES_PER_ELEMENT==0){const n=new o(t,i,s*r);return e.set(n),e}const u=new Uint8Array(r*o.BYTES_PER_ELEMENT);for(let a=0;a<s;a++){let s=null;const f=new Uint8Array(t,n*a+i,r*o.BYTES_PER_ELEMENT);u.set(f),s=new o(u.buffer,0,r);for(let t=0;t<r;t++)e[a*r+t]=s[t];}return e}const y$2="undefined"!=typeof TextDecoder?new TextDecoder("utf-8"):null;function _$3(e,t,s){const r=new Uint8Array(e,t,s);return y$2.decode(r)}const w$2={get:function(e,t={}){t||(t={});const s=new AbortController,r={signal:s.signal,method:t.method||"GET",referrerPolicy:"origin"};"POST"===t.method&&(i$1(t.body)||(r.body=JSON.stringify(t.body))),i$1(t.headers)||(r.headers=t.headers),i$1(t.credentials)||(r.credentials=t.credentials);const n=fetch(e,r).then(e=>{const s=this._parseResponse(e,t.responseType);return s.message?s:s.then(s=>"arraybuffer"===t.responseType?{data:s,cacheControl:e.headers.get("Cache-Control"),expires:e.headers.get("Expires"),contentType:e.headers.get("Content-Type")}:s).catch(e=>{if(!e.code||e.code!==DOMException.ABORT_ERR)throw e})}).catch(e=>{if(!e.code||e.code!==DOMException.ABORT_ERR)throw e});return n.xhr=s,n},_parseResponse:(e,t)=>200!==e.status?{status:e.status,statusText:e.statusText,message:`incorrect http request with status code(${e.status}): ${e.statusText}`}:"arraybuffer"===t?e.arrayBuffer():"json"===t?e.json():e.text(),getArrayBuffer:(e,t={})=>(t||(t={}),t.responseType="arraybuffer",w$2.get(e,t)),getJSON:function(e,t={}){return t&&t.jsonp?w$2.jsonp(e):((t=t||{}).responseType="json",w$2.get(e,t))}};w$2.jsonp=function(e){const t="_maptalks_jsonp_"+n++;e.match(/\?/)?e+="&callback="+t:e+="?callback="+t;let s=document.createElement("script");return s.type="text/javascript",s.src=e,new Promise(e=>{window[t]=function(r){document.getElementsByTagName("head")[0].removeChild(s),s=null,delete window[t],e(r);},document.getElementsByTagName("head")[0].appendChild(s);})};class x$2{constructor(e,t,s){this._requestImage=e,this.decoders=t,this._supportedFormats=s,this.images={},this._imgRequests={};}requestImageFromBufferURI(e,t,s){if(this.buffers[e.id]){const r=this.buffers[e.id],n=this._createDataView(t,r);return this.getImageByBuffer(n,s)}if(this._imgRequests[e.id])return this._imgRequests[e.id].then(()=>{const r=this.buffers[e.id],n=this._createDataView(t,r);return this.getImageByBuffer(n,s)});if(u$1(e.uri)){const r=this.buffers[e.id]=h$1(e.uri),n=this._createDataView(t,r);return this.getImageByBuffer(n,s)}return this._imgRequests[e.id]=w$2.getArrayBuffer(e.uri,null).then(r=>{const n=this.buffers[e.id]=r.data,i=this._createDataView(t,n);return this.getImageByBuffer(i,s)})}getImageByBuffer(e,t){if(this.images[t.id])return Promise.resolve(this.images[t.id]);const s=this.decoders;if(s[t.mimeType])return s[t.mimeType](e,{supportedFormats:this._supportedFormats});if("image/crn"===t.mimeType||"image/ktx2"===t.mimeType||"image/cttf"===t.mimeType)return console.warn("missing transcoder for "+t.mimeType,", visit https://maptalks.com/docs/transcoders for details"),Promise.resolve(null);{const s=new Blob([e],{type:t.mimeType}),r=URL.createObjectURL(s);return this._getImageInfo(t.id,r)}}requestExternalImage(e){if(this.images[e.id])return Promise.resolve(this.images[e.id]);const t=0===e.uri.indexOf("data:image/")?e.uri:this.rootPath+"/"+e.uri;if(this._imgRequests[e.id])return this._imgRequests[e.id].then(()=>this.images[e.id]);return this._imgRequests[e.id]=this._getImageInfo(e.id,t)}_getImageInfo(e,t){return new Promise((s,r)=>{this._requestImage(t,(n,i)=>{n?r(n):(URL.revokeObjectURL(t),this.images[e]=i,s(this.images[e]));});})}}const T$3=["SCALAR",1,"VEC2",2,"VEC3",3,"VEC4",4,"MAT2",4,"MAT3",9,"MAT4",16];class E$2{constructor(e,t,s){this.rootPath=e,this.gltf=t,this._enableInterleave=!1,this.glbBuffer=s,this.buffers={},this.requests={},this.accessors={},this._compareAccessor();}_requestData(e,t){const s=this.gltf,r=s.accessors[t];if(void 0===r.bufferView)return this.accessors[r.id]=this._toBufferData(e,t,null,0),Promise.resolve(this.accessors[r.id]);if(r&&this.accessors[r.id])return Promise.resolve(this.accessors[r.id]);const n=s.bufferViews[r.bufferView];return this._requestBufferOfBufferView(n).then(s=>{const{buffer:n,byteOffset:i}=s;return this.accessors[r.id]=this._toBufferData(e,t,n,i)})}_requestBufferOfBufferView(e){const t=this.gltf.buffers[e.buffer];if(this.buffers[t.id]){const e=this.buffers[t.id];return Promise.resolve({buffer:e,byteOffset:0})}if(this.requests[t.id])return this.requests[t.id].then(()=>{const e=this.buffers[t.id];return Promise.resolve({buffer:e,byteOffset:0})});if("binary_glTF"!==e.buffer&&"KHR_binary_glTF"!==e.buffer&&t.uri){if(u$1(t.uri)){const e=this.buffers[t.id]=h$1(t.uri);return Promise.resolve({buffer:e,byteOffset:0})}let e;e=t.uri.indexOf("://")>0||t.uri.indexOf("blob:")>=0?t.uri:this.rootPath+"/"+t.uri;return this.requests[t.id]=w$2.getArrayBuffer(e,null).then(e=>({buffer:this.buffers[t.id]=e.data,byteOffset:0}))}return Promise.resolve({buffer:this.glbBuffer.buffer,byteOffset:this.glbBuffer.byteOffset})}_toBufferData(e,t,s,r=0){const n=this.gltf,i=n.accessors[t],a=void 0!==i.bufferView?n.bufferViews[i.bufferView]:{},o=(a.byteOffset||0)+r,u=this._getTypeItemSize(i.type),h=f$1(i.componentType),c=a.byteStride||0;const l={array:void 0,name:e,accessorName:t,byteLength:i.count*u*h.BYTES_PER_ELEMENT,componentType:i.componentType,count:i.count,type:i.type,itemSize:u};if(i.min&&(l.min=i.min),i.max&&(l.max=i.max),s)if(this._enableInterleave)l.byteStride=c,l.byteOffset=o+(i.byteOffset||0),!c||c===u*h.BYTES_PER_ELEMENT||"indices"===e||"input"===e||"output"===e||e.indexOf("morph")>=0?(l.array=this._typedArray(s,i.count,u,o+(i.byteOffset||0),h),l.array.buffer.byteLength===l.byteLength&&(l.byteOffset=0)):l.array=new Uint8Array(s,o,a.byteLength);else if(i.interleaved){l.byteStride=0,l.byteOffset=0;const e=new h(i.count*u);l.array=b$2(e,s,i.count,u,c,o+(i.byteOffset||0),i.componentType);}else l.byteStride=0,l.array=this._typedArray(s,i.count,u,o+(i.byteOffset||0),h),l.byteOffset=l.array.byteOffset;else {l.array=new h(i.count);const e=l.min||l.max;e&&(l.array[0]=e[0],l.array[1]=e[1],l.array[2]=e[2]);}return l}_compareAccessor(){const e=this.gltf.accessors;if(Array.isArray(e))for(let t=0;t<e.length;t++)for(let s=0;s<e.length;s++)t!==s&&e[t].bufferView===e[s].bufferView&&(e[t].interleaved=e[s].interleaved=!0);else for(const t in e)for(const s in e)t!==s&&e[t].bufferView===e[s].bufferView&&(e[t].interleaved=e[s].interleaved=!0);}_typedArray(e,t,s,r,n){return r%n.BYTES_PER_ELEMENT!=0&&(e=e.slice(r,r+t*s*n.BYTES_PER_ELEMENT),r=0),new n(e,r,s*t)}_getTypeItemSize(e){const t=T$3.indexOf(e);return T$3[t+1]}requestKHRTechniquesWebgl(e){const{shaders:t}=e,s=t.map(e=>{if(void 0!==e.bufferView){const t=this.gltf.bufferViews[e.bufferView],{byteLength:s}=t;return this._requestBufferOfBufferView(t).then(r=>{const{buffer:n,byteOffset:i}=r,a=_$3(n,i+(t.byteOffset||0),s);return e.content=a,e})}if(e.uri){if(u$1(e.uri)){const t=h$1(e.uri),s=_$3(t,0,t.byteLength);return e.content=s,Promise.resolve(e)}{const t=this.rootPath+"/"+e.uri;return w$2.get(t).then(t=>(e.content=t,e))}}return Promise.resolve(e)});return Promise.all(s).then(()=>e)}}class I$2 extends x$2{constructor(e,t,s,r,n,i){super(r,n,i),this.rootPath=e,this.gltf=t,this.requests={},this.buffers={},this.glbBuffer=s,this.accessor=new E$2(e,t,s);}iterate(e,t){const s=this.gltf[t];if(!s)return;let r=0;for(const t in s)e(t,s[t],r++);}createNode(e){const s={};if(a(e.name)&&(s.name=e.name),a(e.children)&&(s.children=e.children),a(e.jointName)&&(s.jointName=e.jointName),a(e.matrix)&&(s.matrix=e.matrix),a(e.rotation)&&(s.rotation=e.rotation),a(e.scale)&&(s.scale=e.scale),a(e.translation)&&(s.translation=e.translation),a(e.extras)&&(s.extras=e.extras),a(e.meshes)&&(s.mesh=e.meshes[0]),s.translation||s.rotation||s.scale){const e=function(e,s){if(s.matrix)return s.matrix;if(s.translation||s.scale||s.rotation){const r=fromTranslation$1(c,s.translation||m$2),n=fromQuat(l,s.rotation||g$2),i=fromScaling(d$1,s.scale||p$2);return multiply$5(i,n,i),multiply$5(e,r,i)}return identity$2(e)}([],s);delete s.translation,delete s.rotation,delete s.scale,s.matrix=e;}return s}_loadMaterials(e){const t={};for(const s in e){const r=e[s];let n,i;r.instanceTechnique&&r.instanceTechnique.values?(n=r.instanceTechnique,i=n.values.diffuse):(n=r,i=n.values.tex||n.values.diffuseTex||n.values.diffuse);const a={baseColorTexture:{index:i}};r.name&&(a.name=r.name),r.extensions&&(a.extensions=r.extensions),r.extras&&(a.extras=r.extras),t[s]=a;}return t}_loadImage(e){if(e.bufferView||e.extensions&&(e.extensions.KHR_binary_glTF||e.extensions.binary_glTF)){const t=e.bufferView?e:e.extensions.KHR_binary_glTF||e.extensions.binary_glTF;e.extensions&&(e.mimeType=t.mimeType,e.width=t.width,e.height=t.height);const s=this.gltf.bufferViews[t.bufferView],r=(s.byteOffset||0)+this.glbBuffer.byteOffset,n=s.byteLength,i=this.buffers[t.bufferView]=new Uint8Array(this.glbBuffer.buffer,r,n);return this.getImageByBuffer(i,e)}return this.requestExternalImage(e)}_getTexture(e){const t=this.gltf.textures[e];if(!t)return null;const s=this.gltf.images[t.source];return this._loadImage(s).then(e=>{const r=this.gltf.samplers[t.sampler];return {image:{array:e.data,width:e.width,height:e.height,index:t.source,mimeType:s.mimeType,name:s.name,extras:s.extras},sampler:r}})}getBaseColorTexture(e){const t=this.gltf.materials[e];let s,r;if(t.instanceTechnique&&t.instanceTechnique.values?(s=t.instanceTechnique,r=s.values.diffuse):(s=t,r=s.values.tex||s.values.diffuseTex||s.values.diffuse),void 0===r||void 0===this.gltf.textures)return null;const n=this.gltf.textures[r];if(!n)return null;const i=this.gltf.samplers[n.sampler];return {format:n.format||6408,internalFormat:n.internalFormat||6408,type:n.type||5121,sampler:i,source:this.gltf.images[n.source]}}getMaterial(){return null}getAnimations(){return null}}class O$2 extends x$2{constructor(e,t,s,r,n,i){super(r,n,i),this.rootPath=e,this.gltf=t,this.glbBuffer=s,this.buffers={},this.requests={},this.accessor=new E$2(e,t,s);}iterate(e,t){const s=this.gltf[t];if(s)for(let t=0;t<s.length;t++)e(t,s[t],t);}createNode(e){const t={};return o(t,e),!a(e.weights)&&this.gltf.meshes&&a(t.mesh)?t.weights=this.gltf.meshes[t.mesh].weights:e.weights&&(t.weights=e.weights),t}_getTexture(e){const t=this.gltf.textures[e];if(!t)return null;const s=this.gltf.images[t.source];return this._loadImage(s).then(e=>{if(!e)return null;const r={image:{array:e.data,mipmap:e.mipmap,width:e.width,height:e.height,index:t.source,mimeType:s.mimeType,name:s.name,extensions:s.extensions,extras:s.extras}};o(r,t);const n=a(t.sampler)?this.gltf.samplers[t.sampler]:void 0;return n&&(r.sampler=n),e.format&&(r.format=e.format),r})}_loadImage(e){if(!a(e.bufferView))return this.requestExternalImage(e);{const t=this.gltf.bufferViews[e.bufferView],s=this.gltf.buffers[t.buffer];if(s.uri)return this.requestImageFromBufferURI(s,t,e);if(this.glbBuffer)return this._requestFromGlbBuffer(t,e)}return null}_requestFromGlbBuffer(e,t){const s=this._createDataView(e,this.glbBuffer.buffer,this.glbBuffer.byteOffset);return this.getImageByBuffer(s,t)}_createDataView(e,t,s){s=s||0;const r=e.byteOffset+s,n=e.byteLength;return new Uint8Array(t,r,n)}_transformArrayBufferToBase64(e,t){const s=new Array(e.byteLength);for(let t=0;t<e.byteLength;t++)s[t]=String.fromCharCode(e[t]);s.join("");return "data:"+(t=t||"image/png")+";base64,"+function(e){return "undefined"!=typeof self?self.btoa(e):window.btoa(e)}(unescape(encodeURIComponent(s)))}getAnimations(e){const t=[];return e.forEach(e=>{t.push(this.getSamplers(e.samplers));}),Promise.all(t).then(t=>{for(let s=0;s<t.length;s++)e[s].samplers=t[s];return e})}getSamplers(e){const t=[];for(let s=0;s<e.length;s++)(a(e[s].input)||a(e[s].output))&&(t.push(this.accessor._requestData("input",e[s].input)),t.push(this.accessor._requestData("output",e[s].output)));return Promise.all(t).then(t=>{for(let s=0;s<t.length/2;s++)e[s].input=t[2*s],e[s].output=t[2*s+1],e[s].interpolation||(e[s].interpolation="LINEAR");return e})}}const N$2="undefined"!=typeof TextDecoder?new TextDecoder("utf-8"):null,R$3=1313821514,B$2=5130562;class P$2{static read(e,t=0,s=0){s||(s=e.byteLength);const r=new DataView(e,t,s),n=r.getUint32(4,!0);if(1===n)return P$2.readV1(r,t);if(2===n)return P$2.readV2(e,t);throw new Error("Unsupported glb version : "+n)}static readV1(e,t){const s=e.getUint32(8,!0),r=e.getUint32(12,!0);if(s!==e.byteLength)throw new Error("Length in GLB header is inconsistent with glb's byte length.");const n=A$3(e.buffer,20+t,r);return {json:JSON.parse(n),glbBuffer:{byteOffset:20+t+r,buffer:e.buffer,byteLength:s}}}static readV2(e,t){let s,r,n;const i=new DataView(e,t+12);let a=0;for(;a<i.byteLength;){const o=i.getUint32(a,!0);a+=4;const f=i.getUint32(a,!0);if(a+=4,f===R$3)s=A$3(e,t+12+a,o);else if(f===B$2){n=t+12+a,r=o;break}a+=o;}return {json:JSON.parse(s),glbBuffer:{byteOffset:n,buffer:e,byteLength:r}}}}function A$3(e,t,s){if(N$2){const r=new Uint8Array(e,t,s);return N$2.decode(r)}return function(e){const t=e.length;let s="";for(let r=0;r<t;){let n=e[r++];if(128&n){let s=S$2[n>>3&7];if(!(64&n)||!s||r+s>t)return null;for(n&=63>>s;s>0;s-=1){const t=e[r++];if(128!=(192&t))return null;n=n<<6|63&t;}}s+=String.fromCharCode(n);}return s}(new Uint8Array(e,t,s))}const S$2=[1,1,1,1,2,2,3,0];const q$2=[0,0,0],v$2=[0,0,0,1],V$2=[1,1,1],M$2={TRANSLATION:[0,0,0],ROTATION:[0,0,0,1],SCALE:[1,1,1]},L$2={PREVIOUS:null,NEXT:null,PREINDEX:null,NEXTINDEX:null,INTERPOLATION:null},D$2={_getTRSW(t,r,n,i,o,f,u,h){const c=a(t)?r.animations:[r.animations[0]],l={};for(let r=0;r<c.length;r++){const d=c[r],m=d.name||r;if(a(t)&&m!==t)continue;const g=d.channelsMap[n];if(g)for(let t=0;t<g.length;t++){const r=g[t];"translation"===r.target.path?(this._getAnimateData(o,d.samplers[r.sampler],i,1),l.translation=copy$4(q$2,o)):"rotation"===r.target.path?(this._getQuaternion(f,d.samplers[r.sampler],i,1),l.rotation=copy$2(v$2,f)):"scale"===r.target.path?(this._getAnimateData(u,d.samplers[r.sampler],i,1),l.scale=copy$4(V$2,u)):"weights"===r.target.path&&h&&(this._getAnimateData(h,d.samplers[r.sampler],i,h.length),l.weights=h);}}return l},_getAnimateData(e,t,s,r){switch(t.interpolation){case"LINEAR":{const n=this._getPreNext(L$2,t,s,1*r);n&&(e=function(e,t,s,r){for(let n=0;n<e.length;n++)e[n]=t[n]+r*(s[n]-t[n]);return e}(e,n.PREVIOUS,n.NEXT,n.INTERPOLATION));break}case"STEP":{const n=this._getPreNext(L$2,t,s,1*r);n&&(e=function(e,t){for(let s=0;s<e.length;s++)e[s]=t[s];return e}(e,...n.PREVIOUS));break}case"CUBICSPLINE":{const n=this._getPreNext(L$2,t,s,3*r);n&&(e=this._getCubicSpline(e,n,t.input.array,3*r));break}}return e},_getQuaternion(t,s,n){switch(s.interpolation){case"LINEAR":{const r=this._getPreNext(L$2,s,n,1);r&&slerp(t,r.PREVIOUS,r.NEXT,r.INTERPOLATION);break}case"STEP":{const e=this._getPreNext(L$2,s,n,1);e&&(t=set$3(t,...e.PREVIOUS));break}case"CUBICSPLINE":{const e=this._getPreNext(L$2,s,n,3);if(e){for(let t=0;t<e.PREVIOUS.length;t++)e.PREVIOUS[t]=Math.acos(e.PREVIOUS[t]),e.NEXT[t]=Math.acos(e.NEXT[t]);t=this._getCubicSpline(t,e,s.input.array,3);for(let e=0;e<t.length;e++)t[e]=Math.cos(t[e]);}break}}return t},_search(e,t){const s=e.length;let r,n,i,a=0,o=s-1,f=Math.floor((a+o)/2);for(;a<=s-1&&o>=0;){if(a===o)return null;if(e[f]<=t&&t<=e[f+1]){const s=e[f];return r=f,n=f+1,i=(t-s)/(e[f+1]-s),{preIndx:r,nextIndex:n,interpolation:i}}t<e[f]?(o=f,f=Math.floor((a+o)/2)):e[f+1]<t&&(a=f,f=Math.floor((a+o)/2));}return null},_getPreNext(e,t,s,r){const n=t.input.array,i=t.output.array,a=t.output.itemSize;(s<n[0]||s>n[n.length-1])&&(s=Math.max(n[0],Math.min(n[n.length-1],s))),s===n[n.length-1]&&(s=n[0]);const o=this._search(n,s);if(!o||!o.nextIndex)return null;const{preIndx:f,nextIndex:u,interpolation:h}=o;e.PREINDEX=f,e.NEXTINDEX=u,e.INTERPOLATION=h;const c=a*r;return e.PREVIOUS=i.subarray(e.PREINDEX*c,(e.PREINDEX+1)*c),e.NEXT=i.subarray(e.NEXTINDEX*c,(e.NEXTINDEX+1)*c),e},_getCubicSpline(e,t,s,r){const n=t.INTERPOLATION,i=s[t.PREINDEX],a=s[t.NEXTINDEX];for(let s=0;s<3;s++){const o=t.PREVIOUS[r+s],f=(a-i)*t.PREVIOUS[2*r+s],u=t.NEXT[3+s],h=(a-i)*t.NEXT[s],c=(2*Math.pow(n,3)-3*Math.pow(n,2)+1)*o+(Math.pow(n,3)-2*Math.pow(n,2)+n)*f+(2*-Math.pow(n,3)+3*Math.pow(n,2))*u+(Math.pow(n,3)-Math.pow(n,2))*h;e[s]=c;}return e},getAnimationClip(e,t,n,i){const a=e.nodes[t]&&e.nodes[t].weights;set$4(q$2,...M$2.TRANSLATION),set$3(v$2,...M$2.ROTATION),set$4(V$2,...M$2.SCALE);return this._getTRSW(i,e,t,n,q$2,v$2,V$2,a)},getTimeSpan(e){if(!e.animations)return null;if(e.timeSpan)return e.timeSpan;const t=e.animations;return e.timeSpan={},t.forEach((t,s)=>{let r=-1/0,n=1/0;const i=t.channels;for(let e=0;e<i.length;e++){const s=i[e],a=t.samplers[s.sampler].input.array;a[a.length-1]>r&&(r=a[a.length-1]),a[0]<n&&(n=a[0]);}const a=t.name||s;e.timeSpan[a]={max:r,min:n};}),e.timeSpan},getTimeSpanByName(e,t){const s=this.getTimeSpan(e);return s?a(t)?s[t]:s[Object.keys(s)[0]]:null}};let U$2=!1;if("undefined"!=typeof OffscreenCanvas){let e;try{e=new OffscreenCanvas(2,2).getContext("2d");}catch(e){}e&&"undefined"!=typeof createImageBitmap&&(U$2=!0);}const C$2="undefined"==typeof document?null:document.createElement("canvas");class k$2{constructor(e,t,s){if(this.options=s||{},this.options.decoders||(this.options.decoders={}),t.buffer instanceof ArrayBuffer){const{json:s,glbBuffer:r}=P$2.read(t.buffer,t.byteOffset,t.byteLength);this._init(e,s,r);}else this._init(e,t);this._accessor=new E$2(this.rootPath,this.gltf,this.glbBuffer),this._checkExtensions();}_checkExtensions(){const e=this.gltf.extensionsRequired;if(e){if(e.indexOf("KHR_draco_mesh_compression")>=0&&!this.options.decoders.draco)throw new Error("KHR_draco_mesh_compression is required but @maptalks/transcoders.draco is not loaded");if(e.indexOf("KHR_texture_basisu")>=0&&!this.options.decoders.ktx2)throw new Error("KHR_texture_basisu is required but @maptalks/transcoders.ktx2 is not loaded")}}_loadExtensions(){const e=this.gltf.extensions;return e&&e.KHR_techniques_webgl?this._accessor.requestKHRTechniquesWebgl(e.KHR_techniques_webgl).then(t=>(e.KHR_techniques_webgl=t,e)):Promise.resolve(e)}load(e){e=e||{};const t=this._loadScene(e),s=this._loadAnimations(),r=this._loadTextures(),n=this._loadExtensions();return Promise.all([t,s,r,n]).then(e=>(e[0].animations=e[1],e[0].textures=e[2],e[0].extensions=e[3],e[0].transferables=this.transferables||[],this.createChannelsMap(e[0]),e[0]))}createChannelsMap(e){const t=e.animations;if(t)for(let e=0;e<t.length;e++){const s=t[e];s.channelsMap={};for(let e=0;e<s.channels.length;e++){const t=s.channels[e];s.channelsMap[t.target.node]||(s.channelsMap[t.target.node]=[]),s.channelsMap[t.target.node].push(t);}}}getExternalResources(){const e=[];if(this.gltf){const{buffers:t,images:s}=this.gltf;for(let s=0;s<t.length;s++)t[s].uri&&t[s].uri.indexOf("data:application/octet-stream;base64")<0&&e.push({type:"buffer",uri:t[s].uri});for(let t=0;t<s.length;t++)s[t].uri&&s[t].uri.indexOf("data:image/")<0&&e.push({type:"image",uri:s[t].uri});}return e}static getAnimationClip(e,t,s,r){return D$2.getAnimationClip(e,t,s,r)}static getAnimationTimeSpan(e,t){return D$2.getTimeSpanByName(e,t)}static getTypedArrayCtor(e){return f$1(e)}static readInterleavedArray(e,t,s,r,n,i,a){return b$2(e,t,s,r,n,i,a)}_init(e,t,s){this.gltf=t,this.glbBuffer=s,this.version=t.asset?+t.asset.version:1,this.rootPath=e,this.buffers={},this.requests={},this.options.requestImage=U$2?H$2:this.options.requestImage||X$2,this.options.transferable&&(this.transferables=[]),2===this.version?(this.adapter=new O$2(e,t,s,this.options.requestImage,this.options.decoders||{},this.options.supportedFormats||{}),this.adapter.iterate((e,t,s)=>{t.id="buffer_"+s;},"buffers"),this.adapter.iterate((e,t,s)=>{t.id="image_"+s;},"images"),this.adapter.iterate((e,t,s)=>{t.id="accessor_"+s;},"accessors")):(this.adapter=new I$2(e,t,s,this.options.requestImage,this.options.decoders||{},this.options.supportedFormats||{}),this.adapter.iterate((e,t,s)=>{t.id="accessor_"+s;},"accessors"),this.adapter.iterate((e,t,s)=>{t.id="image_"+s;},"images"));}_parseNodes(e,t){if(e.children&&e.children.length>0){if(!(s=e.children[0],"number"==typeof s&&isFinite(s)||function(e){return !i$1(e)&&("string"==typeof e||null!==e.constructor&&e.constructor===String)}(e.children[0])))return e;const r=e.children.map(e=>{const s=t[e];return s.nodeIndex=e,this._parseNodes(s,t)});e.children=r;}var s;return e}_loadScene(e){return this._loadNodes(e).then(e=>{const t=this.scenes=[];let s;for(const t in e)e[t]=this._parseNodes(e[t],e),e[t].nodeIndex=Number(t)?Number(t):t;this.adapter.iterate((r,n,i)=>{const a={};n.name&&(a.name=n.name),n.nodes&&(a.nodes=n.nodes.map(t=>e[t])),this.gltf.scene===r&&(s=i),t.push(a);},"scenes");const r={asset:this.gltf.asset,scene:s,scenes:t,nodes:e,meshes:this.meshes,materials:this.gltf.materials,skins:this.skins};if(this.gltf.extensions&&(r.extensions=this.gltf.extensions),1===this.version){const e=this.adapter._loadMaterials(this.gltf.materials);r.materials=e;}return r})}_loadNodes(e){return this._loadMeshes(e).then(()=>{const e=this.nodes={};return this.adapter.iterate((t,s)=>{const r=this.adapter.createNode(s,this.meshes,this.skins);e[t]=r;},"nodes"),e})}_loadSkins(){this.skins=[];const e=[];return this.adapter.iterate((t,s,r)=>{e.push(this._loadSkin(s).then(e=>{e.index=r,this.skins.push(e);}));},"skins"),e}_loadSkin(e){const t=e.inverseBindMatrices;return this.adapter.accessor._requestData("inverseBindMatrices",t).then(t=>(e.inverseBindMatrices=t,t&&t.buffer&&this.transferables&&this.transferables.indexOf(t.buffer)<0&&this.transferables.push(t.buffer),e))}_loadAnimations(){const e=this.gltf.animations;return a(e)?this.adapter.getAnimations(e):null}_loadMeshes(e){this.meshes={};let t=[];return this.adapter.iterate((s,r,n)=>{t.push(this._loadMesh(r,e).then(e=>{e.index=n,this.meshes[s]=e;}));},"meshes"),t=t.concat(this._loadSkins()),Promise.all(t)}_loadMesh(e,t){const s=e.primitives.map(e=>this._loadPrimitive(e,t)).filter(e=>!!e);return Promise.all(s).then(t=>{const s={};return o(s,e),s.primitives=t,s})}_loadTextures(){const e=this.gltf.textures;if(!e)return null;const t=[];for(const s in e)t.push(this.adapter._getTexture(s));return Promise.all(t).then(t=>{if(this.transferables)for(let e=0;e<t.length;e++)if(t[e]&&t[e].image.array){const s=t[e].image.array.buffer;s&&this.transferables.indexOf(s)<0&&this.transferables.push(s);}if(!Array.isArray(e)){const s={},r=Object.keys(e);for(let e=0;e<t.length;e++)t[e]&&(s[r[e]]=t[e]);return s}return t})}_loadPrimitive(e,t){let r;const n=[],i=e.extensions;if(a(e.targets))for(let t=0;t<e.targets.length;t++){const s=e.targets[t];for(const e in s){const r=this.adapter.accessor._requestData(`morphTargets_${e}_${t}`,s[e]);r&&n.push(r);}}if(i&&i.KHR_draco_mesh_compression){if(!this.options.decoders.draco&&(!this.gltf.extensionsRequired||!this.gltf.extensionsRequired.indexOf("KHR_draco_mesh_compression")<0))return null;const e=this.options.decoders.draco,{bufferView:s,attributes:a}=i.KHR_draco_mesh_compression,o=this.gltf.bufferViews[s],f=this._accessor._requestBufferOfBufferView(o).then(s=>{const{buffer:r,byteOffset:n}=s;let{byteOffset:i,byteLength:f}=o;i||(i=0);const u=new DataView(r,n+i,f),h={attributes:a,useUniqueIDs:!1,skipAttributeTransform:t.skipAttributeTransform};return e(u,h).then(e=>{const t=Object.values(e.attributes);return e.indices&&t.push(e.indices),t})});n.push(f),r=Promise.all(n);}else {const t=e.attributes;for(const e in t){const s=this.adapter.accessor._requestData(e,t[e]);s&&n.push(s);}if(a(e.indices)){const t=this.adapter.accessor._requestData("indices",e.indices);t&&n.push(t);}r=Promise.all(n);}return r.then(t=>{if(i&&i.KHR_draco_mesh_compression){const s=e.targets?e.targets.length:0;t[s]=t[s].concat(t.slice(0,s)),t=t[s];}let r,n;const o={attributes:t.reduce((e,t)=>{if("indices"===t.name)r=t;else if(t.name.indexOf("morphTargets_")>-1)n=n||{},n[t.name.slice(13)]=t;else {if(!("POSITION"!==t.name||t.min&&t.max)){const e=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0],{itemSize:n,array:i}=t,a=i.length/n;for(let t=0;t<a;t++)for(let s=0;s<n;s++){const a=t*n+s;i[a]<e[s]&&(e[s]=i[a]),i[a]>r[s]&&(r[s]=i[a]);}if(t.quantization){const n=t.quantization,i=n.range/(1<<n.quantizationBits),a=n.minValues;scale$4(e,e,i),add$4(e,e,a),scale$4(r,r,i),add$4(r,r,a);}t.min=e,t.max=r;}e[t.name]=t;}return this.transferables&&t.array.buffer&&this.transferables.indexOf(t.array.buffer)<0&&this.transferables.push(t.array.buffer),e},{}),material:e.material};return r&&(o.indices=r),n&&(o.morphTargets=n),o.mode=a(e.mode)?e.mode:4,a(e.extras)&&(o.extras=e.extras),o})}}function X$2(e,t){const s=new Image;s.crossOrigin="",s.onload=()=>{if(!C$2)return void t(new Error("There is no canvas to draw image!"));C$2.width=s.width,C$2.height=s.height;const e=C$2.getContext("2d");e.drawImage(s,0,0,s.width,s.height);const r=e.getImageData(0,0,s.width,s.height),n={width:s.width,height:s.height,data:new Uint8Array(r.data)};t(null,n);},s.onerror=function(e){t(e);},s.src=e;}let j$2,F$2;function H$2(e,t){j$2||(j$2=new OffscreenCanvas(2,2),F$2=j$2.getContext("2d")),fetch(e).then(e=>e.blob()).then(e=>createImageBitmap(e)).then(e=>{let{width:s,height:r}=e;K$2(s)||(s=z$2(s)),K$2(r)||(r=z$2(r)),j$2.width=s,j$2.height=r,F$2.drawImage(e,0,0,s,r),e.close();const n=F$2.getImageData(0,0,s,r);t(null,{width:s,height:r,data:new Uint8Array(n.data)});}).catch(e=>{console.warn(e),t(e);});}function K$2(e){return 0==(e&e-1)&&0!==e}function z$2(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}

	class Vertex {
	    constructor(vertices, index) {
	        this.position = vertices;
	        this.index = index; //index of vertex
	        this.faces = []; // face shared
	        this.neighbors = []; // neighbor vertexes
	    }

	    addUniqueNeighbor(vertex) {
	        if (this.neighbors.indexOf(vertex) === -1) {
	            this.neighbors.push(vertex);
	        }
	    }
	}

	class Triangle {
	    constructor(v1, v2, v3, face) {
	        this.a = face.a;
	        this.b = face.b;
	        this.c = face.c;
	        this.v1 = v1;
	        this.v2 = v2;
	        this.v3 = v3;
	        this.normal = [];
	        this.computeNormal();
	        //add self into v1 vertex as its shared face
	        v1.faces.push(this);
	        v1.addUniqueNeighbor(v2);
	        v1.addUniqueNeighbor(v3);

	        v2.faces.push(this);
	        v2.addUniqueNeighbor(v1);
	        v2.addUniqueNeighbor(v3);

	        v3.faces.push(this);
	        v3.addUniqueNeighbor(v1);
	        v3.addUniqueNeighbor(v2);
	    }

	    computeNormal() {
	        const vA = this.v1.position;
	        const vB = this.v2.position;
	        const vC = this.v3.position;
	        const cb = sub$2([], vC, vB);
	        const ab = sub$2([], vA, vB);
	        const cross = cross$1([], cb, ab);
	        normalize$4(this.normal, cross);
	    }

	    hasVertex(v) {
	        return v === this.v1 || v === this.v2 || v === this.v3;
	    }
	}

	/*!
	 * Contains code from google filament
	 * https://github.com/google/filament/
	 * License Apache-2.0
	 */

	const CHAR_BIT = 8;

	const MAT0 = [];
	const TMP0 = [];
	const TMP1 = [];
	const TMP2 = [];

	function packTangentFrame(q, /* vec3 */n, /* vec4 */t) {
	    const c = cross$1(TMP0, n, t);
	    const mat = toMat3(MAT0, t[0], t[1], t[2], ...c, ...n);
	    q = fromMat3(q, mat);
	    q = normalize$2(q, q);
	    q = positive(q);

	    const storageSize = 2; //sizeof(int16_t)
	    // Ensure w is never 0.0
	    // Bias is 2^(nb_bits - 1) - 1
	    const bias = 1 / ((1 << (storageSize * CHAR_BIT - 1)) - 1);
	    if (q[3] < bias) {
	        q[3] = bias;
	        const factor = Math.sqrt(1.0 - bias * bias);
	        q[0] *= factor;
	        q[1] *= factor;
	        q[2] *= factor;
	    }

	    const b = t[3] > 0 ? cross$1(TMP1, t, n) : cross$1(TMP1, n, t);
	    
	    // If there's a reflection ((n x t) . b <= 0), make sure w is negative
	    const cc = cross$1(TMP2, t, n);
	    if (dot$4(cc, b) < 0) {
	        scale$2(q, q, -1);
	    }
	    return q;
	}

	function toMat3(out, c00, c01, c02, c10, c11, c12, c20, c21, c22) {
	    out[0] = c00;
	    out[1] = c01;
	    out[2] = c02;

	    out[3] = c10;
	    out[4] = c11;
	    out[5] = c12;

	    out[6] = c20;
	    out[7] = c21;
	    out[8] = c22;

	    return out;
	}


	function positive(q) {
	    if (q[3] < 0) {
	        return scale$2(q, q, -1);
	    } else {
	        return q;
	    }
	}


	function buildNormals(positions, indices) {
	    const vertexes = [];
	    const normals = [];
	    let i = 0;
	    //create vertex struct
	    for (i = 0; i < positions.length; i += 3) {
	        const vertex = new Vertex([positions[i], positions[i + 1], positions[i + 2]], i / 3);
	        vertexes.push(vertex);
	    }
	    //create face struct
	    //indicles maybe number
	    if (!indices.length) {
	        const len = indices;
	        indices = [];
	        for (let i = 0; i < len; i++) {
	            indices.push(i);
	        }
	    }
	    for (i = 0; i < indices.length / 3; i++) {
	        const face = {
	            a : indices[i * 3],
	            b : indices[i * 3 + 1],
	            c : indices[i * 3 + 2]
	        };
	        new Triangle(vertexes[face.a], vertexes[face.b], vertexes[face.c], face);
	    }
	    const divide = [];
	    const normal = [0, 0, 0];
	    //Calculate the sum of the normal vectors of the shared faces of each vertex, then average it.
	    for (i = 0; i < vertexes.length; i++) {
	        const vertex = vertexes[i];
	        const vIndex = vertex.index;
	        set$4(normal, 0, 0, 0);
	        let len = vertex.faces.length;
	        for (let j = 0; j < len; j++) {
	            add$4(normal, normal, vertex.faces[j].normal);
	        }
	        len = len || 1;
	        set$4(divide, len, len, len);
	        divide$2(normal, normal, divide);
	        normals[vIndex * 3] = normal[0];
	        normals[vIndex * 3 + 1] = normal[1];
	        normals[vIndex * 3 + 2] = normal[2];
	    }
	    return normals;
	}

	/*!
	 * Contains code from THREE.JS
	 * https://github.com/mrdoob/three.js/
	 * License MIT
	 * 
	 * Generate tangents per vertex.
	 */
	function buildTangents(positions, normals, uvs, indices) {
	    const nVertices = positions.length / 3;

	    const tangents = new Array(4 * nVertices);

	    const tan1 = [], tan2 = [];

	    for (let i = 0; i < nVertices; i++) {

	        tan1[ i ] = [0, 0, 0];
	        tan2[ i ] = [0, 0, 0];

	    }

	    const vA = [0, 0, 0],
	        vB = [0, 0, 0],
	        vC = [0, 0, 0],

	        uvA = [0, 0],
	        uvB = [0, 0],
	        uvC = [0, 0],

	        sdir = [0, 0, 0],
	        tdir = [0, 0, 0];

	    function handleTriangle(a, b, c) {

	        fromArray3(vA, positions, a * 3);
	        fromArray3(vB, positions, b * 3);
	        fromArray3(vC, positions, c * 3);

	        fromArray2(uvA, uvs, a * 2);
	        fromArray2(uvB, uvs, b * 2);
	        fromArray2(uvC, uvs, c * 2);

	        const x1 = vB[0] - vA[0];
	        const x2 = vC[0] - vA[0];

	        const y1 = vB[1] - vA[1];
	        const y2 = vC[1] - vA[1];

	        const z1 = vB[2] - vA[2];
	        const z2 = vC[2] - vA[2];

	        const s1 = uvB[0] - uvA[0];
	        const s2 = uvC[0] - uvA[0];

	        const t1 = uvB[1] - uvA[1];
	        const t2 = uvC[1] - uvA[1];

	        const r = 1.0 / (s1 * t2 - s2 * t1);

	        set$4(
	            sdir,
	            (t2 * x1 - t1 * x2) * r,
	            (t2 * y1 - t1 * y2) * r,
	            (t2 * z1 - t1 * z2) * r
	        );

	        set$4(
	            tdir,
	            (s1 * x2 - s2 * x1) * r,
	            (s1 * y2 - s2 * y1) * r,
	            (s1 * z2 - s2 * z1) * r
	        );

	        add$4(tan1[ a ], tan1[ a ], sdir);
	        add$4(tan1[ b ], tan1[ b ], sdir);
	        add$4(tan1[ c ], tan1[ c ], sdir);

	        add$4(tan2[ a ], tan2[ a ], tdir);
	        add$4(tan2[ b ], tan2[ b ], tdir);
	        add$4(tan2[ c ], tan2[ c ], tdir);

	    }

	    for (let j = 0, jl = indices.length; j < jl; j += 3) {

	        handleTriangle(
	            indices[ j + 0 ],
	            indices[ j + 1 ],
	            indices[ j + 2 ]
	        );

	    }

	    const tmp = [], tmp2 = [];
	    const n = [], n2 = [];
	    let w, t, test;

	    function handleVertex(v) {

	        fromArray3(n, normals, v * 3);
	        copy$4(n2, n);
	        // n2.copy(n);

	        t = tan1[ v ];

	        // Gram-Schmidt orthogonalize

	        copy$4(tmp, t);
	        sub$2(tmp, tmp, scale$4(n, n, dot$4(n, t)));
	        normalize$4(tmp, tmp);
	        // tmp.sub(n.multiplyScalar(n.dot(t))).normalize();

	        // Calculate handedness

	        cross$1(tmp2, n2, t);
	        test = dot$4(tmp2, tan2[ v ]);
	        // tmp2.crossVectors(n2, t);
	        // test = tmp2.dot(tan2[ v ]);
	        w = (test < 0.0) ? -1.0 : 1.0;

	        tangents[ v * 4 ] = tmp[0];
	        tangents[ v * 4 + 1 ] = tmp[1];
	        tangents[ v * 4 + 2 ] = tmp[2];
	        tangents[ v * 4 + 3 ] = w;

	    }

	    for (let j = 0, jl = indices.length; j < jl; j += 3) {

	        handleVertex(indices[ j + 0 ]);
	        handleVertex(indices[ j + 1 ]);
	        handleVertex(indices[ j + 2 ]);

	    }

	    return tangents;
	}

	function fromArray3(out, array, offset) {
	    out[0] = array[offset];
	    out[1] = array[offset + 1];
	    out[2] = array[offset + 2];
	    return out;
	}

	function fromArray2(out, array, offset) {
	    out[0] = array[offset];
	    out[1] = array[offset + 1];
	    return out;
	}

	/*!
	 * @maptalks/reshader.gl v0.67.6
	 * LICENSE : UNLICENSED
	 * (c) 2016-2022 maptalks.com
	 */

	function f(e) {
	    return !u(e) && ("string" == typeof e || null !== e.constructor && e.constructor === String);
	}

	function u(e) {
	    return null == e;
	}

	function h(e) {
	    return !u(e);
	}

	function d(e) {
	    return !u(e) && ("function" == typeof e || null !== e.constructor && e.constructor === Function);
	}

	const m$1 = "function" == typeof Object.assign;

	function v$1(e) {
	    if (m$1) Object.assign.apply(Object, arguments); else for (let t = 1; t < arguments.length; t++) {
	        const n = arguments[t];
	        for (const t in n) e[t] = n[t];
	    }
	    return e;
	}

	function _$2(e) {
	    for (let t = 1; t < arguments.length; t++) {
	        const n = arguments[t];
	        for (const t in n) null != n[t] && (e[t] = n[t]);
	    }
	    return e;
	}

	function g$1(e) {
	    return "number" == typeof e && !isNaN(e);
	}

	function p$1(e, t, n) {
	    return e * (1 - n) + t * n;
	}

	function b$1(e) {
	    return Array.isArray(e) || e instanceof Uint8Array || e instanceof Int8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint8ClampedArray || e instanceof Float32Array || e instanceof Float64Array;
	}

	function x$1(e) {
	    return (e = Math.abs(e)) < 128 ? Int8Array : e < 32768 ? Int16Array : Float32Array;
	}

	function y$1(e, t, n) {
	    return Math.min(n, Math.max(t, e));
	}

	function T$2(e) {
	    return e && e.hasExtension("oes_vertex_array_object");
	}

	function A$2(e, t) {
	    return Object.prototype.hasOwnProperty.call(e, t);
	}

	function S$1(e) {
	    if (e.data) {
	        if (e.data.BYTES_PER_ELEMENT) return e.data.length * e.data.BYTES_PER_ELEMENT;
	        if (e.data.length) return 4 * e.data.length;
	    } else {
	        if (e.BYTES_PER_ELEMENT) return e.length * e.BYTES_PER_ELEMENT;
	        if (e.length) return 4 * e.length;
	        if (e.buffer && e.buffer.destroy) return e.buffer._buffer.byteLength;
	    }
	    return 0;
	}

	function M$1(e) {
	    return e.width * e.height * C$1(e.format) * E$1(e.type) * ("textureCube" === e._reglType ? 6 : 1);
	}

	function E$1(e) {
	    return "uint8" === e ? 1 : "uint16" === e || "float16" === e || "half float" === e ? 2 : "uint32" === e || "float" === e || "float32" === e ? 4 : 0;
	}

	function C$1(e) {
	    return "depth" === e || "alpha" === e || "luminance" === e ? 1 : "luminance alpha" === e || "depth stencil" === e ? 2 : "srgba" === e || "rgb5 a1" === e || "rgba" === e.substring(0, 4) ? 4 : "srgb" === e || "rgb" === e.substring(0, 3) ? 3 : 1;
	}

	function O$1(t) {
	    if (!t.componentType) return !1;
	    const n = k$2.getTypedArrayCtor(t.componentType);
	    return t.byteStride > 0 && t.byteStride !== t.itemSize * n.BYTES_PER_ELEMENT;
	}

	function w$1(e) {
	    return e && (e.stride > 0 || O$1(e));
	}

	var P$1 = Object.freeze({
	    __proto__: null,
	    isString: f,
	    isNil: u,
	    defined: h,
	    isFunction: d,
	    extend: v$1,
	    extend1: _$2,
	    extend2: function(e) {
	        for (let t = 1; t < arguments.length; t++) {
	            const n = arguments[t];
	            for (const t in n) void 0 === e[t] && (e[t] = n[t]);
	        }
	        return e;
	    },
	    isNumber: g$1,
	    log2: function(e) {
	        if (Math.log2) return Math.log2(e);
	        const t = Math.log(e) * Math.LOG2E, n = Math.round(t);
	        return Math.abs(n - t) < 1e-14 ? n : t;
	    },
	    normalize: function(e, t) {
	        let n = 0;
	        for (let e = 0, r = t.length; e < r; e++) n += t[e];
	        for (let r = 0, i = t.length; r < i; r++) e[r] = t[r] / n;
	        return e;
	    },
	    interpolate: p$1,
	    isArray: b$1,
	    lerp: function(e, t, n, r) {
	        for (let i = 0; i < e.length; i++) e[i] = t[i] + r * (n[i] - t[i]);
	        return e;
	    },
	    set: function(e, t) {
	        for (let n = 0; n < e.length; n++) e[n] = t[n];
	        return e;
	    },
	    getPosArrayType: x$1,
	    clamp: y$1,
	    isSupportVAO: T$2,
	    hasOwn: A$2,
	    getBufferSize: S$1,
	    getTexMemorySize: M$1,
	    getTextureByteWidth: E$1,
	    getTextureChannels: C$1,
	    isInStride: O$1,
	    isInterleaved: w$1,
	    getSupportedFormats: function(e) {
	        return {
	            etc: !!e.getExtension("WEBGL_compressed_texture_etc"),
	            etc1: !!e.getExtension("WEBGL_compressed_texture_etc1"),
	            s3tc: !!e.getExtension("WEBGL_compressed_texture_s3tc"),
	            pvrtc: !!e.getExtension("WEBGL_compressed_texture_pvrtc"),
	            astc: !!e.getExtension("WEBGL_compressed_texture_astc"),
	            bc7: !!e.getExtension("EXT_texture_compression_bptc")
	        };
	    }
	});

	const I$1 = e => class extends e {
	    on(e, t) {
	        return this._events || (this._events = {
	            type: [ t ]
	        }), this._events[e] = this._events[e] || [], this._events[e].push(t), this;
	    }
	    once(e, t) {
	        return this.on(e, this._wrapOnce(e, t));
	    }
	    off(e, t) {
	        return this._events && this._events[e] ? (this._events[e].splice(this._events[e].indexOf(t), 1), 
	        this) : this;
	    }
	    fire(e, t = {}) {
	        if (!this._events || !this._events[e]) return this;
	        t.target || (t.target = this);
	        const n = this._events[e].slice(0);
	        for (const e of n) e(t);
	        return this;
	    }
	    _wrapOnce(e, t) {
	        const n = this;
	        let r = !1;
	        return function i(o) {
	            r || (r = !0, t(o), n.off(e, i));
	        };
	    }
	}, D$1 = "__reshader_disposed";

	var F$1 = Object.freeze({
	    __proto__: null,
	    KEY_DISPOSED: D$1,
	    WEBGL_EXTENSIONS: [ "ANGLE_instanced_arrays", "OES_element_index_uint", "OES_standard_derivatives" ],
	    WEBGL_OPTIONAL_EXTENSIONS: [ "OES_vertex_array_object", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_texture_float", "OES_texture_float_linear", "WEBGL_depth_texture", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic" ]
	});

	var N$1 = I$1(class {
	    constructor(e, t) {
	        if (d(e)) {
	            this._texture = e, e = this.config = {};
	            for (const t in this._texture) A$2(this._texture, t) && (d(this._texture[t]) || (e[t] = this._texture[t]));
	        } else if (this.config = e || {}, this.resLoader = t, !e.url && !e.promise || e.data) e.data && this._needPowerOf2() && (e.data instanceof Image && (e.data = R$2(e.data), 
	        e.width = e.data.width, e.height = e.data.height), e.hdr || !b$1(e.data) || B$1(e.width) && B$1(e.height) || (e.data = function(e, t, n) {
	            let r = t, i = n;
	            B$1(t) || (r = L$1(t));
	            B$1(n) || (i = L$1(n));
	            const o = new ImageData(new Uint8ClampedArray(e), t, n), a = document.createElement("canvas");
	            a.width = t, a.height = n, a.getContext("2d").putImageData(o, 0, 0);
	            const s = document.createElement("canvas");
	            return s.width = r, s.height = i, s.getContext("2d").drawImage(a, 0, 0, r, i), console.warn(`Texture's size is not power of two, resize from (${t}, ${n}) to (${r}, ${i})`), 
	            s;
	        }(e.data, e.width, e.height), e.width = e.data.width, e.height = e.data.height)); else {
	            this._loading = !0;
	            const n = this;
	            let r;
	            if (e.promise) r = e.promise; else {
	                let n;
	                n = e.arrayBuffer ? t.getArrayBuffer : t.get, r = n.call(t, e.url);
	            }
	            e.data = t.getDefaultTexture(e.url), this.promise = r, r.then(e => (delete this.promise, 
	            n._loading = !1, n.config ? (e.data instanceof Image && this._needPowerOf2() && (e.data = R$2(e.data)), 
	            n.onLoad(e), Array.isArray(e) || (e = [ e ]), n.fire("complete", {
	                target: this,
	                resources: e
	            }), e) : e)).catch(e => {
	                console.error("error when loading texture image.", e), n.fire("error", {
	                    target: this,
	                    error: e
	                });
	            });
	        }
	    }
	    isReady() {
	        return !this._loading;
	    }
	    set(e, t) {
	        return this.config[e] = t, this.dirty = !0, this;
	    }
	    get(e) {
	        return this.config[e];
	    }
	    getREGLTexture(e) {
	        return this._texture || (this._texture = this.createREGLTexture(e), this.config.persistent || (this.config.data && (this.config.data = []), 
	        this.config.faces && (this.config.faces = []), this.config.image && (this.config.image.array = []))), 
	        this.dirty && this._updateREGL(), this._texture;
	    }
	    getMemorySize() {
	        if (!this.config) return 0;
	        const {width: e, height: t, type: n, format: r} = this.config, i = E$1(n || "uint8"), o = C$1(r || "rgba");
	        return this.config.faces ? e * t * i * o * 6 : e * t * i * o;
	    }
	    _updateREGL() {
	        this._texture && !this._texture[D$1] && this._texture(this.config), this.dirty = !1;
	    }
	    dispose() {
	        this.config && this.config.url && (URL.revokeObjectURL(this.config.url), this.resLoader.disposeRes(this.config.url)), 
	        this._texture && !this._texture[D$1] && (this._texture._reshader_refCount && this._texture._reshader_refCount--, 
	        this._texture._reshader_refCount || (this._texture.destroy(), this._texture[D$1] = !0, 
	        delete this._texture)), delete this.resLoader;
	        const e = this.config && this.config.url;
	        delete this.config, e && this.fire("disposed", {
	            target: this,
	            url: e
	        });
	    }
	    _needPowerOf2() {
	        const e = this.config;
	        return e.wrap && "clamp" !== e.wrap || e.wrapS && "clamp" !== e.wrapS || e.wrapT && "clamp" !== e.wrapT || e.min && "nearest" !== e.min && "linear" !== e.min;
	    }
	});

	function R$2(e) {
	    if (B$1(e.width) && B$1(e.height)) return e;
	    let t = e.width, n = e.height;
	    B$1(t) || (t = L$1(t)), B$1(n) || (n = L$1(n));
	    const r = document.createElement("canvas");
	    r.width = t, r.height = n, r.getContext("2d").drawImage(e, 0, 0, t, n);
	    const i = e.src, o = i.lastIndexOf("/") + 1, a = i.substring(o);
	    return console.warn(`Texture(${a})'s size is not power of two, resize from (${e.width}, ${e.height}) to (${t}, ${n})`), 
	    r;
	}

	function B$1(e) {
	    return 0 == (e & e - 1) && 0 !== e;
	}

	function L$1(e) {
	    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
	}

	const H$1 = {};

	class z$1 {
	    constructor(e) {
	        this.regl = e;
	    }
	    render(e, t, n, r) {
	        e.setUniforms(t || H$1), e.setFramebuffer(r);
	        let i = 0;
	        if (n) {
	            const {opaques: t, transparents: r} = n.getSortedMeshes();
	            i += e.draw(this.regl, t), i += e.draw(this.regl, r);
	        } else i += e.draw(this.regl);
	        return i;
	    }
	    clear(e) {
	        this.regl.clear(e);
	    }
	}

	class k$1 extends z$1 {}

	const j$1 = [], V$1 = identity$2([]), G$1 = {
	    min: [],
	    max: []
	};

	class U$1 {
	    constructor(e, t) {
	        this.min = e || [ 1 / 0, 1 / 0, 1 / 0 ], this.max = t || [ -1 / 0, -1 / 0, -1 / 0 ], 
	        this.updateVertex();
	    }
	    static copy(e, t) {
	        copy$4(e.min, t.min), copy$4(e.max, t.max);
	        for (let r = 0; r < t.vertex.length; r++) copy$4(e.vertex[r], t.vertex[r]);
	        return e;
	    }
	    combine(e) {
	        return e ? (Array.isArray(e) && (copy$4(G$1.min, e[0]), copy$4(G$1.max, e[1]), e = G$1), 
	        e.min[0] < this.min[0] && (this.min[0] = e.min[0], this._dirty = !0), e.min[1] < this.min[1] && (this.min[1] = e.min[1], 
	        this._dirty = !0), e.min[2] < this.min[2] && (this.min[2] = e.min[2], this._dirty = !0), 
	        e.max[0] > this.max[0] && (this.max[0] = e.max[0], this._dirty = !0), e.max[1] > this.max[1] && (this.max[1] = e.max[1], 
	        this._dirty = !0), e.max[2] > this.max[2] && (this.max[2] = e.max[2], this._dirty = !0), 
	        this) : this;
	    }
	    dirty() {
	        return this._dirty = !0, this;
	    }
	    getCenter() {
	        return this.center || (this.center = [], this._dirty = !0), this._dirty && (add$4(this.center, this.min, this.max), 
	        scale$4(this.center, this.center, .5)), this._dirty = !1, this.center;
	    }
	    containPoint(e) {
	        const t = this.min, n = this.max;
	        return t[0] <= e[0] && t[1] <= e[1] && t[2] <= e[2] && n[0] >= e[0] && n[1] >= e[1] && n[2] >= e[2];
	    }
	    isFinite() {
	        const e = this.min, t = this.max;
	        return isFinite(e[0]) && isFinite(e[1]) && isFinite(e[2]) && isFinite(t[0]) && isFinite(t[1]) && isFinite(t[2]);
	    }
	    updateVertex() {
	        if (!this.vertex) {
	            this.vertex = [];
	            for (let e = 0; e < 8; e++) this.vertex.push([]);
	        }
	        return this.vertex[0][0] = this.min[0], this.vertex[0][1] = this.min[1], this.vertex[0][2] = this.min[2], 
	        this.vertex[1][0] = this.min[0], this.vertex[1][1] = this.min[1], this.vertex[1][2] = this.max[2], 
	        this.vertex[2][0] = this.min[0], this.vertex[2][1] = this.max[1], this.vertex[2][2] = this.max[2], 
	        this.vertex[3][0] = this.min[0], this.vertex[3][1] = this.max[1], this.vertex[3][2] = this.min[2], 
	        this.vertex[4][0] = this.max[0], this.vertex[4][1] = this.min[1], this.vertex[4][2] = this.min[2], 
	        this.vertex[5][0] = this.max[0], this.vertex[5][1] = this.min[1], this.vertex[5][2] = this.max[2], 
	        this.vertex[6][0] = this.max[0], this.vertex[6][1] = this.max[1], this.vertex[6][2] = this.max[2], 
	        this.vertex[7][0] = this.max[0], this.vertex[7][1] = this.max[1], this.vertex[7][2] = this.min[2], 
	        this.vertex;
	    }
	    copy() {
	        return new U$1(this.min.slice(), this.max.slice());
	    }
	    equals(e) {
	        if (!equals$4(this.min, e.min) || !equals$4(this.max, e.max)) return !1;
	        const t = e.vertex;
	        for (let e = 0; e < this.vertex.length; e++) if (!equals$4(t[e], this.vertex[e])) return !1;
	        return !0;
	    }
	    transform(e, r) {
	        if (e = e || V$1, (r = r || V$1)[1] || r[2] || r[4] || r[6] || r[8] || r[9]) {
	            const i = this.vertex, o = multiply$5(j$1, r, e);
	            for (let e = 0; e < i.length; e++) transformMat4$2(this.vertex[e], this.vertex[e], o);
	            const a = this.vertex.map(e => e[0]), s = this.vertex.map(e => e[1]), c = this.vertex.map(e => e[2]), l = Math.min(...a), f = Math.max(...a), u = Math.min(...s), h = Math.max(...s), d = Math.min(...c), m = Math.max(...c);
	            set$4(this.min, l, u, d), set$4(this.max, f, h, m);
	        } else {
	            const i = multiply$5(j$1, r, e);
	            transformMat4$2(this.min, this.min, i), transformMat4$2(this.max, this.max, i);
	        }
	        return this;
	    }
	}

	const X$1 = {
	    5120: "int8",
	    5122: "int16",
	    5124: "int32",
	    5121: "uint8",
	    5123: "uint16",
	    5125: "uint32",
	    5126: "float"
	}, W$1 = {
	    5120: 1,
	    5122: 2,
	    5124: 4,
	    5121: 1,
	    5123: 2,
	    5125: 4,
	    5126: 4
	}, K$1 = {
	    positionSize: 3,
	    primitive: "triangles",
	    positionAttribute: "aPosition",
	    normalAttribute: "aNormal",
	    uv0Attribute: "aTexCoord",
	    uv1Attribute: "aTexCoord1",
	    color0Attribute: "aColor0",
	    tangentAttribute: "aTangent"
	};

	let q$1 = 1;

	const Y$1 = "_reshader_refCount";

	class J$1 {
	    constructor(e, t, n, r) {
	        this._version = 0, this.data = e, this.elements = t, this.desc = v$1({}, K$1, r);
	        const i = e[this.desc.positionAttribute];
	        n || (t ? n = Z$1(t) : i && i.length ? n = i.length / this.desc.positionSize : i && i.interleavedArray ? n = i.interleavedArray.length / this.desc.positionSize : i && i.array && (n = i.array.length / this.desc.positionSize)), 
	        this.count = n, this.elements || (this.elements = n), this.properties = {}, this._buffers = {}, 
	        this._vao = {}, this.getVertexCount(), this._prepareData(), this.updateBoundingBox();
	    }
	    set version(e) {
	        throw new Error("Geometry.version is read only.");
	    }
	    get version() {
	        return this._version;
	    }
	    _prepareData() {
	        if (!this.data) return;
	        const e = this._buffers || {};
	        for (const t in this.data) {
	            const n = this.data[t];
	            if (n) if (n.buffer && n.buffer.destroy) {
	                const e = n.buffer;
	                e[Y$1] || (e[Y$1] = 0), e[Y$1]++;
	            } else if (n && n.array) if (O$1(n)) {
	                let r = n.array.buffer.__id;
	                r || (r = n.array.buffer.__id = q$1++), this.data[t] = {
	                    buffer: r,
	                    offset: n.byteOffset,
	                    stride: n.byteStride,
	                    type: X$1[n.componentType],
	                    size: n.itemSize,
	                    count: n.count,
	                    componentType: n.componentType
	                }, e[r] || (e[r] = {
	                    data: n.array.buffer
	                });
	            } else this.data[t] = n.array;
	        }
	        this._buffers = e;
	        const t = this.elements;
	        t && t.array && (this.elements = this.elements.array);
	    }
	    getAttrData(e) {
	        const t = e.key, n = !this._reglData || !this._reglData[t];
	        if (this._reglData || (this._reglData = {}), n) {
	            const e = this._reglData[t] = {}, n = this.data, {positionAttribute: r, normalAttribute: i, uv0Attribute: o, uv1Attribute: a, tangentAttribute: s, color0Attribute: c} = this.desc;
	            v$1(e, this.data), e.aPosition = n[r], n[i] && (e.aNormal = n[i]), n[o] && (e.aTexCoord = n[o]), 
	            n[a] && (e.aTexCoord1 = n[a]), n[s] && (e.aTangent = n[s]), n[c] && (e.aColor0 = n[c]);
	        }
	        return this._reglData[t];
	    }
	    getREGLData(e, t, n) {
	        this.getAttrData(t);
	        const r = !this._reglData || !this._reglData[t.key];
	        if (T$2(e) && !n) {
	            const n = t && t.key || "default";
	            if (!this._vao[n] || r || this._elementsUpdated) {
	                const r = this._reglData[t.key], i = this.getVertexCount(), o = [];
	                for (let e = 0; e < t.length; e++) {
	                    const n = t[e].name, a = r[n] && r[n].buffer;
	                    if (a && a.destroy) o.push(void 0 !== r[n].stride ? r[n] : a); else {
	                        const e = r[n];
	                        if (!e) continue;
	                        const t = (e.data && b$1(e.data) ? e.data.length : e.length) / i;
	                        e.data ? (e.dimension = t, o.push(e)) : o.push({
	                            data: e,
	                            dimension: t
	                        });
	                    }
	                }
	                const a = {
	                    attributes: o,
	                    primitive: this.getPrimitive()
	                };
	                if (this.elements && !g$1(this.elements)) {
	                    a.elements = {
	                        primitive: this.getPrimitive(),
	                        data: this.elements
	                    };
	                    const e = this.getElementsType(this.elements);
	                    e && (a.elements.type = e);
	                }
	                this._vao[n] ? this._vao[n].vao(a) : this._vao[n] = {
	                    vao: e.vao(a)
	                }, delete this._elementsUpdated;
	            }
	            return this._vao[n];
	        }
	        return this._reglData[t.key];
	    }
	    _isAttrChanged(e) {
	        if (e === this._activeAttributes) return !1;
	        if (e.length !== this._activeAttributes.length) return !0;
	        for (let t = 0; t < e.length; t++) if (e[t] !== this._activeAttributes[t]) return !0;
	        return !1;
	    }
	    generateBuffers(e, t) {
	        const n = this._buffers;
	        for (const t in n) n[t].buffer || (n[t].buffer = e.buffer(n[t].data)), delete n[t].data;
	        const r = this.data, i = this.getVertexCount(), o = {};
	        for (const t in r) if (r[t]) {
	            if (void 0 === r[t].buffer || r[t].buffer instanceof ArrayBuffer) {
	                const n = r[t].data ? r[t] : {
	                    data: r[t]
	                };
	                n.dimension = (r[t].data ? r[t].data : r[t]).length / i;
	                const a = e.buffer(n);
	                a[Y$1] = 1, o[t] = {
	                    buffer: a
	                };
	            } else r[t].buffer.destroy ? o[t] = r[t] : n[r[t].buffer] && (o[t] = v$1({}, r[t]), 
	            o[t].buffer = n[r[t].buffer].buffer);
	            delete r[t].array;
	        }
	        this.data = o, delete this._reglData;
	        const a = t && t.excludeElementsInVAO;
	        if ((!T$2(e) || a) && this.elements && !g$1(this.elements)) {
	            const t = {
	                primitive: this.getPrimitive(),
	                data: this.elements
	            }, n = this.getElementsType(this.elements);
	            n && (t.type = n), this.elements = this.elements.destroy ? this.elements : e.elements(t);
	            const r = this.elements;
	            r[Y$1] || (r[Y$1] = 0), r[Y$1]++;
	        }
	    }
	    getVertexCount() {
	        const {positionAttribute: e, positionSize: t} = this.desc;
	        let n = this.data[e];
	        return n.data && (n = n.data), n.array && (n = n.array), b$1(n) ? this._vertexCount = Math.ceil(n.length / t) : n && void 0 !== n.count && (this._vertexCount = n.count), 
	        this._vertexCount;
	    }
	    addBuffer(e, t) {
	        return this._buffers[e] = {
	            data: t
	        }, delete this._reglData, this._deleteVAO(), this;
	    }
	    updateBuffer(e, t) {
	        if (!this._buffers[e]) throw new Error(`invalid buffer ${e} in geometry`);
	        return this._buffers[e].buffer ? this._buffers[e].buffer.subdata(t) : this._buffers[e].data = t, 
	        delete this._reglData, this._deleteVAO(), this;
	    }
	    updateData(e, t) {
	        const n = this.data[e];
	        if (!n) return this;
	        let r;
	        this._incrVersion(), this.data[e] = t, n.buffer && n.buffer.destroy && (r = n);
	        const i = this.getVertexCount();
	        e === this.desc.positionAttribute && this.updateBoundingBox();
	        const o = this.getVertexCount();
	        return r && (o <= i ? r.buffer.subdata(t) : r.buffer(t), this.data[e] = r), this._prepareData(), 
	        this.desc.positionAttribute === e && (this._posDirty = !0), delete this._reglData, 
	        this;
	    }
	    updateSubData(e, t, n) {
	        const r = this.data[e];
	        if (!r) return this;
	        let i;
	        if (this._incrVersion(), r.buffer && r.buffer.destroy && (i = r), e === this.desc.positionAttribute && this._updateSubBoundingBox(t), 
	        i) {
	            const e = W$1[i.buffer._buffer.dtype];
	            if (t.BYTES_PER_ELEMENT !== e) {
	                t = new (function(e, t) {
	                    if (e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Uint8ClampedArray) return 1 === t ? Uint8Array : 2 === t ? Uint16Array : Uint32Array;
	                    if (e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array) return 1 === t ? Int8Array : 2 === t ? Int16Array : Int32Array;
	                    if (e instanceof Float32Array || e instanceof Float64Array) return 4 === t ? Float32Array : Float64Array;
	                }(t, e))(t);
	            }
	            i.buffer.subdata(t, n * e);
	        } else {
	            const r = this.data[e].data ? this.data[e].data : this.data[e];
	            for (let e = 0; e < t.length; e++) r[n + e] = t[e];
	        }
	        return this._prepareData(), this.desc.positionAttribute === e && (this._posDirty = !0), 
	        delete this._reglData, this;
	    }
	    getPrimitive() {
	        return this.desc.primitive;
	    }
	    getElements() {
	        return this.elements;
	    }
	    setElements(e, t) {
	        if (!e) throw new Error("elements data is invalid");
	        this._incrVersion();
	        const n = this.elements;
	        return this.count = void 0 === t ? Z$1(e) : t, this.elements = n.destroy ? n(e) : e, 
	        this._elementsUpdated = !0, this;
	    }
	    setDrawCount(e) {
	        return this._incrVersion(), this.count1 = e, this;
	    }
	    getDrawCount() {
	        return this.count1 || this.count;
	    }
	    setDrawOffset(e) {
	        return this._incrVersion(), this.offset = e, this;
	    }
	    getDrawOffset() {
	        return this.offset || 0;
	    }
	    dispose() {
	        this._deleteVAO(), this._forEachBuffer(e => {
	            if (!e[D$1]) {
	                let t = e[Y$1];
	                t && t--, t <= 0 ? (e[D$1] = !0, e.destroy()) : e[Y$1] = t;
	            }
	        }), this.data = {}, this._buffers = {}, delete this._reglData, delete this._attributes, 
	        this.count = 0, this.elements = [], delete this._tempPosArray, this._disposed = !0;
	    }
	    isDisposed() {
	        return !!this._disposed;
	    }
	    updateBoundingBox() {
	        let e = this.boundingBox;
	        e || (e = this.boundingBox = new U$1);
	        let t, r, i = this.data[this.desc.positionAttribute];
	        if (b$1(i) || (i.data ? i = i.data : w$1(i) ? i = this._getAttributeData(this.desc.positionAttribute) : i.array && (t = i.min, 
	        r = i.max, i = i.array)), i && i.length) {
	            const o = e.min, a = e.max;
	            if (t && r) set$4(o, ...t), set$4(a, ...r); else {
	                set$4(o, i[0], i[1], i[2]), set$4(a, i[0], i[1], i[2]);
	                for (let e = 3; e < i.length; ) {
	                    const t = i[e++], n = i[e++], r = i[e++];
	                    t < o[0] && (o[0] = t), n < o[1] && (o[1] = n), r < o[2] && (o[2] = r), t > a[0] && (a[0] = t), 
	                    n > a[1] && (a[1] = n), r > a[2] && (a[2] = r);
	                }
	            }
	            e.updateVertex(), e.dirty();
	        }
	    }
	    _updateSubBoundingBox(e) {
	        const t = this.boundingBox, n = t.min, r = t.max;
	        for (let t = 0; t < e.length; ) {
	            const i = e[t++], o = e[t++], a = e[t++];
	            i < n[0] && (n[0] = i), o < n[1] && (n[1] = o), a < n[2] && (n[2] = a), i > r[0] && (r[0] = i), 
	            o > r[1] && (r[1] = o), a > r[2] && (r[2] = a);
	        }
	        t.updateVertex(), t.dirty();
	    }
	    _getAttributeData(t) {
	        const n = this.data[t], r = n.buffer;
	        if (w$1(n)) {
	            const i = this._buffers[r] ? this._buffers[r].data : n.array, {count: o, size: a, stride: s, offset: c, componentType: l} = n, f = k$2.getTypedArrayCtor(l);
	            if ((0 === s || s === a * f.BYTES_PER_ELEMENT) && c % f.BYTES_PER_ELEMENT == 0) return new f(i, c, o * a);
	            if (t === this.desc.positionAttribute) return !this._tempPosArray || this._tempPosArray && this._tempPosArray.length < a * o ? (this._tempPosArray = new f(a * o), 
	            k$2.readInterleavedArray(this._tempPosArray, i, o, a, s, c, l)) : this._posDirty ? (this._posDirty = !1, 
	            k$2.readInterleavedArray(this._tempPosArray, i, o, a, s, c, l)) : this._tempPosArray;
	            {
	                const t = new f(a * o);
	                return k$2.readInterleavedArray(t, i, o, a, s, c, l);
	            }
	        }
	        return n;
	    }
	    createTangent(e = "aTangent") {
	        this._incrVersion();
	        const {normalAttribute: t, positionAttribute: i, uv0Attribute: o} = this.desc, a = this._getAttributeData(t), l = this._getAttributeData(i), f = buildTangents(l, a, this.data[o], this.elements), u = this.data[e] = new Float32Array(f.length), h = [], d = [], m = [];
	        for (let e = 0; e < f.length; e += 4) {
	            const t = e / 4 * 3;
	            set$4(d, a[t], a[t + 1], a[t + 2]), set$3(h, f[e], f[e + 1], f[e + 2], f[e + 3]), 
	            packTangentFrame(m, d, h), copy$3(u.subarray(e, e + 4), m);
	        }
	        delete this._reglData;
	    }
	    createNormal(e = "aNormal") {
	        this._incrVersion();
	        const t = this._getAttributeData(this.desc.positionAttribute);
	        this.data[e] = buildNormals(t.array || t, this.elements), delete this._reglData;
	    }
	    createBarycentric(e = "aBarycentric") {
	        if ("triangles" !== this.desc.primitive) throw new Error("Primitive must be triangles to create bary centric data");
	        this._incrVersion();
	        const t = new Uint8Array(3 * this.getVertexCount());
	        for (let e = 0, n = this.elements.length; e < n; ) for (let n = 0; n < 3; n++) {
	            t[3 * this.elements[e++] + n] = 1;
	        }
	        this.data[e] = t, delete this._reglData;
	    }
	    buildUniqueVertex() {
	        this._incrVersion();
	        const e = this.data, t = this.elements;
	        if (!b$1(t)) throw new Error("elements must be array to build unique vertex.");
	        const n = Object.keys(e), r = {};
	        let i = e[this.desc.positionAttribute];
	        if (i = i.length ? i : i.array, !b$1(i)) throw new Error(this.desc.positionAttribute + " must be array to build unique vertex.");
	        const o = this.getVertexCount(), a = t.length;
	        for (let t = 0; t < n.length; t++) {
	            const i = n[t], s = b$1(e[i]) ? e[i] : e[i].array, c = s.length / o;
	            if (!b$1(s)) throw new Error(i + " must be array to build unique vertex.");
	            r[i] = s, r[i].size = c, e[i] = new s.constructor(a * c);
	        }
	        let s = 0;
	        for (let i = 0; i < a; i++) {
	            const o = t[i];
	            for (let t = 0; t < n.length; t++) {
	                const i = n[t], a = e[i], c = r[i].size;
	                for (let e = 0; e < c; e++) a[s * c + e] = r[i][o * c + e];
	            }
	            t[i] = s++;
	        }
	        delete this._reglData;
	    }
	    getMemorySize() {
	        let e = 0;
	        for (const t in this.data) A$2(this.data, t) && (e += S$1(this.data[t]));
	        if (this.elements) {
	            const t = this.elements;
	            t.destroy ? e += t._elements.buffer.byteLength : t.BYTES_PER_ELEMENT ? e += t.length * t.BYTES_PER_ELEMENT : t.length && (e += 4 * t.length);
	        }
	        return e;
	    }
	    _deleteVAO() {
	        for (const e in this._vao) this._vao[e].vao.destroy();
	        this._vao = {};
	    }
	    _forEachBuffer(e) {
	        this.elements && this.elements.destroy && e(this.elements);
	        for (const t in this.data) A$2(this.data, t) && this.data[t] && this.data[t].buffer && this.data[t].buffer.destroy && e(this.data[t].buffer);
	        for (const t in this._buffers) A$2(this._buffers, t) && this._buffers[t] && this._buffers[t].buffer && this._buffers[t].buffer.destroy && e(this._buffers[t].buffer);
	    }
	    getElementsType(e) {
	        return e instanceof Uint8Array ? "uint8" : e instanceof Uint16Array ? "uint16" : e instanceof Uint32Array ? "uint32" : void 0;
	    }
	    _incrVersion() {
	        this._version++;
	    }
	}

	function Z$1(e) {
	    if (g$1(e)) return e;
	    if (void 0 !== e.count) return e.count;
	    if (void 0 !== e.length) return e.length;
	    if (e.data) return e.data.length;
	    throw new Error("invalid elements length");
	}

	var Q$1 = I$1(class {
	    constructor(e = {}, t) {
	        this._version = 0, this.uniforms = _$2({}, t || {}, e);
	        for (const t in e) {
	            const n = Object.getOwnPropertyDescriptor(e, t).get;
	            n && Object.defineProperty(this.uniforms, t, {
	                get: n
	            });
	        }
	        this._reglUniforms = {}, this.refCount = 0, this._bindedOnTextureComplete = this._onTextureComplete.bind(this), 
	        this._genUniformKeys(), this._checkTextures();
	    }
	    set version(e) {
	        throw new Error("Material.version is read only.");
	    }
	    get version() {
	        return this._version;
	    }
	    isReady() {
	        return this._loadingCount <= 0;
	    }
	    set(e, t) {
	        const n = u(this.uniforms[e]) && !u(t) || !u(this.uniforms[e]) && u(t);
	        return this.uniforms[e] && this.isTexture(e) && this.uniforms[e].dispose(), u(t) ? u(this.uniforms[e]) || delete this.uniforms[e] : this.uniforms[e] = t, 
	        this._dirtyUniforms = !0, this.isTexture(e) && this._checkTextures(), n && (this._genUniformKeys(), 
	        this._incrVersion()), this;
	    }
	    get(e) {
	        return this.uniforms[e];
	    }
	    isDirty() {
	        return this._uniformVer !== this.version;
	    }
	    appendDefines(e) {
	        const t = this.uniforms;
	        return t.jointTexture && (e.HAS_SKIN = 1), t.morphWeights1 && (e.HAS_MORPH = 1), 
	        e;
	    }
	    hasSkinAnimation() {
	        return this.uniforms.jointTexture && this.uniforms.skinAnimation;
	    }
	    getUniforms(e) {
	        if (this._reglUniforms && !this.isDirty()) return this._reglUniforms;
	        const t = this.uniforms, n = {};
	        for (const r in t) this.isTexture(r) ? Object.defineProperty(n, r, {
	            enumerable: !0,
	            configurable: !0,
	            get: function() {
	                return t[r].getREGLTexture(e);
	            }
	        }) : Object.defineProperty(n, r, {
	            enumerable: !0,
	            configurable: !0,
	            get: function() {
	                return t[r];
	            }
	        });
	        return this._reglUniforms = n, this._uniformVer = this.version, n;
	    }
	    isTexture(e) {
	        return this.uniforms[e] instanceof N$1;
	    }
	    dispose() {
	        for (const e in this.uniforms) {
	            const t = this.uniforms[e];
	            t && (t.dispose ? t.dispose() : t.destroy && !t[D$1] && (t.destroy(), t[D$1] = !0));
	        }
	        delete this.uniforms, delete this._reglUniforms, this._disposed = !0;
	    }
	    isDisposed() {
	        return !!this._disposed;
	    }
	    _checkTextures() {
	        this._loadingCount = 0;
	        for (const e in this.uniforms) if (this.isTexture(e)) {
	            const t = this.uniforms[e];
	            t.isReady() || (this._loadingCount++, t.on("complete", this._bindedOnTextureComplete));
	        }
	    }
	    _onTextureComplete() {
	        this._loadingCount--, this._incrVersion(), this._loadingCount <= 0 && (this._disposed || this.fire("complete"));
	    }
	    getUniformKeys() {
	        return this._uniformKeys;
	    }
	    _genUniformKeys() {
	        const e = [];
	        for (const t in this.uniforms) A$2(this.uniforms, t) && !u(this.uniforms[t]) && e.push(t);
	        this._uniformKeys = e.join();
	    }
	    _incrVersion() {
	        this._version++;
	    }
	    getMemorySize() {
	        const e = this.uniforms;
	        let t = 0;
	        for (const n in e) this.isTexture(n) ? t += e[n].getMemorySize() : this.uniforms[n].destroy && (t += M$1(this.uniforms[n]));
	        return t;
	    }
	});

	const $$1 = {
	    time: 0,
	    seeThrough: !0,
	    thickness: .03,
	    fill: [ 1, .5137254902, .98, 1 ],
	    stroke: [ .7019607843, .9333333333, .2274509804, 1 ],
	    dashEnabled: !1,
	    dashAnimate: !1,
	    dashRepeats: 1,
	    dashLength: .8,
	    dashOverlap: !0,
	    insideAltColor: !1,
	    squeeze: !1,
	    squeezeMin: .5,
	    squeezeMax: 1,
	    dualStroke: !1,
	    secondThickness: .05,
	    opacity: 1,
	    noiseEnable: !1
	};

	class ee extends Q$1 {
	    constructor(e) {
	        super(e, $$1);
	    }
	}

	const te = {
	    baseColorFactor: [ 1, 1, 1, 1 ],
	    materialShininess: 32,
	    ambientStrength: 1,
	    specularStrength: 32,
	    opacity: 1,
	    extrusionOpacity: 0,
	    extrusionOpacityRange: [ 0, 1.8 ],
	    baseColorTexture: null,
	    normalTexture: null,
	    emissiveTexture: null,
	    occlusionTexture: null,
	    uvScale: [ 1, 1 ],
	    uvOffset: [ 0, 0 ]
	};

	class ne extends Q$1 {
	    constructor(e) {
	        super(e, te);
	    }
	    static convertFrom(e) {
	        const t = {};
	        for (const n in te) t[n] = e.get(n);
	        return new ne(t);
	    }
	    appendDefines(e, t) {
	        super.appendDefines(e, t);
	        const n = this.uniforms;
	        return n.extrusionOpacity && (e.HAS_EXTRUSION_OPACITY = 1), t.data[t.desc.uv0Attribute] ? (n.baseColorTexture && (e.HAS_BASECOLOR_MAP = 1), 
	        n.occlusionTexture && (e.HAS_AO_MAP = 1), n.emissiveTexture && (e.HAS_EMISSIVE_MAP = 1), 
	        n.normalTexture && (e.HAS_NORMAL_MAP = 1), (e.HAS_BASECOLOR_MAP || e.HAS_AO_MAP || e.HAS_EMISSIVE_MAP || e.HAS_NORMAL_MAP) && (e.HAS_MAP = 1), 
	        e) : e;
	    }
	}

	const re = {
	    toons: 4,
	    specularToons: 2
	};

	class ie extends ne {
	    constructor(e) {
	        super(e, re);
	    }
	}

	const oe = {
	    diffuseFactor: [ 1, 1, 1, 1 ],
	    specularFactor: [ 1, 1, 1 ],
	    glossinessFactor: 1,
	    diffuseTexture: null,
	    specularGlossinessTexture: null,
	    normalTexture: null,
	    emissiveTexture: null,
	    occlusionTexture: null
	}, ae = e => class extends e {
	    constructor(e) {
	        super(e = v$1({}, oe, e || {}));
	    }
	    appendDefines(e, t) {
	        if (super.appendDefines(e, t), e.SHADING_MODEL_SPECULAR_GLOSSINESS = 1, !t.data[t.desc.uv0Attribute]) return e;
	        const n = this.uniforms;
	        return n.diffuseTexture && (e.HAS_DIFFUSE_MAP = 1), n.specularGlossinessTexture && (e.HAS_SPECULARGLOSSINESS_MAP = 1), 
	        (e.HAS_SPECULARGLOSSINESS_MAP || e.HAS_DIFFUSE_MAP) && (e.HAS_MAP = 1), e;
	    }
	};

	class se extends(ae(ne)){}

	const ce = [];

	let le = 0;

	class fe {
	    constructor(e, n, r = {}) {
	        this._version = 0, this._geometry = e, this._material = n, this.transparent = !!r.transparent, 
	        this.bloom = !!r.bloom, this.ssr = !!r.ssr, this.castShadow = u(r.castShadow) || r.castShadow, 
	        this.picking = !!r.picking, this.disableVAO = !!r.disableVAO, this.uniforms = {}, 
	        this._localTransform = identity$2(new Array(16)), this._positionMatrix = identity$2(new Array(16)), 
	        this.properties = {}, this._dirtyUniforms = !0, this._dirtyGeometry = !0, Object.defineProperty(this, "uuid", {
	            value: le++
	        }), le > Number.MAX_VALUE - 10 && (le = 0);
	    }
	    set material(e) {
	        this._material !== e && this.setMaterial(e);
	    }
	    get material() {
	        return this._material;
	    }
	    set version(e) {
	        throw new Error("Mesh.version is read only.");
	    }
	    get version() {
	        return this._version;
	    }
	    get geometry() {
	        return this._geometry;
	    }
	    set geometry(e) {
	        this._geometry !== e && (this._incrVersion(), this._dirtyGeometry = !0), this._geometry = e;
	    }
	    set localTransform(e) {
	        this._prevTMat || (this._prevTMat = []), Array.isArray(e) && !exactEquals$5(this._prevTMat, e) && (this._incrVersion(), 
	        this._prevTMat = copy$5(this._prevTMat, e)), this._localTransform = e;
	    }
	    get localTransform() {
	        return this._localTransform;
	    }
	    set positionMatrix(e) {
	        this._prevPMat || (this._prevPMat = []), Array.isArray(e) && !exactEquals$5(this._prevPMat, e) && (this._incrVersion(), 
	        this._prevPMat = copy$5(this._prevPMat, e)), this._positionMatrix = e;
	    }
	    get positionMatrix() {
	        return this._positionMatrix;
	    }
	    get config() {
	        return this._cfg || (this._cfg = {}), this._cfg.transparent = this.transparent, 
	        this._cfg.castShadow = this.castShadow, this._cfg.bloom = this.bloom, this._cfg.ssr = this.ssr, 
	        this._cfg.picking = this.picking, this._cfg;
	    }
	    get defines() {
	        return this._getDefines();
	    }
	    set defines(e) {
	        this.setDefines(e);
	    }
	    setMaterial(e) {
	        return this._material = e, this._dirtyUniforms = !0, delete this._materialVer, this.dirtyDefines = !0, 
	        this;
	    }
	    setParent(e) {
	        return this.parent = e, this;
	    }
	    setLocalTransform(e) {
	        return this.localTransform = e, this;
	    }
	    setPositionMatrix(e) {
	        this.positionMatrix = e;
	    }
	    setUniform(e, t) {
	        return void 0 === this.uniforms[e] && (this._dirtyUniforms = !0), this.uniforms[e] = t, 
	        this;
	    }
	    getUniform(e) {
	        return this.uniforms[e];
	    }
	    getDefines() {
	        const e = {};
	        return v$1(e, this._getDefines()), this._material && this._geometry && this._material.appendDefines(e, this._geometry), 
	        e;
	    }
	    _getDefines() {
	        this._defines || (this._defines = {});
	        const e = this._geometry, t = e.data[e.desc.positionAttribute], n = e.data[e.desc.uv0Attribute], r = e.data[e.desc.normalAttribute];
	        return t && t.quantization && (this._defines.HAS_DECODE_POSITION = 1), n && n.quantization && (this._defines.HAS_DECODE_TEXCOORD = 1), 
	        r && r.quantization && (this._defines.HAS_DECODE_NORMAL = 1), this._defines;
	    }
	    setDefines(e) {
	        const t = this._bakDefines;
	        return this._defines = e, this.dirtyDefines = !!t != !!e || !function(e, t) {
	            if (!e && !t) return !0;
	            const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertyNames(t);
	            if (n.length !== r.length) return !1;
	            for (let r = 0; r < n.length; r++) if (e[n[r]] !== t[n[r]]) return !1;
	            return !0;
	        }(t, e), this.dirtyDefines && (this._bakDefines = v$1({}, e)), this;
	    }
	    hasSkinAnimation() {
	        return this._material && this._material.hasSkinAnimation();
	    }
	    _getDefinesKey() {
	        return this.dirtyDefines = !1, this._createDefinesKey(this.getDefines());
	    }
	    getCommandKey() {
	        if (!this._commandKey || this.dirtyDefines || this._material && this._materialKeys !== this._material.getUniformKeys()) {
	            let e = this._getDefinesKey();
	            e += "_" + (g$1(this.getElements()) ? "count" : "elements"), e += "_" + +!!this.disableVAO, 
	            this._commandKey = e, this._material && (this._materialKeys = this._material.getUniformKeys());
	        }
	        return this._commandKey;
	    }
	    getUniforms(e) {
	        if (this._dirtyUniforms || this._dirtyGeometry || this._material && this._materialVer !== this._material.version) {
	            if (this._realUniforms = {}, this._getUniformsForDraco(), this._material) {
	                const t = this._material.getUniforms(e);
	                for (const e in t) A$2(t, e) && Object.defineProperty(this._realUniforms, e, {
	                    enumerable: !0,
	                    configurable: !0,
	                    get: function() {
	                        return t[e];
	                    }
	                });
	            }
	            const t = this.uniforms;
	            for (const e in this.uniforms) A$2(this.uniforms, e) && Object.defineProperty(this._realUniforms, e, {
	                enumerable: !0,
	                configurable: !0,
	                get: function() {
	                    return t[e];
	                }
	            });
	            this._dirtyUniforms = !1, this._dirtyGeometry = !1, this._materialVer = this._material && this._material.version;
	        }
	        return this._realUniforms.modelMatrix = d(this._localTransform) ? this._localTransform() : this._localTransform, 
	        this._realUniforms.positionMatrix = d(this._positionMatrix) ? this._positionMatrix() : this._positionMatrix, 
	        this._realUniforms;
	    }
	    _getUniformsForDraco() {
	        const e = this._geometry, t = e.data[e.desc.positionAttribute], n = e.data[e.desc.uv0Attribute], r = e.data[e.desc.normalAttribute];
	        if (t && t.quantization) {
	            const e = t.quantization, n = e.range / (1 << e.quantizationBits);
	            this._defineUniformsProperty(this._realUniforms, "minValues_pos", e.minValues), 
	            this._defineUniformsProperty(this._realUniforms, "gltf_u_dec_position_normConstant", n);
	        }
	        if (n && n.quantization) {
	            const e = n.quantization;
	            this._defineUniformsProperty(this._realUniforms, "minValues_tex", e.minValues);
	            this._defineUniformsProperty(this._realUniforms, "gltf_u_dec_texcoord_0_normConstant", e.range / (1 << e.quantizationBits));
	        }
	        if (r && r.quantization) {
	            this._defineUniformsProperty(this._realUniforms, "gltf_u_dec_normal_rangeConstant", (1 << r.quantization.quantizationBits) - 1);
	        }
	    }
	    _defineUniformsProperty(e, t, n) {
	        h(e[t]) || Object.defineProperty(e, t, {
	            enumerable: !0,
	            configurable: !0,
	            get: function() {
	                return n;
	            }
	        });
	    }
	    getMaterial() {
	        return this._material;
	    }
	    getElements() {
	        return this._geometry.getElements();
	    }
	    _getREGLAttrData(e, t) {
	        return this._geometry.getREGLData(e, t, this.disableVAO);
	    }
	    getREGLProps(e, t) {
	        const n = this.getUniforms(e);
	        return v$1(n, this._getREGLAttrData(e, t)), T$2(e) && !this.disableVAO || (n.elements = this._geometry.getElements()), 
	        n.meshProperties = this.properties, n.meshConfig = this.config, n.count = this._geometry.getDrawCount(), 
	        n.offset = this._geometry.getDrawOffset(), n.primitive = this._geometry.getPrimitive(), 
	        n;
	    }
	    dispose() {
	        return delete this._geometry, delete this._material, this.uniforms = {}, this;
	    }
	    isValid() {
	        return this._geometry && !this._geometry.isDisposed() && (!this._material || !this._material.isDisposed());
	    }
	    getBoundingBox() {
	        return this._bbox || this.updateBoundingBox(), multiply$5(ce, this._localTransform, this._positionMatrix), 
	        exactEquals$5(ce, this._currentTransform) && this._geometry.boundingBox.equals(this._geoBox) || this.updateBoundingBox(), 
	        this._bboxArr;
	    }
	    updateBoundingBox() {
	        const e = this._geometry.boundingBox;
	        this._bbox || (this._bbox = new U$1), this._bboxArr || (this._bboxArr = [ [], [] ]), 
	        this._geoBox || (this._geoBox = new U$1), U$1.copy(this._bbox, e), this._bbox.updateVertex(), 
	        "InstancedMesh" === this.constructor.name ? (this._bbox.transform(this._localTransform, this._positionMatrix), 
	        this._currentTransform = multiply$5(this._currentTransform || [], this._positionMatrix, this._localTransform)) : (this._bbox.transform(this._positionMatrix, this._localTransform), 
	        this._currentTransform = multiply$5(this._currentTransform || [], this._localTransform, this._positionMatrix)), 
	        U$1.copy(this._geoBox, e), copy$4(this._bboxArr[0], this._bbox.min), copy$4(this._bboxArr[1], this._bbox.max);
	    }
	    _createDefinesKey(e) {
	        const t = [];
	        for (const n in e) t.push(n, e[n]);
	        return t.join(",");
	    }
	    _incrVersion() {
	        this._version++;
	    }
	    getMemorySize() {
	        return (this.geometry && this.geometry.getMemorySize() || 0) + (this.material && this.material.getMemorySize() || 0);
	    }
	}

	fe.prototype.getWorldTransform = function() {
	    const e = [];
	    return function() {
	        const n = this.parent;
	        return n ? multiply$5(e, n.getWorldTransform(), this._localTransform) : this._localTransform;
	    };
	}();

	class ue extends fe {
	    constructor(e, t, n, r, i = {}) {
	        super(n, r, i), this._instanceCount = t, this.instancedData = e || {}, this._checkInstancedProp(), 
	        this._vao = {};
	    }
	    get instanceCount() {
	        return this._instanceCount;
	    }
	    set instanceCount(e) {
	        this._incrVersion(), this._instanceCount = e;
	    }
	    getMemorySize() {
	        return super.getMemorySize() + this._getInstanceMemorySize();
	    }
	    _getInstanceMemorySize() {
	        let e = 0;
	        for (const t in this.instancedData) A$2(this.instancedData, t) && (e += S$1(this.instancedData[t]));
	        return e;
	    }
	    _checkInstancedProp() {
	        for (const e in this.instancedData) if (this.geometry.data[e]) throw new Error(`Duplicate attribute ${e} defined in geometry and instanced data`);
	    }
	    _getREGLAttrData(e, t) {
	        const n = this.geometry.getAttrData(t);
	        if (T$2(e)) {
	            const r = t.key;
	            if (!this._vao[r] || this._instanceDataUpdated) {
	                const i = t.map(e => e.name), o = [];
	                for (let e = 0; e < i.length; e++) {
	                    const t = n[i[e]];
	                    o.push(t && t.buffer ? t.buffer : this.instancedData[i[e]]);
	                }
	                const a = {
	                    attributes: o,
	                    primitive: this.geometry.getPrimitive()
	                };
	                this._vao[r] ? this._vao[r].vao(a) : this._vao[r] = {
	                    vao: e.vao(a)
	                }, delete this._instanceDataUpdated;
	            }
	            return this._vao[r];
	        }
	        return n;
	    }
	    getDefines() {
	        const e = super.getDefines();
	        return e.HAS_INSTANCE = 1, e;
	    }
	    getCommandKey(e) {
	        return "i_" + super.getCommandKey(e);
	    }
	    updateInstancedData(e, t) {
	        const n = this.instancedData[e];
	        return n ? (this._incrVersion(), this.instancedData[e] = t, n.buffer && n.buffer.destroy && n.buffer.destroy(), 
	        this._instanceDataUpdated = !0, this) : this;
	    }
	    generateInstancedBuffers(e) {
	        const t = this.instancedData, n = {};
	        for (const r in t) t[r] && (void 0 !== t[r].buffer && t[r].buffer.destroy ? (n[r] = t[r], 
	        n[r].divisor && (n[r].divisor = 1)) : n[r] = t[r].destroy ? {
	            buffer: t[r],
	            divisor: 1
	        } : {
	            buffer: e.buffer({
	                data: t[r],
	                dimension: t[r].length / this._instanceCount
	            }),
	            divisor: 1
	        });
	        return this.instancedData = n, this;
	    }
	    getREGLProps(e, t) {
	        const n = super.getREGLProps(e, t);
	        return T$2(e) || v$1(n, this.instancedData), n.elements = this.geometry.getElements(), 
	        n.instances = this._instanceCount, n;
	    }
	    disposeInstanceData() {
	        const e = this.instancedData;
	        if (e) for (const t in e) e[t] && e[t].destroy && !e[t][D$1] && (e[t][D$1] = 1, e[t].destroy());
	        this.instancedData = {};
	        for (const e in this._vao) this._vao[e].vao.destroy();
	        this._vao = {};
	    }
	    _getBytesPerElement(e) {
	        switch (e) {
	          case 5120:
	          case 5121:
	            return 1;

	          case 5122:
	          case 5123:
	            return 2;

	          case 5124:
	          case 5125:
	          case 5126:
	            return 4;
	        }
	        throw new Error("unsupported data type: " + e);
	    }
	}

	const he = {
	    getArrayBuffer: (e, t) => he.get(e, {
	        responseType: "arraybuffer"
	    }, t),
	    get: function(e, t, n) {
	        const r = he._getClient(n);
	        if (r.open("GET", e, !0), t) {
	            for (const e in t.headers) r.setRequestHeader(e, t.headers[e]);
	            r.withCredentials = "include" === t.credentials, t.responseType && (r.responseType = t.responseType);
	        }
	        return r.send(null), r;
	    },
	    _wrapCallback: function(e, t) {
	        return function() {
	            if (4 === e.readyState) if (200 === e.status) if ("arraybuffer" === e.responseType) {
	                0 === e.response.byteLength ? t(new Error("http status 200 returned without content.")) : t(null, {
	                    data: e.response,
	                    cacheControl: e.getResponseHeader("Cache-Control"),
	                    expires: e.getResponseHeader("Expires"),
	                    contentType: e.getResponseHeader("Content-Type")
	                });
	            } else t(null, e.responseText); else t(new Error(e.statusText + "," + e.status));
	        };
	    },
	    _getClient: function(e) {
	        let t;
	        try {
	            t = new XMLHttpRequest;
	        } catch (e) {
	            try {
	                t = new ActiveXObject("Msxml2.XMLHTTP");
	            } catch (e) {
	                try {
	                    t = new ActiveXObject("Microsoft.XMLHTTP");
	                } catch (e) {}
	            }
	        }
	        return t.onreadystatechange = he._wrapCallback(t, e), t;
	    }
	};

	var de = I$1(class {
	    constructor(e) {
	        this.defaultTexture = e, this.defaultCubeTexture = new Array(6), this.resources = {};
	    }
	    get(e) {
	        return Array.isArray(e) ? this._loadImages(e) : this._loadImage(e);
	    }
	    getArrayBuffer(e) {
	        if (Array.isArray(e)) {
	            const t = e.map(e => this.getArrayBuffer(e));
	            return Promise.all(t);
	        }
	        return new Promise((t, n) => {
	            he.getArrayBuffer(e, (r, i) => {
	                r ? n(r) : t({
	                    url: e,
	                    data: i
	                });
	            });
	        });
	    }
	    disposeRes(e) {
	        return Array.isArray(e) ? e.forEach(e => this._disposeOne(e)) : this._disposeOne(e), 
	        this;
	    }
	    isLoading() {
	        return this._count && this._count > 0;
	    }
	    getDefaultTexture(e) {
	        return Array.isArray(e) ? this._getBlankTextures(e.length) : this.defaultTexture;
	    }
	    _disposeOne(e) {
	        const t = this.resources;
	        t[e] && (t[e].count--, t[e].count <= 0 && delete t[e]);
	    }
	    _loadImage(e) {
	        const t = this.resources;
	        if (t[e]) return Promise.resolve({
	            url: e,
	            data: t[e].image
	        });
	        return new Promise((n, r) => {
	            const i = new Image;
	            i.crossOrigin = "anonymous", i.onload = function() {
	                t[e] = {
	                    image: i,
	                    count: 1
	                }, n({
	                    url: e,
	                    data: i
	                });
	            }, i.onerror = function(e) {
	                r(e);
	            }, i.onabort = function() {
	                r(`image(${e}) loading aborted.`);
	            }, i.src = e;
	        });
	    }
	    _loadImages(e) {
	        const t = e.map(e => this._loadImage(e, !0));
	        return Promise.all(t);
	    }
	    _getBlankTextures(e) {
	        const t = new Array(e);
	        for (let e = 0; e < 6; e++) t.push(this.defaultTexture);
	        return t;
	    }
	});

	const me = [], ve = [];

	let _e = 0;

	class ge {
	    constructor(e) {
	        this._id = _e++, this.sortedMeshes = {}, this.setMeshes(e), this._compareBinded = this._compare.bind(this), 
	        this.dirty();
	    }
	    setMeshes(e) {
	        if (this.clear(), !e || Array.isArray(e) && !e.length || e === this.meshes) return this;
	        e = Array.isArray(e) ? e : [ e ], this.meshes = [];
	        for (let t = 0; t < e.length; t++) {
	            const n = e[t];
	            n && (n._scenes = n._scenes || {}, n._scenes[this._id] = 1, this.meshes.push(n));
	        }
	        return this.dirty(), this;
	    }
	    addMesh(e) {
	        return !e || Array.isArray(e) && !e.length || (Array.isArray(e) ? e.forEach(e => {
	            e._scenes = e._scenes || {}, e._scenes[this._id] || (e._scenes[this._id] = 1, this.meshes.push(e), 
	            this.dirty());
	        }) : (e._scenes = e._scenes || {}, e._scenes[this._id] || (e._scenes[this._id] = 1, 
	        this.meshes.push(e), this.dirty()))), this;
	    }
	    removeMesh(e) {
	        if (!e || Array.isArray(e) && !e.length) return this;
	        if (Array.isArray(e)) {
	            let t = !1;
	            for (let n = 0; n < e.length; n++) e[n]._scenes && e[n]._scenes[this._id] && (t = !0, 
	            this.dirty(), delete e[n]._scenes[this._id]);
	            t && (this.meshes = this.meshes.filter(t => e.indexOf(t) < 0));
	        } else {
	            if (!e._scenes || !e._scenes[this._id]) return this;
	            const t = this.meshes.indexOf(e);
	            t >= 0 && this.meshes.splice(t, 1), delete e._scenes[this._id], this.dirty();
	        }
	        return this;
	    }
	    getMeshes() {
	        return this.meshes;
	    }
	    clear() {
	        if (this.meshes) for (let e = 0; e < this.meshes.length; e++) delete this.meshes[e]._scenes[this._id];
	        return this.meshes = [], this.sortedMeshes.opaques = [], this.sortedMeshes.transparents = [], 
	        this;
	    }
	    dirty() {
	        return this._dirty = !0, this;
	    }
	    sortMeshes(e) {
	        const t = this.meshes;
	        this.sortFunction && t.sort(this.sortFunction);
	        let n = this.sortedMeshes.transparents;
	        if (this._dirty) {
	            const e = this.sortedMeshes.opaques = [];
	            n = this.sortedMeshes.transparents = [];
	            for (let r = 0, i = t.length; r < i; r++) t[r].transparent ? n.push(t[r]) : e.push(t[r]);
	        }
	        e && n.length > 1 && (this._cameraPosition = e, n.sort(this._compareBinded), delete this._cameraPosition), 
	        this._dirty = !1;
	    }
	    getSortedMeshes() {
	        return this._dirty && this.sortMeshes(), this.sortedMeshes;
	    }
	    _compare(e, t) {
	        return transformMat4$2(me, e.geometry.boundingBox.getCenter(), e.localTransform), 
	        transformMat4$2(ve, t.geometry.boundingBox.getCenter(), t.localTransform), dist$2(ve, this._cameraPosition) - dist$2(me, this._cameraPosition);
	    }
	}

	var pe = String.fromCharCode;

	function be(e, t, n, r) {
	    if (e[3] > 0) {
	        var i = Math.pow(2, e[3] - 128 - 8 + r);
	        t[n + 0] = e[0] * i, t[n + 1] = e[1] * i, t[n + 2] = e[2] * i;
	    } else t[n + 0] = 0, t[n + 1] = 0, t[n + 2] = 0;
	    return t[n + 3] = 1, t;
	}

	function xe(e, t, n) {
	    let r = e[t] / n, i = e[t + 1] / n, o = e[t + 2] / n, a = y$1(Math.max(Math.max(r, i), Math.max(o, 1e-6)), 0, 1);
	    a = Math.ceil(255 * a) / 255, e[t] = Math.min(255, r / a * 255), e[t + 1] = Math.min(255, i / a * 255), 
	    e[t + 2] = Math.min(255, o / a * 255), e[t + 3] = Math.min(255, 255 * a);
	}

	function ye(e, t, n, r) {
	    for (var i, o, a = 0, s = 0, c = r; c > 0; ) if (e[s][0] = t[n++], e[s][1] = t[n++], 
	    e[s][2] = t[n++], e[s][3] = t[n++], 1 === e[s][0] && 1 === e[s][1] && 1 === e[s][2]) {
	        for (var l = e[s][3] << a >>> 0; l > 0; l--) (o = e[s])[0] = (i = e[s - 1])[0], 
	        o[1] = i[1], o[2] = i[2], o[3] = i[3], s++, c--;
	        a += 8;
	    } else s++, c--, a = 0;
	    return n;
	}

	function Te(e, t, n, r) {
	    if (r < 8 | r > 32767) return ye(e, t, n, r);
	    var i = t[n++];
	    if (2 !== i) return ye(e, t, n - 1, r);
	    if (e[0][1] = t[n++], e[0][2] = t[n++], i = t[n++], (e[0][2] << 8 >>> 0 | i) >>> 0 !== r) return null;
	    for (let i = 0; i < 4; i++) for (let s = 0; s < r; ) {
	        var o = t[n++];
	        if (o > 128) {
	            o = (127 & o) >>> 0;
	            for (var a = t[n++]; o--; ) e[s++][i] = a;
	        } else for (;o--; ) e[s++][i] = t[n++];
	    }
	    return n;
	}

	function Ae(e, t = 0, n = 9) {
	    var r = new Uint8Array(e), i = r.length;
	    if ("#?" !== function(e, t, n) {
	        for (var r = "", i = t; i < n; i++) r += pe(e[i]);
	        return r;
	    }(r, 0, 2)) return null;
	    for (var o = 2; o < i && ("\n" !== pe(r[o]) || "\n" !== pe(r[o + 1])); o++) ;
	    if (o >= i) return null;
	    o += 2;
	    for (var a = ""; o < i; o++) {
	        var s = pe(r[o]);
	        if ("\n" === s) break;
	        a += s;
	    }
	    var c = a.split(" "), l = parseInt(c[1]), f = parseInt(c[3]);
	    if (!f || !l) return null;
	    for (var u = o + 1, h = [], d = 0; d < f; d++) {
	        h[d] = [];
	        for (var m = 0; m < 4; m++) h[d][m] = 0;
	    }
	    var v = 0, _ = new Array(f * l * 4), g = 0;
	    for (let e = 0; e < l; e++) {
	        if (!(u = Te(h, r, u, f))) return null;
	        for (let e = 0; e < f; e++) be(h[e], _, g, t), v = Math.max(v, _[g], _[g + 1], _[g + 2], _[g + 3]), 
	        g += 4;
	    }
	    v = Math.min(v, n), g = 0;
	    for (let e = 0; e < l; e++) for (let e = 0; e < f; e++) xe(_, g, v), g += 4;
	    return {
	        width: f,
	        height: l,
	        pixels: _,
	        rgbmRange: v
	    };
	}

	const Se = [ "points", "lines", "line strip", "line loop", "triangles", "triangle strip", "triangle fan" ];

	function Me(e) {
	    return Se[e];
	}

	const Ee = {
	    5121: "uint8",
	    5123: "uint16",
	    5125: "uint32",
	    5126: "float",
	    36193: "half float"
	};

	function Ce(e) {
	    return Ee[e];
	}

	const Oe = {
	    6406: "alpha",
	    6407: "rgb",
	    6408: "rgba",
	    6409: "luminance",
	    6410: "luminance alpha",
	    33776: "rgb s3tc dxt1",
	    33778: "rgba s3tc dxt3",
	    33779: "rgba s3tc dxt5"
	};

	function we(e) {
	    return Oe[e];
	}

	const Pe = {
	    9729: "linear",
	    9728: "nearest"
	};

	function Ie(e) {
	    return Pe[e];
	}

	const De = {
	    9729: "linear",
	    9728: "nearest",
	    9984: "nearest mipmap nearest",
	    9985: "linear mipmap nearest",
	    9986: "nearest mipmap linear",
	    9987: "linear mipmap linear"
	};

	function Fe(e) {
	    return De[e];
	}

	const Ne = {
	    10497: "repeat",
	    33071: "clamp",
	    33648: "mirror"
	};

	function Re(e) {
	    return Ne[e];
	}

	const Be = "__reshader_webgl_buffer", Le = "__reshader_webgl_tex";

	function He(e, t, n) {
	    let r;
	    if (b$1(t) ? t.buffer && void 0 !== t.byteOffset && (r = t) : t.array && t.array.buffer && void 0 !== t.array.byteOffset && (r = t.array), 
	    !r) return null;
	    const i = r.buffer, o = r.byteOffset;
	    i[Be] || (i[Be] = {});
	    let a = i[Be][o];
	    if (!a) {
	        const t = {};
	        n && v$1(t, n), t.data = r, a = e.buffer(t), i[Be][o] = a;
	    }
	    return a;
	}

	function ze(e, t) {
	    const n = t.data;
	    if (!n || !n.buffer) return e.texture(t);
	    const r = n.buffer, i = n.byteOffset;
	    r[Le] || (r[Le] = {});
	    let o = r[Le][i];
	    return o || (o = e.texture(t), r[Le][i] = o), o;
	}

	var ke = Object.freeze({
	    __proto__: null,
	    getPrimitive: Me,
	    getMaterialType: Ce,
	    getMaterialFormat: we,
	    getTextureMagFilter: Ie,
	    getTextureMinFilter: Fe,
	    getTextureWrap: Re,
	    getUniqueREGLBuffer: He,
	    getUniqueTexture: ze
	});

	class je extends N$1 {
	    onLoad({data: e}) {
	        const t = this.config;
	        t && (t.hdr ? (e = Ae(e.data, 0, t.maxRange), this.rgbmRange = e.rgbmRange, t.data = e.pixels) : t.data = e, 
	        t.width = t.width || e.width, t.height = t.height || e.height, this._updateREGL());
	    }
	    createREGLTexture(e) {
	        if (b$1(this.config.data)) {
	            const t = ze(e, this.config);
	            return t._reshader_refCount || (t._reshader_refCount = 0), t._reshader_refCount++, 
	            t;
	        }
	        return e.texture(this.config);
	    }
	}

	class Ve extends N$1 {
	    onLoad(e) {
	        const t = this.config;
	        if (!t) return;
	        const n = this._createFaces(e);
	        t.faces = n.map(e => e.data), this._updateREGL();
	    }
	    createREGLTexture(e) {
	        return e.cube(this.config);
	    }
	    _createFaces() {
	        return [];
	    }
	}

	class Ge extends J$1 {
	    constructor(e) {
	        super({
	            aPosition: new (x$1(e = e || 0))([ -1, -1, e, 1, -1, e, -1, 1, e, 1, 1, e ]),
	            aNormal: new Int8Array([ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1 ])
	        }, new Uint16Array([ 0, 1, 3, 3, 2, 0 ]));
	    }
	}

	const Ue = {
	    vsm_shadow_vert: "\nuniform mat4 shadow_lightProjViewModelMatrix;\nvarying vec4 shadow_vLightSpacePos;\nvoid shadow_computeShadowPars(vec4 position) {\n    shadow_vLightSpacePos = shadow_lightProjViewModelMatrix * position;\n}",
	    vsm_shadow_frag: "\nuniform sampler2D shadow_shadowMap;\nuniform float shadow_opacity;\nuniform vec3 shadow_color;\n#if defined(USE_ESM)\n    uniform float esm_shadow_threshold;\n#endif\nvarying vec4 shadow_vLightSpacePos;\n#ifdef PACK_FLOAT\n    #include <common_pack_float>\n#endif\n#if defined(USE_ESM)\nfloat esm(vec3 projCoords, vec4 shadowTexel) {\n    float compare = projCoords.z;\n    float c = 120.0;\n    #ifdef PACK_FLOAT\n        float depth = common_decodeDepth(shadowTexel);\n        if (depth >= 1.0 - 1E-6 || compare <= depth) {\n            return 1.0;\n        }\n    #else\n        float depth = shadowTexel.r;\n    #endif\n    depth = exp(-c * min(compare - depth, 0.05));\n    return clamp(depth, esm_shadow_threshold, 1.0);\n}\n#endif\n#if defined(USE_VSM)\nfloat vsm_shadow_chebyshevUpperBound(vec3 projCoords, vec4 shadowTexel){\n    vec2 moments = shadowTexel.rg;\n    float distance = projCoords.z;\n    if (distance >= 1.0 || distance <= moments.x)\n        return 1.0 ;\n    float variance = moments.y - (moments.x * moments.x);\n    variance = max(variance, 0.00002);\n    float d = distance - moments.x;\n    float p_max = variance / (variance + d * d);\n    return p_max;\n}\n#endif\nfloat shadow_computeShadow_coeff(sampler2D shadowMap, vec3 projCoords) {\n    vec2 uv = projCoords.xy;\n    vec4 shadowTexel = texture2D(shadowMap, uv);\n    #if defined(USE_ESM)\n        float esm_coeff = esm(projCoords, shadowTexel);\n        float coeff = esm_coeff * esm_coeff;\n    #endif\n    #if defined(USE_VSM)\n        float vsm_coeff = vsm_shadow_chebyshevUpperBound(projCoords, shadowTexel);\n        float coeff = vsm_coeff;\n    #endif\n    return 1.0 - (1.0 - coeff) * shadow_opacity;\n}\nfloat shadow_computeShadow() {\n    vec3 projCoords = shadow_vLightSpacePos.xyz / shadow_vLightSpacePos.w;\n    projCoords = projCoords * 0.5 + 0.5;\n    if(projCoords.z >= 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) return 1.0;\n    return shadow_computeShadow_coeff(shadow_shadowMap, projCoords);\n}\nvec3 shadow_blend(vec3 color, float coeff) {\n    color = color * coeff + shadow_color * shadow_opacity * (1.0 - coeff);\n    return color;\n}",
	    fbo_picking_vert: "\n#ifdef ENABLE_PICKING\n#if HAS_PICKING_ID == 1\nattribute float aPickingId;\n#elif HAS_PICKING_ID == 2\nuniform float uPickingId;\n#endif\nvarying float vPickingId;\nvarying float vFbo_picking_viewZ;\nvarying float vFbo_picking_visible;\n#endif\nvoid fbo_picking_setData(float viewPosZ, bool visible) {\n    #ifdef ENABLE_PICKING\n    #if HAS_PICKING_ID == 1\n       vPickingId = aPickingId;\n    #elif HAS_PICKING_ID == 2\n        vPickingId = uPickingId;\n    #endif\n        vFbo_picking_viewZ = viewPosZ;\n    #endif\n    vFbo_picking_visible = visible ? 1.0 : 0.0;\n}",
	    common_pack_float: "const float COMMON_FLOAT_MAX =  1.70141184e38;\nconst float COMMON_FLOAT_MIN = 1.17549435e-38;\nfloat common_packFloat(vec4 val){\n    vec4 scl = floor(255.0 * val + 0.5);\n    float sgn = (scl.a < 128.0) ? 1.0 : -1.0;\n    float exn = mod(scl.a * 2.0, 256.0) + floor(scl.b / 128.0) - 127.0;\n    float man = 1.0 +\n        (scl.r / 8388608.0) +\n        (scl.g / 32768.0) +\n        mod(scl.b, 128.0) / 128.0;\n    return sgn * man * pow(2.0, exn);\n}\nvec4 common_unpackFloat(highp float v) {\n    highp float av = abs(v);\n    if(av < COMMON_FLOAT_MIN) {\n        return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > COMMON_FLOAT_MAX) {\n        return vec4(127.0, 128.0, 0.0, 0.0) / 255.0;\n    } else if(v < -COMMON_FLOAT_MAX) {\n        return vec4(255.0, 128.0, 0.0, 0.0) / 255.0;\n    }\n    highp vec4 c = vec4(0,0,0,0);\n    highp float e = floor(log2(av));\n    highp float m = av * pow(2.0, -e) - 1.0;\n    c[1] = floor(128.0 * m);\n    m -= c[1] / 128.0;\n    c[2] = floor(32768.0 * m);\n    m -= c[2] / 32768.0;\n    c[3] = floor(8388608.0 * m);\n    highp float ebias = e + 127.0;\n    c[0] = floor(ebias / 2.0);\n    ebias -= c[0] * 2.0;\n    c[1] += floor(ebias) * 128.0;\n    c[0] += 128.0 * step(0.0, -v);\n    return c / 255.0;\n}\nvec4 common_encodeDepth(const in float depth) {\n    float alpha = 1.0;\n    vec4 pack = vec4(0.0);\n    pack.a = alpha;\n    const vec3 code = vec3(1.0, 255.0, 65025.0);\n    pack.rgb = vec3(code * depth);\n    pack.gb = fract(pack.gb);\n    pack.rg -= pack.gb * (1.0 / 256.0);\n    pack.b -= mod(pack.b, 4.0 / 255.0);\n    return pack;\n}\nfloat common_decodeDepth(const in vec4 pack) {\n    return pack.r + pack.g / 255.0;\n}",
	    invert_matrix: "mat4 invert_matrix(mat4 matrix) {\n    #if __VERSION__ == 300\n        return inverse(matrix);\n    #else\n        vec4 vector1 = matrix[0], vector2 = matrix[1], vector3 = matrix[2], vector4 = matrix[3];\n        float a00 = vector1.x, a01 = vector1.y, a02 = vector1.z, a03 = vector1.w;\n        float a10 = vector2.x, a11 = vector2.y, a12 = vector2.z, a13 = vector2.w;\n        float a20 = vector3.x, a21 = vector3.y, a22 = vector3.z, a23 = vector3.w;\n        float a30 = vector4.x, a31 = vector4.y, a32 = vector4.z, a33 = vector4.w;\n        float b00 = a00 * a11 - a01 * a10;\n        float b01 = a00 * a12 - a02 * a10;\n        float b02 = a00 * a13 - a03 * a10;\n        float b03 = a01 * a12 - a02 * a11;\n        float b04 = a01 * a13 - a03 * a11;\n        float b05 = a02 * a13 - a03 * a12;\n        float b06 = a20 * a31 - a21 * a30;\n        float b07 = a20 * a32 - a22 * a30;\n        float b08 = a20 * a33 - a23 * a30;\n        float b09 = a21 * a32 - a22 * a31;\n        float b10 = a21 * a33 - a23 * a31;\n        float b11 = a22 * a33 - a23 * a32;\n        float det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\n        det = 1.0 / det;\n        mat4 m = mat4(\n            (a11 * b11 - a12 * b10 + a13 * b09) * det,\n            (a02 * b10 - a01 * b11 - a03 * b09) * det,\n            (a31 * b05 - a32 * b04 + a33 * b03) * det,\n            (a22 * b04 - a21 * b05 - a23 * b03) * det,\n            (a12 * b08 - a10 * b11 - a13 * b07) * det,\n            (a00 * b11 - a02 * b08 + a03 * b07) * det,\n            (a32 * b02 - a30 * b05 - a33 * b01) * det,\n            (a20 * b05 - a22 * b02 + a23 * b01) * det,\n            (a10 * b10 - a11 * b08 + a13 * b06) * det,\n            (a01 * b08 - a00 * b10 - a03 * b06) * det,\n            (a30 * b04 - a31 * b02 + a33 * b00) * det,\n            (a21 * b02 - a20 * b04 - a23 * b00) * det,\n            (a11 * b07 - a10 * b09 - a12 * b06) * det,\n            (a00 * b09 - a01 * b07 + a02 * b06) * det,\n            (a31 * b01 - a30 * b03 - a32 * b00) * det,\n            (a20 * b03 - a21 * b01 + a22 * b00) * det\n        );\n        return m;\n    #endif\n}\nmat4 transpose_matrix(mat4 matrix) {\n    #if __VERSION__ == 300\n        return transpose(matrix);\n    #else\n        vec4 vector1 = matrix[0], vector2 = matrix[1], vector3 = matrix[2], vector4 = matrix[3];\n        float a01 = vector1.y, a02 = vector1.z, a03 = vector1.w;\n        float a12 = vector2.z, a13 = vector2.w;\n        float a23 = vector3.w;\n        mat4 m = mat4(\n            vector1.x,\n            vector2.x,\n            vector3.x,\n            vector4.x,\n            a01,\n            vector2.y,\n            vector3.y,\n            vector4.y,\n            a02,\n            a12,\n            vector3.z,\n            vector4.z,\n            a03,\n            a13,\n            a23,\n            vector4.w\n        );\n        return m;\n    #endif\n}",
	    get_output: "#include <invert_matrix>\n#include <draco_decode_vert>\n#ifdef HAS_INSTANCE\n    #include <instance_vert>\n    #ifdef HAS_INSTANCE_COLOR\n        varying vec4 vInstanceColor;\n    #endif\n#endif\n#ifdef HAS_SKIN\n    uniform int skinAnimation;\n    #include <skin_vert>\n#endif\n#ifdef HAS_MORPH\n    attribute vec3 POSITION0;\n    attribute vec3 POSITION1;\n    attribute vec3 POSITION2;\n    attribute vec3 POSITION3;\n    attribute vec3 POSITION4;\n    attribute vec3 POSITION5;\n    attribute vec3 POSITION6;\n    attribute vec3 POSITION7;\n    #ifdef HAS_MORPHNORMALS\n        attribute vec3 NORMAL0;\n        attribute vec3 NORMAL1;\n        attribute vec3 NORMAL2;\n        attribute vec3 NORMAL3;\n    #endif\n    uniform vec4 morphWeights1;\n    uniform vec4 morphWeights2;\n#endif\nmat4 getPositionMatrix() {\n    mat4 worldMatrix;\n    #ifdef HAS_INSTANCE\n        #ifdef HAS_INSTANCE_COLOR\n            vInstanceColor = instance_getInstanceColor();\n        #endif\n        mat4 attributeMatrix = instance_getAttributeMatrix();\n        #ifdef HAS_SKIN\n            if (skinAnimation == 1) {\n                worldMatrix = attributeMatrix * positionMatrix * skin_getSkinMatrix();\n            } else {\n                worldMatrix = attributeMatrix * positionMatrix;\n            }\n        #else\n            worldMatrix = attributeMatrix * positionMatrix;\n        #endif\n    #else\n        #ifdef HAS_SKIN\n            if (skinAnimation == 1) {\n                worldMatrix = skin_getSkinMatrix() * positionMatrix;\n            } else {\n                worldMatrix = positionMatrix;\n            }\n        #else\n            worldMatrix = positionMatrix;\n        #endif\n    #endif\n    return worldMatrix;\n}\nvec4 getPosition(vec3 aPosition) {\n    vec3 position = getPositionAsDraco(aPosition);\n    #ifdef HAS_MORPH\n        vec4 POSITION = vec4(position + morphWeights1[0] * POSITION0 + morphWeights1[1] * POSITION1 + morphWeights1[2] * POSITION2 + morphWeights1[3] * POSITION3\n        + morphWeights2[0] * POSITION4 + morphWeights2[1] * POSITION5 + morphWeights2[2] * POSITION6 + morphWeights2[3] * POSITION7\n        , 1.0);\n    #else\n        vec4 POSITION = vec4(position, 1.0);\n    #endif\n    return POSITION;\n}\nvec3 appendMorphNormal(vec3 NORMAL) {\n    #ifdef HAS_MORPHNORMALS\n        vec3 normal = NORMAL + morphWeights1[0] * NORMAL0 + morphWeights1[1] * NORMAL1 + morphWeights1[2] * NORMAL2 + morphWeights1[3] * NORMAL3;\n    #else\n        vec3 normal = NORMAL;\n    #endif\n    return normal;\n}",
	    instance_vert: "attribute vec4 instance_vectorA;\nattribute vec4 instance_vectorB;\nattribute vec4 instance_vectorC;\nmat4 instance_getAttributeMatrix() {\n    mat4 mat =  mat4(\n        instance_vectorA.x, instance_vectorB.x, instance_vectorC.x, 0.0,\n        instance_vectorA.y, instance_vectorB.y, instance_vectorC.y, 0.0,\n        instance_vectorA.z, instance_vectorB.z, instance_vectorC.z, 0.0,\n        instance_vectorA.w, instance_vectorB.w, instance_vectorC.w, 1.0\n    );\n    return mat;\n}\n#ifdef HAS_INSTANCE_COLOR\n    attribute vec4 instance_color;\n    vec4 instance_getInstanceColor() {\n        return instance_color;\n    }\n#endif",
	    skin_vert: "attribute vec4 WEIGHTS_0;\nattribute vec4 JOINTS_0;\nuniform sampler2D jointTexture;\nuniform vec2 jointTextureSize;\nuniform float numJoints;\n#define ROW0_U ((0.5 + 0.0) / 4.)\n#define ROW1_U ((0.5 + 1.0) / 4.)\n#define ROW2_U ((0.5 + 2.0) / 4.)\n#define ROW3_U ((0.5 + 3.0) / 4.)\nmat4 skin_getBoneMatrix(float jointNdx) {\n    float v = (jointNdx + 0.5) / numJoints;\n    return mat4(\n        texture2D(jointTexture, vec2(ROW0_U, v)),\n        texture2D(jointTexture, vec2(ROW1_U, v)),\n        texture2D(jointTexture, vec2(ROW2_U, v)),\n        texture2D(jointTexture, vec2(ROW3_U, v)));\n}\nmat4 skin_getSkinMatrix() {\n        mat4 skinMatrix = skin_getBoneMatrix(JOINTS_0[0]) * WEIGHTS_0[0] +\n                        skin_getBoneMatrix(JOINTS_0[1]) * WEIGHTS_0[1] +\n                        skin_getBoneMatrix(JOINTS_0[2]) * WEIGHTS_0[2] +\n                        skin_getBoneMatrix(JOINTS_0[3]) * WEIGHTS_0[3];\n        return skinMatrix;\n}",
	    heatmap_render_vert: "#ifdef HAS_HEATMAP\nvarying vec2 heatmap_vTexCoord;\nvoid heatmap_compute(mat4 matrix, vec3 position) {\n    vec4 pos = matrix * vec4(position.xy, 0., 1.);\n    heatmap_vTexCoord = (1. + pos.xy / pos.w) / 2.;\n}\n#endif",
	    heatmap_render_frag: "#ifdef HAS_HEATMAP\nuniform sampler2D heatmap_inputTexture;\nuniform sampler2D heatmap_colorRamp;\nuniform float heatmap_heatmapOpacity;\nvarying vec2 heatmap_vTexCoord;\nvec4 heatmap_getColor(vec4 color) {\n    float t = texture2D(heatmap_inputTexture, heatmap_vTexCoord).r;\n    vec4 heatmapColor = texture2D(heatmap_colorRamp, vec2(t, 0.5)) * heatmap_heatmapOpacity;\n    return color * (1.0 - heatmapColor.a) + heatmapColor * heatmapColor.a;\n}\n#endif",
	    line_extrusion_vert: "#ifdef IS_LINE_EXTRUSION\n    #define ALTITUDE_SCALE 32767.0;\n    #define EXTRUDE_SCALE 63.0;\n    attribute vec2 aExtrude;\n    #ifdef HAS_LINE_WIDTH\n        attribute float aLineWidth;\n    #else\n        uniform float lineWidth;\n    #endif\n    #ifdef HAS_LINE_HEIGHT\n        attribute float aLineHeight;\n    #else\n        uniform float lineHeight;\n    #endif\n    uniform float linePixelScale;\n    vec3 getLineExtrudePosition(vec3 position) {\n        #ifdef HAS_LINE_WIDTH\n            float lineWidth = aLineWidth / 2.0;\n        #endif\n        #ifdef HAS_LINE_HEIGHT\n            float lineHeight = aLineHeight / 10.0;\n        #endif\n        float halfwidth = lineWidth / 2.0;\n        float outset = halfwidth;\n        vec2 dist = outset * aExtrude / EXTRUDE_SCALE;\n        position.z *= lineHeight / ALTITUDE_SCALE;\n        return position + vec3(dist, 0.0) * linePixelScale;\n    }\n#endif",
	    gl2_vert: "#if __VERSION__ == 300\n    #define texture2D texture\n    #define varying out\n    #define attribute in\n#endif",
	    gl2_frag: "#if __VERSION__ == 300\n    #define varying in\n    #define gl_FragDepthEXT gl_FragDepth\n    #define texture2D texture\n    #define textureCube texture\n    #define texture2DProj textureProj\n    #define texture2DLodEXT textureLod\n    #define texture2DProjLodEXT textureProjLod\n    #define textureCubeLodEXT textureLod\n    #define texture2DGradEXT textureGrad\n    #define texture2DProjGradEXT textureProjGrad\n    #define textureCubeGradEXT textureGrad\n    #define texture2D texture\n    out vec4 glFragColor;\n#else\n    vec4 glFragColor;\n#endif",
	    hsv_frag: "\nconst mediump vec4 HSV_K0 = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nconst mediump vec4 HSV_K1 = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nconst mediump float HSV_E = 1.0e-10;\nvec3 hsv_rgb2hsv(vec3 c) {\n    vec4 K = HSV_K0;\n    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = HSV_E;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\nvec3 hsv_hsv2rgb(vec3 c) {\n    vec4 K = HSV_K1;\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 hsv_apply(vec4 c, vec3 hsvOffset) {\n    vec3 hsv = hsv_rgb2hsv(c.rgb);\n    hsv += hsv * hsvOffset;\n    hsv = clamp(hsv, 0.0, 1.0);\n    return vec4(hsv_hsv2rgb(hsv), c.a);\n}\nvec3 hsv_apply(vec3 c, vec3 hsvOffset) {\n    vec3 hsv = hsv_rgb2hsv(c.rgb);\n    hsv += hsv * hsvOffset;\n    hsv = clamp(hsv, 0.0, 1.0);\n    return hsv_hsv2rgb(hsv);\n}\nmat4 contrastMatrix(float contrast)\n{\n    float t = (1.0 - contrast) / 2.0;\n    return mat4(\n        contrast, 0., 0., 0.,\n        0., contrast, 0., 0.,\n        0., 0., contrast, 0.,\n        t, t, t, 1\n    );\n}",
	    snow_frag: "#ifdef HAS_SNOW\n    float lerp(float a, float b, float w) {\n        return a + w * (b - a);\n    }\n    vec3 snow(vec4 sceneColor, vec3 normalColor, float height) {\n        float snowIntense = normalColor.b;\n        vec3 fixedC = vec3(1.0, 1.0, 1.0);\n        if (height < 1.0) {\n            float r = lerp(0.5, fixedC.x, snowIntense);\n            float g = lerp(0.5, fixedC.y, snowIntense);\n            float b = lerp(0.5, fixedC.z, snowIntense);\n            return vec3(r, g, b);\n        } else {\n            float r = lerp(sceneColor.r, fixedC.x, snowIntense);\n            float g = lerp(sceneColor.g, fixedC.y, snowIntense);\n            float b = lerp(sceneColor.b, fixedC.z, snowIntense);\n            return vec3(r, g, b);\n        }\n    }\n#endif",
	    draco_decode_vert: "#if defined(HAS_TANGENT)\n    attribute vec4 aTangent;\n#elif defined(HAS_NORMAL)\n    #ifdef HAS_DECODE_NORMAL\n        attribute vec2 aNormal;\n        uniform float gltf_u_dec_normal_rangeConstant;\n    #else\n        attribute vec3 aNormal;\n    #endif\n#endif\n#ifdef HAS_DECODE_POSITION\n    uniform float gltf_u_dec_position_normConstant;\n    uniform vec3 minValues_pos;\n    vec3 decodeDracoPosition(vec3 aPosition) {\n        return minValues_pos + aPosition * gltf_u_dec_position_normConstant;\n    }\n#endif\n#ifdef HAS_DECODE_TEXCOORD\n    uniform vec2 minValues_tex;\n    uniform float gltf_u_dec_texcoord_0_normConstant;\n    vec2 decodeDracoTexcoord(vec2 aTexCoord) {\n        return minValues_tex + aTexCoord * gltf_u_dec_texcoord_0_normConstant;\n    }\n#endif\n#ifdef HAS_DECODE_NORMAL\n    float czm_signNotZero(float value) {\n        return value >= 0.0 ? 1.0 : -1.0;\n    }\n    vec2 czm_signNotZero(vec2 value) {\n        return vec2(czm_signNotZero(value.x), czm_signNotZero(value.y));\n    }\n    vec3 decodeDracoNormal(vec2 encoded, float range)\n    {\n        if (encoded.x == 0.0 && encoded.y == 0.0) {\n            return vec3(0.0, 0.0, 0.0);\n        }\n        encoded = encoded / range * 2.0 - 1.0;\n        vec3 v = vec3(encoded.x, encoded.y, 1.0 - abs(encoded.x) - abs(encoded.y));\n        if (v.z < 0.0) {\n            v.xy = (1.0 - abs(v.yx)) * czm_signNotZero(v.xy);\n        }\n        return normalize(v);\n    }\n    vec3 getNormal(vec2 aNormal) {\n        return decodeDracoNormal(aNormal, gltf_u_dec_normal_rangeConstant).zxy;\n    }\n#endif\nvec3 getPositionAsDraco(vec3 aPosition) {\n    #ifdef HAS_DECODE_POSITION\n        return decodeDracoPosition(aPosition);\n    #else\n        return aPosition;\n    #endif\n}\nvec2 getTexcoord(vec2 aTexCoord) {\n    #ifdef HAS_DECODE_TEXCOORD\n        return decodeDracoTexcoord(aTexCoord);\n    #else\n        return aTexCoord;\n    #endif\n}"
	};

	var Xe = {
	    register(e, t) {
	        if (Ue[e]) throw new Error(`Key of ${e} is already registered in ShaderLib.`);
	        Ue[e] = t;
	    },
	    compile: e => Ke(e)
	};

	const We = /^[ \t]*#include +<([\w\d.]+)>/gm;

	function Ke(e) {
	    return e.replace(We, qe);
	}

	function qe(e, t) {
	    const n = Ue[t];
	    if (!n) throw new Error("Can not resolve #include <" + t + ">");
	    return Ke(n);
	}

	const Ye = "function", Je = "array";

	let Ze = 0;

	class Qe {
	    constructor({vert: e, frag: t, uniforms: n, defines: r, extraCommandProps: i}) {
	        this.vert = e, this.frag = t;
	        const o = Ze++;
	        Object.defineProperty(this, "uid", {
	            enumerable: !0,
	            configurable: !1,
	            get: () => o
	        }), this.shaderDefines = r && v$1({}, r) || {}, n = this.uniforms = (n || []).slice(), 
	        this.contextDesc = {};
	        for (let e = 0, t = n.length; e < t; e++) {
	            const t = n[e];
	            if (f(t)) if (t.indexOf("[") > 0) {
	                const {name: e, len: n} = $e(t);
	                this.contextDesc[e] = {
	                    name: e,
	                    type: "array",
	                    length: n
	                };
	            } else this.contextDesc[t] = null; else if (t.name.indexOf("[") > 0) {
	                const {name: e, len: n} = $e(t.name);
	                this.contextDesc[e] = {
	                    name: e,
	                    type: "array",
	                    length: n,
	                    fn: t.fn
	                };
	            } else this.contextDesc[t.name] = t;
	        }
	        this.extraCommandProps = i && v$1({}, i) || {}, this.commands = {}, this._compileSource();
	    }
	    set shaderDefines(e) {
	        this._shaderDefines = e, this.dkey = Object.keys(this._shaderDefines).join();
	    }
	    get shaderDefines() {
	        return this._shaderDefines || {};
	    }
	    setDefines(e) {
	        this.shaderDefines = e;
	    }
	    setFramebuffer(e) {
	        return this.context.framebuffer = e, this;
	    }
	    appendDescUniforms(e) {
	        const t = e, n = this.contextDesc;
	        for (const r in n) if (n[r]) if ("array" === n[r].type) {
	            const i = r, o = n[r].length;
	            let a = e[r];
	            if (n[r].fn && (a = n[r].fn(null, e)), !a) continue;
	            if (a.length !== o) throw new Error(`${i} uniform's length is not ${o}`);
	            t[i] = t[i] || {};
	            for (let e = 0; e < o; e++) t[i]["" + e] = a[e];
	        } else "function" === n[r].type && (Object.getOwnPropertyDescriptor(t, r) || Object.defineProperty(t, r, {
	            configurable: !1,
	            enumerable: !0,
	            get: function() {
	                return n[r].fn(null, e);
	            }
	        }));
	        return t;
	    }
	    setUniforms(e) {
	        if (e.modelMatrix || e.positionMatrix) throw new Error("modelMatrix or positionMatrix is reserved uniform name for Mesh, please change to another name");
	        return this.contextKeys = e ? Object.keys(e).join() : null, this.context = e, this;
	    }
	    getVersion(e, t) {
	        if ("#version" === t.substring(0, 8)) return "";
	        return 0 === e.limits.version.indexOf("WebGL 2.0") && 300 === this.version ? "#version 300 es\n" : "#version 100\n";
	    }
	    getActiveVars(e, t, n) {
	        const r = e._gl, i = r.createProgram(), o = r.createShader(35633);
	        r.shaderSource(o, t), r.compileShader(o);
	        const a = r.createShader(35632);
	        r.shaderSource(a, n), r.compileShader(a), r.attachShader(i, a), r.attachShader(i, o), 
	        r.linkProgram(i);
	        const s = r.getProgramParameter(i, 35721), c = [];
	        for (let e = 0; e < s; ++e) {
	            const t = r.getActiveAttrib(i, e);
	            t && c.push({
	                name: t.name,
	                type: t.type
	            });
	        }
	        const l = r.getProgramParameter(i, 35718), f = [];
	        for (let e = 0; e < l; ++e) {
	            const t = r.getActiveUniform(i, e);
	            let n = t.name;
	            t.name.indexOf("[") > 0 && (n = n.replace("[0]", "")), f.push(n);
	        }
	        return r.deleteProgram(i), r.deleteShader(o), r.deleteShader(a), {
	            activeUniforms: f,
	            activeAttributes: c
	        };
	    }
	    createREGLCommand(e, t, n, r, i) {
	        const o = T$2(e) && !i, a = v$1({}, this.shaderDefines || {}, t || {}), s = this._insertDefines(this.vert, a), c = this.getVersion(e, s) + s, l = this._insertDefines(this.frag, a), f = this.getVersion(e, l) + l, {activeAttributes: u, activeUniforms: h} = this.getActiveVars(e, c, f), d = {};
	        u.forEach((t, n) => {
	            const r = t.name;
	            d[r] = o ? n : e.prop(r);
	        });
	        const m = {};
	        h.forEach(t => {
	            m[t] = e.prop(t);
	        });
	        const _ = this.contextDesc;
	        for (const t in _) if (_[t] && _[t].type === Ye) m[t] = _[t].fn; else if (_[t] && _[t].type === Je) {
	            const n = _[t].name, r = _[t].length;
	            for (let t = 0; t < r; t++) {
	                const r = `${n}[${t}]`;
	                m[r] = e.prop(r);
	            }
	        } else m[t] = e.prop(t);
	        const p = {
	            vert: c,
	            frag: f,
	            uniforms: m,
	            attributes: d
	        };
	        o && (p.vao = e.prop("vao")), o && !r || !n || g$1(n) || (p.elements = e.prop("elements")), 
	        p.count = e.prop("count"), p.offset = e.prop("offset"), p.primitive = e.prop("primitive"), 
	        p.framebuffer = e.prop("framebuffer"), r && (p.instances = e.prop("instances")), 
	        v$1(p, this.extraCommandProps);
	        const b = e(p);
	        return u.key = u.map(e => e.name).join(), b.activeAttributes = u, b;
	    }
	    dispose() {
	        for (const e in this.commands) {
	            const t = this.commands[e];
	            t && (t.destroy && !t[D$1] && (t[D$1] = !0, t.destroy()));
	        }
	        this.commands = {}, delete this.vert, delete this.frag;
	    }
	    _insertDefines(e, t) {
	        const n = [];
	        for (const e in t) A$2(t, e) && !d(t[e]) && n.push(`#define ${e} ${t[e]}\n`);
	        return n.join("") + e;
	    }
	    _compileSource() {
	        this.vert = Xe.compile(this.vert), this.frag = Xe.compile(this.frag);
	    }
	}

	function $e(e) {
	    const t = e.indexOf("["), n = e.indexOf("]");
	    return {
	        name: e.substring(0, t),
	        len: +e.substring(t + 1, n)
	    };
	}

	class et$1 extends Qe {
	    draw(e, t) {
	        if (!t || !t.length) return 0;
	        const n = [];
	        let r, i = 0;
	        for (let o = 0, a = t.length; o < a; o++) {
	            if (!t[o].isValid()) {
	                o === a - 1 && r && n.length && r(n);
	                continue;
	            }
	            if (!t[o].geometry.getDrawCount() || !this._runFilter(t[o])) {
	                o === a - 1 && r && n.length && r(n);
	                continue;
	            }
	            const s = this.getMeshCommand(e, t[o]);
	            n.length && r !== s && (r(n), n.length = 0);
	            const c = t[o].getREGLProps(e, s.activeAttributes);
	            this._ensureContextDefines(c), c.shaderContext = this.context, this.appendDescUniforms(c), 
	            n.push(c), i++, o < a - 1 ? r = s : o === a - 1 && s(n);
	        }
	        return i;
	    }
	    _ensureContextDefines(e) {
	        if (this.context && (e.contextKeys || (e.contextKeys = {}), e.contextKeys[this.uid] !== this.contextKeys)) {
	            for (const t in this.context) Object.getOwnPropertyDescriptor(e, t) || Object.defineProperty(e, t, {
	                configurable: !1,
	                enumerable: !0,
	                get: function() {
	                    return this.shaderContext && this.shaderContext[t];
	                }
	            });
	            e.contextKeys[this.uid] = this.contextKeys;
	        }
	    }
	    _runFilter(e) {
	        const t = this.filter;
	        if (!t) return !0;
	        if (Array.isArray(t)) {
	            for (let n = 0; n < t.length; n++) if (!t[n](e)) return !1;
	            return !0;
	        }
	        return t(e);
	    }
	    getMeshCommand(e, t) {
	        this._cmdKeys || (this._cmdKeys = {});
	        const n = this.dkey || "default";
	        let r = this._cmdKeys[n];
	        r || (r = this._cmdKeys[n] = {});
	        const i = t.getCommandKey(e);
	        r[i] || (r[i] = n + "_" + t.getCommandKey(e));
	        const o = r[i];
	        let a = this.commands[o];
	        if (!a) {
	            const n = t.getDefines(), r = t.getMaterial();
	            if (r) {
	                r.doubleSided && this.extraCommandProps && this.extraCommandProps.cull && (this.extraCommandProps.cull.enable = !1);
	            }
	            a = this.commands[o] = this.createREGLCommand(e, n, t.getElements(), t instanceof ue, t.disableVAO);
	        }
	        return a;
	    }
	}

	class tt$1 extends et$1 {
	    constructor(e = {}) {
	        let n = e.extraCommandProps || {};
	        const r = [];
	        n = v$1({}, n, {
	            blend: {
	                enable: !0,
	                func: {
	                    src: "src alpha",
	                    dst: "one minus src alpha"
	                },
	                equation: "add"
	            },
	            sample: {
	                alpha: !0
	            }
	        }), super({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nattribute vec3 aBarycentric;\nvarying vec3 vBarycentric;\nuniform mat4 modelMatrix;\nuniform mat4 projViewMatrix;\nuniform mat4 projViewModelMatrix;\nuniform mat4 positionMatrix;\nvarying vec3 vPosition;\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n  vec4 d = getPosition(aPosition);\n  gl_Position = projViewModelMatrix * c * d;\n  vBarycentric = aBarycentric;\n  vPosition = aPosition;\n}",
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec3 vBarycentric;\nuniform float time;\nuniform float thickness;\nuniform float secondThickness;\nuniform float dashRepeats;\nuniform float dashLength;\nuniform bool dashOverlap;\nuniform bool dashEnabled;\nuniform bool dashAnimate;\nuniform bool seeThrough;\nuniform bool insideAltColor;\nuniform bool dualStroke;\nuniform bool squeeze;\nuniform float squeezeMin;\nuniform float squeezeMax;\nuniform vec4 stroke;\nuniform vec4 fill;\nuniform float opacity;\nuniform bool noiseEnable;\nvarying vec3 vPosition;\n#ifdef HAS_INSTANCE\nvarying vec4 vInstanceColor;\n#endif\n#define F4 0.309016994374947451\n#define halfDist 0.5\nvec4 c(vec4 x) {\n  return x - floor(x * (1. / 289.)) * 289.;\n}\nfloat c(float x) {\n  return x - floor(x * (1. / 289.)) * 289.;\n}\nvec4 d(vec4 x) {\n  return c((x * 34. + 1.) * x);\n}\nfloat d(float x) {\n  return c((x * 34. + 1.) * x);\n}\nvec4 e(vec4 r) {\n  return 1.79284291400159 - .85373472095314 * r;\n}\nfloat e(float r) {\n  return 1.79284291400159 - .85373472095314 * r;\n}\nvec4 f(float h, vec4 i) {\n  const vec4 k = vec4(1., 1., 1., -1.);\n  vec4 p, s;\n  p.xyz = floor(fract(vec3(h) * i.xyz) * 7.) * i.z - 1.;\n  p.w = 1.5 - dot(abs(p.xyz), k.xyz);\n  s = vec4(lessThan(p, vec4(.0)));\n  p.xyz = p.xyz + (s.xyz * 2. - 1.) * s.www;\n  return p;\n}\nfloat l(vec4 m) {\n  const vec4 n = vec4(.138196601125011, .276393202250021, .414589803375032, -.447213595499958);\n  vec4 o = floor(m + dot(m, vec4(F4)));\n  vec4 u = m - o + dot(o, n.xxxx);\n  vec4 A;\n  vec3 B = step(u.yzw, u.xxx);\n  vec3 D = step(u.zww, u.yyz);\n  A.x = B.x + B.y + B.z;\n  A.yzw = 1. - B;\n  A.y += D.x + D.y;\n  A.zw += 1. - D.xy;\n  A.z += D.z;\n  A.w += 1. - D.z;\n  vec4 E = clamp(A, .0, 1.);\n  vec4 F = clamp(A - 1., .0, 1.);\n  vec4 G = clamp(A - 2., .0, 1.);\n  vec4 H = u - G + n.xxxx;\n  vec4 I = u - F + n.yyyy;\n  vec4 J = u - E + n.zzzz;\n  vec4 K = u + n.wwww;\n  o = c(o);\n  float L = d(d(d(d(o.w) + o.z) + o.y) + o.x);\n  vec4 M = d(d(d(d(o.w + vec4(G.w, F.w, E.w, 1.)) + o.z + vec4(G.z, F.z, E.z, 1.)) + o.y + vec4(G.y, F.y, E.y, 1.)) + o.x + vec4(G.x, F.x, E.x, 1.));\n  vec4 i = vec4(1. / 294., 1. / 49., 1. / 7., .0);\n  vec4 N = f(L, i);\n  vec4 O = f(M.x, i);\n  vec4 P = f(M.y, i);\n  vec4 Q = f(M.z, i);\n  vec4 R = f(M.w, i);\n  vec4 S = e(vec4(dot(N, N), dot(O, O), dot(P, P), dot(Q, Q)));\n  N *= S.x;\n  O *= S.y;\n  P *= S.z;\n  Q *= S.w;\n  R *= e(dot(R, R));\n  vec3 T = max(.6 - vec3(dot(u, u), dot(H, H), dot(I, I)), .0);\n  vec2 U = max(.6 - vec2(dot(J, J), dot(K, K)), .0);\n  T = T * T;\n  U = U * U;\n  return 49. * (dot(T * T, vec3(dot(N, u), dot(O, H), dot(P, I))) + dot(U * U, vec2(dot(Q, J), dot(R, K))));\n}\nconst float V = 3.14159265359;\nfloat W(float X, float Y) {\n  float Z = fwidth(Y) * halfDist;\n  return smoothstep(X - Z, X + Z, Y);\n}\nvec4 ba(vec3 bb) {\n  float bc = min(min(bb.x, bb.y), bb.z);\n  float bd = .0;\n  if(noiseEnable)\n    bd += l(vec4(vPosition.xyz * 80.0, time * halfDist)) * .12;\n  bc += bd;\n  float be = max(bb.x, bb.y);\n  if(bb.y < bb.x && bb.y < bb.z) {\n    be = 1. - be;\n  }\n  float bf = thickness;\n  if(squeeze) {\n    bf *= mix(squeezeMin, squeezeMax, (1. - sin(be * V)));\n  }\n  if(dashEnabled) {\n    float bg = 1. / dashRepeats * dashLength / 2.;\n    if(!dashOverlap) {\n      bg += 1. / dashRepeats / 2.;\n    }\n    if(dashAnimate) {\n      bg += time * .22;\n    }\n    float bh = fract((be + bg) * dashRepeats);\n    bf *= 1. - W(dashLength, bh);\n  }\n  float bi = 1. - W(bf, bc);\n#ifdef HAS_INSTANCE\nvec4 bj = vInstanceColor;\n#else\nvec4 bj = stroke;\n#endif\nvec4 bk = vec4(.0);\n  if(seeThrough) {\n    bk = vec4(bj.xyz, bi);\n    if(insideAltColor && !gl_FrontFacing) {\n      bk.rgb = fill.xyz;\n    }\n  } else {\n    vec3 bl = mix(fill.xyz, bj.xyz, bi);\n    bk.a = fill.a;\n    if(dualStroke) {\n      float bm = 1. - W(secondThickness, bc);\n      vec3 bn = mix(fill.xyz, stroke.xyz, abs(bm - bi));\n      bk.rgb = bn;\n    } else {\n      bk.rgb = bl;\n    }\n  }\n  return bk;\n}\nvoid main() {\n  glFragColor = ba(vBarycentric);\n  glFragColor *= halfDist + opacity;\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: (e, n) => multiply$5(r, n.projViewMatrix, n.modelMatrix)
	            } ],
	            extraCommandProps: n
	        }), this.version = 300;
	    }
	}

	var nt$1 = "precision mediump float;\n#include <gl2_frag>\nuniform vec4 baseColorFactor;\nuniform float materialShininess;\nuniform float opacity;\nuniform float ambientStrength;\nuniform float specularStrength;\nuniform vec3 light0_viewDirection;\nuniform vec3 ambientColor;\nuniform vec4 light0_diffuse;\nuniform vec3 lightSpecular;\nuniform vec3 cameraPosition;\n#ifdef HAS_TOON\nuniform float toons;\nuniform float specularToons;\n#endif\n#ifdef HAS_TANGENT\nvarying vec4 vTangent;\n#endif\n#ifdef HAS_MAP\nvarying vec2 vTexCoord;\n#endif\nvarying vec3 vNormal;\nvarying vec3 vFragPos;\n#ifdef HAS_INSTANCE_COLOR\nvarying vec4 vInstanceColor;\n#endif\n#ifdef HAS_BASECOLOR_MAP\nuniform sampler2D baseColorTexture;\n#endif\n#ifdef HAS_EXTRUSION_OPACITY\nuniform vec2 extrusionOpacityRange;\nvarying float vExtrusionOpacity;\n#endif\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nvarying vec4 vColor;\n#elif defined(IS_LINE_EXTRUSION)\nuniform vec4 lineColor;\n#else\nuniform vec4 polygonFill;\n#endif\n#ifdef IS_LINE_EXTRUSION\nuniform float lineOpacity;\n#else\nuniform float polygonOpacity;\n#endif\n#ifdef HAS_OCCLUSION_MAP\nuniform sampler2D occlusionTexture;\n#endif\n#ifdef HAS_NORMAL_MAP\nuniform sampler2D normalTexture;\n#endif\n#ifdef HAS_EMISSIVE_MAP\nuniform sampler2D emissiveTexture;\n#endif\n#ifdef SHADING_MODEL_SPECULAR_GLOSSINESS\nuniform vec4 diffuseFactor;\nuniform vec3 specularFactor;\n#ifdef HAS_DIFFUSE_MAP\nuniform sampler2D diffuseTexture;\n#endif\n#ifdef HAS_SPECULARGLOSSINESS_MAP\nuniform sampler2D specularGlossinessTexture;\n#endif\n#endif\n#include <heatmap_render_frag>\nvec3 c() {\n  \n#if defined(HAS_NORMAL_MAP)\nvec3 d = normalize(vNormal);\n  vec3 e = texture2D(normalTexture, vTexCoord).xyz * 2. - 1.;\n#if defined(HAS_TANGENT)\nvec3 t = normalize(vTangent.xyz);\n  vec3 b = normalize(cross(d, t) * sign(vTangent.w));\n  mat3 f = mat3(t, b, d);\n  return normalize(f * e);\n#else\nreturn normalize(e);\n#endif\n#else\nreturn normalize(vNormal);\n#endif\n}\nvec4 h(const in vec4 i) {\n  return vec4(i.r < .0031308 ? i.r * 12.92 : 1.055 * pow(i.r, 1. / 2.4) - .055, i.g < .0031308 ? i.g * 12.92 : 1.055 * pow(i.g, 1. / 2.4) - .055, i.b < .0031308 ? i.b * 12.92 : 1.055 * pow(i.b, 1. / 2.4) - .055, i.a);\n}\nvec4 j() {\n  \n#if defined(HAS_BASECOLOR_MAP)\nreturn texture2D(baseColorTexture, vTexCoord);\n#elif defined(HAS_DIFFUSE_MAP)\nreturn texture2D(diffuseTexture, vTexCoord);\n#elif defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nreturn diffuseFactor;\n#else\nreturn baseColorFactor;\n#endif\n}\nvec3 k() {\n  \n#if defined(HAS_SPECULARGLOSSINESS_MAP)\nreturn texture2D(specularGlossinessTexture, vTexCoord).rgb;\n#elif defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nreturn specularFactor;\n#else\nreturn vec3(1.);\n#endif\n}\nvoid main() {\n  vec4 l = j();\n  vec3 m = ambientStrength * ambientColor * l.rgb;\n#ifdef HAS_INSTANCE_COLOR\nm *= vInstanceColor.rgb;\n#endif\nvec3 o = c();\n  vec3 u = normalize(-light0_viewDirection);\n  float v = max(dot(o, u), .0);\n#ifdef HAS_TOON\nfloat A = floor(v * toons);\n  v = A / toons;\n#endif\nvec3 B = light0_diffuse.rgb * v * l.rgb;\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nvec3 i = vColor.rgb;\n#elif defined(IS_LINE_EXTRUSION)\nvec3 i = lineColor.rgb;\n#else\nvec3 i = polygonFill.rgb;\n#endif\n#ifdef HAS_INSTANCE_COLOR\ni *= vInstanceColor.rgb;\n#endif\nm *= i.rgb;\n  B *= i.rgb;\n  vec3 C = normalize(cameraPosition - vFragPos);\n  vec3 D = normalize(u + C);\n  float E = pow(max(dot(o, D), .0), materialShininess);\n#ifdef HAS_TOON\nfloat F = floor(E * specularToons);\n  E = F / specularToons;\n#endif\nvec3 G = specularStrength * lightSpecular * E * k();\n#ifdef HAS_OCCLUSION_MAP\nfloat H = texture2D(occlusionTexture, vTexCoord).r;\n  m *= H;\n#endif\nvec3 I = m + B + G;\n#ifdef HAS_EMISSIVE_MAP\nvec3 J = texture2D(emissiveTexture, vTexCoord).rgb;\n  I += J;\n#endif\nglFragColor = vec4(I, opacity);\n#if defined(HAS_COLOR) || defined(HAS_COLOR0)\nfloat K = vColor.a;\n#elif defined(IS_LINE_EXTRUSION)\nfloat K = lineColor.a;\n#else\nfloat K = polygonFill.a;\n#endif\nglFragColor *= K;\n#ifdef HAS_EXTRUSION_OPACITY\nfloat L = extrusionOpacityRange.x;\n  float M = extrusionOpacityRange.y;\n  float N = L + vExtrusionOpacity * (M - L);\n  N = clamp(N, .0, 1.);\n  glFragColor *= N;\n#endif\n#ifdef HAS_HEATMAP\nglFragColor = heatmap_getColor(glFragColor);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}", rt$1 = "#include <gl2_vert>\nattribute vec3 aPosition;\n#include <line_extrusion_vert>\n#ifdef HAS_MAP\nuniform vec2 uvScale;\nuniform vec2 uvOffset;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\n#endif\n#if defined(HAS_COLOR)\nattribute vec4 aColor;\nvarying vec4 vColor;\n#elif defined(HAS_COLOR0)\nattribute vec4 aColor0;\nvarying vec4 vColor;\n#endif\nvarying vec3 vFragPos;\nvarying vec3 vNormal;\nuniform mat4 projMatrix;\nuniform mat4 viewModelMatrix;\nuniform mat3 modelNormalMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform vec2 halton;\nuniform vec2 outSize;\nuniform mat4 projViewMatrix;\n#include <get_output>\n#include <heatmap_render_vert>\n#ifdef HAS_EXTRUSION_OPACITY\nattribute float aExtrusionOpacity;\nvarying float vExtrusionOpacity;\n#endif\n#if defined(HAS_TANGENT)\nvarying vec4 vTangent;\n#endif\nvoid c(const highp vec4 q, out highp vec3 d) {\n  d = vec3(.0, .0, 1.) + vec3(2., -2., -2.) * q.x * q.zwx + vec3(2., 2., -2.) * q.y * q.wzy;\n}\nvoid c(const highp vec4 q, out highp vec3 d, out highp vec3 t) {\n  c(q, d);\n  t = vec3(1., .0, .0) + vec3(-2., 2., -2.) * q.y * q.yxw + vec3(-2., 2., 2.) * q.z * q.zwx;\n}\nvoid main() {\n  \n#ifdef IS_LINE_EXTRUSION\nvec4 e = getPosition(getLineExtrudePosition(aPosition));\n#else\nvec4 e = getPosition(aPosition);\n#endif\nmat4 f = getPositionMatrix();\n  vFragPos = vec3(modelMatrix * f * e);\n#if defined(HAS_NORMAL) || defined(HAS_TANGENT)\nmat3 h = modelNormalMatrix * mat3(f);\n  vec3 i;\n#if defined(HAS_TANGENT)\nvec3 t;\n  c(aTangent, i, t);\n  vTangent = vec4(h * t, aTangent.w);\n#else\n#ifdef HAS_DECODE_NORMAL\ni = getNormal(aNormal);\n#else\ni = aNormal;\n#endif\n#endif\nvec3 j = appendMorphNormal(i);\n  vNormal = normalize(h * j);\n#else\nvNormal = vec3(.0);\n#endif\nmat4 k = projMatrix;\n  k[2].xy += halton.xy / outSize.xy;\n  gl_Position = k * viewModelMatrix * f * e;\n#ifdef HAS_MAP\nvec2 l = getTexcoord(aTexCoord);\n  vTexCoord = l * uvScale + uvOffset;\n#endif\n#ifdef HAS_EXTRUSION_OPACITY\nvExtrusionOpacity = aExtrusionOpacity;\n#endif\n#if defined(HAS_COLOR)\nvColor = aColor / 255.;\n#elif defined(HAS_COLOR0)\nvColor = aColor0 / 255.;\n#endif\n#ifdef HAS_HEATMAP\nheatmap_compute(projMatrix * viewModelMatrix * f, e);\n#endif\n}";

	class it$1 extends et$1 {
	    constructor(e = {}) {
	        const n = [], r = [];
	        super({
	            vert: rt$1,
	            frag: nt$1,
	            uniforms: [ {
	                name: "modelNormalMatrix",
	                type: "function",
	                fn: function(e, t) {
	                    return fromMat4$1(n, t.modelMatrix);
	                }
	            }, {
	                name: "viewModelMatrix",
	                type: "function",
	                fn: function(e, n) {
	                    return multiply$5(r, n.viewMatrix, n.modelMatrix);
	                }
	            } ],
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        }), this.version = 300;
	    }
	    getGeometryDefines(e) {
	        const t = {};
	        return e.data[e.desc.tangentAttribute] ? t.HAS_TANGENT = 1 : e.data[e.desc.normalAttribute] && (t.HAS_NORMAL = 1), 
	        t;
	    }
	}

	class ot$1 extends et$1 {
	    constructor(e = {}) {
	        const n = [];
	        super({
	            vert: "attribute vec3 aPosition;\n#ifdef HAS_COLOR0\nattribute vec4 aColor0;\nvarying vec4 vColor;\n#endif\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 projViewModelMatrix;\nuniform float pointSize;\n#if defined(HAS_MAP)\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\n#endif\n#include <get_output>\n#include <heatmap_render_vert>\n#ifdef HAS_FLOODANALYSE\nvarying float vHeight;\n#endif\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  gl_PointSize = pointSize;\n  gl_Position = projViewModelMatrix * d * c;\n#ifdef HAS_COLOR0\nvColor = aColor0 / 255.;\n#endif\n#ifdef HAS_MAP\nvTexCoord = aTexCoord;\n#endif\n#ifdef HAS_HEATMAP\nheatmap_compute(projMatrix * viewModelMatrix * d, c);\n#endif\n}",
	            frag: "precision mediump float;\n#include <gl2_frag>\n#if defined(HAS_COLOR0)\nvarying vec4 vColor;\n#endif\n#include <heatmap_render_frag>\nuniform vec4 baseColorFactor;\n#if defined(HAS_MAP)\n#if defined(HAS_ALBEDO_MAP)\nuniform sampler2D baseColorTexture;\n#endif\n#if defined(HAS_DIFFUSE_MAP)\nuniform sampler2D diffuseTexture;\n#endif\nvarying vec2 vTexCoord;\n#endif\nvoid main() {\n  \n#ifdef HAS_COLOR0\nglFragColor = vColor * baseColorFactor;\n#else\nglFragColor = vec4(1.) * baseColorFactor;\n#endif\n#ifdef HAS_MAP\n#ifdef HAS_ALBEDO_MAP\nglFragColor *= texture2D(baseColorTexture, vTexCoord);\n#endif\n#ifdef HAS_DIFFUSE_MAP\nglFragColor *= texture2D(diffuseTexture, vTexCoord);\n#endif\n#endif\n#ifdef HAS_HEATMAP\nglFragColor = heatmap_getColor(glFragColor);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: (e, r) => multiply$5(n, r.projViewMatrix, r.modelMatrix)
	            } ],
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        });
	    }
	}

	class at$1 extends it$1 {
	    constructor(e = {}) {
	        super({
	            vert: rt$1,
	            frag: nt$1,
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        });
	    }
	}

	var st$1 = "#if __VERSION__ == 300\n#define attribute in\n#define varying out\n#endif\nattribute vec2 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = vec4(aPosition, 0., 1.);\n  vTexCoord = aTexCoord;\n}";

	const ct$1 = new Int8Array([ -1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, -1 ]), lt$1 = new Uint8Array([ 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0 ]);

	class ft$1 extends et$1 {
	    constructor(e) {
	        e.vert = e.vert || st$1, e.extraCommandProps = e.extraCommandProps || {}, e.extraCommandProps.depth || (e.extraCommandProps.depth = {
	            enable: !1,
	            mask: !1
	        }), e.extraCommandProps.stencil || (e.extraCommandProps.stencil = {
	            enable: !1
	        }), super(e);
	    }
	    draw(e) {
	        return this._quadMesh || this._createQuadMesh(e), super.draw(e, this._quadMesh);
	    }
	    getMeshCommand(e) {
	        const t = this.dkey || "";
	        return this.commands[t + "_quad"] || (this.commands[t + "_quad"] = this.createREGLCommand(e, null, this._quadMesh[0].getElements())), 
	        this.commands[t + "_quad"];
	    }
	    _createQuadMesh(e) {
	        const t = new J$1({
	            aPosition: ct$1,
	            aTexCoord: lt$1
	        }, null, ct$1.length / 2, {
	            positionSize: 2,
	            primitive: "triangles"
	        });
	        t.generateBuffers(e), this._quadMesh = [ new fe(t) ];
	    }
	    dispose() {
	        if (this._quadMesh) {
	            const e = this._quadMesh[0];
	            e.geometry.dispose(), e.dispose();
	        }
	        return delete this._quadMesh, super.dispose();
	    }
	}

	class ut$1 extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "#define SHADER_NAME FXAA\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\nprecision mediump float;\nvarying vec2 vTexCoord;\nuniform float enableFXAA;\nuniform float enableToneMapping;\nuniform float enableSharpen;\nuniform vec2 resolution;\nuniform sampler2D textureSource;\n#ifdef HAS_NOAA_TEX\nuniform sampler2D noAaTextureSource;\n#endif\n#ifdef HAS_POINT_TEX\nuniform sampler2D pointTextureSource;\n#endif\n#ifdef HAS_TAA_TEX\nuniform sampler2D taaTextureSource;\n#ifdef HAS_FXAA_TEX\nuniform sampler2D fxaaTextureSource;\n#endif\n#endif\nuniform float pixelRatio;\nuniform float sharpFactor;\n#ifdef HAS_OUTLINE_TEX\nuniform sampler2D textureOutline;\nuniform float enableOutline;\nuniform float highlightFactor;\nuniform float outlineFactor;\nuniform float outlineWidth;\nuniform vec3 outlineColor;\n#endif\nvec2 c;\nvec4 d(vec2 e) {\n  \n#ifdef HAS_TAA_TEX\nvec4 f = texture2D(textureSource, e);\n  vec4 taa = texture2D(taaTextureSource, e);\n#ifdef HAS_FXAA_TEX\nvec4 h = texture2D(fxaaTextureSource, e);\n#else\nvec4 h = vec4(.0);\n#endif\nvec4 i = taa + f * (1. - taa.a);\n  return h + i * (1. - h.a);\n#else\nreturn texture2D(textureSource, e);\n#endif\n}\nvec4 j(vec2 k) {\n  vec4 l;\n  mediump vec2 m = vec2(1. / resolution.x, 1. / resolution.y);\n  vec3 n = d((k + vec2(-1., -1.)) * m).xyz;\n  vec3 o = d((k + vec2(1., -1.)) * m).xyz;\n  vec3 u = d((k + vec2(-1., 1.)) * m).xyz;\n  vec3 v = d((k + vec2(1.)) * m).xyz;\n  vec4 A = d(k * m);\n  vec3 B = A.xyz;\n  vec3 C = vec3(.299, .587, .114);\n  float D = dot(n, C);\n  float E = dot(o, C);\n  float F = dot(u, C);\n  float G = dot(v, C);\n  float H = dot(B, C);\n  float I = min(H, min(min(D, E), min(F, G)));\n  float J = max(H, max(max(D, E), max(F, G)));\n  mediump vec2 K;\n  K.x = -((D + E) - (F + G));\n  K.y = (D + F) - (E + G);\n  float L = max((D + E + F + G) * (.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n  float M = 1. / (min(abs(K.x), abs(K.y)) + L);\n  K = min(vec2(FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), K * M)) * m;\n  vec4 N = .5 * (d(k * m + K * (1. / 3. - .5)) + d(k * m + K * (2. / 3. - .5)));\n  vec4 O = N * .5 + .25 * (d(k * m + K * -.5) + d(k * m + K * .5));\n  float P = dot(O.xyz, C);\n  if(P < I || P > J)\n    l = N;\n  else\n    l = O;\n  return l;\n}\nvec3 Q(const in vec3 l, const float R) {\n  vec2 S = pixelRatio / resolution.xy;\n  float T = .0;\n  vec4 n = texture2D(textureSource, c + S * vec2(-1., -1.));\n  n.rgb = mix(vec3(.0), n.rgb, sign(n.a));\n  T += mix(.0, 1., sign(n.a));\n  vec4 v = texture2D(textureSource, c + S * vec2(1.));\n  v.rgb = mix(vec3(.0), v.rgb, sign(v.a));\n  T += mix(.0, 1., sign(v.a));\n  vec4 o = texture2D(textureSource, c + S * vec2(1., -1.));\n  o.rgb = mix(vec3(.0), o.rgb, sign(o.a));\n  T += mix(.0, 1., sign(o.a));\n  vec4 u = texture2D(textureSource, c + S * vec2(-1., 1.));\n  u.rgb = mix(vec3(.0), u.rgb, sign(u.a));\n  T += mix(.0, 1., sign(u.a));\n  return l + R * (T * l - n.rgb - o.rgb - u.rgb - v.rgb);\n}\nvec4 U(const in vec4 l) {\n  return vec4(Q(l.rgb, sharpFactor), l.a);\n}\nvec3 V(const vec3 x) {\n  const float a = 2.51;\n  const float b = .03;\n  const float W = 2.43;\n  const float X = .59;\n  const float Y = .14;\n  return (x * (a * x + b)) / (x * (W * x + X) + Y);\n}\nvec3 Z(vec3 l) {\n  l = l / (l + vec3(1.));\n  return l = pow(l, vec3(1. / 2.2));\n}\n#ifdef HAS_OUTLINE_TEX\nvec4 ba() {\n  float bb = 2.;\n  float bc = 1.;\n  float bd = pixelRatio / resolution[0] * outlineWidth;\n  float be = pixelRatio / resolution[1] * outlineWidth;\n  vec4 bf = (texture2D(textureOutline, c + vec2(bd, be)));\n  vec4 bg = (texture2D(textureOutline, c + vec2(bd, .0)));\n  vec4 bh = (texture2D(textureOutline, c + vec2(bd, -be)));\n  vec4 bi = (texture2D(textureOutline, c + vec2(.0, -be)));\n  vec4 bj = (texture2D(textureOutline, c + vec2(-bd, -be)));\n  vec4 bk = (texture2D(textureOutline, c + vec2(-bd, .0)));\n  vec4 bl = (texture2D(textureOutline, c + vec2(-bd, be)));\n  vec4 bm = (texture2D(textureOutline, c + vec2(.0, be)));\n  vec4 bn = -bb * bk + bb * bg + -bc * bl + bc * bf + -bc * bj + bc * bh;\n  vec4 bo = -bb * bi + bb * bm + -bc * bj + bc * bl + -bc * bh + bc * bf;\n  float bp = sqrt(dot(bo, bo) + dot(bn, bn));\n  bool bq = bp < 1. / 65025.;\n  vec3 br = (texture2D(textureOutline, c)).r * outlineColor;\n  if(br == vec3(.0) || (highlightFactor == .0 && bq)) {\n    return vec4(.0);\n  }\n  float bs = bq ? highlightFactor : min(1., sqrt(bp) * outlineFactor);\n  return bs * vec4(br, 1.);\n}\nvec4 bt(const in vec4 l) {\n  vec4 ba = ba();\n  return ba + vec4(l) * (1. - ba.a);\n}\n#endif\nvoid main() {\n  c = vTexCoord;\n  vec4 l;\n  if(enableFXAA == 1.) {\n    l = j(c * resolution);\n  } else {\n    l = d(vTexCoord);\n  }\n  if(enableSharpen == 1.) {\n    l = U(l);\n  }\n#if defined(HAS_NOAA_TEX) || defined(HAS_POINT_TEX)\nvec4 bu = vec4(.0);\n  vec4 bv = vec4(.0);\n#ifdef HAS_POINT_TEX\nbu = texture2D(pointTextureSource, vTexCoord);\n#endif\n#ifdef HAS_NOAA_TEX\nbv = texture2D(noAaTextureSource, vTexCoord);\n#endif\nvec4 bw = bu + bv * (1. - bu.a);\n  l = bw + l * (1. - bw.a);\n#endif\nif(enableToneMapping == 1.) {\n    l.rgb = Z(l.rgb);\n  }\n#ifdef HAS_OUTLINE_TEX\nl = bt(l);\n#endif\ngl_FragColor = l;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.resolution[0],
	                    height: (e, t) => t.resolution[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, t) {
	        const n = this.dkey || "";
	        return this.commands[n + "_fxaa"] || (this.commands[n + "_fxaa"] = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands[n + "_fxaa"];
	    }
	}

	class ht$1 extends ft$1 {
	    constructor({blurOffset: e}) {
	        super({
	            vert: st$1,
	            frag: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D textureSource;\nuniform vec2 resolution;\nuniform float ignoreTransparent;\nvoid main() {\n  vec4 c = vec4(.0);\n  float d = .0;\n  for(int x = -BOXBLUR_OFFSET; x <= BOXBLUR_OFFSET; ++x)\n    for(int y = -BOXBLUR_OFFSET; y <= BOXBLUR_OFFSET; ++y) {\n      vec2 e = vTexCoord.st + vec2(float(x) / resolution.x, float(y) / resolution.y);\n      e = clamp(e, .0, 1.);\n      vec4 f = texture2D(textureSource, e);\n      float h;\n      if(ignoreTransparent == 1.) {\n        h = sign(f.a);\n      } else {\n        h = 1.;\n      }\n      d += h;\n      c += h * f;\n    }\n  gl_FragColor = c / max(d, 1.) * clamp(sign(d - 1.), .0, 1.);\n}",
	            defines: {
	                BOXBLUR_OFFSET: e || 2
	            },
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.resolution[0],
	                    height: (e, t) => t.resolution[1]
	                }
	            }
	        }), this._blurOffset = e || 2;
	    }
	    getMeshCommand(e, t) {
	        const n = "box_blur_" + this._blurOffset;
	        return this.commands[n] || (this.commands[n] = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands[n];
	    }
	}

	class dt$1 extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "precision mediump float;\n#define SHADER_NAME SSAO_BLUR\nstruct MaterialParams {\n  float farPlaneOverEdgeDistance;\n  vec2 axis;\n  vec2 resolution;\n};\nuniform sampler2D materialParams_ssao;\nuniform sampler2D TextureInput;\nuniform MaterialParams materialParams;\nvarying vec2 vTexCoord;\nconst int c = 6;\nfloat d[8];\nvoid e() {\n  d[0] = .099736;\n  d[1] = .096667;\n  d[2] = .088016;\n  d[3] = .075284;\n  d[4] = .060493;\n  d[5] = .045662;\n}\nfloat f(vec2 h) {\n  return (h.x * (256. / 257.) + h.y * (1. / 257.));\n}\nvoid tap(inout float i, inout float j, float k, float h, vec2 l) {\n  vec3 m = texture2D(materialParams_ssao, l).rgb;\n  float n = k;\n  i += m.r * n;\n  j += n;\n}\nvoid main() {\n  e();\n  highp vec2 o = vTexCoord;\n  vec3 m = texture2D(materialParams_ssao, o).rgb;\n  if(m.g * m.b == 1.) {\n    if(materialParams.axis.y > .0) {\n      vec4 u = texture2D(TextureInput, o);\n      gl_FragColor = u;\n    } else {\n      gl_FragColor = vec4(m, 1.);\n    }\n    return;\n  }\n  float h = f(m.gb);\n  float j = d[0];\n  float i = m.r * j;\n  vec2 v = materialParams.axis / materialParams.resolution;\n  vec2 A = v;\n  for(int B = 1; B < c; B++) {\n    float k = d[B];\n    tap(i, j, k, h, o + A);\n    tap(i, j, k, h, o - A);\n    A += v;\n  }\n  float C = i * (1. / j);\n  vec2 gb = m.gb;\n  if(materialParams.axis.y > .0) {\n    vec4 u = texture2D(TextureInput, o);\n    gl_FragColor = vec4(u.rgb * C, u.a);\n  } else {\n    gl_FragColor = vec4(C, gb, 1.);\n  }\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.outputSize[0],
	                    height: (e, t) => t.outputSize[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, t) {
	        return this.commands.ssao_blur || (this.commands.ssao_blur = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.ssao_blur;
	    }
	}

	const mt$1 = [ -2e-6, 0, 2e-6, -.095089, .004589, -.031253, .01518, -.025586, .003765, .073426, .021802, .002778, .094587, .043218, .089148, -.009509, .051369, .019673, .139973, -.101685, .10857, -.103804, .219853, -.043016, .004841, -.033988, .094187, .028011, .058466, -.25711, -.051031, .074993, .259843, .118822, -.186537, -.134192, .063949, -.094894, -.072683, .108176, .327108, -.254058, -.04718, .21918, .263895, -.407709, .240834, -.200352 ];

	class vt$1 extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "#if __VERSION__ == 100\n#if defined(GL_OES_standard_derivatives)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision highp float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\n#define saturate(x)        clamp(x, 0.0, 1.0)\n#define SHADER_NAME SSAO_EXTRACT\n#define PI 3.14159265359\nconst float c = .0625;\nstruct MaterialParams {\n  mat4 projMatrix;\n  mat4 invProjMatrix;\n  vec4 resolution;\n  float radius;\n  float bias;\n  float power;\n  vec2 cameraNearFar;\n};\nuniform MaterialParams materialParams;\nuniform sampler2D materialParams_depth;\n#define NOISE_NONE      0\n#define NOISE_PATTERN   1\n#define NOISE_RANDOM    2\n#define NOISE_TYPE      NOISE_PATTERN\nconst int d = 16;\nuniform vec3 kSphereSamples[16];\nvec3 e(const int x) {\n  if(x == 0) {\n    return vec3(-.078247, -.749924, -.656880);\n  } else if(x == 1) {\n    return vec3(-.572319, -.102379, -.813615);\n  } else if(x == 2) {\n    return vec3(.048653, -.380791, .923380);\n  } else if(x == 3) {\n    return vec3(.281202, -.656664, -.699799);\n  } else if(x == 4) {\n    return vec3(.711911, -.235841, -.661485);\n  } else if(x == 5) {\n    return vec3(-.445893, .611063, .654050);\n  } else if(x == 6) {\n    return vec3(-.703598, .674837, .222587);\n  } else if(x == 7) {\n    return vec3(.768236, .507457, .390257);\n  } else if(x == 8) {\n    return vec3(-.670286, -.470387, .573980);\n  } else if(x == 9) {\n    return vec3(.199235, .849336, -.488808);\n  } else if(x == 10) {\n    return vec3(-.768068, -.583633, -.263520);\n  } else if(x == 11) {\n    return vec3(-.897330, .328853, .294372);\n  } else if(x == 12) {\n    return vec3(-.570930, -.531056, -.626114);\n  } else if(x == 13) {\n    return vec3(.699014, .063283, -.712303);\n  } else if(x == 14) {\n    return vec3(.207495, .976129, -.064172);\n  } else if(x == 15) {\n    return vec3(-.060901, -.869738, -.489742);\n  } else {\n    return vec3(.0);\n  }\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n}\nvec2 f(highp float h) {\n  highp float z = clamp(h * 1. / -materialParams.cameraNearFar.y, .0, 1.);\n  highp float t = floor(256. * z);\n  mediump float i = t * (1. / 256.);\n  mediump float j = 256. * z - t;\n  return vec2(i, j);\n}\nfloat k(highp vec2 l) {\n  l = fract(l * vec2(5.3987, 5.4421));\n  l += dot(l.yx, l.xy + vec2(21.5351, 14.3137));\n  highp float xy = l.x * l.y;\n  return fract(xy * 95.4307) + fract(xy * 75.04961) * .5;\n}\nvec3 m(const vec2 o) {\n  \n#if NOISE_TYPE == NOISE_RANDOM\nreturn normalize(2. * vec3(k(o), k(o * 2.), k(o * 4.)) - vec3(1.));\n#elif NOISE_TYPE == NOISE_PATTERN\nvec2 xy = floor(gl_FragCoord.xy);\n  float u = mod(xy.x, 4.);\n  float v = mod(xy.y, 4.);\n  return e(int(u + v * 4.));\n#else\nreturn vec3(.0);\n#endif\n}\nhighp mat4 A() {\n  return materialParams.projMatrix;\n}\nhighp mat4 B() {\n  return materialParams.invProjMatrix;\n}\nhighp float C(const vec2 o) {\n  return texture2D(materialParams_depth, o).r;\n}\nhighp float D(highp float h) {\n  highp mat4 E = A();\n  highp float z = h * 2. - 1.;\n  return -E[3].z / (z + E[2].z);\n}\nhighp float F(const vec2 o) {\n  return D(texture2D(materialParams_depth, o).r);\n}\nhighp vec3 G(in vec2 p, highp float H) {\n  p = p * 2. - 1.;\n  highp mat4 I = B();\n  p.x *= I[0].x;\n  p.y *= I[1].y;\n  return vec3(p * -H, H);\n}\nhighp vec3 J(const highp vec3 K) {\n  highp vec3 L = dFdx(K);\n  highp vec3 M = dFdy(K);\n  return cross(L, M);\n}\nhighp vec3 J(const highp vec3 K, const vec2 o) {\n  vec2 N = o + vec2(materialParams.resolution.z, .0);\n  vec2 O = o + vec2(.0, materialParams.resolution.w);\n  highp vec3 px = G(N, F(N));\n  highp vec3 py = G(O, F(O));\n  highp vec3 L = px - K;\n  highp vec3 M = py - K;\n  return cross(L, M);\n}\nfloat P(const highp vec3 Q, const highp float R, mat3 S, const vec3 T, const vec3 U) {\n  highp mat4 E = A();\n  float V = materialParams.radius;\n  float W = materialParams.bias;\n  highp vec3 X = S * U;\n  float Y = dot(X, T);\n  X = sign(Y) * X;\n  X = Q + X * V;\n  highp vec4 Z = E * vec4(X, 1.);\n  Z.xy = Z.xy * (.5 / Z.w) + .5;\n  highp float ba = C(Z.xy);\n  ba = D(ba);\n  float t = saturate(V / abs(R - ba));\n  float bb = t * t * (3. - 2. * t);\n  return (ba >= X.z + W ? bb : .0);\n}\nvoid main() {\n  highp vec2 o = vTexCoord;\n  highp float h = C(o);\n  highp float bc = D(h);\n  highp vec3 Q = G(o, bc);\n  highp vec3 T = J(Q, o);\n  T = normalize(T);\n  vec3 bd = m(o);\n  vec3 be = bd.xyz;\n  vec3 bf = normalize(be - T * dot(be, T));\n  vec3 bg = cross(T, bf);\n  mat3 S = mat3(bf, bg, T);\n  float bh = .0;\n  for(int bi = 0; bi < d; bi++) {\n    bh += P(Q, bc, S, T, kSphereSamples[bi]);\n  }\n  float bj = 1. - bh / float(d);\n  bj = mix(bj, bj * bj, materialParams.power);\n  glFragColor = vec4(bj, f(Q.z), 1.);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "kSphereSamples",
	                type: "function",
	                fn: function() {
	                    return mt$1;
	                }
	            } ],
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.outputSize[0],
	                    height: (e, t) => t.outputSize[1]
	                }
	            }
	        }), this.version = 300;
	    }
	    getMeshCommand(e, t) {
	        return this.commands.ssao_extract || (this.commands.ssao_extract = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.ssao_extract;
	    }
	}

	const _t$1 = [];

	class gt$1 {
	    constructor(e) {
	        this._renderer = e;
	    }
	    render(e, t, n) {
	        const {width: r, height: i} = n;
	        return this._initShaders(), this._extractFBO || this._createTextures(n), this._extract(e, r, i, n), 
	        this._blurAndCombine(t, e.cameraFar, r, i);
	    }
	    _blurAndCombine(e, t, n, r) {
	        const i = Math.floor(n / 2), o = Math.floor(r / 2);
	        this._blurHTex.width === i && this._blurHTex.height === o || (this._blurHFBO.resize(i, o), 
	        this._blurVFBO.resize(n, r));
	        const a = [ n, r ], s = [ 1, 0 ];
	        return this._renderer.render(this._ssaoBlurShader, {
	            TextureInput: e,
	            materialParams_ssao: this._extractTex,
	            materialParams: {
	                axis: s,
	                farPlaneOverEdgeDistance: -t / .0625,
	                resolution: a
	            },
	            outputSize: [ i, o ]
	        }, null, this._blurHFBO), s[0] = 0, s[1] = 1, this._renderer.render(this._ssaoBlurShader, {
	            TextureInput: e,
	            materialParams_ssao: this._blurHTex,
	            materialParams: {
	                axis: s,
	                farPlaneOverEdgeDistance: -t / .0625,
	                resolution: a
	            },
	            outputSize: [ n, r ]
	        }, null, this._blurVFBO), this._blurVTex;
	    }
	    _extract(e, n, r, i) {
	        const o = Math.floor(n / 2), a = Math.floor(r / 2);
	        this._extractFBO.width === o && this._extractFBO.height === a || this._extractFBO.resize(o, a);
	        const {projMatrix: s} = e, c = invert$2(_t$1, s);
	        this._renderer.render(this._ssaoExtractShader, {
	            materialParams_depth: i,
	            materialParams: {
	                projMatrix: s,
	                invProjMatrix: c,
	                resolution: [ o, a, 1 / o, 1 / a ],
	                radius: e.radius,
	                bias: e.bias,
	                power: e.power || 1,
	                cameraNearFar: [ e.cameraNear, e.cameraFar ]
	            },
	            outputSize: [ o, a ]
	        }, null, this._extractFBO);
	    }
	    _createTextures(e) {
	        const t = Math.floor(e.width / 2), n = Math.floor(e.height / 2);
	        this._extractTex = this._createTex(t, n, "uint8"), this._extractFBO = this._createFBO(this._extractTex), 
	        this._blurHTex = this._createTex(t, n, "uint8"), this._blurHFBO = this._createFBO(this._blurHTex), 
	        this._blurVTex = this._createTex(e.width, e.height, "uint8"), this._blurVFBO = this._createFBO(this._blurVTex);
	    }
	    _createTex(e, t, n) {
	        return this._renderer.regl.texture({
	            min: "linear",
	            mag: "linear",
	            wrap: "clamp",
	            type: n,
	            width: e,
	            height: t
	        });
	    }
	    _createFBO(e) {
	        return this._renderer.regl.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ e ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    dispose() {
	        this._extractFBO && (this._extractFBO.destroy(), delete this._extractFBO, this._blurVFBO.destroy(), 
	        this._blurHFBO.destroy(), this._ssaoExtractShader.dispose(), this._ssaoBlurShader.dispose(), 
	        delete this._ssaoExtractShader);
	    }
	    _initShaders() {
	        this._ssaoExtractShader || (this._ssaoExtractShader = new vt$1, this._ssaoBlurShader = new dt$1);
	    }
	}

	class pt$1 extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "precision mediump float;\nvarying vec2 vTexCoord;\nuniform vec2 resolution;\nuniform sampler2D textureSource;\nuniform float enableVignette;\nuniform float enableGrain;\nuniform float enableLut;\nuniform float timeGrain;\nuniform float grainFactor;\nuniform vec2 lensRadius;\nuniform float frameMod;\nuniform sampler2D lookupTable;\nfloat c(const in vec2 d) {\n  vec3 e = fract(vec3(d.xyx) * .1031);\n  e += dot(e, e.yzx + 19.19);\n  return fract((e.x + e.y) * e.z);\n}\nfloat f() {\n  float h = c(gl_FragCoord.xy + 1000.0 * fract(timeGrain));\n  float i = h * 2. - 1.;\n  h = i * inversesqrt(abs(i));\n  h = max(-1., h);\n  h = h - sign(i) + .5;\n  return (h + .5) * .5;\n}\nvec4 j(const in vec4 k) {\n  float l = f();\n  return vec4(mix(k.rgb, k.rgb * (k.rgb + (1. - k.rgb) * 2. * l), grainFactor), k.a);\n}\nfloat m(const in float k) {\n  return k < .0031308 ? k * 12.92 : 1.055 * pow(k, 1. / 2.4) - .055;\n}\nvec3 m(const in vec3 k) {\n  return vec3(k.r < .0031308 ? k.r * 12.92 : 1.055 * pow(k.r, 1. / 2.4) - .055, k.g < .0031308 ? k.g * 12.92 : 1.055 * pow(k.g, 1. / 2.4) - .055, k.b < .0031308 ? k.b * 12.92 : 1.055 * pow(k.b, 1. / 2.4) - .055);\n}\nvec4 m(const in vec4 k) {\n  return vec4(k.r < .0031308 ? k.r * 12.92 : 1.055 * pow(k.r, 1. / 2.4) - .055, k.g < .0031308 ? k.g * 12.92 : 1.055 * pow(k.g, 1. / 2.4) - .055, k.b < .0031308 ? k.b * 12.92 : 1.055 * pow(k.b, 1. / 2.4) - .055, k.a);\n}\nfloat n(const in float k) {\n  return k < .04045 ? k * (1. / 12.92) : pow((k + .055) * (1. / 1.055), 2.4);\n}\nvec3 n(const in vec3 k) {\n  return vec3(k.r < .04045 ? k.r * (1. / 12.92) : pow((k.r + .055) * (1. / 1.055), 2.4), k.g < .04045 ? k.g * (1. / 12.92) : pow((k.g + .055) * (1. / 1.055), 2.4), k.b < .04045 ? k.b * (1. / 12.92) : pow((k.b + .055) * (1. / 1.055), 2.4));\n}\nvec4 n(const in vec4 k) {\n  return vec4(k.r < .04045 ? k.r * (1. / 12.92) : pow((k.r + .055) * (1. / 1.055), 2.4), k.g < .04045 ? k.g * (1. / 12.92) : pow((k.g + .055) * (1. / 1.055), 2.4), k.b < .04045 ? k.b * (1. / 12.92) : pow((k.b + .055) * (1. / 1.055), 2.4), k.a);\n}\nfloat o(const in vec2 d, const in float u) {\n  vec3 v = vec3(.06711056, .00583715, 52.9829189);\n  return fract(v.z * fract(dot(d.xy + u * vec2(47., 17.) * .695, v.xy)));\n}\nfloat A() {\n  vec2 B = lensRadius;\n  B.y = min(B.y, B.x - 1e-4);\n  float C = o(gl_FragCoord.xy, frameMod);\n  C = (B.x - B.y) * (B.x + B.y) * .07 * (C - .5);\n  return smoothstep(B.x, B.y, C + distance(vTexCoord, vec2(.5)));\n}\nvec4 D(const in vec4 k) {\n  float l = A();\n  return vec4(m(n(k.rgb) * l), clamp(k.a + (1. - l), .0, 1.));\n}\nvec4 E(in vec4 F, in sampler2D G) {\n  mediump float H = F.b * 63.;\n  mediump vec2 I;\n  I.y = floor(floor(H) / 8.);\n  I.x = floor(H) - I.y * 8.;\n  mediump vec2 J;\n  J.y = floor(ceil(H) / 8.);\n  J.x = ceil(H) - J.y * 8.;\n  highp vec2 K;\n  K.x = I.x * .125 + .5 / 512. + (.125 - 1. / 512.) * F.r;\n  K.y = I.y * .125 + .5 / 512. + (.125 - 1. / 512.) * F.g;\n#ifdef LUT_FLIP_Y\nK.y = 1. - K.y;\n#endif\nhighp vec2 L;\n  L.x = J.x * .125 + .5 / 512. + (.125 - 1. / 512.) * F.r;\n  L.y = J.y * .125 + .5 / 512. + (.125 - 1. / 512.) * F.g;\n#ifdef LUT_FLIP_Y\nL.y = 1. - L.y;\n#endif\nlowp vec4 M = texture2D(G, K);\n  lowp vec4 N = texture2D(G, L);\n  lowp vec4 O = mix(M, N, fract(H));\n  return O;\n}\nvoid main() {\n  vec4 k = texture2D(textureSource, vTexCoord);\n  if(enableLut == 1.) {\n    k = E(k, lookupTable);\n  }\n  if(enableVignette == 1.) {\n    k = D(k);\n  }\n  if(enableGrain == 1.) {\n    k = j(k);\n  }\n  gl_FragColor = k;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.resolution[0],
	                    height: (e, t) => t.resolution[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, t) {
	        return this.commands.postprocess || (this.commands.postprocess = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.postprocess;
	    }
	}

	class bt$1 extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "#define SHADER_NAME TAA\nprecision mediump float;\n#define saturate(x)        clamp(x, 0.0, 1.0)\n#if defined(TARGET_METAL_ENVIRONMENT) || defined(TARGET_VULKAN_ENVIRONMENT)\n#define TEXTURE_SPACE_UP    -1\n#define TEXTURE_SPACE_DN     1\n#else\n#define TEXTURE_SPACE_UP     1\n#define TEXTURE_SPACE_DN    -1\n#endif\n#define BOX_TYPE_AABB           0\n#define BOX_TYPE_VARIANCE       1\n#define BOX_TYPE_AABB_VARIANCE  2\n#define VARIANCE_GAMMA          1.0\n#define BOX_CLIPPING_ACCURATE   0\n#define BOX_CLIPPING_CLAMP      1\n#define BOX_CLIPPING_NONE       2\n#if defined(TARGET_MOBILE)\n#define BOX_CLIPPING            BOX_CLIPPING_ACCURATE\n#define BOX_TYPE                BOX_TYPE_VARIANCE\n#define USE_YCoCg               0\n#define FILTER_INPUT            1\n#define FILTER_HISTORY          0\n#else\n#define BOX_CLIPPING            BOX_CLIPPING_ACCURATE\n#define BOX_TYPE                BOX_TYPE_AABB_VARIANCE\n#define USE_YCoCg               0\n#define FILTER_INPUT            0\n#define FILTER_HISTORY          0\n#endif\n#define HISTORY_REPROJECTION    1\n#define PREVENT_FLICKERING      0\nstruct MaterialParams {\n  float alpha;\n  mat4 reprojection;\n};\nuniform sampler2D materialParams_color;\nuniform sampler2D materialParams_history;\nuniform vec2 materialParams_history_size;\nuniform vec2 textureOutputSize;\nuniform sampler2D materialParams_depth;\nuniform MaterialParams materialParams;\nfloat c(const vec3 d) {\n  return dot(d, vec3(.2126, .7152, .0722));\n}\nfloat e(const vec3 f) {\n  \n#if USE_YCoCg\nreturn f.x;\n#else\nreturn c(f);\n#endif\n}\nvec3 h(const vec3 i) {\n  float j = dot(i.rgb, vec3(1, 2, 1) * .25);\n  float k = dot(i.rgb, vec3(2, 0, -2) * .25);\n  float l = dot(i.rgb, vec3(-1, 2, -1) * .25);\n  return vec3(j, k, l);\n}\nvec3 m(const vec3 i) {\n  float j = i.x;\n  float k = i.y;\n  float l = i.z;\n  float r = j + k - l;\n  float g = j + l;\n  float b = j - k - l;\n  return vec3(r, g, b);\n}\nvec4 n(const int o, const vec3 u, const vec3 v, const vec4 i, const vec4 A) {\n  const float B = .0001;\n  if(o == BOX_CLIPPING_ACCURATE) {\n    vec4 r = i - A;\n    vec3 C = 1. / (B + r.rgb);\n    vec3 D = (v - A.rgb) * C;\n    vec3 E = (u - A.rgb) * C;\n    vec3 F = min(D, E);\n    return A + r * saturate(max(max(F.x, F.y), F.z));\n  } else if(o == BOX_CLIPPING_CLAMP) {\n    return vec4(clamp(A.rgb, u, v), A.a);\n  }\n  return A;\n}\nvec4 G(const sampler2D H, const highp vec2 I, const highp vec2 J) {\n  highp vec2 K = I * J;\n  highp vec2 L = floor(K - .5) + .5;\n  highp vec2 M = K - L;\n  highp vec2 N = M * M;\n  highp vec2 O = N * M;\n  vec2 P = N - .5 * (O + M);\n  vec2 Q = 1.5 * O - 2.5 * N + 1.;\n  vec2 R = .5 * (O - N);\n  vec2 S = 1. - P - Q - R;\n  vec2 T = Q + S;\n  highp vec2 U = L - vec2(1.);\n  highp vec2 V = L + vec2(2.);\n  highp vec2 W = L + S / T;\n  highp vec2 X = 1. / J;\n  U *= X;\n  V *= X;\n  W *= X;\n  float Z = T.x * P.y;\n  float ba = P.x * T.y;\n  float bb = T.x * T.y;\n  float bc = R.x * T.y;\n  float bd = T.x * R.y;\n  vec4 be = texture2D(H, vec2(W.x, U.y)) * Z + texture2D(H, vec2(U.x, W.y)) * ba + texture2D(H, vec2(W.x, W.y)) * bb + texture2D(H, vec2(V.x, W.y)) * bc + texture2D(H, vec2(W.x, V.y)) * bd;\n  be *= 1. / (Z + ba + bb + bc + bd);\n  return be;\n}\nvec4 bf(sampler2D H, vec2 I, float bg, ivec2 bh) {\n  return texture2D(H, I + vec2(bh));\n}\nvoid main() {\n  highp vec4 I = (gl_FragCoord.xy / textureOutputSize.xy).xyxy;\n  float bi = texture2D(materialParams_depth, I.xy).r;\n#if HISTORY_REPROJECTION\n#if defined(TARGET_METAL_ENVIRONMENT) || defined(TARGET_VULKAN_ENVIRONMENT)\nI.w = 1. - I.w;\n#endif\nhighp vec4 q = materialParams.reprojection * vec4(I.zw, bi, 1.);\n  I.zw = (q.xy * (1. / q.w)) * .5 + .5;\n#if defined(TARGET_METAL_ENVIRONMENT) || defined(TARGET_VULKAN_ENVIRONMENT)\nI.w = 1. - I.w;\n#endif\n#endif\nvec4 f = bf(materialParams_color, I.xy, .0, ivec2(0));\n#if FILTER_HISTORY\nvec4 bj = G(materialParams_history, I.zw, materialParams_history_size);\n#else\nvec4 bj = texture2D(materialParams_history, I.zw);\n#endif\n#if USE_YCoCg\nbj.rgb = h(bj.rgb);\n#endif\nvec3 s[9];\n  s[0] = bf(materialParams_color, I.xy, .0, ivec2(-1, TEXTURE_SPACE_DN)).rgb;\n  s[1] = bf(materialParams_color, I.xy, .0, ivec2(0, TEXTURE_SPACE_DN)).rgb;\n  s[2] = bf(materialParams_color, I.xy, .0, ivec2(1, TEXTURE_SPACE_DN)).rgb;\n  s[3] = bf(materialParams_color, I.xy, .0, ivec2(-1, 0)).rgb;\n  s[4] = f.rgb;\n  s[5] = bf(materialParams_color, I.xy, .0, ivec2(1, 0)).rgb;\n  s[6] = bf(materialParams_color, I.xy, .0, ivec2(-1, TEXTURE_SPACE_UP)).rgb;\n  s[7] = bf(materialParams_color, I.xy, .0, ivec2(0, TEXTURE_SPACE_UP)).rgb;\n  s[8] = bf(materialParams_color, I.xy, .0, ivec2(1, TEXTURE_SPACE_UP)).rgb;\n#if USE_YCoCg\nfor(int bk = 0; bk < 9; bk++) {\n    s[bk] = h(s[bk]);\n  }\n  f.rgb = s[4].rgb;\n#endif\n#if FILTER_INPUT\n#else\nvec4 bl = f;\n#endif\n#if BOX_TYPE == BOX_TYPE_AABB || BOX_TYPE == BOX_TYPE_AABB_VARIANCE\nvec3 u = min(s[4], min(min(s[1], s[3]), min(s[5], s[7])));\n  vec3 v = max(s[4], max(max(s[1], s[3]), max(s[5], s[7])));\n  vec3 bm = min(u, min(min(s[0], s[2]), min(s[6], s[8])));\n  vec3 bn = max(v, max(max(s[0], s[2]), max(s[6], s[8])));\n  u = (u + bm) * .5;\n  v = (v + bn) * .5;\n#endif\n#if BOX_TYPE == BOX_TYPE_VARIANCE || BOX_TYPE == BOX_TYPE_AABB_VARIANCE\nvec3 bo = s[4];\n  vec3 bp = s[4] * s[4];\n  for(int bk = 1; bk < 9; bk += 2) {\n    bo += s[bk];\n    bp += s[bk] * s[bk];\n  }\n  vec3 bq = bo * (1. / 5.);\n  vec3 br = bp * (1. / 5.);\n  vec3 bs = sqrt(br - bq * bq);\n#if BOX_TYPE == BOX_TYPE_VARIANCE\nvec3 u = bq - VARIANCE_GAMMA * bs;\n  vec3 v = bq + VARIANCE_GAMMA * bs;\n#else\nu = min(u, bq - VARIANCE_GAMMA * bs);\n  v = max(v, bq + VARIANCE_GAMMA * bs);\n#endif\n#endif\nfloat bt = e(bl.rgb);\n  float bu = e(bj.rgb);\n  float bv = materialParams.alpha;\n#if PREVENT_FLICKERING\nfloat bw = 1. - abs(bt - bu) / (.001 + max(bt, bu));\n  bv *= bw * bw;\n#endif\nbl.rgb *= 1. / (1. + bt);\n  bj.rgb *= 1. / (1. + bu);\n  vec4 be = mix(bj, bl, bv);\n  be.rgb *= 1. / (1. - e(be.rgb));\n#if USE_YCoCg\nbe.rgb = m(be.rgb);\n#endif\nbe = max(vec4(0), be);\n  gl_FragColor = be;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.materialParams_color.width,
	                    height: (e, t) => t.materialParams_color.height
	                },
	                blend: {
	                    enable: !1
	                }
	            }
	        });
	    }
	    getMeshCommand(e, t) {
	        return this.commands.taa || (this.commands.taa = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.taa;
	    }
	}

	const xt$1 = [ 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, -2, 0, -1, -1, 1, 1 ];

	class yt$1 {
	    constructor(e, t) {
	        this._jitter = t, this._renderer = e, this._halton = [], this._counter = 0;
	    }
	    needToRedraw() {
	        return this._counter < this._jitter.getSampleCount();
	    }
	    render(e, n, r, i) {
	        const a = this._jitter;
	        this._initShaders(), this._createTextures(e), i && (this._counter = 0), this._counter++;
	        const s = a.getSampleCount();
	        if (this._counter >= s) return this._prevTex;
	        this._fbo.width === e.width && this._fbo.height === e.height || this._fbo.resize(e.width, e.height);
	        const c = this._outputTex, l = this._prevTex, f = this._uniforms || {
	            materialParams_history_size: [ l.width, l.height ],
	            textureOutputSize: [],
	            materialParams: {
	                alpha: 1,
	                reprojection: [],
	                filterWeights: []
	            }
	        };
	        f.materialParams.alpha = 1 / this._counter;
	        const u = f.materialParams.reprojection;
	        multiply$5(u, this._prevProjMatrix || r, invert$2(u, r)), multiply$5(u, u, xt$1), 
	        set(f.materialParams_history_size, l.width, l.height), set(f.textureOutputSize, e.width, e.height), 
	        f.materialParams_depth = n, f.materialParams_color = e, f.materialParams_history = l, 
	        this._renderer.render(this._shader, f, null, this._fbo);
	        const h = this._outputTex, d = this._fbo;
	        return this._outputTex = this._prevTex, this._fbo = this._prevFbo, this._prevTex = h, 
	        this._prevFbo = d, this._prevProjMatrix = copy$5(this._prevProjMatrix || [], r), 
	        c;
	    }
	    dispose() {
	        this._shader && (this._shader.dispose(), delete this._shader), this._fbo && this._fbo.destroy(), 
	        this._prevFbo && this._prevFbo.destroy(), delete this._uniforms;
	    }
	    _createTextures(e) {
	        if (this._outputTex) return;
	        const t = this._renderer.regl;
	        this._outputTex = this._createColorTex(e), this._fbo = t.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ this._outputTex ],
	            depth: !1,
	            stencil: !1
	        }), this._prevTex = this._createColorTex(e), this._prevFbo = t.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ this._prevTex ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    _createColorTex(e) {
	        return this._renderer.regl.texture({
	            min: "linear",
	            mag: "linear",
	            type: "uint8",
	            width: e.width,
	            height: e.height
	        });
	    }
	    _initShaders() {
	        this._shader || (this._shader = new bt$1);
	    }
	}

	const Tt$1 = [ [ .263385, -.0252475 ], [ -.38545, .054485 ], [ -.139795, -.5379925 ], [ -.2793775, .6875475 ], [ .7139025, .4710925 ], [ .90044, -.16422 ], [ .4481775, -.82799 ], [ -.9253375, -.2910625 ], [ .3468025, 1.02292 ], [ -1.13742, .33522 ], [ -.7676225, -.9123175 ], [ -.2005775, -1.1774125 ], [ -.926525, .96876 ], [ 1.12909, -.7500325 ], [ .9603, 1.14625 ] ], At$1 = Tt$1.length, St$1 = [ 0, 0 ];

	for (let e = 0; e < Tt$1.length; e++) St$1[0] += Tt$1[e][0], St$1[1] += Tt$1[e][1];

	St$1[0] /= At$1, St$1[1] /= At$1;

	class Mt$1 {
	    constructor(e) {
	        this._frameNum = 0, this._ratio = e || .05, this._avg = [ St$1[0] * this._ratio, St$1[1] * this._ratio ];
	    }
	    getRatio() {
	        return this._ratio;
	    }
	    setRatio(e) {
	        this._ratio !== e && (this._ratio = e, this.reset()), this._avg = [ St$1[0] * this._ratio, St$1[1] * this._ratio ];
	    }
	    getAverage() {
	        return this._avg;
	    }
	    reset() {
	        this._frameNum = 0;
	    }
	    getJitter(e) {
	        const t = this._frameNum % At$1, n = this._ratio;
	        return set(e, Tt$1[t][0] * n, Tt$1[t][1] * n), e;
	    }
	    frame() {
	        this._frameNum++, this._frameNum % At$1 == 0 && (this._frameNum = 0);
	    }
	    getSampleCount() {
	        return At$1;
	    }
	}

	class Et$1 {
	    constructor(e, t, n = 5) {
	        this._regl = e, this._renderer = new z$1(e), this._inputRGBM = t, this._level = n;
	    }
	    render(e, t) {
	        this._initShaders(), this._createTextures(e), this._blur(e, t || 0);
	        const n = {
	            blurTex0: this._blur01Tex,
	            blurTex1: this._blur11Tex,
	            blurTex2: this._blur21Tex,
	            blurTex3: this._blur31Tex,
	            blurTex4: this._blur41Tex
	        };
	        return this._level > 5 && (n.blurTex5 = this._blur51Tex, n.blurTex6 = this._blur61Tex), 
	        n;
	    }
	    _blur(e, t) {
	        let n = this._blurUniforms;
	        n || (n = this._blurUniforms = {
	            rgbmRange: 7,
	            blurDir: [ 0, 0 ],
	            outSize: [ 0, 0 ],
	            pixelRatio: [ 1, 1 ],
	            outputSize: [ 0, 0 ]
	        }), set(n.outSize, e.width, e.height), this._blurOnce(this._blur0Shader, e, this._blur00FBO, this._blur01FBO, .5, t), 
	        this._blurOnce(this._blur1Shader, this._blur01FBO.color[0], this._blur10FBO, this._blur11FBO, .5), 
	        this._blurOnce(this._blur2Shader, this._blur11FBO.color[0], this._blur20FBO, this._blur21FBO, .5), 
	        this._blurOnce(this._blur3Shader, this._blur21FBO.color[0], this._blur30FBO, this._blur31FBO, .5), 
	        this._blurOnce(this._blur4Shader, this._blur31FBO.color[0], this._blur40FBO, this._blur41FBO, .5), 
	        this._level > 5 && (this._blurOnce(this._blur5Shader, this._blur41FBO.color[0], this._blur50FBO, this._blur51FBO, .5), 
	        this._blurOnce(this._blur6Shader, this._blur51FBO.color[0], this._blur60FBO, this._blur51FBO, .5));
	    }
	    _blurOnce(e, t, n, r, i, a) {
	        const s = Math.ceil(i * t.width), c = Math.ceil(i * t.height);
	        n.width === s && n.height === c || n.resize(s, c), r.width === s && r.height === c || r.resize(s, c);
	        const l = this._blurUniforms;
	        l.luminThreshold = a, l.TextureBlurInput = t, l.inputRGBM = +this._inputRGBM, set(l.blurDir, 0, 1), 
	        set(l.outputSize, n.width, n.height), this._renderer.render(e, l, null, n), l.luminThreshold = 0, 
	        l.inputRGBM = 1, set(l.blurDir, 1, 0), l.TextureBlurInput = n.color[0], this._renderer.render(e, l, null, r);
	    }
	    dispose() {
	        this._blur0Shader && (this._blur0Shader.dispose(), delete this._blur0Shader, this._blur1Shader.dispose(), 
	        this._blur2Shader.dispose(), this._blur3Shader.dispose(), this._blur4Shader.dispose(), 
	        this._blur5Shader && (this._blur5Shader.dispose(), this._blur6Shader.dispose(), 
	        delete this._blur5Shader)), this._blur00Tex && (delete this._blur00Tex, this._blur00FBO.destroy(), 
	        this._blur01FBO.destroy(), this._blur10FBO.destroy(), this._blur11FBO.destroy(), 
	        this._blur20FBO.destroy(), this._blur21FBO.destroy(), this._blur30FBO.destroy(), 
	        this._blur31FBO.destroy(), this._blur40FBO.destroy(), this._blur41FBO.destroy(), 
	        this._blur50FBO && (this._blur50FBO.destroy(), this._blur51FBO.destroy(), this._blur60FBO.destroy(), 
	        this._blur61FBO.destroy()));
	    }
	    _createTextures(e) {
	        if (this._blur00Tex) return;
	        let t = e.width, n = e.height;
	        this._blur00Tex = this._createColorTex(e, t, n), this._blur00FBO = this._createBlurFBO(this._blur00Tex), 
	        this._blur01Tex = this._createColorTex(e), this._blur01FBO = this._createBlurFBO(this._blur01Tex), 
	        t = Math.ceil(t / 2), n = Math.ceil(n / 2), this._blur10Tex = this._createColorTex(e, t, n), 
	        this._blur10FBO = this._createBlurFBO(this._blur10Tex), this._blur11Tex = this._createColorTex(e, t, n), 
	        this._blur11FBO = this._createBlurFBO(this._blur11Tex), t = Math.ceil(t / 2), n = Math.ceil(n / 2), 
	        this._blur20Tex = this._createColorTex(e, t, n), this._blur20FBO = this._createBlurFBO(this._blur20Tex), 
	        this._blur21Tex = this._createColorTex(e, t, n), this._blur21FBO = this._createBlurFBO(this._blur21Tex), 
	        t = Math.ceil(t / 2), n = Math.ceil(n / 2), this._blur30Tex = this._createColorTex(e, t, n), 
	        this._blur30FBO = this._createBlurFBO(this._blur30Tex), this._blur31Tex = this._createColorTex(e, t, n), 
	        this._blur31FBO = this._createBlurFBO(this._blur31Tex), t = Math.ceil(t / 2), n = Math.ceil(n / 2), 
	        this._blur40Tex = this._createColorTex(e, t, n), this._blur40FBO = this._createBlurFBO(this._blur40Tex), 
	        this._blur41Tex = this._createColorTex(e, t, n), this._blur41FBO = this._createBlurFBO(this._blur41Tex), 
	        this._level > 5 && (t = Math.ceil(t / 2), n = Math.ceil(n / 2), this._blur50Tex = this._createColorTex(e, t, n), 
	        this._blur50FBO = this._createBlurFBO(this._blur50Tex), this._blur51Tex = this._createColorTex(e, t, n), 
	        this._blur51FBO = this._createBlurFBO(this._blur51Tex), t = Math.ceil(t / 2), n = Math.ceil(n / 2), 
	        this._blur60Tex = this._createColorTex(e, t, n), this._blur60FBO = this._createBlurFBO(this._blur60Tex), 
	        this._blur61Tex = this._createColorTex(e, t, n), this._blur61FBO = this._createBlurFBO(this._blur61Tex));
	    }
	    _createColorTex(e, t, n) {
	        return this._regl.texture({
	            min: "linear",
	            mag: "linear",
	            type: "uint8",
	            width: t || e.width,
	            height: n || e.height
	        });
	    }
	    _createBlurFBO(e) {
	        return this._regl.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ e ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    _initShaders() {
	        if (!this._blur0Shader) {
	            const e = {
	                vert: st$1,
	                extraCommandProps: {
	                    viewport: {
	                        x: 0,
	                        y: 0,
	                        width: (e, t) => t.outputSize[0],
	                        height: (e, t) => t.outputSize[1]
	                    }
	                },
	                frag: "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\nuniform float inputRGBM;\nuniform float luminThreshold;\n#define SHADER_NAME GAUSSIAN_BLUR0\nconst vec3 c = vec3(.2126, .7152, .0722);\nfloat d(const in vec3 e) {\n  return dot(e, c);\n}\nvec4 f(vec4 e) {\n  float h = max(sign(d(e.rgb) - luminThreshold), .0);\n  return e * h;\n}\nvec2 i;\nvec4 j(const in vec3 e, const in float k) {\n  vec4 l;\n  vec3 m = e / k;\n  l.a = clamp(max(max(m.r, m.g), max(m.b, 1e-6)), .0, 1.);\n  l.a = ceil(l.a * 255.) / 255.;\n  l.rgb = m / l.a;\n  return l;\n}\nvec3 n(const in vec4 e, const in float k) {\n  if(inputRGBM == .0)\n    return e.rgb;\n  return k * e.rgb * e.a;\n}\nvec4 o() {\n  vec3 u = .375 * (f(vec4(n(texture2D(TextureBlurInput, i.xy), rgbmRange), 1.))).rgb;\n  vec2 v;\n  vec2 A = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  v = A * 1.2;\n  u += .3125 * (f(vec4(n(texture2D(TextureBlurInput, i.xy + v.xy), rgbmRange), 1.))).rgb;\n  u += .3125 * (f(vec4(n(texture2D(TextureBlurInput, i.xy - v.xy), rgbmRange), 1.))).rgb;\n  return vec4(u, 1.);\n}\nvoid main(void) {\n  i = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = o();\n  e = j(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}"
	            };
	            this._blur0Shader = new ft$1(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR1\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .3125 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.2857142857142858;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur1Shader = new ft$1(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR2\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .2734375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.3333333333333333;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .328125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.111111111111111;\n  l += .03515625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .03515625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur2Shader = new ft$1(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR3\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .24609375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.3636363636363635;\n  l += .322265625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .322265625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.1818181818181817;\n  l += .0537109375 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .0537109375 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur3Shader = new ft$1(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR4\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .2255859375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  m = n * 1.3846153846153846;\n  l += .314208984375 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .314208984375 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.230769230769231;\n  l += .06982421875 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .06982421875 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 5.076923076923077;\n  l += .003173828125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .003173828125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur4Shader = new ft$1(e), this._level > 5 && (e.frag = "precision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 outSize;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR5\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .20947265625 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  n *= outSize.y * .00075;\n  m = n * 1.4;\n  l += .30548095703125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .30548095703125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.2666666666666666;\n  l += .08331298828125 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .08331298828125 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 5.133333333333334;\n  l += .00640869140625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .00640869140625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur5Shader = new ft$1(e), e.frag = "#version 100\nprecision highp float;\nuniform float rgbmRange;\nuniform sampler2D TextureBlurInput;\nuniform sampler2D TextureInput;\nuniform vec2 blurDir;\nuniform vec2 outSize;\nuniform vec2 pixelRatio;\nuniform vec2 outputSize;\n#define SHADER_NAME GAUSSIAN_BLUR6\nvec2 c;\nvec4 d(const in vec3 e, const in float f) {\n  if(f <= .0)\n    return vec4(e, 1.);\n  vec4 h;\n  vec3 i = e / f;\n  h.a = clamp(max(max(i.r, i.g), max(i.b, 1e-6)), .0, 1.);\n  h.a = ceil(h.a * 255.) / 255.;\n  h.rgb = i / h.a;\n  return h;\n}\nvec3 j(const in vec4 e, const in float f) {\n  if(f <= .0)\n    return e.rgb;\n  return f * e.rgb * e.a;\n}\nvec4 k() {\n  vec3 l = .196380615234375 * (vec4(j(texture2D(TextureBlurInput, c.xy), rgbmRange), 1.)).rgb;\n  vec2 m;\n  vec2 n = pixelRatio.xy * blurDir.xy / outputSize.xy;\n  n *= outSize.y * .00075;\n  m = n * 1.411764705882353;\n  l += .2967529296875 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .2967529296875 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 3.2941176470588234;\n  l += .09442138671875 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .09442138671875 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  m = n * 5.176470588235294;\n  l += .0103759765625 * (vec4(j(texture2D(TextureBlurInput, c.xy + m.xy), rgbmRange), 1.)).rgb;\n  l += .0103759765625 * (vec4(j(texture2D(TextureBlurInput, c.xy - m.xy), rgbmRange), 1.)).rgb;\n  return vec4(l, 1.);\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = k();\n  e = d(e.rgb, rgbmRange);\n  gl_FragColor = e;\n}", 
	            this._blur6Shader = new ft$1(e));
	        }
	    }
	}

	class Ct$1 {
	    constructor(e) {
	        this._regl = e, this._renderer = new z$1(e);
	    }
	    render(e, t, n, r, i, o, a, s, c) {
	        this._initShaders(), this._createTextures(e);
	        const l = this._blurPass.render(t, n);
	        return this._combine(e, l, t, r, i, o, a, s, c);
	    }
	    _combine(e, t, n, r, i, a, s, c, l) {
	        l || this._combineTex.width === e.width && this._combineTex.height === e.height || this._combineFBO.resize(e.width, e.height);
	        let f = this._combineUniforms;
	        const {blurTex0: u, blurTex1: h, blurTex2: d, blurTex3: m, blurTex4: v} = t;
	        f || (f = this._combineUniforms = {
	            bloomFactor: 0,
	            bloomRadius: 0,
	            rgbmRange: 7,
	            TextureBloomBlur1: u,
	            TextureBloomBlur2: h,
	            TextureBloomBlur3: d,
	            TextureBloomBlur4: m,
	            TextureBloomBlur5: v,
	            TextureInput: null,
	            TextureSource: null,
	            outputSize: [ 0, 0 ]
	        }), f.noAaTextureSource = a, f.pointTextureSource = s, f.enableAA = c, f.bloomFactor = r, 
	        f.bloomRadius = i, f.TextureInput = n, f.TextureSource = e, set(f.outputSize, e.width, e.height);
	        const _ = {};
	        return a ? _.HAS_NOAA_TEX = 1 : delete _.HAS_NOAA_TEX, s ? _.HAS_POINT_TEX = 1 : delete _.HAS_POINT_TEX, 
	        this._combineShader.setDefines(_), this._renderer.render(this._combineShader, f, null, l ? null : this._combineFBO), 
	        l ? null : this._combineTex;
	    }
	    dispose() {
	        this._combineFBO && (this._combineFBO.destroy(), delete this._combineFBO), this._blurPass && (this._blurPass.dispose(), 
	        delete this._blurPass), delete this._uniforms;
	    }
	    _createTextures(e) {
	        if (this._combineTex) return;
	        this._combineTex = this._createColorTex(e, e.width, e.height, "uint8"), this._combineFBO = this._createBlurFBO(this._combineTex);
	    }
	    _createColorTex(e, t, n, r) {
	        const i = this._renderer.regl, o = r || (i.hasExtension("OES_texture_half_float") ? "float16" : "float");
	        return i.texture({
	            min: "linear",
	            mag: "linear",
	            type: o,
	            width: t || e.width,
	            height: n || e.height
	        });
	    }
	    _createBlurFBO(e) {
	        return this._renderer.regl.framebuffer({
	            width: e.width,
	            height: e.height,
	            colors: [ e ],
	            depth: !1,
	            stencil: !1
	        });
	    }
	    _initShaders() {
	        if (!this._combineShader) {
	            const e = {
	                x: 0,
	                y: 0,
	                width: (e, t) => t.outputSize[0],
	                height: (e, t) => t.outputSize[1]
	            };
	            this._blurPass = new Et$1(this._regl, !1), this._combineShader = new ft$1({
	                vert: st$1,
	                frag: "#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\nprecision highp float;\nuniform float bloomFactor;\nuniform float bloomRadius;\nuniform float rgbmRange;\nuniform sampler2D TextureBloomBlur1;\nuniform sampler2D TextureBloomBlur2;\nuniform sampler2D TextureBloomBlur3;\nuniform sampler2D TextureBloomBlur4;\nuniform sampler2D TextureBloomBlur5;\nuniform sampler2D TextureInput;\nuniform sampler2D TextureSource;\n#ifdef HAS_NOAA_TEX\nuniform sampler2D noAaTextureSource;\n#endif\n#ifdef HAS_POINT_TEX\nuniform sampler2D pointTextureSource;\n#endif\nuniform float enableAA;\nuniform vec2 outputSize;\n#define SHADER_NAME bloomCombine\nvec2 c;\nvec3 d(const in vec3 e) {\n  return vec3(e.r < .0031308 ? e.r * 12.92 : 1.055 * pow(e.r, 1. / 2.4) - .055, e.g < .0031308 ? e.g * 12.92 : 1.055 * pow(e.g, 1. / 2.4) - .055, e.b < .0031308 ? e.b * 12.92 : 1.055 * pow(e.b, 1. / 2.4) - .055);\n}\nvec3 f(const in vec4 e, const in float h) {\n  if(h <= .0)\n    return e.rgb;\n  return h * e.rgb * e.a;\n}\nfloat i(const float j, const float k) {\n  return mix(j, k * 2. - j, bloomRadius);\n}\nvec4 l(sampler2D m, vec2 n) {\n  vec4 e;\n  mediump vec2 o = vec2(1. / outputSize.x, 1. / outputSize.y);\n  vec3 u = texture2D(m, (n + vec2(-1., -1.)) * o).xyz;\n  vec3 v = texture2D(m, (n + vec2(1., -1.)) * o).xyz;\n  vec3 A = texture2D(m, (n + vec2(-1., 1.)) * o).xyz;\n  vec3 B = texture2D(m, (n + vec2(1.)) * o).xyz;\n  vec4 C = texture2D(m, n * o);\n  vec3 D = C.xyz;\n  vec3 E = vec3(.299, .587, .114);\n  float F = dot(u, E);\n  float G = dot(v, E);\n  float H = dot(A, E);\n  float I = dot(B, E);\n  float J = dot(D, E);\n  float K = min(J, min(min(F, G), min(H, I)));\n  float L = max(J, max(max(F, G), max(H, I)));\n  mediump vec2 M;\n  M.x = -((F + G) - (H + I));\n  M.y = (F + H) - (G + I);\n  float N = max((F + G + H + I) * (.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n  float O = 1. / (min(abs(M.x), abs(M.y)) + N);\n  M = min(vec2(FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), M * O)) * o;\n  vec4 P = .5 * (texture2D(m, n * o + M * (1. / 3. - .5)) + texture2D(m, n * o + M * (2. / 3. - .5)));\n  vec4 Q = P * .5 + .25 * (texture2D(m, n * o + M * -.5) + texture2D(m, n * o + M * .5));\n  float R = dot(Q.xyz, E);\n  if(R < K || R > L)\n    e = P;\n  else\n    e = Q;\n  return e;\n}\nvec4 S() {\n  vec3 T = vec3(.0);\n  const float U = .6;\n  const float V = 1.1;\n  const float W = .9;\n  const float X = .6;\n  const float Y = .3;\n  const float Z = .1;\n  T += (vec4(f(texture2D(TextureBloomBlur1, c), rgbmRange), 1.)).rgb * i(V, U);\n  T += (vec4(f(texture2D(TextureBloomBlur2, c), rgbmRange), 1.)).rgb * i(W, U);\n  T += (vec4(f(texture2D(TextureBloomBlur3, c), rgbmRange), 1.)).rgb * i(X, U);\n  T += (vec4(f(texture2D(TextureBloomBlur4, c), rgbmRange), 1.)).rgb * i(Y, U);\n  T += (vec4(f(texture2D(TextureBloomBlur5, c), rgbmRange), 1.)).rgb * i(Z, U);\n  vec4 ba;\n  if(enableAA == 1.) {\n    ba = l(TextureInput, gl_FragCoord.xy);\n  } else {\n    ba = texture2D(TextureInput, c);\n  }\n  ba.rgb = mix(vec3(.0), ba.rgb, sign(ba.a));\n  vec4 bb = texture2D(TextureSource, c);\n#ifdef HAS_NOAA_TEX\nvec4 bc = texture2D(noAaTextureSource, c);\n  bb = bc + bb * (1. - bc.a);\n#endif\nvec4 bd = vec4(.0);\n#ifdef HAS_POINT_TEX\nbd = texture2D(pointTextureSource, c);\n#endif\nfloat be = sqrt((T.r + T.g + T.b) / 3.);\n  vec4 bf = vec4(d(T * bloomFactor), be);\n  return bd + (ba + bb * (1. - ba.a)) * (1. - bd.a) + bf;\n}\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 e = S();\n  gl_FragColor = e;\n}",
	                extraCommandProps: {
	                    viewport: e
	                }
	            });
	        }
	    }
	}

	class Ot$1 extends ft$1 {
	    constructor() {
	        const e = [];
	        super({
	            vert: st$1,
	            frag: "precision highp float;\n#include <gl2_frag>\n#define SHADER_NAME COPY_DEPTH\nuniform sampler2D TextureDepth;\nuniform vec2 textureSize;\n#include <common_pack_float>\nvoid main(void) {\n  vec2 c = gl_FragCoord.xy / textureSize.xy;\n  float d = texture2D(TextureDepth, c).r;\n  glFragColor = common_encodeDepth(d);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "textureSize",
	                type: "function",
	                fn: (t, n) => (e[0] = n.TextureDepth.width, e[1] = n.TextureDepth.height, e)
	            } ],
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.TextureDepth.width,
	                    height: (e, t) => t.TextureDepth.height
	                }
	            }
	        }), this.version = 300;
	    }
	    getMeshCommand(e, t) {
	        return this.commands.copy_depth || (this.commands.copy_depth = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.copy_depth;
	    }
	}

	class wt$1 {
	    static getUniformDeclares() {
	        const e = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ], n = new Array(16);
	        return [ {
	            name: "invProjMatrix",
	            type: "function",
	            fn: (e, r) => invert$2(n, r.projMatrix)
	        }, {
	            name: "outputFovInfo",
	            type: "array",
	            length: 2,
	            fn: function(t, n) {
	                const i = Math.tan(.5 * n.fov), o = n.outSize[0] / n.outSize[1] * i;
	                return set$3(e[0], o, i, o, -i), set$3(e[1], -o, i, -o, -i), e;
	            }
	        }, {
	            name: "reprojViewProjMatrix",
	            type: "function",
	            fn: (e, n) => multiply$5([], n.prevProjViewMatrix, n.cameraWorldMatrix)
	        } ];
	    }
	    static getDefines() {
	        return {
	            HAS_SSR: 1
	        };
	    }
	    constructor(e) {
	        this._regl = e, this._renderer = new z$1(e), this._inputRGBM = 0;
	    }
	    setup(e) {
	        this._initShaders(), this._createTextures(e);
	    }
	    getSSRUniforms(e, t, n) {
	        if (!this._depthCopy) return null;
	        const r = this._depthCopy;
	        return {
	            TextureDepth: r,
	            TextureReflected: this.getMipmapTexture(),
	            ssrFactor: t || 1,
	            ssrQuality: n || 2,
	            outSize: [ r.width, r.height ],
	            fov: e.getFov() * Math.PI / 180,
	            prevProjViewMatrix: this._projViewMatrix || e.projViewMatrix,
	            cameraWorldMatrix: e.cameraWorldMatrix
	        };
	    }
	    genMipMap(e, n, r) {
	        return this.setup(e), this._mipmap(e), this.copyDepthTex(n), this._projViewMatrix || (this._projViewMatrix = []), 
	        copy$5(this._projViewMatrix, r), delete this._depthCopied, this._outputTex;
	    }
	    getPrevProjViewMatrix() {
	        return this._projViewMatrix;
	    }
	    copyDepthTex(e) {
	        if (this._depthCopied) return null;
	        if (this.setup(e), this._depthCopy) e.width === this._depthCopy.width && e.height === this._depthCopy.height || this._depthCopyFBO.resize(e.width, e.height); else {
	            this._depthCopy = this._regl.texture({
	                min: "nearest",
	                mag: "nearest",
	                mipmap: !1,
	                type: "uint8",
	                width: e.width,
	                height: e.height
	            });
	            this._depthCopyFBO = this._regl.framebuffer({
	                width: e.width,
	                height: e.height,
	                colors: [ this._depthCopy ],
	                colorFormat: "rgba"
	            });
	        }
	        return this._renderer.render(this._copyDepthShader, {
	            TextureDepth: e
	        }, null, this._depthCopyFBO), this._depthCopied = !0, this._depthCopy;
	    }
	    _mipmap(e) {
	        const t = this._targetFBO, n = Math.ceil(.5 * e.width), r = Math.ceil(.5 * e.height);
	        t.width === n && t.height === r || t.resize(n, r);
	        let i = this._blurUniforms;
	        i || (i = this._blurUniforms = {
	            rgbmRange: 7,
	            outputSize: [ 0, 0 ]
	        }), i.TextureInput = e, i.inputRGBM = +this._inputRGBM, set(i.outputSize, t.width, t.height), 
	        this._renderer.render(this._ssrQuadShader, i, null, t);
	    }
	    getMipmapTexture() {
	        return this._outputTex || (this._outputTex = this._renderer.regl.texture({
	            type: "uint8",
	            width: 2,
	            height: 2
	        })), this._outputTex;
	    }
	    dispose() {
	        this._copyDepthShader && (this._ssrQuadShader.dispose(), this._copyDepthShader.dispose(), 
	        this._targetFBO.destroy(), delete this._copyDepthShader), this._depthCopy && (this._depthCopyFBO.destroy(), 
	        delete this._depthCopy, delete this._depthCopyFBO);
	    }
	    _initShaders() {
	        if (!this._copyDepthShader) {
	            this._copyDepthShader = new Ot$1;
	            this._ssrQuadShader = new ft$1({
	                vert: st$1,
	                frag: "#version 100\nprecision mediump float;\nuniform sampler2D TextureInput;\nuniform vec2 outputSize;\n#define SHADER_NAME QUAD\nvec2 c;\nvoid main(void) {\n  c = gl_FragCoord.xy / outputSize.xy;\n  vec4 d = texture2D(TextureInput, c.xy);\n  gl_FragColor = d;\n}",
	                extraCommandProps: {
	                    viewport: {
	                        x: 0,
	                        y: 0,
	                        width: (e, t) => t.outputSize[0],
	                        height: (e, t) => t.outputSize[1]
	                    }
	                }
	            });
	        }
	    }
	    _createTextures(e) {
	        if (!this._targetFBO) {
	            const t = this._regl;
	            this._outputTex && this._outputTex.destroy(), this._outputTex = t.texture({
	                min: "linear",
	                mag: "linear",
	                type: "uint8",
	                width: e.width,
	                height: e.height
	            }), this._targetFBO = t.framebuffer({
	                width: e.width,
	                height: e.height,
	                colors: [ this._outputTex ],
	                depth: !1,
	                stencil: !1
	            });
	        }
	    }
	}

	class Pt$1 {
	    constructor(e) {
	        this._renderer = e, this.regl = e.regl, this._init();
	    }
	    render(e, t, {projViewMatrix: n, lineColor: r, lineWidth: i}) {
	        if (!e || !e.length) return;
	        this._clear(), this._resize(t);
	        const o = new ge(e);
	        this._drawExtent(o, n), this._drawOutline(r, i, t);
	    }
	    _init() {
	        this.fboExtent = this._createFBO();
	        const e = {
	            x: 0,
	            y: 0,
	            width: () => this.fboExtent.width,
	            height: () => this.fboExtent.height
	        };
	        this.extentShader = new et$1({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\n#include <get_output>  \nvoid main() {\n  mat4 c = getPositionMatrix();\n  gl_Position = projViewMatrix * modelMatrix * c * getPosition(aPosition);\n}",
	            frag: "precision highp float;\nvoid main() {\n  gl_FragColor = vec4(.0, .0, .0, 1.);\n}",
	            extraCommandProps: {
	                viewport: e,
	                cull: {
	                    enable: !1
	                }
	            }
	        }), this.outlineShader = new ft$1({
	            vert: st$1,
	            frag: "precision highp float;\nprecision highp int;\nvarying vec2 vTexCoord;\nuniform sampler2D maskTexture;\nuniform vec2 texSize;\nuniform vec3 visibleEdgeColor;\nuniform float lineWidth;\nvoid main() {\n  vec2 c = (1. / texSize) * lineWidth;\n  vec4 d = vec4(1., .0, .0, 1.) * vec4(c.x, c.y, c.x, c.y);\n  vec4 e = texture2D(maskTexture, vTexCoord + d.xy);\n  vec4 f = texture2D(maskTexture, vTexCoord - d.xy);\n  vec4 h = texture2D(maskTexture, vTexCoord + d.yw);\n  vec4 i = texture2D(maskTexture, vTexCoord - d.yw);\n  float j = (e.r - f.r) * .7;\n  float k = (h.r - i.r) * .7;\n  float l = length(vec2(j, k));\n  float m = min(e.g, f.g);\n  float n = min(h.g, i.g);\n  float o = min(m, n);\n  gl_FragColor = 1. - o > .001 ? vec4(visibleEdgeColor, 1.) * vec4(l) : vec4(.0);\n}",
	            extraCommandProps: {
	                viewport: e,
	                depth: {
	                    enable: !0,
	                    mask: !1,
	                    func: "always"
	                },
	                blend: {
	                    enable: !0,
	                    func: {
	                        src: "one",
	                        dst: "one minus src alpha"
	                    },
	                    equation: "add"
	                }
	            }
	        });
	    }
	    _drawExtent(e, t) {
	        this._renderer.render(this.extentShader, {
	            projViewMatrix: t
	        }, e, this.fboExtent);
	    }
	    _drawOutline(e, t, n) {
	        this._renderer.render(this.outlineShader, {
	            texSize: [ n.width, n.height ],
	            visibleEdgeColor: e || [ 1, 0, 0 ],
	            maskTexture: this.fboExtent,
	            lineWidth: t || 1
	        }, null, n);
	    }
	    _createFBO() {
	        return this.regl.framebuffer({
	            color: this.regl.texture({
	                width: 2,
	                height: 2,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        });
	    }
	    _clear() {
	        this.regl.clear({
	            color: [ 1, 1, 1, 1 ],
	            depth: 1,
	            framebuffer: this.fboExtent
	        });
	    }
	    dispose() {
	        this.fboExtent && (this.fboExtent.destroy(), this.extentShader.dispose(), this.outlineShader.dispose(), 
	        delete this.fboExtent);
	    }
	    _resize(e) {
	        const {width: t, height: n} = e;
	        this.fboExtent.width === t && this.fboExtent.height === n || this.fboExtent.resize(t, n);
	    }
	}

	var It$1 = "attribute vec3 aPosition;\nuniform mat4 projViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n  gl_Position = projViewMatrix * modelMatrix * c * getPosition(aPosition);\n}", Dt = "#ifdef GL_ES\nprecision highp float;\n#endif\nvec4 c(float d) {\n  const vec4 e = vec4(1., 256., 256. * 256., 256. * 256. * 256.);\n  const vec4 f = vec4(1. / 256., 1. / 256., 1. / 256., .0);\n  vec4 h = fract(d * e);\n  h -= h.gbaa * f;\n  return h;\n}\nvoid main() {\n  gl_FragColor = c(gl_FragCoord.z);\n}";

	class Ft$1 {
	    constructor(e, t) {
	        this.renderer = e, this._viewport = t, this._init();
	    }
	    _init() {
	        this._depthShader = new et$1({
	            vert: It$1,
	            frag: Dt,
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._depthFBO = this.renderer.regl.framebuffer({
	            color: this.renderer.regl.texture({
	                width: 1,
	                height: 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this._viewshedShader = new et$1({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 viewshed_projViewMatrixFromViewpoint;\nvarying vec4 viewshed_positionFromViewpoint;\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n  vec4 d = c * getPosition(aPosition);\n  gl_Position = projViewMatrix * modelMatrix * d;\n  viewshed_positionFromViewpoint = gl_Position;\n}",
	            frag: "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 viewshed_positionFromViewpoint;\nuniform sampler2D depthMap;\nfloat c(const in vec4 d) {\n  const vec4 e = vec4(1., 1. / 256., 1. / (256. * 256.), 1. / (256. * 256. * 256.));\n  float f = dot(d, e);\n  return f;\n}\nvoid main() {\n  vec3 h = (viewshed_positionFromViewpoint.xyz / viewshed_positionFromViewpoint.w) / 2. + .5;\n  vec4 d = texture2D(depthMap, h.xy);\n  float f = c(d);\n  if(h.x >= .0 && h.x <= 1. && h.y >= .0 && h.y <= 1. && h.z <= 1.) {\n    if(h.z <= f + .002) {\n      gl_FragColor = vec4(.0, 1., .0, 1.);\n    } else {\n      gl_FragColor = vec4(1., .0, .0, 1.);\n    }\n  } else {\n    gl_FragColor = vec4(.0, .0, 1., 1.);\n  }\n}",
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._fbo = this.renderer.regl.framebuffer({
	            color: this.renderer.regl.texture({
	                width: 1,
	                height: 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        });
	    }
	    render(e, t) {
	        this._resize(), this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        });
	        const n = new ge(e), r = this._createProjViewMatrix(t.eyePos, t.lookPoint, t.verticalAngle || 90, t.horizontalAngle || 90);
	        return this._renderDepth(n, r), this._renderViewshedMap(n, r, t.projViewMatrix), 
	        this._fbo;
	    }
	    _renderDepth(e, t) {
	        const n = {
	            projViewMatrix: t
	        };
	        this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._depthFBO
	        }), this.renderer.render(this._depthShader, n, e, this._depthFBO);
	    }
	    _renderViewshedMap(e, t, n) {
	        this.renderer.render(this._viewshedShader, {
	            viewshed_projViewMatrixFromViewpoint: t,
	            projViewMatrix: n,
	            depthMap: this._depthFBO
	        }, e, this._fbo);
	    }
	    _createProjViewMatrix(e, n, r, i) {
	        const o = r / i, a = Math.sqrt(Math.pow(e[0] - n[0], 2) + Math.pow(e[1] - n[1], 2) + Math.pow(e[2] - n[2], 2)), s = perspective([], i * Math.PI / 180, o, 1, a), c = lookAt([], e, n, [ 0, 1, 0 ]);
	        return multiply$5([], s, c);
	    }
	    dispose() {
	        this._fbo && this._fbo.destroy(), this._depthFBO && this._depthFBO.destroy(), this._depthShader && this._depthShader.dispose(), 
	        this._viewshedShader && this._viewshedShader.dispose();
	    }
	    _resize() {
	        const e = d(this._viewport.width.data) ? this._viewport.width.data() : this._viewport.width, t = d(this._viewport.height.data) ? this._viewport.height.data() : this._viewport.height;
	        !this._fbo || this._fbo.width === e && this._fbo.height === t || this._fbo.resize(e, t), 
	        !this._depthFBO || this._depthFBO.width === e && this._depthFBO.height === t || this._depthFBO.resize(e, t);
	    }
	}

	class Nt extends ft$1 {
	    constructor(e) {
	        super({
	            vert: st$1,
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\n#ifdef HAS_FLOODANALYSE\nuniform vec3 flood_waterColor;\nuniform sampler2D floodMap;\n#endif\n#ifdef HAS_SKYLINE\nuniform sampler2D skylineMap;\n#endif\n#ifdef HAS_VIEWSHED\nuniform vec4 viewshed_visibleColor;\nuniform vec4 viewshed_invisibleColor;\nuniform sampler2D viewshedMap;\n#endif\nuniform sampler2D sceneMap;\nvoid main() {\n  vec4 c = texture2D(sceneMap, vTexCoord);\n  glFragColor = c;\n#ifdef HAS_VIEWSHED\nvec4 d = texture2D(viewshedMap, vTexCoord);\n  if(d.r > .0) {\n    glFragColor = viewshed_invisibleColor;\n  } else if(d.g > .0) {\n    glFragColor = viewshed_visibleColor;\n  }\n  \n#endif\n#ifdef HAS_FLOODANALYSE\nvec4 e = texture2D(floodMap, vTexCoord);\n  if(e.r > .0) {\n    glFragColor = vec4(mix(flood_waterColor, glFragColor.rgb, .6), glFragColor.a);\n  }\n#endif\n#ifdef HAS_SKYLINE\nvec4 f = texture2D(skylineMap, vTexCoord);\n  if(f.r > .0 || f.g > .0 || f.b > .0) {\n    glFragColor = f;\n  }\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            extraCommandProps: {
	                viewport: e
	            }
	        });
	    }
	}

	class Rt$1 {
	    constructor(e, t) {
	        this.renderer = e, this._viewport = t, this._init();
	    }
	    _init() {
	        this._depthShader = new et$1({
	            vert: It$1,
	            frag: Dt,
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._shader = new et$1({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projViewMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\n#include <get_output>\nvarying float flood_height;\nvoid main() {\n  mat4 c = getPositionMatrix();\n  vec4 d = modelMatrix * c * getPosition(aPosition);\n  gl_Position = projViewMatrix * d;\n  flood_height = d.z;\n}",
	            frag: "#ifdef GL_ES\nprecision highp float;\n#endif\nvarying float flood_height;\nuniform float flood_waterHeight;\nvoid main() {\n  if(flood_height < flood_waterHeight) {\n    gl_FragColor = vec4(1., .0, .0, 1.);\n  } else {\n    gl_FragColor = vec4(.0);\n  }\n}",
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._fbo = this.renderer.regl.framebuffer({
	            color: this.renderer.regl.texture({
	                width: 1,
	                height: 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        });
	    }
	    render(e, t) {
	        this._resize(), this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        });
	        const n = new ge(e);
	        return this._renderScene(n, t), this._fbo;
	    }
	    _renderScene(e, t) {
	        const n = {
	            projViewMatrix: t.projViewMatrix,
	            flood_waterHeight: t.waterHeight
	        };
	        this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        }), this.renderer.render(this._shader, n, e, this._fbo);
	    }
	    dispose() {
	        this._fbo && this._fbo.destroy(), this._shader && this._shader.dispose();
	    }
	    _resize() {
	        const e = d(this._viewport.width.data) ? this._viewport.width.data() : this._viewport.width, t = d(this._viewport.height.data) ? this._viewport.height.data() : this._viewport.height;
	        !this._fbo || this._fbo.width === e && this._fbo.height === t || this._fbo.resize(e, t);
	    }
	}

	class Bt extends et$1 {
	    constructor(e) {
	        const n = [];
	        super({
	            vert: "#define SHADER_NAME HEATMAP\nfloat c(const vec2 d, const float t) {\n  return mix(d[0], d[1], t);\n}\nuniform mat4 projViewModelMatrix;\nuniform float extrudeScale;\nuniform float heatmapIntensity;\nattribute vec3 aPosition;\nvarying vec2 vExtrude;\n#ifdef HAS_HEAT_WEIGHT\nuniform lowp float heatmapWeightT;\nattribute highp vec2 aWeight;\nvarying highp float weight;\n#else\nuniform highp float heatmapWeight;\n#endif\nuniform mediump float heatmapRadius;\nconst highp float e = 1. / 255. / 16.;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n  \n#ifdef HAS_HEAT_WEIGHT\nweight = c(aWeight, heatmapWeightT);\n#else\nhighp float f = heatmapWeight;\n#endif\nmediump float h = heatmapRadius;\n  vec2 i = vec2(mod(aPosition.xy, 2.) * 2. - 1.);\n  float j = sqrt(-2. * log(e / f / heatmapIntensity / GAUSS_COEF)) / 3.;\n  vExtrude = j * i;\n  vec2 k = vExtrude * h * extrudeScale;\n  vec4 l = vec4(floor(aPosition.xy * .5) + k, aPosition.z, 1);\n  gl_Position = projViewModelMatrix * l;\n}",
	            frag: "#define SHADER_NAME HEATMAP\nprecision mediump float;\nuniform highp float heatmapIntensity;\nvarying vec2 vExtrude;\n#ifdef HAS_HEAT_WEIGHT\nvarying highp float weight;\n#else\nuniform highp float heatmapWeight;\n#endif\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n  \n#ifndef HAS_HEAT_WEIGHT\nhighp float c = heatmapWeight;\n#endif\nfloat d = -.5 * 3. * 3. * dot(vExtrude, vExtrude);\n  float e = c * heatmapIntensity * GAUSS_COEF * exp(d);\n  gl_FragColor = vec4(e, 1., 1., 1.);\n}",
	            uniforms: [ {
	                name: "extrudeScale",
	                type: "function",
	                fn: function(e, t) {
	                    return t.resolution / t.dataResolution * t.tileRatio;
	                }
	            }, {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: function(e, r) {
	                    return multiply$5(n, r.projViewMatrix, r.modelMatrix);
	                }
	            } ],
	            extraCommandProps: v$1({}, e && e.extraCommandProps || {}, {
	                blend: {
	                    enable: !0,
	                    func: {
	                        src: "one",
	                        dst: "one"
	                    },
	                    equation: "add"
	                }
	            })
	        });
	    }
	}

	var Lt$1 = [ -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, 1, -1, 1 ], Ht = "#if __VERSION__ == 100\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod : enable\n#define textureCubeLod(tex, uv, lod) textureCubeLodEXT(tex, uv, lod)\n#else\n#define textureCubeLod(tex, uv, lod) textureCube(tex, uv, lod)\n#endif\n#else\n#define textureCubeLod(tex, uv, lod) textureLod(tex, uv, lod)\n#endif\nprecision highp float;\n#include <gl2_frag>\n#include <hsv_frag>\nuniform vec3 hsv;\nvarying vec3 vWorldPos;\n#ifdef USE_AMBIENT\nuniform vec3 diffuseSPH[9];\n#else\nuniform samplerCube cubeMap;\nuniform float bias;\nuniform float size;\n#endif\nuniform float environmentExposure;\n#if defined(INPUT_RGBM) || defined(ENC_RGBM)\nuniform float rgbmRange;\n#endif\nvec4 c(const in vec3 d, const in float e) {\n  if(e <= .0)\n    return vec4(d, 1.);\n  vec4 f;\n  vec3 h = d / e;\n  f.a = clamp(max(max(h.r, h.g), max(h.b, 1e-6)), .0, 1.);\n  f.a = ceil(f.a * 255.) / 255.;\n  f.rgb = h / f.a;\n  return f;\n}\nvec3 i(const in vec4 d, const in float e) {\n  if(e <= .0)\n    return d.rgb;\n  return e * d.rgb * d.a;\n}\nvec4 j(const in samplerCube k, const in vec3 l, const in float m, const in float n) {\n  vec3 o = l;\n  return textureCubeLod(k, o, n);\n}\nvec3 u(const in vec3 v, const in vec3 A[9]) {\n  float x = v.x;\n  float y = v.y;\n  float z = v.z;\n  vec3 B = (A[0] + A[1] * x + A[2] * y + A[3] * z + A[4] * z * x + A[5] * y * z + A[6] * y * x + A[7] * (3. * z * z - 1.) + A[8] * (x * x - y * y));\n  return max(B, vec3(.0));\n}\nfloat C(const in vec2 D) {\n  vec3 E = fract(vec3(D.xyx) * .1031);\n  E += dot(E, E.yzx + 19.19);\n  return fract((E.x + E.y) * E.z);\n}\nvoid main() {\n  vec4 F;\n#ifdef USE_AMBIENT\nvec3 v = normalize(vWorldPos + mix(-.5 / 255., .5 / 255., C(gl_FragCoord.xy)) * 2.);\n  F = vec4(u(v, diffuseSPH), 1.);\n  if(length(hsv) > .0) {\n    F.rgb = hsv_apply(F.rgb, hsv);\n  }\n#ifdef ENC_RGBM\nF = c(F.rgb, rgbmRange);\n#endif\n#else\nF = j(cubeMap, normalize(vWorldPos), size, bias);\n#endif\nF.rgb *= environmentExposure;\n#ifdef ENC_RGBM\n#if !defined(USE_AMBIENT) && defined(INPUT_RGBM)\nif(length(hsv) > .0) {\n    F.rgb = hsv_apply(i(F, rgbmRange).rgb, hsv);\n    F = c(F.rgb, rgbmRange);\n  }\n#endif\nglFragColor = vec4(clamp(F.rgb, .0, 1.), 1.);\n#elif !defined(USE_AMBIENT) && defined(INPUT_RGBM)\nglFragColor = vec4(i(F, rgbmRange), 1.);\n  if(length(hsv) > .0) {\n    glFragColor.rgb = hsv_apply(clamp(glFragColor.rgb, .0, 1.), hsv);\n  }\n#else\nif(length(hsv) > .0) {\n    F.rgb = hsv_apply(F.rgb, hsv);\n  }\n  glFragColor = F;\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}";

	class zt extends et$1 {
	    constructor() {
	        super({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 transformMatrix;\nvarying vec3 vWorldPos;\nvoid main() {\n  vWorldPos = aPosition;\n  mat4 c = mat4(mat3(viewMatrix) * transformMatrix);\n  vec4 d = projMatrix * c * vec4(vWorldPos, 1.);\n  gl_Position = d.xyww;\n}",
	            frag: Ht,
	            extraCommandProps: {
	                depth: {
	                    enable: !0,
	                    range: [ 1, 1 ],
	                    func: "lequal"
	                },
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.resolution[0],
	                    height: (e, t) => t.resolution[1]
	                }
	            }
	        }), this.version = 300;
	    }
	    setMode(e, t, n) {
	        const r = {};
	        return e && (r.INPUT_RGBM = 1), t && (r.ENC_RGBM = 1), 0 === n && (r.USE_AMBIENT = 1), 
	        this._skyboxMesh ? this._skyboxMesh[0].setDefines(r) : this._meshDefines = r, this;
	    }
	    draw(e) {
	        return this._skyboxMesh || this._createSkyboxMesh(e), super.draw(e, this._skyboxMesh);
	    }
	    _createSkyboxMesh(e) {
	        const t = new J$1({
	            aPosition: new Int8Array(Lt$1)
	        }, null, Lt$1.length / 3);
	        t.generateBuffers(e), this._skyboxMesh = [ new fe(t) ], this._meshDefines && (this._skyboxMesh[0].setDefines(this._meshDefines), 
	        delete this._meshDefines);
	    }
	    dispose() {
	        if (this._skyboxMesh) {
	            const e = this._skyboxMesh[0];
	            e.geometry.dispose(), e.dispose();
	        }
	        return delete this._skyboxMesh, super.dispose();
	    }
	}

	class kt extends et$1 {
	    constructor(e) {
	        const n = {
	            blend: {
	                enable: !0,
	                func: {
	                    src: "one",
	                    dst: "one minus src alpha"
	                },
	                equation: "add"
	            },
	            viewport: {
	                x: 0,
	                y: 0,
	                width: (e, t) => t.inputTexture.width,
	                height: (e, t) => t.inputTexture.height
	            }
	        };
	        e && e.extraCommandProps && v$1(n, e.extraCommandProps);
	        const r = [], i = [];
	        super({
	            vert: "#define SHADER_NAME HEATMAP_DISPLAY\nuniform mat4 projViewModelMatrix;\nattribute vec3 aPosition;\nvoid main() {\n  gl_Position = projViewModelMatrix * vec4(aPosition, 1.);\n}",
	            frag: "#define SHADER_NAME HEATMAP_DISPLAY\nprecision mediump float;\nuniform sampler2D inputTexture;\nuniform sampler2D colorRamp;\nuniform vec2 textureOutputSize;\nuniform float heatmapOpacity;\nvoid main() {\n  vec2 c = gl_FragCoord.xy / textureOutputSize.xy;\n  float t = texture2D(inputTexture, c).r;\n  vec4 d = texture2D(colorRamp, vec2(t, .5));\n  gl_FragColor = d * heatmapOpacity;\n}",
	            uniforms: [ {
	                name: "projViewModelMatrix",
	                type: "function",
	                fn: function(e, n) {
	                    return multiply$5(r, n.projViewMatrix, n.modelMatrix);
	                }
	            }, {
	                name: "textureOutputSize",
	                type: "function",
	                fn: function(e) {
	                    return i[0] = e.drawingBufferWidth, i[1] = e.drawingBufferHeight, i;
	                }
	            } ],
	            extraCommandProps: n
	        });
	    }
	}

	class jt extends et$1 {
	    constructor(e = {}) {
	        super({
	            vert: "precision highp float;\nprecision highp sampler2D;\nconst float c = 3.141592653589793;\nuniform mat4 projMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nvarying vec2 vuv;\nvarying vec3 vpos;\nvarying vec3 vnormal;\nvarying mat3 vtbnMatrix;\nvec4 d(mat4 e, mat4 f, vec3 h) {\n  return e * modelMatrix * f * vec4(h, 1.);\n}\nvec3 i(in vec3 h, in vec3 j) {\n  return normalize(h + j);\n}\nmat3 k(in vec3 l) {\n  vec3 t = normalize(cross(vec3(.0, .0, 1.), l));\n  vec3 b = normalize(cross(l, t));\n  return mat3(t, b, l);\n}\nvoid m() {\n  \n}\nvoid main(void) {\n  vuv = aTexCoord;\n  vpos = (modelMatrix * vec4(aPosition, 1.)).xyz;\n  vnormal = aNormal;\n  vtbnMatrix = k(vnormal);\n  gl_Position = d(projMatrix, viewMatrix, vpos);\n  m();\n}",
	            frag: "precision highp float;\nprecision highp sampler2D;\nuniform sampler2D texWaveNormal;\nuniform sampler2D texWavePerturbation;\nuniform vec3 octaveTextureRepeat;\nuniform vec4 waveParams;\nuniform vec2 waveDirection;\nuniform vec4 waterColor;\nuniform vec3 lightingDirection;\nuniform vec3 lightingIntensity;\nuniform vec3 camPos;\nuniform float timeElapsed;\nvarying vec2 vuv;\nvarying vec3 vpos;\nvarying vec3 vnormal;\nvarying mat3 vtbnMatrix;\nconst vec2 c = vec2(6. / 25., 5. / 24.);\nvec2 d(sampler2D e, vec2 f) {\n  return 2. * texture2D(e, f).rg - 1.;\n}\nfloat h(vec2 f) {\n  return texture2D(texWavePerturbation, f).b;\n}\nvec3 i(sampler2D e, vec2 f) {\n  return 2. * texture2D(e, f).rgb - 1.;\n}\nfloat j(vec2 f, float k) {\n  return fract(k);\n}\nfloat l(vec2 f, float k) {\n  float m = j(f, k);\n  return 1. - abs(1. - 2. * m);\n}\nvec3 n(sampler2D o, vec2 f, float k, float u) {\n  float v = waveParams[2];\n  float A = waveParams[3];\n  vec2 B = d(o, f) * v;\n  float m = j(f, k + u);\n  float C = l(f, k + u);\n  vec2 D = f;\n  D -= B * (m + A);\n  D += u;\n  D += (k - m) * c;\n  return vec3(D, C);\n}\nconst float E = .3737;\nconst float F = 7.77;\nvec3 G(sampler2D H, sampler2D I, vec2 f, vec2 J, float k) {\n  float K = waveParams[0];\n  vec2 L = k * -J;\n  float M = h(f * E) * F;\n  vec3 N = n(I, f + L, k + M, .0);\n  vec3 O = n(I, f + L, k + M, .5);\n  vec3 P = i(H, N.xy) * N.z;\n  vec3 Q = i(H, O.xy) * O.z;\n  vec3 R = normalize(P + Q);\n  R.xy *= K;\n  R.z = sqrt(1. - dot(R.xy, R.xy));\n  return R;\n}\nvec3 S(vec2 f, float k) {\n  float T = waveParams[1];\n  return G(texWaveNormal, texWavePerturbation, f * T, waveDirection, k);\n}\nconst float U = 3.141592653589793;\nconst float V = 1. / U;\nconst float W = .3183098861837907;\nconst float X = 1.570796326794897;\nstruct PBRShadingWater {\n  float NdotL;\n  float NdotV;\n  float NdotH;\n  float VdotH;\n  float LdotH;\n  float VdotN;\n};\nfloat Y = 2.2;\nvec3 Z(float ba, vec3 bb, float bc) {\n  return bb + (bc - bb) * pow(1. - ba, 5.);\n}\nfloat bd(float be, float bf) {\n  float bg = bf * bf;\n  float bh = be * be;\n  float bi = pow((bh * (bg - 1.) + 1.), Y) * U;\n  return bg / bi;\n}\nfloat bj(float bk) {\n  return .25 / (bk * bk);\n}\nvec3 bl(in PBRShadingWater bm, float bf, vec3 bn, float bo) {\n  vec3 bp = Z(bm.VdotH, bn, bo);\n  float bq = bd(bm.NdotH, bf);\n  float br = bj(bm.LdotH);\n  return (bq * br) * bp;\n}\nvec3 bs(const vec3 x) {\n  return (x * (2.51 * x + .03)) / (x * (2.43 * x + .59) + .14);\n}\nconst float bt = 2.2;\nconst float bu = .4545454545;\nvec4 bv(vec4 bw) {\n  return vec4(pow(bw.rgb, vec3(bu)), bw.w);\n}\nvec3 bx(vec3 bw) {\n  return pow(bw, vec3(bt));\n}\nconst vec3 by = vec3(.02, 1., 5.);\nconst vec2 bz = vec2(.02, .1);\nconst float bf = .06;\nconst vec3 bA = vec3(0, .6, .9);\nconst vec3 bB = vec3(.72, .92, 1.);\nPBRShadingWater bC;\nvec3 bD(in float bE, in vec3 bF, in vec3 bG) {\n  float bH = pow((1. - bE), by[2]);\n  return mix(bG, bF, bH);\n}\nvec3 bI(in vec3 bJ, in vec3 bK, in vec3 bL, vec3 bw, in vec3 bM, in vec3 bN, in float bO) {\n  vec3 bP = bx(bw);\n  vec3 bQ = normalize(bL + bK);\n  bC.NdotL = clamp(dot(bJ, bL), .0, 1.);\n  bC.NdotV = clamp(dot(bJ, bK), .001, 1.);\n  bC.VdotN = clamp(dot(bK, bJ), .001, 1.);\n  bC.NdotH = clamp(dot(bJ, bQ), .0, 1.);\n  bC.VdotH = clamp(dot(bK, bQ), .0, 1.);\n  bC.LdotH = clamp(dot(bL, bQ), .0, 1.);\n  float bR = max(dot(bN, bK), .0);\n  vec3 bS = bx(bB);\n  vec3 bT = bx(bA);\n  vec3 bB = bD(bR, bS, bT);\n  float bU = max(dot(bN, bL), .0);\n  bB *= .1 + bU * .9;\n  float bV = clamp(bO, .8, 1.);\n  vec3 bW = Z(bC.VdotN, vec3(by[0]), by[1]) * bB * bV;\n  vec3 bX = bP * mix(bB, bU * bM * V, 2. / 3.) * bV;\n  vec3 bY = vec3(.0);\n  if(bR > .0 && bU > .0) {\n    vec3 bZ = bl(bC, bf, vec3(bz[0]), bz[1]);\n    vec3 ca = bM * V * bO;\n    bY = bC.NdotL * ca * bZ;\n  }\n  return bs(bW + bX + bY);\n}\nvoid main() {\n  vec3 bN = vnormal;\n  vec3 cb = S(vuv, timeElapsed);\n  vec3 bJ = normalize(vtbnMatrix * cb);\n  vec3 bK = -normalize(vpos - camPos);\n  vec3 bL = normalize(-lightingDirection);\n  float bO = 1.;\n  vec4 cc = vec4(bI(bJ, bK, bL, waterColor.rgb, lightingIntensity, bN, bO), waterColor.w);\n  gl_FragColor = bv(cc);\n}",
	            defines: e.defines || {},
	            extraCommandProps: e.extraCommandProps || {}
	        });
	    }
	}

	class Vt extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "precision highp float;\nuniform sampler2D texture;\nuniform vec2 size;\nuniform float enableSharpen;\nuniform float sharpFactor;\nuniform float pixelRatio;\nvec2 c;\nvec3 d(const in vec3 e, const float f) {\n  vec2 h = pixelRatio / size.xy;\n  float i = .0;\n  vec4 j = texture2D(texture, c + h * vec2(-1., -1.));\n  j.rgb = mix(vec3(.0), j.rgb, sign(j.a));\n  i += mix(.0, 1., sign(j.a));\n  vec4 k = texture2D(texture, c + h * vec2(1.));\n  k.rgb = mix(vec3(.0), k.rgb, sign(k.a));\n  i += mix(.0, 1., sign(k.a));\n  vec4 l = texture2D(texture, c + h * vec2(1., -1.));\n  l.rgb = mix(vec3(.0), l.rgb, sign(l.a));\n  i += mix(.0, 1., sign(l.a));\n  vec4 m = texture2D(texture, c + h * vec2(-1., 1.));\n  m.rgb = mix(vec3(.0), m.rgb, sign(m.a));\n  i += mix(.0, 1., sign(m.a));\n  return e + f * (i * e - j.rgb - l.rgb - m.rgb - k.rgb);\n}\nvoid main() {\n  c = gl_FragCoord.xy / size;\n  vec4 e = texture2D(texture, c);\n  if(enableSharpen == 1.) {\n    e.rgb = d(e.rgb, sharpFactor);\n  }\n  gl_FragColor = e;\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.size[0],
	                    height: (e, t) => t.size[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, t) {
	        return this.commands.copy || (this.commands.copy = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.copy;
	    }
	}

	const Gt$1 = [];

	class Ut {
	    constructor(e, t) {
	        this._regl = e, this._viewport = t, this._init();
	    }
	    _init() {
	        this._shader = new et$1({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 viewModelMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nvarying vec4 vWorldPosition;\n#include <get_output>\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  vec4 e = modelMatrix * d * c;\n  gl_Position = projMatrix * viewModelMatrix * d * c;\n  vWorldPosition = e;\n}",
	            frag: "precision mediump float;\nvarying vec4 vWorldPosition;\nuniform vec2 fogDist;\nuniform vec3 cameraPosition;\nvoid main() {\n  vec3 c = vec3(vWorldPosition[0] - cameraPosition[0], vWorldPosition[1] - cameraPosition[1], vWorldPosition[2] - cameraPosition[2]);\n  float d = length(c);\n  float e = clamp(1. - (d - fogDist.x) / (fogDist.y - fogDist.x), .0, 1.);\n  if(vWorldPosition[2] < .01) {\n    gl_FragColor = vec4(e, .0, .0, 1.);\n  } else {\n    gl_FragColor = vec4(e, 1., .0, 1.);\n  }\n}",
	            uniforms: [ {
	                name: "viewModelMatrix",
	                type: "function",
	                fn: function(e, n) {
	                    return multiply$5(Gt$1, n.viewMatrix, n.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._fbo = this._regl.framebuffer({
	            color: this._regl.texture({
	                width: this._viewport.width(),
	                height: this._viewport.height(),
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this._scene = new ge, this.renderer = new z$1(this._regl);
	    }
	    render(e, t) {
	        this._resize(), this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        }), this._scene.setMeshes(e);
	        return this.renderer.render(this._shader, {
	            projMatrix: t.projMatrix,
	            viewMatrix: t.viewMatrix,
	            cameraPosition: t.cameraPosition,
	            fogDist: t.fogDist
	        }, this._scene, this._fbo), this._fbo;
	    }
	    dispose() {
	        this._fbo && this._fbo.destroy(), this._shader && this._shader.dispose();
	    }
	    _resize() {
	        const e = d(this._viewport.width.data) ? this._viewport.width.data() : this._viewport.width, t = d(this._viewport.height.data) ? this._viewport.height.data() : this._viewport.height;
	        !this._fbo || this._fbo.width === e && this._fbo.height === t || this._fbo.resize(e, t);
	    }
	}

	class Xt extends ft$1 {
	    constructor() {
	        super({
	            vert: st$1,
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\n#ifdef HAS_RAIN\nuniform sampler2D ripplesMap;\n#endif\n#ifdef HAS_SNOW\nuniform sampler2D normalMap;\n#endif\n#ifdef HAS_FOG\nuniform vec3 fogColor;\n#endif\nuniform sampler2D sceneMap;\nuniform sampler2D mixFactorMap;\nuniform float time;\nuniform vec2 resolution;\nfloat c(float a, float b, float w) {\n  return a + w * (b - a);\n}\n#define HASHSCALE1 .1031\n#define HASHSCALE3 vec3(.1031, .1030, .0973)\n#define HASHSCALE4 vec3(.1031, .1030, .0973, .1099)\nfloat d = .1;\nfloat e = .2;\nfloat f = .5;\nfloat h = 10.;\nfloat i(float p) {\n  vec3 j = fract(vec3(p) * HASHSCALE1);\n  j += dot(j, j.yzx + 19.19);\n  return fract((j.x + j.y) * j.z);\n}\nvec2 k(vec2 p) {\n  vec3 j = fract(vec3(p.xyx) * HASHSCALE3);\n  j += dot(j, j.yzx + 19.19);\n  return fract((j.xx + j.yz) * j.zy);\n}\nvec2 l(vec2 m) {\n  float x = fract(sin(dot(m.xy, vec2(122.9898, 783.233))) * 43758.5453);\n  float y = fract(sin(dot(m.xy, vec2(457.6537, 537.2793))) * 37573.5913);\n  return vec2(x, y);\n}\nvec3 n(vec2 o, float u) {\n  vec3 v = vec3(.0);\n  o = o * (2. + u);\n  float A = o.y * (((i(u) * 2. - 1.) * .5 + 1.) * e);\n  float B = (f * time);\n  o += vec2(A, B);\n  vec2 C = k(floor(o) + 31.1759 * u);\n  o = fract(o);\n  o -= (C * 2. - 1.) * .35;\n  o -= .5;\n  float r = length(o);\n  float D = .05 * (1. + .3 * sin(time * d));\n  float E = smoothstep(D, -D, r);\n  vec3 F = vec3(E) * C.x;\n  return F;\n}\nvec3 G() {\n  vec3 v = vec3(0);\n  vec2 o = gl_FragCoord.xy / resolution.xy;\n  o *= vec2(resolution.x / resolution.y, 1.);\n  for(float H = 0.; H < h; H++) {\n    v += n(o, H);\n  }\n  return v;\n}\nvec3 I(vec4 J, vec4 K, float L) {\n  float M = K.b;\n  vec3 N = vec3(1.);\n  if(L < 1.) {\n    float r = c(.5, N.x, M);\n    float g = c(.5, N.y, M);\n    float b = c(.5, N.z, M);\n    return vec3(r, g, b);\n  } else {\n    float r = c(J.r, N.x, M);\n    float g = c(J.g, N.y, M);\n    float b = c(J.b, N.z, M);\n    return vec3(r, g, b);\n  }\n}\nvoid main() {\n  vec4 J = texture2D(sceneMap, vTexCoord);\n  glFragColor = J;\n  vec4 O = texture2D(mixFactorMap, vTexCoord);\n#ifdef HAS_RAIN\nvec4 P = texture2D(ripplesMap, vTexCoord);\n  if(O.g < 1.) {\n    J = mix(J, P, .4);\n  }\n  glFragColor = J;\n#endif\n#ifdef HAS_SNOW\nvec3 Q = G();\n  glFragColor = vec4(J.rgb + Q, J.a);\n#endif\n#ifdef HAS_FOG\nfloat R = O.r;\n  vec3 S = mix(fogColor, glFragColor.rgb, R);\n  glFragColor = vec4(S, J.a);\n#endif\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            extraCommandProps: {
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.resolution[0],
	                    height: (e, t) => t.resolution[1]
	                }
	            }
	        });
	    }
	}

	const Wt = [], Kt = [ .03, .03, .03 ], qt = [], Yt = [], Jt = [], Zt = fromRotationTranslation$1([], fromEuler([], 90, 0, 0), [ 0, 0, 0 ]);

	class Qt {
	    constructor(e, t) {
	        this._regl = e, this._viewport = t, this._init();
	    }
	    _init() {
	        this._shader = new et$1({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\nuniform mat4 projMatrix;\nuniform mat4 viewModelMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nvarying vec2 vTexCoord;\n#include <get_output>\nvoid main() {\n  vec4 c = getPosition(aPosition);\n  mat4 d = getPositionMatrix();\n  gl_Position = projMatrix * viewModelMatrix * d * c;\n  vTexCoord = aTexCoord;\n}",
	            frag: "#if __VERSION__ == 100\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n#endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nvarying vec2 vTexCoord;\nuniform float time;\nvec3 c(vec2 p) {\n  vec3 q = vec3(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)), dot(p, vec2(419.2, 371.9)));\n  return fract(sin(q) * 43758.5453);\n}\nfloat d(in vec2 x) {\n  vec2 p = floor(x);\n  vec2 e = fract(x);\n  float h = .0;\n  for(int i = -2; i <= 2; i++)\n    for(int k = -2; k <= 2; k++) {\n      vec2 g = vec2(float(k), float(i));\n      vec3 l = c(p + g);\n      vec2 r = g - e + l.xy;\n      float m = sqrt(dot(r, r));\n      float n = max(mix(smoothstep(.99, .999, max(cos(m - time * 2. + (l.x + l.y) * 5.), 0.)), 0., m), 0.);\n      h += n;\n    }\n  return h;\n}\nvoid main() {\n  vec2 u = vTexCoord;\n  float e = d(24. * u) * smoothstep(.0, .2, sin(u.x * 3.151592) * sin(u.y * 3.141592));\n  vec3 v = vec3(-dFdx(e), -dFdy(e), .0);\n  glFragColor = vec4(v, 1.);\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	            uniforms: [ {
	                name: "viewModelMatrix",
	                type: "function",
	                fn: function(e, n) {
	                    return multiply$5(Wt, n.viewMatrix, n.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: this._viewport
	            }
	        }), this._shader.version = 300, this._fbo = this._regl.framebuffer({
	            color: this._regl.texture({
	                width: this._viewport.width(),
	                height: this._viewport.height(),
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this._scene = new ge, this.renderer = new z$1(this._regl);
	    }
	    _transformRipples(e) {
	        const r = e.coordinateToPointAtRes(e.getCenter(), e.getGLRes());
	        let i = e.getGLScale() / e.getGLScale(this._fixZoom);
	        const o = set$4(Yt, i, i, i), s = multiply$4(o, Kt, o), c = identity$2(Jt);
	        fromRotationTranslationScale(c, fromEuler(qt, 0, 0, 0), [ r.x, r.y, 0 ], s), 
	        multiply$5(c, c, Zt), this._mesh.setLocalTransform(c);
	    }
	    _createRipplesMask(e) {
	        this._fixZoom = e.getZoom();
	        const t = 800 * Math.pow(2, 16.685648411389433 - this._fixZoom), n = {};
	        n.POSITION = [ -t, 0, -t, t, 0, -t, -t, 0, t, t, 0, t ], n.NORMAL = [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ], 
	        n.TEXCOORD_0 = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
	        const r = new J$1(n, [ 3, 1, 0, 0, 2, 3 ], 0, {
	            positionAttribute: "POSITION",
	            normalAttribute: "NORMAL",
	            uv0Attribute: "TEXCOORD_0"
	        });
	        r.generateBuffers(this._regl);
	        const i = new Q$1;
	        return new fe(r, i);
	    }
	    render(e, t) {
	        this._resize(), this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this._fbo
	        }), this._mesh = this._mesh || this._createRipplesMask(e), this._scene.setMeshes(this._mesh), 
	        this._transformRipples(e);
	        return this.renderer.render(this._shader, {
	            projMatrix: t.projMatrix,
	            viewMatrix: t.viewMatrix,
	            time: t.time
	        }, this._scene, this._fbo), this._fbo;
	    }
	    dispose() {
	        this._fbo && this._fbo.destroy(), this._shader && this._shader.dispose();
	    }
	    _resize() {
	        const e = d(this._viewport.width.data) ? this._viewport.width.data() : this._viewport.width, t = d(this._viewport.height.data) ? this._viewport.height.data() : this._viewport.height;
	        !this._fbo || this._fbo.width === e && this._fbo.height === t || this._fbo.resize(e, t);
	    }
	}

	const $t = [];

	class en {
	    constructor(e, t, n) {
	        this._regl = e, this.joints = t, this.inverseBindMatrices = [], this.jointMatrices = [], 
	        this.jointData = new Float32Array(16 * t.length);
	        for (let e = 0; e < t.length; ++e) this.inverseBindMatrices.push(new Float32Array(n.buffer, n.byteOffset + 16 * Float32Array.BYTES_PER_ELEMENT * e, 16)), 
	        this.jointMatrices.push(new Float32Array(this.jointData.buffer, 16 * Float32Array.BYTES_PER_ELEMENT * e, 16));
	        this.jointTexture = e.texture(), this.jointTextureSize = [ 4, 6 ];
	    }
	    updateJointTexture(e) {
	        this.jointTexture || this.jointTexture.texture({
	            width: 4,
	            height: e
	        });
	    }
	    setJointTexture(e) {
	        this.jointTexture = e;
	    }
	    update(e) {
	        invert$2($t, e);
	        for (let e = 0; e < this.joints.length; ++e) {
	            const n = this.jointMatrices[e];
	            multiply$5(n, $t, this.joints[e].nodeMatrix), multiply$5(n, n, this.inverseBindMatrices[e]);
	        }
	        this.jointTexture({
	            width: 4,
	            type: "float",
	            height: this.joints.length,
	            data: this.jointData
	        });
	    }
	    dispose() {
	        this.jointTexture.destroy();
	    }
	}

	const tn = [ 0, 0, 0 ], nn = [ 0, 0, 0, 1 ], rn = [ 1, 1, 1 ], on = [];

	class an {
	    constructor(e = [ 0, 0, 0 ], t = [ 0, 0, 0, 1 ], n = [ 1, 1, 1 ]) {
	        this.translation = e, this.rotation = t, this.scale = n;
	    }
	    getMatrix() {
	        return fromRotationTranslationScale(on, this.rotation, this.translation, this.scale);
	    }
	    decompose(e) {
	        getTranslation$1(this.translation, e), getRotation(this.rotation, e), getScaling(this.scale, e);
	    }
	    update(e) {
	        e && (e.translation && !equals$4(e.translation, tn) && copy$4(this.translation, e.translation), 
	        e.rotation && !equals$2(e.rotation, nn) && copy$2(this.rotation, e.rotation), e.scale && !equals$4(e.scale, rn) && copy$4(this.scale, e.scale));
	    }
	}

	class sn {
	    constructor(e) {
	        this._init(e);
	    }
	    _init(e) {
	        this.geometry = e.geometry, this.nodeMatrix = e.nodeMatrix, this.materialInfo = e.materialInfo, 
	        this.extraInfo = e.extraInfo, this.animationMatrix = e.animationMatrix, this.morphWeights = e.morphWeights, 
	        this.skin = e.skin;
	    }
	    copy() {
	        this.copyGeometry || (this.copyGeometry = this._copyGeometry(this.geometry));
	    }
	    createCopyBarycentric() {
	        this.copyGeometry && !this.copyGeometry.data.aBarycentric && (this.copyGeometry.buildUniqueVertex(), 
	        this.copyGeometry.createBarycentric("aBarycentric"));
	    }
	    _copyGeometry(e) {
	        const t = e.data, n = e.elements, r = {};
	        for (const n in t) if (b$1(t[n])) r[n] = t[n].slice(); else if (t[n].buffer && t[n].buffer.destroy) r[n] = {
	            buffer: t[n].buffer
	        }, b$1(t[n].array) && (r[n].array = t[n].array.slice()); else {
	            const t = e._getAttributeData(n);
	            r[n] = n !== e.desc.positionAttribute ? t : t.slice();
	        }
	        const i = void 0 !== n.length ? n.slice() : n, o = e.count, a = JSON.parse(JSON.stringify(e.desc)), s = new J$1(r, i, o, a);
	        return s.properties = e.properties, s;
	    }
	}

	let cn = 0;

	class ln {
	    constructor(e, t) {
	        this.gltf = e, this.regl = t, this.geometries = [], t && (this._emptyTexture = t.texture({
	            width: 2,
	            height: 2
	        }));
	    }
	    getMeshesInfo() {
	        if (!this.gltf) return null;
	        if (this.geometries.length) return this.geometries;
	        this._createTextures(this.gltf.textures), this._createSkins(this.gltf.skins);
	        return this.gltf.scenes[0].nodes.forEach(e => {
	            this._parserNode(e, this.geometries);
	        }), this.geometries;
	    }
	    _createSkins(e) {
	        if (e) {
	            this._skinMap = {};
	            for (let t = 0; t < e.length; t++) {
	                const n = e[t];
	                n.joints = n.joints.map(e => this.gltf.nodes[e]), this._skinMap[t] = new en(this.regl, n.joints, n.inverseBindMatrices.array), 
	                delete n.inverseBindMatrices;
	            }
	        }
	    }
	    _createTextures(e) {
	        if (e) {
	            this._textureMap = {};
	            for (let t = 0; t < e.length; t++) {
	                const n = e[t];
	                this._textureMap[t] || (this._textureMap[t] = this._toTexture(n), delete n.image);
	            }
	        }
	    }
	    dispose() {
	        this._emptyTexture && this._emptyTexture.destroy();
	        const e = this.getMeshesInfo();
	        if (e) {
	            e.forEach(e => {
	                e.geometry.dispose();
	                for (const t in e.materialInfo) {
	                    const n = e.materialInfo[t];
	                    n.destroy && !n[D$1] && n.destroy();
	                }
	            });
	            for (const e in this._textureMap) {
	                const t = this._textureMap[e];
	                t.destroy && !t[D$1] && t.destroy();
	            }
	            for (const e in this._skinMap) {
	                const t = this._skinMap[e];
	                t.jointTexture && !t.jointTexture[D$1] && t.jointTexture.destroy();
	            }
	            for (const e in this.gltf.nodes) {
	                const t = this.gltf.nodes[e];
	                t.skin && t.skin.jointTexture && !t.skin.jointTexture[D$1] && t.skin.jointTexture.destroy();
	            }
	            delete this.gltf;
	        }
	    }
	    updateAnimation(t, n, r, i) {
	        const o = this.gltf;
	        if (!o) return;
	        if (cn = o.animations ? k$2.getAnimationTimeSpan(o, i) : null, !cn) return;
	        const a = n ? t * r * .001 % (cn.max - cn.min) + cn.min : t * r * .001 + cn.min;
	        this._startTime || (this._startTime = t), o.scenes[0].nodes.forEach(e => {
	            this._updateNodeMatrix(i, a, e);
	        });
	        for (const e in this.gltf.nodes) {
	            const t = this.gltf.nodes[e];
	            t.skin && t.skin.update(t.nodeMatrix);
	        }
	    }
	    isFirstLoop(t, n, r) {
	        const i = this.gltf;
	        return !this._startTime || !i || (cn = i.animations ? k$2.getAnimationTimeSpan(i, r) : null, 
	        (t - this._startTime) * n * .001 / (cn.max - cn.min) < 1);
	    }
	    hasSkinAnimation() {
	        return !!this._isAnimation;
	    }
	    _updateNodeMatrix(n, r, i, o) {
	        if (i.trs) {
	            const t = k$2.getAnimationClip(this.gltf, Number(i.nodeIndex), r, n);
	            t.weights && this._updateMorph(i, t.weights), i.trs.update(t);
	        }
	        o ? multiply$5(i.nodeMatrix, o, i.matrix || i.trs.getMatrix()) : copy$5(i.nodeMatrix, i.matrix || i.trs.getMatrix());
	        const a = i.nodeMatrix;
	        i.children && i.children.forEach(e => {
	            this._updateNodeMatrix(n, r, e, a);
	        }), this._updateSkinTexture(i);
	    }
	    _updateMorph(e, t) {
	        const n = t.length;
	        if (!e.influencesList) {
	            e.influencesList = [];
	            for (let t = 0; t < n; t++) e.influencesList[t] = [ t, 0 ];
	        }
	        const r = e.influencesList;
	        for (let e = 0; e < r.length; e++) {
	            const n = r[e];
	            n[0] = e, n[1] = t[e];
	        }
	        r.sort(un);
	        const i = [];
	        for (let e = 0; e < 8; e++) i[e] = [ e, 0 ];
	        for (let e = 0; e < 8; e++) e < n && r[e][1] ? (i[e][0] = r[e][0], i[e][1] = r[e][1]) : (i[e][0] = Number.MAX_SAFE_INTEGER, 
	        i[e][1] = 0);
	        i.sort(fn);
	        e.geometries.forEach(e => {
	            const t = e.properties.morphTargets;
	            for (let n = 0; n < 8; n++) {
	                const r = i[n], o = r[0], a = r[1];
	                o !== Number.MAX_SAFE_INTEGER && a ? (e.updateData("POSITION" + n, t["POSITION_" + o].array), 
	                e.properties.morphWeights[n] = a) : e.properties.morphWeights[n] = 0;
	            }
	        });
	    }
	    _updateSkinTexture(e) {
	        if (!this.gltf.joints) return;
	        const t = this.gltf.animations;
	        if (!t) return;
	        const n = this.gltf.joints.length;
	        t.forEach(t => {
	            const r = t.channels;
	            for (let t = 0; t < r.length; t++) {
	                if (r[t].target.node === e.nodeIndex) {
	                    e.skin.updateJointTexture(n);
	                }
	            }
	        });
	    }
	    _parserNode(e, n, r) {
	        if (e.isParsed) return;
	        e.nodeMatrix = e.nodeMatrix || identity$2([]), e.localMatrix = e.localMatrix || identity$2([]), 
	        e.matrix ? (e.trs = new an, e.trs.decompose(e.matrix)) : e.trs = new an(e.translation, e.rotation, e.scale), 
	        e.localMatrix = e.trs.getMatrix(), r ? multiply$5(e.nodeMatrix, r, e.matrix || e.localMatrix) : copy$5(e.nodeMatrix, e.matrix || e.localMatrix);
	        const i = e.nodeMatrix;
	        if (e.children) for (let t = 0; t < e.children.length; t++) {
	            this._parserNode(e.children[t], n, i);
	        }
	        if (h(e.skin)) {
	            this._isAnimation = !0;
	            const t = e.skin;
	            e.trs = new an, e.skin = this._skinMap[t];
	        }
	        if (h(e.mesh)) {
	            e.mesh = this.gltf.meshes[e.mesh], e.mesh.node = e, e.geometries = e.geometries || [], 
	            e.mesh.primitives.forEach(t => {
	                const r = function(e, t) {
	                    const n = e.attributes, r = n.COLOR_0;
	                    if (r && r.array instanceof Float32Array) {
	                        const e = new Uint8Array(r.array.length);
	                        for (let t = 0; t < e.length; t++) e[t] = Math.round(255 * r.array[t]);
	                        r.array = e;
	                    }
	                    const i = {};
	                    for (const e in n) i[e] = v$1({}, n[e]), t && (i[e].buffer = He(t, n[e], {
	                        dimension: n[e].itemSize
	                    }));
	                    if (e.morphTargets) {
	                        const e = w$1(i.POSITION) ? i.POSITION.itemSize * i.POSITION.count : i.POSITION.array.length;
	                        for (let t = 0; t < 8; t++) i["POSITION" + t] || (i["POSITION" + t] = new Float32Array(e).fill(0));
	                        for (let e = 0; e < 4; e++) {
	                            const t = i.NORMAL.array ? i.NORMAL.array.length : i.NORMAL.length;
	                            i["NORMAL" + e] || (i["NORMAL" + e] = new Float32Array(t).fill(0));
	                        }
	                    }
	                    let o = e.indices;
	                    o && void 0 === o.bufferView && o.array && (o = o.array);
	                    const a = new J$1(i, o, 0, {
	                        primitive: g$1(e.mode) ? Me(e.mode) : e.mode,
	                        positionAttribute: "POSITION",
	                        normalAttribute: "NORMAL",
	                        uv0Attribute: "TEXCOORD_0",
	                        uv1Attribute: "TEXCOORD_1",
	                        color0Attribute: "COLOR_0"
	                    });
	                    e.morphTargets && (a.properties.morphWeights = []);
	                    e.mode > 3 && !a.data.NORMAL && a.createNormal("NORMAL");
	                    return a;
	                }(t, this.regl);
	                r.properties.morphTargets = t.morphTargets, e.geometries.push(r);
	                const o = this._createMaterialInfo(t.material), a = {
	                    geometry: r,
	                    nodeMatrix: i,
	                    materialInfo: o,
	                    extraInfo: this._createExtralInfo(t.material),
	                    animationMatrix: e.trs.getMatrix(),
	                    morphWeights: e.weights
	                };
	                e.skin && (a.skin = {
	                    jointTextureSize: [ 4, 6 ],
	                    numJoints: e.skin.joints.length,
	                    jointTexture: e.skin.jointTexture
	                });
	                const s = new sn(a);
	                n.push(s);
	            });
	        }
	        e.isParsed = !0;
	    }
	    _createMaterialInfo(e) {
	        const t = {};
	        if (this.gltf.materials && this.gltf.materials[e]) {
	            const n = this.gltf.materials[e], r = n.pbrMetallicRoughness;
	            if (r) {
	                const e = r.metallicRoughnessTexture, n = r.baseColorTexture;
	                n && (t.baseColorTexture = this._getTexture(n)), r.baseColorFactor && (t.baseColorFactor = r.baseColorFactor), 
	                e ? t.metallicRoughnessTexture = this._getTexture(e) : (h(r.metallicFactor) && (t.metallicFactor = r.metallicFactor), 
	                h(r.roughnessFactor) && (t.roughnessFactor = r.roughnessFactor));
	            }
	            const i = n.extensions;
	            if (i && i.KHR_materials_pbrSpecularGlossiness) {
	                const e = i.KHR_materials_pbrSpecularGlossiness;
	                t.name = "pbrSpecularGlossiness";
	                for (const n in e) t[n] = h(e[n].index) ? this._getTexture(e[n]) : e[n];
	            }
	            n.normalTexture && (t.normalTexture = this._getTexture(n.normalTexture)), n.occlusionTexture && (t.occlusionTexture = this._getTexture(n.occlusionTexture)), 
	            n.emissiveTexture && (t.emissiveTexture = this._getTexture(n.emissiveTexture)), 
	            n.emissiveFactor && (t.emissiveFactor = n.emissiveFactor), t.alphaCutoff = n.alphaCutoff || .5;
	        }
	        return t;
	    }
	    _createExtralInfo(e) {
	        const t = {};
	        if (this.gltf.materials && this.gltf.materials[e]) {
	            const n = this.gltf.materials[e];
	            t.doubleSided = n.doubleSided, t.alphaMode = n.alphaMode || "OPAQUE";
	        }
	        return t;
	    }
	    _getTexture(e) {
	        const t = e.extensions, n = e.index;
	        if (!h(n)) return null;
	        t && t.KHR_texture_transform && (e.KHR_texture_transform = t.KHR_texture_transform);
	        const r = this._textureMap[n];
	        return r.texInfo = e, r;
	    }
	    _toTexture(e) {
	        if (!e) return this._emptyTexture;
	        const t = e.sampler || {};
	        return new je({
	            width: e.image.width,
	            height: e.image.height,
	            data: e.image.array,
	            mag: Ie(t.magFilter) || "linear",
	            min: Fe(t.minFilter) || "linear",
	            wrapS: Re(t.wrapS) || "repeat",
	            wrapT: Re(t.wrapT) || "repeat"
	        });
	    }
	}

	function fn(e, t) {
	    return e[0] - t[0];
	}

	function un(e, t) {
	    return Math.abs(t[1]) - Math.abs(e[1]);
	}

	function hn(t) {
	    const n = t.lastIndexOf("/"), r = t.slice(0, n), i = t.slice(t.lastIndexOf(".")).toLowerCase();
	    return ".gltf" === i ? function(t, n) {
	        return w$2.getJSON(t, n);
	    }(t, {}).then(e => mn(r, e)) : ".glb" === i ? function(t, n) {
	        return w$2.getArrayBuffer(t, n);
	    }(t, {}).then(e => mn(r, {
	        buffer: e.data,
	        byteOffset: 0
	    })) : null;
	}

	function dn(e, t) {
	    return new ln(e, t);
	}

	function mn(t, n) {
	    return new k$2(t, n).load();
	}

	var vn = Object.freeze({
	    __proto__: null,
	    load: hn,
	    exportGLTFPack: dn
	});

	class _n {
	    constructor(e) {
	        this.regl = e, this.resourceMap = {};
	    }
	    getGLTF(e) {
	        return this.resourceMap[e];
	    }
	    loginGLTF(e, t) {
	        this.resourceMap[e] ? this.resourceMap[e].refCount += 1 : (this.resourceMap[e] = t ? this._exportGLTFResource(t, e) : this._loadGLTFModel(e).catch(e => e), 
	        this.resourceMap[e].refCount = 1);
	    }
	    logoutGLTF(e) {
	        if (this.resourceMap[e] && (this.resourceMap[e].refCount -= 1, this.resourceMap[e].refCount < 1)) {
	            const t = this.resourceMap[e].resources;
	            if (t) for (let e = 0; e < t.length; e++) t[e].geometry.dispose(), t[e].copyGeometry && t[e].copyGeometry.dispose(), 
	            t[e].material && t[e].material.dispose();
	            this.resourceMap[e].gltfPack && this.resourceMap[e].gltfPack.dispose(), delete this.resourceMap[e];
	        }
	    }
	    _exportGLTFResource(e, t) {
	        const n = dn(e, this.regl), r = n.getMeshesInfo();
	        return {
	            gltfPack: n,
	            resources: r,
	            json: e,
	            refCount: this.resourceMap[t] ? this.resourceMap[t].refCount : 0
	        };
	    }
	    _loadData(e) {
	        return hn(e).then(e => e);
	    }
	    _loadGLTFModel(e) {
	        return this._loadData(e).then(t => (this.resourceMap[e] = this._exportGLTFResource(t, e), 
	        this.resourceMap[e]));
	    }
	}

	const gn = function() {
	    const e = [ 0, 0, 0 ], n = [ lookAt([], e, [ 1, 0, 0 ], [ 0, -1, 0 ]), lookAt([], e, [ -1, 0, 0 ], [ 0, -1, 0 ]), lookAt([], e, [ 0, 1, 0 ], [ 0, 0, 1 ]), lookAt([], e, [ 0, -1, 0 ], [ 0, 0, -1 ]), lookAt([], e, [ 0, 0, 1 ], [ 0, -1, 0 ]), lookAt([], e, [ 0, 0, -1 ], [ 0, -1, 0 ]) ], r = 90 * Math.PI / 180, i = [ 0, 0, 0, 0 ], o = new Array(16);
	    return function(e, a, s, c, l) {
	        const f = {
	            context: {
	                viewMatrix: function(e, t, r) {
	                    return n[r];
	                },
	                projMatrix: perspective(o, r, 1, .5, 1.1)
	            }
	        };
	        a && (f.framebuffer = a.faces ? function(e, t, n) {
	            return a.faces[n];
	        } : a);
	        return e(f)(6, (t, n, r) => {
	            const o = {
	                color: i,
	                depth: 1
	            };
	            a && (o.framebuffer = a.faces ? a.faces[r] : a), e.clear(o), s(c), l && l();
	        }), a;
	    };
	}();

	var pn = {
	    vertices: [ 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1 ],
	    textures: [ 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0 ],
	    indices: [ 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 ]
	}, bn = "attribute vec3 aPosition;\nvarying vec3 vWorldPos;\nuniform mat4 projMatrix;\nuniform mat4 viewMatrix;\nvoid main() {\n  vWorldPos = aPosition;\n  gl_Position = projMatrix * viewMatrix * vec4(vWorldPos, 1.);\n}", xn = "precision highp float;\n#define PI 3.1415926\nvarying vec3 vWorldPos;\nuniform sampler2D equirectangularMap;\nconst vec2 c = vec2(.1591, .3183);\nvec2 d(vec3 e) {\n  vec2 f = vec2(atan(e.y, e.x), asin(e.z));\n  f *= c;\n  f += .5;\n  return f;\n}\nvec3 h(const in vec4 i, const in float j) {\n  return j * i.rgb * i.a;\n}\nvec4 k(const in vec3 i, const in float j) {\n  vec4 l;\n  vec3 m = i / j;\n  l.a = clamp(max(max(m.r, m.g), max(m.b, 1e-6)), .0, 1.);\n  l.a = ceil(l.a * 255.) / 255.;\n  l.rgb = m / l.a;\n  return l;\n}\nvoid main() {\n  vec2 f = d(normalize(vWorldPos));\n  vec4 i = texture2D(equirectangularMap, f);\n#ifdef INPUT_RGBM\ngl_FragColor = i;\n#else\ngl_FragColor = vec4(h(i, 7.), 1.);\n#endif\n}";

	/*!
	 * from claygl
	 * https://github.com/pissang/claygl/
	 * License: BSD-2-Clause
	 */
	function yn(e, t) {
	    var n = e[0], r = e[1], i = e[2];
	    return 0 === t ? 1 : 1 === t ? n : 2 === t ? r : 3 === t ? i : 4 === t ? n * i : 5 === t ? r * i : 6 === t ? n * r : 7 === t ? 3 * i * i - 1 : n * n - r * r;
	}

	var Tn = {
	    px: [ 2, 1, 0, -1, -1, 1 ],
	    nx: [ 2, 1, 0, 1, -1, -1 ],
	    py: [ 0, 2, 1, 1, -1, -1 ],
	    ny: [ 0, 2, 1, 1, 1, 1 ],
	    pz: [ 0, 1, 2, -1, -1, -1 ],
	    nz: [ 0, 1, 2, 1, -1, 1 ]
	}, An = [ "px", "nx", "py", "ny", "pz", "nz" ];

	const Sn = Xe.compile(Ht);

	function Mn(e, t, n) {
	    const r = e({
	        frag: Sn,
	        vert: bn,
	        attributes: {
	            aPosition: pn.vertices
	        },
	        uniforms: {
	            projMatrix: e.context("projMatrix"),
	            viewMatrix: e.context("viewMatrix"),
	            cubeMap: t,
	            environmentExposure: 1,
	            bias: 0,
	            size: n,
	            hsv: [ 0, 0, 0 ]
	        },
	        elements: pn.indices
	    }), i = [], o = e.framebuffer(n);
	    return gn(e, o, r, {
	        size: n
	    }, (function() {
	        const t = e.read();
	        i.push(new t.constructor(t));
	    })), r.destroy(), o.destroy(), i;
	}

	const En = [ -1, 1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 0 ], Cn = [ 0, 1, 0, 0, 1, 1, 1, 0 ];

	function On(e, t, n, r) {
	    t = t || 256;
	    const i = wn(n = n || 1024, r = r || 256), o = e.texture({
	        data: i,
	        width: r,
	        height: n,
	        min: "nearest",
	        mag: "nearest"
	    }), a = e.buffer(En), s = e.buffer(Cn), c = e.framebuffer({
	        radius: t,
	        colorType: "uint8",
	        colorFormat: "rgba",
	        min: "linear",
	        mag: "linear"
	    }), l = e({
	        frag: "precision mediump float;\nvarying vec2 vTexCoords;\nuniform sampler2D distributionMap;\nconst float c = 3.14159265359;\nvec4 d(float a, float b) {\n  a *= 65535.;\n  b *= 65535.;\n  vec4 rgba;\n  rgba[0] = mod(a, 255.);\n  rgba[1] = (a - rgba[0]) / 65280.0;\n  rgba[2] = mod(b, 255.);\n  rgba[3] = (b - rgba[2]) / 65280.0;\n  return rgba;\n}\nvec3 e(float f, vec3 h, float i) {\n  vec4 j = texture2D(distributionMap, vec2(i, f));\n  vec3 k = j.xyz;\n  float l = sign(j.w - .5);\n  float m = sign(j.w - clamp(l, .0, 1.) * 200.0 / 255. - .15);\n  k.x *= l;\n  k.y *= m;\n  vec3 n = abs(h.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 o = normalize(cross(n, h));\n  vec3 u = cross(h, o);\n  vec3 v = o * k.x + u * k.y + h * k.z;\n  return normalize(v);\n}\nfloat A(float B, float i) {\n  float a = i;\n  float C = (a * a) / 2.;\n  float D = B;\n  float E = B * (1. - C) + C;\n  return D / E;\n}\nfloat F(float B, float G, float i) {\n  float I = A(B, i);\n  float J = A(G, i);\n  return J * I;\n}\nvec2 K(float B, float i) {\n  vec3 L;\n  L.x = sqrt(1. - B * B);\n  L.y = .0;\n  L.z = B;\n  float M = .0;\n  float O = .0;\n  vec3 h = vec3(.0, .0, 1.);\n  const int P = 1024;\n  for(int Q = 0; Q < P; ++Q) {\n    vec3 k = e(float(Q) / float(P), h, i);\n    vec3 R = normalize(2. * dot(L, k) * k - L);\n    float G = max(R.z, .0);\n    float S = max(k.z, .0);\n    float T = max(dot(L, k), .0);\n    float B = max(dot(h, L), .0);\n    if(G > .0) {\n      float U = F(B, G, i);\n      float W = (U * T) / (S * B);\n      float X = pow(1. - T, 5.);\n      M += (1. - X) * W;\n      O += X * W;\n    }\n  }\n  M /= float(P);\n  O /= float(P);\n  return vec2(M, O);\n}\nvoid main() {\n  vec2 Y = K(vTexCoords.x, vTexCoords.y);\n  gl_FragColor = d(Y.x, Y.y);\n}",
	        vert: "attribute vec3 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoords;\nvoid main() {\n  vTexCoords = aTexCoord;\n  gl_Position = vec4(aPosition, 1.);\n}",
	        attributes: {
	            aPosition: {
	                buffer: a
	            },
	            aTexCoord: {
	                buffer: s
	            }
	        },
	        uniforms: {
	            distributionMap: o
	        },
	        framebuffer: c,
	        viewport: {
	            x: 0,
	            y: 0,
	            width: t,
	            height: t
	        },
	        count: En.length / 3,
	        primitive: "triangle strip"
	    });
	    return l(), l.destroy(), a.destroy(), s.destroy(), o.destroy(), c;
	}

	function wn(e, t) {
	    const n = new Array(e * t * 4);
	    for (let r = 0; r < e; r++) {
	        const {x: i, y: o} = Pn(r, e);
	        for (let e = 0; e < t; e++) {
	            const a = e / t, s = a * a, c = 2 * Math.PI * i, l = Math.sqrt((1 - o) / (1 + (s * s - 1) * o)), f = Math.sqrt(1 - l * l), u = 4 * (r * t + e), h = f * Math.cos(c), d = f * Math.sin(c);
	            n[u] = Math.abs(255 * h), n[u + 1] = Math.abs(255 * d), n[u + 2] = 255 * l, n[u + 3] = (h > 0 ? 200 : 0) + (d > 0 ? 55 : 0);
	        }
	    }
	    return n;
	}

	function Pn(e, t) {
	    let n = (e << 16 | e >>> 16) >>> 0;
	    return n = ((1431655765 & n) << 1 | (2863311530 & n) >>> 1) >>> 0, n = ((858993459 & n) << 2 | (3435973836 & n) >>> 2) >>> 0, 
	    n = ((252645135 & n) << 4 | (4042322160 & n) >>> 4) >>> 0, n = (((16711935 & n) << 8 | (4278255360 & n) >>> 8) >>> 0) / 4294967296, 
	    {
	        x: e / t,
	        y: n
	    };
	}

	var In = Object.freeze({
	    __proto__: null,
	    createIBLMaps: function(e, t = {}) {
	        const r = t.envTexture, i = t.envCubeSize || 512, o = t.sampleSize || 1024, a = t.roughnessLevels || 256, s = t.prefilterCubeSize || 256;
	        let c;
	        if (Array.isArray(r)) {
	            const t = e.cube(...r);
	            c = function(e, t, n, r) {
	                const i = e({
	                    frag: r ? "#define ENC_RGBM 1\n" + Sn : Sn,
	                    vert: bn,
	                    attributes: {
	                        aPosition: pn.vertices
	                    },
	                    uniforms: {
	                        hsv: [ 0, 0, 0 ],
	                        projMatrix: e.context("projMatrix"),
	                        viewMatrix: e.context("viewMatrix"),
	                        cubeMap: t,
	                        bias: 0,
	                        size: e.prop("size"),
	                        environmentExposure: 1
	                    },
	                    elements: pn.indices
	                }), o = [], a = e.framebufferCube({
	                    radius: n
	                });
	                gn(e, a, i, {
	                    size: n
	                }, (function() {
	                    const t = e.read();
	                    o.push(t);
	                }));
	                const s = e.cube({
	                    radius: n,
	                    min: "linear mipmap linear",
	                    mag: "linear",
	                    faces: o
	                });
	                return a.destroy(), i.destroy(), s;
	            }(e, t, i, !0), t.destroy();
	        } else c = function(e, t, n, r) {
	            n = n || 512;
	            const i = e({
	                frag: r ? "#define INPUT_RGBM 1\n" + xn : xn,
	                vert: bn,
	                attributes: {
	                    aPosition: pn.vertices
	                },
	                uniforms: {
	                    projMatrix: e.context("projMatrix"),
	                    viewMatrix: e.context("viewMatrix"),
	                    equirectangularMap: t
	                },
	                elements: pn.indices
	            }), o = e.cube({
	                width: n,
	                height: n,
	                min: "linear",
	                mag: "linear",
	                format: "rgba"
	            }), a = e.framebufferCube({
	                radius: n,
	                color: o
	            });
	            return gn(e, a, i), i.destroy(), a;
	        }(e, r, i, !0);
	        const {prefilterMap: l, prefilterMipmap: f} = function(e, t, n, r, i, o) {
	            const a = function(e, t, n, r, i, o) {
	                const a = wn(i = i || 1024, o = o || 256), s = e.texture({
	                    data: a,
	                    width: o,
	                    height: i,
	                    min: "nearest",
	                    mag: "nearest"
	                }), c = e({
	                    frag: "#define SHADER_NAME PBR_prefilter\nprecision highp float;\nvarying vec3 vWorldPos;\nuniform samplerCube environmentMap;\nuniform sampler2D distributionMap;\nuniform float roughness;\nuniform float resolution;\nuniform float rgbmRange;\nconst float c = 3.14159265359;\nfloat d(vec3 e, vec3 f, float h) {\n  float a = h * h;\n  float i = a * a;\n  float j = max(dot(e, f), .0);\n  float k = j * j;\n  float l = i;\n  float m = (k * (i - 1.) + 1.);\n  m = c * m * m;\n  return l / m;\n}\nvec3 n(float o, vec3 e, float h) {\n  vec4 u = texture2D(distributionMap, vec2(h, o));\n  vec3 f = u.xyz;\n  float v = sign(u.w - .5);\n  float A = sign(u.w - 200.0 / 255. * clamp(v, .0, 1.) - .15);\n  f.x *= v;\n  f.y *= A;\n  vec3 B = abs(e.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 C = normalize(cross(B, e));\n  vec3 D = cross(e, C);\n  vec3 E = C * f.x + D * f.y + e * f.z;\n  return normalize(E);\n}\nvec4 F(const in vec3 G, const in float I) {\n  if(I <= .0)\n    return vec4(G, 1.);\n  vec4 J;\n  vec3 K = G / I;\n  J.a = clamp(max(max(K.r, K.g), max(K.b, 1e-6)), .0, 1.);\n  J.a = ceil(J.a * 255.) / 255.;\n  J.rgb = K / J.a;\n  return J;\n}\nvec3 L(const in vec4 G, const in float I) {\n  if(I <= .0)\n    return G.rgb;\n  return I * G.rgb * G.a;\n}\nvoid main() {\n  vec3 e = normalize(vWorldPos);\n  vec3 M = e;\n  vec3 O = M;\n  const int P = 1024;\n  vec3 Q = vec3(.0);\n  float S = .0;\n  for(int T = 0; T < P; ++T) {\n    vec3 f = n(float(T) / float(P), e, roughness);\n    vec3 U = normalize(2. * dot(O, f) * f - O);\n    float W = max(dot(e, U), .0);\n    if(W > .0) {\n      Q += L(textureCube(environmentMap, U), rgbmRange).rgb * W;\n      S += W;\n    }\n  }\n  Q = Q / S;\n  gl_FragColor = F(Q, rgbmRange);\n}",
	                    vert: bn,
	                    attributes: {
	                        aPosition: pn.vertices
	                    },
	                    uniforms: {
	                        projMatrix: e.context("projMatrix"),
	                        viewMatrix: e.context("viewMatrix"),
	                        environmentMap: t,
	                        distributionMap: s,
	                        roughness: e.prop("roughness"),
	                        resolution: r,
	                        rgbmRange: n || 7
	                    },
	                    elements: pn.indices,
	                    viewport: {
	                        x: 0,
	                        y: 0,
	                        width: e.prop("size"),
	                        height: e.prop("size")
	                    }
	                });
	                let l = r;
	                const f = e.texture({
	                    radius: r,
	                    min: "linear",
	                    mag: "linear"
	                }), u = e.framebuffer({
	                    radius: r,
	                    color: f
	                }), h = Math.log(l) / Math.log(2), d = [];
	                for (let t = 0; t <= h; t++) {
	                    let n = 0;
	                    gn(e, u, c, {
	                        roughness: t / (h - 1),
	                        size: l
	                    }, (function() {
	                        const t = e.read({
	                            framebuffer: u
	                        });
	                        d[n] || (d[n] = {
	                            mipmap: []
	                        }), d[n].mipmap.push(t), n++;
	                    })), l /= 2, u.resize(l);
	                }
	                return s.destroy(), u.destroy(), c.destroy(), d;
	            }(e, t, n, r, i, o);
	            return {
	                prefilterMap: e.cube({
	                    radius: r,
	                    min: "linear mipmap linear",
	                    mag: "linear",
	                    faces: a
	                }),
	                prefilterMipmap: a
	            };
	        }(e, c, t.rgbmRange, s, o, a);
	        let u;
	        if (!t.ignoreSH) {
	            const t = s;
	            u = function(e, t, r) {
	                for (var i = new Array(9), o = [], a = [], s = [], c = 0; c < 9; c++) {
	                    for (var l = [ 0, 0, 0 ], f = 0; f < An.length; f++) {
	                        for (var u = e[f], h = [ 0, 0, 0 ], d = 0, m = 0, v = Tn[An[f]], _ = 0; _ < r; _++) for (var g = 0; g < t; g++) {
	                            o[0] = g / (t - 1) * 2 - 1, o[1] = _ / (r - 1) * 2 - 1, o[2] = -1, normalize$4(o, o), 
	                            s[0] = o[v[0]] * v[3], s[1] = o[v[1]] * v[4], s[2] = o[v[2]] * v[5], a[0] = u[m++] / 255, 
	                            a[1] = u[m++] / 255, a[2] = u[m++] / 255;
	                            var p = u[m++] / 255 * 7;
	                            a[0] *= p, a[1] *= p, a[2] *= p, scaleAndAdd$2(h, h, a, yn(s, c) * -o[2]), d += -o[2];
	                        }
	                        scaleAndAdd$2(l, l, h, 1 / d);
	                    }
	                    i[c] = scale$4(l, l, 1 / 6);
	                }
	                return i;
	            }(Mn(e, l, t), t, t);
	            const r = [];
	            for (let e = 0; e < u.length; e++) r.push(...u[e]);
	            u = r;
	        }
	        const h = {
	            rgbmRange: t.rgbmRange,
	            envMap: c,
	            prefilterMap: l
	        };
	        return u && (h.sh = u), "array" === t.format && (h.envMap = {
	            width: c.width,
	            height: c.height,
	            faces: Mn(e, c, i)
	        }, h.prefilterMap = {
	            width: l.width,
	            height: l.height,
	            faces: f
	        }, c.destroy(), l.destroy()), h;
	    },
	    generateDFGLUT: On
	});

	const Dn = {
	    uvScale: [ 1, 1 ],
	    uvOffset: [ 0, 0 ],
	    uvRotation: 0,
	    baseColorFactor: [ 1, 1, 1, 1 ],
	    emissiveFactor: [ 0, 0, 0 ],
	    baseColorIntensity: 1,
	    anisotropyDirection: 0,
	    anisotropyFactor: 0,
	    clearCoatFactor: 0,
	    clearCoatIor: 1.4,
	    clearCoatRoughnessFactor: .04,
	    clearCoatThickness: 5,
	    emitColorFactor: 1,
	    occlusionFactor: 1,
	    roughnessFactor: .4,
	    metallicFactor: 0,
	    normalMapFactor: 1,
	    specularF0: .5,
	    emitMultiplicative: 1,
	    normalMapFlipY: 0,
	    outputSRGB: 1,
	    baseColorTexture: null,
	    normalTexture: null,
	    occlusionTexture: null,
	    metallicRoughnessTexture: null,
	    emissiveTexture: null,
	    uvOrigin: [ 0, 0 ],
	    noiseTexture: null,
	    clearCoatTint: [ .006, .006, .006 ],
	    specularAAVariance: 20,
	    specularAAThreshold: 20,
	    hsv: [ 0, 0, 0 ],
	    contrast: 1,
	    bumpTexture: null,
	    bumpScale: .05,
	    bumpMinLayers: 5,
	    bumpMaxLayers: 20
	};

	class Fn extends Q$1 {
	    constructor(e) {
	        const t = v$1({}, Dn);
	        (e.metallicRoughnessTexture || e.metallicRoughnessTexture) && (t.roughnessFactor = 1, 
	        t.metallicFactor = 1), super(e, t);
	    }
	    appendDefines(e, t) {
	        super.appendDefines(e, t);
	        const n = this.uniforms;
	        n.GAMMA_CORRECT_INPUT && (e.GAMMA_CORRECT_INPUT = 1);
	        const r = t.data[t.desc.color0Attribute];
	        if (r) {
	            e.HAS_COLOR0 = 1;
	            let n = 3;
	            r.length ? n = r.length / t.getVertexCount() : r.buffer && (n = r.buffer._buffer.dimension), 
	            e.COLOR0_SIZE = n;
	        }
	        return t.data[t.desc.tangentAttribute] ? e.HAS_TANGENT = 1 : t.data[t.desc.normalAttribute] && (e.HAS_NORMAL = 1), 
	        t.data[t.desc.uv0Attribute] ? (n.baseColorTexture && (e.HAS_ALBEDO_MAP = 1), n.metallicRoughnessTexture && (e.HAS_METALLICROUGHNESS_MAP = 1), 
	        n.occlusionTexture && (e.HAS_AO_MAP = 1), n.emissiveTexture && (e.HAS_EMISSIVE_MAP = 1), 
	        n.normalTexture && (e.HAS_NORMAL_MAP = 1), n.bumpTexture && (e.HAS_BUMP_MAP = 1), 
	        (e.HAS_ALBEDO_MAP || e.HAS_METALLICROUGHNESS_MAP || e.HAS_AO_MAP || e.HAS_EMISSIVE_MAP || e.HAS_NORMAL_MAP || e.HAS_BUMP_MAP) && (e.HAS_MAP = 1), 
	        n.noiseTexture && (e.HAS_RANDOM_TEX = 1), t.data[t.desc.tangentAttribute] ? e.HAS_TANGENT = 1 : t.data[t.desc.normalAttribute] && (e.HAS_NORMAL = 1), 
	        e) : e;
	    }
	}

	class Nn extends(ae(Fn)){}

	function Rn(e, t, n) {
	    if (n.ambientUpdate) {
	        const {iblTexes: r} = e;
	        if (r) {
	            const i = n.target;
	            Hn(r), e.iblTexes = Ln(t, i);
	        } else {
	            e.iblTexes = Ln(t, n.target);
	        }
	    }
	}

	const Bn = [ 0, 0 ];

	function Ln(e, t) {
	    const n = t.getLightManager().getAmbientResource();
	    return n ? {
	        prefilterMap: e.cube({
	            width: n.prefilterMap.width,
	            height: n.prefilterMap.height,
	            faces: n.prefilterMap.faces,
	            min: "linear mipmap linear",
	            mag: "linear",
	            format: "rgba"
	        }),
	        sh: n.sh,
	        rgbmRange: n.rgbmRange
	    } : null;
	}

	function Hn(e) {
	    for (const t in e) e[t].destroy && e[t].destroy(), delete e[t];
	}

	var zn = Object.freeze({
	    __proto__: null,
	    loginIBLResOnCanvas: function(e, t, n) {
	        if (!e.dfgLUT && (e.dfgLUT = On(t), e.dfgLUT.mtkRefCount = 0, n)) {
	            const r = Rn.bind(this, e, t);
	            n.on("updatelights", r), e._iblResListener = r;
	        }
	        e.dfgLUT.mtkRefCount++;
	        const r = n.getLightManager();
	        return r && r.getAmbientResource() ? (e.iblTexes || (e.iblTexes = Ln(t, n)), {
	            dfgLUT: e.dfgLUT,
	            iblTexes: e.iblTexes
	        }) : {
	            dfgLUT: e.dfgLUT,
	            iblTexes: null
	        };
	    },
	    getIBLResOnCanvas: function(e) {
	        const {dfgLUT: t, iblTexes: n} = e;
	        return {
	            dfgLUT: t,
	            iblTexes: n
	        };
	    },
	    logoutIBLResOnCanvas: function(e, t) {
	        let n = !1;
	        if (e.dfgLUT && (e.dfgLUT.mtkRefCount--, e.dfgLUT.mtkRefCount <= 0)) {
	            if (n = !0, t) {
	                t.off("updatelights", e._iblResListener);
	            }
	            e.dfgLUT.destroy(), delete e.dfgLUT;
	        }
	        e.iblTexes && n && (Hn(e.iblTexes), delete e.iblTexes);
	    },
	    getPBRUniforms: function(e, t, n, r, i) {
	        const o = e.viewMatrix, a = e.projMatrix, s = e.cameraPosition, c = e.getRenderer().canvas, l = function(e, t) {
	            const n = e.getLightManager(), r = n && n.getAmbientResource(), i = n && n.getAmbientLight() || {}, o = n && n.getDirectionalLight() || {};
	            let a;
	            if (r) {
	                const e = t.prefilterMap.width, n = Math.log(e) / Math.log(2);
	                a = {
	                    prefilterMap: t.prefilterMap,
	                    diffuseSPH: t.sh,
	                    prefilterMiplevel: [ n, n ],
	                    prefilterSize: [ e, e ],
	                    hdrHSV: i.hsv || [ 0, 0, 0 ]
	                };
	            } else a = {
	                ambientColor: i.color || [ .2, .2, .2 ]
	            };
	            return a.rgbmRange = r ? t.rgbmRange : 7, a.environmentExposure = g$1(i.exposure) ? i.exposure : 1, 
	            a.environmentOrientation = i.orientation || 0, a.light0_diffuse = [ ...o.color || [ 1, 1, 1 ], 1 ], 
	            a.light0_viewDirection = o.direction || [ 1, 1, -1 ], a;
	        }(e, t), f = v$1({
	            viewMatrix: o,
	            projMatrix: a,
	            projViewMatrix: e.projViewMatrix,
	            cameraPosition: s,
	            outSize: [ c.width, c.height ],
	            cameraNearFar: [ e.cameraNear, e.cameraFar ]
	        }, l);
	        return f.brdfLUT = n, r && r.renderUniforms && v$1(f, r.renderUniforms), f.halton = i || Bn, 
	        f;
	    },
	    createIBLTextures: Ln,
	    disposeIBLTextures: Hn,
	    isSupported: function(e) {
	        return e.hasExtension("EXT_shader_texture_lod");
	    }
	});

	class kn extends et$1 {
	    constructor(e) {
	        super({
	            vert: "attribute vec3 aPosition;\nuniform mat4 lightProjViewModelMatrix;\nuniform mat4 positionMatrix;\n#include <line_extrusion_vert>\n#include <get_output>\nvarying vec4 vPosition;\nvoid main() {\n  mat4 c = getPositionMatrix();\n#ifdef IS_LINE_EXTRUSION\nvec3 d = getLineExtrudePosition(aPosition);\n  vec4 e = getPosition(d);\n#else\nvec4 e = getPosition(aPosition);\n#endif\ngl_Position = lightProjViewModelMatrix * c * e;\n  vPosition = gl_Position;\n}",
	            frag: "#define SHADER_NAME vsm_mapping\n#ifdef USE_VSM\n#extension GL_OES_standard_derivatives : enable\n#endif\nprecision highp float;\nvarying vec4 vPosition;\n#ifdef PACK_FLOAT\n#include <common_pack_float>\n#endif\nvoid main() {\n  \n#if defined(USE_VSM)\nfloat c = vPosition.z / vPosition.w;\n  c = c * .5 + .5;\n  float d = c;\n  float e = c * c;\n  float f = dFdx(c);\n  float h = dFdy(c);\n  e += .25 * (f * f + h * h);\n  gl_FragColor = vec4(d, e, c, .0);\n#endif\n#if defined(USE_ESM)\n#ifdef PACK_FLOAT\ngl_FragColor = common_encodeDepth(gl_FragCoord.z);\n#else\ngl_FragColor = vec4(gl_FragCoord.z, .0, .0, 1.);\n#endif\n#endif\n}",
	            uniforms: [ {
	                name: "lightProjViewModelMatrix",
	                type: "function",
	                fn: function(e, n) {
	                    return multiply$5([], n.lightProjViewMatrix, n.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {},
	            defines: e
	        });
	    }
	    filter(e) {
	        return e.castShadow;
	    }
	}

	class jn extends ft$1 {
	    constructor({blurOffset: e}) {
	        super({
	            vert: st$1,
	            frag: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D textureSource;\nuniform vec2 resolution;\n#include <common_pack_float>\nvoid main() {\n  float c = .0;\n  float d = .0;\n  for(int x = -BOXBLUR_OFFSET; x <= BOXBLUR_OFFSET; ++x)\n    for(int y = -BOXBLUR_OFFSET; y <= BOXBLUR_OFFSET; ++y) {\n      vec2 e = vTexCoord.st + vec2(float(x) / resolution.x, float(y) / resolution.y);\n      e = clamp(e, .0, 1.);\n      float f = common_decodeDepth(texture2D(textureSource, e));\n      float s = max(.0, sign(1. - f));\n      d += sign(f) * s;\n      c += f;\n    }\n  float h = c / max(1., d);\n  gl_FragColor = common_encodeDepth(h);\n}",
	            defines: {
	                BOXBLUR_OFFSET: e || 2
	            }
	        }), this._blurOffset = e || 2;
	    }
	    getMeshCommand(e, t) {
	        const n = "box_shadow_blur_" + this._blurOffset;
	        return this.commands[n] || (this.commands[n] = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands[n];
	    }
	}

	let Vn, Gn;

	class Un {
	    constructor(e, {width: t, height: n, blurOffset: r, defines: i}) {
	        this.renderer = e, this.width = t || 512, this.height = n || 512, this.blurOffset = u(r) ? 2 : r, 
	        this._init(i);
	    }
	    render(e, {cameraProjViewMatrix: t, lightDir: n, farPlane: r, cameraLookAt: i}) {
	        return {
	            lightProjViewMatrix: this._renderShadow(e, t, n, r, i),
	            shadowMap: this.blurTex || this.depthTex,
	            depthFBO: this.depthFBO,
	            blurFBO: this.blurFBO
	        };
	    }
	    resize(e, t) {
	        return this.depthTex && (this.depthTex.resize(e, t), this.depthFBO.resize(e, t)), 
	        this.blurFBO && (this.blurTex.resize(e, t), this.blurFBO.resize(e, t)), this;
	    }
	    _renderShadow(e, t, n, r, i) {
	        const o = this.renderer, a = Vn(t);
	        if (r) for (let e = 4; e < 8; e++) a[e] = r[e - 4];
	        const s = Gn(i, a, n);
	        return o.clear({
	            color: [ 1, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this.depthFBO
	        }), o.render(this.shadowMapShader, {
	            lightProjViewMatrix: s
	        }, e, this.depthFBO), this.blurFBO && (this.boxBlurShader || (this.boxBlurShader = new jn({
	            blurOffset: this.blurOffset
	        })), o.clear({
	            color: [ 1, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this.blurFBO
	        }), o.render(this.boxBlurShader, {
	            resolution: [ this.depthTex.width, this.depthTex.height ],
	            textureSource: this.depthTex
	        }, null, this.blurFBO)), s;
	    }
	    _init(e) {
	        const t = this.renderer.regl, n = this.width, r = this.height;
	        this.depthTex = t.texture({
	            width: n,
	            height: r,
	            format: "rgb",
	            type: "uint8",
	            min: "nearest",
	            mag: "nearest"
	        }), this.shadowMapShader = new kn(e), this.shadowMapShader.filter = e => e.castShadow, 
	        this.depthFBO = t.framebuffer({
	            color: this.depthTex
	        }), this.blurOffset <= 0 || (this.blurTex = t.texture({
	            width: n,
	            height: r,
	            format: "rgb",
	            type: "uint8",
	            min: "linear",
	            mag: "linear"
	        }), this.blurFBO = t.framebuffer({
	            color: this.blurTex
	        }));
	    }
	    dispose() {
	        this.depthTex && (this.depthTex.destroy(), this.depthFBO.destroy(), delete this.depthTex, 
	        delete this.depthFBO), this.blurTex && (this.blurTex.destroy(), this.blurFBO.destroy(), 
	        delete this.blurTex, delete this.blurFBO), this.shadowMapShader && (this.shadowMapShader.dispose(), 
	        delete this.shadowMapShader), this.boxBlurShader && (this.boxBlurShader.dispose(), 
	        delete this.boxBlurShader);
	    }
	}

	Vn = function() {
	    const e = [ [ -1, -1, -1, 1 ], [ 1, -1, -1, 1 ], [ 1, 1, -1, 1 ], [ -1, 1, -1, 1 ], [ -1, -1, 1, 1 ], [ 1, -1, 1, 1 ], [ 1, 1, 1, 1 ], [ -1, 1, 1, 1 ] ], n = new Array(16);
	    return function(i) {
	        invert$2(n, i);
	        const o = [];
	        for (let t = 0; t < e.length; t++) {
	            const i = transformMat4$1([], e[t], n);
	            scale$3(i, i, 1 / i[3]), o.push(i);
	        }
	        return o;
	    };
	}(), Gn = function() {
	    let e = new Array(4);
	    const i = new Array(3), o = [ 0, 0, 0, 0 ], a = [ 0, 1, 0 ], s = new Array(3);
	    let c = new Array(16), l = new Array(16), f = new Array(16);
	    const u = [ 1, 1, 1 ], h = [ 0, 0, 0 ];
	    return function(d, m, v) {
	        set$3(o, ...d, 1), scale$4(i, v, -1), c = lookAt(c, add$4(s, o, normalize$4(s, i)), o, a), 
	        transformMat4$1(e, m[0], c);
	        let _ = e[2], g = e[2], p = e[0], b = e[0], x = e[1], y = e[1];
	        for (let t = 1; t < 8; t++) e = transformMat4$1(e, m[t], c), e[2] > g && (g = e[2]), 
	        e[2] < _ && (_ = e[2]), e[0] > b && (b = e[0]), e[0] < p && (p = e[0]), e[1] > y && (y = e[1]), 
	        e[1] < x && (x = e[1]);
	        l = ortho(l, -1, 1, -1, 1, -g, -_);
	        const T = u[0] = 2 / (b - p), A = u[1] = -2 / (y - x);
	        h[0] = -.5 * (p + b) * T, h[1] = -.5 * (x + y) * A, identity$2(f), translate$1(f, f, h), 
	        scale$5(f, f, u);
	        const S = multiply$5(l, f, l);
	        return multiply$5(new Array(16), S, c);
	    };
	}();

	class Xn extends et$1 {
	    constructor(e) {
	        super({
	            vert: "#define SHADER_NAME SHADOW_DISPLAY\nattribute vec3 aPosition;\nuniform mat4 projMatrix;\nuniform mat4 modelViewMatrix;\nuniform vec2 halton;\nuniform vec2 globalTexSize;\nvarying vec4 vPosition;\n#include <vsm_shadow_vert>\nvoid main() {\n  vec4 c = vec4(aPosition, 1.);\n  vec4 d = modelViewMatrix * c;\n  mat4 e = projMatrix;\n  e[2].xy += halton.xy / globalTexSize.xy;\n  gl_Position = e * d;\n  vPosition = gl_Position;\n  shadow_computeShadowPars(c);\n}",
	            frag: "#define SHADER_NAME SHADOW_DISPLAY\nprecision mediump float;\nuniform vec3 color;\n#include <vsm_shadow_frag>\nvoid main() {\n  float c = shadow_computeShadow();\n  float d = 1. - c;\n  gl_FragColor = vec4(color * d, d);\n}",
	            uniforms: [ {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: function(e, n) {
	                    const r = [];
	                    return multiply$5(r, n.viewMatrix, n.modelMatrix), r;
	                }
	            } ],
	            defines: e || {
	                USE_ESM: 1
	            },
	            extraCommandProps: {
	                depth: {
	                    enable: !0,
	                    mask: !1
	                },
	                viewport: {
	                    x: 0,
	                    y: 0,
	                    width: (e, t) => t.globalTexSize[0],
	                    height: (e, t) => t.globalTexSize[1]
	                }
	            }
	        });
	    }
	    getMeshCommand(e, t) {
	        return this.commands.shadow_display || (this.commands.shadow_display = this.createREGLCommand(e, null, t.getElements())), 
	        this.commands.shadow_display;
	    }
	}

	function Wn(e) {
	    return 256 * e[2] * 256 + 256 * e[1] + e[0];
	}

	const Kn = new Uint8Array(4), qn = new Float32Array(Kn.buffer);

	const Yn = "\n    vec3 unpack(highp float f) {\n        highp vec3 color;\n        color.b = floor(f / 65536.0);\n        color.g = floor((f - color.b * 65536.0) / 256.0);\n        color.r = f - floor(color.b * 65536.0) - floor(color.g * 256.0);\n        // now we have a vec3 with the 3 components in range [0..255]. Let's normalize it!\n        return color / 255.0;\n    }\n", Jn = `\n    precision highp float;\n\n    varying float vPickingId;\n    varying float vFbo_picking_visible;\n\n    uniform float fbo_picking_meshId;\n\n    ${Yn}\n\n    void main() {\n        if (vFbo_picking_visible == 0.0) {\n            discard;\n            return;\n        }\n        gl_FragColor = vec4(unpack(vPickingId), fbo_picking_meshId / 255.0);\n    }\n`, Zn = `\n    precision highp float;\n\n    uniform int fbo_picking_meshId;\n    varying float vFbo_picking_visible;\n\n    ${Yn}\n\n    void main() {\n        if (vFbo_picking_visible == 0.0) {\n            discard;\n            return;\n        }\n        gl_FragColor = vec4(unpack(float(fbo_picking_meshId)), 1.0);\n        // gl_FragColor = vec4(unpack(float(35)), 1.0);\n    }\n`, Qn = `\n    precision highp float;\n\n    varying float vPickingId;\n    varying float vFbo_picking_visible;\n\n    ${Yn}\n\n    void main() {\n        if (vFbo_picking_visible == 0.0) {\n            discard;\n            return;\n        }\n        gl_FragColor = vec4(unpack(vPickingId), 1.0);\n    }\n`;

	class $n {
	    constructor(e, {vert: t, uniforms: n, defines: r, extraCommandProps: i}, o) {
	        this._renderer = e, this._fbo = o, this._clearFbo(o), this._vert = t, this._uniforms = n, 
	        this._defines = r, this._extraCommandProps = i, this._currentMeshes = [], this._init();
	    }
	    _init() {
	        const e = [];
	        this._uniforms && e.push(...this._uniforms);
	        const t = {
	            ENABLE_PICKING: 1,
	            HAS_PICKING_ID: 1
	        };
	        if (this._defines) for (const e in this._defines) t[e] = this._defines[e];
	        const n = this._vert, r = this._extraCommandProps;
	        this._shader0 = new et$1({
	            vert: n,
	            frag: Jn,
	            uniforms: e,
	            defines: t,
	            extraCommandProps: r
	        }), this._shader2 = new et$1({
	            vert: n,
	            frag: Qn,
	            uniforms: e,
	            defines: t,
	            extraCommandProps: r
	        });
	        const i = {
	            ENABLE_PICKING: 1,
	            HAS_PICKING_ID: 1
	        };
	        if (this._defines) for (const e in this._defines) i[e] = this._defines[e];
	        this._shader1 = new et$1({
	            vert: n,
	            frag: Zn,
	            uniforms: e,
	            defines: i,
	            extraCommandProps: r
	        }), this._depthShader = new et$1({
	            vert: n,
	            frag: "\n    #define SHADER_NAME depth\n\n    precision highp float;\n    varying float vFbo_picking_viewZ;\n\n    #include <common_pack_float>\n\n    void main() {\n        gl_FragColor = common_unpackFloat(vFbo_picking_viewZ);\n        // gl_FragColor = unpack(34678.3456789);\n    }\n",
	            uniforms: e,
	            defines: i,
	            extraCommandProps: r
	        }), this._scene = new ge, this._scene1 = new ge;
	    }
	    filter() {
	        return !0;
	    }
	    render(e, t, n = !1) {
	        if (!e || !e.length) return this;
	        const r = this._fbo;
	        n && this.clear(), e = e.filter(e => e && e.isValid()), this._scene.setMeshes(e);
	        const i = this._getShader(e, n);
	        i.filter = this.filter, this._currentShader && i !== this._currentShader && this.clear(), 
	        this._currentShader = i, e.forEach((e, t) => {
	            e.setUniform("fbo_picking_meshId", t + this._currentMeshes.length);
	        });
	        for (let t = 0; t < e.length; t++) this._currentMeshes.push(e[t]);
	        return this._renderer.render(i, t, this._scene, r), this;
	    }
	    pick(e, t, n, r, i = {}) {
	        const o = this._currentShader, a = this._currentMeshes;
	        if (!o || !a || !a.length) return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	        e = Math.round(e), t = Math.round(t);
	        const s = this._fbo;
	        if (e <= 2 || e >= s.width - 2 || t <= 2 || t >= s.height - 2) return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	        const {px: c, py: l, width: f, height: u} = this._getParams(e, t, n, s), h = new Uint8Array(4 * f * u), d = this._renderer.regl.read({
	            data: h,
	            x: c,
	            y: l,
	            framebuffer: s,
	            width: f,
	            height: u
	        }), m = [];
	        let v = [];
	        for (let e = 0; e < d.length; e += 4) {
	            const {pickingId: t, meshId: n} = this._packData(d.subarray(e, e + 4), o);
	            m.push(n), v.push(t);
	        }
	        const _ = {}, g = m.filter(e => null != e && !_[e] && (_[e] = 1, !0)).map(e => a[e]);
	        m.length && o === this._shader1 && (void 0 !== a[0].getUniform("uPickingId") || a[0].geometry.data.aPickingId) && (v = this._getPickingId(c, l, f, u, h, g, r));
	        const p = [];
	        if (m.length && i.returnPoint) {
	            const {viewMatrix: n, projMatrix: o} = i, a = this._pickDepth(c, l, f, u, h, g, r);
	            for (let r = 0; r < a.length; r++) if (a[r] && null != m[r] && null != v[r]) {
	                const i = this._getWorldPos(e, t, a[r], n, o);
	                p.push(i);
	            } else p.push(null);
	        }
	        const b = [];
	        for (let e = 0; e <= n; e++) b.push(e), e > 0 && b.push(-e);
	        for (let e = 0; e < b.length; e++) for (let t = 0; t < b.length; t++) {
	            const r = (b[t] + n) * f + (b[e] + n);
	            if (null != m[r] && null != v[r]) return {
	                meshId: m[r],
	                pickingId: v[r],
	                point: p[r] || null
	            };
	        }
	        return {
	            pickingId: null,
	            meshId: null,
	            point: null
	        };
	    }
	    clear() {
	        return this._fbo && this._clearFbo(this._fbo), this._currentMeshes = [], delete this._currentShader, 
	        this;
	    }
	    getMeshAt(e) {
	        return this._currentMeshes ? this._currentMeshes[e] : null;
	    }
	    getRenderedMeshes() {
	        return this._currentMeshes;
	    }
	    dispose() {
	        this.clear(), this._shader0 && this._shader0.dispose(), this._shader1 && this._shader1.dispose(), 
	        this._shader2 && this._shader2.dispose(), this._scene && this._scene.clear(), this._scene1 && this._scene1.clear();
	    }
	    _getWorldPos(e, n, r, i, o) {
	        const a = this._fbo, s = [], c = a.width / 2 || 1, l = a.height / 2 || 1, f = [ (e - c) / c, (l - n) / l, 0, 1 ], u = [ (e - c) / c, (l - n) / l, 1, 1 ], h = invert$2(s, o), d = [], m = [];
	        er(d, f, h), er(m, u, h);
	        const v = -d[2], _ = (r - v) / (-m[2] - v), g = multiply$5(s, o, i), b = invert$2(s, g), x = er(f, f, b), y = er(u, u, b);
	        return [ p$1(x[0], y[0], _), p$1(x[1], y[1], _), p$1(x[2], y[2], _) ];
	    }
	    _getPickingId(e, t, n, r, i, o, a) {
	        const s = this._renderer.regl, c = this._getFBO1();
	        this._clearFbo(c), this._scene1.setMeshes(o), this._renderer.render(this._shader2, a, this._scene1, c);
	        const l = s.read({
	            data: i,
	            x: e,
	            y: t,
	            framebuffer: c,
	            width: n,
	            height: r
	        }), f = [];
	        for (let e = 0; e < l.length; e += 4) f.push(Wn(l.subarray(e, e + 4)));
	        return f;
	    }
	    _pickDepth(e, t, n, r, i, o, a) {
	        const s = this._renderer.regl, c = this._getFBO1();
	        this._scene1.setMeshes(o), this._clearFbo(c), this._renderer.render(this._depthShader, a, this._scene1, c);
	        const l = s.read({
	            data: i,
	            x: e,
	            y: t,
	            framebuffer: c,
	            width: n,
	            height: r
	        }), f = [];
	        for (let e = 0; e < l.length; e += 4) f.push((u = l.subarray(e, e + 4), Kn[0] = u[3], 
	        Kn[1] = u[2], Kn[2] = u[1], Kn[3] = u[0], qn[0]));
	        var u;
	        return f;
	    }
	    _packData(e, t) {
	        if (255 === e[0] && 255 === e[1] && 255 === e[2] && 255 === e[3]) return {
	            meshId: null,
	            pickingId: null
	        };
	        let n = null, r = null;
	        return t === this._shader1 ? r = Wn(e) : t === this._shader0 ? (r = e[3], n = Wn(e)) : (r = null, 
	        n = Wn(e)), {
	            meshId: r,
	            pickingId: n
	        };
	    }
	    _clearFbo(e) {
	        this._renderer.regl.clear({
	            color: [ 1, 1, 1, 1 ],
	            depth: 1,
	            stencil: 0,
	            framebuffer: e
	        });
	    }
	    _getShader(e, t) {
	        return t && e.length < 256 ? this._shader0 : this._shader1;
	    }
	    _getFBO1() {
	        const e = this._renderer.regl, t = this._fbo;
	        return this._fbo1 ? this._fbo1.width === t.width && this._fbo1.height === t.height || this._fbo1.resize(t.width, t.height) : this._fbo1 = e.framebuffer(t.width, t.height), 
	        this._fbo1;
	    }
	    _getParams(e, t, n, r) {
	        t = r.height - t;
	        let i = 2 * n + 1, o = 2 * n + 1;
	        const a = (e -= n) + i, s = (t -= n) + o;
	        return a > r.width && (i -= a - r.width), s > r.height && (o -= s - r.height), {
	            px: e = e < 0 ? 0 : e,
	            py: t = t < 0 ? 0 : t,
	            width: i,
	            height: o
	        };
	    }
	    getPickingVert() {
	        return this._vert;
	    }
	    getUniformDeclares() {
	        return this._uniforms;
	    }
	}

	function er(e, t, n) {
	    const r = t[0], i = t[1], o = t[2], a = 1 / (n[3] * r + n[7] * i + n[11] * o + n[15]);
	    return e[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) * a, e[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) * a, 
	    e[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) * a, e;
	}

	const tr = e => e && e.geometry && void 0 === e.geometry.properties.shaderHash, nr = [], rr = [], ir = [ {
	    name: "modelViewMatrix",
	    type: "function",
	    fn: (e, n) => multiply$5(nr, n.viewMatrix, n.modelMatrix)
	}, {
	    name: "modelViewProjMatrix",
	    type: "function",
	    fn: (e, n) => {
	        const r = multiply$5(nr, n.viewMatrix, n.modelMatrix);
	        return multiply$5(nr, n.projMatrix, r);
	    }
	}, {
	    name: "modelMatrixInverse",
	    type: "function",
	    fn: (e, n) => invert$2(nr, n.modelMatrix)
	}, {
	    name: "projMatrixInverse",
	    type: "function",
	    fn: (e, n) => invert$2(nr, n.projMatrix)
	}, {
	    name: "modelViewMatrixInverse",
	    type: "function",
	    fn: (e, n) => (multiply$5(nr, n.viewMatrix, n.modelMatrix), invert$2(nr, nr))
	}, {
	    name: "modelViewProjMatrixInverse",
	    type: "function",
	    fn: (e, n) => {
	        const r = multiply$5(nr, n.viewMatrix, n.modelMatrix);
	        return multiply$5(nr, n.projMatrix, r), invert$2(nr, nr);
	    }
	}, {
	    name: "modelInverseTransposeMatrix",
	    type: "function",
	    fn: (e, t) => {
	        const n = fromMat4$1(rr, t.modelMatrix), r = transpose$1(n, n);
	        return invert$3(r, r);
	    }
	}, {
	    name: "modelViewInverseTransposeMatrix",
	    type: "function",
	    fn: (e, n) => {
	        const r = multiply$5(nr, n.viewMatrix, n.modelMatrix), o = fromMat4$1(rr, r), a = transpose$1(o, o);
	        return invert$3(a, a);
	    }
	} ], or = {
	    LOCAL: "positionMatrix",
	    MODEL: "modelMatrix",
	    VIEW: "viewMatrix",
	    PROJECTION: "projMatrix",
	    MODELVIEW: "modelViewMatrix",
	    MODELVIEWPROJECTION: "modelViewProjMatrix",
	    MODELINVERSE: "modelMatrixInverse",
	    VIEWINVERSE: "viewMatrixInverse",
	    PROJECTIONINVERSE: "projMatrixInverse",
	    MODELVIEWINVERSE: "modelViewMatrixInverse",
	    MODELVIEWPROJECTIONINVERSE: "modelViewProjMatrixInverse",
	    MODELINVERSETRANSPOSE: "modelInverseTransposeMatrix",
	    MODELVIEWINVERSETRANSPOSE: "modelViewInverseTransposeMatrix",
	    VIEWPORT: "viewport",
	    JOINTMATRIX: "jointMatrix",
	    ALPHACUTOFF: "alphaCutoff"
	};

	class ar {
	    constructor(e, t, n) {
	        this._regl = e, this._khrShaders = {}, this._commandProps = t, this._resLoader = n;
	    }
	    getExcludeFilter() {
	        return tr;
	    }
	    forEachShader(e) {
	        for (const t in this._khrShaders) {
	            const n = this._khrShaders[t];
	            e(n.shader, n.filter, n.uniformSemantics);
	        }
	    }
	    createMesh(e, t, n) {
	        const r = t.extensions.KHR_techniques_webgl, i = t.materials[e.material].extensions.KHR_techniques_webgl, {technique: o, values: a} = i, s = r.techniques[o], c = r.programs[s.program], l = r.shaders[c.fragmentShader], f = sr(r.shaders[c.vertexShader]) + "-" + sr(l);
	        this._khrShaders[f] || (this._khrShaders[f] = this._createTechniqueShader(f, r, o, this._commandProps));
	        const {attributeSemantics: u} = this._khrShaders[f], h = this._createGeometry(e, u, n, f), d = v$1({}, a);
	        for (const e in a) if (35678 === s.uniforms[e].type) {
	            d[e] = this._getTexture(t.textures[a[e].index]);
	        }
	        return {
	            geometry: h,
	            material: new Q$1(d)
	        };
	    }
	    _createGeometry(e, t, n, r) {
	        const i = e.attributes, o = t.COLOR_0;
	        if (i[o] && i[o] instanceof Float32Array) {
	            const e = new Uint8Array(i[o].length);
	            for (let t = 0; t < e.length; t++) e[t] = Math.round(255 * i[o][t]);
	            i[o] = e;
	        }
	        const a = {};
	        for (const e in i) {
	            const n = He(this._regl, i[e], {
	                dimension: i[e].itemSize
	            }), r = t[e] || e;
	            a[r] = {
	                buffer: n
	            }, r === t.POSITION && (a[r].array = i[e].array);
	        }
	        const s = new J$1(a, e.indices.array ? e.indices.array : e.indices, 0, {
	            positionAttribute: t.POSITION,
	            normalAttribute: t.NORMAL,
	            uv0Attribute: t.TEXCOORD_0,
	            uv1Attribute: t.TEXCOORD_1,
	            color0Attribute: t.COLOR_0,
	            tangentAttribute: t.TANGENT,
	            primitive: void 0 === e.mode ? "triangles" : Me(e.mode)
	        });
	        return s.generateBuffers(this._regl, {
	            excludeElementsInVAO: n
	        }), s.properties.shaderHash = r, s;
	    }
	    _getTexture(e) {
	        const t = {
	            type: e.type ? Ce(e.type) : "uint8",
	            format: e.format ? we(e.format) : "rgba",
	            flipY: !1
	        }, n = e.image;
	        t.data = n.array, t.width = n.width, t.height = n.height;
	        const r = e.sampler || e.texture.sampler;
	        return r && (r.magFilter && (t.mag = Ie(r.magFilter)), r.minFilter && (t.min = Fe(r.minFilter)), 
	        r.wrapS && (t.wrapS = Re(r.wrapS)), r.wrapT && (t.wrapT = Re(r.wrapT))), new je(t, this._resLoader);
	    }
	    _createTechniqueShader(e, t, n, r) {
	        const {techniques: i, programs: o, shaders: a} = t, s = i[n], c = o[s.program], l = a[c.vertexShader].content, f = a[c.fragmentShader].content, u = {};
	        for (const e in s.uniforms) {
	            const t = s.uniforms[e];
	            t.semantic && (u[t.semantic] = e);
	        }
	        const h = ir.slice();
	        for (const e in u) {
	            h.push({
	                name: u[e],
	                type: "function",
	                fn: (t, n) => n[or[e]]
	            });
	        }
	        const d = new et$1({
	            vert: l,
	            frag: f,
	            uniforms: h,
	            extraCommandProps: r
	        }), m = {};
	        for (const e in s.attributes) {
	            m[s.attributes[e].semantic] = e;
	        }
	        return {
	            shader: d,
	            filter: t => t && t.geometry && t.geometry.properties.shaderHash === e,
	            uniformSemantics: u,
	            attributeSemantics: m
	        };
	    }
	    dispose() {
	        for (const e in this._khrShaders) {
	            const {shader: t} = this._khrShaders[e];
	            t.dispose();
	        }
	        this._khrShaders = {};
	    }
	}

	function sr(e) {
	    let t = 0;
	    const n = e && e.length || 0;
	    if (!n) return t;
	    let r;
	    for (let i = 0; i < n; i++) r = e.charCodeAt(i), t = (t << 5) - t + r, t &= t;
	    return t;
	}

	const cr = {
	    parseHDR: Ae
	}, lr = {
	    PBRHelper: In,
	    StandardMaterial: Fn,
	    StandardSpecularGlossinessMaterial: Nn,
	    StandardShader: class extends et$1 {
	        constructor(e = {}) {
	            let n = e.extraCommandProps || {};
	            const r = e.uniforms;
	            n = v$1({}, n);
	            const o = e.defines || {}, a = [], s = [], c = [], l = [], f = [], u = [ {
	                name: "modelNormalMatrix",
	                type: "function",
	                fn: (e, t) => fromMat4$1(a, t.modelMatrix)
	            }, {
	                name: "modelViewNormalMatrix",
	                type: "function",
	                fn: (e, n) => {
	                    const r = multiply$5(s, n.viewMatrix, n.modelMatrix), o = invert$2(r, r), a = transpose(o, o);
	                    return fromMat4$1(c, a);
	                }
	            }, {
	                name: "modelViewMatrix",
	                type: "function",
	                fn: (e, n) => multiply$5(l, n.viewMatrix, n.modelMatrix)
	            }, {
	                name: "uEnvironmentTransform",
	                type: "function",
	                fn: (e, t) => fromRotation$2(f, Math.PI * (t.environmentOrientation || 0) / 180)
	            } ];
	            r && u.push(...r);
	            super({
	                vert: "#include <gl2_vert>\n#define SHADER_NAME PBR\nprecision highp float;\nattribute vec3 aPosition;\n#if defined(HAS_MAP)\nattribute vec2 aTexCoord;\nuniform vec2 uvOrigin;\nuniform vec2 uvScale;\nuniform vec2 uvOffset;\nuniform float uvRotation;\n#endif\nvec3 c;\nvec3 d;\nvec4 e;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 projMatrix;\nuniform vec2 outSize;\nuniform vec2 halton;\nuniform mediump vec3 cameraPosition;\nuniform mat3 modelNormalMatrix;\n#ifdef HAS_SSR\nuniform mat3 modelViewNormalMatrix;\nvarying vec3 vViewNormal;\n#ifdef HAS_TANGENT\nvarying vec4 vViewTangent;\n#endif\n#endif\nvarying vec3 vModelNormal;\nvarying vec4 vViewVertex;\n#if defined(HAS_TANGENT)\nvarying vec4 vModelTangent;\nvarying vec3 vModelBiTangent;\n#endif\nvarying vec3 vModelVertex;\n#if defined(HAS_MAP)\nvarying vec2 vTexCoord;\n#endif\n#if defined(HAS_COLOR)\nattribute vec4 aColor;\nvarying vec4 vColor;\n#endif\n#if defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nattribute vec3 aColor0;\nvarying vec3 vColor0;\n#else\nattribute vec4 aColor0;\nvarying vec4 vColor0;\n#endif\n#endif\n#include <line_extrusion_vert>\n#include <get_output>\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_vert>\n#endif\n#include <heatmap_render_vert>\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nvarying vec3 vTangentViewPos;\nvarying vec3 vTangentFragPos;\n#if __VERSION__ == 100\nmat3 f(in mat3 h) {\n  vec3 i = h[0];\n  vec3 j = h[1];\n  vec3 k = h[2];\n  return mat3(vec3(i.x, j.x, k.x), vec3(i.y, j.y, k.y), vec3(i.z, j.z, k.z));\n}\n#else\nmat3 f(in mat3 h) {\n  return transpose(h);\n}\n#endif\n#endif\nvoid l(const highp vec4 q, out highp vec3 m) {\n  m = vec3(.0, .0, 1.) + vec3(2., -2., -2.) * q.x * q.zwx + vec3(2., 2., -2.) * q.y * q.wzy;\n}\nvoid l(const highp vec4 q, out highp vec3 m, out highp vec3 t) {\n  l(q, m);\n  t = vec3(1., .0, .0) + vec3(-2., 2., -2.) * q.y * q.yxw + vec3(-2., 2., 2.) * q.z * q.zwx;\n}\nconst float o = .5;\nvec2 u(vec2 v, float A) {\n  return vec2(cos(A) * (v.x - o) + sin(A) * (v.y - o) + o, cos(A) * (v.y - o) - sin(A) * (v.x - o) + o);\n}\nvoid main() {\n  \n#if defined(HAS_MAP)\nvec2 B = getTexcoord(aTexCoord);\n#ifdef HAS_RANDOM_TEX\nvec2 C = uvOrigin;\n  vec2 D = B * uvScale + uvOffset;\n  if(uvRotation != .0) {\n    C = u(C, uvRotation);\n    D = u(D, uvRotation);\n  }\n  vTexCoord = mod(C, 1.) + D;\n#else\nvec2 C = uvOrigin;\n  vec2 D = B * uvScale;\n  if(uvRotation != .0) {\n    C = u(C, uvRotation);\n    D = u(D, uvRotation);\n  }\n  vTexCoord = mod(C, 1.) + D + uvOffset;\n#endif\n#endif\nmat4 E = getPositionMatrix();\n#if defined(HAS_TANGENT) || defined(HAS_NORMAL)\nmat3 F = mat3(E);\n  mat3 G = modelNormalMatrix * F;\n#if defined(HAS_TANGENT)\nvec3 t;\n  l(aTangent, d, t);\n  vModelTangent = vec4(G * t, aTangent.w);\n#else\n#ifdef HAS_DECODE_NORMAL\nd = getNormal(aNormal);\n#else\nd = aNormal;\n#endif\n#endif\nvec3 H = d;\n  vModelNormal = G * H;\n#else\nd = vec3(.0);\n  vModelNormal = vec3(.0);\n#endif\n#ifdef IS_LINE_EXTRUSION\nvec3 I = getLineExtrudePosition(aPosition);\n  vec4 J = getPosition(I);\n#else\nvec4 J = getPosition(aPosition);\n#endif\nvModelVertex = (modelMatrix * J).xyz;\n#if defined(HAS_TANGENT)\nvModelBiTangent = cross(vModelNormal, vModelTangent.xyz) * sign(aTangent.w);\n#endif\n#ifdef HAS_SSR\nmat3 K = modelViewNormalMatrix * F;\n  vViewNormal = K * d;\n#if defined(HAS_TANGENT)\nvec4 L = vec4(t, aTangent.w);\n  vViewTangent = vec4(K * L.xyz, L.w);\n#endif\n#endif\nvec4 M = E * J;\n  vec4 N = modelViewMatrix * M;\n  vViewVertex = N;\n  mat4 O = projMatrix;\n  O[2].xy += halton.xy / outSize.xy;\n  gl_Position = O * N;\n#if defined(HAS_COLOR)\nvColor = aColor / 255.;\n#endif\n#if defined(HAS_COLOR0)\nvColor0 = aColor0 / 255.;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nshadow_computeShadowPars(M);\n#endif\n#ifdef HAS_HEATMAP\nheatmap_compute(projMatrix * modelViewMatrix * E, J);\n#endif\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nmat3 P = f(mat3(vModelTangent.xyz, vModelBiTangent, vModelNormal));\n  vTangentViewPos = P * cameraPosition;\n  vTangentFragPos = P * vModelVertex;\n#endif\n}",
	                frag: e.frag || "#if __VERSION__ == 100\n#if defined(GL_EXT_shader_texture_lod)\n#extension GL_EXT_shader_texture_lod : enable\n#define textureCubeLod(tex, uv, lod) textureCubeLodEXT(tex, uv, lod)\n#else\n#define textureCubeLod(tex, uv, lod) textureCube(tex, uv, lod)\n#endif\n#if defined(GL_OES_standard_derivatives)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#else\n#define textureCubeLod(tex, uv, lod) textureLod(tex, uv, lod)\n#endif\n#define saturate(x)        clamp(x, 0.0, 1.0)\nprecision mediump float;\n#include <gl2_frag>\n#include <hsv_frag>\nuniform vec3 hsv;\nuniform float contrast;\nconst float c = .04;\nstruct MaterialUniforms {\n  vec2 roughnessMetalness;\n  vec3 albedo;\n  float alpha;\n  vec3 normal;\n  vec3 emit;\n  float ao;\n  vec3 specularColor;\n  float glossiness;\n} d;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n#include <vsm_shadow_frag>\n#endif\nuniform vec3 cameraPosition;\n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nuniform vec4 diffuseFactor;\nuniform vec3 specularFactor;\nuniform float glossinessFactor;\n#if defined(HAS_DIFFUSE_MAP)\nuniform sampler2D diffuseTexture;\n#endif\n#if defined(HAS_SPECULARGLOSSINESS_MAP)\nuniform sampler2D specularGlossinessTexture;\n#endif\n#endif\nuniform vec3 emissiveFactor;\nuniform vec4 baseColorFactor;\nuniform float baseColorIntensity;\nuniform float anisotropyDirection;\nuniform float anisotropyFactor;\nuniform float clearCoatFactor;\nuniform float clearCoatIor;\nuniform float clearCoatRoughnessFactor;\nuniform float clearCoatThickness;\nuniform float emitColorFactor;\nuniform float occlusionFactor;\nuniform float environmentExposure;\nuniform float roughnessFactor;\nuniform float metallicFactor;\nuniform float normalMapFactor;\nuniform float rgbmRange;\nuniform float specularF0;\nuniform int emitMultiplicative;\nuniform int normalMapFlipY;\nuniform int outputSRGB;\nuniform mat3 uEnvironmentTransform;\n#if defined(HAS_ALBEDO_MAP)\nuniform sampler2D baseColorTexture;\n#endif\n#if defined(HAS_METALLICROUGHNESS_MAP)\nuniform sampler2D metallicRoughnessTexture;\n#endif\n#if defined(HAS_EMISSIVE_MAP)\nuniform sampler2D emissiveTexture;\n#endif\n#if defined(HAS_AO_MAP)\nuniform sampler2D occlusionTexture;\n#endif\n#if defined(HAS_NORMAL_MAP) && defined(HAS_TANGENT)\nuniform sampler2D normalTexture;\n#endif\n#if defined(HAS_ALPHAMODE)\nuniform float alphaCutoff;\n#endif\n#ifdef HAS_RANDOM_TEX\nuniform highp vec2 uvOrigin;\nuniform highp float uvRotation;\nuniform sampler2D noiseTexture;\n#endif\nuniform sampler2D brdfLUT;\n#if defined(HAS_IBL_LIGHTING)\nuniform vec3 hdrHSV;\nuniform samplerCube prefilterMap;\nuniform vec3 diffuseSPH[9];\nuniform vec2 prefilterMiplevel;\nuniform vec2 prefilterSize;\n#else\nuniform vec3 ambientColor;\n#endif\nuniform vec2 cameraNearFar;\nuniform vec3 clearCoatTint;\nuniform vec3 light0_viewDirection;\nuniform vec4 light0_diffuse;\n#ifdef HAS_SSR\nvarying vec3 vViewNormal;\n#if defined(HAS_TANGENT)\nvarying vec4 vViewTangent;\n#endif\n#endif\nvarying vec3 vModelVertex;\nvarying vec4 vViewVertex;\n#if defined(HAS_MAP)\nvarying highp vec2 vTexCoord;\n#endif\nvarying vec3 vModelNormal;\n#if defined(HAS_TANGENT)\nvarying vec4 vModelTangent;\nvarying vec3 vModelBiTangent;\n#endif\n#if defined(HAS_COLOR0)\n#if COLOR0_SIZE == 3\nvarying vec3 vColor0;\n#else\nvarying vec4 vColor0;\n#endif\n#endif\n#if defined(HAS_COLOR)\nvarying vec4 vColor;\n#elif defined(IS_LINE_EXTRUSION)\nuniform vec4 lineColor;\n#else\nuniform vec4 polygonFill;\n#endif\n#ifdef HAS_INSTANCE_COLOR\nvarying vec4 vInstanceColor;\n#endif\n#ifdef IS_LINE_EXTRUSION\nuniform float lineOpacity;\n#else\nuniform float polygonOpacity;\n#endif\n#include <heatmap_render_frag>\n#include <snow_frag>\n#ifdef HAS_RANDOM_TEX\nconst float e = .5;\nvec2 f(vec2 h, float i) {\n  return vec2(cos(i) * (h.x - e) + sin(i) * (h.y - e) + e, cos(i) * (h.y - e) - sin(i) * (h.x - e) + e);\n}\nfloat j(vec3 k) {\n  return k.x + k.y + k.z;\n}\n#endif\nvec4 l(sampler2D m, in vec2 h) {\n  \n#ifdef HAS_RANDOM_TEX\nhighp vec2 n = uvOrigin;\n  if(uvRotation != .0) {\n    n = f(n, uvRotation);\n  }\n  highp vec2 o = h + n - mod(n, 1.);\n  float u = texture2D(noiseTexture, .005 * o).x;\n  vec2 A = dFdx(o);\n  vec2 B = dFdx(o);\n  float C = u * 8.;\n  float D = fract(C);\n#if 1\nfloat E = floor(C);\n  float F = E + 1.;\n#else\nfloat E = floor(C + .5);\n  float F = floor(C);\n  D = min(D, 1. - D) * 2.;\n#endif\nvec2 G = sin(vec2(3., 7.) * E);\n  vec2 H = sin(vec2(3., 7.) * F);\n  float I = .5;\n  vec4 J = texture2DGradEXT(m, h + I * G, A, B);\n  vec4 K = texture2DGradEXT(m, h + I * H, A, B);\n  return mix(J, K, smoothstep(.2, .8, D - .1 * j(J.xyz - K.xyz)));\n#else\nreturn texture2D(m, h);\n#endif\n}\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nuniform sampler2D bumpTexture;\nuniform float bumpScale;\nuniform float bumpMaxLayers;\nuniform float bumpMinLayers;\nvec2 L(vec2 h, vec3 M) {\n  float N = mix(bumpMaxLayers, bumpMinLayers, abs(dot(vec3(.0, .0, 1.), M)));\n  float O = 1. / N;\n  float P = .0;\n  vec2 Q = M.xy * bumpScale / (M.z * N);\n  vec2 R = h;\n  float S = l(bumpTexture, R).r;\n  for(int T = 0; T < 30; T++) {\n    P += O;\n    R -= Q;\n    S = l(bumpTexture, R).r;\n    if(S < P) {\n      break;\n    }\n  }\n  vec2 U = R + Q;\n  float V = S - P;\n  float W = l(bumpTexture, U).r - P + O;\n  return mix(R, U, V / (V - W));\n}\nvarying vec3 vTangentViewPos;\nvarying vec3 vTangentFragPos;\n#endif\n#define SHADER_NAME PBR\nvec3 X(const in vec3 Y) {\n  return vec3(Y.r < .0031308 ? Y.r * 12.92 : 1.055 * pow(Y.r, 1. / 2.4) - .055, Y.g < .0031308 ? Y.g * 12.92 : 1.055 * pow(Y.g, 1. / 2.4) - .055, Y.b < .0031308 ? Y.b * 12.92 : 1.055 * pow(Y.b, 1. / 2.4) - .055);\n}\nvec3 Z(const in vec3 Y) {\n  return vec3(Y.r < .04045 ? Y.r * (1. / 12.92) : pow((Y.r + .055) * (1. / 1.055), 2.4), Y.g < .04045 ? Y.g * (1. / 12.92) : pow((Y.g + .055) * (1. / 1.055), 2.4), Y.b < .04045 ? Y.b * (1. / 12.92) : pow((Y.b + .055) * (1. / 1.055), 2.4));\n}\nvec3 ba(const in vec4 Y, const in float bb) {\n  if(bb <= .0)\n    return Y.rgb;\n  return bb * Y.rgb * Y.a;\n}\nvec3 bc() {\n  return d.albedo;\n}\nfloat bd() {\n  \n#if defined(HAS_ALPHAMODE)\nif(d.alpha >= alphaCutoff) {\n    return 1.;\n  } else {\n    return .0;\n  }\n#else\nreturn d.alpha;\n#endif\n}\nfloat be() {\n  \n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nvec3 Y = d.specularColor;\n  return max(max(Y.r, Y.g), Y.b);\n#else\nreturn d.roughnessMetalness.y;\n#endif\n}\nfloat bf() {\n  return specularF0;\n}\nfloat bg() {\n  \n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nreturn 1. - d.glossiness;\n#else\nreturn d.roughnessMetalness.x;\n#endif\n}\nvec3 bh() {\n  return d.emit;\n}\nvec3 bi() {\n  return d.normal;\n}\nfloat bj() {\n  return clearCoatFactor;\n}\nfloat bk() {\n  return clearCoatRoughnessFactor;\n}\nfloat bl() {\n  return d.ao;\n}\nfloat bm(const in vec4 bn) {\n  return bn.r + bn.g / 255.;\n}\nfloat bo(const in vec2 bp, const in float bq) {\n  vec3 br = vec3(.06711056, .00583715, 52.9829189);\n  return fract(br.z * fract(dot(bp.xy + bq * vec2(47., 17.) * .695, br.xy))) * .5;\n}\nvec3 bs(const in float bt, in vec3 bu, const in vec3 t, const in vec3 b, in vec3 bv) {\n  bu.xy = bt * bu.xy;\n  mat3 bw = mat3(t, b, bv);\n  return normalize(bw * bu);\n}\nvoid bx(const in vec3 by, const in vec3 bu, const in vec3 bz, out float bA, out vec3 bB, out float bC) {\n  bA = 1.;\n  bB = -bz;\n  bC = dot(bB, bu);\n}\nvec4 bD(const in vec3 bu, const in vec3 by, const in float bE) {\n  float bF = clamp(dot(bu, by), 0., 1.);\n  float bG = bE * bE;\n  return vec4(bG, bG * bG, bF, bF * (1. - bG));\n}\nfloat bH(const vec4 bD, const float bI) {\n  float bJ = bD.y;\n  float bK = (bI * bJ - bI) * bI + 1.;\n  return bJ / (3.141593 * bK * bK);\n}\nvec3 bL(const vec3 bM, const float bN, const in float bO) {\n  float bP = pow(1. - bO, 5.);\n  return bN * bP + (1. - bP) * bM;\n}\nfloat bL(const float bM, const float bN, const in float bO) {\n  return bM + (bN - bM) * pow(1. - bO, 5.);\n}\nfloat bQ(const vec4 bD, const float bR) {\n  float a = bD.x;\n  float bS = bR * (bD.w + a);\n  float bT = bD.z * (bR * (1. - a) + a);\n  return .5 / (bS + bT);\n}\nvec3 bU(const vec4 bD, const vec3 bu, const vec3 by, const vec3 bB, const vec3 bV, const float bR, const float bN) {\n  vec3 bW = normalize(by + bB);\n  float bI = clamp(dot(bu, bW), 0., 1.);\n  float bO = clamp(dot(bB, bW), 0., 1.);\n  float bX = bH(bD, bI);\n  float bY = bQ(bD, bR);\n  vec3 bZ = bL(bV, bN, bO);\n  return (bX * bY * 3.141593) * bZ;\n}\nvoid ca(const in vec3 bu, const in vec3 by, const in float bR, const in vec4 bD, const in vec3 cb, const in vec3 bV, const in float bA, const in vec3 cc, const in vec3 bB, const in float bN, out vec3 cd, out vec3 ce, out bool cf) {\n  cf = bR > .0;\n  if(cf == false) {\n    ce = cd = vec3(.0);\n    return;\n  }\n  vec3 cg = bA * bR * cc;\n  ce = cg * bU(bD, bu, by, bB, bV, bR, bN);\n  cd = cg * cb;\n}\nfloat ch(float at, float ab, float ci, float cj, float ck, float cl, float bF, float bR) {\n  float cm = bR * length(vec3(at * ci, ab * cj, bF));\n  float cn = bF * length(vec3(at * ck, ab * cl, bR));\n  return .5 / (cm + cn);\n}\nfloat co(const float at, const float ab, const float cp, const float cq, const float bI) {\n  float bJ = at * ab;\n  vec3 bK = vec3(ab * cp, at * cq, bJ * bI);\n  float x = bJ / dot(bK, bK);\n  return bJ * (x * x) / 3.141593;\n}\nvec3 cr(const vec4 bD, const vec3 bu, const vec3 by, const vec3 bB, const vec3 bV, const float bR, const float bN, const in vec3 cs, const in vec3 ct, const in float cu) {\n  vec3 bW = normalize(by + bB);\n  float bI = clamp(dot(bu, bW), 0., 1.);\n  float bF = clamp(dot(bu, by), 0., 1.);\n  float bO = clamp(dot(bB, bW), 0., 1.);\n  float ci = dot(cs, by);\n  float cj = dot(ct, by);\n  float ck = dot(cs, bB);\n  float cl = dot(ct, bB);\n  float cp = dot(cs, bW);\n  float cq = dot(ct, bW);\n  float cv = sqrt(1. - abs(cu) * .9);\n  if(cu > .0)\n    cv = 1. / cv;\n  float at = bD.x * cv;\n  float ab = bD.x / cv;\n  float bX = co(at, ab, cp, cq, bI);\n  float bY = ch(at, ab, ci, cj, ck, cl, bF, bR);\n  vec3 bZ = bL(bV, bN, bO);\n  return (bX * bY * 3.141593) * bZ;\n}\nvoid cw(const in vec3 bu, const in vec3 by, const in float bR, const in vec4 bD, const in vec3 cb, const in vec3 bV, const in float bA, const in vec3 cc, const in vec3 bB, const in float bN, const in vec3 cs, const in vec3 ct, const in float cu, out vec3 cd, out vec3 ce, out bool cf) {\n  cf = bR > .0;\n  if(cf == false) {\n    ce = cd = vec3(.0);\n    return;\n  }\n  vec3 cg = bA * bR * cc;\n  ce = cg * cr(bD, bu, by, bB, bV, bR, bN, cs, ct, cu);\n  cd = cg * cb;\n}\n#if defined(HAS_IBL_LIGHTING)\nvec3 cx(const in vec3 bu) {\n  vec3 bv = uEnvironmentTransform * bu;\n  float x = bv.x;\n  float y = bv.y;\n  float z = bv.z;\n  vec3 cy = (diffuseSPH[0] + diffuseSPH[1] * x + diffuseSPH[2] * y + diffuseSPH[3] * z + diffuseSPH[4] * z * x + diffuseSPH[5] * y * z + diffuseSPH[6] * y * x + diffuseSPH[7] * (3. * z * z - 1.) + diffuseSPH[8] * (x * x - y * y));\n  if(length(hdrHSV) > .0) {\n    cy = hsv_apply(cy, hdrHSV);\n  }\n  return max(cy, vec3(.0));\n}\nfloat cz(const in float cA) {\n  return cA;\n}\nvec3 cB(const in float cC, const in vec3 cD) {\n  vec3 cE = cD;\n  float cF = prefilterMiplevel.x;\n  float cG = min(cF, cz(cC) * prefilterMiplevel.y);\n  vec3 cH = ba(textureCubeLod(prefilterMap, cE, cG), rgbmRange);\n  if(length(hdrHSV) > .0) {\n    return hsv_apply(cH, hdrHSV);\n  } else {\n    return cH;\n  }\n}\nvec3 cI(const in vec3 cJ, const in vec3 cD, const in float cK) {\n  float cL = 1. - cK;\n  float cM = cL * (sqrt(cL) + cK);\n  return mix(cJ, cD, cM);\n}\nvec3 cN(const in vec3 bu, const in vec3 by, const in float bE, const in vec3 cO) {\n  vec3 cD = reflect(-by, bu);\n  cD = cI(bu, cD, bE);\n  vec3 cP = cB(bE, uEnvironmentTransform * cD);\n  float bt = clamp(1. + dot(cD, cO), .0, 1.);\n  cP *= bt * bt;\n  return cP;\n}\n#else\nvec3 cN(const in vec3 bu, const in vec3 by, const in float bE, const in vec3 cO) {\n  return ambientColor;\n}\n#endif\nvec3 cQ(const in vec3 bV, const in float bE, const in float bF, const in float bN) {\n  vec4 rgba = texture2D(brdfLUT, vec2(bF, bE));\n  float b = (rgba[3] * 65280.0 + rgba[2] * 255.);\n  float a = (rgba[1] * 65280.0 + rgba[0] * 255.);\n  const float cR = 1. / 65535.;\n  return (bV * a + b * bN) * cR;\n}\nvec3 cS(const in vec3 bu, const in vec3 by, const in float bE, const in vec3 bV, const in vec3 cO, const in float bN) {\n  float bF = dot(bu, by);\n  return cN(bu, by, bE, cO) * cQ(bV, bE, bF, bN);\n}\nvec3 cT(const float bF, const float bR, const vec3 cU, const float bK) {\n  return exp(cU * -bK * ((bR + bF) / max(bR * bF, 1e-3)));\n}\nvec3 cV(const in float bF, const in float bR, const in float cW) {\n  return mix(vec3(1.), cT(bF, bR, clearCoatTint, clearCoatThickness), cW);\n}\nvoid cX(const in float cY, const in vec3 bu, const in vec3 by, const in float bC, const in vec4 bD, const in float bA, const in vec3 cc, const in vec3 bB, const in float cW, out vec3 cZ, out vec3 da) {\n  if(bC <= .0) {\n    cZ = vec3(.0);\n    da = vec3(.0);\n    return;\n  }\n  float db = clamp(dot(bu, -refract(bB, bu, 1. / clearCoatIor)), 0., 1.);\n  vec3 dc = cV(cY, db, cW);\n  vec3 bW = normalize(by + bB);\n  float bI = clamp(dot(bu, bW), 0., 1.);\n  float bO = clamp(dot(bB, bW), 0., 1.);\n  float bX = bH(bD, bI);\n  float bY = bQ(bD, db);\n  float bZ = bL(c, 1., bO);\n  cZ = (bA * bC * cW * bX * bY * 3.141593 * bZ) * cc;\n  da = (1. - bZ * cW) * dc;\n}\nfloat dd(const in int de, const in float df, const in vec3 bu, const in vec3 by) {\n  if(de == 0)\n    return 1.;\n  float bK = dot(bu, by) + df;\n  return clamp(bK * bK - 1. + df, .0, 1.);\n}\nvec3 dg(const in vec3 bu, const in vec3 by, const in float bE, const in vec3 cs, const in vec3 ct, const in float cu) {\n  vec3 dh = cu >= .0 ? ct : cs;\n  vec3 di = cross(dh, by);\n  vec3 dj = cross(di, dh);\n  float dk = abs(cu) * clamp(5. * bE, .0, 1.);\n  return normalize(mix(bu, dj, dk));\n}\nvoid dl() {\n  \n#ifdef HAS_MAP\nvec2 h = vTexCoord;\n#endif\n#if defined(HAS_BUMP_MAP) && defined(HAS_TANGENT)\nh = L(h, normalize(vTangentViewPos - vTangentFragPos));\n#endif\nd.albedo = baseColorIntensity * baseColorFactor.rgb;\n  d.alpha = baseColorFactor.a;\n#if defined(HAS_ALBEDO_MAP)\nvec4 dm = l(baseColorTexture, h);\n  d.albedo *= Z(dm.rgb);\n  d.alpha *= dm.a;\n#endif\n#if defined(HAS_COLOR0)\nd.albedo *= vColor0.rgb;\n#if COLOR0_SIZE == 4\nd.alpha *= vColor0.a;\n#endif\n#endif\n#if defined(HAS_COLOR)\nd.albedo *= vColor.rgb;\n  d.alpha *= vColor.a;\n#elif defined(IS_LINE_EXTRUSION)\nd.albedo *= lineColor.rgb;\n  d.alpha *= lineColor.a;\n#else\nd.albedo *= polygonFill.rgb;\n  d.alpha *= polygonFill.a;\n#endif\n#if defined(HAS_INSTANCE_COLOR)\nd.albedo *= vInstanceColor.rgb;\n  d.alpha *= vInstanceColor.a;\n#endif\n#if defined(IS_LINE_EXTRUSION)\nd.alpha *= lineOpacity;\n#else\nd.alpha *= polygonOpacity;\n#endif\n#if defined(HAS_METALLICROUGHNESS_MAP)\nd.roughnessMetalness = l(metallicRoughnessTexture, h).gb * vec2(roughnessFactor, metallicFactor);\n#else\nd.roughnessMetalness = vec2(roughnessFactor, metallicFactor);\n#endif\nd.emit = emissiveFactor;\n#if defined(HAS_EMISSIVE_MAP)\nif(emitMultiplicative == 1) {\n    d.emit *= Z(l(emissiveTexture, h).rgb);\n  } else {\n    d.emit += Z(l(emissiveTexture, h).rgb);\n  }\n#endif\nd.emit *= emitColorFactor;\n#if defined(HAS_AO_MAP)\nd.ao = l(occlusionTexture, h).r;\n#else\nd.ao = 1.;\n#endif\nd.ao *= occlusionFactor;\n#if defined(HAS_NORMAL_MAP) && defined(HAS_TANGENT)\nvec3 dn = l(normalTexture, h).xyz * 2. - 1.;\n  dn.y = normalMapFlipY == 1 ? -dn.y : dn.y;\n  d.normal = dn;\n#else\nd.normal = normalize(vModelNormal);\n#endif\n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nd.albedo *= diffuseFactor.rgb;\n  d.alpha *= diffuseFactor.a;\n#if defined(HAS_DIFFUSE_MAP)\nvec4 cb = l(diffuseTexture, h);\n  d.albedo *= Z(cb.rgb);\n  d.alpha *= cb.a;\n#endif\nd.specularColor = specularFactor;\n  d.glossiness = glossinessFactor;\n#if defined(HAS_SPECULARGLOSSINESS_MAP)\nvec4 dp = l(specularGlossinessTexture, h);\n  d.specularColor *= Z(dp.rgb);\n  d.glossiness *= dp.a;\n#endif\n#endif\n}\nvec3 dq(const vec3 x) {\n  const float a = 2.51;\n  const float b = .03;\n  const float dr = 2.43;\n  const float bK = .59;\n  const float ds = .14;\n  return (x * (a * x + b)) / (x * (dr * x + bK) + ds);\n}\nvec3 dt(vec3 Y) {\n  Y = dq(Y);\n  return Y = pow(Y, vec3(1. / 2.2));\n}\nuniform float specularAAVariance;\nuniform float specularAAThreshold;\nfloat du(float bE, const vec3 dv) {\n  \n#if defined(GL_OES_standard_derivatives) || __VERSION__ == 300\nvec3 dw = dFdx(dv);\n  vec3 dx = dFdy(dv);\n  float dy = specularAAVariance * (dot(dw, dw) + dot(dx, dx));\n  float dz = min(2. * dy, specularAAThreshold);\n  float dA = saturate(bE * bE + dz);\n  return sqrt(dA);\n#else\nreturn bE;\n#endif\n}\n#ifdef HAS_SSR\nuniform sampler2D TextureDepth;\nuniform highp vec2 outSize;\nuniform float ssrFactor;\nuniform float ssrQuality;\nuniform sampler2D TextureReflected;\nuniform highp mat4 projMatrix;\nuniform mat4 invProjMatrix;\nuniform vec4 outputFovInfo[2];\nuniform mat4 reprojViewProjMatrix;\nvec3 dB(const in mat4 dC, const in vec3 dD) {\n  vec4 dE = dC * vec4(dD, 1.);\n  return vec3(.5 + .5 * dE.xy / dE.w, dE.w);\n}\nvec3 dF(const in float dG, const in vec2 h) {\n  return texture2D(TextureReflected, h).rgb;\n}\nfloat dH(float dI) {\n  highp mat4 dC = projMatrix;\n  highp float z = dI * 2. - 1.;\n  return -dC[3].z / (z + dC[2].z);\n}\nfloat dJ(const vec2 h) {\n  float dI = bm(texture2D(TextureDepth, h));\n  return dI;\n}\nvec3 dK(const in float bq, const in vec3 dL, const in vec3 dM, const in vec3 dN, const in vec3 by, const in float dO) {\n  vec2 dP;\n  dP.x = bo(gl_FragCoord.yx, bq);\n  dP.y = fract(dP.x * 52.9829189);\n  dP.y = mix(dP.y, 1., .7);\n  float dQ = 2. * 3.14159 * dP.x;\n  float dR = pow(max(dP.y, .000001), dO / (2. - dO));\n  float dS = sqrt(1. - dR * dR);\n  vec3 dT = vec3(dS * cos(dQ), dS * sin(dQ), dR);\n  dT = dT.x * dL + dT.y * dM + dT.z * dN;\n  return normalize((2. * dot(by, dT)) * dT - by);\n}\nfloat dU(const in float bq) {\n  return (bo(gl_FragCoord.xy, bq) - .5);\n}\nvec3 dV(const in vec3 dW, const in float dX, const in vec3 dY) {\n  vec3 dZ = dB(projMatrix, vViewVertex.xyz + dY * dX);\n  dZ.z = 1. / dZ.z;\n  dZ -= dW;\n  float ea = min(1., .99 * (1. - dW.x) / max(1e-5, dZ.x));\n  float eb = min(1., .99 * (1. - dW.y) / max(1e-5, dZ.y));\n  float ec = min(1., .99 * dW.x / max(1e-5, -dZ.x));\n  float ed = min(1., .99 * dW.y / max(1e-5, -dZ.y));\n  return dZ * min(ea, eb) * min(ec, ed);\n}\nfloat ee(const in vec3 dW, const in vec3 dZ, inout float ef, inout float eg) {\n  float eh = (eg + ef) * .5;\n  vec3 ei = dW + dZ * eh;\n  float z = dJ(ei.xy);\n  float dI = dH(z);\n  float ej = -1. / ei.z;\n  ef = dI > ej ? ef : eh;\n  eg = dI > ej ? eh : eg;\n  return eh;\n}\nvec4 ek(const in vec3 dW, const in float dX, in float el, const in vec3 dY, const in float bE, const in float bq) {\n  int em = 20;\n  float en = 1. / float(em);\n  el *= en;\n  vec3 dZ = dV(dW, dX, dY);\n  float eo = en;\n  vec3 ep = vec3(.0, eo, 1.);\n  vec3 ei;\n  float z, dI, ej, eq, er, es;\n  bool et;\n  float eu = 1.;\n  float eh;\n  for(int T = 0; T < em; T++) {\n    ei = dW + dZ * ep.y;\n    z = dJ(ei.xy);\n    dI = dH(z);\n    ej = -1. / ei.z;\n    float ev = clamp(sign(.999 - z), .0, 1.);\n    eq = ev * (ej - dI);\n    eq *= clamp(sign(abs(eq) - dX * en * en), .0, 1.);\n    et = abs(eq + el) < el;\n    er = clamp(ep.x / (ep.x - eq), .0, 1.);\n    es = et ? ep.y + er * en - en : 1.;\n    ep.z = min(ep.z, es);\n    ep.x = eq;\n    if(et) {\n      float ef = ep.y - en;\n      float eg = ep.y;\n      eh = ee(dW, dZ, ef, eg);\n      eh = ee(dW, dZ, ef, eg);\n      eh = ee(dW, dZ, ef, eg);\n      eu = eh;\n      break;\n    }\n    ep.y += en;\n  }\n  return vec4(dW + dZ * eu, 1. - eu);\n}\nvec4 ew(in vec4 ex, const in float ey, const in vec3 ez, const in vec3 eA, const in float bE) {\n  vec4 eB = mix(outputFovInfo[0], outputFovInfo[1], ex.x);\n  ex.xyz = vec3(mix(eB.xy, eB.zw, ex.y), 1.) * -1. / ex.z;\n  ex.xyz = (reprojViewProjMatrix * vec4(ex.xyz, 1.)).xyw;\n  ex.xy /= ex.z;\n  float eC = clamp(6. - 6. * max(abs(ex.x), abs(ex.y)), .0, 1.);\n  ex.xy = .5 + .5 * ex.xy;\n  vec3 eD = eA * dF(bE * (1. - ex.w), ex.xy);\n  return vec4(mix(ez, eD, ey * eC), 1.);\n}\nvec3 ssr(const in vec3 ez, const in vec3 eA, const in float bE, const in vec3 bu, const in vec3 by) {\n  float eE = .0;\n  vec4 cy = vec4(.0);\n  float dO = bE * bE;\n  dO = dO * dO;\n  vec3 eF = abs(bu.z) < .999 ? vec3(.0, .0, 1.) : vec3(1., .0, .0);\n  vec3 dL = normalize(cross(eF, bu));\n  vec3 dM = cross(bu, dL);\n  float ey = ssrFactor * clamp(-4. * dot(by, bu) + 3.8, .0, 1.);\n  ey *= clamp(4.7 - bE * 5., .0, 1.);\n  vec3 dW = dB(projMatrix, vViewVertex.xyz);\n  dW.z = 1. / dW.z;\n  vec3 dY = dK(eE, dL, dM, bu, by, dO);\n  float dX = mix(cameraNearFar.y + vViewVertex.z, -vViewVertex.z - cameraNearFar.x, dY.z * .5 + .5);\n  float el = .5 * dX;\n  vec4 ex;\n  if(dot(dY, bu) > .001 && ey > .0) {\n    ex = ek(dW, dX, el, dY, bE, eE);\n    if(ex.w > .0)\n      cy += ew(ex, ey, ez, eA, bE);\n    \n  }\n  return cy.w > .0 ? cy.rgb / cy.w : ez;\n}\n#endif\nvoid main() {\n  dl();\n  vec3 by = normalize(cameraPosition - vModelVertex.xyz);\n#if defined(HAS_DOUBLE_SIDE)\nvec3 cO = gl_FrontFacing ? normalize(vModelNormal) : -normalize(vModelNormal);\n#else\nvec3 cO = normalize(vModelNormal);\n#endif\n#if defined(HAS_TANGENT)\nvec4 eG;\n  eG = vModelTangent;\n#if defined(HAS_DOUBLE_SIDE)\neG.xyz = gl_FrontFacing ? normalize(eG.xyz) : -normalize(eG.xyz);\n#else\neG.xyz = normalize(eG.xyz);\n#endif\nvec3 eH = normalize(vModelBiTangent);\n#endif\nfloat bM = .08 * bf();\n  float eI = be();\n  vec3 eJ = bc();\n#if defined(SHADING_MODEL_SPECULAR_GLOSSINESS)\nvec3 eK = d.specularColor;\n#else\nvec3 eK = mix(vec3(bM), eJ, eI);\n#endif\neJ *= 1. - eI;\n  float eL = clamp(50.0 * eK.g, .0, 1.);\n  float eM = bg();\n  if(specularAAVariance > .0) {\n    eM = du(eM, cO);\n  }\n  vec3 eN = bh();\n  vec3 eO = bi();\n  vec3 eP = vec3(eO);\n#if defined(HAS_TANGENT) && defined(HAS_NORMAL_MAP)\neP = bs(normalMapFactor, eP, eG.xyz, eH, cO);\n#endif\nfloat eQ = bj();\n  float eR = bk();\n  if(specularAAVariance > .0) {\n    eR = du(eR, cO);\n  }\n  vec3 eS = cO;\n#if defined(HAS_TANGENT)\nfloat cu;\n  vec3 cs;\n  vec3 ct;\n  if(anisotropyFactor > .0) {\n    cu = anisotropyFactor;\n    eG.xyz = normalize(eG.xyz - eP * dot(eG.xyz, eP));\n    eH = normalize(cross(eP, eG.xyz)) * eG.w;\n    cs = normalize(mix(eG.xyz, eH, anisotropyDirection));\n    ct = normalize(mix(eH, -eG.xyz, anisotropyDirection));\n  }\n#endif\nvec3 cb = vec3(.0);\n  vec3 bV = vec3(.0);\n  vec3 eT;\n#if defined(HAS_TANGENT)\nif(anisotropyFactor > .0) {\n    eT = dg(eP, by, eM, cs, ct, cu);\n  } else {\n    eT = eP;\n  }\n#else\neT = eP;\n#endif\n#if defined(HAS_IBL_LIGHTING)\ncb = eJ * cx(eP) * .5;\n#else\ncb = eJ * ambientColor;\n#endif\nbV = cS(eT, by, eM, eK, cO, eL);\n  float cY;\n  if(clearCoatFactor > .0) {\n    cY = clamp(dot(eS, -refract(by, eS, 1. / clearCoatIor)), 0., 1.);\n    float eU = eQ * bL(c, 1., cY);\n    vec3 eV = cV(cY, cY, eQ);\n    bV = mix(bV * eV, cN(eS, by, eR, cO), eU);\n    cb *= eV * (1. - eU);\n  }\n  float eW = 1.;\n  float eX = bl();\n  cb *= environmentExposure * eX;\n#ifdef HAS_IBL_LIGHTING\neW = dd(1, eX, eP, by);\n#endif\n#ifdef HAS_SSR\nvec3 eY = normalize(gl_FrontFacing ? vViewNormal : -vViewNormal);\n  vec3 eZ = eY;\n#if defined(HAS_TANGENT) && defined(HAS_NORMAL_MAP)\nvec4 fa;\n  fa = vViewTangent;\n  fa = gl_FrontFacing ? fa : -fa;\n  fa.xyz = normalize(fa.xyz);\n  vec3 fb = normalize(cross(eY, fa.xyz)) * fa.w;\n  eZ = bs(normalMapFactor, eO, fa.xyz, fb, eY);\n#endif\nbV = ssr(bV, eK * eW, eM, eZ, -normalize(vViewVertex.xyz));\n#endif\nbV *= environmentExposure * eW;\n  float bA, bC;\n  vec3 bB;\n  bool cf;\n  vec3 fc;\n  vec3 fd;\n  vec4 fe = bD(eP, by, max(.045, eM));\n  vec3 ff = vModelNormal;\n  bx(by, eP, light0_viewDirection, bA, bB, bC);\n#if defined(HAS_TANGENT)\nif(anisotropyFactor > .0) {\n    cw(eP, by, bC, fe, eJ, eK, bA, light0_diffuse.rgb, bB, eL, cs, ct, cu, fd, fc, cf);\n  } else {\n    ca(eP, by, bC, fe, eJ, eK, bA, light0_diffuse.rgb, bB, eL, fd, fc, cf);\n  }\n#else\nca(eP, by, bC, fe, eJ, eK, bA, light0_diffuse.rgb, bB, eL, fd, fc, cf);\n#endif\nif(clearCoatFactor > .0) {\n    vec3 fg;\n    vec3 fh;\n    vec4 fi = bD(eS, by, eR);\n    cX(cY, eS, by, dot(eS, bB), fi, bA, light0_diffuse.rgb, bB, eQ, fg, fh);\n    fd *= fh;\n    fc = fg + fc * fh;\n  }\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\nfloat fj = shadow_computeShadow();\n  fd = shadow_blend(fd, fj).rgb;\n  fc = shadow_blend(fc, fj).rgb;\n#endif\nvec3 fk = vec3(bV);\n  vec3 fl = vec3(cb);\n  cb += fd;\n  bV += fc;\n  cb += eN;\n  vec3 fm = bV + cb;\n  if(outputSRGB == 1)\n    fm = X(fm);\n  glFragColor = vec4(fm, bd());\n#ifdef HAS_HEATMAP\nglFragColor = heatmap_getColor(glFragColor);\n#endif\n#ifdef HAS_SNOW\nglFragColor.rgb = snow(glFragColor, bi(), 1.);\n#endif\nif(contrast != 1.) {\n    glFragColor = contrastMatrix(contrast) * glFragColor;\n  }\n  if(length(hsv) > .0) {\n    glFragColor = hsv_apply(glFragColor, hsv);\n  }\n#if __VERSION__ == 100\ngl_FragColor = glFragColor;\n#endif\n}",
	                uniforms: u,
	                extraCommandProps: n,
	                defines: o
	            }), this.version = 300;
	        }
	        getGeometryDefines(e) {
	            const t = {};
	            return e.data[e.desc.tangentAttribute] ? t.HAS_TANGENT = 1 : e.data[e.desc.normalAttribute] && (t.HAS_NORMAL = 1), 
	            t;
	        }
	    },
	    StandardDepthShader: class extends et$1 {
	        constructor(e = {}) {
	            const n = [];
	            super({
	                vert: "#define SHADER_NAME depth_vert\nprecision highp float;\nattribute vec3 aPosition;\n#include <line_extrusion_vert>\nuniform mat4 modelViewMatrix;\nuniform mat4 positionMatrix;\nuniform mat4 projMatrix;\nuniform vec2 outSize;\nuniform vec2 halton;\n#include <get_output>\nvoid main() {\n  mat4 c = getPositionMatrix();\n#ifdef IS_LINE_EXTRUSION\nvec4 d = getPosition(getLineExtrudePosition(aPosition));\n#else\nvec4 d = getPosition(aPosition);\n#endif\nvec4 e = modelViewMatrix * c * d;\n  mat4 f = projMatrix;\n  f[2].xy += halton.xy / outSize.xy;\n  gl_Position = f * e;\n}",
	                frag: "#define SHADER_NAME depth_frag\nprecision highp float;\nvoid main() {\n  gl_FragColor = vec4(1., .0, .0, 1.);\n}",
	                uniforms: [ {
	                    name: "modelViewMatrix",
	                    type: "function",
	                    fn: (e, r) => multiply$5(n, r.viewMatrix, r.modelMatrix)
	                } ],
	                extraCommandProps: e.extraCommandProps,
	                defines: e.defines
	            });
	        }
	    },
	    PBRUtils: zn
	};

	var reshadergl = /*#__PURE__*/Object.freeze({
		__proto__: null,
		AbstractTexture: N$1,
		AnalysisShader: Nt,
		BloomPass: Ct$1,
		BoundingBox: U$1,
		BoxBlurShader: ht$1,
		Constants: F$1,
		CopyShader: Vt,
		DeferredRenderer: k$1,
		FBORayPicking: $n,
		FloodPass: Rt$1,
		FogPass: Ut,
		FogShader: Xt,
		FxaaShader: ut$1,
		GLTFHelper: vn,
		GLTFManager: _n,
		Geometry: J$1,
		HDR: cr,
		HeatmapDisplayShader: kt,
		HeatmapShader: Bt,
		InstancedMesh: ue,
		Jitter: Mt$1,
		KHRTechniquesWebglManager: ar,
		Material: Q$1,
		Mesh: fe,
		MeshShader: et$1,
		OutlinePass: Pt$1,
		PhongMaterial: ne,
		PhongShader: it$1,
		PhongSpecularGlossinessMaterial: se,
		Plane: Ge,
		PointLineShader: ot$1,
		PostProcessShader: pt$1,
		QuadShader: ft$1,
		REGLHelper: ke,
		RainRipplesPass: Qt,
		Renderer: z$1,
		ResourceLoader: de,
		Scene: ge,
		Shader: Qe,
		ShadowDisplayShader: Xn,
		ShadowMapShader: kn,
		ShadowPass: Un,
		SkyboxShader: zt,
		SsaoPass: gt$1,
		SsrPass: wt$1,
		TaaPass: yt$1,
		Texture2D: je,
		TextureCube: Ve,
		ToonMaterial: ie,
		ToonShader: at$1,
		Util: P$1,
		ViewshedPass: Ft$1,
		WaterShader: jt,
		WireFrameMaterial: ee,
		WireframeShader: tt$1,
		pbr: lr
	});

	var isArray = Array.isArray;
	var keyList = Object.keys;
	var hasProp = Object.prototype.hasOwnProperty;

	var fastDeepEqual = function equal(a, b) {
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    var arrA = isArray(a)
	      , arrB = isArray(b)
	      , i
	      , length
	      , key;

	    if (arrA && arrB) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }

	    if (arrA != arrB) return false;

	    var dateA = a instanceof Date
	      , dateB = b instanceof Date;
	    if (dateA != dateB) return false;
	    if (dateA && dateB) return a.getTime() == b.getTime();

	    var regexpA = a instanceof RegExp
	      , regexpB = b instanceof RegExp;
	    if (regexpA != regexpB) return false;
	    if (regexpA && regexpB) return a.toString() == b.toString();

	    var keys = keyList(a);
	    length = keys.length;

	    if (length !== keyList(b).length)
	      return false;

	    for (i = length; i-- !== 0;)
	      if (!hasProp.call(b, keys[i])) return false;

	    for (i = length; i-- !== 0;) {
	      key = keys[i];
	      if (!equal(a[key], b[key])) return false;
	    }

	    return true;
	  }

	  return a!==a && b!==b;
	};

	/*!
	 * @maptalks/fusiongl v0.4.3
	 * LICENSE : UNLICENSED
	 * (c) 2016-2021 maptalks.com
	 */
	function _$1(E){for(let _=1;_<arguments.length;_++){const t=arguments[_];for(const _ in t)E[_]=t[_];}return E}function t(E,...t){for(let R=0;R<t.length;R++)_$1(E,t[R]);}class R$1{constructor(E){this.context=E,this.COLOR_ATTACHMENT0_WEBGL=36064,this.COLOR_ATTACHMENT1_WEBGL=36065,this.COLOR_ATTACHMENT2_WEBGL=36066,this.COLOR_ATTACHMENT3_WEBGL=36067,this.COLOR_ATTACHMENT4_WEBGL=36068,this.COLOR_ATTACHMENT5_WEBGL=36069,this.COLOR_ATTACHMENT6_WEBGL=36070,this.COLOR_ATTACHMENT7_WEBGL=36071,this.COLOR_ATTACHMENT8_WEBGL=36072,this.COLOR_ATTACHMENT9_WEBGL=36073,this.COLOR_ATTACHMENT10_WEBGL=577040,this.COLOR_ATTACHMENT11_WEBGL=577041,this.COLOR_ATTACHMENT12_WEBGL=577042,this.COLOR_ATTACHMENT13_WEBGL=577043,this.COLOR_ATTACHMENT14_WEBGL=577044,this.COLOR_ATTACHMENT15_WEBGL=577045,this.DRAW_BUFFER0_WEBGL=34853,this.DRAW_BUFFER1_WEBGL=34854,this.DRAW_BUFFER2_WEBGL=34855,this.DRAW_BUFFER3_WEBGL=34856,this.DRAW_BUFFER4_WEBGL=34857,this.DRAW_BUFFER5_WEBGL=34858,this.DRAW_BUFFER6_WEBGL=34859,this.DRAW_BUFFER7_WEBGL=34860,this.DRAW_BUFFER8_WEBGL=34861,this.DRAW_BUFFER9_WEBGL=34862,this.DRAW_BUFFER10_WEBGL=34863,this.DRAW_BUFFER11_WEBGL=34864,this.DRAW_BUFFER12_WEBGL=34865,this.DRAW_BUFFER13_WEBGL=34866,this.DRAW_BUFFER14_WEBGL=34867,this.DRAW_BUFFER15_WEBGL=34868,this.MAX_COLOR_ATTACHMENTS_WEBGL=36063,this.MAX_DRAW_BUFFERS_WEBGL=2178;}drawBuffersWEBGL(){return this.context.drawBuffers.apply(this.context,arguments)}}class T$1{constructor(E){this.context=E,this.VERTEX_ARRAY_BINDING_OES=34229;}createVertexArrayOES(){return this.context.createVertexArray()}deleteVertexArrayOES(){return this.context.deleteVertexArray.apply(this.context,arguments)}isVertexArrayOES(){return this.context.isVertexArray.apply(this.context,arguments)}bindVertexArrayOES(){return this.context.bindVertexArray.apply(this.context,arguments)}}class A$1{constructor(E){this.context=E,this.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE=35070;}drawArraysInstancedANGLE(){return this.context.drawArraysInstanced.apply(this.context,arguments)}drawElementsInstancedANGLE(){return this.context.drawElementsInstanced.apply(this.context,arguments)}vertexAttribDivisorANGLE(){return this.context.vertexAttribDivisor.apply(this.context,arguments)}}const s={webgl_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},oes_element_index_uint:{},oes_texture_float:{},oes_texture_half_float:{HALF_FLOAT_OES:36193},ext_color_buffer_float:{},oes_standard_derivatives:{},ext_frag_depth:{},ext_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},ext_shader_texture_lod:{}},r={has(E,_){const t=E._,R=E.t;return !(!t&&!R.getExtension(_))&&(_=_.toLowerCase(),t&&s[_]||"webgl_draw_buffers"===_||"oes_vertex_array_object"===_||"angle_instanced_arrays"===_)},mock(E,_){return _=_.toLowerCase(),s[_]?E._?("oes_texture_float"!==_&&"oes_texture_half_float"!==_||E.t.getExtension("EXT_color_buffer_float"),s[_]):this.t.getExtension(_):"webgl_draw_buffers"===_?new R$1(E):"oes_vertex_array_object"===_?new T$1(E):"angle_instanced_arrays"===_?new A$1(E):null},getInternalFormat:(E,_,t)=>6402===_?33190:34041===_?35056:36193===t&&_===E.RGBA?34842:36193===t&&_===E.RGB?34843:t===E.FLOAT&&_===E.RGBA?34836:t===E.FLOAT&&_===E.RGB?34837:_,getTextureType:(E,_)=>36193===_?E.HALF_FLOAT:_};let e=1;class i{constructor(E){this.uid=e++,this.states=function(E){return {scissor:[0,0,E.canvas.width,E.canvas.height],viewport:[0,0,E.canvas.width,E.canvas.height],blendColor:[0,0,0,0],blendEquationSeparate:[E.FUNC_ADD,E.FUNC_ADD],blendFuncSeparate:[E.ONE,E.ZERO,E.ONE,E.ZERO],clearColor:[0,0,0,0],clearDepth:[1],clearStencil:[0],colorMask:[!0,!0,!0,!0],cullFace:[E.BACK],depthFunc:[E.LESS],depthMask:[!0],depthRange:[0,1],capabilities:{3042:!1,2884:!1,2929:!1,3024:!1,32823:!1,32926:!1,32928:!1,3089:!1,2960:!1},frontFace:[E.CCW],hint:{33170:[E.DONT_CARE],35723:[E.DONT_CARE]},lineWidth:[1],pixelStorei:{3333:[4],3317:[4],37440:[!1],37441:[!1],37443:[E.BROWSER_DEFAULT_WEBGL]},polygonOffset:[0,0],sampleCoverage:[1,!1],stencilFuncSeparate:{1028:[E.ALWAYS,0,4294967295],1029:[E.ALWAYS,0,4294967295]},stencilMaskSeparate:{1028:[4294967295],1029:[4294967295]},stencilOpSeparate:{1028:[E.KEEP,E.KEEP,E.KEEP],1029:[E.KEEP,E.KEEP,E.KEEP]},program:null,framebuffer:{36160:null,36008:null,36009:null},renderbuffer:{36161:null},textures:{active:-1,units:function(){const _=[],t=E.getParameter(E.MAX_COMBINED_TEXTURE_IMAGE_UNITS);for(let E=0;E<t;E++)_.push({3553:null,34067:null});return _[-1]={3553:null,34067:null},_}()},attributes:{},arrayBuffer:null,elementArrayBuffer:null}}(E),this.t=E,this.t._fusiongl_drawCalls=0,this._=typeof WebGL2RenderingContext&&this.t instanceof WebGL2RenderingContext;}get canvas(){return this.t.canvas}get drawingBufferWidth(){return this.t.drawingBufferWidth}get drawingBufferHeight(){return this.t.drawingBufferHeight}get gl(){return this.t}get buffersOES(){return this.R||(this.R=this.t.getExtension("WEBGL_draw_buffers")),this.R}get vaoOES(){return this.T||(this.T=this.t.getExtension("OES_vertex_array_object")),this.T}get angleOES(){return this.A||(this.A=this.t.getExtension("ANGLE_instanced_arrays")),this.A}attachShader(E,_){return this.t.attachShader(E,_)}shaderSource(E,_){return this.t.shaderSource(E,_)}compileShader(E){return this.t.compileShader(E)}createShader(E){return this.t.createShader(E)}createProgram(){return this.t.createProgram()}deleteProgram(E){return this.states.program===E&&(this.states.program=null),this.t.deleteProgram(E)}deleteShader(E){return this.t.deleteShader(E)}detachShader(E,_){return this.t.detachShader(E,_)}getAttachedShaders(E){return this.t.getAttachedShaders(E)}linkProgram(E){return this.t.linkProgram(E)}getShaderParameter(E,_){return this.t.getShaderParameter(E,_)}getShaderPrecisionFormat(E,_){return this.t.getShaderPrecisionFormat(E,_)}getShaderInfoLog(E){return this.t.getShaderInfoLog(E)}getShaderSource(E){return this.t.getShaderSource(E)}getProgramInfoLog(E){return this.t.getProgramInfoLog(E)}getProgramParameter(E,_){return this.t.getProgramParameter(E,_)}getError(){return this.t.getError()}getContextAttributes(){return this.t.getContextAttributes()}getExtension(E){return r.has(this,E)?r.mock(this,E):this.t.getExtension(E)}getSupportedExtensions(){return this.t.getSupportedExtensions()}getParameter(E){return this.t.getParameter(E)}isEnabled(E){return this.t.isEnabled(E)}isProgram(E){return this.t.isProgram(E)}isShader(E){return this.t.isShader(E)}validateProgram(E){return this.t.validateProgram(E)}clear(E){return this.s(),this.t.clear(E)}drawArrays(E,_,t){return this.s(),this.i(),this.t.drawArrays(E,_,t)}drawElements(E,_,t,R){return this.s(),this.i(),this.t.drawElements(E,_,t,R)}drawBuffers(E){return this.s(),this.i(),this._?this.t.drawBuffers(E):this.buffersOES.drawBuffersWEBGL(E)}i(){this.t._fusiongl_drawCalls++;}resetDrawCalls(){this.t._fusiongl_drawCalls=0;}getDrawCalls(){return this.t._fusiongl_drawCalls}N(){const E=this.t,_=E.getParameter(E.CURRENT_PROGRAM),t=E.getProgramParameter(_,E.ACTIVE_ATTRIBUTES),R=[];for(let _=0;_<t;_++)R.push(E.getVertexAttrib(_,E.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING));this.I={buffers:R,elements:E.getParameter(E.ELEMENT_ARRAY_BUFFER_BINDING),framebuffer:E.getParameter(E.FRAMEBUFFER_BINDING)},window.DEBUGGING&&(console.log(this.uid,this.I),console.log(this.uid,this.states.attributes),console.log(this.states.attributes[0].buffer===this.I.buffers[0]),console.log(this.states.attributes[1].buffer===this.I.buffers[1]),console.log(this.states.attributes[2].buffer===this.I.buffers[2]));}finish(){return this.t.finish()}flush(){return this.s(),this.t.flush()}commit(){return this.s(),this.t.commit()}isContextLost(){return this.t.isContextLost()}}t(i.prototype,{DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,FUNC_ADD:32774,FUNC_SUBSTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,BLEND_COLOR:32773,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,VENDOR:7936,RENDERER:7937,VERSION:7938,IMPLEMENTATION_COLOR_READ_TYPE:35738,IMPLEMENTATION_COLOR_READ_FORMAT:35739,BROWSER_DEFAULT_WEBGL:37444,STATIC_DRAW:35044,STREAM_DRAW:35040,DYNAMIC_DRAW:35048,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,CULL_FACE:2884,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,BLEND:3042,DEPTH_TEST:2929,DITHER:3024,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,SCISSOR_TEST:3089,STENCIL_TEST:2960,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CONTEXT_LOST_WEBGL:37442,CW:2304,CCW:2305,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,COMPILE_STATUS:35713,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_ATTRIBUTES:35721,ACTIVE_UNIFORMS:35718,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,ALWAYS:519,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,GEQUAL:518,NOTEQUAL:517,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,TEXTURE_WIDTH:4096,TEXTURE_HEIGHT:4097,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,READ_BUFFER:3074,UNPACK_ROW_LENGTH:3314,UNPACK_SKIP_ROWS:3315,UNPACK_SKIP_PIXELS:3316,PACK_ROW_LENGTH:3330,PACK_SKIP_ROWS:3331,PACK_SKIP_PIXELS:3332,UNPACK_SKIP_IMAGES:32877,UNPACK_IMAGE_HEIGHT:32878,MAX_3D_TEXTURE_SIZE:32883,MAX_ELEMENTS_VERTICES:33e3,MAX_ELEMENTS_INDICES:33001,MAX_TEXTURE_LOD_BIAS:34045,MAX_FRAGMENT_UNIFORM_COMPONENTS:35657,MAX_VERTEX_UNIFORM_COMPONENTS:35658,MAX_ARRAY_TEXTURE_LAYERS:35071,MIN_PROGRAM_TEXEL_OFFSET:35076,MAX_PROGRAM_TEXEL_OFFSET:35077,MAX_VARYING_COMPONENTS:35659,FRAGMENT_SHADER_DERIVATIVE_HINT:35723,RASTERIZER_DISCARD:35977,VERTEX_ARRAY_BINDING:34229,MAX_VERTEX_OUTPUT_COMPONENTS:37154,MAX_FRAGMENT_INPUT_COMPONENTS:37157,MAX_SERVER_WAIT_TIMEOUT:37137,MAX_ELEMENT_INDEX:36203,RED:6403,RGB8:32849,RGBA8:32856,RGB10_A2:32857,TEXTURE_3D:32879,TEXTURE_WRAP_R:32882,TEXTURE_MIN_LOD:33082,TEXTURE_MAX_LOD:33083,TEXTURE_BASE_LEVEL:33084,TEXTURE_MAX_LEVEL:33085,TEXTURE_COMPARE_MODE:34892,TEXTURE_COMPARE_FUNC:34893,SRGB:35904,SRGB8:35905,SRGB8_ALPHA8:35907,COMPARE_REF_TO_TEXTURE:34894,RGBA32F:34836,RGB32F:34837,RGBA16F:34842,RGB16F:34843,TEXTURE_2D_ARRAY:35866,TEXTURE_BINDING_2D_ARRAY:35869,R11F_G11F_B10F:35898,RGB9_E5:35901,RGBA32UI:36208,RGB32UI:36209,RGBA16UI:36214,RGB16UI:36215,RGBA8UI:36220,RGB8UI:36221,RGBA32I:36226,RGB32I:36227,RGBA16I:36232,RGB16I:36233,RGBA8I:36238,RGB8I:36239,RED_INTEGER:36244,RGB_INTEGER:36248,RGBA_INTEGER:36249,R8:33321,RG8:33323,R16F:33325,R32F:33326,RG16F:33327,RG32F:33328,R8I:33329,R8UI:33330,R16I:33331,R16UI:33332,R32I:33333,R32UI:33334,RG8I:33335,RG8UI:33336,RG16I:33337,RG16UI:33338,RG32I:33339,RG32UI:33340,R8_SNORM:36756,RG8_SNORM:36757,RGB8_SNORM:36758,RGBA8_SNORM:36759,RGB10_A2UI:36975,TEXTURE_IMMUTABLE_FORMAT:37167,TEXTURE_IMMUTABLE_LEVELS:33503,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042,HALF_FLOAT:5131,RG:33319,RG_INTEGER:33320,INT_2_10_10_10_REV:36255,CURRENT_QUERY:34917,QUERY_RESULT:34918,QUERY_RESULT_AVAILABLE:34919,ANY_SAMPLES_PASSED:35887,ANY_SAMPLES_PASSED_CONSERVATIVE:36202,MAX_DRAW_BUFFERS:34852,DRAW_BUFFER0:34853,DRAW_BUFFER1:34854,DRAW_BUFFER2:34855,DRAW_BUFFER3:34856,DRAW_BUFFER4:34857,DRAW_BUFFER5:34858,DRAW_BUFFER6:34859,DRAW_BUFFER7:34860,DRAW_BUFFER8:34861,DRAW_BUFFER9:34862,DRAW_BUFFER10:34863,DRAW_BUFFER11:34864,DRAW_BUFFER12:34865,DRAW_BUFFER13:34866,DRAW_BUFFER14:34867,DRAW_BUFFER15:34868,MAX_COLOR_ATTACHMENTS:36063,COLOR_ATTACHMENT1:36065,COLOR_ATTACHMENT2:36066,COLOR_ATTACHMENT3:36067,COLOR_ATTACHMENT4:36068,COLOR_ATTACHMENT5:36069,COLOR_ATTACHMENT6:36070,COLOR_ATTACHMENT7:36071,COLOR_ATTACHMENT8:36072,COLOR_ATTACHMENT9:36073,COLOR_ATTACHMENT10:36074,COLOR_ATTACHMENT11:36075,COLOR_ATTACHMENT12:36076,COLOR_ATTACHMENT13:36077,COLOR_ATTACHMENT14:36078,COLOR_ATTACHMENT15:36079,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,MAX_SAMPLES:36183,SAMPLER_BINDING:35097,PIXEL_PACK_BUFFER:35051,PIXEL_UNPACK_BUFFER:35052,PIXEL_PACK_BUFFER_BINDING:35053,PIXEL_UNPACK_BUFFER_BINDING:35055,COPY_READ_BUFFER:36662,COPY_WRITE_BUFFER:36663,COPY_READ_BUFFER_BINDING:36662,COPY_WRITE_BUFFER_BINDING:36663,FLOAT_MAT2x3:35685,FLOAT_MAT2x4:35686,FLOAT_MAT3x2:35687,FLOAT_MAT3x4:35688,FLOAT_MAT4x2:35689,FLOAT_MAT4x3:35690,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,UNSIGNED_NORMALIZED:35863,SIGNED_NORMALIZED:36764,VERTEX_ATTRIB_ARRAY_INTEGER:35069,VERTEX_ATTRIB_ARRAY_DIVISOR:35070,TRANSFORM_FEEDBACK_BUFFER_MODE:35967,MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:35968,TRANSFORM_FEEDBACK_VARYINGS:35971,TRANSFORM_FEEDBACK_BUFFER_START:35972,TRANSFORM_FEEDBACK_BUFFER_SIZE:35973,TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN:35976,MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:35978,MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:35979,INTERLEAVED_ATTRIBS:35980,SEPARATE_ATTRIBS:35981,TRANSFORM_FEEDBACK_BUFFER:35982,TRANSFORM_FEEDBACK_BUFFER_BINDING:35983,TRANSFORM_FEEDBACK:36386,TRANSFORM_FEEDBACK_PAUSED:36387,TRANSFORM_FEEDBACK_ACTIVE:36388,TRANSFORM_FEEDBACK_BINDING:36389,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:33296,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:33297,FRAMEBUFFER_ATTACHMENT_RED_SIZE:33298,FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:33299,FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:33300,FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:33301,FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:33302,FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:33303,FRAMEBUFFER_DEFAULT:33304,DEPTH24_STENCIL8:35056,DRAW_FRAMEBUFFER_BINDING:36006,READ_FRAMEBUFFER_BINDING:36010,RENDERBUFFER_SAMPLES:36011,FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:36052,FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:36182,UNIFORM_BUFFER:35345,UNIFORM_BUFFER_BINDING:35368,UNIFORM_BUFFER_START:35369,UNIFORM_BUFFER_SIZE:35370,MAX_VERTEX_UNIFORM_BLOCKS:35371,MAX_FRAGMENT_UNIFORM_BLOCKS:35373,MAX_COMBINED_UNIFORM_BLOCKS:35374,MAX_UNIFORM_BUFFER_BINDINGS:35375,MAX_UNIFORM_BLOCK_SIZE:35376,MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:35379,UNIFORM_BUFFER_OFFSET_ALIGNMENT:35380,ACTIVE_UNIFORM_BLOCKS:35382,UNIFORM_TYPE:35383,UNIFORM_SIZE:35384,UNIFORM_BLOCK_INDEX:35386,UNIFORM_OFFSET:35387,UNIFORM_ARRAY_STRIDE:35388,UNIFORM_MATRIX_STRIDE:35389,UNIFORM_IS_ROW_MAJOR:35390,UNIFORM_BLOCK_BINDING:35391,UNIFORM_BLOCK_DATA_SIZE:35392,UNIFORM_BLOCK_ACTIVE_UNIFORMS:35394,UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:35395,UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:35396,UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:35398,OBJECT_TYPE:37138,SYNC_CONDITION:37139,SYNC_STATUS:37140,SYNC_FLAGS:37141,SYNC_FENCE:37142,SYNC_GPU_COMMANDS_COMPLETE:37143,UNSIGNALED:37144,SIGNALED:37145,ALREADY_SIGNALED:37146,TIMEOUT_EXPIRED:37147,CONDITION_SATISFIED:37148,WAIT_FAILED:37149,SYNC_FLUSH_COMMANDS_BIT:1,COLOR:6144,DEPTH:6145,STENCIL:6146,MIN:32775,MAX:32776,DEPTH_COMPONENT24:33190,STREAM_READ:35041,STREAM_COPY:35042,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_READ:35049,DYNAMIC_COPY:35050,DEPTH_COMPONENT32F:36012,DEPTH32F_STENCIL8:36013,INVALID_INDEX:4294967295,TIMEOUT_IGNORED:-1,MAX_CLIENT_WAIT_TIMEOUT_WEBGL:37447,VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,UNMASKED_VENDOR_WEBGL:37445,UNMASKED_RENDERER_WEBGL:37446,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047,TEXTURE_MAX_ANISOTROPY_EXT:34046,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_RGBA8_ETC2_EAC:37493,COMPRESSED_SRGB8_ETC2:37494,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37495,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37496,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37497,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGB_ATC_WEBGL:35986,COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL:35986,COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL:34798,UNSIGNED_INT_24_8_WEBGL:34042,HALF_FLOAT_OES:36193,RGBA32F_EXT:34836,RGB32F_EXT:34837,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT:33297,UNSIGNED_NORMALIZED_EXT:35863,MIN_EXT:32775,MAX_EXT:32776,SRGB_EXT:35904,SRGB_ALPHA_EXT:35906,SRGB8_ALPHA8_EXT:35907,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT:33296,FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723,COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067,COLOR_ATTACHMENT4_WEBGL:36068,COLOR_ATTACHMENT5_WEBGL:36069,COLOR_ATTACHMENT6_WEBGL:36070,COLOR_ATTACHMENT7_WEBGL:36071,COLOR_ATTACHMENT8_WEBGL:36072,COLOR_ATTACHMENT9_WEBGL:36073,COLOR_ATTACHMENT10_WEBGL:36074,COLOR_ATTACHMENT11_WEBGL:36075,COLOR_ATTACHMENT12_WEBGL:36076,COLOR_ATTACHMENT13_WEBGL:36077,COLOR_ATTACHMENT14_WEBGL:36078,COLOR_ATTACHMENT15_WEBGL:36079,DRAW_BUFFER0_WEBGL:34853,DRAW_BUFFER1_WEBGL:34854,DRAW_BUFFER2_WEBGL:34855,DRAW_BUFFER3_WEBGL:34856,DRAW_BUFFER4_WEBGL:34857,DRAW_BUFFER5_WEBGL:34858,DRAW_BUFFER6_WEBGL:34859,DRAW_BUFFER7_WEBGL:34860,DRAW_BUFFER8_WEBGL:34861,DRAW_BUFFER9_WEBGL:34862,DRAW_BUFFER10_WEBGL:34863,DRAW_BUFFER11_WEBGL:34864,DRAW_BUFFER12_WEBGL:34865,DRAW_BUFFER13_WEBGL:34866,DRAW_BUFFER14_WEBGL:34867,DRAW_BUFFER15_WEBGL:34868,MAX_COLOR_ATTACHMENTS_WEBGL:36063,MAX_DRAW_BUFFERS_WEBGL:34852,VERTEX_ARRAY_BINDING_OES:34229,QUERY_COUNTER_BITS_EXT:34916,CURRENT_QUERY_EXT:34917,QUERY_RESULT_EXT:34918,QUERY_RESULT_AVAILABLE_EXT:34919,TIME_ELAPSED_EXT:35007,TIMESTAMP_EXT:36392,GPU_DISJOINT_EXT:36795}),t(i.prototype,{bufferData(...E){return this.s(),this.t.bufferData(...E)},bufferSubData(...E){return this.s(),this.t.bufferSubData(...E)},createBuffer(){return this.t.createBuffer()},deleteBuffer(E){const _=this.states;_.arrayBuffer===E?_.arrayBuffer=null:_.elementArrayBuffer===E&&(_.elementArrayBuffer=null);const t=_.attributes;for(const _ in t)t[_].buffer===E&&(t[_].buffer=null);return this.t.deleteBuffer(E)},getBufferParameter(E,_){return this.s(),this.t.getBufferParameter(E,_)},isBuffer(E){return this.t.isBuffer(E)}}),t(i.prototype,{checkFramebufferStatus(E){return this.t.checkFramebufferStatus(E)},createFramebuffer(){return this.t.createFramebuffer()},deleteFramebuffer(E){const _=this.states.framebuffer;for(const t in _)_[t]===E&&(_[t]=null);return this.t.deleteFramebuffer(E)},framebufferRenderbuffer(E,_,t,R){return this.s(),this.t.framebufferRenderbuffer(E,_,t,R)},framebufferTexture2D(E,_,t,R,T){return this.s(),this.t.framebufferTexture2D(E,_,t,R,T)},getFramebufferAttachmentParameter(E,_,t){return this.s(),this.t.getFramebufferAttachmentParameter(E,_,t)},isFramebuffer(E){return this.t.isFramebuffer(E)},readPixels(E,_,t,R,T,A,s){return this.s(),this.t.readPixels(E,_,t,R,T,A,s)}}),t(i.prototype,{createRenderbuffer(){return this.t.createRenderbuffer()},deleteRenderbuffer(E){const _=this.states.renderbuffer;for(const t in _)_[t]===E&&(_[t]=null);return this.t.deleteRenderbuffer(E)},getRenderbufferParameter(E,_){return this.s(),this.t.getRenderbufferParameter(E,_)},isRenderbuffer(E){return this.t.isRenderbuffer(E)},renderbufferStorage(E,_,t,R){return this.s(),this.t.renderbufferStorage(E,_,t,R)}});t(i.prototype,{scissor(E,_,t,R){this.s();const T=this.states.scissor;T[0]===E&&T[1]===_&&T[2]===t&&T[3]===R||(T[0]=E,T[1]=_,T[2]=t,T[3]=R,this.t.scissor(E,_,t,R));},viewport(E,_,t,R){this.s();const T=this.states.viewport;T[0]===E&&T[1]===_&&T[2]===t&&T[3]===R||(T[0]=E,T[1]=_,T[2]=t,T[3]=R,this.t.viewport(E,_,t,R));},blendColor(E,_,t,R){this.s();const T=this.states.blendColor;T[0]===E&&T[1]===_&&T[2]===t&&T[3]===R||(T[0]=E,T[1]=_,T[2]=t,T[3]=R,this.t.blendColor(E,_,t,R));},blendEquation(E){this.s();const _=this.states.blendEquationSeparate;_[0]===E&&_[1]===E||(_[0]=E,_[1]=E,this.t.blendEquation(E));},blendEquationSeparate(E,_){this.s();const t=this.states.blendEquationSeparate;t[0]===E&&t[1]===_||(t[0]=E,t[1]=_,this.t.blendEquationSeparate(E,_));},blendFunc(E,_){this.s();const t=this.states.blendFuncSeparate;t[0]===E&&t[2]===E&&t[1]===_&&t[3]===_||(t[0]=E,t[1]=_,t[2]=E,t[3]=_,this.t.blendFunc(E,_));},blendFuncSeparate(E,_,t,R){this.s();const T=this.states.blendFuncSeparate;T[0]===E&&T[1]===_&&T[2]===t&&T[3]===R||(T[0]=E,T[1]=_,T[2]=t,T[3]=R,this.t.blendFuncSeparate(E,_,t,R));},clearColor(E,_,t,R){this.s();const T=this.states.clearColor;T[0]===E&&T[1]===_&&T[2]===t&&T[3]===R||(T[0]=E,T[1]=_,T[2]=t,T[3]=R,this.t.clearColor(E,_,t,R));},clearDepth(E){this.s();const _=this.states.clearDepth;_[0]!==E&&(_[0]=E,this.t.clearDepth(E));},clearStencil(E){this.s();const _=this.states.clearStencil;_[0]!==E&&(_[0]=E,this.t.clearStencil(E));},colorMask(E,_,t,R){this.s();const T=this.states.colorMask;T[0]===E&&T[1]===_&&T[2]===t&&T[3]===R||(T[0]=E,T[1]=_,T[2]=t,T[3]=R,this.t.colorMask(E,_,t,R));},cullFace(E){this.s();const _=this.states.cullFace;_[0]!==E&&(_[0]=E,this.t.cullFace(E));},depthFunc(E){this.s();const _=this.states.depthFunc;_[0]!==E&&(_[0]=E,this.t.depthFunc(E));},depthMask(E){this.s();const _=this.states.depthMask;_[0]!==E&&(_[0]=E,this.t.depthMask(E));},depthRange(E,_){this.s();const t=this.states.depthRange;t[0]===E&&t[1]===_||(t[0]=E,t[1]=_,this.t.depthRange(E,_));},disable(E){this.s();const _=this.states.capabilities;_[E]&&(_[E]=!1,this.t.disable(E));},enable(E){this.s();const _=this.states.capabilities;_[E]||(_[E]=!0,this.t.enable(E));},frontFace(E){this.s();const _=this.states.frontFace;_[0]!==E&&(_[0]=E,this.t.frontFace(E));},hint(E,_){this.s();const t=this.states.hint;t[E][0]!==_&&(t[E][0]=_,this.t.hint(E,_));},lineWidth(E){this.s();const _=this.states.lineWidth;_[0]!==E&&(_[0]=E,this.t.lineWidth(E));},pixelStorei(E,_){this.s();const t=this.states.pixelStorei;t[E]!==_&&(t[E]&&(t[E][0]=_),this.t.pixelStorei(E,_));},polygonOffset(E,_){this.s();const t=this.states.polygonOffset;t[0]===E&&t[1]===_||(t[0]=E,t[1]=_,this.t.polygonOffset(E,_));},sampleCoverage(E,_){this.s();const t=this.states.sampleCoverage;t[0]===E&&t[1]===_||(t[0]=E,t[1]=_,this.t.sampleCoverage(E,_));},stencilFunc(E,_,t){this.s();const R=this.states.stencilFuncSeparate,T=this.t;R[T.FRONT][0]===E&&R[T.FRONT][1]===_&&R[T.FRONT][2]===t&&R[T.BACK][0]===E&&R[T.BACK][1]===_&&R[T.BACK][2]===t||(R[T.FRONT][0]=R[T.BACK][0]=E,R[T.FRONT][1]=R[T.BACK][1]=_,R[T.FRONT][2]=R[T.BACK][2]=t,this.t.stencilFunc(E,_,t));},stencilFuncSeparate(E,_,t,R){if(this.s(),E===this.t.FRONT_AND_BACK)return void this.stencilFunc(_,t,R);const T=this.states.stencilFuncSeparate;T[E][0]===_&&T[E][1]===t&&T[E][2]===R||(T[E][0]=_,T[E][1]=t,T[E][2]=R,this.t.stencilFuncSeparate(E,_,t,R));},stencilMask(E){this.s();const _=this.t,t=this.states.stencilMaskSeparate;t[_.FRONT][0]===E&&t[_.BACK][0]===E||(t[_.FRONT][0]=E,t[_.BACK][0]=E,this.t.stencilMask(E));},stencilMaskSeparate(E,_){if(this.s(),E===this.t.FRONT_AND_BACK)return void this.stencilMask(_);const t=this.states.stencilMaskSeparate;t[E][0]!==_&&(t[E][0]=_,this.t.stencilMaskSeparate(E,_));},stencilOp(E,_,t){this.s();const R=this.states.stencilOpSeparate,T=this.t;R[T.FRONT][0]===E&&R[T.FRONT][1]===_&&R[T.FRONT][2]===t&&R[T.BACK][0]===E&&R[T.BACK][1]===_&&R[T.BACK][2]===t||(R[T.FRONT][0]=R[T.BACK][0]=E,R[T.FRONT][1]=R[T.BACK][1]=_,R[T.FRONT][2]=R[T.BACK][2]=t,this.t.stencilOp(E,_,t));},stencilOpSeparate(E,_,t,R){if(this.s(),E===this.t.FRONT_AND_BACK)return void this.stencilOp(_,t,R);const T=this.states.stencilOpSeparate;T[E][0]===_&&T[E][1]===t&&T[E][2]===R||(T[E][0]=_,T[E][1]=t,T[E][2]=R,this.t.stencilOpSeparate(E,_,t,R));},bindFramebuffer(E,_){this.s();const t=this.states.framebuffer;t[E]!==_&&(t[E]=_,this.t.bindFramebuffer(E,_));},bindRenderbuffer(E,_){this.s();const t=this.states.renderbuffer;t[E]!==_&&(t[E]=_,this.t.bindRenderbuffer(E,_));},bindTexture(E,_){this.s();const t=this.states.textures,R=-1!==t.active?t.active-33984:-1;t.units[R][E]=_,this.t.bindTexture(E,_);},activeTexture(E){this.s();const _=this.t,t=this.states.textures,R=t.active;t.active=E,this.activeUnit!==E&&(_.activeTexture(E),this.activeUnit=E),-1===R&&(t.units[E-33984][_.TEXTURE_2D]=t.units[-1][_.TEXTURE_2D],t.units[E-33984][_.TEXTURE_CUBE_MAP]=t.units[-1][_.TEXTURE_CUBE_MAP],t.units[-1][_.TEXTURE_2D]=null,t.units[-1][_.TEXTURE_CUBE_MAP]=null);},useProgram(E){this.s();const _=this.states;_.program!==E&&(_.program=E,this.t.useProgram(E));},bindBuffer(E,_){this.s();const t=this.t,R=this.states;E===t.ELEMENT_ARRAY_BUFFER?R.elementArrayBuffer=_:R.arrayBuffer=_,t.bindBuffer(E,_);},bindVertexArray(E){this.s();const _=this.t,t=this.states;t.vao!==E&&(t.vao=E,this._?_.bindVertexArray(E):this.vaoOES.bindVertexArrayOES(E));},vertexAttribPointer(E,_,t,R,T,A){this.s();const s=[E,_,t,R,T,A];this.states.attributes[E]||(this.states.attributes[E]={enable:!0});const r=this.states.attributes[E];return r.buffer=this.states.arrayBuffer,r.args=s,this.t.vertexAttribPointer(E,_,t,R,T,A)},vertexAttribDivisor(E,_){return this.s(),this.states.attributes[E].divisor=_,this._?this.t.vertexAttribDivisor(E,_):this.angleOES.vertexAttribDivisorANGLE(E,_)}},{s(){const E=this.t;if(E.h&&E.h!==this){const _=E.h;this.S(_.states),E.h=this;}E.h=this;},S(_){if(!_)return;delete this.activeUnit;const t=this.states,R=this.t;for(const T in t)if("capabilities"!==T&&"textures"!==T&&"attributes"!==T&&"arrayBuffer"!==T&&"elementArrayBuffer"!==T)if("program"===T)t.program!==_.program&&R.useProgram(t.program);else if("framebuffer"===T)for(const E in t[T])t[T][E]!==_[T][E]&&R.bindFramebuffer(+E,t[T][E]);else if("renderbuffer"===T)for(const E in t[T])t[T][E]!==_[T][E]&&R.bindRenderbuffer(+E,t[T][E]);else if(!fastDeepEqual(t[T],_[T]))if(Array.isArray(_[T]))R[T](...t[T]);else if(_[T])for(const A in t[T])fastDeepEqual(t[T][A],_[T][A])||R[T](+A,...t[T][A]);for(const E in t.capabilities)t.capabilities[E]!==_.capabilities[E]&&R[t.capabilities[E]?"enable":"disable"](+E);const T=t.textures,A=_.textures,s=T.units,r=A.units,e=T.active-R.TEXTURE0;for(let E=0;E<s.length;E++)E===e||s[E][R.TEXTURE_2D]===r[E][R.TEXTURE_2D]&&s[E][R.TEXTURE_CUBE_MAP]===r[E][R.TEXTURE_CUBE_MAP]||(R.activeTexture(R.TEXTURE0+E),R.bindTexture(R.TEXTURE_2D,s[E][R.TEXTURE_2D]),R.bindTexture(R.TEXTURE_CUBE_MAP,s[E][R.TEXTURE_CUBE_MAP]));if(T.active>-1){const E=s[e];E[R.TEXTURE_2D]===r[e][R.TEXTURE_2D]&&E[R.TEXTURE_CUBE_MAP]===r[e][R.TEXTURE_CUBE_MAP]||(R.activeTexture(T.active),R.bindTexture(R.TEXTURE_2D,E[R.TEXTURE_2D]),R.bindTexture(R.TEXTURE_CUBE_MAP,E[R.TEXTURE_CUBE_MAP]));}const i=t.attributes,N=_.attributes;for(const _ in i)N[_]&&i[_].buffer===N[_].buffer&&fastDeepEqual(i[_].args,N[_].args)||i[_].buffer&&(R.bindBuffer(R.ARRAY_BUFFER,i[_].buffer),R.vertexAttribPointer(...i[_].args),void 0!==i[_].divisor&&(this._?R.vertexAttribDivisor(+_,i[_].divisor):this.angleOES.vertexAttribDivisorANGLE(+_,i[_].divisor)),i[_].enable?R.enableVertexAttribArray(i[_].args[0]):R.disableVertexAttribArray(i[_].args[0]));R.bindBuffer(R.ARRAY_BUFFER,t.arrayBuffer),R.bindBuffer(R.ELEMENT_ARRAY_BUFFER,t.elementArrayBuffer);const I=t.vao;I!==_.vao&&(this._?R.bindVertexArray(I||null):this.vaoOES.bindVertexArrayOES(I||null));}}),t(i.prototype,{compressedTexImage2D(E,_,t,R,T,A,s){return this.s(),this.t.compressedTexImage2D(E,_,t,R,T,A,s)},copyTexImage2D(E,_,t,R,T,A,s,r){return this.s(),this.t.copyTexImage2D(E,_,t,R,T,A,s,r)},copyTexSubImage2D(E,_,t,R,T,A,s,r){return this.s(),this.t.copyTexSubImage2D(E,_,t,R,T,A,s,r)},createTexture(){return this.t.createTexture()},deleteTexture(E){const _=this.states.textures.units;for(let t=0;t<_.length;t++)for(const R in _[t])_[t][R]===E&&(_[t][R]=null);return this.t.deleteTexture(E)},generateMipmap(E){return this.s(),this.t.generateMipmap(E)},getTexParameter(E,_){return this.s(),this.t.getTexParameter(E,_)},isTexture(E){return this.t.isTexture(E)},texImage2D(...E){if(this.s(),this._){const _=E[E.length-2],t=r.getInternalFormat(this.t,E[2],_);t!==E[2]&&(E[2]=t);const R=r.getTextureType(this.t,_);R!==_&&(E[E.length-2]=R);}return this.t.texImage2D(...E)},texSubImage2D(E){if(this.s(),this._){const _=E[E.length-2],t=r.getTextureType(this.t,_);t!==_&&(E[E.length-2]=t);}return this.t.texSubImage2D(...E)},texParameterf(E,_,t){return this.s(),this.t.texParameterf(E,_,t)},texParameteri(E,_,t){return this.s(),this.t.texParameteri(E,_,t)}}),t(i.prototype,{bindAttribLocation(E,_,t){return this.t.bindAttribLocation(E,_,t)},enableVertexAttribArray(E){return this.s(),this.states.attributes[E]||(this.states.attributes[E]={}),this.states.attributes[E].enable=!0,this.t.enableVertexAttribArray(E)},disableVertexAttribArray(E){return this.s(),this.states.attributes[E]||(this.states.attributes[E]={}),this.states.attributes[E].enable=!1,this.t.disableVertexAttribArray(E)},getActiveAttrib(E,_){return this.t.getActiveAttrib(E,_)},getActiveUniform(E,_){return this.t.getActiveUniform(E,_)},getAttribLocation(E,_){return this.t.getAttribLocation(E,_)},getUniformLocation(E,_){return this.t.getUniformLocation(E,_)},getVertexAttrib(E,_){return this.s(),this.t.getVertexAttrib(E,_)},getVertexAttribOffset(E,_){return this.s(),this.t.getVertexAttribOffset(E,_)},uniformMatrix2fv(E,_,t){return this.s(),this.t.uniformMatrix2fv(E,_,t)},uniformMatrix3fv(E,_,t){return this.s(),this.t.uniformMatrix3fv(E,_,t)},uniformMatrix4fv(E,_,t){return this.s(),this.t.uniformMatrix4fv(E,_,t)},uniform1f(E,_){return this.s(),this.t.uniform1f(E,_)},uniform1fv(E,_){return this.s(),this.t.uniform1fv(E,_)},uniform1i(E,_){return this.s(),this.t.uniform1i(E,_)},uniform1iv(E,_){return this.s(),this.t.uniform1iv(E,_)},uniform2f(E,_,t){return this.s(),this.t.uniform2f(E,_,t)},uniform2fv(E,_){return this.s(),this.t.uniform2fv(E,_)},uniform2i(E,_,t){return this.s(),this.t.uniform2i(E,_,t)},uniform2iv(E,_){return this.s(),this.t.uniform2iv(E,_)},uniform3f(E,_,t,R){return this.s(),this.t.uniform3f(E,_,t,R)},uniform3fv(E,_){return this.s(),this.t.uniform3fv(E,_)},uniform3i(E,_,t,R){return this.s(),this.t.uniform3i(E,_,t,R)},uniform3iv(E,_){return this.s(),this.t.uniform3iv(E,_)},uniform4f(E,_,t,R,T){return this.s(),this.t.uniform4f(E,_,t,R,T)},uniform4fv(E,_){return this.s(),this.t.uniform4fv(E,_)},uniform4i(E,_,t,R,T){return this.s(),this.t.uniform4i(E,_,t,R,T)},uniform4iv(E,_){return this.s(),this.t.uniform4iv(E,_)},vertexAttrib1f(E,_){return this.s(),this.t.vertexAttrib1f(E,_)},vertexAttrib2f(E,_,t){return this.s(),this.t.vertexAttrib2f(E,_,t)},vertexAttrib3f(E,_,t,R){return this.s(),this.t.vertexAttrib3f(E,_,t,R)},vertexAttrib4f(E,_,t,R,T){return this.s(),this.t.vertexAttrib4f(E,_,t,R,T)},vertexAttrib1fv(E,_){return this.s(),this.t.vertexAttrib1fv(E,_)},vertexAttrib2fv(E,_){return this.s(),this.t.vertexAttrib2fv(E,_)},vertexAttrib3fv(E,_){return this.s(),this.t.vertexAttrib3fv(E,_)},vertexAttrib4fv(E,_){return this.s(),this.t.vertexAttrib4fv(E,_)}}),t(i.prototype,{createVertexArray(){return this._?this.t.createVertexArray():this.vaoOES.createVertexArrayOES()},deleteVertexArray(E){const _=this.states;return _.vao===E&&(_.vao=null),this._?this.t.deleteVertexArray(E):this.vaoOES.deleteVertexArrayOES(E)},isVertexArray(E){return this._?this.t.isVertexArray(E):this.vaoOES.isVertexArrayOES(E)}}),t(i.prototype,{drawArraysInstanced(E,_,t,R){return this.s(),this.i(),this._?this.t.drawArraysInstanced(E,_,t,R):this.angleOES.drawArraysInstancedANGLE(E,_,t,R)},drawElementsInstanced(E,_,t,R,T){return this.s(),this.i(),this._?this.t.drawElementsInstanced(E,_,t,R,T):this.angleOES.drawElementsInstancedANGLE(E,_,t,R,T)}});

	const p = "function" == typeof Object.assign;

	function m(t) {
	    if (p) Object.assign.apply(Object, arguments); else for (let i = 1; i < arguments.length; i++) {
	        const s = arguments[i];
	        for (const i in s) t[i] = s[i];
	    }
	    return t;
	}

	const g = [];

	function w(t, i) {
	    const s = i._get2DExtentAtRes(i.getGLRes()), e = s.getWidth(), h = s.getHeight(), n = t;
	    return identity$2(n), translate$1(n, n, i.cameraLookAt), scale$5(n, n, set$4(g, e, h, 1)), 
	    n;
	}

	const _ = [ 0, 0 ], x = [ 0, 0, 0 ];

	let v;

	class y {
	    static getUniformDeclares() {
	        const t = [], i = [];
	        return i.push({
	            name: "shadow_lightProjViewModelMatrix",
	            type: "function",
	            fn: function(i, s) {
	                const e = s.shadow_lightProjViewMatrix, h = s.modelMatrix;
	                return multiply$5(t, e, h);
	            }
	        }), i.push("shadow_shadowMap", "shadow_opacity", "esm_shadow_threshold", "shadow_color", "shadow_nearFar"), 
	        i;
	    }
	    constructor(t, i, s) {
	        this.renderer = new z$1(t), this.sceneConfig = i, this.t = .3, this.i = s, 
	        this.s();
	    }
	    resize() {
	        const t = this.canvas;
	        t.width = this.i.getRenderer().canvas.width, t.height = this.i.getRenderer().canvas.height;
	    }
	    s() {
	        const t = this.sceneConfig.shadow || {};
	        let i = 512;
	        const s = t.quality;
	        "high" === s ? i = 2048 : "medium" === s && (i = 1024);
	        const e = this.getDefines();
	        this.h = new Un(this.renderer, {
	            width: i,
	            height: i,
	            blurOffset: t.blurOffset,
	            defines: e
	        }), this.o = new Xn(e), this.l();
	    }
	    getDefines() {
	        return {
	            "HAS_SHADOWING": 1,
	            "PACK_FLOAT": 1,
	            "USE_ESM": 1
	        };
	    }
	    render(t, i, s, e, h, n, a, c, l, u) {
	        this.u();
	        const d = this.i.getMap();
	        let f, p;
	        if (u || this.p(d, a, !!t)) {
	            this.m = this.m || [], this.g = this.g || [];
	            const e = multiply$5(this.m, i, s), h = normalize$4(this.g, n);
	            v || (v = d.getContainerExtent());
	            let c = d.height;
	            d.getPitch() > 62 && (c = d._getVisualHeight(62));
	            const l = v.set(0, d.height - c, d.width, d.height).convertTo(t => d._containerPointToPointAtRes(t, d.getGLRes())).toArray();
	            t && a.addMesh(this._);
	            const u = l.map(t => [ t.x, t.y, 0, 1 ]), {lightProjViewMatrix: m, shadowMap: g, blurFBO: w} = this.h.render(a, {
	                cameraProjViewMatrix: e,
	                lightDir: h,
	                farPlane: u,
	                cameraLookAt: d.cameraLookAt
	            });
	            f = this.v = m, p = this.S = g, this.M = w, this.C = a.getMeshes().reduce((t, i) => (i.castShadow && (t[i.uuid] = {
	                v0: i.version,
	                v1: i.geometry.version
	            }), t), {}), this.T = {
	                count: a.getMeshes().length - +!!t,
	                displayShadow: !!t
	            }, this.O = !0;
	        } else f = this.v, p = this.S, this.O = !1;
	        this.A = i, this.P = s, t && a.getMeshes().length && this.displayShadow(e, h, c, l);
	        return {
	            "shadow_lightProjViewMatrix": f,
	            "shadow_shadowMap": p,
	            "shadow_opacity": h,
	            "shadow_color": e,
	            "esm_shadow_threshold": this.t
	        };
	    }
	    displayShadow(t, i, s, e) {
	        const h = this.v, n = this._, o = this.L || [], a = this.i.getRenderer().canvas, c = this.R = this.R || [];
	        c[0] = a.width, c[1] = a.height, this.renderer.render(this.o, {
	            "halton": s || _,
	            "globalTexSize": c,
	            "projMatrix": this.A,
	            "viewMatrix": this.P,
	            "shadow_lightProjViewModelMatrix": multiply$5(o, h, n.localTransform),
	            "shadow_shadowMap": this.S,
	            "esm_shadow_threshold": this.t,
	            "shadow_opacity": i,
	            "color": t || x
	        }, this.F, e);
	    }
	    dispose() {
	        this.h.dispose(), this.o.dispose(), this._ && (this._.geometry.dispose(), this._.dispose()), 
	        delete this.renderer;
	    }
	    isUpdated() {
	        return !1 !== this.O;
	    }
	    p(t, i, s) {
	        if (!this.C) return !0;
	        const e = this.T;
	        if (i.getMeshes().length !== e.count || s !== e.displayShadow) return !0;
	        const h = i.getMeshes();
	        for (let t = 0; t < h.length; t++) {
	            const i = this.C[h[t].uuid];
	            if (h[t].castShadow && (h[t].hasSkinAnimation() || !i || i.v0 !== h[t].version || i.v1 !== h[t].geometry.version)) return !0;
	        }
	        return !1;
	    }
	    l() {
	        const t = new Ge;
	        t.generateBuffers(this.renderer.regl), this._ = new fe(t), this.F = new ge([ this._ ]);
	    }
	    u() {
	        const t = this.i.getMap(), i = w(this._.localTransform, t);
	        this._.setLocalTransform(i);
	    }
	}

	const {createIBLTextures: S, disposeIBLTextures: M, getPBRUniforms: b} = lr.PBRUtils, C = [ 0, 0 ], T = [ 1, 1 ];

	class O {
	    static getGroundTransform(t, i) {
	        return w(t, i);
	    }
	    constructor(t, i) {
	        this.I = t, this.renderer = new z$1(t), this.i = i, this.G = new de, 
	        this.N = this.D.bind(this), this.s();
	    }
	    needToRedraw() {
	        const t = this.H();
	        return t && (t[0] || t[1]);
	    }
	    getMap() {
	        return this.i && this.i.getMap();
	    }
	    getSymbol() {
	        const t = this.i.getGroundConfig();
	        return t && t.symbol;
	    }
	    isEnable() {
	        const t = this.i.getGroundConfig();
	        return t && t.enable;
	    }
	    paint(t) {
	        if (!this.isEnable()) return !1;
	        const i = this.B();
	        if (this.j(t) && i === this.V) return !1;
	        const s = this.W(t);
	        s && this._.setDefines(s), this._.material !== this.material && this._.setMaterial(this.material);
	        const e = this.i.getGroundConfig();
	        (e && e.symbol).ssr ? this._.ssr = 1 : this._.ssr = 0, this.u();
	        const h = this.k(t);
	        h.offsetFactor = t.offsetFactor, h.offsetUnits = t.offsetUnits;
	        const n = t && t.renderTarget && t.renderTarget.fbo;
	        return i === this.V ? (this.renderer.render(i, h, this.F, n), this.i.getRenderer().setCanvasUpdated(), 
	        !0) : (i.filter = t.sceneFilter, this.renderer.render(i, h, this.F, n), this.i.getRenderer().setCanvasUpdated(), 
	        !0);
	    }
	    j(t) {
	        return !(!this.i.getRenderer().isEnableSSR || !this.i.getRenderer().isEnableSSR()) && !(!t || !t.ssr);
	    }
	    update() {
	        const t = this.i.getGroundConfig();
	        if (!t) return;
	        const i = t && t.symbol;
	        if (i) {
	            this.U = this.J(i.polygonFill || [ 1, 1, 1, 1 ]), this.Y = void 0 === i.polygonOpacity ? 1 : i.polygonOpacity;
	            const t = i.polygonPatternFile;
	            if (t) {
	                if (!this.X || this.X._pattern_src !== t) {
	                    const i = new Image;
	                    i.onload = () => {
	                        this.X && this.X.destroy(), this.X = this.$(i), this.X._pattern_src = t;
	                    }, i.src = t;
	                }
	            } else this.X && (this.X.destroy(), delete this.X);
	        } else this.U = [ 1, 1, 1, 1 ], this.Y = 1, this.X && (this.X.destroy(), delete this.X);
	        this.q();
	    }
	    setToRedraw() {
	        const t = this.i.getRenderer();
	        t && t.setToRedraw();
	    }
	    dispose() {
	        this.material && (this.material.dispose(), delete this.material), this._ && (this._.geometry.dispose(), 
	        this._.material && this._.material.dispose(), this._.dispose(), delete this._), 
	        this.X && (this.X.destroy(), delete this.X), this.V && (this.V.dispose(), delete this.V), 
	        this.K && (this.K.dispose(), delete this.K), this.Z(), this.tt && (this.tt.destroy(), 
	        delete this.tt);
	        const t = this.getMap();
	        t && t.off("updatelights", this.it, this);
	    }
	    B() {
	        const t = this.i.getGroundConfig();
	        if (!t || !t.renderPlugin) return this.V;
	        const i = t.renderPlugin.type;
	        if ("lit" === i) return this.K;
	        if ("fill" === i) return this.V;
	        throw new Error("unsupported render plugin of " + i + " for layer ground");
	    }
	    k(t) {
	        const i = this.st(t);
	        i.polygonFill = this.U, i.polygonOpacity = this.Y;
	        return this.B() === this.V && this.X && (i.polygonPatternFile = this.X), i;
	    }
	    st(t) {
	        let i;
	        if ("lit" === this.i.getGroundConfig().renderPlugin.type) this.et || (this.et = S(this.I, this.getMap())), 
	        i = b(this.getMap(), this.et, this.tt, t && t.ssr, t && t.jitter); else {
	            i = {
	                projViewMatrix: this.getMap().projViewMatrix
	            };
	        }
	        return this.ht(i, t), i;
	    }
	    ht(t, i) {
	        const s = i && i.includes;
	        if (s) for (const e in s) s[e] && i[e].renderUniforms && m(t, i[e].renderUniforms);
	    }
	    Z() {
	        this.et && (M(this.et), delete this.et);
	    }
	    s() {
	        this.getMap().on("updatelights", this.it, this);
	        const t = this.nt(), i = y.getUniformDeclares(), s = [];
	        i.push({
	            name: "projViewModelMatrix",
	            type: "function",
	            fn: function(t, i) {
	                return multiply$5(s, i.projViewMatrix, i.modelMatrix);
	            }
	        }), this.V = new et$1({
	            vert: "attribute vec3 aPosition;\nuniform mat4 projViewModelMatrix;\nuniform mat4 modelMatrix;\n#ifdef HAS_PATTERN\n    attribute vec2 aTexCoord;\n    uniform vec2 uvScale;\n    uniform vec2 uvOffset;\n    varying vec2 vTexCoord;\n#endif\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n    #include <vsm_shadow_vert>\n#endif\nvoid main () {\n    #ifdef HAS_PATTERN\n        vTexCoord = aTexCoord * uvScale + uvOffset;\n    #endif\n    vec3 position = vec3(aPosition);\n    gl_Position = projViewModelMatrix * vec4(position, 1.0);\n    #if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n        shadow_computeShadowPars(vec4(position, 1.0));\n    #endif\n}",
	            frag: "precision mediump float;\n#if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n    #include <vsm_shadow_frag>\n#endif\n#ifdef HAS_PATTERN\n    uniform sampler2D polygonPatternFile;\n    varying vec2 vTexCoord;\n#endif\nuniform vec4 polygonFill;\nuniform float polygonOpacity;\nvoid main() {\n    #ifdef HAS_PATTERN\n        vec4 color = texture2D(polygonPatternFile, vTexCoord);\n    #else\n        vec4 color = polygonFill;\n    #endif\n    gl_FragColor = color * polygonOpacity;\n    #if defined(HAS_SHADOWING) && !defined(HAS_BLOOM)\n        float shadowCoeff = shadow_computeShadow();\n        gl_FragColor.rgb = shadow_blend(gl_FragColor.rgb, shadowCoeff);\n    #endif\n}",
	            uniforms: i,
	            extraCommandProps: t
	        });
	        const e = y.getUniformDeclares();
	        e.push(...wt$1.getUniformDeclares()), this.K = new lr.StandardShader({
	            uniforms: e,
	            extraCommandProps: t
	        }), this.l(), this.tt = lr.PBRHelper.generateDFGLUT(this.I), this.update();
	    }
	    nt() {
	        const t = [ 0, 1 ], i = this.i.getRenderer().canvas;
	        return {
	            viewport: {
	                x: 0,
	                y: 0,
	                width: () => i.width,
	                height: () => i.height
	            },
	            depth: {
	                enable: !0,
	                mask: () => {
	                    const t = this.i.getGroundConfig();
	                    return t.depth || void 0 === t.depth;
	                },
	                range: () => {
	                    const i = this.i.getGroundConfig(), s = i && i.renderPlugin.sceneConfig;
	                    return s && s.depthRange || t;
	                },
	                func: "<="
	            },
	            blend: {
	                enable: !0,
	                func: {
	                    src: "src alpha",
	                    dst: "one minus src alpha"
	                },
	                equation: "add"
	            },
	            polygonOffset: {
	                enable: !0,
	                offset: {
	                    factor: (t, i) => i.offsetFactor,
	                    units: (t, i) => i.offsetUnits
	                }
	            }
	        };
	    }
	    rt() {
	        const t = this.getMap().getLightManager();
	        return !!(t && t.getAmbientResource());
	    }
	    l() {
	        const t = new Ge;
	        t.data.aTexCoord = new Uint8Array([ 0, 1, 1, 1, 0, 0, 1, 0 ]), t.createTangent(), 
	        t.generateBuffers(this.renderer.regl), this._ = new fe(t, null, {
	            castShadow: !1
	        });
	        const i = this.K.getGeometryDefines(t);
	        this._.setDefines(i), this.F = new ge([ this._ ]);
	    }
	    u() {
	        const t = this.getMap(), i = O.getGroundTransform(this._.localTransform, t);
	        this._.setLocalTransform(i);
	        const s = t._get2DExtentAtRes(t.getGLRes()), e = s.getWidth(), h = s.getHeight(), n = t.cameraLookAt, r = n[0] - e, o = n[1] + h;
	        let a = this.material && this.material.get("uvOffset") || C;
	        a[0] = a[0] || 0, a[1] = a[1] || 0;
	        const c = this.H(), l = this.material && this.material.get("noiseTexture"), u = c && (c[0] || c[1]);
	        if (u) {
	            a = [ a[0], a[1] ];
	            const t = performance.now(), i = l ? 5e4 : 1e3, s = l ? 256 : 1;
	            c[0] && (a[0] = t * c[0] % i / i * s), c[1] && (a[1] = t * c[1] % i / i * s);
	        }
	        const d = this.material && this.material.get("uvScale") || T, f = .5 / d[0], p = .5 / d[1], m = s.getWidth() / f * 2, g = s.getHeight() / p * 2;
	        if (this._.setUniform("uvScale", [ m, -g ]), u && l) {
	            const t = [ r - (c[0] ? a[0] : 0), o + (c[1] ? a[1] : 0) ], i = t[0] / f % 1, s = t[1] / p % 1, e = [ t[0] / f - i, t[1] / p - s ];
	            this._.setUniform("uvOffset", [ i + (c[0] ? 0 : a[0]), s + (c[1] ? 0 : a[1]) ]), 
	            this._.setUniform("uvOrigin", e);
	        } else {
	            const t = r / f % 1, i = o / p % 1, s = [ r / f - t, o / p - i ];
	            this._.setUniform("uvOffset", [ t + a[0], i + a[1] ]), this._.setUniform("uvOrigin", s);
	        }
	    }
	    W(t) {
	        let i = !1;
	        const s = this._.defines, e = this.i.ot && this.i.ot(), h = this.i.getGroundConfig();
	        function n(t, e) {
	            t ? s[e] || (s[e] = 1, i = !0) : s[e] && (delete s[e], i = !0);
	        }
	        n(this.rt(), "HAS_IBL_LIGHTING");
	        n(t && t.ssr && h && h.symbol && h.symbol.ssr, "HAS_SSR");
	        const r = t && e && e.shadow && e.shadow.enable;
	        n(r, "HAS_SHADOWING"), n(r, "USE_ESM");
	        n(!!this.X, "HAS_PATTERN");
	        return n(t && t.ssao, "HAS_SSAO"), i ? s : null;
	    }
	    q() {
	        const t = this.getSymbol() && this.getSymbol().material;
	        if (!t) return;
	        const i = {};
	        let s = !1;
	        for (const n in t) if (e = t, h = n, Object.prototype.hasOwnProperty.call(e, h)) if (n.indexOf("Texture") > 0) {
	            let e = t[n];
	            if (!e) continue;
	            e = "string" == typeof e ? {
	                url: e,
	                wrap: "repeat"
	            } : e, e.flipY = !0, e.min = "linear", e.mag = "linear", e.flipY = !0, i[n] = new je(e, this.G), 
	            s = !0;
	        } else i[n] = t[n];
	        var e, h;
	        this.material ? (this.at = new lr.StandardMaterial(i), this.at.isReady() ? this.D() : this.at.once("complete", this.N)) : (this.material = new lr.StandardMaterial(i), 
	        this.material.once("complete", this.N, this)), s || this.D();
	    }
	    D() {
	        this.at && (this.material.dispose(), this.material = this.at, delete this.at), this.setToRedraw(!0);
	    }
	    $(t) {
	        const i = this.I, s = {
	            width: t.width,
	            height: t.height,
	            data: t,
	            mag: "linear",
	            min: "linear",
	            flipY: !1,
	            wrap: "repeat"
	        };
	        return i.texture(s);
	    }
	    it(t) {
	        if (t.ambientUpdate) {
	            this.Z();
	            const t = this.getMap();
	            t && (this.et = S(this.I, t));
	        }
	        this.setToRedraw();
	    }
	    J(t) {
	        return Array.isArray(t) ? (3 === t.length && t.push(1), t) : t;
	    }
	    H() {
	        return this.material && this.material.get("uvOffsetAnim");
	    }
	    getRenderMeshes() {
	        return this.F.getMeshes();
	    }
	}

	const {createIBLTextures: A, disposeIBLTextures: P} = lr.PBRUtils, L = [ 0, 0, 0 ], E = [], R = [];

	class F {
	    constructor(t, i) {
	        this.ct = 4, this.I = t, this.renderer = new z$1(t), this.i = i, this.s(), 
	        this.lt();
	    }
	    paint(t) {
	        if (!this.isEnable() || !this.ut) return;
	        const i = this.k(t), s = t && t.renderTarget && t.renderTarget.fbo;
	        this.renderer.render(this.dt, i, null, s);
	    }
	    update() {
	        const t = this.getMap();
	        if (!t || !this.isEnable()) return;
	        const i = t.getLightManager(), s = i && i.getAmbientResource();
	        s !== this.ut && this.et && (P(this.et), delete this.et), this.ut = s, this.lt();
	    }
	    dispose() {
	        this.dt.dispose(), P(this.et), delete this.dt, delete this.et, delete this.ut;
	    }
	    getMap() {
	        return this.i.getMap();
	    }
	    lt() {
	        if (!this.ut) return;
	        const t = this.i.ot();
	        this.dt.setMode(1, 0, t.environment && t.environment.mode ? 1 : 0);
	    }
	    isEnable() {
	        const t = this.i.ot();
	        return this.rt() && t && t.environment && t.environment.enable;
	    }
	    rt() {
	        const t = this.getMap().getLightManager();
	        return !!(t && t.getAmbientResource());
	    }
	    k() {
	        const t = this.getMap(), i = this.getMap().getLightManager().getAmbientLight();
	        let s = this.et;
	        s || (s = this.et = A(this.I, t));
	        const e = this.i.getRenderer().canvas, h = this.i.ot().environment || {}, n = h.level || 0, r = s.prefilterMap.width, c = this.ft = this.ft || [], l = i && i.hsv || L, u = h.brightness || 0;
	        return copy$4(E, l), u && (E[2] += u), R[0] = e.width, R[1] = e.height, {
	            "rgbmRange": s.rgbmRange,
	            "cubeMap": s.prefilterMap,
	            "bias": n,
	            "size": r / Math.pow(2, Math.max(0, n - 1)),
	            "environmentExposure": (d = i.exposure, "number" != typeof d || isNaN(d) ? 1 : i.exposure),
	            "diffuseSPH": s.sh,
	            "viewMatrix": t.viewMatrix,
	            "projMatrix": t.projMatrix,
	            "resolution": R,
	            "hsv": E,
	            "transformMatrix": fromRotation$2(c, Math.PI / 180 * -i.orientation || 0)
	        };
	        var d;
	    }
	    s() {
	        const t = this.getMap();
	        if (t.on("updatelights", this.update, this), this.dt = new zt, t.options.lights) {
	            const t = this.getMap().getLightManager().getAmbientResource();
	            this.ut = t;
	        }
	    }
	}

	const I = [], G = [ .03, .03, .03 ], N = [], D = [], H = [], B = [ 1, 1, 1 ], j = {
	    min: [ -800, -800, 0 ],
	    max: [ 800, 800, 1e3 ]
	}, V = fromRotationTranslation$1([], fromEuler([], 90, 0, 0), [ 0, 0, 0 ]);

	class W {
	    constructor(t, i) {
	        this.I = t, this.renderer = new z$1(t), this.i = i, this.pt = new k, this.s();
	    }
	    getMap() {
	        return this.i && this.i.getMap();
	    }
	    s() {
	        const t = this.i.getRenderer().canvas, i = {
	            x: 0,
	            y: 0,
	            width: () => t.width,
	            height: () => t.height
	        };
	        this.dt = new et$1({
	            vert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\nuniform mat4 projMatrix;\nuniform mat4 viewModelMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\nuniform vec3 cameraPosition;\nuniform float top;\nuniform float bottom;\nuniform float time;\nvarying vec2 vTexCoord;\n#include <get_output>\nfloat angle(float x, float y){\n    return atan(y, x);\n}\nvec2 getFoot(vec2 camera, vec2 normal, vec2 pos) {\n    vec2 position = vec2(0.0, 0.0);\n    float distanceLen = distance(pos, normal);\n    float a = angle(camera.x - normal.x, camera.y - normal.y);\n    pos.x > normal.x ? a -= 0.785 : a += 0.785;\n    position.x = cos(a) * distanceLen;\n    position.y = sin(a) * distanceLen;\n    return position + normal;\n    return position;\n}\nvoid main()\n{\n    vec4 localPosition = getPosition(aPosition);\n    mat4 localPositionMatrix = getPositionMatrix();\n    vec2 foot = getFoot(vec2(cameraPosition.x, cameraPosition.z), vec2(aNormal.x, aNormal.z), vec2(localPosition.x, localPosition.z));\n    float height = top - bottom;\n    float y = aNormal.y - bottom - height * time;\n    y = y + (y < 0.0 ? height : 0.0);\n    float ratio = (1.0 - y / height) * (1.0 - y / height);\n    y = height * (1.0 - ratio);\n    y += bottom;\n    y += aPosition.y - aNormal.y;\n    localPosition = vec4( foot.x, y, foot.y , 1.0);\n    gl_Position = projMatrix * viewModelMatrix * localPositionMatrix * localPosition;\n    vTexCoord = aTexCoord;\n}",
	            frag: "precision mediump float;\nvarying vec2 vTexCoord;\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D rainMap;\nvoid main() {\n    vec4 rainColor = texture2D(rainMap, vTexCoord);\n    vec4 diffuseColor = vec4(diffuse, opacity);\n    diffuseColor *= rainColor;\n    gl_FragColor = diffuseColor;\n}",
	            uniforms: [ {
	                name: "viewModelMatrix",
	                type: "function",
	                fn: function(t, i) {
	                    return multiply$5(I, i.viewMatrix, i.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: i,
	                depth: {
	                    enable: !0,
	                    mask: !1,
	                    func: "less",
	                    range: [ 0, 1 ]
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
	        const s = this.I.texture({
	            width: 2,
	            height: 2
	        });
	        if (this.gt = this.wt(), !this.gt) return;
	        this._t = new ge(this.gt);
	        const e = this.xt();
	        e.rainTexture ? this.vt(e.rainTexture).then(t => {
	            this.gt.material.set("rainMap", t);
	        }) : (this.gt.material.set("rainMap", s), console.warn("should set rain texture."));
	    }
	    wt() {
	        const t = this.getMap(), i = this.xt();
	        if (!i) return;
	        this.yt = t.getZoom();
	        const s = this.St(), e = this.Mt = i.density, h = [], n = [], r = [], o = [];
	        for (let t = 0; t < e; t++) {
	            const i = {};
	            i.x = Math.random() * (s.max[0] - s.min[0]) + s.min[0], i.y = Math.random() * (s.max[2] - s.min[2]) + s.min[2], 
	            i.z = Math.random() * (s.max[1] - s.min[1]) + s.min[1];
	            const e = (s.max[2] - s.min[2]) / 25, a = e / 5;
	            h.push(i.x + a, i.y + e, i.z, i.x - a, i.y + e, i.z, i.x - a, i.y, i.z, i.x + a, i.y, i.z), 
	            n.push(i.x, i.y - e / 2, i.z, i.x, i.y - e / 2, i.z, i.x, i.y - e / 2, i.z, i.x, i.y - e / 2, i.z), 
	            r.push(1, 1, 0, 1, 0, 0, 1, 0), o.push(4 * t + 0, 4 * t + 1, 4 * t + 2, 4 * t + 0, 4 * t + 2, 4 * t + 3);
	        }
	        const a = {};
	        a.POSITION = h, a.NORMAL = n, a.TEXCOORD_0 = r;
	        const c = new J$1(a, o, 0, {
	            primitive: "triangles",
	            positionAttribute: "POSITION",
	            normalAttribute: "NORMAL",
	            uv0Attribute: "TEXCOORD_0"
	        });
	        c.generateBuffers(this.renderer.regl);
	        const l = new Q$1({
	            rainMap: this.I.texture({
	                width: 2,
	                height: 2
	            }),
	            diffuse: i.color || [ 1, 1, 1 ],
	            opacity: i.opacity || 1
	        }), u = new fe(c, l);
	        return u.setUniform("top", s.max[2]), u.setUniform("bottom", s.min[2]), this.bt(u), 
	        u.transparent = !0, u;
	    }
	    vt(t) {
	        const i = new Image;
	        return i.src = this.Ct = t, new Promise((t, s) => {
	            i.onload = () => {
	                const s = this.I.texture({
	                    mag: "linear",
	                    min: "linear mipmap nearest",
	                    wrapS: "clamp",
	                    wrapT: "clamp",
	                    data: i
	                });
	                t(s);
	            }, i.onerror = t => {
	                s(t);
	            };
	        });
	    }
	    paint(t) {
	        if (!this._t) return;
	        const i = this.xt(), s = {}, e = this.getMap();
	        s.projMatrix = e.projMatrix, s.viewMatrix = e.viewMatrix, s.cameraPosition = e.cameraPosition;
	        const h = this.pt.getElapsedTime() / 2 % 1;
	        s.time = h, this.gt.material.set("diffuse", i.color || B), this.gt.material.set("opacity", i.opacity || 1), 
	        this.bt(this.gt);
	        const n = t && t.renderTarget && t.renderTarget.fbo;
	        this.renderer.render(this.dt, s, this._t, n), this.i.getRenderer().setCanvasUpdated();
	    }
	    bt(t) {
	        const i = this.getMap(), s = i.coordinateToPointAtRes(i.getCenter(), i.getGLRes());
	        let e = i.getGLScale() / i.getGLScale(this.yt);
	        const h = set$4(D, e, e, e), n = multiply$4(h, G, h), a = identity$2(H), l = this.xt();
	        fromRotationTranslationScale(a, fromEuler(N, l.windDirectionX, l.windDirectionY, 0), [ s.x, s.y, 0 ], n), 
	        multiply$5(a, a, V), t.setLocalTransform(a);
	    }
	    setToRedraw() {
	        const t = this.i.getRenderer();
	        t && t.setToRedraw();
	    }
	    update() {
	        const t = this.xt();
	        if (t) {
	            if (t.density !== this.Mt) {
	                const t = this.gt.material.get("rainMap");
	                this.gt.geometry.dispose(), this.gt.dispose(), this.gt.material.dispose(), this._t.clear(), 
	                this.gt = this.wt(), this.gt.material.set("rainMap", t), this._t.setMeshes(this.gt);
	            }
	            t.rainTexture !== this.Ct && this.vt().then(t => {
	                this.gt.material.set("rainMap", t);
	            });
	        }
	    }
	    dispose() {
	        this.gt && (this.gt.geometry.dispose(), this.gt.material && this.gt.material.dispose(), 
	        this.gt.dispose(), delete this.gt), this.dt && (this.dt.dispose(), delete this.dt);
	    }
	    isEnable() {
	        const t = this.xt();
	        return t && t.enable;
	    }
	    xt() {
	        const t = this.i.getWeatherConfig();
	        return t && t.rain;
	    }
	    St() {
	        const t = 16.685648411389433 - this.getMap().getZoom();
	        return j.max[0] *= Math.pow(2, t), j.max[1] *= Math.pow(2, t), j.max[2] *= Math.pow(2, t), 
	        j.min[0] *= Math.pow(2, t), j.min[1] *= Math.pow(2, t), j.min[2] *= Math.pow(2, t), 
	        j;
	    }
	}

	class k {
	    constructor(t) {
	        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, 
	        this.running = !1;
	    }
	    start() {
	        this.startTime = ("undefined" == typeof performance ? Date : performance).now(), 
	        this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
	    }
	    stop() {
	        this.getElapsedTime(), this.running = !1, this.autoStart = !1;
	    }
	    getElapsedTime() {
	        return this.getDelta(), this.elapsedTime;
	    }
	    getDelta() {
	        let t = 0;
	        if (this.autoStart && !this.running) return this.start(), 0;
	        if (this.running) {
	            let i = ("undefined" == typeof performance ? Date : performance).now();
	            t = (i - this.oldTime) / 1e3, this.oldTime = i, this.elapsedTime += t;
	        }
	    }
	}

	const U = [], z = [ .03, .03, .03 ], J = [], Y = [], X = [], $ = fromRotationTranslation$1([], fromEuler([], 90, 0, 0), [ 0, 0, 0 ]);

	class q {
	    constructor(t, i) {
	        this.I = t, this.i = i, this.s();
	    }
	    s() {
	        const t = this.i.getRenderer().canvas, i = {
	            x: 0,
	            y: 0,
	            width: () => t.width,
	            height: () => t.height
	        };
	        this.dt = new et$1({
	            vert: "#include <gl2_vert>\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nuniform mat4 projMatrix;\nuniform mat4 viewModelMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 positionMatrix;\n#include <get_output>\nvoid main()\n{\n    mat4 localPositionMatrix = getPositionMatrix();\n    vec4 localPosition = getPosition(aPosition);\n    gl_Position = projMatrix * viewModelMatrix * localPositionMatrix * localPosition;\n    vTexCoord = aTexCoord;\n}",
	            frag: "#if __VERSION__ == 100\n  #ifdef GL_OES_standard_derivatives\n    #extension GL_OES_standard_derivatives : enable\n  #endif\n#endif\nprecision mediump float;\n#include <gl2_frag>\nprecision mediump float;\nuniform sampler2D perlinTexture;\nvarying vec2 vTexCoord;\nfloat lerp(float a, float b, float w) {\n    return a + w * (b - a);\n}\nvoid main() {\n    float snowIntense = texture2D(perlinTexture, vTexCoord).r;\n    vec3 fixedC = vec3(1.0, 1.0, 1.0);\n    float r = lerp(0.5, fixedC.x, snowIntense);\n    float g = lerp(0.5, fixedC.y, snowIntense);\n    float b = lerp(0.5, fixedC.z, snowIntense);\n    glFragColor = vec4(r, g, b, 1.0);\n    #if __VERSION__ == 100\n        gl_FragColor = glFragColor;\n    #endif\n}",
	            uniforms: [ {
	                name: "viewModelMatrix",
	                type: "function",
	                fn: function(t, i) {
	                    return multiply$5(U, i.viewMatrix, i.modelMatrix);
	                }
	            } ],
	            extraCommandProps: {
	                viewport: i
	            }
	        }), this.dt.version = 300, this._t = new ge, this.Tt = this.Ot(), this._t.setMeshes(this.Tt), 
	        this.renderer = new z$1(this.I);
	        const s = this.At();
	        s && (s.snowGroundTexture ? this.Pt(s.snowGroundTexture) : (this.Lt = this.I.texture({
	            width: 2,
	            height: 2
	        }), console.warn("should set snow ground texture.")));
	    }
	    render(t) {
	        this.Lt && this.Tt.material.set("perlinTexture", this.Lt);
	        const i = this.i.getMap();
	        this.Et(i);
	        const s = {
	            projMatrix: i.projMatrix,
	            viewMatrix: i.viewMatrix,
	            cameraPosition: i.cameraPosition
	        }, e = t && t.renderTarget && t.renderTarget.fbo;
	        this.renderer.render(this.dt, s, this._t, e), this.i.getRenderer().setCanvasUpdated();
	    }
	    Et(t) {
	        const i = t.coordinateToPointAtRes(t.getCenter(), t.getGLRes());
	        let s = t.getGLScale() / t.getGLScale(this.yt);
	        const e = set$4(Y, s, s, s), h = multiply$4(e, z, e), n = identity$2(X);
	        fromRotationTranslationScale(n, fromEuler(J, 0, 0, 0), [ i.x, i.y, .005 ], h), 
	        multiply$5(n, n, $), this.Tt.setLocalTransform(n);
	    }
	    Pt(t) {
	        const i = new Image;
	        i.onload = () => {
	            this.Lt = this.I.texture({
	                mag: "linear",
	                min: "linear mipmap nearest",
	                wrapS: "repeat",
	                wrapT: "repeat",
	                data: i
	            });
	        }, i.onerror = t => {
	            console.log(t);
	        }, i.src = this.Rt = t;
	    }
	    Ot() {
	        const t = this.i.getMap();
	        this.yt = t.getZoom();
	        const i = 16e3 * Math.pow(2, 16.685648411389433 - this.yt), s = [ -i, 0, -i, i, 0, -i, -i, 0, i, i, 0, i ], e = {};
	        e.POSITION = s, e.NORMAL = [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ], e.TEXCOORD_0 = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
	        const h = new J$1(e, [ 3, 1, 0, 0, 2, 3 ], 0, {
	            positionAttribute: "POSITION",
	            normalAttribute: "NORMAL",
	            uv0Attribute: "TEXCOORD_0"
	        });
	        h.generateBuffers(this.I);
	        const n = new Q$1({
	            perlinTexture: this.I.texture({
	                with: 2,
	                height: 2
	            })
	        });
	        return new fe(h, n);
	    }
	    getMeshes() {
	        return this.Tt;
	    }
	    dispose() {
	        this.Tt && (this.Tt.geometry.dispose(), this.Tt.material && this.Tt.material.dispose(), 
	        this.Tt.dispose(), delete this.Tt), this.dt && (this.dt.dispose(), delete this.dt);
	    }
	    update() {
	        const t = this.At();
	        t && t.snowGroundTexture === !this.Rt && this.Pt(t.snowGroundTexture);
	    }
	    isEnable() {
	        const t = this.xt();
	        return t && t.enable;
	    }
	    At() {
	        const t = this.i.getWeatherConfig();
	        return t && t.snow;
	    }
	}

	const K = [];

	class Z {
	    constructor(t, i, s) {
	        this.I = t, this.i = i, this.Ft = s, this.s();
	    }
	    s() {
	        this.renderer = new z$1(this.I);
	        const t = this.i.getRenderer(), i = this.It = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        };
	        this.Gt = i.width, this.Nt = i.height, this.Dt = this.I.framebuffer({
	            color: this.I.texture({
	                width: t.canvas ? t.canvas.width : 1,
	                height: t.canvas ? t.canvas.height : 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this.EMPTY_TEXTURE = this.I.texture({
	            with: 2,
	            height: 2
	        }), this.Ht = new W(this.I, this.i), this.Bt = new Qt(this.I, i), 
	        this.jt = new q(this.I, this.i), this.Vt = new Ut(this.I, i), this.Wt = new Xt, 
	        this.Wt.version = 300;
	    }
	    getMap() {
	        return this.i && this.i.getMap();
	    }
	    renderScene(t) {
	        this.renderSnowMask(t), this.renderRain(t);
	    }
	    renderRain(t) {
	        this.isEnableRain() && this.Ht.paint(t);
	    }
	    renderSnowMask(t) {
	        if (!this.isEnableSnow()) return;
	        const i = this.getMap();
	        this.jt.render(t, i);
	    }
	    paint(t, i) {
	        if (!i || !i.length) return t;
	        this.kt();
	        const s = this.i.getWeatherConfig(), e = {};
	        if (this.isEnableRain() ? (e.ripplesMap = this.Ut(), this.Wt.shaderDefines.HAS_RAIN = 1) : delete this.Wt.shaderDefines.HAS_RAIN, 
	        this.isEnableSnow() ? (this.Wt.shaderDefines.HAS_SNOW = 1, i.forEach(t => {
	            t.defines.HAS_SNOW = 1;
	        })) : (delete this.Wt.shaderDefines.HAS_SNOW, i.forEach(t => {
	            delete t.defines.HAS_SNOW;
	        })), this.isEnableFog()) {
	            const t = s.fog;
	            e.fogColor = t.color || [ .9, .9, .9 ], this.Wt.shaderDefines.HAS_FOG = 1;
	        } else delete this.Wt.shaderDefines.HAS_FOG;
	        return this.Wt.setDefines(this.Wt.shaderDefines), e.mixFactorMap = this.zt(i), e.sceneMap = t, 
	        e.time = this.Jt() / 1e3, e.resolution = set(K, this.Dt.width, this.Dt.height), 
	        this.renderer.render(this.Wt, e, null, this.Dt), this.Dt;
	    }
	    zt(t) {
	        const i = {}, s = this.getMap(), e = s.getZoom(), h = Math.pow(2, 16.685648411389433 - e), n = this.i.getWeatherConfig().fog, r = n.start || .1, o = n.end || 100;
	        i.projMatrix = s.projMatrix, i.viewMatrix = s.viewMatrix, i.cameraPosition = s.cameraPosition, 
	        i.fogDist = [ r * h, o * h ];
	        return this.Vt.render(t, i);
	    }
	    Ut() {
	        const t = this.getMap(), i = {};
	        i.projMatrix = t.projMatrix, i.viewMatrix = t.viewMatrix, i.time = this.Jt() / 1e3;
	        return this.Bt.render(t, i);
	    }
	    Jt() {
	        if (!this.i) return 0;
	        return this.i.getRenderer().getFrameTime();
	    }
	    isEnableRain() {
	        const t = this.i.getWeatherConfig();
	        return t && t.rain && t.rain.enable;
	    }
	    isEnableFog() {
	        const t = this.i.getWeatherConfig();
	        return t && t.fog && t.fog.enable;
	    }
	    isEnableSnow() {
	        const t = this.i.getWeatherConfig();
	        return t && t.snow && t.snow.enable;
	    }
	    update() {
	        this.isEnableRain() && (this.Ht = this.Ht || new W(this.I, this.i), this.Ht.update()), 
	        this.isEnableSnow() && (this.jt = this.jt || new q(this.I, this.i), this.jt.update());
	    }
	    getShadowMeshes() {
	        return this.jt.getMeshes();
	    }
	    kt() {
	        const t = this.getMap(), i = t.width, s = t.height;
	        !this.Dt || this.Dt.width === i && this.Dt.height === s || this.Dt.resize(i, s);
	    }
	}

	const Q = [], tt = t => !!t.bloom, it = t => !!t.ssr;

	class st {
	    constructor(t, i, s) {
	        this.I = t, this.i = i, this.Yt = new z$1(t), this.Xt = new ut$1, 
	        this.$t = new yt$1(this.Yt, s), this.qt = new Vt, this.Kt = new wt$1(this.I);
	    }
	    setContextIncludes() {}
	    bloom(t, i, s, e, h, n, r) {
	        this.Zt || (this.Zt = new Ct$1(this.I));
	        const o = this.Qt.color[0];
	        return this.Zt.render(t, o, e, h, n, i, s, r);
	    }
	    drawBloom(t) {
	        const i = this.i.getRenderer(), s = this.I, e = this.Qt;
	        if (e) {
	            const {width: t, height: h} = i.canvas;
	            e.width === t && e.height === h || e.resize(t, h), s.clear({
	                color: [ 0, 0, 0, 0 ],
	                framebuffer: e
	            });
	        } else {
	            const i = this.ti(t);
	            this.Qt = s.framebuffer(i);
	        }
	        const h = i.getFrameTime(), n = i.getFrameEvent(), r = i.getFrameContext(), o = r.renderMode, a = r.sceneFilter, c = r.renderTarget;
	        r.renderMode = "default", r.sceneFilter = tt, r.renderTarget = {
	            fbo: this.Qt,
	            getFramebuffer: et,
	            getDepthTexture: ht
	        };
	        const l = i.glCtx;
	        return l.resetDrawCalls(), n ? i.forEachRenderer(t => {
	            i.clearStencil(t, e), t.drawOnInteracting(n, h, r);
	        }) : i.forEachRenderer(t => {
	            i.clearStencil(t, e), t.draw(h, r);
	        }), r.renderMode = o, r.sceneFilter = a, r.renderTarget = c, l.getDrawCalls();
	    }
	    genSsrMipmap(t, i) {
	        const s = this.i.getMap().projViewMatrix;
	        this.Kt.genMipMap(t, i, s);
	    }
	    getPrevSsrProjViewMatrix() {
	        return this.Kt && this.Kt.getPrevProjViewMatrix();
	    }
	    drawSSR(t, i, s) {
	        s && this.Kt.copyDepthTex(t);
	        const e = this.i.getRenderer(), h = e.getFrameTime(), n = e.getFrameEvent(), r = e.getFrameContext();
	        r.ssr = this.getSSRContext();
	        const o = r.renderMode, a = r.sceneFilter;
	        r.renderMode = "default", r.sceneFilter = it, r.renderTarget.fbo = i;
	        const c = e.glCtx;
	        let l = !1;
	        n ? e.forEachRenderer(t => {
	            e.clearStencil(t, i), l || (c.resetDrawCalls(), l = !0), t.drawOnInteracting(n, h, r);
	        }) : e.forEachRenderer(t => {
	            e.clearStencil(t, i), l || (c.resetDrawCalls(), l = !0), t.draw(h, r);
	        });
	        const u = e.drawGround();
	        return delete r.ssr, r.renderMode = o, r.sceneFilter = a, this.ii = c.getDrawCalls() > 0, 
	        u;
	    }
	    getSSRUniforms() {
	        const t = this.i.ot(), i = t && t.postProcess, s = this.i.getMap();
	        return this.Kt.getSSRUniforms(s, i.ssr.factor, i.ssr.quality);
	    }
	    getSSRContext() {
	        const t = this.i.ot(), i = t && t.postProcess, s = this.i.getMap(), e = this.Kt.getSSRUniforms(s, i.ssr.factor, i.ssr.quality);
	        if (!e) return null;
	        return {
	            renderUniforms: e,
	            defines: {
	                "HAS_SSR": 1
	            }
	        };
	    }
	    taa(t, i, {projMatrix: s, needClear: e}) {
	        const h = this.$t;
	        return {
	            outputTex: h.render(t, i, s, e),
	            redraw: h.needToRedraw()
	        };
	    }
	    isTaaNeedRedraw() {
	        return this.$t.needToRedraw();
	    }
	    ssao(t, i, s) {
	        return this.si || (this.si = new gt$1(this.Yt), this.i.getRenderer().setToRedraw()), 
	        this.si.render({
	            projMatrix: s.projMatrix,
	            cameraNear: s.cameraNear,
	            cameraFar: s.cameraFar,
	            bias: s.ssaoBias,
	            radius: s.ssaoRadius,
	            intensity: s.ssaoIntensity,
	            quality: .6
	        }, t, i);
	    }
	    fxaa(t, i, s, e, h, n, r, o, a, c, u, d, f, p, m, g) {
	        !t || t.width === i.fbo && t.height === i.height || t.resize(i.width, i.height);
	        const w = {};
	        h ? w.HAS_TAA_TEX = 1 : delete w.HAS_TAA_TEX, n ? w.HAS_FXAA_TEX = 1 : delete w.HAS_FXAA_TEX, 
	        d ? w.HAS_OUTLINE_TEX = 1 : delete w.HAS_OUTLINE_TEX, s ? w.HAS_NOAA_TEX = 1 : delete w.HAS_NOAA_TEX, 
	        e ? w.HAS_POINT_TEX = 1 : delete w.HAS_POINT_TEX, this.Xt.setDefines(w), this.Yt.render(this.Xt, {
	            textureSource: i,
	            noAaTextureSource: s,
	            pointTextureSource: e,
	            taaTextureSource: h,
	            fxaaTextureSource: n,
	            resolution: set(Q, i.width, i.height),
	            enableFXAA: r,
	            enableToneMapping: o,
	            enableSharpen: a,
	            pixelRatio: c,
	            sharpFactor: u,
	            textureOutline: d,
	            highlightFactor: f,
	            outlineFactor: p,
	            outlineWidth: m,
	            outlineColor: g
	        }, null, t);
	    }
	    renderFBOToScreen(t, i, s, e) {
	        this.ei || (this.ei = []), this.ei[0] = t.width, this.ei[1] = t.height, this.Yt.render(this.qt, {
	            texture: t.color && t.color[0] || t,
	            size: this.ei,
	            enableSharpen: +!!i,
	            sharpFactor: s,
	            pixelRatio: e
	        });
	    }
	    postprocess(t, i, s) {
	        this.hi || (this.hi = new pt$1);
	        const e = s || t.color[0];
	        return i.resolution = set(Q, e.width, e.height), i.textureSource = e, i.timeGrain = performance.now(), 
	        this.Yt.render(this.hi, i), this.ni;
	    }
	    dispose() {
	        this.Qt && (this.Qt.destroy(), delete this.Qt), this.$t && (this.$t.dispose(), delete this.$t), 
	        this.si && (this.si.dispose(), delete this.si), this.Zt && (this.Zt.dispose(), delete this.Zt), 
	        this.hi && (this.hi.dispose(), delete this.hi), this.Xt && (this.Xt.dispose(), delete this.Xt), 
	        this.qt && (this.qt.dispose(), delete this.qt);
	    }
	    ti(t, i) {
	        const {width: s, height: e} = this.i.getRenderer().canvas, h = {
	            width: s,
	            height: e,
	            colors: [ this.I.texture({
	                min: "nearest",
	                mag: "nearest",
	                format: i || "rgba",
	                width: s,
	                height: e
	            }) ]
	        };
	        return t && (h.depthStencil = t), h;
	    }
	}

	function et(t) {
	    return t._framebuffer.framebuffer;
	}

	function ht(t) {
	    return t.depthStencil._texture.texture;
	}

	class nt {
	    constructor(t, i, s) {
	        this.I = t, this.i = i, this.Ft = s, this.s();
	    }
	    s() {
	        this.renderer = new z$1(this.I);
	        const t = this.i.getRenderer(), i = this.It = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        };
	        this.Dt = this.I.framebuffer({
	            color: this.I.texture({
	                width: t.canvas ? t.canvas.width : 1,
	                height: t.canvas ? t.canvas.height : 1,
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this.dt = new Nt(i);
	    }
	    getMap() {
	        return this.i && this.i.getMap();
	    }
	    paint(t, i) {
	        if (!i || !i.length) return t;
	        this.kt();
	        const s = {}, e = this.i.ri;
	        if (!e) return t;
	        delete this.dt.shaderDefines.HAS_FLOODANALYSE, delete this.dt.shaderDefines.HAS_VIEWSHED, 
	        delete this.dt.shaderDefines.HAS_SKYLINE;
	        for (let t = 0; t < e.length; t++) {
	            const h = e[t], n = h.getDefines();
	            m(this.dt.shaderDefines, n);
	            const r = this.getMap(), o = r.width, a = r.height, c = h.renderAnalysis(i, o, a);
	            c && m(s, c);
	        }
	        return s.sceneMap = t, this.dt.setDefines(this.dt.shaderDefines), this.renderer.render(this.dt, s, null, this.Dt), 
	        this.Dt;
	    }
	    kt() {
	        const t = this.i.getMap(), i = t.width, s = t.height;
	        !this.Dt || this.Dt.width === i && this.Dt.height === s || this.Dt.resize(i, s);
	    }
	}

	const rt = [ 0, 0, 0, 0 ], ot = [ 0, 0 ], at = t => !t.bloom && !t.ssr, ct = t => !t.bloom, lt = t => !t.ssr;

	class ut extends t__namespace.renderer.CanvasRenderer {
	    setToRedraw() {
	        this.setRetireFrames(), super.setToRedraw();
	    }
	    onAdd() {
	        super.onAdd(), this.prepareCanvas();
	    }
	    updateSceneConfig() {
	        this.oi && this.oi.update(), this.ai && this.ai.update(), this.ci && this.ci.update(), 
	        this.setToRedraw();
	    }
	    render(...t) {
	        this.getMap() && this.layer.isVisible() && (this.forEachRenderer(t => {
	            t._replacedDrawFn || (t.draw = this.li(t.draw), t.drawOnInteracting = this.ui(t.drawOnInteracting), 
	            t.setToRedraw = this.di(t.setToRedraw), t._replacedDrawFn = !0);
	        }), this.prepareRender(), this.prepareCanvas(), this.layer.fi(), this._toRedraw = !1, 
	        this.pi("render", t), this.mi(), this.gi());
	    }
	    prepareCanvas() {
	        super.prepareCanvas(), this.forEachRenderer(t => {
	            t.prepareCanvas();
	        });
	    }
	    drawOnInteracting(...t) {
	        this.getMap() && this.layer.isVisible() && (this.layer.fi(), this._toRedraw = !1, 
	        this.pi("drawOnInteracting", t), this.mi(), this.gi());
	    }
	    pi(t, i) {
	        this.wi = "default";
	        const s = this.hasRenderTarget(), e = this._i(i);
	        if (s && (this.xi.renderTarget = this.vi()), this.ai.paint(e), this.drawGround(!0), 
	        !s) return void this.yi("default", null, t, i, !0);
	        const h = this.glCtx, n = this.layer.ot(), r = n && n.postProcess, o = this.isSSROn(), a = this.isEnableTAA(), c = e.jitter;
	        if (e.jitter = ot, h.resetDrawCalls(), this.yi(a ? "fxaaBeforeTaa" : "fxaa", this.Si, t, i), 
	        this.Mi = h.getDrawCalls(), o && this.bi.drawSSR(this.Ci, this.Si), a) {
	            const s = this.getMap(), n = this.bi.isTaaNeedRedraw() || this.Ti || s.getRenderer().isViewChanged();
	            e.jitter = n ? c : this.Oi.getAverage(), e.onlyUpdateDepthInTaa = !n;
	            let o = this.Ai;
	            if (o) o.width === this.Si.width && o.height === this.Si.height || o.resize(this.Si.width, this.Si.height); else {
	                const t = this.regl, i = this.ti(r, this.Ci);
	                o = this.Ai = t.framebuffer(i);
	            }
	            h.resetDrawCalls(), this.yi("taa", o, t, i), this.Pi = h.getDrawCalls(), delete e.onlyUpdateDepthInTaa, 
	            e.jitter = ot;
	            let a = this.Li;
	            if (a) a.width === this.Si.width && a.height === this.Si.height || a.resize(this.Si.width, this.Si.height); else {
	                const t = this.regl, i = this.ti(r, this.Ci);
	                a = this.Li = t.framebuffer(i);
	            }
	            h.resetDrawCalls(), this.yi("fxaaAfterTaa", this.Li, t, i), this.Ei = h.getDrawCalls();
	        } else this.Ai && (this.Ai.destroy(), this.Li.destroy(), delete this.Ai, delete this.Li, 
	        delete this.Ei);
	        r.bloom && r.bloom.enable && (this.Ri = this.bi.drawBloom(this.Ci)), 2 === o && this.bi.drawSSR(this.Ci, this.Si, !0), 
	        h.resetDrawCalls(), this.yi("noAa", this.Fi, t, i, !0), this.Ii = h.getDrawCalls(), 
	        h.resetDrawCalls(), this.yi("point", this.Gi, t, i, !0), this.ci.renderScene(e), 
	        this.Ni = h.getDrawCalls();
	    }
	    yi(t, i, s, e, h) {
	        this.wi = t;
	        const n = this._i(e);
	        n.renderMode = this.wi, n.renderTarget && (n.renderTarget.fbo = i), h && (n.isFinalRender = !0), 
	        this.forEachRenderer((h, n) => {
	            n.isVisible() && ("default" === t || !h.supportRenderMode && ("fxaa" === t || "fxaaAfterTaa" === t) || h.supportRenderMode && h.supportRenderMode(t)) && (this.clearStencil(h, i), 
	            h[s].apply(h, e));
	        });
	    }
	    _i(t) {
	        let i = t[0];
	        return dt(i) || (i = t[1]), i !== this.Di && (this.forEachRenderer((t, i) => {
	            i.isVisible() && t.needRetireFrames && t.needRetireFrames() && this.setRetireFrames();
	        }), this.xi = this.Hi(i), this.Di = i, this.Bi = dt(t[0]) ? null : t[0]), this.xi;
	    }
	    mi() {
	        if (!this.isEnableOutline()) return;
	        const t = this.ji(), i = this.glCtx;
	        i.resetDrawCalls(), this.forEachRenderer((i, s) => {
	            s.isVisible() && i.drawOutline && i.drawOutline(t);
	        }), this.Vi = i.getDrawCalls();
	    }
	    Wi(t) {
	        this.isEnableRain() && this.Ht.paint(t);
	    }
	    ji() {
	        const {width: t, height: i} = this.canvas;
	        let s = this.ki;
	        if (s) t === s.width && i === s.height || s.resize(t, i); else {
	            const e = this.regl.texture({
	                width: t,
	                height: i,
	                format: "rgba4"
	            });
	            s = this.ki = this.regl.framebuffer({
	                width: t,
	                height: i,
	                colors: [ e ],
	                depth: !1,
	                stencil: !1
	            });
	        }
	        return s;
	    }
	    hasRenderTarget() {
	        const t = this.layer.ot(), i = t && t.postProcess;
	        return !(!i || !i.enable);
	    }
	    testIfNeedRedraw() {
	        if (this._toRedraw) return this._toRedraw = !1, !0;
	        if (this.getMap().isInteracting() && this.oi && this.oi.isEnable()) return !0;
	        if (this.Ht && this.Ht.isEnable()) return !0;
	        const t = this.layer.getLayers();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && t.testIfNeedRedraw()) return this.Ui = !0, !0;
	        }
	        return !1;
	    }
	    isRenderComplete() {
	        const t = this.layer.getLayers();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && !t.isRenderComplete()) return !1;
	        }
	        return !0;
	    }
	    mustRenderOnInteracting() {
	        const t = this.layer.getLayers();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && t.mustRenderOnInteracting()) return !0;
	        }
	        return !1;
	    }
	    isCanvasUpdated() {
	        if (super.isCanvasUpdated()) return !0;
	        const t = this.layer.getLayers();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && t.isCanvasUpdated()) return !0;
	        }
	        return !1;
	    }
	    isBlank() {
	        if (this.oi && this.oi.isEnable()) return !1;
	        const t = this.layer.getLayers();
	        for (const i of t) {
	            const t = i.getRenderer();
	            if (t && !t.isBlank()) return !1;
	        }
	        return !0;
	    }
	    createContext() {
	        const t = this.layer, i$1 = t.options.glOptions || {
	            alpha: !0,
	            depth: !0,
	            stencil: !0
	        };
	        i$1.preserveDrawingBuffer = !0, i$1.antialias = t.options.antialias, this.glOptions = i$1;
	        const s = this.gl = this.zi(this.canvas, i$1);
	        this.Ji(s), s.wrap = () => new i(this.gl), this.glCtx = s.wrap(), this.canvas.gl = this.gl, 
	        this.reglGL = s.wrap(), this.regl = f$2({
	            gl: this.reglGL,
	            attributes: i$1,
	            extensions: t.options.extensions,
	            optionalExtensions: t.options.optionalExtensions
	        }), this.gl.regl = this.regl, this.Yi = [ 0, 0 ], this.oi = new O(this.regl, this.layer), 
	        this.ai = new F(this.regl, this.layer);
	        const e = this.layer.getWeatherConfig();
	        this.ci = new Z(this.regl, t, e), this.Xi = new nt(this.regl, t);
	        const h = this.layer.ot() || {}, n = h && h.postProcess, r = n && n.antialias && n.antialias.jitterRatio || .2;
	        this.Oi = new Mt$1(r), this.bi = new st(this.regl, this.layer, this.Oi), this.h = new y(this.regl, h, this.layer);
	    }
	    Ji() {
	        const t = this.layer, i = this.gl, s = t.options.extensions;
	        s && s.forEach(t => {
	            i.getExtension(t);
	        });
	        const e = t.options.optionalExtensions;
	        e && e.forEach(t => {
	            i.getExtension(t);
	        }), this.gl.clearColor(0, 0, 0, 0);
	    }
	    clearCanvas() {
	        super.clearCanvas(), this.$i();
	    }
	    $i() {
	        const t = this.regl;
	        this.Si && (t.clear({
	            color: rt,
	            depth: 1,
	            stencil: 255,
	            framebuffer: this.Si
	        }), t.clear({
	            color: rt,
	            framebuffer: this.Fi
	        }), t.clear({
	            color: rt,
	            framebuffer: this.Gi
	        }), this.Ai && this.Pi && t.clear({
	            color: rt,
	            framebuffer: this.Ai
	        }), this.Li && this.Ei && t.clear({
	            color: rt,
	            framebuffer: this.Li
	        })), this.ki && t.clear({
	            color: rt,
	            framebuffer: this.ki
	        }), t.clear({
	            color: rt,
	            depth: 1,
	            stencil: 255
	        });
	    }
	    resizeCanvas() {
	        super.resizeCanvas();
	        const t = this.canvas.width, i = this.canvas.height;
	        !this.Si || this.Si.width === t && this.Si.height === i || (this.Si.resize(t, i), 
	        this.Fi.resize(t, i), this.Gi.resize(t, i), this.Ai && this.Ai.resize(t, i), this.Li && this.Li.resize(t, i)), 
	        this.$i(), this.forEachRenderer(t => {
	            t.canvas && t.resizeCanvas();
	        });
	    }
	    getCanvasImage() {
	        return this.forEachRenderer(t => {
	            t.getCanvasImage();
	        }), super.getCanvasImage();
	    }
	    forEachRenderer(t) {
	        const i = this.layer.getLayers();
	        for (const s of i) {
	            if (!s.isVisible()) continue;
	            const i = s.getRenderer();
	            i && t(i, s);
	        }
	    }
	    zi(t, i) {
	        const s = this.layer.options.onlyWebGL1 ? [ "webgl", "experimental-webgl" ] : [ "webgl2", "webgl", "experimental-webgl" ];
	        let e = null;
	        for (let h = 0; h < s.length; ++h) {
	            try {
	                e = t.getContext(s[h], i);
	            } catch (t) {}
	            if (e) break;
	        }
	        return e;
	    }
	    clearStencil(t, i) {
	        const s = {
	            stencil: t.getStencilValue ? t.getStencilValue() : 255
	        };
	        i && (s.framebuffer = i), this.regl.clear(s);
	    }
	    onRemove() {
	        this.canvas.pickingFBO && this.canvas.pickingFBO.destroy && this.canvas.pickingFBO.destroy(), 
	        this.qi(), this.oi && (this.oi.dispose(), delete this.oi), this.ai && (this.ai.dispose(), 
	        delete this.ai), this.h && (this.h.dispose(), delete this.h), this.bi && (this.bi.dispose(), 
	        delete this.bi), this.ki && (this.ki.destroy(), delete this.ki), this.Ht && (this.Ht.dispose(), 
	        delete this.Ht), super.onRemove();
	    }
	    qi() {
	        this.Si && (this.Si.destroy(), this.Fi.destroy(), this.Gi.destroy(), this.Ai && (this.Ai.destroy(), 
	        delete this.Ai), this.Li && (this.Li.destroy(), delete this.Li), delete this.Si, 
	        delete this.Fi, delete this.Gi, this.Ki && (this.Ki.destroy(), delete this.Ki));
	    }
	    setRetireFrames() {
	        this.Ti = !0;
	    }
	    getFrameTime() {
	        return this.Di;
	    }
	    getFrameEvent() {
	        return this.Bi;
	    }
	    getFrameContext() {
	        return this.xi;
	    }
	    drawGround(t) {
	        if (!this.oi) return !1;
	        const i = this.getFrameContext(), s = i.jitter;
	        let e;
	        i.jitter = ot, i.offsetFactor = 2, i.offsetUnits = 2, t && (e = i.sceneFilter, delete i.sceneFilter);
	        const h = this.oi.paint(i);
	        return this.oi.needToRedraw() && this.setToRedraw(), e && (i.sceneFilter = e), i.jitter = s, 
	        h;
	    }
	    li(t) {
	        const i = this;
	        return function(s, e) {
	            return (e = e || i.xi) && e.renderTarget && (e.renderTarget.getFramebuffer = ft, 
	            e.renderTarget.getDepthTexture = pt), t.call(this, s, e);
	        };
	    }
	    ui(t) {
	        const i = this;
	        return function(s, e, h) {
	            return (h = h || i.xi) && h.renderTarget && (h.renderTarget.getFramebuffer = ft, 
	            h.renderTarget.getDepthTexture = pt), t.call(this, s, e, h);
	        };
	    }
	    di(t) {
	        return function(...i) {
	            return t.apply(this, i);
	        };
	    }
	    isEnableSSR() {
	        const t = this.layer.ot(), i = t && t.postProcess;
	        return i && i.enable && i.ssr && i.ssr.enable;
	    }
	    isSSROn() {
	        const t = this.isEnableSSR(), i = this.getMap();
	        if (!t || i.getPitch() <= -.001) return 0;
	        const s = i.projViewMatrix, e = this.bi.getPrevSsrProjViewMatrix();
	        return e && exactEquals$5(e, s) ? 1 : 2;
	    }
	    isEnableTAA() {
	        const t = this.layer.ot(), i = t && t.postProcess;
	        return i && i.antialias && i.antialias.enable && i.antialias.taa;
	    }
	    isEnableSSAO() {
	        const t = this.layer.ot(), i = t && t.postProcess;
	        return i && i.enable && i.ssao && i.ssao.enable;
	    }
	    isEnableOutline() {
	        const t = this.layer.ot(), i = t && t.postProcess;
	        return i && i.enable && i.outline && i.outline.enable;
	    }
	    isEnableWeather() {
	        const t = this.layer.ot(), i = t && t.weather;
	        return i && i.enable;
	    }
	    Zi() {
	        const t = this.layer.getMap();
	        if (!this.T) {
	            this.T = {
	                center: t.getCenter(),
	                bearing: t.getBearing(),
	                pitch: t.getPitch(),
	                res: t.getResolution()
	            };
	            let i = !1;
	            if (t.options.lights) {
	                const s = t.getLightManager().getDirectionalLight().direction;
	                this.T.lightDirection = copy$4([], s), i = !0;
	            }
	            return {
	                viewChanged: !0,
	                lightDirectionChanged: i
	            };
	        }
	        const i = t.getResolution() / this.T.res, s = t.coordToContainerPoint(this.T.center), e = this.layer.options.viewMoveThreshold, h = s._sub(t.width / 2, t.height / 2).mag() > e || i < .95 || i > 1.05;
	        let n = !1;
	        if (t.options.lights) {
	            const i = t.getLightManager().getDirectionalLight().direction;
	            n = !equals$4(this.T.lightDirection, i), n && (this.T.lightDirection = copy$4([], i));
	        }
	        return h && (this.T.center = t.getCenter(), this.T.bearing = t.getBearing(), this.T.pitch = t.getPitch(), 
	        this.T.res = t.getResolution()), {
	            viewChanged: h,
	            lightDirectionChanged: n
	        };
	    }
	    Hi(t) {
	        const i = this.layer.ot(), s = i && i.postProcess, e = i && i.weather, h = {
	            timestamp: t,
	            renderMode: this.wi || "default",
	            includes: {},
	            states: this.Zi(),
	            testSceneFilter: t => !h.sceneFilter || h.sceneFilter(t),
	            isFinalRender: !1,
	            weather: {
	                fog: e && e.fog
	            }
	        }, n = s && s.antialias && s.antialias.jitterRatio || .2, r = this.Oi;
	        r.setRatio(n);
	        const o = this.isSSROn();
	        let a;
	        if (s && s.enable) {
	            if (this.isEnableTAA()) {
	                (this.getMap().isInteracting() || this.Ti) && r.reset(), r.getJitter(this.Yi), r.frame();
	            } else set(this.Yi, 0, 0);
	            h.jitter = this.Yi;
	            const t = s.bloom && s.bloom.enable;
	            t && o ? (h.bloom = 1, h.sceneFilter = at) : t ? (h.bloom = 1, h.sceneFilter = ct) : o && (h.sceneFilter = lt), 
	            a = this.vi(), a && (h.renderTarget = a);
	        } else this.qi();
	        return "noAa" !== this.wi && (this.Qi = this.ts(h), this.Qi && (h.includes.shadow = 1), 
	        this.ss = this.es(h)), this.Qi && (h.shadow = this.Qi, h.includes.shadow = 1), h.states.includesChanged = this.ss, 
	        s && s.enable && this.bi && this.bi.setContextIncludes(h), h;
	    }
	    hs(t) {
	        let i = [];
	        return this.forEachRenderer(t => {
	            if (!t.getAnalysisMeshes) return;
	            const s = t.getAnalysisMeshes();
	            if (Array.isArray(s)) for (let t = 0; t < s.length; t++) i.push(s[t]);
	        }), this.Xi.paint(t, i);
	    }
	    es(t) {
	        let i = !1;
	        const s = Object.keys(t.includes), e = this.ns;
	        if (e) {
	            const t = s.filter(t => -1 === e.indexOf(t)).concat(e.filter(t => -1 === s.indexOf(t)));
	            t.length && (i = t.reduce((t, i) => (t[i] = 1, t), {}));
	        }
	        return this.ns = s, i;
	    }
	    ts(t) {
	        const i = this.layer.ot();
	        if (!i || !i.shadow || !i.shadow.enable) return this.h && (this.h.dispose(), delete this.h), 
	        null;
	        this.h || (this.h = new y(this.regl, this.layer.ot() || {}, this.layer));
	        const s = {
	            config: i.shadow,
	            defines: this.h.getDefines(),
	            uniformDeclares: y.getUniformDeclares()
	        };
	        return s.renderUniforms = this.rs(t), s;
	    }
	    rs(t) {
	        const i = t.renderTarget && t.renderTarget.fbo, s = this.layer.ot(), e = [];
	        let h = t.states.lightDirectionChanged || t.states.viewChanged;
	        this.forEachRenderer((t, i) => {
	            if (!t.getShadowMeshes || !i.isVisible()) return;
	            const s = t.getShadowMeshes();
	            if (Array.isArray(s)) for (let t = 0; t < s.length; t++) s[t].needUpdateShadow && (h = !0), 
	            s[t].needUpdateShadow = !1, e.push(s[t]);
	        }), this.os || (this.os = new ge), this.os.setMeshes(e);
	        const n = this.getMap(), r = s.shadow, o = n.getLightManager().getDirectionalLight().direction, a = !s.ground || !s.ground.enable;
	        return this.h.render(a, n.projMatrix, n.viewMatrix, r.color, r.opacity, o, this.os, this.Yi, i, h);
	    }
	    as(t) {
	        let i = [];
	        if (this.forEachRenderer((t, s) => {
	            if (!t.getShadowMeshes || !s.isVisible()) return;
	            const e = t.getShadowMeshes();
	            i = i.concat(e);
	        }), this.oi) {
	            const t = this.oi.getRenderMeshes();
	            i = i.concat(t);
	        }
	        const s = this.layer.getWeatherConfig();
	        return this.ci.paint(t, i, s);
	    }
	    vi() {
	        const t = this.layer.ot(), i = t && t.postProcess;
	        if (!this.Si) {
	            const t = this.regl;
	            let s = this.Ci;
	            (!s || !s._texture || s._texture.refCount <= 0) && (s = null);
	            const e = this.ti(i, s);
	            this.Ci = e.depth || e.depthStencil, this.Si = t.framebuffer(e);
	            const h = this.ti(i, this.Ci);
	            this.Fi = t.framebuffer(h);
	            const n = this.ti(i, this.Ci);
	            this.Gi = t.framebuffer(n), this.$i();
	        }
	        return {
	            fbo: this.Si
	        };
	    }
	    cs() {
	        const t = this.canvas.width, i = this.canvas.height;
	        return {
	            width: t,
	            height: i,
	            colors: [ this.regl.texture({
	                min: "nearest",
	                mag: "nearest",
	                type: "uint8",
	                width: t,
	                height: i
	            }) ],
	            colorFormat: "rgba"
	        };
	    }
	    ti(t, i) {
	        const {width: s, height: e} = this.canvas, h = this.regl, n = this.cs();
	        if (h.hasExtension("WEBGL_depth_texture")) {
	            const t = i || h.texture({
	                min: "nearest",
	                mag: "nearest",
	                mipmap: !1,
	                type: "depth stencil",
	                width: s,
	                height: e,
	                format: "depth stencil"
	            });
	            n.depthStencil = t;
	        } else {
	            const t = i || h.renderbuffer({
	                width: s,
	                height: e,
	                format: "depth stencil"
	            });
	            n.depthStencil = t;
	        }
	        return n;
	    }
	    gi() {
	        if (!this.Si) return void (this.Ti = !1);
	        const t = this.layer.ot(), i = t && t.postProcess;
	        if (!i || !i.enable) return;
	        this.layer.fire("postprocessstart");
	        const s = this.layer.getMap();
	        let e;
	        if (this.isEnableTAA()) {
	            const t = this.Ti || s.getRenderer().isViewChanged();
	            t && this.layer.fire("taastart");
	            const {outputTex: i, redraw: h} = this.bi.taa(this.Ai.color[0], this.Ci, {
	                projMatrix: s.projMatrix,
	                needClear: t
	            });
	            e = i, h ? this.setToRedraw() : this.layer.fire("taaend"), this.Ti = !1;
	        }
	        let h = i.sharpen && i.sharpen.factor;
	        h || 0 === h || (h = .2);
	        let n = 0, r = .2, o = .3, a = 1, c = [ 1, 1, 0 ];
	        i.outline && (n = +!!i.outline.enable, r = mt(i.outline, "highlightFactor", r), 
	        o = mt(i.outline, "outlineFactor", o), a = mt(i.outline, "outlineWidth", a), c = mt(i.outline, "outlineColor", c));
	        const l = this.isEnableSSAO(), u = i.ssr && i.ssr.enable, d = i.bloom && i.bloom.enable, f = d && this.Ri, p = +!(!i.antialias || !i.antialias.enable), m = l || d || u;
	        let g = this.Ki;
	        if (m) {
	            if (!g) {
	                const t = this.cs();
	                g = this.Ki = this.regl.framebuffer(t);
	            }
	            const {width: t, height: i} = this.canvas;
	            g.width === t && g.height === i || g.resize(t, i);
	        } else g = null, this.Ki && (this.Ki.destroy(), delete this.Ki);
	        let w = this.Si.color[0];
	        const _ = this.Ii && this.Fi.color[0], x = this.Ni && this.Gi.color[0];
	        if (this.bi.fxaa(g, w, !f && _, !f && x, e, this.Ei && this.Li && this.Li.color[0], p, +!(!i.toneMapping || !i.toneMapping.enable), +!(m || !i.sharpen || !i.sharpen.enable), s.getDevicePixelRatio(), h, n && this.Vi > 0 && this.ji(), r, o, a, c), 
	        g && (w = g.color[0]), l && (this.Ei || this.Pi || this.Mi) && (w = this.bi.ssao(w, this.Ci, {
	            projMatrix: s.projMatrix,
	            cameraNear: s.cameraNear,
	            cameraFar: s.cameraFar,
	            ssaoBias: i.ssao && i.ssao.bias || 10,
	            ssaoRadius: i.ssao && i.ssao.radius || 100,
	            ssaoIntensity: i.ssao && i.ssao.intensity || .5
	        })), d && this.Ri) {
	            const t = i.bloom, s = +t.threshold || 0, e = mt(t, "factor", 1), h = mt(t, "radius", 1);
	            w = this.bi.bloom(w, _, x, s, e, h, p);
	        }
	        if (u && (this.bi.genSsrMipmap(w, this.Ci), this.Ui)) {
	            const t = this.Ti;
	            this.setToRedraw(), this.Ti = t, this.Ui = !1;
	        }
	        this.Xi && (w = this.hs(w)), this.isEnableWeather() && (w = this.as(w)), m && this.bi.renderFBOToScreen(w, +!(!i.sharpen || !i.sharpen.enable), h, s.getDevicePixelRatio()), 
	        this.layer.fire("postprocessend");
	    }
	}

	function dt(t) {
	    return "number" == typeof t && !isNaN(t);
	}

	function ft(t) {
	    return t._framebuffer.framebuffer;
	}

	function pt(t) {
	    return t.depthStencil._texture.texture;
	}

	function mt(t, i, s) {
	    return null == t[i] ? s : t[i];
	}

	class gt extends t__namespace.Layer {
	    static fromJSON(i) {
	        if (!i || "GroupGLLayer" !== i.type) return null;
	        const s = i.layers.map(i => t__namespace.Layer.fromJSON(i));
	        return new gt(i.id, s, i.options);
	    }
	    constructor(t, i, s) {
	        super(t, s), this.layers = i || [], this.layers.forEach(t => {
	            if (t.getMap()) throw new Error(`layer(${t.getId()} is already added on map`);
	        }), this.ls(), this.sortLayersByZIndex(), this.us = {};
	    }
	    sortLayersByZIndex() {
	        if (this.layers && this.layers.length) {
	            for (let t = 0, i = this.layers.length; t < i; t++) this.layers[t].ds = t;
	            this.layers.sort(_t);
	        }
	    }
	    setSceneConfig(t) {
	        this.options.sceneConfig = t;
	        const i = this.getRenderer();
	        return i && i.updateSceneConfig(), this;
	    }
	    getSceneConfig() {
	        return JSON.parse(JSON.stringify(this.options.sceneConfig || {}));
	    }
	    ot() {
	        return this.options.sceneConfig;
	    }
	    getGroundConfig() {
	        const t = this.ot();
	        return t ? t.ground : null;
	    }
	    getWeatherConfig() {
	        const t = this.ot();
	        return t && t.weather;
	    }
	    addLayer(t, i) {
	        if (t.getMap()) throw new Error(`layer(${t.getId()} is already added on map`);
	        void 0 === i ? this.layers.push(t) : this.layers.splice(i, 0, t), this.ls(), this.sortLayersByZIndex();
	        const s = this.getRenderer();
	        return s ? (this.fs(t), s.setToRedraw(), this) : this;
	    }
	    removeLayer(i) {
	        t__namespace.Util.isString(i) && (i = this.getChildLayer(i));
	        const s = this.layers.indexOf(i);
	        if (s < 0) return this;
	        i._doRemove(), i.off("show hide", this.ps, this), i.off("idchange", this.ms, this), 
	        delete this.us[i.getId()], this.layers.splice(s, 1);
	        const e = this.getRenderer();
	        return e ? (e.setToRedraw(), this) : this;
	    }
	    fi() {
	        let t = 0;
	        for (let i = 0; i < this.layers.length; i++) this.layers[i].setPolygonOffset && this.layers[i].getPolygonOffsetCount && (t += this.layers[i].getPolygonOffsetCount());
	        let i = 0;
	        for (let s = 0; s < this.layers.length; s++) this.layers[s].setPolygonOffset && this.layers[s].getPolygonOffsetCount && (this.layers[s].setPolygonOffset(i, t), 
	        i += this.layers[s].getPolygonOffsetCount());
	    }
	    getLayers() {
	        return this.layers;
	    }
	    toJSON() {
	        const t = [];
	        if (this.layers) for (let i = 0; i < this.layers.length; i++) {
	            const s = this.layers[i];
	            s && (s && s.toJSON && t.push(s.toJSON()));
	        }
	        return {
	            "type": this.getJSONType(),
	            "id": this.getId(),
	            "layers": t,
	            "options": this.config()
	        };
	    }
	    onLoadEnd() {
	        this.layers.forEach(t => {
	            this.fs(t);
	        }), super.onLoadEnd();
	    }
	    fs(t) {
	        const i = this.getMap();
	        this.us[t.getId()] = t, t._canvas = this.getRenderer().canvas, t._bindMap(i), t.once("renderercreate", this.gs, this), 
	        t.once("remove", t => {
	            this.removeLayer(t.target);
	        }), t.load(), this.ws(t);
	    }
	    onRemove() {
	        this.layers.forEach(t => {
	            t._doRemove(), t.off("show hide", this.ps, this), t.off("idchange", this.ms, this);
	        }), this.us = {}, super.onRemove();
	    }
	    getChildLayer(t) {
	        return this.us[t] || null;
	    }
	    getLayer(t) {
	        return this.getChildLayer(t);
	    }
	    ws(t) {
	        t.on("show hide", this.ps, this), t.on("idchange", this.ms, this);
	    }
	    ps() {
	        const t = this.getRenderer();
	        t && t.setToRedraw();
	    }
	    ms(t) {
	        const i = t.new, s = t.old, e = this.getLayer(s);
	        delete this.us[s], this.us[i] = e;
	    }
	    gs(t) {
	        t.renderer.clearCanvas = wt;
	    }
	    ls() {
	        const t = {};
	        this.layers.forEach(i => {
	            const s = i.getId();
	            if (t[s]) throw new Error(`Duplicate child layer id (${s}) in the GroupGLLayer (${this.getId()})`);
	            t[s] = 1;
	        });
	    }
	    addAnalysis(t) {
	        this.ri = this.ri || [], this.ri.push(t);
	        const i = this.getRenderer();
	        i && i.setToRedraw();
	    }
	    removeAnalysis(t) {
	        if (this.ri) {
	            const i = this.ri.indexOf(t);
	            i > -1 && this.ri.splice(i, 1);
	        }
	        const i = this.getRenderer();
	        i && i.setToRedraw();
	    }
	    identify(i, s = {}) {
	        const e = this.getMap(), h = this.getRenderer();
	        if (!e || !h) return [];
	        const n = e.coordToContainerPoint(new t__namespace.Coordinate(i));
	        return this.identifyAtPoint(n, s);
	    }
	    identifyAtPoint(t, i = {}) {
	        const s = this.getLayers(), e = i && i.childLayers || s, h = this.getMap();
	        if (!h) return [];
	        const n = null == i.count ? 1 : i.count;
	        let r = [];
	        for (let h = e.length - 1; h >= 0; h--) {
	            const n = e[h];
	            if (s.indexOf(n) < 0 || !n.identifyAtPoint) continue;
	            let o = n.identifyAtPoint(t, i);
	            o && o.length && (i.filter && (o = o.filter(t => i.filter(t))), o.length && r.push(...o));
	        }
	        if (i.orderByCamera) {
	            const t = h.cameraPosition;
	            r.sort((i, s) => s.point ? i.point ? dist$2(i.point, t) - dist$2(s.point, t) : 1 : -1);
	        }
	        return n && (r = r.slice(0, n)), r;
	    }
	}

	function wt() {}

	function _t(t, i) {
	    const s = t.getZIndex() - i.getZIndex();
	    return 0 === s ? t.ds - i.ds : s;
	}

	gt.mergeOptions({
	    renderer: "gl",
	    antialias: !1,
	    extensions: [],
	    onlyWebGL1: !1,
	    optionalExtensions: [ "ANGLE_instanced_arrays", "OES_element_index_uint", "OES_standard_derivatives", "OES_vertex_array_object", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_texture_float", "OES_texture_float_linear", "WEBGL_depth_texture", "EXT_shader_texture_lod", "WEBGL_compressed_texture_astc", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb" ],
	    forceRenderOnZooming: !0,
	    forceRenderOnMoving: !0,
	    forceRenderOnRotating: !0,
	    viewMoveThreshold: 100,
	    geometryEvents: !0
	}), gt.registerJSONType("GroupGLLayer"), gt.registerRenderer("gl", ut), gt.registerRenderer("canvas", null);

	class xt extends(t$1.Eventable(t$1.Handlerable(t$1.Class))){
	    addTo(t) {
	        this.layer = t;
	    }
	    remove() {
	        this.layer && (this.layer.removeAnalysis(this), delete this.layer);
	    }
	    update(t, i) {
	        this.options[t] = i;
	        const s = this.layer.getRenderer();
	        s && s.setToRedraw();
	    }
	    getAnalysisType() {
	        return this.type;
	    }
	}

	class vt extends xt {
	    constructor(t) {
	        super(t), this.type = "viewshed";
	    }
	    addTo(t) {
	        super.addTo(t);
	        const i = this.layer.getRenderer(), s = this.layer.getMap();
	        return this._s = {}, this._s.eyePos = yt(s, this.options.eyePos), this._s.lookPoint = yt(s, this.options.lookPoint), 
	        this._s.verticalAngle = this.options.verticalAngle, this._s.horizontalAngle = this.options.horizontalAngle, 
	        this._s.projViewMatrix = s.projViewMatrix, i ? this.xs(i) : this.layer.once("renderercreate", t => {
	            this.xs(t.renderer);
	        }, this), this;
	    }
	    update(t, i) {
	        if ("eyePos" === t || "lookPoint" === t) {
	            const s = this.layer.getMap();
	            this._s[t] = yt(s, i);
	        } else this._s[t] = i;
	        super.update(t, i);
	    }
	    xs(t) {
	        const i = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        }, s = new z$1(t.regl);
	        this.vs = new Ft$1(s, i) || this.vs, this.layer.addAnalysis(this);
	    }
	    renderAnalysis(t) {
	        const i = {}, s = this.vs.render(t, this._s);
	        return i.viewshedMap = s, i.viewshed_visibleColor = this._s.visibleColor || [ 0, 1, 0, 1 ], 
	        i.viewshed_invisibleColor = this._s.invisibleColor || [ 1, 0, 0, 1 ], i;
	    }
	    getDefines() {
	        return {
	            HAS_VIEWSHED: 1
	        };
	    }
	    remove() {
	        super.remove(), this.vs && this.vs.dispose();
	    }
	}

	function yt(i, s) {
	    if (!i) return null;
	    const e = i.coordinateToPointAtRes(new t__namespace.Coordinate(s[0], s[1]), i.getGLRes());
	    return [ e.x, e.y, s[2] ];
	}

	const St = [ .1451, .2588, .4863 ];

	class Mt extends xt {
	    constructor(t) {
	        super(t), this.type = "floodAnalysis";
	    }
	    addTo(t) {
	        super.addTo(t);
	        const i = this.layer.getRenderer(), s = this.layer.getMap();
	        return this._s = {}, this._s.waterHeight = this.options.waterHeight, this._s.projViewMatrix = s.projViewMatrix, 
	        i ? this.xs(i) : this.layer.once("renderercreate", t => {
	            this.xs(t.renderer);
	        }, this), this;
	    }
	    xs(t) {
	        const i = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        }, s = new z$1(t.regl);
	        this.ys = new Rt$1(s, i) || this.ys, this.layer.addAnalysis(this);
	    }
	    renderAnalysis(t) {
	        const i = {};
	        return i.flood_waterColor = this.options.waterColor || St, this._s.waterHeight = this.options.waterHeight, 
	        i.floodMap = this.ys.render(t, this._s), i;
	    }
	    getDefines() {
	        return {
	            HAS_FLOODANALYSE: 1
	        };
	    }
	}

	class bt extends xt {
	    constructor(t) {
	        super(t), this.type = "skyline";
	    }
	    addTo(t) {
	        super.addTo(t);
	        const i = this.layer.getRenderer();
	        return i ? this.Ss(i) : this.layer.once("renderercreate", t => {
	            this.Ss(t.renderer);
	        }, this), this;
	    }
	    Ss(t) {
	        const i = {
	            x: 0,
	            y: 0,
	            width: () => t.canvas ? t.canvas.width : 1,
	            height: () => t.canvas ? t.canvas.height : 1
	        };
	        this.Dt = t.regl.framebuffer({
	            color: t.regl.texture({
	                width: i.width(),
	                height: i.height(),
	                wrap: "clamp",
	                mag: "linear",
	                min: "linear"
	            }),
	            depth: !0
	        }), this.renderer = new z$1(t.regl), this.Ms = new Pt$1(this.renderer, i) || this.Ms, 
	        this.layer.addAnalysis(this), this._ = this.l(t.regl);
	    }
	    renderAnalysis(t) {
	        this._ = this._ || this.l();
	        const i = this.layer.getMap();
	        this.u(i);
	        const s = {};
	        let e = t.concat([ this._ ]);
	        return this.renderer.clear({
	            color: [ 0, 0, 0, 1 ],
	            depth: 1,
	            framebuffer: this.Dt
	        }), this.Ms.render(e, this.Dt, {
	            projViewMatrix: i.projViewMatrix,
	            lineColor: this.options.lineColor,
	            lineWidth: this.options.lineWidth
	        }), s.skylineMap = this.Dt, s;
	    }
	    l(t) {
	        const i = new Ge;
	        return i.generateBuffers(t), i.data.aTexCoord = new Float32Array(8), new fe(i);
	    }
	    u(t) {
	        const i = O.getGroundTransform(this._.localTransform, t);
	        this._.setLocalTransform(i);
	    }
	    remove() {
	        super.remove(), this.Dt && this.Dt.destroy(), this.Ms && this.Ms.dispose(), this._ && (this._.geometry.dispose(), 
	        delete this._);
	    }
	    getDefines() {
	        return {
	            HAS_SKYLINE: 1
	        };
	    }
	}

	class Ct {
	    constructor(t) {
	        this.bs = t, this.G = new de, this.onHDRLoaded = this.Cs.bind(this), 
	        this.onHDRError = this.Ts.bind(this);
	    }
	    getDirectionalLight() {
	        return this.Ft && this.Ft.directional || {};
	    }
	    getAmbientLight() {
	        return this.Ft && this.Ft.ambient || {};
	    }
	    getAmbientResource() {
	        return this.Os;
	    }
	    setConfig(t) {
	        const i = this.Ft;
	        this.Ft = JSON.parse(JSON.stringify(t));
	        let s = !1;
	        if (t && t.ambient && t.ambient.resource) {
	            if (!(i && i.ambient && function(t, i) {
	                if (!t.resource) return !1;
	                if (t.resource.url !== i.resource.url) return !1;
	                return !0;
	            }(i.ambient, t.ambient))) return void this.As();
	            this.Os && (t.ambient.prefilterCubeSize !== i.ambient && i.ambient.prefilterCubeSize && this.Cs(), 
	            s = !0, t.ambient.resource.sh && (this.Os.sh = t.ambient.resource.sh));
	        } else this.Ps(), s = i && i.ambient && i.ambient.resource;
	        this.bs.fire("updatelights", {
	            ambientUpdate: s
	        });
	    }
	    Ls(t) {
	        const i = t.getLayers();
	        for (let t = 0; t < i.length; t++) {
	            const s = i[t] && i[t].getRenderer();
	            if (s && s.regl) return s.regl;
	        }
	        const s = document.createElement("canvas"), e = f$2({
	            canvas: s,
	            attributes: {
	                depth: !1,
	                stencil: !1,
	                alpha: !1
	            }
	        });
	        return e.Es = !0, e;
	    }
	    As() {
	        const t = {
	            url: this.Ft.ambient.resource.url,
	            arrayBuffer: !0,
	            hdr: !0,
	            flipY: !0
	        };
	        this.Rs = new je(t, this.G), this.Rs.once("complete", this.onHDRLoaded), 
	        this.Rs.once("error", this.onHDRError);
	    }
	    dispose() {
	        this.Ps();
	    }
	    Cs() {
	        this.Rs && (this.Os = this.Fs(this.Rs), this.bs.fire("updatelights", {
	            "ambientUpdate": !0
	        }));
	    }
	    Ts() {
	        this.bs.fire("hdrerror");
	    }
	    Fs(t) {
	        const i = this.Ft.ambient.resource, s = this.Ft.ambient.prefilterCubeSize || 256, e = this.Ls(this.bs), h = lr.PBRHelper.createIBLMaps(e, {
	            envTexture: t.getREGLTexture(e),
	            rgbmRange: t.rgbmRange,
	            ignoreSH: !!i.sh,
	            envCubeSize: s,
	            prefilterCubeSize: s,
	            format: "array"
	        });
	        if (i.sh && (h.sh = i.sh, Array.isArray(h.sh[0]))) {
	            const t = h.sh, i = [];
	            for (let s = 0; s < t.length; s++) i.push(...t[s]);
	            h.sh = i;
	        }
	        return e.Es && (delete this.Rs, e.destroy()), h;
	    }
	    Ps() {
	        this.Rs && (this.Rs.dispose(), delete this.Rs), delete this.Os;
	    }
	}

	let Tt, Ot, At, Pt;

	t$1.Map.include({
	    setLights(t) {
	        return this.options.lights = t, this.Is(), this;
	    },
	    getLights() {
	        return this.options.lights;
	    },
	    Is() {
	        this.Gs || (this.Gs = new Ct(this)), this.Gs.setConfig(this.getLights());
	    },
	    getLightManager() {
	        return this.Gs ? this.Gs : (this.Ns || (this.Ns = !0, console.warn("map's light config is not set, use map.setLights(config) to set lights.")), 
	        null);
	    }
	}), t$1.Map.addOnLoadHook((function() {
	    this.options.lights && this.Is();
	}));

	const Lt = {
	    color: [ 0, 0, 0, 0 ]
	}, Et = {
	    enable: !0
	};

	t$1.Map.include({
	    setPostProcessConfig(t) {
	        return this.options.postProcessConfig = t, this;
	    },
	    getPostProcessConfig() {
	        return this.options.postProcessConfig;
	    }
	});

	const Rt = t$1.renderer.MapCanvasRenderer.prototype.drawLayerCanvas;

	t$1.renderer.MapCanvasRenderer.prototype.drawLayerCanvas = function() {
	    const t = Rt.apply(this, arguments);
	    return t && It(this, this.canvas), t;
	};

	const Ft = t$1.renderer.MapCanvasRenderer.prototype.renderFrame;

	function It(t, i) {
	    var s, e;
	    Tt || (s = i.width, e = i.height, Tt = document.createElement("canvas", s, e), Ot = f$2({
	        canvas: Tt,
	        attributes: {
	            depth: !1,
	            stencil: !1,
	            alpha: !0,
	            antialias: !1,
	            premultipliedAlpha: !1
	        }
	    }), At = Ot.texture({
	        mag: "linear",
	        min: "linear",
	        mipmap: !1,
	        flipY: !0,
	        width: s,
	        height: e
	    }), Pt = Ot.texture());
	    const h = t.map.getPostProcessConfig();
	    if (!h || !h.enable) return;
	    Tt.width === i.width && Tt.height === i.height || (Tt.width = i.width, Tt.height = i.height), 
	    Ot.clear(Lt);
	    const n = h.filmicGrain || Et;
	    void 0 === n.enable && (n.enable = !0);
	    const r = h.vignette || Et;
	    void 0 === r.enable && (r.enable = !0);
	    const o = h.colorLUT || Et;
	    void 0 === o.enable && (o.enable = !0), t.Ds || (t.Ds = {});
	    const a = t.Ds;
	    if (o.enable) {
	        const i = o.lut;
	        if (!a.lutTexture || a.lutTexture.url !== i) {
	            const s = new Image;
	            s.onload = function() {
	                const e = {
	                    data: s,
	                    min: "linear",
	                    mag: "linear"
	                }, h = a.lutTexture ? a.lutTexture.texture(e) : Ot.texture(e);
	                a.lutTexture = {
	                    url: i,
	                    texture: h
	                }, t.setLayerCanvasUpdated();
	            }, s.src = i;
	        }
	    }
	    const c = {
	        "enableGrain": +!!n.enable,
	        "grainFactor": void 0 === n.factor ? .15 : n.factor,
	        "timeGrain": performance.now(),
	        "enableVignette": +!!r.enable,
	        "lensRadius": r.lensRadius || [ .8, .25 ],
	        "frameMod": 1,
	        "enableLut": +!!o.enable,
	        "lookupTable": a.lutTexture ? a.lutTexture.texture : Pt
	    };
	    (void 0).postprocess(c, At({
	        width: Tt.width,
	        height: Tt.height,
	        data: i,
	        flipY: !0,
	        mag: "linear",
	        min: "linear",
	        mipmap: !1
	    })), n.enable && t.setLayerCanvasUpdated(), t.context.drawImage(Tt, 0, 0, Tt.width, Tt.height);
	}

	t$1.renderer.MapCanvasRenderer.prototype.renderFrame = function() {
	    const t = Ft.apply(this, arguments), i = this.map.getPostProcessConfig(), s = i && i.filmicGrain;
	    return !s || void 0 !== s.enable && !0 !== s.enable || this.setLayerCanvasUpdated(), 
	    t;
	};

	class Gt {
	    constructor(t, i, s, e, h, n) {
	        this.renderer = new z$1(t), this.sceneConfig = i, this.i = s, this.Hs = e, 
	        this.Bs = h, this.js = n || {
	            factor: 0,
	            units: 0
	        }, this.s();
	    }
	    render(t, i, s) {
	        this.Vs();
	        const e = this.i.getMap();
	        this.renderer.regl.clear({
	            color: [ 0, 0, 0, 0 ],
	            depth: 1,
	            stencil: 255,
	            framebuffer: this.Ws
	        }), this.renderer.render(this.ks, i, t, this.Ws);
	        const h = m({
	            colorRamp: this.Us,
	            inputTexture: this.Ws,
	            projViewMatrix: e.projViewMatrix
	        }, i);
	        this.u(), this.renderer.render(this.zs, h, this.F, s);
	    }
	    dispose() {
	        this.ks && (this.ks.dispose(), delete this.ks), this.zs && (this.zs.dispose(), delete this.zs), 
	        this._ && (this._.geometry.dispose(), this._.dispose(), delete this._, delete this.F), 
	        this.Ws && (this.Ws.destroy(), delete this.Ws);
	    }
	    Js() {
	        const t = this.Hs;
	        let i = this.Ys, s = this.Xs;
	        s ? s.clearRect(0, 0, 256, 1) : (i = this.Ys = document.createElement("canvas"), 
	        i.width = 256, i.height = 1, s = this.Xs = i.getContext("2d"));
	        const e = s.createLinearGradient(0, 0, 256, 1);
	        for (let i = 0; i < t.length; i++) e.addColorStop(t[i][0], t[i][1]);
	        s.fillStyle = e, s.fillRect(0, 0, 256, 1), this.Us && this.Us.destroy();
	        const h = this.renderer.regl;
	        this.Us = h.texture({
	            width: 256,
	            height: 1,
	            data: i,
	            min: "linear",
	            mag: "linear",
	            premultiplyAlpha: !0
	        });
	    }
	    Vs() {
	        const t = this.i.getRenderer().canvas, i = Math.ceil(t.width / 4), s = Math.ceil(t.height / 4), e = this.Ws;
	        e.width === i && e.height === s || e.resize(i, s);
	    }
	    s() {
	        this.Js(), this.$s(), this.qs(), this.l();
	    }
	    l() {
	        const t = new Ge;
	        t.generateBuffers(this.renderer.regl), this._ = new fe(t), this.F = new ge([ this._ ]);
	    }
	    u() {
	        const t = this.i.getMap(), i = O.getGroundTransform(this._.localTransform, t);
	        this._.setLocalTransform(i);
	    }
	    qs() {
	        const t = this.i.getRenderer().canvas, i = this.renderer.regl, s = i.hasExtension("OES_texture_half_float") ? "half float" : "float", e = Math.ceil(t.width / 4), h = Math.ceil(t.height / 4), n = i.texture({
	            width: e,
	            height: h,
	            type: s,
	            min: "linear",
	            mag: "linear",
	            format: "rgba"
	        });
	        this.Ws = i.framebuffer({
	            width: e,
	            height: h,
	            color: [ n ]
	        });
	    }
	    $s() {
	        const t = this.i.getRenderer().canvas, i = this.sceneConfig.depthRange, s = {
	            viewport: {
	                x: 0,
	                y: 0,
	                width: () => t ? Math.ceil(t.width / 4) : 1,
	                height: () => t ? Math.ceil(t.height / 4) : 1
	            },
	            depth: {
	                enable: !0,
	                func: "always"
	            }
	        };
	        this.Bs && (s.stencil = this.Bs), this.ks = new Bt({
	            extraCommandProps: s
	        }), this.zs = new kt({
	            extraCommandProps: {
	                stencil: {
	                    enable: !1
	                },
	                depth: {
	                    enable: !0,
	                    range: i || [ 0, 1 ],
	                    func: "<="
	                },
	                polygonOffset: {
	                    enable: !0,
	                    offset: this.js
	                }
	            }
	        });
	    }
	}

	"undefined" != typeof window && window.maptalks && (window.maptalks.GroupGLLayer = gt, 
	window.maptalks.ViewshedAnalysis = vt, window.maptalks.FloodAnalysis = Mt, window.maptalks.SkylineAnalysis = bt);

	const getGlobal = function () {
	  if (typeof self !== 'undefined') { return self; }
	  if (typeof window !== 'undefined') { return window; }
	  if (typeof global !== 'undefined') { return global; }
	  throw new Error('unable to locate global object');
	};

	const globals = getGlobal();

	const transcoders = globals['gl_trans__coders'] = globals['gl_trans__coders'] || {};

	function inject(chunk) {
	    // 奇怪的变量名是为了避免与worker源代码中的变量名冲突
	    const fnString = chunk.toString();
	    const prefixIndex = fnString.indexOf('{') + 1;
	    const prefix = fnString.substring(0, prefixIndex);

	    const transcoders = globals['gl_trans__coders'] = globals['gl_trans__coders'] || {};
	    let injected = `${prefix}
    const _____getGlobal = ${getGlobal.toString()};
    const g___lobals = _____getGlobal()
    const tran_____scoders = g___lobals['gl_trans__coders'] = g___lobals['gl_trans__coders'] || {};`;
	    for (const p in transcoders) {
	        if (p === 'inject' || p === 'getTranscoder' || p === 'registerTranscoder') {
	            continue;
	        }
	        injected += 'tran_____scoders["' + p + '"] =' + transcoders[p].toString() + '\n;';
	    }
	    injected += '\n' + fnString.substring(prefix.length);
	    return injected;
	}
	transcoders['inject'] = inject;

	function getTranscoder(name/*, options*/) {
	    return transcoders[name];
	}

	function registerTranscoder(name, fn) {
	    transcoders[name] = fn;
	}

	transcoders.registerTranscoder = registerTranscoder;
	transcoders.getTranscoder = getTranscoder;

	exports.FloodAnalysis = Mt;
	exports.GLContext = i;
	exports.GroundPainter = O;
	exports.GroupGLLayer = gt;
	exports.HeatmapProcess = Gt;
	exports.SkylineAnalysis = bt;
	exports.ViewshedAnalysis = vt;
	exports.createREGL = f$2;
	exports.glMatrix = common;
	exports.mat2 = mat2;
	exports.mat2d = mat2d;
	exports.mat3 = mat3;
	exports.mat4 = mat4;
	exports.quat = quat;
	exports.quat2 = quat2;
	exports.reshader = reshadergl;
	exports.transcoders = transcoders;
	exports.vec2 = vec2;
	exports.vec3 = vec3;
	exports.vec4 = vec4;

	Object.defineProperty(exports, '__esModule', { value: true });

	typeof console !== 'undefined' && console.log('@maptalks/gl v0.67.6');

}));
