import { useState, useRef, useEffect } from "react";
import { AddClients } from "../services/AddClients";
import { Client } from "../types";
import { Bounce, toast } from "react-toastify";
import { SyncLoader } from "react-spinners";

export const MainContact = () => {
    
    const [hoy, setHoy] = useState("");
    const [minHora, setMinHora] = useState("00:00");
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState<Client>({
      nombres: "",
      correo: "",
      telefono: "",
      fecha: "",
      hora: "00:00",
    });

    useEffect(() => {
      const now = new Date();

      // Formatear fecha de hoy como YYYY-MM-DD
      const yyyy = now.getFullYear();
      const mm   = String(now.getMonth() + 1).padStart(2, "0");
      const dd   = String(now.getDate()).padStart(2, "0");
      const formattedToday = `${yyyy}-${mm}-${dd}`;
    
      setHoy(formattedToday);
    
      // Si el usuario ha elegido hoy, bloqueamos horas pasadas
      if (formData.fecha === formattedToday) {
        const hh = String(now.getHours()).padStart(2, "0");
        const mi = String(now.getMinutes()).padStart(2, "0");
        setMinHora(`${hh}:${mi}`);
      } else {
        // Si es otro día, permitimos cualquier hora
        setMinHora("00:00");
      }
    }, [formData.fecha]);
    


  


  const fechaInputRef = useRef<HTMLInputElement>(null);
  const horarioInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const {name, value} = e.target

    if(name === "telefono"){
        const onlyNumbers = value.replace(/\D/g, "");
        setFormData({ ...formData, telefono: onlyNumbers });
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    await AddClients(formData);

    setFormData({
      nombres: "",
      correo: "",
      telefono: "",
      fecha: "",
      hora: "",
    });

    setLoading(false)
    toast.success("¡Reserva enviada con éxito!", {
        position: "bottom-right",
        transition: Bounce,
    });
  };

  return (
    <section id="formulario" className="container mx-auto px-4 max-w-[1200px] pb-10 md:pb-24 lg:pb-48"
    data-aos="fade-up"
    data-aos-duration="800"  
    >
      <div className="flex flex-col md:gap-8 lg:flex-row lg:gap-10 justify-between items-center"
      >
        <div
          className="text-center lg:text-left mb-8 md:mb-0 max-w-[600px]"

        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-in-cyan-text mb-4">
            Da el primer paso hacia tu bienestar
          </h2>
          <p>
            Agenda tu evaluación inicial con nuestros especialistas en Quito y
            recibe una atención personalizada desde el primer día.
          </p>
        </div>
        <div 
          className="md:flex-1/2 bg-white rounded-xl p-6 flex flex-col gap-4 max-w-[550px] lg:max-w-[600px] shadow-[0_0_1000px_60px_rgba(214,245,241,1)]"
        >
          <form
            onSubmit={handleSubmit}
            className="ml-auto w-full flex flex-col gap-4"
          >
            <input
              className="outline-none border border-in-blue py-3 px-3 rounded-xl placeholder:text-in-blue/40 text-in-blue"
              type="text"
              name="nombres"
              id="nombres"
              value={formData.nombres}
              placeholder="Nombres y Apellidos"
              onChange={handleChange}
              required
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="outline-none border border-in-blue py-3 px-3 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue"
                type="email"
                name="correo"
                value={formData.correo}
                placeholder="Correo Electrónico"
                onChange={handleChange}
                required
              />
              <input
                className="outline-none border border-in-blue py-3 px-3 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue"
                type="tel"
                name="telefono"
                inputMode="numeric"          // teclado numérico en móviles
                pattern="[0-9]*"  
                maxLength={10}
                value={formData.telefono}
                placeholder="Teléfono"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full relative">
                <input
                  ref={fechaInputRef}
                  className="appearance-none
                                contact-date w-full outline-none border border-in-blue py-3 px-3 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue"
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  placeholder="Fecha"
                  onChange={handleChange}
                  min={hoy}
                  required
                />
                <img
                  width={10}
                  height={10}
                  onClick={() => fechaInputRef.current?.showPicker()}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer w-6 h-6"
                  src="vector/calendar.svg"
                  alt="icono fecha"
                />
              </div>
              <div className="w-full relative">
                <input
                  ref={horarioInputRef}
                  className="appearance-none
 contact-watch outline-none w-full border border-in-blue py-3 px-2 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue"
                  type="time"
                  value={formData.hora}
                  name="hora"
                  min={minHora}
                  placeholder="Horario" 
                  onChange={handleChange}
                  required
                />
                <img
                  width={10}
                  height={10}
                  onClick={() => horarioInputRef.current?.showPicker()}
                  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer w-6 h-6"
                  src="vector/watch.svg"
                  alt="icono fecha"
                />
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-in-orange text-center text-white font-medium py-3 rounded-2xl"
            >
              {
                loading? (
                  <SyncLoader
                  size={6}
                  color="#FFF"
                /> 
                ) : "¡Reserva tu cita ahora!"
              }
              
            </button>
            <p className="leading-5 text-in-blue text-sm">
              Al llenar el formulario, Ud. acepta los <a className="underline font-semibold" href="pdf/politica-de-tratamiento-de-datos-personales.pdf" target="_blank"> Términos y Condiciones /
              Política de Privacidad</a> 
            </p>

          </form>
        </div>
      </div>
    </section>
  );  
};
