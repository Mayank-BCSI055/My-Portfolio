from app.database.session import SessionLocal
from app.models.project import Project

def seed_data():
    db = SessionLocal()
    
    # Check if we already have projects
    if db.query(Project).first():
        print("Database already seeded with projects.")
        db.close()
        return

    projects = [
        Project(
            title="Portfolio Platform",
            description="A dynamic portfolio platform with a React frontend and FastAPI backend.",
            tech_stack="React, FastAPI, SQLite, Python",
            github_link="https://github.com/",
            live_link="http://localhost:5173",
            image_url="/src/assets/images/projects/project-1.png"
        ),
        Project(
            title="E-commerce API",
            description="A robust e-commerce backend with authentication, product management, and order processing.",
            tech_stack="Python, Django, PostgreSQL",
            github_link="https://github.com/",
            live_link="https://example.com",
            image_url="/src/assets/images/projects/project-2.png"
        )
    ]

    for proj in projects:
        db.add(proj)
    
    db.commit()
    print("Successfully seeded the database with dummy projects!")
    db.close()

if __name__ == "__main__":
    seed_data()
