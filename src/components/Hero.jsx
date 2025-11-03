import { motion } from 'framer-motion'
import { PawPrint } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-white" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Meet Kaizo — the lovable golden labradoodle
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Join Kaizo on a sunny day at Dog Beach — where waves sparkle, gulls sing,
              and every pawprint tells a story.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 font-semibold shadow hover:bg-blue-700 transition-colors"
              >
                <PawPrint className="w-5 h-5" /> Read the story
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full bg-white text-blue-700 px-5 py-3 font-semibold shadow border border-blue-100 hover:bg-blue-50 transition-colors"
              >
                View the beach
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-100 via-amber-50 to-sky-100 p-2 shadow-xl">
              <div className="h-full w-full rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop"
                  alt="A joyful dog running on the beach"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rotate-6">
              <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-sm font-medium shadow">
                <PawPrint className="w-4 h-4 text-yellow-600" /> Kaizo loves waves!
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <svg className="w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0 80L60 76.7C120 73.3 240 66.7 360 56C480 45.3 600 30.7 720 34.7C840 38.7 960 61.3 1080 70.7C1200 80 1320 76 1380 74.7L1440 73.3V120H0V80Z" fill="#e0f2fe"/>
      </svg>
    </section>
  )
}
