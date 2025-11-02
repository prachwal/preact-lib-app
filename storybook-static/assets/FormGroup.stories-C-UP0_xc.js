import{u as e}from"./iframe-Cmw7-rNe.js";import{I as a}from"./Input-D4OWgN8z.js";import{T as S}from"./Textarea-Bdq4RRp7.js";import{C as l}from"./Checkbox-CnsraLIV.js";import{R as f}from"./Radio-D6FC2Bmt.js";import{S as v}from"./Select-D3QypPbQ.js";import"./preload-helper-PPVm8Dsz.js";const r=({label:x,helperText:C,errorText:b,successText:g,required:E=!1,optional:F=!1,className:T="",children:G,...k})=>{const q=["form-group",b?"form-group-error":"",g?"form-group-success":"",T].filter(Boolean).join(" "),y=b||g||C;return e("div",{className:q,...k,children:[x&&e("label",{className:"form-group-label",children:[x,E&&e("span",{className:"form-group-required",children:"*"}),F&&e("span",{className:"form-group-optional",children:"(optional)"})]}),e("div",{className:"form-group-content",children:G}),y&&e("span",{className:`form-group-message ${b?"form-group-message-error":""} ${g?"form-group-message-success":""}`,children:y})]})},J={title:"Components/Forms/FormGroup",tags:["autodocs"],component:r,parameters:{layout:"centered"},argTypes:{required:{control:"boolean"},optional:{control:"boolean"}}},o={args:{label:"Email Address",children:e(a,{placeholder:"Enter your email"})}},s={args:{label:"Password",helperText:"Password must be at least 8 characters",children:e(a,{type:"password",placeholder:"Enter password"})}},t={args:{label:"Username",errorText:"Username is already taken",children:e(a,{placeholder:"Enter username"})}},c={args:{label:"Email",successText:"Email is available",children:e(a,{placeholder:"email@example.com"})}},i={args:{label:"Full Name",required:!0,children:e(a,{placeholder:"John Doe"})}},n={args:{label:"Middle Name",optional:!0,children:e(a,{placeholder:"Optional"})}},p={args:{label:"Description",helperText:"Provide a detailed description",children:e(S,{placeholder:"Enter description...",rows:4})}},d={args:{label:"Country",required:!0,children:e(v,{options:[{value:"",label:"Select country"},{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"}]})}},m={render:()=>e(r,{label:"Interests",helperText:"Select all that apply",children:e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e(l,{label:"Technology"}),e(l,{label:"Sports"}),e(l,{label:"Music"}),e(l,{label:"Travel"})]})})},u={render:()=>e(r,{label:"Contact Preference",required:!0,children:e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e(f,{label:"Email",name:"contact",value:"email"}),e(f,{label:"Phone",name:"contact",value:"phone"}),e(f,{label:"SMS",name:"contact",value:"sms"})]})})},h={render:()=>e("form",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e(r,{label:"Full Name",required:!0,children:e(a,{placeholder:"John Doe"})}),e(r,{label:"Email",required:!0,helperText:"We'll never share your email",children:e(a,{type:"email",placeholder:"email@example.com"})}),e(r,{label:"Country",required:!0,children:e(v,{options:[{value:"",label:"Select country"},{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"}]})}),e(r,{label:"Bio",optional:!0,children:e(S,{placeholder:"Tell us about yourself...",rows:4})}),e(r,{label:"Notifications",children:e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e(l,{label:"Email notifications"}),e(l,{label:"SMS notifications"}),e(l,{label:"Push notifications"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    children: <Input placeholder="Enter your email" />
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    helperText: 'Password must be at least 8 characters',
    children: <Input type="password" placeholder="Enter password" />
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    errorText: 'Username is already taken',
    children: <Input placeholder="Enter username" />
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    successText: 'Email is available',
    children: <Input placeholder="email@example.com" />
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    required: true,
    children: <Input placeholder="John Doe" />
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Middle Name',
    optional: true,
    children: <Input placeholder="Optional" />
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    helperText: 'Provide a detailed description',
    children: <Textarea placeholder="Enter description..." rows={4} />
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    required: true,
    children: <Select options={[{
      value: '',
      label: 'Select country'
    }, {
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }]} />
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FormGroup label="Interests" helperText="Select all that apply">
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <Checkbox label="Technology" />
        <Checkbox label="Sports" />
        <Checkbox label="Music" />
        <Checkbox label="Travel" />
      </div>
    </FormGroup>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FormGroup label="Contact Preference" required>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <Radio label="Email" name="contact" value="email" />
        <Radio label="Phone" name="contact" value="phone" />
        <Radio label="SMS" name="contact" value="sms" />
      </div>
    </FormGroup>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <form style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <FormGroup label="Full Name" required>
        <Input placeholder="John Doe" />
      </FormGroup>

      <FormGroup label="Email" required helperText="We'll never share your email">
        <Input type="email" placeholder="email@example.com" />
      </FormGroup>

      <FormGroup label="Country" required>
        <Select options={[{
        value: '',
        label: 'Select country'
      }, {
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }]} />
      </FormGroup>

      <FormGroup label="Bio" optional>
        <Textarea placeholder="Tell us about yourself..." rows={4} />
      </FormGroup>

      <FormGroup label="Notifications">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
          <Checkbox label="Email notifications" />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Push notifications" />
        </div>
      </FormGroup>
    </form>
}`,...h.parameters?.docs?.source}}};const K=["Default","WithHelperText","WithError","WithSuccess","Required","Optional","WithTextarea","WithSelect","WithCheckboxGroup","WithRadioGroup","CompleteForm"];export{h as CompleteForm,o as Default,n as Optional,i as Required,m as WithCheckboxGroup,t as WithError,s as WithHelperText,u as WithRadioGroup,d as WithSelect,c as WithSuccess,p as WithTextarea,K as __namedExportsOrder,J as default};
