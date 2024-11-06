"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[3278],{763:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"ZK/Ui Update","title":"UI Refresh in ZK Framework: MVC vs MVVM","description":"In ZK, managing UI updates and refreshing the view in response to data changes is a critical aspect of building dynamic web applications. The approach to UI refresh can vary significantly depending on whether you are using the MVC (Model-View-Controller) pattern or the MVVM (Model-View-ViewModel) pattern. This document provides a detailed comparison of UI refresh strategies in both architectural patterns.","source":"@site/docs/ZK/Ui Update.md","sourceDirName":"ZK","slug":"/ZK/Ui Update","permalink":"/tk_book/ZK/Ui Update","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Reusable Components","permalink":"/tk_book/ZK/Reusable Components"},"next":{"title":"ZUL Page Lifecycle","permalink":"/tk_book/ZK/ZUL Page Lifecycle"}}');var s=i(4848),t=i(8453);const l={},o="UI Refresh in ZK Framework: MVC vs MVVM",a={},d=[{value:"<strong>1. Introduction</strong>",id:"1-introduction",level:2},{value:"<strong>2. MVC (Model-View-Controller)</strong>",id:"2-mvc-model-view-controller",level:2},{value:"<strong>Overview</strong>",id:"overview",level:3},{value:"<strong>UI Refresh Mechanism</strong>",id:"ui-refresh-mechanism",level:3},{value:"<strong>ZUL File</strong>",id:"zul-file",level:4},{value:"<strong>Java Controller</strong>",id:"java-controller",level:4},{value:"<strong>3. MVVM (Model-View-ViewModel)</strong>",id:"3-mvvm-model-view-viewmodel",level:2},{value:"<strong>Overview</strong>",id:"overview-1",level:3},{value:"<strong>UI Refresh Mechanism</strong>",id:"ui-refresh-mechanism-1",level:3},{value:"<strong>ZUL File</strong>",id:"zul-file-1",level:4},{value:"<strong>Java ViewModel</strong>",id:"java-viewmodel",level:4},{value:"<strong>4. Comparison</strong>",id:"4-comparison",level:2},{value:"<strong>5. Conclusion</strong>",id:"5-conclusion",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ui-refresh-in-zk-framework-mvc-vs-mvvm",children:"UI Refresh in ZK Framework: MVC vs MVVM"})}),"\n",(0,s.jsx)(n.p,{children:"In ZK, managing UI updates and refreshing the view in response to data changes is a critical aspect of building dynamic web applications. The approach to UI refresh can vary significantly depending on whether you are using the MVC (Model-View-Controller) pattern or the MVVM (Model-View-ViewModel) pattern. This document provides a detailed comparison of UI refresh strategies in both architectural patterns."}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:(0,s.jsx)(n.strong,{children:"1. Introduction"})}),"\n",(0,s.jsx)(n.p,{children:"In ZK, the UI refresh mechanism determines how and when changes in the data or model are reflected in the user interface. The primary difference between MVC and MVVM lies in how data binding and UI updates are handled."}),"\n",(0,s.jsx)(n.h2,{id:"2-mvc-model-view-controller",children:(0,s.jsx)(n.strong,{children:"2. MVC (Model-View-Controller)"})}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:(0,s.jsx)(n.strong,{children:"Overview"})}),"\n",(0,s.jsx)(n.p,{children:"In the MVC pattern, the UI refresh is managed manually in the controller. The controller is responsible for responding to user interactions, updating the model, and reflecting changes in the view."}),"\n",(0,s.jsx)(n.h3,{id:"ui-refresh-mechanism",children:(0,s.jsx)(n.strong,{children:"UI Refresh Mechanism"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Manual Updates"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Controller Role"}),": In MVC, the controller handles the logic to manually update the UI components based on changes in the data or user actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Explicit Calls"}),": You need to explicitly update the view by calling methods on UI components to reflect changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Event Handling"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Event Listeners"}),": Events are handled in the controller methods. For instance, clicking a button triggers a method in the controller, which then updates the relevant UI components."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.h4,{id:"zul-file",children:(0,s.jsx)(n.strong,{children:"ZUL File"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<window title="MVC Example" border="normal" apply="com.example.MyMvcController">\r\n    <vbox>\r\n        <label id="lblMessage" value="Hello, MVC!" />\r\n        <textbox id="txtInput" />\r\n        <button id="btnSubmit" label="Submit" onClick="onClickSubmit" />\r\n    </vbox>\r\n</window>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"java-controller",children:(0,s.jsx)(n.strong,{children:"Java Controller"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package com.example;\r\n\r\nimport org.zkoss.zk.ui.Component;\r\nimport org.zkoss.zk.ui.select.SelectorComposer;\r\nimport org.zkoss.zk.ui.select.annotation.Wire;\r\nimport org.zkoss.zul.Label;\r\nimport org.zkoss.zul.Textbox;\r\n\r\npublic class MyMvcController extends SelectorComposer<Component> {\r\n\r\n    @Wire\r\n    private Label lblMessage;\r\n\r\n    @Wire\r\n    private Textbox txtInput;\r\n\r\n    public void onClickSubmit() {\r\n        // Manual data handling\r\n        String input = txtInput.getValue();\r\n        lblMessage.setValue("Hello, " + input);\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pros"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Full control over when and how the UI is updated."}),"\n",(0,s.jsx)(n.li,{children:"Suitable for simpler applications where manual management is feasible."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cons"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Requires explicit code for every update, leading to more boilerplate code."}),"\n",(0,s.jsx)(n.li,{children:"Can become cumbersome and error-prone in large applications with complex UI interactions."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-mvvm-model-view-viewmodel",children:(0,s.jsx)(n.strong,{children:"3. MVVM (Model-View-ViewModel)"})}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:(0,s.jsx)(n.strong,{children:"Overview"})}),"\n",(0,s.jsx)(n.p,{children:"In the MVVM pattern, the UI refresh is managed through data binding between the View and the ViewModel. The ViewModel is responsible for exposing data and commands that the View binds to, facilitating automatic updates."}),"\n",(0,s.jsx)(n.h3,{id:"ui-refresh-mechanism-1",children:(0,s.jsx)(n.strong,{children:"UI Refresh Mechanism"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Automatic Data Binding"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ViewModel Role"}),": In MVVM, the ViewModel exposes properties and commands. Changes in these properties are automatically reflected in the View due to data binding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Two-Way Binding"}),": Binding can be two-way, meaning changes in the UI automatically update the ViewModel and vice versa."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Declarative UI Binding"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ZUL Binding"}),": Use the ",(0,s.jsx)(n.code,{children:"@bind"})," annotation in ZUL files to create bindings between UI components and ViewModel properties."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.h4,{id:"zul-file-1",children:(0,s.jsx)(n.strong,{children:"ZUL File"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<window title="MVVM Example" border="normal" apply="org.zkoss.bind.BindComposer">\r\n    <vbox>\r\n        <label value="@bind(vm.message)" />\r\n        <textbox value="@bind(vm.inputMessage)" />\r\n        <button label="Submit" onClick="@command(\'updateMessage\')" />\r\n    </vbox>\r\n</window>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"java-viewmodel",children:(0,s.jsx)(n.strong,{children:"Java ViewModel"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'package com.example;\r\n\r\nimport org.zkoss.bind.BindComposer;\r\nimport org.zkoss.bind.annotation.Command;\r\nimport org.zkoss.bind.annotation.NotifyChange;\r\n\r\npublic class MyViewModel {\r\n\r\n    private String message = "Hello, MVVM!";\r\n    private String inputMessage;\r\n\r\n    public String getMessage() {\r\n        return message;\r\n    }\r\n\r\n    public String getInputMessage() {\r\n        return inputMessage;\r\n    }\r\n\r\n    public void setInputMessage(String inputMessage) {\r\n        this.inputMessage = inputMessage;\r\n    }\r\n\r\n    @Command\r\n    @NotifyChange("message")\r\n    public void updateMessage() {\r\n        message = "Hello, " + inputMessage;\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Pros and Cons"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pros"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Simplifies UI updates with automatic data binding."}),"\n",(0,s.jsx)(n.li,{children:"Reduces boilerplate code and improves maintainability."}),"\n",(0,s.jsx)(n.li,{children:"Facilitates better separation of concerns between UI and business logic."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cons"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can have a steeper learning curve, especially for developers new to data binding concepts."}),"\n",(0,s.jsx)(n.li,{children:"Requires understanding and managing binding annotations and their interactions."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-comparison",children:(0,s.jsx)(n.strong,{children:"4. Comparison"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Aspect"}),(0,s.jsx)(n.th,{children:"MVC"}),(0,s.jsx)(n.th,{children:"MVVM"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Data Binding"})}),(0,s.jsx)(n.td,{children:"Manual, explicit updates"}),(0,s.jsxs)(n.td,{children:["Automatic, declarative with ",(0,s.jsx)(n.code,{children:"@bind"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"UI Updates"})}),(0,s.jsx)(n.td,{children:"Managed explicitly in controller code"}),(0,s.jsx)(n.td,{children:"Managed automatically through data binding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Event Handling"})}),(0,s.jsx)(n.td,{children:"Handled explicitly in controller methods"}),(0,s.jsxs)(n.td,{children:["Handled declaratively through ",(0,s.jsx)(n.code,{children:"@command"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Code Complexity"})}),(0,s.jsx)(n.td,{children:"Higher, requires manual updates and wiring"}),(0,s.jsx)(n.td,{children:"Lower, less boilerplate due to automatic binding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Separation of Concerns"})}),(0,s.jsx)(n.td,{children:"Moderate, manual management of UI and logic"}),(0,s.jsx)(n.td,{children:"High, with clear separation of View and ViewModel"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"5-conclusion",children:(0,s.jsx)(n.strong,{children:"5. Conclusion"})}),"\n",(0,s.jsx)(n.p,{children:"Choosing between MVC and MVVM for managing UI refresh in ZK depends on the complexity of your application and your preferences for managing data updates and UI interactions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MVC"})," provides more control and flexibility but requires manual handling of UI updates and data synchronization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MVVM"})," simplifies UI management with automatic data binding and reduces boilerplate code, making it a good choice for more complex applications with extensive data binding needs."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);