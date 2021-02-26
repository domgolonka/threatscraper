(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(3),c=t(7),a=(t(0),t(94)),p={id:"rest",title:"Rest",sidebar_label:"Rest",slug:"/rest"},o={unversionedId:"rest",id:"rest",isDocsHomePage:!1,title:"Rest",description:"REST API",source:"@site/docs/rest.md",slug:"/rest",permalink:"/docs/rest",editUrl:"https://github.com/domgolonka/threatdefender-docs/blob/main/docs/docs/rest.md",version:"current",sidebar_label:"Rest",sidebar:"someSidebar",previous:{title:"Email Score",permalink:"/docs/score_email"},next:{title:"Grpc",permalink:"/docs/grpc"}},i=[{value:"REST API",id:"rest-api",children:[{value:"Rate Limiting",id:"rate-limiting",children:[]}]}],l={toc:i};function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"rest-api"},"REST API"),Object(a.b)("p",null,"The REST API to the example app is described below."),Object(a.b)("h3",{id:"rate-limiting"},"Rate Limiting"),Object(a.b)("p",null,"You can enable the rate limiter for REST API in the ",Object(a.b)("inlineCode",{parentName:"p"},"config.yml")," file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ratelimit:\n  enabled: true\n  max: 20 \n  expiration: 30 \n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Max")," number of recent connections during ",Object(a.b)("inlineCode",{parentName:"p"},"Duration")," seconds before sending a 429 response"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Expiration")," is the time on how long to keep records of requests in memory per minute"),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /health")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/health\n")),Object(a.b)("h4",{id:"response"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:56:45 GMT\nContent-Type: application/json\nContent-Length: 13\n\n{"http":true}\n')),Object(a.b)("h4",{id:"request-1"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/ip/proxy")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/proxy\n")),Object(a.b)("h4",{id:"response-1"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Fri, 12 Feb 2021 03:21:38 GMT\nTransfer-Encoding: chunked\n\n[\n    {\n        "ip": "185.34.22.225",\n        "port": "37879",\n        "type": "http"\n    },\n    ....\n')),Object(a.b)("h4",{id:"request-2"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/ip/spam")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/spam\n")),Object(a.b)("h4",{id:"response-2"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:57:33 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: 34952\n\n168.0.xxx.0/22\n202.49.xxx.0/24\n")),Object(a.b)("h4",{id:"request-3"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/ip/vpn")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/vpn\n")),Object(a.b)("h4",{id:"response-3"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Fri, 12 Feb 2021 03:29:54 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\n\nyul-c14.xxx.com\nlim-c04.xxx.com\nbhx-c05.xxx.com\n")),Object(a.b)("h4",{id:"request-4"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/ip/tor")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/ip/tor\n")),Object(a.b)("h4",{id:"response-4"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:58:18 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: 23253\n\n176.10.xxx.xxx\n54.37.xxx.xxx\n109.70.xxx.xxx\n")),Object(a.b)("h4",{id:"request-5"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/email/disposal")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/email/disposal\n")),Object(a.b)("h4",{id:"response-5"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:58:18 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: xxx\n\nxxx.cc\nxxx.com\nxxx.ca\n")),Object(a.b)("h4",{id:"request-6"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/email/generic")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/email/generic\n")),Object(a.b)("h4",{id:"response-6"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:59:38 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: xxxx\n\nxxx@\nxxx@\nxxx@\n")),Object(a.b)("h4",{id:"request-7"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/email/spam")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/email/spam\n")),Object(a.b)("h4",{id:"response-7"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:59:38 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: xxxx\n\nxxx.cc\nxxx.com\nxxx.ca\n")),Object(a.b)("h4",{id:"request-8"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /list/email/free")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/list/email/free\n")),Object(a.b)("h4",{id:"response-8"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Thu, 18 Feb 2021 04:59:38 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: xxxx\n\nxxx.cc\nxxx.com\nxxx.ca\n")),Object(a.b)("h4",{id:"request-9"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /score/email/youremail@gmail.com")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/score/email/youremail@gmail.com\n")),Object(a.b)("h4",{id:"response-9"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Fri, 12 Feb 2021 03:29:54 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\n\n10\n")),Object(a.b)("h4",{id:"request-10"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /score/ip/127.0.0.1")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/score/ip/127.0.0.1\n")),Object(a.b)("h4",{id:"response-10"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Fri, 12 Feb 2021 03:29:54 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\n\n0\n")),Object(a.b)("h4",{id:"request-11"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /validate/email/youremail@gmail.com")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/validate/email/youremail@gmail.com\n")),Object(a.b)("h4",{id:"response-11"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Fri, 12 Feb 2021 03:29:54 GMT\nContent-Type: text/json; charset=utf-8\nTransfer-Encoding: chunked\n\n{\n"valid": true\n}\n')),Object(a.b)("h4",{id:"request-12"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /email/youremail@gmail.com")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/email/youremail@gmail.com\n")),Object(a.b)("h4",{id:"response-12"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Fri, 12 Feb 2021 03:29:54 GMT\nContent-Type: text/json; charset=utf-8\nTransfer-Encoding: chunked\n\n{\n"valid": true,\n"disposable": false,\n"recent_spam": false,\n"free": false,\n"leaked": false,\n"generic": false,\n"score": 0,\n"domain": {\n    "created_at": "1995-08-13T04:00:00Z",\n    "expiration_date": "2021-08-12T04:00:00Z"\n    }\n}\n')),Object(a.b)("h4",{id:"request-13"},"Request"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET /ip/127.0.0.1")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"curl -i -H 'Accept: application/json' http://localhost:8080/ip/127.0.0.1\n")),Object(a.b)("h4",{id:"response-13"},"Response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Fri, 12 Feb 2021 03:29:54 GMT\nContent-Type: text/json; charset=utf-8\nTransfer-Encoding: chunked\n\n{\n"success": false,\n"proxy": false,\n"ISP": "",\n"organization": "",\n"ASN": 0,\n"host": "",\n"country_code": "",\n"city": "",\n"region": "",\n"is_crawler": false,\n"connection_type": "",\n"latitude": 0,\n"longitude": 0,\n"timezone": "",\n"vpn": false,\n"tor": false,\n"recent_abuse": false,\n"abuse_velocity": "",\n"bot_status": false,\n"mobile": false,\n"score": 0,\n"operating_system": "",\n"browser": "",\n"device_model": "",\n"device_brand": ""\n}\n')))}b.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),b=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=b(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,O=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return t?c.a.createElement(O,o(o({ref:n},l),{},{components:t})):c.a.createElement(O,o({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<a;l++)p[l]=t[l];return c.a.createElement.apply(null,p)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);