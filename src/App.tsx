import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { TentangKami } from './pages/TentangKami';
import BeritaDanAcara from './pages/BeritaDanAcara';
import Galeri from './pages/Galeri';
import FkgUniversitasIndonesia from './pages/FkgUniversitasIndonesia';
import FkgUniversitasGadjahMada from './pages/FkgUniversitasGadjahMada';
import LulusanBaru from './pages/LulusanBaru';
import Resertifikasi from './pages/Resertifikasi';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <div className='sticky top-0 z-50'>
          <div className="w-full bg-[#027D77] text-white text-center text-sm py-2 px-4">
            Disclaimer: Konten dalam website ini menggunakan dummy data dan template, sehingga informasi yang disampaikan bukan informasi yang akurat.
          </div>
          <Navbar />
        </div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/berita-dan-acara" element={<BeritaDanAcara />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/fkg-universitas-indonesia" element={<FkgUniversitasIndonesia />} />
            <Route path="/fkg-universitas-gadjah-mada" element={<FkgUniversitasGadjahMada />} />
            <Route path="/lulusan-baru" element={<LulusanBaru />} />
            <Route path="/resertifikasi" element={<Resertifikasi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}