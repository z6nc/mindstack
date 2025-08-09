import {  Code ,House} from "lucide-react";
interface PropsNavItem {
  titulo: string;
  url: string;
  icono: React.ReactNode;
}

export const ListaItemNavbar: PropsNavItem[] = [
  {
    titulo: "Home",
    url: "/",
    icono :<House className="w-5 h-5 md:w-6 md:h-6" />
  },
    {
    titulo: "Comandos",
    url: "/ListaComandos",
    icono :<Code className="w-5 h-5 md:w-6 md:h-6"/>
  },
 
];
