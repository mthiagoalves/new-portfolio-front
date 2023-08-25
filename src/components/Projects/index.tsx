import { useEffect, useState } from 'react';
import * as S from './style';
import ModalProject from 'components/ModalProject';
import CardProjects from 'components/CardProjects';
import axios from '../../Api';

import { ProjectResponse, Project } from 'types/api/project';

interface ProjectInfo {
    title: string,
    slug: string,
    smallDescription: string,
    description: string,
    deploy: string,
    repository: string,
    technologies: string[]
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

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ProjectResponse[]>('/project');
                
                const transformedProjects = response.data.map((project) => ({
                    title: project.title,
                    slug: project.slug,
                    smallDescription: project.smallDescription,
                    description: project.description,
                    repository: project.repository,
                    deploy: project.deploy,
                    technologies: Array.isArray(project.technologies)
                        // @ts-ignore
                        ? project.technologies.map(tech => tech.name)
                        : [],
                    order: project.order
                }));
                setProjects(transformedProjects);
            } catch (error) {
                console.error('Error to find projects:', error);
            }
        };

        fetchData();
    }, []);

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
                            technologies={card.technologies}
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
