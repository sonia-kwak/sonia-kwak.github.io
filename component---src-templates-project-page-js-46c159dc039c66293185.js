(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2dtT":function(e,n,t){"use strict";var l=t("oNNP"),r=t("Cjod"),a=t("RdQs");e.exports=function(e){var n=e||{},t=n.createElement,i=n.components||{};function o(e,n,r){var a=l(i,e)?i[e]:e;return t(a,n,r)}this.Compiler=function(e){return"root"===e.type&&(e=1===e.children.length&&"element"===e.children[0].type?e.children[0]:{type:"element",tagName:"div",properties:e.properties||{},children:e.children}),r(o,a(e),n.prefix)}}},"7+hk":function(e,n,t){"use strict";var l=t("z2ZG"),r=t("du5t"),a=t("eAD1"),i=t("dXJL"),o=t("bHgY"),u=t("RXC2");e.exports=l([a,r,i,o,u])},CC3I:function(e,n,t){var l=t("Lc7W");e.exports=function(e,n){var t,r=null;if(!e||"string"!=typeof e)return r;for(var a,i,o=l(e),u="function"==typeof n,s=0,c=o.length;s<c;s++)a=(t=o[s]).property,i=t.value,u?n(a,i,t):i&&(r||(r={}),r[a]=i);return r}},Cjod:function(e,n,t){"use strict";t("sC2a");var l=t("7+hk"),r=t("IEZ+"),a=t("F6fn"),i=t("TTG4"),o=t("vfP8"),u=t("CC3I"),s=t("qrWY"),c=t("i+/2"),p=/-([a-z])/g;function f(e,n,t,l){var r,u=l.schema,s=a(u,n);null==t||!1===t||t!=t||s.boolean&&!t||(null!==t&&"object"==typeof t&&"length"in t&&(t=(s.commaSeparated?o:i).stringify(t)),s.boolean&&!0===l.hyperscript&&(t=""),s.mustUseProperty||(!0===l.vdom?r="attributes":!0===l.hyperscript&&(r="attrs")),r?(void 0===e[r]&&(e[r]={}),e[r][s.attribute]=t):e[l.react&&s.space?s.property:s.attribute]=t)}function m(e){return Boolean(e&&e.context&&e.cleanup)}function d(e,n){return n.toUpperCase()}e.exports=function(e,n,t){var a,i,o,h=t||{};if("function"!=typeof e)throw new Error("h is not a function");"string"==typeof h||"boolean"==typeof h?(a=h,h={}):a=h.prefix;i=function(e){var n=e&&e("div");return Boolean(n&&("_owner"in n||"_store"in n)&&null===n.key)}(e),o=function(e){return e&&"VirtualNode"===e("div").type}(e),null==a&&(a=(!0===i||!0===o)&&"h-");if(c("root",n))n=1===n.children.length&&c("element",n.children[0])?n.children[0]:{type:"element",tagName:"div",properties:{},children:n.children};else if(!c("element",n))throw new Error("Expected root or element, not `"+(n&&n.type||n)+"`");return function e(n,t,l){var a,i,o,m,h,v,g,y,b,x=l.schema,w=x,k=t.tagName;"html"===x.space&&"svg"===k.toLowerCase()&&(w=r,l.schema=w);!0===l.vdom&&"html"===w.space&&(k=k.toUpperCase());for(m in a=t.properties,i={},a)f(i,m,a[m],l);"string"!=typeof i.style||!0!==l.vdom&&!0!==l.react||(i.style=function(e,n){var t={};try{u(e,(function(e,n){t[function(e){"-ms-"===e.slice(0,4)&&(e="ms-"+e.slice(4));return e.replace(p,d)}(e)]=n}))}catch(l){throw l.message=n+"[style]"+l.message.slice("undefined".length),l}return t}(i.style,k));l.prefix&&(l.key++,i.key=l.prefix+l.key);l.vdom&&"html"!==w.space&&(i.namespace=s[w.space]);h=[],o=t.children,v=o?o.length:0,g=-1;for(;++g<v;)y=o[g],c("element",y)?h.push(e(n,y,l)):c("text",y)&&h.push(y.value);return b=0===h.length?n(k,i):n(k,i,h),l.schema=x,b}(e,n,{schema:"svg"===h.space?r:l,prefix:a,key:0,react:i,vdom:o,hyperscript:m(e)})}},D3zA:function(e,n,t){"use strict";t("n7j8");var l=t("aI7X");e.exports=Function.prototype.bind||l},DUvi:function(e,n,t){"use strict";t("sc67");var l=t("bAF5"),r=t("dKIx"),a=t("qTn3");e.exports=function(e){var n,t,i=e.space,o=e.mustUseProperty||[],u=e.attributes||{},s=e.properties,c=e.transform,p={},f={};for(n in s)t=new a(n,c(u,n),s[n],i),-1!==o.indexOf(n)&&(t.mustUseProperty=!0),p[n]=t,f[l(n)]=n,f[l(t.attribute)]=n;return new r(p,f,i)}},F6fn:function(e,n,t){"use strict";t("sC2a");var l=t("bAF5"),r=t("qTn3"),a=t("Ut8p");e.exports=function(e,n){var t=l(n),p=n,f=a;if(t in e.normal)return e.property[e.normal[t]];t.length>4&&"data"===t.slice(0,4)&&i.test(n)&&("-"===n.charAt(4)?p=function(e){var n=e.slice(5).replace(o,c);return"data"+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);if(o.test(n))return e;"-"!==(n=n.replace(u,s)).charAt(0)&&(n="-"+n);return"data"+n}(n),f=r);return new f(p,n)};var i=/^data[-a-z0-9.:_]+$/i,o=/-[a-z]/g,u=/[A-Z]/g;function s(e){return"-"+e.toLowerCase()}function c(e){return e.charAt(1).toUpperCase()}},FWC9:function(e,n,t){"use strict";var l=0;function r(){return Math.pow(2,++l)}n.boolean=r(),n.booleanish=r(),n.overloadedBoolean=r(),n.number=r(),n.spaceSeparated=r(),n.commaSeparated=r(),n.commaOrSpaceSeparated=r()},HXzo:function(e,n,t){"use strict";t("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},"IEZ+":function(e,n,t){"use strict";var l=t("z2ZG"),r=t("du5t"),a=t("eAD1"),i=t("dXJL"),o=t("bHgY"),u=t("zktx");e.exports=l([a,r,i,o,u])},Lc7W:function(e,n,t){t("sC2a"),t("lFjb"),t("Ll4R");var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,a=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g;function p(e){return e?e.replace(c,""):""}e.exports=function(e,n){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,c=1;function f(e){var n=e.match(r);n&&(t+=n.length);var l=e.lastIndexOf("\n");c=~l?e.length-l:c+e.length}function m(){var e={line:t,column:c};return function(n){return n.position=new d(e),y(),n}}function d(e){this.start=e,this.end={line:t,column:c},this.source=n.source}d.prototype.content=e;var h=[];function v(l){var r=new Error(n.source+":"+t+":"+c+": "+l);if(r.reason=l,r.filename=n.source,r.line=t,r.column=c,r.source=e,!n.silent)throw r;h.push(r)}function g(n){var t=n.exec(e);if(t){var l=t[0];return f(l),e=e.slice(l.length),t}}function y(){g(a)}function b(e){var n;for(e=e||[];n=x();)!1!==n&&e.push(n);return e}function x(){var n=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var t=2;""!=e.charAt(t)&&("*"!=e.charAt(t)||"/"!=e.charAt(t+1));)++t;if(t+=2,""===e.charAt(t-1))return v("End of comment missing");var l=e.slice(2,t-2);return c+=2,f(l),e=e.slice(t),c+=2,n({type:"comment",comment:l})}}function w(){var e=m(),n=g(i);if(n){if(x(),!g(o))return v("property missing ':'");var t=g(u),r=e({type:"declaration",property:p(n[0].replace(l,"")),value:t?p(t[0].replace(l,"")):""});return g(s),r}}return y(),function(){var e,n=[];for(b(n);e=w();)!1!==e&&(n.push(e),b(n));return n}()}},RXC2:function(e,n,t){"use strict";var l=t("FWC9"),r=t("DUvi"),a=t("y3WP"),i=l.boolean,o=l.overloadedBoolean,u=l.booleanish,s=l.number,c=l.spaceSeparated,p=l.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:a,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:c,autoFocus:i,autoPlay:i,capture:i,charSet:null,checked:i,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:i,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:o,draggable:u,encType:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:c,height:s,hidden:i,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:c,itemRef:c,itemScope:i,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:i,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,open:i,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:i,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:c,required:i,reversed:i,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:i,seamless:i,selected:i,shape:null,size:s,sizes:c,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,prefix:null,property:null,results:s,security:null,unselectable:null}})},RdQs:function(e,n,t){"use strict";t("HXzo");var l=t("ZkSf"),r=Object.prototype.hasOwnProperty,a={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function i(e){var n;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(n in a)r.call(a,n)&&void 0!==e.properties[n]&&(o(e,a[n],e.properties[n]),delete e.properties[n])}function o(e,n,t){var l=(e.properties.style||"").trim();l&&!/;\s*/.test(l)&&(l+=";"),l&&(l+=" ");var r=l+n+": "+t+";";e.properties.style=r}e.exports=function(e){return l(e,"element",i),e}},TTG4:function(e,n,t){"use strict";t("HQhv"),t("HXzo"),n.parse=function(e){var n=String(e||"").trim();return""===n?[]:n.split(l)},n.stringify=function(e){return e.join(" ").trim()};var l=/[ \t\n\r\f]+/g},U6jy:function(e,n){e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var l=arguments[n];for(var r in l)t.call(l,r)&&(e[r]=l[r])}return e};var t=Object.prototype.hasOwnProperty},Ut8p:function(e,n,t){"use strict";e.exports=r;var l=r.prototype;function r(e,n){this.property=e,this.attribute=n}l.space=null,l.attribute=null,l.property=null,l.boolean=!1,l.booleanish=!1,l.overloadedBoolean=!1,l.number=!1,l.commaSeparated=!1,l.spaceSeparated=!1,l.commaOrSpaceSeparated=!1,l.mustUseProperty=!1,l.defined=!1},ZkSf:function(e,n,t){"use strict";t("sc67"),e.exports=o;var l=t("uzq8"),r=l.CONTINUE,a=l.SKIP,i=l.EXIT;function o(e,n,t,r){"function"==typeof n&&"function"!=typeof t&&(r=t,t=n,n=null),l(e,n,(function(e,n){var l=n[n.length-1],r=l?l.children.indexOf(e):null;return t(e,r,l)}),r)}o.CONTINUE=r,o.SKIP=a,o.EXIT=i},aI7X:function(e,n,t){"use strict";t("q8oJ"),t("C9fy"),t("8npG");var l="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,a=Object.prototype.toString;e.exports=function(e){var n=this;if("function"!=typeof n||"[object Function]"!==a.call(n))throw new TypeError(l+n);for(var t,i=r.call(arguments,1),o=function(){if(this instanceof t){var l=n.apply(this,i.concat(r.call(arguments)));return Object(l)===l?l:this}return n.apply(e,i.concat(r.call(arguments)))},u=Math.max(0,n.length-i.length),s=[],c=0;c<u;c++)s.push("$"+c);if(t=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(o),n.prototype){var p=function(){};p.prototype=n.prototype,t.prototype=new p,p.prototype=null}return t}},bAF5:function(e,n,t){"use strict";t("sC2a"),e.exports=function(e){return e.toLowerCase().replace(/\b[:-]\b/g,"")}},bHgY:function(e,n,t){"use strict";var l=t("FWC9"),r=t("DUvi"),a=l.booleanish,i=l.number,o=l.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:a,ariaAutoComplete:null,ariaBusy:a,ariaChecked:a,ariaColCount:i,ariaColIndex:i,ariaColSpan:i,ariaControls:o,ariaCurrent:null,ariaDescribedBy:o,ariaDetails:null,ariaDisabled:a,ariaDropEffect:o,ariaErrorMessage:null,ariaExpanded:a,ariaFlowTo:o,ariaGrabbed:a,ariaHasPopup:null,ariaHidden:a,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:o,ariaLevel:i,ariaLive:null,ariaModal:a,ariaMultiLine:a,ariaMultiSelectable:a,ariaOrientation:null,ariaOwns:o,ariaPlaceholder:null,ariaPosInSet:i,ariaPressed:a,ariaReadOnly:a,ariaRelevant:null,ariaRequired:a,ariaRoleDescription:o,ariaRowCount:i,ariaRowIndex:i,ariaRowSpan:i,ariaSelected:a,ariaSetSize:i,ariaSort:null,ariaValueMax:i,ariaValueMin:i,ariaValueNow:i,ariaValueText:null,role:null}})},csQP:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",(function(){return S}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi");var l=t("q1tI"),r=t.n(l),a=t("TJpk"),i=t.n(a),o=t("Wbzz"),u=t("9eSz"),s=t.n(u),c=t("aaPm"),p=t.n(c),f=t("/eHF"),m=t.n(f),d=t("2dtT"),h=t.n(d),v=t("2vz6"),g=t("7oih"),y=t("xrPb"),b=t("tnyl");var x=function(e){var n,t;function l(n){var t,l;return t=e.call(this,n)||this,"undefined"!=typeof window&&(l=function(){var e,n=document.documentElement,l=document.body,r="scrollTop",a="scrollHeight";e=(n[r]||l[r])/((n[a]||l[a])-n.clientHeight)*100,t.setState({scroll:e})},document.addEventListener("scroll",l,{passive:!0})),t.state={listenerCallback:l,scroll:0},t}t=e,(n=l).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a=l.prototype;return a.componentWillUnmount=function(){document.removeEventListener("scroll",this.state.listenerCallback)},a.render=function(){var e=this.props.barColor||"var(--orange)";return r.a.createElement("div",{className:"fixed top-0 left-0 right-0 z-1",style:{background:e,width:this.state.scroll+"%",height:"4px"}})},l}(r.a.Component),w=t("dbrF");function k(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}var E=function(e){function n(){return e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(){var e=JSON.parse(this.props.data);return r.a.createElement("div",{className:"nl6 nr6 nl4-m nr4-m nl3 nr3 mv6 pa6 bg-near-white flex flex-row-l flex-column justify-around tl-ns tc"},Object.keys(e).map((function(n,t){return r.a.createElement(m.a,{bottom:!0,duration:1500,delay:500*t},r.a.createElement("div",{className:"mv0-ns mv3",key:n},r.a.createElement("div",{className:"f1 fw1 mt0"},e[n]),r.a.createElement("div",{className:"f7 gray ttu mb0 tracked"},n)))})))},n}(r.a.Component);E.defaultProps={data:{}};var N=function(e){function n(){return e.apply(this,arguments)||this}return k(n,e),n.prototype.render=function(){var e=this.props.data.markdownRemark,n=e.excerpt,t=this.props.pageContext,l=t.previous,a=t.next,u=e.fields.readingTime,c="mw7 center layoutMaxWidth",f=c+" mv6-ns mv5 ",d=Object(w.a)(e.frontmatter.date,"MMMM YYYY"),k=Object(w.a)(e.frontmatter.date2,"MMMM YYYY");k&&k===d&&(k=null);var N=new h.a({createElement:r.a.createElement,components:{h1:function(e){return r.a.createElement("h1",{className:"f2 lh-title fw7 dark-gray mt6-ns mb5-ns mt5 mb4 "+c},e.children)},h2:function(e){return r.a.createElement("h2",{className:"f3 lh-title dark-gray fw7 mt5-ns mb3-ns mt4 mb2 "+c},e.children)},h3:function(e){return r.a.createElement("h3",{className:"f3 lh-title gray fw7 mt4 mb3 "+c},e.children)},p:function(e){return r.a.createElement("p",{className:"mt0 "+c},e.children)},blockquote:function(e){return r.a.createElement("div",{className:"mt0 ml5 mv5 f3 fw6",style:{textIndent:"-.5em"}},e.children)},ul:function(e){return r.a.createElement("ul",{className:""+c},e.children)},li:function(e){return r.a.createElement("li",{className:"mb2"},e.children)},a:function(e){return r.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"pretty-link"},e.children)},hr:function(e){return r.a.createElement("hr",{className:"mv6 bt-0 bb b--black-10"})},figure:function(e){return r.a.createElement("figure",{className:f},e.children)},figcaption:function(e){return r.a.createElement("figcaption",{className:"mt4 fw6 f6 dark-gray tc"},e.children)},code:function(e){return r.a.createElement("code",{className:"f6 bg-light-gray ph2"},e.children)},jumbo:function(e){return r.a.createElement("div",{className:"nl5-ns nr5-ns nl3-m nr3-m mv6-ns mv5 "},e.children,e.caption&&r.a.createElement("figcaption",{className:c+" mt4 fw6 f6 dark-gray tc"},e.caption))},"video-container":function(e){return r.a.createElement("div",{className:f},e.children)},"results-banner":E,"links-list":function(e){var n=JSON.parse(e.items).map((function(e){return e}));return r.a.createElement("p",{className:"mt0 "+c},r.a.createElement(b.a,{items:n,rows:!0}))}}}).Compiler;return r.a.createElement(g.a,{location:this.props.location},r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:""+e.frontmatter.title}),r.a.createElement(x,{barColor:e.frontmatter.color}),r.a.createElement("div",{className:"center layoutMaxWidth"},r.a.createElement("div",{className:"flex flex-row-ns flex-column mt5 mb5"},r.a.createElement("div",{className:"w-100"},r.a.createElement(p.a,{effect:"clipIn",duration:2e3},e.frontmatter.cover?r.a.createElement(s.a,{fluid:e.frontmatter.cover.childImageSharp.fluid,alt:""}):r.a.createElement("div",{className:"w-100 h5 pv7 bg-silver"})))),r.a.createElement(m.a,{duration:1500,delay:1e3},r.a.createElement("div",{className:"flex flex-row-ns flex-column mb4"},r.a.createElement("div",{className:"w-60-ns"},r.a.createElement("h1",{className:"f2 mt0 fw8 mb3 dark-gray lh-solid"},e.frontmatter.title),e.frontmatter.description&&r.a.createElement("div",{className:"mb3 dark-gray"},r.a.createElement("div",{className:"f3 dark-gray lh-title"},e.frontmatter.description)),r.a.createElement("div",{className:"f6 gray db-ns dn"},u.text)),r.a.createElement("div",{className:"w-10-ns"}),r.a.createElement("div",{className:"w-30-ns"},e.frontmatter.tags&&r.a.createElement("div",{className:"mb4 dark-gray"},r.a.createElement("h2",{className:"f7 fw6 ttu mv2 fw7 mr2"},r.a.createElement("span",{className:""},"Tags")),r.a.createElement("div",{className:""},e.frontmatter.tags.map((function(e){return r.a.createElement(v.a,{size:"big",key:e},e)})))),e.frontmatter.team&&r.a.createElement("div",{className:"mv4 dark-gray"},r.a.createElement("h2",{className:"f7 fw6 ttu mv2 fw7 mr2"},r.a.createElement("span",{className:""},"Team")),r.a.createElement("span",{className:"f5 din"},e.frontmatter.team)),r.a.createElement("div",{className:"mv4 dark-gray"},r.a.createElement("h2",{className:"f7 fw6 ttu mv2 fw7 mr2"},r.a.createElement("span",{className:""},"Date")),r.a.createElement("div",{className:"f5"},d,k&&" – "+k)))))),r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("div",{className:"f4-ns f5 dark-gray lh-copy "},N(e.htmlAst))),r.a.createElement("div",{className:"flex flex-column bg-near-white mt6 nl6 nr6 ph6 pb6"},r.a.createElement("div",{className:"w-100 tc f2 mv6"},r.a.createElement("h2",{className:"f1 fw4 dark-gray"},"Other projects")),r.a.createElement("div",{className:"flex flex-row-ns flex-column justify-between mt4"},r.a.createElement("div",{className:"w-40-ns w-100"},l&&r.a.createElement("div",null,r.a.createElement("div",{className:"f6 tl mb1 fw7 ttu black-20 db-ns dn"},"Previous"),r.a.createElement(y.a,{node:l}))),r.a.createElement("div",{className:"w-10-ns mv0-ns mv3"}),r.a.createElement("div",{className:"w-40-ns w-100"},a&&r.a.createElement("div",null,r.a.createElement("div",{className:"f6 tl mb1 fw7 ttu black-20 db-ns dn"},"Next"),r.a.createElement(y.a,{node:a})))),r.a.createElement("div",{className:"w-100 tc mt6"},r.a.createElement(o.Link,{to:"/#case studies",className:"ba br3 dim f4 fw6 link orange pa3"},"View all projects"))))},n}(r.a.Component),S=(n.default=N,"1036135029")},dKIx:function(e,n,t){"use strict";e.exports=r;var l=r.prototype;function r(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}l.space=null,l.normal={},l.property={}},dXJL:function(e,n,t){"use strict";var l=t("DUvi"),r=t("y3WP");e.exports=l({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})},du5t:function(e,n,t){"use strict";var l=t("DUvi");e.exports=l({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},eAD1:function(e,n,t){"use strict";var l=t("DUvi");e.exports=l({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},"i+/2":function(e,n,t){"use strict";function l(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return i;if("object"==typeof e)return("length"in e?a:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(n){var t;for(t in e)if(n[t]!==e[t])return!1;return!0}}function a(e){var n=function(e){for(var n=[],t=e.length,r=-1;++r<t;)n[r]=l(e[r]);return n}(e),t=n.length;return function(){var e=-1;for(;++e<t;)if(n[e].apply(this,arguments))return!0;return!1}}function i(){return!0}e.exports=function e(n,t,r,a,i){var o=null!=a,u=null!=r,s=l(n);if(u&&("number"!=typeof r||r<0||r===1/0))throw new Error("Expected positive finite index or child node");if(o&&(!e(null,a)||!a.children))throw new Error("Expected parent node");if(!t||!t.type||"string"!=typeof t.type)return!1;if(o!==u)throw new Error("Expected both parent and index");return Boolean(s.call(i,t,r,a))}},lFjb:function(e,n,t){"use strict";var l=t("P8UN"),r=t("5SQf"),a=t("1Llc"),i=t("kiRH"),o=[].lastIndexOf,u=!!o&&1/[1].lastIndexOf(1,-0)<0;l(l.P+l.F*(u||!t("h/qr")(o)),"Array",{lastIndexOf:function(e){if(u)return o.apply(this,arguments)||0;var n=r(this),t=i(n.length),l=t-1;for(arguments.length>1&&(l=Math.min(l,a(arguments[1]))),l<0&&(l=t+l);l>=0;l--)if(l in n&&n[l]===e)return l||0;return-1}})},mFtL:function(e,n,t){"use strict";function l(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return i;if("object"==typeof e)return("length"in e?a:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(n){var t;for(t in e)if(n[t]!==e[t])return!1;return!0}}function a(e){var n=function(e){for(var n=[],t=e.length,r=-1;++r<t;)n[r]=l(e[r]);return n}(e),t=n.length;return function(){var e=-1;for(;++e<t;)if(n[e].apply(this,arguments))return!0;return!1}}function i(){return!0}e.exports=l},oNNP:function(e,n,t){"use strict";var l=t("D3zA");e.exports=l.call(Function.call,Object.prototype.hasOwnProperty)},qTn3:function(e,n,t){"use strict";var l=t("Ut8p"),r=t("FWC9");function a(e,n,t,a){i(this,"space",a),l.call(this,e,n),i(this,"boolean",o(t,r.boolean)),i(this,"booleanish",o(t,r.booleanish)),i(this,"overloadedBoolean",o(t,r.overloadedBoolean)),i(this,"number",o(t,r.number)),i(this,"commaSeparated",o(t,r.commaSeparated)),i(this,"spaceSeparated",o(t,r.spaceSeparated)),i(this,"commaOrSpaceSeparated",o(t,r.commaOrSpaceSeparated))}function i(e,n,t){t&&(e[n]=t)}function o(e,n){return(e&n)===n}e.exports=a,a.prototype=new l,a.prototype.defined=!0},qrWY:function(e){e.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},uzq8:function(e,n,t){"use strict";e.exports=r;var l=t("mFtL");function r(e,n,t,r){var i;function o(e,l,u){var s,c=[];return(n&&!i(e,l,u[u.length-1]||null)||!1!==(c=a(t(e,u)))[0])&&e.children&&"skip"!==c[0]&&!1===(s=a(function(e,n){var t,l=r?-1:1,a=(r?e.length:-1)+l;for(;a>-1&&a<e.length;){if(!1===(t=o(e[a],a,n))[0])return t;a="number"==typeof t[1]?t[1]:a+l}}(e.children,u.concat(e))))[0]?s:c}"function"==typeof n&&"function"!=typeof t&&(r=t,t=n,n=null),i=l(n),o(e,null,[])}function a(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[!0,e]:[e]}r.CONTINUE=!0,r.SKIP="skip",r.EXIT=!1},vGni:function(e,n,t){"use strict";e.exports=function(e,n){return n in e?e[n]:n}},vfP8:function(e,n,t){"use strict";t("HXzo"),t("sc67"),n.parse=function(e){var n,t=[],l=String(e||""),r=l.indexOf(","),a=0,i=!1;for(;!i;)-1===r&&(r=l.length,i=!0),!(n=l.slice(a,r).trim())&&i||t.push(n),a=r+1,r=l.indexOf(",",a);return t},n.stringify=function(e,n){var t=n||{},l=!1===t.padLeft?"":" ",r=t.padRight?" ":"";""===e[e.length-1]&&(e=e.concat(""));return e.join(r+","+l).trim()}},y3WP:function(e,n,t){"use strict";var l=t("vGni");e.exports=function(e,n){return l(e,n.toLowerCase())}},z2ZG:function(e,n,t){"use strict";var l=t("U6jy"),r=t("dKIx");e.exports=function(e){var n,t,a=e.length,i=[],o=[],u=-1;for(;++u<a;)n=e[u],i.push(n.property),o.push(n.normal),t=n.space;return new r(l.apply(null,i),l.apply(null,o),t)}},zktx:function(e,n,t){"use strict";var l=t("FWC9"),r=t("DUvi"),a=t("vGni"),i=l.boolean,o=l.number,u=l.spaceSeparated,s=l.commaSeparated,c=l.commaOrSpaceSeparated;e.exports=r({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:a,properties:{about:c,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:i,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})}}]);
//# sourceMappingURL=component---src-templates-project-page-js-46c159dc039c66293185.js.map