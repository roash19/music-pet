import React from 'react';
import { NAV_ITEMS } from '../../source/constants';

const AsideMenu = () => {
  const renderItems = () => {
    return NAV_ITEMS.map(item => (
      <li className='nav__item'>
        <a className='nav__link' href={item.link}>{item.text}</a>
      </li>
    ))
  };

  return (
    <div className='asideMenu'>
      <div className='logo'/>
      <ul className='nav'>
        <li className='nav__item nav__item--title'>
          Music
        </li>
        { renderItems() }
      </ul>
    </div>
  );
};

export default AsideMenu;
