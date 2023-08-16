import * as S from './style';
import Github from 'assets/images/projects/icons/github.png';
import Deploy from 'assets/images/projects/icons/deploy.png';
import Close from 'assets/images/close.gif';
import ReactModal from 'react-modal';

interface ModalProjectProps extends ReactModal.Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    technologies: string;
};

const ModalProject: React.FC<ModalProjectProps> = ({ title, description, technologies, isOpen, onClose }) => {
    return (
        <div>
            <S.Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Card Modal">
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
                    <S.BtnClose onClick={onClose}>
                        <S.CloseImg src={Close} alt='Close' title='Close' />
                    </S.BtnClose>
                </S.Content>
            </S.Modal>
        </div>
    );
}

export default ModalProject;