const PORTFOLIO_DATA = {
  // Dados pessoais
  profile: {
    name: "Cauã Abreu",
    role: "Desenvolvedor de Software Full Stack",
    intro:
      "Sou apaixonado por tecnologia e gosto de entender como as coisas funcionam por dentro. Hoje concentro meus estudos em desenvolvimento de software, construindo projetos que me ajudam a evoluir a cada linha de código.",
    highlight: "Disposto a aprender, resolver problemas e transformar ideias em soluções que funcionam.",
    email: "cauatt322@gmail.com",
    linkedin: "https://www.linkedin.com/in/cauã-abreu-431373263?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/CauaSilvaChz",
    openToWork: true,
  },

  // Sobre mim
  about: [
    {
      icon: "user",
      title: "Quem sou eu",
      text: "Desenvolvedor full-stack com quase 3 anos de experiência em estudos, projetos acadêmicos e pessoais. Trabalho principalmente com Laravel, TypeScript, React, NextJs e SQL. Sou um profissional dedicado, com facilidade para aprender, boa comunicação e motivação para evoluir e contribuir com soluções efcientes em equipe.",
    },
    {
      icon: "compass",
      title: "Minha trajetória",
      text: "Comecei programando com estudos autodidatas pela internet, motivado pela curiosidade em saber como os sistemas funcionam. Com o tempo busquei aprofundar meus conhecimentos por meio de um curso técnico (Desenvolvimento de sistemas) e em seguida uma faculdade (Ciência da computação), evoluindo e aplicando meus conhecimentos em projetos academicos e pessoais.",
    },
    {
      icon: "lightbulb",
      title: "Interesses",
      text: "Tenho interesse dentro da programação principalmente em desenvolvimento Web Full Stack. Estou sempre buscando aprender coisas novas, e os próximos temas que tenho interesse em aprender são machine learning, redes e inteligência artificial.",
    },
    {
      icon: "target",
      title: "Objetivo profissional",
      text: "Busco uma oportunidade na área de desenvolvimento, seja como back-end, front-end ou full stack. Quero algo que me permita aprender, crescer profissionalmente e contribuir com soluções eficientes. Quero aprimorar minhas habilidades como desenvolvedor, explorar áreas como inteligência artifical e colaborar com a equipe para resolver problemas e melhorar sistemas existentes.",
    },
    {
      icon: "layers",
      title: "Como eu trabalho",
      text: "Gosto de analisar os problemas e dividi-los em pequenas partes para encontrar soluções de forma organizada. Valorizo o trabalho em equipe, a comunicação e a troca de conhecimentos, buscando desenvolver softwares com bom desempenho, segurança e uma ótima experiência para o usuário. Sou dedicado, curioso e adaptável, sempre disposto a aprender novas tecnologias.",
    },
  ],

  //Categorias com "items" vazio não aparecem no site.
  skills: [
    {
      category: "Linguagens de programação",
      icon: "code",
      items: ["JavaScript", "TypeScript", "PHP", "Java", "SQL"],
    },
    {
      category: "Desenvolvimento web front-end",
      icon: "layout",
      items: ["HTML", "CSS", "React", "Next.js", "Vue.js", "Bootstrap", "Tailwind CSS", "jQuery"],
    },
    {
      category: "Desenvolvimento web back-end",
      icon: "server",
      items: ["Node.js", "Express.js", "Laravel", "REST API", "Prisma ORM"],
    },
    {
      category: "Testes de software",
      icon: "flask",
      items: ["Jest", "Pest", "PHPUnit"],
    },
    {
      category: "Ferramentas e Infraestrutura",
      icon: "tool",
      items: ["Visual Studio Code", "Eclipse", "Postman", "Trello", "Docker", "Azure", "Vercel", "GitHub Actions"],
    },
    {
      category: "Controle de versão",
      icon: "git-branch",
      items: ["Git", "GitHub"],
    },
    {
      category: "Banco de dados",
      icon: "database",
      items: ["MariaDB", "MySQL", "MongoDB", "Redis"],
    },
    {
      category: "Idiomas",
      icon: "language",
      items: ["Português nativo", "Inglês avançado",],
    },
  ],

  /*
     Certificações e cursos — os 3 primeiros aparecem logo de início; os
     demais ficam atrás do botão "Ver todas as certificações".
  */
  certifications: [
    {
      name: "JavaScript e TypeScript",
      institution: "Udemy",
      date: "09/2026", // opcional
      description: "Curso de JavaScript e TypeScript feito para rever meus conhecimentos antigos e aprender coisas novas",
      image: "", // opcional, ex.: "assets/images/certificados/logo-instituicao.png"
      url: "https://ude.my/UC-4b665ebf-8009-489d-9f1e-864ee1229110", // opcional, link de verificação do certificado (https://...)
    },
    {
      name: "Java Foundations",
      institution: "Oracle Academy",
      date: "09/2023",
      description: "Curso introdutório à linguagem Java, abordando fundamentos de programação, variáveis, tipos de dados, estruturas condicionais, loops e conceitos essenciais para o desenvolvimento de aplicações.",
      image: "",
      url: "",
    },
    {
      name: "Desenvolvimento Web com Laravel",
      institution: "Udemy",
      date: "10/2026",
      description: "Curso de Laravel feito para rever meus conhecimentos antigos e aprender coisas novas sobre o framework.",
      image: "",
      url: "https://ude.my/UC-d7167dc0-0591-4668-aa88-c76d15972dd3",
    },
    {
      name: "PHP do zero a maestria",
      institution: "Udemy",
      date: "04/2026",
      description: "Curso de PHP focado nos fundamentos até conceitos avançados da linguagem, abordando lógica de programação, desenvolvimento web, integração com banco de dados e criação de aplicações dinâmicas.",
      image: "",
      url: "https://ude.my/UC-ccb72209-fcbd-42cb-a1ed-1ecd5079095f",
    },
    {
      name: "Fundamentos de segurança em nuvem - Microsoft - SC-900",
      institution: "SENAI",
      date: "11/2023",
      description: "Curso voltado aos fundamentos de segurança, conformidade e identidade na nuvem, com foco nos conceitos e serviços de segurança do ecossistema Microsoft. (Feito pelo SENAI)",
      image: "",
      url: "https://www.sp.senai.br/consulta-certificado?qrcode=11523281126/14063436",
    },
    {
      name: "Bootstrap 5 do básico ao avançado",
      institution: "Udemy",
      date: "02/2026",
      description: "Curso focado no uso do Bootstrap 5 para criação de interfaces web responsivas, abordando desde os conceitos básicos até recursos mais avançados de de estilização, componentes e layouts adaptáveis a diferentes dispositivos.",
      image: "",
      url: "https://ude.my/UC-7fc7634c-ab32-424b-9ed2-98d270e9509f",
    },
    {
      name: "Azure para iniciantes",
      institution: "Udemy",
      date: "04/2026",
      description: "Curso introdutório sobre Microsoft Azure, abordando os principais conceitos de computação em nuvem, serviços, armazenamento, máquinas virtuais e implantação de recursos na plataforma.",
      image: "",
      url: "https://ude.my/UC-232fb48a-acf2-4ec3-8e17-4123cc60ccc4",
    },
    {
      name: "Desvendando o 5G",
      institution: "SENAI",
      date: "09/2023",
      description: "Curso introdutório sobre a tecnologia 5G, explorando seu funcionamento, principais características, benefícios, aplicações e impactos na conectividade e na evolução das redes de comunicação.",
      image: "",
      url: "https://www.sp.senai.br/consulta-certificado?qrcode=00024681/7325714",
    },
    {
      name: "Economia circular",
      institution: "SENAI",
      date: "09/2023",
      description: "Curso sobre os princípios da economia circular, abordando o uso consciente de recursos, a redução de resíduos, a reutilização de materiais e práticas sustentáveis para minimizar os impactos ambientais.",
      image: "",
      url: "https://www.sp.senai.br/consulta-certificado?qrcode=00024676/7325714",
    },
    {
      name: "Git e Github para iniciantes",
      institution: "Udemy",
      date: "06/2026",
      description: "Curso de Git e Github feito para rever meus conhecimentos antigos e aprender coisas novas",
      image: "",
      url: "https://ude.my/UC-0f4b67e3-432f-4d42-b625-e7d5151d63f0",
    },
    {
      name: "Network Essentials",
      institution: "Cisco Networking academy",
      date: "11/2023",
      description: "Curso introdutório sobre fundamentos de redes de computadores, abordando protocolos de comunicação, dispositivos de rede, endereçamento IP, conectividade e conceitos essenciais de infraestrutura de redes.",
      image: "",
      url: "",
    },
    {
      name: "Privacidade e Proteção de Dados (LGPD)",
      institution: "SENAI",
      date: "09/2023",
      description: "Curso sobre os princípios da Lei Geral de Proteção de Dados (LGPD), abordando privacidade, tratamento seguro de informações pessoais, direitos dos titulares e responsabilidade no uso de dados.",
      image: "",
      url: "https://www.sp.senai.br/consulta-certificado?qrcode=00024679/7325714",
    },
  ],

  /* 
      Projetos — cada item vira um card do carrossel.
      demo é para projetos hospedados - opcional.
  */
  projects: [
    {
      name: "Agendamento de barbearia",
      description: "Site para que clientes possam agendar horários em uma barbearia, escolhendo a data, horário e tipo de serviço.",
      video: "assets/videos/barbeariaVideoPortfolio.mp4", // ex: "assets/videos/projeto-1.mp4"
      cover: "", // opcional, ex: "assets/images/projeto-1-capa.jpg"
      technologies: ["Laravel 12", "Laravel Sanctum", "PHPUnit", "NextJS", "React", "TypeScript", "Tailwind"],
      github: "https://github.com/CauaSilvaChz/barberShop", // ex.: "https://github.com/seu-usuario/nome-do-repositorio"
      demo: "", // opcional, link do projeto publicado (https://...)
    },
    {
      name: "NOME_DO_PROJETO_2 (Em breve)",
      description: "Descrição do projeto irá aqui.",
      video: "",
      cover: "",
      technologies: ["TECNOLOGIA_1", "TECNOLOGIA_2", "TECNOLOGIA_3"],
      github: "URL_DO_REPOSITORIO",
      demo: "",
    },
    {
      name: "NOME_DO_PROJETO_3 (Em breve)",
      description: "Descrição do projeto irá aqui.",
      video: "",
      cover: "",
      technologies: ["TECNOLOGIA_1", "TECNOLOGIA_2", "TECNOLOGIA_3"],
      github: "URL_DO_REPOSITORIO",
      demo: "",
    },
    {
      name: "NOME_DO_PROJETO_4 (Em breve)",
      description: "Descrição do projeto irá aqui.",
      video: "",
      cover: "",
      technologies: ["TECNOLOGIA_1", "TECNOLOGIA_2", "TECNOLOGIA_3"],
      github: "URL_DO_REPOSITORIO",
      demo: "",
    },
  ],
};
