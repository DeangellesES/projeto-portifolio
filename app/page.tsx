'use client';

import { useState } from 'react';
import { translations } from '../translations';
import { LanguageSwitcher } from '../components/LanguageSwitcher';


import Cabecalho from "@/components/Cabecalho";
import Contato from "@/components/Contato";
import Habilidades from "@/components/Habilidades";
import Inicio from "@/components/Inicio";
import Rodape from "@/components/Rodape";
import Sobre from '@/components/Sobre';


export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt'); // idioma inicial
  const t = translations[lang];

  return (
    <>
      <Cabecalho text={t.cabecalho} lang={lang} setLang={setLang} />
      <Inicio texts={t.inicio.textos}
        sobre={t.inicio.sobre}
        downloadText={t.inicio.download}
        conversarText={t.inicio.conversar} />
      {/* <Sobre/> */}
      <Habilidades t={t.habilidades} />
      <Contato titulo={t.contato.titulo}
        subtitulo={t.contato.subtitulo} descricao={t.contato.descricao} telefone={t.contato.telefone}
        localizacao={t.contato.localizacao}
        endereco={t.contato.endereco}
        nome={t.contato.nome}
        assunto={t.contato.assunto}
        mensagem={t.contato.mensagem}
        enviar={t.contato.enviar}
        disponivel={t.contato.disponivel}
        resposta={t.contato.resposta}
        horas={t.contato.horas}
        respondo={t.contato.respondo}
        pronto={t.contato.pronto}
        transformar={t.contato.transformar}
        conversar={t.contato.conversar}
        envieMe={t.contato.envieMe}
        oportunidades={t.contato.oportunidades}
        crescimento={t.contato.crescimento}
        imediato={t.contato.imediato} />
      <Rodape desenvolvido={t.rodape.desenvolvido} />
    </>
  )
}
