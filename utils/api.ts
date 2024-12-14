const API_URL = 'https://exercisedb.p.rapidapi.com/exercises';

const headers = {
  // 'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY!,
  'X-RapidAPI-Key': '0275c57e7dmsh3afd84e36388c46p1b9729jsn253277dc6b35',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
};

export async function fetchExercises(query = '', bodyPart = '') {
  let url = API_URL;
  if (bodyPart) {
    url += `/bodyPart/${bodyPart}`;
  } else if (query) {
    url += `/name/${query}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Received invalid data format');
  }
  return data;
}

