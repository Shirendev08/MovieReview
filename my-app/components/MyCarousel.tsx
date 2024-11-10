"use client"
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { movies } from '@/lib/server';
import getImagePath from '@/lib/getImagePath';
const images = [
  "https://image.tmdb.org/t/p/original/j0xO6355h5HfvC425sWDT6tiBZM.jpg",
  "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg",
  "https://image.tmdb.org/t/p/original//8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
];

interface Movie {
    title: string; // Add other properties based on the movie data structure
    poster_path: string,
    popularity: string,
    release_date: string,
    backdrop_path: string
}
const MyCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);
  const [movies1, setMovies1] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movies(); // Fetch the movies from your server
        setMovies1(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies(); // Call the async function to fetch the movies
  }, []);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {movies1.map((movie,index) => (
          <div className="relative min-w-full" key={index}>
            <Image
             
              src={getImagePath(movie.backdrop_path, true)}
              alt=""
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
      
      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        onClick={scrollPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white bg-gray-700 rounded-full p-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        onClick={scrollNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white bg-gray-700 rounded-full p-1"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default MyCarousel;
