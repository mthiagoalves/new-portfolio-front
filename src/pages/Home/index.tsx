import * as S from './style';
import About from 'components/About';
import Objectives from 'components/Objectives';
import Sidebar from 'components/Sidebar';
import Knowledges from 'components/Knowledges';

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <Sidebar />
        </header>
        <section>
          <About />
        </section>
        <section>
          <Objectives />
        </section>
        <section>
          <Knowledges />
        </section>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
