import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter dan Routes
import Navbar from './Navbar'; // Import Navbar
import Hero from './Hero'; // Import komponen lainnya
import Wahana from './Wahana'; // Import halaman Wahana
import Tiket from './Tiket'; // Import halaman Tiket
import Kontak from './Kontak'; // Import halaman Kontak

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Halaman Home */}
        <Route path="/wahana" element={<Wahana />} /> {/* Halaman Wahana */}
        <Route path="/tiket" element={<Tiket />} /> {/* Halaman Tiket */}
        <Route path="/kontak" element={<Kontak />} /> {/* Halaman Kontak */}
      </Routes>
    </Router>
  );
}

export default App;
