define(["exports"],(function(e){"use strict";const s={policy_name:"requested_visibility",password:"password",public:"public",team_only:"team_only"};var i;e.LinkAudienceDisallowedReason=void 0,(i=e.LinkAudienceDisallowedReason||(e.LinkAudienceDisallowedReason={})).DeleteAndRecreate="delete_and_recreate",i.RestrictedBySharedFolder="restricted_by_shared_folder",i.RestrictedByTeam="restricted_by_team",i.UserAccountType="user_account_type",i.UserNotOnTeam="user_not_on_team",i.PermissionDenied="permission_denied";function r(e){return e.requested_visibility===s.password||e.require_password}function n(e){return e.audience_options.filter((e=>"password"===e.audience&&e.allowed)).length>0}function o(e){if(e.effective_audience)return e.effective_audience;switch(e.resolved_visibility){case"public":case"password":case"no_one":return e.resolved_visibility;case"team_only":return"team";case"team_and_password":return"password";case"shared_folder_only":case"only_you":return"no_one"}}const a={day_1:1,day_3:3,day_7:7,day_30:30,day_90:90,day_180:180,year_1:365};function t(e){return["public","password"].includes(e)}function d(e){return!!e.days_to_expire_policy&&"none"!==e.days_to_expire_policy}function l(e){return!!e.enforce_shared_link_password_policy&&"required"===e.enforce_shared_link_password_policy}function _(e){return d(e)&&!!e.change_shared_link_expiration_policy&&"not_allowed"===e.change_shared_link_expiration_policy}function u(e,s){return t(e.audience)&&(!e.expires&&_(s)||!r(s)&&l(s))}e.LINK_AUDIENCE={PUBLIC:"public",TEAM:"team",PASSWORD:"password",NO_ONE:"no_one"},e.ResolvedVisibilityPolicy={policy_name:"resolved_visibility",only_you:"only_you",password:"password",public:"public",shared_folder_only:"shared_folder_only",team_and_password:"team_and_password",team_only:"team_only",no_one:"no_one"},e.SharingSettingsUtil=e=>({getLinkPolicy:e=>({link_password:r(e.link_permissions)?void 0:"",expires:e.expires,allow_download:e.link_permissions.allow_download,audience:o(e.link_permissions),require_password:e.link_permissions.require_password}),getModifiedSettings:(s,i,r)=>{if(i===r)return;const n={},o=null!=s.expires&&null==i.expires;if(i.audience!==r.audience&&(n.audience=i.audience),i.allow_download!==r.allow_download&&(n.allow_download=i.allow_download),i.expires&&s.link_permissions.can_set_expiry&&(n.expires=i.expires.toISOString().split(".")[0]+"Z"),i.require_password!==r.require_password&&(n.require_password=i.require_password),"password"===i.audience||i.require_password)if(i.link_password)n.require_password=!0,n.link_password=i.link_password;else if(""===i.link_password)return{error:e.formatMessage({id:"wFrAfD",defaultMessage:"Password can’t be empty"})};return Object.keys(n).length<=0&&!o?void 0:{url:s.url,settings:n,remove_expiration:o}}}),e.canCreateLink=function(e,s,i,r,n,o,a,t,d,l,_,u){switch(e){case"editor":return i?o&&!r&&(!n||!!u):!r&&d;case"viewer":return!("writer"===l&&!_)&&(s?t:!r&&t||a);default:return!1}},e.canModifyExpire=function(e){const s=e.link_permissions;return Boolean(s.can_set_expiry)},e.canModifyPassword=function(e){return Boolean(e&&e.can_set_password)||n(e)},e.canToggleExpire=function(e){const s=e.link_permissions;return Boolean(null!=e.expires?s.can_remove_expiry:s.can_set_expiry)},e.canTogglePassword=function(e){return Boolean(e&&e.require_password?e.can_remove_password:e.can_set_password)||n(e)},e.daysAfterToday=e=>{const s=new Date;return s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0),((e,s,i,r,n,o)=>(null==s&&(s=0),null==i&&(i=0),null==r&&(r=0),null==n&&(n=0),null==o&&(o=0),e.setFullYear(e.getFullYear()+s),e.setMonth(e.getMonth()+i),e.setDate(e.getDate()+r),e.setHours(e.getHours()+n),e.setMinutes(e.getMinutes()+o),e))(s,0,0,e)},e.daysExpirationPolicyToNumber=a,e.getAudienceForLink=o,e.getLinkControlPolicyWarningText=function(e,s,i,r){let n="";if(u(e,i)){const e=_(i),s=l(i);n=r.formatMessage({id:"GoACO+",defaultMessage:"Your admin requires {requirements, select, 0 {an expiration and a password} 1 {a password} 2 {an expiration} other{}} for links shared outside the team. To change the link setting, delete the link and create it again."},{requirements:e&&s?0:s?1:2})}else s.display_expiration_warning?n=r.formatMessage({id:"ySRXj8",defaultMessage:"Your admin {show_password_text, select, true {requires a password and } other {}}has set an expiration for all links shared outside the team. This link will expire in {days_to_expire, plural, =365 {1 year} one {# day} other {# days}}.{expiration_enforced, select, true { You can change or remove this expiration.} other {}}"},{days_to_expire:a[i.days_to_expire_policy],expiration_enforced:"allowed"===i.change_shared_link_expiration_policy,show_password_text:!!s.display_password_warning}):s.display_password_warning&&(n=r.formatMessage({id:"lcVbzE",defaultMessage:"Your admin requires to set a password for links shared outside the team."}));return n},e.hasLinkPassword=r,e.isExpirationPolicyEnforcedByAdmin=_,e.isExpirationPolicySetByAdmin=d,e.isExternalAudience=t,e.isPasswordPolicyEnforcedByAdmin=l,e.isReadOnlyPolicy=u}));
//# sourceMappingURL=c_sharing_settings_utils_sharing_settings_util.js-vfl4CEuX6.map
