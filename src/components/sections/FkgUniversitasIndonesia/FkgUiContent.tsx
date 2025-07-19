import React from 'react';
import { MapPin, Phone, Mail, Info } from 'lucide-react';

export function FkgUiContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-lg">
            <h2>Sejarah Singkat FKG Universitas Indonesia</h2>
            <p>
              Fakultas Kedokteran Universitas Indonesia (FKUI) memiliki sejarah panjang yang erat kaitannya dengan perkembangan pendidikan kedokteran di Indonesia. Pendidikan kedokteran di Indonesia dimulai pada masa kolonial Belanda, tepatnya pada 2 Januari 1849 dengan berdirinya sekolah kedokteran pertama di Rumah Sakit Militer Batavia. Sejak saat itu, FKUI terus berkembang dan bertransformasi mengikuti dinamika zaman.
            </p>
            <h3>Perkembangan di Masa Kolonial</h3>
            <p>
              Pada tahun 1898, didirikan STOVIA (School tot Opleiding van Inlandsche Artsen) yang menjadi cikal bakal FKUI. STOVIA kemudian berkembang menjadi Geneeskundige Hooge School (GHS) pada tahun 1927, menandai pendidikan kedokteran sebagai pendidikan tinggi di Indonesia.
            </p>
            <h3>Masa Pendudukan Jepang dan Kemerdekaan</h3>
            <p>
              Selama pendudukan Jepang, pendidikan kedokteran sempat terhenti namun kembali dibuka dengan nama Ika Daigaku pada tahun 1943. Setelah kemerdekaan, pada tahun 1950, FKUI resmi berdiri sebagai bagian dari Universitas Indonesia.
            </p>
            <h3>Modernisasi dan Kurikulum</h3>
            <p>
              Seiring perkembangan zaman, FKUI terus melakukan modernisasi kurikulum dan metode pembelajaran, termasuk kerja sama dengan berbagai institusi internasional. Kurikulum FKUI kini menekankan pembelajaran aktif, integrasi ilmu, dan pengembangan dokter yang kritis, kreatif, dan inovatif.
            </p>
          </div>
          {/* Sidebar */}
          <aside className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-6 h-fit">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/0/0f/Makara_of_Universitas_Indonesia.svg"
              alt="Logo Makara Universitas Indonesia"
              className="h-32 object-cover mx-auto mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Alamat & Kontak</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-[#027D77]" />Fakultas Kedokteran Universitas Indonesia</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-[#027D77]" />Jl. Salemba Raya No. 6, Jakarta Pusat 10430</li>
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 text-[#027D77]" />Telp. (021) 31930373, 31930371, 3912477</li>
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 text-[#027D77]" />Email: office@fk.ui.ac.id | humas@fk.ui.ac.id</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Fakta Singkat</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Didirikan tahun 1849</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Transformasi dari STOVIA, GHS, Ika Daigaku</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Bagian dari Universitas Indonesia sejak 1950</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Kurikulum modern & terintegrasi</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
