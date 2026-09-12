"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiNextdotjs,
    SiCss,
    SiMysql,
    SiMongodb,
} from "react-icons/si";
import {
    Code2,
    Zap,
    Monitor,
    LockKeyhole,
} from "lucide-react";

type TechIcon = {
    Icon: IconType;
    color: string;
    top: string;
    left: string;
    size: number;
    delay: number;
    duration: number;
};

const techIcons: TechIcon[] = [
    { Icon: SiJavascript, color: "#f7df1e", top: "10%", left: "7%", size: 38, delay: 0, duration: 9 },
    { Icon: SiNodedotjs, color: "#68a063", top: "24%", left: "86%", size: 44, delay: 1.2, duration: 11 },
    { Icon: SiNextdotjs, color: "#ffffff", top: "12%", left: "72%", size: 34, delay: 2, duration: 12 },
    { Icon: SiReact, color: "#61dafb", top: "64%", left: "8%", size: 42, delay: 0.6, duration: 10 },
    { Icon: SiCss, color: "#2965f1", top: "78%", left: "20%", size: 36, delay: 2.4, duration: 11.5 },
    { Icon: SiMysql, color: "#00758f", top: "38%", left: "93%", size: 36, delay: 0.9, duration: 10.5 },
    { Icon: SiMongodb, color: "#4db33d", top: "82%", left: "62%", size: 40, delay: 1.6, duration: 9.5 },
];

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [hidden, setHidden] = useState(false);
    const timers = useRef<number[]>([]);

    const finish = useCallback(() => {
        setLeaving(true);
        timers.current.push(window.setTimeout(() => setHidden(true), 600));
    }, []);

    useEffect(() => {
        const timeouts = timers.current;
        timeouts.push(window.setTimeout(() => setProgress(12), 80));

        const interval = window.setInterval(() => {
            setProgress(prev => {
                const next = prev + (Math.random() * 7 + 2);

                if (next >= 100) {
                    window.clearInterval(interval);
                    timeouts.push(window.setTimeout(finish, 450));
                    return 100;
                }

                return Math.min(next, 100);
            });
        }, 150);

        return () => {
            window.clearInterval(interval);
            timeouts.forEach(t => window.clearTimeout(t));
        };
    }, [finish]);

    if (hidden) return null;

    return (
        <div
            aria-hidden
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center
        bg-[#000] px-4
        transition-opacity duration-500
        ${leaving
                    ? "pointer-events-none opacity-0"
                    : "opacity-100"
                }`}
        >
            {/* ÍCONES FLUTUANTES DE TECNOLOGIAS */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
                {techIcons.map(({ Icon, color, top, left, size, delay, duration }, i) => (
                    <span
                        key={i}
                        className="animate-float-icon absolute opacity-15"
                        style={{
                            top,
                            left,
                            color,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                        }}
                    >
                        <Icon style={{ width: size, height: size }} />
                    </span>
                ))}
            </div>

            {/* CARD */}
            <div
                className="
                w-full max-w-[540px]
                rounded-[22px]
                border border-gray-300/20
                bg-[#0f0f0f]
                px-6 py-10
                sm:px-10 sm:py-12
                shadow-2xl
            "
            >
                {/* ÍCONE */}
                <div className="flex justify-center mb-7">
                    <div className="relative text-6xl">
                        ☕

                        {/* Vapor */}
                        <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 gap-2">
                            <span className="h-5 w-1 rounded-full bg-blue-300/30 blur-[2px] animate-pulse" />
                            <span className="h-7 w-1 rounded-full bg-blue-300/30 blur-[2px] animate-pulse [animation-delay:200ms]" />
                            <span className="h-4 w-1 rounded-full bg-blue-300/30 blur-[2px] animate-pulse [animation-delay:400ms]" />
                        </div>
                    </div>
                </div>

                {/* NOME */}
                <h1
                    className="
                    text-center
                    text-3xl sm:text-4xl
                    font-bold
                    tracking-wide
                    text-white
                "
                >
                    Felipe
                </h1>

                {/* SUBTÍTULO */}
                <p className="mt-4 text-center text-sm sm:text-base text-[#8995aa]">
                    Desenvolvedor FullStack
                </p>

                {/* LINHA AZUL */}
                <div className="mx-auto mt-6 h-[3px] w-11 rounded-full bg-[#fff]" />

                {/* STATUS */}
                <p className="mt-7 text-center text-sm text-[#8995aa]">
                    Preparando o café...
                </p>

                {/* PROGRESSO */}
                <div className="mt-5">
                    <div className="flex items-center gap-4">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#1d2a3d]">
                            <div
                                className="
                                h-full rounded-full
                                bg-[#fff]
                                transition-[width]
                                duration-150
                                ease-out
                            "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>

                        <span className="min-w-[35px] text-sm font-medium text-[#fff]">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>

                {/* CARACTERÍSTICAS */}
                <div
                    className="
                    mt-8
                    flex flex-wrap
                    justify-center
                    gap-x-5 gap-y-3
                    text-xs sm:text-sm
                    text-[#8995aa]
                "
                >
                    <div className="flex items-center gap-1.5">
                        <Code2 size={16} className="text-[#fff]" />
                        <span>Código</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Zap size={16} className="text-[#fff]" />
                        <span>Performance</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Monitor size={16} className="text-[#fff]" />
                        <span>Responsivo</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <LockKeyhole size={16} className="text-[#fff]" />
                        <span>Seguro</span>
                    </div>
                </div>
            </div>

            {/* FRASE INFERIOR */}
            <p
                className="
                mt-8
                text-center
                text-xs sm:text-sm
                text-[#56647a]
            "
            >
                Construindo soluções
                <span className="mx-3 text-[#fff]">•</span>
                Transformando ideias
                <span className="mx-3 text-[#fff]">•</span>
                Criando experiências
            </p>
        </div>
    );
}