import CarouselBanner from "@/components/CarouselBanner";
import { movies } from "@/lib/server";

// type Props = {
//   id?: string;
//   keywords?: string;
// };

async function CarouselBannerWrapper() {
  const movies1 = await movies();

  return <CarouselBanner movies={movies1} />;
}

export default CarouselBannerWrapper;
