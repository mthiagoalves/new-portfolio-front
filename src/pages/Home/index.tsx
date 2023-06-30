import * as S from './style';
import About from 'components/About';
import Objectives from 'components/Objectives';
import Sidebar from 'components/Sidebar';

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <Sidebar />
        </header>
        <section>
          <About />
          <Objectives />
        </section>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
