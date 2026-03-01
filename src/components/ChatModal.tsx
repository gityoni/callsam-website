import { X, Send, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState, useMemo } from 'react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'sam';
  content: string;
  loading?: boolean;
}

// ── Liste complète des sources (PDF RebSam) ──────────────────────────────────
const ALL_SOURCES = [
  // A. Halacha et Décisionnaires (Poskim)
  "Choulhan Aroukh (Maran Rabbi Yossef Karo) et le Tour",
  "Michna Beroura (Hafetz Haïm)",
  "Yalkout Yossef (Maran Rav Ovadia Yossef)",
  "Hazon Ovadia (Maran Rav Ovadia Yossef)",
  "Halikhot Olam (Rishon LeZion Rav Itshak Yossef)",
  "Igrot Moshé (Rav Moshé Feinstein)",
  "Kaf HaHaïm (Rav Yaakov Haïm Sofer)",
  "Ben Ich Haï (Rav Yossef Haïm de Bagdad)",
  "Hazon Ish (Rav Avraham Yeshaya Karelitz)",
  "Tzitz Eliezer (Rav Eliezer Yehouda Waldenberg)",
  "Shevet HaLevi (Rav Wosner)",
  "Aroukh HaShoulhan (Rav Yehiel Michel Epstein)",
  "Mishneh Torah (Le Rambam)",
  "Sefer HaMitzvot (Rambam)",
  "Sefer HaHinoukh",
  "Smag — Sefer Mitzvot Gadol",
  "Piskei Teshuvot",
  "Nitei Gavriel",
  // B. Moussar, Pensée et Émouna
  "Le Kouzari (Rabbi Yehouda Halevi)",
  "Hovot HaLevavot (Rabbenou Bahya ibn Paquda)",
  "Mesilat Yecharim (Ramhal)",
  "Moreh Nevoukhim — Le Guide des Égarés (Rambam)",
  "Hafetz Haïm et Chemirat HaLachon",
  "Chemdat Yamim",
  "Reshit Hokhma (Rabbi Eliyahou de Vidas)",
  // C. Kabbale et Hassidout
  "Zohar Hakadoch, Zohar Hadash et Tikouney Zohar (Rabbi Chimone Bar Yohaï)",
  "Etz Haïm et Shaar HaKavanot (Le saint Ari Zal)",
  "Likoutey Moharan et Sihot HaRan (Rabbi Nahman de Breslev)",
  "Likoutey Halachot et Likoutey Tefilot (Rabbi Natan de Breslev)",
  "Sefer Yetzira",
  "Pardes Rimonim (Ramak)",
  // D. Sources supplémentaires du PDF
  "Chass Babli et Yerouchalmi avec Rachi et Tossafot",
  "Midrach Raba, Tanhuma et Pirké deRabbi Eliezer",
  "Sefer haZohar haKatan (Rav Itshak Louria)",
  "Responsa Hatam Sofer (Rav Moshé Sofer)",
  "Responsa Maharsham (Rav Chalom Mordekhaï Schwadron)",
  "Pri Megadim (Rav Yossef ben Méïr Teomim)",
  "Magen Avraham",
  "Taz — Tourei Zahav",
  "Choulhan Aroukh HaRav (Baal HaTanya)",
  "Da'at Torah (Rav Yehuda Meir Shapiro)",
  "Divrei Yoel (Rav Yoel Teitelbaum — Satmar)",
  "Shu't Shevet Hakehati",
  "Rav Shlomo Zalman Auerbach — Minhat Shlomo",
  "Rav Yossef Shalom Elyashiv — Kovetz Teshuvot",
  "Sefer Chofetz Chaim",
  "Bariach HaTichon (Rav Nissim Barich)",
  "Vaya'an Eliyahu (Rav Eliyahu Shmuel)",
  "Be'er Yaakov — Iyounim Halacha et Chass",
];

