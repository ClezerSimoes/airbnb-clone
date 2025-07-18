import React from "react"

interface BotaoIconeProps {
    icone: React.ReactNode
    children: React.ReactNode
}

export default function BotaoIcone(props: BotaoIconeProps) {
    return (
        <> 
            <button className="rounded-xl border-2 flex items-center px-4 py-2 border-gray-400 hover:border-gray-600 cursor-pointer">
                <span>{props.icone}</span>
                <span>{props.children}</span>
                
            </button>
        </>
    )
}