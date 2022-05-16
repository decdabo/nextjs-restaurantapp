import Slider from "react-slick/lib/slider"
import { CarouselItem } from "./CarouselItem";

export const MenuCarousel = ({ menu }) => {
  const settings = {
    autoplaySpeed: 1500,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="carousel">
      <Slider {...settings}>
        {
          menu.map((item) => {
            return <CarouselItem item={ item } key={item.title} />
          })
        }
      </Slider>
    </section>
  )
}
