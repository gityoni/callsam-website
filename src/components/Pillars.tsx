import { BookOpen, Crown, ShieldCheck } from 'lucide-react';
import { SectionHeading, FeatureCard } from './UI';

export default function Pillars() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Sources Validées",
      description: "Pas d'invention. Pas d'hallucination. Chaque réponse de RebSam est ancrée dans nos textes sacrés — Shulchan Aruch, Mishna Berura, Poskim contemporains et bien d'autres. Si la réponse n'existe pas dans les textes, RebSam te le dira clairement.",
    },
    {
      icon: Crown,
      title: "Kavod HaTorah",
      description: "Un espace sanctuarisé. RebSam parle avec la chaleur et la révérence d'un Mashpia : pas de lachon hara, pas de dérives — uniquement Torah. Tu peux poser tes questions les plus sensibles en toute confiance.",
    },
    {
      icon: ShieldCheck,
      title: "Circuit Fermé",
      description: "Tes questions les plus intimes restent strictement privées. Zéro collecte, zéro revente, zéro entraînement externe. Pose ce que tu n'oserais pas demander à voix haute — RebSam t'écoute sans jugement.",
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-white relative overflow-hidden">
      {/* Background Halo Layer - Same as Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-pink-50/30 via-blue-50/20 to-cyan-50/30">
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#FF7F50]/10 via-pink-100/20 to-transparent blur-3xl opacity-70" />
        <div className="absolute bottom-[-20%] left-[-15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-100/30 via-blue-50/20 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-50/20 via-pink-50/30 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Nos 3 Piliers de Confiance"
          subtitle="RebSam répond toujours selon ces 3 engagements — sans exception."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
          {/* Intensified Large Soft Glow Behind Cards - Hero Reference */}
          <div className="absolute inset-0 -m-32 md:-m-48 -z-10 pointer-events-none">
            <div className="absolute top-[-30%] left-[5%] w-[700px] h-[700px] bg-gradient-to-br from-[#FF7F50]/35 via-pink-200/40 to-transparent rounded-full blur-[140px] opacity-80"></div>
            <div className="absolute bottom-[-25%] right-[0%] w-[800px] h-[800px] bg-gradient-to-tl from-blue-200/45 via-purple-200/40 to-transparent rounded-full blur-[160px] opacity-75"></div>
            <div className="absolute top-[25%] left-[45%] w-[600px] h-[600px] bg-gradient-to-br from-purple-100/35 via-[#FF7F50]/30 to-transparent rounded-full blur-[130px] opacity-70"></div>
          </div>

          {pillars.map((pillar, index) => (
            <FeatureCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
