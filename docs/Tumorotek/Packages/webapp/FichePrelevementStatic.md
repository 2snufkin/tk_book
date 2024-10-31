Sure, here's the JavaDoc documentation for the given class in Markdown format:

# FichePrelevementStatic Class

The `FichePrelevementStatic` class is a controller used to manage static information related to a sample collection. It extends the `AbstractFicheStaticController` class and provides various methods and components for handling different actions and displaying data.

## Class Variables

- `private final Logger log`: An instance of the Logger class used for logging messages related to this class.
- `private static final long serialVersionUID`: A static field representing the serialVersionUID for serialization purposes.
- `protected Menuitem addDerive`: A menu item for adding derivatives.
- `protected Menuitem addEchan`: A menu item for adding samples.
- `protected Menuitem changeCollection`: A menu item for changing the collection.
- `protected Menuitem changeMaladie`: A menu item for changing the associated disease.
- `protected Grid echantillonsGrid`: A grid for displaying sample information.
- `protected Grid prodDerivesGrid`: A grid for displaying derivative information.
- `protected Grid laboIntersGrid`: A grid for displaying laboratory interactions.

## Additional Components

- `protected HtmlBasedComponent gridFormPrlvtComp`: An HTML-based component for the private grid form.
- `protected HtmlBasedComponent groupPatient`: An HTML-based component for grouping patient-related information.
- `protected HtmlBasedComponent groupLaboInter`: An HTML-based component for grouping laboratory interaction information.
- `protected HtmlBasedComponent groupEchans`: An HTML-based component for grouping sample-related information.
- `protected HtmlBasedComponent groupDerivesPrlvt`: An HTML-based component for grouping derivative-related information.
- `protected ResumePatient resumePatient`: A component for displaying patient's resume.
- `protected Vbox risquesBox`: A VBox component for displaying risk information.
- `protected Label congDepartLabel`: A label for displaying departure information.
- `protected Div congDepartImg`: A div element for displaying departure image.
- `protected Label congArriveeLabel`: A label for displaying arrival information.
- `protected Div congArriveeImg`: A div element for displaying arrival image.
- `private Image imgDossierInbox`: An image representing the inbox.
- `private Menuitem importDossier`: A menu item for importing dossiers.

## Main Objects

- `protected Prelevement prelevement`: An instance of the Prelevement class representing the sample collection.
- `protected Maladie maladie`: An instance of the Maladie class representing the associated disease.
- `protected Patient patient`: An instance of the Patient class representing the patient.
- `protected List<LaboInterDecorator> laboInters`: A list of LaboInterDecorator instances representing laboratory interactions.
- `protected List<Echantillon> echantillons`: A list of Echantillon instances representing samples.
- `protected List<ProdDerive> derives`: A list of ProdDerive instances representing derivatives.

## Miscellaneous Properties

- `protected String valeurQuantite`: A string representing a quantity value.
- `protected String echantillonsGroupHeader`: A string representing the header for the samples group.
- `protected String prodDerivesGroupHeader`: A string representing the header for the derivatives group.
- `protected ProdDeriveRowRenderer prodDeriveRenderer`: An instance of the ProdDeriveRowRenderer class for rendering derivatives.
- `protected EchantillonRowRenderer echantillonRenderer`: An instance of the EchantillonRowRenderer class for rendering samples.
- `protected boolean isPatientAccessible`: A boolean indicating if patient information is accessible.
- `protected boolean canChangeCollection`: A boolean indicating if collection change is allowed.
- `protected boolean canChangeMaladie`: A boolean indicating if disease change is allowed.
- `protected boolean canAccessEchantillons`: A boolean indicating if access to samples is allowed.
- `protected boolean canAccessDerives`: A boolean indicating if access to derivatives is allowed.

## Constructor

- `public FichePrelevementStatic()`: Constructs a new instance of the `FichePrelevementStatic` class.

Please note that this is a high-level overview of the class and its members. Detailed method descriptions and further implementation details can be added as necessary.

Here is the continuation of the Markdown documentation describing each method in the `FichePrelevementStatic` class:

### Method: `doAfterCompose(final Component comp)`

This method is an override of the parent class method and is responsible for performing actions after composing the component. It initializes various properties and components of the class, such as visibility settings for grids, menu items, and other UI elements.

### Method: `initResumePatient()`

This method is used to initialize the `resumePatient` component, which displays summarized patient information. It is overridden to accommodate the type difference between the `groupPatient` component and `Groupbox` component.

### Method: `getObjectTabController()`

This method overrides the parent class method to return the specific controller for managing `Prelevement` objects.

### Method: `setObject(final TKdataObject p)`

This method sets the `Prelevement` object and initializes various properties and components associated with it. It populates lists of lab interactions, samples, and derivatives. It also calculates and sets the headers for sample and derivative groups, manages component visibility, and handles annotations.

### Method: `enablePatientGroup(final boolean b)`

This method enables or disables the `groupPatient` component based on the provided boolean parameter, controlling its appearance.

### Method: `getParentObject()`

