import React from 'react';
import { Hero } from '../components/sections/Home/Hero';
import { Features } from '../components/sections/Home/Features';
import { Education } from '../components/sections/Home/Education';
import { News } from '../components/sections/Home/News';
import { Gallery } from '../components/sections/Home/Gallery';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Education />
      <News />
      <Gallery />
    </>
  );
}