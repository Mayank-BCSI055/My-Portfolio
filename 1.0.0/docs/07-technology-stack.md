# Portfolio Website - Technology Stack

> **Document :** `07-technology-stack.md`  
> **Project :** Personal Portfolio Website  
> **Version :** 1.0.0  
> **Status :** Planning  
> **Author :** Mayank Baranwal  
> **Last Updated :** 14 September 2026

---

## 1\. Introduction

This document defines the technology stack for the Personal Portfolio Website .

The purpose of this document is to identify the technologies , frameworks , libraries , development tools , databases , services , and platforms that may be used to design , develop , test , and deploy the application .

The technology stack should support the primary requirements of the project while keeping the application :

-   Simple
    
-   Maintainable
    
-   Secure
    
-   Scalable
    
-   Performant
    
-   Easy to Understand
    
-   Suitable for Learning
    
-   Suitable for Professional Demonstration
    

The technology stack may be updated during development if a better technical decision is identified .

Any significant technology change should be documented .

---

## 2\. Technology Stack Overview

The proposed Technology Stack is :

Portfolio Website

│ 

├── Frontend

│      ├── HTML5

│      ├── CSS3

│      ├── JavaScript

│      └── React

│

├── Backend

│      ├── Python

│      └── FastAPI

│

├── Database

│      └── PostgreSQL

│

├── API

│      └── REST

│

├── Testing

│      ├── Pytest

│      └── Frontend Testing Tools

│

├── Version Control

│      └── Git + GitHub

│

├── Development Tools

│      ├── VS Code

│      ├── Postman

│      └── Browser DevTools

│

├── Deployment

│      ├── Frontend Hosting

│      ├── Backend Hosting

│      └── Managed PostgreSQL

│

└── Documentation 

        └── Markdown

The exact hosting providers and supporting libraries will be selected during the implementation and deployment phases .

---

## 3\. Technology Selection Principles

Technology Selection will follow these principles :

### 3.1 Project Requirement First

A technology should be selected because it solves a project requirement .

### 3.2 Simplicity

The project should avoid unnecessary technologies .

### 3.3 Maintainability

The selected technologies should be easy to maintain and understand .

### 3.4 Learning Value

The project should provide meaningful practical experience .

### 3.5 Industry Relevance

Technologies should have practical relevance to modern software development .

### 3.6 Performance

Technologies should support acceptable application performance .

### 3.7 Security

Technologies should support secure development practices .

### 3.8 Documentation

Technologies with strong documentation should be preferred .

### 3.9 Community Support

Technologies with healthy communities and available learning resources should be preferred .

---

## 4\. Frontend Technology Stack

The frontend will be responsible for presenting the portfolio and handling user interaction .

The proposed Frontend Technology Stack is :

React

    │

    ├── JavaScript

    ├── HTML5

    └── CSS3

---

## 5\. HTML5

### 5.1 Purpose

HTML5 will provide the semantic structure of the website .

### 5.2 Responsibilities

HTML will be used for :

-   Page Structure
    
-   Headings
    
-   Paragraphs
    
-   Links
    
-   Forms
    
-   Buttons
    
-   Navigation
    
-   Images
    
-   Semantic Sections
    

### 5.3 Example

### 5.4 Why HTML5 ?

HTML5 provides :

-   Semantic Elements
    
-   Accessibility Support
    
-   Standard Browser Compatibility
    
-   Clear Document Structure
    

### 5.5 Status

**Required**

---

## 6\. CSS3

### 6.1 Purpose

CSS3 will be used to design and style the website .

### 6.2 Responsibilities

CSS will handle :

-   Layout
    
-   Colors
    
-   Typography
    
-   Spacing
    
-   Responsive Design
    
-   Animations
    
-   Transitions
    
-   Component Styling
    

### 6.3 Example

.project-card

{

    padding : 1rem ;

    border-radius : 12px ;

}

### 6.4 Why CSS3 ?

CSS provides direct control over the visual appearance of the website without requiring an unnecessary styling dependency .

### 6.5 Status

**Required**

---

## 7\. JavaScript

### 7.1 Purpose

JavaScript will provide client - side application logic .

### 7.2 Responsibilities

