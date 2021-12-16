import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/admin' element={<Admin/>}></Route>  
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
