(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(143),c=a(149);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(142),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(25);a.d(t,"waitForRouteChange",function(){return o.c});var u=a(144),m=a.n(u);a.d(t,"PageRenderer",function(){return m.a});var d=a(35);a.d(t,"parsePath",function(){return d.a});var h=r.a.createContext({}),f=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Cristiano Dalbem Portfolio"}}}}},146:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(50),l=a(1),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},147:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),c=a(4),s=a.n(c),l=a(150),o=a.n(l),u=a(143),m=function(){return i.a.createElement("div",{className:"mb2"},i.a.createElement("div",{className:"mh4-m mh6-ns mh2 pv4 flex justify-between items-center"},i.a.createElement("h1",{className:"f4 fw5"},i.a.createElement(u.Link,{to:"/",className:"link near-black fw5"},"Cristiano Dalbem")),i.a.createElement("div",{className:"f7"},i.a.createElement("a",{href:"#about",className:"link gray mh4 ttu fw5"},"About"),i.a.createElement("a",{href:"#currently",className:"link gray mh4 ttu fw5"},"Currently"),i.a.createElement("a",{href:"#elsewhere",className:"link gray mh4 ttu fw5"},"Elsewhere"))))},d=(a(147),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"})),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"mh4-m mh6-ns mh2 mb6"},t),i.a.createElement("div",{className:"bg-near-white pv6 f7 silver ph4-m ph6-ns ph2"},"designed with Figma, developed with Tachyons and delivered in less than 100kb."))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-page-2-js-fd2cfd915d46bd649d12.js.map