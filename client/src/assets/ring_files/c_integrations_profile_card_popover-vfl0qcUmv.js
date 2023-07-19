define(["exports","./c_tslib","./e_edison","./e_ui_page_files_router","./c_integrations_profile_card_tooltip","./c_avatar_initials_avatar","./c_integrations_data_selectors","./c_core_i18n"],(function(e,t,r,a,o,i,s,n){"use strict";const p="tooltip_click_for_more",l="tooltip_click_for_more_auto_display";class c extends r.React$1.Component{constructor(){super(...arguments),this.logger=a.createIntegrationsActionsLogger(),this.onAvatarClick=e=>{const{integrationStore:t,dismissPrompts:r,onAvatarClick:o}=this.props,i=[p,l].filter((e=>!a.isPromptDismissed(t.getState(),e))).map((e=>({".tag":e})));i.length>0&&r(i),o&&o(e)}}getAvatarColor(){const{avatarInfo:e}=this.props;return"joined_member"===e.avatarType||"invited_person"===e.avatarType?i.colorValueForAvatarName(e.targetUser.displayName):"group"===e.avatarType?i.colorValueForAvatarName(e.targetGroup.groupName):"#3F464C"}getInitials(){const{avatarInfo:e}=this.props;return"joined_member"===e.avatarType||"invited_person"===e.avatarType?a.getInitials(e.targetUser.displayName):"group"===e.avatarType?a.getInitials(e.targetGroup.groupName):""}buildUpsell(){var e;const{avatarInfo:t}=this.props;let i="";switch(t.avatarType){case"shared_link":i=t.targetLink.message;break;case"group":i=t.targetGroup.message;break;case"joined_member":case"invited_person":i=t.targetUser.accessType;break;case"overflow":i=t.overflowInfo.message}if("shared_link"===t.avatarType||"overflow"===t.avatarType)return r.React$1.createElement(a.Provider,{store:this.props.integrationStore},r.React$1.createElement(o.OverflowTooltipContent,{overflowMessage:i}));let s="";switch(t.avatarType){case"group":s=t.targetGroup.groupName;break;case"joined_member":case"invited_person":s=t.targetUser.displayName}return r.React$1.createElement(a.Provider,{store:this.props.integrationStore},r.React$1.createElement(o.StatefulProfileCardTooltipContent,{displayName:s,seenState:i,avatarColor:null!==(e=this.props.avatarColor)&&void 0!==e?e:this.getAvatarColor(),intl:n.intl}))}buildProfileCard(){const e=this.props,{avatarInfo:i,seenState:s=""}=e,p=t.__rest(e,["avatarInfo","seenState"]);if("shared_link"===i.avatarType||"overflow"===i.avatarType)return this.buildUpsell();let l,c,g="",v="",d="dbx_user";switch(i.avatarType){case"group":const{targetGroup:e}=i;g=e.gid,v=e.groupName,d="group";break;case"joined_member":case"invited_person":const{targetUser:t}=i;g=t.accountId,v=t.displayName,t.isViewer?d="viewer":"invited_person"===i.avatarType&&(d="unverified_email"),l=t.email,c=t.photoUrl}const m=this.props.logEvent||this.logger.logEvent;return r.React$1.createElement(a.Provider,{store:this.props.integrationStore},r.React$1.createElement(o.StatefulProfileCardWithWrapper,Object.assign({targetUser:{account_id:g,display_name:v,type:d,email:l},intl:n.intl,seenState:s,avatarColor:this.getAvatarColor(),isActive:!0,initials:this.getInitials(),photoUrl:c,platform:"web",openDropboxUrl:a.open_tab,openExternalUrl:a.unsafe_open_tab,openEmailLink:o.composeEmail,notify:o.notify,logEvent:m,reportError:a.webReportError},p)))}render(){return r.React$1.createElement(this.props.popoverGroup.popover,{ref:this.props.popoverRef,upsellContent:this.buildUpsell(),profileCard:this.buildProfileCard(),positioning:this.props.positioning||"below_left",upsellPositioning:this.props.upsellPositioning||"below",positionOffset:10,onClickTrigger:this.onAvatarClick,isShowInitially:this.props.isShowInitially,portalParentElement:this.props.portalParentElement,autoRePosition:this.props.autoRePosition},r.React$1.Children.only(this.props.children))}}c.displayName="ProfileCardPopoverComponent";const g=a.createSelector([e=>a.getStateAtNamespace(e,a.INTEGRATIONS_NAMESPACE_KEY)],(e=>e));const v=a.connect((e=>({listServices:g(e).listServices,landingPagesEnabled:s.isConnectServiceLandingPagesEnabled(e),featureGates:{}})),(function(e){return{dismissPrompts:t=>{a.wrapDispatch(e)(a.dismissPrompts(t))},fetchListServices:()=>{e(a.fetchListServices())}}}))(c);e.ProfileCardPopover=v}));
//# sourceMappingURL=c_integrations_profile_card_popover.js-vflqHD6nD.map
