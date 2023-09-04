import * as S from './style';
import SocialMedias from 'components/SocialMedias';
import mybannerphoto from 'assets/images/mybannerphoto.jpg';
import 'bootstrap/dist/css/bootstrap.css';


const About = () => {
    return (
        <S.FirstSection className="container-fluid p-0" id='home'>
            <div className="row m-0">
                <S.LogoText>
                    Portfolio 2.0
                </S.LogoText>
                <S.ContentBx className="col-12 col-sm-7 pt-5">
                    <S.TitleH4>Hi, my name is</S.TitleH4>
                    <S.TitleH2>Thiago Alves,</S.TitleH2>
                    <S.TitleH4> i'm Fullstack Web Developer</S.TitleH4>
                    <S.TextP>
                        This is my new portfolio 2.0, maked in React with Typescript, and is consuming API maked in NestJs. Here i will to tell about my self, show my knowledges and project that i have developed until today during my journey.
                    </S.TextP>
                    <S.BtnDownloadCV href='https://drive.google.com/file/d/11l6HAugcwO9X7YXn3z5OLrVGLB7OaQhr/view?usp=drive_link' target='_blank'>Download CV</S.BtnDownloadCV>
                </S.ContentBx>
                <S.DivImage className="col-5 p-0 d-none d-sm-block">
                    <S.Photothumb src={mybannerphoto} alt='image photothumb' />
                </S.DivImage>
                <SocialMedias />
            </div>
        </S.FirstSection>
    );
}

export default About;