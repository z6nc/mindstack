export enum CategoriaComando {
  INSTALACION = "Instalación",
  UI_COMPONENTES = "UI y Componentes",
  ICONOS = "Iconos",
  FUENTES = "Fuentes y Tipografía",
  ANIMACIONES = "Animaciones y Transiciones",
  ESTADO_DATOS = "Estado y Gestión de Datos",
  UTILIDADES = "Utilidades y Helpers",
  ESTILOS = "Estilos y Theming",
  TESTING = "Testing",
  HERRAMIENTAS = "Herramientas de Desarrollo",
}
export interface PropsListaComandos {
  NombreComando: string;
  descripcion: string;
  tamaño: string;
  categoria: CategoriaComando;
  codigo: {
    npm: string;
    pnpm?: string;
    bun?: string;
    yarn?: string;
  };
}