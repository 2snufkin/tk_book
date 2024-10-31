"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[8288],{2071:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(4848),d=i(8453);const t={},o="Annotations",r={id:"ZK/Generic Forward Composer",title:"Annotations",description:"Controller",source:"@site/docs/ZK/Generic Forward Composer.md",sourceDirName:"ZK",slug:"/ZK/Generic Forward Composer",permalink:"/tk_book/ZK/Generic Forward Composer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Handling",permalink:"/tk_book/ZK/Event Handling"},next:{title:"Grid",permalink:"/tk_book/ZK/Grid"}},l={},c=[{value:"Controller",id:"controller",level:2},{value:"Key Annotations in ZUL Files",id:"key-annotations-in-zul-files",level:2},{value:"<code>@bind</code>",id:"bind",level:4},{value:"<code>@init</code>",id:"init",level:4},{value:"<code>@command</code>",id:"command",level:4},{value:"<code>@notifyChange</code>",id:"notifychange",level:4},{value:"Summary",id:"summary",level:3},{value:"Summary",id:"summary-1",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"annotations",children:"Annotations"})}),"\n",(0,s.jsx)(n.h2,{id:"controller",children:"Controller"}),"\n",(0,s.jsx)(n.p,{children:"In summary, the package an annotation comes from helps determine its primary use case within the ZK framework."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Annotations from ",(0,s.jsx)(n.code,{children:"org.zkoss.zk.ui.annotation"})," are typically associated with MVC"]}),"\n",(0,s.jsxs)(n.li,{children:["while those from ",(0,s.jsx)(n.code,{children:"org.zkoss.bind.annotation"})," are used in MVVM."]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Annotation"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Pattern"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Example"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@id"})})}),(0,s.jsx)(n.td,{children:"MVC, MVVM"}),(0,s.jsx)(n.td,{children:"Specifies the ID of a ZUL component for reference in the controller or ViewModel."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<button id="myButton" label="Click Me"/>'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@bind"})})}),(0,s.jsx)(n.td,{children:"MVVM"}),(0,s.jsx)(n.td,{children:"Binds a ZUL component to a property in the ViewModel for two-way data binding."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'<label value="@bind(vm.myModelData)" />'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@init"})})}),(0,s.jsx)(n.td,{children:"MVVM"}),(0,s.jsx)(n.td,{children:"Initializes the ViewModel for the View. Specifies the ViewModel class to be used."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"<window apply=\"org.zkoss.bind.BindComposer\" viewModel=\"@id('vm') @init('com.example.MyViewModel')\">"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@Wire"})})}),(0,s.jsx)(n.td,{children:"MVC"}),(0,s.jsx)(n.td,{children:"Injects a reference to a ZUL component by its ID into a field in the controller or ViewModel."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@Wire private Button myButton;"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@Listen"})})}),(0,s.jsx)(n.td,{children:"MVC"}),(0,s.jsx)(n.td,{children:"Binds a method to an event for a specific component."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'@Listen("onClick = #myButton")'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@NotifyChange"})})}),(0,s.jsx)(n.td,{children:"MVVM"}),(0,s.jsx)(n.td,{children:"Indicates that a property has changed and should notify the UI to update."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'@NotifyChange("myModelData")'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@Command"})})}),(0,s.jsx)(n.td,{children:"MVVM"}),(0,s.jsx)(n.td,{children:"Marks a method in the ViewModel as a command that can be invoked from the UI."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"@Command public void doSomething() {}"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"key-annotations-in-zul-files",children:"Key Annotations in ZUL Files"}),"\n",(0,s.jsx)(n.p,{children:"It is generally true that if you see annotations like @bind, @init, @command, or @notifyChange in a ZUL file, it typically indicates that the application is using the MVVM (Model-View-ViewModel) architecture. Here\u2019s why"}),"\n",(0,s.jsx)(n.h4,{id:"bind",children:(0,s.jsx)(n.code,{children:"@bind"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Package"}),": ",(0,s.jsx)(n.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Binds a ZUL component to a property in the ViewModel."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"@bind"})," annotation enables two-way data binding between a UI component and a property in the ViewModel. This means changes in the UI component are automatically reflected in the ViewModel, and updates in the ViewModel are reflected in the UI component."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<window apply="org.zkoss.bind.BindComposer" viewModel="@id(\'vm\') @init(\'com.example.MyViewModel\')">\r\n    <label value="@bind(vm.myModelData)" />\r\n    <textbox value="@bind(vm.myModelData)" />\r\n</window>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"label"})," and ",(0,s.jsx)(n.code,{children:"textbox"})," components are bound to ",(0,s.jsx)(n.code,{children:"myModelData"})," in the ViewModel, allowing for automatic synchronization between the UI and the data model."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"init",children:(0,s.jsx)(n.code,{children:"@init"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Package"}),": ",(0,s.jsx)(n.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Initializes the ViewModel for the View."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"@init"})," annotation is used to specify the ViewModel class and initialize it when the View is loaded. It sets up the initial state and binds the View to the ViewModel."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<window apply=\"org.zkoss.bind.BindComposer\" viewModel=\"@id('vm') @init('com.example.MyViewModel')\">\r\n    \x3c!-- UI components here --\x3e\r\n</window>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"@init"})," specifies that ",(0,s.jsx)(n.code,{children:"MyViewModel"})," should be initialized and bound to the View as ",(0,s.jsx)(n.code,{children:"vm"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"command",children:(0,s.jsx)(n.code,{children:"@command"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Package"}),": ",(0,s.jsx)(n.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Defines a command that can be invoked from the UI."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"@command"})," annotation marks methods in the ViewModel as commands that can be triggered from ZUL components. These commands handle user actions and are executed in response to events such as button clicks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<button label="Do Something" onClick="@command(\'doSomething\')" />\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"doSomething"})," command is invoked when the button is clicked. The corresponding method in the ViewModel will handle the action."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"notifychange",children:(0,s.jsx)(n.code,{children:"@notifyChange"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Package"}),": ",(0,s.jsx)(n.code,{children:"org.zkoss.bind.annotation"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Purpose"}),": Notifies the UI of changes to a property."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": The ",(0,s.jsx)(n.code,{children:"@notifyChange"})," annotation is used in the ViewModel to indicate that a specific property has changed and that the UI should be updated to reflect this change. It ensures that the data binding is kept in sync with the ViewModel."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public class MyViewModel {\r\n    private String myModelData;\r\n\r\n    @NotifyChange("myModelData")\r\n    public void setMyModelData(String myModelData) {\r\n        this.myModelData = myModelData;\r\n    }\r\n\r\n    public String getMyModelData() {\r\n        return myModelData;\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"@NotifyChange"})," annotation ensures that changes to ",(0,s.jsx)(n.code,{children:"myModelData"})," are automatically reflected in the UI components bound to this property."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@id"})}),": Used to assign a unique ID to a UI component in ZUL, facilitating references in the controller or ViewModel."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@bind"})}),": Enables two-way data binding between a ZUL component and a property in the ViewModel."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@init"})}),": Initializes the ViewModel for the View, setting up the initial state and binding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@command"})}),": Marks methods in the ViewModel as commands that can be triggered by UI events."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@notifyChange"})}),": Notifies the UI to update when a property in the ViewModel changes."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These annotations are integral to managing interactions and data binding in ZK applications, enabling efficient and dynamic updates between the UI and underlying data models."}),"\n",(0,s.jsx)(n.h3,{id:"summary-1",children:"Summary"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MVC"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Annotations Used"}),": ",(0,s.jsx)(n.code,{children:"@id"}),", ",(0,s.jsx)(n.code,{children:"@Wire"}),", ",(0,s.jsx)(n.code,{children:"@Listen"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Focus"}),": Manual event handling and component wiring. The Controller manages interactions between the View and the Model."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MVVM"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Annotations Used"}),": ",(0,s.jsx)(n.code,{children:"@bind"}),", ",(0,s.jsx)(n.code,{children:"@init"}),", ",(0,s.jsx)(n.code,{children:"@NotifyChange"}),", ",(0,s.jsx)(n.code,{children:"@Command"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Focus"}),": Two-way data binding between the View and ViewModel. Direct method invocation from the UI to the ViewModel and automatic synchronization of data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Common Annotations"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@Wire"})}),": For injecting component references."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@Listen"})}),": For binding methods to events."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This table provides a clear overview of how annotations are utilized in each pattern and highlights the tools available for managing data binding and event handling in ZK applications."})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const d={},t=s.createContext(d);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);