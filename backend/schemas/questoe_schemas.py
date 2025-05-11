from pydantic import BaseModel

class QuestaoBase(BaseModel):
    titulo: str
    nivel_dificuldade: int

class QuestaoCreate(QuestaoBase):
    pass

class Questao(QuestaoBase):
    id: int

    class Config:
        orm_mode = True
