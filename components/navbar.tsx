'use client'

import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6" />
          <span className="font-bold text-xl">Gym Hub</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <ThemeToggle />
          <Button>
            <Dumbbell className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}

