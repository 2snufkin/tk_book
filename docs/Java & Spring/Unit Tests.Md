# Testing DAO Classes:

1. Check Existing Test Class:
   Search your project files or manually explore the specified DAO test package (tumorotek-model/src/test/java/fr/aphp/tumorotek/dao/test) to determine if a test class already exists for the DAO. If it doesn't exist, move to step 2; otherwise, proceed to step 4.

2. Create a New Test Class:
   If needed, create a new test class in the correct package.
   Name the class as ___DaoTest and extend AbstractDaoTest.

3. Set Up Dependency Injection:
   Create a private variable for the DAO bean and its setter method for dependency injection.

4. Follow Testing Conventions:
   Tests must start with the word 'test' when working with AbstractJpaTests.
   Write your test cases.

**Setting:**
- AbstractDaoTest extends AbstractJpaTests.
- It uses the applicationContextDao-test-mysql.xml, which includes necessary resources: spring-jpa-test-mysql.xml and applicationContextDao.xml.

---

# Testing Manager Classes:

1. Check Existing Test Class:
   Search the specified manager test package (tumorotek-core/src/test/java/fr/aphp/tumorotek/manager/test) to find an existing test class for the manager. If it doesn't exist, move to step 2; otherwise, proceed to step 4.

2. Create a New Test Class:
   If needed, create a new test class in the correct package.
   Name the class as ___ManagerTest and extend AbstractManagerTest.

3. Set Up Dependency Injection:
   Create a private variable for the Manager bean and annotate it with @Autowired.

4. Annotation for Tests:
   Annotate your test methods with @Test.

**Setting:**
- AbstractManagerTest is deprecated. Refactor it to AbstractManagerTest (remove the '4').
- It uses applicationContextDaoBase-test-mysql.xml and applicationContextManagerBase.xml for configurations.

Actions to be taken:
- Replace the deprecated AbstractJpaTests with an alternative (mention the recommended alternative).
- Consider refactoring the current configuration to use an H2 database for testing.
- Refactor AbstractManagerTest4 to AbstractManagerTest as the '4' holds no significance.
- Consider using a mocking library for more efficient and controlled testing.