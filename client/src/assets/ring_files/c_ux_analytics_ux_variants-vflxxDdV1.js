define(["exports","./e_ui_page_files_router","./e_edison","./c_tslib","./c_apex-metrics_src_types","./c_lodash-es_lodash","metaserver/static/js/modules/constants/files_spa","./c_core_i18n","./e_core_exception","./c_core_exception_info","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","./c_src_sink_index","./c_core_browser_detection","metaserver/static/js/modules/core/langpack","metaserver/static/js/modules/constants/env","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","./c_core_xhr","./c_csrf","./c_browser_cookies","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/search","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings"],(function(t,e,s,n,a,r,o,c,i,_,m,f,u,d,l,v,p,g,h,T,j,x,A,S,U,k,O,R,y,C,D,E,I){"use strict";const X="data-uxa-matcher-configs",b="data-uxa-variant-tokens",B="variants",N=",",F=":",J="https://dropbox.com/ux_analytics";let w=0;const M=(t=!1)=>{const s=(t,e)=>{const s=[],n=document.head.querySelectorAll(`meta[${t}]`);return n?(Array.prototype.forEach.call(n,(n=>{try{const a=n.getAttribute(t);if(!a)return;e?s.push(...JSON.parse(a)):s.push(a)}catch(t){}})),s):[]};if(t&&w>1||!t&&w)return;w++,(()=>{const t=e.getUXVariantsFromDOM();if(!t)return;const s=W(t,"matchers"),n=[];for(const[t,e]of s){const s={feature_name:t,event_name:JSON.parse(e).event_name};n.push(s)}P({variant_tokens:t,matchers:n})})();const n=s(X,!0),a=s(b,!1);if(!n.length||!a.length)return;P({variant_tokens:a.join(N),matchers:n})},G=(t,e)=>{let s;s=t.startsWith("adobetarget")?"adobe_target_variants":"variants",e[s]?e[s]+=N+t:e[s]=t};const V=(t,e)=>{const s=t=>decodeURIComponent(escape(t)),[n,a,r]=t.split(".").map((t=>atob(t.split("_").join("/").split("-").join("+"))));if(!r)return;if("JWT"!==JSON.parse(s(n)).typ)return;const o=JSON.parse(s(a)),c=o[e];return o.iss===J?c:void 0},W=(t,e)=>{const s=V(t,e),n=[];for(const t of s.split(N)){const e=t.split(F);2===e.length&&n.push(e.map(decodeURIComponent))}return n},q=t=>t.startsWith("adobetarget:")?(t=>{const e=t.split(N),s=[];for(const t of e)try{const[e,n,a]=t.split(F);s.push([e+F+decodeURIComponent(n),decodeURIComponent(a)])}catch(t){continue}return s})(t):W(t,B);function P(t){if(!t)return;self._DBX_UX_variants_configStore=self._DBX_UX_variants_configStore||{};const e=self._DBX_UX_variants_configStore,{variant_tokens:s,matchers:n}=t;if(s)for(const t of s.split(N)){const s=q(t);if(s)for(const[n,a]of s)e.assignments=e.assignments||{},e.assignments[n]={variant:a,variantToken:t}}if(n)for(const t of n){e.matchers=e.matchers||{};const s=t.event_name;e.matchers[s]=e.matchers[s]||{};const n={feature_name:t.feature_name,event_name:s,is_pre_tti:t.is_pre_tti,like:t.like},a=JSON.stringify(n);e.matchers[s][a]=n}}t.ADOBE_TARGET_FEATURE_CONFIG_DATA_ATTRIBUTE=b,t.ADOBE_TARGET_MATCHER_CONFIG_DATA_ATTRIBUTE=X,t.DROPBOX_VARIANTS_ISSUER=J,t.addConfig=P,t.addConfigsFromDOM=M,t.addMatchedVariantsToEvent=function(t){const e=(t,e)=>void 0===t||((t,e)=>{if(void 0===t)return!0;const s=t;for(const t in s)if(String(e[t])!==String(s[t]))return!1;return!0})(t.extra,e.extra);if("undefined"==typeof self||!self)return;let s;M();const n=self._DBX_UX_variants_configStore,a={};if(t&&n&&n.matchers&&t.eventName&&(s=n.matchers[t.eventName]))for(const r in s){if(!n.assignments||!s.hasOwnProperty(r))continue;const o=s[r],c=n.assignments[o.feature_name];c&&(void 0===a[c.variantToken]&&e(o.like,t)&&(t.extra||(t.extra={}),G(c.variantToken,t.extra),a[c.variantToken]=!0))}},t.getVariant=function(t){const e=self._DBX_UX_variants_configStore;return(e&&e.assignments&&e.assignments[t]||{}).variant||"OFF"},t.parseJWTToDict=t=>{const e=V(t,B),s={};for(const t of e.split(N)){const e=t.split(F);2===e.length&&(s[decodeURIComponent(e[0])]=decodeURIComponent(e[1]))}return s},t.resetMetaTagConfigQueryCount=()=>{w=0}}));
//# sourceMappingURL=c_ux_analytics_ux_variants.js-vfloYWl5e.map
