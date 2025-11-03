import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Story />
        <Gallery />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Kaizo at Dog Beach. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
