## AbstractListeController2 Class

Responsible for managing the display and interaction of lists. Extending the `AbstractController` class, this abstract class encapsulates a range of functionalities required for effective list management. The class includes methods for selecting, deseleting, and manipulating list items, handling date-based filtering, and enabling/disabling toolbar buttons. It also facilitates the transition between different display modes and the execution of actions on selected objects.

### Method Descriptions

## `getCurrentObject()`: Retrieves the currently selected data object.
## `setCurrentObject(final TKdataObject o)`: Sets the currently selected data object.
## `getCurrentRow()`: Retrieves the currently selected row in the list.
## `setCurrentRow(final Row cRow)`: Sets the currently selected row.
## `getSearchDateCreation()`: Computes the reference date for filtering objects based on their creation date.
## `setSearchDateCreation(final Calendar search)`: Sets the search date for object filtering.
## `getSelectedDate()`: Retrieves the selected date for filtering.
## `setSelectedDate(final String selected)`: Sets the selected date for filtering.
## `getObjectsListGrid()`: Obtains the Grid component responsible for displaying objects.
## `doAfterCompose(final Component comp)`: Executes actions after component composition, initializing various components and settings.
## `switchToListMode()`: Transitions the component to list display mode, enabling relevant UI elements.
## `switchToSelectMode()`: Transitions the component to selection mode, adapting UI elements accordingly.
## `disableToolBar(final boolean b)`: Enables or disables toolbar buttons based on a given boolean value.
## `getCreationDates()`: Retrieves an array of default creation date filter options.
## `getPageNumberForObject(final Object obj)`: Determines the page number containing a specific object.
## `changeCurrentObject(final TKdataObject newCurrent)`: Updates the currently selected object.
## `deselectRow()`: Clears the selection of the currently highlighted row and object.
## `selectRow(final Row row, final TKdataObject obj)`: Highlights a specific row and its corresponding object.
## `onCheck$checkAll()`: Handles the event triggered by the "check all" checkbox, managing element selection.
## `clearSelection()`: Clears the selection of all objects in the list.
## `checkOrNotAllElements(final boolean check)`: Sets the selection status of checkboxes for all elements in the list.



## `onCheckObject(final ForwardEvent event)`: Handles the checkbox selection event for an object. Responds to the event triggered by clicking on a checkbox associated with an object. It updates the selected objects based on the checkbox's state and manages the enabling/disabling of associated actions.

## `disableObjetsSelectionItems(final boolean disable)`: Enables or disables multiple selection manipulation components. Activates or deactivates various UI elements involved in multiple object selection based on user rights and the number of selected objects.

## `onClickObject(final Event event)`: Handles the click event on an object's clickable label. Processes the click event triggered by clicking on a clickable label associated with an object. It selects the corresponding row and displays the object's content, allowing the user to interact with it.

## `selectRowAndDisplayObject(final Row row, final TKdataObject obj)`: Selects a row and displays the content of a selected object. Highlights the specified row in the list and displays the content of the provided object. This method is responsible for transitioning the user to view mode for the selected object.

## `selectFirstObjet()`: Selects the first object in the list by default. Chooses the first object in the list and displays its content. This method ensures that the user has a default object to interact with upon entering the list view.

## `selectlastRow(final TKdataObject obj)`: Selects the row corresponding to the provided object. Highlights the row associated with the given object in the list, ensuring the selected object is visible and its content can be displayed.

## `onClick$addNew(final Event event)`: Switches to the creation form for a new object. Handles the click event on the "Add New" button, initiating the transition to the creation form for a new object. This method is responsible for facilitating the creation of new objects.

## `onPressEnterKey()`: Handles the Enter key press event on the search form elements. Listens for the Enter key press event and triggers a search based on the search form's current criteria. This method provides a convenient way for users to initiate a search.

## `onSelect$dateCreationBox()`: Handles the selection of the dateCreationBoxPatient field. Automatically selects the corresponding radio button when the user interacts with the dateCreationBoxPatient field. This method ensures the radio button selection reflects the user's input.

