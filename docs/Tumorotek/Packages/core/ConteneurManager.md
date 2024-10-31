# ConteneurManager

- ```java
  Conteneur findByIdManager(Integer conteneurId)
  ```
  Retrieves a container by its ID.

- ```java
  List<Conteneur> findAllObjectsManager()
  ```
  Retrieves all containers in the system.

- ```java
  List<Conteneur> findByBanqueWithOrderManager(Banque banque)
  ```
  Retrieves all containers associated with a specific bank.

- ```java
  List<Conteneur> findByBanqueAndCodeManager(Banque banque, String code)
  ```
  Retrieves containers associated with a specific bank and code.

- ```java
  List<Conteneur> findByBanquesWithOrderManager(List<Banque> banques)
  ```
  Retrieves containers associated with a list of banks.

- ```java
  List<Conteneur> findByPlateformeOrigWithOrderManager(Plateforme plateforme)
  ```
  Retrieves containers initially created by a specific platform.

- ```java
  Set<Incident> getIncidentsManager(Conteneur conteneur)
  ```
  Retrieves all incidents associated with a container.

- ```java
  Set<Enceinte> getEnceintesManager(Conteneur conteneur)
  ```
  Retrieves all chambers (enclosures) associated with a container.

- ```java
  List<Terminale> getAllTerminalesInArborescenceManager(Conteneur conteneur)
  ```
  Retrieves all terminals (storage units) within the container's hierarchy.

- ```java
  Set<Banque> getBanquesManager(Conteneur conteneur)
  ```
  Retrieves all banks associated with a container.

- ```java
  Set<ConteneurPlateforme> getConteneurPlateformesManager(Conteneur conteneur)
  ```
  Retrieves all platform-container associations for a container.

- ```java
  Boolean findDoublonManager(Conteneur conteneur, List<Banque> banques)
  ```
  Checks for duplicate containers.

- ```java
  Boolean isUsedObjectManager(Conteneur conteneur)
  ```
  Checks if a container is used by other objects.

- ```java
  void createObjectManager(Conteneur conteneur, ConteneurType conteneurType, Service service, 
      List<Banque> banques, List<Plateforme> plateformes, Utilisateur utilisateur, Plateforme pfOrig)
  ```
  Creates a new container with associated attributes and associations.

- ```java
  void updateObjectManager(Conteneur conteneur, ConteneurType conteneurType, Service service,
      List<Banque> banques, List<Plateforme> plateformes, List<Incident> incidents, Utilisateur utilisateur)
  ```
  Updates an existing container with new attributes and associations.

- ```java
  void removeObjectManager(Conteneur conteneur, String comments, Utilisateur user)
  ```
  Removes a container from the system, along with associated events and reservations.

- ```java
  void createAllArborescenceManager(Conteneur conteneur, List<Enceinte> enceintes, Terminale terminale,
      List<Integer> firstPositions, List<Banque> banques, List<Plateforme> plateformes, 
      Integer sizePaillettes, boolean nameFromColor, Utilisateur utilisateur, Plateforme pfOrig)
  ```
  Creates the entire hierarchy of a container, including chambers and terminals.

- ```java
  List<Enceinte> getContainingEnceinteManager(Conteneur conteneur)
  ```
  Retrieves a list of chambers contained within a container.

- ```java
  void removeBanqueFromContAndEncManager(Conteneur conteneur, Banque banque)
  ```
  Removes the many-to-many association between a container and a bank, as well as any reservations that associate a chamber belonging to the container with the same bank.

- ```java
  Conteneur findFromEmplacementManager(Emplacement empl)
  ```
  Finds the container that corresponds to the given location (emplacement).

- ```java
  boolean hasRetoursManager(Conteneur conteneur)
  ```
  Checks if there are any storage events associated with the container.

- ```java
  List<Conteneur> findByPartageManager(Plateforme pf, Boolean partage)
  ```
  Retrieves all containers accessible from a platform and checks if they are currently shared or not.

- ```java
  Float findTempForEmplacementManager(Emplacement emplacement)
  ```
  Searches for the storage temperature corresponding to a location (emplacement). Returns `null` if no temperature is found or if the emplacement is null.

- ```java
  void updateObjectWithConteneurPlateformesManager(Conteneur conteneur, ConteneurType conteneurType,
      Service service, List<Banque> banques, List<ConteneurPlateforme> plateformes,
      List<Incident> incidents, Utilisateur utilisateur)
  ```
  Overloads the modification manager method to include associations with `ConteneurPlateformes`.

- ```java
  ConteneurPlateforme getOneConteneurPlateformeManager(Conteneur conteneur, Plateforme pf)
  ```
  Finds the association represented by a container and a platform.