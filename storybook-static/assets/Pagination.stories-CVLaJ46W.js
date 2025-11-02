import{u as a}from"./iframe-Cmw7-rNe.js";import{d as k}from"./hooks.module-Dswl-pJE.js";import"./preload-helper-PPVm8Dsz.js";const o=({currentPage:t,totalPages:s,size:F="md",showFirstLast:C=!1,maxVisiblePages:i=7,onChange:L,className:v="",...w})=>{const N="pagination",S=F!=="md"?`pagination-${F}`:"",x=[N,S,v].filter(Boolean).join(" "),n=e=>{e>=1&&e<=s&&e!==t&&L?.(e)},z=(()=>{const e=[];if(s<=i)for(let r=1;r<=s;r++)e.push(r);else{const r=Math.floor(i/2);let c=Math.max(1,t-r),l=Math.min(s,t+r);t<=r?l=i:t>=s-r&&(c=s-i+1),c>1&&(e.push(1),c>2&&e.push("..."));for(let y=c;y<=l;y++)e.push(y);l<s&&(l<s-1&&e.push("..."),e.push(s))}return e})();return a("nav",{"aria-label":"pagination",className:x,...w,children:a("ul",{className:"pagination-list",children:[C&&a("li",{children:a("button",{type:"button",className:"pagination-button pagination-button-first",onClick:()=>n(1),disabled:t===1,"aria-label":"First page",children:"«"})}),a("li",{children:a("button",{type:"button",className:"pagination-button pagination-button-prev",onClick:()=>n(t-1),disabled:t===1,"aria-label":"Previous page",children:"‹"})}),z.map((e,r)=>a("li",{children:typeof e=="number"?a("button",{type:"button",className:`pagination-button ${e===t?"pagination-button-active":""}`,onClick:()=>n(e),"aria-label":`Page ${e}`,"aria-current":e===t?"page":void 0,children:e}):a("span",{className:"pagination-ellipsis",children:e})},`${e}-${r}`)),a("li",{children:a("button",{type:"button",className:"pagination-button pagination-button-next",onClick:()=>n(t+1),disabled:t===s,"aria-label":"Next page",children:"›"})}),C&&a("li",{children:a("button",{type:"button",className:"pagination-button pagination-button-last",onClick:()=>n(s),disabled:t===s,"aria-label":"Last page",children:"»"})})]})})},B={title:"Components/Navigation/Pagination",tags:["autodocs"],component:o,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},showFirstLast:{control:"boolean"}}},g={args:{currentPage:1,totalPages:10}},u={args:{currentPage:5,totalPages:10,showFirstLast:!0}},p={args:{currentPage:10,totalPages:50,maxVisiblePages:7}},m={args:{currentPage:2,totalPages:5}},d={args:{currentPage:1,totalPages:10,showFirstLast:!0}},P={args:{currentPage:10,totalPages:10,showFirstLast:!0}},h={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a(o,{size:"sm",currentPage:3,totalPages:10}),a(o,{size:"md",currentPage:3,totalPages:10}),a(o,{size:"lg",currentPage:3,totalPages:10})]})},b={render:()=>{const[t,s]=k(1);return a("div",{children:[a("p",{style:{marginBottom:"1rem"},children:["Current page: ",t]}),a(o,{currentPage:t,totalPages:20,onChange:s,showFirstLast:!0})]})}},f={args:{currentPage:15,totalPages:100,maxVisiblePages:5,showFirstLast:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 50,
    maxVisiblePages: 7
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 5
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true
  }
}`,...d.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 10,
    showFirstLast: true
  }
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Pagination size="sm" currentPage={3} totalPages={10} />
      <Pagination size="md" currentPage={3} totalPages={10} />
      <Pagination size="lg" currentPage={3} totalPages={10} />
    </div>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div>
        <p style={{
        marginBottom: '1rem'
      }}>Current page: {page}</p>
        <Pagination currentPage={page} totalPages={20} onChange={setPage} showFirstLast />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 15,
    totalPages: 100,
    maxVisiblePages: 5,
    showFirstLast: true
  }
}`,...f.parameters?.docs?.source}}};const I=["Default","WithFirstLast","ManyPages","FewPages","FirstPage","LastPage","Sizes","Interactive","CompactView"];export{f as CompactView,g as Default,m as FewPages,d as FirstPage,b as Interactive,P as LastPage,p as ManyPages,h as Sizes,u as WithFirstLast,I as __namedExportsOrder,B as default};
