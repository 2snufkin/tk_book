After analyzing the provided information, I'll explain the current Liquibase setup in your Tumorotek application and suggest improvements.

## Current Situation Analysis

Your application uses Liquibase for database schema management across multiple modules (webapp, model). Here's how it's currently structured:

1. **Configuration Issues**:
    - The `liquibase.properties` file contains hard-coded credentials and database URLs, including some that appear to be test or development environments
    - There are commented-out Oracle configurations mixed with MySQL configurations
    - The file contains info about usernames and passwords and lyon's url and it's committed to Git with potentially sensitive information
    - Modify this file on your local machine to include your url, password etc in commiting by error (already happened) 

2. **Execution Setup**:
    - Liquibase is integrated via Maven plugins in multiple modules
    - The `InitServlet` class appears to handle Liquibase initialization at application startup
    - Several executions are defined in the POM files to:
        - Copy Liquibase changelog files from webapp to other modules
        - Execute updates against multiple databases (tumorotek and tumorotek_codes)


3. **Respurce Location**:
    The sql files and changelog files are not in the same packages:
      - changelogs are inside tumorotek-webapp/src/main/resources/liquibase/changelog
      - sql files are inside tumorotek-model/src/database/mysql and tumorotek-model/src/database/oracle
      - When examining how liquibase should locate the sql files as referenced in the changelogs we see `<sqlFile encoding="utf8" path="../sql/mysql/tumorotek/export_mysql.sql" endDelimiter="&amp;&amp;" relativeToChangelogFile="true" stripComments="true"/> relativeToChangelogFile="true" is set in the changelog files, so the SQL files should be located relative to where the changelog files are positioned after the build process.
      - Since it's a relative path, it should be relative to the changelog file
      - Resources are copied from various locations during the build process 
      - There is a Maven configuration that copies SQL files from the ../tumorotek-install/src/assembly/sql directory to the ${basedir}/target/classes/liquibase/sql output directory during the validate phase of the build process, excluding any .bat and .sh files.
      - No mention of copying something to target/classes/liquibase/oracle or copying changelog files to ${basedir}/target/classes/liquibase/changelog 
      - However, the current setup seems to be copying SQL files to ${basedir}/target/classes/liquibase/sql during the build, but there's no explicit mention of copying the changelog files to a corresponding location that would maintain the expected relative paths.


## How It Currently Works

1. During the Maven build, Liquibase resources are copied between modules. It's not clear why the changelogs aren't copied
2. The Maven Liquibase plugin executes database updates during the build process
3. Additionally, the `InitServlet` appears to run Liquibase updates at application startup
4. There are hardcoded configurations alongside property-based configurations
5. Currently, liquibase can't function correctly with the current liquibase.properties file

## Improvement Proposals

1. **Environment-Specific Configuration**:
    - Replace the hardcoded `liquibase.properties` file with environment-specific properties files (like with tumorotek.properties)
    - Create template files like `liquibase-{env}.properties` (dev, test, prod) that are not committed to Git
    - Use Maven profiles to select the appropriate properties file during build
    - 
```properties
# Example src/main/resources/liquibase/liquibase-template.properties
# (NOT committed to Git)
changeLogFile=src/main/resources/liquibase/changelog/db.changelog-master.xml
driver=${db.driver}
url=${db.url}
username=${db.username}
password=${db.password}
interfacages.schema=${db.interfacages.schema}
```

2. **Credentials Management**:
    - Move database credentials out of properties files and use environment variables or a secure credential store

3. **Execution Strategy**:
    - Decide on a consistent approach for when Liquibase runs:
        - Option 1: Run exclusively during build (recommended for production)
        - Option 2: Run at application startup (good for development)
    - Don't mix both approaches as it can lead to inconsistencies

4. **Module Organization**:
    - Centralize Liquibase resources in one module instead of copying between modules. 




# Handling Liquibase Checksum Mismatch Errors in TumoroteK
In TumoroteK, the **liquibase.properties** file is tracked in Git, so it is best not to modify it directly.
Instead, override properties at runtime using command-line parameters to avoid accidentally pushing local configuration changes.
Liquibase calculates a checksum for each change set when it is first executed against the database. If a change set is modified later, the recalculated checksum will differ from the stored value, and Liquibase will report a checksum mismatch error.

Below are three common scenarios and how to address them.



## Case 1: Intentional Change to Multiple Change Sets

When you have intentionally modified one or more change sets (e.g., to fix an issue or update the schema), you need to update Liquibase’s stored checksums. To do this, run the **clearCheckSums** command without modifying your tracked **liquibase.properties** file. Instead, provide your custom properties at the command line:

```bash
liquibase \
  --url="jdbc:mysql://localhost:3306/{db_name}" \
  --driver="com.mysql.cj.jdbc.Driver" \
  --username="{username}" \
  --password="{password}" \
  --classpath="{path/to/mysql-connector-j-x.x.x.jar}" \
  --searchPath="{your_path}/code/TumoroteK/tumorotek-install/src/assembly/sql, {your_path}/TumoroteK/tumorotek-webapp/src/main/resources" \
  --log-level=DEBUG \
  clearCheckSums
