define(["exports","./c_tslib","./e_ui_page_files_router","./e_edison","./c_apex-metrics_src_types","./c_lodash-es_lodash","metaserver/static/js/modules/constants/files_spa","./c_core_i18n","./e_core_exception","./c_core_exception_info","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","./c_src_sink_index","./c_core_browser_detection","metaserver/static/js/modules/core/langpack","metaserver/static/js/modules/constants/env","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","./c_core_xhr","./c_csrf","./c_browser_cookies","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/search","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings"],(function(s,e,t,r,a,n,c,o,i,_,l,u,d,m,v,j,g,h,f,w,k,p,x,b,y,q,D,U,B,E,I,L,O){"use strict";class R{constructor(s){this.message=s}}class S extends R{}class A extends S{}s.DownloadError=S,s.TooLargeError=A,s.fetchDownloadUrl=function(s){const{sharedLinkUrl:e,rlkey:r,origin:a,userId:n}=s;return t.SilentBackgroundRequest({url:"/sharing/fetch_user_content_link",data:{url:e,rlkey:r,origin:a},subject_user:n})},s.testDownload=function(s,r){return e.__awaiter(this,void 0,void 0,(function*(){let e;try{e=yield t.SilentBackgroundRequest({url:s,data:{rlkey:r},subject_user:t.getActiveUserId()})}catch(s){throw new S}if("OK"!==e)throw 0===e.indexOf("err:")?new A:new S}))}}));
//# sourceMappingURL=c_share_download_ui_api.js-vflmwLaM-.map
