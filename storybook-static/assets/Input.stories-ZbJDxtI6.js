import{u as e}from"./iframe-Cmw7-rNe.js";import{I as a}from"./Input-D4OWgN8z.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"Components/Forms/Input",tags:["autodocs"],component:a,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","filled","outlined","underlined"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},state:{control:{type:"select"},options:["default","error","success","warning"]},disabled:{control:"boolean"},floatingLabel:{control:"boolean"},showClearButton:{control:"boolean"},characterCounter:{control:"boolean"}}},r={args:{label:"Email",placeholder:"Enter your email"}},l={args:{variant:"filled",label:"Username",placeholder:"Enter username"}},s={args:{variant:"outlined",label:"Password",type:"password",placeholder:"Enter password"}},o={args:{variant:"underlined",label:"Full Name",placeholder:"John Doe"}},t={args:{label:"Email",placeholder:"email@example.com",helperText:"We will never share your email"}},n={args:{label:"Email",placeholder:"email@example.com",state:"error",errorText:"Please enter a valid email address",value:"invalid-email"}},c={args:{label:"Username",placeholder:"username",state:"success",successText:"Username is available",value:"johndoe"}},i={args:{label:"Email",placeholder:"email@example.com",required:!0}},d={args:{label:"Email",placeholder:"email@example.com",floatingLabel:!0}},p={args:{label:"Search",placeholder:"Search...",prefixIcon:"🔍"}},u={args:{label:"Email",placeholder:"email@example.com",suffixIcon:"✉️"}},m={args:{label:"Search",placeholder:"Search...",showClearButton:!0,value:"search query"}},h={args:{label:"Bio",placeholder:"Tell us about yourself",characterCounter:!0,maxLength:100,value:"I love coding"}},g={args:{label:"Email",placeholder:"email@example.com",disabled:!0,value:"disabled@example.com"}},b={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e(a,{size:"xs",label:"Extra Small",placeholder:"xs input"}),e(a,{size:"sm",label:"Small",placeholder:"sm input"}),e(a,{size:"md",label:"Medium",placeholder:"md input"}),e(a,{size:"lg",label:"Large",placeholder:"lg input"}),e(a,{size:"xl",label:"Extra Large",placeholder:"xl input"})]})},x={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e(a,{variant:"default",label:"Default",placeholder:"default variant"}),e(a,{variant:"filled",label:"Filled",placeholder:"filled variant"}),e(a,{variant:"outlined",label:"Outlined",placeholder:"outlined variant"}),e(a,{variant:"underlined",label:"Underlined",placeholder:"underlined variant"})]})},v={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e(a,{label:"Default",placeholder:"default state",value:"some text"}),e(a,{label:"Error",state:"error",errorText:"This field has an error",placeholder:"error state",value:"invalid"}),e(a,{label:"Success",state:"success",successText:"Looks good!",placeholder:"success state",value:"valid"}),e(a,{label:"Warning",state:"warning",helperText:"Please verify this",placeholder:"warning state",value:"check"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Username',
    placeholder: 'Enter username'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underlined',
    label: 'Full Name',
    placeholder: 'John Doe'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    helperText: 'We will never share your email'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    state: 'error',
    errorText: 'Please enter a valid email address',
    value: 'invalid-email'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'username',
    state: 'success',
    successText: 'Username is available',
    value: 'johndoe'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    required: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    floatingLabel: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    prefixIcon: '🔍'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    suffixIcon: '✉️'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    showClearButton: true,
    value: 'search query'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    characterCounter: true,
    maxLength: 100,
    value: 'I love coding'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    disabled: true,
    value: 'disabled@example.com'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Input size="xs" label="Extra Small" placeholder="xs input" />
      <Input size="sm" label="Small" placeholder="sm input" />
      <Input size="md" label="Medium" placeholder="md input" />
      <Input size="lg" label="Large" placeholder="lg input" />
      <Input size="xl" label="Extra Large" placeholder="xl input" />
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Input variant="default" label="Default" placeholder="default variant" />
      <Input variant="filled" label="Filled" placeholder="filled variant" />
      <Input variant="outlined" label="Outlined" placeholder="outlined variant" />
      <Input variant="underlined" label="Underlined" placeholder="underlined variant" />
    </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Input label="Default" placeholder="default state" value="some text" />
      <Input label="Error" state="error" errorText="This field has an error" placeholder="error state" value="invalid" />
      <Input label="Success" state="success" successText="Looks good!" placeholder="success state" value="valid" />
      <Input label="Warning" state="warning" helperText="Please verify this" placeholder="warning state" value="check" />
    </div>
}`,...v.parameters?.docs?.source}}};const I=["Default","Filled","Outlined","Underlined","WithHelperText","WithError","WithSuccess","Required","FloatingLabel","WithPrefixIcon","WithSuffixIcon","WithClearButton","WithCharacterCounter","Disabled","Sizes","AllVariants","AllStates"];export{v as AllStates,x as AllVariants,r as Default,g as Disabled,l as Filled,d as FloatingLabel,s as Outlined,i as Required,b as Sizes,o as Underlined,h as WithCharacterCounter,m as WithClearButton,n as WithError,t as WithHelperText,p as WithPrefixIcon,c as WithSuccess,u as WithSuffixIcon,I as __namedExportsOrder,E as default};
