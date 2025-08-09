import Link from "next/link"
import { ShinyButton } from "@/components/magicui/shiny-button";
export const ButtonCustom = ({ href  , texto } :{ href: string; texto: string; }) => {
    return (
        <Link href={href}>
            <ShinyButton className=" border-none bg-[#00d1ff]  ">{texto}</ShinyButton>
        </Link>
    )
}