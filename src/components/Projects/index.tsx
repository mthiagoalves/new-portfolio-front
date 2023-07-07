import * as S from './style';
import { useState } from 'react';
import CardProjects from 'components/CardProjects';
import ModalProject from 'components/ModalProject';

const Projects = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
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
                    <CardProjects title='Project 1' onOpenModal={() => setOpenModal(true)} smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' onOpenModal={() => setOpenModal(true)} smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' onOpenModal={() => setOpenModal(true)} smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' onOpenModal={() => setOpenModal(true)} smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 1' onOpenModal={() => setOpenModal(true)} smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                    <CardProjects title='Project 2' onOpenModal={() => setOpenModal(true)} smallDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum pariatur ab error temporibus quia?
' technologies='Javascript' />
                </div>
            </div>
            {openModal && (
                <ModalProject title='Project 1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est asperiores ipsum inventore saepe? Aspernatur mollitia voluptates dolor. Necessitatibus hic laborum non aut nobis ipsam quibusdam dolorum ad praesentium natus, nulla nam! Molestiae sapiente magni animi rem, quasi saepe porro ut quisquam distinctio aliquid quam vero eaque non perspiciatis neque nostrum provident corporis, incidunt dolor, quibusdam architecto. Ipsa minus fugiat quam inventore sequi ratione odit veritatis, repellendus quod explicabo enim deleniti quo totam perferendis labore ex eveniet nostrum illum autem, consequuntur veniam, quasi nihil fuga reprehenderit. Minima, expedita? Facere, sunt. Quidem doloremque eius magnam consequuntur possimus id eveniet veniam, voluptatum, hic ipsa quibusdam? Nesciunt, vero accusantium. Odio, saepe, ipsum quas voluptatum debitis facere est qui ea minima error nihil atque repellat excepturi maiores fuga rerum libero? Eligendi eius illum nobis alias ad neque esse! Tenetur, rem repellendus pariatur beatae possimus obcaecati neque repellat in magni sint harum minima sequi aliquid!
    ' technologies='Javascript' />
            )}
        </S.FourthSection>
    );
};

export default Projects;