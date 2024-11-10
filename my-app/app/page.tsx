// import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
// import MoviesCarousel from "@/components/MoviesCarousel";
// import {movies} from "@/lib/server";
import MyCarousel from "@/components/MyCarousel";

export default async function Home() {
  // const upcomingMovies = await movies();

  return (
    <main className="">
      {/* <CarouselBannerWrapper /> */}
      {/* <div className="flex flex-col space-y-2">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
        
      </div> */}
      <MyCarousel/>
    </main>
  );
}
