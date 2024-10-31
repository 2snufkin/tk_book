# ListeEchantillon extends AbstractListeController2


## Description

Java class responsible for displaying a list of objects (Echantillon) and refreshing it based on user interactions.

## Methods

### `doAfterCompose(final Component comp)`

This method is called after composing the component (UI) and initializing it. It sets up the list objects renderer, draws the columns for visible ChampEntites, and sets the sorting behavior for certain columns.

### `drawColumnsForVisibleChampEntites()`

This protected method is responsible for dynamically drawing the columns for visible ChampEntites. It is overridden in the Gatsbi version 2.3.0. The method handles the rendering of specific properties and might throw exceptions if unexpected errors occur during the process.

### `setListObjectsRenderer(final TKSelectObjectRenderer<? extends TKdataObject> listObjectsRenderer)`

This method sets the list objects renderer for the Echantillon objects. It is used to customize the rendering of Echantillon objects in the list.

### `getListObjects()`

This method returns the list of Echantillon objects currently displayed in the list.

### `setListObjects(final List<? extends TKdataObject> objs)`

This method sets the list of Echantillon objects to be displayed in the list. It clears the previous selection and adds the new objects to the list.

### `addToListObjects(final TKdataObject obj, final Integer pos)`

This method adds an Echantillon object to the list at the specified position (if provided). If the position is null, the object is added to the end of the list.

### `removeObjectFromList(final TKdataObject obj)`

This method removes an Echantillon object from the list.

### `getSelectedObjects()`

This method returns the list of currently selected Echantillon objects from the list.

### `setSelectedObjects(final List<? extends TKdataObject> objs)`

This method sets the list of selected Echantillon objects in the list.

### `addToSelectedObjects(final TKdataObject obj)`

This method adds an Echantillon object to the list of selected objects.

### `removeFromSelectedObjects(final TKdataObject obj)`

This method removes an Echantillon object from the list of selected objects.

### `getListObjectsRenderer()`

This method returns the list objects renderer used for rendering Echantillon objects in the list.

### `getObjectTabController()`

This method returns the AbstractObjectTabController associated with the list.

### `passSelectedToList()`

This method passes the selected Echantillon objects to the main list, clearing the existing list and adding the selected objects to it.

### `passListToSelected()`

This method passes the Echantillon objects in the main list to the selected objects list, clearing the selected objects and adding the main list objects to it.

### `initObjectsBox()`

This method initializes the list of Echantillon objects to be displayed in the list. It retrieves the objects from the EchantillonManager and sets them as the list objects. It also sets the current row and current object to null and updates the model of the objectsListGrid component.

### `disableObjetsSelectionItems(final boolean disable)`

This method disables or enables certain items in the object selection menu based on the provided boolean value. It checks various conditions to determine whether each item should be disabled.

### `hasAnySelectedInStock()`

This private method checks if any selected Echantillon objects have associated stock locations (Emplacement).

### `onFocus$codeBoxEchan()`

This method is called after the codeBoxEchan component gains focus. It automatically selects the corresponding radiobutton (codeEchan).

### `onFocus$patientBoxEchan()`

This method is called after the patientBoxEchan component gains focus. It automatically selects the corresponding radiobutton (patientEchantillon).

### `onBlur$codeBoxEchan()`

This method is called after the user finishes typing in the codeBoxEchan component. It converts the entered value to uppercase.

### `onBlur$patientBoxEchan()`

This method is called after the user finishes typing in the patientBoxEchan component. It converts the entered value to uppercase.

### `extractLastObjectsCreated()`

This method extracts the last Echantillon objects created from the EchantillonManager and returns them as a list.

### `doFindObjects()`

This method performs a search for Echantillon objects based on the selected search criteria (dateCreation, codeEchan, patientEchantillon). It returns a list of Echantillon object IDs that match the search criteria.

### `extractObjectsFromIds(final List<Integer> ids)`

This method extracts Echantillon objects from the provided list of object IDs.

### `onClick$findByListCodesEchan()`

This method is called when the user clicks the "findByListCodesEchan" button. It retrieves a list of Echantillon codes from an uploaded Excel file and displays the corresponding Echantillon objects.


### `displayTKObjectsFromCodes(final List<String> codes, final ScanTerminale sT)`

This method displays Echantillon objects in the list based on a list of Echantillon codes. The codes can be obtained from an Excel file or a full-rack barcode 2D scan. If the method is called with a `ScanTerminale` parameter (`sT`), it shows a notification indicating the scan information and the number of Echantillon objects found.

### `onClick$findByListPatientsEchan()`

