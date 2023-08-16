import * as S from './style';
import About from 'components/About';
import Objectives from 'components/Objectives';
import Sidebar from 'components/Sidebar';
import Knowledges from 'components/Knowledges';
import Projects from 'components/Projects';
import Contact from 'components/Contact';

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
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
