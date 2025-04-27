from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List
from .song import Song

class PlaylistBase(BaseModel):
    name: str
    description: Optional[str] = None

class PlaylistCreate(PlaylistBase):
    user_id: int

class PlaylistUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None

class PlaylistSongBase(BaseModel):
    song_id: int
    position: int

class PlaylistSongCreate(PlaylistSongBase):
    playlist_id: int

class Playlist(PlaylistBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    songs: List[Song] = []

    class Config:
        from_attributes = True 