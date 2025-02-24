## SQL Stored Procedures: A Guide for Java + Spring + Liquibase Projects

This document serves as a comprehensive guide for developers working on Java + Spring + Liquibase projects, focusing on SQL stored procedures. We'll cover creation, modification, deletion, Liquibase integration, and platform-specific syntax differences.

## What are Stored Procedures?

Stored procedures are precompiled SQL statements saved in the database. They can accept parameters, perform operations, and return results. Using stored procedures can improve performance and provide a layer of abstraction between the application and database. Essentially, it's a routine stored in the database that can be executed by applications or other stored procedures.

**Benefits:**

* **Improved Performance:** Stored procedures reduce network traffic as the code is executed on the database server.
* **Code Reusability:** Logic can be encapsulated and reused across multiple applications.
* **Enhanced Security:** Database access can be controlled by granting permissions to execute specific stored procedures.
* **Data Integrity:** Centralized data validation and business logic.

## Creating, Modifying, and Deleting Stored Procedures**

### Creating Stored Procedures

#### The Esstinal

The basic syntax for creating a stored procedure involves:

* Specifying the procedure name.
* Defining input and output parameters (if any).
* Writing the SQL code within the procedure body.

**Example (MySQL):**

```sql
DELIMITER //
CREATE PROCEDURE GetCustomerByID(IN customerID INT, OUT customerName VARCHAR(255))
BEGIN
    SELECT name INTO customerName FROM customers WHERE id = customerID;
END //
DELIMITER ;
```

**Example (Oracle):**

```sql
CREATE OR REPLACE PROCEDURE GetCustomerByID(customerID IN NUMBER, customerName OUT VARCHAR2) AS
BEGIN
    SELECT name INTO customerName FROM customers WHERE id = customerID;
END;
/
```

**Explanation:**

* `DELIMITER //` (MySQL): Changes the statement delimiter to `//` to allow multiple statements within the procedure. `DELIMITER ;` resets it.
* `CREATE PROCEDURE` (MySQL) / `CREATE OR REPLACE PROCEDURE` (Oracle): Creates a new stored procedure or replaces an existing one.
* `IN` and `OUT`: Define input and output parameters.
* `BEGIN...END`: Encloses the procedure's SQL code.
* `/` (Oracle): Executes the procedure creation statement.

#### Using Liquibase


Liquibase is a database schema change management tool. To create a stored procedure using Liquibase:

    Create a new changeset in your Liquibase changelog file.

    Use the <createProcedure> tag or <sql> tag for more complex procedures.

Example using <createProcedure>:

```xml
<changeSet id="create-procedure-example" author="junior-dev">
    <createProcedure>
        CREATE PROCEDURE get_employee_count(OUT count INT)
        BEGIN
            SELECT COUNT(*) INTO count FROM employees;
        END;
    </createProcedure>
</changeSet>
```
Example using <sql> tag (recommended for complex procedures):

```xml
<changeSet id="create-complex-procedure" author="junior-dev">
    <sql splitStatements="false">
        CREATE PROCEDURE complex_proc(IN param1 INT, OUT param2 VARCHAR(50))
        BEGIN
            -- Procedure body
            SELECT some_column INTO param2 FROM some_table WHERE id = param1;
        END
    </sql>
</changeSet>
```
Note: Use splitStatements="false" to prevent Liquibase from attempting to split the procedure body11.

### Modifying Stored Procedures

#### The Esstinal

Modifying a stored procedure usually involves using `ALTER PROCEDURE` (MySQL) or `CREATE OR REPLACE PROCEDURE` (Oracle).

**Example (MySQL):**

```sql
ALTER PROCEDURE GetCustomerByID(IN customerID INT, OUT customerName VARCHAR(255))
BEGIN
    SELECT name, address INTO customerName, @customerAddress FROM customers WHERE id = customerID;
END;
```

**Example (Oracle):**

```sql
CREATE OR REPLACE PROCEDURE GetCustomerByID(customerID IN NUMBER, customerName OUT VARCHAR2) AS
BEGIN
    SELECT name, address INTO customerName, @customerAddress FROM customers WHERE id = customerID;
END;
/
```

In most cases, for Oracle, you simply recreate the procedure with the `CREATE OR REPLACE` syntax.


#### Modifying Using Liquibase

To modify an existing procedure:

1. Create a new changeset in your Liquibase changelog.
2. Drop the existing procedure.
3. Create the modified procedure.

Example:

```xml
<changeSet id="modify-procedure-example" author="junior-dev">
    <dropProcedure procedureName="get_employee_count"/>
    <createProcedure>
        CREATE PROCEDURE get_employee_count(IN dept_id INT, OUT count INT)
        BEGIN
            SELECT COUNT(*) INTO count FROM employees WHERE department_id = dept_id;
        END;
    </createProcedure>
</changeSet>
```

or 
````xml
<changeSet id="update-procedure-example" author="junior-dev" runOnChange="true">
    <createProcedure>
        CREATE PROCEDURE get_employee_count(IN dept_id INT, OUT count INT)
        BEGIN
            SELECT COUNT(*) INTO count FROM employees WHERE department_id = dept_id;
        END;
    </createProcedure>
</changeSet>

````
#### Deleting Stored Procedures**

**Example (MySQL):**

