import * as S from './style';

interface ModalProjectProps {
    title: string,
    description: string,
    technologies: string
};

const ModalProject: React.FC<ModalProjectProps> = ({ title, description, technologies }) => {
    return (
        <div>
            <S.Modal>
                <S.Content>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{technologies}</p>
                </S.Content>
            </S.Modal>
        </div>
    );
}

export default ModalProject;