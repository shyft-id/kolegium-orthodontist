import React from 'react';
import { Mail, Info } from 'lucide-react';

export function ResertifikasiContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-lg">
            <h2>Resertifikasi Dokter Spesialis Penyakit Dalam</h2>
            <p>
              Resertifikasi adalah proses perpanjangan masa berlaku Sertifikat Kompetensi bagi dokter spesialis penyakit dalam yang telah habis masa berlakunya. Sertifikat ini diperlukan untuk pengajuan STR dan SIP baru.
            </p>
            <h3>Prosedur Permohonan Resertifikasi</h3>
            <ol>
              <li>Kirim permohonan resertifikasi ke <b>serkomkipd@gmail.com</b> dengan data biodata lengkap (Nama, NPA IDI, TTL, alamat, email, no. HP, NIK).</li>
              <li>Lampirkan Sertifikat Kompetensi lama dan STR lama.</li>
              <li>Lampirkan dokumen pendukung (SKP, surat rekomendasi, dsb sesuai ketentuan KIPD).</li>
            </ol>
            <p>Email permohonan akan dibalas dalam 1-3 hari kerja. Proses resertifikasi maksimal 30 hari kerja sejak balasan email, dan status dapat dicek online di <a href="https://app.reserkom.com/cari-dokter" target="_blank" rel="noopener noreferrer">app.reserkom.com/cari-dokter</a>.</p>
            <h3>Persyaratan Dokumen Resertifikasi</h3>
            <ul>
              <li>Scan Sertifikat Kompetensi lama</li>
              <li>Scan STR lama</li>
              <li>SKP terbaru sesuai ketentuan</li>
              <li>Surat rekomendasi dari institusi terkait (jika diperlukan)</li>
              <li>Dokumen pendukung lain sesuai permintaan KIPD</li>
            </ul>
            <p>Proses resertifikasi maksimal 30 hari kerja. Status dapat dicek di <a href="https://app.reserkom.com/cari-dokter" target="_blank" rel="noopener noreferrer">app.reserkom.com/cari-dokter</a>.</p>
          </div>
          {/* Sidebar */}
          <aside className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-6 h-fit">
            <img
              src="https://kolegiumorthodonti.dentalneeds.id/wp-content/uploads/2024/07/LOGO-KOLEGIUM-ORTODONTI-NO-BG-01-1-min.png"
              alt="Logo Kolegium Ortodonti Indonesia"
              className="h-32 object-cover mx-auto mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Kontak Sertifikasi</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />serkomkipd@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Fakta Singkat</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Resertifikasi wajib untuk STR & SIP baru</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Proses maksimal 30 hari kerja</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Status dapat dicek online</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Email balasan 1-3 hari kerja</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
