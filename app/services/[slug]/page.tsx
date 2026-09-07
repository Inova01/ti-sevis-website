import { notFound } from 'next/navigation';
import { ServiceDetailPage } from '@/app/site-pages';
import { content } from '@/lib/home-content';
import { pageMetadata } from '@/lib/page-content';
import { serviceSlugs } from '@/lib/service-details';

export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() { return serviceSlugs.map(slug => ({ slug })); }

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const index = serviceSlugs.indexOf(slug);
  if (index < 0) return {};
  return pageMetadata(content.fr.services[index][0], content.fr.services[index][1], `/services/${slug}/`);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const index = serviceSlugs.indexOf(slug);
  if (index < 0) notFound();
  return <ServiceDetailPage index={index} />;
}
