import { PanelsTopLeft, CodeXml, Database, Wrench, Smartphone, Monitor } from 'lucide-react';
import './habilidades.css'

type Props = {
  t: {
    titulo: string;
    subtitulo: string;
    frontend: { titulo: string; descricao: string };
    backend: { titulo: string; descricao: string };
    ferramentas: { titulo: string; descricao: string };
    banco: { titulo: string; descricao: string };
    mobile: { titulo: string; descricao: string };
    desktop: { titulo: string; descricao: string };
  };
};

function Habilidades({ t }: Props) {
    return (
        <section className='py-4 px-4'>
            <h1 className="text-center text-5xl">{t.titulo}</h1>
            <p className="text-center text-[#a1a1a1]">{t.subtitulo}</p>

            <div className="grid grid-cols-3 mt-5 justify-center w-full px-10 gap-6">
                <div className="border border-gray-300/20 p-8 rounded-2xl h-auto bg-[#0d0d0d]">
                    <h1 className='flex items-center gap-3 font-bold text-2xl text-white'><PanelsTopLeft className='habilidades-icones' />{t.frontend.titulo}</h1>
                    <p className='text-gray-400 my-4'>{t.frontend.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>HTML5</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>CSS3</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>React.js</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Next.js</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Sass</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Tailwind</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Boostrap</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Vue.js</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>JavaScript</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>TypeScript</p>
                    </div>
                </div>

                <div className="border border-gray-300/20 p-8 rounded-2xl h-auto bg-[#0d0d0d]">
                    <h1 className='flex items-center gap-3 font-bold text-2xl text-white'><CodeXml className='habilidades-icones' /> {t.backend.titulo}</h1>
                    <p className='text-gray-400 my-4'>{t.backend.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Node.js</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>C#</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Express</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Mongoose</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>REST API</p>
                    </div>
                </div>

                <div className="border border-gray-300/20 p-8 rounded-2xl h-auto bg-[#0d0d0d]">
                    <h1 className='flex items-center gap-3 font-bold text-2xl text-white'><Wrench className='habilidades-icones' />{t.ferramentas.titulo}</h1>
                    <p className='text-gray-400 my-4'>{t.ferramentas.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Git</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>GitHub</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Postman</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>VS Code</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Visual Studio</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Android Studio</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>MySQL Workbench</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Oracle VirtualBox</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Trello</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Astah</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Docker</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>GPT</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>Lovable</p>
                    </div>
                </div>

                <div className="border border-gray-300/20 p-8 rounded-2xl h-auto bg-[#0d0d0d]">
                    <h1 className='flex items-center gap-3 font-bold text-2xl text-white'><Database className='habilidades-icones' />{t.banco.titulo}</h1>
                    <p className='text-gray-400 my-4'>{t.banco.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>SQL</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>MySQL</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>MongoDB</p>
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>PostgreSQL</p>
                    </div>
                </div>

                <div className="border border-gray-300/20 p-8 rounded-2xl h-auto bg-[#0d0d0d]">
                    <h1 className='flex items-center gap-3 font-bold text-2xl text-white'><Smartphone className='habilidades-icones' />{t.mobile.titulo}</h1>
                    <p className='text-gray-400 my-4'>{t.mobile.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>React Native</p>
                    </div>
                </div>

                <div className="border border-gray-300/20 p-8 rounded-2xl h-auto bg-[#0d0d0d]">
                    <h1 className='flex items-center gap-3 font-bold text-2xl text-white'><Monitor className='habilidades-icones' />{t.desktop.titulo}</h1>
                    <p className='text-gray-400 my-4'>{t.desktop.descricao}</p>
                    <div className="flex flex-wrap gap-2">
                        <p className='rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300'>C#</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Habilidades 