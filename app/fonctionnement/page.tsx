import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.fonctionnement.fr[0], pageContent.fonctionnement.fr[2], '/fonctionnement/');

export default function Page() { return <SitePage page="fonctionnement" />; }
