import React, { useState, useEffect } from "react";
import EditCompany from "./EditCompany";

const ListCompany = ({  allCompanys, setCompanyChange }) => {
  const [company, setCompany] = useState([]); //empty array



  async function deleteCompany(id) {
    try {
      await fetch(`http://localhost:5000/dashboard/company/${id}`, {
        method: "DELETE",
        headers: { token: localStorage.token }
      });


      setCompany(company.filter(element => element.company_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    setCompany(allCompanys);
  }, [allCompanys]);

  return (
    <>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company NIP</th>
            <th>Company KRS</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {company.length !== 0 &&
            company[0].company_id !== null && company.map(element => (
              <tr key={element.company_id}>
                <td>{element.company_name}</td>
                <td>{element.company_nip}</td>
                <td>{element.company_krs}</td>
                <td>
                  <EditCompany company={element} setCompanyChange={setCompanyChange} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCompany(element.company_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListCompany;