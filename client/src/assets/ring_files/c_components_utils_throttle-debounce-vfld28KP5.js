define(["exports"],(function(t){"use strict";t.throttle=function(t,n){let u=!0,e=null;function l(){u=!0,null!==e&&(t(...e),e=null)}return function(...i){u?(u=!1,t(...i),setTimeout(l,n)):e=i}}}));
//# sourceMappingURL=c_components_utils_throttle-debounce.js-vflq0wP4F.map
