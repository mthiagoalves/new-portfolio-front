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
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <CardProjects title='Project 1' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 1' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                </div>
            </div>
        </S.FourthSection>
    );
};

export default Projects;