This method is called when the user clicks the "findByListPatientsEchan" button. It retrieves a list of patient names or NIPs (National Identification Number) from an uploaded Excel file and searches for corresponding Echantillon objects.

### `findEchantillonByPatientCodes(List<String> pats)`

This method is meant to be overridden in the GATSBI version. It performs a search for Echantillon objects based on a list of patient codes (names or NIPs) and returns a list of Echantillon object IDs that match the search criteria.

### `searchEchantillonByPatientInfos(String search)`

This method is meant to be overridden in the GATSBI version. It searches for Echantillon objects based on patient information (name) and returns a list of Echantillon object IDs that match the search criteria.

### `onClick$newCessionItem()`

This method is called when the user clicks the "newCessionItem" menu button. It opens the CessionController in create mode, passing the selected Echantillon objects to create a new Cession.

### `onClick$stockageItem()`

This method is called when the user clicks the "stockageItem" menu button. It opens the StockageController in stock mode, allowing the user to send the selected Echantillon objects to the storage module.

### `onClick$select()`, `onClick$cancelSelection()`

These methods override the corresponding methods in the superclass and perform additional actions when the selection or cancel selection is triggered. Specifically, they open the CessionController when the selection is made or canceled.

### `onClick$findMore()`

This method is called when the user clicks the "findMore" button to open the advanced search page for Echantillon objects.

### `onClick$findINCa()`, `onClick$findBiocap()`

These methods are called when the user clicks the "findINCa" or "findBiocap" buttons to open the advanced search pages for INCa and Biocap, respectively.

### `onGetObjectFromResearchINCa(final Event e)`

This method is called when the FicheRechercheINCa window returns the search results. If Echantillon objects are found, they are displayed in the list.

### `applyDroitsOnListe()`

This method applies permissions (droits) to the elements displayed in the list. It enables or disables certain buttons and features based on the user's permissions. It also sets visibility for specific export options based on available catalogues.

### `isCanCession()`, `isCanStockage()`

These methods return the current permission status for creating Cessions (`canCession`) and performing stockage actions (`canStockage`).

### `setCanCession(final boolean can)`, `setCanStockage(final boolean can)`

These methods set the permission status for creating Cessions (`canCession`) and performing stockage actions (`canStockage`).

### `clearSelection()`

This method clears the selection of Echantillon objects in the list and disables certain menu buttons related to selected objects.

### `getComparatorDerivesAsc()`, `getComparatorDerivesDesc()`, `getComparatorCessionsAsc()`, `getComparatorCessionsDesc()`

These methods return the comparators used for sorting Echantillon objects based on the number of derived objects or cessions.

### `setComparatorDerivesAsc(final EchantillonsNbDerivesComparator c)`, `setComparatorDerivesDesc(final EchantillonsNbDerivesComparator c)`, `setComparatorCessionsAsc(final EchantillonsNbCessionsComparator c)`, `setComparatorCessionsDesc(final EchantillonsNbCessionsComparator c)`

These methods set the comparators used for sorting Echantillon objects based on the number of derived objects or cessions.

### `onDoExportTVGSO(final boolean csv)`, `onDoExportINCa()`, `onDoExportBIOCAP()`, `onDoExportBIOBANQUES()`

These methods handle the export of Echantillon objects to various catalogues, such as TVGSO, INCa, and Biocap. The `csv` parameter determines whether the export is in CSV format.

### `onClick$exportItemTVGSO()`, `onClick$exportItemTVGSOcsv()`, `onClick$exportItemINCa()`, `onClick$exportItemBIOCAP()`, `onClick$exportItemBIOBANQUES()`

These methods are called when the user clicks on the respective export menu buttons. They trigger the export process for the corresponding catalogue.

### `onLaterExportCatalogue(final boolean fromSelection, final short catalogue, final boolean csv, final Map<String, ?> params)`

This method is used to perform the export process either from a selection of Echantillon objects or from an empty search. The `fromSelection` parameter indicates whether the export is from a selection, and the `catalogue` parameter specifies the type of catalogue to export (e.g., TVGSO, INCa, Biocap, etc.). The `csv` parameter determines whether the export is in CSV format. The `params` parameter allows additional parameters to be passed for export.

### `batchDelete(final List<Integer> ids, final String comment)`

This method handles batch deletion of Echantillon objects with the provided list of object IDs (`ids`) and a deletion comment (`comment`). It is used to remove multiple Echantillon objects from the list.

### `switchToSelectMode()`

This method is called to switch the list to

 select mode, enabling the selection of Echantillon objects.

