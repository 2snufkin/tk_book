# ZK Framework Navigation Guide

## Controller-Based Navigation Methods

### 1. Executions.sendRedirect()
```java
Executions.sendRedirect("/path/to/page.zul");
```
**Use Case**: Complete page navigation with full refresh, best for major view changes or when session/state reset is needed.

**Details**:
- Triggers a browser redirect
- Changes the URL in browser address bar
- Resets the page state
- Can pass parameters via query string

**Example with Parameters**:
```java
Executions.sendRedirect("/path/to/page.zul?param1=value1&param2=value2");
```

### 2. Executions.forward()
```java
Executions.getCurrent().forward("/path/to/page.zul");
```
**Use Case**: Server-side navigation without URL change, ideal for internal routing while preserving the current URL.

**Details**:
- Maintains the original URL
- Preserves server-side state
- More efficient than sendRedirect for internal navigation
- Cannot be bookmarked since URL doesn't change

### 3. Executions.createComponents()
```java
Window window = (Window) Executions.createComponents("/path/to/page.zul", parentComponent, params);
```
**Use Case**: Dynamic component creation, perfect for modals, popups, or embedding partial views within the current page.

**Details**:
- Creates components without full page navigation
- Can be modal or non-modal
- Supports parameter passing
- Maintains current page context

**Modal Example**:
```java
Map<String, Object> params = new HashMap<>();
params.put("data", someData);
Window window = (Window) Executions.createComponents("/path/to/modal.zul", null, params);
window.doModal();
```

### 4. Executions.include()
```java
Executions.include("/path/to/page.zul");
```
**Use Case**: Including content within current page without creating new components, useful for content injection.

**Details**:
- Injects content into current page
- Doesn't create new component hierarchy
- Maintains current page state
- Good for partial page updates

## ZUL-Based Navigation

### 1. Href Attribute
```xml
<button href="/path/to/page.zul" label="Navigate"/>
```
**Use Case**: Simple direct navigation without need for controller logic.

**Details**:
- Client-side navigation
- No access to server-side logic
- Similar to HTML anchor behavior
- Cannot perform pre-navigation operations

### 2. Include Component
```xml
<include src="/path/to/page.zul"/>
```
**Use Case**: Static inclusion of content within a page, good for reusable components or page sections.

**Details**:
- Loads content at page creation
- No dynamic navigation
- Good for template composition
- Cannot pass complex parameters

### 3. Navigate Attribute
```xml
<button navigate="//pageName" label="Navigate"/>
```
**Use Case**: Navigation within a ZK page-based navigation model, good for single-page applications.

**Details**:
- Works with ZK's page-based navigation
- Maintains client-side state
- More efficient than full page reload
- Requires proper page definition setup

## Best Practices

### When to Use Each Method:

1. Use `sendRedirect`:
   - For complete page changes
   - When URL needs to change
   - When session reset is needed
   - For bookmarkable pages

2. Use `forward`:
   - For internal navigation
   - When preserving URL is important
   - For server-side routing
   - When maintaining server state is crucial

3. Use `createComponents`:
   - For modals and popups
   - For dynamic content loading
   - When passing complex parameters
   - For partial page updates

4. Use ZUL navigation:
   - For simple navigation without logic
   - In prototypes or simple applications
   - When no pre-navigation processing is needed
   - For static content inclusion

### Parameter Passing

1. Query String (sendRedirect):
```java
Executions.sendRedirect("/page.zul?id=" + id);
```

2. Map (createComponents):
```java
Map<String, Object> args = new HashMap<>();
args.put("data", someData);
Executions.createComponents("/page.zul", null, args);
```

3. Session Storage:
```java
Sessions.getCurrent().setAttribute("key", value);
```

### Navigation with Cleanup
When navigating between major sections, consider:
- Clearing relevant session attributes
- Closing open resources
- Saving necessary state
- Handling unsaved changes

Example:
```java
@Listen("onClick=#navigationButton")
public void navigate() {
    // Cleanup
    Sessions.getCurrent().removeAttribute("currentState");
    // Save if needed
    saveCurrentState();
    // Navigate
    Executions.sendRedirect("/newPage.zul");
}
```
