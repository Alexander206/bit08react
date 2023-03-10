/* Dependencias */
import React from 'react';

/* Estilos */

import '../../styles/containers/Aside_Categories.scss';

/* Molecules */
import Category from '../_molecules/Category';

/* Variables */
import comida from '../../assets/img/Comida.svg';
import lugares from '../../assets/img/Lugares.svg';
import Objetos from '../../assets/img/Objetos.svg';

const Aside_categories = ({ home, setHome }) => {
  return (
    <aside className='Aside__Categories'>
      <Category img={comida} section='#list-item-1' text='Comida' home={home} setHome={setHome} />
      <Category img={lugares} section='#list-item-2' text='Lugares' home={home} setHome={setHome} />
      <Category img={Objetos} section='#list-item-3' text='Objetos' home={home} setHome={setHome} />
    </aside>
  );
};

export default Aside_categories;
