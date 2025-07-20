'use client'
import { IconAdjustmentsHorizontal } from "@/assets/icones"
import BotaoIcone from "@/components/BotaoIcone"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/types/AirbnbDados"

interface NavegacaoAbasHorizontalProps {
    icons: Icons[]
}

const NavegacaoAbasHorizontal = (props: NavegacaoAbasHorizontalProps) => {

    const icons = props.icons

    return (

        <div className="container mx-auto flex flex-row items-center">

            {/*  */}
            <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    764: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 9 }
                }}
            >
                {icons.map((icon, indice) => (
                    <SwiperSlide key={indice}>
                        <Link href={icon.url} className="flex flex-col items-center hover:text-red-500">
                            <Image
                                src={icon.source}
                                alt={icon.description}
                                width={24}
                                height={24}>
                            </Image>
                            <span className="text-sm">{icon.description}</span>
                        </Link>
                    </SwiperSlide>
                ))}


            </Swiper>

            <BotaoIcone
                icone={
                    <IconAdjustmentsHorizontal
                        aria-label="Ícone de usuário"
                        size={20}
                    />
                }>
                Filtros
            </BotaoIcone>
        </div>
    )
}

export default NavegacaoAbasHorizontal