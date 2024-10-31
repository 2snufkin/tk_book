# Resource Bundles in Java

Resource bundles in Java provide a robust mechanism for internationalizing applications by managing locale-specific resources. They enable seamless localization while keeping the core application code independent of locale-specific details.

## Key Features of Resource Bundles
- **Localization**: Easily translate applications into different languages without code changes
- **Multiple Locale Support**: Handle multiple languages/regions simultaneously
- **Extensibility**: Add new locales without modifying existing code
- **Fallback Mechanism**: Gracefully handle missing translations using default bundles
- **Type Safety**: Compile-time checking for resource keys

## Resource Bundle Hierarchy
1. **Base Bundle**: The default fallback (e.g., `Messages`)
2. **Language Bundle**: Language-specific (e.g., `Messages_fr`)
3. **Country Bundle**: Country/region-specific (e.g., `Messages_fr_CA`)
4. **Variant Bundle**: Variant-specific (e.g., `Messages_fr_CA_MAC`)

### Lookup Strategy
When requesting a resource for `fr_CA`, Java searches in this order:
1. `Messages_fr_CA`
2. `Messages_fr`
3. `Messages`
4. Throws `MissingResourceException` if not found

## Implementation Types

### 1. PropertyResourceBundle
```properties:messages.properties
greeting=Hello
farewell=Goodbye

# German version (messages_de.properties)
greeting=Hallo
farewell=Auf Wiedersehen
```

### 2. ListResourceBundle
```java:MyResources.java
public class MyResources extends ListResourceBundle {
    protected Object[][] getContents() {
        return new Object[][] {
            {"greeting", "Hello"},
            {"farewell", "Goodbye"},
            {"colors", new String[] {"red", "green", "blue"}}  // Can store complex objects
        };
    }
}
```

## Usage Examples

### Basic Usage
```java
// Load bundle for specific locale
Locale germanLocale = new Locale("de", "DE");
ResourceBundle bundle = ResourceBundle.getBundle("messages", germanLocale);

// Get resources
String greeting = bundle.getString("greeting");
String[] colors = (String[]) bundle.getObject("colors");
```

### Advanced Usage with Control
```java
ResourceBundle.Control control = new ResourceBundle.Control() {
    @Override
    public long getTimeToLive(String baseName, Locale locale) {
        return TimeUnit.MINUTES.toMillis(30); // Cache for 30 minutes
    }
};

ResourceBundle bundle = ResourceBundle.getBundle("messages", 
                                               Locale.GERMAN, 
                                               control);
```

## Best Practices

### 1. Key Organization
```properties
# Group related keys with prefixes
button.ok=OK
button.cancel=Cancel
error.notFound=Resource not found
error.unauthorized=Access denied
```

### 2. Parameter Substitution
```java
// messages.properties
welcome.message=Welcome, {0}! You have {1} messages.

// Usage
MessageFormat.format(bundle.getString("welcome.message"), 
                    userName, 
                    messageCount);
```

### 3. Exception Handling
```java
try {
    String value = bundle.getString("some.key");
} catch (MissingResourceException e) {
    // Provide fallback behavior
    value = "Default Value";
}
```

## Performance Considerations
- Resource bundles are cached by default
- Cache control options:
  - Time-to-live settings
  - Custom loading strategies
  - Memory consumption management

## Thread Safety
- All standard ResourceBundle implementations are thread-safe
- Custom implementations should ensure thread safety for:
  - `handleGetObject()`
  - `getKeys()`
  - `handleKeySet()`

## Advanced Features

### Custom Resource Formats
```java
public class XMLResourceBundleControl extends ResourceBundle.Control {
    @Override
    public List<String> getFormats(String baseName) {
        return Arrays.asList("xml");
    }
    
    @Override
    public ResourceBundle newBundle(...) {
        // Custom XML loading logic
    }
}
```

### Resource Bundle Provider
```java
public class CustomResourceBundleProvider 
    implements ResourceBundleControlProvider {
    
    @Override
    public ResourceBundle.Control getControl(String baseName) {
        return new CustomControl();
    }
}
```

## Compatibility Notes
- Available since: JDK 1.1
- Enhanced features added in:
  - Java 6: ResourceBundle.Control
  - Java 8: ResourceBundleControlProvider
  - Java 9: Automatic module name support

## Related Classes
- `java.util.ResourceBundle`
- `java.util.PropertyResourceBundle`
- `java.util.ListResourceBundle`
- `java.util.MissingResourceException`
- `java.text.MessageFormat`

By following these patterns and best practices, you can create maintainable, internationalized applications that provide excellent user experiences across different locales.
