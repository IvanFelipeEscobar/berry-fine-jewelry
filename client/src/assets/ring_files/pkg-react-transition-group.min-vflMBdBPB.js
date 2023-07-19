define("metaserver/static/prod_assets_web_modules/common/TransitionGroup",["exports","./Transition","./extends","react"],(function(e,t,n,r){"use strict";var s=(function(e){return e&&e.__esModule?e:{default:e}})(r);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=(function(e){return t&&r.isValidElement(e)?t(e):e})(e)})),n}function o(e,t,n){return null!=n[t]?n[t]:e.props[t]}function l(e,t,n){var s=a(e.children),i=(function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,s=Object.create(null),i=[];for(var a in e)a in t?i.length&&(s[a]=i,i=[]):i.push(a);var o={};for(var l in t){if(s[l])for(r=0;r<s[l].length;r++){var c=s[l][r];o[s[l][r]]=n(c)}o[l]=n(l)}for(r=0;r<i.length;r++)o[i[r]]=n(i[r]);return o})(t,s);return Object.keys(i).forEach((function(a){var l=i[a];if(r.isValidElement(l)){var c=a in t,d=a in s,u=t[a],p=r.isValidElement(u)&&!u.props.in;!d||c&&!p?d||!c||p?d&&c&&r.isValidElement(u)&&(i[a]=r.cloneElement(l,{onExited:n.bind(null,l),in:u.props.in,exit:o(l,"exit",e),enter:o(l,"enter",e)})):i[a]=r.cloneElement(l,{in:!1}):i[a]=r.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:o(l,"exit",e),enter:o(l,"enter",e)})}})),i}var c=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},d=(function(e){function d(t,n){var r,s=(r=e.call(this,t,n)||this).handleExited.bind(i(i(r)));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}t._inheritsLoose(d,e);var u=d.prototype;return u.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},u.componentWillUnmount=function(){this.mounted=!1},d.getDerivedStateFromProps=function(e,t){var n,s,i=t.children,c=t.handleExited;return{children:t.firstRender?(n=e,s=c,a(n.children,(function(e){return r.cloneElement(e,{onExited:s.bind(null,e),in:!0,appear:o(e,"appear",n),enter:o(e,"enter",n),exit:o(e,"exit",n)})}))):l(e,i,c),firstRender:!1}},u.handleExited=function(e,t){var r=a(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var r=n._extends({},t.children);return delete r[e.key],{children:r}})))},u.render=function(){var e=this.props,n=e.component,r=e.childFactory,i=t._objectWithoutPropertiesLoose(e,["component","childFactory"]),a=this.state.contextValue,o=c(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,null===n?s.default.createElement(t.TransitionGroupContext.Provider,{value:a},o):s.default.createElement(t.TransitionGroupContext.Provider,{value:a},s.default.createElement(n,i,o))},d})(s.default.Component);d.propTypes={},d.defaultProps={component:"div",childFactory:function(e){return e}};var u=d;e.TransitionGroup=u})),define("metaserver/static/prod_assets_web_modules/common/extends",["exports"],(function(e){"use strict";function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}e._extends=t})),define("metaserver/static/prod_assets_web_modules/common/index.esm2",["exports","./index","focus-visible","react","./pictogram_icon","./chevron-down","./index.esm3"],(function(e,t,n,r,s,i,a){"use strict";var o=(function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)})(r),l=({href:e,disabled:t=!1,type:n})=>{const r={type:n};let s="button";return e?(s="a",r.href=e,r.role="button",r["aria-disabled"]=t):r.disabled=t,[s,r]},c=[["medium","standard"]],d=e=>{const t=c.find(([t,n])=>e===t);return void 0!==t?t[1]:e},u=e=>{const t=c.find(([t,n])=>e===n);return void 0!==t?t[0]:e},p=o.forwardRef(({children:e,className:n,variant:r,inverse:c=!1,size:p="medium",withDropdownIcon:m=!1,withIconLeft:f,withIconStart:h,hasNoUnderline:g=!1,href:v,fullWidth:E=!1,isLoading:x=!1,disabled:b=x,_hasRightMargin:N,_hasCollapsedMargins:B,_hasSquaredSize:y=!1,type:w,..._},C)=>{const S=u(p),I=h||f;if(E){if("transparent"===r)throw new Error("`fullWidth` can only be applied to non-transparent variants.");if("large"!==S&&"xlarge"!==S)throw new Error('`fullWidth` can only be applied to "large" and "xlarge" sizes.')}const[L,O]=l({href:v,disabled:b||x,type:w}),j=t.classNames114("dig-Button",`dig-Button--${r}`,`dig-Button--${d(S)}`,{"dig-Button--fullWidth":E,"dig-Button--isLoading":x,"dig-Button--withDropdownIcon":m,"dig-Button--withIconStart":I,"dig-Button--hasNoUnderline":"transparent"===r&&g,"dig-Button--hasRightMargin":N,"dig-Button--hasCollapsedMargins":B,"dig-Button--hasSquaredSize":y,"dig-Button--inverse":c},n);return o.createElement(L,{className:j,ref:C,...O,..._},o.createElement("span",{className:"dig-Button-content"},I&&o.createElement("span",{className:"dig-Button-icon-start-wrapper"},I),e,m&&o.createElement(s.UIIcon,{className:"dig-Button-icon",src:i.ChevronDownLine,size:"small","data-testid":"digButtonDropdownIcon"})),x&&o.createElement("span",{className:"dig-Button-spinner","data-testid":"digButtonSpinner"},o.createElement(a.Spinner,{monochromatic:!0,hasOpaqueTrack:"primary"===r,inverse:c,size:"xsmall"})))});p.displayName="Button";var m=o.forwardRef(({children:e,className:n,disabled:r=!1,variant:a,inverse:c=!1,isRounded:p,shape:m,size:f="medium",withDropdownIcon:h=!1,href:g,type:v,...E},x)=>{const[b,N]=l({href:g,disabled:r,type:v}),B=u(f),y=m||(!0===p?"circular":"standard");!h||"circular"!==y||console.error("dig-components:","`withDropdownIcon` only applies to non-circular icon buttons.");const w=t.classNames114("dig-IconButton",`dig-IconButton--${a}`,`dig-IconButton--${d(B)}`,{"dig-IconButton--inverse":c,"dig-IconButton--circular":"circular"===y,"dig-IconButton--withDropdownIcon":h&&"circular"!==y},n);return o.createElement(b,{className:w,ref:x,...N,...E},o.createElement("span",{className:"dig-IconButton-content"},e,h&&"circular"!==y&&o.createElement(s.UIIcon,{src:i.ChevronDownLine,size:"small","data-testid":"digIconButtonDropdownIcon"})))});m.displayName="IconButton";var f=o.forwardRef(({className:e,children:n,renderMenu:r,variant:s,inverse:i=!1,size:a="medium",fullWidth:l=!1,isLoading:c=!1,disabled:m=c,...f},h)=>{const g=u(a),v=t.classNames114("dig-SplitButton",`dig-SplitButton--${s}`,`dig-SplitButton--${d(g)}`,{"dig-SplitButton--fullWidth":l},e),E={buttonProps:{variant:s,size:g,inverse:i,disabled:m||c,className:"dig-SplitButton-menu-button",withDropdownIcon:!0,_hasSquaredSize:!0}};return o.createElement("span",{role:"group",className:v},o.createElement(p,{ref:h,className:"dig-SplitButton-button",variant:s,size:g,inverse:i,isLoading:c,disabled:m,...f,_hasRightMargin:"primary"===s||"opacity"===s,_hasCollapsedMargins:"outline"===s||"filled"===s},n),r(E))});f.displayName="SplitButton";var h=o.forwardRef(({cursor:e="default",circular:n=!1,children:r,className:s,...i},a)=>{const l=t.classNames114("dig-StylelessButton",s,{"dig-StylelessButton--pointer":"pointer"===e,"dig-StylelessButton--circular":n});return o.createElement("button",{className:l,ref:a,...i},o.createElement("span",{className:"dig-StylelessButton-content"},r))});h.displayName="StylelessButton";var g=Object.freeze({__proto__:null,Button:p,IconButton:m,SplitButton:f,StylelessButton:h});e.Button=p,e.IconButton=m,e.SplitButton=f,e.StylelessButton=h,e.index_esm=g})),define("metaserver/static/prod_assets_web_modules/react-transition-group/CSSTransition",["../common/extends","../common/Transition","react","react-dom"],(function(e,t,n,r){"use strict";var s=(function(e){return e&&e.__esModule?e:{default:e}})(n);function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var a=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=i(n.className,r):n.setAttribute("class",i(n.className&&n.className.baseVal||"",r)));var n,r}))},o=(function(n){function r(){for(var e,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){e.removeClasses(t,"exit"),e.addClass(t,n?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=n?"appear":"enter";e.addClass(t,r,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=n?"appear":"enter";e.removeClasses(t,r),e.addClass(t,r,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){e.removeClasses(t,"appear"),e.removeClasses(t,"enter"),e.addClass(t,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){e.addClass(t,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){e.removeClasses(t,"exit"),e.addClass(t,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.getClassNames=function(t){var n=e.props.classNames,r="string"==typeof n,s=r?(r&&n?n+"-":"")+t:n[t];return{baseClassName:s,activeClassName:r?s+"-active":n[t+"Active"],doneClassName:r?s+"-done":n[t+"Done"]}},e}t._inheritsLoose(r,n);var i=r.prototype;return i.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=r,(function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):(function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")})(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))})(e,r)},i.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,s=n.active,i=n.done;this.appliedClasses[t]={},r&&a(e,r),s&&a(e,s),i&&a(e,i)},i.render=function(){var n=this.props;n.classNames;var r=t._objectWithoutPropertiesLoose(n,["classNames"]);return s.default.createElement(t.Transition,e._extends({},r,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r})(s.default.Component);return o.defaultProps={classNames:""},o.propTypes={},o}));
//# sourceMappingURL=pkg-react-transition-group.min.js-vflpcluXQ.map