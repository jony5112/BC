/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function L(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,m.innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var K=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return J("flexOrder")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var M in s)C(s,M)&&(x=M.toLowerCase(),e[x]=s[M](),v.push((e[x]?"":"no-")+x));return e.input||L(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},D(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var u=e.document,r=u.documentElement,h=[],j=[],p=[],n={},g=30,f=u.getElementsByTagName("head")[0]||r,b=f.getElementsByTagName("link"),d=[],a=function(){var C=b,x=C.length,A=0,z,y,B,w;for(;A<x;A++){z=C[A],y=z.href,B=z.media,w=z.rel&&z.rel.toLowerCase()==="stylesheet";if(!!y&&w&&!n[y]){if(z.styleSheet&&z.styleSheet.rawCssText){l(z.styleSheet.rawCssText,y,B);n[y]=true}else{if(!/^([a-zA-Z:]*\/\/)/.test(y)||y.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:y,media:B})}}}}t()},t=function(){if(d.length){var w=d.shift();m(w.href,function(x){l(x,w.href,w.media);n[w.href]=true;t()})}},l=function(H,w,y){var F=H.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),I=F&&F.length||0,w=w.substring(0,w.lastIndexOf("/")),x=function(J){return J.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+w+"$2$3")},z=!I&&y,C=0,B,D,E,A,G;if(w.length){w+="/"}if(z){I=1}for(;C<I;C++){B=0;if(z){D=y;j.push(x(H))}else{D=F[C].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;j.push(RegExp.$2&&x(RegExp.$2))}A=D.split(",");G=A.length;for(;B<G;B++){E=A[B];h.push({media:E.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:j.length-1,hasquery:E.indexOf("(")>-1,minw:E.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:E.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}i()},k,q,v=function(){var y,z=u.createElement("div"),w=u.body,x=false;z.style.cssText="position:absolute;font-size:1em;width:1em";if(!w){w=x=u.createElement("body")}w.appendChild(z);r.insertBefore(w,r.firstChild);y=z.offsetWidth;if(x){r.removeChild(w)}else{w.removeChild(z)}y=o=parseFloat(y);return y},o,i=function(H){var w="clientWidth",A=r[w],G=u.compatMode==="CSS1Compat"&&A||u.body[w]||A,C={},F=b[b.length-1],y=(new Date()).getTime();if(H&&k&&y-k<g){clearTimeout(q);q=setTimeout(i,g);return}else{k=y}for(var D in h){var J=h[D],B=J.minw,I=J.maxw,z=B===null,K=I===null,x="em";if(!!B){B=parseFloat(B)*(B.indexOf(x)>-1?(o||v()):1)}if(!!I){I=parseFloat(I)*(I.indexOf(x)>-1?(o||v()):1)}if(!J.hasquery||(!z||!K)&&(z||G>=B)&&(K||G<=I)){if(!C[J.media]){C[J.media]=[]}C[J.media].push(j[J.rules])}}for(var D in p){if(p[D]&&p[D].parentNode===f){f.removeChild(p[D])}}for(var D in C){var L=u.createElement("style"),E=C[D].join("\n");L.type="text/css";L.media=D;f.insertBefore(L,F.nextSibling);if(L.styleSheet){L.styleSheet.cssText=E}else{L.appendChild(u.createTextNode(E))}p.push(L)}},m=function(w,y){var x=c();if(!x){return}x.open("GET",w,true);x.onreadystatechange=function(){if(x.readyState!=4||x.status!=200&&x.status!=304){return}y(x.responseText)};if(x.readyState==4){return}x.send(null)},c=(function(){var w=false;try{w=new XMLHttpRequest()}catch(x){w=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return w}})();a();respond.update=a;function s(){i(true)}if(e.addEventListener){e.addEventListener("resize",s,false)}else{if(e.attachEvent){e.attachEvent("onresize",s)}}})(this);

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery-1.10.2.min.map
 */
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
    u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*! jQuery UI - v1.9.2 - 2014-01-17
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,n,r,o=t.nodeName.toLowerCase();return"area"===o?(s=t.parentNode,n=s.name,t.href&&n&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&a(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,i){return"number"==typeof t?this.each(function(){var a=this;setTimeout(function(){e(a).focus(),i&&i.call(a)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,s,n=e(this[0]);n.length&&n[0]!==document;){if(a=n.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),s=isNaN(a);return(s||a>=0)&&i(t,!s)}}),e(function(){var t=document.body,i=t.appendChild(i=document.createElement("div"));i.offsetHeight,e.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===i.offsetHeight,e.support.selectstart="onselectstart"in i,t.removeChild(i).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function s(t,i,a,s){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,s(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,s(this,t,!0,i)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=6===parseFloat(t[1],10)}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,a){var s,n=e.ui[t].prototype;for(s in a)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([i,a[s]])},call:function(e,t,i){var a,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;s.length>a;a++)e.options[s[a][0]]&&s[a][1].apply(e.element,i)}},contains:e.contains,hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[a]>0?!0:(t[a]=1,s=t[a]>0,t[a]=0,s)},isOverAxis:function(e,t,i){return e>t&&t+i>e},isOver:function(t,i,a,s,n,r){return e.ui.isOverAxis(t,a,n)&&e.ui.isOverAxis(i,s,r)}}))})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l=i.split(".")[0];i=i.split(".")[1],n=l+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},r=e[l][i],o=e[l][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(t,i){e.isFunction(i)&&(a[t]=function(){var e=function(){return s.prototype[t].apply(this,arguments)},a=function(e){return s.prototype[t].apply(this,e)};return function(){var t,s=this._super,n=this._superApply;return this._super=e,this._superApply=a,t=i.apply(this,arguments),this._super=s,this._superApply=n,t}}())}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},a,{constructor:o,namespace:l,widgetName:i,widgetBaseClass:n,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetName,this),e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&(e.effects.effect[o]||e.uiBackCompat!==!1&&e.effects[o])?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,a=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return a&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function i(e,t,i){return[parseInt(e[0],10)*(d.test(e[0])?t/100:1),parseInt(e[1],10)*(d.test(e[1])?i/100:1)]}function s(t,i){return parseInt(e.css(t,i),10)||0}e.ui=e.ui||{};var a,n=Math.max,r=Math.abs,o=Math.round,l=/left|center|right/,h=/top|center|bottom/,u=/[\+\-]\d+%?/,c=/^\w+/,d=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(a!==t)return a;var i,s,n=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=n.children()[0];return e("body").append(n),i=r.offsetWidth,n.css("overflow","scroll"),s=r.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),s=t.isWindow?"":t.element.css("overflow-y"),a="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,n="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return p.apply(this,arguments);t=e.extend({},t);var a,d,f,m,g,v=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),_=v[0],x=(t.collision||"flip").split(" "),k={};return 9===_.nodeType?(d=v.width(),f=v.height(),m={top:0,left:0}):e.isWindow(_)?(d=v.width(),f=v.height(),m={top:v.scrollTop(),left:v.scrollLeft()}):_.preventDefault?(t.at="left top",d=f=0,m={top:_.pageY,left:_.pageX}):(d=v.outerWidth(),f=v.outerHeight(),m=v.offset()),g=e.extend({},m),e.each(["my","at"],function(){var e,i,s=(t[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):h.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=h.test(s[1])?s[1]:"center",e=u.exec(s[0]),i=u.exec(s[1]),k[this]=[e?e[0]:0,i?i[0]:0],t[this]=[c.exec(s[0])[0],c.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===t.at[0]?g.left+=d:"center"===t.at[0]&&(g.left+=d/2),"bottom"===t.at[1]?g.top+=f:"center"===t.at[1]&&(g.top+=f/2),a=i(k.at,d,f),g.left+=a[0],g.top+=a[1],this.each(function(){var l,h,u=e(this),c=u.outerWidth(),p=u.outerHeight(),_=s(this,"marginLeft"),w=s(this,"marginTop"),D=c+_+s(this,"marginRight")+b.width,T=p+w+s(this,"marginBottom")+b.height,S=e.extend({},g),M=i(k.my,u.outerWidth(),u.outerHeight());"right"===t.my[0]?S.left-=c:"center"===t.my[0]&&(S.left-=c/2),"bottom"===t.my[1]?S.top-=p:"center"===t.my[1]&&(S.top-=p/2),S.left+=M[0],S.top+=M[1],e.support.offsetFractions||(S.left=o(S.left),S.top=o(S.top)),l={marginLeft:_,marginTop:w},e.each(["left","top"],function(i,s){e.ui.position[x[i]]&&e.ui.position[x[i]][s](S,{targetWidth:d,targetHeight:f,elemWidth:c,elemHeight:p,collisionPosition:l,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:t.my,at:t.at,within:y,elem:u})}),e.fn.bgiframe&&u.bgiframe(),t.using&&(h=function(e){var i=m.left-S.left,s=i+d-c,a=m.top-S.top,o=a+f-p,l={target:{element:v,left:m.left,top:m.top,width:d,height:f},element:{element:u,left:S.left,top:S.top,width:c,height:p},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":a>0?"bottom":"middle"};c>d&&d>r(i+s)&&(l.horizontal="center"),p>f&&f>r(a+o)&&(l.vertical="middle"),l.important=n(r(i),r(s))>n(r(a),r(o))?"horizontal":"vertical",t.using.call(this,e,l)}),u.offset(e.extend(S,{using:h}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollLeft:s.offset.left,r=s.width,o=e.left-t.collisionPosition.marginLeft,l=a-o,h=o+t.collisionWidth-r-a;t.collisionWidth>r?l>0&&0>=h?(i=e.left+l+t.collisionWidth-r-a,e.left+=l-i):e.left=h>0&&0>=l?a:l>h?a+r-t.collisionWidth:a:l>0?e.left+=l:h>0?e.left-=h:e.left=n(e.left-o,e.left)},top:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollTop:s.offset.top,r=t.within.height,o=e.top-t.collisionPosition.marginTop,l=a-o,h=o+t.collisionHeight-r-a;t.collisionHeight>r?l>0&&0>=h?(i=e.top+l+t.collisionHeight-r-a,e.top+=l-i):e.top=h>0&&0>=l?a:l>h?a+r-t.collisionHeight:a:l>0?e.top+=l:h>0?e.top-=h:e.top=n(e.top-o,e.top)}},flip:{left:function(e,t){var i,s,a=t.within,n=a.offset.left+a.scrollLeft,o=a.width,l=a.isWindow?a.scrollLeft:a.offset.left,h=e.left-t.collisionPosition.marginLeft,u=h-l,c=h+t.collisionWidth-o-l,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+d+p+f+t.collisionWidth-o-n,(0>i||r(u)>i)&&(e.left+=d+p+f)):c>0&&(s=e.left-t.collisionPosition.marginLeft+d+p+f-l,(s>0||c>r(s))&&(e.left+=d+p+f))},top:function(e,t){var i,s,a=t.within,n=a.offset.top+a.scrollTop,o=a.height,l=a.isWindow?a.scrollTop:a.offset.top,h=e.top-t.collisionPosition.marginTop,u=h-l,c=h+t.collisionHeight-o-l,d="top"===t.my[1],p=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-n,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):c>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-l,e.top+p+f+m>c&&(i>0||c>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,a,n,r=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(n in s)t.style[n]=s[n];t.appendChild(o),i=r||document.documentElement,i.insertBefore(t,i.firstChild),o.style.cssText="position: absolute; left: 10.7432222px;",a=e(o).offset().left,e.support.offsetFractions=a>10&&11>a,t.innerHTML="",i.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var i=e.fn.position;e.fn.position=function(s){if(!s||!s.offset)return i.call(this,s);var a=s.offset.split(" "),n=s.at.split(" ");return 1===a.length&&(a[1]=a[0]),/^\d/.test(a[0])&&(a[0]="+"+a[0]),/^\d/.test(a[1])&&(a[1]="+"+a[1]),1===n.length&&(/left|center|right/.test(n[0])?n[1]="center":(n[1]=n[0],n[0]="center")),i.call(this,e.extend(s,{at:n[0]+a[0]+" "+n[1]+a[1],offset:t}))}}(jQuery)})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){"original"!=this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var a=this._uiHash();if(this._trigger("drag",t,a)===!1)return this._mouseUp({}),!1;this.position=a.position}return this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(i=e.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1);for(var a=this.element[0],s=!1;a&&(a=a.parentNode);)a==document&&(s=!0);if(!s&&"original"===this.options.helper)return!1;if("invalid"==this.options.revert&&!i||"valid"==this.options.revert&&i||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)){var n=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",t)!==!1&&n._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var i=this.options.handle&&e(this.options.handle,this.element).length?!1:!0;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(i=!0)}),i},_createHelper:function(t){var i=this.options,a=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"==i.helper?this.element.clone().removeAttr("id"):this.element;return a.parents("body").length||a.appendTo("parent"==i.appendTo?this.element[0].parentNode:i.appendTo),a[0]==this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute"),a},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;if("parent"==t.containment&&(t.containment=this.helper[0].parentNode),("document"==t.containment||"window"==t.containment)&&(this.containment=["document"==t.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"==t.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"==t.containment?0:e(window).scrollLeft())+e("document"==t.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"==t.containment?0:e(window).scrollTop())+(e("document"==t.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(t.containment)||t.containment.constructor==Array)t.containment.constructor==Array&&(this.containment=t.containment);else{var i=e(t.containment),a=i[0];if(!a)return;i.offset();var s="hidden"!=e(a).css("overflow");this.containment=[(parseInt(e(a).css("borderLeftWidth"),10)||0)+(parseInt(e(a).css("paddingLeft"),10)||0),(parseInt(e(a).css("borderTopWidth"),10)||0)+(parseInt(e(a).css("paddingTop"),10)||0),(s?Math.max(a.scrollWidth,a.offsetWidth):a.offsetWidth)-(parseInt(e(a).css("borderLeftWidth"),10)||0)-(parseInt(e(a).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(a.scrollHeight,a.offsetHeight):a.offsetHeight)-(parseInt(e(a).css("borderTopWidth"),10)||0)-(parseInt(e(a).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var a="absolute"==t?1:-1,s=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),n=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():n?0:s.scrollTop())*a,left:i.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():n?0:s.scrollLeft())*a}},_generatePosition:function(t){var i=this.options,a="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(a[0].tagName),n=t.pageX,r=t.pageY;if(this.originalPosition){var o;if(this.containment){if(this.relative_container){var l=this.relative_container.offset();o=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]}else o=this.containment;t.pageX-this.offset.click.left<o[0]&&(n=o[0]+this.offset.click.left),t.pageY-this.offset.click.top<o[1]&&(r=o[1]+this.offset.click.top),t.pageX-this.offset.click.left>o[2]&&(n=o[2]+this.offset.click.left),t.pageY-this.offset.click.top>o[3]&&(r=o[3]+this.offset.click.top)}if(i.grid){var h=i.grid[1]?this.originalPageY+Math.round((r-this.originalPageY)/i.grid[1])*i.grid[1]:this.originalPageY;r=o?h-this.offset.click.top<o[1]||h-this.offset.click.top>o[3]?h-this.offset.click.top<o[1]?h+i.grid[1]:h-i.grid[1]:h:h;var u=i.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/i.grid[0])*i.grid[0]:this.originalPageX;n=o?u-this.offset.click.left<o[0]||u-this.offset.click.left>o[2]?u-this.offset.click.left<o[0]?u+i.grid[0]:u-i.grid[0]:u:u}}return{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():s?0:a.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():s?0:a.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]==this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,a){return a=a||this._uiHash(),e.ui.plugin.call(this,t,[i,a]),"drag"==t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,a)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var a=e(this).data("draggable"),s=a.options,n=e.extend({},i,{item:a.element});a.sortables=[],e(s.connectToSortable).each(function(){var i=e.data(this,"sortable");i&&!i.options.disabled&&(a.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i){var a=e(this).data("draggable"),s=e.extend({},i,{item:a.element});e.each(a.sortables,function(){this.instance.isOver?(this.instance.isOver=0,a.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"==a.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,s))})},drag:function(t,i){var a=e(this).data("draggable"),s=this;e.each(a.sortables,function(){var n=!1,r=this;this.instance.positionAbs=a.positionAbs,this.instance.helperProportions=a.helperProportions,this.instance.offset.click=a.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,e.each(a.sortables,function(){return this.instance.positionAbs=a.positionAbs,this.instance.helperProportions=a.helperProportions,this.instance.offset.click=a.offset.click,this!=r&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),n})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=a.offset.click.top,this.instance.offset.click.left=a.offset.click.left,this.instance.offset.parent.left-=a.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=a.offset.parent.top-this.instance.offset.parent.top,a._trigger("toSortable",t),a.dropped=this.instance.element,a.currentItem=a.element,this.instance.fromOutside=a),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),a._trigger("fromSortable",t),a.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var a=e(i.helper),s=e(this).data("draggable").options;a.css("opacity")&&(s._opacity=a.css("opacity")),a.css("opacity",s.opacity)},stop:function(t,i){var a=e(this).data("draggable").options;a._opacity&&e(i.helper).css("opacity",a._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("draggable");t.scrollParent[0]!=document&&"HTML"!=t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("draggable"),a=i.options,s=!1;i.scrollParent[0]!=document&&"HTML"!=i.scrollParent[0].tagName?(a.axis&&"x"==a.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<a.scrollSensitivity?i.scrollParent[0].scrollTop=s=i.scrollParent[0].scrollTop+a.scrollSpeed:t.pageY-i.overflowOffset.top<a.scrollSensitivity&&(i.scrollParent[0].scrollTop=s=i.scrollParent[0].scrollTop-a.scrollSpeed)),a.axis&&"y"==a.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<a.scrollSensitivity?i.scrollParent[0].scrollLeft=s=i.scrollParent[0].scrollLeft+a.scrollSpeed:t.pageX-i.overflowOffset.left<a.scrollSensitivity&&(i.scrollParent[0].scrollLeft=s=i.scrollParent[0].scrollLeft-a.scrollSpeed))):(a.axis&&"x"==a.axis||(t.pageY-e(document).scrollTop()<a.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-a.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<a.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+a.scrollSpeed))),a.axis&&"y"==a.axis||(t.pageX-e(document).scrollLeft()<a.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-a.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<a.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+a.scrollSpeed)))),s!==!1&&e.ui.ddmanager&&!a.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var i=e(this),a=i.offset();this!=t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:a.top,left:a.left})})},drag:function(t,i){for(var a=e(this).data("draggable"),s=a.options,n=s.snapTolerance,r=i.offset.left,o=r+a.helperProportions.width,l=i.offset.top,h=l+a.helperProportions.height,u=a.snapElements.length-1;u>=0;u--){var d=a.snapElements[u].left,c=d+a.snapElements[u].width,p=a.snapElements[u].top,m=p+a.snapElements[u].height;if(r>d-n&&c+n>r&&l>p-n&&m+n>l||r>d-n&&c+n>r&&h>p-n&&m+n>h||o>d-n&&c+n>o&&l>p-n&&m+n>l||o>d-n&&c+n>o&&h>p-n&&m+n>h){if("inner"!=s.snapMode){var f=n>=Math.abs(p-h),g=n>=Math.abs(m-l),v=n>=Math.abs(d-o),y=n>=Math.abs(c-r);f&&(i.position.top=a._convertPositionTo("relative",{top:p-a.helperProportions.height,left:0}).top-a.margins.top),g&&(i.position.top=a._convertPositionTo("relative",{top:m,left:0}).top-a.margins.top),v&&(i.position.left=a._convertPositionTo("relative",{top:0,left:d-a.helperProportions.width}).left-a.margins.left),y&&(i.position.left=a._convertPositionTo("relative",{top:0,left:c}).left-a.margins.left)}var b=f||g||v||y;if("outer"!=s.snapMode){var f=n>=Math.abs(p-l),g=n>=Math.abs(m-h),v=n>=Math.abs(d-r),y=n>=Math.abs(c-o);f&&(i.position.top=a._convertPositionTo("relative",{top:p,left:0}).top-a.margins.top),g&&(i.position.top=a._convertPositionTo("relative",{top:m-a.helperProportions.height,left:0}).top-a.margins.top),v&&(i.position.left=a._convertPositionTo("relative",{top:0,left:d}).left-a.margins.left),y&&(i.position.left=a._convertPositionTo("relative",{top:0,left:c-a.helperProportions.width}).left-a.margins.left)}!a.snapElements[u].snapping&&(f||g||v||y||b)&&a.options.snap.snap&&a.options.snap.snap.call(a.element,t,e.extend(a._uiHash(),{snapItem:a.snapElements[u].item})),a.snapElements[u].snapping=f||g||v||y||b}else a.snapElements[u].snapping&&a.options.snap.release&&a.options.snap.release.call(a.element,t,e.extend(a._uiHash(),{snapItem:a.snapElements[u].item})),a.snapElements[u].snapping=!1}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t=e(this).data("draggable").options,i=e.makeArray(e(t.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});if(i.length){var a=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=a+e}),this[0].style.zIndex=a+i.length}}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var a=e(i.helper),s=e(this).data("draggable").options;a.css("zIndex")&&(s._zIndex=a.css("zIndex")),a.css("zIndex",s.zIndex)},stop:function(t,i){var a=e(this).data("draggable").options;a._zIndex&&e(i.helper).css("zIndex",a._zIndex)}})})(jQuery);(function(e){e.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var t=this.options,i=t.accept;this.isover=0,this.isout=1,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=e.ui.ddmanager.droppables[this.options.scope],i=0;t.length>i;i++)t[i]==this&&t.splice(i,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"==t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!=this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!=this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var a=i||e.ui.ddmanager.current;if(!a||(a.currentItem||a.element)[0]==this.element[0])return!1;var s=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope==a.options.scope&&t.accept.call(t.element[0],a.currentItem||a.element)&&e.ui.intersect(a,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(s=!0,!1):undefined}),s?!1:this.accept.call(this.element[0],a.currentItem||a.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(a)),this.element):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(t,i,a){if(!i.offset)return!1;var s=(t.positionAbs||t.position.absolute).left,n=s+t.helperProportions.width,r=(t.positionAbs||t.position.absolute).top,o=r+t.helperProportions.height,l=i.offset.left,h=l+i.proportions.width,u=i.offset.top,d=u+i.proportions.height;switch(a){case"fit":return s>=l&&h>=n&&r>=u&&d>=o;case"intersect":return s+t.helperProportions.width/2>l&&h>n-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&d>o-t.helperProportions.height/2;case"pointer":var c=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,p=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,m=e.ui.isOver(p,c,u,l,i.proportions.height,i.proportions.width);return m;case"touch":return(r>=u&&d>=r||o>=u&&d>=o||u>r&&o>d)&&(s>=l&&h>=s||n>=l&&h>=n||l>s&&n>h);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var a=e.ui.ddmanager.droppables[t.options.scope]||[],s=i?i.type:null,n=(t.currentItem||t.element).find(":data(droppable)").andSelf();e:for(var r=0;a.length>r;r++)if(!(a[r].options.disabled||t&&!a[r].accept.call(a[r].element[0],t.currentItem||t.element))){for(var o=0;n.length>o;o++)if(n[o]==a[r].element[0]){a[r].proportions.height=0;continue e}a[r].visible="none"!=a[r].element.css("display"),a[r].visible&&("mousedown"==s&&a[r]._activate.call(a[r],i),a[r].offset=a[r].element.offset(),a[r].proportions={width:a[r].element[0].offsetWidth,height:a[r].element[0].offsetHeight})}},drop:function(t,i){var a=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(a=this._drop.call(this,i)||a),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,i)))}),a},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var a=e.ui.intersect(t,this,this.options.tolerance),s=a||1!=this.isover?a&&0==this.isover?"isover":null:"isout";if(s){var n;if(this.options.greedy){var r=this.options.scope,o=this.element.parents(":data(droppable)").filter(function(){return e.data(this,"droppable").options.scope===r});o.length&&(n=e.data(o[0],"droppable"),n.greedyChild="isover"==s?1:0)}n&&"isover"==s&&(n.isover=0,n.isout=1,n._out.call(n,i)),this[s]=1,this["isout"==s?"isover":"isout"]=0,this["isover"==s?"_over":"_out"].call(this,i),n&&"isout"==s&&(n.isout=0,n.isover=1,n._over.call(n,i))}}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);(function(e){e.widget("ui.resizable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var t=this,i=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=i.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor==String){"all"==this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw");var s=this.handles.split(",");this.handles={};for(var a=0;s.length>a;a++){var n=e.trim(s[a]),r="ui-resizable-"+n,o=e('<div class="ui-resizable-handle '+r+'"></div>');o.css({zIndex:i.zIndex}),"se"==n&&o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[n]=".ui-resizable-"+n,this.element.append(o)}}this._renderAxis=function(t){t=t||this.element;for(var i in this.handles){if(this.handles[i].constructor==String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var s=e(this.handles[i],this.element),a=0;a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth();var n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");t.css(n,a),this._proportionallyResize()}e(this.handles[i]).length}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!t.resizing){if(this.className)var e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);t.axis=e&&e[1]?e[1]:"se"}}),i.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){i.disabled||(e(this).removeClass("ui-resizable-autohide"),t._handles.show())}).mouseleave(function(){i.disabled||t.resizing||(e(this).addClass("ui-resizable-autohide"),t._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){t(this.element);var i=this.element;this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()}return this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var i=!1;for(var s in this.handles)e(this.handles[s])[0]==t.target&&(i=!0);return!this.options.disabled&&i},_mouseStart:function(i){var s=this.options,a=this.element.position(),n=this.element;this.resizing=!0,this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()},(n.is(".ui-draggable")||/absolute/.test(n.css("position")))&&n.css({position:"absolute",top:a.top,left:a.left}),this._renderProxy();var r=t(this.helper.css("left")),o=t(this.helper.css("top"));s.containment&&(r+=e(s.containment).scrollLeft()||0,o+=e(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:o},this.size=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()},this.originalSize=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()},this.originalPosition={left:r,top:o},this.sizeDiff={width:n.outerWidth()-n.width(),height:n.outerHeight()-n.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1;var h=e(".ui-resizable-"+this.axis).css("cursor");return e("body").css("cursor","auto"==h?this.axis+"-resize":h),n.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var t=this.helper,i=(this.options,this.originalMousePosition),s=this.axis,a=e.pageX-i.left||0,n=e.pageY-i.top||0,r=this._change[s];if(!r)return!1;var o=r.apply(this,[e,a,n]);return this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(o=this._updateRatio(o,e)),o=this._respectSize(o,e),this._propagate("resize",e),t.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(o),this._trigger("resize",e,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var i=this.options,s=this;if(this._helper){var a=this._proportionallyResizeElements,n=a.length&&/textarea/i.test(a[0].nodeName),r=n&&e.ui.hasScroll(a[0],"left")?0:s.sizeDiff.height,o=n?0:s.sizeDiff.width,h={width:s.helper.width()-o,height:s.helper.height()-r},l=parseInt(s.element.css("left"),10)+(s.position.left-s.originalPosition.left)||null,u=parseInt(s.element.css("top"),10)+(s.position.top-s.originalPosition.top)||null;i.animate||this.element.css(e.extend(h,{top:u,left:l})),s.helper.height(s.size.height),s.helper.width(s.size.width),this._helper&&!i.animate&&this._proportionallyResize()}return e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,a,n,r,o=this.options;r={minWidth:i(o.minWidth)?o.minWidth:0,maxWidth:i(o.maxWidth)?o.maxWidth:1/0,minHeight:i(o.minHeight)?o.minHeight:0,maxHeight:i(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=r.minHeight*this.aspectRatio,a=r.minWidth/this.aspectRatio,s=r.maxHeight*this.aspectRatio,n=r.maxWidth/this.aspectRatio,t>r.minWidth&&(r.minWidth=t),a>r.minHeight&&(r.minHeight=a),r.maxWidth>s&&(r.maxWidth=s),r.maxHeight>n&&(r.maxHeight=n)),this._vBoundaries=r},_updateCache:function(e){this.options,this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=(this.options,this.position),s=this.size,a=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"==a&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"==a&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e,t){var s=(this.helper,this._vBoundaries),a=(this._aspectRatio||t.shiftKey,this.axis),n=i(e.width)&&s.maxWidth&&s.maxWidth<e.width,r=i(e.height)&&s.maxHeight&&s.maxHeight<e.height,o=i(e.width)&&s.minWidth&&s.minWidth>e.width,h=i(e.height)&&s.minHeight&&s.minHeight>e.height;o&&(e.width=s.minWidth),h&&(e.height=s.minHeight),n&&(e.width=s.maxWidth),r&&(e.height=s.maxHeight);var l=this.originalPosition.left+this.originalSize.width,u=this.position.top+this.size.height,d=/sw|nw|w/.test(a),c=/nw|ne|n/.test(a);o&&d&&(e.left=l-s.minWidth),n&&d&&(e.left=l-s.maxWidth),h&&c&&(e.top=u-s.minHeight),r&&c&&(e.top=u-s.maxHeight);var p=!e.width&&!e.height;return p&&!e.left&&e.top?e.top=null:p&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(this.options,this._proportionallyResizeElements.length)for(var t=this.helper||this.element,i=0;this._proportionallyResizeElements.length>i;i++){var s=this._proportionallyResizeElements[i];if(!this.borderDif){var a=[s.css("borderTopWidth"),s.css("borderRightWidth"),s.css("borderBottomWidth"),s.css("borderLeftWidth")],n=[s.css("paddingTop"),s.css("paddingRight"),s.css("paddingBottom"),s.css("paddingLeft")];this.borderDif=e.map(a,function(e,t){var i=parseInt(e,10)||0,s=parseInt(n[t],10)||0;return i+s})}s.css({height:t.height()-this.borderDif[0]-this.borderDif[2]||0,width:t.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,i=this.options;if(this.elementOffset=t.offset(),this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var s=e.ui.ie6?1:0,a=e.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-s+"px",top:this.elementOffset.top-s+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=(this.options,this.originalSize),s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=(this.options,this.originalSize),a=this.originalPosition;return{top:a.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!=t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("resizable"),a=s.options,n=s.originalSize,r=s.originalPosition,o={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-r.top||0,left:s.position.left-r.left||0},h=function(t,s){e(t).each(function(){var t=e(this),a=e(this).data("resizable-alsoresize"),n={},r=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(e,t){var i=(a[t]||0)+(o[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})};"object"!=typeof a.alsoResize||a.alsoResize.nodeType?h(a.alsoResize):e.each(a.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("resizable"),s=i.options,a=i._proportionallyResizeElements,n=a.length&&/textarea/i.test(a[0].nodeName),r=n&&e.ui.hasScroll(a[0],"left")?0:i.sizeDiff.height,o=n?0:i.sizeDiff.width,h={width:i.size.width-o,height:i.size.height-r},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};a&&a.length&&e(a[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i=e(this).data("resizable"),s=i.options,a=i.element,n=s.containment,r=n instanceof e?n.get(0):/parent/.test(n)?a.parent().get(0):n;if(r)if(i.containerElement=e(r),/document/.test(n)||n==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};else{var o=e(r),h=[];e(["Top","Right","Left","Bottom"]).each(function(e,i){h[e]=t(o.css("padding"+i))}),i.containerOffset=o.offset(),i.containerPosition=o.position(),i.containerSize={height:o.innerHeight()-h[3],width:o.innerWidth()-h[1]};var l=i.containerOffset,u=i.containerSize.height,d=i.containerSize.width,c=e.ui.hasScroll(r,"left")?r.scrollWidth:d,p=e.ui.hasScroll(r)?r.scrollHeight:u;i.parentData={element:r,left:l.left,top:l.top,width:c,height:p}}},resize:function(t){var i=e(this).data("resizable"),s=i.options,a=(i.containerSize,i.containerOffset),n=(i.size,i.position),r=i._aspectRatio||t.shiftKey,o={top:0,left:0},h=i.containerElement;h[0]!=document&&/static/.test(h.css("position"))&&(o=a),n.left<(i._helper?a.left:0)&&(i.size.width=i.size.width+(i._helper?i.position.left-a.left:i.position.left-o.left),r&&(i.size.height=i.size.width/i.aspectRatio),i.position.left=s.helper?a.left:0),n.top<(i._helper?a.top:0)&&(i.size.height=i.size.height+(i._helper?i.position.top-a.top:i.position.top),r&&(i.size.width=i.size.height*i.aspectRatio),i.position.top=i._helper?a.top:0),i.offset.left=i.parentData.left+i.position.left,i.offset.top=i.parentData.top+i.position.top;var l=Math.abs((i._helper?i.offset.left-o.left:i.offset.left-o.left)+i.sizeDiff.width),u=Math.abs((i._helper?i.offset.top-o.top:i.offset.top-a.top)+i.sizeDiff.height),d=i.containerElement.get(0)==i.element.parent().get(0),c=/relative|absolute/.test(i.containerElement.css("position"));d&&c&&(l-=i.parentData.left),l+i.size.width>=i.parentData.width&&(i.size.width=i.parentData.width-l,r&&(i.size.height=i.size.width/i.aspectRatio)),u+i.size.height>=i.parentData.height&&(i.size.height=i.parentData.height-u,r&&(i.size.width=i.size.height*i.aspectRatio))},stop:function(){var t=e(this).data("resizable"),i=t.options,s=(t.position,t.containerOffset),a=t.containerPosition,n=t.containerElement,r=e(t.helper),o=r.offset(),h=r.outerWidth()-t.sizeDiff.width,l=r.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(n.css("position"))&&e(this).css({left:o.left-a.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(n.css("position"))&&e(this).css({left:o.left-a.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("resizable");t.options,t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("resizable");t.options,t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(t){var i=e(this).data("resizable"),s=i.options,a=i.size,n=i.originalSize,r=i.originalPosition,o=i.axis;s._aspectRatio||t.shiftKey,s.grid="number"==typeof s.grid?[s.grid,s.grid]:s.grid;var h=Math.round((a.width-n.width)/(s.grid[0]||1))*(s.grid[0]||1),l=Math.round((a.height-n.height)/(s.grid[1]||1))*(s.grid[1]||1);/^(se|s|e)$/.test(o)?(i.size.width=n.width+h,i.size.height=n.height+l):/^(ne)$/.test(o)?(i.size.width=n.width+h,i.size.height=n.height+l,i.position.top=r.top-l):/^(sw)$/.test(o)?(i.size.width=n.width+h,i.size.height=n.height+l,i.position.left=r.left-h):(i.size.width=n.width+h,i.size.height=n.height+l,i.position.top=r.top-l,i.position.left=r.left-h)}});var t=function(e){return parseInt(e,10)||0},i=function(e){return!isNaN(parseInt(e,10))}})(jQuery);(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var i;this.refresh=function(){i=e(t.options.filter,t.element[0]),i.addClass("ui-selectee"),i.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=i.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this;if(this.opos=[t.pageX,t.pageY],!this.options.disabled){var s=this.options;this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().andSelf().each(function(){var s=e.data(this,"selectable-item");if(s){var a=!t.metaKey&&!t.ctrlKey||!s.$element.hasClass("ui-selected");return s.$element.removeClass(a?"ui-unselecting":"ui-selected").addClass(a?"ui-selecting":"ui-unselecting"),s.unselecting=!a,s.selecting=a,s.selected=a,a?i._trigger("selecting",t,{selecting:s.element}):i._trigger("unselecting",t,{unselecting:s.element}),!1}})}},_mouseDrag:function(t){var i=this;if(this.dragged=!0,!this.options.disabled){var s=this.options,a=this.opos[0],n=this.opos[1],r=t.pageX,o=t.pageY;if(a>r){var h=r;r=a,a=h}if(n>o){var h=o;o=n,n=h}return this.helper.css({left:a,top:n,width:r-a,height:o-n}),this.selectees.each(function(){var h=e.data(this,"selectable-item");if(h&&h.element!=i.element[0]){var l=!1;"touch"==s.tolerance?l=!(h.left>r||a>h.right||h.top>o||n>h.bottom):"fit"==s.tolerance&&(l=h.left>a&&r>h.right&&h.top>n&&o>h.bottom),l?(h.selected&&(h.$element.removeClass("ui-selected"),h.selected=!1),h.unselecting&&(h.$element.removeClass("ui-unselecting"),h.unselecting=!1),h.selecting||(h.$element.addClass("ui-selecting"),h.selecting=!0,i._trigger("selecting",t,{selecting:h.element}))):(h.selecting&&((t.metaKey||t.ctrlKey)&&h.startselected?(h.$element.removeClass("ui-selecting"),h.selecting=!1,h.$element.addClass("ui-selected"),h.selected=!0):(h.$element.removeClass("ui-selecting"),h.selecting=!1,h.startselected&&(h.$element.addClass("ui-unselecting"),h.unselecting=!0),i._trigger("unselecting",t,{unselecting:h.element}))),h.selected&&(t.metaKey||t.ctrlKey||h.startselected||(h.$element.removeClass("ui-selected"),h.selected=!1,h.$element.addClass("ui-unselecting"),h.unselecting=!0,i._trigger("unselecting",t,{unselecting:h.element}))))}}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,this.options,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e){e.widget("ui.sortable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){"disabled"===t?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var s=this;if(this.reverting)return!1;if(this.options.disabled||"static"==this.options.type)return!1;this._refreshItems(t);var a=null;if(e(t.target).parents().each(function(){return e.data(this,s.widgetName+"-item")==s?(a=e(this),!1):undefined}),e.data(t.target,s.widgetName+"-item")==s&&(a=e(t.target)),!a)return!1;if(this.options.handle&&!i){var n=!1;if(e(this.options.handle,a).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),!n)return!1}return this.currentItem=a,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,i,s){var a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",a.cursor)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(var n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!a.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var i=this.options,s=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed)),t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))),s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)}this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(var a=this.items.length-1;a>=0;a--){var n=this.items[a],r=n.item[0],o=this._intersectsWithPointer(n);if(o&&n.instance===this.currentContainer&&r!=this.currentItem[0]&&this.placeholder[1==o?"next":"prev"]()[0]!=r&&!e.contains(this.placeholder[0],r)&&("semi-dynamic"==this.options.type?!e.contains(this.element[0],r):!0)){if(this.direction=1==o?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(n))break;this._rearrange(t,n),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,a=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"==this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!=this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,a=s+this.helperProportions.height,n=e.left,r=n+e.width,o=e.top,h=o+e.height,l=this.offset.click.top,u=this.offset.click.left,c=s+l>o&&h>s+l&&t+u>n&&r>t+u;return"pointer"==this.options.tolerance||this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:t+this.helperProportions.width/2>n&&r>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>o&&h>a-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),a=i&&s,n=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return a?this.floating?r&&"right"==r||"down"==n?2:1:n&&("down"==n?2:1):!1},_intersectsWithSides:function(t){var i=e.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),a=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"==n&&s||"left"==n&&!s:a&&("down"==a&&i||"up"==a&&!i)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!=e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!=e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var i=[],s=[],a=this._connectWith();if(a&&t)for(var n=a.length-1;n>=0;n--)for(var r=e(a[n]),o=r.length-1;o>=0;o--){var h=e.data(r[o],this.widgetName);h&&h!=this&&!h.options.disabled&&s.push([e.isFunction(h.options.items)?h.options.items.call(h.element):e(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}s.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var n=s.length-1;n>=0;n--)s[n][0].each(function(){i.push(this)});return e(i)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]==e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i=this.items,s=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],a=this._connectWith();if(a&&this.ready)for(var n=a.length-1;n>=0;n--)for(var r=e(a[n]),o=r.length-1;o>=0;o--){var h=e.data(r[o],this.widgetName);h&&h!=this&&!h.options.disabled&&(s.push([e.isFunction(h.options.items)?h.options.items.call(h.element[0],t,{item:this.currentItem}):e(h.options.items,h.element),h]),this.containers.push(h))}for(var n=s.length-1;n>=0;n--)for(var l=s[n][1],u=s[n][0],o=0,c=u.length;c>o;o++){var d=e(u[o]);d.data(this.widgetName+"-item",l),i.push({item:d,instance:l,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var i=this.items.length-1;i>=0;i--){var s=this.items[i];if(s.instance==this.currentContainer||!this.currentContainer||s.item[0]==this.currentItem[0]){var a=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item;t||(s.width=a.outerWidth(),s.height=a.outerHeight());var n=a.offset();s.left=n.left,s.top=n.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var i=this.containers.length-1;i>=0;i--){var n=this.containers[i].element.offset();this.containers[i].containerCache.left=n.left,this.containers[i].containerCache.top=n.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight()}return this},_createPlaceholder:function(t){t=t||this;var i=t.options;if(!i.placeholder||i.placeholder.constructor==String){var s=i.placeholder;i.placeholder={element:function(){var i=e(document.createElement(t.currentItem[0].nodeName)).addClass(s||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return s||(i.style.visibility="hidden"),i},update:function(e,a){(!s||i.forcePlaceholderSize)&&(a.height()||a.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),a.width()||a.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}}t.placeholder=e(i.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),i.placeholder.update(t,t.placeholder)},_contactContainers:function(t){for(var i=null,s=null,a=this.containers.length-1;a>=0;a--)if(!e.contains(this.currentItem[0],this.containers[a].element[0]))if(this._intersectsWith(this.containers[a].containerCache)){if(i&&e.contains(this.containers[a].element[0],i.element[0]))continue;i=this.containers[a],s=a}else this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",t,this._uiHash(this)),this.containers[a].containerCache.over=0);if(i)if(1===this.containers.length)this.containers[s]._trigger("over",t,this._uiHash(this)),this.containers[s].containerCache.over=1;else{for(var n=1e4,r=null,o=this.containers[s].floating?"left":"top",h=this.containers[s].floating?"width":"height",l=this.positionAbs[o]+this.offset.click[o],u=this.items.length-1;u>=0;u--)if(e.contains(this.containers[s].element[0],this.items[u].item[0])&&this.items[u].item[0]!=this.currentItem[0]){var c=this.items[u].item.offset()[o],d=!1;Math.abs(c-l)>Math.abs(c+this.items[u][h]-l)&&(d=!0,c+=this.items[u][h]),n>Math.abs(c-l)&&(n=Math.abs(c-l),r=this.items[u],this.direction=d?"up":"down")}if(!r&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[s],r?this._rearrange(t,r,null,!0):this._rearrange(t,null,this.containers[s].element,!0),this._trigger("change",t,this._uiHash()),this.containers[s]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[s]._trigger("over",t,this._uiHash(this)),this.containers[s].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"==i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!=i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(""==s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(""==s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;if("parent"==t.containment&&(t.containment=this.helper[0].parentNode),("document"==t.containment||"window"==t.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"==t.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"==t.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),!/^(document|window|parent)$/.test(t.containment)){var i=e(t.containment)[0],s=e(t.containment).offset(),a="hidden"!=e(i).css("overflow");this.containment=[s.left+(parseInt(e(i).css("borderLeftWidth"),10)||0)+(parseInt(e(i).css("paddingLeft"),10)||0)-this.margins.left,s.top+(parseInt(e(i).css("borderTopWidth"),10)||0)+(parseInt(e(i).css("paddingTop"),10)||0)-this.margins.top,s.left+(a?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e(i).css("borderLeftWidth"),10)||0)-(parseInt(e(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,s.top+(a?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e(i).css("borderTopWidth"),10)||0)-(parseInt(e(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"==t?1:-1,a=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),n=/(html|body)/i.test(a[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():n?0:a.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():n?0:a.scrollLeft())*s}},_generatePosition:function(t){var i=this.options,s="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(s[0].tagName);"relative"!=this.cssPosition||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset());var n=t.pageX,r=t.pageY;if(this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),i.grid)){var o=this.originalPageY+Math.round((r-this.originalPageY)/i.grid[1])*i.grid[1];r=this.containment?o-this.offset.click.top<this.containment[1]||o-this.offset.click.top>this.containment[3]?o-this.offset.click.top<this.containment[1]?o+i.grid[1]:o-i.grid[1]:o:o;var h=this.originalPageX+Math.round((n-this.originalPageX)/i.grid[0])*i.grid[0];n=this.containment?h-this.offset.click.left<this.containment[0]||h-this.offset.click.left>this.containment[2]?h-this.offset.click.left<this.containment[0]?h+i.grid[0]:h-i.grid[0]:h:h}return{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():a?0:s.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():a?0:s.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var a=this.counter;this._delay(function(){a==this.counter&&this.refreshPositions(!s)})},_clear:function(t,i){this.reverting=!1;var s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]==this.currentItem[0]){for(var a in this._storedCSS)("auto"==this._storedCSS[a]||"static"==this._storedCSS[a])&&(this._storedCSS[a]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!i&&s.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev==this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent==this.currentItem.parent()[0]||i||s.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(i||(s.push(function(e){this._trigger("remove",e,this._uiHash())}),s.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(var a=this.containers.length-1;a>=0;a--)i||s.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[a])),this.containers[a].containerCache.over&&(s.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[a])),this.containers[a].containerCache.over=0);if(this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!i){this._trigger("beforeStop",t,this._uiHash());for(var a=0;s.length>a;a++)s[a].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(i||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null,!i){for(var a=0;s.length>a;a++)s[a].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e){var t=0,i={},a={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var i=this.accordionId="ui-accordion-"+(this.element.attr("id")||++t),a=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(a.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),a.collapsible||a.active!==!1&&null!=a.active||(a.active=0),0>a.active&&(a.active+=this.headers.length),this.active=this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(t){var a=e(this),s=a.attr("id"),n=a.next(),r=n.attr("id");s||(s=i+"-header-"+t,a.attr("id",s)),r||(r=i+"-panel-"+t,n.attr("id",r)),a.attr("aria-controls",r),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(a.event)},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),undefined):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t),undefined)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,a=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:n=this.headers[(s+1)%a];break;case i.LEFT:case i.UP:n=this.headers[(s-1+a)%a];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:n=this.headers[0];break;case i.END:n=this.headers[a-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t,i,a=this.options.heightStyle,s=this.element.parent();"fill"===a?(e.support.minHeight||(i=s.css("overflow"),s.css("overflow","hidden")),t=s.height(),this.element.siblings(":visible").each(function(){var i=e(this),a=i.css("position");"absolute"!==a&&"fixed"!==a&&(t-=i.outerHeight(!0))}),i&&s.css("overflow",i),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===a&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={};t&&(e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._on(this.headers,i))},_eventHandler:function(t){var i=this.options,a=this.active,s=e(t.currentTarget),n=s[0]===a[0],r=n&&i.collapsible,o=r?e():s.next(),h=a.next(),l={oldHeader:a,oldPanel:h,newHeader:r?e():s,newPanel:o};t.preventDefault(),n&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=r?!1:this.headers.index(s),this.active=n?e():s,this._toggle(l),a.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),n||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,a=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=a,this.options.animate?this._animate(i,a,t):(a.hide(),i.show(),this._toggleComplete(t)),a.attr({"aria-expanded":"false","aria-hidden":"true"}),a.prev().attr("aria-selected","false"),i.length&&a.length?a.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,s){var n,r,o,h=this,l=0,u=e.length&&(!t.length||e.index()<t.index()),d=this.options.animate||{},c=u&&d.down||d,p=function(){h._toggleComplete(s)};return"number"==typeof c&&(o=c),"string"==typeof c&&(r=c),r=r||c.easing||d.easing,o=o||c.duration||d.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(i,{duration:o,easing:r,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(a,{duration:o,easing:r,complete:p,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(n-t.outerHeight()-l),l=0)}}),undefined):t.animate(i,o,r,p):e.animate(a,o,r,p)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.uiBackCompat!==!1&&(function(e,t){e.extend(t.options,{navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var i=t._create;t._create=function(){if(this.options.navigation){var t=this,a=this.element.find(this.options.header),s=a.next(),n=a.add(s).find("a").filter(this.options.navigationFilter)[0];n&&a.add(s).each(function(i){return e.contains(this,n)?(t.options.active=Math.floor(i/2),!1):undefined})}i.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});var i=t._create,a=t._setOption;e.extend(t,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),i.call(this)},_setOption:function(e){("autoHeight"===e||"clearStyle"===e||"fillSpace"===e)&&(this.options.heightStyle=this._mergeHeightStyle()),a.apply(this,arguments)},_mergeHeightStyle:function(){var e=this.options;return e.fillSpace?"fill":e.clearStyle?"content":e.autoHeight?"auto":undefined}})}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var i=t._createIcons;t._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),i.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){t.activate=t._activate;var i=t._findActive;t._findActive=function(e){return-1===e&&(e=!1),e&&"number"!=typeof e&&(e=this.headers.index(this.headers.filter(e)),-1===e&&(e=!1)),i.call(this,e)}}(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,function(e,t){e.extend(t.options,{change:null,changestart:null});var i=t._trigger;t._trigger=function(e,t,a){var s=i.apply(this,arguments);return s?("beforeActivate"===e?s=i.call(this,"changestart",t,{oldHeader:a.oldHeader,oldContent:a.oldPanel,newHeader:a.newHeader,newContent:a.newPanel}):"activate"===e&&(s=i.call(this,"change",t,{oldHeader:a.oldHeader,oldContent:a.oldPanel,newHeader:a.newHeader,newContent:a.newPanel})),s):!1}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{animate:null,animated:"slide"});var i=t._create;t._create=function(){var e=this.options;null===e.animate&&(e.animate=e.animated?"slide"===e.animated?300:"bounceslide"===e.animated?{duration:200,down:{easing:"easeOutBounce",duration:1e3}}:e.animated:!1),i.call(this)}}(jQuery,jQuery.ui.accordion.prototype))})(jQuery);(function(e){var t=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,i,a;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return t=!0,a=!0,i=!0,undefined;t=!1,a=!1,i=!1;var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:t=!0,this._move("previousPage",s);break;case n.PAGE_DOWN:t=!0,this._move("nextPage",s);break;case n.UP:t=!0,this._keyEvent("previous",s);break;case n.DOWN:t=!0,this._keyEvent("next",s);break;case n.ENTER:case n.NUMPAD_ENTER:this.menu.active&&(t=!0,s.preventDefault(),this.menu.select(s));break;case n.TAB:this.menu.active&&this.menu.select(s);break;case n.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(a){if(t)return t=!1,a.preventDefault(),undefined;if(!i){var s=e.ui.keyCode;switch(a.keyCode){case s.PAGE_UP:this._move("previousPage",a);break;case s.PAGE_DOWN:this._move("nextPage",a);break;case s.UP:this._keyEvent("previous",a);break;case s.DOWN:this._keyEvent("next",a)}}},input:function(e){return a?(a=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(a){a.target===t.element[0]||a.target===i||e.contains(i,a.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var a=i.item.data("ui-autocomplete-item")||i.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:a})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(a.value):this.liveRegion.text(a.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete"),a=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=a,this._delay(function(){this.previous=a,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this.document.find(t||"body")[0]),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,i,a=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,a){a(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,s){a.xhr&&a.xhr.abort(),a.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){s(e)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,i=++t;return function(a){i===t&&e.__response(a),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(i,t),this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var a=this;e.each(i,function(e,i){a._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var a=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return a.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(e){var t,i,a,s,n="ui-button ui-widget ui-state-default ui-corner-all",r="ui-state-hover ui-state-active ",o="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var i=t.name,a=t.form,s=e([]);return i&&(s=a?e(a).find("[name='"+i+"']"):e("[name='"+i+"']",t.ownerDocument).filter(function(){return!this.form})),s};e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var r=this,o=this.options,u="checkbox"===this.type||"radio"===this.type,d=u?"":"ui-state-active",c="ui-state-focus";null===o.label&&(o.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){o.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){o.disabled||e(this).removeClass(d)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){r.buttonElement.addClass(c)}).bind("blur"+this.eventNamespace,function(){r.buttonElement.removeClass(c)}),u&&(this.element.bind("change"+this.eventNamespace,function(){s||r.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){o.disabled||(s=!1,i=e.pageX,a=e.pageY)}).bind("mouseup"+this.eventNamespace,function(e){o.disabled||(i!==e.pageX||a!==e.pageY)&&(s=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return o.disabled||s?!1:(e(this).toggleClass("ui-state-active"),r.buttonElement.attr("aria-pressed",r.element[0].checked),undefined)}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled||s)return!1;e(this).addClass("ui-state-active"),r.buttonElement.attr("aria-pressed","true");var t=r.element[0];l(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return o.disabled?!1:(e(this).addClass("ui-state-active"),t=this,r.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return o.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return o.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" "+r+" "+o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(t?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(o),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),a=this.options.icons,s=a.primary&&a.secondary,n=[];a.primary||a.secondary?(this.options.text&&n.push("ui-button-text-icon"+(s?"s":a.primary?"-primary":"-secondary")),a.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+a.primary+"'></span>"),a.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+a.secondary+"'></span>"),this.options.text||(n.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):n.push("ui-button-text-only"),t.addClass(n.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),-1!=this.className.indexOf("ui-datepicker-prev")&&$(this).removeClass("ui-datepicker-prev-hover"),-1!=this.className.indexOf("ui-datepicker-next")&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),-1!=this.className.indexOf("ui-datepicker-prev")&&$(this).addClass("ui-datepicker-prev-hover"),-1!=this.className.indexOf("ui-datepicker-next")&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var i in t)(null==t[i]||t[i]==undefined)&&(e[i]=t[i]);return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline="div"==nodeName||"span"==nodeName;target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),"input"==nodeName?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var i=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:i,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var i=$(e);t.append=$([]),t.trigger=$([]),i.hasClass(this.markerClassName)||(this._attachments(i,t),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,i,a){t.settings[i]=a}).bind("getData.datepicker",function(e,i){return this._get(t,i)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,t){var i=this._get(t,"appendText"),a=this._get(t,"isRTL");t.append&&t.append.remove(),i&&(t.append=$('<span class="'+this._appendClass+'">'+i+"</span>"),e[a?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var s=this._get(t,"showOn");if(("focus"==s||"both"==s)&&e.focus(this._showDatepicker),"button"==s||"both"==s){var n=this._get(t,"buttonText"),r=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:r,alt:n,title:n}):$('<button type="button"></button>').addClass(this._triggerClass).html(""==r?n:$("<img/>").attr({src:r,alt:n,title:n}))),e[a?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),i=this._get(e,"dateFormat");if(i.match(/[DM]/)){var a=function(e){for(var t=0,i=0,a=0;e.length>a;a++)e[a].length>t&&(t=e[a].length,i=a);return i};t.setMonth(a(this._get(e,i.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(a(this._get(e,i.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var i=$(e);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,i,a){t.settings[i]=a}).bind("getData.datepicker",function(e,i){return this._get(t,i)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block"))},_dialogDatepicker:function(e,t,i,a,s){var n=this._dialogInst;if(!n){this.uuid+=1;var r="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+r+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},$.data(this._dialogInput[0],PROP_NAME,n)}if(extendRemove(n.settings,a||{}),t=t&&t.constructor==Date?this._formatDate(n,t):t,this._dialogInput.val(t),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,!this._pos){var o=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[o/2-100+l,h/2-150+u]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,n),this},_destroyDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var a=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),"input"==a?(i.append.remove(),i.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"==a||"span"==a)&&t.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var a=e.nodeName.toLowerCase();if("input"==a)e.disabled=!1,i.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==a||"span"==a){var s=t.children("."+this._inlineClass);s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})}},_disableDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var a=e.nodeName.toLowerCase();if("input"==a)e.disabled=!0,i.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==a||"span"==a){var s=t.children("."+this._inlineClass);s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e}},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,i){var a=this._getInst(e);if(2==arguments.length&&"string"==typeof t)return"defaults"==t?$.extend({},$.datepicker._defaults):a?"all"==t?$.extend({},a.settings):this._get(a,t):null;var s=t||{};if("string"==typeof t&&(s={},s[t]=i),a){this._curInst==a&&this._hideDatepicker();var n=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");extendRemove(a.settings,s),null!==r&&s.dateFormat!==undefined&&s.minDate===undefined&&(a.settings.minDate=this._formatDate(a,r)),null!==o&&s.dateFormat!==undefined&&s.maxDate===undefined&&(a.settings.maxDate=this._formatDate(a,o)),this._attachments($(e),a),this._autoSize(a),this._setDate(a,n),this._updateAlternate(a),this._updateDatepicker(a)}},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),i=!0,a=t.dpDiv.is(".ui-datepicker-rtl");if(t._keyEvent=!0,$.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),i=!1;break;case 13:var s=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);s[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,s[0]);var n=$.datepicker._get(t,"onSelect");if(n){var r=$.datepicker._formatDate(t);n.apply(t.input?t.input[0]:null,[r,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),i=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),i=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,a?1:-1,"D"),i=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),i=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,a?-1:1,"D"),i=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),i=e.ctrlKey||e.metaKey;break;default:i=!1}else 36==e.keyCode&&e.ctrlKey?$.datepicker._showDatepicker(this):i=!1;i&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var i=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),a=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||" ">a||!i||i.indexOf(a)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var i=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));i&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(a){$.datepicker.log(a)}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!=e.nodeName.toLowerCase()&&(e=$("input",e.parentNode)[0]),!$.datepicker._isDisabledDatepicker(e)&&$.datepicker._lastInput!=e){var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var i=$.datepicker._get(t,"beforeShow"),a=i?i.apply(e,[e,t]):{};if(a!==!1){extendRemove(t.settings,a),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var s=!1;$(e).parents().each(function(){return s|="fixed"==$(this).css("position"),!s});var n={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};if($.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),n=$.datepicker._checkOffset(t,n,s),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":s?"fixed":"absolute",display:"none",left:n.left+"px",top:n.top+"px"}),!t.inline){var r=$.datepicker._get(t,"showAnim"),o=$.datepicker._get(t,"duration"),h=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(e.length){var i=$.datepicker._getBorders(t.dpDiv);e.css({left:-i[0],top:-i[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[r]||$.effects[r])?t.dpDiv.show(r,$.datepicker._get(t,"showOptions"),o,h):t.dpDiv[r||"show"](r?o:null,h),r&&o||h(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}}}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i=e.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var a=this._getNumberOfMonths(e),s=a[1],n=17;if(e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&e.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",n*s+"em"),e.dpDiv[(1!=a[0]||1!=a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus(),e.yearshtml){var r=e.yearshtml;setTimeout(function(){r===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),r=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,i){var a=e.dpDiv.outerWidth(),s=e.dpDiv.outerHeight(),n=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,o=document.documentElement.clientWidth+(i?0:$(document).scrollLeft()),h=document.documentElement.clientHeight+(i?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?a-n:0,t.left-=i&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=i&&t.top==e.input.offset().top+r?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+a>o&&o>a?Math.abs(t.left+a-o):0),t.top-=Math.min(t.top,t.top+s>h&&h>s?Math.abs(s+r):0),t},_findPos:function(e){for(var t=this._getInst(e),i=this._get(t,"isRTL");e&&("hidden"==e.type||1!=e.nodeType||$.expr.filters.hidden(e));)e=e[i?"previousSibling":"nextSibling"];var a=$(e).offset();return[a.left,a.top]},_hideDatepicker:function(e){var t=this._curInst;if(t&&(!e||t==$.data(e,PROP_NAME))&&this._datepickerShowing){var i=this._get(t,"showAnim"),a=this._get(t,"duration"),s=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[i]||$.effects[i])?t.dpDiv.hide(i,$.datepicker._get(t,"showOptions"),a,s):t.dpDiv["slideDown"==i?"slideUp":"fadeIn"==i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1;var n=this._get(t,"onClose");n&&n.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if($.datepicker._curInst){var t=$(e.target),i=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&0==t.parents("#"+$.datepicker._mainDivId).length&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=i)&&$.datepicker._hideDatepicker()}},_adjustDate:function(e,t,i){var a=$(e),s=this._getInst(a[0]);this._isDisabledDatepicker(a[0])||(this._adjustInstDate(s,t+("M"==i?this._get(s,"showCurrentAtPos"):0),i),this._updateDatepicker(s))},_gotoToday:function(e){var t=$(e),i=this._getInst(t[0]);if(this._get(i,"gotoCurrent")&&i.currentDay)i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear;else{var a=new Date;i.selectedDay=a.getDate(),i.drawMonth=i.selectedMonth=a.getMonth(),i.drawYear=i.selectedYear=a.getFullYear()}this._notifyChange(i),this._adjustDate(t)},_selectMonthYear:function(e,t,i){var a=$(e),s=this._getInst(a[0]);s["selected"+("M"==i?"Month":"Year")]=s["draw"+("M"==i?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(a)},_selectDay:function(e,t,i,a){var s=$(e);if(!$(a).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(s[0])){var n=this._getInst(s[0]);n.selectedDay=n.currentDay=$("a",a).html(),n.selectedMonth=n.currentMonth=t,n.selectedYear=n.currentYear=i,this._selectDate(e,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear))}},_clearDate:function(e){var t=$(e);this._getInst(t[0]),this._selectDate(t,"")},_selectDate:function(e,t){var i=$(e),a=this._getInst(i[0]);t=null!=t?t:this._formatDate(a),a.input&&a.input.val(t),this._updateAlternate(a);var s=this._get(a,"onSelect");s?s.apply(a.input?a.input[0]:null,[t,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var i=this._get(e,"altFormat")||this._get(e,"dateFormat"),a=this._getDate(e),s=this.formatDate(i,a,this._getFormatConfig(e));$(t).each(function(){$(this).val(s)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var i=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((i-t)/864e5)/7)+1},parseDate:function(e,t,i){if(null==e||null==t)throw"Invalid arguments";if(t="object"==typeof t?""+t:t+"",""==t)return null;var a=(i?i.shortYearCutoff:null)||this._defaults.shortYearCutoff;a="string"!=typeof a?a:(new Date).getFullYear()%100+parseInt(a,10);for(var s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=-1,l=-1,u=-1,d=-1,c=!1,p=function(t){var i=e.length>y+1&&e.charAt(y+1)==t;return i&&y++,i},m=function(e){var i=p(e),a="@"==e?14:"!"==e?20:"y"==e&&i?4:"o"==e?3:2,s=RegExp("^\\d{1,"+a+"}"),n=t.substring(v).match(s);if(!n)throw"Missing number at position "+v;return v+=n[0].length,parseInt(n[0],10)},f=function(e,i,a){var s=$.map(p(e)?a:i,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),n=-1;if($.each(s,function(e,i){var a=i[1];return t.substr(v,a.length).toLowerCase()==a.toLowerCase()?(n=i[0],v+=a.length,!1):undefined}),-1!=n)return n+1;throw"Unknown name at position "+v},g=function(){if(t.charAt(v)!=e.charAt(y))throw"Unexpected literal at position "+v;v++},v=0,y=0;e.length>y;y++)if(c)"'"!=e.charAt(y)||p("'")?g():c=!1;else switch(e.charAt(y)){case"d":u=m("d");break;case"D":f("D",s,n);break;case"o":d=m("o");break;case"m":l=m("m");break;case"M":l=f("M",r,o);break;case"y":h=m("y");break;case"@":var b=new Date(m("@"));h=b.getFullYear(),l=b.getMonth()+1,u=b.getDate();break;case"!":var b=new Date((m("!")-this._ticksTo1970)/1e4);h=b.getFullYear(),l=b.getMonth()+1,u=b.getDate();break;case"'":p("'")?g():c=!0;break;default:g()}if(t.length>v){var _=t.substr(v);if(!/^\s+/.test(_))throw"Extra/unparsed characters found in date: "+_}if(-1==h?h=(new Date).getFullYear():100>h&&(h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a>=h?0:-100)),d>-1)for(l=1,u=d;;){var k=this._getDaysInMonth(h,l-1);if(k>=u)break;l++,u-=k}var b=this._daylightSavingAdjust(new Date(h,l-1,u));if(b.getFullYear()!=h||b.getMonth()+1!=l||b.getDate()!=u)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,s=(i?i.dayNames:null)||this._defaults.dayNames,n=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,o=function(t){var i=e.length>c+1&&e.charAt(c+1)==t;return i&&c++,i},h=function(e,t,i){var a=""+t;if(o(e))for(;i>a.length;)a="0"+a;return a},l=function(e,t,i,a){return o(e)?a[t]:i[t]},u="",d=!1;if(t)for(var c=0;e.length>c;c++)if(d)"'"!=e.charAt(c)||o("'")?u+=e.charAt(c):d=!1;else switch(e.charAt(c)){case"d":u+=h("d",t.getDate(),2);break;case"D":u+=l("D",t.getDay(),a,s);break;case"o":u+=h("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",t.getMonth()+1,2);break;case"M":u+=l("M",t.getMonth(),n,r);break;case"y":u+=o("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":u+=t.getTime();break;case"!":u+=1e4*t.getTime()+this._ticksTo1970;break;case"'":o("'")?u+="'":d=!0;break;default:u+=e.charAt(c)}return u},_possibleChars:function(e){for(var t="",i=!1,a=function(t){var i=e.length>s+1&&e.charAt(s+1)==t;return i&&s++,i},s=0;e.length>s;s++)if(i)"'"!=e.charAt(s)||a("'")?t+=e.charAt(s):i=!1;else switch(e.charAt(s)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":a("'")?t+="'":i=!0;break;default:t+=e.charAt(s)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!=e.lastVal){var i,a,s=this._get(e,"dateFormat"),n=e.lastVal=e.input?e.input.val():null;i=a=this._getDefaultDate(e);var r=this._getFormatConfig(e);try{i=this.parseDate(s,n,r)||a}catch(o){this.log(o),n=t?"":n}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=n?i.getDate():0,e.currentMonth=n?i.getMonth():0,e.currentYear=n?i.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,i){var a=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(i){}for(var a=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,s=a.getFullYear(),n=a.getMonth(),r=a.getDate(),o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=o.exec(t);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":n+=parseInt(h[1],10),r=Math.min(r,$.datepicker._getDaysInMonth(s,n));break;case"y":case"Y":s+=parseInt(h[1],10),r=Math.min(r,$.datepicker._getDaysInMonth(s,n))}h=o.exec(t)}return new Date(s,n,r)},n=null==t||""===t?i:"string"==typeof t?s(t):"number"==typeof t?isNaN(t)?i:a(t):new Date(t.getTime());return n=n&&"Invalid Date"==""+n?i:n,n&&(n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0)),this._daylightSavingAdjust(n)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s==e.selectedMonth&&n==e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""==e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),i="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(i,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(i,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(i,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var i=this._get(e,"isRTL"),a=this._get(e,"showButtonPanel"),s=this._get(e,"hideIfNoPrevNext"),n=this._get(e,"navigationAsDateFormat"),r=this._getNumberOfMonths(e),o=this._get(e,"showCurrentAtPos"),h=this._get(e,"stepMonths"),l=1!=r[0]||1!=r[1],u=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),d=this._getMinMaxDate(e,"min"),c=this._getMinMaxDate(e,"max"),p=e.drawMonth-o,m=e.drawYear;if(0>p&&(p+=12,m--),c){var f=this._daylightSavingAdjust(new Date(c.getFullYear(),c.getMonth()-r[0]*r[1]+1,c.getDate()));for(f=d&&d>f?d:f;this._daylightSavingAdjust(new Date(m,p,1))>f;)p--,0>p&&(p=11,m--)}e.drawMonth=p,e.drawYear=m;var g=this._get(e,"prevText");g=n?this.formatDate(g,this._daylightSavingAdjust(new Date(m,p-h,1)),this._getFormatConfig(e)):g;var v=this._canAdjustMonth(e,-1,m,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+g+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"e":"w")+'">'+g+"</span></a>":s?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+g+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"e":"w")+'">'+g+"</span></a>",y=this._get(e,"nextText");y=n?this.formatDate(y,this._daylightSavingAdjust(new Date(m,p+h,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,m,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"w":"e")+'">'+y+"</span></a>":s?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"w":"e")+'">'+y+"</span></a>",_=this._get(e,"currentText"),k=this._get(e,"gotoCurrent")&&e.currentDay?u:t;_=n?this.formatDate(_,k,this._getFormatConfig(e)):_;var x=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",D=a?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(i?x:"")+(this._isInRange(e,k)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+_+"</button>":"")+(i?"":x)+"</div>":"",w=parseInt(this._get(e,"firstDay"),10);w=isNaN(w)?0:w;var T=this._get(e,"showWeek"),S=this._get(e,"dayNames");this._get(e,"dayNamesShort");var M=this._get(e,"dayNamesMin"),N=this._get(e,"monthNames"),C=this._get(e,"monthNamesShort"),A=this._get(e,"beforeShowDay"),P=this._get(e,"showOtherMonths"),j=this._get(e,"selectOtherMonths");this._get(e,"calculateWeek")||this.iso8601Week;for(var I=this._getDefaultDate(e),F="",H=0;r[0]>H;H++){var E="";this.maxRows=4;for(var z=0;r[1]>z;z++){var L=this._daylightSavingAdjust(new Date(m,p,e.selectedDay)),O=" ui-corner-all",R="";if(l){if(R+='<div class="ui-datepicker-group',r[1]>1)switch(z){case 0:R+=" ui-datepicker-group-first",O=" ui-corner-"+(i?"right":"left");break;case r[1]-1:R+=" ui-datepicker-group-last",O=" ui-corner-"+(i?"left":"right");break;default:R+=" ui-datepicker-group-middle",O=""}R+='">'}R+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+O+'">'+(/all|left/.test(O)&&0==H?i?b:v:"")+(/all|right/.test(O)&&0==H?i?v:b:"")+this._generateMonthYearHeader(e,p,m,d,c,H>0||z>0,N,C)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";for(var W=T?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"",Y=0;7>Y;Y++){var J=(Y+w)%7;W+="<th"+((Y+w+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+S[J]+'">'+M[J]+"</span></th>"}R+=W+"</tr></thead><tbody>";var Q=this._getDaysInMonth(m,p);m==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,Q));var B=(this._getFirstDayOfMonth(m,p)-w+7)%7,K=Math.ceil((B+Q)/7),V=l?this.maxRows>K?this.maxRows:K:K;this.maxRows=V;for(var U=this._daylightSavingAdjust(new Date(m,p,1-B)),G=0;V>G;G++){R+="<tr>";for(var q=T?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(U)+"</td>":"",Y=0;7>Y;Y++){var X=A?A.apply(e.input?e.input[0]:null,[U]):[!0,""],Z=U.getMonth()!=p,et=Z&&!j||!X[0]||d&&d>U||c&&U>c;q+='<td class="'+((Y+w+6)%7>=5?" ui-datepicker-week-end":"")+(Z?" ui-datepicker-other-month":"")+(U.getTime()==L.getTime()&&p==e.selectedMonth&&e._keyEvent||I.getTime()==U.getTime()&&I.getTime()==L.getTime()?" "+this._dayOverClass:"")+(et?" "+this._unselectableClass+" ui-state-disabled":"")+(Z&&!P?"":" "+X[1]+(U.getTime()==u.getTime()?" "+this._currentClass:"")+(U.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+(Z&&!P||!X[2]?"":' title="'+X[2]+'"')+(et?"":' data-handler="selectDay" data-event="click" data-month="'+U.getMonth()+'" data-year="'+U.getFullYear()+'"')+">"+(Z&&!P?"&#xa0;":et?'<span class="ui-state-default">'+U.getDate()+"</span>":'<a class="ui-state-default'+(U.getTime()==t.getTime()?" ui-state-highlight":"")+(U.getTime()==u.getTime()?" ui-state-active":"")+(Z?" ui-priority-secondary":"")+'" href="#">'+U.getDate()+"</a>")+"</td>",U.setDate(U.getDate()+1),U=this._daylightSavingAdjust(U)
}R+=q+"</tr>"}p++,p>11&&(p=0,m++),R+="</tbody></table>"+(l?"</div>"+(r[0]>0&&z==r[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),E+=R}F+=E}return F+=D+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,F},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var h=this._get(e,"changeMonth"),l=this._get(e,"changeYear"),u=this._get(e,"showMonthAfterYear"),d='<div class="ui-datepicker-title">',c="";if(n||!h)c+='<span class="ui-datepicker-month">'+r[t]+"</span>";else{var p=a&&a.getFullYear()==i,m=s&&s.getFullYear()==i;c+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var f=0;12>f;f++)(!p||f>=a.getMonth())&&(!m||s.getMonth()>=f)&&(c+='<option value="'+f+'"'+(f==t?' selected="selected"':"")+">"+o[f]+"</option>");c+="</select>"}if(u||(d+=c+(!n&&h&&l?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!l)d+='<span class="ui-datepicker-year">'+i+"</span>";else{var g=this._get(e,"yearRange").split(":"),v=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?i+parseInt(e.substring(1),10):e.match(/[+-].*/)?v+parseInt(e,10):parseInt(e,10);return isNaN(t)?v:t},b=y(g[0]),_=Math.max(b,y(g[1]||""));for(b=a?Math.max(b,a.getFullYear()):b,_=s?Math.min(_,s.getFullYear()):_,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';_>=b;b++)e.yearshtml+='<option value="'+b+'"'+(b==i?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",d+=e.yearshtml,e.yearshtml=null}return d+=this._get(e,"yearSuffix"),u&&(d+=(!n&&h&&l?"":"&#xa0;")+c),d+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"==i?t:0),s=e.drawMonth+("M"==i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"==i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"==i||"Y"==i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return s=a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max");return(!i||t.getTime()>=i.getTime())&&(!a||t.getTime()<=a.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!=e&&"getDate"!=e&&"widget"!=e?"option"==e&&2==arguments.length&&"string"==typeof arguments[1]?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){"string"==typeof e?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$})(jQuery);(function(e,t){var i="ui-dialog ui-widget ui-widget-content ui-corner-all ",a={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},s={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),"string"!=typeof this.originalTitle&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;var a,s,n,r,o,h=this,l=this.options,u=l.title||"&#160;";a=(this.uiDialog=e("<div>")).addClass(i+l.dialogClass).css({display:"none",outline:0,zIndex:l.zIndex}).attr("tabIndex",-1).keydown(function(t){l.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE&&(h.close(t),t.preventDefault())}).mousedown(function(e){h.moveToTop(!1,e)}).appendTo("body"),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(a),s=(this.uiDialogTitlebar=e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){a.focus()}).prependTo(a),n=e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(e){e.preventDefault(),h.close(e)}).appendTo(s),(this.uiDialogTitlebarCloseText=e("<span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(n),r=e("<span>").uniqueId().addClass("ui-dialog-title").html(u).prependTo(s),o=(this.uiDialogButtonPane=e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),(this.uiButtonSet=e("<div>")).addClass("ui-dialog-buttonset").appendTo(o),a.attr({role:"dialog","aria-labelledby":r.attr("id")}),s.find("*").add(s).disableSelection(),this._hoverable(n),this._focusable(n),l.draggable&&e.fn.draggable&&this._makeDraggable(),l.resizable&&e.fn.resizable&&this._makeResizable(),this._createButtons(l.buttons),this._isOpen=!1,e.fn.bgiframe&&a.bgiframe(),this._on(a,{keydown:function(i){if(l.modal&&i.keyCode===e.ui.keyCode.TAB){var s=e(":tabbable",a),n=s.filter(":first"),r=s.filter(":last");return i.target!==r[0]||i.shiftKey?i.target===n[0]&&i.shiftKey?(r.focus(1),!1):t:(n.focus(1),!1)}}})},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var e,t=this.oldPosition;this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(t){var i,a,s=this;if(this._isOpen&&!1!==this._trigger("beforeClose",t))return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this.options.hide?this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)}):(this.uiDialog.hide(),this._trigger("close",t)),e.ui.dialog.overlay.resize(),this.options.modal&&(i=0,e(".ui-dialog").each(function(){this!==s.uiDialog[0]&&(a=e(this).css("z-index"),isNaN(a)||(i=Math.max(i,a)))}),e.ui.dialog.maxZ=i),this},isOpen:function(){return this._isOpen},moveToTop:function(t,i){var a,s=this.options;return s.modal&&!t||!s.stack&&!s.modal?this._trigger("focus",i):(s.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=s.zIndex),this.overlay&&(e.ui.dialog.maxZ+=1,e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ,this.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ)),a={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},e.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",e.ui.dialog.maxZ),this.element.attr(a),this._trigger("focus",i),this)},open:function(){if(!this._isOpen){var t,i=this.options,a=this.uiDialog;return this._size(),this._position(i.position),a.show(i.show),this.overlay=i.modal?new e.ui.dialog.overlay(this):null,this.moveToTop(!0),t=this.element.find(":tabbable"),t.length||(t=this.uiDialogButtonPane.find(":tabbable"),t.length||(t=a)),t.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this}},_createButtons:function(t){var i=this,a=!1;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),"object"==typeof t&&null!==t&&e.each(t,function(){return!(a=!0)}),a?(e.each(t,function(t,a){var s,n;a=e.isFunction(a)?{click:a,text:t}:a,a=e.extend({type:"button"},a),n=a.click,a.click=function(){n.apply(i.element[0],arguments)},s=e("<button></button>",a).appendTo(i.uiButtonSet),e.fn.button&&s.button()}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,a=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(a,s){e(this).addClass("ui-dialog-dragging"),i._trigger("dragStart",a,t(s))},drag:function(e,a){i._trigger("drag",e,t(a))},stop:function(s,n){a.position=[n.position.left-i.document.scrollLeft(),n.position.top-i.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),i._trigger("dragStop",s,t(n)),e.ui.dialog.overlay.resize()}})},_makeResizable:function(i){function a(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}i=i===t?this.options.resizable:i;var s=this,n=this.options,r=this.uiDialog.css("position"),o="string"==typeof i?i:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:o,start:function(t,i){e(this).addClass("ui-dialog-resizing"),s._trigger("resizeStart",t,a(i))},resize:function(e,t){s._trigger("resize",e,a(t))},stop:function(t,i){e(this).removeClass("ui-dialog-resizing"),n.height=e(this).height(),n.width=e(this).width(),s._trigger("resizeStop",t,a(i)),e.ui.dialog.overlay.resize()}}).css("position",r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(t){var i,a=[],s=[0,0];t?(("string"==typeof t||"object"==typeof t&&"0"in t)&&(a=t.split?t.split(" "):[t[0],t[1]],1===a.length&&(a[1]=a[0]),e.each(["left","top"],function(e,t){+a[e]===a[e]&&(s[e]=a[e],a[e]=t)}),t={my:a[0]+(0>s[0]?s[0]:"+"+s[0])+" "+a[1]+(0>s[1]?s[1]:"+"+s[1]),at:a.join(" ")}),t=e.extend({},e.ui.dialog.prototype.options.position,t)):t=e.ui.dialog.prototype.options.position,i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()},_setOptions:function(t){var i=this,n={},r=!1;e.each(t,function(e,t){i._setOption(e,t),e in a&&(r=!0),e in s&&(n[e]=t)}),r&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(t,a){var s,n,r=this.uiDialog;switch(t){case"buttons":this._createButtons(a);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+a);break;case"dialogClass":r.removeClass(this.options.dialogClass).addClass(i+a);break;case"disabled":a?r.addClass("ui-dialog-disabled"):r.removeClass("ui-dialog-disabled");break;case"draggable":s=r.is(":data(draggable)"),s&&!a&&r.draggable("destroy"),!s&&a&&this._makeDraggable();break;case"position":this._position(a);break;case"resizable":n=r.is(":data(resizable)"),n&&!a&&r.resizable("destroy"),n&&"string"==typeof a&&r.resizable("option","handles",a),n||a===!1||this._makeResizable(a);break;case"title":e(".ui-dialog-title",this.uiDialogTitlebar).html(""+(a||"&#160;"))}this._super(t,a)},_size:function(){var t,i,a,s=this.options,n=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),i=Math.max(0,s.minHeight-t),"auto"===s.height?e.support.minHeight?this.element.css({minHeight:i,height:"auto"}):(this.uiDialog.show(),a=this.element.css("height","auto").height(),n||this.uiDialog.hide(),this.element.height(Math.max(a,i))):this.element.height(Math.max(s.height-t,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),e.extend(e.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(i){0===this.instances.length&&(setTimeout(function(){e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,function(i){return e(i.target).zIndex()<e.ui.dialog.overlay.maxZ?!1:t})},1),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var a=this.oldInstances.pop()||e("<div>").addClass("ui-widget-overlay");return e(document).bind("keydown.dialog-overlay",function(t){var s=e.ui.dialog.overlay.instances;0!==s.length&&s[s.length-1]===a&&i.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE&&(i.close(t),t.preventDefault())}),a.appendTo(document.body).css({width:this.width(),height:this.height()}),e.fn.bgiframe&&a.bgiframe(),this.instances.push(a),a},destroy:function(t){var i=e.inArray(t,this.instances),a=0;-1!==i&&this.oldInstances.push(this.instances.splice(i,1)[0]),0===this.instances.length&&e([document,window]).unbind(".dialog-overlay"),t.height(0).width(0).remove(),e.each(this.instances,function(){a=Math.max(a,this.css("z-index"))}),this.maxZ=a},height:function(){var t,i;return e.ui.ie?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),i>t?e(window).height()+"px":t+"px"):e(document).height()+"px"},width:function(){var t,i;return e.ui.ie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),i>t?e(window).width()+"px":t+"px"):e(document).width()+"px"},resize:function(){var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy:function(){e.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);(function(e){var t=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(i){var s=e(i.target).closest(".ui-menu-item");!t&&s.not(".ui-state-disabled").length&&(t=!0,this.select(i),s.has(".ui-menu").length?this.expand(i):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var i=e(t.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(i){e(i.target).closest(".ui-menu").length||this.collapseAll(i),t=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,a,n,r,o,h=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:h=!1,a=this.previousFilter||"",n=String.fromCharCode(t.keyCode),r=!1,clearTimeout(this.filterTimer),n===a?r=!0:n=a+n,o=RegExp("^"+i(n),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),s=r&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(n=String.fromCharCode(t.keyCode),o=RegExp("^"+i(n),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),s.length?(this.focus(t,s),s.length>1?(this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),s=t.prev("a"),a=e("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(a),t.attr("aria-labelledby",s.attr("id"))}),t=s.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,a,n,r,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,a=t.offset().top-this.activeMenu.offset().top-i-s,n=this.activeMenu.scrollTop(),r=this.activeMenu.height(),o=t.height(),0>a?this.activeMenu.scrollTop(n+a):a+o>r&&this.activeMenu.scrollTop(n+a-r+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[t]()),this.focus(i,s)},nextPage:function(t){var i,s,a;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,a=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-a}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(t),undefined)},previousPage:function(t){var i,s,a;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,a=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+a>0}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(t),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return e===t?this._value():(this._setOption("value",e),this)},_setOption:function(e,t){"value"===e&&(this.options.value=t,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(e,t)},_value:function(){var e=this.options.value;return"number"!=typeof e&&(e=0),Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var e=this.value(),t=this._percentage();this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(t.toFixed(0)+"%"),this.element.attr("aria-valuenow",e)}})})(jQuery);(function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var i,s,a=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),r="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(a.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),a.range&&(a.range===!0&&(a.values||(a.values=[this._valueMin(),this._valueMin()]),a.values.length&&2!==a.values.length&&(a.values=[a.values[0],a.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+("min"===a.range||"max"===a.range?" ui-slider-range-"+a.range:""))),s=a.values&&a.values.length||1,i=n.length;s>i;i++)o.push(r);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){a.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){a.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(i){var s,a,n,r,o=e(i.target).data("ui-slider-handle-index");switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(i.target).addClass("ui-state-active"),s=this._start(i,o),s===!1))return}switch(r=this.options.step,a=n=this.options.values&&this.options.values.length?this.values(o):this.value(),i.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(a+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(a-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(a===this._valueMax())return;n=this._trimAlignValue(a+r);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(a===this._valueMin())return;n=this._trimAlignValue(a-r)}this._slide(i,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,a,n,r,o,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),a=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));a>i&&(a=i,n=e(this),r=t)}),d.range===!0&&this.values(1)===d.min&&(r+=1,n=e(this.handles[r])),o=this._start(t,r),o===!1?!1:(this._mouseSliding=!0,this._handleIndex=r,n.addClass("ui-state-active").focus(),h=n.offset(),l=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-n.width()/2,top:t.pageY-h.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,r,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,a,n;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),a=this._valueMax()-this._valueMin(),n=this._valueMin()+s*a,this._trimAlignValue(n)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,a,n;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(a=this.values(),a[t]=i,n=this._trigger("slide",e,{handle:this.handles[t],value:i,values:a}),s=this.values(t?0:1),n!==!1&&this.values(t,i,!0))):i!==this.value()&&(n=this._trigger("slide",e,{handle:this.handles[t],value:i}),n!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,i){var s,a,n;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,a=arguments[0],n=0;s.length>n;n+=1)s[n]=this._trimAlignValue(a[n]),this._change(null,n);this._refreshValue()},_setOption:function(t,i){var s,a=0;switch(e.isArray(this.options.values)&&(a=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"disabled":i?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;a>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,s,a,n,r=this.options.range,o=this.options,h=this,l=this._animateOff?!1:o.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,o.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},o.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},o.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(s=this.value(),a=this._valueMin(),n=this._valueMax(),i=n!==a?100*((s-a)/(n-a)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,o.animate),"min"===r&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},o.animate),"max"===r&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:o.animate}),"min"===r&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},o.animate),"max"===r&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:o.animate}))}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var a=i.attr(s);void 0!==a&&a.length&&(t[s]=a)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),this._super(e,t),"disabled"===e&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._spin((e||1)*this.options.step)},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._spin((e||1)*-this.options.step)},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(t(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++a}function s(e){return e.hash.length>1&&e.href.replace(n,"")===location.href.replace(n,"").replace(/\s/g,"%20")}var a=0,n=/#.*$/;e.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var i=this,s=this.options,a=s.active,n=location.hash.substring(1);this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",s.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),null===a&&(n&&this.tabs.each(function(i,s){return e(s).attr("aria-controls")===n?(a=i,!1):t}),null===a&&(a=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===a||-1===a)&&(a=this.tabs.length?0:!1)),a!==!1&&(a=this.tabs.index(this.tabs.eq(a)),-1===a&&(a=s.collapsible?!1:0)),s.active=a,!s.collapsible&&s.active===!1&&this.anchors.length&&(s.active=0),e.isArray(s.disabled)&&(s.disabled=e.unique(s.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return i.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(this.options.active):e(),this._refresh(),this.active.length&&this.load(s.active)},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(i){var s=e(this.document[0].activeElement).closest("li"),a=this.tabs.index(s),n=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:a++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,a--;break;case e.ui.keyCode.END:a=this.anchors.length-1;break;case e.ui.keyCode.HOME:a=0;break;case e.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(a),t;case e.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(a===this.options.active?!1:a),t;default:return}i.preventDefault(),clearTimeout(this.activating),a=this._focusNextTab(a,n),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(a).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",a)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):t},_findNextTab:function(t,i){function s(){return t>a&&(t=0),0>t&&(t=a),t}for(var a=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,i){return"active"===e?(this._activate(i),t):"disabled"===e?(this._setupDisabled(i),t):(this._super(e,i),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(i),"heightStyle"===e&&this._setupHeightStyle(i),t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,a){var n,r,o,h=e(a).uniqueId().attr("id"),l=e(a).closest("li"),u=l.attr("aria-controls");s(a)?(n=a.hash,r=t.element.find(t._sanitizeSelector(n))):(o=t._tabId(l),n="#"+o,r=t.element.find(n),r.length||(r=t._createPanel(o),r.insertAfter(t.panels[i-1]||t.tablist)),r.attr("aria-live","polite")),r.length&&(t.panels=t.panels.add(r)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":n.substring(1),"aria-labelledby":h}),r.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s,a=this.element.parent();"fill"===t?(e.support.minHeight||(s=a.css("overflow"),a.css("overflow","hidden")),i=a.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),s&&a.css("overflow",s),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,a=e(t.currentTarget),n=a.closest("li"),r=n[0]===s[0],o=r&&i.collapsible,h=o?e():this._getPanelForTab(n),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:o?e():n,newPanel:h};t.preventDefault(),n.hasClass("ui-state-disabled")||n.hasClass("ui-tabs-loading")||this.running||r&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=o?!1:this.tabs.index(n),this.active=r?e():n,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(n),t),this._toggle(t,u))},_toggle:function(t,i){function s(){n.running=!1,n._trigger("activate",t,i)}function a(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&n.options.show?n._show(r,n.options.show,s):(r.show(),s())}var n=this,r=i.newPanel,o=i.oldPanel;this.running=!0,o.length&&this.options.hide?this._hide(o,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),a()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),o.hide(),a()),o.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),r.length&&o.length?i.oldTab.attr("tabIndex",-1):r.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),r.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===t?s=!1:(i=this._getIndex(i),s=e.isArray(s)?e.map(s,function(e){return e!==i?e:null}):e.map(this.tabs,function(e,t){return t!==i?t:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===t)s=!0;else{if(i=this._getIndex(i),-1!==e.inArray(i,s))return;s=e.isArray(s)?e.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(t,i){t=this._getIndex(t);var a=this,n=this.tabs.eq(t),r=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),h={tab:n,panel:o};s(r[0])||(this.xhr=e.ajax(this._ajaxSettings(r,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){o.html(e),a._trigger("load",i,h)},1)}).complete(function(e,t){setTimeout(function(){"abort"===t&&a.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===a.xhr&&delete a.xhr},1)})))},_ajaxSettings:function(t,i,s){var a=this;return{url:t.attr("href"),beforeSend:function(t,n){return a._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:n},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.uiBackCompat!==!1&&(e.ui.tabs.prototype._ui=function(e,t){return{tab:e,panel:t,index:this.anchors.index(e)}},e.widget("ui.tabs",e.ui.tabs,{url:function(e,t){this.anchors.eq(e).attr("href",t)}}),e.widget("ui.tabs",e.ui.tabs,{options:{ajaxOptions:null,cache:!1},_create:function(){this._super();var i=this;this._on({tabsbeforeload:function(s,a){return e.data(a.tab[0],"cache.tabs")?(s.preventDefault(),t):(a.jqXHR.success(function(){i.options.cache&&e.data(a.tab[0],"cache.tabs",!0)}),t)}})},_ajaxSettings:function(t,i,s){var a=this.options.ajaxOptions;return e.extend({},a,{error:function(e,t){try{a.error(e,t,s.tab.closest("li").index(),s.tab[0])}catch(i){}}},this._superApply(arguments))},_setOption:function(e,t){"cache"===e&&t===!1&&this.anchors.removeData("cache.tabs"),this._super(e,t)},_destroy:function(){this.anchors.removeData("cache.tabs"),this._super()},url:function(e){this.anchors.eq(e).removeData("cache.tabs"),this._superApply(arguments)}}),e.widget("ui.tabs",e.ui.tabs,{abort:function(){this.xhr&&this.xhr.abort()}}),e.widget("ui.tabs",e.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super(),this._on({tabsbeforeload:function(e,t){if(e.target===this.element[0]&&this.options.spinner){var i=t.tab.find("span"),s=i.html();i.html(this.options.spinner),t.jqXHR.complete(function(){i.html(s)})}}})}}),e.widget("ui.tabs",e.ui.tabs,{options:{enable:null,disable:null},enable:function(t){var i,s=this.options;(t&&s.disabled===!0||e.isArray(s.disabled)&&-1!==e.inArray(t,s.disabled))&&(i=!0),this._superApply(arguments),i&&this._trigger("enable",null,this._ui(this.anchors[t],this.panels[t]))},disable:function(t){var i,s=this.options;(t&&s.disabled===!1||e.isArray(s.disabled)&&-1===e.inArray(t,s.disabled))&&(i=!0),this._superApply(arguments),i&&this._trigger("disable",null,this._ui(this.anchors[t],this.panels[t]))}}),e.widget("ui.tabs",e.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(i,s,a){a===t&&(a=this.anchors.length);var n,r,o=this.options,h=e(o.tabTemplate.replace(/#\{href\}/g,i).replace(/#\{label\}/g,s)),l=i.indexOf("#")?this._tabId(h):i.replace("#","");return h.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",!0),h.attr("aria-controls",l),n=a>=this.tabs.length,r=this.element.find("#"+l),r.length||(r=this._createPanel(l),n?a>0?r.insertAfter(this.panels.eq(-1)):r.appendTo(this.element):r.insertBefore(this.panels[a])),r.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),n?h.appendTo(this.tablist):h.insertBefore(this.tabs[a]),o.disabled=e.map(o.disabled,function(e){return e>=a?++e:e}),this.refresh(),1===this.tabs.length&&o.active===!1&&this.option("active",0),this._trigger("add",null,this._ui(this.anchors[a],this.panels[a])),this},remove:function(t){t=this._getIndex(t);var i=this.options,s=this.tabs.eq(t).remove(),a=this._getPanelForTab(s).remove();return s.hasClass("ui-tabs-active")&&this.anchors.length>2&&this._activate(t+(this.anchors.length>t+1?1:-1)),i.disabled=e.map(e.grep(i.disabled,function(e){return e!==t}),function(e){return e>=t?--e:e}),this.refresh(),this._trigger("remove",null,this._ui(s.find("a")[0],a[0])),this}}),e.widget("ui.tabs",e.ui.tabs,{length:function(){return this.anchors.length}}),e.widget("ui.tabs",e.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(t){var s=t.is("li")?t.find("a[href]"):t;return s=s[0],e(s).closest("li").attr("aria-controls")||s.title&&s.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+i()}}),e.widget("ui.tabs",e.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(t){return e(this.options.panelTemplate).attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)}}),e.widget("ui.tabs",e.ui.tabs,{_create:function(){var e=this.options;null===e.active&&e.selected!==t&&(e.active=-1===e.selected?!1:e.selected),this._super(),e.selected=e.active,e.selected===!1&&(e.selected=-1)},_setOption:function(e,t){if("selected"!==e)return this._super(e,t);var i=this.options;this._super("active",-1===t?!1:t),i.selected=i.active,i.selected===!1&&(i.selected=-1)},_eventHandler:function(){this._superApply(arguments),this.options.selected=this.options.active,this.options.selected===!1&&(this.options.selected=-1)}}),e.widget("ui.tabs",e.ui.tabs,{options:{show:null,select:null},_create:function(){this._super(),this.options.active!==!1&&this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))},_trigger:function(e,t,i){var s,a,n=this._superApply(arguments);return n?("beforeActivate"===e?(s=i.newTab.length?i.newTab:i.oldTab,a=i.newPanel.length?i.newPanel:i.oldPanel,n=this._super("select",t,{tab:s.find(".ui-tabs-anchor")[0],panel:a[0],index:s.closest("li").index()})):"activate"===e&&i.newTab.length&&(n=this._super("show",t,{tab:i.newTab.find(".ui-tabs-anchor")[0],panel:i.newPanel[0],index:i.newTab.closest("li").index()})),n):!1}}),e.widget("ui.tabs",e.ui.tabs,{select:function(e){if(e=this._getIndex(e),-1===e){if(!this.options.collapsible||-1===this.options.selected)return;e=this.options.selected}this.anchors.eq(e).trigger(this.options.event+this.eventNamespace)}}),function(){var t=0;e.widget("ui.tabs",e.ui.tabs,{options:{cookie:null},_create:function(){var e,t=this.options;null==t.active&&t.cookie&&(e=parseInt(this._cookie(),10),-1===e&&(e=!1),t.active=e),this._super()},_cookie:function(i){var s=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++t)];return arguments.length&&(s.push(i===!1?-1:i),s.push(this.options.cookie)),e.cookie.apply(null,s)},_refresh:function(){this._super(),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_eventHandler:function(){this._superApply(arguments),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_destroy:function(){this._super(),this.options.cookie&&this._cookie(null,this.options.cookie)}})}(),e.widget("ui.tabs",e.ui.tabs,{_trigger:function(t,i,s){var a=e.extend({},s);return"load"===t&&(a.panel=a.panel[0],a.tab=a.tab.find(".ui-tabs-anchor")[0]),this._super(t,i,a)}}),e.widget("ui.tabs",e.ui.tabs,{options:{fx:null},_getFx:function(){var t,i,s=this.options.fx;return s&&(e.isArray(s)?(t=s[0],i=s[1]):t=i=s),s?{show:i,hide:t}:null},_toggle:function(e,i){function s(){n.running=!1,n._trigger("activate",e,i)}function a(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&h.show?r.animate(h.show,h.show.duration,function(){s()}):(r.show(),s())}var n=this,r=i.newPanel,o=i.oldPanel,h=this._getFx();return h?(n.running=!0,o.length&&h.hide?o.animate(h.hide,h.hide.duration,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),a()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),o.hide(),a()),t):this._super(e,i)}}))})(jQuery);(function(e){function t(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))}function i(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),a=e.inArray(i,s);-1!==a&&s.splice(a,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")}var s=0;e.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){return e(this).attr("title")},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var a=e.Event("blur");a.target=a.currentTarget=s[0],t.close(a,!0)}),this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,a=this,n=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){e.data("ui-tooltip-open")&&a._delay(function(){t&&(t.type=n),this._open(t,e,i)})}),i&&this._open(t,e,i),void 0)},_open:function(i,s,a){function n(e){l.of=e,r.is(":hidden")||r.position(l)}var r,o,h,l=e.extend({},this.options.position);if(a){if(r=this._find(s),r.length)return r.find(".ui-tooltip-content").html(a),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),r=this._tooltip(s),t(s,r.attr("id")),r.find(".ui-tooltip-content").html(a),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:n}),n(i)):r.position(e.extend({of:s},this.options.position)),r.hide(),this._show(r,this.options.show),this.options.show&&this.options.show.delay&&(h=setInterval(function(){r.is(":visible")&&(n(l.of),clearInterval(h))},e.fx.interval)),this._trigger("open",i,{tooltip:r}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var i=e.Event(t);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(r)}},i&&"mouseover"!==i.type||(o.mouseleave="close"),i&&"focusin"!==i.type||(o.focusout="close"),this._on(!0,s,o)}},close:function(t){var s=this,a=e(t?t.currentTarget:this.element),n=this._find(a);this.closing||(a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title")),i(a),n.stop(!0),this._hide(n,this.options.hide,function(){s._removeTooltip(e(this))}),a.removeData("ui-tooltip-open"),this._off(a,"mouseleave focusout keyup"),a[0]!==this.element[0]&&this._off(a,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:n}),this.closing=!1)},_tooltip:function(t){var i="ui-tooltip-"+s++,a=e("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(a),a.appendTo(this.document[0].body),e.fn.bgiframe&&a.bgiframe(),this.tooltips[i]=t,a},_find:function(t){var i=t.data("ui-tooltip-id");return i?e("#"+i):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var a=e.Event("blur");a.target=a.currentTarget=s[0],t.close(a,!0),e("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);jQuery.effects||function(e,t){var i=e.uiBackCompat!==!1,a="ui-effects-";e.effects={effect:{}},function(t,i){function a(e,t,i){var a=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=a.floor?~~e:parseFloat(e),isNaN(e)?t.def:a.mod?(e+a.mod)%a.mod:0>e?0:e>a.max?a.max:e)}function s(e){var a=u(),s=a._rgba=[];return e=e.toLowerCase(),m(l,function(t,n){var r,o=n.re.exec(e),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=a[l](h),a[d[l].cache]=r[d[l].cache],s=a._rgba=r._rgba,!1):i}),s.length?("0,0,0,0"===s.join()&&t.extend(s,r.transparent),a):r[e]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),h=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=t.Color=function(e,i,a,s){return new t.Color.fn.parse(e,i,a,s)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=t("<p>")[0],m=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,m(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(n,o,h,l){if(n===i)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=i);var c=this,p=t.type(n),f=this._rgba=[];return o!==i&&(n=[n,o,h,l],p="array"),"string"===p?this.parse(s(n)||r._default):"array"===p?(m(d.rgba.props,function(e,t){f[t.idx]=a(n[t.idx],t)}),this):"object"===p?(n instanceof u?m(d,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):m(d,function(t,i){var s=i.cache;m(i.props,function(e,t){if(!c[s]&&i.to){if("alpha"===e||null==n[e])return;c[s]=i.to(c._rgba)}c[s][t.idx]=a(n[e],t,!0)}),c[s]&&0>e.inArray(null,c[s].slice(0,3))&&(c[s][3]=1,i.from&&(c._rgba=i.from(c[s])))}),this):i},is:function(e){var t=u(e),a=!0,s=this;return m(d,function(e,n){var r,o=t[n.cache];return o&&(r=s[n.cache]||n.to&&n.to(s._rgba)||[],m(n.props,function(e,t){return null!=o[t.idx]?a=o[t.idx]===r[t.idx]:i})),a}),a},_space:function(){var e=[],t=this;return m(d,function(i,a){t[a.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var i=u(e),s=i._space(),n=d[s],r=0===this.alpha()?u("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return i=i[n.cache],m(n.props,function(e,s){var n=s.idx,r=o[n],l=i[n],u=c[s.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=a((l-r)*t+r,s)))}),this[s](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),a=i.pop(),s=u(e)._rgba;return u(t.map(i,function(e,t){return(1-a)*s[t]+a*e}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),a=i.pop();return e&&i.push(~~(255*a)),"#"+t.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,a=e[0]/255,s=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(a,s,n),h=Math.min(a,s,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:a===o?60*(s-n)/l+360:s===o?60*(n-a)/l+120:60*(a-s)/l+240,i=0===d||1===d?d:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],a=e[2],s=e[3],r=.5>=a?a*(1+i):a+i-a*i,o=2*a-r;return[Math.round(255*n(o,r,t+1/3)),Math.round(255*n(o,r,t)),Math.round(255*n(o,r,t-1/3)),s]},m(d,function(e,s){var n=s.props,r=s.cache,o=s.to,l=s.from;u.fn[e]=function(e){if(o&&!this[r]&&(this[r]=o(this._rgba)),e===i)return this[r].slice();var s,h=t.type(e),d="array"===h||"object"===h?e:arguments,c=this[r].slice();return m(n,function(e,t){var i=d["object"===h?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(s=u(l(c)),s[r]=c,s):u(c)},m(n,function(i,a){u.fn[i]||(u.fn[i]=function(s){var n,r=t.type(s),o="alpha"===i?this._hsla?"hsla":"rgba":e,l=this[o](),u=l[a.idx];return"undefined"===r?u:("function"===r&&(s=s.call(this,u),r=t.type(s)),null==s&&a.empty?this:("string"===r&&(n=h.exec(s),n&&(s=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[a.idx]=s,this[o](l)))})})}),m(o,function(e,i){t.cssHooks[i]={set:function(e,a){var n,r,o="";if("string"!==t.type(a)||(n=s(a))){if(a=u(n||a),!p.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?e.parentNode:e;(""===o||"transparent"===o)&&r&&r.style;)try{o=t.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{e.style[i]=a}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=u(e.elem,i),e.end=u(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return m(["Top","Right","Bottom","Left"],function(i,a){t["border"+a+"Color"]=e}),t}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t,i,a=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,s={};if(a&&a.length&&a[0]&&a[a[0]])for(i=a.length;i--;)t=a[i],"string"==typeof a[t]&&(s[e.camelCase(t)]=a[t]);else for(t in a)"string"==typeof a[t]&&(s[t]=a[t]);return s}function a(t,i){var a,s,r={};for(a in i)s=i[a],t[a]!==s&&(n[a]||(e.fx.step[a]||!isNaN(parseFloat(s)))&&(r[a]=s));return r}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").andSelf():r;l=l.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),n=function(){e.each(s,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i.call(this.el[0]),this.diff=a(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),a=jQuery.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,a),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{add:t},i,a,s):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,i,a,s){return i?e.effects.animateClass.call(this,{remove:t},i,a,s):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(i,a,s,n,r){return"boolean"==typeof a||a===t?s?e.effects.animateClass.call(this,a?{add:i}:{remove:i},s,n,r):this._toggleClass(i,a):e.effects.animateClass.call(this,{toggle:i},a,s,n)},switchClass:function(t,i,a,s,n){return e.effects.animateClass.call(this,{add:i,remove:t},a,s,n)}})}(),function(){function s(t,i,a,s){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(s=i,a=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(s=a,a=i,i={}),e.isFunction(a)&&(s=a,a=null),i&&e.extend(t,i),a=a||i.duration,t.duration=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,t.complete=s||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?!1:i&&e.effects[t]?!1:!0}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(a+i[n]),s===t&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,a;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(a),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),a=t.parent(),"static"===t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){i[a]=t.css(a),isNaN(parseInt(i[a],10))&&(i[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(s),a.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,a,s){return s=s||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(s[i]=n[0]*a+n[1])}),s}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(s[0]),e.isFunction(t)&&t()}var s=e(this),n=a.complete,r=a.mode;(s.is(":hidden")?"hide"===r:"show"===r)?i():o.call(s[0],a,i)}var a=s.apply(this,arguments),n=a.mode,r=a.queue,o=e.effects.effect[a.effect],h=!o&&i&&e.effects[a.effect];return e.fx.off||!o&&!h?n?this[n](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):o?r===!1?this.each(t):this.queue(r||"fx",t):h.call(this,{options:a,duration:a.duration,callback:a.complete,mode:a.mode})},_show:e.fn.show,show:function(e){if(n(e))return this._show.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(n(e))return this._hide.apply(this,arguments);var t=s.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(n(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(t){var i=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(a=[parseFloat(i),t])}),a}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()}(jQuery);(function(e){var t=/up|down|vertical/,i=/up|left|vertical|horizontal/;e.effects.effect.blind=function(a,s){var n,r,o,l=e(this),h=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(l,a.mode||"hide"),d=a.direction||"up",c=t.test(d),p=c?"height":"width",m=c?"top":"left",f=i.test(d),g={},v="show"===u;l.parent().is(".ui-effects-wrapper")?e.effects.save(l.parent(),h):e.effects.save(l,h),l.show(),n=e.effects.createWrapper(l).css({overflow:"hidden"}),r=n[p](),o=parseFloat(n.css(m))||0,g[p]=v?r:0,f||(l.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[m]=v?o:r+o),v&&(n.css(p,0),f||n.css(m,o+r)),n.animate(g,{duration:a.duration,easing:a.easing,queue:!1,complete:function(){"hide"===u&&l.hide(),e.effects.restore(l,h),e.effects.removeWrapper(l),s()}})}})(jQuery);(function(e){e.effects.effect.bounce=function(t,i){var a,s,n,r=e(this),o=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(r,t.mode||"effect"),h="hide"===l,u="show"===l,d=t.direction||"up",c=t.distance,p=t.times||5,m=2*p+(u||h?1:0),f=t.duration/m,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=r.queue(),_=b.length;for((u||h)&&o.push("opacity"),e.effects.save(r,o),r.show(),e.effects.createWrapper(r),c||(c=r["top"===v?"outerHeight":"outerWidth"]()/3),u&&(n={opacity:1},n[v]=0,r.css("opacity",0).css(v,y?2*-c:2*c).animate(n,f,g)),h&&(c/=Math.pow(2,p-1)),n={},n[v]=0,a=0;p>a;a++)s={},s[v]=(y?"-=":"+=")+c,r.animate(s,f,g).animate(n,f,g),c=h?2*c:c/2;h&&(s={opacity:0},s[v]=(y?"-=":"+=")+c,r.animate(s,f,g)),r.queue(function(){h&&r.hide(),e.effects.restore(r,o),e.effects.removeWrapper(r),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,m+1))),r.dequeue()}})(jQuery);(function(e){e.effects.effect.clip=function(t,i){var a,s,n,r=e(this),o=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(r,t.mode||"hide"),h="show"===l,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",m={};e.effects.save(r,o),r.show(),a=e.effects.createWrapper(r).css({overflow:"hidden"}),s="IMG"===r[0].tagName?a:r,n=s[c](),h&&(s.css(c,0),s.css(p,n/2)),m[c]=h?n:0,m[p]=h?0:n/2,s.animate(m,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){h||r.hide(),e.effects.restore(r,o),e.effects.removeWrapper(r),i()}})}})(jQuery);(function(e){e.effects.effect.drop=function(t,i){var a,s=e(this),n=["position","top","bottom","left","right","opacity","height","width"],r=e.effects.setMode(s,t.mode||"hide"),o="show"===r,l=t.direction||"left",h="up"===l||"down"===l?"top":"left",u="up"===l||"left"===l?"pos":"neg",d={opacity:o?1:0};e.effects.save(s,n),s.show(),e.effects.createWrapper(s),a=t.distance||s["top"===h?"outerHeight":"outerWidth"](!0)/2,o&&s.css("opacity",0).css(h,"pos"===u?-a:a),d[h]=(o?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+a,s.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&s.hide(),e.effects.restore(s,n),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e){e.effects.effect.explode=function(t,i){function a(){b.push(this),b.length===d*c&&s()}function s(){p.css({visibility:"visible"}),e(b).remove(),f||p.hide(),i()}var n,r,o,l,h,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),m=e.effects.setMode(p,t.mode||"hide"),f="show"===m,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(n=0;d>n;n++)for(l=g.top+n*y,u=n-(d-1)/2,r=0;c>r;r++)o=g.left+r*v,h=r-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-r*v,top:-n*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:o+(f?h*v:0),top:l+(f?u*y:0),opacity:f?0:1}).animate({left:o+(f?0:h*v),top:l+(f?0:u*y),opacity:f?1:0},t.duration||500,t.easing,a)}})(jQuery);(function(e){e.effects.effect.fade=function(t,i){var a=e(this),s=e.effects.setMode(a,t.mode||"toggle");a.animate({opacity:s},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}})(jQuery);(function(e){e.effects.effect.fold=function(t,i){var a,s,n=e(this),r=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"hide"),l="show"===o,h="hide"===o,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=l!==c,m=p?["width","height"]:["height","width"],f=t.duration/2,g={},v={};e.effects.save(n,r),n.show(),a=e.effects.createWrapper(n).css({overflow:"hidden"}),s=p?[a.width(),a.height()]:[a.height(),a.width()],d&&(u=parseInt(d[1],10)/100*s[h?0:1]),l&&a.css(c?{height:0,width:u}:{height:u,width:0}),g[m[0]]=l?s[0]:u,v[m[1]]=l?s[1]:0,a.animate(g,f,t.easing).animate(v,f,t.easing,function(){h&&n.hide(),e.effects.restore(n,r),e.effects.removeWrapper(n),i()})}})(jQuery);(function(e){e.effects.effect.highlight=function(t,i){var a=e(this),s=["backgroundImage","backgroundColor","opacity"],n=e.effects.setMode(a,t.mode||"show"),r={backgroundColor:a.css("backgroundColor")};"hide"===n&&(r.opacity=0),e.effects.save(a,s),a.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(r,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===n&&a.hide(),e.effects.restore(a,s),i()}})}})(jQuery);(function(e){e.effects.effect.pulsate=function(t,i){var a,s=e(this),n=e.effects.setMode(s,t.mode||"show"),r="show"===n,o="hide"===n,l=r||"hide"===n,h=2*(t.times||5)+(l?1:0),u=t.duration/h,d=0,c=s.queue(),p=c.length;for((r||!s.is(":visible"))&&(s.css("opacity",0).show(),d=1),a=1;h>a;a++)s.animate({opacity:d},u,t.easing),d=1-d;s.animate({opacity:d},u,t.easing),s.queue(function(){o&&s.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,h+1))),s.dequeue()}})(jQuery);(function(e){e.effects.effect.puff=function(t,i){var a=e(this),s=e.effects.setMode(a,t.mode||"hide"),n="hide"===s,r=parseInt(t.percent,10)||150,o=r/100,h={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:s,complete:i,percent:n?r:100,from:n?h:{height:h.height*o,width:h.width*o,outerHeight:h.outerHeight*o,outerWidth:h.outerWidth*o}}),a.effect(t)},e.effects.effect.scale=function(t,i){var a=e(this),s=e.extend(!0,{},t),n=e.effects.setMode(a,t.mode||"effect"),r=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===n?0:100),o=t.direction||"both",h=t.origin,l={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},u={y:"horizontal"!==o?r/100:1,x:"vertical"!==o?r/100:1};s.effect="size",s.queue=!1,s.complete=i,"effect"!==n&&(s.origin=h||["middle","center"],s.restore=!0),s.from=t.from||("show"===n?{height:0,width:0,outerHeight:0,outerWidth:0}:l),s.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},s.fade&&("show"===n&&(s.from.opacity=0,s.to.opacity=1),"hide"===n&&(s.from.opacity=1,s.to.opacity=0)),a.effect(s)},e.effects.effect.size=function(t,i){var a,s,n,r=e(this),o=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(r,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=r.css("position"),y=f?o:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&r.show(),a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},"toggle"===t.mode&&"show"===p?(r.from=t.to||b,r.to=t.from||a):(r.from=t.from||("show"===p?b:a),r.to=t.to||("hide"===p?b:a)),n={from:{y:r.from.height/a.height,x:r.from.width/a.width},to:{y:r.to.height/a.height,x:r.to.width/a.width}},("box"===m||"both"===m)&&(n.from.y!==n.to.y&&(y=y.concat(d),r.from=e.effects.setTransition(r,d,n.from.y,r.from),r.to=e.effects.setTransition(r,d,n.to.y,r.to)),n.from.x!==n.to.x&&(y=y.concat(c),r.from=e.effects.setTransition(r,c,n.from.x,r.from),r.to=e.effects.setTransition(r,c,n.to.x,r.to))),("content"===m||"both"===m)&&n.from.y!==n.to.y&&(y=y.concat(u).concat(l),r.from=e.effects.setTransition(r,u,n.from.y,r.from),r.to=e.effects.setTransition(r,u,n.to.y,r.to)),e.effects.save(r,y),r.show(),e.effects.createWrapper(r),r.css("overflow","hidden").css(r.from),g&&(s=e.effects.getBaseline(g,a),r.from.top=(a.outerHeight-r.outerHeight())*s.y,r.from.left=(a.outerWidth-r.outerWidth())*s.x,r.to.top=(a.outerHeight-r.to.outerHeight)*s.y,r.to.left=(a.outerWidth-r.to.outerWidth)*s.x),r.css(r.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=o.concat(d).concat(c),r.find("*[width]").each(function(){var i=e(this),a={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&e.effects.save(i,l),i.from={height:a.height*n.from.y,width:a.width*n.from.x,outerHeight:a.outerHeight*n.from.y,outerWidth:a.outerWidth*n.from.x},i.to={height:a.height*n.to.y,width:a.width*n.to.x,outerHeight:a.height*n.to.y,outerWidth:a.width*n.to.x},n.from.y!==n.to.y&&(i.from=e.effects.setTransition(i,d,n.from.y,i.from),i.to=e.effects.setTransition(i,d,n.to.y,i.to)),n.from.x!==n.to.x&&(i.from=e.effects.setTransition(i,c,n.from.x,i.from),i.to=e.effects.setTransition(i,c,n.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),r.animate(r.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===r.to.opacity&&r.css("opacity",r.from.opacity),"hide"===p&&r.hide(),e.effects.restore(r,y),f||("static"===v?r.css({position:"relative",top:r.to.top,left:r.to.left}):e.each(["top","left"],function(e,t){r.css(t,function(t,i){var a=parseInt(i,10),s=e?r.to.left:r.to.top;return"auto"===i?s+"px":a+s+"px"})})),e.effects.removeWrapper(r),i()}})}})(jQuery);(function(e){e.effects.effect.shake=function(t,i){var a,s=e(this),n=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(s,t.mode||"effect"),o=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===o||"down"===o?"top":"left",p="up"===o||"left"===o,f={},m={},g={},v=s.queue(),y=v.length;for(e.effects.save(s,n),s.show(),e.effects.createWrapper(s),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,s.animate(f,d,t.easing),a=1;l>a;a++)s.animate(m,d,t.easing).animate(g,d,t.easing);s.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===r&&s.hide(),e.effects.restore(s,n),e.effects.removeWrapper(s),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),s.dequeue()}})(jQuery);(function(e){e.effects.effect.slide=function(t,i){var a,s=e(this),n=["position","top","bottom","left","right","width","height"],r=e.effects.setMode(s,t.mode||"show"),o="show"===r,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(s,n),s.show(),a=t.distance||s["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(s).css({overflow:"hidden"}),o&&s.css(l,u?isNaN(a)?"-"+a:-a:a),d[l]=(o?u?"+=":"-=":u?"-=":"+=")+a,s.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&s.hide(),e.effects.restore(s,n),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e){e.effects.effect.transfer=function(t,i){var a=e(this),s=e(t.to),n="fixed"===s.css("position"),r=e("body"),o=n?r.scrollTop():0,h=n?r.scrollLeft():0,l=s.offset(),u={top:l.top-o,left:l.left-h,height:s.innerHeight(),width:s.innerWidth()},d=a.offset(),c=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top:d.top-o,left:d.left-h,height:a.innerHeight(),width:a.innerWidth(),position:n?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})}})(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.0.3
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.0.3
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.3
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.3
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.3
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.3
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.3
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.3
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.3
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.3
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.3
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.3
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ============================================================
 * mopabootstrap-collection.js v3.0.0
 * http://bootstrap.mohrenweiserpartner.de/mopa/bootstrap/forms/collections
 * ============================================================
 * Copyright 2012 Mohrenweiser & Partner
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

!function ($) {
    "use strict";

    /* Collection PUBLIC CLASS DEFINITION
     * ============================== */

    var Collection = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.collection.defaults, options);

        // This must work with "collections" inside "collections", and should
        // select its children, and not the "collection" inside children.
        var $collection = $('div' + this.options.collection_id);

        // Indexes must be different for every Collection
        if (typeof this.options.index === 'undefined') {
            this.options.index = {};
        }
        if (!this.options.initial_size) {
            this.options.initial_size = $collection.children().size();
        }

        this.options.index[this.options.collection_id] = this.options.initial_size;
    };
    Collection.prototype = {
        constructor: Collection,
        add: function () {
            // this leads to overriding items
            this.options.index[this.options.collection_id] = this.options.index[this.options.collection_id] + 1;
            var index = this.options.index[this.options.collection_id];
            if ($.isFunction(this.options.addcheckfunc) && ! this.options.addcheckfunc()) {
                if ($.isFunction(this.options.addfailedfunc)) {
                    this.options.addfailedfunc();
                }
                return;
            }
            this.addPrototype(index);
        },
        addPrototype: function (index) {
            var $collection = $(this.options.collection_id);
            var prototype_name = $collection.data('prototype-name');
            var prototype_label = $collection.data('prototype-label');

            // Just in case it doesn't get it
            if (typeof prototype_name === 'undefined') {
                prototype_name = '__name__';
            }

            if (typeof prototype_label === 'undefined') {
                prototype_label = '__name__label__';
            }

            var name_replace_pattern = new RegExp(prototype_name, 'g');
            var label_replace_pattern = new RegExp(prototype_label, 'g');
            var rowContent = $collection.attr('data-prototype')
                    .replace(label_replace_pattern, index)
                    .replace(name_replace_pattern, index);
            var row = $(rowContent);
            $collection.append(row);
            $(window).triggerHandler('add.mopa-collection-item', [$collection, row, index])
        },
        remove: function (row) {
            var $collection = $(this.options.collection_id);

            if (typeof row == 'undefined') {
                row = this.$element.closest('.collection-item');
            }

            if (typeof row != 'undefined') {
                if (row instanceof jQuery) {
                    row = row.get(0);
                }

                var oldIndex = this.getIndex(row);

                if (oldIndex == - 1) {
                    throw new Error('row not contained in collection');
                }

                $(window).triggerHandler('before-remove.mopa-collection-item', [$collection, row, oldIndex]);
                row.remove();
                $(window).triggerHandler('remove.mopa-collection-item', [$collection, row, oldIndex]);
            }
        },
        /**
         * Get the index of the current row zero based
         * return -1 if not found
         */
        getIndex: function (row) {
            if (row instanceof jQuery) {
                row = row.get(0);
            }

            var $collection = $(this.options.collection_id);
            var items = $collection.children();

            for (var i = 0; i < items.size(); i ++) {
                if (row == items[i]) {
                    return i;
                }
            }
            return - 1;
        },
        getItem: function (index) {
            var items = this.getItems();

            return items[index];
        },
        getItems: function (index) {
            var $collection = $(this.options.collection_id);
            var items = $collection.children();

            return items;
        }
    };

    /* COLLECTION PLUGIN DEFINITION
     * ======================== */

    $.fn.collection = function (option) {
        var coll_args = arguments;

        return this.each(function () {
            var $this = $(this),
                collection_id = $this.data('collection-add-btn'),
                data = $this.data('collection'),
                options = typeof option == 'object' ? option : {};

            if (collection_id) {
                options.collection_id = collection_id;
            }
            else if ($this.closest(".collection-items").attr('id')) {
                options.collection_id = '#' + $this.closest(".collection-items").attr('id');
            } else {
                options.collection_id = this.id.length === 0 ? false : '#' + this.id;
                if (!options.collection_id) {
                    throw new Error('Could not load collection id');
                }
            }
            if (!data) {
                $this.data('collection', (data = new Collection(this, options)));
            }
            if (coll_args.length > 1) {
                var arg1 = coll_args[1];
                var returnval;
            }
            if (option == 'add') {
                data.add();
            }
            if (option == 'remove') {
                data.remove(arg1);
            }
            if (option == 'getIndex') {
                returnval = data.getIndex(arg1);
            }
            if (option == 'getItem') {
                returnval = data.getItem(arg1);
            }
            if (option == 'getItems') {
                returnval = data.getItems();
            }
            if (coll_args.length > 2 && typeof coll_args[2] == 'function') {
                coll_args[2].call(this, returnval);
            }
        });
    };

    $.fn.collection.defaults = {
        collection_id: null,
        initial_size: 0,
        addcheckfunc: false,
        addfailedfunc: false
    };

    $.fn.collection.Constructor = Collection;

    /* COLLECTION DATA-API
     * =============== */

    $(function () {
        $('body').on('click.collection.data-api', '[data-collection-add-btn]', function (e) {
            var $btn = $(e.target);

            if (! $btn.hasClass('btn')) {
                $btn = $btn.closest('.btn');
            }
            $btn.collection('add');
            e.preventDefault();
        });
        $('body').on('click.collection.data-api', '[data-collection-remove-btn]', function (e) {
            var $btn = $(e.target);

            if (! $btn.hasClass('btn')) {
                $btn = $btn.closest('.btn');
            }
            $btn.collection('remove');
            e.preventDefault();
        });
    });

}(window.jQuery);

/*
 * moving subnavigation bar snapping to top on scroll
 * http://stackoverflow.com/questions/9179708/replicating-bootstraps-main-nav-and-subnav
 * http://stackoverflow.com/questions/10318163/subnav-bar-collapsed-with-twitter-bootstrap
 */

 $(document).scroll(function(){
     //check for .subnav
     if ($('.subnav').length) {
       // If has not activated (has no attribute "data-top"
       if (!$('.subnav').attr('data-top')) {
           // If already fixed, then do nothing
           if ($('.subnav').hasClass('subnav-fixed')) {
               return;
           }
           // Remember top position
           var offset = $('.subnav').offset();
           $('.subnav').attr('data-top', offset.top);
       }
      
       if ($('.subnav').attr('data-top') - $('.subnav').outerHeight() <= $(this).scrollTop()){
           $('.subnav').addClass('subnav-fixed');
       } else{
           $('.subnav').removeClass('subnav-fixed');
       }
     }
 });
 /*
//This snipplet is from bootstrap docs, currently i assume both not to work perfectly :( 
!function($) {
    "use strict";

    $(function() {
        // fix sub nav on scroll
        var $win = $(window), $nav = $('.subnav'), navTop = $('.subnav').length
                && $('.subnav').offset().top - 40, isFixed = 0;

        processScroll();

        // hack sad times - holdover until rewrite for 2.1
        $nav.on('click', function() {
            if (!isFixed)
                setTimeout(function() {
                    $win.scrollTop($win.scrollTop() - 47);
                }, 10);
        });

        $win.on('scroll', processScroll);

        function processScroll() {
            var scrollTop = $win.scrollTop();
            if (scrollTop >= navTop && !isFixed) {
                isFixed = 1;
                $nav.addClass('subnav-fixed');
            } else if (scrollTop <= navTop && isFixed) {
                isFixed = 0;
                $nav.removeClass('subnav-fixed');
            }
        }

    });

}(window.jQuery);*/
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


/* Author:

*/






/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) FriendsOfSymfony and subject to the MIT license.
 */
