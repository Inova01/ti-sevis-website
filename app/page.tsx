'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Clock3,
  CookingPot,
  HeartHandshake,
  House,
  Languages,
  Mail,
  MapPin,
  Menu,
  MessageCircleMore,
  PackageCheck,
  Paintbrush,
  Scissors,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react';

type Lang = 'fr' | 'ht';

const content = {
  fr: {
    nav: ['Services', 'Comment ça marche', 'Zones', 'Notre mission', 'FAQ'],
    app: 'Découvrir l’app',
    menu: 'Ouvrir le menu',
    eyebrow: 'Le coup de main qui change tout',
    heroA: 'Un petit service.',
    heroB: 'Une grande différence.',
    heroText: 'Ti Sèvis vous met en relation avec des prestataires de confiance pour les besoins du quotidien — simplement, rapidement, partout où la vie vous appelle.',
    seeServices: 'Voir les services',
    trust: ['Prestataires vérifiés', 'Service 100 % local', 'Prix transparents'],
    provider: 'Prestataires qualifiés',
    nearby: 'proches de chez vous',
    request: 'Demande publiée',
    realtime: 'Réponses en temps réel',
    introTag: 'Conçu pour le quotidien haïtien',
    introTitle: 'Moins de courses. Plus de temps pour l’essentiel.',
    introText: 'Une seule application pour trouver la bonne personne, publier votre besoin et suivre votre service sans complication.',
    serviceTag: 'Services',
    serviceTitle: 'De quoi avez-vous besoin aujourd’hui ?',
    serviceText: 'Des petits besoins ponctuels aux services récurrents, Ti Sèvis rapproche les talents locaux des personnes qui en ont besoin.',
    services: [
      ['Ménage & lessive', 'Nettoyage, repassage et soin du linge à domicile.'],
      ['Courses & livraison', 'Achats, repas, médicaments et petits colis.'],
      ['Beauté à domicile', 'Coiffure, tissage, maquillage et soins personnels.'],
      ['Cuisine & événements', 'Cuisine à domicile et aide pour vos petites réceptions.'],
      ['Maison & réparations', 'Petits travaux, peinture, montage et dépannage.'],
      ['Assistance quotidienne', 'Files d’attente, documents, accompagnement et commissions.'],
      ['Services professionnels', 'Soutien administratif, numérique et besoins ponctuels.'],
      ['Votre besoin', 'Décrivez votre demande : la communauté Ti Sèvis répond.'],
    ],
    allInApp: 'Tous les services seront réservés et gérés dans l’application.',
    howTag: 'Comment ça marche',
    howTitle: 'Demandez. Choisissez. Soufflez.',
    howText: 'Ti Sèvis rend la recherche d’aide aussi simple qu’un message.',
    steps: [
      ['Publiez votre besoin', 'Décrivez le service, le lieu, la date et votre budget dans l’application.'],
      ['Choisissez en confiance', 'Comparez les profils, les avis et les propositions des prestataires.'],
      ['Suivez votre service', 'Échangez, confirmez et gérez votre demande au même endroit.'],
    ],
    whyTag: 'Pourquoi Ti Sèvis',
    whyTitle: 'La confiance avant tout.',
    whyText: 'Une expérience pensée autour de la proximité, de la transparence et de la dignité du travail.',
    values: [
      ['Identités vérifiées', 'Des profils contrôlés pour bâtir une communauté plus sûre.'],
      ['Choix transparent', 'Vous voyez les informations utiles avant de vous engager.'],
      ['Conversation directe', 'Discutez des détails avec le prestataire dans l’application.'],
      ['Talents valorisés', 'Une vitrine numérique pour les savoir-faire de chez nous.'],
    ],
    missionTag: 'Notre mission',
    missionTitle: 'Faire circuler les opportunités, quartier par quartier.',
    missionText: 'Ti Sèvis veut simplifier la vie des familles tout en donnant aux prestataires haïtiens un moyen moderne de trouver des clients, de bâtir leur réputation et de développer leur activité.',
    missionQuote: 'Chwazi nou se rann tèt ou yon gwo sèvis.',
    zonesTag: 'Zone pilote',
    zonesTitle: 'Ti Sèvis démarre dans le Grand Port-au-Prince.',
    zonesText: 'Notre déploiement commence localement pour construire une expérience fiable, puis s’étendra progressivement à d’autres villes d’Haïti.',
    availableSoon: 'Bientôt disponible',
    notify: 'Être prévenu au lancement',
    appTag: 'L’application Ti Sèvis',
    appTitle: 'Tous vos services. Une seule app.',
    appText: 'Publiez une demande, recevez des propositions, discutez avec un prestataire et suivez chaque étape depuis votre téléphone.',
    appBullets: ['Profils et services au même endroit', 'Demandes et réponses en temps réel', 'Interface en français et en kreyòl'],
    faqTag: 'Questions fréquentes',
    faqTitle: 'Tout ce qu’il faut savoir avant le lancement.',
    faqs: [
      ['Qu’est-ce que Ti Sèvis ?', 'Ti Sèvis est une plateforme mobile qui met en relation les personnes ayant un besoin du quotidien avec des prestataires locaux qualifiés.'],
      ['Peut-on déjà réserver un service ?', 'Pas encore. Nous préparons le lancement pilote de l’application dans le Grand Port-au-Prince. Vous pouvez rejoindre la liste d’information dès maintenant.'],
      ['Le site permet-il de réserver ?', 'Non. Ce site présente le projet. Les demandes, propositions, échanges et suivis seront centralisés dans l’application Ti Sèvis.'],
      ['Comment les prestataires seront-ils vérifiés ?', 'Le parcours d’inscription prévoira une vérification d’identité et des informations professionnelles avant l’activation du profil.'],
      ['Dans quelles langues l’application sera-t-elle disponible ?', 'L’expérience est pensée en français et en kreyòl afin d’être accessible au plus grand nombre.'],
      ['Comment devenir prestataire Ti Sèvis ?', 'Une campagne d’inscription dédiée sera ouverte avant le lancement. Laissez-nous un message pour être parmi les premiers informés.'],
    ],
    finalTitle: 'Le quotidien devient plus léger avec Ti Sèvis.',
    finalText: 'Soyez parmi les premiers à découvrir une nouvelle façon de trouver et proposer des services en Haïti.',
    join: 'Rejoindre la liste de lancement',
    footerLine: 'Le petit service qui simplifie votre quotidien.',
    project: 'Projet',
    users: 'Pour les utilisateurs',
    providers: 'Pour les prestataires',
    legal: '© 2026 Ti Sèvis. Tous droits réservés.',
    made: 'Pensé et construit pour Haïti.',
  },
  ht: {
    nav: ['Sèvis', 'Kijan li mache', 'Zòn', 'Misyon nou', 'Kesyon'],
    app: 'Dekouvri aplikasyon an',
    menu: 'Ouvri meni an',
    eyebrow: 'Ti kout men ki chanje tout bagay',
    heroA: 'Yon ti sèvis.',
    heroB: 'Yon gwo diferans.',
    heroText: 'Ti Sèvis mete w an kontak ak prestataire ou ka fè konfyans pou bezwen chak jou — fasil, rapid, nenpòt kote lavi mennen w.',
    seeServices: 'Gade sèvis yo',
    trust: ['Prestataire verifye', 'Sèvis 100 % lokal', 'Pri ki klè'],
    provider: 'Prestataire kalifye',
    nearby: 'toupre lakay ou',
    request: 'Demann pibliye',
    realtime: 'Repons an tan reyèl',
    introTag: 'Fèt pou lavi chak jou ann Ayiti',
    introTitle: 'Mwens kouri. Plis tan pou sa ki enpòtan.',
    introText: 'Yon sèl aplikasyon pou jwenn bon moun nan, pibliye bezwen w epi swiv sèvis ou san tèt chaje.',
    serviceTag: 'Sèvis',
    serviceTitle: 'Ki sèvis ou bezwen jodi a?',
    serviceText: 'Soti nan ti bezwen rapid rive nan sèvis regilye, Ti Sèvis konekte talan lokal ak moun ki bezwen yo.',
    services: [
      ['Netwayaj & lesiv', 'Netwayaj, repase ak swen rad lakay ou.'],
      ['Komisyon & livrezon', 'Acha, manje, medikaman ak ti pakè.'],
      ['Bote lakay', 'Kwafè, tise, makiyaj ak swen pèsonèl.'],
      ['Manje & evènman', 'Kwit manje lakay ak asistans pou ti resepsyon.'],
      ['Kay & reparasyon', 'Ti travay, penti, montaj ak depanaj.'],
      ['Asistans chak jou', 'Kanpe nan liy, dokiman, akonpayman ak komisyon.'],
      ['Sèvis pwofesyonèl', 'Sipò administratif, dijital ak bezwen espesyal.'],
      ['Bezwen pa w', 'Dekri sa w bezwen : kominote Ti Sèvis la ap reponn.'],
    ],
    allInApp: 'Tout sèvis yo ap rezève epi jere nan aplikasyon an.',
    howTag: 'Kijan li mache',
    howTitle: 'Mande. Chwazi. Pran souf.',
    howText: 'Ti Sèvis fè chèche èd vin fasil tankou voye yon mesaj.',
    steps: [
      ['Pibliye bezwen w', 'Dekri sèvis la, kote a, dat la ak bidjè w nan aplikasyon an.'],
      ['Chwazi ak konfyans', 'Konpare pwofil, opinyon ak pwopozisyon prestataire yo.'],
      ['Swiv sèvis la', 'Pale, konfime epi jere demann ou nan yon sèl kote.'],
    ],
    whyTag: 'Poukisa Ti Sèvis',
    whyTitle: 'Konfyans anvan tout bagay.',
    whyText: 'Yon eksperyans ki chita sou pwoksimite, transparans ak respè pou travay.',
    values: [
      ['Idantite verifye', 'Pwofil ki kontwole pou bati yon kominote ki pi an sekirite.'],
      ['Chwa ki klè', 'Ou wè enfòmasyon itil yo anvan ou pran desizyon.'],
      ['Pale dirèkteman', 'Diskite detay yo ak prestataire a nan aplikasyon an.'],
      ['Talan jwenn valè', 'Yon vitrin dijital pou konesans ak konpetans moun lakay.'],
    ],
    missionTag: 'Misyon nou',
    missionTitle: 'Fè opòtinite sikile, katye pa katye.',
    missionText: 'Ti Sèvis vle rann lavi fanmi yo pi fasil epi bay prestataire ayisyen yon zouti modèn pou jwenn kliyan, bati repitasyon yo ak devlope aktivite yo.',
    missionQuote: 'Chwazi nou se rann tèt ou yon gwo sèvis.',
    zonesTag: 'Zòn pilòt',
    zonesTitle: 'Ti Sèvis ap kòmanse nan Gran Pòtoprens.',
    zonesText: 'N ap kòmanse toupre pou nou bati yon eksperyans ki solid, epi n ap elaji ti kras pa ti kras nan lòt vil peyi a.',
    availableSoon: 'Disponib byento',
    notify: 'Fè m konnen lè li lanse',
    appTag: 'Aplikasyon Ti Sèvis',
    appTitle: 'Tout sèvis ou yo. Yon sèl app.',
    appText: 'Pibliye yon demann, resevwa pwopozisyon, pale ak yon prestataire epi swiv chak etap sou telefòn ou.',
    appBullets: ['Pwofil ak sèvis nan yon sèl kote', 'Demann ak repons an tan reyèl', 'Entèfas an franse ak kreyòl'],
    faqTag: 'Kesyon moun poze souvan',
    faqTitle: 'Tout sa pou w konnen anvan lansman an.',
    faqs: [
      ['Kisa Ti Sèvis ye?', 'Ti Sèvis se yon platfòm mobil ki konekte moun ki gen bezwen chak jou ak prestataire lokal ki kalifye.'],
      ['Èske mwen ka rezève yon sèvis deja?', 'Poko. N ap prepare lansman pilòt aplikasyon an nan Gran Pòtoprens. Ou ka antre nan lis enfòmasyon an depi kounye a.'],
      ['Èske mwen ka rezève sou sit la?', 'Non. Sit sa a prezante pwojè a. Demann, pwopozisyon, mesaj ak suivi yo ap fèt nan aplikasyon Ti Sèvis la.'],
      ['Kijan n ap verifye prestataire yo?', 'Enskripsyon an ap gen verifikasyon idantite ak enfòmasyon pwofesyonèl anvan pwofil la aktive.'],
      ['Nan ki lang aplikasyon an ap disponib?', 'Eksperyans lan fèt an franse ak kreyòl pou plis moun ka sèvi avè l.'],
      ['Kijan pou m vin yon prestataire Ti Sèvis?', 'N ap louvri yon kanpay enskripsyon espesyal anvan lansman an. Voye yon mesaj pou w pami premye moun ki jwenn nouvèl la.'],
    ],
    finalTitle: 'Lavi chak jou vin pi lejè ak Ti Sèvis.',
    finalText: 'Se pou w pami premye moun ki dekouvri yon nouvo fason pou jwenn ak pwopoze sèvis ann Ayiti.',
    join: 'Antre nan lis lansman an',
    footerLine: 'Ti sèvis ki rann lavi chak jou pi fasil.',
    project: 'Pwojè',
    users: 'Pou itilizatè yo',
    providers: 'Pou prestataire yo',
    legal: '© 2026 Ti Sèvis. Tout dwa rezève.',
    made: 'Panse epi bati pou Ayiti.',
  },
};

