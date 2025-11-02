import{u as r}from"./iframe-Cmw7-rNe.js";import"./preload-helper-PPVm8Dsz.js";const C=({items:a,separator:d="/",maxItems:m,className:p="",...h})=>{const g=["breadcrumbs",p].filter(Boolean).join(" ");let i=a;return m&&a.length>m&&(i=[a[0],{label:"...",href:void 0},...a.slice(-(m-2))]),r("nav",{"aria-label":"breadcrumb",className:g,...h,children:r("ol",{className:"breadcrumbs-list",children:i.map((e,u)=>{const l=u===i.length-1,f=["breadcrumbs-item",l?"breadcrumbs-item-current":""].filter(Boolean).join(" ");return r("li",{className:f,children:[!l&&e.href?r("a",{href:e.href,className:"breadcrumbs-link",children:e.label}):!l&&e.onClick?r("button",{type:"button",onClick:e.onClick,className:"breadcrumbs-button",children:e.label}):r("span",{className:"breadcrumbs-text",children:e.label}),!l&&r("span",{className:"breadcrumbs-separator",children:d})]},`${e.label}-${u}`)})})})},v={title:"Components/Navigation/Breadcrumbs",tags:["autodocs"],component:C,parameters:{layout:"centered"}},s={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}]}},n={args:{items:[{label:"Home",href:"/"},{label:"Blog",href:"/blog"},{label:"Article"}],separator:">"}},o={args:{items:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"Settings",onClick:()=>alert("Settings clicked")},{label:"Profile"}]}},t={args:{items:[{label:"Home",href:"/"},{label:"Level 1",href:"/l1"},{label:"Level 2",href:"/l2"},{label:"Level 3",href:"/l3"},{label:"Level 4",href:"/l4"},{label:"Current Page"}],maxItems:4}},c={args:{items:[{label:"Home",href:"/"},{label:"Current Page"}]}},b={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/sub"},{label:"Product"}],separator:"→"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics',
      href: '/products/electronics'
    }, {
      label: 'Laptops'
    }]
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Blog',
      href: '/blog'
    }, {
      label: 'Article'
    }],
    separator: '>'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      onClick: () => alert('Home clicked')
    }, {
      label: 'Settings',
      onClick: () => alert('Settings clicked')
    }, {
      label: 'Profile'
    }]
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Level 1',
      href: '/l1'
    }, {
      label: 'Level 2',
      href: '/l2'
    }, {
      label: 'Level 3',
      href: '/l3'
    }, {
      label: 'Level 4',
      href: '/l4'
    }, {
      label: 'Current Page'
    }],
    maxItems: 4
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Current Page'
    }]
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Category',
      href: '/category'
    }, {
      label: 'Subcategory',
      href: '/category/sub'
    }, {
      label: 'Product'
    }],
    separator: '→'
  }
}`,...b.parameters?.docs?.source}}};const y=["Default","WithCustomSeparator","WithClickHandlers","WithMaxItems","Simple","ArrowSeparator"];export{b as ArrowSeparator,s as Default,c as Simple,o as WithClickHandlers,n as WithCustomSeparator,t as WithMaxItems,y as __namedExportsOrder,v as default};
