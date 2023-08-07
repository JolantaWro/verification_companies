import React from "react";
import krs from '../assets/img/krs_logo.png'
import rejestr from '../assets/img/rejestrTo_logo.svg'
import gus from '../assets/img/gus_logo.jpg'
import ceidg from '../assets/img/ceidg_logo.png'
import big from '../assets/img/big_logo.png'


const UsefulLinks = () => {

    return(
        <>
            <div className="social">
                <a href="https://ekrs.ms.gov.pl/web/wyszukiwarka-krs/strona-glowna/index.html" className="social__icon">
                    <img src={krs} alt="LogoKRS" className="social__img social__img--big"/>
                </a>

                <a href="https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/search.aspx" className="social__icon">
                    <img src={ceidg} alt="LogoCEIDG" className="social__img social__img--small"/>
                </a>
                <a href="https://rejestr.io/" className="social__icon">
                    <img src={rejestr} alt="LogoRejestr" className="social__img social__img--small"/>
                </a>
                <a href="https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx/" className="social__icon">
                    <img src={gus} alt="LogoGus" className="social__img"/>
                    
                </a>
                <a href="https://www.big.pl/baza-wiedzy/rejestr-dluznikow" className="social__icon">
                    <img src={big} alt="LogoBIG" className="social__img"/>
                </a>
            </div>
        </>
    )
}

export default UsefulLinks;