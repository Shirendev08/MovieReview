"use client"
import React, { useState, useEffect } from 'react';
import { movies } from '@/lib/server'; // Assuming 'movies' is the function to fetch data from Django
import Image from "next/legacy/image";

interface Movie {
    title: string; // Add other properties based on the movie data structure
    poster_path: string,
    popularity: string,
    release_date: string,
    original_title:string
}

const Movies = () => {
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
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1 className='mt-10'>Mongolian Movies</h1>
      <ul className='flex'>
        {movies1.map((movie, index) => (
            <div key={index} className='mr-10 w-auto'>
                <Image
  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://links.papareact.com/o8z'}
  width={200}
  height={300}
  alt={movie.title}
/>
                <li>{movie.original_title}</li> 
                <li>{movie.popularity}</li>
                <li>{movie.release_date}</li>
            </div>
        ))}
        
      </ul>
    </div>
  );
};

export default Movies;
