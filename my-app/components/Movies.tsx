"use client"
import React, { useState, useEffect } from 'react';
import { movies } from '@/lib/server'; // Assuming 'movies' is the function to fetch data from Django
import Image from 'next/image';

interface Movie {
    title: string; // Add other properties based on the movie data structure
    poster_path: string,
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
      <h1>Movies</h1>
      <ul>
        {movies1.map((movie, index) => (
            <div key={index}>
                <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={200}
                height={100}
                alt={movie.title!}
              />
              <li>{movie.poster_path} </li>
                <li>{movie.title}</li> 
            </div>
        ))}
         <Image
                src='https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg'
                width={200}
                height={100}
                alt=""
              />
      </ul>
    </div>
  );
};

export default Movies;
