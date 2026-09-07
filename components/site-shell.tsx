'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, Languages, Mail, Menu, Smartphone, X } from 'lucide-react';
import { assetPath, basePath, siteHref } from '@/lib/site-paths';
import { content, type Lang } from '@/lib/home-content';

const SiteContext = createContext<{ lang: Lang; href: (path: string) => string }>({ lang: 'fr', href: siteHref });
export const useSite = () => useContext(SiteContext);
const links = [
  ['/services/', 'Services', 'Sèvis'],
  ['/fonctionnement/', 'Comment ça marche', 'Kijan sa mache'],
  ['/zones/', 'Zones', 'Zòn sèvis yo'],
  ['/mission/', 'Notre mission', 'Misyon nou'],
  ['/faq/', 'FAQ', 'Kesyon'],
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const t = content[lang];
  const href = (path: string) => siteHref(path, lang);

  useEffect(() => {
    const url = new URL(window.location.href);
    let language: Lang = 'fr';
    const queryLang = url.searchParams.get('lang');
    if (queryLang === 'fr' || queryLang === 'ht') language = queryLang;
    else { try { language = localStorage.getItem('ti-sevis-lang') === 'ht' ? 'ht' : 'fr'; } catch { /* Language still works if storage is unavailable. */ } }
    setLang(language);
    document.documentElement.lang = language;
    setCurrentPath(url.pathname.slice(basePath.length));
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);

  function toggleLang() {
    const next = lang === 'fr' ? 'ht' : 'fr';
    setLang(next);
    document.documentElement.lang = next;
    try { localStorage.setItem('ti-sevis-lang', next); } catch { /* Preference is optional. */ }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
  }

  const brand = <><span className="brand-mark" aria-hidden="true"><img src={assetPath('/ti-sevis-logo.jpeg')} alt="" /></span><span>TI <strong>SÈVIS</strong></span></>;

  return <SiteContext.Provider value={{ lang, href }}>
    <a className="skip-link" href="#page-content">{lang === 'fr' ? 'Aller au contenu' : 'Ale nan kontni an'}</a>
    <header className="site-header">
      <a className="brand" href={href('/')} aria-label={lang === 'fr' ? 'Ti Sèvis — Accueil' : 'Ti Sèvis — Akèy'}>{brand}</a>
      <nav className="desktop-nav" aria-label={lang === 'fr' ? 'Navigation principale' : 'Meni prensipal'}>
        {links.map(([path, fr, ht]) => <a key={path} href={href(path)} aria-current={currentPath.startsWith(path) ? 'page' : undefined}>{lang === 'fr' ? fr : ht}</a>)}
      </nav>
      <div className="header-actions">
        <button className="language-pill" type="button" onClick={toggleLang} aria-label={lang === 'fr' ? 'Pase an kreyòl' : 'Passer en français'}><Languages size={16} />{lang === 'fr' ? 'FR' : 'KR'}</button>
        <a className="button button-primary header-cta" href={href('/application/')}><Smartphone size={17} />{t.app}</a>
        <button className="menu-button" type="button" aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? (lang === 'fr' ? 'Fermer le menu' : 'Fèmen meni an') : t.menu} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>
    {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label={lang === 'fr' ? 'Navigation mobile' : 'Meni mobil'}>
      {[...links, ['/prestataires/', 'Devenir prestataire', 'Ofri sèvis ou'], ['/contact/', 'Contact', 'Kontakte nou']].map(([path, fr, ht]) => <a key={path} href={href(path)} onClick={() => setMenuOpen(false)}>{lang === 'fr' ? fr : ht}<ArrowRight size={17} /></a>)}
      <button type="button" onClick={toggleLang}><Languages size={18} />{lang === 'fr' ? 'Kreyòl' : 'Français'}</button>
    </nav>}
    <main id="page-content" tabIndex={-1}>{children}</main>
    <footer>
      <div className="footer-main">
        <div className="footer-brand"><a className="brand inverse" href={href('/')}>{brand}</a><p>{t.footerLine}</p><a href="mailto:bonjour@tisevis.ht"><Mail size={16} />bonjour@tisevis.ht</a></div>
        <div className="footer-column"><h3>{t.project}</h3><a href={href('/mission/')}>{t.nav[3]}</a><a href={href('/fonctionnement/')}>{t.nav[1]}</a><a href={href('/zones/')}>{t.nav[2]}</a></div>
        <div className="footer-column"><h3>{t.users}</h3><a href={href('/services/')}>{t.nav[0]}</a><a href={href('/faq/')}>{t.nav[4]}</a><a href={href('/application/')}>{t.app}</a></div>
        <div className="footer-column"><h3>{t.providers}</h3><a href={href('/prestataires/')}>{lang === 'fr' ? 'Devenir prestataire' : 'Ofri sèvis ou'}</a><a href={href('/contact/')}>{lang === 'fr' ? 'Contact' : 'Kontakte nou'}</a></div>
      </div>
      <div className="footer-bottom"><span>{t.legal}</span><span>{t.made}</span></div>
    </footer>
  </SiteContext.Provider>;
}
