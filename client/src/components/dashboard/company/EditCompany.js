import React, { useState } from "react";

const EditCompany = ({ company, setCompanyChange }) => {
    
    const [name, setName] = useState(company.company_name);
    const [nip, setNip] = useState(company.company_nip);
    const [krs, setKrs] = useState(company.company_krs);
    const [data, setData] = useState(company.date_verification);
    const [mark, setMark] = useState(company.type_company);

  const editText = async id => {
    try {
      const body = { name, nip, krs, data, mark };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      await fetch(`http://localhost:5000/dashboard/company/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      setCompanyChange(true);

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };




  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${company.company_id}`}
      >Edit
      </button>

      <div
        className="modal" tabindex="-1"
        id={`id${company.company_id}`}
        onClick={() => setName(company.company_name)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Company</h4>
              <button type="button"className="close" data-dismiss="modal" onClick={() => setName(company.company_name)}> &times;</button>
            </div>

            <div className="modal-body">
              <div className="edit-company">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} id="name"/>
              </div>
              <div className="edit-company">
                <label htmlFor="numberNIP" className="form-label">Number NIP:</label>
                <input type="number" className="form-control" value={nip} onChange={e => setNip(e.target.value)} id="numberNIP"/>
              </div>
              <div className="edit-company">
                <label htmlFor="numberKRS" className="form-label">Number KRS:</label>
                <input type="number" className="form-control" value={krs} onChange={e => setKrs(e.target.value)} id="numberKRS"/>
              </div>
              <div className="edit-company">
                <label htmlFor="data-ver" className="form-label">Date verification:</label>
                <input type="date" className="form-control" value={data} onChange={e => setData(e.target.value)} id="data-ver"/>
              </div>
              <div className="edit-company">
                <label htmlFor="mark" className="form-label">Type of register:</label>
                <input type="text" className="form-control" value={mark} onChange={e => setMark(e.target.value)} id="mark"/>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={() => editText(company.company_id)}>Edit</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setName(company.company_name)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCompany;