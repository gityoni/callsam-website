import { MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="font-logo text-2xl font-black tracking-tight text-primary" style={{ letterSpacing: '-0.02em' }}>
                Reb<span className="text-secondary-dark">Sam</span>
              </span>
            </div>
            <p className="text-secondary/70 mb-6 max-w-sm leading-relaxed">
              Votre assistant expert en Halacha. Une technologie respectueuse pour une étude authentique et accessible à tous, 24/7.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://callsam.net"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                Essayer RebSam
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-secondary/70 hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#how-it-works" className="text-secondary/70 hover:text-primary transition-colors">Comment ça marche</a></li>
              <li><a href="#pillars" className="text-secondary/70 hover:text-primary transition-colors">Nos Valeurs</a></li>
              <li><a href="#faq" className="text-secondary/70 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary/70">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <a href="mailto:rebbesam@callsam.net" className="hover:text-primary transition-colors">rebbesam@callsam.net</a>
              </li>
              <li className="flex items-start gap-3 text-secondary/70">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <span>Jérusalem, Israël</span>
              </li>
              <li className="text-sm text-secondary/50 mt-4">
                Support : Réponse sous 24h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/50">
          <p>© {currentYear} RebSam. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}