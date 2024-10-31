# ProdDeriveRowRenderer

## Constructor

- **`ProdDeriveRowRenderer(boolean select, boolean cols)`**: Constructs a `ProdDeriveRowRenderer` instance. Takes two parameters: `select` which specifies if selection mode is enabled, and `cols` which specifies if all collections are visible.

## Methods

- **`render(Row row, ProdDerive data, int index)`**: Renders the `ProdDerive` object's details in a `Row`. Takes three parameters: `row` which is the row to render, `data` which is the `ProdDerive` object, and `index` which is the index of the row.

- **`getTypeParent(ProdDerive prodDerive)`**: Retrieves the type of the parent (Prelevement, Echantillon, or ProdDerive). Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the type of the parent.

- **`getCodeParent(ProdDerive prodDerive)`**: Retrieves the code of the parent (Prelevement, Echantillon, or ProdDerive). Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the code of the parent as a `Label`.

- **`getQuantite(ProdDerive prodDerive)`**: Concatenates the quantity and its unit. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the concatenated quantity and unit as a string.

- **`getVolume(ProdDerive prodDerive)`**: Concatenates the volume and its unit. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the concatenated volume and unit as a string.

- **`getConcentration(ProdDerive prodDerive)`**: Concatenates the concentration and its unit. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the concatenated concentration and unit as a string.

- **`getEmplacementAdrl(ProdDerive prodDerive)`**: Retrieves the address of the storage location. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the address of the storage location as a string.

- **`getNbDerives(ProdDerive prodDerive)`**: Retrieves the number of derived products. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the number of derived products.

- **`getNbCessions(ProdDerive prodDerive)`**: Retrieves the number of transfers. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the number of transfers.

- **`getDateCreation(ProdDerive prodDerive)`**: Retrieves the system creation date of the derivative product. Takes a `prodDerive` parameter which is the `ProdDerive` object. Returns the creation date as a string.

- **`floor(float a, int n)`**: Rounds a float to a specified number of decimal places. Takes two parameters: `a` which is the float value to be rounded, and `n` which is the number of decimal places. Returns the rounded float value.

- **`getPatient(ProdDerive derive)`**: Retrieves the patient's name and surname associated with the derivative. Takes a `derive` parameter which is the `ProdDerive` object. Returns the patient's name and surname as a string.

- **`isAccessible()`**: Checks if the renderer is accessible. Returns `true` if accessible, otherwise `false`.

- **`setAccessible(boolean acc)`**: Sets the accessibility of the renderer. Takes an `acc` parameter which is the accessibility value.

- **`setAccessEchantillon(boolean ae)`**: Sets the accessibility of Echantillon. Takes an `ae` parameter which is the accessibility value.

- **`setAccessPrelevement(boolean ap)`**: Sets the accessibility of Prelevement. Takes an `ap` parameter which is the accessibility value.

- **`isEmbedded()`**: Checks if the renderer is embedded. Returns `true` if embedded, otherwise `false`.

- **`setEmbedded(boolean isE)`**: Sets the embedded status of the renderer. Takes an `isE` parameter which is the embedded status value.

- **`setAccessStockage(boolean ac)`**: Sets the accessibility of the storage location. Takes an `ac` parameter which is the accessibility value.
