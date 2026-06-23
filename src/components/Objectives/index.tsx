import * as S from './style';
import myson from 'assets/images/me-and-my-son.jpg'

const Objectives = () => {
    return (
        <S.SecondSection id='about'>
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
                            I am focused on delivering clean, maintainable code by applying industry best practices to ensure project quality. I am actively seeking an international opportunity to apply my skills and contribute to innovative projects. <br className='d-none d-sm-block' /> <b>And for last e dont less important, i love so much my son!</b>
                        </S.TextSection>
                        <S.LabelLanguages>
                            English:
                        </S.LabelLanguages>
                        <S.ProgressBar>
                            <S.ProgressBarInner>
                                <S.ProgressBarInnerFilled  style={{ width: '75%' }}></S.ProgressBarInnerFilled>
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