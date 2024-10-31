"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[8900],{2790:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var l=i(4848),t=i(8453);const o={},r="Zul File",c={id:"ZK/Zul file",title:"Zul File",description:"Window Configuration:",source:"@site/docs/ZK/Zul file.md",sourceDirName:"ZK",slug:"/ZK/Zul file",permalink:"/tk_book/ZK/Zul file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ZUL Page Lifecycle",permalink:"/tk_book/ZK/ZUL Page Lifecycle"},next:{title:"Introduction",permalink:"/tk_book/"}},s={},a=[{value:"Window Configuration:",id:"window-configuration",level:2},{value:"Looping",id:"looping",level:2},{value:"<code>&lt;grid&gt;</code> Element",id:"grid-element",level:2},{value:"Conditional Rendering",id:"conditional-rendering",level:2},{value:"Images",id:"images",level:2},{value:"Buttons",id:"buttons",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"zul-file",children:"Zul File"})}),"\n",(0,l.jsx)(n.h2,{id:"window-configuration",children:"Window Configuration:"}),"\n",(0,l.jsxs)(n.p,{children:["Those are the minimum attributes that should be preset in the window config. The only thing you should modify is the Controller Ref in the ",(0,l.jsx)(n.code,{children:"@init"})," argument"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"apply=\"org.zkoss.bind.BindComposer\"\nviewModel=\"@id('vm') @init('fr.aphp.tumorotek.action.administration.ParametresController')\"\ninternalization\n"})}),"\n",(0,l.jsxs)(n.p,{children:['If you want some values in the template to be translated you can\'t hard code them. If you give a button "Oui" title it will stay Oui even if the user is on a browser that uses English as a Language.  In this case you will instruct the template to take the value from a *properties file. The syntax is\n',(0,l.jsx)(n.code,{children:"${c:l(the key name in the properties file)}"}),"\nfor example:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"title=\"${c:l('params.application.title')}\"\n"})}),"\n",(0,l.jsx)(n.h2,{id:"looping",children:"Looping"}),"\n",(0,l.jsx)(n.p,{children:"The are several ways to loop over a collection inside a ZUL file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<forEach> element.\n<zk>\n    \x3c!-- Assume 'items' is a collection in your ViewModel --\x3e\n    <forEach items=\"@load(vm.collectionVariable)\">\n        \x3c!-- 'each' represents the current item in the collection --\x3e\n        <label value=\"@load(each.property)\" />\n    </forEach>\n</zk>\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<forEach>"})," Element: The ",(0,l.jsx)(n.code,{children:"<forEach>"})," element is used to iterate over a collection."]}),"\n",(0,l.jsx)(n.li,{children:'items Attribute:\n`items="@load(vm.items)": Binds the collection (vm.collectionVariable in this case) from the ViewModel to the loop.'}),"\n",(0,l.jsxs)(n.li,{children:["Element:\nPlace the component(s) inside the ",(0,l.jsx)(n.code,{children:"<forEach>"})," block that you want to repeat for each item in the collection.In this example, the ",(0,l.jsx)(n.code,{children:"<label>"})," element will be rendered as many times as there are items in the collection."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@load(each.property)"})," Attribute:\nUse @load to bind properties of the current item (",(0,l.jsx)(n.code,{children:"each"}),") in the loop. This is how you get access to attributes of each item."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["This way, content inside ",(0,l.jsx)(n.code,{children:"<forEach>"})," block will be repeated for each item in the collection. Adjust based on your ViewModel and item structure."]}),"\n",(0,l.jsxs)(n.h2,{id:"grid-element",children:[(0,l.jsx)(n.code,{children:"<grid>"})," Element"]}),"\n",(0,l.jsx)(n.p,{children:"In Tumorotek, collections are usually presented using a grid element.\nDefine collection attribute of grid element:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<grid model="@load(vm.parameterList)">\n'})}),"\n",(0,l.jsx)(n.p,{children:"Define columns:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<columns>\n    <column width="40%"/>\n    <column width="40%"/>\n    <column />\n</columns>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Define template and one row per element in collection with individual cells for each column. Access each item's attribute with ",(0,l.jsx)(n.code,{children:"each"})," keyword."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<template name="model">\n    \x3c!-- Row generated for every item --\x3e\n    <row>\n      \n          \x3c!-- Cell I for Column I--\x3e\n       <cell>\n          <label value="${c:l(each.code)}" style="color: #636363;" sclass="formLabel" />\n       </cell>\n\n          \x3c!-- Cell II for Column II--\x3e\n       <cell>\n          <label value="@load(each.valeur ? c:l(\'general.checkbox.true\') : c:l(\'general.checkbox.false\'))"\n                visible="${!vm.isEditMode(each) || each.type ne \'boolean\'}"/>\n       </cell>\n       \n          \x3c!-- Cell III for Column III--\x3e\n       <cell>\n             <button label="${c:l(\'general.edit\')}" visible="${!vm.isEditMode(each)}"\n                   onClick="@command(\'editParameter\', parameter=each)"\n                   image="/images/icones/edit.png" height="24px"\n             />\n       </cell>\n\n    </row>\n</template>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"conditional-rendering",children:"Conditional Rendering"}),"\n",(0,l.jsxs)(n.p,{children:["In ZK Framework, setting ",(0,l.jsx)(n.code,{children:"visible"})," attribute to false versus using ",(0,l.jsx)(n.code,{children:"if"})," attribute serve different purposes regarding DOM and component rendering."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Displaying if variable is null: ",(0,l.jsx)(n.code,{children:'if="${empty vm.logo}"'})]}),"\n",(0,l.jsxs)(n.li,{children:["Displaying if variable equals something: ",(0,l.jsx)(n.code,{children:"if=\"${each.type eq 'something'}"}),"\nYou can achieve opposite outcome by using ",(0,l.jsx)(n.code,{children:"not"})," keyword, for example: ",(0,l.jsx)(n.code,{children:'if="${not empty vm.logo}"'})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,l.jsx)(n.p,{children:"Create an AImage Object in Controller and load it into img element:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<image content="@load(vm.logo)" />\n'})}),"\n",(0,l.jsx)(n.h2,{id:"buttons",children:"Buttons"}),"\n",(0,l.jsx)(n.p,{children:"Refer to Event Handling section."}),"\n",(0,l.jsx)(n.p,{children:"For more details consult Grid chapter."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var l=i(6540);const t={},o=l.createContext(t);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);