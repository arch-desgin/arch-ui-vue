const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.F4OLSiUC.js","assets/chunks/framework.BsXBVO3g.js"])))=>i.map(i=>d[i]);
import{d as x,o as r,c as L,r as z,n as T,a as Y,t as B,b as w,w as M,e as h,T as l1,_ as A,u as Ze,i as ca,f as la,g as P3,h as b,j as F,k as p2,l as p,m as f,p as v2,q as t3,s as l2,v as s1,x as T3,y as s6,z as sa,A as ea,B as S2,F as I,C as U,D as e6,E as N1,G as N,H as g2,I as a6,J as y1,K as B2,L as I2,M as aa,N as C1,O as i3,P as na,Q as n6,R as k1,S as oa,U as ta,V as ia,W as o6,X as S1,Y as ra,Z as t6,$ as fa,a0 as $3,a1 as ma,a2 as za,a3 as La,a4 as ua,a5 as z1,a6 as pa,a7 as Ma,a8 as da}from"./framework.BsXBVO3g.js";const Ca=x({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(l,s)=>(r(),L("span",{class:T(["VPBadge",l.type])},[z(l.$slots,"default",{},()=>[Y(B(l.text),1)])],2))}}),ha={key:0,class:"VPBackdrop"},ga=x({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(l,s)=>(r(),w(l1,{name:"fade"},{default:M(()=>[l.show?(r(),L("div",ha)):h("",!0)]),_:1}))}}),xa=A(ga,[["__scopeId","data-v-a3c88724"]]),$=Ze;function ba(c,l){let s,e=!1;return()=>{s&&clearTimeout(s),e?s=setTimeout(c,l):(c(),(e=!0)&&setTimeout(()=>e=!1,l))}}function r3(c){return/^\//.test(c)?c:`/${c}`}function B3(c){const{pathname:l,search:s,hash:e,protocol:a}=new URL(c,"http://a.com");if(ca(c)||c.startsWith("#")||!a.startsWith("http")||!la(l))return c;const{site:n}=$(),o=l.endsWith("/")||l.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${l.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${s}${e}`);return P3(o)}function e1({removeCurrent:c=!0,correspondingLink:l=!1}={}){const{site:s,localeIndex:e,page:a,theme:n,hash:o}=$(),t=b(()=>{var m,u;return{index:e.value,label:(m=s.value.locales[e.value])==null?void 0:m.label,link:((u=s.value.locales[e.value])==null?void 0:u.link)||(e.value==="root"?"/":`/${e.value}/`)}});return{localeLinks:b(()=>Object.entries(s.value.locales).flatMap(([m,u])=>c&&t.value.label===u.label?[]:{index:m,text:u.label,link:va(u.link||(m==="root"?"/":`/${m}/`),n.value.i18nRouting!==!1&&l,a.value.relativePath.slice(t.value.link.length-1),!s.value.cleanUrls)+o.value})),currentLang:t}}function va(c,l,s,e){return l?c.replace(/\/$/,"")+r3(s.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,e?".html":"")):c}const Na={class:"NotFound"},ya={class:"code"},ka={class:"title"},Sa={class:"quote"},wa={class:"action"},Aa=["href","aria-label"],_a=x({__name:"NotFound",setup(c){const{site:l}=$(),{localeLinks:s}=e1({removeCurrent:!1}),e=F({link:"/",index:"root"});p2(()=>{const n=window.location.pathname.replace(l.value.base,"").replace(/(^.*?\/).*$/,"/$1");s.value.length&&(e.value=s.value.find(({link:o})=>o.startsWith(n))||s.value[0])});const a=b(()=>{var n,o,t,i;return{code:404,title:"PAGE NOT FOUND",quote:"But if you don't change your direction, and if you keep looking, you may end up where you are heading.",linkLabel:"go to home",linkText:"Take me home",...e.value.index==="root"?(n=l.value.themeConfig)==null?void 0:n.notFound:(i=(t=(o=l.value.locales)==null?void 0:o[e.value.index])==null?void 0:t.themeConfig)==null?void 0:i.notFound}});return(n,o)=>(r(),L("div",Na,[p("p",ya,B(a.value.code),1),p("h1",ka,B(a.value.title),1),o[0]||(o[0]=p("div",{class:"divider"},null,-1)),p("blockquote",Sa,B(a.value.quote),1),p("div",wa,[p("a",{class:"link",href:f(P3)(e.value.link),"aria-label":a.value.linkLabel},B(a.value.linkText),9,Aa)])]))}}),Pa=A(_a,[["__scopeId","data-v-624c343f"]]);function i6(c,l){if(Array.isArray(c))return u1(c);if(c==null)return[];l=r3(l);const s=Object.keys(c).sort((a,n)=>n.split("/").length-a.split("/").length).find(a=>l.startsWith(r3(a))),e=s?c[s]:[];return Array.isArray(e)?u1(e):u1(e.items,e.base)}function Ta(c){const l=[];let s=0;for(const e in c){const a=c[e];if(a.items){s=l.push(a);continue}l[s]||l.push({items:[]}),l[s].items.push(a)}return l}function $a(c){const l=[];function s(e){for(const a of e)a.text&&a.link&&l.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&s(a.items)}return s(c),l}function f3(c,l){return Array.isArray(l)?l.some(s=>f3(c,s)):v2(c,l.link)?!0:l.items?f3(c,l.items):!1}function u1(c,l){return[...c].map(s=>{const e={...s},a=e.base||l;return a&&e.link&&(e.link=a+e.link),e.items&&(e.items=u1(e.items,a)),e})}function t2(){const{frontmatter:c,page:l,theme:s}=$(),e=t3("(min-width: 960px)"),a=F(!1),n=b(()=>{const S=s.value.sidebar,_=l.value.relativePath;return S?i6(S,_):[]}),o=F(n.value);l2(n,(S,_)=>{JSON.stringify(S)!==JSON.stringify(_)&&(o.value=n.value)});const t=b(()=>c.value.sidebar!==!1&&o.value.length>0&&c.value.layout!=="home"),i=b(()=>m?c.value.aside==null?s.value.aside==="left":c.value.aside==="left":!1),m=b(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:s.value.aside!==!1),u=b(()=>t.value&&e.value),d=b(()=>t.value?Ta(o.value):[]);function C(){a.value=!0}function k(){a.value=!1}function P(){a.value?k():C()}return{isOpen:a,sidebar:o,sidebarGroups:d,hasSidebar:t,hasAside:m,leftAside:i,isSidebarEnabled:u,open:C,close:k,toggle:P}}function Ba(c,l){let s;s1(()=>{s=c.value?document.activeElement:void 0}),p2(()=>{window.addEventListener("keyup",e)}),T3(()=>{window.removeEventListener("keyup",e)});function e(a){a.key==="Escape"&&c.value&&(l(),s==null||s.focus())}}function Fa(c){const{page:l,hash:s}=$(),e=F(!1),a=b(()=>c.value.collapsed!=null),n=b(()=>!!c.value.link),o=F(!1),t=()=>{o.value=v2(l.value.relativePath,c.value.link)};l2([l,c,s],t),p2(t);const i=b(()=>o.value?!0:c.value.items?f3(l.value.relativePath,c.value.items):!1),m=b(()=>!!(c.value.items&&c.value.items.length));s1(()=>{e.value=!!(a.value&&c.value.collapsed)}),s6(()=>{(o.value||i.value)&&(e.value=!1)});function u(){a.value&&(e.value=!e.value)}return{collapsed:e,collapsible:a,isLink:n,isActiveLink:o,hasActiveLink:i,hasChildren:m,toggle:u}}function Oa(){const{hasSidebar:c}=t2(),l=t3("(min-width: 960px)"),s=t3("(min-width: 1280px)");return{isAsideEnabled:b(()=>!s.value&&!l.value?!1:c.value?s.value:l.value)}}const m3=[];function r6(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function F3(c){const l=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const e=Number(s.tagName[1]);return{element:s,title:Ea(s),link:"#"+s.id,level:e}});return Da(l,c)}function Ea(c){let l="";for(const s of c.childNodes)if(s.nodeType===1){if(s.classList.contains("VPBadge")||s.classList.contains("header-anchor")||s.classList.contains("ignore-header"))continue;l+=s.textContent}else s.nodeType===3&&(l+=s.textContent);return l.trim()}function Da(c,l){if(l===!1)return[];const s=(typeof l=="object"&&!Array.isArray(l)?l.level:l)||2,[e,a]=typeof s=="number"?[s,s]:s==="deep"?[2,6]:s;c=c.filter(o=>o.level>=e&&o.level<=a),m3.length=0;for(const{element:o,link:t}of c)m3.push({element:o,link:t});const n=[];c:for(let o=0;o<c.length;o++){const t=c[o];if(o===0)n.push(t);else{for(let i=o-1;i>=0;i--){const m=c[i];if(m.level<t.level){(m.children||(m.children=[])).push(t);continue c}}n.push(t)}}return n}function Ha(c,l){const{isAsideEnabled:s}=Oa(),e=ba(n,100);let a=null;p2(()=>{requestAnimationFrame(n),window.addEventListener("scroll",e)}),sa(()=>{o(location.hash)}),T3(()=>{window.removeEventListener("scroll",e)});function n(){if(!s.value)return;const t=window.scrollY,i=window.innerHeight,m=document.body.offsetHeight,u=Math.abs(t+i-m)<1,d=m3.map(({element:k,link:P})=>({link:P,top:Ia(k)})).filter(({top:k})=>!Number.isNaN(k)).sort((k,P)=>k.top-P.top);if(!d.length){o(null);return}if(t<1){o(null);return}if(u){o(d[d.length-1].link);return}let C=null;for(const{link:k,top:P}of d){if(P>t+ea()+4)break;C=k}o(C)}function o(t){a&&a.classList.remove("active"),t==null?a=null:a=c.value.querySelector(`a[href="${decodeURIComponent(t)}"]`);const i=a;i?(i.classList.add("active"),l.value.style.top=i.offsetTop+39+"px",l.value.style.opacity="1"):(l.value.style.top="33px",l.value.style.opacity="0")}}function Ia(c){let l=0;for(;c!==document.body;){if(c===null)return NaN;l+=c.offsetTop,c=c.offsetParent}return l}const Va=["href","title"],Ra=x({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function l({target:s}){const e=s.href.split("#")[1],a=document.getElementById(decodeURIComponent(e));a==null||a.focus({preventScroll:!0})}return(s,e)=>{const a=S2("VPDocOutlineItem",!0);return r(),L("ul",{class:T(["VPDocOutlineItem",s.root?"root":"nested"])},[(r(!0),L(I,null,U(s.headers,({children:n,link:o,title:t})=>(r(),L("li",null,[p("a",{class:"outline-link",href:o,onClick:l,title:t},B(t),9,Va),n!=null&&n.length?(r(),w(a,{key:0,headers:n},null,8,["headers"])):h("",!0)]))),256))],2)}}}),f6=A(Ra,[["__scopeId","data-v-51ab7a94"]]),ja={class:"content"},Ua={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},qa=x({__name:"VPDocAsideOutline",setup(c){const{frontmatter:l,theme:s}=$(),e=e6([]);N1(()=>{e.value=F3(l.value.outline??s.value.outline)});const a=F(),n=F();return Ha(a,n),(o,t)=>(r(),L("nav",{"aria-labelledby":"doc-outline-aria-label",class:T(["VPDocAsideOutline",{"has-outline":e.value.length>0}]),ref_key:"container",ref:a,role:"navigation"},[p("div",ja,[p("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),p("div",Ua,B(f(r6)(f(s))),1),N(f6,{headers:e.value,root:!0},null,8,["headers"])])],2))}}),Ga=A(qa,[["__scopeId","data-v-3088898f"]]),Wa={class:"VPDocAsideCarbonAds"},Xa=x({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const l=()=>null;return(s,e)=>(r(),L("div",Wa,[N(f(l),{"carbon-ads":s.carbonAds},null,8,["carbon-ads"])]))}}),Ya={class:"VPDocAside"},Ka=x({__name:"VPDocAside",setup(c){const{theme:l}=$();return(s,e)=>(r(),L("div",Ya,[z(s.$slots,"aside-top",{},void 0,!0),z(s.$slots,"aside-outline-before",{},void 0,!0),N(Ga),z(s.$slots,"aside-outline-after",{},void 0,!0),e[0]||(e[0]=p("div",{class:"spacer"},null,-1)),z(s.$slots,"aside-ads-before",{},void 0,!0),f(l).carbonAds?(r(),w(Xa,{key:0,"carbon-ads":f(l).carbonAds},null,8,["carbon-ads"])):h("",!0),z(s.$slots,"aside-ads-after",{},void 0,!0),z(s.$slots,"aside-bottom",{},void 0,!0)]))}}),Qa=A(Ka,[["__scopeId","data-v-79b3eb7f"]]);function Ja(){const{theme:c,page:l}=$();return b(()=>{const{text:s="Edit this page",pattern:e=""}=c.value.editLink||{};let a;return typeof e=="function"?a=e(l.value):a=e.replace(/:path/g,l.value.filePath),{url:a,text:s}})}function Za(){const{page:c,theme:l,frontmatter:s}=$();return b(()=>{var m,u,d,C,k,P,S,_;const e=i6(l.value.sidebar,c.value.relativePath),a=$a(e),n=cn(a,g=>g.link.replace(/[?#].*$/,"")),o=n.findIndex(g=>v2(c.value.relativePath,g.link)),t=((m=l.value.docFooter)==null?void 0:m.prev)===!1&&!s.value.prev||s.value.prev===!1,i=((u=l.value.docFooter)==null?void 0:u.next)===!1&&!s.value.next||s.value.next===!1;return{prev:t?void 0:{text:(typeof s.value.prev=="string"?s.value.prev:typeof s.value.prev=="object"?s.value.prev.text:void 0)??((d=n[o-1])==null?void 0:d.docFooterText)??((C=n[o-1])==null?void 0:C.text),link:(typeof s.value.prev=="object"?s.value.prev.link:void 0)??((k=n[o-1])==null?void 0:k.link)},next:i?void 0:{text:(typeof s.value.next=="string"?s.value.next:typeof s.value.next=="object"?s.value.next.text:void 0)??((P=n[o+1])==null?void 0:P.docFooterText)??((S=n[o+1])==null?void 0:S.text),link:(typeof s.value.next=="object"?s.value.next.link:void 0)??((_=n[o+1])==null?void 0:_.link)}}})}function cn(c,l){const s=new Set;return c.filter(e=>{const a=l(e);return s.has(a)?!1:s.add(a)})}const J=x({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const l=c,s=b(()=>l.tag??(l.href?"a":"span")),e=b(()=>l.href&&a6.test(l.href));return(a,n)=>(r(),w(g2(s.value),{class:T(["VPLink",{link:a.href,"vp-external-link-icon":e.value,"no-icon":a.noIcon}]),href:a.href?f(B3)(a.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:M(()=>[z(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),ln={class:"VPLastUpdated"},sn=["datetime"],en=x({__name:"VPDocFooterLastUpdated",setup(c){const{theme:l,page:s,frontmatter:e,lang:a}=$(),n=b(()=>new Date(e.value.lastUpdated??s.value.lastUpdated)),o=b(()=>n.value.toISOString()),t=F("");return p2(()=>{s1(()=>{var i,m,u;t.value=new Intl.DateTimeFormat((m=(i=l.value.lastUpdated)==null?void 0:i.formatOptions)!=null&&m.forceLocale?a.value:void 0,((u=l.value.lastUpdated)==null?void 0:u.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(i,m)=>{var u;return r(),L("p",ln,[Y(B(((u=f(l).lastUpdated)==null?void 0:u.text)||f(l).lastUpdatedText||"Last updated")+": ",1),p("time",{datetime:o.value},B(t.value),9,sn)])}}}),an=A(en,[["__scopeId","data-v-cfabb1d3"]]),nn={key:0,class:"VPDocFooter"},on={key:0,class:"edit-info"},tn={key:0,class:"edit-link"},rn={key:1,class:"last-updated"},fn={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},mn={class:"pager"},zn=["innerHTML"],Ln=["innerHTML"],un={class:"pager"},pn=["innerHTML"],Mn=["innerHTML"],dn=x({__name:"VPDocFooter",setup(c){const{theme:l,page:s,frontmatter:e}=$(),a=Ja(),n=Za(),o=b(()=>l.value.editLink&&e.value.editLink!==!1),t=b(()=>s.value.lastUpdated&&e.value.lastUpdated!==!1),i=b(()=>o.value||t.value||n.value.prev||n.value.next);return(m,u)=>{var d,C,k,P;return i.value?(r(),L("footer",nn,[z(m.$slots,"doc-footer-before",{},void 0,!0),o.value||t.value?(r(),L("div",on,[o.value?(r(),L("div",tn,[N(J,{class:"edit-link-button",href:f(a).url,"no-icon":!0},{default:M(()=>[u[0]||(u[0]=p("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Y(" "+B(f(a).text),1)]),_:1},8,["href"])])):h("",!0),t.value?(r(),L("div",rn,[N(an)])):h("",!0)])):h("",!0),(d=f(n).prev)!=null&&d.link||(C=f(n).next)!=null&&C.link?(r(),L("nav",fn,[u[1]||(u[1]=p("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),p("div",mn,[(k=f(n).prev)!=null&&k.link?(r(),w(J,{key:0,class:"pager-link prev",href:f(n).prev.link},{default:M(()=>{var S;return[p("span",{class:"desc",innerHTML:((S=f(l).docFooter)==null?void 0:S.prev)||"Previous page"},null,8,zn),p("span",{class:"title",innerHTML:f(n).prev.text},null,8,Ln)]}),_:1},8,["href"])):h("",!0)]),p("div",un,[(P=f(n).next)!=null&&P.link?(r(),w(J,{key:0,class:"pager-link next",href:f(n).next.link},{default:M(()=>{var S;return[p("span",{class:"desc",innerHTML:((S=f(l).docFooter)==null?void 0:S.next)||"Next page"},null,8,pn),p("span",{class:"title",innerHTML:f(n).next.text},null,8,Mn)]}),_:1},8,["href"])):h("",!0)])])):h("",!0)])):h("",!0)}}}),Cn=A(dn,[["__scopeId","data-v-3f6fa201"]]),hn={class:"container"},gn={class:"aside-container"},xn={class:"aside-content"},bn={class:"content"},vn={class:"content-container"},Nn={class:"main"},yn=x({__name:"VPDoc",setup(c){const{theme:l}=$(),s=y1(),{hasSidebar:e,hasAside:a,leftAside:n}=t2(),o=b(()=>s.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(t,i)=>{const m=S2("Content");return r(),L("div",{class:T(["VPDoc",{"has-sidebar":f(e),"has-aside":f(a)}])},[z(t.$slots,"doc-top",{},void 0,!0),p("div",hn,[f(a)?(r(),L("div",{key:0,class:T(["aside",{"left-aside":f(n)}])},[i[0]||(i[0]=p("div",{class:"aside-curtain"},null,-1)),p("div",gn,[p("div",xn,[N(Qa,null,{"aside-top":M(()=>[z(t.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":M(()=>[z(t.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":M(()=>[z(t.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":M(()=>[z(t.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":M(()=>[z(t.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":M(()=>[z(t.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):h("",!0),p("div",bn,[p("div",vn,[z(t.$slots,"doc-before",{},void 0,!0),p("main",Nn,[N(m,{class:T(["vp-doc",[o.value,f(l).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),N(Cn,null,{"doc-footer-before":M(()=>[z(t.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),z(t.$slots,"doc-after",{},void 0,!0)])])]),z(t.$slots,"doc-bottom",{},void 0,!0)],2)}}}),kn=A(yn,[["__scopeId","data-v-d59e23d3"]]),Sn=x({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const l=c,s=b(()=>l.href&&a6.test(l.href)),e=b(()=>l.tag||l.href?"a":"button");return(a,n)=>(r(),w(g2(e.value),{class:T(["VPButton",[a.size,a.theme]]),href:a.href?f(B3)(a.href):void 0,target:l.target??(s.value?"_blank":void 0),rel:l.rel??(s.value?"noreferrer":void 0)},{default:M(()=>[Y(B(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),wn=A(Sn,[["__scopeId","data-v-842f3169"]]),An=["src","alt"],_n=x({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(l,s)=>{const e=S2("VPImage",!0);return l.image?(r(),L(I,{key:0},[typeof l.image=="string"||"src"in l.image?(r(),L("img",B2({key:0,class:"VPImage"},typeof l.image=="string"?l.$attrs:{...l.image,...l.$attrs},{src:f(P3)(typeof l.image=="string"?l.image:l.image.src),alt:l.alt??(typeof l.image=="string"?"":l.image.alt||"")}),null,16,An)):(r(),L(I,{key:1},[N(e,B2({class:"dark",image:l.image.dark,alt:l.image.alt},l.$attrs),null,16,["image","alt"]),N(e,B2({class:"light",image:l.image.light,alt:l.image.alt},l.$attrs),null,16,["image","alt"])],64))],64)):h("",!0)}}}),h1=A(_n,[["__scopeId","data-v-25090c07"]]),Pn={class:"container"},Tn={class:"main"},$n={key:0,class:"name"},Bn=["innerHTML"],Fn=["innerHTML"],On=["innerHTML"],En={key:0,class:"actions"},Dn={key:0,class:"image"},Hn={class:"image-container"},In=x({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const l=I2("hero-image-slot-exists");return(s,e)=>(r(),L("div",{class:T(["VPHero",{"has-image":s.image||f(l)}])},[p("div",Pn,[p("div",Tn,[z(s.$slots,"home-hero-info-before",{},void 0,!0),z(s.$slots,"home-hero-info",{},()=>[s.name?(r(),L("h1",$n,[p("span",{innerHTML:s.name,class:"clip"},null,8,Bn)])):h("",!0),s.text?(r(),L("p",{key:1,innerHTML:s.text,class:"text"},null,8,Fn)):h("",!0),s.tagline?(r(),L("p",{key:2,innerHTML:s.tagline,class:"tagline"},null,8,On)):h("",!0)],!0),z(s.$slots,"home-hero-info-after",{},void 0,!0),s.actions?(r(),L("div",En,[(r(!0),L(I,null,U(s.actions,a=>(r(),L("div",{key:a.link,class:"action"},[N(wn,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):h("",!0),z(s.$slots,"home-hero-actions-after",{},void 0,!0)]),s.image||f(l)?(r(),L("div",Dn,[p("div",Hn,[e[0]||(e[0]=p("div",{class:"image-bg"},null,-1)),z(s.$slots,"home-hero-image",{},()=>[s.image?(r(),w(h1,{key:0,class:"image-src",image:s.image},null,8,["image"])):h("",!0)],!0)])])):h("",!0)])],2))}}),Vn=A(In,[["__scopeId","data-v-78c4b494"]]),Rn=x({__name:"VPHomeHero",setup(c){const{frontmatter:l}=$();return(s,e)=>f(l).hero?(r(),w(Vn,{key:0,class:"VPHomeHero",name:f(l).hero.name,text:f(l).hero.text,tagline:f(l).hero.tagline,image:f(l).hero.image,actions:f(l).hero.actions},{"home-hero-info-before":M(()=>[z(s.$slots,"home-hero-info-before")]),"home-hero-info":M(()=>[z(s.$slots,"home-hero-info")]),"home-hero-info-after":M(()=>[z(s.$slots,"home-hero-info-after")]),"home-hero-actions-after":M(()=>[z(s.$slots,"home-hero-actions-after")]),"home-hero-image":M(()=>[z(s.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):h("",!0)}}),jn={class:"box"},Un={key:0,class:"icon"},qn=["innerHTML"],Gn=["innerHTML"],Wn=["innerHTML"],Xn={key:4,class:"link-text"},Yn={class:"link-text-value"},Kn=x({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(l,s)=>(r(),w(J,{class:"VPFeature",href:l.link,rel:l.rel,target:l.target,"no-icon":!0,tag:l.link?"a":"div"},{default:M(()=>[p("article",jn,[typeof l.icon=="object"&&l.icon.wrap?(r(),L("div",Un,[N(h1,{image:l.icon,alt:l.icon.alt,height:l.icon.height||48,width:l.icon.width||48},null,8,["image","alt","height","width"])])):typeof l.icon=="object"?(r(),w(h1,{key:1,image:l.icon,alt:l.icon.alt,height:l.icon.height||48,width:l.icon.width||48},null,8,["image","alt","height","width"])):l.icon?(r(),L("div",{key:2,class:"icon",innerHTML:l.icon},null,8,qn)):h("",!0),p("h2",{class:"title",innerHTML:l.title},null,8,Gn),l.details?(r(),L("p",{key:3,class:"details",innerHTML:l.details},null,8,Wn)):h("",!0),l.linkText?(r(),L("div",Xn,[p("p",Yn,[Y(B(l.linkText)+" ",1),s[0]||(s[0]=p("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):h("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),Qn=A(Kn,[["__scopeId","data-v-03975080"]]),Jn={key:0,class:"VPFeatures"},Zn={class:"container"},co={class:"items"},lo=x({__name:"VPFeatures",props:{features:{}},setup(c){const l=c,s=b(()=>{const e=l.features.length;if(e){if(e===2)return"grid-2";if(e===3)return"grid-3";if(e%3===0)return"grid-6";if(e>3)return"grid-4"}else return});return(e,a)=>e.features?(r(),L("div",Jn,[p("div",Zn,[p("div",co,[(r(!0),L(I,null,U(e.features,n=>(r(),L("div",{key:n.title,class:T(["item",[s.value]])},[N(Qn,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):h("",!0)}}),so=A(lo,[["__scopeId","data-v-95611513"]]),eo=x({__name:"VPHomeFeatures",setup(c){const{frontmatter:l}=$();return(s,e)=>f(l).features?(r(),w(so,{key:0,class:"VPHomeFeatures",features:f(l).features},null,8,["features"])):h("",!0)}}),ao=x({__name:"VPHomeContent",setup(c){const{width:l}=aa({includeScrollbar:!1});return(s,e)=>(r(),L("div",{class:"vp-doc container",style:C1(f(l)?{"--vp-offset":`calc(50% - ${f(l)/2}px)`}:{})},[z(s.$slots,"default",{},void 0,!0)],4))}}),no=A(ao,[["__scopeId","data-v-4c85c17c"]]),oo={class:"VPHome"},to=x({__name:"VPHome",setup(c){const{frontmatter:l}=$();return(s,e)=>{const a=S2("Content");return r(),L("div",oo,[z(s.$slots,"home-hero-before",{},void 0,!0),N(Rn,null,{"home-hero-info-before":M(()=>[z(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":M(()=>[z(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":M(()=>[z(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":M(()=>[z(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":M(()=>[z(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),z(s.$slots,"home-hero-after",{},void 0,!0),z(s.$slots,"home-features-before",{},void 0,!0),N(eo),z(s.$slots,"home-features-after",{},void 0,!0),f(l).markdownStyles!==!1?(r(),w(no,{key:0},{default:M(()=>[N(a)]),_:1})):(r(),w(a,{key:1}))])}}}),io=A(to,[["__scopeId","data-v-525fd172"]]),ro={},fo={class:"VPPage"};function mo(c,l){const s=S2("Content");return r(),L("div",fo,[z(c.$slots,"page-top"),N(s),z(c.$slots,"page-bottom")])}const zo=A(ro,[["render",mo]]),Lo=x({__name:"VPContent",setup(c){const{page:l,frontmatter:s}=$(),{hasSidebar:e}=t2();return(a,n)=>(r(),L("div",{class:T(["VPContent",{"has-sidebar":f(e),"is-home":f(s).layout==="home"}]),id:"VPContent"},[f(l).isNotFound?z(a.$slots,"not-found",{key:0},()=>[N(Pa)],!0):f(s).layout==="page"?(r(),w(zo,{key:1},{"page-top":M(()=>[z(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":M(()=>[z(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):f(s).layout==="home"?(r(),w(io,{key:2},{"home-hero-before":M(()=>[z(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":M(()=>[z(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":M(()=>[z(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":M(()=>[z(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":M(()=>[z(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":M(()=>[z(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":M(()=>[z(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":M(()=>[z(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":M(()=>[z(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):f(s).layout&&f(s).layout!=="doc"?(r(),w(g2(f(s).layout),{key:3})):(r(),w(kn,{key:4},{"doc-top":M(()=>[z(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":M(()=>[z(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":M(()=>[z(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":M(()=>[z(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":M(()=>[z(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":M(()=>[z(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":M(()=>[z(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":M(()=>[z(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":M(()=>[z(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":M(()=>[z(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":M(()=>[z(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),uo=A(Lo,[["__scopeId","data-v-cc1d27e2"]]),po={class:"container"},Mo=["innerHTML"],Co=["innerHTML"],ho=x({__name:"VPFooter",setup(c){const{theme:l,frontmatter:s}=$(),{hasSidebar:e}=t2();return(a,n)=>f(l).footer&&f(s).footer!==!1?(r(),L("footer",{key:0,class:T(["VPFooter",{"has-sidebar":f(e)}])},[p("div",po,[f(l).footer.message?(r(),L("p",{key:0,class:"message",innerHTML:f(l).footer.message},null,8,Mo)):h("",!0),f(l).footer.copyright?(r(),L("p",{key:1,class:"copyright",innerHTML:f(l).footer.copyright},null,8,Co)):h("",!0)])],2)):h("",!0)}}),go=A(ho,[["__scopeId","data-v-a43178d4"]]);function xo(){const{theme:c,frontmatter:l}=$(),s=e6([]),e=b(()=>s.value.length>0);return N1(()=>{s.value=F3(l.value.outline??c.value.outline)}),{headers:s,hasLocalNav:e}}const bo={class:"menu-text"},vo={class:"header"},No={class:"outline"},yo=x({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const l=c,{theme:s}=$(),e=F(!1),a=F(0),n=F(),o=F();function t(d){var C;(C=n.value)!=null&&C.contains(d.target)||(e.value=!1)}l2(e,d=>{if(d){document.addEventListener("click",t);return}document.removeEventListener("click",t)}),i3("Escape",()=>{e.value=!1}),N1(()=>{e.value=!1});function i(){e.value=!e.value,a.value=window.innerHeight+Math.min(window.scrollY-l.navHeight,0)}function m(d){d.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),na(()=>{e.value=!1}))}function u(){e.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(d,C)=>(r(),L("div",{class:"VPLocalNavOutlineDropdown",style:C1({"--vp-vh":a.value+"px"}),ref_key:"main",ref:n},[d.headers.length>0?(r(),L("button",{key:0,onClick:i,class:T({open:e.value})},[p("span",bo,B(f(r6)(f(s))),1),C[0]||(C[0]=p("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(r(),L("button",{key:1,onClick:u},B(f(s).returnToTopLabel||"Return to top"),1)),N(l1,{name:"flyout"},{default:M(()=>[e.value?(r(),L("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:m},[p("div",vo,[p("a",{class:"top-link",href:"#",onClick:u},B(f(s).returnToTopLabel||"Return to top"),1)]),p("div",No,[N(f6,{headers:d.headers},null,8,["headers"])])],512)):h("",!0)]),_:1})],4))}}),ko=A(yo,[["__scopeId","data-v-de9720f9"]]),So={class:"container"},wo=["aria-expanded"],Ao={class:"menu-text"},_o=x({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:l,frontmatter:s}=$(),{hasSidebar:e}=t2(),{headers:a}=xo(),{y:n}=n6(),o=F(0);p2(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),N1(()=>{a.value=F3(s.value.outline??l.value.outline)});const t=b(()=>a.value.length===0),i=b(()=>t.value&&!e.value),m=b(()=>({VPLocalNav:!0,"has-sidebar":e.value,empty:t.value,fixed:i.value}));return(u,d)=>f(s).layout!=="home"&&(!i.value||f(n)>=o.value)?(r(),L("div",{key:0,class:T(m.value)},[p("div",So,[f(e)?(r(),L("button",{key:0,class:"menu","aria-expanded":u.open,"aria-controls":"VPSidebarNav",onClick:d[0]||(d[0]=C=>u.$emit("open-menu"))},[d[1]||(d[1]=p("span",{class:"vpi-align-left menu-icon"},null,-1)),p("span",Ao,B(f(l).sidebarMenuLabel||"Menu"),1)],8,wo)):h("",!0),N(ko,{headers:f(a),navHeight:o.value},null,8,["headers","navHeight"])])],2)):h("",!0)}}),Po=A(_o,[["__scopeId","data-v-4886666e"]]);function To(){const c=F(!1);function l(){c.value=!0,window.addEventListener("resize",a)}function s(){c.value=!1,window.removeEventListener("resize",a)}function e(){c.value?s():l()}function a(){window.outerWidth>=768&&s()}const n=y1();return l2(()=>n.path,s),{isScreenOpen:c,openScreen:l,closeScreen:s,toggleScreen:e}}const $o={},Bo={class:"VPSwitch",type:"button",role:"switch"},Fo={class:"check"},Oo={key:0,class:"icon"};function Eo(c,l){return r(),L("button",Bo,[p("span",Fo,[c.$slots.default?(r(),L("span",Oo,[z(c.$slots,"default",{},void 0,!0)])):h("",!0)])])}const Do=A($o,[["render",Eo],["__scopeId","data-v-b4c17d71"]]),Ho=x({__name:"VPSwitchAppearance",setup(c){const{isDark:l,theme:s}=$(),e=I2("toggle-appearance",()=>{l.value=!l.value}),a=b(()=>l.value?s.value.lightModeSwitchTitle||"Switch to light theme":s.value.darkModeSwitchTitle||"Switch to dark theme");return(n,o)=>(r(),w(Do,{title:a.value,class:"VPSwitchAppearance","aria-checked":f(l),onClick:f(e)},{default:M(()=>o[0]||(o[0]=[p("span",{class:"vpi-sun sun"},null,-1),p("span",{class:"vpi-moon moon"},null,-1)])),_:1},8,["title","aria-checked","onClick"]))}}),O3=A(Ho,[["__scopeId","data-v-486e2098"]]),Io={key:0,class:"VPNavBarAppearance"},Vo=x({__name:"VPNavBarAppearance",setup(c){const{site:l}=$();return(s,e)=>f(l).appearance&&f(l).appearance!=="force-dark"?(r(),L("div",Io,[N(O3)])):h("",!0)}}),Ro=A(Vo,[["__scopeId","data-v-8fa4adb8"]]),E3=F();let m6=!1,J1=0;function jo(c){const l=F(!1);if(k1){!m6&&Uo(),J1++;const s=l2(E3,e=>{var a,n,o;e===c.el.value||(a=c.el.value)!=null&&a.contains(e)?(l.value=!0,(n=c.onFocus)==null||n.call(c)):(l.value=!1,(o=c.onBlur)==null||o.call(c))});T3(()=>{s(),J1--,J1||qo()})}return oa(l)}function Uo(){document.addEventListener("focusin",z6),m6=!0,E3.value=document.activeElement}function qo(){document.removeEventListener("focusin",z6)}function z6(){E3.value=document.activeElement}const Go={class:"VPMenuLink"},Wo=x({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:l}=$();return(s,e)=>(r(),L("div",Go,[N(J,{class:T({active:f(v2)(f(l).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel},{default:M(()=>[Y(B(s.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),w1=A(Wo,[["__scopeId","data-v-e26cd953"]]),Xo={class:"VPMenuGroup"},Yo={key:0,class:"title"},Ko=x({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(l,s)=>(r(),L("div",Xo,[l.text?(r(),L("p",Yo,B(l.text),1)):h("",!0),(r(!0),L(I,null,U(l.items,e=>(r(),L(I,null,["link"in e?(r(),w(w1,{key:0,item:e},null,8,["item"])):h("",!0)],64))),256))]))}}),Qo=A(Ko,[["__scopeId","data-v-ea667f43"]]),Jo={class:"VPMenu"},Zo={key:0,class:"items"},ct=x({__name:"VPMenu",props:{items:{}},setup(c){return(l,s)=>(r(),L("div",Jo,[l.items?(r(),L("div",Zo,[(r(!0),L(I,null,U(l.items,e=>(r(),L(I,{key:e.text},["link"in e?(r(),w(w1,{key:0,item:e},null,8,["item"])):(r(),w(Qo,{key:1,text:e.text,items:e.items},null,8,["text","items"]))],64))),128))])):h("",!0),z(l.$slots,"default",{},void 0,!0)]))}}),lt=A(ct,[["__scopeId","data-v-0d123022"]]),st=["aria-expanded","aria-label"],et={key:0,class:"text"},at=["innerHTML"],nt={key:1,class:"vpi-more-horizontal icon"},ot={class:"menu"},tt=x({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const l=F(!1),s=F();jo({el:s,onBlur:e});function e(){l.value=!1}return(a,n)=>(r(),L("div",{class:"VPFlyout",ref_key:"el",ref:s,onMouseenter:n[1]||(n[1]=o=>l.value=!0),onMouseleave:n[2]||(n[2]=o=>l.value=!1)},[p("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":l.value,"aria-label":a.label,onClick:n[0]||(n[0]=o=>l.value=!l.value)},[a.button||a.icon?(r(),L("span",et,[a.icon?(r(),L("span",{key:0,class:T([a.icon,"option-icon"])},null,2)):h("",!0),a.button?(r(),L("span",{key:1,innerHTML:a.button},null,8,at)):h("",!0),n[3]||(n[3]=p("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(r(),L("span",nt))],8,st),p("div",ot,[N(lt,{items:a.items},{default:M(()=>[z(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),D3=A(tt,[["__scopeId","data-v-761f8983"]]),it=["href","aria-label","innerHTML"],rt=x({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const l=c,s=b(()=>typeof l.icon=="object"?l.icon.svg:`<span class="vpi-social-${l.icon}" />`);return(e,a)=>(r(),L("a",{class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,it))}}),ft=A(rt,[["__scopeId","data-v-a6dfa4c9"]]),mt={class:"VPSocialLinks"},zt=x({__name:"VPSocialLinks",props:{links:{}},setup(c){return(l,s)=>(r(),L("div",mt,[(r(!0),L(I,null,U(l.links,({link:e,icon:a,ariaLabel:n})=>(r(),w(ft,{key:e,icon:a,link:e,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),H3=A(zt,[["__scopeId","data-v-1a404d45"]]),Lt={key:0,class:"group translations"},ut={class:"trans-title"},pt={key:1,class:"group"},Mt={class:"item appearance"},dt={class:"label"},Ct={class:"appearance-action"},ht={key:2,class:"group"},gt={class:"item social-links"},xt=x({__name:"VPNavBarExtra",setup(c){const{site:l,theme:s}=$(),{localeLinks:e,currentLang:a}=e1({correspondingLink:!0}),n=b(()=>e.value.length&&a.value.label||l.value.appearance||s.value.socialLinks);return(o,t)=>n.value?(r(),w(D3,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:M(()=>[f(e).length&&f(a).label?(r(),L("div",Lt,[p("p",ut,B(f(a).label),1),(r(!0),L(I,null,U(f(e),i=>(r(),w(w1,{key:i.link,item:i},null,8,["item"]))),128))])):h("",!0),f(l).appearance&&f(l).appearance!=="force-dark"?(r(),L("div",pt,[p("div",Mt,[p("p",dt,B(f(s).darkModeSwitchLabel||"Appearance"),1),p("div",Ct,[N(O3)])])])):h("",!0),f(s).socialLinks?(r(),L("div",ht,[p("div",gt,[N(H3,{class:"social-links-list",links:f(s).socialLinks},null,8,["links"])])])):h("",!0)]),_:1})):h("",!0)}}),bt=A(xt,[["__scopeId","data-v-275c5ce4"]]),vt=["aria-expanded"],Nt=x({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(l,s)=>(r(),L("button",{type:"button",class:T(["VPNavBarHamburger",{active:l.active}]),"aria-label":"mobile navigation","aria-expanded":l.active,"aria-controls":"VPNavScreen",onClick:s[0]||(s[0]=e=>l.$emit("click"))},s[1]||(s[1]=[p("span",{class:"container"},[p("span",{class:"top"}),p("span",{class:"middle"}),p("span",{class:"bottom"})],-1)]),10,vt))}}),yt=A(Nt,[["__scopeId","data-v-77d5f42e"]]),kt=["innerHTML"],St=x({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:l}=$();return(s,e)=>(r(),w(J,{class:T({VPNavBarMenuLink:!0,active:f(v2)(f(l).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,noIcon:s.item.noIcon,target:s.item.target,rel:s.item.rel,tabindex:"0"},{default:M(()=>[p("span",{innerHTML:s.item.text},null,8,kt)]),_:1},8,["class","href","noIcon","target","rel"]))}}),wt=A(St,[["__scopeId","data-v-83fad1c9"]]),At=x({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const l=c,{page:s}=$(),e=n=>"link"in n?v2(s.value.relativePath,n.link,!!l.item.activeMatch):n.items.some(e),a=b(()=>e(l.item));return(n,o)=>(r(),w(D3,{class:T({VPNavBarMenuGroup:!0,active:f(v2)(f(s).relativePath,n.item.activeMatch,!!n.item.activeMatch)||a.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),_t={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Pt=x({__name:"VPNavBarMenu",setup(c){const{theme:l}=$();return(s,e)=>f(l).nav?(r(),L("nav",_t,[e[0]||(e[0]=p("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),(r(!0),L(I,null,U(f(l).nav,a=>(r(),L(I,{key:a.text},["link"in a?(r(),w(wt,{key:0,item:a},null,8,["item"])):(r(),w(At,{key:1,item:a},null,8,["item"]))],64))),128))])):h("",!0)}}),Tt=A(Pt,[["__scopeId","data-v-be2634ca"]]);function $t(c){const{localeIndex:l,theme:s}=$();function e(a){var P,S,_;const n=a.split("."),o=(P=s.value.search)==null?void 0:P.options,t=o&&typeof o=="object",i=t&&((_=(S=o.locales)==null?void 0:S[l.value])==null?void 0:_.translations)||null,m=t&&o.translations||null;let u=i,d=m,C=c;const k=n.pop();for(const g of n){let y=null;const O=C==null?void 0:C[g];O&&(y=C=O);const R=d==null?void 0:d[g];R&&(y=d=R);const j=u==null?void 0:u[g];j&&(y=u=j),O||(C=y),R||(d=y),j||(u=y)}return(u==null?void 0:u[k])??(d==null?void 0:d[k])??(C==null?void 0:C[k])??""}return e}const Bt=["aria-label"],Ft={class:"DocSearch-Button-Container"},Ot={class:"DocSearch-Button-Placeholder"},Y4=x({__name:"VPNavBarSearchButton",setup(c){const s=$t({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(e,a)=>(r(),L("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":f(s)("button.buttonAriaLabel")},[p("span",Ft,[a[0]||(a[0]=p("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),p("span",Ot,B(f(s)("button.buttonText")),1)]),a[1]||(a[1]=p("span",{class:"DocSearch-Button-Keys"},[p("kbd",{class:"DocSearch-Button-Key"}),p("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,Bt))}}),Et={class:"VPNavBarSearch"},Dt={id:"local-search"},Ht={key:1,id:"docsearch"},It=x({__name:"VPNavBarSearch",setup(c){const l=ta(()=>ia(()=>import("./VPLocalSearchBox.F4OLSiUC.js"),__vite__mapDeps([0,1]))),s=()=>null,{theme:e}=$(),a=F(!1),n=F(!1);p2(()=>{});function o(){a.value||(a.value=!0,setTimeout(t,16))}function t(){const d=new Event("keydown");d.key="k",d.metaKey=!0,window.dispatchEvent(d),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||t()},16)}function i(d){const C=d.target,k=C.tagName;return C.isContentEditable||k==="INPUT"||k==="SELECT"||k==="TEXTAREA"}const m=F(!1);i3("k",d=>{(d.ctrlKey||d.metaKey)&&(d.preventDefault(),m.value=!0)}),i3("/",d=>{i(d)||(d.preventDefault(),m.value=!0)});const u="local";return(d,C)=>{var k;return r(),L("div",Et,[f(u)==="local"?(r(),L(I,{key:0},[m.value?(r(),w(f(l),{key:0,onClose:C[0]||(C[0]=P=>m.value=!1)})):h("",!0),p("div",Dt,[N(Y4,{onClick:C[1]||(C[1]=P=>m.value=!0)})])],64)):f(u)==="algolia"?(r(),L(I,{key:1},[a.value?(r(),w(f(s),{key:0,algolia:((k=f(e).search)==null?void 0:k.options)??f(e).algolia,onVnodeBeforeMount:C[2]||(C[2]=P=>n.value=!0)},null,8,["algolia"])):h("",!0),n.value?h("",!0):(r(),L("div",Ht,[N(Y4,{onClick:o})]))],64)):h("",!0)])}}}),Vt=x({__name:"VPNavBarSocialLinks",setup(c){const{theme:l}=$();return(s,e)=>f(l).socialLinks?(r(),w(H3,{key:0,class:"VPNavBarSocialLinks",links:f(l).socialLinks},null,8,["links"])):h("",!0)}}),Rt=A(Vt,[["__scopeId","data-v-3d3300a9"]]),jt=["href","rel","target"],Ut={key:1},qt={key:2},Gt=x({__name:"VPNavBarTitle",setup(c){const{site:l,theme:s}=$(),{hasSidebar:e}=t2(),{currentLang:a}=e1(),n=b(()=>{var i;return typeof s.value.logoLink=="string"?s.value.logoLink:(i=s.value.logoLink)==null?void 0:i.link}),o=b(()=>{var i;return typeof s.value.logoLink=="string"||(i=s.value.logoLink)==null?void 0:i.rel}),t=b(()=>{var i;return typeof s.value.logoLink=="string"||(i=s.value.logoLink)==null?void 0:i.target});return(i,m)=>(r(),L("div",{class:T(["VPNavBarTitle",{"has-sidebar":f(e)}])},[p("a",{class:"title",href:n.value??f(B3)(f(a).link),rel:o.value,target:t.value},[z(i.$slots,"nav-bar-title-before",{},void 0,!0),f(s).logo?(r(),w(h1,{key:0,class:"logo",image:f(s).logo},null,8,["image"])):h("",!0),f(s).siteTitle?(r(),L("span",Ut,B(f(s).siteTitle),1)):f(s).siteTitle===void 0?(r(),L("span",qt,B(f(l).title),1)):h("",!0),z(i.$slots,"nav-bar-title-after",{},void 0,!0)],8,jt)],2))}}),Wt=A(Gt,[["__scopeId","data-v-111121ab"]]),Xt={class:"items"},Yt={class:"title"},Kt=x({__name:"VPNavBarTranslations",setup(c){const{theme:l}=$(),{localeLinks:s,currentLang:e}=e1({correspondingLink:!0});return(a,n)=>f(s).length&&f(e).label?(r(),w(D3,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:f(l).langMenuLabel||"Change language"},{default:M(()=>[p("div",Xt,[p("p",Yt,B(f(e).label),1),(r(!0),L(I,null,U(f(s),o=>(r(),w(w1,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):h("",!0)}}),Qt=A(Kt,[["__scopeId","data-v-aef2a525"]]),Jt={class:"wrapper"},Zt={class:"container"},ci={class:"title"},li={class:"content"},si={class:"content-body"},ei=x({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:l}=n6(),{hasSidebar:s}=t2(),{frontmatter:e}=$(),a=F({});return s6(()=>{a.value={"has-sidebar":s.value,home:e.value.layout==="home",top:l.value===0}}),(n,o)=>(r(),L("div",{class:T(["VPNavBar",a.value])},[p("div",Jt,[p("div",Zt,[p("div",ci,[N(Wt,null,{"nav-bar-title-before":M(()=>[z(n.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":M(()=>[z(n.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),p("div",li,[p("div",si,[z(n.$slots,"nav-bar-content-before",{},void 0,!0),N(It,{class:"search"}),N(Tt,{class:"menu"}),N(Qt,{class:"translations"}),N(Ro,{class:"appearance"}),N(Rt,{class:"social-links"}),N(bt,{class:"extra"}),z(n.$slots,"nav-bar-content-after",{},void 0,!0),N(yt,{class:"hamburger",active:n.isScreenOpen,onClick:o[0]||(o[0]=t=>n.$emit("toggle-screen"))},null,8,["active"])])])])]),o[1]||(o[1]=p("div",{class:"divider"},[p("div",{class:"divider-line"})],-1))],2))}}),ai=A(ei,[["__scopeId","data-v-6cc09486"]]),ni={key:0,class:"VPNavScreenAppearance"},oi={class:"text"},ti=x({__name:"VPNavScreenAppearance",setup(c){const{site:l,theme:s}=$();return(e,a)=>f(l).appearance&&f(l).appearance!=="force-dark"?(r(),L("div",ni,[p("p",oi,B(f(s).darkModeSwitchLabel||"Appearance"),1),N(O3)])):h("",!0)}}),ii=A(ti,[["__scopeId","data-v-fb68cdf4"]]),ri=x({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const l=I2("close-screen");return(s,e)=>(r(),w(J,{class:"VPNavScreenMenuLink",href:s.item.link,target:s.item.target,rel:s.item.rel,onClick:f(l),innerHTML:s.item.text},null,8,["href","target","rel","onClick","innerHTML"]))}}),fi=A(ri,[["__scopeId","data-v-c1c73073"]]),mi=x({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const l=I2("close-screen");return(s,e)=>(r(),w(J,{class:"VPNavScreenMenuGroupLink",href:s.item.link,target:s.item.target,rel:s.item.rel,onClick:f(l)},{default:M(()=>[Y(B(s.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),L6=A(mi,[["__scopeId","data-v-802fea4e"]]),zi={class:"VPNavScreenMenuGroupSection"},Li={key:0,class:"title"},ui=x({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(l,s)=>(r(),L("div",zi,[l.text?(r(),L("p",Li,B(l.text),1)):h("",!0),(r(!0),L(I,null,U(l.items,e=>(r(),w(L6,{key:e.text,item:e},null,8,["item"]))),128))]))}}),pi=A(ui,[["__scopeId","data-v-9aa8034d"]]),Mi=["aria-controls","aria-expanded"],di=["innerHTML"],Ci=["id"],hi={key:1,class:"group"},gi=x({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const l=c,s=F(!1),e=b(()=>`NavScreenGroup-${l.text.replace(" ","-").toLowerCase()}`);function a(){s.value=!s.value}return(n,o)=>(r(),L("div",{class:T(["VPNavScreenMenuGroup",{open:s.value}])},[p("button",{class:"button","aria-controls":e.value,"aria-expanded":s.value,onClick:a},[p("span",{class:"button-text",innerHTML:n.text},null,8,di),o[0]||(o[0]=p("span",{class:"vpi-plus button-icon"},null,-1))],8,Mi),p("div",{id:e.value,class:"items"},[(r(!0),L(I,null,U(n.items,t=>(r(),L(I,{key:t.text},["link"in t?(r(),L("div",{key:t.text,class:"item"},[N(L6,{item:t},null,8,["item"])])):(r(),L("div",hi,[N(pi,{text:t.text,items:t.items},null,8,["text","items"])]))],64))),128))],8,Ci)],2))}}),xi=A(gi,[["__scopeId","data-v-eb6e6c7d"]]),bi={key:0,class:"VPNavScreenMenu"},vi=x({__name:"VPNavScreenMenu",setup(c){const{theme:l}=$();return(s,e)=>f(l).nav?(r(),L("nav",bi,[(r(!0),L(I,null,U(f(l).nav,a=>(r(),L(I,{key:a.text},["link"in a?(r(),w(fi,{key:0,item:a},null,8,["item"])):(r(),w(xi,{key:1,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):h("",!0)}}),Ni=x({__name:"VPNavScreenSocialLinks",setup(c){const{theme:l}=$();return(s,e)=>f(l).socialLinks?(r(),w(H3,{key:0,class:"VPNavScreenSocialLinks",links:f(l).socialLinks},null,8,["links"])):h("",!0)}}),yi={class:"list"},ki=x({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:l,currentLang:s}=e1({correspondingLink:!0}),e=F(!1);function a(){e.value=!e.value}return(n,o)=>f(l).length&&f(s).label?(r(),L("div",{key:0,class:T(["VPNavScreenTranslations",{open:e.value}])},[p("button",{class:"title",onClick:a},[o[0]||(o[0]=p("span",{class:"vpi-languages icon lang"},null,-1)),Y(" "+B(f(s).label)+" ",1),o[1]||(o[1]=p("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),p("ul",yi,[(r(!0),L(I,null,U(f(l),t=>(r(),L("li",{key:t.link,class:"item"},[N(J,{class:"link",href:t.link},{default:M(()=>[Y(B(t.text),1)]),_:2},1032,["href"])]))),128))])],2)):h("",!0)}}),Si=A(ki,[["__scopeId","data-v-c6603d92"]]),wi={class:"container"},Ai=x({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const l=F(null),s=o6(k1?document.body:null);return(e,a)=>(r(),w(l1,{name:"fade",onEnter:a[0]||(a[0]=n=>s.value=!0),onAfterLeave:a[1]||(a[1]=n=>s.value=!1)},{default:M(()=>[e.open?(r(),L("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:l,id:"VPNavScreen"},[p("div",wi,[z(e.$slots,"nav-screen-content-before",{},void 0,!0),N(vi,{class:"menu"}),N(Si,{class:"translations"}),N(ii,{class:"appearance"}),N(Ni,{class:"social-links"}),z(e.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):h("",!0)]),_:3}))}}),_i=A(Ai,[["__scopeId","data-v-9b45adc5"]]),Pi={key:0,class:"VPNav"},Ti=x({__name:"VPNav",setup(c){const{isScreenOpen:l,closeScreen:s,toggleScreen:e}=To(),{frontmatter:a}=$(),n=b(()=>a.value.navbar!==!1);return S1("close-screen",s),s1(()=>{k1&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(o,t)=>n.value?(r(),L("header",Pi,[N(ai,{"is-screen-open":f(l),onToggleScreen:f(e)},{"nav-bar-title-before":M(()=>[z(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":M(()=>[z(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":M(()=>[z(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":M(()=>[z(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),N(_i,{open:f(l)},{"nav-screen-content-before":M(()=>[z(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":M(()=>[z(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):h("",!0)}}),$i=A(Ti,[["__scopeId","data-v-8da6093f"]]),Bi=["role","tabindex"],Fi={key:1,class:"items"},Oi=x({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const l=c,{collapsed:s,collapsible:e,isLink:a,isActiveLink:n,hasActiveLink:o,hasChildren:t,toggle:i}=Fa(b(()=>l.item)),m=b(()=>t.value?"section":"div"),u=b(()=>a.value?"a":"div"),d=b(()=>t.value?l.depth+2===7?"p":`h${l.depth+2}`:"p"),C=b(()=>a.value?void 0:"button"),k=b(()=>[[`level-${l.depth}`],{collapsible:e.value},{collapsed:s.value},{"is-link":a.value},{"is-active":n.value},{"has-active":o.value}]);function P(_){"key"in _&&_.key!=="Enter"||!l.item.link&&i()}function S(){l.item.link&&i()}return(_,g)=>{const y=S2("VPSidebarItem",!0);return r(),w(g2(m.value),{class:T(["VPSidebarItem",k.value])},{default:M(()=>[_.item.text?(r(),L("div",B2({key:0,class:"item",role:C.value},t6(_.item.items?{click:P,keydown:P}:{},!0),{tabindex:_.item.items&&0}),[g[1]||(g[1]=p("div",{class:"indicator"},null,-1)),_.item.link?(r(),w(J,{key:0,tag:u.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:M(()=>[(r(),w(g2(d.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),w(g2(d.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null&&_.item.items&&_.item.items.length?(r(),L("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:S,onKeydown:ra(S,["enter"]),tabindex:"0"},g[0]||(g[0]=[p("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):h("",!0)],16,Bi)):h("",!0),_.item.items&&_.item.items.length?(r(),L("div",Fi,[_.depth<5?(r(!0),L(I,{key:0},U(_.item.items,O=>(r(),w(y,{key:O.text,item:O,depth:_.depth+1},null,8,["item","depth"]))),128)):h("",!0)])):h("",!0)]),_:1},8,["class"])}}}),Ei=A(Oi,[["__scopeId","data-v-cb5918a3"]]),Di={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Hi=x({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:l,hasSidebar:s}=t2(),e=c,a=F(null),n=o6(k1?document.body:null);return l2([e,a],()=>{var o;e.open?(n.value=!0,(o=a.value)==null||o.focus()):n.value=!1},{immediate:!0,flush:"post"}),(o,t)=>f(s)?(r(),L("aside",{key:0,class:T(["VPSidebar",{open:o.open}]),ref_key:"navEl",ref:a,onClick:t[0]||(t[0]=fa(()=>{},["stop"]))},[t[2]||(t[2]=p("div",{class:"curtain"},null,-1)),p("nav",Di,[t[1]||(t[1]=p("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),z(o.$slots,"sidebar-nav-before",{},void 0,!0),(r(!0),L(I,null,U(f(l),i=>(r(),L("div",{key:i.text,class:"group"},[N(Ei,{item:i,depth:0},null,8,["item"])]))),128)),z(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):h("",!0)}}),Ii=A(Hi,[["__scopeId","data-v-3ccbe985"]]),Vi=x({__name:"VPSkipLink",setup(c){const l=y1(),s=F();l2(()=>l.path,()=>s.value.focus());function e({target:a}){const n=document.getElementById(decodeURIComponent(a.hash).slice(1));if(n){const o=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",o)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",o),n.focus(),window.scrollTo(0,0)}}return(a,n)=>(r(),L(I,null,[p("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),p("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:e}," Skip to content ")],64))}}),Ri=A(Vi,[["__scopeId","data-v-8ea2006c"]]),ji=x({__name:"Layout",setup(c){const{isOpen:l,open:s,close:e}=t2(),a=y1();l2(()=>a.path,e),Ba(l,e);const{frontmatter:n}=$(),o=$3(),t=b(()=>!!o["home-hero-image"]);return S1("hero-image-slot-exists",t),(i,m)=>{const u=S2("Content");return f(n).layout!==!1?(r(),L("div",{key:0,class:T(["Layout",f(n).pageClass])},[z(i.$slots,"layout-top",{},void 0,!0),N(Ri),N(xa,{class:"backdrop",show:f(l),onClick:f(e)},null,8,["show","onClick"]),N($i,null,{"nav-bar-title-before":M(()=>[z(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":M(()=>[z(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":M(()=>[z(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":M(()=>[z(i.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":M(()=>[z(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":M(()=>[z(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),N(Po,{open:f(l),onOpenMenu:f(s)},null,8,["open","onOpenMenu"]),N(Ii,{open:f(l)},{"sidebar-nav-before":M(()=>[z(i.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":M(()=>[z(i.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),N(uo,null,{"page-top":M(()=>[z(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":M(()=>[z(i.$slots,"page-bottom",{},void 0,!0)]),"not-found":M(()=>[z(i.$slots,"not-found",{},void 0,!0)]),"home-hero-before":M(()=>[z(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":M(()=>[z(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":M(()=>[z(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":M(()=>[z(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":M(()=>[z(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":M(()=>[z(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":M(()=>[z(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":M(()=>[z(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":M(()=>[z(i.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":M(()=>[z(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":M(()=>[z(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":M(()=>[z(i.$slots,"doc-after",{},void 0,!0)]),"doc-top":M(()=>[z(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":M(()=>[z(i.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":M(()=>[z(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":M(()=>[z(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":M(()=>[z(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":M(()=>[z(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":M(()=>[z(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":M(()=>[z(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),N(go),z(i.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),w(u,{key:1}))}}}),Ui=A(ji,[["__scopeId","data-v-0c4c6b6c"]]),qi={Layout:Ui,enhanceApp:({app:c})=>{c.component("Badge",Ca)}},K4=()=>{};let I3={},u6={},p6=null,M6={mark:K4,measure:K4};try{typeof window<"u"&&(I3=window),typeof document<"u"&&(u6=document),typeof MutationObserver<"u"&&(p6=MutationObserver),typeof performance<"u"&&(M6=performance)}catch{}const{userAgent:Q4=""}=I3.navigator||{},z2=I3,H=u6,J4=p6,L1=M6;z2.document;const i2=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",d6=~Q4.indexOf("MSIE")||~Q4.indexOf("Trident/");var V="classic",C6="duotone",G="sharp",W="sharp-duotone",Gi=[V,C6,G,W],Wi={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Z4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xi=["kit"],Yi=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ki=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ji={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Zi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},cr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},lr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},sr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},h6={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},er=["solid","regular","light","thin","duotone","brands"],g6=[1,2,3,4,5,6,7,8,9,10],ar=g6.concat([11,12,13,14,15,16,17,18,19,20]),G2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nr=[...Object.keys(cr),...er,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G2.GROUP,G2.SWAP_OPACITY,G2.PRIMARY,G2.SECONDARY].concat(g6.map(c=>"".concat(c,"x"))).concat(ar.map(c=>"w-".concat(c))),or={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},tr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ir={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const n2="___FONT_AWESOME___",z3=16,x6="fa",b6="svg-inline--fa",N2="data-fa-i2svg",L3="data-fa-pseudo-element",rr="data-fa-pseudo-element-pending",V3="data-prefix",R3="data-icon",l0="fontawesome-i2svg",fr="async",mr=["HTML","HEAD","STYLE","SCRIPT"],v6=(()=>{try{return!0}catch{return!1}})(),N6=[V,G,W];function a1(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[V]}})}const y6={...h6};y6[V]={...h6[V],...Z4.kit,...Z4["kit-duotone"]};const x2=a1(y6),u3={...sr};u3[V]={...u3[V],...c0.kit,...c0["kit-duotone"]};const Q2=a1(u3),p3={...lr};p3[V]={...p3[V],...ir.kit};const b2=a1(p3),M3={...Zi};M3[V]={...M3[V],...tr.kit};const zr=a1(M3),Lr=Yi,k6="fa-layers-text",ur=Ki,pr={...Wi};a1(pr);const Mr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Z1=G2,O2=new Set;Object.keys(Q2[V]).map(O2.add.bind(O2));Object.keys(Q2[G]).map(O2.add.bind(O2));Object.keys(Q2[W]).map(O2.add.bind(O2));const dr=[...Xi,...nr],X2=z2.FontAwesomeConfig||{};function Cr(c){var l=H.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function hr(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}H&&typeof H.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l;const a=hr(Cr(s));a!=null&&(X2[e]=a)});const S6={styleDefault:"solid",familyDefault:"classic",cssPrefix:x6,replacementClass:b6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X2.familyPrefix&&(X2.cssPrefix=X2.familyPrefix);const E2={...S6,...X2};E2.autoReplaceSvg||(E2.observeMutations=!1);const v={};Object.keys(S6).forEach(c=>{Object.defineProperty(v,c,{enumerable:!0,set:function(l){E2[c]=l,Y2.forEach(s=>s(v))},get:function(){return E2[c]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(c){E2.cssPrefix=c,Y2.forEach(l=>l(v))},get:function(){return E2.cssPrefix}});z2.FontAwesomeConfig=v;const Y2=[];function gr(c){return Y2.push(c),()=>{Y2.splice(Y2.indexOf(c),1)}}const f2=z3,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xr(c){if(!c||!i2)return;const l=H.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const s=H.head.childNodes;let e=null;for(let a=s.length-1;a>-1;a--){const n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return H.head.insertBefore(l,e),c}const br="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J2(){let c=12,l="";for(;c-- >0;)l+=br[Math.random()*62|0];return l}function V2(c){const l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function j3(c){return c.classList?V2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function w6(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vr(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(w6(c[s]),'" '),"").trim()}function A1(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function U3(c){return c.size!==K.size||c.x!==K.x||c.y!==K.y||c.rotate!==K.rotate||c.flipX||c.flipY}function Nr(c){let{transform:l,containerWidth:s,iconWidth:e}=c;const a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),i={transform:"".concat(n," ").concat(o," ").concat(t)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:i,path:m}}function yr(c){let{transform:l,width:s=z3,height:e=z3,startCentered:a=!1}=c,n="";return a&&d6?n+="translate(".concat(l.x/f2-s/2,"em, ").concat(l.y/f2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/f2,"em), calc(-50% + ").concat(l.y/f2,"em)) "):n+="translate(".concat(l.x/f2,"em, ").concat(l.y/f2,"em) "),n+="scale(".concat(l.size/f2*(l.flipX?-1:1),", ").concat(l.size/f2*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var kr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function A6(){const c=x6,l=b6,s=v.cssPrefix,e=v.replacementClass;let a=kr;if(s!==c||e!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(e))}return a}let s0=!1;function c3(){v.autoAddCss&&!s0&&(xr(A6()),s0=!0)}var Sr={mixout(){return{dom:{css:A6,insertCss:c3}}},hooks(){return{beforeDOMElementCreation(){c3()},beforeI2svg(){c3()}}}};const o2=z2||{};o2[n2]||(o2[n2]={});o2[n2].styles||(o2[n2].styles={});o2[n2].hooks||(o2[n2].hooks={});o2[n2].shims||(o2[n2].shims=[]);var Q=o2[n2];const _6=[],P6=function(){H.removeEventListener("DOMContentLoaded",P6),g1=1,_6.map(c=>c())};let g1=!1;i2&&(g1=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),g1||H.addEventListener("DOMContentLoaded",P6));function wr(c){i2&&(g1?setTimeout(c,0):_6.push(c))}function n1(c){const{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?w6(c):"<".concat(l," ").concat(vr(s),">").concat(e.map(n1).join(""),"</").concat(l,">")}function e0(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var l3=function(l,s,e,a){var n=Object.keys(l),o=n.length,t=s,i,m,u;for(e===void 0?(i=1,u=l[n[0]]):(i=0,u=e);i<o;i++)m=n[i],u=t(u,l[m],m,l);return u};function Ar(c){const l=[];let s=0;const e=c.length;for(;s<e;){const a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){const n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function d3(c){const l=Ar(c);return l.length===1?l[0].toString(16):null}function _r(c,l){const s=c.length;let e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function a0(c){return Object.keys(c).reduce((l,s)=>{const e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function C3(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:e=!1}=s,a=a0(l);typeof Q.hooks.addPack=="function"&&!e?Q.hooks.addPack(c,a0(l)):Q.styles[c]={...Q.styles[c]||{},...a},c==="fas"&&C3("fa",l)}const{styles:h2,shims:Pr}=Q,Tr={[V]:Object.values(b2[V]),[G]:Object.values(b2[G]),[W]:Object.values(b2[W])};let q3=null,T6={},$6={},B6={},F6={},O6={};const $r={[V]:Object.keys(x2[V]),[G]:Object.keys(x2[G]),[W]:Object.keys(x2[W])};function Br(c){return~dr.indexOf(c)}function Fr(c,l){const s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!Br(a)?a:null}const E6=()=>{const c=e=>l3(h2,(a,n,o)=>(a[o]=l3(n,e,{}),a),{});T6=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(t=>typeof t=="number").forEach(t=>{e[t.toString(16)]=n}),e)),$6=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(t=>typeof t=="string").forEach(t=>{e[t]=n}),e)),O6=c((e,a,n)=>{const o=a[2];return e[n]=n,o.forEach(t=>{e[t]=n}),e});const l="far"in h2||v.autoFetchSvg,s=l3(Pr,(e,a)=>{const n=a[0];let o=a[1];const t=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:t}),e},{names:{},unicodes:{}});B6=s.names,F6=s.unicodes,q3=_1(v.styleDefault,{family:v.familyDefault})};gr(c=>{q3=_1(c.styleDefault,{family:v.familyDefault})});E6();function G3(c,l){return(T6[c]||{})[l]}function Or(c,l){return($6[c]||{})[l]}function m2(c,l){return(O6[c]||{})[l]}function D6(c){return B6[c]||{prefix:null,iconName:null}}function Er(c){const l=F6[c],s=G3("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function L2(){return q3}const W3=()=>({prefix:null,iconName:null,rest:[]});function _1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=V}=l,e=x2[s][c],a=Q2[s][c]||Q2[s][e],n=c in Q.styles?c:null;return a||n||null}const Dr={[V]:Object.keys(b2[V]),[G]:Object.keys(b2[G]),[W]:Object.keys(b2[W])};function P1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=l,e={[V]:"".concat(v.cssPrefix,"-").concat(V),[G]:"".concat(v.cssPrefix,"-").concat(G),[W]:"".concat(v.cssPrefix,"-").concat(W)};let a=null,n=V;const o=Gi.filter(i=>i!==C6);o.forEach(i=>{(c.includes(e[i])||c.some(m=>Dr[i].includes(m)))&&(n=i)});const t=c.reduce((i,m)=>{const u=Fr(v.cssPrefix,m);if(h2[m]?(m=Tr[n].includes(m)?zr[n][m]:m,a=m,i.prefix=m):$r[n].indexOf(m)>-1?(a=m,i.prefix=_1(m,{family:n})):u?i.iconName=u:m!==v.replacementClass&&!o.some(d=>m===e[d])&&i.rest.push(m),!s&&i.prefix&&i.iconName){const d=a==="fa"?D6(i.iconName):{},C=m2(i.prefix,i.iconName);d.prefix&&(a=null),i.iconName=d.iconName||C||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!h2.far&&h2.fas&&!v.autoFetchSvg&&(i.prefix="fas")}return i},W3());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&n===G&&(h2.fass||v.autoFetchSvg)&&(t.prefix="fass",t.iconName=m2(t.prefix,t.iconName)||t.iconName),!t.prefix&&n===W&&(h2.fasds||v.autoFetchSvg)&&(t.prefix="fasds",t.iconName=m2(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||a==="fa")&&(t.prefix=L2()||"fas"),t}class Hr{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];const a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},C3(n,a[n]);const o=b2[V][n];o&&C3(o,a[n]),E6()})}reset(){this.definitions={}}_pullDefinitions(l,s){const e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:t}=e[a],i=t[2];l[n]||(l[n]={}),i.length>0&&i.forEach(m=>{typeof m=="string"&&(l[n][m]=t)}),l[n][o]=t}),l}}let n0=[],$2={};const F2={},Ir=Object.keys(F2);function Vr(c,l){let{mixoutsTo:s}=l;return n0=c,$2={},Object.keys(F2).forEach(e=>{Ir.indexOf(e)===-1&&delete F2[e]}),n0.forEach(e=>{const a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){const n=e.hooks();Object.keys(n).forEach(o=>{$2[o]||($2[o]=[]),$2[o].push(n[o])})}e.provides&&e.provides(F2)}),s}function h3(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return($2[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function y2(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];($2[c]||[]).forEach(n=>{n.apply(null,s)})}function u2(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return F2[c]?F2[c].apply(null,l):void 0}function g3(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const s=c.prefix||L2();if(l)return l=m2(s,l)||l,e0(H6.definitions,s,l)||e0(Q.styles,s,l)}const H6=new Hr,Rr=()=>{v.autoReplaceSvg=!1,v.observeMutations=!1,y2("noAuto")},jr={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i2?(y2("beforeI2svg",c),u2("pseudoElements2svg",c),u2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,wr(()=>{qr({autoReplaceSvgRoot:l}),y2("watch",c)})}},Ur={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:m2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=_1(c[0]);return{prefix:s,iconName:m2(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(v.cssPrefix,"-"))>-1||c.match(Lr))){const l=P1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||L2(),iconName:m2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=L2();return{prefix:l,iconName:m2(l,c)||c}}}},X={noAuto:Rr,config:v,dom:jr,parse:Ur,library:H6,findIconDefinition:g3,toHtml:n1},qr=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=H}=c;(Object.keys(Q.styles).length>0||v.autoFetchSvg)&&i2&&v.autoReplaceSvg&&X.dom.i2svg({node:l})};function T1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>n1(s))}}),Object.defineProperty(c,"node",{get:function(){if(!i2)return;const s=H.createElement("div");return s.innerHTML=c.html,s.children}}),c}function Gr(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(U3(o)&&s.found&&!e.found){const{width:t,height:i}=s,m={x:t/i/2,y:.5};a.style=A1({...n,"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:l}]}function Wr(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(v.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:e}]}]}function X3(c){const{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:t,maskId:i,titleId:m,extra:u,watchable:d=!1}=c,{width:C,height:k}=s.found?s:l,P=e==="fak",S=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(j=>u.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(u.classes).join(" ");let _={children:[],attributes:{...u.attributes,"data-prefix":e,"data-icon":a,class:S,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(k)}};const g=P&&!~u.classes.indexOf("fa-fw")?{width:"".concat(C/k*16*.0625,"em")}:{};d&&(_.attributes[N2]=""),t&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(m||J2())},children:[t]}),delete _.attributes.title);const y={..._,prefix:e,iconName:a,main:l,mask:s,maskId:i,transform:n,symbol:o,styles:{...g,...u.styles}},{children:O,attributes:R}=s.found&&l.found?u2("generateAbstractMask",y)||{children:[],attributes:{}}:u2("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=O,y.attributes=R,o?Wr(y):Gr(y)}function o0(c){const{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:t=!1}=c,i={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};t&&(i[N2]="");const m={...o.styles};U3(a)&&(m.transform=yr({transform:a,startCentered:!0,width:s,height:e}),m["-webkit-transform"]=m.transform);const u=A1(m);u.length>0&&(i.style=u);const d=[];return d.push({tag:"span",attributes:i,children:[l]}),n&&d.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),d}function Xr(c){const{content:l,title:s,extra:e}=c,a={...e.attributes,...s?{title:s}:{},class:e.classes.join(" ")},n=A1(e.styles);n.length>0&&(a.style=n);const o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}const{styles:s3}=Q;function x3(c){const l=c[0],s=c[1],[e]=c.slice(4);let a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z1.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Z1.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}const Yr={found:!1,width:512,height:512};function Kr(c,l){!v6&&!v.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function b3(c,l){let s=l;return l==="fa"&&v.styleDefault!==null&&(l=L2()),new Promise((e,a)=>{if(s==="fa"){const n=D6(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&s3[l]&&s3[l][c]){const n=s3[l][c];return e(x3(n))}Kr(c,l),e({...Yr,icon:v.showMissingIcons&&c?u2("missingIconAbstract")||{}:{}})})}const t0=()=>{},v3=v.measurePerformance&&L1&&L1.mark&&L1.measure?L1:{mark:t0,measure:t0},W2='FA "6.6.0"',Qr=c=>(v3.mark("".concat(W2," ").concat(c," begins")),()=>I6(c)),I6=c=>{v3.mark("".concat(W2," ").concat(c," ends")),v3.measure("".concat(W2," ").concat(c),"".concat(W2," ").concat(c," begins"),"".concat(W2," ").concat(c," ends"))};var Y3={begin:Qr,end:I6};const p1=()=>{};function i0(c){return typeof(c.getAttribute?c.getAttribute(N2):null)=="string"}function Jr(c){const l=c.getAttribute?c.getAttribute(V3):null,s=c.getAttribute?c.getAttribute(R3):null;return l&&s}function Zr(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(v.replacementClass)}function cf(){return v.autoReplaceSvg===!0?M1.replace:M1[v.autoReplaceSvg]||M1.replace}function lf(c){return H.createElementNS("http://www.w3.org/2000/svg",c)}function sf(c){return H.createElement(c)}function V6(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=c.tag==="svg"?lf:sf}=l;if(typeof c=="string")return H.createTextNode(c);const e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(V6(n,{ceFn:s}))}),e}function ef(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const M1={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(V6(s),l)}),l.getAttribute(N2)===null&&v.keepOriginalSource){let s=H.createComment(ef(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){const l=c[0],s=c[1];if(~j3(l).indexOf(v.replacementClass))return M1.replace(c);const e=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===v.replacementClass||t.match(e)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const a=s.map(n=>n1(n)).join(`
`);l.setAttribute(N2,""),l.innerHTML=a}};function r0(c){c()}function R6(c,l){const s=typeof l=="function"?l:p1;if(c.length===0)s();else{let e=r0;v.mutateApproach===fr&&(e=z2.requestAnimationFrame||r0),e(()=>{const a=cf(),n=Y3.begin("mutate");c.map(a),n(),s()})}}let K3=!1;function j6(){K3=!0}function N3(){K3=!1}let x1=null;function f0(c){if(!J4||!v.observeMutations)return;const{treeCallback:l=p1,nodeCallback:s=p1,pseudoElementsCallback:e=p1,observeMutationsRoot:a=H}=c;x1=new J4(n=>{if(K3)return;const o=L2();V2(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!i0(t.addedNodes[0])&&(v.searchPseudoElements&&e(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&v.searchPseudoElements&&e(t.target.parentNode),t.type==="attributes"&&i0(t.target)&&~Mr.indexOf(t.attributeName))if(t.attributeName==="class"&&Jr(t.target)){const{prefix:i,iconName:m}=P1(j3(t.target));t.target.setAttribute(V3,i||o),m&&t.target.setAttribute(R3,m)}else Zr(t.target)&&s(t.target)})}),i2&&x1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function af(){x1&&x1.disconnect()}function nf(c){const l=c.getAttribute("style");let s=[];return l&&(s=l.split(";").reduce((e,a)=>{const n=a.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(e[o]=t.join(":").trim()),e},{})),s}function of(c){const l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"";let a=P1(j3(c));return a.prefix||(a.prefix=L2()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=Or(a.prefix,c.innerText)||G3(a.prefix,d3(c.innerText))),!a.iconName&&v.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function tf(c){const l=V2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return v.autoA11y&&(s?l["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||J2()):(l["aria-hidden"]="true",l.focusable="false")),l}function rf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function m0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:e,rest:a}=of(c),n=tf(c),o=h3("parseNodeAttributes",{},c);let t=l.styleParser?nf(c):[];return{iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t,attributes:n},...o}}const{styles:ff}=Q;function U6(c){const l=v.autoReplaceSvg==="nest"?m0(c,{styleParser:!1}):m0(c);return~l.extra.classes.indexOf(k6)?u2("generateLayersText",c,l):u2("generateSvgReplacementMutation",c,l)}let Z=new Set;N6.map(c=>{Z.add("fa-".concat(c))});Object.keys(x2[V]).map(Z.add.bind(Z));Object.keys(x2[G]).map(Z.add.bind(Z));Object.keys(x2[W]).map(Z.add.bind(Z));Z=[...Z];function z0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!i2)return Promise.resolve();const s=H.documentElement.classList,e=u=>s.add("".concat(l0,"-").concat(u)),a=u=>s.remove("".concat(l0,"-").concat(u)),n=v.autoFetchSvg?Z:N6.map(u=>"fa-".concat(u)).concat(Object.keys(ff));n.includes("fa")||n.push("fa");const o=[".".concat(k6,":not([").concat(N2,"])")].concat(n.map(u=>".".concat(u,":not([").concat(N2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=V2(c.querySelectorAll(o))}catch{}if(t.length>0)e("pending"),a("complete");else return Promise.resolve();const i=Y3.begin("onTree"),m=t.reduce((u,d)=>{try{const C=U6(d);C&&u.push(C)}catch(C){v6||C.name==="MissingIcon"&&console.error(C)}return u},[]);return new Promise((u,d)=>{Promise.all(m).then(C=>{R6(C,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),i(),u()})}).catch(C=>{i(),d(C)})})}function mf(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;U6(c).then(s=>{s&&R6([s],l)})}function zf(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const e=(l||{}).icon?l:g3(l||{});let{mask:a}=s;return a&&(a=(a||{}).icon?a:g3(a||{})),c(e,{...s,mask:a})}}const Lf=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=K,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:t=null,classes:i=[],attributes:m={},styles:u={}}=l;if(!c)return;const{prefix:d,iconName:C,icon:k}=c;return T1({type:"icon",...c},()=>(y2("beforeDOMElementCreation",{iconDefinition:c,params:l}),v.autoA11y&&(o?m["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(t||J2()):(m["aria-hidden"]="true",m.focusable="false")),X3({icons:{main:x3(k),mask:a?x3(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:C,transform:{...K,...s},symbol:e,title:o,maskId:n,titleId:t,extra:{attributes:m,styles:u,classes:i}})))};var uf={mixout(){return{icon:zf(Lf)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=z0,c.nodeCallback=mf,c}}},provides(c){c.i2svg=function(l){const{node:s=H,callback:e=()=>{}}=l;return z0(s,e)},c.generateSvgReplacementMutation=function(l,s){const{iconName:e,title:a,titleId:n,prefix:o,transform:t,symbol:i,mask:m,maskId:u,extra:d}=s;return new Promise((C,k)=>{Promise.all([b3(e,o),m.iconName?b3(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[S,_]=P;C([l,X3({icons:{main:S,mask:_},prefix:o,iconName:e,transform:t,symbol:i,maskId:u,title:a,titleId:n,extra:d,watchable:!0})])}).catch(k)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l;const t=A1(o);t.length>0&&(e.style=t);let i;return U3(n)&&(i=u2("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(i||a.icon),{children:s,attributes:e}}}},pf={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=l;return T1({type:"layer"},()=>{y2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},Mf={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return T1({type:"counter",content:c},()=>(y2("beforeDOMElementCreation",{content:c,params:l}),Xr({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(v.cssPrefix,"-layers-counter"),...e]}})))}}}},df={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=K,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return T1({type:"text",content:c},()=>(y2("beforeDOMElementCreation",{content:c,params:l}),o0({content:c,transform:{...K,...s},title:e,extra:{attributes:n,styles:o,classes:["".concat(v.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){const{title:e,transform:a,extra:n}=s;let o=null,t=null;if(d6){const i=parseInt(getComputedStyle(l).fontSize,10),m=l.getBoundingClientRect();o=m.width/i,t=m.height/i}return v.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,o0({content:l.innerHTML,width:o,height:t,transform:a,title:e,extra:n,watchable:!0})])}}};const Cf=new RegExp('"',"ug"),L0=[1105920,1112319],u0={FontAwesome:{normal:"fas",400:"fas"},...Ji,...Qi,...or},y3=Object.keys(u0).reduce((c,l)=>(c[l.toLowerCase()]=u0[l],c),{}),hf=Object.keys(y3).reduce((c,l)=>{const s=y3[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function gf(c){const l=c.replace(Cf,""),s=_r(l,0),e=s>=L0[0]&&s<=L0[1],a=l.length===2?l[0]===l[1]:!1;return{value:d3(a?l[0]:l),isSecondary:e||a}}function xf(c,l){const s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(y3[s]||{})[a]||hf[s]}function p0(c,l){const s="".concat(rr).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();const o=V2(c.children).filter(C=>C.getAttribute(L3)===l)[0],t=z2.getComputedStyle(c,l),i=t.getPropertyValue("font-family"),m=i.match(ur),u=t.getPropertyValue("font-weight"),d=t.getPropertyValue("content");if(o&&!m)return c.removeChild(o),e();if(m&&d!=="none"&&d!==""){const C=t.getPropertyValue("content");let k=xf(i,u);const{value:P,isSecondary:S}=gf(C),_=m[0].startsWith("FontAwesome");let g=G3(k,P),y=g;if(_){const O=Er(P);O.iconName&&O.prefix&&(g=O.iconName,k=O.prefix)}if(g&&!S&&(!o||o.getAttribute(V3)!==k||o.getAttribute(R3)!==y)){c.setAttribute(s,y),o&&c.removeChild(o);const O=rf(),{extra:R}=O;R.attributes[L3]=l,b3(g,k).then(j=>{const m1=X3({...O,icons:{main:j,mask:W3()},prefix:k,iconName:y,extra:R,watchable:!0}),C2=H.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(C2,c.firstChild):c.appendChild(C2),C2.outerHTML=m1.map(Je=>n1(Je)).join(`