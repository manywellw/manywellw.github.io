/**
 * @file ProjectHub.tsx
 * @description Módulo de Portfólio focado na exibição interativa de projetos em destaque.
 * Possui suporte a filtragem dinâmica por tags de categoria e expansão de detalhes em modal flutuante.
 * Cada elemento interativo e método estruturado está amplamente documentado em português.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, ShieldAlert, KanbanSquare, Leaf, ExternalLink, Github, X, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data.ts';
import { Project } from '../types.ts';

/**
 * @function renderIcon
 * @description Mapeador estático de ícones para garantir a segurança dos tipos sem depender de importações globais dinâmicas perigosas no compilador.
 * @param {string} name - String identificadora salva no banco de dados local.
 */
const renderIcon = (name: string) => {
  switch (name) {
    case 'LayoutDashboard':
      return <LayoutDashboard className="w-6 h-6 text-cyber-accent" id="icon-layoutdashboard" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-6 h-6 text-cyber-accent" id="icon-shieldalert" />;
    case 'KanbanSquare':
      return <KanbanSquare className="w-6 h-6 text-cyber-accent" id="icon-kanbansquare" />;
    case 'Leaf':
      return <Leaf className="w-6 h-6 text-cyber-accent" id="icon-leaf" />;
    default:
      return <LayoutDashboard className="w-6 h-6 text-cyber-accent" id="icon-default" />;
  }
};

