import Acomodacao from "@/components/Acomodacao"
import { Accommodation } from "@/types/AirbnbDados"
import Image from "next/image"
import Link from "next/link"

interface AcomodacoesProps {
    accommodation: Accommodation[]
}

const Acomodacoes = (props: AcomodacoesProps) => {

    const listaAcomodacoes = props.accommodation

    return (
        <section className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {listaAcomodacoes.map((acomodacao, indice) => (
                <div key={indice} className="hover:border-1 border-gray-200 rounded-xl">
                    <Link href={acomodacao.slug}>
                        <Acomodacao
                            local={acomodacao.location.description}
                            anfitriao={acomodacao.host}
                            data={acomodacao.date}
                            preco={acomodacao.price}
                            avaliacao={acomodacao.rating}
                            preferido={acomodacao.hasBadge}
                        >
                            <Image className="w-full aspect-square object-cover rounded-xl"
                                src={acomodacao.photos[0].source}
                                alt={acomodacao.photos[0].description}
                                width={300}
                                height={300}
                            >
                            </Image>
                        </Acomodacao>
                    </Link>
                </div>

            ))}
        </section>
    )
}

export default Acomodacoes