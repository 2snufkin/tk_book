# ConfigManager 

`ConfigManager` is a configuration utility class used in Tumorotek to centralize and manage various constants and configurations. It stores predefined values such as database types, MIME types for file exports, entity IDs, and other commonly used constants. This approach helps streamline application configuration and ensures consistency across the project by reducing hardcoding and duplicative definitions. 
Instead of scattering constants and configuration settings throughout the codebase, `ConfigManager` serves as a single, reliable source for these values. This approach avoids the pitfalls of hardcoding values directly in business logic, which can lead to duplication, inconsistency, and errors.


While TKConstants exists in the project, it is recommended to use ConfigManager for managing configuration settings and constants. Modern Java development best practices discourage the use of interfaces for holding constants. Instead, using dedicated classes like ConfigManager aligns with cleaner design principles and better encapsulation of configuration logic.





#### Importance of Using ConfigManager

- **Centralized Configuration:** By defining constants in one location, `ConfigManager` ensures that changes to configuration values need to be made only once, reducing maintenance efforts and minimizing errors.
- **Consistency:** It promotes consistency throughout the application by using standardized values for configuration settings, headers, fonts, entity IDs, and more.
- **Ease of Use:** It simplifies the development process by providing a single source of truth for configuration values, making the code more readable and easier to manage.
- **Scalability:** It allows for easy scaling and adaptation of the application. When configuration values need to be changed or extended, modifications can be done quickly without impacting multiple parts of the codebase.
  

#### How to Use ConfigManager

Using `ConfigManager` is straightforward. You access its constants directly using the class name since all values are declared as `public static final`. This means they are class-level constants, which are accessible without creating an instance of `ConfigManager`.

##### Example Usage

Here’s an example of how to use `ConfigManager` to access a configuration value:

```java
// Accessing the predefined font family for G2D rendering
String selectedFont = ConfigManager.G2D_FONT_FAMILY;
```

In this example, the variable `selectedFont` will be assigned the value `"DejaVu Serif"`, which is defined in `ConfigManager`. This usage pattern applies to all other constants defined within the class, making it easy to reference configuration settings across the application.

#### Key Constants in ConfigManager

- **Headers:** Constants like `ENTETE_PRELEVEMENT`, `ENTETE_TUBE`, etc., define headers used throughout the application.
- **Database Types:** Constants such as `DB_ORACLE` and `DB_MYSQL` specify supported database types.
- **MIME Types:** `OFFICE_OPENXML_MIME_TYPE` and `OFFICE_EXCEL_MIME_TYPE` are used for identifying Excel file formats.
- **Entity IDs:** Short values like `ENTITE_ID_PATIENT`, `ENTITE_ID_PRELEVEMENT`, etc., represent entity identifiers used in data exports.
- **Character Sets and Fonts:** Settings like `UNICODE_CHARSET` and `G2D_FONT_FAMILY` specify character encoding and font preferences.

