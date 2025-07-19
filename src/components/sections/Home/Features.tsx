import React from 'react';
import { GraduationCap, Award, Users, Search } from 'lucide-react';
export function Features() {
  return <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Pentingnya Kolegium Ortodonti
          </h2>
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
              Menyediakan akses program pendidikan ortodonti yang bermutu bagi mahasiswa kedokteran gigi
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
              Memberikan sertifikasi resmi untuk mendukung pengakuan keahlian dan standar profesional
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
              Mendorong kolaborasi dan pertukaran pengetahuan melalui komunitas ortodontis di Indonesia
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
              Menyediakan informasi ortodontis bersertifikat yang dapat diakses oleh masyarakat luas
            </p>
          </div>
        </div>
      </div>
    </section>;
}