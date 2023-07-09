import React from "react";
import CompanyInput from "../components/simpleKRS/CompanyInput";
import Company from "../components/simpleKRS/Company";
import {connect} from "react-redux";
import {fetchAsyncData} from "../redux/actions";



const CompanyContainer = ({companyAsync, company, loading, error  }) => {
    
    const handleSubmit = (value) => {
        companyAsync(value)
    }

    return (
        <>
        <div className="companyKrs">
            <CompanyInput onSubmit={handleSubmit} />
            {loading && "Pobieram..."}
            {error && <h3 className="company">{error}</h3>}
            {company ? <Company company={company}/> : null}
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