/**
 * @file CommandTerminal.tsx
 * @description Terminal interativo estilo linha de comando para apresentar o desenvolvedor de forma lúdica, eficiente e inovadora.
 * Permite comandos de texto ou cliques rápidos para consultas dinâmicas de dados profissionais.
 * Totalmente comentado em português com explicações detalhadas de cada método e botão.
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, ArrowUpRight, CheckCircle } from 'lucide-react';
import { DEVELOPER_BIO, SKILLS_DATA, PROJECTS_DATA } from '../data.ts';
import { TerminalMessage } from '../types.ts';

export default function CommandTerminal() {
  // --- ESTADOS DA APLICAÇÃO (States) ---

  // Guarda o histórico de linhas impressas na tela do terminal
  const [history, setHistory] = useState<TerminalMessage[]>([
    {
      type: 'system',
      text: '🤖 CONEXÃO SEGURA ESTABELECIDA COM SUCESSO.'
    },
    {
      type: 'system',
      text: '👉 Digite um comando abaixo ou clique nas opções rápidas para ler meu portfólio.'
    }
  ]);

  // Captura o valor digitado no input do prompt do terminal
  const [inputValue, setInputValue] = useState<string>('');

  // Mantém a referência do container de mensagens para rolagem automática de tela
  const containerRef = useRef<HTMLDivElement>(null);

  // Mantém a referência do input de texto para focar nele de forma automática
  const inputRef = useRef<HTMLInputElement>(null);

  // --- EFEITOS SEGUNDÁRIOS (Effects) ---

  // Toda vez que o histórico do terminal sofrer alterações, rola a barra automaticamente para o rodapé
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // --- FUNÇÕES DE COMANDO (Command Handlers) ---

  /**
   * @function handleCommand
   * @description Processa o comando inserido, limpa o input e adiciona a respectiva resposta ao histórico.
   * @param {string} cmd - Comando bruto digitado pelo usuário.
   */
  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    // Cria o registro da linha digitada para simular o comportamento de um prompt real
    const userPromptMessage: TerminalMessage = {
      type: 'command',
      text: `wellyngton@portfolio:~# ${cmd}`
    };

    let responseMessages: TerminalMessage[] = [];

    // Estrutura de decisão para verificar qual o comando invocado
    switch (cleanCmd) {
      case 'help':
      case 'ajuda':
      case '?':
        responseMessages = [
          { type: 'output', text: '📋 COMANDOS DISPONÍVEIS:' },
          { type: 'output', text: '  about    - Saiba mais sobre Manywell Wellyngton' },
          { type: 'output', text: '  skills   - Resumo das tecnologias e frameworks dominados' },
          { type: 'output', text: '  projects - Lista dos sistemas criados de forma ágil' },
          { type: 'output', text: '  contact  - Informações de conexão direta e e-mail' },
          { type: 'output', text: '  clear    - Limpa o histórico de comandos da tela' }
        ];
        break;

      case 'about':
      case 'sobre':
        responseMessages = [
          { type: 'output', text: `👤 Nome: ${DEVELOPER_BIO.name}` },
          { type: 'output', text: `💼 Cargo: ${DEVELOPER_BIO.role}` },
          { type: 'output', text: `📍 Localização: ${DEVELOPER_BIO.location}` },
          { type: 'output', text: `📝 Sumário: ${DEVELOPER_BIO.detailedSummary}` },
          { type: 'output', text: `⚡ Status: ${DEVELOPER_BIO.availability}` }
        ];
        break;

      case 'skills':
      case 'stacks':
        responseMessages = [
          { type: 'output', text: '⚡ TECNOLOGIAS E SINTAXES EM DESTAQUE:' },
          ...SKILLS_DATA.slice(0, 8).map(skill => ({
            type: 'output' as const,
            text: `  [●] ${skill.name} (${skill.experience}) - ${skill.useCase}`
          }))
        ];
        break;

      case 'projects':
      case 'projetos':
        responseMessages = [
          { type: 'output', text: '🚀 PROJETOS CONSTRUÍDOS RECENTEMENTE:' },
          ...PROJECTS_DATA.map(p => ({
            type: 'output' as const,
            text: `  ★ ${p.title} (${p.category.toUpperCase()}) - ${p.description} [Métrica: ${p.metric || 'Estável'}]`
          }))
        ];
        break;

      case 'contact':
      case 'contato':
        responseMessages = [
          { type: 'output', text: '📬 CORDAS DE COMUNICAÇÃO DISPONÍVEIS:' },
          { type: 'output', text: `  E-mail: ${DEVELOPER_BIO.email}` },
          { type: 'output', text: `  LinkedIn: ${DEVELOPER_BIO.linkedInUrl}` },
          { type: 'output', text: `  GitHub: ${DEVELOPER_BIO.githubUrl}` }
        ];
        break;

      case 'clear':
      case 'limpar':
        // Reinicializa o histórico para limpar a tela
        setHistory([
          { type: 'system', text: '🧹 Terminal redefinido com sucesso.' }
        ]);
        setInputValue('');
        return;

      default:
        // Caso o comando não exista no interpretador, expõe erro explicativo
        responseMessages = [
          {
            type: 'error',
            text: `❌ Erro: Comando "${cmd}" não reconhecido.`
          },
          {
            type: 'system',
            text: '💡 Dica: Digite ou clique em "help" para ver a lista de transmissão.'
          }
        ];
        break;
    }

    // Atualiza o estado anexando o comando do usuário e subsequentemente os retornos do sistema
    setHistory(prev => [...prev, userPromptMessage, ...responseMessages]);
    // Reseta o input de escrita
    setInputValue('');
  };

  /**
   * @function handleKeyDown
   * @description Disparador associado à captura da tecla Enter para submissão imediata de comandos.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  /**
   * @function clickSuggestion
   * @description Facilita a navegação de usuários mobile ou que preferem não digitar, ativando comandos com um clique.
   */
  const clickSuggestion = (command: string) => {
    handleCommand(command);
    // Devolve o foco ao input para conveniência do usuário
    inputRef.current?.focus();
  };

  return (
    <div id="terminal-section" className="bg-cyber-card border border-gray-800 rounded-lg p-4 font-mono text-sm shadow-2xl relative overflow-hidden h-[420px] flex flex-col glow-hover transition-all duration-300">
      
      {/* Células de decoração superior simulando abas de console de desenvolvimento */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-900 mb-3 select-none">
        <div className="flex items-center space-x-2">
          {/* Luzes decorativas estilo Mac/Linux */}
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70"></span>
          <span className="text-gray-500 text-xs font-mono ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-cyber-accent" />
            wellyngton@engine: ~
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-400 bg-gray-900/60 px-3 py-1 rounded border border-gray-800/40">
          <ActivityIndicator />
          <span className="text-[10px] text-cyber-accent uppercase font-bold tracking-widest">LIVE CONSOLE</span>
        </div>
      </div>

      {/* Caixa de exibição de histórico de mensagens */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar mb-4 scroll-smooth"
      >
        {/* Banner estático de inicialização */}
        <div className="text-cyber-accent font-bold text-xs md:text-sm whitespace-pre leading-tight opacity-90 select-none">
{`  __  __                               _ _ _ _      __ 
 |  \\/  | __ _ _ __  _   _ _      _ __| | | \\ \\    / / 
 | |\\/| |/ _\` | '_ \\| | | | \\ /\\ / / _ \\ | |  \\ \\  / /  
 | |  | | (_| | | | | |_| |  v  v /  __/ | |   \\ \\/ /   
 |_|  |_|\\__,_|_| |_|\\__, |   \\_/\\_/ \\___|_|_|   \\/    
                     |___/                             `}
        </div>
        <div className="text-gray-500 text-xs mb-3">Versão de Firmware v4.1.19-TS. Iniciado com sucesso.</div>

        {/* Mapeamento iterativo para pintar cada mensagem conforme sua tipagem com feedback visual apropriado */}
        {history.map((msg, idx) => (
          <div key={idx} className="leading-relaxed">
            {msg.type === 'command' && (
              <span className="text-cyber-pink font-semibold">{msg.text}</span>
            )}
            {msg.type === 'system' && (
              <span className="text-gray-400 italic">{msg.text}</span>
            )}
            {msg.type === 'output' && (
              <span className="text-gray-200 block whitespace-pre-wrap">{msg.text}</span>
            )}
            {msg.type === 'error' && (
              <span className="text-red-400 block font-semibold">{msg.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Sugestões rápidas de comandos para interação em 1 clique */}
      <div className="mb-3 border-t border-gray-900 pt-3 select-none">
        <span className="text-gray-500 text-xs block mb-1.5">Ações Rápidas (Toque para disparar comandos):</span>
        <div className="flex flex-wrap gap-2">
          {['about', 'skills', 'projects', 'contact', 'clear'].map((suggestion) => (
            <button
              id={`btn-terminal-option-${suggestion}`}
              key={suggestion}
              onClick={() => clickSuggestion(suggestion)}
              className="bg-gray-900 border border-gray-800 hover:border-cyber-accent hover:text-cyber-accent text-gray-300 px-2 py-0.5 rounded text-xs transition-colors duration-200 cursor-pointer"
              title={`Disparar comando '${suggestion}' no console`}
            >
              /{suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt físico e input de digitação */}
      <div className="flex items-center space-x-2 border-t border-gray-900/60 pt-3">
        <span className="text-cyber-accent font-bold select-none">wellyngton@portfolio:~$</span>
        <input
          id="terminal-keyboard-input"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite help..."
          className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 placeholder-gray-700 font-mono text-sm py-1.5"
          autoComplete="off"
          spellCheck="false"
          aria-label="Prompt de Entrada do Terminal"
        />
        {/* Botão para submeter o comando digitado no input */}
        <button
          id="btn-terminal-submit-command"
          onClick={() => handleCommand(inputValue)}
          className="text-cyber-accent hover:text-white transition-colors p-1.5 rounded hover:bg-gray-900 cursor-pointer"
          aria-label="Confirmar envio de comando"
          title="Executar comando digitado"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

/**
 * @component ActivityIndicator
 * @description Indicador pulsante decorativo de estado online ("LIVE") no terminal.
 */
function ActivityIndicator() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-accent"></span>
    </span>
  );
}
