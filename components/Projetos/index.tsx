"use client"

import { useState, useEffect, useRef } from "react"
import GradientText from '../GradientText'
import Image from "next/image"
import { SquareArrowOutUpRight, Github } from 'lucide-react';

type Props = {
    titulo: string;
    subtitulo: string;
    categoriaAplicativo: string;
    projetosFront: {
        titulo: string;
        descricao: string;
        verSite: string;
        codigo: string;
        imagem: string;
        tecnologias: string[];
        site: string;
        codigoLink: string;
    }[];
    verMaisGitHub: string;
    projetosBack: {
        titulo: string;
        descricao: string;
        verSite: string;
        codigo: string;
        imagem: string;
        tecnologias: string[];
        site: string;
        codigoLink: string;
    }[];
    projetosAplicativo: {
        titulo: string;
        descricao: string;
        verSite: string;
        codigo: string;
        imagem: string;
        tecnologias: string[];
        site: string;
        codigoLink: string;
    }[];
}

function Projetos({ titulo, subtitulo, categoriaAplicativo, projetosFront, verMaisGitHub, projetosBack, projetosAplicativo }: Props) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [categoria, setCategoria] = useState<"front" | "back" | "full" | "aplicativo">("front")

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const projetosFiltrados =
        categoria === "front"
            ? projetosFront
            : categoria === "back"
                ? projetosBack
                : categoria === "aplicativo"
                    ? projetosAplicativo
                    : []

    return (
        <section
            ref={sectionRef}
            className='h-auto mt-5 mb-5 overflow-hidden'
            id='projetos'
        >
            <h1
                className={`text-center text-5xl leading-tight transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                `}
            >
                <GradientText
                    colors={["#160070", "#d1d1d1"]}
                    animationSpeed={4}
                    showBorder={false}
                >
                    {titulo}
                </GradientText>
            </h1>
            <p
                className={`m-auto text-center text-[#a1a1a1] text-xl w-[60%] transition-all duration-700 ease-out delay-150
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}>
                {subtitulo}
            </p>

            <div className={`
                flex flex-row
                justify-center
                flex-wrap
                gap-4
                mt-10
                px-4
                transition-all duration-700 ease-out
                ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }
            `}>

                <button
                    onClick={() => setCategoria("front")}
                    className={`border px-3 rounded-xl text-sm font-bold cursor-pointer ${categoria === "front" ? "bg-white text-black" : "border-gray-300/20"}`}
                >
                    Front End
                </button>

                <button
                    onClick={() => setCategoria("back")}
                    className={`border p-3 rounded-xl text-sm font-bold cursor-pointer ${categoria === "back" ? "bg-white text-black" : "border-gray-300/20"}`}
                >
                    Back End
                </button>

                <button
                    onClick={() => setCategoria("full")}
                    className={`border p-3 rounded-xl text-sm font-bold cursor-pointer ${categoria === "full" ? "bg-white text-black" : "border-gray-300/20"}`}
                >
                    Full Stack
                </button>

                <button
                    onClick={() => setCategoria("aplicativo")}
                    className={`border p-3 rounded-xl text-sm font-bold cursor-pointer ${categoria === "aplicativo" ? "bg-white text-black" : "border-gray-300/20"}`}
                >
                    {categoriaAplicativo}
                </button>

            </div>

            <div className='flex flex-col items-center gap-8 my-15 lg:flex-row lg:flex-wrap lg:justify-center'>

                {projetosFiltrados.map((projeto, index) => (
                    <div
                        key={index}
                        style={{ transitionDelay: `${index * 150}ms` }}
                        className={`group border border-gray-300/20 h-[445px] flex flex-col rounded-2xl w-full sm:w-[80%] lg:w-[35%] bg-[#0d0d0d]
                                    transition-all duration-300 ease-out
                                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>

                        <div className='h-52 flex-shrink-0 overflow-hidden rounded-t-2xl'>
                            <Image
                                src={projeto.imagem}
                                alt={projeto.titulo}
                                width={300}
                                height={100}
                                className='w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110'
                            />
                        </div>

                        <div className='p-5'>
                            <h1 className='text-2xl text-white'>{projeto.titulo}</h1>

                            <p className='py-3 text-[#a1a1a1]'>
                                {projeto.descricao}
                            </p>

                            <div className='flex gap-3 flex-wrap'>
                                {projeto.tecnologias.map((tech, i) => (
                                    <p
                                        key={i}
                                        className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'
                                    >
                                        {tech}
                                    </p>
                                ))}
                            </div>

                            <div className='flex gap-10 justify-center mt-3'>

                                {categoria !== "aplicativo" && categoria !== "back" &&(
                                    <a
                                        href={projeto.site}
                                        target="_blank"
                                        className='flex gap-2 items-center text-white'
                                    >
                                        {projeto.verSite} <SquareArrowOutUpRight size={15} />
                                    </a>
                                )}

                                <a
                                    href={projeto.codigoLink}
                                    target="_blank"
                                    className='flex gap-2 items-center text-white'
                                >
                                    {projeto.codigo} <Github size={15} />
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
                <div
                    className={`w-full flex justify-center 
                                transition-all duration-1500 ease-out delay-500
                                ${isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-20"
                        }
  `}
                >
                    <a
                        href='https://github.com/DeangellesES'
                        target="_blank"
                        className='text-xl flex items-center gap-3 hover:text-[#acacac] transition'
                    >
                        {verMaisGitHub}
                        <SquareArrowOutUpRight size={15} />
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Projetos