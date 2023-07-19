define(["exports","./c_core_exception_info","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","./c_lodash-es_lodash"],(function(e,r,t,o,s){"use strict";let n="production";function c(e){n=e}const i=[];function a(e){i.push(e)}function l(e){const r=i.indexOf(e);r>=0&&i.splice(r,1)}function d(e){const{err:t}=e;if(t.reported)return;const[o,s,n]=r.collectExceptionStack(t);t.isAssertion&&i.forEach((e=>e(n))),t.stack_frames=o.reverse(),t.context_tb=s.reverse(),t.tags=function(e,r){const t=new Set;return e&&e.forEach((e=>t.add(e))),r&&r.forEach((e=>t.add(e))),Array.from(t.values())}(e.tags,t.tags),t.excExtra=function(e,r){let t={};return e&&(t=Object.assign(Object.assign({},t),e)),r&&(t=Object.assign(Object.assign({},t),r)),t}(e.exc_extra,t.excExtra),t.severity=e.severity,t.force=e.force,window.onerror&&window.onerror(t.message,void 0,void 0,void 0,t)}function E(e,t={}){t={severity:t.severity||r.SEVERITY.NONCRITICAL,tags:t.tags||[],exc_extra:t.exc_extra||{},silent:!!t.silent};const o=new Error(e);d({err:o,force:!0,tags:(t.tags||[]).concat("module:exception","reportStack"),severity:t.severity,exc_extra:t.exc_extra}),"production"!==n&&(t.severity===r.SEVERITY.CRITICAL?(t.silent||alert(e),console&&console.error&&console.error(o)):console&&console.warn&&console.warn(o))}var u=Object.freeze({__proto__:null,SEVERITY:r.SEVERITY,overrideEnvironmentForTesting:c,registerOnFailedAssert:a,reportException:d,reportStack:E,unregisterOnFailedAssert:l});e.SEVERITY=r.SEVERITY,e.JSException=u,e.overrideEnvironmentForTesting=c,e.registerOnFailedAssert=a,e.reportException=d,e.reportStack=E,e.unregisterOnFailedAssert=l}));
//# sourceMappingURL=e_core_exception.js-vflAXMudg.map
