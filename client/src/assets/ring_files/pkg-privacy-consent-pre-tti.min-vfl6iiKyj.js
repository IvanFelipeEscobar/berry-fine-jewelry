define("metaserver/static/js/clean/privacy_consent_header",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getManualReEntryProvided=t.setManualReEntryProvided=void 0;let o=!1;t.setManualReEntryProvided=e=>{o=!!e};t.getManualReEntryProvided=()=>o})),define("metaserver/static/js/privacy_consent/privacy_consent_cookies",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConsentCookieStore=t.createCookieStr=t.getAllowedCategories=t.CookieCategory=t.getCookieStr=t.getAllCookiePairs=t.isEvidonCookieName=t.PRIVACY_CONSENT_COOKIE_NAMES=t.COOKIE_ATTR_VALUE_SAMESITE_NONE=t.COOKIE_ATTR_NAME_SAMESITE=t.COOKIE_ATTR_NAME_SECURE=t.COOKIE_ATTR_NAME_MAX_AGE=t.COOKIE_ATTR_NAME_EXPIRES=t.COOKIE_ATTR_NAME_PATH=t.COOKIE_ATTR_NAME_DOMAIN=t.EVIDON_SUPPRESS_COOKIE_NAME=t.EVIDON_CONSENT_COOKIE_NAME=t.DNS_COOKIE_DEV_PREFIX=t.DNS_COOKIE_NAME=t.CCPA_TOKEN_COOKIE_NAME=t.SHADOW_COOKIE_NAME=void 0,t.SHADOW_COOKIE_NAME="__Secure-dbx_consent",t.CCPA_TOKEN_COOKIE_NAME="__Secure-dbx_ccpa_token",t.DNS_COOKIE_NAME="__Secure-dbx_do_not_sell",t.DNS_COOKIE_DEV_PREFIX=t.DNS_COOKIE_NAME+"_dev_",t.EVIDON_CONSENT_COOKIE_NAME="_evidon_consent_cookie",t.EVIDON_SUPPRESS_COOKIE_NAME="_evidon_suppress_notification_cookie",t.COOKIE_ATTR_NAME_DOMAIN="Domain",t.COOKIE_ATTR_NAME_PATH="Path",t.COOKIE_ATTR_NAME_EXPIRES="Expires",t.COOKIE_ATTR_NAME_MAX_AGE="Max-Age",t.COOKIE_ATTR_NAME_SECURE="Secure",t.COOKIE_ATTR_NAME_SAMESITE="SameSite",t.COOKIE_ATTR_VALUE_SAMESITE_NONE="None",t.PRIVACY_CONSENT_COOKIE_NAMES=new Set([t.SHADOW_COOKIE_NAME,t.EVIDON_CONSENT_COOKIE_NAME,t.EVIDON_SUPPRESS_COOKIE_NAME,t.DNS_COOKIE_NAME,t.CCPA_TOKEN_COOKIE_NAME]);t.isEvidonCookieName=e=>!!t.PRIVACY_CONSENT_COOKIE_NAMES.has(e)||!!e.startsWith(t.DNS_COOKIE_DEV_PREFIX);function o(e){try{return String(document.cookie||"").split(";").map(e=>e.split("=")).map(e=>e.length>1?e:["",e[0]]).map(e=>[e[0],e.slice(1).join("=")].map(e=>e.replace(/^[ \t]+|[ \t]+$/g,""))).map(([e,t])=>({name:e,value:t})).filter(({name:t,value:o})=>t+o&&(void 0===e||t===e))}catch(e){return[]}}function n(e){return(o(e)[0]||{name:e,value:""}).value}var i,E;function _(e,o,n,i,E){const _={[t.COOKIE_ATTR_NAME_DOMAIN]:e,[t.COOKIE_ATTR_NAME_PATH]:"/",[t.COOKIE_ATTR_NAME_EXPIRES]:i,[t.COOKIE_ATTR_NAME_SAMESITE]:E||t.COOKIE_ATTR_VALUE_SAMESITE_NONE,[t.COOKIE_ATTR_NAME_SECURE]:""};return[[o,JSON.stringify(n).replace(/[;]|[^ -~]/g,e=>"\\u"+(65536+e.charCodeAt(0)).toString(16).substring(1))],...Object.keys(_).map(e=>[e,_[e]])].map(([e,t])=>t?`${e}=${t}`:`${e}`).join(";")}function r(e,o,n,i,E){(0,t.isEvidonCookieName)(o)&&(document.cookie=_(e,o,n,i,E))}t.getAllCookiePairs=o,t.getCookieStr=n,(function(e){e[e.OptIn=1]="OptIn"})(i||(i={})),(function(e){e.StrictlyNecessary="strictly necessary",e.MarketingAdvertising="general marketing and advertising",e.Analytics="analytics",e.PerformanceFunctionality="performance and functionality",e.SocialMediaAdvertising="social media advertising",e.AllCookies="all"})(E=t.CookieCategory||(t.CookieCategory={})),t.getAllowedCategories=function(e){const t=Object.keys(E);let o=[];return e&&(e[E.AllCookies]?o=[...t]:t.forEach(t=>{e[E[t]]&&o.push(t)})),o},t.createCookieStr=_;const s={cookieDomain:"dropbox.com",consentDurationMonths:6};t.ConsentCookieStore=class{constructor(e,t){const o=Object.assign(Object.assign({},s),e);this.cookieDomain=o.cookieDomain,this.consentDurationMonths=o.consentDurationMonths,this.numDots=o.cookieDomain.split(".").length-1,this.log=t}hasUserInteracted(){var e;return!!(null===(e=this.getCurrentCookieObj(t.SHADOW_COOKIE_NAME))||void 0===e?void 0:e.userInteracted)}bakeShadowCookie(e){const o=new Date(e.expireDate).toUTCString();r(this.cookieDomain,t.SHADOW_COOKIE_NAME,e,o,t.COOKIE_ATTR_VALUE_SAMESITE_NONE)}bakeDNSCookie(e){const o=new Date(e.expireDate).toUTCString();r(this.cookieDomain,t.DNS_COOKIE_NAME,e,o)}bakeCCPATokenCookie(e){const o=new Date(e.expireDate).toUTCString();r(this.cookieDomain,t.CCPA_TOKEN_COOKIE_NAME,e,o)}createShadowCookieValue(e,o){const n=this.getCurrentCookieObj(t.SHADOW_COOKIE_NAME),E=!!n.userInteracted,_=!(!E&&o)&&n.consentDate?new Date(n.consentDate):new Date,r=new Date(_);return r.setMonth(_.getMonth()+this.consentDurationMonths),{consentType:i.OptIn,consentDate:_.toISOString(),expireDate:r.toISOString(),consentMonths:this.consentDurationMonths,categories:e,userInteracted:E||o,numDots:this.numDots}}mapCookies(e){var t;const o={};for(const n in e)if(e.hasOwnProperty(n)){const i=n.toLowerCase();Object.values(E).includes(i)?o[i]=e[n]:null===(t=this.log)||void 0===t||t.logInvalidCookieCategoryException(i)}return o}havePreferencesChanged(e){var o;const i=this.getCurrentCookieObj(t.SHADOW_COOKIE_NAME);if(i)try{const t=JSON.stringify(i.categories);return JSON.stringify(e)!==t}catch(e){return null===(o=this.log)||void 0===o||o.logCookieParseException(t.SHADOW_COOKIE_NAME,n(t.SHADOW_COOKIE_NAME)),!1}return!0}getAllowedCategories(e){const o=e||this.getCurrentCookieObj(t.SHADOW_COOKIE_NAME),n=null==o?void 0:o.categories,i=Object.keys(E);let _=[];return n&&(n[E.AllCookies]?_=[...i]:i.forEach(e=>{n[E[e]]&&_.push(e)})),_}getAllowedCategoriesMap(e){const o=e||this.getCurrentCookieObj(t.SHADOW_COOKIE_NAME),n=null==o?void 0:o.categories,i={};return n&&Object.keys(E).forEach(e=>{const t=E[e];t!==E.AllCookies&&(i[t]=t===E.StrictlyNecessary||!!n[t])}),i}onlyStrictlyNecessaryConsent(e){const t=Object.entries(e).filter(([e,t])=>!0===t).map(([e])=>e);if(t.length<1)throw new Error("malformed consent categories map, at least this category should be allowed: "+E.StrictlyNecessary);return 1===t.length&&t[0]===E.StrictlyNecessary}clearDNSCookie(){const e=new Date,o={[t.COOKIE_ATTR_NAME_DOMAIN]:this.cookieDomain,[t.COOKIE_ATTR_NAME_PATH]:"/",[t.COOKIE_ATTR_NAME_EXPIRES]:e.toUTCString(),[t.COOKIE_ATTR_NAME_SAMESITE]:t.COOKIE_ATTR_VALUE_SAMESITE_NONE,[t.COOKIE_ATTR_NAME_SECURE]:""},n=Object.keys(o).map(e=>void 0!==o[e]?`${e}=${o[e]}`:`${e}`);document.cookie=t.DNS_COOKIE_NAME+"=; "+n.join(";")}getCurrentCookieObj(e){var t;const o=n(e);if(o)try{return JSON.parse(o)}catch(n){return null===(t=this.log)||void 0===t||t.logCookieParseException(e,o),null}return{}}splitPair(e){const t=e.indexOf("=");let o=[e,""];return t>=0&&(o=[e.slice(0,t),e.slice(t+1)]),o=o.map(e=>e.replace(/^[ \t]*|[ \t]*$/g,"")),[o[0],o[1]]}bakeEvidonCookie(e){if("dropbox.com"===this.cookieDomain)return;const o=e.split(/[ \t]*;[ \t]*/),[n,i]=this.splitPair(o[0]);if(!(0,t.isEvidonCookieName)(n))return;const E=[[n,i],[t.COOKIE_ATTR_NAME_DOMAIN,this.cookieDomain],[t.COOKIE_ATTR_NAME_SECURE,""],[t.COOKIE_ATTR_NAME_PATH,"/"]];for(const e of o.slice(1)){const[o,n]=this.splitPair(e);if(o.toLowerCase()===t.COOKIE_ATTR_NAME_EXPIRES.toLowerCase()){const e=new Date(n);isNaN(e.getTime())||E.push([t.COOKIE_ATTR_NAME_EXPIRES,e.toUTCString()])}else if(o.toLowerCase()===t.COOKIE_ATTR_NAME_MAX_AGE.toLowerCase()){const e=Number(n);isNaN(e)||e!=(0|e)||E.push([t.COOKIE_ATTR_NAME_MAX_AGE,String(e)])}}E.push([t.COOKIE_ATTR_NAME_SAMESITE,t.COOKIE_ATTR_VALUE_SAMESITE_NONE]);const _=E.map(([e,t],o)=>t||!o?`${e}=${t}`:`${e}`).join("; ");document.cookie=_}hasPreviouslyDeclinedConsent(){if(!this.hasUserInteracted())return!1;const e=this.getCurrentCookieObj(t.SHADOW_COOKIE_NAME);return e&&e.categories&&0===Object.keys(e.categories).length}}}));
//# sourceMappingURL=pkg-privacy-consent-pre-tti.min.js-vflReB6c1.map