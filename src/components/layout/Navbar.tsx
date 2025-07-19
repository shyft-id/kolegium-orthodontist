import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../ui/dropdown-menu';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPusatDropdownOpen, setIsPusatDropdownOpen] = useState(false); // for Pusat Pendidikan
  const [isSertifikasiDropdownOpen, setIsSertifikasiDropdownOpen] = useState(false); // for Sertifikasi
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Helper for dropdown active
  const isPusatActive = [
    '/fkg-universitas-indonesia',
    '/fkg-universitas-gadjah-mada',
  ].includes(location.pathname);
  const isSertifikasiActive = [
    '/lulusan-baru',
    '/resertifikasi',
  ].includes(location.pathname);
  return <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://kolegiumorthodonti.dentalneeds.id/wp-content/uploads/2025/07/LOGO-KOLEGIUM-ORTODONTI-NO-BG-01-1-min.png"
                alt="Logo Kolegium Ortodonti Indonesia"
                className="h-10 w-auto mr-2"
                style={{ maxHeight: '40px' }}
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${location.pathname === '/' ? 'text-[#027D77] font-bold' : 'text-gray-700'} font-medium hover:text-[#D2DC00] transition-colors`}>
              Home
            </Link>
            <Link to="/tentang-kami" className={`${location.pathname === '/tentang-kami' ? 'text-[#027D77] font-bold' : 'text-gray-700'} font-medium hover:text-[#027D77] transition-colors`}>
              Tentang Kami
            </Link>
            {/* Pusat Pendidikan Dropdown (shadcn/ui, hover) */}
            <div
              onMouseEnter={() => setIsPusatDropdownOpen(true)}
              onMouseLeave={() => setIsPusatDropdownOpen(false)}
              className="relative"
            >
              <DropdownMenu open={isPusatDropdownOpen} onOpenChange={setIsPusatDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button className={`flex items-center gap-1 font-medium transition-colors focus:outline-none ${isPusatActive ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`}>
                    Pusat Pendidikan
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={0}>
                  <DropdownMenuItem asChild>
                    <Link to="/fkg-universitas-indonesia" className="cursor-pointer">FKG Universitas Indonesia</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/fkg-universitas-gadjah-mada" className="cursor-pointer">FKG Universitas Gajah Mada</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* Sertifikasi Dropdown (shadcn/ui, hover) */}
            <div
              onMouseEnter={() => setIsSertifikasiDropdownOpen(true)}
              onMouseLeave={() => setIsSertifikasiDropdownOpen(false)}
              className="relative"
            >
              <DropdownMenu open={isSertifikasiDropdownOpen} onOpenChange={setIsSertifikasiDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button className={`flex items-center gap-1 font-medium transition-colors focus:outline-none ${isSertifikasiActive ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`}>
                    Sertifikasi
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={0}>
                  <DropdownMenuItem asChild>
                    <Link to="/lulusan-baru" className="cursor-pointer">Lulusan Baru</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resertifikasi" className="cursor-pointer">Resertifikasi</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/berita-dan-acara" className={`${location.pathname === '/berita-dan-acara' ? 'text-[#027D77] font-bold' : 'text-gray-700'} font-medium hover:text-[#027D77] transition-colors`}>
              Artikel
            </Link>
            <Link to="/galeri" className={`${location.pathname === '/galeri' ? 'text-[#027D77] font-bold' : 'text-gray-700'} font-medium hover:text-[#027D77] transition-colors`}>
              Galeri
            </Link>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="p-2 rounded-md text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/tentang-kami" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/tentang-kami' ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`} onClick={() => setIsMenuOpen(false)}>
              Tentang Kami
            </Link>
            {/* Pusat Pendidikan Dropdown (shadcn/ui) for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 w-full text-left px-3 py-2 rounded-md text-base font-medium ${isPusatActive ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`}>
                  Pusat Pendidikan
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link to="/fkg-universitas-indonesia" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>FKG Universitas Indonesia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/fkg-universitas-gadjah-mada" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>FKG Universitas Gajah Mada</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Sertifikasi Dropdown (shadcn/ui) for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`flex items-center gap-1 w-full text-left px-3 py-2 rounded-md text-base font-medium ${isSertifikasiActive ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`}>
                  Sertifikasi
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link to="/lulusan-baru" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Lulusan Baru</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resertifikasi" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Resertifikasi</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/berita-dan-acara" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/berita-dan-acara' ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`} onClick={() => setIsMenuOpen(false)}>
              Artikel
            </Link>
            <Link to="/galeri" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/galeri' ? 'text-[#027D77] font-bold' : 'text-gray-700 hover:text-[#027D77]'}`} onClick={() => setIsMenuOpen(false)}>
              Galeri
            </Link>
          </div>
        </div>}
    </header>;
}