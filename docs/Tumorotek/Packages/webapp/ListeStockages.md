
1. `getStockageController()`: Returns the StockageController object associated with the panel.

2. `setStockageController(StockageController sc)`: Sets the StockageController object for the panel.

3. `switchToDeplacementMode(List<Banque> banks)`: Switches the list to "deplacement" mode, using the provided list of banks. It hides the menu bar and the "hideCompleteButton" and manages forbidden containers.

4. `switchToDeplacementEmplacementMode()`: Switches the list to "deplacementEmplacement" mode. It hides the menu bar and the "hideCompleteButton" and manages forbidden containers.

5. `switchToStockerMode()`: Switches the list to "stocker" mode, which is similar to "deplacementEmplacement" mode but shows the "hideCompleteButton".


1. `onClick$hideCompleteButton()`: Toggles the `hideCompleteTerminales` flag, updates the list of search paths, and calls `updateAllConteneurs(false)`. Additionally, it posts an event to execute `onLaterUpdateAllContainerToManageForbiddenConteneurs` later.

2. `onLaterUpdateAllContainerToManageForbiddenConteneurs(Event e)`: Executes `manageForbiddenConteneurs()` to manage the display of forbidden containers.

3. `switchToNormalMode(boolean afterDone)`: Switches the list to "normal" mode. It clears the `restrictedBanqueDeplacement` list, sets the `deplacementMode` to "normal", shows the menu bar, hides the "hideCompleteButton", resets selected items and rows, and calls `updateAllConteneurs(false)` or `cleanAffichageForbiddenConteneurs()` based on the `afterDone` parameter.

4. `cleanAffichageForbiddenConteneurs()`: Cleans the display of forbidden containers by calling `redrawTreeForbiddenConteneur()` and clearing the `forbiddenConteneurPaths` list.

5. `redrawTreeForbiddenConteneur()`: Redraws the display of forbidden containers. It retrieves the `Treeitem` for each forbidden container path and calls the `render()` method of the `StockageTreeItemRenderer` to redraw the item.

6. `onSelect$mainTreeContext()`: Handles the selection of a node in the tree. It cleans the blue rows color, cleans the red rows color for forbidden containers, and sets the selected conteneur, enceinte, or terminale based on the current selection and the deplacement mode.

7. `onClick$deplacerEmplacements()`: Calls the `switchToDeplacerEmplacementsMode()` method of the `StockageController`.

8. `selectForView()`: Handles the selection of an item for viewing. It determines the type of the selected item (ConteneurNode, EnceinteNode, or TerminaleNode) and switches to the respective fiche mode (FicheConteneur, FicheEnceinte, or FicheTerminale) in the `StockageController`.

Based on the provided code, these methods are responsible for managing the display and behavior of the storage list/tree based on different modes, handling the selection of items, and updating the display of forbidden containers. They don't directly generate a tree of containers, enceintes, and terminals.

This code appears to be part of a larger application related to stock management. It contains several methods related to selecting and moving items within a tree structure.

Let's go through the code and understand each method:

1. `selectForDeplaceEnceinte()`: This method is called when an item is selected for movement. It first checks if a destination item was previously selected and deselects it if necessary. Then it retrieves the selected destination item and checks if the current item (referred to as `currentObject`) is an "Enceinte" (a type of container). If it is, it verifies that the destination is also an "Enceinte" and performs additional checks to ensure the validity of the movement. If all checks pass, it highlights the destination item and sends the information to the "FicheEnceinte" (Enceinte form). If the current item is a "Terminale" (a storage terminal), similar checks and actions are performed for the destination "Terminale" and sent to the "FicheTerminale" (Terminale form).

2. `checkConteneurDeplacementCoherence()`: This method is called within `selectForDeplaceEnceinte()` to check the coherence of the movement between containers. It ensures that the destination container and the current container have the necessary banks assigned to them based on the content (Enceintes/ Terminales) being moved. If there is any inconsistency, the destination item is marked in red, and the "FicheEnceinte" or "FicheTerminale" is updated accordingly.

3. `selectForDeplaceEmplacement()`: This method is called when an item is selected for moving within a specific location (Emplacement). It stores the selected item and sends the information to the "FicheDeplacerEmplacements" (Emplacement movement form).

4. `onClick$addNewConteneur()`: This method is called when a new container is being created. It switches to the "FicheConteneurCreateMode" (form for creating a new container).

5. `updateConteneur()`: This method updates the information of a specific container in the tree structure. It creates a new `ConteneurNode` and refreshes the tree display.

