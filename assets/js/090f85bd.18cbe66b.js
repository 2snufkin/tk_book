"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[3523],{550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(4848),r=t(8453);const s={},i=void 0,l={id:"ZK/Reusable Components",title:"Reusable Components",description:"Reusable Components",source:"@site/docs/ZK/Reusable Components.md",sourceDirName:"ZK",slug:"/ZK/Reusable Components",permalink:"/tk_book/ZK/Reusable Components",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Opening and Handling Modals",permalink:"/tk_book/ZK/Opening And Handling Modals"},next:{title:"UI Refresh in ZK Framework: MVC vs MVVM",permalink:"/tk_book/ZK/Ui Update"}},a={},c=[];function d(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Reusable Components"}),"\n",(0,o.jsxs)(n.p,{children:["You can create a reusable grid component using the",(0,o.jsx)(n.code,{children:"<?component>"})," processing instruction. This guide will demonstrate how to create a reusable grid component and pass a list of data and a button's action method as attributes to the component. The reusable component is of type Create a Reusable zul Component Create a New ZUL File for the Reusable Component: Create a new ZUL file (e.g., ReusableGrid.zul) where you will define your reusable component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<grid model="${arg.listModel}"  apply="zk.gradle.vm.grid.dynamic_renderer.ReusableGridController"\n\t  rowRenderer="zk.gradle.vm.grid.dynamic_renderer.SimpleRenderer"\n\t  sclass="narrow" height="400px">\n\t\t<columns>\n\t\t<column width="5%">Id</column>\n\t\t<column width="30%">Language</column>\n\t\t<column width="40%">Contributor</column>\n\t\t<column width="10%">Charset</column>\n\t\t<column width="15%">Like</column>\n\t</columns>\n\n</grid>\n'})}),"\n",(0,o.jsx)(n.p,{children:"List its attributes: Write the use of the component. for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<gridDerive listModel="${$composer.prodDerives}"/>                                        \n'})}),"\n",(0,o.jsx)(n.p,{children:"attribute: listModel argument: List<ProdDerives>"}),"\n",(0,o.jsx)(n.p,{children:"Create the Java Controller for the Reusable Grid Component:: Create a corresponding Java controller class (e.g., ReusableGridController.java). Every attribute must have a Getter in the Java Controller for this component. In this case, you must have a method. In this example listModel. If you pass an attribute that already exists in zk (like visible) you should extend the more generic ZK component. For example, in this case, you may want to extend Grid."}),"\n",(0,o.jsx)(n.p,{children:"Use it in another component: Open another component file where you want to use the reusable component and:"}),"\n",(0,o.jsxs)(n.p,{children:["Create a reference: use the ",(0,o.jsx)(n.code,{children:"<?component>"})," tag at the top of the file"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<?component name="gridDerive" macroURI="./grid.zul" ?>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Place your component in the zul file using the same name you used in the name attribute."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<gridDerive listModel="${$composer.contributors}"/>\n'})}),"\n",(0,o.jsx)(n.p,{children:"Code Example"}),"\n",(0,o.jsx)(n.p,{children:"Reusable Component"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<zk>\n<button disabled="${arg.isDisable}">Button From Outside</button>\n</zk>\n'})}),"\n",(0,o.jsx)(n.p,{children:"When ZK loads this component, it won't know what disabled is. It will look for setDisabled method."}),"\n",(0,o.jsx)(n.p,{children:"Destination Component"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<?component name="customButton" macroURI="/zuls/component/Buttoncustom.zul" ?>\n// Some code\n<customButton isDisable="true" />\n'})}),"\n",(0,o.jsx)(n.p,{children:"Exceptions"}),"\n",(0,o.jsx)(n.p,{children:"org.zkoss.zk.ui.UiException: Page not found: /zuls/component/GridDerive.zul:"}),"\n",(0,o.jsx)(n.p,{children:"Verify that there are no errors in the macroURI path."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'<?component name="customButton" macroURI="/zuls/component/Buttoncustom.zul" ?>\n'})}),"\n",(0,o.jsx)(n.p,{children:"If you still get this message, recompile/build the project. If you still get this message, move to step 3."}),"\n",(0,o.jsx)(n.p,{children:"The problem is not in the path; The Exception message is misleading which makes developers work harder. The problem lies within the zul file. There is some incoherence. If you replace it with"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'// Some code \n<zk>\n<button disabled="${arg.isDisable}">Button From Outside</button>\n</zk>\n'})}),"\n",(0,o.jsx)(n.p,{children:"You will see that the exception will disappear."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);