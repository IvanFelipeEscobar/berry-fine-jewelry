define(["exports"],(function(e){"use strict";e.formatBytes=function(e,a,t=2,s=!0,r=!0,o=!0){a=o?parseFloat(a):Math.max(0,parseFloat(a));const i=Math.abs(a);let f,m;return i<1024?(t=0,f=a,m=e.formatMessage({id:"se/5fs",defaultMessage:"{count, plural, one{byte} other{bytes}}"},{count:a}),s=!0):i<921600?(f=a/1024,m=e.formatMessage({id:"fcOrPH",defaultMessage:"KB"})):i<943718400?(f=a/1048576,m=e.formatMessage({id:"UFZYVH",defaultMessage:"MB"})):i<966367641600||0===t&&a<1099511627776?(f=a/1073741824,m=e.formatMessage({id:"5nCO1R",defaultMessage:"GB"})):(f=a/1099511627776,m=e.formatMessage({id:"4rrpQj",defaultMessage:"TB"})),`${e.formatNumber(f,{maximumFractionDigits:t,minimumFractionDigits:r?0:t})}${s?" ":""}${m}`}}));
//# sourceMappingURL=c_src_common_format_bytes.js-vfl0zYm2R.map
