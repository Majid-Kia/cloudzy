"use strict";(self.webpackChunkgatsby_starter_minimal=self.webpackChunkgatsby_starter_minimal||[]).push([[678],{3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return x},P:function(){return b},S:function(){return A},_:function(){return c},a:function(){return n},b:function(){return i},g:function(){return m},h:function(){return o}});var r=a(7294),s=(a(2369),a(5697)),l=a.n(s);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(s[a]=e[a]);return s}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function i(e,t,a,r,s){return void 0===s&&(s={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},s,{opacity:t?1:0})})}function m(e,t,a,r,s,l,c,o){const i={};l&&(i.backgroundColor=l,"fixed"===a?(i.width=r,i.height=s,i.backgroundColor=l,i.position="relative"):("constrained"===a||"fullWidth"===a)&&(i.position="absolute",i.top=0,i.left=0,i.bottom=0,i.right=0)),c&&(i.objectFit=c),o&&(i.objectPosition=o);const m=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},i)});return m}const d=["children"],u=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+s+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=c(e,d);return r.createElement(r.Fragment,null,r.createElement(u,n({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:l="",shouldLoad:o}=e,i=c(e,g);return r.createElement("img",n({},i,{decoding:"async",loading:s,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,l=c(e,h);const o=l.sizes||(null==t?void 0:t.sizes),i=r.createElement(y,n({},l,t,{sizes:o,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),i):i};var E;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},f.displayName="Picture",f.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const w=["fallback"],b=function(e){let{fallback:t}=e,a=c(e,w);return t?r.createElement(f,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};b.displayName="Placeholder",b.propTypes={fallback:s.string,sources:null==(E=f.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(f,n({},e)),r.createElement("noscript",null,r.createElement(f,n({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=f.propTypes;const v=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),n=3;n<r;n++)s[n-3]=arguments[n];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:l().object.isRequired,alt:v},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],L=new Set;let z,k;const _=function(e){let{as:t="div",image:s,style:l,backgroundColor:i,className:m,class:d,onStartLoad:u,onLoad:p,onError:g}=e,h=c(e,C);const{width:y,height:f,layout:E}=s,w=function(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}(y,f,E),{style:b,className:x}=w,v=c(w,S),N=(0,r.useRef)(),_=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);d&&(m=d);const P=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,y,f);return(0,r.useEffect)((()=>{z||(z=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(_);if(k&&L.has(_))return;let t,r;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;N.current&&(N.current.innerHTML=a(n({isLoading:!0,isLoaded:L.has(_),image:s},h)),L.has(_)||(t=requestAnimationFrame((()=>{N.current&&(r=c(N.current,_,L,l,u,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{L.has(_)&&k&&(N.current.innerHTML=k(n({isLoading:L.has(_),isLoaded:L.has(_),image:s},h)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[s]),(0,r.createElement)(t,n({},v,{style:n({},b,l,{backgroundColor:i}),className:x+(m?" "+m:""),ref:N,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));P.propTypes=N,P.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},T=new Set(["fixed","fullWidth","constrained"]),D={src:l().string.isRequired,alt:v,width:F,height:F,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!T.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(B=P,function(e){let{src:t,__imageData:a,__error:s}=e,l=c(e,O);return s&&console.warn(s),a?r.createElement(B,n({image:a},l)):(console.warn("Image not loaded",t),null)});var B;A.displayName="StaticImage",A.propTypes=D},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let s=0;s<e.length;s++){const l=e[s];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,s)+"-"+e.slice(s),t=!1,r=a,a=!0,s++):a&&r&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,s-1)+"-"+e.slice(s-1),r=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,r=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3838:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return x}});var r=a(7294);var s=e=>{let{children:t,text:a,type:s,className:l}=e;return r.createElement("button",{className:"btn  btn-"+s+" "+(l||"")},r.createElement("span",{className:(t?"mr-10":"")+" flex"},a)," ",t)},l=a(3723);var n=e=>{let{color:t}=e;return r.createElement("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M16 8.75781L14.59 7.34781L9 12.9278V0.757813L7 0.757813V12.9278L1.41 7.34781L0 8.75781L8 16.7578L16 8.75781Z",fill:t}))};var c=()=>r.createElement("div",{className:"w-100 flex flex-wrap header-module--header--72611"},r.createElement("div",{className:"header-module--header-description--3d768"},r.createElement("h1",{className:"h1"},"Cloudzy, Premium VPS Hosting Since 2008!"),r.createElement("p",{className:"mt-40 h6 text--secondary"},"High-Performance SSD VPS Servers Available at More than 15 Locations Worldwide. Get yours for as low as $7.95/month. Join 12000+ proud VPS-owners today!"),r.createElement(s,{text:"starting from $7.95",type:"primary",className:"mt-40 text--white btn-large"},r.createElement(n,{color:"#fff"}))),r.createElement("div",{className:"header-module--header-img--bf0ac flex-c"},r.createElement(l.S,{src:"../../../images/home/home-header.webp",alt:"cloudzy home",__imageData:a(6305)}),r.createElement("div",{className:"header-module--feature--21fac"},r.createElement("ul",{className:"flex"},r.createElement("li",{className:"flex"},r.createElement("span",{className:"text--primary subtitle-1 "},"12,000+"),r.createElement("span",{className:"text--primary-main body-2 "},"Happy Customers")),r.createElement("li",{className:"flex"},r.createElement("span",{className:"text--primary subtitle-1 "}," 13"),r.createElement("span",{className:"text--primary-main body-2 "}," ","Years Experience")),r.createElement("li",{className:"flex"},r.createElement("span",{className:"text--primary subtitle-1 "}," 7 Days"),r.createElement("span",{className:"text--primary-main body-2 "}," ","Money-Back Guarantee")),r.createElement("li",{className:"flex"},r.createElement("span",{className:"text--primary subtitle-1 "},"99.95% "),r.createElement("span",{className:"text--primary-main body-2 "}," Uptime")),r.createElement("li",{className:"flex"},r.createElement("span",{className:"text--primary subtitle-1 "},"24/7"),r.createElement("span",{className:"text--primary-main body-2 "},"Online Support")))))),o="navbar-module--active--7abd8",i=a(1883);var m=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("nav",{className:"navbar-module--nav--91dd5"},r.createElement("div",{className:"container flex-a-c navbar-module--nav-wrapper--07dd1"},r.createElement("div",{className:"navbar-module--logo--a4da1"},r.createElement(l.S,{src:"../../images/nav/logo.png",alt:"Cloudzy logo",__imageData:a(9135)})),r.createElement("button",{className:"hide-laptop-up",onClick:()=>t(!e)},r.createElement("div",{className:"navbar-module--menu-button--ddeaa "+(e&&o)})),r.createElement("div",{className:"flex-a-c w-100  navbar-module--navbar-items--7e7fc "+(e?o:"")},r.createElement("ul",{className:"flex grow-1 flex-a-c navbar-module--nav-list--40a68"},r.createElement("li",null,r.createElement(i.rU,{to:"/vps"},"VPS")),r.createElement("li",null,r.createElement(i.rU,{to:"/cloud"},"Cloud")),r.createElement("li",null,r.createElement(i.rU,{to:"#pricing"},"Pricing")),r.createElement("li",null,r.createElement(i.rU,{to:"/blog"},"Blog")),r.createElement("li",null,r.createElement(i.rU,{to:"/about-us"},"About Us"))),r.createElement(s,{className:"text--white btn-small navbar-module--sign-in-btn--555d6",text:"SIGN IN",type:"primary"}))))};function d(e){let{children:t}=e;return console.log("test"),r.createElement("div",{className:"w-100"},r.createElement(m,null),t)}var u=e=>{let{color:t}=e;return r.createElement("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M8.53125 0.546875L7.12125 1.95687L12.7013 7.54688H0.53125V9.54688H12.7013L7.12125 15.1369L8.53125 16.5469L16.5312 8.54688L8.53125 0.546875Z",fill:t}))},p="whyChoose-module--card-title--ee209",g="whyChoose-module--why-choose__item--41649";var h=()=>r.createElement("div",{className:"whyChoose-module--why-choose--57b18 mt-150"},r.createElement("div",{className:"container"},r.createElement("div",{className:"why-choose__title flex-a-c justify-space-between "},r.createElement("h2",{className:"h2 text--primary"},"Why Choose Us?"),r.createElement(s,{text:"join us now",type:"primary",className:"text--white btn-large"},r.createElement(u,{color:"#fff"}))),r.createElement("div",{className:"whyChoose-module--why-choose__items--db6c5 flex flex-wrap w-100"},r.createElement("div",{className:""+g},r.createElement("div",{className:p+" flex flex-a-c"},r.createElement(l.S,{src:"../../../images/home/why-choose-us/card.png",__imageData:a(6773)}),r.createElement("span",{className:"h5 text--primary"},"Affordable")),r.createElement("p",{className:"body-1 text--secondary "},"Get your hands on Cloudzy's cutting-edge technology built on top-tier infrastructure, starting at only $7.95!")),r.createElement("div",{className:""+g},r.createElement("div",{className:p+" flex flex-a-c"},r.createElement(l.S,{src:"../../../images/home/why-choose-us/server.png",__imageData:a(7234)}),r.createElement("span",{className:"h5 text--primary"},"High-Performance")),r.createElement("p",{className:"body-1 text--secondary "},"Access ultrafast SSD storage, next-generation CPU, and DDR4 RAMs to experience the highest performance possible!")),r.createElement("div",{className:""+g},r.createElement("div",{className:p+" flex flex-a-c"},r.createElement(l.S,{src:"../../../images/home/why-choose-us/lock.png",__imageData:a(9929)}),r.createElement("span",{className:"h5 text--primary"},"Safe and Secure")),r.createElement("p",{className:"body-1 text--secondary "},"Become an insider and enjoy Cloudzy's 99.95% uptime, 24/7 technical support team at your service, and DDoS protection.")),r.createElement("div",{className:""+g},r.createElement("div",{className:p+" flex flex-a-c"},r.createElement(l.S,{src:"../../../images/home/why-choose-us/bitcoin.png",__imageData:a(1162)}),r.createElement("span",{className:"h5 text--primary"},"Flexible Payment")),r.createElement("p",{className:"body-1 text--secondary "},"Pay with any payment method you want! Cloudzy welcomes Bitcoin, Ethereum, Monero, and also PayPal, Mastercard, Visa, and more.")),r.createElement("div",{className:""+g},r.createElement("div",{className:p+" flex flex-a-c"},r.createElement(l.S,{src:"../../../images/home/why-choose-us/fast.png",__imageData:a(9198)}),r.createElement("span",{className:"h5 text--primary"},"Fast Setup")),r.createElement("p",{className:"body-1 text--secondary "},"Select one of our pre-installed Linux distros, Windows versions, and applications for your VPS for a more seamless setup.")),r.createElement("div",{className:""+g},r.createElement("div",{className:p+" flex flex-a-c"},r.createElement(l.S,{src:"../../../images/home/why-choose-us/dollar.png",__imageData:a(1588)}),r.createElement("span",{className:"h5 text--primary"},"Full Refund")),r.createElement("p",{className:"body-1 text--secondary "},"We are so confident in our services that you can get your whole money back if Cloudzy did not suit your needs within 7 days of usage!")))));var y=e=>{let{color:t}=e;return r.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M8 0.0664062C3.584 0.0664062 0 3.65041 0 8.06641C0 12.4824 3.584 16.0664 8 16.0664C12.416 16.0664 16 12.4824 16 8.06641C16 3.65041 12.416 0.0664062 8 0.0664062ZM8 14.4664C4.472 14.4664 1.6 11.5944 1.6 8.06641C1.6 4.53841 4.472 1.66641 8 1.66641C11.528 1.66641 14.4 4.53841 14.4 8.06641C14.4 11.5944 11.528 14.4664 8 14.4664ZM11.104 5.09841L6.4 9.80241L4.896 8.29841C4.584 7.98641 4.08 7.98641 3.768 8.29841C3.456 8.61041 3.456 9.11441 3.768 9.42641L5.84 11.4984C6.152 11.8104 6.656 11.8104 6.968 11.4984L12.24 6.22641C12.552 5.91441 12.552 5.41041 12.24 5.09841C11.928 4.78641 11.416 4.78641 11.104 5.09841Z",fill:t}))};var f=()=>r.createElement("div",{className:"flex flex-wrap nowCloud-module--nowCloud--58e7c"},r.createElement("div",{className:"w-100 nowCloud-module--now-title--eddc9 flex-j-c"},r.createElement("h2",{className:"h2 text--primary"},"Now Cloud!")),r.createElement("div",{className:"nowCloud-module--now-img--5c1ce"},r.createElement(l.S,{src:"../../../images/home/now-cloud/now-cloud.png",width:900,height:550,__imageData:a(8760)})),r.createElement("div",{className:"nowCloud-module--now-description--b15b7"},r.createElement("p",{className:"body-1 text--secondary"},"We are proud to say that Cloudzy is now beyond the cloud! Launching our new special product, The Cloud, we guarantee you a seamless experience. Be the first to use Cloudzy's Cloud servers and power up your game. Cloud's live migration skyrockets your uptime. With fast deployment and resizability (easier upgrade and downgrade), you will enjoy your journey even more. If you are already using Cloudzy VPS, don't worry. We've got your back! Cloud has a lot in common with VPS."),r.createElement("div",{className:"flex nowCloud-module--features--78bbc"},r.createElement("ul",null,r.createElement("li",{className:"flex-a-c"},r.createElement(y,{color:"#FF7F5C"}),r.createElement("span",{className:"subtitle-2"},"High-Performance CPU")),r.createElement("li",{className:"flex-a-c"},r.createElement(y,{color:"#FF7F5C"}),r.createElement("span",{className:"subtitle-2"},"Pay As You Go")),r.createElement("li",{className:"flex-a-c"},r.createElement(y,{color:"#FF7F5C"}),r.createElement("span",{className:"subtitle-2"},"Better Storage Plans")),r.createElement("li",{className:"flex-a-c"},r.createElement(y,{color:"#FF7F5C"}),r.createElement("span",{className:"subtitle-2"},"User-Friendly Control Panel")),r.createElement("li",{className:"flex-a-c"},r.createElement(y,{color:"#FF7F5C"}),r.createElement("span",{className:"subtitle-2"},"Affordable Price"))),r.createElement(s,{text:"explore cloud",type:"secondary",className:"text--white btn-large"}))));var E=e=>{let{color:t}=e;return r.createElement("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M3.80142 8C3.49721 8 3.20908 7.88399 3.02445 7.68397L0.52569 4.986C0.448435 4.90268 0.392035 4.80774 0.359712 4.70659C0.32739 4.60545 0.319779 4.50009 0.337315 4.39654C0.354852 4.29299 0.397191 4.19329 0.461913 4.10312C0.526635 4.01295 0.612471 3.93409 0.714513 3.87104C0.816518 3.80774 0.932809 3.7615 1.05672 3.73499C1.18063 3.70848 1.30973 3.70221 1.43661 3.71654C1.5635 3.73088 1.68567 3.76553 1.79613 3.81852C1.90659 3.87151 2.00317 3.9418 2.08033 4.02534L3.72449 5.79922L7.85832 0.374717C7.99542 0.195615 8.21384 0.0682581 8.4657 0.0205834C8.71755 -0.0270913 8.98226 0.00880839 9.20176 0.120408C9.65843 0.352429 9.799 0.843904 9.51367 1.21765L4.62944 7.62397C4.54607 7.73382 4.43114 7.82538 4.29465 7.89071C4.15815 7.95604 4.00421 7.99316 3.84618 7.99886C3.83079 8 3.81681 8 3.80142 8Z",fill:t}))};var w=e=>{let{active:t}=e;return r.createElement("div",{className:"priceCard-module--price-card--b6526 flex card "+(t?"priceCard-module--active--fffdd":"")},r.createElement("span",{className:"text--primary-main  subtitle-1"},"BASIC"),r.createElement("ul",null,r.createElement("li",{className:"flex-a-c"},r.createElement(E,{color:t?"#fff":"#04184B"}),r.createElement("span",{className:"text--primary body-1"}," 2 CPU"),r.createElement("span",{className:"body-2 text--secondary"}," Cores")),r.createElement("li",{className:"flex-a-c"},r.createElement(E,{color:t?"#fff":"#04184B"}),r.createElement("span",{className:"text--primary body-1"}," 2 GB "),r.createElement("span",{className:"body-2 text--secondary"}," Memory")),r.createElement("li",{className:"flex-a-c"},r.createElement(E,{color:t?"#fff":"#04184B"}),r.createElement("span",{className:"text--primary body-1"}," 30 GB "),r.createElement("span",{className:"body-2 text--secondary"}," NVME/SSD Storage")),r.createElement("li",{className:"flex-a-c"},r.createElement(E,{color:t?"#fff":"#04184B"}),r.createElement("span",{className:"text--primary body-1"}," 3 TB "),r.createElement("span",{className:"body-2 text--secondary"}," Bandwidth")),r.createElement("li",{className:"flex-a-c"},r.createElement(E,{color:t?"#fff":"#04184B"}),r.createElement("span",{className:"text--primary body-1"}," 1 GBPS "),r.createElement("span",{className:"body-2 text--secondary"}," Connection"))),r.createElement("hr",null),r.createElement("div",{className:"priceCard-module--price-info--59630"},r.createElement("div",{className:"flex-a-c justify-space-between"},r.createElement("div",{className:"semi-bold  text--primary "},r.createElement("span",{className:"h5"},"$"),"7.95 ",r.createElement("span",{className:"h5 text--grey-400"},"/m")),r.createElement(l.S,{src:"../../../../images/home/price-cards/windows.png",width:42,__imageData:a(1151)})),r.createElement("div",{className:"mt-8 body-2 text--grey-400"},"or"," ",r.createElement("span",{className:"subtitle-2 text--secondary"},"$9.95",r.createElement("span",{className:"text--grey-400"},"/m"))," ","billed monthly")),r.createElement(s,{className:"priceCard-module--get-btn--2163e btn-large text--white",text:"get started",type:t?"secondary":"primary-outline"}))};var b=()=>{const{0:e,1:t}=(0,r.useState)("windows");return r.createElement("section",{className:"priceCards-module--price--9fd1e flex-a-c flex-column "},r.createElement("p",{className:"text--secondary body-2"},"No Hidden Fees - No Contract."),r.createElement("div",{className:"priceCards-module--tabs--b5ba7"},["windows","linux"].map((a=>r.createElement("button",{onClick:()=>t(a),className:a===e?"priceCards-module--active--09474":""},a)))),r.createElement("div",{className:"priceCards-module--price-cards--31623 flex flex-wrap w-100"},r.createElement(w,null),r.createElement(w,null),r.createElement(w,{active:!0}),r.createElement(w,null)))};var x=()=>r.createElement(d,null,r.createElement("div",{className:"container"},r.createElement(c,null),r.createElement(b,null)),r.createElement(h,null),r.createElement("div",{className:"container"},r.createElement(f,null)));const v=()=>r.createElement("title",null,"Home Page")},8760:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/4993ca2487a09beb1f22f645b75d7564/368e6/now-cloud.png","srcSet":"/cloudzy/static/4993ca2487a09beb1f22f645b75d7564/30342/now-cloud.png 600w,\\n/cloudzy/static/4993ca2487a09beb1f22f645b75d7564/368e6/now-cloud.png 701w","sizes":"(min-width: 701px) 701px, 100vw"},"sources":[]},"width":900,"height":549.5007132667617}')},9929:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/7a88dc8549789b0794faccd6f525c5d0/07735/lock.png","srcSet":"/cloudzy/static/7a88dc8549789b0794faccd6f525c5d0/07735/lock.png 57w","sizes":"(min-width: 57px) 57px, 100vw"},"sources":[]},"width":57,"height":57}')},7234:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/bc84a679e3de4b94a82cb88a59c9f272/07735/server.png","srcSet":"/cloudzy/static/bc84a679e3de4b94a82cb88a59c9f272/07735/server.png 57w","sizes":"(min-width: 57px) 57px, 100vw"},"sources":[]},"width":57,"height":57}')},6305:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/7eca5eeb416438bde83dced23079983f/791c9/home-header.webp","srcSet":"/cloudzy/static/7eca5eeb416438bde83dced23079983f/791c9/home-header.webp 570w","sizes":"(min-width: 570px) 570px, 100vw"},"sources":[]},"width":570,"height":570}')},1151:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/7c753b6993258038c8ee80f9cd91ed76/73d84/windows.png","srcSet":"/cloudzy/static/7c753b6993258038c8ee80f9cd91ed76/73d84/windows.png 42w,\\n/cloudzy/static/7c753b6993258038c8ee80f9cd91ed76/50036/windows.png 43w","sizes":"(min-width: 42px) 42px, 100vw"},"sources":[]},"width":42,"height":41}')},9135:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/80dab7b22c499657863b45753f8b62dd/46082/logo.png","srcSet":"/cloudzy/static/80dab7b22c499657863b45753f8b62dd/46082/logo.png 185w","sizes":"(min-width: 185px) 185px, 100vw"},"sources":[]},"width":185,"height":49}')},1588:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/3076f74cd488fc00176f08d352018383/07735/dollar.png","srcSet":"/cloudzy/static/3076f74cd488fc00176f08d352018383/07735/dollar.png 57w","sizes":"(min-width: 57px) 57px, 100vw"},"sources":[]},"width":57,"height":57}')},9198:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/c5fd69f7ed4eea921564b060c41a9346/07735/fast.png","srcSet":"/cloudzy/static/c5fd69f7ed4eea921564b060c41a9346/07735/fast.png 57w","sizes":"(min-width: 57px) 57px, 100vw"},"sources":[]},"width":57,"height":57}')},6773:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/486ced6f1d903d4a28aacb376d1605aa/07735/card.png","srcSet":"/cloudzy/static/486ced6f1d903d4a28aacb376d1605aa/07735/card.png 57w","sizes":"(min-width: 57px) 57px, 100vw"},"sources":[]},"width":57,"height":57}')},1162:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/cloudzy/static/0844b4686ecc4962ed32934ea979a26c/07735/bitcoin.png","srcSet":"/cloudzy/static/0844b4686ecc4962ed32934ea979a26c/07735/bitcoin.png 57w","sizes":"(min-width: 57px) 57px, 100vw"},"sources":[]},"width":57,"height":57}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c2bf4d928a74e31a6c03.js.map