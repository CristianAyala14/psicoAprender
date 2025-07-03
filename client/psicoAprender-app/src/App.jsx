import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//pages
import Header from './components/header';
import Home from './pages/home';
import GetStarted from './pages/getStarted';
import ProfileView from './pages/profileView';
import ProfessionalProfile from './pages/professionalProfile';
import PacientlProfile from "./pages/pacientProfile"
import Search from './pages/search';
import AdminView from './pages/adminView';
import ProfessionalView from './pages/professionalView';
//components
import ProtectedRoutes from './components/protectedRoutes';




function App() {
  

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Header/>
          <Routes>
              {/* public routes */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/getstarted' element={<GetStarted/>}></Route>
   
              {/* private routes  */}
            <Route element={<ProtectedRoutes/>}>
              <Route path='/profile-view' element={<ProfileView/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path='/admin-view' element={<AdminView/>}></Route>
              <Route path='/professional-view' element={<ProfessionalView/>}></Route>
              <Route path='/professional-profile' element={<ProfessionalProfile/>}></Route>
              <Route path='/pacient-profile' element={<PacientlProfile/>}></Route>

            </Route>
          </Routes>
        </div>
        
        
    </BrowserRouter>
    </>
  )
}

export default App
