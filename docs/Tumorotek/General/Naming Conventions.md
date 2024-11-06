## Naming Conventions
Naming conventions are crucial for maintaining code readability, consistency, and maintainability. While developers should follow these conventions, they should also use their judgment - if following a convention would make the code less clear or harder to understand, it's acceptable to deviate from it. The primary goal is to write clear, maintainable code that other developers can easily comprehend.


### Naming Conventions
- **Classes**: PascalCase (e.g., `PatientRecord`, `TumorSample`)
- **Variables**: camelCase (e.g., `patientName`, `sampleId`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_SAMPLE_SIZE`, `DEFAULT_TIMEOUT`)
- **Methods**: camelCase, should be verbs (e.g., `getSample()`, `processData()`)
- **Packages**: all lowercase, separated by dots (e.g., `fr.tumorotek.core`)

#### Language Usage in Names
- **Business Logic**: Use French terms for domain-specific concepts
  - Correct: `findByEchantillon()`, `getPrelevement()`, `validateDeriveStatus()`
  - Incorrect: `findBySample()`, `getCollection()`, `validateDerivativeStatus()`

- **Technical/Infrastructure Code**: Use English terms
  - Correct: `saveToDatabase()`, `validateInput()`, `handleException()`
  - Incorrect: `sauvegarderEnBase()`, `validerEntree()`, `gererException()`

##### Examples of Inconsistent Naming (To Avoid)
- `sauvegarderPatient()` - Technical operation should use English
- `validateDonnees()` - Technical validation should use English



While mixing English and French in code is generally not recommended as it:
- Creates cognitive overhead when switching between languages
- Makes the code less accessible to non-French speakers
- Can lead to inconsistent naming patterns
- Complicates documentation and knowledge sharing

The existing codebase extensively uses this mixed approach. Switching entirely to English would:
- Make the code harder to understand for developers familiar with the current patterns
- Create inconsistency with existing modules and APIs
- Risk introducing errors during translation of domain concepts

Therefore, the pragmatic approach is to:
1. Minimize language mixing where possible
2. Use French terms only for core business domain concepts that match existing patterns
3. Keep all technical/infrastructure code in English
4. Document any new French terms clearly in code comments and documentation

This balanced approach maintains consistency with existing code while limiting further language mixing.


#### Formatting Guidelines
- Indent using 4 spaces (not tabs)
- Maximum line length: 120 characters
- One statement per line
- Use blank lines to separate logical blocks
- Place opening braces on the same line as control statements
- Always use braces for control statements, even for single-line blocks

