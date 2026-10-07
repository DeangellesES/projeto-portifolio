"use client";

import { useEffect, useRef, useState } from "react";
import GradientText from "../GradientText";

interface ExperienciaItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

interface ExperienciaProps {
  t: {
    titulo: string;
    subtitulo: string;
    experiencias: ExperienciaItem[];
  };
}

export default function Experiencia({ t }: ExperienciaProps) {
    const experiences = t.experiencias;

    const sectionRef = useRef<HTMLElement | null>(null);
    // aparecer e sumir na tela
    const [isVisible, setIsVisible] = useState(false);
    const [contatoVisivel, setContatoVisivel] = useState(false);

    // aparecer quando chegar na section Experiencia
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // esconder a section quando a Contato (titulo "Vamos Conversar") entrar na tela
    useEffect(() => {
        const contatoEl = document.getElementById("contato");
        if (!contatoEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setContatoVisivel(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );

        observer.observe(contatoEl);

        return () => observer.disconnect();
    }, []);

    const timelineRef = useRef<HTMLDivElement | null>(null);
    const progressRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const updateTimeline = () => {

            if (!timelineRef.current || !progressRef.current) return;

            const timeline = timelineRef.current;

            const rect = timeline.getBoundingClientRect();

            /*
             * Ponto da tela onde a animação começa.
             *
             * 0.65 = 65% da altura da tela.
             */
            const startPoint = window.innerHeight * 0.65;

            /*
             * Quanto da timeline já passou
             * pelo ponto de ativação.
             */
            const progress = startPoint - rect.top;

            /*
             * Impede a linha de ficar menor que 0
             * ou maior que a timeline.
             */
            const clampedProgress = Math.max(
                0,
                Math.min(progress, rect.height)
            );

            progressRef.current.style.height =
                `${clampedProgress}px`;
        };

        window.addEventListener(
            "scroll",
            updateTimeline,
            { passive: true }
        );

        updateTimeline();

        return () => {
            window.removeEventListener(
                "scroll",
                updateTimeline
            );
        };

    }, []);

    return (
        <section
            id="experiencias"
            ref={sectionRef}
            className={`transition-all duration-1000 ease-out
                ${contatoVisivel ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}
        >

            {/* Título */}
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

            {/* Descrição Seção */}
            <p
                className={`m-auto w-[60%] text-center text-xl text-[#a1a1a1] transition-all duration-2000 ease-out delay-150
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
            >
                {t.subtitulo}
            </p>


            {/* Timeline */}
            <section
                className={`relative mx-auto max-w-5xl px-6 py-24 transition-all duration-2000 ease-out delay-300
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >

                {/* Container da timeline */}
                <div
                    ref={timelineRef}
                    className="relative"
                >

                    {/* ================================= */}
                    {/* LINHA BASE */}
                    {/* ================================= */}

                    <div className="absolute left-[7px] top-0 h-full w-[2px] rounded-full bg-white/10" />


                    {/* ================================= */}
                    {/* LINHA DE PROGRESSO */}
                    {/* ================================= */}

                    <div
                        ref={progressRef}
                        className="absolute left-[7px] top-0 h-0 w-[4px] -translate-x-[1px] rounded-full bg-gradient-to-b from-violet-800 via-blue-800 to-violet-950 shadow-[0_0_15px_rgba(139,92,246,1)] transition-[height] duration-75 ease-linear"
                    />


                    {/* ================================= */}
                    {/* EXPERIÊNCIAS */}
                    {/* ================================= */}

                    <div className="space-y-14">

                        {experiences.map((experience) => (
                            <CardExperiencia
                                key={experience.year}
                                experience={experience}
                            />
                        ))}

                    </div>

                </div>

            </section>

        </section>
    );
}

function CardExperiencia({ experience }: { experience: ExperienciaItem }) {
    const tecnologiasRef = useRef<HTMLDivElement | null>(null);
    const [tecnologiasVisiveis, setTecnologiasVisiveis] = useState(false);

    // tecnologias aparecem uma por uma quando chegam na tela
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTecnologiasVisiveis(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (tecnologiasRef.current) {
            observer.observe(tecnologiasRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="experience-item group relative pl-12">

            {/* ===================== */}
            {/* PONTO */}
            {/* ===================== */}

            <div className="experience-dot absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#090711] transition-all duration-500 group-hover:scale-150 group-hover:border-white group-hover:shadow-[0_0_25px_rgba(139,92,246,0.9)]">

                <div className="h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-500 group-hover:h-2 group-hover:w-2" />

            </div>

            {/* ===================== */}
            {/* CARD */}
            {/* ===================== */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-violet-400/30 group-hover:bg-white/[0.045] group-hover:shadow-[0_15px_60px_rgba(139,92,246,0.08)] md:p-8">

                {/* Glow superior */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Glow inferior */}
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-fuchsia-500/5 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Conteúdo */}
                <div className="relative">

                    {/* Ano / Número */}
                    {/* <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                        <span className="text-sm font-medium tracking-wide text-violet-400">
                            {experience.year}
                        </span>

                        <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/40">
                            0{index + 1}
                        </span>

                    </div> */}

                    {/* Cargo */}
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-100">
                        {experience.role}
                    </h3>

                    {/* Empresa */}
                    <p className="mt-1 text-sm text-white/40">
                        {experience.company}
                    </p>

                    {/* Descrição */}
                    <p className="mt-5 max-w-2xl leading-7 text-white/50">
                        {experience.description}
                    </p>

                    {/* Tecnologias */}
                    <div ref={tecnologiasRef} className="mt-6 flex flex-wrap gap-2">

                        {experience.technologies.map(
                            (technology, techIndex) => (

                                    <span
                                        key={technology}
                                        style={{
                                            transitionProperty: "opacity, translate, transform, color, border-color",
                                            transitionDuration: "1200ms, 1200ms, 1200ms, 300ms, 300ms",
                                            transitionDelay: `${techIndex * 220}ms, ${techIndex * 220}ms, ${techIndex * 220}ms, 0ms, 0ms`,
                                        }}
                                        className={`rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 ease-out group-hover:border-violet-400/20 group-hover:text-white/70
                                            ${tecnologiasVisiveis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                                    >
                                        {technology}
                                    </span>

                            )
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}