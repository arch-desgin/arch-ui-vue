import{d as x,u as O,b as q,e as i,f as w,o as m,g,j as D,n as B,k as t,l as E,p as I,r as U,t as n,m as V,q as y,s as G,v as z,x as K}from"./vue.esm-bundler-CexWwosR.js";import{L as C,T,h as k,w as h}from"./index-CgBX6OQU.js";const S=Symbol("BUTTON_GROUP_CTX_KEY"),_="button",L=x({name:C(_),__name:"button",props:{tag:{default:"button"},type:{default:"secondary"},status:{},size:{},htmlType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},loadingIcon:{}},emits:["click"],setup(d,{expose:u,emit:o}){const l=h(_),s=d,N=o,R=O(),a=q(S,void 0),p=i(()=>(a==null?void 0:a.type)??(s==null?void 0:s.type)??""),c=i(()=>(a==null?void 0:a.size)??(s==null?void 0:s.size)??""),r=i(()=>(a==null?void 0:a.status)??(s==null?void 0:s.status)??""),v=i(()=>(a==null?void 0:a.disabled)||(s==null?void 0:s.disabled)||!1),b=w(),f=i(()=>({marginRight:R.default?"6px":"0px"})),j=e=>N("click",e);return u({ref:b,disabled:v,type:p,size:c,status:r}),(e,P)=>(m(),g(E(e.tag),{ref_key:"_ref",ref:b,type:e.tag==="button"?e.htmlType:void 0,disabled:v.value||e.loading?!0:void 0,class:B({[`${t(l)}`]:t(l),[`${t(l)}--${p.value}`]:p.value,[`${t(l)}--${c.value}`]:c.value,[`${t(l)}-status--${r.value}`]:r.value,"is-disabled":v.value,"is-loading":e.loading}),onClick:j},{default:D(()=>[e.loading?y(e.$slots,"loading",{key:0},()=>[G(k,{class:"loading-icon",icon:e.loadingIcon??"spinner",size:"1x",style:z(f.value),spin:""},null,8,["icon","style"])]):e.icon?(m(),g(k,{key:1,icon:e.icon,style:z(f.value),size:"1x"},null,8,["icon","style"])):K("",!0),y(e.$slots,"default")]),_:3},8,["type","disabled","class"]))}}),$="button-group",M=x({name:C($),__name:"button-group",props:{size:{},type:{},status:{},disabled:{type:Boolean}},setup(d){const u=h($),o=d;return I(S,U({size:n(o,"size"),type:n(o,"type"),status:n(o,"status"),disabled:n(o,"disabled")})),(l,s)=>(m(),V("div",{class:B(t(u))},[y(l.$slots,"default")],2))}}),Y=T(L),A=T(M);export{Y as M,A as Q};
