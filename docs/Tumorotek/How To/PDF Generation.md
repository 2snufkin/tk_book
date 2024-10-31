# PDF Generation Guide for Tumorotek

This guide explains how to generate and download PDF documents in Tumorotek using ZK Framework.

## Overview
The PDF generation process involves creating a document structure, converting it to PDF format, and enabling user download. The process includes proper error handling and user feedback.

## Implementation Steps

### 1. Basic PDF Generation
First, implement these core steps in your controller/viewmodel:

```java
// Show loading indicator
Clients.showBusy(Labels.getLabel("impression.encours"));

try {
    // Create document
    final Document document = createDocumentXML();
    
    // Convert to PDF
    byte[] pdfBytes = ManagerLocator.getXmlUtils().creerPdf(document);
    
    // Generate unique filename
    String filename = generatePdfFilename();
    
    // Trigger download
    if (pdfBytes != null) {
        Filedownload.save(pdfBytes, "application/pdf", filename);
    }
    
    // Optional: Trigger completion event
    Events.postEvent(new Event("onClose", self.getRoot()));
} catch (Exception e) {
    log.error("PDF generation failed", e);
} finally {
    Clients.clearBusy();
}
```

### 2. Filename Generation Helper
```java
private String generatePdfFilename() {
    StringBuffer sb = new StringBuffer();
    String timestamp = new SimpleDateFormat("yyyyMMddHHmm")
        .format(Calendar.getInstance().getTime());
    sb.append("your_prefix_here_");
    sb.append(timestamp);
    sb.append(".pdf");
    return sb.toString();
}
```

### 3. Document Creation Method
Implement `createDocumentXML()` to define your PDF content structure:

```java
private Document createDocumentXML() {
    // Get empty document with root element
    final Document document = ManagerLocator.getXmlUtils().createJDomDocument();
    final Element root = document.getRootElement();
    
    // Add header and footer
    ManagerLocator.getXmlUtils().addBasDePage(root, "footer text");
    ManagerLocator.getXmlUtils().addHautDePage(root, "header text", false, null);
    
    // Add first page
    final Element page1 = ManagerLocator.getXmlUtils().addPage(root,
        ObjectTypesFormatters.getLabel("impression.banque.title", 
        new String[] {banque.getNom()}));
    
    // Add content sections
    addContentSections(page1);
    
    return document;
}
```

## Best Practices

1. **Error Handling**
   - Always wrap PDF generation in try-catch blocks
   - Provide user feedback for failures
   - Clean up resources in finally blocks

2. **Content Organization**
   - Split content generation into logical methods
   - Use meaningful method names (e.g., `addTable()`, `addSummarySection()`)
   - Pass page elements as parameters for content addition

3. **User Experience**
   - Show loading indicators during generation
   - Provide clear feedback on success/failure
   - Use meaningful filenames with timestamps

## Utility Methods
The `XmlUtils` class provides several helpful methods:
- `createJDomDocument()`: Creates empty document
- `addBasDePage()`: Adds footer
- `addHautDePage()`: Adds header
- `addPage()`: Creates new page
- `creerPdf()`: Converts document to PDF bytes

## Example Content Section
```java
private void addContentSections(Element page) {
    addTable(page);
    addSummary(page);
    addMetadata(page);
}
```

---
**Note**: Customize the filename prefix, headers, and footers according to your application's needs. Always test PDF generation with various content types and sizes to ensure proper formatting.
















