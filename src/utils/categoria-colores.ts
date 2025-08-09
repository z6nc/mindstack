import { CategoriaComando } from "@/types/listaComandos.types";

export const CategoriaColores: Record<CategoriaComando, string> = {
  [CategoriaComando.INSTALACION]: "bg-blue-100",
  [CategoriaComando.UI_COMPONENTES]: "bg-purple-100",
  [CategoriaComando.ICONOS]: "bg-amber-100",
  [CategoriaComando.FUENTES]: "bg-pink-100",
  [CategoriaComando.ANIMACIONES]: "bg-green-100",
  [CategoriaComando.ESTADO_DATOS]: "bg-teal-100",
  [CategoriaComando.UTILIDADES]: "bg-gray-100",
  [CategoriaComando.ESTILOS]: "bg-indigo-100",
  [CategoriaComando.TESTING]: "bg-red-100",
  [CategoriaComando.HERRAMIENTAS]: "bg-yellow-100",
};
