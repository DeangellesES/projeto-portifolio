import './index.css'
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight, Dot, Clock4, SquareCode, BriefcaseBusiness, SquareArrowOutUpRight, Send   } from 'lucide-react';

type Props = {
  titulo: string;
  subtitulo: string;
  descricao: string;
  telefone: string;
  localizacao: string;
  endereco: string;
  nome: string;
  assunto: string;
  mensagem : string;
  enviar : string;
  disponivel: string;
  resposta: string;
  horas: string;
  respondo: string;
  pronto: string;
  transformar : string;
  conversar: string;
  envieMe: string;
};

function Contato({ titulo, subtitulo, descricao, telefone, localizacao, endereco, nome, assunto, mensagem, enviar, disponivel, resposta, horas, respondo, pronto, transformar, conversar, envieMe }: Props) {
    return (
        <section className='py-15 px-15'>
            <h1 className='text-center text-5xl mb-8'>{titulo}</h1>
            <div className='grid grid-cols-2 gap-20'>
                <div className='w-[80%]'>
                    <h2 className='text-3xl font-bold'>{subtitulo}</h2>
                    <p className='text-lg py-5 text-[#a1a1a1]'>{descricao}</p>
                    <div className='grid gap-3'>
                        <div className='flex items-center gap-4'>
                            <Mail className='contato-icones' />
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold'>Email</h1>
                                <p className='text-xl text-[#a1a1a1]'>FelipeDeangelles@hotmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Phone className='contato-icones' />
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold'>{telefone}</h1>
                                <p className='text-xl text-[#a1a1a1]'>+55 (35) 99763-1949</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MapPin className='contato-icones' />
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-bold'>{localizacao}</h1>
                                <p className='text-xl text-[#a1a1a1]'>{endereco}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Linkedin className='contato-icones' />
                            <h1 className='text-2xl font-bold flex items-center gap-3'>Linkedin <ArrowRight /></h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Github className='contato-icones' />
                            <h1 className='text-2xl font-bold flex items-center gap-3'>GitHub <ArrowRight /></h1>
                        </div>
                    </div>
                </div>

                <div>
                    <form action="" className='border border-gray-700/40 p-8 rounded-2xl flex flex-col gap-2'>
                        <label for="name" data-i18n="nome" className='text-xl font-bold'>{nome}</label>
                        <input type="text" id="name" name="name" required className='bg-white p-2 rounded-md border border-gray-700/20'></input>

                        <label for="email" className='text-xl font-bold'>Email</label>
                        <input type="email" id="email" name="email" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></input>

                        <label for="subject" data-i18n="assunto" className='text-xl font-bold'>{assunto}</label>
                        <input type="text" id="subject" name="subject" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></input>

                        <label for="menssage" data-i18n="mensagem" className='text-xl font-bold'>{mensagem}</label>
                        <textarea name="message" id="message" rows="6" required className='bg-[#fff] p-2 rounded-md border border-gray-700/20'></textarea>
                       
                        <a href="" className='text-center bg-white text-black py-3 text-xl font-bold rounded-md mt-2 border border-gray-700/20 flex items-center justify-center gap-2'>{enviar} <Send /></a>
                    </form>
                </div>
            </div>

            <div className='mt-10'>
                <p className='text-green-600 border border-green-600/30 rounded-3xl w-fit flex items-center mx-auto pr-6'><Dot size={45} className="animate-pulse" />{disponivel}</p>

                <div className='flex gap-5 text-center items-center mt-5 justify-center'>
                    <div className='flex flex-col gap-2 border border-gray-500/20 p-4 rounded-3xl h-fit w-[22rem]'>
                        <Clock4 size={50} className='mx-auto font-bold'/>
                        <h2 className='font-bold text-2xl'>{resposta}</h2>
                        <p className='text-[#a1a1a1]'>{horas}</p>
                        <p className='text-[#a1a1a1]'>{respondo}</p>
                    </div>

                    <div className='flex flex-col gap-2 border border-gray-500/20 p-4 rounded-3xl w-[29rem]'>
                        <SquareCode size={50} className='mx-auto'/>
                        <h2 className='font-bold text-2xl'>{pronto}</h2>
                        <p className='text-[#a1a1a1]'>{transformar}</p>
                        <a href="" className='text-[blue] flex gap-2 items-center mx-auto'><SquareArrowOutUpRight size={17}/> {conversar}</a>
                        <p className='text-[#a1a1a1]'>{envieMe}</p>
                    </div>

                    <div className='flex flex-col gap-2 border border-gray-500/20 p-4 rounded-3xl h-fit w-[22rem]'>
                        <BriefcaseBusiness size={50} className='mx-auto'/>
                        <h2 className='font-bold text-2xl'>Aberto a Oportunidades</h2>
                        <p className='text-[#a1a1a1]'>Crescimento profissional</p>
                        <p className='text-[#a1a1a1]'>Disponível para início imediato (remoto, presencial ou híbrido).</p>
                    </div>
                </div>

            </div>

        </section>
    )

}

export default Contato