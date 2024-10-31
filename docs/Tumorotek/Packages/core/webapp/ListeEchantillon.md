# ListeEchantillon extends AbstractListeController2

## Description
Java class responsible for displaying a list of objects (Echantillon) and refreshing it based on user interactions.

## Methods

- **doAfterCompose(final Component comp)**
  Called after composing the component (UI) and initializing it. Sets up the list objects renderer, draws the columns for visible ChampEntites, and sets the sorting behavior for certain columns.

- **drawColumnsForVisibleChampEntites()**
  Protected method responsible for dynamically drawing the columns for visible ChampEntites. Overridden in the Gatsbi version 2.3.0. Handles the rendering of specific properties and might throw exceptions if unexpected errors occur during the process.

- **setListObjectsRenderer(final TKSelectObjectRenderer<? extends TKdataObject> listObjectsRenderer)**
  Sets the list objects renderer for the Echantillon objects. Used to customize the rendering of Echantillon objects in the list.

- **getListObjects()**
  Returns the list of Echantillon objects currently displayed in the list.

- **setListObjects(final List<? extends TKdataObject> objs)**
  Sets the list of Echantillon objects to be displayed in the list. Clears the previous selection and adds the new objects to the list.

- **addToListObjects(final TKdataObject obj, final Integer pos)**
  Adds an Echantillon object to the list at the specified position (if provided). If the position is null, the object is added to the end of the list.

- **removeObjectFromList(final TKdataObject obj)**
  Removes an Echantillon object from the list.

- **getSelectedObjects()**
  Returns the list of currently selected Echantillon objects from the list.

- **setSelectedObjects(final List<? extends TKdataObject> objs)**
  Sets the list of selected Echantillon objects in the list.

- **addToSelectedObjects(final TKdataObject obj)**
  Adds an Echantillon object to the list of selected objects.

- **removeFromSelectedObjects(final TKdataObject obj)**
  Removes an Echantillon object from the list of selected objects.

- **getListObjectsRenderer()**
  Returns the list objects renderer used for rendering Echantillon objects in the list.

- **getObjectTabController()**
  Returns the AbstractObjectTabController associated with the list.

- **passSelectedToList()**
  Passes the selected Echantillon objects to the main list, clearing the existing list and adding the selected objects to it.

- **passListToSelected()**
  Passes the Echantillon objects in the main list to the selected objects list, clearing the selected objects and adding the main list objects to it.

- **initObjectsBox()**
  Initializes the list of Echantillon objects to be displayed in the list. Retrieves the objects from the EchantillonManager and sets them as the list objects.

- **disableObjetsSelectionItems(final boolean disable)**
  Disables or enables certain items in the object selection menu based on the provided boolean value.

- **hasAnySelectedInStock()**
  Private method checking if any selected Echantillon objects have associated stock locations (Emplacement).

- **onFocus$codeBoxEchan()**
  Automatically selects the corresponding radiobutton (codeEchan) when codeBoxEchan gains focus.

- **onFocus$patientBoxEchan()**
  Automatically selects the corresponding radiobutton (patientEchantillon) when patientBoxEchan gains focus.

- **onBlur$codeBoxEchan()**
  Converts the entered value to uppercase when user finishes typing in codeBoxEchan.

- **onBlur$patientBoxEchan()**
  Converts the entered value to uppercase when user finishes typing in patientBoxEchan.

- **extractLastObjectsCreated()**
  Extracts the last Echantillon objects created from the EchantillonManager and returns them as a list.

- **doFindObjects()**
  Performs a search for Echantillon objects based on the selected search criteria.

- **extractObjectsFromIds(final List<Integer> ids)**
  Extracts Echantillon objects from the provided list of object IDs.

- **onClick$findByListCodesEchan()**
  Retrieves a list of Echantillon codes from an uploaded Excel file.

- **displayTKObjectsFromCodes(final List<String> codes, final ScanTerminale sT)**
  Displays Echantillon objects in the list based on a list of Echantillon codes.

- **onClick$findByListPatientsEchan()**
  Retrieves a list of patient names or NIPs from an uploaded Excel file and searches for corresponding Echantillon objects.

- **findEchantillonByPatientCodes(List<String> pats)**
  Performs a search for Echantillon objects based on a list of patient codes. Meant to be overridden in GATSBI version.

- **searchEchantillonByPatientInfos(String search)**
  Searches for Echantillon objects based on patient information. Meant to be overridden in GATSBI version.

- **onClick$newCessionItem()**
  Opens the CessionController in create mode with selected Echantillon objects.

- **onClick$stockageItem()**
  Opens the StockageController in stock mode for selected Echantillon objects.

- **onClick$select()**, **onClick$cancelSelection()**
  Override superclass methods and perform additional actions for selection handling.

- **onClick$findMore()**
  Opens the advanced search page for Echantillon objects.

- **onClick$findINCa()**, **onClick$findBiocap()**
  Open the advanced search pages for INCa and Biocap respectively.

- **onGetObjectFromResearchINCa(final Event e)**
  Handles FicheRechercheINCa window search results.

- **applyDroitsOnListe()**
  Applies permissions to the elements displayed in the list and sets visibility for export options.

- **isCanCession()**, **isCanStockage()**
  Return the current permission status for creating Cessions and performing stockage actions.

- **setCanCession(final boolean can)**, **setCanStockage(final boolean can)**
  Set the permission status for creating Cessions and performing stockage actions.

- **clearSelection()**
  Clears the selection of Echantillon objects and disables related menu buttons.

- **getComparatorDerivesAsc()**, **getComparatorDerivesDesc()**, **getComparatorCessionsAsc()**, **getComparatorCessionsDesc()**
  Return comparators for sorting Echantillon objects based on derived objects or cessions.

- **setComparatorDerivesAsc()**, **setComparatorDerivesDesc()**, **setComparatorCessionsAsc()**, **setComparatorCessionsDesc()**
  Set comparators for sorting Echantillon objects based on derived objects or cessions.

- **onDoExportTVGSO()**, **onDoExportINCa()**, **onDoExportBIOCAP()**, **onDoExportBIOBANQUES()**
  Handle export of Echantillon objects to various catalogues.

- **onClick$exportItemTVGSO()**, **onClick$exportItemTVGSOcsv()**, **onClick$exportItemINCa()**, **onClick$exportItemBIOCAP()**, **onClick$exportItemBIOBANQUES()**
  Handle clicks on respective export menu buttons.

- **onLaterExportCatalogue(final boolean fromSelection, final short catalogue, final boolean csv, final Map<String, ?> params)**
  Performs export process from selection or empty search to specified catalogue format.

- **batchDelete(final List<Integer> ids, final String comment)**
  Handles batch deletion of Echantillon objects with provided IDs and comment.

- **switchToSelectMode()**
  Switches the list to select mode for Echantillon objects selection.

