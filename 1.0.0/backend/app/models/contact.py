from sqlalchemy import Column, Integer, String, Text
from app.database.base import Base

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    subject = Column(String, nullable=True)
    message = Column(Text)
    attachment_paths = Column(Text, nullable=True)
