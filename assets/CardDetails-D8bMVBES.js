import{u as i,a as j,h as u,r as d,i as b,j as s,L as x,O as f,k as N}from"./index-Dh1PH-9E.js";import{e as k,f as y,g as C,d as n}from"./selectors-Cfhp-C7X.js";const L="_backdrop_15ssx_1",w="_appear_15ssx_1",E="_card_container_15ssx_23",$="_about_15ssx_32",D="_head_15ssx_35",O="_cross_15ssx_44",H="_rat_loc_15ssx_48",R="_rating_15ssx_55",T="_star_15ssx_63",F="_location_15ssx_67",S="_map_15ssx_74",W="_price_15ssx_78",A="_car_info_15ssx_83",I="_gallery_15ssx_88",P="_gallery_img_15ssx_95",q="_desc_15ssx_104",z="_tabs_15ssx_110",B="_tabList_15ssx_110",G="_tab_15ssx_110",J="_active_15ssx_127",K="_tabContent_15ssx_139",a={backdrop:L,appear:w,card_container:E,about:$,head:D,cross:O,rat_loc:H,rating:R,star:T,location:F,map:S,price:W,car_info:A,gallery:I,gallery_img:P,desc:q,tabs:z,tabList:B,tab:G,active:J,tabContent:K},U=()=>{const t=i(k),h=i(y),p=i(C),m=j(),r=u(),[o,v]=d.useState("features"),l=e=>{v(e)},_=b(),c=()=>{m(N()),_.pathname.startsWith("/catalog")&&r("/catalog"),_.pathname.startsWith("/favorites")&&r("/favorites")};return d.useEffect(()=>{const e=g=>{g.key==="Escape"&&c()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]),p?s.jsx("div",{className:a.backdrop,onClick:c,children:s.jsx("div",{className:a.card_container,onClick:e=>e.stopPropagation(),children:h?"Loading....":s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:a.about,children:[s.jsxs("div",{className:a.head,children:[s.jsx("p",{children:t.name}),s.jsx("svg",{className:a.cross,width:"32",height:"32",onClick:c,children:s.jsx("use",{xlinkHref:`${n}#icon-cross`})})]}),s.jsxs("div",{className:a.rat_loc,children:[s.jsxs("div",{className:a.rating,children:[s.jsx("svg",{className:a.star,width:"16",height:"16",children:s.jsx("use",{xlinkHref:`${n}#icon-rating`})}),t.rating,"(",t.reviews.length," Reviews)"]}),s.jsxs("div",{className:a.location,children:[s.jsx("svg",{className:a.map,width:"16",height:"16",children:s.jsx("use",{xlinkHref:`${n}#icon-map-pin`})}),s.jsx("p",{children:t.location})]})]}),s.jsx("div",{className:a.price,children:s.jsxs("p",{children:["€",t.price]})})]}),s.jsxs("div",{className:a.car_info,children:[s.jsx("div",{className:a.gallery,children:t.gallery.map(e=>s.jsx("div",{className:a.gallery_img,children:s.jsx("img",{src:e,alt:e})},e))}),s.jsx("div",{className:a.desc,children:s.jsx("p",{children:t.description})})]}),s.jsxs("div",{className:a.tabs,children:[s.jsxs("div",{className:a.tabList,children:[s.jsx(x,{to:"features",className:`${a.tab} ${o==="features"?a.active:""}`,onClick:()=>l("features"),children:"Features"}),s.jsx(x,{to:"reviews",className:`${a.tab} ${o==="reviews"?a.active:""}`,onClick:()=>l("reviews"),children:"Reviews"})]}),s.jsx("div",{className:a.tabContent,children:s.jsx(f,{})})]})]})})}):null};export{U as default};