import GradientText from '../GradientText'
import Image from "next/image";

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
            <div className="flex justify-around gap-10 px-10 items-center h-full">
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

                    <p>Sou um desenvolvedor Full-Stack focado em criar soluções digitais eficientes, escaláveis e com excelente experiência de uso. Trabalho com tecnologias modernas no front e no back-end e tenho experiência entregando melhorias reais, desde otimizações de performance até a construção de sistemas completos do zero.</p>
                    <div className='border border-gray-300/20 w-fit p-7 mt-4'>
                        <h2>Formação</h2>
                        <p>Engenharia de Software</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre