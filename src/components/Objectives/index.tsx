import * as S from './style';
import myson from 'assets/images/me-and-my-son.jpg'

const Objectives = () => {
    return (
        <S.SecondSection>
            <S.DivTitleSection>
                <S.TitleSection>
                    About me
                </S.TitleSection>
                <S.TextSection>
                    A little about me and my way of working.
                </S.TextSection>
            </S.DivTitleSection>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-3 p-0 text-center d-none d-sm-block">
                        <S.ImgSection src={myson} alt="Me and my son"/>
                    </div>
                    <div className="col-sm-9 col-12 p-0">
                        <S.TextSection>
                            It can be said that I am a very curious person. I like to do a lot of research to be able to solve certain things, and I try as much as possible to update myself and the projects I'm working on. I always try to keep time in my favor, I take the issue of quality very much into account and charge myself a lot about it, but always attentive to deadlines. I am currently working in Portugal at Covet Group where I am responsible for some of the group's websites. Where I do maintenance, implementation of new features, SQL, implementation of new projects. <br className='d-none d-sm-block' /> <b>And for last e dont less important, i love so much my son!</b>
                        </S.TextSection>
                        <S.LabelLanguages>
                            English:
                        </S.LabelLanguages>
                        <S.ProgressBar>
                            <S.ProgressBarInner>
                                <S.ProgressBarInnerFilled  style={{ width: '35%' }}></S.ProgressBarInnerFilled>
                                <S.ProgressBarInnerLabel>100%</S.ProgressBarInnerLabel>
                            </S.ProgressBarInner>
                        </S.ProgressBar>
                        <S.LabelLanguages>
                            Portuguese:
                        </S.LabelLanguages>
                        <S.ProgressBar>
                            <S.ProgressBarInner>
                                <S.ProgressBarInnerFilled  style={{ width: '100%' }}></S.ProgressBarInnerFilled>
                                <S.ProgressBarInnerLabel>Native</S.ProgressBarInnerLabel>
                            </S.ProgressBarInner>
                        </S.ProgressBar>
                    </div>
                </div>
            </div>
        </S.SecondSection>
    );
}

export default Objectives; 