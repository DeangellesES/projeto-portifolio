'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, MessageSquare } from 'lucide-react';

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
        <section className="h-[110vh] flex flex-col items-center justify-center mt-10" id='inicio'>
            <div className="h-[160px] flex items-center justify-center">
                <h1 className="typewriter  text-[var(--cor-texto)]
    text-[4rem]
    w-[80%]
    mx-auto
    mt-[-7rem]
    text-center
    font-bold
    relative
    leading-[1.2]
    [text-shadow:0_0_8px_rgba(0,0,0,0.35)]
    dark:[text-shadow:0_0_20px_rgba(255,255,255,0.7)]
    relative

    after:content-['']
    after:inline-block
    after:w-[5px]
    after:h-[1em]
    after:ml-[6px]
    after:align-bottom

    after:bg-gray-400
    after:animate-[flasher_0.8s_steps(1)_infinite]">{text}</h1>
            </div>

            <div className='flex justify-center text-xl'>
                <p className='w-[70%] text-center text-[#a1a1a1]'>{sobre}</p>
            </div>

            <div className="mt-10 flex gap-6">
                <a href="../curriculoportifolio.pdf" target="_blank" className='border border-gray-700/30 px-4 py-3 rounded-sm flex items-center gap-2 hover:bg-white hover:text-black transition duration-400'> <Download /> {downloadText}</a>
                <a href="#contato" className='border border-gray-300/20 px-4 py-3 rounded-sm bg-[#1b1b1b] flex items-center gap-2 text-white hover:bg-black transition duration-400'><MessageSquare /> {conversarText}</a>
            </div>
        </section>
    )


}
