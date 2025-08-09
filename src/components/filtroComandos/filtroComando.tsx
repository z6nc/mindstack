import { ListaComandos } from "@/data/listaComandos";
import { InformacionComando } from "../ui/Comando/infoComando";
import { Search } from "lucide-react";
// import { Suspense } from "react";
export function FiltroComando({ inputTexto, filtroCategoria }: { inputTexto: string, filtroCategoria: string }) {
    // obtener el input del cliente  
    // filtrado del cliente 
    const ResultadosComandos = ListaComandos.filter((comando) =>
        comando.NombreComando.toLowerCase().includes(inputTexto)
    );
    const ResultadosCategoria = ListaComandos.filter((comando) => comando.categoria === filtroCategoria)



    return (
        <section className="flex flex-col gap-y-9 py-4 ">
            {/* <Suspense fallback={<div className="text-black text-2xl">Loading...</div>}> */}
            {
                inputTexto ? (
                    ResultadosComandos.map((comando) => (
                        <InformacionComando key={comando.NombreComando} comando={comando} />
                    ))
                ) : filtroCategoria ? (
                    ResultadosCategoria.map((comando) => (
                        <InformacionComando key={comando.NombreComando} comando={comando} />
                    ))
                ) : (
                    <Search className="size-40 text-gray-100" />
                )
            }

            {/* </Suspense> */}
        </section>
    )
}