import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalPage from './pages/PersonalPage';
import useDocumentTitle from './hooks/useDocumentTitle';

const AppRoutes = () => {
  useDocumentTitle("Fuyun - Full Stack Developer & Creator");
  return (
    <Routes>
      <Route path="*" element={<PersonalPage />} />
    </Routes>
  );
};

const PersonalApp = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default PersonalApp; 