(function() {var f=!1,i,k=this;function l(a,c){var b=a.split("."),d=k;!(b[0]in d)&&d.execScript&&d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&void 0!==c?d[e]=c:d=d[e]?d[e]:d[e]={}};var m=Array.prototype,n=m.forEach?function(a,c,b){m.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e="string"==typeof a?a.split(""):a,g=0;g<d;g++)g in e&&c.call(b,e[g],g,a)};function q(a,c){this.c={};this.a=[];var b=arguments.length;if(1<b){if(b%2)throw Error("Uneven number of arguments");for(var d=0;d<b;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof q){r(a);d=a.a.concat();r(a);e=[];for(b=0;b<a.a.length;b++)e.push(a.c[a.a[b]])}else{var b=[],g=0;for(d in a)b[g++]=d;d=b;b=[];g=0;for(e in a)b[g++]=a[e];e=b}for(b=0;b<d.length;b++)this.set(d[b],e[b])}}q.prototype.f=0;q.prototype.p=0;
function r(a){if(a.f!=a.a.length){for(var c=0,b=0;c<a.a.length;){var d=a.a[c];t(a.c,d)&&(a.a[b++]=d);c++}a.a.length=b}if(a.f!=a.a.length){for(var e={},b=c=0;c<a.a.length;)d=a.a[c],t(e,d)||(a.a[b++]=d,e[d]=1),c++;a.a.length=b}}q.prototype.get=function(a,c){return t(this.c,a)?this.c[a]:c};q.prototype.set=function(a,c){t(this.c,a)||(this.f++,this.a.push(a),this.p++);this.c[a]=c};function t(a,c){return Object.prototype.hasOwnProperty.call(a,c)};var u,v,w,x;function y(){return k.navigator?k.navigator.userAgent:null}x=w=v=u=f;var C;if(C=y()){var D=k.navigator;u=0==C.indexOf("Opera");v=!u&&-1!=C.indexOf("MSIE");w=!u&&-1!=C.indexOf("WebKit");x=!u&&!w&&"Gecko"==D.product}var E=v,F=x,G=w;var I;if(u&&k.opera){var J=k.opera.version;"function"==typeof J&&J()}else F?I=/rv\:([^\);]+)(\)|;)/:E?I=/MSIE\s+([^\);]+)(\)|;)/:G&&(I=/WebKit\/(\S+)/),I&&I.exec(y());function K(a,c){this.b=a||{e:"",prefix:"",host:"",scheme:""};this.h(c||{})}K.g=function(){return K.j?K.j:K.j=new K};i=K.prototype;i.h=function(a){this.d=new q(a)};i.o=function(){return this.d};i.k=function(a){this.b.e=a};i.n=function(){return this.b.e};i.l=function(a){this.b.prefix=a};
function L(a,c,b,d){var e,g=RegExp(/\[\]$/);if(b instanceof Array)n(b,function(b,e){g.test(c)?d(c,b):L(a,c+"["+("object"===typeof b?e:"")+"]",b,d)});else if("object"===typeof b)for(e in b)L(a,c+"["+e+"]",b[e],d);else d(c,b)}i.i=function(a){var c=this.b.prefix+a;if(t(this.d.c,c))a=c;else if(!t(this.d.c,a))throw Error('The route "'+a+'" does not exist.');return this.d.get(a)};
i.m=function(a,c,b){var d=this.i(a),e=c||{},g={},z;for(z in e)g[z]=e[z];var h="",s=!0,j="";n(d.tokens,function(b){if("text"===b[0])h=b[1]+h,s=f;else if("variable"===b[0]){var c=b[3]in d.defaults;if(f===s||!c||b[3]in e&&e[b[3]]!=d.defaults[b[3]]){if(b[3]in e){var c=e[b[3]],p=b[3];p in g&&delete g[p]}else if(c)c=d.defaults[b[3]];else{if(s)return;throw Error('The route "'+a+'" requires the parameter "'+b[3]+'".');}if(!(!0===c||f===c||""===c)||!s)p=encodeURIComponent(c).replace(/%2F/g,"/"),"null"===p&&
null===c&&(p=""),h=b[1]+p+h;s=f}else c&&(b=b[3],b in g&&delete g[b])}else throw Error('The token type "'+b[0]+'" is not supported.');});""===h&&(h="/");n(d.hosttokens,function(a){var b;if("text"===a[0])j=a[1]+j;else if("variable"===a[0]){if(a[3]in e){b=e[a[3]];var c=a[3];c in g&&delete g[c]}else a[3]in d.defaults&&(b=d.defaults[a[3]]);j=a[1]+b+j}});h=this.b.e+h;"_scheme"in d.requirements&&this.b.scheme!=d.requirements._scheme?h=d.requirements._scheme+"://"+(j||this.b.host)+h:j&&this.b.host!==j?h=
this.b.scheme+"://"+j+h:!0===b&&(h=this.b.scheme+"://"+this.b.host+h);var c=0,A;for(A in g)c++;if(0<c){var B,H=[];A=function(a,b){b="function"===typeof b?b():b;H.push(encodeURIComponent(a)+"="+encodeURIComponent(null===b?"":b))};for(B in g)L(this,B,g[B],A);h=h+"?"+H.join("&").replace(/%20/g,"+")}return h};l("fos.Router",K);l("fos.Router.setData",function(a){var c=K.g();c.k(a.base_url);c.h(a.routes);"prefix"in a&&c.l(a.prefix);c.b.host=a.host;c.b.scheme=a.scheme});K.getInstance=K.g;K.prototype.setRoutes=K.prototype.h;K.prototype.getRoutes=K.prototype.o;K.prototype.setBaseUrl=K.prototype.k;K.prototype.getBaseUrl=K.prototype.n;K.prototype.generate=K.prototype.m;K.prototype.setPrefix=K.prototype.l;K.prototype.getRoute=K.prototype.i;window.Routing=K.g();})();
jQuery(function ($) {

    setInterval(function(){

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

    }, 2000)
})
!function(t,e,i){var o=["webkit","Moz","ms","O"],r={},n;function a(t,i){var o=e.createElement(t||"div"),r;for(r in i)o[r]=i[r];return o}function s(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var f=function(){var t=a("style",{type:"text/css"});s(e.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function l(t,e,i,o){var a=["opacity",e,~~(t*100),i,o].join("-"),s=.01+i/o*100,l=Math.max(1-(1-t)/e*(100-s),t),p=n.substring(0,n.indexOf("Animation")).toLowerCase(),u=p&&"-"+p+"-"||"";if(!r[a]){f.insertRule("@"+u+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+s+"%{opacity:"+t+"}"+(s+.01)+"%{opacity:1}"+(s+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",f.cssRules.length);r[a]=1}return a}function p(t,e){var r=t.style,n,a;if(r[e]!==i)return e;e=e.charAt(0).toUpperCase()+e.slice(1);for(a=0;a<o.length;a++){n=o[a]+e;if(r[n]!==i)return n}}function u(t,e){for(var i in e)t.style[p(t,i)||i]=e[i];return t}function c(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)if(t[r]===i)t[r]=o[r]}return t}function d(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function m(t){if(!this.spin)return new m(t);this.opts=c(t||{},m.defaults,h)}m.defaults={};c(m.prototype,{spin:function(t){this.stop();var e=this,i=e.opts,o=e.el=u(a(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex}),r=i.radius+i.length+i.width,s,f;if(t){t.insertBefore(o,t.firstChild||null);f=d(t);s=d(o);u(o,{left:(i.left=="auto"?f.x-s.x+(t.offsetWidth>>1):parseInt(i.left,10)+r)+"px",top:(i.top=="auto"?f.y-s.y+(t.offsetHeight>>1):parseInt(i.top,10)+r)+"px"})}o.setAttribute("aria-role","progressbar");e.lines(o,e.opts);if(!n){var l=0,p=i.fps,c=p/i.speed,h=(1-i.opacity)/(c*i.trail/100),m=c/i.lines;(function y(){l++;for(var t=i.lines;t;t--){var r=Math.max(1-(l+t*m)%c*h,i.opacity);e.opacity(o,i.lines-t,r,i)}e.timeout=e.el&&setTimeout(y,~~(1e3/p))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=i}return this},lines:function(t,e){var i=0,o;function r(t,o){return u(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:o,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;i<e.lines;i++){o=u(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:n&&l(e.opacity,e.trail,i,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)s(o,u(r("#000","0 0 4px "+"#000"),{top:2+"px"}));s(t,s(o,r(e.color,"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});(function(){function t(t,e){return a("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=u(a("group"),{behavior:"url(#default#VML)"});if(!p(e,"transform")&&e.adj){f.addRule(".spin-vml","behavior:url(#default#VML)");m.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function n(){return u(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",f=u(n(),{position:"absolute",top:a,left:a}),l;function p(e,r,a){s(f,s(u(n(),{rotation:360/i.lines*e+"deg",left:~~r}),s(u(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(l=1;l<=i.lines;l++)p(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)p(l);return s(e,f)};m.prototype.opacity=function(t,e,i,o){var r=t.firstChild;o=o.shadow&&o.lines||0;if(r&&e+o<r.childNodes.length){r=r.childNodes[e+o];r=r&&r.firstChild;r=r&&r.firstChild;if(r)r.opacity=i}}}else n=p(e,"animation")})();if(typeof define=="function"&&define.amd)define(function(){return m});else t.Spinner=m}(window,document);

$.fn.spin = function(opts) {
  this.each(function() {
    var $this = $(this),
        data = $this.data();

    if (data.spinner) {
      data.spinner.stop();
      delete data.spinner;
    }
    if (opts !== false) {
      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
    }
  });
  return this;
};
var LazyLoader={};LazyLoader.timer={};LazyLoader.scripts=[];LazyLoader.load=function(a,b,c){var d=null,properties=null;try{LazyLoader.scripts.push(a);var f=document.createElement("script");f.src=a;f.type="text/javascript";b.get(0).appendChild(f);if(c){f.onreadystatechange=function(){if(f.readyState==='loaded'||f.readyState==='complete'){c();jQuery(f).remove()}};f.onload=function(){c();jQuery(f).remove();return};try{if(($.browser.webkit&&!navigator.userAgent.match(/Version\/3/))||$.browser.opera){LazyLoader.timer[a]=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(LazyLoader.timer[a]);c()}},10)}}catch(e){}}}catch(er){alert(er)}};var xrayAd={div:null,viewport:null,thresold:200,elements:[],adBlockCount:0,w:160,h:200,init:function(){this.div=$('#xrayAd');if(!this.div){this.div=$('<div>',{id:'xrayAd',css:{position:'fixed',top:10,left:10,width:this.w,height:this.h,zIndex:10000,background:'rgba(0,0,0, 0.5)'}});this.div.appendTo($('body'))}},viewportUpdate:function(){if(!this.viewport){this.viewport=$('<div>',{id:'xrayAdViewport',css:{position:'absolute',width:this.w,height:10,zIndex:10001,background:'rgba(255,255,255, 0.3)'}});this.viewport.appendTo(this.div)}if(!this.viewThresoldTop){this.viewThresoldTop=$('<div>',{id:'xrayAdThresold',css:{position:'absolute',width:this.w,height:1,zIndex:10002,background:'rgba(255,0,0, 0.5)'}});this.viewThresoldTop.appendTo(this.div);this.viewThresoldBottom=this.viewThresoldTop.clone().appendTo(this.div)}this.bodyHeight=$(document).height();this.bodyWidth=$(window).width();var g=($(window).height()/this.bodyHeight)*xrayAd.h,vT=($(window).scrollTop()/this.bodyHeight)*xrayAd.h;this.viewport.css({height:g,top:vT});this.viewThresoldTop.css({top:(($(window).scrollTop()-xrayAd.thresold)/this.bodyHeight)*xrayAd.h});this.viewThresoldBottom.css({top:(($(window).scrollTop()+xrayAd.thresold)/this.bodyHeight)*xrayAd.h+g-1});if(this.div&&this.div.length){var h=this.div.find('.xrayAdBlock');$.each(h,function(a,b){var c=$(this);var d=$(xrayAd.elements[a]);if(c.length&&d.length){var e={};e.off=d.offset();if(e.off){e.top=(e.off.top/xrayAd.bodyHeight)*xrayAd.h;e.left=(e.off.left/xrayAd.bodyWidth)*xrayAd.w;e.w=(Math.max(d.width(),10)/xrayAd.bodyWidth)*xrayAd.w;e.h=(Math.max(d.height(),10)/xrayAd.bodyHeight)*xrayAd.h;var f='#FF0071';f=(d.data('loading')==='true'?'orange':f);f=(d.data('loaded')==='true'?'#00FF00':f);c.css({top:e.top,left:e.left,width:e.w,height:e.h,borderColor:f})}}})}},load:function(b,c){this.thresold=c||0;this.init();var d=$('<div>',{'class':'xrayAdBlock','css':{position:'absolute',background:'#ffffff',border:'1px solid #FF0071',top:0,left:0,width:0,height:0,zIndex:10003}});$.each(b,function(){d.clone().attr('xrayblock','xrayAdBlock_'+(xrayAd.adBlockCount++)).appendTo(xrayAd.div);$(this).bind('onCompleteXray',function(){xrayAd.viewportUpdate()});$(this).bind('onLoadXray',function(){xrayAd.viewportUpdate()});xrayAd.elements.push(this)});xrayAd.viewportUpdate();$(window).bind("scroll",function(a){xrayAd.viewportUpdate()})}};(function($){$.lazyLoadAdRunning=false;$.lazyLoadAdTimers=[];$.fn.lazyLoadAd=function(h){var j={threshold:0,failurelimit:1,forceLoad:false,event:"scroll",viewport:window,placeholder:false,onLoad:false,onComplete:false,timeout:1500,debug:false,xray:false};if(h){$.extend(j,h)}function _debug(){if(typeof console!=='undefined'&&j.debug){var a=[];for(var i=0;i<arguments.length;i++){a.push(arguments[i])}try{console.log('LazyLoadAD |',a)}catch(e){}}}if(j.xray&&(typeof xrayAd==='object')){xrayAd.load(this,j.threshold)}var k=this;$(j.viewport).bind("checkLazyLoadAd",function(){var b=0;k.each(function(){if($.lazyLoadAdRunning){if($.lazyLoadAdTimers.runTimeOut){clearTimeout($.lazyLoadAdTimers.runTimeOut)}$.lazyLoadAdTimers.runTimeOut=setTimeout(function(){$(j.viewport).trigger("checkLazyLoadAd")},300);return false}else if(j.forceLoad===true){$(this).trigger("load")}else if(!$.belowthefold(this,j)&&!$.abovethetop(this,j)){$(this).trigger("load")}else{if(b++>j.failurelimit){return false}}});var c=$.grep(k,function(a){return!(($(a).data('loaded')==='true')?true:false)});k=$(c)});if("scroll"===j.event){$(j.viewport).bind("scroll",function(a){if(k.length===0){return false}$(j.viewport).trigger("checkLazyLoadAd")})}this.each(function(d,f){var g=$(this);if(undefined===g.attr("original")){g.attr("original",g.attr("src"))}g.isLoaded=function(){return((g.data('loaded')==='true')?true:false)};g.bind("debug",function(e,a){a=a||'start';if(j.xray){if(a==='start'){g.trigger('onLoadXray')}else if(a==='error'){g.trigger('onErrorXray')}else if(a==='complete'){g.trigger('onCompleteXray')}}if(j.debug){if(a==='start'){g.css({border:'3px solid orange'})}else if(a==='error'){g.css({border:'3px solid red'})}else if(a==='complete'){g.css({border:'3px solid green'})}}});g.one('onComplete',function(){_debug('---> lazyLoadComplete');$(g).removeAttr("original");$.lazyLoadAdRunning=false;g.data('loaded','true');g.trigger('debug','complete');if(typeof j.onComplete==='function'){try{j.onComplete()}catch(e){}}});g.stack=[];g.makinaBlock=false;g.bind('makina_go',function(){if(g.makinaBlock){return false}if(g.stack.length>0){var a=g.stack.shift();var b=g.find('.wrapAd');if(!b.length){b=$('<div class="wrapAd"></div>').clone();b.appendTo(g)}var c=$('<div>').clone().appendTo(b);if(typeof a==='string'){c.replaceWith(a)}else if(typeof a==='object'){if(a.is('script')){if(a.attr('src')){_debug('JS to load !! --> '+a.attr('src'));LazyLoader.load(a.attr('src'),g,function(){g.makinaBlock=false;_debug('JS to load !! ++> '+a.attr('src'));g.trigger('makina_go')})}else{c.replaceWith(a)}}else{c.replaceWith(a)}}g.trigger('makina_go')}else{if($.lazyLoadAdTimers.loadJS){clearTimeout($.lazyLoadAdTimers.loadJS)}$.lazyLoadAdTimers.loadJS=setTimeout(function(){g.trigger('onComplete')},j.timeout)}});g.bind('docWrite_direct',function(e,a){var b=$(a);_debug('Fragment Direct Write : ',b,b.length);$.each(b,function(){g.stack.push($(this))});g.trigger('makina_go')});g.bind('docWrite_delayed',function(e,a){_debug('Fragment Delayed Write : ',a);g.numWrappers--;_debug("Fragment append : ",g.numWrappers,a);g.docHtmlCurrent+=a;if(g.numWrappers===0){a=g.docHtmlCurrent;g.docHtmlCurrent='';setTimeout(function(){g.stack.push(a);g.docHtmlCurrent='';g.trigger('makina_go')},0)}});g.numWrappers=0;g.docHtmlCurrent='';g.bind('docWrite_overload',function(){document._writeOriginal=document.write;document.write=document.writeln=function(){var a=arguments,id=null;var b='';for(var i=0;i<a.length;i++){b+=a[i]}var c='',directWrite=false;try{c=$(b);directWrite=((c.is('div')||c.is('script'))?true:false)}catch(e){}g.history[g.fragmentId]=g.history[g.fragmentId]||{};if(g.history[g.fragmentId][b]===undefined){g.history[g.fragmentId][b]=true;if(directWrite){g.trigger('docWrite_direct',b)}else{g.numWrappers++;setTimeout(function(){g.trigger('docWrite_delayed',b)},0)}}}});g.bind('evalCode',function(){var a=[],script,regexp=/<code[^>]*>([\s\S]*?)<\/code>/gi;while((script=regexp.exec(g.html()))){var b=script[1];b=b.replace('<!--//<![CDATA[','').replace('//]]>-->','').replace('<!--','').replace('//-->','');b=b.replace(/\&gt\;/g,'>').replace(/\&lt\;/g,'<');a.push($.trim(b))}try{a=(a.length?a.join('\n'):'');_debug('Script to eval : ',a);if(a!==''){eval(a)}}catch(e){}});g.bind('loadJS',function(e,a){var b=null,script=null;if(a.src){b=a.callback||null;a=a.src}if(a.indexOf('?')===-1){a+='?_='+(new Date().getTime())}else{a+='&_='+(new Date().getTime())}_debug('loadJS :: ',a);LazyLoader.load(a,g,function(){_debug('loadJS COMPLETE :: '+a);if(b){b()}else{$.lazyLoadAdTimers.loadJS=setTimeout(function(){g.trigger('onComplete')},j.timeout)}})});g.one("load",function(){if(!g.isLoaded()){$.lazyLoadAdRunning=true;g.data('loading','true');g.trigger('debug','start');var a=$(g).attr("original");g.history={};_debug('------------------------------  Lazy Load Ad CALL ----');_debug('Context : ',g);g.trigger('docWrite_overload');g.trigger('evalCode');if(a){g.trigger('loadJS',a)}}});if("scroll"!==j.event){g.bind(j.event,function(a){if(!g.isLoaded()){g.trigger("load")}})}});$(j.viewport).trigger('checkLazyLoadAd');return this};$.belowthefold=function(a,b){var c=0;if(b.viewport===undefined||b.viewport===window){c=$(window).height()+$(window).scrollTop()}else{c=$(b.viewport).offset().top+$(b.viewport).height()}return c<=$(a).offset().top-b.threshold};$.abovethetop=function(a,b){var c=0;if(b.viewport===undefined||b.viewport===window){c=$(window).scrollTop()}else{c=$(b.viewport).offset().top}return c>=$(a).offset().top+b.threshold+$(a).height()}})(jQuery);
/*
* jQuery Form Plugin; v20130523
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var e=jQuery.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),e}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,t){t.data=n,l&&l.call(this,e,t)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(D),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",d),u||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(k)},m.timeout));var o=[];try{if(m.extraData)for(var l in m.extraData)m.extraData.hasOwnProperty(l)&&(e.isPlainObject(m.extraData[l])&&m.extraData[l].hasOwnProperty("name")&&m.extraData[l].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[l].name+'">').val(m.extraData[l].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+l+'">').val(m.extraData[l]).appendTo(w)[0]));m.iframeTarget||(v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1)),setTimeout(t,15);try{w.submit()}catch(c){var p=document.createElement("form").submit;p.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=D),t===k&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==D&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var l=(m.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(c){var d=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];d?x.responseText=d.textContent?d.textContent:d.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==l&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{L=_(x,l,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,L,"success",x),S.resolve(x.responseText,"success",x),p&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),p&&e.event.trigger("ajaxError",[x,m,r])),p&&e.event.trigger("ajaxComplete",[x,m]),p&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget||v.remove(),x.responseXML=null},100)}}}var l,c,m,p,d,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(r)for(c=0;h.length>c;c++)l=e(h[c]),i?l.prop("disabled",!1):l.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,d="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?d=y:v.attr2("name",d)):(v=e('<iframe name="'+d+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),p&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},p=m.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var k=1,D=2,A=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&A&&(m.extraData=m.extraData||{},m.extraData[E]=A),m.forceSync?o():setTimeout(o,10);var L,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,f=this;"function"==typeof t&&(t={success:t}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var d,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,d=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,p);d&&(g=g?g+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e('input[type=file]:enabled[value!=""]',this),w=j.length>0,S="multipart/form-data",k=f.attr("enctype")==S||f.attr("encoding")==S,D=n.fileapi&&n.formdata;a("fileAPI :"+D);var A,E=(w||k)&&!D;t.iframe!==!1&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||k)&&D?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var L=0;h.length>L;L++)h[L]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,l,c,f,m,p;for(s=0,m=o.length;m>s;s++)if(f=o[s],l=f.name,l&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:l,value:e(f).val(),type:f.type}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}));else if(c=e.fieldValue(f,!0),c&&c.constructor==Array)for(r&&r.push(f),u=0,p=c.length;p>u;u++)a.push({name:l,value:c[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var d=f.files;if(d.length)for(u=0;d.length>u;u++)a.push({name:l,value:d[u],type:f.type});else a.push({name:l,value:"",type:f.type})}else null!==c&&c!==void 0&&(r&&r.push(f),a.push({name:l,value:c,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];l=v.name,l&&!v.disabled&&"image"==v.type&&(a.push({name:l,value:h.val()}),a.push({name:l+".x",value:i.clk_x},{name:l+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var p=m.value;if(p||(p=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1})(jQuery);
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/*
 * TouchCarousel  v1.1
 *
 * Copyright 2011, Dmitry Semenov, http://dimsemenov.com
 * 
 */
(function($) {
    function TouchCarousel(element, options) {
        this.carouselRoot = $(element);

        var self = this;
        this._lockYAxis = false;
        this._isAnimating = false;

        this._downEvent = "";
        this._moveEvent = "";
        this._upEvent = "";

        this._totalItemsWidth;
        this._itemWidths;

        this._startAccelerationX;
        this._accelerationX;
        this._latestDragX;

        this._startTime = 0;

        this.settings = $.extend({}, $.fn.touchCarousel.defaults, options);

        this._dragContainer = this.carouselRoot.find(".touchcarousel-container");

        // animate directly style for better performance
        this._dragContainerStyle = this._dragContainer[0].style;

        this._itemsWrapper = this._dragContainer.wrap($('<div class="touchcarousel-wrapper" />')).parent();
        var itemsJQ = this._dragContainer.find(".touchcarousel-item");

        /* Array item structure:
         * {
         * 		item: jQuery item object
         * 		index: item index
         * 		posX: item X position
         *      width: item width
         * }
         *
         * */
        this.items = [];
        this.numItems = itemsJQ.length;


        var ua = navigator.userAgent.toLowerCase();
        var uaMatch = function( ua ) {
            var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                /(msie) ([\w.]+)/.exec( ua ) ||
                ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                [];

            return {
                browser: match[ 1 ] || "",
                version: match[ 2 ] || "0"
            };
        };
        var matched = uaMatch( ua );
        var br = {};
        if ( matched.browser ) {
            br[ matched.browser ] = true;
            br.version = matched.version;
        }
        if(br.chrome) { br.webkit = true; };
        self._browser = br;

        this._decelerationAnim;
        this._successfullyDragged = false;
        this._startMouseX = 0;
        this._prevMouseX = 0;
        this._moveDist = 0;
        this._blockClickEvents = false;
        this._wasBlocked = false;

        this._useWebkitTransition = false;


        if('ontouchstart' in window) {
            this.hasTouch = true;
            this._downEvent = 'touchstart.rs';
            this._moveEvent = 'touchmove.rs';
            this._upEvent = 'touchend.rs';
            this._baseFriction = this.settings.baseTouchFriction;
        } else {
            this.hasTouch = false;
            this._baseFriction = this.settings.baseMouseFriction;
            if(this.settings.dragUsingMouse) {
                this._downEvent = 'mousedown.rs';
                this._moveEvent = 'mousemove.rs';
                this._upEvent = 'mouseup.rs';

                //setup cursor
                this._grabCursor;
                this._grabbingCursor;
                var ua = self._browser;
                if (ua.msie || ua.opera) {
                    this._grabCursor = this._grabbingCursor = "move";
                } else if(ua.mozilla) {
                    this._grabCursor = "-moz-grab";
                    this._grabbingCursor = "-moz-grabbing";
                }
                this._setGrabCursor();
            } else {
                // set cursor to auto if drag navigation is disabled
                this._itemsWrapper.addClass('auto-cursor');
            }

        }
        if(this.hasTouch || this.settings.useWebkit3d) {
            // check if browser supports translate3d()
            if(('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())) {
                this._dragContainer.css({'-webkit-transform-origin':'0 0', '-webkit-transform': 'translateZ(0)'});
                this._useWebkitTransition = true;
            }
        }


        if(this._useWebkitTransition) {
            this._xProp = '-webkit-transform';
            this._xPref = 'translate3d(';
            this._xSuf = 'px, 0, 0)';
        } else {
            this._xProp = 'left';
            this._xPref = '';
            this._xSuf = 'px';
        }

        if(this.hasTouch) {
            this.settings.directionNavAutoHide = false;
        }

        if(!this.settings.directionNav) {
            if(this.settings.loopItems) {
                this._arrowLeftBlocked = true;
                this._arrowRightBlocked = true;
            } else {
                this._arrowLeftBlocked = false;
                this._arrowRightBlocked = false;
            }
            this.settings.loopItems = true;
        }

        var	itemObj,
            jqItem,
            dataSRC,
            slideImg,
            currPosX = 0;



        itemsJQ.eq(this.numItems - 1).addClass('last');

        // parse items
        itemsJQ.each(function(index) {
            jqItem = $(this);
            itemObj = {};
            itemObj.item = jqItem;
            itemObj.index = index;
            itemObj.posX = currPosX;
            itemObj.width = (jqItem.outerWidth(true) || self.settings.itemFallbackWidth);
            currPosX += itemObj.width;

            // block all links inside slides when dragging
            if(!this.hasTouch) {
                jqItem.find('a').bind('click.touchcarousel', function(e) {
                    if(self._successfullyDragged) {
                        e.preventDefault();
                        return false;
                    }
                });
            } else {
                // Fix preventing link bug on some touch devices
                var jqLinks = jqItem.find('a');
                var jqLink;
                jqLinks.each(function() {
                    jqLink = $(this);
                    jqLink.data('tc-href', jqLink.attr('href'));
                    jqLink.data('tc-target', jqLink.attr('target'));
                    jqLink.attr('href', '#');
                    jqLink.bind('click', function(e) {
                        e.preventDefault();
                        if(self._successfullyDragged) {
                            return false;
                        } else {
                            var linkData = $(this).data('tc-href');
                            var linkTarget = $(this).data('tc-target');
                            if(!linkTarget || linkTarget.toLowerCase() === '_self') {
                                window.location.href = linkData;
                            } else {
                                window.open(linkData);
                            }
                        }
                    });
                });
            }

            // prevent dragging on all elements that have 'non-draggable' class
            jqItem.find('.non-draggable').bind(self._downEvent, function(e) {
                self._successfullyDragged = false;
                e.stopImmediatePropagation();
            });

            self.items.push(itemObj);
        });


        this._maxXPos = this._totalItemsWidth = currPosX;


        if(this.settings.itemsPerMove > 0) {
            this._itemsPerMove = this.settings.itemsPerMove;
        } else {
            this._itemsPerMove = 1;
        }

        // Setup paging
        if(this.settings.pagingNav) {
            this.settings.snapToItems = true;
            this._pagingEnabled = true;
            this._numPages = Math.ceil(this.numItems / this._itemsPerMove);
            this._currPageId = 0;

            if(this.settings.pagingNavControls) {
                this._pagingNavContainer = $('<div class="tc-paging-container"><div class="tc-paging-centerer"><div class="tc-paging-centerer-inside"></div></div></div>');
                var pagingInside = this._pagingNavContainer.find('.tc-paging-centerer-inside');
                var pagingItem;

                for(var i = 1; i <= this._numPages; i++ ) {
                    pagingItem = $('<a class="tc-paging-item" href="#">' + i + '</a>').data('tc-id',i);
                    if(i === this._currPageId + 1) {
                        pagingItem.addClass('current');
                    }
                    pagingInside.append(pagingItem);
                }

                this._pagingItems = pagingInside.find(".tc-paging-item").click(function(e) {
                    e.preventDefault();
                    self.goTo(($(e.currentTarget).data('tc-id') - 1) * self._itemsPerMove);
                });

                this._itemsWrapper.after(this._pagingNavContainer);
            }

        } else {
            this._pagingEnabled = false;
        }


        this._dragContainer.css({
            width:currPosX
        });









        //Direction navigation (arrows)
        if(this.settings.directionNav) {
            this._itemsWrapper.after("<a href='#' class='arrow-holder left'><span class='arrow-icon left'></span></a> <a href='#' class='arrow-holder right'><span class='arrow-icon right'></span></a>");
            this.arrowLeft = this.carouselRoot.find(".arrow-holder.left");
            this.arrowRight = this.carouselRoot.find(".arrow-holder.right");


            /*if(this.settings.loopItems) {
             this._arrowLeftBlocked = false;
             this._disableLeftArrow();
             }*/

            if(this.arrowLeft.length < 1 || this.arrowRight.length < 1) {
                this.settings.directionNav = false;
            } else if(this.settings.directionNavAutoHide) {
                this.arrowLeft.hide();
                this.arrowRight.hide();

                this.carouselRoot.one("mousemove.arrowshover",function() {
                    self.arrowLeft.fadeIn("fast");
                    self.arrowRight.fadeIn("fast");
                });


                this.carouselRoot.hover(
                    function() {
                        self.arrowLeft.fadeIn("fast");
                        self.arrowRight.fadeIn("fast");
                    },
                    function() {
                        self.arrowLeft.fadeOut("fast");
                        self.arrowRight.fadeOut("fast");
                    }
                );
            }


            this._updateDirectionNav(0);

            if(this.settings.directionNav) {
                this.arrowRight.click(function(e) {
                    e.preventDefault();
                    if(self.settings.loopItems && !self._blockClickEvents || !self._arrowRightBlocked )
                        self.next();
                });

                this.arrowLeft.click(function(e) {
                    e.preventDefault();
                    if(self.settings.loopItems && !self._blockClickEvents || !self._arrowLeftBlocked )
                        self.prev();
                });
            }
        }




        // Manage window resize event with 100ms delay
        this.carouselWidth;
        this._resizeEvent = 'onorientationchange' in window ? 'orientationchange.touchcarousel' : 'resize.touchcarousel';
        var resizeTimer;
        $(window).bind(this._resizeEvent, function() {
            if(resizeTimer)
                clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() { self.updateCarouselSize(false); }, 100);
        });


        // Setup scrollbar
        if(this.settings.scrollbar) {
            this._scrollbarHolder = $("<div class='scrollbar-holder'><div class='scrollbar"+ (this.settings.scrollbarTheme.toLowerCase() === "light" ? " light" : " dark")  +"'></div></div>");
            this._scrollbarHolder.appendTo(this.carouselRoot);
            this.scrollbarJQ = this._scrollbarHolder.find('.scrollbar');
            this._scrollbarHideTimeout = "";
            this._scrollbarStyle = this.scrollbarJQ[0].style;
            this._scrollbarDist = 0;
            if(this.settings.scrollbarAutoHide) {
                this._scrollbarVisible = false;
                this.scrollbarJQ.css("opacity", 0);
            } else {
                this._scrollbarVisible = true;
            }

        } else {
            this.settings.scrollbarAutoHide = false;
        }


        this.updateCarouselSize(true);





        this._itemsWrapper.bind(this._downEvent, function(e) {  self._onDragStart(e); });



        // Setup autoplay
        if(this.settings.autoplay && this.settings.autoplayDelay > 0) {
            this._isHovering = false;
            this.autoplayTimer = '';
            this.wasAutoplayRunning = true;

            if(!this.hasTouch) {
                this.carouselRoot.hover(
                    function() {
                        self._isHovering = true;
                        self._stopAutoplay();
                    },
                    function() {
                        self._isHovering = false;
                        self._resumeAutoplay();
                    }
                );
            }
            this.autoplay = true;

            this._releaseAutoplay();
        } else {
            this.autoplay = false;
        }


        // Keyboard navigation
        if(this.settings.keyboardNav) {
            $(document).bind("keydown.touchcarousel", function(e) {
                if(!self._blockClickEvents) {
                    if (e.keyCode === 37) {
                        self.prev();
                    }
                    else if (e.keyCode === 39) {
                        self.next();
                    }
                }
            });
        }

        // release carousel main container overflow
        this.carouselRoot.css("overflow","visible");

    } /* TouchCarousel Constructor End */
    /* -------------------------------------TouchCarousel Prototype------------------------------------------------------*/



    TouchCarousel.prototype = {
        /* Public methods: */
        goTo:function(id, fromAutoplay) {


            var newItem = this.items[id];


            if(newItem) {
                if(!fromAutoplay && this.autoplay && this.settings.autoplayStopAtAction) {
                    this.stopAutoplay();
                }

                this._updatePagingNav(id);


                this.endPos = this._getXPos();
                var newX = -newItem.posX;
                if(newX > 0) {
                    newX = 0;
                } else if(newX < this.carouselWidth - this._maxXPos) {
                    newX = this.carouselWidth - this._maxXPos;
                }
                this.animateTo(newX, this.settings.transitionSpeed, "easeInOutSine");
            }

        },
        next:function(fromAutoplay) {
            var currXPos = this._getXPos();
            var newItemId = this._getItemAtPos(currXPos).index;


            if(!this._pagingEnabled) {
                newItemId = newItemId + this._itemsPerMove;
                if(this.settings.loopItems) {
                    if(currXPos <= this.carouselWidth - this._maxXPos) {
                        newItemId = 0;
                    }
                }
                if(newItemId > this.numItems - 1) {
                    newItemId = this.numItems - 1;
                }
            } else {
                var newPageId = this._currPageId +  1;
                if(newPageId >  this._numPages - 1) {
                    if(this.settings.loopItems) {
                        newItemId = 0;
                    } else {
                        newItemId = (this._numPages - 1) * this._itemsPerMove;
                    }
                } else {
                    newItemId = newPageId * this._itemsPerMove;
                }
            }



            this.goTo(newItemId, fromAutoplay);
        },
        prev:function(fromAutoplay) {
            var currXPos = this._getXPos();
            var newItemId = this._getItemAtPos(currXPos).index;

            if(!this._pagingEnabled) {
                newItemId = newItemId - this._itemsPerMove;
                if(newItemId < 0) {
                    if(this.settings.loopItems) {
                        if(currXPos < 0) {
                            newItemId = 0;
                        } else {
                            newItemId = this.numItems - 1;
                        }

                    } else {
                        newItemId = 0;
                    }
                }
            } else {
                var newPageId = this._currPageId -  1;
                if(newPageId <  0) {
                    if(this.settings.loopItems) {
                        newItemId = (this._numPages - 1) * this._itemsPerMove;
                    } else {
                        newItemId = 0;
                    }
                } else {
                    newItemId = newPageId * this._itemsPerMove;
                }
            }
            this.goTo(newItemId, fromAutoplay);
        },
        getCurrentId:function() {
            var currId = this._getItemAtPos(this._getXPos()).index;
            return currId;
        },
        setXPos:function(pos, isScrollbar) {
            if(!isScrollbar) {
                this._dragContainerStyle[this._xProp] = (this._xPref + pos + this._xSuf);
            } else {
                this._scrollbarStyle[this._xProp] = (this._xPref + pos + this._xSuf);
            }
        },
        stopAutoplay: function() {
            this._stopAutoplay();
            this.autoplay = false;
            this.wasAutoplayRunning = false;
        },
        resumeAutoplay: function() {
            this.autoplay = true;
            if(!this.wasAutoplayRunning) {
                this._resumeAutoplay();
            }
        },
        updateCarouselSize:function(leavePos) {
            var self = this;

            this.carouselWidth = this.carouselRoot.width();
            if(this.settings.scrollToLast) {
                var lastItemsWidth = 0;
                if(this._pagingEnabled) {
                    var freeItems = (this.numItems % this._itemsPerMove);
                    if(freeItems > 0) {
                        for(var i = this.numItems - freeItems; i < this.numItems; i++) {
                            lastItemsWidth += this.items[i].width;
                        }
                    } else {
                        lastItemsWidth = this.carouselWidth;
                    }

                } else {
                    lastItemsWidth = this.items[this.numItems - 1].width;
                }
                this._maxXPos = this._totalItemsWidth + this.carouselWidth - lastItemsWidth;
            } else {

                this._maxXPos = this._totalItemsWidth;
            }


            if(this.settings.scrollbar) {
                var scrlWidth = Math.round(this._scrollbarHolder.width() / (this._maxXPos / this.carouselWidth));
                this.scrollbarJQ.css('width', scrlWidth);
                this._scrollbarDist = this._scrollbarHolder.width() - scrlWidth;
            }
            if(!this.settings.scrollToLast) {
                if(this.carouselWidth >= this._totalItemsWidth) {
                    this._wasBlocked = true;
                    if(!this.settings.loopItems) {
                        this._arrowRightBlocked = true;
                        this.arrowRight.addClass("disabled");
                        this._arrowLeftBlocked = true;
                        this.arrowLeft.addClass("disabled");
                    }
                    this.setXPos(0);
                    return;
                } else if(this._wasBlocked) {
                    this._wasBlocked = false;
                    this._arrowRightBlocked = false;
                    this._arrowLeftBlocked = false;
                    this.arrowRight.removeClass("disabled");
                    this.arrowLeft.removeClass("disabled");
                }
            }

            if(!leavePos) {
                var newX = this.endPos = this._getXPos();

                if(newX > 0) {
                    newX = 0;
                } else if(newX < this.carouselWidth - this._maxXPos) {
                    newX = this.carouselWidth - this._maxXPos;
                }
                this.animateTo(newX, 300, "easeInOutSine");
            }


        },
        animateTo:function(pos, speed, easing, bounceAnim, endPos, bounceSpeed, bounceEasing) {

            if(this.settings.onAnimStart !== null) {
                this.settings.onAnimStart.call(this);
            }


            if(this.autoplay && this.autoplayTimer) {
                this.wasAutoplayRunning = true;
                this._stopAutoplay();
            }
            this._stopAnimation();

            var self = this;

            var scrollbarEnabled = this.settings.scrollbar,
                prop = self._xProp,
                pref = self._xPref,
                suf = self._xSuf,
                from = {containerPos: this.endPos},
                to = {containerPos: pos},
                to2 = {containerPos: endPos},
                endPos = bounceAnim ? endPos : pos,
                dContainer = self._dragContainerStyle;

            self._isAnimating = true;

            if(scrollbarEnabled) {
                var sbStyle = this._scrollbarStyle;
                var sbAnimateDist = self._maxXPos - self.carouselWidth;
                if(this.settings.scrollbarAutoHide)  {
                    if(!this._scrollbarVisible) {
                        this._showScrollbar();
                    }
                }
            }



            this._updateDirectionNav(endPos);

            function animationComplete() {
                self._isAnimating = false;
                self._releaseAutoplay();
                if(self.settings.scrollbarAutoHide)  {
                    self._hideScrollbar();
                }

                if(self.settings.onAnimComplete !== null) {
                    self.settings.onAnimComplete.call(self);
                }
            }




            this._decelerationAnim = $(from).animate(to, {
                duration: speed,
                easing: easing,
                step: function() {
                    if(scrollbarEnabled) {
                        sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-this.containerPos / sbAnimateDist)) + suf );
                    }
                    dContainer[prop] = (pref + Math.round(this.containerPos) + suf);
                },
                complete: function() {
                    if(bounceAnim) {
                        self._decelerationAnim = $(to).animate(to2, {
                            duration: bounceSpeed,
                            easing: bounceEasing,
                            step: function() {
                                if(scrollbarEnabled) {
                                    sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-this.containerPos / sbAnimateDist)) + suf );
                                }
                                dContainer[prop] = (pref + Math.round(this.containerPos) + suf);
                            },
                            complete: function() {
                                if(scrollbarEnabled) {
                                    sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-to2.containerPos / sbAnimateDist)) + suf );
                                }
                                dContainer[prop] = (pref + Math.round(to2.containerPos) + suf);
                                animationComplete();
                            }
                        });
                    } else {
                        if(scrollbarEnabled) {
                            sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-to.containerPos / sbAnimateDist)) + suf );
                        }
                        dContainer[prop] = (pref + Math.round(to.containerPos) + suf);
                        animationComplete();
                    }
                }
            });


        },
        /* Destroy carousel and remove it's element */
        destroy: function() {
            this.stopAutoplay();
            this._itemsWrapper.unbind(this._downEvent);
            $(document).unbind(this._moveEvent).unbind(this._upEvent);
            $(window).unbind(this._resizeEvent);
            if(this.settings.keyboardNav) {
                $(document).unbind("keydown.touchcarousel");
            }
            this.carouselRoot.remove();
        },


        /* Private methods: */
        _updatePagingNav:function(id) {
            if(this._pagingEnabled) {
                var newPageId = this._getPageIdFromItemId(id);
                this._currPageId = newPageId;
                if(this.settings.pagingNavControls) {
                    this._pagingItems.removeClass('current');
                    this._pagingItems.eq(newPageId).addClass('current');
                }

            }
        },
        _getPageIdFromItemId:function(id) {
            var itemsPerPage = this._itemsPerMove;
            for(var i = 0; i < this._numPages; i++) {
                if(id >= i * itemsPerPage  && id < i * itemsPerPage + itemsPerPage) {
                    return i;
                }
            }
            if(id < 0) {
                return 0;
            } else if(id >= this._numPages) {
                return this._numPages - 1;
            }
            return false;
        },
        _enableArrows:function() {
            if(!this.settings.loopItems) {
                if(this._arrowLeftBlocked) {
                    this._arrowLeftBlocked = false;
                    this.arrowLeft.removeClass("disabled");
                } else if(this._arrowRightBlocked) {
                    this._arrowRightBlocked = false;
                    this.arrowRight.removeClass("disabled");
                }
            }
        },


        _disableLeftArrow:function() {
            if(!this._arrowLeftBlocked && !this.settings.loopItems) {

                this._arrowLeftBlocked = true;
                this.arrowLeft.addClass("disabled");
                if(this._arrowRightBlocked) {
                    this._arrowRightBlocked = false;
                    this.arrowRight.removeClass("disabled");
                }
            }
        },
        _disableRightArrow:function() {
            if(!this._arrowRightBlocked && !this.settings.loopItems) {
                this._arrowRightBlocked = true;
                this.arrowRight.addClass("disabled");
                if(this._arrowLeftBlocked) {
                    this._arrowLeftBlocked = false;
                    this.arrowLeft.removeClass("disabled");
                }
            }
        },
        _getItemAtPos:function(pos) {
            var self = this;
            pos = -pos;


            var currItem;
            for(var i = 0; i < self.numItems; i++) {
                currItem = self.items[i];
                if(pos >= currItem.posX && pos < currItem.posX + currItem.width) {

                    return currItem;
                }
            }
            return -1;
        },



        _releaseAutoplay:function() {
            if(this.autoplay) {
                if(this.wasAutoplayRunning) {
                    if(!this._isHovering) {
                        this._resumeAutoplay();
                    }
                    this.wasAutoplayRunning = false;
                }
            }
        },
        _hideScrollbar:function() {
            var self = this;
            this._scrollbarVisible = false;
            if(this._scrollbarHideTimeout) {
                clearTimeout(this._scrollbarHideTimeout);
            }
            this._scrollbarHideTimeout = setTimeout(function(){
                self.scrollbarJQ.animate({opacity:0}, 150, "linear");
            }, 450);
        },
        _showScrollbar:function() {
            this._scrollbarVisible = true;
            if(this._scrollbarHideTimeout) {
                clearTimeout(this._scrollbarHideTimeout);
            }
            this.scrollbarJQ.stop().animate({opacity:1}, 150, "linear");
        },
        _stopAnimation:function() {
            if(this._decelerationAnim) {
                this._decelerationAnim.stop();
            }
        },
        _resumeAutoplay: function() {
            if(this.autoplay) {
                var self = this;
                if(!this.autoplayTimer) {
                    this.autoplayTimer = setInterval(function() {
                        if(!self._isDragging && !self._isAnimating) {
                            self.next(true);
                        }
                    }, this.settings.autoplayDelay);
                }
            }
        },
        _stopAutoplay: function() {
            if(this.autoplayTimer) {
                clearInterval(this.autoplayTimer);
                this.autoplayTimer = '';
            }
        },
        _getXPos:function(isScrollbar) {
            var obj = !isScrollbar ? this._dragContainer : this.scrollbarJQ;

            if(!this._useWebkitTransition) {
                return Math.round(obj.position().left);
            } else {
                var transform = obj.css("-webkit-transform");
                var explodedMatrix = transform.replace(/^matrix\(/i, '').split(/, |\)$/g);
                return parseInt(explodedMatrix[4], 10);
            }
        },

        _onDragStart:function(e) {
            if(!this._isDragging) {

                if(this.autoplay && this.settings.autoplayStopAtAction) {
                    this.stopAutoplay();
                }

                this._stopAnimation();
                if(this.settings.scrollbarAutoHide) {
                    this._showScrollbar();
                }


                var point;
                if(this.hasTouch) {
                    this._lockYAxis = false;
                    //parsing touch event
                    var currTouches = e.originalEvent.touches;
                    if(currTouches && currTouches.length > 0) {
                        point = currTouches[0];
                    }
                    else {
                        return false;
                    }
                } else {
                    point = e;
                    e.preventDefault();
                }


                this._setGrabbingCursor();
                this._isDragging = true;
                var self = this;
                if(this._useWebkitTransition) {
                    self._dragContainer.css({'-webkit-transition-duration':'0', '-webkit-transition-property': 'none'});
                }
                $(document).bind(this._moveEvent, function(e) { self._onDragMove(e); });
                $(document).bind(this._upEvent, function(e) { self._onDragRelease(e); });


                this._startPos = this._getXPos();



                this._accelerationX = point.clientX;


                this._successfullyDragged = false;

                this._startTime = (e.timeStamp || (new Date().getTime()));

                this._moveDist = 0;
                this._prevMouseX = this._startMouseX = point.clientX;
                this._startMouseY = point.clientY;
            }
        },
        _onDragMove:function(e) {
            var timeStamp = (e.timeStamp || (new Date().getTime()));
            var point;
            if(this.hasTouch) {
                if(this._lockYAxis) {
                    return false;
                }

                var touches = e.originalEvent.touches;
                // If touches more then one, so stop sliding and allow browser do default action

                if(touches.length > 1) {
                    return false;
                }

                point = touches[0];
                // If drag direction on mobile is vertical, so stop sliding and allow browser to scroll
                if(Math.abs(point.clientY - this._startMouseY) > Math.abs(point.clientX - this._startMouseX) + 3) {
                    if(this.settings.lockAxis) {
                        this._lockYAxis = true;
                    }
                    return false;
                }

                e.preventDefault();
            } else {
                point = e;
                e.preventDefault();
            }

            this._latestDragX = point.clientX;

            // Helps find last direction of drag move
            this._lastDragPosition = this._currentDragPosition;
            var distance = point.clientX - this._prevMouseX;
            if(this._lastDragPosition != distance) {
                this._currentDragPosition = distance;
            }

            if(distance != 0)
            {

                var dist = this._startPos + this._moveDist;



                if(dist >= 0) {
                    distance = distance / 4;
                    this._disableLeftArrow();

                } else if(dist <= this.carouselWidth - this._maxXPos) {
                    this._disableRightArrow();
                    distance = distance / 4;
                } else {
                    this._enableArrows();
                }

                this._moveDist += distance;
                this.setXPos(dist);

                if(this.settings.scrollbar) {
                    this.setXPos((this._scrollbarDist) * (-dist / (this._maxXPos - this.carouselWidth)), true);
                }
            }






            this._prevMouseX = point.clientX;

            if (timeStamp - this._startTime > 350) {
                this._startTime = timeStamp;
                this._accelerationX = point.clientX;
            }

            if(this.settings.onDragStart !== null) {
                this.settings.onDragStart.call(this);
            }

            return false;
        },

        _onDragRelease:function(e) {



            if(this._isDragging) {

                var self = this;
                this._isDragging = false;
                this._setGrabCursor();





                this.endPos = this._getXPos();


                this.isdrag = false;

                $(document).unbind(this._moveEvent).unbind(this._upEvent);

                if(this.endPos == this._startPos) {
                    this._successfullyDragged = false;
                    if(this.settings.scrollbarAutoHide) {
                        this._hideScrollbar();
                    }
                    return;
                } else {
                    this._successfullyDragged = true;
                }

                //function animate
                var dist = (this._latestDragX - this._accelerationX);
                var duration =  Math.max(40, (e.timeStamp || (new Date().getTime())) - this._startTime);



                // For nav speed calculation F=ma :)
                var friction = 0.5,
                    mass = 2,
                    v0 = Math.abs(dist) / duration;

                function getCorrectXPos(pos) {

                    if(pos > 0) {
                        pos = 0;
                    } else if(pos < self.carouselWidth - self._maxXPos) {
                        pos = self.carouselWidth - self._maxXPos;
                    }
                    return pos;
                }

                if(!this.settings.snapToItems) {
                    // Physics continue
                    var timeOffset = 0;
                    if(v0 <= 2) {
                        friction = this._baseFriction * 3.5;
                        timeOffset = 0;
                    } else if(v0 > 2 && v0 <= 3) {
                        friction = this._baseFriction * 4;
                        timeOffset = 200;
                    } else if(v0 > 3){
                        timeOffset = 300;
                        if(v0 > 4) {
                            v0 = 4;
                            timeOffset = 400;
                            friction = this._baseFriction * 6;
                        }
                        friction = this._baseFriction * 5;
                    }

                    var S = (v0 * v0 * mass) / (2 * friction);
                    S = S * (dist < 0 ? -1 : 1);
                    var t = v0 * mass / friction + timeOffset;


                    if(this.endPos + S > 0) {
                        if(this.endPos > 0) {
                            this.animateTo(0, 800, "easeOutCubic");
                        } else {
                            this.animateTo(
                                (this.carouselWidth / 10) * ((timeOffset + 200) / 1000),
                                (Math.abs(this.endPos) * 1.1) / v0,
                                "easeOutSine",
                                true,
                                0,
                                400,
                                "easeOutCubic");
                        }
                    } else if(this.endPos + S < this.carouselWidth - this._maxXPos) {
                        if(this.endPos < this.carouselWidth - this._maxXPos) {
                            this.animateTo(this.carouselWidth - this._maxXPos, 800, "easeOutCubic");
                        } else {
                            this.animateTo(
                                this.carouselWidth - this._maxXPos - (this.carouselWidth / 10) * ((timeOffset + 200) / 1000),
                                (Math.abs(this.carouselWidth - this._maxXPos - this.endPos) * 1.1) / v0,
                                "easeOutSine",
                                true,
                                this.carouselWidth - this._maxXPos,
                                400,
                                "easeOutCubic");
                        }
                    } else {
                        this.animateTo(this.endPos + S, t, "easeOutCubic");
                    }
                } else {
                    if(this.autoplay && this.settings.autoplayStopAtAction) {
                        this.stopAutoplay();
                    }
                    var isNext = Boolean(this._startMouseX - this._prevMouseX > 0);


                    var newX = getCorrectXPos(this._getXPos());


                    var newItemId = this._getItemAtPos(newX).index;

                    if(!this._pagingEnabled) {
                        newItemId = newItemId + (isNext ?  this._itemsPerMove : ( - this._itemsPerMove + 1));
                    } else {
                        if(isNext) {
                            newX = Math.max(newX - this.carouselWidth - 1, 1 - self._maxXPos);
                            newItemId = this._getItemAtPos(newX).index;
                            if(newItemId === undefined) {
                                newItemId = this.numItems - 1;
                            }
                        }

                        var newPageId = this._getPageIdFromItemId(newItemId);

                        newItemId = newPageId * this._itemsPerMove;
                    }

                    if(isNext) {
                        newItemId = Math.min(newItemId, this.numItems - 1);
                    } else {
                        newItemId = Math.max(newItemId, 0);
                    }



                    var newItem = this.items[newItemId];

                    this._updatePagingNav(newItemId);

                    if(newItem) {

                        newX = getCorrectXPos(-newItem.posX);

                        var newDist = Math.abs(this.endPos  - newX);
                        var newDuration = Math.max((newDist * 1.08) / v0, 150);
                        var isFast = Boolean(newDuration < 180);
                        var addDist = newDist * 0.08;
                        if(isNext) {
                            addDist = addDist * -1;
                        }


                        this.animateTo(isFast ? (newX + addDist ) : newX,
                            Math.min(newDuration, 400),
                            "easeOutSine",
                            isFast,
                            newX,
                            300,
                            "easeOutCubic");


                    }

                }

                if(this.settings.onDragRelease !== null) {
                    this.settings.onDragRelease.call(this);
                }

            }

            return false;
        },
        _updateDirectionNav:function(pos) {
            if(pos === undefined) {
                pos = this._getXPos();
            }
            if(!this.settings.loopItems) {
                if(pos >= 0) {
                    this._disableLeftArrow();
                } else if(pos <= this.carouselWidth - this._maxXPos) {
                    this._disableRightArrow();
                } else {
                    this._enableArrows();
                }
            }
        },
        _setGrabCursor:function() {
            if(this._grabCursor) {
                this._itemsWrapper.css('cursor', this._grabCursor);
            } else {
                this._itemsWrapper.removeClass('grabbing-cursor');
                this._itemsWrapper.addClass('grab-cursor');
            }

        },
        _setGrabbingCursor:function() {
            if(this._grabbingCursor) {
                this._itemsWrapper.css('cursor', this._grabbingCursor);
            } else {
                this._itemsWrapper.removeClass('grab-cursor');
                this._itemsWrapper.addClass('grabbing-cursor');
            }
        }
    }; /* TouchCarousel.prototype end */

    $.fn.touchCarousel = function(options) {
        return this.each(function(){
            var touchCarousel = new TouchCarousel($(this), options);
            $(this).data("touchCarousel", touchCarousel);
        });
    };

    $.fn.touchCarousel.defaults = {
        itemsPerMove: 1,              // The number of items to move per arrow click.

        snapToItems: false,           // Snaps to items, based on itemsPerMove
        pagingNav: false,             // Enable paging nav (snaps to first item of every group, based on itemsPerMove). Overrides snapToItems
        pagingNavControls: true,      // Paging controls (bullets)



        autoplay:false,               // Autoplay enabled
        autoplayDelay:3000,	          // Delay between transitions
        autoplayStopAtAction:true,    // Stop autoplay forever when user clicks arrow or does any other action

        scrollbar: true,              // Scrollbar enabled
        scrollbarAutoHide: false,     // Scrollbar autohide
        scrollbarTheme: "dark",	      // Scrollbar color. Can be "light" or "dark"

        transitionSpeed: 600,         // Carousel transition speed (next/prev arrows, autoplay)

        directionNav:true,            // Direction (arrow) navigation (true or false)
        directionNavAutoHide:false,   // Direction (arrow) navigation auto hide on hover. (On touch devices arrows are always shown)

        loopItems: false,             // Loop items (don't disable arrows on last slide and allow autoplay to loop)

        keyboardNav: false,			  // Keyboard arrows navigation
        dragUsingMouse:true,          // Enable drag using mouse


        scrollToLast: false,          // Last item ends at start of carousel wrapper


        itemFallbackWidth: 500,       // Default width of the item in pixels. (used if impossible to get item width).

        baseMouseFriction: 0.0012,    // Container friction on desktop (higher friction - slower speed)
        baseTouchFriction: 0.0008,    // Container friction on mobile
        lockAxis: true,               // Allow dragging only on one direction
        useWebkit3d: false,           // Enable WebKit 3d transform on desktop devices
        // (on touch devices this option is turned on)
        // Use it if you have only images, 3d transform makes text blurry


        onAnimStart: null,            // Callback, triggers before deceleration or transition animation
        onAnimComplete: null,         // Callback, triggers after deceleration or transition animation

        onDragStart:null,             // Callback, triggers on drag start
        onDragRelease: null           // Callback, triggers on drag complete
    };

    $.fn.touchCarousel.settings = {};

    /* easing types */
    $.extend(jQuery.easing, {
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        }
    });

})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/*!
 * mousewheelStopPropagation.js v1.2.0
 * (c) 2014, Benoit Asselin contact(at)ab-d.fr
 * MIT Licence
 */
 
