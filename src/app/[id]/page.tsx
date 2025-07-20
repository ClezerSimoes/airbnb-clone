import { fetchDataById } from "@/utils/Api";
import Acomodacoes from "@/widgets/Acomodacoes";
import AcomodacoesDepoimentos from "@/widgets/AcomodacoesDepoimentos";
import AcomodacoesDetalhes from "@/widgets/AcomodacoesDetalhes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Galeria from "@/widgets/Galeria";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";
import { notFound } from "next/navigation";

interface PageProps {
    id: string,
}

export default async function Page( {params} :
    {params: Promise<PageProps>}
) {
    const {id} = await params
    const acomodacao = await fetchDataById(id)

    if (!acomodacao){
        notFound()
    }

    return (
        <>
            <header> {/* Cabeçalho */}
                <BarraSuperior />
                <BarraPesquisa />
            </header> {/* Cabeçalho */}

            <hr className="mt-5" />

            <main className="container mx-auto mt-5">{/* Conteúdo */}
                <h1 className="text-3xl font-semibold">{acomodacao.title}</h1>
                <Galeria fotos={acomodacao.photos}/>
                <div className=" flex flex-col md:flex-row">
                    <AcomodacoesDetalhes accommodation={acomodacao} />
                    <AcomodacoesDepoimentos testimonials={acomodacao.testimonials}/>
                </div>
            </main> {/* Conteúdo */}

            <footer className="bg-gray-100">{/* Rodapé */}
                <Rodape />
            </footer>{/* Rodapé */}
        </>
    )

}