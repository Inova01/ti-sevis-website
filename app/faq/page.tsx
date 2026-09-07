import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.faq.fr[0], pageContent.faq.fr[2], '/faq/');

export default function Page() { return <SitePage page="faq" />; }
