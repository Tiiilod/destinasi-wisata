// src/components/CardWisata.jsx
export function CardWisata({ title, description, image }) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }
  