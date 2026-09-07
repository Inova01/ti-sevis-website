import SitePage from '@/app/site-pages';
import { pageContent, pageMetadata } from '@/lib/page-content';

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageContent.mission.fr[0], pageContent.mission.fr[2], '/mission/');

export default function Page() { return <SitePage page="mission" />; }
