- **findByIdManager(Integer conteneurId): Conteneur**
  - Retrieves a container by its ID.

- **findAllObjectsManager(): List<Conteneur>**
  - Retrieves all containers in the system.

- **findByBanqueWithOrderManager(Banque banque): List<Conteneur>**
  - Retrieves all containers associated with a specific bank.

- **findByBanqueAndCodeManager(Banque banque, String code): List<Conteneur>**
  - Retrieves containers associated with a specific bank and code.

- **findByBanquesWithOrderManager(List<Banque> banques): List<Conteneur>**
  - Retrieves containers associated with a list of banks.

- **findByPlateformeOrigWithOrderManager(Plateforme plateforme): List<Conteneur>**
  - Retrieves containers initially created by a specific platform.

- **getIncidentsManager(Conteneur conteneur): Set<Incident>**
  - Retrieves all incidents associated with a container.

- **getEnceintesManager(Conteneur conteneur): Set<Enceinte>**
  - Retrieves all chambers (enclosures) associated with a container.

- **getAllTerminalesInArborescenceManager(Conteneur conteneur): List<Terminale>**
  - Retrieves all terminals (storage units) within the container's hierarchy.

- **getBanquesManager(Conteneur conteneur): Set<Banque>**
  - Retrieves all banks associated with a container.

- **getConteneurPlateformesManager(Conteneur conteneur): Set<ConteneurPlateforme>**
  - Retrieves all platform-container associations for a container.

- **findDoublonManager(Conteneur conteneur, List<Banque> banques): Boolean**
  - Checks for duplicate containers.

- **isUsedObjectManager(Conteneur conteneur): Boolean**
  - Checks if a container is used by other objects.

- **createObjectManager(Conteneur conteneur, ConteneurType conteneurType, Service service, List<Banque> banques, List<Plateforme> plateformes, Utilisateur utilisateur, Plateforme pfOrig)**
  - Creates a new container with associated attributes and associations.

- **updateObjectManager(Conteneur conteneur, ConteneurType conteneurType, Service service, List<Banque> banques, List<Plateforme> plateformes, List<Incident> incidents, Utilisateur utilisateur)**
  - Updates an existing container with new attributes and associations.

- **removeObjectManager(Conteneur conteneur, String comments, Utilisateur user)**
  - Removes a container from the system, along with associated events and reservations.

- **createAllArborescenceManager(Conteneur conteneur, List<Enceinte> enceintes, Terminale terminale, List<Integer> firstPositions, List<Banque> banques, List<Plateforme> plateformes, Integer sizePaillettes, boolean nameFromColor, Utilisateur utilisateur, Plateforme pfOrig)**
  - Creates the entire hierarchy of a container, including chambers and terminals.

- **getContainingEnceinteManager(Conteneur conteneur): List<Enceinte>**
  - Retrieves a list of chambers contained within a container.

- **removeBanqueFromContAndEncManager(Conteneur conteneur, Banque banque)**
  - Removes the many-to-many association between a container and a bank, as well as any reservations that associate a chamber belonging to the container with the same bank.

- **findFromEmplacementManager(Emplacement empl): Conteneur**
  - Finds the container that corresponds to the given location (emplacement).

- **hasRetoursManager(Conteneur conteneur): boolean**
  - Checks if there are any storage events associated with the container.

- **findByPartageManager(Plateforme pf, Boolean partage): List<Conteneur>**
  - Retrieves all containers accessible from a platform and checks if they are currently shared or not.

- **findTempForEmplacementManager(Emplacement emplacement): Float**
  - Searches for the storage temperature corresponding to a location (emplacement). Returns `null` if no temperature is found or if the emplacement is null.

- **updateObjectWithConteneurPlateformesManager(Conteneur conteneur, ConteneurType conteneurType, Service service, List<Banque> banques, List<ConteneurPlateforme> plateformes, List<Incident> incidents, Utilisateur utilisateur)**
  - Overloads the modification manager method to include associations with `ConteneurPlateformes`.

- **getOneConteneurPlateformeManager(Conteneur conteneur, Plateforme pf): ConteneurPlateforme**
  - Finds the association represented by a container and a platform. 