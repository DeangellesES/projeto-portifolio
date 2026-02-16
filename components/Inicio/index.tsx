'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, MessageSquare } from 'lucide-react';

// tradução
type Props = {
    texts: string[];
    sobre: string;
    downloadText: string;
    conversarText: string;
};

// const texts = [
//     'Olá, Meu Nome é Felipe Deangelles',
//     'Sou Desenvolvedor de Software',
//     'Estou Graduando Engenharia de Software',
//     'Seja Bem-Vindo ao Meu Portifólio!'
// ]

export default function Inico({ texts, sobre, downloadText, conversarText }: Props) {
    // funcao escrevendo e apagando na tela
    const writeTime = 80
    const removeTime = 1000

    const [text, setText] = useState('')

    const sentenceIndex = useRef(0)
    const charIndex = useRef(0)
    const isDeleting = useRef(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const type = () => {
            const currentText = texts[sentenceIndex.current]

            if (!isDeleting.current) {
                charIndex.current++
                setText(currentText.substring(0, charIndex.current))

                if (charIndex.current === currentText.length) {
                    isDeleting.current = true
                    timeoutRef.current = setTimeout(type, removeTime)
                    return
                }
            } else {
                charIndex.current--
                setText(currentText.substring(0, charIndex.current))

                if (charIndex.current === 0) {
                    isDeleting.current = false
                    sentenceIndex.current =
                        (sentenceIndex.current + 1) % texts.length
                }
            }

            timeoutRef.current = setTimeout(type, writeTime)
        }

        timeoutRef.current = setTimeout(type, writeTime)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [texts])

    return (
        <section
            id="inicio"
            className="
      min-h-screen
      flex flex-col items-center justify-center
      px-4
      pt-24 sm:pt-28
      md:pt-32
    "
        >
            {/* TÍTULO */}
            <div className="flex items-center justify-center">
                <h1
                    className="
          typewriter
    text-[var(--cor-texto)]
    text-6xl sm:text-4xl lg:text-6xl
    max-w-[22ch] sm:max-w-[26ch] md:max-w-[30ch]
    text-center
    font-bold
    leading-[1.15]
    mx-auto
    relative
    [text-wrap:balance]
    [text-shadow:0_0_8px_rgba(0,0,0,0.35)]
    dark:[text-shadow:0_0_20px_rgba(255,255,255,0.7)]
    after:content-['']
    after:inline-block
    after:w-[4px]
    after:h-[1em]
    after:ml-1
    after:align-bottom
    after:bg-gray-400
    after:animate-[flasher_0.8s_steps(1)_infinite]
        "
                >
                    {text}
                </h1>
            </div>

            {/* SUBTÍTULO */}
            <div className="mt-6 flex justify-center">
  <p className="max-w-xl text-center text-base sm:text-lg md:text-xl text-[#a1a1a1]">
    {sobre}
  </p>
</div>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                    href="../curriculoportifolio.pdf"
                    target="_blank"
                    className="
          border border-gray-700/30
          px-4 py-3
          rounded-sm
          flex items-center justify-center gap-2
          hover:bg-white hover:text-black
          transition
        "
                >
                    <Download />
                    {downloadText}
                </a>

                <a
                    href="#contato"
                    className="
          border border-gray-300/20
          px-4 py-3
          rounded-sm
          bg-[#1b1b1b]
          flex items-center justify-center gap-2
          text-white
          hover:bg-black
          transition
        "
                >
                    <MessageSquare />
                    {conversarText}
                </a>
            </div>
        </section>
    );

}
