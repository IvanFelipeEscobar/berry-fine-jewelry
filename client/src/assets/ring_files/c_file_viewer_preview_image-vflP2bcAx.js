define(["exports","./e_ui_page_files_router","./e_edison","./c_file_viewer_ui_header","./c_file_viewer_ui_header2","./c_file_viewer_file_viewer_components","./c_file_viewer_logging_performance","./c_file_viewer_plugins_layers","./c_core_logging_constants","./c_core_types_preview_type","./c_core_data_utils","./c_core_i18n","./c_core_data_preview_key","./c_file_viewer_mobile_web","metaserver/static/js/modules/constants/files_spa","./c_tslib","./c_apex-metrics_src_types","./e_core_exception","./c_core_exception_info","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","./c_lodash-es_lodash","metaserver/static/js/modules/constants/env","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","./c_core_xhr","./c_csrf","./c_browser_cookies","./c_src_sink_index","./c_core_browser_detection","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/search","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings","./c_file_viewer_file_extension_extension_constants","./c_src_simple-action-bar_action_bar_types","./c_api_v2_redux_files","./c_resize-observer-polyfill_dist_ResizeObserver","./c_truncate_index","./c_file_viewer_toolbar","./c_breadcrumb_index","metaserver/static/js/modules/core/langpack"],(function(e,t,i,r,a,s,n,o,l,c,d,h,g,p,m,u,_,v,w,f,E,I,S,y,x,b,P,F,z,A,D,N,L,k,V,j,C,T,W,O,U,K,M,G,H,B,R,Z,$,q){"use strict";t.injectInternalStyle("js/file_viewer/preview_image/preview_image.module.out.css",(e=>"._viewport_1anuf_1{box-sizing:border-box;height:100%;overflow:auto;position:relative;width:100%}._loader_1anuf_9{left:50%;position:absolute;top:50%}._fullSizeImg_1anuf_16,._smallImg_1anuf_15{height:100%;position:absolute;width:100%}._sizer_1anuf_24{position:absolute}._viewport_1anuf_1._zoomFit_1anuf_33 ._sizer_1anuf_24{bottom:0;left:0;margin:auto;right:0;top:0}._layer_1anuf_41{height:100%;left:0;position:absolute;top:0;width:100%}"));const X="_fullSizeImg_1anuf_16",Y="_layer_1anuf_41",J=e=>{const{onSmallImageLoaded:r,onFullSizeImageLoaded:a,previewKey:s}=e,[o,l]=i.reactExports.useState(!1),[c,d]=i.reactExports.useState(!0);i.reactExports.useEffect((()=>{!o&&c||(l(!1),d(!0))}),[s.serialized]);const h=i.reactExports.useCallback((({currentTarget:{naturalWidth:e,naturalHeight:t}})=>{d(!1),n.PreviewsEventLogger.mark(n.PreviewsTimingEvents.FVSDK_IMAGE_ON_LOAD),r(e,t)}),[]),g=i.reactExports.useCallback((({currentTarget:{naturalWidth:e,naturalHeight:t}})=>{d(!1),l(!0),a(e,t),n.PreviewsEventLogger.mark(n.PreviewsTimingEvents.FVSDK_FULL_IMAGE_ON_LOAD)}),[]),{data:{alt:p,fullSizeUrl:m,thumbnailUrl:u,srcSet:_,imgWidth:v,imgHeight:w},className:f,config:{img_size_optimization:E},layerViewportScale:I}=e;if(E&&v&&w)return i.reactExports.createElement("div",{className:Y},i.reactExports.createElement("img",{alt:p,className:t.cx(X,f),src:u,srcSet:_,sizes:I+"vw",onLoad:g,onError:e.onImageError,"data-testid":"fv-sdk-img-preview-full-size"}));const S={display:"none"};return i.reactExports.createElement("div",{className:Y},i.reactExports.createElement("img",{key:u,src:u,srcSet:_,style:c?S:void 0,onLoad:h,className:t.cx("_smallImg_1anuf_15",f),onError:e.onImageError,alt:p,"aria-hidden":!!o,"data-testid":"fv-sdk-img-preview-thumbnail"}),i.reactExports.createElement("img",{key:m,alt:p,className:t.cx(X,f),src:m,style:o?void 0:S,onLoad:g,onError:e.onImageError,"data-testid":"fv-sdk-img-preview-full-size"}))};J.displayName="ImageLayer";const Q=e=>{const r=i.reactExports.useRef(null),a=i.reactExports.useRef([.5,.5]),{scaleFactor:n,originalWidth:l,originalHeight:c,width:d,height:h,brandingInfo:g,sharedLinkInfo:p}=e;i.reactExports.useLayoutEffect((()=>{r.current&&"function"==typeof r.current.scrollTo&&n&&l&&c&&r.current.scrollTo(...function(e,t,i,r){const{w:a,h:s}=i,{w:n,h:o}=r,l=t*a,c=t*s;return[e[0]*l-n/2,e[1]*c-o/2]}(a.current,n,{w:l,h:c},{w:d,h:h}))}),[n,l,c,h,d]);const m=i.reactExports.useCallback((e=>{const{scrollLeft:t,scrollTop:i}=e.currentTarget;a.current=function(e,t,i,r){const{left:a,top:s}=e,{w:n,h:o}=t,{w:l,h:c}=i,d=[.5,.5];if(!n||!o||!r)return d;const h=n*r,g=o*r;return h>l&&(d[0]=(a+l/2)/h),g>c&&(d[1]=(s+c/2)/g),d}({left:t,top:i},{w:l,h:c},{w:d,h:h},n)}),[n,l,c,h,d]),{className:u,aspectRatio:_,data:v}=e,w={width:l,height:c},{topPadding:f,bottomPadding:E,horizontalPadding:I}=e;if(n&&l&&c){const{width:e,height:t,translateX:i,translateY:r}=s.calculateImageSizerDimensions({width:l,height:c},{width:d,height:h},{top:f,bottom:E},n);w.width=e,w.height=t,w.transform=`translate(${i}px, ${r}px)`}else if(_){const[e,t]=s.calculateFitBox(d-I,h-f-E,_);w.width=e,w.height=t}else w.visibility="hidden";const S=s.getImageSizeScale(Number(w.width)),y=!(e.activeOverlayEditPlugin&&e.activeOverlayEditPlugin.shouldReplacePreview);return i.reactExports.createElement("div",{className:t.cx(u,"_viewport_1anuf_1"),style:{width:d,height:h},onScroll:m,ref:r},i.reactExports.createElement(o.FilePreviewBrandingLogoAndSocials,{teamBranding:p,userBranding:g}),y?i.reactExports.createElement("div",{className:t.cx("_sizer_1anuf_24"),style:w},e.children({originalWidth:l||0,originalHeight:c||0,data:v,layerViewportScale:S})):e.children({originalWidth:l||0,originalHeight:c||0,data:v,layerViewportScale:S}))};Q.displayName="Viewport";const ee=parseInt(p.mobileFooterHeight,10);function te(e){const t={width:void 0,height:void 0};return e.config.img_size_optimization&&e.previewMetadata&&e.previewMetadata.dimensions?e.previewMetadata.dimensions:t}function ie(e,t){const{width:i,height:r}=te(e);return r&&i?{originalWidth:i,originalHeight:r}:{originalWidth:t.assetWidth,originalHeight:t.assetHeight}}class re extends i.reactExports.PureComponent{constructor(e){super(e),this.state={},this.updateFitScaleFactor=(e=this.state)=>{const{width:t,height:i,responsiveSize:r,config:a}=this.props,{originalWidth:n,originalHeight:o}=ie(this.props,e),l=s.noToolbarShown(r,a);if(!n||!o)return;const c=function(e,t,i){return Math.min((t.width-i.horizontal)/e.width,(t.height-i.top-i.bottom)/e.height)}({width:n,height:o},{width:t,height:i},s.IMAGE_PADDING),d=function(e,t,i){return(t-i)/e}(n,t,s.IMAGE_PADDING.horizontal);n<t-s.IMAGE_PADDING.horizontal&&o<i-s.IMAGE_PADDING.top-(l?s.IMAGE_PADDING.bottomNoToolbar:s.IMAGE_PADDING.bottom)?this.handleFitScaleFactorChange(1,c):this.handleFitScaleFactorChange(c),this.handleFitToWidthScaleFactorChange(d)},this.handleSmallImgLoad=(e,t)=>{this.state.assetWidth&&this.state.assetHeight||this.handleFullSizeImgLoad(e,t)},this.handleFullSizeImgLoad=(e,t)=>{const i={assetHeight:t,assetWidth:e,aspectRatio:e/t,renderSucceeded:!0};this.setState(i,(()=>this.updateFitScaleFactor(i)))},this.onRenderFailed=()=>{const{previewKey:e,dispatch:t}=this.props;t(s.setPreviewMetadata({previewKey:e,previewType:c.PreviewType.Error,error:new s.FVError(s.FVErrorCode.Unknown,s.ErrorLifecycle.Render)}))},this.handleCloseFullScreen=()=>{const{dispatch:e,previewKey:t,fileViewerId:i}=this.props;e(s.exitFullScreen({previewKey:t,fileViewerId:i,sourceContext:l.UserActionContext.Default}))},this.handleFitScaleFactorChange=(e,t)=>{const{dispatch:i,fileViewerId:r,previewKey:a}=this.props;i(s.updateFitScaleFactor({fileViewerId:r,previewKey:a,fitScaleFactor:e,storedFitScaleFactor:t}))},this.handleFitToWidthScaleFactorChange=e=>{const{dispatch:t,fileViewerId:i,previewKey:r}=this.props;t(s.updateFitToWidthScaleFactor({fileViewerId:i,previewKey:r,storedFitToWidthScaleFactor:e}))},this.handleUpdateDimensions=e=>{const{dispatch:t,fileViewerId:i,previewKey:r}=this.props;t(s.updateDimensions({fileViewerId:i,previewKey:r,dimensions:e}))},this.zoomIn=()=>{const{dispatch:e,fileViewerId:t,previewKey:i}=this.props;e(s.zoomIn({fileViewerId:t,previewKey:i,sourceContext:l.UserActionContext.Keyboard}))},this.zoomOut=()=>{const{dispatch:e,fileViewerId:t,previewKey:i}=this.props;e(s.zoomOut({fileViewerId:t,previewKey:i,sourceContext:l.UserActionContext.Keyboard}))},this.keyboardBindings=s.getZoomInOutBindings({zoomIn:this.zoomIn,zoomOut:this.zoomOut}),n.PreviewsEventLogger.mark(n.PreviewsTimingEvents.FVSDK_IMAGE_CONTAINER_START)}componentDidMount(){this.updateFitScaleFactor(),n.PreviewsEventLogger.mark(n.PreviewsTimingEvents.FVSDK_IMAGE_CONTAINER_MOUNT)}componentDidUpdate(e,t){const{width:i,height:r,onInteractive:a,onRenderSucceeded:s}=this.props,{renderSucceeded:n}=this.state,{originalWidth:o,originalHeight:l}=ie(this.props,this.state),{originalWidth:c,originalHeight:d}=ie(e,t);n&&n!==t.renderSucceeded&&(a(),s()),t.assetHeight===this.state.assetHeight&&t.assetWidth===this.state.assetWidth||(this.state.assetWidth&&this.state.assetHeight?this.handleUpdateDimensions({height:this.state.assetHeight,width:this.state.assetWidth}):this.handleUpdateDimensions(void 0)),e.width===i&&e.height===r&&c===o&&d===l||this.updateFitScaleFactor()}componentWillUnmount(){this.handleUpdateDimensions(void 0)}render(){const{activeCommentPlugin:e,activeOverlayEditPlugin:n,config:l,fileViewerUiData:h,dispatch:m,fileInfo:u,fileMetadata:_,filePreviewUiData:v,fileViewerId:w,height:f,intl:E,previewKey:I,previewMetadata:S,pluginProps:y,width:x,responsiveSize:b,header:P,brandingInfo:F,sharedLinkInfo:z,onRenderSucceeded:A,onInteractive:D,titleBarActionSetters:N,pluginActivationParams:L}=this.props,{originalWidth:k,originalHeight:V}=ie(this.props,this.state),j=function(e,t){const{width:i,height:r}=te(e);return null!=r&&null!=i?i/r:t.aspectRatio}(this.props,this.state),C=d.getScaleFactorFromFilePreviewUi(v),T=s.noToolbarShown(b,l),W=h.isFullScreen,O=g.isRedesign2023Enabled(l);if(!S||!S.content)return null;const U=(K=S.content,M=S.dimensions,{thumbnailUrl:K.default_src||"",fullSizeUrl:K.full_size_src||"",srcSet:K.src_set||"",alt:"",imgWidth:M?M.width:void 0,imgHeight:M?M.height:void 0});var K,M,G;return l.mobile_web?i.reactExports.createElement("div",{style:{height:f-ee+"px"},className:p.imageContainer},y&&i.reactExports.createElement(r.PluginHeader,{pluginProps:y,activeCommentPlugin:e,header:P}),i.reactExports.createElement("img",{onLoad:()=>{A(),D()},onError:this.onRenderFailed,src:U.fullSizeUrl,"data-testid":"fv-sdk-img-preview-full-size"})):i.reactExports.createElement("div",{className:t.cx(s.app,{[s.isFullScreen]:W})},W&&!O&&i.reactExports.createElement(o.CloseButton,{onClick:this.handleCloseFullScreen}),i.reactExports.createElement("div",{className:a.headerContainer},i.reactExports.createElement(s.KeyboardBindingConnector,{name:"preview_image",keyboardBindings:this.keyboardBindings}),y&&i.reactExports.createElement(r.PluginHeader,{pluginProps:y,activeCommentPlugin:e,header:P}),i.reactExports.createElement(o.FilePreviewBrandingBackground,{teamBranding:z,userBranding:F},i.reactExports.createElement(Q,{data:U,originalWidth:k,originalHeight:V,scaleFactor:C,aspectRatio:j,width:x,height:f,topPadding:s.IMAGE_PADDING.top,bottomPadding:T?s.IMAGE_PADDING.bottomNoToolbar:s.IMAGE_PADDING.bottom,horizontalPadding:s.IMAGE_PADDING.horizontal,brandingInfo:F,sharedLinkInfo:z,activeOverlayEditPlugin:n},(G={activeOverlayPlugin:n||e,dispatch:m,config:l,fileViewerUiData:h,fileInfo:u,fileMetadata:_,filePreviewUiData:v,fileViewerId:w,intl:E,pluginProps:y,previewKey:I,previewMetadata:S,onFullSizeImageLoaded:this.handleFullSizeImgLoad,onImageError:this.onRenderFailed,onSmallImageLoaded:this.handleSmallImgLoad,titleBarActionSetters:N,pluginActivationParams:L},e=>{const{activeOverlayPlugin:t,pluginProps:r,titleBarActionSetters:a,pluginActivationParams:s}=G,n=[i.reactExports.createElement(J,Object.assign({key:"image"},G,e))];if((null==r?void 0:r.previewType)===c.PreviewType.Archive)return n;if(null!=r&&null!=t){const e=Object.assign(Object.assign({},r),{layer:{dimensions:r.file.dimensions}}),{layerUI:{Layer:l,LayerWithEventBubbling:c}}=t;if(null!=l)return t.shouldReplacePreview?[i.reactExports.createElement(l,Object.assign({},e,{titleBarActionSetters:a,activationParams:s}))]:[...n,i.reactExports.createElement(l,Object.assign({},e,{titleBarActionSetters:a,activationParams:s}))];if(null!=c)return[i.reactExports.createElement(o.PortalTargetProvider,{key:"portal-target-provider"},(t=>i.reactExports.createElement(c,Object.assign({},e),i.reactExports.createElement(o.PortalWrapper,{element:t},n),i.reactExports.createElement("div",null))))]}return n})))))}}re.displayName="UnconnectedPreviewImage";const ae=e=>{const{fileViewerId:r,previewKey:a,rivieraData:s}=e,n=h.useIntl(),o=t.useDispatch(),l=d.useFileViewerSelector(d.getBrandingInfo,r),c=d.useFileViewerSelector(d.getSharedLinkInfo,r),g=d.usePreviewState(r,a,d.filterZoomableFilePreviewUi);return g&&s?i.reactExports.createElement(re,Object.assign({},e,g,{intl:n,dispatch:o,brandingInfo:l,sharedLinkInfo:c})):null};ae.displayName="PreviewImage",e.PreviewImage=ae,e.UnconnectedPreviewImage=re}));
//# sourceMappingURL=c_file_viewer_preview_image.js-vfl3DYlhZ.map
