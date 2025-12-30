import React, { useState, useRef } from 'react'
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {

  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: e.clientX - r.left,
      y: e.clientY - r.top
    })
  }

  return (
    <motion.div
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5, delay:index * 0.2}}
    viewport={{once: true}}

      ref={ref}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMove}
      className="relative overflow-hidden rounded-xl border
      border-gray-200 dark:border-gray-700
      bg-white dark:bg-gray-900 p-8"
    >

      {/* glow */}
      <div
        className={`pointer-events-none absolute w-[280px] h-[280px]
        rounded-full blur-3xl bg-gradient-to-r
        from-blue-500 via-indigo-500 to-purple-500
        transition-opacity duration-300
        ${show ? 'opacity-70' : 'opacity-0'}`}
        style={{
          left: pos.x - 140,
          top: pos.y - 140
        }}
      />

      <div className="relative z-10 flex gap-6 items-center">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-3">
          <img src={service.icon} alt="" className="w-10 h-10" />
        </div>

        <div>
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>

    </motion.div>
  )
}

export default ServiceCard
