/**
 * @file SkillsStation.tsx
 * @description Componente de Matriz de Stacks e Habilidades Técnicas.
 * Exibe habilidades agrupadas com medidores interativos de progresso e comentários sobre caso de uso prático.
 * Codificado em TypeScript com documentação minuciosa em português.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Database, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data.ts';
import { Skill } from '../types.ts';

export default function SkillsStation() {
  // --- ESTADO LOCAL (States) ---

  // Controla o filtro de categoria técnica ativa (linguagens, frameworks, banco de dados, ferramentas)
  const [activeCategory, setActiveCategory] = useState<'all' | 'language' | 'framework' | 'database' | 'tool'>('all');

  // Filtra as habilidades conforme a categoria selecionada
  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  // Mapeador estático de ícones para as categorias para garantir a segurança dos tipos
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'language':
        return <Cpu className="w-4 h-4" />;
      case 'framework':
        return <Layers className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'tool':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills-station" className="py-12 border-t border-gray-900">
      
      {/* Cabeçalho da Seção de Skills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5 justify-start">
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" id="dot-skills-title-glow" />
            <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest" id="lbl-skills-section-subtitle">ARSENAL DE DESENVOLVIMENTO</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight" id="lbl-skills-section-title">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-400 text-sm mt-1 max-w-xl" id="lbl-skills-section-desc">
            Tecnologias dominadas estruturadas de forma categórica e alinhadas para alta escalabilidade.
          </p>
        </div>

        {/* Abas Rápidas de Categorias de Skills */}
        <div className="flex flex-wrap gap-1.5 mt-4 md:mt-0 bg-gray-950/60 p-1 rounded-lg border border-gray-900 select-none text-xs" id="skills-filter-tabs">
          {(['all', 'language', 'framework', 'database', 'tool'] as const).map((cat) => {
            const catLabelMap: Record<string, string> = {
              all: 'Visão Geral',
              language: 'Linguagens',
              framework: 'Frameworks / Libs',
              database: 'Bancos de Dados',
              tool: 'Ferramentas / Infra'
            };
            const isCatActive = activeCategory === cat;
            return (
              <button
                id={`tab-skill-filter-${cat}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  isCatActive ? 'bg-cyber-accent text-black font-semibold' : 'text-gray-400 hover:text-white'
                }`}
                title={`Filtrar habilidades por categoria ${catLabelMap[cat]}`}
              >
                {catLabelMap[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Medidores Visuais de Skills e Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="skills-grid-wrapper">
        {filteredSkills.map((skill, skillIdx) => (
          <motion.div
            id={`cell-skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: skillIdx * 0.03 }}
            className="bg-cyber-card border border-gray-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-gray-700/60 transition-all duration-300 group"
          >
            <div>
              {/* Nome da Skill e Badge de Senoridade */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2 text-gray-200">
                  <span className="text-cyber-accent/60 group-hover:text-cyber-accent transition-colors">
                    {getCategoryIcon(skill.category)}
                  </span>
                  <span className="font-semibold text-sm md:text-base font-display">{skill.name}</span>
                </div>
                <span className="bg-gray-900 text-gray-500 text-[10px] font-mono px-2 py-0.5 rounded border border-gray-850">
                  {skill.experience}
                </span>
              </div>

              {/* Barra Física de Nível de Progresso */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 font-mono mb-1 select-none">
                  <span>Intensidade Operacional</span>
                  <span className="text-cyber-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-950 rounded-full overflow-hidden border border-gray-900">
                  <motion.div
                    id={`progress-bar-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.03 }}
                    className="h-full bg-gradient-to-r from-cyber-accent to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Informações de Caso de Uso no dia a dia do Dev */}
            <div className="border-t border-gray-900/60 pt-2.5">
              <span className="text-[10px] font-mono text-gray-500 block mb-1">Aplicações Práticas:</span>
              <p className="text-gray-400 text-xs leading-relaxed">
                {skill.useCase}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
