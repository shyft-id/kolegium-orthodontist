import React from 'react';
export function Testimonials() {
  const testimonials = [{
    id: 1,
    name: 'Dr. Andi Pratama',
    role: 'Ortodontis Bersertifikat',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Sertifikasi dari komunitas ini telah membuka banyak peluang dalam karir saya. Pasien lebih percaya dengan kredensial yang saya miliki.'
  }, {
    id: 2,
    name: 'Dr. Siti Rahayu',
    role: 'Mahasiswa Spesialis Ortodontis',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Program pendidikan yang ditawarkan sangat komprehensif dan membantu saya mempersiapkan diri untuk praktik profesional.'
  }, {
    id: 3,
    name: 'Budi Santoso',
    role: 'Pasien Ortodontis',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    quote: 'Berkat direktori dokter bersertifikasi di website ini, saya menemukan ortodontis yang tepat untuk perawatan gigi anak saya.'
  }];
  return <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Testimoni</h2>
          <div className="w-24 h-1 bg-[#D2DC00] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman dari anggota komunitas kami
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>)}
        </div>
      </div>
    </section>;
}