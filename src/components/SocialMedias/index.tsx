import * as S from './style';
import github from 'assets/images/socialmedias/github.png'
import facebook from 'assets/images/socialmedias/facebook.png'
import instagram from 'assets/images/socialmedias/instagram.png'
import linkedin from 'assets/images/socialmedias/linkedin.png'
import twitter from 'assets/images/socialmedias/twitter.png'

const SocialMedias = () => {
    return (
        <S.SocialMediasUl className="col-7 p-0">
            <S.SocialMediasLi>
                <a href="https://github.com/mthiagoalves">
                    <S.SocialMediasImg src={github} alt='Icon Github' title='Github' />
                </a>
            </S.SocialMediasLi>
            <S.SocialMediasLi>
                <a href="https://www.linkedin.com/in/thiago-alves-b05ab2b0">
                    <S.SocialMediasImg src={linkedin} alt='Icon Linkedin' title='Linkedin' />
                </a>
            </S.SocialMediasLi>
            <S.SocialMediasLi>
                <a href="https://www.linkedin.com/in/thiago-alves-b05ab2b0">
                    <S.SocialMediasImg src={instagram} alt='Icon Instagram' title='Instagram' />
                </a>
            </S.SocialMediasLi>
            <S.SocialMediasLi>
                <a href="https://twitter.com/iSuiciide">
                    <S.SocialMediasImg src={twitter} alt='Icon Twitter' title='Twitter' />
                </a>
            </S.SocialMediasLi>
            <S.SocialMediasLi>
                <a href="https://web.facebook.com/M.Thiago.Alves">
                    <S.SocialMediasImg src={facebook} alt='Icon Facebook' title='Facebook' />
                </a>
            </S.SocialMediasLi>
        </S.SocialMediasUl>
    );
};

export default SocialMedias;

