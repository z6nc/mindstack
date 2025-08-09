'use client'
import * as React from "react"
import { CategoriaComando } from "@/types/listaComandos.types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function FiltroCategoria() {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const buscadorCategoria = (categoria: string) => {
    const params = new URLSearchParams(searchParams)
    if (categoria) {
      params.set('category', categoria)
      params.delete('query')
    } else {
      params.delete('category')
    }
    replace(`${pathname}?${params.toString()}`)
    console.log(categoria)
  }


  return (
    <Select onValueChange={(value) => buscadorCategoria(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categorias</SelectLabel>
          {Object.values(CategoriaComando).map((categoria) => (
            <SelectItem key={categoria} value={categoria} >
              {categoria}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
