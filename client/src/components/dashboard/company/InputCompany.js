import React, { useState } from "react";

const InputCompany = ({ setCompanyChange }) => {
  const [name, setName] = useState("");
  const [nip, setNip] = useState(""); 
  const [krs, setKrs] = useState(""); 
  const [data, setData] = useState(""); 
  const [mark, setMark] = useState("P"); 



  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { name, nip, krs, data, mark };
      console.log(body)
      const response = await fetch("http://localhost:5000/dashboard/company", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      setCompanyChange(true);
      setName("");
      setNip("");
      setKrs("");
      setData("");
    


      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className="text-center my-5">Add Company</h1>
      <div className="add-company">
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="Company name"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Company NIP"
            className="form-control"
            value={nip}
            onChange={e => setNip(e.target.value)}
          />
          <input
            type="number"
            placeholder="Company KRS"
            className="form-control"
            value={krs}
            onChange={e => setKrs(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date publication data"
            className="form-control"
            value={data}
            onChange={e => setData(e.target.value)}
          />
          <input
            type="text"
            placeholder="Type of register"
            className="form-control"
            value={mark}
            onChange={e => setMark(e.target.value)}
          />
          <button className="btn btn-success ">Add</button>
        </form>
      </div>
    </>
  );
};

export default InputCompany;