import * as S from './style';
import Github from 'assets/images/projects/icons/github.png'
import Deploy from 'assets/images/projects/icons/deploy.png'
import Info from 'assets/images/projects/icons/info.png'

interface CardProjectsProps {
    title: string,
    smallDescription: string,
    technologies: string[],
    deploy: string,
    repository: string,
    slug: string,
    onInfoClick: () => void
};

const CardProjects: React.FC<CardProjectsProps> = ({ title, smallDescription, technologies, slug, deploy, repository, onInfoClick }) => {
    return (

        <S.CardProject className='col-12 col-sm-3 text-center' slug={slug}>
            <S.DivAbsolute>
                <S.CardImg src={Info} onClick={onInfoClick} alt='Repository' title='More info about this project' />
            </S.DivAbsolute>
            <S.TitleCard>{title}</S.TitleCard>
            <S.SmallDescriptionCard>{smallDescription}</S.SmallDescriptionCard>
            <S.TechnologiesCard>Technologies: {technologies.join(', ')}</S.TechnologiesCard>
            <S.DivIcons>
                <a href={repository} rel='noreferrer' target='_blank'>
                    <S.CardImg src={Github} alt='Repository' title='Repository' />
                </a>
                <a href={deploy} rel='noreferrer' target='_blank'>
                    <S.CardImg src={Deploy} alt='Deploy' title='Deploy' />
                </a>
            </S.DivIcons>
        </S.CardProject>
    );
};
export default CardProjects;