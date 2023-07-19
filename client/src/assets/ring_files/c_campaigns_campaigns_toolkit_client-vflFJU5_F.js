define(["exports","./c_tslib","./e_edison","./c_lodash-es_lodash","metaserver/static/js/modules/constants/page_load","./e_ui_page_files_router","./e_core_exception","./c_core_exception_info","./c_apex-metrics_src_types","metaserver/static/js/modules/constants/files_spa","./c_core_i18n","./c_src_sink_index","./c_core_browser_detection","metaserver/static/js/modules/core/langpack","metaserver/static/js/modules/constants/env","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","metaserver/static/js/modules/constants/request","./c_core_xhr","./c_csrf","./c_browser_cookies","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/search","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings"],(function(e,t,a,n,s,i,o,c,r,p,l,m,_,g,d,u,v,E,f,C,S,O,A,h,I,j,D,x,y,T,P,b,w){"use strict";function L(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var q=L(s);const N=()=>a.React$1.createElement(i.CampaignSlot,{slotId:"fullscreen_overlay"}),M=e=>{for(const t of e)window.clearTimeout(t)},G=(e,t)=>{const a=[];return e.forEach((e=>{var n,s,o;if(null===(n=null==e?void 0:e.campaign)||void 0===n?void 0:n.delay_in_seconds){i.logDelaySchedulingEvent(e,e.campaign.delay_in_seconds);const n=(s=()=>{i.emitCampaignToSlot(e,t)},o=1e3*e.campaign.delay_in_seconds,window.setTimeout(s,o));a.push(n)}else i.emitCampaignToSlot(e,t)})),a},R=e=>e.map((e=>{const t=e.campaign;return{campaign_id:t.campaign_id,version_id:t.version_id,slot:e.slotId[".tag"],load_method:i.LOAD_METHOD_TOOLKIT}})),U=(e={},a,n,s,r)=>t.__awaiter(void 0,void 0,void 0,(function*(){try{if(!e||!e.page)return[];const p=a=>t.__awaiter(void 0,void 0,void 0,(function*(){const t=[],{campaigns_result:r,campaigns_to_slots:p}=yield function(e){if(!e.campaign_properties||0===Object.keys(e.campaign_properties).length)throw new Error("campaign_properties cannot be empty");let t=new i.NoAuthApiV2Client;const a=i.getActiveUser();return void 0!==a&&(t=new i.DefaultUserApiV2Client(a)),t.ns("campaigns_toolkit").rpc("get_best_campaigns_for_user",e,{}).catch((t=>(o.reportException({err:t,tags:["fetchCampaigns","campaigns"],severity:c.SEVERITY.NONCRITICAL,exc_extra:{args:e}}),{campaigns:[],campaigns_to_slots:{}})))}({campaign_properties:e,event_context:{file_extension:(null==n?void 0:n.file_extension)&&n.file_extension,file_name:(null==n?void 0:n.file_name)&&n.file_name,upload_error_type:(null==n?void 0:n.upload_error_type)&&n.upload_error_type,file_path:(null==n?void 0:n.file_path)&&n.file_path,file_extensions_in_directory:(null==n?void 0:n.file_extensions_in_directory)&&n.file_extensions_in_directory,page_path:null==n?void 0:n.page_path,overwrote:null==n?void 0:n.overwrote},locale:q.PAGE_LOCALE,load_method:s,orchestration_state:a});return null==r||r.campaigns.forEach((e=>{var a,n;t.push({campaign:e,requestId:null==r?void 0:r.request_id,slotId:null!==(a=null==p?void 0:p[e.version_id])&&void 0!==a?a:{".tag":"other"},currentSequenceStep:null===(n=e.sequence)||void 0===n?void 0:n.root})})),t}));return yield a.enqueueFetch(i.LOAD_METHOD_TOOLKIT,p,R,r,e)}catch(t){o.reportException({err:t,tags:["fetchCampaigns","campaigns"],severity:c.SEVERITY.NONCRITICAL,exc_extra:{args:e}})}return[]})),k=e=>{const t={};return e.forEach((e=>{e.currentSequenceStep&&(t[e.campaign.campaign_id]=e.currentSequenceStep)})),t},F=[i.CampaignEvents.DOWNLOAD_BUTTON_CLICKED,i.CampaignEvents.FILE_SHARE_SUCCESS,i.CampaignEvents.FILE_UPLOAD_FAILURE,i.CampaignEvents.SHARE_MODAL_CLOSED,i.CampaignEvents.PAGE_LOAD,i.CampaignEvents.FILE_UPLOAD_SUCCESS,i.CampaignEvents.DELETE_SUCCESS];e.CampaignsToolkit=({emitter:e=i.campaignsEmitter,loadMethod:s,shouldExpectPromptToLoad:o})=>{const[{campaigns:c,page:r,context:p,sequenceMap:l,selectiveCampaign:m,delayCampaignTimeouts:_},g]=a.reactExports.useState({campaigns:[],page:"",context:void 0,sequenceMap:{},selectiveCampaign:void 0,delayCampaignTimeouts:[]}),d=i.OrchestrationFactory.getInstance();return a.reactExports.useEffect((()=>{const t=({data:{page:e,context:t}})=>{var a;const n=new URL(window.location.href),s=null!==(a=n.searchParams.get("_spec_campaign"))&&void 0!==a?a:void 0;M(_),g((a=>Object.assign(Object.assign({},a),{page:e,context:t&&Object.assign(Object.assign({},t),{page_path:n.pathname}),selectiveCampaign:s}))),i.resetHistoryForEvent(i.PAGE_LOADED),i.setPageName(e)};return e.on(i.PAGE_LOADED,t),()=>{e.off(i.PAGE_LOADED,t),M(_)}}),[]),a.reactExports.useEffect((()=>{const t=({loadEventType:e})=>{e===i.PreviewPageLoadEventType.Mount?d.stashPromptShownCampaigns():d.popStashedPromptShownCampaigns()};return e.on(i.PREVIEW_PAGE_LOADED,t),()=>{e.off(i.PREVIEW_PAGE_LOADED,t)}}),[]),a.reactExports.useEffect((()=>{const t=()=>{i.resetHistoryForEvent(i.PAGE_CHANGED),M(_),d.clearToolkitCampaignsFromState(),g((e=>(e.campaigns.forEach((e=>{i.clearCampaignInSlot(e)})),Object.assign(Object.assign({},e),{campaigns:[],page:""}))))};return e.on(i.PAGE_CHANGED,t),()=>{e.off(i.PAGE_CHANGED,t)}}),[]),a.reactExports.useEffect((()=>{const t=e=>{const t=c.filter((t=>{var a;const n=null===(a=null==t?void 0:t.campaign)||void 0===a?void 0:a.campaign_id;return!!n&&String(n)!==e})),a=n.cloneDeep(l);delete a[parseInt(e,10)],g((e=>Object.assign(Object.assign({},e),{campaigns:t,sequenceMap:a})))};return e.on(i.CAMPAIGN_DISMISSED,t),()=>{e.off(i.CAMPAIGN_DISMISSED,t)}}),[c]),a.reactExports.useEffect((()=>{const t=({campaignId:e,ctaId:t})=>{var a,s,o;const r=parseInt(e,10),p=c.find((e=>e.campaign.campaign_id===r)),m=null==p?void 0:p.currentSequenceStep,_=null!==(s=null===(a=null==p?void 0:p.campaign.sequence)||void 0===a?void 0:a.nodes)&&void 0!==s?s:{},d={campaign:{campaign_id:r,version_id:-1,prompt_queried_at_ms:-1,campaign_name:"campaignWithOnlyCampaignId"},requestId:"",slotId:{".tag":"other"}};if(!(p&&m&&t&&m in _))return void i.logCampaignSequenceEvent(i.CampaignsToolkitSequenceEvents.MISSING_OR_INVALID_PARAMETERS,null!=p?p:d,m,t);const u=null===(o=_[m].children)||void 0===o?void 0:o[t];if(!u)return i.logCampaignSequenceEvent(i.CampaignsToolkitSequenceEvents.SEQUENCE_COMPLETED,p,m,t),void i.emitCampaignDismissed(e);const v=Object.assign(Object.assign({},p),{currentSequenceStep:u}),E=c.map((e=>e.campaign.campaign_id===r?v:e)),f=n.cloneDeep(l);f[r]=u,g((e=>Object.assign(Object.assign({},e),{campaigns:E,sequenceMap:f}))),i.logCampaignSequenceEvent(i.CampaignsToolkitSequenceEvents.PROGRESS_SEQUENCE,p,u,t),i.emitCampaignToSlot(v)};return e.on(i.CAMPAIGN_SEQUENCE_ACTION,t),()=>{e.off(i.CAMPAIGN_SEQUENCE_ACTION,t)}}),[c,l]),a.reactExports.useEffect((()=>{const a=({name:e,data:{context:a,loggingParams:c}={}})=>t.__awaiter(void 0,void 0,void 0,(function*(){if(!F.includes(e))return;M(_);const t=yield U({page:r,action:e,path:window.location.pathname},d,a,s,o),c=k(t);g((e=>Object.assign(Object.assign({},e),{campaigns:n.uniqBy([...e.campaigns,...t].reverse(),i.getSlotFromCampaignFormatProps),sequenceMap:Object.assign(Object.assign({},e.sequenceMap),c),delayCampaignTimeouts:G(t,a)})))}));return e.on(i.CAMPAIGN_EVENT,a),()=>{e.off(i.CAMPAIGN_EVENT,a)}}),[r]),a.reactExports.useEffect((()=>{r&&t.__awaiter(void 0,void 0,void 0,(function*(){const e=yield U({page:r,selective_campaign:m||void 0,path:window.location.pathname},d,p,s,o),t=k(e);g((a=>Object.assign(Object.assign({},n.omit(a,"context")),{campaigns:e,sequenceMap:t,selectiveCampaign:void 0,delayCampaignTimeouts:G(e,p)})))}))}),[r]),a.React$1.createElement(N,null)},e.fetchCampaigns=U}));
//# sourceMappingURL=c_campaigns_campaigns_toolkit_client.js-vflpPrOdm.map
