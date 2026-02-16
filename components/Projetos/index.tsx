import GradientText from '../GradientText'
import Image from "next/image"


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

            <div className='flex justify-center gap-10 mt-15'>
                <div className='border border-gray-300/20 rounded-2xl w-[35%]'>
                    <Image
                        src="/oficinamecanica.png"
                        alt="oficina mecanica"
                        width={300}
                        height={100}
                        className='w-full rounded-2xl '
                    />
                    <div className='p-7'>
                        <h1 className='text-2xl'>Site para uma Oficina Mecânica</h1>
                        <p className='py-3 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates aperiam eum quam porro quia minus totam ab aut temporibus nisi quibusdam, asperiores, necessitatibus odio nesciunt sapiente? Molestias consequuntur eius inventore.</p>
                        <div className='flex gap-3'>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>React</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Styled-Components</p>
                            <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Vite</p>
                            <p></p>
                        </div>
                    </div>

                </div>
                <div>
                    <Image
                        src="/oficina-mecanica.png"
                        alt="oficina mecanica"
                        width={400}
                        height={400}

                    />
                    <h1>Site para uma Oficina Mecânica</h1>
                    <p></p>
                    <div className='flex'>
                        <p>React</p>
                        <p>Styled-Components</p>
                        <p>Vite</p>
                        <p></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projetos