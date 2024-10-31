# Unit Tests

When working on the Tumorotek project, it is essential to write unit tests for your Data Access Object (DAO) classes and Services (Managers). This guide covers both DAO and Manager testing approaches.

## Testing DAO Classes

1. **Check Existing Test Class:**
   - Search your project files in the DAO test package: `tumorotek-model/src/test/java/fr/aphp/tumorotek/dao/test`
   - Determine if a test class already exists for the DAO
   - If it doesn't exist, proceed to step 2; otherwise, skip to step 4

2. **Create a New Test Class:**
   - Create a new test class in the correct package
   - Name the class as `___DaoTest` and extend `AbstractDaoTest`

3. **Set Up Dependency Injection:**
   - Create a private variable for the DAO bean
   - Add its setter method for dependency injection

4. **Follow Testing Conventions:**
   - Tests must start with the word 'test' when working with AbstractJpaTests
   - Write your test cases

**Setting:**  
- `AbstractDaoTest` extends `AbstractJpaTests`
- Uses `applicationContextDao-test-mysql.xml`, which includes:
  - `spring-jpa-test-mysql.xml`
  - `applicationContextDao.xml`

## Testing Manager Classes

1. **Check Existing Test Class:**
   - Search the manager test package: `tumorotek-core/src/test/java/fr/aphp/tumorotek/manager/test`
   - If no test class exists, proceed to step 2; otherwise, skip to step 4

2. **Create a New Test Class:**
   - Create a new test class in the correct package
   - Name the class as `___ManagerTest` and extend `AbstractManagerTest`

3. **Set Up Dependency Injection:**
   - Create a private variable for the Manager bean
   - Annotate it with `@Autowired`

4. **Write Test Methods:**
   - Annotate test methods with `@Test`
   - Follow testing best practices

**Setting:**  
- Uses configuration files:
  - `applicationContextDaoBase-test-mysql.xml`
  - `applicationContextManagerBase.xml`

## Required Improvements

The following improvements should be implemented:

1. **Framework Updates:**
   - Replace the deprecated `AbstractJpaTests` with a modern alternative
   - Refactor `AbstractManagerTest4` to `AbstractManagerTest` (remove the '4')

2. **Testing Infrastructure:**
   - Consider migrating to H2 database for testing
   - Implement a mocking library (e.g., Mockito) for more efficient and controlled testing

3. **Best Practices:**
   - Use meaningful test names that describe the scenario being tested
   - Follow the Arrange-Act-Assert pattern
   - Keep tests independent and isolated
   - Consider using test data builders for complex objects