import * as S from './style';
import CardKnowledges from 'components/CardKnowledges';
import JavaScript from 'assets/images/technologies/javascript.png';
import Typescript from 'assets/images/technologies/typescript.png';
import PHP from 'assets/images/technologies/php.png';
import NestJs from 'assets/images/technologies/nestjs.png';
import Laravel from 'assets/images/technologies/laravel.png';
import MySql from 'assets/images/technologies/mysql.png';
import Postgress from 'assets/images/technologies/postgress.png';
import CSS from 'assets/images/technologies/css.png';
import React from 'assets/images/technologies/react.png';
import Bootstrap from 'assets/images/technologies/bootstrap.png';
import Prisma from 'assets/images/technologies/prisma.png';
import HTML from 'assets/images/technologies/html.png';
import Github from 'assets/images/technologies/github.png'

const Knowledges = () => {
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
                    <CardKnowledges imageSrc={JavaScript} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={PHP} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={Typescript} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={Laravel} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={NestJs} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={React} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={MySql} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={Postgress} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={Prisma} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={Bootstrap} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={HTML} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={CSS} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                    <CardKnowledges imageSrc={Github} imageAlt="Alt da imagem" title="Technology" description="Level: Intermediate" />
                </div>
            </div>
        </S.ThirdSection>
    );
}

export default Knowledges;