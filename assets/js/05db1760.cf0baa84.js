"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[9626],{2158:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=a(4848),s=a(8453);const t={},i="ConteneurManager",c={id:"Tumorotek/Packages/core/ConteneurManager",title:"ConteneurManager",description:"- `java",source:"@site/docs/Tumorotek/Packages/core/ConteneurManager.md",sourceDirName:"Tumorotek/Packages/core",slug:"/Tumorotek/Packages/core/ConteneurManager",permalink:"/tk_book/Tumorotek/Packages/core/ConteneurManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConfigManager",permalink:"/tk_book/Tumorotek/Packages/core/ConfigManager"},next:{title:"EnceinteManager",permalink:"/tk_book/Tumorotek/Packages/core/EncienteManager"}},o={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"conteneurmanager",children:"ConteneurManager"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Conteneur findByIdManager(Integer conteneurId)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves a container by its ID."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Conteneur> findAllObjectsManager()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all containers in the system."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Conteneur> findByBanqueWithOrderManager(Banque banque)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all containers associated with a specific bank."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Conteneur> findByBanqueAndCodeManager(Banque banque, String code)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves containers associated with a specific bank and code."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Conteneur> findByBanquesWithOrderManager(List<Banque> banques)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves containers associated with a list of banks."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Conteneur> findByPlateformeOrigWithOrderManager(Plateforme plateforme)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves containers initially created by a specific platform."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Set<Incident> getIncidentsManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all incidents associated with a container."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Set<Enceinte> getEnceintesManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all chambers (enclosures) associated with a container."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Terminale> getAllTerminalesInArborescenceManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all terminals (storage units) within the container's hierarchy."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Set<Banque> getBanquesManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all banks associated with a container."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Set<ConteneurPlateforme> getConteneurPlateformesManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all platform-container associations for a container."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Boolean findDoublonManager(Conteneur conteneur, List<Banque> banques)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Checks for duplicate containers."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Boolean isUsedObjectManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Checks if a container is used by other objects."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void createObjectManager(Conteneur conteneur, ConteneurType conteneurType, Service service, \r\n    List<Banque> banques, List<Plateforme> plateformes, Utilisateur utilisateur, Plateforme pfOrig)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Creates a new container with associated attributes and associations."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void updateObjectManager(Conteneur conteneur, ConteneurType conteneurType, Service service,\r\n    List<Banque> banques, List<Plateforme> plateformes, List<Incident> incidents, Utilisateur utilisateur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Updates an existing container with new attributes and associations."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void removeObjectManager(Conteneur conteneur, String comments, Utilisateur user)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Removes a container from the system, along with associated events and reservations."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void createAllArborescenceManager(Conteneur conteneur, List<Enceinte> enceintes, Terminale terminale,\r\n    List<Integer> firstPositions, List<Banque> banques, List<Plateforme> plateformes, \r\n    Integer sizePaillettes, boolean nameFromColor, Utilisateur utilisateur, Plateforme pfOrig)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Creates the entire hierarchy of a container, including chambers and terminals."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Enceinte> getContainingEnceinteManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves a list of chambers contained within a container."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void removeBanqueFromContAndEncManager(Conteneur conteneur, Banque banque)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Removes the many-to-many association between a container and a bank, as well as any reservations that associate a chamber belonging to the container with the same bank."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Conteneur findFromEmplacementManager(Emplacement empl)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finds the container that corresponds to the given location (emplacement)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"boolean hasRetoursManager(Conteneur conteneur)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Checks if there are any storage events associated with the container."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"List<Conteneur> findByPartageManager(Plateforme pf, Boolean partage)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves all containers accessible from a platform and checks if they are currently shared or not."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"Float findTempForEmplacementManager(Emplacement emplacement)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Searches for the storage temperature corresponding to a location (emplacement). Returns ",(0,r.jsx)(n.code,{children:"null"})," if no temperature is found or if the emplacement is null."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"void updateObjectWithConteneurPlateformesManager(Conteneur conteneur, ConteneurType conteneurType,\r\n    Service service, List<Banque> banques, List<ConteneurPlateforme> plateformes,\r\n    List<Incident> incidents, Utilisateur utilisateur)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Overloads the modification manager method to include associations with ",(0,r.jsx)(n.code,{children:"ConteneurPlateformes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ConteneurPlateforme getOneConteneurPlateformeManager(Conteneur conteneur, Plateforme pf)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finds the association represented by a container and a platform."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var r=a(6540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);