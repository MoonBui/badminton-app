import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Loading from './components/Loading/Loading'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Matches = lazy(() => import('./pages/Matches'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl mb-8 font-bold text-gray-900">
              Badminton Match Making
            </h1>
            <Navigation />
          </div>
        </header>
        
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 py-6 text-center">
            <p>© 2024 Badminton Match Making. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
