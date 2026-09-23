from fastapi import APIRouter, Depends, Form, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
import os
import shutil
import uuid
import json

from app.database.session import get_db
from app.models.contact import ContactMessage as ContactModel
from app.schemas.contact import ContactMessage

router = APIRouter()

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

MAX_FILE_SIZE = 5 * 1024 * 1024 # 5 MB

@router.post("/", response_model=ContactMessage)
async def submit_contact_message(
    name: str = Form(...),
    email: str = Form(...),
    subject: Optional[str] = Form(None),
    message: str = Form(...),
    attachments: Optional[List[UploadFile]] = File(None),
    db: Session = Depends(get_db)
):
    if attachments and len(attachments) > 10:
        raise HTTPException(status_code=400, detail="You can only attach up to 10 files.")

    saved_paths = []
    
    if attachments:
        for attachment in attachments:
            if not attachment.filename:
                continue
                
            # Check file size by seeking to the end
            attachment.file.seek(0, 2)
            file_size = attachment.file.tell()
            attachment.file.seek(0)
            
            if file_size > MAX_FILE_SIZE:
                raise HTTPException(status_code=400, detail=f"File {attachment.filename} exceeds the 5MB limit.")
                
            file_ext = attachment.filename.split('.')[-1] if '.' in attachment.filename else ''
            unique_filename = f"{uuid.uuid4().hex}.{file_ext}" if file_ext else uuid.uuid4().hex
            file_path = os.path.join(UPLOAD_DIR, unique_filename)
            
            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(attachment.file, buffer)
            
            saved_paths.append(file_path)

    attachment_paths_json = json.dumps(saved_paths) if saved_paths else None

    db_message = ContactModel(
        name=name,
        email=email,
        subject=subject,
        message=message,
        attachment_paths=attachment_paths_json
    )
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

@router.get("/", response_model=List[ContactMessage])
def get_contact_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    messages = db.query(ContactModel).offset(skip).limit(limit).all()
    return messages
