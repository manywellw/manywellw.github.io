/**
 * @file App.tsx
 * @description Portal de Portfólio Tecnológico de Manywell Wellyngton.
 * Desenvolvido como SPA responsivo de alta performance no ecossistema React, Tailwind CSS e Framer Motion.
 * Consome os módulos: CommandTerminal, ProjectHub, TrajectoryTimeline, SkillsStation e ConnectionCenter.
 * Comentários completos em português detalhando a função de cada componente, estado e disparador.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Terminal, 
  Menu, 
  X, 
  ArrowUp, 
  Activity,
  Code,
  ExternalLink
} from 'lucide-react';
import { DEVELOPER_BIO } from './data.ts';
import CommandTerminal from './components/CommandTerminal.tsx';
import ProjectHub from './components/ProjectHub.tsx';
import TrajectoryTimeline from './components/TrajectoryTimeline.tsx';
import SkillsStation from './components/SkillsStation.tsx';
import ConnectionCenter from './components/ConnectionCenter.tsx';

export default function App() {
  // --- FLUXOS DE ESTADO DA TELA PRINCIPAL (States) ---

  // Controla se o menu mobile móvel de navegação está aberto ou oculto
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Controla se o botão flutuante de "Voltar ao Topo" (Scroll to top) deve ser mostrado
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // --- ESCUTA FÍSICA DE COMPORTAMENTOS (Scroll Listeners) ---

  // Executa monitoramento do rolamento de tela para exibir ou esconder o botão de scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ACESSOS IMEDIATOS (Navigation Actions) ---

  /**
   * @function scrollToSection
   * @description Rola a tela suavemente até a âncora do componente solicitado.
   * @param {string} id - O ID DOM da seção pretendida.
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Fecha o menu de celular se estiver aberto para liberar visualização
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * @function scrollToTop
   * @description Devolve a viewport ao cabeçalho inicial da página de forma instantânea e suave.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Fundo escuro cibernético principal com estilo de grade holográfica sutil
    <div className="min-h-screen bg-cyber-bg text-gray-100 font-sans selection:bg-cyber-accent selection:text-black cyber-grid relative overflow-x-hidden">
      
      {/* Luz radial decorativa de estúdio no topo esquerdo do background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-accent/5 rounded-full blur-[120px] pointer-events-none select-none" />
      {/* Luz radial decorativa de estúdio no meio do background */}
      <div className="absolute top-[1200px] right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-[120px] pointer-events-none select-none" />

      {/* =========================================================================
          CABEÇALHO FLUTUANTE (Floating Nav Header)
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-cyber-bg/75 backdrop-blur-md border-b border-gray-800/60 transition-all select-none" id="main-navigation-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo tecnológico e marca pessoal */}
          <div 
            onClick={scrollToTop} 
            className="flex items-center gap-2.5 cursor-pointer" 
            title="Clique para retornar ao início do site"
            id="brand-logo-trigger"
          >
            <div className="p-1.5 bg-gray-900 rounded border border-gray-800 flex items-center justify-center">
              <Code className="w-4 h-4 text-cyber-accent animate-pulse" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              WELLYNGTON <span className="text-[10px] bg-cyber-accent/15 text-cyber-accent px-1.5 py-0.5 rounded font-mono">PORTFOLIO</span>
            </span>
          </div>

          {/* Links de Navegação de Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono text-gray-400" id="desktop-nav-menu">
            {[
              { label: 'Console', id: 'terminal-section' },
              { label: 'Projetos', id: 'projects-hub' },
              { label: 'Trajetória', id: 'trajectory-timeline' },
              { label: 'Arsenal', id: 'skills-station' },
              { label: 'Conexão', id: 'connection-center' }
            ].map((node, i) => (
              <button
                id={`btn-nav-desktop-${node.label.toLowerCase()}`}
                key={node.id}
                onClick={() => scrollToSection(node.id)}
                className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                title={`Deslocar foco visual para a seção de ${node.label}`}
              >
                <span className="text-cyber-accent opacity-50">0{i+1}.</span> {node.label}
              </button>
            ))}
          </nav>

          {/* Botões Utilitários Diretos no Header */}
          <div className="hidden md:flex items-center space-x-3.5">
            {/* Link encurtador git.io direto */}
            <a
              id="lnk-header-gitio"
              href="https://github.com/manywellw"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-xs font-mono text-gray-400 hover:text-cyber-accent flex items-center gap-1 transition-colors cursor-pointer"
              title="Acessar o link resumido do perfil Git de Manywell"
            >
              <span>git.io/manywellw</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* LinkedIn directo */}
            <a
              id="lnk-header-linkedin"
              href={DEVELOPER_BIO.linkedInUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-gray-400 hover:text-white p-1.5 hover:bg-gray-900 rounded transition-all cursor-pointer"
              title="Ir para o perfil do LinkedIn de Wellyngton"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Gatilho de celular para Menu Mobile */}
          <button
            id="btn-trigger-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white p-1 hover:bg-gray-900 rounded cursor-pointer"
            aria-label="Alternar visualização do menu de navegação móvel"
            title="Abrir ou fechar menu de links de celular"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Menu flutuante móvel de Celular (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-card border-b border-gray-800 absolute top-16 left-0 right-0 z-30 overflow-hidden font-mono text-sm"
          >
            <div className="px-4 py-5 space-y-4 flex flex-col">
              {[
                { label: 'Console de Comando', id: 'terminal-section' },
                { label: 'Projetos em Destaque', id: 'projects-hub' },
                { label: 'Trajetória Profissional', id: 'trajectory-timeline' },
                { label: 'Habilidades Técnicas', id: 'skills-station' },
                { label: 'Estação de Contato', id: 'connection-center' }
              ].map((node, i) => (
                <button
                  id={`btn-nav-mobile-${node.id}`}
                  key={node.id}
                  onClick={() => scrollToSection(node.id)}
                  className="text-left py-2 border-b border-gray-900 last:border-0 text-gray-300 hover:text-cyber-accent transition-colors flex items-center justify-between cursor-pointer"
                  title={`Navegar para ${node.label}`}
                >
                  <span>{node.label}</span>
                  <span className="text-xs text-cyber-accent">0{i+1} //</span>
                </button>
              ))}
              
              {/* Canais rápidos móvel */}
              <div className="pt-4 flex items-center justify-between text-xs text-gray-500">
                <a 
                  id="lnk-mobile-gitio-direct"
                  href="https://github.com/manywellw" 
                  target="_blank" 
                  referrerPolicy="no-referrer"
                  className="text-cyber-accent hover:underline flex items-center gap-1 cursor-pointer"
                  title="Visitar Perfil GitHub de Wellyngton"
                >
                  git.io/manywellw
                </a>
                <span>Kamilaagnes1997@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          CONTEÚDO PRINCIPAL (Main Layout Container)
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* HERO SECTION CONTAINER - Apresentação principal */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16" id="hero-welcome-grid">
          
          {/* Lado Esquerdo: Redes e Bio descritiva (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col space-y-6" id="hero-description-holder">
            
            {/* Banner de Status Ativo no topo */}
            <div className="flex border border-cyber-accent/30 bg-cyber-accent/5 px-3.5 py-1.5 rounded-full text-xs text-cyber-accent items-center gap-2 w-max select-none" id="badge-firmware-status">
              <Activity className="w-3.5 h-3.5 text-cyber-accent animate-pulse" />
              <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                SISTEMA OPERANDO EM REGIME COMPILADO
              </span>
            </div>

            {/* Título Monumental com Space Grotesk */}
            <div id="hero-editorial-headers">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
                Olá, eu sou <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent via-cyan-400 to-cyber-purple font-semibold">
                  {DEVELOPER_BIO.name}
                </span>
              </h1>
              <p className="text-sm md:text-md text-cyber-accent font-mono mt-1" id="lbl-hero-developer-role">
                // {DEVELOPER_BIO.role}
              </p>
            </div>

            {/* Descrição em parágrafo */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed" id="lbl-hero-developer-summary">
              {DEVELOPER_BIO.tagline} {DEVELOPER_BIO.detailedSummary}
            </p>

            {/* Botões de Ação Imediata do Hero */}
            <div className="flex flex-wrap gap-3 pt-2 select-none" id="hero-quick-actions">
              <button
                id="btn-hero-navigate-projects"
                onClick={() => scrollToSection('projects-hub')}
                className="bg-cyber-accent hover:bg-black border border-cyber-accent text-black hover:text-cyber-accent font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all cursor-pointer shadow-[0_0_15px_rgba(0,255,204,0.15)] hover:shadow-none"
                title="Rolar página imediatamente para o Hub de Projetos"
              >
                [ VER MEUS PROJETOS ]
              </button>

              <button
                id="btn-hero-navigate-contact"
                onClick={() => scrollToSection('connection-center')}
                className="bg-transparent hover:bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all cursor-pointer"
                title="Rolar direto para a central de contatos para parcerias"
              >
                [ ENVIAR MENSAGEM ]
              </button>
            </div>

            {/* Linha adicional mostrando compatibilidades técnicas do portfólio */}
            <div className="flex items-center gap-3 text-[10px] text-gray-600 font-mono pt-4 select-none" id="stack-metadata-badges">
              <span>PILHA UTILIZADA:</span>
              <span className="border border-gray-950 bg-gray-950 px-2 py-0.5 rounded text-gray-500">REACT 19</span>
              <span className="border border-gray-950 bg-gray-950 px-2 py-0.5 rounded text-gray-500">TAILWIND v4</span>
              <span className="border border-gray-950 bg-gray-950 px-2 py-0.5 rounded text-gray-500">MOTION</span>
            </div>

          </div>

          {/* Lado Direito: Terminal Interativo de Linha de Comando (7 colunas) */}
          <div className="lg:col-span-7" id="hero-terminal-holder">
            <CommandTerminal />
          </div>

        </section>

        {/* --- PROJETOS EM DESTAQUE --- */}
        <ProjectHub />

        {/* --- LINHA DO TEMPO PROFISSIONAL --- */}
        <TrajectoryTimeline />

        {/* --- ARSENAL DE HABILIDADES TÉCNICAS --- */}
        <SkillsStation />

        {/* --- CENTRAL E ESTAÇÃO DE CONTATOS --- */}
        <ConnectionCenter />

      </main>

      {/* =========================================================================
          RODA-PÉ HOLOGRÁFICO (Telemetry Style Footer)
          ========================================================================= */}
      <footer className="border-t border-gray-900 bg-gray-950/40 py-10 mt-16 text-xs text-gray-500 font-mono select-none" id="system-telemetry-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Lado Esquerdo: Metadados do App */}
          <div className="text-center md:text-left space-y-1.5" id="footer-left-diagnostics">
            <p className="text-gray-400 font-bold flex items-center gap-1.5 justify-center md:justify-start">
              <Activity className="w-3.5 h-3.5 text-cyber-accent animate-pulse" />
              SISTEMA IMPLANTADO COM SUCESSO.
            </p>
            <p className="text-[10px] text-gray-600">
              Ambiente: Production Cloud Run Container // Latência Estável // Port: 3000
            </p>
            <p className="text-[10px] text-gray-700">
              © {new Date().getFullYear()} Wellyngton. Todos os direitos reservados de codificação.
            </p>
          </div>

          {/* Lado Direito: Link e Licença de Software */}
          <div className="text-center md:text-right space-y-1" id="footer-right-attribution">
            <p className="text-gray-400">
              Desenhado e Forjado por <strong className="hover:text-cyber-accent transition-colors cursor-pointer" onClick={scrollToTop}>{DEVELOPER_BIO.name}</strong>
            </p>
            <p className="text-[10px] text-gray-600">
              Desenvolvido sob regras de tipagem estática do TypeScript. Código Limpo.
            </p>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          BOTÃO VOLTAR AO TOPO FLUTUANTE (Scroll-to-top floating)
          ========================================================================= */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="btn-scroll-to-top"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-zinc-900 border border-zinc-800 hover:border-cyber-accent text-zinc-400 hover:text-cyber-accent p-3 rounded-xl cursor-pointer hover:shadow-[0_0_15px_rgba(0,255,204,0.15)] transition-all"
            aria-label="Voltar para o topo do site"
            title="Voltar ao início da página de forma instantânea"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
