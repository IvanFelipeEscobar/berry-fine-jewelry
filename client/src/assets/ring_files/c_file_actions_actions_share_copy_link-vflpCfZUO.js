define(["exports","./c_tslib","./c_utils_contacts_tokenizer_contacts_tokenizer_util","./c_src_utils_logging","./e_ui_page_files_router","./c_sharing_ui_notifications_util","./c_share_modal_evolution_utils_logging","./c_core_browser_detection","./c_clipboard_v3"],(function(e,r,t,a,i,o,s,n,c){"use strict";var _,u;!function(e){e.SHARED_LINK_ALREADY_EXISTS="shared_link_already_exists",e.ACCESS_DENIED="access_denied",e.PATH="path",e.NOT_FOUND="not_found",e.EMAIL_NOT_VERIFIED="email_not_verified",e.SETTINGS_ERROR="settings_error",e.NOT_AUTHORIZED="not_authorized",e.UNDEFINED_ERROR="undefined_error"}(_||(_={})),function(e){e.CLIPBOARD_API="clipboard_api",e.EXEC_COMMAND="exec_command"}(u||(u={}));const d="sharing-notification",l=e=>{const{metadata:r}=e;c.copyToClipboard(r.url,(()=>{p(e,u.EXEC_COMMAND)}),(()=>{f(e)}))},p=(e,r)=>{const t=e.metadata?e.metadata.url:"";o.showCopyLinkSuccessSnackbar(t,O(e.metadata)),S({file:e.file,user:e.user,event:a.TiburonEventName.CopySharedLink,metadata:e.metadata,extras:{created_new_link:e.isNewlyCreated,copy_method:r},surfaceOrigin:e.userActionSource})},f=e=>{(e=>{if(navigator.clipboard){const r=e.metadata.url;navigator.clipboard.writeText(r).then((function(){p(e,u.CLIPBOARD_API)}),(function(){E(e)}))}else E(e)})(e)},E=e=>{const r=e.metadata?e.metadata.url:"";o.showCopyLinkErrorSnackbar(r,O(e.metadata)),S({file:e.file,user:e.user,event:a.TiburonEventName.CopySharedLinkFailure,metadata:e.metadata,extras:{error:"failed_copy_to_clipboard"},surfaceOrigin:e.userActionSource})},g=e=>e.file_id||e.fq_path,h=e=>{i.Snackbar.close(d),l(e)},O=e=>{const r=e?e.link_permissions.link_access_level:void 0;let t="viewer";return r&&(t=r.hasOwnProperty(".tag")?r[".tag"]:r),t},S=({file:e,user:r,event:t,metadata:a,extras:o={},surfaceOrigin:c})=>{const _=c===i.ActionSourceValue.OVERFLOW_MENU?i.SHARE_ACTION_ORIGIN_TYPE.BROWSE_FILE_ROW_OVERFLOW_MENU:i.SHARE_ACTION_ORIGIN_TYPE.BROWSE_FILE_ROW_BUTTON,u=n.get_browser_info();i.ShareTibEventLogger.log(r.id,t,_,Object.assign(Object.assign(Object.assign({},s.buildExtraFromLinkMetadata(a)),{file_id:e.file_id,fq_path:e.fq_path,browser:u.browser,browser_version:u.version}),o))},m=({file:e,user:r,surfaceOrigin:t,exceptionType:i,httpCode:o})=>{S({file:e,user:r,event:a.TiburonEventName.FailCreateSharedLinkWithSettings,extras:{error_message:i,http_status_code:o,is_alpha:!1},surfaceOrigin:t}),S({file:e,user:r,event:a.TiburonEventName.CopySharedLinkFailure,extras:{error:i},surfaceOrigin:t})},C=e=>new i.FileShareApiClient({userId:e.id}),N=()=>{const e=document.createElement("input");e.value="sharing is caring",document.body.appendChild(e),e.select();const r=document.queryCommandEnabled("copy");return document.body.removeChild(e),r};function w(e,r,t){r(!1,g(e.file)),N()?l(e):o.showCopyLinkCTASnackbar(e.metadata.url,(()=>{h(e)}),d,O(e.metadata));const i=e.isNewlyCreated?200:t&&t.raw&&t.raw.status;S({file:e.file,user:e.user,event:a.TiburonEventName.SucceedCreateSharedLinkWithSettings,metadata:e.metadata,extras:{created_new_link:e.isNewlyCreated,http_status_code:i,response_status:"success",is_alpha:!1},surfaceOrigin:e.userActionSource})}e.copyLink=function(e,t,a,i,s){s=s||{access:{".tag":"max"}},o.showCopyLinkProgressSupportedBrowserSnackbar();const n=g(t);a(!0,n),C(e).createSharedLinkNonAlpha({fileIdOrPath:n,settings:s}).then((r=>{w({file:t,user:e,metadata:r,isNewlyCreated:!0,userActionSource:i},a)})).catch((s=>r.__awaiter(this,void 0,void 0,(function*(){var r;if(s.error[".tag"]===_.SHARED_LINK_ALREADY_EXISTS){let o=null===(r=s.error.shared_link_already_exists)||void 0===r?void 0:r.metadata;if(!o){o=(yield C(e).sharedLinkInfo({fileIdOrPath:t.fq_path}))[0]}w({file:t,user:e,metadata:o,isNewlyCreated:!1,userActionSource:i},a,s)}else if(s.error[".tag"]===_.ACCESS_DENIED)a(!1,n),o.showCopyLinkNoPermissionSnackbar(),m({file:t,user:e,surfaceOrigin:i,exceptionType:s.error[".tag"],httpCode:s.raw&&s.raw.status});else if(s.error[".tag"]===_.SETTINGS_ERROR&&s.error.settings_error[".tag"]===_.NOT_AUTHORIZED)a(!1,n),o.showCopyLinkNoPermissionSnackbar(),m({file:t,user:e,surfaceOrigin:i,exceptionType:s.error.settings_error[".tag"],httpCode:s.raw&&s.raw.status});else if(s.error[".tag"]===_.PATH&&s.error.path[".tag"]===_.NOT_FOUND)a(!1,n),o.showCopyLinkNotFoundSnackbar(),m({file:t,user:e,surfaceOrigin:i,exceptionType:s.error.path[".tag"],httpCode:s.raw&&s.raw.status});else if(s.error[".tag"]===_.EMAIL_NOT_VERIFIED)a(!1,n),o.showCopyLinkEmailNotVerifiedSnackbar(),m({file:t,user:e,surfaceOrigin:i,exceptionType:s.error[".tag"],httpCode:s.raw&&s.raw.status});else{a(!1,n);const r=s.error[".tag"]?s.error[".tag"]:_.UNDEFINED_ERROR;o.showCopyLinkCatchallSnackbar(),m({file:t,user:e,surfaceOrigin:i,exceptionType:r,httpCode:s.raw&&s.raw.status})}}))))},e.isBrowserCopyEnabled=N}));
//# sourceMappingURL=c_file_actions_actions_share_copy_link.js-vflOwi8Rr.map
