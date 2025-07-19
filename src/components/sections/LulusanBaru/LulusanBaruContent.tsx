import React from 'react';
import { Mail, Info } from 'lucide-react';

export function LulusanBaruContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 prose prose-lg">
            <h2>Lulusan Baru Dokter Spesialis & Subspesialis</h2>
            <p>
              Sertifikat Kompetensi adalah dokumen wajib bagi setiap Dokter Spesialis Penyakit Dalam sebagai dasar pembuatan STR dan SIP. Bagi dokter yang telah lulus Ujian Kompetensi Dokter Spesialis Penyakit Dalam Indonesia (UK-DSPDI) dan melengkapi pemberkasan di Program Studi masing-masing, permohonan penerbitan sertifikat kompetensi dapat diajukan melalui email ke <b>serkomkipd@gmail.com</b>.
            </p>
            <h3>Prosedur Permohonan Sertifikat Kompetensi</h3>
            <ol>
              <li>Kirim email permohonan ke <b>serkomkipd@gmail.com</b> dengan data konfirmasi biodata (Nama sesuai Ijazah, NPA IDI, TTL, Alamat Korespondensi, Email, No. HP, NIK).</li>
              <li>Lampirkan file foto berlatar merah.</li>
              <li>Lampirkan Surat Keterangan Lulus dari Prodi/Surat Permohonan Penerbitan Serkom dari Prodi.</li>
              <li>Lampirkan SK TUBEL (jika ada).</li>
            </ol>
            <p>Email permohonan akan dibalas dalam 1-3 hari kerja. Sertifikat diproses maksimal 30 hari kerja sejak balasan email, dan status dapat dicek online di <a href="https://app.reserkom.com/cari-dokter" target="_blank" rel="noopener noreferrer">app.reserkom.com/cari-dokter</a>.</p>
            <h3>Lulusan Baru Dokter Subspesialis</h3>
            <ol>
              <li>KPS Sp2 melaporkan kelulusan ke KIPD via email <b>kolegiumipd@yahoo.com</b> dan unggah dokumen ke google drive <b>subspesialis.ipd@gmail.com</b>.</li>
              <li>KIPD memeriksa kelengkapan dokumen.</li>
              <li>Jika lengkap, KIPD menerbitkan surat persetujuan ke KPS terkait, tembusan dokter ybs dan UKSS.</li>
              <li>Dokter melengkapi administrasi sesuai surat persetujuan.</li>
              <li>Penerbitan serkom (pencetakan, pemeriksaan data, tanda tangan, legalisir).</li>
              <li>Serkom yang sudah ditandatangani dikirim via email ke dokter ybs.</li>
              <li>Setelah ijazah subspesialis terbit, dokter dapat mengajukan STR KT Subsp ke KKI. KIPD melanjutkan legalisasi serkom.</li>
              <li>Setelah legalisasi selesai, serkom hardcopy dikirim ke alamat korespondensi dokter ybs.</li>
            </ol>
            <h3>Persyaratan Dokumen Subspesialis</h3>
            <ul>
              <li>Surat laporan kelulusan dari KPS Sp2</li>
              <li>Berita acara ujian kompetensi dokter subspesialis</li>
              <li>Curriculum vitae (format KIPD)</li>
              <li>Buku log/transkrip nilai selama pendidikan</li>
              <li>Bukti penelitian akhir</li>
              <li>Bukti publikasi (presentasi internasional/jurnal nasional)</li>
            </ul>
            <p>Proses penerbitan serkom maksimal 30 hari kerja. Status dapat dicek di <a href="https://app.reserkom.com/cari-dokter" target="_blank" rel="noopener noreferrer">app.reserkom.com/cari-dokter</a>.</p>
          </div>
          {/* Sidebar */}
          <aside className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-6 h-fit">
            <img
              src="/logo.png"
              alt="Logo Kolegium Ortodonti Indonesia"
              className="h-32 object-cover mx-auto mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Kontak Sertifikasi</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />serkomkipd@gmail.com</li>
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />kolegiumipd@yahoo.com (subspesialis)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#027D77]">Fakta Singkat</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Sertifikat kompetensi wajib untuk STR & SIP</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Proses maksimal 30 hari kerja</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Status sertifikat dapat dicek online</li>
                <li className="flex gap-2"><Info className="w-4 h-4 mt-1 shrink-0 text-[#027D77]" />Email balasan 1-3 hari kerja</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
