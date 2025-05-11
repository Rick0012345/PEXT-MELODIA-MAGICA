from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from backend.database.database import Base

class Questao(Base):
    __tablename__ = 'questoes'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    titulo = Column(String, index=True, nullable=False)
    nivel_dificuldade = Column(Integer, nullable=False)

    

    def __repr__(self):
        return f"<Questao(id={self.id}, titulo={self.titulo}, nivel_dificuldade={self.nivel_dificuldade})>"
