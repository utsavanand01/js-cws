
import './App.css';
import Apply from './Component/Apply';
import Footer from './Component/Footer';
import Header from './Component/Header';
import OnlinePayment from './Component/OnlinePayment';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Apply" element={<Apply/>} />
        <Route path="/OnlinePayment" element={<OnlinePayment/>} />
      </Routes>



      <Footer />

    </BrowserRouter>



  );
}

export default App;
