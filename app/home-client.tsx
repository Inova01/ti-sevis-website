'use client';

import { useState } from 'react';
import { content } from '@/lib/home-content';
import { serviceSlugs } from '@/lib/service-details';
import { assetPath } from '@/lib/site-paths';
import { useSite } from '@/components/site-shell';
import CoverageMap from '@/components/coverage-map';
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
  Mail,
  MapPin,
  MessageCircleMore,
  PackageCheck,
  Paintbrush,
  Scissors,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

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
const stepImages = ['/step-publier.png', '/step-choisir.png', '/step-suivre.png'];
const valueIcons = [ShieldCheck, CircleDollarSign, MessageCircleMore, HeartHandshake];
export default function Home() {
  const { lang, href } = useSite();
  const [openFaq, setOpenFaq] = useState(0);
  const t = content[lang];


  return (
    <>
      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> {t.eyebrow}</div>
          <h1>{t.heroA}<br /><span>{t.heroB}</span></h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={href("/application/")}><ArrowDown size={19} /> {t.app}</a>
            <a className="button button-secondary" href={href("/services/")}>{t.seeServices}</a>
          </div>
          <div className="trust-row" aria-label="Nos engagements">
            <span><Check size={16} /> {t.trust[0]}</span>
            <span><Star size={16} /> {t.trust[1]}</span>
            <span><Check size={16} /> {t.trust[2]}</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Aperçu de l’application mobile Ti Sèvis">
          <div className="visual-glow" />
          <div className="app-frame"><img src={assetPath('/ti-sevis-app.jpeg')} alt="Écrans de l’application Ti Sèvis en français" /></div>
          <div className="floating-card rating-card"><span className="star-badge"><Star size={20} fill="currentColor" /></span><div><strong>{t.provider}</strong><small>{t.nearby}</small></div></div>
          <div className="floating-card status-card"><span className="status-dot" /><div><small>{t.request}</small><strong>{t.realtime}</strong></div></div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-kicker">{t.introTag}</div>
        <h2>{t.introTitle}</h2>
        <p>{t.introText}</p>
        <div className="mini-stats">
          <div><strong aria-label={lang === 'fr' ? 'Une infinité' : 'San limit'}>∞</strong><span>{lang === 'fr' ? 'Une infinité de catégories de services' : 'Kategori sèvis san limit'}</span></div>
          <div className="language-stat"><strong>{lang === 'fr' ? 'Anglais, espagnol, créole, français' : 'Anglè, panyòl, kreyòl, franse'}</strong><span>{lang === 'fr' ? 'Quelle que soit votre langue, trouvez un prestataire premium selon son profil et sa disponibilité.' : 'Kèlkeswa lang ou pale, jwenn yon founisè sèvis Premium selon pwofil li ak disponibilite li.'}</span></div>
          <div><strong>{lang === 'fr' ? '1 pays' : '1 peyi'}</strong><span>{lang === 'fr' ? '10 départements servis' : '10 depatman jwenn sèvis'}</span></div>
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
            return <article className={`service-card service-${index + 1}`} key={title}><a className="service-card-link" href={href(`/services/${serviceSlugs[index]}/`)}>
              <div className="service-image-wrap">
                <img className="service-image" src={assetPath(serviceImages[index])} alt={`${title} avec Ti Sèvis`} loading="lazy" />
                <div className="service-icon"><Icon size={22} /></div>
              </div>
              <div className="service-content"><h3>{title}</h3><p>{description}</p></div>
              <span className="service-arrow"><ArrowRight size={18} /></span></a>
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
            return <article className="step-card" key={title}>
              <div className="step-media">
                <img src={assetPath(stepImages[index])} alt={`${title} avec l’application Ti Sèvis`} loading="lazy" />
                <div className="step-top"><span className="step-number">0{index + 1}</span><span className="step-icon"><Icon size={23} /></span></div>
              </div>
              <div className="step-content"><h3>{title}</h3><p>{description}</p></div>
              {index < 2 && <span className="step-connector" aria-hidden="true"><ArrowRight size={21} /></span>}
            </article>;
          })}
        </div>
        <a className="text-link centered-link" href={href("/fonctionnement/")}>{lang === "fr" ? "Voir le guide complet" : "Gade tout gid la"}<ArrowRight size={18} /></a>
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
          <div className="mission-copy"><span className="section-kicker warm">{t.missionTag}</span><h2>{t.missionTitle}</h2><p>{t.missionText}</p><blockquote>“{t.missionQuote}”</blockquote><a className="text-link" href={href("/mission/")}>{lang === "fr" ? "Découvrir notre mission" : "Dekouvri misyon nou"}<ArrowRight size={18} /></a></div>
          <div className="mission-art" aria-hidden="true"><div className="sun-shape" /><div className="community"><span><Users size={36} /></span><strong>Ti Sèvis</strong><small>Ayiti</small></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
        </div>
      </section>

      <section className="section zones-section" id="zones">
        <div className="zone-copy"><span className="section-kicker">{t.zonesTag}</span><h2>{t.zonesTitle}</h2><p>{t.zonesText}</p><a className="button button-primary" href={href("/contact/")}><Mail size={18} /> {t.notify}</a></div>
        <CoverageMap />
      </section>

      <section className="app-section" id="application">
        <div className="app-section-copy"><span className="section-kicker light">{t.appTag}</span><h2>{t.appTitle}</h2><p>{t.appText}</p><ul>{t.appBullets.map((bullet) => <li key={bullet}><Check size={18} /> {bullet}</li>)}</ul><a className="button button-light" href="mailto:bonjour@tisevis.ht?subject=Liste%20de%20lancement%20Ti%20Sevis"><Mail size={18} /> {t.notify}</a></div>
        <div className="app-section-visual"><div className="phone-glow" /><img src={assetPath('/ti-sevis-app.jpeg')} alt="Aperçu de l’application Ti Sèvis" /><span className="app-badge"><Clock3 size={18} /> {lang === 'fr' ? 'Lancement bientôt' : 'Lansman byento'}</span></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading centered"><span className="section-kicker">{t.faqTag}</span><h2>{t.faqTitle}</h2></div>
        <div className="faq-list">
          {t.faqs.map(([question, answer], index) => {
            const open = openFaq === index;
            return <div className={`faq-item ${open ? 'open' : ''}`} key={question}><button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)}><span>{question}</span>{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</button>{open && <p>{answer}</p>}</div>;
          })}
        </div>
        <a className="text-link centered-link" href={href("/faq/")}>{lang === "fr" ? "Toutes les questions" : "Tout kesyon yo"}<ArrowRight size={18} /></a>
      </section>

      <section className="final-cta">
        <div><span className="section-kicker light">Ti Sèvis · Ayiti</span><h2>{t.finalTitle}</h2><p>{t.finalText}</p></div>
        <a className="button button-light" href="mailto:bonjour@tisevis.ht?subject=Liste%20de%20lancement%20Ti%20Sevis">{t.join}<ArrowRight size={19} /></a>
      </section>


    </>
  );
}
