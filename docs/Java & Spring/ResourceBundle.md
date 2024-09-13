# Resource Bundles in Java

Resource bundles in Java are used to handle locale-specific objects, allowing programs to be easily localized, handle multiple locales simultaneously, and support additional locales as needed. This approach isolates locale-specific information, making the program code largely independent of the user's locale.

## Key Features of Resource Bundles
- **Localization**: Programs can be easily translated into different languages.
- **Multiple Locales**: Programs can handle multiple locales simultaneously.
- **Extendibility**: Resource bundles can be modified to support new locales.

## Resource Bundle Families
- **Base Name**: Each resource bundle family has a common base name (e.g., `MyResources`).
- **Locale-Specific Names**: Locale-specific bundles are named with additional components (e.g., `MyResources_de` for German).
- **Default Bundle**: A default bundle (e.g., `MyResources`) is used as a fallback if a specific locale is not supported.
  
## Structure of Resource Bundles
- Resource bundles contain key/value pairs.
- Keys are always strings, and values can be any type of object (e.g., strings, arrays, etc.).

### Example of a ListResourceBundle:
```java
public class MyResources extends ListResourceBundle {
    protected Object[][] getContents() {
        return new Object[][] {
            {"OkKey", "OK"},
            {"CancelKey", "Cancel"},
        };
    }
}
```
- In this example, the keys are `"OkKey"` and `"CancelKey"`, and the values are `"OK"` and `"Cancel"`, respectively.

## Using Resource Bundles
- Resource bundles are loaded using the `getBundle` method:
  ```java
  ResourceBundle myResources = ResourceBundle.getBundle("MyResources", currentLocale);
  ```
- Values are retrieved using getter methods such as `getString`, `getStringArray`, and `getObject`. If a key is not found, a `MissingResourceException` is thrown.
  
### Example:
```java
button1 = new Button(myResources.getString("OkKey"));
button2 = new Button(myResources.getString("CancelKey"));
```

## Subclasses of ResourceBundle
- **ListResourceBundle**: Manages resources as a list of key/value pairs.
- **PropertyResourceBundle**: Uses a properties file to manage resources.
- If these do not suit your needs, you can create a custom subclass of `ResourceBundle`, overriding `handleGetObject` and `getKeys()`.

## Example of Custom ResourceBundle Subclass
```java
// Default (English language, United States)
public class MyResources extends ResourceBundle {
    public Object handleGetObject(String key) {
        if (key.equals("okKey")) return "Ok";
        if (key.equals("cancelKey")) return "Cancel";
        return null;
    }

    public Enumeration<String> getKeys() {
        return Collections.enumeration(keySet());
    }

    protected Set<String> handleKeySet() {
        return new HashSet<String>(Arrays.asList("okKey", "cancelKey"));
    }
}

// German language
public class MyResources_de extends MyResources {
    public Object handleGetObject(String key) {
        if (key.equals("cancelKey")) return "Abbrechen";
        return null;
    }

    protected Set<String> handleKeySet() {
        return new HashSet<String>(Arrays.asList("cancelKey"));
    }
}
```

## ResourceBundle.Control
- The `ResourceBundle.Control` class allows for custom resource bundle loading processes, such as enabling non-standard formats, modifying the search strategy, or defining caching parameters.
- Custom `ResourceBundle.Control` instances can be provided by implementing `ResourceBundleControlProvider`.

## Cache Management
- Resource bundle instances are cached by default.
- Cache behavior can be managed by clearing the cache, setting time-to-live values, or disabling caching.

## Additional Notes
- Resource bundles must be thread-safe when used by multiple threads.
- The default implementations of the non-abstract methods in `ResourceBundle`, `ListResourceBundle`, and `PropertyResourceBundle` are thread-safe.

## Useful References
- **Classes**: `ListResourceBundle`, `PropertyResourceBundle`, `MissingResourceException`
- **Since**: JDK 1.1

By using resource bundles effectively, you can create flexible, locale-aware applications that are easy to maintain and extend.
```

This Markdown file provides a structured and concise summary of the information about Resource Bundles, making it easy to understand and reference.