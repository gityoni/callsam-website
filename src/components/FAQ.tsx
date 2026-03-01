import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './UI';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-secondary-dark group-hover:text-primary'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-secondary/80 leading-relaxed pr-8">
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Puis-je vraiment faire confiance aux réponses de RebSam ?",
      answer: "RebSam est un compagnon d'étude extrêmement fiable — il cite toujours ses sources avec précision (Livre, Siman, Seif). Mais comme il se doit : pour un Psak formel ou un cas personnel complexe, consulte toujours ton Rav. Lui seul connaît tous les détails de ta situation. RebSam est là pour t'éclairer et t'accompagner, pas pour remplacer ton Rav."
    },
    {
      question: "Sur quels textes sacrés RebSam s'appuie-t-il ?",
      answer: "Exclusivement des textes validés : Choulhan Aroukh, Michna Beroura, Yalkout Yossef, Igrot Moshé, Hazon Ish, Ben Ich Haï, Kaf HaHaïm, et bien d'autres Poskim de référence. Contrairement à ChatGPT, RebSam ne devine jamais — chaque réponse est directement ancrée dans les sources. Et la liste des textes consultés change à chaque session !"
    },
    {
      question: "Mes questions restent-elles confidentielles ?",
      answer: "Absolument. RebSam fonctionne en circuit fermé : tes conversations sont anonymisées et ne sont jamais utilisées pour entraîner un modèle public. Ce que tu confies à RebSam reste entre toi et lui. Pose tes questions les plus intimes — sans honte, sans jugement."
    },
    {
      question: "RebSam connaît-il la différence entre les coutumes ashkénazes et séfarades ?",
      answer: "Oui, et c'est une de ses forces ! Précise simplement ton rite dans ta question (\"je suis Séfarade\" ou \"je suis Ashkénaze\"), et RebSam adaptera sa réponse — en citant le Rama pour les Ashkénazes, ou le Maran et le Bet Yossef pour les Séfarades."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background-soft relative overflow-hidden">
      {/* Background Halo Layer - Same as Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-pink-50/30 via-blue-50/20 to-cyan-50/30">
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FF7F50]/10 via-pink-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-100/30 via-blue-50/20 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-50/20 via-pink-50/30 to-transparent blur-3xl opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Questions Fréquentes" 
          subtitle="Tout ce que tu dois savoir pour utiliser RebSam en toute sérénité."
        />

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative">
          {/* Intensified Large Soft Glow Behind Container - Hero Reference */}
          <div className="absolute inset-0 -m-32 md:-m-48 -z-10 pointer-events-none">
            <div className="absolute top-[-30%] left-[5%] w-[700px] h-[700px] bg-gradient-to-br from-[#FF7F50]/35 via-pink-200/40 to-transparent rounded-full blur-[140px] opacity-80"></div>
            <div className="absolute bottom-[-25%] right-[0%] w-[800px] h-[800px] bg-gradient-to-tl from-blue-200/45 via-purple-200/40 to-transparent rounded-full blur-[160px] opacity-75"></div>
            <div className="absolute top-[25%] left-[45%] w-[600px] h-[600px] bg-gradient-to-br from-purple-100/35 via-[#FF7F50]/30 to-transparent rounded-full blur-[130px] opacity-70"></div>
          </div>
          
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}