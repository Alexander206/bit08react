/* Dependencias */
import React, { useState } from 'react';

/* Estilos */
import '../../styles/containers/Header.scss';

/* Molecules */
import HEADER_LOGO from '../_molecules/Header_Logo.jsx';
import HEADER_NAV from '../_molecules/Header_Nav.jsx';

/* Variables */
import logo from '../../assets/icons/Logo.svg';

const Header = () => {
  const [stateNav, setStateNav] = useState(false);

  const handlerNav = () => {
    console.log(stateNav);
    setStateNav(!stateNav);
  };

  return (
    <header className='Header'>
      <HEADER_LOGO logo={logo} />

      <HEADER_NAV stateNav={stateNav} setStateNav={setStateNav} />

      <button className='btn-header' onClick={handlerNav}>
        <ion-icon name='menu'></ion-icon>
      </button>
    </header>
  );
};

export default Header;