import * as S from './style';
import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <Navbar/>
        </header>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
