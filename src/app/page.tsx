import { InformacionComando } from "@/components/ui/Comando/infoComando";
import { Hero } from "@/components/header/Hero";
import { ListaComandos } from "@/data/listaComandos";
import { ButtonCustom } from "@/components/ui/button/ButtonCustom";
// import { Suspense } from "react";
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto  min-h-screen text-center flex flex-col  items-center py-12  ">
      <Hero />
      <section className="flex flex-col gap-y-9 py-4 ">
        {ListaComandos.slice(0, 1).map((comando) => (
          // <Suspense key={comando.NombreComando} fallback={<div>Loading...</div>}>
            <InformacionComando key={comando.NombreComando} comando={comando} />
          // </Suspense>
        ))}
      </section>
      <ButtonCustom href="/ListaComandos" texto="Ver todos los comandos" />
    </main>
  );
}
