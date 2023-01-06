import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Addproduct from './pages/Addproduct';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/addproduct' element={<Addproduct/>} ></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
