"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[9312],{5485:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(4848),t=i(8453);const r={},a="ConfigManager",l={id:"Tumorotek/Packages/core/ConfigManager",title:"ConfigManager",description:"Overview",source:"@site/docs/Tumorotek/Packages/core/ConfigManager.md",sourceDirName:"Tumorotek/Packages/core",slug:"/Tumorotek/Packages/core/ConfigManager",permalink:"/tk_book/Tumorotek/Packages/core/ConfigManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packages",permalink:"/tk_book/Tumorotek/Packages/"},next:{title:"ConteneurManager",permalink:"/tk_book/Tumorotek/Packages/core/ConteneurManager"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Purpose and Benefits",id:"purpose-and-benefits",level:2},{value:"Why ConfigManager?",id:"why-configmanager",level:3},{value:"Key Advantages",id:"key-advantages",level:3},{value:"Implementation Guide",id:"implementation-guide",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Key Configuration Categories",id:"key-configuration-categories",level:3},{value:"1. Database Settings",id:"1-database-settings",level:4},{value:"2. Export Formats",id:"2-export-formats",level:4},{value:"3. Entity Identifiers",id:"3-entity-identifiers",level:4},{value:"4. System Headers",id:"4-system-headers",level:4},{value:"Best Practices",id:"best-practices",level:2},{value:"Migration from TKConstants",id:"migration-from-tkconstants",level:2},{value:"Future Considerations",id:"future-considerations",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"configmanager",children:"ConfigManager"})}),"\n",(0,s.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ConfigManager"})," is a core configuration utility class in Tumorotek that centralizes configuration management and constant definitions. It serves as the single source of truth for various system-wide settings, including:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Database configurations"}),"\n",(0,s.jsx)(e.li,{children:"File export settings"}),"\n",(0,s.jsx)(e.li,{children:"Entity identifiers"}),"\n",(0,s.jsx)(e.li,{children:"System constants"}),"\n",(0,s.jsx)(e.li,{children:"Display preferences"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"purpose-and-benefits",children:"Purpose and Benefits"}),"\n",(0,s.jsx)(e.h3,{id:"why-configmanager",children:"Why ConfigManager?"}),"\n",(0,s.jsxs)(e.p,{children:["While the project contains a legacy ",(0,s.jsx)(e.code,{children:"TKConstants"})," interface, ",(0,s.jsx)(e.code,{children:"ConfigManager"})," represents the modern, recommended approach for configuration management. This aligns with current Java best practices, which discourage using interfaces solely for constant storage."]}),"\n",(0,s.jsx)(e.h3,{id:"key-advantages",children:"Key Advantages"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Centralized Management"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Single point of configuration"}),"\n",(0,s.jsx)(e.li,{children:"Reduced maintenance overhead"}),"\n",(0,s.jsx)(e.li,{children:"Minimized risk of inconsistencies"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Type Safety"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Compile-time constant validation"}),"\n",(0,s.jsx)(e.li,{children:"Proper encapsulation"}),"\n",(0,s.jsx)(e.li,{children:"Enhanced code reliability"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Development Efficiency"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Clear constant organization"}),"\n",(0,s.jsx)(e.li,{children:"Improved code readability"}),"\n",(0,s.jsx)(e.li,{children:"Simplified maintenance"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Future-Proofing"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Easy configuration updates"}),"\n",(0,s.jsx)(e.li,{children:"Scalable design"}),"\n",(0,s.jsx)(e.li,{children:"Better change management"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"implementation-guide",children:"Implementation Guide"}),"\n",(0,s.jsx)(e.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsxs)(e.p,{children:["Constants in ",(0,s.jsx)(e.code,{children:"ConfigManager"})," are accessed using static references:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"// Database type configuration\r\nString dbType = ConfigManager.DB_ORACLE;\r\n\r\n// Export format settings\r\nString mimeType = ConfigManager.OFFICE_OPENXML_MIME_TYPE;\r\n\r\n// Display settings\r\nString fontFamily = ConfigManager.G2D_FONT_FAMILY;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"key-configuration-categories",children:"Key Configuration Categories"}),"\n",(0,s.jsx)(e.h4,{id:"1-database-settings",children:"1. Database Settings"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public static final String DB_ORACLE = "ORACLE";\r\npublic static final String DB_MYSQL = "MYSQL";\n'})}),"\n",(0,s.jsx)(e.h4,{id:"2-export-formats",children:"2. Export Formats"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public static final String OFFICE_OPENXML_MIME_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";\r\npublic static final String OFFICE_EXCEL_MIME_TYPE = "application/vnd.ms-excel";\n'})}),"\n",(0,s.jsx)(e.h4,{id:"3-entity-identifiers",children:"3. Entity Identifiers"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"public static final Short ENTITE_ID_PATIENT = 1;\r\npublic static final Short ENTITE_ID_PRELEVEMENT = 2;\r\n// ... additional entity IDs\n"})}),"\n",(0,s.jsx)(e.h4,{id:"4-system-headers",children:"4. System Headers"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'public static final String ENTETE_PRELEVEMENT = "Prelevement";\r\npublic static final String ENTETE_TUBE = "Tube";\r\n// ... other headers\n'})}),"\n",(0,s.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Always use ConfigManager over direct constant definition"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Maintains consistency"}),"\n",(0,s.jsx)(e.li,{children:"Simplifies future updates"}),"\n",(0,s.jsx)(e.li,{children:"Reduces code duplication"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Access patterns"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Use static imports judiciously"}),"\n",(0,s.jsx)(e.li,{children:"Group related constants together"}),"\n",(0,s.jsx)(e.li,{children:"Document any non-obvious constant usage"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Extension guidelines"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Follow existing naming conventions"}),"\n",(0,s.jsx)(e.li,{children:"Add clear documentation for new constants"}),"\n",(0,s.jsx)(e.li,{children:"Consider backward compatibility"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"migration-from-tkconstants",children:"Migration from TKConstants"}),"\n",(0,s.jsxs)(e.p,{children:["When working with existing code that uses ",(0,s.jsx)(e.code,{children:"TKConstants"}),", gradually migrate to ",(0,s.jsx)(e.code,{children:"ConfigManager"}),":"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Identify constants in use"}),"\n",(0,s.jsx)(e.li,{children:"Map them to ConfigManager equivalents"}),"\n",(0,s.jsx)(e.li,{children:"Update references systematically"}),"\n",(0,s.jsx)(e.li,{children:"Test thoroughly after migration"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"future-considerations",children:"Future Considerations"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Configuration externalization options"}),"\n",(0,s.jsx)(e.li,{children:"Dynamic configuration support"}),"\n",(0,s.jsx)(e.li,{children:"Environment-specific settings"}),"\n",(0,s.jsx)(e.li,{children:"Integration with configuration management systems"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);