import { motion } from 'framer-motion';
import { MessageCircle, Search, FileText } from 'lucide-react';
import { SectionHeading } from './UI';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Tu poses ta question",
      description: "Écris simplement, comme tu parlerais à un ami. Pas besoin de connaître les termes techniques — RebSam te comprend.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Search,
      title: "2. RebSam cherche pour toi",
      description: "En quelques secondes, il explore des milliers de pages de textes sacrés validés pour trouver la réponse la plus précise.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: FileText,
      title: "3. Ta réponse arrive",
      description: "Tu reçois une réponse claire et chaleureuse, avec le Siman et le Seif exacts — pour que tu puisses vérifier toi-même.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background-soft relative overflow-hidden">
      {/* Background Halo Layer - Same as Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-pink-50/30 via-blue-50/20 to-cyan-50/30">
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FF7F50]/10 via-pink-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-100/30 via-blue-50/20 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-50/20 via-pink-50/30 to-transparent blur-3xl opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Comment ça marche ?" 
          subtitle="Une technologie de pointe au service de la tradition millénaire, en toute simplicité."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Intensified Large Soft Glow Behind Cards - Hero Reference */}
          <div className="absolute inset-0 -m-32 md:-m-48 -z-10 pointer-events-none">
            <div className="absolute top-[-30%] left-[5%] w-[700px] h-[700px] bg-gradient-to-br from-[#FF7F50]/35 via-pink-200/40 to-transparent rounded-full blur-[140px] opacity-80"></div>
            <div className="absolute bottom-[-25%] right-[0%] w-[800px] h-[800px] bg-gradient-to-tl from-blue-200/45 via-purple-200/40 to-transparent rounded-full blur-[160px] opacity-75"></div>
            <div className="absolute top-[25%] left-[45%] w-[600px] h-[600px] bg-gradient-to-br from-purple-100/35 via-[#FF7F50]/30 to-transparent rounded-full blur-[130px] opacity-70"></div>
          </div>
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-cyan-100 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border-4 border-white`}>
                <step.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
              <p className="text-secondary/80 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}