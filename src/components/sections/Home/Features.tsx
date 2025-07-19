import React from 'react';
import { GraduationCap, Award, Users, Search } from 'lucide-react';
export function Features() {
  return <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Layanan Utama Kami
          </h2>
          <div className="w-24 h-1 bg-[#D2DC00] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Menyediakan berbagai layanan untuk mendukung komunitas ortodontis di
            Indonesia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#027D77]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-[#027D77]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Program Pendidikan
            </h3>
            <p className="text-gray-600">
              Akses ke program pendidikan berkualitas tinggi untuk mahasiswa
              kedokteran gigi
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#027D77]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-[#027D77]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sertifikasi Profesional
            </h3>
            <p className="text-gray-600">
              Dapatkan sertifikasi yang diakui untuk meningkatkan kredibilitas
              dan keahlian Anda
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#027D77]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#027D77]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Komunitas Profesional
            </h3>
            <p className="text-gray-600">
              Bergabunglah dengan jaringan ortodontis profesional untuk berbagi
              pengetahuan
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#027D77]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-[#027D77]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Direktori Ortodontis
            </h3>
            <p className="text-gray-600">
              Temukan ortodontis terpercaya dan bersertifikat di seluruh
              Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>;
}