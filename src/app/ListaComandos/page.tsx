import { CategoriaComando } from "@/types/listaComandos.types";
export default function Custom404() {
    return (
        <main className="max-w-6xl mx-auto  min-h-screen text-center flex flex-col  items-center py-9 md:py-6 ">
            <article className="flex flex-wrap w-full  gap-4 justify-center items-center">
                {
                    Object.values(CategoriaComando).map((categoria) => (
                        <button key={categoria} className="py-2 border border-black p-2 rounded-lg">
                            <span className="text-sm ">{categoria}</span>
                        </button>
                    ))
                }
            </article>

        </main>
    );
}
