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

## Variables

```java
private List<EmplacementDecorator> deplacements;
private List<EmplacementDecorator> deplacementsRestants;
private List<EmplacementDecorator> emplacementDepart;
private List<EmplacementDecorator> emplacementReserves;
private EmplacementDecorator selectedEmplacement;
private Hashtable<EmplacementDecorator, EmplacementDecorator> emplacementsDestDep;
private List<Echantillon> echantillons;
private List<ProdDerive> derives;
private List<Emplacement> emplacementsFinaux;
private boolean selectionMode;
private boolean deplacementMode;
private boolean stockerMode;
private boolean destockageMode;
private String mode;
private String badTerminaleError;
private List<String> lignes;
private List<String> colonnes;
private Integer numeroLigne;
private Integer numeroColonne;
private String entiteReservee;
private String returnMethode;
private String path;
private String typeEntite;
```

## Methods

- ```java
  void switchToDestockageMode()
  ```
  Switches to destocking mode and updates component visibility.

- ```java
  void onClick$validateSelection()
  ```
  Validates selection and switches to deplacement mode if successful.

- ```java
  void onClick$validateDeplacement()
  ```
  Shows busy indicator and triggers onLaterDeplacement event.

- ```java
  void onClick$validateStockage()
  ```
  Validates storage and triggers appropriate stockage event.

- ```java
  void stockExistingObjects()
  ```
  Saves existing objects in storage and updates database.

- ```java
  Hashtable<TKStockableObject, Emplacement> stockNewObjects()
  ```
  Saves new objects in storage and returns mapping of objects to locations.

- ```java
  void onDropImage(DropEvent e)
  ```
  Handles drag and drop operations for storage locations.

- ```java
  void updateEchantillons()
  ```
  Updates Echantillon objects' attributes after storage operations.

- ```java
  void updateProdDerives()
  ```
  Updates ProdDerive objects' attributes after storage operations.

- ```java
  void destockEmplacements()
  ```
  Handles removal of objects from storage locations.

- ```java
  void definirTerminaleDestination()
  ```
  Updates UI based on selected terminal destination.

- ```java
  void initEmplacements()
  ```
  Initializes storage locations list from database.

- ```java
  void initModelisation()
  ```
  Creates graphical representation of storage system.

- ```java
  Component createImage()
  ```
  Generates graphical element for storage location representation.

- ```java
  void descendreFenetre()
  ```
  Handles window scrolling to specific position using JavaScript.

- ```java
  void onClickImage(Event e)
  ```
  Processes image click events based on current mode.

- ```java
  void handleImage(Div img)
  ```
  Processes clicked image based on current operation mode.

- ```java
  void selectImageInSelectionMode(Div img)
  ```
  Handles image selection in selection mode.

- ```java
  void selectImageIndeplacementMode(Div img)
  ```
  Handles image selection in movement mode.

- ```java
  void selectImageInStockageMode(Div img)
  ```
  Handles image selection in storage mode.

- ```java
  void selectImageInDestockageMode(Div img)
  ```
  Handles image selection in destocking mode.

- ```java
  void onClick$deleteDeplacement(Event event)
  ```
  Removes selected movement and updates UI.

- ```java
  void deleteDeplacementInStockageMode(EmplacementDecorator emplacement)
  ```
  Removes displacement in storage mode.

- ```java
  void deleteDeplacementInDestockageMode(EmplacementDecorator emplacement)
  ```
  Removes displacement in destocking mode.

- ```java
  private void postDetachDeplacementEvent()
  ```
  Notifies parent controller of completed editing.

- ```java
  List<BoiteImpression> createBoitesDepart()
  ```
  Creates list of departure boxes for movements.

- ```java
  List<BoiteImpression> createBoitesArrivee()
  ```
  Creates list of arrival boxes for movements.

- ```java
  void createFileHtmlToPrintLaterStockage()
  ```
  Generates HTML file for printing storage operations.

- ```java
  void onClick$cancelSelection()
  ```
  Cancels current selection operation.

- ```java
  void onClick$cancelDeplacement()
  ```
  Cancels current movement operation.

- ```java
  void onClick$cancelStockage()
  ```
  Cancels current storage operation.

- ```java
  void onClick$cancelDestockage()
  ```
  Cancels current destocking operation.

- ```java
  void onSelect$lignesBox()
  ```
  Handles row selection in storage grid.

- ```java
  void onSelect$colonnesBox()
  ```
  Handles column selection in storage grid.

- ```java
  void onClick$selectCoordonnee()
  ```
  Processes coordinate selection based on current mode.

- ```java
  void onLaterStockageExistingObjects()
  ```
  Handles asynchronous storage of existing objects.

- ```java
  void onLaterStockageNewObjects()
  ```
  Handles asynchronous storage of new objects.

- ```java
  void onLaterDeplacement()
  ```
  Handles asynchronous movement operations.

- ```java
  void onLaterDestockage()
  ```
  Handles asynchronous destocking operations.