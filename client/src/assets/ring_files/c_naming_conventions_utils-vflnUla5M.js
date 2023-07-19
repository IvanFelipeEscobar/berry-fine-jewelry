define(["exports","./c_lodash-es_lodash"],(function(e,a){"use strict";var n,t;e.APIRequestState=void 0,(n=e.APIRequestState||(e.APIRequestState={}))[n.IN_PROGRESS=0]="IN_PROGRESS",n[n.FAILED=1]="FAILED",n[n.SUCCEEDED=2]="SUCCEEDED",e.NamingConventionType=void 0,(t=e.NamingConventionType||(e.NamingConventionType={})).none="none",t.upload_date="upload_date",t.parent_folder_name="include_parent_folder_name",t.sender_name="sender_name",t.keyword="keyword",t.capture_date="capture_date",t.camera_make="camera_make",t.camera_model="camera_model",t.dimensions="dimensions",t.dots_per_inch="dots_per_inch",t.lens_model="lens_model",t.dots_per_cm="dots_per_cm",t.original_snippet="original_snippet",t.capitalize_all_initials="capitalize_all_initials",t.consistent_separators="change_all_separators";var o,i,r;e.DateFormatSelection=void 0,(o=e.DateFormatSelection||(e.DateFormatSelection={})).yyyy_mm="yyyy_mm",o.yyyy_mm_dd="yyyy_mm_dd",o.yyyymmdd="yyyymmdd",o.yyyy_abbr_dd="yyyy_abbr_dd",o.yyyy_mm_hh_mm="yyyy_mm_hh_mm",o.yyyy_mm_dd_hh_mm="yyyy_mm_dd_hh_mm",o.yyyy_abbr_dd_hh_mm="yyyy_abbr_dd_hh_mm",o.yyyymmdd_hh_mm="yyyymmdd_hh_mm",e.FolderScopeOptions=void 0,(i=e.FolderScopeOptions||(e.FolderScopeOptions={})).THIS_FOLDER_ONLY="this_folder_only",i.THIS_FOLDER_AND_SUBFOLDERS="this_folder_and_subfolders",e.ConsistentSeparatorSelection=void 0,(r=e.ConsistentSeparatorSelection||(e.ConsistentSeparatorSelection={})).spaces="spaces",r.dashes="dashes",r.underscores="underscores";const m={selectedRules:[e.NamingConventionType.upload_date],dateFormatSelection:e.DateFormatSelection.yyyy_mm_dd,consistentSeparatorSelection:e.ConsistentSeparatorSelection.spaces,mlFilenameParsing:!1,data:{keyword:""},subfolderOption:e.FolderScopeOptions.THIS_FOLDER_ONLY};e.DateFormatSelection.yyyy_mm_dd,e.ConsistentSeparatorSelection.spaces,e.FolderScopeOptions.THIS_FOLDER_ONLY;const _={dateInfo:[{mlFilenameParsing:!1,dateFormatSelection:e.DateFormatSelection.yyyy_mm_dd},{mlFilenameParsing:!1,dateFormatSelection:e.DateFormatSelection.yyyy_mm_dd}],consistentSeparatorSelection:e.ConsistentSeparatorSelection.spaces,keywords:["",""]},s={componentList:[e.NamingConventionType.none,e.NamingConventionType.original_snippet],capitalizeAllInitials:!1,changeAllSeparators:!1,data:_,subfolderOption:e.FolderScopeOptions.THIS_FOLDER_ONLY},d={dateInfo:[{mlFilenameParsing:!1,dateFormatSelection:e.DateFormatSelection.yyyy_mm_dd},{mlFilenameParsing:!1,dateFormatSelection:e.DateFormatSelection.yyyy_mm_dd}],consistentSeparatorSelection:e.ConsistentSeparatorSelection.spaces,keywords:["",""]},l={componentList:[e.NamingConventionType.original_snippet,e.NamingConventionType.sender_name],capitalizeAllInitials:!1,changeAllSeparators:!1,data:d,subfolderOption:e.FolderScopeOptions.THIS_FOLDER_ONLY};var y,p,c;e.NamingConventionOrigin=void 0,(y=e.NamingConventionOrigin||(e.NamingConventionOrigin={})).from_desktop="from_desktop",y.from_menu="from_menu",y.from_file_request="from_file_request",y.from_automation="from_automation",y.from_desktop_organized_home="from_desktop_organized_home",y.from_web_organized_menu="from_web_organized_menu",y.from_in_folder_activation="from_in_folder_activation",y.from_unknown_nc_origin="from_unknown_nc_origin",e.NamingConventionModal=void 0,(p=e.NamingConventionModal||(e.NamingConventionModal={})).rule_selection_page="rule_selection_page",p.automation_change_warning_page="automation_change_warning_page",p.automation_delete_warning_page="automation_delete_warning_page",function(e){e.ml="https://help.dropbox.com/en-us/files-folders/sort-preview/naming-conventions"}(c||(c={}));const g=new Map([["upload_date",e.NamingConventionType.upload_date],["include_parent_folder_name",e.NamingConventionType.parent_folder_name],["sender_name",e.NamingConventionType.sender_name],["keyword",e.NamingConventionType.keyword],["capture_date",e.NamingConventionType.capture_date],["camera_make",e.NamingConventionType.camera_make],["camera_model",e.NamingConventionType.camera_model],["dimensions",e.NamingConventionType.dimensions],["dots_per_inch",e.NamingConventionType.dots_per_inch],["lens_model",e.NamingConventionType.lens_model],["dots_per_cm",e.NamingConventionType.dots_per_cm]]),h=new Map([["yyyy_mm",e.DateFormatSelection.yyyy_mm],["yyyy_mm_dd",e.DateFormatSelection.yyyy_mm_dd],["yyyy_abbr_dd",e.DateFormatSelection.yyyy_abbr_dd],["yyyymmdd",e.DateFormatSelection.yyyymmdd],["yyyy_mm_hh_mm",e.DateFormatSelection.yyyy_mm_hh_mm],["yyyy_mm_dd_hh_mm",e.DateFormatSelection.yyyy_mm_dd_hh_mm],["yyyy_abbr_dd_hh_mm",e.DateFormatSelection.yyyy_abbr_dd_hh_mm],["yyyymmdd_hh_mm",e.DateFormatSelection.yyyymmdd_hh_mm]]);var u,S;e.ErrorType=void 0,(u=e.ErrorType||(e.ErrorType={}))[u.TEXT_ERROR=0]="TEXT_ERROR",u[u.RULE_ERROR=1]="RULE_ERROR",e.WhenToShowError=void 0,(S=e.WhenToShowError||(e.WhenToShowError={}))[S.IMMEDIATELY=0]="IMMEDIATELY",S[S.WHEN_BUTTON_CLICKED=1]="WHEN_BUTTON_CLICKED";const F={NamingConventionToApiV2(a){const{selectedRules:n,dateFormatSelection:t,consistentSeparatorSelection:o,data:i,subfolderOption:r}=a,m={};for(const a of n)switch(a){case e.NamingConventionType.upload_date:m.start_with_date=F.dateFormatToApiV2(t);break;case e.NamingConventionType.capitalize_all_initials:m.capitalize_all_initials={".tag":"capitalize_initials"};break;case e.NamingConventionType.consistent_separators:m.change_all_separators=F.consistentSeparatorToApiV2(o);break;case e.NamingConventionType.parent_folder_name:m.include_parent_folder_name={".tag":"prepend_parent_folder_name"};break;case e.NamingConventionType.keyword:m.end_with_keyword={".tag":"end_with_keyword"},i&&i.keyword&&(m.data||(m.data={}),m.data.keyword=i.keyword);break;default:throw new Error(`Invalid type for NamingConventionType selection! (value=${a})`)}return a.mlFilenameParsing&&(m.ml_filename={".tag":"ml_filename_parsing"}),r===e.FolderScopeOptions.THIS_FOLDER_AND_SUBFOLDERS?m.subfolder_option={".tag":"this_and_subfolders"}:m.subfolder_option={".tag":"this_folder_only"},m},NamingConventionsParametersToRuleStruct(a){const{componentList:n,capitalizeAllInitials:t,changeAllSeparators:o,data:i,subfolderOption:r}=a,m={component_list:[]},_=[];return n.forEach(((a,n)=>{switch(a){case e.NamingConventionType.upload_date:const t=i.dateInfo[n];_.push({".tag":"upload_date",ml_identification:t.mlFilenameParsing,date_format:F.dateFormatToApiV2(t.dateFormatSelection)});break;case e.NamingConventionType.parent_folder_name:_.push({".tag":"parent_folder_name",parent_folder_name:{".tag":"parent_folder_name"}});break;case e.NamingConventionType.keyword:_.push({".tag":"keyword",keyword:i.keywords[n]});break;case e.NamingConventionType.original_snippet:_.push({".tag":"original_snippet",original_snippet:{".tag":"original_snippet"}});break;case e.NamingConventionType.capture_date:const o=i.dateInfo[n];_.push({".tag":"metadata",metadata:{".tag":"capture_date",ml_identification:o.mlFilenameParsing,date_format:F.dateFormatToApiV2(o.dateFormatSelection)}});break;case e.NamingConventionType.camera_make:_.push({".tag":"metadata",metadata:{".tag":"camera_make"}});break;case e.NamingConventionType.camera_model:_.push({".tag":"metadata",metadata:{".tag":"camera_model"}});break;case e.NamingConventionType.dimensions:_.push({".tag":"metadata",metadata:{".tag":"dimensions"}});break;case e.NamingConventionType.dots_per_inch:_.push({".tag":"metadata",metadata:{".tag":"dots_per_inch"}});break;case e.NamingConventionType.dots_per_cm:_.push({".tag":"metadata",metadata:{".tag":"dots_per_cm"}});break;case e.NamingConventionType.lens_model:_.push({".tag":"metadata",metadata:{".tag":"lens_model"}});break;case e.NamingConventionType.sender_name:_.push({".tag":"sender_name",sender_name:{".tag":"sender_name"}});break;case e.NamingConventionType.none:break;default:throw new Error(`Invalid type for NamingConventionType selection! (value=${a})`)}})),t&&(m.capitalize_all_initials={".tag":"capitalize_all_initials"}),o&&(m.change_all_separators=F.consistentSeparatorToApiV2(i.consistentSeparatorSelection)),r===e.FolderScopeOptions.THIS_FOLDER_AND_SUBFOLDERS?m.subfolder_option={".tag":"this_and_subfolders"}:m.subfolder_option={".tag":"this_folder_only"},m.component_list=_,m},dateFormatToApiV2(a){switch(a){case e.DateFormatSelection.yyyy_mm:return{".tag":"yyyy_mm"};case e.DateFormatSelection.yyyy_mm_dd:return{".tag":"yyyy_mm_dd"};case e.DateFormatSelection.yyyy_abbr_dd:return{".tag":"yyyy_abbr_dd"};case e.DateFormatSelection.yyyymmdd:return{".tag":"yyyymmdd"};case e.DateFormatSelection.yyyy_mm_hh_mm:return{".tag":"yyyy_mm_hh_mm"};case e.DateFormatSelection.yyyy_mm_dd_hh_mm:return{".tag":"yyyy_mm_dd_hh_mm"};case e.DateFormatSelection.yyyy_abbr_dd_hh_mm:return{".tag":"yyyy_abbr_dd_hh_mm"};case e.DateFormatSelection.yyyymmdd_hh_mm:return{".tag":"yyyymmdd_hh_mm"};default:return{".tag":"other"}}},consistentSeparatorToApiV2(a){switch(a){case e.ConsistentSeparatorSelection.spaces:return{".tag":"spaces"};case e.ConsistentSeparatorSelection.underscores:return{".tag":"underscores"};case e.ConsistentSeparatorSelection.dashes:return{".tag":"dashes"};default:return{".tag":"other"}}},NamingConventionFromApiV2(a){const n={},t=[];if(a.start_with_date&&(t.push(e.NamingConventionType.upload_date),n.dateFormatSelection=F.dateFormatFromApiv2(a.start_with_date)),a.subfolder_option&&"this_and_subfolders"===a.subfolder_option[".tag"]?n.subfolderOption=e.FolderScopeOptions.THIS_FOLDER_AND_SUBFOLDERS:n.subfolderOption=e.FolderScopeOptions.THIS_FOLDER_ONLY,a.capitalize_all_initials&&"capitalize_initials"===a.capitalize_all_initials[".tag"]&&t.push(e.NamingConventionType.capitalize_all_initials),a.change_all_separators&&(t.push(e.NamingConventionType.consistent_separators),n.consistentSeparatorSelection=F.consistentSeparatorFromApiV2(a.change_all_separators)),a.include_parent_folder_name&&"prepend_parent_folder_name"===a.include_parent_folder_name[".tag"]&&t.push(e.NamingConventionType.parent_folder_name),n.mlFilenameParsing=!(!a.ml_filename||"ml_filename_parsing"!==a.ml_filename[".tag"]),a.end_with_keyword&&"end_with_keyword"===a.end_with_keyword[".tag"]&&(t.push(e.NamingConventionType.keyword),a.data&&a.data.keyword)){const e={keyword:a.data.keyword};n.data=e}return n.selectedRules=t,n},NamingConventionsParametersFromRuleStruct(a,n){const t=[],o={componentList:[],capitalizeAllInitials:!1,changeAllSeparators:!1,data:{dateInfo:[],consistentSeparatorSelection:e.ConsistentSeparatorSelection.spaces,keywords:[]},subfolderOption:e.FolderScopeOptions.THIS_FOLDER_ONLY};let i=o.data;return a.component_list.forEach(((a,n)=>{switch(i.dateInfo[n]={dateFormatSelection:e.DateFormatSelection.yyyy_mm_dd,mlFilenameParsing:!1},i.keywords[n]="",a[".tag"]){case"upload_date":t.push(e.NamingConventionType.upload_date),i.dateInfo[n]={dateFormatSelection:F.dateFormatFromApiv2(a.date_format),mlFilenameParsing:a.ml_identification};break;case"parent_folder_name":t.push(e.NamingConventionType.parent_folder_name);break;case"keyword":t.push(e.NamingConventionType.keyword),i.keywords[n]=a.keyword;break;case"original_snippet":t.push(e.NamingConventionType.original_snippet);break;case"metadata":const o=a.metadata;switch(o[".tag"]){case"capture_date":t.push(e.NamingConventionType.capture_date),i.dateInfo[n]={dateFormatSelection:F.dateFormatFromApiv2(o.date_format),mlFilenameParsing:o.ml_identification};break;case"camera_make":t.push(e.NamingConventionType.camera_make);break;case"camera_model":t.push(e.NamingConventionType.camera_model);break;case"dimensions":t.push(e.NamingConventionType.dimensions);break;case"dots_per_inch":t.push(e.NamingConventionType.dots_per_inch);break;case"dots_per_cm":t.push(e.NamingConventionType.dots_per_cm);break;case"lens_model":t.push(e.NamingConventionType.lens_model)}break;case"sender_name":t.push(e.NamingConventionType.sender_name)}})),o.capitalizeAllInitials=!(!a.capitalize_all_initials||"capitalize_all_initials"!==a.capitalize_all_initials[".tag"]),a.change_all_separators?(o.changeAllSeparators=!0,i=Object.assign(Object.assign({},i),{consistentSeparatorSelection:F.consistentSeparatorFromApiV2(a.change_all_separators)})):o.changeAllSeparators=!1,a.subfolder_option&&"this_and_subfolders"===a.subfolder_option[".tag"]?o.subfolderOption=e.FolderScopeOptions.THIS_FOLDER_AND_SUBFOLDERS:o.subfolderOption=e.FolderScopeOptions.THIS_FOLDER_ONLY,o.componentList=t,o.data=i,o},dateFormatFromApiv2(a){switch(a[".tag"]){case"yyyy_mm":return e.DateFormatSelection.yyyy_mm;case"yyyy_mm_dd":default:return e.DateFormatSelection.yyyy_mm_dd;case"yyyy_abbr_dd":return e.DateFormatSelection.yyyy_abbr_dd;case"yyyymmdd":return e.DateFormatSelection.yyyymmdd;case"yyyy_mm_hh_mm":return e.DateFormatSelection.yyyy_mm_hh_mm;case"yyyy_mm_dd_hh_mm":return e.DateFormatSelection.yyyy_mm_dd_hh_mm;case"yyyy_abbr_dd_hh_mm":return e.DateFormatSelection.yyyy_abbr_dd_hh_mm;case"yyyymmdd_hh_mm":return e.DateFormatSelection.yyyymmdd_hh_mm}},consistentSeparatorFromApiV2(a){switch(a[".tag"]){case"spaces":default:return e.ConsistentSeparatorSelection.spaces;case"underscores":return e.ConsistentSeparatorSelection.underscores;case"dashes":return e.ConsistentSeparatorSelection.dashes}}};e.NamingConventionAutomation="automation",e.NamingConventionConversions=F,e.NamingConventionML="ml",e.dateFormatStrToEnum=h,e.defaultNamingConventionParameters=m,e.defaultNamingConventionParameters2=s,e.defaultNamingConventionParameters2WithSenderNameRule=l,e.namingConventionsParametersEqual2=(e,n)=>a.isEqual(e.componentList,n.componentList)&&e.capitalizeAllInitials===n.capitalizeAllInitials&&e.changeAllSeparators===n.changeAllSeparators&&a.isEqual(e.data,n.data)&&e.subfolderOption===n.subfolderOption,e.ruleStrToEnum=g}));
//# sourceMappingURL=c_naming_conventions_utils.js-vfl0RZJaH.map
