define(["exports","./e_ui_page_files_router","./e_edison","./c_core_i18n","./c_react_query_api_helpers_queries_search_experiments","./c_react_query_api_helpers_queries_people_suggestion","./c_react_query_api_helpers_queries_result_suggestions","./c_src_sink_index","./c_apex-metrics_src_types","metaserver/static/js/modules/constants/search","./e_core_exception","./c_core_exception_info","metaserver/static/js/modules/constants/files_spa","./c_tslib","metaserver/static/js/modules/constants/env","./c_lodash-es_lodash","metaserver/static/js/modules/constants/viewer","metaserver/static/js/modules/constants/auth","metaserver/static/js/modules/constants/request","./c_core_xhr","./c_csrf","./c_browser_cookies","metaserver/static/js/modules/constants/page_load","metaserver/static/js/modules/constants/time","metaserver/static/js/modules/constants/ajax_strings","./c_core_notify","metaserver/static/js/modules/constants/locales","./c_core_browser_detection","metaserver/static/js/modules/constants/webtiming","metaserver/static/js/modules/constants/campaigns_orchestration","metaserver/static/js/modules/constants/maestro_nav_strings","metaserver/static/js/modules/constants/trademark","metaserver/static/js/modules/constants/web_experience_constants","metaserver/static/js/modules/constants/sharing","metaserver/static/js/modules/constants/undo_strings","metaserver/static/js/modules/core/langpack","./c_icon_folder_icon","./c_contacts_bloodhound","metaserver/static/js/modules/constants/contacts"],(function(e,s,t,o,g,i,n,u,r,a,S,l,d,c,h,p,m,y,_,L,I,R,E,D,w,T,O,f,Q,v,P,N,C,q,A,G,j,b,F){"use strict";const M=e=>(((e,o,g,i,n)=>{const[a,d]=t.reactExports.useState(performance.now()),[c,h]=t.reactExports.useState(void 0);t.reactExports.useEffect((()=>{d(performance.now()),h(void 0)}),[e]);const[p,m]=t.reactExports.useState(void 0),y=t.reactExports.useCallback((e=>{u.getMetricsReporter().createStats({ns:"component_visually_complete",name:"web/search_input_validation"}).recordDuration(e,r.TimeUnit.MILLISECONDS)}),[]);t.React$1.useEffect((()=>{if(!c)return;const e=setTimeout((()=>{c<a?S.reportStack("Start time should not be greater than end time.",{severity:l.SEVERITY.NONCRITICAL}):m(c)}),500);return()=>{clearTimeout(e)}}),[c,a]),t.reactExports.useEffect((()=>{o!==s.PeopleSuggestionsLoadingState.LOADING&&g!==s.TagsSuggestionsLoadingState.LOADING&&i!==s.QuerySuggestionsLoadingState.LOADING&&n!==s.ResultSuggestionsLoadingState.LOADING&&h(performance.now())}),[o,g,i,n]),t.reactExports.useEffect((()=>{p&&(y(p-a),h(void 0),m(void 0))}),[p,a,y])})(e.apiCommonFields.query,e.peopleSuggestionsLoadingState,e.tagsSuggestionsLoadingState,e.querySuggestionsLoadingState,e.resultSuggestionsLoadingState),t.React$1.createElement(x,Object.assign({},e)));class x extends t.React$1.PureComponent{constructor(){super(...arguments),this.dismissSuggestions=()=>{this.props.dismissAllSuggestions({query:this.props.normalizedQuery,isTaggingEnabled:s.isTaggingEnabled(this.props.manualTaggingVariant)}),this.props.setHighlightedRow({index:void 0}),this.props.onFocusInput&&this.props.onFocusInput()},this.handleSuggestionClick=(e,t)=>{if(this.isInZeroStateDropdown()&&this.props.onSearchEnter&&!s.isPreviewableSuggestion(e)&&this.props.onSearchEnter(),s.isQuerySuggestion(e))s.logQuerySuggestionClicked(t,this.props.querySuggestions,s.SuggestionSource.SUGGESTIONS_DROPDOWN),this.props.setQuery({query:e.query,alwaysTriggerSearch:!0});else if(s.isTagsSuggestion(e)){s.logTagSuggestionsClicked(t,this.props.tagsSuggestions,void 0,s.SuggestionSource.SUGGESTIONS_DROPDOWN);const o=s.updateQueryWithTagsSuggestion(this.props.normalizedQuery,e.tag);this.props.setQuery({query:o,alwaysTriggerSearch:!0})}else if(s.isResultSuggestion(e)){if(this.props.resultSuggestionsForSearchArgs&&this.props.idToResultSuggestions){const t=this.props.idToResultSuggestions.get(e.resultId);t&&this.props.onResultSuggestionClick({result:t,resultList:s.immutableExports.List(this.props.resultSuggestionsForSearchArgs),requestId:this.props.resultSuggestionsRequestId})}}else s.isRecentItemSuggestion(e)?this.props.onRecentItemSuggestionClick({url:e.url}):(s.logPeopleFilterClicked(t,this.props.peopleSuggestions.length,void 0,s.SuggestionSource.SUGGESTIONS_DROPDOWN),this.props.setFilteredAccountId({filteredAccountId:e.id}),this.props.setQuery({query:"",alwaysTriggerSearch:!0}));s.isPreviewableSuggestion(e)||this.dismissSuggestions()}}componentDidMount(){var e,t;this.shouldLogQuerySuggestionsShown()&&s.logQuerySuggestionsDisplayed(this.props.querySuggestions,s.SuggestionSource.SUGGESTIONS_DROPDOWN),this.shouldLogPeopleSuggestionsShown()&&s.logPeopleFilterShown(this.props.peopleSuggestions.length,s.SuggestionSource.SUGGESTIONS_DROPDOWN),this.shouldLogTagsSuggestionsShown()&&s.logTagSuggestionsDisplayed(this.props.tagsSuggestions,s.SuggestionSource.SUGGESTIONS_DROPDOWN),this.shouldLogResultSuggestionsShown()&&s.logResultSuggestionsDisplayed(s.SuggestionSource.SUGGESTIONS_DROPDOWN,null!==(t=null===(e=this.props.resultSuggestionsForSearchArgs)||void 0===e?void 0:e.length)&&void 0!==t?t:0,this.props.resultSuggestionsRequestId)}componentDidUpdate(e){var t,o;!this.shouldLogQuerySuggestionsShown()||this.shouldLogQuerySuggestionsShown(e)&&this.props.normalizedQuery===e.normalizedQuery||s.logQuerySuggestionsDisplayed(this.props.querySuggestions,s.SuggestionSource.SUGGESTIONS_DROPDOWN),!this.shouldLogPeopleSuggestionsShown()||this.shouldLogPeopleSuggestionsShown(e)&&this.props.normalizedQuery===e.normalizedQuery||s.logPeopleFilterShown(this.props.peopleSuggestions.length,s.SuggestionSource.SUGGESTIONS_DROPDOWN),!this.shouldLogTagsSuggestionsShown()||this.shouldLogTagsSuggestionsShown(e)&&this.props.normalizedQuery===e.normalizedQuery||s.logTagSuggestionsDisplayed(this.props.tagsSuggestions,s.SuggestionSource.SUGGESTIONS_DROPDOWN),!this.shouldLogResultSuggestionsShown()||this.shouldLogResultSuggestionsShown(e)&&this.props.normalizedQuery===e.normalizedQuery||s.logResultSuggestionsDisplayed(s.SuggestionSource.SUGGESTIONS_DROPDOWN,null!==(o=null===(t=this.props.resultSuggestionsForSearchArgs)||void 0===t?void 0:t.length)&&void 0!==o?o:0,this.props.resultSuggestionsRequestId)}shouldLogQuerySuggestionsShown(e=this.props){return e.querySuggestionsLoadingState===s.QuerySuggestionsLoadingState.LOADED&&this.shouldShowQuerySuggestions(e)}shouldLogPeopleSuggestionsShown(e=this.props){return e.peopleSuggestionsLoadingState===s.PeopleSuggestionsLoadingState.LOADED&&this.shouldShowPeopleSuggestions(e)}shouldShowQuerySuggestions({normalizedQuery:e,querySuggestions:s}=this.props){return!!e&&!!s&&!!s.length}shouldShowPeopleSuggestions({normalizedQuery:e,filteredAccountId:s,peopleSuggestions:t}=this.props){return!(!e||s||!t||!t.length||this.props.isPeopleSuggestionFromPeopleFilter)}shouldLogTagsSuggestionsShown(e=this.props){return e.tagsSuggestionsLoadingState===s.TagsSuggestionsLoadingState.LOADED&&this.shouldShowTagsSuggestions(e)}shouldShowTagsSuggestions({normalizedQuery:e,tagsSuggestions:t,manualTaggingVariant:o}=this.props){return s.isTaggingEnabled(o)&&!!s.normalizeForTagsSuggestions(e)&&!!t&&!!t.length}shouldShowResultSuggestions({normalizedQuery:e,resultSuggestionsForSearchArgs:s}=this.props){return!!e.length&&!!(null==s?void 0:s.length)}shouldLogResultSuggestionsShown(e=this.props){return e.resultSuggestionsLoadingState===s.ResultSuggestionsLoadingState.LOADED&&this.shouldShowResultSuggestions(e)}isInZeroStateDropdown(){return s.shouldUseZeroStateDropdown()}shouldShowDashCampaign(){return s.shouldShowDashCampaignInZeroStateDropdown()}shouldShowRecentItemSuggestions({recentItemSuggestions:e}=this.props){return((null==e?void 0:e.length)||0)>0}render(){const{suggestions:e,highlightedSuggestion:o,manualTaggingVariant:g,suggestionSectionOrder:i,normalizedQuery:n}=this.props,u=this.shouldShowQuerySuggestions(),r=this.shouldShowPeopleSuggestions(),a=this.shouldShowTagsSuggestions(),S=this.shouldShowResultSuggestions(),l=this.isInZeroStateDropdown()&&0===n.length&&this.shouldShowRecentItemSuggestions(),d=this.shouldShowDashCampaign()&&l;return u||r||a||S||l?t.React$1.createElement("div",{className:"search__dropdown"},t.React$1.createElement(s.SearchSuggestions,{suggestions:e,suggestionSectionOrder:i,onSuggestionClick:this.handleSuggestionClick,ariaLabel:"",highlightedSuggestion:o,showTagsSuggestions:s.isTaggingEnabled(g)})):d?t.React$1.createElement(s.CampaignSlot,{slotId:"top_search_dropdown"}):null}}x.displayName="SearchSuggestionsComponent";const U={setQuery:s.setQuery,setHighlightedRow:s.setHighlightedRow,setFilteredAccountId:s.setFilteredAccountId,dismissAllSuggestions:s.dismissAllSuggestions,onResultSuggestionClick:s.onResultSuggestionClick,onRecentItemSuggestionClick:s.onRecentItemSuggestionClick},k=e=>{const{apiCommonFields:u,highlightedRow:r,normalizedQuery:S,peopleSuggestionsLoadingState:l,recentItemSuggestionsLoadingState:d,suggestionSectionOrder:c,tagsSuggestionsLoadingState:h,querySuggestionsLoadingState:p,resultSuggestionsLoadingState:m,backups:y,typeaheadSessionId:_}=e,{manualTaggingVariant:L}=g.useSearchInputExperiments(),I=s.shouldUseZeroStateDropdown(),R=I&&0===S.length,[E,D]=i.useContactsQueryBy(S),[w,T]=i.useZeroStatePeopleSuggestionQuery(I,i.PEOPLE_SUGGESTIONS_DROPDOWN_LIMIT),O=R?i.formatZeroPeopleSuggestionsLoadingState(w):i.formatPeopleSuggestionsLoadingState(E);let f,Q=[];l&&l!==s.PeopleSuggestionsLoadingState.DISMISSED&&(Q=R?T:D,f={title:o.intl.formatMessage({id:"pEhPUj",defaultMessage:"People"}),suggestionSection:s.SuggestionSection.PEOPLE,suggestions:i.formatPeopleSuggestionsForSuggestionsDropdown(Q,S)});const[v,P]=n.useTagsSuggestionsQueryBy(S,s.isTaggingEnabled(L)),[N,C]=n.useZeroStateTagsSuggestions(I),q=R?n.formatTagsSuggestionsLoadingState(N):n.formatTagsSuggestionsLoadingState(v);let A,G=[];h&&h!==s.TagsSuggestionsLoadingState.DISMISSED&&(G=R?C:P,A={title:o.intl.formatMessage({id:"OQYnUK",defaultMessage:"Tags"}),suggestionSection:s.SuggestionSection.TAGS,suggestions:n.formatTagsSuggestions(R?C:P)});const j=s.searchSessionManager.getSearchSessionId({searchSessionExtensionType:"PASSIVE"}),[b,F]=n.useQuerySuggestionsQueryBy(S,j,_),U=n.formatQuerySuggestionsLoadingState(b);let k,z=[];p&&p!==s.QuerySuggestionsLoadingState.DISMISSED&&(z=F,k={title:o.intl.formatMessage({id:"mH5jmX",defaultMessage:"Search suggestions"}),suggestionSection:s.SuggestionSection.QUERY,suggestions:n.formatQuerySuggestions(F)});const[W,V,Z]=n.useResultSuggestionsQueryBy(u),$=n.formatResultSuggestionsLoadingState(W);let H,B=[],Y=s.immutableExports.Map();m&&m!==s.ResultSuggestionsLoadingState.DISMISSED&&(B=V,Y=s.immutableExports.Map(B.map((e=>[s.getIdForSearchResult(e),e]))),H={title:o.intl.formatMessage({id:"njcnFp",defaultMessage:"Results"}),suggestionSection:s.SuggestionSection.RESULT,suggestions:V.map((e=>{const t=null==y?void 0:y.find((t=>e instanceof s.File&&t.id===e.file_id));return n.formatResultSuggestion(e,t)}))});const K=[];f&&K.push(f),A&&K.push(A),k&&K.push(k),H&&K.push(H);const[X,J]=n.useRecentItemsQuery(I),ee=n.formatRecentItemSuggestionsLoadingState(X);let se,te=[];d&&d!==s.RecentItemSuggestionsLoadingState.DISMISSED&&(te=J,se={title:o.intl.formatMessage({id:"g0Mjyt",defaultMessage:"Recent files"}),suggestionSection:s.SuggestionSection.RECENT,suggestions:n.formatRecentItemSuggestions(J)});const oe=[];se&&oe.push(se),f&&oe.push(f),A&&oe.push(A);const ge=R?oe:K,ie=g.getHighlightedSuggestion(ge,r,c);return a.SEARCH_INPUT_CVC_MEASUREMENTS_ENABLED?t.React$1.createElement(M,Object.assign({},e,{manualTaggingVariant:L,suggestions:ge,highlightedSuggestion:ie,peopleSuggestions:Q,peopleSuggestionsLoadingState:O,tagsSuggestions:G,tagsSuggestionsLoadingState:q,querySuggestions:z,querySuggestionsLoadingState:U,resultSuggestionsForSearchArgs:B,resultSuggestionsLoadingState:$,resultSuggestionsRequestId:Z,recentItemSuggestions:te,recentItemSuggestionsLoadingState:ee,idToResultSuggestions:Y})):t.React$1.createElement(x,Object.assign({},e,{manualTaggingVariant:L,suggestions:ge,highlightedSuggestion:ie,peopleSuggestions:Q,peopleSuggestionsLoadingState:O,tagsSuggestions:G,tagsSuggestionsLoadingState:q,querySuggestions:z,querySuggestionsLoadingState:U,resultSuggestionsForSearchArgs:B,resultSuggestionsLoadingState:$,resultSuggestionsRequestId:Z,recentItemSuggestions:te,recentItemSuggestionsLoadingState:ee,idToResultSuggestions:Y}))},z=s.connect((e=>({highlightedRow:s.highlightedRow(e),suggestionSectionOrder:s.suggestionSectionOrder(e),normalizedQuery:s.normalizedQuery(e),filteredAccountId:s.filteredAccountId(e),apiCommonFields:s.apiCommonFields(e),backups:s.backups(e),typeaheadSessionId:s.typeaheadSessionId(e),querySuggestionsLoadingState:s.querySuggestionsLoadingState(e),peopleSuggestionsLoadingState:s.peopleSuggestionsLoadingState(e),tagsSuggestionsLoadingState:s.tagsSuggestionsLoadingState(e),resultSuggestionsLoadingState:s.resultSuggestionsLoadingState(e),recentItemSuggestionsLoadingState:s.recentItemSuggestionsLoadingState(e)})),U)(k);e.ConnectedSearchSuggestions=z,e.ReactQuerySearchSuggestionsComponent=k}));
//# sourceMappingURL=c_single_page_input_suggestions.js-vfla-yn8l.map
