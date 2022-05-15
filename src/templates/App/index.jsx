import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import * as Styled from './styles';
function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <BrowserRouter>
          <Navbar />
          <Styled.Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Styled.Container>
          <Footer />
        </BrowserRouter>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
