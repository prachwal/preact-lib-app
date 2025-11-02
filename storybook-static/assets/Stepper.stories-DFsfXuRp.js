import{u as e,k as A}from"./iframe-Cmw7-rNe.js";import{d as F}from"./hooks.module-Dswl-pJE.js";import"./preload-helper-PPVm8Dsz.js";const C=({steps:r,currentStep:o,orientation:g="horizontal",onStepClick:b,className:f="",...N})=>{const y="stepper",k=g!=="horizontal"?`stepper-${g}`:"",P=[y,k,f].filter(Boolean).join(" "),I=t=>{const s=r[t];return s.status?s.status:t<o?"completed":t===o?"active":"upcoming"};return e("div",{className:P,...N,children:e("ol",{className:"stepper-list",children:r.map((t,s)=>{const n=I(s),h=b&&(n==="completed"||n==="active"),x=["stepper-step",`stepper-step-${n}`,h?"stepper-step-clickable":""].filter(Boolean).join(" "),v=e(A,{children:[e("div",{className:"stepper-marker",children:n==="completed"?e("span",{className:"stepper-icon",children:"✓"}):n==="error"?e("span",{className:"stepper-icon",children:"✗"}):t.icon?e("span",{className:"stepper-icon",children:t.icon}):e("span",{className:"stepper-number",children:s+1})}),e("div",{className:"stepper-content",children:[e("div",{className:"stepper-label",children:t.label}),t.description&&e("div",{className:"stepper-description",children:t.description})]})]});return e("li",{className:x,children:[h?e("button",{type:"button",className:"stepper-button",onClick:()=>b(s),"aria-current":n==="active"?"step":void 0,children:v}):e("div",{className:"stepper-item","aria-current":n==="active"?"step":void 0,children:v}),s<r.length-1&&e("div",{className:"stepper-connector"})]},t.id)})})})},E={title:"Components/Navigation/Stepper",tags:["autodocs"],component:C,parameters:{layout:"centered"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]}}},a=[{id:"step1",label:"Account",description:"Create your account"},{id:"step2",label:"Profile",description:"Set up your profile"},{id:"step3",label:"Preferences",description:"Choose your preferences"},{id:"step4",label:"Complete",description:"Review and finish"}],p={args:{steps:a,currentStep:1}},c={args:{steps:a,currentStep:0}},i={args:{steps:a,currentStep:3}},l={args:{steps:[{id:"step1",label:"Account",status:"completed"},{id:"step2",label:"Profile",status:"error",description:"Fix validation errors"},{id:"step3",label:"Preferences",status:"upcoming"}],currentStep:1}},u={args:{steps:a,currentStep:1,orientation:"vertical"}},m={args:{steps:[{id:"step1",label:"Cart",icon:"🛒",status:"completed"},{id:"step2",label:"Shipping",icon:"📦",status:"active"},{id:"step3",label:"Payment",icon:"💳",status:"upcoming"},{id:"step4",label:"Confirmation",icon:"✅",status:"upcoming"}],currentStep:1}},d={render:()=>{const[r,o]=F(0);return e("div",{children:[e(C,{steps:a,currentStep:r,onStepClick:o}),e("div",{style:{marginTop:"2rem",textAlign:"center"},children:[e("button",{onClick:()=>o(Math.max(0,r-1)),children:"Previous"}),e("span",{style:{margin:"0 1rem"},children:["Step ",r+1," of ",a.length]}),e("button",{onClick:()=>o(Math.min(a.length-1,r+1)),children:"Next"})]})]})}},S={args:{steps:[{id:"step1",label:"Information"},{id:"step2",label:"Confirmation"},{id:"step3",label:"Complete"}],currentStep:1}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    currentStep: 1
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    currentStep: 0
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    currentStep: 3
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      label: 'Account',
      status: 'completed'
    }, {
      id: 'step2',
      label: 'Profile',
      status: 'error',
      description: 'Fix validation errors'
    }, {
      id: 'step3',
      label: 'Preferences',
      status: 'upcoming'
    }],
    currentStep: 1
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    currentStep: 1,
    orientation: 'vertical'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      label: 'Cart',
      icon: '🛒',
      status: 'completed'
    }, {
      id: 'step2',
      label: 'Shipping',
      icon: '📦',
      status: 'active'
    }, {
      id: 'step3',
      label: 'Payment',
      icon: '💳',
      status: 'upcoming'
    }, {
      id: 'step4',
      label: 'Confirmation',
      icon: '✅',
      status: 'upcoming'
    }],
    currentStep: 1
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return <div>
        <Stepper steps={sampleSteps} currentStep={currentStep} onStepClick={setCurrentStep} />
        <div style={{
        marginTop: '2rem',
        textAlign: 'center'
      }}>
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}>Previous</button>
          <span style={{
          margin: '0 1rem'
        }}>Step {currentStep + 1} of {sampleSteps.length}</span>
          <button onClick={() => setCurrentStep(Math.min(sampleSteps.length - 1, currentStep + 1))}>
            Next
          </button>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      label: 'Information'
    }, {
      id: 'step2',
      label: 'Confirmation'
    }, {
      id: 'step3',
      label: 'Complete'
    }],
    currentStep: 1
  }
}`,...S.parameters?.docs?.source}}};const T=["Default","FirstStep","LastStep","WithError","Vertical","WithIcons","Interactive","Simple"];export{p as Default,c as FirstStep,d as Interactive,i as LastStep,S as Simple,u as Vertical,l as WithError,m as WithIcons,T as __namedExportsOrder,E as default};
