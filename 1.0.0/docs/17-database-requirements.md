# Portfolio Website - Database Requirements

> **Document :** `17-database-requirements.md`  
> **Project :** Personal Portfolio Website  
> **Version :** 1.0.0  
> **Status :** Planning  
> **Author :** Mayank Baranwal  
> **Last Updated :** 14 September 2026

---

## 1\. Introduction

This document defines the database requirements for the Personal Portfolio Website .

The database is responsible for storing structured information that needs to be managed , retrieved , updated , or persisted by the backend .

The database may contain :

-   Projects
-   Skills
-   Experience
-   Education
-   Contact Messages

Future database content may include :

-   Blog Posts
-   Admin Users
-   Project Technologies
-   Categories
-   Tags
-   Newsletter Subscribers
-   Analytics Data

The database should be designed to be :

-   Simple
-   Reliable
-   Secure
-   Maintainable
-   Extensible

A portfolio does not need a database just to prove that databases exist . The database should be used where persistence and dynamic management provide real value .

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

[16-backend-requirements.md](http://16-backend-requirements.md)

Database development fits into the larger architecture :

Frontend

       ↓

Backend API

       ↓

Services

       ↓

Repository / Data Access

       ↓

Database

---

## 3\. Database Goals

The Database Goals should :

1.  Store structured portfolio information .
2.  Support project management .
3.  Support contact message storage where required .
4.  Maintain data consistency .
5.  Provide efficient data retrieval .
6.  Support future content expansion .
7.  Protect sensitive information .
8.  Support database migrations .
9.  Support backups and recovery .
10.  Be easy to understand and maintain .

---

## 4\. Database Scope

### 4.1 Version 1

Recommended :

-   Projects
-   Skills
-   Experience
-   Education
-   Contact Messages

Optional :

-   Project Technologies
-   Categories
-   Tags

### 4.2 Future

-   Admin Users
-   Blog Posts
-   Newsletter Subscribers
-   Analytics
-   Comments

---

## 5\. Recommended Relational Database

The Recommended Relational Database is :

PostgreSQL

Reasons :

-   Reliable relational database .
-   Strong data integrity .
-   Good support for structured data .
-   Works well with Python .
-   Works well with SQLAlchemy .
-   Suitable for production applications .
-   Provides useful indexing and querying capabilities .
-   Can grow with the portfolio application .

---

## 6\. Database Architecture

Recommended Database Architecture :

FastAPI

     ↓

Service Layer

     ↓

Repository / Data Access

     ↓

SQLAlchemy

     ↓

PostgreSQL

The frontend should never connect directly to PostgreSQL .

Correct :

Frontend

      ↓

Backend API

      ↓

Database

Incorrect :

Frontend

       ↓

PostgreSQL

---

## 7\. Database Design Principles

The database should follow :

-   Consistency
-   Integrity
-   Security
-   Simplicity
-   Performance
-   Maintainability

The design should avoid unnecessary tables and relationships .

---

## 8\. Relational Database Model

The initial database can be represented as :

projects

     │

     ├──────── project\_technologies ─────── technologies

     │

     └──────── project\_categories ───────── categories

skills

experience

education

contact\_messages

Some relationships may be simplified depending on implementation .

---

## 9\. Database Entities

Primary Entities :

| Entity | Purpose | Priority |
| --- | --- | --- |
| Project | Stores Portfolio Projects | P0 |
| Skill | Stores Technical / Professional Skills | P1 |
| Experience | Stores Work Experience | P1 |
| Education | Stores Education | P1 |
| Contact Message | Stores Visitor Messages | P0 |
| Technology | Reusable Project Technologies | P2 |
| Category | Project / Content Classification | P2 |
| Admin User | Future Content Administration | P3 |
| Blog Post | Future Blog System | P3 |

---

## 10\. Project Entity

The `projects` table stores portfolio project information .

Possible Fields :

-   id
-   title
-   slug
-   short\_description
-   overview
-   problem
-   goals
-   features
-   architecture
-   challenges
-   solutions
-   results
-   lessons\_learned
-   role
-   team\_size
-   project\_type
-   status
-   featured
-   start\_date
-   end\_date
-   github\_url
-   live\_url
-   documentation\_url
-   created\_at
-   updated\_at

---

## 11\. Project Table

Recommended Initial Structure :

projects

├── id

├── title

├── slug

├── short\_description

├── overview

├── problem

├── goals

├── features

├── architecture

├── challenges

├── solutions

├── results

├── lessons\_learned

├── role

├── team\_size

├── project\_type

├── status

├── featured

├── start\_date

├── end\_date

├── github\_url

├── live\_url

├── documentation\_url

├── created\_at

└── updated\_at

Not every field must be implemented in Version 1 .

---

## 12\. Project ID

The Project ID should be the primary key .

Recommended :

id

Type :

Integer / BIGINT

The database should automatically generate IDs .

Example :

1234

---

## 13\. Project Title

Field :

title

Requirements :

-   Required .
-   Human - Readable .
-   Unique where appropriate .
-   Reasonable maximum length .

Suggested :

VARCHAR ( 150 )

---

## 14\. Project Slug

Field :

slug

Example :

-   Personal - Portfolio
-   Task - Management - Api
-   Weather - Dashboard

Requirements :

-   Required
-   URL - Safe
-   Lowercase
-   Unique
-   Stable

Recommended :

-   VARCHAR ( 180 ) 
-   UNIQUE

---

## 15\. Project Description

Field :

short\_description

Purpose :

-   Project Card
-   Project Listing
-   SEO Description
-   Preview

Recommended :

VARCHAR ( 300 )

---

## 16\. Project Long Content

Possible Fields :

-   overview
-   problem
-   goals
-   features
-   architecture
-   challenges
-   solutions
-   results
-   lessons\_learned

These fields may use :

TEXT

Large content should be stored as text rather than artificially limiting it to small string sizes .

---

## 17\. Project Role

Field :

role

Example :

-   Backend Developer
-   Full Stack Developer
-   Python Developer
-   Solo Developer

Recommended :

VARCHAR ( 150 )

---

## 18\. Project Team Size

Field :

team\_size

Possible values :

12345…

This field may be nullable for projects where team information is not relevant .

---

## 19\. Project Type

Field :

project\_type

Possible values :

-   Personal
-   Academic
-   Professional
-   Internship
-   Open Source
-   Freelance
-   Experiment

---

## 20\. Project Status

Field :

status

Recommended values :

-   Draft
-   Published
-   Archived

Optional :

in\_progress

The public website should normally display only appropriate public states .

---

## 21\. Featured Project

Field :

featured

Type :

BOOLEAN

Example :

-   true
-   false

This can control which projects appear in featured sections .

---

## 22\. Project Dates

Possible fields :

-   start\_date
-   end\_date

Type :

DATE

If a project is still active :

end\_date = NULL

---

## 23\. Project Links

Possible Fields :

-   github\_url
-   live\_url
-   documentation\_url

Requirements :

-   Valid URL format .
-   Nullable when a link does not exist .
-   HTTPS preferred .
-   Do not store secrets in URLs .

---

## 24\. Skill Entity

The `skills` table stores technical and professional skills .

Possible Fields :

-   id
-   name
-   category
-   description
-   proficiency
-   display\_order
-   featured
-   created\_at
-   updated\_at

---

## 25\. Skill Table

skills

├── id

├── name

├── category

├── description

├── proficiency

├── display\_order

├── featured

├── created\_at

└── updated\_at

---

## 26\. Skill Name

Field :

name

Examples :

-   Python
-   FastAPI
-   SQL
-   PostgreSQL
-   Git
-   Docker
-   JavaScript

The skill name should be unique where practical .

---

## 27\. Skill Category

Possible Categories :

-   Programming Language
-   Backend
-   Frontend
-   Database
-   DevOps
-   Tools
-   Soft Skills
-   Other

A separate category table may be introduced later if category management becomes necessary .

---

## 28\. Skill Proficiency

A proficiency field is optional .

Possible Representation :

-   Beginner
-   Intermediate
-   Advanced

Avoid presenting subjective proficiency as objective fact .

A simpler portfolio may omit this field entirely and instead communicate competence through projects and experience .

---

## 29\. Skill Display Order

Field :

display\_order

Purpose :

1234…

The frontend can use this value to control presentation order .

---

## 30\. Experience Entity

The `experience` table stores professional experience .

Possible Fields :

-   id
-   role
-   company
-   location
-   employment\_type
-   description
-   start\_date
-   end\_date
-   current
-   display\_order
-   created\_at
-   updated\_at

---

## 31\. Experience Table

experience

├── id

├── role

├── company

├── location

├── employment\_type

├── description

├── start\_date

├── end\_date

├── current

├── display\_order

├── created\_at

└── updated\_at

---

## 32\. Experience Role

Example :

-   Python Developer Intern
-   Backend Developer
-   Software Developer

Required :

role

Recommended :

VARCHAR ( 150 )

---

## 33\. Experience Company

Field :

company

Recommended :

VARCHAR ( 200 )

Company information should only be displayed if it is appropriate to publish .

---

## 34\. Experience Location

Optional field :

location

Examples :

Pune , India

Remote

Hybrid

Avoid storing unnecessary precise location information .

---

## 35\. Employment Type

Possible Values :

-   Internship
-   Full - Time
-   Part - Time
-   Freelance
-   Contract
-   Volunteer

---

## 36\. Experience Dates

Required :

start\_date

Optional :

end\_date

For current experience :

-   current = true
-   end\_date = NULL

---

## 37\. Education Entity

The `education` table stores educational information .

Possible Fields :

-   id
-   degree
-   institution
-   field\_of\_study
-   description
-   start\_date
-   end\_date
-   current
-   display\_order
-   created\_at
-   updated\_at

---

## 38\. Education Table

education

├── id

├── degree

├── institution

├── field\_of\_study

├── description

├── start\_date

├── end\_date

├── current

├── display\_order

├── created\_at

└── updated\_at

---

## 39\. Contact Message Entity

The `contact_messages` table stores messages submitted through the Contact Form .

Possible Fields :

-   id
-   name
-   email
-   subject
-   message
-   status
-   ip\_hash
-   created\_at
-   updated\_at

Only fields that are genuinely needed should be stored .

---

## 40\. Contact Message Table

contact\_messages

├── id

├── name

├── email

├── subject

├── message

├── status

├── ip\_hash

├── created\_at

└── updated\_at

---

## 41\. Contact Message Status

Possible States :

-   new
-   read
-   replied
-   archived
-   spam

Default :

new

---

## 42\. Contact Message Privacy

Contact Messages may contain personal information .

Requirements :

-   Restrict access .
-   Avoid unnecessary logs .
-   Protect database access .
-   Do not expose messages through public APIs .
-   Define a retention policy .
-   Delete old messages when no longer required .

---

## 43\. IP Address Handling

If abuse prevention requires IP tracking , avoid storing raw IP addresses unless necessary .

Possible Approach :

IP Address

       ↓

Hash / Anonymize

       ↓

Store Limited Identifier

The exact approach should follow the application’s privacy requirements .

---

## 44\. Technology Entity

If projects need technology filtering , create a reusable `technologies` table .

Possible Fields :

-   id
-   name
-   slug
-   category
-   created\_at
-   updated\_at

---

## 45\. Technology Table

technologies

├── id

├── name

├── slug

├── category

├── created\_at

└── updated\_at

Example :

-   Python
-   FastAPI
-   PostgreSQL
-   Docker
-   React

---

## 46\. Project Technology Relationship

A project can use multiple technologies .

A technology can belong to multiple projects .

Therefore :

Project

     ↕

Many - to - Many

     ↕

Technology

Use a junction table :

project\_technologies

---

## 47\. Project Technologies Table

project\_technologies

├── project\_id

└── technology\_id

Constraints :

-   project\_id → [projects.id](http://projects.id)
-   technology\_id → [technologies.id](http://technologies.id)

Recommended composite primary key :

( project\_id , technology\_id )

This prevents duplicate project - technology relationships .

---

## 48\. Category Entity

Categories are optional .

Possible Table :

categories

├── id

├── name

├── slug

├── description

├── created\_at

└── updated\_at

Use this only when categories need to be managed independently .

---

## 49\. Project Category

A project may have one category in a simple design :

projects.category

A more flexible design can support many categories :

projects

     ↕

project\_categories

     ↕

categories

Version 1 should prefer the simpler design unless multiple categories are actually required .

---

## 50\. Database Relationships

Initial Relationships :

Project

   │

   ├──< ProjectTechnology >── Technology

   │

   └── Category ( optional )

Contact Message

   │

   └── Standalone

Skill

    │

    └── Standalone

Experience

    │

    └── Standalone

Education

    │

    └── Standalone

---

## 51\. Primary Keys

Every main entity should have a primary key .

Recommended :

-   [projects.id](http://projects.id)
-   [skills.id](http://skills.id)
-   [experience.id](http://experience.id)
-   [education.id](http://education.id)
-   [contact\_messages.id](http://contact_messages.id)
-   [technologies.id](http://technologies.id)
-   [categories.id](http://categories.id)

Use automatically generated numeric IDs unless there is a specific reason to use UUIDs .

---

## 52\. Foreign Keys

Foreign Keys should enforce valid relationships .

Example :

project\_technologies.project\_id

       ↓

[projects.id](http://projects.id)

and :

project\_technologies.technology\_id

        ↓

[technologies.id](http://technologies.id)

---

## 53\. Referential Integrity

The database should prevent invalid relationships .

Example :

Technology does not exist

         ↓

Cannot create project\_technology relationship

This protects database consistency .

---

## 54\. Delete Behavior

Foreign Key Delete Behavior should be explicitly considered .

For junction records :

Delete Project

         ↓

Delete Related project\_technologies

Possible Strategy :

ON DELETE CASCADE

Use cascading deletes carefully .

Do not cascade - delete valuable data accidentally .

---

## 55\. Nullability

Use `NULL` when information is genuinely optional .

Example :

end\_date = NULL

when a project or experience is still active .

Do not store meaningless placeholder values such as :

-   " None "
-   " N / A "
-   " Unknown "

when a database `NULL` is more appropriate .

---

## 56\. Data Types

Use appropriate PostgreSQL Data Types .

Examples :

id                   →   INTEGER / BIGINT

title                →   VARCHAR

description    →   TEXT

featured        →   BOOLEAN

date              →   DATE

timestamp    →   TIMESTAMP WITH TIME ZONE

---

## 57\. Timestamps

Recommended Fields :

-   created\_at
-   updated\_at

Use timezone - aware timestamps where appropriate .

Recommended Strategy :

Store in UTC

          ↓

Convert for display

---

## 58\. Unique Constraints

Useful unique fields may include :

-   projects.slug
-   technologies.slug
-   categories.slug

Skill names may also be unique if the application does not allow duplicates .

---

## 59\. Database Indexes

Indexes should be added to fields frequently used for :

-   Lookup
-   Filtering
-   Sorting
-   Relationships

Potential Indexes :

-   projects.slug
-   projects.status
-   projects.featured
-   projects.created\_at
-   contact\_messages.created\_at
-   contact\_messages.status
-   technologies.slug

Do not index every column automatically .

Indexes improve reads but add storage and write overhead .

---

## 60\. Project Query Requirements

Common Queries :

-   Get all published projects
-   Get featured projects
-   Get project by slug
-   Filter projects by category
-   Filter projects by technology
-   Sort projects

The database should support these efficiently .

---

## 61\. Contact Query Requirements

Administrative functionality may need :

-   Get newest messages
-   Get unread messages
-   Filter by status
-   Get message by ID
-   Update message status
-   Archive message

These endpoints should remain protected .

---

## 62\. Data Validation

Validation should exist at multiple levels :

Frontend Validation

           ↓

Backend Validation

           ↓

Database Constraints

Each layer has a different purpose .

Database Constraints are the final line of defense for data integrity .

---

## 63\. Database Constraints

Use constraints where appropriate :

-   PRIMARY KEY
-   FOREIGN KEY
-   UNIQUE
-   NOT NULL
-   CHECK

Example :

projects.slug   →   UNIQUE

---

## 64\. Check Constraints

Use check constraints for rules that should always be true .

Example Concept :

team\_size >= 1

Another Example :

start\_date <= end\_date

where the data model requires both dates . 

---

## 65\. Normalization

The database should avoid unnecessary duplication .

Example :

Instead of storing :

Python , FastAPI , PostgreSQL

as repeated text in many records , A normalized structure may use :

-   technologies
-   project\_technologies
-   projects

However , Normalization should not be applied mechanically .

For a small portfolio , Simplicity remains important .

---

## 66\. Denormalization

Denormalization may be acceptable when :

Performance Requires It

Data Is Small

Query Simplicity Is Valuable

Any denormalization should be documented .

---

## 67\. Database Migrations

Schema changes must use migrations .

Recommended Tool :

Alembic

Workflow :

Modify SQLAlchemy Model

   ↓

Generate / Write Migration

   ↓

Review Migration

   ↓

Run Migration

   ↓

Test

---

## 68\. Migration Rules

Migration Files should :

-   Be committed to Git .
-   Be reviewed before deployment .
-   Be tested .
-   Avoid destructive changes without a recovery plan .
-   Match the application schema .

---

## 69\. Seed Data

Development may use Seed Data .

Example :

-   Sample Projects
-   Sample Skills
-   Sample Experience
-   Sample Education

Seed Data should never contain real secrets or private messages .

---

## 70\. Production Data

Production Data should be separated from development data .

Never use real production contact messages as casual development test data .

---

## 71\. Database Environments

Recommended :

-   Development Database
-   Testing Database
-   Production Database

Example :

-   portfolio\_dev
-   portfolio\_test
-   portfolio\_prod

---

## 72\. Database Connection Configuration

Database Connection should be configured through an environment variable .

Example :

DATABASE\_URL = postgresql://…

Do not hard - code credentials in Python files .

---

## 73\. Database Credentials

Database Credentials must :

-   Never be committed to Git .
-   Never be included in frontend code .
-   Never be exposed through API responses .
-   Be stored using secure environment configuration .
-   Be rotated when necessary .

---

## 74\. Database Access

Only the backend should normally access the production database .

Architecture :

Internet

     ↓

Frontend

     ↓

Backend

     ↓

Private Database

The database should not be directly exposed to the public internet unless the infrastructure requires it and access is securely restricted .

---

## 75\. Database Security

Database Security measures should include :

-   Strong Credentials
-   Restricted Network Access
-   Least Privilege
-   Encrypted Connections
-   Regular Updates
-   Backups
-   Access Logging

---

## 76\. Database User Permissions

Use least privilege .

Application users should have only the permissions they need .

Avoid running the application using a database superuser .

---

## 77\. Database Encryption

Where supported :

Application ↔ Database

should use encrypted connections .

Sensitive information stored in the database should be protected according to its sensitivity .

---

## 78\. Contact Message Retention

A retention policy should be defined .

Example Policy :

New / Active Messages

      ↓

Keep while needed

      ↓

Archived

      ↓

Delete after defined retention period

The actual retention duration should be decided based on business and privacy requirements .

---

## 79\. Backup Requirements

If production data is stored , Backups should exist .

Recommended :

Automated Database Backup

            ↓

Secure Backup Storage

            ↓

Periodic Restore Test

---

## 80\. Backup Frequency

For a small portfolio :

Daily or provider - managed backups

may be sufficient .

The final frequency depends on :

-   Data Volume
-   Change Frequency
-   Hosting Provider
-   Recovery Requirements

---

## 81\. Recovery Requirements

Document :

-   Backup Location
-   Restore Procedure
-   Database Credentials
-   Migration Process
-   Application Restart Process

Recovery should be tested periodically .

---

## 82\. Database Performance

Database Performance considerations :

-   Indexes
-   Efficient Queries
-   Connection Pooling
-   Pagination
-   Limited Payloads
-   Avoiding N+1 Queries

---

## 83\. N+1 Query Prevention

When loading projects and related technologies , avoid executing one query per project unnecessarily .

Prefer appropriate eager loading or joined queries where justified .

Example Problem :

Get 10 Projects

          ↓

10 Additional Technology Queries

Better :

Get Projects + Required Related Data

using an appropriate SQLAlchemy loading strategy .

---

## 84\. Database Connection Pooling

Database Connections should use appropriate pooling .

Benefits :

-   Reduced Connection Overhead
-   Better Resource Management
-   Improved Request Handling

Pool size should be configured according to deployment resources .

---

## 85\. Database Transactions

Use Database Transactions for operations that must succeed or fail together .

Example :

Create Project

          +

Create Project Technology Relationships

If one required operation fails , The transaction should roll back where appropriate .

---

## 86\. Transaction Safety

The application should avoid partial updates .

Example :

Update Project

          ↓

Update Related Data

          ↓

All Successful → Commit

Any Required Failure → Rollback

---

## 87\. Concurrency

For a small portfolio , Concurrency requirements are low .

Still , The database should protect against :

-   Duplicate Unique Values
-   Lost Updates
-   Invalid Relationships
-   Partial Transactions

---

## 88\. Soft Delete

Soft Deletion may be used for important records .

Example :

deleted\_at

However , Soft Delete should not be added automatically to every table .

For simple portfolio content , Status Fields such as :

-   draft
-   archived

may be sufficient .

---

## 89\. Audit Information

Future administrative features may require :

-   created\_by
-   updated\_by
-   created\_at
-   updated\_at

This is not mandatory for Version 1 .

---

## 90\. Database API Boundary

The frontend must interact through backend APIs .

Correct :

Frontend

     ↓   JSON

FastAPI

     ↓   SQLAlchemy

PostgreSQL

The frontend should never receive raw database objects .

---

## 91\. Serialization

Database Models should be converted into API Schemas .

Flow :

Database Model

     ↓

Service

     ↓

Pydantic Schema

     ↓

JSON Response

This prevents accidental exposure of internal database fields .

---

## 92\. Sensitive Field Protection

Sensitive database fields must not be included in public schemas .

Examples :

-   Admin Password Hash
-   Internal Notes
-   Private Contact Metadata
-   Security Tokens
-   Internal IDs where unnecessary

---

## 93\. Database Error Handling

Database Errors should be handled safely .

Example :

Database Error

         ↓

Rollback Transaction

         ↓

Log Technical Error

         ↓

Return Safe API Response

Do not expose raw database exceptions to visitors .

---

## 94\. Database Monitoring

Future Database Monitoring may track :

-   Connection Count
-   Query Performance
-   Database Size
-   Failed Queries
-   Storage Usage
-   Backup Status

Version 1 may rely on the hosting provider’s monitoring .

---

## 95\. Database Maintenance

Regular Database Maintenance should include :

-   Dependency Updates
-   Database Updates
-   Backup Verification
-   Index Review
-   Unused Data Cleanup
-   Migration Review
-   Security Review

---

## 96\. Database Documentation

The Database Documentation should include :

-   Schema Overview
-   Entity Definitions
-   Relationships
-   Environment Variables
-   Migration Instructions
-   Backup Strategy
-   Recovery Instructions
-   Security Notes

---

## 97\. Recommended Database Folder Structure

Backend database code may use :

backend/

│

├── app/

│      ├── db/

│      │      ├── [session.py](http://session.py)

│      │      ├── [base.py](http://base.py)

│      │      └── [seed.py](http://seed.py)

│      │

│      ├── models/

│      │      ├── [project.py](http://project.py)

│      │      ├── [skill.py](http://skill.py)

│      │      ├── [experience.py](http://experience.py)

│      │      ├── [education.py](http://education.py)

│      │      ├── [contact.py](http://contact.py)

│      │      └── [technology.py](http://technology.py)

│      │

│      └── schemas/

│

├── alembic/

│      ├── versions/

│      └── [env.py](http://env.py)

│

└── tests/

---

## 98\. Entity Relationship Diagram

Initial Conceptual Model :

     ┌───────────────┐

     │             PROJECT            │

     ├───────────────┤

      │     id                              │

      │     title                           │

      │     slug                           │

      │     description                │

      │     status                         │

      │     featured                     │

      └───────┬───────┘ 

                           │

                           │

                           ▼

┌──────────────────────┐

│        PROJECT\_TECHNOLOGIES        │

├──────────────────────┤

│     project\_id                                     │

│     technology\_id                              │

└──────────┬───────────┘

                             │

                            ▼

        ┌────────────────┐

        │          TECHNOLOGY         │

        ├────────────────┤

        │    id                                   │

        │    name                             │

        │    slug                               │

        │    category                        │

        └────────────────┘

        ┌───────────────┐

        │               SKILL                │

        ├───────────────┤

        │    id                                │

        │    name                          │

        │    category                     │

        │    display\_order              │

        └───────────────┘

        ┌───────────────┐

        │          EXPERIENCE          │

        ├───────────────┤

        │    id                                │

        │    role                             │

        │    company                    │

        │    start\_date                   │

        │    end\_date                    │

       └───────────────┘

       ┌───────────────┐

       │          EDUCATION         │

       ├───────────────┤

       │    id                                │

       │    degree                        │

       │    institution                   │

       │    field                            │

       │    start\_date                   │

       │    end\_date                    │

       └───────────────┘

 ┌────────────────────┐

 │         CONTACT\_MESSAGES        │

 ├────────────────────┤

 │    id                                             │

 │    name                                       │

 │    email                                       │

 │    subject                                    │

 │    message                                  │

 │    status                                      │

 │    created\_at                               │

 └────────────────────┘

---

## 99\. Database Table Summary

| Table | Main Purpose | Version |
| --- | --- | --- |
| projects | Portfolio Projects | V1 |
| skills | Skills | V1 |
| experience | Professional Experience | V1 |
| education | Education | V1 |
| contact\_messages | Visitor Messages | V1 |
| technologies | Reusable Technologies | Optional V1 |
| project\_technologies | Project - Technology Relationship | Optional V1 |
| categories | Reusable Categories | Future |
| admin\_users | Admin Access | Future |
| blog\_posts | Blog | Future |

---

## 100\. Database Requirement IDs

The following identifiers can be used during implementation :

DB - 001      PostgreSQL Database

DB - 002      Project Storage

DB - 003      Contact Message Storage

DB - 004      Primary Keys

DB - 005      Foreign Keys

DB - 006      Unique Constraints

DB - 007      Data Validation

DB - 008      Database Migrations

DB - 009      Secure Credentials

DB - 010      Database Backups

DB - 011      Database Recovery

DB - 012      Indexing

DB - 013      Transaction Management

DB - 014      Connection Pooling

DB - 015      Privacy Controls

---

## 101\. Database Priority Matrix

### 101.1 P0 - Mandatory

-   PostgreSQL
-   Project Table
-   Contact Message Table if messages are stored
-   Primary Keys
-   Data Validation
-   Migration System
-   Secure Credentials
-   Basic Backup Strategy

### 101.2 P1 - Important

-   Skills
-   Experience
-   Education
-   Indexes
-   Foreign Keys
-   Transactions
-   Connection Pooling
-   Database Testing

### 101.3 P2 - Optional

-   Technologies
-   Project - Technologies
-   Categories
-   Advanced Filtering
-   Soft Delete
-   Audit Fields

### 101.3 P3 - Future

-   Admin Users
-   Blog
-   Newsletter
-   Analytics
-   Comments
-   Advanced Audit System

---

## 102\. Database Testing Requirements

Database Tests should verify :

-   Table Creation
-   Required Fields
-   Unique Constraints
-   Foreign Keys
-   Relationships
-   CRUD Operations
-   Transactions
-   Invalid Data
-   Migration Behavior

---

## 103\. Project Database Tests

Test :

-   Create Project
-   Read Project
-   Update Project
-   Delete / Archive Project
-   Duplicate Slug
-   Missing Required Fields
-   Published Status
-   Featured Status
-   Technology Relationship

---

## 104\. Contact Database Tests

Test :

-   Create Message
-   Read Message
-   Update Status
-   Invalid Email
-   Missing Required Data
-   Long Message
-   Transaction Failure

---

## 105\. Relationship Tests

Test :

Project   ↔   Technology

including :

-   Create Relationship
-   Read Relationship
-   Duplicate Relationship
-   Delete Relationship
-   Invalid Project
-   Invalid Technology

---

## 106\. Migration Testing

Before Deployment :

Fresh Database

          ↓

Run All Migrations

          ↓

Verify Schema

          ↓

Insert Test Data

          ↓

Run Application Tests

---

## 107\. Backup Testing

A Backup is useful only if it can actually be restored .

Recommended Workflow :

Create Backup

       ↓

Create Temporary Database

       ↓

Restore Backup

       ↓

Verify Data

       ↓

Delete Temporary Database

---

## 108\. Production Database Checklist

-   PostgreSQL configured
-   Secure Credentials configured
-   Network Access restricted
-   Application User created
-   Migrations applied
-   Indexes reviewed
-   Backups enabled
-   Recovery Process documented
-   Monitoring available
-   Sensitive Data protected

---

## 109\. Database Development Workflow

Recommended Order :

1\. Define Entities

        ↓

2\. Define Fields

        ↓

3\. Define Relationships

        ↓

4\. Define Constraints

        ↓

5\. Create SQLAlchemy Models

        ↓

6\. Create Migration

        ↓

7\. Create Database

        ↓

8\. Seed Development Data

        ↓

9\. Create Repository Functions

        ↓

10\. Create API Integration

        ↓

11\. Write Tests

        ↓

12\. Review Performance

        ↓

13\. Configure Backups

        ↓

14\. Deploy

---

## 110\. Database Integration Flow

Frontend

     ↓

FastAPI

     ↓

Pydantic Schema

     ↓

Service Layer

     ↓

Repository

     ↓

SQLAlchemy

     ↓

PostgreSQL

     ↓

Database Result

     ↓

SQLAlchemy Model

     ↓

Pydantic Response

     ↓

JSON ↓Frontend

---

## 111\. Database Security Flow

Application

        ↓

Secure Credentials

        ↓

Restricted Database User

        ↓

Encrypted Connection

        ↓

PostgreSQL

        ↓

Access Control

---

## 112\. Database Backup Flow

Production Database

           ↓

Automated Backup

           ↓

Secure Storage

           ↓

Backup Verification

           ↓

Recovery Procedure

---

## 113\. Database Acceptance Criteria

The Database is considered ready when :

-   PostgreSQL is configured . 
-   Required tables are created .
-   Primary keys exist .
-   Required foreign keys exist .
-   Required unique constraints exist .
-   Required fields are validated .
-   Migrations work .
-   Database Credentials are secure .
-   Backend can connect successfully .
-   CRUD Operations work where required .
-   Transactions are handled correctly .
-   Indexes are reviewed .
-   Tests pass .
-   Backups are configured where required .
-   Recovery Documentation exists .
-   Sensitive Data is protected .

---

## 114\. Recommended Version 1 Database

For a beginner - friendly implementation , The recommended initial database can remain small :

-   projects
-   skills
-   experience
-   education
-   contact\_messages

If project technology filtering is required :

-   technologies
-   project\_technologies

can be added .

This provides enough functionality without turning a portfolio into a database administration thesis .

---

## 115\. Final Database Principles

### 115.1 Rule 1 - Store What You Need

Do not collect or store unnecessary information .

### 115.2 Rule 2 - Protect Data Integrity

Use constraints , relationships , and validation .

### 115.3 Rule 3 - Keep the Schema Understandable

A future version of you should be able to understand the database without summoning an archaeologist .

### 115.4 Rule 4 - Use Migrations

Never rely on undocumented manual schema changes .

### 115.5 Rule 5 - Protect Credentials

Database Passwords and Connection Strings must remain private .

### 115.6 Rule 6 - Back Up Important Data

A database without a recovery strategy is a very confident single point of failure .

### 115.7 Rule 7 - Optimize Based on Evidence

Start simple . Measure performance . Optimize actual problems .

### 115.8 Rule 8 - Keep Future Features Separate

Do not create tables for features that may never exist .

---

## 116\. Summary

The database should provide a reliable persistence layer for the portfolio backend .

The initial database should focus on :

PostgreSQL

   +

Projects

   +

Skills

   +

Experience

   +

Education

   +

Contact Messages

   +

Constraints

   +

Migrations

   +

Security

   +

Backups

   +

Testing

The database should remain intentionally simple while supporting future growth .

The central principle is :

> **Design a database that stores the right information , protects its integrity , and remains simple enough for one developer to understand and maintain .**

---

## 117\. Document Change History

| Version | Date | Author | Changes |
| --- | --- | --- | --- |
| 1.0.0 | 14 Sep 2026 | Mayank Baranwal | Initial Database Requirements |

---
