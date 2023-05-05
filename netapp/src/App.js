import './App.css';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import ReportBox from './pages/ReportBox';
import SignIn from './pages/SignIn';
import NewSignIn from './pages/NewSignIn';
import CompanySignIn from './pages/CompanySignIn';
import Signup from './pages/Signup';
import Gigs from './pages/Gigs';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GigListing from './pages/GigListing';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/reportBox' element={<ReportBox/>}/>
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/gigs' element={<Gigs/>}/>
          <Route path='/newsignin' element={<NewSignIn/>}/>
          <Route path='/clientsignin' element={<CompanySignIn/>}/>
          <Route path='/giglisting' element={<GigListing/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;