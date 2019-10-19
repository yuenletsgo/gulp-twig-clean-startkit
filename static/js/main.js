/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.6",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",f="PAUSED",u=n.defaults,d=this,h=i.extend({},u,r),g=[],p=!1,v=0,m=f,w=!0,y=0,S=!0,b=function(){for(var e in h)u.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T);var t=parseInt(h.refreshInterval,10);h.refreshInterval=i.type.Number(t)?t:u.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=f),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var N=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=N(g),t.on("shift.controller_sort",function(){g=N(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=N(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",f=r.defaults,u=this,d=i.extend({},f,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)f.hasOwnProperty(e)||delete d[e];for(var t in f)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),u},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),u):u},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(u,new e.Event(i,t.namespace,u,n))})}return u},u.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&u.update())}).on("shift.internal",function(){S(),u.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(u),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(u),u.trigger("add",{controller:s}),u.update()),u},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,u.update(!0)),u):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(u),u.trigger("remove")}return u},this.destroy=function(e){return u.trigger("destroy",{reset:e}),u.remove(),u.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,u.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),u.progress(t)}else T&&h===l&&N(!0);else s.updateScene(u,!1);return u},this.refresh=function(){return b(),E(),u},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||N(),t){var o={progress:g,state:h,scrollDirection:r},f=h!=n,p=function(e){u.trigger(e,o)};f&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),f&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return u}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(u))&&!e&&(u.trigger("change",{what:t,newval:d[t]}),u.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&(r||v>0)){if(r)if(r.parentNode){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}else u.triggerElement(void 0);var f=n!=v;v=n,f&&!e&&u.trigger("shift",{reason:"triggerElementPosition"})}},x=function(){d.triggerHook>0&&u.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(n){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=f[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){u[e]||(u[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(u.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&u.trigger("shift",{reason:e})),u):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*u.triggerHook()),e};var T,A;u.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&N(),t&&O()}).on("progress.internal",function(){N()}).on("add.internal",function(){O()}).on("destroy.internal",function(e){u.removePin(e.reset)});var N=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&O()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),O());var f=i.get.offset(A.spacer,!0),u=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;f[t.vertical?"top":"left"]+=u,i.css(A.spacer.firstChild,{top:f.top,left:f.left})}}},O=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},_=function(){s&&T&&h===l&&!s.info("isDocument")&&N()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&O()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return u;if("fixed"===i.css(e,"position"))return u;if(T){if(T===e)return u;u.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var f=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(f,d),f.setAttribute(t,""),i.addClass(f,n.spacerClass),A={spacer:f,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(f,{width:c.width}),A.relSize.height&&i.css(f,{height:c.height}),f.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",_),window.addEventListener("resize",_),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),N(),u},this.removePin=function(e){if(T){if(h===l&&N(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"],a={};o.forEach(function(e){a[e]=r[e]||""}),i.css(n,a)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",_),window.removeEventListener("resize",_),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return u};var R,k=[];return u.on("destroy.internal",function(e){u.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&u.removeClassToggle(),R=t,k=n,u.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),u):u},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),u.off("start.internal_class end.internal_class"),R=void 0,k=[],u},w(),u};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t||!t.parentNode)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!u.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,f=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],f=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),f||(f=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=f.bind(e);var u=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};u.String=function(e){return"string"===u(e)},u.Function=function(e){return"function"===u(e)},u.Array=function(e){return Array.isArray(e)},u.Number=function(e){return!u.Array(e)&&e-parseFloat(e)+1>=0},u.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(u.String(t))try{t=document.querySelectorAll(t)}catch(r){return n}if("nodelist"===u(t)||u.Array(t))for(var i=0,o=n.length=t.length;o>i;i++){var s=t[i];n[i]=u.DomElement(s)?s:d.elements(s)}else(u.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(u.String(t))return i(e)[s(t)];if(u.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.0.2",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="2.0.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&(j=Math.max(0,Math.min(e.totalDuration(),(this.rawTime()-e._startTime)*e._timeScale)),Math.abs(j-e._totalTime)>1e-5&&e.render(j,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("./TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("TimelineMax");
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="2.0.2",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="2.0.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&(j=Math.max(0,Math.min(e.totalDuration(),(this.rawTime()-e._startTime)*e._timeScale)),Math.abs(j-e._totalTime)>1e-5&&e.render(j,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.0.2",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),
c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.0.2",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=("undefined"!=typeof window?window:O.defaultView||{getComputedStyle:function(){}}).getComputedStyle,_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u;
};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,"rotationZ"in A&&(A.rotation=A.rotationZ),E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",-1!==E.indexOf("%")&&(m.width=_(a,"width"),m.height=_(a,"height")),O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-10,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,Y){k||j.wake();var c=this.vars.useFrames?X:Y;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&$(),this.render(a,b,!1),K.length&&$())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio;
},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?W[H.defaultOverwrite]:"number"==typeof i?i>>0:W[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=_(f,this,!1),1===i&&this._siblings[e].length>1&&ba(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=_(b,this,!1),1===i&&this._siblings.length>1&&ba(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)V[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!S[c]||S[c]&&S[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.0.2",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},Q=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=P(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},R=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:P},S=H._plugins={},T=R.tweenLookup={},U=0,V=R.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},W={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},X=E._rootFramesTimeline=new G,Y=E._rootTimeline=new G,Z=30,$=R.lazyRender=function(){var a,b=K.length;for(L={};--b>-1;)a=K[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);K.length=0};Y._startTime=j.time,X._startTime=j.frame,Y._active=X._active=!0,setTimeout($,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&$(),Y.render((j.time-Y._startTime)*Y._timeScale,!1,!1),X.render((j.frame-X._startTime)*X._timeScale,!1,!1),K.length&&$(),j.frame>=Z){Z=j.frame+(parseInt(H.autoSleep,10)||120);for(c in T){for(b=T[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete T[c]}if(c=Y._first,(!c||c._paused)&&H.autoSleep&&!X._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var _=function(a,b,c){var d,e,f=a._gsTweenID;if(T[f||(a._gsTweenID=f="t"+U++)]||(T[f]={target:a,tweens:[]}),b&&(d=T[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return T[f].tweens},aa=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ba=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ca(b,0,o),0===ca(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!aa(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ca=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)V[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&$(),this.vars.css||b.style&&b!==a&&b.nodeType&&S.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],V[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(S[g]&&(j=new S[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=Q.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ba(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===n&&"isPause"!==this.data)&&j!==a&&(c=!0,j>n&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:n);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==n||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:n)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,m=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,K.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===n&&g!==n&&(this._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!aa(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){return this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(Math.min(0,-this._delay))),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=_(d[c],this,!0);else this._siblings=_(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=_(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var da=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=da.prototype},!0);if(i=da.prototype,da.version="1.19.0",da.API=2,i._firstPT=null,i._addTween=Q,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},da.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===da.API&&(S[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){da.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new da(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,da.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.  
 * The most basic requirement is `TweenLite`.
 * 
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        // Loads whole gsap package onto global scope.
        require('gsap');
        factory(require('scrollmagic'), TweenMax, TimelineMax);
    } else {
        // Browser globals
        factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
    }
}(this, function(ScrollMagic, Tween, Timeline) {
    "use strict";
    var NAMESPACE = "animation.gsap";

    // (BUILD) - REMOVE IN MINIFY - START
    var
        console = window.console || {},
        err = Function.prototype.bind.call(console.error || console.log || function() {}, console);
    if (!ScrollMagic) {
        err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
    }
    if (!Tween) {
        err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
    }
    // (BUILD) - REMOVE IN MINIFY - END
    
    /*
     * ----------------------------------------------------------------
     * Extensions for Scene
     * ----------------------------------------------------------------
     */
    /**
     * Every instance of ScrollMagic.Scene now accepts an additional option.  
     * See {@link ScrollMagic.Scene} for a complete list of the standard options.
     * @memberof! animation.GSAP#
     * @method new ScrollMagic.Scene(options)
     * @example
     * var scene = new ScrollMagic.Scene({tweenChanges: true});
     *
     * @param {object} [options] - Options for the Scene. The options can be updated at any time.
     * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
                                                      Does not affect animations where duration is `0`.
     */
    /**
     * **Get** or **Set** the tweenChanges option value.  
     * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
     * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
     * @memberof! animation.GSAP#
     * @method Scene.tweenChanges
     * 
     * @example
     * // get the current tweenChanges option
     * var tweenChanges = scene.tweenChanges();
     *
     * // set new tweenChanges option
     * scene.tweenChanges(true);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
     * @returns {boolean} `get` -  Current tweenChanges option value.
     * @returns {Scene} `set` -  Parent object for chaining.
     */
    // add option (TODO: DOC (private for dev))
    ScrollMagic.Scene.addOption(
        "tweenChanges", // name
        false, // default
        function (val) { // validation callback
            return !!val;
        }
    );
    // extend scene
    ScrollMagic.Scene.extend(function () {
        var Scene = this,
        _tween;

        // (BUILD) - REMOVE IN MINIFY - START
        var log = function () {
            if (Scene._log) { // not available, when main source minified
                Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                Scene._log.apply(this, arguments);
            }
        };
        // (BUILD) - REMOVE IN MINIFY - END

        // set listeners
        Scene.on("progress.plugin_gsap", function () {
            updateTweenProgress();
        });
        Scene.on("destroy.plugin_gsap", function (e) {
            Scene.removeTween(e.reset);
        });

        /**
         * Update the tween progress to current position.
         * @private
         */
        var updateTweenProgress = function () {
            if (_tween) {
                var
                    progress = Scene.progress(),
                    state = Scene.state();
                if (_tween.repeat && _tween.repeat() === -1) {
                    // infinite loop, so not in relation to progress
                    if (state === 'DURING' && _tween.paused()) {
                        _tween.play();
                    } else if (state !== 'DURING' && !_tween.paused()) {
                        _tween.pause();
                    }
                } else if (progress != _tween.progress()) { // do we even need to update the progress?
                    // no infinite loop - so should we just play or go to a specific point in time?
                    if (Scene.duration() === 0) {
                        // play the animation
                        if (progress > 0) { // play from 0 to 1
                            _tween.play();
                        } else { // play from 1 to 0
                            _tween.reverse();
                        }
                    } else {
                        // go to a specific point in time
                        if (Scene.tweenChanges() && _tween.tweenTo) {
                            // go smooth
                            _tween.tweenTo(progress * _tween.duration());
                        } else {
                            // just hard set it
                            _tween.progress(progress).pause();
                        }
                    }
                }
            }
        };

        /**
         * Add a tween to the scene.  
         * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
         * 
         * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
         * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
         * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
         *
         * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
         * @memberof! animation.GSAP#
         *
         * @example
         * // add a single tween directly
         * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
         *
         * // add a single tween via variable
         * var tween = TweenMax.to("obj"), 1, {x: 100};
         * scene.setTween(tween);
         *
         * // add multiple tweens, wrapped in a timeline.
         * var timeline = new TimelineMax();
         * var tween1 = TweenMax.from("obj1", 1, {x: 100});
         * var tween2 = TweenMax.to("obj2", 1, {y: 100});
         * timeline
         *      .add(tween1)
         *      .add(tween2);
         * scene.addTween(timeline);
         *
         * // short hand to add a TweenMax.to() tween
         * scene.setTween("obj3", 0.5, {y: 100});
         *
         * // short hand to add a TweenMax.to() tween for 1 second
         * // this is useful, when the scene has a duration and the tween duration isn't important anyway
         * scene.setTween("obj3", {y: 100});
         *
         * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
         * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
         * @param {object} params - The parameters for the tween
         * @returns {Scene} Parent object for chaining.
         */
        Scene.setTween = function (TweenObject, duration, params) {
            var newTween;
            if (arguments.length > 1) {
                if ( arguments.length < 3) {
                    params = duration;
                    duration = 1;
                }
                TweenObject = Tween.to(TweenObject, duration, params);
            }
            try {
                // wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
                if (Timeline) {
                    newTween = new Timeline({smoothChildTiming: true})
                        .add(TweenObject);
                } else {
                    newTween = TweenObject;
                }
                newTween.pause();
            } catch (e) {
                log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
                return Scene;
            }
            if (_tween) { // kill old tween?
                Scene.removeTween();
            }
            _tween = newTween;

            // some properties need to be transferred it to the wrapper, otherwise they would get lost.
            if (TweenObject.repeat && TweenObject.repeat() === -1) {// TweenMax or TimelineMax Object?
                _tween.repeat(-1);
                _tween.yoyo(TweenObject.yoyo());
            }
            // (BUILD) - REMOVE IN MINIFY - START
            // Some tween validations and debugging helpers

            if (Scene.tweenChanges() && !_tween.tweenTo) {
                log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
            }

            // check if there are position tweens defined for the trigger and warn about it :)
            if (_tween && Scene.controller()  && Scene.triggerElement() && Scene.loglevel() >= 2) {// controller is needed to know scroll direction.
                var
                    triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
                    vertical = Scene.controller().info("vertical");
                triggerTweens.forEach(function (value, index) {
                    var
                        tweenvars = value.vars.css || value.vars,
                        condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
                    if (condition) {
                        log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
                        return false;
                    }
                });
            }

            // warn about tween overwrites, when an element is tweened multiple times
            if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
                var
                    list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween], // get all nested tween objects
                    newCallback = function () {
                        log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
                    };
                for (var i=0, thisTween, oldCallback; i<list.length; i++) {
                    /*jshint loopfunc: true */
                    thisTween = list[i];
                    if (oldCallback !== newCallback) { // if tweens is added more than once
                        oldCallback = thisTween.vars.onOverwrite;
                        thisTween.vars.onOverwrite = function () {
                            if (oldCallback) {
                                oldCallback.apply(this, arguments);
                            }
                            newCallback.apply(this, arguments);
                        };
                    }
                }
            }
            // (BUILD) - REMOVE IN MINIFY - END
            log(3, "added tween");

            updateTweenProgress();
            return Scene;
        };

        /**
         * Remove the tween from the scene.  
         * This will terminate the control of the Scene over the tween.
         *
         * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
         * @memberof! animation.GSAP#
         *
         * @example
         * // remove the tween from the scene without resetting it
         * scene.removeTween();
         *
         * // remove the tween from the scene and reset it to initial position
         * scene.removeTween(true);
         *
         * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
         * @returns {Scene} Parent object for chaining.
         */
        Scene.removeTween = function (reset) {
            if (_tween) {
                if (reset) {
                    _tween.progress(0).pause();
                }
                _tween.kill();
                _tween = undefined;
                log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
            }
            return Scene;
        };

    });
}));
/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var n="animsition",i={init:function(a){a=t.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(t){window.location.href=t}},a),i.settings={timer:!1,data:{inClass:"animsition-in-class",inDuration:"animsition-in-duration",outClass:"animsition-out-class",outDuration:"animsition-out-duration",overlay:"animsition-overlay"},events:{inStart:"animsition.inStart",inEnd:"animsition.inEnd",outStart:"animsition.outStart",outEnd:"animsition.outEnd"}};var o=i.supportCheck.call(this,a);if(!o&&a.browser.length>0&&(!o||!this.length))return"console"in window||(window.console={},window.console.log=function(t){return t}),this.length||console.log("Animsition: Element does not exist on page."),o||console.log("Animsition: Does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,a);return e&&t("."+a.overlayClass).length<=0&&i.addOverlay.call(this,a),a.loading&&t("."+a.loadingClass).length<=0&&i.addLoading.call(this,a),this.each(function(){var o=this,e=t(this),s=t(window),r=t(document),l=e.data(n);l||(a=t.extend({},a),e.data(n,{options:a}),a.timeout&&i.addTimer.call(o),a.onLoadEvent&&s.on("load."+n,function(){i.settings.timer&&clearTimeout(i.settings.timer),i["in"].call(o)}),s.on("pageshow."+n,function(t){t.originalEvent.persisted&&i["in"].call(o)}),s.on("unload."+n,function(){}),r.on("click."+n,a.linkElement,function(n){n.preventDefault();var a=t(this),e=a.attr("href");2===n.which||n.metaKey||n.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&n.ctrlKey?window.open(e,"_blank"):i.out.call(o,a,e)}))})},addOverlay:function(n){t(n.overlayParentElement).prepend('<div class="'+n.overlayClass+'"></div>')},addLoading:function(n){t(n.loadingParentElement).append('<div class="'+n.loadingClass+'">'+n.loadingInner+"</div>")},removeLoading:function(){var i=t(this),a=i.data(n).options,o=t(a.loadingParentElement).children("."+a.loadingClass);o.fadeOut().remove()},addTimer:function(){var a=this,o=t(this),e=o.data(n).options;i.settings.timer=setTimeout(function(){i["in"].call(a),t(window).off("load."+n)},e.timeoutCountdown)},supportCheck:function(n){var i=t(this),a=n.browser,o=a.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(a[s])){e=!0;break}return e},optionCheck:function(n){var a,o=t(this);return a=n.overlay||o.data(i.settings.data.overlay)?!0:!1},animationCheck:function(i,a,o){var e=t(this),s=e.data(n).options,r=typeof i,l=!a&&"number"===r,d=a&&"string"===r&&i.length>0;return l||d?i=i:a&&o?i=s.inClass:!a&&o?i=s.inDuration:a&&!o?i=s.outClass:a||o||(i=s.outDuration),i},"in":function(){var a=this,o=t(this),e=o.data(n).options,s=o.data(i.settings.data.inDuration),r=o.data(i.settings.data.inClass),l=i.animationCheck.call(a,s,!1,!0),d=i.animationCheck.call(a,r,!0,!0),u=i.optionCheck.call(a,e),c=o.data(n).outClass;e.loading&&i.removeLoading.call(a),c&&o.removeClass(c),u?i.inOverlay.call(a,d,l):i.inDefault.call(a,d,l)},inDefault:function(n,a){var o=t(this);o.css({"animation-duration":a+"ms"}).addClass(n).trigger(i.settings.events.inStart).animateCallback(function(){o.removeClass(n).css({opacity:1}).trigger(i.settings.events.inEnd)})},inOverlay:function(a,o){var e=t(this),s=e.data(n).options;e.css({opacity:1}).trigger(i.settings.events.inStart),t(s.overlayParentElement).children("."+s.overlayClass).css({"animation-duration":o+"ms"}).addClass(a).animateCallback(function(){e.trigger(i.settings.events.inEnd)})},out:function(a,o){var e=this,s=t(this),r=s.data(n).options,l=a.data(i.settings.data.outClass),d=s.data(i.settings.data.outClass),u=a.data(i.settings.data.outDuration),c=s.data(i.settings.data.outDuration),m=l?l:d,g=u?u:c,f=i.animationCheck.call(e,m,!0,!1),v=i.animationCheck.call(e,g,!1,!1),h=i.optionCheck.call(e,r);s.data(n).outClass=f,h?i.outOverlay.call(e,f,v,o):i.outDefault.call(e,f,v,o)},outDefault:function(a,o,e){var s=t(this),r=s.data(n).options;s.css({"animation-duration":o+1+"ms"}).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){s.trigger(i.settings.events.outEnd),r.transition(e)})},outOverlay:function(a,o,e){var s=this,r=t(this),l=r.data(n).options,d=r.data(i.settings.data.inClass),u=i.animationCheck.call(s,d,!0,!0);t(l.overlayParentElement).children("."+l.overlayClass).css({"animation-duration":o+1+"ms"}).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){r.trigger(i.settings.events.outEnd),l.transition(e)})},destroy:function(){return this.each(function(){var i=t(this);t(window).off("."+n),i.css({opacity:1}).removeData(n)})}};t.fn.animateCallback=function(n){var i="animationend webkitAnimationEnd";return this.each(function(){var a=t(this);a.on(i,function(){return a.off(i),n.call(this)})})},t.fn.animsition=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void t.error("Method "+a+" does not exist on jQuery."+n):i.init.apply(this,arguments)}});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
	/*jshint eqeqeq:false curly:false latedef:false */
	"use strict";
	
		function setup($) {
			$.fn._fadeIn = $.fn.fadeIn;
	
			var noOp = $.noop || function() {};
	
			// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
			// confusing userAgent strings on Vista)
			var msie = /MSIE/.test(navigator.userAgent);
			var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
			var mode = document.documentMode || 0;
			var setExpr = $.isFunction( document.createElement('div').style.setExpression );
	
			// global $ methods for blocking/unblocking the entire page
			$.blockUI   = function(opts) { install(window, opts); };
			$.unblockUI = function(opts) { remove(window, opts); };
	
			// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
			$.growlUI = function(title, message, timeout, onClose) {
				var $m = $('<div class="growlUI"></div>');
				if (title) $m.append('<h1>'+title+'</h1>');
				if (message) $m.append('<h2>'+message+'</h2>');
				if (timeout === undefined) timeout = 3000;
	
				// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
				var callBlock = function(opts) {
					opts = opts || {};
	
					$.blockUI({
						message: $m,
						fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
						fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
						timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
						centerY: false,
						showOverlay: false,
						onUnblock: onClose,
						css: $.blockUI.defaults.growlCSS
					});
				};
	
				callBlock();
				var nonmousedOpacity = $m.css('opacity');
				$m.mouseover(function() {
					callBlock({
						fadeIn: 0,
						timeout: 30000
					});
	
					var displayBlock = $('.blockMsg');
					displayBlock.stop(); // cancel fadeout if it has started
					displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
				}).mouseout(function() {
					$('.blockMsg').fadeOut(1000);
				});
				// End konapun additions
			};
	
			// plugin method for blocking element content
			$.fn.block = function(opts) {
				if ( this[0] === window ) {
					$.blockUI( opts );
					return this;
				}
				var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
				this.each(function() {
					var $el = $(this);
					if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
						return;
					$el.unblock({ fadeOut: 0 });
				});
	
				return this.each(function() {
					if ($.css(this,'position') == 'static') {
						this.style.position = 'relative';
						$(this).data('blockUI.static', true);
					}
					this.style.zoom = 1; // force 'hasLayout' in ie
					install(this, opts);
				});
			};
	
			// plugin method for unblocking element content
			$.fn.unblock = function(opts) {
				if ( this[0] === window ) {
					$.unblockUI( opts );
					return this;
				}
				return this.each(function() {
					remove(this, opts);
				});
			};
	
			$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!
	
			// override these in your code to change the default behavior and style
			$.blockUI.defaults = {
				// message displayed when blocking (use null for no message)
				message:  '<h1>Please wait...</h1>',
	
				title: null,		// title string; only used when theme == true
				draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)
	
				theme: false, // set to true to use with jQuery UI themes
	
				// styles for the message when blocking; if you wish to disable
				// these and use an external stylesheet then do this in your code:
				// $.blockUI.defaults.css = {};
				css: {
					padding:	0,
					margin:		0,
					width:		'30%',
					top:		'40%',
					left:		'35%',
					textAlign:	'center',
					color:		'#000',
					border:		'3px solid #aaa',
					backgroundColor:'#fff',
					cursor:		'wait'
				},
	
				// minimal style set used when themes are used
				themedCSS: {
					width:	'30%',
					top:	'40%',
					left:	'35%'
				},
	
				// styles for the overlay
				overlayCSS:  {
					backgroundColor:	'#000',
					opacity:			0.6,
					cursor:				'wait'
				},
	
				// style to replace wait cursor before unblocking to correct issue
				// of lingering wait cursor
				cursorReset: 'default',
	
				// styles applied when using $.growlUI
				growlCSS: {
					width:		'350px',
					top:		'10px',
					left:		'',
					right:		'10px',
					border:		'none',
					padding:	'5px',
					opacity:	0.6,
					cursor:		'default',
					color:		'#fff',
					backgroundColor: '#000',
					'-webkit-border-radius':'10px',
					'-moz-border-radius':	'10px',
					'border-radius':		'10px'
				},
	
				// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
				// (hat tip to Jorge H. N. de Vasconcelos)
				/*jshint scripturl:true */
				iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',
	
				// force usage of iframe in non-IE browsers (handy for blocking applets)
				forceIframe: false,
	
				// z-index for the blocking overlay
				baseZ: 1000,
	
				// set these to true to have the message automatically centered
				centerX: true, // <-- only effects element blocking (page block controlled via css above)
				centerY: true,
	
				// allow body element to be stetched in ie6; this makes blocking look better
				// on "short" pages.  disable if you wish to prevent changes to the body height
				allowBodyStretch: true,
	
				// enable if you want key and mouse events to be disabled for content that is blocked
				bindEvents: true,
	
				// be default blockUI will supress tab navigation from leaving blocking content
				// (if bindEvents is true)
				constrainTabKey: true,
	
				// fadeIn time in millis; set to 0 to disable fadeIn on block
				fadeIn:  200,
	
				// fadeOut time in millis; set to 0 to disable fadeOut on unblock
				fadeOut:  400,
	
				// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
				timeout: 0,
	
				// disable if you don't want to show the overlay
				showOverlay: true,
	
				// if true, focus will be placed in the first available input field when
				// page blocking
				focusInput: true,
	
				// elements that can receive focus
				focusableElements: ':input:enabled:visible',
	
				// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
				// no longer needed in 2012
				// applyPlatformOpacityRules: true,
	
				// callback method invoked when fadeIn has completed and blocking message is visible
				onBlock: null,
	
				// callback method invoked when unblocking has completed; the callback is
				// passed the element that has been unblocked (which is the window object for page
				// blocks) and the options that were passed to the unblock call:
				//	onUnblock(element, options)
				onUnblock: null,
	
				// callback method invoked when the overlay area is clicked.
				// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
				onOverlayClick: null,
	
				// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
				quirksmodeOffsetHack: 4,
	
				// class name of the message block
				blockMsgClass: 'blockMsg',
	
				// if it is already blocked, then ignore it (don't unblock and reblock)
				ignoreIfBlocked: false
			};
	
			// private data and functions follow...
	
			var pageBlock = null;
			var pageBlockEls = [];
	
			function install(el, opts) {
				var css, themedCSS;
				var full = (el == window);
				var msg = (opts && opts.message !== undefined ? opts.message : undefined);
				opts = $.extend({}, $.blockUI.defaults, opts || {});
	
				if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
					return;
	
				opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
				css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
				if (opts.onOverlayClick)
					opts.overlayCSS.cursor = 'pointer';
	
				themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
				msg = msg === undefined ? opts.message : msg;
	
				// remove the current block (if there is one)
				if (full && pageBlock)
					remove(window, {fadeOut:0});
	
				// if an existing element is being used as the blocking content then we capture
				// its current place in the DOM (and current display style) so we can restore
				// it when we unblock
				if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
					var node = msg.jquery ? msg[0] : msg;
					var data = {};
					$(el).data('blockUI.history', data);
					data.el = node;
					data.parent = node.parentNode;
					data.display = node.style.display;
					data.position = node.style.position;
					if (data.parent)
						data.parent.removeChild(node);
				}
	
				$(el).data('blockUI.onUnblock', opts.onUnblock);
				var z = opts.baseZ;
	
				// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
				// layer1 is the iframe layer which is used to supress bleed through of underlying content
				// layer2 is the overlay layer which has opacity and a wait cursor (by default)
				// layer3 is the message content that is displayed while blocking
				var lyr1, lyr2, lyr3, s;
				if (msie || opts.forceIframe)
					lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
				else
					lyr1 = $('<div class="blockUI" style="display:none"></div>');
	
				if (opts.theme)
					lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
				else
					lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
	
				if (opts.theme && full) {
					s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
					if ( opts.title ) {
						s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
					}
					s += '<div class="ui-widget-content ui-dialog-content"></div>';
					s += '</div>';
				}
				else if (opts.theme) {
					s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
					if ( opts.title ) {
						s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
					}
					s += '<div class="ui-widget-content ui-dialog-content"></div>';
					s += '</div>';
				}
				else if (full) {
					s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
				}
				else {
					s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
				}
				lyr3 = $(s);
	
				// if we have a message, style it
				if (msg) {
					if (opts.theme) {
						lyr3.css(themedCSS);
						lyr3.addClass('ui-widget-content');
					}
					else
						lyr3.css(css);
				}
	
				// style the overlay
				if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
					lyr2.css(opts.overlayCSS);
				lyr2.css('position', full ? 'fixed' : 'absolute');
	
				// make iframe layer transparent in IE
				if (msie || opts.forceIframe)
					lyr1.css('opacity',0.0);
	
				//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
				var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
				$.each(layers, function() {
					this.appendTo($par);
				});
	
				if (opts.theme && opts.draggable && $.fn.draggable) {
					lyr3.draggable({
						handle: '.ui-dialog-titlebar',
						cancel: 'li'
					});
				}
	
				// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
				var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
				if (ie6 || expr) {
					// give body 100% height
					if (full && opts.allowBodyStretch && $.support.boxModel)
						$('html,body').css('height','100%');
	
					// fix ie6 issue when blocked element has a border width
					if ((ie6 || !$.support.boxModel) && !full) {
						var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
						var fixT = t ? '(0 - '+t+')' : 0;
						var fixL = l ? '(0 - '+l+')' : 0;
					}
	
					// simulate fixed position
					$.each(layers, function(i,o) {
						var s = o[0].style;
						s.position = 'absolute';
						if (i < 2) {
							if (full)
								s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
							else
								s.setExpression('height','this.parentNode.offsetHeight + "px"');
							if (full)
								s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
							else
								s.setExpression('width','this.parentNode.offsetWidth + "px"');
							if (fixL) s.setExpression('left', fixL);
							if (fixT) s.setExpression('top', fixT);
						}
						else if (opts.centerY) {
							if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
							s.marginTop = 0;
						}
						else if (!opts.centerY && full) {
							var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
							var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
							s.setExpression('top',expression);
						}
					});
				}
	
				// show the message
				if (msg) {
					if (opts.theme)
						lyr3.find('.ui-widget-content').append(msg);
					else
						lyr3.append(msg);
					if (msg.jquery || msg.nodeType)
						$(msg).show();
				}
	
				if ((msie || opts.forceIframe) && opts.showOverlay)
					lyr1.show(); // opacity is zero
				if (opts.fadeIn) {
					var cb = opts.onBlock ? opts.onBlock : noOp;
					var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
					var cb2 = msg ? cb : noOp;
					if (opts.showOverlay)
						lyr2._fadeIn(opts.fadeIn, cb1);
					if (msg)
						lyr3._fadeIn(opts.fadeIn, cb2);
				}
				else {
					if (opts.showOverlay)
						lyr2.show();
					if (msg)
						lyr3.show();
					if (opts.onBlock)
						opts.onBlock.bind(lyr3)();
				}
	
				// bind key and mouse events
				bind(1, el, opts);
	
				if (full) {
					pageBlock = lyr3[0];
					pageBlockEls = $(opts.focusableElements,pageBlock);
					if (opts.focusInput)
						setTimeout(focus, 20);
				}
				else
					center(lyr3[0], opts.centerX, opts.centerY);
	
				if (opts.timeout) {
					// auto-unblock
					var to = setTimeout(function() {
						if (full)
							$.unblockUI(opts);
						else
							$(el).unblock(opts);
					}, opts.timeout);
					$(el).data('blockUI.timeout', to);
				}
			}
	
			// remove the block
			function remove(el, opts) {
				var count;
				var full = (el == window);
				var $el = $(el);
				var data = $el.data('blockUI.history');
				var to = $el.data('blockUI.timeout');
				if (to) {
					clearTimeout(to);
					$el.removeData('blockUI.timeout');
				}
				opts = $.extend({}, $.blockUI.defaults, opts || {});
				bind(0, el, opts); // unbind events
	
				if (opts.onUnblock === null) {
					opts.onUnblock = $el.data('blockUI.onUnblock');
					$el.removeData('blockUI.onUnblock');
				}
	
				var els;
				if (full) // crazy selector to handle odd field errors in ie6/7
					els = $('body').children().filter('.blockUI').add('body > .blockUI');
				else
					els = $el.find('>.blockUI');
	
				// fix cursor issue
				if ( opts.cursorReset ) {
					if ( els.length > 1 )
						els[1].style.cursor = opts.cursorReset;
					if ( els.length > 2 )
						els[2].style.cursor = opts.cursorReset;
				}
	
				if (full)
					pageBlock = pageBlockEls = null;
	
				if (opts.fadeOut) {
					count = els.length;
					els.stop().fadeOut(opts.fadeOut, function() {
						if ( --count === 0)
							reset(els,data,opts,el);
					});
				}
				else
					reset(els, data, opts, el);
			}
	
			// move blocking element back into the DOM where it started
			function reset(els,data,opts,el) {
				var $el = $(el);
				if ( $el.data('blockUI.isBlocked') )
					return;
	
				els.each(function(i,o) {
					// remove via DOM calls so we don't lose event handlers
					if (this.parentNode)
						this.parentNode.removeChild(this);
				});
	
				if (data && data.el) {
					data.el.style.display = data.display;
					data.el.style.position = data.position;
					data.el.style.cursor = 'default'; // #59
					if (data.parent)
						data.parent.appendChild(data.el);
					$el.removeData('blockUI.history');
				}
	
				if ($el.data('blockUI.static')) {
					$el.css('position', 'static'); // #22
				}
	
				if (typeof opts.onUnblock == 'function')
					opts.onUnblock(el,opts);
	
				// fix issue in Safari 6 where block artifacts remain until reflow
				var body = $(document.body), w = body.width(), cssW = body[0].style.width;
				body.width(w-1).width(w);
				body[0].style.width = cssW;
			}
	
			// bind/unbind the handler
			function bind(b, el, opts) {
				var full = el == window, $el = $(el);
	
				// don't bother unbinding if there is nothing to unbind
				if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
					return;
	
				$el.data('blockUI.isBlocked', b);
	
				// don't bind events when overlay is not in use or if bindEvents is false
				if (!full || !opts.bindEvents || (b && !opts.showOverlay))
					return;
	
				// bind anchors and inputs for mouse and key events
				var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
				if (b)
					$(document).bind(events, opts, handler);
				else
					$(document).unbind(events, handler);
	
			// former impl...
			//		var $e = $('a,:input');
			//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
			}
	
			// event handler to suppress keyboard/mouse events when blocking
			function handler(e) {
				// allow tab navigation (conditionally)
				if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
					if (pageBlock && e.data.constrainTabKey) {
						var els = pageBlockEls;
						var fwd = !e.shiftKey && e.target === els[els.length-1];
						var back = e.shiftKey && e.target === els[0];
						if (fwd || back) {
							setTimeout(function(){focus(back);},10);
							return false;
						}
					}
				}
				var opts = e.data;
				var target = $(e.target);
				if (target.hasClass('blockOverlay') && opts.onOverlayClick)
					opts.onOverlayClick(e);
	
				// allow events within the message content
				if (target.parents('div.' + opts.blockMsgClass).length > 0)
					return true;
	
				// allow events for content that is not being blocked
				return target.parents().children().filter('div.blockUI').length === 0;
			}
	
			function focus(back) {
				if (!pageBlockEls)
					return;
				var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
				if (e)
					e.focus();
			}
	
			function center(el, x, y) {
				var p = el.parentNode, s = el.style;
				var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
				var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
				if (x) s.left = l > 0 ? (l+'px') : '0';
				if (y) s.top  = t > 0 ? (t+'px') : '0';
			}
	
			function sz(el, p) {
				return parseInt($.css(el,p),10)||0;
			}
	
		}
	
	
		/*global define:true */
		if (typeof define === 'function' && define.amd && define.amd.jQuery) {
			define(['jquery'], setup);
		} else {
			setup(jQuery);
		}
	
	})();
function CardJs(elem){this.elem=jQuery(elem),this.captureName=this.elem.data("capture-name")?this.elem.data("capture-name"):!1,this.iconColour=this.elem.data("icon-colour")?this.elem.data("icon-colour"):!1,this.stripe=this.elem.data("stripe")?this.elem.data("stripe"):!1,this.stripe&&(this.captureName=!1),this.initCardNumberInput(),this.initNameInput(),this.initExpiryMonthInput(),this.initExpiryYearInput(),this.initCvcInput(),this.elem.empty(),this.setupCardNumberInput(),this.setupNameInput(),this.setupExpiryInput(),this.setupCvcInput(),this.iconColour&&this.setIconColour(this.iconColour),this.refreshCreditCardTypeIcon()}!function($){var methods={init:function(){return this.data("cardjs",new CardJs(this)),this},cardNumber:function(){return this.data("cardjs").getCardNumber()},cardType:function(){return this.data("cardjs").getCardType()},name:function(){return this.data("cardjs").getName()},expiryMonth:function(){return this.data("cardjs").getExpiryMonth()},expiryYear:function(){return this.data("cardjs").getExpiryYear()},cvc:function(){return this.data("cardjs").getCvc()}};$.fn.CardJs=function(methodOrOptions){return methods[methodOrOptions]?methods[methodOrOptions].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof methodOrOptions&&methodOrOptions?void $.error("Method "+methodOrOptions+" does not exist on jQuery.CardJs"):methods.init.apply(this,arguments)}}(jQuery),$(function(){$(".card-js").each(function(i,obj){$(obj).CardJs()})}),CardJs.prototype.constructor=CardJs,CardJs.KEYS={0:48,9:57,NUMPAD_0:96,NUMPAD_9:105,DELETE:46,BACKSPACE:8,ARROW_LEFT:37,ARROW_RIGHT:39,ARROW_UP:38,ARROW_DOWN:40,HOME:36,END:35,TAB:9,A:65,X:88,C:67,V:86},CardJs.CREDIT_CARD_NUMBER_DEFAULT_MASK="XXXX XXXX XXXX XXXX",CardJs.CREDIT_CARD_NUMBER_VISA_MASK="XXXX XXXX XXXX XXXX",CardJs.CREDIT_CARD_NUMBER_MASTERCARD_MASK="XXXX XXXX XXXX XXXX",CardJs.CREDIT_CARD_NUMBER_DISCOVER_MASK="XXXX XXXX XXXX XXXX",CardJs.CREDIT_CARD_NUMBER_JCB_MASK="XXXX XXXX XXXX XXXX",CardJs.CREDIT_CARD_NUMBER_AMEX_MASK="XXXX XXXXXX XXXXX",CardJs.CREDIT_CARD_NUMBER_DINERS_MASK="XXXX XXXX XXXX XX",CardJs.prototype.creditCardNumberMask=CardJs.CREDIT_CARD_NUMBER_DEFAULT_MASK,CardJs.CREDIT_CARD_NUMBER_PLACEHOLDER="Card number",CardJs.NAME_PLACEHOLDER="Name on card",CardJs.EXPIRY_MASK="XX / XX",CardJs.EXPIRY_PLACEHOLDER="MM / YY",CardJs.EXPIRY_USE_DROPDOWNS=!1,CardJs.EXPIRY_NUMBER_OF_YEARS=10,CardJs.CVC_MASK_3="XXX",CardJs.CVC_MASK_4="XXXX",CardJs.CVC_PLACEHOLDER="CVC",CardJs.CREDIT_CARD_SVG='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="3px" width="24px" height="17px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><g><path class="svg" d="M182.385,14.258c-2.553-2.553-5.621-3.829-9.205-3.829H42.821c-3.585,0-6.653,1.276-9.207,3.829c-2.553,2.553-3.829,5.621-3.829,9.206v99.071c0,3.585,1.276,6.654,3.829,9.207c2.554,2.553,5.622,3.829,9.207,3.829H173.18c3.584,0,6.652-1.276,9.205-3.829s3.83-5.622,3.83-9.207V23.464C186.215,19.879,184.938,16.811,182.385,14.258z M175.785,122.536c0,0.707-0.258,1.317-0.773,1.834c-0.516,0.515-1.127,0.772-1.832,0.772H42.821c-0.706,0-1.317-0.258-1.833-0.773c-0.516-0.518-0.774-1.127-0.774-1.834V73h135.571V122.536z M175.785,41.713H40.214v-18.25c0-0.706,0.257-1.316,0.774-1.833c0.516-0.515,1.127-0.773,1.833-0.773H173.18c0.705,0,1.316,0.257,1.832,0.773c0.516,0.517,0.773,1.127,0.773,1.833V41.713z"/><rect class="svg" x="50.643" y="104.285" width="20.857" height="10.429"/><rect class="svg" x="81.929" y="104.285" width="31.286" height="10.429"/></g></svg>',CardJs.LOCK_SVG='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="3px" width="24px" height="17px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><path class="svg" d="M152.646,70.067c-1.521-1.521-3.367-2.281-5.541-2.281H144.5V52.142c0-9.994-3.585-18.575-10.754-25.745c-7.17-7.17-15.751-10.755-25.746-10.755s-18.577,3.585-25.746,10.755C75.084,33.567,71.5,42.148,71.5,52.142v15.644h-2.607c-2.172,0-4.019,0.76-5.54,2.281c-1.521,1.52-2.281,3.367-2.281,5.541v46.929c0,2.172,0.76,4.019,2.281,5.54c1.521,1.52,3.368,2.281,5.54,2.281h78.214c2.174,0,4.02-0.76,5.541-2.281c1.52-1.521,2.281-3.368,2.281-5.54V75.607C154.93,73.435,154.168,71.588,152.646,70.067z M128.857,67.786H87.143V52.142c0-5.757,2.037-10.673,6.111-14.746c4.074-4.074,8.989-6.11,14.747-6.11s10.673,2.036,14.746,6.11c4.073,4.073,6.11,8.989,6.11,14.746V67.786z"/></svg>',CardJs.CALENDAR_SVG='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><path class="svg" d="M172.691,23.953c-2.062-2.064-4.508-3.096-7.332-3.096h-10.428v-7.822c0-3.584-1.277-6.653-3.83-9.206c-2.554-2.553-5.621-3.83-9.207-3.83h-5.213c-3.586,0-6.654,1.277-9.207,3.83c-2.554,2.553-3.83,5.622-3.83,9.206v7.822H92.359v-7.822c0-3.584-1.277-6.653-3.83-9.206c-2.553-2.553-5.622-3.83-9.207-3.83h-5.214c-3.585,0-6.654,1.277-9.207,3.83c-2.553,2.553-3.83,5.622-3.83,9.206v7.822H50.643c-2.825,0-5.269,1.032-7.333,3.096s-3.096,4.509-3.096,7.333v104.287c0,2.823,1.032,5.267,3.096,7.332c2.064,2.064,4.508,3.096,7.333,3.096h114.714c2.824,0,5.27-1.032,7.332-3.096c2.064-2.064,3.096-4.509,3.096-7.332V31.286C175.785,28.461,174.754,26.017,172.691,23.953z M134.073,13.036c0-0.761,0.243-1.386,0.731-1.874c0.488-0.488,1.113-0.733,1.875-0.733h5.213c0.762,0,1.385,0.244,1.875,0.733c0.488,0.489,0.732,1.114,0.732,1.874V36.5c0,0.761-0.244,1.385-0.732,1.874c-0.49,0.488-1.113,0.733-1.875,0.733h-5.213c-0.762,0-1.387-0.244-1.875-0.733s-0.731-1.113-0.731-1.874V13.036z M71.501,13.036c0-0.761,0.244-1.386,0.733-1.874c0.489-0.488,1.113-0.733,1.874-0.733h5.214c0.761,0,1.386,0.244,1.874,0.733c0.488,0.489,0.733,1.114,0.733,1.874V36.5c0,0.761-0.244,1.386-0.733,1.874c-0.489,0.488-1.113,0.733-1.874,0.733h-5.214c-0.761,0-1.386-0.244-1.874-0.733c-0.488-0.489-0.733-1.113-0.733-1.874V13.036z M165.357,135.572H50.643V52.143h114.714V135.572z"/></svg>',CardJs.USER_SVG='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><g><path class="svg" d="M107.999,73c8.638,0,16.011-3.056,22.12-9.166c6.111-6.11,9.166-13.483,9.166-22.12c0-8.636-3.055-16.009-9.166-22.12c-6.11-6.11-13.484-9.165-22.12-9.165c-8.636,0-16.01,3.055-22.12,9.165c-6.111,6.111-9.166,13.484-9.166,22.12c0,8.637,3.055,16.01,9.166,22.12C91.99,69.944,99.363,73,107.999,73z"/><path class="svg" d="M165.07,106.037c-0.191-2.743-0.571-5.703-1.141-8.881c-0.57-3.178-1.291-6.124-2.16-8.84c-0.869-2.715-2.037-5.363-3.504-7.943c-1.466-2.58-3.15-4.78-5.052-6.6s-4.223-3.272-6.965-4.358c-2.744-1.086-5.772-1.63-9.085-1.63c-0.489,0-1.63,0.584-3.422,1.752s-3.815,2.472-6.069,3.911c-2.254,1.438-5.188,2.743-8.799,3.909c-3.612,1.168-7.237,1.752-10.877,1.752c-3.639,0-7.264-0.584-10.876-1.752c-3.611-1.166-6.545-2.471-8.799-3.909c-2.254-1.439-4.277-2.743-6.069-3.911c-1.793-1.168-2.933-1.752-3.422-1.752c-3.313,0-6.341,0.544-9.084,1.63s-5.065,2.539-6.966,4.358c-1.901,1.82-3.585,4.02-5.051,6.6s-2.634,5.229-3.503,7.943c-0.869,2.716-1.589,5.662-2.159,8.84c-0.571,3.178-0.951,6.137-1.141,8.881c-0.19,2.744-0.285,5.554-0.285,8.433c0,6.517,1.983,11.664,5.948,15.439c3.965,3.774,9.234,5.661,15.806,5.661h71.208c6.572,0,11.84-1.887,15.806-5.661c3.966-3.775,5.948-8.921,5.948-15.439C165.357,111.591,165.262,108.78,165.07,106.037z"/></g></svg>',CardJs.MAIL_SVG='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><path class="svg" d="M177.171,19.472c-2.553-2.553-5.622-3.829-9.206-3.829H48.036c-3.585,0-6.654,1.276-9.207,3.829C36.276,22.025,35,25.094,35,28.679v88.644c0,3.585,1.276,6.652,3.829,9.205c2.553,2.555,5.622,3.83,9.207,3.83h119.929c3.584,0,6.653-1.275,9.206-3.83c2.554-2.553,3.829-5.621,3.829-9.205V28.679C181,25.094,179.725,22.025,177.171,19.472zM170.57,117.321c0,0.706-0.258,1.317-0.774,1.833s-1.127,0.773-1.832,0.773H48.035c-0.706,0-1.317-0.257-1.833-0.773c-0.516-0.516-0.774-1.127-0.774-1.833V54.75c1.738,1.955,3.612,3.748,5.622,5.377c14.557,11.189,26.126,20.368,34.708,27.538c2.77,2.336,5.024,4.155,6.762,5.459s4.087,2.62,7.047,3.951s5.744,1.995,8.351,1.995H108h0.081c2.606,0,5.392-0.664,8.351-1.995c2.961-1.331,5.311-2.647,7.049-3.951c1.737-1.304,3.992-3.123,6.762-5.459c8.582-7.17,20.15-16.349,34.707-27.538c2.01-1.629,3.885-3.422,5.621-5.377V117.321z M170.57,30.797v0.896c0,3.204-1.262,6.776-3.787,10.713c-2.525,3.938-5.256,7.075-8.188,9.41c-10.484,8.257-21.373,16.865-32.672,25.827c-0.326,0.271-1.277,1.073-2.852,2.403c-1.574,1.331-2.824,2.351-3.748,3.056c-0.924,0.707-2.131,1.562-3.625,2.566s-2.865,1.752-4.114,2.24s-2.417,0.732-3.503,0.732H108h-0.082c-1.086,0-2.253-0.244-3.503-0.732c-1.249-0.488-2.621-1.236-4.114-2.24c-1.493-1.004-2.702-1.859-3.625-2.566c-0.923-0.705-2.173-1.725-3.748-3.056c-1.575-1.33-2.526-2.132-2.852-2.403c-11.297-8.962-22.187-17.57-32.67-25.827c-7.985-6.3-11.977-14.013-11.977-23.138c0-0.706,0.258-1.317,0.774-1.833c0.516-0.516,1.127-0.774,1.833-0.774h119.929c0.434,0.244,0.814,0.312,1.141,0.204c0.326-0.11,0.57,0.094,0.732,0.61c0.163,0.516,0.312,0.76,0.448,0.733c0.136-0.027,0.218,0.312,0.245,1.019c0.025,0.706,0.039,1.061,0.039,1.061V30.797z"/></svg>',CardJs.INFORMATION_SVG='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="4px" width="24px" height="16px" viewBox="0 0 216 146" enable-background="new 0 0 216 146" xml:space="preserve"><g><path class="svg" d="M97.571,41.714h20.859c1.411,0,2.633-0.516,3.666-1.548c1.031-1.031,1.547-2.254,1.547-3.666V20.857c0-1.412-0.516-2.634-1.549-3.667c-1.031-1.031-2.254-1.548-3.666-1.548H97.571c-1.412,0-2.634,0.517-3.666,1.548c-1.032,1.032-1.548,2.255-1.548,3.667V36.5c0,1.412,0.516,2.635,1.548,3.666C94.937,41.198,96.159,41.714,97.571,41.714z"/><path class="svg" d="M132.523,111.048c-1.031-1.032-2.254-1.548-3.666-1.548h-5.215V62.571c0-1.412-0.516-2.634-1.547-3.666c-1.033-1.032-2.255-1.548-3.666-1.548H87.143c-1.412,0-2.634,0.516-3.666,1.548c-1.032,1.032-1.548,2.254-1.548,3.666V73c0,1.412,0.516,2.635,1.548,3.666c1.032,1.032,2.254,1.548,3.666,1.548h5.215V109.5h-5.215c-1.412,0-2.634,0.516-3.666,1.548c-1.032,1.032-1.548,2.254-1.548,3.666v10.429c0,1.412,0.516,2.635,1.548,3.668c1.032,1.03,2.254,1.547,3.666,1.547h41.714c1.412,0,2.634-0.517,3.666-1.547c1.031-1.033,1.547-2.256,1.547-3.668v-10.429C134.07,113.302,133.557,112.08,132.523,111.048z"/></g></svg>',CardJs.keyCodeFromEvent=function(e){return e.which||e.keyCode},CardJs.keyIsCommandFromEvent=function(e){return e.ctrlKey||e.metaKey},CardJs.keyIsNumber=function(e){return CardJs.keyIsTopNumber(e)||CardJs.keyIsKeypadNumber(e)},CardJs.keyIsTopNumber=function(e){var keyCode=CardJs.keyCodeFromEvent(e);return keyCode>=CardJs.KEYS[0]&&keyCode<=CardJs.KEYS[9]},CardJs.keyIsKeypadNumber=function(e){var keyCode=CardJs.keyCodeFromEvent(e);return keyCode>=CardJs.KEYS.NUMPAD_0&&keyCode<=CardJs.KEYS.NUMPAD_9},CardJs.keyIsDelete=function(e){return CardJs.keyCodeFromEvent(e)==CardJs.KEYS.DELETE},CardJs.keyIsBackspace=function(e){return CardJs.keyCodeFromEvent(e)==CardJs.KEYS.BACKSPACE},CardJs.keyIsDeletion=function(e){return CardJs.keyIsDelete(e)||CardJs.keyIsBackspace(e)},CardJs.keyIsArrow=function(e){var keyCode=CardJs.keyCodeFromEvent(e);return keyCode>=CardJs.KEYS.ARROW_LEFT&&keyCode<=CardJs.KEYS.ARROW_DOWN},CardJs.keyIsNavigation=function(e){var keyCode=CardJs.keyCodeFromEvent(e);return keyCode==CardJs.KEYS.HOME||keyCode==CardJs.KEYS.END},CardJs.keyIsKeyboardCommand=function(e){var keyCode=CardJs.keyCodeFromEvent(e);return CardJs.keyIsCommandFromEvent(e)&&(keyCode==CardJs.KEYS.A||keyCode==CardJs.KEYS.X||keyCode==CardJs.KEYS.C||keyCode==CardJs.KEYS.V)},CardJs.keyIsTab=function(e){return CardJs.keyCodeFromEvent(e)==CardJs.KEYS.TAB},CardJs.copyAllElementAttributes=function(source,destination){$.each(source[0].attributes,function(idx,attr){destination.attr(attr.nodeName,attr.nodeValue)})},CardJs.numbersOnlyString=function(string){for(var numbersOnlyString="",i=0;i<string.length;i++){var currentChar=string.charAt(i),isValid=!isNaN(parseInt(currentChar));isValid&&(numbersOnlyString+=currentChar)}return numbersOnlyString},CardJs.applyFormatMask=function(string,mask){for(var formattedString="",numberPos=0,j=0;j<mask.length;j++){var currentMaskChar=mask[j];if("X"==currentMaskChar){var digit=string.charAt(numberPos);if(!digit)break;formattedString+=string.charAt(numberPos),numberPos++}else formattedString+=currentMaskChar}return formattedString},CardJs.cardTypeFromNumber=function(number){if(re=new RegExp("^30[0-5]"),null!=number.match(re))return"Diners - Carte Blanche";if(re=new RegExp("^(30[6-9]|36|38)"),null!=number.match(re))return"Diners";if(re=new RegExp("^35(2[89]|[3-8][0-9])"),null!=number.match(re))return"JCB";if(re=new RegExp("^3[47]"),null!=number.match(re))return"AMEX";if(re=new RegExp("^(4026|417500|4508|4844|491(3|7))"),null!=number.match(re))return"Visa Electron";var re=new RegExp("^4");return null!=number.match(re)?"Visa":(re=new RegExp("^5[1-5]"),null!=number.match(re)?"Mastercard":(re=new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"),null!=number.match(re)?"Discover":""))},CardJs.caretStartPosition=function(element){return"number"==typeof element.selectionStart?element.selectionStart:!1},CardJs.caretEndPosition=function(element){return"number"==typeof element.selectionEnd?element.selectionEnd:!1},CardJs.setCaretPosition=function(element,caretPos){if(null!=element)if(element.createTextRange){var range=element.createTextRange();range.move("character",caretPos),range.select()}else element.selectionStart?(element.focus(),element.setSelectionRange(caretPos,caretPos)):element.focus()},CardJs.normaliseCaretPosition=function(mask,caretPosition){var numberPos=0;if(0>caretPosition||caretPosition>mask.length)return 0;for(var i=0;i<mask.length;i++){if(i==caretPosition)return numberPos;"X"==mask[i]&&numberPos++}return numberPos},CardJs.denormaliseCaretPosition=function(mask,caretPosition){var numberPos=0;if(0>caretPosition||caretPosition>mask.length)return 0;for(var i=0;i<mask.length;i++){if(numberPos==caretPosition)return i;"X"==mask[i]&&numberPos++}return mask.length},CardJs.filterNumberOnlyKey=function(e){var isNumber=CardJs.keyIsNumber(e),isDeletion=CardJs.keyIsDeletion(e),isArrow=CardJs.keyIsArrow(e),isNavigation=CardJs.keyIsNavigation(e),isKeyboardCommand=CardJs.keyIsKeyboardCommand(e),isTab=CardJs.keyIsTab(e);isNumber||isDeletion||isArrow||isNavigation||isKeyboardCommand||isTab||e.preventDefault()},CardJs.digitFromKeyCode=function(keyCode){return keyCode>=CardJs.KEYS[0]&&keyCode<=CardJs.KEYS[9]?keyCode-CardJs.KEYS[0]:keyCode>=CardJs.KEYS.NUMPAD_0&&keyCode<=CardJs.KEYS.NUMPAD_9?keyCode-CardJs.KEYS.NUMPAD_0:null},CardJs.handleMaskedNumberInputKey=function(e,mask){CardJs.filterNumberOnlyKey(e);var keyCode=e.which||e.keyCode,element=e.target,caretStart=CardJs.caretStartPosition(element),caretEnd=CardJs.caretEndPosition(element),normalisedStartCaretPosition=CardJs.normaliseCaretPosition(mask,caretStart),normalisedEndCaretPosition=CardJs.normaliseCaretPosition(mask,caretEnd),newCaretPosition=caretStart,isNumber=CardJs.keyIsNumber(e),isDelete=CardJs.keyIsDelete(e),isBackspace=CardJs.keyIsBackspace(e);if(isNumber||isDelete||isBackspace){e.preventDefault();var rawText=$(element).val(),numbersOnly=CardJs.numbersOnlyString(rawText),digit=CardJs.digitFromKeyCode(keyCode),rangeHighlighted=normalisedEndCaretPosition>normalisedStartCaretPosition;rangeHighlighted&&(numbersOnly=numbersOnly.slice(0,normalisedStartCaretPosition)+numbersOnly.slice(normalisedEndCaretPosition)),caretStart!=mask.length&&(isNumber&&rawText.length<=mask.length&&(numbersOnly=numbersOnly.slice(0,normalisedStartCaretPosition)+digit+numbersOnly.slice(normalisedStartCaretPosition),newCaretPosition=Math.max(CardJs.denormaliseCaretPosition(mask,normalisedStartCaretPosition+1),CardJs.denormaliseCaretPosition(mask,normalisedStartCaretPosition+2)-1)),isDelete&&(numbersOnly=numbersOnly.slice(0,normalisedStartCaretPosition)+numbersOnly.slice(normalisedStartCaretPosition+1))),0!=caretStart&&isBackspace&&!rangeHighlighted&&(numbersOnly=numbersOnly.slice(0,normalisedStartCaretPosition-1)+numbersOnly.slice(normalisedStartCaretPosition),newCaretPosition=CardJs.denormaliseCaretPosition(mask,normalisedStartCaretPosition-1)),$(element).val(CardJs.applyFormatMask(numbersOnly,mask)),CardJs.setCaretPosition(element,newCaretPosition)}},CardJs.handleCreditCardNumberKey=function(e,cardMask){CardJs.handleMaskedNumberInputKey(e,cardMask)},CardJs.handleCreditCardNumberChange=function(e){},CardJs.handleExpiryKey=function(e){CardJs.handleMaskedNumberInputKey(e,CardJs.EXPIRY_MASK)},CardJs.prototype.getCardNumber=function(){return this.cardNumberInput.val()},CardJs.prototype.getCardType=function(){return CardJs.cardTypeFromNumber(this.getCardNumber())},CardJs.prototype.getName=function(){return this.nameInput.val()},CardJs.prototype.getExpiryMonth=function(){return this.expiryMonthInput.val()},CardJs.prototype.getExpiryYear=function(){return this.expiryYearInput.val()},CardJs.prototype.getCvc=function(){return this.cvcInput.val()},CardJs.prototype.setIconColour=function(colour){this.elem.find(".icon .svg").css({fill:colour})},CardJs.prototype.setIconColour=function(colour){this.elem.find(".icon .svg").css({fill:colour})},CardJs.prototype.refreshCreditCardTypeIcon=function(){this.setCardTypeIconFromNumber(CardJs.numbersOnlyString(this.cardNumberInput.val()))},CardJs.prototype.refreshCreditCardNumberFormat=function(){var numbersOnly=CardJs.numbersOnlyString($(this.cardNumberInput).val()),formattedNumber=CardJs.applyFormatMask(numbersOnly,this.creditCardNumberMask);$(this.cardNumberInput).val(formattedNumber)},CardJs.prototype.refreshExpiryMonthYearInput=function(){var numbersOnly=CardJs.numbersOnlyString($(this.expiryMonthYearInput).val()),formattedNumber=CardJs.applyFormatMask(numbersOnly,CardJs.EXPIRY_MASK);$(this.expiryMonthYearInput).val(formattedNumber)},CardJs.prototype.refreshCvc=function(){var numbersOnly=CardJs.numbersOnlyString($(this.cvcInput).val()),formattedNumber=CardJs.applyFormatMask(numbersOnly,this.creditCardNumberMask);$(this.cvcInput).val(formattedNumber)},CardJs.prototype.setCardTypeIconFromNumber=function(number){switch(CardJs.cardTypeFromNumber(number)){case"Visa Electron":case"Visa":this.setCardTypeAsVisa();break;case"Mastercard":this.setCardTypeAsMasterCard();break;case"AMEX":this.setCardTypeAsAmericanExpress();break;case"Discover":this.setCardTypeAsDiscover();break;case"Diners - Carte Blanche":case"Diners":this.setCardTypeAsDiners();break;case"JCB":this.setCardTypeAsJcb();break;default:this.clearCardType()}},CardJs.prototype.setCardMask=function(cardMask){this.creditCardNumberMask=cardMask,this.cardNumberInput.attr("maxlength",cardMask.length)},CardJs.prototype.setCvc3=function(){this.cvcInput.attr("maxlength",CardJs.CVC_MASK_3.length)},CardJs.prototype.setCvc4=function(){this.cvcInput.attr("maxlength",CardJs.CVC_MASK_4.length)},CardJs.prototype.clearCardTypeIcon=function(){this.elem.find(".card-number-wrapper .card-type-icon").removeClass("show")},CardJs.prototype.setCardTypeIconAsVisa=function(){this.elem.find(".card-number-wrapper .card-type-icon").attr("class","card-type-icon show visa")},CardJs.prototype.setCardTypeIconAsMasterCard=function(){this.elem.find(".card-number-wrapper .card-type-icon").attr("class","card-type-icon show master-card")},CardJs.prototype.setCardTypeIconAsAmericanExpress=function(){this.elem.find(".card-number-wrapper .card-type-icon").attr("class","card-type-icon show american-express")},CardJs.prototype.setCardTypeIconAsDiscover=function(){this.elem.find(".card-number-wrapper .card-type-icon").attr("class","card-type-icon show discover")},CardJs.prototype.setCardTypeIconAsDiners=function(){this.elem.find(".card-number-wrapper .card-type-icon").attr("class","card-type-icon show diners")},CardJs.prototype.setCardTypeIconAsJcb=function(){this.elem.find(".card-number-wrapper .card-type-icon").attr("class","card-type-icon show jcb")},CardJs.prototype.clearCardType=function(){this.clearCardTypeIcon(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_DEFAULT_MASK),this.setCvc3()},CardJs.prototype.setCardTypeAsVisa=function(){this.setCardTypeIconAsVisa(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_VISA_MASK),this.setCvc3()},CardJs.prototype.setCardTypeAsMasterCard=function(){this.setCardTypeIconAsMasterCard(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_MASTERCARD_MASK),this.setCvc3()},CardJs.prototype.setCardTypeAsAmericanExpress=function(){this.setCardTypeIconAsAmericanExpress(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_AMEX_MASK),this.setCvc4()},CardJs.prototype.setCardTypeAsDiscover=function(){this.setCardTypeIconAsDiscover(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_DISCOVER_MASK),this.setCvc3()},CardJs.prototype.setCardTypeAsDiners=function(){this.setCardTypeIconAsDiners(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_DINERS_MASK),this.setCvc3()},CardJs.prototype.setCardTypeAsJcb=function(){this.setCardTypeIconAsJcb(),this.setCardMask(CardJs.CREDIT_CARD_NUMBER_JCB_MASK),this.setCvc3()},CardJs.prototype.initCardNumberInput=function(){this.cardNumberInput=CardJs.detachOrCreateElement(this.elem,".card-number","<input class='card-number' />"),CardJs.elementHasAttribute(this.cardNumberInput,"name")||this.cardNumberInput.attr("name","card-number"),CardJs.elementHasAttribute(this.cardNumberInput,"placeholder")||this.cardNumberInput.attr("placeholder",CardJs.CREDIT_CARD_NUMBER_PLACEHOLDER),this.cardNumberInput.attr("type","tel"),this.cardNumberInput.attr("maxlength",this.creditCardNumberMask.length),this.cardNumberInput.attr("x-autocompletetype","cc-number"),this.cardNumberInput.attr("autocompletetype","cc-number"),this.cardNumberInput.attr("autocorrect","off"),this.cardNumberInput.attr("spellcheck","off"),this.cardNumberInput.attr("autocapitalize","off");var $this=this;this.cardNumberInput.keydown(function(e){CardJs.handleCreditCardNumberKey(e,$this.creditCardNumberMask)}),this.cardNumberInput.keyup(function(){$this.refreshCreditCardTypeIcon()}),this.cardNumberInput.on("paste",function(){setTimeout(function(){$this.refreshCreditCardNumberFormat(),$this.refreshCreditCardTypeIcon()},1)})},CardJs.prototype.initNameInput=function(){this.captureName=null!=this.elem.find(".name")[0],this.nameInput=CardJs.detachOrCreateElement(this.elem,".name","<input class='name' />"),CardJs.elementHasAttribute(this.nameInput,"name")||this.nameInput.attr("name","card-number"),CardJs.elementHasAttribute(this.nameInput,"placeholder")||this.nameInput.attr("placeholder",CardJs.NAME_PLACEHOLDER)},CardJs.prototype.initExpiryMonthInput=function(){this.expiryMonthInput=CardJs.detachOrCreateElement(this.elem,".expiry-month","<input class='expiry-month' />")},CardJs.prototype.initExpiryYearInput=function(){this.expiryYearInput=CardJs.detachOrCreateElement(this.elem,".expiry-year","<input class='expiry-year' />")},CardJs.prototype.initCvcInput=function(){this.cvcInput=CardJs.detachOrCreateElement(this.elem,".cvc","<input class='cvc' />"),CardJs.elementHasAttribute(this.cvcInput,"placeholder")||this.cvcInput.attr("placeholder",CardJs.CVC_PLACEHOLDER),this.cvcInput.attr("type","tel"),this.cvcInput.attr("maxlength",CardJs.CVC_MASK_3.length),this.cvcInput.attr("x-autocompletetype","cc-csc"),this.cvcInput.attr("autocompletetype","cc-csc"),this.cvcInput.attr("autocorrect","off"),this.cvcInput.attr("spellcheck","off"),this.cvcInput.attr("autocapitalize","off");var $this=this;this.cvcInput.keydown(CardJs.filterNumberOnlyKey),this.cvcInput.on("paste",function(){setTimeout(function(){$this.refreshCvc()},1)})},CardJs.prototype.setupCardNumberInput=function(){this.stripe&&this.cardNumberInput.attr("data-stripe","number"),this.elem.append("<div class='card-number-wrapper'></div>");var wrapper=this.elem.find(".card-number-wrapper");wrapper.append(this.cardNumberInput),wrapper.append("<div class='card-type-icon'></div>"),wrapper.append("<div class='icon'></div>"),wrapper.find(".icon").append(CardJs.CREDIT_CARD_SVG)},CardJs.prototype.setupNameInput=function(){if(this.captureName){this.elem.append("<div class='name-wrapper'></div>");var wrapper=this.elem.find(".name-wrapper");wrapper.append(this.nameInput),wrapper.append("<div class='icon'></div>"),wrapper.find(".icon").append(CardJs.USER_SVG)}},CardJs.prototype.setupExpiryInput=function(){this.elem.append("<div class='expiry-container'><div class='expiry-wrapper'></div></div>");var expiryInput,wrapper=this.elem.find(".expiry-wrapper");if(this.EXPIRY_USE_DROPDOWNS){expiryInput=$("<div></div>");var expiryMonthNew=$("<select><option value='any' selected='' hidden=''>MM</option><option value='1'>01</option><option value='2'>02</option><option value='3'>03</option><option value='4'>04</option><option value='5'>05</option><option value='6'>06</option><option value='7'>07</option><option value='8'>08</option><option value='9'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option></select>"),expiryMonthOld=this.expiryMonthInput;CardJs.copyAllElementAttributes(expiryMonthOld,expiryMonthNew),this.expiryMonthInput.remove(),this.expiryMonthInput=expiryMonthNew;for(var expiryYearNew=$("<select><option value='any' selected='' hidden=''>YY</option></select>"),currentYear=parseInt((new Date).getFullYear().toString().substring(2,4)),i=0;i<CardJs.EXPIRY_NUMBER_OF_YEARS;i++)expiryYearNew.append("<option value='"+currentYear+"'>"+currentYear+"</option>"),currentYear=(currentYear+1)%100;var expiryYearOld=this.expiryYearInput;CardJs.copyAllElementAttributes(expiryYearOld,expiryYearNew),this.expiryYearInput.remove(),this.expiryYearInput=expiryYearNew,expiryInput.append(this.expiryMonthInput),expiryInput.append(this.expiryYearInput)}else{expiryInput=$("<div></div>"),"hidden"!=this.expiryMonthInput.attr("type")&&this.expiryMonthInput.attr("type","hidden"),"hidden"!=this.expiryYearInput.attr("type")&&this.expiryYearInput.attr("type","hidden"),this.stripe&&(this.expiryMonthInput.attr("data-stripe","exp-month"),this.expiryYearInput.attr("data-stripe","exp-year")),this.expiryMonthYearInput=CardJs.detachOrCreateElement(this.elem,".expiry","<input class='expiry' />"),CardJs.elementHasAttribute(this.expiryMonthYearInput,"placeholder")||this.expiryMonthYearInput.attr("placeholder",CardJs.EXPIRY_PLACEHOLDER),this.expiryMonthYearInput.attr("type","tel"),this.expiryMonthYearInput.attr("maxlength",CardJs.EXPIRY_MASK.length),this.expiryMonthYearInput.attr("x-autocompletetype","cc-exp"),this.expiryMonthYearInput.attr("autocompletetype","cc-exp"),this.expiryMonthYearInput.attr("autocorrect","off"),this.expiryMonthYearInput.attr("spellcheck","off"),this.expiryMonthYearInput.attr("autocapitalize","off");var $this=this;this.expiryMonthYearInput.keydown(function(e){CardJs.handleExpiryKey(e);var val=$this.expiryMonthYearInput.val();1==val.length&&parseInt(val)>1&&CardJs.keyIsNumber(e)&&$this.expiryMonthYearInput.val(CardJs.applyFormatMask("0"+val,CardJs.EXPIRY_MASK)),$this.EXPIRY_USE_DROPDOWNS||null==$this.expiryMonthYearInput||($this.expiryMonthInput.val($this.expiryMonth()),$this.expiryYearInput.val(7==val.length?val.substr(5,2):null))}),this.expiryMonthYearInput.blur(function(){$this.refreshExpiryMonthValidation()}),this.expiryMonthYearInput.on("paste",function(){setTimeout(function(){$this.refreshExpiryMonthYearInput()},1)}),expiryInput.append(this.expiryMonthYearInput),expiryInput.append(this.expiryMonthInput),expiryInput.append(this.expiryYearInput)}wrapper.append(expiryInput),wrapper.append("<div class='icon'></div>"),wrapper.find(".icon").append(CardJs.CALENDAR_SVG)},CardJs.prototype.setupCvcInput=function(){this.stripe&&this.cvcInput.attr("data-stripe","cvc"),this.elem.append("<div class='cvc-container'><div class='cvc-wrapper'></div></div>");var wrapper=this.elem.find(".cvc-wrapper");wrapper.append(this.cvcInput),wrapper.append("<div class='icon'></div>"),wrapper.find(".icon").append(CardJs.LOCK_SVG)},CardJs.prototype.expiryMonth=function(){if(!this.EXPIRY_USE_DROPDOWNS&&null!=this.expiryMonthYearInput){var val=this.expiryMonthYearInput.val();return val.length>=2?parseInt(val.substr(0,2)):null}return null},CardJs.prototype.refreshExpiryMonthValidation=function(){CardJs.isExpiryValid(this.getExpiryMonth(),this.getExpiryYear())?this.setExpiryMonthAsValid():this.setExpiryMonthAsInvalid()},CardJs.prototype.setExpiryMonthAsValid=function(){this.EXPIRY_USE_DROPDOWNS||this.expiryMonthYearInput.parent().removeClass("has-error")},CardJs.prototype.setExpiryMonthAsInvalid=function(){this.EXPIRY_USE_DROPDOWNS||this.expiryMonthYearInput.parent().addClass("has-error")},CardJs.elementHasAttribute=function(element,attributeName){var attr=$(element).attr(attributeName);return"undefined"!=typeof attr&&attr!==!1},CardJs.detachOrCreateElement=function(parentElement,selector,html){var element=parentElement.find(selector);return element[0]?element.detach():element=$(html),element},CardJs.isValidMonth=function(expiryMonth){return expiryMonth>=1&&12>=expiryMonth},CardJs.isExpiryValid=function(month,year){var today=new Date,currentMonth=today.getMonth()+1,currentYear=""+today.getFullYear();return 2==(""+year).length&&(year=currentYear.substring(0,2)+""+year),currentMonth=parseInt(currentMonth),currentYear=parseInt(currentYear),month=parseInt(month),year=parseInt(year),CardJs.isValidMonth(month)&&(year>currentYear||year==currentYear&&month>=currentMonth)};
// Cart.js
// version: 0.4.1
// author: Gavin Ballard
// license: MIT
(function(){var a,b,c,d,e,f,g=function(a,b){return function(){return a.apply(b,arguments)}};b=function(){function a(){this.update=g(this.update,this)}return a.prototype.update=function(a){var b,c,e;for(c in a)e=a[c],"items"!==c&&(this[c]=e);return this.items=function(){var c,e,f,g;for(f=a.items,g=[],c=0,e=f.length;e>c;c++)b=f[c],g.push(new d(b));return g}()},a}(),d=function(){function a(a){this.propertyArray=g(this.propertyArray,this),this.update=g(this.update,this),this.update(a)}return a.prototype.update=function(a){var b,d;for(b in a)d=a[b],"properties"!==b&&(this[b]=d);return this.properties=c.Utils.extend({},a.properties)},a.prototype.propertyArray=function(){var a,b,c,d;c=this.properties,d=[];for(a in c)b=c[a],d.push({name:a,value:b});return d},a}(),c={settings:{debug:!1,dataAPI:!0,requestBodyClass:null,rivetsModels:{},currency:null,moneyFormat:null,moneyWithCurrencyFormat:null,weightUnit:"g",weightPrecision:0},cart:new b},c.init=function(a,b){return null==b&&(b={}),c.configure(b),c.Utils.log("Initialising CartJS."),c.cart.update(a),c.settings.dataAPI&&(c.Utils.log('"dataAPI" setting is true, initialising Data API.'),c.Data.init()),c.settings.requestBodyClass&&(c.Utils.log('"requestBodyClass" set, adding event listeners.'),jQuery(document).on("cart.requestStarted",function(){return jQuery("body").addClass(c.settings.requestBodyClass)}),jQuery(document).on("cart.requestComplete",function(){return jQuery("body").removeClass(c.settings.requestBodyClass)})),c.Rivets.init(),jQuery(document).trigger("cart.ready",[c.cart])},c.configure=function(a){return null==a&&(a={}),c.Utils.extend(c.settings,a)},null==window.console&&(window.console={},window.console.log=function(){}),c.Utils={log:function(){return c.Utils.console(console.log,arguments)},error:function(){return c.Utils.console(console.error,arguments)},console:function(a,b){return c.settings.debug&&"undefined"!=typeof console&&null!==console?(b=Array.prototype.slice.call(b),b.unshift("[CartJS]:"),a.apply(console,b)):void 0},wrapKeys:function(a,b,c){var d,e,f;null==b&&(b="properties"),f={};for(d in a)e=a[d],f[""+b+"["+d+"]"]=null!=c?c:e;return f},unwrapKeys:function(a,b,c){var d,e,f,g;null==b&&(b="properties"),e={};for(d in a)g=a[d],f=d.replace(""+b+"[","").replace("]",""),e[f]=null!=c?c:g;return e},extend:function(a,b){var c,d;for(c in b)d=b[c],a[c]=d;return a},clone:function(a){var b,c;if(null==a||"object"!=typeof a)return a;c=new a.constructor;for(b in a)c[b]=clone(a[b]);return c},isArray:Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},ensureArray:function(a){return c.Utils.isArray(a)?a:null!=a?[a]:[]},formatMoney:function(a,b,d,e){var f,g;return null==e&&(e=""),e||(e=c.settings.currency),null!=window.Currency&&e!==c.settings.currency&&(a=Currency.convert(a,c.settings.currency,e),null!=(null!=(f=window.Currency)?f.moneyFormats:void 0)&&e in window.Currency.moneyFormats&&(b=window.Currency.moneyFormats[e][d])),null!=(null!=(g=window.Shopify)?g.formatMoney:void 0)?Shopify.formatMoney(a,b):a},getSizedImageUrl:function(a,b){var c,d;return null!=(null!=(c=window.Shopify)&&null!=(d=c.Image)?d.getSizedImageUrl:void 0)?a?Shopify.Image.getSizedImageUrl(a,b):Shopify.Image.getSizedImageUrl("https://cdn.shopify.com/s/images/admin/no-image-.gif",b).replace("-_","-"):a?a:"https://cdn.shopify.com/s/images/admin/no-image-large.gif"}},f=[],e=!1,c.Queue={add:function(a,b,d){var g;return null==d&&(d={}),g={url:a,data:b,type:d.type||"POST",dataType:d.dataType||"json",success:c.Utils.ensureArray(d.success),error:c.Utils.ensureArray(d.error),complete:c.Utils.ensureArray(d.complete)},d.updateCart&&g.success.push(c.cart.update),f.push(g),e?void 0:(jQuery(document).trigger("cart.requestStarted",[c.cart]),c.Queue.process())},process:function(){var a;return f.length?(e=!0,a=f.shift(),a.complete=c.Queue.process,jQuery.ajax(a)):(e=!1,void jQuery(document).trigger("cart.requestComplete",[c.cart]))}},c.Core={getCart:function(a){return null==a&&(a={}),a.type="GET",a.updateCart=!0,c.Queue.add("/cart.js",{},a)},addItem:function(a,b,d,e){var f;return null==b&&(b=1),null==d&&(d={}),null==e&&(e={}),f=c.Utils.wrapKeys(d),f.id=a,f.quantity=b,c.Queue.add("/cart/add.js",f,e),c.Core.getCart()},updateItem:function(a,b,d,e){var f;return null==d&&(d={}),null==e&&(e={}),f=c.Utils.wrapKeys(d),f.line=a,null!=b&&(f.quantity=b),e.updateCart=!0,c.Queue.add("/cart/change.js",f,e)},removeItem:function(a,b){return null==b&&(b={}),c.Core.updateItem(a,0,{},b)},updateItemById:function(a,b,d,e){var f;return null==d&&(d={}),null==e&&(e={}),f=c.Utils.wrapKeys(d),f.id=a,null!=b&&(f.quantity=b),e.updateCart=!0,c.Queue.add("/cart/change.js",f,e)},updateItemQuantitiesById:function(a,b){return null==a&&(a={}),null==b&&(b={}),b.updateCart=!0,c.Queue.add("/cart/update.js",{updates:a},b)},removeItemById:function(a,b){var d;return null==b&&(b={}),d={id:a,quantity:0},b.updateCart=!0,c.Queue.add("/cart/change.js",d,b)},clear:function(a){return null==a&&(a={}),a.updateCart=!0,c.Queue.add("/cart/clear.js",{},a)},getAttribute:function(a,b){return a in c.cart.attributes?c.cart.attributes[a]:b},setAttribute:function(a,b,d){var e;return null==d&&(d={}),e={},e[a]=b,c.Core.setAttributes(e,d)},getAttributes:function(){return c.cart.attributes},setAttributes:function(a,b){return null==a&&(a={}),null==b&&(b={}),b.updateCart=!0,c.Queue.add("/cart/update.js",c.Utils.wrapKeys(a,"attributes"),b)},clearAttributes:function(a){return null==a&&(a={}),a.updateCart=!0,c.Queue.add("/cart/update.js",c.Utils.wrapKeys(c.Core.getAttributes(),"attributes",""),a)},getNote:function(){return c.cart.note},setNote:function(a,b){return null==b&&(b={}),b.updateCart=!0,c.Queue.add("/cart/update.js",{note:a},b)}},a=null,c.Data={init:function(){return a=jQuery(document),c.Data.setEventListeners("on"),c.Data.render(null,c.cart)},destroy:function(){return c.Data.setEventListeners("off")},setEventListeners:function(b){return a[b]("click","[data-cart-add]",c.Data.add),a[b]("click","[data-cart-remove]",c.Data.remove),a[b]("click","[data-cart-remove-id]",c.Data.removeById),a[b]("click","[data-cart-update]",c.Data.update),a[b]("click","[data-cart-update-id]",c.Data.updateById),a[b]("click","[data-cart-clear]",c.Data.clear),a[b]("change","[data-cart-toggle]",c.Data.toggle),a[b]("change","[data-cart-toggle-attribute]",c.Data.toggleAttribute),a[b]("submit","[data-cart-submit]",c.Data.submit),a[b]("cart.requestComplete",c.Data.render)},add:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.addItem(b.attr("data-cart-add"),b.attr("data-cart-quantity"))},remove:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.removeItem(b.attr("data-cart-remove"))},removeById:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.removeItemById(b.attr("data-cart-remove-id"))},update:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.updateItem(b.attr("data-cart-update"),b.attr("data-cart-quantity"))},updateById:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.updateItemById(b.attr("data-cart-update-id"),b.attr("data-cart-quantity"))},clear:function(a){return a.preventDefault(),c.Core.clear()},toggle:function(){var a,b;return a=jQuery(this),b=a.attr("data-cart-toggle"),a.is(":checked")?c.Core.addItem(b):c.Core.removeItemById(b)},toggleAttribute:function(){var a,b;return a=jQuery(this),b=a.attr("data-cart-toggle-attribute"),c.Core.setAttribute(b,a.is(":checked")?"Yes":"")},submit:function(a){var b,d,e,f;return a.preventDefault(),b=jQuery(this).serializeArray(),d=void 0,f=void 0,e={},jQuery.each(b,function(a,b){return"id"===b.name?d=b.value:"quantity"===b.name?f=b.value:b.name.match(/^properties\[\w+\]$/)?e[b.name]=b.value:void 0}),c.Core.addItem(d,f,c.Utils.unwrapKeys(e))},render:function(a,b){var d;return d={item_count:b.item_count,total_price:b.total_price,total_price_money:c.Utils.formatMoney(b.total_price,c.settings.moneyFormat,"money_format",null!=("undefined"!=typeof Currency&&null!==Currency?Currency.currentCurrency:void 0)?Currency.currentCurrency:void 0),total_price_money_with_currency:c.Utils.formatMoney(b.total_price,c.settings.moneyWithCurrencyFormat,"money_with_currency_format",null!=("undefined"!=typeof Currency&&null!==Currency?Currency.currentCurrency:void 0)?Currency.currentCurrency:void 0)},jQuery("[data-cart-render]").each(function(){var a;return a=jQuery(this),a.html(d[a.attr("data-cart-render")])})}},"rivets"in window?(c.Rivets={model:null,boundViews:[],init:function(){return c.Rivets.bindViews()},destroy:function(){return c.Rivets.unbindViews()},bindViews:function(){return c.Utils.log("Rivets.js is present, binding views."),c.Rivets.unbindViews(),c.Rivets.model=c.Utils.extend({cart:c.cart},c.settings.rivetsModels),null!=window.Currency&&(c.Rivets.model.Currency=window.Currency),jQuery("[data-cart-view]").each(function(){var a;return a=rivets.bind(jQuery(this),c.Rivets.model),c.Rivets.boundViews.push(a)})},unbindViews:function(){var a,b,d,e;for(e=c.Rivets.boundViews,b=0,d=e.length;d>b;b++)a=e[b],a.unbind();return c.Rivets.boundViews=[]}},rivets.formatters.eq=function(a,b){return a===b},rivets.formatters.includes=function(a,b){return a.indexOf(b)>=0},rivets.formatters.match=function(a,b,c){return a.match(new RegExp(b,c))},rivets.formatters.lt=function(a,b){return b>a},rivets.formatters.gt=function(a,b){return a>b},rivets.formatters.not=function(a){return!a},rivets.formatters.empty=function(a){return!a.length},rivets.formatters.plus=function(a,b){return parseInt(a)+parseInt(b)},rivets.formatters.minus=function(a,b){return parseInt(a)-parseInt(b)},rivets.formatters.times=function(a,b){return a*b},rivets.formatters.divided_by=function(a,b){return a/b},rivets.formatters.modulo=function(a,b){return a%b},rivets.formatters.prepend=function(a,b){return b+a},rivets.formatters.append=function(a,b){return a+b},rivets.formatters.slice=function(a,b,c){return a.slice(b,c)},rivets.formatters.pluralize=function(a,b,d){return null==d&&(d=b+"s"),c.Utils.isArray(a)&&(a=a.length),1===a?b:d},rivets.formatters.array_element=function(a,b){return a[b]},rivets.formatters.array_first=function(a){return a[0]},rivets.formatters.array_last=function(a){return a[a.length-1]},rivets.formatters.money=function(a,b){return c.Utils.formatMoney(a,c.settings.moneyFormat,"money_format",b)},rivets.formatters.money_with_currency=function(a,b){return c.Utils.formatMoney(a,c.settings.moneyWithCurrencyFormat,"money_with_currency_format",b)},rivets.formatters.weight=function(a){switch(c.settings.weightUnit){case"kg":return(a/1e3).toFixed(c.settings.weightPrecision);case"oz":return(.035274*a).toFixed(c.settings.weightPrecision);case"lb":return(.00220462*a).toFixed(c.settings.weightPrecision);default:return a.toFixed(c.settings.weightPrecision)}},rivets.formatters.weight_with_unit=function(a){return rivets.formatters.weight(a)+c.settings.weightUnit},rivets.formatters.product_image_size=function(a,b){return c.Utils.getSizedImageUrl(a,b)},rivets.formatters.moneyWithCurrency=rivets.formatters.money_with_currency,rivets.formatters.weightWithUnit=rivets.formatters.weight_with_unit,rivets.formatters.productImageSize=rivets.formatters.product_image_size):c.Rivets={init:function(){},destroy:function(){}},c.factory=function(a){return a.init=c.init,a.configure=c.configure,a.cart=c.cart,a.settings=c.settings,a.getCart=c.Core.getCart,a.addItem=c.Core.addItem,a.updateItem=c.Core.updateItem,a.updateItemById=c.Core.updateItemById,a.updateItemQuantitiesById=c.Core.updateItemQuantitiesById,a.removeItem=c.Core.removeItem,a.removeItemById=c.Core.removeItemById,a.clear=c.Core.clear,a.getAttribute=c.Core.getAttribute,a.setAttribute=c.Core.setAttribute,a.getAttributes=c.Core.getAttributes,a.setAttributes=c.Core.setAttributes,a.clearAttributes=c.Core.clearAttributes,a.getNote=c.Core.getNote,a.setNote=c.Core.setNote,a.render=c.Data.render},"object"==typeof exports?c.factory(exports):"function"==typeof define&&define.amd?define(["exports"],function(a){return c.factory(this.CartJS=a),a}):c.factory(this.CartJS={})}).call(this);
/*!
* Clamp.js 0.5.1
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/

(function(){
    /**
     * Clamps a text node.
     * @param {HTMLElement} element. Element containing the text node to clamp.
     * @param {Object} options. Options to pass to the clamper.
     */
    function clamp(element, options) {
        options = options || {};

        var self = this,
            win = window,
            opt = {
                clamp:              options.clamp || 2,
                useNativeClamp:     typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
                splitOnChars:       options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
                animate:            options.animate || false,
                truncationChar:     options.truncationChar || '…',
                truncationHTML:     options.truncationHTML
            },

            sty = element.style,
            originalText = element.innerHTML,

            supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
            clampValue = opt.clamp,
            isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
            truncationHTMLContainer;
            
        if (opt.truncationHTML) {
            truncationHTMLContainer = document.createElement('span');
            truncationHTMLContainer.innerHTML = opt.truncationHTML;
        }


// UTILITY FUNCTIONS __________________________________________________________

        /**
         * Return the current style for an element.
         * @param {HTMLElement} elem The element to compute.
         * @param {string} prop The style property.
         * @returns {number}
         */
        function computeStyle(elem, prop) {
            if (!win.getComputedStyle) {
                win.getComputedStyle = function(el, pseudo) {
                    this.el = el;
                    this.getPropertyValue = function(prop) {
                        var re = /(\-([a-z]){1})/g;
                        if (prop == 'float') prop = 'styleFloat';
                        if (re.test(prop)) {
                            prop = prop.replace(re, function () {
                                return arguments[2].toUpperCase();
                            });
                        }
                        return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
                    }
                    return this;
                }
            }

            return win.getComputedStyle(elem, null).getPropertyValue(prop);
        }

        /**
         * Returns the maximum number of lines of text that should be rendered based
         * on the current height of the element and the line-height of the text.
         */
        function getMaxLines(height) {
            var availHeight = height || element.clientHeight,
                lineHeight = getLineHeight(element);

            return Math.max(Math.floor(availHeight/lineHeight), 0);
        }

        /**
         * Returns the maximum height a given element should have based on the line-
         * height of the text and the given clamp value.
         */
        function getMaxHeight(clmp) {
            var lineHeight = getLineHeight(element);
            return lineHeight * clmp;
        }

        /**
         * Returns the line-height of an element as an integer.
         */
        function getLineHeight(elem) {
            var lh = computeStyle(elem, 'line-height');
            if (lh == 'normal') {
                // Normal line heights vary from browser to browser. The spec recommends
                // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
                lh = parseInt(computeStyle(elem, 'font-size')) * 1.2;
            }
            return parseInt(lh);
        }


// MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
        var splitOnChars = opt.splitOnChars.slice(0),
            splitChar = splitOnChars[0],
            chunks,
            lastChunk;
        
        /**
         * Gets an element's last child. That may be another node or a node's contents.
         */
        function getLastChild(elem) {
            //Current element has children, need to go deeper and get last child as a text node
            if (elem.lastChild.children && elem.lastChild.children.length > 0) {
                return getLastChild(Array.prototype.slice.call(elem.children).pop());
            }
            //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
            else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue == '' || elem.lastChild.nodeValue == opt.truncationChar) {
                elem.lastChild.parentNode.removeChild(elem.lastChild);
                return getLastChild(element);
            }
            //This is the last child we want, return it
            else {
                return elem.lastChild;
            }
        }
        
        /**
         * Removes one character at a time from the text until its width or
         * height is beneath the passed-in max param.
         */
        function truncate(target, maxHeight) {
            if (!maxHeight) {return;}
            
            /**
             * Resets global variables.
             */
            function reset() {
                splitOnChars = opt.splitOnChars.slice(0);
                splitChar = splitOnChars[0];
                chunks = null;
                lastChunk = null;
            }
            
            var nodeValue = target.nodeValue.replace(opt.truncationChar, '');
            
            //Grab the next chunks
            if (!chunks) {
                //If there are more characters to try, grab the next one
                if (splitOnChars.length > 0) {
                    splitChar = splitOnChars.shift();
                }
                //No characters to chunk by. Go character-by-character
                else {
                    splitChar = '';
                }
                
                chunks = nodeValue.split(splitChar);
            }
            
            //If there are chunks left to remove, remove the last one and see if
            // the nodeValue fits.
            if (chunks.length > 1) {
                // console.log('chunks', chunks);
                lastChunk = chunks.pop();
                // console.log('lastChunk', lastChunk);
                applyEllipsis(target, chunks.join(splitChar));
            }
            //No more chunks can be removed using this character
            else {
                chunks = null;
            }
            
            //Insert the custom HTML before the truncation character
            if (truncationHTMLContainer) {
                target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
                element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
            }

            //Search produced valid chunks
            if (chunks) {
                //It fits
                if (element.clientHeight <= maxHeight) {
                    //There's still more characters to try splitting on, not quite done yet
                    if (splitOnChars.length >= 0 && splitChar != '') {
                        applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
                        chunks = null;
                    }
                    //Finished!
                    else {
                        return element.innerHTML;
                    }
                }
            }
            //No valid chunks produced
            else {
                //No valid chunks even when splitting by letter, time to move
                //on to the next node
                if (splitChar == '') {
                    applyEllipsis(target, '');
                    target = getLastChild(element);
                    
                    reset();
                }
            }
            
            //If you get here it means still too big, let's keep truncating
            if (opt.animate) {
                setTimeout(function() {
                    truncate(target, maxHeight);
                }, opt.animate === true ? 10 : opt.animate);
            }
            else {
                return truncate(target, maxHeight);
            }
        }
        
        function applyEllipsis(elem, str) {
            elem.nodeValue = str + opt.truncationChar;
        }


// CONSTRUCTOR ________________________________________________________________

        if (clampValue == 'auto') {
            clampValue = getMaxLines();
        }
        else if (isCSSValue) {
            clampValue = getMaxLines(parseInt(clampValue));
        }

        var clampedText;
        if (supportsNativeClamp && opt.useNativeClamp) {
            sty.overflow = 'hidden';
            sty.textOverflow = 'ellipsis';
            sty.webkitBoxOrient = 'vertical';
            sty.display = '-webkit-box';
            sty.webkitLineClamp = clampValue;

            if (isCSSValue) {
                sty.height = opt.clamp + 'px';
            }
        }
        else {
            var height = getMaxHeight(clampValue);
            if (height <= element.clientHeight) {
                clampedText = truncate(getLastChild(element), height);
            }
        }
        
        return {
            'original': originalText,
            'clamped': clampedText
        }
    }

    window.$clamp = clamp;
})();
/*!
 * Datepicker v1.0.7
 * https://fengyuanchen.github.io/datepicker
 *
 * Copyright 2014-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-02-19T12:18:04.827Z
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,function(D){"use strict";function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}D=D&&D.hasOwnProperty("default")?D.default:D;var n={autoShow:!1,autoHide:!1,autoPick:!1,inline:!1,container:null,trigger:null,language:"",format:"mm/dd/yyyy",date:null,startDate:null,endDate:null,startView:0,weekStart:0,yearFirst:!1,yearSuffix:"",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],itemTag:"li",mutedClass:"muted",pickedClass:"picked",disabledClass:"disabled",highlightedClass:"highlighted",template:'<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',offset:10,zIndex:1e3,filter:null,show:null,hide:null,pick:null},t="undefined"!=typeof window,e=t?window:{},i=!!t&&"ontouchstart"in e.document.documentElement,c="datepicker",r="click.".concat(c),h="focus.".concat(c),o="hide.".concat(c),l="keyup.".concat(c),d="pick.".concat(c),a="resize.".concat(c),u="scroll.".concat(c),p="show.".concat(c),f="touchstart.".concat(c),g="".concat(c,"-hide"),y={},m=0,v=1,w=2,k=Object.prototype.toString;function b(t){return"string"==typeof t}var C=Number.isNaN||e.isNaN;function $(t){return"number"==typeof t&&!C(t)}function x(t){return void 0===t}function F(t){return"date"===(e=t,k.call(e).slice(8,-1).toLowerCase())&&!C(t.getTime());var e}function M(a,s){for(var t=arguments.length,n=new Array(2<t?t-2:0),e=2;e<t;e++)n[e-2]=arguments[e];return function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return a.apply(s,n.concat(e))}}function Y(t){return'[data-view="'.concat(t,'"]')}function G(t,e){return[31,(i=t,i%4==0&&i%100!=0||i%400==0?29:28),31,30,31,30,31,31,30,31,30,31][e];var i}function V(t,e,i){return Math.min(i,G(t,e))}var T=/(y|m|d)+/g;function S(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,i=String(Math.abs(t)),a=i.length,s="";for(t<0&&(s+="-");a<e;)a+=1,s+="0";return s+i}var I=/\d+/g,P={show:function(){this.built||this.build(),this.shown||this.trigger(p).isDefaultPrevented()||(this.shown=!0,this.$picker.removeClass(g).on(r,D.proxy(this.click,this)),this.showView(this.options.startView),this.inline||(this.$scrollParent.on(u,D.proxy(this.place,this)),D(window).on(a,this.onResize=M(this.place,this)),D(document).on(r,this.onGlobalClick=M(this.globalClick,this)),D(document).on(l,this.onGlobalKeyup=M(this.globalKeyup,this)),i&&D(document).on(f,this.onTouchStart=M(this.touchstart,this)),this.place()))},hide:function(){this.shown&&(this.trigger(o).isDefaultPrevented()||(this.shown=!1,this.$picker.addClass(g).off(r,this.click),this.inline||(this.$scrollParent.off(u,this.place),D(window).off(a,this.onResize),D(document).off(r,this.onGlobalClick),D(document).off(l,this.onGlobalKeyup),i&&D(document).off(f,this.onTouchStart))))},toggle:function(){this.shown?this.hide():this.show()},update:function(){var t=this.getValue();t!==this.oldValue&&(this.setDate(t,!0),this.oldValue=t)},pick:function(t){var e=this.$element,i=this.date;this.trigger(d,{view:t||"",date:i}).isDefaultPrevented()||(i=this.formatDate(this.date),this.setValue(i),this.isInput&&(e.trigger("input"),e.trigger("change")))},reset:function(){this.setDate(this.initialDate,!0),this.setValue(this.initialValue),this.shown&&this.showView(this.options.startView)},getMonthName:function(t,e){var i=this.options,a=i.monthsShort,s=i.months;return D.isNumeric(t)?t=Number(t):x(e)&&(e=t),!0===e&&(s=a),s[$(t)?t:this.date.getMonth()]},getDayName:function(t,e,i){var a=this.options,s=a.days;return D.isNumeric(t)?t=Number(t):(x(i)&&(i=e),x(e)&&(e=t)),i?s=a.daysMin:e&&(s=a.daysShort),s[$(t)?t:this.date.getDay()]},getDate:function(t){var e=this.date;return t?this.formatDate(e):new Date(e)},setDate:function(t,e){var i=this.options.filter;if(F(t)||b(t)){if(t=this.parseDate(t),D.isFunction(i)&&!1===i.call(this.$element,t,"day"))return;this.date=t,this.viewDate=new Date(t),e||this.pick(),this.built&&this.render()}},setStartDate:function(t){F(t)||b(t)?this.startDate=this.parseDate(t):this.startDate=null,this.built&&this.render()},setEndDate:function(t){F(t)||b(t)?this.endDate=this.parseDate(t):this.endDate=null,this.built&&this.render()},parseDate:function(a){var s=this.format,t=[];return F(a)||(b(a)&&(t=a.match(I)||[]),F(a=a?new Date(a):new Date)||(a=new Date),t.length===s.parts.length&&D.each(t,function(t,e){var i=parseInt(e,10);switch(s.parts[t]){case"dd":case"d":a.setDate(i);break;case"mm":case"m":a.setMonth(i-1);break;case"yy":a.setFullYear(2e3+i);break;case"yyyy":a.setFullYear(2===e.length?2e3+i:i)}})),new Date(a.getFullYear(),a.getMonth(),a.getDate())},formatDate:function(t){var e=this.format,i="";if(F(t)){var a=t.getFullYear(),s=t.getMonth(),n=t.getDate(),r={d:n,dd:S(n,2),m:s+1,mm:S(s+1,2),yy:String(a).substring(2),yyyy:S(a,4)};i=e.source,D.each(e.parts,function(t,e){i=i.replace(e,r[e])})}return i},destroy:function(){this.unbind(),this.unbuild(),this.$element.removeData(c)}},N={click:function(t){var e=D(t.target),i=this.options,a=this.date,s=this.viewDate,n=this.format;if(t.stopPropagation(),t.preventDefault(),!e.hasClass("disabled")){var r=e.data("view"),h=s.getFullYear(),o=s.getMonth(),l=s.getDate();switch(r){case"years prev":case"years next":h="years prev"===r?h-10:h+10,s.setFullYear(h),s.setDate(V(h,o,l)),this.renderYears();break;case"year prev":case"year next":h="year prev"===r?h-1:h+1,s.setFullYear(h),s.setDate(V(h,o,l)),this.renderMonths();break;case"year current":n.hasYear&&this.showView(w);break;case"year picked":n.hasMonth?this.showView(v):(e.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("year");break;case"year":h=parseInt(e.text(),10),a.setDate(V(h,o,l)),a.setFullYear(h),s.setDate(V(h,o,l)),s.setFullYear(h),n.hasMonth?this.showView(v):(e.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("year");break;case"month prev":case"month next":(o="month prev"===r?o-1:o+1)<0?(h-=1,o+=12):11<o&&(h+=1,o-=12),s.setFullYear(h),s.setDate(V(h,o,l)),s.setMonth(o),this.renderDays();break;case"month current":n.hasMonth&&this.showView(v);break;case"month picked":n.hasDay?this.showView(m):(e.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("month");break;case"month":o=D.inArray(e.text(),i.monthsShort),a.setFullYear(h),a.setDate(V(h,o,l)),a.setMonth(o),s.setFullYear(h),s.setDate(V(h,o,l)),s.setMonth(o),n.hasDay?this.showView(m):(e.addClass(i.pickedClass).siblings().removeClass(i.pickedClass),this.hideView()),this.pick("month");break;case"day prev":case"day next":case"day":"day prev"===r?o-=1:"day next"===r&&(o+=1),l=parseInt(e.text(),10),a.setDate(1),a.setFullYear(h),a.setMonth(o),a.setDate(l),s.setDate(1),s.setFullYear(h),s.setMonth(o),s.setDate(l),this.renderDays(),"day"===r&&this.hideView(),this.pick("day");break;case"day picked":this.hideView(),this.pick("day")}}},globalClick:function(t){for(var e=t.target,i=this.element,a=this.$trigger[0],s=!0;e!==document;){if(e===a||e===i){s=!1;break}e=e.parentNode}s&&this.hide()},keyup:function(){this.update()},globalKeyup:function(t){var e=t.target,i=t.key,a=t.keyCode;this.isInput&&e!==this.element&&this.shown&&("Tab"===i||9===a)&&this.hide()},touchstart:function(t){var e=t.target;this.isInput&&e!==this.element&&!D.contains(this.$picker[0],e)&&(this.hide(),this.element.blur())}},j={render:function(){this.renderYears(),this.renderMonths(),this.renderDays()},renderWeek:function(){var i=this,a=[],t=this.options,e=t.weekStart,s=t.daysMin;e=parseInt(e,10)%7,s=s.slice(e).concat(s.slice(0,e)),D.each(s,function(t,e){a.push(i.createItem({text:e}))}),this.$week.html(a.join(""))},renderYears:function(){var t,e=this.options,i=this.startDate,a=this.endDate,s=e.disabledClass,n=e.filter,r=e.yearSuffix,h=this.viewDate.getFullYear(),o=(new Date).getFullYear(),l=this.date.getFullYear(),c=[],d=!1,u=!1;for(t=-5;t<=6;t+=1){var p=new Date(h+t,1,1),f=!1;i&&(f=p.getFullYear()<i.getFullYear(),-5===t&&(d=f)),!f&&a&&(f=p.getFullYear()>a.getFullYear(),6===t&&(u=f)),!f&&n&&(f=!1===n.call(this.$element,p,"year"));var g=h+t===l,y=g?"year picked":"year";c.push(this.createItem({picked:g,disabled:f,text:h+t,view:f?"year disabled":y,highlighted:p.getFullYear()===o}))}this.$yearsPrev.toggleClass(s,d),this.$yearsNext.toggleClass(s,u),this.$yearsCurrent.toggleClass(s,!0).html("".concat(h+-5+r," - ").concat(h+6).concat(r)),this.$years.html(c.join(""))},renderMonths:function(){var t,e=this.options,i=this.startDate,a=this.endDate,s=this.viewDate,n=e.disabledClass||"",r=e.monthsShort,h=D.isFunction(e.filter)&&e.filter,o=s.getFullYear(),l=new Date,c=l.getFullYear(),d=l.getMonth(),u=this.date.getFullYear(),p=this.date.getMonth(),f=[],g=!1,y=!1;for(t=0;t<=11;t+=1){var m=new Date(o,t,1),v=!1;i&&(v=(g=m.getFullYear()===i.getFullYear())&&m.getMonth()<i.getMonth()),!v&&a&&(v=(y=m.getFullYear()===a.getFullYear())&&m.getMonth()>a.getMonth()),!v&&h&&(v=!1===h.call(this.$element,m,"month"));var w=o===u&&t===p,k=w?"month picked":"month";f.push(this.createItem({disabled:v,picked:w,highlighted:o===c&&m.getMonth()===d,index:t,text:r[t],view:v?"month disabled":k}))}this.$yearPrev.toggleClass(n,g),this.$yearNext.toggleClass(n,y),this.$yearCurrent.toggleClass(n,g&&y).html(o+e.yearSuffix||""),this.$months.html(f.join(""))},renderDays:function(){var t,e,i,a=this.$element,s=this.options,n=this.startDate,r=this.endDate,h=this.viewDate,o=this.date,l=s.disabledClass,c=s.filter,d=s.months,u=s.weekStart,p=s.yearSuffix,f=h.getFullYear(),g=h.getMonth(),y=new Date,m=y.getFullYear(),v=y.getMonth(),w=y.getDate(),k=o.getFullYear(),D=o.getMonth(),b=o.getDate(),C=[],$=f,x=g,F=!1;0===g?($-=1,x=11):x-=1,t=G($,x);var M=new Date(f,g,1);for((i=M.getDay()-parseInt(u,10)%7)<=0&&(i+=7),n&&(F=M.getTime()<=n.getTime()),e=t-(i-1);e<=t;e+=1){var Y=new Date($,x,e),V=!1;n&&(V=Y.getTime()<n.getTime()),!V&&c&&(V=!1===c.call(a,Y,"day")),C.push(this.createItem({disabled:V,highlighted:$===m&&x===v&&Y.getDate()===w,muted:!0,picked:$===k&&x===D&&e===b,text:e,view:"day prev"}))}var T=[],S=f,I=g,P=!1;11===g?(S+=1,I=0):I+=1,t=G(f,g),i=42-(C.length+t);var N=new Date(f,g,t);for(r&&(P=N.getTime()>=r.getTime()),e=1;e<=i;e+=1){var j=new Date(S,I,e),q=S===k&&I===D&&e===b,A=!1;r&&(A=j.getTime()>r.getTime()),!A&&c&&(A=!1===c.call(a,j,"day")),T.push(this.createItem({disabled:A,picked:q,highlighted:S===m&&I===v&&j.getDate()===w,muted:!0,text:e,view:"day next"}))}var O=[];for(e=1;e<=t;e+=1){var W=new Date(f,g,e),z=!1;n&&(z=W.getTime()<n.getTime()),!z&&r&&(z=W.getTime()>r.getTime()),!z&&c&&(z=!1===c.call(a,W,"day"));var J=f===k&&g===D&&e===b,E=J?"day picked":"day";O.push(this.createItem({disabled:z,picked:J,highlighted:f===m&&g===v&&W.getDate()===w,text:e,view:z?"day disabled":E}))}this.$monthPrev.toggleClass(l,F),this.$monthNext.toggleClass(l,P),this.$monthCurrent.toggleClass(l,F&&P).html(s.yearFirst?"".concat(f+p," ").concat(d[g]):"".concat(d[g]," ").concat(f).concat(p)),this.$days.html(C.join("")+O.join("")+T.join(""))}},q="".concat(c,"-top-left"),A="".concat(c,"-top-right"),O="".concat(c,"-bottom-left"),W="".concat(c,"-bottom-right"),z=[q,A,O,W].join(" "),J=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.$element=D(t),this.element=t,this.options=D.extend({},n,y[e.language],D.isPlainObject(e)&&e),this.$scrollParent=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],i=D(t),a=i.css("position"),s="absolute"===a,n=e?/auto|scroll|hidden/:/auto|scroll/,r=i.parents().filter(function(t,e){var i=D(e);return(!s||"static"!==i.css("position"))&&n.test(i.css("overflow")+i.css("overflow-y")+i.css("overflow-x"))}).eq(0);return"fixed"!==a&&r.length?r:D(t.ownerDocument||document)}(t,!0),this.built=!1,this.shown=!1,this.isInput=!1,this.inline=!1,this.initialValue="",this.initialDate=null,this.startDate=null,this.endDate=null,this.init()}var t,e,a;return t=i,a=[{key:"setDefaults",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};D.extend(n,y[t.language],D.isPlainObject(t)&&t)}}],(e=[{key:"init",value:function(){var t=this.$element,e=this.options,i=e.startDate,a=e.endDate,s=e.date;this.$trigger=D(e.trigger),this.isInput=t.is("input")||t.is("textarea"),this.inline=e.inline&&(e.container||!this.isInput),this.format=function(i){var t=String(i).toLowerCase(),e=t.match(T);if(!e||0===e.length)throw new Error("Invalid date format.");return i={source:t,parts:e},D.each(e,function(t,e){switch(e){case"dd":case"d":i.hasDay=!0;break;case"mm":case"m":i.hasMonth=!0;break;case"yyyy":case"yy":i.hasYear=!0}}),i}(e.format);var n=this.getValue();this.initialValue=n,this.oldValue=n,s=this.parseDate(s||n),i&&(i=this.parseDate(i),s.getTime()<i.getTime()&&(s=new Date(i)),this.startDate=i),a&&(a=this.parseDate(a),i&&a.getTime()<i.getTime()&&(a=new Date(i)),s.getTime()>a.getTime()&&(s=new Date(a)),this.endDate=a),this.date=s,this.viewDate=new Date(s),this.initialDate=new Date(this.date),this.bind(),(e.autoShow||this.inline)&&this.show(),e.autoPick&&this.pick()}},{key:"build",value:function(){if(!this.built){this.built=!0;var t=this.$element,e=this.options,i=D(e.template);this.$picker=i,this.$week=i.find(Y("week")),this.$yearsPicker=i.find(Y("years picker")),this.$yearsPrev=i.find(Y("years prev")),this.$yearsNext=i.find(Y("years next")),this.$yearsCurrent=i.find(Y("years current")),this.$years=i.find(Y("years")),this.$monthsPicker=i.find(Y("months picker")),this.$yearPrev=i.find(Y("year prev")),this.$yearNext=i.find(Y("year next")),this.$yearCurrent=i.find(Y("year current")),this.$months=i.find(Y("months")),this.$daysPicker=i.find(Y("days picker")),this.$monthPrev=i.find(Y("month prev")),this.$monthNext=i.find(Y("month next")),this.$monthCurrent=i.find(Y("month current")),this.$days=i.find(Y("days")),this.inline?D(e.container||t).append(i.addClass("".concat(c,"-inline"))):(D(document.body).append(i.addClass("".concat(c,"-dropdown"))),i.addClass(g).css({zIndex:parseInt(e.zIndex,10)})),this.renderWeek()}}},{key:"unbuild",value:function(){this.built&&(this.built=!1,this.$picker.remove())}},{key:"bind",value:function(){var t=this.options,e=this.$element;D.isFunction(t.show)&&e.on(p,t.show),D.isFunction(t.hide)&&e.on(o,t.hide),D.isFunction(t.pick)&&e.on(d,t.pick),this.isInput&&e.on(l,D.proxy(this.keyup,this)),this.inline||(t.trigger?this.$trigger.on(r,D.proxy(this.toggle,this)):this.isInput?e.on(h,D.proxy(this.show,this)):e.on(r,D.proxy(this.show,this)))}},{key:"unbind",value:function(){var t=this.$element,e=this.options;D.isFunction(e.show)&&t.off(p,e.show),D.isFunction(e.hide)&&t.off(o,e.hide),D.isFunction(e.pick)&&t.off(d,e.pick),this.isInput&&t.off(l,this.keyup),this.inline||(e.trigger?this.$trigger.off(r,this.toggle):this.isInput?t.off(h,this.show):t.off(r,this.show))}},{key:"showView",value:function(t){var e=this.$yearsPicker,i=this.$monthsPicker,a=this.$daysPicker,s=this.format;if(s.hasYear||s.hasMonth||s.hasDay)switch(Number(t)){case w:i.addClass(g),a.addClass(g),s.hasYear?(this.renderYears(),e.removeClass(g),this.place()):this.showView(m);break;case v:e.addClass(g),a.addClass(g),s.hasMonth?(this.renderMonths(),i.removeClass(g),this.place()):this.showView(w);break;default:e.addClass(g),i.addClass(g),s.hasDay?(this.renderDays(),a.removeClass(g),this.place()):this.showView(v)}}},{key:"hideView",value:function(){!this.inline&&this.options.autoHide&&this.hide()}},{key:"place",value:function(){if(!this.inline){var t=this.$element,e=this.options,i=this.$picker,a=D(document).outerWidth(),s=D(document).outerHeight(),n=t.outerWidth(),r=t.outerHeight(),h=i.width(),o=i.height(),l=t.offset(),c=l.left,d=l.top,u=parseFloat(e.offset),p=q;C(u)&&(u=10),o<d&&s<d+r+o?(d-=o+u,p=O):d+=r+u,a<c+h&&(c+=n-h,p=p.replace("left","right")),i.removeClass(z).addClass(p).css({top:d,left:c})}}},{key:"trigger",value:function(t,e){var i=D.Event(t,e);return this.$element.trigger(i),i}},{key:"createItem",value:function(t){var e=this.options,i=e.itemTag,a={text:"",view:"",muted:!1,picked:!1,disabled:!1,highlighted:!1},s=[];return D.extend(a,t),a.muted&&s.push(e.mutedClass),a.highlighted&&s.push(e.highlightedClass),a.picked&&s.push(e.pickedClass),a.disabled&&s.push(e.disabledClass),"<".concat(i,' class="').concat(s.join(" "),'" data-view="').concat(a.view,'">').concat(a.text,"</").concat(i,">")}},{key:"getValue",value:function(){var t=this.$element;return this.isInput?t.val():t.text()}},{key:"setValue",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=this.$element;this.isInput?e.val(t):this.inline&&!this.options.container||e.text(t)}}])&&s(t.prototype,e),a&&s(t,a),i}();if(D.extend&&D.extend(J.prototype,j,N,P),D.fn){var E=D.fn.datepicker;D.fn.datepicker=function(h){for(var t=arguments.length,o=new Array(1<t?t-1:0),e=1;e<t;e++)o[e-1]=arguments[e];var l;return this.each(function(t,e){var i=D(e),a="destroy"===h,s=i.data(c);if(!s){if(a)return;var n=D.extend({},i.data(),D.isPlainObject(h)&&h);s=new J(e,n),i.data(c,s)}if(b(h)){var r=s[h];D.isFunction(r)&&(l=r.apply(s,o),a&&i.removeData(c))}}),x(l)?this:l},D.fn.datepicker.Constructor=J,D.fn.datepicker.languages=y,D.fn.datepicker.setDefaults=J.setDefaults,D.fn.datepicker.noConflict=function(){return D.fn.datepicker=E,this}}});
/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):r("object"==typeof exports?require("scrollmagic"):e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(e){"use strict";var r="0.85em",t="9999",i=15,o=e._util,n=0;e.Scene.extend(function(){var e,r=this;r.addIndicators=function(t){if(!e){var i={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};t=o.extend({},i,t),n++,e=new s(r,t),r.on("add.plugin_addIndicators",e.add),r.on("remove.plugin_addIndicators",e.remove),r.on("destroy.plugin_addIndicators",r.removeIndicators),r.controller()&&e.add()}return r},r.removeIndicators=function(){return e&&(e.remove(),this.off("*.plugin_addIndicators"),e=void 0),r}}),e.Controller.addOption("addIndicators",!1),e.Controller.extend(function(){var r=this,t=r.info(),n=t.container,s=t.isDocument,d=t.vertical,a={groups:[]};this._indicators=a;var g=function(){a.updateBoundsPositions()},p=function(){a.updateTriggerGroupPositions()};return n.addEventListener("resize",p),s||(window.addEventListener("resize",p),window.addEventListener("scroll",p)),n.addEventListener("resize",g),n.addEventListener("scroll",g),this._indicators.updateBoundsPositions=function(e){for(var r,t,s,g=e?[o.extend({},e.triggerGroup,{members:[e]})]:a.groups,p=g.length,u={},c=d?"left":"top",l=d?"width":"height",f=d?o.get.scrollLeft(n)+o.get.width(n)-i:o.get.scrollTop(n)+o.get.height(n)-i;p--;)for(s=g[p],r=s.members.length,t=o.get[l](s.element.firstChild);r--;)u[c]=f-t,o.css(s.members[r].bounds,u)},this._indicators.updateTriggerGroupPositions=function(e){for(var t,g,p,u,c,l=e?[e]:a.groups,f=l.length,m=s?document.body:n,h=s?{top:0,left:0}:o.get.offset(m,!0),v=d?o.get.width(n)-i:o.get.height(n)-i,b=d?"width":"height",G=d?"Y":"X";f--;)t=l[f],g=t.element,p=t.triggerHook*r.info("size"),u=o.get[b](g.firstChild.firstChild),c=p>u?"translate"+G+"(-100%)":"",o.css(g,{top:h.top+(d?p:v-t.members[0].options.indent),left:h.left+(d?v-t.members[0].options.indent:p)}),o.css(g.firstChild.firstChild,{"-ms-transform":c,"-webkit-transform":c,transform:c})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(e.members.length>1?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild,i=t.textContent!==r;i&&(t.textContent=r,d&&a.updateBoundsPositions())},this.addScene=function(t){this._options.addIndicators&&t instanceof e.Scene&&t.controller()===r&&t.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){n.removeEventListener("resize",p),s||(window.removeEventListener("resize",p),window.removeEventListener("scroll",p)),n.removeEventListener("resize",g),n.removeEventListener("scroll",g),this.$super.destroy.apply(this,arguments)},r});var s=function(e,r){var t,i,s=this,a=d.bounds(),g=d.start(r.colorStart),p=d.end(r.colorEnd),u=r.parent&&o.get.elements(r.parent)[0];r.name=r.name||n,g.firstChild.textContent+=" "+r.name,p.textContent+=" "+r.name,a.appendChild(g),a.appendChild(p),s.options=r,s.bounds=a,s.triggerGroup=void 0,this.add=function(){i=e.controller(),t=i.info("vertical");var r=i.info("isDocument");u||(u=r?document.body:i.info("container")),r||"static"!==o.css(u,"position")||o.css(u,{position:"relative"}),e.on("change.plugin_addIndicators",l),e.on("shift.plugin_addIndicators",c),G(),h(),setTimeout(function(){i._indicators.updateBoundsPositions(s)},0)},this.remove=function(){if(s.triggerGroup){if(e.off("change.plugin_addIndicators",l),e.off("shift.plugin_addIndicators",c),s.triggerGroup.members.length>1){var r=s.triggerGroup;r.members.splice(r.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(r),i._indicators.updateTriggerGroupPositions(r),s.triggerGroup=void 0}else b();m()}};var c=function(){h()},l=function(e){"triggerHook"===e.what&&G()},f=function(){var e=i.info("vertical");o.css(g.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:r.indent,right:e?r.indent:-1,padding:e?"0 8px":"2px 4px"}),o.css(p,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?r.indent:"",bottom:e?"":r.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),u.appendChild(a)},m=function(){a.parentNode.removeChild(a)},h=function(){a.parentNode!==u&&f();var r={};r[t?"top":"left"]=e.triggerPosition(),r[t?"height":"width"]=e.duration(),o.css(a,r),o.css(p,{display:e.duration()>0?"":"none"})},v=function(){var n=d.trigger(r.colorTrigger),a={};a[t?"right":"bottom"]=0,a[t?"border-top-width":"border-left-width"]=1,o.css(n.firstChild,a),o.css(n.firstChild.firstChild,{padding:t?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(n);var g={triggerHook:e.triggerHook(),element:n,members:[s]};i._indicators.groups.push(g),s.triggerGroup=g,i._indicators.updateTriggerGroupLabel(g),i._indicators.updateTriggerGroupPositions(g)},b=function(){i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup),1),s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element),s.triggerGroup=void 0},G=function(){var r=e.triggerHook(),t=1e-4;if(!(s.triggerGroup&&Math.abs(s.triggerGroup.triggerHook-r)<t)){for(var o,n=i._indicators.groups,d=n.length;d--;)if(o=n[d],Math.abs(o.triggerHook-r)<t)return s.triggerGroup&&(1===s.triggerGroup.members.length?b():(s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(s.triggerGroup),i._indicators.updateTriggerGroupPositions(s.triggerGroup))),o.members.push(s),s.triggerGroup=o,void i._indicators.updateTriggerGroupLabel(o);if(s.triggerGroup){if(1===s.triggerGroup.members.length)return s.triggerGroup.triggerHook=r,void i._indicators.updateTriggerGroupPositions(s.triggerGroup);s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s),1),i._indicators.updateTriggerGroupLabel(s.triggerGroup),i._indicators.updateTriggerGroupPositions(s.triggerGroup),s.triggerGroup=void 0}v()}}},d={start:function(e){var r=document.createElement("div");r.textContent="start",o.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return o.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",o.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return o.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),e.style.zIndex=t,e},trigger:function(e){var i=document.createElement("div");i.textContent="trigger",o.css(i,{position:"relative"});var n=document.createElement("div");o.css(n,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),n.appendChild(i);var s=document.createElement("div");return o.css(s,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":r}),s.style.zIndex=t,s.appendChild(n),s}}});
!function(){this.loaded=0,this.failed=0,this.total=0,this.watch=function(a,b){var c=document.querySelectorAll(a);if(!c.length)return console.log("[imgStatus]: There aren't any images associated with this selector ("+a+")!");this.total=c.length;for(var d=0;d<this.total;d++)isCached(c[d].src)?this._setLoaded(b):c[d].addEventListener?(c[d].addEventListener("load",this._setLoaded.bind(this,b)),c[d].addEventListener("error",this._setFailed.bind(this,b))):(c[d].attachEvent("onload",this._setLoaded.bind(this,b)),c[d].attachEvent("onerror",this._setFailed.bind(this,b)))},this.isCached=function(a){var b=new Image;return b.src=a,b.complete},this._setFailed=function(a,b){++this.failed,"function"==typeof a&&a(this)},this._setLoaded=function(a,b){++this.loaded,"function"==typeof a&&a(this)},this.isDone=function(){return this.loaded+this.failed===this.total?!0:!1},"object"==typeof window&&(window.imgStatus=this)}();
typeof navigator === "object" && (function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('Plyr', factory) :
	(global = global || self, global.Plyr = factory());
  }(this, function () { 'use strict';
  
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	  }
	}
  
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
  
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}
  
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
		Object.defineProperty(obj, key, {
		  value: value,
		  enumerable: true,
		  configurable: true,
		  writable: true
		});
	  } else {
		obj[key] = value;
	  }
  
	  return obj;
	}
  
	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}
  
	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}
  
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
		for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
  
		return arr2;
	  }
	}
  
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
  
	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}
  
	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;
  
	  try {
		for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
		  _arr.push(_s.value);
  
		  if (i && _arr.length === i) break;
		}
	  } catch (err) {
		_d = true;
		_e = err;
	  } finally {
		try {
		  if (!_n && _i["return"] != null) _i["return"]();
		} finally {
		  if (_d) throw _e;
		}
	  }
  
	  return _arr;
	}
  
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}
  
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}
  
	var defaults = {
	  addCSS: true,
	  // Add CSS to the element to improve usability (required here or in your CSS!)
	  thumbWidth: 15,
	  // The width of the thumb handle
	  watch: true // Watch for new elements that match a string target
  
	};
  
	// Element matches a selector
	function matches(element, selector) {
  
	  function match() {
		return Array.from(document.querySelectorAll(selector)).includes(this);
	  }
  
	  var matches = match;
	  return matches.call(element, selector);
	}
  
	// Trigger event
	function trigger(element, type) {
	  if (!element || !type) {
		return;
	  } // Create and dispatch the event
  
  
	  var event = new Event(type); // Dispatch the event
  
	  element.dispatchEvent(event);
	}
  
	// ==========================================================================
	// Type checking utils
	// ==========================================================================
	var getConstructor = function getConstructor(input) {
	  return input !== null && typeof input !== 'undefined' ? input.constructor : null;
	};
  
	var instanceOf = function instanceOf(input, constructor) {
	  return Boolean(input && constructor && input instanceof constructor);
	};
  
	var isNullOrUndefined = function isNullOrUndefined(input) {
	  return input === null || typeof input === 'undefined';
	};
  
	var isObject = function isObject(input) {
	  return getConstructor(input) === Object;
	};
  
	var isNumber = function isNumber(input) {
	  return getConstructor(input) === Number && !Number.isNaN(input);
	};
  
	var isString = function isString(input) {
	  return getConstructor(input) === String;
	};
  
	var isBoolean = function isBoolean(input) {
	  return getConstructor(input) === Boolean;
	};
  
	var isFunction = function isFunction(input) {
	  return getConstructor(input) === Function;
	};
  
	var isArray = function isArray(input) {
	  return Array.isArray(input);
	};
  
	var isNodeList = function isNodeList(input) {
	  return instanceOf(input, NodeList);
	};
  
	var isElement = function isElement(input) {
	  return instanceOf(input, Element);
	};
  
	var isEvent = function isEvent(input) {
	  return instanceOf(input, Event);
	};
  
	var isEmpty = function isEmpty(input) {
	  return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;
	};
  
	var is = {
	  nullOrUndefined: isNullOrUndefined,
	  object: isObject,
	  number: isNumber,
	  string: isString,
	  boolean: isBoolean,
	  function: isFunction,
	  array: isArray,
	  nodeList: isNodeList,
	  element: isElement,
	  event: isEvent,
	  empty: isEmpty
	};
  
	// Get the number of decimal places
	function getDecimalPlaces(value) {
	  var match = "".concat(value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  
	  if (!match) {
		return 0;
	  }
  
	  return Math.max(0, // Number of digits right of decimal point.
	  (match[1] ? match[1].length : 0) - ( // Adjust for scientific notation.
	  match[2] ? +match[2] : 0));
	} // Round to the nearest step
  
	function round(number, step) {
	  if (step < 1) {
		var places = getDecimalPlaces(step);
		return parseFloat(number.toFixed(places));
	  }
  
	  return Math.round(number / step) * step;
	}
  
	var RangeTouch =
	/*#__PURE__*/
	function () {
	  /**
	   * Setup a new instance
	   * @param {String|Element} target
	   * @param {Object} options
	   */
	  function RangeTouch(target, options) {
		_classCallCheck(this, RangeTouch);
  
		if (is.element(target)) {
		  // An Element is passed, use it directly
		  this.element = target;
		} else if (is.string(target)) {
		  // A CSS Selector is passed, fetch it from the DOM
		  this.element = document.querySelector(target);
		}
  
		if (!is.element(this.element) || !is.empty(this.element.rangeTouch)) {
		  return;
		}
  
		this.config = Object.assign({}, defaults, options);
		this.init();
	  }
  
	  _createClass(RangeTouch, [{
		key: "init",
		value: function init() {
		  // Bail if not a touch enabled device
		  if (!RangeTouch.enabled) {
			return;
		  } // Add useful CSS
  
  
		  if (this.config.addCSS) {
			// TODO: Restore original values on destroy
			this.element.style.userSelect = 'none';
			this.element.style.webKitUserSelect = 'none';
			this.element.style.touchAction = 'manipulation';
		  }
  
		  this.listeners(true);
		  this.element.rangeTouch = this;
		}
	  }, {
		key: "destroy",
		value: function destroy() {
		  // Bail if not a touch enabled device
		  if (!RangeTouch.enabled) {
			return;
		  }
  
		  this.listeners(false);
		  this.element.rangeTouch = null;
		}
	  }, {
		key: "listeners",
		value: function listeners(toggle) {
		  var _this = this;
  
		  var method = toggle ? 'addEventListener' : 'removeEventListener'; // Listen for events
  
		  ['touchstart', 'touchmove', 'touchend'].forEach(function (type) {
			_this.element[method](type, function (event) {
			  return _this.set(event);
			}, false);
		  });
		}
		/**
		 * Get the value based on touch position
		 * @param {Event} event
		 */
  
	  }, {
		key: "get",
		value: function get(event) {
		  if (!RangeTouch.enabled || !is.event(event)) {
			return null;
		  }
  
		  var input = event.target;
		  var touch = event.changedTouches[0];
		  var min = parseFloat(input.getAttribute('min')) || 0;
		  var max = parseFloat(input.getAttribute('max')) || 100;
		  var step = parseFloat(input.getAttribute('step')) || 1;
		  var delta = max - min; // Calculate percentage
  
		  var percent;
		  var clientRect = input.getBoundingClientRect();
		  var thumbWidth = 100 / clientRect.width * (this.config.thumbWidth / 2) / 100; // Determine left percentage
  
		  percent = 100 / clientRect.width * (touch.clientX - clientRect.left); // Don't allow outside bounds
  
		  if (percent < 0) {
			percent = 0;
		  } else if (percent > 100) {
			percent = 100;
		  } // Factor in the thumb offset
  
  
		  if (percent < 50) {
			percent -= (100 - percent * 2) * thumbWidth;
		  } else if (percent > 50) {
			percent += (percent - 50) * 2 * thumbWidth;
		  } // Find the closest step to the mouse position
  
  
		  return min + round(delta * (percent / 100), step);
		}
		/**
		 * Update range value based on position
		 * @param {Event} event
		 */
  
	  }, {
		key: "set",
		value: function set(event) {
		  if (!RangeTouch.enabled || !is.event(event) || event.target.disabled) {
			return;
		  } // Prevent text highlight on iOS
  
  
		  event.preventDefault(); // Set value
  
		  event.target.value = this.get(event); // Trigger event
  
		  trigger(event.target, event.type === 'touchend' ? 'change' : 'input');
		}
	  }], [{
		key: "setup",
  
		/**
		 * Setup multiple instances
		 * @param {String|Element|NodeList|Array} target
		 * @param {Object} options
		 */
		value: function setup(target) {
		  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		  var targets = null;
  
		  if (is.empty(target) || is.string(target)) {
			targets = Array.from(document.querySelectorAll(is.string(target) ? target : 'input[type="range"]'));
		  } else if (is.element(target)) {
			targets = [target];
		  } else if (is.nodeList(target)) {
			targets = Array.from(target);
		  } else if (is.array(target)) {
			targets = target.filter(is.element);
		  }
  
		  if (is.empty(targets)) {
			return null;
		  }
  
		  var config = Object.assign({}, defaults, options);
  
		  if (is.string(target) && config.watch) {
			// Create an observer instance
			var observer = new MutationObserver(function (mutations) {
			  Array.from(mutations).forEach(function (mutation) {
				Array.from(mutation.addedNodes).forEach(function (node) {
				  if (!is.element(node) || !matches(node, target)) {
					return;
				  } // eslint-disable-next-line no-unused-vars
  
  
				  var range = new RangeTouch(node, config);
				});
			  });
			}); // Pass in the target node, as well as the observer options
  
			observer.observe(document.body, {
			  childList: true,
			  subtree: true
			});
		  }
  
		  return targets.map(function (t) {
			return new RangeTouch(t, options);
		  });
		}
	  }, {
		key: "enabled",
		get: function get() {
		  return 'ontouchstart' in document.documentElement;
		}
	  }]);
  
	  return RangeTouch;
	}();
  
	// ==========================================================================
	// Type checking utils
	// ==========================================================================
	var getConstructor$1 = function getConstructor(input) {
	  return input !== null && typeof input !== 'undefined' ? input.constructor : null;
	};
  
	var instanceOf$1 = function instanceOf(input, constructor) {
	  return Boolean(input && constructor && input instanceof constructor);
	};
  
	var isNullOrUndefined$1 = function isNullOrUndefined(input) {
	  return input === null || typeof input === 'undefined';
	};
  
	var isObject$1 = function isObject(input) {
	  return getConstructor$1(input) === Object;
	};
  
	var isNumber$1 = function isNumber(input) {
	  return getConstructor$1(input) === Number && !Number.isNaN(input);
	};
  
	var isString$1 = function isString(input) {
	  return getConstructor$1(input) === String;
	};
  
	var isBoolean$1 = function isBoolean(input) {
	  return getConstructor$1(input) === Boolean;
	};
  
	var isFunction$1 = function isFunction(input) {
	  return getConstructor$1(input) === Function;
	};
  
	var isArray$1 = function isArray(input) {
	  return Array.isArray(input);
	};
  
	var isWeakMap = function isWeakMap(input) {
	  return instanceOf$1(input, WeakMap);
	};
  
	var isNodeList$1 = function isNodeList(input) {
	  return instanceOf$1(input, NodeList);
	};
  
	var isElement$1 = function isElement(input) {
	  return instanceOf$1(input, Element);
	};
  
	var isTextNode = function isTextNode(input) {
	  return getConstructor$1(input) === Text;
	};
  
	var isEvent$1 = function isEvent(input) {
	  return instanceOf$1(input, Event);
	};
  
	var isKeyboardEvent = function isKeyboardEvent(input) {
	  return instanceOf$1(input, KeyboardEvent);
	};
  
	var isCue = function isCue(input) {
	  return instanceOf$1(input, window.TextTrackCue) || instanceOf$1(input, window.VTTCue);
	};
  
	var isTrack = function isTrack(input) {
	  return instanceOf$1(input, TextTrack) || !isNullOrUndefined$1(input) && isString$1(input.kind);
	};
  
	var isPromise = function isPromise(input) {
	  return instanceOf$1(input, Promise);
	};
  
	var isEmpty$1 = function isEmpty(input) {
	  return isNullOrUndefined$1(input) || (isString$1(input) || isArray$1(input) || isNodeList$1(input)) && !input.length || isObject$1(input) && !Object.keys(input).length;
	};
  
	var isUrl = function isUrl(input) {
	  // Accept a URL object
	  if (instanceOf$1(input, window.URL)) {
		return true;
	  } // Must be string from here
  
  
	  if (!isString$1(input)) {
		return false;
	  } // Add the protocol if required
  
  
	  var string = input;
  
	  if (!input.startsWith('http://') || !input.startsWith('https://')) {
		string = "http://".concat(input);
	  }
  
	  try {
		return !isEmpty$1(new URL(string).hostname);
	  } catch (e) {
		return false;
	  }
	};
  
	var is$1 = {
	  nullOrUndefined: isNullOrUndefined$1,
	  object: isObject$1,
	  number: isNumber$1,
	  string: isString$1,
	  boolean: isBoolean$1,
	  function: isFunction$1,
	  array: isArray$1,
	  weakMap: isWeakMap,
	  nodeList: isNodeList$1,
	  element: isElement$1,
	  textNode: isTextNode,
	  event: isEvent$1,
	  keyboardEvent: isKeyboardEvent,
	  cue: isCue,
	  track: isTrack,
	  promise: isPromise,
	  url: isUrl,
	  empty: isEmpty$1
	};
  
	// ==========================================================================
	// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	// https://www.youtube.com/watch?v=NPM6172J22g
  
	var supportsPassiveListeners = function () {
	  // Test via a getter in the options object to see if the passive property is accessed
	  var supported = false;
  
	  try {
		var options = Object.defineProperty({}, 'passive', {
		  get: function get() {
			supported = true;
			return null;
		  }
		});
		window.addEventListener('test', null, options);
		window.removeEventListener('test', null, options);
	  } catch (e) {// Do nothing
	  }
  
	  return supported;
	}(); // Toggle event listener
  
  
	function toggleListener(element, event, callback) {
	  var _this = this;
  
	  var toggle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
	  var capture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  
	  // Bail if no element, event, or callback
	  if (!element || !('addEventListener' in element) || is$1.empty(event) || !is$1.function(callback)) {
		return;
	  } // Allow multiple events
  
  
	  var events = event.split(' '); // Build options
	  // Default to just the capture boolean for browsers with no passive listener support
  
	  var options = capture; // If passive events listeners are supported
  
	  if (supportsPassiveListeners) {
		options = {
		  // Whether the listener can be passive (i.e. default never prevented)
		  passive: passive,
		  // Whether the listener is a capturing listener or not
		  capture: capture
		};
	  } // If a single node is passed, bind the event listener
  
  
	  events.forEach(function (type) {
		if (_this && _this.eventListeners && toggle) {
		  // Cache event listener
		  _this.eventListeners.push({
			element: element,
			type: type,
			callback: callback,
			options: options
		  });
		}
  
		element[toggle ? 'addEventListener' : 'removeEventListener'](type, callback, options);
	  });
	} // Bind event handler
  
	function on(element) {
	  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var callback = arguments.length > 2 ? arguments[2] : undefined;
	  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  toggleListener.call(this, element, events, callback, true, passive, capture);
	} // Unbind event handler
  
	function off(element) {
	  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var callback = arguments.length > 2 ? arguments[2] : undefined;
	  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  toggleListener.call(this, element, events, callback, false, passive, capture);
	} // Bind once-only event handler
  
	function once(element) {
	  var _this2 = this;
  
	  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var callback = arguments.length > 2 ? arguments[2] : undefined;
	  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  
	  var onceCallback = function onceCallback() {
		off(element, events, onceCallback, passive, capture);
  
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		  args[_key] = arguments[_key];
		}
  
		callback.apply(_this2, args);
	  };
  
	  toggleListener.call(this, element, events, onceCallback, true, passive, capture);
	} // Trigger event
  
	function triggerEvent(element) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  
	  // Bail if no element
	  if (!is$1.element(element) || is$1.empty(type)) {
		return;
	  } // Create and dispatch the event
  
  
	  var event = new CustomEvent(type, {
		bubbles: bubbles,
		detail: Object.assign({}, detail, {
		  plyr: this
		})
	  }); // Dispatch the event
  
	  element.dispatchEvent(event);
	} // Unbind all cached event listeners
  
	function unbindListeners() {
	  if (this && this.eventListeners) {
		this.eventListeners.forEach(function (item) {
		  var element = item.element,
			  type = item.type,
			  callback = item.callback,
			  options = item.options;
		  element.removeEventListener(type, callback, options);
		});
		this.eventListeners = [];
	  }
	} // Run method when / if player is ready
  
	function ready() {
	  var _this3 = this;
  
	  return new Promise(function (resolve) {
		return _this3.ready ? setTimeout(resolve, 0) : on.call(_this3, _this3.elements.container, 'ready', resolve);
	  }).then(function () {});
	}
  
	function cloneDeep(object) {
	  return JSON.parse(JSON.stringify(object));
	} // Get a nested value in an object
  
	function getDeep(object, path) {
	  return path.split('.').reduce(function (obj, key) {
		return obj && obj[key];
	  }, object);
	} // Deep extend destination object with N more objects
  
	function extend() {
	  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
	  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		sources[_key - 1] = arguments[_key];
	  }
  
	  if (!sources.length) {
		return target;
	  }
  
	  var source = sources.shift();
  
	  if (!is$1.object(source)) {
		return target;
	  }
  
	  Object.keys(source).forEach(function (key) {
		if (is$1.object(source[key])) {
		  if (!Object.keys(target).includes(key)) {
			Object.assign(target, _defineProperty({}, key, {}));
		  }
  
		  extend(target[key], source[key]);
		} else {
		  Object.assign(target, _defineProperty({}, key, source[key]));
		}
	  });
	  return extend.apply(void 0, [target].concat(sources));
	}
  
	function wrap(elements, wrapper) {
	  // Convert `elements` to an array, if necessary.
	  var targets = elements.length ? elements : [elements]; // Loops backwards to prevent having to clone the wrapper on the
	  // first element (see `child` below).
  
	  Array.from(targets).reverse().forEach(function (element, index) {
		var child = index > 0 ? wrapper.cloneNode(true) : wrapper; // Cache the current parent and sibling.
  
		var parent = element.parentNode;
		var sibling = element.nextSibling; // Wrap the element (is automatically removed from its current
		// parent).
  
		child.appendChild(element); // If the element had a sibling, insert the wrapper before
		// the sibling to maintain the HTML structure; otherwise, just
		// append it to the parent.
  
		if (sibling) {
		  parent.insertBefore(child, sibling);
		} else {
		  parent.appendChild(child);
		}
	  });
	} // Set attributes
  
	function setAttributes(element, attributes) {
	  if (!is$1.element(element) || is$1.empty(attributes)) {
		return;
	  } // Assume null and undefined attributes should be left out,
	  // Setting them would otherwise convert them to "null" and "undefined"
  
  
	  Object.entries(attributes).filter(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
			value = _ref2[1];
  
		return !is$1.nullOrUndefined(value);
	  }).forEach(function (_ref3) {
		var _ref4 = _slicedToArray(_ref3, 2),
			key = _ref4[0],
			value = _ref4[1];
  
		return element.setAttribute(key, value);
	  });
	} // Create a DocumentFragment
  
	function createElement(type, attributes, text) {
	  // Create a new <element>
	  var element = document.createElement(type); // Set all passed attributes
  
	  if (is$1.object(attributes)) {
		setAttributes(element, attributes);
	  } // Add text node
  
  
	  if (is$1.string(text)) {
		element.innerText = text;
	  } // Return built element
  
  
	  return element;
	} // Inaert an element after another
  
	function insertAfter(element, target) {
	  if (!is$1.element(element) || !is$1.element(target)) {
		return;
	  }
  
	  target.parentNode.insertBefore(element, target.nextSibling);
	} // Insert a DocumentFragment
  
	function insertElement(type, parent, attributes, text) {
	  if (!is$1.element(parent)) {
		return;
	  }
  
	  parent.appendChild(createElement(type, attributes, text));
	} // Remove element(s)
  
	function removeElement(element) {
	  if (is$1.nodeList(element) || is$1.array(element)) {
		Array.from(element).forEach(removeElement);
		return;
	  }
  
	  if (!is$1.element(element) || !is$1.element(element.parentNode)) {
		return;
	  }
  
	  element.parentNode.removeChild(element);
	} // Remove all child elements
  
	function emptyElement(element) {
	  if (!is$1.element(element)) {
		return;
	  }
  
	  var length = element.childNodes.length;
  
	  while (length > 0) {
		element.removeChild(element.lastChild);
		length -= 1;
	  }
	} // Replace element
  
	function replaceElement(newChild, oldChild) {
	  if (!is$1.element(oldChild) || !is$1.element(oldChild.parentNode) || !is$1.element(newChild)) {
		return null;
	  }
  
	  oldChild.parentNode.replaceChild(newChild, oldChild);
	  return newChild;
	} // Get an attribute object from a string selector
  
	function getAttributesFromSelector(sel, existingAttributes) {
	  // For example:
	  // '.test' to { class: 'test' }
	  // '#test' to { id: 'test' }
	  // '[data-test="test"]' to { 'data-test': 'test' }
	  if (!is$1.string(sel) || is$1.empty(sel)) {
		return {};
	  }
  
	  var attributes = {};
	  var existing = extend({}, existingAttributes);
	  sel.split(',').forEach(function (s) {
		// Remove whitespace
		var selector = s.trim();
		var className = selector.replace('.', '');
		var stripped = selector.replace(/[[\]]/g, ''); // Get the parts and value
  
		var parts = stripped.split('=');
  
		var _parts = _slicedToArray(parts, 1),
			key = _parts[0];
  
		var value = parts.length > 1 ? parts[1].replace(/["']/g, '') : ''; // Get the first character
  
		var start = selector.charAt(0);
  
		switch (start) {
		  case '.':
			// Add to existing classname
			if (is$1.string(existing.class)) {
			  attributes.class = "".concat(existing.class, " ").concat(className);
			} else {
			  attributes.class = className;
			}
  
			break;
  
		  case '#':
			// ID selector
			attributes.id = selector.replace('#', '');
			break;
  
		  case '[':
			// Attribute selector
			attributes[key] = value;
			break;
  
		  default:
			break;
		}
	  });
	  return extend(existing, attributes);
	} // Toggle hidden
  
	function toggleHidden(element, hidden) {
	  if (!is$1.element(element)) {
		return;
	  }
  
	  var hide = hidden;
  
	  if (!is$1.boolean(hide)) {
		hide = !element.hidden;
	  }
  
	  if (hide) {
		element.setAttribute('hidden', '');
	  } else {
		element.removeAttribute('hidden');
	  }
	} // Mirror Element.classList.toggle, with IE compatibility for "force" argument
  
	function toggleClass(element, className, force) {
	  if (is$1.nodeList(element)) {
		return Array.from(element).map(function (e) {
		  return toggleClass(e, className, force);
		});
	  }
  
	  if (is$1.element(element)) {
		var method = 'toggle';
  
		if (typeof force !== 'undefined') {
		  method = force ? 'add' : 'remove';
		}
  
		element.classList[method](className);
		return element.classList.contains(className);
	  }
  
	  return false;
	} // Has class name
  
	function hasClass(element, className) {
	  return is$1.element(element) && element.classList.contains(className);
	} // Element matches selector
  
	function matches$1(element, selector) {
  
	  function match() {
		return Array.from(document.querySelectorAll(selector)).includes(this);
	  }
  
	  var matches = match;
	  return matches.call(element, selector);
	} // Find all elements
  
	function getElements(selector) {
	  return this.elements.container.querySelectorAll(selector);
	} // Find a single element
  
	function getElement(selector) {
	  return this.elements.container.querySelector(selector);
	} // Trap focus inside container
  
	function trapFocus() {
	  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
	  if (!is$1.element(element)) {
		return;
	  }
  
	  var focusable = getElements.call(this, 'button:not(:disabled), input:not(:disabled), [tabindex]');
	  var first = focusable[0];
	  var last = focusable[focusable.length - 1];
  
	  var trap = function trap(event) {
		// Bail if not tab key or not fullscreen
		if (event.key !== 'Tab' || event.keyCode !== 9) {
		  return;
		} // Get the current focused element
  
  
		var focused = document.activeElement;
  
		if (focused === last && !event.shiftKey) {
		  // Move focus to first element that can be tabbed if Shift isn't used
		  first.focus();
		  event.preventDefault();
		} else if (focused === first && event.shiftKey) {
		  // Move focus to last element that can be tabbed if Shift is used
		  last.focus();
		  event.preventDefault();
		}
	  };
  
	  toggleListener.call(this, this.elements.container, 'keydown', trap, toggle, false);
	} // Set focus and tab focus class
  
	function setFocus() {
	  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
	  if (!is$1.element(element)) {
		return;
	  } // Set regular focus
  
  
	  element.focus({
		preventScroll: true
	  }); // If we want to mimic keyboard focus via tab
  
	  if (tabFocus) {
		toggleClass(element, this.config.classNames.tabFocus);
	  }
	}
  
	// ==========================================================================
	var transitionEndEvent = function () {
	  var element = document.createElement('span');
	  var events = {
		WebkitTransition: 'webkitTransitionEnd',
		MozTransition: 'transitionend',
		OTransition: 'oTransitionEnd otransitionend',
		transition: 'transitionend'
	  };
	  var type = Object.keys(events).find(function (event) {
		return element.style[event] !== undefined;
	  });
	  return is$1.string(type) ? events[type] : false;
	}(); // Force repaint of element
  
	function repaint(element) {
	  setTimeout(function () {
		try {
		  toggleHidden(element, true);
		  element.offsetHeight; // eslint-disable-line
  
		  toggleHidden(element, false);
		} catch (e) {// Do nothing
		}
	  }, 0);
	}
  
	// ==========================================================================
	// Browser sniffing
	// Unfortunately, due to mixed support, UA sniffing is required
	// ==========================================================================
	var browser = {
	  isIE:
	  /* @cc_on!@ */
	  !!document.documentMode,
	  isEdge: window.navigator.userAgent.includes('Edge'),
	  isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
	  isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
	  isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
	};
  
	var defaultCodecs = {
	  'audio/ogg': 'vorbis',
	  'audio/wav': '1',
	  'video/webm': 'vp8, vorbis',
	  'video/mp4': 'avc1.42E01E, mp4a.40.2',
	  'video/ogg': 'theora'
	}; // Check for feature support
  
	var support = {
	  // Basic support
	  audio: 'canPlayType' in document.createElement('audio'),
	  video: 'canPlayType' in document.createElement('video'),
	  // Check for support
	  // Basic functionality vs full UI
	  check: function check(type, provider, playsinline) {
		var canPlayInline = browser.isIPhone && playsinline && support.playsinline;
		var api = support[type] || provider !== 'html5';
		var ui = api && support.rangeInput && (type !== 'video' || !browser.isIPhone || canPlayInline);
		return {
		  api: api,
		  ui: ui
		};
	  },
	  // Picture-in-picture support
	  // Safari & Chrome only currently
	  pip: function () {
		if (browser.isIPhone) {
		  return false;
		} // Safari
		// https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls
  
  
		if (is$1.function(createElement('video').webkitSetPresentationMode)) {
		  return true;
		} // Chrome
		// https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture
  
  
		if (document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture) {
		  return true;
		}
  
		return false;
	  }(),
	  // Airplay support
	  // Safari only currently
	  airplay: is$1.function(window.WebKitPlaybackTargetAvailabilityEvent),
	  // Inline playback support
	  // https://webkit.org/blog/6784/new-video-policies-for-ios/
	  playsinline: 'playsInline' in document.createElement('video'),
	  // Check for mime type support against a player instance
	  // Credits: http://diveintohtml5.info/everything.html
	  // Related: http://www.leanbackplayer.com/test/h5mt.html
	  mime: function mime(input) {
		if (is$1.empty(input)) {
		  return false;
		}
  
		var _input$split = input.split('/'),
			_input$split2 = _slicedToArray(_input$split, 1),
			mediaType = _input$split2[0];
  
		var type = input; // Verify we're using HTML5 and there's no media type mismatch
  
		if (!this.isHTML5 || mediaType !== this.type) {
		  return false;
		} // Add codec if required
  
  
		if (Object.keys(defaultCodecs).includes(type)) {
		  type += "; codecs=\"".concat(defaultCodecs[input], "\"");
		}
  
		try {
		  return Boolean(type && this.media.canPlayType(type).replace(/no/, ''));
		} catch (e) {
		  return false;
		}
	  },
	  // Check for textTracks support
	  textTracks: 'textTracks' in document.createElement('video'),
	  // <input type="range"> Sliders
	  rangeInput: function () {
		var range = document.createElement('input');
		range.type = 'range';
		return range.type === 'range';
	  }(),
	  // Touch
	  // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
	  touch: 'ontouchstart' in document.documentElement,
	  // Detect transitions support
	  transitions: transitionEndEvent !== false,
	  // Reduced motion iOS & MacOS setting
	  // https://webkit.org/blog/7551/responsive-design-for-motion/
	  reducedMotion: 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches
	};
  
	function validateRatio(input) {
	  if (!is$1.array(input) && (!is$1.string(input) || !input.includes(':'))) {
		return false;
	  }
  
	  var ratio = is$1.array(input) ? input : input.split(':');
	  return ratio.map(Number).every(is$1.number);
	}
	function reduceAspectRatio(ratio) {
	  if (!is$1.array(ratio) || !ratio.every(is$1.number)) {
		return null;
	  }
  
	  var _ratio = _slicedToArray(ratio, 2),
		  width = _ratio[0],
		  height = _ratio[1];
  
	  var getDivider = function getDivider(w, h) {
		return h === 0 ? w : getDivider(h, w % h);
	  };
  
	  var divider = getDivider(width, height);
	  return [width / divider, height / divider];
	}
	function getAspectRatio(input) {
	  var parse = function parse(ratio) {
		if (!validateRatio(ratio)) {
		  return null;
		}
  
		return ratio.split(':').map(Number);
	  }; // Provided ratio
  
  
	  var ratio = parse(input); // Get from config
  
	  if (ratio === null) {
		ratio = parse(this.config.ratio);
	  } // Get from embed
  
  
	  if (ratio === null && !is$1.empty(this.embed) && is$1.array(this.embed.ratio)) {
		ratio = this.embed.ratio;
	  } // Get from HTML5 video
  
  
	  if (ratio === null && this.isHTML5) {
		var _this$media = this.media,
			videoWidth = _this$media.videoWidth,
			videoHeight = _this$media.videoHeight;
		ratio = reduceAspectRatio([videoWidth, videoHeight]);
	  }
  
	  return ratio;
	} // Set aspect ratio for responsive container
  
	function setAspectRatio(input) {
	  if (!this.isVideo) {
		return {};
	  }
  
	  var ratio = getAspectRatio.call(this, input);
  
	  var _ref = is$1.array(ratio) ? ratio : [0, 0],
		  _ref2 = _slicedToArray(_ref, 2),
		  w = _ref2[0],
		  h = _ref2[1];
  
	  var padding = 100 / w * h;
	  this.elements.wrapper.style.paddingBottom = "".concat(padding, "%"); // For Vimeo we have an extra <div> to hide the standard controls and UI
  
	  if (this.isVimeo && this.supported.ui) {
		var height = 240;
		var offset = (height - padding) / (height / 50);
		this.media.style.transform = "translateY(-".concat(offset, "%)");
	  } else if (this.isHTML5) {
		this.elements.wrapper.classList.toggle(this.config.classNames.videoFixedRatio, ratio !== null);
	  }
  
	  return {
		padding: padding,
		ratio: ratio
	  };
	}
  
	// ==========================================================================
	var html5 = {
	  getSources: function getSources() {
		var _this = this;
  
		if (!this.isHTML5) {
		  return [];
		}
  
		var sources = Array.from(this.media.querySelectorAll('source')); // Filter out unsupported sources (if type is specified)
  
		return sources.filter(function (source) {
		  var type = source.getAttribute('type');
  
		  if (is$1.empty(type)) {
			return true;
		  }
  
		  return support.mime.call(_this, type);
		});
	  },
	  // Get quality levels
	  getQualityOptions: function getQualityOptions() {
		// Get sizes from <source> elements
		return html5.getSources.call(this).map(function (source) {
		  return Number(source.getAttribute('size'));
		}).filter(Boolean);
	  },
	  extend: function extend() {
		if (!this.isHTML5) {
		  return;
		}
  
		var player = this; // Set aspect ratio if set
  
		setAspectRatio.call(player); // Quality
  
		Object.defineProperty(player.media, 'quality', {
		  get: function get() {
			// Get sources
			var sources = html5.getSources.call(player);
			var source = sources.find(function (source) {
			  return source.getAttribute('src') === player.source;
			}); // Return size, if match is found
  
			return source && Number(source.getAttribute('size'));
		  },
		  set: function set(input) {
			// Get sources
			var sources = html5.getSources.call(player); // Get first match for requested size
  
			var source = sources.find(function (source) {
			  return Number(source.getAttribute('size')) === input;
			}); // No matching source found
  
			if (!source) {
			  return;
			} // Get current state
  
  
			var _player$media = player.media,
				currentTime = _player$media.currentTime,
				paused = _player$media.paused,
				preload = _player$media.preload,
				readyState = _player$media.readyState; // Set new source
  
			player.media.src = source.getAttribute('src'); // Prevent loading if preload="none" and the current source isn't loaded (#1044)
  
			if (preload !== 'none' || readyState) {
			  // Restore time
			  player.once('loadedmetadata', function () {
				player.currentTime = currentTime; // Resume playing
  
				if (!paused) {
				  player.play();
				}
			  }); // Load new source
  
			  player.media.load();
			} // Trigger change event
  
  
			triggerEvent.call(player, player.media, 'qualitychange', false, {
			  quality: input
			});
		  }
		});
	  },
	  // Cancel current network requests
	  // See https://github.com/sampotts/plyr/issues/174
	  cancelRequests: function cancelRequests() {
		if (!this.isHTML5) {
		  return;
		} // Remove child sources
  
  
		removeElement(html5.getSources.call(this)); // Set blank video src attribute
		// This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
		// Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection
  
		this.media.setAttribute('src', this.config.blankVideo); // Load the new empty source
		// This will cancel existing requests
		// See https://github.com/sampotts/plyr/issues/174
  
		this.media.load(); // Debugging
  
		this.debug.log('Cancelled network requests');
	  }
	};
  
	// ==========================================================================
  
	function dedupe(array) {
	  if (!is$1.array(array)) {
		return array;
	  }
  
	  return array.filter(function (item, index) {
		return array.indexOf(item) === index;
	  });
	} // Get the closest value in an array
  
	function closest(array, value) {
	  if (!is$1.array(array) || !array.length) {
		return null;
	  }
  
	  return array.reduce(function (prev, curr) {
		return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
	  });
	}
  
	// ==========================================================================
  
	function generateId(prefix) {
	  return "".concat(prefix, "-").concat(Math.floor(Math.random() * 10000));
	} // Format string
  
	function format(input) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	  }
  
	  if (is$1.empty(input)) {
		return input;
	  }
  
	  return input.toString().replace(/{(\d+)}/g, function (match, i) {
		return args[i].toString();
	  });
	} // Get percentage
  
	function getPercentage(current, max) {
	  if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
		return 0;
	  }
  
	  return (current / max * 100).toFixed(2);
	} // Replace all occurances of a string in a string
  
	function replaceAll() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var find = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  return input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g'), replace.toString());
	} // Convert to title case
  
	function toTitleCase() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  return input.toString().replace(/\w\S*/g, function (text) {
		return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	  });
	} // Convert string to pascalCase
  
	function toPascalCase() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var string = input.toString(); // Convert kebab case
  
	  string = replaceAll(string, '-', ' '); // Convert snake case
  
	  string = replaceAll(string, '_', ' '); // Convert to title case
  
	  string = toTitleCase(string); // Convert to pascal case
  
	  return replaceAll(string, ' ', '');
	} // Convert string to pascalCase
  
	function toCamelCase() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var string = input.toString(); // Convert to pascal case
  
	  string = toPascalCase(string); // Convert first character to lowercase
  
	  return string.charAt(0).toLowerCase() + string.slice(1);
	} // Remove HTML from a string
  
	function stripHTML(source) {
	  var fragment = document.createDocumentFragment();
	  var element = document.createElement('div');
	  fragment.appendChild(element);
	  element.innerHTML = source;
	  return fragment.firstChild.innerText;
	} // Like outerHTML, but also works for DocumentFragment
  
	function getHTML(element) {
	  var wrapper = document.createElement('div');
	  wrapper.appendChild(element);
	  return wrapper.innerHTML;
	}
  
	var resources = {
	  pip: 'PIP',
	  airplay: 'AirPlay',
	  html5: 'HTML5',
	  vimeo: 'Vimeo',
	  youtube: 'YouTube'
	};
	var i18n = {
	  get: function get() {
		var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
		if (is$1.empty(key) || is$1.empty(config)) {
		  return '';
		}
  
		var string = getDeep(config.i18n, key);
  
		if (is$1.empty(string)) {
		  if (Object.keys(resources).includes(key)) {
			return resources[key];
		  }
  
		  return '';
		}
  
		var replace = {
		  '{seektime}': config.seekTime,
		  '{title}': config.title
		};
		Object.entries(replace).forEach(function (_ref) {
		  var _ref2 = _slicedToArray(_ref, 2),
			  key = _ref2[0],
			  value = _ref2[1];
  
		  string = replaceAll(string, key, value);
		});
		return string;
	  }
	};
  
	var Storage =
	/*#__PURE__*/
	function () {
	  function Storage(player) {
		_classCallCheck(this, Storage);
  
		this.enabled = player.config.storage.enabled;
		this.key = player.config.storage.key;
	  } // Check for actual support (see if we can use it)
  
  
	  _createClass(Storage, [{
		key: "get",
		value: function get(key) {
		  if (!Storage.supported || !this.enabled) {
			return null;
		  }
  
		  var store = window.localStorage.getItem(this.key);
  
		  if (is$1.empty(store)) {
			return null;
		  }
  
		  var json = JSON.parse(store);
		  return is$1.string(key) && key.length ? json[key] : json;
		}
	  }, {
		key: "set",
		value: function set(object) {
		  // Bail if we don't have localStorage support or it's disabled
		  if (!Storage.supported || !this.enabled) {
			return;
		  } // Can only store objectst
  
  
		  if (!is$1.object(object)) {
			return;
		  } // Get current storage
  
  
		  var storage = this.get(); // Default to empty object
  
		  if (is$1.empty(storage)) {
			storage = {};
		  } // Update the working copy of the values
  
  
		  extend(storage, object); // Update storage
  
		  window.localStorage.setItem(this.key, JSON.stringify(storage));
		}
	  }], [{
		key: "supported",
		get: function get() {
		  try {
			if (!('localStorage' in window)) {
			  return false;
			}
  
			var test = '___test'; // Try to use it (it might be disabled, e.g. user is in private mode)
			// see: https://github.com/sampotts/plyr/issues/131
  
			window.localStorage.setItem(test, test);
			window.localStorage.removeItem(test);
			return true;
		  } catch (e) {
			return false;
		  }
		}
	  }]);
  
	  return Storage;
	}();
  
	// ==========================================================================
	// Fetch wrapper
	// Using XHR to avoid issues with older browsers
	// ==========================================================================
	function fetch(url) {
	  var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
	  return new Promise(function (resolve, reject) {
		try {
		  var request = new XMLHttpRequest(); // Check for CORS support
  
		  if (!('withCredentials' in request)) {
			return;
		  }
  
		  request.addEventListener('load', function () {
			if (responseType === 'text') {
			  try {
				resolve(JSON.parse(request.responseText));
			  } catch (e) {
				resolve(request.responseText);
			  }
			} else {
			  resolve(request.response);
			}
		  });
		  request.addEventListener('error', function () {
			throw new Error(request.status);
		  });
		  request.open('GET', url, true); // Set the required response type
  
		  request.responseType = responseType;
		  request.send();
		} catch (e) {
		  reject(e);
		}
	  });
	}
  
	// ==========================================================================
  
	function loadSprite(url, id) {
	  if (!is$1.string(url)) {
		return;
	  }
  
	  var prefix = 'cache';
	  var hasId = is$1.string(id);
	  var isCached = false;
  
	  var exists = function exists() {
		return document.getElementById(id) !== null;
	  };
  
	  var update = function update(container, data) {
		container.innerHTML = data; // Check again incase of race condition
  
		if (hasId && exists()) {
		  return;
		} // Inject the SVG to the body
  
  
		document.body.insertAdjacentElement('afterbegin', container);
	  }; // Only load once if ID set
  
  
	  if (!hasId || !exists()) {
		var useStorage = Storage.supported; // Create container
  
		var container = document.createElement('div');
		container.setAttribute('hidden', '');
  
		if (hasId) {
		  container.setAttribute('id', id);
		} // Check in cache
  
  
		if (useStorage) {
		  var cached = window.localStorage.getItem("".concat(prefix, "-").concat(id));
		  isCached = cached !== null;
  
		  if (isCached) {
			var data = JSON.parse(cached);
			update(container, data.content);
		  }
		} // Get the sprite
  
  
		fetch(url).then(function (result) {
		  if (is$1.empty(result)) {
			return;
		  }
  
		  if (useStorage) {
			window.localStorage.setItem("".concat(prefix, "-").concat(id), JSON.stringify({
			  content: result
			}));
		  }
  
		  update(container, result);
		}).catch(function () {});
	  }
	}
  
	// ==========================================================================
  
	var getHours = function getHours(value) {
	  return Math.trunc(value / 60 / 60 % 60, 10);
	};
	var getMinutes = function getMinutes(value) {
	  return Math.trunc(value / 60 % 60, 10);
	};
	var getSeconds = function getSeconds(value) {
	  return Math.trunc(value % 60, 10);
	}; // Format time to UI friendly string
  
	function formatTime() {
	  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var displayHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  
	  // Bail if the value isn't a number
	  if (!is$1.number(time)) {
		return formatTime(null, displayHours, inverted);
	  } // Format time component to add leading zero
  
  
	  var format = function format(value) {
		return "0".concat(value).slice(-2);
	  }; // Breakdown to hours, mins, secs
  
  
	  var hours = getHours(time);
	  var mins = getMinutes(time);
	  var secs = getSeconds(time); // Do we need to display hours?
  
	  if (displayHours || hours > 0) {
		hours = "".concat(hours, ":");
	  } else {
		hours = '';
	  } // Render
  
  
	  return "".concat(inverted && time > 0 ? '-' : '').concat(hours).concat(format(mins), ":").concat(format(secs));
	}
  
	var controls = {
	  // Get icon URL
	  getIconUrl: function getIconUrl() {
		var url = new URL(this.config.iconUrl, window.location);
		var cors = url.host !== window.location.host || browser.isIE && !window.svg4everybody;
		return {
		  url: this.config.iconUrl,
		  cors: cors
		};
	  },
	  // Find the UI controls
	  findElements: function findElements() {
		try {
		  this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper); // Buttons
  
		  this.elements.buttons = {
			play: getElements.call(this, this.config.selectors.buttons.play),
			pause: getElement.call(this, this.config.selectors.buttons.pause),
			restart: getElement.call(this, this.config.selectors.buttons.restart),
			rewind: getElement.call(this, this.config.selectors.buttons.rewind),
			fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
			mute: getElement.call(this, this.config.selectors.buttons.mute),
			pip: getElement.call(this, this.config.selectors.buttons.pip),
			airplay: getElement.call(this, this.config.selectors.buttons.airplay),
			settings: getElement.call(this, this.config.selectors.buttons.settings),
			captions: getElement.call(this, this.config.selectors.buttons.captions),
			fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
		  }; // Progress
  
		  this.elements.progress = getElement.call(this, this.config.selectors.progress); // Inputs
  
		  this.elements.inputs = {
			seek: getElement.call(this, this.config.selectors.inputs.seek),
			volume: getElement.call(this, this.config.selectors.inputs.volume)
		  }; // Display
  
		  this.elements.display = {
			buffer: getElement.call(this, this.config.selectors.display.buffer),
			currentTime: getElement.call(this, this.config.selectors.display.currentTime),
			duration: getElement.call(this, this.config.selectors.display.duration)
		  }; // Seek tooltip
  
		  if (is$1.element(this.elements.progress)) {
			this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip));
		  }
  
		  return true;
		} catch (error) {
		  // Log it
		  this.debug.warn('It looks like there is a problem with your custom controls HTML', error); // Restore native video controls
  
		  this.toggleNativeControls(true);
		  return false;
		}
	  },
	  // Create <svg> icon
	  createIcon: function createIcon(type, attributes) {
		var namespace = 'http://www.w3.org/2000/svg';
		var iconUrl = controls.getIconUrl.call(this);
		var iconPath = "".concat(!iconUrl.cors ? iconUrl.url : '', "#").concat(this.config.iconPrefix); // Create <svg>
  
		var icon = document.createElementNS(namespace, 'svg');
		setAttributes(icon, extend(attributes, {
		  role: 'presentation',
		  focusable: 'false'
		})); // Create the <use> to reference sprite
  
		var use = document.createElementNS(namespace, 'use');
		var path = "".concat(iconPath, "-").concat(type); // Set `href` attributes
		// https://github.com/sampotts/plyr/issues/460
		// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href
  
		if ('href' in use) {
		  use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
		} // Always set the older attribute even though it's "deprecated" (it'll be around for ages)
  
  
		use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path); // Add <use> to <svg>
  
		icon.appendChild(use);
		return icon;
	  },
	  // Create hidden text label
	  createLabel: function createLabel(key) {
		var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var text = i18n.get(key, this.config);
		var attributes = Object.assign({}, attr, {
		  class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(' ')
		});
		return createElement('span', attributes, text);
	  },
	  // Create a badge
	  createBadge: function createBadge(text) {
		if (is$1.empty(text)) {
		  return null;
		}
  
		var badge = createElement('span', {
		  class: this.config.classNames.menu.value
		});
		badge.appendChild(createElement('span', {
		  class: this.config.classNames.menu.badge
		}, text));
		return badge;
	  },
	  // Create a <button>
	  createButton: function createButton(buttonType, attr) {
		var _this = this;
  
		var attributes = extend({}, attr);
		var type = toCamelCase(buttonType);
		var props = {
		  element: 'button',
		  toggle: false,
		  label: null,
		  icon: null,
		  labelPressed: null,
		  iconPressed: null
		};
		['element', 'icon', 'label'].forEach(function (key) {
		  if (Object.keys(attributes).includes(key)) {
			props[key] = attributes[key];
			delete attributes[key];
		  }
		}); // Default to 'button' type to prevent form submission
  
		if (props.element === 'button' && !Object.keys(attributes).includes('type')) {
		  attributes.type = 'button';
		} // Set class name
  
  
		if (Object.keys(attributes).includes('class')) {
		  if (!attributes.class.split(' ').some(function (c) {
			return c === _this.config.classNames.control;
		  })) {
			extend(attributes, {
			  class: "".concat(attributes.class, " ").concat(this.config.classNames.control)
			});
		  }
		} else {
		  attributes.class = this.config.classNames.control;
		} // Large play button
  
  
		switch (buttonType) {
		  case 'play':
			props.toggle = true;
			props.label = 'play';
			props.labelPressed = 'pause';
			props.icon = 'play';
			props.iconPressed = 'pause';
			break;
  
		  case 'mute':
			props.toggle = true;
			props.label = 'mute';
			props.labelPressed = 'unmute';
			props.icon = 'volume';
			props.iconPressed = 'muted';
			break;
  
		  case 'captions':
			props.toggle = true;
			props.label = 'enableCaptions';
			props.labelPressed = 'disableCaptions';
			props.icon = 'captions-off';
			props.iconPressed = 'captions-on';
			break;
  
		  case 'fullscreen':
			props.toggle = true;
			props.label = 'enterFullscreen';
			props.labelPressed = 'exitFullscreen';
			props.icon = 'enter-fullscreen';
			props.iconPressed = 'exit-fullscreen';
			break;
  
		  case 'play-large':
			attributes.class += " ".concat(this.config.classNames.control, "--overlaid");
			type = 'play';
			props.label = 'play';
			props.icon = 'play';
			break;
  
		  default:
			if (is$1.empty(props.label)) {
			  props.label = type;
			}
  
			if (is$1.empty(props.icon)) {
			  props.icon = buttonType;
			}
  
		}
  
		var button = createElement(props.element); // Setup toggle icon and labels
  
		if (props.toggle) {
		  // Icon
		  button.appendChild(controls.createIcon.call(this, props.iconPressed, {
			class: 'icon--pressed'
		  }));
		  button.appendChild(controls.createIcon.call(this, props.icon, {
			class: 'icon--not-pressed'
		  })); // Label/Tooltip
  
		  button.appendChild(controls.createLabel.call(this, props.labelPressed, {
			class: 'label--pressed'
		  }));
		  button.appendChild(controls.createLabel.call(this, props.label, {
			class: 'label--not-pressed'
		  }));
		} else {
		  button.appendChild(controls.createIcon.call(this, props.icon));
		  button.appendChild(controls.createLabel.call(this, props.label));
		} // Merge and set attributes
  
  
		extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
		setAttributes(button, attributes); // We have multiple play buttons
  
		if (type === 'play') {
		  if (!is$1.array(this.elements.buttons[type])) {
			this.elements.buttons[type] = [];
		  }
  
		  this.elements.buttons[type].push(button);
		} else {
		  this.elements.buttons[type] = button;
		}
  
		return button;
	  },
	  // Create an <input type='range'>
	  createRange: function createRange(type, attributes) {
		// Seek input
		var input = createElement('input', extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
		  type: 'range',
		  min: 0,
		  max: 100,
		  step: 0.01,
		  value: 0,
		  autocomplete: 'off',
		  // A11y fixes for https://github.com/sampotts/plyr/issues/905
		  role: 'slider',
		  'aria-label': i18n.get(type, this.config),
		  'aria-valuemin': 0,
		  'aria-valuemax': 100,
		  'aria-valuenow': 0
		}, attributes));
		this.elements.inputs[type] = input; // Set the fill for webkit now
  
		controls.updateRangeFill.call(this, input); // Improve support on touch devices
  
		RangeTouch.setup(input);
		return input;
	  },
	  // Create a <progress>
	  createProgress: function createProgress(type, attributes) {
		var progress = createElement('progress', extend(getAttributesFromSelector(this.config.selectors.display[type]), {
		  min: 0,
		  max: 100,
		  value: 0,
		  role: 'progressbar',
		  'aria-hidden': true
		}, attributes)); // Create the label inside
  
		if (type !== 'volume') {
		  progress.appendChild(createElement('span', null, '0'));
		  var suffixKey = {
			played: 'played',
			buffer: 'buffered'
		  }[type];
		  var suffix = suffixKey ? i18n.get(suffixKey, this.config) : '';
		  progress.innerText = "% ".concat(suffix.toLowerCase());
		}
  
		this.elements.display[type] = progress;
		return progress;
	  },
	  // Create time display
	  createTime: function createTime(type, attrs) {
		var attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
		var container = createElement('div', extend(attributes, {
		  class: "".concat(attributes.class ? attributes.class : '', " ").concat(this.config.classNames.display.time, " ").trim(),
		  'aria-label': i18n.get(type, this.config)
		}), '00:00'); // Reference for updates
  
		this.elements.display[type] = container;
		return container;
	  },
	  // Bind keyboard shortcuts for a menu item
	  // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
	  bindMenuItemShortcuts: function bindMenuItemShortcuts(menuItem, type) {
		var _this2 = this;
  
		// Navigate through menus via arrow keys and space
		on(menuItem, 'keydown keyup', function (event) {
		  // We only care about space and ⬆️ ⬇️️ ➡️
		  if (![32, 38, 39, 40].includes(event.which)) {
			return;
		  } // Prevent play / seek
  
  
		  event.preventDefault();
		  event.stopPropagation(); // We're just here to prevent the keydown bubbling
  
		  if (event.type === 'keydown') {
			return;
		  }
  
		  var isRadioButton = matches$1(menuItem, '[role="menuitemradio"]'); // Show the respective menu
  
		  if (!isRadioButton && [32, 39].includes(event.which)) {
			controls.showMenuPanel.call(_this2, type, true);
		  } else {
			var target;
  
			if (event.which !== 32) {
			  if (event.which === 40 || isRadioButton && event.which === 39) {
				target = menuItem.nextElementSibling;
  
				if (!is$1.element(target)) {
				  target = menuItem.parentNode.firstElementChild;
				}
			  } else {
				target = menuItem.previousElementSibling;
  
				if (!is$1.element(target)) {
				  target = menuItem.parentNode.lastElementChild;
				}
			  }
  
			  setFocus.call(_this2, target, true);
			}
		  }
		}, false); // Enter will fire a `click` event but we still need to manage focus
		// So we bind to keyup which fires after and set focus here
  
		on(menuItem, 'keyup', function (event) {
		  if (event.which !== 13) {
			return;
		  }
  
		  controls.focusFirstMenuItem.call(_this2, null, true);
		});
	  },
	  // Create a settings menu item
	  createMenuItem: function createMenuItem(_ref) {
		var _this3 = this;
  
		var value = _ref.value,
			list = _ref.list,
			type = _ref.type,
			title = _ref.title,
			_ref$badge = _ref.badge,
			badge = _ref$badge === void 0 ? null : _ref$badge,
			_ref$checked = _ref.checked,
			checked = _ref$checked === void 0 ? false : _ref$checked;
		var attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
		var menuItem = createElement('button', extend(attributes, {
		  type: 'button',
		  role: 'menuitemradio',
		  class: "".concat(this.config.classNames.control, " ").concat(attributes.class ? attributes.class : '').trim(),
		  'aria-checked': checked,
		  value: value
		}));
		var flex = createElement('span'); // We have to set as HTML incase of special characters
  
		flex.innerHTML = title;
  
		if (is$1.element(badge)) {
		  flex.appendChild(badge);
		}
  
		menuItem.appendChild(flex); // Replicate radio button behaviour
  
		Object.defineProperty(menuItem, 'checked', {
		  enumerable: true,
		  get: function get() {
			return menuItem.getAttribute('aria-checked') === 'true';
		  },
		  set: function set(checked) {
			// Ensure exclusivity
			if (checked) {
			  Array.from(menuItem.parentNode.children).filter(function (node) {
				return matches$1(node, '[role="menuitemradio"]');
			  }).forEach(function (node) {
				return node.setAttribute('aria-checked', 'false');
			  });
			}
  
			menuItem.setAttribute('aria-checked', checked ? 'true' : 'false');
		  }
		});
		this.listeners.bind(menuItem, 'click keyup', function (event) {
		  if (is$1.keyboardEvent(event) && event.which !== 32) {
			return;
		  }
  
		  event.preventDefault();
		  event.stopPropagation();
		  menuItem.checked = true;
  
		  switch (type) {
			case 'language':
			  _this3.currentTrack = Number(value);
			  break;
  
			case 'quality':
			  _this3.quality = value;
			  break;
  
			case 'speed':
			  _this3.speed = parseFloat(value);
			  break;
  
			default:
			  break;
		  }
  
		  controls.showMenuPanel.call(_this3, 'home', is$1.keyboardEvent(event));
		}, type, false);
		controls.bindMenuItemShortcuts.call(this, menuItem, type);
		list.appendChild(menuItem);
	  },
	  // Format a time for display
	  formatTime: function formatTime$1() {
		var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var inverted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
		// Bail if the value isn't a number
		if (!is$1.number(time)) {
		  return time;
		} // Always display hours if duration is over an hour
  
  
		var forceHours = getHours(this.duration) > 0;
		return formatTime(time, forceHours, inverted);
	  },
	  // Update the displayed time
	  updateTimeDisplay: function updateTimeDisplay() {
		var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  
		// Bail if there's no element to display or the value isn't a number
		if (!is$1.element(target) || !is$1.number(time)) {
		  return;
		} // eslint-disable-next-line no-param-reassign
  
  
		target.innerText = controls.formatTime(time, inverted);
	  },
	  // Update volume UI and storage
	  updateVolume: function updateVolume() {
		if (!this.supported.ui) {
		  return;
		} // Update range
  
  
		if (is$1.element(this.elements.inputs.volume)) {
		  controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
		} // Update mute state
  
  
		if (is$1.element(this.elements.buttons.mute)) {
		  this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
		}
	  },
	  // Update seek value and lower fill
	  setRange: function setRange(target) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  
		if (!is$1.element(target)) {
		  return;
		} // eslint-disable-next-line
  
  
		target.value = value; // Webkit range fill
  
		controls.updateRangeFill.call(this, target);
	  },
	  // Update <progress> elements
	  updateProgress: function updateProgress(event) {
		var _this4 = this;
  
		if (!this.supported.ui || !is$1.event(event)) {
		  return;
		}
  
		var value = 0;
  
		var setProgress = function setProgress(target, input) {
		  var value = is$1.number(input) ? input : 0;
		  var progress = is$1.element(target) ? target : _this4.elements.display.buffer; // Update value and label
  
		  if (is$1.element(progress)) {
			progress.value = value; // Update text label inside
  
			var label = progress.getElementsByTagName('span')[0];
  
			if (is$1.element(label)) {
			  label.childNodes[0].nodeValue = value;
			}
		  }
		};
  
		if (event) {
		  switch (event.type) {
			// Video playing
			case 'timeupdate':
			case 'seeking':
			case 'seeked':
			  value = getPercentage(this.currentTime, this.duration); // Set seek range value only if it's a 'natural' time event
  
			  if (event.type === 'timeupdate') {
				controls.setRange.call(this, this.elements.inputs.seek, value);
			  }
  
			  break;
			// Check buffer status
  
			case 'playing':
			case 'progress':
			  setProgress(this.elements.display.buffer, this.buffered * 100);
			  break;
  
			default:
			  break;
		  }
		}
	  },
	  // Webkit polyfill for lower fill range
	  updateRangeFill: function updateRangeFill(target) {
		// Get range from event if event passed
		var range = is$1.event(target) ? target.target : target; // Needs to be a valid <input type='range'>
  
		if (!is$1.element(range) || range.getAttribute('type') !== 'range') {
		  return;
		} // Set aria values for https://github.com/sampotts/plyr/issues/905
  
  
		if (matches$1(range, this.config.selectors.inputs.seek)) {
		  range.setAttribute('aria-valuenow', this.currentTime);
		  var currentTime = controls.formatTime(this.currentTime);
		  var duration = controls.formatTime(this.duration);
		  var format = i18n.get('seekLabel', this.config);
		  range.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
		} else if (matches$1(range, this.config.selectors.inputs.volume)) {
		  var percent = range.value * 100;
		  range.setAttribute('aria-valuenow', percent);
		  range.setAttribute('aria-valuetext', "".concat(percent.toFixed(1), "%"));
		} else {
		  range.setAttribute('aria-valuenow', range.value);
		} // WebKit only
  
  
		if (!browser.isWebkit) {
		  return;
		} // Set CSS custom property
  
  
		range.style.setProperty('--value', "".concat(range.value / range.max * 100, "%"));
	  },
	  // Update hover tooltip for seeking
	  updateSeekTooltip: function updateSeekTooltip(event) {
		var _this5 = this;
  
		// Bail if setting not true
		if (!this.config.tooltips.seek || !is$1.element(this.elements.inputs.seek) || !is$1.element(this.elements.display.seekTooltip) || this.duration === 0) {
		  return;
		} // Calculate percentage
  
  
		var percent = 0;
		var clientRect = this.elements.progress.getBoundingClientRect();
		var visible = "".concat(this.config.classNames.tooltip, "--visible");
  
		var toggle = function toggle(_toggle) {
		  toggleClass(_this5.elements.display.seekTooltip, visible, _toggle);
		}; // Hide on touch
  
  
		if (this.touch) {
		  toggle(false);
		  return;
		} // Determine percentage, if already visible
  
  
		if (is$1.event(event)) {
		  percent = 100 / clientRect.width * (event.pageX - clientRect.left);
		} else if (hasClass(this.elements.display.seekTooltip, visible)) {
		  percent = parseFloat(this.elements.display.seekTooltip.style.left, 10);
		} else {
		  return;
		} // Set bounds
  
  
		if (percent < 0) {
		  percent = 0;
		} else if (percent > 100) {
		  percent = 100;
		} // Display the time a click would seek to
  
  
		controls.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * percent); // Set position
  
		this.elements.display.seekTooltip.style.left = "".concat(percent, "%"); // Show/hide the tooltip
		// If the event is a moues in/out and percentage is inside bounds
  
		if (is$1.event(event) && ['mouseenter', 'mouseleave'].includes(event.type)) {
		  toggle(event.type === 'mouseenter');
		}
	  },
	  // Handle time change event
	  timeUpdate: function timeUpdate(event) {
		// Only invert if only one time element is displayed and used for both duration and currentTime
		var invert = !is$1.element(this.elements.display.duration) && this.config.invertTime; // Duration
  
		controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert); // Ignore updates while seeking
  
		if (event && event.type === 'timeupdate' && this.media.seeking) {
		  return;
		} // Playing progress
  
  
		controls.updateProgress.call(this, event);
	  },
	  // Show the duration on metadataloaded or durationchange events
	  durationUpdate: function durationUpdate() {
		// Bail if no UI or durationchange event triggered after playing/seek when invertTime is false
		if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
		  return;
		} // If duration is the 2**32 (shaka), Infinity (HLS), DASH-IF (Number.MAX_SAFE_INTEGER || Number.MAX_VALUE) indicating live we hide the currentTime and progressbar.
		// https://github.com/video-dev/hls.js/blob/5820d29d3c4c8a46e8b75f1e3afa3e68c1a9a2db/src/controller/buffer-controller.js#L415
		// https://github.com/google/shaka-player/blob/4d889054631f4e1cf0fbd80ddd2b71887c02e232/lib/media/streaming_engine.js#L1062
		// https://github.com/Dash-Industry-Forum/dash.js/blob/69859f51b969645b234666800d4cb596d89c602d/src/dash/models/DashManifestModel.js#L338
  
  
		if (this.duration >= Math.pow(2, 32)) {
		  toggleHidden(this.elements.display.currentTime, true);
		  toggleHidden(this.elements.progress, true);
		  return;
		} // Update ARIA values
  
  
		if (is$1.element(this.elements.inputs.seek)) {
		  this.elements.inputs.seek.setAttribute('aria-valuemax', this.duration);
		} // If there's a spot to display duration
  
  
		var hasDuration = is$1.element(this.elements.display.duration); // If there's only one time display, display duration there
  
		if (!hasDuration && this.config.displayDuration && this.paused) {
		  controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
		} // If there's a duration element, update content
  
  
		if (hasDuration) {
		  controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
		} // Update the tooltip (if visible)
  
  
		controls.updateSeekTooltip.call(this);
	  },
	  // Hide/show a tab
	  toggleMenuButton: function toggleMenuButton(setting, toggle) {
		toggleHidden(this.elements.settings.buttons[setting], !toggle);
	  },
	  // Update the selected setting
	  updateSetting: function updateSetting(setting, container, input) {
		var pane = this.elements.settings.panels[setting];
		var value = null;
		var list = container;
  
		if (setting === 'captions') {
		  value = this.currentTrack;
		} else {
		  value = !is$1.empty(input) ? input : this[setting]; // Get default
  
		  if (is$1.empty(value)) {
			value = this.config[setting].default;
		  } // Unsupported value
  
  
		  if (!is$1.empty(this.options[setting]) && !this.options[setting].includes(value)) {
			this.debug.warn("Unsupported value of '".concat(value, "' for ").concat(setting));
			return;
		  } // Disabled value
  
  
		  if (!this.config[setting].options.includes(value)) {
			this.debug.warn("Disabled value of '".concat(value, "' for ").concat(setting));
			return;
		  }
		} // Get the list if we need to
  
  
		if (!is$1.element(list)) {
		  list = pane && pane.querySelector('[role="menu"]');
		} // If there's no list it means it's not been rendered...
  
  
		if (!is$1.element(list)) {
		  return;
		} // Update the label
  
  
		var label = this.elements.settings.buttons[setting].querySelector(".".concat(this.config.classNames.menu.value));
		label.innerHTML = controls.getLabel.call(this, setting, value); // Find the radio option and check it
  
		var target = list && list.querySelector("[value=\"".concat(value, "\"]"));
  
		if (is$1.element(target)) {
		  target.checked = true;
		}
	  },
	  // Translate a value into a nice label
	  getLabel: function getLabel(setting, value) {
		switch (setting) {
		  case 'speed':
			return value === 1 ? i18n.get('normal', this.config) : "".concat(value, "&times;");
  
		  case 'quality':
			if (is$1.number(value)) {
			  var label = i18n.get("qualityLabel.".concat(value), this.config);
  
			  if (!label.length) {
				return "".concat(value, "p");
			  }
  
			  return label;
			}
  
			return toTitleCase(value);
  
		  case 'captions':
			return captions.getLabel.call(this);
  
		  default:
			return null;
		}
	  },
	  // Set the quality menu
	  setQualityMenu: function setQualityMenu(options) {
		var _this6 = this;
  
		// Menu required
		if (!is$1.element(this.elements.settings.panels.quality)) {
		  return;
		}
  
		var type = 'quality';
		var list = this.elements.settings.panels.quality.querySelector('[role="menu"]'); // Set options if passed and filter based on uniqueness and config
  
		if (is$1.array(options)) {
		  this.options.quality = dedupe(options).filter(function (quality) {
			return _this6.config.quality.options.includes(quality);
		  });
		} // Toggle the pane and tab
  
  
		var toggle = !is$1.empty(this.options.quality) && this.options.quality.length > 1;
		controls.toggleMenuButton.call(this, type, toggle); // Empty the menu
  
		emptyElement(list); // Check if we need to toggle the parent
  
		controls.checkMenu.call(this); // If we're hiding, nothing more to do
  
		if (!toggle) {
		  return;
		} // Get the badge HTML for HD, 4K etc
  
  
		var getBadge = function getBadge(quality) {
		  var label = i18n.get("qualityBadge.".concat(quality), _this6.config);
  
		  if (!label.length) {
			return null;
		  }
  
		  return controls.createBadge.call(_this6, label);
		}; // Sort options by the config and then render options
  
  
		this.options.quality.sort(function (a, b) {
		  var sorting = _this6.config.quality.options;
		  return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
		}).forEach(function (quality) {
		  controls.createMenuItem.call(_this6, {
			value: quality,
			list: list,
			type: type,
			title: controls.getLabel.call(_this6, 'quality', quality),
			badge: getBadge(quality)
		  });
		});
		controls.updateSetting.call(this, type, list);
	  },
	  // Set the looping options
  
	  /* setLoopMenu() {
		  // Menu required
		  if (!is.element(this.elements.settings.panels.loop)) {
			  return;
		  }
		   const options = ['start', 'end', 'all', 'reset'];
		  const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
		   // Show the pane and tab
		  toggleHidden(this.elements.settings.buttons.loop, false);
		  toggleHidden(this.elements.settings.panels.loop, false);
		   // Toggle the pane and tab
		  const toggle = !is.empty(this.loop.options);
		  controls.toggleMenuButton.call(this, 'loop', toggle);
		   // Empty the menu
		  emptyElement(list);
		   options.forEach(option => {
			  const item = createElement('li');
			   const button = createElement(
				  'button',
				  extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
					  type: 'button',
					  class: this.config.classNames.control,
					  'data-plyr-loop-action': option,
				  }),
				  i18n.get(option, this.config)
			  );
			   if (['start', 'end'].includes(option)) {
				  const badge = controls.createBadge.call(this, '00:00');
				  button.appendChild(badge);
			  }
			   item.appendChild(button);
			  list.appendChild(item);
		  });
	  }, */
	  // Get current selected caption language
	  // TODO: rework this to user the getter in the API?
	  // Set a list of available captions languages
	  setCaptionsMenu: function setCaptionsMenu() {
		var _this7 = this;
  
		// Menu required
		if (!is$1.element(this.elements.settings.panels.captions)) {
		  return;
		} // TODO: Captions or language? Currently it's mixed
  
  
		var type = 'captions';
		var list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
		var tracks = captions.getTracks.call(this);
		var toggle = Boolean(tracks.length); // Toggle the pane and tab
  
		controls.toggleMenuButton.call(this, type, toggle); // Empty the menu
  
		emptyElement(list); // Check if we need to toggle the parent
  
		controls.checkMenu.call(this); // If there's no captions, bail
  
		if (!toggle) {
		  return;
		} // Generate options data
  
  
		var options = tracks.map(function (track, value) {
		  return {
			value: value,
			checked: _this7.captions.toggled && _this7.currentTrack === value,
			title: captions.getLabel.call(_this7, track),
			badge: track.language && controls.createBadge.call(_this7, track.language.toUpperCase()),
			list: list,
			type: 'language'
		  };
		}); // Add the "Disabled" option to turn off captions
  
		options.unshift({
		  value: -1,
		  checked: !this.captions.toggled,
		  title: i18n.get('disabled', this.config),
		  list: list,
		  type: 'language'
		}); // Generate options
  
		options.forEach(controls.createMenuItem.bind(this));
		controls.updateSetting.call(this, type, list);
	  },
	  // Set a list of available captions languages
	  setSpeedMenu: function setSpeedMenu(options) {
		var _this8 = this;
  
		// Menu required
		if (!is$1.element(this.elements.settings.panels.speed)) {
		  return;
		}
  
		var type = 'speed';
		var list = this.elements.settings.panels.speed.querySelector('[role="menu"]'); // Set the speed options
  
		if (is$1.array(options)) {
		  this.options.speed = options;
		} else if (this.isHTML5 || this.isVimeo) {
		  this.options.speed = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
		} // Set options if passed and filter based on config
  
  
		this.options.speed = this.options.speed.filter(function (speed) {
		  return _this8.config.speed.options.includes(speed);
		}); // Toggle the pane and tab
  
		var toggle = !is$1.empty(this.options.speed) && this.options.speed.length > 1;
		controls.toggleMenuButton.call(this, type, toggle); // Empty the menu
  
		emptyElement(list); // Check if we need to toggle the parent
  
		controls.checkMenu.call(this); // If we're hiding, nothing more to do
  
		if (!toggle) {
		  return;
		} // Create items
  
  
		this.options.speed.forEach(function (speed) {
		  controls.createMenuItem.call(_this8, {
			value: speed,
			list: list,
			type: type,
			title: controls.getLabel.call(_this8, 'speed', speed)
		  });
		});
		controls.updateSetting.call(this, type, list);
	  },
	  // Check if we need to hide/show the settings menu
	  checkMenu: function checkMenu() {
		var buttons = this.elements.settings.buttons;
		var visible = !is$1.empty(buttons) && Object.values(buttons).some(function (button) {
		  return !button.hidden;
		});
		toggleHidden(this.elements.settings.menu, !visible);
	  },
	  // Focus the first menu item in a given (or visible) menu
	  focusFirstMenuItem: function focusFirstMenuItem(pane) {
		var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
		if (this.elements.settings.popup.hidden) {
		  return;
		}
  
		var target = pane;
  
		if (!is$1.element(target)) {
		  target = Object.values(this.elements.settings.panels).find(function (pane) {
			return !pane.hidden;
		  });
		}
  
		var firstItem = target.querySelector('[role^="menuitem"]');
		setFocus.call(this, firstItem, tabFocus);
	  },
	  // Show/hide menu
	  toggleMenu: function toggleMenu(input) {
		var popup = this.elements.settings.popup;
		var button = this.elements.buttons.settings; // Menu and button are required
  
		if (!is$1.element(popup) || !is$1.element(button)) {
		  return;
		} // True toggle by default
  
  
		var hidden = popup.hidden;
		var show = hidden;
  
		if (is$1.boolean(input)) {
		  show = input;
		} else if (is$1.keyboardEvent(input) && input.which === 27) {
		  show = false;
		} else if (is$1.event(input)) {
		  // If Plyr is in a shadowDOM, the event target is set to the component, instead of the
		  // Element in the shadowDOM. The path, if available, is complete.
		  var target = is$1.function(input.composedPath) ? input.composedPath()[0] : input.target;
		  var isMenuItem = popup.contains(target); // If the click was inside the menu or if the click
		  // wasn't the button or menu item and we're trying to
		  // show the menu (a doc click shouldn't show the menu)
  
		  if (isMenuItem || !isMenuItem && input.target !== button && show) {
			return;
		  }
		} // Set button attributes
  
  
		button.setAttribute('aria-expanded', show); // Show the actual popup
  
		toggleHidden(popup, !show); // Add class hook
  
		toggleClass(this.elements.container, this.config.classNames.menu.open, show); // Focus the first item if key interaction
  
		if (show && is$1.keyboardEvent(input)) {
		  controls.focusFirstMenuItem.call(this, null, true);
		} else if (!show && !hidden) {
		  // If closing, re-focus the button
		  setFocus.call(this, button, is$1.keyboardEvent(input));
		}
	  },
	  // Get the natural size of a menu panel
	  getMenuSize: function getMenuSize(tab) {
		var clone = tab.cloneNode(true);
		clone.style.position = 'absolute';
		clone.style.opacity = 0;
		clone.removeAttribute('hidden'); // Append to parent so we get the "real" size
  
		tab.parentNode.appendChild(clone); // Get the sizes before we remove
  
		var width = clone.scrollWidth;
		var height = clone.scrollHeight; // Remove from the DOM
  
		removeElement(clone);
		return {
		  width: width,
		  height: height
		};
	  },
	  // Show a panel in the menu
	  showMenuPanel: function showMenuPanel() {
		var _this9 = this;
  
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var target = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(type)); // Nothing to show, bail
  
		if (!is$1.element(target)) {
		  return;
		} // Hide all other panels
  
  
		var container = target.parentNode;
		var current = Array.from(container.children).find(function (node) {
		  return !node.hidden;
		}); // If we can do fancy animations, we'll animate the height/width
  
		if (support.transitions && !support.reducedMotion) {
		  // Set the current width as a base
		  container.style.width = "".concat(current.scrollWidth, "px");
		  container.style.height = "".concat(current.scrollHeight, "px"); // Get potential sizes
  
		  var size = controls.getMenuSize.call(this, target); // Restore auto height/width
  
		  var restore = function restore(event) {
			// We're only bothered about height and width on the container
			if (event.target !== container || !['width', 'height'].includes(event.propertyName)) {
			  return;
			} // Revert back to auto
  
  
			container.style.width = '';
			container.style.height = ''; // Only listen once
  
			off.call(_this9, container, transitionEndEvent, restore);
		  }; // Listen for the transition finishing and restore auto height/width
  
  
		  on.call(this, container, transitionEndEvent, restore); // Set dimensions to target
  
		  container.style.width = "".concat(size.width, "px");
		  container.style.height = "".concat(size.height, "px");
		} // Set attributes on current tab
  
  
		toggleHidden(current, true); // Set attributes on target
  
		toggleHidden(target, false); // Focus the first item
  
		controls.focusFirstMenuItem.call(this, target, tabFocus);
	  },
	  // Set the download URL
	  setDownloadUrl: function setDownloadUrl() {
		var button = this.elements.buttons.download; // Bail if no button
  
		if (!is$1.element(button)) {
		  return;
		} // Set attribute
  
  
		button.setAttribute('href', this.download);
	  },
	  // Build the default HTML
	  create: function create(data) {
		var _this10 = this;
  
		var bindMenuItemShortcuts = controls.bindMenuItemShortcuts,
			createButton = controls.createButton,
			createProgress = controls.createProgress,
			createRange = controls.createRange,
			createTime = controls.createTime,
			setQualityMenu = controls.setQualityMenu,
			setSpeedMenu = controls.setSpeedMenu,
			showMenuPanel = controls.showMenuPanel;
		this.elements.controls = null; // Larger overlaid play button
  
		if (this.config.controls.includes('play-large')) {
		  this.elements.container.appendChild(createButton.call(this, 'play-large'));
		} // Create the container
  
  
		var container = createElement('div', getAttributesFromSelector(this.config.selectors.controls.wrapper));
		this.elements.controls = container; // Default item attributes
  
		var defaultAttributes = {
		  class: 'plyr__controls__item'
		}; // Loop through controls in order
  
		dedupe(this.config.controls).forEach(function (control) {
		  // Restart button
		  if (control === 'restart') {
			container.appendChild(createButton.call(_this10, 'restart', defaultAttributes));
		  } // Rewind button
  
  
		  if (control === 'rewind') {
			container.appendChild(createButton.call(_this10, 'rewind', defaultAttributes));
		  } // Play/Pause button
  
  
		  if (control === 'play') {
			container.appendChild(createButton.call(_this10, 'play', defaultAttributes));
		  } // Fast forward button
  
  
		  if (control === 'fast-forward') {
			container.appendChild(createButton.call(_this10, 'fast-forward', defaultAttributes));
		  } // Progress
  
  
		  if (control === 'progress') {
			var progressContainer = createElement('div', {
			  class: "".concat(defaultAttributes.class, " plyr__progress__container")
			});
			var progress = createElement('div', getAttributesFromSelector(_this10.config.selectors.progress)); // Seek range slider
  
			progress.appendChild(createRange.call(_this10, 'seek', {
			  id: "plyr-seek-".concat(data.id)
			})); // Buffer progress
  
			progress.appendChild(createProgress.call(_this10, 'buffer')); // TODO: Add loop display indicator
			// Seek tooltip
  
			if (_this10.config.tooltips.seek) {
			  var tooltip = createElement('span', {
				class: _this10.config.classNames.tooltip
			  }, '00:00');
			  progress.appendChild(tooltip);
			  _this10.elements.display.seekTooltip = tooltip;
			}
  
			_this10.elements.progress = progress;
			progressContainer.appendChild(_this10.elements.progress);
			container.appendChild(progressContainer);
		  } // Media current time display
  
  
		  if (control === 'current-time') {
			container.appendChild(createTime.call(_this10, 'currentTime', defaultAttributes));
		  } // Media duration display
  
  
		  if (control === 'duration') {
			container.appendChild(createTime.call(_this10, 'duration', defaultAttributes));
		  } // Volume controls
  
  
		  if (control === 'mute' || control === 'volume') {
			var volume = _this10.elements.volume; // Create the volume container if needed
  
			if (!is$1.element(volume) || !container.contains(volume)) {
			  volume = createElement('div', extend({}, defaultAttributes, {
				class: "".concat(defaultAttributes.class, " plyr__volume").trim()
			  }));
			  _this10.elements.volume = volume;
			  container.appendChild(volume);
			} // Toggle mute button
  
  
			if (control === 'mute') {
			  volume.appendChild(createButton.call(_this10, 'mute'));
			} // Volume range control
  
  
			if (control === 'volume') {
			  // Set the attributes
			  var attributes = {
				max: 1,
				step: 0.05,
				value: _this10.config.volume
			  }; // Create the volume range slider
  
			  volume.appendChild(createRange.call(_this10, 'volume', extend(attributes, {
				id: "plyr-volume-".concat(data.id)
			  })));
			}
		  } // Toggle captions button
  
  
		  if (control === 'captions') {
			container.appendChild(createButton.call(_this10, 'captions', defaultAttributes));
		  } // Settings button / menu
  
  
		  if (control === 'settings' && !is$1.empty(_this10.config.settings)) {
			var _control = createElement('div', extend({}, defaultAttributes, {
			  class: "".concat(defaultAttributes.class, " plyr__menu").trim(),
			  hidden: ''
			}));
  
			_control.appendChild(createButton.call(_this10, 'settings', {
			  'aria-haspopup': true,
			  'aria-controls': "plyr-settings-".concat(data.id),
			  'aria-expanded': false
			}));
  
			var popup = createElement('div', {
			  class: 'plyr__menu__container',
			  id: "plyr-settings-".concat(data.id),
			  hidden: ''
			});
			var inner = createElement('div');
			var home = createElement('div', {
			  id: "plyr-settings-".concat(data.id, "-home")
			}); // Create the menu
  
			var menu = createElement('div', {
			  role: 'menu'
			});
			home.appendChild(menu);
			inner.appendChild(home);
			_this10.elements.settings.panels.home = home; // Build the menu items
  
			_this10.config.settings.forEach(function (type) {
			  // TODO: bundle this with the createMenuItem helper and bindings
			  var menuItem = createElement('button', extend(getAttributesFromSelector(_this10.config.selectors.buttons.settings), {
				type: 'button',
				class: "".concat(_this10.config.classNames.control, " ").concat(_this10.config.classNames.control, "--forward"),
				role: 'menuitem',
				'aria-haspopup': true,
				hidden: ''
			  })); // Bind menu shortcuts for keyboard users
  
			  bindMenuItemShortcuts.call(_this10, menuItem, type); // Show menu on click
  
			  on(menuItem, 'click', function () {
				showMenuPanel.call(_this10, type, false);
			  });
			  var flex = createElement('span', null, i18n.get(type, _this10.config));
			  var value = createElement('span', {
				class: _this10.config.classNames.menu.value
			  }); // Speed contains HTML entities
  
			  value.innerHTML = data[type];
			  flex.appendChild(value);
			  menuItem.appendChild(flex);
			  menu.appendChild(menuItem); // Build the panes
  
			  var pane = createElement('div', {
				id: "plyr-settings-".concat(data.id, "-").concat(type),
				hidden: ''
			  }); // Back button
  
			  var backButton = createElement('button', {
				type: 'button',
				class: "".concat(_this10.config.classNames.control, " ").concat(_this10.config.classNames.control, "--back")
			  }); // Visible label
  
			  backButton.appendChild(createElement('span', {
				'aria-hidden': true
			  }, i18n.get(type, _this10.config))); // Screen reader label
  
			  backButton.appendChild(createElement('span', {
				class: _this10.config.classNames.hidden
			  }, i18n.get('menuBack', _this10.config))); // Go back via keyboard
  
			  on(pane, 'keydown', function (event) {
				// We only care about <-
				if (event.which !== 37) {
				  return;
				} // Prevent seek
  
  
				event.preventDefault();
				event.stopPropagation(); // Show the respective menu
  
				showMenuPanel.call(_this10, 'home', true);
			  }, false); // Go back via button click
  
			  on(backButton, 'click', function () {
				showMenuPanel.call(_this10, 'home', false);
			  }); // Add to pane
  
			  pane.appendChild(backButton); // Menu
  
			  pane.appendChild(createElement('div', {
				role: 'menu'
			  }));
			  inner.appendChild(pane);
			  _this10.elements.settings.buttons[type] = menuItem;
			  _this10.elements.settings.panels[type] = pane;
			});
  
			popup.appendChild(inner);
  
			_control.appendChild(popup);
  
			container.appendChild(_control);
			_this10.elements.settings.popup = popup;
			_this10.elements.settings.menu = _control;
		  } // Picture in picture button
  
  
		  if (control === 'pip' && support.pip) {
			container.appendChild(createButton.call(_this10, 'pip', defaultAttributes));
		  } // Airplay button
  
  
		  if (control === 'airplay' && support.airplay) {
			container.appendChild(createButton.call(_this10, 'airplay', defaultAttributes));
		  } // Download button
  
  
		  if (control === 'download') {
			var _attributes = extend({}, defaultAttributes, {
			  element: 'a',
			  href: _this10.download,
			  target: '_blank'
			});
  
			var download = _this10.config.urls.download;
  
			if (!is$1.url(download) && _this10.isEmbed) {
			  extend(_attributes, {
				icon: "logo-".concat(_this10.provider),
				label: _this10.provider
			  });
			}
  
			container.appendChild(createButton.call(_this10, 'download', _attributes));
		  } // Toggle fullscreen button
  
  
		  if (control === 'fullscreen') {
			container.appendChild(createButton.call(_this10, 'fullscreen', defaultAttributes));
		  }
		}); // Set available quality levels
  
		if (this.isHTML5) {
		  setQualityMenu.call(this, html5.getQualityOptions.call(this));
		}
  
		setSpeedMenu.call(this);
		return container;
	  },
	  // Insert controls
	  inject: function inject() {
		var _this11 = this;
  
		// Sprite
		if (this.config.loadSprite) {
		  var icon = controls.getIconUrl.call(this); // Only load external sprite using AJAX
  
		  if (icon.cors) {
			loadSprite(icon.url, 'sprite-plyr');
		  }
		} // Create a unique ID
  
  
		this.id = Math.floor(Math.random() * 10000); // Null by default
  
		var container = null;
		this.elements.controls = null; // Set template properties
  
		var props = {
		  id: this.id,
		  seektime: this.config.seekTime,
		  title: this.config.title
		};
		var update = true; // If function, run it and use output
  
		if (is$1.function(this.config.controls)) {
		  this.config.controls = this.config.controls.call(this, props);
		} // Convert falsy controls to empty array (primarily for empty strings)
  
  
		if (!this.config.controls) {
		  this.config.controls = [];
		}
  
		if (is$1.element(this.config.controls) || is$1.string(this.config.controls)) {
		  // HTMLElement or Non-empty string passed as the option
		  container = this.config.controls;
		} else {
		  // Create controls
		  container = controls.create.call(this, {
			id: this.id,
			seektime: this.config.seekTime,
			speed: this.speed,
			quality: this.quality,
			captions: captions.getLabel.call(this) // TODO: Looping
			// loop: 'None',
  
		  });
		  update = false;
		} // Replace props with their value
  
  
		var replace = function replace(input) {
		  var result = input;
		  Object.entries(props).forEach(function (_ref2) {
			var _ref3 = _slicedToArray(_ref2, 2),
				key = _ref3[0],
				value = _ref3[1];
  
			result = replaceAll(result, "{".concat(key, "}"), value);
		  });
		  return result;
		}; // Update markup
  
  
		if (update) {
		  if (is$1.string(this.config.controls)) {
			container = replace(container);
		  } else if (is$1.element(container)) {
			container.innerHTML = replace(container.innerHTML);
		  }
		} // Controls container
  
  
		var target; // Inject to custom location
  
		if (is$1.string(this.config.selectors.controls.container)) {
		  target = document.querySelector(this.config.selectors.controls.container);
		} // Inject into the container by default
  
  
		if (!is$1.element(target)) {
		  target = this.elements.container;
		} // Inject controls HTML (needs to be before captions, hence "afterbegin")
  
  
		var insertMethod = is$1.element(container) ? 'insertAdjacentElement' : 'insertAdjacentHTML';
		target[insertMethod]('afterbegin', container); // Find the elements if need be
  
		if (!is$1.element(this.elements.controls)) {
		  controls.findElements.call(this);
		} // Add pressed property to buttons
  
  
		if (!is$1.empty(this.elements.buttons)) {
		  var addProperty = function addProperty(button) {
			var className = _this11.config.classNames.controlPressed;
			Object.defineProperty(button, 'pressed', {
			  enumerable: true,
			  get: function get() {
				return hasClass(button, className);
			  },
			  set: function set() {
				var pressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
				toggleClass(button, className, pressed);
			  }
			});
		  }; // Toggle classname when pressed property is set
  
  
		  Object.values(this.elements.buttons).filter(Boolean).forEach(function (button) {
			if (is$1.array(button) || is$1.nodeList(button)) {
			  Array.from(button).filter(Boolean).forEach(addProperty);
			} else {
			  addProperty(button);
			}
		  });
		} // Edge sometimes doesn't finish the paint so force a repaint
  
  
		if (browser.isEdge) {
		  repaint(target);
		} // Setup tooltips
  
  
		if (this.config.tooltips.controls) {
		  var _this$config = this.config,
			  classNames = _this$config.classNames,
			  selectors = _this$config.selectors;
		  var selector = "".concat(selectors.controls.wrapper, " ").concat(selectors.labels, " .").concat(classNames.hidden);
		  var labels = getElements.call(this, selector);
		  Array.from(labels).forEach(function (label) {
			toggleClass(label, _this11.config.classNames.hidden, false);
			toggleClass(label, _this11.config.classNames.tooltip, true);
		  });
		}
	  }
	};
  
	/**
	 * Parse a string to a URL object
	 * @param {String} input - the URL to be parsed
	 * @param {Boolean} safe - failsafe parsing
	 */
  
	function parseUrl(input) {
	  var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  var url = input;
  
	  if (safe) {
		var parser = document.createElement('a');
		parser.href = url;
		url = parser.href;
	  }
  
	  try {
		return new URL(url);
	  } catch (e) {
		return null;
	  }
	} // Convert object to URLSearchParams
  
	function buildUrlParams(input) {
	  var params = new URLSearchParams();
  
	  if (is$1.object(input)) {
		Object.entries(input).forEach(function (_ref) {
		  var _ref2 = _slicedToArray(_ref, 2),
			  key = _ref2[0],
			  value = _ref2[1];
  
		  params.set(key, value);
		});
	  }
  
	  return params;
	}
  
	var captions = {
	  // Setup captions
	  setup: function setup() {
		// Requires UI support
		if (!this.supported.ui) {
		  return;
		} // Only Vimeo and HTML5 video supported at this point
  
  
		if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
		  // Clear menu and hide
		  if (is$1.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
			controls.setCaptionsMenu.call(this);
		  }
  
		  return;
		} // Inject the container
  
  
		if (!is$1.element(this.elements.captions)) {
		  this.elements.captions = createElement('div', getAttributesFromSelector(this.config.selectors.captions));
		  insertAfter(this.elements.captions, this.elements.wrapper);
		} // Fix IE captions if CORS is used
		// Fetch captions and inject as blobs instead (data URIs not supported!)
  
  
		if (browser.isIE && window.URL) {
		  var elements = this.media.querySelectorAll('track');
		  Array.from(elements).forEach(function (track) {
			var src = track.getAttribute('src');
			var url = parseUrl(src);
  
			if (url !== null && url.hostname !== window.location.href.hostname && ['http:', 'https:'].includes(url.protocol)) {
			  fetch(src, 'blob').then(function (blob) {
				track.setAttribute('src', window.URL.createObjectURL(blob));
			  }).catch(function () {
				removeElement(track);
			  });
			}
		  });
		} // Get and set initial data
		// The "preferred" options are not realized unless / until the wanted language has a match
		// * languages: Array of user's browser languages.
		// * language:  The language preferred by user settings or config
		// * active:    The state preferred by user settings or config
		// * toggled:   The real captions state
  
  
		var browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
		var languages = dedupe(browserLanguages.map(function (language) {
		  return language.split('-')[0];
		}));
		var language = (this.storage.get('language') || this.config.captions.language || 'auto').toLowerCase(); // Use first browser language when language is 'auto'
  
		if (language === 'auto') {
		  var _languages = _slicedToArray(languages, 1);
  
		  language = _languages[0];
		}
  
		var active = this.storage.get('captions');
  
		if (!is$1.boolean(active)) {
		  active = this.config.captions.active;
		}
  
		Object.assign(this.captions, {
		  toggled: false,
		  active: active,
		  language: language,
		  languages: languages
		}); // Watch changes to textTracks and update captions menu
  
		if (this.isHTML5) {
		  var trackEvents = this.config.captions.update ? 'addtrack removetrack' : 'removetrack';
		  on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
		} // Update available languages in list next tick (the event must not be triggered before the listeners)
  
  
		setTimeout(captions.update.bind(this), 0);
	  },
	  // Update available language options in settings based on tracks
	  update: function update() {
		var _this = this;
  
		var tracks = captions.getTracks.call(this, true); // Get the wanted language
  
		var _this$captions = this.captions,
			active = _this$captions.active,
			language = _this$captions.language,
			meta = _this$captions.meta,
			currentTrackNode = _this$captions.currentTrackNode;
		var languageExists = Boolean(tracks.find(function (track) {
		  return track.language === language;
		})); // Handle tracks (add event listener and "pseudo"-default)
  
		if (this.isHTML5 && this.isVideo) {
		  tracks.filter(function (track) {
			return !meta.get(track);
		  }).forEach(function (track) {
			_this.debug.log('Track added', track); // Attempt to store if the original dom element was "default"
  
  
			meta.set(track, {
			  default: track.mode === 'showing'
			}); // Turn off native caption rendering to avoid double captions
  
			track.mode = 'hidden'; // Add event listener for cue changes
  
			on.call(_this, track, 'cuechange', function () {
			  return captions.updateCues.call(_this);
			});
		  });
		} // Update language first time it matches, or if the previous matching track was removed
  
  
		if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
		  captions.setLanguage.call(this, language);
		  captions.toggle.call(this, active && languageExists);
		} // Enable or disable captions based on track length
  
  
		toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is$1.empty(tracks)); // Update available languages in list
  
		if ((this.config.controls || []).includes('settings') && this.config.settings.includes('captions')) {
		  controls.setCaptionsMenu.call(this);
		}
	  },
	  // Toggle captions display
	  // Used internally for the toggleCaptions method, with the passive option forced to false
	  toggle: function toggle(input) {
		var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  
		// If there's no full support
		if (!this.supported.ui) {
		  return;
		}
  
		var toggled = this.captions.toggled; // Current state
  
		var activeClass = this.config.classNames.captions.active; // Get the next state
		// If the method is called without parameter, toggle based on current value
  
		var active = is$1.nullOrUndefined(input) ? !toggled : input; // Update state and trigger event
  
		if (active !== toggled) {
		  // When passive, don't override user preferences
		  if (!passive) {
			this.captions.active = active;
			this.storage.set({
			  captions: active
			});
		  } // Force language if the call isn't passive and there is no matching language to toggle to
  
  
		  if (!this.language && active && !passive) {
			var tracks = captions.getTracks.call(this);
			var track = captions.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), true); // Override user preferences to avoid switching languages if a matching track is added
  
			this.captions.language = track.language; // Set caption, but don't store in localStorage as user preference
  
			captions.set.call(this, tracks.indexOf(track));
			return;
		  } // Toggle button if it's enabled
  
  
		  if (this.elements.buttons.captions) {
			this.elements.buttons.captions.pressed = active;
		  } // Add class hook
  
  
		  toggleClass(this.elements.container, activeClass, active);
		  this.captions.toggled = active; // Update settings menu
  
		  controls.updateSetting.call(this, 'captions'); // Trigger event (not used internally)
  
		  triggerEvent.call(this, this.media, active ? 'captionsenabled' : 'captionsdisabled');
		}
	  },
	  // Set captions by track index
	  // Used internally for the currentTrack setter with the passive option forced to false
	  set: function set(index) {
		var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
		var tracks = captions.getTracks.call(this); // Disable captions if setting to -1
  
		if (index === -1) {
		  captions.toggle.call(this, false, passive);
		  return;
		}
  
		if (!is$1.number(index)) {
		  this.debug.warn('Invalid caption argument', index);
		  return;
		}
  
		if (!(index in tracks)) {
		  this.debug.warn('Track not found', index);
		  return;
		}
  
		if (this.captions.currentTrack !== index) {
		  this.captions.currentTrack = index;
		  var track = tracks[index];
  
		  var _ref = track || {},
			  language = _ref.language; // Store reference to node for invalidation on remove
  
  
		  this.captions.currentTrackNode = track; // Update settings menu
  
		  controls.updateSetting.call(this, 'captions'); // When passive, don't override user preferences
  
		  if (!passive) {
			this.captions.language = language;
			this.storage.set({
			  language: language
			});
		  } // Handle Vimeo captions
  
  
		  if (this.isVimeo) {
			this.embed.enableTextTrack(language);
		  } // Trigger event
  
  
		  triggerEvent.call(this, this.media, 'languagechange');
		} // Show captions
  
  
		captions.toggle.call(this, true, passive);
  
		if (this.isHTML5 && this.isVideo) {
		  // If we change the active track while a cue is already displayed we need to update it
		  captions.updateCues.call(this);
		}
	  },
	  // Set captions by language
	  // Used internally for the language setter with the passive option forced to false
	  setLanguage: function setLanguage(input) {
		var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  
		if (!is$1.string(input)) {
		  this.debug.warn('Invalid language argument', input);
		  return;
		} // Normalize
  
  
		var language = input.toLowerCase();
		this.captions.language = language; // Set currentTrack
  
		var tracks = captions.getTracks.call(this);
		var track = captions.findTrack.call(this, [language]);
		captions.set.call(this, tracks.indexOf(track), passive);
	  },
	  // Get current valid caption tracks
	  // If update is false it will also ignore tracks without metadata
	  // This is used to "freeze" the language options when captions.update is false
	  getTracks: function getTracks() {
		var _this2 = this;
  
		var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		// Handle media or textTracks missing or null
		var tracks = Array.from((this.media || {}).textTracks || []); // For HTML5, use cache instead of current tracks when it exists (if captions.update is false)
		// Filter out removed tracks and tracks that aren't captions/subtitles (for example metadata)
  
		return tracks.filter(function (track) {
		  return !_this2.isHTML5 || update || _this2.captions.meta.has(track);
		}).filter(function (track) {
		  return ['captions', 'subtitles'].includes(track.kind);
		});
	  },
	  // Match tracks based on languages and get the first
	  findTrack: function findTrack(languages) {
		var _this3 = this;
  
		var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var tracks = captions.getTracks.call(this);
  
		var sortIsDefault = function sortIsDefault(track) {
		  return Number((_this3.captions.meta.get(track) || {}).default);
		};
  
		var sorted = Array.from(tracks).sort(function (a, b) {
		  return sortIsDefault(b) - sortIsDefault(a);
		});
		var track;
		languages.every(function (language) {
		  track = sorted.find(function (track) {
			return track.language === language;
		  });
		  return !track; // Break iteration if there is a match
		}); // If no match is found but is required, get first
  
		return track || (force ? sorted[0] : undefined);
	  },
	  // Get the current track
	  getCurrentTrack: function getCurrentTrack() {
		return captions.getTracks.call(this)[this.currentTrack];
	  },
	  // Get UI label for track
	  getLabel: function getLabel(track) {
		var currentTrack = track;
  
		if (!is$1.track(currentTrack) && support.textTracks && this.captions.toggled) {
		  currentTrack = captions.getCurrentTrack.call(this);
		}
  
		if (is$1.track(currentTrack)) {
		  if (!is$1.empty(currentTrack.label)) {
			return currentTrack.label;
		  }
  
		  if (!is$1.empty(currentTrack.language)) {
			return track.language.toUpperCase();
		  }
  
		  return i18n.get('enabled', this.config);
		}
  
		return i18n.get('disabled', this.config);
	  },
	  // Update captions using current track's active cues
	  // Also optional array argument in case there isn't any track (ex: vimeo)
	  updateCues: function updateCues(input) {
		// Requires UI
		if (!this.supported.ui) {
		  return;
		}
  
		if (!is$1.element(this.elements.captions)) {
		  this.debug.warn('No captions element to render to');
		  return;
		} // Only accept array or empty input
  
  
		if (!is$1.nullOrUndefined(input) && !Array.isArray(input)) {
		  this.debug.warn('updateCues: Invalid input', input);
		  return;
		}
  
		var cues = input; // Get cues from track
  
		if (!cues) {
		  var track = captions.getCurrentTrack.call(this);
		  cues = Array.from((track || {}).activeCues || []).map(function (cue) {
			return cue.getCueAsHTML();
		  }).map(getHTML);
		} // Set new caption text
  
  
		var content = cues.map(function (cueText) {
		  return cueText.trim();
		}).join('\n');
		var changed = content !== this.elements.captions.innerHTML;
  
		if (changed) {
		  // Empty the container and create a new child element
		  emptyElement(this.elements.captions);
		  var caption = createElement('span', getAttributesFromSelector(this.config.selectors.caption));
		  caption.innerHTML = content;
		  this.elements.captions.appendChild(caption); // Trigger event
  
		  triggerEvent.call(this, this.media, 'cuechange');
		}
	  }
	};
  
	// ==========================================================================
	// Plyr default config
	// ==========================================================================
	var defaults$1 = {
	  // Disable
	  enabled: true,
	  // Custom media title
	  title: '',
	  // Logging to console
	  debug: false,
	  // Auto play (if supported)
	  autoplay: false,
	  // Only allow one media playing at once (vimeo only)
	  autopause: true,
	  // Allow inline playback on iOS (this effects YouTube/Vimeo - HTML5 requires the attribute present)
	  // TODO: Remove iosNative fullscreen option in favour of this (logic needs work)
	  playsinline: true,
	  // Default time to skip when rewind/fast forward
	  seekTime: 10,
	  // Default volume
	  volume: 1,
	  muted: false,
	  // Pass a custom duration
	  duration: null,
	  // Display the media duration on load in the current time position
	  // If you have opted to display both duration and currentTime, this is ignored
	  displayDuration: true,
	  // Invert the current time to be a countdown
	  invertTime: true,
	  // Clicking the currentTime inverts it's value to show time left rather than elapsed
	  toggleInvert: true,
	  // Force an aspect ratio
	  // The format must be `'w:h'` (e.g. `'16:9'`)
	  ratio: null,
	  // Click video container to play/pause
	  clickToPlay: true,
	  // Auto hide the controls
	  hideControls: true,
	  // Reset to start when playback ended
	  resetOnEnd: false,
	  // Disable the standard context menu
	  disableContextMenu: true,
	  // Sprite (for icons)
	  loadSprite: true,
	  iconPrefix: 'plyr',
	  iconUrl: 'https://cdn.plyr.io/3.5.4/plyr.svg',
	  // Blank video (used to prevent errors on source change)
	  blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
	  // Quality default
	  quality: {
		default: 576,
		options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
	  },
	  // Set loops
	  loop: {
		active: false // start: null,
		// end: null,
  
	  },
	  // Speed default and options to display
	  speed: {
		selected: 1,
		options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
	  },
	  // Keyboard shortcut settings
	  keyboard: {
		focused: true,
		global: false
	  },
	  // Display tooltips
	  tooltips: {
		controls: false,
		seek: true
	  },
	  // Captions settings
	  captions: {
		active: false,
		language: 'auto',
		// Listen to new tracks added after Plyr is initialized.
		// This is needed for streaming captions, but may result in unselectable options
		update: false
	  },
	  // Fullscreen settings
	  fullscreen: {
		enabled: true,
		// Allow fullscreen?
		fallback: true,
		// Fallback using full viewport/window
		iosNative: false // Use the native fullscreen in iOS (disables custom controls)
  
	  },
	  // Local storage
	  storage: {
		enabled: true,
		key: 'plyr'
	  },
	  // Default controls
	  controls: ['play-large', // 'restart',
	  // 'rewind',
	  'play', // 'fast-forward',
	  'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', // 'download',
	  'fullscreen'],
	  settings: ['captions', 'quality', 'speed'],
	  // Localisation
	  i18n: {
		restart: 'Restart',
		rewind: 'Rewind {seektime}s',
		play: 'Play',
		pause: 'Pause',
		fastForward: 'Forward {seektime}s',
		seek: 'Seek',
		seekLabel: '{currentTime} of {duration}',
		played: 'Played',
		buffered: 'Buffered',
		currentTime: 'Current time',
		duration: 'Duration',
		volume: 'Volume',
		mute: 'Mute',
		unmute: 'Unmute',
		enableCaptions: 'Enable captions',
		disableCaptions: 'Disable captions',
		download: 'Download',
		enterFullscreen: 'Enter fullscreen',
		exitFullscreen: 'Exit fullscreen',
		frameTitle: 'Player for {title}',
		captions: 'Captions',
		settings: 'Settings',
		menuBack: 'Go back to previous menu',
		speed: 'Speed',
		normal: 'Normal',
		quality: 'Quality',
		loop: 'Loop',
		start: 'Start',
		end: 'End',
		all: 'All',
		reset: 'Reset',
		disabled: 'Disabled',
		enabled: 'Enabled',
		advertisement: 'Ad',
		qualityBadge: {
		  2160: '4K',
		  1440: 'HD',
		  1080: 'HD',
		  720: 'HD',
		  576: 'SD',
		  480: 'SD'
		}
	  },
	  // URLs
	  urls: {
		download: null,
		vimeo: {
		  sdk: 'https://player.vimeo.com/api/player.js',
		  iframe: 'https://player.vimeo.com/video/{0}?{1}',
		  api: 'https://vimeo.com/api/v2/video/{0}.json'
		},
		youtube: {
		  sdk: 'https://www.youtube.com/iframe_api',
		  api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}' // 'https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title),fileDetails)&part=snippet',
  
		},
		googleIMA: {
		  sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
		}
	  },
	  // Custom control listeners
	  listeners: {
		seek: null,
		play: null,
		pause: null,
		restart: null,
		rewind: null,
		fastForward: null,
		mute: null,
		volume: null,
		captions: null,
		download: null,
		fullscreen: null,
		pip: null,
		airplay: null,
		speed: null,
		quality: null,
		loop: null,
		language: null
	  },
	  // Events to watch and bubble
	  events: [// Events to watch on HTML5 media elements and bubble
	  // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
	  'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart', 'loadeddata', 'loadedmetadata', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking', 'seeked', 'emptied', 'ratechange', 'cuechange', // Custom events
	  'download', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready', // YouTube
	  'statechange', // Quality
	  'qualitychange', // Ads
	  'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted', 'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick'],
	  // Selectors
	  // Change these to match your template if using custom HTML
	  selectors: {
		editable: 'input, textarea, select, [contenteditable]',
		container: '.plyr',
		controls: {
		  container: null,
		  wrapper: '.plyr__controls'
		},
		labels: '[data-plyr]',
		buttons: {
		  play: '[data-plyr="play"]',
		  pause: '[data-plyr="pause"]',
		  restart: '[data-plyr="restart"]',
		  rewind: '[data-plyr="rewind"]',
		  fastForward: '[data-plyr="fast-forward"]',
		  mute: '[data-plyr="mute"]',
		  captions: '[data-plyr="captions"]',
		  download: '[data-plyr="download"]',
		  fullscreen: '[data-plyr="fullscreen"]',
		  pip: '[data-plyr="pip"]',
		  airplay: '[data-plyr="airplay"]',
		  settings: '[data-plyr="settings"]',
		  loop: '[data-plyr="loop"]'
		},
		inputs: {
		  seek: '[data-plyr="seek"]',
		  volume: '[data-plyr="volume"]',
		  speed: '[data-plyr="speed"]',
		  language: '[data-plyr="language"]',
		  quality: '[data-plyr="quality"]'
		},
		display: {
		  currentTime: '.plyr__time--current',
		  duration: '.plyr__time--duration',
		  buffer: '.plyr__progress__buffer',
		  loop: '.plyr__progress__loop',
		  // Used later
		  volume: '.plyr__volume--display'
		},
		progress: '.plyr__progress',
		captions: '.plyr__captions',
		caption: '.plyr__caption'
	  },
	  // Class hooks added to the player in different states
	  classNames: {
		type: 'plyr--{0}',
		provider: 'plyr--{0}',
		video: 'plyr__video-wrapper',
		embed: 'plyr__video-embed',
		videoFixedRatio: 'plyr__video-wrapper--fixed-ratio',
		embedContainer: 'plyr__video-embed__container',
		poster: 'plyr__poster',
		posterEnabled: 'plyr__poster-enabled',
		ads: 'plyr__ads',
		control: 'plyr__control',
		controlPressed: 'plyr__control--pressed',
		playing: 'plyr--playing',
		paused: 'plyr--paused',
		stopped: 'plyr--stopped',
		loading: 'plyr--loading',
		hover: 'plyr--hover',
		tooltip: 'plyr__tooltip',
		cues: 'plyr__cues',
		hidden: 'plyr__sr-only',
		hideControls: 'plyr--hide-controls',
		isIos: 'plyr--is-ios',
		isTouch: 'plyr--is-touch',
		uiSupported: 'plyr--full-ui',
		noTransition: 'plyr--no-transition',
		display: {
		  time: 'plyr__time'
		},
		menu: {
		  value: 'plyr__menu__value',
		  badge: 'plyr__badge',
		  open: 'plyr--menu-open'
		},
		captions: {
		  enabled: 'plyr--captions-enabled',
		  active: 'plyr--captions-active'
		},
		fullscreen: {
		  enabled: 'plyr--fullscreen-enabled',
		  fallback: 'plyr--fullscreen-fallback'
		},
		pip: {
		  supported: 'plyr--pip-supported',
		  active: 'plyr--pip-active'
		},
		airplay: {
		  supported: 'plyr--airplay-supported',
		  active: 'plyr--airplay-active'
		},
		tabFocus: 'plyr__tab-focus',
		previewThumbnails: {
		  // Tooltip thumbs
		  thumbContainer: 'plyr__preview-thumb',
		  thumbContainerShown: 'plyr__preview-thumb--is-shown',
		  imageContainer: 'plyr__preview-thumb__image-container',
		  timeContainer: 'plyr__preview-thumb__time-container',
		  // Scrubbing
		  scrubbingContainer: 'plyr__preview-scrubbing',
		  scrubbingContainerShown: 'plyr__preview-scrubbing--is-shown'
		}
	  },
	  // Embed attributes
	  attributes: {
		embed: {
		  provider: 'data-plyr-provider',
		  id: 'data-plyr-embed-id'
		}
	  },
	  // Advertisements plugin
	  // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
	  ads: {
		enabled: false,
		publisherId: '',
		tagUrl: ''
	  },
	  // Preview Thumbnails plugin
	  previewThumbnails: {
		enabled: false,
		src: ''
	  },
	  // Vimeo plugin
	  vimeo: {
		byline: false,
		portrait: false,
		title: false,
		speed: true,
		transparent: false
	  },
	  // YouTube plugin
	  youtube: {
		noCookie: false,
		// Whether to use an alternative version of YouTube without cookies
		rel: 0,
		// No related vids
		showinfo: 0,
		// Hide info
		iv_load_policy: 3,
		// Hide annotations
		modestbranding: 1 // Hide logos as much as possible (they still show one in the corner when paused)
  
	  }
	};
  
	// ==========================================================================
	// Plyr states
	// ==========================================================================
	var pip = {
	  active: 'picture-in-picture',
	  inactive: 'inline'
	};
  
	// ==========================================================================
	// Plyr supported types and providers
	// ==========================================================================
	var providers = {
	  html5: 'html5',
	  youtube: 'youtube',
	  vimeo: 'vimeo'
	};
	var types = {
	  audio: 'audio',
	  video: 'video'
	};
	/**
	 * Get provider by URL
	 * @param {String} url
	 */
  
	function getProviderByUrl(url) {
	  // YouTube
	  if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
		return providers.youtube;
	  } // Vimeo
  
  
	  if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
		return providers.vimeo;
	  }
  
	  return null;
	}
  
	// ==========================================================================
	// Console wrapper
	// ==========================================================================
	var noop = function noop() {};
  
	var Console =
	/*#__PURE__*/
	function () {
	  function Console() {
		var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
		_classCallCheck(this, Console);
  
		this.enabled = window.console && enabled;
  
		if (this.enabled) {
		  this.log('Debugging enabled');
		}
	  }
  
	  _createClass(Console, [{
		key: "log",
		get: function get() {
		  // eslint-disable-next-line no-console
		  return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
		}
	  }, {
		key: "warn",
		get: function get() {
		  // eslint-disable-next-line no-console
		  return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
		}
	  }, {
		key: "error",
		get: function get() {
		  // eslint-disable-next-line no-console
		  return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
		}
	  }]);
  
	  return Console;
	}();
  
	function onChange() {
	  if (!this.enabled) {
		return;
	  } // Update toggle button
  
  
	  var button = this.player.elements.buttons.fullscreen;
  
	  if (is$1.element(button)) {
		button.pressed = this.active;
	  } // Trigger an event
  
  
	  triggerEvent.call(this.player, this.target, this.active ? 'enterfullscreen' : 'exitfullscreen', true); // Trap focus in container
  
	  if (!browser.isIos) {
		trapFocus.call(this.player, this.target, this.active);
	  }
	}
  
	function toggleFallback() {
	  var _this = this;
  
	  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
	  // Store or restore scroll position
	  if (toggle) {
		this.scrollPosition = {
		  x: window.scrollX || 0,
		  y: window.scrollY || 0
		};
	  } else {
		window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
	  } // Toggle scroll
  
  
	  document.body.style.overflow = toggle ? 'hidden' : ''; // Toggle class hook
  
	  toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle); // Force full viewport on iPhone X+
  
	  if (browser.isIos) {
		var viewport = document.head.querySelector('meta[name="viewport"]');
		var property = 'viewport-fit=cover'; // Inject the viewport meta if required
  
		if (!viewport) {
		  viewport = document.createElement('meta');
		  viewport.setAttribute('name', 'viewport');
		} // Check if the property already exists
  
  
		var hasProperty = is$1.string(viewport.content) && viewport.content.includes(property);
  
		if (toggle) {
		  this.cleanupViewport = !hasProperty;
  
		  if (!hasProperty) {
			viewport.content += ",".concat(property);
		  }
		} else if (this.cleanupViewport) {
		  viewport.content = viewport.content.split(',').filter(function (part) {
			return part.trim() !== property;
		  }).join(',');
		} // Force a repaint as sometimes Safari doesn't want to fill the screen
  
  
		setTimeout(function () {
		  return repaint(_this.target);
		}, 100);
	  } // Toggle button and fire events
  
  
	  onChange.call(this);
	}
  
	var Fullscreen =
	/*#__PURE__*/
	function () {
	  function Fullscreen(player) {
		var _this2 = this;
  
		_classCallCheck(this, Fullscreen);
  
		// Keep reference to parent
		this.player = player; // Get prefix
  
		this.prefix = Fullscreen.prefix;
		this.property = Fullscreen.property; // Scroll position
  
		this.scrollPosition = {
		  x: 0,
		  y: 0
		}; // Force the use of 'full window/browser' rather than fullscreen
  
		this.forceFallback = player.config.fullscreen.fallback === 'force'; // Register event listeners
		// Handle event (incase user presses escape etc)
  
		on.call(this.player, document, this.prefix === 'ms' ? 'MSFullscreenChange' : "".concat(this.prefix, "fullscreenchange"), function () {
		  // TODO: Filter for target??
		  onChange.call(_this2);
		}); // Fullscreen toggle on double click
  
		on.call(this.player, this.player.elements.container, 'dblclick', function (event) {
		  // Ignore double click in controls
		  if (is$1.element(_this2.player.elements.controls) && _this2.player.elements.controls.contains(event.target)) {
			return;
		  }
  
		  _this2.toggle();
		}); // Update the UI
  
		this.update();
	  } // Determine if native supported
  
  
	  _createClass(Fullscreen, [{
		key: "update",
		// Update UI
		value: function update() {
		  if (this.enabled) {
			var mode;
  
			if (this.forceFallback) {
			  mode = 'Fallback (forced)';
			} else if (Fullscreen.native) {
			  mode = 'Native';
			} else {
			  mode = 'Fallback';
			}
  
			this.player.debug.log("".concat(mode, " fullscreen enabled"));
		  } else {
			this.player.debug.log('Fullscreen not supported and fallback disabled');
		  } // Add styling hook to show button
  
  
		  toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
		} // Make an element fullscreen
  
	  }, {
		key: "enter",
		value: function enter() {
		  if (!this.enabled) {
			return;
		  } // iOS native fullscreen doesn't need the request step
  
  
		  if (browser.isIos && this.player.config.fullscreen.iosNative) {
			this.target.webkitEnterFullscreen();
		  } else if (!Fullscreen.native || this.forceFallback) {
			toggleFallback.call(this, true);
		  } else if (!this.prefix) {
			this.target.requestFullscreen();
		  } else if (!is$1.empty(this.prefix)) {
			this.target["".concat(this.prefix, "Request").concat(this.property)]();
		  }
		} // Bail from fullscreen
  
	  }, {
		key: "exit",
		value: function exit() {
		  if (!this.enabled) {
			return;
		  } // iOS native fullscreen
  
  
		  if (browser.isIos && this.player.config.fullscreen.iosNative) {
			this.target.webkitExitFullscreen();
			this.player.play();
		  } else if (!Fullscreen.native || this.forceFallback) {
			toggleFallback.call(this, false);
		  } else if (!this.prefix) {
			(document.cancelFullScreen || document.exitFullscreen).call(document);
		  } else if (!is$1.empty(this.prefix)) {
			var action = this.prefix === 'moz' ? 'Cancel' : 'Exit';
			document["".concat(this.prefix).concat(action).concat(this.property)]();
		  }
		} // Toggle state
  
	  }, {
		key: "toggle",
		value: function toggle() {
		  if (!this.active) {
			this.enter();
		  } else {
			this.exit();
		  }
		}
	  }, {
		key: "usingNative",
		// If we're actually using native
		get: function get() {
		  return Fullscreen.native && !this.forceFallback;
		} // Get the prefix for handlers
  
	  }, {
		key: "enabled",
		// Determine if fullscreen is enabled
		get: function get() {
		  return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
		} // Get active state
  
	  }, {
		key: "active",
		get: function get() {
		  if (!this.enabled) {
			return false;
		  } // Fallback using classname
  
  
		  if (!Fullscreen.native || this.forceFallback) {
			return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
		  }
  
		  var element = !this.prefix ? document.fullscreenElement : document["".concat(this.prefix).concat(this.property, "Element")];
		  return element === this.target;
		} // Get target element
  
	  }, {
		key: "target",
		get: function get() {
		  return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
		}
	  }], [{
		key: "native",
		get: function get() {
		  return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
		}
	  }, {
		key: "prefix",
		get: function get() {
		  // No prefix
		  if (is$1.function(document.exitFullscreen)) {
			return '';
		  } // Check for fullscreen support by vendor prefix
  
  
		  var value = '';
		  var prefixes = ['webkit', 'moz', 'ms'];
		  prefixes.some(function (pre) {
			if (is$1.function(document["".concat(pre, "ExitFullscreen")]) || is$1.function(document["".concat(pre, "CancelFullScreen")])) {
			  value = pre;
			  return true;
			}
  
			return false;
		  });
		  return value;
		}
	  }, {
		key: "property",
		get: function get() {
		  return this.prefix === 'moz' ? 'FullScreen' : 'Fullscreen';
		}
	  }]);
  
	  return Fullscreen;
	}();
  
	// ==========================================================================
	// Load image avoiding xhr/fetch CORS issues
	// Server status can't be obtained this way unfortunately, so this uses "naturalWidth" to determine if the image has loaded
	// By default it checks if it is at least 1px, but you can add a second argument to change this
	// ==========================================================================
	function loadImage(src) {
	  var minWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  return new Promise(function (resolve, reject) {
		var image = new Image();
  
		var handler = function handler() {
		  delete image.onload;
		  delete image.onerror;
		  (image.naturalWidth >= minWidth ? resolve : reject)(image);
		};
  
		Object.assign(image, {
		  onload: handler,
		  onerror: handler,
		  src: src
		});
	  });
	}
  
	// ==========================================================================
	var ui = {
	  addStyleHook: function addStyleHook() {
		toggleClass(this.elements.container, this.config.selectors.container.replace('.', ''), true);
		toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
	  },
	  // Toggle native HTML5 media controls
	  toggleNativeControls: function toggleNativeControls() {
		var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
		if (toggle && this.isHTML5) {
		  this.media.setAttribute('controls', '');
		} else {
		  this.media.removeAttribute('controls');
		}
	  },
	  // Setup the UI
	  build: function build() {
		var _this = this;
  
		// Re-attach media element listeners
		// TODO: Use event bubbling?
		this.listeners.media(); // Don't setup interface if no support
  
		if (!this.supported.ui) {
		  this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)); // Restore native controls
  
		  ui.toggleNativeControls.call(this, true); // Bail
  
		  return;
		} // Inject custom controls if not present
  
  
		if (!is$1.element(this.elements.controls)) {
		  // Inject custom controls
		  controls.inject.call(this); // Re-attach control listeners
  
		  this.listeners.controls();
		} // Remove native controls
  
  
		ui.toggleNativeControls.call(this); // Setup captions for HTML5
  
		if (this.isHTML5) {
		  captions.setup.call(this);
		} // Reset volume
  
  
		this.volume = null; // Reset mute state
  
		this.muted = null; // Reset loop state
  
		this.loop = null; // Reset quality setting
  
		this.quality = null; // Reset speed
  
		this.speed = null; // Reset volume display
  
		controls.updateVolume.call(this); // Reset time display
  
		controls.timeUpdate.call(this); // Update the UI
  
		ui.checkPlaying.call(this); // Check for picture-in-picture support
  
		toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo); // Check for airplay support
  
		toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5); // Add iOS class
  
		toggleClass(this.elements.container, this.config.classNames.isIos, browser.isIos); // Add touch class
  
		toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch); // Ready for API calls
  
		this.ready = true; // Ready event at end of execution stack
  
		setTimeout(function () {
		  triggerEvent.call(_this, _this.media, 'ready');
		}, 0); // Set the title
  
		ui.setTitle.call(this); // Assure the poster image is set, if the property was added before the element was created
  
		if (this.poster) {
		  ui.setPoster.call(this, this.poster, false).catch(function () {});
		} // Manually set the duration if user has overridden it.
		// The event listeners for it doesn't get called if preload is disabled (#701)
  
  
		if (this.config.duration) {
		  controls.durationUpdate.call(this);
		}
	  },
	  // Setup aria attribute for play and iframe title
	  setTitle: function setTitle() {
		// Find the current text
		var label = i18n.get('play', this.config); // If there's a media title set, use that for the label
  
		if (is$1.string(this.config.title) && !is$1.empty(this.config.title)) {
		  label += ", ".concat(this.config.title);
		} // If there's a play button, set label
  
  
		Array.from(this.elements.buttons.play || []).forEach(function (button) {
		  button.setAttribute('aria-label', label);
		}); // Set iframe title
		// https://github.com/sampotts/plyr/issues/124
  
		if (this.isEmbed) {
		  var iframe = getElement.call(this, 'iframe');
  
		  if (!is$1.element(iframe)) {
			return;
		  } // Default to media type
  
  
		  var title = !is$1.empty(this.config.title) ? this.config.title : 'video';
		  var format = i18n.get('frameTitle', this.config);
		  iframe.setAttribute('title', format.replace('{title}', title));
		}
	  },
	  // Toggle poster
	  togglePoster: function togglePoster(enable) {
		toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
	  },
	  // Set the poster image (async)
	  // Used internally for the poster setter, with the passive option forced to false
	  setPoster: function setPoster(poster) {
		var _this2 = this;
  
		var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  
		// Don't override if call is passive
		if (passive && this.poster) {
		  return Promise.reject(new Error('Poster already set'));
		} // Set property synchronously to respect the call order
  
  
		this.media.setAttribute('poster', poster); // Wait until ui is ready
  
		return ready.call(this) // Load image
		.then(function () {
		  return loadImage(poster);
		}).catch(function (err) {
		  // Hide poster on error unless it's been set by another call
		  if (poster === _this2.poster) {
			ui.togglePoster.call(_this2, false);
		  } // Rethrow
  
  
		  throw err;
		}).then(function () {
		  // Prevent race conditions
		  if (poster !== _this2.poster) {
			throw new Error('setPoster cancelled by later call to setPoster');
		  }
		}).then(function () {
		  Object.assign(_this2.elements.poster.style, {
			backgroundImage: "url('".concat(poster, "')"),
			// Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
			backgroundSize: ''
		  });
		  ui.togglePoster.call(_this2, true);
		  return poster;
		});
	  },
	  // Check playing state
	  checkPlaying: function checkPlaying(event) {
		var _this3 = this;
  
		// Class hooks
		toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
		toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
		toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped); // Set state
  
		Array.from(this.elements.buttons.play || []).forEach(function (target) {
		  target.pressed = _this3.playing;
		}); // Only update controls on non timeupdate events
  
		if (is$1.event(event) && event.type === 'timeupdate') {
		  return;
		} // Toggle controls
  
  
		ui.toggleControls.call(this);
	  },
	  // Check if media is loading
	  checkLoading: function checkLoading(event) {
		var _this4 = this;
  
		this.loading = ['stalled', 'waiting'].includes(event.type); // Clear timer
  
		clearTimeout(this.timers.loading); // Timer to prevent flicker when seeking
  
		this.timers.loading = setTimeout(function () {
		  // Update progress bar loading class state
		  toggleClass(_this4.elements.container, _this4.config.classNames.loading, _this4.loading); // Update controls visibility
  
		  ui.toggleControls.call(_this4);
		}, this.loading ? 250 : 0);
	  },
	  // Toggle controls based on state and `force` argument
	  toggleControls: function toggleControls(force) {
		var controls = this.elements.controls;
  
		if (controls && this.config.hideControls) {
		  // Don't hide controls if a touch-device user recently seeked. (Must be limited to touch devices, or it occasionally prevents desktop controls from hiding.)
		  var recentTouchSeek = this.touch && this.lastSeekTime + 2000 > Date.now(); // Show controls if force, loading, paused, button interaction, or recent seek, otherwise hide
  
		  this.toggleControls(Boolean(force || this.loading || this.paused || controls.pressed || controls.hover || recentTouchSeek));
		}
	  }
	};
  
	var Listeners =
	/*#__PURE__*/
	function () {
	  function Listeners(player) {
		_classCallCheck(this, Listeners);
  
		this.player = player;
		this.lastKey = null;
		this.focusTimer = null;
		this.lastKeyDown = null;
		this.handleKey = this.handleKey.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.setTabFocus = this.setTabFocus.bind(this);
		this.firstTouch = this.firstTouch.bind(this);
	  } // Handle key presses
  
  
	  _createClass(Listeners, [{
		key: "handleKey",
		value: function handleKey(event) {
		  var player = this.player;
		  var elements = player.elements;
		  var code = event.keyCode ? event.keyCode : event.which;
		  var pressed = event.type === 'keydown';
		  var repeat = pressed && code === this.lastKey; // Bail if a modifier key is set
  
		  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
			return;
		  } // If the event is bubbled from the media element
		  // Firefox doesn't get the keycode for whatever reason
  
  
		  if (!is$1.number(code)) {
			return;
		  } // Seek by the number keys
  
  
		  var seekByKey = function seekByKey() {
			// Divide the max duration into 10th's and times by the number value
			player.currentTime = player.duration / 10 * (code - 48);
		  }; // Handle the key on keydown
		  // Reset on keyup
  
  
		  if (pressed) {
			// Check focused element
			// and if the focused element is not editable (e.g. text input)
			// and any that accept key input http://webaim.org/techniques/keyboard/
			var focused = document.activeElement;
  
			if (is$1.element(focused)) {
			  var editable = player.config.selectors.editable;
			  var seek = elements.inputs.seek;
  
			  if (focused !== seek && matches$1(focused, editable)) {
				return;
			  }
  
			  if (event.which === 32 && matches$1(focused, 'button, [role^="menuitem"]')) {
				return;
			  }
			} // Which keycodes should we prevent default
  
  
			var preventDefault = [32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79]; // If the code is found prevent default (e.g. prevent scrolling for arrows)
  
			if (preventDefault.includes(code)) {
			  event.preventDefault();
			  event.stopPropagation();
			}
  
			switch (code) {
			  case 48:
			  case 49:
			  case 50:
			  case 51:
			  case 52:
			  case 53:
			  case 54:
			  case 55:
			  case 56:
			  case 57:
				// 0-9
				if (!repeat) {
				  seekByKey();
				}
  
				break;
  
			  case 32:
			  case 75:
				// Space and K key
				if (!repeat) {
				  player.togglePlay();
				}
  
				break;
  
			  case 38:
				// Arrow up
				player.increaseVolume(0.1);
				break;
  
			  case 40:
				// Arrow down
				player.decreaseVolume(0.1);
				break;
  
			  case 77:
				// M key
				if (!repeat) {
				  player.muted = !player.muted;
				}
  
				break;
  
			  case 39:
				// Arrow forward
				player.forward();
				break;
  
			  case 37:
				// Arrow back
				player.rewind();
				break;
  
			  case 70:
				// F key
				player.fullscreen.toggle();
				break;
  
			  case 67:
				// C key
				if (!repeat) {
				  player.toggleCaptions();
				}
  
				break;
  
			  case 76:
				// L key
				player.loop = !player.loop;
				break;
  
			  /* case 73:
			  this.setLoop('start');
			  break;
			  case 76:
			  this.setLoop();
			  break;
			  case 79:
			  this.setLoop('end');
			  break; */
  
			  default:
				break;
			} // Escape is handle natively when in full screen
			// So we only need to worry about non native
  
  
			if (code === 27 && !player.fullscreen.usingNative && player.fullscreen.active) {
			  player.fullscreen.toggle();
			} // Store last code for next cycle
  
  
			this.lastKey = code;
		  } else {
			this.lastKey = null;
		  }
		} // Toggle menu
  
	  }, {
		key: "toggleMenu",
		value: function toggleMenu(event) {
		  controls.toggleMenu.call(this.player, event);
		} // Device is touch enabled
  
	  }, {
		key: "firstTouch",
		value: function firstTouch() {
		  var player = this.player;
		  var elements = player.elements;
		  player.touch = true; // Add touch class
  
		  toggleClass(elements.container, player.config.classNames.isTouch, true);
		}
	  }, {
		key: "setTabFocus",
		value: function setTabFocus(event) {
		  var player = this.player;
		  var elements = player.elements;
		  clearTimeout(this.focusTimer); // Ignore any key other than tab
  
		  if (event.type === 'keydown' && event.which !== 9) {
			return;
		  } // Store reference to event timeStamp
  
  
		  if (event.type === 'keydown') {
			this.lastKeyDown = event.timeStamp;
		  } // Remove current classes
  
  
		  var removeCurrent = function removeCurrent() {
			var className = player.config.classNames.tabFocus;
			var current = getElements.call(player, ".".concat(className));
			toggleClass(current, className, false);
		  }; // Determine if a key was pressed to trigger this event
  
  
		  var wasKeyDown = event.timeStamp - this.lastKeyDown <= 20; // Ignore focus events if a key was pressed prior
  
		  if (event.type === 'focus' && !wasKeyDown) {
			return;
		  } // Remove all current
  
  
		  removeCurrent(); // Delay the adding of classname until the focus has changed
		  // This event fires before the focusin event
  
		  this.focusTimer = setTimeout(function () {
			var focused = document.activeElement; // Ignore if current focus element isn't inside the player
  
			if (!elements.container.contains(focused)) {
			  return;
			}
  
			toggleClass(document.activeElement, player.config.classNames.tabFocus, true);
		  }, 10);
		} // Global window & document listeners
  
	  }, {
		key: "global",
		value: function global() {
		  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
		  var player = this.player; // Keyboard shortcuts
  
		  if (player.config.keyboard.global) {
			toggleListener.call(player, window, 'keydown keyup', this.handleKey, toggle, false);
		  } // Click anywhere closes menu
  
  
		  toggleListener.call(player, document.body, 'click', this.toggleMenu, toggle); // Detect touch by events
  
		  once.call(player, document.body, 'touchstart', this.firstTouch); // Tab focus detection
  
		  toggleListener.call(player, document.body, 'keydown focus blur', this.setTabFocus, toggle, false, true);
		} // Container listeners
  
	  }, {
		key: "container",
		value: function container() {
		  var player = this.player;
		  var config = player.config,
			  elements = player.elements,
			  timers = player.timers; // Keyboard shortcuts
  
		  if (!config.keyboard.global && config.keyboard.focused) {
			on.call(player, elements.container, 'keydown keyup', this.handleKey, false);
		  } // Toggle controls on mouse events and entering fullscreen
  
  
		  on.call(player, elements.container, 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen', function (event) {
			var controls = elements.controls; // Remove button states for fullscreen
  
			if (controls && event.type === 'enterfullscreen') {
			  controls.pressed = false;
			  controls.hover = false;
			} // Show, then hide after a timeout unless another control event occurs
  
  
			var show = ['touchstart', 'touchmove', 'mousemove'].includes(event.type);
			var delay = 0;
  
			if (show) {
			  ui.toggleControls.call(player, true); // Use longer timeout for touch devices
  
			  delay = player.touch ? 3000 : 2000;
			} // Clear timer
  
  
			clearTimeout(timers.controls); // Set new timer to prevent flicker when seeking
  
			timers.controls = setTimeout(function () {
			  return ui.toggleControls.call(player, false);
			}, delay);
		  }); // Force edge to repaint on exit fullscreen
		  // TODO: Fix weird bug where Edge doesn't re-draw when exiting fullscreen
  
		  /* if (browser.isEdge) {
			  on.call(player, elements.container, 'exitfullscreen', () => {
				  setTimeout(() => repaint(elements.container), 100);
			  });
		  } */
		  // Set a gutter for Vimeo
  
		  var setGutter = function setGutter(ratio, padding, toggle) {
			if (!player.isVimeo) {
			  return;
			}
  
			var target = player.elements.wrapper.firstChild;
  
			var _ratio = _slicedToArray(ratio, 2),
				y = _ratio[1];
  
			var _getAspectRatio$call = getAspectRatio.call(player),
				_getAspectRatio$call2 = _slicedToArray(_getAspectRatio$call, 2),
				videoX = _getAspectRatio$call2[0],
				videoY = _getAspectRatio$call2[1];
  
			target.style.maxWidth = toggle ? "".concat(y / videoY * videoX, "px") : null;
			target.style.margin = toggle ? '0 auto' : null;
		  }; // Resize on fullscreen change
  
  
		  var setPlayerSize = function setPlayerSize(measure) {
			// If we don't need to measure the viewport
			if (!measure) {
			  return setAspectRatio.call(player);
			}
  
			var rect = elements.container.getBoundingClientRect();
			var width = rect.width,
				height = rect.height;
			return setAspectRatio.call(player, "".concat(width, ":").concat(height));
		  };
  
		  var resized = function resized() {
			window.clearTimeout(timers.resized);
			timers.resized = window.setTimeout(setPlayerSize, 50);
		  };
  
		  on.call(player, elements.container, 'enterfullscreen exitfullscreen', function (event) {
			var _player$fullscreen = player.fullscreen,
				target = _player$fullscreen.target,
				usingNative = _player$fullscreen.usingNative; // Ignore for iOS native
  
			if (!player.isEmbed || target !== elements.container) {
			  return;
			}
  
			var isEnter = event.type === 'enterfullscreen'; // Set the player size when entering fullscreen to viewport size
  
			var _setPlayerSize = setPlayerSize(isEnter),
				padding = _setPlayerSize.padding,
				ratio = _setPlayerSize.ratio; // Set Vimeo gutter
  
  
			setGutter(ratio, padding, isEnter); // If not using native fullscreen, we need to check for resizes of viewport
  
			if (!usingNative) {
			  if (isEnter) {
				on.call(player, window, 'resize', resized);
			  } else {
				off.call(player, window, 'resize', resized);
			  }
			}
		  });
		} // Listen for media events
  
	  }, {
		key: "media",
		value: function media() {
		  var _this = this;
  
		  var player = this.player;
		  var elements = player.elements; // Time change on media
  
		  on.call(player, player.media, 'timeupdate seeking seeked', function (event) {
			return controls.timeUpdate.call(player, event);
		  }); // Display duration
  
		  on.call(player, player.media, 'durationchange loadeddata loadedmetadata', function (event) {
			return controls.durationUpdate.call(player, event);
		  }); // Check for audio tracks on load
		  // We can't use `loadedmetadata` as it doesn't seem to have audio tracks at that point
  
		  on.call(player, player.media, 'canplay loadeddata', function () {
			toggleHidden(elements.volume, !player.hasAudio);
			toggleHidden(elements.buttons.mute, !player.hasAudio);
		  }); // Handle the media finishing
  
		  on.call(player, player.media, 'ended', function () {
			// Show poster on end
			if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
			  // Restart
			  player.restart();
			}
		  }); // Check for buffer progress
  
		  on.call(player, player.media, 'progress playing seeking seeked', function (event) {
			return controls.updateProgress.call(player, event);
		  }); // Handle volume changes
  
		  on.call(player, player.media, 'volumechange', function (event) {
			return controls.updateVolume.call(player, event);
		  }); // Handle play/pause
  
		  on.call(player, player.media, 'playing play pause ended emptied timeupdate', function (event) {
			return ui.checkPlaying.call(player, event);
		  }); // Loading state
  
		  on.call(player, player.media, 'waiting canplay seeked playing', function (event) {
			return ui.checkLoading.call(player, event);
		  }); // Click video
  
		  if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
			// Re-fetch the wrapper
			var wrapper = getElement.call(player, ".".concat(player.config.classNames.video)); // Bail if there's no wrapper (this should never happen)
  
			if (!is$1.element(wrapper)) {
			  return;
			} // On click play, pause or restart
  
  
			on.call(player, elements.container, 'click', function (event) {
			  var targets = [elements.container, wrapper]; // Ignore if click if not container or in video wrapper
  
			  if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
				return;
			  } // Touch devices will just show controls (if hidden)
  
  
			  if (player.touch && player.config.hideControls) {
				return;
			  }
  
			  if (player.ended) {
				_this.proxy(event, player.restart, 'restart');
  
				_this.proxy(event, player.play, 'play');
			  } else {
				_this.proxy(event, player.togglePlay, 'play');
			  }
			});
		  } // Disable right click
  
  
		  if (player.supported.ui && player.config.disableContextMenu) {
			on.call(player, elements.wrapper, 'contextmenu', function (event) {
			  event.preventDefault();
			}, false);
		  } // Volume change
  
  
		  on.call(player, player.media, 'volumechange', function () {
			// Save to storage
			player.storage.set({
			  volume: player.volume,
			  muted: player.muted
			});
		  }); // Speed change
  
		  on.call(player, player.media, 'ratechange', function () {
			// Update UI
			controls.updateSetting.call(player, 'speed'); // Save to storage
  
  
			player.storage.set({
			  speed: player.speed
			});
		  }); // Quality change
  
		  on.call(player, player.media, 'qualitychange', function (event) {
			// Update UI
			controls.updateSetting.call(player, 'quality', null, event.detail.quality);
		  }); // Update download link when ready and if quality changes
  
		  on.call(player, player.media, 'ready qualitychange', function () {
			controls.setDownloadUrl.call(player);
		  }); // Proxy events to container
		  // Bubble up key events for Edge
  
		  var proxyEvents = player.config.events.concat(['keyup', 'keydown']).join(' ');
		  on.call(player, player.media, proxyEvents, function (event) {
			var _event$detail = event.detail,
				detail = _event$detail === void 0 ? {} : _event$detail; // Get error details from media
  
			if (event.type === 'error') {
			  detail = player.media.error;
			}
  
			triggerEvent.call(player, elements.container, event.type, true, detail);
		  });
		} // Run default and custom handlers
  
	  }, {
		key: "proxy",
		value: function proxy(event, defaultHandler, customHandlerKey) {
		  var player = this.player;
		  var customHandler = player.config.listeners[customHandlerKey];
		  var hasCustomHandler = is$1.function(customHandler);
		  var returned = true; // Execute custom handler
  
		  if (hasCustomHandler) {
			returned = customHandler.call(player, event);
		  } // Only call default handler if not prevented in custom handler
  
  
		  if (returned && is$1.function(defaultHandler)) {
			defaultHandler.call(player, event);
		  }
		} // Trigger custom and default handlers
  
	  }, {
		key: "bind",
		value: function bind(element, type, defaultHandler, customHandlerKey) {
		  var _this2 = this;
  
		  var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
		  var player = this.player;
		  var customHandler = player.config.listeners[customHandlerKey];
		  var hasCustomHandler = is$1.function(customHandler);
		  on.call(player, element, type, function (event) {
			return _this2.proxy(event, defaultHandler, customHandlerKey);
		  }, passive && !hasCustomHandler);
		} // Listen for control events
  
	  }, {
		key: "controls",
		value: function controls$1() {
		  var _this3 = this;
  
		  var player = this.player;
		  var elements = player.elements; // IE doesn't support input event, so we fallback to change
  
		  var inputEvent = browser.isIE ? 'change' : 'input'; // Play/pause toggle
  
		  if (elements.buttons.play) {
			Array.from(elements.buttons.play).forEach(function (button) {
			  _this3.bind(button, 'click', player.togglePlay, 'play');
			});
		  } // Pause
  
  
		  this.bind(elements.buttons.restart, 'click', player.restart, 'restart'); // Rewind
  
		  this.bind(elements.buttons.rewind, 'click', player.rewind, 'rewind'); // Rewind
  
		  this.bind(elements.buttons.fastForward, 'click', player.forward, 'fastForward'); // Mute toggle
  
		  this.bind(elements.buttons.mute, 'click', function () {
			player.muted = !player.muted;
		  }, 'mute'); // Captions toggle
  
		  this.bind(elements.buttons.captions, 'click', function () {
			return player.toggleCaptions();
		  }); // Download
  
		  this.bind(elements.buttons.download, 'click', function () {
			triggerEvent.call(player, player.media, 'download');
		  }, 'download'); // Fullscreen toggle
  
		  this.bind(elements.buttons.fullscreen, 'click', function () {
			player.fullscreen.toggle();
		  }, 'fullscreen'); // Picture-in-Picture
  
		  this.bind(elements.buttons.pip, 'click', function () {
			player.pip = 'toggle';
		  }, 'pip'); // Airplay
  
		  this.bind(elements.buttons.airplay, 'click', player.airplay, 'airplay'); // Settings menu - click toggle
  
		  this.bind(elements.buttons.settings, 'click', function (event) {
			// Prevent the document click listener closing the menu
			event.stopPropagation();
  
			controls.toggleMenu.call(player, event);
		  }); // Settings menu - keyboard toggle
		  // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
		  // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
  
		  this.bind(elements.buttons.settings, 'keyup', function (event) {
			var code = event.which; // We only care about space and return
  
			if (![13, 32].includes(code)) {
			  return;
			} // Because return triggers a click anyway, all we need to do is set focus
  
  
			if (code === 13) {
			  controls.focusFirstMenuItem.call(player, null, true);
  
			  return;
			} // Prevent scroll
  
  
			event.preventDefault(); // Prevent playing video (Firefox)
  
			event.stopPropagation(); // Toggle menu
  
			controls.toggleMenu.call(player, event);
		  }, null, false // Can't be passive as we're preventing default
		  ); // Escape closes menu
  
		  this.bind(elements.settings.menu, 'keydown', function (event) {
			if (event.which === 27) {
			  controls.toggleMenu.call(player, event);
			}
		  }); // Set range input alternative "value", which matches the tooltip time (#954)
  
		  this.bind(elements.inputs.seek, 'mousedown mousemove', function (event) {
			var rect = elements.progress.getBoundingClientRect();
			var percent = 100 / rect.width * (event.pageX - rect.left);
			event.currentTarget.setAttribute('seek-value', percent);
		  }); // Pause while seeking
  
		  this.bind(elements.inputs.seek, 'mousedown mouseup keydown keyup touchstart touchend', function (event) {
			var seek = event.currentTarget;
			var code = event.keyCode ? event.keyCode : event.which;
			var attribute = 'play-on-seeked';
  
			if (is$1.keyboardEvent(event) && code !== 39 && code !== 37) {
			  return;
			} // Record seek time so we can prevent hiding controls for a few seconds after seek
  
  
			player.lastSeekTime = Date.now(); // Was playing before?
  
			var play = seek.hasAttribute(attribute); // Done seeking
  
			var done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback
  
			if (play && done) {
			  seek.removeAttribute(attribute);
			  player.play();
			} else if (!done && player.playing) {
			  seek.setAttribute(attribute, '');
			  player.pause();
			}
		  }); // Fix range inputs on iOS
		  // Super weird iOS bug where after you interact with an <input type="range">,
		  // it takes over further interactions on the page. This is a hack
  
		  if (browser.isIos) {
			var inputs = getElements.call(player, 'input[type="range"]');
			Array.from(inputs).forEach(function (input) {
			  return _this3.bind(input, inputEvent, function (event) {
				return repaint(event.target);
			  });
			});
		  } // Seek
  
  
		  this.bind(elements.inputs.seek, inputEvent, function (event) {
			var seek = event.currentTarget; // If it exists, use seek-value instead of "value" for consistency with tooltip time (#954)
  
			var seekTo = seek.getAttribute('seek-value');
  
			if (is$1.empty(seekTo)) {
			  seekTo = seek.value;
			}
  
			seek.removeAttribute('seek-value');
			player.currentTime = seekTo / seek.max * player.duration;
		  }, 'seek'); // Seek tooltip
  
		  this.bind(elements.progress, 'mouseenter mouseleave mousemove', function (event) {
			return controls.updateSeekTooltip.call(player, event);
		  }); // Preview thumbnails plugin
		  // TODO: Really need to work on some sort of plug-in wide event bus or pub-sub for this
  
		  this.bind(elements.progress, 'mousemove touchmove', function (event) {
			var previewThumbnails = player.previewThumbnails;
  
			if (previewThumbnails && previewThumbnails.loaded) {
			  previewThumbnails.startMove(event);
			}
		  }); // Hide thumbnail preview - on mouse click, mouse leave, and video play/seek. All four are required, e.g., for buffering
  
		  this.bind(elements.progress, 'mouseleave click', function () {
			var previewThumbnails = player.previewThumbnails;
  
			if (previewThumbnails && previewThumbnails.loaded) {
			  previewThumbnails.endMove(false, true);
			}
		  }); // Show scrubbing preview
  
		  this.bind(elements.progress, 'mousedown touchstart', function (event) {
			var previewThumbnails = player.previewThumbnails;
  
			if (previewThumbnails && previewThumbnails.loaded) {
			  previewThumbnails.startScrubbing(event);
			}
		  });
		  this.bind(elements.progress, 'mouseup touchend', function (event) {
			var previewThumbnails = player.previewThumbnails;
  
			if (previewThumbnails && previewThumbnails.loaded) {
			  previewThumbnails.endScrubbing(event);
			}
		  }); // Polyfill for lower fill in <input type="range"> for webkit
  
		  if (browser.isWebkit) {
			Array.from(getElements.call(player, 'input[type="range"]')).forEach(function (element) {
			  _this3.bind(element, 'input', function (event) {
				return controls.updateRangeFill.call(player, event.target);
			  });
			});
		  } // Current time invert
		  // Only if one time element is used for both currentTime and duration
  
  
		  if (player.config.toggleInvert && !is$1.element(elements.display.duration)) {
			this.bind(elements.display.currentTime, 'click', function () {
			  // Do nothing if we're at the start
			  if (player.currentTime === 0) {
				return;
			  }
  
			  player.config.invertTime = !player.config.invertTime;
  
			  controls.timeUpdate.call(player);
			});
		  } // Volume
  
  
		  this.bind(elements.inputs.volume, inputEvent, function (event) {
			player.volume = event.target.value;
		  }, 'volume'); // Update controls.hover state (used for ui.toggleControls to avoid hiding when interacting)
  
		  this.bind(elements.controls, 'mouseenter mouseleave', function (event) {
			elements.controls.hover = !player.touch && event.type === 'mouseenter';
		  }); // Update controls.pressed state (used for ui.toggleControls to avoid hiding when interacting)
  
		  this.bind(elements.controls, 'mousedown mouseup touchstart touchend touchcancel', function (event) {
			elements.controls.pressed = ['mousedown', 'touchstart'].includes(event.type);
		  }); // Show controls when they receive focus (e.g., when using keyboard tab key)
  
		  this.bind(elements.controls, 'focusin', function () {
			var config = player.config,
				elements = player.elements,
				timers = player.timers; // Skip transition to prevent focus from scrolling the parent element
  
			toggleClass(elements.controls, config.classNames.noTransition, true); // Toggle
  
			ui.toggleControls.call(player, true); // Restore transition
  
			setTimeout(function () {
			  toggleClass(elements.controls, config.classNames.noTransition, false);
			}, 0); // Delay a little more for mouse users
  
			var delay = _this3.touch ? 3000 : 4000; // Clear timer
  
			clearTimeout(timers.controls); // Hide again after delay
  
			timers.controls = setTimeout(function () {
			  return ui.toggleControls.call(player, false);
			}, delay);
		  }); // Mouse wheel for volume
  
		  this.bind(elements.inputs.volume, 'wheel', function (event) {
			// Detect "natural" scroll - suppored on OS X Safari only
			// Other browsers on OS X will be inverted until support improves
			var inverted = event.webkitDirectionInvertedFromDevice; // Get delta from event. Invert if `inverted` is true
  
			var _map = [event.deltaX, -event.deltaY].map(function (value) {
			  return inverted ? -value : value;
			}),
				_map2 = _slicedToArray(_map, 2),
				x = _map2[0],
				y = _map2[1]; // Using the biggest delta, normalize to 1 or -1 (or 0 if no delta)
  
  
			var direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y); // Change the volume by 2%
  
			player.increaseVolume(direction / 50); // Don't break page scrolling at max and min
  
			var volume = player.media.volume;
  
			if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
			  event.preventDefault();
			}
		  }, 'volume', false);
		}
	  }]);
  
	  return Listeners;
	}();
  
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
  
	var loadjs_umd = createCommonjsModule(function (module, exports) {
	  (function (root, factory) {
		{
		  module.exports = factory();
		}
	  })(commonjsGlobal, function () {
		/**
		 * Global dependencies.
		 * @global {Object} document - DOM
		 */
		var devnull = function devnull() {},
			bundleIdCache = {},
			bundleResultCache = {},
			bundleCallbackQueue = {};
		/**
		 * Subscribe to bundle load event.
		 * @param {string[]} bundleIds - Bundle ids
		 * @param {Function} callbackFn - The callback function
		 */
  
  
		function subscribe(bundleIds, callbackFn) {
		  // listify
		  bundleIds = bundleIds.push ? bundleIds : [bundleIds];
		  var depsNotFound = [],
			  i = bundleIds.length,
			  numWaiting = i,
			  fn,
			  bundleId,
			  r,
			  q; // define callback function
  
		  fn = function fn(bundleId, pathsNotFound) {
			if (pathsNotFound.length) depsNotFound.push(bundleId);
			numWaiting--;
			if (!numWaiting) callbackFn(depsNotFound);
		  }; // register callback
  
  
		  while (i--) {
			bundleId = bundleIds[i]; // execute callback if in result cache
  
			r = bundleResultCache[bundleId];
  
			if (r) {
			  fn(bundleId, r);
			  continue;
			} // add to callback queue
  
  
			q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
			q.push(fn);
		  }
		}
		/**
		 * Publish bundle load event.
		 * @param {string} bundleId - Bundle id
		 * @param {string[]} pathsNotFound - List of files not found
		 */
  
  
		function publish(bundleId, pathsNotFound) {
		  // exit if id isn't defined
		  if (!bundleId) return;
		  var q = bundleCallbackQueue[bundleId]; // cache result
  
		  bundleResultCache[bundleId] = pathsNotFound; // exit if queue is empty
  
		  if (!q) return; // empty callback queue
  
		  while (q.length) {
			q[0](bundleId, pathsNotFound);
			q.splice(0, 1);
		  }
		}
		/**
		 * Execute callbacks.
		 * @param {Object or Function} args - The callback args
		 * @param {string[]} depsNotFound - List of dependencies not found
		 */
  
  
		function executeCallbacks(args, depsNotFound) {
		  // accept function as argument
		  if (args.call) args = {
			success: args
		  }; // success and error callbacks
  
		  if (depsNotFound.length) (args.error || devnull)(depsNotFound);else (args.success || devnull)(args);
		}
		/**
		 * Load individual file.
		 * @param {string} path - The file path
		 * @param {Function} callbackFn - The callback function
		 */
  
  
		function loadFile(path, callbackFn, args, numTries) {
		  var doc = document,
			  async = args.async,
			  maxTries = (args.numRetries || 0) + 1,
			  beforeCallbackFn = args.before || devnull,
			  pathStripped = path.replace(/^(css|img)!/, ''),
			  isLegacyIECss,
			  e;
		  numTries = numTries || 0;
  
		  if (/(^css!|\.css$)/.test(path)) {
			// css
			e = doc.createElement('link');
			e.rel = 'stylesheet';
			e.href = pathStripped; // tag IE9+
  
			isLegacyIECss = 'hideFocus' in e; // use preload in IE Edge (to detect load errors)
  
			if (isLegacyIECss && e.relList) {
			  isLegacyIECss = 0;
			  e.rel = 'preload';
			  e.as = 'style';
			}
		  } else if (/(^img!|\.(png|gif|jpg|svg)$)/.test(path)) {
			// image
			e = doc.createElement('img');
			e.src = pathStripped;
		  } else {
			// javascript
			e = doc.createElement('script');
			e.src = path;
			e.async = async === undefined ? true : async;
		  }
  
		  e.onload = e.onerror = e.onbeforeload = function (ev) {
			var result = ev.type[0]; // treat empty stylesheets as failures to get around lack of onerror
			// support in IE9-11
  
			if (isLegacyIECss) {
			  try {
				if (!e.sheet.cssText.length) result = 'e';
			  } catch (x) {
				// sheets objects created from load errors don't allow access to
				// `cssText` (unless error is Code:18 SecurityError)
				if (x.code != 18) result = 'e';
			  }
			} // handle retries in case of load failure
  
  
			if (result == 'e') {
			  // increment counter
			  numTries += 1; // exit function and try again
  
			  if (numTries < maxTries) {
				return loadFile(path, callbackFn, args, numTries);
			  }
			} else if (e.rel == 'preload' && e.as == 'style') {
			  // activate preloaded stylesheets
			  return e.rel = 'stylesheet'; // jshint ignore:line
			} // execute callback
  
  
			callbackFn(path, result, ev.defaultPrevented);
		  }; // add to document (unless callback returns `false`)
  
  
		  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
		}
		/**
		 * Load multiple files.
		 * @param {string[]} paths - The file paths
		 * @param {Function} callbackFn - The callback function
		 */
  
  
		function loadFiles(paths, callbackFn, args) {
		  // listify paths
		  paths = paths.push ? paths : [paths];
		  var numWaiting = paths.length,
			  x = numWaiting,
			  pathsNotFound = [],
			  fn,
			  i; // define callback function
  
		  fn = function fn(path, result, defaultPrevented) {
			// handle error
			if (result == 'e') pathsNotFound.push(path); // handle beforeload event. If defaultPrevented then that means the load
			// will be blocked (ex. Ghostery/ABP on Safari)
  
			if (result == 'b') {
			  if (defaultPrevented) pathsNotFound.push(path);else return;
			}
  
			numWaiting--;
			if (!numWaiting) callbackFn(pathsNotFound);
		  }; // load scripts
  
  
		  for (i = 0; i < x; i++) {
			loadFile(paths[i], fn, args);
		  }
		}
		/**
		 * Initiate script load and register bundle.
		 * @param {(string|string[])} paths - The file paths
		 * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
		 *   callback or (3) object literal with success/error arguments, numRetries,
		 *   etc.
		 * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
		 *   literal with success/error arguments, numRetries, etc.
		 */
  
  
		function loadjs(paths, arg1, arg2) {
		  var bundleId, args; // bundleId (if string)
  
		  if (arg1 && arg1.trim) bundleId = arg1; // args (default is {})
  
		  args = (bundleId ? arg2 : arg1) || {}; // throw error if bundle is already defined
  
		  if (bundleId) {
			if (bundleId in bundleIdCache) {
			  throw "LoadJS";
			} else {
			  bundleIdCache[bundleId] = true;
			}
		  }
  
		  function loadFn(resolve, reject) {
			loadFiles(paths, function (pathsNotFound) {
			  // execute callbacks
			  executeCallbacks(args, pathsNotFound); // resolve Promise
  
			  if (resolve) {
				executeCallbacks({
				  success: resolve,
				  error: reject
				}, pathsNotFound);
			  } // publish bundle load event
  
  
			  publish(bundleId, pathsNotFound);
			}, args);
		  }
  
		  if (args.returnPromise) return new Promise(loadFn);else loadFn();
		}
		/**
		 * Execute callbacks when dependencies have been satisfied.
		 * @param {(string|string[])} deps - List of bundle ids
		 * @param {Object} args - success/error arguments
		 */
  
  
		loadjs.ready = function ready(deps, args) {
		  // subscribe to bundle load event
		  subscribe(deps, function (depsNotFound) {
			// execute callbacks
			executeCallbacks(args, depsNotFound);
		  });
		  return loadjs;
		};
		/**
		 * Manually satisfy bundle dependencies.
		 * @param {string} bundleId - The bundle id
		 */
  
  
		loadjs.done = function done(bundleId) {
		  publish(bundleId, []);
		};
		/**
		 * Reset loadjs dependencies statuses
		 */
  
  
		loadjs.reset = function reset() {
		  bundleIdCache = {};
		  bundleResultCache = {};
		  bundleCallbackQueue = {};
		};
		/**
		 * Determine if bundle has already been defined
		 * @param String} bundleId - The bundle id
		 */
  
  
		loadjs.isDefined = function isDefined(bundleId) {
		  return bundleId in bundleIdCache;
		}; // export
  
  
		return loadjs;
	  });
	});
  
	// ==========================================================================
	function loadScript(url) {
	  return new Promise(function (resolve, reject) {
		loadjs_umd(url, {
		  success: resolve,
		  error: reject
		});
	  });
	}
  
	function parseId(url) {
	  if (is$1.empty(url)) {
		return null;
	  }
  
	  if (is$1.number(Number(url))) {
		return url;
	  }
  
	  var regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
	  return url.match(regex) ? RegExp.$2 : url;
	} // Set playback state and trigger change (only on actual change)
  
  
	function assurePlaybackState(play) {
	  if (play && !this.embed.hasPlayed) {
		this.embed.hasPlayed = true;
	  }
  
	  if (this.media.paused === play) {
		this.media.paused = !play;
		triggerEvent.call(this, this.media, play ? 'play' : 'pause');
	  }
	}
  
	var vimeo = {
	  setup: function setup() {
		var _this = this;
  
		// Add embed class for responsive
		toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Set intial ratio
  
		setAspectRatio.call(this); // Load the SDK if not already
  
		if (!is$1.object(window.Vimeo)) {
		  loadScript(this.config.urls.vimeo.sdk).then(function () {
			vimeo.ready.call(_this);
		  }).catch(function (error) {
			_this.debug.warn('Vimeo SDK (player.js) failed to load', error);
		  });
		} else {
		  vimeo.ready.call(this);
		}
	  },
	  // API Ready
	  ready: function ready() {
		var _this2 = this;
  
		var player = this;
		var config = player.config.vimeo; // Get Vimeo params for the iframe
  
		var params = buildUrlParams(extend({}, {
		  loop: player.config.loop.active,
		  autoplay: player.autoplay,
		  muted: player.muted,
		  gesture: 'media',
		  playsinline: !this.config.fullscreen.iosNative
		}, config)); // Get the source URL or ID
  
		var source = player.media.getAttribute('src'); // Get from <div> if needed
  
		if (is$1.empty(source)) {
		  source = player.media.getAttribute(player.config.attributes.embed.id);
		}
  
		var id = parseId(source); // Build an iframe
  
		var iframe = createElement('iframe');
		var src = format(player.config.urls.vimeo.iframe, id, params);
		iframe.setAttribute('src', src);
		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allowtransparency', '');
		iframe.setAttribute('allow', 'autoplay'); // Get poster, if already set
  
		var poster = player.poster; // Inject the package
  
		var wrapper = createElement('div', {
		  poster: poster,
		  class: player.config.classNames.embedContainer
		});
		wrapper.appendChild(iframe);
		player.media = replaceElement(wrapper, player.media); // Get poster image
  
		fetch(format(player.config.urls.vimeo.api, id), 'json').then(function (response) {
		  if (is$1.empty(response)) {
			return;
		  } // Get the URL for thumbnail
  
  
		  var url = new URL(response[0].thumbnail_large); // Get original image
  
		  url.pathname = "".concat(url.pathname.split('_')[0], ".jpg"); // Set and show poster
  
		  ui.setPoster.call(player, url.href).catch(function () {});
		}); // Setup instance
		// https://github.com/vimeo/player.js
  
		player.embed = new window.Vimeo.Player(iframe, {
		  autopause: player.config.autopause,
		  muted: player.muted
		});
		player.media.paused = true;
		player.media.currentTime = 0; // Disable native text track rendering
  
		if (player.supported.ui) {
		  player.embed.disableTextTrack();
		} // Create a faux HTML5 API using the Vimeo API
  
  
		player.media.play = function () {
		  assurePlaybackState.call(player, true);
		  return player.embed.play();
		};
  
		player.media.pause = function () {
		  assurePlaybackState.call(player, false);
		  return player.embed.pause();
		};
  
		player.media.stop = function () {
		  player.pause();
		  player.currentTime = 0;
		}; // Seeking
  
  
		var currentTime = player.media.currentTime;
		Object.defineProperty(player.media, 'currentTime', {
		  get: function get() {
			return currentTime;
		  },
		  set: function set(time) {
			// Vimeo will automatically play on seek if the video hasn't been played before
			// Get current paused state and volume etc
			var embed = player.embed,
				media = player.media,
				paused = player.paused,
				volume = player.volume;
			var restorePause = paused && !embed.hasPlayed; // Set seeking state and trigger event
  
			media.seeking = true;
			triggerEvent.call(player, media, 'seeking'); // If paused, mute until seek is complete
  
			Promise.resolve(restorePause && embed.setVolume(0)) // Seek
			.then(function () {
			  return embed.setCurrentTime(time);
			}) // Restore paused
			.then(function () {
			  return restorePause && embed.pause();
			}) // Restore volume
			.then(function () {
			  return restorePause && embed.setVolume(volume);
			}).catch(function () {// Do nothing
			});
		  }
		}); // Playback speed
  
		var speed = player.config.speed.selected;
		Object.defineProperty(player.media, 'playbackRate', {
		  get: function get() {
			return speed;
		  },
		  set: function set(input) {
			player.embed.setPlaybackRate(input).then(function () {
			  speed = input;
			  triggerEvent.call(player, player.media, 'ratechange');
			}).catch(function (error) {
			  // Hide menu item (and menu if empty)
			  if (error.name === 'Error') {
				controls.setSpeedMenu.call(player, []);
			  }
			});
		  }
		}); // Volume
  
		var volume = player.config.volume;
		Object.defineProperty(player.media, 'volume', {
		  get: function get() {
			return volume;
		  },
		  set: function set(input) {
			player.embed.setVolume(input).then(function () {
			  volume = input;
			  triggerEvent.call(player, player.media, 'volumechange');
			});
		  }
		}); // Muted
  
		var muted = player.config.muted;
		Object.defineProperty(player.media, 'muted', {
		  get: function get() {
			return muted;
		  },
		  set: function set(input) {
			var toggle = is$1.boolean(input) ? input : false;
			player.embed.setVolume(toggle ? 0 : player.config.volume).then(function () {
			  muted = toggle;
			  triggerEvent.call(player, player.media, 'volumechange');
			});
		  }
		}); // Loop
  
		var loop = player.config.loop;
		Object.defineProperty(player.media, 'loop', {
		  get: function get() {
			return loop;
		  },
		  set: function set(input) {
			var toggle = is$1.boolean(input) ? input : player.config.loop.active;
			player.embed.setLoop(toggle).then(function () {
			  loop = toggle;
			});
		  }
		}); // Source
  
		var currentSrc;
		player.embed.getVideoUrl().then(function (value) {
		  currentSrc = value;
		  controls.setDownloadUrl.call(player);
		}).catch(function (error) {
		  _this2.debug.warn(error);
		});
		Object.defineProperty(player.media, 'currentSrc', {
		  get: function get() {
			return currentSrc;
		  }
		}); // Ended
  
		Object.defineProperty(player.media, 'ended', {
		  get: function get() {
			return player.currentTime === player.duration;
		  }
		}); // Set aspect ratio based on video size
  
		Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then(function (dimensions) {
		  var _dimensions = _slicedToArray(dimensions, 2),
			  width = _dimensions[0],
			  height = _dimensions[1];
  
		  player.embed.ratio = [width, height];
		  setAspectRatio.call(_this2);
		}); // Set autopause
  
		player.embed.setAutopause(player.config.autopause).then(function (state) {
		  player.config.autopause = state;
		}); // Get title
  
		player.embed.getVideoTitle().then(function (title) {
		  player.config.title = title;
		  ui.setTitle.call(_this2);
		}); // Get current time
  
		player.embed.getCurrentTime().then(function (value) {
		  currentTime = value;
		  triggerEvent.call(player, player.media, 'timeupdate');
		}); // Get duration
  
		player.embed.getDuration().then(function (value) {
		  player.media.duration = value;
		  triggerEvent.call(player, player.media, 'durationchange');
		}); // Get captions
  
		player.embed.getTextTracks().then(function (tracks) {
		  player.media.textTracks = tracks;
		  captions.setup.call(player);
		});
		player.embed.on('cuechange', function (_ref) {
		  var _ref$cues = _ref.cues,
			  cues = _ref$cues === void 0 ? [] : _ref$cues;
		  var strippedCues = cues.map(function (cue) {
			return stripHTML(cue.text);
		  });
		  captions.updateCues.call(player, strippedCues);
		});
		player.embed.on('loaded', function () {
		  // Assure state and events are updated on autoplay
		  player.embed.getPaused().then(function (paused) {
			assurePlaybackState.call(player, !paused);
  
			if (!paused) {
			  triggerEvent.call(player, player.media, 'playing');
			}
		  });
  
		  if (is$1.element(player.embed.element) && player.supported.ui) {
			var frame = player.embed.element; // Fix keyboard focus issues
			// https://github.com/sampotts/plyr/issues/317
  
			frame.setAttribute('tabindex', -1);
		  }
		});
		player.embed.on('play', function () {
		  assurePlaybackState.call(player, true);
		  triggerEvent.call(player, player.media, 'playing');
		});
		player.embed.on('pause', function () {
		  assurePlaybackState.call(player, false);
		});
		player.embed.on('timeupdate', function (data) {
		  player.media.seeking = false;
		  currentTime = data.seconds;
		  triggerEvent.call(player, player.media, 'timeupdate');
		});
		player.embed.on('progress', function (data) {
		  player.media.buffered = data.percent;
		  triggerEvent.call(player, player.media, 'progress'); // Check all loaded
  
		  if (parseInt(data.percent, 10) === 1) {
			triggerEvent.call(player, player.media, 'canplaythrough');
		  } // Get duration as if we do it before load, it gives an incorrect value
		  // https://github.com/sampotts/plyr/issues/891
  
  
		  player.embed.getDuration().then(function (value) {
			if (value !== player.media.duration) {
			  player.media.duration = value;
			  triggerEvent.call(player, player.media, 'durationchange');
			}
		  });
		});
		player.embed.on('seeked', function () {
		  player.media.seeking = false;
		  triggerEvent.call(player, player.media, 'seeked');
		});
		player.embed.on('ended', function () {
		  player.media.paused = true;
		  triggerEvent.call(player, player.media, 'ended');
		});
		player.embed.on('error', function (detail) {
		  player.media.error = detail;
		  triggerEvent.call(player, player.media, 'error');
		}); // Rebuild UI
  
		setTimeout(function () {
		  return ui.build.call(player);
		}, 0);
	  }
	};
  
	// ==========================================================================
  
	function parseId$1(url) {
	  if (is$1.empty(url)) {
		return null;
	  }
  
	  var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
	  return url.match(regex) ? RegExp.$2 : url;
	} // Set playback state and trigger change (only on actual change)
  
  
	function assurePlaybackState$1(play) {
	  if (play && !this.embed.hasPlayed) {
		this.embed.hasPlayed = true;
	  }
  
	  if (this.media.paused === play) {
		this.media.paused = !play;
		triggerEvent.call(this, this.media, play ? 'play' : 'pause');
	  }
	}
  
	function getHost(config) {
	  if (config.noCookie) {
		return 'https://www.youtube-nocookie.com';
	  }
  
	  if (window.location.protocol === 'http:') {
		return 'http://www.youtube.com';
	  } // Use YouTube's default
  
  
	  return undefined;
	}
  
	var youtube = {
	  setup: function setup() {
		var _this = this;
  
		// Add embed class for responsive
		toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Setup API
  
		if (is$1.object(window.YT) && is$1.function(window.YT.Player)) {
		  youtube.ready.call(this);
		} else {
		  // Load the API
		  loadScript(this.config.urls.youtube.sdk).catch(function (error) {
			_this.debug.warn('YouTube API failed to load', error);
		  }); // Setup callback for the API
		  // YouTube has it's own system of course...
  
		  window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || []; // Add to queue
  
		  window.onYouTubeReadyCallbacks.push(function () {
			youtube.ready.call(_this);
		  }); // Set callback to process queue
  
		  window.onYouTubeIframeAPIReady = function () {
			window.onYouTubeReadyCallbacks.forEach(function (callback) {
			  callback();
			});
		  };
		}
	  },
	  // Get the media title
	  getTitle: function getTitle(videoId) {
		var _this2 = this;
  
		var url = format(this.config.urls.youtube.api, videoId);
		fetch(url).then(function (data) {
		  if (is$1.object(data)) {
			var title = data.title,
				height = data.height,
				width = data.width; // Set title
  
			_this2.config.title = title;
			ui.setTitle.call(_this2); // Set aspect ratio
  
			_this2.embed.ratio = [width, height];
		  }
  
		  setAspectRatio.call(_this2);
		}).catch(function () {
		  // Set aspect ratio
		  setAspectRatio.call(_this2);
		});
	  },
	  // API ready
	  ready: function ready() {
		var player = this; // Ignore already setup (race condition)
  
		var currentId = player.media.getAttribute('id');
  
		if (!is$1.empty(currentId) && currentId.startsWith('youtube-')) {
		  return;
		} // Get the source URL or ID
  
  
		var source = player.media.getAttribute('src'); // Get from <div> if needed
  
		if (is$1.empty(source)) {
		  source = player.media.getAttribute(this.config.attributes.embed.id);
		} // Replace the <iframe> with a <div> due to YouTube API issues
  
  
		var videoId = parseId$1(source);
		var id = generateId(player.provider); // Get poster, if already set
  
		var poster = player.poster; // Replace media element
  
		var container = createElement('div', {
		  id: id,
		  poster: poster
		});
		player.media = replaceElement(container, player.media); // Id to poster wrapper
  
		var posterSrc = function posterSrc(format) {
		  return "https://i.ytimg.com/vi/".concat(videoId, "/").concat(format, "default.jpg");
		}; // Check thumbnail images in order of quality, but reject fallback thumbnails (120px wide)
  
  
		loadImage(posterSrc('maxres'), 121) // Higest quality and unpadded
		.catch(function () {
		  return loadImage(posterSrc('sd'), 121);
		}) // 480p padded 4:3
		.catch(function () {
		  return loadImage(posterSrc('hq'));
		}) // 360p padded 4:3. Always exists
		.then(function (image) {
		  return ui.setPoster.call(player, image.src);
		}).then(function (posterSrc) {
		  // If the image is padded, use background-size "cover" instead (like youtube does too with their posters)
		  if (!posterSrc.includes('maxres')) {
			player.elements.poster.style.backgroundSize = 'cover';
		  }
		}).catch(function () {});
		var config = player.config.youtube; // Setup instance
		// https://developers.google.com/youtube/iframe_api_reference
  
		player.embed = new window.YT.Player(id, {
		  videoId: videoId,
		  host: getHost(config),
		  playerVars: extend({}, {
			autoplay: player.config.autoplay ? 1 : 0,
			// Autoplay
			hl: player.config.hl,
			// iframe interface language
			controls: player.supported.ui ? 0 : 1,
			// Only show controls if not fully supported
			disablekb: 1,
			// Disable keyboard as we handle it
			playsinline: !player.config.fullscreen.iosNative ? 1 : 0,
			// Allow iOS inline playback
			// Captions are flaky on YouTube
			cc_load_policy: player.captions.active ? 1 : 0,
			cc_lang_pref: player.config.captions.language,
			// Tracking for stats
			widget_referrer: window ? window.location.href : null
		  }, config),
		  events: {
			onError: function onError(event) {
			  // YouTube may fire onError twice, so only handle it once
			  if (!player.media.error) {
				var code = event.data; // Messages copied from https://developers.google.com/youtube/iframe_api_reference#onError
  
				var message = {
				  2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
				  5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
				  100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
				  101: 'The owner of the requested video does not allow it to be played in embedded players.',
				  150: 'The owner of the requested video does not allow it to be played in embedded players.'
				}[code] || 'An unknown error occured';
				player.media.error = {
				  code: code,
				  message: message
				};
				triggerEvent.call(player, player.media, 'error');
			  }
			},
			onPlaybackRateChange: function onPlaybackRateChange(event) {
			  // Get the instance
			  var instance = event.target; // Get current speed
  
			  player.media.playbackRate = instance.getPlaybackRate();
			  triggerEvent.call(player, player.media, 'ratechange');
			},
			onReady: function onReady(event) {
			  // Bail if onReady has already been called. See issue #1108
			  if (is$1.function(player.media.play)) {
				return;
			  } // Get the instance
  
  
			  var instance = event.target; // Get the title
  
			  youtube.getTitle.call(player, videoId); // Create a faux HTML5 API using the YouTube API
  
			  player.media.play = function () {
				assurePlaybackState$1.call(player, true);
				instance.playVideo();
			  };
  
			  player.media.pause = function () {
				assurePlaybackState$1.call(player, false);
				instance.pauseVideo();
			  };
  
			  player.media.stop = function () {
				instance.stopVideo();
			  };
  
			  player.media.duration = instance.getDuration();
			  player.media.paused = true; // Seeking
  
			  player.media.currentTime = 0;
			  Object.defineProperty(player.media, 'currentTime', {
				get: function get() {
				  return Number(instance.getCurrentTime());
				},
				set: function set(time) {
				  // If paused and never played, mute audio preventively (YouTube starts playing on seek if the video hasn't been played yet).
				  if (player.paused && !player.embed.hasPlayed) {
					player.embed.mute();
				  } // Set seeking state and trigger event
  
  
				  player.media.seeking = true;
				  triggerEvent.call(player, player.media, 'seeking'); // Seek after events sent
  
				  instance.seekTo(time);
				}
			  }); // Playback speed
  
			  Object.defineProperty(player.media, 'playbackRate', {
				get: function get() {
				  return instance.getPlaybackRate();
				},
				set: function set(input) {
				  instance.setPlaybackRate(input);
				}
			  }); // Volume
  
			  var volume = player.config.volume;
			  Object.defineProperty(player.media, 'volume', {
				get: function get() {
				  return volume;
				},
				set: function set(input) {
				  volume = input;
				  instance.setVolume(volume * 100);
				  triggerEvent.call(player, player.media, 'volumechange');
				}
			  }); // Muted
  
			  var muted = player.config.muted;
			  Object.defineProperty(player.media, 'muted', {
				get: function get() {
				  return muted;
				},
				set: function set(input) {
				  var toggle = is$1.boolean(input) ? input : muted;
				  muted = toggle;
				  instance[toggle ? 'mute' : 'unMute']();
				  triggerEvent.call(player, player.media, 'volumechange');
				}
			  }); // Source
  
			  Object.defineProperty(player.media, 'currentSrc', {
				get: function get() {
				  return instance.getVideoUrl();
				}
			  }); // Ended
  
			  Object.defineProperty(player.media, 'ended', {
				get: function get() {
				  return player.currentTime === player.duration;
				}
			  }); // Get available speeds
  
			  player.options.speed = instance.getAvailablePlaybackRates(); // Set the tabindex to avoid focus entering iframe
  
			  if (player.supported.ui) {
				player.media.setAttribute('tabindex', -1);
			  }
  
			  triggerEvent.call(player, player.media, 'timeupdate');
			  triggerEvent.call(player, player.media, 'durationchange'); // Reset timer
  
			  clearInterval(player.timers.buffering); // Setup buffering
  
			  player.timers.buffering = setInterval(function () {
				// Get loaded % from YouTube
				player.media.buffered = instance.getVideoLoadedFraction(); // Trigger progress only when we actually buffer something
  
				if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
				  triggerEvent.call(player, player.media, 'progress');
				} // Set last buffer point
  
  
				player.media.lastBuffered = player.media.buffered; // Bail if we're at 100%
  
				if (player.media.buffered === 1) {
				  clearInterval(player.timers.buffering); // Trigger event
  
				  triggerEvent.call(player, player.media, 'canplaythrough');
				}
			  }, 200); // Rebuild UI
  
			  setTimeout(function () {
				return ui.build.call(player);
			  }, 50);
			},
			onStateChange: function onStateChange(event) {
			  // Get the instance
			  var instance = event.target; // Reset timer
  
			  clearInterval(player.timers.playing);
			  var seeked = player.media.seeking && [1, 2].includes(event.data);
  
			  if (seeked) {
				// Unset seeking and fire seeked event
				player.media.seeking = false;
				triggerEvent.call(player, player.media, 'seeked');
			  } // Handle events
			  // -1   Unstarted
			  // 0    Ended
			  // 1    Playing
			  // 2    Paused
			  // 3    Buffering
			  // 5    Video cued
  
  
			  switch (event.data) {
				case -1:
				  // Update scrubber
				  triggerEvent.call(player, player.media, 'timeupdate'); // Get loaded % from YouTube
  
				  player.media.buffered = instance.getVideoLoadedFraction();
				  triggerEvent.call(player, player.media, 'progress');
				  break;
  
				case 0:
				  assurePlaybackState$1.call(player, false); // YouTube doesn't support loop for a single video, so mimick it.
  
				  if (player.media.loop) {
					// YouTube needs a call to `stopVideo` before playing again
					instance.stopVideo();
					instance.playVideo();
				  } else {
					triggerEvent.call(player, player.media, 'ended');
				  }
  
				  break;
  
				case 1:
				  // Restore paused state (YouTube starts playing on seek if the video hasn't been played yet)
				  if (!player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
					player.media.pause();
				  } else {
					assurePlaybackState$1.call(player, true);
					triggerEvent.call(player, player.media, 'playing'); // Poll to get playback progress
  
					player.timers.playing = setInterval(function () {
					  triggerEvent.call(player, player.media, 'timeupdate');
					}, 50); // Check duration again due to YouTube bug
					// https://github.com/sampotts/plyr/issues/374
					// https://code.google.com/p/gdata-issues/issues/detail?id=8690
  
					if (player.media.duration !== instance.getDuration()) {
					  player.media.duration = instance.getDuration();
					  triggerEvent.call(player, player.media, 'durationchange');
					}
				  }
  
				  break;
  
				case 2:
				  // Restore audio (YouTube starts playing on seek if the video hasn't been played yet)
				  if (!player.muted) {
					player.embed.unMute();
				  }
  
				  assurePlaybackState$1.call(player, false);
				  break;
  
				default:
				  break;
			  }
  
			  triggerEvent.call(player, player.elements.container, 'statechange', false, {
				code: event.data
			  });
			}
		  }
		});
	  }
	};
  
	// ==========================================================================
	var media = {
	  // Setup media
	  setup: function setup() {
		// If there's no media, bail
		if (!this.media) {
		  this.debug.warn('No media element found!');
		  return;
		} // Add type class
  
  
		toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', this.type), true); // Add provider class
  
		toggleClass(this.elements.container, this.config.classNames.provider.replace('{0}', this.provider), true); // Add video class for embeds
		// This will require changes if audio embeds are added
  
		if (this.isEmbed) {
		  toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', 'video'), true);
		} // Inject the player wrapper
  
  
		if (this.isVideo) {
		  // Create the wrapper div
		  this.elements.wrapper = createElement('div', {
			class: this.config.classNames.video
		  }); // Wrap the video in a container
  
		  wrap(this.media, this.elements.wrapper); // Faux poster container
  
		  this.elements.poster = createElement('div', {
			class: this.config.classNames.poster
		  });
		  this.elements.wrapper.appendChild(this.elements.poster);
		}
  
		if (this.isHTML5) {
		  html5.extend.call(this);
		} else if (this.isYouTube) {
		  youtube.setup.call(this);
		} else if (this.isVimeo) {
		  vimeo.setup.call(this);
		}
	  }
	};
  
	var destroy = function destroy(instance) {
	  // Destroy our adsManager
	  if (instance.manager) {
		instance.manager.destroy();
	  } // Destroy our adsManager
  
  
	  if (instance.elements.displayContainer) {
		instance.elements.displayContainer.destroy();
	  }
  
	  instance.elements.container.remove();
	};
  
	var Ads =
	/*#__PURE__*/
	function () {
	  /**
	   * Ads constructor.
	   * @param {Object} player
	   * @return {Ads}
	   */
	  function Ads(player) {
		var _this = this;
  
		_classCallCheck(this, Ads);
  
		this.player = player;
		this.config = player.config.ads;
		this.playing = false;
		this.initialized = false;
		this.elements = {
		  container: null,
		  displayContainer: null
		};
		this.manager = null;
		this.loader = null;
		this.cuePoints = null;
		this.events = {};
		this.safetyTimer = null;
		this.countdownTimer = null; // Setup a promise to resolve when the IMA manager is ready
  
		this.managerPromise = new Promise(function (resolve, reject) {
		  // The ad is loaded and ready
		  _this.on('loaded', resolve); // Ads failed
  
  
		  _this.on('error', reject);
		});
		this.load();
	  }
  
	  _createClass(Ads, [{
		key: "load",
  
		/**
		 * Load the IMA SDK
		 */
		value: function load() {
		  var _this2 = this;
  
		  if (!this.enabled) {
			return;
		  } // Check if the Google IMA3 SDK is loaded or load it ourselves
  
  
		  if (!is$1.object(window.google) || !is$1.object(window.google.ima)) {
			loadScript(this.player.config.urls.googleIMA.sdk).then(function () {
			  _this2.ready();
			}).catch(function () {
			  // Script failed to load or is blocked
			  _this2.trigger('error', new Error('Google IMA SDK failed to load'));
			});
		  } else {
			this.ready();
		  }
		}
		/**
		 * Get the ads instance ready
		 */
  
	  }, {
		key: "ready",
		value: function ready() {
		  var _this3 = this;
  
		  // Double check we're enabled
		  if (!this.enabled) {
			destroy(this);
		  } // Start ticking our safety timer. If the whole advertisement
		  // thing doesn't resolve within our set time; we bail
  
  
		  this.startSafetyTimer(12000, 'ready()'); // Clear the safety timer
  
		  this.managerPromise.then(function () {
			_this3.clearSafetyTimer('onAdsManagerLoaded()');
		  }); // Set listeners on the Plyr instance
  
		  this.listeners(); // Setup the IMA SDK
  
		  this.setupIMA();
		} // Build the tag URL
  
	  }, {
		key: "setupIMA",
  
		/**
		 * In order for the SDK to display ads for our video, we need to tell it where to put them,
		 * so here we define our ad container. This div is set up to render on top of the video player.
		 * Using the code below, we tell the SDK to render ads within that div. We also provide a
		 * handle to the content video player - the SDK will poll the current time of our player to
		 * properly place mid-rolls. After we create the ad display container, we initialize it. On
		 * mobile devices, this initialization is done as the result of a user action.
		 */
		value: function setupIMA() {
		  // Create the container for our advertisements
		  this.elements.container = createElement('div', {
			class: this.player.config.classNames.ads
		  });
		  this.player.elements.container.appendChild(this.elements.container); // So we can run VPAID2
  
		  google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED); // Set language
  
		  google.ima.settings.setLocale(this.player.config.ads.language); // Set playback for iOS10+
  
		  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline); // We assume the adContainer is the video container of the plyr element that will house the ads
  
		  this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media); // Request video ads to be pre-loaded
  
		  this.requestAds();
		}
		/**
		 * Request advertisements
		 */
  
	  }, {
		key: "requestAds",
		value: function requestAds() {
		  var _this4 = this;
  
		  var container = this.player.elements.container;
  
		  try {
			// Create ads loader
			this.loader = new google.ima.AdsLoader(this.elements.displayContainer); // Listen and respond to ads loaded and error events
  
			this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (event) {
			  return _this4.onAdsManagerLoaded(event);
			}, false);
			this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (error) {
			  return _this4.onAdError(error);
			}, false); // Request video ads
  
			var request = new google.ima.AdsRequest();
			request.adTagUrl = this.tagUrl; // Specify the linear and nonlinear slot sizes. This helps the SDK
			// to select the correct creative if multiple are returned
  
			request.linearAdSlotWidth = container.offsetWidth;
			request.linearAdSlotHeight = container.offsetHeight;
			request.nonLinearAdSlotWidth = container.offsetWidth;
			request.nonLinearAdSlotHeight = container.offsetHeight; // We only overlay ads as we only support video.
  
			request.forceNonLinearFullSlot = false; // Mute based on current state
  
			request.setAdWillPlayMuted(!this.player.muted);
			this.loader.requestAds(request);
		  } catch (e) {
			this.onAdError(e);
		  }
		}
		/**
		 * Update the ad countdown
		 * @param {Boolean} start
		 */
  
	  }, {
		key: "pollCountdown",
		value: function pollCountdown() {
		  var _this5 = this;
  
		  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  
		  if (!start) {
			clearInterval(this.countdownTimer);
			this.elements.container.removeAttribute('data-badge-text');
			return;
		  }
  
		  var update = function update() {
			var time = formatTime(Math.max(_this5.manager.getRemainingTime(), 0));
			var label = "".concat(i18n.get('advertisement', _this5.player.config), " - ").concat(time);
  
			_this5.elements.container.setAttribute('data-badge-text', label);
		  };
  
		  this.countdownTimer = setInterval(update, 100);
		}
		/**
		 * This method is called whenever the ads are ready inside the AdDisplayContainer
		 * @param {Event} adsManagerLoadedEvent
		 */
  
	  }, {
		key: "onAdsManagerLoaded",
		value: function onAdsManagerLoaded(event) {
		  var _this6 = this;
  
		  // Load could occur after a source change (race condition)
		  if (!this.enabled) {
			return;
		  } // Get the ads manager
  
  
		  var settings = new google.ima.AdsRenderingSettings(); // Tell the SDK to save and restore content video state on our behalf
  
		  settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
		  settings.enablePreloading = true; // The SDK is polling currentTime on the contentPlayback. And needs a duration
		  // so it can determine when to start the mid- and post-roll
  
		  this.manager = event.getAdsManager(this.player, settings); // Get the cue points for any mid-rolls by filtering out the pre- and post-roll
  
		  this.cuePoints = this.manager.getCuePoints(); // Add listeners to the required events
		  // Advertisement error events
  
		  this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (error) {
			return _this6.onAdError(error);
		  }); // Advertisement regular events
  
		  Object.keys(google.ima.AdEvent.Type).forEach(function (type) {
			_this6.manager.addEventListener(google.ima.AdEvent.Type[type], function (event) {
			  return _this6.onAdEvent(event);
			});
		  }); // Resolve our adsManager
  
		  this.trigger('loaded');
		}
	  }, {
		key: "addCuePoints",
		value: function addCuePoints() {
		  var _this7 = this;
  
		  // Add advertisement cue's within the time line if available
		  if (!is$1.empty(this.cuePoints)) {
			this.cuePoints.forEach(function (cuePoint) {
			  if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < _this7.player.duration) {
				var seekElement = _this7.player.elements.progress;
  
				if (is$1.element(seekElement)) {
				  var cuePercentage = 100 / _this7.player.duration * cuePoint;
				  var cue = createElement('span', {
					class: _this7.player.config.classNames.cues
				  });
				  cue.style.left = "".concat(cuePercentage.toString(), "%");
				  seekElement.appendChild(cue);
				}
			  }
			});
		  }
		}
		/**
		 * This is where all the event handling takes place. Retrieve the ad from the event. Some
		 * events (e.g. ALL_ADS_COMPLETED) don't have the ad object associated
		 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
		 * @param {Event} event
		 */
  
	  }, {
		key: "onAdEvent",
		value: function onAdEvent(event) {
		  var _this8 = this;
  
		  var container = this.player.elements.container; // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
		  // don't have ad object associated
  
		  var ad = event.getAd();
		  var adData = event.getAdData(); // Proxy event
  
		  var dispatchEvent = function dispatchEvent(type) {
			var event = "ads".concat(type.replace(/_/g, '').toLowerCase());
			triggerEvent.call(_this8.player, _this8.player.media, event);
		  }; // Bubble the event
  
  
		  dispatchEvent(event.type);
  
		  switch (event.type) {
			case google.ima.AdEvent.Type.LOADED:
			  // This is the first event sent for an ad - it is possible to determine whether the
			  // ad is a video ad or an overlay
			  this.trigger('loaded'); // Start countdown
  
			  this.pollCountdown(true);
  
			  if (!ad.isLinear()) {
				// Position AdDisplayContainer correctly for overlay
				ad.width = container.offsetWidth;
				ad.height = container.offsetHeight;
			  } // console.info('Ad type: ' + event.getAd().getAdPodInfo().getPodIndex());
			  // console.info('Ad time: ' + event.getAd().getAdPodInfo().getTimeOffset());
  
  
			  break;
  
			case google.ima.AdEvent.Type.STARTED:
			  // Set volume to match player
			  this.manager.setVolume(this.player.volume);
			  break;
  
			case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
			  // All ads for the current videos are done. We can now request new advertisements
			  // in case the video is re-played
			  // TODO: Example for what happens when a next video in a playlist would be loaded.
			  // So here we load a new video when all ads are done.
			  // Then we load new ads within a new adsManager. When the video
			  // Is started - after - the ads are loaded, then we get ads.
			  // You can also easily test cancelling and reloading by running
			  // player.ads.cancel() and player.ads.play from the console I guess.
			  // this.player.source = {
			  //     type: 'video',
			  //     title: 'View From A Blue Moon',
			  //     sources: [{
			  //         src:
			  // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', type:
			  // 'video/mp4', }], poster:
			  // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg', tracks:
			  // [ { kind: 'captions', label: 'English', srclang: 'en', src:
			  // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
			  // default: true, }, { kind: 'captions', label: 'French', srclang: 'fr', src:
			  // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt', }, ],
			  // };
			  // TODO: So there is still this thing where a video should only be allowed to start
			  // playing when the IMA SDK is ready or has failed
			  this.loadAds();
			  break;
  
			case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
			  // This event indicates the ad has started - the video player can adjust the UI,
			  // for example display a pause button and remaining time. Fired when content should
			  // be paused. This usually happens right before an ad is about to cover the content
			  this.pauseContent();
			  break;
  
			case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
			  // This event indicates the ad has finished - the video player can perform
			  // appropriate UI actions, such as removing the timer for remaining time detection.
			  // Fired when content should be resumed. This usually happens when an ad finishes
			  // or collapses
			  this.pollCountdown();
			  this.resumeContent();
			  break;
  
			case google.ima.AdEvent.Type.LOG:
			  if (adData.adError) {
				this.player.debug.warn("Non-fatal ad error: ".concat(adData.adError.getMessage()));
			  }
  
			  break;
  
			default:
			  break;
		  }
		}
		/**
		 * Any ad error handling comes through here
		 * @param {Event} event
		 */
  
	  }, {
		key: "onAdError",
		value: function onAdError(event) {
		  this.cancel();
		  this.player.debug.warn('Ads error', event);
		}
		/**
		 * Setup hooks for Plyr and window events. This ensures
		 * the mid- and post-roll launch at the correct time. And
		 * resize the advertisement when the player resizes
		 */
  
	  }, {
		key: "listeners",
		value: function listeners() {
		  var _this9 = this;
  
		  var container = this.player.elements.container;
		  var time;
		  this.player.on('canplay', function () {
			_this9.addCuePoints();
		  });
		  this.player.on('ended', function () {
			_this9.loader.contentComplete();
		  });
		  this.player.on('timeupdate', function () {
			time = _this9.player.currentTime;
		  });
		  this.player.on('seeked', function () {
			var seekedTime = _this9.player.currentTime;
  
			if (is$1.empty(_this9.cuePoints)) {
			  return;
			}
  
			_this9.cuePoints.forEach(function (cuePoint, index) {
			  if (time < cuePoint && cuePoint < seekedTime) {
				_this9.manager.discardAdBreak();
  
				_this9.cuePoints.splice(index, 1);
			  }
			});
		  }); // Listen to the resizing of the window. And resize ad accordingly
		  // TODO: eventually implement ResizeObserver
  
		  window.addEventListener('resize', function () {
			if (_this9.manager) {
			  _this9.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
			}
		  });
		}
		/**
		 * Initialize the adsManager and start playing advertisements
		 */
  
	  }, {
		key: "play",
		value: function play() {
		  var _this10 = this;
  
		  var container = this.player.elements.container;
  
		  if (!this.managerPromise) {
			this.resumeContent();
		  } // Play the requested advertisement whenever the adsManager is ready
  
  
		  this.managerPromise.then(function () {
			// Set volume to match player
			_this10.manager.setVolume(_this10.player.volume); // Initialize the container. Must be done via a user action on mobile devices
  
  
			_this10.elements.displayContainer.initialize();
  
			try {
			  if (!_this10.initialized) {
				// Initialize the ads manager. Ad rules playlist will start at this time
				_this10.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL); // Call play to start showing the ad. Single video and overlay ads will
				// start at this time; the call will be ignored for ad rules
  
  
				_this10.manager.start();
			  }
  
			  _this10.initialized = true;
			} catch (adError) {
			  // An error may be thrown if there was a problem with the
			  // VAST response
			  _this10.onAdError(adError);
			}
		  }).catch(function () {});
		}
		/**
		 * Resume our video
		 */
  
	  }, {
		key: "resumeContent",
		value: function resumeContent() {
		  // Hide the advertisement container
		  this.elements.container.style.zIndex = ''; // Ad is stopped
  
		  this.playing = false; // Play video
  
		  this.player.media.play();
		}
		/**
		 * Pause our video
		 */
  
	  }, {
		key: "pauseContent",
		value: function pauseContent() {
		  // Show the advertisement container
		  this.elements.container.style.zIndex = 3; // Ad is playing
  
		  this.playing = true; // Pause our video.
  
		  this.player.media.pause();
		}
		/**
		 * Destroy the adsManager so we can grab new ads after this. If we don't then we're not
		 * allowed to call new ads based on google policies, as they interpret this as an accidental
		 * video requests. https://developers.google.com/interactive-
		 * media-ads/docs/sdks/android/faq#8
		 */
  
	  }, {
		key: "cancel",
		value: function cancel() {
		  // Pause our video
		  if (this.initialized) {
			this.resumeContent();
		  } // Tell our instance that we're done for now
  
  
		  this.trigger('error'); // Re-create our adsManager
  
		  this.loadAds();
		}
		/**
		 * Re-create our adsManager
		 */
  
	  }, {
		key: "loadAds",
		value: function loadAds() {
		  var _this11 = this;
  
		  // Tell our adsManager to go bye bye
		  this.managerPromise.then(function () {
			// Destroy our adsManager
			if (_this11.manager) {
			  _this11.manager.destroy();
			} // Re-set our adsManager promises
  
  
			_this11.managerPromise = new Promise(function (resolve) {
			  _this11.on('loaded', resolve);
  
			  _this11.player.debug.log(_this11.manager);
			}); // Now request some new advertisements
  
			_this11.requestAds();
		  }).catch(function () {});
		}
		/**
		 * Handles callbacks after an ad event was invoked
		 * @param {String} event - Event type
		 */
  
	  }, {
		key: "trigger",
		value: function trigger(event) {
		  var _this12 = this;
  
		  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		  }
  
		  var handlers = this.events[event];
  
		  if (is$1.array(handlers)) {
			handlers.forEach(function (handler) {
			  if (is$1.function(handler)) {
				handler.apply(_this12, args);
			  }
			});
		  }
		}
		/**
		 * Add event listeners
		 * @param {String} event - Event type
		 * @param {Function} callback - Callback for when event occurs
		 * @return {Ads}
		 */
  
	  }, {
		key: "on",
		value: function on(event, callback) {
		  if (!is$1.array(this.events[event])) {
			this.events[event] = [];
		  }
  
		  this.events[event].push(callback);
		  return this;
		}
		/**
		 * Setup a safety timer for when the ad network doesn't respond for whatever reason.
		 * The advertisement has 12 seconds to get its things together. We stop this timer when the
		 * advertisement is playing, or when a user action is required to start, then we clear the
		 * timer on ad ready
		 * @param {Number} time
		 * @param {String} from
		 */
  
	  }, {
		key: "startSafetyTimer",
		value: function startSafetyTimer(time, from) {
		  var _this13 = this;
  
		  this.player.debug.log("Safety timer invoked from: ".concat(from));
		  this.safetyTimer = setTimeout(function () {
			_this13.cancel();
  
			_this13.clearSafetyTimer('startSafetyTimer()');
		  }, time);
		}
		/**
		 * Clear our safety timer(s)
		 * @param {String} from
		 */
  
	  }, {
		key: "clearSafetyTimer",
		value: function clearSafetyTimer(from) {
		  if (!is$1.nullOrUndefined(this.safetyTimer)) {
			this.player.debug.log("Safety timer cleared from: ".concat(from));
			clearTimeout(this.safetyTimer);
			this.safetyTimer = null;
		  }
		}
	  }, {
		key: "enabled",
		get: function get() {
		  var config = this.config;
		  return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is$1.empty(config.publisherId) || is$1.url(config.tagUrl));
		}
	  }, {
		key: "tagUrl",
		get: function get() {
		  var config = this.config;
  
		  if (is$1.url(config.tagUrl)) {
			return config.tagUrl;
		  }
  
		  var params = {
			AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
			AV_CHANNELID: '5a0458dc28a06145e4519d21',
			AV_URL: window.location.hostname,
			cb: Date.now(),
			AV_WIDTH: 640,
			AV_HEIGHT: 480,
			AV_CDIM2: this.publisherId
		  };
		  var base = 'https://go.aniview.com/api/adserver6/vast/';
		  return "".concat(base, "?").concat(buildUrlParams(params));
		}
	  }]);
  
	  return Ads;
	}();
  
	var parseVtt = function parseVtt(vttDataString) {
	  var processedList = [];
	  var frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
	  frames.forEach(function (frame) {
		var result = {};
		var lines = frame.split(/\r\n|\n|\r/);
		lines.forEach(function (line) {
		  if (!is$1.number(result.startTime)) {
			// The line with start and end times on it is the first line of interest
			var matchTimes = line.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/); // Note that this currently ignores caption formatting directives that are optionally on the end of this line - fine for non-captions VTT
  
			if (matchTimes) {
			  result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number("0.".concat(matchTimes[4]));
			  result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number("0.".concat(matchTimes[9]));
			}
		  } else if (!is$1.empty(line.trim()) && is$1.empty(result.text)) {
			// If we already have the startTime, then we're definitely up to the text line(s)
			var lineSplit = line.trim().split('#xywh=');
  
			var _lineSplit = _slicedToArray(lineSplit, 1);
  
			result.text = _lineSplit[0];
  
			// If there's content in lineSplit[1], then we have sprites. If not, then it's just one frame per image
			if (lineSplit[1]) {
			  var _lineSplit$1$split = lineSplit[1].split(',');
  
			  var _lineSplit$1$split2 = _slicedToArray(_lineSplit$1$split, 4);
  
			  result.x = _lineSplit$1$split2[0];
			  result.y = _lineSplit$1$split2[1];
			  result.w = _lineSplit$1$split2[2];
			  result.h = _lineSplit$1$split2[3];
			}
		  }
		});
  
		if (result.text) {
		  processedList.push(result);
		}
	  });
	  return processedList;
	};
	/**
	 * Preview thumbnails for seek hover and scrubbing
	 * Seeking: Hover over the seek bar (desktop only): shows a small preview container above the seek bar
	 * Scrubbing: Click and drag the seek bar (desktop and mobile): shows the preview image over the entire video, as if the video is scrubbing at very high speed
	 *
	 * Notes:
	 * - Thumbs are set via JS settings on Plyr init, not HTML5 'track' property. Using the track property would be a bit gross, because it doesn't support custom 'kinds'. kind=metadata might be used for something else, and we want to allow multiple thumbnails tracks. Tracks must have a unique combination of 'kind' and 'label'. We would have to do something like kind=metadata,label=thumbnails1 / kind=metadata,label=thumbnails2. Square peg, round hole
	 * - VTT info: the image URL is relative to the VTT, not the current document. But if the url starts with a slash, it will naturally be relative to the current domain. https://support.jwplayer.com/articles/how-to-add-preview-thumbnails
	 * - This implementation uses multiple separate img elements. Other implementations use background-image on one element. This would be nice and simple, but Firefox and Safari have flickering issues with replacing backgrounds of larger images. It seems that YouTube perhaps only avoids this because they don't have the option for high-res previews (even the fullscreen ones, when mousedown/seeking). Images appear over the top of each other, and previous ones are discarded once the new ones have been rendered
	 */
  
  
	var PreviewThumbnails =
	/*#__PURE__*/
	function () {
	  /**
	   * PreviewThumbnails constructor.
	   * @param {Plyr} player
	   * @return {PreviewThumbnails}
	   */
	  function PreviewThumbnails(player) {
		_classCallCheck(this, PreviewThumbnails);
  
		this.player = player;
		this.thumbnails = [];
		this.loaded = false;
		this.lastMouseMoveTime = Date.now();
		this.mouseDown = false;
		this.loadedImages = [];
		this.elements = {
		  thumb: {},
		  scrubbing: {}
		};
		this.load();
	  }
  
	  _createClass(PreviewThumbnails, [{
		key: "load",
		value: function load() {
		  var _this = this;
  
		  // Togglethe regular seek tooltip
		  if (this.player.elements.display.seekTooltip) {
			this.player.elements.display.seekTooltip.hidden = this.enabled;
		  }
  
		  if (!this.enabled) {
			return;
		  }
  
		  this.getThumbnails().then(function () {
			// Render DOM elements
			_this.render(); // Check to see if thumb container size was specified manually in CSS
  
  
			_this.determineContainerAutoSizing();
  
			_this.loaded = true;
		  });
		} // Download VTT files and parse them
  
	  }, {
		key: "getThumbnails",
		value: function getThumbnails() {
		  var _this2 = this;
  
		  return new Promise(function (resolve) {
			var src = _this2.player.config.previewThumbnails.src;
  
			if (is$1.empty(src)) {
			  throw new Error('Missing previewThumbnails.src config attribute');
			} // If string, convert into single-element list
  
  
			var urls = is$1.string(src) ? [src] : src; // Loop through each src URL. Download and process the VTT file, storing the resulting data in this.thumbnails
  
			var promises = urls.map(function (u) {
			  return _this2.getThumbnail(u);
			});
			Promise.all(promises).then(function () {
			  // Sort smallest to biggest (e.g., [120p, 480p, 1080p])
			  _this2.thumbnails.sort(function (x, y) {
				return x.height - y.height;
			  });
  
			  _this2.player.debug.log('Preview thumbnails', _this2.thumbnails);
  
			  resolve();
			});
		  });
		} // Process individual VTT file
  
	  }, {
		key: "getThumbnail",
		value: function getThumbnail(url) {
		  var _this3 = this;
  
		  return new Promise(function (resolve) {
			fetch(url).then(function (response) {
			  var thumbnail = {
				frames: parseVtt(response),
				height: null,
				urlPrefix: ''
			  }; // If the URLs don't start with '/', then we need to set their relative path to be the location of the VTT file
			  // If the URLs do start with '/', then they obviously don't need a prefix, so it will remain blank
			  // If the thumbnail URLs start with with none of '/', 'http://' or 'https://', then we need to set their relative path to be the location of the VTT file
  
			  if (!thumbnail.frames[0].text.startsWith('/') && !thumbnail.frames[0].text.startsWith('http://') && !thumbnail.frames[0].text.startsWith('https://')) {
				thumbnail.urlPrefix = url.substring(0, url.lastIndexOf('/') + 1);
			  } // Download the first frame, so that we can determine/set the height of this thumbnailsDef
  
  
			  var tempImage = new Image();
  
			  tempImage.onload = function () {
				thumbnail.height = tempImage.naturalHeight;
				thumbnail.width = tempImage.naturalWidth;
  
				_this3.thumbnails.push(thumbnail);
  
				resolve();
			  };
  
			  tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
			});
		  });
		}
	  }, {
		key: "startMove",
		value: function startMove(event) {
		  if (!this.loaded) {
			return;
		  }
  
		  if (!is$1.event(event) || !['touchmove', 'mousemove'].includes(event.type)) {
			return;
		  } // Wait until media has a duration
  
  
		  if (!this.player.media.duration) {
			return;
		  }
  
		  if (event.type === 'touchmove') {
			// Calculate seek hover position as approx video seconds
			this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
		  } else {
			// Calculate seek hover position as approx video seconds
			var clientRect = this.player.elements.progress.getBoundingClientRect();
			var percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
			this.seekTime = this.player.media.duration * (percentage / 100);
  
			if (this.seekTime < 0) {
			  // The mousemove fires for 10+px out to the left
			  this.seekTime = 0;
			}
  
			if (this.seekTime > this.player.media.duration - 1) {
			  // Took 1 second off the duration for safety, because different players can disagree on the real duration of a video
			  this.seekTime = this.player.media.duration - 1;
			}
  
			this.mousePosX = event.pageX; // Set time text inside image container
  
			this.elements.thumb.time.innerText = formatTime(this.seekTime);
		  } // Download and show image
  
  
		  this.showImageAtCurrentTime();
		}
	  }, {
		key: "endMove",
		value: function endMove() {
		  this.toggleThumbContainer(false, true);
		}
	  }, {
		key: "startScrubbing",
		value: function startScrubbing(event) {
		  // Only act on left mouse button (0), or touch device (event.button is false)
		  if (event.button === false || event.button === 0) {
			this.mouseDown = true; // Wait until media has a duration
  
			if (this.player.media.duration) {
			  this.toggleScrubbingContainer(true);
			  this.toggleThumbContainer(false, true); // Download and show image
  
			  this.showImageAtCurrentTime();
			}
		  }
		}
	  }, {
		key: "endScrubbing",
		value: function endScrubbing() {
		  var _this4 = this;
  
		  this.mouseDown = false; // Hide scrubbing preview. But wait until the video has successfully seeked before hiding the scrubbing preview
  
		  if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
			// The video was already seeked/loaded at the chosen time - hide immediately
			this.toggleScrubbingContainer(false);
		  } else {
			// The video hasn't seeked yet. Wait for that
			once.call(this.player, this.player.media, 'timeupdate', function () {
			  // Re-check mousedown - we might have already started scrubbing again
			  if (!_this4.mouseDown) {
				_this4.toggleScrubbingContainer(false);
			  }
			});
		  }
		}
		/**
		 * Setup hooks for Plyr and window events
		 */
  
	  }, {
		key: "listeners",
		value: function listeners() {
		  var _this5 = this;
  
		  // Hide thumbnail preview - on mouse click, mouse leave (in listeners.js for now), and video play/seek. All four are required, e.g., for buffering
		  this.player.on('play', function () {
			_this5.toggleThumbContainer(false, true);
		  });
		  this.player.on('seeked', function () {
			_this5.toggleThumbContainer(false);
		  });
		  this.player.on('timeupdate', function () {
			_this5.lastTime = _this5.player.media.currentTime;
		  });
		}
		/**
		 * Create HTML elements for image containers
		 */
  
	  }, {
		key: "render",
		value: function render() {
		  // Create HTML element: plyr__preview-thumbnail-container
		  this.elements.thumb.container = createElement('div', {
			class: this.player.config.classNames.previewThumbnails.thumbContainer
		  }); // Wrapper for the image for styling
  
		  this.elements.thumb.imageContainer = createElement('div', {
			class: this.player.config.classNames.previewThumbnails.imageContainer
		  });
		  this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer); // Create HTML element, parent+span: time text (e.g., 01:32:00)
  
		  var timeContainer = createElement('div', {
			class: this.player.config.classNames.previewThumbnails.timeContainer
		  });
		  this.elements.thumb.time = createElement('span', {}, '00:00');
		  timeContainer.appendChild(this.elements.thumb.time);
		  this.elements.thumb.container.appendChild(timeContainer); // Inject the whole thumb
  
		  if (is$1.element(this.player.elements.progress)) {
			this.player.elements.progress.appendChild(this.elements.thumb.container);
		  } // Create HTML element: plyr__preview-scrubbing-container
  
  
		  this.elements.scrubbing.container = createElement('div', {
			class: this.player.config.classNames.previewThumbnails.scrubbingContainer
		  });
		  this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
		}
	  }, {
		key: "showImageAtCurrentTime",
		value: function showImageAtCurrentTime() {
		  var _this6 = this;
  
		  if (this.mouseDown) {
			this.setScrubbingContainerSize();
		  } else {
			this.setThumbContainerSizeAndPos();
		  } // Find the desired thumbnail index
		  // TODO: Handle a video longer than the thumbs where thumbNum is null
  
  
		  var thumbNum = this.thumbnails[0].frames.findIndex(function (frame) {
			return _this6.seekTime >= frame.startTime && _this6.seekTime <= frame.endTime;
		  });
		  var hasThumb = thumbNum >= 0;
		  var qualityIndex = 0; // Show the thumb container if we're not scrubbing
  
		  if (!this.mouseDown) {
			this.toggleThumbContainer(hasThumb);
		  } // No matching thumb found
  
  
		  if (!hasThumb) {
			return;
		  } // Check to see if we've already downloaded higher quality versions of this image
  
  
		  this.thumbnails.forEach(function (thumbnail, index) {
			if (_this6.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
			  qualityIndex = index;
			}
		  }); // Only proceed if either thumbnum or thumbfilename has changed
  
		  if (thumbNum !== this.showingThumb) {
			this.showingThumb = thumbNum;
			this.loadImage(qualityIndex);
		  }
		} // Show the image that's currently specified in this.showingThumb
  
	  }, {
		key: "loadImage",
		value: function loadImage() {
		  var _this7 = this;
  
		  var qualityIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		  var thumbNum = this.showingThumb;
		  var thumbnail = this.thumbnails[qualityIndex];
		  var urlPrefix = thumbnail.urlPrefix;
		  var frame = thumbnail.frames[thumbNum];
		  var thumbFilename = thumbnail.frames[thumbNum].text;
		  var thumbUrl = urlPrefix + thumbFilename;
  
		  if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
			// If we're already loading a previous image, remove its onload handler - we don't want it to load after this one
			// Only do this if not using sprites. Without sprites we really want to show as many images as possible, as a best-effort
			if (this.loadingImage && this.usingSprites) {
			  this.loadingImage.onload = null;
			} // We're building and adding a new image. In other implementations of similar functionality (YouTube), background image
			// is instead used. But this causes issues with larger images in Firefox and Safari - switching between background
			// images causes a flicker. Putting a new image over the top does not
  
  
			var previewImage = new Image();
			previewImage.src = thumbUrl;
			previewImage.dataset.index = thumbNum;
			previewImage.dataset.filename = thumbFilename;
			this.showingThumbFilename = thumbFilename;
			this.player.debug.log("Loading image: ".concat(thumbUrl)); // For some reason, passing the named function directly causes it to execute immediately. So I've wrapped it in an anonymous function...
  
			previewImage.onload = function () {
			  return _this7.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
			};
  
			this.loadingImage = previewImage;
			this.removeOldImages(previewImage);
		  } else {
			// Update the existing image
			this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
			this.currentImageElement.dataset.index = thumbNum;
			this.removeOldImages(this.currentImageElement);
		  }
		}
	  }, {
		key: "showImage",
		value: function showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename) {
		  var newImage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
		  this.player.debug.log("Showing thumb: ".concat(thumbFilename, ". num: ").concat(thumbNum, ". qual: ").concat(qualityIndex, ". newimg: ").concat(newImage));
		  this.setImageSizeAndOffset(previewImage, frame);
  
		  if (newImage) {
			this.currentImageContainer.appendChild(previewImage);
			this.currentImageElement = previewImage;
  
			if (!this.loadedImages.includes(thumbFilename)) {
			  this.loadedImages.push(thumbFilename);
			}
		  } // Preload images before and after the current one
		  // Show higher quality of the same frame
		  // Each step here has a short time delay, and only continues if still hovering/seeking the same spot. This is to protect slow connections from overloading
  
  
		  this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
		} // Remove all preview images that aren't the designated current image
  
	  }, {
		key: "removeOldImages",
		value: function removeOldImages(currentImage) {
		  var _this8 = this;
  
		  // Get a list of all images, convert it from a DOM list to an array
		  Array.from(this.currentImageContainer.children).forEach(function (image) {
			if (image.tagName.toLowerCase() !== 'img') {
			  return;
			}
  
			var removeDelay = _this8.usingSprites ? 500 : 1000;
  
			if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
			  // Wait 200ms, as the new image can take some time to show on certain browsers (even though it was downloaded before showing). This will prevent flicker, and show some generosity towards slower clients
			  // First set attribute 'deleting' to prevent multi-handling of this on repeat firing of this function
			  image.dataset.deleting = true; // This has to be set before the timeout - to prevent issues switching between hover and scrub
  
			  var currentImageContainer = _this8.currentImageContainer;
			  setTimeout(function () {
				currentImageContainer.removeChild(image);
  
				_this8.player.debug.log("Removing thumb: ".concat(image.dataset.filename));
			  }, removeDelay);
			}
		  });
		} // Preload images before and after the current one. Only if the user is still hovering/seeking the same frame
		// This will only preload the lowest quality
  
	  }, {
		key: "preloadNearby",
		value: function preloadNearby(thumbNum) {
		  var _this9 = this;
  
		  var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
		  return new Promise(function (resolve) {
			setTimeout(function () {
			  var oldThumbFilename = _this9.thumbnails[0].frames[thumbNum].text;
  
			  if (_this9.showingThumbFilename === oldThumbFilename) {
				// Find the nearest thumbs with different filenames. Sometimes it'll be the next index, but in the case of sprites, it might be 100+ away
				var thumbnailsClone;
  
				if (forward) {
				  thumbnailsClone = _this9.thumbnails[0].frames.slice(thumbNum);
				} else {
				  thumbnailsClone = _this9.thumbnails[0].frames.slice(0, thumbNum).reverse();
				}
  
				var foundOne = false;
				thumbnailsClone.forEach(function (frame) {
				  var newThumbFilename = frame.text;
  
				  if (newThumbFilename !== oldThumbFilename) {
					// Found one with a different filename. Make sure it hasn't already been loaded on this page visit
					if (!_this9.loadedImages.includes(newThumbFilename)) {
					  foundOne = true;
  
					  _this9.player.debug.log("Preloading thumb filename: ".concat(newThumbFilename));
  
					  var urlPrefix = _this9.thumbnails[0].urlPrefix;
					  var thumbURL = urlPrefix + newThumbFilename;
					  var previewImage = new Image();
					  previewImage.src = thumbURL;
  
					  previewImage.onload = function () {
						_this9.player.debug.log("Preloaded thumb filename: ".concat(newThumbFilename));
  
						if (!_this9.loadedImages.includes(newThumbFilename)) _this9.loadedImages.push(newThumbFilename); // We don't resolve until the thumb is loaded
  
						resolve();
					  };
					}
				  }
				}); // If there are none to preload then we want to resolve immediately
  
				if (!foundOne) {
				  resolve();
				}
			  }
			}, 300);
		  });
		} // If user has been hovering current image for half a second, look for a higher quality one
  
	  }, {
		key: "getHigherQuality",
		value: function getHigherQuality(currentQualityIndex, previewImage, frame, thumbFilename) {
		  var _this10 = this;
  
		  if (currentQualityIndex < this.thumbnails.length - 1) {
			// Only use the higher quality version if it's going to look any better - if the current thumb is of a lower pixel density than the thumbnail container
			var previewImageHeight = previewImage.naturalHeight;
  
			if (this.usingSprites) {
			  previewImageHeight = frame.h;
			}
  
			if (previewImageHeight < this.thumbContainerHeight) {
			  // Recurse back to the loadImage function - show a higher quality one, but only if the viewer is on this frame for a while
			  setTimeout(function () {
				// Make sure the mouse hasn't already moved on and started hovering at another image
				if (_this10.showingThumbFilename === thumbFilename) {
				  _this10.player.debug.log("Showing higher quality thumb for: ".concat(thumbFilename));
  
				  _this10.loadImage(currentQualityIndex + 1);
				}
			  }, 300);
			}
		  }
		}
	  }, {
		key: "toggleThumbContainer",
		value: function toggleThumbContainer() {
		  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		  var clearShowing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		  var className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
		  this.elements.thumb.container.classList.toggle(className, toggle);
  
		  if (!toggle && clearShowing) {
			this.showingThumb = null;
			this.showingThumbFilename = null;
		  }
		}
	  }, {
		key: "toggleScrubbingContainer",
		value: function toggleScrubbingContainer() {
		  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		  var className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
		  this.elements.scrubbing.container.classList.toggle(className, toggle);
  
		  if (!toggle) {
			this.showingThumb = null;
			this.showingThumbFilename = null;
		  }
		}
	  }, {
		key: "determineContainerAutoSizing",
		value: function determineContainerAutoSizing() {
		  if (this.elements.thumb.imageContainer.clientHeight > 20) {
			// This will prevent auto sizing in this.setThumbContainerSizeAndPos()
			this.sizeSpecifiedInCSS = true;
		  }
		} // Set the size to be about a quarter of the size of video. Unless option dynamicSize === false, in which case it needs to be set in CSS
  
	  }, {
		key: "setThumbContainerSizeAndPos",
		value: function setThumbContainerSizeAndPos() {
		  if (!this.sizeSpecifiedInCSS) {
			var thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
			this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px");
			this.elements.thumb.imageContainer.style.width = "".concat(thumbWidth, "px");
		  }
  
		  this.setThumbContainerPos();
		}
	  }, {
		key: "setThumbContainerPos",
		value: function setThumbContainerPos() {
		  var seekbarRect = this.player.elements.progress.getBoundingClientRect();
		  var plyrRect = this.player.elements.container.getBoundingClientRect();
		  var container = this.elements.thumb.container; // Find the lowest and highest desired left-position, so we don't slide out the side of the video container
  
		  var minVal = plyrRect.left - seekbarRect.left + 10;
		  var maxVal = plyrRect.right - seekbarRect.left - container.clientWidth - 10; // Set preview container position to: mousepos, minus seekbar.left, minus half of previewContainer.clientWidth
  
		  var previewPos = this.mousePosX - seekbarRect.left - container.clientWidth / 2;
  
		  if (previewPos < minVal) {
			previewPos = minVal;
		  }
  
		  if (previewPos > maxVal) {
			previewPos = maxVal;
		  }
  
		  container.style.left = "".concat(previewPos, "px");
		} // Can't use 100% width, in case the video is a different aspect ratio to the video container
  
	  }, {
		key: "setScrubbingContainerSize",
		value: function setScrubbingContainerSize() {
		  this.elements.scrubbing.container.style.width = "".concat(this.player.media.clientWidth, "px"); // Can't use media.clientHeight - html5 video goes big and does black bars above and below
  
		  this.elements.scrubbing.container.style.height = "".concat(this.player.media.clientWidth / this.thumbAspectRatio, "px");
		} // Sprites need to be offset to the correct location
  
	  }, {
		key: "setImageSizeAndOffset",
		value: function setImageSizeAndOffset(previewImage, frame) {
		  if (!this.usingSprites) {
			return;
		  } // Find difference between height and preview container height
  
  
		  var multiplier = this.thumbContainerHeight / frame.h;
		  previewImage.style.height = "".concat(Math.floor(previewImage.naturalHeight * multiplier), "px");
		  previewImage.style.width = "".concat(Math.floor(previewImage.naturalWidth * multiplier), "px");
		  previewImage.style.left = "-".concat(frame.x * multiplier, "px");
		  previewImage.style.top = "-".concat(frame.y * multiplier, "px");
		}
	  }, {
		key: "enabled",
		get: function get() {
		  return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
		}
	  }, {
		key: "currentImageContainer",
		get: function get() {
		  if (this.mouseDown) {
			return this.elements.scrubbing.container;
		  }
  
		  return this.elements.thumb.imageContainer;
		}
	  }, {
		key: "usingSprites",
		get: function get() {
		  return Object.keys(this.thumbnails[0].frames[0]).includes('w');
		}
	  }, {
		key: "thumbAspectRatio",
		get: function get() {
		  if (this.usingSprites) {
			return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
		  }
  
		  return this.thumbnails[0].width / this.thumbnails[0].height;
		}
	  }, {
		key: "thumbContainerHeight",
		get: function get() {
		  if (this.mouseDown) {
			// Can't use media.clientHeight - HTML5 video goes big and does black bars above and below
			return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio);
		  }
  
		  return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
		}
	  }, {
		key: "currentImageElement",
		get: function get() {
		  if (this.mouseDown) {
			return this.currentScrubbingImageElement;
		  }
  
		  return this.currentThumbnailImageElement;
		},
		set: function set(element) {
		  if (this.mouseDown) {
			this.currentScrubbingImageElement = element;
		  } else {
			this.currentThumbnailImageElement = element;
		  }
		}
	  }]);
  
	  return PreviewThumbnails;
	}();
  
	var source = {
	  // Add elements to HTML5 media (source, tracks, etc)
	  insertElements: function insertElements(type, attributes) {
		var _this = this;
  
		if (is$1.string(attributes)) {
		  insertElement(type, this.media, {
			src: attributes
		  });
		} else if (is$1.array(attributes)) {
		  attributes.forEach(function (attribute) {
			insertElement(type, _this.media, attribute);
		  });
		}
	  },
	  // Update source
	  // Sources are not checked for support so be careful
	  change: function change(input) {
		var _this2 = this;
  
		if (!getDeep(input, 'sources.length')) {
		  this.debug.warn('Invalid source format');
		  return;
		} // Cancel current network requests
  
  
		html5.cancelRequests.call(this); // Destroy instance and re-setup
  
		this.destroy.call(this, function () {
		  // Reset quality options
		  _this2.options.quality = []; // Remove elements
  
		  removeElement(_this2.media);
		  _this2.media = null; // Reset class name
  
		  if (is$1.element(_this2.elements.container)) {
			_this2.elements.container.removeAttribute('class');
		  } // Set the type and provider
  
  
		  var sources = input.sources,
			  type = input.type;
  
		  var _sources = _slicedToArray(sources, 1),
			  _sources$ = _sources[0],
			  _sources$$provider = _sources$.provider,
			  provider = _sources$$provider === void 0 ? providers.html5 : _sources$$provider,
			  src = _sources$.src;
  
		  var tagName = provider === 'html5' ? type : 'div';
		  var attributes = provider === 'html5' ? {} : {
			src: src
		  };
		  Object.assign(_this2, {
			provider: provider,
			type: type,
			// Check for support
			supported: support.check(type, provider, _this2.config.playsinline),
			// Create new element
			media: createElement(tagName, attributes)
		  }); // Inject the new element
  
		  _this2.elements.container.appendChild(_this2.media); // Autoplay the new source?
  
  
		  if (is$1.boolean(input.autoplay)) {
			_this2.config.autoplay = input.autoplay;
		  } // Set attributes for audio and video
  
  
		  if (_this2.isHTML5) {
			if (_this2.config.crossorigin) {
			  _this2.media.setAttribute('crossorigin', '');
			}
  
			if (_this2.config.autoplay) {
			  _this2.media.setAttribute('autoplay', '');
			}
  
			if (!is$1.empty(input.poster)) {
			  _this2.poster = input.poster;
			}
  
			if (_this2.config.loop.active) {
			  _this2.media.setAttribute('loop', '');
			}
  
			if (_this2.config.muted) {
			  _this2.media.setAttribute('muted', '');
			}
  
			if (_this2.config.playsinline) {
			  _this2.media.setAttribute('playsinline', '');
			}
		  } // Restore class hook
  
  
		  ui.addStyleHook.call(_this2); // Set new sources for html5
  
		  if (_this2.isHTML5) {
			source.insertElements.call(_this2, 'source', sources);
		  } // Set video title
  
  
		  _this2.config.title = input.title; // Set up from scratch
  
		  media.setup.call(_this2); // HTML5 stuff
  
		  if (_this2.isHTML5) {
			// Setup captions
			if (Object.keys(input).includes('tracks')) {
			  source.insertElements.call(_this2, 'track', input.tracks);
			}
		  } // If HTML5 or embed but not fully supported, setupInterface and call ready now
  
  
		  if (_this2.isHTML5 || _this2.isEmbed && !_this2.supported.ui) {
			// Setup interface
			ui.build.call(_this2);
		  } // Load HTML5 sources
  
  
		  if (_this2.isHTML5) {
			_this2.media.load();
		  } // Reload thumbnails
  
  
		  if (_this2.previewThumbnails) {
			_this2.previewThumbnails.load();
		  } // Update the fullscreen support
  
  
		  _this2.fullscreen.update();
		}, true);
	  }
	};
  
	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * Example: limit the output of this computation to between 0 and 255
	 * (x * 255).clamp(0, 255)
	 *
	 * @param {Number} input
	 * @param {Number} min The lower boundary of the output range
	 * @param {Number} max The upper boundary of the output range
	 * @returns A number in the range [min, max]
	 * @type Number
	 */
	function clamp() {
	  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
	  return Math.min(Math.max(input, min), max);
	}
  
	// TODO: Use a WeakMap for private globals
	// const globals = new WeakMap();
	// Plyr instance
  
	var Plyr =
	/*#__PURE__*/
	function () {
	  function Plyr(target, options) {
		var _this = this;
  
		_classCallCheck(this, Plyr);
  
		this.timers = {}; // State
  
		this.ready = false;
		this.loading = false;
		this.failed = false; // Touch device
  
		this.touch = support.touch; // Set the media element
  
		this.media = target; // String selector passed
  
		if (is$1.string(this.media)) {
		  this.media = document.querySelectorAll(this.media);
		} // jQuery, NodeList or Array passed, use first element
  
  
		if (window.jQuery && this.media instanceof jQuery || is$1.nodeList(this.media) || is$1.array(this.media)) {
		  // eslint-disable-next-line
		  this.media = this.media[0];
		} // Set config
  
  
		this.config = extend({}, defaults$1, Plyr.defaults, options || {}, function () {
		  try {
			return JSON.parse(_this.media.getAttribute('data-plyr-config'));
		  } catch (e) {
			return {};
		  }
		}()); // Elements cache
  
		this.elements = {
		  container: null,
		  captions: null,
		  buttons: {},
		  display: {},
		  progress: {},
		  inputs: {},
		  settings: {
			popup: null,
			menu: null,
			panels: {},
			buttons: {}
		  }
		}; // Captions
  
		this.captions = {
		  active: null,
		  currentTrack: -1,
		  meta: new WeakMap()
		}; // Fullscreen
  
		this.fullscreen = {
		  active: false
		}; // Options
  
		this.options = {
		  speed: [],
		  quality: []
		}; // Debugging
		// TODO: move to globals
  
		this.debug = new Console(this.config.debug); // Log config options and support
  
		this.debug.log('Config', this.config);
		this.debug.log('Support', support); // We need an element to setup
  
		if (is$1.nullOrUndefined(this.media) || !is$1.element(this.media)) {
		  this.debug.error('Setup failed: no suitable element passed');
		  return;
		} // Bail if the element is initialized
  
  
		if (this.media.plyr) {
		  this.debug.warn('Target already setup');
		  return;
		} // Bail if not enabled
  
  
		if (!this.config.enabled) {
		  this.debug.error('Setup failed: disabled by config');
		  return;
		} // Bail if disabled or no basic support
		// You may want to disable certain UAs etc
  
  
		if (!support.check().api) {
		  this.debug.error('Setup failed: no support');
		  return;
		} // Cache original element state for .destroy()
  
  
		var clone = this.media.cloneNode(true);
		clone.autoplay = false;
		this.elements.original = clone; // Set media type based on tag or data attribute
		// Supported: video, audio, vimeo, youtube
  
		var type = this.media.tagName.toLowerCase(); // Embed properties
  
		var iframe = null;
		var url = null; // Different setup based on type
  
		switch (type) {
		  case 'div':
			// Find the frame
			iframe = this.media.querySelector('iframe'); // <iframe> type
  
			if (is$1.element(iframe)) {
			  // Detect provider
			  url = parseUrl(iframe.getAttribute('src'));
			  this.provider = getProviderByUrl(url.toString()); // Rework elements
  
			  this.elements.container = this.media;
			  this.media = iframe; // Reset classname
  
			  this.elements.container.className = ''; // Get attributes from URL and set config
  
			  if (url.search.length) {
				var truthy = ['1', 'true'];
  
				if (truthy.includes(url.searchParams.get('autoplay'))) {
				  this.config.autoplay = true;
				}
  
				if (truthy.includes(url.searchParams.get('loop'))) {
				  this.config.loop.active = true;
				} // TODO: replace fullscreen.iosNative with this playsinline config option
				// YouTube requires the playsinline in the URL
  
  
				if (this.isYouTube) {
				  this.config.playsinline = truthy.includes(url.searchParams.get('playsinline'));
				  this.config.youtube.hl = url.searchParams.get('hl'); // TODO: Should this be setting language?
				} else {
				  this.config.playsinline = true;
				}
			  }
			} else {
			  // <div> with attributes
			  this.provider = this.media.getAttribute(this.config.attributes.embed.provider); // Remove attribute
  
			  this.media.removeAttribute(this.config.attributes.embed.provider);
			} // Unsupported or missing provider
  
  
			if (is$1.empty(this.provider) || !Object.keys(providers).includes(this.provider)) {
			  this.debug.error('Setup failed: Invalid provider');
			  return;
			} // Audio will come later for external providers
  
  
			this.type = types.video;
			break;
  
		  case 'video':
		  case 'audio':
			this.type = type;
			this.provider = providers.html5; // Get config from attributes
  
			if (this.media.hasAttribute('crossorigin')) {
			  this.config.crossorigin = true;
			}
  
			if (this.media.hasAttribute('autoplay')) {
			  this.config.autoplay = true;
			}
  
			if (this.media.hasAttribute('playsinline') || this.media.hasAttribute('webkit-playsinline')) {
			  this.config.playsinline = true;
			}
  
			if (this.media.hasAttribute('muted')) {
			  this.config.muted = true;
			}
  
			if (this.media.hasAttribute('loop')) {
			  this.config.loop.active = true;
			}
  
			break;
  
		  default:
			this.debug.error('Setup failed: unsupported type');
			return;
		} // Check for support again but with type
  
  
		this.supported = support.check(this.type, this.provider, this.config.playsinline); // If no support for even API, bail
  
		if (!this.supported.api) {
		  this.debug.error('Setup failed: no support');
		  return;
		}
  
		this.eventListeners = []; // Create listeners
  
		this.listeners = new Listeners(this); // Setup local storage for user settings
  
		this.storage = new Storage(this); // Store reference
  
		this.media.plyr = this; // Wrap media
  
		if (!is$1.element(this.elements.container)) {
		  this.elements.container = createElement('div', {
			tabindex: 0
		  });
		  wrap(this.media, this.elements.container);
		} // Add style hook
  
  
		ui.addStyleHook.call(this); // Setup media
  
		media.setup.call(this); // Listen for events if debugging
  
		if (this.config.debug) {
		  on.call(this, this.elements.container, this.config.events.join(' '), function (event) {
			_this.debug.log("event: ".concat(event.type));
		  });
		} // Setup interface
		// If embed but not fully supported, build interface now to avoid flash of controls
  
  
		if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
		  ui.build.call(this);
		} // Container listeners
  
  
		this.listeners.container(); // Global listeners
  
		this.listeners.global(); // Setup fullscreen
  
		this.fullscreen = new Fullscreen(this); // Setup ads if provided
  
		if (this.config.ads.enabled) {
		  this.ads = new Ads(this);
		} // Autoplay if required
  
  
		if (this.isHTML5 && this.config.autoplay) {
		  setTimeout(function () {
			return _this.play();
		  }, 10);
		} // Seek time will be recorded (in listeners.js) so we can prevent hiding controls for a few seconds after seek
  
  
		this.lastSeekTime = 0; // Setup preview thumbnails if enabled
  
		if (this.config.previewThumbnails.enabled) {
		  this.previewThumbnails = new PreviewThumbnails(this);
		}
	  } // ---------------------------------------
	  // API
	  // ---------------------------------------
  
	  /**
	   * Types and provider helpers
	   */
  
  
	  _createClass(Plyr, [{
		key: "play",
  
		/**
		 * Play the media, or play the advertisement (if they are not blocked)
		 */
		value: function play() {
		  var _this2 = this;
  
		  if (!is$1.function(this.media.play)) {
			return null;
		  } // Intecept play with ads
  
  
		  if (this.ads && this.ads.enabled) {
			this.ads.managerPromise.then(function () {
			  return _this2.ads.play();
			}).catch(function () {
			  return _this2.media.play();
			});
		  } // Return the promise (for HTML5)
  
  
		  return this.media.play();
		}
		/**
		 * Pause the media
		 */
  
	  }, {
		key: "pause",
		value: function pause() {
		  if (!this.playing || !is$1.function(this.media.pause)) {
			return;
		  }
  
		  this.media.pause();
		}
		/**
		 * Get playing state
		 */
  
	  }, {
		key: "togglePlay",
  
		/**
		 * Toggle playback based on current status
		 * @param {Boolean} input
		 */
		value: function togglePlay(input) {
		  // Toggle based on current state if nothing passed
		  var toggle = is$1.boolean(input) ? input : !this.playing;
  
		  if (toggle) {
			this.play();
		  } else {
			this.pause();
		  }
		}
		/**
		 * Stop playback
		 */
  
	  }, {
		key: "stop",
		value: function stop() {
		  if (this.isHTML5) {
			this.pause();
			this.restart();
		  } else if (is$1.function(this.media.stop)) {
			this.media.stop();
		  }
		}
		/**
		 * Restart playback
		 */
  
	  }, {
		key: "restart",
		value: function restart() {
		  this.currentTime = 0;
		}
		/**
		 * Rewind
		 * @param {Number} seekTime - how far to rewind in seconds. Defaults to the config.seekTime
		 */
  
	  }, {
		key: "rewind",
		value: function rewind(seekTime) {
		  this.currentTime = this.currentTime - (is$1.number(seekTime) ? seekTime : this.config.seekTime);
		}
		/**
		 * Fast forward
		 * @param {Number} seekTime - how far to fast forward in seconds. Defaults to the config.seekTime
		 */
  
	  }, {
		key: "forward",
		value: function forward(seekTime) {
		  this.currentTime = this.currentTime + (is$1.number(seekTime) ? seekTime : this.config.seekTime);
		}
		/**
		 * Seek to a time
		 * @param {Number} input - where to seek to in seconds. Defaults to 0 (the start)
		 */
  
	  }, {
		key: "increaseVolume",
  
		/**
		 * Increase volume
		 * @param {Boolean} step - How much to decrease by (between 0 and 1)
		 */
		value: function increaseVolume(step) {
		  var volume = this.media.muted ? 0 : this.volume;
		  this.volume = volume + (is$1.number(step) ? step : 0);
		}
		/**
		 * Decrease volume
		 * @param {Boolean} step - How much to decrease by (between 0 and 1)
		 */
  
	  }, {
		key: "decreaseVolume",
		value: function decreaseVolume(step) {
		  this.increaseVolume(-step);
		}
		/**
		 * Set muted state
		 * @param {Boolean} mute
		 */
  
	  }, {
		key: "toggleCaptions",
  
		/**
		 * Toggle captions
		 * @param {Boolean} input - Whether to enable captions
		 */
		value: function toggleCaptions(input) {
		  captions.toggle.call(this, input, false);
		}
		/**
		 * Set the caption track by index
		 * @param {Number} - Caption index
		 */
  
	  }, {
		key: "airplay",
  
		/**
		 * Trigger the airplay dialog
		 * TODO: update player with state, support, enabled
		 */
		value: function airplay() {
		  // Show dialog if supported
		  if (support.airplay) {
			this.media.webkitShowPlaybackTargetPicker();
		  }
		}
		/**
		 * Toggle the player controls
		 * @param {Boolean} [toggle] - Whether to show the controls
		 */
  
	  }, {
		key: "toggleControls",
		value: function toggleControls(toggle) {
		  // Don't toggle if missing UI support or if it's audio
		  if (this.supported.ui && !this.isAudio) {
			// Get state before change
			var isHidden = hasClass(this.elements.container, this.config.classNames.hideControls); // Negate the argument if not undefined since adding the class to hides the controls
  
			var force = typeof toggle === 'undefined' ? undefined : !toggle; // Apply and get updated state
  
			var hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force); // Close menu
  
			if (hiding && this.config.controls.includes('settings') && !is$1.empty(this.config.settings)) {
			  controls.toggleMenu.call(this, false);
			} // Trigger event on change
  
  
			if (hiding !== isHidden) {
			  var eventName = hiding ? 'controlshidden' : 'controlsshown';
			  triggerEvent.call(this, this.media, eventName);
			}
  
			return !hiding;
		  }
  
		  return false;
		}
		/**
		 * Add event listeners
		 * @param {String} event - Event type
		 * @param {Function} callback - Callback for when event occurs
		 */
  
	  }, {
		key: "on",
		value: function on$1(event, callback) {
		  on.call(this, this.elements.container, event, callback);
		}
		/**
		 * Add event listeners once
		 * @param {String} event - Event type
		 * @param {Function} callback - Callback for when event occurs
		 */
  
	  }, {
		key: "once",
		value: function once$1(event, callback) {
		  once.call(this, this.elements.container, event, callback);
		}
		/**
		 * Remove event listeners
		 * @param {String} event - Event type
		 * @param {Function} callback - Callback for when event occurs
		 */
  
	  }, {
		key: "off",
		value: function off$1(event, callback) {
		  off(this.elements.container, event, callback);
		}
		/**
		 * Destroy an instance
		 * Event listeners are removed when elements are removed
		 * http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
		 * @param {Function} callback - Callback for when destroy is complete
		 * @param {Boolean} soft - Whether it's a soft destroy (for source changes etc)
		 */
  
	  }, {
		key: "destroy",
		value: function destroy(callback) {
		  var _this3 = this;
  
		  var soft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  
		  if (!this.ready) {
			return;
		  }
  
		  var done = function done() {
			// Reset overflow (incase destroyed while in fullscreen)
			document.body.style.overflow = ''; // GC for embed
  
			_this3.embed = null; // If it's a soft destroy, make minimal changes
  
			if (soft) {
			  if (Object.keys(_this3.elements).length) {
				// Remove elements
				removeElement(_this3.elements.buttons.play);
				removeElement(_this3.elements.captions);
				removeElement(_this3.elements.controls);
				removeElement(_this3.elements.wrapper); // Clear for GC
  
				_this3.elements.buttons.play = null;
				_this3.elements.captions = null;
				_this3.elements.controls = null;
				_this3.elements.wrapper = null;
			  } // Callback
  
  
			  if (is$1.function(callback)) {
				callback();
			  }
			} else {
			  // Unbind listeners
			  unbindListeners.call(_this3); // Replace the container with the original element provided
  
			  replaceElement(_this3.elements.original, _this3.elements.container); // Event
  
			  triggerEvent.call(_this3, _this3.elements.original, 'destroyed', true); // Callback
  
			  if (is$1.function(callback)) {
				callback.call(_this3.elements.original);
			  } // Reset state
  
  
			  _this3.ready = false; // Clear for garbage collection
  
			  setTimeout(function () {
				_this3.elements = null;
				_this3.media = null;
			  }, 200);
			}
		  }; // Stop playback
  
  
		  this.stop(); // Clear timeouts
  
		  clearTimeout(this.timers.loading);
		  clearTimeout(this.timers.controls);
		  clearTimeout(this.timers.resized); // Provider specific stuff
  
		  if (this.isHTML5) {
			// Restore native video controls
			ui.toggleNativeControls.call(this, true); // Clean up
  
			done();
		  } else if (this.isYouTube) {
			// Clear timers
			clearInterval(this.timers.buffering);
			clearInterval(this.timers.playing); // Destroy YouTube API
  
			if (this.embed !== null && is$1.function(this.embed.destroy)) {
			  this.embed.destroy();
			} // Clean up
  
  
			done();
		  } else if (this.isVimeo) {
			// Destroy Vimeo API
			// then clean up (wait, to prevent postmessage errors)
			if (this.embed !== null) {
			  this.embed.unload().then(done);
			} // Vimeo does not always return
  
  
			setTimeout(done, 200);
		  }
		}
		/**
		 * Check for support for a mime type (HTML5 only)
		 * @param {String} type - Mime type
		 */
  
	  }, {
		key: "supports",
		value: function supports(type) {
		  return support.mime.call(this, type);
		}
		/**
		 * Check for support
		 * @param {String} type - Player type (audio/video)
		 * @param {String} provider - Provider (html5/youtube/vimeo)
		 * @param {Boolean} inline - Where player has `playsinline` sttribute
		 */
  
	  }, {
		key: "isHTML5",
		get: function get() {
		  return Boolean(this.provider === providers.html5);
		}
	  }, {
		key: "isEmbed",
		get: function get() {
		  return Boolean(this.isYouTube || this.isVimeo);
		}
	  }, {
		key: "isYouTube",
		get: function get() {
		  return Boolean(this.provider === providers.youtube);
		}
	  }, {
		key: "isVimeo",
		get: function get() {
		  return Boolean(this.provider === providers.vimeo);
		}
	  }, {
		key: "isVideo",
		get: function get() {
		  return Boolean(this.type === types.video);
		}
	  }, {
		key: "isAudio",
		get: function get() {
		  return Boolean(this.type === types.audio);
		}
	  }, {
		key: "playing",
		get: function get() {
		  return Boolean(this.ready && !this.paused && !this.ended);
		}
		/**
		 * Get paused state
		 */
  
	  }, {
		key: "paused",
		get: function get() {
		  return Boolean(this.media.paused);
		}
		/**
		 * Get stopped state
		 */
  
	  }, {
		key: "stopped",
		get: function get() {
		  return Boolean(this.paused && this.currentTime === 0);
		}
		/**
		 * Get ended state
		 */
  
	  }, {
		key: "ended",
		get: function get() {
		  return Boolean(this.media.ended);
		}
	  }, {
		key: "currentTime",
		set: function set(input) {
		  // Bail if media duration isn't available yet
		  if (!this.duration) {
			return;
		  } // Validate input
  
  
		  var inputIsValid = is$1.number(input) && input > 0; // Set
  
		  this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0; // Logging
  
		  this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
		}
		/**
		 * Get current time
		 */
		,
		get: function get() {
		  return Number(this.media.currentTime);
		}
		/**
		 * Get buffered
		 */
  
	  }, {
		key: "buffered",
		get: function get() {
		  var buffered = this.media.buffered; // YouTube / Vimeo return a float between 0-1
  
		  if (is$1.number(buffered)) {
			return buffered;
		  } // HTML5
		  // TODO: Handle buffered chunks of the media
		  // (i.e. seek to another section buffers only that section)
  
  
		  if (buffered && buffered.length && this.duration > 0) {
			return buffered.end(0) / this.duration;
		  }
  
		  return 0;
		}
		/**
		 * Get seeking status
		 */
  
	  }, {
		key: "seeking",
		get: function get() {
		  return Boolean(this.media.seeking);
		}
		/**
		 * Get the duration of the current media
		 */
  
	  }, {
		key: "duration",
		get: function get() {
		  // Faux duration set via config
		  var fauxDuration = parseFloat(this.config.duration); // Media duration can be NaN or Infinity before the media has loaded
  
		  var realDuration = (this.media || {}).duration;
		  var duration = !is$1.number(realDuration) || realDuration === Infinity ? 0 : realDuration; // If config duration is funky, use regular duration
  
		  return fauxDuration || duration;
		}
		/**
		 * Set the player volume
		 * @param {Number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
		 */
  
	  }, {
		key: "volume",
		set: function set(value) {
		  var volume = value;
		  var max = 1;
		  var min = 0;
  
		  if (is$1.string(volume)) {
			volume = Number(volume);
		  } // Load volume from storage if no value specified
  
  
		  if (!is$1.number(volume)) {
			volume = this.storage.get('volume');
		  } // Use config if all else fails
  
  
		  if (!is$1.number(volume)) {
			volume = this.config.volume;
		  } // Maximum is volumeMax
  
  
		  if (volume > max) {
			volume = max;
		  } // Minimum is volumeMin
  
  
		  if (volume < min) {
			volume = min;
		  } // Update config
  
  
		  this.config.volume = volume; // Set the player volume
  
		  this.media.volume = volume; // If muted, and we're increasing volume manually, reset muted state
  
		  if (!is$1.empty(value) && this.muted && volume > 0) {
			this.muted = false;
		  }
		}
		/**
		 * Get the current player volume
		 */
		,
		get: function get() {
		  return Number(this.media.volume);
		}
	  }, {
		key: "muted",
		set: function set(mute) {
		  var toggle = mute; // Load muted state from storage
  
		  if (!is$1.boolean(toggle)) {
			toggle = this.storage.get('muted');
		  } // Use config if all else fails
  
  
		  if (!is$1.boolean(toggle)) {
			toggle = this.config.muted;
		  } // Update config
  
  
		  this.config.muted = toggle; // Set mute on the player
  
		  this.media.muted = toggle;
		}
		/**
		 * Get current muted state
		 */
		,
		get: function get() {
		  return Boolean(this.media.muted);
		}
		/**
		 * Check if the media has audio
		 */
  
	  }, {
		key: "hasAudio",
		get: function get() {
		  // Assume yes for all non HTML5 (as we can't tell...)
		  if (!this.isHTML5) {
			return true;
		  }
  
		  if (this.isAudio) {
			return true;
		  } // Get audio tracks
  
  
		  return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
		}
		/**
		 * Set playback speed
		 * @param {Number} speed - the speed of playback (0.5-2.0)
		 */
  
	  }, {
		key: "speed",
		set: function set(input) {
		  var _this4 = this;
  
		  var speed = null;
  
		  if (is$1.number(input)) {
			speed = input;
		  }
  
		  if (!is$1.number(speed)) {
			speed = this.storage.get('speed');
		  }
  
		  if (!is$1.number(speed)) {
			speed = this.config.speed.selected;
		  } // Clamp to min/max
  
  
		  var min = this.minimumSpeed,
			  max = this.maximumSpeed;
		  speed = clamp(speed, min, max); // Update config
  
		  this.config.speed.selected = speed; // Set media speed
  
		  setTimeout(function () {
			_this4.media.playbackRate = speed;
		  }, 0);
		}
		/**
		 * Get current playback speed
		 */
		,
		get: function get() {
		  return Number(this.media.playbackRate);
		}
		/**
		 * Get the minimum allowed speed
		 */
  
	  }, {
		key: "minimumSpeed",
		get: function get() {
		  if (this.isYouTube) {
			// https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
			return Math.min.apply(Math, _toConsumableArray(this.options.speed));
		  }
  
		  if (this.isVimeo) {
			// https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
			return 0.5;
		  } // https://stackoverflow.com/a/32320020/1191319
  
  
		  return 0.0625;
		}
		/**
		 * Get the maximum allowed speed
		 */
  
	  }, {
		key: "maximumSpeed",
		get: function get() {
		  if (this.isYouTube) {
			// https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
			return Math.max.apply(Math, _toConsumableArray(this.options.speed));
		  }
  
		  if (this.isVimeo) {
			// https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
			return 2;
		  } // https://stackoverflow.com/a/32320020/1191319
  
  
		  return 16;
		}
		/**
		 * Set playback quality
		 * Currently HTML5 & YouTube only
		 * @param {Number} input - Quality level
		 */
  
	  }, {
		key: "quality",
		set: function set(input) {
		  var config = this.config.quality;
		  var options = this.options.quality;
  
		  if (!options.length) {
			return;
		  }
  
		  var quality = [!is$1.empty(input) && Number(input), this.storage.get('quality'), config.selected, config.default].find(is$1.number);
		  var updateStorage = true;
  
		  if (!options.includes(quality)) {
			var value = closest(options, quality);
			this.debug.warn("Unsupported quality option: ".concat(quality, ", using ").concat(value, " instead"));
			quality = value; // Don't update storage if quality is not supported
  
			updateStorage = false;
		  } // Update config
  
  
		  config.selected = quality; // Set quality
  
		  this.media.quality = quality; // Save to storage
  
		  if (updateStorage) {
			this.storage.set({
			  quality: quality
			});
		  }
		}
		/**
		 * Get current quality level
		 */
		,
		get: function get() {
		  return this.media.quality;
		}
		/**
		 * Toggle loop
		 * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
		 * @param {Boolean} input - Whether to loop or not
		 */
  
	  }, {
		key: "loop",
		set: function set(input) {
		  var toggle = is$1.boolean(input) ? input : this.config.loop.active;
		  this.config.loop.active = toggle;
		  this.media.loop = toggle; // Set default to be a true toggle
  
		  /* const type = ['start', 'end', 'all', 'none', 'toggle'].includes(input) ? input : 'toggle';
		   switch (type) {
			  case 'start':
				  if (this.config.loop.end && this.config.loop.end <= this.currentTime) {
					  this.config.loop.end = null;
				  }
				  this.config.loop.start = this.currentTime;
				  // this.config.loop.indicator.start = this.elements.display.played.value;
				  break;
			   case 'end':
				  if (this.config.loop.start >= this.currentTime) {
					  return this;
				  }
				  this.config.loop.end = this.currentTime;
				  // this.config.loop.indicator.end = this.elements.display.played.value;
				  break;
			   case 'all':
				  this.config.loop.start = 0;
				  this.config.loop.end = this.duration - 2;
				  this.config.loop.indicator.start = 0;
				  this.config.loop.indicator.end = 100;
				  break;
			   case 'toggle':
				  if (this.config.loop.active) {
					  this.config.loop.start = 0;
					  this.config.loop.end = null;
				  } else {
					  this.config.loop.start = 0;
					  this.config.loop.end = this.duration - 2;
				  }
				  break;
			   default:
				  this.config.loop.start = 0;
				  this.config.loop.end = null;
				  break;
		  } */
		}
		/**
		 * Get current loop state
		 */
		,
		get: function get() {
		  return Boolean(this.media.loop);
		}
		/**
		 * Set new media source
		 * @param {Object} input - The new source object (see docs)
		 */
  
	  }, {
		key: "source",
		set: function set(input) {
		  source.change.call(this, input);
		}
		/**
		 * Get current source
		 */
		,
		get: function get() {
		  return this.media.currentSrc;
		}
		/**
		 * Get a download URL (either source or custom)
		 */
  
	  }, {
		key: "download",
		get: function get() {
		  var download = this.config.urls.download;
		  return is$1.url(download) ? download : this.source;
		}
		/**
		 * Set the download URL
		 */
		,
		set: function set(input) {
		  if (!is$1.url(input)) {
			return;
		  }
  
		  this.config.urls.download = input;
		  controls.setDownloadUrl.call(this);
		}
		/**
		 * Set the poster image for a video
		 * @param {String} input - the URL for the new poster image
		 */
  
	  }, {
		key: "poster",
		set: function set(input) {
		  if (!this.isVideo) {
			this.debug.warn('Poster can only be set for video');
			return;
		  }
  
		  ui.setPoster.call(this, input, false).catch(function () {});
		}
		/**
		 * Get the current poster image
		 */
		,
		get: function get() {
		  if (!this.isVideo) {
			return null;
		  }
  
		  return this.media.getAttribute('poster');
		}
		/**
		 * Get the current aspect ratio in use
		 */
  
	  }, {
		key: "ratio",
		get: function get() {
		  if (!this.isVideo) {
			return null;
		  }
  
		  var ratio = reduceAspectRatio(getAspectRatio.call(this));
		  return is$1.array(ratio) ? ratio.join(':') : ratio;
		}
		/**
		 * Set video aspect ratio
		 */
		,
		set: function set(input) {
		  if (!this.isVideo) {
			this.debug.warn('Aspect ratio can only be set for video');
			return;
		  }
  
		  if (!is$1.string(input) || !validateRatio(input)) {
			this.debug.error("Invalid aspect ratio specified (".concat(input, ")"));
			return;
		  }
  
		  this.config.ratio = input;
		  setAspectRatio.call(this);
		}
		/**
		 * Set the autoplay state
		 * @param {Boolean} input - Whether to autoplay or not
		 */
  
	  }, {
		key: "autoplay",
		set: function set(input) {
		  var toggle = is$1.boolean(input) ? input : this.config.autoplay;
		  this.config.autoplay = toggle;
		}
		/**
		 * Get the current autoplay state
		 */
		,
		get: function get() {
		  return Boolean(this.config.autoplay);
		}
	  }, {
		key: "currentTrack",
		set: function set(input) {
		  captions.set.call(this, input, false);
		}
		/**
		 * Get the current caption track index (-1 if disabled)
		 */
		,
		get: function get() {
		  var _this$captions = this.captions,
			  toggled = _this$captions.toggled,
			  currentTrack = _this$captions.currentTrack;
		  return toggled ? currentTrack : -1;
		}
		/**
		 * Set the wanted language for captions
		 * Since tracks can be added later it won't update the actual caption track until there is a matching track
		 * @param {String} - Two character ISO language code (e.g. EN, FR, PT, etc)
		 */
  
	  }, {
		key: "language",
		set: function set(input) {
		  captions.setLanguage.call(this, input, false);
		}
		/**
		 * Get the current track's language
		 */
		,
		get: function get() {
		  return (captions.getCurrentTrack.call(this) || {}).language;
		}
		/**
		 * Toggle picture-in-picture playback on WebKit/MacOS
		 * TODO: update player with state, support, enabled
		 * TODO: detect outside changes
		 */
  
	  }, {
		key: "pip",
		set: function set(input) {
		  // Bail if no support
		  if (!support.pip) {
			return;
		  } // Toggle based on current state if not passed
  
  
		  var toggle = is$1.boolean(input) ? input : !this.pip; // Toggle based on current state
		  // Safari
  
		  if (is$1.function(this.media.webkitSetPresentationMode)) {
			this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
		  } // Chrome
  
  
		  if (is$1.function(this.media.requestPictureInPicture)) {
			if (!this.pip && toggle) {
			  this.media.requestPictureInPicture();
			} else if (this.pip && !toggle) {
			  document.exitPictureInPicture();
			}
		  }
		}
		/**
		 * Get the current picture-in-picture state
		 */
		,
		get: function get() {
		  if (!support.pip) {
			return null;
		  } // Safari
  
  
		  if (!is$1.empty(this.media.webkitPresentationMode)) {
			return this.media.webkitPresentationMode === pip.active;
		  } // Chrome
  
  
		  return this.media === document.pictureInPictureElement;
		}
	  }], [{
		key: "supported",
		value: function supported(type, provider, inline) {
		  return support.check(type, provider, inline);
		}
		/**
		 * Load an SVG sprite into the page
		 * @param {String} url - URL for the SVG sprite
		 * @param {String} [id] - Unique ID
		 */
  
	  }, {
		key: "loadSprite",
		value: function loadSprite$1(url, id) {
		  return loadSprite(url, id);
		}
		/**
		 * Setup multiple instances
		 * @param {*} selector
		 * @param {Object} options
		 */
  
	  }, {
		key: "setup",
		value: function setup(selector) {
		  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		  var targets = null;
  
		  if (is$1.string(selector)) {
			targets = Array.from(document.querySelectorAll(selector));
		  } else if (is$1.nodeList(selector)) {
			targets = Array.from(selector);
		  } else if (is$1.array(selector)) {
			targets = selector.filter(is$1.element);
		  }
  
		  if (is$1.empty(targets)) {
			return null;
		  }
  
		  return targets.map(function (t) {
			return new Plyr(t, options);
		  });
		}
	  }]);
  
	  return Plyr;
	}();
  
	Plyr.defaults = cloneDeep(defaults$1);
  
	return Plyr;
  
  }));
  
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Preload=t()}(this,function(){"use strict";function e(e,t){const o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="blob",o.onprogress=(e=>{if(!e.lengthComputable)return!1;let t=this.getItemByUrl(e.target.responseURL);t.completion=parseInt(e.loaded/e.total*100),t.downloaded=e.loaded,t.total=e.total,this.updateProgressBar(t)}),o.onload=(e=>{let o=e.target.response.type,s=new Blob([e.target.response],{type:o}),n=URL.createObjectURL(s),r=e.target.responseURL,i=this.getItemByUrl(r);i.blobUrl=n,i.fileName=r.substring(r.lastIndexOf("/")+1),i.type=o,i.size=s.size,t(i)}),o.send()}function t(e){var t=0,o=100*this.status.length;for(var s of this.status)s.completion&&(t+=s.completion);var n=parseInt(t/o*100);isNaN(n)||this.onprogress({progress:n,item:e})}function o(e){for(var t of this.status)if(t.url==e)return t}function s(e){return new Promise((t,o)=>{this.loaded=e.length;for(let o of e)this.status.push({url:o}),this.preloadOne(o,e=>{this.onfetched(e),this.loaded--,0==this.loaded&&(this.oncomplete(this.status),t(this.status))})})}return function(){return{status:[],loaded:!1,onprogress:()=>{},oncomplete:()=>{},onfetched:()=>{},fetch:s,updateProgressBar:t,preloadOne:e,getItemByUrl:o}}});
// Cart.js
// version: 0.4.1
// author: Gavin Ballard
// license: MIT
(function(){function a(a,c,d,e){return new b(a,c,d,e)}function b(a,b,d,e){this.options=e||{},this.options.adapters=this.options.adapters||{},this.obj=a,this.keypath=b,this.callback=d,this.objectPath=[],this.parse(),c(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function c(a){return"object"==typeof a&&null!==a}function d(a){throw new Error("[sightglass] "+a)}a.adapters={},b.tokenize=function(a,b,c){var d,e,f=[],g={i:c,path:""};for(d=0;d<a.length;d++)e=a.charAt(d),~b.indexOf(e)?(f.push(g),g={i:e,path:""}):g.path+=e;return f.push(g),f},b.prototype.parse=function(){var c,e,f=this.interfaces();f.length||d("Must define at least one adapter interface."),~f.indexOf(this.keypath[0])?(c=this.keypath[0],e=this.keypath.substr(1)):("undefined"==typeof(c=this.options.root||a.root)&&d("Must define a default root adapter."),e=this.keypath),this.tokens=b.tokenize(e,f,c),this.key=this.tokens.pop()},b.prototype.realize=function(){var a,b=this.obj,d=!1;return this.tokens.forEach(function(e,f){c(b)?("undefined"!=typeof this.objectPath[f]?b!==(a=this.objectPath[f])&&(this.set(!1,e,a,this.update.bind(this)),this.set(!0,e,b,this.update.bind(this)),this.objectPath[f]=b):(this.set(!0,e,b,this.update.bind(this)),this.objectPath[f]=b),b=this.get(e,b)):(d===!1&&(d=f),(a=this.objectPath[f])&&this.set(!1,e,a,this.update.bind(this)))},this),d!==!1&&this.objectPath.splice(d),b},b.prototype.update=function(){var a,b;(a=this.realize())!==this.target&&(c(this.target)&&this.set(!1,this.key,this.target,this.callback),c(a)&&this.set(!0,this.key,a,this.callback),b=this.value(),this.target=a,this.value()!==b&&this.callback())},b.prototype.value=function(){return c(this.target)?this.get(this.key,this.target):void 0},b.prototype.setValue=function(a){c(this.target)&&this.adapter(this.key).set(this.target,this.key.path,a)},b.prototype.get=function(a,b){return this.adapter(a).get(b,a.path)},b.prototype.set=function(a,b,c,d){var e=a?"observe":"unobserve";this.adapter(b)[e](c,b.path,d)},b.prototype.interfaces=function(){var b=Object.keys(this.options.adapters);return Object.keys(a.adapters).forEach(function(a){~b.indexOf(a)||b.push(a)}),b},b.prototype.adapter=function(b){return this.options.adapters[b.i]||a.adapters[b.i]},b.prototype.unobserve=function(){var a;this.tokens.forEach(function(b,c){(a=this.objectPath[c])&&this.set(!1,b,a,this.update.bind(this))},this),c(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=a:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=a}):this.sightglass=a}).call(this),function(){var a,b,c,d,e=function(a,b){return function(){return a.apply(b,arguments)}},f=[].slice,g={}.hasOwnProperty,h=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},i=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};a={options:["prefix","templateDelimiters","rootInterface","preloadData","handler"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,handler:function(a,b,c){return this.call(a,b,c.view.models)},configure:function(b){var c,d,e,f;null==b&&(b={});for(e in b)if(f=b[e],"binders"===e||"components"===e||"formatters"===e||"adapters"===e)for(d in f)c=f[d],a[e][d]=c;else a["public"][e]=f},bind:function(b,c,d){var e;return null==c&&(c={}),null==d&&(d={}),e=new a.View(b,c,d),e.bind(),e},init:function(b,c,d){var e,f;return null==d&&(d={}),null==c&&(c=document.createElement("div")),b=a["public"].components[b],c.innerHTML=b.template.call(this,c),e=b.initialize.call(this,c,d),f=new a.View(c,e),f.bind(),f}}},window.jQuery||window.$?(d="on"in jQuery.prototype?["on","off"]:["bind","unbind"],b=d[0],c=d[1],a.Util={bindEvent:function(a,c,d){return jQuery(a)[b](c,d)},unbindEvent:function(a,b,d){return jQuery(a)[c](b,d)},getInputValue:function(a){var b;return b=jQuery(a),"checkbox"===b.attr("type")?b.is(":checked"):b.val()}}):a.Util={bindEvent:function(){return"addEventListener"in window?function(a,b,c){return a.addEventListener(b,c,!1)}:function(a,b,c){return a.attachEvent("on"+b,c)}}(),unbindEvent:function(){return"removeEventListener"in window?function(a,b,c){return a.removeEventListener(b,c,!1)}:function(a,b,c){return a.detachEvent("on"+b,c)}}(),getInputValue:function(a){var b,c,d,e;if("checkbox"===a.type)return a.checked;if("select-multiple"===a.type){for(e=[],c=0,d=a.length;d>c;c++)b=a[c],b.selected&&e.push(b.value);return e}return a.value}},a.TypeParser=function(){function a(){}return a.types={primitive:0,keypath:1},a.parse=function(a){return/^'.*'$|^".*"$/.test(a)?{type:this.types.primitive,value:a.slice(1,-1)}:"true"===a?{type:this.types.primitive,value:!0}:"false"===a?{type:this.types.primitive,value:!1}:"null"===a?{type:this.types.primitive,value:null}:"undefined"===a?{type:this.types.primitive,value:void 0}:isNaN(Number(a))===!1?{type:this.types.primitive,value:Number(a)}:{type:this.types.keypath,value:a}},a}(),a.TextTemplateParser=function(){function a(){}return a.types={text:0,binding:1},a.parse=function(a,b){var c,d,e,f,g,h,i;for(h=[],f=a.length,c=0,d=0;f>d;){if(c=a.indexOf(b[0],d),0>c){h.push({type:this.types.text,value:a.slice(d)});break}if(c>0&&c>d&&h.push({type:this.types.text,value:a.slice(d,c)}),d=c+b[0].length,c=a.indexOf(b[1],d),0>c){g=a.slice(d-b[1].length),e=h[h.length-1],(null!=e?e.type:void 0)===this.types.text?e.value+=g:h.push({type:this.types.text,value:g});break}i=a.slice(d,c).trim(),h.push({type:this.types.binding,value:i}),d=c+b[1].length}return h},a}(),a.View=function(){function b(b,c,d){var f,g,h,i,j,k,l,m,n,o,p,q,r;for(this.els=b,this.models=c,null==d&&(d={}),this.update=e(this.update,this),this.publish=e(this.publish,this),this.sync=e(this.sync,this),this.unbind=e(this.unbind,this),this.bind=e(this.bind,this),this.select=e(this.select,this),this.traverse=e(this.traverse,this),this.build=e(this.build,this),this.buildBinding=e(this.buildBinding,this),this.bindingRegExp=e(this.bindingRegExp,this),this.options=e(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),n=a.extensions,j=0,l=n.length;l>j;j++){if(g=n[j],this[g]={},d[g]){o=d[g];for(f in o)h=o[f],this[g][f]=h}p=a["public"][g];for(f in p)h=p[f],null==(i=this[g])[f]&&(i[f]=h)}for(q=a.options,k=0,m=q.length;m>k;k++)g=q[k],this[g]=null!=(r=d[g])?r:a["public"][g];this.build()}return b.prototype.options=function(){var b,c,d,e,f;for(c={},f=a.extensions.concat(a.options),d=0,e=f.length;e>d;d++)b=f[d],c[b]=this[b];return c},b.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},b.prototype.buildBinding=function(b,c,d,e){var f,g,h,i,j,k,l;return j={},l=function(){var a,b,c,d;for(c=e.split("|"),d=[],a=0,b=c.length;b>a;a++)k=c[a],d.push(k.trim());return d}(),f=function(){var a,b,c,d;for(c=l.shift().split("<"),d=[],a=0,b=c.length;b>a;a++)g=c[a],d.push(g.trim());return d}(),i=f.shift(),j.formatters=l,(h=f.shift())&&(j.dependencies=h.split(/\s+/)),this.bindings.push(new a[b](this,c,d,i,j))},b.prototype.build=function(){var b,c,d,e,f;for(this.bindings=[],c=function(b){return function(d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;if(3===d.nodeType){if(i=a.TextTemplateParser,(g=b.templateDelimiters)&&(l=i.parse(d.data,g)).length&&(1!==l.length||l[0].type!==i.types.text)){for(m=0,o=l.length;o>m;m++)k=l[m],j=document.createTextNode(k.value),d.parentNode.insertBefore(j,d),1===k.type&&b.buildBinding("TextBinding",j,null,k.value);d.parentNode.removeChild(d)}}else 1===d.nodeType&&(e=b.traverse(d));if(!e){for(q=function(){var a,b,c,e;for(c=d.childNodes,e=[],a=0,b=c.length;b>a;a++)h=c[a],e.push(h);return e}(),r=[],n=0,p=q.length;p>n;n++)f=q[n],r.push(c(f));return r}}}(this),f=this.els,d=0,e=f.length;e>d;d++)b=f[d],c(b);this.bindings.sort(function(a,b){var c,d;return((null!=(c=b.binder)?c.priority:void 0)||0)-((null!=(d=a.binder)?d.priority:void 0)||0)})},b.prototype.traverse=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(f=this.bindingRegExp(),g="SCRIPT"===b.nodeName||"STYLE"===b.nodeName,p=b.attributes,l=0,n=p.length;n>l;l++)if(c=p[l],f.test(c.name)){if(j=c.name.replace(f,""),!(e=this.binders[j])){q=this.binders;for(h in q)k=q[h],"*"!==h&&-1!==h.indexOf("*")&&(i=new RegExp("^"+h.replace(/\*/g,".+")+"$"),i.test(j)&&(e=k))}e||(e=this.binders["*"]),e.block&&(g=!0,d=[c])}for(r=d||b.attributes,m=0,o=r.length;o>m;m++)c=r[m],f.test(c.name)&&(j=c.name.replace(f,""),this.buildBinding("Binding",b,j,c.value));return g||(j=b.nodeName.toLowerCase(),this.components[j]&&!b._bound&&(this.bindings.push(new a.ComponentBinding(this,b,j)),g=!0)),g},b.prototype.select=function(a){var b,c,d,e,f;for(e=this.bindings,f=[],c=0,d=e.length;d>c;c++)b=e[c],a(b)&&f.push(b);return f},b.prototype.bind=function(){var a,b,c,d,e;for(d=this.bindings,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.bind());return e},b.prototype.unbind=function(){var a,b,c,d,e;for(d=this.bindings,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.unbind());return e},b.prototype.sync=function(){var a,b,c,d,e;for(d=this.bindings,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push("function"==typeof a.sync?a.sync():void 0);return e},b.prototype.publish=function(){var a,b,c,d,e;for(d=this.select(function(a){var b;return null!=(b=a.binder)?b.publishes:void 0}),e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.publish());return e},b.prototype.update=function(a){var b,c,d,e,f,g,h;null==a&&(a={});for(c in a)d=a[c],this.models[c]=d;for(g=this.bindings,h=[],e=0,f=g.length;f>e;e++)b=g[e],h.push("function"==typeof b.update?b.update(a):void 0);return h},b}(),a.Binding=function(){function b(a,b,c,d,f){this.view=a,this.el=b,this.type=c,this.keypath=d,this.options=null!=f?f:{},this.getValue=e(this.getValue,this),this.update=e(this.update,this),this.unbind=e(this.unbind,this),this.bind=e(this.bind,this),this.publish=e(this.publish,this),this.sync=e(this.sync,this),this.set=e(this.set,this),this.eventHandler=e(this.eventHandler,this),this.formattedValue=e(this.formattedValue,this),this.parseTarget=e(this.parseTarget,this),this.observe=e(this.observe,this),this.setBinder=e(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return b.prototype.setBinder=function(){var a,b,c,d;if(!(this.binder=this.view.binders[this.type])){d=this.view.binders;for(a in d)c=d[a],"*"!==a&&-1!==a.indexOf("*")&&(b=new RegExp("^"+a.replace(/\*/g,".+")+"$"),b.test(this.type)&&(this.binder=c,this.args=new RegExp("^"+a.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},b.prototype.observe=function(b,c,d){return a.sightglass(b,c,d,{root:this.view.rootInterface,adapters:this.view.adapters})},b.prototype.parseTarget=function(){var b;return b=a.TypeParser.parse(this.keypath),0===b.type?this.value=b.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},b.prototype.formattedValue=function(b){var c,d,e,g,h,i,j,k,l,m,n,o,p,q;for(q=this.formatters,g=m=0,o=q.length;o>m;g=++m){for(h=q[g],e=h.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),i=e.shift(),h=this.view.formatters[i],e=function(){var b,c,f;for(f=[],b=0,c=e.length;c>b;b++)d=e[b],f.push(a.TypeParser.parse(d));return f}(),k=[],c=n=0,p=e.length;p>n;c=++n)d=e[c],k.push(0===d.type?d.value:((l=this.formatterObservers)[g]||(l[g]={}),(j=this.formatterObservers[g][c])?void 0:(j=this.observe(this.view.models,d.value,this.sync),this.formatterObservers[g][c]=j),j.value()));(null!=h?h.read:void 0)instanceof Function?b=h.read.apply(h,[b].concat(f.call(k))):h instanceof Function&&(b=h.apply(null,[b].concat(f.call(k))))}return b},b.prototype.eventHandler=function(a){var b,c;return c=(b=this).view.handler,function(d){return c.call(a,this,d,b)}},b.prototype.set=function(a){var b;return a=this.formattedValue(a instanceof Function&&!this.binder["function"]?a.call(this.model):a),null!=(b=this.binder.routine)?b.call(this,this.el,a):void 0},b.prototype.sync=function(){var a,b;return this.set(function(){var c,d,e,f,g,h,i;if(this.observer){if(this.model!==this.observer.target){for(g=this.dependencies,c=0,e=g.length;e>c;c++)b=g[c],b.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(h=this.options.dependencies)?h.length:void 0))for(i=this.options.dependencies,d=0,f=i.length;f>d;d++)a=i[d],b=this.observe(this.model,a,this.sync),this.dependencies.push(b)}return this.observer.value()}return this.value}.call(this))},b.prototype.publish=function(){var a,b,c,d,e,g,h,i,j;if(this.observer){for(d=this.getValue(this.el),h=this.formatters.slice(0).reverse(),e=0,g=h.length;g>e;e++)b=h[e],a=b.split(/\s+/),c=a.shift(),(null!=(i=this.view.formatters[c])?i.publish:void 0)&&(d=(j=this.view.formatters[c]).publish.apply(j,[d].concat(f.call(a))));return this.observer.setValue(d)}},b.prototype.bind=function(){var a,b,c,d,e,f,g;if(this.parseTarget(),null!=(e=this.binder.bind)&&e.call(this,this.el),null!=this.model&&(null!=(f=this.options.dependencies)?f.length:void 0))for(g=this.options.dependencies,c=0,d=g.length;d>c;c++)a=g[c],b=this.observe(this.model,a,this.sync),this.dependencies.push(b);return this.view.preloadData?this.sync():void 0},b.prototype.unbind=function(){var a,b,c,d,e,f,g,h,i,j;for(null!=(g=this.binder.unbind)&&g.call(this,this.el),null!=(h=this.observer)&&h.unobserve(),i=this.dependencies,e=0,f=i.length;f>e;e++)d=i[e],d.unobserve();this.dependencies=[],j=this.formatterObservers;for(c in j){b=j[c];for(a in b)d=b[a],d.unobserve()}return this.formatterObservers={}},b.prototype.update=function(a){var b,c;return null==a&&(a={}),this.model=null!=(b=this.observer)?b.target:void 0,null!=(c=this.binder.update)?c.call(this,a):void 0},b.prototype.getValue=function(b){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,b):a.Util.getInputValue(b)},b}(),a.ComponentBinding=function(b){function c(a,b,c){var d,f,g,h,j,k,l;for(this.view=a,this.el=b,this.type=c,this.unbind=e(this.unbind,this),this.bind=e(this.bind,this),this.locals=e(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},f=a.bindingRegExp(),k=this.el.attributes||[],h=0,j=k.length;j>h;h++)d=k[h],f.test(d.name)||(g=this.camelCase(d.name),i.call(null!=(l=this.component["static"])?l:[],g)>=0?this["static"][g]=d.value:this.observers[g]=d.value)}return h(c,b),c.prototype.sync=function(){},c.prototype.update=function(){},c.prototype.publish=function(){},c.prototype.locals=function(){var a,b,c,d,e,f;c={},e=this["static"];for(a in e)d=e[a],c[a]=d;f=this.observers;for(a in f)b=f[a],c[a]=b.value();return c},c.prototype.camelCase=function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},c.prototype.bind=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;if(!this.bound){o=this.observers;for(c in o)d=o[c],this.observers[c]=this.observe(this.view.models,d,function(a){return function(b){return function(){return a.componentView.models[b]=a.observers[b].value()}}}(this).call(this,c));this.bound=!0}if(null!=this.componentView)return this.componentView.bind();for(this.el.innerHTML=this.component.template.call(this),h=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,g={},p=a.extensions,k=0,m=p.length;m>k;k++){if(f=p[k],g[f]={},this.component[f]){q=this.component[f];for(b in q)i=q[b],g[f][b]=i}r=this.view[f];for(b in r)i=r[b],null==(j=g[f])[b]&&(j[b]=i)}for(s=a.options,l=0,n=s.length;n>l;l++)f=s[l],g[f]=null!=(t=this.component[f])?t:this.view[f];this.componentView=new a.View(this.el,h,g),this.componentView.bind(),u=this.observers,v=[];for(c in u)e=u[c],v.push(this.upstreamObservers[c]=this.observe(this.componentView.models,c,function(a){return function(b,c){return function(){return c.setValue(a.componentView.models[b])}}}(this).call(this,c,e)));return v},c.prototype.unbind=function(){var a,b,c,d,e;c=this.upstreamObservers;for(a in c)b=c[a],b.unobserve();d=this.observers;for(a in d)b=d[a],b.unobserve();return null!=(e=this.componentView)?e.unbind.call(this):void 0},c}(a.Binding),a.TextBinding=function(a){function b(a,b,c,d,f){this.view=a,this.el=b,this.type=c,this.keypath=d,this.options=null!=f?f:{},this.sync=e(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return h(b,a),b.prototype.binder={routine:function(a,b){return a.data=null!=b?b:""}},b.prototype.sync=function(){return b.__super__.sync.apply(this,arguments)},b}(a.Binding),a["public"].binders.text=function(a,b){return null!=a.textContent?a.textContent=null!=b?b:"":a.innerText=null!=b?b:""},a["public"].binders.html=function(a,b){return a.innerHTML=null!=b?b:""},a["public"].binders.show=function(a,b){return a.style.display=b?"":"none"},a["public"].binders.hide=function(a,b){return a.style.display=b?"none":""},a["public"].binders.enabled=function(a,b){return a.disabled=!b},a["public"].binders.disabled=function(a,b){return a.disabled=!!b},a["public"].binders.checked={publishes:!0,priority:2e3,bind:function(b){return a.Util.bindEvent(b,"change",this.publish)},unbind:function(b){return a.Util.unbindEvent(b,"change",this.publish)},routine:function(a,b){var c;return a.checked="radio"===a.type?(null!=(c=a.value)?c.toString():void 0)===(null!=b?b.toString():void 0):!!b}},a["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(b){return a.Util.bindEvent(b,"change",this.publish)},unbind:function(b){return a.Util.unbindEvent(b,"change",this.publish)},routine:function(a,b){var c;return a.checked="radio"===a.type?(null!=(c=a.value)?c.toString():void 0)!==(null!=b?b.toString():void 0):!b}},a["public"].binders.value={publishes:!0,priority:3e3,bind:function(b){return"INPUT"!==b.tagName||"radio"!==b.type?(this.event="SELECT"===b.tagName?"change":"input",a.Util.bindEvent(b,this.event,this.publish)):void 0},unbind:function(b){return"INPUT"!==b.tagName||"radio"!==b.type?a.Util.unbindEvent(b,this.event,this.publish):void 0},routine:function(a,b){var c,d,e,f,g,h,j;if("INPUT"===a.tagName&&"radio"===a.type)return a.setAttribute("value",b);if(null!=window.jQuery){if(a=jQuery(a),(null!=b?b.toString():void 0)!==(null!=(f=a.val())?f.toString():void 0))return a.val(null!=b?b:"")}else if("select-multiple"===a.type){if(null!=b){for(j=[],d=0,e=a.length;e>d;d++)c=a[d],j.push(c.selected=(g=c.value,i.call(b,g)>=0));return j}}else if((null!=b?b.toString():void 0)!==(null!=(h=a.value)?h.toString():void 0))return a.value=null!=b?b:""}},a["public"].binders["if"]={block:!0,priority:4e3,bind:function(a){var b,c;return null==this.marker?(b=[this.view.prefix,this.type].join("-").replace("--","-"),c=a.getAttribute(b),this.marker=document.createComment(" rivets: "+this.type+" "+c+" "),this.bound=!1,a.removeAttribute(b),a.parentNode.insertBefore(this.marker,a),a.parentNode.removeChild(a)):void 0},unbind:function(){var a;return null!=(a=this.nested)?a.unbind():void 0},routine:function(b,c){var d,e,f,g;if(!!c==!this.bound){if(c){f={},g=this.view.models;for(d in g)e=g[d],f[d]=e;return(this.nested||(this.nested=new a.View(b,f,this.view.options()))).bind(),this.marker.parentNode.insertBefore(b,this.marker.nextSibling),this.bound=!0}return b.parentNode.removeChild(b),this.nested.unbind(),this.bound=!1}},update:function(a){var b;return null!=(b=this.nested)?b.update(a):void 0}},a["public"].binders.unless={block:!0,priority:4e3,bind:function(b){return a["public"].binders["if"].bind.call(this,b)},unbind:function(){return a["public"].binders["if"].unbind.call(this)},routine:function(b,c){return a["public"].binders["if"].routine.call(this,b,!c)},update:function(b){return a["public"].binders["if"].update.call(this,b)}},a["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(b){return this.handler?a.Util.unbindEvent(b,this.args[0],this.handler):void 0},routine:function(b,c){return this.handler&&a.Util.unbindEvent(b,this.args[0],this.handler),a.Util.bindEvent(b,this.args[0],this.handler=this.eventHandler(c))}},a["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(a){var b,c,d,e,f;if(null==this.marker)b=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],a.removeAttribute(b),a.parentNode.insertBefore(this.marker,a),a.parentNode.removeChild(a);else for(f=this.iterated,d=0,e=f.length;e>d;d++)c=f[d],c.bind()},unbind:function(){var a,b,c,d,e;if(null!=this.iterated){for(d=this.iterated,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.unbind());return e}},routine:function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if(j=this.args[0],c=c||[],this.iterated.length>c.length)for(u=Array(this.iterated.length-c.length),o=0,r=u.length;r>o;o++)f=u[o],n=this.iterated.pop(),n.unbind(),this.marker.parentNode.removeChild(n.els[0]);for(g=p=0,s=c.length;s>p;g=++p)if(i=c[g],e={index:g},e[j]=i,null==this.iterated[g]){v=this.view.models;for(h in v)i=v[h],null==e[h]&&(e[h]=i);l=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,k=this.view.options(),k.preloadData=!0,m=b.cloneNode(!0),n=new a.View(m,e,k),n.bind(),this.iterated.push(n),this.marker.parentNode.insertBefore(m,l.nextSibling)}else this.iterated[g].models[j]!==i&&this.iterated[g].update(e);if("OPTION"===b.nodeName){for(w=this.view.bindings,x=[],q=0,t=w.length;t>q;q++)d=w[q],x.push(d.el===this.marker.parentNode&&"value"===d.type?d.sync():void 0);return x}},update:function(a){var b,c,d,e,f,g,h,i;b={};for(c in a)d=a[c],c!==this.args[0]&&(b[c]=d);for(h=this.iterated,i=[],f=0,g=h.length;g>f;f++)e=h[f],i.push(e.update(b));return i}},a["public"].binders["class-*"]=function(a,b){var c;return c=" "+a.className+" ",!b==(-1!==c.indexOf(" "+this.args[0]+" "))?a.className=b?""+a.className+" "+this.args[0]:c.replace(" "+this.args[0]+" "," ").trim():void 0},a["public"].binders["*"]=function(a,b){return null!=b?a.setAttribute(this.type,b):a.removeAttribute(this.type)},a["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(a){var b,c,d;return a.hasOwnProperty(this.id)||(b=this.counter++,Object.defineProperty(a,this.id,{value:b})),(c=this.weakmap)[d=a[this.id]]||(c[d]={callbacks:{}})},cleanupWeakReference:function(a,b){return Object.keys(a.callbacks).length||a.pointers&&Object.keys(a.pointers).length?void 0:delete this.weakmap[b]},stubFunction:function(a,b){var c,d,e;return d=a[b],c=this.weakReference(a),e=this.weakmap,a[b]=function(){var b,f,g,h,i,j,k,l,m,n;h=d.apply(a,arguments),k=c.pointers;for(g in k)for(f=k[g],n=null!=(l=null!=(m=e[g])?m.callbacks[f]:void 0)?l:[],i=0,j=n.length;j>i;i++)(b=n[i])();return h}},observeMutations:function(a,b,c){var d,e,f,g,h,j;if(Array.isArray(a)){if(f=this.weakReference(a),null==f.pointers)for(f.pointers={},e=["push","pop","shift","unshift","sort","reverse","splice"],h=0,j=e.length;j>h;h++)d=e[h],this.stubFunction(a,d);if(null==(g=f.pointers)[b]&&(g[b]=[]),i.call(f.pointers[b],c)<0)return f.pointers[b].push(c)}},unobserveMutations:function(a,b,c){var d,e,f;return Array.isArray(a)&&null!=a[this.id]&&(e=this.weakmap[a[this.id]])&&(f=e.pointers[b])?((d=f.indexOf(c))>=0&&f.splice(d,1),f.length||delete e.pointers[b],this.cleanupWeakReference(e,a[this.id])):void 0},observe:function(a,b,c){var d,e,f;return d=this.weakReference(a).callbacks,null==d[b]&&(d[b]=[],e=Object.getOwnPropertyDescriptor(a,b),(null!=e?e.get:void 0)||(null!=e?e.set:void 0)||(f=a[b],Object.defineProperty(a,b,{enumerable:!0,get:function(){return f},set:function(e){return function(g){var h,j,k,l;if(g!==f&&(e.unobserveMutations(f,a[e.id],b),f=g,h=e.weakmap[a[e.id]])){if(d=h.callbacks,d[b])for(l=d[b].slice(),j=0,k=l.length;k>j;j++)c=l[j],i.call(d[b],c)>=0&&c();return e.observeMutations(g,a[e.id],b)}}}(this)}))),i.call(d[b],c)<0&&d[b].push(c),this.observeMutations(a[b],a[this.id],b)},unobserve:function(a,b,c){var d,e,f;return(f=this.weakmap[a[this.id]])&&(d=f.callbacks[b])?((e=d.indexOf(c))>=0&&(d.splice(e,1),d.length||delete f.callbacks[b]),this.unobserveMutations(a[b],a[this.id],b),this.cleanupWeakReference(f,a[this.id])):void 0},get:function(a,b){return a[b]},set:function(a,b,c){return a[b]=c}},a.factory=function(b){return a.sightglass=b,a["public"]._=a,a["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=a.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(b){return this.rivets=a.factory(b)}):this.rivets=a.factory(sightglass)}.call(this),function(){var a,b,c,d,e,f,g=function(a,b){return function(){return a.apply(b,arguments)}};b=function(){function a(){this.update=g(this.update,this)}return a.prototype.update=function(a){var b,c,e;for(c in a)e=a[c],"items"!==c&&(this[c]=e);return this.items=function(){var c,e,f,g;for(f=a.items,g=[],c=0,e=f.length;e>c;c++)b=f[c],g.push(new d(b));return g}()},a}(),d=function(){function a(a){this.propertyArray=g(this.propertyArray,this),this.update=g(this.update,this),this.update(a)}return a.prototype.update=function(a){var b,d;for(b in a)d=a[b],"properties"!==b&&(this[b]=d);return this.properties=c.Utils.extend({},a.properties)},a.prototype.propertyArray=function(){var a,b,c,d;c=this.properties,d=[];for(a in c)b=c[a],d.push({name:a,value:b});return d},a}(),c={settings:{debug:!1,dataAPI:!0,requestBodyClass:null,rivetsModels:{},currency:null,moneyFormat:null,moneyWithCurrencyFormat:null,weightUnit:"g",weightPrecision:0},cart:new b},c.init=function(a,b){return null==b&&(b={}),c.configure(b),c.Utils.log("Initialising CartJS."),c.cart.update(a),c.settings.dataAPI&&(c.Utils.log('"dataAPI" setting is true, initialising Data API.'),c.Data.init()),c.settings.requestBodyClass&&(c.Utils.log('"requestBodyClass" set, adding event listeners.'),jQuery(document).on("cart.requestStarted",function(){return jQuery("body").addClass(c.settings.requestBodyClass)}),jQuery(document).on("cart.requestComplete",function(){return jQuery("body").removeClass(c.settings.requestBodyClass)})),c.Rivets.init(),jQuery(document).trigger("cart.ready",[c.cart])},c.configure=function(a){return null==a&&(a={}),c.Utils.extend(c.settings,a)},null==window.console&&(window.console={},window.console.log=function(){}),c.Utils={log:function(){return c.Utils.console(console.log,arguments)},error:function(){return c.Utils.console(console.error,arguments)},console:function(a,b){return c.settings.debug&&"undefined"!=typeof console&&null!==console?(b=Array.prototype.slice.call(b),b.unshift("[CartJS]:"),a.apply(console,b)):void 0},wrapKeys:function(a,b,c){var d,e,f;null==b&&(b="properties"),f={};for(d in a)e=a[d],f[""+b+"["+d+"]"]=null!=c?c:e;return f},unwrapKeys:function(a,b,c){var d,e,f,g;null==b&&(b="properties"),e={};for(d in a)g=a[d],f=d.replace(""+b+"[","").replace("]",""),e[f]=null!=c?c:g;return e},extend:function(a,b){var c,d;for(c in b)d=b[c],a[c]=d;return a},clone:function(a){var b,c;if(null==a||"object"!=typeof a)return a;c=new a.constructor;for(b in a)c[b]=clone(a[b]);return c},isArray:Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},ensureArray:function(a){return c.Utils.isArray(a)?a:null!=a?[a]:[]},formatMoney:function(a,b,d,e){var f,g;return null==e&&(e=""),e||(e=c.settings.currency),null!=window.Currency&&e!==c.settings.currency&&(a=Currency.convert(a,c.settings.currency,e),null!=(null!=(f=window.Currency)?f.moneyFormats:void 0)&&e in window.Currency.moneyFormats&&(b=window.Currency.moneyFormats[e][d])),null!=(null!=(g=window.Shopify)?g.formatMoney:void 0)?Shopify.formatMoney(a,b):a},getSizedImageUrl:function(a,b){var c,d;return null!=(null!=(c=window.Shopify)&&null!=(d=c.Image)?d.getSizedImageUrl:void 0)?a?Shopify.Image.getSizedImageUrl(a,b):Shopify.Image.getSizedImageUrl("https://cdn.shopify.com/s/images/admin/no-image-.gif",b).replace("-_","-"):a?a:"https://cdn.shopify.com/s/images/admin/no-image-large.gif"}},f=[],e=!1,c.Queue={add:function(a,b,d){var g;return null==d&&(d={}),g={url:a,data:b,type:d.type||"POST",dataType:d.dataType||"json",success:c.Utils.ensureArray(d.success),error:c.Utils.ensureArray(d.error),complete:c.Utils.ensureArray(d.complete)},d.updateCart&&g.success.push(c.cart.update),f.push(g),e?void 0:(jQuery(document).trigger("cart.requestStarted",[c.cart]),c.Queue.process())},process:function(){var a;return f.length?(e=!0,a=f.shift(),a.complete=c.Queue.process,jQuery.ajax(a)):(e=!1,void jQuery(document).trigger("cart.requestComplete",[c.cart]))}},c.Core={getCart:function(a){return null==a&&(a={}),a.type="GET",a.updateCart=!0,c.Queue.add("/cart.js",{},a)},addItem:function(a,b,d,e){var f;return null==b&&(b=1),null==d&&(d={}),null==e&&(e={}),f=c.Utils.wrapKeys(d),f.id=a,f.quantity=b,c.Queue.add("/cart/add.js",f,e),c.Core.getCart()},updateItem:function(a,b,d,e){var f;return null==d&&(d={}),null==e&&(e={}),f=c.Utils.wrapKeys(d),f.line=a,null!=b&&(f.quantity=b),e.updateCart=!0,c.Queue.add("/cart/change.js",f,e)},removeItem:function(a,b){return null==b&&(b={}),c.Core.updateItem(a,0,{},b)},updateItemById:function(a,b,d,e){var f;return null==d&&(d={}),null==e&&(e={}),f=c.Utils.wrapKeys(d),f.id=a,null!=b&&(f.quantity=b),e.updateCart=!0,c.Queue.add("/cart/change.js",f,e)},updateItemQuantitiesById:function(a,b){return null==a&&(a={}),null==b&&(b={}),b.updateCart=!0,c.Queue.add("/cart/update.js",{updates:a},b)},removeItemById:function(a,b){var d;return null==b&&(b={}),d={id:a,quantity:0},b.updateCart=!0,c.Queue.add("/cart/change.js",d,b)},clear:function(a){return null==a&&(a={}),a.updateCart=!0,c.Queue.add("/cart/clear.js",{},a)},getAttribute:function(a,b){return a in c.cart.attributes?c.cart.attributes[a]:b},setAttribute:function(a,b,d){var e;return null==d&&(d={}),e={},e[a]=b,c.Core.setAttributes(e,d)},getAttributes:function(){return c.cart.attributes},setAttributes:function(a,b){return null==a&&(a={}),null==b&&(b={}),b.updateCart=!0,c.Queue.add("/cart/update.js",c.Utils.wrapKeys(a,"attributes"),b)},clearAttributes:function(a){return null==a&&(a={}),a.updateCart=!0,c.Queue.add("/cart/update.js",c.Utils.wrapKeys(c.Core.getAttributes(),"attributes",""),a)},getNote:function(){return c.cart.note},setNote:function(a,b){return null==b&&(b={}),b.updateCart=!0,c.Queue.add("/cart/update.js",{note:a},b)}},a=null,c.Data={init:function(){return a=jQuery(document),c.Data.setEventListeners("on"),c.Data.render(null,c.cart)},destroy:function(){return c.Data.setEventListeners("off")},setEventListeners:function(b){return a[b]("click","[data-cart-add]",c.Data.add),a[b]("click","[data-cart-remove]",c.Data.remove),a[b]("click","[data-cart-remove-id]",c.Data.removeById),a[b]("click","[data-cart-update]",c.Data.update),a[b]("click","[data-cart-update-id]",c.Data.updateById),a[b]("click","[data-cart-clear]",c.Data.clear),a[b]("change","[data-cart-toggle]",c.Data.toggle),a[b]("change","[data-cart-toggle-attribute]",c.Data.toggleAttribute),a[b]("submit","[data-cart-submit]",c.Data.submit),a[b]("cart.requestComplete",c.Data.render)},add:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.addItem(b.attr("data-cart-add"),b.attr("data-cart-quantity"))},remove:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.removeItem(b.attr("data-cart-remove"))},removeById:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.removeItemById(b.attr("data-cart-remove-id"))},update:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.updateItem(b.attr("data-cart-update"),b.attr("data-cart-quantity"))},updateById:function(a){var b;return a.preventDefault(),b=jQuery(this),c.Core.updateItemById(b.attr("data-cart-update-id"),b.attr("data-cart-quantity"))},clear:function(a){return a.preventDefault(),c.Core.clear()},toggle:function(){var a,b;return a=jQuery(this),b=a.attr("data-cart-toggle"),a.is(":checked")?c.Core.addItem(b):c.Core.removeItemById(b);

},toggleAttribute:function(){var a,b;return a=jQuery(this),b=a.attr("data-cart-toggle-attribute"),c.Core.setAttribute(b,a.is(":checked")?"Yes":"")},submit:function(a){var b,d,e,f;return a.preventDefault(),b=jQuery(this).serializeArray(),d=void 0,f=void 0,e={},jQuery.each(b,function(a,b){return"id"===b.name?d=b.value:"quantity"===b.name?f=b.value:b.name.match(/^properties\[\w+\]$/)?e[b.name]=b.value:void 0}),c.Core.addItem(d,f,c.Utils.unwrapKeys(e))},render:function(a,b){var d;return d={item_count:b.item_count,total_price:b.total_price,total_price_money:c.Utils.formatMoney(b.total_price,c.settings.moneyFormat,"money_format",null!=("undefined"!=typeof Currency&&null!==Currency?Currency.currentCurrency:void 0)?Currency.currentCurrency:void 0),total_price_money_with_currency:c.Utils.formatMoney(b.total_price,c.settings.moneyWithCurrencyFormat,"money_with_currency_format",null!=("undefined"!=typeof Currency&&null!==Currency?Currency.currentCurrency:void 0)?Currency.currentCurrency:void 0)},jQuery("[data-cart-render]").each(function(){var a;return a=jQuery(this),a.html(d[a.attr("data-cart-render")])})}},"rivets"in window?(c.Rivets={model:null,boundViews:[],init:function(){return c.Rivets.bindViews()},destroy:function(){return c.Rivets.unbindViews()},bindViews:function(){return c.Utils.log("Rivets.js is present, binding views."),c.Rivets.unbindViews(),c.Rivets.model=c.Utils.extend({cart:c.cart},c.settings.rivetsModels),null!=window.Currency&&(c.Rivets.model.Currency=window.Currency),jQuery("[data-cart-view]").each(function(){var a;return a=rivets.bind(jQuery(this),c.Rivets.model),c.Rivets.boundViews.push(a)})},unbindViews:function(){var a,b,d,e;for(e=c.Rivets.boundViews,b=0,d=e.length;d>b;b++)a=e[b],a.unbind();return c.Rivets.boundViews=[]}},rivets.formatters.eq=function(a,b){return a===b},rivets.formatters.includes=function(a,b){return a.indexOf(b)>=0},rivets.formatters.match=function(a,b,c){return a.match(new RegExp(b,c))},rivets.formatters.lt=function(a,b){return b>a},rivets.formatters.gt=function(a,b){return a>b},rivets.formatters.not=function(a){return!a},rivets.formatters.empty=function(a){return!a.length},rivets.formatters.plus=function(a,b){return parseInt(a)+parseInt(b)},rivets.formatters.minus=function(a,b){return parseInt(a)-parseInt(b)},rivets.formatters.times=function(a,b){return a*b},rivets.formatters.divided_by=function(a,b){return a/b},rivets.formatters.modulo=function(a,b){return a%b},rivets.formatters.prepend=function(a,b){return b+a},rivets.formatters.append=function(a,b){return a+b},rivets.formatters.slice=function(a,b,c){return a.slice(b,c)},rivets.formatters.pluralize=function(a,b,d){return null==d&&(d=b+"s"),c.Utils.isArray(a)&&(a=a.length),1===a?b:d},rivets.formatters.array_element=function(a,b){return a[b]},rivets.formatters.array_first=function(a){return a[0]},rivets.formatters.array_last=function(a){return a[a.length-1]},rivets.formatters.money=function(a,b){return c.Utils.formatMoney(a,c.settings.moneyFormat,"money_format",b)},rivets.formatters.money_with_currency=function(a,b){return c.Utils.formatMoney(a,c.settings.moneyWithCurrencyFormat,"money_with_currency_format",b)},rivets.formatters.weight=function(a){switch(c.settings.weightUnit){case"kg":return(a/1e3).toFixed(c.settings.weightPrecision);case"oz":return(.035274*a).toFixed(c.settings.weightPrecision);case"lb":return(.00220462*a).toFixed(c.settings.weightPrecision);default:return a.toFixed(c.settings.weightPrecision)}},rivets.formatters.weight_with_unit=function(a){return rivets.formatters.weight(a)+c.settings.weightUnit},rivets.formatters.product_image_size=function(a,b){return c.Utils.getSizedImageUrl(a,b)},rivets.formatters.moneyWithCurrency=rivets.formatters.money_with_currency,rivets.formatters.weightWithUnit=rivets.formatters.weight_with_unit,rivets.formatters.productImageSize=rivets.formatters.product_image_size):c.Rivets={init:function(){},destroy:function(){}},c.factory=function(a){return a.init=c.init,a.configure=c.configure,a.cart=c.cart,a.settings=c.settings,a.getCart=c.Core.getCart,a.addItem=c.Core.addItem,a.updateItem=c.Core.updateItem,a.updateItemById=c.Core.updateItemById,a.updateItemQuantitiesById=c.Core.updateItemQuantitiesById,a.removeItem=c.Core.removeItem,a.removeItemById=c.Core.removeItemById,a.clear=c.Core.clear,a.getAttribute=c.Core.getAttribute,a.setAttribute=c.Core.setAttribute,a.getAttributes=c.Core.getAttributes,a.setAttributes=c.Core.setAttributes,a.clearAttributes=c.Core.clearAttributes,a.getNote=c.Core.getNote,a.setNote=c.Core.setNote,a.render=c.Data.render},"object"==typeof exports?c.factory(exports):"function"==typeof define&&define.amd?define(["exports"],function(a){return c.factory(this.CartJS=a),a}):c.factory(this.CartJS={})}.call(this);
/*
 slick-animation.js

 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
!function(a){a.fn.slickAnimation=function(){function n(a,n,t,i,o){o="undefined"!=typeof o?o:!1,1==n.opacity?(a.addClass(t),a.addClass(i)):(a.removeClass(t),a.removeClass(i)),o&&a.css(n)}function t(a,n){return a?1e3*a+1e3:n?1e3*n:a||n?1e3*a+1e3*n:1e3}function i(a,n,t){var i=["animation-"+n,"-webkit-animation-"+n,"-moz-animation-"+n,"-o-animation-"+n,"-ms-animation-"+n],o={}
i.forEach(function(a){o[a]=t+"s"}),a.css(o)}var o=a(this),e=o.find(".slick-list .slick-track > div"),s=o.find('[data-slick-index="0"]'),r="animated",c={opacity:"1"},d={opacity:"0"}
return e.each(function(){var e=a(this)
e.find("[data-animation-in]").each(function(){var u=a(this)
u.css(d)
var l=u.attr("data-animation-in"),f=u.attr("data-animation-out"),h=u.attr("data-delay-in"),m=u.attr("data-duration-in"),y=u.attr("data-delay-out"),C=u.attr("data-duration-out")
f?(s.length>0&&e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m),setTimeout(function(){n(u,d,l,r),n(u,c,f,r),y&&i(u,"delay",y),C&&i(u,"duration",C)},t(h,m))),o.on("afterChange",function(a,o,s){e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m),setTimeout(function(){n(u,d,l,r),n(u,c,f,r),y&&i(u,"delay",y),C&&i(u,"duration",C)},t(h,m)))}),o.on("beforeChange",function(a,t,i){n(u,d,f,r,!0)})):(s.length>0&&e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m)),o.on("afterChange",function(a,t,o){e.hasClass("slick-current")&&(n(u,c,l,r,!0),h&&i(u,"delay",h),m&&i(u,"duration",m))}),o.on("beforeChange",function(a,t,i){n(u,d,l,r,!0)}))})}),this}}(jQuery)

!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
 * Slidebars - A jQuery Framework for Off-Canvas Menus and Sidebars
 * Version: 2.0.2
 * Url: http://www.adchsm.com/slidebars/
 * Author: Adam Charles Smith
 * Author url: http://www.adchsm.com/
 * License: MIT
 * License url: http://www.adchsm.com/slidebars/license/
 */

var slidebars=function(){var t=$("[canvas]"),e={},i=!1,n=!1,s=["top","right","bottom","left"],r=["reveal","push","overlay","shift"],o=function(i){var n=$(),s="0px, 0px",r=1e3*parseFloat(e[i].element.css("transitionDuration"),10);return("reveal"===e[i].style||"push"===e[i].style||"shift"===e[i].style)&&(n=n.add(t)),("push"===e[i].style||"overlay"===e[i].style||"shift"===e[i].style)&&(n=n.add(e[i].element)),e[i].active&&("top"===e[i].side?s="0px, "+e[i].element.css("height"):"right"===e[i].side?s="-"+e[i].element.css("width")+", 0px":"bottom"===e[i].side?s="0px, -"+e[i].element.css("height"):"left"===e[i].side&&(s=e[i].element.css("width")+", 0px")),{elements:n,amount:s,duration:r}},c=function(t,i,n,s){return a(t)?!1:void(e[t]={id:t,side:i,style:n,element:s,active:!1})},a=function(t){return e.hasOwnProperty(t)?!0:!1};this.init=function(t){return i?!1:(n||($("[off-canvas]").each(function(){var t=$(this).attr("off-canvas").split(" ",3);return t&&t[0]&&-1!==s.indexOf(t[1])&&-1!==r.indexOf(t[2])?void c(t[0],t[1],t[2],$(this)):!1}),n=!0),i=!0,this.css(),$(f).trigger("init"),void("function"==typeof t&&t()))},this.exit=function(t){if(!i)return!1;var e=function(){i=!1,$(f).trigger("exit"),"function"==typeof t&&t()};this.getActiveSlidebar()?this.close(e):e()},this.css=function(t){if(!i)return!1;for(var n in e)if(a(n)){var s;s="top"===e[n].side||"bottom"===e[n].side?e[n].element.css("height"):e[n].element.css("width"),("push"===e[n].style||"overlay"===e[n].style||"shift"===e[n].style)&&e[n].element.css("margin-"+e[n].side,"-"+s)}this.getActiveSlidebar()&&this.open(this.getActiveSlidebar()),$(f).trigger("css"),"function"==typeof t&&t()},this.open=function(t,n){if(!i)return!1;if(!t||!a(t))return!1;var s=function(){e[t].active=!0,e[t].element.css("display","block"),$(f).trigger("opening",[e[t].id]);var i=o(t);i.elements.css({"transition-duration":i.duration+"ms",transform:"translate("+i.amount+")"}),setTimeout(function(){$(f).trigger("opened",[e[t].id]),"function"==typeof n&&n()},i.duration)};this.getActiveSlidebar()&&this.getActiveSlidebar()!==t?this.close(s):s()},this.close=function(t,n){if("function"==typeof t&&(n=t,t=null),!i)return!1;if(t&&!a(t))return!1;if(t||(t=this.getActiveSlidebar()),t&&e[t].active){e[t].active=!1,$(f).trigger("closing",[e[t].id]);var s=o(t);s.elements.css("transform",""),setTimeout(function(){s.elements.css("transition-duration",""),e[t].element.css("display",""),$(f).trigger("closed",[e[t].id]),"function"==typeof n&&n()},s.duration)}},this.toggle=function(t,n){return i&&t&&a(t)?void(e[t].active?this.close(t,function(){"function"==typeof n&&n()}):this.open(t,function(){"function"==typeof n&&n()})):!1},this.isActive=function(){return i},this.isActiveSlidebar=function(t){return i&&t&&a(t)?e[t].active:!1},this.getActiveSlidebar=function(){if(!i)return!1;var t=!1;for(var n in e)if(a(n)&&e[n].active){t=e[n].id;break}return t},this.getSlidebars=function(){if(!i)return!1;var t=[];for(var n in e)a(n)&&t.push(e[n].id);return t},this.getSlidebar=function(t){return i&&t&&t&&a(t)?e[t]:!1},this.events={};var f=this.events;$(window).on("resize",this.css.bind(this))};
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",f=function(e){return Array.prototype.slice.call(e)},R=function(e){console.warn("".concat(t," ").concat(e))},I=function(e){console.error("".concat(t," ").concat(e))},n=[],m=function(e){-1===n.indexOf(e)&&(n.push(e),R(e))},H=function(e){return"function"==typeof e?e():e},D=function(e){return e&&Promise.resolve(e)===e},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),h=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},_=h(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),g=h(["success","warning","info","question","error"]),b={previousBodyPadding:null},v=function(e,t){return e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},y=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},z=function(e,t){y(e,t,!0)},W=function(e,t){y(e,t,!1)},U=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(v(e.childNodes[n],t))return e.childNodes[n]},K=function(e){e.style.opacity="",e.style.display=e.id===_.content?"block":"flex"},F=function(e){e.style.opacity="",e.style.display="none"},Z=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w=function(){return document.body.querySelector("."+_.container)},C=function(e){var t=w();return t?t.querySelector("."+e):null},k=function(){return C(_.popup)},x=function(){var e=k();return f(e.querySelectorAll("."+_.icon))},A=function(){return C(_.title)},B=function(){return C(_.content)},S=function(){return C(_.image)},P=function(){return C(_.progresssteps)},E=function(){return C(_["validation-message"])},L=function(){return C(_.confirm)},O=function(){return C(_.cancel)},Q=function(){return C(_.actions)},Y=function(){return C(_.footer)},$=function(){return C(_.close)},J=function(){var e=f(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=f(k().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return Z(e)})},T=function(){return!M()&&!document.body.classList.contains(_["no-backdrop"])},M=function(){return document.body.classList.contains(_["toast-shown"])},j=function(){return"undefined"==typeof window||"undefined"==typeof document},V='\n <div aria-labelledby="'.concat(_.title,'" aria-describedby="').concat(_.content,'" class="').concat(_.popup,'" tabindex="-1">\n   <div class="').concat(_.header,'">\n     <ul class="').concat(_.progresssteps,'"></ul>\n     <div class="').concat(_.icon," ").concat(g.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(_.icon," ").concat(g.question,'">\n       <span class="').concat(_["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.warning,'">\n       <span class="').concat(_["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.info,'">\n       <span class="').concat(_["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(_.image,'" />\n     <h2 class="').concat(_.title,'" id="').concat(_.title,'"></h2>\n     <button type="button" class="').concat(_.close,'">×</button>\n   </div>\n   <div class="').concat(_.content,'">\n     <div id="').concat(_.content,'"></div>\n     <input class="').concat(_.input,'" />\n     <input type="file" class="').concat(_.file,'" />\n     <div class="').concat(_.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(_.select,'"></select>\n     <div class="').concat(_.radio,'"></div>\n     <label for="').concat(_.checkbox,'" class="').concat(_.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(_.label,'"></span>\n     </label>\n     <textarea class="').concat(_.textarea,'"></textarea>\n     <div class="').concat(_["validation-message"],'" id="').concat(_["validation-message"],'"></div>\n   </div>\n   <div class="').concat(_.actions,'">\n     <button type="button" class="').concat(_.confirm,'">OK</button>\n     <button type="button" class="').concat(_.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(_.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),X=function(e){var t=w();if(t&&(t.parentNode.removeChild(t),W([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]])),!j()){var n=document.createElement("div");n.className=_.container,n.innerHTML=V;var o="string"==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i,r=k(),a=B(),s=U(a,_.input),c=U(a,_.file),u=a.querySelector(".".concat(_.range," input")),l=a.querySelector(".".concat(_.range," output")),d=U(a,_.select),p=a.querySelector(".".concat(_.checkbox," input")),f=U(a,_.textarea);r.setAttribute("role",e.toast?"alert":"dialog"),r.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||r.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(o).direction&&z(w(),_.rtl);var m=function(e){De.isVisible()&&i!==e.target.value&&De.resetValidationMessage(),i=e.target.value};return s.oninput=m,c.onchange=m,d.onchange=m,p.onchange=m,f.oninput=m,u.oninput=function(e){m(e),l.value=u.value},u.onchange=function(e){m(e),u.nextSibling.value=u.value},r}I("SweetAlert2 requires document to initialize")},G=function(e,t){if(!e)return F(t);if(e instanceof HTMLElement)t.appendChild(e);else if("object"===q(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);K(t)},ee=function(){if(j())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),te=function(e){var t=Q(),n=L(),o=O();if(e.showConfirmButton||e.showCancelButton?K(t):F(t),e.showCancelButton?o.style.display="inline-block":F(o),e.showConfirmButton?n.style.removeProperty("display"):F(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=_.confirm,z(n,e.confirmButtonClass),o.className=_.cancel,z(o,e.cancelButtonClass),e.buttonsStyling){z([n,o],_.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else W([n,o],_.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},ne=function(e){var t=B().querySelector("#"+_.content);e.html?G(e.html,t):e.text?(t.textContent=e.text,K(t)):F(t)},oe=function(e){for(var t=x(),n=0;n<t.length;n++)F(t[n]);if(e.type)if(-1!==Object.keys(g).indexOf(e.type)){var o=De.getPopup().querySelector(".".concat(_.icon,".").concat(g[e.type]));K(o),e.animation&&z(o,"swal2-animate-".concat(e.type,"-icon"))}else I('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},ie=function(e){var t=S();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),K(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=_.image,e.imageClass&&z(t,e.imageClass)):F(t)},re=function(i){var r=P(),a=parseInt(null===i.currentProgressStep?De.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(K(r),r.innerHTML="",a>=i.progressSteps.length&&R("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(z(n,_.progresscircle),n.innerHTML=e,t===a&&z(n,_.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");z(o,_.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):F(r)},ae=function(e){var t=A();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),G(e.title,t))},se=function(){null===b.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(b.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=b.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},ce=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ue=function(){var e=w(),t=k();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},le={},de=function(e,t){var n=w(),o=k();if(o){null!==e&&"function"==typeof e&&e(o),W(o,_.show),z(o,_.hide);var i=function(){M()?pe(t):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;le.restoreFocusTimeout=setTimeout(function(){le.previousActiveElement&&le.previousActiveElement.focus?(le.previousActiveElement.focus(),le.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return pe(t)}),le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),n.parentNode&&n.parentNode.removeChild(n),W([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"],_["toast-column"]]),T()&&(null!==b.previousBodyPadding&&(document.body.style.paddingRight=b.previousBodyPadding,b.previousBodyPadding=null),function(){if(v(document.body,_.iosfix)){var e=parseInt(document.body.style.top,10);W(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&ce()&&window.removeEventListener("resize",ue),f(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};ee&&!v(o,_.noanimation)?o.addEventListener(ee,function e(){o.removeEventListener(ee,e),v(o,_.hide)&&i()}):i()}},pe=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};function fe(e){var t=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return l(e,n);Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var me={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},he=["useRejections","expectRejections","extraParams"],ge=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],be=function(e){return me.hasOwnProperty(e)||"extraParams"===e},ve=function(e){return-1!==he.indexOf(e)},ye=function(e){for(var t in e)be(t)||R('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ge.indexOf(t)&&R('The parameter "'.concat(t,'" is incompatible with toasts')),ve(t)&&m('The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'))},we='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',Ce={};var ke=[],xe=function(){var e=k();e||De(""),e=k();var t=Q(),n=L(),o=O();K(t),K(n),z([e,t],_.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Ae=Object.freeze({isValidParameter:be,isDeprecatedParameter:ve,argsToParams:function(n){var o={};switch(q(n[0])){case"object":r(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(q(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:I("Unexpected type of ".concat(e,'! Expected "string", got ').concat(q(n[t])))}})}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:de,closePopup:de,closeModal:de,closeToast:de,isVisible:function(){return!!k()},clickConfirm:function(){return L().click()},clickCancel:function(){return O().click()},getContainer:w,getPopup:k,getTitle:A,getContent:B,getImage:S,getIcons:x,getCloseButton:$,getButtonsWrapper:function(){return m("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),C(_.actions)},getActions:Q,getConfirmButton:L,getCancelButton:O,getFooter:Y,getFocusableElements:J,getValidationMessage:E,isLoading:function(){return k().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(this,t)},mixin:function(n){return fe(function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,e),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var r=this;ke=e;var a=function(){ke=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ke.length?(document.body.setAttribute("data-swal2-queue-step",n),r(ke[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ke.length?ke.splice(t,0,e):ke.push(e)},deleteQueueStep:function(e){void 0!==ke[e]&&ke.splice(e,1)},showLoading:xe,enableLoading:xe,getTimerLeft:function(){return le.timeout&&le.timeout.getTimerLeft()},stopTimer:function(){return le.timeout&&le.timeout.stop()},resumeTimer:function(){return le.timeout&&le.timeout.start()},toggleTimer:function(){var e=le.timeout;return e&&(e.running?e.stop():e.start())},increaseTimer:function(e){return le.timeout&&le.timeout.increase(e)},isTimerRunning:function(){return le.timeout&&le.timeout.isRunning()}}),Be="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),Se="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:Be("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(Be("WeakMap"),Object.defineProperty,{}.hasOwnProperty),Pe={promise:new Se,innerParams:new Se,domCache:new Se};function Ee(){var e=Pe.innerParams.get(this),t=Pe.domCache.get(this);e.showConfirmButton||(F(t.confirmButton),e.showCancelButton||F(t.actions)),W([t.popup,t.actions],_.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function Le(e){var t=Pe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),K(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",_["validation-message"]),N(o),z(o,_.inputerror))}function Oe(){var e=Pe.domCache.get(this);e.validationMessage&&F(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),W(t,_.inputerror))}var Te=function e(t,n){a(this,e);var o,i,r=n;this.running=!1,this.start=function(){return this.running||(this.running=!0,i=new Date,o=setTimeout(t,r)),r},this.stop=function(){return this.running&&(this.running=!1,clearTimeout(o),r-=new Date-i),r},this.increase=function(e){var t=this.running;return t&&this.stop(),r+=e,t&&this.start(),r},this.getTimerLeft=function(){return this.running&&(this.stop(),this.start()),r},this.isRunning=function(){return this.running},this.start()},Me={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var je=function(e){var t=w(),n=k();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(z(n,_.show),z(t,_.fade),W(n,_.hide)):W(n,_.fade),K(n),t.style.overflowY="hidden",ee&&!v(n,_.noanimation)?n.addEventListener(ee,function e(){n.removeEventListener(ee,e),t.style.overflowY="auto"}):t.style.overflowY="auto",z([document.documentElement,document.body,t],_.shown),e.heightAuto&&e.backdrop&&!e.toast&&z([document.documentElement,document.body],_["height-auto"]),T()&&(se(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!v(document.body,_.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",z(document.body,_.iosfix)}}(),"undefined"!=typeof window&&ce()&&(ue(),window.addEventListener("resize",ue)),f(document.body.children).forEach(function(e){e===w()||function(e,t){if("function"==typeof e.contains)return e.contains(t)}(e,w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),M()||le.previousActiveElement||(le.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var Ve,qe=Object.freeze({hideLoading:Ee,disableLoading:Ee,getInput:function(e){var t=Pe.innerParams.get(this),n=Pe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return U(n.content,_[e]);case"checkbox":return n.popup.querySelector(".".concat(_.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(_.radio," input:checked"))||n.popup.querySelector(".".concat(_.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(_.range," input"));default:return U(n.content,_.input)}},enableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:Le,resetValidationMessage:Oe,resetValidationError:function(){m("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"),Oe.bind(this)()},showValidationError:function(e){m("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"),Le.bind(this)(e)},getProgressSteps:function(){return Pe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=r({},Pe.innerParams.get(this),{progressSteps:e});Pe.innerParams.set(this,t),re(t)},showProgressSteps:function(){var e=Pe.domCache.get(this);K(e.progressSteps)},hideProgressSteps:function(){var e=Pe.domCache.get(this);F(e.progressSteps)},_main:function(e){var T=this;ye(e);var M=r({},me,e);!function(t){var e;t.inputValidator||Object.keys(Me).forEach(function(e){t.input===e&&(t.inputValidator=t.expectRejections?Me[e]:De.adaptInputValidator(Me[e]))}),t.validationMessage&&("object"!==q(t.extraParams)&&(t.extraParams={}),t.extraParams.validationMessage=t.validationMessage),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(R('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=k(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?X(t):n||X(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=w(),c=$(),u=Y();if(ae(t),ne(t),"string"==typeof t.backdrop?w().style.background=t.backdrop:t.backdrop||z([document.documentElement,document.body],_["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&R('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in _?z(s,_[t.position]):(R('The "position" parameter is not valid, defaulting to "center"'),z(s,_.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in _&&z(s,_[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),K(c)):F(c),e.className=_.popup,t.toast?(z([document.documentElement,document.body],_["toast-shown"]),z(e,_.toast)):z(e,_.modal),t.customClass&&z(e,t.customClass),re(t),oe(t),ie(t),te(t),G(t.footer,u),!0===t.animation?W(e,_.noanimation):z(e,_.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&R("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(M),Object.freeze(M),Pe.innerParams.set(this,M),le.timeout&&(le.timeout.stop(),delete le.timeout),clearTimeout(le.restoreFocusTimeout);var j={popup:k(),container:w(),content:B(),actions:Q(),confirmButton:L(),cancelButton:O(),closeButton:$(),validationMessage:E(),progressSteps:P()};Pe.domCache.set(this,j);var V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?t(e):t({value:e})},c=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?n(e):t({dismiss:e})},u=function(e){V.closePopup(M.onClose,M.onAfterClose),n(e)};M.timer&&(le.timeout=new Te(function(){c("timer"),delete le.timeout},M.timer)),M.input&&setTimeout(function(){var e=T.getInput();e&&N(e)},0);for(var l=function(t){if(M.showLoaderOnConfirm&&V.showLoading(),M.preConfirm){T.resetValidationMessage();var e=Promise.resolve().then(function(){return M.preConfirm(t,M.extraParams)});M.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationMessage(e)}):e.then(function(e){Z(j.validationMessage)||!1===e?T.hideLoading():o(e||t)},function(e){return u(e)})}else o(t)},e=function(e){var t=e.target,n=j.confirmButton,o=j.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&V.isVisible())if(T.disableButtons(),M.input){var a=function(){var e=T.getInput();if(!e)return null;switch(M.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return M.inputAutoTrim?e.value.trim():e.value}}();if(M.inputValidator){T.disableInput();var s=Promise.resolve().then(function(){return M.inputValidator(a,M.extraParams)});M.expectRejections?s.then(function(){T.enableButtons(),T.enableInput(),l(a)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationMessage(e)}):s.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationMessage(e):l(a)},function(e){return u(e)})}else T.getInput().checkValidity()?l(a):(T.enableButtons(),T.showValidationMessage(M.validationMessage))}else l(!0);else r&&V.isVisible()&&(T.disableButtons(),c(V.DismissReason.cancel))}},i=j.popup.querySelectorAll("button"),r=0;r<i.length;r++)i[r].onclick=e,i[r].onmouseover=e,i[r].onmouseout=e,i[r].onmousedown=e;if(j.closeButton.onclick=function(){c(V.DismissReason.close)},M.toast)j.popup.onclick=function(){M.showConfirmButton||M.showCancelButton||M.showCloseButton||M.input||c(V.DismissReason.close)};else{var a=!1;j.popup.onmousedown=function(){j.container.onmouseup=function(e){j.container.onmouseup=void 0,e.target===j.container&&(a=!0)}},j.container.onmousedown=function(){j.popup.onmouseup=function(e){j.popup.onmouseup=void 0,(e.target===j.popup||j.popup.contains(e.target))&&(a=!0)}},j.container.onclick=function(e){a?a=!1:e.target===j.container&&H(M.allowOutsideClick)&&c(V.DismissReason.backdrop)}}M.reverseButtons?j.confirmButton.parentNode.insertBefore(j.cancelButton,j.confirmButton):j.confirmButton.parentNode.insertBefore(j.confirmButton,j.cancelButton);var s=function(e,t){for(var n=J(M.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();j.popup.focus()};le.keydownHandlerAdded&&(le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),M.toast||(le.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=J(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?s(i,-1):s(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===j.confirmButton&&Z(j.cancelButton)?j.cancelButton.focus():document.activeElement===j.cancelButton&&Z(j.confirmButton)&&j.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==H(t.allowEscapeKey)||(e.preventDefault(),c(V.DismissReason.esc));else if(e.target&&T.getInput()&&e.target.outerHTML===T.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;V.clickConfirm(),e.preventDefault()}}(e,M)},le.keydownTarget=M.keydownListenerCapture?window:j.popup,le.keydownListenerCapture=M.keydownListenerCapture,le.keydownTarget.addEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!0),T.enableButtons(),T.hideLoading(),T.resetValidationMessage(),M.toast&&(M.input||M.footer||M.showCloseButton)?z(document.body,_["toast-column"]):W(document.body,_["toast-column"]);for(var d,p,f=["input","file","range","select","radio","checkbox","textarea"],m=function(e){e.placeholder&&!M.inputPlaceholder||(e.placeholder=M.inputPlaceholder)},h=0;h<f.length;h++){var g=_[f[h]],b=U(j.content,g);if(d=T.getInput(f[h])){for(var v in d.attributes)if(d.attributes.hasOwnProperty(v)){var y=d.attributes[v].name;"type"!==y&&"value"!==y&&d.removeAttribute(y)}for(var w in M.inputAttributes)"range"===f[h]&&"placeholder"===w||d.setAttribute(w,M.inputAttributes[w])}b.className=g,M.inputClass&&z(b,M.inputClass),F(b)}switch(M.input){case"text":case"email":case"password":case"number":case"tel":case"url":d=U(j.content,_.input),"string"==typeof M.inputValue||"number"==typeof M.inputValue?d.value=M.inputValue:D(M.inputValue)||R('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(q(M.inputValue),'"')),m(d),d.type=M.input,K(d);break;case"file":m(d=U(j.content,_.file)),d.type=M.input,K(d);break;case"range":var C=U(j.content,_.range),k=C.querySelector("input"),x=C.querySelector("output");k.value=M.inputValue,k.type=M.input,x.value=M.inputValue,K(C);break;case"select":var A=U(j.content,_.select);if(A.innerHTML="",M.inputPlaceholder){var B=document.createElement("option");B.innerHTML=M.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,A.appendChild(B)}p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,M.inputValue.toString()===t.toString()&&(o.selected=!0),A.appendChild(o)}),K(A),A.focus()};break;case"radio":var S=U(j.content,_.radio);S.innerHTML="",p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=_.radio,o.value=t,M.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=_.label,i.appendChild(o),i.appendChild(r),S.appendChild(i)}),K(S);var t=S.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var P=U(j.content,_.checkbox),E=T.getInput("checkbox");E.type="checkbox",E.value=1,E.id=_.checkbox,E.checked=Boolean(M.inputValue),P.querySelector("span").innerHTML=M.inputPlaceholder,K(P);break;case"textarea":var L=U(j.content,_.textarea);L.value=M.inputValue,m(L),K(L);break;case null:break;default:I('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(M.input,'"'))}if("select"===M.input||"radio"===M.input){var O=function(e){return p((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};D(M.inputOptions)?(V.showLoading(),M.inputOptions.then(function(e){T.hideLoading(),O(e)})):"object"===q(M.inputOptions)?O(M.inputOptions):I("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(q(M.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(M.input)&&D(M.inputValue)&&(V.showLoading(),F(d),M.inputValue.then(function(e){d.value="number"===M.input?parseFloat(e)||0:e+"",K(d),d.focus(),T.hideLoading()}).catch(function(e){I("Error in inputValue promise: "+e),d.value="",K(d),d.focus(),T.hideLoading()}));je(M),M.toast||(H(M.allowEnterKey)?M.focusCancel&&Z(j.cancelButton)?j.cancelButton.focus():M.focusConfirm&&Z(j.confirmButton)?j.confirmButton.focus():s(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),j.container.scrollTop=0})}});function Re(){if("undefined"!=typeof window){"undefined"==typeof Promise&&I("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Ve=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);Pe.promise.set(this,i)}}Re.prototype.then=function(e,t){return Pe.promise.get(this).then(e,t)},Re.prototype.catch=function(e){return Pe.promise.get(this).catch(e)},Re.prototype.finally=function(e){return Pe.promise.get(this).finally(e)},r(Re.prototype,qe),r(Re,Ae),Object.keys(qe).forEach(function(t){Re[t]=function(){var e;if(Ve)return(e=Ve)[t].apply(e,arguments)}}),Re.DismissReason=e,Re.noop=function(){};var Ie,He,De=fe((Ie=Re,He=function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,Ie),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},Ce,e))}}],[{key:"setDefaults",value:function(t){if(m(we),!t||"object"!==q(t))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ye(t),Object.keys(t).forEach(function(e){Ie.isValidParameter(e)&&(Ce[e]=t[e])})}},{key:"resetDefaults",value:function(){m(we),Ce={}}}]),t}(),"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&He.setDefaults(window._swalDefaults),He));return De.default=De}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="7.32.4",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["Swup"]=n();else t["Swup"]=n()})(window,function(){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.query=r;t.queryAll=i;function r(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof e!=="string"){return e}return t.querySelector(e)}function i(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof e!=="string"){return e}return Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){i(this,e);this.link=document.createElement("a")}r(e,[{key:"setPath",value:function e(t){this.link.href=t}},{key:"getPath",value:function e(){var t=this.link.pathname;if(t[0]!="/"){t="/"+t}return t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;if(t[0]!="/"){t="/"+t}return t}},{key:"getHash",value:function e(){return this.link.hash}}]);return e}();t.default=o},function(e,t,n){"use strict";var r=n(3);var i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=n(4);var s=$(o);var a=n(6);var l=$(a);var u=n(1);var c=$(u);var d=n(7);var f=$(d);var h=n(8);var p=$(h);var g=n(9);var m=$(g);var v=n(10);var w=$(v);var y=n(11);var E=$(y);var b=n(12);var P=$(b);var S=n(13);var T=$(S);var k=n(14);var L=$(k);var x=n(15);var A=$(x);var H=n(16);var C=$(H);var M=n(17);var O=$(M);var _=n(18);var R=$(_);var j=n(19);var q=$(j);var U=n(20);var D=$(U);var F=n(21);var I=$(F);var B=n(22);var N=$(B);var K=n(23);var W=$(K);var V=n(24);var z=$(V);var X=n(25);var Y=$(X);var G=n(0);function $(e){return e&&e.__esModule?e:{default:e}}function J(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var Q=function(){function e(t){J(this,e);var n={cache:true,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:false,scroll:true,doScrollingRightAway:false,animateScroll:true,scrollFriction:.3,scrollAcceleration:.04,preload:true,support:true,plugins:[],skipPopStateHandling:function e(t){if(t.state&&t.state.source=="swup"){return false}return true},animateHistoryBrowsing:false,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"};this.transition={};var i=r({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]};this.scrollToElement=null;this.preloadPromise=null;this.options=i;this.plugins=[];this.getUrl=L.default;this.cache=new l.default;this.link=new c.default;this.transitionEndEvent=(0,f.default)();this.getDataFromHtml=m.default;this.getPage=p.default;this.scrollTo=A.default;this.loadPage=w.default;this.renderPage=E.default;this.createState=P.default;this.triggerEvent=T.default;this.classify=C.default;this.doScrolling=O.default;this.markSwupElements=R.default;this.on=q.default;this.off=D.default;this.updateTransition=I.default;this.preloadPage=N.default;this.preloadPages=W.default;this.usePlugin=z.default;this.log=Y.default;this.enable=this.enable;this.destroy=this.destroy;if(this.options.debugMode){window.swup=this}this.getUrl();this.enable()}i(e,[{key:"enable",value:function e(){var t=this;if(this.options.support){if(!("pushState"in window.history)){console.warn("pushState is not supported");return}if((0,f.default)()){this.transitionEndEvent=(0,f.default)()}else{console.warn("transitionEnd detection is not supported");return}if(typeof Promise==="undefined"||Promise.toString().indexOf("[native code]")===-1){console.warn("Promise is not supported");return}}this.delegatedListeners={};this.delegatedListeners.click=(0,s.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this));this.delegatedListeners.mouseover=(0,s.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this));this.delegatedListeners.formSubmit=(0,s.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this));window.addEventListener("popstate",this.popStateHandler.bind(this));var n=this.getDataFromHtml(document.documentElement.outerHTML);n.url=this.currentUrl;if(this.options.cache){this.cache.cacheUrl(n,this.options.debugMode)}this.markSwupElements(document.documentElement);this.options.plugins.forEach(function(e){return t.usePlugin(e)});window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href);if(this.options.animateHistoryBrowsing){window.history.scrollRestoration="manual"}this.triggerEvent("enabled");document.documentElement.classList.add("swup-enabled");this.triggerEvent("pageView");this.preloadPages()}},{key:"destroy",value:function e(){this.delegatedListeners.click.destroy();this.delegatedListeners.mouseover.destroy();window.removeEventListener("popstate",this.popStateHandler.bind(this));this.cache.empty();(0,G.queryAll)("[data-swup]").forEach(function(e){delete e.dataset.swup});this.off();this.triggerEvent("disabled");document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function e(t){if(!t.metaKey){if(t.button===0){this.triggerEvent("clickLink",t);var n=new c.default;t.preventDefault();n.setPath(t.delegateTarget.href);if(n.getAddress()==this.currentUrl||n.getAddress()==""){if(n.getHash()!=""){this.triggerEvent("samePageWithHash",t);var r=document.querySelector(n.getHash());if(r!=null){if(this.options.scroll){var i=r.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,i)}history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else{console.warn("Element for offset not found ("+n.getHash()+")")}}else{this.triggerEvent("samePage",t);if(this.options.scroll){this.scrollTo(document.body,0,1)}}}else{if(n.getHash()!=""){this.scrollToElement=n.getHash()}var o=t.delegateTarget.dataset.swupTransition;this.loadPage({url:n.getAddress(),customTransition:o},false)}}}else{this.triggerEvent("openPageInNewTab",t)}}},{key:"linkMouseoverHandler",value:function e(t){var n=this;this.triggerEvent("hoverLink",t);if(this.options.preload){var r=new c.default;r.setPath(t.delegateTarget.href);if(r.getAddress()!=this.currentUrl&&!this.cache.exists(r.getAddress())&&this.preloadPromise==null){this.preloadPromise=new Promise(function(e,i){n.getPage({url:r.getAddress()},function(o,s){if(s.status===500){n.triggerEvent("serverError",t);i(r.getAddress());return}else{var a=n.getDataFromHtml(o,s);if(a!=null){a.url=r.getAddress();n.cache.cacheUrl(a,n.options.debugMode);n.triggerEvent("pagePreloaded",t)}else{i(r.getAddress());return}}e();n.preloadPromise=null})});this.preloadPromise.route=r.getAddress()}}}},{key:"formSubmitHandler",value:function e(t){if(!t.metaKey){this.triggerEvent("submitForm",t);t.preventDefault();var n=t.target;var r=new FormData(n);var i=new c.default;i.setPath(n.action);if(i.getHash()!=""){this.scrollToElement=i.getHash()}if(n.method.toLowerCase()!="get"){this.cache.remove(i.getAddress());this.loadPage({url:i.getAddress(),method:n.method,data:r})}else{var o=i.getAddress()||window.location.href;var s=(0,G.queryAll)("input, select",n);if(o.indexOf("?")==-1){o+="?"}else{o+="&"}s.forEach(function(e){if(e.type=="checkbox"||e.type=="radio"){if(e.checked){o+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}}else{o+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}});o=o.slice(0,-1);this.cache.remove(o);this.loadPage({url:o})}}else{this.triggerEvent("openFormSubmitInNewTab",t)}}},{key:"popStateHandler",value:function e(t){var n=new c.default;if(this.options.skipPopStateHandling(t))return;n.setPath(t.state?t.state.url:window.location.pathname);if(n.getHash()!=""){this.scrollToElement=n.getHash()}else{t.preventDefault()}this.triggerEvent("popState",t);this.loadPage({url:n.getAddress()},t)}}]);return e}();t.default=Q},function(e,t,n){var r=n(5);function i(e,t,n,r,i){var s=o.apply(this,arguments);e.addEventListener(n,s,i);return{destroy:function(){e.removeEventListener(n,s,i)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t);if(n.delegateTarget){i.call(e,n)}}}e.exports=i},function(e,t){var n=9;if(typeof Element!=="undefined"&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if(typeof e.matches==="function"&&e.matches(t)){return e}e=e.parentNode}}e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){i(this,e);this.pages={};this.count=0;this.last=null}r(e,[{key:"cacheUrl",value:function e(t,n){this.count++;if(t.url in this.pages===false){this.pages[t.url]=t}this.last=this.pages[t.url];if(n){this.displayCache()}}},{key:"getPage",value:function e(t){return this.pages[t]}},{key:"displayCache",value:function e(){console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")");for(var t in this.pages){console.log(this.pages[t])}console.groupEnd()}},{key:"exists",value:function e(t){if(t in this.pages)return true;return false}},{key:"empty",value:function e(t){this.pages={};this.count=0;this.last=null;if(t){console.log("Cache cleared")}}},{key:"remove",value:function e(t){delete this.pages[t]}}]);return e}();t.default=o},function(e,t,n){"use strict";e.exports=function e(){var t=document.createElement("div");var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var r in n){if(t.style[r]!==undefined){return n[r]}}return false}},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};e.exports=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var n={url:window.location.pathname+window.location.search,method:"GET",data:null};var i=r({},n,e);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===4){if(o.status!==500){t(o.responseText,o)}else{t(null,o)}}};o.open(i.method,i.url,true);o.setRequestHeader("X-Requested-With","swup");o.send(i.data);return o}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){var n=this;var i=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>");var o=document.createElement("div");o.innerHTML=i;var s=[];for(var a=0;a<this.options.elements.length;a++){if(o.querySelector(this.options.elements[a])==null){console.warn("Element "+this.options.elements[a]+" is not found in cached page.");return null}else{(0,r.queryAll)(this.options.elements[a]).forEach(function(e,t){(0,r.queryAll)(n.options.elements[a],o)[t].dataset.swup=s.length;s.push((0,r.queryAll)(n.options.elements[a],o)[t].outerHTML)})}}var l={title:o.querySelector("title").innerText,pageClass:o.querySelector("#swupBody").className,originalContent:e,blocks:s,responseURL:t!=null?t.responseURL:window.location.href};return l}},function(e,t,n){"use strict";var r=n(0);var i=Array.prototype.forEach;e.exports=function(e,t){var n=this;if(this.options.doScrollingRightAway&&!this.scrollToElement){this.doScrolling(t)}var o=[];if(e.customTransition!=null){this.updateTransition(window.location.pathname,e.url,e.customTransition);document.documentElement.classList.add("to-"+this.classify(e.customTransition))}else{this.updateTransition(window.location.pathname,e.url)}if(!t||this.options.animateHistoryBrowsing){this.triggerEvent("animationOutStart");document.documentElement.classList.add("is-changing");document.documentElement.classList.add("is-leaving");document.documentElement.classList.add("is-animating");if(t){document.documentElement.classList.add("is-popstate")}document.documentElement.classList.add("to-"+this.classify(e.url));var s=(0,r.queryAll)(this.options.animationSelector);i.call(s,function(e){var t=new Promise(function(t){e.addEventListener(n.transitionEndEvent,function(n){if(e==n.target){t()}})});o.push(t)});Promise.all(o).then(function(){n.triggerEvent("animationOutDone")});if(this.scrollToElement!=null){var a=e.url+this.scrollToElement}else{var a=e.url}if(!t)this.createState(a)}else{this.triggerEvent("animationSkipped")}if(this.cache.exists(e.url)){var l=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else{if(!this.preloadPromise||this.preloadPromise.route!=e.url){var l=new Promise(function(t,r){n.getPage(e,function(i,o){if(o.status===500){n.triggerEvent("serverError");r(e.url);return}else{var s=n.getDataFromHtml(i,o);if(s!=null){s.url=e.url}else{r(e.url);return}n.cache.cacheUrl(s,n.options.debugMode);n.triggerEvent("pageLoaded")}t()})})}else{var l=this.preloadPromise}}Promise.all(o.concat([l])).then(function(){n.renderPage(n.cache.getPage(e.url),t);n.preloadPromise=null}).catch(function(e){n.options.skipPopStateHandling=function(){window.location=e;return true};window.history.go(-1)})}},function(e,t,n){"use strict";var r=n(0);var i=n(1);var o=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var a=Array.prototype.forEach;e.exports=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var i=new o.default;i.setPath(e.responseURL);if(window.location.pathname!==i.getPath()){window.history.replaceState({url:i.getPath(),random:Math.random(),source:"swup"},document.title,i.getPath())}if(!t||this.options.animateHistoryBrowsing){document.documentElement.classList.add("is-rendering")}this.triggerEvent("willReplaceContent");for(var s=0;s<e.blocks.length;s++){document.body.querySelector('[data-swup="'+s+'"]').outerHTML=e.blocks[s]}document.title=e.title;if(this.options.pageClassPrefix!==false){document.body.className.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.remove(e)}})}if(e.pageClass!=""){e.pageClass.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.add(e)}})}this.triggerEvent("contentReplaced");this.triggerEvent("pageView");if(!this.options.cache){this.cache.empty(this.options.debugMode)}setTimeout(function(){if(!t||n.options.animateHistoryBrowsing){n.triggerEvent("animationInStart");document.documentElement.classList.remove("is-animating")}},10);if(!this.options.doScrollingRightAway||this.scrollToElement){this.doScrolling(t)}var l=(0,r.queryAll)(this.options.animationSelector);var u=[];a.call(l,function(e){var t=new Promise(function(t){e.addEventListener(n.transitionEndEvent,function(n){if(e==n.target){t()}})});u.push(t)});this.preloadPages();if(!t||this.options.animateHistoryBrowsing){Promise.all(u).then(function(){n.triggerEvent("animationInDone");document.documentElement.className.split(" ").forEach(function(e){if(new RegExp("^to-").test(e)||e==="is-changing"||e==="is-rendering"||e==="is-popstate"){document.documentElement.classList.remove(e)}})})}this.getUrl();this.scrollToElement=null}},function(e,t,n){"use strict";e.exports=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){"use strict";e.exports=function(e,t){if(this.options.debugMode&&t){console.groupCollapsed("%cswup:"+"%c"+e,"color: #343434","color: #009ACD");console.log(t);console.groupEnd()}else if(this.options.debugMode){console.log("%cswup:"+"%c"+e,"color: #343434","color: #009ACD")}this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},function(e,t,n){"use strict";e.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.options.animateScroll;var i=1-this.options.scrollFriction;var o=this.options.scrollAcceleration;var s=0;var a=0;var l=0;var u=0;var c=0;var d=null;function f(){return document.body.scrollTop||document.documentElement.scrollTop}var h=function e(){var t=p();m();if(c===1&&l>s||c===-1&&l<s){d=requestAnimationFrame(e)}else{window.scrollTo(0,l);n.triggerEvent("scrollDone")}};function p(){var e=u-s;var t=e*o;g(t);a*=i;s+=a;return e}var g=function e(t){a+=t};var m=function e(){window.scrollTo(0,s)};window.addEventListener("mousewheel",function(e){if(d){cancelAnimationFrame(d);d=null}},{passive:true});var v=function e(t,r){s=f();c=s>t?-1:1;u=t+c;l=t;a=0;if(s!=l){h()}else{n.triggerEvent("scrollDone")}};this.triggerEvent("scrollStart");if(r==0){window.scrollTo(0,t);this.triggerEvent("scrollDone")}else{v(t)}}},function(e,t,n){"use strict";e.exports=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");if(t[0]=="/")t=t.splice(1);if(t=="")t="homepage";return t}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.scroll&&(!e||this.options.animateHistoryBrowsing)){if(this.scrollToElement!=null){var t=document.querySelector(this.scrollToElement);if(t!=null){var n=t.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else{console.warn("Element for offset not found ("+this.scrollToElement+")")}this.scrollToElement=null}else{this.scrollTo(document.body,0)}}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t=this;var n=0;for(var i=0;i<this.options.elements.length;i++){if(e.querySelector(this.options.elements[i])==null){console.warn("Element "+this.options.elements[i]+" is not in current page.")}else{(0,r.queryAll)(this.options.elements[i]).forEach(function(o,s){(0,r.queryAll)(t.options.elements[i],e)[s].dataset.swup=n;n++})}}}},function(e,t,n){"use strict";e.exports=function e(t,n){if(this._handlers[t]){this._handlers[t].push(n)}else{console.warn("Unsupported event "+t+".")}}},function(e,t,n){"use strict";e.exports=function e(t,n){var r=this;if(t!=null){if(n!=null){if(this._handlers[t]&&this._handlers[t].filter(function(e){return e===n}).length){var i=this._handlers[t].filter(function(e){return e===n})[0];var o=this._handlers[t].indexOf(i);if(o>-1){this._handlers[t].splice(o,1)}}else{console.warn("Handler for event '"+t+"' no found.")}}else{this._handlers[t]=[]}}else{Object.keys(this._handlers).forEach(function(e){r._handlers[e]=[]})}}},function(e,t,n){"use strict";e.exports=function(e,t,n){if(e=="/"){e="/homepage"}if(t=="/"){t="/homepage"}this.transition={from:e.replace("/",""),to:t.replace("/","")};if(n){this.transition.custom=n}}},function(e,t,n){"use strict";var r=n(1);var i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=function(e){var t=this;var n=new i.default;n.setPath(e);if(n.getAddress()!=this.currentUrl&&!this.cache.exists(n.getAddress())&&this.preloadPromise==null){this.getPage({url:n.getAddress()},function(e,r){if(r.status===500){t.triggerEvent("serverError");return}else{var i=t.getDataFromHtml(e,r);if(i!=null){i.url=n.getAddress();t.cache.cacheUrl(i,t.options.debugMode);t.triggerEvent("pagePreloaded")}}})}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(){var e=this;if(this.options.preload){(0,r.queryAll)("[data-swup-preload]").forEach(function(t){e.preloadPage(t.href)})}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;t=Object.assign({},e.options,t);e.options=t;var r=function e(){var t=n.cache.getPage(window.location.pathname+window.location.search);var r=document.createElement("html");r.innerHTML=t.originalContent;return r};this.plugins.push(e);e.exec(t,this,r);return this.plugins}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.debugMode){console.log(e+"%c","color: #009ACD")}}}])});
(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["Swupjs"]=n();else t["Swupjs"]=n()})(window,function(){return function(e){var t={};function n(i){if(t[i]){return t[i].exports}var o=t[i]={i,l:false,exports:{}};e[i].call(o.exports,o,o.exports,n);o.l=true;return o.exports}n.m=e;n.c=t;n.d=function(e,t,i){if(!n.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:i})}};n.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=30)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.query=i;t.queryAll=o;function i(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof e!=="string"){return e}return t.querySelector(e)}function o(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof e!=="string"){return e}return Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var r=function(){function e(){o(this,e);this.link=document.createElement("a")}i(e,[{key:"setPath",value:function e(t){this.link.href=t}},{key:"getPath",value:function e(){var t=this.link.pathname;if(t[0]!="/"){t="/"+t}return t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;if(t[0]!="/"){t="/"+t}return t}},{key:"getHash",value:function e(){return this.link.hash}}]);return e}();t.default=r},function(e,t,n){"use strict";e.exports=function(e){return new Promise(function(t){e(t)})}},function(e,t,n){"use strict";e.exports=function(e,t,n){var i=null;var o=null;var r=0;Object.keys(t).forEach(function(n){var s=0;if(n.includes(">")){var a=n.split(">");var l=a[0];var u=a[1];if(u==e.to||u=="*"){s++}if(u==e.custom){s=s+2}if(l==e.from||l=="*"){s++}}if(s>r){r=s;o=n;i=t[n]}});if(i==null||r==1){i=t["*"];o="*"}return i[n]}},function(e,t,n){"use strict";var i=n(1);var o=r(i);function r(e){return e&&e.__esModule?e:{default:e}}var s=Array.prototype.forEach;e.exports=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var i=new o.default;i.setPath(e.responseURL);if(window.location.pathname!==i.getPath()){window.history.replaceState({url:i.getPath(),random:Math.random(),source:"swup"},document.title,i.getPath())}if(!t||this.options.animateHistoryBrowsing){document.documentElement.classList.add("is-rendering")}this.triggerEvent("willReplaceContent");for(var r=0;r<e.blocks.length;r++){document.body.querySelector('[data-swup="'+r+'"]').outerHTML=e.blocks[r]}document.title=e.title;if(this.options.pageClassPrefix!==false){document.body.className.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.remove(e)}})}if(e.pageClass!=""){e.pageClass.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.add(e)}})}this.triggerEvent("contentReplaced");this.triggerEvent("pageView");if(!this.options.cache){this.cache.empty(this.options.debugMode)}if(!this.options.doScrollingRightAway||this.scrollToElement){this.doScrolling(t)}var s=[];if(!t||this.options.animateHistoryBrowsing){this.triggerEvent("animationInStart");var a=this.createAnimationPromise(this.getAnimation(this.transition,this.animations,"in"));s.push(a)}this.preloadPages();if(!t||this.options.animateHistoryBrowsing){Promise.all(s).then(function(){n.triggerEvent("animationInDone");document.documentElement.className.split(" ").forEach(function(e){if(new RegExp("^to-").test(e)||e==="is-changing"||e==="is-rendering"||e==="is-popstate"){document.documentElement.classList.remove(e)}})})}this.getUrl();this.scrollToElement=null}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;if(this.options.doScrollingRightAway&&!this.scrollToElement){this.doScrolling(t)}var i=[];if(e.customTransition!=null){this.updateTransition(window.location.pathname,e.url,e.customTransition);document.documentElement.classList.add("to-"+this.classify(e.customTransition))}else{this.updateTransition(window.location.pathname,e.url)}if(!t||this.options.animateHistoryBrowsing){this.triggerEvent("animationOutStart");document.documentElement.classList.add("is-changing");document.documentElement.classList.add("is-leaving");if(t){document.documentElement.classList.add("is-popstate")}document.documentElement.classList.add("to-"+this.classify(e.url));var o=this.createAnimationPromise(this.getAnimation(this.transition,this.animations,"out"));i.push(o);Promise.all(i).then(function(){n.triggerEvent("animationOutDone")});if(this.scrollToElement!=null){var r=e.url+this.scrollToElement}else{var r=e.url}if(!t)this.createState(r)}else{this.triggerEvent("animationSkipped")}if(this.cache.exists(e.url)){var s=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else{if(!this.preloadPromise||this.preloadPromise.route!=e.url){var s=new Promise(function(t,i){n.getPage(e,function(o,r){if(r.status===500){n.triggerEvent("serverError");i(e.url);return}else{var s=n.getDataFromHtml(o,r);if(s!=null){s.url=e.url}else{i(e.url);return}n.cache.cacheUrl(s,n.options.debugMode);n.triggerEvent("pageLoaded")}t()})})}else{var s=this.preloadPromise}}Promise.all(i.concat([s])).then(function(){n.renderPage(n.cache.getPage(e.url),t);n.preloadPromise=null}).catch(function(e){n.options.skipPopStateHandling=function(){window.location=e;return true};window.history.go(-1)})}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.debugMode){console.log(e+"%c","color: #009ACD")}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;t=Object.assign({},e.options,t);e.options=t;var i=function e(){var t=n.cache.getPage(window.location.pathname+window.location.search);var i=document.createElement("html");i.innerHTML=t.originalContent;return i};this.plugins.push(e);e.exec(t,this,i);return this.plugins}},function(e,t,n){"use strict";var i=n(0);e.exports=function(){var e=this;if(this.options.preload){(0,i.queryAll)("[data-swup-preload]").forEach(function(t){e.preloadPage(t.href)})}}},function(e,t,n){"use strict";var i=n(1);var o=r(i);function r(e){return e&&e.__esModule?e:{default:e}}e.exports=function(e){var t=this;var n=new o.default;n.setPath(e);if(n.getAddress()!=this.currentUrl&&!this.cache.exists(n.getAddress())&&this.preloadPromise==null){this.getPage({url:n.getAddress()},function(e,i){if(i.status===500){t.triggerEvent("serverError");return}else{var o=t.getDataFromHtml(e,i);if(o!=null){o.url=n.getAddress();t.cache.cacheUrl(o,t.options.debugMode);t.triggerEvent("pagePreloaded")}}})}}},function(e,t,n){"use strict";e.exports=function(e,t,n){if(e=="/"){e="/homepage"}if(t=="/"){t="/homepage"}this.transition={from:e.replace("/",""),to:t.replace("/","")};if(n){this.transition.custom=n}}},function(e,t,n){"use strict";e.exports=function e(t,n){var i=this;if(t!=null){if(n!=null){if(this._handlers[t]&&this._handlers[t].filter(function(e){return e===n}).length){var o=this._handlers[t].filter(function(e){return e===n})[0];var r=this._handlers[t].indexOf(o);if(r>-1){this._handlers[t].splice(r,1)}}else{console.warn("Handler for event '"+t+"' no found.")}}else{this._handlers[t]=[]}}else{Object.keys(this._handlers).forEach(function(e){i._handlers[e]=[]})}}},function(e,t,n){"use strict";e.exports=function e(t,n){if(this._handlers[t]){this._handlers[t].push(n)}else{console.warn("Unsupported event "+t+".")}}},function(e,t,n){"use strict";var i=n(0);e.exports=function(e){var t=this;var n=0;for(var o=0;o<this.options.elements.length;o++){if(e.querySelector(this.options.elements[o])==null){console.warn("Element "+this.options.elements[o]+" is not in current page.")}else{(0,i.queryAll)(this.options.elements[o]).forEach(function(r,s){(0,i.queryAll)(t.options.elements[o],e)[s].dataset.swup=n;n++})}}}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.scroll&&(!e||this.options.animateHistoryBrowsing)){if(this.scrollToElement!=null){var t=document.querySelector(this.scrollToElement);if(t!=null){var n=t.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else{console.warn("Element for offset not found ("+this.scrollToElement+")")}this.scrollToElement=null}else{this.scrollTo(document.body,0)}}}},function(e,t,n){"use strict";e.exports=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");if(t[0]=="/")t=t.splice(1);if(t=="")t="homepage";return t}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.options.animateScroll;var o=1-this.options.scrollFriction;var r=this.options.scrollAcceleration;var s=0;var a=0;var l=0;var u=0;var c=0;var d=null;function f(){return document.body.scrollTop||document.documentElement.scrollTop}var h=function e(){var t=p();g();if(c===1&&l>s||c===-1&&l<s){d=requestAnimationFrame(e)}else{window.scrollTo(0,l);n.triggerEvent("scrollDone")}};function p(){var e=u-s;var t=e*r;m(t);a*=o;s+=a;return e}var m=function e(t){a+=t};var g=function e(){window.scrollTo(0,s)};window.addEventListener("mousewheel",function(e){if(d){cancelAnimationFrame(d);d=null}},{passive:true});var v=function e(t,i){s=f();c=s>t?-1:1;u=t+c;l=t;a=0;if(s!=l){h()}else{n.triggerEvent("scrollDone")}};this.triggerEvent("scrollStart");if(i==0){window.scrollTo(0,t);this.triggerEvent("scrollDone")}else{v(t)}}},function(e,t,n){"use strict";e.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},function(e,t,n){"use strict";e.exports=function(e,t){if(this.options.debugMode&&t){console.groupCollapsed("%cswup:"+"%c"+e,"color: #343434","color: #009ACD");console.log(t);console.groupEnd()}else if(this.options.debugMode){console.log("%cswup:"+"%c"+e,"color: #343434","color: #009ACD")}this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},function(e,t,n){"use strict";e.exports=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){"use strict";var i=n(0);var o=n(1);var r=s(o);function s(e){return e&&e.__esModule?e:{default:e}}var a=Array.prototype.forEach;e.exports=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var o=new r.default;o.setPath(e.responseURL);if(window.location.pathname!==o.getPath()){window.history.replaceState({url:o.getPath(),random:Math.random(),source:"swup"},document.title,o.getPath())}if(!t||this.options.animateHistoryBrowsing){document.documentElement.classList.add("is-rendering")}this.triggerEvent("willReplaceContent");for(var s=0;s<e.blocks.length;s++){document.body.querySelector('[data-swup="'+s+'"]').outerHTML=e.blocks[s]}document.title=e.title;if(this.options.pageClassPrefix!==false){document.body.className.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.remove(e)}})}if(e.pageClass!=""){e.pageClass.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.add(e)}})}this.triggerEvent("contentReplaced");this.triggerEvent("pageView");if(!this.options.cache){this.cache.empty(this.options.debugMode)}setTimeout(function(){if(!t||n.options.animateHistoryBrowsing){n.triggerEvent("animationInStart");document.documentElement.classList.remove("is-animating")}},10);if(!this.options.doScrollingRightAway||this.scrollToElement){this.doScrolling(t)}var l=(0,i.queryAll)(this.options.animationSelector);var u=[];a.call(l,function(e){var t=new Promise(function(t){e.addEventListener(n.transitionEndEvent,function(n){if(e==n.target){t()}})});u.push(t)});this.preloadPages();if(!t||this.options.animateHistoryBrowsing){Promise.all(u).then(function(){n.triggerEvent("animationInDone");document.documentElement.className.split(" ").forEach(function(e){if(new RegExp("^to-").test(e)||e==="is-changing"||e==="is-rendering"||e==="is-popstate"){document.documentElement.classList.remove(e)}})})}this.getUrl();this.scrollToElement=null}},function(e,t,n){"use strict";var i=n(0);var o=Array.prototype.forEach;e.exports=function(e,t){var n=this;if(this.options.doScrollingRightAway&&!this.scrollToElement){this.doScrolling(t)}var r=[];if(e.customTransition!=null){this.updateTransition(window.location.pathname,e.url,e.customTransition);document.documentElement.classList.add("to-"+this.classify(e.customTransition))}else{this.updateTransition(window.location.pathname,e.url)}if(!t||this.options.animateHistoryBrowsing){this.triggerEvent("animationOutStart");document.documentElement.classList.add("is-changing");document.documentElement.classList.add("is-leaving");document.documentElement.classList.add("is-animating");if(t){document.documentElement.classList.add("is-popstate")}document.documentElement.classList.add("to-"+this.classify(e.url));var s=(0,i.queryAll)(this.options.animationSelector);o.call(s,function(e){var t=new Promise(function(t){e.addEventListener(n.transitionEndEvent,function(n){if(e==n.target){t()}})});r.push(t)});Promise.all(r).then(function(){n.triggerEvent("animationOutDone")});if(this.scrollToElement!=null){var a=e.url+this.scrollToElement}else{var a=e.url}if(!t)this.createState(a)}else{this.triggerEvent("animationSkipped")}if(this.cache.exists(e.url)){var l=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else{if(!this.preloadPromise||this.preloadPromise.route!=e.url){var l=new Promise(function(t,i){n.getPage(e,function(o,r){if(r.status===500){n.triggerEvent("serverError");i(e.url);return}else{var s=n.getDataFromHtml(o,r);if(s!=null){s.url=e.url}else{i(e.url);return}n.cache.cacheUrl(s,n.options.debugMode);n.triggerEvent("pageLoaded")}t()})})}else{var l=this.preloadPromise}}Promise.all(r.concat([l])).then(function(){n.renderPage(n.cache.getPage(e.url),t);n.preloadPromise=null}).catch(function(e){n.options.skipPopStateHandling=function(){window.location=e;return true};window.history.go(-1)})}},function(e,t,n){"use strict";var i=n(0);e.exports=function(e,t){var n=this;var o=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>");var r=document.createElement("div");r.innerHTML=o;var s=[];for(var a=0;a<this.options.elements.length;a++){if(r.querySelector(this.options.elements[a])==null){console.warn("Element "+this.options.elements[a]+" is not found in cached page.");return null}else{(0,i.queryAll)(this.options.elements[a]).forEach(function(e,t){(0,i.queryAll)(n.options.elements[a],r)[t].dataset.swup=s.length;s.push((0,i.queryAll)(n.options.elements[a],r)[t].outerHTML)})}}var l={title:r.querySelector("title").innerText,pageClass:r.querySelector("#swupBody").className,originalContent:e,blocks:s,responseURL:t!=null?t.responseURL:window.location.href};return l}},function(e,t,n){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n){if(Object.prototype.hasOwnProperty.call(n,i)){e[i]=n[i]}}}return e};e.exports=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var n={url:window.location.pathname+window.location.search,method:"GET",data:null};var o=i({},n,e);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4){if(r.status!==500){t(r.responseText,r)}else{t(null,r)}}};r.open(o.method,o.url,true);r.setRequestHeader("X-Requested-With","swup");r.send(o.data);return r}},function(e,t,n){"use strict";e.exports=function e(){var t=document.createElement("div");var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in n){if(t.style[i]!==undefined){return n[i]}}return false}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var r=function(){function e(){o(this,e);this.pages={};this.count=0;this.last=null}i(e,[{key:"cacheUrl",value:function e(t,n){this.count++;if(t.url in this.pages===false){this.pages[t.url]=t}this.last=this.pages[t.url];if(n){this.displayCache()}}},{key:"getPage",value:function e(t){return this.pages[t]}},{key:"displayCache",value:function e(){console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")");for(var t in this.pages){console.log(this.pages[t])}console.groupEnd()}},{key:"exists",value:function e(t){if(t in this.pages)return true;return false}},{key:"empty",value:function e(t){this.pages={};this.count=0;this.last=null;if(t){console.log("Cache cleared")}}},{key:"remove",value:function e(t){delete this.pages[t]}}]);return e}();t.default=r},function(e,t){var n=9;if(typeof Element!=="undefined"&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function o(e,t){while(e&&e.nodeType!==n){if(typeof e.matches==="function"&&e.matches(t)){return e}e=e.parentNode}}e.exports=o},function(e,t,n){var i=n(26);function o(e,t,n,i,o){var s=r.apply(this,arguments);e.addEventListener(n,s,o);return{destroy:function(){e.removeEventListener(n,s,o)}}}function r(e,t,n,o){return function(n){n.delegateTarget=i(n.target,t);if(n.delegateTarget){o.call(e,n)}}}e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n){if(Object.prototype.hasOwnProperty.call(n,i)){e[i]=n[i]}}}return e};var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,n,i){if(n)e(t.prototype,n);if(i)e(t,i);return t}}();var r=n(27);var s=G(r);var a=n(25);var l=G(a);var u=n(1);var c=G(u);var d=n(24);var f=G(d);var h=n(23);var p=G(h);var m=n(22);var g=G(m);var v=n(21);var w=G(v);var y=n(20);var E=G(y);var b=n(19);var P=G(b);var S=n(18);var T=G(S);var L=n(17);var k=G(L);var x=n(16);var A=G(x);var H=n(15);var O=G(H);var _=n(14);var C=G(_);var M=n(13);var R=G(M);var j=n(12);var q=G(j);var U=n(11);var D=G(U);var F=n(10);var B=G(F);var I=n(9);var N=G(I);var K=n(8);var V=G(K);var W=n(7);var z=G(W);var X=n(6);var Y=G(X);function G(e){return e&&e.__esModule?e:{default:e}}function $(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var J=function(){function e(t){$(this,e);var n={cache:true,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:false,scroll:true,doScrollingRightAway:false,animateScroll:true,scrollFriction:.3,scrollAcceleration:.04,preload:true,support:true,plugins:[],skipPopStateHandling:function e(t){if(t.state&&t.state.source=="swup"){return false}return true},animateHistoryBrowsing:false,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"};this.transition={};var o=i({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]};this.scrollToElement=null;this.preloadPromise=null;this.options=o;this.plugins=[];this.getUrl=k.default;this.cache=new l.default;this.link=new c.default;this.transitionEndEvent=(0,f.default)();this.getDataFromHtml=g.default;this.getPage=p.default;this.scrollTo=A.default;this.loadPage=w.default;this.renderPage=E.default;this.createState=P.default;this.triggerEvent=T.default;this.classify=O.default;this.doScrolling=C.default;this.markSwupElements=R.default;this.on=q.default;this.off=D.default;this.updateTransition=B.default;this.preloadPage=N.default;this.preloadPages=V.default;this.usePlugin=z.default;this.log=Y.default;this.enable=this.enable;this.destroy=this.destroy;if(this.options.debugMode){window.swup=this}this.getUrl();this.enable()}o(e,[{key:"enable",value:function e(){var t=this;if(this.options.support){if(!("pushState"in window.history)){console.warn("pushState is not supported");return}if((0,f.default)()){this.transitionEndEvent=(0,f.default)()}else{console.warn("transitionEnd detection is not supported");return}if(typeof Promise==="undefined"||Promise.toString().indexOf("[native code]")===-1){console.warn("Promise is not supported");return}}this.delegatedListeners={};this.delegatedListeners.click=(0,s.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this));this.delegatedListeners.mouseover=(0,s.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this));this.delegatedListeners.formSubmit=(0,s.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this));window.addEventListener("popstate",this.popStateHandler.bind(this));var n=this.getDataFromHtml(document.documentElement.outerHTML);n.url=this.currentUrl;if(this.options.cache){this.cache.cacheUrl(n,this.options.debugMode)}this.markSwupElements(document.documentElement);this.options.plugins.forEach(function(e){return t.usePlugin(e)});window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href);if(this.options.animateHistoryBrowsing){window.history.scrollRestoration="manual"}this.triggerEvent("enabled");document.documentElement.classList.add("swup-enabled");this.triggerEvent("pageView");this.preloadPages()}},{key:"destroy",value:function e(){this.delegatedListeners.click.destroy();this.delegatedListeners.mouseover.destroy();window.removeEventListener("popstate",this.popStateHandler.bind(this));this.cache.empty();document.querySelectorAll("[data-swup]").forEach(function(e){delete e.dataset.swup});this.off();this.triggerEvent("disabled");document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function e(t){if(!t.metaKey){if(t.button===0){this.triggerEvent("clickLink",t);var n=new c.default;t.preventDefault();n.setPath(t.delegateTarget.href);if(n.getAddress()==this.currentUrl||n.getAddress()==""){if(n.getHash()!=""){this.triggerEvent("samePageWithHash",t);var i=document.querySelector(n.getHash());if(i!=null){if(this.options.scroll){var o=i.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,o)}history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else{console.warn("Element for offset not found ("+n.getHash()+")")}}else{this.triggerEvent("samePage",t);if(this.options.scroll){this.scrollTo(document.body,0,1)}}}else{if(n.getHash()!=""){this.scrollToElement=n.getHash()}var r=t.delegateTarget.dataset.swupTransition;this.loadPage({url:n.getAddress(),customTransition:r},false)}}}else{this.triggerEvent("openPageInNewTab",t)}}},{key:"linkMouseoverHandler",value:function e(t){var n=this;this.triggerEvent("hoverLink",t);if(this.options.preload){var i=new c.default;i.setPath(t.delegateTarget.href);if(i.getAddress()!=this.currentUrl&&!this.cache.exists(i.getAddress())&&this.preloadPromise==null){this.preloadPromise=new Promise(function(e,o){n.getPage({url:i.getAddress()},function(r,s){if(s.status===500){n.triggerEvent("serverError",t);o(i.getAddress());return}else{var a=n.getDataFromHtml(r,s);if(a!=null){a.url=i.getAddress();n.cache.cacheUrl(a,n.options.debugMode);n.triggerEvent("pagePreloaded",t)}else{o(i.getAddress());return}}e();n.preloadPromise=null})});this.preloadPromise.route=i.getAddress()}}}},{key:"formSubmitHandler",value:function e(t){if(!t.metaKey){this.triggerEvent("submitForm",t);t.preventDefault();var n=t.target;var i=new FormData(n);var o=new c.default;o.setPath(n.action);if(o.getHash()!=""){this.scrollToElement=o.getHash()}if(n.method.toLowerCase()!="get"){this.cache.remove(o.getAddress());this.loadPage({url:o.getAddress(),method:n.method,data:i})}else{var r=o.getAddress()||window.location.href;var s=n.querySelectorAll("input, select");if(r.indexOf("?")==-1){r+="?"}else{r+="&"}s.forEach(function(e){if(e.type=="checkbox"||e.type=="radio"){if(e.checked){r+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}}else{r+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}});r=r.slice(0,-1);this.cache.remove(r);this.loadPage({url:r})}}else{this.triggerEvent("openFormSubmitInNewTab",t)}}},{key:"popStateHandler",value:function e(t){var n=new c.default;if(this.options.skipPopStateHandling(t))return;n.setPath(t.state?t.state.url:window.location.pathname);if(n.getHash()!=""){this.scrollToElement=n.getHash()}else{t.preventDefault()}this.triggerEvent("popState",t);this.loadPage({url:n.getAddress()},t)}}]);return e}();t.default=J},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n){if(Object.prototype.hasOwnProperty.call(n,i)){e[i]=n[i]}}}return e};var o=n(28);var r=p(o);var s=n(5);var a=p(s);var l=n(4);var u=p(l);var c=n(3);var d=p(c);var f=n(2);var h=p(f);function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function g(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function v(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var w=function(e){v(t,e);function t(e){m(this,t);var n={animations:{"*":{out:function e(t){t()},in:function e(t){t()}}}};var o=i({},n,e);var r=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o));r.loadPage=a.default;r.renderPage=u.default;r.getAnimation=d.default;r.createAnimationPromise=h.default;r.animations=o.animations;return r}return t}(r.default);t.default=w},function(e,t,n){"use strict";var i=n(29);var o=r(i);function r(e){return e&&e.__esModule?e:{default:e}}e.exports=o.default}])});
/*!
   --------------------------------
   Waterfall.js
   --------------------------------
   + https://github.com/raphamorim/waterfall
   + version 1.1.0
   + Copyright 2016 Raphael Amorim & Israel Teixeira
   + Licensed under the MIT license
   + Documentation: https://github.com/raphamorim/waterfall
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('waterfall', function () {
      return factory
    })
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory
  } else {
    root.waterfall = factory
  }
}(this, function waterfall (container) {
  if (typeof (container) === 'string') {
    container = document.querySelector(container)
  }

  function style (el) {
    return window.getComputedStyle(el)
  }

  function margin (name, el) {
    return parseFloat(style(el)['margin' + name]) || 0
  }

  function px (n) { return parseFloat(n) + 'px' }
  function y (el) { return parseFloat(el.style.top) }
  function x (el) { return parseFloat(el.style.left) }
  function width (el) { return parseFloat(style(el).width) }
  function height (el) { return parseFloat(style(el).height) }
  function bottom (el) { return y(el) + height(el) + margin('Bottom', el) }
  function right (el) { return x(el) + width(el) + margin('Right', el) }

  function sort (l) {
    l = l.sort(function (a, b) {
      var bottomDiff = bottom(b) - bottom(a)
      return bottomDiff || x(b) - x(a)
    })
  }

  function Boundary (firstRow) {
    var els = firstRow
    sort(els)

    this.add = function (el) {
      els.push(el)
      sort(els)
      els.pop()
    }

    this.min = function () { return els[els.length - 1] }
    this.max = function () { return els[0] }
  }

  function placeEl (el, top, left) {
    el.style.position = 'absolute'
    el.style.top = px(top)
    el.style.left = px(left)
  }

  function placeFirstElement (el) {
    placeEl(el, 0, margin('Left', el))
  }

  function placeAtTheFirstLine (prev, el) {
    placeEl(el, prev.style.top, right(prev) + margin('Left', el))
  }

  function placeAtTheSmallestColumn (minEl, el) {
    placeEl(el, bottom(minEl) + margin('Top', el), x(minEl))
  }

  function adjustContainer (container, maxEl) {
    container.style.position = 'relative'
    container.style.height = px(bottom(maxEl) + margin('Bottom', maxEl))
  }

  function thereIsSpace (els, i) {
    return right(els[i - 1]) + width(els[i]) <= width(container)
  }

  var els = container.children

  if (els.length) {
    placeFirstElement(els[0])
  }

  for (var i = 1; i < els.length && thereIsSpace(els, i); i++) {
    placeAtTheFirstLine(els[i - 1], els[i])
  }

  var firstRow = [].slice.call(els, 0, i)
  var boundary = new Boundary(firstRow)

  for (; i < els.length; i++) {
    placeAtTheSmallestColumn(boundary.min(), els[i])
    boundary.add(els[i])
  }

  adjustContainer(container, boundary.max())
}))
