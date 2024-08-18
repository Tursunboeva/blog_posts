import React from 'react'
import CardImage from '../../images/Card.png'
import { useTranslation } from 'react-i18next';
import '../../routes/single/Card.css' 

const Card = () => {
  const [ t, i18n ] = useTranslation();  
  return (
    <>
        <div className="container">
          <div className="card">
            <img src={CardImage} alt="" />
            <div className="text_card">
              <div className="title">
              <h1>{t("e1")}</h1>
              <p>{t("e2")}</p>
              <p>{t("e3")}</p>
              <p>{t("e4")}</p>
              </div>
              <div className="title">
              <h2>{t("e1")}</h2>
              <p>{t("e2")}</p>
              <p>{t("e3")}</p>
              <p>{t("e4")}</p>
              </div>
              <div className="title">
              <h3>{t("e1")}</h3>
              <p>{t("e2")}</p>
              <p>{t("e3")}</p>
              <p>{t("e4")}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card