JavaScript may be used for :

-   User Interactions
    
-   Form Handling
    
-   API Communication
    
-   State - Related Logic
    
-   Dynamic Content
    
-   Browser APIs
    

### 7.3 Why JavaScript ?

JavaScript is the standard programming language for browser - based application behavior and is required for react development .

### 7.4 Status

**Required**

---

## 8\. React

### 8.1 Purpose

React will be used as the primary frontend library for building the user interface .

### 8.2 Responsibilities

React will handle :

-   Component - Based UI
    
-   Page Structure
    
-   Reusable Components
    
-   UI State
    
-   User Interactions
    
-   API Integration
    

### 8.3 Example Component Structure

React Application

│

├── Navbar

├── Hero

├── About

├── Skills

├── Projects

├── Experience

├── Education

├── Resume

├── Contact

└── Footer

### 8.4 Why React ?

React is being considered because it :

-   Supports component - based development
    
-   Encourages reusable UI components
    
-   Has a large ecosystem
    
-   Provides practical frontend development experience
    
-   Is widely used in modern web applications
    

### 8.5 Status

**Required**

---

## 9\. Frontend Routing

A Routing Solution may be used if the portfolio requires multiple frontend pages .

Potential Technology :

React Router

### 9.1 Possible Routes

/

   /about

   /skills

   /projects

   /projects/:id

   /experience

   /education

   /resume

   /contact

For Version 1 , The website may alternatively use a single - page layout if that provides a simpler and better user experience .

### 9.2 Decision

**To be finalized during frontend architecture / design .**

---

## 10\. Frontend Styling Strategy

The project will initially prefer Standard CSS or CSS Modules rather than introducing a Large UI Framework unnecessarily .

Possible Approaches :

Option 1

Plain CSS

Option 2

CSS Modules

Option 3

Tailwind CSS

### 10.1 Initial Preference

CSS / CSS Modules

### 10.2 Reason

The portfolio is a relatively small application and should provide an opportunity to understand the underlying CSS Layout and Responsive Design Concepts .

A CSS Framework may be introduced later if there is a clear reason to use one .

---

## 11\. Frontend Animation

Animations will be implemented using lightweight solutions .

Possible approaches :

CSS Transitions

CSS Animations

React - Compatible Animation Library

### 11.1 Initial Preference

Use CSS Transitions and Animations where possible .

### 11.2 Reason

The project does not require a complex animation system .

Animations should improve the user experience without negatively affecting :

-   Performance
    
-   Accessibility
    
-   Maintainability
    

---

## 12\. Backend Technology Stack

The backend will provide server - side functionality .

The proposed Backend Technology Stack is :

Python

     ↓

FastAPI

     ↓

SQLAlchemy / Database Layer

     ↓

PostgreSQL

---

## 13\. Python

### 13.1 Purpose

Python will be used as the backend programming language .

### 13.2 Responsibilities

Python will handle :

-   API Logic
    
-   Business Logic
    
-   Validation
    
-   Database Communication
    
-   Contact Processing
    
-   Error Handling
    

### 13.3 Why Python ?

Python is being selected because :

-   It is the primary backend language for the project .
    
-   It is readable and beginner - friendly .
    
-   It has a large ecosystem .
    
-   It is widely used for backend development .
    
-   It provides strong support for APIs and Databases .
    
-   It aligns with my development goals .
    

### 13.4 Status

**Required**

---

## 14\. FastAPI

### 14.1 Purpose

FastAPI will be used to develop the backend REST API .

### 14.2 Responsibilities

FastAPI will handle :

-   API Routing
    
-   HTTP Requests
    
-   Request Validation
    
-   Response Generation
    
-   API Documentation
    
-   Dependency Management
    
-   Error Handling
    

### 14.3 Example

@app.get (“ /api/projects ”)

def get\_projects() :

        return projects

### 14.4 Why FastAPI ?

FastAPI is being considered because it :

-   Works well with python
    
-   Supports modern API development
    
-   Provides automatic API documentation
    
-   Supports type - based validation
    
-   Is suitable for small and medium applications
    
-   Provides useful practical backend experience
    

### 14.5 Status

**Required**

---

## 15\. Pydantic

