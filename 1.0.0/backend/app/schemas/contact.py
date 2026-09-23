from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactMessageBase(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str

class ContactMessageCreate(ContactMessageBase):
    pass

class ContactMessage(ContactMessageBase):
    id: int
    attachment_paths: Optional[str] = None

    class Config:
        from_attributes = True
