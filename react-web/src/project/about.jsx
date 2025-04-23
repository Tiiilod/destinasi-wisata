// src/pages/Detail.jsx
import React from "react";

const About = () => {
  return (
    <section className="p-4 md:p-8 space-y-4">
      <h2 className="text-2xl font-bold">Detail Wisata</h2>
      <div>
        <h3 className="font-semibold">Sejarah</h3>
        <p>Jatim Park 1 didirikan pada tahun 2001 sebagai taman edukatif yang menggabungkan hiburan dan pembelajaran.</p>
      </div>
      <div>
        <h3 className="font-semibold">Fasilitas</h3>
        <ul className="list-disc list-inside">
          <li>Wahana edukasi dan permainan</li>
          <li>Area makan dan tempat istirahat</li>
          <li>Tempat parkir luas</li>
          <li>Mushola dan toilet bersih</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Harga Tiket</h3>
        <p>Rp 100.000,- (weekday), Rp 120.000,- (weekend)</p>
      </div>
      <div>
        <h3 className="font-semibold">Jam Operasional</h3>
        <p>Setiap hari, pukul 08.30 - 16.30 WIB</p>
      </div>
    </section>
  );
};

export default About;
