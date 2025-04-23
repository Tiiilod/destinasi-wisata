// src/pages/Home.jsx
import React from "react";
import { CardWisata } from "../Components/CardWisata";

const Home = () => {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-4">Selamat Datang di Jatim Park 1</h2>
      <p className="mb-6 text-gray-700">
        Jatim Park 1 adalah destinasi wisata edukatif dan rekreatif di Kota Batu, Jawa Timur. Menawarkan beragam wahana seru dan pembelajaran interaktif untuk semua usia.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <CardWisata
          title="Science Center"
          description="Wahana edukasi sains yang interaktif dan menyenangkan."
          image="https://via.placeholder.com/300x200"
        />
        <CardWisata
          title="Galeri Etnik"
          description="Menampilkan kebudayaan dan rumah adat dari seluruh Indonesia."
          image="https://via.placeholder.com/300x200"
        />
        <CardWisata
          title="Wahana Seru"
          description="Berbagai permainan menyenangkan seperti Roller Coaster dan Flying Fox."
          image="https://via.placeholder.com/300x200"
        />
      </div>
    </section>
  );
};

export default Home;
