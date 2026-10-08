"use client"

import { useState, useEffect, useRef } from "react"
//titulo em gradient
import GradientText from '../GradientText'
//icones lucide
import { SquareArrowOutUpRight } from 'lucide-react';
import TiltedCard from "@/components/TiltedCard";
import CardProjeto from "./CardProjeto";

// tradução
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
    titulo: string;
    subtitulo: string;
    categoriaAplicativo: string;
    projetosFront: Projeto[];
    verMaisGitHub: string;
    verMais: string;
    verMenos: string;
    projetosBack: Projeto[];
    projetosFull: Projeto[];
    projetosAplicativo: Projeto[];
}

function Projetos({ titulo, subtitulo, categoriaAplicativo, projetosFront, verMaisGitHub, verMais, verMenos, projetosBack, projetosFull, projetosAplicativo }: Props) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const gridRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [contatoVisivel, setContatoVisivel] = useState(false)
    const [categoria, setCategoria] = useState<"front" | "back" | "full" | "aplicativo">("front")
    const [cardExpandido, setCardExpandido] = useState<number | null>(null)
    const [alturaRecolhida, setAlturaRecolhida] = useState<number | null>(null)

    // recolher o card expandido ao trocar de categoria
    useEffect(() => {
        setCardExpandido(null)
        setAlturaRecolhida(null)
    }, [categoria])

    // expandir apenas o card clicado, fixando a altura dos demais
    function handleToggle(index: number) {
        if (cardExpandido === index) {
            setCardExpandido(null)
            setAlturaRecolhida(null)
        } else {
            const cards = Array.from(gridRef.current?.children ?? []).slice(0, projetosFiltrados.length) as HTMLElement[]
            const maxAltura = cards.reduce((max, card) => Math.max(max, card.offsetHeight), 0)
            setAlturaRecolhida(maxAltura || null)
            setCardExpandido(index)
        }
    }

    // aparecer e sumir na tela
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.05 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // esconder a section quando a contato entrar na tela
    useEffect(() => {
        const contatoEl = document.getElementById('contato')
        if (!contatoEl) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setContatoVisivel(entry.isIntersecting)
            },
            { threshold: 0.05 }
        )

        observer.observe(contatoEl)

        return () => observer.disconnect()
    }, [])

    // projetos nas categorias
    const projetosPorCategoria = {
        front: projetosFront,
        back: projetosBack,
        full: projetosFull,
        aplicativo: projetosAplicativo
    }

    const projetosFiltrados = (projetosPorCategoria[categoria] ?? []).slice(0, 6)


    // inicio return projetos          
    return (
        <section
            ref={sectionRef}
            className={`h-auto mt-25 mb-5 px-15 transition-all duration-1000 ease-out
                ${contatoVisivel ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}
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
                className={`m-auto text-center text-foreground/50 text-xl w-[60%] transition-all duration-2000 ease-out delay-150
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

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-15 items-start">

                {projetosFiltrados.map((projeto, index) => (

                    <TiltedCard
                        key={index}
                        rotateAmplitude={12}
                        scaleOnHover={1}
                        showMobileWarning={false}
                        showTooltip={false}
                        className={`w-full h-full`}
                    >

                        <CardProjeto
                            projeto={projeto}
                            index={index}
                            isVisible={isVisible}
                            categoria={categoria}
                            verMais={verMais}
                            verMenos={verMenos}
                            expandido={cardExpandido === index}
                            alturaRecolhida={alturaRecolhida}
                            onToggle={() => handleToggle(index)}
                        />

                    </TiltedCard>

                ))}


                {/* VER MAIS PROJETOS NO GITHUB */}
                <div
                    className={`w-full col-span-full flex justify-center transition-all duration-2000 ease-out delay-500
      ${isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-20"
                        }`}
                >

                    <a
                        href="https://github.com/DeangellesES"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl flex items-center gap-3 hover:text-[#acacac] transition mt-10"
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