(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(78),a(55),a(215),a(53);var n=a(6),r=a.n(n),l=a(0),m=a.n(l),c=a(167),s=a.n(c),i=(a(38),a(225)),o=a.n(i),d=a(166),f=a(188),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=JSON.parse(this.props.data);return m.a.createElement("div",{className:"vw-100 nl4 nr4 mv6 pa6 bg-near-white flex flex-row justify-around"},Object.keys(e).map(function(t){return m.a.createElement("div",null,m.a.createElement("div",{className:"f1 fw1 mt0"},e[t]),m.a.createElement("div",{className:"f6 gray ttu mb0 tracked"},t))}))},t}(m.a.Component);u.defaultProps={data:{}};var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.excerpt,a=this.props.pageContext,n=a.previous,r=a.next,l=e.fields.readingTime;console.log(e);var c="f5 dark-gray lh-copy",i=new o.a({createElement:m.a.createElement,components:{h1:function(e){return m.a.createElement("h1",{className:"f1 tracked-tight fw1 dark-gray mt4 mb3 mh2 mh4-m mh7-ns"},e.children)},h2:function(e){return m.a.createElement("h2",{className:"f2 dark-gray fw8 mt5 mb4 mh2 mh4-m mh7-ns"},e.children)},h3:function(e){return m.a.createElement("h3",{className:"f3 dark-gray fw5 mt4 mb3 mh2 mh4-m mh7-ns"},e.children)},p:function(e){return m.a.createElement("p",{className:"mt0 mh2 mh4-m mh7-ns"},e.children)},blockquote:function(e){return m.a.createElement("div",{className:"mt0 ml4 mv4 f4 lh-title ",style:{textIndent:"-.5em"}},e.children)},ul:function(e){return m.a.createElement("ul",{className:"mh2 mh4-m mh7-ns"},e.children)},a:function(e){return m.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"link blue dim"},e.children)},hr:function(e){return m.a.createElement("hr",{className:"mv6 bt-0 bb b--black-10"})},figure:function(e){return m.a.createElement("figure",{className:"mv6 mh6"},e.children)},"video-container":function(e){return m.a.createElement("div",{className:"mv6 mh6 flex flex-row-ns flex-column"},e.children)},"results-banner":u}}).Compiler;return m.a.createElement(d.a,{location:this.props.location},m.a.createElement(s.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:""+e.frontmatter.title}),m.a.createElement("div",{className:"flex flex-row-ns flex-column mb4"},m.a.createElement("div",{className:"w-100"},e.frontmatter.cover?m.a.createElement("img",{className:"w-100",alt:"",src:e.frontmatter.cover.publicURL}):m.a.createElement("div",{className:"w-100 h5 pv7 bg-silver"}))),m.a.createElement("div",{className:"flex flex-row-ns flex-column mt6 mb7 "},m.a.createElement("div",{className:"w-10-ns"}),m.a.createElement("div",{className:"w-20-ns"},m.a.createElement("h1",{className:"f1 mt0 fw9 mb3 dark-gray lh-solid"},e.frontmatter.title),m.a.createElement("div",{className:"f5 gray"},m.a.createElement("div",null,e.frontmatter.date,e.frontmatter.date2&&" – "+e.frontmatter.date2))),m.a.createElement("div",{className:"w-10-ns"}),m.a.createElement("div",{className:"w-50-ns"},e.frontmatter.description&&m.a.createElement("div",{className:"f3 dark-gray lh-copy"},e.frontmatter.description),m.a.createElement("div",{className:"mv3"},e.frontmatter.tags&&m.a.createElement("div",null,e.frontmatter.tags.map(function(e){return m.a.createElement("span",{className:"br2 bg-light-gray dark-gray f6 mr2 pa1"},e)}))))),m.a.createElement("div",{className:"flex flex-column"},m.a.createElement("div",{className:c+" mh2 mh4-m mh7-ns gray"},l.text,"."),m.a.createElement("div",{className:c},i(e.htmlAst))),m.a.createElement("div",{className:"flex flex-column flex-row-ns bg-near-white mt6 nl4 nr4 pb6"},m.a.createElement("div",{className:"w-10-ns"}),m.a.createElement("div",{className:"w-80-ns"},m.a.createElement("div",{className:"w-100 tc f2 mv6"},m.a.createElement("h2",null,"Other projects")),m.a.createElement("div",{className:"flex flex-row justify-between mt4"},m.a.createElement("div",{className:"w-40-ns"},n&&m.a.createElement(f.a,{node:n})),m.a.createElement("div",{className:"w-10-ns"}),m.a.createElement("div",{className:"w-40-ns"},r&&m.a.createElement(f.a,{node:r}))))))},t}(m.a.Component);t.default=h;var p="737014107"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Cristiano Dalbem"}}}}},165:function(e,t,a){},166:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),m=a(1),c=a.n(m),s=a(167),i=a.n(s),o=a(38),d=(a(53),a(6)),f=a.n(d),u=a(174),h=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}f()(t,e);var a=t.prototype;return a.scrollToSection=function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},a.render=function(){var e,t,a=this;"undefined"!=typeof window&&(e="/"===window.location.pathname,t=new URL(window.location.href).searchParams.get("preview"));var n=["About","Work"];t&&n.push("Projects");var r=(n=n.concat(["Speaking","Elsewhere"])).map(function(e){return e.toLowerCase()});return l.a.createElement("div",{className:"flex pv4"},l.a.createElement("div",{className:"w-10-ns"}),l.a.createElement("div",{className:"w-80 flex justify-between items-center"},l.a.createElement("h1",{className:"f4 fw5"},l.a.createElement(o.Link,{to:"/",className:"link dim near-black fw6"},"Cristiano Dalbem")),l.a.createElement("div",{className:e?"f7 dn db-ns":""},e?l.a.createElement(h.a,{items:r,componentTag:"div",currentClassName:"tab--selected",offset:200},n.map(function(e){return l.a.createElement("button",{className:"ml3 ttu fw6 pointer bg-transparent outline-0 bn tab tab--unselected",onClick:function(){return a.scrollToSection(e.toLowerCase())},key:e},e)})):l.a.createElement(o.Link,{to:"/",className:"link dim near-black fw6 blue"},"← Back"))))},t}(l.a.Component),v=function(){return l.a.createElement("div",{className:"pv6 ph6 f7 silver"},"Designed with ❤ in Figma, developed with GatsbyJS, and styled with Tachyons.")},E=(a(165),function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){var a;"undefined"!=typeof window&&(a="/"===window.location.pathname);var n=" ";return n+=a?"ph4-ns ph2-m ph3 fixed-ns top-0 left-0 right-0 bg-fafafa z-1":"",l.a.createElement("div",{className:"parallax"},l.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Personal website of Cristiano Dalbem, a designer of products and systems."}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"})),l.a.createElement("div",{className:n},l.a.createElement(p,null)),l.a.createElement("div",{className:"ph4-ns ph2-m ph3 mt6-ns mt4 mb0 bb b--light-gray lh-copy"},t),l.a.createElement("div",{className:"ph4-ns ph2-m ph3 bg-near-white db-ns dn"},l.a.createElement(v,null)))},data:n})});E.propTypes={children:c.a.node.isRequired};t.a=E},188:function(e,t,a){"use strict";a(53);var n=a(6),r=a.n(n),l=a(0),m=a.n(l),c=a(38),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.node;return m.a.createElement(c.Link,{className:"b--light-gray ba bg-white br1 db near-black overflow-hidden card-shadow",to:e.fields.slug},m.a.createElement("div",{className:"w-100 db card-cover-height pv5 cover bg-gray",style:e.frontmatter.cover&&{backgroundImage:"url("+e.frontmatter.cover.publicURL+")",backgroundPosition:"center"}}),m.a.createElement("div",{className:"ph3 pv2"},e.frontmatter.title&&m.a.createElement("h3",{className:"f5 fw7 mt3 mb1"},e.frontmatter.title),e.frontmatter.tags&&m.a.createElement("div",{className:"flex flex-row flex-wrap"},e.frontmatter.tags.map(function(e){return m.a.createElement("span",{className:"br2 bg-near-white dark-gray f7 mr2 mt2 pa1"},e)})),m.a.createElement("div",{className:"f6 mv3 gray"},e.frontmatter.date," ",e.frontmatter.date2&&"– "+e.frontmatter.date2)))},t}(m.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-templates-project-page-js-5ae1b433b4af876076ff.js.map