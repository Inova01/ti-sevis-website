import type { Metadata } from 'next';

export const pageContent = {
  services: { fr: ['Nos services', 'Un service pour chaque besoin.', 'Quelques idées pour commencer. Une infinité de façons de vous simplifier le quotidien.'], ht: ['Sèvis nou yo', 'Yon sèvis pou sa w bezwen.', 'Men kèk egzanp pou kòmanse. Gen anpil fason pou rann lavi w pi fasil.'] },
  fonctionnement: { fr: ['Comment ça marche', 'Demandez. Choisissez. Soufflez.', 'Découvrez le parcours prévu dans l’application, de votre première demande au service terminé.'], ht: ['Kijan sa mache', 'Mande. Chwazi. Pran souf.', 'Dekouvri kijan aplikasyon an pral mache, depi premye demann ou jouk sèvis la fini.'] },
  mission: { fr: ['Notre mission', 'Moins de contraintes. Plus d’opportunités.', 'Rapprocher les besoins du quotidien des talents qui font vivre Haïti.'], ht: ['Misyon nou', 'Mwens difikilte. Plis opòtinite.', 'Konekte bezwen chak jou ak talan ki fè Ayiti viv.'] },
  zones: { fr: ['Ti Sèvis en Haïti', '1 pays. 10 départements.', 'Une ambition nationale, construite avec les talents de chaque territoire.'], ht: ['Ti Sèvis ann Ayiti', '1 peyi. 10 depatman.', 'Yon vizyon pou tout peyi a, ansanm ak talan nan chak zòn.'] },
  faq: { fr: ['Questions fréquentes', 'On vous explique tout.', 'Le projet, les services et la future application : trouvez les réponses à vos questions.'], ht: ['Kesyon moun poze souvan', 'N ap esplike w tout bagay.', 'Pwojè a, sèvis yo ak aplikasyon k ap vini an : jwenn repons pou kesyon w yo.'] },
  application: { fr: ['L’application Ti Sèvis', 'Votre quotidien, dans votre poche.', 'Une seule application pour trouver, choisir et échanger avec les personnes qui vous rendent service.'], ht: ['Aplikasyon Ti Sèvis', 'Tout sèvis ou yo nan pòch ou.', 'Yon sèl aplikasyon pou jwenn, chwazi epi pale ak moun k ap ba w sèvis yo.'] },
  prestataires: { fr: ['Devenir prestataire', 'Votre talent mérite d’être trouvé.', 'Ménage, beauté, cuisine, réparation : mettez votre savoir-faire au service de votre communauté.'], ht: ['Ofri sèvis ou', 'Fè plis moun dekouvri talan w.', 'Netwayaj, bote, manje, reparasyon : sèvi ak konpetans ou pou ede kominote w.'] },
  contact: { fr: ['Contact', 'Parlons de Ti Sèvis.', 'Une question sur le projet, une envie de proposer vos services ou de suivre le lancement ? Écrivez-nous.'], ht: ['Kontakte nou', 'Ann pale de Ti Sèvis.', 'Ou gen yon kesyon sou pwojè a, ou vle ofri sèvis ou oswa jwenn nouvèl sou lansman an ? Ekri nou.'] },
} as const;
export type PageId = keyof typeof pageContent;
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const origin = process.env.GITHUB_PAGES === 'true' ? 'https://inova01.github.io/ti-sevis-website/' : 'https://ti-sevis-haiti.innova10.chatgpt.site/';
  const url = new URL(path.replace(/^\//, ''), origin).href;
  return { title: `${title} — Ti Sèvis`, description, alternates: { canonical: url }, openGraph: { title: `${title} — Ti Sèvis`, description, url, siteName: 'Ti Sèvis', locale: 'fr_HT', type: 'website', images: [{ url: new URL('og.png', origin).href, width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', title: `${title} — Ti Sèvis`, description, images: [new URL('og.png', origin).href] } };
}
