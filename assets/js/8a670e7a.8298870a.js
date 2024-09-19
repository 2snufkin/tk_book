"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[3054],{1669:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=s(4848),r=s(8453);const c={},t="EnceinteManager Methods",d={id:"Tumorotek/Managers/EncienteManager",title:"EnceinteManager Methods",description:"- findByIdManager: Retrieves an Enceinte object by its ID.",source:"@site/docs/Tumorotek/Managers/EncienteManager.md",sourceDirName:"Tumorotek/Managers",slug:"/Tumorotek/Managers/EncienteManager",permalink:"/tk_book/docs/Tumorotek/Managers/EncienteManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing DAO Classes:",permalink:"/tk_book/docs/Tumorotek/General/Unit Tests"},next:{title:"Controller Annotations",permalink:"/tk_book/docs/ZK/Annotations"}},l={},o=[];function h(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"enceintemanager-methods",children:"EnceinteManager Methods"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findByIdManager"}),": Retrieves an ",(0,i.jsx)(n.code,{children:"Enceinte"})," object by its ID."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findAllObjectsManager"}),": Fetches all ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects from the database."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findByEnceintePereWithOrderManager"}),": Finds all ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects that are children of a specified parent ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findByConteneurWithOrderManager"}),": Finds all ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects within a specified ",(0,i.jsx)(n.code,{children:"Conteneur"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"usedNomsExceptOneManager"}),": Returns a list of names of ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects at the same level, excluding the specified one."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getTerminalesManager"}),": Retrieves all terminal ",(0,i.jsx)(n.code,{children:"Terminale"})," objects associated with a given ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getAllTerminalesInArborescenceManager"}),": Finds all terminal ",(0,i.jsx)(n.code,{children:"Terminale"})," objects within the entire hierarchy of a specified ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getEnceintesManager"}),": Gets all ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects that are children of the specified parent ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getBanquesManager"}),": Retrieves all ",(0,i.jsx)(n.code,{children:"Banque"})," objects associated with a given ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getLevelEnceinte"}),": Determines the level of an ",(0,i.jsx)(n.code,{children:"Enceinte"})," within the hierarchy."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"checkEnceinteInEnceintePereLimitesManager"}),": Checks if an ",(0,i.jsx)(n.code,{children:"Enceinte"})," is within the limits of its parent ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"checkEnceinteInConteneurLimitesManager"}),": Checks if an ",(0,i.jsx)(n.code,{children:"Enceinte"})," is within the limits of its ",(0,i.jsx)(n.code,{children:"Conteneur"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"checkLastEnceinte"}),": Determines if the given ",(0,i.jsx)(n.code,{children:"Enceinte"})," is the last in the hierarchy (its children are terminal)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"checkPositionLibreInEnceinteManager"}),": Checks if a position in an ",(0,i.jsx)(n.code,{children:"Enceinte"})," is free (deprecated)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"checkPositionLibreInConteneurManager"}),": Checks if a position in a ",(0,i.jsx)(n.code,{children:"Conteneur"})," is free (deprecated)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getNumberEmplacementsLibres"}),": Counts the number of free slots within an ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findDoublonManager"}),": Checks if there are duplicate ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects for the specified instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findDoublonWithoutTwoEnceintesManager"}),": Checks for duplicates of an ",(0,i.jsx)(n.code,{children:"Enceinte"}),", excluding a specified ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isUsedObjectManager"}),": Checks if an ",(0,i.jsx)(n.code,{children:"Enceinte"})," is used by other objects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"createObjectManager"}),": Creates and persists a new ",(0,i.jsx)(n.code,{children:"Enceinte"})," in the database with various attributes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"createAllArborescenceManager"}),": Builds the entire hierarchy of ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects from a given ",(0,i.jsx)(n.code,{children:"Conteneur"})," down to terminal ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"createMultiObjetcsForConteneurManager"}),": Creates multiple ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects for a ",(0,i.jsx)(n.code,{children:"Conteneur"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"createMultiObjetcsForEnceinteManager"}),": Creates multiple ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects under a parent ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"updateObjectManager"}),": Updates an existing ",(0,i.jsx)(n.code,{children:"Enceinte"})," with new details and persists the changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"updatewithCreateAllArborescenceManager"}),": Updates an ",(0,i.jsx)(n.code,{children:"Enceinte"})," and creates its entire hierarchy."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"removeObjectManager"}),": Deletes an ",(0,i.jsx)(n.code,{children:"Enceinte"})," from the database with optional comments."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getNbEmplacementsLibresByPS"}),": Counts the number of free slots in an ",(0,i.jsx)(n.code,{children:"Enceinte"})," using ",(0,i.jsx)(n.code,{children:"PreparedStatement"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getNbEmplacementsOccupesByPS"}),": Counts the number of occupied slots in an ",(0,i.jsx)(n.code,{children:"Enceinte"})," using ",(0,i.jsx)(n.code,{children:"PreparedStatement"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getObjetIdsByEntiteByPS"}),": Retrieves a list of object IDs within an ",(0,i.jsx)(n.code,{children:"Enceinte"})," based on their entity type using ",(0,i.jsx)(n.code,{children:"PreparedStatement"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getAdrlManager"}),": Generates the ADRL (address) for a given ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getConteneurManager"}),": Retrieves the ",(0,i.jsx)(n.code,{children:"Conteneur"})," associated with a given ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"echangerDeuxEnceintesManager"}),": Exchanges the positions of two ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getConteneurParent"}),": Finds the parent ",(0,i.jsx)(n.code,{children:"Conteneur"})," of a specified ",(0,i.jsx)(n.code,{children:"Enceinte"})," by traversing the hierarchy."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findAllEnceinteByConteneurManager"}),": Finds all ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects within a ",(0,i.jsx)(n.code,{children:"Conteneur"})," at all levels."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findEnceinteRecursiveManager"}),": Recursively populates a list with all descendant ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects of those in the initial list."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findByEnceintePereAndNomManager"}),": Finds ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects under a parent ",(0,i.jsx)(n.code,{children:"Enceinte"})," with a specified name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"findByConteneurAndNomManager"}),": Finds ",(0,i.jsx)(n.code,{children:"Enceinte"})," objects within a ",(0,i.jsx)(n.code,{children:"Conteneur"})," with a specified name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"updateTailleEnceinteManager"}),": Increases the size of an ",(0,i.jsx)(n.code,{children:"Enceinte"})," by a specified number of slots."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getDistinctBanquesFromTkObjectsManager"}),": Collects distinct ",(0,i.jsx)(n.code,{children:"Banque"})," objects from all ",(0,i.jsx)(n.code,{children:"Terminale"})," objects in an ",(0,i.jsx)(n.code,{children:"Enceinte"}),"."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const r={},c=i.createContext(r);function t(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);