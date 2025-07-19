import { IconHeartFilled, IconStarFilled } from "@/assets/icones"

interface AcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    periodo: string
    avaliacao: number
    preferido:boolean
}

const Acomodacao = (props: AcomodacaoProps) => {
    return (
        <figure className="relative">
            <div className="absolute w-full flex flex-row justify-between items-center p-4">
                <span className="bg-white rounded-full p-2 font-semibold ">Preferido dos hóspedes</span>

                <IconHeartFilled className="stroke-white opacity-80"
                    aria-label="Favoritos"
                    size={30}
                />
            </div>

            {props.children}

            <figcaption className="pt-2">
                <div className="flex flex-row justify-between">
                    <span className="font-semibold">{props.local}</span>

                    <span className="flex flex-row font-semibold">
                        4.3
                        <IconStarFilled
                            aria-label="Favoritos"
                            size={20}
                        />
                    </span>
                </div>

                <div>
                    {`Anfitriã(o):  `}{props.anfitriao}
                </div>

                <div>
                    {props.data}
                </div>

                <div className="font-semibold">
                    {`R$ `}{props.preco} 
                </div>

            </figcaption>
        </figure>
    )
}

export default Acomodacao