var o1=Object.defineProperty,l1=Object.defineProperties;var t1=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var n1=Object.prototype.hasOwnProperty,r1=Object.prototype.propertyIsEnumerable;var F=(l,o,e)=>o in l?o1(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,T=(l,o)=>{for(var e in o||(o={}))n1.call(o,e)&&F(l,e,o[e]);if(L)for(var e of L(o))r1.call(o,e)&&F(l,e,o[e]);return l},O=(l,o)=>l1(l,t1(o));var I=(l,o,e)=>new Promise((i,_)=>{var p=a=>{try{u(e.next(a))}catch(s){_(s)}},c=a=>{try{u(e.throw(a))}catch(s){_(s)}},u=a=>a.done?i(a.value):Promise.resolve(a.value).then(p,c);u((e=e.apply(l,o)).next())});import{y as j,v as w,A as E,B as k,ao as a1,ap as s1,f as S,D as i1,ab as d1,E as W,l as c1,C as h1,k as p1,J as u1,g as C,i as m1,aq as _1,j as v1,ar as f1,r as B,a9 as b1,a1 as m,Z as y,$ as t,a2 as r,af as P,ah as Z,a6 as x,F as q,ag as N,an as g1,as as z1,al as G,at as Q,au as x1,av as y1,aw as K,ax as w1,ay as k1,a4 as n,ai as J,aj as C1,ak as $1,_ as V1}from"./index.js?v=e3tIZDap";import{_ as D1,F as M1,a as B1}from"./chunk._MZdX-_j.js";import{_ as H1}from"./chunk.tVbrEUik.js";import{_ as R1,a as A1}from"./chunk.ZEPaMeyf.js";import{N as X}from"./chunk.RVi6eQ_m.js";import{_ as Y}from"./chunk.4-dc_8KA.js";import{_ as E1}from"./chunk.ifBm6usQ.js";import{_ as P1}from"./chunk.pgZdn62H.js";import{_ as I1}from"./chunk.lyNRtYzX.js";import{_ as j1,a as S1}from"./chunk.MCOZPwiU.js";import{_ as q1}from"./chunk.pZ3eH25A.js";import"./chunk.LK1m_WWS.js";import"./chunk.4l65r8M5.js";import"./chunk.2VkDqO1d.js";import"./chunk.yyIHFmoR.js";const N1=j([w("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[E("show-divider",[w("list-item",[j("&:not(:last-child)",[k("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),E("clickable",[w("list-item",`
 cursor: pointer;
 `)]),E("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),E("hoverable",[w("list-item",`
 border-radius: var(--n-border-radius);
 `,[j("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[k("divider",`
 background-color: transparent;
 `)])])]),E("bordered, hoverable",[w("list-item",`
 padding: 12px 20px;
 `),k("header, footer",`
 padding: 12px 20px;
 `)]),k("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[j("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),w("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k("prefix",`
 margin-right: 20px;
 flex: 0;
 `),k("suffix",`
 margin-left: 20px;
 flex: 0;
 `),k("main",`
 flex: 1;
 `),k("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),a1(w("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),s1(w("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),U1=Object.assign(Object.assign({},W.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),e1=m1("n-list"),L1=S({name:"List",props:U1,setup(l){const{mergedClsPrefixRef:o,inlineThemeDisabled:e,mergedRtlRef:i}=i1(l),_=d1("List",i,o),p=W("List","-list",N1,_1,l,o);c1(e1,{showDividerRef:h1(l,"showDivider"),mergedClsPrefixRef:o});const c=p1(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:s,textColor:v,color:b,colorModal:f,colorPopover:$,borderColor:g,borderColorModal:z,borderColorPopover:D,borderRadius:H,colorHover:R,colorHoverModal:A,colorHoverPopover:h}}=p.value;return{"--n-font-size":s,"--n-bezier":a,"--n-text-color":v,"--n-color":b,"--n-border-radius":H,"--n-border-color":g,"--n-border-color-modal":z,"--n-border-color-popover":D,"--n-color-modal":f,"--n-color-popover":$,"--n-color-hover":R,"--n-color-hover-modal":A,"--n-color-hover-popover":h}}),u=e?u1("list",void 0,c,l):void 0;return{mergedClsPrefix:o,rtlEnabled:_,cssVars:e?void 0:c,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var l;const{$slots:o,mergedClsPrefix:e,onRender:i}=this;return i==null||i(),C("ul",{class:[`${e}-list`,this.rtlEnabled&&`${e}-list--rtl`,this.bordered&&`${e}-list--bordered`,this.showDivider&&`${e}-list--show-divider`,this.hoverable&&`${e}-list--hoverable`,this.clickable&&`${e}-list--clickable`,this.themeClass],style:this.cssVars},o.header?C("div",{class:`${e}-list__header`},o.header()):null,(l=o.default)===null||l===void 0?void 0:l.call(o),o.footer?C("div",{class:`${e}-list__footer`},o.footer()):null)}}),F1=S({name:"ListItem",setup(){const l=v1(e1,null);return l||f1("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:l.showDividerRef,mergedClsPrefix:l.mergedClsPrefixRef}},render(){const{$slots:l,mergedClsPrefix:o}=this;return C("li",{class:`${o}-list-item`},l.prefix?C("div",{class:`${o}-list-item__prefix`},l.prefix()):null,l.default?C("div",{class:`${o}-list-item__main`},l):null,l.suffix?C("div",{class:`${o}-list-item__suffix`},l.suffix()):null,this.showDivider&&C("div",{class:`${o}-list-item__divider`}))}}),T1=["href"],O1=S({__name:"index",props:{close:{type:Function},next:{type:Function},row:{}},setup(l){const o=l,e=B(!1),i=B(!1),_=()=>{i.value=!1,o.close()};b1(()=>{i.value=!0});const p=B({}),c=B([]),u=s=>{M1({path:"/",callback:v=>{p.value[s]=v}})},a=()=>I(this,null,function*(){var v,b;const s=window.$toast.loading("加载中...");e.value=!0;try{const f=o.row.cmds||[],$=p.value,{result:g,error:z}=yield G.istorego.docker.postDockerAppsRun({body:{cmds:f,gloss:$,args:c.value}});if(z)throw z;g&&g.logId&&(o.next(g.logId),(v=window.$message)==null||v.success("创建成功"),_())}catch(f){(b=window.$dialog)==null||b.error({title:"提示",content:`${f}`,positiveText:"确定"})}finally{e.value=!1,s.close()}});return(s,v)=>{const b=H1,f=R1,$=X,g=B1,z=A1,D=Q,H=Y,R=x1,A=y1;return m(),y(z1,null,{default:t(()=>[r(A,{show:i.value,"onUpdate:show":v[1]||(v[1]=h=>i.value=h),"on-after-leave":_,"mask-closable":!e.value,"close-on-esc":!e.value},{default:t(()=>[r(R,{style:{width:"780px"},title:"容器程序",bordered:!1,size:"huge",preset:"card",role:"dialog","aria-modal":"true"},{"header-extra":t(()=>[s.row.website?(m(),P("a",{key:0,href:s.row.website,target:"_blank",rel:"noopener noreferrer"},"查看指南",8,T1)):Z("",!0)]),footer:t(()=>[r(H,{justify:"end"},{default:t(()=>[r(D,{type:"warning",onClick:_,disabled:e.value,loading:e.value},{default:t(()=>[x("关闭")]),_:1},8,["disabled","loading"]),r(D,{type:"success",disabled:e.value,onClick:a,loading:e.value},{default:t(()=>[x("运行")]),_:1},8,["disabled","loading"])]),_:1})]),default:t(()=>[r(z,{size:"small","label-placement":"left","label-width":"100px","label-align":"left","require-mark-placement":"right-hanging"},{default:t(()=>[r(f,{label:"程序名称","show-require-mark":"",style:{"--n-feedback-height":"12px","--n-label-font-size":"1em"}},{default:t(()=>[r(b,{placeholder:"请输入程序名称",size:"small",value:s.row.title||s.row.name,disabled:""},null,8,["value"])]),_:1}),(m(!0),P(q,null,N(s.row.gloss,(h,d)=>(m(),y(f,{label:h.description,"show-require-mark":!0,style:{"--n-feedback-height":"12px","--n-label-font-size":"1em"}},{default:t(()=>[h.type==="file"?(m(),y(b,{key:0,size:"tiny",placeholder:h.description,value:p.value[d],"onUpdate:value":M=>p.value[d]=M},{suffix:t(()=>[r($,{component:g1(D1),onClick:M=>u(d)},null,8,["component","onClick"])]),_:2},1032,["placeholder","value","onUpdate:value"])):(m(),y(b,{key:1,placeholder:h.description,size:"tiny",value:p.value[d],"onUpdate:value":M=>p.value[d]=M},null,8,["placeholder","value","onUpdate:value"]))]),_:2},1032,["label"]))),256)),r(f,{label:"自定义参数",style:{"--n-feedback-height":"12px","--n-label-font-size":"1em"}},{default:t(()=>[r(g,{size:"tiny",value:c.value,"onUpdate:value":v[0]||(v[0]=h=>c.value=h),placeholder:"附加参数","show-sort-button":""},{"create-button-default":t(()=>[x(" 添加 ")]),default:t(({index:h})=>[r(b,{value:c.value[h],"onUpdate:value":d=>c.value[h]=d,type:"text",size:"tiny",placeholder:"附加参数,例如 -i"},null,8,["value","onUpdate:value"])]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["show","mask-closable","close-on-esc"])]),_:1})}}}),K1=l=>new Promise(o=>{const e=document.createElement("div");document.body.appendChild(e);const i=()=>{K(null,e),e.remove()},_=c=>{o(c)},p=r(O1,O(T({},l),{close:i,next:_}));K(p,e)}),V=l=>(C1("data-v-8cc30cdd"),l=l(),$1(),l),J1={class:"page-container"},W1=V(()=>n("br",null,null,-1)),Z1=V(()=>n("a",{href:"https://github.com/soimort/you-get",target:"_blank",rel:"noopener noreferrer"},"you-get",-1)),G1=V(()=>n("a",{href:"https://github.com/mikf/gallery-dl",target:"_blank",rel:"noopener noreferrer"},"gallery-dl",-1)),Q1=V(()=>n("br",null,null,-1)),X1=V(()=>n("code",null,' docker run --rm ubuntu echo "Hello World" ',-1)),Y1=V(()=>n("br",null,null,-1)),ee=V(()=>n("svg",{viewBox:"0 0 1803 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5589",width:"128",height:"128"},[n("path",{d:"M1042.73135 323.238214h161.583764v165.259336h81.78146a352.572099 352.572099 0 0 0 112.246289-18.872645 285.210188 285.210188 0 0 0 54.63878-24.315317 202.015048 202.015048 0 0 1-37.886657-104.471043c-4.665148-50.397736 5.513357-116.063229 39.583074-155.504936l17.034859-19.650169 20.215642 16.257334c50.963208 40.926072 93.868434 98.180162 101.431628 163.421551 61.353765-18.09512 133.451508-14.136812 187.524816 17.458963l22.194795 12.793815-11.66287 22.760268c-45.803272 89.344654-141.368123 116.982122-234.953821 112.104922-139.954442 348.543108-444.602747 513.519707-813.997653 513.519707-190.846966 0-365.931387-71.320218-465.595914-240.325809l-1.625733-2.756679-14.560917-29.545937a468.84738 468.84738 0 0 1-37.321184-237.781184l2.332574-24.386001h138.18734V323.238214h161.654449V161.654449h323.238214V0h193.957065z",fill:"#364548","p-id":"5590"}),n("path",{d:"M1566.358878 384.379927c10.814661-84.255401-52.164837-150.344999-91.253124-181.799407-45.096431 52.094153-52.094153 188.585076 18.589908 246.051219-39.441706 35.342031-122.566163 66.796438-207.599088 66.796438H250.221651a436.332712 436.332712 0 0 0 42.97591 240.325809l11.733554 21.770691a408.341824 408.341824 0 0 0 24.456685 36.685028q63.615655 4.028992 117.759647 2.827363c70.684062-1.555049 128.220888-9.895769 171.832953-25.022158a12.440395 12.440395 0 0 1 8.199352 23.537792c-5.866777 2.049838-11.874922 3.887623-18.165804 5.725409a542.217436 542.217436 0 0 1-118.749224 19.296749c2.827362 0-2.968731 0.424104-2.96873 0.424105l-5.301305 0.424104c-18.731276 1.060261-38.946918 1.272313-59.586664 1.272313-22.548216 0-44.813695-0.424104-69.694485-1.696417l-0.636156 0.424104C438.453307 938.54297 573.318497 996.645268 742.394772 996.645268c358.014772 0 661.6735-158.685718 796.185269-515.004072 95.352799 9.825085 187.030027-14.560917 228.733624-95.918272-66.372334-38.381445-151.829364-26.153103-201.025471-1.413681",fill:"#22A0C8","p-id":"5591"}),n("path",{d:"M1566.358878 384.379927c10.814661-84.255401-52.164837-150.344999-91.253124-181.799407-45.096431 52.094153-52.094153 188.585076 18.589908 246.051219-39.441706 35.342031-122.566163 66.796438-207.599088 66.796438H311.575417c-4.241044 135.996134 46.227376 239.265548 135.57203 301.679575 70.684062-1.555049 128.220888-9.895769 171.832953-25.022158a12.440395 12.440395 0 0 1 8.199352 23.537792c-5.866777 2.049838-11.874922 3.887623-18.165804 5.725409a569.501484 569.501484 0 0 1-121.930006 20.144958l-1.20163-1.060261c121.859322 62.48471 298.498792 62.272658 501.079313-15.550493 227.10789-87.224132 438.241182-253.473045 585.900186-443.613171l-6.502933 3.110099",fill:"#37B1D9","p-id":"5592"}),n("path",{d:"M252.200805 623.362739a413.855181 413.855181 0 0 0 40.996756 132.95672l11.733554 21.205218a408.341824 408.341824 0 0 0 24.456685 36.685028q63.615655 4.028992 117.759647 2.827363c70.684062-1.555049 128.220888-9.895769 171.832953-25.022158a12.440395 12.440395 0 0 1 8.199352 23.537792c-5.866777 2.049838-11.874922 3.887623-18.165804 5.725409A569.289432 569.289432 0 0 1 487.295994 841.140333h-6.149514c-18.731276 1.060261-38.664182 1.696417-59.374611 1.696417-22.548216 0-45.661904-0.424104-70.684062-1.696417 86.305239 97.049217 222.089321 155.504935 391.236281 155.504935 306.486091 0 573.177055-116.345965 728.045834-373.353213z",fill:"#1B81A5","p-id":"5593"}),n("path",{d:"M320.905713 623.362739C339.495621 706.840616 383.249055 772.506109 447.147447 817.107752c70.684062-1.555049 128.220888-9.895769 171.832953-25.022158a12.440395 12.440395 0 0 1 8.199352 23.537792c-5.866777 2.049838-11.874922 3.887623-18.165804 5.725409a577.842203 577.842203 0 0 1-122.566163 19.791538c121.788638 62.48471 297.93332 61.636502 500.51384-16.18665a1323.559053 1323.559053 0 0 0 346.351902-201.52026z",fill:"#1D91B4","p-id":"5594"}),n("path",{d:"M390.81225 350.168841h140.09581v140.09581H390.81225z m11.66287 11.733554h11.097397v116.699386h-11.097397z m20.781114 0h11.521502v116.699386h-11.521502V361.902395z m21.205218 0h11.521502v116.699386h-11.521502z m21.205219 0h11.450818v116.699386h-11.380134z m21.205218 0h11.521502v116.699386h-11.450818z m21.205219 0h11.097397v116.699386h-11.026713z m44.318906-173.317319h140.09581v140.025126H552.396014V188.585076z m11.662871 11.66287h11.026713v116.699386h-10.956029z m20.781114 0h11.450818v116.699386h-11.380134V200.247946z m21.205218 0h11.521502v116.699386h-11.450818z m21.205219 0h11.521502v116.699386h-11.450818z m21.205218 0h11.450818v116.699386h-11.30945z m21.205219 0h11.026713v116.699386h-10.885345z",fill:"#23A3C2","p-id":"5595"}),n("path",{d:"M552.466698 350.168841H692.915929v140.09581H552.466698V350.168841z m11.662871 11.733554h11.026713v116.699386h-11.026713z m20.781114 0h11.450818v116.699386h-11.450818V361.902395z m21.205218 0h11.521502v116.699386h-11.521502z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0h11.450818v116.699386h-11.380134z m21.205219 0h11.026713v116.699386h-10.956029z",fill:"#34BBDE","p-id":"5596"}),n("path",{d:"M714.121147 350.168841h140.09581v140.09581H714.121147z m11.66287 11.733554h11.097398v116.699386h-11.097398z m20.781115 0h11.521502v116.699386h-11.521502z m21.205218 0h11.450818v116.699386h-11.450818z m21.205218 0h11.521503v116.699386h-11.521503z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0h11.097398v116.699386h-11.097398z",fill:"#23A3C2","p-id":"5597"}),n("path",{d:"M714.121147 188.585076h140.09581v140.025126H714.121147z m11.66287 11.66287h11.097398v116.699386h-11.097398z m20.781115 0h11.521502v116.699386h-11.521502z m21.205218 0h11.450818v116.699386h-11.450818z m21.205218 0h11.521503v116.699386h-11.521503z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0h11.097398v116.699386h-11.097398z m44.318907 149.920895h140.09581v140.09581h-140.09581z m11.66287 11.733554h11.026714v116.699386h-11.026714z m20.781114 0h11.521502v116.699386h-11.521502z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0h11.450818v116.699386h-11.450818z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0H1003.9258v116.699386h-11.097398z",fill:"#34BBDE","p-id":"5598"}),n("path",{d:"M875.704912 188.585076h140.09581v140.025126h-140.09581z m11.66287 11.66287h11.026714v116.699386h-11.026714z m20.781114 0h11.521502v116.699386h-11.521502z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0h11.450818v116.699386h-11.450818z m21.205219 0h11.521502v116.699386h-11.521502z m21.205218 0H1003.9258v116.699386h-11.097398z",fill:"#23A3C2","p-id":"5599"}),n("path",{d:"M875.704912 26.930627h140.09581v140.09581h-140.09581z m11.66287 11.662871h11.026714V155.504935h-11.026714V38.593498z m20.781114 0h11.521502V155.504935h-11.521502V38.593498z m21.205219 0h11.521502V155.504935h-11.521502V38.593498z m21.205218 0h11.450818V155.504935h-11.450818V38.593498z m21.205219 0h11.521502V155.504935h-11.521502V38.593498z m21.205218 0H1003.9258V155.504935h-11.097398V38.593498z",fill:"#34BBDE","p-id":"5600"}),n("path",{d:"M1037.359361 350.168841h140.025126v140.09581h-140.025126z m11.66287 11.733554h11.026714v116.699386h-11.026714V361.902395z m20.781114 0h11.450818v116.699386h-11.450818V361.902395z m21.205219 0H1102.883486v116.699386h-11.521502z m21.205218 0H1124.088704v116.699386h-11.521502z m21.205219 0H1145.293923v116.699386h-11.521502z m21.205218 0h11.026714v116.699386h-11.026714z",fill:"#23A3C2","p-id":"5601"}),n("path",{d:"M683.727001 717.372541a38.664182 38.664182 0 0 1 1.060261 77.328363h-1.060261a38.664182 38.664182 0 0 1 0-77.328363",fill:"#D3ECEC","p-id":"5602"}),n("path",{d:"M683.727001 728.045834a27.84952 27.84952 0 0 1 10.037137 1.90847 11.30945 11.30945 0 1 0 15.550493 15.197073A27.637468 27.637468 0 1 1 683.727001 728.045834M0.212125 637.287499h1797.707738c-39.15897-9.895769-123.838476-23.32574-109.913715-74.642369-71.17885 82.346932-242.799752 57.819562-286.129082 16.964175-48.20653 69.977221-329.034307 43.400014-348.613791-11.097398-60.505557 70.684062-247.889004 70.684062-308.394561 0-19.579485 54.709464-300.407262 81.286671-348.825844 11.097398-43.32933 40.643335-214.950231 65.170705-286.129081-17.176227 14.136812 51.316629-70.684062 64.7466-109.913716 74.642369",fill:"#364548","p-id":"5603"}),n("path",{d:"M786.501626 995.867743c-95.706219-45.379168-148.436529-107.157037-177.487678-174.518948A593.180645 593.180645 0 0 1 480.863744 840.716228q-28.273625 1.625733-59.021191 1.625734-35.695451 0-75.207842-2.120522c87.789604 87.71892 195.724166 155.504935 395.830745 156.494512 14.772969 0 29.40457 0 44.03617-0.848209",fill:"#BDD9D7","p-id":"5604"}),n("path",{d:"M644.568031 883.55077a335.607924 335.607924 0 0 1-35.342031-62.201975A588.515497 588.515497 0 0 1 480.863744 840.716228c34.140402 18.519224 82.912404 35.342031 163.492235 42.410437",fill:"#D3ECEC","p-id":"5605"})],-1)),oe=["href"],le=S({__name:"index",setup(l){return I(this,null,function*(){let o,e;const i=w1(),_=B([]),p=()=>I(this,null,function*(){try{const{result:a}=yield G.istorego.docker.getDockerApps();a&&(_.value=a)}catch(a){console.log(a)}});[o,e]=k1(()=>p()),yield o,e();const c=B(!1),u=a=>{K1({row:a}).then(s=>i.push({name:"PageDockerLog",params:{id:s}}))};return(a,s)=>{const v=P1,b=I1,f=j1,$=X,g=E1,z=Y,D=Q,H=q1,R=S1,A=F1,h=L1;return m(),P("div",J1,[r(v,{title:"Docker 应用程序",type:"info",bordered:!1},{default:t(()=>[x(" 通过选择社区的 docker脚本 来运行容器程序,"),W1,x(" 对 复杂容器 或者 一次性容器 更方便易用，例如: "),Z1,x("， "),G1,Q1,X1,Y1]),_:1}),r(b),r(h,{hoverable:"",clickable:""},{default:t(()=>[(m(!0),P(q,null,N(_.value,(d,M)=>(m(),y(A,{key:M},{prefix:t(()=>[d.icon?(m(),y(f,{key:0,size:70,src:d.icon},null,8,["src"])):(m(),y(f,{key:1,size:70},{default:t(()=>[r($,null,{default:t(()=>[ee]),_:1})]),_:1})),d.website?(m(),y(z,{key:2,size:"small",justify:"center"},{default:t(()=>[r(g,{bordered:!1,type:"primary",size:"small"},{default:t(()=>[n("a",{target:"_blank",href:d.website},"查看指南",8,oe)]),_:2},1024)]),_:2},1024)):Z("",!0)]),suffix:t(()=>[r(z,{vertical:"",justify:"end",align:"end"},{default:t(()=>[r(D,{size:"small",type:"success",loading:c.value,disabled:c.value,onClick:U=>u(d)},{default:t(()=>[x("运行")]),_:2},1032,["loading","disabled","onClick"])]),_:2},1024)]),default:t(()=>[r(R,{title:d.title},{description:t(()=>[r(z,{size:"small",style:{"margin-top":"10px"}},{default:t(()=>[(m(!0),P(q,null,N(d.tags,U=>(m(),y(g,{bordered:!1,type:"info",size:"small"},{default:t(()=>[x(J(U),1)]),_:2},1024))),256))]),_:2},1024)]),default:t(()=>[r(H,null,{default:t(()=>[x(J(d.description),1)]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})])}})}}),ge=V1(le,[["__scopeId","data-v-8cc30cdd"]]);export{ge as default};
