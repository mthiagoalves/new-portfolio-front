import * as S from './style';
import Navbar from 'components/Navbar';
import About from 'components/About';
import Objectives from 'components/Objectives';
import Sidebar from 'components/Sidebar';

const Home = () => {
  return (
    <S.Home>
      <S.HomeContent>
        <header className='d-sm-block d-none'>
          <Navbar />
        </header>
        <Sidebar />
        <About />
        <Objectives />
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
