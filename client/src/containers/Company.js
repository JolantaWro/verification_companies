import React from "react";
import { Link } from "react-router-dom"

import companyInput from "../assets/img/company_input_logo.jpg"
import CompanyInput from "../components/simpleKRS/CompanyInput";
import Company from "../components/simpleKRS/Company";
import {connect} from "react-redux";
import {fetchAsyncData} from "../redux/actions";
import { compose } from "redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import UsefulLinks from "../components/UsefulLinks";



const CompanyContainer = ({companyAsync, company, loading, error  }) => {
    
    const handleSubmit = (value) => {
        companyAsync(value)
    }

    return (
        <>
            <div className="">
                
                <UsefulLinks />
                {/* <Link to="/" className="nav__link"><i class="bi bi-arrow-left-circle-fill"></i>Powrót</Link> */}

                <div className="">
                    <div className="content">
                        <h3 className="heading heading--x-large">Szukaj <span className="heading__colorful">w KRS</span></h3>
                        <CompanyInput onSubmit={handleSubmit} />
                    </div>




                    <div className="">
                        {/* do zmiany */}
                        {loading && "Pobieram..."}
                        {error && <h3 className="">{error}</h3>}
                    </div>
                    <div className="">
                        {company ? <Company company={company}/> : null}
                    </div>
                    
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