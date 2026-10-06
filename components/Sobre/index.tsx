import { useEffect, useRef, useState } from "react"
import GradientText from '../GradientText'
import Image from "next/image";
import { GraduationCap, Lightbulb, BookOpenText } from 'lucide-react';
import GhostFibers from '../GhostFibers';

// tradução
type Props = {
    t: {
        titulo: string;
        subtitulo: string;
        descricao: string;
        formacao: { titulo: string; curso: string; status: string };
    };
};

function Sobre({ t }: Props) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    // aparecer e sumir na tela
    const [isVisible, setIsVisible] = useState(false)
    const [habilidadesVisivel, setHabilidadesVisivel] = useState(false)

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

    // esconder a section quando a habilidades entrar na tela
    useEffect(() => {
        const habilidadesEl = document.getElementById('habilidades')
        if (!habilidadesEl) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setHabilidadesVisivel(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        observer.observe(habilidadesEl)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className={`h-screen py-15 px-15 mt-20 transition-all duration-1000 ease-out
                ${habilidadesVisivel ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}
            id='sobre'
        >

            <h1
                className={`text-center text-5xl transition-all duration-2000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
                <GradientText
                    colors={["#160070", "#d1d1d1"]}
                    animationSpeed={4}
                    showBorder={false}
                >
                    {t.titulo}
                </GradientText>
            </h1>

            <p
                className={`text-center text-[#a1a1a1] text-xl transition-all duration-2000 ease-out delay-150
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
                {t.subtitulo}
            </p>

            <div
                className={`flex justify-around gap-20 px-10 items-center h-full transition-all duration-2000 ease-out delay-300
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
                <div className="w-[30%]">
                    <Image
                        src="/sobre-portifolio.jpeg"
                        alt="Foto de perfil"
                        width={400}
                        height={300}
                        className="rounded-3xl"
                    />
                </div>

                <div className="w-[70%]">

                    <p>{t.descricao}</p>

                    <div className="flex flex-col md:flex-row gap-6 mt-8">

                        {/* Card 1 */}
                        <div className="group relative flex-1 overflow-hidden rounded-3xl border border-gray-300/20">

                            <div className="absolute inset-0">
                                <GhostFibers
                                    lineColor="#140E35"
                                    glowColor="#3437A0"
                                    speed={0.2}
                                    scale={2}
                                    rotation={0}
                                    rotationSpeed={0.25}
                                    layers={4}
                                    waveAmplitude={0.015}
                                    waveFrequency={3}
                                    waveSpeed={0.15}
                                    layerSpeed={0.08}
                                    twist={0.1}
                                    twistFrequency={5}
                                    twistSpeed={1.2}
                                    lineFrequency={5}
                                    lineSpacing={2}
                                    lineSharpness={16}
                                    glowFalloff={10}
                                    glowIntensity={1.6}
                                    brightness={2}
                                    blueBoost={1.25}
                                    vignette={0.8}
                                    grain={0.05}
                                    dpr={1}
                                    lightMode={false}
                                    fps={60}
                                    paused={false}
                                />
                            </div>

                            <div className="relative z-10 p-4 text-center backdrop-blur-[2px]">

                                <h2 className="text-lg font-bold">
                                    {t.formacao.titulo}
                                </h2>

                                <div className="flex justify-center my-2">
                                    <GraduationCap
                                        size={35}
                                        className="transition-transform duration-300 group-hover:scale-125"
                                    />
                                </div>

                                <p>
                                    {t.formacao.curso}
                                </p>

                                <p className="text-sm text-[#a1a1a1]">
                                    {t.formacao.status}
                                </p>

                            </div>

                        </div>


                        {/* Card 2 */}
                        <div className="group relative flex-1 overflow-hidden rounded-3xl border border-gray-300/20">

                            <div className="absolute inset-0">
                                <GhostFibers
                                    lineColor="#140E35"
                                    glowColor="#3437A0"
                                    speed={0.2}
                                    scale={2}
                                    rotation={0}
                                    rotationSpeed={0.25}
                                    layers={4}
                                    waveAmplitude={0.015}
                                    waveFrequency={3}
                                    waveSpeed={0.15}
                                    layerSpeed={0.08}
                                    twist={0.1}
                                    twistFrequency={5}
                                    twistSpeed={1.2}
                                    lineFrequency={5}
                                    lineSpacing={2}
                                    lineSharpness={16}
                                    glowFalloff={10}
                                    glowIntensity={1.6}
                                    brightness={2}
                                    blueBoost={1.25}
                                    vignette={0.8}
                                    grain={0.05}
                                    dpr={1}
                                    lightMode={false}
                                    fps={60}
                                    paused={false}
                                />
                            </div>

                            <div className="relative z-10 p-4 text-center backdrop-blur-[2px]">

                                <h2 className="text-lg font-bold">
                                    Solucionador de Problemas
                                </h2>

                                <div className="flex justify-center my-2">
                                    <Lightbulb
                                        size={35}
                                        className="transition-transform duration-300 group-hover:scale-125"
                                    />
                                </div>

                                <p>
                                    Enfrentando Desafios
                                </p>

                            </div>

                        </div>


                        {/* Card 3 */}
                        <div className="group relative flex-1 overflow-hidden rounded-3xl border border-gray-300/20">

                            <div className="absolute inset-0">
                                <GhostFibers
                                    lineColor="#140E35"
                                    glowColor="#3437A0"
                                    speed={0.2}
                                    scale={2}
                                    rotation={0}
                                    rotationSpeed={0.25}
                                    layers={4}
                                    waveAmplitude={0.015}
                                    waveFrequency={3}
                                    waveSpeed={0.15}
                                    layerSpeed={0.08}
                                    twist={0.1}
                                    twistFrequency={5}
                                    twistSpeed={1.2}
                                    lineFrequency={5}
                                    lineSpacing={2}
                                    lineSharpness={16}
                                    glowFalloff={10}
                                    glowIntensity={1.6}
                                    brightness={2}
                                    blueBoost={1.25}
                                    vignette={0.8}
                                    grain={0.05}
                                    dpr={1}
                                    lightMode={false}
                                    fps={60}
                                    paused={false}
                                />
                            </div>

                            <div className="relative z-10 p-4 text-center backdrop-blur-[2px]">

                                <h2 className="text-lg font-bold">
                                    Aprendiz Contínuo
                                </h2>

                                <div className="flex justify-center my-2">
                                    <BookOpenText size={35}
                                        className="transition-transform duration-300 group-hover:scale-125" />
                                </div>

                                <p>
                                    Evoluir
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre