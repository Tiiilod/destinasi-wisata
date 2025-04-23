import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-8 py-6 shadow-md bg-yellow-100 sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-800">JatimPark</div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-10 text-lg text-gray-700 font-semibold">
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Beranda</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Tentang</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Galeri</li>
        <li className="hover:text-blue-600 transition-colors cursor-pointer">Kontak</li>
      </ul>

      {/* Contact Us Button */}
      <div className="hidden md:block">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-5 py-3 rounded-xl shadow">
          Hubungi Kami
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="border border-gray-300 px-4 py-3 rounded-md text-base">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-start bg-white text-center px-4 pt-24 pb-20"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-4 mt-10">
        Selamat Datang di Jatim Park
      </h1>
      <p className="text-lg md:text-xl text-blue-500 max-w-2xl">
        Temukan keseruan dan edukasi dalam satu tempat! Jatim Park menghadirkan
        pengalaman wisata tak terlupakan di kota Batu.
      </p>
    </motion.section>
  );
}

export function Home1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-blue-600 rounded-t-3xl px-6 py-16 z-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Jatim_Park_1_Batu.jpg",
            label: "Jatim Park 1"
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Batu_Secret_Zoo.jpg",
            label: "Jatim Park 2"
          },
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Dino_Park%2C_Jawa_Timur_Park_3.jpg",
            label: "Jatim Park 3"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-zoom-in"
            onClick={() => openModal(item.img)}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-700">{item.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/umU_PNux1fs?si=K98Mx6GKpwQiTdtx"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
        <div>
          <h1 className="text-3xl font-bold text-white">JAWA TIMUR PARK 1</h1>
          <p className="text-white text-xl mt-4 max-w-sm">
            PLAY AND LEARN SCIENCE<br />
            Jatim Park 1 merupakan tempat rekreasi yang memiliki konsep taman bermain yang dipadukan dengan taman edukasi.
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-60 cursor-zoom-out"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white p-2 rounded-xl relative max-w-5xl w-full mx-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home1 />
    </div>
  );
}

export default App;