```sql
DROP PROCEDURE IF EXISTS GetCustomerByID;
```

**Example (Oracle):**

```sql
DROP PROCEDURE GetCustomerByID;
```

#### Deleting Using Liquibase

To delete a stored procedure:

```xml
<changeSet id="delete-procedure-example" author="junior-dev">
    <dropProcedure procedureName="get_employee_count"/>
</changeSet>
```

**3. Liquibase Integration**

Liquibase is crucial for managing database schema changes in a version-controlled manner. To ensure Liquibase correctly updates stored procedures, follow these steps:

**3.1. Create a SQL Changelog File**

Create a `.sql` file in your Liquibase changelog directory.

**Example (e.g., `db/changelog/changes/v1.0/create_customer_procedures.sql`):**

```sql
--liquibase formatted sql

--changeset yourname:1
--comment: Creates the GetCustomerByID stored procedure.
DELIMITER //
CREATE PROCEDURE GetCustomerByID(IN customerID INT, OUT customerName VARCHAR(255))
BEGIN
    SELECT name INTO customerName FROM customers WHERE id = customerID;
END //
DELIMITER ;

--changeset yourname:2
--comment: Creates another procedure.
CREATE OR REPLACE PROCEDURE AnotherProcedure(inputParam IN NUMBER) AS
BEGIN
    -- your logic
    NULL;
END;
/
```

**3.2. Ensure Liquibase Updates Existing Procedures**

* **`CREATE OR REPLACE` (Oracle):** Oracle's `CREATE OR REPLACE` ensures that if a procedure already exists, it will be replaced with the new version. This naturally supports updates.
* **`DROP PROCEDURE IF EXISTS` + `CREATE PROCEDURE` (MySQL):** For MySQL, the recommended approach is to `DROP` the procedure if it exists and then `CREATE` it again. This ensures that changes are applied correctly.
* **Liquibase Checksums:** Liquibase uses checksums to track changes. If you modify a stored procedure, Liquibase will detect the change and apply the update during the next database migration.

**3.3. Liquibase Changelog XML**

Include the SQL changelog file in your main Liquibase changelog XML file.

```xml
<databaseChangeLog
        xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog
         qqhttp://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">

    <include file="db/changelog/changes/v1.0/create_customer_procedures.sql"/>

</databaseChangeLog>
```

**4. Key Syntax Differences: MySQL vs. Oracle**

| Feature          | MySQL                                   | Oracle                                     |
| :--------------- | :-------------------------------------- | :----------------------------------------- |
| Delimiter        | `DELIMITER //`, `DELIMITER ;`           | `/`                                        |
| Creation/Modify  | `CREATE PROCEDURE`, `ALTER PROCEDURE`     | `CREATE OR REPLACE PROCEDURE`               |
| Variable Declaration | `DECLARE variable_name data_type;`  | `variable_name data_type;`                  |
| Parameter Modes  | `IN`, `OUT`, `INOUT`                   | `IN`, `OUT`                               |
| Data Types       | `INT`, `VARCHAR`, `DATE`, `DATETIME`   | `NUMBER`, `VARCHAR2`, `DATE`, `TIMESTAMP` |
| Error Handling   | `DECLARE CONTINUE HANDLER`, `SIGNAL`   | `EXCEPTION`, `RAISE_APPLICATION_ERROR`     |
| Block Delimiters | `BEGIN...END`                           | `BEGIN...END;`                             |
| Null handling in if statements | `IS NULL`, `IS NOT NULL` | `variable IS NULL`, `variable IS NOT NULL` |

**5. Best Practices**

* **Naming Conventions:** Use clear and descriptive names for stored procedures and parameters.
* **Error Handling:** Implement robust error handling to prevent unexpected issues.
* **Parameter Validation:** Validate input parameters to ensure data integrity.
* **Documentation:** Document stored procedures, including their purpose, parameters, and return values.
* **Testing:** Thoroughly test stored procedures to ensure they function correctly.
* **Security:** Grant minimal necessary permissions to execute stored procedures.
* **Liquibase:** Always use Liquibase for managing stored procedure changes.
* **Keep Procedures Small:** Design stored procedures to perform specific, well-defined tasks. Avoid overly complex procedures.
* **Use transactions:** Use transactions within your stored procedures to ensure data consistency.
* **Use comments:** add comments to your procedures to explain what the code is doing.

**6. Java and Spring Integration**

In your Java and Spring application, you can call stored procedures using `JdbcTemplate` or `NamedParameterJdbcTemplate`.

**Example (Spring JdbcTemplate):**

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Types;

@Repository
public class CustomerRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String getCustomerNameById(int customerId) {
        String sql = "{call GetCustomerByID(?, ?)}";
        Object[] params = {customerId, null};
        int[] types = {Types.INTEGER, Types.VARCHAR};
        String[] outParamName = {"customerName"};
        return jdbcTemplate.call(
                (callableStatement) -> {
                    for (int i = 0; i < params.length; i++) {
                        if (i == 0) {
                            callableStatement.setInt(i + 1, (int) params[i]);
                        } else {
                            callableStatement.registerOutParameter(i + 1, types[i]);
                        }
                    }
                    callableStatement.execute();
                    return callableStatement.getString(2);
                }, outParamName
        ).get("customerName");
    }
}
```

