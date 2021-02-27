(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(94)),i={id:"start",title:"Start",sidebar_label:"Start",slug:"/start"},c={unversionedId:"start",id:"start",isDocsHomePage:!1,title:"Start",description:"Migrate",source:"@site/docs/start.md",slug:"/start",permalink:"/docs/start",editUrl:"https://github.com/domgolonka/threatdefender-docs/blob/main/docs/docs/start.md",version:"current",sidebar_label:"Start",sidebar:"someSidebar",previous:{title:"About",permalink:"/docs/about"},next:{title:"Config",permalink:"/docs/config"}},l=[{value:"Migrate",id:"migrate",children:[]},{value:"Edit the config",id:"edit-the-config",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Docker",id:"docker",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"migrate"},"Migrate"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"If using NON-MEMORY SQLITE or PostgreSQL, DO THIS BEFORE YOU RUN"),", You need to migrate the database:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"make migrate")),Object(a.b)("p",null,":::Memory SQLite will always migrate at every run."),Object(a.b)("h2",{id:"edit-the-config"},"Edit the config"),Object(a.b)("p",null,"You want to rename ",Object(a.b)("inlineCode",{parentName:"p"},"changeme.env")," to ",Object(a.b)("inlineCode",{parentName:"p"},".env"),", and edit the exteral APIs with your API keys."),Object(a.b)("p",null,"You can also edit the config.yml to your preference. More in the ",Object(a.b)("a",{parentName:"p",href:"/docs/config"},"config section"),"."),Object(a.b)("h2",{id:"how-to-run"},"How to run"),Object(a.b)("p",null,"To run it on your local computer:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git clone https://github.com/domgolonka/threatdefender`\ncd ./threatdefender\nmake build && ./bin/threatdefender\n")),Object(a.b)("p",null,"The default config file is ",Object(a.b)("inlineCode",{parentName:"p"},"config.yml"),". If you want to run it with a different config file (or add your own)\n."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"make build")," (make sure to build it first)"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"./bin/threatdefender --config=/PATH/TO/CONFIG")),Object(a.b)("p",null,"example:\n",Object(a.b)("inlineCode",{parentName:"p"},"./bin/threatdefender --config=./config.prod.yml")),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"If docker is installed you can build an image and run this as a container."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker build -t threatdefender .")),Object(a.b)("p",null,"Once the image is built, ThreatDefender can be invoked by running the following:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker run --rm -t threatdefender")))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(n),f=r,s=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(s,c(c({ref:t},u),{},{components:n})):o.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);