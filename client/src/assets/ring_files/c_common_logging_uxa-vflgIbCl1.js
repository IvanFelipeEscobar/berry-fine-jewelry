define(["exports","./e_ui_page_files_router"],(function(_,E){"use strict";var e,R;function i(_){const E=document.createElement("button");E.setAttribute("data-uxa-log",_),document.body.appendChild(E),E.style.visibility="hidden";const e=new MouseEvent("mousedown",{view:window,bubbles:!0,cancelable:!0});E.dispatchEvent(e),document.body.removeChild(E)}function I(_,e){e?E.dispatchDialogOpened({element_id:_}):E.dispatchDialogClosed({element_id:_})}_.RegistrationSource=void 0,(e=_.RegistrationSource||(_.RegistrationSource={})).WEB_REGISTER="web",e.CHOOSER_REGISTER="chooser_generic",e.CLIENT_REGISTER="client",e.SHARE_REGISTER="share",e.FB_SHARE_REGISTER="fb_share",e.REFERRAL_REGISTER="referral",e.API_REGISTER="api",e.IPHONE_REGISTER="iphone",e.TEAM_REGISTER="team",e.TEAM_SSO_REGISTER="team_sso",e.TEAM_CREATION_REGISTER="team_creation",e.TEAM_BILLING_CONTACT_REGISTER="team_billing_contact",e.API_OAUTH_REGISTER="oauth",e.IPAD_REGISTER="ipad",e.ANDROID_REGISTER="android",e.ANDROID_PDFVIEWER_REGISTER="android_pdfviewer",e.BLACKBERRY_REGISTER="blackberry",e.WINDOWS_PHONE_TAB_REGISTER="windows_phone_tablet",e.SHMODEL_MODAL_REGISTER="shmodel_modal_register",e.SHMODEL_DOWNLOAD_REGISTER="shmodel_download_register",e.SHMODEL_SAVE_TO_REGISTER="shmodel_save_to_register",e.SHMODEL_SAVE_AS_REGISTER="shmodel_save_as_register",e.COMMENTS_SHMODEL_MODAL_REGISTER="comments_shmodel_modal_register",e.FILE_TRANSFER_MODAL_REGISTER="file_transfer_modal_register",e.FB_ADS_REGISTER="fb_ads_register",e.IDM_REGISTER="idm",e.PROVISIONING_API_REGISTER="provisioning_api_register",e.INDEX_PAGE_WEB_REGISTER="index_web",e.CAROUSEL_IPHONE_REGISTER="carousel_iphone",e.CAROUSEL_ANDROID_REGISTER="carousel_android",e.CAROUSEL_IPAD_REGISTER="carousel_ipad",e.PHOTOS_WEBAPP_REGISTER="carousel_web",e.MAILBOX_IPHONE_REGISTER="mailbox_iphone",e.MAILBOX_ANDROID_REGISTER="mailbox_android",e.MAILBOX_IPAD_REGISTER="mailbox_ipad",e.PARTNERSHIP_REGISTER="partnership",e.PRO_BUY_REGISTER="pro_buy_register",e.PRO_REDEEM_REGISTER="pro_redeem_register",e.SCRIPT_REGISTER="script_register",e.API_THIRDPARTY_REGISTER="api_thirdparty",e.RESELLER_REGISTER="reseller_register",e.SHARED_CONTENT_LINK_REGISTER="shared_content_link_register",e.OUTLOOK_ADDIN="outlook_addin",e.ZOOM_REGISTER="zoom_register",e.INVITE_LINK="invite_link",e.MOBILEWEB_REGISTER_PAGE="mobileweb_register_page",e.MOBILEWEB_LOGIN_PAGE="mobileweb_login_page",e.LOGIN_PAGE_REGISTER="login_page",e.REGISTER_PAGE_REGISTER="register_page",e.CLI_LINK_REGISTER="cli_link_nonce",e.FAMILY_INVITE="family_invite",e.SPACES_LANDING="spaces_landing",e.BUSINESS_SPACE_HIDDEN_USER="business_space_hidden",e.GOOGLE_ONE_TAP="google_one_tap",e.SIGN_UP_WITH_GOOGLE="sign_up_with_google",e.LOGIN_PAGE_GOOGLE_ONE_TAP="login_page_google_one_tap",e.LOGIN_PAGE_SIGNUP_WITH_GOOGLE="login_page_sign_up_with_google",e.LOGIN_PAGE_EMAIL="login_page_email",e.REGISTER_PAGE_GOOGLE_ONE_TAP="register_page_google_one_tap",e.REGISTER_PAGE_SIGN_UP_WITH_GOOGLE="register_page_sign_up_with_google",e.REGISTER_PAGE_EMAIL="register_page_email",e.HOMEPAGE_GOOGLE_ONE_TAP="homepage_google_one_tap",e.SHARED_FOLDER_MOUNT_REGISTER="shared_folder_mount_register",e.SHARED_FOLDER_COPY_REGISTER="shared_folder_copy_register",e.SHARED_FOLDER_DOWNLOAD_REGISTER="shared_folder_download_register",e.SHARED_FOLDER_BANNER_REGISTER="shared_folder_banner_register",e.SHARED_FOLDER_UPLOAD_REGISTER="shared_folder_upload_register",e.TEAM_JOIN_WITH_OTHER_EMAIL_SIGN_UP="team_join_with_other_email_sign_up",_.AuthType=void 0,(R=_.AuthType||(_.AuthType={})).CREDENTIALS="email",R.GOOGLE="google_auth",R.GOOGLE_ONE_TAP="google_one_tap",R.APPLE="apple_auth";const o=new Set(["form_error","user_exists","access_denied","tfa_required","sso_required","emails_do_not_match_redirect"]),S=new Set(["/scl/fi/","/scl/fo/","/s/","/sh/","/transfer/","/family/join/","/referrals/","/sc/","/request/"]),r=new Set(["enable_twofactor_required","emails_do_not_match","emails_do_not_match_redirect","not_verified","email_not_verified","google_login_not_allowed","access_denied","disabled_account","tos_required","sso_required","tfa_required","requires_password","requires_twofactor","tos_required","invalid_token","missing_email","unsupported_platform","unverified_email","server_error","disabled_user","user_already_invited_to_team","no_email_in_response","requires_password_on_first_link","apple_login_not_allowed","apple_login_not_allowed_for_teams","user_cancelled_authorize"]);var s,t,a,A,O,n,L;!function(_){_.SIA_LOGIN_START="sia_login_start",_.SIA_LOGIN_SUCCEEDED="sia_login_succeeded",_.SIA_LOGIN_REQUIRES_TWO_FACTOR="sia_login_requires_two_factor",_.SIA_LOGIN_REQUIRES_PASSWORD="sia_login_requires_password",_.SIA_LOGIN_FAILED="sia_login_failed"}(s||(s={})),function(_){_.EMAIL_LOGIN_START="email_login_start",_.EMAIL_SPLIT_SIGNUP_CONTINUE="email_split_signup_continue",_.EMAIL_LOGIN_SUCCEEDED="email_login_succeeded",_.EMAIL_LOGIN_REQUIRES_TWO_FACTOR="email_login_requires_two_factor",_.EMAIL_LOGIN_REDIRECT="email_login_redirect",_.EMAIL_LOGIN_FAILED="email_login_failed",_.EMAIL_SIGNUP_START="email_signup_start",_.EMAIL_SIGNUP_SUCCEEDED="email_signup_succeeded",_.EMAIL_SIGNUP_FAILED="email_signup_failed",_.EMAIL_2FA_VWC_START="email_2fa_vwc_start",_.EMAIL_2FA_VWC_SUCCESS="email_2fa_vwc_success",_.EMAIL_2FA_VWC_SUBMISSION="email_2fa_vwc_submit",_.EMAIL_2FA_VWC_ERROR="email_2fa_vwc_error",_.EMAIL_2FA_VWC_SUCCESS_CREDENTIALS_ERROR="email_2fa_vwc_success_credentials_error"}(t||(t={})),function(_){_.ENTER_EMAIL_CONTINUE="enter_email_continue",_.ENTER_EMAIL_CONTINUE_SSO="enter_email_continue_sso",_.LOGIN_SSO_USER="login_sso_user",_.ENTER_EMAIL="enter_email",_.REGISTER_ENTER_ACCOUNT_DETAILS="register_enter_account_details",_.LOGIN_ENTER_PASSWORD="login_enter_password",_.EMAIL_SUBMITTED_WITH_PASSWORD_AUTOFILL="email_submitted_with_password_autofill"}(a||(a={})),function(_){_.LOGIN_CLICK="LOGIN_CLICK",_.LOGIN_IMMEDIATE_SUCCESS="LOGIN_IMMEDIATE_SUCCESS",_.GOOGLE_LOGIN_CLICK="GOOGLE_LOGIN_CLICK",_.GOOGLE_LOGIN_SUCCESS="GOOGLE_LOGIN_SUCCESS",_.APPLE_LOGIN_CLICK="APPLE_LOGIN_CLICK",_.APPLE_LOGIN_SUCCESS="APPLE_LOGIN_SUCCESS"}(A||(A={})),_.LoginStep=void 0,(O=_.LoginStep||(_.LoginStep={}))[O.CREDENTIALS_OR_SSO=0]="CREDENTIALS_OR_SSO",O[O.EMAIL_2FA=1]="EMAIL_2FA",O[O.PHONE_2FA=2]="PHONE_2FA",O[O.AUTHENTICATOR_2FA=3]="AUTHENTICATOR_2FA",O[O.SECKEY_2FA=4]="SECKEY_2FA",function(_){_.ROLE_WORK="work",_.ROLE_PERSONAL="personal",_.ROLE_PHOTOS="photos",_.ROLE_BOTH="both"}(n||(n={})),_.LoginResponseStatus=void 0,(L=_.LoginResponseStatus||(_.LoginResponseStatus={})).DEVICE_LIMIT="DEVICE_LIMIT",L.OK="OK",L.SSO="SSO",L.TWOFACTOR="TWOFACTOR",L.TWOFACTOR_REQUIRED="TWOFACTOR_REQUIRED",L.RATELIMIT="RATELIMIT",L.PASSWORD_EXPIRED="PASSWORD_EXPIRED",L.EXPIRED="EXPIRED",L.ERROR="ERROR",L.REQUIRES_ROLE="REQUIRES_ROLE",L.INVALID_CREDENTIALS="INVALID_CREDENTIALS",L.PASSWORD_DECRYPTION_ERROR="PASSWORD_DECRYPTION_ERROR",L.TOS_SIGNATURE_REQUIRED="TOS_SIGNATURE_REQUIRED";const T={logLoginStart(){i(s.SIA_LOGIN_START)},logLoginResponse(_){_.success?I(s.SIA_LOGIN_SUCCEEDED,!0):"tfa_required"===_.err_msg?I(s.SIA_LOGIN_REQUIRES_TWO_FACTOR,!0):"requires_password_on_first_link"===_.err_msg?I(s.SIA_LOGIN_REQUIRES_PASSWORD,!0):I(s.SIA_LOGIN_FAILED,!0)}},l={logLoginStart(){i(t.EMAIL_LOGIN_START)},logLoginResponse(E){switch(E.status){case _.LoginResponseStatus.OK:I(t.EMAIL_LOGIN_SUCCEEDED,!0);break;case _.LoginResponseStatus.TWOFACTOR:I(t.EMAIL_LOGIN_REQUIRES_TWO_FACTOR,!0);break;case _.LoginResponseStatus.TWOFACTOR_REQUIRED:case _.LoginResponseStatus.TOS_SIGNATURE_REQUIRED:case _.LoginResponseStatus.EXPIRED:case _.LoginResponseStatus.SSO:I(t.EMAIL_LOGIN_REDIRECT,!0);break;default:I(t.EMAIL_LOGIN_FAILED,!0)}},logLoginError(){I(t.EMAIL_LOGIN_FAILED,!0)},logSignupStart(){i(t.EMAIL_SIGNUP_START)},logSignupResponse(){I(t.EMAIL_SIGNUP_SUCCEEDED,!0)},logSignupError(){I(t.EMAIL_SIGNUP_FAILED,!0)},logEmailVerifyWithCodeStart(){I(t.EMAIL_2FA_VWC_START,!0)},logEmailVerifyWithCodeSuccess(){I(t.EMAIL_2FA_VWC_SUCCESS,!0)},logEmailVerifyWithCodeSubmission(){I(t.EMAIL_2FA_VWC_SUBMISSION,!0)},logEmailVerifyWithCodeError(){I(t.EMAIL_2FA_VWC_ERROR,!0)},logEmailVerifyWithCodeSuccessCredentialsError(){I(t.EMAIL_2FA_VWC_SUCCESS_CREDENTIALS_ERROR,!0)}},g={logEnterEmailContinue(){i(a.ENTER_EMAIL_CONTINUE)},logEnterEmailContinueSSO(){i(a.ENTER_EMAIL_CONTINUE_SSO)},logEmailRecognizedAsSSO(){I(a.LOGIN_SSO_USER,!0)},logEnterEmail(){I(a.ENTER_EMAIL,!0)},logRegisterEnterAccountDetails(){I(a.REGISTER_ENTER_ACCOUNT_DETAILS,!0)},logLoginEnterPassword(){I(a.LOGIN_ENTER_PASSWORD,!0)},logEmailSubmittedWithPasswordAutofill(){I(a.EMAIL_SUBMITTED_WITH_PASSWORD_AUTOFILL,!0)}},G={logDeviceIdWithSource(_,e){E.dispatchDialogOpened({element_id:_,device_id:e||"not_available"})}};_.AppleUXALogger=T,_.EmailAuthUXALogger=l,_.SUSIUXAEventLogger=G,_.SusiUXALogger=g,_.knownHashPaths=S,_.signupErrorTags=o,_.thirdPartyLoginErrorTags=r}));
//# sourceMappingURL=c_common_logging_uxa.js-vflBeBxXe.map