export default function ProjectHub() {
  // --- FLUXOS DE ESTADOS (States) ---

  // Controla qual filtro de categoria está ativo na listagem (Todas, Frontend, Backend, etc)
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile'>('all');

  // Armazena a referência para o projeto selecionado pelo usuário que deve ser exibido em modal expansivo
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // --- FILTRAGEM DE CORES / SELEÇÕES ---

  // Classifica os dados de acordo com a categoria selecionada no menu superior
  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeFilter);

  return (
    <section id="projects-hub" className="py-12 border-t border-gray-900">
      
      {/* Cabeçalho da Seção de Projetos */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5 justify-start">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" id="dot-project-title-glow" />
            <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest" id="lbl-project-section-subtitle">SISTEMAS CONSTRUÍDOS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight" id="lbl-project-section-title">
            Projetos em Destaque
          </h2>
        </div>

        {/* Abas de Filtragem de Projetos (Responsive Tabs) */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0 bg-gray-950/60 p-1 rounded-lg border border-gray-900 select-none" id="projects-tab-wrapper">
          {(['all', 'frontend', 'backend', 'fullstack', 'mobile'] as const).map((filter) => {
            const labelMap: Record<string, string> = {
              all: 'Todos',
              frontend: 'Front-end',
              backend: 'Back-end',
              fullstack: 'Full-stack',
              mobile: 'Mobile'
            };
            const isActive = activeFilter === filter;
            return (
              <button
                id={`tab-project-filter-${filter}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
                title={`Filtrar listagem por categoria ${labelMap[filter]}`}
              >
                {/* Efeito de cápsula flutuante que desliza suavemente ao mudar de estado do filtro */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabCylinder"
                    className="absolute inset-0 bg-cyber-accent rounded-md z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{labelMap[filter]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Projetos Mapeada Dinamicamente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid-container">
        {filteredProjects.map((project, idx) => (
          <motion.div
            id={`card-project-item-${project.id}`}
            key={project.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setSelectedProject(project)}
            className="group bg-cyber-card border border-gray-800/80 hover:border-cyber-accent/60 rounded-xl p-5 cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,204,0.08)] transition-all duration-300 flex flex-col justify-between"
            title={`Clique para ler mais detalhes de arquitetura do projeto ${project.title}`}
          >
            <div>
              {/* Seção Superior do Card do Projeto */}
              <div className="flex justify-between items-center mb-4">
                <div className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center">
                  {renderIcon(project.iconName)}
                </div>
                {project.metric && (
                  <span className="bg-cyber-accent/5 border border-cyber-accent/30 text-cyber-accent text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded" id={`badge-metric-${project.id}`}>
                    {project.metric}
                  </span>
                )}
              </div>

              {/* Informações de Título e Resumo */}
              <h3 className="text-lg font-display font-medium text-white group-hover:text-cyber-accent transition-colors mb-2" id={`lbl-project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3" id={`lbl-project-desc-${project.id}`}>
                {project.description}
              </p>
            </div>

            {/* Rodapé do Card mostrando tags de stack utlizadas */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4 select-none" id={`tags-container-${project.id}`}>
                {project.tags.slice(0, 3).map((tag, tagIdx) => (
                  <span key={tagIdx} className="bg-gray-950 border border-gray-900 text-gray-500 text-[10px] font-mono px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-gray-600 text-[10px] font-mono self-center">
                    +{project.tags.length - 3} mais
                  </span>
                )}
              </div>

              {/* Gatilho visual indicando ação de expansão */}
              <div className="flex items-center gap-1 text-xs text-cyber-accent font-medium group-hover:underline justify-between">
                <span>Ver arquitetura detalhada</span>
                <span className="text-xs font-mono opacity-40">0{idx+1} //</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL DETALHADO DO PROJETO SELECIONADO (Expansion Modal) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {/* Overlay que fecha o modal se clicado do lado de fora */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedProject(null)} />
            
            <motion.div
              id="project-detail-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-cyber-card border border-gray-800 rounded-xl max-w-2xl w-full p-6 md:p-8 relative z-10 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* Botão Superior para fechar o Modal */}
              <button
                id="btn-close-project-modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white p-1.5 rounded-lg border border-gray-850 cursor-pointer transition-colors"
                aria-label="Fechar modal de detalhes"
                title="Fechar modal de detalhes do projeto"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Informações Primárias de Escopo do Projeto */}
              <div className="flex items-center gap-3.5 mb-4 justify-start">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-850 flex items-center justify-center">
                  {renderIcon(selectedProject.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest" id="modal-project-badge-category">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white mt-0.5" id="modal-project-title">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Métrica de Engenharia em destaque */}
              {selectedProject.metric && (
                <div className="bg-cyber-accent/5 border border-cyber-accent/30 text-cyber-accent font-mono text-xs px-3.5 py-1.5 rounded-lg mb-6 flex items-center gap-2 justify-start max-w-max">
                  <Check className="w-3.5 h-3.5 text-cyber-accent" />
                  Métrica de Performance: <strong className="font-semibold">{selectedProject.metric}</strong>
                </div>
              )}

              {/* Descrições e Parágrafos Técnicos */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2" id="modal-header-desc">CONCEPÇÃO GERAL</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed" id="modal-text-desc">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2" id="modal-header-features">MARCOS E REQUISITOS IMPLEMENTADOS</h4>
                  <ul className="space-y-2.5 text-sm text-gray-400" id="modal-list-features">
                    {selectedProject.keyFeatures.map((feat, featIdx) => (
                      <li key={featIdx} className="flex gap-2">
                        <span className="text-cyber-accent font-semibold flex-shrink-0 select-none">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2.5" id="modal-header-stack">TECNOLOGIAS DE SUPORTE</h4>
                  <div className="flex flex-wrap gap-2 select-none" id="modal-tags-container">
                    {selectedProject.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="bg-gray-900 border border-gray-800 text-gray-300 text-xs font-mono px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seção de Reduções/Ações de link para o código */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-900">
                <a
                  id="lnk-modal-repo"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-zinc-800 hover:bg-zinc-950 border border-zinc-700 hover:border-cyber-accent text-white font-medium text-xs md:text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
                  title="Acessar o código-fonte original deste projeto no GitHub de Manywell"
                >
                  <Github className="w-4 h-4" />
                  Ir para Código-Fonte (GitHub)
                </a>
                
                {selectedProject.liveUrl && (
                  <a
                    id="lnk-modal-live-demo"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="bg-cyber-accent hover:bg-black border border-cyber-accent hover:text-cyber-accent text-black font-medium text-xs md:text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
                    title="Visitar a demonstração funcional interativa online"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Acessar Demonstração (Live)
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
