import * as S from './style';
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = () => {
    return (
        <S.HomeNavBar className="navbar navbar-expand-lg">
                <S.HomeNavbarTitle>
                    My New Portfolio
                </S.HomeNavbarTitle>
                <S.ContainerNavbar className="collapse navbar-collapse justify-content-end">
                    <S.HomeUlNavbar className="navbar-nav">
                        <S.HomeLiNavbar className="nav-item">
                            <S.HomeTagANavbar href="#about">About me</S.HomeTagANavbar>
                        </S.HomeLiNavbar>
                        <S.HomeLiNavbar className="nav-item">
                            <S.HomeTagANavbar href="#skills">Knowledges</S.HomeTagANavbar>
                        </S.HomeLiNavbar>
                        <S.HomeLiNavbar className="nav-item">
                            <S.HomeTagANavbar href="#projects">Projects</S.HomeTagANavbar>
                        </S.HomeLiNavbar>
                        <S.HomeLiNavbar className="nav-item">
                            <S.HomeTagANavbar href="#contact">Contact</S.HomeTagANavbar>
                        </S.HomeLiNavbar>
                    </S.HomeUlNavbar>
                </S.ContainerNavbar>
        </S.HomeNavBar>
    );
}

export default Navbar;