## `onClick$find()`: Initiates a search for objects to display. Responds to the click event on the "Find" button, initiating a search for objects based on the specified criteria. This method retrieves and displays the search results or provides appropriate feedback if no results are found.


## `showResultsAfterSearchByList(final List<Integer> res)`: Handles the display of search results obtained based on a list of criteria. Displays the search results obtained from a list of object IDs. This method manages the display of search results, taking into account the number of results and the user's interaction.

## `onShowResults()`: Handles the display of search results in the list view. Manages the display of search results within the list view. This method updates the list with the specified results and ensures that the user is in the correct viewing mode.

## `onDoNewCession()`: Handles the event of initiating a new session due to a large number of results. Responds to the event triggered from the ResultatsModale component, signaling the need to create a new session for managing a large number of results.

## `onLaterNewCession()`: Initiates a new session for managing results after a delay. Sets up a new session for managing results after a slight delay. This method is used in conjunction with `onDoNewCession()`.

## `onGetObjectFromResearch(final Event e)`: Handles the retrieval of objects from advanced research. Responds to the event triggered by the FicheRechercheAvancee component, which provides results from advanced research. This method updates the list with the retrieved objects and ensures the user is in the correct viewing mode.

## `onClick$exportItem()`: Initiates the export process. Handles the click event on the "exportItem" button, initiating the export process. This method starts the export process, which might involve further user interactions.

## `onClick$exportItemAdv()`: Initiates advanced export. Handles the click event on the "exportItemAdv" button, initiating advanced export. This method opens a modal window to configure the export settings.

## `askForNonAnonymizationStatut()`: Asks for confirmation or denial of non-anonymization status. Prompts the user with a message box to confirm or deny non-anonymization status for exported data. Returns the selected export profile.

## `onDoExport(final Event e)`: Initiates various export processes based on the event data. Responds to different export-related events, initiating the corresponding export processes based on the event data. This method handles different export scenarios.

## `onDoExportTVGSO(final boolean csv)`: Initiates the export process for TVGSO data. Handles the export process for TVGSO data, allowing the user to choose between different export formats.

## `onDoExportINCa()`, `onDoExportBIOCAP()`, `onDoExportBIOBANQUES()`: Handle specific export processes for different scenarios. These methods handle the export process for specific use cases or data sources.

## `onLaterExport(final boolean fromSelection)`: Initiates the export process after a delay. Handles the export process for a large number of results after a slight delay. This method is responsible for setting up the export parameters and starting the export thread.

## `addToObjectList(final Object newObj)`: Adds a new object to the list and selects it. Handles the addition of a new object to the list and selects it for display. This method updates the list, ensuring the newly added object is visible and selected.

## `addListToObjectList(final List<Object> newObjs)`: Adds a list of objects to the list and selects the first one. Handles the addition of a list of objects to the list and selects the first object for display. This method updates the list and ensures the selected object is visible.

## `removeObjectAndUpdateList(final TKdataObject obj)`: Removes an object from the list and updates the display. Handles the removal of an object from the list and updates the list's display. This method ensures the list is updated and reflects the removal of the object.

## `refreshListe()`, `refreshListe2()`: Refreshes the list display. These methods update the list's display, refreshing the content based on the current state.

## `updateListContent(final List<? extends TKdataObject> objs)`: Updates the list content with the provided objects. Handles the update of the list's content with the specified objects. This method ensures the list is updated and reflects the new content.

## `updateMultiObjectsGridListInPlace(final List<? extends TKdataObject> objs)`: Updates multiple objects in the list in place. Handles the update of multiple objects in the list without changing their positions. This method ensures the list reflects the updated objects.

## `updateObjectGridList(final Object obj)`: Updates a single object in the list. Handles the update of a single object in the list, ensuring the list reflects the changes. This method ensures the updated object remains selected.

## `updateObjectGridListFromOtherPage(final Object obj, final boolean select)`: Updates an object in the list after an update from another page. Handles the update of an object in the list after changes from another page. This method ensures the updated object remains selected if needed.

