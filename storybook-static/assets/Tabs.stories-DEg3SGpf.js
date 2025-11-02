import{u as e}from"./iframe-Cmw7-rNe.js";import{d as N}from"./hooks.module-Dswl-pJE.js";import"./preload-helper-PPVm8Dsz.js";const v=({tabs:t,defaultTab:f,activeTab:y,variant:S="underline",orientation:h="horizontal",onChange:x,className:A="",...w})=>{const[D,B]=N(f||t[0]?.id),T=y??D,C=a=>{t.find(g=>g.id===a)?.disabled||(y||B(a),x?.(a))},R="tabs",$=`tabs-${S}`,E=h!=="horizontal"?`tabs-${h}`:"",H=[R,$,E,A].filter(Boolean).join(" "),s=t.find(a=>a.id===T);return e("div",{className:H,...w,children:[e("div",{className:"tabs-list",role:"tablist","aria-orientation":h,children:t.map(a=>{const u=a.id===T,g=["tabs-tab",u?"tabs-tab-active":"",a.disabled?"tabs-tab-disabled":""].filter(Boolean).join(" ");return e("button",{type:"button",role:"tab","aria-selected":u,"aria-controls":`panel-${a.id}`,id:`tab-${a.id}`,className:g,onClick:()=>C(a.id),disabled:a.disabled,children:[a.icon&&e("span",{className:"tabs-icon",children:a.icon}),a.label]},a.id)})}),s?.content&&e("div",{className:"tabs-panel",role:"tabpanel",id:`panel-${s.id}`,"aria-labelledby":`tab-${s.id}`,children:s.content})]})},O={title:"Components/Navigation/Tabs",tags:["autodocs"],component:v,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["underline","boxed","pills"]},orientation:{control:{type:"select"},options:["horizontal","vertical"]}}},n=[{id:"tab1",label:"Profile",content:e("div",{children:"Profile content here"})},{id:"tab2",label:"Settings",content:e("div",{children:"Settings content here"})},{id:"tab3",label:"Messages",content:e("div",{children:"Messages content here"})}],i={args:{tabs:n}},r={args:{tabs:n,variant:"boxed"}},o={args:{tabs:n,variant:"pills"}},l={args:{tabs:n,orientation:"vertical"}},d={args:{tabs:[{id:"home",label:"Home",icon:"🏠",content:e("div",{children:"Home content"})},{id:"search",label:"Search",icon:"🔍",content:e("div",{children:"Search content"})},{id:"settings",label:"Settings",icon:"⚙️",content:e("div",{children:"Settings content"})}]}},c={args:{tabs:[{id:"tab1",label:"Enabled",content:e("div",{children:"Enabled tab"})},{id:"tab2",label:"Disabled",content:e("div",{children:"Disabled tab"}),disabled:!0},{id:"tab3",label:"Also Enabled",content:e("div",{children:"Another enabled tab"})}]}},b={args:{tabs:n,defaultTab:"tab2"}},p={args:{tabs:[{id:"overview",label:"Overview",content:e("div",{style:{padding:"1rem"},children:[e("h3",{children:"Dashboard Overview"}),e("p",{children:"Welcome to your dashboard. Here you can see an overview of your account."})]})},{id:"analytics",label:"Analytics",content:e("div",{style:{padding:"1rem"},children:[e("h3",{children:"Analytics"}),e("p",{children:"View detailed analytics and statistics here."}),e("ul",{children:[e("li",{children:"Total users: 1,234"}),e("li",{children:"Active sessions: 89"}),e("li",{children:"Revenue: $12,345"})]})]})},{id:"reports",label:"Reports",content:e("div",{style:{padding:"1rem"},children:[e("h3",{children:"Reports"}),e("p",{children:"Generate and download reports."})]})}]}},m={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:[e("div",{children:[e("h4",{style:{marginBottom:"0.5rem"},children:"Underline"}),e(v,{tabs:n,variant:"underline"})]}),e("div",{children:[e("h4",{style:{marginBottom:"0.5rem"},children:"Boxed"}),e(v,{tabs:n,variant:"boxed"})]}),e("div",{children:[e("h4",{style:{marginBottom:"0.5rem"},children:"Pills"}),e(v,{tabs:n,variant:"pills"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'pills'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    orientation: 'vertical'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'home',
      label: 'Home',
      icon: '🏠',
      content: <div>Home content</div>
    }, {
      id: 'search',
      label: 'Search',
      icon: '🔍',
      content: <div>Search content</div>
    }, {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      content: <div>Settings content</div>
    }]
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab1',
      label: 'Enabled',
      content: <div>Enabled tab</div>
    }, {
      id: 'tab2',
      label: 'Disabled',
      content: <div>Disabled tab</div>,
      disabled: true
    }, {
      id: 'tab3',
      label: 'Also Enabled',
      content: <div>Another enabled tab</div>
    }]
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    defaultTab: 'tab2'
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'overview',
      label: 'Overview',
      content: <div style={{
        padding: '1rem'
      }}>
            <h3>Dashboard Overview</h3>
            <p>Welcome to your dashboard. Here you can see an overview of your account.</p>
          </div>
    }, {
      id: 'analytics',
      label: 'Analytics',
      content: <div style={{
        padding: '1rem'
      }}>
            <h3>Analytics</h3>
            <p>View detailed analytics and statistics here.</p>
            <ul>
              <li>Total users: 1,234</li>
              <li>Active sessions: 89</li>
              <li>Revenue: $12,345</li>
            </ul>
          </div>
    }, {
      id: 'reports',
      label: 'Reports',
      content: <div style={{
        padding: '1rem'
      }}>
            <h3>Reports</h3>
            <p>Generate and download reports.</p>
          </div>
    }]
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '500px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Underline</h4>
        <Tabs tabs={sampleTabs} variant="underline" />
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Boxed</h4>
        <Tabs tabs={sampleTabs} variant="boxed" />
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Pills</h4>
        <Tabs tabs={sampleTabs} variant="pills" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const z=["Default","Boxed","Pills","Vertical","WithIcons","WithDisabledTab","DefaultActive","RichContent","AllVariants"];export{m as AllVariants,r as Boxed,i as Default,b as DefaultActive,o as Pills,p as RichContent,l as Vertical,c as WithDisabledTab,d as WithIcons,z as __namedExportsOrder,O as default};
