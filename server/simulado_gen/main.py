from fastapi import FastAPI, HTTPException
from http import HTTPStatus
from simulado_gen.data import get_questions
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173',
                   'https://simulado-agil.vercel.app',
                   'simulado.site'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get(
    '/api/v1/gerar_simulado', status_code=HTTPStatus.OK, response_model=list
)
async def gerar_simulado(
    numero: int,
    ciencias_natureza: bool = True,
    ciencias_humanas: bool = True,
    matematica: bool = True,
    linguagens: bool = True
    ):

    if (not ciencias_natureza and
        not ciencias_humanas and
        not matematica and
        not linguagens):
        raise HTTPException(
            status_code=HTTPStatus.BAD_REQUEST,
            detail="You need at least one area to be true | Try docs: https://api-simulado-generator.onrender.com/docs"
        )

    simulado = await get_questions(number_questions=numero,
                                   ciencias_humanas=ciencias_humanas,
                                   linguagens=linguagens,
                                   matematica=matematica,
                                   ciencias_natureza=ciencias_natureza)
    return simulado