```

**Replace the placeholders as follows:**
- `{db_name}`: Your database name.
- `{username}` and `{password}`: Your database credentials.
- `{path/to/mysql-connector-j-x.x.x.jar}`: The full path to your MySQL Connector/J JAR file.
- `{your_path}`: The base path where your TumoroteK code resides.

This command clears all stored checksums, prompting Liquibase to recalculate them based on the current state of the change sets.


## Case 2: Update the Checksum for a Single Change Set

If you need to update the checksum for just one change set (for example, when only one file has been intentionally modified), you can limit the command to that specific file using the `--changeLogFile` parameter. For example:

```bash
liquibase \
  --url="jdbc:mysql://localhost:3306/{db_name}" \
  --driver="com.mysql.cj.jdbc.Driver" \
  --username="{username}" \
  --password="{password}" \
  --classpath="{path/to/mysql-connector-j-x.x.x.jar}" \
  --searchPath="{your_path}/code/TumoroteK/tumorotek-install/src/assembly/sql, {your_path}/TumoroteK/tumorotek-webapp/src/main/resources" \
  --log-level=DEBUG \
  --changeLogFile="liquibase/changelog/db.changelog-2.3.1.0_4_TK-533.xml" \
  clearCheckSums
```

This command targets only the specified change set file, in this example liquibase/changelog/db.changelog-2.3.1.0_4_TK-533.xml
, updating its checksum without affecting others.

---

## Case 3: When to Use the Update Command

After resolving checksum mismatches using **clearCheckSums** (whether for all change sets or a single file), you should run the **update** command to apply any pending changes to the database schema. This is especially important if you have new change sets or modifications waiting to be applied.
Troubleshooting Update Command Issues Due to Relative SQL File Paths

In  TumoroteK project, the SQL files referenced in some change sets are declared as relative to the changelog file. However, these SQL files are not located in the same package as the changelog file. Based on my personal experience, I think this discrepancy is the source of problems when running the update command. The relative paths defined in the change sets do not resolve as expected, which has prevented successful execution of the command in my setup.

Here’s an example of running the update command:

```bash
liquibase \
  --url="jdbc:mysql://localhost:3306/{db_name}" \
  --driver="com.mysql.cj.jdbc.Driver" \
  --username="{username}" \
  --password="{password}" \
  --classpath="{path/to/mysql-connector-j-x.x.x.jar}" \
  --searchPath="{your_path}/code/TumoroteK/tumorotek-install/src/assembly/sql, {your_path}/TumoroteK/tumorotek-webapp/src/main/resources" \
  --log-level=DEBUG \
  update
```

Running this command applies the changes defined in your changelog files to your database, ensuring that your schema is up-to-date.



## Summary

- **Do not modify the tracked `liquibase.properties` file in TumoroteK.** Always override properties on the command line to avoid accidental Git commits.
- **Case 1:** Use **clearCheckSums** for intentional changes affecting multiple change sets.
- **Case 2:** Use **clearCheckSums** with the `--changeLogFile` parameter to update a single change set’s checksum.
- **Case 3:** Run the **update** command after clearing checksums to apply any pending changes to the database.
