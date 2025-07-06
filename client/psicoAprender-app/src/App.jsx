import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//pages
import Header from './components/header';
import Home from './pages/home';
import GetStarted from './pages/getStarted';
import ProfileView from './pages/profileView';
import Search from './pages/search';
import PanelView from './pages/panelView';
//components
//import ProtectedRoutes from './components/protectedRoutes';




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

              {/* private route  */}
            {/* <Route element={<ProtectedRoutes/>}> */}
              <Route path='/profile-view' element={<ProfileView/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path='/panel-view' element={<PanelView/>}></Route>
              

            {/* </Route> */}
          </Routes>
        </div>
        
        
    </BrowserRouter>
    </>
  )
}

export default App
