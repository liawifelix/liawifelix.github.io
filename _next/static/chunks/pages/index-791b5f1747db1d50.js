(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(386)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,o=n(1598).Z,a=n(7273).Z,l=o(n(7294)),s=i(n(5443)),c=n(2730),u=n(9309),d=n(9977);n(5086);var f=i(n(1479));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/mypage/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,i,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:h,placeholder:p,loading:g,srcString:v,config:A,unoptimized:w,loader:y,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:C,setShowAltText:E,onLoad:j,onError:_}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,{loading:g,width:o,height:i,decoding:"async","data-nimg":h?"fill":"1",className:c,style:r({},u,d)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,v,p,b,x,C,w))},[v,p,b,x,C,_,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,p,b,x,C,w)},onError:e=>{E(!0),"blur"===p&&C(!0),_&&_(e)}})))}),A=l.forwardRef((e,t)=>{let n,i;var o,{src:m,sizes:A,unoptimized:w=!1,priority:y=!1,loading:b,className:x,quality:C,width:E,height:j,fill:_,style:S,onLoad:z,onLoadingComplete:O,placeholder:I="empty",blurDataURL:N,layout:R,objectFit:k,objectPosition:P,lazyBoundary:B,lazyRoot:D}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=l.useContext(d.ImageConfigContext),L=l.useMemo(()=>{let e=h||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[T]),F=M,V=F.loader||f.default;delete F.loader;let Q="__next_img_default"in V;if(Q){if("custom"===L.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=V;V=t=>{let{config:n}=t,r=a(t,["config"]);return e(r)}}if(R){"fill"===R&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(S=r({},S,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!A&&(A=t)}let G="",W=g(E),H=g(j);if("object"==typeof(o=m)&&(p(o)||void 0!==o.src)){let e=p(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,N=N||e.blurDataURL,G=e.src,!_){if(W||H){if(W&&!H){let t=W/e.width;H=Math.round(e.height*t)}else if(!W&&H){let t=H/e.height;W=Math.round(e.width*t)}}else W=e.width,H=e.height}}let q=!y&&("lazy"===b||void 0===b);((m="string"==typeof m?m:G).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,q=!1),L.unoptimized&&(w=!0),Q&&m.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(w=!0);let[U,J]=l.useState(!1),[Z,Y]=l.useState(!1),K=g(C),X=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:P}:{},Z?{}:{color:"transparent"},S),$="blur"===I&&N&&!U?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:W,heightInt:H,blurWidth:n,blurHeight:i,blurDataURL:N,objectFit:X.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:n,quality:o,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:n,quality:o,width:s[u]})}}({config:L,src:m,unoptimized:w,width:W,quality:K,sizes:A,loader:V}),et=m,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},er=l.useRef(z);l.useEffect(()=>{er.current=z},[z]);let ei=l.useRef(O);l.useEffect(()=>{ei.current=O},[O]);let eo=r({isLazy:q,imgAttributes:ee,heightInt:H,widthInt:W,qualityInt:K,className:x,imgStyle:X,blurStyle:$,loading:b,config:L,fill:_,unoptimized:w,placeholder:I,loader:V,srcString:et,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:J,setShowAltText:Y},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=A,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r||t,s=i||n,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},386:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),i=n(5675),o=n.n(i),a={src:"/mypage//_next/static/media/avatar.c787473f.jpg",height:1576,width:1460,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgIDAAAAAAAAAAAAAAABAwACESEFEzL/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIRAxEAPwCernHoV13cxgZYmy7YOQPOxvMRElJG/9k=",blurWidth:7,blurHeight:8},l=n(7294);function s(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,l)}s((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function f(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function h(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];return s(this,void 0,void 0,function(){var o,a,l,h,g;return c(this,function(m){switch(m.label){case 0:m.trys.push([0,12,13,14]),a=(o=u(i)).next(),m.label=1;case 1:if(a.done)return[3,11];switch(typeof(l=a.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,n,r,i){return s(this,void 0,void 0,function(){var o;return c(this,function(a){switch(a.label){case 0:var l,h;return l=e.textContent,h=d(t).slice(0),o=f(f([],d(l),!1),[NaN],!1).findIndex(function(e,t){return h[t]!==e}),[4,function(e,t,n,r,i){return s(this,void 0,void 0,function(){var o,a,l,s,d,f,h,g,m,v,A;return c(this,function(w){switch(w.label){case 0:if(o=t,i){for(a=0,l=1;l<t.length;l++)if(s=t[l-1],(d=t[l]).length>s.length||""===d){a=l;break}o=t.slice(a,t.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),h=(f=u(function(e){var t,n,r,i,o;return c(this,function(a){switch(a.label){case 0:t=function(e){return c(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},a.label=1;case 1:a.trys.push([1,6,7,8]),r=(n=u(e)).next(),a.label=2;case 2:return r.done?[3,5]:[5,t(r.value)];case 3:a.sent(),a.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return i={error:a.sent()},[3,8];case 7:try{r&&!r.done&&(o=n.return)&&o.call(n)}finally{if(i)throw i.error}return[7];case 8:return[2]}})}(o))).next(),w.label=2;case 2:return h.done?[3,5]:(m="WRITING"===(g=h.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(e),[4,p(m)]);case 3:w.sent(),w.label=4;case 4:return h=f.next(),[3,2];case 5:return[3,8];case 6:return v={error:w.sent()},[3,8];case 7:try{h&&!h.done&&(A=f.return)&&A.call(f)}finally{if(v)throw v.error}return[7];case 8:return[2]}})})}(e,f(f([],d(function(e,t,n){var r=d(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),c(this,function(e){switch(e.label){case 0:return n>t?[4,r.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(e.textContent,o)),!1),d(function(e,t,n){var r=d(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),c(this,function(e){switch(e.label){case 0:return t<n?[4,r.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(t,o)),!1),n,r,i)];case 1:return a.sent(),[2]}})})}(e,l,t,n,r)];case 3:case 5:case 7:return m.sent(),[3,10];case 4:return[4,p(l)];case 6:return[4,l.apply(void 0,f([e,t,n,r],d(i),!1))];case 8:return[4,l];case 9:m.sent(),m.label=10;case 10:return a=o.next(),[3,1];case 11:return[3,14];case 12:return h={error:m.sent()},[3,14];case 13:try{a&&!a.done&&(g=o.return)&&g.call(o)}finally{if(h)throw h.error}return[7];case 14:return[2]}})})}function p(e){return s(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var g=(0,l.memo)(function(e){var t=e.sequence,n=e.repeat,r=e.className,i=e.speed,o=void 0===i?40:i,a=e.deletionSpeed,s=e.omitDeletionAnimation,c=void 0!==s&&s,u=e.wrapper,p=e.cursor,g=void 0===p||p,m=e.style;o=Math.abs(o-100),a=a?Math.abs(a-100):o;var v,A,w,y,b,x,C=(0,l.useRef)(null),E="index-module_type__E-SaG";return v=r&&r.length>0?g?"".concat(E," ").concat(r):r:g?E:"",A=(0,l.useRef)(function(){return n===1/0?h.apply(void 0,f(f([C.current,o,a,c],d(t),!1),[h],!1)):"number"==typeof n?h.apply(void 0,f([C.current,o,a,c],d(Array(1+n).fill(t).flat()),!1)):h.apply(void 0,f([C.current,o,a,c],d(t),!1)),function(){C.current}}),w=(0,l.useRef)(),y=(0,l.useRef)(!1),b=(0,l.useRef)(!1),x=d((0,l.useState)(0),2)[1],y.current&&(b.current=!0),(0,l.useEffect)(function(){return y.current||(w.current=A.current(),y.current=!0),x(function(e){return e+1}),function(){b.current&&w.current&&w.current()}},[]),l.createElement(void 0===u?"div":u,{style:m,className:v,ref:C})},function(e,t){return!0});function m(){return(0,r.jsx)(g,{sequence:["I'm",800,"I'm Felix",800,"I'm Felix Liawi",800,"   "],wrapper:"div",cursor:!0,repeat:1/0})}function v(){return(0,r.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{clipPath:"url(#clip0_9914_10)",children:(0,r.jsx)("path",{d:"M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z",fill:"currentColor"})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_9914_10",children:(0,r.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})}function A(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}var w=n(9008),y=n.n(w);function b(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y(),{children:(0,r.jsx)("title",{children:"Felix Liawi"})}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("h1",{className:"font-bold text-3xl font-serif flex",children:["Hi!",(0,r.jsx)("span",{className:"ml-1",children:(0,r.jsx)(m,{})})]}),(0,r.jsxs)("div",{className:"flex items-start my-8 md:items-center flex-col md:flex-row",children:[(0,r.jsx)(o(),{className:"rounded-full",alt:"avatar",src:a,width:100}),(0,r.jsxs)("div",{className:"ml-0 md:ml-6",children:[(0,r.jsx)("p",{children:"Indonesian currently living in Taiwan"}),(0,r.jsx)("p",{children:"Master student at National Taiwan University"}),(0,r.jsx)("p",{children:"Full stack developer"}),(0,r.jsx)("p",{children:"AI engineer to be \uD83D\uDE80️"})]})]}),(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/liawifelix",children:(0,r.jsx)(v,{})}),(0,r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/felixliawi",className:"ml-2",children:(0,r.jsx)(A,{})})]})]})]})}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);