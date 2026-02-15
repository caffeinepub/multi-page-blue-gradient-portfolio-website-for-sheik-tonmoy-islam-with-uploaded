import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDigitalMarketingArticlePage from './pages/blog/BlogDigitalMarketingArticlePage';
import BlogGraphicDesignArticlePage from './pages/blog/BlogGraphicDesignArticlePage';
import BlogVideoEditingArticlePage from './pages/blog/BlogVideoEditingArticlePage';
import BlogWebDesignDevArticlePage from './pages/blog/BlogWebDesignDevArticlePage';
import BlogLawLegalArticlePage from './pages/blog/BlogLawLegalArticlePage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skills',
  component: SkillsPage,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: PortfolioPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const blogDigitalMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/digital-marketing',
  component: BlogDigitalMarketingArticlePage,
});

const blogGraphicDesignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/graphic-design',
  component: BlogGraphicDesignArticlePage,
});

const blogVideoEditingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/video-editing',
  component: BlogVideoEditingArticlePage,
});

const blogWebDesignDevRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/web-design-dev',
  component: BlogWebDesignDevArticlePage,
});

const blogLawLegalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/law-legal',
  component: BlogLawLegalArticlePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  skillsRoute,
  portfolioRoute,
  contactRoute,
  blogRoute,
  blogDigitalMarketingRoute,
  blogGraphicDesignRoute,
  blogVideoEditingRoute,
  blogWebDesignDevRoute,
  blogLawLegalRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
