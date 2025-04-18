import { Link } from 'react-scroll';

export const HeaderMain = () => {
  return (
    <div className="relative">
        <div className="absolute top-0 left-0 w-full h-[300px] z-[-1] bg-gradient-to-b  from-in-cyan to-transparent"></div>
        <header className="container mx-auto px-4 max-w-[1440px] py-6 flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <img className="w-32 md:w-40" src="/logos/logo-insalud.png" alt="logo insalud" />
                <div className="w-[1px] h-8 bg-in-blue md:hidden"></div>
                <p className="text-sm leading-4 md:hidden text-in-blue">SEDE <br /> Quito</p>
            </div>
            <div>
                <div className="font-in-nunito flex font-semibold text-lg text-in-blue gap-6 ">
                    <p className="hidden md:block cursor-pointer hover:text-in-blue/65 transition-all duration-150 ease-in-out">
                            Beneficios
                    </p>
                    <p className="hidden md:block cursor-pointer hover:text-in-blue/65 transition-all duration-150 ease-in-out">
                        <Link to="preguntas" smooth={true} duration={500}>
                            Preguntas frecuentes
                        </Link>
                    </p>
                    <div className="flex gap-4">
                        <img className="w-6 sm:w-7 cursor-pointer" src="/icons/instagram.svg" alt="logo instagram" />
                        <img className="w-6 sm:w-7 cursor-pointer" src="/icons/tiktok.svg" alt="logo tiktok" />
                        <img className="w-6 sm:w-7 cursor-pointer" src="/icons/fb.svg" alt="logo facebook" />
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
