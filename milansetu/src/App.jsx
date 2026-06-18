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
import FloatingChatBox from './User_end/components/FloatingChatBox';

const AUTH_ROUTES = new Set([
  '#dashboard',
  '#profile',
  '#matches',
  '#sent',
  '#received',
  '#meetings',
  '#subscription',
  '#notifications',
  '#settings',
  '#logout',
]);

function getPageForRoute(route) {
  switch (route) {
    case '#about':
      return <AboutPage />;
    case '#success':
      return <SuccessStoriesPage />;
    case '#membership':
      return <MembershipPage />;
    case '#subscription':
      return <SubscriptionPlansPage />;
    case '#branches':
      return <BranchesPage />;
    case '#contact':
      return <ContactPage />;
    case '#login':
      return <LoginPage />;
    case '#register':
      return <RegisterPage />;
    case '#dashboard':
      return <DashboardPage />;
    case '#profile':
      return <MyProfilePage />;
    case '#matches':
      return <MyMatchesPage />;
    case '#sent':
      return <SentInterestsPage />;
    case '#received':
      return <ReceivedInterestsPage />;
    case '#meetings':
      return <MeetingsPage />;
    case '#notifications':
      return <NotificationsPage />;
    case '#settings':
      return <SettingsPage />;
    case '#logout':
      return <LogoutPage />;
    default:
      return <HomePage />;
  }
}

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

  return (
    <>
      {getPageForRoute(route)}
      {AUTH_ROUTES.has(route) && <FloatingChatBox />}
    </>
  );
}
