define(["exports","./e_ui_page_files_router"],(function(e,s){"use strict";class r extends s.ApiV2ClientBase{constructor(e){super(e)}_headers(e){const r=s.Viewer.get_viewer().get_user_by_id(e.subjectUserId);return Object.assign({[s.ApiV2HeaderNames.DropboxUid]:String(r.id)},e.headers)}}e.TeamApiV2Client=r}));
//# sourceMappingURL=c_api_v2_team_client.js-vflOkUNtd.map
