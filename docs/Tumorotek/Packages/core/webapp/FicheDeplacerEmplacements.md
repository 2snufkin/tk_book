# FicheDeplacerEmplacements

This class manages the movement and storage operations of biological samples within the storage system. It provides a comprehensive interface for:
- Moving samples between different storage locations
- Managing the storage and retrieval (destocking) of samples
- Handling multiple storage modes (selection, movement, storage, destocking)
- Creating visual representations of storage locations
- Managing the drag-and-drop functionality for sample movement
- Generating printable documents for storage operations
- Validating storage operations and handling errors
- Maintaining the state of storage locations and their contents

## Variables:

- deplacements: A list of EmplacementDecorator objects.
- deplacementsRestants: A list of EmplacementDecorator objects.
- emplacementDepart: A list of EmplacementDecorator objects.
- emplacementReserves: A list of EmplacementDecorator objects.
- selectedEmplacement: An EmplacementDecorator object representing the selected emplacement.
- emplacementsDestDep: A Hashtable mapping EmplacementDecorator objects to EmplacementDecorator objects.
- echantillons: A list of Echantillon objects.
- derives: A list of ProdDerive objects.
- emplacementsFinaux: A list of Emplacement objects.
- selectionMode: A boolean indicating whether the mode is selection.
- deplacementMode: A boolean indicating whether the mode is deplacement.
- stockerMode: A boolean indicating whether the mode is stocker.
- destockageMode: A boolean indicating whether the mode is destockage.
- mode: A string representing the mode.
- badTerminaleError: A string representing an error message.
- lignes: A list of strings representing lines.
- colonnes: A list of strings representing columns.
- numeroLigne: An integer representing a line number.
- numeroColonne: An integer representing a column number.
- entiteReservee: A string representing a reserved entity.
- returnMethode: A string representing a return method.
- path: A string representing a path.
- typeEntite: A string representing the type of entity.

## Methods:

- **doAfterCompose(final Component comp)**: Overrides the doAfterCompose method of the parent class. It initializes the component and loads the data.

- **getObjectTabController()**: Overrides the getObjectTabController method of the parent class. It returns the object tab controller.

- **switchToSelectionMode(final boolean back, final Map<ScanTube, TKStockableObject> mismatches)**: Switches the mode to selection. Takes a boolean parameter indicating whether it is a back operation and a map of mismatches. It updates the visibility and initializes the data.

- **switchToDeplacerMode()**: Switches the mode to deplacement. It updates the visibility and initializes the data.

- **switchToStockerMode(final List<Echantillon> echans, final List<ProdDerive> der, final String p, final String methode, final List<Emplacement> reservation)**: Switches the mode to stocker. Takes a list of echantillons, a list of derives, a string representing a path, a string representing a method, and a list of reservations. It updates the visibility and initializes the data.

- **switchToDestockageMode**: This method is called to switch the mode of the stock to "destocking" mode. It updates the visibility of certain components and initializes the display accordingly.

- **onClick$validateSelection**: This method is triggered when the user clicks on the "validate selection" button. It performs validation checks and throws an exception if the selection is not valid. If the validation is successful, it calls the switchToDeplacerMode method.

- **onClick$validateDeplacement**: This method is called when the user clicks on the "validate movement" button. It shows a busy indicator, and then asynchronously triggers the "onLaterDeplacement" event.

- **onClick$validateStockage**: This method is invoked when the user clicks on the "validate storage" button. It shows a busy indicator and triggers either the "onLaterStockageNewObjects" or "onLaterStockageExistingObjects" event based on the conditions.

- **onClick$validateDestockage**: This method is called when the user clicks on the "validate destocking" button. It shows a busy indicator and triggers the "onLaterDestockage" event.

- **onClick$cancelSelection, onClick$cancelDeplacement, onClick$cancelStockage, onClick$cancelDestockage**: These methods handle the cancellation of various operations by resetting the state of the components and lists.

- **onSelect$lignesBox, onSelect$colonnesBox**: These methods handle the selection of a row or column in the user interface.

- **onClick$selectCoordonnee**: This method is called when the user clicks on the "select coordinates" button. It retrieves the position based on the selected row and column and performs actions based on the current mode (selection, movement, storage).

- **onLaterStockageExistingObjects, onLaterStockageNewObjects, onLaterDeplacement, onLaterDestockage**: These methods handle the asynchronous execution of stock-related operations, such as storage, movement, and destocking. They update the user interface and perform additional actions based on the results.

