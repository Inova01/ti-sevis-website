export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const assetPath = (path: string) => `${basePath}${path}`;
export function siteHref(path: string, lang: 'fr' | 'ht' = 'fr') {
  const [pathname, hash] = path.split('#');
  return `${basePath}${pathname}${lang === 'ht' ? '?lang=ht' : ''}${hash ? `#${hash}` : ''}`;
}
