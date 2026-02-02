'use client'
import { useEffect, useRef, useState } from 'react'

import './index.css'
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight, Dot, Clock4, SquareCode, BriefcaseBusiness, SquareArrowOutUpRight, Send } from 'lucide-react';
import StarBorder from '../StarBorder'
import GradientText from '../GradientText'
import ElectricBorder from '../ElectricBorder'
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify'


type Props = {
    titulo: string;
    subtitulo: string;
    descricao: string;
    telefone: string;
    localizacao: string;
    endereco: string;
    nome: string;
    assunto: string;
    mensagem: string;
    enviar: string;
    disponivel: string;
    resposta: string;
    horas: string;
    respondo: string;
    pronto: string;
    transformar: string;
    conversar: string;
    envieMe: string;
    oportunidades: string;
    crescimento: string;
    imediato: string;
};

function Contato({ titulo, subtitulo, descricao, telefone, localizacao, endereco, nome, assunto, mensagem, enviar, disponivel, resposta, horas, respondo, pronto, transformar, conversar, envieMe, oportunidades, crescimento, imediato }: Props) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    const bottomRef = useRef<HTMLDivElement | null>(null)
    const [showBottom, setShowBottom] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [sending, setSending] = useState(false)

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs
            .send(
                "service_e7tqike",
                "template_io2asrt",
                templateParams,
                "6GcWAv-A2crYJ7gHh"
            )
            .then(() => {
                setName('')
                setEmail('')
                setMessage('')
                setSending(false)

                toast.success('Mensagem enviada com sucesso!')
            })
            .catch(() => {
                setSending(false)
                toast.error('Erro ao enviar mensagem 😢')
            })
    }



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // true quando entra, false quando sai
                setIsVisible(entry.isIntersecting)
            },
            {
                threshold: 0.3,
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowBottom(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (bottomRef.current) {
            observer.observe(bottomRef.current)
        }

        return () => observer.disconnect()
    }, [])


    return (
        <section className='py-15 px-15 mt-15 overflow-hidden ' id='contato' ref={sectionRef}>
            <h1 className={`
    text-center text-5xl mb-15
    transition-all
    duration-700
    ease-out
    ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }
  `}><GradientText
                    colors={["#160070", "#d1d1d1"]}
                    animationSpeed={4}
                    showBorder={false}
                >
                    {titulo}
                </GradientText></h1>
            <div className='grid grid-cols-2 gap-20'>
                <div className={` w-[80%] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} `}>
                    <h2 className='text-3xl font-bold'>{subtitulo}</h2>
                    <p className='text-lg py-5 text-[#a1a1a1]'>{descricao}</p>
                    <div className='grid gap-3'>
                        <div className='flex items-center gap-4 border border-gray-700/20 px-5 py-3 bg-[#0d0d0d]'>
                            <Mail className='contato-icones' />
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold'>Email</h1>
                                <p className='text-xl text-[#a1a1a1]'>FelipeDeangelles@hotmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 border border-gray-700/20 px-5 py-3 bg-[#0d0d0d]'>
                            <Phone className='contato-icones' />
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold'>{telefone}</h1>
                                <a href="https://api.whatsapp.com/send?phone=5535997631949" className='text-xl text-[#a1a1a1]'>+55 (35) 99763-1949</a>
                            </div>
                        </div>
                        {/* <div className='flex items-center gap-4 border border-gray-700/20 px-5 py-3 bg-[#0d0d0d]'>
                            <MapPin className='contato-icones' />
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold'>{localizacao}</h1>
                                <p className='text-xl text-[#a1a1a1]'>{endereco}</p>
                            </div>
                        </div> */}
                        <div className='flex gap-5 border border-gray-700/20 px-5 py-3 bg-[#0d0d0d]'>
                            <div className='flex items-center gap-4'>
                                <Linkedin className='contato-icones' />
                                <a href="https://www.linkedin.com/in/felipe-deangelles-da-silva-lopes/" className='text-2xl font-bold flex items-center gap-3'>Linkedin <ArrowRight /></a>
                            </div>
                            <div className='flex items-center gap-4'>
                                <Github className='contato-icones' />
                                <a href="https://github.com/DeangellesES" className='text-2xl font-bold flex items-center gap-3'>GitHub <ArrowRight /></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                    <ElectricBorder
                        color="#000080"
                        speed={1}
                        chaos={0.12}
                        // thickness={2}
                        style={{ borderRadius: 16 }}
                    >
                        <form action="" className='border border-gray-700/40 p-8 rounded-2xl flex flex-col gap-2' onSubmit={sendEmail}>
                            <label className='text-xl font-bold'>{nome}</label>
                            <input type="text" id="name" name="name" required placeholder='Seu Nome' className='bg-white  text-black p-2 rounded-md border border-gray-700/20' onChange={(e) => setName(e.target.value)} value={name}></input>

                            <label className='text-xl font-bold'>Email</label>
                            <input type="email" id="email" name="email" placeholder='Seu Email' required className='bg-white text-black p-2 rounded-md border border-gray-700/20' onChange={(e) => setEmail(e.target.value)} value={email}></input>

                            {/* <label className='text-xl font-bold'>{assunto}</label>
                            <input type="text" id="subject" name="subject" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></input> */}

                            <label className='text-xl font-bold'>{mensagem}</label>
                            <textarea name="message" id="message" rows={5} placeholder='Escreva uma Mensagem' required className='bg-white text-black p-2 rounded-md border border-gray-700/20' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

                            <button type="submit" disabled={sending} className='text-center bg-white text-black py-3 text-xl font-bold rounded-md mt-2 border border-gray-900/20 flex items-center justify-center gap-2 hover:bg-black hover:text-white'>{sending ? ('Enviando...') : (
                                <>
                                    Enviar Mensagem <Send size={25} />
                                </>
                            )}</button>
                        </form>
                    </ElectricBorder>
                    {/* <form action="" className='border border-gray-700/40 p-8 rounded-2xl flex flex-col gap-2'>
                        <label for="name" data-i18n="nome" className='text-xl font-bold'>{nome}</label>
                        <input type="text" id="name" name="name" required className='bg-white p-2 rounded-md border border-gray-700/20'></input>

                        <label for="email" className='text-xl font-bold'>Email</label>
                        <input type="email" id="email" name="email" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></input>

                        <label for="subject" data-i18n="assunto" className='text-xl font-bold'>{assunto}</label>
                        <input type="text" id="subject" name="subject" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></input>

                        <label for="menssage" data-i18n="mensagem" className='text-xl font-bold'>{mensagem}</label>
                        <textarea name="message" id="message" rows="6" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></textarea>

                        <a href="" className='text-center bg-white text-black py-3 text-xl font-bold rounded-md mt-2 border border-gray-900/20 flex items-center justify-center gap-2 hover:bg-black hover:text-white'>{enviar} <Send /></a>
                    </form> */}
                </div>
            </div>

            <div ref={bottomRef}
                className={`mt-10 transform transition-all duration-[3400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                ${showBottom
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-24'
                    }
                `}>

                <p className='text-green-600 border border-green-600/30 rounded-3xl w-fit flex items-center mx-auto pr-6'><Dot size={45} className="animate-pulse" />{disponivel}</p>

                <div className='flex gap-5 text-center items-center mt-5 justify-center'>

                    <StarBorder
                        as="button"
                        color="white"
                        speed="3s"
                        className='flex flex-col gap-2 p-4 rounded-3xl h-fit w-[22rem]'
                    >

                        <Clock4 size={50} className='mx-auto font-bold' />
                        <h2 className='font-bold text-2xl'>{resposta}</h2>
                        <p className='text-[#a1a1a1]'>{horas}</p>
                        <p className='text-[#a1a1a1]'>{respondo}</p>
                    </StarBorder>

                    <StarBorder
                        as="button"
                        color="white"
                        speed="3s"
                        className='flex flex-col gap-2 p-4 rounded-3xl w-[29rem]'
                    >

                        <SquareCode size={50} className='mx-auto' />
                        <h2 className='font-bold text-2xl'>{pronto}</h2>
                        <p className='text-[#a1a1a1]'>{transformar}</p>
                        <a href="" className='text-[blue] flex gap-2 items-center justify-center'><SquareArrowOutUpRight size={17} /> {conversar}</a>
                        <p className='text-[#a1a1a1]'>{envieMe}</p>
                    </StarBorder>

                    <StarBorder
                        as="button"
                        color="white"
                        speed="3s"
                        className='flex flex-col gap-2 p-4 rounded-3xl h-fit w-[22rem]'
                    >

                        <BriefcaseBusiness size={50} className='mx-auto' />
                        <h2 className='font-bold text-2xl'>{oportunidades}</h2>
                        <p className='text-[#a1a1a1]'>{crescimento}</p>
                        <p className='text-[#a1a1a1]'>{imediato}</p>
                    </StarBorder>

                </div>

            </div>

        </section>
    )

}

export default Contato