const navTargets = ['services', 'fonctionnement', 'zones', 'mission', 'faq'];
const serviceIcons = [House, PackageCheck, Scissors, CookingPot, Paintbrush, HeartHandshake, BriefcaseBusiness, Sparkles];
const serviceImages = [
  '/service-menage.png',
  '/service-livraison.png',
  '/service-beaute.png',
  '/service-cuisine.png',
  '/service-reparations.png',
  '/service-assistance.png',
  '/service-professionnels.png',
  '/service-personnalise.png',
];
const stepIcons = [MessageCircleMore, Users, BadgeCheck];
const valueIcons = [ShieldCheck, CircleDollarSign, MessageCircleMore, HeartHandshake];
const zones = ['Delmas', 'Pétion-Ville', 'Port-au-Prince', 'Tabarre', 'Carrefour', 'Croix-des-Bouquets'];

export default function Home() {
  const [lang, setLang] = useState<Lang>('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const t = content[lang];

  const toggleLang = () => setLang((current) => (current === 'fr' ? 'ht' : 'fr'));

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Ti Sèvis — Accueil" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><img src="/ti-sevis-logo.jpeg" alt="" /></span>
          <span>TI <strong>SÈVIS</strong></span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {t.nav.map((label, index) => <a key={label} href={`#${navTargets[index]}`}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="language-pill" type="button" onClick={toggleLang} aria-label={lang === 'fr' ? 'Pase an kreyòl' : 'Passer en français'}>
            <Languages size={16} /> {lang === 'fr' ? 'FR' : 'KR'}
          </button>
          <a className="button button-primary header-cta" href="#application"><ArrowDown size={18} /> {t.app}</a>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-label={t.menu} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navigation mobile">
          {t.nav.map((label, index) => <a key={label} href={`#${navTargets[index]}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={17} /></a>)}
          <button type="button" onClick={toggleLang}><Languages size={17} /> {lang === 'fr' ? 'Kreyòl' : 'Français'}</button>
        </nav>
      )}

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> {t.eyebrow}</div>
          <h1>{t.heroA}<br /><span>{t.heroB}</span></h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#application"><ArrowDown size={19} /> {t.app}</a>
            <a className="button button-secondary" href="#services">{t.seeServices}</a>
          </div>
          <div className="trust-row" aria-label="Nos engagements">
            <span><Check size={16} /> {t.trust[0]}</span>
            <span><Star size={16} /> {t.trust[1]}</span>
            <span><Check size={16} /> {t.trust[2]}</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Aperçu de l’application mobile Ti Sèvis">
          <div className="visual-glow" />
          <div className="app-frame"><img src="/ti-sevis-app.jpeg" alt="Écrans de l’application Ti Sèvis en français" /></div>
          <div className="floating-card rating-card"><span className="star-badge"><Star size={20} fill="currentColor" /></span><div><strong>{t.provider}</strong><small>{t.nearby}</small></div></div>
          <div className="floating-card status-card"><span className="status-dot" /><div><small>{t.request}</small><strong>{t.realtime}</strong></div></div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-kicker">{t.introTag}</div>
        <h2>{t.introTitle}</h2>
        <p>{t.introText}</p>
        <div className="mini-stats">
          <div><strong>8+</strong><span>{lang === 'fr' ? 'catégories de services' : 'kategori sèvis'}</span></div>
          <div><strong>2</strong><span>{lang === 'fr' ? 'langues natives' : 'lang natif'}</span></div>
          <div><strong>1</strong><span>{lang === 'fr' ? 'communauté locale' : 'kominote lokal'}</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading split-heading">
          <div><span className="section-kicker">{t.serviceTag}</span><h2>{t.serviceTitle}</h2></div>
          <p>{t.serviceText}</p>
        </div>
        <div className="service-grid">
          {t.services.map(([title, description], index) => {
            const Icon = serviceIcons[index];
            return <article className={`service-card service-${index + 1}`} key={title}>
              <div className="service-image-wrap">
                <img className="service-image" src={serviceImages[index]} alt={`${title} avec Ti Sèvis`} loading="lazy" />
                <div className="service-icon"><Icon size={22} /></div>
              </div>
              <div className="service-content"><h3>{title}</h3><p>{description}</p></div>
              <span className="service-arrow"><ArrowRight size={18} /></span>
            </article>;
          })}
        </div>
        <div className="app-only-note"><Smartphone size={18} /> {t.allInApp}</div>
      </section>

      <section className="section how-section" id="fonctionnement">
        <div className="section-heading centered"><span className="section-kicker">{t.howTag}</span><h2>{t.howTitle}</h2><p>{t.howText}</p></div>
        <div className="steps-grid">
          {t.steps.map(([title, description], index) => {
            const Icon = stepIcons[index];
            return <article className="step-card" key={title}><div className="step-top"><span className="step-number">0{index + 1}</span><Icon size={28} /></div><h3>{title}</h3><p>{description}</p>{index < 2 && <span className="step-connector" aria-hidden="true"><ArrowRight size={21} /></span>}</article>;
          })}
        </div>
      </section>

      <section className="why-wrap">
        <div className="section why-section">
          <div className="section-heading centered"><span className="section-kicker warm">{t.whyTag}</span><h2>{t.whyTitle}</h2><p>{t.whyText}</p></div>
          <div className="value-grid">
            {t.values.map(([title, description], index) => {
              const Icon = valueIcons[index];
              return <article className="value-card" key={title}><span><Icon size={24} /></span><h3>{title}</h3><p>{description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section mission-section" id="mission">
        <div className="mission-card">
          <div className="mission-copy"><span className="section-kicker warm">{t.missionTag}</span><h2>{t.missionTitle}</h2><p>{t.missionText}</p><blockquote>“{t.missionQuote}”</blockquote></div>
          <div className="mission-art" aria-hidden="true"><div className="sun-shape" /><div className="community"><span><Users size={36} /></span><strong>Ti Sèvis</strong><small>Ayiti</small></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
        </div>
      </section>

      <section className="section zones-section" id="zones">
        <div className="zone-copy"><span className="section-kicker">{t.zonesTag}</span><h2>{t.zonesTitle}</h2><p>{t.zonesText}</p><a className="button button-primary" href="mailto:bonjour@tisevis.ht?subject=Liste%20de%20lancement%20Ti%20Sevis"><Mail size={18} /> {t.notify}</a></div>
        <div className="zone-map" aria-label="Zones de lancement prévues">
          <div className="map-ring ring-a" /><div className="map-ring ring-b" />
          <div className="map-center"><MapPin size={30} /><strong>Grand<br />Port-au-Prince</strong><span>{t.availableSoon}</span></div>
          <div className="zone-chips">{zones.map((zone) => <span key={zone}><MapPin size={13} /> {zone}</span>)}</div>
        </div>
      </section>

      <section className="app-section" id="application">
        <div className="app-section-copy"><span className="section-kicker light">{t.appTag}</span><h2>{t.appTitle}</h2><p>{t.appText}</p><ul>{t.appBullets.map((bullet) => <li key={bullet}><Check size={18} /> {bullet}</li>)}</ul><a className="button button-light" href="mailto:bonjour@tisevis.ht?subject=Liste%20de%20lancement%20Ti%20Sevis"><Mail size={18} /> {t.notify}</a></div>
        <div className="app-section-visual"><div className="phone-glow" /><img src="/ti-sevis-app.jpeg" alt="Aperçu de l’application Ti Sèvis" /><span className="app-badge"><Clock3 size={18} /> {lang === 'fr' ? 'Lancement bientôt' : 'Lansman byento'}</span></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading centered"><span className="section-kicker">{t.faqTag}</span><h2>{t.faqTitle}</h2></div>
        <div className="faq-list">
          {t.faqs.map(([question, answer], index) => {
            const open = openFaq === index;
            return <div className={`faq-item ${open ? 'open' : ''}`} key={question}><button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)}><span>{question}</span>{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</button>{open && <p>{answer}</p>}</div>;
          })}
        </div>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker light">Ti Sèvis · Ayiti</span><h2>{t.finalTitle}</h2><p>{t.finalText}</p></div>
        <a className="button button-light" href="mailto:bonjour@tisevis.ht?subject=Liste%20de%20lancement%20Ti%20Sevis">{t.join}<ArrowRight size={19} /></a>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><a className="brand inverse" href="#accueil"><span className="brand-mark" aria-hidden="true"><img src="/ti-sevis-logo.jpeg" alt="" /></span><span>TI <strong>SÈVIS</strong></span></a><p>{t.footerLine}</p><a href="mailto:bonjour@tisevis.ht"><Mail size={16} /> bonjour@tisevis.ht</a></div>
          <div className="footer-column"><h3>{t.project}</h3><a href="#mission">{t.nav[3]}</a><a href="#fonctionnement">{t.nav[1]}</a><a href="#zones">{t.nav[2]}</a></div>
          <div className="footer-column"><h3>{t.users}</h3><a href="#services">{t.nav[0]}</a><a href="#faq">{t.nav[4]}</a><a href="#application">{t.app}</a></div>
          <div className="footer-column"><h3>{t.providers}</h3><a href="mailto:bonjour@tisevis.ht?subject=Devenir%20prestataire">{lang === 'fr' ? 'Devenir prestataire' : 'Vin yon prestataire'}</a><a href="mailto:bonjour@tisevis.ht">Contact</a></div>
        </div>
        <div className="footer-bottom"><span>{t.legal}</span><span>{t.made}</span></div>
      </footer>
    </main>
  );
}
