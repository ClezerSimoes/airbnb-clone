import { fetchData } from "@/utils/Api";
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";
import Rodape from "@/widgets/Rodape";


export default async function Home() {

  const dados = await fetchData()

  return (
    <>
      <header> {/* Cabeçalho */}
        <BarraSuperior />
        <BarraPesquisa />
      </header> {/* Cabeçalho */}

      <hr className="mt-5"/>

      <main className="mt-10">
        <NavegacaoAbasHorizontal icons={dados.icons}/>
        <Acomodacoes accommodation={dados.accommodation} />
      </main> {/* Conteúdo */}

      <footer className="bg-gray-100">
        <Rodape />
      </footer>{/* Rodapé */}
    </>
  );
}
