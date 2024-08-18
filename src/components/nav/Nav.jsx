import React from 'react';
import { useTranslation } from 'react-i18next';
import  '../nav/Nav.css';
import logo from '../../images/Logo.svg';
import HireMe from '../../images/HireMe.svg';

const Nav = () => {
    const [ t, i18n ] = useTranslation();  
  
    const handleChangeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
    };

    return (
        <div>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="nav_logo">
                        <img src={logo} alt="Logo" />
                        <img src={HireMe} alt="Hire Me" />
                    </div>
                    <div className="nav_links">
                        <select defaultValue={i18n.language} onChange={handleChangeLanguage}>
                            <option value="uz">Uz</option>
                            <option value="ru">Ru</option>
                            <option value="en">En</option>
                        </select>
                        <ul>
                            <li>{t("a1")}</li>
                            <li className='fiolet'>{t("a2")}</li>
                            <li>{t("a3")}</li>
                            <li>{t("a4")}</li>
                            <li>{t("a5")}</li>
                            <li>{t("a6")}</li>
                            <li>{t("a7")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
