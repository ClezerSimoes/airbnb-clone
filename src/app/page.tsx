import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";


export default function Home() {
  return (
    <>
      <div>
        <BarraSuperior/>
        <BarraPesquisa/>
      </div>
      <div>Área Conteúdo</div>
      <div>Área Rodapé</div>
    </>
  );
}
