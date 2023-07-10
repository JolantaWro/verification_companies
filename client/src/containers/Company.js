import React from "react";
import { Link } from "react-router-dom";
import krs from '../assets/img/krs_logo.png'
import rejestr from '../assets/img/rejestrTo_logo.svg'
import gus from '../assets/img/gus_logo.jpg'
import ceidg from '../assets/img/ceidg_logo.png'
import big from '../assets/img/big_logo.png'
import companyInput from "../assets/img/company_input_logo.jpg"
import CompanyInput from "../components/simpleKRS/CompanyInput";
import Company from "../components/simpleKRS/Company";
import {connect} from "react-redux";
import {fetchAsyncData} from "../redux/actions";
import { compose } from "redux";



const CompanyContainer = ({companyAsync, company, loading, error  }) => {
    
    const handleSubmit = (value) => {
        companyAsync(value)
    }

    return (
        <>
            <div className="companyKRSContainer">
                <div className="companyKRSAbout">
                    <a href="https://ekrs.ms.gov.pl/web/wyszukiwarka-krs/strona-glowna/index.html">
                        <img src={krs} alt="LogoKRS" width="200" height="50" className="d-inline-block align-text-top"/>
                    </a>
                    {/* <h5>Krajowy Rejest Sądowy</h5> */}
                    <a href="https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/search.aspx">
                        <img src={ceidg} alt="LogoCEIDG" width="100" height="50"
                             className="d-inline-block align-text-top"/>
                    </a>
                    <a href="https://rejestr.io/">
                        <img src={rejestr} alt="LogoRejestr" width="100" height="50"
                             className="d-inline-block align-text-top"/>
                    </a>
                    <a href="https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx/">
                        <img src={gus} alt="LogoGus" width="170" height="50"
                             className="d-inline-block align-text-top"/>
                    </a>
                    <a href="https://www.big.pl/baza-wiedzy/rejestr-dluznikow">
                        <img src={big} alt="LogoBIG" width="170" height="50"
                             className="d-inline-block align-text-top"/>
                    </a>
                    <Link to="/">Powrót</Link>
                </div>

                <div className="companyKRSInput">
                    <div className="companyKRSInputHeader">
                        
                        {/* <img src={companyInput} alt="CompanyInput"/> */}
                    </div>
                    <div>
                        <h3>Szukaj <span>w KRS</span></h3>
                        <CompanyInput onSubmit={handleSubmit} />
                    </div>
                </div>
                
                <div className="companyKRSLanding">
                    {/* do zmiany */}
                    {loading && "Pobieram..."}
                    {error && <h3 className="company">{error}</h3>}
                </div>
                <div className="companyKRSResult">
                    {company ? <Company company={company}/> : null}
                </div>
            </div>
        </>
    );
};


const mapStateToProps = state => ({
    loading: state.company.loading,
    error: state.company.error,
    company: state.company.company
    
});

const mapDispatchToProps = dispatch => ({
    companyAsync: (value) => dispatch(fetchAsyncData(value))
    
});



export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);