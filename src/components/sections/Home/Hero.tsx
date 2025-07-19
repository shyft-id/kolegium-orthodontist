import React from 'react';
export function Hero() {
  return <div className="bg-gradient-to-b from-[#027D77]/10 to-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Selamat Datang di{' '}
            <span className="text-[#027D77]">Kolegium Ortodonti</span>{' '}
              Indonesia
            </h1>
            <p className="text-lg text-gray-700 mb-8">
            Mitra terpercaya dalam pendidikan dan standarisasi perawatan ortodonti di Indonesia.
            Sebagai lembaga di bawah Konsil Kedokteran Indonesia, kami memastikan perawatan 
            ortodonti dilakukan oleh tenaga profesional yang kompeten, beretika, dan tersertifikasi nasional.


            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-[#027D77] text-white font-medium rounded-lg hover:bg-[#027D77]/90 transition-colors">
                Mulai Sertifikasi
              </button>
              <button className="px-6 py-3 bg-white border border-[#027D77] text-[#027D77] font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Cari Ortodontis
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Dokter ortodontis sedang memeriksa pasien" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>;
}