# Liquibase Checksum Validation Issue

Checksum validation issues in Liquibase can be resolved by updating the checksums in the `DATABASECHANGELOG` table to match the modified changesets. This document outlines common causes, solutions, and best practices for handling these issues.

## Problem Overview

Liquibase maintains database schema version control by calculating checksums for each changeset. When a changeset's content is modified without properly updating its checksum, Liquibase throws a validation error that looks like this:

```
liquibase.exception.ValidationFailedException: Validation Failed:
     1 change sets check sum
     changelog.xml::1::author was: 8:d9cc830bd2a1f43eb6d0125891177d19 but is now: 8:f5e9ad5c50f8378269c4e934eece1b20
```

## Common Causes

1. **Manual Changeset Modifications:**
   - Direct edits to changelog files without proper version control
   - Whitespace or formatting changes
   - Changes to SQL statements within existing changesets

2. **Environment Differences:**
   - Line ending differences (CRLF vs LF)
   - Character encoding inconsistencies
   - Different database versions across environments

## Resolution Methods

### Method 1: Update Checksums via SQL

```sql
UPDATE DATABASECHANGELOG 
SET MD5SUM = '8:new_checksum_value' 
WHERE ID = 'changeset_id' 
AND AUTHOR = 'author_name' 
AND FILENAME = 'changelog_file.xml';
```

### Method 2: Using Liquibase Commands

```bash
# Clear all checksums
liquibase clearChecksums

# Update database to recalculate checksums
liquibase update
```

### Method 3: Using `validCheckSum` Tag

```xml
<changeSet id="1" author="dev">
    <validCheckSum>8:old_checksum</validCheckSum>
    <validCheckSum>8:new_checksum</validCheckSum>
    <!-- changeset content -->
</changeSet>
```

## Best Practices

1. **Version Control:**
   - Always use source control for changelog files
   - Document changeset modifications in commit messages
   - Use meaningful changeset IDs and descriptions

2. **Change Management:**
   - Avoid modifying existing changesets
   - Create new changesets for schema modifications
   - Use `runOnChange="true"` for volatile objects like views or procedures

3. **Binary Logging Considerations:**

If you encounter the error:
```
liquibase.exception.DatabaseException: This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled
```

You have two options:

a) **Recommended:** Mark your functions appropriately:
```sql
CREATE FUNCTION my_function() 
RETURNS INT
DETERMINISTIC
BEGIN
    -- function logic
END;
```

b) **Alternative:** Enable trust for function creators:
```sql
SET GLOBAL log_bin_trust_function_creators = 1;
```

> ⚠️ **Warning:** Enabling `log_bin_trust_function_creators` globally may have security implications. Use with caution in production environments.

## Troubleshooting Tips

1. **Verify Changes:**
   - Compare changeset content across environments
   - Check for hidden characters or encoding issues
   - Review recent changelog modifications

2. **Database Consistency:**
   - Ensure all environments use the same database version
   - Verify changelog execution order
   - Check for environment-specific configurations

3. **Logging and Monitoring:**
   - Enable detailed Liquibase logging
   - Monitor changeset execution history
   - Document all manual interventions