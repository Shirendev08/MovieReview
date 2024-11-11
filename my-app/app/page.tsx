// import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
// import MoviesCarousel from "@/components/MoviesCarousel";
// import {movies} from "@/lib/server";
import MyCarousel from "@/components/MyCarousel";
import Movies from "@/components/Movies";

export default async function Home() {
  // const upcomingMovies = await movies();

  return (
    <main className="">
      
      <MyCarousel/>
      <Movies/>
    </main>
  );
}
