export const Titulo = ({textoPrimero  ,textoImportante , textoSegundo} :{textoPrimero:string ,textoImportante:string , textoSegundo?:string}) => {
    return (
        <h1 className="lg:w-[800px] flex flex-col items-center gap-y-1 font-black text-4xl md:text-5xl  text-wrap  uppercase">{textoPrimero}
            <span className="bg-[#00d1ff] p-2 text-gray-100 -skew-3 border border-black">{textoImportante}</span>
            {textoSegundo} </h1>
    )
}
