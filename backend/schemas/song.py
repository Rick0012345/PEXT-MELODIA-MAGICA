from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class SongBase(BaseModel):
    title: str
    artist: str
    duration: int
    file_path: str

class SongCreate(SongBase):
    pass

class SongUpdate(BaseModel):
    title: Optional[str] = None
    artist: Optional[str] = None
    duration: Optional[int] = None
    file_path: Optional[str] = None

class Song(SongBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True 