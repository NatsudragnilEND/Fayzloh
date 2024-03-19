import{c as E,a as n,h as q,b as le,i as oe,e as M,r as p,w,o as Re,d as Xe,g as ne,l as ie,u as Ye,f as Ze,j as et,k as tt,m as at,n as lt,p as ot,q as we,s as qe,t as K,v as Ce,x as nt,y as Ve,z as it,A as ut,B as me,C as Z,D as rt,E as st,F as dt,G as ct,H as ft,I as he,J as V,K as F,L as y,M as m,Q as vt,N as G,O as ge,P as j,R as ee,S as mt,T as ye,U as ht,V as gt,W as te}from"./index.6907c00b.js";import{Q as pe,T as be,b as ae,a as yt}from"./QScrollObserver.f842e0c0.js";import{Q as bt}from"./QImg.4d80ecd1.js";import{Q as Le,a as J,b as I,c as wt}from"./QItemLabel.8c38a0ab.js";import{q as $e,c as Be,o as Te,a as pt,d as ze}from"./firebase.02bcd041.js";var xt=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:S}){const h=n(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:h.value},le(S.default))}}),_t=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:S}){const h=n(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:h.value,role:"toolbar"},le(S.default))}}),kt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:S,emit:h}){const{proxy:{$q:c}}=ne(),u=oe(ie,M);if(u===M)return console.error("QHeader needs to be child of QLayout"),M;const v=p(parseInt(e.heightHint,10)),B=p(!0),P=n(()=>e.reveal===!0||u.view.value.indexOf("H")!==-1||c.platform.is.ios&&u.isContainer.value===!0),b=n(()=>{if(e.modelValue!==!0)return 0;if(P.value===!0)return B.value===!0?v.value:0;const o=v.value-u.scroll.value.position;return o>0?o:0}),C=n(()=>e.modelValue!==!0||P.value===!0&&B.value!==!0),a=n(()=>e.modelValue===!0&&C.value===!0&&e.reveal===!0),z=n(()=>"q-header q-layout__section--marginal "+(P.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(C.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),L=n(()=>{const o=u.rows.value.top,$={};return o[0]==="l"&&u.left.space===!0&&($[c.lang.rtl===!0?"right":"left"]=`${u.left.size}px`),o[2]==="r"&&u.right.space===!0&&($[c.lang.rtl===!0?"left":"right"]=`${u.right.size}px`),$});function k(o,$){u.update("header",o,$)}function g(o,$){o.value!==$&&(o.value=$)}function x({height:o}){g(v,o),k("size",o)}function _(o){a.value===!0&&g(B,!0),h("focusin",o)}w(()=>e.modelValue,o=>{k("space",o),g(B,!0),u.animate()}),w(b,o=>{k("offset",o)}),w(()=>e.reveal,o=>{o===!1&&g(B,e.modelValue)}),w(B,o=>{u.animate(),h("reveal",o)}),w(u.scroll,o=>{e.reveal===!0&&g(B,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const f={};return u.instances.header=f,e.modelValue===!0&&k("size",v.value),k("space",e.modelValue),k("offset",b.value),Re(()=>{u.instances.header===f&&(u.instances.header=void 0,k("size",0),k("offset",0),k("space",!1))}),()=>{const o=Xe(S.default,[]);return e.elevated===!0&&o.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(q(pe,{debounce:0,onResize:x})),q("header",{class:z.value,style:L.value,onFocusin:_},o)}}});const Qe=150;var Oe=E({name:"QDrawer",inheritAttrs:!1,props:{...Ye,...Ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...et,"onLayout","miniState"],setup(e,{slots:S,emit:h,attrs:c}){const u=ne(),{proxy:{$q:v}}=u,B=tt(e,v),{preventBodyScroll:P}=nt(),{registerTimeout:b,removeTimeout:C}=at(),a=oe(ie,M);if(a===M)return console.error("QDrawer needs to be child of QLayout"),M;let z,L=null,k;const g=p(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),x=n(()=>e.mini===!0&&g.value!==!0),_=n(()=>x.value===!0?e.miniWidth:e.width),f=p(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),o=n(()=>e.persistent!==!0&&(g.value===!0||Ie.value===!0));function $(t,s){if(r(),t!==!1&&a.animate(),R(0),g.value===!0){const O=a.instances[X.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),H(1),a.isContainer.value!==!0&&P(!0)}else H(0),t!==!1&&ce(!1);b(()=>{t!==!1&&ce(!0),s!==!0&&h("show",t)},Qe)}function l(t,s){Q(),t!==!1&&a.animate(),H(0),R(A.value*_.value),fe(),s!==!0?b(()=>{h("hide",t)},Qe):C()}const{show:i,hide:d}=lt({showing:f,hideOnRouteChange:o,handleShow:$,handleHide:l}),{addToHistory:r,removeFromHistory:Q}=ot(f,d,o),T={belowBreakpoint:g,hide:d},D=n(()=>e.side==="right"),A=n(()=>(v.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),xe=p(0),N=p(!1),ue=p(!1),_e=p(_.value*A.value),X=n(()=>D.value===!0?"left":"right"),re=n(()=>f.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),se=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(D.value?"R":"L")!==-1||v.platform.is.ios===!0&&a.isContainer.value===!0),U=n(()=>e.overlay===!1&&f.value===!0&&g.value===!1),Ie=n(()=>e.overlay===!0&&f.value===!0&&g.value===!1),De=n(()=>"fullscreen q-drawer__backdrop"+(f.value===!1&&N.value===!1?" hidden":"")),Me=n(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),ke=n(()=>D.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),He=n(()=>D.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),We=n(()=>{const t={};return a.header.space===!0&&ke.value===!1&&(se.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&He.value===!1&&(se.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Fe=n(()=>{const t={width:`${_.value}px`,transform:`translateX(${_e.value}px)`};return g.value===!0?t:Object.assign(t,We.value)}),Ae=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ne=n(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(B.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":f.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(se.value===!0||U.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ke.value===!0?" q-drawer--top-padding":""))),Ee=n(()=>{const t=v.lang.rtl===!0?e.side:X.value;return[[be,Ke,void 0,{[t]:!0,mouse:!0}]]}),Ue=n(()=>{const t=v.lang.rtl===!0?X.value:e.side;return[[be,Se,void 0,{[t]:!0,mouse:!0}]]}),je=n(()=>{const t=v.lang.rtl===!0?X.value:e.side;return[[be,Se,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){Ge(g,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}w(g,t=>{t===!0?(z=f.value,f.value===!0&&d(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(f.value===!0?(R(0),H(0),fe()):i(!1))}),w(()=>e.side,(t,s)=>{a.instances[s]===T&&(a.instances[s]=void 0,a[s].space=!1,a[s].offset=0),a.instances[t]=T,a[t].size=_.value,a[t].space=U.value,a[t].offset=re.value}),w(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),w(()=>e.behavior+e.breakpoint,de),w(a.isContainer,t=>{f.value===!0&&P(t!==!0),t===!0&&de()}),w(a.scrollbarWidth,()=>{R(f.value===!0?0:void 0)}),w(re,t=>{W("offset",t)}),w(U,t=>{h("onLayout",t),W("space",t)}),w(D,()=>{R()}),w(_,t=>{R(),ve(e.miniToOverlay,t)}),w(()=>e.miniToOverlay,t=>{ve(t,_.value)}),w(()=>v.lang.rtl,()=>{R()}),w(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Je(),a.animate())}),w(x,t=>{h("miniState",t)});function R(t){t===void 0?qe(()=>{t=f.value===!0?0:_.value,R(A.value*t)}):(a.isContainer.value===!0&&D.value===!0&&(g.value===!0||Math.abs(t)===_.value)&&(t+=A.value*a.scrollbarWidth.value),_e.value=t)}function H(t){xe.value=t}function ce(t){const s=t===!0?"remove":a.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function Je(){L!==null&&clearTimeout(L),u.proxy&&u.proxy.$el&&u.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,L=setTimeout(()=>{L=null,ue.value=!1,u&&u.proxy&&u.proxy.$el&&u.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ke(t){if(f.value!==!1)return;const s=_.value,O=ae(t.distance.x,0,s);if(t.isFinal===!0){O>=Math.min(75,s)===!0?i():(a.animate(),H(0),R(A.value*s)),N.value=!1;return}R((v.lang.rtl===!0?D.value!==!0:D.value)?Math.max(s-O,0):Math.min(0,O-s)),H(ae(O/s,0,1)),t.isFirst===!0&&(N.value=!0)}function Se(t){if(f.value!==!0)return;const s=_.value,O=t.direction===e.side,Y=(v.lang.rtl===!0?O!==!0:O)?ae(t.distance.x,0,s):0;if(t.isFinal===!0){Math.abs(Y)<Math.min(75,s)===!0?(a.animate(),H(1),R(0)):d(),N.value=!1;return}R(A.value*Y),H(ae(1-Y/s,0,1)),t.isFirst===!0&&(N.value=!0)}function fe(){P(!1),ce(!0)}function W(t,s){a.update(e.side,t,s)}function Ge(t,s){t.value!==s&&(t.value=s)}function ve(t,s){W("size",t===!0?e.miniWidth:s)}return a.instances[e.side]=T,ve(e.miniToOverlay,_.value),W("space",U.value),W("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&f.value===!0&&e["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!0),we(()=>{h("onLayout",U.value),h("miniState",x.value),z=e.showIfAbove===!0;const t=()=>{(f.value===!0?$:l)(!1,!0)};if(a.totalWidth.value!==0){qe(t);return}k=w(a.totalWidth,()=>{k(),k=void 0,f.value===!1&&e.showIfAbove===!0&&g.value===!1?i(!1):t()})}),Re(()=>{k!==void 0&&k(),L!==null&&(clearTimeout(L),L=null),f.value===!0&&fe(),a.instances[e.side]===T&&(a.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const t=[];g.value===!0&&(e.noSwipeOpen===!1&&t.push(K(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ee.value)),t.push(Ce("div",{ref:"backdrop",class:De.value,style:Me.value,"aria-hidden":"true",onClick:d},void 0,"backdrop",e.noSwipeBackdrop!==!0&&f.value===!0,()=>je.value)));const s=x.value===!0&&S.mini!==void 0,O=[q("div",{...c,key:""+s,class:[Ae.value,c.class]},s===!0?S.mini():le(S.default))];return e.elevated===!0&&f.value===!0&&O.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Ce("aside",{ref:"content",class:Ne.value,style:Fe.value},O,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ue.value)),q("div",{class:"q-drawer-container"},t)}}}),St=E({name:"QPageContainer",setup(e,{slots:S}){const{proxy:{$q:h}}=ne(),c=oe(ie,M);if(c===M)return console.error("QPageContainer needs to be child of QLayout"),M;Ve(it,!0);const u=n(()=>{const v={};return c.header.space===!0&&(v.paddingTop=`${c.header.size}px`),c.right.space===!0&&(v[`padding${h.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(v.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(v[`padding${h.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),v});return()=>q("div",{class:"q-page-container",style:u.value},le(S.default))}}),Pe=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:S,emit:h}){const{proxy:{$q:c}}=ne(),u=p(null),v=p(c.screen.height),B=p(e.container===!0?0:c.screen.width),P=p({position:0,direction:"down",inflectionPoint:0}),b=p(0),C=p(ut.value===!0?0:me()),a=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=n(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),L=n(()=>C.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${C.value}px`}:null),k=n(()=>C.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${C.value}px`,width:`calc(100% + ${C.value}px)`}:null);function g(l){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};P.value=i,e.onScroll!==void 0&&h("scroll",i)}}function x(l){const{height:i,width:d}=l;let r=!1;v.value!==i&&(r=!0,v.value=i,e.onScrollHeight!==void 0&&h("scrollHeight",i),f()),B.value!==d&&(r=!0,B.value=d),r===!0&&e.onResize!==void 0&&h("resize",l)}function _({height:l}){b.value!==l&&(b.value=l,f())}function f(){if(e.container===!0){const l=v.value>b.value?me():0;C.value!==l&&(C.value=l)}}let o=null;const $={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:u,height:v,containerHeight:b,scrollbarWidth:C,totalWidth:n(()=>B.value+C.value),rows:n(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:P,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,i,d){$[l][i]=d}};if(Ve(ie,$),me()>0){let d=function(){l=null,i.classList.remove("hide-scrollbar")},r=function(){if(l===null){if(i.scrollHeight>c.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(d,300)},Q=function(T){l!==null&&T==="remove"&&(clearTimeout(l),d()),window[`${T}EventListener`]("resize",r)},l=null;const i=document.body;w(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),rt(()=>{Q("remove")})}return()=>{const l=st(S.default,[q(yt,{onScroll:g}),q(pe,{onResize:x})]),i=q("div",{class:a.value,style:z.value,ref:e.container===!0?void 0:u,tabindex:-1},l);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:u},[q(pe,{onResize:_}),q("div",{class:"absolute-full",style:L.value},[q("div",{class:"scroll",style:k.value},[i])])]):i}}});function qt(){return oe(dt)}const Ct={class:"gt-sm"},Lt=G("img",{class:"iconLogo sid lt-md header-icon",src:"/images/logo.png",alt:""},null,-1),$t=["src"],Bt=["src"],Tt={class:"text-grey-7"},It={__name:"MainLayout",setup(e){const S=qt();let h=p(!1);const c=p(!1),u=p(!1);let v=p(null);const B=()=>{c.value=!c.value},P=()=>{u.value=!0,window.innerWidth<1e3&&(c.value=!1),v.value.focus()},b=ct(),C=()=>{a()},a=()=>{S.dialog({title:"Confirm",message:"do you really want to exit",cancel:!0,persistent:!0}).onOk(()=>{localStorage.removeItem("adminpass"),location.reload()})},z=p([]),L=p(""),k=n(()=>z.value.filter(l=>(l.nickname.toLowerCase().includes(L.value.toLowerCase()),l.name.toLowerCase().includes(L.value.toLowerCase())))),g=()=>{S.dialog({title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0445\u0430\u043A\u0435\u0440\u0430",message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:",prompt:{model:"",type:"text"},cancel:!1,persistent:!0}).onOk(l=>{const i=l.toLowerCase();i===x.value[0].admin?(h.value=!0,b.push("/admin"),localStorage.setItem("adminpass",JSON.stringify(x.value[0].admin))):i===x.value[0].fayz?(h.value=!0,b.push("/"),localStorage.setItem("adminpass",JSON.stringify(x.value[0].fayz))):g()})},x=p([]);S.loading.show(),we(()=>{const l=$e(Be(ze,"adminpass"));Te(l,i=>{i.docChanges().forEach(d=>{let r=d.doc.data();if(r.id=d.doc.id,d.type==="added"&&x.value.unshift(r),d.type==="modified"){let Q=x.value.findIndex(T=>T.id===r.id);Object.assign(x.value[Q],r)}if(d.type==="removed"){let Q=x.value.findIndex(T=>T.id===r.id);x.value.splice(Q,1)}})})});let _=p(JSON.parse(localStorage.getItem("adminpass"))),f=n(()=>JSON.parse(localStorage.getItem("adminpass"))=="lo"?"/admin":"/");w(x.value,l=>{l.length>0&&(S.loading.hide(),_.value?_.value=="go"?(h.value=!0,b.push(b.currentRoute.value.fullPath)):_.value=="lo"&&(h.value=!0,b.currentRoute.value.fullPath.includes("/messaget")?b.push(b.currentRoute.value.fullPath.includes("/admin")):b.push(b.currentRoute.value.fullPath.includes("/admin")?b.currentRoute.value.fullPath:"/admin"+b.currentRoute.value.fullPath)):g())});const o=n(()=>b.currentRoute.value.fullPath.includes("/admin")?"a":"");we(()=>{const l=$e(Be(ze,"active"),pt("date"));Te(l,i=>{i.docChanges().forEach(d=>{let r=d.doc.data();if(r.id=d.doc.id,d.type==="added"&&z.value.unshift(r),d.type==="modified"){let Q=z.value.findIndex(T=>T.id===r.id);Object.assign(z.value[Q],r)}if(d.type==="removed"){let Q=z.value.findIndex(T=>T.id===r.id);z.value.splice(Q,1)}})})});const $=(l,i)=>{let d="";i=="M"?d="MuhammadAmin":d="Fayzulloh",b.push({name:d+o.value,params:{id:i}})};return(l,i)=>{const d=ft("router-view");return he(h)?(V(),F(Pe,{key:0,view:"lHr lpR fFf"},{default:y(()=>[m(kt,{bordered:"",class:"bg-white text-black"},{default:y(()=>[m(_t,null,{default:y(()=>[m(vt,{dense:"",flat:"",round:"",icon:"menu",onClick:B}),m(xt,{class:"text-weight-bold"},{default:y(()=>[G("span",Ct,ge(l.$route.name),1),Lt]),_:1})]),_:1})]),_:1}),m(Oe,{"show-if-above":"",modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=r=>c.value=r),width:283,side:"left",bordered:""},{default:y(()=>[m(bt,{class:"iconLogo",to:he(f),src:"/images/logo.png",alt:""},null,8,["to"]),m(Le,null,{default:y(()=>[K((V(),F(J,{exact:"",to:he(f),clickable:""},{default:y(()=>[m(I,{avatar:""},{default:y(()=>[m(j,{name:"home",size:"md"})]),_:1}),m(I,{class:"text-h6 text-weight-bold"},{default:y(()=>[ee("Home")]),_:1})]),_:1},8,["to"])),[[te]]),K((V(),F(J,{exact:"",to:"/about",clickable:""},{default:y(()=>[m(I,{avatar:""},{default:y(()=>[m(j,{name:"help",size:"md"})]),_:1}),m(I,{class:"text-h6 text-weight-bold"},{default:y(()=>[ee("About")]),_:1})]),_:1})),[[te]]),K((V(),F(J,{exact:"",onClick:C,clickable:""},{default:y(()=>[m(I,{avatar:""},{default:y(()=>[m(j,{name:"fa-solid fa-door-open",size:"md"})]),_:1}),m(I,{class:"text-h6 text-weight-bold"},{default:y(()=>[ee("Exit")]),_:1})]),_:1})),[[te]]),K((V(),F(J,{exact:"",onClick:P,clickable:""},{default:y(()=>[m(I,{avatar:""},{default:y(()=>[m(j,{name:"fa-solid fa-magnifying-glass-arrow-right",size:"md"})]),_:1}),m(I,{class:"text-h6 text-weight-bold"},{default:y(()=>[ee("Search")]),_:1})]),_:1})),[[te]])]),_:1})]),_:1},8,["modelValue"]),m(Oe,{"show-if-above":"",modelValue:u.value,"onUpdate:modelValue":i[2]||(i[2]=r=>u.value=r),side:"right",bordered:""},{default:y(()=>[m(mt,{color:"grey",rounded:"",class:"q-ma-md",ref_key:"tot",ref:v,modelValue:L.value,"onUpdate:modelValue":i[1]||(i[1]=r=>L.value=r),outlined:"",placeholder:"search loh"},{prepend:y(()=>[m(j,{name:"search"})]),_:1},8,["modelValue"]),m(Le,{separator:"",bordered:"",padding:""},{default:y(()=>[(V(!0),ye(gt,null,ht(k.value,r=>(V(),F(J,{clickable:"",onClick:Q=>$(r.nickname,r.id),key:r.id,class:"fayz q-py-md"},{default:y(()=>[m(I,{avatar:"",top:""},{default:y(()=>[r.image.includes("https")?(V(),ye("video",{key:1,class:"dodemg",loop:"",autoplay:"",muted:"",src:r.image},null,8,Bt)):(V(),ye("img",{key:0,class:"dodemg",src:r.image},null,8,$t))]),_:2},1024),m(I,null,{default:y(()=>[m(wt,{class:"text-subtitle1 column"},{default:y(()=>[G("div",null,[G("strong",null,ge(r.nickname),1)]),G("span",Tt,ge(r.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"]),m(St,null,{default:y(()=>[m(d)]),_:1})]),_:1})):(V(),F(Pe,{key:1}))}}};export{It as default};