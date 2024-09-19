"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[7623],{219:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const d={},o="Controller Annotations",r={id:"ZK/Annotations",title:"Controller Annotations",description:"The package an annotation comes from helps determine its primary use case within the ZK framework.",source:"@site/docs/ZK/Annotations.md",sourceDirName:"ZK",slug:"/ZK/Annotations",permalink:"/tk_book/docs/ZK/Annotations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EnceinteManager",permalink:"/tk_book/docs/Tumorotek/Managers/EncienteManager"},next:{title:"Buttons",permalink:"/tk_book/docs/ZK/Buttons"}},l={},c=[{value:"<code>@bind</code>",id:"bind",level:4},{value:"<code>@init</code>",id:"init",level:4},{value:"<code>@command</code>",id:"command",level:4},{value:"<code>@notifyChange</code>",id:"notifychange",level:4},{value:"Summary",id:"summary",level:3},{value:"Summary",id:"summary-1",level:3}];function a(n){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"controller-annotations",children:"Controller Annotations"})}),"\n",(0,t.jsx)(e.p,{children:"The package an annotation comes from helps determine its primary use case within the ZK framework."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Annotations from ",(0,t.jsx)(e.code,{children:"org.zkoss.zk.ui.annotation"})," are typically associated with MVC"]}),"\n",(0,t.jsxs)(e.li,{children:["while those from ",(0,t.jsx)(e.code,{children:"org.zkoss.bind.annotation"})," are used in MVVM."]}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Annotation"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Pattern"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Description"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Example"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@bind"})})}),(0,t.jsx)(e.td,{children:"MVVM"}),(0,t.jsx)(e.td,{children:"Binds a ZUL component to a property in the ViewModel for two-way data binding."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'<label value="@bind(vm.myModelData)" />'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@init"})})}),(0,t.jsx)(e.td,{children:"MVVM"}),(0,t.jsx)(e.td,{children:"Initializes the ViewModel for the View. Specifies the ViewModel class to be used."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"<window apply=\"org.zkoss.bind.BindComposer\" viewModel=\"@id('vm') @init('com.example.MyViewModel')\">"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@Wire"})})}),(0,t.jsx)(e.td,{children:"MVC"}),(0,t.jsx)(e.td,{children:"Injects a reference to a ZUL component by its ID into a field in the controller or ViewModel."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"@Wire private Button myButton;"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@Listen"})})}),(0,t.jsx)(e.td,{children:"MVC"}),(0,t.jsx)(e.td,{children:"Binds a method to an event for a specific component."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'@Listen("onClick = #myButton")'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@NotifyChange"})})}),(0,t.jsx)(e.td,{children:"MVVM"}),(0,t.jsx)(e.td,{children:"Indicates that a property has changed and should notify the UI to update."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'@NotifyChange("myModelData")'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@Command"})})}),(0,t.jsx)(e.td,{children:"MVVM"}),(0,t.jsx)(e.td,{children:"Marks a method in the ViewModel as a command that can be invoked from the UI."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"@Command public void doSomething() {}"})})]})]})]}),"\n",(0,t.jsx)(e.h1,{id:"zul-annotations",children:"ZUL Annotations"}),"\n",(0,t.jsx)(e.p,{children:"It is generally true that if you see annotations like @bind, @init, @command, or @notifyChange in a ZUL file, it typically indicates that the application is using the MVVM (Model-View-ViewModel) architecture. Here\u2019s why"}),"\n",(0,t.jsx)(e.h4,{id:"bind",children:(0,t.jsx)(e.code,{children:"@bind"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Package"}),": ",(0,t.jsx)(e.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Purpose"}),": Binds a ZUL component to a property in the ViewModel."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": The ",(0,t.jsx)(e.code,{children:"@bind"})," annotation enables two-way data binding between a UI component and a property in the ViewModel. This means changes in the UI component are automatically reflected in the ViewModel, and updates in the ViewModel are reflected in the UI component."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'<window apply="org.zkoss.bind.BindComposer" viewModel="@id(\'vm\') @init(\'com.example.MyViewModel\')">\r\n    <label value="@bind(vm.myModelData)" />\r\n    <textbox value="@bind(vm.myModelData)" />\r\n</window>\n'})}),"\n",(0,t.jsxs)(e.p,{children:["In this example, the ",(0,t.jsx)(e.code,{children:"label"})," and ",(0,t.jsx)(e.code,{children:"textbox"})," components are bound to ",(0,t.jsx)(e.code,{children:"myModelData"})," in the ViewModel, allowing for automatic synchronization between the UI and the data model."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"init",children:(0,t.jsx)(e.code,{children:"@init"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Package"}),": ",(0,t.jsx)(e.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Purpose"}),": Initializes the ViewModel for the View."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": The ",(0,t.jsx)(e.code,{children:"@init"})," annotation is used to specify the ViewModel class and initialize it when the View is loaded. It sets up the initial state and binds the View to the ViewModel."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:"<window apply=\"org.zkoss.bind.BindComposer\" viewModel=\"@id('vm') @init('com.example.MyViewModel')\">\r\n    \x3c!-- UI components here --\x3e\r\n</window>\n"})}),"\n",(0,t.jsxs)(e.p,{children:["In this example, ",(0,t.jsx)(e.code,{children:"@init"})," specifies that ",(0,t.jsx)(e.code,{children:"MyViewModel"})," should be initialized and bound to the View as ",(0,t.jsx)(e.code,{children:"vm"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"command",children:(0,t.jsx)(e.code,{children:"@command"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Package"}),": ",(0,t.jsx)(e.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Purpose"}),": Defines a command that can be invoked from the UI."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": The ",(0,t.jsx)(e.code,{children:"@command"})," annotation marks methods in the ViewModel as commands that can be triggered from ZUL components. These commands handle user actions and are executed in response to events such as button clicks."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:'<button label="Do Something" onClick="@command(\'doSomething\')" />\n'})}),"\n",(0,t.jsxs)(e.p,{children:["In this example, the ",(0,t.jsx)(e.code,{children:"doSomething"})," command is invoked when the button is clicked. The corresponding method in the ViewModel will handle the action."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"notifychange",children:(0,t.jsx)(e.code,{children:"@notifyChange"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Package"}),": ",(0,t.jsx)(e.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Purpose"}),": Notifies the UI of changes to a property."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": The ",(0,t.jsx)(e.code,{children:"@notifyChange"})," annotation is used in the ViewModel to indicate that a specific property has changed and that the UI should be updated to reflect this change. It ensures that the data binding is kept in sync with the ViewModel."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'public class MyViewModel {\r\n    private String myModelData;\r\n\r\n    @NotifyChange("myModelData")\r\n    public void setMyModelData(String myModelData) {\r\n        this.myModelData = myModelData;\r\n    }\r\n\r\n    public String getMyModelData() {\r\n        return myModelData;\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["In this example, the ",(0,t.jsx)(e.code,{children:"@NotifyChange"})," annotation ensures that changes to ",(0,t.jsx)(e.code,{children:"myModelData"})," are automatically reflected in the UI components bound to this property."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@id"})}),": Used to assign a unique ID to a UI component in ZUL, facilitating references in the controller or ViewModel."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@bind"})}),": Enables two-way data binding between a ZUL component and a property in the ViewModel."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@init"})}),": Initializes the ViewModel for the View, setting up the initial state and binding."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@command"})}),": Marks methods in the ViewModel as commands that can be triggered by UI events."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@notifyChange"})}),": Notifies the UI to update when a property in the ViewModel changes."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"These annotations are integral to managing interactions and data binding in ZK applications, enabling efficient and dynamic updates between the UI and underlying data models."}),"\n",(0,t.jsx)(e.h3,{id:"summary-1",children:"Summary"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"MVC"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Annotations Used"}),": ",(0,t.jsx)(e.code,{children:"@id"}),", ",(0,t.jsx)(e.code,{children:"@Wire"}),", ",(0,t.jsx)(e.code,{children:"@Listen"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Focus"}),": Manual event handling and component wiring. The Controller manages interactions between the View and the Model."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"MVVM"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Annotations Used"}),": ",(0,t.jsx)(e.code,{children:"@bind"}),", ",(0,t.jsx)(e.code,{children:"@init"}),", ",(0,t.jsx)(e.code,{children:"@NotifyChange"}),", ",(0,t.jsx)(e.code,{children:"@Command"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Focus"}),": Two-way data binding between the View and ViewModel. Direct method invocation from the UI to the ViewModel and automatic synchronization of data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Common Annotations"}),":"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@Wire"})}),": For injecting component references."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.code,{children:"@Listen"})}),": For binding methods to events."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"This table provides a clear overview of how annotations are utilized in each pattern and highlights the tools available for managing data binding and event handling in ZK applications."})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>r});var t=i(6540);const s={},d=t.createContext(s);function o(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);