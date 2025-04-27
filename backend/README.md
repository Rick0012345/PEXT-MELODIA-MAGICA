# Backend Melodia Mágica

Este é o backend da aplicação Melodia Mágica, construído com FastAPI e MySQL.

## Requisitos

- Python 3.8+
- MySQL
- pip

## Instalação

1. Clone o repositório
2. Crie um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
.\venv\Scripts\activate  # Windows
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure o arquivo `.env` com suas credenciais do banco de dados:
```
DATABASE_URL=mysql+pymysql://usuario:senha@localhost/melodia_magica
SECRET_KEY=sua_chave_secreta_aqui
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Executando o projeto

1. Certifique-se de que o MySQL está rodando
2. Execute o servidor:
```bash
uvicorn main:app --reload
```

3. Acesse a documentação da API em:
```
http://localhost:8000/docs
```

## Estrutura do Projeto

- `main.py`: Ponto de entrada da aplicação
- `database/`: Configuração do banco de dados
- `models/`: Modelos SQLAlchemy
- `schemas/`: Schemas Pydantic
- `routers/`: Rotas da API
- `utils/`: Funções utilitárias 