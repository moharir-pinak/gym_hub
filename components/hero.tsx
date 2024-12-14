// import { motion } from 'framer-motion'

// export function Hero() {
//   return (
//     <motion.div 
//       className="relative py-12 sm:py-16"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center space-y-4 text-center">
//           <motion.h1 
//             className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Welcome to Gym Hub
//           </motion.h1>
//           <motion.p 
//             className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             Discover the perfect exercises for your fitness journey. From beginners to advanced, we've got you covered.
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.div 
      className="relative py-12 sm:py-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.h1 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to Gym Hub
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Discover the perfect exercises for your fitness journey. From beginners to advanced, we&apos;ve got you covered.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
