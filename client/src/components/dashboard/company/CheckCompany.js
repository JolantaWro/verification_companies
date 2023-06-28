import React, { useState } from "react";
import { getCompanyData } from "../../../api/regist"


const CheckCompany = ({ company }) => {
    const [krs, setKrs] = useState(company.company_krs);
    const [mark, setMark] = useState(company.type_company);



    // async function companyVer (krs, mark){
    //     try {
    //         const data = await getCompanyData(krs, mark)
    //         const companyR = await data.json()

    //         console.log(companyR)
            
            
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }

    const companyVer = (e) => {
        console.log(e)
    }


    // const getCompany = async company => {
    //     console.log(company)
    //     try {
    //         console.log(company)
    //         const data = await fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${company.company_krs}?rejestr=${company.type_company}&format=json`)
            

    //         const parseData = await data.json();
    //         console.log(parseData)


    //     } catch (err) {
    //         console.error(err.message);
    //     }

    // }


    // function getCompanyData(value) {
    //     return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${value.numberKRS}?rejestr=${value.register}&format=json`)
    //         .then((response) => response)
    // }


    

    return (
        <>
            {/* <h2>Check company</h2> */}
            <button type="button" class="btn btn-secondary" value={company.company_krs} onClick={companyVer}>Check</button>
            {/* <button type="button" class="btn btn-secondary" data-target={`#id${company.company_id}`} onClick={companyVer}>Check</button> */}
        </>
    )
}

export default CheckCompany;