import{u as r}from"./iframe-Cmw7-rNe.js";import{B as e}from"./Button-BLiV_Y8W.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Button",tags:["autodocs"],component:e,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","ghost","link"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},disabled:{control:"boolean"},children:{control:"text"}}},a={args:{variant:"primary",children:"Primary Button"}},t={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"ghost",children:"Ghost Button"}},s={args:{variant:"link",children:"Link Button"}},i={render:()=>r("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r(e,{size:"xs",children:"Extra Small"}),r(e,{size:"sm",children:"Small"}),r(e,{size:"md",children:"Medium"}),r(e,{size:"lg",children:"Large"}),r(e,{size:"xl",children:"Extra Large"})]})},o={render:()=>r("div",{style:{display:"flex",gap:"1rem",flexDirection:"column"},children:[r("div",{style:{display:"flex",gap:"1rem"},children:[r(e,{variant:"primary",children:"Primary"}),r(e,{variant:"secondary",children:"Secondary"}),r(e,{variant:"ghost",children:"Ghost"}),r(e,{variant:"link",children:"Link"})]}),r("div",{style:{display:"flex",gap:"1rem"},children:[r(e,{variant:"primary",disabled:!0,children:"Primary Disabled"}),r(e,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),r(e,{variant:"ghost",disabled:!0,children:"Ghost Disabled"}),r(e,{variant:"link",disabled:!0,children:"Link Disabled"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column'
  }}>
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>
        <Button variant="link" disabled>Link Disabled</Button>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const u=["Primary","Secondary","Ghost","Link","Sizes","AllVariants"];export{o as AllVariants,n as Ghost,s as Link,a as Primary,t as Secondary,i as Sizes,u as __namedExportsOrder,m as default};
