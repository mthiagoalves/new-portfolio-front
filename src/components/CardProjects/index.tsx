import * as S from './style';


interface CardProjectsProps {
    title: string,
    smallDescription: string,
    technologies: string
};

const CardProjects: React.FC<CardProjectsProps> = ({ title, smallDescription, technologies }) => {
    return (

        <S.CardProject className='col-6 col-sm-3'>
            <S.TitleCard>{title}</S.TitleCard>
            <S.SmallDescriptionCard>{smallDescription}</S.SmallDescriptionCard>
            <S.TechnologiesCard>{technologies}</S.TechnologiesCard>
        </S.CardProject>
    );
};

export default CardProjects;