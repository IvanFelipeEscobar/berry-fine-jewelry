define(["exports"],(function(t){"use strict";t.RafThrottle=class{constructor(t,i){this.ticking=!1,this.currentRequestId=-1,this.request=()=>{this.ticking||(this.ticking=!0,this.currentRequestId=this.window.requestAnimationFrame((()=>{this.thunk(),this.ticking=!1})))},this.cancelPending=()=>{this.window.cancelAnimationFrame(this.currentRequestId)},this.thunk=t,this.window=i||window}}}));
//# sourceMappingURL=c_spectrum_util_raf_throttle.js-vflXfEoZW.map
