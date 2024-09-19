"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[5502],{4322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),r=n(8453);const a={},i="Testing DAO Classes:",o={id:"Tumorotek/General/Unit Tests",title:"Testing DAO Classes:",description:"1. Check Existing Test Class:",source:"@site/docs/Tumorotek/General/Unit Tests.md",sourceDirName:"Tumorotek/General",slug:"/Tumorotek/General/Unit Tests",permalink:"/tk_book/docs/Tumorotek/General/Unit Tests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Liquibase",permalink:"/tk_book/docs/Tumorotek/General/Liquibase"},next:{title:"EnceinteManager Methods",permalink:"/tk_book/docs/Tumorotek/Managers/EncienteManager"}},c={},l=[];function d(e){const t={h1:"h1",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing-dao-classes",children:"Testing DAO Classes:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Check Existing Test Class:\nSearch your project files or manually explore the specified DAO test package (tumorotek-model/src/test/java/fr/aphp/tumorotek/dao/test) to determine if a test class already exists for the DAO. If it doesn't exist, move to step 2; otherwise, proceed to step 4."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a New Test Class:\nIf needed, create a new test class in the correct package.\nName the class as ___DaoTest and extend AbstractDaoTest."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set Up Dependency Injection:\nCreate a private variable for the DAO bean and its setter method for dependency injection."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Follow Testing Conventions:\nTests must start with the word 'test' when working with AbstractJpaTests.\nWrite your test cases."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Setting:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AbstractDaoTest extends AbstractJpaTests."}),"\n",(0,s.jsx)(t.li,{children:"It uses the applicationContextDao-test-mysql.xml, which includes necessary resources: spring-jpa-test-mysql.xml and applicationContextDao.xml."}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"testing-manager-classes",children:"Testing Manager Classes:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Check Existing Test Class:\nSearch the specified manager test package (tumorotek-core/src/test/java/fr/aphp/tumorotek/manager/test) to find an existing test class for the manager. If it doesn't exist, move to step 2; otherwise, proceed to step 4."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a New Test Class:\nIf needed, create a new test class in the correct package.\nName the class as ___ManagerTest and extend AbstractManagerTest."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Set Up Dependency Injection:\nCreate a private variable for the Manager bean and annotate it with @Autowired."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Annotation for Tests:\nAnnotate your test methods with @Test."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Setting:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"AbstractManagerTest is deprecated. Refactor it to AbstractManagerTest (remove the '4')."}),"\n",(0,s.jsx)(t.li,{children:"It uses applicationContextDaoBase-test-mysql.xml and applicationContextManagerBase.xml for configurations."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Actions to be taken:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Replace the deprecated AbstractJpaTests with an alternative (mention the recommended alternative)."}),"\n",(0,s.jsx)(t.li,{children:"Consider refactoring the current configuration to use an H2 database for testing."}),"\n",(0,s.jsx)(t.li,{children:"Refactor AbstractManagerTest4 to AbstractManagerTest as the '4' holds no significance."}),"\n",(0,s.jsx)(t.li,{children:"Consider using a mocking library for more efficient and controlled testing."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);