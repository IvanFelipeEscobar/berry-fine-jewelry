define(["require","exports","./e_ui_page_files_router"],(function(e,n,a){"use strict";function t(n,a,t,o,r,i=!0){return new Promise((s=>{new Promise((function(n,a){e(["./c_sharing_share_modal_util"],n,a)})).then((function(e){return e.share_modal_util_esnext})).then((e=>{s(e.showShareModal(n,a,t,o,r,i))}))}))}n.asyncShowManageAccessModal=function(e,n,o){return t(e,n,{initialScreen:a.MANAGE_SCREEN,origin:o})},n.asyncShowNewFolderShareModal=function({contentManagerValidateFolderPath:n,defaultBasePath:a,initialContentName:t,isNonUserRelativeContext:o=!1,logShareModalView:r=!0,modalSessionId:i,onCancel:s,onClose:l,onSetContentNameAndSendShareFail:h,onShareClick:d,onSuccessSharing:u,setUrl:c,shareAsConfidential:_=!1,shareButtonLabelOverride:S,shouldCloseImmediately:f,shouldSuppressRedirectToBrowse:m,shouldSyncThisFolder:w,user:M,experiments:P={},automationOptionChecked:g,defaultRecipientAccessLevel:C}){new Promise((function(n,a){e(["./c_sharing_share_modal_util"],n,a)})).then((function(e){return e.share_modal_util_esnext})).then((e=>e.showNewFolderShareModal(M,i,a,t,_,o,w,c,n,u,d,m,f,s,l,h,S,r,P,g,C)))},n.asyncShowPrefilledShareModal=function({user:n,sharePrefillEmails:a,content:t,setUrl:o,contentManagerValidateFolderPath:r,extras:i}){new Promise((function(n,a){e(["./c_sharing_share_modal_util"],n,a)})).then((function(e){return e.share_modal_util_esnext})).then((e=>{e.showPrefilledShareModal({user:n,sharePrefillEmails:a,content:t,setUrl:o,contentManagerValidateFolderPath:r,extras:i})}))},n.asyncShowShareModal=t}));
//# sourceMappingURL=c_sharing_async_share_modal_util.js-vflXYQNQ4.map
