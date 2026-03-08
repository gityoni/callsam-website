import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from './UI';
import { useState } from 'react';
import ChatModal from './ChatModal';

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Pastel Cloudy Background - Coral/Tech/Organic */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-pink-50/30 via-blue-50/20 to-cyan-50/30">
        {/* Large soft gradient blobs */}
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FF7F50]/10 via-pink-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-100/30 via-blue-50/20 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-50/20 via-pink-50/30 to-transparent blur-3xl opacity-50" />
        
        {/* Organic floating shapes with coral accent */}
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 6, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-[15%] right-[12%] w-72 h-72 rounded-[45%_55%_65%_35%/50%_60%_40%_50%] bg-gradient-to-br from-[#FF7F50]/8 via-pink-100/15 to-transparent blur-2xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 35, 0],
            rotate: [0, -7, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[25%] left-[8%] w-96 h-96 rounded-[55%_45%_40%_60%/65%_35%_65%_35%] bg-gradient-to-tr from-cyan-100/25 via-blue-100/20 to-transparent blur-2xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 4, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-[50%] right-[25%] w-64 h-64 rounded-[50%_50%_60%_40%/60%_40%_50%_50%] bg-gradient-to-bl from-[#FF7F50]/6 via-purple-50/20 to-transparent blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Intensified Large Soft Glow Behind Content - Coral/Purple/Blue Pastel Halo */}
          <div className="absolute inset-0 -m-32 md:-m-48 -z-10">
            <div className="absolute top-[-30%] left-[5%] w-[700px] h-[700px] bg-gradient-to-br from-[#FF7F50]/35 via-pink-200/40 to-transparent rounded-full blur-[140px] opacity-80"></div>
            <div className="absolute bottom-[-25%] right-[0%] w-[800px] h-[800px] bg-gradient-to-tl from-blue-200/45 via-purple-200/40 to-transparent rounded-full blur-[160px] opacity-75"></div>
            <div className="absolute top-[25%] left-[45%] w-[600px] h-[600px] bg-gradient-to-br from-purple-100/35 via-[#FF7F50]/30 to-transparent rounded-full blur-[130px] opacity-70"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] text-sm font-semibold mb-6 tracking-wide uppercase border border-[#FF7F50]/20">
              Votre expert en Halacha, disponible 24h/24
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-dark mb-6 leading-tight tracking-tight">
              <span className="font-logo font-black text-primary" style={{ letterSpacing: '-0.02em' }}>Reb<span className="text-primary">Sam</span></span> : Un Rebbe dans votre dose d&apos;IA quotidienne.
            </h1>
            <p className="text-xl md:text-2xl text-secondary/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-secondary-dark">RebSam est la seule IA juive conçue pour ne jamais inventer — chaque réponse est ancrée dans des sources vérifiées, citées avec précision.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="w-full sm:w-auto text-lg px-8 py-4"
                icon={<MessageSquare size={20} />}
              >
                Pose ta première question à RebSam
              </Button>
              <Button 
                variant="ghost" 
                href="#how-it-works"
                className="w-full sm:w-auto text-lg px-8 py-4 group"
              >
                Découvrez comment RebSam est la seule IA juive
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </motion.div>

          {/* Hero Image/Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 md:mt-24 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white mx-auto max-w-5xl aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">
              {/* Interface mockup placeholder or stylized graphic */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white flex flex-col">
                {/* Mockup Header */}
                <div className="h-12 border-b border-gray-100 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 opacity-50"></div>
                  <div className="ml-4 h-6 w-64 bg-gray-100 rounded-md opacity-50"></div>
                </div>
                {/* Mockup Body */}
                <div className="flex-1 p-8 flex flex-col gap-6 overflow-hidden relative">
                  {/* Chat Bubbles Mockup */}
                  <div className="self-end bg-primary/10 text-secondary-dark p-4 rounded-2xl rounded-tr-sm max-w-[80%] md:max-w-[60%] shadow-sm">
                    <p className="text-sm md:text-base font-medium">Est-ce que je peux utiliser un four à micro-ondes pour du lait après avoir chauffé de la viande ?</p>
                  </div>
                  
                  <div className="self-start bg-white border border-gray-100 p-6 rounded-2xl rounded-tl-sm max-w-[90%] md:max-w-[80%] shadow-sm flex gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary shrink-0 flex items-center justify-center text-white font-serif font-bold text-sm">R</div>
                    <div className="space-y-3">
                      <p className="text-sm md:text-base text-secondary">Bonjour. C'est une excellente question de kacherout qui dépend de plusieurs détails.</p>
                      <p className="text-sm md:text-base text-secondary">Selon le <span className="font-semibold text-primary">Shulchan Aruch (Yoreh Deah 92:8)</span> et les décisionnaires contemporains, si le four était propre et couvert...</p>
                      <div className="pt-2 flex items-center gap-2 text-xs font-medium text-primary bg-primary/5 inline-flex px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Source vérifiée : Yoreh Deah 92:8
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating "Live" elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
