"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[360],{71:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Tumorotek/Packages/core/XmlUtils","title":"XmlUtils","description":"Description","source":"@site/docs/Tumorotek/Packages/core/XmlUtils.md","sourceDirName":"Tumorotek/Packages/core","slug":"/Tumorotek/Packages/core/XmlUtils","permalink":"/tk_book/Tumorotek/Packages/core/XmlUtils","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"EnceinteManager","permalink":"/tk_book/Tumorotek/Packages/core/EncienteManager"},"next":{"title":"AbstractListeController2","permalink":"/tk_book/Tumorotek/Packages/webapp/AbstractListeController2"}}');var i=s(4848),t=s(8453);const d={},l="XmlUtils",c={},o=[{value:"Description",id:"description",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"xmlutils",children:"XmlUtils"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This interface provides methods for XML document manipulation and generation, specifically for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creating and managing JDOM documents"}),"\n",(0,i.jsx)(n.li,{children:"Generating PDF and HTML outputs"}),"\n",(0,i.jsx)(n.li,{children:"Handling document structure (pages, titles, paragraphs)"}),"\n",(0,i.jsx)(n.li,{children:"Managing box content and modeling"}),"\n",(0,i.jsx)(n.li,{children:"Creating transfer agreements"}),"\n",(0,i.jsx)(n.li,{children:"Managing document signatures"}),"\n",(0,i.jsx)(n.li,{children:"Handling document formatting and layout"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createJDomDocument()"})}),": Creates a JDOM document with root and DTD."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createJDomAccordTranfert()"})}),": Creates a transfer agreement JDOM document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createJDomDocumentBoites()"})}),": Creates a boxes JDOM document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createJDomDocumentContenuBoite()"})}),": Creates a box content JDOM document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addTitreForDocument(Element root, String titre)"})}),": Adds document title."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addPage(Element root, String titre)"})}),": Adds document page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addCoupleValeur(Element parent, CoupleValeur couple)"})}),": Adds value pair to element."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addCoupleSimpleValeur(Element parent, CoupleSimpleValeur couple)"})}),": Adds simple value pair."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addLigne(Element parent, LigneParagraphe ligne)"})}),": Adds paragraph line."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addLigneSimple(Element parent, LigneSimpleParagraphe ligne)"})}),": Adds simple paragraph line."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addLigneDeuxColonnesParagraphe(Element parent, LigneDeuxColonnesParagraphe ligne)"})}),": Adds two-column line."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addLigneListe(Element parent, LigneListe ligne)"})}),": Adds list line."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addEnteteListe(Element parent, EnteteListe entete)"})}),": Adds list header."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addColonnesListe(Element parent, int nb)"})}),": Adds specified number of list columns."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addSousParagraphe(Element parent, SousParagraphe sous)"})}),": Adds sub-paragraph."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addParagraphe(Element parent, Paragraphe para)"})}),": Adds paragraph."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addListe(Element parent, ListeElement liste)"})}),": Adds list element."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addHautDePage(Element parent, String legende, boolean addImage, String adr)"})}),": Adds page header."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addBasDePage(Element parent, String legende)"})}),": Adds page footer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createXMLFile(Document doc, String folder, String file)"})}),": Creates XML file from JDOM document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"transformAsPdf(Document doc)"})}),": Converts JDOM document to PDF."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"creerPdf(Document document)"})}),": Creates PDF byte array from DOM document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"creerHtml(Document doc)"})}),": Creates HTML byte array from JDOM document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addPageBoite(Element root, String titre)"})}),": Adds box page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addTitreIntermediaire(Element elt, String titre)"})}),": Adds intermediate title."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addSeparateur(Element elt)"})}),": Adds separator."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addBoite(Element elt, BoiteImpression boite, String adrlImages)"})}),": Adds box modeling."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createModelisation(Element elt, Terminale boite, String nom, List<Integer> positions, String legendeVide, String legendePris, String legendeSelectionne, String adrlImages)"})}),": Creates box model."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addInstructions(Element elt, List<String> instructions)"})}),": Adds box finding instructions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addListeElements(Element elt, List<String> elements, String titreListe)"})}),": Adds elements list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"creerBoiteHtml(Document doc)"})}),": Creates HTML for printable document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addPageContenuBoite(Element root, String titre)"})}),": Adds box content page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addListeParents(Element elt, List<String> listeParents)"})}),": Adds parent boxes list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addListeNombres(Element elt, List<String> listeNombres)"})}),": Adds box statistics."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"createContenu(Element elt, Terminale boite, String valeurVide, String adrImages, Hashtable<String, String> echantillonTypesCouleurs, String echantillonCouleur, Hashtable<String, String> prodDeriveTypesCouleurs, String prodDeriveCouleur)"})}),": Models box content."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addBoiteContenu(Element elt, BoiteContenu boite, String adrImages, Hashtable<String, String> echantillonTypesCouleurs, String echantillonCouleur, Hashtable<String, String> prodDeriveTypesCouleurs, String prodDeriveCouleur)"})}),": Adds box content modeling."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"creerContenuHtml(Document doc)"})}),": Creates HTML for printable content."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addCoupleAccordValeur(Element parent, CoupleAccordValeur couple)"})}),": Adds agreement value pair."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addLigneAccord(Element parent, LigneAccord ligne)"})}),": Adds agreement line."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addBlocPrincipal(Element parent, BlocPrincipal bloc)"})}),": Adds main block."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addTableau(Element parent, BlocPrincipal[] blocs)"})}),": Adds table of main blocks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addValeursSignatures(Element parent, ValeursSignatures valeurs)"})}),": Adds signature values."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addListeSignature(Element parent, ListeSignature liste)"})}),": Adds signature list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addSignatures(Element parent, Signatures signatures)"})}),": Adds signatures."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"transformAsAccordPdf(Document doc)"})}),": Converts to PDF agreement document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"creerAccordTransfertPdf(Document document)"})}),": Creates transfer agreement PDF."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);