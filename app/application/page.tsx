import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.application.fr[0], pageContent.application.fr[2], '/application/');

export default function Page() { return <SitePage page="application" />; }
