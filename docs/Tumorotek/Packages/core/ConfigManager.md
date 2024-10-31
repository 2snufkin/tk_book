# ConfigManager

## Overview

`ConfigManager` is a core configuration utility class in Tumorotek that centralizes configuration management and constant definitions. It serves as the single source of truth for various system-wide settings, including:

- Database configurations
- File export settings
- Entity identifiers
- System constants
- Display preferences

## Purpose and Benefits

### Why ConfigManager?

While the project contains a legacy `TKConstants` interface, `ConfigManager` represents the modern, recommended approach for configuration management. This aligns with current Java best practices, which discourage using interfaces solely for constant storage.

### Key Advantages

1. **Centralized Management**
   - Single point of configuration
   - Reduced maintenance overhead
   - Minimized risk of inconsistencies

2. **Type Safety**
   - Compile-time constant validation
   - Proper encapsulation
   - Enhanced code reliability

3. **Development Efficiency**
   - Clear constant organization
   - Improved code readability
   - Simplified maintenance

4. **Future-Proofing**
   - Easy configuration updates
   - Scalable design
   - Better change management

## Implementation Guide

### Basic Usage

Constants in `ConfigManager` are accessed using static references:

```java
// Database type configuration
String dbType = ConfigManager.DB_ORACLE;

// Export format settings
String mimeType = ConfigManager.OFFICE_OPENXML_MIME_TYPE;

// Display settings
String fontFamily = ConfigManager.G2D_FONT_FAMILY;
```

### Key Configuration Categories

#### 1. Database Settings
```java
public static final String DB_ORACLE = "ORACLE";
public static final String DB_MYSQL = "MYSQL";
```

#### 2. Export Formats
```java
public static final String OFFICE_OPENXML_MIME_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
public static final String OFFICE_EXCEL_MIME_TYPE = "application/vnd.ms-excel";
```

#### 3. Entity Identifiers
```java
public static final Short ENTITE_ID_PATIENT = 1;
public static final Short ENTITE_ID_PRELEVEMENT = 2;
// ... additional entity IDs
```

#### 4. System Headers
```java
public static final String ENTETE_PRELEVEMENT = "Prelevement";
public static final String ENTETE_TUBE = "Tube";
// ... other headers
```

## Best Practices

1. **Always use ConfigManager over direct constant definition**
   - Maintains consistency
   - Simplifies future updates
   - Reduces code duplication

2. **Access patterns**
   - Use static imports judiciously
   - Group related constants together
   - Document any non-obvious constant usage

3. **Extension guidelines**
   - Follow existing naming conventions
   - Add clear documentation for new constants
   - Consider backward compatibility

## Migration from TKConstants

When working with existing code that uses `TKConstants`, gradually migrate to `ConfigManager`:

1. Identify constants in use
2. Map them to ConfigManager equivalents
3. Update references systematically
4. Test thoroughly after migration

## Future Considerations

- Configuration externalization options
- Dynamic configuration support
- Environment-specific settings
- Integration with configuration management systems

