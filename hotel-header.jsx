import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';

createRoot(document.getElementById('case-site-header')).render(
  <Header currentPage="projects" as="div" />,
);
