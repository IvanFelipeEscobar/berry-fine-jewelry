define(["exports","./e_ui_page_files_router","./c_src_preview-photo-editor_types","./e_edison","./c_core_i18n"],(function(o,t,e,i,r){"use strict";const a=t.createAction("history/undo"),s=t.createAction("history/redo"),c=t.createAction("reset"),p={undo:a,redo:s,reset:c};const n={flipX:!1,flipY:!1,rotation:e.Rotation.UP},l={brightness:0,contrast:0,highlight:0,shadow:0,temperature:0,saturation:0,exposure:0},d={canSave:!1,imageWidth:0,imageHeight:0,zoom:{value:1,min:.25,max:2,default:1,increment:.25},displayMode:e.DisplayMode.NO_MENU,leftMenuMode:e.LeftBarButtons.ADJUST,history:{maxHistory:1e3,current:{isCommittable:!0,imageState:void 0,orientation:n,adjust:l,actionApplied:e.EditingAction.NONE},past:[],future:[]},cropControls:{cropWidth:0,cropHeight:0,aspectRatioLocked:!1,aspectRatioSelected:e.CropRatioType.UNSELECTED,selectedMenuOption:e.CropMenuOptions.FREE_FORM,customRatioWidth:0,customRatioHeight:0,showImageTooSmallMessage:!1},integratedEditor:!1},h=function(o){return(t,e)=>{const i=t.history.current;i.isCommittable=o(i,e)}},C={setShowImageTooSmallMessage(o,{payload:t}){o.cropControls.showImageTooSmallMessage=t},canSave(o){o.canSave=!0},cannotSave(o){o.canSave=!1},zoomIn(o){o.zoom.value=Math.min(o.zoom.max,o.zoom.value+o.zoom.increment)},zoomOut(o){o.zoom.value=Math.max(o.zoom.min,o.zoom.value-o.zoom.increment)},zoomRealSize(o){o.zoom.value=o.zoom.default},rotate:h(((o,{payload:t})=>(o.orientation.rotation=e.nextRotation(o.orientation.rotation,t),o.actionApplied=e.EditingAction.ROTATE,!0))),crop(o){o.displayMode===e.DisplayMode.CROP?o.displayMode=e.DisplayMode.CANCEL_CROP:o.displayMode=e.DisplayMode.CROP},flip:h((o=>{const t=o.orientation.rotation;return t===e.Rotation.LEFT||t===e.Rotation.RIGHT?o.orientation.flipY=!o.orientation.flipY:o.orientation.flipX=!o.orientation.flipX,o.actionApplied=e.EditingAction.FLIP,!0})),saveCrop(o){o.displayMode=e.DisplayMode.SAVE_CROP},cancelCrop(o){o.displayMode===e.DisplayMode.CROP&&(o.displayMode=e.DisplayMode.CANCEL_CROP)},closeCropMenu(o){o.displayMode!==e.DisplayMode.CROP&&o.displayMode!==e.DisplayMode.CANCEL_CROP||(o.displayMode=e.DisplayMode.NO_MENU,o.cropControls.selectedMenuOption=e.CropMenuOptions.FREE_FORM,o.cropControls.aspectRatioSelected=e.CropRatioType.UNSELECTED,o.cropControls.cropWidth=0,o.cropControls.cropHeight=0,o.cropControls.aspectRatioLocked=!1)},setBrightness:h(((o,{payload:t})=>(o.adjust.brightness=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),setContrast:h(((o,{payload:t})=>(o.adjust.contrast=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),setHighlight:h(((o,{payload:t})=>(o.adjust.highlight=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),setShadow:h(((o,{payload:t})=>(o.adjust.shadow=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),setTemperature:h(((o,{payload:t})=>(o.adjust.temperature=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),setSaturation:h(((o,{payload:t})=>(o.adjust.saturation=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),setExposure:h(((o,{payload:t})=>(o.adjust.exposure=u(t.value),o.actionApplied=e.EditingAction.ADJUST,t.commit))),toggleLeftMenu(o,{payload:t}){o.leftMenuMode===t&&o.displayMode===e.DisplayMode.ADJUST?o.displayMode=e.DisplayMode.NO_MENU:(o.displayMode=e.DisplayMode.ADJUST,o.leftMenuMode=t)},setImageWidth(o,{payload:t}){o.imageWidth=t},setImageHeight(o,{payload:t}){o.imageHeight=t},selectCropMenuOption(o,{payload:t}){var i;(i=o.cropControls.aspectRatioSelected)!==e.CropRatioType.FB_EVENT_COVER&&i!==e.CropRatioType.FB_PROFILE_COVER&&i!==e.CropRatioType.FB_PROFILE_PICTURE&&i!==e.CropRatioType.FB_STORY&&i!==e.CropRatioType.FB_TIMELINE_POST&&i!==e.CropRatioType.INSTA_LANDSCAPE&&i!==e.CropRatioType.INSTA_PORTRAIT&&i!==e.CropRatioType.INSTA_PROFILE_PICTURE&&i!==e.CropRatioType.INSTA_SQUARE&&i!==e.CropRatioType.INSTA_STORY||t!==e.CropMenuOptions.FREE_FORM||(o.cropControls.aspectRatioLocked=!1),o.cropControls.selectedMenuOption=t,t!==e.CropMenuOptions.FREE_FORM&&t!==e.CropMenuOptions.POPULAR_RATIOS||(o.cropControls.aspectRatioSelected=e.CropRatioType.UNSELECTED)},selectCropRatioOption(o,{payload:t}){o.cropControls.aspectRatioSelected=t,o.cropControls.cropWidth=o.imageWidth,o.cropControls.cropHeight=o.imageHeight,o.cropControls.showImageTooSmallMessage=!1;const i=(t,e)=>{(o.imageWidth<t||o.imageHeight<e)&&(o.cropControls.showImageTooSmallMessage=!0)};switch(t){case e.CropRatioType.UNSELECTED:break;case e.CropRatioType.SQUARE_ONE_BY_ONE:o.cropControls.customRatioWidth=1,o.cropControls.customRatioHeight=1,o.cropControls.aspectRatioLocked=!0;break;case e.CropRatioType.PORTRAIT_THREE_BY_FOUR:o.cropControls.customRatioWidth=3,o.cropControls.customRatioHeight=4,o.cropControls.aspectRatioLocked=!0;break;case e.CropRatioType.LANDSCAPE_FOUR_BY_THREE:o.cropControls.customRatioWidth=4,o.cropControls.customRatioHeight=3,o.cropControls.aspectRatioLocked=!0;break;case e.CropRatioType.WIDESCREEN_SIXTEEN_BY_NINE:o.cropControls.customRatioWidth=16,o.cropControls.customRatioHeight=9,o.cropControls.aspectRatioLocked=!0;break;case e.CropRatioType.FB_PROFILE_PICTURE:o.cropControls.customRatioWidth=1,o.cropControls.customRatioHeight=1,o.cropControls.cropWidth=170,o.cropControls.cropHeight=170,o.cropControls.aspectRatioLocked=!0,i(170,170);break;case e.CropRatioType.FB_STORY:o.cropControls.customRatioWidth=9,o.cropControls.customRatioHeight=16,o.cropControls.cropWidth=1080,o.cropControls.cropHeight=1920,o.cropControls.aspectRatioLocked=!0,i(1080,1920);break;case e.CropRatioType.FB_TIMELINE_POST:o.cropControls.customRatioWidth=40,o.cropControls.customRatioHeight=21,o.cropControls.cropWidth=1200,o.cropControls.cropHeight=630,o.cropControls.aspectRatioLocked=!0,i(1200,630);break;case e.CropRatioType.FB_PROFILE_COVER:o.cropControls.customRatioWidth=205,o.cropControls.customRatioHeight=78,o.cropControls.cropWidth=820,o.cropControls.cropHeight=312,o.cropControls.aspectRatioLocked=!0,i(820,312);break;case e.CropRatioType.FB_EVENT_COVER:o.cropControls.customRatioWidth=300,o.cropControls.customRatioHeight=157,o.cropControls.cropWidth=1200,o.cropControls.cropHeight=628,o.cropControls.aspectRatioLocked=!0,i(1200,628);break;case e.CropRatioType.INSTA_PROFILE_PICTURE:o.cropControls.customRatioWidth=1,o.cropControls.customRatioHeight=1,o.cropControls.cropWidth=320,o.cropControls.cropHeight=320,o.cropControls.aspectRatioLocked=!0,i(320,320);break;case e.CropRatioType.INSTA_STORY:o.cropControls.customRatioWidth=17,o.cropControls.customRatioHeight=32,o.cropControls.cropWidth=1020,o.cropControls.cropHeight=1920,o.cropControls.aspectRatioLocked=!0,i(1020,1920);break;case e.CropRatioType.INSTA_SQUARE:o.cropControls.customRatioWidth=1,o.cropControls.customRatioHeight=1,o.cropControls.cropWidth=1080,o.cropControls.cropHeight=1080,o.cropControls.aspectRatioLocked=!0,i(1080,1080);break;case e.CropRatioType.INSTA_PORTRAIT:o.cropControls.customRatioWidth=4,o.cropControls.customRatioHeight=5,o.cropControls.cropWidth=1080,o.cropControls.cropHeight=1350,o.cropControls.aspectRatioLocked=!0,i(1080,1350);break;case e.CropRatioType.INSTA_LANDSCAPE:o.cropControls.customRatioWidth=540,o.cropControls.customRatioHeight=283,o.cropControls.cropWidth=1080,o.cropControls.cropHeight=566,o.cropControls.aspectRatioLocked=!0,i(1080,566)}R(o,{changeType:e.RatioResizeType.RESIZE_WIDTH,changeSize:o.cropControls.cropWidth}),R(o,{changeType:e.RatioResizeType.RESIZE_HEIGHT,changeSize:o.cropControls.cropHeight})},setAspectRatioLock(o,{payload:t}){o.cropControls.aspectRatioLocked=t,t?(o.cropControls.customRatioWidth=o.cropControls.cropWidth,o.cropControls.customRatioHeight=o.cropControls.cropHeight):(o.cropControls.customRatioWidth=0,o.cropControls.customRatioHeight=0)},resizeCropBox(o,{payload:t}){R(o,t)},resizeCropBoxFromCanvas(o,{payload:t}){o.cropControls.cropWidth=t.width,o.cropControls.cropHeight=t.height},rotateResetCropBoxFromCanvas(o){o.cropControls.aspectRatioLocked=!1,o.cropControls.aspectRatioSelected=e.CropRatioType.UNSELECTED,o.cropControls.selectedMenuOption=e.CropMenuOptions.FREE_FORM},saveCropToHistory:h(((o,{payload:t})=>(o.imageState=t,o.actionApplied=e.EditingAction.CROP,o.hasCrop=!0,!0))),setIntegratedEditor(o){o.integratedEditor=!0}};function R(o,t){if(0===t.changeSize)return;const i=function(o,t,i,r,a,s,c,p,n){let l={width:i,height:r};if(c)if(t===e.RatioResizeType.RESIZE_WIDTH){const t=o,e=Math.floor(t*n/p);if(e>s){l.height=s;const o=Math.floor(s*p/n);if(o>a){const o=Math.floor(a*n/p);l.width=a,l.height=o}else l.width=o}else l.width=t,l.height=e}else{const t=o,e=Math.floor(t*p/n);if(e>a){l.width=a;const o=Math.floor(a*n/p);if(o>s){const o=Math.floor(s*p/n);l.height=s,l.width=o}else l.height=o}else l.height=t,l.width=e}else t===e.RatioResizeType.RESIZE_WIDTH?l.width=Math.min(o,a):l.height=Math.min(o,s);return l}(t.changeSize,t.changeType,o.cropControls.cropWidth,o.cropControls.cropHeight,o.imageWidth-20,o.imageHeight-20,o.cropControls.aspectRatioLocked,o.cropControls.customRatioWidth,o.cropControls.customRatioHeight);o.cropControls.cropWidth=Math.round(i.width),o.cropControls.cropHeight=Math.round(i.height)}function u(o){return o<-100?-100:o>100?100:o}const g=t.createSlice({name:"editor",initialState:d,reducers:C}),m=g.reducer,y=function(o,e){return t.createReducer(o,(i=>{i.addCase(c,(()=>o)),i.addCase(a,(o=>{o.history.past.length&&(o.history.current.isCommittable&&o.history.future.push(o.history.current),o.history.current=o.history.past.pop())})),i.addCase(s,(o=>{o.history.future.length&&(o.history.current.isCommittable&&o.history.past.push(o.history.current),o.history.current=o.history.future.pop())})),i.addDefaultCase(((o,i)=>{const r=t.e(o),a=e(r,i);if(!r||r.history.current===a.history.current)return a;if(!r.history.current.isCommittable)return a;const s=[...r.history.past,r.history.current];return s.length>r.history.maxHistory&&s.shift(),Object.assign(Object.assign({},a),{history:Object.assign(Object.assign({},a.history),{past:s,future:[]})})}))}))}(d,m);t.injectInternalStyle("typescript/component_libraries/photo-editor/src/components/loading.module.out.css",(o=>"._loading_opkob_1{background-color:#000}._loading_opkob_1,._loading--integrated-editor_opkob_11{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}._loading--integrated-editor_opkob_11{background:var(--color__faint__background)}"));const E="_loading_opkob_1",T="_loading--integrated-editor_opkob_11";var _;!function(o){o.SMALL="small",o.MEDIUM="medium",o.LARGE="large",o.UNKNOWN="unknown"}(_||(_={})),o.Loading=function({integratedEditor:o}){const{loadingAriaLabel:e}={loadingAriaLabel:r.useIntl().formatMessage({id:"I2tb5f",defaultMessage:"Loading"})};return i.React$1.createElement("div",{className:o?T:E},i.React$1.createElement(t.Spinner,{"aria-valuetext":e,size:"standard"}))},o.actions=p,o.convertByteToMegabyte=function(o){return o/Math.pow(1024,2)},o.createStore=function(){return t.configureStore({preloadedState:d,reducer:y,devTools:!1})},o.editorSlice=g,o.getSizeBucket=function(o){return 0<o&&o<2?_.SMALL:2<=o&&o<10?_.MEDIUM:o>=10?_.LARGE:_.UNKNOWN},o.initialAdjustments=l,o.initialOrientation=n}));
//# sourceMappingURL=c_photo-editor_logging_logging_utils.js-vflqJ_5WK.map
