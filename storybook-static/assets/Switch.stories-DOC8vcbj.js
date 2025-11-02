import{u as e}from"./iframe-Cmw7-rNe.js";import"./preload-helper-PPVm8Dsz.js";const a=({size:m="md",label:p,onLabel:b,offLabel:h,className:w="",disabled:u=!1,checked:S,...k})=>{const D="switch",f=m!=="md"?`switch-${m}`:"",g=u?"switch-disabled":"",y=["switch-container",f?`switch-container-${m}`:"",g?"switch-container-disabled":"",w].filter(Boolean).join(" "),x=[D,f,g].filter(Boolean).join(" ");return e("label",{className:y,children:[e("input",{type:"checkbox",role:"switch",className:x,disabled:u,checked:S,...k}),e("span",{className:"switch-slider",children:[e("span",{className:"switch-thumb"}),(b||h)&&e("span",{className:"switch-labels",children:[b&&e("span",{className:"switch-label-on",children:b}),h&&e("span",{className:"switch-label-off",children:h})]})]}),p&&e("span",{className:"switch-label",children:p})]})},C={title:"Components/Forms/Switch",tags:["autodocs"],component:a,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{label:"Enable notifications"}},l={args:{label:"Notifications enabled",checked:!0}},r={args:{label:"Dark mode",onLabel:"ON",offLabel:"OFF"}},t={args:{label:"Disabled switch",disabled:!0}},c={args:{label:"Disabled and on",disabled:!0,checked:!0}},i={args:{"aria-label":"Toggle feature"}},o={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(a,{size:"sm",label:"Small switch"}),e(a,{size:"md",label:"Medium switch"}),e(a,{size:"lg",label:"Large switch"})]})},n={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(a,{label:"Email notifications"}),e(a,{label:"Push notifications",checked:!0}),e(a,{label:"SMS notifications"}),e(a,{label:"Weekly newsletter",checked:!0}),e(a,{label:"Marketing emails",disabled:!0})]})},d={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(a,{label:"Off state"}),e(a,{label:"On state",checked:!0}),e(a,{label:"Disabled off",disabled:!0}),e(a,{label:"Disabled on",disabled:!0,checked:!0})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications enabled',
    checked: true
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    onLabel: 'ON',
    offLabel: 'OFF'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled switch',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and on',
    disabled: true,
    checked: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Toggle feature'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Switch label="Email notifications" />
      <Switch label="Push notifications" checked />
      <Switch label="SMS notifications" />
      <Switch label="Weekly newsletter" checked />
      <Switch label="Marketing emails" disabled />
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Switch label="Off state" />
      <Switch label="On state" checked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled checked />
    </div>
}`,...d.parameters?.docs?.source}}};const v=["Default","Checked","WithOnOffLabels","Disabled","DisabledChecked","WithoutLabel","Sizes","Examples","AllStates"];export{d as AllStates,l as Checked,s as Default,t as Disabled,c as DisabledChecked,n as Examples,o as Sizes,r as WithOnOffLabels,i as WithoutLabel,v as __namedExportsOrder,C as default};
