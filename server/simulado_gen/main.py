from fastapi import FastAPI
from http import HTTPStatus
from simulado_gen.data import get_questions
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/api/v1/gerar_simulado', status_code=HTTPStatus.OK, response_model=list)
async def gerar_simulado(numero: int):
    simulado = await get_questions(numero)
    return simulado

