import { Linkedin, Github, Sun } from 'lucide-react';
import ThemeSwitcher from '../theme-switcher';
import { LanguageSwitcher } from '../LanguageSwitcher';

type Props = {
    text: {
        inicio: string;
        sobre: string;
        habilidades: string;
        projetos: string;
        contato: string;
    }; 
    lang: 'pt' | 'en';
    setLang: React.Dispatch<React.SetStateAction<'pt' | 'en'>>;
};

function Cabecalho({ text, lang, setLang }: Props) {
    return (
        <header className="border-b border-gray-300/20 fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-10 flex items-center justify-between px-20">
            <div className='flex gap-3'>
                <a href="https://www.linkedin.com/in/felipe-deangelles-da-silva-lopes/" className='hover:text-[#002080] text-[#a1a1a1]' target="_blank"><Linkedin /></a>
                <a href="https://github.com/DeangellesES" className='text-[#a1a1a1] hover:text-[#fff]' target="_blank"><Github /></a>
            </div>

            <nav className="flex justify-center gap-6 py-5 ">
                <a href="" className="hover:text-[#acacac] text-white">{text?.inicio ?? "..."}</a>
                {/* <a href="" className="hover:text-[#acacac] text-white">{text?.sobre ?? "..."}</a> */}
                <a href="#habilidades" className="hover:text-[#acacac] text-white">{text?.habilidades ?? "..."}</a>
                <a href="" className="hover:text-[#acacac] text-white">{text?.projetos ?? "..."}</a>
                <a href="#contato" className="hover:text-[#acacac] text-white">{text?.contato ?? "..."}</a>
            </nav>

            <div className='flex items-center gap-3'>
                <ThemeSwitcher />
                <LanguageSwitcher lang={lang} setLang={setLang} />
            </div>
        </header>
    )
}

export default Cabecalho