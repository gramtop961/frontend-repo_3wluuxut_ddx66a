import { motion } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Happy dog splashing through shallow surf',
  },
  {
    src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
    alt: 'Golden dog portrait with ocean breeze',
  },
  {
    src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1200&auto=format&fit=crop',
    alt: 'Dog pawprints trailing across wet sand',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Soft waves curling under a pastel sky',
  },
  {
    src: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop',
    alt: 'Beach picnic blanket with a curious pup',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Turquoise water and white sand coastline',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-sky-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Beach Gallery</h2>
            <p className="mt-2 text-gray-600">A few sunny snapshots to set the scene.</p>
          </div>
          <a
            id="buy"
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hidden sm:inline-flex items-center rounded-full px-4 py-2 bg-white text-blue-700 font-semibold shadow border border-blue-100 hover:bg-blue-50"
          >
            Pre‑order coming soon
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow border border-black/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm text-white bg-gradient-to-t from-black/50 to-transparent">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
