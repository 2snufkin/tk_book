"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[8009],{5650:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(4848),a=s(8453);const o={},t="ConfigManager",r={id:"Tumorotek/Config",title:"ConfigManager",description:"ConfigManager is a configuration utility class used in Tumorotek to centralize and manage various constants and configurations. It stores predefined values such as database types, MIME types for file exports, entity IDs, and other commonly used constants. This approach helps streamline application configuration and ensures consistency across the project by reducing hardcoding and duplicative definitions.",source:"@site/docs/Tumorotek/Config.md",sourceDirName:"Tumorotek",slug:"/Tumorotek/Config",permalink:"/tkbook/docs/Tumorotek/Config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coding Starndards",permalink:"/tkbook/docs/Tumorotek/Coding Starndards"},next:{title:"Dao",permalink:"/tkbook/docs/Tumorotek/Dao"}},c={},d=[{value:"Importance of Using ConfigManager",id:"importance-of-using-configmanager",level:4},{value:"How to Use ConfigManager",id:"how-to-use-configmanager",level:4},{value:"Example Usage",id:"example-usage",level:5},{value:"Key Constants in ConfigManager",id:"key-constants-in-configmanager",level:4}];function l(e){const n={code:"code",h1:"h1",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configmanager",children:"ConfigManager"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ConfigManager"})," is a configuration utility class used in Tumorotek to centralize and manage various constants and configurations. It stores predefined values such as database types, MIME types for file exports, entity IDs, and other commonly used constants. This approach helps streamline application configuration and ensures consistency across the project by reducing hardcoding and duplicative definitions.\r\nInstead of scattering constants and configuration settings throughout the codebase, ",(0,i.jsx)(n.code,{children:"ConfigManager"})," serves as a single, reliable source for these values. This approach avoids the pitfalls of hardcoding values directly in business logic, which can lead to duplication, inconsistency, and errors."]}),"\n",(0,i.jsx)(n.p,{children:"While TKConstants exists in the project, it is recommended to use ConfigManager for managing configuration settings and constants. Modern Java development best practices discourage the use of interfaces for holding constants. Instead, using dedicated classes like ConfigManager aligns with cleaner design principles and better encapsulation of configuration logic."}),"\n",(0,i.jsx)(n.h4,{id:"importance-of-using-configmanager",children:"Importance of Using ConfigManager"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Centralized Configuration:"})," By defining constants in one location, ",(0,i.jsx)(n.code,{children:"ConfigManager"})," ensures that changes to configuration values need to be made only once, reducing maintenance efforts and minimizing errors."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consistency:"})," It promotes consistency throughout the application by using standardized values for configuration settings, headers, fonts, entity IDs, and more."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ease of Use:"})," It simplifies the development process by providing a single source of truth for configuration values, making the code more readable and easier to manage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scalability:"})," It allows for easy scaling and adaptation of the application. When configuration values need to be changed or extended, modifications can be done quickly without impacting multiple parts of the codebase."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-use-configmanager",children:"How to Use ConfigManager"}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"ConfigManager"})," is straightforward. You access its constants directly using the class name since all values are declared as ",(0,i.jsx)(n.code,{children:"public static final"}),". This means they are class-level constants, which are accessible without creating an instance of ",(0,i.jsx)(n.code,{children:"ConfigManager"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsxs)(n.p,{children:["Here\u2019s an example of how to use ",(0,i.jsx)(n.code,{children:"ConfigManager"})," to access a configuration value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Accessing the predefined font family for G2D rendering\r\nString selectedFont = ConfigManager.G2D_FONT_FAMILY;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the variable ",(0,i.jsx)(n.code,{children:"selectedFont"})," will be assigned the value ",(0,i.jsx)(n.code,{children:'"DejaVu Serif"'}),", which is defined in ",(0,i.jsx)(n.code,{children:"ConfigManager"}),". This usage pattern applies to all other constants defined within the class, making it easy to reference configuration settings across the application."]}),"\n",(0,i.jsx)(n.h4,{id:"key-constants-in-configmanager",children:"Key Constants in ConfigManager"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Headers:"})," Constants like ",(0,i.jsx)(n.code,{children:"ENTETE_PRELEVEMENT"}),", ",(0,i.jsx)(n.code,{children:"ENTETE_TUBE"}),", etc., define headers used throughout the application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database Types:"})," Constants such as ",(0,i.jsx)(n.code,{children:"DB_ORACLE"})," and ",(0,i.jsx)(n.code,{children:"DB_MYSQL"})," specify supported database types."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MIME Types:"})," ",(0,i.jsx)(n.code,{children:"OFFICE_OPENXML_MIME_TYPE"})," and ",(0,i.jsx)(n.code,{children:"OFFICE_EXCEL_MIME_TYPE"})," are used for identifying Excel file formats."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Entity IDs:"})," Short values like ",(0,i.jsx)(n.code,{children:"ENTITE_ID_PATIENT"}),", ",(0,i.jsx)(n.code,{children:"ENTITE_ID_PRELEVEMENT"}),", etc., represent entity identifiers used in data exports."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Character Sets and Fonts:"})," Settings like ",(0,i.jsx)(n.code,{children:"UNICODE_CHARSET"})," and ",(0,i.jsx)(n.code,{children:"G2D_FONT_FAMILY"})," specify character encoding and font preferences."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var i=s(6540);const a={},o=i.createContext(a);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);