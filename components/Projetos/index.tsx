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

            <div className='flex justify-center gap-15 mt-15'>
                <div className='border border-gray-300/20 rounded-2xl w-[35%]'>
                    <Image
                        src="/oficina-mecanica0.png"
                        alt="oficina mecanica"
                        width={300}
                        height={100}
                        className='w-full rounded-t-lg '
                    />
                    <div className='p-7'>
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
                <div className='border border-gray-300/20 rounded-2xl w-[35%]'>
                    <div className='h-57 overflow-hidden rounded-t-2xl'>
                        <Image
                            src="/clinica-veterinaria.png"
                            alt="oficina mecanica"
                            width={300}
                            height={100}
                            className='w-full h-full object-cover object-top'
                        />
                    </div>
                    <div className='p-7'>
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
            </div>

        </section>
    )
}

export default Projetos