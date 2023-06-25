import React, { useState } from "react";

const EditCompany = ({ company, setCompanyChange }) => {
    
    const [name, setName] = useState(company.company_name);
    const [nip, setNip] = useState(company.company_nip);
    const [krs, setKrs] = useState(company.company_krs);

  const editText = async id => {
    try {
      const body = { name, nip, krs };

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
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${company.company_id}`}
        onClick={() => setName(company.company_name)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Company</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(company.company_name)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(company.company_id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setName(company.company_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCompany;