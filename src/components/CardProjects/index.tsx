import * as S from './style';
import Github from 'assets/images/projects/icons/github.png'
import Deploy from 'assets/images/projects/icons/deploy.png'
import Info from 'assets/images/projects/icons/info.png'


interface CardProjectsProps {
    title: string,
    smallDescription: string,
    technologies: string,
    onOpenModal: () => void;
};

const CardProjects: React.FC<CardProjectsProps> = ({ title, smallDescription, technologies, onOpenModal }) => {
    
    return (

        <S.CardProject className='col-6 col-sm-3 text-center'>
            <S.DivAbsolute>
                
                    <S.CardImg onClick={onOpenModal} src={Info} alt='Repository' title='More info about this project'/>
                
            </S.DivAbsolute>
            <S.TitleCard>{title}</S.TitleCard>
            <S.SmallDescriptionCard>{smallDescription}</S.SmallDescriptionCard>
            <S.TechnologiesCard>{technologies}</S.TechnologiesCard>
            <S.DivIcons>
                <a href="/">
                    <S.CardImg src={Github} alt='Repository' title='Repository'/>
                </a>
                <a href="/"> 
                    <S.CardImg src={Deploy} alt='Deploy' title='Deploy'/>
                </a>
            </S.DivIcons>
        </S.CardProject>
    );
};
export default CardProjects;