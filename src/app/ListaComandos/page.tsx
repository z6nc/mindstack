import { FiltroCategoria } from "@/components/ui/listacategoria/listaCategoria";
import { BuscadorComandos } from "@/components/ui/search/search";
import { FiltroComando } from "@/components/filtroComandos/filtroComando";
import { Titulo } from "@/components/ui/titulo/titulo";
export default async function ListaComandos({
    searchParams,
}: {
    searchParams: Promise<{ query?: string , category?:string}>
}) {
    const params = await searchParams;
    const busquedaUsuario = params.query ;
    const busquedacategoria = params.category ;


    return (
        <main className="max-w-6xl mx-auto min-h-screen text-center flex flex-col items-center py-9 md:py-6">
            <header className="flex flex-col  justify-center items-center gap-y-9">
                <Titulo textoPrimero="Function  " textoImportante="search" textoSegundo="" />
                <BuscadorComandos />
                <FiltroCategoria />
            </header>
                <FiltroComando inputTexto={busquedaUsuario as string} filtroCategoria={busquedacategoria as string} />
        </main>
    );
}

