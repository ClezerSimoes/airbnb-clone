import { IconSearch } from "@tabler/icons-react"

const BarraPesquisa = () => {
  return (
    <div className="
        border
        border-gray-200 
        flex 
        items-center 
        rounded-full 
        px-4 
        py-2 
        w-full 
        max-w-2xl 
        mx-auto
        shadow-lg
        shadow-gray-200
    ">
        <input type="text" placeholder="Digite sua pesquisa" className="w-full focus:outline-none px-2"/>
        <button className="bg-red-500 rounded-full p-2 cursor-pointer">
            <IconSearch 
                aria-label="Pesquisa"
                size={32}
                color="white"
            />
        </button>
    </div>
  )
}

export default BarraPesquisa