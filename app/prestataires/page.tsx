import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.prestataires.fr[0], pageContent.prestataires.fr[2], '/prestataires/');

export default function Page() { return <SitePage page="prestataires" />; }
