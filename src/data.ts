/**
 * @file data.ts
 * @description Dados estáticos estruturados que alimentam o portfólio de Manywell Wellyngton.
 * Centraliza as informações profissionais, facilitando atualizações de conteúdo.
 * Todos os dados e comentários estão estruturados em português.
 */

import { Project, Skill, TimelineEvent } from './types.ts';

/**
 * @constant DEVELOPER_BIO
 * @description Informações gerais e resumo profissional do desenvolvedor.
 */
export const DEVELOPER_BIO = {
  name: 'Manywell Wellyngton',
  role: 'Desenvolvedor Fullstack Jr',
  tagline: 'Construindo experiências digitais excepcionais através de código limpo, interfaces fluidas e segurança de dados.',
  detailedSummary: 'Sou um desenvolvedor de software iniciante focado em resolver problemas complexos por meio de tecnologia de ponta. Minha especialidade reside na criação de aplicações ricas, intuitivas e de alta performance utilizando o ecossistema Javascript/TypeScript (React, Next.js, Node.js) aliado a boas práticas de UX e animações interativas.',
  linkedInUrl: 'https://www.linkedin.com/in/manywell-wellyngton/',
  githubUrl: 'https://github.com/manywellw',
  gitioUrl: 'https://github.com/manywellw', // Link git.io alternativo ou fallback direto para o Github
  email: 'manywellw@gmail.com', // E-mail fornecido nas credenciais de ambiente para fins profissionais
  location: 'Brasil / Remoto',
  availability: 'Disponível para novos projetos e propostas globais'
};

/**
 * @constant SKILLS_DATA
 * @description Lista detalhada de competências e stacks técnicas divididas por categorias.
 */
export const SKILLS_DATA: Skill[] = [
  // --- LINGUAGENS (languages) ---
  {
    name: 'TypeScript',
    category: 'language',
    level: 75,
    experience: 'Júnior',
    useCase: 'Usado como padrão principal para segurança extrema de tipos em APIs e ecossistemas React.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'language',
    level: 80,
    experience: 'Júnior',
    useCase: 'Fundação sólida para toda e qualquer manipulação assíncrona, DOM e algoritmos de alto desempenho.'
  },
  {
    name: 'Python',
    category: 'language',
    level: 65,
    experience: 'Júnior',
    useCase: 'Utilizado para scripts utilitários, automação de dados e integrações com Machine Learning/Web scrapers.'
  },
  {
    name: 'Kotlin / Java',
    category: 'language',
    level: 60,
    experience: 'Júnior',
    useCase: 'Aplicações nativas mobile robustas e backends corporativos escaláveis.'
  },

  // --- FRAMEWORKS & LIBS (frameworks) ---
  {
    name: 'Next.js',
    category: 'framework',
    level: 70,
    experience: 'Júnior',
    useCase: 'Renderização híbrida (SSR/SSG), roteamento dinâmico avançado e otimização automatizada para SEO.'
  },
  {
    name: 'React 19 / Fast-Vite',
    category: 'framework',
    level: 78,
    experience: 'Júnior',
    useCase: 'Criação de web apps reativos, manipulação avançada de hooks nativos, Context API e estado modular.'
  },
  {
    name: 'Tailwind CSS',
    category: 'framework',
    level: 82,
    experience: 'Júnior',
    useCase: 'Estilização ágil com utilitários otimizados, responsividade imediata e temas customizáveis via CSS Variables.'
  },
  {
    name: 'Framer Motion',
    category: 'framework',
    level: 70,
    experience: 'Júnior',
    useCase: 'Interações fluidas baseadas em física real de gestos, orquestração de layouts e transições de página surpreendentes.'
  },
  {
    name: 'Express / Node.js',
    category: 'framework',
    level: 72,
    experience: 'Júnior',
    useCase: 'Construção de APIs REST robustas, arquitetura em camadas (MVC) e middlewares otimizados.'
  },

  // --- BANCOS DE DADOS (databases) ---
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 68,
    experience: 'Júnior',
    useCase: 'Arquitetura relacional, otimização de índices complexos, transações ACID rigorosas e segurança de esquemas.'
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 70,
    experience: 'Júnior',
    useCase: 'Estruturas NoSQL ágeis para grandes volumes de dados não relacionais, agregação rápida e esquemas dinâmicos.'
  },
  {
    name: 'Redis',
    category: 'database',
    level: 60,
    experience: 'Júnior',
    useCase: 'Caching de alto desempenho para redução de consultas custosas, controle de sessões e rate limiters.'
  },

  // --- FERRAMENTAS & INFRAESTRUTURA (tools) ---
  {
    name: 'Docker',
    category: 'tool',
    level: 62,
    experience: 'Júnior',
    useCase: 'Containerização uniforme para eliminar problemas de "funciona na minha máquina" e facilitar o deploy em nuvem.'
  },
  {
    name: 'Git & GitHub Workflows',
    category: 'tool',
    level: 80,
    experience: 'Júnior',
    useCase: 'Controle de versão absoluto, pipelines de CI/CD automatizadas, code reviews e gestão eficiente de branches.'
  },
  {
    name: 'Linux / Cloud Deploy',
    category: 'tool',
    level: 65,
    experience: 'Júnior',
    useCase: 'Gerenciamento de servidores, comandos de terminal avançados e deploys automatizados em Cloud Run e AWS.'
  }
];

