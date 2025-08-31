import { ThemeProvider } from 'next-themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import BlogPostPage from './pages/BlogPostPage';
import BlogsPage from './pages/BlogsPage';
import BugTalesPage from './pages/BugTalesPage';
import ContactPage from './pages/ContactPage';
import Index from './pages/Index';
import NewsletterPage from './pages/NewsletterPage';
import NotFound from './pages/NotFound';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';
import WikiShell from './pages/WikiShell';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogPostPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bug-tales" element={<BugTalesPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            {/* Digital Garden routes removed in favor of new Wiki */}
            <Route path="/wiki" element={<WikiShell />} />
            <Route path="/wiki/:slug" element={<WikiShell />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
