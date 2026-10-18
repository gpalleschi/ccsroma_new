import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.jsx';
import { ScrollToTop } from './components/common/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Calendar from './pages/Calendar.jsx';
import Giving from './pages/Giving.jsx';
import Messages from './pages/Messages.jsx';
import Contacts from './pages/Contacts.jsx';
import PrayerRequests from './pages/PrayerRequests.jsx';
import GodAtWork from './pages/GodAtWork.jsx';
import CheckIn from './pages/CheckIn.jsx';
import Directory from './pages/Directory.jsx';
import Events from './pages/Events.jsx';
import Groups from './pages/Groups.jsx';
import Kids from './pages/Kids.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendario" element={<Calendar />} />
          <Route path="/dona" element={<Giving />} />
          <Route path="/messaggi" element={<Messages />} />
          <Route path="/contatti" element={<Contacts />} />
          <Route path="/richieste-di-preghiera" element={<PrayerRequests />} />
          <Route path="/dio-allopera" element={<GodAtWork />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/eventi" element={<Events />} />
          <Route path="/gruppi" element={<Groups />} />
          <Route path="/harvest-kids" element={<Kids />} />
          <Route path="/accedi" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