/**
 * @constant PROJECTS_DATA
 * @description Coleção de projetos de alta categoria desenvolvidos de forma tecnológica e responsiva.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'OmniSaaS Hub',
    description: 'Plataforma integrada de dashboard unificado e métricas analíticas em tempo real para múltiplos provedores SaaS.',
    longDescription: 'O OmniSaaS Hub é um painel completo focado em unificar a visão analítica de serviços de terceiro em um ecossistema visual de alta densidade de dados. Conta com filtros estatísticos eficientes, renderização por blocos virtuais inteligentes para carregamento instantâneo, e controle visual dinâmico com gráficos altamente integrados.',
    category: 'fullstack',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MongoDB'],
    githubUrl: 'https://github.com/manywellw/omnisaas-hub',
    liveUrl: 'https://github.com/manywellw/omnisaas-hub', // Link simulável
    iconName: 'LayoutDashboard',
    keyFeatures: [
      'Renderização dinâmica no servidor (SSR) otimizando métricas Core Web Vitals',
      'Painel interativo com sincronização instantânea de estado',
      'Configurações de relatórios customizados exportáveis para formatos chave',
      'Gráficos de alta fidelidade integrando bibliotecas ágeis de renderização'
    ],
    metric: 'Tempo de Resposta < 40ms'
  },
  {
    id: 'p2',
    title: 'FastAuth Gateway',
    description: 'API Gateway de alta performance e middleware de verificação de permissões federadas com cache em Redis.',
    longDescription: 'Um microsserviço de autenticação e gateway centralizado que protege e distribui conexões corporativas de forma eficiente. Ao utilizar criptografia asimétrica e controle rigoroso de concorrência com o Redis cache, o FastAuth gerencia milhares de requisições de autenticação simultâneas sem perdas de escala.',
    category: 'backend',
    tags: ['Node.js', 'Express', 'TypeScript', 'Redis', 'PostgreSQL'],
    githubUrl: 'https://github.com/manywellw/fastauth-gateway',
    iconName: 'ShieldAlert',
    keyFeatures: [
      'Implementação avançada de OAuth2 corporativo e sessões encriptadas via JWT',
      'Taxa de compressão inteligente de dados em cache reduzindo latência',
      'Rate limiting preventivo adaptativo baseado em IP do requitante',
      'Documentação automática interativa das rotas usando especificações OpenAPI'
    ],
    metric: 'Aguenta +10.000 req/seg'
  },
  {
    id: 'p3',
    title: 'DevBoard Kanban',
    description: 'Tela de fluxo Kanban altamente interativa para gerenciamento ágil integrada com reordenação física interativa.',
    longDescription: 'O DevBoard é uma releitura futurista das conhecidas ferramentas de agile. A aplicação simula um canvas interativo e imersivo onde desenvolvedores podem arrastar tarefas, criar tags instantâneas de prioridade e observar transições físicas realistas proporcionadas por cálculos dinâmicos de layout.',
    category: 'frontend',
    tags: ['React 19', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/manywellw/devboard-kanban',
    liveUrl: 'https://github.com/manywellw/devboard-kanban',
    iconName: 'KanbanSquare',
    keyFeatures: [
      'Sistema nativo drag-and-drop orquestrado com Framer Motion Layout animations',
      'Interface visual escura com efeito de vidro temperado (Glassmorphism)',
      'Salvamento imperceptível e assíncrono no localStorage mantendo persistência offline',
      'Mecanismos avançados de acessibilidade via teclado e gestos de toque móveis'
    ],
    metric: 'Interações em 60fps constantes'
  },
  {
    id: 'p4',
    title: 'EcoCycle Tracker',
    description: 'App móvel reativo para cálculo e gameficação inteligente de pegada de carbono ambiental.',
    longDescription: 'Aplicativo de engajamento comunitário ecológico. Usuários de dispositivos registram rotas de trânsito locais e hábitos diários, acumulando moedas sustentáveis interativas e destravando desafios que reduzem ativamente o uso de poluentes nas grandes cidades.',
    category: 'mobile',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/manywellw/ecocycle-tracker',
    iconName: 'Leaf',
    keyFeatures: [
      'Cálculo automático de emissões baseado em geolocalização e rotas registradas',
      'Interface moderna, leve e responsiva idealizada para telas de baixa densidade',
      'Desafios de gamificação diários com envio de lembretes via Local Notifications',
      'Código multiplataforma altamente portável rodando nativo em Android e iOS'
    ],
    metric: '98% Avaliação de Consumo de Bateria'
  }
];

/**
 * @constant TIMELINE_DATA
 * @description A trajetória educacional e profissional que desenha a excelência de Manywell Wellyngton.
 */
