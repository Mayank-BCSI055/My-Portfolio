# Portfolio Website - Website Architecture

> **Document :** `08-website-architecture.md`  
> **Project :** Personal Portfolio Website  
> **Version :** 1.0.0  
> **Status :** Planning  
> **Author :** Mayank Baranwal  
> **Last Updated :** 14 September 2026

---

## 1\. Introduction

This document defines the architecture of the Personal Portfolio Website .

The purpose of this document is to describe how the different parts of the application are organized , how they communicate with each other , how data flows through the system , and how the application will be deployed .

The architecture will provide a high - level technical blueprint for the project .

It will guide :

-   Frontend Development
    
-   Backend Development
    
-   Database Design
    
-   API Design
    
-   Security Implementation
    
-   Testing
    
-   Deployment
    
-   Future Maintenance
    

The architecture should remain simple enough for the current project while allowing the application to grow in the future .

---

## 2\. Architecture Overview

The Personal Portfolio Website will use a **client - server architecture** .

The Major Components are :

User

    ↓

Web Browser

    ↓

Frontend Application

    ↓

REST API

    ↓

Backend Application

    ↓

Database

Supporting services may include :

Frontend

     ↓

Hosting Platform

Backend

     ↓

Hosting Platform

Database

     ↓

Managed PostgreSQL

Contact Form

     ↓

Email Service

---

## 3\. Architecture Goals

The architecture should achieve the following goals :

### 3.1 Simplicity

The architecture should be easy to understand and maintain .

### 3.2 Separation of Responsibilities

Each major part of the application should have a clearly defined responsibility .

### 3.3 Maintainability

Changes to one part of the system should have minimal unnecessary impact on other parts .

### 3.4 Security

Sensitive operations and credentials should remain on the server side .

### 3.5 Performance

The architecture should provide a responsive user experience .

### 3.6 Scalability

The application should be capable of growing without requiring a complete redesign .

### 3.7 Learning Value

The architecture should provide practical experience with modern full-stack development .

---

## 4\. Architecture Principles

The following principles will guide architectural decisions .

### 4.1 Principle 1 : Separation of Concerns

Frontend , Backend , Database , and External Services should have separate responsibilities .

### 4.2 Principle 2 : Keep It Simple

The application should not use complex architecture unless the project actually requires it .

### 4.3 Principle 3 : API - Based Communication

The frontend and backend should communicate through defined API endpoints .

### 4.4 Principle 4 : Secure Server - Side Operations

Sensitive operations should be handled by the backend .

### 4.5 Principle 5 : Reusable Components

Frontend components and Backend services should be reusable where appropriate .

### 4.6 Principle 6 : Document Important Decisions

Major architectural decisions should be documented .

### 4.7 Principle 7 : Build for the Current Requirement

The architecture should solve the current problem rather than imaginary problems that may never exist .

---

## 5\. High - Level Architecture

The overall system can be represented as :

                                           USER

                                               │

                                               ▼

                         ┌─────────────────┐

                         │               Browser                 │

                         └────────┬────────┘

                                                 │

                                                ▼

                          ┌─────────────────┐

                          │             Frontend                 │

                          │                React                    │

                          └────────┬────────┘

                                                  │

                                        HTTP / HTTPS

                                                  │

                                                 ▼

                           ┌─────────────────┐

                           │             Backend API           │

                           │                 FastAPI               │

                           │                 Python                │

                           └────────┬────────┘

                                                   │

                                                  ▼

                            ┌─────────────────┐

                            │              Database               │

                            │             PostgreSQL             │

                            └─────────────────┘

External Services :

                            ┌─────────────────┐

                            │            Email Service           │

                            └────────┬────────┘

                                                    │

                                                   ▼

                                         Contact System

---

## 6\. Major System Components

The system will contain the following major components :

Portfolio Website

│

├── Frontend

│

├── Backend API

│

├── Database

│

├── Contact / Email Service

│

├── Static Assets

│

└── Deployment Infrastructure

Each component has a specific responsibility .

---

## 7\. Frontend Architecture

The frontend will be responsible for everything the visitor interacts with directly .

### 7.1 Responsibilities

The frontend will handle :

