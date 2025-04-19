import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonials";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";

export const Testimonials = () => {
  return (
    <section className="relative pt-16">
      <div className="container mx-auto px-4 max-w-[1440px] py-6 pb-16">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-in-cyan-text mb-4" data-aos="zoom-in">
          Testimonios que nos respaldan
        </h2>
        <Swiper
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop={true}
          speed={2000}
          allowTouchMove={false}
        >
          {testimonials.map((testimonials) => (
            <SwiperSlide key={testimonials.id} className="flex justify-center">
              <div className="rounded-2xl p-6 flex flex-col gap-4 max-w-[640px] w-full mx-auto space-y-4">
                <div>
                  <p className="text-xl md:text-2xl font-medium">
                    {testimonials.text}
                  </p>
                  <div className="flex gap-4 items-center mt-4">
                    <img
                      src="/avatars/avatar1.png"
                      alt="avatar user"
                      className="w-12 h-12 rounded-full bg-gray-200"
                    />
                    <div>
                      <p className="md:font-semibold">{testimonials.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonials.job}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xl md:text-2xl font-medium">
                    {testimonials.text2}
                  </p>
                  <div className="flex gap-4 items-center mt-4">
                    <img
                      src="/avatars/avatar2.png"
                      alt="avatar user"
                      className="w-12 h-12 rounded-full bg-gray-200"
                    />
                    <div>
                      <p className="md:font-semibold">{testimonials.name2}</p>
                      <p className="text-sm text-gray-500">
                        {testimonials.job2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img className="absolute left-0 top-1/2 -translate-y-1/2" src="/vector/vector-1.svg" alt="fondo vector" />
      <img className="absolute right-0 top-1/2 -translate-y-1/2" src="/vector/vector-2.svg" alt="fondo vector" />
    </section>
  );
};
