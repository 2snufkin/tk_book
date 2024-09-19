"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[4610],{7969:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(4848),a=r(8453);const o={},s=void 0,i={id:"Tumorotek/General/Dao",title:"Dao",description:"This tutorial will guide you how to create and work with a new DAO.",source:"@site/docs/Tumorotek/General/Dao.md",sourceDirName:"Tumorotek/General",slug:"/Tumorotek/General/Dao",permalink:"/tk_book/docs/Tumorotek/General/Dao",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigManager",permalink:"/tk_book/docs/Tumorotek/General/Config"},next:{title:"Dev And Env Setup",permalink:"/tk_book/docs/Tumorotek/General/Dev And Env Setup"}},c={},l=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This tutorial will guide you how to create and work with a new DAO."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a DAO Interface:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"// Example UserDao.java\npublic interface UserDao GenericDaoJpa<T,T>{\n    User findById(Long id);\n    // other methods...\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DAO implementation:"}),"\nWhen you define a method in a Spring Data JPA repository interface with a specific name, Spring Data JPA looks for a named query with the same name defined in the JPA entity associated with the repository."]}),"\n",(0,t.jsx)(n.p,{children:"For example, you have a method in the EchantillonDao interface:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"List<Echantillon> findByCode(String code);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Configure the DAO Bean in applicationContextDao.xml:"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\x3c!-- applicationContextDao.xml --\x3e\n<beans>\n    \x3c!-- Copy From Here--\x3e\n    <bean id="!name!" parent="abstractDao">\n        <property name="proxyInterfaces">\n            <value>!packageName.DaoClassName!</value>\n        </property>\n        <property name="target">\n            <bean parent="abstractDaoTarget">\n                <constructor-arg>\n                    <value>!packageName.EntityName!</value>\n                </constructor-arg>\n            </bean>\n        </property>\n    </bean>\n</beans>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Inject the DAO to the Service who uses it:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<beans>\n    \x3c!-- Configure UserService bean --\x3e\n    <bean id="userService" class="com.example.service.UserService">\n        <property name="userDao" ref="userDao" />\n    </bean>\n</beans>\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Write a Test:"}),"\nExtend the ",(0,t.jsx)(n.code,{children:"AbstractDaoTest"})," and create setter methods as necessary."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Optional: Include Test in pom.xml:"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- pom.xml --\x3e\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-surefire-plugin</artifactId>\n            <version>3.0.0-M5</version>\n            <configuration>\n                <includes>\n                    <include>**/UserServiceTest.java</include>\n                </includes>\n            </configuration>`\n        </plugin>`\n    </plugins>`\n</build>`\n"})}),"\n",(0,t.jsx)(n.p,{children:"These steps provide a basic structure for setting up DAOs, Services, and tests in an older Spring project using XML configuration. Adjust package names, file paths, and other details to match your specific project structure."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);