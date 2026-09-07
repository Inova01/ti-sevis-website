import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.zones.fr[0], pageContent.zones.fr[2], '/zones/');

export default function Page() { return <SitePage page="zones" />; }
