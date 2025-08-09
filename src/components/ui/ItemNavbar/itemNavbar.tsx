'use client'

import Link from "next/link"
interface PropsNavItem {
    titulo: string;
    url: string;
    icono: React.ReactNode;
}
import { usePathname } from "next/navigation";
export const ItemNavbar = ({ url, icono }: PropsNavItem) => {
    const pathname = usePathname();
    const isActive = pathname === url;

    return (

        <Link
            href={url}
            className={`flex items-center space-x-2 text-black border border-gray-200 p-2 rounded-lg ${isActive ? "bg-react text-white" : ""}`}
        >
            {icono}
        </Link>


    )
}