import * as Styled from './styles';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Aboult from '../Aboult';
import { HookUseContext } from '../../components/HookUseContext';

function App() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <HookUseContext>
          <h1>React Hooks</h1>
          <BrowserRouter>
            <ul className="links_lists">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboult">Sobre</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboult" element={<Aboult />} />
            </Routes>
          </BrowserRouter>
        </HookUseContext>
      </Styled.Wrapper>
    </div>
  );
}

export default App;
