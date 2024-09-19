# Introduction

## Project Overview

The TK® software is a tool for managing collections of biological samples. It includes the following features:

- Reception information:
  - Patient and disease
  - Samples and sampling information
  - Information about the transfers 
- Storage and inventory management
- Management of derived products
- Management of sample transfers
- Customizable management of patient/sample/derived product/transfers annotations by collection
- Querying based on multiple criteria
- Quality management of samples
- Generation of reports (graphs and indicators)
- Integration with other systems:
  - Importing patient identities from the Hospital Information System (HIS)
  - Importing from Excel files
  - Importing from Laboratory Information Management Systems (LIMS) such as DIAMIC and APIX
  - Exporting to catalogs (such as Cancéropôle Grand Sud-Ouest, BIOCAP, biobanks, etc.)
  
### Administration of the software:

- Account and authorization management
- Collaboration settings
- Storage structure management
- Collection and platform management
- Annotation settings by collection
- Collection-specific activity history
- Printing barcode labels

## Purpose and Scope

### Purpose

The purpose of this technical document is to provide developers and non-developers with a comprehensive guide on best practices for a specific project. It aims to offer practical advice, recommendations, and guidelines to ensure efficient development, implementation, and maintenance of the project. This document is written in a simple and accessible manner, allowing both technical and non-technical persons to understand and apply the best practices outlined within.

### Scope

This document covers various aspects of the project, including:

- Architecture
- Development environment setup
- Coding standards
- Version control
- Framework-specific practices
- Java development best practices
- Security considerations
- Performance optimization
- Testing and quality assurance 
- Documentation and collaboration 
Deployment and operations 
Troubleshooting and maintenance 

It aims to provide a holistic overview of the project lifecycle and address key areas that contribute to its success. The document also includes resources and references for further exploration and learning.

# Project Architecture

## Project Architecture Overview
The TK project is a complex Java-based application with a rich architecture that encompasses multiple components and technologies. In this section, we will provide an overview of its high-level architecture, component interaction, and dependencies, as well as an explanation of the integration of ZK (ZK Framework) with Java. This project also leverages Spring and Spring Security for various aspects of application development.

In summary, the TK project follows a well-structured architecture, combining various components and technologies such as ZK, Java, Spring, and Spring Security. Understanding this architecture is crucial for effective development, maintenance, and enhancement of the application. Additionally, it's essential to regularly update dependencies, as discussed in a previous section, to ensure the project remains secure and up-to-date.

## High-Level Architecture: TK Packages

The TK project's high-level architecture can be divided into several key components, each serving a specific purpose:

1. **Model**
   - The Model layer defines the data structures and is accessed by the DAOs for database operations.
   - **Entities:** The core data structures of the application, representing entities such as Echantillon, Patient etc., and any other domain-specific/business logic objects.
   - **DAO (Data Access Objects):** Responsible for interacting with the database, including CRUD (Create, Read, Update, Delete) operations on entities. DAOs abstract the underlying data storage.

2. **Install**
   - **Artifacts:** This package contains artifacts necessary for deployment, including configuration files, scripts, and resources needed to install and configure the application.

3. **Dashboard**
   - **Dashboard Specific to AP-HP:** This component is designed to present various instances of TumoroteK through a specialized dashboard. It includes icons and HTML templates.

4. **Interface**
   - **Integration with Other Applications:** This package contains code relevant to interfacing with other external applications or systems, facilitating data exchange and integration.

5. **Core Package**
   - **Managers:** The core business logic and application services are defined here. Managers orchestrate various actions...

6. **Webapp Package**
   - **Frontend Components:** This package houses all frontend-related components...

## Explanation of ZK and Java Integration

The TK project integrates the ZK Framework with Java to build its user interfaces...
