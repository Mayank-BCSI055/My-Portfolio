from pydantic import BaseModel
from typing import Optional

class ProjectBase(BaseModel):
    title: str
    description: str
    tech_stack: str
    github_link: Optional[str] = None
    live_link: Optional[str] = None
    image_url: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True
