import{u as e}from"./iframe-Cmw7-rNe.js";import{C as r}from"./Checkbox-CnsraLIV.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Components/Forms/Checkbox",tags:["autodocs"],component:r,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},error:{control:"boolean"}}},a={args:{label:"Accept terms and conditions"}},s={args:{label:"Subscribed to newsletter",checked:!0}},o={args:{label:"Select some items",indeterminate:!0}},l={args:{label:"This field has an error",error:!0}},c={args:{label:"Disabled checkbox",disabled:!0}},t={args:{label:"Disabled and checked",disabled:!0,checked:!0}},d={args:{"aria-label":"Checkbox without visible label"}},i={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(r,{size:"sm",label:"Small checkbox"}),e(r,{size:"md",label:"Medium checkbox"}),e(r,{size:"lg",label:"Large checkbox"})]})},n={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e("h3",{style:{marginBottom:"0.5rem"},children:"Select your interests:"}),e(r,{label:"Technology"}),e(r,{label:"Sports"}),e(r,{label:"Music",checked:!0}),e(r,{label:"Travel"}),e(r,{label:"Food",checked:!0})]})},b={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e(r,{label:"Unchecked"}),e(r,{label:"Checked",checked:!0}),e(r,{label:"Indeterminate",indeterminate:!0}),e(r,{label:"Error state",error:!0}),e(r,{label:"Disabled",disabled:!0}),e(r,{label:"Disabled checked",disabled:!0,checked:!0})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscribed to newsletter',
    checked: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select some items',
    indeterminate: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This field has an error',
    error: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and checked',
    disabled: true,
    checked: true
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Checkbox without visible label'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <h3 style={{
      marginBottom: '0.5rem'
    }}>Select your interests:</h3>
      <Checkbox label="Technology" />
      <Checkbox label="Sports" />
      <Checkbox label="Music" checked />
      <Checkbox label="Travel" />
      <Checkbox label="Food" checked />
    </div>
}`,...n.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Error state" error />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
    </div>
}`,...b.parameters?.docs?.source}}};const k=["Default","Checked","Indeterminate","WithError","Disabled","DisabledChecked","WithoutLabel","Sizes","CheckboxGroup","AllStates"];export{b as AllStates,n as CheckboxGroup,s as Checked,a as Default,c as Disabled,t as DisabledChecked,o as Indeterminate,i as Sizes,l as WithError,d as WithoutLabel,k as __namedExportsOrder,p as default};
