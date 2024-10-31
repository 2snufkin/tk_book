# GenericDaoJpa Documentation

## Overview
The GenericDaoJpa interface serves as the foundation for most DAO interfaces in Tumorotek. It implements a generic Data Access Object (DAO) pattern using Java Persistence API (JPA) to handle CRUD operations (Create, Read, Update, Delete) on the database.

## Interface Definition
```java
public interface GenericDaoJpa<T, PK extends Serializable> {
    // Generic type parameters:
    // T: Entity type
    // PK: Primary key type (must implement Serializable)
}
```

## Core Methods

### Create Operations
- **createObject(T newInstance)**
  - Creates a new persistent entity in the database
  - Parameters: `newInstance` - The entity instance to persist
  - Returns: void

### Read Operations
- **findById(PK id)**
  - Retrieves an entity by its primary key
  - Parameters: `id` - The primary key value
  - Returns: The found entity or null

- **findAll()**
  - Retrieves all entities of type T
  - Returns: List<T> containing all entities

### Update Operations
- **mergeObject(T o)**
  - Merges the state of a detached entity into the persistence context
  - Parameters: `o` - The entity to merge
  - Returns: The managed instance that the state was merged to

- **updateObject(T transientObject)**
  - Updates an existing entity in the database
  - Parameters: `transientObject` - The entity to update
  - Returns: void

### Delete Operations
- **removeObject(PK id)**
  - Removes an entity from the database
  - Parameters: `id` - The primary key of the entity to remove
  - Returns: void

## Important Implementation Notes

### Deletion Pattern
When implementing deletion operations in Tumorotek, follow these guidelines:

1. **Avoid Named Queries for Deletion**
   - Don't use named queries with DELETE statements
   - Example of what NOT to do:
   ```java
   @NamedQuery(name = "Entity.deleteByFields",
               query = "DELETE FROM Entity e WHERE e.field = ?1")
   ```

2. **Correct Deletion Pattern**
   - Create methods in manager interfaces that:
     - Start with "remove" (not "delete")
     - End with "Manager"
   - For simple deletions: Use the `removeObject(PK id)` method
   - For cascade deletions: Reference EchantillonManager implementation

### Method Naming Conventions
- Query methods should start with "find"
- Counting operations traditionally use "findCount"
- Recent support (2022) allows methods starting with "count"

### Method Interception
The system uses a FinderIntroductionInterceptor that processes methods based on their prefixes:
```java
// Method naming patterns handled by the interceptor:
- find* : Executes finder methods (excluding findById and findAll)
- count* : Executes counter methods (added in 2022)
```

## Suggestions
1. Use "remove" instead of "delete" in method names
2. Implement cascade deletion through manager interfaces when needed
3. Follow the established naming conventions for query methods
4. Utilize the generic methods provided by GenericDaoJpa when possible