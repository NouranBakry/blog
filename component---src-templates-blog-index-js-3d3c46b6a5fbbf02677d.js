(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"24ww":function(e,t,n){e.exports=n.p+"static/resume-1f20e2800253c2a8308bd757c1d72af7.pdf"},EYWl:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),l=n("Wbzz");function c(e){var t=e.meta,n=e.image,r=e.title,o=e.description,c=e.slug,s=e.lang,u=void 0===s?"en":s;return a.a.createElement(l.StaticQuery,{query:"336482444",render:function(e){var l=e.site.siteMetadata,s=o||l.description,m=n?l.siteUrl+"/"+n:null,p=""+l.siteUrl+c;return a.a.createElement(i.a,Object.assign({htmlAttributes:{lang:u}},r?{titleTemplate:"%s — "+l.title,title:r}:{title:l.title+" — A blog by Nouran Bakry"},{meta:[{name:"description",content:s},{property:"og:url",content:p},{property:"og:title",content:r||l.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:r||l.title},{name:"twitter:description",content:s}].concat(m?[{property:"og:image",content:m},{name:"twitter:image",content:m}]:[]).concat(t)}))}})}c.defaultProps={meta:[],title:"",slug:""},t.a=c},JLKy:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){var t=e.children,n=e.style,r=void 0===n?{}:n;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},r)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("KQm4");function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,Object(r.a)(a))}},SbOt:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("caJ7"),l=n.n(i),c=n("p3AD"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2)}},o.a.createElement("img",{src:l.a,alt:"Nouran Bakry",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",o.a.createElement("a",{href:"https://twitter.com/nouranbakry_"},"Nouran Bakry"),"."," ","I explain with words and code."))},t}(o.a.Component);t.a=s},TshS:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return h}));var r=n("dI71"),a=n("Wbzz"),o=n("L6NH"),i=n("SbOt"),l=n("q1tI"),c=n.n(l),s=n("p3AD"),u=n("24ww"),m=n.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return c.a.createElement("footer",{style:{marginTop:Object(s.a)(2.5),paddingTop:Object(s.a)(1)}},c.a.createElement("div",{style:{float:"right"}},c.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),c.a.createElement("a",{href:"https://twitter.com/nouranbakry_",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",c.a.createElement("a",{href:"https://github.com/NouranBakry",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",c.a.createElement("a",{href:m.a,target:"_blank",rel:"noopener noreferrer"},"resume"))},t}(c.a.Component),d=n("7oih"),f=(n("JLKy"),n("EYWl")),b=n("mwIZ"),g=n.n(b),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=g()(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.langKey,n=g()(this,"props.data.allMarkdownRemark.edges");return c.a.createElement(d.a,{location:this.props.location,title:e},c.a.createElement(f.a,null),c.a.createElement("aside",null,c.a.createElement(i.a,null)),c.a.createElement("main",null,n.map((function(e){var n=e.node,r=g()(n,"frontmatter.title")||n.fields.slug;return c.a.createElement("article",{key:n.fields.slug},c.a.createElement("header",null,c.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(s.a)(1),marginBottom:Object(s.a)(1/4)}},c.a.createElement(a.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},r)),c.a.createElement("small",null,Object(o.a)(n.frontmatter.date,t)," • "+Object(o.b)(n.timeToRead))),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))}))),c.a.createElement(p,null))},t}(c.a.Component),h=(t.default=y,"2493286663")},caJ7:function(e,t,n){e.exports=n.p+"static/profile-pic-89c6f8311ee1abd0f28fb1052ee8c858.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-3d3c46b6a5fbbf02677d.js.map