## `updateMultiObjectsGridListFromOtherPage(final List<TKdataObject> objects)`: Updates multiple objects in the list after changes from another page. Handles the update of multiple objects in the list after changes from another page. This method ensures the list reflects the updated objects.

Sure, here's the markdown representation of the methods with the method signature and description in the same line:


## ## updateGridListChildrenObjectsFromOtherPage(objects: List<? extends TKdataObject>, isDelete: boolean): TKdataObject

Updates the list with a list of objects following the modification of the parent of these objects.

## ## updateGridByIds(objectIds: List<Integer>, isDelete: boolean, updateListeComposant: boolean)

Updates the list with a list of objects following the modification of the parent of these objects.

## ## clearList()

Clears the content of the list.

## ## onSelectFromResultatModale()

Called when selecting items from the modal result.

## ## onNewCessionFromResultatModale()

Called when creating a new cession from the modal result.

## ## onDoBatchDelete()

Receives the event when the batch delete operation is triggered.

## ## onClick$select()

Called when the select button is clicked.

## ## onClick$cancelSelection()

Called when the cancel selection button is clicked.

## ## onClick$modificationItem()

Called when the modification button is clicked for multiple items.

## ## getEntiteNom(): String

Returns the name of the entity associated with the list.

## Abstract Methods (To be implemented in subclasses)

## getListObjects(): List<? extends TKdataObject>
## setListObjects(objs: List<? extends TKdataObject>)
## addToListObjects(obj: TKdataObject, pos: Integer)
## removeObjectFromList(obj: TKdataObject)
## getSelectedObjects(): List<? extends Object>
## setSelectedObjects(objs: List<? extends TKdataObject>)
## addToSelectedObjects(obj: TKdataObject)
## removeFromSelectedObjects(obj: TKdataObject)
## getListObjectsRenderer(): TKSelectObjectRenderer<? extends TKdataObject>
## passSelectedToList()
## passListToSelected()
## initObjectsBox()
## doFindObjects(): List<Integer>
## extractObjectsFromIds(ids: List<Integer>): List<? extends TKdataObject>
## extractLastObjectsCreated(): List<? extends TKdataObject>

## Static Methods

## getBindingData(event: ForwardEvent, getTarget: boolean): Object
## getRow(event: ForwardEvent): Row

## Droits (Permissions) Methods

## isCanNew(): boolean
## setCanNew(cNew: boolean)
## isAdmin(): boolean
## setAdmin(i: boolean)
## isCanModifMultiple(): boolean
## setCanModifMultiple(can: boolean)
## isCanExport(): boolean
## setCanExport(can: boolean)
## isCanEtiquette(): boolean
## setCanEtiquette(canE: boolean)
## isCanDelete(): boolean
## setCanDelete(cDelete: boolean)
## applyDroitsOnListe()

## Others

## openRechercheAvanceeWindow(page: Page, title: String, entiteToSearch: Entite, p: String, anonyme: boolean, listecontroller: AbstractListeController2)

## private static HtmlMacroComponent populateRechercheAvanceeModal(...)

This method is responsible for populating and initializing a modal window for advanced search. The behavior varies based on the entiteToSearch parameter, which determines which type of entity is being searched (e.g., "Patient," "Prelevement," etc.). The method performs the following steps:

    Determine the appropriate page definition and window definition based on the context and entity.
    Instantiate the ua variable as an HtmlMacroComponent and apply properties to it.
    Initialize the FicheRechercheAvancee component within the ua component, passing relevant parameters.
    Return the ua component.

## public void openRechercheAvanceeCessionWindow(...)

This method opens a modal window for advanced search related to a "Cession" entity. It sets up the window properties, creates an HtmlMacroComponent for the search component, and initializes it. The method includes the following steps:

    Prepare the window and set its properties (maximizable, sizable, title, etc.).
    Instantiate the ua component using populateRechercheAvanceeCessionModal method.
    Configure event listeners to show the component after a timer delay.
    Display the modal window using win.doModal().

