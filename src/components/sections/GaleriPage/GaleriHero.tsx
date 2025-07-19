import React from 'react';

export function GaleriHero() {
  return (
    <section className="bg-gradient-to-b from-[#027D77]/10 to-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Galeri Kegiatan
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dokumentasi foto kegiatan, seminar, workshop, dan acara penting Kolegium Ilmu Penyakit Dalam Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
