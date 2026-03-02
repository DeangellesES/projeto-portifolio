//efeito encriptogrando
import DecryptedText from '../DecryptedText'

// tradução
type Props = {
    desenvolvido: string;
};

function Rodape({ desenvolvido }: Props) {
    return (
        <footer className="text-center py-5 border-t border-gray-700/20">
            <p className='text-sm'>

                <DecryptedText
                    text={desenvolvido}
                    animateOn="hover"
                    revealDirection="start"
                    speed={80}
                    maxIterations={15}
                    className="text-sm"
                />
                
            </p>
        </footer>
    )
}

export default Rodape