import { TerminalComando } from "@/components/ui/terminal/terminalbtn";
import { Hero } from "@/components/header/Hero";
import { ListaComandos } from "@/data/listaComandos";
import { ButtonCustom } from "@/components/ui/button/ButtonCustom";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto  min-h-screen text-center flex flex-col justify-center items-center py-9 md:py-6 ">
      <Hero />
      <section className="flex flex-col gap-y-9 py-4 ">
        {ListaComandos.slice(0, 2).map((comando) => (
          <Suspense key={comando.NombreComando} fallback={<div>Loading...</div>}>
            <TerminalComando comando={comando} />
          </Suspense>
        ))}
      </section>
      <ButtonCustom href="/" texto="Ver todos los comandos"/>
    </main>
  );
}
