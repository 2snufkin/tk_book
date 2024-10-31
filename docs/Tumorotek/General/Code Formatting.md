# Code Formatting Standards in Tumorotek

In the Tumorotek project, consistent code formatting across all developers is considered essential for maintaining code quality and team efficiency. To enforce this consistency, the team has implemented several measures:

### Mandatory Formatter Configuration
All developers must use the standardized APHP_Java_Formatter configuration file that defines the project's formatting rules. This file is found here under the Files section. It should be imported into each developer's IDE. It contains a set of rules that determine how Java code should be formatted, including aspects like indentation, line breaks, spacing, and brace placement.


### IDE Integration
Development environments are configured to automatically apply formatting:
- Eclipse and IntelliJ IDEA are set up to use the same formatter configuration
- Auto-formatting on save is enabled by default
- Project-specific formatter settings override any personal preferences

### Team Culture
The development team has fostered a culture where consistent formatting is valued:
- New team members are immediately onboarded with the formatting requirements
- Code reviews include formatting checks as a standard step
- Documentation clearly explains the importance of following these standards
- Regular team discussions reinforce the benefits of consistent formatting

This systematic approach has resulted in a codebase with highly consistent formatting, making it easier to maintain and evolve the application over time.


## Purpose
- Maintains consistent code formatting across the entire project
- Makes code reviews easier by eliminating style-related discussions
- Improves code readability by enforcing standardized formatting
- Helps new developers quickly adapt to the project's coding style
- Reduces merge conflicts caused by formatting differences

## Key Features
- Uses spaces for indentation (3 spaces)
- Maximum line length of 130 characters
- Specific rules for brace placement
- Standardized spacing around operators and keywords
- Consistent formatting for annotations and comments
- Java 1.7 compliance settings

## How to Use

### In Eclipse
1. Go to `Window > Preferences > Java > Code Style > Formatter`
2. Click on "Import" button
3. Select the `APHP_Java_Formatter.xml` file
4. Click "Apply and Close"
5. To format code:
   - Use `Ctrl + Shift + F` for the current file
   - Or right-click in editor > Source > Format

### In IntelliJ IDEA
1. Install the "Eclipse Code Formatter" plugin:
   - Go to `Settings > Plugins`
   - Search for "Eclipse Code Formatter"
   - Install and restart IntelliJ
2. Configure the formatter:
   - Go to `Settings > Other Settings > Eclipse Code Formatter`
   - Check "Use the Eclipse code formatter"
   - Select the `APHP_Java_Formatter.xml` file in "Eclipse Java Formatter config file"
3. To format code:
   - Use `Ctrl + Alt + L` for the current file
   - Or right-click in editor > Reformat Code

## Note
Make sure all team members use the same formatter configuration to maintain consistency throughout the project. 