export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 't1',
    period: '2024 - Presente',
    role: 'Desenvolvedor Fullstack Freelancer',
    company: 'Desenvolvimento Independente & Projetos Pessoais',
    description: 'Focado no desenvolvimento de MVPs escaláveis para pequenas empresas e criação de portfólios interativos.',
    achievements: [
      'Modelagem de interfaces dinâmicas utilizando React, Tailwind CSS e TypeScript estrito.',
      'Refatoração de componentes legados obtendo melhoras no desempenho de navegação em tela.',
      'Integrações eficientes de APIs RESTful utilizando NodeJS e bancos de dados relacionais.'
    ],
    techUsed: ['NestJS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'PostgreSQL']
  },
  {
    id: 't2',
    period: '2022 - 2024',
    role: 'Desenvolvedor Frontend Júnior',
    company: 'Projetos e Parcerias Tecnológicas',
    description: 'Implementação de soluções e interfaces ricas e reativas com foco na experiência do usuário.',
    achievements: [
      'Desenvolvimento de componentes modulares reutilizáveis com Tailwind CSS para agilizar entregas.',
      'Consumo de serviços web e APIs assíncronas com tratamento correto de estado.',
      'Colaboração na concepção de fluxos de telas responsivas baseadas em protótipos de design.'
    ],
    techUsed: ['React', 'TypeScript', 'Framer Motion', 'Redux', 'SASS / CSS Modules']
  },
  {
    id: 't3',
    period: '2020 - 2022',
    role: 'Desenvolvedor Fullstack Assistente',
    company: 'Startups de Serviços Digitais',
    description: 'Auxílio na engenharia e manutenção de microsserviços integrando telas web responsivas.',
    achievements: [
      'Auxílio no desenho de esquemas relacionais básicos e consultas SQL simples eficientes.',
      'Criação de rotas secundárias de APIs REST estruturadas no padrão MVC com Express.',
      'Colaboração no desenvolvimento de pequenas telas e experiências mobile de engajamento.'
    ],
    techUsed: ['Express', 'React Native', 'Node.js', 'MongoDB', 'Python', 'Git']
  }
];
