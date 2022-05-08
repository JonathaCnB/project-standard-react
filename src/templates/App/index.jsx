import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import { useAuthemtication } from '../../hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import * as Styled from './styles';
import Home from '../Home';
import About from '../About';
import Login from '../Login';
import CreatePost from '../CreatePost';
import Dashboard from '../Dashboard';
import Register from '../Register';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthemtication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Styled.Container>
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </Styled.Container>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
