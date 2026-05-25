import { Routes, Route } from 'react-router-dom'
import Navbar       from './components/layout/Navbar'
import Footer       from './components/layout/Footer'
import Home         from './pages/Home'
import Attivita     from './pages/Attivita'
import Reservations from './pages/Reservations'
import BookRoom     from './pages/BookRoom'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/attivita"     element={<Attivita />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/book-room"    element={<BookRoom />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
