import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";


export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <header> {/* Cabeçalho */}
          <BarraSuperior />
          <BarraPesquisa />
        </header> {/* Cabeçalho */}

        <main className="mt-10">
          <NavegacaoAbasHorizontal />
          <Acomodacoes />
        </main> {/* Conteúdo */}

        <footer>Área Rodapé</footer>{/* Rodapé */}
      </div>
    </>
  );
}
 