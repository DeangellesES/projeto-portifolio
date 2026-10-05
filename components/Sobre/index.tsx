import GradientText from '../GradientText'
import Image from "next/image";
import { GraduationCap } from 'lucide-react';

function Sobre() {
    return (
        <section className="h-screen py-30 px-15">

            <h1 className="text-center text-5xl"><GradientText
                colors={["#160070", "#d1d1d1"]}
                animationSpeed={4}
                showBorder={false}
            >
                Sobre Mim
            </GradientText></h1>
            <div className="flex justify-around gap-20 px-10 items-center h-full">
                <div className="w-[30%]">
                    <Image
                        src="/sobre-portifolio.jpeg"
                        alt="Foto de perfil"
                        width={400}
                        height={300}
                        className="rounded-3xl"
                    />
                </div>
                <div className="w-[70%]">

                    <p></p>
                    <div className='border border-gray-300/20 w-fit [box-shadow:0_0_10px_rgba(255,255,255,0.8)] py-3 px-5 mt-6 text-center rounded-3xl bg-[#0d0d0d]'>
                        <h2 className='text-lg font-bold'>Formação</h2>
                        <div className="flex justify-center my-2">
                            <GraduationCap size={35}/>
                        </div>
                        <p>Engenharia de Software</p>
                        <p className='text-sm text-[#a1a1a1]'>Concluído</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Sobre