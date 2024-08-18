import React from 'react'
import { useTranslation } from 'react-i18next';
import '../links/Links.css'

const Links = () => {
    
    const [ t, i18n ] = useTranslation();  
  return (
    <section>
        <div className="container">
            <div className="links">
                <a>{t("c1")}</a>
                <b>{t ("c2")}</b>
                <b>{t ("c3")}</b>
                <b>{t ("c4")}</b>
                <b>{t ("c5")}</b>
                <b>{t ("c6")}</b>
                <b>{t ("c7")}</b>



            </div>
        </div>
    </section>
  )
}

export default Links