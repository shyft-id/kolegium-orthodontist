import React from 'react';
export function Education() {
  return <section className="py-16 bg-gray-50">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
          Program Pendidikan dan Sertifikasi
          </h2>
          <div className="w-24 h-1 bg-[#D2DC00] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Mendukung peningkatan kompetensi melalui program pendidikan dan sertifikasi yang dirancang untuk memperkuat keahlian serta standar profesional di bidang ortodonti
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Program pendidikan ortodontis" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Program Pelatihan
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                  Kursus dasar ortodonti bagi mahasiswa
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                  Workshop praktik bersama para ahli di bidangnya
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                  Seminar mengenai perkembangan teknologi ortodonti terkini
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                  Pelatihan penanganan kasus ortodonti yang kompleks
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 bg-[#027D77] text-white font-medium rounded-lg hover:bg-[#027D77]/90 transition-colors">
                Lihat Program Pelatihan
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sertifikasi ortodontis" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Uji Kompetensi
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                    Sertifikasi dasar ortodontis
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                    Sertifikasi lanjutan teknik ortodontis modern
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                    Sertifikasi spesialis perawatan anak
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D2DC00] mt-1"></div>
                  <span className="ml-3 text-gray-600">
                    Sertifikasi penanganan kasus kompleks
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 bg-[#027D77] text-white font-medium rounded-lg hover:bg-[#027D77]/90 transition-colors">
                Lihat Uji Kompetensi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}