"use client";

import { useEffect, useState } from "react";
//icones
import { Linkedin, Github, Menu, X } from "lucide-react";
//mudar cor tema
import ThemeSwitcher from "../theme-switcher";
//raduzir linguas
import { LanguageSwitcher } from "../LanguageSwitcher";

type Props = {
    text: {
        inicio: string;
        sobre: string;
        habilidades: string;
        projetos: string;
        experiencias: string;
        contato: string;
    };
    lang: "pt" | "en";
    setLang: React.Dispatch<React.SetStateAction<"pt" | "en">>;
};

function Cabecalho({ text, lang, setLang }: Props) {
    // botao menu da responsividade
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
 
    return (
        <header className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-md border-b border-border/60 shadow-sm dark:shadow-none" : ""}`}>
            <div className="relative flex items-center justify-between sm:py-8 px-4 sm:px-8 md:px-12 lg:px-20 h-14 sm:h-16">

                {/* ESQUERDA – linkedin e github */}
                <div className="flex gap-3">
                    <a
                        href="https://www.linkedin.com/in/felipe-deangelles-da-silva-lopes/"
                        className="text-muted-foreground hover:text-[#002080] dark:hover:text-white transition"
                        target="_blank"
                    >
                        <Linkedin />
                    </a>

                    <a
                        href="https://github.com/DeangellesES"
                        className="text-muted-foreground hover:text-foreground dark:hover:text-white transition"
                        target="_blank"
                    >
                        <Github />
                    </a>
                </div>

                {/* MEIO – links (desktop) */}
                <nav className="hidden md:flex items-center gap-8 text-foreground absolute left-1/2 -translate-x-1/2">
                    <a
                        href="#inicio"
                        className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/60 transition-colors"
                    >
                        {text.inicio}
                    </a>
                    <a
                        href="#sobre"
                        className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/60 transition-colors"
                    >
                        {text.sobre}
                    </a>
                    <a
                        href="#habilidades"
                        className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/60 transition-colors"
                    >
                        {text.habilidades}
                    </a>
                    <a
                        href="#projetos"
                        className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/60 transition-colors"
                    >
                        {text.projetos}
                    </a>
                    <a
                        href="#experiencias"
                        className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/60 transition-colors"
                    >
                        {text.experiencias}
                    </a>
                    <a
                        href="#contato"
                        className="text-sm font-medium tracking-wide text-foreground hover:text-foreground/60 transition-colors"
                    >
                        {text.contato}
                    </a>
                </nav>

                {/* DIREITA – tema, idioma e hamburger */}
                <div className="flex items-center gap-3">
                    {/* botao mudar tema */}
                    <ThemeSwitcher />
                    {/* botoes mudar lingua */}
                    <LanguageSwitcher lang={lang} setLang={setLang} />

                    {/* botão hamburger (mobile) */}
                    <button
                        className="md:hidden text-foreground transition-colors hover:text-muted-foreground"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* responsividade MENU MOBILE – apenas links do meio */}
            <nav className={`md:hidden bg-background/95 dark:bg-black/90 backdrop-blur-md border-t border-border/60
                             transition-all duration-300
                             ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
                            `}
            >
                {/* lista links cabecalho navegacao */}
                <ul className="flex flex-col items-center gap-5 py-6 text-foreground">
                    <li>
                        <a href="#inicio" className="hover:text-muted-foreground transition-colors" onClick={() => setOpen(false)}>
                            {text.inicio}
                        </a>
                    </li>
                    <li>
                        <a href="#habilidades" className="hover:text-muted-foreground transition-colors" onClick={() => setOpen(false)}>
                            {text.habilidades}
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" className="hover:text-muted-foreground transition-colors" onClick={() => setOpen(false)}>
                            {text.projetos}
                        </a>
                    </li>
                    <li>
                        <a href="#contato" className="hover:text-muted-foreground transition-colors" onClick={() => setOpen(false)}>
                            {text.contato}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;
