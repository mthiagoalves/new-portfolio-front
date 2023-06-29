import * as S from './style';
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = () => {
    return (
        <S.HomeNavBar className="navbar navbar-expand-lg">
                <S.HomeNavbarTitle className="col-7">
                    Thiago Alves
                </S.HomeNavbarTitle>
                <S.ContainerNavbar className=" col-5 collapse navbar-collapse justify-content-center">
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