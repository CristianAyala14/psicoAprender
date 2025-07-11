import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import GetStarted from './pages/getStarted';
import PanelView from './pages/panelView';
import ProfessionalPanel from './pages/professionalPanel';
import Search from './pages/search';

// components
import Header from './components/header';
// import ProtectedRoutes from './components/protectedRoutes';

// context
import { AuthContextProvider } from './contexts/authContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="app-container">
          <Header />
          <Routes>
            {/* Public routes */}
            <Route path='/' element={<GetStarted />} />

            {/* Private routes */}
            {/* <Route element={<ProtectedRoutes />}> */}
              <Route path='/professional-panel-view' element={<ProfessionalPanel />} />
              <Route path='/panel-view' element={<PanelView />} />
              <Route path='/search' element={<Search />} />
            {/* </Route> */}
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;