### 15.1 Purpose

Pydantic will be used for request and response validation .

### 15.2 Example

class ContactRequest ( BaseModel ) :

        name : str

        email : EmailStr

        message : str

### 15.3 Responsibilities

Pydantic may handle :

-   Request Validation
    
-   Response Schemas
    
-   Data Parsing
    
-   Type Validation
    

### 15.4 Why Pydantic ?

FastAPI integrates naturally with pydantic , making it appropriate for validating API data .

### 15.5 Status

**Required with FastAPI**

---

## 16\. Database Technology

The proposed Database Technology is :

PostgreSQL

PostgreSQL will be used if persistent or dynamic portfolio data is required .

Potential Data includes :

-   Projects
    
-   Skills
    
-   Experience
    
-   Education
    
-   Contact Messages
    

---

## 17\. PostgreSQL

### 17.1 Purpose

PostgreSQL will provide relational data storage .

### 17.2 Responsibilities

PostgreSQL may store :

-   projects
-   skills
-   experience
-   education
-   messages

### 17.3 Why PostgreSQL ?

PostgreSQL is being considered because it :

-   Is a mature relational database
    
-   Supports SQL
    
-   Provides strong data integrity
    
-   Supports relationships
    
-   Is widely used professionally
    
-   Provides valuable database development experience
    

### 17.4 Status

**Planned**

---

## 18\. Database ORM / Database Access

An ORM or Database Toolkit may be used to communicate with PostgreSQL .

Possible Technology :

SQLAlchemy

### 18.1 Responsibilities

It may provide :

-   Database Models
    
-   Queries
    
-   Transactions
    
-   Relationships
    
-   Database Abstraction
    

### 18.2 Alternative

Raw SQL may be used for simple operations where appropriate .

### 18.3 Initial Preference

SQLAlchemy

The final Database Access Strategy will be defined in :

