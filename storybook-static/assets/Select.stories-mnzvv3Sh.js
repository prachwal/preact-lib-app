import{u as e}from"./iframe-Cmw7-rNe.js";import{S as r}from"./Select-D3QypPbQ.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/Forms/Select",tags:["autodocs"],component:r,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"}}},o=[{value:"",label:"Select a country"},{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"}],t={args:{label:"Country",options:o}},n={args:{label:"Country",options:o,helperText:"Select your country of residence"}},a={args:{label:"Country",options:o,errorText:"Please select a country"}},s={args:{label:"Country",options:o,successText:"Valid selection",value:"us"}},l={args:{label:"Country",options:o,required:!0}},i={args:{label:"Country",options:o,disabled:!0,value:"us"}},c={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e(r,{size:"sm",label:"Small",options:o}),e(r,{size:"md",label:"Medium",options:o}),e(r,{size:"lg",label:"Large",options:o})]})},p={render:()=>e(r,{label:"Priority",children:[e("option",{value:"",children:"Select priority"}),e("option",{value:"low",children:"Low"}),e("option",{value:"medium",children:"Medium"}),e("option",{value:"high",children:"High"}),e("option",{value:"urgent",children:"Urgent"})]})},u={render:()=>e(r,{label:"Food",children:[e("option",{value:"",children:"Select food"}),e("optgroup",{label:"Fruits",children:[e("option",{value:"apple",children:"Apple"}),e("option",{value:"banana",children:"Banana"}),e("option",{value:"orange",children:"Orange"})]}),e("optgroup",{label:"Vegetables",children:[e("option",{value:"carrot",children:"Carrot"}),e("option",{value:"broccoli",children:"Broccoli"}),e("option",{value:"spinach",children:"Spinach"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    helperText: 'Select your country of residence'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    errorText: 'Please select a country'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    successText: 'Valid selection',
    value: 'us'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    required: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    disabled: true,
    value: 'us'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Select size="sm" label="Small" options={countryOptions} />
      <Select size="md" label="Medium" options={countryOptions} />
      <Select size="lg" label="Large" options={countryOptions} />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Select label="Priority">
      <option value="">Select priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="urgent">Urgent</option>
    </Select>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Select label="Food">
      <option value="">Select food</option>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
      </optgroup>
    </Select>
}`,...u.parameters?.docs?.source}}};const h=["Default","WithHelperText","WithError","WithSuccess","Required","Disabled","Sizes","WithCustomOptions","WithOptGroups"];export{t as Default,i as Disabled,l as Required,c as Sizes,p as WithCustomOptions,a as WithError,n as WithHelperText,u as WithOptGroups,s as WithSuccess,h as __namedExportsOrder,b as default};
