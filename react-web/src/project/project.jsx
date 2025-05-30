import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Tutup menu saat klik di luar menu
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "galeri", label: "Galeri" },
    { id: "tentang", label: "Tentang" },
    { id: "wahana", label: "Wahana" },
    { id: "tiket", label: "Tiket" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 shadow-md bg-white  sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        className="text-3xl font-bold text-blue-600 cursor-pointer"
      >
        Jatim Park 1
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 text-lg text-gray-700 font-semibold mx-auto">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Tombol Tiket (Desktop) */}
      <Link to="tiket" smooth={true} offset={-70} duration={500}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow transition-shadow"
        >
          Pesan Tiket
        </motion.button>
      </Link>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <svg
            className={`w-8 h-8 ${
              isMenuOpen ? "text-blue-600" : "text-gray-700"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-white p-6 rounded-lg w-4/5 space-y-6">
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            {/* Tombol Tiket Mobile */}
            <Link
              to="tiket"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow w-full"
              >
                Pesan Tiket
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="home"
      className="w-full h-screen flex flex-col items-center justify-center text-center px-4 pt-8 pb-20 md:pt-12 md:pb-24"
      style={{
        backgroundImage: "url('https://senyumworldhotel.com/wp-content/uploads/2024/09/Jatim-Park-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8">
          Petualangan Seru Menanti di Jatim Park 1!
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mb-8 md:mb-6 mx-auto">
          Temukan keajaiban edukasi dan hiburan di taman wisata terbesar Jawa Timur. 
          Pengalaman tak terlupakan untuk seluruh keluarga!
        </p>

        {/* Tombol Aksi */}
        <div className="flex gap-6 flex-wrap justify-center">
          <Link to="wahana" smooth={true} offset={-70} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-xl transition-shadow shadow"
            >
              Jelajahi Wahana
            </motion.button>
          </Link>

          <Link to="tiket" smooth={true} offset={-70} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow transition-shadow"
            >
              Dapatkan Tiket Sekarang
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}


export function Galeri() {
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
      id="galeri"
      className="w-full bg-blue-600 rounded-t-3xl px-6 py-16 z-10"
    >
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["ss1.jpg", "ss2.jpg", "ss3.jpg", "ss4.jpg"].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg overflow-hidden shadow-md cursor-zoom-in"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Foto ${i + 1}`}
              className="w-full object-contain"
            />
          </motion.div>
        ))}
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

