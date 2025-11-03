import { motion } from 'framer-motion'
import { Book, Sun, PawPrint } from 'lucide-react'

const beats = [
  {
    icon: Sun,
    title: 'A sunny hello',
    text: 'Morning glimmers across Dog Beach. Kaizo wiggles with joy — the sand is warm and the wind smells like adventure.',
    color: 'from-yellow-50 to-amber-50',
  },
  {
    icon: PawPrint,
    title: 'Pawprints and puddles',
    text: 'He tiptoes to the edge of the foam — splash! Tiny waves chase his paws, and Kaizo chases them right back.',
    color: 'from-blue-50 to-sky-50',
  },
  {
    icon: Book,
    title: 'A story in the sand',
    text: 'With every step he draws curly letters — a sandy tale of wagging tails, new friends, and brave leaps.',
    color: 'from-rose-50 to-pink-50',
  },
]

export default function Story() {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">The Beach Day</h2>
          <p className="mt-3 text-lg text-gray-600">
            Kaizo is a golden labradoodle with a heart as big as the ocean. Turn the pages below
            to follow his picture‑book day by the shore.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {beats.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl bg-gradient-to-br ${b.color} p-6 shadow-sm border border-black/5`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/80">
                  <b.icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg">{b.title}</h3>
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">{b.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
