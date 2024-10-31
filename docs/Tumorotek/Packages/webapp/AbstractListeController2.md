# AbstractListeController2

## Description
This abstract class manages the display and interaction of lists, extending the `AbstractController` class. It handles list management functionalities including:
- Selection and deselection of items
- Date-based filtering
- Toolbar button management
- Display mode transitions
- Actions on selected objects
- Export operations
- Search functionality
- Batch operations

## Methods

- **`getCurrentObject()`**: Retrieves the currently selected data object.

- **`setCurrentObject(TKdataObject o)`**: Sets the currently selected data object.

- **`getCurrentRow()`**: Retrieves the currently selected row in the list.

- **`setCurrentRow(Row cRow)`**: Sets the currently selected row.

- **`getSearchDateCreation()`**: Computes the reference date for filtering objects based on their creation date.

- **`setSearchDateCreation(Calendar search)`**: Sets the search date for object filtering.

- **`getSelectedDate()`**: Retrieves the selected date for filtering.

- **`setSelectedDate(String selected)`**: Sets the selected date for filtering.

- **`getObjectsListGrid()`**: Obtains the Grid component for displaying objects.

- **`doAfterCompose(Component comp)`**: Executes actions after component composition, initializing components and settings.

- **`switchToListMode()`**: Transitions the component to list display mode.

- **`switchToSelectMode()`**: Transitions the component to selection mode.

- **`disableToolBar(boolean b)`**: Enables or disables toolbar buttons.

- **`getCreationDates()`**: Retrieves default creation date filter options.

- **`getPageNumberForObject(Object obj)`**: Determines the page number containing a specific object.

- **`changeCurrentObject(TKdataObject newCurrent)`**: Updates the currently selected object.

- **`deselectRow()`**: Clears the selection of the currently highlighted row and object.

- **`selectRow(Row row, TKdataObject obj)`**: Highlights a specific row and its corresponding object.

- **`onCheck$checkAll()`**: Handles the "check all" checkbox event.

- **`clearSelection()`**: Clears the selection of all objects in the list.

- **`checkOrNotAllElements(boolean check)`**: Sets the selection status for all elements.

- **`onCheckObject(ForwardEvent event)`**: Handles checkbox selection events for objects.

- **`disableObjetsSelectionItems(boolean disable)`**: Manages multiple selection manipulation components.

- **`onClickObject(Event event)`**: Processes click events on object labels.

- **`selectRowAndDisplayObject(Row row, TKdataObject obj)`**: Selects a row and displays the object's content.

- **`selectFirstObjet()`**: Selects the first object in the list by default.

- **`selectlastRow(TKdataObject obj)`**: Selects the row corresponding to the provided object.

- **`onClick$addNew(Event event)`**: Switches to the creation form for a new object.

- **`onPressEnterKey()`**: Handles Enter key press events in search form elements.

- **`onSelect$dateCreationBox()`**: Manages dateCreationBoxPatient field selection.

- **`onClick$find()`**: Initiates object search based on criteria.

- **`showResultsAfterSearchByList(List<Integer> res)`**: Displays search results from criteria list.

- **`onShowResults()`**: Manages search results display in list view.

- **`onDoNewCession()`**: Handles new session creation for large result sets.

- **`onLaterNewCession()`**: Sets up delayed session for result management.

- **`onGetObjectFromResearch(Event e)`**: Processes advanced research results.

- **`onClick$exportItem()`**: Initiates the export process.

- **`onClick$exportItemAdv()`**: Initiates advanced export configuration.

- **`askForNonAnonymizationStatut()`**: Manages anonymization status for exports.

- **`onDoExport(Event e)`**: Handles various export process types.

- **`onDoExportTVGSO(boolean csv)`**: Manages TVGSO data export.

- **`onDoExportINCa()`**: Handles INCa-specific export process.

- **`onDoExportBIOCAP()`**: Handles BIOCAP-specific export process.

- **`onDoExportBIOBANQUES()`**: Handles BIOBANQUES-specific export process.

- **`onLaterExport(boolean fromSelection)`**: Manages delayed export process.

- **`addToObjectList(Object newObj)`**: Adds and selects a new object in the list.

- **`addListToObjectList(List<Object> newObjs)`**: Adds multiple objects to the list.

