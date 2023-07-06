import * as S from './style';
import Github from 'assets/images/projects/icons/github.png';
import Deploy from 'assets/images/projects/icons/deploy.png';
import Close from 'assets/images/close.gif';

interface ModalProjectProps {
    title: string,
    description: string,
    technologies: string
};

const ModalProject: React.FC<ModalProjectProps> = ({ title, description, technologies }) => {
    return (
        <div>
            <S.Modal closing={true}>
                <S.Content>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Technologies: {technologies}</p>
                    <S.DivIcons>
                        <a href="/">
                            <S.CardImg src={Github} alt='Repository' title='Repository' />
                        </a>
                        <a href="/">
                            <S.CardImg src={Deploy} alt='Deploy' title='Deploy' />
                        </a>
                    </S.DivIcons>
                    <S.BtnClose>
                        <S.CloseImg src={Close} alt='Close' title='Close' />
                    </S.BtnClose>
                </S.Content>
            </S.Modal>
        </div>
    );
}

export default ModalProject;