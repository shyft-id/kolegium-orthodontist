import React from 'react';

export function LulusanBaruHero() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
          alt="Lulusan Baru Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Lulusan Baru
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow">
            Informasi dan alur penerbitan Sertifikat Kompetensi untuk dokter spesialis dan subspesialis penyakit dalam yang baru lulus.
          </p>
        </div>
      </div>
    </section>
  );
}
