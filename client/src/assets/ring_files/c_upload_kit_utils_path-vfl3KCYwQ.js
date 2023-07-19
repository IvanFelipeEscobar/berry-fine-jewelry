define(["exports"],(function(t){"use strict";t.getDestPath=t=>t.fullPath?t.fullPath.startsWith("/")?t.fullPath.substring(1):t.fullPath:t.name,t.getNameAtRoot=t=>t.split("/")[0],t.renameFilename=function(t,e){const n=t.split("/");return n[n.length-1]=e,n.join("/")},t.reparentFilename=function(t,e){return`${e}/${t.split("/").pop()}`}}));
//# sourceMappingURL=c_upload_kit_utils_path.js-vflws8Zg1.map
