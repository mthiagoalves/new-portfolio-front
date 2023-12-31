import { useState } from 'react';
import * as S from './style';
import ModalProject from 'components/ModalProject';
import CardProjects from 'components/CardProjects';
import { projects } from 'mocks/projects';

interface ProjectInfo {
    title: string;
    slug: string;
    smallDescription: string;
    description: string;
    deploy: string;
    repository: string;
    technologies: string;
}

const Projects = () => {
    const [selectedCard, setSelectedCard] = useState<ProjectInfo | undefined>(undefined);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (card: ProjectInfo) => {
        setSelectedCard(card);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedCard(undefined);
        setModalIsOpen(false);
    };


    return (
        <S.FourthSection id='projects'>
            <S.DivTitleSection>
                <S.TitleSection>
                    Projects
                </S.TitleSection>
                <S.TextSection>
                    Here are my main projects so far. I only selected some, the others can be accessed through my <S.TextA href='https://github.com/mthiagoalves'>Github</S.TextA>
                </S.TextSection>
            </S.DivTitleSection>
            <div className="container-fluid p-0">
                <div className="row m-0 justify-content-center">
                    {projects.map((card, index) => (
                        <CardProjects
                            key={index}
                            title={card.title}
                            smallDescription={card.smallDescription}
                            technologies={card.technologies.split(', ').map(tech => tech.trim())}
                            slug={card.slug}
                            deploy={card.deploy}
                            repository={card.repository}
                            onInfoClick={() => openModal(card)}
                        />
                    ))}
                </div>
            </div>
            {selectedCard !== undefined && (
                <ModalProject
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    title={selectedCard.title}
                    description={selectedCard.description}
                    technologies={selectedCard.technologies}
                    deploy={selectedCard.deploy}
                    repository={selectedCard.repository}
                />
            )}
        </S.FourthSection>
    );
};

export default Projects;
