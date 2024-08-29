# Liquibase

Liquibase is an open-source database-independent library for tracking, managing, and applying database schema changes. It allows you to version control your database schema, making it easier to deploy.

## Introduction

Liquibase is an open-source database schema change management tool that helps manage and track database changes in a consistent and controlled manner. It provides a way to define, manage, and apply changes to a database schema, ensuring that the schema remains synchronized across different environments and teams.

## Problems Liquibase Solves

- **Schema Version Control:** Liquibase allows versioning of database schemas, ensuring that changes are tracked and can be rolled back if necessary. This is especially important in environments where multiple developers or teams are working on the same database.
- **Automated Database Updates:** It automates the process of applying changes to the database, reducing the risk of human error and ensuring that all changes are applied in the correct order.
- **Environment Consistency:** By using Liquibase, you can ensure that the database schema remains consistent across different environments (development, testing, production), reducing issues that arise from schema differences.
- **Rollback Capability:** Liquibase supports rolling back changes, allowing you to revert to a previous state if something goes wrong.
- **Auditing and Compliance:** It provides a detailed history of changes made to the database, which is useful for auditing and compliance purposes.

## How Liquibase Works

Liquibase operates using a concept called a "changelog," which is a file or a set of files that define the changes to be made to the database schema. These files are written in XML, YAML, JSON, or SQL. The main components of Liquibase are:

- **Changelog Files:** These files contain the instructions for modifying the database schema. Each change is defined as a "changeSet," which is a unit of change that includes a unique identifier, author, and the actual change to be applied.
- **DatabaseChangeLog Table:** Liquibase creates and maintains a special table in the database called DATABASECHANGELOG to keep track of which changes have been applied. This table records the unique ID, author, and filename of each changeSet that has been executed.
- **DatabaseChangeLogLock Table:** This table (DATABASECHANGELOGLOCK) is used to ensure that only one instance of Liquibase is modifying the database at a time, preventing conflicts and ensuring consistency.

When Liquibase runs, it performs the following steps:

1. Checks the Lock: It checks the DATABASECHANGELOGLOCK table to ensure no other process is running.
2. Reads the Changelog: It reads the changelog file(s) to determine what changes need to be applied.
3. Applies Changes: It applies the necessary changes to the database.
4. Records Changes: It records each applied changeSet in the DATABASECHANGELOG table.
5. Releases Lock: It releases the lock in the DATABASECHANGELOGLOCK table.

## Tables Created for Changelog

Liquibase creates two tables in the database:

1. `DATABASECHANGELOG`: Records each changeSet applied including metadata fields like unique ID, author, filename executed date etc.
2. `DATABASECHANGELOGLOCK`: Manages access preventing simultaneous modifications by multiple instances.

## Running a Changelog Twice

By design Liquibase avoids reapplying changeSets but when needed (e.g., development environment) there are ways around this issue:
* Using contexts
* Using labels
* Using preconditions
## Configuring Liquibase
To work with Liquibase and run Liquibase commands, you need to edit the `tumorotek-webapp/src/main/resources/liquibase/liquibase.properties` file. Update the following properties:
- `url`: the URL for tk database
- `username`: MySQL username
- `password`: MySQL password

## Resolving Commend Error
If you encounter an error while running the update command like "Could not acquire change log lock. Currently locked by xxx since yyy," follow these steps:
1. Run this query to see the problem: 
    ```sql
    SELECT * FROM DATABASECHANGELOGLOCK WHERE ID = 1;
    ```
2. Release the lock by running: 
    ```sql
    UPDATE DATABASECHANGELOGLOCK SET LOCKED = 0, LOCKGRANTED = NULL, LOCKEDBY = NULL WHERE ID = 1;
    ```

## How Liquibase Works
### Changelog File
Liquibase uses a changelog file (usually in XML, YAML, or SQL format) to define database changes.
The changelog file contains a set of changesets, each representing a specific database change.

### Changesets
Changesets are units of change within the changelog file.
Each changeset describes a specific database change using a set of commands.

### Commands
Liquibase commands define specific database operations such as creating a table, adding a column, or inserting data.
Common commands include `<createTable>`, `<addColumn>`, `<modifyColumn>`, `<sql>`, etc.

### Database Connection
Liquibase requires information about the database connection to apply changes.
Connection details (URL, username, password) are usually specified in a properties file or directly in the changelog file.

### Execution
Liquibase can be executed from the command line, integrated into build tools (Maven, Gradle), or used programmatically.
When Liquibase runs, it checks the database for its change history and applies pending changes.

## Setting up Liquibase Configuration
1. **Install Liquibase**: Download it from the official website or use Maven or Gradle dependency management.
2. **Database Configuration**: Configure your database connection details in either a properties file or directly in the changelog file.
3. **Changelog File**: Create a changelog file to define your database changes.

## Defining Datasource in Liquibase
You can define the database connection information using either a properties file or directly in the changelog file:
1. **Using Properties File**:
   - Create a `liquibase.properties` file with your connection details.
   ```properties
   url=jdbc:mysql://localhost:3306/dev_tumo?useSSL=false&createDatabaseIfNotExist=true&characterEncoding=UTF-8&rewriteBatchedStatements=true&serverTimezone=Europe/Paris
   username=your_username
   password=your_password
   ```
2. **Directly in Changelog File**:
   - Define connection details within the changelog XML using attributes like `url`, `username`, and `password`.

## Using Liquibase in TK Project
In TK project's pom.xml files:
- **tumorotek-webapp** plugin configuration sets up Liquibase execution during Maven build process.
- **tumorotek-model** ignores certain goals of Liquibasen based on version range.

## Force Rerun of Changeset 
If you need to force rerun of specific changeset due to configurations:
1. Identify Changeset: Find ID and AUTHOR of desired changeset.
2. Delete from DATABASECHANGELOG: Remove corresponding record using SQL DELETE statement.
3. Run Liquibse: After deletion, run Liquibse again for reapplication of changeset during Maven build process.

This is an overview; adjust processes based on your requirements and databases supported by Liquibae features like rollbacks and preconditions for effective management of database schema changes.