;(function($, window, undefined) {
	'use strict';
	
	$.fn.mousewheelStopPropagation = function(options) {
		options = $.extend({
			// defaults
			wheelstop: null // Function
			}, options);
		
		// Compatibilities
		var ua = navigator.userAgent.toLowerCase(),
		    isMsIE = /(trident|msie)/.test(ua);
		var docElt = document.documentElement,
		    mousewheelEventName = 'mousewheel';
		if('onmousewheel' in docElt) {
			mousewheelEventName = 'mousewheel';
		} else if('onwheel' in docElt) {
			mousewheelEventName = 'wheel';
		} else if('DOMMouseScroll' in docElt) {
			mousewheelEventName = 'DOMMouseScroll';
		}
		if(!mousewheelEventName) { return this; }
		
		function mousewheelPrevent(event) {
			event.preventDefault();
			event.stopPropagation();
			if('function' === typeof options.wheelstop) {
				options.wheelstop(event);
			}
		}
		
		return this.each(function() {
			var _this = this,
			    $this = $(_this);
			$this.on(mousewheelEventName, function(event) {
				var origiEvent = event.originalEvent;
				var scrollTop = _this.scrollTop,
				    scrollMax = _this.scrollHeight - $this.outerHeight(),
				    delta = -origiEvent.wheelDelta;
				if(isNaN(delta)) {
					delta = origiEvent.deltaY;
				}
				var scrollUp = delta < 0;
				if((scrollUp && scrollTop <= 0) || (!scrollUp && scrollTop >= scrollMax)) {
					mousewheelPrevent(event);
				} else if(isMsIE) {
					// Fix Internet Explorer and emulate natural scrolling
					var animOpt = { duration:200, easing:'linear' };
					if(scrollUp && -delta > scrollTop) {
						$this.stop(true).animate({ scrollTop:0 }, animOpt);
						mousewheelPrevent(event);
					} else if(!scrollUp && delta > scrollMax - scrollTop) {
						$this.stop(true).animate({ scrollTop:scrollMax }, animOpt);
						mousewheelPrevent(event);
					}
				}
			});
		});
	};
	
})(jQuery, window);



