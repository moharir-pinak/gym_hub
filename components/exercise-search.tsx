'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function ExerciseSearch({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex gap-2">
        <Input
          type="search"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <Button type="submit">Search</Button>
      </div>
    </motion.form>
  )
}

