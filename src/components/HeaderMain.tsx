import { Link } from 'react-scroll';

export const HeaderMain = () => {
  return (
    <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[300px] z-[-1] bg-gradient-to-b  from-in-cyan to-transparent"></div>
        <header className="container mx-auto px-4 max-w-[1200px] pt-6 pb-12 md:pb-16 flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <img className="w-32 md:w-40" src="logos/logo-insalud.png" alt="logo insalud" />
                <div className="w-[1px] h-8 bg-in-blue"></div>
                <p className="text-sm leading-4 text-in-blue">SEDE <br /> Quito</p>
            </div>
            <div>
                <div className="font-in-nunito flex font-semibold text-lg text-in-blue gap-6 ">
                    <p className="hidden md:block cursor-pointer hover:text-in-blue/65 transition-all duration-150 ease-in-out">
                        <Link to="beneficios" smooth={true} duration={500}>
                            Beneficios
                        </Link>
                    </p>
                    <p className="hidden md:block cursor-pointer hover:text-in-blue/65 transition-all duration-150 ease-in-out">
                        <Link to="preguntas" smooth={true} duration={500}>
                            Preguntas frecuentes
                        </Link>
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/insalud.sedequito?igsh=YThkMDh3eXQ5d3Q4" target="_blank">
                           <img className="w-6 sm:w-7 cursor-pointer" src="icons/instagram.svg" alt="logo instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@insaludquito?_t=ZM-8vfZK2TtAhS&_r=1" target="_blank">
                            <img className="w-6 sm:w-7 cursor-pointer" src="icons/tiktok.svg" alt="logo tiktok" />
                        </a>
                        <a href="https://www.facebook.com/share/15xS3Z6y8C/?mibextid=wwXIfr" target="_blank">
                            <img className="w-6 sm:w-7 cursor-pointer" src="icons/fb.svg" alt="logo facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
