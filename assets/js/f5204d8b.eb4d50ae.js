"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[7912],{4820:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(4848),r=i(8453);const o={},s="Development Environment Setup Guide",l={id:"Tumorotek/General/Development Environment Setup",title:"Development Environment Setup Guide",description:"Overview",source:"@site/docs/Tumorotek/General/Development Environment Setup.md",sourceDirName:"Tumorotek/General",slug:"/Tumorotek/General/Development Environment Setup",permalink:"/tk_book/Tumorotek/General/Development Environment Setup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Code Formatting Standards in Tumorotek",permalink:"/tk_book/Tumorotek/General/Code Formatting"},next:{title:"GenericDaoJpa",permalink:"/tk_book/Tumorotek/General/GenericDaoJpa"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Steps",id:"setup-steps",level:2},{value:"1. Environment Variables Setup",id:"1-environment-variables-setup",level:3},{value:"Validation",id:"validation",level:4},{value:"2. Database Setup",id:"2-database-setup",level:3},{value:"3. Project Setup",id:"3-project-setup",level:3},{value:"Source Code",id:"source-code",level:4},{value:"Maven Configuration",id:"maven-configuration",level:4},{value:"4. IntelliJ IDEA Configuration",id:"4-intellij-idea-configuration",level:3},{value:"Project Import",id:"project-import",level:4},{value:"Project Structure Setup",id:"project-structure-setup",level:4},{value:"5. Application Configuration",id:"5-application-configuration",level:3},{value:"Database Connection",id:"database-connection",level:4},{value:"Gatsbi Configuration",id:"gatsbi-configuration",level:4},{value:"6. Tomcat Configuration",id:"6-tomcat-configuration",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Support",id:"support",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"development-environment-setup-guide",children:"Development Environment Setup Guide"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This guide provides detailed instructions for setting up the Tumorotek development environment. It's crucial to follow these steps precisely to ensure a consistent development experience across the team."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JDK 1.8 (specifically version 1.8.0_202 or compatible)"}),"\n",(0,t.jsx)(n.li,{children:"Apache Tomcat 7.0.x"}),"\n",(0,t.jsx)(n.li,{children:"Maven 3.6.3 (specific version required)"}),"\n",(0,t.jsx)(n.li,{children:"MySQL Database"}),"\n",(0,t.jsx)(n.li,{children:"Git"}),"\n",(0,t.jsx)(n.li,{children:"IntelliJ IDEA (Ultimate Edition recommended)"}),"\n",(0,t.jsx)(n.li,{children:"At least 8GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"Minimum 20GB free disk space"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-environment-variables-setup",children:"1. Environment Variables Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"JAVA_HOME"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Point to JDK 1.8 installation directory"}),"\n",(0,t.jsxs)(n.li,{children:["Example: ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\Java\\jdk1.8.0_202"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CATALINA_HOME"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Point to Tomcat installation directory"}),"\n",(0,t.jsxs)(n.li,{children:["Example: ",(0,t.jsx)(n.code,{children:"C:\\Program Files\\Apache Software Foundation\\Tomcat 7.0"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PATH"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"%JAVA_HOME%\\bin"})]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"%CATALINA_HOME%\\bin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Verify Java version\njava -version\n# Should return: java version "1.8.0_202"\n\n# Verify Maven\nmvn -version\n# Should show Maven 3.6.3 and Java 1.8\n\n# Verify Tomcat\n%CATALINA_HOME%\\bin\\version.bat\n# Should show Tomcat 7.0.x\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-database-setup",children:"2. Database Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login to MySQL as root:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mysql -u root -p\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Import the database dump:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mysql -u root -p tumorotek --default-character-set=utf8 < /path/to/dump/file\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Set required MySQL configuration:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET GLOBAL log_bin_trust_function_creators = 1;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-project-setup",children:"3. Project Setup"}),"\n",(0,t.jsx)(n.h4,{id:"source-code",children:"Source Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone <repository_url>\ncd tumorotek\ngit checkout -b feature/your-feature-name\n"})}),"\n",(0,t.jsx)(n.h4,{id:"maven-configuration",children:"Maven Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Create/modify ",(0,t.jsx)(n.code,{children:"settings.xml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<settings>\n    <localRepository>${user.home}/.m2/repository</localRepository>\n    <profiles>\n        <profile>\n            <id>tumorotek</id>\n            <properties>\n                <java.version>1.8</java.version>\n                <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n            </properties>\n        </profile>\n    </profiles>\n    <activeProfiles>\n        <activeProfile>tumorotek</activeProfile>\n    </activeProfiles>\n</settings>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-intellij-idea-configuration",children:"4. IntelliJ IDEA Configuration"}),"\n",(0,t.jsx)(n.h4,{id:"project-import",children:"Project Import"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open IntelliJ IDEA"}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"File > New > Project from Existing Sources..."})]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to project directory and select ",(0,t.jsx)(n.code,{children:"pom.xml"})]}),"\n",(0,t.jsxs)(n.li,{children:["Configure import settings:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Import Maven projects automatically"})]}),"\n",(0,t.jsxs)(n.li,{children:["Check ",(0,t.jsx)(n.code,{children:"Create directories for empty content roots automatically"})]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"JDK for importer"})," to 1.8"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"project-structure-setup",children:"Project Structure Setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set Project SDK to 1.8"}),"\n",(0,t.jsx)(n.li,{children:"Set Project language level to 8"}),"\n",(0,t.jsx)(n.li,{children:"Verify Maven dependencies"}),"\n",(0,t.jsx)(n.li,{children:"Configure WAR artifact"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-application-configuration",children:"5. Application Configuration"}),"\n",(0,t.jsx)(n.h4,{id:"database-connection",children:"Database Connection"}),"\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"application.properties"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"quarkus.datasource.db-kind=mysql\nquarkus.datasource.username={userName}\nquarkus.datasource.password={password}\nquarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/{dbname}?characterEncoding=UTF-8&rewriteBatchedStatements=true&serverTimezone=Europe/Paris\nquarkus.datasource.jdbc.driver=com.mysql.cj.jdbc.Driver \n"})}),"\n",(0,t.jsx)(n.h4,{id:"gatsbi-configuration",children:"Gatsbi Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Create/modify in ",(0,t.jsx)(n.code,{children:"C:\\...Tomcat\\...\\conf\\Catalina\\localhost"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"# Gatsbi Core Settings\ngatsbi.installation=true\n\n# Frontend URL Configuration\ngatsbi.appli.url.path=http://localhost:4200/#/authentication?token={0}&plateformeId={1}\n\n# API Configuration\ngatsbi.api.url.base=http://localhost:8703/tumorotek/api/gatsbi\n\n# API Endpoints\ngatsbi.api.url.etude.path=/{etudeId}/etude\ngatsbi.api.url.contexte.path=/{etudeId}/contexte/{type}\ngatsbi.api.url.parametrage.path=/{parametrageId}/parametrage\ngatsbi.api.url.schema.visite.path=/{etudeId}/etude/schemavisites\n"})}),"\n",(0,t.jsx)(n.h3,{id:"6-tomcat-configuration",children:"6. Tomcat Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Configure server in IntelliJ"}),"\n",(0,t.jsx)(n.li,{children:"Set up Run Configuration with JVM options:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'-Duser.language=en\n-Xms512m\n-Xmx1024m\n-XXaltjvm=dcevm\n-Dorg.hotswap.agent.logLevel=WARN\n-javaagent:"path/to/hotswap-agent-1.4.2.jar"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Database Access Denied (ERROR 1227)"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution: Use root user with appropriate privileges"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maven Dependency Issues"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution: Ensure using Maven 3.6.3"}),"\n",(0,t.jsxs)(n.li,{children:["Run: ",(0,t.jsx)(n.code,{children:"mvn dependency:purge-local-repository"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Tomcat Port Conflicts"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solution: Change port in server.xml or kill existing process"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Review project architecture documentation"}),"\n",(0,t.jsx)(n.li,{children:"Review coding guidelines"}),"\n",(0,t.jsx)(n.li,{children:"Set up additional development tools as needed"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,t.jsx)(n.p,{children:"For additional assistance:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Check project documentation"}),"\n",(0,t.jsx)(n.li,{children:"Consult team lead"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);