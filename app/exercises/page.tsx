// 'use client'

// import { useState, useEffect } from 'react'
// import { ExerciseSearch } from '@/components/exercise-search'
// import { ExerciseCard } from '@/components/exercise-card'
// import { Loader2 } from 'lucide-react'

// export default function ExercisesPage() {
//   const [exercises, setExercises] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const fetchExercises = async (query = '') => {
//     setLoading(true)
//     setError(null)
//     try {
//       const url = `https://exercisedb.p.rapidapi.com/exercises${query ? '/name/' + query : ''}`
//       const response = await fetch(url, {
//         headers: {
//           'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY!,
//           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }
//       })
//       if (!response.ok) {
//         throw new Error('Failed to fetch exercises')
//       }
//       const data = await response.json()
//       if (!Array.isArray(data)) {
//         throw new Error('Received invalid data format')
//       }
//       setExercises(data)
//     } catch (error) {
//       console.error('Error fetching exercises:', error)
//       setError('Failed to load exercises. Please try again later.')
//       setExercises([])
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchExercises()
//   }, [])

//   return (
//     <div className="container py-8">
//       <h1 className="text-3xl font-bold mb-8">Exercise Library</h1>
//       <ExerciseSearch onSearch={fetchExercises} />
//       {loading && (
//         <div className="flex justify-center items-center py-12">
//           <Loader2 className="h-8 w-8 animate-spin" />
//         </div>
//       )}
//       {error && (
//         <div className="text-center py-12 text-red-500">{error}</div>
//       )}
//       {!loading && !error && exercises.length === 0 && (
//         <div className="text-center py-12">No exercises found. Try a different search term.</div>
//       )}
//       {!loading && !error && exercises.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//           {exercises.map((exercise: any) => (
//             <ExerciseCard
//               key={exercise.id}
//               name={exercise.name}
//               bodyPart={exercise.bodyPart}
//               equipment={exercise.equipment}
//               gifUrl={exercise.gifUrl}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react';
import { ExerciseSearch } from '@/components/exercise-search';
import { ExerciseCard } from '@/components/exercise-card';
import { Loader2 } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
}

export default function ExercisesPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchExercises = async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises${query ? '/name/' + query : ''}`;
      const response = await fetch(url, {
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY!,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch exercises');
      }
      const data: Exercise[] = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Received invalid data format');
      }
      setExercises(data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
      setError('Failed to load exercises. Please try again later.');
      setExercises([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Exercise Library</h1>
      <ExerciseSearch onSearch={fetchExercises} />
      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}
      {error && (
        <div className="text-center py-12 text-red-500">{error}</div>
      )}
      {!loading && !error && exercises.length === 0 && (
        <div className="text-center py-12">No exercises found. Try a different search term.</div>
      )}
      {!loading && !error && exercises.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {exercises.map((exercise: Exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              bodyPart={exercise.bodyPart}
              equipment={exercise.equipment}
              gifUrl={exercise.gifUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}
