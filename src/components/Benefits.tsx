import { Swiper, SwiperSlide } from "swiper/react";
import { benefits } from "../data/benefits";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { useState } from "react";

export const Benefits = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  return (
    <div id="beneficios" className="container mx-auto px-4 max-w-[1440px] pb-20 lg:pb-32">
      <h2
        className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-in-cyan-text mb-4"
        data-aos="zoom-in"
      >
        Beneficios
      </h2>
      <div className="relative overflow-visible" data-aos="fade-up"
     data-aos-duration="800">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          onReachBeginning={() => setAtStart(true)}
          onFromEdge={() => {
            setAtStart(false);
            setAtEnd(false);
          }}
          onReachEnd={() => setAtEnd(true)}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".benefits-button-next",
            prevEl: ".benefits-button-prev",
          }}
          autoplay = {{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          className="overflow-visible"
        >
          {benefits.map((benefit) => (
            <SwiperSlide className="bg-white pt-6 px-6 pb-0 shadow-lg cursor-grab rounded-xl overflow-visible min-h-[280px] sm:min-h-[220px] md:min-h-[300px] xl:min-h-[240px]">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-medium min-h-[60px]">
                  {benefit.title}
                </h3>
                <p className="pt-2">{benefit.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex absolute">
          <div
            className={`benefits-button-prev transition-opacity duration-200 ${
              atStart ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            <img
              className="rotate-180 cursor-pointer hover:scale-105 transition-all duration-150"
              src="vector/arrows-benefits.svg"
              alt="button prev"
            />
          </div>
          <div
            className={`benefits-button-next transition-opacity duration-200 ${
              atEnd ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            <img
              className="cursor-pointer hover:scale-105 transition-all duration-150"
              src="vector/arrows-benefits.svg"
              alt="button prev"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
