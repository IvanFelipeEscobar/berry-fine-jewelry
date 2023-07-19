define(["exports","./e_edison","./e_ui_page_files_router","./c_core_i18n","./c_core_logging_constants"],(function(e,t,o,i,n){"use strict";var r;function c(e){if(e)switch(e){case o.FileViewOriginType.BROWSE:return n.SourceContext.Browse;case o.FileViewOriginType.COLLECTIONS:return n.SourceContext.Collections;case o.FileViewOriginType.COMMERCE:return n.SourceContext.Commerce;case o.FileViewOriginType.HELLOSIGN:return n.SourceContext.HelloSign;case o.FileViewOriginType.HOME:return n.SourceContext.Home;case o.FileViewOriginType.PHOTOS:return n.SourceContext.Photos;case o.FileViewOriginType.RECENTS:return n.SourceContext.Recents;case o.FileViewOriginType.SEARCH:return n.SourceContext.Search;case o.FileViewOriginType.STARRED:return n.SourceContext.Starred;case o.FileViewOriginType.TRANSFER:return n.SourceContext.Transfer;case o.FileViewOriginType.SHARED_COLLECTION:return n.SourceContext.SharedCollection}const t=o.get_uri().path;return/^\/h$/.test(t)?n.SourceContext.Home:/^\/starred$/.test(t)?n.SourceContext.Starred:/^\/recents$/.test(t)?n.SourceContext.Recents:/^\/search$/.test(t)?n.SourceContext.Search:/^\/(s|scl\/fi)\//.test(t)?n.SourceContext.SharedLinkFile:/^\/(sh|scl\/fo)\//.test(t)?n.SourceContext.SharedLinkFolder:/^\/sc\//.test(t)?n.SourceContext.SharedLinkCollection:/^\/history/.test(t)?n.SourceContext.VersionHistory:/^\/(home|work|personal)/.test(t)?n.SourceContext.Browse:void 0}e.PreviewSourceAction=void 0,(r=e.PreviewSourceAction||(e.PreviewSourceAction={})).Visit="visit",r.Click="click",r.FileViewerExit="file_viewer_exit",e.getSourceAction=function(){switch(c()){case n.SourceContext.SharedLinkFile:case n.SourceContext.SharedLinkFolder:return e.PreviewSourceAction.Visit;default:return e.PreviewSourceAction.Click}},e.getSourceContext=c,e.getWebSignInTag=function(e,t){return`${e?"inband":"outofband"}_${t?"folder":"file"}_share`},e.showDocSendSnackbar=function(e){setTimeout((()=>{o.Snackbar.show(t.React$1.createElement(o.Snackbar,{title:i.intl.formatMessage({id:"d93ce2",defaultMessage:"Always save signed documents in Dropbox? You can change this anytime in DocSend settings."}),closeButtonText:i.intl.formatMessage({id:"6NGNJV",defaultMessage:"Not now"}),actionButtonText:i.intl.formatMessage({id:"gM7OF1",defaultMessage:"Yes"}),id:"sync-from-docsend",onActionClick:()=>{e&&o.WebUserActionLog.log(e.id,o.WebUserActionLogEvent.CLICK_DOCSEND_SNACKBAR_YES,{}),window.open("https://docsend.com/settings/company/users/redirect?anchor=apps-settings","_blank")},onCloseClick:()=>{e&&o.WebUserActionLog.log(e.id,o.WebUserActionLogEvent.CLICK_DOCSEND_SNACKBAR_NOT_NOW,{})}}))}),0)}}));
//# sourceMappingURL=c_file_viewer_utils.js-vflz5cUYI.map
