"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[678],{3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return E},P:function(){return w},S:function(){return P},_:function(){return l},a:function(){return i},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,g);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:s().object.isRequired,alt:C},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],k=new Set;let N,T;const _=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=l(e,L);const{width:f,height:y,layout:b}=n,v=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:w,className:E}=v,C=l(v,S),x=(0,r.useRef)(),_=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{N||(N=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(_);if(T&&k.has(_))return;let t,r;return N.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:k.has(_),image:n},h)),k.has(_)||(t=requestAnimationFrame((()=>{x.current&&(r=l(x.current,_,k,s,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{k.has(_)&&T&&(x.current.innerHTML=T(i({isLoading:k.has(_),isLoaded:k.has(_),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},C,{style:i({},w,s,{backgroundColor:c}),className:E+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));I.propTypes=x,I.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),A={src:s().string.isRequired,alt:C,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(U=I,function(e){let{src:t,__imageData:a,__error:n}=e,s=l(e,O);return n&&console.warn(n),a?r.createElement(U,i({image:a},s)):(console.warn("Image not loaded",t),null)});var U;P.displayName="StaticImage",P.propTypes=A},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3018:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return d}});var r=a(7294),n="navbar-module--active--7abd8",s=a(3723),i=a(1883);var l=e=>{let{children:t,text:a,type:n,className:s}=e;return r.createElement("button",{className:"btn typo-btn-small btn-"+n+" "+s},r.createElement("span",null,a)," ",t)};var o=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("nav",{className:"navbar-module--nav--91dd5"},r.createElement("div",{className:"container flex-a-c navbar-module--nav-wrapper--07dd1"},r.createElement("div",{className:"navbar-module--logo--a4da1"},r.createElement(s.S,{src:"../../images/nav/logo.png",alt:"Cloudzy logo",__imageData:a(2763)})),r.createElement("button",{className:"hide-laptop-up",onClick:()=>t(!e)},r.createElement("div",{className:"navbar-module--menu-button--ddeaa "+(e&&n)})),r.createElement("div",{className:"flex-a-c w-100  navbar-module--navbar-items--7e7fc "+(e?n:"")},r.createElement("ul",{className:"flex grow-1 flex-a-c navbar-module--nav-list--40a68"},r.createElement("li",null,r.createElement(i.rU,{to:"/vps"},"VPS")),r.createElement("li",null,r.createElement(i.rU,{to:"/cloud"},"Cloud")),r.createElement("li",null,r.createElement(i.rU,{to:"#pricing"},"Pricing")),r.createElement("li",null,r.createElement(i.rU,{to:"/blog"},"Blog")),r.createElement("li",null,r.createElement(i.rU,{to:"/about-us"},"About Us"))),r.createElement(l,{className:"text--white navbar-module--sign-in-btn--555d6",text:"SIGN IN",type:"primary"}))))};function c(e){let{children:t}=e;return console.log("test"),r.createElement("div",{className:"w-100"},r.createElement(o,null),t)}var d=()=>r.createElement(c,null);const u=()=>r.createElement("title",null,"Home Page")},2763:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/80dab7b22c499657863b45753f8b62dd/46082/logo.png","srcSet":"/cloudzy/static/80dab7b22c499657863b45753f8b62dd/46082/logo.png 185w","sizes":"(min-width: 185px) 185px, 100vw"},"sources":[{"srcSet":"/cloudzy/static/80dab7b22c499657863b45753f8b62dd/c3b68/logo.webp 185w","type":"image/webp","sizes":"(min-width: 185px) 185px, 100vw"}]},"width":185,"height":49}')}}]);
//# sourceMappingURL=component---src-pages-index-js-d9fdfc41b89c5eaae19c.js.map