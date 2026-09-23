from fastapi import APIRouter
from app.api.routes import projects, contact

api_router = APIRouter()
api_router.include_router(projects.router, prefix="/projects", tags=["projects"])
api_router.include_router(contact.router, prefix="/contact", tags=["contact"])
