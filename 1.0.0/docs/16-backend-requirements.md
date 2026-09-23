# Portfolio Website - Backend Requirements

> **Document :** `16-backend-requirements.md`  
> **Project :** Personal Portfolio Website  
> **Version :** 1.0.0  
> **Status :** Planning  
> **Author :** Mayank Baranwal  
> **Last Updated :** 14 September 2026

---

## 1\. Introduction

This document defines the backend requirements for the Personal Portfolio Website .

The backend is responsible for server - side functionality such as :

-   Portfolio and Project Data
-   Contact Form Submissions
-   API Endpoints
-   Database Operations
-   Validation
-   Error Handling
-   Security
-   Logging
-   Health Checks
-   Configuration
-   Future Administrative Features

The backend should be simple enough for a personal portfolio while following professional development practices .

> **Core Principle :** Build only the backend functionality that provides real value to the portfolio .

---

## 2\. Relationship With Previous Documents

This document builds upon :

[01-project-overview.md](http://01-project-overview.md)

[02-project-objectives.md](http://02-project-objectives.md)

[03-project-scope.md](http://03-project-scope.md)

[04-target-audience.md](http://04-target-audience.md)

[05-portfolio-website-goals.md](http://05-portfolio-website-goals.md)

[06-personal-branding.md](http://06-personal-branding.md)

[07-technology-stack.md](http://07-technology-stack.md)

[08-website-architecture.md](http://08-website-architecture.md)

[09-website-pages.md](http://09-website-pages.md)

[10-page-wise-requirements.md](http://10-page-wise-requirements.md)

[11-features-and-functional-requirements.md](http://11-features-and-functional-requirements.md)

[12-ui-or-ux-requirements.md](http://12-ui-or-ux-requirements.md)

[13-responsive-design-requirements.md](http://13-responsive-design-requirements.md)

[14-content-requirements.md](http://14-content-requirements.md)

[14-project-or-work-showcase-structure.md](http://14-project-or-work-showcase-structure.md)

The documentation flow is :

Project Overview

         ↓

Project Objectives

         ↓

Project Scope

         ↓

Target Audience

         ↓

Website Goals

         ↓

Personal Branding

         ↓

Technology Stack

         ↓

Website Architecture

         ↓

Website Pages

         ↓

Page - Wise Requirements

         ↓

Features & Functional Requirements

         ↓

UI / UX Requirements

         ↓

Responsive Design Requirements

         ↓

Content Requirements

         ↓

Project Showcase Structure

         ↓

Backend Requirements

         ↓

Frontend Development

         ↓

Integration

         ↓

Testing

         ↓

Deployment

---

## 3\. Backend Goals

The backend should :

1.  Provide reliable server-side functionality .
2.  Provide APIs where dynamic functionality is required .
3.  Handle contact form submissions .
4.  Validate incoming data .
5.  Protect against common security issues .
6.  Separate routing from business logic .
7.  Handle errors consistently .
8.  Support future content expansion .
9.  Be easy to test and maintain .
10.  Be suitable for deployment .
11.  Avoid unnecessary complexity .

---

## 4\. Backend Scope

Version 1 may include :

Backend

│

├── API

├── Project Data

├── Contact Form

├── Validation

├── Error Handling

├── Logging

├── Security

├── Health Check

└── Configuration

Future Features :

├── Admin Authentication

├── Content Management

├── Blog API

├── Analytics

├── Newsletter

└── Advanced Search

---

## 5\. Backend Architecture

The recommended architecture is :

Client

     ↓

API / Routes

     ↓

Schemas / Validation

     ↓

Services

     ↓

Repositories / Data Access

     ↓

Database

For simple features , Not every layer needs to be implemented separately .

Architecture should match application complexity .

---

## 6\. Recommended Backend Stack

The recommended Version 1 tack is :

Language :

-   Python

Framework :

-   FastAPI

Database :

-   PostgreSQL

ORM :

-   SQLAlchemy

Validation :

-   Pydantic

Server :

-   Uvicorn

Migrations :

-   Alembic

Testing :

-   Pytest

Version Control :

-   Git / GitHub

The final stack may be adjusted during implementation .

---

## 7\. Backend Design Principles

The backend should be :

-   Simple
-   Readable
-   Modular
-   Testable
-   Secure
-   Maintainable

Avoid unnecessary abstraction and infrastructure .

A portfolio backend does not need seventeen services for one contact form . Software architecture should solve problems , not manufacture them .

---

## 8\. API Requirements

Potential API groups :

-   /api/projects
-   /api/skills
-   /api/experience
-   /api/education
-   /api/contact
-   /api/health

Future :

-   /api/blog
-   /api/auth
-   /api/admin

Only APIs that provide real value should be implemented .

---

## 9\. API Versioning

If the API becomes publicly consumed , Versioning should be considered .

Example :

-   /api/v1/projects
-   /api/v1/contact

For a small frontend - backend integration , Versioning may initially be omitted if it adds unnecessary complexity .

---

## 10\. Project API

The backend may provide project information .

Required or Planned Endpoints :

-   GET      /api/projects
-   GET      /api/projects/{slug}

---

## 11\. Get All Projects

### 11.1 Endpoint

-   GET      /api/projects

### 11.2 Purpose

Returns published portfolio projects .

### 11.3 Example Response

{

    " projects " :

    \[

        {

            " id " : 1 ,

            " title " : " Task Management API " ,

            " slug " : " task-management-api " ,

            " short\_description " : " REST API for managing tasks and projects . " ,

            " status " : " completed " ,

            " featured " : true

        }

    \]

}

---

## 12\. Get Project By Slug

### 12.1 Endpoint

-   GET      /api/projects/{slug}

Example :

-   GET      /api/projects/task-management-api

The response may include :

-   Overview
-   Problem
-   Goals
-   Features
-   Technologies
-   Architecture
-   Challenges
-   Solutions
-   Results
-   Lessons Learned
-   Images
-   Links

---

## 13\. Project Visibility

Projects should have a Visibility State .

Possible Values :

-   Published
-   Draft
-   Archived
-   Private

Public API responses should normally include only :

published

---

## 14\. Skills API

If skills are dynamically managed :

-   GET      /api/skills

Example :

{

    " skills " :

    \[

        {

            " name " : " Python " ,

            " category " : " Programming Language "

        } ,

        {

            " name " : " FastAPI " ,

            " category " : " Backend "

        }

    \]

}

For a mostly Static Portfolio , Skills may remain frontend content instead .

---

## 15\. Experience API

Optional :

-   GET      /api/experience

Example : 

{

    " experience " :

    \[

        {

            " role " : " Python Developer Intern " ,

            " company " : " Example Company " ,

            " start\_date " : " 2026 - 01 " ,

            " end\_date " : null ,

            " description " : " Backend development and API work . "

        }

    \]

}

Only publicly shareable professional information should be returned .

---

## 16\. Education API

Optional :

-   GET      /api/education

Example :

{

    " education " :

    \[

        {

            " degree " : " Bachelor’s Degree " ,

            " institution " : " Example Institution " ,

            " field " : " Computer Science " ,

            " start\_date " : " 2023 " ,

            " end\_date " : " 2027 "

        }

    \]

}

---

## 17\. Contact Form API

The Contact Endpoint is the primary dynamic backend feature for Version 1 .

-   POST      /api/contact

Flow : 

Visitor

     ↓

Contact Form

     ↓

Backend

     ↓

Validation

      ↓

Security Checks

     ↓

Process

     ↓

Email / Database

     ↓

Response

---

## 18\. Contact Request Fields

Required :

-   name
-   email
-   subject
-   message

Optional :

-   company

Avoid collecting unnecessary personal information .

---

## 19\. Contact Request Example

{

    " name " : " John Doe " ,

    " email " : " [john@example.com](mailto:john@example.com) " ,

    " subject " : " Project Opportunity " ,

    " message " : " I would like to discuss a development project . "

}

---

## 20\. Contact Validation

The backend must validate all contact requests .

Validation should cover :

-   Required Fields
-   Minimum Lengths
-   Maximum Lengths
-   Email Format
-   Empty Input
-   Excessive Input
-   Invalid Data

Client - Side Validation is useful for user experience , But backend validation is mandatory .

---

## 21\. Contact Validation Rules

Suggested Initial Rules :

| Field | Required | Minimum | Maximum |
| --- | --- | --- | --- |
| Name | Yes | 2 | 100 |
| Email | Yes | 5 | 254 |
| Subject | Yes | 3 | 150 |
| Message | Yes | 10 | 5000 |

These values may be adjusted during implementation .

---

## 22\. Contact Email Handling

The backend may send submitted messages to the portfolio owner’s professional email .

Flow :

Contact Form

       ↓

POST /api/contact

       ↓

Validation

       ↓

Rate Limit / Spam Check

       ↓

Email Service

        ↓

Portfolio Owner

The final email provider will be selected during implementation .

---

## 23\. Contact Storage

Contact submissions may optionally be stored .

Possible Structure :

Contact Message

├── id

├── name

├── email

├── subject

├── message

├── created\_at

└── status

Possible Statuses :

-   new
-   read
-   replied
-   archived
-   spam

Database storage is optional if reliable email delivery is sufficient for Version 1 .

---

## 24\. Contact Success Response

Example :

{

    " success " : true ,

    " message " : " Your message has been sent successfully . "

}

Do not expose internal email - service information .

---

## 25\. Contact Error Response

Example :

{

    " success " : false ,

    " message " : " Unable to send your message . Please try again later . "

}

Do not expose stack traces or internal implementation details .

---

## 26\. Error Handling

The backend should use consistent error responses .

Recommended Structure :

{

    " success " : false ,

    “ error ” :

    {

        “ code ” : “ VALIDATION\_ERROR ” , 

        “ message ” : “ Invalid request data . ”

    }

}

---

## 27\. HTTP Status Codes

| Status | Meaning |
| --- | --- |
| 200 | Successful request |
| 201 | Resource created |
| 204 | Successful request with no body |
| 400 | Bad request |
| 401 | Authentication required |
| 403 | Access denied |
| 404 | Resource not found |
| 409 | Conflict |
| 422 | Validation error |
| 429 | Too many requests |
| 500 | Internal server error |
| 503 | Service unavailable |

---

## 28\. Global Exception Handling

Unexpected exceptions should be handled centrally .

Flow :

Exception

       ↓

Exception Handler

       ↓

Log Error

       ↓

Return Safe Response

Never Expose :

-   Tracebacks
-   File Paths
-   Database Credentials
-   Secret Values
-   Internal Stack Details

---

## 29\. Database Requirements

If a database is used , PostgreSQL is the recommended primary database .

Potential Data :

-   Projects
-   Skills
-   Experience
-   Education
-   Contact Messages

Future :

-   Blog Posts
-   Admin Users
-   Analytics
-   Newsletter Subscribers

---

## 30\. Database Design Principles

The database should :

-   Use clear table names .
-   Use appropriate data types .
-   Use primary keys .
-   Use foreign keys where needed .
-   Define relationships clearly .
-   Use indexes where useful .
-   Avoid unnecessary duplication .
-   Protect sensitive data .

---

## 31\. Project Table

Possible Structure :

projects

├── id

├── title

├── slug

├── short\_description

├── overview

├── type

├── category

├── status

├── featured

├── date

├── role

├── team\_size

├── architecture

├── implementation

├── results

├── github\_url

├── live\_url

├── documentation\_url

├── created\_at

└── updated\_at

---

## 32\. Technology Relationship

If technology filtering is required , A normalized structure may use :

projects

          │

         ▼

project\_technologies

          │

         ▼

technologies

For a small portfolio , A simpler structure may be acceptable .

Choose the simplest design that satisfies actual requirements .

---

## 33\. Contact Message Table

Possible Structure :

contact\_messages

├── id

├── name

├── email

├── subject

├── message

├── status

├── created\_at

└── updated\_at

---

## 34\. Timestamps

Records should preferably include :

-   created\_at
-   updated\_at

Recommended Strategy :

Store timestamps in UTC

               ↓

Convert when displaying locally

---

## 35\. Database Migrations

Schema changes should be managed through migrations .

Recommended Tool :

Alembic

Workflow :

Change Model

         ↓

Create Migration

         ↓

Review Migration

         ↓

Apply Migration

---

## 36\. ORM Requirements

If SQLAlchemy is used :

Models

     ↓

SQLAlchemy

     ↓

PostgreSQL

Database queries should not be embedded directly inside route handlers when avoidable .

---

## 37\. Repository Layer

Where Useful :

repositories/

├── project\_repository.py

├── contact\_repository.py

└── experience\_repository.py

Responsibilities :

-   Database Queries
-   CRUD Operations
-   Filtering
-   Retrieval
-   Persistence

For very small features , Repositories may be omitted where they provide no meaningful benefit .

---

## 38\. Service Layer

Business Logic should be separated from route handlers .

Example :

services/

├── project\_service.py

├── contact\_service.py

└── email\_service.py

Responsibilities :

-   Business Rules
-   Data Processing
-   Email Handling
-   Application Logic

---

## 39\. API Route Layer

Routes should primarily handle :

Request

      ↓

Validation

       ↓

Service Call

       ↓

Response

Routes should not contain large blocks of business logic .

---

## 40\. Schema Layer

Pydantic Schemas should define request and response structures .

Example :

schemas/

├── [project.py](http://project.py)

├── [contact.py](http://contact.py)

├── [experience.py](http://experience.py)

└── [common.py](http://common.py)

Schemas provide :

-   Validation
-   Serialization
-   Documentation
-   Type Safety

---

## 41\. Configuration Management

Configuration should be separated from application code .

Possible Configuration :

-   DATABASE\_URL
-   EMAIL\_HOST
-   EMAIL\_PORT
-   EMAIL\_USERNAME
-   EMAIL\_PASSWORD
-   SECRET\_KEY
-   ALLOWED\_ORIGINS
-   ENVIRONMENT

Sensitive values must come from secure configuration .

---

## 42\. Environment Management

The backend should support :

-   Development
-   Testing
-   Production

Example :

-   .env
-   .env.test
-   .env.production

Production secrets must never be committed to Git .

---

## 43\. Environment Variables

Example :

-   DATABASE\_URL = . . .
-   SECRET\_KEY = . . .
-   EMAIL\_HOST = . . .
-   EMAIL\_USERNAME = . . . 
-   EMAIL\_PASSWORD = . . . 

The actual values must remain private .

---

## 44\. CORS Requirements

If frontend and backend are hosted separately , CORS must be configured .

Production should allow only trusted origins where possible .

Example :

Allowed Origin :

[https://portfolio.example.com](https://portfolio.example.com)

Avoid unrestricted production configuration such as :

allow\_origins = \[ " \* " \]

unless there is a specific reason .

---

## 45\. Authentication Requirements

Public portfolio viewing does not require authentication .

Authentication may be required for :

-   Admin Dashboard
-   Content Management
-   Project Management
-   Contact Message Management

If administrative write operations are added , Authentication must protect them .

---

## 46\. Authorization Requirements

If admin functionality exists :

Visitor

     ↓

Read Public Content

Admin

     ↓

Read / Create / Update / Delete

Authorization must be enforced by the backend, not merely hidden in the frontend .

---

## 47\. Future Admin API

Possible Endpoints :

-   POST      /api/admin/login
-   GET      /api/admin/projects
-   POST      /api/admin/projects
-   PUT      /api/admin/projects/{id}
-   DELETE      /api/admin/projects/{id}
-   GET      /api/admin/messages
-   PATCH      /api/admin/messages/{id}

These are future requirements .

---

## 48\. Security Requirements

The backend should address common risks :

-   Input Validation
-   Rate Limiting
-   CORS
-   Authentication
-   Authorization
-   SQL Injection
-   XSS
-   CSRF where applicable
-   Secrets Management
-   Secure Headers
-   Dependency Security

---

## 49\. Input Sanitization

All external input must be considered untrusted .

Validate :

-   Forms
-   Query Parameters
-   Path Parameters
-   Request Bodies
-   Relevant Headers

Never rely only on frontend validation .

---

## 50\. SQL Injection Protection

Use :

-   SQLAlchemy
-   Parameterized Queries
-   Safe Database APIs

Avoid constructing SQL using raw user input .

Bad :

query = f " SELECT \* FROM users WHERE name = ’ { name } ’ "

Use parameterized database operations instead .

---

## 51\. XSS Protection

Avoid returning unsanitized user - generated HTML where it may be rendered directly .

Contact Messages should generally be handled as plain text .

---

## 52\. CSRF Considerations

CSRF Protection depends on the authentication architecture .

For cookie - based authentication :

-   CSRF Protection

should be considered .

For stateless token - based authentication , The strategy will be different .

Use the security model appropriate to the final implementation .

---

## 53\. Rate Limiting

The Contact Endpoint should have Rate Limiting .

Example :

Request

     ↓

Rate Limit Check

     ↓

Allowed → Process

Blocked → HTTP 429

This helps reduce spam and abuse .

---

## 54\. Spam Protection

Possible Approaches :

-   Rate Limiting
-   Honeypot Field
-   CAPTCHA / Turnstile
-   Request Throttling

The simplest effective solution should be preferred .

---

## 55\. Email Security

Email Credentials must:

-   Never be committed to Git.
-   Never be returned in API responses.
-   Never be exposed in frontend code.
-   Be stored securely.

---

## 56\. File Uploads

File Uploads are not required for Version 1 .

If introduced later :

-   Validate File Type
-   Validate File Size
-   Rename Uploaded Files
-   Scan Where Appropriate
-   Store Securely
-   Protect Access

---

## 57\. API Documentation

FastAPI can provide API Documentation .

Development Endpoints :

-   /docs
-   /redoc

Production exposure should be evaluated based on whether the API is intended to be public .

---

## 58\. OpenAPI Requirements

Each endpoint should document :

-   Method
-   Path
-   Parameters
-   Request Body
-   Response
-   Status Codes
-   Description

---

## 59\. Health Check

The backend should provide :

-   GET      /api/health

Example :

{

    " status " : " ok "

}

---

## 60\. Readiness and Liveness

Future deployment environments may use :

-   /api/health/live
-   /api/health/ready

Version 1 only requires a simple health endpoint unless deployment infrastructure requires more .

---

## 61\. Logging Requirements

Useful logs may include :

-   Request
-   Response Status
-   Response Time
-   Errors
-   Important Events
-   Startup
-   Shutdown
-   External Service Failures

Never log :

-   Passwords
-   API Keys
-   Tokens
-   Private Messages
-   Sensitive Personal Information

---

## 62\. Log Levels

Recommended :

-   DEBUG
-   INFO
-   WARNING
-   ERROR
-   CRITICAL

Production should avoid excessive debug logging .

---

## 63\. Error Monitoring

Future Versions may integrate an Error Monitoring Service .

Flow :

Unhandled Error

            ↓

Monitoring Service

            ↓

Alert

            ↓

Developer

Optional for Version 1 .

---

## 64\. Backend Performance

Performance should consider :

-   Efficient Database Queries
-   Indexes
-   Connection Pooling
-   Caching Where Useful
-   Payload Size
-   External Service Timeouts

Optimization should be based on measured problems rather than guesses .

---

## 65\. Database Connection Management

Database Connections should use appropriate connection pooling .

Avoid opening a completely new Database Connection for every request when pooling is available .

---

## 66\. Pagination

Pagination is not required for a small project collection .

It may be introduced if the number of records grows .

Example :

-   GET      /api/projects?page=1&limit=10

---

## 67\. Filtering

Future Project Filtering may support :

-   Category
-   Technology
-   Status
-   Featured

Example :

-   GET      /api/projects?category=backend

---

## 68\. Sorting

Future Sorting may support :

-   Date
-   Title
-   Order
-   Featured

Example :

-   GET      /api/projects?sort=date

---

## 69\. Caching

Caching may be considered for frequently requested public data :

-   Projects
-   Skills
-   Experience
-   Education

Caching should only be added when it provides measurable value .

---

## 70\. Static vs Dynamic Content

Not all portfolio content requires a backend .

Possible Architecture :

Static Content

         ↓

Frontend

Dynamic Content

         ↓

Backend API

Version 1 should keep content static when dynamic behavior provides no meaningful benefit .

---

## 71\. Recommended Dynamic Features

The backend should prioritize :

-   Contact Form

Project Data where dynamic management is useful

-   Health Check

Everything else should be evaluated against actual requirements .

---

## 72\. Backend Folder Structure

Recommended FastAPI Structure :

backend/

│

├── app/

│      ├── [main.py](http://main.py)

│      │

│      ├── api/

│      │      ├── routes/

│      │      │      ├── [projects.py](http://projects.py)

│      │      │      ├── [skills.py](http://skills.py)

│      │      │      ├── [experience.py](http://experience.py)

│      │      │      ├── [education.py](http://education.py)

│      │      │      ├── [contact.py](http://contact.py)

│      │      │      └── [health.py](http://health.py)

│      │      │

│      │      └── [dependencies.py](http://dependencies.py)

│      │

│      ├── core/

│      │      ├── [config.py](http://config.py)

│      │      ├── [security.py](http://security.py)

│      │      └── [logging.py](http://logging.py)

│      │

│      ├── models/

│      │      ├── [project.py](http://project.py)

│      │      ├── [skill.py](http://skill.py)

│      │      ├── [experience.py](http://experience.py)

│      │      ├── [education.py](http://education.py)

│      │      └── [contact.py](http://contact.py)

│      │

│      ├── schemas/

│      │      ├── [project.py](http://project.py)

│      │      ├── [skill.py](http://skill.py)

│      │      ├── [experience.py](http://experience.py)

│      │      ├── [education.py](http://education.py)

│      │      └── [contact.py](http://contact.py)

│      │

│      ├── services/

│      │      ├── [project\_service.py](http://project_service.py)

│      │      ├── [contact\_service.py](http://contact_service.py)

│      │      └── [email\_service.py](http://email_service.py)

│      │

│      ├── repositories/

│      │      ├── [project\_repository.py](http://project_repository.py)

│      │      └── [contact\_repository.py](http://contact_repository.py)

│      │

│      └── db/

│               ├── [session.py](http://session.py)

│               └── [base.py](http://base.py)

│

├── tests/

│      ├── [test\_projects.py](http://test_projects.py)

│      ├── [test\_contact.py](http://test_contact.py)

│      └── [test\_health.py](http://test_health.py)

│

├── alembic/

├── [requirements.txt](http://requirements.txt)

├── [.env.example](http://.env.example)

├── [Dockerfile](http://Dockerfile)

└── [README.md](http://README.md)

---

## 73\. Module Responsibilities

### `73.1 main.py`

Responsible for :

-   Application Creation
-   Middleware
-   Router Registration
-   Startup / Shutdown

### `73.2 api / routes`

Responsible for :

-   HTTP Endpoints
-   Request Handling
-   Response Handling

### `73.3 schemas`

Responsible for :

-   Request Validation
-   Response Serialization
-   API Documentation

### `73.4 models`

Responsible for :

-   Database Models
-   Relationships
-   Database Structure

### `73.5 services`

Responsible for :

-   Business Logic
-   Application Logic
-   External Service Interaction

### `73.6 repositories`

Responsible for :

-   Database Queries
-   Data Access
-   CRUD Operations

### `73.7 core`

Responsible for :

-   Configuration
-   Security
-   Logging
-   Application - Wide Settings

---

## 74\. Dependency Injection

FastAPI Dependency Injection should be used where useful .

Possible Dependencies :

-   Database Session
-   Authenticated User
-   Configuration
-   Rate Limiter

Avoid dependencies that add complexity without value .

---

## 75\. API Response Consistency

A Consistent Response format should be selected .

Success :

{

    " success " : true ,

    " data " : { }

}

Error :

{

    " success " : false ,

    " error " :

     {

        " code " : " ERROR\_CODE " ,

        " message " : " Human - readable message . "

     }

}

The exact convention should be finalized before implementation .

---

## 76\. API Naming Conventions

Use plural nouns for collections .

Prefer :

-   /api/projects
-   /api/skills
-   /api/experience

Avoid :

-   /api/getProjects
-   /api/getSkills

HTTP Methods already communicate the action .

---

## 77\. HTTP Method Conventions

Use :

GET

for retrieval .

POST

for creation .

PUT

for complete replacement .

PATCH

for partial updates .

DELETE

for deletion .

---

## 78\. Backend Testing Requirements

Minimum Version 1 testing should cover :

-   Health Endpoint
-   Project Retrieval
-   Project Detail
-   Contact Validation
-   Contact Success
-   Contact Failure
-   Error Handling

---

## 79\. Unit Testing

Unit Tests should cover isolated logic such as :

-   Validation
-   Service Logic
-   Utility Functions
-   Data Transformation

---

## 80\. Integration Testing

Integration Tests should verify interactions between :

API

   ↓

Service

   ↓

Database

where database - backed features exist .

---

## 81\. API Testing

API Tests should verify  :

-   Status Codes
-   Response Structure
-   Validation
-   Error Responses
-   Authentication where applicable

---

## 82\. Contact API Test Cases

Required Cases :

-   Valid Request
-   Missing Name
-   Missing Email
-   Invalid Email
-   Missing Subject
-   Missing Message
-   Message Too Long
-   Rate Limit Exceeded
-   Email Service Failure
-   Unexpected Server Error

---

## 83\. Project API Test Cases

Required Cases :

-   Get Projects
-   Get Existing Project
-   Get Missing Project
-   Verify Published Visibility
-   Verify Response Schema

---

## 84\. Health API Test Cases

Test:

-   GET      /api/health

Expected :

HTTP 200

status = ok

---

## 85\. Backend Security Testing

Check :

-   Invalid Input
-   Large Payloads
-   Rate Limits
-   CORS
-   Unauthorized Admin Requests
-   SQL Injection Attempts
-   XSS Payloads
-   Sensitive Data Exposure

---

## 86\. Dependency Management

Production Dependencies should be explicitly defined .

Possible Dependencies :

-   FastAPI
-   Uvicorn
-   SQLAlchemy
-   Pydantic
-   Alembic

Development Dependencies :

-   Pytest
-   Ruff
-   Mypy

The exact package list will be finalized during implementation .

---

## 87\. Dependency Security

Dependencies should be reviewed regularly .

Recommended Workflow :

Check Dependencies

            ↓

Review Vulnerabilities

            ↓

Update Safe Versions

            ↓

Run Tests

            ↓

Deploy

---

## 88\. Local Development

Recommended Setup :

Clone Repository

              ↓

Create Virtual Environment

              ↓

Install Dependencies

              ↓

Configure Environment

              ↓

Setup Database

              ↓

Run Migrations

              ↓

Start Server

Example :

uvicorn app.main:app --reload

---

## 89\. Development Environment

Development may use :

-   Debug Logging
-   Local Database
-   Development Environment Variables
-   Hot Reload
-   Test Data

Production settings should not be copied blindly into development .

---

## 90\. Production Environment

Production should use :

-   Production Database
-   Secure Secrets
-   Restricted CORS
-   Production Logging
-   HTTPS
-   Monitoring where appropriate

---

## 91\. Deployment Requirements

The backend should be deployable using the selected hosting platform .

Possible Options:

-   Cloud Platform
-   Container Platform
-   Virtual Machine
-   Managed Application Hosting

Selection Criteria :

-   Cost
-   Simplicity
-   Performance
-   Learning Value
-   Reliability

---

## 92\. Docker Support

Docker may be used for consistent development and deployment .

Possible Files :

-   Dockerfile
-   .dockerignore
-   docker-compose.yml

Docker should be used when it genuinely simplifies the workflow .

---

## 93\. HTTPS

Production API communication must use HTTPS .

Architecture :

Browser

      ↓ HTTPS

Frontend

      ↓ HTTPS

Backend API

      ↓ Secure Connection

Database

---

## 94\. Backend Availability

The backend should fail gracefully .

Example :

Email Service Failure

        ↓

Log Failure

        ↓

Return Safe Error

        ↓

Keep Application Running

---

## 95\. External Service Timeouts

External calls should have reasonable timeouts .

Examples :

-   Email API
-   Third - Party API
-   External Database

The backend should never wait indefinitely for an External Service .

---

## 96\. Retry Strategy

Retries may be used for temporary external failures .

Retries should :

-   Be limited .
-   Use reasonable delays .
-   Avoid duplicate side effects .
-   Stop after a defined number of attempts .

---

## 97\. Backend Observability

Minimum Observability :

-   Logs
-   Health Endpoint
-   HTTP Status Codes
-   Error Messages

Future :

-   Metrics
-   Tracing
-   Error Monitoring
-   Performance Monitoring

---

## 98\. API Performance Targets

Initial Targets :

Simple GET Requests :

< 500ms under normal conditions

Contact Submission :

< 2 - 5 seconds depending on email provider

Health Check :

< 200ms under normal conditions

These are targets , not guarantees .

Actual performance should be measured after deployment .

---

## 99\. Payload Requirements

API Responses should return only useful data .

Project Listing :

-   id
-   title
-   short\_description
-   thumbnail
-   technologies
-   status
-   links

Detailed project data should be returned by the detail endpoint .

---

## 100\. Backend Data Security

Never Expose :

-   Database Credentials
-   Email Passwords
-   API Keys
-   Secret Keys
-   Private Admin Data
-   Internal File Paths
-   Stack Traces

---

## 101\. Backend Privacy

Contact Information should be handled responsibly .

Requirements :

-   Store only necessary information .
-   Restrict access to stored messages .
-   Avoid unnecessary logging .
-   Delete data when no longer required .
-   Follow applicable privacy requirements .

---

## 102\. Backup Requirements

If a database stores important portfolio data , Backups should be considered .

Minimum :

-   Database Backup

Future :

-   Automated Backups
-   Backup Verification
-   Recovery Procedure

---

## 103\. Database Recovery

Document :

-   Backup Location
-   Restore Procedure
-   Migration Procedure
-   Recovery Steps

Recovery procedures should be tested .

---

## 104\. Backend Scalability

The backend should support moderate growth :

-   More Projects
-   More Visitors
-   More Contact Messages
-   Blog Content
-   Admin Features

The architecture should allow expansion without requiring a complete rewrite .

---

## 105\. Avoiding Overengineering

Version 1 should not require :

-   Microservices
-   Message Queues
-   Kubernetes
-   Distributed Caches
-   Complex Event Systems

unless an actual requirement appears .

A Personal Portfolio is not Netflix.

---

## 106\. Backend Maintainability

Code should follow :

-   Clear Naming
-   Small Functions
-   Single Responsibility
-   Type Hints
-   Documentation
-   Tests
-   Consistent Formatting

---

## 107\. Code Quality

Recommended Tools :

Formatter :

-   Ruff formatter / Black

Linting : 

-   Ruff

Testing : 

-   Pytest

Type Checking : 

-   Mypy where appropriate

---

## 108\. Type Hints

Python backend code should use Type Hints where practical .

Example :

def get\_project ( slug : str ) -> Project :

      . . . 

Benefits :

-   Readability
-   IDE Support
-   Error Detection
-   Maintainability

---

## 109\. Documentation Standards

Document Important :

-   Business Logic
-   Security Decisions
-   External Service Behavior
-   Non - Obvious Database Decisions

Avoid documenting obvious code simply to increase line count .

---

## 110\. Backend Git Workflow

Recommended :

Create Branch

        ↓

Implement Feature

        ↓

Write Tests

        ↓

Run Tests

        ↓

Review

        ↓

Merge

Example Branches :

-   feature/contact-api
-   feature/project-api
-   fix/contact-validation

---

## 111\. Backend Commit Guidelines

Examples :

-   feat : add project API
-   feat : implement contact endpoint
-   fix : validate contact email
-   test : add project API tests
-   refactor : separate contact service

---

## 112\. Backend CI Requirements

Future CI may run :

Install Dependencies

           ↓

Lint

           ↓

Type Check

           ↓

Run Tests

           ↓

Build

Deployment should ideally occur only after successful checks .

---

## 113\. Backend Acceptance Criteria

The backend is considered ready when :

-   Application starts successfully
-   API Routes work
-   Validation works
-   Errors are handled
-   Contact Form works
-   Project Data works where implemented
-   Database works where required
-   Secrets are protected
-   CORS is configured
-   Rate Limiting is implemented for contact
-   Logging works
-   Health Endpoint works
-   Tests pass
-   Documentation exists
-   Production Configuration is defined

---

## 114\. Backend Priority Matrix

### 114.1 P0 - Mandatory

-   FastAPI Application
-   API Structure
-   Request Validation
-   Contact Endpoint
-   Error Handling
-   Configuration
-   Security Basics
-   Health Check
-   Logging
-   Testing
-   Deployment Support

### 114.2 P1 - Important

-   PostgreSQL
-   SQLAlchemy
-   Alembic
-   Project API
-   Rate Limiting
-   CORS Configuration
-   Docker
-   CI

### 114.3 P2 - Optional

-   Caching
-   Advanced Monitoring
-   Admin Authentication
-   Dynamic Content Management
-   Advanced Filtering
-   Pagination

### 114.4 P3 - Future

-   Blog API
-   CMS
-   Analytics API
-   Newsletter System
-   Comments
-   Advanced Admin Dashboard

---

## 115\. Backend API Summary

| Method | Endpoint | Purpose | Priority |
| --- | --- | --- | --- |
| GET | `/api/health` | Health Check | P0 |
| GET | `/api/projects` | Get Projects | P1 |
| GET | `/api/projects/{slug}` | Get Project | P1 |
| GET | `/api/skills` | Get Skills | P2 |
| GET | `/api/experience` | Get Experience | P2 |
| GET | `/api/education` | Get Education | P2 |
| POST | `/api/contact` | Submit Message | P0 |

Future :

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/admin/login` | Admin Login |
| POST | `/api/admin/projects` | Create Project |
| PUT | `/api/admin/projects/{id}` | Update Project |
| DELETE | `/api/admin/projects/{id}` | Delete Project |
| GET | `/api/admin/messages` | View Messages |

---

## 116\. Backend Development Workflow

Recommended implementation order :

1\. Create Backend Project

            ↓

2\. Configure FastAPI

            ↓

3\. Configure Environment

            ↓

4\. Create Health Endpoint

            ↓

5\. Create Schemas

            ↓

6\. Create Models

            ↓

7\. Configure Database

            ↓

8\. Create Migrations

            ↓

9\. Create Project API

            ↓

10\. Create Contact API

            ↓

11\. Add Validation

            ↓

12\. Add Error Handling

            ↓

13\. Add Security

            ↓

14\. Add Tests

            ↓

15\. Add Logging

            ↓

16\. Containerize if required

            ↓

17\. Deploy

            ↓

18\. Test Production

---

## 117\. Backend Integration Flow

                                                             VISITOR

                                                                  │

                                                                  ▼

                                                           FRONTEND

                                                                   │

                                                         HTTPS Request

                                                                   │

                                                                   ▼

                                                               FASTAPI

                                                                    │

                                          ┌─────────┼─────────┐

                                          │                        │                       │

                                     Routes             Validation              Auth

                                           │                        │                       │

                                           └─────────┼─────────┘

                                                                     │

                                                                     ▼

                                                                 Services

                                                                       │

                                               ┌────────┴────────┐

                                               │                                            │

                                        Database                             Email Service

                                               │                                            │

                                              └────────┬────────┘

                                                                     │

                                                                     ▼

                                                               Response

                                                                     │

                                                                     ▼

                                                              FRONTEND

                                                                     │

                                                                     ▼

                                                                 VISITOR

---

## 118\. Backend Security Flow

Request

     ↓

HTTPS

     ↓

CORS Check

     ↓

Rate Limit

     ↓

Schema Validation

     ↓

Business Validation

     ↓

Service

     ↓

Database / External Service

     ↓

Safe Response

---

## 119\. Backend Error Flow

Request

     ↓

Error Occurs

     ↓

Exception Handler

     ↓

Log Error

     ↓

Hide Internal Details

     ↓

Return Safe Response

---

## 120\. Backend Data Flow

For Project Content :

Database

       ↓

Repository

       ↓

Service

       ↓

API Route

        ↓

Pydantic Response

        ↓

JSON

        ↓

Frontend

---

## 121\. Backend Contact Flow

Visitor

     ↓

Contact Form

     ↓

Frontend Validation

     ↓

POST /api/contact

     ↓

Backend Validation

     ↓

Rate Limit

     ↓

Contact Service

     ↓

Email / Database

     ↓

Success Response

     ↓

Frontend Success Message

Backend Validation remains mandatory even when the frontend validates the form .

---

## 122\. Backend Documentation Requirements

The final Backend Documentation should include :

-   [README.md](http://README.md)
-   API Documentation
-   Environment Variables
-   Database Setup
-   Migration Instructions
-   Testing Instructions
-   Deployment Instructions
-   Security Notes

---

## 123\. Backend Final Checklist

### 123.1 Application

-   FastAPI configured
-   Application starts
-   Environment Configuration works
-   API Routes registered

### 123.2 Database

-   Database Configured where required
-   Models created where required
-   Migrations Configured where required
-   Queries tested

### 123.3 API

-   Project Endpoint works
-   Project Detail endpoint works
-   Contact Endpoint works
-   Health Endpoint works
-   Responses are consistent

### 123.4 Security

-   Input Validation
-   CORS
-   Rate Limiting
-   Secrets Management
-   SQL Injection Protection
-   Sensitive Data Protection

### 123.5 Testing

-   Unit Tests
-   API Tests
-   Integration Tests where applicable
-   Error Cases
-   Security Checks

### 123.6 Deployment

-   Production Configuration
-   HTTPS
-   Database Deployment where required
-   Logs
-   Health Check
-   Backup Strategy where needed

---

## 124\. Final Backend Principles

### 124.1 Rule 1 - Keep It Simple

Use only the architecture required by the project .

### 124.2 Rule 2 - Validate External Input

Never trust client input .

### 124.3 Rule 3 - Protect Secrets

Secrets belong in secure configuration , not GitHub .

### 124.4 Rule 4 - Separate Responsibilities

Routes , Services , Database Access , and Schemas should have clear responsibilities .

### 124.5 Rule 5 - Handle Errors Gracefully

Users need useful responses , not server internals .

### 124.6 Rule 6 - Test Important Behavior

Especially contact handling , validation , API responses , and security .

### 124.7 Rule 7 - Design for Growth

Keep the structure extensible without building unnecessary infrastructure .

---

## 125\. Summary

The backend for the personal portfolio website should provide a reliable and secure server - side foundation .

Version 1 should focus on :

-   FastAPI
-   Validation
-   Contact API
-   Project Data where required
-   Database where required
-   Security
-   Error Handling
-   Testing
-   Logging
-   Deployment

The backend should demonstrate professional engineering practices while remaining appropriately small for a personal portfolio .

The central principle is :

> **Build a backend that is reliable enough for production , structured enough to demonstrate good engineering , and simple enough that one developer can actually maintain it .**

---

## 126\. Document Change History

| Version | Date | Author | Changes |
| --- | --- | --- | --- |
| 1.0.0 | 14 Sep 2026 | Mayank Baranwal | Initial Backend Requirements |

---
