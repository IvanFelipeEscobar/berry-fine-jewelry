define(["exports","./c_tslib","./e_ui_page_files_router"],(function(e,t,r){"use strict";e.PAP_Select_ActionBarOverflowMenu=function(e){return{class:"navigation",action:"select",object:"action_bar_overflow_menu",properties:e}},e.deleteCapture=(e,i)=>t.__awaiter(void 0,void 0,void 0,(function*(){try{return yield new r.DefaultUserApiV2Client(e).ns("capture").rpc("delete",{short_label:i},{}),!0}catch(e){return!1}})),e.fetchCaptureAccess=e=>t.__awaiter(void 0,void 0,void 0,(function*(){try{const{capture_access_policy:t}=yield new r.DefaultUserApiV2Client(e).ns("capture").rpc("get_team_settings",{},{});return 1===t}catch(e){return!1}})),e.fetchCaptureFileAssociation=(e,i)=>t.__awaiter(void 0,void 0,void 0,(function*(){try{const{short_label:t}=yield new r.DefaultUserApiV2Client(e).ns("capture").rpc("get_file_association",{file_id:i.file_id,url:window.location.href},{});return t?{fileId:i.file_id,shortLabel:t}:void 0}catch(e){return"error"in e&&"object"==typeof e.error?e.error.error[".tag"]:void 0}})),e.fetchCapturePreviewData=(e,i)=>t.__awaiter(void 0,void 0,void 0,(function*(){try{const{results:t}=yield new r.DefaultUserApiV2Client(e).ns("capture").rpc("get_preview_data_batch",{short_url_labels:[i]},{});return t[0]||null}catch(e){return null}})),e.fetchCaptureUserInfo=e=>t.__awaiter(void 0,void 0,void 0,(function*(){try{const{used_capture_app:t,used_capture_web:i}=yield new r.DefaultUserApiV2Client(e).ns("capture").rpc("get_capture_user_info",{},{});return{usedCaptureDesktop:t||!1,usedCaptureWeb:i||!1}}catch(e){return{usedCaptureDesktop:!1,usedCaptureWeb:!1}}})),e.logCaptureFileView=(e,i,o)=>t.__awaiter(void 0,void 0,void 0,(function*(){try{return yield new r.DefaultUserApiV2Client(e).ns("capture").rpc("log_file_view",{short_label:i,source:o},{}),!0}catch(e){return"error"in e&&"object"==typeof e.error&&e.error.error[".tag"]}}))}));
//# sourceMappingURL=c_capture_api.js-vflb-Nn1W.map
