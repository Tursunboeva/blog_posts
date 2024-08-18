import { useTranslation } from 'react-i18next';
import Card from '../../images/Card.png'
import Card2 from '../../images/card2.png'
import logo from '../../images/DerelArtworkLogo.svg'
import '../cards/Cards.css'


const Cards = () => {
    const [ t, i18n ] = useTranslation();  

    return (
      <section>
          <div className="container">
              
              <div className="cards_wrapper">
               <div className="card">
               <img src={Card} alt="" />
                <div className="text_cards">
                    <span>{t("d1")}</span>
                    <h4>{t("d2")}</h4>
                    <p>{t("d3")}</p>
                    <a href="/card">{t("d4")}</a>
                </div>
               </div>
               <div className="card">
               <img src={Card2} alt="" />
                <div className="text_cards">
                    <span>{t("d1")}</span>
                    <h4>{t("d2")}</h4>
                    <p>{t("d3")}</p>
                    <a href="/card">{t("d4")}</a>
                </div>
               </div>
               <div className="card">
               <img src={Card} alt="" />
                <div className="text_cards">
                    <span>{t("d1")}</span>
                    <h4>{t("d2")}</h4>
                    <p>{t("d3")}</p>
                    <a href="/card">{t("d4")}</a>
                </div>
               </div>
               <div className="card">
               <img src={Card2} alt="" />
                <div className="text_cards">
                    <span>{t("d1")}</span>
                    <h4>{t("d2")}</h4>
                    <p>{t("d3")}</p>
                    <a href="/card">{t("d4")}</a>
                </div>
               </div>
               <div className="card">
               <img src={Card} alt="" />
                <div className="text_cards">
                    <span>{t("d1")}</span>
                    <h4>{t("d2")}</h4>
                    <p>{t("d3")}</p>
                    <a href="/card">{t("d4")}</a>
                </div>
               </div>
               <div className="card">
               <img src={Card2} alt="" />
                <div className="text_cards">
                    <span>{t("d1")}</span>
                    <h4>{t("d2")}</h4>
                    <p>{t("d3")}</p>
                    <a href="/card">{t("d4")}</a>
                </div>
               </div>

               <div className="logo">
                <img src={logo} alt="" />
               </div>
              
              </div>
          </div>  
      </section>
    )
  }
  
  export default Cards