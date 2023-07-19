define(["exports","./c_file_viewer_sdk_file_viewer_file_viewer","./c_integrations_hellosign_deep_integration_launcher","./e_edison","./c_tslib","./c_apex-metrics_src_types","./c_lodash-es_lodash","./e_ui_page_files_router","metaserver/static/js/modules/constants/files_spa","./c_core_i18n","./e_core_exception","./c_core_exception_info","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/request","./c_src_sink_index","./c_core_browser_detection","metaserver/static/js/modules/core/langpack","metaserver/static/js/modules/constants/env","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","./c_core_xhr","./c_csrf","./c_browser_cookies","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/search","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings","./c_file_store_utils","./c_extensions_cloud_docs_compat","./c_integrations_data_selectors","./c_downloads","./c_share_download_ui_api","./c_portable_delete_snackbars","./c_action_bar_action_bar_strings","./c_portable_delete_strings","./c_file_actions_strings","./c_files_view_file_actions_snackbars","./c_action_plugins_open_in_action_hooks","./c_core_types_preview_type","./c_pap-events_enums_file_type-utils","./c_core_data_preview_key","./c_file_viewer_file_viewer_components","./c_core_data_utils","./c_core_logging_constants","./c_file_viewer_logging_performance","./c_file_viewer_file_extension_extension_constants","./c_src_simple-action-bar_action_bar_types","./c_api_v2_redux_files","./c_resize-observer-polyfill_dist_ResizeObserver","./c_truncate_index","./c_file_viewer_toolbar","./c_breadcrumb_index","./c_history","./c_ux_analytics_dispatch_custom_event","./c_file_viewer_sdk_file_viewer_experiments","metaserver/static/js/modules/constants/file_viewer_configuration","metaserver/static/js/modules/constants/file_viewer_feature_experiments","metaserver/static/js/modules/constants/file_viewer_flows_experiments","./c_auth_login_or_register_types","./c_form_row_index","./c_ui_tree_view","./c_icon_folder_icon","./c_sharing_ui_notifications_util","./c_src_utils_logging","./c_account_email_verify_reasons","./c_account_email","./c_ui_modal_dig","./c_ui_input_dig","./c_file_viewer_utils","./c_loggers_device_type","./c_common_logging_uxa","./c_share_modal_evolution_utils_logging","./c_dig-illustrations_spot_file-folders","./c_pass_store","./c_sharing_share_page_action_types","metaserver/static/js/modules/constants/python","./c_flux_base_store","./c_sharing_ui_util","./c_contacts_contact_token_state","./c_icon_icon_helper","./c_sharing_gating_util","./c_sharing_settings_utils_sharing_settings_util","./c_preview_audio_video_video_editing_utils","./c_components_approval-forms_url_utils","./c_capture_api","./c_pap-events_previews_rename_file","./c_pap-events_filesystem_item_actions_unstar_file","./c_pap-events_navigation_navigate_to_edit","./c_pap-events_previews_crop_rotate_select_rotate","./c_src_preview-photo-editor_types","./c_pap-events_previews_create_folder","./c_keymaster","./c_bug_reporting_routing","./c_clipboard_v3","metaserver/static/js/modules/constants/publish","./c_file_viewer_data_store","./c_previews_data_actions","./c_file_viewer_mobile_web","./c_capture_redux_selectors","./c_flows_flows_client","./c_docsend_src_utils","./c_components_approval-forms_approval_metadata","./c_contacts_data_v2","./c_contacts_bloodhound","metaserver/static/js/modules/constants/contacts","./c_profile_services_profile_services_link","./c_profile_services_profile_services_constants","metaserver/static/js/modules/constants/login_and_register","./c_flows_approval_approval_io_client","./c_typeahead_index","./c_src_common_format_bytes","./c_info_blade_content_metadata_image_metadata","./c_src_simple-action-bar_inline_action_bar","./c_src_highlighted-truncated-string_em-string","./c_extensions_split_share_button","./c_team_discovery_data_utils","./c_spectrum_avatar_avatar_initials","./c_spectrum_positioned_portal","./c_growth_ui_teams_web_actions_logger_events","./c_teams_let_members_invite_non_admin_invite_modal","./c_contacts_tokenizer_v2","./c_integrations_profile_card_tooltip","./c_src_text","./c_spectrum_colorized_icon","./c_icon_templates_stateless_index","./c_spectrum_svg_icon_bundle","./c_src_instrumentation_common_context","./c_src_instrumentation_constants","./c_src_instrumentation_function_wrapper","./c_preview_audio_video_video_editing_strings","./c_file_viewer_toolbar_v2_toolbar_holder","./c_campaigns_campaigns_element_id_enum","./c_flows_constants","./c_src_components_action-bar-strings","./c_integrations_hellosign_deep_integration_constants","./c_ui_hoc","./c_table_index","./c_spectrum_icon_form_index","./c_dropins_sdk_refactor_src_v2_entry","./c_base64"],(function(e,_,t,s,i,c,a,n,o,r,l,d,m,u,p,v,g,f,w,h,b,x,j,y,k,z,A,F,P,S,q,C,L,O,R,U,$,B,D,E,G,H,I,J,K,M,N,Q,T,V,W,X,Y,Z,ee,_e,te,se,ie,ce,ae,ne,oe,re,le,de,me,ue,pe,ve,ge,fe,we,he,be,xe,je,ye,ke,ze,Ae,Fe,Pe,Se,qe,Ce,Le,Oe,Re,Ue,$e,Be,De,Ee,Ge,He,Ie,Je,Ke,Me,Ne,Qe,Te,Ve,We,Xe,Ye,Ze,e_,__,t_,s_,i_,c_,a_,n_,o_,r_,l_,d_,m_,u_,p_,v_,g_,f_,w_,h_,b_,x_,j_,y_,k_,z_,A_,F_,P_,S_,q_,C_,L_,O_,R_,U_,$_,B_,D_,E_){"use strict";e.sendForSignatureAction=function({logUserAction:e,logContext:s,user:i,entryPoint:c,file:a}){const n=_=>{e(`send_for_signature_${_}`,s)},o=_=>{e("send_for_signature_failure",s,{reason:_})};if(n("click"),i)if(_.isSupportedFile(a))try{const e=t.getLauncher();e.init({entryPoint:c,file:a,user:i}),e.launch(),n("launched")}catch(e){o("launcher_error")}else o("invalid_file");else o("invalid_user")}}));
//# sourceMappingURL=c_action_plugins_send_for_signature_action_action.js-vfl-h_XXE.map