[17-database-requirements.md](http://17-database-requirements.md)

---

## 19\. Database Migration Tool

A Database Migration Tool may be used to manage schema changes .

Possible Technology :

Alembic

### 19.1 Purpose

Alembic can be used to :

-   Create migrations
    
-   Modify database schemas
    
-   Track schema changes
    
-   Apply migrations to different environments
    

### 19.2 Status

**Planned if PostgreSQL and SQLAlchemy are used**

---

## 20\. API Architecture

The backend will expose REST - Style Endpoints .

Example :

-   GET       /api/projects
-   GET       /api/projects/{id}
-   GET       /api/skills
-   GET       /api/experience
-   GET       /api/education
-   POST    /api/contact

### 20.1 API Responsibilities

The API Resposibilities should be to :

-   Accept requests
    
-   Validate input
    
-   Execute business logic
    
-   Communicate with the database
    
-   Return appropriate responses
    
-   Handle errors
    

Detailed API specifications will be documented separately .

---

## 21\. API Documentation

FastAPI’s Automatic Documentation capabilities may be used .

Potential documentation endpoints during development :

/docs

/redoc

These endpoints can help during :

-   API Development
    
-   Manual Testing
    
-   Debugging
    
-   Integration
    

Production exposure of development - oriented documentation may be reviewed separately based on security and operational requirements .

---

## 22\. HTTP and Data Format

The frontend and backend will communicate over HTTP / HTTPS .

The Primary Data Format will be :

JSON

Example :

{

        " title " : " Portfolio Website " ,

        " description " : " A full - stack personal portfolio website " ,

        " technologies " :

        \[

             " React " ,

             " Python " ,

             " FastAPI " ,

             " PostgreSQL "

        \]

}

---

## 23\. Version Control

The project will use :

-   Git

for version control .

The remote repository will be hosted on :

-   GitHub

### 23.1 Git Responsibilities

Git will be used for :

-   Version Tracking
    
-   Branch Management
    
-   Commit History
    
-   Feature Development
    
-   Bug Fixes
    
-   Collaboration
    

---

## 24\. GitHub

### 24.1 Purpose

GitHub will host the project source code and related documentation .

### 24.2 Repository Responsibilities

The Repository Responsibilities should contain :

-   [README.md](http://README.md)
-   .gitignore
-   Source Code
-   Documentation
-   Tests
-   Configuration Files

Sensitive information must not be committed .

---

## 25\. Development Environment

The primary Development Environment will include :

Operating System

        ↓

VS Code

        ↓

Git

        ↓

Node.js / npm

        ↓

Python

        ↓

Virtual Environment

        ↓

PostgreSQL

The exact operating system is not considered a project dependency as long as the development environment supports the required tools .

---

## 26\. Visual Studio Code

### 26.1 Purpose

Visual Studio Code will be used as the primary code editor .

### 26.2 Potential Extensions

Useful extensions may include :

-   Python
    
-   Pylance
    
-   ESLint
    
-   Prettier
    
-   Git - Related Tools
    
-   REST Client
    

Only useful extensions should be installed .

### 26.3 Status

**Development Tool**

---

## 27\. Node.js and npm

### 27.1 Purpose

Node.js and npm will support frontend development and dependency management .

They may be used for :

-   React Development
    
-   Package Installation
    
-   Development Server
    
-   Production Builds
    
-   Frontend Tooling
    

### 27.2 Example

-   npm install
-   npm run dev
-   npm run build

Node.js is primarily a frontend development dependency in this architecture rather than the backend runtime .

---

## 28\. Python Virtual Environment

Python Dependencies should be isolated using a Virtual Environment .

Example :

python -m venv .venv

Activation and Package Installation will depend on the development operating system .

### 28.1 Purpose

Virtual Environments help :

-   Isolate project dependencies
    
-   Avoid global package conflicts
    
-   Make development environments easier to reproduce
    

---

## 29\. Package Management

### 29.1 Frontend

Frontend Dependencies will be managed using :

npm

### 29.2 Backend

Python Dependencies may be managed using :

pip

A Dependency File should be maintained .

Possible Formats :

requirements.txt

or 

A modern python project configuration such as :

pyproject.toml

The final approach will be selected during backend setup .

---

## 30\. Testing Technology

Testing will be performed at multiple levels .

### 30.1 Backend

Potential Tool :

-   pytest

### 30.2 Frontend

Potential Tools :

-   Vitest
-   React Testing Library

### 30.3 End - to - End

A Browser Automation Tool may be introduced if required .

Possible Option :

-   Playwright

The Final Testing Stack will be selected based on project complexity .

---

## 31\. Pytest

### 31.1 Purpose

Pytest will be used for Backend Testing .

### 31.2 Potential Tests

-   API Tests
-   Validation Tests
-   Service Tests
-   Database Tests
-   Error Handling Tests

Example :

def test\_get\_projects() :

        response = client.get ( " /api/projects " )

        assert response.status\_code == 200

### 31.3 Status

**Planned**

---

## 32\. Frontend Testing

Potential Frontend Testing Stack :

-   Vitest
-   React Testing Library

### 32.1 Purpose

Tests may verify :

-   Component Rendering
    
-   User Interaction
    
-   Form Validation
    
-   UI States
    
-   API - Related Behavior
    

### 32.2 Status

**Planned**

---

## 33\. API Testing

API Testing may be performed using :

-   Postman
-   Automated Backend Tests

### 33.1 Postman Use Cases

-   Test GET Endpoints
    
-   Test POST Endpoints
    
-   Test Validation
    
-   Test Error Responses
    
-   Test API Behavior during development
    

---

## 34\. Browser Developer Tools

Browser Developer Tools will be used for :

-   Debugging
    
-   Responsive Testing
    
-   Network Inspection
    
-   Performance Analysis
    
-   Console Debugging
    
-   Accessibility Inspection
    

Supported browsers should include major modern browsers .

---

## 35\. Code Formatting and Linting

Code Quality Tools may be used to maintain consistent formatting .

### 35.1 Frontend

Potential Tools :

-   ESLint
-   Prettier

### 35.2 Backend

Potential Tools :

-   Ruff
-   Black

The final tooling combination will be selected during project setup .

### 35.3 Goal

The objective is to maintain :

-   Consistent Formatting
    
-   Readable Code
    
-   Fewer Common Mistakes
    
-   Consistent Development Practices
    

---

## 36\. Environment - Specific Configuration

Environment - Specific Configuration should not be hard - coded .

Examples :

-   DATABASE\_URL
-   SECRET\_KEY
-   EMAIL\_API\_KEY
-   API\_BASE\_URL

Environment Variables may be stored locally in :

.env

The `.env` file must not be committed to GitHub .

A safe example file may be provided :

.env.example

---

## 37\. Email Service

The Contact Form may require an external email service .

Possible options include :

SMTP

Transactional Email API

The final provider will be selected during backend implementation .

### 37.1 Requirements

The Email Service should :

-   Support reliable message delivery
    
-   Provide appropriate API / SMTP access
    
-   Protect credentials
    
-   Work with the chosen deployment environment
    

---

## 38\. Image and Asset Management

Images may include :

-   Profile Image
    
-   Project Screenshots
    
-   Icons
    
-   Logos
    
-   Decorative Assets
    

The initial approach may store static assets within the frontend project .

Example :

frontend/

 └── src/

           └── assets/

                        ├── images/

                        ├── icons/

                        └── projects/

External cloud storage will only be introduced if the project requires it .

---

## 39\. Deployment Technology

The Deployment Architecture will likely consist of :

Frontend

       ↓

Frontend Hosting

Backend

       ↓

Backend Hosting

Database

       ↓

Managed PostgreSQL

The exact providers will be selected during deployment planning .

Potential Requirements :

-   HTTPS
    
-   Environment Variables
    
-   Custom Domain
    
-   Automatic Deployment
    
-   Logs
    
-   Production Monitoring
    

---

## 40\. Frontend Hosting

The frontend requires a platform capable of hosting the production web application .

Possible categories include :

-   Static Hosting
    
-   Frontend Application Hosting
    
-   CDN - Backed Hosting
    

The final provider will be selected based on :

-   Cost
    
-   Ease of Deployment
    
-   React Support
    
-   Performance
    
-   Custom Domain Support
    
-   Environment Variable Support
    

---

## 41\. Backend Hosting

The Backend requires a platform capable of running the python application .

The platform should support:

-   Python
    
-   FastAPI
    
-   Environment Variables
    
-   HTTPS
    
-   Logs
    
-   Application Restarts
    
-   Production Deployment
    

The final provider will be selected during the deployment phase .

---

## 42\. Database Hosting

If PostgreSQL is used in production , the database may be hosted using a managed PostgreSQL service .

Requirements include :

-   Secure Connection
    
-   Backups where available
    
-   Environment - Based Credentials
    
-   Database Monitoring
    
-   Reliable Uptime
    

---

## 43\. Domain and HTTPS

A Custom Domain may be used for the portfolio .

Example Structure :

[yourdomain.com](http://yourdomain.com)

The Production Website should use :

HTTPS

HTTPS is required to protect communication between users and the application .

---

## 44\. CI / CD

Continuous Integration ( CI ) and Continuous Deployment ( CD ) may be introduced .

Possible Workflow :

Developer

        ↓

Git Commit

        ↓

GitHub

        ↓

Automated Tests

        ↓

Build

        ↓

Deployment

For Version 1 , CI / CD complexity should remain proportional to project size .

---

## 45\. Documentation Technology

Project Documentation will use :

Markdown

Markdown is appropriate for :

-   Project Documentation
    
-   Architecture Documents
    
-   API Documentation
    
-   Development Notes
    
-   README Files
    

Documentation Files will be stored in :

docs/

---

## 46\. Technology Dependency Overview

The major dependencies can be represented as :

                                     React

                                         │

                                         ▼

                                   JavaScript

                                         │

                                         ▼

                                     Browser

                                          │

                                          │ HTTP / HTTPS

                                          ▼

                                      FastAPI

                                           │

                                           ▼

                                        Python

                                            │

                                            ▼

                                     SQLAlchemy

                                             │

                                             ▼

                                     PostgreSQL

Supporting Tools :

                                            Git

                                              │

                                              ▼

                                          GitHub

                                              │

                                              ▼

                                           CI / CD

                                               │

                                               ▼

                                       Deployment

---

## 47\. Technology Responsibilities

| Technology | Responsibility |
| --- | --- |
| HTML5 | Semantic Structure |
| CSS3 | Styling and Responsive Design |
| JavaScript | Client - Side Logic |
| React | Frontend UI |
| Python | Backend Programming |
| FastAPI | REST API |
| Pydantic | Data Validation |
| PostgreSQL | Relational Data Storage |
| SQLAlchemy | Database Access |
| Alembic | Database Migrations |
| Git | Version Control |
| GitHub | Source - Code Hosting |
| npm | Frontend Package Management |
| pip / pyproject | Python Dependency Management |
| Pytest | Backend Testing |
| Vitest | Frontend Testing |
| React Testing Library | UI Testing |
| Postman | API Testing |
| VS Code | Development |
| Markdown | Documentation |

Some technologies in this table are planned rather than mandatory and may be removed if the project does not require them .

---

## 48\. Technology Alternatives

Technology Selection should consider reasonable alternatives .

| Area | Primary Choice | Alternative |
| --- | --- | --- |
| Frontend | React | Vue |
| Backend | FastAPI | Django |
| Database | PostgreSQL | SQLite |
| ORM | SQLAlchemy | Raw SQL |
| API | REST | GraphQL |
| Testing | Pytest | Unittest |
| Frontend Testing | Vitest | Jest |
| Styling | CSS | Tailwind CSS |
| Version Control | Git | None |
| API Testing | Postman | Insomnia |
| Deployment | Cloud Hosting | VPS |

The alternatives are documented for comparison and are not necessarily planned for implementation .

---

## 49\. Technology Selection Decisions

### 49.1 React vs Plain JavaScript

**Decision :** React

**Reason :**

The project is intended to provide practical experience with component - based frontend development .

### 49.2 FastAPI vs Django

**Decision :** FastAPI

**Reason :**

The portfolio requires a relatively small backend focused mainly on APIs .

FastAPI provides a lightweight approach while also providing :

-   Request Validation
    
-   API Routing
    
-   Automatic Documentation
    
-   Python Type Support
    

Django remains a possible future choice if the application evolves into a larger Content - Management Platform .

### 49.3 PostgreSQL vs SQLite

**Decision :** PostgreSQL for production

**Reason :**

PostgreSQL provides stronger production - oriented database experience .

SQLite may still be useful during early local development if simplicity is beneficial .

### 49.4 REST vs GraphQL

**Decision :** REST

**Reason :**

The portfolio does not require the complexity of GraphQL .

REST is sufficient for the expected API Requirements .

### 49.5 CSS vs UI Framework

**Decision :** CSS / CSS Modules initially

**Reason :**

The project is small enough to manage styling without requiring a large component framework .

This also provides Practical CSS and Responsive - Design Experience .

---

## 50\. Technology Version Strategy

Technology Versions should be selected based on :

-   Current Stable Releases
    
-   Long - Term Support where applicable
    
-   Compatibility
    
-   Security
    
-   Project Requirements
    

Exact versions should be recorded in project dependency files rather than manually maintained in this document whenever possible .

For Example :

-   package.json
-   requirements.txt
-   pyproject.toml

This document describes technology choices , not every individual package version .

---

## 51\. Technology Security Requirements

All technologies should be maintained responsibly .

Requirements include :

-   Use supported versions
    
-   Update dependencies when appropriate
    
-   Monitor security advisories
    
-   Avoid abandoned packages
    
-   Avoid unnecessary dependencies
    
-   Keep secrets outside source code
    
-   Review third - party libraries before adoption
    

A package should not be added merely because it solves a problem in three lines of code that could otherwise be solved in five . Dependency trees have enough drama already .

---

## 52\. Technology Performance Requirements

Technology Choices should not unnecessarily reduce application performance .

The project should :

-   Minimize frontend dependencies
    
-   Optimize assets
    
-   Avoid unnecessary API requests
    
-   Avoid excessive JavaScript
    
-   Optimize database queries
    
-   Use production builds
    
-   Load resources efficiently
    

Performance will be measured during testing .

---

## 53\. Technology Maintainability Requirements

The Technology Stack should remain understandable .

Requirements :

-   Use technologies with clear documentation
    
-   Avoid unnecessary frameworks
    
-   Keep dependencies limited
    
-   Separate frontend and backend responsibilities
    
-   Use consistent project structure
    
-   Document important technical decisions
    

The stack should be understandable to another developer reviewing the repository .

---

## 54\. Technology Learning Objectives

The selected stack should help develop practical skills in :

### 54.1 Frontend

-   React
    
-   JavaScript
    
-   CSS
    
-   Responsive Design
    
-   API Integration
    

### 54.2 Backend

-   Python
    
-   FastAPI
    
-   REST APIs
    
-   Validation
    
-   Error Handling
    

### 54.3 Database

-   PostgreSQL
    
-   SQL
    
-   Database Design
    
-   ORM Usage
    

### 54.4 Engineering

-   Git
    
-   Testing
    
-   Documentation
    
-   Deployment
    
-   Security
    

---

## 55\. Technology Scope for Version 1

The minimum Technology Stack for Version 1 is :

Frontend

├── HTML5

├── CSS3

├── JavaScript

└── React

Backend

├── Python

└── FastAPI

Database

└── PostgreSQL

Version Control

├── Git

└── GitHub

Development

├── VS Code

└── Browser DevTools

Testing

├── Pytest

└── Frontend Testing Tools

Documentation

└── Markdown

Additional technologies should only be added when a project requirement justifies them .

---

## 56\. Technologies Explicitly Avoided

The following technologies are not planned for Version 1 unless requirements change :

-   Microservices
    
-   Kubernetes
    
-   GraphQL
    
-   Redis
    
-   Elasticsearch
    
-   Complex Message Queues
    
-   Complex Authentication Systems
    
-   Large CMS Platforms
    
-   Multiple Frontend Frameworks
    
-   Multiple Backend Frameworks
    

These technologies may be useful in other systems but would introduce unnecessary complexity for the current portfolio .

---

## 57\. Technology Change Process

If a technology needs to be replaced or added , The following process should be followed :

New Requirement

            ↓

Identify Technical Problem

            ↓

Evaluate Current Technology

            ↓

Consider Alternatives

            ↓

Evaluate Complexity

            ↓

Evaluate Benefits

            ↓

Make Decision

            ↓

Update Documentation

            ↓

Implement Change

Technology changes should be documented when they significantly affect architecture , development , deployment , or maintenance .

---

## 58\. Technology Evaluation Criteria

A new technology should be evaluated using :

| Criteria | Question |
| --- | --- |
| Requirement | Does it solve a real problem ? |
| Complexity | Does it add unnecessary complexity ? |
| Learning | Does it provide useful learning value ? |
| Performance | Does it provide acceptable performance ? |
| Security | Is it reasonably secure and maintained ? |
| Community | Is support available ? |
| Documentation | Is documentation sufficient ? |
| Maintenance | Can it be maintained easily ? |
| Cost | Does it introduce additional cost ? |
| Compatibility | Does it work with the existing stack ? |

---

## 59\. Technology Decisions Record

Important Technology Decisions should be documented .

Example :

### 59.1 Decision

Use FastAPI instead of Django for the initial backend .

### 59.2 Context

The portfolio requires a relatively small API - Focused backend .

### 59.3 Decision

Use FastAPI .

### 59.4 Reason

-   Lightweight
    
-   Python - Based
    
-   Good Validation Support
    
-   Automatic API Documentation
    
-   Suitable for the project size
    

### 59.5 Consequences

Positive :

-   Simple API Architecture
    
-   Faster Initial Setup
    
-   Good Learning Experience
    

Negative :

-   Additional libraries may be required for some functionality
    
-   A future CMS may require more development work
    

---

## 60\. Technology Success Criteria

The Technology Stack will be considered successful when :

-   All required application functionality can be implemented
    
-   Frontend and Backend communicate correctly
    
-   Database Operations work correctly
    
-   Development Environment is reproducible
    
-   Dependencies are documented
    
-   Application can be tested
    
-   Application can be deployed
    
-   No unnecessary technologies are used
    
-   Security Requirements are addressed
    
-   Performance Requirements are acceptable
    
-   The stack remains maintainable
    

---

## 61\. Technology Stack Checklist

### 61.1 Frontend

-   HTML5 selected
    
-   CSS3 selected
    
-   JavaScript selected
    
-   React selected
    
-   Routing Decision made
    
-   Styling Strategy selected
    

### 61.2 Backend

-   Python selected
    
-   FastAPI selected
    
-   Validation Approach selected
    
-   API Architecture defined
    

### 61.3 Database

-   PostgreSQL evaluated
    
-   Database Access approach selected
    
-   Migration Strategy selected
    

### 61.4 Development

-   VS Code configured
    
-   Git configured
    
-   GitHub Repository created
    
-   Node.js configured
    
-   Python Environment configured
    

### 61.5 Testing

-   Backend Testing approach selected
    
-   Frontend Testing approach selected
    
-   API Testing approach selected
    

### 61.6 Deployment

-   Frontend Hosting evaluated
    
-   Backend Hosting evaluated
    
-   Database Hosting evaluated
    
-   Domain Strategy defined
    
-   HTTPS planned
    

### 61.7 Security

-   Environment Variables defined
    
-   Secrets excluded from Git
    
-   Dependency Management defined
    
-   Production Security Requirements defined
    

---

## 62\. Final Technology Architecture

The Planned Technology Architecture can be summarized as :

                                           USER

                                               │

                                               ▼

                             ┌─────────────┐

                             │          Browser           │

                             └──────┬──────┘

                                                │

                                               ▼

                             ┌─────────────┐

                             │             React            │

                             │          JavaScript        │

                             │               CSS             │

                             └──────┬──────┘

                                               │

                                    HTTP / HTTPS

                                                │

                                                ▼

                              ┌─────────────┐

                              │            FastAPI          │

                              │            Python          │

                             └──────┬──────┘

                                                │

                                                ▼

                             ┌─────────────┐

                              │       SQLAlchemy      │

                             └──────┬──────┘

                                                │

                                                ▼

                              ┌─────────────┐

                              │        PostgreSQL        │

                              └─────────────┘

Supporting development ecosystem :

                                       Git + GitHub 

                                                 │

               ┌────────────┼────────────┐

               ▼                              ▼                               ▼ 

           Testing                      CI / CD                Documentation

                │                               │                                │

           Pytest                       Deploy                     Markdown

           Vitest

---

## 63\. Final Technology Stack

The current proposed Version 1 stack is :

| Layer | Technology | Status |
| --- | --- | --- |
| Markup | HTML5 | Selected |
| Styling | CSS3 | Selected |
| Programming | JavaScript | Selected |
| Frontend | React | Selected |
| Backend Language | Python | Selected |
| Backend Framework | FastAPI | Selected |
| Validation | Pydantic | Selected |
| API | REST | Selected |
| Database | PostgreSQL | Planned |
| ORM | SQLAlchemy | Planned |
| Migrations | Alembic | Planned |
| Backend Testing | Pytest | Planned |
| Frontend Testing | Vitest + React Testing Library | Planned |
| API Testing | Postman | Planned |
| Version Control | Git | Selected |
| Repository | GitHub | Selected |
| Code Editor | VS Code | Selected |
| Package Manager | npm / pip | Selected |
| Documentation | Markdown | Selected |
| Deployment | To Be Decided | Pending |
| Email Service | To Be Decided | Pending |

---

## 64\. Summary

The Personal Portfolio Website will use a relatively simple full - stack technology stack .

The current planned architecture is :

React

    ↓

REST API

    ↓

FastAPI

    ↓

Python

    ↓

SQLAlchemy

    ↓

PostgreSQL

The Stack has been selected to balance :

-   Simplicity
    
-   Learning
    
-   Professional Relevance
    
-   Maintainability
    
-   Performance
    
-   Security
    
-   Scalability
    

The project will avoid unnecessary technologies and architectural complexity during Version 1 .

The central technology principle is :

> **Choose the simplest technology that solves the actual project requirement while providing meaningful development value .**

Technology Decisions may change as requirements become clearer . Any significant changes should be evaluated and documented rather than introduced casually .

---

## 65\. Document Change History

| Version | Date | Author | Changes |
| --- | --- | --- | --- |
| 1.0.0 | 14 Sep 2026 | Mayank Baranwal | Initial Technology Stack |

---