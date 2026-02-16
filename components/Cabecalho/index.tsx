"use client";

import { useState } from "react";
import { Linkedin, Github, Menu, X } from "lucide-react";
import ThemeSwitcher from "../theme-switcher";
import { LanguageSwitcher } from "../LanguageSwitcher";

type Props = {
    text: {
        inicio: string;
        sobre: string;
        habilidades: string;
        projetos: string;
        contato: string;
    };
    lang: "pt" | "en";
    setLang: React.Dispatch<React.SetStateAction<"pt" | "en">>;
};

function Cabecalho({ text, lang, setLang }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-black/60 backdrop-blur-md border-b border-gray-300/20">
            <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 h-14 sm:h-16">

                {/* ESQUERDA – linkedin e github */}
                <div className="flex gap-3">
                    <a
                        href="https://www.linkedin.com/in/felipe-deangelles-da-silva-lopes/"
                        className="text-[#a1a1a1] hover:text-[#002080] transition"
                        target="_blank"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href="https://github.com/DeangellesES"
                        className="text-[#a1a1a1] hover:text-white transition"
                        target="_blank"
                    >
                        <Github />
                    </a>
                </div>

                {/* MEIO – links (desktop) */}
                <nav className="hidden md:flex gap-6 text-white">
                    <a href="#inicio" className="hover:text-[#acacac] transition">
                        {text.inicio}
                    </a>
                    <a href="#habilidades" className="hover:text-[#acacac] transition">
                        {text.habilidades}
                    </a>
                    <a href="#projetos" className="hover:text-[#acacac] transition">
                        {text.projetos}
                    </a>
                    <a href="#contato" className="hover:text-[#acacac] transition">
                        {text.contato}
                    </a>
                </nav>

                {/* DIREITA – tema, idioma e hamburger */}
                <div className="flex items-center gap-3">
                    <ThemeSwitcher />
                    <LanguageSwitcher lang={lang} setLang={setLang} />

                    {/* botão hamburger (mobile) */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MENU MOBILE – apenas links do meio */}
            <nav
                className={`
          md:hidden
          bg-black/90 backdrop-blur-md
          border-t border-gray-300/20
          transition-all duration-300
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
            >
                <ul className="flex flex-col items-center gap-5 py-6 text-white">
                    <li>
                        <a href="#inicio" onClick={() => setOpen(false)}>
                            {text.inicio}
                        </a>
                    </li>
                    <li>
                        <a href="#habilidades" onClick={() => setOpen(false)}>
                            {text.habilidades}
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" onClick={() => setOpen(false)}>
                            {text.projetos}
                        </a>
                    </li>
                    <li>
                        <a href="#contato" onClick={() => setOpen(false)}>
                            {text.contato}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;
