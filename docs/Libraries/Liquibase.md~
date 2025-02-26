Here's a structured version of the provided information, condensed to follow DRY (Don’t Repeat Yourself) principles:

```markdown
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

