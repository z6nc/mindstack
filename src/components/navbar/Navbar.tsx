import Link from "next/link"
import { ItemNavbar } from "../ui/ItemNavbar/itemNavbar"
import { ListaItemNavbar } from "@/data/itemNavbar"
export function Navbar() {
    return (
        <nav className="flex flex-col md:flex-row gap-5  items-center justify-between max-h-max p-9 ">
            <Link href="/" className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">M</span>
                </div>
                <span className="font-bold text-black text-2xl md:text-xl">MindStack</span>
            </Link>
            <div className="flex items-center space-x-8">
                {ListaItemNavbar.map((item) => (
                    <ItemNavbar key={item.titulo} {...item} />
                ))}
            </div>
            
            

        </nav>
    )
}