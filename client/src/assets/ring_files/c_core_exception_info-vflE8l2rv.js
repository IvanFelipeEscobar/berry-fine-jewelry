define(["exports","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","./c_lodash-es_lodash"],(function(e,n,t,r){"use strict";function c(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var i=c(n),l=c(t);let o=new Set;if(window.ensemble){const e=window;e.REGISTERED_EXCEPTION_TAGS||(e.REGISTERED_EXCEPTION_TAGS=new Set),o=e.REGISTERED_EXCEPTION_TAGS}var s,u={exports:{}};s=u,function(e,n){if(e){var t={},r=e.TraceKit,c=[].slice,i="?";t.noConflict=function(){return e.TraceKit=r,t},t.wrap=function(e){return function(){try{return e.apply(this,arguments)}catch(e){throw t.report(e),e}}},t.report=function(){var n,r,i=[],o=null,s=null,u=null;function a(e,n){var r=null;if(!n||t.collectWindowErrors){for(var o in i)if(l(i,o))try{i[o].apply(null,[e].concat(c.call(arguments,2)))}catch(e){r=e}if(r)throw r}}function f(e,r,c,i,l){if(u)t.computeStackTrace.augmentStackTraceWithInitialElement(u,r,c,e),p();else if(l)a(t.computeStackTrace(l),!0);else{var o={url:r,line:c,column:i};o.func=t.computeStackTrace.guessFunctionName(o.url,o.line),o.context=t.computeStackTrace.gatherContext(o.url,o.line),a({mode:"onerror",message:e,stack:[o]},!0)}return!!n&&n.apply(this,arguments)}function p(){var e=u,n=o;o=null,u=null,s=null,a.apply(null,[e,!1].concat(n))}function g(n){if(u){if(s===n)return;p()}var r=t.computeStackTrace(n);throw u=r,s=n,o=c.call(arguments,1),e.setTimeout((function(){s===n&&p()}),r.incomplete?2e3:0),n}return g.subscribe=function(t){!0!==r&&(n=e.onerror,e.onerror=f,r=!0),i.push(t)},g.unsubscribe=function(e){for(var n=i.length-1;n>=0;--n)i[n]===e&&i.splice(n,1)},g}(),t.computeStackTrace=function(){var n={};function r(r){if("string"!=typeof r)return[];if(!l(n,r)){var c="",i="";try{i=e.document.domain}catch(e){}var o=/(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(r);o&&o[2]===i&&(c=function(n){if(!t.remoteFetching)return"";try{var r=function(){try{return new e.XMLHttpRequest}catch(n){return new e.ActiveXObject("Microsoft.XMLHTTP")}}();return r.open("GET",n,!1),r.send(""),r.responseText}catch(e){return""}}(r)),n[r]=c?c.split("\n"):[]}return n[r]}function c(e,n){var t,c=/function ([^(]*)\(([^)]*)\)/,l=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,s="",u=r(e);if(!u.length)return i;for(var a=0;a<10;++a)if(!o(s=u[n-a]+s)){if(t=l.exec(s))return t[1];if(t=c.exec(s))return t[1]}return i}function s(e,n){var c=r(e);if(!c.length)return null;var i=[],l=Math.floor(t.linesOfContext/2),s=l+t.linesOfContext%2,u=Math.max(0,n-l-1),a=Math.min(c.length,n+s-1);n-=1;for(var f=u;f<a;++f)o(c[f])||i.push(c[f]);return i.length>0?i:null}function u(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function a(e){return u(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function f(e,n){for(var t,c,i=0,l=n.length;i<l;++i)if((t=r(n[i])).length&&(t=t.join("\n"),c=e.exec(t)))return{url:n[i],line:t.substring(0,c.index).split("\n").length,column:c.index-t.lastIndexOf("\n",c.index)-1};return null}function p(e,n,t){var c,i=r(n),l=new RegExp("\\b"+u(e)+"\\b");return t-=1,i&&i.length>t&&(c=l.exec(i[t]))?c.index:null}function g(n){if(!o(e&&e.document)){for(var t,r,c,i,l=[e.location.href],s=e.document.getElementsByTagName("script"),p=""+n,g=0;g<s.length;++g){var m=s[g];m.src&&l.push(m.src)}if(c=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(p)){var d=c[1]?"\\s+"+c[1]:"",x=c[2].split(",").join("\\s*,\\s*");t=u(c[3]).replace(/;$/,";?"),r=new RegExp("function"+d+"\\s*\\(\\s*"+x+"\\s*\\)\\s*{\\s*"+t+"\\s*}")}else r=new RegExp(u(p).replace(/\s+/g,"\\s+"));if(i=f(r,l))return i;if(c=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(p)){var h=c[1];if(t=a(c[2]),i=f(r=new RegExp("on"+h+"=[\\'\"]\\s*"+t+"\\s*[\\'\"]","i"),l[0]))return i;if(i=f(r=new RegExp(t),l))return i}return null}}function m(e,n,t,r){var i={url:n,line:t};if(i.url&&i.line){e.incomplete=!1,i.func||(i.func=c(i.url,i.line)),i.context||(i.context=s(i.url,i.line));var l=/ '([^']+)' /.exec(r);if(l&&(i.column=p(l[1],i.url,i.line)),e.stack.length>0&&e.stack[0].url===i.url){if(e.stack[0].line===i.line)return!1;if(!e.stack[0].line&&e.stack[0].func===i.func)return e.stack[0].line=i.line,e.stack[0].context=i.context,!1}return e.stack.unshift(i),e.partial=!0,!0}return e.incomplete=!0,!1}function d(e,n){for(var r,l,o,s=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,u=[],a={},f=!1,h=d.caller;h&&!f;h=h.caller)if(h!==x&&h!==t.report){if(l={url:null,func:i,args:[],line:null,column:null},h.name?l.func=h.name:(r=s.exec(h.toString()))&&(l.func=r[1]),void 0===l.func)try{l.func=r.input.substring(0,r.input.indexOf("{"))}catch(e){}if(o=g(h)){l.url=o.url,l.line=o.line,l.func===i&&(l.func=c(l.url,l.line));var E=/ '([^']+)' /.exec(e.message||e.description);E&&(l.column=p(E[1],o.url,o.line))}a[""+h]?f=!0:a[""+h]=!0,u.push(l)}n&&u.splice(0,n);var v={mode:"callers",name:e.name,message:e.message,stack:u};return m(v,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),v}function x(n,t){var u=null;t=null==t?0:+t;try{if(u=function(e){var n=e.stacktrace;if(n){for(var t,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,i=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,l=n.split("\n"),o=[],u=0;u<l.length;u+=2){var a=null;if((t=r.exec(l[u]))?a={url:t[2],line:+t[1],column:null,func:t[3],args:[]}:(t=i.exec(l[u]))&&(a={url:t[6],line:+t[1],column:+t[2],func:t[3]||t[4],args:t[5]?t[5].split(","):[]}),a){if(!a.func&&a.line&&(a.func=c(a.url,a.line)),a.line)try{a.context=s(a.url,a.line)}catch(e){}a.context||(a.context=[l[u+1]]),o.push(a)}}return o.length?{mode:"stacktrace",name:e.name,message:e.message,stack:o}:null}}(n),u)return u}catch(e){}try{if(u=function(e){if(!e.stack)return null;for(var n,t,r=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|webpack|eval).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,l=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,u=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,a=e.stack.split("\n"),f=[],g=/^(.*) is undefined$/.exec(e.message),m=0,d=a.length;m<d;++m){if(n=r.exec(a[m])){var x=n[2]&&-1!==n[2].indexOf("native");t={url:x?null:n[2],func:n[1]||i,args:x?[n[2]]:[],line:n[3]?+n[3]:null,column:n[4]?+n[4]:null}}else if(n=u.exec(a[m]))t={url:n[2],func:n[1]||i,args:[],line:+n[3],column:n[4]?+n[4]:null};else{if(!(n=l.exec(a[m])))continue;t={url:n[3],func:n[1]||i,args:n[2]?n[2].split(","):[],line:n[4]?+n[4]:null,column:n[5]?+n[5]:null}}!t.func&&t.line&&(t.func=c(t.url,t.line)),t.line&&(t.context=s(t.url,t.line)),f.push(t)}return f.length?(f[0]&&f[0].line&&!f[0].column&&g?f[0].column=p(g[1],f[0].url,f[0].line):f[0].column||o(e.columnNumber)||(f[0].column=e.columnNumber+1),{mode:"stack",name:e.name,message:e.message,stack:f}):null}(n),u)return u}catch(e){}try{if(u=function(n){var t=n.message.split("\n");if(t.length<4)return null;var i,o=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,u=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,p=/^\s*Line (\d+) of function script\s*$/i,g=[],m=e&&e.document&&e.document.getElementsByTagName("script"),d=[];for(var x in m)l(m,x)&&!m[x].src&&d.push(m[x]);for(var h=2;h<t.length;h+=2){var E=null;if(i=o.exec(t[h]))E={url:i[2],func:i[3],args:[],line:+i[1],column:null};else if(i=u.exec(t[h])){E={url:i[3],func:i[4],args:[],line:+i[1],column:null};var v=+i[1],w=d[i[2]-1];if(w){var b=r(E.url);if(b){var S=(b=b.join("\n")).indexOf(w.innerText);S>=0&&(E.line=v+b.substring(0,S).split("\n").length)}}}else if(i=p.exec(t[h])){var _=e.location.href.replace(/#.*$/,""),O=f(new RegExp(a(t[h+1])),[_]);E={url:_,func:"",args:[],line:O?O.line:i[1],column:null}}if(E){E.func||(E.func=c(E.url,E.line));var T=s(E.url,E.line),k=T?T[Math.floor(T.length/2)]:null;T&&k.replace(/^\s*/,"")===t[h+1].replace(/^\s*/,"")?E.context=T:E.context=[t[h+1]],g.push(E)}}return g.length?{mode:"multiline",name:n.name,message:t[0],stack:g}:null}(n),u)return u}catch(e){}try{if(u=d(n,t+1))return u}catch(e){}return{mode:"failed"}}return x.augmentStackTraceWithInitialElement=m,x.guessFunctionName=c,x.gatherContext=s,x.ofCaller=function(e){e=1+(null==e?0:+e);try{throw new Error}catch(n){return x(n,e+1)}},x.getSource=r,x}(),t.extendToAsynchronousCallbacks=function(){var n=function(n){var r=e[n];e[n]=function(){var e=c.call(arguments),n=e[0];return"function"==typeof n&&(e[0]=t.wrap(n)),r.apply?r.apply(this,e):r(e[0],e[1])}};n("setTimeout"),n("setInterval")},t.remoteFetching||(t.remoteFetching=!0),t.collectWindowErrors||(t.collectWindowErrors=!0),(!t.linesOfContext||t.linesOfContext<1)&&(t.linesOfContext=11),s.exports&&e.module!==s?s.exports=t:e.TraceKit=t}function l(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function o(e){return void 0===e}}("undefined"!=typeof window?window:r.commonjsGlobal);var a,f=u.exports,p=r.getDefaultExportFromCjs(f);p.linesOfContext=1,p.remoteFetching=!1,p.noConflict();const g=null===(a=window.edisonExceptionContext)||void 0===a?void 0:a.exceptionExtras;const m=["\\bassert\\b","\\bcollectExceptionStack\\b","\\breportException\\b","\\breportStack\\b","\\bsendExceptionReport\\b"];function d(e,n){const t=e=>{if(!e)return!1;for(const t of n)if(-1!==e.search(t))return!0;return!1};for(;e.length>0&&t(e[0].func);)e=e.slice(1);return e}e.SEVERITY={CRITICAL:"critical",NONCRITICAL:"non-critical",USER_ERROR:"user-error",UNCAUGHT:"uncaught",OPERATIONAL:"operational"},e.TraceKit=p,e.collectExceptionExtra=function(e){let n={};if(e.isAssertion){const t=e;t.assertOptions&&t.assertOptions.exc_extra&&(n=Object.assign(Object.assign({},n),t.assertOptions.exc_extra))}e.excExtra&&(n=Object.assign(Object.assign({},n),e.excExtra)),window.DB_FRAME_BUST&&(n.DB_FRAME_BUST=!0),n.client_time=(new Date).toString(),n.client_utc_time=(new Date).toUTCString();const t={};for(const e in window.requireContexts)if(window.requireContexts.hasOwnProperty(e)){const n={},r=window.requireContexts[e].firstUndefinedModule;r&&(n.first_undefined_module=r),t[e]=n}n.page_alameda_failures=t;const r=window.ensemble;return null!=r&&(null!=r.getExceptionInfo&&(n.dws_page_info=r.getExceptionInfo()),null!=r.getPageletInfoForExceptionReporting&&(n.pagelet_info=r.getPageletInfoForExceptionReporting())),g?(n=Object.assign(Object.assign({},n),g),delete n.sessionId):n=Object.assign(Object.assign({},n),{page_repo_rev:i.REPO_REV,page_load_timestamp:l.PAGE_LOAD_TIME,page_load_hostname:i.HOSTNAME,yaps_project:i.YAPS_PROJECT,yaps_deployment:i.YAPS_DEPLOYMENT,user_locale:i.PAGE_LOCALE}),n},e.collectExceptionStack=function(e){const n=p.computeStackTrace(e),t=null!=(n&&n.stack)?d(n.stack,m):[];let r=[];try{throw new Error}catch(e){const n=p.computeStackTrace(e);null!=n&&null!=n.stack&&(r=n.stack),r=d(r,m)}let c=t.length-r.length;return c<=0&&(c=1),[t.slice(0,c),t.slice(c),n]},e.collectExceptionTags=function(e){var n;const t=new Set;if(e.isAssertion){const n=e;n.assertOptions&&n.assertOptions.tags&&n.assertOptions.tags.forEach((e=>t.add(e)))}e.tags&&e.tags.forEach((e=>t.add(e))),function(){const e=[];return o.forEach((n=>e.push(n))),e}().forEach((e=>t.add(e))),(null===(n=window.edisonExceptionContext)||void 0===n?void 0:n.tags)&&window.edisonExceptionContext.tags.forEach((e=>t.add(e)));let r="";return r=g&&"sessionId"in g?g.sessionId:i.SESSION_ID,t.add(`session-id:${r}`),Array.from(t.values())},e.register_tag=function(e){o.add(e)},e.unregister_tag=function(e){o.delete(e)}}));
//# sourceMappingURL=c_core_exception_info.js-vflJuI1Cb.map
