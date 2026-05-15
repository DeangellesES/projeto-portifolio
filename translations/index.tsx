export const translations = {
  pt: {
    cabecalho: {
      inicio: "Início",
      sobre: "Sobre",
      habilidades: "Habilidades",
      projetos: "Projetos",
      contato: "Contato",
    },
    inicio: {
      textos: [
        "Olá, Meu Nome é Felipe Deangelles",
        "Sou Desenvolvedor de Software",
        "Estou Graduando Engenharia de Software",
        "Seja Bem-Vindo ao Meu Portfólio!",
      ],
      sobre: 'Sou um desenvolvedor Full-Stack apaixonado em criar soluções digitais eficientes, escaláveis e com excelente experiência de uso.',
      download: "Download Currículo",
      conversar: "Vamos Conversar",
    },
    habilidades: {
      titulo: 'Minhas Habilidades',
      subtitulo: 'Tecnologias e ferramentas que domino para criar experiências incríveis',

      frontend: {
        titulo: 'Front-End',
        descricao: 'Criação de interfaces modernas e interativas.',
      },
      backend: {
        titulo: 'Back-End',
        descricao: 'Desenvolvimento de lógica e APIs eficientes.',
      },
      ferramentas: {
        titulo: 'Ferramentas',
        descricao: 'O essencial para criar, evoluir e entregar soluções digitais.',
      },
      agil: {
        titulo: 'Metodologias Ágeis',
        descricao: 'Desenvolvimento iterativo com foco em entrega e adaptação.',
      },
      mobile: {
        titulo: 'Mobile',
        descricao: 'Conhecimento para criar experiências mobile modernas.',
      },
      desktop: {
        titulo: 'Desktop',
        descricao: 'Transformando ideias em aplicações desktop sólidas e funcionais.',
      },
    },
    projetos: {
      titulo: "Projetos",
      subtitulo: "Ideias que viraram código, telas que ganham vida e experiências que funcionam de verdade. Aqui você encontra o que gosto de fazer transformar ideias em soluções impactantes.",
      categoriaAplicativo: "Aplicativos",
      verMaisGitHub: "Veja mais Projetos em meu GitHub",
      projetosFront: [
        {
          titulo: "Site para uma Oficina Mecânica",
          descricao: "Site informacional para oficina mecânica, apresentando serviços, processos, localização, horários, preços e perguntas frequentes.",
          verSite: "Ver Site",
          codigo: "Ver Código",
          imagem: "/oficina-mecanica0.png",
          tecnologias: ["React", "Styled-Components", "Vite"],
          site: "https://site-oficina-mecanica.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/site_oficina_mecanica-ReactJS-Vite"
        },
        {
          titulo: "Site para uma Clínica Veterinária",
          descricao: "Aplicação front-end para clínica veterinária, estruturada para exibir serviços, especialidades, horários de atendimento e canais de contato.",
          verSite: "Ver Site",
          codigo: "Ver Código",
          imagem: "/clinica-veterinaria.png",
          tecnologias: ["React", "Styled-Components", "Vite"],
          site: "https://clinica-veterinaria-seven.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/clinica_veterinaria-ReactJs-Vite"
        },
        {
          titulo: "Site para uma Psicóloga",
          descricao: "Site informacional desenvolvido para psicólogo, apresentando áreas de atuação, abordagem terapêutica, horários e formas de contato.",
          verSite: "Ver Site",
          codigo: "Ver Código",
          imagem: "/psicologia.png",
          tecnologias: ["React", "Styled-Components", "TypeScript", "Vite"],
          site: "https://site-psicologia-sigma.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/site_psicologia-React-TypeScript-Vite"
        },
        {
          titulo: "Site para uma Academia",
          descricao: "Aplicação front-end criada para academia, estruturada para exibir planos, equipamentos, treinadores especializados, curiosidades, imagens do ambiente e informações de contato e localização.",
          verSite: "Ver Site",
          codigo: "Ver Código",
          imagem: "/academia.png",
          tecnologias: ["React", "Styled-Components", "Vite"],
          site: "https://site-academia-react-js-vite.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/site_academia-ReactJS-Vite"
        },
      ],
      projetosBack: [
        {
          titulo: "API para buscar CEP",
          descricao: "Projeto Back-End para buscar informações atravéz do CEP.",
          // verSite: "Ver App",
          codigo: "View Code",
          imagem: "/apiCEP.png",
          tecnologias: ["Node.Js", "express"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/api_busca_CEP-NodeJs-express-axios"
        },
      ],
      projetosFull: [
        {
          titulo: "Sistema para automatizar pizzaria",
          descricao: "Projeto Full-Stack e com Aplicativo, completo, para melhorar processo de pedidos dos clientes. Sistema de Registro e Login para a cozinha e para garçom para os pedidos feitos, e para criar o quanto login e registro for necessario e para quem quiser usar.",
          // verSite: "Ver App",
          codigo: "View Code",
          imagem: "/pizza.png",
          tecnologias: ["Next.Js", "TailwindCSS", "TypeScript", "Node.Js", "express", "PostgreSQL", "PrismaORM", "ReactNative"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/automatizar_pizzaria-TypeScript-Next.JS-TailwindCSS-Node.JS-Express-PostgreSQL-PrismaORM-ReactNative"
        },
        {
          titulo: "Sistema para organizar entretenimento",
          descricao: "Projeto Full-Stack para organizar entretenimento. Guarde e salve de onde voçê parou de assistir algo, e tambem organize o que voce pretende assistir. Sistema de registro e login para que cada um salve o seus proprios items apenas.",
          // verSite: "Ver App",
          codigo: "View Code",
          imagem: "/entretenimento.png",
          tecnologias: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.Js", "express", "MongoDB"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/guardar_entretenimento-Vite-React.Js-TailwindCSS-TypeScript-Node.Js-MongoDB"
        },
      ],
      projetosAplicativo: [
        {
          titulo: "App da Técnica Pomodoro e Lista de Tarefas",
          descricao: "Aplicativo de produtividade baseado na técnica Pomodoro para auxiliar no controle do tempo, foco e organização das atividades. Possui temporizador para ciclos de estudo ou trabalho e funcionalidade de criação de listas de tarefas para melhorar a produtividade e o gerenciamento da rotina.",
          verSite: "Ver App",
          codigo: "Ver Código",
          imagem: "/focus.png",
          tecnologias: ["React Native", "Expo"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/aplicativo_pomodoro_fokus-ReactNative"
        },
        {
          titulo: "App de Pedir Comida",
          descricao: "Aplicativo frontend de delivery desenvolvido para exibição de comidas, categorias e localização de restaurantes em uma interface simples e intuitiva. O projeto possui navegação entre categorias, listagem de produtos e visualização de informações de localização",
          verSite: "Ver App",
          codigo: "Ver Código",
          imagem: "/app-food-delivery.png",
          tecnologias: ["React Native", "Expo"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/aplicativo_delivery-ReactNative"
        },
        {
          titulo: "App de Dietas",
          descricao: "Aplicativo de dietas com inteligência artificial onde o usuário informa seus dados e objetivos, seleciona opções de acordo com seu perfil e, a partir dessas informações, a IA gera uma dieta personalizada. ",
          verSite: "Ver App",
          codigo: "Ver Código",
          imagem: "/appdieta.png",
          tecnologias: ["React Native", "Expo", "TypeScript", "Node.js", "Fastify", "GeminiAPI"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/aplicativo_dieta_com_IA_fullstack-ReactNative-Expo-NodeJS-Fastify-TypeScript-GeminiAPI"
        }
      ]
    },
    contato: {
      titulo: 'Vamos Conversar',
      subtitulo: 'Entre em Contato',
      descricao:
        'Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos criar algo incrível juntos! Entre em contato e vamos conversar!',
      telefone: 'Telefone',
      localizacao: 'Localização',
      endereco: 'Ouro Fino - Minas Gerais - Brasil',
      nome: 'Nome',
      placeholderNome: 'Seu Nome',
      placeholderEmail: 'Seu Email',
      assunto: 'Assunto',
      mensagem: "Mensagem",
      placeholderMensagem: 'Escreva uma Mensagem',
      enviar: "Enviar Mensagem",
      enviando: "Enviando ...",
      disponivel: 'Disponível para novos projetos',
      resposta: "Tempo de Resposta",
      horas: "Até 24 horas",
      respondo: "Respondo todas as mensagens em até 24 horas. Para urgências, prefira o WhatsApp.",
      pronto: "Pronto para começar seu projeto?",
      transformar: "Vamos transformar suas ideias em realidade. Entre em contato e vamos discutir como posso ajudar você.",
      conversar: 'Conversar no WhatsApp',
      envieMe: 'Ou me envie um Email ou entre em contato pelo Linkedin.',
      oportunidades: 'Aberto a Oportunidades',
      crescimento: 'Crescimento profissional',
      imediato: 'Disponível para início imediato (remoto, presencial ou híbrido).',
    },
    rodape: {
      desenvolvido: '© 2026 Felipe Deangelles. Desenvolvido com Next.js e Tailwind CSS.',
    }
  },

  en: {
    cabecalho: {
      inicio: "Home",
      sobre: "About",
      habilidades: "Skills",
      projetos: "Projects",
      contato: "Contact",
    },
    inicio: {
      textos: [
        "Hi, my name is Felipe Deangelles",
        "I am a Software Developer",
        "I am studying Software Engineering",
        "Welcome to my Portfolio!",
      ],
      sobre: 'I am a Full-Stack developer passionate about creating efficient, scalable digital solutions with an excellent user experience.',
      download: "Download Resume",
      conversar: "Let's Talk",
    },
    habilidades: {
      titulo: 'My Skills',
      subtitulo: 'Technologies and tools I use to build amazing experiences',

      frontend: {
        titulo: 'Front-End',
        descricao: 'Creation of modern and interactive interfaces.',
      },
      backend: {
        titulo: 'Back-End',
        descricao: 'Development of efficient logic and APIs.',
      },
      ferramentas: {
        titulo: 'Tools',
        descricao: 'Essential tools to build, evolve and deliver digital solutions.',
      },
      agil: {
        titulo: 'Agile Methodologies',
        descricao: 'Iterative development focused on delivery and adaptation.',
      },
      mobile: {
        titulo: 'Mobile',
        descricao: 'Knowledge to build modern mobile experiences.',
      },
      desktop: {
        titulo: 'Desktop',
        descricao: 'Turning ideas into solid and functional desktop applications.',
      },
    },
    projetos: {
      titulo: "Projects",
      subtitulo: "Ideas turned into code, screens brought to life, and experiences that truly work. Here you'll find what I love to do: transforming ideas into impactful solutions.",
      categoriaAplicativo: "Applications",
      verMaisGitHub: "See more Projects on my GitHub",
      projetosFront: [
        {
          titulo: "Website for a Mechanical Workshop",
          descricao: "Informational website for a mechanical workshop, presenting services, processes, location, hours, prices, and frequently asked questions.",
          verSite: "View Site",
          codigo: "View Code",
          imagem: "/oficina-mecanica0.png",
          tecnologias: ["React", "Styled-Components", "Vite"],
          site: "https://site-oficina-mecanica.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/site_oficina_mecanica-ReactJS-Vite"
        },
        {
          titulo: "Website for a Veterinary Clinic",
          descricao: "Front-end application for a veterinary clinic, structured to display services, specialties, operating hours, and contact channels.",
          verSite: "View Site",
          codigo: "View Code",
          imagem: "/clinica-veterinaria.png",
          tecnologias: ["React", "Styled-Components", "Vite"],
          site: "https://clinica-veterinaria-seven.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/clinica_veterinaria-ReactJs-Vite"
        },
        {
          titulo: "Website for a Psychologist",
          descricao: "Informational website developed for a psychologist, presenting areas of expertise, therapeutic approach, hours, and contact methods.",
          verSite: "View Site",
          codigo: "View Code",
          imagem: "/psicologia.png",
          tecnologias: ["React", "Styled-Components", "TypeScript", "Vite"],
          site: "https://site-psicologia-sigma.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/site_psicologia-React-TypeScript-Vite"
        },
        {
          titulo: "Website for a Gym",
          descricao: "Front-end application created for a gym, structured to display plans, equipment, specialized trainers, curiosities, environment images, and contact and location information.",
          verSite: "View Site",
          codigo: "View Code",
          imagem: "/academia.png",
          tecnologias: ["React", "Styled-Components", "Vite"],
          site: "https://site-academia-react-js-vite.vercel.app/",
          codigoLink: "https://github.com/DeangellesES/site_academia-ReactJS-Vite"
        },
      ],
      projetosBack: [
        {
          titulo: "API for searching ZIP codes",
          descricao: "Back-end project for retrieving information using ZIP codes.",
          // verSite: "Ver App",
          codigo: "View Code",
          imagem: "/apiCEP.png",
          tecnologias: ["Node.Js", "express"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/api_busca_CEP-NodeJs-express-axios"
        },
      ],
      projetosFull: [
        {
          titulo: "System for automating a pizzeria.",
          descricao: "Full-stack project with a complete application to improve the customer ordering process. Registration and login system for the kitchen and waiters for orders placed, and to create as many login and registration accounts as necessary for anyone who wants to use them.",
          // verSite: "Ver App",
          codigo: "View Code",
          imagem: "/pizza.png",
          tecnologias: ["Next.Js", "TailwindCSS", "TypeScript", "Node.Js", "express", "PostgreSQL", "PrismaORM", "ReactNative"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/automatizar_pizzaria-TypeScript-Next.JS-TailwindCSS-Node.JS-Express-PostgreSQL-PrismaORM-ReactNative"
        },
        {
          titulo: "System for organizing entertainment",
          descricao: "Full-stack project for organizing entertainment. Save and keep track of where you left off watching something, and also organize what you intend to watch. Registration and login system so that each user saves only their own items.",
          // verSite: "Ver App",
          codigo: "View Code",
          imagem: "/entretenimento.png",
          tecnologias: ["React", "Vite", "TailwindCSS", "TypeScript", "Node.Js", "express", "MongoDB"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/guardar_entretenimento-Vite-React.Js-TailwindCSS-TypeScript-Node.Js-MongoDB"
        },
      ],
      projetosAplicativo: [
        {
          titulo: "Pomodoro Technique App and To-Do List",
          descricao: "Mobile app for using the Pomodoro Technique to improve focus and manage tasks.",
          verSite: "Ver App",
          codigo: "View Code",
          imagem: "/focus.png",
          tecnologias: ["React Native", "Expo"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/aplicativo_pomodoro_fokus-ReactNative"
        },
        {
          titulo: "Food Ordering App",
          descricao: "Fictional Front-End Project for a food delivery app.",
          verSite: "Ver App",
          codigo: "Ver Código",
          imagem: "/app-food-delivery.png",
          tecnologias: ["React Native", "Expo"],
          site: "#",
          codigoLink: "https://github.com/DeangellesES/aplicativo_delivery-ReactNative"
        }
      ]
    },
    contato: {
      titulo: 'Let’s Talk',
      subtitulo: 'Get in touch',
      descricao:
        'I am always open to new opportunities and interesting projects. Let’s create something amazing together! Get in touch and let’s talk!',
      telefone: 'Telephone',
      localizacao: 'Location',
      endereco: 'Ouro Fino - Minas Gerais - Brazil',
      nome: 'Name',
      placeholderNome: 'Your Name',
      placeholderEmail: 'Your Email',
      assunto: 'Subject',
      mensagem: "Message",
      placeholderMensagem: 'Write a Message',
      enviar: "Send Message",
      enviando: "Sending ...",
      disponivel: 'Available for new projects',
      resposta: "Response Time",
      horas: "Up to 24 hours",
      respondo: "I respond to all messages within 24 hours. For urgent matters, please use WhatsApp.",
      pronto: "Ready to start your project?",
      transformar: "Let's turn your ideas into reality. Get in touch and let's discuss how I can help you.",
      conversar: 'Chat on WhatsApp',
      envieMe: 'Either send me an email or contact me through LinkedIn.',
      oportunidades: 'Open to Opportunities',
      crescimento: 'Professional growth',
      imediato: 'Available for immediate start (remote, in-person, or hybrid).'
    },
    rodape: {
      desenvolvido: '© 2026 Felipe Deangelles. Developed with Next.js and Tailwind CSS.',
    },
  },
};
