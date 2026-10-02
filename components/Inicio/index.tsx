"use client";

import { useEffect, useState } from "react";
import { Download, MessageSquare } from "lucide-react";

type Props = {
    texts: string[];
    sobre: string;
    downloadText: string;
    conversarText: string;
};

export default function Inico({
    texts,
    sobre,
    downloadText,
    conversarText,
}: Props) {

    const [texto, setTexto] = useState("");
    const [indice, setIndice] = useState(0);
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        if (!texts.length) return;

        const fraseAtual = texts[indice];

        const velocidade = apagando ? 50 : 100;

        const timer = setTimeout(() => {

            // ESCREVENDO
            if (!apagando) {
                setTexto(fraseAtual.substring(0, texto.length + 1));

                // terminou de escrever
                if (texto.length === fraseAtual.length) {
                    setTimeout(() => {
                        setApagando(true);
                    }, 2000);
                }
            }

            // APAGANDO
            else {
                setTexto(fraseAtual.substring(0, texto.length - 1));

                // terminou de apagar
                if (texto.length === 0) {
                    setApagando(false);

                    setIndice((prev) =>
                        (prev + 1) % texts.length
                    );
                }
            }

        }, velocidade);

        return () => clearTimeout(timer);

    }, [texto, indice, apagando, texts]);

    return (
        <section
            id="inicio"
            className="min-h-screen grid-cols-2 px-4 pt-24 sm:pt-28 md:pt-32"
        >

            <div className="w-[50%] px-20">

                <div>
                    <h1
                        className="text-7xl font-black"
                        style={{
                            WebkitTextStroke: "2px #fff",
                        }}
                    >
                        Felipe
                    </h1>

                    <h1
                        className="text-7xl font-black tracking-tight"
                        style={{
                            WebkitTextStroke: "1px #fff",
                        }}
                    >
                        Deangelles
                    </h1>
                </div>


                {/* TEXTO ANIMADO */}
                <div className="mt-6 flex items-center">
                    <p className="text-base text-[#a1a1a1] sm:text-lg md:text-xl">
                        {texto}
                    </p>

                    {/* CURSOR */}
                    <span className="ml-1 h-6 w-[2px] animate-pulse bg-white md:h-7" />
                </div>


                {/* SUBTÍTULO */}
                <div className="mt-3">
                    <p className="max-w-xl text-base text-[#a1a1a1] sm:text-lg md:text-xl">
                        {sobre}
                    </p>
                </div>


                {/* BOTÕES PRINCIPAIS */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">

                    <a
                        href="../curriculoportifolio.pdf"
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-sm border border-gray-700/30 px-4 py-3 transition hover:bg-white hover:text-black"
                    >
                        <Download />
                        {downloadText}
                    </a>

                    <a
                        href="#contato"
                        className="flex items-center justify-center gap-2 rounded-sm border border-gray-300/20 bg-[#1b1b1b] px-4 py-3 text-white transition hover:bg-black"
                    >
                        <MessageSquare />
                        {conversarText}
                    </a>

                </div>

            </div>


            <div className="w-[50%]">
            </div>

        </section>
    );
}