"use client"

import { useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import { SquareArrowOutUpRight, Github } from "lucide-react"

type Projeto = {
    titulo: string;
    descricao: string;
    verSite?: string;
    codigo: string;
    imagem: string;
    tecnologias: string[];
    site: string;
    codigoLink: string;
}

type Props = {
    projeto: Projeto;
    index: number;
    isVisible: boolean;
    categoria: "front" | "back" | "full" | "aplicativo";
    verMais: string;
    verMenos: string;
    expandido: boolean;
    onToggle: () => void;
}

function CardProjeto({ projeto, index, isVisible, categoria, verMais, verMenos, expandido, onToggle }: Props) {
    const [temMais, setTemMais] = useState(false)
    const textoRef = useRef<HTMLParagraphElement | null>(null)

    useLayoutEffect(() => {
        const el = textoRef.current
        if (el && !expandido) {
            setTemMais(el.scrollHeight > el.clientHeight)
        }
    }, [projeto.descricao, expandido])

    return (
        <div
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
            className={`group border border-gray-300/20 rounded-2xl w-full bg-[#0d0d0d]
          flex flex-col transition-all duration-300 ease-out
          ${expandido
                    ? "absolute inset-x-0 top-0 z-50 shadow-2xl"
                    : "relative h-full"
                }
          ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
        >

            {/* IMAGEM */}
            <div className="h-52 flex-shrink-0 overflow-hidden rounded-t-2xl">

                <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    width={300}
                    height={100}
                    className="w-full h-full object-cover object-top transition-transform duration-2000 ease-out group-hover:scale-110"
                />

            </div>


            {/* CONTEÚDO */}
            <div className="p-5 flex flex-col flex-1">

                {/* TÍTULO */}
                <h1 className="text-2xl text-white">
                    {projeto.titulo}
                </h1>


                {/* DESCRIÇÃO */}
                <p
                    ref={textoRef}
                    className={`py-3 text-[#a1a1a1] ${expandido ? "" : "line-clamp-3"}`}
                >
                    {projeto.descricao}
                </p>

                {/* VER MAIS / VER MENOS */}
                {temMais && (
                    <button
                        onClick={onToggle}
                        className="self-end text-xs font-bold text-[#a1a1a1] hover:text-white cursor-pointer transition-colors mb-5 mt-2 mb-1 pr-5"
                    >
                        {expandido ? verMenos : `${verMais}...`}
                    </button>
                )}


                {/* TECNOLOGIAS */}
                <div className="flex gap-3 flex-wrap">

                    {projeto.tecnologias.map((tech, i) => (

                        <p
                            key={i}
                            className="rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold"
                        >
                            {tech}
                        </p>

                    ))}

                </div>


                {/* BOTÕES */}
                <div className="flex gap-10 justify-center mt-auto lg:mt-5">

                    {categoria !== "aplicativo" &&
                        categoria !== "back" &&
                        categoria !== "full" && (

                            <a
                                href={projeto.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 items-center text-white lg:text-sm"
                            >
                                {projeto.verSite}

                                <SquareArrowOutUpRight size={15} />
                            </a>

                        )}


                    <a
                        href={projeto.codigoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-white lg:text-sm"
                    >
                        {projeto.codigo}

                        <Github size={15} />
                    </a>

                </div>

            </div>

        </div>
    )
}

export default CardProjeto