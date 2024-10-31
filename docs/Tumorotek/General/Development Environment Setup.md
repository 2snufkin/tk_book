# Development Environment Setup Guide

## Overview
This guide provides detailed instructions for setting up the Tumorotek development environment. It's crucial to follow these steps precisely to ensure a consistent development experience across the team.

## Prerequisites
- JDK 1.8 (specifically version 1.8.0_202 or compatible)
- Apache Tomcat 7.0.x
- Maven 3.6.3 (specific version required)
- MySQL Database
- Git
- IntelliJ IDEA (Ultimate Edition recommended)
- At least 8GB RAM
- Minimum 20GB free disk space

## Setup Steps

### 1. Environment Variables Setup
1. **JAVA_HOME**:
   - Point to JDK 1.8 installation directory
   - Example: `C:\Program Files\Java\jdk1.8.0_202`

2. **CATALINA_HOME**:
   - Point to Tomcat installation directory
   - Example: `C:\Program Files\Apache Software Foundation\Tomcat 7.0`

3. **PATH**:
   - Add `%JAVA_HOME%\bin`
   - Add `%CATALINA_HOME%\bin`

#### Validation
```bash
# Verify Java version
java -version
# Should return: java version "1.8.0_202"

# Verify Maven
mvn -version
# Should show Maven 3.6.3 and Java 1.8

# Verify Tomcat
%CATALINA_HOME%\bin\version.bat
# Should show Tomcat 7.0.x
```

### 2. Database Setup
1. Login to MySQL as root:
```bash
mysql -u root -p
```

2. Import the database dump:
```bash
mysql -u root -p tumorotek --default-character-set=utf8 < /path/to/dump/file
```

3. Set required MySQL configuration:
```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

### 3. Project Setup

#### Source Code
```bash
git clone <repository_url>
cd tumorotek
git checkout -b feature/your-feature-name
```

#### Maven Configuration
Create/modify `settings.xml`:
```xml
<settings>
    <localRepository>${user.home}/.m2/repository</localRepository>
    <profiles>
        <profile>
            <id>tumorotek</id>
            <properties>
                <java.version>1.8</java.version>
                <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
            </properties>
        </profile>
    </profiles>
    <activeProfiles>
        <activeProfile>tumorotek</activeProfile>
    </activeProfiles>
</settings>
```

### 4. IntelliJ IDEA Configuration

#### Project Import
1. Open IntelliJ IDEA
2. Select `File > New > Project from Existing Sources...`
3. Navigate to project directory and select `pom.xml`
4. Configure import settings:
   - Select `Import Maven projects automatically`
   - Check `Create directories for empty content roots automatically`
   - Set `JDK for importer` to 1.8

#### Project Structure Setup
- Set Project SDK to 1.8
- Set Project language level to 8
- Verify Maven dependencies
- Configure WAR artifact

### 5. Application Configuration

#### Database Connection
Configure `application.properties`:
```properties
quarkus.datasource.db-kind=mysql
quarkus.datasource.username={userName}
quarkus.datasource.password={password}
quarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/{dbname}?characterEncoding=UTF-8&rewriteBatchedStatements=true&serverTimezone=Europe/Paris
quarkus.datasource.jdbc.driver=com.mysql.cj.jdbc.Driver 
```

#### Gatsbi Configuration
Create/modify in `C:\...Tomcat\...\conf\Catalina\localhost`:
```properties
# Gatsbi Core Settings
gatsbi.installation=true

# Frontend URL Configuration
gatsbi.appli.url.path=http://localhost:4200/#/authentication?token={0}&plateformeId={1}

# API Configuration
gatsbi.api.url.base=http://localhost:8703/tumorotek/api/gatsbi

# API Endpoints
gatsbi.api.url.etude.path=/{etudeId}/etude
gatsbi.api.url.contexte.path=/{etudeId}/contexte/{type}
gatsbi.api.url.parametrage.path=/{parametrageId}/parametrage
gatsbi.api.url.schema.visite.path=/{etudeId}/etude/schemavisites
```

### 6. Tomcat Configuration
1. Configure server in IntelliJ
2. Set up Run Configuration with JVM options:
```
-Duser.language=en
-Xms512m
-Xmx1024m
-XXaltjvm=dcevm
-Dorg.hotswap.agent.logLevel=WARN
-javaagent:"path/to/hotswap-agent-1.4.2.jar"
```

## Troubleshooting

### Common Issues
1. **Database Access Denied (ERROR 1227)**
   - Solution: Use root user with appropriate privileges

2. **Maven Dependency Issues**
   - Solution: Ensure using Maven 3.6.3
   - Run: `mvn dependency:purge-local-repository`

3. **Tomcat Port Conflicts**
   - Solution: Change port in server.xml or kill existing process

## Next Steps
1. Review project architecture documentation
2. Review coding guidelines
3. Set up additional development tools as needed

## Support
For additional assistance:
1. Check project documentation
2. Consult team lead