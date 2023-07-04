import React, { useState, useEffect } from "react";

const DetailCompany = () => {

    
    return (
        <>
            <div className="detail-container">
                <div className="detail-page">
                    <div className="detail-header">
                        <h3>Detail about <span>"CompanyName............."</span></h3>
                    </div>
                    <div className="detail-info-company">
                        <table className="table mt-5">
                            <thead>
                                <tr>
                                    <th>Company NIP</th>
                                    <th>Company KRS</th>
                                    <th>Date verification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>nip</td>
                                    <td>krs</td>
                                    <td>date_verification</td>
                                 </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="detail-header">
                        <h3>Detail in KRS</h3>
                    </div>
                    <div className="detail-info-krs">
                        <ul>
                            <li>
                                date
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default DetailCompany;