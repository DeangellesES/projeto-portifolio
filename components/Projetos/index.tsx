"use client"

import { useState, useEffect, useRef } from "react"
//titulo em gradient
import GradientText from '../GradientText'
//image em nextjs
import Image from "next/image"
//icones lucide
import { SquareArrowOutUpRight, Github } from 'lucide-react';

// tradução
type Props = {
    titulo: string;
    subtitulo: string;
    categoriaAplicativo: string;
    projetosFront: {
        titulo: string;
        descricao: string;
        verSite?: string;
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
        verSite?: string;
        codigo: string;
        imagem: string;
        tecnologias: string[];
        site: string;
        codigoLink: string;
    }[];
    projetosFull: {
        titulo: string;
        descricao: string;
        verSite?: string;
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

function Projetos({ titulo, subtitulo, categoriaAplicativo, projetosFront, verMaisGitHub, projetosBack, projetosFull, projetosAplicativo  }: Props) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [categoria, setCategoria] = useState<"front" | "back" | "full" | "aplicativo">("front")

    // aparecer e sumir na tela
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

    // projetos nas categorias
    const projetosPorCategoria = {
        front: projetosFront,
        back: projetosBack,
        full: projetosFull,
        aplicativo: projetosAplicativo
    }

    const projetosFiltrados = projetosPorCategoria[categoria] ?? []


    // inicio return projetos          
    return (
        <section
            ref={sectionRef}
            className='h-auto mt-25 mb-5 overflow-hidden'
            id='projetos'
        >
            <h1
                className={`text-center text-5xl leading-tight transition-all duration-2000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
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
                className={`m-auto text-center text-[#a1a1a1] text-xl w-[60%] transition-all duration-2000 ease-out delay-150
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
                {subtitulo}
            </p>

            <div className={`flex flex-row justify-center flex-wrap gap-4 mt-10 px-4
                             transition-all duration-2000 ease-out
                          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >

                {/* botoes categoria projeto */}
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
                        className={`group border border-gray-300/20 h-[530px] flex flex-col rounded-2xl w-full sm:w-[80%] lg:w-[35%] bg-[#0d0d0d]
                                    transition-all duration-300 ease-out
                                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>

                        <div className='h-52 flex-shrink-0 overflow-hidden rounded-t-2xl'>
                            <Image
                                src={projeto.imagem}
                                alt={projeto.titulo}
                                width={300}
                                height={100}
                                className='w-full h-full object-cover object-top transition-transform duration-2000 ease-out group-hover:scale-110'
                            />
                        </div>

                        <div className='p-5 flex flex-col flex-1'>
                            {/* Titulo projeto */}
                            <h1 className='text-2xl text-white'>{projeto.titulo}</h1>

                            {/* descricao projeto */}
                            <p className='py-3 text-[#a1a1a1]'>
                                {projeto.descricao}
                            </p>

                            {/* tecnologias utilizadas */}
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

                            {/* botoes ver site e ver codigo */}
                            <div className='flex gap-10 justify-center mt-auto'>

                                {categoria !== "aplicativo" && categoria !== "back" && categoria !== "full" && (
                                    <a
                                        href={projeto.site}
                                        target="_blank"
                                        className='flex gap-2 items-center text-white lg:text-sm'
                                    >
                                        {projeto.verSite} <SquareArrowOutUpRight size={15} />
                                    </a>
                                )}

                                <a
                                    href={projeto.codigoLink}
                                    target="_blank"
                                    className='flex gap-2 items-center text-white lg:text-sm'
                                >
                                    {projeto.codigo} <Github size={15} />
                                </a>

                            </div>
                        </div>
                    </div>
                ))}

                {/* ver projetos no GitHub */}
                <div
                    className={`w-full flex justify-center transition-all duration-2000 ease-out delay-500
                                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
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