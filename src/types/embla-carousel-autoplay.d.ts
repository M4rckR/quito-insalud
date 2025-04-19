declare module 'embla-carousel-autoplay' {
    // import type { EmblaCarouselType, EmblaPluginType } from 'embla-carousel';
  
    export type AutoplayOptionsType = {
      delay?: number;
      stopOnInteraction?: boolean;
      stopOnMouseEnter?: boolean;
      stopOnLastSnap?: boolean;
      rootNode?: ((emblaRoot: HTMLElement) => HTMLElement) | null;
    };
  
    export default function Autoplay(options?: AutoplayOptionsType): EmblaPluginType;
  }
  