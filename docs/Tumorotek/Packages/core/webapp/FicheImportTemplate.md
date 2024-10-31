# FicheImportTemplate
This class manages the import template functionality in the application. It handles the creation, editing, and management of import templates that define how external data should be imported into the system. It provides features for:
- Creating and editing import templates
- Managing import columns and their configurations
- Handling file imports using these templates
- Managing associated entities and their relationships
- Tracking import history
- Supporting subderive (sub-product) template management
- Providing user interface controls for template manipulation
- Validating and processing import data

- **`doAfterCompose(Component comp)`**: This method is called after composing the controller and initializing the associated component. It sets various properties and initializes lists of components.

- **`setObject(TKdataObject obj)`**: Sets the object for the controller. It initializes lists and variables related to the import template and its associated entities.

- **`cloneObject()`**: Creates a clone of the import template object.

- **`getObject()`**: Retrieves the import template object.

- **`getParentObject()`**: Retrieves the parent object. In this case, it always returns null.

- **`setParentObject(TKdataObject obj)`**: Sets the parent object. In this case, it does nothing.

- **`getObjectTabController()`**: Retrieves the object tab controller associated with the import template object.

- **`setNewObject()`**: Sets a new import template object with default values and initializes lists and variables related to it.

- **`switchToStaticMode()`**: Switches the controller to static mode, disabling certain components and setting labels based on the current state of the import template.

- **`disableToolBar(boolean b)`**: Disables or enables the toolbar based on the provided boolean value. It also manages the visibility of the "Add New Subderive" button.

- **`switchToCreateMode()`**: Switches the controller to create mode, preparing the UI for creating a new import template.

- **`switchToEditMode()`**: Switches the controller to edit mode, allowing modifications to the import template.

- **`getDeleteWaitLabel()`**: Retrieves the label to display when waiting for a deletion operation to complete.

- **`onClick$addNewC()`**: Handles the click event for the "Add New" button, switching to create mode.

- **`onClick$editC()`**: Handles the click event for the "Edit" button, switching to edit mode based on the type of import template (regular or subderive).

- **`onClick$cancelC()`**: Handles the click event for the "cancel" button. It sets a boolean flag isSubderive to false and clears the data.

- **`onClick$revertC()`**: Handles the click event for the "revert" button. It clears the constraints and calls the superclass's onClick$revertC() method.

- **`clearData()`**: Clears the data by clearing various data structures and calling clearConstraints(). It also calls the superclass's clearData() method.

- **`onClick$createC()`**: Handles the click event for the "create" button. It shows a busy message, echoes an "onLaterCreate" event, and performs some object manipulation tasks.

- **`onClick$copyAllFields()`**: Handles the click event for the "copyAllFields" button. It logs information and performs some field copying tasks.

- **`onLaterCreate()`**: Performs tasks after the "create" button click event. It creates a new object, clones it, sets the object, switches to static mode, and disables the toolbar.

- **`createNewObject()`**: Creates a new object by updating the import template with data from various sources. It sets the order for import columns and calls the manager's createObjectManager() method to update the object.

- **`onClick$validateC()`**: Handles the click event for the "validate" button. It shows a busy message and echoes an "onLaterUpdate" event.

- **`onLaterUpdate()`**: Performs tasks after the "validate" button click event. It updates the object, clones it, sets the object, and switches to static mode.

- **`updateObject()`**: Updates the object by extracting data from the import template and associated entities. It sets the order for import columns and calls the manager's updateObjectManager() method.

- **`prepareDeleteObject()`**: Prepares the object for deletion by setting a deletion message.

- **`removeObject()`**: Removes the object by calling the manager's removeObjectManager() method.

- **`setEmptyToNulls()`**: Sets empty values to null for specific fields in the import template.

- **`setFieldsToUpperCase()`**: Converts field values to uppercase.

- **`setFocusOnElement()`**: Sets the focus on the "nomBox" component.

- **`getListeImportTemplate()`**: Retrieves the controller of the associated list component from the event.

- **`onGetAddedObject()`**: Handles the event when an object is added. It adds the object to the associated list, retrieves required fields, and decorates import columns.

- **`onGetRemovedObject()`**: Handles the event when an object is removed. It removes the object from the associated list, retrieves required fields, and updates components.

- **`onClick$upChamp()`**: Moves a field up in the list by calling the upObject method, reloading the model, and scrolling the view.

- **`onClick$downChamp()`**: Moves a field down in the list by calling the upObject method with the next field in the list.

- **`upObject()`**: Performs the actual movement of objects within the list by swapping positions in the importColonnesDecorator list.

- **`drawActionsForImport()`**: Determines whether the action buttons should be clickable based on the user's admin privileges.

