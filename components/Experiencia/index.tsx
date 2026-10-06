"use client";

import { useEffect, useRef } from "react";
import GradientText from "../GradientText";

const experiences = [
    {
        year: "2022 — 2023",
        role: "Frontend Developer",
        company: "Empresa / Projeto",
        description:
            "Desenvolvimento de interfaces modernas, responsivas e focadas em experiência do usuário.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
        year: "2023 — 2025",
        role: "Full Stack Developer",
        company: "Empresa / Projeto",
        description:
            "Construção de aplicações completas, trabalhando tanto no frontend quanto no backend.",
        technologies: ["Next.js", "Node.js", "PostgreSQL"],
    },
    {
        year: "2025 — Atualmente",
        role: "Software Developer",
        company: "Empresa / Projeto",
        description:
            "Desenvolvimento de produtos digitais escaláveis com foco em performance, arquitetura e interfaces.",
        technologies: ["Next.js", "TypeScript", "AI"],
    },
];

export default function Experiencia() {

    const timelineRef = useRef(null);
    const progressRef = useRef(null);

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
        <section>

            {/* Título */}
            <h1 className="text-center text-5xl">

                <GradientText
                    colors={["#160070", "#d1d1d1"]}
                    animationSpeed={4}
                    showBorder={false}
                >
                    Experiência
                </GradientText>

            </h1>

            {/* Descrição Seção */}
            <p className="m-auto w-[60%] text-center text-xl text-[#a1a1a1]">
                Cada projeto trouxe um desafio, cada desafio trouxe
                aprendizado e cada experiência ajudou a construir
                quem sou como desenvolvedor.
            </p>


            {/* Timeline */}
            <section className="relative mx-auto max-w-5xl px-6 py-24">

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

                        {experiences.map(
                            (experience, index) => (

                                <div
                                    key={experience.year}
                                    className="experience-item group relative pl-12"
                                >

                                    {/* ===================== */}
                                    {/* PONTO */}
                                    {/* ===================== */}

                                    <div className="experience-dot absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#090711] transition-all duration-500 group-hover:scale-150 group-hover:border-violet-300 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.9)]">

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
                                            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                                                <span className="text-sm font-medium tracking-wide text-violet-400">
                                                    {experience.year}
                                                </span>

                                                <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/40">
                                                    0{index + 1}
                                                </span>

                                            </div>

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
                                            <div className="mt-6 flex flex-wrap gap-2">

                                                {experience.technologies.map(
                                                    (technology) => (

                                                        <span
                                                            key={technology}
                                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 transition-all duration-300 group-hover:border-violet-400/20 group-hover:text-white/70"
                                                        >
                                                            {technology}
                                                        </span>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>

            </section>

        </section>
    );
}