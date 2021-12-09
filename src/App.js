import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import PhotoEditor from './photoeditor/PhotoEditor';
import ComplexGridExample from './photoeditor/ComplexGridExample';
import ComplexGridExampleNew from './photoeditor/ComplexGridExampleNew';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './loginModule/login/pages/Login';
import SignUp from './loginModule/login/pages/SignUp';
import DashBorad from './loginModule/DashBorad';
import { AuthContext } from './loginModule/shared/context/auth-context';
import { useAuth } from './loginModule/shared/hooks/useAuth';

function App() {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/dashboard" element={<DashBorad />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }} 
     >
        <Router>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
      
    
  );
}

export default App;




{/* <div>
      <Layout />
      <PhotoEditor />
      <ComplexGridExample />
</div> */}
