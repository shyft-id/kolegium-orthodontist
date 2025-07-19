import React from 'react';

const galeriImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'Seminar Nasional 2024'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Workshop Penatalaksanaan Penyakit Dalam'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Pelantikan Pengurus Kolegium'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80',
    title: 'Simposium Ilmiah Tahunan'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    title: 'Kegiatan Bakti Sosial'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Rapat Kerja Nasional'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Penyuluhan Kesehatan Masyarakat'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    title: 'Pelatihan Resertifikasi'
  }
];

export function GaleriGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed redundant heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galeriImages.map(item => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-lg text-center px-2">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
