import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AlisherNavoiy from "../assets/alisherNavoiy..jpg"
import AlburayhonBeruniy from "../assets/abuRayhonBeruniy.jpg"
import AbuAli from "../assets/abuAliIbnSino..jpg"
import Imom from "../assets/imomAlBuxoriy.jpg"
import Kammoliddin from "../assets/kamoliddinBehzod.jpg"

const scholars = [
  {
    name: 'Abu Rayhan Beruni',
    dates: '(September 4, 973 — December 13, 1048)',
    description: 'One of the great scholars of the Golden Age of Islam, originally from Khwarezm.',
    image: AlburayhonBeruniy,
  },
  {
    name: 'Alisher Navoiy',
    dates: '(February 9, 1441 — January 3, 1501)',
    description: 'A prominent Uzbek poet, thinker, and statesman.',
    image: AlisherNavoiy,
  },
  {
    name: 'Abu Ali Ibn Sino',
    dates: '(June 18, 980 — August 16, 1037)',
    description: 'A great Central Asian scholar, physician, and philosopher.',
    image: AbuAli,
  },
  {
    name: 'Mirzo Ulugbek',
    dates: '(March 22, 1394 — October 27, 1449)',
    description: 'A great Uzbek astronomer and mathematician.',
    image: Imom,
  },
  {
    name: 'Imom Al-Buxoriy',
    dates: '(July 21, 810 — August 31, 870)',
    description: 'Imam of Hadith scholars, often referred to as the Sultan of Hadith Science.',
    image: Kammoliddin,
  },
  {
    name: 'Kamoliddin Behzod',
    dates: '(1455 — 1536)',
    description: 'A painter, one of the leading figures of the Eastern Renaissance, founder of the Herat school.',
    image: Kammoliddin,
  },
];

const FamousScholarships = () => {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false, 
  });
});


  return (
    <div>
      <section className="px-4 py-8 text-center" data-aos="fade-up">
        <h1 className="text-4xl font-bold">Famous state scholarships</h1>
        <p className="text-xl mt-4">
          Awarded to students studying at higher educational institutions in the Republic of Uzbekistan.
        </p>
      </section>

      <section className="grid gap-8 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {scholars.map((scholar, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={scholar.image}
              alt={scholar.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{scholar.name}</h2>
              <p className="text-sm text-gray-600 mt-1 font-bold">
                {scholar.dates} — {scholar.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FamousScholarships;
