import httpx
import random
from typing import List, Dict

async def get_questions(number_questions: int) -> List[Dict[str, object]]:
  total_questions = 0
  dados = []

  async with httpx.AsyncClient(timeout=10) as client:
    limit = 1
    while total_questions < number_questions:
        offset = random.randint(0, 180)
        year = random.randint(2009, 2023)

        url = f'https://api.enem.dev/v1/exams/{year}/questions'
        params = {'offset': offset, 'limit': limit}

        try:
          response = await client.get(url, params=params)
          response.raise_for_status()
          data = response.json()
          questions = data.get('questions', [])
        except Exception as e:
           print(f"Erro ao buscar questões: {e}")
           continue

        for q in questions:
            if total_questions >= number_questions:
              break
            question = {
                'title': f'Questão {total_questions + 1}',
                'discipline': q.get('discipline', ''),
                'correctAlternative': q.get('correctAlternative', ''),
                'context': q.get('context', ''),
                'files': q.get('files', []),
                'alternativesIntroduction': q.get('alternativesIntroduction', ''),
                'alternatives': q.get('alternatives', []),
            }

            dados.append(question)
            total_questions += 1

  return dados



