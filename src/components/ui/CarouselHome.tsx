import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const slides = ["/images/item-1.png", "/images/item-2.png"];

export const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: false },                    // sin drag, solo autoplay
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (emblaApi) setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <div className="relative w-full max-w-[560px] h-[560px]">
      {/* viewport */}
      <div ref={emblaRef} className="overflow-hidden rounded-xl w-full h-full">
        {/* rail */}
        <div className="flex">
          {slides.map((src, i) => (
            <div key={i} className="min-w-full relative">
              {/* imagen con fade + zoom */}
              <img
                src={src}
                alt={`slide ${i}`}
                className={`w-full h-full object-cover rounded-xl
                  transition-all duration-800 ease-in-out
                  ${index === i
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* bullets */}
      {/* <div className="mt-4 lg:mt-8 flex gap-2 justify-center lg:justify-end pr-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            onMouseDown={e => e.preventDefault()}
            className={`w-6 h-3 rounded-full transition-colors
              ${index === i ? "bg-in-cyan-text" : "bg-in-blue"}`}
          />
        ))}
      </div> */}
    </div>
  );
};
