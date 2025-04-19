import ReactPlayer from "react-player";

export const InfoTreatment = () => {
  return (
    <div className="relative lg:pt-24 md:mb-72 xl:mb-72">
        <div className="absolute hidden md:block md:top-[420px] lg:top-[400px] left-0 right-0 w-full inset-0 h-[800px] bg-gradient-to-b from-in-cyan to-in-white -z-10"></div>
      <section className="container mx-auto px-4 max-w-[1400px] mb-12">
        <div className="gap-6">
          <div className="flex flex-col md:flex-row gap-x-6">
            <div  className="w-full rounded md:min-w-[380px]  h-[450px] mx-auto mb-6">
              <ReactPlayer
                data-aos="fade-up"
     data-aos-duration="800"
                url="https://www.youtube.com/watch?v=WQKqfT_l-SI"
                width="100%"
                height="100%"
                controls={true}
                className="react-player"
                light={true}
                playing={true}
                
              />
              <img
                data-aos="fade-up"
     data-aos-duration="800"
                src="/images/equipo-laser.png"
                alt="ondas de choque"
                className="w-3/5 mx-auto hidden md:block"
              />
            </div>
            <div className="space-y-4 md:pt-24">
              <div className="md:pl-6" data-aos="fade-up"
     data-aos-duration="800">
                <h3 className="text-in-cyan-text text-3xl md:text-4xl md:pb-4 pb-2">
                  Ondas de choque
                </h3>
                <p className="md:pb-12 md:pr-12 lg:pr-16">
                  La terapia de ondas de choque es un tratamiento clínico
                  moderno, no invasivo y sin efectos secundarios para tratar la
                  disfunción eréctil. Estimula la regeneración de los vasos
                  sanguíneos del pene y mejora la erección de forma natural y
                  progresiva.
                </p>
              </div>
              <div data-aos="fade-up"
     data-aos-duration="800">
                <img
                
                  src="/images/tratamiento.png"
                  alt="ondas de choque"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};