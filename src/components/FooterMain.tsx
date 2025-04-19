export const FooterMain = () => {
  return (
    <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-[300px] z-[-1] bg-gradient-to-t  from-in-cyan to-white"></div>
        <footer className="container mx-auto px-4 max-w-[1440px] py-6">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 lg:gap-24 text-in-blue md:mb-12 text-center md:text-left">
                <section className="flex flex-col gap-2 md:gap-0 justify-center md:flex-1/3"> 
                    <img className="w-48 mx-auto pb-4 md:pb-6 md:mx-0" src="/logos/logo-insalud.png" alt="logo insalud" />
                    <p className="font-semibold capitalize max-w-[440px] md:text-lg md:font-medium md:leading-6 pb-2">Más de 5,000 tratamientos realizados con excelentes resultados.</p>
                    <p className="text-sm leading-relaxed max-w-[440px]">Confía en la terapia que ha ayudado a miles de hombres a recuperar su confianza y bienestar sexual.</p>
                </section>
                <section className="flex flex-col gap-4 md:flex-1/3">
                    <div className="md:space-y-2">
                        <p className="font-medium md:font-normal">Te espersamos en:</p>
                        <p className="text-sm md:text-base md:font-medium">Joaquín José Orrantia González 125, <br /> Torre Médica Solaris - Oficina 404</p>
                    </div>
                    <div className="md:space-y-2">
                        <p className="font-medium md:font-normal">Conversemos sobre tu caso</p>
                        <p className="text-sm md:text-base md:font-medium">+593 99 424 2175 <br /> admision@insalud.ec</p>
                    </div>
                </section>
                <section className="space-y-2 md:space-y-4 md:flex-1/3">
                    <p className="text-sm md:text-base">Síguenos y entérate primero</p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <img className="w-7 sm:w-6 cursor-pointer hover:scale-110 transition-all duration-150" src="/icons/instagram.svg" alt="logo instagram" />
                        <img className="w-7 sm:w-6 cursor-pointer hover:scale-110 transition-all duration-150" src="/icons/tiktok.svg" alt="logo tiktok" />
                        <img className="w-7 sm:w-6 cursor-pointer hover:scale-110 transition-all duration-150" src="/icons/fb.svg" alt="logo facebook" />
                    </div>
                </section>
            </div>
            <div className="flex flex-col md:flex-row justify-between text-center font-semibold md:font-normal text-in-blue">
                <p>© 2025 All Rights Reserved.</p>
                <p>Team insalud</p>
            </div>
        </footer>
    </div>
  )
}
