import * as S from './style';
import CardKnowledges from 'components/CardKnowledges';
import axios from '../../Api';
import { useEffect, useState } from 'react';
import { Technologies, TechnologiesResponse } from 'types/api/technology';

const Knowledges = () => {
    const [technologies, setTechnologies] = useState<Technologies[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<TechnologiesResponse[]>('/technologies');
                setTechnologies(response.data);
            } catch (error) {
                console.error('Error to find technologies:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <S.ThirdSection>
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