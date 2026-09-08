'use client';

import { useState } from 'react';
import { Car, Motorbike, Footprints, MapPin, ArrowUpRight, Pause, Play } from 'lucide-react';
import { useSite } from '@/components/site-shell';
import paths from '@/lib/haiti-map-paths.json';

const departments = [
  { id: 'HT-OU', fr: 'Ouest', ht: 'Lwès', city: 'Port-au-Prince' },
  { id: 'HT-SE', fr: 'Sud-Est', ht: 'Sidès', city: 'Jacmel' },
  { id: 'HT-ND', fr: 'Nord', ht: 'Nò', city: 'Cap-Haïtien' },
  { id: 'HT-NE', fr: 'Nord-Est', ht: 'Nòdès', city: 'Fort-Liberté' },
  { id: 'HT-AR', fr: 'Artibonite', ht: 'Latibonit', city: 'Les Gonaïves' },
  { id: 'HT-CE', fr: 'Centre', ht: 'Sant', city: 'Hinche' },
  { id: 'HT-SD', fr: 'Sud', ht: 'Sid', city: 'Les Cayes' },
  { id: 'HT-GA', fr: 'Grand’Anse', ht: 'Grandans', city: 'Jérémie' },
  { id: 'HT-NO', fr: 'Nord-Ouest', ht: 'Nòdwès', city: 'Port-de-Paix' },
  { id: 'HT-NI', fr: 'Nippes', ht: 'Nip', city: 'Miragoâne' },
] as const;

export default function CoverageMap() {
  const { lang } = useSite();
  const fr = lang === 'fr';
  const [active, setActive] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const directions = (city: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${city}, Haïti`)}`;
  const linkLabel = (name: string, city: string) => fr ? `${name} : itinéraire vers ${city} dans Google Maps (nouvel onglet)` : `${name} : wout pou ${city} nan Google Maps (nouvo onglet)`;

  return <div className={`coverage-map ${paused ? 'is-paused' : ''}`}>
    <div className="coverage-map-heading"><div><span className="section-kicker">Ti Sèvis · Ayiti</span><h3>{fr ? '10 départements, mille chemins.' : '10 depatman, mil chemen.'}</h3><p>{fr ? 'Choisissez un département pour votre itinéraire.' : 'Chwazi yon depatman pou jwenn wout ou.'}</p></div><button className="map-pause" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={fr ? (paused ? 'Reprendre les animations' : 'Mettre les animations en pause') : (paused ? 'Rekòmanse animasyon yo' : 'Kanpe animasyon yo')}>{paused ? <Play size={17} /> : <Pause size={17} />}</button></div>
    <svg className="haiti-map" viewBox="0 0 600 430" role="group" aria-label={fr ? 'Carte interactive des départements d’Haïti' : 'Kat entèaktif depatman Ayiti yo'}>
      <text className="map-sea" x="105" y="210" aria-hidden="true">{fr ? 'GOLFE DE LA GONÂVE' : 'GÒLF LAGONAV'}</text>
      {departments.map(d => <a key={d.id} href={directions(d.city)} target="_blank" rel="noopener noreferrer" aria-label={linkLabel(d[lang], d.city)} onMouseEnter={() => setActive(d.id)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(d.id)} onBlur={() => setActive(null)}><path className={`department-shape ${active === d.id ? 'is-active' : ''}`} d={paths[d.id]} fillRule="evenodd"><title>{d[lang]} · {d.city}</title></path></a>)}
      <g className="map-journeys" aria-hidden="true">
        <path className="journey-line" d="M 415 285 Q 410 215 347 157 Q 362 119 405 103" />
        <path className="journey-line warm" d="M 170 328 Q 220 287 273 303 T 415 285" />
        <g className="map-traveller traveller-car"><circle r="18" /><Car x={-11} y={-11} width={22} height={22} /></g>
        <g className="map-traveller traveller-moto"><circle r="18" /><Motorbike x={-11} y={-11} width={22} height={22} /></g>
        <g className="map-traveller traveller-walk"><circle r="16" /><Footprints x={-9} y={-9} width={18} height={18} /></g>
      </g>
    </svg>
    <div className="map-legend"><span><Car size={17} />{fr ? 'Voiture' : 'Machin'}</span><span><Motorbike size={18} />Moto</span><span><Footprints size={17} />{fr ? 'Livraison à pied' : 'Livrezon apye'}</span></div>
    <div className="map-departments">{departments.map(d => <a key={d.id} href={directions(d.city)} target="_blank" rel="noopener noreferrer" className={active === d.id ? 'is-active' : ''} aria-label={linkLabel(d[lang], d.city)} onMouseEnter={() => setActive(d.id)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(d.id)} onBlur={() => setActive(null)}><MapPin size={15} /><span>{d[lang]}<small>{d.city}</small></span><ArrowUpRight size={14} /></a>)}</div>
    <p className="map-caption">{fr ? 'Itinéraire vers le chef-lieu · Déploiement progressif. Déplacements illustratifs.' : 'Wout pou chèflye a · Deplwaman pwogresif. Deplasman yo se ilistrasyon.'}</p>
    <p className="map-credit">© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> · <a href="https://www.geoboundaries.org/" target="_blank" rel="noreferrer">geoBoundaries</a> · <a href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank" rel="noreferrer">ODbL</a></p>
  </div>;
}
