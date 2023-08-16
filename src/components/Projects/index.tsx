import React, { useState } from 'react';
import * as S from './style';
import ModalProject from 'components/ModalProject';
import CardProjects from 'components/CardProjects';

interface ProjectInfo {
    title: string;
    smallDescription: string;
    description: string;
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

    const cards = [
        {
            title: 'Project 1',
            smallDescription: 'Description of project 1...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, TypeScript',
        },
        {
            title: 'Project 2',
            smallDescription: 'Description of project 2...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, Node.js',
        },
        {
            title: 'Project 3',
            smallDescription: 'Description of project 3...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, Node.js',
        },
        {
            title: 'Project 4',
            smallDescription: 'Description of project 4...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, Node.js',
        },
        {
            title: 'Project 5',
            smallDescription: 'Description of project 5...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, Node.js',
        },
        {
            title: 'Project 6',
            smallDescription: 'Description of project 6...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, Node.js',
        },
        {
            title: 'Project 7',
            smallDescription: 'Description of project 7...',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            technologies: 'React, Node.js',
        }
    ];
    return (
        <S.FourthSection>
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
                    {cards.map((card, index) => (
                        <CardProjects
                            key={index}
                            title={card.title}
                            smallDescription={card.smallDescription}
                            technologies={card.technologies}
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
                />
            )}

        </S.FourthSection >
    );
};

export default Projects;