import{u as a}from"./iframe-Cmw7-rNe.js";import"./preload-helper-PPVm8Dsz.js";const h=({items:t,open:r=!0,onClose:d,className:c="",...m})=>{const u=["menu",r?"menu-open":"menu-closed",c].filter(Boolean).join(" "),o=e=>{e.disabled||(e.onClick?.(),d?.())};return r?a("div",{className:u,role:"menu",...m,children:a("ul",{className:"menu-list",children:t.map((e,b)=>e.divider?a("li",{className:"menu-divider",role:"separator"},`divider-${b}`):a("li",{className:"menu-item-wrapper",children:e.href?a("a",{href:e.href,className:`menu-item ${e.disabled?"menu-item-disabled":""}`,role:"menuitem","aria-disabled":e.disabled,onClick:p=>{if(e.disabled){p.preventDefault();return}o(e)},children:[e.icon&&a("span",{className:"menu-icon",children:e.icon}),a("span",{className:"menu-label",children:e.label})]}):a("button",{type:"button",className:`menu-item ${e.disabled?"menu-item-disabled":""}`,role:"menuitem",disabled:e.disabled,onClick:()=>o(e),children:[e.icon&&a("span",{className:"menu-icon",children:e.icon}),a("span",{className:"menu-label",children:e.label})]})},e.id))})}):null},N={title:"Components/Navigation/Menu",tags:["autodocs"],component:h,parameters:{layout:"centered"}},f=[{id:"1",label:"Profile",icon:"👤"},{id:"2",label:"Settings",icon:"⚙️"},{id:"3",label:"Divider",divider:!0},{id:"4",label:"Logout",icon:"🚪"}],n={args:{items:f}},l={args:{items:[{id:"1",label:"Home",href:"/",icon:"🏠"},{id:"2",label:"About",href:"/about",icon:"ℹ️"},{id:"3",label:"Contact",href:"/contact",icon:"📧"}]}},s={args:{items:[{id:"1",label:"Available"},{id:"2",label:"Disabled",disabled:!0},{id:"3",label:"Also Available"}]}},i={args:{items:[{id:"1",label:"Edit"},{id:"2",label:"Duplicate"},{id:"3",label:"Delete"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Home',
      href: '/',
      icon: '🏠'
    }, {
      id: '2',
      label: 'About',
      href: '/about',
      icon: 'ℹ️'
    }, {
      id: '3',
      label: 'Contact',
      href: '/contact',
      icon: '📧'
    }]
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Available'
    }, {
      id: '2',
      label: 'Disabled',
      disabled: true
    }, {
      id: '3',
      label: 'Also Available'
    }]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Edit'
    }, {
      id: '2',
      label: 'Duplicate'
    }, {
      id: '3',
      label: 'Delete'
    }]
  }
}`,...i.parameters?.docs?.source}}};const A=["Default","WithLinks","WithDisabledItem","Simple"];export{n as Default,i as Simple,s as WithDisabledItem,l as WithLinks,A as __namedExportsOrder,N as default};
