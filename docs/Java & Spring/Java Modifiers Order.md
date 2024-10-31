# Java Modifiers Order

In Java, modifiers follow a specific conventional order that enhances code readability and maintainability. This guide outlines the standard order of modifiers for different Java elements.

## General Rules

- Modifiers should appear in a specific order according to the Java Language Specification (JLS)
- Not all modifiers can be combined (e.g., `private` and `abstract` cannot be used together)
- The order is not enforced by the compiler but is a widely accepted convention

## 1. Class Declarations

For classes, the order is:

1. **Access Modifiers**
   - `public`
   - `protected`
   - `private`
2. **Non-Access Modifiers**
   - `abstract`
   - `static`
   - `final`
   - `strictfp`

### Examples:

```java
public abstract class Shape { }
public static final class Constants { }
protected static class InnerHelper { }
```

## 2. Method Declarations

For methods, the order is:

1. **Access Modifiers**
   - `public`
   - `protected`
   - `private`
2. **Non-Access Modifiers**
   - `abstract`
   - `static`
   - `final`
   - `synchronized`
   - `native`
   - `strictfp`
3. **Return Type**
4. **Method Name** and **Parameters**

### Examples:

```java
public static final void processData(String input) { }
private synchronized void updateCache() { }
protected abstract List<String> getElements();
```

## 3. Field Declarations

For fields, the order is:

1. **Access Modifiers**
   - `public`
   - `protected`
   - `private`
2. **Non-Access Modifiers**
   - `static`
   - `final`
   - `transient`
   - `volatile`
3. **Data Type**
4. **Field Name**

### Examples:

```java
private static final String DEFAULT_VALUE = "unknown";
public static volatile boolean isRunning = false;
protected transient int temporaryCounter;
```

## 4. Constructor Declarations

For constructors, the order is:

1. **Access Modifiers**
   - `public`
   - `protected`
   - `private`
2. **Constructor Name** and **Parameters**

### Examples:

```java
public MyClass(String name) { }
protected MyClass() { }
private MyClass(int id, String name) { }
```

## Common Combinations and Restrictions

### Valid Combinations
- `public static final`
- `private static`
- `protected synchronized`
- `public abstract`

### Invalid Combinations
- `private abstract` (methods/classes cannot be both private and abstract)
- `final abstract` (cannot be both final and abstract)
- `static abstract` (methods cannot be both static and abstract)

## Best Practices

1. **Consistency**: Maintain consistent modifier ordering throughout your codebase
2. **IDE Support**: Most modern IDEs can automatically arrange modifiers in the correct order
3. **Code Reviews**: Include modifier order checks in your code review process
4. **Documentation**: Document any project-specific modifier ordering conventions

## Tools and IDE Support

Many IDEs provide support for automatically organizing modifiers:

- IntelliJ IDEA: Code → Reformat Code
- Eclipse: Source → Clean Up
- NetBeans: Source → Format

These tools can help maintain consistent modifier ordering across your project.

