import { useState, useEffect } from 'react';
import HomePage from './User_end/pages/screens/HomePage';
import AboutPage from './User_end/pages/screens/AboutPage';
import SuccessStoriesPage from './User_end/pages/screens/SuccessStoriesPage';
import MembershipPage from './User_end/pages/screens/MembershipPage';
import BranchesPage from './User_end/pages/screens/BranchesPage';
import ContactPage from './User_end/pages/screens/ContactPage';

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple routing based on hash
  if (route === '#about') {
    return <AboutPage />;
  }
  
  if (route === '#success') {
    return <SuccessStoriesPage />;
  }

  if (route === '#membership') {
    return <MembershipPage />;
  }

  if (route === '#branches') {
    return <BranchesPage />;
  }

  if (route === '#contact') {
    return <ContactPage />;
  }

  return <HomePage />;
}