-   User Interface
    
-   Navigation
    
-   Page Rendering
    
-   Component Rendering
    
-   User Interactions
    
-   Form Input
    
-   Client - Side Validation
    
-   API Communication
    
-   Loading States
    
-   Error States
    
-   Success States
    
-   Responsive Behavior
    

### 7.2 Technology

-   React
-   JavaScript
-   HTML5
-   CSS3

---

## 8\. Frontend Layer Structure

The frontend may be organized into the following layers :

Frontend

│

├── Pages

│

├── Components

│

├── Layouts

│

├── Services

│

├── Hooks

│

├── Utilities

│

├── Assets

│

└── Styles

---

## 9\. Frontend Pages

Pages represent major application views .

Possible pages include :

pages/

│

├── Home

├── About

├── Projects

├── Project Details

├── Experience

├── Education

├── Resume

└── Contact

For a single - page portfolio , Some of these may instead be implemented as sections .

The final approach will be determined during frontend design .

---

## 10\. Frontend Components

Reusable UI Elements should be implemented as components .

Example :

components/

│

├── Navbar

├── Footer

├── Hero

├── Section Heading

├── Button

├── Skill Card

├── Project Card

├── Experience Card

├── Education Card

├── Social Links

├── Contact Form

└── Loading Spinner

### 10.1 Component Principle

A Component should have a clear responsibility .

For Example :

Project Card

        ↓

Display Project Information

It should not also handle unrelated database logic .

---

## 11\. Frontend Service Layer

The Frontend Service Layer will handle communication with the backend API .

Example :

services/

│

├── Project Service

├── Skill Service

├── Experience Service

├── Education Service

└── Contact Service

Example Responsibility :

Project Service

          ↓

GET /api/projects

          ↓

Return Project Data

This keeps API communication separate from UI components .

---

## 12\. Frontend State Management

The portfolio does not initially require a complex global state - management system .

Possible state categories include :

Local Component State

              │

              ├── Form Input

              ├── Loading State

              ├── Error State

              └── UI State

If application complexity increases , A dedicated state - management solution may be considered .

### 12.1 Initial Strategy

Prefer :

-   React State
    
-   React Context where appropriate
    
-   Local Component State
    

Avoid introducing a global state library unless a real requirement appears .

---

## 13\. Backend Architecture

The backend will provide server - side functionality .

### 13.1 Technology

-   Python
-   FastAPI

### 13.2 Responsibilities

The backend will handle :

-   API Requests
    
-   Validation
    
-   Business Logic
    
-   Database Communication
    
-   Contact Processing
    
-   Error Handling
    
-   Security - Sensitive Operations
    

---

## 14\. Backend Layer Structure

The backend may follow a layered architecture :

Backend

│

├── API / Routes

│

├── Schemas

│

├── Services

│

├── Models

│

├── Database

│

├── Core

│

└── Utilities

The goal is to keep responsibilities separated .

---

## 15\. API / Route Layer

The Route Layer will receive HTTP requests .

Example :

-   GET        /api/projects
-   POST      /api/contact

Routes should :

-   Receive requests
    
-   Validate input through schemas
    
-   Call appropriate services
    
-   Return responses
    

Routes should avoid containing large amounts of business logic .

---

## 16\. Schema Layer

Schemas will define the expected structure of API data .

Example :

class ContactRequest ( BaseModel ) :

      name : str

      email : EmailStr

      message : str

Schemas may define :

-   Request Models
    
-   Response Models
    
-   Validation Rules
    

---

## 17\. Service Layer

The Service Layer will contain application logic .

Example :

Contact Route

          ↓

Contact Service

          ↓

Validate / Process Message

          ↓

Database / Email Service

The Service Layer should prevent route files from becoming large collections of unrelated logic .

---

## 18\. Database Layer

The Database Layer will manage communication with PostgreSQL .

Possible Structure :

database/

│

├── Connection

├── Models

├── Repositories

└── Migrations

Responsibilities include :

-   Database Connection
    
-   Queries
    
-   Transactions
    
-   CRUD Operations
    
-   Data Persistence
    

---

## 19\. Backend Models

Models represent persistent data .

Potential Models :

