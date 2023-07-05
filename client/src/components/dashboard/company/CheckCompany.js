import React, { useEffect, useState } from "react";
import { getCompanyData } from "../../../api/regist"
import DetailCompany from "./DetailCompany";
import { Link, NavLink, redirect } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'


const CheckCompany = ({ company }) => {
    const [companyKRS, setCompanyKRS] = useState("");
    const [companyChangee, setChangeeSet] = useState(false);
    // const [krs, setKrs] = useState(company.company_krs);
    // const [mark, setMark] = useState(company.type_company);
    // const [element, setElement] = useState("")


    async function companyVerificationKRS (krs, mark){
        try {
            const data = await getCompanyData(krs, mark)
            const companyInfoKRS = await data.json()

            setCompanyKRS(companyInfoKRS)
            console.log(companyInfoKRS)
            
            
            
            
            
        } catch (err) {
            console.error(err.message);
        }
    }


      const getCompanyDetail = async id => {

        try {
            const res = await fetch(`http://localhost:5000/dashboard/company/detail/${id}`, {
                method: "GET",
                headers: { token: localStorage.token }
            });
            const parseData = await res.json();

            companyVerificationKRS(parseData[0].company_krs, parseData[0].type_company)

        
        } catch (err) {
          console.error(err.message);
        }
      };

      useEffect(() => {
        setChangeeSet(true)
      }, [companyChangee]);

    




    // const getCompany = async (krs, mark) => {
    //     try {
    //         const data = await fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=${mark}&format=json`)
            

    //         const parseData = await data.json();
    //         console.log(parseData.odpis.naglowekA.dataOstatniegoWpisu)
    //         setElement(parseData)
    //         console.log(element)
    //         // setElementCompany(parseData)

    //         // name: company.odpis.dane.dzial1.danePodmiotu.nazwa,
    //         // date: company.odpis.naglowekA.dataOstatniegoWpisu,
    //         // capital: company.odpis.dane.dzial1.kapital.wysokoscKapitaluZakladowego.wartosc,
    //         // codePKD: company.odpis.dane.dzial3.przedmiotDzialalnosci.przedmiotPrzewazajacejDzialalnosci,
    //         // results: company.odpis.dane.dzial3.wzmiankiOZlozonychDokumentach.wzmiankaOZlozeniuRocznegoSprawozdaniaFinansowego


    //     } catch (err) {
    //         console.error(err.message);
    //     }

    // }

    // const companyVer = () => {
    //     setMark(company.type_company)
    //     setKrs(company.company_krs)
    //     console.log(mark)
    //     console.log(krs)
    //     getCompany(krs, mark)
    // }


    




    return (
            
        <>
{/* 
            <Link to="/details" >
                <button type="button"  class="btn btn-secondary" onClick={()=>getCompanyDetail(company.company_id)}>
                Check
            </button>
            </Link> */}
            <button type="button"  class="btn btn-secondary" onClick={()=>getCompanyDetail(company.company_id)}>
                Check
            </button>

            
        

        </>
    )
}

export default CheckCompany;