from sqlalchemy import Column, Integer, String
from app.database.base import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    tech_stack = Column(String)
    github_link = Column(String, nullable=True)
    live_link = Column(String, nullable=True)
    image_url = Column(String, nullable=True)
