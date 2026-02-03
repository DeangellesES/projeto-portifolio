import GradientText from '../GradientText'

type Props = {
    titulo : string;
    subtitulo: string;
}

function Projetos({titulo, subtitulo}: Props) {
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
        </section>
    ) 
}

export default Projetos