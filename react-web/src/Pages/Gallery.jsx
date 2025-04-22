// src/pages/Gallery.jsx
import React from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250"
  ];

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Galeri Foto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Galeri ${idx + 1}`}
            className="rounded-2xl shadow-md"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
