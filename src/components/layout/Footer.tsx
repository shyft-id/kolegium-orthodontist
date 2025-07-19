import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://kolegiumorthodonti.dentalneeds.id/wp-content/uploads/2025/07/LOGO-KOLEGIUM-ORTODONTI-NO-BG-01-1-min.png"
              alt="Logo Kolegium Ortodonti Indonesia"
              className="h-12 w-auto mb-4"
              style={{ maxHeight: '48px' }}
            />
            <p className="text-gray-300 mb-6">
              Komunitas ortodontis terpercaya yang menghubungkan mahasiswa,
              profesional, dan pasien di seluruh Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Pusat Pendidikan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Pendidikan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Sertifikasi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Berita dan Acara
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Galeri
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Program</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Sertifikasi Dasar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Sertifikasi Lanjutan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Workshop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Seminar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Konferensi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#D2DC00]">
                  Direktori Ortodontis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D2DC00] mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Jl. Ortodontis No. 123, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#D2DC00] mr-3" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#D2DC00] mr-3" />
                <span className="text-gray-300">info@orthoedu.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kolegium Ortodonti Indonesia. Hak Cipta Dilindungi.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <span className="text-xs text-gray-500">Powered by</span>
            <a href="https://shyft.id/" target="_blank" rel="noopener noreferrer">
              <img src="/shyft-logo-white.png" alt="Shyft Logo" className="h-6 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}