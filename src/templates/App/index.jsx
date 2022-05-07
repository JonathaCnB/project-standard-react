import Events from '../../components/Events';
import ManageData from '../../components/ManageData';
import TemplateExpressions from '../../components/TemplateExpressons';
import ListRender from '../../components/ListRender';
import * as Styled from './styles';
import ConditionalRender from '../../components/ConditionalRender';
import Container from '../../components/Container';
import Title from '../../components/Title';
import MyForms from '../../components/MyForms';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="gold">
        <h1>Hello Word</h1>
        <TemplateExpressions />
        <Events />
        <ManageData />
        <div>
          <ListRender />
        </div>
        <div>
          <ConditionalRender />
        </div>
        <div>
          <Container>
            <p>Esté é um conteúdo</p>
          </Container>
        </div>
        <div>
          <Title />
        </div>
        <div>
          <MyForms user={{ name: 'jonatha', email: 'test@t.com' }} />
        </div>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
