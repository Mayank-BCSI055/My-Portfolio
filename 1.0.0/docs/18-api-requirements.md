# Portfolio Website - API Requirements

> **Document :** `18-api-requirements.md`  
> **Project :** Personal Portfolio Website  
> **Version :** 1.0.0  
> **Status :** Planning  
> **Author :** Mayank Baranwal  
> **Last Updated :** 14 September 2026

---

## 1\. Introduction

This document defines the API Requirements for the Personal Portfolio Website .

The API provides communication between the frontend and backend .

The primary responsibilities of the API are :

-   Returning portfolio data .
-   Returning project information .
-   Handling contact form submissions .
-   Validating requests .
-   Returning consistent responses .
-   Handling errors .
-   Supporting future administrative functionality .
-   Providing a clean integration boundary between frontend and backend .

The API should be simple , predictable , secure , and easy to maintain .

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

[15-project-or-work-showcase-structure.md](http://15-project-or-work-showcase-structure.md)

[16-backend-requirements.md](http://16-backend-requirements.md)

[17-database-requirements.md](http://17-database-requirements.md)

The API fits into the system as :

Frontend

  ↓

HTTP / HTTPS

  ↓

API

  ↓

Backend Services

  ↓

Database / External Services

---

## 3\. API Goals

The API Goals should :

1.  Provide clean endpoints .
2.  Use standard HTTP methods .
3.  Return predictable JSON responses .
4.  Validate all incoming data .
5.  Return appropriate HTTP status codes .
6.  Protect sensitive information .
7.  Handle errors consistently .
8.  Be easy for the frontend to consume .
9.  Support automated testing .
10.  Be documented through OpenAPI .
11.  Allow future expansion without unnecessary complexity .

---

## 4\. API Scope

### 4.1 Version 1

Primary Endpoints :

-   GET          /api/health
-   GET          /api/projects
-   GET          /api/projects/{slug}
-   POST        /api/contact

Optional :

-   GET           /api/skills
-   GET           /api/experience
-   GET           /api/education

### 4.2 Future

-   POST         /api/admin/login
-   GET           /api/admin/projects
-   POST         /api/admin/projects
-   PUT           /api/admin/projects/{id}
-   PATCH       /api/admin/projects/{id}
-   DELETE      /api/admin/projects/{id}
-   GET            /api/admin/messages
-   PATCH        /api/admin/messages/{id}

---

## 5\. API Architecture

Recommended Architecture :

Frontend

      ↓

HTTP Request

      ↓

FastAPI Route

      ↓

Request Validation

      ↓

Service Layer

      ↓

Repository / External Service

      ↓

Database

      ↓

Service Layer

      ↓

Response Schema

      ↓

JSON Response

      ↓

Frontend

---

## 6\. API Style

The API should follow REST - Oriented principles .

Use :

-   Resources
-   HTTP Methods
-   HTTP Status Codes
-   JSON
-   Stateless Requests
-   Clear URLs

Avoid RPC - Style endpoint names such as :

-   /getProjects
-   /sendContactMessage
-   /deleteProject

Prefer :

GET                 /api/projects

POST               /api/contact

DELETE            /api/admin/projects/{id}

---

## 7\. Base URL

Development :

[http://localhost:8000](http://localhost:8000)

Example API :

[http://localhost:8000/api/projects](http://localhost:8000/api/projects)

Production :

[https://api.example.com](https://api.example.com)

The real production domain will be selected during deployment .

---

## 8\. API Prefix

Recommended Prefix :

-   /api

If versioning is introduced :

-   /api/v1

Example :

-   /api/v1/projects

The project should choose one convention and use it consistently .

---

## 9\. HTTP and HTTPS

Development may use :

-   HTTP

Production must use :

-   HTTPS

Sensitive data such as contact form submissions must not be transmitted over unsecured HTTP in production .

---

## 10\. Supported HTTP Methods

The API may use :

-   GET
-   POST
-   PUT
-   PATCH
-   DELETE

Primary Version 1 usage :

-   GET          →     Retrieve data
-   POST       →      Submit / Create data

Administrative Functionality may later require :

-   PUT
-   PATCH
-   DELETE

---

## 11\. Content Type

Request and Response bodies should primarily use :

-   application/json

Example :

Content - Type : application/json

---

## 12\. JSON Requirements

JSON should use consistent naming .

Recommended :

{ " short\_description " : " REST API for task management . " }

For the Python / FastAPI backend , `snake_case` is recommended .

---

## 13\. Character Encoding

API Responses should use :

-   UTF-8

The API should correctly support :

-   English
-   Special Characters
-   Symbols
-   International Text

---

## 14\. Health Endpoint

### 14.1 Endpoint

GET           /api/health

### 14.2 Purpose

Checks whether the API application is running .

### 14.3 Example Response

{ " status " : " ok " }

---

## 15\. Health Endpoint Status Codes

Successful :

200 OK

If the application cannot serve requests :

503 Service Unavailable

may be returned where appropriate .

---

## 16\. Projects Endpoint

### 16.1 Endpoint

GET           /api/projects

### 16.2 Purpose

Returns the public portfolio projects .

Example :

{

    “ projects ” :

    \[

        {

             “ id ” : 1 ,

             “ title ” : “ Task Management API ” ,

             “ slug ” : “ task - management - api ” ,

             “ short\_description ” : “ API for managing tasks . ” ,

             “ status ” : “ published ” ,

             “ featured ” : true

        }

    \]

}

---

## 17\. Project Listing Requirements

The Project Listing endpoint should :

-   Return public projects .
-   Exclude private records .
-   Return predictable fields .
-   Support ordering .
-   Avoid unnecessary data .
-   Return an empty collection when no projects exist .

Example :

{ " projects " : \[ \] }

An empty list is not an API failure .

---

## 18\. Project Detail Endpoint

### 18.1 Endpoint

GET           /api/projects/{slug}

Example :

GET          /api/projects/task-management-api

The endpoint should return detailed project information .

---

## 19\. Project Detail Response

Possible Structure :

{

    “ id ” : 1 ,

    “ title ” : “ Task Management API ” ,

    “ slug ” : “ task - management - api ” ,

    “ short\_description ” : “ API for managing tasks . ” ,

    “ overview ” : “ A backend application for managing tasks . ” ,

    “ problem ” : “ Users needed a simple way to manage tasks . ” ,

    “ goals ” : \[ “ Create tasks ” , “ Update tasks ” , “ Track status ” \] ,

    “ features ” : \[ “ REST API ” , “ Validation ” , “ Authentication ” \] ,

    “ technologies ” : \[ “ Python ” , “ FastAPI ” , “ PostgreSQL ” \] ,

    “ status ” : “ published ” ,

    “ featured ” : true ,

    “ github\_url ” : “ [https://github.com/example/project](https://github.com/example/project) ” ,

    “ live\_url ” : “ [https://example.com](https://example.com) ”

}

---

## 20\. Project Not Found

If the requested project does not exist :

HTTP    404    Not Found

Example :

{

    “ success ” : false ,

    “ error ” :

    {

        “ code ” : “ PROJECT\_NOT\_FOUND ” ,

        “ message ” : “ Project not found . ”

    }

}

Do not reveal internal database information .

---

## 21\. Project Visibility

Possible Project States :

-   Draft
-   Published
-   Archived
-   Private

Public Endpoints should normally return :

Published

only .

---

## 22\. Featured Projects

The API may support featured project retrieval .

Possible Approach :

GET           /api/projects?featured=true

The query parameter approach is preferred when the endpoint remains a filtered project collection .

---

## 23\. Project Sorting

Possible Query :

GET           /api/projects?sort=date

Possible Sorting Fields :

-   date
-   title
-   display\_order

Only supported sort fields should be accepted .

---

## 24\. Project Filtering

Future Filtering may support :

-   category
-   technology
-   status
-   featured
-   project\_type

Example :

GET           /api/projects?category=backend

The API should reject unsupported filter values when necessary .

---

## 25\. Pagination

Pagination is optional for Version 1 .

Future Example :

GET           /api/projects?page=1&limit=10

Possible Response :

{

    “ projects ” : \[ \] ,

    “ pagination ” :

    {

        “ page ” : 1 ,

        “ limit ” : 10 ,

        “ total ” : 25 ,

        “ total\_pages ” : 3

    }

}

For a small portfolio , Pagination may be unnecessary .

---

## 26\. Skills Endpoint

Optional :

GET           /api/skills

Example :

{

    “ skills ” :

    \[

        {

            “ id ” : 1 ,

            “ name ” : “ Python ” ,

            “ category ” : “ Programming Language ”

        } ,

        {

            “ id ” : 2 ,

            “ name ” : “ FastAPI ” ,

            “ category ” : “ Backend ”

        }

    \]

}

---

## 27\. Experience Endpoint

Optional :

GET           /api/experience

Example :

{

    “ experience ” :

    \[

        {

            “ id ” : 1 ,

            “ role ” : “ Python Developer Intern ” ,

            “ company ” : “ Example Company ” ,

            “ start\_date ” : “ 2026 - 01 ” ,

            “ end\_date ” : null ,

            “ current ” : true

        }

    \]

}

---

## 28\. Education Endpoint

Optional :

GET           /api/education

Example :

{

    “ education ” :

    \[

        {

            “ id ” : 1 ,

            “ degree ” : “ Bachelor’s Degree ” ,

            “ institution ” : “ Example Institution ” ,

            “ field\_of\_study ” : “ Computer Science ” ,

            “ start\_date ” : “ 2023 ” ,

            “ end\_date ” : “ 2027 ”

        }

    \]

}

---

## 29\. Contact Endpoint

### 29.1 Endpoint

POST           /api/contact

### 29.2 Purpose

Accepts messages submitted through the portfolio contact form .

Request :

{

    “ name ” : “ John Doe ” ,

    “ email ” : “ [john@example.com](mailto:john@example.com) ” ,

    “ subject ” : “ Project Opportunity ” ,

    “ message ” :  “ I would like to discuss a project . ”

}

---

## 30\. Contact Request Schema

Required :

-   Name
-   Email
-   Subject
-   Message

Optional :

-   Company

Suggested Validation :

| Field | Required | Minimum | Maximum |
| --- | --- | --- | --- |
| Name | Yes | 2 | 100 |
| Email | Yes | 5 | 254 |
| Subject | Yes | 3 | 150 |
| Message | Yes | 10 | 5000 |
| Company | No | 0 | 200 |

---

## 31\. Contact API Validation

The backend should validate :

-   Required Fields
-   Email Format
-   String Length
-   Empty Values
-   Unexpected Values
-   Request Body Structure

Frontend Validation is not sufficient .

---

## 32\. Contact API Success Response

Example :

{

    “ success ” : true ,

    “ message ” : “ Your message has been sent successfully . ”

}

Recommended Status :

200 OK

or :

201 Created

if a database record is created .

---

## 33\. Contact API Validation Error

Example :

{

    “ success ” : false ,

    “ error ” :

    {

        “ code ” : “ VALIDATION\_ERROR ” ,

        “ message ” : “ Please provide a valid email address . ”

    }

}

Recommended Status :

422 Unprocessable Entity

---

## 34\. Contact Rate Limiting

The endpoint should be Rate Limited .

Example :

Client

    ↓

POST /api/contact

    ↓

Rate Limit

    ├── Allowed → Process

    └── Blocked → 429

Example Response :

{

    “ success ” : false ,

    “ error ” :

    {

        “ code ” : “ RATE\_LIMITED ” ,

        “ message ” : “ Too many requests . Please try again later . ”

    }

}

---

## 35\. Contact Spam Protection

Possible Mechanisms :

-   Rate Limiting
-   Honeypot
-   CAPTCHA / Turnstile
-   Request Throttling

Use the least complicated approach that provides sufficient protection .

---

## 36\. Contact Email Processing

After Validation :

POST      /api/contact

     ↓

Validate

     ↓

Rate Limit

     ↓

Process Message

     ↓

Send Email

     ↓

Optional Database Storage

     ↓

Return Response

The API should not expose email provider credentials or internal errors .

---

## 37\. Contact Failure Handling

If email delivery fails :

Email Failure

        ↓

Log Technical Error

        ↓

Return Safe Error

Example :

{

    “ success ” : false ,

    “ error ” :

    {

        “ code ” : “ CONTACT\_SERVICE\_UNAVAILABLE ” ,

        “ message ” : “ Unable to send your message right now . ”

    }

}

---

## 38\. API Error Format

Recommended common Error Format :

{

    “ success ” : false ,

    “ error ” :

    {

        “ code ” : “ ERROR\_CODE ” ,

        “ message ” : “ Human - Readable error message . ”

    }

}

Optional :

{

    “ success ” : false ,

    “ error ” :

    {

        “ code ” : “ VALIDATION\_ERROR ” ,

        “ message ” : “ Invalid request . ” ,

        “ details ” :

        {

        }

    }

}

Do not expose internal stack traces .

---

## 39\. HTTP Status Code Standards

| Status | Use |
| --- | --- |
| 200 | Successful Request |
| 201 | Resource Created |
| 204 | Successful Request with No Body |
| 400 | Invalid Request |
| 401 | Authentication Required |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Rate Limit Exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

---

## 40\. Request Validation Flow

HTTP Request

    ↓

Parse JSON

    ↓

Pydantic Validation

    ↓

Business Validation

    ↓

Service

    ↓

Database / External Service

Invalid requests should be rejected before unnecessary database or external service operations .

---

## 41\. Response Schema Requirements

Responses should use explicit schemas .

Example :

Database Model

    ↓

Service

    ↓

Response Schema

    ↓

JSON

Do not return raw ORM objects directly without appropriate serialization .

---

## 42\. API Naming Convention

Use Resource - Oriented URLs .

Preferred :

-   /api/projects
-   /api/projects/{slug}
-   /api/contact
-   /api/skills

Avoid :

-   /api/get-all-projects
-   /api/send-message
-   /api/fetch-project

---

## 43\. Path Parameter Requirements

Example :

GET      /api/projects/{slug}

The `slug` should be :

-   URL - Safe
-   Validated
-   Non - Empty

Invalid path parameters should produce an appropriate client error or `404` depending on the situation .

---

## 44\. Query Parameter Requirements

Query Parameters may be used for :

-   Filtering
-   Sorting
-   Pagination
-   Search

Example :

GET /api/projects?featured=true

Unsupported Parameters should be ignored or rejected based on the chosen API policy .

---

## 45\. Search Requirements

Project Search is optional .

Future Example :

GET           /api/projects?search=python

Search should only search intended public fields .

---

## 46\. API Authentication

Public Endpoints do not necessarily require authentication :

-   GET            /api/projects
-   GET            /api/projects/{slug}
-   GET            /api/skills
-   GET            /api/experience
-   GET            /api/education
-   GET            /api/health
-   POST          /api/contact

Administrative Endpoints must require authentication .

---

## 47\. Admin API Authentication

Future Admin endpoints may use :

POST           /api/admin/login

followed by an authenticated mechanism .

Possible Approaches :

-   Secure HTTP - Only Cookies
-   Bearer Tokens
-   Session - Based Authentication

The final method should be selected based on the admin architecture .

---

## 48\. Authorization

Authentication Answers :

-   Who are you ?

Authorization Answers :

-   What are you allowed to do ?

Admin Operations must enforce authorization on the backend .

---

## 49\. Public vs Private Data

Public API Data may include :

-   Project Titles
-   Project Descriptions
-   Technologies
-   Public Experience
-   Public Education
-   Public Links

Private Data must remain private :

-   Contact Messages
-   Admin Credentials
-   Internal Notes
-   Secrets
-   Database Credentials
-   Private Project Information

---

## 50\. CORS Requirements

If frontend and backend are hosted separately , CORS must be configured .

Production should allow trusted frontend origins .

Example :

[https://portfolio.example.com](https://portfolio.example.com)

Avoid unrestricted production CORS unless specifically required .

---

## 51\. API Security Requirements

The API should address :

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

## 52\. SQL Injection Protection

Use :

-   SQLAlchemy
-   Parameterized Queries
-   Safe Database APIs

Do not build SQL using raw user input .

---

## 53\. XSS Protection

API Responses should not unnecessarily return unsanitized user - generated HTML .

Contact Message content should normally be treated as plain text .

---

## 54\. CSRF Considerations

CSRF Protection depends on the authentication method .

For cookie - based authentication :

CSRF Protection

should be considered .

For token - based authentication , Use the appropriate security strategy .

---

## 55\. API Rate Limiting

Rate Limiting should prioritize :

-   POST      /api/contact
-   Authentication Endpoints
-   Administrative Write Endpoints

Public read endpoints may have different limits .

---

## 56\. API Request Size

The backend should limit request body sizes .

This reduces abuse through unnecessarily large payloads .

Example :

Contact Message   →   Maximum 5000 characters

Additional body - size limits should be configured at the server or proxy layer where appropriate .

---

## 57\. Timeout Requirements

External API calls should have defined timeouts .

Examples :

-   Email Provider
-   Third - Party APIs
-   External Services

The API should not wait indefinitely .

---

## 58\. API Idempotency

GET requests should be safe and repeatable .

For operations where duplicate processing could be harmful , Idempotency should be considered .

This is not required for normal Version 1 portfolio functionality .

---

## 59\. API Caching

Public read endpoints may eventually support caching .

Potential Candidates :

-   GET    /api/projects
-   GET     /api/skills
-   GET     /api/experience
-   GET     /api/education

Caching should be introduced only when useful .

---

## 60\. Cache Headers

Future APIs may use Headers such as :

-   Cache - Control
-   ETag
-   Last - Modified

This is optional for Version 1 .

---

## 61\. API Performance

Initial Targets :

Simple GET :

< 500ms under normal conditions

Health :

< 200ms under normal conditions

Contact :

< 2 - 5 seconds depending on email service

Actual performance should be measured after deployment .

---

## 62\. API Payload Optimization

The API should avoid returning unnecessary fields .

Project List :

-   id
-   title
-   slug
-   short\_description
-   thumbnail
-   featured

Project Detail :

Full Project Information

This reduces response size and frontend processing .

---

## 63\. API Pagination Response

If Pagination is introduced :

{

    “ data ” : \[ \] ,

    “ pagination ” :

    {

        “ page ” : 1 ,

        “ limit ” : 10 ,

        “ total ” : 50 ,

        “ total\_pages ” : 5

    }

}

---

## 64\. API Documentation

FastAPI should generate OpenAPI Documentation .

Development :

/docs/redoc

The documentation should accurately describe implemented endpoints .

---

## 65\. OpenAPI Requirements

Each endpoint should define :

-   HTTP Method
-   Path
-   Summary
-   Description
-   Parameters
-   Request Body
-   Response Schema
-   Status Codes
-   Authentication Requirements

---

## 66\. API Testing

The API should have automated tests .

Minimum :

-   Health API
-   Project List API
-   Project Detail API
-   Contact API
-   Validation
-   Error Handling
-   Rate Limiting where implemented

---

## 67\. Project API Test Cases

Test :

-   Get All Projects
-   Get Empty Project List
-   Get Existing Project
-   Get Missing Project
-   Published Project Visibility
-   Featured Filtering
-   Invalid Filter
-   Response Schema

---

## 68\. Contact API Test Cases

Test :

-   Valid Contact Request
-   Missing Name
-   Missing Email
-   Invalid Email
-   Missing Subject
-   Missing Message
-   Message Too Long
-   Invalid JSON
-   Rate Limit
-   Email Service Failure
-   Unexpected Error

---

## 69\. Health API Test Cases

Test :

GET           /api/health

Expected :

HTTP 200

status = ok

---

## 70\. Error Testing

The API should be tested for :

-   400
-   401
-   403
-   404
-   409
-   422
-   429
-   500
-   503

Only statuses relevant to implemented functionality need to be supported in Version 1 .

---

## 71\. API Logging

Useful logs may include :

-   Request Method
-   Request Path
-   Status Code
-   Response Time
-   Request ID
-   Errors
-   Important Events

Avoid Logging :

-   Passwords
-   Tokens
-   API Keys
-   Contact Message Bodies
-   Sensitive Personal Information

---

## 72\. Request ID

A Request ID can help trace errors .

Example :

X - Request - ID : abc123

The exact implementation may be added later .

---

## 73\. API Monitoring

Future Monitoring may track : 

-   Request Count
-   Error Rate
-   Average Response Time
-   Slow Endpoints
-   Rate Limit Events
-   External Service Failures

---

## 74\. API Versioning Strategy

If Versioning is used :

-   /api/v1/projects

Future breaking changes can use :

-   /api/v2/projects

Avoid introducing breaking changes silently .

---

## 75\. Backward Compatibility

When an API is already consumed by the frontend :

-   Avoid removing fields unexpectedly.
-   Avoid changing data types without planning.
-   Avoid renaming endpoints without migration.
-   Document breaking changes.

---

## 76\. API Deprecation

If an endpoint becomes obsolete :

Mark Deprecated

             ↓

Document Replacement

             ↓

Allow Migration Period

             ↓

Remove in Planned Version

This is primarily a future concern .

---

## 77\. API Data Validation Layers

Validation should occur at :

Layer 1 : Frontend

Layer 2 : Pydantic Schema

Layer 3 : Business Logic

Layer 4 : Database Constraints

The Backend and Database must not assume that the frontend behaved correctly .

---

## 78\. API Dependency Injection

FastAPI Dependency Injection may be used for :

-   Database Session
-   Authentication
-   Authorization
-   Configuration
-   Rate Limiting

---

## 79\. API Middleware

Potential Middleware :

-   CORS
-   Request Logging
-   Trusted Host
-   Compression where useful
-   Security Headers

Only necessary middleware should be enabled .

---

## 80\. API Configuration

Configuration should use environment variables .

Example : 

-   API\_PREFIX = /api
-   DATABASE\_URL = …
-   ALLOWED\_ORIGINS = …
-   SECRET\_KEY = …
-   ENVIRONMENT = production

---

## 81\. API Secrets

Never Expose :

-   Database Password
-   Email Password
-   API Keys
-   JWT Secret
-   Private Tokens

through :

-   API Responses
-   Frontend Code
-   Git Repository
-   OpenAPI Examples
-   Logs

---

## 82\. API Folder Structure

Recommended :

backend/

│

├── app/

│       ├── [main.py](http://main.py)

│       │

│       ├── api/

│       │       ├── [dependencies.py](http://dependencies.py)

│       │       └── routes/

│       │                ├── [health.py](http://health.py)

│       │                ├── [projects.py](http://projects.py)

│       │                ├── [skills.py](http://skills.py)

│       │                ├── [experience.py](http://experience.py)

│       │                ├── [education.py](http://education.py)

│       │                └── [contact.py](http://contact.py)

│       │

│       ├── schemas/

│       │       ├── [project.py](http://project.py)

│       │       ├── [skill.py](http://skill.py)

│       │       ├── [experience.py](http://experience.py)

│       │       ├── [education.py](http://education.py)

│       │       └── [contact.py](http://contact.py)

│       │

│       ├── services/

│       ├── repositories/

│       ├── models/

│       ├── core/

│       └── db/

│

├── tests/

│       ├── [test\_health.py](http://test_health.py)

│       ├── [test\_projects.py](http://test_projects.py)

│       └── [test\_contact.py](http://test_contact.py)

│

└── [README.md](http://README.md)

---

## 83\. API Route Responsibilities

Route Files should handle :

-   HTTP Request
-   Request Parameters
-   Schema Validation
-   Service Invocation
-   HTTP Response

They should not contain large database queries or complicated business logic .

---

## 84\. API Service Responsibilities

Services should handle :

-   Business Logic
-   Data Processing
-   External Service Calls
-   Rules
-   Transactions

---

## 85\. API Repository Responsibilities

Repositories should handle :

-   Database Queries
-   CRUD
-   Filtering
-   Retrieval
-   Persistence

---

## 86\. API Schema Responsibilities

Schemas should handle :

-   Request Validation
-   Response Serialization
-   Type Definitions
-   OpenAPI Documentation

---

## 87\. API Data Flow

Example Project Request :

GET         /api/projects

         ↓

FastAPI Route

         ↓

Project Service

         ↓

Project Repository

          ↓

PostgreSQL

          ↓

Project Models

          ↓

Response Schema

          ↓

JSON

          ↓

Frontend

---

## 88\. Contact API Data Flow

Frontend

      ↓

POST      /api/contact

      ↓

Pydantic Validation

      ↓

Rate Limit

      ↓

Contact Service

      ↓

Email Service

      ↓

Optional Database

      ↓

Safe Response

---

## 89\. API Error Flow

Request

      ↓

Exception

      ↓

Exception Handler

      ↓

Log Technical Details

      ↓

Hide Sensitive Details

      ↓

Return Standard Error

---

## 90\. API Documentation Requirements

The project README should document :

-   Base URL
-   Environment Setup
-   Authentication
-   Endpoints
-   Request Examples
-   Response Examples
-   Error Codes
-   Testing
-   Local Development
-   Deployment

---

## 91\. Endpoint Matrix

| Method | Endpoint | Purpose | Auth | Priority |
| --- | --- | --- | --- | --- |
| GET | `/api/health` | Health Check | No | P0 |
| GET | `/api/projects` | Project List | No | P0 |
| GET | `/api/projects/{slug}` | Project Detail | No | P0 |
| POST | `/api/contact` | Contact Submission | No | P0 |
| GET | `/api/skills` | Skills | No | P1 |
| GET | `/api/experience` | Experience | No | P1 |
| GET | `/api/education` | Education | No | P1 |

---

## 92\. Future Admin Endpoint Matrix

| Method | Endpoint | Purpose | Auth |
| --- | --- | --- | --- |
| POST | `/api/admin/login` | Admin Login | No |
| GET | `/api/admin/projects` | Admin Project List | Yes |
| POST | `/api/admin/projects` | Create Project | Yes |
| PUT | `/api/admin/projects/{id}` | Replace Project | Yes |
| PATCH | `/api/admin/projects/{id}` | Update Project | Yes |
| DELETE | `/api/admin/projects/{id}` | Delete Project | Yes |
| GET | `/api/admin/messages` | View Messages | Yes |
| PATCH | `/api/admin/messages/{id}` | Update Message | Yes |

---

## 93\. API Priority Matrix

### P0 - Mandatory

-   Health API
-   Project List API
-   Project Detail API
-   Contact API
-   Request Validation
-   Error Handling
-   OpenAPI Documentation
-   Security Basics
-   Automated Tests

### P1 - Important

-   Skills API
-   Experience API
-   Education API
-   Rate Limiting
-   CORS
-   Request Logging
-   Performance Testing

### P2 - Optional

-   Filtering
-   Sorting
-   Pagination
-   Caching
-   Request IDs
-   Advanced Monitoring

### P3 - Future

-   Admin API
-   Blog API
-   Newsletter API
-   Analytics API
-   Comments API

---

## 94\. API Development Workflow

Recommended :

1\. Define Resource

           ↓

2\. Define Endpoint

           ↓

3\. Define Request Schema

           ↓

4\. Define Response Schema

           ↓

5\. Define Status Codes

           ↓

6\. Implement Route

           ↓

7\. Implement Service

           ↓

8\. Implement Repository

           ↓

9\. Connect Database

           ↓

10\. Add Validation

           ↓

11\. Add Error Handling

           ↓

12\. Write Tests

           ↓

13\. Document Endpoint

           ↓

14\. Integrate Frontend

---

## 95\. API Acceptance Criteria

The API is considered ready when :

-   Base API structure exists .
-   Health Endpoint works .
-   Project Listing works .
-   Project Detail works .
-   Contact Submission works .
-   Request Validation works .
-   Error Responses are consistent .
-   HTTP Status Codes are appropriate .
-   Public Data does not expose private fields .
-   CORS is configured .
-   Rate Limiting protects contact submission .
-   OpenAPI Documentation is accurate .
-   API Tests pass .
-   Production HTTPS is configured .
-   API Secrets are protected .

---

## 96\. API Security Checklist

-   HTTPS in Production
-   Input Validation
-   Request Size Limits
-   Rate Limiting
-   CORS Restrictions
-   Authentication for Admin Endpoints
-   Authorization for Admin Actions
-   SQL Injection Protection
-   XSS Considerations
-   CSRF Protection where applicable
-   Secrets Protected
-   Sensitive Fields excluded from public responses
-   Safe Error Responses
-   Dependency Security

---

## 97\. API Testing Checklist

### 97.1 Functional

-   GET     Health
-   GET     Projects
-   GET     Project Detail
-   POST  Contact
-   GET     Skills if implemented
-   GET     Experience if implemented
-   GET     Education if implemented

### 97.2 Validation

-   Missing Fields
-   Invalid Email
-   Invalid Path Parameter
-   Invalid Query Parameter
-   Excessive Input
-   Malformed JSON

### 97.3 Error Handling

-   404
-   422
-   429
-   500
-   503 where applicable

---

## 98\. Final API Architecture

                                                                     USER

                                                                         │

                                                                         ▼

                                                                 FRONTEND

                                                                         │

                                                               HTTPS / JSON

                                                                          │

                                                                          ▼

                                                        ┌──────────────┐

                                                         │           FASTAPI            │

                                                         └──────┬───────┘

                                                                           │

                                                         ┌──────▼───────┐

                                                          │           ROUTES             │

                                                          └──────┬───────┘

                                                                             │

                                                           ┌──────▼───────┐

                                                            │         SCHEMAS           │

                                                            └──────┬───────┘

                                                                              │

                                                            ┌──────▼───────┐

                                                             │          SERVICES           │

                                                             └──────┬───────┘

                                                                                │

                                                      ┌─────────┴─────────┐

                                                       │                                                 │

                                     ┌──────▼───────┐         ┌──────▼──────┐

                                     │        REPOSITORY         │          │        EMAIL / API       │

                                     └──────┬───────┘           └─────────────┘

                                                        │

                                      ┌──────▼───────┐

                                       │        POSTGRESQL       │

                                       └──────────────┘

---

## 99\. Final API Principles

### 99.1 Rule 1 - Use Clear URLs

Endpoints should describe resources , not implementation details .

### 99.2 Rule 2 - Use HTTP Correctly

Use HTTP Methods and Status Codes consistently .

### 99.3 Rule 3 - Validate Everything

Never trust data simply because it came from your own frontend .

### 99.4 Rule 4 - Keep Responses Predictable

Frontend Developers should not need to guess what an endpoint returns .

### 99.5 Rule 5 - Protect Private Data

Only intentionally public data should appear in public responses .

### 99.6 Rule 6 - Handle Errors Gracefully

Return useful errors without exposing internal server details .

### 99.7 Rule 7 - Document the API

An undocumented API becomes archaeology surprisingly quickly .

### 99.8 Rule 8 - Avoid Overengineering

Implement the endpoints the portfolio actually needs .

---

## 100\. Recommended Version 1 API

The simplest useful Version 1 API is :

-   GET      /api/health
-   GET      /api/projects
-   GET      /api/projects/{slug}
-   POST    /api/contact

Then add :

GET      /api/skills

GET      /api/experience

GET      /api/education

only if these pieces of content are dynamically managed .

---

## 101\. Summary

The API provides the communication layer between the portfolio frontend and backend .

Version 1 should focus on :

REST - Oriented API

   +

FastAPI

   +

JSON

   +

Project Endpoints

   +

Contact Endpoint

   +

Validation

   +

Error Handling

   +

Security

   +

Testing

   +

OpenAPI Documentation

The API should remain small , predictable , and maintainable .

The central principle is :

> **Build an API that the frontend can consume easily , the backend can maintain confidently , and future - you will not have to decode like an ancient artifact .**

---

## 102\. Document Change History

| Version | Date | Author | Changes |
| --- | --- | --- | --- |
| 1.0.0 | 14 Sep 2026 | Mayank Baranwal | Initial API Requirements |

---
