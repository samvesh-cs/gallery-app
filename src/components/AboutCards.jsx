import { Search } from "lucide-react"

export default function AboutCards({id,title,description,icon}){
    const Icon = icon;
    return(
        <div key={id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 text-left min-h-55 ">
        <Icon size={30} className="text-amber-400"/>
        <h2 className="text-2xl font-semibold mt-5">{title}</h2>
        <p className="w-[80%] leading-relaxed mt-3 text-gray-400">{description}</p>
        </div>
    )
}