import React from 'react';

const beritaDanAcara = [
  {
    id: 1,
    title: 'Kegiatan Ilmiah Bulan Juli 2024',
    date: '10 Juli 2024',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Kolegium IPD mengadakan serangkaian kegiatan ilmiah dan seminar daring untuk meningkatkan kompetensi dokter spesialis penyakit dalam.'
  },
  {
    id: 2,
    title: 'Webinar: Update Penatalaksanaan Diabetes',
    date: '25 Juni 2024',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Webinar ini membahas perkembangan terbaru dalam penatalaksanaan diabetes melitus di Indonesia.'
  },
  {
    id: 3,
    title: 'Pengumuman Sertifikasi Nasional',
    date: '15 Juni 2024',
    image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Kolegium IPD mengumumkan jadwal dan persyaratan terbaru untuk sertifikasi nasional dokter spesialis penyakit dalam.'
  }
];

export function BeritaDanAcaraList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed redundant heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beritaDanAcara.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#027D77] font-medium mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-[#027D77] font-medium hover:text-[#027D77]/80 transition-colors">
                  Baca selengkapnya &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
