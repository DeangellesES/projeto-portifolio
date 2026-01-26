import { PanelsTopLeft, CodeXml, BookOpenCheck, Wrench, Smartphone, Monitor } from 'lucide-react';
import './habilidades.css'

import GradientText from '../GradientText'

type Props = {
    t: {
        titulo: string;
        subtitulo: string;
        frontend: { titulo: string; descricao: string };
        backend: { titulo: string; descricao: string };
        ferramentas: { titulo: string; descricao: string };
        agil: { titulo: string; descricao: string };
        mobile: { titulo: string; descricao: string };
        desktop: { titulo: string; descricao: string };
    };
};

function Habilidades({ t }: Props) {

    const skills = [
        {
            key: 'frontend',
            title: (t: any) => t.frontend.titulo,
            description: (t: any) => t.frontend.descricao,
            icon: PanelsTopLeft,
            iconColor: 'text-blue-500',
            shadowColor: '59,130,246',
            items: [
                'HTML5', 'CSS3', 'React.js', 'Next.js', 'Sass', 'Tailwind CSS',
                'Bootstrap', 'Shadcn', 'JavaScript', 'TypeScript', 'Styled-Compnents'
            ],
        },
        {
            key: 'backend',
            title: (t: any) => t.backend.titulo,
            description: (t: any) => t.backend.descricao,
            icon: CodeXml,
            iconColor: 'text-green-500',
            shadowColor: '34,197,94',
            items: ['Node.js', 'C#', 'Express', 'Mongoose', 'REST API', 'MySQL', 'MongoDB', 'PostgreSQL'],
        },
        {
            key: 'ferramentas',
            title: (t: any) => t.ferramentas.titulo,
            description: (t: any) => t.ferramentas.descricao,
            icon: Wrench,
            iconColor: 'text-yellow-500',
            shadowColor: '234,179,8',
            items: [
                'Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio',
                'Android Studio', 'MySQL Workbench', 'Oracle VirtualBox',
                'Trello', 'Astah', 'Docker', 'GPT', 'Lovable',
            ],
        },
        {
            key: 'agil',
            title: (t: any) => t.agil.titulo,
            description: (t: any) => t.agil.descricao,
            icon: BookOpenCheck,
            iconColor: 'text-purple-500',
            shadowColor: '168,85,247',
            items: ['Srum', 'Kanban'],
        },
        {
            key: 'mobile',
            title: (t: any) => t.mobile.titulo,
            description: (t: any) => t.mobile.descricao,
            icon: Smartphone,
            iconColor: 'text-red-500',
            shadowColor: '239,68,68',
            items: ['React Native'],
        },
        {
            key: 'desktop',
            title: (t: any) => t.desktop.titulo,
            description: (t: any) => t.desktop.descricao,
            icon: Monitor,
            iconColor: 'text-cyan-500',
            shadowColor: '6,182,212',
            items: ['C#'],
        },
    ];


    return (
        <section className='py-4 px-4' id='habilidades'>
            <h1 className="text-center text-5xl"><GradientText
                colors={["#160070", "#d1d1d1"]}
                animationSpeed={4}
                showBorder={false}
            >
                {t.titulo}
            </GradientText></h1>
            <p className="text-center text-[#a1a1a1] text-2xl">{t.subtitulo}</p>

            <div className="grid grid-cols-3 mt-10 justify-center w-full px-10 gap-6">
                {skills.map((skill) => {
                    const Icon = skill.icon

                    return (
                        <div
                            key={skill.key}
                            style={{
                                '--shadow-color': skill.shadowColor,
                            } as React.CSSProperties}

                            className="border border-gray-300/20 p-8 rounded-2xl bg-[#0d0d0d] group transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(var(--shadow-color),0.35)]"
                        >
                            <h1 className="flex items-center gap-3 font-bold text-2xl text-white">
                                <span
                                    className={`
                                        flex items-center justify-center
                                        h-14 w-14
                                        rounded-xl
                                        bg-gray-800
                                        transition-transform duration-300
                                        group-hover:scale-125
                                    `}
                                >
                                    <Icon className={`h-9 w-9 ${skill.iconColor}`} />
                                </span>
                                {skill.title(t)}
                            </h1>

                            <p className="text-gray-400 my-4">
                                {skill.description(t)}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <p
                                        key={item}
                                        className="rounded-2xl bg-[#262626] border border-gray-300/20 px-2 py-1 text-xs text-gray-300"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Habilidades 