6. `updateAllConteneurs()`: This method updates the entire tree structure, including all containers. It initializes the root node, retrieves the list of containers, creates a new `TumoTreeModel`, and updates the tree display. It also handles hiding or showing complete terminals based on the `hideCompleteTerminales` flag.


    updateEnceinte(final Enceinte enceinte, final boolean cascadeUp): This method updates a node in the tree that contains an "Enceinte" (a French word for enclosure). It takes an Enceinte object and a boolean flag as parameters. If the cascadeUp flag is set to true, it also updates the parent nodes in cascade. The method does not have a return value.

    updateEnceintebyCascade(final Treeitem item, final Enceinte enceinte): This method updates a node in the tree that contains an Enceinte and its descendants by cascade. It takes a Treeitem object and an Enceinte object as parameters. It creates a new EnceinteNode with the updated Enceinte object and replaces the old node in the Treeitem with the new node. If the Enceinte has a parent Enceinte, the method recursively updates the parent nodes as well. The method does not have a return value.

    updateTerminale(final Terminale terminale, final boolean cascadeUp): This method updates a node in the tree that contains a "Terminale" (a French word for terminal). It takes a Terminale object and a boolean flag as parameters. If the cascadeUp flag is set to true, it also updates the parent nodes in cascade. The method does not have a return value.

    deleteTerminale(final Enceinte enceinte, final Integer position): This method deletes a Terminale from the tree. It takes an Enceinte object (parent of the Terminale) and an Integer representing the position of the Terminale to be deleted. The method creates an empty Terminale object and opens it in the tree to trigger the deletion. The method does not have a return value.

    deleteEnceinte(final Conteneur conteneur, final Enceinte enceinte, final Integer position): This method deletes an Enceinte from the tree. It takes a Conteneur object (parent of the Enceinte), an Enceinte object (to be deleted), and an Integer representing the position of the Enceinte. The method creates a new Enceinte object with the specified parameters, opens it in the tree, and triggers the deletion. The method does not have a return value.

    updateChildrenOfParent(final Treeitem parent): This method updates the children of a Treeitem. If the parent's value is an instance of ConteneurNode, it reads the children and removes the existing Treechildren from the parent before creating a new one. If the parent's value is an instance of EnceinteNode, it reads the children and clears the existing children of the Treechildren without removing the Treechildren itself. The method does not have a return value.

    selectTreeItem(final Treeitem parent, final Integer position): This method selects a child Treeitem based on its index within the parent's children. It retrieves the list of children from the parent's Treechildren and selects the Treeitem at the specified position. The method does not have a return value.

    deplacerDeuxEnceintes(final Enceinte enc1, Enceinte enc2): This method moves two Enceintes within the tree structure. It takes two Enceinte objects as parameters: enc1 represents the Enceinte to be moved from, and enc2 represents the destination Enceinte. If enc2 is null, the method creates a new empty Enceinte object with the same properties as the source Enceinte and uses it as the destination. The method does not have a return value.

    deplacerDeuxTerminales(final Terminale term1, Terminale term2): This method moves two Terminales within the tree structure. It takes two Terminale objects as parameters: term1 represents the Terminale to be moved from, and term2 represents the destination Terminale. If term2 is null, the method creates a new empty Terminale object with the same properties as the source Terminale and uses it as the destination. The method does not have a return value.



1. `drawActionsForStockage()`: This method is responsible for rendering the clickable or non-clickable state of action buttons based on certain conditions.

2. Getters and setters: These methods are used to access and modify the private fields of the class.

3. `onClick$etiquettes()`: This method is triggered when the "etiquettes" button is clicked. It opens a modal window for selecting printers and labels associated with the current account and bank.

4. `openTerminaleFromEmplacement(Emplacement empl)`: This method is used to navigate to a specific terminal based on the given location (emplacement).

5. `onLaterDeplacementDeuxTerminales(Event e)`: This method is called after a container update and opens two terminals involved in a move operation.

6. `openTerminale(Terminale terminale, boolean select, boolean reset)`: This method is used to navigate and open a specific terminal in the stock storage hierarchy. It can also select the terminal and reset the tree's state if needed.

7. `openTerminaleForDeplacement(Terminale terminale)`: This method opens a terminal in the context of a move operation.

8. `openTerminaleForDeplacementEmplacement(Terminale terminale)`: This method opens a terminal in the context of a move to a specific emplacement.

9. `openEnceinte(Enceinte enceinte, boolean select)`: This method is used to navigate and open a specific enceinte (container) in the stock storage hierarchy. It can also select the enceinte.

The provided code appears to be a part of a class that manages storage containers and terminals. Here's a breakdown of the methods and their functionalities:

1. `disableToolbar(boolean b)`: This method is used to enable or disable the toolbar.

2. `getSelectedEnceinte()`: Retrieves the selected "Enceinte" object.

3. `setSelectedEnceinte(Enceinte _s)`: Sets the selected "Enceinte" object.

4. `getSelectedTerminale()`: Retrieves the selected "Terminale" object.

5. `setSelectedTerminale(Terminale _t)`: Sets the selected "Terminale" object.

6. `getSelectedConteneur()`: Retrieves the selected "Conteneur" object.

7. `setSelectedConteneur(Conteneur _c)`: Sets the selected "Conteneur" object.

8. `selectTerminaleFromScan(TKScanTerminaleDTO dto)`: Selects and displays the terminal in the tree based on the provided scan information.

9. `onLaterScanTerminale(Event e)`: Handles the event when the terminal scan is performed later.

10. `getRootConteneurs()`: Retrieves the root containers.

11. `getSelectedConteneurs()`: Retrieves a list of accessible containers or the selected container if it exists.

12. `onPressEnterKey()`: Handles the event when the enter key is pressed.

13. `onClick$findTerminaleBoxButton()`: Expands the tree nodes representing terminals whose names match the search value.

14. `onLaterTerminaleSearch(Event e)`: Performs the search for terminals based on the provided search value.

15. `cleanBlueRowsColor()`: Resets the color of the rows used for search results.

16. `cleanRedRowsColorForForbiddenConteneurs()`: Resets the color of the rows used for forbidden containers.

17. `onClick$resetTree()`: Resets the tree and clears the page.

18. `isDeplacementOrDeplacementEmplacementMode()`: Checks if the mode is "deplacement" or "deplacementEmplacement".

