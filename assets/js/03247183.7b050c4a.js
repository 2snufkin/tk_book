"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[6077],{8985:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(4848),t=a(8453);const o={},i=void 0,s={id:"Java & Spring/Dao",title:"Dao",description:"This tutorial will guide you how to create and work with a new DAO.",source:"@site/docs/Java & Spring/Dao.md",sourceDirName:"Java & Spring",slug:"/Java & Spring/Dao",permalink:"/tkbook/docs/Java & Spring/Dao",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Repository, Manager, and Test",permalink:"/tkbook/docs/Java & Spring/Creating new Entity"},next:{title:"Dependencies",permalink:"/tkbook/docs/Java & Spring/Dependencies"}},c={},l=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This tutorial will guide you how to create and work with a new DAO."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Create a DAO Interface:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Example UserDao.java\npublic interface UserDao GenericDaoJpa<T,T>{\n    User findById(Long id);\n    // other methods...\n}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DAO implementation:"}),"\nWhen you define a method in a Spring Data JPA repository interface with a specific name, Spring Data JPA looks for a named query with the same name defined in the JPA entity associated with the repository.\nFor example, you have a method in the EchantillonDao interface:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Echantillon> findByCode(String code);\n"})}),"\n","And in your Echantillon entity, you have a named query with the same name:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@NamedQueries(value = {@NamedQuery(name = "Echantillon.findByCode", query = "SELECT e FROM Echantillon e WHERE e.code like ?1")})\n'})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Configure the DAO Bean in applicationContextDao.xml:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<beans>\n \n    \x3c!-- Copy From Here--\x3e\n    <bean id="!name!" parent="abstractDao">\n        <property name="proxyInterfaces">\n            <value>!packageName.DaoClassName!</value>\n        </property>\n        <property name="target">\n            <bean parent="abstractDaoTarget">\n                <constructor-arg>\n                    <value>!packageName.EntityName!</value>\n                </constructor-arg>\n            </bean>\n        </property>\n    </bean>\n        \x3c!-- Till Here --\x3e\n</beans>\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Inject the DAO to the Service who uses it:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<beans>\n\n    \x3c!-- Configure UserService bean --\x3e\n    <bean id="userService" class="com.example.service.UserService">\n        <property name="userDao" ref="userDao" />\n    </bean>\n</beans>\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Write a Test:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class ParametreDaoTest extends AbstractDaoTest {\n\n   private ParametreDao parametreDao;\n\n   public void setParametreDao(ParametreDao parametreDao){\n      this.parametreDao = parametreDao;\n   }\n\n   public void testFindByPlateformeIdAndCode(){\n      Integer plateformID = 1;\n      String code = "welcome.message";\n\n      Parametre newParametre = new Parametre();\n      newParametre.setPlateformeId(plateformID);\n      newParametre.setCode(code);\n\n      parametreDao.createObject(newParametre);\n\n      List<Parametre> result = parametreDao.findByPlateformeIdAndCode(plateformID, code);\n      assertNotNull(result);\n      assertEquals(1 , result.size());\n   }\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Optional: Include Test in pom.xml:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!-- pom.xml --\x3e\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-surefire-plugin</artifactId>\n            <version>3.0.0-M5</version>\n            <configuration>\n                <includes>\n                    <include>**/UserServiceTest.java</include>\n                </includes>`\n            </configuration>`\n        </plugin>`\n`    `</plugins>`\n`</build>`\n"})}),"\n",(0,r.jsx)(n.p,{children:"These steps provide a basic structure for setting up DAOs, Services, and tests in an older Spring project using XML configuration. Adjust package names, file paths, and other details to match your specific project structure."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var r=a(6540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);