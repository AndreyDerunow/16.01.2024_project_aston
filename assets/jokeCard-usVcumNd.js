import{e as j,f as v,u as c,g as f,j as s,L}from"./index-gHabXGP9.js";import{F as U,o as I}from"./onChangeFavorite-y6AfK5ZZ.js";const F=()=>{const{state:e,pathname:u}=j(),o=e!==null&&e.id,t=o?e.id:u.slice(6),{data:d,error:l,isLoading:m}=v.useGetJokeByIdQuery(t,{skip:o}),{data:a,isLoading:k}=c.useGetCurrentUserQuery(),[g]=c.useUpdateUserMutation(),h=f(),r=o?e:d;if(!r||k||m)return s.jsx(L,{});if(l)return s.jsx("div",{children:"nothing found..:("});const{id:n,value:p,url:i}=r,x=a&&a.favorites.includes(t)||!1;return s.jsxs("div",{className:"w-2/5 mx-auto",children:[s.jsx("img",{src:"https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png",alt:"chuck"}),s.jsx("div",{className:"m-2 p-2",children:p}),s.jsx("a",{target:"_blank",rel:"noreferrer",href:i,className:"hover:-rotate-2 block m-2 mb-6 p-2 break-words",children:i}),s.jsx(U,{id:n,isFavorite:x,onClick:()=>I(n,g,a,h)})]})};export{F as JokeCard};
