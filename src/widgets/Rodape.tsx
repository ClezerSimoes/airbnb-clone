import Link from "next/link"

const Rodape = () => {
  return (
    <div className="container mx-auto py-5" >
      <span>&copy; Airbnb INC</span>
      <ul className="flex flex-row gap-2">
        <li><Link href="/" className="hover:text-red-500">Privacidade</Link></li>
        <li>|</li>
        <li><Link href="/" className="hover:text-red-500">Termos</Link></li>
        <li>|</li>
        <li><Link href="/" className="hover:text-red-500">Mapa do site</Link></li>
        <li>|</li>
        <li><Link href="/" className="hover:text-red-500">Informações da Empresa</Link></li>
      </ul>
    </div>
  )
}

export default Rodape