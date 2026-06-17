import { useState, useEffect } from 'react';
import HomePage from './User_end/pages/screens/HomePage';
import AboutPage from './User_end/pages/screens/AboutPage';
import SuccessStoriesPage from './User_end/pages/screens/SuccessStoriesPage';
import MembershipPage from './User_end/pages/screens/MembershipPage';
import BranchesPage from './User_end/pages/screens/BranchesPage';
import ContactPage from './User_end/pages/screens/ContactPage';
import LoginPage from './User_end/pages/screens/LoginPage';
import RegisterPage from './User_end/pages/screens/RegisterPage';
import DashboardPage from './User_end/pages/screens/DashboardPage';
import MyProfilePage from './User_end/pages/screens/MyProfilePage';
import MyMatchesPage from './User_end/pages/screens/MyMatchesPage';
import SentInterestsPage from './User_end/pages/screens/SentInterestsPage';
import ReceivedInterestsPage from './User_end/pages/screens/ReceivedInterestsPage';
import MeetingsPage from './User_end/pages/screens/MeetingsPage';
import SubscriptionPlansPage from './User_end/pages/screens/SubscriptionPlansPage';
import NotificationsPage from './User_end/pages/screens/NotificationsPage';
import SettingsPage from './User_end/pages/screens/SettingsPage';
import LogoutPage from './User_end/pages/screens/LogoutPage';

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

  if (route === '#subscription') {
    return <SubscriptionPlansPage />;
  }

  if (route === '#branches') {
    return <BranchesPage />;
  }

  if (route === '#contact') {
    return <ContactPage />;
  }

  if (route === '#login') {
    return <LoginPage />;
  }

  if (route === '#register') {
    return <RegisterPage />;
  }

  if (route === '#dashboard') {
    return <DashboardPage />;
  }

  if (route === '#profile') {
    return <MyProfilePage />;
  }

  if (route === '#matches') {
    return <MyMatchesPage />;
  }

  if (route === '#sent') {
    return <SentInterestsPage />;
  }

  if (route === '#received') {
    return <ReceivedInterestsPage />;
  }

  if (route === '#meetings') {
    return <MeetingsPage />;
  }

  if (route === '#notifications') {
    return <NotificationsPage />;
  }

  if (route === '#settings') {
    return <SettingsPage />;
  }

  if (route === '#logout') {
    return <LogoutPage />;
  }

  return <HomePage />;
}
