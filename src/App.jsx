import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Personal from './pages/Personal';
import ContactInformation from './pages/ContactInformation';
import Employment from './pages/Employment';
import Hobbie from './pages/Hobbie';
import PreferredContact from './pages/PreferredContact';
import SchoolInformation from './pages/SchoolInformation';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Layout />}> 
          <Route index element={<Personal />} />
          <Route path="contact-info" element={<ContactInformation />} />
          <Route path="employment-info" element={<Employment />} />
          <Route path="preferred-contact-info" element={<PreferredContact />} />
          <Route path="hobbie-contact-info" element={<Hobbie />} />
          <Route path="school-info" element={<SchoolInformation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
