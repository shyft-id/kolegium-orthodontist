import React from 'react';

export function FkgUgmHero() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gedung Kampus Universitas Gadjah Mada"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            FKG Universitas Gadjah Mada
          </h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto drop-shadow">
            Sejarah, perkembangan, dan keunggulan Fakultas Kedokteran Gigi Universitas Gadjah Mada sebagai pelopor pendidikan kedokteran di Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
