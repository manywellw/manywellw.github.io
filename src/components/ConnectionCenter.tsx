/**
 * @file ConnectionCenter.tsx
 * @description Central eletrônica de conexões e contatos para o portfólio de Manywell Wellyngton.
 * Apresenta links corporativos e um formulário tecnológico interativo com simulação de transmissão de pacotes criptografados.
 * Totalmente comentado em português com explicações passo a passo de sua dinâmica.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_BIO } from '../data.ts';

export default function ConnectionCenter() {
  // --- FORMULÁRIO DE ESTADOS (States) ---

  // Controla os campos reativos do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Controla o estado de envio: 'idle' (ocioso), 'submitting' (enviando pacotes), 'success' (transmitido)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Controla mensagens de erro simples caso o validação preventiva client-side falhe
  const [validationError, setValidationError] = useState<string>('');

  // --- MÉTODOS DE AÇÃO (Action Handlers) ---

  /**
   * @function handleInputChange
   * @description Sincroniza em tempo real as digitações nos inputs com a estrutura de estado modular.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpa quaisquer erros de validação ao passo que o usuário corrige a digitação
    if (validationError) setValidationError('');
  };

  /**
   * @function handleFormSubmit
   * @description Processa o disparo preventivo do formulário, valida os campos e simula transmissão em rede.
   */
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validações básicas de preenchimento em tela
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Por favor, preencha todos os campos demarcados antes de enviar.');
      return;
    }

    // Altera o estado para simular processamento/transmissão assíncrona
    setSubmitStatus('submitting');

    // Simula uma transmissão de pacotes virtuais que demora 2.2 segundos para concluir
    setTimeout(() => {
      setSubmitStatus('success');
      // Limpa os campos do formulário para próximos envios oportunos
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2200);
  };

  /**
   * @function resetSubmitStatus
   * @description Permite ao usuário voltar a ver o formulário após uma transmissão concluída com êxito.
   */
  const resetSubmitStatus = () => {
    setSubmitStatus('idle');
  };

  return (
    <section id="connection-center" className="py-12 border-t border-gray-900">
      
      {/* Cabeçalho de Contato */}
      <div className="mb-10 text-center md:text-left">
        <div className="flex items-center gap-2 mb-1.5 justify-center md:justify-start">
          <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" id="dot-contact-title-glow" />
          <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest" id="lbl-contact-section-subtitle">CONEXÃO DIRETA</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight" id="lbl-contact-section-title">
          Estação de Contato
        </h2>
        <p className="text-gray-400 text-sm mt-1 max-w-xl mx-auto md:mx-0" id="lbl-contact-section-desc">
          Mande uma transmissão criptografada para discutir projetos inovadores, contratações corporativas ou consultorias.
        </p>
      </div>

      {/* Grid de Contato de Duas Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch" id="contact-interface-grid">
        
        {/* Lado Esquerdo: Redes e Dados Diretos de Manywell (5 colunas) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6" id="contact-info-panel-left">
          
          {/* Bloco de Mensagem Rápida */}
          <div className="bg-cyber-card border border-gray-800 p-5 rounded-xl flex-1 flex flex-col justify-between" id="box-developer-pills">
            <div>
              <span className="text-xs font-mono text-gray-500 block mb-2 uppercase">RECEPTOR AUTORIZADO</span>
              <h3 className="text-lg font-bold text-white font-display mb-1">{DEVELOPER_BIO.name}</h3>
              <p className="text-xs text-cyber-accent font-mono mb-4">{DEVELOPER_BIO.role}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Estou sempre entusiasmado em fechar parcerias, projetar soluções escaláveis ou debater novos avanços no desenvolvimento de softwares eficientes.
              </p>
            </div>

            {/* Linhas de contatos brutos explicados */}
            <div className="space-y-3.5 border-t border-gray-900 pt-4 text-xs font-mono">
              <div id="info-location-row">
                <span className="text-gray-500 block">LOCALIZAÇÃO ATUAL:</span>
                <span className="text-gray-300">{DEVELOPER_BIO.location}</span>
              </div>
              <div id="info-email-row">
                <span className="text-gray-500 block">E-MAIL PREFERENCIAL:</span>
                <a href={`mailto:${DEVELOPER_BIO.email}`} className="text-cyber-accent hover:underline" title="Iniciar e-mail corporativo para Manywell">
                  {DEVELOPER_BIO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bloco de Links e Redes Sociais */}
          <div className="bg-cyber-card border border-gray-800 p-5 rounded-xl select-none" id="box-social-channels">
            <span className="text-xs font-mono text-gray-500 block mb-3 uppercase">CANAIS DE TRANSMISSÃO</span>
            <div className="flex gap-3">
              {/* Link para o LinkedIn oficial */}
              <a
                id="lnk-social-linkedin-button"
                href={DEVELOPER_BIO.linkedInUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex-1 bg-gray-900 hover:bg-[#0077b5] border border-gray-850 hover:border-white/20 text-gray-300 hover:text-white py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-medium transition-all cursor-pointer"
                title="Acessar o perfil profissional de Manywell no LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              {/* Link para o GitHub oficial */}
              <a
                id="lnk-social-github-button"
                href={DEVELOPER_BIO.githubUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex-1 bg-gray-900 hover:bg-zinc-950 border border-gray-850 hover:border-white/20 text-gray-300 hover:text-white py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-medium transition-all cursor-pointer"
                title="Acessar o perfil de Manywell no GitHub onde seus projetos residem"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Lado Direito: Formulário com State Switcher de Sucesso (7 colunas) */}
        <div className="md:col-span-7 bg-cyber-card border border-gray-800 rounded-xl p-6 relative flex flex-col justify-center overflow-hidden" id="contact-form-panel-right">
          
          <AnimatePresence mode="wait">
            {/* ESTADO 1: Formulário pronto para digitação (Idle) */}
            {submitStatus === 'idle' && (
              <motion.form
                id="contact-interactive-form"
                key="form-idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                {/* Alerta de validação interna */}
                {validationError && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-lg mb-2" id="box-validation-error-msg">
                    ⚠️ {validationError}
                  </div>
                )}

                {/* Grid Nome + E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="form-input-name" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5">Nome Completo</label>
                    <input
                      id="form-input-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Identifique-se..."
                      className="bg-gray-950/70 border border-gray-850 focus:border-cyber-accent outline-none text-white px-3.5 py-2.5 rounded-lg text-sm transition-all focus:ring-1 focus:ring-cyber-accent/20 placeholder-gray-700"
                      autoComplete="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="form-input-email" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5">Endereço de E-mail</label>
                    <input
                      id="form-input-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nome@empresa.com"
                      className="bg-gray-950/70 border border-gray-850 focus:border-cyber-accent outline-none text-white px-3.5 py-2.5 rounded-lg text-sm transition-all focus:ring-1 focus:ring-cyber-accent/20 placeholder-gray-700"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Campo Assunto */}
                <div className="flex flex-col">
                  <label htmlFor="form-input-subject" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5">Assunto da Mensagem</label>
                  <input
                    id="form-input-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ex: Proposta de Consultoria ou Contratação"
                    className="bg-gray-950/70 border border-gray-850 focus:border-cyber-accent outline-none text-white px-3.5 py-2.5 rounded-lg text-sm transition-all focus:ring-1 focus:ring-cyber-accent/20 placeholder-gray-700"
                  />
                </div>

                {/* Campo Mensagem */}
                <div className="flex flex-col">
                  <label htmlFor="form-input-message" className="text-[10px] font-mono text-gray-500 uppercase mb-1.5">Corpo do Texto</label>
                  <textarea
                    id="form-input-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Descreva brevemente sua necessidade técnica..."
                    className="bg-gray-950/70 border border-gray-850 focus:border-cyber-accent outline-none text-white px-3.5 py-2.5 rounded-lg text-sm transition-all focus:ring-1 focus:ring-cyber-accent/20 placeholder-gray-700 resize-none"
                  />
                </div>

                {/* Botão de Envio de Transmissão */}
                <button
                  id="btn-submit-contact-form"
                  type="submit"
                  className="w-full bg-cyber-accent hover:bg-black border border-cyber-accent text-black hover:text-cyber-accent py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-all cursor-pointer select-none group"
                  title="Clique para realizar o envio tecnológico da sua mensagem"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Transmitir Sinal de Contato
                </button>
              </motion.form>
            )}

            {/* ESTADO 2: Transmitindo Pacotes (Submitting loader terminal) */}
            {submitStatus === 'submitting' && (
              <motion.div
                id="contact-transmitting-loader"
                key="form-submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                {/* Radar ou círculo animado rotacionando rítmico */}
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-cyber-accent animate-spin mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-cyber-accent bg-cyber-accent/10 animate-ping" />
                </div>
                <div className="font-mono text-xs text-cyber-accent space-y-1 select-none">
                  <p className="font-bold tracking-widest text-sm mb-1 animate-pulse">TRANSMITINDO SINAL...</p>
                  <p className="text-gray-500">criptografando cabeçalhos...</p>
                  <p className="text-gray-500">estabelecendo link de handshake com o host...</p>
                  <p className="text-gray-400">status: conectando ao correio Kamilaagnes1997...</p>
                </div>
              </motion.div>
            )}

            {/* ESTADO 3: Transmitido com Sucesso (Success Feedback Screen) */}
            {submitStatus === 'success' && (
              <motion.div
                id="contact-success-screen"
                key="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                {/* Ícone de sucesso piscante neon */}
                <div className="bg-cyber-accent/15 p-4 rounded-full border border-cyber-accent mb-4 shadow-[0_0_15px_rgba(0,255,204,0.15)] flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-cyber-accent" />
                </div>

                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider mb-2">Transmissão Concluída!</h3>
                <p className="text-xs text-gray-400 max-w-sm mb-6 leading-relaxed">
                  Os pacotes digitais foram formatados e direcionados com sucesso ao correio eletrônico de Wellyngton. Em breve, a resposta de recepção será gerada.
                </p>

                {/* Botão para Restabelecer novas conexões */}
                <button
                  id="btn-contact-return-form"
                  onClick={resetSubmitStatus}
                  className="bg-gray-900 hover:bg-black border border-gray-800 hover:border-cyber-accent text-gray-300 hover:text-cyber-accent px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer"
                  title="Clique para apagar a mensagem anterior e abrir o formulário em branco"
                >
                  [ VOLTAR AO PROTOCOLO DE INSCRITOS ]
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}
