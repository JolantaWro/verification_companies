const CompanyContainer = ({ }) => {
    const handleSubmit = (value) => {
        companyAsync(value)
    }

    return (
        <>
            <CompanyInput onSubmit={handleSubmit} />
            
            {/* {company ? <Company company={company}/> : null} */}
        </>
    );
};


const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    
});



export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);