import Acomodacao from "@/widgets/Acomodacao";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widgets/NavegacaoAbasHorizontal";


export default function Home() {
  return (
    <>
      <header> {/* Cabeçalho */}
        <BarraSuperior/>
        <BarraPesquisa/>
      </header> {/* Cabeçalho */}

      <main className="mt-10">
        <NavegacaoAbasHorizontal/>
        <Acomodacao/>
      </main> {/* Conteúdo */}

      <footer>Área Rodapé</footer>{/* Rodapé */}
    </>
  );
}
