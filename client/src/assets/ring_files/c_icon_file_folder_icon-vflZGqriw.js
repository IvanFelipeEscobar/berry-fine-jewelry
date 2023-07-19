define(["exports","./c_tslib","./e_edison","./e_ui_page_files_router","./c_icon_file_icon","./c_icon_folder_icon","./c_icon_shortcuts_icon","./c_core_i18n"],(function(e,i,t,s,r,n,a,c){"use strict";function l(e,i,s){let r;return s=null!=s?s:2,e&&(r=t.URI.parse(e),r=r.removeQuery("size").removeQuery("size_mode"),r=r.updateQuery({size:`${i}x${i}`,size_mode:`${s}`}).toString()),r}class o extends t.React$1.Component{render(){const e=this.props,{hideBadge:l,showPreview:o,previewUrl:_,onPreviewClick:d,iconDelay:m}=e,g=i.__rest(e,["hideBadge","showPreview","previewUrl","onPreviewClick","iconDelay"]),{file:p}=g,{type:u,isDeleted:b}=p,h=p.fq_path||p.filename||"",f=u===s.FileTypes.FILE||u===s.FileTypes.PACKAGE?"web"===s.getExtension(h)?t.React$1.createElement(a.ShortcutsFileIcon,Object.assign({showPreview:o},this.props)):t.React$1.createElement(r.FileIcon,Object.assign({},this.props)):t.React$1.createElement(n.FolderIcon,Object.assign({},g));return!l&&b?t.React$1.createElement("div",{className:"file-icon__badge-wrapper"},f,t.React$1.createElement("img",{src:t.static_url("/static/metaserver/static/images/badges/trash-vfl3_SuXf.svg"),className:"file-icon__badge",alt:c.intl.formatMessage({id:"tjn1zH",defaultMessage:"deleted"})})):f}}o.displayName="FileOrFolderIcon";const _=e=>{const{iconSize:s}=e,r=i.__rest(e,["iconSize"]),{file:n}=r,a=Object.assign(Object.assign({},n),{thumbnail_url_tmpl:n.thumbnail_url_tmpl?l(n.thumbnail_url_tmpl,s):void 0});return t.React$1.createElement(o,Object.assign({},Object.assign(Object.assign({},r),{file:a,variant:"large"})))};_.displayName="LargeFileOrFolderIcon",e.FileOrFolderIcon=o,e.LargeFileOrFolderIcon=_,e.getThumbnailUrlForItem=l}));
//# sourceMappingURL=c_icon_file_folder_icon.js-vflNbDIkw.map
