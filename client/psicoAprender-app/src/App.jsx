import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//pages
import Header from './components/header';
import Home from './pages/home';
import GetStarted from './pages/getStarted';
import ProfileView from './pages/profileView';
import ProfessionalProfile from './pages/professionalProfile';
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
              <Route path='/professional-profile' element={<ProfessionalProfile/>}></Route>
            </Route>
          </Routes>
        </div>
        
        
    </BrowserRouter>
    </>
  )
}

export default App
