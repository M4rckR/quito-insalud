import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-scroll';
import { CarouselHome } from "./ui/CarouselHome";


export const MainHero = () => {
    return (
      <section className="container mx-auto px-4 max-w-[1200px] mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-6 gap-x-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-center md:text-left text-[32px] md:text-4xl lg:text-5xl text-in-blue px-4 md:px-0 leading-8 md:leading-14">
              Recupera tu{" "}
              <span className="text-in-cyan-text font-bold">
                potencia sexual
              </span>{" "}
              sin <span className="font-bold">pastillas</span> ni{" "}
              <span className="font-bold">cirugía</span>
            </h2>
            <div className="flex justify-center md:justify-start">
                <Link className="bg-in-orange py-2 cursor-pointer md:py-3 px-8 rounded-3xl text-white font-medium" to="formulario" smooth={true} duration={500}>
                Agendar cita
                </Link>
            </div> 
          </div>
          <div className="flex justify-center md:justify-end">
            <CarouselHome />
          </div>
          <div className="hidden space-y-2 pl-4 pt-6 md:-mt-26 lg:-mt-32 md:block">
            <div className="flex items-start justify-center md:justify-start gap-2">
              <img
                width={10}
                height={10}
                className="w-6 md:w-8"
                src="vector/quotes.svg"
                alt="quotes"
              />
              <p className="text-sm text-in-blue font-medium pt-2 max-w-[450px]">
              Realicé la terapia de ondas de choque en Insalud. Fue sencillo, profesional y noté resultados desde la primera sesión. ¡Se lo sugiero a todos!
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start md:pl-10">
              <img className="rounded-full w-12 h-12" width={12} height={12} src="avatars/avatar3.png" alt="avatar main" />
              <div className="text-in-blue flex gap-2">
                <div>
                  <p className="p-0 font-semibold text-lg/6">Raul E.</p>
                  <p className="p-0 text-sm/4">31 años</p>
                </div>
                <div className="flex gap-1 text-in-cyan-text ">
                  <FaCheckCircle  className="mt-1 w-3"/>
                  <p className="text-xs font-medium mt-1">Usuario Verificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden space-y-2 pl-4 pt-6 md:pt-4 mt-4" data-aos="fade-up"
     data-aos-duration="800">
          <div className="flex items-start justify-center gap-2">
            <img
              width={10}
              height={10}
              className="w-6 h-6 md:w-8"
              src="vector/quotes.svg"
              alt="quotes"
            />
            <p className="text-sm text-in-blue font-medium pt-2 max-w-[450px]">
            Realicé la terapia de ondas de choque en Insalud. Fue sencillo, profesional y noté resultados desde la primera sesión. ¡Se lo sugiero a todos!
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-start lg:pl-10">
            <div>
              <img className="rounded-full w-12 h-12" width={12} height={12} src="avatars/avatar3.png" alt="avatar main" />
            </div>
            <div className="text-in-blue flex gap-2">
              <div>
                <p className="p-0 font-semibold text-lg/6">Raul E.</p>
                <p className="p-0 text-sm/4">31 años</p>
              </div>
              <div className="flex gap-1 text-in-cyan-text ">
                  <FaCheckCircle  className="mt-1 w-3"/>
                  <p className="text-xs font-medium mt-1">Usuario Verificado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };