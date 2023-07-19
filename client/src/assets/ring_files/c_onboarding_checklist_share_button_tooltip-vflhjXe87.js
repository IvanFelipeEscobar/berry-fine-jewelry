define(["exports","./e_edison","./e_ui_page_files_router","./c_onboarding_checklist_messages","./c_core_i18n","./c_onboarding_checklist_constants","./c_onboarding_checklist","./c_tslib","./c_apex-metrics_src_types","./c_lodash-es_lodash","metaserver/static/js/modules/constants/files_spa","./e_core_exception","./c_core_exception_info","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","metaserver/static/js/modules/constants/env","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","./c_core_xhr","./c_csrf","./c_browser_cookies","./c_src_sink_index","./c_core_browser_detection","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/search","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings","metaserver/static/js/modules/core/langpack"],(function(e,t,s,o,a,n,c,r,i,l,_,m,u,d,g,h,T,v,p,O,S,j,f,B,E,b,R,k,x,C,N,$,A,I,w,L){"use strict";const D=({triggerRef:e})=>{const r=s.useAppDispatch(),i=s.useSelector(s.shouldShowShareButtonTooltip),[l,_]=t.React$1.useState(i),[m,u]=t.React$1.useState("bottom");t.React$1.useEffect((()=>{i&&_(!0)}),[i]),t.React$1.useEffect((()=>{l&&(r(s.activationActions.setShouldShowShareButtonTooltip({shouldShowShareButtonTooltip:!1})),s.OALogger.logToTeamsWeb(s.OnboardingChecklistEvents.ONBOARDING_CHECKLIST_SHARE_BUTTON_TOOLTIP_SHOWN,{location:location}))}),[l]);return t.React$1.createElement(s.Tooltip.Control,{variant:"rich",open:l,triggerRef:e,placement:m,onChangePlacement:u,openDelay:n.TOOLTIP_OPEN_DELAY,auto:!0},t.React$1.createElement(s.Title,{size:"standard",inverse:!0},a.intl.formatMessage(o.shareButtonTooltipTitleText)),t.React$1.createElement(s.Text,{tagName:"p",color:"standard",inverse:!0},a.intl.formatMessage(o.shareButtonTooltipBodyText)),t.React$1.createElement("div",{className:c.classes.shareButtonContainer},t.React$1.createElement(s.Button$1,{variant:"outline",inverse:!0,onClick:()=>{_(!1),s.OALogger.logToTeamsWeb(s.OnboardingChecklistEvents.ONBOARDING_CHECKLIST_SHARE_BUTTON_TOOLTIP_DISMISSED,{location:location})},autoFocus:!0},a.intl.formatMessage(o.shareButtonTooltipButtonText))))};D.displayName="OnboardingChecklistShareButtonTooltip",e.OnboardingChecklistShareButtonTooltip=D}));
//# sourceMappingURL=c_onboarding_checklist_share_button_tooltip.js-vfl6aonup.map
