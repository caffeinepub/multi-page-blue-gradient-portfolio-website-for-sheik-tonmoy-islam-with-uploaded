import { Outlet } from '@tanstack/react-router';
import HeaderNav from './HeaderNav';
import SiteFooter from './SiteFooter';
import StaticWaterfallBackground from '../common/StaticWaterfallBackground';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col relative text-foreground">
      <StaticWaterfallBackground />
      <HeaderNav />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
