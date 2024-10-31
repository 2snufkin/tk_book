"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[7169],{4274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(4848),o=t(8453);const i={},a="PDF Generation Guide for Tumorotek",s={id:"Tumorotek/How To/PDF Generation",title:"PDF Generation Guide for Tumorotek",description:"This guide explains how to generate and download PDF documents in Tumorotek using ZK Framework.",source:"@site/docs/Tumorotek/How To/PDF Generation.md",sourceDirName:"Tumorotek/How To",slug:"/Tumorotek/How To/PDF Generation",permalink:"/tk_book/Tumorotek/How To/PDF Generation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Naming Conventions",permalink:"/tk_book/Tumorotek/General/Naming Conventions"},next:{title:"Unit Tests",permalink:"/tk_book/Tumorotek/How To/Unit Tests"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2},{value:"1. Basic PDF Generation",id:"1-basic-pdf-generation",level:3},{value:"2. Filename Generation Helper",id:"2-filename-generation-helper",level:3},{value:"3. Document Creation Method",id:"3-document-creation-method",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Utility Methods",id:"utility-methods",level:2},{value:"Example Content Section",id:"example-content-section",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pdf-generation-guide-for-tumorotek",children:"PDF Generation Guide for Tumorotek"})}),"\n",(0,r.jsx)(n.p,{children:"This guide explains how to generate and download PDF documents in Tumorotek using ZK Framework."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The PDF generation process involves creating a document structure, converting it to PDF format, and enabling user download. The process includes proper error handling and user feedback."}),"\n",(0,r.jsx)(n.h2,{id:"implementation-steps",children:"Implementation Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-basic-pdf-generation",children:"1. Basic PDF Generation"}),"\n",(0,r.jsx)(n.p,{children:"First, implement these core steps in your controller/viewmodel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'// Show loading indicator\r\nClients.showBusy(Labels.getLabel("impression.encours"));\r\n\r\ntry {\r\n    // Create document\r\n    final Document document = createDocumentXML();\r\n    \r\n    // Convert to PDF\r\n    byte[] pdfBytes = ManagerLocator.getXmlUtils().creerPdf(document);\r\n    \r\n    // Generate unique filename\r\n    String filename = generatePdfFilename();\r\n    \r\n    // Trigger download\r\n    if (pdfBytes != null) {\r\n        Filedownload.save(pdfBytes, "application/pdf", filename);\r\n    }\r\n    \r\n    // Optional: Trigger completion event\r\n    Events.postEvent(new Event("onClose", self.getRoot()));\r\n} catch (Exception e) {\r\n    log.error("PDF generation failed", e);\r\n} finally {\r\n    Clients.clearBusy();\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-filename-generation-helper",children:"2. Filename Generation Helper"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'private String generatePdfFilename() {\r\n    StringBuffer sb = new StringBuffer();\r\n    String timestamp = new SimpleDateFormat("yyyyMMddHHmm")\r\n        .format(Calendar.getInstance().getTime());\r\n    sb.append("your_prefix_here_");\r\n    sb.append(timestamp);\r\n    sb.append(".pdf");\r\n    return sb.toString();\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-document-creation-method",children:"3. Document Creation Method"}),"\n",(0,r.jsxs)(n.p,{children:["Implement ",(0,r.jsx)(n.code,{children:"createDocumentXML()"})," to define your PDF content structure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'private Document createDocumentXML() {\r\n    // Get empty document with root element\r\n    final Document document = ManagerLocator.getXmlUtils().createJDomDocument();\r\n    final Element root = document.getRootElement();\r\n    \r\n    // Add header and footer\r\n    ManagerLocator.getXmlUtils().addBasDePage(root, "footer text");\r\n    ManagerLocator.getXmlUtils().addHautDePage(root, "header text", false, null);\r\n    \r\n    // Add first page\r\n    final Element page1 = ManagerLocator.getXmlUtils().addPage(root,\r\n        ObjectTypesFormatters.getLabel("impression.banque.title", \r\n        new String[] {banque.getNom()}));\r\n    \r\n    // Add content sections\r\n    addContentSections(page1);\r\n    \r\n    return document;\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Always wrap PDF generation in try-catch blocks"}),"\n",(0,r.jsx)(n.li,{children:"Provide user feedback for failures"}),"\n",(0,r.jsx)(n.li,{children:"Clean up resources in finally blocks"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content Organization"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Split content generation into logical methods"}),"\n",(0,r.jsxs)(n.li,{children:["Use meaningful method names (e.g., ",(0,r.jsx)(n.code,{children:"addTable()"}),", ",(0,r.jsx)(n.code,{children:"addSummarySection()"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Pass page elements as parameters for content addition"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"User Experience"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Show loading indicators during generation"}),"\n",(0,r.jsx)(n.li,{children:"Provide clear feedback on success/failure"}),"\n",(0,r.jsx)(n.li,{children:"Use meaningful filenames with timestamps"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"utility-methods",children:"Utility Methods"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"XmlUtils"})," class provides several helpful methods:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createJDomDocument()"}),": Creates empty document"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addBasDePage()"}),": Adds footer"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addHautDePage()"}),": Adds header"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"addPage()"}),": Creates new page"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"creerPdf()"}),": Converts document to PDF bytes"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-content-section",children:"Example Content Section"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"private void addContentSections(Element page) {\r\n    addTable(page);\r\n    addSummary(page);\r\n    addMetadata(page);\r\n}\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": Customize the filename prefix, headers, and footers according to your application's needs. Always test PDF generation with various content types and sizes to ensure proper formatting."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);