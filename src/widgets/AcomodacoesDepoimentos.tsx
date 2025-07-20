import { IconStarFilled } from "@/assets/icones"
import { Testimonials } from "@/types/AirbnbDados"
import Image from "next/image"

interface AcomodacoesDepoimentosProps {
  testimonials: Testimonials[]
}

const AcomodacoesDepoimentos = (props: AcomodacoesDepoimentosProps) => {

  const depoimentos = props.testimonials

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">Depoimentos</h2>
      <div className="flex gap-2 items-center">
        <IconStarFilled className="size-4" />
        <span>4,9 (400+ avaliações)</span>
      </div>

      {depoimentos.map((depoimento, indice) => (
        <div key={indice} className="flex flex-row items-center gap-3 py-5">
          <Image className="aspect-square rounded-full"
            src={depoimento.image}
            alt={depoimento.name}
            width={48}
            height={48}
          />
          <div>
            <span className="font-semibold">{depoimento.name}</span>
            <p>{depoimento.comment}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default AcomodacoesDepoimentos