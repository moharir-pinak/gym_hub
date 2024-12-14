// 'use client'

// import { useState, useEffect } from 'react'
// import { Navbar } from '@/components/navbar'
// import { Footer } from '@/components/footer'
// import { Hero } from '@/components/hero'
// import { ExerciseSearch } from '@/components/exercise-search'
// import { ExerciseCard } from '@/components/exercise-card'
// import { Dumbbell } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { fetchExercises } from '@/utils/api'

// const bodyParts = [
//   "back", "cardio", "chest", "lower arms", "lower legs", 
//   "neck", "shoulders", "upper arms", "upper legs", "waist"
// ]

// export default function Home() {
//   const [exercises, setExercises] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null)

//   const loadExercises = async (query = '', bodyPart = '') => {
//     setLoading(true)
//     setError(null)
//     try {
//       const data = await fetchExercises(query, bodyPart)
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
//     loadExercises()
//   }, [])

//   const handleBodyPartClick = (bodyPart: string) => {
//     setSelectedBodyPart(bodyPart)
//     loadExercises('', bodyPart)
//   }

//   const handleSearch = (query: string) => {
//     setSelectedBodyPart(null)
//     loadExercises(query)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-light dark:bg-black flex flex-col">
//       <Navbar />
//       <Hero />
//       <main className="container py-8 flex-grow">
//         <motion.section 
//           className="grid gap-6 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h2 className="text-3xl font-bold">Find Your Perfect Exercise</h2>
//           <ExerciseSearch onSearch={handleSearch} />
          
//           <div className="flex flex-wrap justify-center gap-2 mt-4">
//             {bodyParts.map((part) => (
//               <Button
//                 key={part}
//                 onClick={() => handleBodyPartClick(part)}
//                 variant={selectedBodyPart === part ? "default" : "outline"}
//               >
//                 {part}
//               </Button>
//             ))}
//           </div>
          
//           {loading && (
//             <div className="flex justify-center items-center py-12">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               >
//                 <Dumbbell className="h-12 w-12" />
//               </motion.div>
//             </div>
//           )}
//           {error && (
//             <div className="text-center py-12 text-red-500">
//               <p>{error}</p>
//               <p className="text-sm mt-2">If this persists, please check your API key and network connection.</p>
//             </div>
//           )}
//           {!loading && !error && exercises.length === 0 && (
//             <div className="text-center py-12">No exercises found. Try a different search term or category.</div>
//           )}
//           {!loading && !error && exercises.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//               {exercises.map((exercise: any) => (
//                 <ExerciseCard
//                   key={exercise.id}
//                   name={exercise.name}
//                   bodyPart={exercise.bodyPart}
//                   equipment={exercise.equipment}
//                   gifUrl={exercise.gifUrl}
//                 />
//               ))}
//             </div>
//           )}
//         </motion.section>
//       </main>
//       <Footer />
//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { ExerciseSearch } from '@/components/exercise-search'
import { ExerciseCard } from '@/components/exercise-card'
import { Dumbbell } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { fetchExercises } from '@/utils/api'

const bodyParts = [
  "back", "cardio", "chest", "lower arms", "lower legs", 
  "neck", "shoulders", "upper arms", "upper legs", "waist"
]

export default function Home() {
  const [exercises, setExercises] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null)

  const loadExercises = async (query = '', bodyPart = '') => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchExercises(query, bodyPart)
      setExercises(data)
    } catch (error) {
      console.error('Error fetching exercises:', error)
      setError('Failed to load exercises. Please try again later.')
      setExercises([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadExercises()
  }, [])

  const handleBodyPartClick = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart)
    loadExercises('', bodyPart)
  }

  const handleSearch = (query: string) => {
    setSelectedBodyPart(null)
    loadExercises(query)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black flex flex-col">
      <Navbar />
      <Hero />
      <main className="container py-8 flex-grow">
        <motion.section 
          className="grid gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold">Find Your Perfect Exercise</h2>
          <ExerciseSearch onSearch={handleSearch} />
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {bodyParts.map((part) => (
              <Button
                key={part}
                onClick={() => handleBodyPartClick(part)}
                variant={selectedBodyPart === part ? "default" : "outline"}
              >
                {part}
              </Button>
            ))}
          </div>
          
          {loading && (
            <div className="flex justify-center items-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Dumbbell className="h-12 w-12" />
              </motion.div>
            </div>
          )}
          {error && (
            <div className="text-center py-12 text-red-500">
              <p>{error}</p>
              <p className="text-sm mt-2">If this persists, please check your API key and network connection.</p>
            </div>
          )}
          {!loading && !error && exercises.length === 0 && (
            <div className="text-center py-12">No exercises found. Try a different search term or category.</div>
          )}
          {!loading && !error && exercises.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {exercises.map((exercise: any) => (
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
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