fos.Router.setData({"base_url":"","routes":{"hg_app_ajax_score_add":{"tokens":[["variable",".","json","_format"],["text","\/ajax\/score-add"]],"defaults":[],"requirements":{"_format":"json","_method":"POST"},"hosttokens":[]},"hg_app_ajax_youtube_link":{"tokens":[["variable",".","json","_format"],["text","\/ajax\/youtube-link"]],"defaults":[],"requirements":{"_format":"json","_method":"POST"},"hosttokens":[]},"hg_app_ajax_subcategories":{"tokens":[["variable",".","json","_format"],["variable","\/","\\d+","id"],["text","\/ajax\/subcategories"]],"defaults":[],"requirements":{"_format":"json","id":"\\d+","_method":"GET"},"hosttokens":[]},"hg_app_ajax_image_upload":{"tokens":[["variable",".","json","_format"],["text","\/ajax\/image-upload"]],"defaults":[],"requirements":{"_format":"json","_method":"POST"},"hosttokens":[]},"hg_app_ajax_image_carousel":{"tokens":[["variable",".","json","_format"],["text","\/ajax\/carousel"]],"defaults":[],"requirements":{"_format":"json","_method":"POST"},"hosttokens":[]}},"prefix":"","host":"localhost","scheme":"http"});
/**
 * Infinite Scroll v stranke
 */

