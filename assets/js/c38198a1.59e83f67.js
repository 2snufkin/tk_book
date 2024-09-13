"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[7601],{590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(4848),i=t(8453);const s={},o=void 0,a={id:"Tumorotek/Genericdaojpa",title:"Genericdaojpa",description:"All or most of the DAO interfaces in Tumorotek extends GenericDaoJpa.",source:"@site/docs/Tumorotek/Genericdaojpa.md",sourceDirName:"Tumorotek",slug:"/Tumorotek/Genericdaojpa",permalink:"/tk_book/docs/Tumorotek/Genericdaojpa",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tk_book/docs/Tumorotek/Entity"},next:{title:"Introduction",permalink:"/tk_book/docs/Tumorotek/Introduction"}},d={},c=[{value:"GenericDaoJpa Interface",id:"genericdaojpa-interface",level:3},{value:"Purpose",id:"purpose",level:4},{value:"Methods and Their Purposes",id:"methods-and-their-purposes",level:4},{value:"Delete",id:"delete",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"All or most of the DAO interfaces in Tumorotek extends GenericDaoJpa."}),"\n",(0,r.jsx)(n.h3,{id:"genericdaojpa-interface",children:"GenericDaoJpa Interface"}),"\n",(0,r.jsx)(n.p,{children:"The GenericDaoJpa interface defines a generic Data Access Object (DAO) using Java Persistence API (JPA) for performing CRUD (Create, Read, Update, Delete) operations on a database. This interface is parameterized with a type T (the entity type) and PK (the primary key type which extends Serializable)."}),"\n",(0,r.jsx)(n.h4,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(n.p,{children:"The purpose of this interface is to provide a standardized set of methods for interacting with a database, allowing for the persistence, retrieval, updating, and deletion of objects. By defining these methods generically, this interface can be implemented for any entity type, promoting code reuse and reducing boilerplate."}),"\n",(0,r.jsx)(n.h4,{id:"methods-and-their-purposes",children:"Methods and Their Purposes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"createObject(T newInstance)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Purpose:"})," Persist a new instance of an object in the database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Parameter:"})," newInstance is the instance of the object to be created."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CRUD Action:"})," Create"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"mergeObject(T o)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Purpose:"})," Merge the state of the given entity into the current persistence context."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Parameter:"})," o is the instance of the object to be merged."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Returns:"})," The managed instance that the state was merged to."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CRUD Action:"})," Update"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"findById(PK id)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Purpose:"})," Retrieve an object that was persistent in the database using its primary key."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Parameter:"})," id is the primary key of the object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Returns:"})," The object with the given primary key."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CRUD Action:"})," Read"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"findAll()"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Purpose:"})," Return all objects of a certain type present in the database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Returns:"})," A list of all objects of the specified type."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CRUD Action:"})," Read"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"updateObject(T transientObject)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Purpose:"})," Save the changes made to a persistent object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Parameter:"})," transientObject is the object to be updated in the database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"CRUD Action:"})," Update"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"removeObject(PK id)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose:"})," Remove an object from the database."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameter:"})," id is the primary key of the object to be removed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CRUD Action:"})," Delete"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"delete",children:"Delete"}),"\n",(0,r.jsx)(n.p,{children:"Where there is a need to delete a record from [Databse] your first reflax may be to cretae a named query. For Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@NamedQuery(name = "ParametreValeurSpecifique.deleteByPlateformeIdAndCode",\n            query = "DELETE FROM ParametreValeurSpecifique p WHERE p.plateformeId = ?1 AND p.code = ?2")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then to create a method with [the] dame name ",(0,r.jsx)(n.code,{children:"deleteByPlateformeIdAndCode"})," in [the] DAO, Manager, and in [the] ManagerImpl [to] call [the] deleteByPlateformeIdAndCode on [the] dao instance. But it won't work. You will get an exception: object is not an instance of declaring class. The excpetion happens when you call [the] invoke method in public class FinderIntroductionInterceptor implements IntroductionInterceptor."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Override\npublic Object invoke(final MethodInvocation methodInvocation) throws Throwable {\n    final FinderExecutor genericDao = (FinderExecutor) methodInvocation.getThis();\n    final String methodName = methodInvocation.getMethod().getName();\n    if(methodName.startsWith("find") && !methodName.equals("findById") && !methodName.equals("findAll")) {\n        final Object[] arguments = methodInvocation.getArguments();\n        return genericDao.executeFinder(methodInvocation.getMethod(), arguments);\n    }\n    else if(methodName.startsWith("count")) {\n        final Object[] arguments = methodInvocation.getArguments();\n        return genericDao.executeCounter(methodInvocation.getMethod(), arguments);         \n    }\n    return methodInvocation.proceed();\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'Now, try to find in [the] code base a named query that corresponds to "DELETE FROM...".'}),"\n",(0,r.jsx)(n.p,{children:'I didn\'t find any in [the] main Entites. This means that deleting from [the] Database in Tumorotek is implemented differently and not by [the] mechanism of named queries. A similar exploration through [the] different DAOs of [the] project shows that most of [the] methods are declared starting with "find". Even if what you need is to count, developers called it "findCount". The support for invoking methods that start with "count" is later introduction (2022).'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'else if(methodName.startsWith("count"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"How do we delete in Tumorotek?"}),' In [the manager interface], create a method that starts with "remove" and not "delete", and finish it with "Manager". If deleting in cascade is needed, see code examples from EchantillonManager. If not, call ',(0,r.jsx)(n.a,{href:"#methods-and-their-purposes",children:"the removeObject method"})," and pass[...] ID[...] record you want to delete."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);