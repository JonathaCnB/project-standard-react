import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Styled from './styles';
import Home from '../Home';
import About from '../About';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Styled.Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Styled.Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
