import GradientText from '../GradientText'
import Image from "next/image";
import { GraduationCap } from 'lucide-react';
import GhostFibers from '../GhostFibers';

function Sobre() {
    return (
        <section className="h-screen py-15 px-15">

            <h1 className="text-center text-5xl"><GradientText
                colors={["#160070", "#d1d1d1"]}
                animationSpeed={4}
                showBorder={false}
            >
                Sobre Mim
            </GradientText></h1>
            <p className='text-center text-[#a1a1a1] text-xl'>Apresentação Pessoal</p>
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

                    <p>Meu nome é Felipe Deangelles, sou formado em Engenharia de Software, desde muito novo eu sempre gostei e ficava adimirado e encantado por tecnologia e computadores, com o passar do tempo minha curiosidade e interesse foi só aumentando, cada vez mais eu ficava mais facinado e queria saber como tudo isso funcionava, a ponto de quere ser a pessoa por tras disso, desenvolvendo toda essa tecnologia, tenho muita vontade de aprender e estou sempre estudando, me aperfeiçoando, evoluindo e buscando ser cada vez melhor para conseguir dominar e desenvolver sistemas complexos, desenvolver soluções, experiências incríveis, ajudar pessoas alcancarem seus objetivos atravez do meu trabalho que gosto tanto e fazer o que mais gosto. </p>

                    <div className="relative w-[270px] overflow-hidden rounded-3xl border border-gray-300/20 mt-8">

                        {/* GhostFibers */}
                        <div className="absolute inset-0">
                            <GhostFibers
                                lineColor="#140E35"
                                glowColor="#3437A0"
                                speed={0.2}
                                scale={2}
                                rotation={0}
                                rotationSpeed={0.25}
                                layers={4}
                                waveAmplitude={0.015}
                                waveFrequency={3}
                                waveSpeed={0.15}
                                layerSpeed={0.08}
                                twist={0.1}
                                twistFrequency={5}
                                twistSpeed={1.2}
                                lineFrequency={5}
                                lineSpacing={2}
                                lineSharpness={16}
                                glowFalloff={10}
                                glowIntensity={1.6}
                                brightness={2}
                                blueBoost={1.25}
                                vignette={0.8}
                                grain={0.05}
                                dpr={1}
                                lightMode={false}
                                fps={60}
                                paused={false}
                            />
                        </div>

                        {/* Card */}
                        <div className="relative z-10 p-4 text-center bg-[#0d0d0d]/60 backdrop-blur-[2px]">

                            <h2 className="text-lg font-bold">
                                Formação
                            </h2>

                            <div className="flex justify-center my-2">
                                <GraduationCap size={35} />
                            </div>

                            <p>
                                Engenharia de Software
                            </p>

                            <p className="text-sm text-[#a1a1a1]">
                                Concluído
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre