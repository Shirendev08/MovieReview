"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/legacy/image";
import { movies } from '@/lib/server';
import getImagePath from '@/lib/getImagePath';

interface Movie {
  title: string;
  poster_path: string;
  popularity: string;
  release_date: string;
  backdrop_path: string;
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

    fetchMovies();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {movies1.map((movie, index) => (
          <div className="relative min-w-[55%] l-10 h-[500px] ml-10 mr-10" key={index}>
            <Image
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/placeholder-image.jpg" // Add a blur placeholder image
              priority={index === 0} // Prioritize loading of the first image
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
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
