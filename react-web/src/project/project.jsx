import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Navbar Component
export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 shadow-md bg-yellow-400 sticky top-0 z-50">
      <div className="text-3xl font-bold">JatimPark 1</div>
      <ul className="hidden md:flex gap-10 text-lg text-gray-700 font-semibold mx-auto">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow transition-shadow"
      >
        Pesan Tiket
      </motion.button>
    </nav>
  );
}

// Hero Section Component
export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-screen flex flex-col items-center justify-center bg-white text-center px-4 pt-8 pb-20 md:pt-12 md:pb-24"
    >
      <h1 className="text-6xl md:text-7xl font-bold text- mb-4 md:mb-8">
        Selamat Datang di Website Kami
      </h1>
      <p className="text-lg md:text-xl text-blue-600 max-w-3xl mb-8 md:mb-6 mx-auto">
        Kami menyediakan informasi lengkap dan galeri menarik untuk Anda.
        Jelajahi lebih lanjut dan hubungi kami jika ada pertanyaan.
      </p>
      <div className="flex gap-6 flex-wrap justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-xl transition-shadow shadow"
        >
          Lihat Wahana
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow transition-shadow"
        >
          Pesan Tiket
        </motion.button>
      </div>
    </motion.section>
  );
}

// About Section Component
export function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-white py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative w-full h-full flex justify-center md:pl-0 pl-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.youtube.com/embed/umU_PNux1fs?si=K98Mx6GKpwQiTdtx"
            className="rounded-2xl shadow-lg w-[90%] h-[300px] md:h-[400px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
            Tentang Wahana Kami
          </h2>
          <p className="text-xl md:text-2xl text-black leading-relaxed">
            JatimPark 1 menghadirkan berbagai wahana edukatif dan menghibur untuk
            segala usia. Dari pengalaman interaktif hingga petualangan luar
            biasa, setiap sudut wahana dirancang untuk menciptakan kenangan yang
            tak terlupakan. Jelajahi serunya wahana kami dan rasakan petualangan
            seru bersama keluarga.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </Router>
  );
}

export default App;
