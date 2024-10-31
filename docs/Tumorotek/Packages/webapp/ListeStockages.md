# ListeStockages

This class manages the display and interaction with a hierarchical storage system, handling containers (Conteneurs), enclosures (Enceintes), and terminals (Terminales). It provides functionality for viewing, selecting, moving, and managing these storage elements through a tree-based interface.

- **`getStockageController()`**: Returns the StockageController object associated with the panel.

- **`setStockageController(StockageController sc)`**: Sets the StockageController object for the panel.

- **`switchToDeplacementMode(List<Banque> banks)`**: Switches to "deplacement" mode using provided banks list, hiding menu bar and "hideCompleteButton".

- **`switchToDeplacementEmplacementMode()`**: Switches to "deplacementEmplacement" mode, hiding menu bar and managing forbidden containers.

- **`switchToStockerMode()`**: Switches to "stocker" mode, similar to "deplacementEmplacement" but shows "hideCompleteButton".

- **`onClick$hideCompleteButton()`**: Toggles hideCompleteTerminales flag and updates container display.

- **`onLaterUpdateAllContainerToManageForbiddenConteneurs(Event e)`**: Manages forbidden containers display.

- **`switchToNormalMode(boolean afterDone)`**: Returns to normal mode, clearing restrictions and updating display.

- **`cleanAffichageForbiddenConteneurs()`**: Cleans forbidden containers display.

- **`redrawTreeForbiddenConteneur()`**: Redraws forbidden containers in the tree.

- **`onSelect$mainTreeContext()`**: Handles tree node selection and updates display accordingly.

- **`onClick$deplacerEmplacements()`**: Initiates emplacement movement mode.

- **`selectForView()`**: Handles item selection for viewing in appropriate fiche mode.

- **`selectForDeplaceEnceinte()`**: Manages selection for moving enceintes between locations.

- **`checkConteneurDeplacementCoherence()`**: Validates container movement coherence.

- **`selectForDeplaceEmplacement()`**: Handles selection for moving items within locations.

- **`onClick$addNewConteneur()`**: Initiates new container creation.

- **`updateConteneur()`**: Updates specific container information.

- **`updateAllConteneurs()`**: Refreshes entire container tree structure.

- **`updateEnceinte()`**: Updates enceinte node with optional cascade updates.

- **`updateEnceintebyCascade()`**: Updates enceinte node and its descendants.

- **`updateTerminale()`**: Updates terminal node with optional cascade updates.

- **`deleteTerminale()`**: Removes terminal from tree structure.

- **`deleteEnceinte()`**: Removes enceinte from tree structure.

- **`updateChildrenOfParent()`**: Refreshes children nodes of a parent item.

- **`selectTreeItem()`**: Selects specific tree item by position.

- **`deplacerDeuxEnceintes()`**: Handles movement between two enceintes.

- **`deplacerDeuxTerminales()`**: Handles movement between two terminals.

- **`drawActionsForStockage()`**: Updates action button states.

- **`onClick$etiquettes()`**: Handles label printing functionality.

- **`openTerminaleFromEmplacement()`**: Navigates to terminal from location.

- **`openTerminale()`**: Opens and optionally selects specific terminal.

- **`openEnceinte()`**: Opens and optionally selects specific enceinte.

- **`disableToolbar()`**: Toggles toolbar state.

- **`selectTerminaleFromScan()`**: Selects terminal based on scan data.

- **`onClick$findTerminaleBoxButton()`**: Initiates terminal search.

- **`cleanBlueRowsColor()`**: Resets search result highlighting.

- **`cleanRedRowsColorForForbiddenConteneurs()`**: Resets forbidden container highlighting.

- **`onClick$resetTree()`**: Resets tree to initial state.

- **`isDeplacementOrDeplacementEmplacementMode()`**: Checks current movement mode.

