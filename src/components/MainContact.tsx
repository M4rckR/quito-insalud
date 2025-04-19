import { useState } from "react";

export const MainContact = () => {

    const [formData, setFormData] = useState({
        nombres: "",
        correo: "",
        telefono: "",
        fecha: "",
        horario: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({
          nombres: "",
            correo: "",
            telefono: "",
            fecha: "",
            horario: "",
            });
        // Aquí conectas con NoCodeAPI
        console.log(formData);
      };

  return (
    <section className="container mx-auto px-4 max-w-[1400px] py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:gap-10 justify-between items-center">
            <div className="text-center lg:text-left mb-8 md:mb-0 max-w-[600px]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-in-cyan-text mb-4">
                Da el primer paso hacia tu bienestar
                </h2>
                <p>Agenda tu evaluación inicial con nuestros especialistas en Quito y recibe una atención personalizada desde el primer día.</p>
            </div>
            <div className="md:flex-1/2 bg-white rounded-xl p-6 flex flex-col gap-4 lg:max-w-[600px] shadow-[0_0_1000px_60px_rgba(214,245,241,1)]">
                <form onSubmit={handleSubmit} className="ml-auto w-full flex flex-col gap-4">
                    <input 
                        className="outline-none border border-in-blue py-3 px-2 rounded-xl placeholder:text-in-blue/40 text-in-blue" 
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
                            className="outline-none border border-in-blue py-3 px-2 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue" 
                            type="email" 
                            name="correo"
                            value={formData.correo}
                            placeholder="Correo Electrónico" 
                            onChange={handleChange}
                            required/>
                        <input 
                            className="outline-none border border-in-blue py-3 px-2 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue" 
                            type="tel" 
                            name="telefono"
                            value={formData.telefono}
                            placeholder="Teléfono" 
                            onChange={handleChange}
                            required
                            />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input 
                            className="outline-none border border-in-blue py-3 px-2 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue" 
                            type="date" 
                            name="fecha"
                            value={formData.fecha}
                            placeholder="Fecha" 
                            onChange={handleChange}
                            required
                            />
                        <input 
                            className="outline-none border border-in-blue py-3 px-2 md:flex-1/2 rounded-xl placeholder:text-in-blue/40 text-in-blue" 
                            type="time" 
                            value={formData.horario}
                            name="horario"
                            placeholder="Horario" 
                            onChange={handleChange}
                            required
                            />
                    </div>
                    <button type="submit" className="cursor-pointer bg-in-orange text-center text-white font-medium py-3 rounded-2xl">¡Reserva tu cita ahora!</button>
                    <p className="leading-5 text-in-blue text-sm">Al llenar el formulario, Ud. acepta los Términos y Condiciones / Política de Privacidad</p>
                </form>
            </div>
        </div>
        
    </section>
  )
}
