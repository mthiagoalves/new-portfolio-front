import * as S from './style';

interface KnowledgesBoxProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
};

const CardKnowledges: React.FC<KnowledgesBoxProps> = ({ imageSrc, imageAlt, title, description }) => {
    return (
        <S.KnowledgesBx className='col-sm-4 col-6'>
            <S.KnowledgesImg src={imageSrc} alt={imageAlt} />
            <S.KnowledgesH2>{title}</S.KnowledgesH2>
            <S.KnowledgesP>{description}</S.KnowledgesP>
        </S.KnowledgesBx>
    );
}

export default CardKnowledges;