import Link from "next/link"
import Logo from "@/components/Logo"
import BotaoIcone from "@/components/BotaoIcone"
import { IconUserCircle } from "@tabler/icons-react"



export default function BarraSuperior() {
    return (
        <>
            <div className="container py-6 mx-auto flex justify-between items-center">
                <Logo />

                <div className="flex gap-5">
                    <Link className="font-semibold" href={"/"}>Acomodações</Link>
                    <Link className="opacity-70" href={"/"}>Experiências</Link>
                </div>

                <BotaoIcone
                    icone={
                        <IconUserCircle
                            aria-label="Ícone de usuário"
                            size={20}
                        />
                    }>
                    Entrar
                </BotaoIcone>
            </div>
        </>
    )
}