- **`removeObjectAndUpdateList(TKdataObject obj)`**: Removes an object and updates the display.

- **`refreshListe()`**: Updates the list display.

- **`refreshListe2()`**: Alternative list refresh method.

- **`updateListContent(List<? extends TKdataObject> objs)`**: Updates list with new objects.

- **`updateMultiObjectsGridListInPlace(List<? extends TKdataObject> objs)`**: Updates multiple objects without position changes.

- **`updateObjectGridList(Object obj)`**: Updates a single object in the list.

- **`updateObjectGridListFromOtherPage(Object obj, boolean select)`**: Updates object after changes from another page.

- **`updateMultiObjectsGridListFromOtherPage(List<TKdataObject> objects)`**: Updates multiple objects from other page changes.

- **`updateGridListChildrenObjectsFromOtherPage(List<? extends TKdataObject> objects, boolean isDelete)`**: Updates child objects after parent modifications.

- **`clearList()`**: Empties the list content.

- **`onSelectFromResultatModale()`**: Handles selection from result modal.

- **`onNewCessionFromResultatModale()`**: Processes new cession from result modal.

- **`onDoBatchDelete()`**: Manages batch delete operations.

- **`onClick$select()`**: Handles select button clicks.

- **`onClick$cancelSelection()`**: Manages selection cancellation.

- **`onClick$modificationItem()`**: Processes multiple item modifications.

- **`getEntiteNom()`**: Provides the entity name for the list.

- **`onClick$etiquetteItem()`**: Manages label printing for selected objects.

- **`onDeleteIdsFromModaleEvent()`**: Handles deletion confirmation from modal.

- **`onClick$deleteItem()`**: Processes multiple object deletion.

- **`areAllObjectsStocked()`**: Checks if all selected objects are stocked.

- **`areAllObjectsNonCessibles()`**: Verifies if selected objects are non-transferable.

- **`onClick$retourItem()`**: Manages return events for objects.

- **`isTtesCollection()`**: Checks for multiple collection selection.

- **`onClickObjectEmplacement()`**: Handles object placement clicks.

- **`onClick$incompRetoursItem()`**: Manages incomplete return events.

- **`callResultatsModale()`**: Displays results in modal window.

## Abstract Methods

- **`getListObjects()`**: Retrieves the list of objects.
- **`setListObjects(List<? extends TKdataObject> objs)`**: Sets the list of objects.
- **`addToListObjects(TKdataObject obj, Integer pos)`**: Adds object at specified position.
- **`removeObjectFromList(TKdataObject obj)`**: Removes object from list.
- **`getSelectedObjects()`**: Gets selected objects.
- **`setSelectedObjects(List<? extends TKdataObject> objs)`**: Sets selected objects.
- **`addToSelectedObjects(TKdataObject obj)`**: Adds to selected objects.
- **`removeFromSelectedObjects(TKdataObject obj)`**: Removes from selected objects.
- **`getListObjectsRenderer()`**: Gets the list renderer.
- **`passSelectedToList()`**: Transfers selected items to list.
- **`passListToSelected()`**: Transfers list items to selected.
- **`initObjectsBox()`**: Initializes objects container.
- **`doFindObjects()`**: Performs object search.
- **`extractObjectsFromIds(List<Integer> ids)`**: Retrieves objects from IDs.
- **`extractLastObjectsCreated()`**: Gets recently created objects.

## Permission Methods

- **`isCanNew()`**: Checks creation permission.
- **`setCanNew(boolean cNew)`**: Sets creation permission.
- **`isAdmin()`**: Checks admin status.
- **`setAdmin(boolean i)`**: Sets admin status.
- **`isCanModifMultiple()`**: Checks multiple modification permission.
- **`setCanModifMultiple(boolean can)`**: Sets multiple modification permission.
- **`isCanExport()`**: Checks export permission.
- **`setCanExport(boolean can)`**: Sets export permission.
- **`isCanEtiquette()`**: Checks label creation permission.
- **`setCanEtiquette(boolean canE)`**: Sets label creation permission.
- **`isCanDelete()`**: Checks deletion permission.
- **`setCanDelete(boolean cDelete)`**: Sets deletion permission.
- **`applyDroitsOnListe()`**: Applies permissions to list.