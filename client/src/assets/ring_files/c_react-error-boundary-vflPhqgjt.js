define(["exports","./e_edison"],(function(r,t){"use strict";function e(r,t){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},e(r,t)}var o={error:null,info:null},n=function(r){var n,a;function s(){for(var t,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(t=r.call.apply(r,[this].concat(n))||this).state=o,t.resetErrorBoundary=function(){for(var r,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];null==t.props.onReset||(r=t.props).onReset.apply(r,n),t.setState(o)},t}a=r,(n=s).prototype=Object.create(a.prototype),n.prototype.constructor=n,e(n,a);var i=s.prototype;return i.componentDidCatch=function(r,t){var e,o;null==(e=(o=this.props).onError)||e.call(o,r,null==t?void 0:t.componentStack),this.setState({error:r,info:t})},i.componentDidUpdate=function(r){var t,e,n,a,s=this.state.error,i=this.props.resetKeys;null!==s&&(void 0===(n=r.resetKeys)&&(n=[]),void 0===(a=i)&&(a=[]),n.length!==a.length||n.some((function(r,t){return!Object.is(r,a[t])})))&&(null==(t=(e=this.props).onResetKeysChange)||t.call(e,r.resetKeys,i),this.setState(o))},i.render=function(){var r=this.state,e=r.error,o=r.info,n=this.props,a=n.fallbackRender,s=n.FallbackComponent,i=n.fallback;if(null!==e){var c={componentStack:null==o?void 0:o.componentStack,error:e,resetErrorBoundary:this.resetErrorBoundary};if(t.React$1.isValidElement(i))return i;if("function"==typeof a)return a(c);if("function"==typeof s)return t.React$1.createElement(s,c);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},s}(t.React$1.Component);r.ErrorBoundary=n}));
//# sourceMappingURL=c_react-error-boundary.js-vflX2BcSV.map
