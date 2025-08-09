
export const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-2 mx-2">
                <h1 className="lg:w-[800px] flex flex-col items-center gap-y-1 font-black text-4xl md:text-5xl  text-wrap  uppercase">Instala todo lo que 
                    <span className="bg-[#00d1ff] p-2 text-gray-100 -skew-3 border border-black">REACT</span> 
                    necesita </h1>

            <p className="lg:w-[700px] text-gray-500 text-base md:text-lg p-4">  Encuentra comandos de instalación para tus recursos en React como librerías  con descripción, peso y compatibilidad con npm, yarn, pnpm y bun.</p>
        </div>
    )
}