export function AboutSection() {
  return (
    <section
      id="tentang"
      className="w-full min-h-screen bg-white py-20 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Foto */}
        <motion.div
          className="relative w-full h-full flex justify-center md:pl-0 pl-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Kolom Teks */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
          Tentang Jatim Park 1
          </h2>
          <p className="text-xl md:text-2xl text-black leading-relaxed">
            Jatim Park 1 merupakan pelopor taman wisata edukasi di Jawa Timur
            yang berdiri sejak tahun 2001. Dengan konsep edutainment, kami
            menyajikan berbagai wahana edukatif yang dikemas secara menarik untuk
            semua usia. Dari museum tubuh hingga wahana permainan air, setiap
            sudut Jatim Park 1 dirancang untuk memberikan pengalaman belajar
            yang menyenangkan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function WahanaSection() {
  const cards = [
    {
      img: "https://jtp.id/jatimpark1/storage/2021/11/20170531125828_07-science-and-coaster-park-galeri-etnik.jpg",
      title: "Galery Etnik Nusantara",
      desc: "Menyajikan kekayaan budaya Indonesia melalui berbagai replika rumah adat dan artefak tradisional.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJe7uR5lH5r2mxTBbbEsrZl_2wfyTaL3RDKw&s",
      title: "Museum Tubuh",
      desc: "Wahana edukasi interaktif yang mengajak pengunjung menjelajahi anatomi tubuh manusia.",
    },
    {
      img: "https://jtp.id/jatimpark1/storage/2021/11/20170608014853_IMG_1640.jpg",
      title: "Science Center",
      desc: "Tempat belajar sains dengan berbagai eksperimen dan demonstrasi menarik.",
    },
    {
      img: "https://i0.wp.com/wisata-batumalang.com/wp-content/uploads/2022/10/jtp-3.png?resize=566%2C328&ssl=1",
      title: "Waterboom",
      desc: "Berbagai permainan air yang menyegarkan dan seru untuk seluruh keluarga.",
    },
  ];

  return (
    <section id="wahana" className="w-full h-full bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-blue-600 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Wahana Unggulan
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-600 mb-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Temukan berbagai wahana edukatif dan menyenangkan di Jatim Park 1 yang
          cocok untuk semua usia. Setiap wahana dirancang untuk memberikan
          pengalaman belajar yang tak terlupakan.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="group bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[300px] object-cover rounded-xl mb-4 transition duration-300 group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-black mb-2 transition duration-300 group-hover:-translate-y-1">
                {card.title}
              </h3>
              <p className="text-black transition duration-300 group-hover:-translate-y-1">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TicketSection() {
  const tickets = [
    { name: "Tiket Reguler", weekday: "Rp 80.000", weekend: "Rp 100.000" },
    { name: "Tiket Pelajar", weekday: "Rp 60.000", weekend: "Rp 80.000" },
    { name: "Tiket Paket Keluarga", weekday: "Rp 200.000", weekend: "Rp 250.000" },
    {
      name: "Tiket Paket Wisata Sekolah",
      weekday: "Rp 50.000",
      weekend: "Rp 70.000",
    },
  ];

  return (
    <section
      id="tiket"
      className="w-full bg-blue-600 text-white px-4 py-20 rounded-t-3xl"
    >
      <div className="max-w-6xl mx-auto mt-24">
        {/* Header Text */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Harga Tiket Masuk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white/90 text-base md:text-lg"
          >
            Nikmati berbagai wahana edukatif dengan harga terjangkau
          </motion.p>
        </div>

        {/* Desktop Table: full weekday & weekend */}
        <div className="hidden md:block overflow-x-auto">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-xl overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-6 py-4">Jenis Tiket</th>
                  <th className="px-6 py-4">Weekday</th>
                  <th className="px-6 py-4">Weekend</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={
                      idx % 2 === 0
                        ? "bg-white text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }
                  >
                    <td className="px-6 py-4 border-t border-blue-200">
                      {ticket.name}
                    </td>
                    <td className="px-6 py-4 border-t border-blue-200">
                      {ticket.weekday}
                    </td>
                    <td className="px-6 py-4 border-t border-blue-200">
                      {ticket.weekend}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Mobile Table: only Weekday */}
        <div className="md:hidden overflow-x-auto mt-10">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-lg overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-3 py-3">Jenis Tiket</th>
                  <th className="px-3 py-3">Weekday</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-white text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }
                  >
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.name}
                    </td>
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.weekday}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Mobile Table: only Weekend */}
        <div className="md:hidden overflow-x-auto mt-6">
          <motion.div
            className="bg-white/90 rounded-2xl shadow-lg overflow-hidden max-w-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-3 py-3">Jenis Tiket</th>
                  <th className="px-3 py-3">Weekend</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-white text-gray-800"
                        : "bg-blue-50 text-gray-800"
                    }
                  >
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.name}
                    </td>
                    <td className="px-3 py-3 border-t border-blue-200">
                      {ticket.weekend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
      {/* Tombol Pesan Sekarang */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg border border-blue-600 w-full max-w-md transition-all"
        >
          Pesan Sekarang
        </motion.button>
      </motion.div>
    </section>
  );
}

export function ContactUsSection() {
  return (
    <section id="kontak" className="w-full h-full bg-blue-600 py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mt-10 font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hubungi Kami
        </motion.h2>

        <motion.p
          className="text-lg text-center text-white mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Jika Anda memiliki pertanyaan atau butuh informasi lebih lanjut tentang
          Jatim Park 1, silakan hubungi kami melalui informasi di bawah ini.
        </motion.p>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-14 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Informasi Kontak */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Alamat */}
            <div>
              <h3 className="text-2xl font-semibold border-b border-gray-300 pb-3 mb-4">
                Alamat
              </h3>
              <p className="text-lg leading-relaxed">
                Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-2xl font-semibold border-b border-gray-300 pb-3 mb-4">
                Email
              </h3>
              <a
                href="mailto:info@jatimpark1.com"
                className="text-lg text-blue-600 underline hover:text-blue-800"
              >
                info@jatimpark1.com
              </a>
            </div>

            {/* Jam Operasional */}
            <div>
              <h3 className="text-2xl font-semibold border-b border-gray-300 pb-3 mb-4">
                Jam Operasional
              </h3>
              <p className="text-lg">Senin - Minggu: 08.30 - 16.30 WIB</p>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Lokasi Jatim Park 1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.109506358879!2d112.54543957420514!3d-7.560021692459998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628d4a5a2b3f5%3A0xb1f7340d69d88ad5!2sJatim%20Park%201!5e0!3m2!1sen!2sid!4v1683108309244!5m2!1sen!2sid"
              width="100%"
              height="360"
              loading="lazy"
              allowFullScreen
              className="rounded-xl shadow-md"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-white text-gray-700 border-t border-gray-200">
      {/* SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-blue-600"
        >
          <path d="M0,0V46.29c47.84,22,103.45,38.35,163,28,56.84-10,112-39,172-39s111.33,29,172,39,115.24-6.45,172-28c59.55-22,115.16-38.35,163-28V0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Jatim Park 1
          </h2>
          <p className="text-sm leading-relaxed">
            Taman wisata edukasi pertama dan terbesar di Jawa Timur yang
            menghadirkan pengalaman belajar yang menyenangkan.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            {["home", "wahana", "ticket", "kontak"].map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              Jl. Kartika No.2, Batu, Jawa Timur
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              info@jatimpark1.com
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://instagram.com/jatimpark1"
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <FaInstagram className="text-pink-600" />
            </a>
            <a
              href="https://facebook.com/jatimpark1"
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <FaFacebookF className="text-blue-700" />
            </a>
            <a
              href="https://youtube.com/jatimpark1"
              target="_blank"
              rel="noreferrer"
              className="transition transform hover:scale-125"
            >
              <FaYoutube className="text-red-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-t border-gray-100">
        <div className="text-center text-sm py-5">
          <marquee
            behavior="scroll"
            direction="left"
            className="text-blue-700 font-medium"
          >
            Terima kasih telah mengunjungi Jatim Park 1 — Tempat wisata edukasi
            yang menyenangkan untuk seluruh keluarga!
          </marquee>
          <p className="mt-2 text-gray-500">
            &copy; {new Date().getFullYear()} Jatim Park 1. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App component
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Galeri />
      <AboutSection />
      <WahanaSection />
      <TicketSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;