import{_ as f,o as _,c,a as t,t as m,d as l,v as n,p as $,b as y,r as v,B as b,H as S,h as u,I as s}from"./index-1732ad51.js";const r=o=>($("data-v-2ea18ec8"),o=o(),y(),o),I={class:"card"},x={class:"card-title"},C={class:"small-desc"},g=r(()=>t("br",null,null,-1)),k=r(()=>t("br",null,null,-1)),T=r(()=>t("br",null,null,-1)),B=r(()=>t("div",{class:"go-corner"},[t("div",{class:"go-arrow"},"→")],-1)),D={__name:"card",props:{name:{type:String,default:"Some Product"}},setup(o){return(e,a)=>(_(),c("div",null,[t("div",I,[t("p",x,m(o.name),1),t("p",C,[l(e.$slots,"header",{},()=>[n("Default Header")],!0),g,l(e.$slots,"body",{},()=>[n("Default Body")],!0),k,l(e.$slots,"footer",{},()=>[n("No footer found")],!0),T,l(e.$slots,"default",{},()=>[n("I am anonymous slot")],!0)]),B])]))}},h=f(D,[["__scopeId","data-v-2ea18ec8"]]),V={__name:"slotProp",setup(o){const e=v("from_Child_Element");return(a,d)=>(_(),c("div",null,[n(" I am slot Prop "),l(a.$slots,"default",{title:e.value}),b(t("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=i=>e.value=i)},null,512),[[S,e.value]])]))}},w={mounted(){this.$emit("slotContent",this.$slots.mySlot)}};function H(o,e,a,d,i,p){return _(),c("div",null,[l(o.$slots,"mySlot")])}const N=f(w,[["render",H]]),P=t("hr",null,null,-1),E=["value"],M=t("br",null,null,-1),R=t("h1",null,"Hello",-1),A=t("hr",null,null,-1),G={style:{display:"flex"}},L=t("p",null,"This is the header content",-1),U=t("p",null,"This is the body content",-1),j=t("p",null,"This is the footer content",-1),q=t("p",null,"This is the default ",-1),z=t("p",null," content for anonymous",-1),J={__name:"slot",setup(o){const e=v(null),a=()=>{console.log("Input Value:",e.value.value)};return(d,i)=>(_(),c("div",null,[P,t("div",null,[u(V,null,{default:s(p=>[t("div",null,[t("input",{type:"text",value:p.title,ref_key:"myRef",ref:e},null,8,E),M])]),_:1}),u(N,null,{default:s(()=>[R]),_:1}),t("button",{onClick:a},"Click Me to Get")]),n(" "+m(e.value)+" ",1),A,t("div",G,[u(h,{name:"Laptop Hp"},{header:s(()=>[L]),body:s(()=>[U]),footer:s(()=>[j]),default:s(()=>[q,z]),_:1}),u(h)])]))}};export{J as default};