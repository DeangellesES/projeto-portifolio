type Props = {
  desenvolvido: string;
};

function Rodape ({desenvolvido }: Props) {
    return(
        <footer className="text-center py-5 border-t border-gray-700/20">
            <p className="text-sm">{desenvolvido}</p>
        </footer>
    )
}

export default Rodape