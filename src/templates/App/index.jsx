import StartScreen from '../../components/StartScreen';
import * as Styled from './styles';
function Home() {
  return (
    <div>
      <Styled.Wrapper background="gold">
        <StartScreen />
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
