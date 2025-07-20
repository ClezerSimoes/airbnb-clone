import {
  IconPhoto,
  IconToolsKitchen2,
  IconDesk,
  IconPool,
  IconBrandCarbon,
  IconSailboat,
  IconWifi,
  IconParking,
  IconAlarmSmoke,
  IconDog,
} from "@/assets/icones"
import { Accommodation } from "@/types/AirbnbDados"

interface AcomodacoesDetalhesProps {
  accommodation: Accommodation
}

const AcomodacoesDetalhes = (props: AcomodacoesDetalhesProps) => {

  const acomodacao = props.accommodation

  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">{acomodacao.location.description}</h2>

      <ul className="flex flex-row gap-2">
        <li>10 Hóspedes</li>
        <li>5 Quartos</li>
        <li>5 Camas</li>
        <li>6 Banheiros</li>
      </ul>

      <h2 className="text-xl font-semibold py-5">O que o local oferece</h2>

      <ul className="py-5 grid grid-cols-2 items-center gap-y-6">
        <li className="flex flex-row gap-1.5">
          <IconPhoto/>
          <span>Vista para as Montanhas</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconToolsKitchen2/>
          <span>Cozinha</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconDesk/>
          <span>Espaço de trabalho exclusivo</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconPool/>
          <span>Piscina privativa</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconBrandCarbon/>
          <span>Alerme de segurança gás</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconSailboat/>
          <span>Vista para as águas</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconWifi/>
          <span>Wi-Fi</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconParking/>
          <span>Estacionamento incluído</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconAlarmSmoke/>
          <span>Detector de fumaça</span>
        </li>
        <li className="flex flex-row gap-1.5">
          <IconDog/>
          <span>Permitido animais</span>
        </li>
      </ul>
    </div>
  )
}

export default AcomodacoesDetalhes