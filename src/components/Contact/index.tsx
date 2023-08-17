import * as S from './style';
import Email from 'assets/images/socialmedias/email.png';
import Wpp from 'assets/images/socialmedias/wpp.png';
import Linkedin from 'assets/images/socialmedias/linkedin-squad.png';
import Ig from 'assets/images/socialmedias/instagram.png';

const Contact = () => {
    return (
        <S.FiveScetion>
            <S.DivTitleSection>
                <S.TitleSection>
                    Contact Me
                </S.TitleSection>
                <S.TextSection>
                    If you have interest in me, please contact me.
                </S.TextSection>
            </S.DivTitleSection>
            <div className="container-fluid">
                <div className="row m-0 justify-content-between">
                    <div className="col-5 m-auto text-center">
                        <div className="row m-0 justify-content-between">
                            <div className="col-3 p-0">
                                <S.AContact href="mailto:m.thiago.alves@live.com">
                                    <S.ImgContact src={Email} alt="Email" />
                                </S.AContact>
                            </div>
                            <div className="col-3 p-0">
                                <S.AContact href="https://wa.me/qr/U4L3FZUAEHOPI1" rel="noreferrer" target="_blank">
                                    <S.ImgContact src={Wpp} alt="Whatsapp" />
                                </S.AContact>
                            </div>
                            <div className="col-3 p-0">
                                <S.AContact href="https://www.linkedin.com/in/thiago-alves-b05ab2b0/" rel="noreferrer" target="_blank">
                                    <S.ImgContact src={Linkedin} alt="Linkedin" />
                                </S.AContact>
                            </div>
                            <div className="col-3 p-0">
                                <S.AContact href="https://www.instagram.com/mthiagoalves" rel="noreferrer" target="_blank">
                                    <S.ImgContact src={Ig} alt="Instagram" />
                                </S.AContact>
                            </div>
                        </div>
                        <S.TextSection>
                            Or
                        </S.TextSection>
                        <form action="" className='text-start'>
                            <S.GroupForm>
                                <S.LabelForm htmlFor="name">Name</S.LabelForm>
                                <S.TransparentInput type="text" placeholder='Your name:' id='name' />
                            </S.GroupForm>
                            <S.GroupForm>
                                <S.LabelForm htmlFor="email">Email</S.LabelForm>
                                <S.TransparentInput type="email" placeholder='Your email:' id='email' />
                            </S.GroupForm>
                            <S.GroupForm>
                                <S.LabelForm htmlFor="number">Phone Number</S.LabelForm>
                                <S.TransparentInput type="text" placeholder='Your number:' id='number' />
                            </S.GroupForm>
                            <S.GroupForm>
                                <S.LabelForm htmlFor="mesagge">Message</S.LabelForm>
                                <S.StyledTextarea placeholder='Write here:' id='message' />
                            </S.GroupForm>
                            <div className="text-end">
                                <S.BtnSubmit>
                                    Contact now
                                </S.BtnSubmit>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <S.TextFooter>
                © 2023 Thiago Alves. All Right Reserved
            </S.TextFooter>
        </S.FiveScetion>
    );
}
export default Contact;