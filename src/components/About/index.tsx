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
                        Full Stack Developer with 4+ years of experience in building scalable, high-performance web applications. I specialize in architecting robust back-end solutions with PHP (Laravel) and Node.js (Nest.js), and crafting dynamic, responsive user interfaces on the front-end with Vue.js.
                    </S.TextP>
                    <S.BtnDownloadCV href='https://drive.google.com/file/d/1N2cuGYmt7GaS1estMgnjiHkJwJbjG32j/view?usp=sharing' target='_blank'>Download my CV</S.BtnDownloadCV>
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