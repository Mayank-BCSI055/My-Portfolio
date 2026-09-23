from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.database.session import engine
from app.database.base import Base
# Import all models to ensure they are registered before create_all
from app.models import project, contact

# Create the database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

# Configure CORS for frontend access
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "*"  # Allows all origins for development, can restrict in production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to Portfolio API"}
