import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.services.fr[0], pageContent.services.fr[2], '/services/');

export default function Page() { return <SitePage page="services" />; }
