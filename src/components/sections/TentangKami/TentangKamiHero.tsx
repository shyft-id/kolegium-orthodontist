import React from 'react';

export function TentangKamiHero() {
  return (
    <section className="bg-gradient-to-b from-[#027D77]/10 to-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Tentang <span className="text-[#027D77]">Kami</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Kolegium Orthodontist Indonesia adalah komunitas profesional yang berkomitmen untuk pendidikan, sertifikasi, dan pengembangan ortodontis di Indonesia.
            </p>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Tentang Kami" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}