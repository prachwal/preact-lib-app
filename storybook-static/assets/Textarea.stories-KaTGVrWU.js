import{u as e}from"./iframe-Cmw7-rNe.js";import{T as r}from"./Textarea-Bdq4RRp7.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Components/Forms/Textarea",tags:["autodocs"],component:r,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["default","filled","outlined"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:"boolean"},autoResize:{control:"boolean"},characterCounter:{control:"boolean"}}},a={args:{label:"Description",placeholder:"Enter description...",rows:4}},s={args:{variant:"filled",label:"Comments",placeholder:"Add your comments...",rows:4}},l={args:{variant:"outlined",label:"Feedback",placeholder:"Your feedback...",rows:4}},o={args:{label:"Bio",placeholder:"Tell us about yourself...",helperText:"Please provide a brief bio",rows:4}},t={args:{label:"Message",placeholder:"Enter message...",errorText:"Message is required",rows:4}},n={args:{label:"Review",placeholder:"Write a review...",successText:"Review submitted successfully",value:"Great product!",rows:4}},i={args:{label:"Tweet",placeholder:"What's happening?",characterCounter:!0,maxLength:280,value:"Hello world!",rows:3}},c={args:{label:"Message",placeholder:"Enter message...",required:!0,rows:4}},d={args:{label:"Disabled",value:"This textarea is disabled",disabled:!0,rows:4}},p={args:{label:"Auto-resize",placeholder:"Start typing...",autoResize:!0,minHeight:"100px",maxHeight:"300px"}},u={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e(r,{size:"sm",label:"Small",placeholder:"Small textarea",rows:3}),e(r,{size:"md",label:"Medium",placeholder:"Medium textarea",rows:4}),e(r,{size:"lg",label:"Large",placeholder:"Large textarea",rows:5})]})},m={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e(r,{variant:"default",label:"Default",placeholder:"Default variant",rows:3}),e(r,{variant:"filled",label:"Filled",placeholder:"Filled variant",rows:3}),e(r,{variant:"outlined",label:"Outlined",placeholder:"Outlined variant",rows:3})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    rows: 4
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    label: 'Comments',
    placeholder: 'Add your comments...',
    rows: 4
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    label: 'Feedback',
    placeholder: 'Your feedback...',
    rows: 4
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Please provide a brief bio',
    rows: 4
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter message...',
    errorText: 'Message is required',
    rows: 4
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Review',
    placeholder: 'Write a review...',
    successText: 'Review submitted successfully',
    value: 'Great product!',
    rows: 4
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tweet',
    placeholder: 'What\\'s happening?',
    characterCounter: true,
    maxLength: 280,
    value: 'Hello world!',
    rows: 3
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter message...',
    required: true,
    rows: 4
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    value: 'This textarea is disabled',
    disabled: true,
    rows: 4
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resize',
    placeholder: 'Start typing...',
    autoResize: true,
    minHeight: '100px',
    maxHeight: '300px'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '400px'
  }}>
      <Textarea size="sm" label="Small" placeholder="Small textarea" rows={3} />
      <Textarea size="md" label="Medium" placeholder="Medium textarea" rows={4} />
      <Textarea size="lg" label="Large" placeholder="Large textarea" rows={5} />
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '400px'
  }}>
      <Textarea variant="default" label="Default" placeholder="Default variant" rows={3} />
      <Textarea variant="filled" label="Filled" placeholder="Filled variant" rows={3} />
      <Textarea variant="outlined" label="Outlined" placeholder="Outlined variant" rows={3} />
    </div>
}`,...m.parameters?.docs?.source}}};const w=["Default","Filled","Outlined","WithHelperText","WithError","WithSuccess","WithCharacterCounter","Required","Disabled","AutoResize","Sizes","AllVariants"];export{m as AllVariants,p as AutoResize,a as Default,d as Disabled,s as Filled,l as Outlined,c as Required,u as Sizes,i as WithCharacterCounter,t as WithError,o as WithHelperText,n as WithSuccess,w as __namedExportsOrder,x as default};
