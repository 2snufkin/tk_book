# XmlUtils

## Description
This interface provides methods for XML document manipulation and generation, specifically for:
- Creating and managing JDOM documents
- Generating PDF and HTML outputs
- Handling document structure (pages, titles, paragraphs)
- Managing box content and modeling
- Creating transfer agreements
- Managing document signatures
- Handling document formatting and layout

## Methods

- **`createJDomDocument()`**: Creates a JDOM document with root and DTD.

- **`createJDomAccordTranfert()`**: Creates a transfer agreement JDOM document.

- **`createJDomDocumentBoites()`**: Creates a boxes JDOM document.

- **`createJDomDocumentContenuBoite()`**: Creates a box content JDOM document.

- **`addTitreForDocument(Element root, String titre)`**: Adds document title.

- **`addPage(Element root, String titre)`**: Adds document page.

- **`addCoupleValeur(Element parent, CoupleValeur couple)`**: Adds value pair to element.

- **`addCoupleSimpleValeur(Element parent, CoupleSimpleValeur couple)`**: Adds simple value pair.

- **`addLigne(Element parent, LigneParagraphe ligne)`**: Adds paragraph line.

- **`addLigneSimple(Element parent, LigneSimpleParagraphe ligne)`**: Adds simple paragraph line.

- **`addLigneDeuxColonnesParagraphe(Element parent, LigneDeuxColonnesParagraphe ligne)`**: Adds two-column line.

- **`addLigneListe(Element parent, LigneListe ligne)`**: Adds list line.

- **`addEnteteListe(Element parent, EnteteListe entete)`**: Adds list header.

- **`addColonnesListe(Element parent, int nb)`**: Adds specified number of list columns.

- **`addSousParagraphe(Element parent, SousParagraphe sous)`**: Adds sub-paragraph.

- **`addParagraphe(Element parent, Paragraphe para)`**: Adds paragraph.

- **`addListe(Element parent, ListeElement liste)`**: Adds list element.

- **`addHautDePage(Element parent, String legende, boolean addImage, String adr)`**: Adds page header.

- **`addBasDePage(Element parent, String legende)`**: Adds page footer.

- **`createXMLFile(Document doc, String folder, String file)`**: Creates XML file from JDOM document.

- **`transformAsPdf(Document doc)`**: Converts JDOM document to PDF.

- **`creerPdf(Document document)`**: Creates PDF byte array from DOM document.

- **`creerHtml(Document doc)`**: Creates HTML byte array from JDOM document.

- **`addPageBoite(Element root, String titre)`**: Adds box page.

- **`addTitreIntermediaire(Element elt, String titre)`**: Adds intermediate title.

- **`addSeparateur(Element elt)`**: Adds separator.

- **`addBoite(Element elt, BoiteImpression boite, String adrlImages)`**: Adds box modeling.

- **`createModelisation(Element elt, Terminale boite, String nom, List<Integer> positions, String legendeVide, String legendePris, String legendeSelectionne, String adrlImages)`**: Creates box model.

- **`addInstructions(Element elt, List<String> instructions)`**: Adds box finding instructions.

- **`addListeElements(Element elt, List<String> elements, String titreListe)`**: Adds elements list.

- **`creerBoiteHtml(Document doc)`**: Creates HTML for printable document.

- **`addPageContenuBoite(Element root, String titre)`**: Adds box content page.

- **`addListeParents(Element elt, List<String> listeParents)`**: Adds parent boxes list.

- **`addListeNombres(Element elt, List<String> listeNombres)`**: Adds box statistics.

- **`createContenu(Element elt, Terminale boite, String valeurVide, String adrImages, Hashtable<String, String> echantillonTypesCouleurs, String echantillonCouleur, Hashtable<String, String> prodDeriveTypesCouleurs, String prodDeriveCouleur)`**: Models box content.

- **`addBoiteContenu(Element elt, BoiteContenu boite, String adrImages, Hashtable<String, String> echantillonTypesCouleurs, String echantillonCouleur, Hashtable<String, String> prodDeriveTypesCouleurs, String prodDeriveCouleur)`**: Adds box content modeling.

- **`creerContenuHtml(Document doc)`**: Creates HTML for printable content.

- **`addCoupleAccordValeur(Element parent, CoupleAccordValeur couple)`**: Adds agreement value pair.

- **`addLigneAccord(Element parent, LigneAccord ligne)`**: Adds agreement line.

- **`addBlocPrincipal(Element parent, BlocPrincipal bloc)`**: Adds main block.

- **`addTableau(Element parent, BlocPrincipal[] blocs)`**: Adds table of main blocks.

- **`addValeursSignatures(Element parent, ValeursSignatures valeurs)`**: Adds signature values.

- **`addListeSignature(Element parent, ListeSignature liste)`**: Adds signature list.

- **`addSignatures(Element parent, Signatures signatures)`**: Adds signatures.

- **`transformAsAccordPdf(Document doc)`**: Converts to PDF agreement document.

- **`creerAccordTransfertPdf(Document document)`**: Creates transfer agreement PDF. 