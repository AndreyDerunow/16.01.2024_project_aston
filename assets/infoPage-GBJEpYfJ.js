import{u as c,a as o,j as e,L as l,A as d,c as a}from"./index-N_VfXtkO.js";const x=()=>{const{data:s,isLoading:i,error:m}=c.useGetCurrentUserQuery(),{theme:r}=o();if(i)return e.jsx(l,{});if(m)return e.jsx("div",{children:d});const n=a({"mx-auto w-1/2 rounded-md border-2":!0,"border-white":r==="dark","border-black":r==="light"});return e.jsxs("div",{className:n,children:[e.jsxs("div",{className:"m-2 p-2",children:["User id: ",s==null?void 0:s._id]}),e.jsxs("div",{className:"m-2 p-2",children:["Email: ",s==null?void 0:s.email]}),e.jsx("img",{src:s==null?void 0:s.image}),e.jsxs("div",{className:"m-2 p-2",children:["Sex: ",s==null?void 0:s.sex]})]})};export{x as Info};