- **`initEditableMode()`**: Prepares the form by populating choice lists and components based on the ImportTemplate object.

- **`onClick$addChamp()`**: Adds a new field to the list by creating an ImportColonne object and updating the model.

- **`onClick$deleteChamp()`**: Prompts for confirmation and removes a field from the list, including associated ImportColonne object if it exists.

- **`onOpen$groupHistorique()`**: Retrieves the import history records for the importTemplate and updates the historiquesGrid component.

- **`clearConstraints()`**: Clears all error messages related to constraints in the form.

- **`onSelect$entitesBox()`**: Retrieves and decorates nullable fields based on the selected entity.

- **`getAndDecorateNullableChampForEntite()`**: Collects nullable fields that can be added to an import and updates the model.

- **`onSelect$champsBox()`**: Updates the selected field based on the user's selection.

- **`onClickNbPatients()`**: Retrieves the imported patients and updates the patient list in another controller.

- **`onLaterAffichagePatients()`**: Handles the delayed execution of patient display and updates the patient list.

- **`onClickNbPrelevements()`**: Retrieves the imported prelevements and updates the prelevement list.

- **`onLaterAffichagePrelevements()`**: Displays the prelevements in the interface and updates the PrelevementController.

- **`onClickNbEchantillons(Event event)`**: Triggers the display of the echantillons.

- **`onLaterAffichageEchantillons()`**: Updates the list of echantillons in the EchantillonController.

- **`onClickNbDerives(Event event)`**: Triggers the display of the prodDerives.

- **`onLaterAffichageProdDerives()`**: Updates the list of prodDerives in the ProdDeriveController.

- **`onClick$importer()`**: Handles file selection and data import using WorkbookFactory.

- **`onLaterImport(Event e)`**: Handles the import of data and updates the user interface accordingly.

- **`onClick$exporterHeader()`**: Creates and exports a workbook with imported header columns.

- **`onOpen$groupEntites()`**: Updates the associated entities import component.

- **`onClick$addNewSubderiveC()`**: Triggers the creation of a new subderive.

- **`onLaterAddNewSubderive()`**: Handles the creation of a new subderive.

- **`switchToCreateModeSubderive()`**: Switches to create mode for subderives.

- **`switchToEditModeSubderive()`**: Switches to edit mode for subderives.

- **`makeSubderiveHeaderCols(ImportTemplate it)`**: Creates a list of header columns for subderives.

- **`getEntiteRenderer()`**: Provides the renderer for entities in a list box.

- **`getColonnesRenderer()`**: Provides the colonnesRenderer attribute.

- **`setColonnesRenderer(ImportColonneRowRenderer cRenderer)`**: Sets the colonnesRenderer attribute.

- **`getNomConstraint()`**: Provides the nom constraint from ImportConstraints.

- **`getDescriptionConstraint()`**: Provides the description constraint from ImportConstraints.

- **`getEntitesAssociees()`**: Provides the list of associated entities.

- **`setEntitesAssociees(List<EntiteDecorator> e)`**: Sets the list of associated entities.

- **`getEntitesAssocieesImport()`**: Provides the EntitesAssocieesImport instance.

- **`getImportColonnesDecorator()`**: Provides the list of import column decorators.

- **`setImportColonnesDecorator(List<ImportColonneDecorator> i)`**: Sets the list of import column decorators.

- **`getSelectedEntite()`**: Provides the selected entity.

- **`setSelectedEntite(EntiteDecorator sEntite)`**: Sets the selected entity.

- **`getChamps()`**: Provides the list of import field decorators.

- **`setChamps(List<ImportChampDecorator> c)`**: Sets the list of import field decorators.

- **`getSelectedChamp()`**: Provides the selected field.

- **`setSelectedChamp(ImportChampDecorator selectedC)`**: Sets the selected field.

- **`getImportColonnesToRemove()`**: Provides the list of columns to remove.

- **`setImportColonnesToRemove(List<ImportColonne> iToRemove)`**: Sets the list of columns to remove.

- **`getHistoriques()`**: Provides the list of import histories.

- **`setHistoriques(List<ImportHistorique> h)`**: Sets the list of import histories.

- **`getNbHistorique()`**: Provides the number of histories.

- **`setNbHistorique(Integer nb)`**: Sets the number of histories.

- **`getHistoriquesRenderer()`**: Provides the historiques renderer.

- **`setHistoriquesRenderer(ImportHistoriqueRowRenderer hRenderer)`**: Sets the historiques renderer.

- **`getCurrentEvent()`**: Provides the current event.

- **`setCurrentEvent(Event current)`**: Sets the current event.

- **`getUpdateTemplateLabelVisible()`**: Provides the visibility state of the template label.

- **`getTitle()`**: Provides the title based on the isSubderive attribute. 