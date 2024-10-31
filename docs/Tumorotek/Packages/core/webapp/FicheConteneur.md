# FicheConteneur

## Description
This class manages container (Conteneur) operations in the application. It handles:
- Container creation and modification
- Container hierarchy management
- Container type configuration
- Platform-specific actions
- Incident tracking
- Service integration
- UI state management
- Form validation and constraints
- Modal interactions

## Methods

- **`doAfterCompose(Component comp)`**: Performs initialization after component composition, setting variables and loading data.

- **`setObject(TKdataObject c)`**: Sets the container object, initializes incidents, retrieves banques, and updates platform actions.

- **`updateButtonActionsWithPlateformeOrigine()`**: Updates button actions based on container platform and user rights.

- **`setNewObject()`**: Creates and initializes a new Conteneur object.

- **`cloneObject()`**: Creates a clone of the current container object.

- **`getObject()`**: Retrieves the current container object.

- **`getParentObject()`**: Retrieves the parent object of the current container.

- **`setParentObject(TKdataObject obj)`**: Sets the parent object for the current container.

- **`getObjectTabController()`**: Retrieves the associated tab controller.

- **`switchToCreateMode()`**: Switches UI to creation mode, initializing components and loading data.

- **`switchToStaticMode()`**: Switches UI to static mode, updating component visibility.

- **`switchToEditMode()`**: Switches UI to edit mode, initializing components and loading data.

- **`setFocusOnElement()`**: Sets focus on a specified element.

- **`clearData()`**: Clears all form data.

- **`createNewObject()`**: Creates new container object with entered data and hierarchy.

- **`onClick$printPlan()`**: Handles print plan button click.

- **`onClick$addNewC()`**: Handles add new container button click.

- **`onClick$cancelC()`**: Handles cancel button click.

- **`onClick$createC()`**: Handles create button click.

- **`onClick$editC()`**: Handles edit button click.

- **`onClick$revertC()`**: Handles revert button click.

- **`onClick$validateC()`**: Handles validate button click.

- **`onClick$createEnceintesButton()`**: Creates container enclosures hierarchy.

- **`removeObject()`**: Removes container using manager.

- **`onClick$serviceAideSaisie()`**: Opens service selection modal.

- **`onGetObjectFromSelection()`**: Handles service selection from CollaborationsController.

- **`onClick$addIncidentItem()`**: Opens new incident window.

- **`onBlur$codeBox()`**: Formats code box input on blur.

- **`setFieldsToUpperCase()`**: Converts container code to uppercase.

- **`getListBox(Event event)`**: Retrieves Listbox component from event.

- **`getCalendarbox(Event event)`**: Retrieves CalendarBox component from event.

- **`onLaterCreate()`**: Handles post-creation tasks asynchronously.

- **`onLaterUpdate()`**: Handles post-update tasks asynchronously.

- **`onLaterDelete()`**: Handles post-deletion tasks asynchronously.

- **`initEditableMode()`**: Initializes editable mode with dropdown data.

- **`initCreateMode()`**: Initializes create mode with container types and settings.

- **`clearConstraints()`**: Clears form validation constraints.

- **`drawActionsForConteneur()`**: Updates action button visibility based on container state.

- **`onClick$numerotation()`**: Opens numerotation change modal. 