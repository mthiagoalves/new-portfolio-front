import * as S from './style';
import Navbar from 'components/Navbar';
import About from 'components/About';
import Objectives from 'components/Objectives';

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <Navbar />
        </header>
        <About />
        <Objectives />
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
