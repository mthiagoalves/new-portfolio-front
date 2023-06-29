import * as S from './style';
import photothumb from 'assets/images/photothumb.jpg'
import 'bootstrap/dist/css/bootstrap.css';


const About = () => {
    return (
        <S.FirstSection className="container-fluid p-0">
                <div className="row m-0">
                    <S.LogoText>
                        Portfolio 2.0
                    </S.LogoText>
                    <S.ContentBx className="col-7 pt-5">
                        <S.TitleH4>Hi, my name is</S.TitleH4>
                        <S.TitleH2>Thiago Alves,</S.TitleH2>
                        <S.TitleH4> i'm Fullstack Web Developer</S.TitleH4>
                        <S.TextP>
                            This is my new portfolio 2.0, maked in React with Typescript, and is consuming API maked in NestJs. Here i will to tell about my self, show my knowledges and project that i have developed until today during my journey. 
                        </S.TextP>
                        <S.BtnDownloadCV href='https://drive.google.com/file/d/1M1bZb9DweDhfkvSnYf-UIxqImAzP4YBa/view?usp=sharing' target='_blank'>Download CV</S.BtnDownloadCV>
                    </S.ContentBx>
                    <S.DivImage className="col-5 p-0 d-none d-sm-block">
                        <S.Photothumb src={photothumb} alt='image photothumb'/>
                    </S.DivImage>
                    
                </div>
        </S.FirstSection>
    );
}

export default About;