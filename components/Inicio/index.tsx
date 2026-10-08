"use client";

import { useEffect, useState } from "react";
import { Download, MessageSquare } from "lucide-react";

import Image from "next/image";

import FlipCard from '../FlipCard';

type Props = {
    texts: string[];
    sobre: string;
    downloadText: string;
    conversarText: string;
    codigo: {
        variavel: string;
        nome: string;
        paixao: string[];
        foco: string;
        status: string;
    };
};

export default function Inico({
    texts,
    sobre,
    downloadText,
    conversarText,
    codigo,
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
            className="min-h-screen flex px-4 pt-24 sm:pt-28 md:pt-32"
        >

            <div className="w-[55%] px-20">

                <div>
                    <h1
                        className="text-7xl font-black [text-shadow:0_0_20px_rgba(255,255,255,0.8)]"
                        style={{
                            WebkitTextStroke: "2px #fff",
                        }}
                    >
                        Felipe
                    </h1>

                    <h1
                        className="text-7xl font-black tracking-tight [text-shadow:0_0_20px_rgba(255,255,255,0.8)]"
                        style={{
                            WebkitTextStroke: "1px #fff",
                        }}
                    >
                        Deangelles
                    </h1>
                </div>


                {/* TEXTO ANIMADO */}
                <div className="max-w-full mt-3 mb-5">
                    <p
                        className="text-base sm:text-lg md:text-4xl font-black text-foreground"
                        style={{
                            WebkitTextStroke: "2px",
                        }}
                    >
                        {texto}
                        <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-foreground align-middle md:h-9" />
                    </p>
                </div>


                {/* SUBTÍTULO */}
                <div className="mt-3">
                    <p className="max-w-xl text-base text-foreground/60 sm:text-lg md:text-xl">
                        {sobre}
                    </p>
                </div>


                {/* BOTÕES PRINCIPAIS */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">

                    <a
                        href="../curriculoportifolio.pdf"
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-sm border border-gray-700/30 px-4 py-3 transition hover:bg-white hover:text-black [box-shadow:0_0_10px_rgba(255,255,255,0.8)]"
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


            <div className="relative w-[45%] pl-40">

                {/* <Image
                    src="/foto-animacao.png"
                    alt="Foto de perfil"
                    width={260}
                    height={100}
                    className="object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                /> */}

                <FlipCard
                    front={<img src="/foto-animacao.png" alt="Wooded landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    back={
                        <img src="/codando-animacao.png" alt="Wooded landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                    axis="y"
                    flipOnClick
                    draggable
                    dragDistance={0}
                    tilt
                    tiltMax={12}
                    glare
                    glareOpacity={0.22}
                    hoverScale={1.03}
                    perspective={1100}
                    stiffness={170}
                    damping={20}
                    width={300}
                    height={400}
                    radius={22}
                    background="#27272a"
                    color="#f5f5f5"
                    shadow
                    shadowColor="#000000"
                    shadowOpacity={0.45}
                    onFlipChange={flipped => console.log(flipped)}
                />

                {/* QUADRO DE CÓDIGO */}
                <div className="absolute bottom-5 left-1 z-10 w-[365px] rounded-lg border border-white/10 bg-[#0d1117] p-3 shadow-2xl">

                    <pre className="font-mono text-xs leading-5">
                        <code>
                            <span className="text-blue-400">const</span>{" "}
                            <span className="text-yellow-300">{codigo.variavel}</span>{" "}
                            = {"{"}{"\n"}

                            {"  "}
                            <span className="text-purple-400">nome</span>:{" "}
                            <span className="text-green-400">
                                '{codigo.nome}'
                            </span>,
                            {"\n"}

                            {"  "}
                            <span className="text-purple-400">paixao</span>: [
                            <span className="text-green-400">
                                {codigo.paixao.map((item) => `'${item}'`).join(", ")}
                            </span>
                            ],
                            {"\n"}

                            {/* {"  "}
                <span className="text-purple-400">skills</span>: [
                <span className="text-green-400">
                    'React', 'Node.js', 'PHP', 'MySQL'
                </span>
                ],
                {"\n"} */}

                            {"  "}
                            <span className="text-purple-400">foco</span>:{" "}
                            <span className="text-green-400">
                                '{codigo.foco}'
                            </span>,
                            {"\n"}

                            {"  "}
                            <span className="text-purple-400">status</span>:{" "}
                            <span className="text-green-400">
                                '{codigo.status}'
                            </span>
                            {"\n"}

                            {"};"}
                        </code>
                    </pre>

                </div>

            </div>

        </section>
    );
}