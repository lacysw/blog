"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7164:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},u="Introduction",l={unversionedId:"extended-tutorials/how-i-made-this-website/introduction",id:"extended-tutorials/how-i-made-this-website/introduction",title:"Introduction",description:"This tutorial aims to serve as an introduction to hosting a simple personal website using a static site generator (because apparently there aren\u2019t enough of those already). If you like how this website appears and performs, keep reading \u2013 all of the steps I followed, from setting up a development environment and registering a domain to pushing my build to Firebase (my web host) are documented in the following few pages.",source:"@site/docs/extended-tutorials/how-i-made-this-website/introduction.md",sourceDirName:"extended-tutorials/how-i-made-this-website",slug:"/extended-tutorials/how-i-made-this-website/introduction",permalink:"/docs/extended-tutorials/how-i-made-this-website/introduction",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Linux Security Report",permalink:"/docs/automation/linux/basic-linux-security-report"},next:{title:"Setting Up Your Development Environment",permalink:"/docs/extended-tutorials/how-i-made-this-website/dev-env"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This tutorial aims to serve as an introduction to hosting a simple personal website using a static site generator (",(0,r.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/static-site-generators/"},"because")," ",(0,r.kt)("a",{parentName:"p",href:"https://theunlikelydeveloper.com/build-a-static-website/"},"apparently")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6ElI2ZJ4Uro"},"there")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Qms4k6y7OgI"},"aren\u2019t")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pY0vWYLDDco"},"enough")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.makeuseof.com/tag/static-site-generator-build-website/"},"of")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.prosvetova.com/blog/2020-09-28-how-i-set-up-my-blog-using-a-static-site-generator"},"those")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pxua_1vyFck"},"already"),"). If you like how this website appears and performs, keep reading \u2013 all of the steps I followed, from setting up a development environment and registering a domain to pushing my build to Firebase (my web host) are documented in the following few pages."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note that this tutorial is aimed at beginners to intermediate computer users"),". I'll be reviewing the steps to build a website using ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),", ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ubuntu.com/"},"Ubuntu")," as a build environment; ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," as editing and version control environments; and ",(0,r.kt)("a",{parentName:"p",href:"https://domains.google/"},"Google Domains")," and ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase")," as a domain management/DNS and web host, respectively, from ",(0,r.kt)("em",{parentName:"p"},"beginning to end"),". I respect your time, and if you are already familiar with some or all of these technologies, I recommend you either navigate directly to the sections that interest you via the sidebar or consider using a more concise guide."),(0,r.kt)("p",null,"If you made it to this point, I'm sure you have some questions... I'll try to answer some of them preemptively."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You decided to use <technology",">","; why?")," I am using..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docusaurus (plus Node.js), because of its simplicity. Assuming a fresh development environment, one only has to install Node.js and run three short commands to go from nothing to a fully functional, locally-hosted website prepared for editing. ",(0,r.kt)("em",{parentName:"li"},"No, I do not work for Facebook (the maintainers of Docusaurus). I simply like their SSG.")),(0,r.kt)("li",{parentName:"ul"},"Ubuntu Server, because it is beginner-friendly and well-maintained. You can follow most of this guide running any system that can run Node.js version 14+ and has network connectivity, including Windows and MacOS."),(0,r.kt)("li",{parentName:"ul"},"VSCode, because I am familiar with it and I appriciate its extension marketplace. You could complete this tutorial using any IDE or text editor you fancy. You could even redirect all of the JavaScript/Markdown/HTML edits you need using string redirects via the CLI, but I am not liable for any mental health-related damages you may incur by doing so."),(0,r.kt)("li",{parentName:"ul"},"GitHub is not necessary but I recommend using it because it keeps your files safe and makes it easy to roll back to old versions of your code in case something breaks."),(0,r.kt)("li",{parentName:"ul"},"Firebase, because its ",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/pricing"},(0,r.kt)("em",{parentName:"a"},"Spark")," Plan")," is free and it has great integration with Google Domains, which I use because it is simple and cheap to set up... More on these two later.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How much does this cost?")," $12.00 USD per year as a US resident, as of December 2021, the time of this publication. You can also add an email address through Google Domains, which is covered later, for an additional $6.00 USD per month. Note that the pricing scheme may have changed since I uploaded this post, unbeknownst to me. if this is the case, please feel free to let me know by ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@swlacy.com?subject=Google%20Domains/Firebase%20Pricing%20Has%20Changed%20(/website-hosting/introduction)"},"emailing me")," \u2014 your support is greatly appreciated. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why shouldn't I use Hugo/Gatsby/Jekyll/etc. for my website instead of Docusaurus, like most others? Isn't Docusaurus meant for collaborative work?")," You can \u2014 these are all great frameworks. I simply prefer how Docusaurus works; further, it's easy to adapt into a blog-like format. It doesn't have to be used solely for documentation."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Thanks for sticking with me \u2014 let's get to work.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"mailto:contact@swlacy.com?subject=Suggestion%20Regarding%20docs/website-hosting/introduction"},"Suggest an improvement")))}m.isMDXComponent=!0}}]);