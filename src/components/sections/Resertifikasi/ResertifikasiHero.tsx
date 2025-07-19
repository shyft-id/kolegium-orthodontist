import React from 'react';

export function ResertifikasiHero() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80"
          alt="Resertifikasi Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Resertifikasi
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow">
            Informasi dan prosedur resertifikasi dokter spesialis penyakit dalam di Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
