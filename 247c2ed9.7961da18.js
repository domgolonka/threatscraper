(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),a=(r(0),r(94)),c={id:"score",title:"Score",sidebar_label:"Score",slug:"/score"},i={unversionedId:"score",id:"score",isDocsHomePage:!1,title:"Score",description:"Score",source:"@site/docs/score.md",slug:"/score",permalink:"/docs/score",editUrl:"https://github.com/domgolonka/foretoken-docs/blob/main/docs/docs/score.md",version:"current",sidebar_label:"Score",sidebar:"someSidebar",previous:{title:"Database",permalink:"/docs/database"},next:{title:"Source",permalink:"/docs/source"}},s=[{value:"Score",id:"score",children:[]}],l={toc:s};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"score"},"Score"),Object(a.b)("p",null,"The overall Fraud Score of the email and IP's reputation and recent behavior across the threat network.\nYou can set your own fraud score in the ",Object(a.b)("inlineCode",{parentName:"p"},"config.yml")," file. "),Object(a.b)("p",null,"There are two scores to consider; email, and ip. The score range is from 0 to 100.\nAnything over 100 will be set to 100. "),Object(a.b)("p",null,"You can set a score to an integer for a specific check.\nFor example, if an email/domain is found in the disposable list, 20 will be added to the score (below).\nIf not found, 10 will be taken away."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"email:\n  score:\n    disposable:\n      yes: 20\n      no: -10\n    free:\n      yes: 20\n      no: 0\n    spam:\n      yes: 30\n      no: 0\n    valid:\n      yes: 0\n      no: 40\n    generic:\n      yes: 12\n      no: 0\n    catchall:\n      yes: 10\n      no: 0\n    domain: # domain age\n      week: 30  # younger than one week\n      month: 20 # younger than one month\n      year: 10 # younger than one year\n      yearplus: -10 # older than 1 years\nip:\n  score:\n    proxy:\n      yes: 40\n      no: 0\n    spam:\n      yes: 40\n      no: 0\n    tor:\n      yes: 20\n      no: 0\n    vpn:\n      yes: 15\n      no: 0\n")))}u.isMDXComponent=!0},94:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=t,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,i(i({ref:n},l),{},{components:r})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);