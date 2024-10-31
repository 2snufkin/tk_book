"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[7600],{541:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(4848),i=s(8453);const r={},l="Unit Tests",c={id:"Tumorotek/How To/Unit Tests",title:"Unit Tests",description:"When working on the Tumorotek project, it is essential to write unit tests for your Data Access Object (DAO) classes and Services (Managers). This guide covers both DAO and Manager testing approaches.",source:"@site/docs/Tumorotek/How To/Unit Tests.md",sourceDirName:"Tumorotek/How To",slug:"/Tumorotek/How To/Unit Tests",permalink:"/tk_book/Tumorotek/How To/Unit Tests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PDF Generation Guide for Tumorotek",permalink:"/tk_book/Tumorotek/How To/PDF Generation"},next:{title:"User Rights",permalink:"/tk_book/Tumorotek/How To/User Rights"}},o={},d=[{value:"Testing DAO Classes",id:"testing-dao-classes",level:2},{value:"Testing Manager Classes",id:"testing-manager-classes",level:2},{value:"Required Improvements",id:"required-improvements",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"unit-tests",children:"Unit Tests"})}),"\n",(0,t.jsx)(n.p,{children:"When working on the Tumorotek project, it is essential to write unit tests for your Data Access Object (DAO) classes and Services (Managers). This guide covers both DAO and Manager testing approaches."}),"\n",(0,t.jsx)(n.h2,{id:"testing-dao-classes",children:"Testing DAO Classes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check Existing Test Class:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Search your project files in the DAO test package: ",(0,t.jsx)(n.code,{children:"tumorotek-model/src/test/java/fr/aphp/tumorotek/dao/test"})]}),"\n",(0,t.jsx)(n.li,{children:"Determine if a test class already exists for the DAO"}),"\n",(0,t.jsx)(n.li,{children:"If it doesn't exist, proceed to step 2; otherwise, skip to step 4"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a New Test Class:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new test class in the correct package"}),"\n",(0,t.jsxs)(n.li,{children:["Name the class as ",(0,t.jsx)(n.code,{children:"___DaoTest"})," and extend ",(0,t.jsx)(n.code,{children:"AbstractDaoTest"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set Up Dependency Injection:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a private variable for the DAO bean"}),"\n",(0,t.jsx)(n.li,{children:"Add its setter method for dependency injection"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Follow Testing Conventions:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tests must start with the word 'test' when working with AbstractJpaTests"}),"\n",(0,t.jsx)(n.li,{children:"Write your test cases"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setting:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AbstractDaoTest"})," extends ",(0,t.jsx)(n.code,{children:"AbstractJpaTests"})]}),"\n",(0,t.jsxs)(n.li,{children:["Uses ",(0,t.jsx)(n.code,{children:"applicationContextDao-test-mysql.xml"}),", which includes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"spring-jpa-test-mysql.xml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"applicationContextDao.xml"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing-manager-classes",children:"Testing Manager Classes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check Existing Test Class:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Search the manager test package: ",(0,t.jsx)(n.code,{children:"tumorotek-core/src/test/java/fr/aphp/tumorotek/manager/test"})]}),"\n",(0,t.jsx)(n.li,{children:"If no test class exists, proceed to step 2; otherwise, skip to step 4"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a New Test Class:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new test class in the correct package"}),"\n",(0,t.jsxs)(n.li,{children:["Name the class as ",(0,t.jsx)(n.code,{children:"___ManagerTest"})," and extend ",(0,t.jsx)(n.code,{children:"AbstractManagerTest"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Set Up Dependency Injection:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a private variable for the Manager bean"}),"\n",(0,t.jsxs)(n.li,{children:["Annotate it with ",(0,t.jsx)(n.code,{children:"@Autowired"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Write Test Methods:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Annotate test methods with ",(0,t.jsx)(n.code,{children:"@Test"})]}),"\n",(0,t.jsx)(n.li,{children:"Follow testing best practices"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setting:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Uses configuration files:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"applicationContextDaoBase-test-mysql.xml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"applicationContextManagerBase.xml"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"required-improvements",children:"Required Improvements"}),"\n",(0,t.jsx)(n.p,{children:"The following improvements should be implemented:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Framework Updates:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Replace the deprecated ",(0,t.jsx)(n.code,{children:"AbstractJpaTests"})," with a modern alternative"]}),"\n",(0,t.jsxs)(n.li,{children:["Refactor ",(0,t.jsx)(n.code,{children:"AbstractManagerTest4"})," to ",(0,t.jsx)(n.code,{children:"AbstractManagerTest"})," (remove the '4')"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Testing Infrastructure:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Consider migrating to H2 database for testing"}),"\n",(0,t.jsx)(n.li,{children:"Implement a mocking library (e.g., Mockito) for more efficient and controlled testing"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Best Practices:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use meaningful test names that describe the scenario being tested"}),"\n",(0,t.jsx)(n.li,{children:"Follow the Arrange-Act-Assert pattern"}),"\n",(0,t.jsx)(n.li,{children:"Keep tests independent and isolated"}),"\n",(0,t.jsx)(n.li,{children:"Consider using test data builders for complex objects"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);