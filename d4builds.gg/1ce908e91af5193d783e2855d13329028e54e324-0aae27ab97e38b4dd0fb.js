"use strict";(self.webpackChunksite_name_here=self.webpackChunksite_name_here||[]).push([[443],{7866:function(e,t,n){n.d(t,{Cv:function(){return ee}});var a=n(7365),i=n(3318),l="tippy-content",r="tippy-backdrop",s="tippy-arrow",o="tippy-svg-arrow",c={passive:!0,capture:!0},u=function(){return document.body};function p(e,t,n){if(Array.isArray(e)){var a=e[t];return null==a?Array.isArray(n)?n[t]:n:a}return e}function d(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function f(e,t){return"function"==typeof e?e.apply(void 0,t):e}function _(e,t){return 0===t?e:function(a){clearTimeout(n),n=setTimeout((function(){e(a)}),t)};var n}function m(e){return[].concat(e)}function v(e,t){-1===e.indexOf(t)&&e.push(t)}function g(e){return e.split("-")[0]}function h(e){return[].slice.call(e)}function b(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function y(){return document.createElement("div")}function E(e){return["Element","Fragment"].some((function(t){return d(e,t)}))}function k(e){return d(e,"MouseEvent")}function w(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function T(e){return E(e)?[e]:function(e){return d(e,"NodeList")}(e)?h(e):Array.isArray(e)?e:h(document.querySelectorAll(e))}function S(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function C(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function N(e){var t,n=m(e)[0];return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function L(e,t,n){var a=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[a](t,n)}))}function O(e,t){for(var n=t;n;){var a;if(e.contains(n))return!0;n=null==n.getRootNode||null==(a=n.getRootNode())?void 0:a.host}return!1}var I={isTouch:!1},x=0;function M(){I.isTouch||(I.isTouch=!0,window.performance&&document.addEventListener("mousemove",D))}function D(){var e=performance.now();e-x<20&&(I.isTouch=!1,document.removeEventListener("mousemove",D)),x=e}function A(){var e=document.activeElement;if(w(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var H=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto;var B={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},P=Object.assign({appendTo:u,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},B,{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),z=Object.keys(P);function j(e){var t=(e.plugins||[]).reduce((function(t,n){var a,i=n.name,l=n.defaultValue;i&&(t[i]=void 0!==e[i]?e[i]:null!=(a=P[i])?a:l);return t}),{});return Object.assign({},e,t)}function F(e,t){var n=Object.assign({},t,{content:f(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(j(Object.assign({},P,{plugins:t}))):z).reduce((function(t,n){var a=(e.getAttribute("data-tippy-"+n)||"").trim();if(!a)return t;if("content"===n)t[n]=a;else try{t[n]=JSON.parse(a)}catch(i){t[n]=a}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},P.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function V(e,t){e.innerHTML=t}function R(e){var t=y();return!0===e?t.className=s:(t.className=o,E(e)?t.appendChild(e):V(t,e)),t}function U(e,t){E(t.content)?(V(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?V(e,t.content):e.textContent=t.content)}function K(e){var t=e.firstElementChild,n=h(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(l)})),arrow:n.find((function(e){return e.classList.contains(s)||e.classList.contains(o)})),backdrop:n.find((function(e){return e.classList.contains(r)}))}}function W(e){var t=y(),n=y();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var a=y();function i(n,a){var i=K(t),l=i.box,r=i.content,s=i.arrow;a.theme?l.setAttribute("data-theme",a.theme):l.removeAttribute("data-theme"),"string"==typeof a.animation?l.setAttribute("data-animation",a.animation):l.removeAttribute("data-animation"),a.inertia?l.setAttribute("data-inertia",""):l.removeAttribute("data-inertia"),l.style.maxWidth="number"==typeof a.maxWidth?a.maxWidth+"px":a.maxWidth,a.role?l.setAttribute("role",a.role):l.removeAttribute("role"),n.content===a.content&&n.allowHTML===a.allowHTML||U(r,e.props),a.arrow?s?n.arrow!==a.arrow&&(l.removeChild(s),l.appendChild(R(a.arrow))):l.appendChild(R(a.arrow)):s&&l.removeChild(s)}return a.className=l,a.setAttribute("data-state","hidden"),U(a,e.props),t.appendChild(n),n.appendChild(a),i(e.props,e.props),{popper:t,onUpdate:i}}W.$$tippy=!0;var X=1,Y=[],$=[];function q(e,t){var n,i,l,r,s,o,d,E,w=F(e,Object.assign({},P,j(b(t)))),T=!1,x=!1,M=!1,D=!1,A=[],B=_(ye,w.interactiveDebounce),z=X++,V=(E=w.plugins).filter((function(e,t){return E.indexOf(e)===t})),R={id:z,reference:e,popper:y(),popperInstance:null,props:w,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:V,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(i),cancelAnimationFrame(l)},setProps:function(t){0;if(R.state.isDestroyed)return;re("onBeforeUpdate",[R,t]),he();var n=R.props,a=F(e,Object.assign({},n,b(t),{ignoreAttributes:!0}));R.props=a,ge(),n.interactiveDebounce!==a.interactiveDebounce&&(ce(),B=_(ye,a.interactiveDebounce));n.triggerTarget&&!a.triggerTarget?m(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):a.triggerTarget&&e.removeAttribute("aria-expanded");oe(),le(),q&&q(n,a);R.popperInstance&&(Te(),Ce().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));re("onAfterUpdate",[R,t])},setContent:function(e){R.setProps({content:e})},show:function(){0;var e=R.state.isVisible,t=R.state.isDestroyed,n=!R.state.isEnabled,a=I.isTouch&&!R.props.touch,i=p(R.props.duration,0,P.duration);if(e||t||n||a)return;if(te().hasAttribute("disabled"))return;if(re("onShow",[R],!1),!1===R.props.onShow(R))return;R.state.isVisible=!0,ee()&&(W.style.visibility="visible");le(),fe(),R.state.isMounted||(W.style.transition="none");if(ee()){var l=ae(),r=l.box,s=l.content;S([r,s],0)}o=function(){var e;if(R.state.isVisible&&!D){if(D=!0,W.offsetHeight,W.style.transition=R.props.moveTransition,ee()&&R.props.animation){var t=ae(),n=t.box,a=t.content;S([n,a],i),C([n,a],"visible")}se(),oe(),v($,R),null==(e=R.popperInstance)||e.forceUpdate(),re("onMount",[R]),R.props.animation&&ee()&&function(e,t){me(e,t)}(i,(function(){R.state.isShown=!0,re("onShown",[R])}))}},function(){var e,t=R.props.appendTo,n=te();e=R.props.interactive&&t===u||"parent"===t?n.parentNode:f(t,[n]);e.contains(W)||e.appendChild(W);R.state.isMounted=!0,Te(),!1}()},hide:function(){0;var e=!R.state.isVisible,t=R.state.isDestroyed,n=!R.state.isEnabled,a=p(R.props.duration,1,P.duration);if(e||t||n)return;if(re("onHide",[R],!1),!1===R.props.onHide(R))return;R.state.isVisible=!1,R.state.isShown=!1,D=!1,T=!1,ee()&&(W.style.visibility="hidden");if(ce(),_e(),le(!0),ee()){var i=ae(),l=i.box,r=i.content;R.props.animation&&(S([l,r],a),C([l,r],"hidden"))}se(),oe(),R.props.animation?ee()&&function(e,t){me(e,(function(){!R.state.isVisible&&W.parentNode&&W.parentNode.contains(W)&&t()}))}(a,R.unmount):R.unmount()},hideWithInteractivity:function(e){0;ne().addEventListener("mousemove",B),v(Y,B),B(e)},enable:function(){R.state.isEnabled=!0},disable:function(){R.hide(),R.state.isEnabled=!1},unmount:function(){0;R.state.isVisible&&R.hide();if(!R.state.isMounted)return;Se(),Ce().forEach((function(e){e._tippy.unmount()})),W.parentNode&&W.parentNode.removeChild(W);$=$.filter((function(e){return e!==R})),R.state.isMounted=!1,re("onHidden",[R])},destroy:function(){0;if(R.state.isDestroyed)return;R.clearDelayTimeouts(),R.unmount(),he(),delete e._tippy,R.state.isDestroyed=!0,re("onDestroy",[R])}};if(!w.render)return R;var U=w.render(R),W=U.popper,q=U.onUpdate;W.setAttribute("data-tippy-root",""),W.id="tippy-"+R.id,R.popper=W,e._tippy=R,W._tippy=R;var G=V.map((function(e){return e.fn(R)})),Z=e.hasAttribute("aria-expanded");return ge(),oe(),le(),re("onCreate",[R]),w.showOnCreate&&Ne(),W.addEventListener("mouseenter",(function(){R.props.interactive&&R.state.isVisible&&R.clearDelayTimeouts()})),W.addEventListener("mouseleave",(function(){R.props.interactive&&R.props.trigger.indexOf("mouseenter")>=0&&ne().addEventListener("mousemove",B)})),R;function J(){var e=R.props.touch;return Array.isArray(e)?e:[e,0]}function Q(){return"hold"===J()[0]}function ee(){var e;return!(null==(e=R.props.render)||!e.$$tippy)}function te(){return d||e}function ne(){var e=te().parentNode;return e?N(e):document}function ae(){return K(W)}function ie(e){return R.state.isMounted&&!R.state.isVisible||I.isTouch||r&&"focus"===r.type?0:p(R.props.delay,e?0:1,P.delay)}function le(e){void 0===e&&(e=!1),W.style.pointerEvents=R.props.interactive&&!e?"":"none",W.style.zIndex=""+R.props.zIndex}function re(e,t,n){var a;(void 0===n&&(n=!0),G.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(a=R.props)[e].apply(a,t)}function se(){var t=R.props.aria;if(t.content){var n="aria-"+t.content,a=W.id;m(R.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(R.state.isVisible)e.setAttribute(n,t?t+" "+a:a);else{var i=t&&t.replace(a,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function oe(){!Z&&R.props.aria.expanded&&m(R.props.triggerTarget||e).forEach((function(e){R.props.interactive?e.setAttribute("aria-expanded",R.state.isVisible&&e===te()?"true":"false"):e.removeAttribute("aria-expanded")}))}function ce(){ne().removeEventListener("mousemove",B),Y=Y.filter((function(e){return e!==B}))}function ue(t){if(!I.isTouch||!M&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!R.props.interactive||!O(W,n)){if(m(R.props.triggerTarget||e).some((function(e){return O(e,n)}))){if(I.isTouch)return;if(R.state.isVisible&&R.props.trigger.indexOf("click")>=0)return}else re("onClickOutside",[R,t]);!0===R.props.hideOnClick&&(R.clearDelayTimeouts(),R.hide(),x=!0,setTimeout((function(){x=!1})),R.state.isMounted||_e())}}}function pe(){M=!0}function de(){M=!1}function fe(){var e=ne();e.addEventListener("mousedown",ue,!0),e.addEventListener("touchend",ue,c),e.addEventListener("touchstart",de,c),e.addEventListener("touchmove",pe,c)}function _e(){var e=ne();e.removeEventListener("mousedown",ue,!0),e.removeEventListener("touchend",ue,c),e.removeEventListener("touchstart",de,c),e.removeEventListener("touchmove",pe,c)}function me(e,t){var n=ae().box;function a(e){e.target===n&&(L(n,"remove",a),t())}if(0===e)return t();L(n,"remove",s),L(n,"add",a),s=a}function ve(t,n,a){void 0===a&&(a=!1),m(R.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,a),A.push({node:e,eventType:t,handler:n,options:a})}))}function ge(){var e;Q()&&(ve("touchstart",be,{passive:!0}),ve("touchend",Ee,{passive:!0})),(e=R.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(ve(e,be),e){case"mouseenter":ve("mouseleave",Ee);break;case"focus":ve(H?"focusout":"blur",ke);break;case"focusin":ve("focusout",ke)}}))}function he(){A.forEach((function(e){var t=e.node,n=e.eventType,a=e.handler,i=e.options;t.removeEventListener(n,a,i)})),A=[]}function be(e){var t,n=!1;if(R.state.isEnabled&&!we(e)&&!x){var a="focus"===(null==(t=r)?void 0:t.type);r=e,d=e.currentTarget,oe(),!R.state.isVisible&&k(e)&&Y.forEach((function(t){return t(e)})),"click"===e.type&&(R.props.trigger.indexOf("mouseenter")<0||T)&&!1!==R.props.hideOnClick&&R.state.isVisible?n=!0:Ne(e),"click"===e.type&&(T=!n),n&&!a&&Le(e)}}function ye(e){var t=e.target,n=te().contains(t)||W.contains(t);if("mousemove"!==e.type||!n){var a=Ce().concat(W).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:w}:null})).filter(Boolean);(function(e,t){var n=t.clientX,a=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,l=e.props.interactiveBorder,r=g(i.placement),s=i.modifiersData.offset;if(!s)return!0;var o="bottom"===r?s.top.y:0,c="top"===r?s.bottom.y:0,u="right"===r?s.left.x:0,p="left"===r?s.right.x:0,d=t.top-a+o>l,f=a-t.bottom-c>l,_=t.left-n+u>l,m=n-t.right-p>l;return d||f||_||m}))})(a,e)&&(ce(),Le(e))}}function Ee(e){we(e)||R.props.trigger.indexOf("click")>=0&&T||(R.props.interactive?R.hideWithInteractivity(e):Le(e))}function ke(e){R.props.trigger.indexOf("focusin")<0&&e.target!==te()||R.props.interactive&&e.relatedTarget&&W.contains(e.relatedTarget)||Le(e)}function we(e){return!!I.isTouch&&Q()!==e.type.indexOf("touch")>=0}function Te(){Se();var t=R.props,n=t.popperOptions,i=t.placement,l=t.offset,r=t.getReferenceClientRect,s=t.moveTransition,c=ee()?K(W).arrow:null,u=r?{getBoundingClientRect:r,contextElement:r.contextElement||te()}:e,p={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(ee()){var n=ae().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}},d=[{name:"offset",options:{offset:l}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},p];ee()&&c&&d.push({name:"arrow",options:{element:c,padding:3}}),d.push.apply(d,(null==n?void 0:n.modifiers)||[]),R.popperInstance=(0,a.fi)(u,W,Object.assign({},n,{placement:i,onFirstUpdate:o,modifiers:d}))}function Se(){R.popperInstance&&(R.popperInstance.destroy(),R.popperInstance=null)}function Ce(){return h(W.querySelectorAll("[data-tippy-root]"))}function Ne(e){R.clearDelayTimeouts(),e&&re("onTrigger",[R,e]),fe();var t=ie(!0),a=J(),i=a[0],l=a[1];I.isTouch&&"hold"===i&&l&&(t=l),t?n=setTimeout((function(){R.show()}),t):R.show()}function Le(e){if(R.clearDelayTimeouts(),re("onUntrigger",[R,e]),R.state.isVisible){if(!(R.props.trigger.indexOf("mouseenter")>=0&&R.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&T)){var t=ie(!1);t?i=setTimeout((function(){R.state.isVisible&&R.hide()}),t):l=requestAnimationFrame((function(){R.hide()}))}}else _e()}}function G(e,t){void 0===t&&(t={});var n=P.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",M,c),window.addEventListener("blur",A);var a=Object.assign({},t,{plugins:n}),i=T(e).reduce((function(e,t){var n=t&&q(t,a);return n&&e.push(n),e}),[]);return E(e)?i[0]:i}G.defaultProps=P,G.setDefaultProps=function(e){Object.keys(e).forEach((function(t){P[t]=e[t]}))},G.currentInput=I;Object.assign({},i.Z,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});var Z={clientX:0,clientY:0},J=[];function Q(e){var t=e.clientX,n=e.clientY;Z={clientX:t,clientY:n}}var ee={name:"followCursor",defaultValue:!1,fn:function(e){var t=e.reference,n=N(e.props.triggerTarget||t),a=!1,i=!1,l=!0,r=e.props;function s(){return"initial"===e.props.followCursor&&e.state.isVisible}function o(){n.addEventListener("mousemove",p)}function c(){n.removeEventListener("mousemove",p)}function u(){a=!0,e.setProps({getReferenceClientRect:null}),a=!1}function p(n){var a=!n.target||t.contains(n.target),i=e.props.followCursor,l=n.clientX,r=n.clientY,s=t.getBoundingClientRect(),o=l-s.left,c=r-s.top;!a&&e.props.interactive||e.setProps({getReferenceClientRect:function(){var e=t.getBoundingClientRect(),n=l,a=r;"initial"===i&&(n=e.left+o,a=e.top+c);var s="horizontal"===i?e.top:a,u="vertical"===i?e.right:n,p="horizontal"===i?e.bottom:a,d="vertical"===i?e.left:n;return{width:u-d,height:p-s,top:s,right:u,bottom:p,left:d}}})}function d(){e.props.followCursor&&(J.push({instance:e,doc:n}),function(e){e.addEventListener("mousemove",Q)}(n))}function f(){0===(J=J.filter((function(t){return t.instance!==e}))).filter((function(e){return e.doc===n})).length&&function(e){e.removeEventListener("mousemove",Q)}(n)}return{onCreate:d,onDestroy:f,onBeforeUpdate:function(){r=e.props},onAfterUpdate:function(t,n){var l=n.followCursor;a||void 0!==l&&r.followCursor!==l&&(f(),l?(d(),!e.state.isMounted||i||s()||o()):(c(),u()))},onMount:function(){e.props.followCursor&&!i&&(l&&(p(Z),l=!1),s()||o())},onTrigger:function(e,t){k(t)&&(Z={clientX:t.clientX,clientY:t.clientY}),i="focus"===t.type},onHidden:function(){e.props.followCursor&&(u(),c(),l=!0)}}}};G.setDefaultProps({render:W})},1340:function(e,t,n){var a=n(5007),i=n(528);t.Z=function(e){var t=e.skills,n=e.skill,l=e.rank,r=e.isDynamic,s=e.builds,o=e.isLongPress,c=e.mobileOverlay,u=e.hideModal,p=e.skillOnClick,d=e.isActive,f=e.totalRank,_=e.skillTree,m=e.buildSpec,v=e.onlyEnchantment,g=t.find((function(e){return m?e.name===n.replace(/ \(\d\)/g,""):n.url?e.name===n.url?e.runes.map((function(e){return n.name===e.name})):null:e.name===n.name.replace(/ \(\d\)/g,"")})),h=null==g?void 0:g.name,b=null==g?void 0:g.description,y=null==g?void 0:g.name;return n.url&&g.runes.map((function(e){return e.name===n.name&&(h=e.name,b=e.description,y=n.url),null})),g?a.default.createElement("div",{className:"skill__tooltip"+(o?" skill__tooltip--red":"")+(c?" skill__tooltip--mobile":"")},a.default.createElement("div",{className:"skill__tooltip__header"},a.default.createElement("img",{src:"https://rerollcdn.com/DIABLO4/Skills/2/"+y.toLowerCase().replace(/ /g,"_")+".png",className:"skill__tooltip__icon",alt:h}),a.default.createElement("div",{className:"skill__tooltip__name"},n.url?" "+n.name+" "+n.url+" ":n.name?n.name:g.display_name?g.display_name:n,n.url||s||!l?"":a.default.createElement("b",null,"Rank ",l),!s||n.url||g.summons||!n.rank&&0!==n.rank?"":a.default.createElement("b",null,"Rank ",n.rank),v?a.default.createElement("b",null,"Enchantment"):"",g.summons?a.default.createElement("b",null,g.summons[n.type-1].name):""),"undefined"!=typeof window&&window.innerWidth<575.98?a.default.createElement("button",{className:"close__modal",onClick:u},a.default.createElement("img",{class:"close__modal__icon active",src:"https://rerollcdn.com/close-icon.svg",alt:"close icon"})):""),!g.tags||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__tags"},Object.keys(g.tags).map((function(e){var t=g.tags[e];return a.default.createElement("div",{className:"skill__tooltip__tag"},t)}))),a.default.createElement("div",{className:"skill__tooltip__resources"},!g.charge||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Charges:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.charge,g,l,r)}})),!g.charge_cooldown||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Charge Cooldown:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.charge_cooldown,g,l,r)}})," ","seconds"),!g.mana||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Mana Cost:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.mana,g,l,r)}})),!g.mana_per_second||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Cost:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.mana_per_second,g,l,r)}})," ","Mana per second"),!g.fury_generate||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Fury Generate:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.fury_generate,g,l,r)}})),!g.fury_cost||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Fury Cost:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.fury_cost,g,l,r)}})),!g.energy_generate||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Generate Energy:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.energy_generate,g,l,r)}})),!g.energy_cost||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Energy Cost:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.energy_cost,g,l,r)}})),!g.essence_generate||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Generate Essence:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.essence_generate,g,l,r)}})),!g.essence_cost||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Essence Cost:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.essence_cost,g,l,r)}})),!g.spirit_generate||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Generate Spirit:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.spirit_generate,g,l,r)}})),!g.spirit_cost||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},"Spirit Cost:"," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.spirit_cost,g,l,r)}})),!g.cooldown||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource"},a.default.createElement("b",null,"Cooldown:")," ",a.default.createElement("span",{dangerouslySetInnerHTML:{__html:(0,i.d)(g.cooldown,g,l,r)}})," ","seconds"),!g.lucky_hit||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__resource lucky"},a.default.createElement("b",null,"Lucky Hit:")," ",(0,i.d)(g.lucky_hit,g,l,r))),v?g.enchantment?a.default.createElement("div",{className:"skill__tooltip__description"},a.default.createElement("div",{className:"skill__tooltip__description__item",dangerouslySetInnerHTML:{__html:(0,i.d)(g.enchantment,g,l,r)}})):"":b?a.default.createElement("div",{className:"skill__tooltip__description"},b.map((function(e){return a.default.createElement("div",{className:"skill__tooltip__description__item",dangerouslySetInnerHTML:{__html:(0,i.d)(e,g,l,r)}})}))):"",g.summons?a.default.createElement("div",{className:"skill__tooltip__description"},g.summons[n.type-1].description.map((function(e){return a.default.createElement("div",{className:"skill__tooltip__description__item",dangerouslySetInnerHTML:{__html:(0,i.d)(e,g,l,r)}})}))):"",!g.description_list||v||n.url?"":a.default.createElement("ul",{className:"skill__tooltip__description__list"},g.description_list.map((function(e){return a.default.createElement("li",{className:"skill__tooltip__description__list__item",dangerouslySetInnerHTML:{__html:(0,i.d)(e,g,l,r)}})}))),g.description2&&!v?a.default.createElement("div",{className:"skill__tooltip__description"},g.description2.map((function(e){return a.default.createElement("div",{className:"skill__tooltip__description__item",dangerouslySetInnerHTML:{__html:(0,i.d)(e,g,l,r)}})}))):"",g.description_list2&&!v?a.default.createElement("ul",{className:"skill__tooltip__description__list"},g.description_list2.map((function(e){return a.default.createElement("li",{className:"skill__tooltip__description__list__item",dangerouslySetInnerHTML:{__html:(0,i.d)(e,g,l,r)}})}))):""," ",s&&n.rune?a.default.createElement("div",{className:"skill__tooltip__modifiers"},a.default.createElement("div",{className:"skill__tooltip__modifiers__divider"},a.default.createElement("b",null,"Modifiers")),a.default.createElement("ul",{className:"skill__tooltip__modifiers__list"},Object.keys(g.runes).map((function(e){var t=g.runes[e];return n.rune.includes(t.name)?a.default.createElement("li",{className:"skill__tooltip__modifiers__list__item"},t.description.map((function(e){return a.default.createElement("div",{className:"skill__tooltip__modifiers__extra",dangerouslySetInnerHTML:{__html:(0,i.d)(e,g)}})}))):null})),s&&n.spec?a.default.createElement("li",{className:"skill__tooltip__modifiers__list__item enchantment",dangerouslySetInnerHTML:{__html:(0,i.d)(g.enchantment,g,l,r)}}):"")):"",g.summons?a.default.createElement("div",{className:"skill__tooltip__modifiers"},a.default.createElement("div",{className:"skill__tooltip__modifiers__divider"},a.default.createElement("b",null,3===n.modifier?"Sacrifice":"Upgrade")),a.default.createElement("ul",{className:"skill__tooltip__modifiers__list"},a.default.createElement("li",{className:"skill__tooltip__modifiers__list__item"},g.summons[n.type-1].extra[n.modifier-1]))):"",_&&g.enchantment&&!n.diamond?a.default.createElement("div",{className:"skill__tooltip__modifiers"},a.default.createElement("div",{className:"skill__tooltip__modifiers__divider"},a.default.createElement("b",null,"Enchantment")),a.default.createElement("ul",{className:"skill__tooltip__modifiers__list"},a.default.createElement("li",{className:"skill__tooltip__modifiers__list__item",dangerouslySetInnerHTML:{__html:(0,i.d)(g.enchantment,g,l,r)}}))):"",!g.extra||n.url||v?"":a.default.createElement("div",{className:"skill__tooltip__extras"},Object.keys(g.extra).map((function(e){var t=g.extra[e];return a.default.createElement("div",{className:"skill__tooltip__extra"},t.includes("Damage")?a.default.createElement("img",{src:"https://rerollcdn.com/DIABLO4/Elements/"+t.toLowerCase().replace(" damage","")+".png",className:"skill__tooltip__extra__icon",alt:t}):"",t)}))),p?a.default.createElement("div",{className:"skill__tree__buttons"},a.default.createElement("div",{className:"skill__tree__buttons__rank"},"Rank ",l),a.default.createElement("div",{className:"skill__tree__buttons__wrapper"},a.default.createElement("button",{className:"skill__tree__control btn"+(d()&&0!==l?"":" disabled"),onClick:function(){return p({button:2})}},"Decrease"),a.default.createElement("button",{className:"skill__tree__control btn"+(d()&&l!==f?"":" disabled"),onClick:function(){return p({button:0})}},"Increase"))):""):""}},528:function(e,t,n){n.d(t,{d:function(){return a}});var a=function(e,t,n,a){for(var i=e.toString().split(" "),l=0;l<i.length;l++){if("{"===i[l][0]){var r=i[l].slice(1,-1);i[l]=a?n?"<span class='scaling__value'>["+t[r][n-1]+"]</span>":"<span class='scaling__value'>["+t[r][0]+"]</span>":"<span class='scaling__value'>["+t[r][t[r].length-1]+"]</span>"}"["===i[l][0]&&i[l].includes("-")&&(i[l]="<span class='scaling__value'>"+i[l].replace("-"," - ")+"</span>"),"["===i[l][0]&&(i[l]="<span class='scaling__value'>"+i[l]+"</span>"),i[l].includes("Stunning")&&(i[l]=i[l].replace("Stunning","<span class='filter__value'>Stunning</span>")),i[l].includes("Stunned")&&(i[l]=i[l].replace("Stunned","<span class='filter__value'>Stunned</span>")),i[l].includes("Stuns")&&(i[l]=i[l].replace("Stuns","<span class='filter__value'>Stuns</span>")),i[l].includes("Stun")&&(i[l]=i[l].replace("Stun","<span class='filter__value'>Stun</span>")),i[l].includes("Poisoning")&&(i[l]=i[l].replace("Poisoning","<span class='filter__value'>Poisoning</span>")),i[l].includes("Poisons")&&(i[l]=i[l].replace("Poisons","<span class='filter__value'>Poisons</span>")),i[l].includes("Poisoned")&&(i[l]=i[l].replace("Poisoned","<span class='filter__value'>Poisoned</span>")),i[l].includes("Poison")&&(i[l]=i[l].replace("Poison","<span class='filter__value'>Poison</span>")),i[l].includes("Vulnerable")&&(i[l]=i[l].replace("Vulnerable","<span class='filter__value'>Vulnerable</span>")),i[l].includes("Barriers")&&(i[l]=i[l].replace("Barriers","<span class='filter__value'>Barriers</span>")),i[l].includes("Barrier")&&(i[l]=i[l].replace("Barrier","<span class='filter__value'>Barrier</span>")),i[l].includes("Minions")&&(i[l]=i[l].replace("Minions","<span class='filter__value'>Minions</span>")),i[l].includes("Minion")&&(i[l]=i[l].replace("Minion","<span class='filter__value'>Minion</span>")),i[l].includes("Immobilizing")&&(i[l]=i[l].replace("Immobilizing","<span class='filter__value'>Immobilizing</span>")),i[l].includes("Immobilized")&&(i[l]=i[l].replace("Immobilized","<span class='filter__value'>Immobilized</span>")),i[l].includes("Immobilize")&&(i[l]=i[l].replace("Immobilize","<span class='filter__value'>Immobilize</span>")),i[l].includes("Chilling")&&(i[l]=i[l].replace("Chilling","<span class='filter__value'>Chilling</span>")),i[l].includes("Chilled")&&(i[l]=i[l].replace("Chilled","<span class='filter__value'>Chilled</span>")),i[l].includes("Chills")&&(i[l]=i[l].replace("Chills","<span class='filter__value'>Chills</span>")),i[l].includes("Chill")&&(i[l]=i[l].replace("Chill","<span class='filter__value'>Chill</span>")),i[l].includes("Frozen")&&(i[l]=i[l].replace("Frozen","<span class='filter__value'>Frozen</span>")),i[l].includes("Freezes")&&(i[l]=i[l].replace("Freezes","<span class='filter__value'>Freezes</span>")),i[l].includes("Freeze")&&(i[l]=i[l].replace("Freeze","<span class='filter__value'>Freeze</span>")),i[l].includes("Berserking")&&(i[l]=i[l].replace("Berserking","<span class='filter__value'>Berserking</span>")),i[l].includes("Bleeding")&&(i[l]=i[l].replace("Bleeding","<span class='filter__value'>Bleeding</span>")),i[l].includes("Bleeds")&&(i[l]=i[l].replace("Bleeds","<span class='filter__value'>Bleeds</span>")),i[l].includes("Bleed")&&(i[l]=i[l].replace("Bleed","<span class='filter__value'>Bleed</span>")),i[l].includes("Burning")&&(i[l]=i[l].replace("Burning","<span class='filter__value'>Burning</span>")),i[l].includes("Burns")&&(i[l]=i[l].replace("Burns","<span class='filter__value'>Burns</span>")),i[l].includes("Burn")&&(i[l]=i[l].replace("Burn","<span class='filter__value'>Burn</span>")),i[l].includes("Dazed")&&(i[l]=i[l].replace("Dazed","<span class='filter__value'>Dazed</span>")),i[l].includes("Dazes")&&(i[l]=i[l].replace("Dazes","<span class='filter__value'>Dazes</span>")),i[l].includes("Daze")&&(i[l]=i[l].replace("Daze","<span class='filter__value'>Daze</span>")),i[l].includes("Fortifies")&&(i[l]=i[l].replace("Fortifies","<span class='filter__value'>Fortifies</span>")),i[l].includes("Fortify")&&(i[l]=i[l].replace("Fortify","<span class='filter__value'>Fortify</span>")),i[l].includes("Fortified")&&(i[l]=i[l].replace("Fortified","<span class='filter__value'>Fortified</span>")),i[l].includes("Injured")&&(i[l]=i[l].replace("Injured","<span class='filter__value'>Injured</span>")),i[l].includes("Healthy")&&(i[l]=i[l].replace("Healthy","<span class='filter__value'>Healthy</span>")),i[l].includes("Healing")&&(i[l]=i[l].replace("Healing","<span class='filter__value'>Healing</span>")),i[l].includes("Heals")&&(i[l]=i[l].replace("Heals","<span class='filter__value'>Heals</span>")),i[l].includes("Heal")&&(i[l]=i[l].replace("Heal","<span class='filter__value'>Heal</span>")),i[l].includes("Injured")&&(i[l]=i[l].replace("Injured","<span class='filter__value'>Injured</span>")),i[l].includes("Overpowering")&&(i[l]=i[l].replace("Overpowering","<span class='filter__value'>Overpowering</span>")),i[l].includes("Overpowers")&&(i[l]=i[l].replace("Overpowers","<span class='filter__value'>Overpowers</span>")),i[l].includes("Overpowered")&&(i[l]=i[l].replace("Overpowered","<span class='filter__value'>Overpowered</span>")),i[l].includes("Overpower")&&(i[l]=i[l].replace("Overpower","<span class='filter__value'>Overpower</span>")),i[l].includes("Pulled")&&(i[l]=i[l].replace("Pulled","<span class='filter__value'>Pulled</span>")),i[l].includes("Pulling")&&(i[l]=i[l].replace("Pulling","<span class='filter__value'>Pulling</span>")),i[l].includes("Pulls")&&(i[l]=i[l].replace("Pulls","<span class='filter__value'>Pulls</span>")),i[l].includes("Pull")&&(i[l]=i[l].replace("Pull","<span class='filter__value'>Pull</span>")),i[l].includes("Slows")&&(i[l]=i[l].replace("Slows","<span class='filter__value'>Slows</span>")),i[l].includes("Slowed")&&(i[l]=i[l].replace("Slowed","<span class='filter__value'>Slowed</span>")),i[l].includes("Slowing")&&(i[l]=i[l].replace("Slowing","<span class='filter__value'>Slowing</span>")),i[l].includes("Slow")&&(i[l]=i[l].replace("Slow","<span class='filter__value'>Slow</span>")),i[l].includes("Stealthed")&&(i[l]=i[l].replace("Stealthed","<span class='filter__value'>Stealthed</span>")),i[l].includes("Stealth")&&(i[l]=i[l].replace("Stealth","<span class='filter__value'>Stealth</span>")),i[l].includes("Thorns")&&(i[l]=i[l].replace("Thorns","<span class='filter__value'>Thorns</span>")),i[l].includes("Unstoppable")&&(i[l]=i[l].replace("Unstoppable","<span class='filter__value'>Unstoppable</span>")),i[l].includes("Immune")&&(i[l]=i[l].replace("Immune","<span class='filter__value'>Immune</span>"))}return i.join(" ").replace("Lucky Hit","<span class='filter__value'>Lucky Hit</span>").replace("Damage Reduction","<span class='filter__value'>Damage Reduction</span>").replace("Movement Speed","<span class='filter__value'>Movement Speed</span>").replace("Crackling Energy","<span class='filter__value'>Crackling Energy</span>").replace("Knocking Back","<span class='filter__value'>Knocking Back</span>").replace("Knocked Back","<span class='filter__value'>Knocked Back</span>").replace("Knocks Back","<span class='filter__value'>Knocks Back</span>").replace("Knock Back","<span class='filter__value'>Knock Back</span>").replace("Knocking Down","<span class='filter__value'>Knocking Down</span>").replace("Knocked Down","<span class='filter__value'>Knocked Down</span>").replace("Knocks Down","<span class='filter__value'>Knocks Down</span>").replace("Knock Down","<span class='filter__value'>Knock Down</span>")}}}]);