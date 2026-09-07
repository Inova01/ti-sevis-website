import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.contact.fr[0], pageContent.contact.fr[2], '/contact/');

export default function Page() { return <SitePage page="contact" />; }
