import GradientText from '../GradientText'


export default function Experiencia() {
    return (
        <section>
            <h1
                className='text-center text-5xl'
            >
                <GradientText
                    colors={["#160070", "#d1d1d1"]}
                    animationSpeed={4}
                    showBorder={false}
                >
                    Experiência
                </GradientText>
            </h1>

            <p className='text-center text-[#a1a1a1] text-xl w-[60%] m-auto'>
                Cada projeto trouxe um desafio, cada desafio trouxe aprendizado e cada experiência ajudou a construir quem sou como desenvolvedor.
            </p>
        </section>
    )
}