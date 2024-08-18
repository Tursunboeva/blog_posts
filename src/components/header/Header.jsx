import React from 'react'
import "../header/Header.css"
import { useTranslation } from 'react-i18next';

import li from '../../images/linkedin.svg'
import medium from '../../images/medium.svg'
import tw from '../../images/tiwitter.svg'

import Group from '../../images/Group.svg'

const Header = () => {
  const [ t, i18n ] = useTranslation();  
  
  return (
    <header>
      
       <div className="container">
        <div className="header_wrapper">
          <div className="text_header">
            <div className="title_header">
              <h2>{t("b1")}</h2>
              <h3>{t("b2")} </h3>
              <p>{t("b3")}</p>
            </div>
            <div className="btn_header">
              <button className='btn1'><img src={tw} alt="" /></button>
              <button className='btn2'><img src={li} alt="" /></button>
              <button className='btn3'><img src={medium} alt="" /></button>
            </div>
          </div>
          <img src={Group} alt="" />
        </div>
       </div>
    </header>
  )
}

export default Header