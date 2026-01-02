
import { Salad, Bonus, FAQItem } from './types';

export const SALADS: Salad[] = [
  { image: "https://i.ibb.co/sdjrJwTL/SALADA-REFRESCANTE.webp", description: "Salada Refrescante + Molho Cítrico" },
  { image: "https://i.ibb.co/B5BZTkDQ/SALADA-R-STICA.png", description: "Salada Rústica + Mostarda e Mel" },
  { image: "https://i.ibb.co/sB6NSpf/SALADA-CAESAR.webp", description: "Salada Caesar + Molho Original" },
  { image: "https://i.ibb.co/Vc37CTwS/SALADA-BIG-MAC.webp", description: "Salada Big Mac + Molho Especial" },
  { image: "https://i.ibb.co/FbDfLGjS/SALADA-MEDITERR-NEA.webp", description: "Salada Mediterrânea + Molho Agridoce" },
  { image: "https://i.ibb.co/SGcL8W4/SALADA-TOSCANA.webp", description: "Salada Toscana + Molho Siciliano" },
];

export const BONUSES: Bonus[] = [
  { title: "Como lucrar com saladas no pote", price: "R$29,90" },
  { title: "Molhos especiais baratos", price: "R$29,90" },
  { title: "Lista de compras", price: "R$29,90" },
];

export const TESTIMONIALS: string[] = [
  "https://i.ibb.co/GQzgLQLb/1.webp",
  "https://i.ibb.co/C3rz9cXj/2.webp",
  "https://i.ibb.co/cSVqcvBw/3.webp",
  "https://i.ibb.co/MdXyK9N/4.webp",
  "https://i.ibb.co/Z1c0xYCM/5.webp",
  "https://i.ibb.co/ycLQxDM2/6.webp",
];

export const FAQS: FAQItem[] = [
  {
    question: "Como recebo minhas receitas?",
    answer: "Assim que o pagamento for confirmado, o seu acesso será enviado imediatamente para o seu e-mail. Qualquer dúvida, é só entrar em contato pelo e-mail de suporte."
  },
  {
    question: "O curso tem garantia?",
    answer: "Sim! Você tem 7 dias de garantia incondicional para testar as receitas. Se não gostar por qualquer motivo, é só pedir o reembolso e devolvemos 100% do valor investido. Simples assim."
  },
  {
    question: "Preciso de potes especiais?",
    answer: "Não precisa! Qualquer pote que você já tem em casa funciona perfeitamente. Pode ser de plástico, de vidro, grande ou pequeno. O importante é que feche bem para manter a salada fresca."
  },
  {
    question: "As receitas incluem os molhos?",
    answer: "Com certeza! Todas as receitas já vêm com molhos específicos e deliciosos."
  },
  {
    question: "Quanto tempo dura a salada no pote na geladeira?",
    answer: "Quando montada corretamente seguindo o método das camadas que eu ensino, a salada dura de 5 a 7 dias fresquinha na geladeira."
  },
  {
    question: "Posso vender saladas no pote? quanto posso cobrar?",
    answer: "Pode sim! Muitas alunas usam as receitas para vender e gerar renda extra. Dependendo da sua região e dos ingredientes, saladas no pote são vendidas entre R$ 11 e R$ 16 por pote (às vezes até mais)."
  },
  {
    question: "As receitas são fáceis de fazer?",
    answer: "Super fáceis! Todas as receitas têm instruções claras e passo a passo simples."
  },
  {
    question: "Os ingredientes são fáceis de encontrar?",
    answer: "Sim! Todas as receitas usam ingredientes simples e acessíveis que você encontra em qualquer supermercado."
  },
  {
    question: "Preciso de ter balança ou utensílios específicos?",
    answer: "Não precisa de nada disso. Você só precisa de potes, colheres, uma faca e uma tábua de corte."
  }
];
