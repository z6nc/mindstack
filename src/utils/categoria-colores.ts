import { CategoriaComando } from "@/types/listaComandos.types";

export const CategoriaColores: Record<CategoriaComando, string> = {
  [CategoriaComando.INSTALACION]: "bg-blue-500/70 text-white border border-blue-500",
  [CategoriaComando.UI_ESTILOS]: "bg-purple-500/70 text-white border border-purple-500",
  [CategoriaComando.ANIMACIONES]: "bg-green-500/70 text-white border border-green-500",
  [CategoriaComando.ESTADO_DATOS]: "bg-teal-500/70 text-white border border-teal-500",
  [CategoriaComando.UTILIDADES]: "bg-yellow-500/70 text-white border border-yellow-500",
  [CategoriaComando.TESTING_HERRAMIENTAS]: "bg-red-500/70 text-white border border-red-500",
};
