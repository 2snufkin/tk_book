# DAO Implementation Guide

This tutorial will guide you through creating and working with Data Access Objects (DAOs) in the Tumorotek application.

## 1. Creating a DAO Interface

First, create an interface that extends `GenericDaoJpa`:

```java
// Example: UserDao.java
public interface UserDao extends GenericDaoJpa<User, Long> {
    User findById(Long id);
    List<User> findByUsername(String username);
    // Add other specific methods as needed
}
```

## 2. Understanding DAO Method Naming

Spring Data JPA automatically implements methods based on their names. The naming convention follows a specific pattern:

```java
// Common naming patterns:
findBy<PropertyName>(<PropertyType> property)
findBy<PropertyName>And<PropertyName>(<PropertyType> prop1, <PropertyType> prop2)
findBy<PropertyName>OrderBy<PropertyName>Asc/Desc(<PropertyType> property)

// Real examples:
List<Echantillon> findByCode(String code);
Optional<User> findByEmailAndActive(String email, boolean active);
List<Sample> findByDateCreatedOrderByCodeDesc(LocalDateTime dateCreated);
```

## 3. Configuring the DAO Bean

Add your DAO configuration to `applicationContextDao.xml`:

```xml
<!-- applicationContextDao.xml -->
<beans>
    <!-- Define your DAO bean -->
    <bean id="userDao" parent="abstractDao">
        <property name="proxyInterfaces">
            <value>com.example.dao.UserDao</value>
        </property>
        <property name="target">
            <bean parent="abstractDaoTarget">
                <constructor-arg>
                    <value>com.example.entity.User</value>
                </constructor-arg>
            </bean>
        </property>
    </bean>
</beans>
```

## 4. Service Layer Integration

Configure your service to use the DAO:

```xml
<!-- applicationContext.xml -->
<beans>
    <bean id="userService" class="com.example.service.UserServiceImpl">
        <property name="userDao" ref="userDao" />
        <!-- Add other required dependencies -->
    </bean>
</beans>
```

## 5. Testing DAOs

Create a test class extending `AbstractDaoTest`:

```java
public class UserDaoTest extends AbstractDaoTest {
    private UserDao userDao;
    
    @Before
    public void setUp() {
        // Setup test data
    }
    
    @Test
    public void testFindById() {
        User user = userDao.findById(1L);
        assertNotNull(user);
        assertEquals("expectedUsername", user.getUsername());
    }
    
    // Setter for Spring injection
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
```

## 6. Test Configuration

Include your tests in `pom.xml`:

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.0.0-M5</version>
            <configuration>
                <includes>
                    <include>**/*Test.java</include>
                </includes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

## Best Practices

1. Always define clear method names that reflect their purpose
2. Use appropriate return types (List, Optional, etc.)
3. Include proper documentation for complex queries
4. Write comprehensive tests for all DAO methods
5. Follow naming conventions consistently

## Common Issues and Solutions

- If your DAO methods aren't being recognized, verify the method naming follows Spring Data JPA conventions
- For complex queries, consider using `@Query` annotation instead of method names
- Ensure proper transaction management is configured
- Check entity mapping if you encounter persistence issues

