/**
 * @file types.ts
 * @description Definições de tipos TypeScript para o portfólio de Manywell Wellyngton.
 * Garante a tipagem estática e segurança nas estruturas de dados da aplicação.
 * Cada tipo é amplamente comentado em português conforme requisitado.
 */

/**
 * @interface Project
 * @description Representa a estrutura de um projeto em destaque no portfólio.
 */
export interface Project {
  // Identificador único do projeto (número ou string)
  id: string;
  // Nome curto/título do projeto
  title: string;
  // Descrição breve com foco nos benefícios e resultados
  description: string;
  // Descrição longa detalhada para exibição em modal ou detalhes expandidos
  longDescription: string;
  // Categoria principal do projeto para sistemas de filtragem (Ex: Full-stack, Mobile, Front-end)
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  // Array de tecnologias/ferramentas utilizadas neste projeto específico
  tags: string[];
  // Link para o repositório ou página encurtada (Ex: git.io/manywellw-exemplo)
  githubUrl: string;
  // Link opcional de demonstração online/produção
  liveUrl?: string;
  // Ícone representativo ou nome do ícone do Lucide React a ser renderizado
  iconName: string;
  // Principais aprendizados ou desafios superados neste desenvolvimento
  keyFeatures: string[];
  // Métrica ou resultado de performance do projeto (Ex: "Tempo de carregamento reduzido em 40%")
  metric?: string;
}

/**
 * @interface Skill
 * @description Representa uma habilidade técnica/tecnológica individual e seu nível de domínio.
 */
export interface Skill {
  // Nome da tecnologia (Ex: "TypeScript", "Next.JS")
  name: string;
  // Categoria da tecnologia para agrupamento (Ex: Front-end, Back-end, Infraestrutura)
  category: 'language' | 'framework' | 'database' | 'tool';
  // Nível presumido ou proficiência de 0 a 100 para efeitos visuais e estatísticos
  level: number;
  // Anos de experiência ou nível de maestria (ex: "Sênior", "Intermediário", etc.)
  experience: string;
  // Breve frase sobre como a tecnologia é aplicada no dia a dia
  useCase: string;
}

/**
 * @interface TimelineEvent
 * @description Trilha profissional ou acadêmica que compõe a trajetória de destaque.
 */
export interface TimelineEvent {
  // Identificador único para a linha do tempo
  id: string;
  // Período de tempo (Ex: "2023 - Presente")
  period: string;
  // Cargo ou título acadêmico (Ex: "Engenheiro de Software Full-stack")
  role: string;
  // Empresa, universidade ou contexto corporativo (Ex: "Freelance", "GitHub Projects")
  company: string;
  // Breve resumo contendo as conquistas essenciais naquele período
  description: string;
  // Lista de aprendizados ou marcos técnicos principais alcançados
  achievements: string[];
  // Tecnologias mais utilizadas ou aprendidas neste determinado marco temporal
  techUsed: string[];
}

/**
 * @interface TerminalMessage
 * @description Representa um registro de comando ou saída de texto exibido no terminal interativo do portfólio.
 */
export interface TerminalMessage {
  // O que foi digitado ou interpretado pelo interpretador (Ex: "help", "skills")
  type: 'command' | 'system' | 'output' | 'error';
  // O texto corrido que deve ser exibido com efeito de digitação lenta ou imediata
  text: string;
  // Timestamp opcional de quando a linha foi impressa na tela
  timestamp?: string;
}
