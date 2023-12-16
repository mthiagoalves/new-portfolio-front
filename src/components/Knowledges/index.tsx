import * as S from './style';
import CardKnowledges from 'components/CardKnowledges';
import { technologies } from 'mocks/technologies';

const Knowledges = () => {
   
    return (
        <S.ThirdSection id='knowledges'>
            <S.DivTitleSection>
                <S.TitleSection>
                    Soft Skills
                </S.TitleSection>
                <S.TextSection>
                    Here i will show on the technologies that I have knowledge of.
                </S.TextSection>
            </S.DivTitleSection>
            <div className="container-fluid p-0">
                <div className="row m-0 justify-content-center">
                    {technologies.map((technology, index) => (
                        <CardKnowledges
                            key={index}
                            imageSrc={require(`assets/images/technologies/${technology.slug}.png`)}
                            imageAlt={technology.name}
                            title={technology.name}
                            description={technology.level}
                        />
                    ))}
                </div>
            </div>
        </S.ThirdSection>
    );
}

export default Knowledges;