(function ($) {
  $.fn.socializerSidebar = function (options) {
    var settings = $.extend({

    }, options);

    var $container = this

    if ($container.size()) {
        $container.prependTo("body")

        $container.affix({
            offset: {
                top: 96 - 24,
                bottom: 200
            }
        })

        var windowResize = function(){
            var widthBody = $("body").width()
            var widthContainer = $("#main").outerWidth()
            var left = ((widthBody - widthContainer) / 2) - $container.outerWidth() + 2
            $container.css("left", left)
        }
        windowResize()
        $(window).resize(windowResize)
    }

    return this;
  };
}(jQuery));

jQuery(function ($) {

    if (window.location.hash == '#_=_'){
        window.location.hash = '';
    }

    setInterval(function(){
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=400603976681849";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, 2000)


})

jQuery(function ($) {

    var loaded = false;

    if ($(".fb-comments").size()) {
        $(window).resize(function () {
            $(".fb-comments.fb_iframe_widget > span").each(function () {
                var span = $(this);
                var width = span.parent().width();

                span.css("width", width + "px");
                loaded = true;
            });

        });

        var interval = setInterval(function () {

            $(window).trigger("resize");
            if (loaded)
                clearInterval(interval);
        }, 200);

    }
});

jQuery(function ($) {
    var loaded = false;

    if ($(".fb-like-box").size()) {
        $(window).resize(function () {
            $(".fb-like-box.fb_iframe_widget > span").each(function () {
                var span = $(this);
                var width = span.parent().width();

                span.css("width", width + "px");

                loaded = true;
            });

        });

        var interval = setInterval(function () {

            $(window).trigger("resize");

            if (loaded)
                clearInterval(interval);
        }, 200);

    }

});
jQuery(function ($) {


    $('#post-add .nav-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')

        var hash = $(this).attr("href")

        if (window.location.hash != hash) window.location.hash = hash;
    })

    var hash = window.location.hash;
    if (typeof hash != "undefined" && hash) {
        if ($('#post-add .nav-tabs a').size()) {
            $('#post-add .nav-tabs a[href="' + hash + '"]').trigger("click")
        }
    }


    $('#post-add-image input[type="file"], #post-add-youtube input[type="file"], #post-add-text input[type="file"]').change(function () {
        var input = $(this).get(0);
        var $form = $(this).closest("form")
        var $imagePreview = $(input).closest('.form-group').next()


        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var img = $('<img>', {src: e.target.result})
                $imagePreview.html(img)
            }

            reader.readAsDataURL(input.files[0]);
        }
    })

    $('#post-add-youtube input[name*="[source]"]').change(function () {
        var url = $.trim($(this).val())
        var $container = $(this).closest("#post-add-youtube").find(".youtube-preview")
        var $formGroup = $(this).closest(".form-group")


        $container.html("");
        var opts = {
            color: '#fff'
        }
        if (url.length > 0) {
            $container.fadeIn(null, function () {
                $container.spin(opts)
            })

            var data = {
                url: url
            }

            var href = Routing.generate('hg_app_ajax_youtube_link', {_format: "json"})
            $.post(href, data,function (result) {
                if (result.status) {
                    $formGroup.addClass("has-success").removeClass("has-error")
                    $container.html(result.iframe)
                } else {
                    $formGroup.addClass("has-error").removeClass("has-success")
                    $container.html("<p>" + result.message + "</p>")
                }
            }, 'json').fail(function () {
                    alert(message_opps_something_went_wrong)
                }).always(function () {
                    $container.spin(false)
                })

        } else {
            $container.spin(false)
            $container.fadeOut()
            $formGroup.removeClass("has-error").removeClass("has-success")
        }

    }).trigger("change")


    $("#post-add-image, #post-add-text").each(function () {
        var $container = $(this)
        var $category = $container.find('[name*="[categories]"]')
        var $subcategory = $container.find('[name*="[subcategory]"]')

        $category.change(function () {
            var val = $(this).val();

            $subcategory.fadeTo(null, 0.3);
            var opts = {
                left : $subcategory.width() / 2
            }
            $subcategory.parent().spin(opts)

            var href = Routing.generate('hg_app_ajax_subcategories', {_format: "json", "id": val})
            $.get(href, {}, function (result) {

                $subcategory.find(':not(option[value=""])').remove()

                var count = 0
                for (var i in result.values) {
                    count++
                    var text = result.values[i]
                    var option = $('<option value="' + i + '">' + text + '</option>')
                    $subcategory.append(option)
                }

                $subcategory.fadeTo(null, 1)
                $subcategory.parent().spin(false)

                if(count){
                    $subcategory.closest(".form-group").slideDown()
                    $subcategory.attr("required", "required")
                }else {
                    $subcategory.closest(".form-group").slideUp()
                    $subcategory.removeAttr("required")
                }
            })

        }).trigger("change")
    })

})
jQuery(function ($) {

    var options = {
        placement: 'right'
    }

    $('.posts .item.user').tooltip(options)



})

