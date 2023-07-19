define(["exports","./c_core_i18n"],(function(e,a){"use strict";var t,r;!function(e){e.APPLE="APPLE",e.GOOGLE="GOOGLE"}(t||(t={})),function(e){e[e.CONTACTS=0]="CONTACTS",e[e.PROFILE=1]="PROFILE",e[e.PHOTO=2]="PHOTO",e[e.EMAIL=3]="EMAIL",e[e.CALENDAR=4]="CALENDAR",e[e.DOCUMENTS=5]="DOCUMENTS",e[e.CHAT=6]="CHAT",e[e.READ_FILES=7]="READ_FILES",e[e.DIRECTORY_MEMBERS=8]="DIRECTORY_MEMBERS"}(r||(r={})),function(e){e.to_api_v2=function(a){switch(a){case e.CONTACTS:return{".tag":"contacts"};case e.PROFILE:return{".tag":"profile"};case e.PHOTO:return{".tag":"photo"};case e.EMAIL:return{".tag":"email"};case e.CALENDAR:return{".tag":"calendar"};case e.DOCUMENTS:return{".tag":"documents"};case e.CHAT:return{".tag":"chat"};case e.READ_FILES:return{".tag":"read_files"};case e.DIRECTORY_MEMBERS:return{".tag":"directory_members"};default:return{".tag":"other"}}}}(r||(r={}));const s={other:{action:null,permissions:"",landing_page_id:null,learn_more_page:null,img:"",friendly_name:"Other",order:Number.MAX_VALUE},apple:{action:null,permissions:"",landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/index/apple-logo-color.svg",friendly_name:"Apple",order:1},google:{action:"link_contacts",permissions:a.intl.formatMessage({id:"sN1hXL",defaultMessage:"Contacts"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/index/google-logo-color-vflpJqkMT.svg",friendly_name:"Google",order:3},outlook:{action:"link_contacts",permissions:a.intl.formatMessage({id:"Tgwos1",defaultMessage:"Calendar and Contacts"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/outlook_icon-vflzzt-G0.svg",friendly_name:"Outlook",order:4},slack:{action:"link_contacts",permissions:a.intl.formatMessage({id:"reDVDJ",defaultMessage:"Communication"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/slack_icon_transparent-vfljNpDIm.svg",friendly_name:"Slack",order:Number.MAX_VALUE},slack_dropbox:{action:"link_read_files",permissions:a.intl.formatMessage({id:"reDVDJ",defaultMessage:"Communication"}),landing_page_id:"dropbox_slack",learn_more_page:"https://www.dropbox.com/help/desktop-web/slack",img:"/static/metaserver/static/images/thirdparty/slack_icon_transparent-vfljNpDIm.svg",friendly_name:"Slack",order:5},zoom:{action:"link_contacts",permissions:a.intl.formatMessage({id:"reDVDJ",defaultMessage:"Communication"}),landing_page_id:"zoom",learn_more_page:"https://www.dropbox.com/help/desktop-web/zoom",img:"/static/metaserver/static/images/thirdparty/zoom_icon_squircle-vfl-znF5M.svg",friendly_name:"Zoom",order:8},zoom_app:{action:null,permissions:a.intl.formatMessage({id:"reDVDJ",defaultMessage:"Communication"}),landing_page_id:"zoom_app",learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/zoom_icon_squircle-vfl-znF5M.svg",friendly_name:"Dropbox Spaces app for Zoom",order:8},yahoo:{action:null,permissions:a.intl.formatMessage({id:"sN1hXL",defaultMessage:"Contacts"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/yahoo_icon-vflqXkWjv.svg",friendly_name:"Yahoo! Mail",order:7},yahoo_legacy:{action:null,permissions:a.intl.formatMessage({id:"sN1hXL",defaultMessage:"Contacts"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/yahoo_icon-vflqXkWjv.svg",friendly_name:"Yahoo! Mail",order:Number.MAX_VALUE},facebook_legacy:{action:null,permissions:a.intl.formatMessage({id:"sN1hXL",defaultMessage:"Contacts"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/facebook_icon-vflbyEm0k.svg",friendly_name:"Facebook",order:2},meta:{action:null,permissions:a.intl.formatMessage({id:"VlZABW",defaultMessage:"Publish"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/facebook_icon-vflbyEm0k.svg",friendly_name:"Meta",order:2},hellosign:{action:null,permissions:a.intl.formatMessage({id:"reDVDJ",defaultMessage:"Communication"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/thirdparty/dropbox_sign_icon-vflPcbrvF.svg",friendly_name:"Dropbox Sign",order:9},canvas:{action:"link_contacts",permissions:a.intl.formatMessage({id:"reDVDJ",defaultMessage:"Communication"}),landing_page_id:null,learn_more_page:"https://help.dropbox.com/installs-integrations/third-party/canvas",img:"/static/metaserver/static/images/thirdparty/canvas_icon.svg",friendly_name:"Canvas",order:10}},i={profile_card_v2:{google:{action:"link_calendar",permissions:a.intl.formatMessage({id:"Tgwos1",defaultMessage:"Calendar and Contacts"}),landing_page_id:null,learn_more_page:null,img:"/static/metaserver/static/images/index/google-logo-color-vflpJqkMT.svg",friendly_name:"Google",order:1}}},n={GOOGLE:"1",YAHOO:"2",FACEBOOK_LEGACY:"3",TWITTER:"4",YAHOO_LEGACY:"5",MOBILE:"6",OUTLOOK:"7",SLACK:"8",DOCUSIGN:"9",ZOOM:"10",SLACK_DROPBOX:"11",TRELLO:"12",APPLE:"13",HELLOSIGN:"14",CANVAS:"15",ZOOM_APP:"16",META:"17",NEVER_CONNECTED:0,WAS_CONNECTED:1,IS_CONNECTED:2,VARIOUS:"-1",NONE:"-2",services:()=>[n.GOOGLE,n.YAHOO,n.FACEBOOK_LEGACY,n.TWITTER,n.YAHOO_LEGACY,n.OUTLOOK,n.SLACK,n.DOCUSIGN,n.ZOOM,n.SLACK_DROPBOX,n.TRELLO,n.APPLE,n.HELLOSIGN,n.ZOOM_APP,n.META],get_gated_service_data(e,a){const t=e[".tag"];if(a&&a in i){const e=i[a];if(t in e)return e[t]}},get_service_data(e,a=null){const t=e[".tag"];if(a){const t=n.get_gated_service_data(e,a);if(t)return t}return t in s?s[t]:s.other},importable_contact_services:()=>[n.GOOGLE],to_img_legacy(e){switch(e){case n.GOOGLE:return["/static/metaserver/static/images/contacts/import_icon_google-vflSfFckp.png","/static/metaserver/static/images/contacts/import_icon_google@2x-vfla9_OFL.png"];case n.YAHOO:case n.YAHOO_LEGACY:return["/static/metaserver/static/images/contacts/import_icon_yahoo-vfl5E728M.png","/static/metaserver/static/images/contacts/import_icon_yahoo@2x-vflnVdi5R.png"];case n.FACEBOOK_LEGACY:return["/static/metaserver/static/images/contacts/import_icon_facebook-vfluFbt1j.png","/static/metaserver/static/images/contacts/import_icon_facebook@2x-vfl7Zk5rR.png"];case n.OUTLOOK:return["/static/metaserver/static/images/contacts/import_icon_outlook-vflF1_UKs.png","/static/metaserver/static/images/contacts/import_icon_outlook@2x-vflVjRgD3.png"];case n.SLACK:case n.SLACK_DROPBOX:return["/static/metaserver/static/images/thirdparty/slack_icon-vflKvKltK.svg","/static/metaserver/static/images/thirdparty/slack_icon-vflKvKltK.svg"];case n.ZOOM:case n.ZOOM_APP:return["/static/metaserver/static/images/thirdparty/zoom_icon-vflft17yG.svg","/static/metaserver/static/images/thirdparty/zoom_icon-vflft17yG.svg"];case n.TRELLO:return["/static/metaserver/static/images/thirdparty/trello_icon-vfl-FetdA.svg","/static/metaserver/static/images/thirdparty/trello_icon-vfl-FetdA.svg"];case n.HELLOSIGN:return["/static/metaserver/static/images/thirdparty/dropbox_sign_icon-vflPcbrvF.svg","/static/metaserver/static/images/thirdparty/dropbox_sign_icon-vflPcbrvF.svg"];case n.CANVAS:return["/static/metaserver/static/images/thirdparty/canvas_icon.svg","/static/metaserver/static/images/thirdparty/canvas_icon.svg"];case n.META:return["/static/metaserver/static/images/contacts/import_icon_facebook-vfluFbt1j.png","/static/metaserver/static/images/contacts/import_icon_facebook@2x-vfl7Zk5rR.png"];default:return["",""]}},to_name(e){if(e===n.VARIOUS)return a.intl.formatMessage({id:"hK3Vsp",defaultMessage:"Email"});{const a=n.to_api_service_type(e);return n.get_service_data(a).friendly_name}},logging_identifiers(e){switch(e){case n.GOOGLE:return"google";case n.YAHOO:return"yahoo";case n.FACEBOOK_LEGACY:return"facebook_legacy";case n.VARIOUS:return"email";case n.YAHOO_LEGACY:return"yahoo_legacy";case n.OUTLOOK:return a.intl.formatMessage({id:"DVWR1j",defaultMessage:"outlook"});case n.SLACK:return a.intl.formatMessage({id:"D/5sPh",defaultMessage:"slack"});case n.DOCUSIGN:return"docusign";case n.ZOOM:return"zoom";case n.ZOOM_APP:return"zoom_app";case n.SLACK_DROPBOX:return"slack_dropbox";case n.TRELLO:return"trello";case n.APPLE:return"apple";case n.HELLOSIGN:return"hellosign";case n.CANVAS:return"canvas";case n.META:return"meta";default:return"other"}},to_api_service_type(e){switch(e){case n.GOOGLE:return{".tag":"google"};case n.YAHOO:return{".tag":"yahoo"};case n.FACEBOOK_LEGACY:return{".tag":"facebook_legacy"};case n.OUTLOOK:return{".tag":"outlook"};case n.SLACK:return{".tag":"slack"};case n.ZOOM:return{".tag":"zoom"};case n.ZOOM_APP:return{".tag":"zoom_app"};case n.SLACK_DROPBOX:return{".tag":"slack_dropbox"};case n.TRELLO:return{".tag":"trello"};case n.APPLE:return{".tag":"apple"};case n.HELLOSIGN:return{".tag":"hellosign"};case n.CANVAS:return{".tag":"canvas"};case n.META:return{".tag":"meta"};default:return{".tag":"other"}}},from_api_service_type(e){switch(e[".tag"]){case"google":return n.GOOGLE;case"yahoo":return n.YAHOO;case"facebook_legacy":return n.FACEBOOK_LEGACY;case"outlook":return n.OUTLOOK;case"slack":return n.SLACK;case"zoom":return n.ZOOM;case"zoom_app":return n.ZOOM_APP;case"slack_dropbox":return n.SLACK_DROPBOX;case"trello":return n.TRELLO;case"apple":return n.APPLE;case"hellosign":return n.HELLOSIGN;case"canvas":return n.CANVAS;case"meta":return n.META}return n.VARIOUS},from_api_to_name:e=>n.to_name(n.from_api_service_type(e)),from_api_to_img:e=>n.get_service_data(e).img,oauth_window_dimensions(e){let a=600,t=600;return e===n.ZOOM?a=770:e===n.APPLE?a=700:e===n.CANVAS&&(a=700,t=500),{width:a,height:t}}};e.ProfileServicesConstants=n}));
//# sourceMappingURL=c_profile_services_profile_services_constants.js-vflzuIxU4.map
