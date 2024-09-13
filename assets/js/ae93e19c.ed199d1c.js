"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[3223],{653:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(4848),o=i(8453);const r={},a="Grid",l={id:"ZK/Grid",title:"Grid",description:"Grids in ZK are powerful components for displaying organized data. This guide will walk you through how to work with a Grid, separate data into pages, and implement sorting. We will also explore accessing controller variables in the view and using the master-detail feature.",source:"@site/docs/ZK/Grid.md",sourceDirName:"ZK",slug:"/ZK/Grid",permalink:"/tk_book/docs/ZK/Grid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/tk_book/docs/ZK/Generic Forward Composer"},next:{title:"ZK Framework: Listbox Component Manual",permalink:"/tk_book/docs/ZK/Listbox"}},s={},d=[{value:"Accessing Controller&#39;s Variables in View",id:"accessing-controllers-variables-in-view",level:2},{value:"Model Usage",id:"model-usage",level:2},{value:"Column and Header",id:"column-and-header",level:2},{value:"Paging",id:"paging",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Detail",id:"detail",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"grid",children:"Grid"})}),"\n",(0,t.jsx)(n.p,{children:"Grids in ZK are powerful components for displaying organized data. This guide will walk you through how to work with a Grid, separate data into pages, and implement sorting. We will also explore accessing controller variables in the view and using the master-detail feature."}),"\n",(0,t.jsx)(n.h2,{id:"accessing-controllers-variables-in-view",children:"Accessing Controller's Variables in View"}),"\n",(0,t.jsxs)(n.p,{children:["In ZK, you can access variables in the controller from the view using EL expressions. The implicit variable ",(0,t.jsx)(n.code,{children:"win$composer"}),' refers to the controller assigned to the Window component with the ID "win". For example, to assign the model attribute of a Grid with a data model called ',(0,t.jsx)(n.code,{children:"carsModel"})," in the controller, use the expression:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<grid model="${win$composer.carsModel}" ...>\n    \x3c!-- Grid content --\x3e\n</grid>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"model-usage",children:"Model Usage"}),"\n",(0,t.jsxs)(n.p,{children:["When working with Grid data, you often use a data model, such as ListModelList. In the following snippet, we call the controller's ",(0,t.jsx)(n.code,{children:"getCarsModel()"})," method through the EL expression:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<grid model="${win$composer.carsModel}" ...>\n    ...\n    <template name="model">\n        <row>...\n            <label value="${each.type}" \n                visible="@{fwinRef$composer.method}"/>\n        ..</row>\n    </template>\n</grid>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<template>"})," tag generates components iteratively, and the implicit object ",(0,t.jsx)(n.code,{children:"each"})," references each item being iterated in the model."]}),"\n",(0,t.jsx)(n.p,{children:'If there is a logic that calls for a method in the controller you can call it with "@x$composer.y"'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["x= composer reference. it's the value of ",(0,t.jsx)(n.code,{children:'<window id="x">'})]}),"\n",(0,t.jsx)(n.li,{children:"y= the name of the method or variable"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"column-and-header",children:"Column and Header"}),"\n",(0,t.jsx)(n.p,{children:"The number of columns in a Grid depends on the Column components declared within the Columns component. Set the width of each column using the width attribute and specify the title in the column header with the label attribute. The Auxhead component allows additional header bars to group existing column headers. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<auxhead>\n    ...\n    <auxheader label="Tech Specification" align="center" colspan="2" />\n</auxhead>\n<columns>\n    ...\n    <column label="Transmission" ... />\n</columns>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"paging",children:"Paging"}),"\n",(0,t.jsx)(n.p,{children:'To enable paging in a Grid, set the mold attribute to "paging". Use the pageSize attribute to control the number of rows per page. Example:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<grid ... mold="paging" pageSize="5">\n    \x3c!-- Grid content --\x3e\n</grid>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"sorting",children:"Sorting"}),"\n",(0,t.jsx)(n.p,{children:'Grids in ZK have built-in sorting functionalities. To enable sorting, assign a Column\'s sort attribute with "auto" and specify property for sorting. Example:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<column label="Make" align="center" sort="auto(make)" />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"detail",children:"Detail"}),"\n",(0,t.jsx)(n.p,{children:"Grids support master-detail feature allowing you to attach additional content to each row. The detailed view is hidden until expanded. To implement master-detail, wrap detailed content with Detail component. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<row>\n    <detail>...</detail>\n    \x3c!-- Other row components --\x3e\n</row>\n"})}),"\n",(0,t.jsx)(n.p,{children:"This guide provides comprehensive overview of working with a Grid in ZK. Experiment with examples to enhance understanding of these features."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);