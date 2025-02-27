# Liquibase

Liquibase is an open-source library for managing and applying database schema changes across environments in a systematic and version-controlled manner. It supports various formats (XML, YAML, JSON, SQL) for defining changes and ensures reliable deployments with rollback and audit capabilities.

## Key Benefits

- **Schema Version Control:** Tracks all schema modifications
- **Automated Updates:** Minimizes human error by automating schema deployments
- **Consistency Across Environments:** Ensures dev, test, and production have identical schemas
- **Rollback Support:** Enables safe reversion of changes
- **Audit Compliance:** Maintains an audit trail of changes

## Core Concepts

### Changelog Files
A changelog file defines the database modifications in a series of atomic units called **changesets**. Common commands include `<createTable>`, `<addColumn>`, and `<sql>`. Changesets support **preconditions** for environment validation and **contexts/labels** to control when they execute.

### Database Tables
Liquibase uses two primary tables to track changes:
- **`DATABASECHANGELOG`**: Stores records of applied changes
- **`DATABASECHANGELOGLOCK`**: Prevents concurrent modifications

## Configuration

### Basic Setup
To configure Liquibase for your Tumorotek project, edit `tumorotek-webapp/src/main/resources/liquibase/liquibase.properties`:

```properties
url=jdbc:mysql://localhost:3306/your_database
username=your_username
password=your_password
```

### Connection Options
1. **Properties File**: Configure the database URL and credentials in a `properties` file.
2. **Changelog File**: For environment-specific setups, you can define connection details directly in the changelog file.

## How Liquibase Works

Liquibase applies database changes by reading the changelog file and updating the database according to pending changes:

1. **Lock Verification**: Checks `DATABASECHANGELOGLOCK` for other active processes.
2. **Changelog Processing**: Reads the changelog and validates each change.
3. **Change Application**: Executes pending changes.
4. **Record Keeping**: Updates `DATABASECHANGELOG` with applied changes.
5. **Lock Release**: Clears `DATABASECHANGELOGLOCK`.

- Tomcat starts and begins deploying your web application
- Your application's context is initialized 
- During context initialization, Liquibase is triggered (via Spring or your custom code)
- Liquibase Connects to your database
- Liquibase Checks the DATABASECHANGELOG table to see what changesets have already been applied
- Liquibase Compares that with your changelog master file
- Liquibase Applies any new changesets that haven't been run yet
- Liquibase Updates the DATABASECHANGELOG table with records of the newly applied changes


Your application continues initializing other components
Tomcat completes deployment and starts handling requests

### Running Commands
To run Liquibase, ensure that the `liquibase.properties` file has correct database configurations. Then, you can execute commands such as:

```bash
liquibase update
```

If you encounter a lock error, check and release it with:

```sql
SELECT * FROM DATABASECHANGELOGLOCK WHERE ID = 1;

UPDATE DATABASECHANGELOGLOCK SET LOCKED = 0, LOCKGRANTED = NULL, LOCKEDBY = NULL WHERE ID = 1;
```

## Troubleshooting

- **Lock Errors**: Check the `DATABASECHANGELOGLOCK` table. Release a lock with the `UPDATE` query above.
- **Re-running Changes**: To force rerun, delete the specific changeset entry in `DATABASECHANGELOG` and execute `liquibase update`.

## Integrating Liquibase with Tumorotek

### Maven Configuration
- **tumorotek-webapp**: Contains the Liquibase execution configurations.
- **tumorotek-model**: Manages version-specific behavior and schema definitions.

### Example: Introducing a New Table
To create a new table, `PARAMETRE_VALEUR_SPECIFIQUE`, use the following format:

```xml
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
                   http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.10.xsd">

    <changeSet author="your_author_name" id="createTable_PARAMETRE_VALEUR_SPECIFIQUE">
        <createTable tableName="PARAMETRE_VALEUR_SPECIFIQUE">
            <column name="parameterId" type="INT">
                <constraints primaryKey="true" nullable="false"/>
            </column>
            <!-- Add other columns as needed -->
        </createTable>
    </changeSet>

</databaseChangeLog>
```

## Best Practices

1. Use descriptive changeset IDs and authors.
2. Include rollback instructions where possible.
3. Test changes in development environments before production.
4. Maintain clear documentation of all changes.
5. Use contexts to apply environment-specific changes only when needed.



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

Following these guidelines helps maintain consistency between your Liquibase changelogs and your database while preventing inadvertent configuration changes from being pushed to Git.
