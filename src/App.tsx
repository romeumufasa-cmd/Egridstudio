import React from 'react';
import { Megaphone, PenTool, TrendingUp, Users, Target, CheckCircle2, MessageCircle, ArrowRight, Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

// Link do WhatsApp Business
const WHATSAPP_LINK = "https://wa.me/message/RDT5WRPIUCVZC1";

function Logo() {
  return (
    <div className="flex flex-col items-center justify-center font-display leading-none select-none">
      <div className="flex items-center text-4xl sm:text-5xl font-black uppercase tracking-wider">
        <span className="text-brand-orange">E</span>
        <span className="text-white">GR</span>
        <span className="text-brand-orange -mx-1 italic">/</span>
        <span className="text-white">D</span>
      </div>
      <div className="text-brand-blue text-lg sm:text-xl font-medium tracking-[0.2em] ml-6 mt-[-4px] lowercase">
        studio
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-orange selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <a href="#" className="transform hover:scale-105 transition-transform">
            <Logo />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-gray-300 hover:text-brand-orange transition-colors font-medium">Serviços</a>
            <a href="#como-funciona" className="text-gray-300 hover:text-brand-blue transition-colors font-medium">Como Funciona</a>
            <a href="#beneficios" className="text-gray-300 hover:text-brand-orange transition-colors font-medium">Benefícios</a>
          </nav>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Fale Conosco
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-brand-blue text-sm font-medium mb-6">
                Especialistas em Negócios Locais
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
                Escale seu negócio com <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#FF8C42]">Tráfego Pago</span> e <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-[#42C8FF]">Design Visual</span> de alto nível.
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Transformamos cliques em clientes fiéis. Criamos artes magnéticas e gerenciamos anúncios no Facebook e Instagram para fazer sua empresa dominar a sua região.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  Quero Crescer Meu Negócio
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicos" className="py-24 bg-zinc-950 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nossos Serviços</h2>
              <p className="text-gray-400 text-lg">A combinação perfeita para atrair e converter clientes.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Meta Ads */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-brand-orange/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors text-brand-orange">
                  <Megaphone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gestão de Tráfego Pago (Meta Ads)</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Chega de depender apenas de indicações. Colocamos sua empresa na frente das pessoas certas no Facebook e Instagram, no momento em que elas precisam do seu produto ou serviço.
                </p>
                <ul className="space-y-3">
                  {[
                    "Análise do seu público-alvo local",
                    "Criação e otimização de campanhas",
                    "Foco em mensagens no WhatsApp e visitas",
                    "Relatórios de resultados transparentes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Design Visual */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-brand-blue/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Design Visual Profissional</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  A primeira impressão é a que fica. Criamos artes e criativos envolventes que transmitem profissionalismo, geram desejo e fazem as pessoas clicarem em seus anúncios.
                </p>
                <ul className="space-y-3">
                  {[
                    "Artes para anúncios de alta conversão",
                    "Posts estratégicos para redes sociais",
                    "Identidade visual moderna e atrativa",
                    "Material alinhado com o seu posicionamento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US / BENEFITS */}
        <section id="beneficios" className="py-24 px-4 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Por que escolher a EGRID Studio?</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Sabemos que ser dono de um negócio local exige muito tempo. Nossa missão é cuidar da atração de clientes para que você possa focar no que faz de melhor: entregar um excelente serviço/produto.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Estratégia Local Direcionada</h4>
                      <p className="text-gray-400">Anunciamos exatamente no raio de atuação da sua empresa, evitando desperdício de verba com pessoas que moram longe.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Parceria e Transparência</h4>
                      <p className="text-gray-400">Não somos apenas uma agência, somos parceiros de crescimento. Você saberá exatamente para onde seu investimento está indo.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Foco em Vendas</h4>
                      <p className="text-gray-400">Esqueça curtidas e seguidores vazios. Criamos campanhas e designs pensados para trazer mensagens no WhatsApp e clientes reais.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 blur-3xl rounded-[3rem]"></div>
                <div className="bg-zinc-900 border border-zinc-700/50 rounded-[2rem] p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-2xl rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/20 blur-2xl rounded-full"></div>
                  
                  <h3 className="text-2xl font-bold font-display mb-6">Pronto para dar o próximo passo?</h3>
                  <p className="text-gray-300 mb-8">
                    Clique no botão abaixo para falarmos no WhatsApp. Faremos uma análise rápida do seu negócio para entender como podemos te ajudar a crescer.
                  </p>
                  
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
                  >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF & PORTFOLIO SECTION */}
        <section className="py-24 px-4 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Resultados que Falam por Si</h2>
              <p className="text-gray-400 text-lg">O que os donos de negócios locais dizem sobre o nosso trabalho.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "O meu negócio estava estagnado, mas depois que a EGRID assumiu nossas campanhas, o número de clientes vindo pelo WhatsApp praticamente dobrou no primeiro mês. O investimento compensou rápido.",
                  author: "Marcelo T.",
                  role: "Dono de Assistência Técnica",
                },
                {
                  text: "As artes que eles fazem são incríveis! Finalmente o nosso Instagram transmite a qualidade e o profissionalismo do nosso serviço. Os clientes já chegam com outra percepção.",
                  author: "Ana S.",
                  role: "Clínica de Estética",
                },
                {
                  text: "A transparência deles é o maior diferencial. Já tive experiências ruins antes, mas com a EGRID eu sei exatamente onde cada centavo está indo e consigo ver o retorno real nas vendas.",
                  author: "Carlos R.",
                  role: "Loja de Móveis",
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative hover:border-brand-blue/30 transition-colors">
                  <Quote className="absolute top-6 right-8 w-10 h-10 text-white/5 fill-white/5" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8 relative z-10 break-words group">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xl text-brand-blue shrink-0">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <span className="text-sm text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Portfolio / Showcase CTA */}
            <div className="mt-32">
               
               <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#050505] max-w-5xl mx-auto flex items-center justify-center shadow-2xl bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Para usar a sua própria imagem, você faria o upload dela para o projeto e usaria na tag <img>. Abaixo simulamos a estrutura baseada na arte enviada, recriando com código e imagens limpas (sem telefone). */}
                  <div className="w-full relative flex items-center justify-center py-20 px-6">
                    
                    {/* Imagens de Fundo Desfocadas / Mockup de Criativos */}
                    <div className="absolute top-0 w-full h-[60%] flex items-start justify-center opacity-30 select-none pointer-events-none overflow-hidden">
                       <div className="flex justify-center gap-4 md:gap-8 transform -rotate-6 scale-125 pt-10">
                         {/* Card 1 */}
                         <div className="w-48 md:w-64 aspect-[4/5] bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl skew-y-3 opacity-80 border border-white/10">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-luminosity" alt="Criativo de Serviço" />
                         </div>
                         {/* Card 2 */}
                         <div className="w-56 md:w-72 aspect-[4/5] bg-brand-orange/20 rounded-2xl overflow-hidden shadow-2xl -translate-y-12 opacity-90 border border-white/10">
                             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-luminosity brightness-75" alt="Criativo Corporativo" />
                         </div>
                         {/* Card 3 */}
                         <div className="w-48 md:w-64 aspect-[4/5] bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl -skew-y-3 opacity-80 border border-white/10">
                             <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-luminosity" alt="Criativo de Móveis" />
                         </div>
                       </div>
                    </div>
                    
                    <div className="block z-20 text-center w-full px-4 transform translate-y-12 pb-10">
                       <h4 className="text-5xl md:text-8xl font-display font-black tracking-tight mb-2 drop-shadow-2xl text-brand-blue uppercase">Criativos</h4>
                       <p className="text-2xl md:text-4xl text-white font-medium mb-2 tracking-wide font-display">que conectam e</p>
                       <h4 className="text-5xl md:text-8xl font-display font-black tracking-tight mb-16 drop-shadow-2xl text-brand-orange uppercase">Convertem!</h4>
                       
                       <div className="relative inline-block mb-10 max-w-2xl">
                          <Quote className="w-8 h-8 md:w-10 md:h-10 absolute -top-8 -left-6 md:-left-12 text-brand-blue" />
                          <p className="text-xl md:text-3xl text-gray-200 font-medium leading-normal drop-shadow-lg">
                            Mude a forma como você se comunica com designs que realmente fazem a diferença.
                          </p>
                          <Quote className="w-8 h-8 md:w-10 md:h-10 absolute -bottom-8 -right-6 md:-right-12 text-brand-blue transform rotate-180" />
                       </div>
                       
                       <div className="mt-12 flex flex-col items-center gap-6">
                         <h5 className="text-2xl md:text-3xl font-bold text-white text-center">Aproveite a nossa promoção e solicite agora seu orçamento!</h5>
                         <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all"
                          >
                           <MessageCircle className="w-6 h-6" />
                           Fale pelo WhatsApp
                         </a>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL SECTION */}
        <section className="py-20 px-4 bg-zinc-950 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Não deixe seus concorrentes dominarem sua região!</h2>
            <p className="text-xl text-gray-400 mb-10">
              O momento certo para começar a profissionalizar o seu marketing e atrair mais clientes é agora. <span className="text-brand-orange font-bold block mt-4 text-2xl">Aproveite a nossa promoção e solicite agora seu orçamento!</span>
            </p>
             <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-[#F36523]/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(243,101,35,0.4)]"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-[#050505] px-4 text-center md:text-left">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="scale-75 origin-center md:origin-left mb-2">
              <Logo />
            </div>
            <p className="text-gray-500 text-sm max-w-[250px]">
              Especialistas em performance e design para acelerar o crescimento de negócios locais.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end md:col-span-2">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} EGRID Studio. Todos os direitos reservados.</span>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Contato via WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 z-50 animate-bounce cursor-pointer group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
