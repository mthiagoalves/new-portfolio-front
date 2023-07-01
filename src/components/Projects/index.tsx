import * as S from './style';
import CardProjects from 'components/CardProjects';

const Projects = () => {
    return (
        <S.FourthSection>
            <S.DivTitleSection>
                <S.TitleSection>
                    Projects
                </S.TitleSection>
                <S.TextSection>
                    Here are my main projects so far. I only selected some, the others can be accessed through my GitHub
                </S.TextSection>
            </S.DivTitleSection>
            <CardProjects title='Project 1' smallDescription='any description' technologies='Javascript' />
        </S.FourthSection>
    );
};

export default Projects;