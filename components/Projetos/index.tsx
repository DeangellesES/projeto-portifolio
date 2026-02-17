import GradientText from '../GradientText'
import Image from "next/image"
import { SquareArrowOutUpRight, Github } from 'lucide-react';

type Props = {
    titulo: string;
    subtitulo: string;
}

function Projetos({ titulo, subtitulo }: Props) {
    return (
        <section className='h-auto my-28' id='projetos'>
            <h1 className="text-center text-5xl leading-tight"><GradientText
                colors={["#160070", "#d1d1d1"]}
                animationSpeed={4}
                showBorder={false}
            >
                {titulo}
            </GradientText></h1>
            <p className="m-auto text-center text-[#a1a1a1] text-xl w-[60%]">{subtitulo}</p>

            <div className='flex gap-5 pl-40 mt-10'>
                <p className='border border-gray-300/20 p-3'>Front End</p>
                <p className='border border-gray-300/20 p-3'>Back End</p>
                <p className='border border-gray-300/20 p-3'>Full Stack</p>
            </div>

            <div className='flex justify-center gap-15 mt-15 flex-wrap'>
                
                <div className='border border-gray-300/20 rounded-2xl w-[35%] bg-[#0d0d0d]'>
                    <Image
                        src="/oficina-mecanica0.png"
                        alt="oficina mecanica"
                        width={300}
                        height={100}
                        className='w-full rounded-t-lg '
                    />
                    <div className='p-8'>
                        <h1 className='text-2xl'>Site para uma Oficina Mecânica</h1>
                        <p className='py-3 text-[#a1a1a1]'>
                            Site informacional para oficina mecânica, apresentando serviços, processos, localização, horários, preços e perguntas frequentes.                        </p>
                        <div className='flex gap-3'>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>React</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Styled-Components</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Vite</p>

                        </div>
                        <div className='flex gap-10 justify-center mt-5'>
                            <a href="https://site-oficina-mecanica.vercel.app/" className='flex gap-2 items-center' target="_blank">Ver Site <SquareArrowOutUpRight size={15} /></a>
                            <a href="https://github.com/DeangellesES/site_oficina_mecanica-ReactJS-Vite" className='flex gap-2 items-center' target="_blank">Código <Github size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300/20 rounded-2xl w-[35%] bg-[#0d0d0d]'>
                    <div className='h-57 overflow-hidden rounded-t-2xl'>
                        <Image
                            src="/clinica-veterinaria.png"
                            alt="clinica veterinaria"
                            width={300}
                            height={100}
                            className='w-full h-full object-cover object-top'
                        />
                    </div>
                    <div className='p-5'>
                        <h1 className='text-2xl'>Site para uma Clínica Veterinária</h1>
                        <p className='py-3 text-[#a1a1a1]'>
                            Aplicação front-end para clínica veterinária, estruturada para exibir serviços, especialidades, horários de atendimento e canais de contato de forma clara e acessível.                        </p>
                        <div className='flex gap-3'>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>React</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Styled-Components</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Vite</p>

                        </div>
                        <div className='flex gap-10 justify-center mt-5'>
                            <a href="https://clinica-veterinaria-seven.vercel.app/" className='flex gap-2 items-center' target="_blank">Ver Site <SquareArrowOutUpRight size={15} /></a>
                            <a href="https://github.com/DeangellesES/clinica_veterinaria-ReactJs-Vite" className='flex gap-2 items-center' target="_blank">Código <Github size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300/20 rounded-2xl w-[35%] bg-[#0d0d0d]'>
                    <div className='h-57 overflow-hidden rounded-t-2xl'>
                        <Image
                            src="/psicologia.png"
                            alt="Clinica de Psicologia"
                            width={300}
                            height={100}
                            className='w-full h-full object-cover object-top'
                        />
                    </div>
                    <div className='p-5'>
                        <h1 className='text-2xl'>Site para uma Psicóloga</h1>
                        <p className='py-3 text-[#a1a1a1]'>
                            Site informacional desenvolvido para psicóloga, apresentando áreas de atuação, abordagem terapêutica, horários e formas de contato.                        </p>
                        <div className='flex gap-3'>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>React</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>TypeScript</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Styled-Components</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Vite</p>

                        </div>
                        <div className='flex gap-10 justify-center mt-5'>
                            <a href="https://site-psicologia-sigma.vercel.app/" className='flex gap-2 items-center' target="_blank">Ver Site <SquareArrowOutUpRight size={15} /></a>
                            <a href="https://github.com/DeangellesES/site_psicologia-React-TypeScript-Vite" className='flex gap-2 items-center' target="_blank">Código <Github size={15} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300/20 rounded-2xl w-[35%] bg-[#0d0d0d]'>
                    <div className='h-57 overflow-hidden rounded-t-2xl'>
                        <Image
                            src="/academia.png"
                            alt="oficina mecanica"
                            width={300}
                            height={100}
                            className='w-full h-full object-cover object-top'
                        />
                    </div>
                    <div className='p-5'>
                        <h1 className='text-2xl'>Site para uma Academia</h1>
                        <p className='py-3 text-[#a1a1a1]'>
                            Aplicação front-end criada para academia, estruturada para exibir planos, equipamentos, treinadores especializados, curiosidades, imagens do ambiente e informações de contato e localização.                        </p>
                        <div className='flex gap-3'>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>React</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Styled-Components</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300 font-bold'>Vite</p>

                        </div>
                        <div className='flex gap-10 justify-center mt-5'>
                            <a href="https://site-academia-react-js-vite.vercel.app/" className='flex gap-2 items-center' target="_blank">Ver Site <SquareArrowOutUpRight size={15} /></a>
                            <a href="https://github.com/DeangellesES/site_academia-ReactJS-Vite" className='flex gap-2 items-center' target="_blank">Código <Github size={15} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <a href='https://github.com/DeangellesES' target="_blank" className='flex justify-center mt-10 text-xl items-center gap-3'>Veja mais Projetos em meu GitHub <SquareArrowOutUpRight size={15} /></a>
        </section>
    )
}

export default Projetos