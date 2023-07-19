define(["require","exports","metaserver/static/js/ux_analytics/dispatch_custom_event","metaserver/static/js/ux_analytics/element_observers/observer_constants","metaserver/static/js/ux_analytics/element_observers/observer_constants"],(function(e,t,n,s,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.createIntersectionObserverManager=t.ElementStatus=void 0,(function(e){e.VIEWING="VIEWING",e.VIEWED="VIEWED"})(a=t.ElementStatus||(t.ElementStatus={})),t.createIntersectionObserverManager=function(e=.5){const t=new Map,o=new IntersectionObserver((function(t){t.forEach(t=>{const n=t.target;t.intersectionRatio>=e&&i(n,a.VIEWING),t.intersectionRatio<e&&i(n,a.VIEWED)})}),{threshold:e});function i(e,o){const i=e.getAttribute(s.UXA_ID_ATTR),E=t.get(i);if(E)switch(o){case a.VIEWING:E.status===a.VIEWED&&(E.status=a.VIEWING,E.lastViewStarted=performance.now(),(0,n.dispatchCustomEvent)(r.ELEMENT_INTERACTION_EVENT,{detail:{eventType:s.ElementInteractionEventType.ELEMENT_SHOWN,extra:{element_id:i}}}));break;case a.VIEWED:if(E.status===a.VIEWING){const o=Math.round(performance.now()-E.lastViewStarted);window.requestAnimationFrame(()=>{var c;const u=e.getAttribute(s.UXA_ID_ATTR),l=null===(c=t.get(u))||void 0===c?void 0:c.element;E.status!==a.VIEWING||null!==l&&l!==e||(E.status=a.VIEWED,(0,n.dispatchCustomEvent)(r.ELEMENT_INTERACTION_EVENT,{detail:{eventType:s.ElementInteractionEventType.ELEMENT_HIDE,extra:{element_id:i,element_shown_duration_ms:o}}}))})}}}return{addElements:function(e){e.forEach(e=>(function(e){const n=e.getAttribute(s.UXA_ID_ATTR),r=t.get(n);r?r.element=e:t.set(n,{status:a.VIEWED,element:e,lastViewStarted:0});o.observe(e)})(e))},removeElements:function(e){e.forEach(e=>(function(e){const n=e.getAttribute(s.UXA_ID_ATTR),r=t.get(n);r&&(r.element=null,i(e,a.VIEWED),o.unobserve(e))})(e))},pause:function(){o.disconnect()},resume:function(){for(const[e,n]of t)(null==n?void 0:n.element)&&o.observe(n.element)},testOnlyTryUpdateElementStatus:i,testOnlyGetElementStatus:function(e){const n=t.get(e);return n?[n.element,n.status]:[null,null]}}}}));
//# sourceMappingURL=intersection_observer.min.js-vfl9ArFKs.map