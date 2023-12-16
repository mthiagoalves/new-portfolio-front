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
    deploy: string;
    repository: string;
};

const ModalProject: React.FC<ModalProjectProps> = ({ title, description, technologies, repository, deploy, isOpen, onClose }) => {
    return (
        <div>
            <S.Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Card Modal">
                <S.Content>
                    <h2>{title}</h2>
                    <S.textDescription dangerouslySetInnerHTML={{ __html: description }}></S.textDescription>
                    <p>Technologies: {technologies.split(', ').map((tech, index) => (
                        <span key={index}>
                            {index > 0 && ', '} {/* Adiciona vírgula entre tecnologias, exceto para a primeira */}
                            {tech.trim()}
                        </span>
                    ))}</p>
                    <S.DivIcons>
                        {repository !== '#' && (
                            <a href={repository} rel='noreferrer' target='_blank'>
                                <S.CardImg src={Github} alt='Repository' title='Repository' />
                            </a>
                        )}
                        {deploy !== '#' && (
                            <a href={deploy} rel='noreferrer' target='_blank'>
                                <S.CardImg src={Deploy} alt='Deploy' title='Deploy' />
                            </a>
                        )}
                        
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