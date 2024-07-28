import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPages from './pages/AllPages';
import Events from './pages/Events';
import Home from './pages/Home';
import Media from './pages/Media';
import Practice from './pages/Practice';
import Museum from './pages/Museum';
import Abami from './pages/Abami';
import Imikino from './pages/Imikino';
import AdminLogin from './pages/AdminLogin';
import LayoutAdmin from './pages/LayoutAdmin';
import Med from './pages/Med';
import Proverb from './pages/Proverb';
import Activity from './pages/Activity';
import Dashboard from './pages/Dashboard';

import AddProverb from './pages/AddProverb';
import AddEvent from './pages/AddEvent';
import Contact from './pages/Contact';
import Gihanga from './pages/Gihanga';
import Gahima from './pages/Gahima';
import Yuhi from './pages/Yuhi';
import LandingPage from './Components/LandingPage';
import EditEvent from './pages/EditEvent';
import EditProverb from './pages/EditProverb';
import AddMedia from './pages/AddMedia';
import EditMedia from './pages/EditMedia';
import Inkomoko from './pages/Inkomoko';
import Login from './pages/Login';
import Imigani from './pages/Imigani';
import FeedBack from './pages/FeedBack';




const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for the main website */}
        <Route  element={<AllPages />}>
        <Route path="/" element={<LandingPage/>} />
          <Route path='/'element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="media" element={<Media />} />
          <Route path="practical" element={<Practice />} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="history" element={<Museum />} />
          <Route path="history/museum" element={<Museum />} />
          <Route path="history/abami" element={<Abami />} />
          <Route path="history/imigani" element={<Imigani />} />
          <Route path="history/imikino" element={<Imikino />} />
          <Route path="auth/adminLogin" element={<AdminLogin />} />
          <Route path="gihanga" element={<Gihanga />} />
          <Route path="gahima" element={<Gahima/>} />
          <Route path="yuhi" element={<Yuhi/>} />
          <Route path="inkomoko" element={<Inkomoko/>} />
       

        </Route>
          <Route path="login" element={<Login/>} />

        {/* Routes for the admin panel */}
        <Route path="/" element={<LayoutAdmin />}>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="med" element={<Med />} />
          <Route path="proverb" element={<Proverb />} />
          <Route path="activity" element={<Activity />} />
          <Route path="Events/:id" element={<Events />} />

          <Route path="addproverb" element={<AddProverb />} />
          <Route path="addevent" element={<AddEvent />} />
          <Route path="EditEvent/:id" element={<EditEvent />} />
          <Route path="EditProverb/:id" element={<EditProverb/>} />
          <Route path='Med' element={<Med/>}/>
          <Route path='AddMedia' element={<AddMedia/>}/>

          
          <Route path='feedback' element={<FeedBack/>}/>

          <Route path='EditMedia/:id' element={<EditMedia/>}/>


        </Route>
      </Routes>
    </Router>
  );
};

export default App;