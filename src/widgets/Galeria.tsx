import Image from "next/image"

type Foto = {
    id: string,
    source: string,
    description: string
}

interface GaleriaProps {
    fotos: Foto[],
}

const Galeria = ({ fotos }: GaleriaProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
            {fotos.slice(0, 9).map((foto, indice) => {

                const primeiraFoto = indice == 0 ? 'col-span-2 row-span-2' : ''

                return (
                    <Image key={indice} className={`w-full aspect-square object-cover rounded-xl ${primeiraFoto}`}
                        src={foto.source}
                        alt={foto.description}
                        width={1280}
                        height={720}
                    >
                    </Image>
                )
            })}
        </div>
    )
}

export default Galeria