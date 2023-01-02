import React from 'react'
import {motion} from 'framer-motion'



const Carousell: React.FC = ({}) => {
  return   <div className="mt-16 flex aspect-[18/6] items-end overflow-hidden rounded-xl bg-lightContainer px-6 py-7">
  <div className="flex flex-col bg-transparent">
    <motion.div
      initial={{
        y: 120,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      className="bg-lightContainer bg-transparent text-4xl font-bold"
    >
      Curso entrenador
    </motion.div>
    <motion.div
      initial={{
        y: 80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 1,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      className="mt-1 bg-transparent text-xl text-text"
    >
      Logra tus objetivos!
    </motion.div>
  </div>
</div>
}

export default Carousell