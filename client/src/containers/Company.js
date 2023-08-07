import React from "react";

import CompanyInput from "../components/simpleKRS/CompanyInput";
import Company from "../components/simpleKRS/Company";
import {connect} from "react-redux";
import {fetchAsyncData} from "../redux/actions";
import "bootstrap-icons/font/bootstrap-icons.css";
import UsefulLinks from "../components/UsefulLinks";



const CompanyContainer = ({companyAsync, company, loading, error  }) => {
    
    const handleSubmit = (value) => {
        companyAsync(value)
    }

    return (
        <>            
            <UsefulLinks />

            <div className="container__content">
                <div className="container--central ">
                    <p className="heading heading--x-large">Szukaj <span className="heading__colorful">w KRS</span></p>
                    <CompanyInput onSubmit={handleSubmit} />
                    {loading && "Pobieram dane z KRS..."}
                    {error && <p className="text__title text--color--red">{error}</p>}

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