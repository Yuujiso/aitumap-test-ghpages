/*! For license information please see 514.94125480.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkaitumap_test_ghpages=self.webpackChunkaitumap_test_ghpages||[]).push([[514],{514:function(n,t,e){e.d(t,{Uv:function(){return gn},d$:function(){return mn}});var o=e(791),i=function(n,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},i(n,t)};var a=function(){return a=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},a.apply(this,arguments)};function r(n,t,e){if(e||2===arguments.length)for(var o,i=0,a=t.length;i<a;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return n.concat(o||t)}var s=function(n,t){return Number(n.toFixed(t))},u=function(n,t,e){e&&"function"===typeof e&&e(n,t)},l={easeOut:function(n){return-Math.cos(n*Math.PI)/2+.5},linear:function(n){return n},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return n*(2-n)},easeInOutQuad:function(n){return n<.5?2*n*n:(4-2*n)*n-1},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return--n*n*n+1},easeInOutCubic:function(n){return n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1- --n*n*n*n},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1+--n*n*n*n*n},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n}},c=function(n){"number"===typeof n&&cancelAnimationFrame(n)},p=function(n){n.mounted&&(c(n.animation),n.animate=!1,n.animation=null,n.velocity=null)};function d(n,t,e,o){if(n.mounted){var i=(new Date).getTime();p(n),n.animation=function(){if(!n.mounted)return c(n.animation);var a=(new Date).getTime()-i,r=(0,l[t])(a/e);a>=e?(o(1),n.animation=null):n.animation&&(o(r),requestAnimationFrame(n.animation))},requestAnimationFrame(n.animation)}}function f(n,t,e,o){var i=function(n){var t=n.scale,e=n.positionX,o=n.positionY;if(isNaN(t)||isNaN(e)||isNaN(o))return!1;return!0}(t);if(n.mounted&&i){var a=n.setTransformState,r=n.transformState,s=r.scale,u=r.positionX,l=r.positionY,c=t.scale-s,p=t.positionX-u,f=t.positionY-l;0===e?a(t.scale,t.positionX,t.positionY):d(n,o,e,(function(n){a(s+c*n,u+p*n,l+f*n)}))}}var m=function(n,t){var e=n.wrapperComponent,o=n.contentComponent,i=n.setup.centerZoomedOut;if(!e||!o)throw new Error("Components are not mounted");var a=function(n,t,e){var o=n.offsetWidth,i=n.offsetHeight,a=t.offsetWidth*e,r=t.offsetHeight*e;return{wrapperWidth:o,wrapperHeight:i,newContentWidth:a,newDiffWidth:o-a,newContentHeight:r,newDiffHeight:i-r}}(e,o,t),r=a.wrapperWidth,s=a.wrapperHeight,u=function(n,t,e,o,i,a,r){var s=n>t?e*(r?1:.5):0,u=o>i?a*(r?1:.5):0;return{minPositionX:n-t-s,maxPositionX:s,minPositionY:o-i-u,maxPositionY:u}}(r,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return u},v=function(n,t){var e=m(n,t);return n.bounds=e,e};function h(n,t,e,o,i,a,r){var s=e.minPositionX,u=e.minPositionY,l=e.maxPositionX,c=e.maxPositionY,p=0,d=0;return r&&(p=i,d=a),{x:g(n,s-p,l+p,o),y:g(t,u-d,c+d,o)}}var g=function(n,t,e,o){return s(o?n<t?t:n>e?e:n:n,2)};function y(n,t,e,o,i,a){var r=n.transformState,s=r.scale,u=r.positionX,l=r.positionY,c=o-s;return"number"!==typeof t||"number"!==typeof e?(console.error("Mouse X and Y position were not provided!"),{x:u,y:l}):h(u-t*c,l-e*c,i,a,0,0,null)}function S(n,t,e,o,i){var a=t-(i?o:0);return!isNaN(e)&&n>=e?e:!isNaN(t)&&n<=a?a:n}var w=function(n,t){var e=n.setup.panning.excluded,o=n.isInitialized,i=n.wrapperComponent,a=t.target,r=null===i||void 0===i?void 0:i.contains(a);return!!(o&&a&&r)&&!U(a,e)},P=function(n){var t=n.isInitialized,e=n.isPanning,o=n.setup.panning.disabled;return!(!t||!e||o)};var C=function(n,t){var e=n.setup,o=n.transformState.scale,i=e.minScale,a=e.disablePadding;return t>0&&o>=i&&!a?t:0};function T(n,t,e,o,i,a,r,s,u,l){if(i){var c;if(t>r&&e>r)return(c=r+(n-r)*l)>u?u:c<r?r:c;if(t<a&&e<a)return(c=a+(n-a)*l)<s?s:c>a?a:c}return o?t:g(n,a,r,i)}function b(n,t){var e=function(n){var t=n.mounted,e=n.setup,o=e.disabled,i=e.velocityAnimation,a=n.transformState.scale;return!(i.disabled&&!(a>1)&&o&&!t)}(n);if(e){var o=n.lastMousePosition,i=n.velocityTime,a=n.setup,r=n.wrapperComponent,s=a.velocityAnimation.equalToMove,u=Date.now();if(o&&i&&r){var l=function(n,t){return t?Math.min(1,n.offsetWidth/window.innerWidth):1}(r,s),c=t.x-o.x,p=t.y-o.y,d=c/l,f=p/l,m=u-i,v=c*c+p*p,h=Math.sqrt(v)/m;n.velocity={velocityX:d,velocityY:f,total:h}}n.lastMousePosition=t,n.velocityTime=u}}function Y(n,t){var e=n.transformState.scale;p(n),v(n,e),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(n,t){var e=t.touches,o=n.transformState,i=o.positionX,a=o.positionY;if(n.isPanning=!0,1===e.length){var r=e[0].clientX,s=e[0].clientY;n.startCoords={x:r-i,y:s-a}}}(n,t):function(n,t){var e=n.transformState,o=e.positionX,i=e.positionY;n.isPanning=!0;var a=t.clientX,r=t.clientY;n.startCoords={x:a-o,y:r-i}}(n,t)}function x(n,t,e){var o=n.startCoords,i=n.setup.alignmentAnimation,a=i.sizeX,r=i.sizeY;if(o){var s=function(n,t,e){var o=n.startCoords,i=n.transformState,a=n.setup.panning,r=a.lockAxisX,s=a.lockAxisY,u=i.positionX,l=i.positionY;if(!o)return{x:u,y:l};var c=t-o.x,p=e-o.y;return{x:r?u:c,y:s?l:p}}(n,t,e),u=s.x,l=s.y,c=C(n,a),p=C(n,r);b(n,{x:u,y:l}),function(n,t,e,o,i){var a=n.setup.limitToBounds,r=n.wrapperComponent,s=n.bounds,u=n.transformState,l=u.scale,c=u.positionX,p=u.positionY;if(null!==r&&null!==s&&(t!==c||e!==p)){var d=h(t,e,s,a,o,i,r),f=d.x,m=d.y;n.setTransformState(l,f,m)}}(n,u,l,c,p)}}function X(n){if(n.isPanning){var t=n.setup.panning.velocityDisabled,e=n.velocity,o=n.wrapperComponent,i=n.contentComponent;n.isPanning=!1,n.animate=!1,n.animation=null;var a=null===o||void 0===o?void 0:o.getBoundingClientRect(),r=null===i||void 0===i?void 0:i.getBoundingClientRect(),s=(null===a||void 0===a?void 0:a.width)||0,u=(null===a||void 0===a?void 0:a.height)||0,c=(null===r||void 0===r?void 0:r.width)||0,p=(null===r||void 0===r?void 0:r.height)||0,f=s<c||u<p;!t&&e&&(null===e||void 0===e?void 0:e.total)>.1&&f?function(n){var t=n.velocity,e=n.bounds,o=n.setup,i=n.wrapperComponent,a=function(n){var t=n.mounted,e=n.velocity,o=n.bounds,i=n.setup,a=i.disabled,r=i.velocityAnimation,s=n.transformState.scale;return!(r.disabled&&!(s>1)&&a&&!t)&&!(!e||!o)}(n);if(a&&t&&e&&i){var r=t.velocityX,s=t.velocityY,u=t.total,c=e.maxPositionX,p=e.minPositionX,f=e.maxPositionY,m=e.minPositionY,v=o.limitToBounds,h=o.alignmentAnimation,g=o.zoomAnimation,y=o.panning,S=y.lockAxisY,w=y.lockAxisX,P=g.animationType,b=h.sizeX,Y=h.sizeY,x=h.velocityAlignmentTime,X=function(n,t){var e=n.setup.velocityAnimation,o=e.equalToMove,i=e.animationTime,a=e.sensitivity;return o?i*t*a:i}(n,u),E=Math.max(X,x),z=C(n,b),D=C(n,Y),O=z*i.offsetWidth/100,W=D*i.offsetHeight/100,N=c+O,A=p-O,I=f+W,_=m-W,M=n.transformState,k=(new Date).getTime();d(n,P,E,(function(t){var e=n.transformState,o=e.scale,i=e.positionX,a=e.positionY,u=((new Date).getTime()-k)/x,d=1-(0,l[h.animationType])(Math.min(1,u)),g=1-t,y=i+r*g,P=a+s*g,C=T(y,M.positionX,i,w,v,p,c,A,N,d),b=T(P,M.positionY,a,S,v,m,f,_,I,d);i===y&&a===P||n.setTransformState(o,C,b)}))}}(n):E(n)}}function E(n){var t=n.transformState.scale,e=n.setup,o=e.minScale,i=e.alignmentAnimation,a=i.disabled,r=i.sizeX,s=i.sizeY,u=i.animationTime,l=i.animationType;if(!(a||t<o||!r&&!s)){var c=function(n){var t=n.transformState,e=t.positionX,o=t.positionY,i=t.scale,a=n.setup,r=a.disabled,s=a.limitToBounds,u=a.centerZoomedOut,l=n.wrapperComponent;if(!r&&l&&n.bounds){var c=n.bounds,p=c.maxPositionX,d=c.minPositionX,f=c.maxPositionY,m=c.minPositionY,v=e>p||e<d,h=o>f||o<m,g=y(n,e>p?l.offsetWidth:n.setup.minPositionX||0,o>f?l.offsetHeight:n.setup.minPositionY||0,i,n.bounds,s||u),S=g.x,w=g.y;return{scale:i,positionX:v?S:e,positionY:h?w:o}}}(n);c&&f(n,c,u,l)}}function z(n,t,e){var o=n.transformState.scale,i=n.wrapperComponent,a=n.setup,r=a.minScale,s=a.limitToBounds,u=a.zoomAnimation,l=u.disabled,c=u.animationTime,p=u.animationType,d=l||o>=r;if((o>=1||s)&&E(n),!d&&i&&n.mounted){var m=D(n,r,t||i.offsetWidth/2,e||i.offsetHeight/2);m&&f(n,m,c,p)}}function D(n,t,e,o){var i=n.setup,a=i.minScale,r=i.maxScale,u=i.limitToBounds,l=S(s(t,2),a,r,0,!1),c=y(n,e,o,l,v(n,l),u);return{scale:l,positionX:c.x,positionY:c.y}}var O={previousScale:1,scale:1,positionX:0,positionY:0},W=a(a({},O),{setComponents:function(){},contextInstance:null}),N={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,wheel:{step:.2,disabled:!1,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},A=function(n){var t,e,o,i;return{previousScale:null!==(t=n.initialScale)&&void 0!==t?t:O.scale,scale:null!==(e=n.initialScale)&&void 0!==e?e:O.scale,positionX:null!==(o=n.initialPositionX)&&void 0!==o?o:O.positionX,positionY:null!==(i=n.initialPositionY)&&void 0!==i?i:O.positionY}},I=function(n){var t=a({},N);return Object.keys(n).forEach((function(e){var o="undefined"!==typeof n[e];if("undefined"!==typeof N[e]&&o){var i=Object.prototype.toString.call(N[e]),s="[object Object]"===i,u="[object Array]"===i;t[e]=s?a(a({},N[e]),n[e]):u?r(r([],N[e]),n[e]):n[e]}})),t},_=function(n,t,e){var o=n.transformState.scale,i=n.wrapperComponent,a=n.setup,r=a.maxScale,u=a.minScale,l=a.zoomAnimation.size;if(!i)throw new Error("Wrapper is not mounted");var c=o*Math.exp(t*e);return S(s(c,3),u,r,l,!1)};function M(n,t,e,o,i){var a=n.wrapperComponent,r=n.transformState,s=r.scale,u=r.positionX,l=r.positionY;if(!a)return console.error("No WrapperComponent found");var c=(a.offsetWidth/2-u)/s,p=(a.offsetHeight/2-l)/s,d=D(n,_(n,t,e),c,p);if(!d)return console.error("Error during zoom event. New transformation state was not calculated.");f(n,d,o,i)}function k(n,t,e){var o=n.setup,i=n.wrapperComponent,a=o.limitToBounds,r=A(n.props),s=n.transformState,u=s.scale,l=s.positionX,c=s.positionY;if(i){var p=m(n,r.scale),d=h(r.positionX,r.positionY,p,a,0,0,i),v={scale:r.scale,positionX:d.x,positionY:d.y};u===r.scale&&l===r.positionX&&c===r.positionY||f(n,v,t,e)}}function K(n,t,e){var o=n.wrapperComponent,i=n.setup,a=i.limitToBounds,r=i.minScale,s=i.maxScale;if(!o)return O;var u=o.getBoundingClientRect(),l=function(n){var t=n,e=0,o=0;for(;t;)e+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent;return{x:e-window.scrollX,y:o-window.scrollY}}(t),c=l.x,p=l.y,d=t.offsetWidth,f=t.offsetHeight,v=o.offsetWidth/d,g=o.offsetHeight/f,y=S(e||Math.min(v,g),r,s,0,!1),w=(u.width-d*y)/2,P=(u.height-f*y)/2,C=h((u.left-c)*y+w,(u.top-p)*y+P,m(n,y),a,0,0,o);return{positionX:C.x,positionY:C.y,scale:y}}var B=function(n){return function(t,e,o){void 0===t&&(t=.5),void 0===e&&(e=300),void 0===o&&(o="easeOut"),M(n,1,t,e,o)}},L=function(n){return function(t,e,o){void 0===t&&(t=.5),void 0===e&&(e=300),void 0===o&&(o="easeOut"),M(n,-1,t,e,o)}},H=function(n){return function(t,e,o,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var r=n.transformState,s=r.positionX,u=r.positionY,l=r.scale,c=n.wrapperComponent,p=n.contentComponent;if(!n.setup.disabled&&c&&p){var d={positionX:isNaN(t)?s:t,positionY:isNaN(e)?u:e,scale:isNaN(o)?l:o};f(n,d,i,a)}}},j=function(n){return function(t,e){void 0===t&&(t=200),void 0===e&&(e="easeOut"),k(n,t,e)}},Z=function(n){return function(t,e,o){void 0===e&&(e=200),void 0===o&&(o="easeOut");var i=n.transformState,a=n.wrapperComponent,r=n.contentComponent;if(a&&r){var s=$(t||i.scale,a,r);f(n,s,e,o)}}},R=function(n){return function(t,e,o,i){void 0===o&&(o=600),void 0===i&&(i="easeOut"),p(n);var a=n.wrapperComponent,r="string"===typeof t?document.getElementById(t):t;if(a&&function(n){return n?void 0!==(null===n||void 0===n?void 0:n.offsetWidth)&&void 0!==(null===n||void 0===n?void 0:n.offsetHeight)||(console.error("Zoom node is not valid - it must contain offsetWidth and offsetHeight"),!1):(console.error("Zoom node not found"),!1)}(r)&&r&&a.contains(r)){var s=K(n,r,e);f(n,s,o,i)}}},F=function(n){return{instance:n,state:n.transformState,zoomIn:B(n),zoomOut:L(n),setTransform:H(n),resetTransform:j(n),centerView:Z(n),zoomToElement:R(n)}};function Q(){try{return{get passive(){return!0,!1}}}catch(n){return!1}}var U=function(n,t){var e=n.tagName.toUpperCase();return!!t.find((function(n){return n.toUpperCase()===e}))||!!t.find((function(t){return n.classList.contains(t)}))},q=function(n){n&&clearTimeout(n)},V=function(n,t,e){return"matrix3d("+e+", 0, 0, 0, 0, "+e+", 0, 0, 0, 0, 1, 0, "+n+", "+t+", 0, 1)"},$=function(n,t,e){var o=e.offsetWidth*n,i=e.offsetHeight*n;return{scale:n,positionX:(t.offsetWidth-o)/2,positionY:(t.offsetHeight-i)/2}},G=function(n,t){var e=n.setup.wheel,o=e.disabled,i=e.wheelDisabled,a=e.touchPadDisabled,r=e.excluded,s=n.isInitialized,u=n.isPanning,l=t.target;return!(!s||u||o||!l)&&(!(i&&!t.ctrlKey)&&((!a||!t.ctrlKey)&&!U(l,r)))};function J(n,t,e){var o=t.getBoundingClientRect(),i=0,a=0;if("clientX"in n)i=(n.clientX-o.left)/e,a=(n.clientY-o.top)/e;else{var r=n.touches[0];i=(r.clientX-o.left)/e,a=(r.clientY-o.top)/e}return(isNaN(i)||isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var nn=function(n,t){var e=n.setup.pinch,o=e.disabled,i=e.excluded,a=n.isInitialized,r=t.target;return!(!a||o||!r)&&!U(r,i)},tn=function(n){var t=n.setup.pinch.disabled,e=n.isInitialized,o=n.pinchStartDistance;return!(!e||t||!o)},en=function(n){return Math.sqrt(Math.pow(n.touches[0].pageX-n.touches[1].pageX,2)+Math.pow(n.touches[0].pageY-n.touches[1].pageY,2))},on=function(n,t){var e=n.props,o=e.onWheelStart,i=e.onZoomStart;n.wheelStopEventTimer||(p(n),u(F(n),t,o),u(F(n),t,i))},an=function(n,t){var e=n.props,o=e.onWheel,i=e.onZoom,a=n.contentComponent,r=n.setup,l=n.transformState.scale,c=r.limitToBounds,p=r.centerZoomedOut,d=r.zoomAnimation,f=r.wheel,m=r.disablePadding,h=d.size,g=d.disabled,w=f.step;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var P=function(n,t){var e,o,i=n?n.deltaY<0?1:-1:0;return o=i,"number"===typeof(e=t)?e:o}(t,null),C=function(n,t,e,o,i){var a=n.transformState.scale,r=n.wrapperComponent,u=n.setup,l=u.maxScale,c=u.minScale,p=u.zoomAnimation,d=u.disablePadding,f=p.size,m=p.disabled;if(!r)throw new Error("Wrapper is not mounted");var v=a+t*(a-a*e)*e;if(i)return v;var h=!o&&!m;return S(s(v,3),c,l,f,h&&!d)}(n,P,w,!t.ctrlKey);if(l!==C){var T=v(n,C),b=J(t,a,l),Y=c&&(g||0===h||p||m),x=y(n,b.x,b.y,C,T,Y),X=x.x,E=x.y;n.previousWheelEvent=t,n.setTransformState(C,X,E),u(F(n),t,o),u(F(n),t,i)}},rn=function(n,t){var e=n.props,o=e.onWheelStop,i=e.onZoomStop;q(n.wheelAnimationTimer),n.wheelAnimationTimer=setTimeout((function(){n.mounted&&(z(n,t.x,t.y),n.wheelAnimationTimer=null)}),100);var a=function(n,t){var e=n.previousWheelEvent,o=n.transformState.scale,i=n.setup,a=i.maxScale,r=i.minScale;return!!e&&(o<a||o>r||Math.sign(e.deltaY)!==Math.sign(t.deltaY)||e.deltaY>0&&e.deltaY<t.deltaY||e.deltaY<0&&e.deltaY>t.deltaY||Math.sign(e.deltaY)!==Math.sign(t.deltaY))}(n,t);a&&(q(n.wheelStopEventTimer),n.wheelStopEventTimer=setTimeout((function(){n.mounted&&(n.wheelStopEventTimer=null,u(F(n),t,o),u(F(n),t,i))}),160))},sn=function(n,t){var e=en(t);n.pinchStartDistance=e,n.lastDistance=e,n.pinchStartScale=n.transformState.scale,n.isPanning=!1,p(n)},un=function(n,t){var e=n.contentComponent,o=n.pinchStartDistance,i=n.transformState.scale,a=n.setup,r=a.limitToBounds,u=a.centerZoomedOut,l=a.zoomAnimation,c=l.disabled,p=l.size;if(null!==o&&e){var d=function(n,t,e){var o=e.getBoundingClientRect(),i=n.touches,a=s(i[0].clientX-o.left,5),r=s(i[0].clientY-o.top,5);return{x:(a+s(i[1].clientX-o.left,5))/2/t,y:(r+s(i[1].clientY-o.top,5))/2/t}}(t,i,e);if(isFinite(d.x)&&isFinite(d.y)){var f=en(t),m=function(n,t){var e=n.pinchStartScale,o=n.pinchStartDistance,i=n.setup,a=i.maxScale,r=i.minScale,u=i.zoomAnimation,l=i.disablePadding,c=u.size,p=u.disabled;if(!e||null===o||!t)throw new Error("Pinch touches distance was not provided");return t<0?n.transformState.scale:S(s(t/o*e,2),r,a,c,!p&&!l)}(n,f);if(m!==i){var h=v(n,m),g=r&&(c||0===p||u),w=y(n,d.x,d.y,m,h,g),P=w.x,C=w.y;n.pinchMidpoint=d,n.lastDistance=f,n.setTransformState(m,P,C)}}}},ln=function(n){var t=n.pinchMidpoint;n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,z(n,null===t||void 0===t?void 0:t.x,null===t||void 0===t?void 0:t.y)};function cn(n,t){var e=n.setup.doubleClick,o=e.disabled,i=e.mode,a=e.step,r=e.animationTime,s=e.animationType;if(!o){if("reset"===i)return k(n,r,s);var u=n.transformState.scale,l=n.contentComponent;if(!l)return console.error("No ContentComponent found");var c=_(n,"zoomOut"===i?-1:1,a),p=J(t,l,u),d=D(n,c,p.x,p.y);if(!d)return console.error("Error during zoom event. New transformation state was not calculated.");f(n,d,r,s)}}var pn=function(n,t){var e=n.isInitialized,o=n.setup,i=n.wrapperComponent,a=o.doubleClick,r=a.disabled,s=a.excluded,u=t.target,l=null===i||void 0===i?void 0:i.contains(u),c=e&&u&&l&&!r;return!!c&&(!U(u,s)&&!!c)},dn=o.createContext(W),fn=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.mounted=!0,t.transformState=A(t.props),t.setup=I(t.props),t.wrapperComponent=null,t.contentComponent=null,t.isInitialized=!1,t.bounds=null,t.previousWheelEvent=null,t.wheelStopEventTimer=null,t.wheelAnimationTimer=null,t.isPanning=!1,t.startCoords=null,t.lastTouch=null,t.distance=null,t.lastDistance=null,t.pinchStartDistance=null,t.pinchStartScale=null,t.pinchMidpoint=null,t.velocity=null,t.velocityTime=null,t.lastMousePosition=null,t.animate=!1,t.animation=null,t.maxBounds=null,t.pressedKeys={},t.initializeWindowEvents=function(){var n,e=Q(),o=null===(n=t.wrapperComponent)||void 0===n?void 0:n.ownerDocument,i=null===o||void 0===o?void 0:o.defaultView;null===i||void 0===i||i.addEventListener("mousedown",t.onPanningStart,e),null===i||void 0===i||i.addEventListener("mousemove",t.onPanning,e),null===i||void 0===i||i.addEventListener("mouseup",t.onPanningStop,e),null===o||void 0===o||o.addEventListener("mouseleave",t.clearPanning,e),null===i||void 0===i||i.addEventListener("keyup",t.setKeyUnPressed,e),null===i||void 0===i||i.addEventListener("keydown",t.setKeyPressed,e),t.handleRef()},t.cleanupWindowEvents=function(){var n,e=Q(),o=null===(n=t.wrapperComponent)||void 0===n?void 0:n.ownerDocument,i=null===o||void 0===o?void 0:o.defaultView;null===i||void 0===i||i.removeEventListener("mousedown",t.onPanningStart,e),null===i||void 0===i||i.removeEventListener("mousemove",t.onPanning,e),null===i||void 0===i||i.removeEventListener("mouseup",t.onPanningStop,e),null===o||void 0===o||o.removeEventListener("mouseleave",t.clearPanning,e),null===i||void 0===i||i.removeEventListener("keyup",t.setKeyUnPressed,e),null===i||void 0===i||i.removeEventListener("keydown",t.setKeyPressed,e),document.removeEventListener("mouseleave",t.clearPanning,e),p(t)},t.handleInitializeWrapperEvents=function(n){var e=Q();n.addEventListener("wheel",t.onWheelZoom,e),n.addEventListener("dblclick",t.onDoubleClick,e),n.addEventListener("touchstart",t.onTouchPanningStart,e),n.addEventListener("touchmove",t.onTouchPanning,e),n.addEventListener("touchend",t.onTouchPanningStop,e)},t.handleInitialize=function(){var n=t.setup.centerOnInit;t.applyTransformation(),t.forceUpdate(),n&&(setTimeout((function(){t.mounted&&t.setCenter()}),50),setTimeout((function(){t.mounted&&t.setCenter()}),100),setTimeout((function(){t.mounted&&t.setCenter()}),200))},t.onWheelZoom=function(n){t.setup.disabled||G(t,n)&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(on(t,n),an(t,n),rn(t,n))},t.onPanningStart=function(n){var e=t.setup.disabled,o=t.props.onPanningStart;e||w(t,n)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(n.preventDefault(),n.stopPropagation(),p(t),Y(t,n),u(F(t),n,o))},t.onPanning=function(n){var e=t.setup.disabled,o=t.props.onPanning;e||P(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(n.preventDefault(),n.stopPropagation(),x(t,n.clientX,n.clientY),u(F(t),n,o))},t.onPanningStop=function(n){var e=t.props.onPanningStop;t.isPanning&&(X(t),u(F(t),n,e))},t.onPinchStart=function(n){var e=t.setup.disabled,o=t.props,i=o.onPinchingStart,a=o.onZoomStart;e||nn(t,n)&&(sn(t,n),p(t),u(F(t),n,i),u(F(t),n,a))},t.onPinch=function(n){var e=t.setup.disabled,o=t.props,i=o.onPinching,a=o.onZoom;e||tn(t)&&(n.preventDefault(),n.stopPropagation(),un(t,n),u(F(t),n,i),u(F(t),n,a))},t.onPinchStop=function(n){var e=t.props,o=e.onPinchingStop,i=e.onZoomStop;t.pinchStartScale&&(ln(t),u(F(t),n,o),u(F(t),n,i))},t.onTouchPanningStart=function(n){var e=t.setup.disabled,o=t.props.onPanningStart;if(!e&&w(t,n))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===n.touches.length)t.onDoubleClick(n);else{t.lastTouch=+new Date,p(t);var i=n.touches,a=1===i.length,r=2===i.length;a&&(p(t),Y(t,n),u(F(t),n,o)),r&&t.onPinchStart(n)}},t.onTouchPanning=function(n){var e=t.setup.disabled,o=t.props.onPanning;if(t.isPanning&&1===n.touches.length){if(e)return;if(!P(t))return;n.preventDefault(),n.stopPropagation();var i=n.touches[0];x(t,i.clientX,i.clientY),u(F(t),n,o)}else n.touches.length>1&&t.onPinch(n)},t.onTouchPanningStop=function(n){t.onPanningStop(n),t.onPinchStop(n)},t.onDoubleClick=function(n){t.setup.disabled||pn(t,n)&&cn(t,n)},t.clearPanning=function(n){t.isPanning&&t.onPanningStop(n)},t.setKeyPressed=function(n){t.pressedKeys[n.key]=!0},t.setKeyUnPressed=function(n){t.pressedKeys[n.key]=!1},t.isPressingKeys=function(n){return!n.length||Boolean(n.find((function(n){return t.pressedKeys[n]})))},t.setComponents=function(n,e){t.cleanupWindowEvents(),t.wrapperComponent=n,t.contentComponent=e,v(t,t.transformState.scale),t.handleInitializeWrapperEvents(n),t.initializeWindowEvents(),t.handleInitialize(),t.handleRef(),t.isInitialized=!0,u(F(t),void 0,t.props.onInit)},t.setTransformState=function(n,e,o){var i=t.props.onTransformed;isNaN(n)||isNaN(e)||isNaN(o)?console.error("Detected NaN set state values"):(n!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=n),t.transformState.positionX=e,t.transformState.positionY=o,u(F(t),{scale:n,positionX:e,positionY:o},i),t.applyTransformation())},t.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var n=$(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(n.scale,n.positionX,n.positionY)}},t.applyTransformation=function(){if(t.mounted&&t.contentComponent){var n=t.transformState,e=n.scale,o=n.positionX,i=n.positionY,a=V(o,i,e);t.contentComponent.style.transform=a,t.handleRef()}},t.handleRef=function(){t.props.setRef(F(t))},t}return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}(t,n),t.prototype.componentDidMount=function(){this.initializeWindowEvents()},t.prototype.componentWillUnmount=function(){this.cleanupWindowEvents()},t.prototype.componentDidUpdate=function(n){n!==this.props&&(v(this,this.transformState.scale),this.setup=I(this.props))},t.prototype.render=function(){var n=F(this),t=this.props.children,e="function"===typeof t?t(n):t;return o.createElement(dn.Provider,{value:a(a({},this.transformState),{setComponents:this.setComponents,contextInstance:this})},e)},t}(o.Component),mn=o.forwardRef((function(n,t){var e=(0,o.useState)(null),i=e[0],r=e[1];return(0,o.useImperativeHandle)(t,(function(){return i}),[i]),o.createElement(fn,a({},n,{setRef:r}))}));var vn="transform-component-module_wrapper__1_Fgj",hn="transform-component-module_content__2jYgh";!function(n,t){void 0===t&&(t={});var e=t.insertAt;if(n&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}(".transform-component-module_wrapper__1_Fgj {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__2jYgh {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__2jYgh img {\n  pointer-events: none;\n}\n");var gn=function(n){var t=n.children,e=n.wrapperClass,i=void 0===e?"":e,a=n.contentClass,r=void 0===a?"":a,s=n.wrapperStyle,u=n.contentStyle,l=(0,o.useContext)(dn).setComponents,c=(0,o.useRef)(null),p=(0,o.useRef)(null);return(0,o.useEffect)((function(){var n=c.current,t=p.current;null!==n&&null!==t&&l&&l(n,t)}),[]),o.createElement("div",{ref:c,className:"react-transform-wrapper "+vn+" "+i,style:s},o.createElement("div",{ref:p,className:"react-transform-component "+hn+" "+r,style:u},t))}}}]);
//# sourceMappingURL=514.94125480.chunk.js.map