import{_ as d,u as x,r as p,o as u,c as b,a as t,w as h,n as g,t as C,g as _,p as f,b as m}from"./index-1732ad51.js";const s=e=>(f("data-v-60cd6732"),e=e(),m(),e),y={class:"PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex",style:{margin:"5px"}},P={class:"PressableCore-base Box-root"},B=["onClick","type","disabled"],v={class:"Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row",style:{position:"relative"}},w=s(()=>t("div",{class:"TextAligner Box-root",style:{"line-height":"20px","font-size":"14px",flex:"0 0 auto"}},null,-1)),F={class:"Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center",style:{width:"100%","line-height":"0",flex:"1 1 auto"}},S={class:"Button-label Text-color--white Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block",style:{"margin-top":"-1px"}},k=s(()=>t("div",{class:"PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"},null,-1)),T={__name:"colorBtn",props:{name:String,disabled:{type:Boolean,default:!1},type:{type:String,default:"button"},id:{type:String,default:null},isActive:{type:Boolean,default:!1}},emits:["saveClick"],setup(e,{emit:o}){x(c=>({"98ff0a22":r.value}));const l=e,a=o,n=()=>{a("saveClick",l.id??"")},i=_(),r=p(i.appContext.config.globalProperties.$globalColorVariable);return(c,I)=>(u(),b("div",y,[t("div",P,[t("button",{onClick:h(n,["prevent"]),type:e.type,class:g(["UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto",{"active-class":e.isActive}]),disabled:e.disabled,style:{color:"rgb(255, 255, 255)"}},[t("div",v,[w,t("div",F,[t("span",S,[t("span",null,C(e.name),1)])])])],10,B)]),k]))}},A=d(T,[["__scopeId","data-v-60cd6732"]]);export{A as default};
