FROM python:3.13-slim

WORKDIR /app

<<<<<<< HEAD:server/Dockerfile
RUN apt-get update && apt-get install -y curl build-essential && apt-get clean

RUN curl -sSL https://install.python-poetry.org | python3 -

ENV PATH="/root/.local/bin:$PATH"

COPY pyproject.toml poetry.lock ./
RUN poetry config virtualenvs.create false \
 && poetry install --no-root --no-interaction --no-ansi

COPY . .

CMD ["uvicorn", "simulado_gen.main:app", "--host", "0.0.0.0", "--port", "8000"]
=======
COPY requirements.txt* ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "simulado_gen.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
>>>>>>> 7bafad2 (Added container for easy mounting):backend/Dockerfile
