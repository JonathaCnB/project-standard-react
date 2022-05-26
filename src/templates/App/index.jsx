import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import EditProfile from '../EditProfile';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Profile from '../Profile';
import Photo from '../Photo';
import Search from '../Search';
import { useAuth } from '../../hooks/useAuth';
import * as Styled from './styles';
function App() {
  const { auth, loading } = useAuth();
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <Styled.Wrapper>
        <BrowserRouter>
          <Navbar />
          <Styled.Container>
            <Routes>
              <Route
                path="/"
                element={auth ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile"
                element={auth ? <EditProfile /> : <Navigate to="/login" />}
              />
              <Route
                path="/users/:id"
                element={auth ? <Profile /> : <Navigate to="/login" />}
              />
              <Route
                path="/photos/:id"
                element={auth ? <Photo /> : <Navigate to="/login" />}
              />
              <Route
                path="/search"
                element={auth ? <Search /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!auth ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!auth ? <Register /> : <Navigate to="/" />}
              />
            </Routes>
          </Styled.Container>
          <Footer />
        </BrowserRouter>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
