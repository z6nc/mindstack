export enum CategoriaComando {
  INSTALACION = "Instalación",
  UI_ESTILOS = "UI y Estilos",
  ANIMACIONES = "Animaciones",
  ESTADO_DATOS = "Estado y Gestión de Datos",
  UTILIDADES = "Utilidades y Helpers",
  TESTING_HERRAMIENTAS = "Testing y Herramientas de Desarrollo",
}

export interface PropsListaComandos {
  NombreComando: string;
  descripcion: string;
  tamaño: string;
  categoria: CategoriaComando;
  documentacion : string;
  codigo: {
    npm: string;
    pnpm?: string;
    bun?: string;
    yarn?: string;
  };
}