- **stockExistingObjects()**: This method is used to save existing objects in storage. It retrieves the necessary data, such as entities, IDs, and locations, and updates the database accordingly. It also triggers updates in the user interface to reflect the changes.

- **stockNewObjects()**: This method is similar to stockExistingObjects() but is used for saving new objects in storage. It returns a Hashtable containing the saved objects and their corresponding locations.

- **updateEchantillons()**: This method is called by stockExistingObjects() to update specific attributes of Echantillon objects after they have been stored. It updates the Echantillon objects' status, location, and other relevant information.

- **updateProdDerives()**: Similar to updateEchantillons(), this method is called by stockExistingObjects() to update ProdDerive objects after they have been stored. It updates the ProdDerive objects' status, location, and other relevant information.

- **destockEmplacements()**: This method is used to remove objects from storage. However, the implementation is currently commented out, so it doesn't perform any actions.

- **definirTerminaleDestination()**: This method is called when a user selects a destination terminal. It updates the user interface based on the selected terminal, such as showing error messages or updating the model of the terminal.

- **initEmplacements()**: This method initializes the list of locations (emplacements) in the storage system. It retrieves the emplacements from the database and creates corresponding decorator objects (EmplacementDecorator).

- **initModelisation()**: This method is responsible for creating a graphical representation (model) of the storage system. It generates the layout and structure of the storage container, including the boxes and their contents (objects).

- **createImage()**: This method creates an image representation of an emplacement (storage location). It generates a graphical element that corresponds to the emplacement, considering its state (empty or occupied) and the current mode of the application (stocking, destocking, etc.).

- **descendreFenetre()**: This method is responsible for scrolling the window to a specific position identified by the id and idTop variables. It uses JavaScript to manipulate the scroll position of the element.

- **onClickImage(Event e)**: This method is called when an image is clicked. It checks the mode (selection, movement, storage, destocking) and performs the corresponding action based on the clicked image.

- **handleImage(Div img)**: This method is responsible for handling the clicked image based on the current mode. It selects the image if in selection mode, performs actions related to movement, storage, or destocking based on the mode, and updates the necessary data structures.

- **onDropImage(DropEvent e)**: This method is called when an image is dropped onto a target element. It retrieves the dragged and target images, performs certain operations based on their indexes, and then handles the images between those indexes.

- **selectImageInSelectionMode(Div img)**: This method is called when an image is selected in the selection mode. It adds or removes the selected image from the list of selected images and updates the corresponding UI elements.

- **selectImageIndeplacementMode(Div img)**: This method is called when an image is selected in the movement mode. It handles the movement of images between different positions and updates the necessary data structures and UI elements.

- **selectImageInStockageMode(Div img)**: This method is called when an image is selected in the storage mode. It handles the storage of images in empty destinations and updates the necessary data structures and UI elements.

- **selectImageInDestockageMode(Div img)**: This method is called when an image is selected in the destocking mode. It adds or removes the selected image from the list of images to be destocked and updates the corresponding UI elements.

- **onClick$deleteDeplacement(Event event)**: This method is called when the delete button associated with a movement is clicked. It removes the selected movement from the list of movements and updates the UI accordingly.

- **deleteDeplacementInStockageMode**: This method is used to delete a displacement in storage mode. It takes an EmplacementDecorator object as a parameter and performs various operations to remove the displacement from the list of movements.

- **deleteDeplacementInDestockageMode**: This method is similar to the previous one but is used for deleting a displacement in destocking mode. It also takes an EmplacementDecorator object as a parameter and removes it from the list of movements.

- **postDetachDeplacementEvent**: This private method is called to notify the general controller of the tab that the editing is done. It uses the Events class to post an event named "onDeplacementDone" to the parent window.

- **createBoitesDepart**: This method creates a list of departure boxes for the movements. It iterates over the deplacements list, checks if each movement has a destination, and creates a BoiteImpression object for each unique box encountered. It fills in various attributes of the box, such as titles, legends, instructions, elements, and positions.

- **createBoitesArrivee**: This method is similar to createBoitesDepart but creates a list of arrival boxes for the movements. It iterates over the deplacements list, checks if each movement has a destination, and creates a BoiteImpression object for each unique box encountered. It fills in the attributes of the box as in the previous method.

- **createFileHtmlToPrintLaterStockage**: This method is responsible for creating an HTML file for later printing. It checks if there are any elements to store (deplacements list is not empty) and then creates an XML document structure using JDOM. It adds pages, titles, and box information to the XML document. Finally, it converts the XML document to an HTML file and sends it to the user for printing.