jQuery(function ($) {

    $('#content .posts .thumbnail.gif').click(function(){
        var $thumbnail = $(this)
        var $img = $thumbnail.find("img");

        $img.attr('src', $img.data('animated'))

        $thumbnail.unbind()

        $thumbnail.find('.overlay-icon').toggleClass('gif')

        var opts = {
            color: "#fff"
        }
        $thumbnail.spin(opts)

        $img.on('load', function(){
            $thumbnail.spin(false)
        })

        return false;
    })

    $('#content .posts .thumbnail.youtube').click(function(){
        var $thumbnail = $(this)
        $thumbnail.find("img").hide();
        $thumbnail.find("iframe").show();

        $thumbnail.addClass('active')

        setTimeout(function(){
            $thumbnail.find('.overlay, .overlay-icon').remove()
        }, 500)

        return false;
    })

})
message_opps_something_went_wrong = "Hups, niečo sa pokazilo, skús neskôr!"

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}



function google_adsense() {
    $(".adsbygoogle:hidden").remove();
    $(".adsbyetarget:hidden").remove();
    var $adsbygoogle = $(".adsbygoogle:not(.inited)");
    var $adsbyetarget = $(".adsbyetarget:not(.inited)");

    if(!$('body.ads-hide-all').size()) {
        if($('body.ads-hide-adsense').size()) {
            $adsbygoogle.remove()
            $adsbyetarget.filter(':hidden').remove()
            $adsbyetarget.each(function(){
                var $this = $(this)
                etargetLoad($this);
                $this.addClass('inited')
            })
        } else {
            $adsbygoogle.each(function(){
                (adsbygoogle = window.adsbygoogle || []).push({});
                console.log(adsbygoogle)
                $(this).addClass('inited')
            })
            $adsbyetarget.not('.etarget-always').remove()
            $adsbyetarget.each(function(){
                var $this = $(this)
                etargetLoad($this);
                $this.addClass('inited')
            })
        }
    } else {
        $adsbygoogle.remove();
        $adsbyetarget.remove();
        $(".ad-header").remove();
        $("[js-adzone]").remove();
    }
}

