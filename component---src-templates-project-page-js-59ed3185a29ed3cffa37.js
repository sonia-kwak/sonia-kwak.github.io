(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);a(75),a(57),a(221);var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(167),m=a.n(s),i=a(36),o=a(230),d=a.n(o),f=a(148),u=a(169),p=a(166),h=a(189),v=a(190),w=function(e){function t(t){var a,n;return a=e.call(this,t)||this,"undefined"!=typeof window&&(n=function(){var e,t=document.documentElement,n=document.body,r="scrollTop",c="scrollHeight";e=(t[r]||n[r])/((t[c]||n[c])-t.clientHeight)*100,a.setState({scroll:e})},document.addEventListener("scroll",n,{passive:!0})),a.state={listenerCallback:n,scroll:0},a}r()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){document.removeEventListener("scroll",this.state.listenerCallback)},a.render=function(){return l.a.createElement("div",{className:"fixed top-0 left-0 right-0 z-1",style:{background:"linear-gradient(to right, var(--orange) "+this.state.scroll+"%, transparent 0)",backgroundRepeat:"no-repeat",height:"3px"}})},t}(l.a.Component),E=a(165);a.d(t,"pageQuery",function(){return N});var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=JSON.parse(this.props.data);return l.a.createElement("div",{className:"nl6 nr6 nl4-m nr4-m nl3 nr3 mv6 pa6 bg-near-white flex flex-row-l flex-column justify-around tl-ns tc"},Object.keys(e).map(function(t){return l.a.createElement("div",{className:"mv0-ns mv3"},l.a.createElement("div",{className:"f1 fw1 mt0"},e[t]),l.a.createElement("div",{className:"f7 gray ttu mb0 tracked"},t))}))},t}(l.a.Component);b.defaultProps={data:{}};var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.excerpt,a=this.props.pageContext,n=a.previous,r=a.next,c=e.fields.readingTime,s=Object(E.a)(e.frontmatter.date,"MMMM YYYY"),o=Object(E.a)(e.frontmatter.date2,"MMMM YYYY");o&&o===s&&(o=null);var f=new d.a({createElement:l.a.createElement,components:{h1:function(e){return l.a.createElement("h1",{className:"f1 tracked-tight fw1 near-black mt6-ns mb5-ns mt5 mb4 mw7 center"},e.children)},h2:function(e){return l.a.createElement("h2",{className:"f2 near-black fw6 mt5-ns mb3-ns mt4 mb2 mw7 center"},e.children)},h3:function(e){return l.a.createElement("h3",{className:"f3 near-black fw5 mt4 mb3 mw7 center"},e.children)},p:function(e){return l.a.createElement("p",{className:"mt0 mw7 center"},e.children)},blockquote:function(e){return l.a.createElement("div",{className:"mt0 ml5 mv5 f3 fw6",style:{textIndent:"-.5em"}},e.children)},ul:function(e){return l.a.createElement("ul",{className:"mw7 center"},e.children)},a:function(e){return l.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"pretty-link"},e.children)},hr:function(e){return l.a.createElement("hr",{className:"mv6 bt-0 bb b--black-10"})},figure:function(e){return l.a.createElement("figure",{className:"mw7 center mv6-ns mv5 "},e.children)},figcaption:function(e){return l.a.createElement("figcaption",{className:"mt4 fw6 f6 dark-gray tc"},e.children)},"video-container":function(e){return l.a.createElement("div",{className:"mw7 center mv6-ns mv5 "},e.children)},"results-banner":b,"links-list":function(e){var t=JSON.parse(e.items).map(function(e){return e});return l.a.createElement("p",{className:"mt0 mw7 center"},l.a.createElement(v.a,{items:t,rows:!0}))}}}).Compiler;return l.a.createElement(p.a,{location:this.props.location},l.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:""+e.frontmatter.title}),l.a.createElement(w,null),l.a.createElement("div",{className:"flex flex-row-ns flex-column mb4"},l.a.createElement("div",{className:"w-100"},e.frontmatter.cover?l.a.createElement("img",{className:"w-100 ",alt:"",src:e.frontmatter.cover.publicURL}):l.a.createElement("div",{className:"w-100 h5 pv7 bg-silver"}))),l.a.createElement("div",{className:"flex flex-row-ns flex-column mt5 mb6"},l.a.createElement("div",{className:"w-30-ns"},l.a.createElement("h1",{className:"f1 mt0 fw9 mb3 dark-gray lh-solid"},e.frontmatter.title),l.a.createElement("div",{className:"f6 gray db-ns dn"},c.text)),l.a.createElement("div",{className:"w-10-ns"}),l.a.createElement("div",{className:"w-60-ns"},e.frontmatter.description&&l.a.createElement("div",{className:"mb4 dark-gray"},l.a.createElement("div",{className:"f3 dark-gray lh-title"},e.frontmatter.description)),e.frontmatter.tags&&l.a.createElement("div",{className:"mv4 dark-gray"},l.a.createElement("h2",{className:"f7 fw6 ttu mv1 fw7 mr2"},l.a.createElement("span",{className:""},"Tags")),l.a.createElement("div",{className:""},e.frontmatter.tags.map(function(e){return l.a.createElement(u.a,{size:"big"},e)}))),l.a.createElement("div",{className:"mv4 dark-gray"},l.a.createElement("h2",{className:"f7 fw6 ttu mv1 fw7 mr2"},l.a.createElement("span",{className:""},"Date")),l.a.createElement("div",{className:"f5"},s,o&&" – "+o)),e.frontmatter.team&&l.a.createElement("div",{className:"mv4 dark-gray"},l.a.createElement("h2",{className:"f7 fw6 ttu mv1 fw7 mr2"},l.a.createElement("span",{className:""},"Team")),l.a.createElement("span",{className:"f5 din"},e.frontmatter.team)))),l.a.createElement("div",{className:"flex flex-column"},l.a.createElement("div",{className:"f4-ns f5 dark-gray lh-copy "},f(e.htmlAst))),l.a.createElement("div",{className:"flex flex-column bg-near-white mt6 nl6 nr6 ph6 pb6"},l.a.createElement("div",{className:"w-100 tc f2 mv6"},l.a.createElement("h2",null,"Other projects")),l.a.createElement("div",{className:"flex flex-row-ns flex-column justify-between mt4"},l.a.createElement("div",{className:"w-40-ns w-100"},n&&l.a.createElement("div",null,l.a.createElement("div",{className:"f3 tl mb3 fw7 black-10 db-ns dn"},"Previous"),l.a.createElement(h.a,{node:n}))),l.a.createElement("div",{className:"w-10-ns mv0-ns mv3"}),l.a.createElement("div",{className:"w-40-ns w-100"},r&&l.a.createElement("div",null,l.a.createElement("div",{className:"f3 tr mb3 fw7 black-10 db-ns dn"},"Next"),l.a.createElement(h.a,{node:r})))),l.a.createElement("div",{className:"w-100 tc mt6"},l.a.createElement(i.Link,{to:"/#projects",className:"ba br1 dim f4 fw6 link orange pa3 br1"},"View all projects"))))},t}(l.a.Component),N=(t.default=Object(f.a)(g),"1418759345")},148:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c);t.a=function(e,t){return function(a){function n(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))||this).state={didMount:!1},e}r()(n,a);var c=n.prototype;return c.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({didMount:!0})},0)},c.render=function(){var a,n=this.state.didMount,r=t||{},c=r.duration,s=r.delay,m=r.animation;return c=c||".7s",s=s||"0s",m=m||"fadeIn",a=n?{animation:m+" "+c+" ease-out "+s+" 1"}:{opacity:0},l.a.createElement("div",{style:a},l.a.createElement(e,this.props))},n}(l.a.Component)}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Cristiano Dalbem"}}}}},164:function(e,t,a){},165:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});a(218);var n=a(219),r=a.n(n),c=function(e,t){return e?"now"===e.toLowerCase()?"Now":r()(e).format(t):null},l=function(e){var t=e.filter(function(e){return e.node.frontmatter.forceOrder});t=t.sort(function(e,t){return e.node.frontmatter.forceOrder-t.node.frontmatter.forceOrder});var a=e.filter(function(e){return!e.node.frontmatter.forceOrder});return t.concat(a)}},166:function(e,t,a){"use strict";var n=a(161),r=a(0),c=a.n(r),l=a(1),s=a.n(l),m=a(167),i=a.n(m),o=a(36),d=a(148),f=a(7),u=a.n(f),p=a(175),h=a.n(p),v=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.scrollToSection=function(e){var t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},a.render=function(){var e=this,t=!0;"undefined"!=typeof window&&(t="/"===window.location.pathname,new URL(window.location.href));var a=["About","Work","Case studies","Speaking","Reading","Elsewhere"],n=a.map(function(e){return e.toLowerCase()});return c.a.createElement("div",{className:"flex pt4 pb3"},c.a.createElement("div",{className:"w-100 flex justify-between items-center"},c.a.createElement("h1",{className:"f5"},c.a.createElement(o.Link,{to:"/",className:"link dim near-black fw7 ttu"},"Cristiano Dalbem")),c.a.createElement("div",{className:""+(t&&"f7 dn db-ns")},t?c.a.createElement(h.a,{items:n,componentTag:"div",currentClassName:"tab--selected",offset:-200},a.map(function(t){return c.a.createElement("button",{className:"ml3 f6 pa0 fw6 pointer bg-transparent outline-0 bn tab tab--unselected",onClick:function(){return e.scrollToSection(t.toLowerCase())},key:t},t)})):c.a.createElement(o.Link,{to:"/",className:"link dim fw6 orange"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-corner-left-up"},c.a.createElement("polyline",{points:"14 9 9 4 4 9"}),c.a.createElement("path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}))," Back"))))},t}(c.a.Component),w=Object(d.a)(v,{animation:"slideDownWithDelay",duration:"1.5s"}),E=function(){return c.a.createElement("div",{className:"flex flex-row-ns flex-column pv6 f7 w-100 moon-gray justify-between"},c.a.createElement("div",{className:"mw6-ns lh-copy"},"Designed with ❤ in Figma, developed with GatsbyJS, and styled with Tachyons."),c.a.createElement("div",{className:"mv4 mv0-ns"},c.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://github.com/cmdalbem/"},c.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 438.549 438.549"},c.a.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"}))),c.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://www.instagram.com/cmdalbem/"},c.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"}),c.a.createElement("path",{d:"M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"}),c.a.createElement("circle",{cx:"393.6",cy:"118.4",r:"17.056"}))),c.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://twitter.com/cmdalbem"},c.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 612 612"},c.a.createElement("path",{d:"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"}))),c.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"https://www.linkedin.com/in/cmdalbem/"},c.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 430.117 430.117"},c.a.createElement("path",{d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"}))),c.a.createElement("a",{className:"pl3-ns pr0-ns pr3 pl0 dim moon-gray",href:"mailto:cristiano.dalbem@gmail.com "},c.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),c.a.createElement("polyline",{points:"22,6 12,13 2,6"})))))},b=(a(164),function(e){var t=e.children;return c.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){var a=!0;"undefined"!=typeof window&&(a="/"===window.location.pathname);var n="ph6-ns ph4-m ph3 ";n+=a?" fixed-ns top-0 left-0 right-0 bg-background-color z-2 relative":"";var r=Object(d.a)(w);return c.a.createElement("div",{className:"parallax"},c.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Personal website of Cristiano Dalbem, a designer of products and systems."}]},c.a.createElement("html",{lang:"en"}),c.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"})),c.a.createElement("div",{className:n},c.a.createElement(r,null)),c.a.createElement("div",{className:"ph6-ns ph4-m ph3 mt2 mb0"},t),c.a.createElement("div",{className:"ph6-ns ph4-m ph3 bg-dark-gray"},c.a.createElement(E,null)))},data:n})});b.propTypes={children:s.a.node.isRequired};t.a=b},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t="br2 ba b--moon-gray gray dib ";return e.size&&"big"===e.size?t+="f5 mr2 mb2 pv1 ph2":t+="f7 mr2 mb2 pa1",r.a.createElement("span",{className:t},e.children)}},189:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),s=a(36),m=a(169),i=a(165),o=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.node,t=this.props.mini,a=Object(i.a)(e.frontmatter.date,"YYYY"),n=Object(i.a)(e.frontmatter.date2,"YYYY");return n&&n===a&&(n=null),l.a.createElement(s.Link,{className:"project-card link near-black db br1 lh-copy",to:e.fields.slug},l.a.createElement("div",{className:"w-100 db project-card--cover cover card-shadow br1 "+(t&&"h4"),style:e.frontmatter.cover&&{backgroundImage:"url("+e.frontmatter.cover.publicURL+")",backgroundPosition:"center"}}),l.a.createElement("div",{className:"pv3"},l.a.createElement("div",{className:"project-card--date f6 mt1 silver"},a," ",n&&"– "+n),e.frontmatter.title&&l.a.createElement("h3",{className:"project-card--title f4 fw7 near-black mt0 mb0"},e.frontmatter.title),e.frontmatter.minibio&&l.a.createElement("div",{className:"project-card--description f5 mt0 gray lh-copy"},e.frontmatter.minibio),e.frontmatter.tags&&!t&&l.a.createElement("div",{className:"flex flex-row flex-wrap mt2"},e.frontmatter.tags.map(function(e){return l.a.createElement(m.a,null,e)}))))},t}(l.a.Component);t.a=o},190:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.items;return t&&t.map?r.a.createElement("div",{className:"f3 fw2"},t.map(function(e,t){return r.a.createElement("a",{className:"animatable link dim db text-gradient-clip bg-gradient-"+(t+1)+" "+(0==t?"pb3-ns pb2":"pv3-ns pv2"),target:"_blank",rel:"noopener noreferrer",href:e.url},e.label)})):null}}}]);
//# sourceMappingURL=component---src-templates-project-page-js-59ed3185a29ed3cffa37.js.map