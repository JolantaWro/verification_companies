import React, { useState } from "react";
import { getCompanyData } from "../../../api/regist"
import DetailCompany from "./DetailCompany";


const CheckCompany = ({ company }) => {
    const [krs, setKrs] = useState(company.company_krs);
    const [mark, setMark] = useState(company.type_company);
    const [element, setElement] = useState({})
    const [elementCompany, setElementCompany] = useState("")




    // async function companyVer (krs, mark){
    //     try {
    //         const data = await getCompanyData(krs, mark)
    //         const companyR = await data.json()

    //         console.log(companyR)
            
            
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }




    const getCompany = async (krs, mark) => {
        try {
            const data = await fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=${mark}&format=json`)
            

            const parseData = await data.json();
            console.log(parseData.odpis.naglowekA.dataOstatniegoWpisu)
            setElement(parseData)
            console.log(element)
            setElementCompany(parseData)

            // name: company.odpis.dane.dzial1.danePodmiotu.nazwa,
            // date: company.odpis.naglowekA.dataOstatniegoWpisu,
            // capital: company.odpis.dane.dzial1.kapital.wysokoscKapitaluZakladowego.wartosc,
            // codePKD: company.odpis.dane.dzial3.przedmiotDzialalnosci.przedmiotPrzewazajacejDzialalnosci,
            // results: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego


        } catch (err) {
            console.error(err.message);
        }

    }

    const companyVer = () => {
        setMark(company.type_company)
        setKrs(company.company_krs)
        console.log(mark)
        console.log(krs)
        getCompany(krs, mark)
    }


    // function getCompanyData(value) {
    //     return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${value.numberKRS}?rejestr=${value.register}&format=json`)
    //         .then((response) => response)
    // }


    

    return (
        <>
            {/* <h2>Check company</h2> */}
            {/* <button type="button" class="btn btn-secondary" value={company.company_krs} onClick={companyVer}>Check</button> */}
            <button type="button" class="btn btn-secondary" value={company} onClick={companyVer}>Check</button>
        </>
    )
}

export default CheckCompany;