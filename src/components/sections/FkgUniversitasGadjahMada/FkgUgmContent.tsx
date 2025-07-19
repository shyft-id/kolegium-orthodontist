import React from 'react';
import { MapPin, Phone, Mail, Info } from 'lucide-react';

export function FkgUgmContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-lg">
            <h2>Sejarah Singkat FKG Universitas Gadjah Mada</h2>
            <p>
              Fakultas Kedokteran Gigi Universitas Gadjah Mada (FKG UGM) merupakan pelopor pendidikan kedokteran gigi di Indonesia yang berdiri sejak masa perjuangan kemerdekaan. Cikal bakal pendidikan dokter gigi di Indonesia dimulai dari pendirian sekolah dokter hewan di Surabaya pada tahun 1861, yang kemudian berkembang menjadi Indische Veeartsen School di Bogor pada 1910 dan berubah nama menjadi Nederlandische Indische Veeartsen School (NIVS) pada 1920.
            </p>
            <p>
              Pada masa kemerdekaan, Sekolah Kedokteran Hewan di Bogor diresmikan menjadi Perguruan Tinggi Kedokteran Hewan (PTKH) pada November 1946. Namun, akibat pergolakan perang, banyak mahasiswa yang memilih belajar di luar Bogor. Pada 19 Desember 1949, pemerintah RI mendirikan Universiteit Negeri Gadjah Mada, dan PTKH menjadi bagian dari UGM dengan nama Fakultet Kedokteran Hewan.
            </p>
            <p>
              Seiring perkembangan, pada 1955 nama fakultas berubah menjadi Fakultas Kedokteran Hewan dan Peternakan (FKHP), lalu pada 10 November 1969 dipisah menjadi Fakultas Kedokteran Hewan dan Fakultas Peternakan. FKH UGM terus berkembang dengan fasilitas modern, laboratorium diagnostik, teaching farm, dan rumah sakit hewan Prof. Soeparwi.
            </p>
            <h3>Alamat & Kontak</h3>
            <ul>
              <li>Fakultas Kedokteran Gigi Universitas Gadjah Mada</li>
              <li>Jl. Farmako Sekip Utara, Yogyakarta 55281 Indonesia</li>
              <li>Email: dekan.fk@ugm.ac.id</li>
              <li>Tel: +62 274 560300</li>
              <li>Fax: +62 274 581876</li>
            </ul>
          </div>
          {/* Sidebar */}
          <aside className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-6 h-fit">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/9/9f/Emblem_of_Universitas_Gadjah_Mada.svg"
              alt="Logo Universitas Gadjah Mada"
              className="h-32 object-cover mx-auto mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Alamat & Kontak</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Fakultas Kedokteran Gigi Universitas Gadjah Mada</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Jl. Farmako Sekip Utara, Yogyakarta 55281</li>
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Email: dekan.fk@ugm.ac.id</li>
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Tel: +62 274 560300</li>
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Fax: +62 274 581876</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Fakta Singkat</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Didirikan tahun 1946</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Bagian dari UGM sejak 1949</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Fasilitas modern: laboratorium, teaching farm, rumah sakit hewan</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Kampus di Jl. Farmako Sekip Utara, Yogyakarta</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
