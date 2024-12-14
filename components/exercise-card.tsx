import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

interface ExerciseCardProps {
  name: string
  bodyPart: string
  equipment: string
  gifUrl: string
}

export function ExerciseCard({ name, bodyPart, equipment, gifUrl }: ExerciseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <div className="aspect-square relative">
            <Image
              src={gifUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2">{name}</CardTitle>
          <div className="flex gap-2">
            <Badge>{bodyPart}</Badge>
            <Badge variant="outline">{equipment}</Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