function lazyloadAd() {
    var $ads = $("body:not(.error404) [js-AdZone]:visible")

    $ads.lazyLoadAd({
        forceLoad: true,
        timeout: 150,
        //debug: $('body.is-role-admin').size() > 0,
        //xray: $('body.is-role-admin').size() > 0
        onComplete: function(){
            google_adsense()
        }
    });
}


jQuery(function ($) {

    $('.hg-tooltip').tooltip()
    /**
     * Change url on popular select
     */
    $("#popular-select").change(function () {
        var val = $(this).val()
        window.location.href = val
        return false
    })


    if($.cookie("auto_crawl") == 1 ){
        $(".link.prev")[0].click()
    }

    /**
     * Otvaranie linkov v novom okne
     */
    $("[js-OpenWindow]").click(function(){
        var href = $(this).attr("href")

        window.open(href,"myWindow","resizable=yes,width=620, height=360");

        return false
    })

    /*    $(".mature-change").click(function(){
     var isMature = $(this).hasClass("off")

     if(isMature){
     $.cookie("mature", null, { expires: -1000, path: "/" })
     }else{
     $.cookie("mature", "1", { expires: 365, path: "/" })
     }

     window.location.reload()
     return false
     })*/

    //setTimeout(function(){
    //
    //    if($('#sidebar .box.users').size() && $('#content').height() > 2400 && !$('#sidebar .box.posts-last').size()){
    //
    //        $('#sidebar').affix({
    //            offset: {
    //                top: function () {
    //                    var offset = $('#secondary').offset().top
    //
    //                    var $banner = $('#secondary .banner-sidebar');
    //                    var $bannerBox = $banner.closest('.box')
    //
    //                    var height = 0
    //
    //                    $bannerBox.prevAll().each(function(){
    //                        if($(this).is(":visible")) {
    //                            height += $(this).outerHeight(true)
    //                        }
    //                    })
    //                    height += $banner.height()
    //
    //                    offset = offset + height
    //
    //                    $('#sidebar').css('top', -height - 8)
    //
    //                    return  offset
    //                }, bottom: function () {
    //                    return ($('#footer').outerHeight(true))
    //                }
    //            }
    //        })
    //    }
    //
    //    if($('#sidebar .box.posts-last').size()){
    //
    //        var firstTime = true
    //
    //        $('#sidebar').affix({
    //            offset: {
    //                top: function () {
    //                    var offset = $('#secondary').offset().top
    //                    var $sidebar = $('#sidebar')
    //
    //                    var height = $sidebar.outerHeight(true)
    //
    //                    height -= $sidebar.find('.item.post:eq(1)').outerHeight(true)
    //                    height -= $sidebar.find('.item.post:eq(2)').outerHeight(true)
    //
    //                    height -= 16
    //
    //
    //                    offset = offset + height
    //
    //                    if($sidebar.hasClass("affix-top") || firstTime){
    //                        $sidebar.css('position', '')
    //                        $sidebar.css('transform', 'translate(0px, 0px)')
    //                    }else if($sidebar.hasClass("affix-bottom")){
    //
    //                    }else{
    //                        $sidebar.css('position', '')
    //                        $sidebar.css('transform', 'translate(0px, ' + (-height) + 'px)')
    //                    }
    //
    //                   firstTime = false
    //                   return offset
    //                },
    //                bottom: function () {
    //                    return ($('#footer').outerHeight(true))
    //                }
    //            }
    //        })
    //    }
    //}, 3 * 1000)



    /*
     * Voting ajax
     */
    $(".vote-post").click(function () {
        var $thisObject = $(this)
        var $post = $thisObject.closest(".post")
        var $score = $post.find(".score")
        var points = $thisObject.hasClass("down") ? -1 : 1
        var postId = $post.data("id")

        if ($post.data("voting-ajax")) return false;

        $post.data("voting-ajax", true)

        var opts = {
            lines: 9,
            length: 6,
            width: 6,
            radius: 8,
            color: '#000'
        }
        $thisObject.spin(opts)

        var data = {
            points: points,
            postId: postId
        }


        var href = Routing.generate('hg_app_ajax_score_add', {_format: "json"})
        $.post(href, data,function (result) {
            if (result.status) {
                $post.find(".score").text(result.score)
                $score.fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn()
            } else {
                alert(result.message)
            }
        }, 'json').fail(function () {
                alert(message_opps_something_went_wrong)
            }).always(function () {
                $post.data("voting-ajax", false)
                $thisObject.spin(false)
            })

        return false
    })

    /*
     * Keypress for navigation between posts
     */
    if ($("#post-navigation").size() && $("#post-navigation").data("type") != "game") {

        $(window).keypress(function (e) {
            if (e.which == 97 || e.keyCode == 37) {
                var link = $("#post-navigation .link.next")
                if (link.size()) {
                    link[0].click()
                }
            }
            if (e.which == 100 || e.keyCode == 39) {
                var link = $("#post-navigation .link.prev")
                if (link.size()) {
                    link[0].click()
                }
            }
        })
    }

    /*
     * Infinite Scroll v stranka
     */
    var $infinitePosts = $("#infinite-posts")
    if ($infinitePosts.size()){
        var isAjax = false
        $infinitePosts.on("click", ".next-posts a", function(){

            if(isAjax) return false
            isAjax = true


            var $this = $(this)
            var $parent = $this.parent()
            var href = $(this).attr("href")

            $parent.spin()
            $this.css("opacity", 0)
            $.get(href, function(result){
                $infinitePosts.append(result)

                $infinitePosts.find("img").css("opacity", 1)
                $parent.spin(false).remove()

                isAjax = false
            })
            return false
        })

        $(window).on("scroll", function(a){
            var scrollTop = $( this ).scrollTop( );
            var windowsHeight = $(this).outerHeight(true)
            var documentHeight = $(document).outerHeight(true)
            var distance = 400;

            if((scrollTop + windowsHeight) > (documentHeight - distance)){
                $infinitePosts.find(".next-posts a").trigger("click")
            }
        })

        $('#primary').on("scroll", function (e) {
            var $this = $(this);
            var scrollTop = $this.scrollTop();
            var windowsHeight = $this.outerHeight(true)
            var documentHeight = $this[0].scrollHeight
            var distance = 30;

            if ((scrollTop + windowsHeight) > (documentHeight - distance)) {
                $('#primary').find(".next-posts a").trigger("click")
            }
        })
    }

    /**
     * Google ads zobrazenie
     */
    google_adsense();

    /**
     * Zobrazenie reklam z adserveru
     */
    lazyloadAd();


    $(".socializer-sidebar").socializerSidebar()

    function fullheight() {
        var $body = $("body")
        var $content = $("#primary")
        var $header = $('#header')
        var $main = $("#main")
        var $admincheck = $(".entry-admin-check")

        if($body.hasClass('creator')) return

        $body.attr("js-Scrollable", 'true')




        var scrolledContent = function(contentHeight) {
            $content.height(contentHeight)
            $body.attr("js-Scrollable", 'false').scrollTop(0)
        }

        var nonScrolledContent = function() {
            $content.height('')
            $body.attr("js-Scrollable", 'true')
        }

        var calculateHeight = function(){

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();

            var headerHeight = $header.outerHeight();
            var htmlMargin = parseInt(jQuery('html').css("margin-top"))

            var exceptMainHeight = headerHeight + htmlMargin

            var mainPadding = parseInt($main.css('padding-top')) + parseInt($main.css('padding-bottom'))

            var admincheck = 0
            if($admincheck.size()) {
                admincheck = $admincheck.outerHeight()
            }

            var sidebarHeight = 0;
            $("#secondary").each(function() {
                sidebarHeight += $(this).outerHeight();
            });



            //fix for Chrome browsers, because they load fonts after init event
            //if(headerHeight > 100) {
            //    setTimeout(calculateHeight, 200);
            //}

            var contentHeight = windowHeight - exceptMainHeight - mainPadding - admincheck


            if(windowWidth >= 768) {
                if(sidebarHeight < contentHeight) {
                    scrolledContent(contentHeight)
                } else {
                    nonScrolledContent()
                }
            }
        }

        var calculateOnResize = debounce(function() {
            calculateHeight();
        }, 500)

        $(window).resize(calculateOnResize);
        calculateHeight();

        // only quickfix, may remove later
        setInterval(function(){
            calculateHeight();
        }, 1000)

        $body.on('mousewheel', function(e) {
            if($(this).is('[js-Scrollable~="true"]')) return

            e.preventDefault()

            var scrollSpeed = e.deltaFactor * e.deltaY

            $content.scrollTop($content.scrollTop() - scrollSpeed)
        });


        $content.mousedown(function(e){
            switch(e.which)
            {
                case 2:
                    e.stopPropagation();
                    e.stopImmediatePropagation()
                    break;
            }
            return true;// to allow the browser to know that we handled it.
        })


        $(document).mousedown(function(e){
            if($('body').is('[js-Scrollable~="true"]')) return

            switch(e.which)
            {
                case 2:
                    return false
                    break;
            }
            return true;// to allow the browser to know that we handled it.
        });

        /**
         * Scrollovanie na zaklade sipok
         */

        $(window).keydown(function (e) {
            if($body.is('[js-Scrollable~="true"]')) return

            if (e.keyCode == 38) {
                var scrollSpeed = 50
                $content.scrollTop($content.scrollTop() - scrollSpeed)
                return false
            }
            if (e.keyCode == 40) {
                var scrollSpeed = 50
                $content.scrollTop($content.scrollTop() + scrollSpeed)
                return false
            }
        });
    }

    fullheight();


    function cookieSubmit(){
        var cookies = getCookie("im_cookies_accepted");
        if(!cookies) {
            $('[js-Cookies]').attr('am-Cookies', 'open')
            console.log(cookies)

            $('[js-Cookies-Button]').click(function(){
                $('[js-Cookies]').attr('am-Cookies', 'closed')
                setCookie("im_cookies_accepted", true, 365)
                return false;
            })
        }
    }
    cookieSubmit();
});