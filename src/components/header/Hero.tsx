import { Titulo } from "../ui/titulo/titulo"
export const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-2 mx-2">
            
             <Titulo textoPrimero="Instala todo lo que" textoImportante="REACT" textoSegundo="necesita" />
            <p className="lg:w-[700px] text-gray-500 text-base md:text-lg p-4">  Encuentra comandos de instalación para tus recursos en React como librerías  con descripción, peso y compatibilidad con npm, yarn, pnpm y bun.</p>
        </div>
    )
}