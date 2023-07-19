define("metaserver/static/js/ccpa_iframe/api",["require","exports","metaserver/static/js/api_v2/noauth_client","metaserver/static/js/api_v2/user_client","metaserver/static/js/privacy_consent/stats","metaserver/static/js/clean/active_user","metaserver/static/js/ccpa_iframe/api_helpers"],(function(e,t,n,a,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.submitDNSSettings=t.resendEmail=t.CCPA_ACTION_SOURCE=void 0;const s=`Basic ${btoa("bvfyoawupclb746:6pv9whg6d9wh8xm")}`;(function(e){e.USER_INPUT="UI",e.COOKIE_AUTO="COOKIE_AUTO",e.GPC_UI="GPC_UI",e.GPC_AUTO="GPC_AUTO"})(t.CCPA_ACTION_SOURCE||(t.CCPA_ACTION_SOURCE={}));t.resendEmail=(e,t,l,c)=>{if(!e)return void t(!1,"");const d=(0,o.getActiveUser)(),m=(0,i.fillInLoggingContext)(l);if(r.PrivacyConsentStats.logCounter(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.RESEND_EMAIL,null)),(0,i.isSignedIn)()&&d){const e=(new a.UserApiV2Client).ns("ccpa"),n=(0,i.getUserEmailsFromViewer)();e.rpc("resend_dns_verification_email",{raw_email_addresses:n,logging_context:m},{subjectUserId:d.id}).then(e=>{if(t(e.success,""),!e.success)throw new Error("Resend email failed")}).catch(e=>{t(!1,""),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.RESEND_EMAIL_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),e)})}else if((0,i.shouldUseAppAuth)()){if(!c)return t(!1,""),void r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.RESEND_EMAIL_ERROR,r.CCPAEventErrorType.CSRF_TOKEN_ERROR),new Error("csrf token not found"));((e,t,n,a)=>{fetch("https://api.dropboxapi.com/2/ccpa/resend_dns_verification_email",{headers:{"content-type":"text/plain; charset=dropbox-cors-hack",authorization:s},method:"POST",body:JSON.stringify({raw_email_addresses:e,logging_context:a,csrf_token:t})}).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(n(e.success,""),!e.success)throw new Error("Resend email with app auth failed")}).catch(e=>{n(!1,""),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.RESEND_EMAIL_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),e)})})(e,c,t,m)}else{(new n.NoAuthApiV2Client).ns("ccpa").rpc("resend_dns_verification_email",{raw_email_addresses:e,logging_context:m},{}).then(e=>{if(t(e.success,""),!e.success)throw new Error("Resend email failed")}).catch(e=>{t(!1,""),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.RESEND_EMAIL_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),e)})}};t.submitDNSSettings=(e,t,n,a,o,s,d)=>{e?(r.PrivacyConsentStats.logCounter(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_IN,null)),l(t,n,a,o,s,d)):(r.PrivacyConsentStats.logCounter(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_OUT,null)),c(t,n,a,o,s,d))};const l=(e,t,l,c,d,m)=>{const p=(0,o.getActiveUser)(),g=(0,i.fillInLoggingContext)(l);if((0,i.isSignedIn)()&&p){(new a.UserApiV2Client).ns("ccpa").rpc("opt_in_dns",Object.assign({logging_context:g,ccpa_token:c},m),{subjectUserId:p.id}).then(t=>{if(e(t.success),!t.success)throw new Error("Opt in DNS failed")}).catch(t=>{e(!1),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_IN_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),t)})}else if((0,i.shouldUseAppAuth)()){if(!d)return e(!1),void r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_IN_ERROR,r.CCPAEventErrorType.CSRF_TOKEN_ERROR),new Error("csrf token not found"));((e,t,n,a,o,l)=>{fetch("https://api.dropboxapi.com/2/ccpa/opt_in_dns",{headers:{"content-type":"text/plain; charset=dropbox-cors-hack",authorization:s},method:"POST",body:JSON.stringify(Object.assign({raw_email_address:n,logging_context:a,ccpa_token:o,csrf_token:t},l))}).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(t=>{if(e(t.success),!t.success)throw new Error("Opt in DNS with app auth failed")}).catch(t=>{e(!1),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_IN_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),t)})})(e,d,t,g,c,m)}else{(new n.NoAuthApiV2Client).ns("ccpa").rpc("opt_in_dns",Object.assign({raw_email_address:t,logging_context:g,ccpa_token:c},m),{}).then(t=>{if(e(t.success),!t.success)throw new Error("Opt in DNS failed")}).catch(t=>{e(!1),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_IN_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),t)})}},c=(e,t,l,c,d,m)=>{const p=(0,o.getActiveUser)(),g=(0,i.fillInLoggingContext)(l);if((0,i.isSignedIn)()&&p){(new a.UserApiV2Client).ns("ccpa").rpc("opt_out_dns",Object.assign({logging_context:g,ccpa_token:c},m),{subjectUserId:p.id}).then(t=>{if(e(t.success),!t.success)throw new Error("Opt out DNS failed")}).catch(t=>{e(!1),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_OUT_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),t)})}else if((0,i.shouldUseAppAuth)()){if(!d)return e(!1),void r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_OUT_ERROR,r.CCPAEventErrorType.CSRF_TOKEN_ERROR),new Error("csrf token not found"));((e,t,n,a,o,l)=>{fetch("https://api.dropboxapi.com/2/ccpa/opt_out_dns",{headers:{"content-type":"text/plain; charset=dropbox-cors-hack",authorization:s},method:"POST",body:JSON.stringify(Object.assign({raw_email_address:n,logging_context:a,ccpa_token:o,csrf_token:t},l))}).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(t=>{if(e(t.success),!t.success)throw new Error("Opt out DNS with app auth failed")}).catch(t=>{e(!1),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_OUT_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),t)})})(e,d,t,g,c,m)}else{(new n.NoAuthApiV2Client).ns("ccpa").rpc("opt_out_dns",Object.assign({raw_email_address:t,logging_context:g,ccpa_token:c},m),{}).then(t=>{if(e(t.success),!t.success)throw new Error("Opt out DNS failed")}).catch(t=>{e(!1),r.PrivacyConsentStats.logError(r.PrivacyConsentAmpMetrics.EVENTS,(0,i.getLogTags)(r.CCPAEvent.DNS_OPT_OUT_ERROR,r.CCPAEventErrorType.UNSUCCESSFUL_RESPONSE),t)})}}})),define("metaserver/static/js/ccpa_iframe/api_helpers",["require","exports","tslib","metaserver/static/js/clean/viewer","metaserver/static/js/privacy_consent/stats","metaserver/static/js/modules/constants/page_load"],(function(e,t,n,a,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fillInLoggingContext=t.getLogTags=t.getUserEmailsFromViewer=t.shouldUseAppAuth=t.isSignedIn=void 0,o=n.__importStar(o);t.isSignedIn=()=>a.Viewer.get_viewer().is_signed_in;t.shouldUseAppAuth=()=>{let e=!0;try{""===Reflect.get(document.constructor.prototype,"cookie",document)&&(e=!1)}catch(t){e=!1}return!e};t.getUserEmailsFromViewer=()=>a.Viewer.get_viewer().get_users().map(e=>e.email);t.getLogTags=(e,n)=>({event_name:e,is_signed_in:(0,t.isSignedIn)()?r.CCPAUserStateTags.SIGNED_IN:r.CCPAUserStateTags.SIGNED_OUT,should_use_app_auth:(0,t.shouldUseAppAuth)()?r.CCPAUserStateTags.SHOULD_USE_APP_AUTH:r.CCPAUserStateTags.SHOULD_NOT_USE_APP_AUTH,error_type:null==n?"null":n});t.fillInLoggingContext=e=>{const t=e&&e.sessionId?e.sessionId:o.SESSION_ID;return{user_agent:null==e?void 0:e.userAgent,session_id:t,anon_ip:null==e?void 0:e.anonIp,locale_user_selected:null==e?void 0:e.localeUserSelected,locale_browser_header:null==e?void 0:e.localeBrowserHeader,country:null==e?void 0:e.country,ua_browser_name:null==e?void 0:e.uaBrowserName,ua_browser_version:null==e?void 0:e.uaBrowserVersion,ua_os_name:null==e?void 0:e.uaOsName,ua_os_version:null==e?void 0:e.uaOsVersion}}})),define("metaserver/static/js/ccpa_iframe/ccpa_preferences",["require","exports","tslib","metaserver/static/js/ccpa_iframe/dns_enrollment_state","metaserver/static/js/ccpa_iframe/dns_form","react","@dropbox/dig-icons","@dropbox/dig-components/banner","@dropbox/dig-icons/assets","@dropbox/dig-components/typography","metaserver/static/js/core/i18n","metaserver/static/js/ccpa_iframe/preferences_slider","metaserver/static/js/ccpa_iframe/preferences_category"],(function(e,t,n,a,r,o,i,s,l,c,d,m,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CCPAPreferences=t.CCPAPreferencesVariant=void 0,o=n.__importStar(o);const g=d.intl.formatMessage({id:"JFt8fI",defaultMessage:"Global Privacy Control enabled. Disable to modify cookie categories."}),u=d.intl.formatMessage({id:"B/scGc",defaultMessage:"Do not sell or share my information"}),E=d.intl.formatMessage({id:"/BLodS",defaultMessage:"Do not sell or share my personal information is now active. You may close this window."}),_=d.intl.formatMessage({id:"5g1q9D",defaultMessage:'You have successfully unenrolled in CCPA\'s "Do not sell or share my personal information". You may now close this window.'}),f=()=>o.createElement("div",null,o.createElement("span",{className:"gpc-info"},o.createElement(i.UIIcon,{className:"gpc-info-icon",src:l.InfoLine}),o.createElement("label",{id:"gpc-label",className:"gpc-label",htmlFor:"gpc"},g)));f.displayName="GPCInfo";const C=e=>{const t=d.intl.formatMessage({id:"brKQ8K",defaultMessage:'Do not sell or share my personal data to third-parties when I visit this website. Enabling this option will disable all cookies except for those classified as "strictly necessary". Visit our <button>Cookie FAQ page</button> for more information.'},{button:t=>o.createElement("button",{id:"cookie-faq-link",onClick:e.onCookieFAQLinkClick},t)});return o.createElement("div",{"data-uxa-log":"privacy_consent_detailed_view","data-uxa-interactions":"shown"},o.createElement(p.PreferencesCategory,{checked:e.checked,disabled:e.disabled,onChange:e.onChange,title:u,id:"dns",blurb:t,buttonLabel:"",onCookieFAQLinkClick:e.onCookieFAQLinkClick,titleClassName:"dns-label",descClassName:"dns-blurb",gdprCount:0}),e.children)};C.displayName="CCPAPreferencesWithGDPR";const b=e=>{const t=d.intl.formatMessage({id:"brKQ8K",defaultMessage:'Do not sell or share my personal data to third-parties when I visit this website. Enabling this option will disable all cookies except for those classified as "strictly necessary". Visit our <button>Cookie FAQ page</button> for more information.'},{button:t=>o.createElement("button",{id:"cookie-faq-link",onClick:e.onCookieFAQLinkClick,"data-uxa-log":"privacy_consent_detailed_view_ccpa_cookie_faq_link"},t)});return o.createElement("div",{className:"","data-uxa-log":"privacy_consent_detailed_view_ccpa_only","data-uxa-interactions":"shown"},o.createElement(i.UIIcon,{src:l.DropboxLine,size:"large"}),o.createElement(c.Title,{className:"dns-label"},u),o.createElement("div",{style:{display:"flex",marginBottom:"24px"}},o.createElement("label",{id:"dns-blurb",className:"dns-blurb",htmlFor:"dns",style:{marginRight:"40px"}},t),o.createElement(m.PreferencesSlider,{checked:e.checked,disabled:e.disabled,onChange:e.onChange,labelledby:"dns-label",describedby:"dns-blurb",id:"dns",name:"dns",gdprCount:0})),e.children)};var S;b.displayName="CCPAPreferencesCCPAOnly",(function(e){e[e.GDPR_EMBEDDED=0]="GDPR_EMBEDDED",e[e.CCPA_ONLY=1]="CCPA_ONLY"})(S=t.CCPAPreferencesVariant||(t.CCPAPreferencesVariant={}));t.CCPAPreferences=e=>{const t=o.createElement(r.DNSForm,{enrollmentState:e.enrollmentState,email:e.email,handleEmailChange:e.handleEmailChange,userEmails:e.userEmails,verifiedEmails:e.verifiedEmails,unverifiedEmails:e.unverifiedEmails});let n;n=e.displayVariant===S.GDPR_EMBEDDED?o.createElement(C,{checked:e.checked,disabled:e.disabled,onChange:e.onChange,onCookieFAQLinkClick:e.onCookieFAQLinkClick},t):o.createElement(b,{checked:e.checked,disabled:e.disabled,onChange:e.onChange,onCookieFAQLinkClick:e.onCookieFAQLinkClick},t);const i=e.enrollmentState===a.DNSEnrollmentState.EnrollmentPendingEmailVerificationSent||e.enrollmentState===a.DNSEnrollmentState.EnrollmentPendingAccountVerificationSent;return o.createElement(o.Fragment,null,e.gpcEnabled&&o.createElement(f,null),n,e.isFlowComplete&&o.createElement(s.Banner,{type:"attention"},o.createElement(s.Banner.Message,null,i?E:_)))},t.CCPAPreferences.displayName="CCPAPreferences"})),define("metaserver/static/js/ccpa_iframe/consent_banner",["require","exports","tslib","react","styled-components","metaserver/static/js/core/i18n"],(function(e,t,n,a,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConsentBanner=t.BannerComponentIDs=void 0,a=n.__importStar(a),r=n.__importDefault(r),t.BannerComponentIDs={bannerContainer:"ccpa_consent_banner",acceptAllCookiesButton:"accept_all_cookies_button",declineCookiesButton:"decline_cookies_button"};t.ConsentBanner=e=>{const n=o.intl.formatMessage({id:"Z0ME6Q",defaultMessage:"We use cookies to provide, improve, protect and promote our services. Visit our <privacy>Privacy Policy</privacy> and <faq>Privacy Policy FAQs</faq> to learn more. You can manage your personal preferences, including your ‘Do not sell or share my personal data to third parties’ setting in our <tool>Cookie Consent Tool</tool>."},{privacy:t=>a.createElement("button",{id:"privacy-page-link",onClick:e.onPrivacyPageLinkClick,"data-uxa-log":"privacy_consent_banner_privacy_page_link"},t),faq:t=>a.createElement("button",{id:"privacy-policy-faq-link",onClick:e.onPrivacyPolicyFaqLinkClick,"data-uxa-log":"privacy_consent_banner_privacy_policy_faq_link"},t),tool:t=>a.createElement("button",{id:"manage-consent-cookies-link",onClick:e.onSettingsClick,"data-uxa-log":"privacy_consent_banner_detailed_view_link"},t)});return a.createElement(a.Fragment,null,a.createElement(m,{id:t.BannerComponentIDs.bannerContainer,"data-uxa-log":"privacy_consent_banner","data-uxa-interactions":"shown"},a.createElement(p,null,n),a.createElement(g,Object.assign({},e,{id:t.BannerComponentIDs.declineCookiesButton,onClick:n=>{e.onClick(t.BannerComponentIDs.declineCookiesButton)},"data-uxa-log":"privacy_consent_banner_decline_all_button"}),i),a.createElement(u,Object.assign({},e,{id:t.BannerComponentIDs.acceptAllCookiesButton,onClick:n=>{e.onClick(t.BannerComponentIDs.acceptAllCookiesButton)},"data-uxa-log":"privacy_consent_banner_accept_all_button"}),s)))},t.ConsentBanner.displayName="ConsentBanner";const i=o.intl.formatMessage({id:"TrrEUN",defaultMessage:"Decline"}),s=o.intl.formatMessage({id:"OyAa/t",defaultMessage:"Accept All"}),l=r.default.div`
  width: auto;
  display: flex;
  flex: 1 1 0%;
  background: rgb(247, 245, 242);
  font-size: 14px;
  color: rgb(51, 51, 51);
  padding: 24px;
  z-index: 10001;
  box-sizing: border-box;
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 10px;
  text-size-adjust: 100%;
  visibility: visible;

  @media (max-width: 601px) {
    flex-direction: column;
    padding: 0px 24px;
  }
`,c=r.default.div`
  width: auto;
  display: flex;
  flex: 1 1 0%;
  background: rgb(247, 245, 242);
  font-size: 14px;
  color: rgb(51, 51, 51);
  padding: 24px;
  z-index: 10001;
  box-sizing: border-box;
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 10px;
  text-size-adjust: 100%;
  visibility: visible;
  top: 0px;

  @media (max-width: 601px) {
    flex-direction: column;
    padding: 0px 24px;
  }
`,d=navigator.userAgent.toLowerCase(),m=d.includes("iphone")||d.includes("ipod")?c:l,p=r.default.div`
  margin-right: 48px;
  color: rgb(30, 25, 25);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  width: 100%;
  align-self: center;

  @media (max-width: 601px) {
    padding: 24px 0px;
    margin-right: 0px;
  }
`,g=r.default.button`
  display: flex;
  flex-flow: column nowrap;
  flex-shrink: 0;
  justify-content: center;
  align-self: center;
  border: 1px solid rgb(30, 25, 25);
  background: rgb(247, 245, 242);
  color: rgb(30, 25, 25);
  padding: 9px 20px;
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  order: 2;
  &:hover {
    background-color: var(--color_primary--light) !important;
    border: 1px solid var(--color_primary--light) !important;
    color: #fff !important;
  }
  @media (max-width: 601px) {
    width: 100%;
    margin: 5px;
    align-items: center;
  }
`,u=r.default.button`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  border: 1px solid rgb(30, 25, 25);
  color: rgb(250, 250, 250);
  background: rgb(30, 25, 25);
  padding: 9px 20px;
  cursor: pointer;
  margin: 0px 0px 0px 16px;
  font-size: 16px;
  line-height: 26px;
  order: 3;
  &:hover {
    background-color: var(--color_primary--light) !important;
    border: 1px solid var(--color_primary--light) !important;
    color: #fff !important;
  }
  @media (max-width: 601px) {
    width: 100%;
    margin: 5px;
    align-items: center;
  }
`})),define("metaserver/static/js/ccpa_iframe/dns_cookie",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildDNSCookie=t.clearDNSCookie=t.saveDNSCookie=t.readDNSCookie=t.DEFAULT_DNS_DURATION_MONTHS=void 0;t.DEFAULT_DNS_DURATION_MONTHS=12;const n="dropbox.com".split(".").length-1;t.readDNSCookie=()=>{const e=document.cookie.split(";").map(e=>e.trim()).map(e=>e.split("=")).filter(([e,t])=>"__Secure-dbx_do_not_sell"===e);if(!e||e.length<1||e[0].length<2)return;const t=e[0][1];return JSON.parse(t)};t.saveDNSCookie=e=>{const t={"__Secure-dbx_do_not_sell":JSON.stringify(e).replace(/[;]|[^ -~]/g,e=>"\\u"+(65536+e.charCodeAt(0)).toString(16).substr(1)),domain:"dropbox.com",path:"/",expires:new Date(e.expireDate).toUTCString(),samesite:"lax",secure:""},n=Object.keys(t).map(e=>t[e]?`${e}=${t[e]}`:`${e}`);document.cookie=n.join(";")};t.clearDNSCookie=()=>{const e={"__Secure-dbx_do_not_sell":"",domain:"dropbox.com",path:"/",expires:(new Date).toUTCString(),samesite:"lax",secure:""},t=Object.keys(e).map(t=>void 0!==e[t]?`${t}=${e[t]}`:`${t}`);document.cookie=t.join(";")};t.buildDNSCookie=()=>{const e=new Date;return e.setMonth(e.getMonth()+t.DEFAULT_DNS_DURATION_MONTHS),{numDots:n,expireDate:e.toISOString(),optInToDNS:!0}}})),define("metaserver/static/js/ccpa_iframe/dns_enrollment_state",["require","exports"],(function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.isFlowComplete=t.areSettingsSaved=t.shouldUnenrollLocally=t.shouldEnrollLocally=t.isGPCUserResetState=t.isUnenrollmentPendingUIConfirmation=t.isEnrollmentPendingUIConfirmation=t.isEnrollmentSelected=t.DNSEnrollmentState=void 0,(function(e){e.NotEnrolled="NOT_ENROLLED",e.EnrollmentPendingEmailConfirmation="ENROLLMENT_PENDING_EMAIL_CONFIRMATION",e.EnrollmentPendingAccountConfirmation="ENROLLMENT_PENDING_ACCOUNT_CONFIRMATION",e.EnrolledEmail="ENROLLED_EMAIL",e.EnrolledAccount="ENROLLED_ACCOUNT",e.UnenrollmentPendingEmailUIConfirmation="UNENROLLMENT_PENDING_EMAIL_UI_CONFIRMATION",e.UnenrollmentPendingAccountUIConfirmation="UNENROLLMENT_PENDING_ACCOUNT_UI_CONFIRMATION",e.EnrollmentPendingEmailUIConfirmation="ENROLLMENT_PENDING_EMAIL_UI_CONFIRMATION",e.EnrollmentPendingAccountUIConfirmation="ENROLLMENT_PENDING_ACCOUNT_UI_CONFIRMATION",e.EnrollmentPendingEmailVerificationSent="ENROLLMENT_PENDING_EMAIL_VERIFICATION_SENT",e.EnrollmentPendingAccountVerificationSent="ENROLLMENT_PENDING_ACCOUNT_VERIFICATION_SENT"})(n=t.DNSEnrollmentState||(t.DNSEnrollmentState={}));t.isEnrollmentSelected=e=>e===n.EnrollmentPendingEmailVerificationSent||e===n.EnrollmentPendingAccountVerificationSent||e===n.EnrollmentPendingEmailUIConfirmation||e===n.EnrollmentPendingAccountUIConfirmation||e===n.EnrollmentPendingEmailConfirmation||e===n.EnrollmentPendingAccountConfirmation||e===n.EnrolledEmail||e===n.EnrolledAccount;t.isEnrollmentPendingUIConfirmation=e=>e===n.EnrollmentPendingEmailUIConfirmation||e===n.EnrollmentPendingAccountUIConfirmation;t.isUnenrollmentPendingUIConfirmation=e=>e===n.UnenrollmentPendingEmailUIConfirmation||e===n.UnenrollmentPendingAccountUIConfirmation;t.isGPCUserResetState=(e,t)=>t&&e===n.NotEnrolled;t.shouldEnrollLocally=e=>e===n.EnrolledAccount||e===n.EnrollmentPendingAccountConfirmation;t.shouldUnenrollLocally=e=>e===n.NotEnrolled;t.areSettingsSaved=e=>!(e===n.EnrollmentPendingAccountUIConfirmation||e===n.EnrollmentPendingEmailUIConfirmation||e===n.UnenrollmentPendingAccountUIConfirmation||e===n.UnenrollmentPendingEmailUIConfirmation||e===n.EnrollmentPendingEmailVerificationSent||e===n.EnrollmentPendingAccountVerificationSent);t.isFlowComplete=(e,t)=>e!==n.NotEnrolled&&t===n.NotEnrolled||(t===n.EnrollmentPendingEmailVerificationSent||t===n.EnrollmentPendingAccountVerificationSent)})),define("metaserver/static/js/ccpa_iframe/dns_form",["require","exports","tslib","react","metaserver/static/js/ccpa_iframe/dns_enrollment_state","metaserver/static/js/ccpa_iframe/api","@dropbox/dig-icons","@dropbox/dig-icons/assets","metaserver/static/js/core/notify","metaserver/static/js/core/i18n"],(function(e,t,n,a,r,o,i,s,l,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DNSForm=void 0,a=n.__importDefault(a);const d=()=>c.intl.formatMessage({id:"zd0szP",defaultMessage:"You must confirm your email address to save your preferences. We will send you an email from no-reply@dropbox.com. Open the email and click Confirm Email Address to complete your preference submission."}),m=c.intl.formatMessage({id:"oQWTes",defaultMessage:"Please Confirm Email:"}),p=c.intl.formatMessage({id:"D09GlF",defaultMessage:"Resend"}),g=e=>{const{emails:t}=e;return a.default.createElement("p",{className:"email-confirm-msg"},m," ",t," ",a.default.createElement("button",{id:"email-resend",className:"email-resend",onClick:e=>(0,o.resendEmail)(t,u)},p),"?")};g.displayName="EmailConfirmMessage";const u=e=>{e?l.Notify.success(c.intl.formatMessage({id:"b+akES",defaultMessage:"Success! Email will be sent shortly."})):l.Notify.error(c.intl.formatMessage({id:"6w278K",defaultMessage:"Something went wrong! Try again later."}))},E=e=>{const{enrollmentState:t,userEmails:n,verifiedEmails:l,unverifiedEmails:g}=e,E=!(0,r.areSettingsSaved)(t),_=new Set([...n||[],...l||[],...g||[]]),f=Array.from(_).join(", ");let C;return E||(C=null==g?void 0:g.join(", ")),a.default.createElement("div",null,f&&a.default.createElement("div",null,a.default.createElement("p",{className:"settings-saved-text"},(e=>{const t=c.intl.formatMessage({id:"bnEYxL",defaultMessage:"Settings are saved for the following accounts:"}),n=c.intl.formatMessage({id:"OibIHY",defaultMessage:"Settings will be saved for the following accounts:"});return e?t:n})(!E)),a.default.createElement("div",{className:"dns-emails"},f)),C&&a.default.createElement("div",{className:"unverified-emails"},a.default.createElement(i.UIIcon,{src:s.WarningLine}),a.default.createElement("span",null,m," ",a.default.createElement("span",{className:"weight-500"},C)," ",a.default.createElement("button",{id:"email-resend",className:"email-resend",onClick:e=>(0,o.resendEmail)(g,u)},p))),(0,r.isEnrollmentPendingUIConfirmation)(t)&&a.default.createElement("p",{className:"email-verification-text"},d()))};E.displayName="EnrollmentDetails";const _=e=>{const{email:t,handleEmailChange:n,enrollmentState:o}=e,i=c.intl.formatMessage({id:"XtxsF7",defaultMessage:"Settings are saved for"}),s=!(0,r.areSettingsSaved)(o);return a.default.createElement("div",null,a.default.createElement("label",{className:"dns-email-label",htmlFor:"dns-email"},i),a.default.createElement("input",{type:"text",id:"dns-email",name:"dns-email",className:"dns-email",value:t,onChange:e=>{n(e.target.value)},placeholder:"example@dropbox.com"}),s&&a.default.createElement("p",{className:"email-verification-text"},d()))};_.displayName="EmailInputForm";t.DNSForm=e=>{const{enrollmentState:t,userEmails:n,verifiedEmails:o,unverifiedEmails:i,email:s,handleEmailChange:l}=e;return t===r.DNSEnrollmentState.EnrolledAccount||t===r.DNSEnrollmentState.EnrolledEmail||t===r.DNSEnrollmentState.EnrollmentPendingAccountVerificationSent||t===r.DNSEnrollmentState.EnrollmentPendingAccountConfirmation||t===r.DNSEnrollmentState.EnrollmentPendingAccountUIConfirmation||t===r.DNSEnrollmentState.UnenrollmentPendingAccountUIConfirmation||t===r.DNSEnrollmentState.UnenrollmentPendingEmailUIConfirmation?a.default.createElement(E,{userEmails:n,verifiedEmails:o,unverifiedEmails:i,enrollmentState:t}):t===r.DNSEnrollmentState.EnrollmentPendingEmailVerificationSent||t===r.DNSEnrollmentState.EnrollmentPendingEmailUIConfirmation?a.default.createElement(_,{enrollmentState:t,email:s,handleEmailChange:l}):t===r.DNSEnrollmentState.EnrollmentPendingEmailConfirmation?a.default.createElement(g,{emails:i}):null},t.DNSForm.displayName="DNSForm"})),define("metaserver/static/js/ccpa_iframe/gdpr_preferences",["require","exports","tslib","react","metaserver/static/js/core/i18n","metaserver/static/js/ccpa_iframe/preferences_category","metaserver/static/js/privacy_consent/i18n"],(function(e,t,n,a,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GDPRPreferences=t.GDPRCategories=void 0,a=n.__importStar(a),t.GDPRCategories={allCategories:"all_categories",generalMarketing:"general_marketing_and_advertising",socialMedia:"social_media_marketing",analytics:"analytics",performanceFunctionality:"performance_and_functionality"};t.GDPRPreferences=e=>a.createElement(a.Fragment,null,a.createElement(o.PreferencesCategory,Object.assign({},e,{checked:e.allGdprToggle,disabled:e.disabled,onChange:e.onChange,title:r.intl.formatMessage(i.CATEGORY),id:t.GDPRCategories.allCategories,blurb:"",buttonLabel:(0,i.CATEGORY_DETAILS)(r.intl,e.gdprCount),titleClassName:"prefdiag-categoryheader",descClassName:"prefdiag-categorydesc"})),a.createElement(o.PreferencesCategory,Object.assign({},e,{checked:e.strictlyToggle,disabled:!0,onChange:e.onChange,title:r.intl.formatMessage(i.STRICTLY_NECESSARY_TITLE),id:"",blurb:r.intl.formatMessage(i.STRICTLY_NECESSARY_DETAILS),buttonLabel:"",titleClassName:"prefdiag-header",descClassName:"prefdiag-categorydesc"})),a.createElement(o.PreferencesCategory,Object.assign({},e,{checked:e.generalToggle,disabled:e.disabled,onChange:e.onChange,title:r.intl.formatMessage(i.GENERAL_MARKETING_AND_ADVERTISING_TITLE),id:t.GDPRCategories.generalMarketing,blurb:r.intl.formatMessage(i.GENERAL_MARKETING_AND_ADVERTISING_DETAILS),buttonLabel:"",titleClassName:"prefdiag-header",descClassName:"prefdiag-categorydesc"})),a.createElement(o.PreferencesCategory,Object.assign({},e,{checked:e.socialToggle,disabled:e.disabled,onChange:e.onChange,title:r.intl.formatMessage(i.SOCIAL_MEDIA_ADVERTISING_TITLE),id:t.GDPRCategories.socialMedia,blurb:r.intl.formatMessage(i.SOCIAL_MEDIA_ADVERTISING_DETAILS),buttonLabel:"",titleClassName:"prefdiag-header",descClassName:"prefdiag-categorydesc"})),a.createElement(o.PreferencesCategory,Object.assign({},e,{checked:e.analyticsToggle,disabled:e.disabled,onChange:e.onChange,title:r.intl.formatMessage(i.SOCIAL_ANALYTICS_TITLE),id:t.GDPRCategories.analytics,blurb:r.intl.formatMessage(i.SOCIAL_ANALYTICS_DETAILS),buttonLabel:"",titleClassName:"prefdiag-header",descClassName:"prefdiag-categorydesc"})),a.createElement(o.PreferencesCategory,Object.assign({},e,{checked:e.performanceToggle,disabled:e.disabled,onChange:e.onChange,title:r.intl.formatMessage(i.PERFORMANCE_AND_FUNCTIONALITY_TITLE),id:t.GDPRCategories.performanceFunctionality,blurb:r.intl.formatMessage(i.PERFORMANCE_AND_FUNCTIONALITY_DETAIL),buttonLabel:"",titleClassName:"prefdiag-header",descClassName:"prefdiag-categorydesc"}))),t.GDPRPreferences.displayName="GDPRPreferences"})),define("metaserver/static/js/ccpa_iframe/preferences_button",["require","exports","tslib","react","styled-components"],(function(e,t,n,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreferencesButton=void 0,a=n.__importStar(a),r=n.__importDefault(r);const o={default:"rgb(247, 245, 242)",hover:"#0061ff"},i={default:"rgb(30, 25, 25)",hover:"#0061ff"},s=r.default.button`
  background-color: ${e=>o.default};
  color: black;
  padding: 9px 20px;
  border-radius: 1px;
  outline: 0;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 150ms;
  font-size: 18px;
  border: 1px solid rgb(0, 0, 0);
  line-height: 26px;
  flex-direction: column;
  font-weight: 500px;
  display: inline-block;
  &:hover {
    background-color: ${e=>o.hover};
    color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`,l=r.default.button`
  background-color: ${e=>i.default};
  color: white;
  padding: 9px 20px;
  border-radius: 1px;
  outline: 0;
  text-transform: capitalize;
  margin-left: 16px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 150ms;
  font-size: 18px;
  border: 1px solid rgb(0, 0, 0);
  line-height: 26px;
  flex-direction: column;
  font-weight: 500px;
  display: inline-block;
  &:hover:enabled {
    background-color: ${e=>i.hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.25;
  }
`;t.PreferencesButton=e=>a.createElement("div",{className:"button-footer"},a.createElement(s,{disabled:!1,onClick:()=>e.onChange(!1),id:"consent-detailed-view-cancel-button","data-uxa-log":"privacy_consent_detailed_view_cancel_button"},e.declineButtonText),a.createElement(l,{disabled:e.disabled,onClick:()=>e.onChange(!0),id:"consent-detailed-view-save-button","data-uxa-log":"consent-detailed-view-save-button"},e.acceptButtonText)),t.PreferencesButton.displayName="PreferencesButton"})),define("metaserver/static/js/ccpa_iframe/preferences_category",["require","exports","tslib","react","metaserver/static/js/ccpa_iframe/preferences_slider","classnames"],(function(e,t,n,a,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreferencesCategory=void 0,a=n.__importStar(a),o=n.__importDefault(o);t.PreferencesCategory=e=>a.createElement("div",{className:i},a.createElement("label",{id:e.id+"-label",className:e.titleClassName,htmlFor:e.id},e.title,a.createElement(r.PreferencesSlider,Object.assign({},e,{labelledby:e.id+"-label",describedby:e.id+"-blurb",name:e.id,onChange:e.onChange}))),a.createElement("p",{id:e.id+"-toggle-label",className:"prc-tp-cat-all-toggle-label"},e.buttonLabel),a.createElement("p",{id:e.id+"-blurb",className:e.descClassName},e.blurb)),t.PreferencesCategory.displayName="PreferencesCategory";const i=(0,o.default)({"border-top":!0,"dns-pref":!0})})),define("metaserver/static/js/ccpa_iframe/preferences_slider",["require","exports","tslib","react","classnames"],(function(e,t,n,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PreferencesSlider=void 0,a=n.__importStar(a),r=n.__importDefault(r);t.PreferencesSlider=e=>{const t=(0,r.default)({"evidon-switch-slider":!0,slideron:e.checked,disabled:e.disabled});return a.createElement("label",{className:"evidon-switch",style:{flexShrink:0,alignSelf:"flex-start"},"aria-checked":e.checked,"aria-labelledby":e.labelledby,"aria-describedby":e.describedby,"data-uxa-log":"privacy_consent_toggle_"+e.id+"_"+!e.checked},a.createElement("input",{type:"checkbox",id:e.id,name:e.name,"aria-labelledby":e.labelledby,"aria-describedby":e.describedby,"aria-checked":e.checked,checked:e.checked,disabled:e.disabled,onChange:t=>{e.onChange(t.target.checked,e.id,e.gdprCount)}}),a.createElement("div",{className:t}))},t.PreferencesSlider.displayName="PreferencesSlider"})),define("metaserver/static/js/ccpa_iframe/reentry_popout",["require","exports","tslib","react","styled-components","metaserver/static/js/core/i18n"],(function(e,t,n,a,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CcpaReentryPopout=t.PopoutButtonIDs=void 0,a=n.__importStar(a),r=n.__importDefault(r),t.PopoutButtonIDs={reentryButton:"ccpa-reentry-popout-button",collapseToggle:"ccpa-reentry-popout-toggle",container:"ccpa-reentry-popout-container"};t.CcpaReentryPopout=e=>a.createElement(a.Fragment,null,a.createElement(c,{id:t.PopoutButtonIDs.container,"data-uxa-log":"privacy_consent_reentry_button","data-uxa-interactions":"shown"},!e.isCollapsed&&a.createElement(a.Fragment,null,a.createElement(s,Object.assign({},e,{id:t.PopoutButtonIDs.reentryButton,onClick:()=>{e.onClick(t.PopoutButtonIDs.reentryButton)},"data-uxa-log":"privacy_consent_reentry_button_into_detailed_view"}),i)),a.createElement(l,{id:t.PopoutButtonIDs.collapseToggle,onClick:()=>{e.onClick(t.PopoutButtonIDs.collapseToggle)},"data-uxa-log":e.isCollapsed?"privacy_consent_reentry_button_expand":"privacy_consent_reentry_button_collapse"},e.isCollapsed?a.createElement(a.Fragment,null," 🍪 "):a.createElement(a.Fragment,null," « ")))),t.CcpaReentryPopout.displayName="CcpaReentryPopout";const i=o.intl.formatMessage({id:"43UMTR",defaultMessage:"Cookies & CCPA preferences"}),s=r.default.button`
  padding: 12px 9px;
  cursor: pointer;
  text-decoration: none;
  background: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 16px;
  color: rgb(102, 102, 102);
  border-top: 1px solid rgba(166, 158, 146, 0.6);
  border-right: 1px solid rgba(166, 158, 146, 0.6);
  border-bottom: 1px solid rgba(166, 158, 146, 0.6);
  border-image: initial;
  border-left: none;
  margin: 0px 0px 16px;
  white-space: nowrap;
  display: inline-block;
  visibility: visible;
`,l=r.default.button`
  padding: 12px 5px;
  cursor: pointer;
  text-decoration: none;
  background: rgb(255, 255, 255);
  font-size: 12px;
  line-height: 16px;
  color: rgb(102, 102, 102);
  border-top: 1px solid rgba(166, 158, 146, 0.6);
  border-right: 1px solid rgba(166, 158, 146, 0.6);
  border-bottom: 1px solid rgba(166, 158, 146, 0.6);
  border-image: initial;
  border-left: none;
  margin: 0px 0px 16px;
  white-space: nowrap;
  display: inline-block;
  visibility: visible;
`,c=r.default.div`
  display: inline-block;
  float: bottom;
  position: fixed;
  bottom: 0;
`}));
//# sourceMappingURL=pkg-privacy-consent.min.js-vflgIv3G-.map