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
            <S.Sidebar isActive={isSidebarActive}></S.Sidebar>
        </>
    );

}

export default Sidebar;