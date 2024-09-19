# EnceinteManager Methods

- **findByIdManager**: Retrieves an `Enceinte` object by its ID.

- **findAllObjectsManager**: Fetches all `Enceinte` objects from the database.

- **findByEnceintePereWithOrderManager**: Finds all `Enceinte` objects that are children of a specified parent `Enceinte`.

- **findByConteneurWithOrderManager**: Finds all `Enceinte` objects within a specified `Conteneur`.

- **usedNomsExceptOneManager**: Returns a list of names of `Enceinte` objects at the same level, excluding the specified one.

- **getTerminalesManager**: Retrieves all terminal `Terminale` objects associated with a given `Enceinte`.

- **getAllTerminalesInArborescenceManager**: Finds all terminal `Terminale` objects within the entire hierarchy of a specified `Enceinte`.

- **getEnceintesManager**: Gets all `Enceinte` objects that are children of the specified parent `Enceinte`.

- **getBanquesManager**: Retrieves all `Banque` objects associated with a given `Enceinte`.

- **getLevelEnceinte**: Determines the level of an `Enceinte` within the hierarchy.

- **checkEnceinteInEnceintePereLimitesManager**: Checks if an `Enceinte` is within the limits of its parent `Enceinte`.

- **checkEnceinteInConteneurLimitesManager**: Checks if an `Enceinte` is within the limits of its `Conteneur`.

- **checkLastEnceinte**: Determines if the given `Enceinte` is the last in the hierarchy (its children are terminal).

- **checkPositionLibreInEnceinteManager**: Checks if a position in an `Enceinte` is free (deprecated).

- **checkPositionLibreInConteneurManager**: Checks if a position in a `Conteneur` is free (deprecated).

- **getNumberEmplacementsLibres**: Counts the number of free slots within an `Enceinte`.

- **findDoublonManager**: Checks if there are duplicate `Enceinte` objects for the specified instance.

- **findDoublonWithoutTwoEnceintesManager**: Checks for duplicates of an `Enceinte`, excluding a specified `Enceinte`.

- **isUsedObjectManager**: Checks if an `Enceinte` is used by other objects.

- **createObjectManager**: Creates and persists a new `Enceinte` in the database with various attributes.

- **createAllArborescenceManager**: Builds the entire hierarchy of `Enceinte` objects from a given `Conteneur` down to terminal `Enceinte`.

- **createMultiObjetcsForConteneurManager**: Creates multiple `Enceinte` objects for a `Conteneur`.

- **createMultiObjetcsForEnceinteManager**: Creates multiple `Enceinte` objects under a parent `Enceinte`.

- **updateObjectManager**: Updates an existing `Enceinte` with new details and persists the changes.

- **updatewithCreateAllArborescenceManager**: Updates an `Enceinte` and creates its entire hierarchy.

- **removeObjectManager**: Deletes an `Enceinte` from the database with optional comments.

- **getNbEmplacementsLibresByPS**: Counts the number of free slots in an `Enceinte` using `PreparedStatement`.

- **getNbEmplacementsOccupesByPS**: Counts the number of occupied slots in an `Enceinte` using `PreparedStatement`.

- **getObjetIdsByEntiteByPS**: Retrieves a list of object IDs within an `Enceinte` based on their entity type using `PreparedStatement`.

- **getAdrlManager**: Generates the ADRL (address) for a given `Enceinte`.

- **getConteneurManager**: Retrieves the `Conteneur` associated with a given `Enceinte`.

- **echangerDeuxEnceintesManager**: Exchanges the positions of two `Enceinte` objects.

- **getConteneurParent**: Finds the parent `Conteneur` of a specified `Enceinte` by traversing the hierarchy.

- **findAllEnceinteByConteneurManager**: Finds all `Enceinte` objects within a `Conteneur` at all levels.

- **findEnceinteRecursiveManager**: Recursively populates a list with all descendant `Enceinte` objects of those in the initial list.

- **findByEnceintePereAndNomManager**: Finds `Enceinte` objects under a parent `Enceinte` with a specified name.

- **findByConteneurAndNomManager**: Finds `Enceinte` objects within a `Conteneur` with a specified name.

- **updateTailleEnceinteManager**: Increases the size of an `Enceinte` by a specified number of slots.

- **getDistinctBanquesFromTkObjectsManager**: Collects distinct `Banque` objects from all `Terminale` objects in an `Enceinte`.