## public HtmlMacroComponent populateRechercheAvanceeCessionModal(...)

This method is responsible for populating and initializing the search component for "Cession" entities within a modal window. It creates an HtmlMacroComponent, sets its properties, and initializes the FicheRechercheAvanceeCession component within it.
## public void openRechercheINCaWindow(...)

This method opens a modal window for advanced search using INCa items. It performs similar steps to the openRechercheAvanceeCessionWindow method, including setting up window properties, instantiating an HtmlMacroComponent, and displaying the modal window.
## private static HtmlMacroComponent populateRechercheINCa(...)

This method is responsible for populating and initializing the search component for INCa items within a modal window. It creates an HtmlMacroComponent, sets its properties, and initializes the FicheRechercheINCa component within it.
## public void openExportWindow(...)

This method opens a modal window for exporting data. It prepares the window properties, creates an HtmlMacroComponent for the export component, and initializes it. The method is triggered by clicking an export-related button.
## public List<Integer> getResultatsIds()

This method returns a list of result IDs.
## public void setResultatsIds(...)

This method sets the result IDs based on the provided list.
## public List<Integer> getRestrictedTableIds()

This method returns a list of restricted table IDs.
## public void setRestrictedTableIds(...)

This method sets the list of restricted table IDs.
## public Menuitem getExportItemAdv()

This method returns an instance of Menuitem representing an export option.
## public void switchToEditMode(...)

This method toggles the edit mode for the UI, enabling or disabling toolbar components based on the provided boolean parameter.
## public List<String> getListStringToSearch()

This method reads and extracts a list of strings from an uploaded file, typically used for advanced searching. It utilizes the Fileupload class to manage file uploads and extraction.
## public void openRechercheAvanceeCessionWindow(...)

This method is triggered when the user clicks on the "Search" button in the UI. It opens the advanced search modal for "Cession" entities.
## public boolean areAllObjectsStocked()

This method checks whether all selected objects are in the "STOCKE" state, making the "Stocker" button clickable.
## public void onClick$retourItem()

This method is called when the user clicks on the "Retour" button. It triggers the opening of a form modal for recording return events.
## public void callResultatsModale(...)

This method is used to open a modal window to display search results. It takes a list of result IDs and passes them to the result modale.

## onClick$etiquetteItem(): This method is triggered when the "etiquetteItem" element is clicked. It retrieves a list of "AffectationImprimante" objects and opens a modal window to print labels for selected "TKStockableObject" objects.

## onDeleteIdsFromModaleEvent(): This method is triggered when an event is raised to delete selected objects. It clears the list of result IDs and opens a delete window for confirmation.

## onClick$deleteItem(): This method is triggered when the "deleteItem" element is clicked. It shows a confirmation message to delete multiple selected objects. If confirmed, it triggers the batch delete process.

## onDeleteTriggered(): This method is called when a delete event is triggered. It displays a busy indicator and schedules the batch deletion process.

## onLaterBatchDelete(): This method performs the batch delete process for selected objects. It updates various references after deletion.

## areAllObjectsStocked(): This method checks if all selected objects are in a "STOCKE" status, returning true if they are.

## areAllObjectsNonCessibles(): This method checks if all selected objects are non-cessible based on their status and placement.
## isTKStockableObjectCessible(): A private method to check if a specific TKStockableObject is accessible based on its status and container.

## onClick$retourItem(): This method is triggered when the "retourItem" element is clicked. It opens a modal window to record return events for selected objects.

## isTtesCollection(): Returns true if multiple collections are selected.

## onClickObjectEmplacement(): Overrides a method to handle click events on object placements.

## onClick$incompRetoursItem(): This method is triggered when the "incompRetoursItem" element is clicked. It opens a modal window to complete incomplete return events.

## callResultatsModale(): Calls the result modal to display results for specific IDs.

## Methods for handling click events on different types of objects (onClick$patientsItem, onClick$prelevementsItem, etc.) to perform actions based on the selected objects.