import{u as a,j as e}from"./index-y2PFc3lg.js";import{B as i}from"./BookForm-BqqP8TEx.js";import{i as c,e as _}from"./selectors-9akU7COM.js";const o="_container_1k5w1_1",m="_comment_cont_1k5w1_5",l="_reviews_item_1k5w1_10",d="_head_1k5w1_14",w="_circle_1k5w1_19",v="_name_rat_1k5w1_32",g="_reviewer_name_1k5w1_37",h="_rating_cont_1k5w1_42",x="_rating_1k5w1_42",j="_rating_orange_1k5w1_50",k="_comment_1k5w1_5",n={container:o,comment_cont:m,reviews_item:l,head:d,circle:w,name_rat:v,reviewer_name:g,rating_cont:h,rating:x,rating_orange:j,comment:k},$=()=>{const s=a(c);return e.jsxs("div",{className:n.container,children:[e.jsx("div",{className:n.comment_cont,children:s.reviews.map(r=>e.jsxs("div",{className:n.reviews_item,children:[e.jsxs("div",{className:n.head,children:[e.jsx("div",{className:n.circle,children:r.reviewer_name.charAt(0)}),e.jsxs("div",{className:n.name_rat,children:[e.jsx("p",{className:n.name,children:r.reviewer_name}),e.jsx("div",{className:n.rating_cont,children:Array.from({length:5}).map((N,t)=>e.jsx("svg",{className:`${n.rating} ${r.reviewer_rating>t?n.rating_orange:""}`,width:"16",height:"16",children:e.jsx("use",{xlinkHref:`${_}#icon-rating`})},t))})]})]}),e.jsx("div",{className:n.comment,children:r.comment})]},r.reviewer_name))}),e.jsx("div",{children:e.jsx(i,{})})]})};export{$ as default};