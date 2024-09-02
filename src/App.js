//import logo from './logo.svg';
//import './App.css';
////import RecipeSearch from './RecipeSearch';
////import './RecipeSearch.css';
//import HomePage from './HomePage';
//import './HomePage.css';
//function App() {
//  return (
//    <div >
//    <HomePage/>
//
//    </div>
//  );
//}
//
//export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AdminLogin from './AdminLogin';
// Create this similar to SignInPage
import AdminPage from './AdminPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
