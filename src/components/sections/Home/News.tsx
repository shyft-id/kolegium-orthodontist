import React from 'react';
export function News() {
  const newsItems = [{
    id: 1,
    title: 'Seminar Teknologi Ortodontis Terbaru 2023',
    date: '15 November 2023',
    image: 'https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Seminar ini akan membahas inovasi terbaru dalam teknologi ortodontis dan aplikasinya dalam praktik klinis.'
  }, {
    id: 2,
    title: 'Workshop Praktik Ortodontis untuk Mahasiswa',
    date: '5 Desember 2023',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Workshop hands-on untuk mahasiswa kedokteran gigi yang ingin memperdalam pengetahuan mereka tentang ortodontis.'
  }, {
    id: 3,
    title: 'Peluncuran Program Sertifikasi Baru',
    date: '20 Januari 2024',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Program sertifikasi baru yang berfokus pada perawatan ortodontis untuk pasien anak akan diluncurkan bulan depan.'
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Artikel</h2>
          <div className="w-24 h-1 bg-[#D2DC00] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan artikel mendatang dari lembaga Kolegium Orthodonti
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#027D77] font-medium mb-2">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-[#027D77] font-medium hover:text-[#027D77]/80 transition-colors">
                  Baca selengkapnya &rarr;
                </a>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#027D77] text-white font-medium rounded-lg hover:bg-[#027D77]/90 transition-colors">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>;
}