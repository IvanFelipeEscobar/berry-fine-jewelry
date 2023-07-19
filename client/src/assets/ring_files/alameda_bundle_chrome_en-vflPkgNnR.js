/*! For license information please see alameda_bundle_chrome_en.js.LICENSE */
!function(e,n){for(var t in n)e[t]=n[t]}(window,function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=17)}([function(e,n,t){(function(){var e,t,r,o=!!window.performance&&null!=window.performance.now;function i(){return o?window.performance.now():(new Date).getTime()}!function(n,o,a){if(!o)throw new Error("No Promise implementation available");var c,s,u,l,f=e||t,d=Object.prototype.hasOwnProperty,p={},h=[],m={},v={},w={},g={},y=/^\.\//,b=/^\/|\:|\?|\.js$/,_=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,x=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,j=/\.js$/,E=Array.prototype.slice;if("function"!=typeof e){var C=o.resolve(void 0);e=c=function t(r){var c,s,u,l,f,d,m,v,w=Object.create(null),g=Object.create(null),C={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},k=Object.create(null),S=[],U=Object.create(null),P=Object.create(null),L={},D=0,F=(new Date).getTime(),N=0,R={},B={},I={},W=o.resolve();function z(e,n,t){var r,o,i,a,c,s,u,l,f,d,p=n&&n.split("/"),h=C.map,m=h&&h["*"];if(e&&(s=(e=e.split("/")).length-1,C.nodeIdCompat&&j.test(e[s])&&(e[s]=e[s].replace(j,"")),"."===e[0].charAt(0)&&p&&(e=p.slice(0,p.length-1).concat(e)),function(e){var n,t,r=e.length;for(n=0;n<r;n++)if("."===(t=e[n]))e.splice(n,1),n-=1;else if(".."===t){if(0===n||1===n&&".."===e[2]||".."===e[n-1])continue;n>0&&(e.splice(n-1,2),n-=2)}}(e),e=e.join("/")),t&&h&&(p||m)){e:for(i=(o=e.split("/")).length;i>0;i-=1){if(c=o.slice(0,i).join("/"),p)for(a=p.length;a>0;a-=1)if((r=O(h,p.slice(0,a).join("/")))&&(r=O(r,c))){u=r,l=i;break e}!f&&m&&O(m,c)&&(f=O(m,c),d=i)}!u&&f&&(u=f,l=d),u&&(o.splice(0,l,u),e=o.join("/"))}return O(C.pkgs,e)||e}function J(e){return function(){var t;return e.init&&(t=e.init.apply(n,arguments)),t||e.exports&&function(e){if(!e)return e;var t=n;return e.split(".").forEach((function(e){t=t[e]})),t}(e.exports)}}function H(e){var n,t,r,o;for(n=0;n<h.length;n+=1){if("string"!=typeof h[n][0]){if(!e)break;h[n].unshift(e),e=a}n-=1,(t=(r=h.shift())[0])in w||t in g||(t in U?s.apply(a,r):g[t]=r)}e&&(o=O(C.shim,e)||{},s(e,o.deps||[],o.exportsFn))}function G(e,n){var t=function(r,o,i,c){var d,p;if(n&&H(),"string"==typeof r){if(f[r])return f[r](e);var h=u(r,e,!0);if((d=h.id)in g&&l(h,e),!(d in w))throw new Error("Not loaded: "+d);return w[d]}return r&&!Array.isArray(r)&&(p=r,r=a,Array.isArray(o)&&(r=o,o=i,i=c),n)?t.config(p)(r,o,i):(o=o||function(){return E.call(arguments,0)},W.then((function(){return H(),s(a,r||[],o,i,e)})))};return t.isBrowser="undefined"!=typeof document&&"undefined"!=typeof navigator,t.nameToUrl=function(e,n,r){var o,i,a,c,s,u,l=O(C.pkgs,e);if(l&&(e=l),u=O(I,e))return t.nameToUrl(u,n,r);if(b.test(e))c=e+(n||"");else{for(o=C.paths,a=(i=e.split("/")).length;a>0;a-=1)if(s=O(o,i.slice(0,a).join("/"))){Array.isArray(s)&&(s=s[0]),i.splice(0,a,s);break}c=i.join("/"),c=("/"===(c+=n||(/^data\:|^blob\:|\?/.test(c)||r?"":".js")).charAt(0)||c.match(/^[\w\+\.\-]+:/)?"":C.baseUrl)+c}return C.urlArgs&&!/^blob\:/.test(c)?c+C.urlArgs(e,c):c},t.toUrl=function(n){var r,o=n.lastIndexOf("."),i=n.split("/")[0];return-1!==o&&(!("."===i||".."===i)||o>1)&&(r=n.substring(o,n.length),n=n.substring(0,o)),t.nameToUrl(z(n,e),r,!0)},t.defined=function(n){return u(n,e,!0).id in w},t.specified=function(n){return(n=u(n,e,!0).id)in w||n in U},t.perfMeasurements=[],t}function Y(n,t,r){n&&(w[n]=r,e.onResourceLoad&&e.onResourceLoad(v,t.map,t.deps)),t.finished=!0,t.resolve(r)}function $(e,n){e.finished=!0,e.rejected=!0,e.reject(n)}function K(e){e.factoryCalled=!0;var n,t=i(),r=e.map.id;try{n=v.execCb(r,e.factory,e.values,w[r])}catch(n){return $(e,n)}r?n===a&&(n=e.cjsModule?e.cjsModule.exports:e.usingExports?w[r]:{__DropboxAlamedaHackNoUndefinedModules:!0}):S.splice(S.indexOf(e),1);var o=i()-t,s="execCb."+(r||e.factory.perfName||"anon");c.perfMeasurements.push({name:s,startTime:t,totalTime:o}),Y(r,e,n)}function Q(e,n){this.rejected||this.depDefined[n]||(this.depDefined[n]=!0,this.depCount+=1,this.values[n]=e,this.depending||this.depCount!==this.depMax||K(this))}function V(e,n){var t={};return t.promise=new o((function(n,r){t.resolve=n,t.reject=function(n){e||S.splice(S.indexOf(t),1),r(n)}})),t.map=e?n||u(e):{},t.depCount=0,t.depMax=0,t.values=[],t.depDefined=[],t.depFinished=Q,t.map.pr&&(t.deps=[u(t.map.pr)]),t}function X(e,n){var t;return e?(t=e in U&&U[e])||(t=U[e]=V(e,n)):(t=V(),S.push(t)),t}function Z(e,n){return function(t){e.rejected||(t.dynaId||(t.dynaId="id"+(N+=1),t.requireModules=[n]),$(e,t))}}function ee(e,n,t,r){t.depMax+=1,l(e,n).then((function(e){t.depFinished(e,r)}),Z(t,e.id)).catch(Z(t,t.map.id))}function ne(e,n,t){e.load(n.n,G(t),function(e){var n;function t(t){n||Y(e,X(e),t)}return t.error=function(n){X(e).reject(n)},t.fromText=function(t,r){var o=X(e),i=u(u(e).n),a=i.id;n=!0,o.factory=function(e,n){return n},r&&(t=r),A(C.config,e)&&(C.config[a]=C.config[e]);try{c.exec(t)}catch(e){$(o,new Error("fromText eval for "+a+" failed: "+e))}H(a),o.deps=[i],ee(i,null,o,o.deps.length)},t}(n.id),C)}function te(e){var n,t=e?e.indexOf("!"):-1;return t>-1&&(n=e.substring(0,t),e=e.substring(t+1,e.length)),[n,e]}function re(e,n,t){var r=e.map.id;n[r]=!0,!e.finished&&e.deps&&e.deps.forEach((function(r){var o=r.id,i=!A(f,o)&&X(o,r);!i||i.finished||t[o]||(A(n,o)?e.deps.forEach((function(n,t){n.id===o&&e.depFinished(w[o],t)})):re(i,n,t))})),t[r]=!0}function oe(e){return setTimeout((function(){e.dynaId&&R[e.dynaId]||(R[e.dynaId]=!0,c.onError(e))})),e}return m="function"==typeof importScripts?function(e){var n=e.url;B[n]||(B[n]=!0,X(e.id),importScripts(n),H(e.id))}:function(e){var n=e.id,t=e.url;B[t]||(B[t]=!0,D+=1,M(t,(function(){D-=1,H(n)}),(function(e){D-=1;var t,r=O(C.paths,n);if(r&&Array.isArray(r)&&r.length>1){r.shift();var o=X(n);o.map=u(n),o.map.url=c.nameToUrl(n),m(o.map)}else(t=new Error("Load failed: "+n+": "+e.src)).requireModules=[n],X(n).reject(t)})))},l=function(e,n){var t,r,o=e.id,i=C.shim[o];if(o in g)t=g[o],delete g[o],s.apply(a,t);else if(!(o in U))if(e.pr){if(!(r=O(I,o)))return l(u(e.pr)).then((function(t){var r=e.prn?e:u(o,n,!0),i=r.id,a=O(C.shim,i);return A(L,i)||(L[i]=!0,a&&a.deps?c(a.deps,(function(){ne(t,r,n)})):ne(t,r,n)),X(i).promise}));e.url=c.nameToUrl(r),m(e)}else i&&i.deps?c(i.deps,(function(){m(e)})):m(e);return X(o).promise},u=function(e,n,t){if("string"!=typeof e)return e;var r,o,i,a,s,u,l=e+" & "+(n||"")+" & "+!!t;return a=(i=te(e))[0],e=i[1],!a&&l in k?k[l]:(a&&(r=(a=z(a,n,t))in w&&w[a]),a?r&&r.normalize?(e=r.normalize(e,function(e){return function(n){return z(n,e,!0)}}(n)),u=!0):e=-1===e.indexOf("!")?z(e,n,t):e:(a=(i=te(e=z(e,n,t)))[0],e=i[1],o=c.nameToUrl(e)),s={id:a?a+"!"+e:e,n:e,pr:a,url:o,prn:a&&u},a||(k[l]=s),s)},f={require:function(e){return G(e)},exports:function(e){var n=w[e];return void 0!==n?n:w[e]={}},module:function(e){return{id:e,uri:"",exports:f.exports(e),config:function(){return O(C.config,e)||{}}}}},c=G(null,!0),s=function(e,n,t,r,o){if(e){if(P[e])return;P[e]=!0}var a=X(e);if(n&&!Array.isArray(n)&&(t=n,n=[]),r||(A(C,"defaultErrback")?C.defaultErrback&&(r=C.defaultErrback):r=oe),r&&a.promise.catch(r),o=o||e,"function"==typeof t){var s=i();!n.length&&t.length&&(t.toString().replace(_,T).replace(x,(function(e,t){n.push(t)})),n=(1===t.length?["require"]:["require","exports","module"]).concat(n)),a.factory=t,a.deps=n,a.depending=!0,n.forEach((function(t,r){var i;n[r]=i=u(t,o,!0),"require"===(t=i.id)?a.values[r]=f.require(e):"exports"===t?(a.values[r]=f.exports(e),a.usingExports=!0):"module"===t?a.values[r]=a.cjsModule=f.module(e):void 0===t?a.values[r]=void 0:ee(i,o,a,r)}));var l=i()-s,p="overhead."+(o||a.factory.perfName||"anon");c.perfMeasurements.push({name:p,startTime:s,totalTime:l}),a.depending=!1,a.depCount===a.depMax&&K(a)}else e&&Y(e,a,t);return F=(new Date).getTime(),e||function e(n){var t,r=[],o=1e3*C.waitSeconds,i=o&&F+o<(new Date).getTime();if(0===D&&(n?n.finished||re(n,{},{}):S.length&&S.forEach((function(e){re(e,{},{})}))),i){for(var a in U){var s=U[a];s.finished||r.push(s.map.id)}(t=new Error("Timeout for modules: "+r)).requireModules=r,c.onError(t)}else(D||S.length)&&(d||(d=!0,setTimeout((function(){d=!1,e()}),0)))}(a),a.promise},(c=G(null,!0)).config=function(e){if(e.context&&e.context!==r){var n=O(p,e.context);return n?n.req.config(e):t(e.context).config(e)}if(k=Object.create(null),e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var o=e.urlArgs;e.urlArgs=function(e,n){return(-1===n.indexOf("?")?"?":"&")+o}}var i=C.shim,a={paths:!0,bundles:!0,config:!0,map:!0};return q(e,(function(e,n){a[n]?(C[n]||(C[n]={}),function e(n,t,r,o){return t&&q(t,(function(t,i){!r&&A(n,i)||(!o||"object"!=typeof t||!t||Array.isArray(t)||"function"==typeof t||t instanceof RegExp?n[i]=t:(n[i]||(n[i]={}),e(n[i],t,r,o)))})),n}(C[n],e,!0,!0)):C[n]=e})),e.bundles&&q(e.bundles,(function(e,n){e.forEach((function(e){e!==n&&(I[e]=n)}))})),e.shim&&(q(e.shim,(function(e,n){Array.isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=J(e)),i[n]=e})),C.shim=i),e.packages&&e.packages.forEach((function(e){var n;n=(e="string"==typeof e?{name:e}:e).name,e.location&&(C.paths[n]=e.location),C.pkgs[n]=e.name+"/"+(e.main||"main").replace(y,"").replace(j,"")})),(e.deps||e.callback)&&c(e.deps,e.callback),c},c.onError=function(e){throw e},v={id:r,defined:w,waiting:g,config:C,deferreds:U,req:c,execCb:function(e,n,t,r){return n.apply(r,t)}},p[r]=v,c}("_"),"function"!=typeof t&&(t=c),c.exec=function(e){throw new EvalError("eval not supported in this build of Alameda")},c.contexts=p,r=function(){h.push(E.call(arguments,0))},preLoadFile=function(e){M(e)},r.amd={jQuery:!0},f&&c.config(f),c.isBrowser&&!p._.config.skipDataMain&&(s=(s=document.querySelectorAll("script[data-main]")[0])&&s.getAttribute("data-main"))&&(s=s.replace(j,""),f&&f.baseUrl||-1!==s.indexOf("!")||(u=s.split("/"),s=u.pop(),l=u.length?u.join("/")+"/":"./",c.config({baseUrl:l})),c([s]))}function T(e,n){return n||""}function A(e,n){return d.call(e,n)}function O(e,n){return e&&A(e,n)&&e[n]}function q(e,n){var t;for(t in e)if(A(e,t)&&n(e[t],t))break}function k(e){for(var n=E.call(e,0),t=0;t<n.length;t++)Array.isArray(n[t])&&(n[t]=E.call(n[t],0));return n}function M(e,n,t){var r=!!v[e]||!!m[e];if(function(e,n,t){e in m?n&&setTimeout((function(){m[e].forEach((function(e){h.push(k(e))})),n()}),0):(n&&(w[e]?w[e].push(n):w[e]=[n]),t&&(g[e]?g[e].push(t):g[e]=[t]))}(e,n,t),!r){v[e]=!0;var o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.crossOrigin="anonymous",o.addEventListener("load",(function(){!function(e){m[e]=E.call(h,0),delete v[e],h=[],w[e]&&(w[e].forEach((function(n){if(m[e].forEach((function(e){h.push(k(e))})),n(),h.length>0)throw new Error("Expected empty queue when loading "+e)})),w[e]=null)}(e)}),!1),o.addEventListener("error",(function(){!function(e,n){delete w[e],delete v[e],n.parentNode.removeChild(n),g[e]&&g[e].forEach((function(e){e(n)}))}(e,o)}),!1),o.src=e,10===document.documentMode?C.then((function(){document.head.appendChild(o)})):document.head.appendChild(o)}}}(this,"undefined"!=typeof Promise?Promise:void 0),n.define=r,n.require=t,n.requirejs=e}).call(window)},function(e,n,t){"use strict";function r(e,n,t){if(0!==t.length){var o=t[0],i=o.length;0===i&&r(e,n,t.slice(1));var a=function(){0===(i-=1)&&r(e,n,t.slice(1))};o.forEach((function(n){var t="",r=n[0],o=n[1];3===n.length&&(t=n[2]);var i=function(){o.apply(null,arguments),a()};""!==t&&(i.perfName=t),e(r,i,(function(e){a()}))}))}}t.r(n),t.d(n,"execTiers",(function(){return r}))},function(e,n,t){"use strict";void 0===window&&(window={}),void 0===window.matchMedia&&(window.matchMedia=function(e){return{}}),"undefined"!=typeof BigInt&&(BigInt.prototype.toJSON=function(){return this.toString()})},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.r(n),window.define=void 0,t(5).polyfill();var r=t(0);window.requirejs=r.requirejs,window.define=r.define,window.require=r.require,t(6),window.performance&&window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(1e3);var o,i=t(10).configure_requirejs,a=t(1).execTiers;window.execTiers=a,window.InitRequireJs(i),(0,t(9).installGlobalErrorHandlers)(),o=function(){},window.monkey_check=o},function(e,n,t){(function(n){var t;t=function(){"use strict";function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,o=void 0,i=void 0,a=function(e,n){p[r]=e,p[r+1]=n,2===(r+=2)&&(i?i(h):y())},c="undefined"!=typeof window?window:void 0,s=c||{},u=s.MutationObserver||s.WebKitMutationObserver,l="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var e=setTimeout;return function(){return e(h,0)}}var p=new Array(1e3);function h(){for(var e=0;e<r;e+=2)(0,p[e])(p[e+1]),p[e]=void 0,p[e+1]=void 0;r=0}var m,v,w,g,y=void 0;function b(e,n){var t=this;t._onerror=null;var r=new this.constructor(j);void 0===r[x]&&D(r);var o=t._state;if(o){var i=arguments[o-1];a((function(){return P(o,r,i,t._result)}))}else S(t,r,e,n);return r}function _(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var n=new this(j);return O(n,e),n}l?y=function(){return process.nextTick(h)}:u?(v=0,w=new u(h),g=document.createTextNode(""),w.observe(g,{characterData:!0}),y=function(){g.data=v=++v%2}):f?((m=new MessageChannel).port1.onmessage=h,y=function(){return m.port2.postMessage(0)}):y=void 0===c?function(){try{var e=Function("return this")().require("vertx");return void 0!==(o=e.runOnLoop||e.runOnContext)?function(){o(h)}:d()}catch(e){return d()}}():d();var x=Math.random().toString(36).substring(2);function j(){}var E=void 0,C=1,T=2;function A(n,t,r){t.constructor===n.constructor&&r===b&&t.constructor.resolve===_?function(e,n){n._state===C?k(e,n._result):n._state===T?(n._onerror=null,M(e,n._result)):S(n,void 0,(function(n){return O(e,n)}),(function(n){return M(e,n)}))}(n,t):void 0===r?k(n,t):e(r)?function(e,n,t){a((function(e){var r=!1,o=function(e,n,t,r){try{e.call(n,t,r)}catch(e){return e}}(t,n,(function(t){r||(r=!0,n!==t?O(e,t):k(e,t))}),(function(n){r||(r=!0,M(e,n))}),e._label);!r&&o&&(r=!0,M(e,o))}),e)}(n,t,r):k(n,t)}function O(e,n){if(e===n)M(e,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=n),null===r||"object"!==o&&"function"!==o)k(e,n);else{var t=void 0;try{t=n.then}catch(n){return void M(e,n)}A(e,n,t)}var r,o}function q(e){e._onerror&&e._onerror(e._result),U(e)}function k(e,n){e._state===E&&(e._result=n,e._state=C,0!==e._subscribers.length&&a(U,e))}function M(e,n){e._state===E&&(e._state=T,e._result=n,a(q,e))}function S(e,n,t,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=n,o[i+C]=t,o[i+T]=r,0===i&&e._state&&a(U,e)}function U(e){var n=e._subscribers,t=e._state;if(0!==n.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<n.length;a+=3)r=n[a],o=n[a+t],r?P(t,r,o,i):o(i);e._subscribers.length=0}}function P(n,t,r,o){var i=e(r),a=void 0,c=void 0,s=!0;if(i){try{a=r(o)}catch(e){s=!1,c=e}if(t===a)return void M(t,new TypeError("A promises callback cannot return that same promise."))}else a=o;t._state!==E||(i&&s?O(t,a):!1===s?M(t,c):n===C?k(t,a):n===T&&M(t,a))}var L=0;function D(e){e[x]=L++,e._state=void 0,e._result=void 0,e._subscribers=[]}var F=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(j),this.promise[x]||D(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&k(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var n=0;this._state===E&&n<e.length;n++)this._eachEntry(e[n],n)},e.prototype._eachEntry=function(e,n){var t=this._instanceConstructor,r=t.resolve;if(r===_){var o=void 0,i=void 0,a=!1;try{o=e.then}catch(e){a=!0,i=e}if(o===b&&e._state!==E)e._onerror=null,this._settledAt(e._state,n,e._result);else if("function"!=typeof o)this._remaining--,this._result[n]=e;else if(t===N){var c=new t(j);a?M(c,i):A(c,e,o),this._willSettleAt(c,n)}else this._willSettleAt(new t((function(n){return n(e)})),n)}else this._willSettleAt(r(e),n)},e.prototype._settledAt=function(e,n,t){var r=this.promise;r._state===E&&(this._remaining--,e===T?M(r,t):this._result[n]=t),0===this._remaining&&k(r,this._result)},e.prototype._willSettleAt=function(e,n){var t=this;S(e,void 0,(function(e){return t._settledAt(C,n,e)}),(function(e){return t._settledAt(T,n,e)}))},e}(),N=function(){function n(e){this[x]=L++,this._result=this._state=void 0,this._subscribers=[],j!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof n?function(e,n){try{n((function(n){O(e,n)}),(function(n){M(e,n)}))}catch(n){M(e,n)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return n.prototype.catch=function(e){return this.then(null,e)},n.prototype.finally=function(n){var t=this.constructor;return e(n)?this.then((function(e){return t.resolve(n()).then((function(){return e}))}),(function(e){return t.resolve(n()).then((function(){throw e}))})):this.then(n,n)},n.prototype._onerror=function(e){var t=this;setTimeout((function(){t._onerror&&"function"==typeof n.onerror&&n.onerror(e)}),0)},n}();return N.prototype.then=b,N.all=function(e){return new F(this,e).promise},N.race=function(e){var n=this;return t(e)?new n((function(t,r){for(var o=e.length,i=0;i<o;i++)n.resolve(e[i]).then(t,r)})):new n((function(e,n){return n(new TypeError("You must pass an array to race."))}))},N.resolve=_,N.reject=function(e){var n=new this(j);return M(n,e),n},N._setScheduler=function(e){i=e},N._setAsap=function(e){a=e},N._asap=a,N.polyfill=function(){var e=void 0;if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if("undefined"==typeof PromiseRejectionEvent&&(t=null),t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=N},N.Promise=N,N},e.exports=t()}).call(this,t(3))},function(e,n,t){"use strict";t.r(n);t(7),t(2),t(8)},function(e,n){window.__CIRCULAR_DEPENDENCY__={}},function(e,n){!function(){if("object"!=typeof globalThis)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,"undefined"==typeof globalThis&&(window.globalThis=window),delete Object.prototype.__magic__}catch(e){window.globalThis=window}}()},function(e,n,t){"use strict";function r(e,n,t,r,o){o&&console.log(o.stack),o&&o.dynaId&&(o.excExtra={requireModules:o.requireModules},o.force=!0,o.message.startsWith("Timeout for modules:")||o.message.startsWith("Load failed:")?o.severity="non-critical":o.severity="critical");var i=["ResizeObserver loop limit exceeded","ResizeObserver loop completed with undelivered notifications"];(null==o?void 0:o.message)&&i.some((function(e){return null==o?void 0:o.message.startsWith(e)}))&&(o.severity="non-critical");var a=window.requireContexts["externals"in window.requireContexts?"externals":"_"];return(0,a.require)([a.exceptionModule]).then((function(a){var c=a[0];o||(o=new Error("string"==typeof e?e:String(e)),i.some((function(e){return null==o?void 0:o.message.startsWith(e)}))&&(o.severity="non-critical"),n&&t&&r&&(o.stack_frames=[{url:n,line:t,column:r,func:"",context:[],args:[]}])),c.sendExceptionReport(o)}),(function(){})).catch((function(){})),!1}function o(){window.onerror=r;var e=function(e){e instanceof Error&&r("",void 0,void 0,void 0,e)};Promise.polyfill?Promise.onerror=e:window.addEventListener("unhandledrejection",(function(n){return e(n.reason)}))}t.r(n),t.d(n,"reportError",(function(){return r})),t.d(n,"installGlobalErrorHandlers",(function(){return o}))},function(e,n,t){"use strict";t.r(n),t.d(n,"configure_requirejs",(function(){return m}));var r=t(0);const o=["loadCssWithCache","CssEntryPoint","css-modules"],i=["css-modules"];function a(e,n,t){if(t[n].length>0){if(i.includes(n)){const r=t[n];for(let n=0;n<r.length;n++){const{elem:t,path:o}=r[n];if(o>e.path)return[t,n]}}return[t[n][t[n].length-1].elem.nextElementSibling,null]}const r=o.indexOf(n);for(let e=r-1;e>=0;e--){const n=t[o[e]];if(n.length>0)return[n[n.length-1].elem.nextElementSibling,null]}for(let e=r+1;e<o.length;e++){const n=t[o[e]];if(n.length>0)return[n[0].elem,null]}return[null,null]}function c(e,n,t,r,o){e.elem.setAttribute("data-loader",n),e.elem instanceof HTMLStyleElement&&e.elem.setAttribute("path",e.path);let i=null,c=null;o||([i,c]=a(e,n,t)),null===c?t[n].push(e):t[n].splice(c,0,e),i?r.insertBefore(e.elem,i):r.appendChild(e.elem)}function s(e,n,t){Object(r.define)("css",[],(function(){var n=!1;return{load:function(r,o,s,u){var l,f=null===(l=null==u?void 0:u.paths)||void 0===l?void 0:l["css!".concat(r)],d=Array.isArray(f)?f[0]:f,p=window.performance.now(),h=document.createElement("link");h.type="text/css",h.rel="stylesheet",h.href="".concat(u.baseUrl).concat(d),h.onload=function(){var n,t;null===(t=null===(n=e.require.perfMeasurements)||void 0===n?void 0:n.push)||void 0===t||t.call(n,{name:r,startTime:p,totalTime:window.performance.now()-p}),s({})},h.onerror=function(e,r,i,a,c){if(s({}),o(["metaserver/static/js/core/exception"],(function(n){if(c)n.reportException({err:c,tags:["css_loader"]});else{var t="string"==typeof e?e:"".concat(e.type," ").concat(d);n.reportStack(t,{tags:["css_loader"]})}})),!n&&Array.isArray(f)&&u.baseUrl!==t){n=!0;var l=h.nextElementSibling;document.head.removeChild(h),h.href="".concat(t).concat(d),null!==l?document.head.insertBefore(h,l):document.head.appendChild(h)}},function(e,n,t=document){const r=t.defaultView;r.__injectCssCache||(r.__injectCssCache={loadCssWithCache:[],CssEntryPoint:[],"css-modules":[]});const o=r.__injectCssCache,s=i.includes(n);if(!s&&e.length>1){const[r]=a(e[0],n,o),i=t.createDocumentFragment();for(const t of e)c(t,n,o,i,!s);null===r?t.head.appendChild(i):t.head.insertBefore(i,r)}else for(const r of e)c(r,n,o,t.head,!1)}([{elem:h,path:r}],"css-modules")}}}));n(["css"])}var u=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},l=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function f(e,n,t){e&&!window._jsReadyToLoad?function(e,n,t,r){var o=function(n){clearTimeout(i),window.removeEventListener(e,o),n||r(e),t()},i=setTimeout(o,n);window.addEventListener(e,o)}("loadJS",1e4,n,(function(e){t(["metaserver/static/js/core/exception"],(function(n){n.reportStack("".concat(e," event did not fire in time"),{tags:["".concat(e,"-timeout")]})}))})):n()}function d(e,n,t){Object(r.define)("json_loader",[],(function(){return{load:function(n,r,o,i){var a=n;i.paths&&i.paths[n]&&(a="string"==typeof i.paths[n]?i.paths[n]:i.paths[n][0]),function i(c){var s=new XMLHttpRequest;s.addEventListener("load",function(n,t){return window.performance&&window.performance.now?function(){var r=window.performance.now(),o=t(),i=window.performance.now()-r;return e.require&&e.require.perfMeasurements&&e.require.perfMeasurements.push({name:n,startTime:r,totalTime:i}),o}:t}(n,(function(){try{null!=s.response&&"object"==typeof s.response?o(s.response):o(JSON.parse(s.responseText))}catch(e){o({}),r(["metaserver/static/js/core/exception"],(function(n){n.reportException({err:e,tags:["json_loader"]})}))}}))),s.addEventListener("error",(function(){t&&c!==t&&i(t)})),s.open("GET","".concat(c).concat(a));try{s.responseType="json"}catch(e){}s.send()}(i.baseUrl)}}}));n(["json_loader"])}t(2);function p(e,n){var t=function(e){var n=Object.assign({},e);e.map&&(n.map=Object.assign({},e.map),n.map["*"]=Object.assign({},e.map["*"]));e.paths&&(n.paths=Object.assign({},e.paths));return n}(e);if(n.langpack){var r=n.langpack,o=r.locale,i=r.pageLoadServerTimestamp;if(o&&i){var a="static/js/langpack/icu-".concat(o,".json"),c=function(e){return((e/3600-17)/24).toFixed(0)}(i);if(t.map){t.map["*"]["metaserver/static/js/modules/core/langpack"]="json_loader!".concat(a)}t.paths&&(t.paths[a]="".concat(a,"?").concat(c))}}if(n.requireFallbackBaseUrl)for(var s in t.paths)if(t.paths.hasOwnProperty(s)){var u=t.paths[s];s.startsWith("css!")||u.startsWith("/")||u.startsWith("https://")?t.paths[s]=u:t.paths[s]=[u,n.requireFallbackBaseUrl+u]}return t}var h=t(1);function m(e,n,t){var o,i=(null!==(o=e.context)&&void 0!==o?o:"_")in window.requirejs.contexts,a=p(e,n),c=r.requirejs.config(a);c.onError=function(){};var m,w=e.context||"_",g={require:c,module_callback_times:{},requireConfig:a,exceptionModule:n.exceptionModule||"metaserver/static/js/core/exception_reporter"};window.requireContexts[w]&&(g.module_callback_times=window.requireContexts[w].module_callback_times),window.requireContexts[w]=g,d(g,c,n.requireFallbackBaseUrl),s(g,c,n.requireFallbackBaseUrl),function(e){Object(r.define)("library_loader",[],(function(){return{load:function(e,n,t,r){var o=e.split(":"),i=o[0],a=o[1],c=window.requireContexts[i];c.require([a],(function(n){var o=window.requireContexts[r.context],i=c.requireConfig.map&&c.requireConfig.map["*"]&&c.requireConfig.map["*"][a]?c.requireConfig.map["*"][a]:a;o.module_callback_times["library_loader!"+e]=c.module_callback_times[i],t(n)}))}}})),e(["library_loader"])}(c),function(e){Object(r.define)("jsconst_loader",[],(function(){return{normalize:function(e){return e.startsWith("".concat("jsconst_loader","!"))&&(e=e.slice("".concat("jsconst_loader","!").length)),e},load:function(e,n,t,r){window.ensemble.requestConstModule(e,r.context,t)}}})),e(["jsconst_loader"])}(c),function(e){Object(r.define)("unreadable_jsconst_loader",[],(function(){return{load:function(e,n,t,r){t({__esModule:!0,error:"JSCONSTS NOT SUPPORTED"})}}})),e(["unreadable_jsconst_loader"])}(c),m=c,Object(r.define)("data_module",["require"],(function(e){return{normalize:function(e){return e.startsWith("".concat("data_module","!"))&&(e=e.slice("".concat("data_module","!").length)),e},load:function(n,t,r,o){var i=this;e(["js/edison/edison"],(function(e){var t=e.Edison;return u(i,void 0,void 0,(function(){var e,o,i;return l(this,(function(a){switch(a.label){case 0:return[4,t.waitUntilInitialized()];case 1:if(a.sent(),e=function(){t.loadDataModule([n]).then((function(e){r(e[n])})).catch((function(e){r.error(e)}))},!t.isStreamingEnabled())return[3,6];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,t.getStreamedDataModule(n)];case 3:return o=a.sent(),r(o),[3,5];case 4:return i=a.sent(),window.EDISON_LOCALMODE?e():r.error(i),[3,5];case 5:return[3,7];case 6:e(),a.label=7;case 7:return[2]}}))}))}))}}})),m(["data_module"]),c.onError=function(){},f(Boolean(n.deferJs),(function(){i||function(e,n){var t,o=r.requirejs.contexts[n];if(window.performance&&null!=window.performance.now){var i=window.location.search.indexOf("show_debug_spans")>-1;t=function(n,t){var r=void 0===n?"anonymous-".concat(v++):n;i&&window.performance.mark("".concat(r," execCb start"));var o=window.performance.now(),a=t(),c=window.performance.now()-o,s=e.module_callback_times[r];return void 0===s&&(s=e.module_callback_times[r]={}),s.callbackTime=o,s.callbackDuration=c,i&&(window.performance.mark("".concat(r," execCb end")),window.performance.measure("execCb ".concat(r),"".concat(r," execCb start"),"".concat(r," execCb end"))),a}}else t=function(e,n){return n()};o.execCb=function(e,r,o,i){if(o.some((function(e){return void 0===e}))){var a=window.requireContexts[n].firstUndefinedModule;a||(window.requireContexts[n].firstUndefinedModule=e);var c=o.indexOf(void 0),s=new Error("alameda error: module ".concat(e," had an undefined dep in position ").concat(c));throw a&&(s.reported=!0),s}return t(e,(function(){return r.apply(i,o)}))}}(g,w);Object(h.execTiers)(c,(function(){}),t)}),c)}var v=0},,,,,,,function(e,n,t){t(18),e.exports=t(4)},function(e,n){}]));
//# sourceMappingURL=alameda_bundle_chrome_en.js-vflzqbBES.map