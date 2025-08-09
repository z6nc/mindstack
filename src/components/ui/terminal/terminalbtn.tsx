import type { PropsListaComandos } from "@/types/listaComandos.types";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { CategoriaColores } from "@/utils/categoria-colores";
import { Download } from "lucide-react";
interface PropsTerminalComando {
    comando: PropsListaComandos;
}

export function TerminalComando({ comando }: PropsTerminalComando) {

    return (
        <div className="flex flex-col  gap-y-2 w-[350px] md:w-full  border border-gray-200 rounded-lg p-4 text-wrap  text-left  overflow-x-scroll  md:overflow-hidden ">
            <h3 className="text-lg font-semibold">{comando.NombreComando}</h3>
            <p className="text-sm text-black">{comando.descripcion}</p>
            <span className="text-sm text-gray-500">
                <Download className="inline mr-1 mb-1" size={14} />
                {comando.tamaño}
            </span>
            <span className={`text-xs text-gray-500  mr-auto py-1 px-2 rounded-lg ${CategoriaColores[comando.categoria]}`}>
                {comando.categoria}
            </span>

            <ScriptCopyBtn
                showMultiplePackageOptions={true}
                codeLanguage="shell"
                lightTheme="nord"
                darkTheme="vitesse-dark"
                commandMap={comando.codigo}
            />
        </div>

    );
}
