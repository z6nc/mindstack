'use client'
import { Search } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export const BuscadorComandos = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const buscadorUser = useDebouncedCallback((inputTexto: string) => {
        const params = new URLSearchParams(searchParams)
        if (inputTexto) {
            params.set('query', inputTexto.toLocaleLowerCase())
            params.delete('category')
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <div className="flex justify-between items-center text-center border border-gray-300 px-4 rounded-lg w-96" >
            <input
                onChange={(event) => buscadorUser(event.target.value)}
                type="text" placeholder="Buscar comando..." className="flex-1  p-2 rounded-lg  outline-none appearance-none border-none " />
            <Search className="size-5 text-gray-400" />
        </div>
    )
}