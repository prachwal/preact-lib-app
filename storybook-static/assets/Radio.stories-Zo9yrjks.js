import{u as e}from"./iframe-Cmw7-rNe.js";import{R as a}from"./Radio-D6FC2Bmt.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Forms/Radio",tags:["autodocs"],component:a,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}}},r={args:{label:"Option 1",name:"radio-group"}},o={args:{label:"Selected option",name:"radio-group",checked:!0}},l={args:{label:"This option has an error",name:"radio-group",error:!0}},t={args:{label:"Disabled option",name:"radio-group",disabled:!0}},s={args:{label:"Disabled and selected",name:"radio-group",disabled:!0,checked:!0}},d={args:{name:"radio-group","aria-label":"Radio without visible label"}},n={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(a,{size:"sm",label:"Small radio",name:"size-group-1"}),e(a,{size:"md",label:"Medium radio",name:"size-group-2"}),e(a,{size:"lg",label:"Large radio",name:"size-group-3"})]})},i={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e("h3",{style:{marginBottom:"0.5rem"},children:"Select your preferred contact method:"}),e(a,{label:"Email",name:"contact-method",value:"email"}),e(a,{label:"Phone",name:"contact-method",value:"phone",checked:!0}),e(a,{label:"Text message",name:"contact-method",value:"text"}),e(a,{label:"Mail",name:"contact-method",value:"mail"})]})},c={render:()=>e("div",{children:[e("h3",{style:{marginBottom:"0.5rem"},children:"Gender:"}),e("div",{style:{display:"flex",gap:"1rem"},children:[e(a,{label:"Male",name:"gender",value:"male"}),e(a,{label:"Female",name:"gender",value:"female"}),e(a,{label:"Other",name:"gender",value:"other"})]})]})},m={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(a,{label:"Unchecked",name:"state-1"}),e(a,{label:"Checked",name:"state-2",checked:!0}),e(a,{label:"Error state",name:"state-3",error:!0}),e(a,{label:"Disabled",name:"state-4",disabled:!0}),e(a,{label:"Disabled checked",name:"state-5",disabled:!0,checked:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    name: 'radio-group'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Selected option',
    name: 'radio-group',
    checked: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This option has an error',
    name: 'radio-group',
    error: true
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    name: 'radio-group',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and selected',
    name: 'radio-group',
    disabled: true,
    checked: true
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'radio-group',
    'aria-label': 'Radio without visible label'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Radio size="sm" label="Small radio" name="size-group-1" />
      <Radio size="md" label="Medium radio" name="size-group-2" />
      <Radio size="lg" label="Large radio" name="size-group-3" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>Select your preferred contact method:</h3>
      <Radio label="Email" name="contact-method" value="email" />
      <Radio label="Phone" name="contact-method" value="phone" checked />
      <Radio label="Text message" name="contact-method" value="text" />
      <Radio label="Mail" name="contact-method" value="mail" />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>Gender:</h3>
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <Radio label="Male" name="gender" value="male" />
        <Radio label="Female" name="gender" value="female" />
        <Radio label="Other" name="gender" value="other" />
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Radio label="Unchecked" name="state-1" />
      <Radio label="Checked" name="state-2" checked />
      <Radio label="Error state" name="state-3" error />
      <Radio label="Disabled" name="state-4" disabled />
      <Radio label="Disabled checked" name="state-5" disabled checked />
    </div>
}`,...m.parameters?.docs?.source}}};const h=["Default","Checked","WithError","Disabled","DisabledChecked","WithoutLabel","Sizes","RadioGroup","HorizontalGroup","AllStates"];export{m as AllStates,o as Checked,r as Default,t as Disabled,s as DisabledChecked,c as HorizontalGroup,i as RadioGroup,n as Sizes,l as WithError,d as WithoutLabel,h as __namedExportsOrder,g as default};
