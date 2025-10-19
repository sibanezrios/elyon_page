'use client';

import { motion } from 'framer-motion';

export function Logo3D({ size = 200 }: { size?: number }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex items-center justify-center"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 15px 35px rgba(20, 184, 166, 0.6))'
        }}
      >
        <defs>
          {/* Gradiente turquesa claro a cyan */}
          <linearGradient id="topCurve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="50%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>

          {/* Gradiente medio */}
          <linearGradient id="midCurve" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>

          {/* Gradiente inferior oscuro */}
          <linearGradient id="bottomCurve" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="50%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#115e59" />
          </linearGradient>
        </defs>

        {/* Curva superior - Grande y ancha */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          d="M 40 50
             Q 40 25, 65 25
             Q 90 25, 110 35
             Q 130 45, 150 45
             Q 160 45, 160 55
             Q 160 70, 145 80
             Q 130 90, 110 85
             Q 95 82, 85 75
             Q 75 68, 75 55
             Q 75 45, 85 40
             Q 95 35, 105 40
             Q 115 45, 115 55
             L 105 55
             Q 105 48, 100 45
             Q 92 42, 85 48
             Q 78 54, 85 62
             Q 92 70, 105 72
             Q 120 74, 135 68
             Q 148 62, 148 52
             Q 148 47, 142 47
             Q 125 47, 108 38
             Q 88 28, 65 28
             Q 48 28, 48 50
             Q 48 72, 65 85
             Q 82 98, 105 98
             L 105 108
             Q 75 108, 55 88
             Q 40 73, 40 50
             Z"
          fill="url(#topCurve)"
          strokeWidth="0"
        />

        {/* Forma media - Curva en forma de C */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
          d="M 65 105
             Q 45 105, 35 120
             Q 28 132, 35 145
             Q 42 158, 58 158
             Q 72 158, 82 148
             L 82 138
             Q 75 145, 62 145
             Q 50 145, 47 135
             Q 45 125, 52 118
             Q 60 112, 72 115
             Q 85 118, 95 128
             L 105 128
             Q 92 115, 75 108
             Q 65 105, 65 105
             Z"
          fill="url(#midCurve)"
          strokeWidth="0"
        />

        {/* Forma inferior - Curva diagonal */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          d="M 95 135
             L 125 135
             Q 138 135, 148 142
             Q 158 150, 158 162
             Q 158 172, 150 178
             Q 140 185, 125 182
             Q 112 179, 105 170
             L 105 160
             Q 110 167, 120 170
             Q 132 173, 140 168
             Q 148 163, 148 155
             Q 148 147, 140 143
             Q 132 140, 120 142
             Q 108 144, 100 152
             L 95 145
             Q 100 138, 95 135
             Z"
          fill="url(#bottomCurve)"
          strokeWidth="0"
        />

        {/* Círculo de pulso de fondo */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#14b8a6"
          strokeWidth="1.5"
          opacity="0.15"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.15, 0.9],
            opacity: [0, 0.25, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </svg>
    </motion.div>
  );
}
