(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TJpk"),i=a.n(l),o=a("Wbzz");function s(e){var t=e.meta,a=e.image,n=e.title,l=e.description,s=e.slug,c=e.lang,m=void 0===c?"en":c;return r.a.createElement(o.StaticQuery,{query:"336482444",render:function(e){var o=e.site.siteMetadata,c=l||o.description,u=a?o.siteUrl+"/"+a:null,d=""+o.siteUrl+s;return r.a.createElement(i.a,Object.assign({htmlAttributes:{lang:m}},n?{titleTemplate:"%s — "+o.title,title:n}:{title:o.title+" — A blog by Nouran Bakry"},{meta:[{name:"description",content:c},{property:"og:url",content:d},{property:"og:title",content:n||o.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.social.twitter},{name:"twitter:title",content:n||o.title},{name:"twitter:description",content:c}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.children,a=e.style,n=void 0===a?{}:a;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},t)}},L6NH:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return l}));var n=a("KQm4");function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var a;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(a=e).toLocaleDateString.apply(a,Object(n.a)(r))}},MvKu:function(e,t,a){},SbOt:function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("caJ7"),o=a.n(i),s=a("p3AD"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2)}},l.a.createElement("img",{src:o.a,alt:"Nouran Bakry",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2),borderRadius:"50%"}}),l.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",l.a.createElement("a",{href:"https://twitter.com/nouranbakry_"},"Nouran Bakry"),"."," ","I explain with words and code."))},t}(l.a.Component);t.a=c},caJ7:function(e,t,a){e.exports=a.p+"static/profile-pic-89c6f8311ee1abd0f28fb1052ee8c858.jpg"},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},"vPK/":function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return w}));var n=a("dI71"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),o=a("mwIZ"),s=a.n(o),c=(a("vPK/"),a("SbOt")),m=a("7oih"),u=a("EYWl"),d=(a("MvKu"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e;switch(this.props.cta){case"react":e={id:"1181861",title:"Learn to Build Resilient React Components",subTitle:"Get a one week email course and learn how I think about writing React components based on 4 Principles.",buttonText:"Start Learning"};break;default:e={id:"812047",title:"Subscribe to the Newsletter",subTitle:"Subscribe to get my latest content by email.",buttonText:"Subscribe"}}return l.a.createElement("form",{action:"https://app.convertkit.com/forms/"+e.id+"/subscriptions",className:"seva-form formkit-form",method:"post","min-width":"400 500 600 700 800",style:{boxShadow:"var(--form-shadow)",backgroundColor:"var(--bg)",borderRadius:"6px"}},l.a.createElement("div",{"data-style":"full"},l.a.createElement("div",{"data-element":"column",className:"formkit-column",style:{backgroundColor:"var(--bg-secondary)"}},l.a.createElement("h1",{className:"formkit-header","data-element":"header",style:{color:"var(--textTitle)",fontSize:"20px",fontWeight:700}},e.title),l.a.createElement("div",{"data-element":"subheader",className:"formkit-subheader",style:{color:"var(--textNormal)"}},l.a.createElement("p",null,e.subTitle)),l.a.createElement("div",{className:"formkit-image"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"46",height:"46",viewBox:"0 0 46 46",style:{maxWidth:"100%"}},l.a.createElement("g",{fill:"none",fillRule:"evenodd"},l.a.createElement("path",{fill:"#DD92AB",d:"M23,36 C22.813,36 22.627,35.948 22.463,35.844 L0.463,21.844 C0.159,21.651 -0.017,21.308 0.001,20.948 C0.02,20.589 0.23,20.266 0.553,20.105 L23,6 L45.447,20.105 C45.769,20.266 45.98,20.588 45.999,20.948 C46.018,21.308 45.841,21.65 45.537,21.844 L23.537,35.844 C23.373,35.948 23.187,36 23,36 Z"}),l.a.createElement("path",{fill:"#FFF",d:"M38,37 L8,37 L8,1 C8,0.448 8.448,0 9,0 L37,0 C37.552,0 38,0.448 38,1 L38,37 Z"}),l.a.createElement("path",{fill:"#FFA7C4",d:"M45,46 C44.916,46 44.831,45.989 44.748,45.968 L21.748,39.968 L22,33 L46,21 L46,45 C46,45.31 45.856,45.602 45.611,45.792 C45.435,45.928 45.219,46 45,46 Z"}),l.a.createElement("path",{fill:"#FFC3D7",d:"M45,46 L1,46 C0.447,46 0,45.552 0,45 L0,21 L45.479,44.122 C45.88,44.341 46.083,44.804 45.969,45.247 C45.856,45.69 45.457,46 45,46 Z"}),l.a.createElement("path",{fill:"#FFA7C4",d:"M19 20.414L14.293 15.707C13.902 15.316 13.902 14.684 14.293 14.293L19 9.586 20.414 11 16.414 15 20.414 19 19 20.414zM27 20.414L25.586 19 29.586 15 25.586 11 27 9.586 31.707 14.293C32.098 14.684 32.098 15.316 31.707 15.707L27 20.414z"}))))),l.a.createElement("div",{"data-element":"column",className:"formkit-column"},l.a.createElement("ul",{className:"formkit-alert formkit-alert-error","data-element":"errors","data-group":"alert"}),l.a.createElement("div",{"data-element":"fields",className:"seva-fields formkit-fields"},l.a.createElement("div",{className:"formkit-field"},l.a.createElement("input",{className:"formkit-input","aria-label":"Your first name",name:"fields[first_name]",placeholder:"Your first name",type:"text",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400},required:!0})),l.a.createElement("div",{className:"formkit-field"},l.a.createElement("input",{className:"formkit-input",name:"email_address","aria-label":"Your email address",placeholder:"Your email address",required:!0,type:"email",style:{borderColor:"rgb(227, 227, 227)",borderRadius:"4px",color:"rgb(0, 0, 0)",fontWeight:400}})),l.a.createElement("button",{"data-element":"submit",className:"formkit-submit formkit-submit",style:{backgroundColor:"hsl(340, 63%, 55%)",borderRadius:"24px",color:"white",fontWeight:700}},l.a.createElement("div",{className:"formkit-spinner"}),l.a.createElement("span",null,e.buttonText))),l.a.createElement("div",{"data-element":"guarantee",className:"formkit-guarantee",style:{color:"var(--textNormal)",fontSize:"13px",fontWeight:400}},l.a.createElement("p",null,"I won’t send you spam."),l.a.createElement("p",null,"Unsubscribe at ",l.a.createElement("em",null,"any")," time.")))))},t}(l.a.Component)),p=a("JLKy"),f=a("L6NH"),b=a("p3AD"),h=a("k7Sn"),g={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},E=function(e){return h.supportedLanguages[e].replace(/ /g," ")},y='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',k=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,a=e.lang,n=e.languageLink,r=e.editUrl,o=t.filter((function(e){return"ru"!==e})),s=-1!==t.indexOf("ru");return l.a.createElement("div",{className:"translations"},l.a.createElement(p.a,{style:{fontFamily:y}},t.length>0&&l.a.createElement("span",null,s&&l.a.createElement("span",null,"Originally written in:"," ","en"===a?l.a.createElement("b",null,E("en")):l.a.createElement(i.Link,{to:n("en")},"English")," • ","ru"===a?l.a.createElement("b",null,"Русский (авторский перевод)"):l.a.createElement(i.Link,{to:n("ru")},"Русский (авторский перевод)"),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("span",null,"Translated by readers into: "),o.map((function(e,t){return l.a.createElement(l.a.Fragment,{key:e},e===a?l.a.createElement("b",null,E(e)):l.a.createElement(i.Link,{to:n(e)},E(e)),t===o.length-1?"":" • ")}))),"en"!==a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),"ru"!==a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Link,{to:n("en")},"Read the original")," • ",l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),l.a.createElement(i.Link,{to:"/"+a},"View all translated posts")," ")))},t}(l.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,r=n.previous,o=n.next,p=n.slug,v=n.translations,w=n.translatedLinks,L=e.fields.langKey,x=e.html;x=function(e,t){var a=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return a&&h.supportedLanguages[t]?(a.forEach((function(a){g[a]&&g[a][t]&&(e=e.replace(a,g[a][t]))})),e):e}(x,L),w.forEach((function(e){var t="/"+L+e;x=x.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')})),(v=v.slice()).sort((function(e,t){return E(e)<E(t)?-1:1})),function(e){switch(e){case"ru":case"bg":Promise.all([a.e(0),a.e(6)]).then(a.t.bind(null,"EsZP",7)),Promise.all([a.e(0),a.e(4)]).then(a.t.bind(null,"s85H",7));break;case"uk":Promise.all([a.e(0),a.e(6)]).then(a.t.bind(null,"EsZP",7)),Promise.all([a.e(0),a.e(4)]).then(a.t.bind(null,"s85H",7)),Promise.all([a.e(0),a.e(7)]).then(a.t.bind(null,"Mq6Z",7)),Promise.all([a.e(0),a.e(5)]).then(a.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([a.e(0),a.e(7)]).then(a.t.bind(null,"Mq6Z",7)),Promise.all([a.e(0),a.e(5)]).then(a.t.bind(null,"e/YJ",7));break;case"vi":Promise.all([a.e(0),a.e(20)]).then(a.t.bind(null,"Vjog",7)),Promise.all([a.e(0),a.e(19)]).then(a.t.bind(null,"Pf5Y",7));break;case"fa":Promise.all([a.e(0),a.e(18)]).then(a.t.bind(null,"BiVN",7));break;case"ar":Promise.all([a.e(0),a.e(17)]).then(a.t.bind(null,"xpFW",7))}}(L);var C=function(e,t){var a=e.replace(t+"/","");return function(e){return"en"===e?a:""+e+a}}(p,L),N=C("en"),j="https://github.com/gaearon/codeblocks.io/edit/master/src/pages/"+N.slice(1,N.length-1)+"/index"+("en"===L?"":"."+L)+".md",S="https://mobile.twitter.com/search?q="+encodeURIComponent("https://codeblocks.io"+N);return l.a.createElement(m.a,{location:this.props.location,title:t},l.a.createElement(u.a,{lang:L,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),l.a.createElement("main",null,l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),l.a.createElement("p",{style:Object.assign({},Object(b.b)(-.2),{display:"block",marginBottom:Object(b.a)(1),marginTop:Object(b.a)(-.8)})},Object(f.a)(e.frontmatter.date,L)," • "+Object(f.b)(e.timeToRead)),v.length>0&&l.a.createElement(k,{translations:v,editUrl:j,languageLink:C,lang:L})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:x}}),l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("a",{href:S,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",l.a.createElement("a",{href:j,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),l.a.createElement("aside",null,l.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:y}},l.a.createElement(d,{cta:e.frontmatter.cta})),l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(b.a)(.25)}},l.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"codeblocks")),l.a.createElement(c.a,null),l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,r&&l.a.createElement(i.Link,{to:r.fields.slug,rel:"prev",style:{marginRight:20}},"← ",r.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(i.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))))},t}(l.a.Component),w=(t.default=v,"1629186065")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d9e60368dd9f8e250266.js.map