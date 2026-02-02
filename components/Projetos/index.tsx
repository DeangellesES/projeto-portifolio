import GradientText from '../GradientText'

function Projetos() {
    return (
        <section className='h-auto my-20' id='projetos'>
            <h1 className="text-center text-5xl leading-tight"><GradientText
                colors={["#160070", "#d1d1d1"]}
                animationSpeed={4}
                showBorder={false}
            >
                Projetos
            </GradientText></h1>
            <p className="m-auto text-center text-[#a1a1a1] text-xl w-[60%]">Ideias que viraram código, telas que ganham vida e experiências que funcionam de verdade. Aqui você encontra o que gosto de fazer transformar ideias em soluções impactantes.</p>
        </section>
    )
}

export default Projetos