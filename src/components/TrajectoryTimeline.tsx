/**
 * @file TrajectoryTimeline.tsx
 * @description Componente de linha do tempo profissional interativa.
 * Permite explorar a carreira de Manywell Wellyngton de ponta a ponta, exibindo aprendizados e marcos relevantes de cada período.
 * Totalmente escrito em TypeScript e documentado detalhadamente em português.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { TIMELINE_DATA } from '../data.ts';

export default function TrajectoryTimeline() {
  // --- ESTADO LOCAL (States) ---

  // Guarda o identificador do evento da linha do tempo selecionado para detalhes expandidos (padrão é o primeiro evento)
  const [activeEventId, setActiveEventId] = useState<string>(TIMELINE_DATA[0]?.id || '');

  // Busca o objeto completo do evento ativo com base no ID selecionado no estado
  const activeEvent = TIMELINE_DATA.find(event => event.id === activeEventId);

  return (
    <section id="trajectory-timeline" className="py-12 border-t border-gray-900">
      
      {/* Título de Seção */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1.5 justify-start">
          <span className="w-2 h-2 rounded-full bg-cyber-pink animate-pulse" id="dot-timeline-title-glow" />
          <span className="text-xs font-mono text-cyber-pink uppercase tracking-widest" id="lbl-timeline-section-subtitle">HISTÓRICO OPERACIONAL</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight" id="lbl-timeline-section-title">
          Trajetória Profissional
        </h2>
        <p className="text-gray-400 text-sm mt-1 max-w-xl" id="lbl-timeline-section-desc">
          Clique nas etapas da jornada para expandir realizações e as stacks empregadas em cada ciclo de excelência.
        </p>
      </div>

      {/* Grid contendo o mapa de nós (esquerda) e o terminal explicativo de conquistas (direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="timeline-interactive-grid">
        
        {/* Lado Esquerdo: Navegador Cronológico Físico (5 colunas) */}
        <div className="lg:col-span-5 relative" id="timeline-navigation-column">
          {/* Linha vertical neon invisível em mobile e visível a partir do tablet */}
          <div className="absolute left-4 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-cyber-pink via-cyber-purple to-transparent z-0 hidden sm:block" />

          <div className="space-y-4 select-none relative z-10" id="timeline-nodes-holder">
            {TIMELINE_DATA.map((event, idx) => {
              const isActive = event.id === activeEventId;
              return (
                <div
                  id={`node-timeline-item-${event.id}`}
                  key={event.id}
                  onClick={() => setActiveEventId(event.id)}
                  className={`flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyber-card/85 border-cyber-pink/45 shadow-[0_0_15px_rgba(255,0,127,0.04)] text-white'
                      : 'bg-transparent border-gray-950 hover:bg-gray-950 hover:border-gray-800 text-gray-400'
                  }`}
                  title={`Clique para visualizar as conquistas sobre: ${event.role} em ${event.company}`}
                >
                  {/* Marcador Temporal */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-all ${
                    isActive 
                      ? 'bg-cyber-pink/15 border-cyber-pink text-cyber-pink shadow-[0_0_8px_#ff007f]' 
                      : 'bg-gray-900 border-gray-800 text-gray-500'
                  }`} id={`box-calendar-${event.id}`}>
                    <Calendar className="w-4 h-4" />
                  </div>

                  {/* Informações Resumidas do Evento */}
                  <div className="flex-1" id={`desc-node-${event.id}`}>
                    <span className={`text-[10px] font-mono block ${isActive ? 'text-cyber-pink' : 'text-gray-500'}`} id={`lbl-period-${event.id}`}>
                      {event.period}
                    </span>
                    <h3 className="text-sm font-semibold mt-0.5 font-display" id={`lbl-role-${event.id}`}>
                      {event.role}
                    </h3>
                    <span className="text-xs text-gray-500 block mt-0.5" id={`lbl-company-${event.id}`}>
                      {event.company}
                    </span>
                  </div>

                  {/* Feedback visual de seta indicativa */}
                  <div className="hidden sm:block self-center" id={`chevron-holder-${event.id}`}>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-cyber-pink' : 'text-gray-700'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lado Direito: Terminal de Detalhes Dinâmico (7 colunas) */}
        <div className="lg:col-span-7" id="timeline-details-column">
          <AnimatePresence mode="wait">
            {activeEvent && (
              <motion.div
                id={`panel-timeline-detail-${activeEvent.id}`}
                key={activeEvent.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="bg-cyber-card border border-gray-800/80 rounded-xl p-6 shadow-2xl relative overflow-hidden"
              >
                {/* Linha holográfica vertical decorativa lateral */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-cyber-pink" />

                <div className="mb-5 justify-start">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-1" id="detail-job-heading-top">
                    <Briefcase className="w-3.5 h-3.5 text-cyber-pink" />
                    <span>REGISTRO DE MARCO SELECIONADO</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-medium text-white" id="detail-job-title">
                    {activeEvent.role}
                  </h3>
                  <p className="text-xs md:text-sm text-cyber-pink font-semibold mt-0.5" id="detail-job-sub">
                    {activeEvent.company} <span className="text-gray-500 font-normal">|</span> {activeEvent.period}
                  </p>
                </div>

                {/* Descrição em parágrafo */}
                <div className="mb-6">
                  <p className="text-gray-300 text-sm leading-relaxed" id="detail-job-desc">
                    {activeEvent.description}
                  </p>
                </div>

                {/* Conquistas (Achievements List) */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-3 tracking-widest" id="detail-header-log">
                    🎯 Logs de Conquistas e Resultados:
                  </span>
                  <ul className="space-y-3" id="detail-list-achievements">
                    {activeEvent.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <span className="text-cyber-pink text-xs mt-1 select-none flex-shrink-0">◆</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stacks tecnológicas empregadas no período */}
                <div className="border-t border-gray-900 pt-4 select-none">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-2.5 tracking-widest" id="detail-header-tech">
                    🛠️ Tecnologia de Ponta Dominada no Período:
                  </span>
                  <div className="flex flex-wrap gap-1.5" id="detail-tags-tech">
                    {activeEvent.techUsed.map((tech, techIdx) => (
                      <span key={techIdx} className="bg-gray-950 border border-gray-900 text-gray-400 text-xs px-2.5 py-1 rounded-md font-mono hover:border-cyber-pink/35 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
