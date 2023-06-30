import React, { useState } from 'react';
import * as S from './style';

const Sidebar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive);
      setIsSidebarActive(!isSidebarActive);
    };

    return(
        <>
            <S.ToggleContainer isActive={isActive} onClick={handleClick} />
            <S.Sidebar isActive={isSidebarActive} className='col-12 col-sm-5'>
                <ul className='p-0'>
                    <S.MenuLi>
                        <S.MenuA href='#home' id='home'>
                            Home
                        </S.MenuA>
                    </S.MenuLi>
                    <S.MenuLi>
                        <S.MenuA href='#about' id='about'>
                            about
                        </S.MenuA>
                    </S.MenuLi>
                    <S.MenuLi>
                        <S.MenuA href='#knowledges' id='knowledges'>
                            knowledges
                        </S.MenuA>
                    </S.MenuLi>
                    <S.MenuLi>
                        <S.MenuA href='#projects' id='projects'>
                            projects
                        </S.MenuA>
                    </S.MenuLi>
                    <S.MenuLi>
                        <S.MenuA href='#contact' id='contact'>
                            contact
                        </S.MenuA>
                    </S.MenuLi>
                </ul>
            </S.Sidebar>
        </>
    );

}

export default Sidebar;