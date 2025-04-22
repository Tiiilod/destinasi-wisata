// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Pesan terkirim!");
    setForm({ name: "", message: "" });
  };

  return (
    <section className="p-4 md:p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Kontak Kami</h2>
      <p className="mb-4">Alamat: Jl. Kartika No. 2, Kota Batu, Jawa Timur</p>
      <iframe
        src="https://maps.google.com/maps?q=jatim%20park%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-64 mb-6 rounded-xl"
        title="Lokasi Jatim Park 1"
      ></iframe>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Pesan"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Kirim
        </button>
      </form>
    </section>
  );
};

export default Contact;
