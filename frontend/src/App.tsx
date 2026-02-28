import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { Suspense, lazy } from 'react';
import SiteLayout from './components/layout/SiteLayout';
import StructuredData from './components/common/StructuredData';

// Lazy load page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDigitalMarketingArticlePage = lazy(() => import('./pages/blog/BlogDigitalMarketingArticlePage'));
const BlogGraphicDesignArticlePage = lazy(() => import('./pages/blog/BlogGraphicDesignArticlePage'));
const BlogVideoEditingArticlePage = lazy(() => import('./pages/blog/BlogVideoEditingArticlePage'));
const BlogWebDesignDevArticlePage = lazy(() => import('./pages/blog/BlogWebDesignDevArticlePage'));
const BlogLawLegalArticlePage = lazy(() => import('./pages/blog/BlogLawLegalArticlePage'));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

// Root route with layout and structured data
const rootRoute = createRootRoute({
  component: () => (
    <>
      <StructuredData />
      <SiteLayout />
    </>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <HomePage />
    </Suspense>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <AboutPage />
    </Suspense>
  ),
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <ServicesPage />
    </Suspense>
  ),
});

const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/skills',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <SkillsPage />
    </Suspense>
  ),
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <PortfolioPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <ContactPage />
    </Suspense>
  ),
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <BlogPage />
    </Suspense>
  ),
});

const blogDigitalMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/digital-marketing',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <BlogDigitalMarketingArticlePage />
    </Suspense>
  ),
});

const blogGraphicDesignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/graphic-design',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <BlogGraphicDesignArticlePage />
    </Suspense>
  ),
});

const blogVideoEditingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/video-editing',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <BlogVideoEditingArticlePage />
    </Suspense>
  ),
});

const blogWebDesignDevRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/web-design-dev',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <BlogWebDesignDevArticlePage />
    </Suspense>
  ),
});

const blogLawLegalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/law-legal',
  component: () => (
    <Suspense fallback={<LoadingFallback />}>
      <BlogLawLegalArticlePage />
    </Suspense>
  ),
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
