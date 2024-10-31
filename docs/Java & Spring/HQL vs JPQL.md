# HQL or JPQL?

In the Tumorotek project, we use JPQL rather than HQL. But what exactly is the difference between them, and how can we distinguish between the two?

## Understanding the Difference

It's essential to understand the difference between HQL (Hibernate Query Language) and JPQL (Java Persistence Query Language). Hibernate and JPA (Java Persistence API) are two different frameworks used for Object-Relational Mapping (ORM) in Java applications. Hibernate is an implementation of the JPA specification and provides additional features beyond the JPA standard.

HQL is very similar to JPQL, which is the standard query language defined by the JPA specification. Both HQL and JPQL use entity class names and their mapped properties instead of SQL table and column names.

When using Hibernate as your JPA implementation, you can write queries in HQL, which is very similar to JPQL. However, for greater portability across various JPA implementations, it's recommended to stick to using JPQL.

### How to Identify HQL vs JPQL

In most cases, it can be challenging to distinguish between HQL and JPQL in an existing project just by looking at the query strings, as they are quite similar. However, you can examine certain factors to determine whether JPQL or HQL is being used:

- **Import Statements:** In HQL, you might see import statements specific to Hibernate classes, such as `org.hibernate.Query`, while JPQL won't have these Hibernate-specific imports.
- **JPA Annotations:** If the project uses JPA annotations like `@Entity`, `@Table`, `@Column`, etc., it's more likely that JPQL is being used. While Hibernate supports these annotations as well, they are part of the JPA specification.
- **Hibernate-specific Features:** If you encounter Hibernate-specific features or annotations in the code, like `@Type` or `@Filter`, it's a strong indicator of HQL usage.
- **JPA Query API:** If you see code creating TypedQuery or Query objects using JPA's EntityManager (`entityManager.createQuery()`), it's more likely to be JPQL.

## Using JPQL

To use JPQL in your project:

1. **Define the JPQL Query:** Construct the JPQL query as a string using JPQL syntax. Use Java class names and their mapped properties instead of SQL table and column names.
2. **Logging (Optional):** Before executing the query, you might want to log the generated JPQL query for debugging purposes.
3. **Create an EntityManager:** Declare the EntityManagerFactory and create an EntityManager instance.
4. **Create a TypedQuery:** Create a TypedQuery object using the `createQuery()` method on the EntityManager, passing the JPQL query as an argument.
5. **Set Parameters:** If the JPQL query includes parameters, set them using the appropriate methods (`setParameter()` or `setXxx()`) on the TypedQuery object.
6. **Execute the Query:** Use `getResultList()` or `getSingleResult()` to execute the query and retrieve results.
7. **Handle Results:** Process the obtained results as needed.
8. **Close Resources:** Close the EntityManager to release acquired resources.
9. **Handle Exceptions:** Properly handle any exceptions that may occur.

## Best Practices for Writing JPQL Queries

1. **Entity and Property Names:**
   - Use Java entity class names and their property names
   - Ensure proper capitalization and spelling

2. **Security and Performance:**
   - Use parameters for dynamic values to prevent SQL injection
   - Prefer lazy fetching unless necessary
   - Avoid Cartesian products
   - Use batch fetching for collections
   - Optimize query fetch sizes

3. **Maintainability:**
   - Keep queries simple and readable
   - Avoid database-specific functions
   - Test queries thoroughly
   - Enable query logging for debugging

4. **Performance Optimization:**
   - Ensure proper indexing of database tables
   - Utilize caching mechanisms
   - Avoid executing queries in loops
   - Keep Hibernate version up to date

## Example

Assuming you have two entity classes: Employee and Department, with a one-to-many relationship. Here's a JPQL query example: