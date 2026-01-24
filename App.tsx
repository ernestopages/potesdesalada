
import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Gift, 
  ShoppingBag, 
  ShieldCheck, 
  ChevronDown, 
  Smile, 
  PlusCircle, 
  Utensils, 
  ClipboardList,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
// Importação com extensão explícita para compatibilidade com Vercel/ES Modules
import { SALADS, BONUSES, TESTIMONIALS, FAQS } from './constants.tsx';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(18 * 60); // 18 minutes in seconds
  const carouselRef = useRef<HTMLDivElement>(null);
  const REDIRECT_URL = "https://indec-digital.mycartpanda.com/checkout/205444975:1";

  // Helper to get XX, YY and ZZ dates
  const getOfferDaysText = () => {
    const today = new Date();
    const zz = today.getDate().toString().padStart(2, '0');
    
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const yy = yesterday.getDate().toString().padStart(2, '0');
    
    const dayBeforeYesterday = new Date();
    dayBeforeYesterday.setDate(today.getDate() - 2);
    const xx = dayBeforeYesterday.getDate().toString().padStart(2, '0');
    
    return `${xx}, ${yy} e ${zz}`;
  };

  const offerDays = getOfferDaysText();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    document.getElementById('final-offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const redirectToCheckout = () => {
    window.location.href = REDIRECT_URL;
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    { text: "Funciona com qualquer pote", icon: <Smile className="text-green-800" size={26} /> },
    { text: "+30 saladas deliciosas", icon: <PlusCircle className="text-green-800" size={26} /> },
    { text: "15 Molhos irresistíveis", icon: <Utensils className="text-green-800" size={26} /> },
    { text: "O segredo das camadas", icon: <Smile className="text-green-800" size={26} /> },
    { text: "Conservação de 7 dias", icon: <PlusCircle className="text-green-800" size={26} /> },
    { text: "Prontas em 30 minutos", icon: <Clock className="text-green-800" size={26} /> },
    { text: "Passo a passo de preparo", icon: <ClipboardList className="text-green-800" size={26} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-green-100 font-regular overflow-x-hidden text-gray-900">
      {/* Dynamic Date Offer Bar */}
      <div className="bg-orange-500 text-white text-center py-2 px-3 sticky top-0 z-50 text-xs md:text-sm font-bold shadow-md uppercase tracking-wide">
        OFERTA VÁLIDA APENAS NOS DIAS {offerDays}
      </div>

      {/* Hero Section */}
      <header className="bg-white pt-8 pb-12 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 px-2">
            Aprenda a Fazer <span className="text-green-600">+30 Saladas no Pote</span> que <span className="text-green-600">Saciam de Verdade</span>, Prepare Tudo em Apenas 30 Minutos e Tenha Salada Pronta Para a sua Família por 7 Dias
          </h1>
          <p className="text-base md:text-xl text-gray-600 mb-8 px-4 leading-relaxed">
            Mesmo que você não tenha tempo, esteja cansada e queira gastar pouco, dá pra comer bem a semana toda.
          </p>
          
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-green-100 max-w-2xl mx-auto">
            <img 
              src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281586/CAPA_nqbngv.webp" 
              alt="Capa Saladas no Pote" 
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          <div className="bg-green-50 rounded-2xl p-6 md:p-8 mb-8 inline-block w-full max-w-md shadow-sm border border-green-100">
            <p className="text-red-600 line-through text-base md:text-lg font-bold">De R$99,90</p>
            <div className="my-1">
              <p className="text-black text-lg md:text-xl font-bold">por apenas</p>
              <p className="text-4xl md:text-6xl font-bold text-green-700">R$10,00</p>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-2 leading-relaxed">
              Apenas um valor simbólico para separar quem realmente quer aprender a fazer saladas no pote dos curiosos.
            </p>
          </div>

          <button 
            onClick={scrollToOffer}
            className="w-full max-w-xs md:max-w-md bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-base md:text-lg shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 mx-auto whitespace-nowrap"
          >
            QUERO FAZER SALADAS GOSTOSAS
          </button>
        </div>
      </header>

      {/* What you'll find Section */}
      <section className="py-12 md:py-20 bg-[#FDFBF0] px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-10 text-gray-900 uppercase leading-tight">
            <span className="block font-regular">O QUE VOCÊ</span>
            <span className="block font-bold text-green-700">VAI ENCONTRAR</span>
          </h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1 max-w-md mx-auto w-full px-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 py-0.5">
                  <div className="shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-lg md:text-xl text-green-900 font-bold tracking-tight">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto border-4 border-white mt-4">
              <img 
                src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281586/ORDEM_DE_MONTAGEM_l4pnif.webp" 
                alt="Ordem de Montagem" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="text-center mt-4">
               <button 
                onClick={scrollToOffer}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-base md:text-lg shadow-lg transition-all inline-flex items-center gap-2 transform hover:scale-[1.02] whitespace-nowrap"
              >
                QUERO AS RECEITAS!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Salad Gallery */}
      <section className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-900">Algumas Saladas no Pote que Você Irá Aprender:</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {SALADS.map((salad, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm group">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={salad.image} 
                    alt={salad.description} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-5 text-center">
                  <p className="font-bold text-gray-800 text-xs md:text-base leading-tight">"{salad.description}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center px-4">
            <p className="text-base md:text-xl text-gray-600 mb-8 font-regular">
              E muito mais… receitas de saladas e molhos que transformarão sua forma de se alimentar de forma saudável.
            </p>
            <button 
              onClick={scrollToOffer}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-8 rounded-xl text-base md:text-lg shadow-md transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              QUERO AS RECEITAS!
            </button>
          </div>
        </div>
      </section>

      {/* Irresistible Sauces */}
      <section className="py-12 md:py-20 bg-green-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl text-gray-900 leading-tight uppercase mb-8">
            OS MOLHOS MAIS <span className="font-bold text-green-700">IRRESISTÍVEIS</span> PARA CONQUISTAR A SUA <span className="font-bold text-green-700">FAMÍLIA</span>
          </h2>
          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg max-w-2xl mx-auto">
            <img src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281586/molhos_x4_l8gerl.webp" alt="Molhos Irresistíveis" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 md:py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Você Ainda Irá Receber <span className="text-red-600">+3 Bônus Exclusivos</span>:
            </h2>
          </div>

          <div className="space-y-4">
            {BONUSES.map((bonus, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border-2 border-dashed border-green-200 bg-green-50/50">
                <div className="flex items-center gap-4 w-full">
                  <div className="bg-green-600 text-white p-2 md:p-3 rounded-xl shrink-0">
                    <Gift size={22} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm md:text-lg">
                      Bônus 0{idx + 1}: "{bonus.title}" <span className="line-through text-gray-400 font-regular">({bonus.price})</span>
                    </h4>
                  </div>
                </div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap w-full sm:w-auto text-center">
                  HOJE É GRÁTIS
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={scrollToOffer}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-base md:text-lg shadow-lg transition-all whitespace-nowrap"
            >
              QUERO FAZER SALADAS GOSTOSAS
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-900 text-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">Você Passa por Isso?</h2>
          <div className="space-y-3 mb-12 text-left">
            {[
              "Preguiça de lavar e cortar salada todo dia.",
              "Joga salada fora antes de conseguir usar.",
              "Deixa de comer salada alguns dias da semana.",
              "Cansou de só alface e tomate.",
              "Já come saudável, mas falha na salada."
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <CheckCircle className="text-red-500 shrink-0" size={16} />
                <p className="text-sm md:text-lg font-regular">{text}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-xl md:text-2xl font-bold text-green-400 mb-4 tracking-widest uppercase">ENTÃO VOCÊ PRECISA DISSO:</p>
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section id="final-offer" className="py-12 md:py-24 bg-gray-100 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-200">
          <div className="flex flex-col lg:flex-row">
            {/* White side - Mockup Area */}
            <div className="lg:w-3/5 order-2 lg:order-1 flex flex-col items-center bg-white p-6 md:p-12">
              <div className="mb-6 w-full text-center">
                {/* Mockup Image */}
                <img 
                  src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281588/MOCKUP_g8iyq0.webp" 
                  alt="Mockup Guia Saladas" 
                  className="w-full max-w-lg md:max-w-xl h-auto mx-auto mb-6 transform hover:scale-[1.02] transition-transform duration-500" 
                />
                
                <div className="inline-flex flex-col items-start gap-3 text-left max-w-sm mx-auto mb-6">
                  {[
                    "+30 receitas de saladas gostosas",
                    "Como lucrar com saladas no pote",
                    "Molhos irresistíveis e baratos",
                    "Lista de compras"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm md:text-lg text-gray-700 font-bold">
                      <CheckCircle className="text-green-500 shrink-0" size={20} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price section - compact */}
              <div className="mb-8 w-full text-center space-y-1">
                <p className="text-red-600 line-through text-lg md:text-xl font-bold opacity-80">De R$99,90</p>
                <p className="text-gray-900 text-xl md:text-2xl font-bold">por apenas</p>
                <p className="text-6xl md:text-7xl font-bold text-green-600 tracking-tight">R$10,00</p>
              </div>
              
              {/* Button - Redireciona para checkout e PULSA */}
              <button 
                onClick={redirectToCheckout}
                className="w-full max-w-xs md:max-w-sm bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-base md:text-xl shadow-xl transition-all transform flex items-center justify-center gap-3 whitespace-nowrap animate-pulse-conversion"
              >
                <ShoppingBag size={24} />
                QUERO COMPRAR AGORA
              </button>
              
              <div className="mt-6 text-center w-full space-y-4">
                <p className="text-orange-600 font-bold text-base md:text-lg flex items-center justify-center gap-2">
                  <Clock size={20} />
                  ESSA OFERTA EXPIRA EM {formatTime(timeLeft)}
                </p>
                <div className="flex items-center justify-center gap-3 text-gray-400 pt-3 border-t border-gray-100">
                   <ShieldCheck size={18} />
                   <span className="text-xs font-medium">Compra 100% Segura • 7 Dias de Garantia</span>
                </div>
              </div>
            </div>

            {/* Green side - Organized & Compact Title */}
            <div className="bg-green-600 lg:w-2/5 flex items-center justify-center p-8 md:p-12 order-1 lg:order-2">
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-white text-3xl md:text-5xl font-bold text-center leading-[1.1] tracking-tight">
                  Potes de Saladas
                </h3>
                <span className="text-green-300 text-3xl md:text-4xl font-bold">+</span>
                <h3 className="text-white text-3xl md:text-5xl font-bold text-center leading-[1.1] tracking-tight">
                  Molhos Irresistíveis
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-16 bg-white px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281592/EXPERT_vvxeoj.webp" 
                alt="Laura Aurora" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Quem sou eu? <br/> 
              <span className="text-green-600">Saladas da Laura</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-sm md:text-lg leading-relaxed font-regular">
              <p>“Meu nome é Laura Aurora e, por muito tempo, dieta significava sofrimento pra mim. Eu tentava, falhava, me culpava… e desistia. Não foi contando calorias que emagreci. Foi organizando minha alimentação e da minha família com saladas no pote que saciam de verdade. Elas funcionaram tão bem que começaram a fazer sucesso na internet e acabou se tornando minha nova fonte de renda e que me gera cerca de R$4.500 todo mês com encomendas… Criei esse guia para mulheres comuns, como eu, que querem comer melhor sem viver em dieta chata e até mesmo fazer uma renda extra com isso.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fully functional carousel with visible arrows */}
      <section className="py-16 bg-green-50 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold px-4 text-gray-900 leading-tight max-w-4xl mx-auto">
              Eu recebo <span className="text-green-600">mensagens</span> como essas todo dia, e logo será <span className="text-green-600">você</span> me enviando mensagens assim <span className="text-green-600">também</span>!
            </h2>
          </div>
          
          <div className="relative">
            {/* Carousel Navigation Buttons - Always visible for better UX */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:-px-4 z-20 pointer-events-none">
              <button 
                onClick={() => scrollCarousel('left')}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 pointer-events-auto ring-4 ring-white"
                aria-label="Anterior"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 pointer-events-auto ring-4 ring-white"
                aria-label="Próximo"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className="flex gap-4 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {TESTIMONIALS.map((img, idx) => (
                <div 
                  key={idx} 
                  className="snap-center shrink-0 w-[85%] sm:w-[50%] lg:w-[33%] bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                >
                  <img 
                    src={img} 
                    alt={`Depoimento ${idx + 1}`} 
                    className="w-full h-auto object-cover" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
            
            {/* Visual indicators (dots) */}
            <div className="flex justify-center gap-3 mt-2">
               {TESTIMONIALS.map((_, idx) => (
                 <div key={idx} className="w-2.5 h-2.5 rounded-full bg-green-200"></div>
               ))}
            </div>
          </div>

          {/* New Call to Action Button below testimonials - Redireciona para checkout e PULSA */}
          <div className="mt-16 text-center">
            <button 
              onClick={redirectToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-base md:text-lg shadow-xl transition-all transform inline-flex items-center gap-3 animate-pulse-conversion whitespace-nowrap"
            >
              ESTOU PRONTA, QUERO AS SALADAS
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Dúvidas Frequentes</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-xs md:text-sm">© 2024 Saladas da Laura Aurora. Todos os direitos reservados.</p>
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 text-[10px] md:text-sm font-regular mb-8 underline">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed opacity-40">
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico ou nutricionista para tratar de assuntos relativos à saúde e alimentação. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
};

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors gap-4"
      >
        <span className="font-bold text-gray-800 text-sm md:text-base leading-snug">{question}</span>
        <ChevronDown className={`text-green-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 md:p-6 pt-0 text-gray-600 text-xs md:text-sm font-regular leading-relaxed border-t border-gray-50 bg-gray-50/30">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default App;