-   Project
-   Skill
-   Experience
-   Education
-   Message

Example :

Project

│

├── id

├── title

├── description

├── image

├── github\_url

├── live\_url

├── created\_at

└── updated\_at

The detailed schema will be documented in :

[17-database-requirements.md](http://17-database-requirements.md)

If that document is used in the final documentation structure .

---

## 20\. Backend Core Layer

The Backend Core Layer will contain application - wide configuration and infrastructure .

Potential Responsibilities :

core/

│

├── configuration

├── security

├── environment

└── logging

Examples :

-   Environment Configuration
    
-   Database Configuration
    
-   Application Settings
    
-   Security Configuration
    

---

## 21\. Backend Utilities

Backend Utility functions should contain small reusable operations .

Examples :

utils/

│

├── validation

├── formatting

└── helpers

Utilities should remain small and focused .

Business Logic should not be hidden inside generic utility files .

---

## 22\. Database Architecture

The database will use a relational model .

Proposed Database :

-   PostgreSQL

Possible Entities :

-   Projects
-   Skills
-   Experience
-   Education
-   Messages

Relationships will be defined during database design .

---

## 23\. Database Responsibility

The database will be responsible for persistent data .

It may store :

-   Project Information
    
-   Skill Information
    
-   Experience
    
-   Education
    
-   Contact Messages
    

Static Content may remain inside the frontend if database storage provides no meaningful benefit .

---

## 24\. API Architecture

The frontend and backend will communicate through REST APIs .

Example :

Frontend

       │

       │ GET /api/projects

      ▼

Backend

       │

      ▼

Database

       │

      ▼

Backend

       │

       │ JSON Response

      ▼

Frontend

---

## 25\. API Endpoint Structure

The API may use :

/api

as the base path .

Example :

-   /api/projects
-   /api/projects/{id}
-   /api/skills
-   /api/experience
-   /api/education
-   /api/contact

The final API contract will be documented separately .

---

## 26\. Data Flow Architecture

The general Data Flow is :

User

               ↓

Browser

               ↓

React Component

               ↓

Frontend Service

               ↓

HTTP Request

               ↓

FastAPI Route

               ↓

Validation

               ↓

Service Layer

               ↓

Database Layer

               ↓

PostgreSQL

The response travels in the opposite direction :

PostgreSQL

              ↓

Database Layer

              ↓

Service Layer

              ↓

FastAPI Route

              ↓

JSON Response

              ↓

Frontend Service

              ↓

React Component

              ↓

User

---

## 27\. Project Data Flow

Example Project Retrieval :

User Opens Projects

              ↓

React Projects Page

              ↓

Project Service

              ↓

GET /api/projects

              ↓

FastAPI

              ↓

Project Service

              ↓

PostgreSQL

              ↓

Project Data

              ↓

JSON Response

              ↓

React

              ↓

Project Cards

---

## 28\. Contact Form Data Flow

The Contact Form Data Flow will follow :

Visitor

               ↓

Contact Form

                ↓

Client Validation

                ↓

POST /api/contact

                ↓

FastAPI

                ↓

Request Validation

                ↓

Contact Service

                ↓

Database

                ↓

Email Service

                ↓

Success Response

                 ↓

Frontend

                 ↓

Success Message

The exact order between database storage and email delivery may change based on the selected email architecture .

---

## 29\. Error Flow

Errors should be handled at appropriate layers .

Example :

User Input

                 ↓

Invalid Input

                 ↓

Frontend Validation

                 ↓

Display Error

If invalid input reaches the backend :

Frontend

                 ↓

Backend

                 ↓

Validation

                 ↓

Validation Error

                ↓

HTTP Error Response

                 ↓

Frontend

                 ↓

Display Error

Unexpected backend errors should not expose internal implementation details to users .

---

## 30\. Authentication Architecture

Authentication is not required for public visitors in Version 1 .

Therefore :

Public Visitor

                 ↓

Frontend

                 ↓

Public API

No user account system will initially be implemented .

If an admin dashboard is introduced later , authentication may be added .

Future Architecture :

Admin

                    ↓

Login

                    ↓

Authentication

                    ↓

Authorization

                    ↓

Admin Dashboard

                    ↓

Protected API

---

## 31\. Security Architecture

Security responsibilities will be distributed across layers .

### 31.1 Frontend

-   Client - Side Validation
    
-   Safe Rendering
    
-   Secure API Communication
    

### 31.2 Backend

-   Request Validation
    
-   Authorization where required
    
-   Input sanitization where appropriate
    
-   Security Headers / Configuration
    
-   Error Handling
    

### 31.3 Database

-   Secure Credentials
    
-   Restricted Access
    
-   Parameterized Queries / ORM
    
-   Production Database Security
    

### 31.4 Infrastructure

-   HTTPS
    
-   Secure Environment Variables
    
-   Access Control
    
-   Secure Deployment Configuration
    

---

## 32\. Environment Architecture

The project will have multiple environments .

Development

              │

             ▼

Testing

              │

              ▼

Production

### 32.1 Development

Used for Local Development .

Example :

localhost

### 32.2 Testing

Used for Automated and Integration Testing .

### 32.3 Production

Used by public visitors .

Production Configuration should never depend on development secrets .

---

## 33\. Development Architecture

The Local Development Environment may contain :

Developer Machine

│

├── Frontend

│      └── React Dev Server

│

├── Backend

│      └── FastAPI Server

│

└── Database

        └── PostgreSQL

Example Communication :

Reactlocalhost:3000

│

▼

FastAPIlocalhost:8000

│

▼

PostgreSQLlocalhost:5432

The exact ports may change .

---

## 34\. Production Architecture

The Production Architecture may look like :

Backend

      │

     ▼

Email Service

      │

      ▼

Owner Email

---

## 35\. Static Asset Architecture

Static Assets may include :

-   Images
    
-   Icons
    
-   Fonts
    
-   Project Screenshots
    
-   Resume
    

Possible Structure :

frontend/

│

└── src/

        └── assets/

                ├── images/

                ├── icons/

                ├── projects/

                └── documents/

Large or Frequently changing assets may later be moved to external storage .

---

## 36\. Resume Architecture

The Resume may be stored as a static document .

Possible Flow :

Visitor

     ↓

Resume Button

      ↓

Resume PDF

      ↓

Browser

      ↓

View / Download

The Resume does not initially require database storage .

---

## 37\. External Services

External Services may include :

Portfolio

     │

     ├── Email Service

     ├── GitHub

     ├── LinkedIn

     └── Hosting Provider

External Services should only be integrated where they provide meaningful value .

---

## 38\. GitHub Integration

Version 1 may simply provide links to GitHub Repositories .

Example :

Project

     ↓

GitHub Button

     ↓

GitHub Repository

A future version may retrieve project information automatically through the GitHub API .

Future Architecture :

GitHub API

       ↓

Backend

       ↓

Portfolio API

       ↓

Frontend

This should not be implemented until there is a clear requirement .

---

## 39\. Email Architecture

The contact system may use an external email service .

Possible Architecture :

Visitor

    ↓

Contact Form

    ↓

Frontend

    ↓

Backend

    ↓

Email Service

    ↓

Email Inbox

The backend should protect the email service credentials .

Email Credentials must never be exposed to the frontend .

---

## 40\. Caching Strategy

Version 1 does not require a complex caching architecture .

Possible Future Caching :

Frontend

     ↓

Cache

     ↓

API

     ↓

Database

Caching may be introduced if :

-   API traffic increases
    
-   Database queries become expensive
    
-   Performance testing identifies a need
    

No caching system should be added simply because production systems apparently enjoy having more infrastructure than users .

---

## 41\. Logging Architecture

The backend should provide useful logs .

Potential log categories :

INFO

WARNING

ERROR

Logs may contain :

-   Request Information
    
-   Application Events
    
-   Errors
    
-   Database Issues
    
-   External Service Failures
    

Sensitive information should not be logged .

Examples of information that should not be logged :

-   Passwords
    
-   API Keys
    
-   Secret Tokens
    
-   Sensitive Personal Information
    

---

## 42\. Monitoring Architecture

Version 1 may use basic monitoring provided by the hosting platform .

Potential Monitoring Areas :

-   Application Availability
    
-   Backend Errors
    
-   Deployment Failures
    
-   Database Availability
    

Advanced monitoring may be introduced later if required .

---

## 43\. Backup Architecture

Production database backups should be considered if the database contains important persistent data .

Potential Approach :

PostgreSQL

       ↓

Managed Backup

       ↓

Recovery

The exact backup strategy depends on the selected database hosting provider .

---

## 44\. Scalability Strategy

The application should initially scale vertically or through the capabilities of the selected hosting platform .

If traffic increases :

Current Frontend

      ↓

Backend

     ↓

Database

Potential Future Architecture :

                Load Balancer

                            │

    ┌────────┴────────┐

    ▼                                           ▼

Backend 1                             Backend 2

    │                                             │

    └────────┬────────┘

                           ▼

                    PostgreSQL

This level of architecture is not required for Version 1 .

---

## 45\. Deployment Architecture

The Deployment Process may follow :

Developer

       ↓

Git Commit

       ↓

GitHub

       ↓

Build

       ↓

Tests

       ↓

Production Deployment

       ↓

Health Check

       ↓

Live Website

Deployment may be manual initially and automated later .

---

## 46\. CI / CD Architecture

A Future CI / CD Workflow may be :

Developer

        ↓

Push to GitHub

        ↓

CI Pipeline

        │

        ├── Install Dependencies

        ├── Run Linting

        ├── Run Tests

        └── Build Application

                       │

                       ▼

               Deployment

                        │

                        ▼

                 Production

CI / CD should be introduced gradually .

---

## 47\. Folder Architecture

The project may use a Monorepo Structure :

portfolio/

│

├── frontend/

│

├── backend/

│

├── docs/

│

├── tests/

│

├── .gitignore

├── [README.md](http://README.md)

└── LICENSE

A more Detailed Structure may be:

portfolio/

│

├── frontend/

│      ├── public/

│      ├── src/

│      │      ├── assets/

│      │      ├── components/

│      │      ├── pages/

│      │      ├── services/

│      │      ├── hooks/

│      │      ├── utils/

│      │      └── styles/

│     ├── package.json

│     └── [README.md](http://README.md)

│

├── backend/

│      ├── app/

│       │      ├── api/

│       │      ├── core/

│       │      ├── models/

│       │      ├── schemas/

│       │      ├── services/

│       │      ├── database/

│       │      └── utils/

│       ├── tests/

│       ├── requirements.txt

│       └── [README.md](http://README.md)

│

├── docs/

│

├── .gitignore

└── [README.md](http://README.md)

The exact structure may change during implementation.

---

## 48\. Frontend - Backend Boundary

The Frontend and Backend should have clear responsibilities .

### 48.1 Frontend Should Handle

-   Presentation
    
-   User Interaction
    
-   Client - Side Validation
    
-   UI State
    
-   API Requests
    

### 48.2 Backend Should Handle

-   Business Logic
    
-   Server - Side Validation
    
-   Database Operations
    
-   Sensitive Operations
    
-   External Service Credentials
    
-   Security - Sensitive Functionality
    

### 48.3 Example

Incorrect :

Frontend

      ↓

Direct Database Access

Correct :

Frontend

      ↓

API 

      ↓

Backend

      ↓

Database

---

## 49\. Database Boundary

The database should only be accessed by the backend .

Frontend

      │

      X

      │

Database

Frontend

       │

      ▼

Backend

      │

      ▼

Database

This prevents database credentials and direct database access from being exposed to public users .

---

## 50\. External Service Boundary

External Services should normally be accessed through the backend when credentials or sensitive operations are involved .

Example :

Frontend

       ↓

Backend

       ↓

Email Service

The frontend should not contain private API keys .

---

## 51\. Dependency Direction

The architecture should generally follow :

Frontend

       ↓

API

       ↓

Service Layer

       ↓

Database Layer

       ↓

Database

Lower - Level Infrastructure should not depend on frontend components .

---

## 52\. Request Lifecycle

A typical API request will follow :

1\. User Action

          ↓

2\. React Component

          ↓

3\. API Service

          ↓

4\. HTTP Request

          ↓

5\. FastAPI Route

          ↓

6\. Request Validation

          ↓

7\. Service Layer

          ↓

8\. Database Layer

          ↓

9\. PostgreSQL

          ↓

10\. Response

          ↓

11\. React State

          ↓

12\. UI Update

This flow should remain predictable .

---

## 53\. Contact Request Lifecycle

The Contact Request Lifecycle may follow :

1\. Visitor Fills Form

                 ↓

2\. Frontend Validation

                 ↓

3\. POST      /api/contact

                 ↓

4\. Backend Receives Request

                 ↓

5\. Pydantic Validation

                 ↓

6\. Contact Service

                 ↓

7\. Store Message

                 ↓

8\. Send Email

                 ↓

9\. Return Response

                 ↓

10\. Frontend Displays Result

---

## 54\. Failure Handling Architecture

The system should handle failures gracefully .

### 54.1 Frontend Failure

API unavailable

           ↓

Show user - friendly message

### 54.2 Backend Failure

Unexpected Error

            ↓

Log Error

            ↓

Return Safe Response

### 54.3 Database Failure

Database Unavailable

           ↓

Backend Logs Failure

           ↓

Return Appropriate Error

           ↓

Frontend Displays Message

### 54.4 Email Failure

Email Service Unavailable

            ↓

Record Failure

            ↓

Return Appropriate Status

The exact behavior will depend on the final contact - service design .

---

## 55\. Security - Sensitive Boundaries

Security - Sensitive Boundaries include :

Public Internet

         │

        ▼

Frontend

         │

         │ HTTPS

        ▼

Backend

         │

         ▼

Database

The backend should act as the primary security boundary between public requests and private resources .

---

## 56\. Performance Architecture

Performance Architecture should be considered at each layer .

### 56.1 Frontend

-   Optimized Images
    
-   Efficient Components
    
-   Production Builds
    
-   Lazy Loading where appropriate
    

### 56.2 API

-   Efficient responses
    
-   Minimal unnecessary processing
    
-   Appropriate pagination if required
    

### 56.3 Database

-   Efficient Queries
    
-   Appropriate Indexes
    
-   Avoid Unnecessary Requests
    

### 56.4 Infrastructure

-   HTTPS
    
-   CDN where appropriate
    
-   Appropriate Hosting Resources
    

---

## 57\. Accessibility Architecture

Accessibility should be integrated into the frontend architecture .

Components should support :

-   Semantic HTML
    
-   Keyboard Navigation
    
-   Focus Management
    
-   Accessible Forms
    
-   Screen - Reader - Friendly Labels
    
-   Appropriate Contrast
    

Accessibility should not be treated as a final patch .

---

## 58\. SEO Architecture

SEO - Related responsibilities will primarily exist within the frontend .

The frontend should provide :

-   Page Titles
    
-   Meta Descriptions
    
-   Semantic HTML
    
-   Proper Headings
    
-   Open Graph Metadata
    
-   Search - Engine - Friendly Content
    

Server - Side Rendering or Advanced SEO Architecture is not required unless project requirements change .

---

## 59\. Architecture Trade - Offs

Every architecture decision has trade - offs .

### 59.1 React

**Benefits**

-   Component - Based
    
-   Large Ecosystem
    
-   Good Learning Value
    

**Trade - Offs**

-   Additional JavaScript
    
-   More project setup than Plain HTML/CSS
    

### 59.2 FastAPI

**Benefits**

-   Lightweight
    
-   Python - Based
    
-   Good API Support
    

**Trade - Offs**

-   Requires additional backend components for a larger application

### 59.3 PostgreSQL

**Benefits**

-   Reliable Relational Database
    
-   Strong SQL Support
    
-   Professional Relevance
    

**Trade - Offs**

-   More infrastructure than a static portfolio requires

### 59.4 Separate Frontend and Backend

**Benefits**

-   Clear Separation
    
-   Good Full - Stack Learning
    
-   Independent Deployment
    

**Trade - offs**

-   More Setup
    
-   More Deployment Configuration
    
-   More Moving Parts
    

---

## 60\. Architecture Complexity Decision

The project will intentionally avoid :

Microservices

         X

Kubernetes

         X

Message Queues

         X

Distributed Systems

         X

Complex Event Architecture

         X

The initial architecture will remain :

Frontend

      ↓

Backend

      ↓

Database

This is sufficient for the expected scale of a personal portfolio .

---

## 61\. Architecture Evolution

The architecture may evolve as the website grows .

### 61.1 Version 1

React

     ↓

FastAPI

     ↓

PostgreSQL

### 61.2 Future Version

React

    ↓

FastAPI

    ↓

PostgreSQL

    ├── Blog

    ├── Admin

    ├── Analytics

    └── GitHub Integration

### 61.3 Larger Future System

Only if justified :

Frontend

       ↓

API Gateway

       ↓

Backend Services

       ├── Portfolio

       ├── Blog

       ├── Analytics

       └── Authentication

                       ↓

                Database

The architecture should evolve because of real requirements , not because the diagram looks impressive .

---

## 62\. Architecture Decision Records

Important Architectural Decisions should be recorded separately when necessary .

Possible decisions include :

ADR-001

React selected for Frontend

ADR-002

FastAPI selected for Backend

ADR-003

PostgreSQL selected for Database

ADR-004

REST selected for API Communication

ADR-005

Monorepo selected for Project Structure

These records can be added later if the project requires formal Architecture Decision Records .

---

## 63\. Architecture Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Overengineering | High | Keep architecture simple |
| Too Many Dependencies | Medium | Evaluate every dependency |
| Database Unnecessary | Medium | Use DB only where useful |
| API Complexity | Medium | Keep endpoints focused |
| Poor Separation | High | Maintain clear layers |
| Security Mistakes | High | Validate and protect boundaries |
| Deployment Complexity | Medium | Use simple hosting |
| Future Feature Growth | Medium | Keep components modular |

  

---

## 64\. Architecture Constraints

The Architecture is subject to :

-   Limited Project Scope
    
-   Limited Development Time
    
-   Learning Requirements
    
-   Hosting Limitations
    
-   Budget Constraints
    
-   Portfolio - Sized Traffic
    
-   Limited need for complex infrastructure
    

The architecture should be designed around these constraints .

---

## 65\. Architecture Assumptions

The Architecture assumes :

1.  The website will primarily serve public visitors .
    
2.  The website will initially have low traffic .
    
3.  Authentication is not required for visitors .
    
4.  Portfolio content does not change extremely frequently .
    
5.  The backend primarily provides APIs .
    
6.  PostgreSQL is sufficient for expected data volume .
    
7.  A separate frontend and backend are acceptable .
    
8.  External services will be kept to a minimum .
    
9.  The application will initially be deployed as a small production system .
    

---

## 66\. Architecture Success Criteria

The architecture will be considered successful when :

-   Frontend and Backend are clearly separated
    
-   Backend and Database responsibilities are separated
    
-   API Communication works correctly
    
-   Sensitive Information remains server - side
    
-   Components are reasonably reusable
    
-   Database Access is isolated
    
-   Errors are handled appropriately
    
-   The application can be tested
    
-   The application can be deployed
    
-   The architecture is understandable to another developer
    
-   Future Features can be added without major restructuring
    

---

## 67\. Architecture Validation

The architecture should be validated through :

### 67.1 Code Review

Review :

-   Folder Structure
    
-   Component Boundaries
    
-   Backend Layers
    
-   Database Access
    

### 67.2 Testing

Verify :

-   API Communication
    
-   Database Operations
    
-   Error Handling
    
-   Contact Flow
    

### 67.3 Performance Testing

Verify :

-   Page Loading
    
-   API Response Times
    
-   Database Queries
    

### 67.4 Security Review

Verify :

-   Environment Variables
    
-   API Boundaries
    
-   Database Credentials
    
-   HTTPS
    

---

## 68\. Architecture Checklist

### 68.1 General

-   Architecture documented
    
-   Major Components identified
    
-   Responsibilities defined
    
-   Communication Paths defined
    

### 68.2 Frontend

-   Component Structure defined
    
-   Page Structure defined
    
-   API Communication defined
    
-   State Management approach defined
    

### 68.3 Backend

-   API Layer defined
    
-   Service Layer defined
    
-   Database Layer defined
    
-   Validation Strategy defined
    

### 68.4 Database

-   Database selected
    
-   Access Boundary defined
    
-   Data Flow defined
    

### 68.5 Security

-   Frontend / Backend Boundary defined
    
-   Database Boundary defined
    
-   Secrets Management defined
    
-   HTTPS planned
    

### 68.6 Deployment

-   Development Architecture defined
    
-   Production Architecture defined
    
-   Deployment Flow defined
    

### 68.7 Future

-   Scalability considerations documented
    
-   Future Architecture direction documented
    

---

## 69\. Final Architecture Diagram

The complete Version 1 architecture can be summarized as :

                                                            INTERNET

                                                                   │

                                                                   ▼

                                              ┌────────────────┐

                                              │        Custom Domain        │

                                              └───────┬────────┘

                                                                   │

                                                              HTTPS

                                                                   │

                                                                  ▼

                                     ┌────────────────────────┐

                                      │                   FRONTEND                        │

                                      │                                                              │

                                      │                         React                            │

                                      │                      JavaScript                        │

                                      │                         HTML5                         │

                                      │                           CSS3                           │

                                      └───────────┬────────────┘

                                                                      │

                                                             HTTP / HTTPS

                                                                       │

                                                                       ▼

                                        ┌────────────────────────┐

                                         │                      BACKEND                        │

                                         │                                                              │

                                         │                         FastAPI                          │

                                         │                         Python                          │

                                         │                                                              │

                                         │   ┌────────────────────┐   │

                                         │   │                     Routes                    │   │

                                         │   │                    Schemas                  │   │

                                         │   │                     Services                  │   │

                                         │   │                Database Layer            │   │

                                         │   └────────────────────┘   │

                                         └───────────┬────────────┘

                                                                         │

                                                                        ▼

                                          ┌────────────────────────┐

                                           │                     DATABASE                        │

                                           │                                                              │

                                           │                     PostgreSQL                       │

                                           └────────────────────────┘

                                                              External Services

                                                                           │

                                              ┌──────────┼──────────┐

                                              ▼                         ▼                          ▼

                                          GitHub                  Email                  Hosting

---

## 70\. Complete Request Flow

The Complete Application Flow can be summarized as :

                                         USER

                                             │

                                             ▼

                                      BROWSER

                                              │

                                              ▼

                                        REACT UI

                                               │

                                              ▼

                                 API SERVICE LAYER

                                               │

                                              ▼

                                   HTTP REQUEST

                                               │

                                               ▼

                                    FASTAPI ROUTE

                                                │

                                                ▼

                                        VALIDATION

                                                │

                                                ▼

                                     SERVICE LAYER

                                                │

                                                ▼

                                     DATABASE LAYER

                                                 │

                                                 ▼

                                        POSTGRESQL

                                                  │

                                                  ▼

                                        SERVICE LAYER

                                                   │

                                                   ▼

                                      FASTAPI RESPONSE

                                                    │

                                                    ▼

                                             JSON DATA

                                                     │

                                                     ▼

                                     REACT COMPONENT

                                                      │

                                                      ▼

                                         USER INTERFACE

---

## 71\. Summary

The Personal Portfolio Website will use a simple layered client - server architecture .

The Core Architecture is :

React Frontend

           ↓

REST API

           ↓

FastAPI Backend

           ↓

PostgreSQL Database

The frontend will focus on presentation and user interaction .

The backend will focus on API handling , validation , business logic , database communication , and security - sensitive operations .

The database will provide persistent storage where required .

External Services such as email , GitHub , and hosting providers will be integrated only when they provide meaningful functionality .

The architecture will intentionally avoid unnecessary complexity such as microservices , Kubernetes , message queues , and distributed infrastructure .

The Central Architecture Principle is :

> **Keep responsibilities separated , keep communication predictable , and use the simplest architecture that solves the actual requirements .**

The architecture should provide a strong foundation for the remaining technical documentation and implementation phases .

---

## 72\. Document Change History

| Version | Date | Author | Changes |
| --- | --- | --- | --- |
| 1.0.0 | 14 Sep 2026 | Mayank Baranwal | Initial Website Architecture |

---