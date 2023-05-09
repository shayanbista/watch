
import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Contact from './Contact';  
import Home from './Home';
import Login from './Login';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cont" element={<Contact/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/hist"  element={<Contact/>}/>
       </Routes>
     </BrowserRouter>
     </>
  )
}

export default App;
