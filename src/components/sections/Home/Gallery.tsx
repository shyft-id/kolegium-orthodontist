import React from 'react';
export function Gallery() {
  const galleryImages = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Seminar Ortodontis 2023'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Workshop Praktik Klinis'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Konferensi Tahunan'
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Pelatihan Mahasiswa'
  }, {
    id: 5,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Acara Sertifikasi'
  }, {
    id: 6,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    title: 'Pertemuan Komunitas'
  }];
  return <section className="py-16 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Galeri</h2>
          <div className="w-24 h-1 bg-[#D2DC00] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lihat dokumentasi kegiatan dan acara komunitas ortodontis kami
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map(item => <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-lg">{item.title}</p>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#027D77] text-white font-medium rounded-lg hover:bg-[#027D77]/90 transition-colors">
            Lihat Semua Foto
          </button>
        </div>
      </div>
    </section>;
}