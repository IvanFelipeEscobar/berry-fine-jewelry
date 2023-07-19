define(["exports","./e_edison","./c_core_i18n","./c_ui_section_section_empty_text","./e_ui_page_files_router","./c_content_suggestions_suggested_file_card"],(function(e,t,s,n,i,o){"use strict";function a(e){return!!e&&-1!==["V11"].indexOf(e)}const r=e=>{const{suggestedItemsToShow:s,removeSuggestionFromUi:n,user:r,source:g,tileWidth:u,tileMarginRight:l,useTileWidthForCard:d,dismissSuggestedItem:m,logger:c,openSuggestedItem:h,openSuggestedParent:_,filenameMaxChars:p,shouldTruncateFilenameOnTileHover:f,filenameWidthAfterTruncation:S,subheaderLabelMaxChars:T,showIconsInsteadOfThumbnails:x,fileIconSize:E,markRenderTime:y,variant:I}=e;t.React$1.useEffect((()=>{null==y||y()}),[s.length]);const V=i.cx({"home-access-section__content":!0,"home__suggest-items":!0}),b=e=>"paper"!==e.toLowerCase();return t.React$1.createElement("div",{className:i.cx(V)},s.map(((e,s)=>e.type===i.SuggestItemTypes.FILE?t.React$1.createElement("div",{"data-testid":"suggested-item",className:i.cx({"home__suggest-items-hidden":e.isDismissed}),onAnimationEnd:n(e)},t.React$1.createElement(o.SuggestedFileCard,{key:e.key,user:r,source:g,suggested:e,position:s,tileWidth:u,tileMarginRight:l,useTileWidthForCard:d,dismissSuggestedItem:m,logger:c,openSuggestedItem:h,openSuggestedParent:_,filenameMaxChars:p,shouldTruncateFilenameOnTileHover:f,filenameWidthAfterTruncation:S,subheaderLabelMaxChars:T,showIconsInsteadOfThumbnails:x,fileIconSize:E,isExtensionThumbnailableFnOverride:b,showOverflowMenu:a(I)})):null)))};r.displayName="SuggestNonEmpty";var g=Object.freeze({__proto__:null,SuggestNonEmpty:r});e.SuggestEmpty=()=>t.React$1.createElement(n.SectionEmptyText,{message:s.intl.formatMessage({id:"RVB4pC",defaultMessage:"As you use Dropbox, suggested items will automatically show up here."}),learnMoreLink:"/help/desktop-web/homepage#suggest"}),e.SuggestNonEmpty=r,e.isBrowseSuggestionsEnabled=function(e){return-1!==["V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13"].indexOf(e)},e.isBrowseSuggestionsSkipTTIEnabled=function(e){return!!e&&-1!==["V11"].indexOf(e)},e.suggest_nonempty_esnext=g}));
//# sourceMappingURL=c_content_suggestions_suggest_nonempty.js-vflWMuVd6.map
