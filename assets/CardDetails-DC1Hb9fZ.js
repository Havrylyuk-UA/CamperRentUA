import{u as i,a as g,m as y,r as d,n as j,j as s,L as h,O as b,p as u}from"./index-y2PFc3lg.js";import{i as N,j as k,k as C,e as n}from"./selectors-9akU7COM.js";const L="_backdrop_1y3cf_1",w="_appear_1y3cf_1",E="_card_container_1y3cf_23",$="_about_1y3cf_32",D="_head_1y3cf_35",O="_cross_1y3cf_44",H="_rat_loc_1y3cf_48",R="_rating_1y3cf_55",T="_star_1y3cf_63",F="_location_1y3cf_67",S="_map_1y3cf_74",W="_price_1y3cf_78",A="_car_info_1y3cf_83",I="_gallery_1y3cf_88",P="_gallery_img_1y3cf_95",q="_desc_1y3cf_104",z="_tabs_1y3cf_110",B="_tabList_1y3cf_110",G="_tab_1y3cf_110",J="_active_1y3cf_127",K="_tabContent_1y3cf_139",a={backdrop:L,appear:w,card_container:E,about:$,head:D,cross:O,rat_loc:H,rating:R,star:T,location:F,map:S,price:W,car_info:A,gallery:I,gallery_img:P,desc:q,tabs:z,tabList:B,tab:G,active:J,tabContent:K},U=()=>{const c=i(N),p=i(k),f=i(C),m=g(),r=y(),[o,v]=d.useState(""),l=e=>{v(e)},_=j(),t=()=>{m(u()),_.pathname.startsWith("/catalog")&&r("/catalog"),_.pathname.startsWith("/favorites")&&r("/favorites")};return d.useEffect(()=>{const e=x=>{x.key==="Escape"&&t()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]),f?s.jsx("div",{className:a.backdrop,onClick:t,children:s.jsx("div",{className:a.card_container,onClick:e=>e.stopPropagation(),children:p?"Loading....":s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:a.about,children:[s.jsxs("div",{className:a.head,children:[s.jsx("p",{children:c.name}),s.jsx("svg",{className:a.cross,width:"32",height:"32",onClick:t,children:s.jsx("use",{xlinkHref:`${n}#icon-cross`})})]}),s.jsxs("div",{className:a.rat_loc,children:[s.jsxs("div",{className:a.rating,children:[s.jsx("svg",{className:a.star,width:"16",height:"16",children:s.jsx("use",{xlinkHref:`${n}#icon-rating`})}),c.rating,"(",c.reviews.length," Reviews)"]}),s.jsxs("div",{className:a.location,children:[s.jsx("svg",{className:a.map,width:"16",height:"16",children:s.jsx("use",{xlinkHref:`${n}#icon-map-pin`})}),s.jsx("p",{children:c.location})]})]}),s.jsx("div",{className:a.price,children:s.jsxs("p",{children:["€",c.price]})})]}),s.jsxs("div",{className:a.car_info,children:[s.jsx("div",{className:a.gallery,children:c.gallery.map(e=>s.jsx("div",{className:a.gallery_img,children:s.jsx("img",{src:e,alt:e})},e))}),s.jsx("div",{className:a.desc,children:s.jsx("p",{children:c.description})})]}),s.jsxs("div",{className:a.tabs,children:[s.jsxs("div",{className:a.tabList,children:[s.jsx(h,{to:"features",className:`${a.tab} ${o==="features"?a.active:""}`,onClick:()=>l("features"),children:"Features"}),s.jsx(h,{to:"reviews",className:`${a.tab} ${o==="reviews"?a.active:""}`,onClick:()=>l("reviews"),children:"Reviews"})]}),s.jsx("div",{className:a.tabContent,children:s.jsx(b,{})})]})]})})}):null};export{U as default};