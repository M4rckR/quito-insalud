import { useState } from 'react';
import { AccordionItem } from './ui/AccordionItem';

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="preguntas" className="container mx-auto px-4 max-w-[1440px] py-6 pb-32">
      <h2 className="text-center text-in-cyan-text text-2xl md:text-3xl lg:text-4xl font-medium mb-12" data-aos="zoom-in">
        Preguntas Frecuentes
      </h2>

      <div className='flex flex-col md:flex-row gap-6 rounded-lg lg:px-16'>
        <div className='flex flex-col flex-1/2 gap-6'>
          <div data-aos="fade-right">
            <AccordionItem
                  title="¿Funciona para todos?"
                  isOpen={openIndex === 0}
                  onToggle={() => toggleIndex(0)}
              >
                  Sí, la terapia de ondas de choque es efectiva en la gran mayoría de pacientes. Hombres de todas las edades han reportado mejoras en la calidad y duración de sus erecciones desde las primeras sesiones.
              </AccordionItem>
          </div>
          <div data-aos="fade-right">
            <AccordionItem
                  title="¿El tratamiento duele?"
                  isOpen={openIndex === 1}
                  onToggle={() => toggleIndex(1)}
              >
                  No, es completamente indoloro.
            </AccordionItem>
          </div>

          
            
        </div>
          


        <div className='flex flex-col flex-1/2 gap-6'>
          <div data-aos="fade-left">
            <AccordionItem
              title="¿Cuántas sesiones necesito?"
              isOpen={openIndex === 2}
              onToggle={() => toggleIndex(2)}
            >
              Lo usual es entre 6 a 12 sesiones, según evaluación médica.
            </AccordionItem>
          </div>
          
          <div data-aos="fade-left">
            <AccordionItem
              title="¿Es seguro?"
              isOpen={openIndex === 3}
              onToggle={() => toggleIndex(3)}
            >
              Sí, es un procedimiento no invasivo aprobado clínicamente.
            </AccordionItem>
          </div>
          
          <div data-aos="fade-left">
            <AccordionItem
              title="¿Necesito receta médica?"
              isOpen={openIndex === 4}
              onToggle={() => toggleIndex(4)}
            >
              No necesitas receta, pero sí una evaluación gratuita previa con nuestros especialistas.
            </AccordionItem>
          </div>
          
        </div>

      </div>
    </section>
  );
};
