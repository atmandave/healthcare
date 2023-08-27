
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
      </Routes>
    </Router>
   
  );
}

export default App;
