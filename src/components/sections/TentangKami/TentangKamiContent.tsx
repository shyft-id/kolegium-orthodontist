import React from 'react';
import { GraduationCap, Award, ShieldCheck, Users } from 'lucide-react';

const misiItems = [
  {
    icon: <GraduationCap className="w-7 h-7 text-[#027D77] mr-4 shrink-0" />, // curriculum
    text: 'Mengembangkan kurikulum berbasis kompetensi',
  },
  {
    icon: <Award className="w-7 h-7 text-[#027D77] mr-4 shrink-0" />, // quality
    text: 'Menjamin mutu dan profesionalisme spesialis ortodonti',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#027D77] mr-4 shrink-0" />, // safe care
    text: 'Memberikan edukasi perawatan behel yang aman',
  },
  {
    icon: <Users className="w-7 h-7 text-[#027D77] mr-4 shrink-0" />, // collaboration
    text: 'Mendorong kolaborasi ilmiah nasional dan internasional',
  },
];

export function TentangKamiContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Visi */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi</h2>
            <div className="w-24 h-1 bg-[#D2DC00] md:mx-0 mx-auto mt-2 mb-6"></div>
            <p className="text-lg text-gray-600">
            Menjadi Garda Terdepan dalam Pendidikan dan Standarisasi Ortodonti di Indonesia. Kolegium Ortodonti Indonesia berperan sebagai pelopor dalam meningkatkan kualitas pendidikan dan memastikan standar perawatan ortodonti yang aman, etis, dan profesional. Kami mendukung kemajuan ortodonti nasional melalui kolaborasi, kompetensi, dan integritas.
            <br /><br />
            Dengan berfokus pada peningkatan kualitas pendidikan, kompetensi, serta integritas para spesialis ortodonti, kami turut menjawab kebutuhan masyarakat akan perawatan behel yang aman, profesional, dan terpercaya. Sebagai garda terdepan, kami juga aktif membangun kolaborasi keilmuan baik di tingkat nasional maupun internasional untuk mendorong kemajuan ortodonti di Indonesia.
            </p>
          </div>
          {/* Misi */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi</h2>
            <div className="w-24 h-1 bg-[#D2DC00] md:mx-0 mx-auto mt-2 mb-6"></div>
            <div className="grid grid-cols-1 gap-6">
              {misiItems.map((item, idx) => (
                <div key={idx} className="bg-[#F7FAF8] rounded-xl shadow p-6 flex items-center text-gray-800 font-medium text-lg min-h-[72px]">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}