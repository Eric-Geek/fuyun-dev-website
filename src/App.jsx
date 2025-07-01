import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import { SearchProvider } from './components/context/SearchContext/SearchContext';
import { LanguageProvider } from './components/context/LanguageContext/LanguageContext'
import { TransitionProvider } from './components/context/TransitionContext/TransitionContext';
import { Toaster } from 'sonner'
import { toastStyles } from './utils/customTheme';

import DisplayHeader from './components/landing/DisplayHeader/DisplayHeader';
import Header from './components/navs/Header';
import Sidebar from './components/navs/Sidebar';
import LandingPage from './pages/LandingPage'
import CategoryPage from './pages/CategoryPage'
import ShowcasePage from './pages/ShowcasePage';
import PersonalPage from './pages/PersonalPage';
import TestPage from './pages/TestPage';
import SimpleTest from './pages/SimpleTest';

function AppContent() {
  const location = useLocation();

  const getActiveItem = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/showcase') return 'showcase';
    return null;
  };

  const isCategoryPage = location.pathname.match(/^\/[^/]+\/[^/]+$/);
  const isPersonalPage = location.pathname === '/personal';
  const isTestPage = location.pathname === '/test' || location.pathname === '/simple';

  return (
    <>
      {!isCategoryPage && !isPersonalPage && !isTestPage && <DisplayHeader activeItem={getActiveItem()} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/simple" element={<SimpleTest />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/:category/:subcategory" element={
          <SearchProvider>
            <LanguageProvider>
              <TransitionProvider>
                <main className='app-container'>
                  <Header />
                  <section className='category-wrapper'>
                    <Sidebar />
                    <CategoryPage />
                  </section>
                  <Toaster
                    toastOptions={toastStyles}
                    position='bottom-right'
                    visibleToasts={1}
                  />
                </main>
              </TransitionProvider>
            </LanguageProvider>
          </SearchProvider>
        } />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
