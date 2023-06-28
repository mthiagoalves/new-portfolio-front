import * as S from './style';
import Navbar from 'components/Navbar';
import About from 'components/About';

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <Navbar/>
        </header>
        <About/>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