function pickRandom(arr: string[], n: number): string[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  // 5-6 sources tirées aléatoirement à chaque ouverture
  const welcomeSources = useMemo(() => pickRandom(ALL_SOURCES, 5 + Math.floor(Math.random() * 2)), []);  // eslint-disable-line react-hooks/exhaustive-deps

  const sourcesList = welcomeSources.map(s => `• ${s}`).join('\n');

  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'sam',
      content: `Chalom ! 🌿\nJe suis RebSam — ton compagnon d'étude halakhique.\n\nPose-moi n'importe quelle question : Kacherout, Chabbat, Niddah, Tefila, relations, business… Je réponds avec les sources exactes, sans jugement, 24h/24.\n\nJe suis guidé par mes 3 piliers de confiance :\n📖 Sources Validées — parmi les textes consultés aujourd'hui :\n${sourcesList}\n👑 Kavod HaTorah — un langage respectueux et sanctuarisé.\n🔒 Circuit Fermé — tes questions restent strictement privées.\n\nPar où veux-tu commencer ?`,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function poserQuestionASam() {
    const q = question.trim();
    if (!q || isLoading) return;

    setQuestion('');
    setMessages((prev) => [...prev, { role: 'user', content: q }]);
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: 'sam', content: '', loading: true }]);

    try {
      const response = await fetch(
        'https://hook.eu1.make.com/r1woeelogkk0bv2i6s5cxu3mli231nbg?prompt=' +
          encodeURIComponent(q)
      );
      const texteReponse = await response.text();
      // Supprime les astérisques Markdown (*mot* → mot, **mot** → mot)
      const texteNettoye = texteReponse.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\*(.*?)\*/g, '$1');
      setMessages((prev) =>
        prev.map((m, i) =>
          i === prev.length - 1 ? { role: 'sam', content: texteNettoye, loading: false } : m
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((m, i) =>
          i === prev.length - 1
            ? {
                role: 'sam',
                content:
                  "Désolé, une erreur s'est produite. Réessayez ou passez par WhatsApp.",
                loading: false,
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      poserQuestionASam();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden"
        style={{ height: 'min(80vh, 680px)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
              <span className="font-logo font-black text-lg">RS</span>
            </div>
            <div>
              <h3 className="font-logo font-black text-xl tracking-tight">RebSam</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                <p className="text-sm text-white/80">Assistant Halakhique IA</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Messages Area */}
        <div
          id="zone-de-reponse"
          className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-br from-blue-50/40 via-white to-purple-50/20"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ${
                  msg.role === 'sam'
                    ? 'bg-primary'
                    : 'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}
              >
                {msg.role === 'sam' ? 'RS' : 'Toi'}
              </div>

              {/* Bubble */}
              <div
                className={`rounded-2xl p-4 shadow-sm max-w-[78%] text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-tr-sm'
                    : 'bg-white text-secondary-dark rounded-tl-sm border border-gray-100'
                }`}
              >
                {msg.loading ? (
                  <span className="flex items-center gap-2 text-secondary/60 italic">
                    <Loader2 size={16} className="animate-spin" />
                    Reb Sam réfléchit...
                  </span>
                ) : msg.role === 'sam' ? (
                  <span
                    className="chat-response"
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                ) : (
                  <span>{msg.content}</span>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-200">
            <input
              id="ton-champ-de-texte"
              ref={inputRef}
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Posez votre question en Halacha..."
              disabled={isLoading}
              className="flex-1 bg-transparent text-sm text-secondary-dark placeholder-gray-400 outline-none disabled:opacity-50"
            />
            <button
              onClick={poserQuestionASam}
              disabled={!question.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shrink-0"
              aria-label="Envoyer"
            >
              {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">
            Appuyez sur <kbd className="bg-gray-100 px-1 rounded text-gray-500">Entrée</kbd> pour envoyer · Sources : Shulchan Aruch, Mishna Berura
          </p>
        </div>
      </div>
    </div>
  );
}