This method returns the parent object associated with the current `Prelevement`, which could be a `Maladie` object.

### Method: `setParentObject(final TKdataObject obj)`

This method sets the parent object of the current `Prelevement`, typically a `Maladie` object.

### Method: `disableToolBar(final boolean b)`

This method disables or enables various toolbar buttons based on the provided boolean parameter.

### Method: `initAssociations()`

This method initializes the associated objects such as lab interactions, samples, and derivatives for the current `Prelevement` object. It also sets the visibility of different groups based on the availability of associated data.

### Method: `setNewObject()`

This method sets a new instance of `Prelevement` as the current object and manages the state of UI elements accordingly.

### Method: `getObject()`

This method returns the current `Prelevement` object.

### Method: `prepareDeleteObject()`

This method prepares the current `Prelevement` object for deletion, setting appropriate messages and cascading options based on its usage.

### Method: `removeObject(final String comments)`

This method removes the current `Prelevement` object along with associated data, including lab interactions, samples, and derivatives. It also deletes associated files.

### Method: `getIsMaladieNotNull()`

This method returns a boolean indicating whether the associated `Maladie` object is not null.

### Method: `initQuantiteAndVolume()`

This method initializes the quantity and volume fields for display, formatting the values for rendering.

### Method: `getDatePrelevementFormated()`

This method formats and returns the date of sample collection.

### Method: `getDateConsentementFormated()`

This method formats and returns the date of consent.

### Method: `getDateDepartFormated()`

This method formats and returns the departure date.

### Method: `getSterileFormated()`

This method formats and returns the value of the "sterile" field as a "Yes" or "No" representation.

### Method: `getConformeArriveeFormated()`

This method formats and returns the value of the "conformeArrivee" field, including any non-conformities associated with the arrival.

### Method: `getSClassPreleveur()`, `getSClassOperateur()`, `getSClassService()`, `getEtablissementFormated()`

These methods format and return specific properties of collaborators and institutions associated with the `Prelevement` object.

### Method: `getDateArriveeFormated()`

This method formats and returns the arrival date.

### Method: `drawRisquesFormatted()`

This method populates the `risquesBox` component with risk information associated with the `Prelevement` object.

### Methods: `getEchantillonsListSizeSupOne()`, `getDerivesListSizeSupOne()`

These methods return booleans indicating whether there is more than one sample or derivative associated with the `Prelevement` object.

### Methods: `onOpen$groupLaboInter()`, `onOpen$groupEchans()`, `onOpen$groupDerivesPrlvt()`

These methods control the scrolling behavior when opening specific groups in the UI, ensuring that the scroll position adjusts correctly.

### Methods: `onClickObject(final Event event)`, `onClickEchantillonCode(final Event event)`, `onClickProdDeriveCode(final Event event)`

These methods handle click events on objects, opening their respective detailed (fiche static) views or lists.

### Method: `onSelectAllEchantillons()`, `onSelectAllDerives()`

These methods handle the "Select All" functionality for samples and derivatives.

### Method: `onClick$addDerive(final Event event)`

This method handles the click event for adding a new derivative to the `Prelevement` object.

Sure, I'll continue describing each method in the provided code snippet:

### Method: `onClick$addEchan(final Event event)`

This method is responsible for handling the click event on the "Add Echantillon" button. It retrieves an instance of the `EchantillonController` using the `backToMe` method and then switches the controller to create mode for adding a new Echantillon (sample) associated with the current Prelevement (sample collection).

### Method: `applyDroitsOnFiche()`

This method is responsible for applying access control and permission settings to the current Prelevement (sample collection) form. It draws action buttons specific to Prelevement, determines user permissions for creating Derive (derived sample) and Echantillon (sample) entities based on user roles and session data. It also checks user access rights to certain features like consultation, stockage (storage), and patient information. Additionally, it handles enabling/disabling various UI components based on user permissions.

### Getters and Setters:

The code snippet contains a series of getter and setter methods that manage the retrieval and assignment of various attributes related to the Prelevement entity, such as `Maladie` (disease), `Patient`, lists of `LaboInterDecorator`, `Echantillon`, and `ProdDerive`, along with some UI-related attributes.

### Modal Windows:

The code defines two methods that manage the opening of modal windows for changing the associated collection and maladie (disease) of the Prelevement entity. These methods create and configure a new `Window` component, set its properties, and populate it with specific content defined in macros (`HtmlMacroComponent`). These modal windows provide a way to modify the collection and disease associated with the Prelevement.

### Other Methods:

There are additional methods such as `setDossierInboxVisible()`, `setImportDossierVisible()`, and `onClick$importDossier()`, which handle UI-related logic for showing/hiding elements and opening a window to import external dossiers.

The method `onGetPrelevementUpdatedFromInterfacage(final Event e)` updates the UI components and lists when the Prelevement entity is updated through an interfacage.

The methods `setGroupLaboInterOpen(boolean b)`, `setGroupEchansOpen(boolean b)`, and `setGroupDerivesPrlvtOpen(boolean b)` control the visibility state of specific UI groups based on a boolean parameter.

