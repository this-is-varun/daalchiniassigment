import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import FooterMain from './components/FooterMain';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Order from './components/Order';

function App() {
  return (
     
    < >
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<FooterMain/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/order" element={<Order/>}/>


    </Routes>
    </BrowserRouter>     
    </>
  );
}

export default App;
