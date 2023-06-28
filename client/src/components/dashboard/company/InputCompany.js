import React, { useState } from "react";

const InputCompany = ({ setCompanyChange }) => {
  const [name, setName] = useState("");
  const [nip, setNip] = useState(""); //change to int
  const [krs, setKrs] = useState(""); //change to int

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = { name, nip, krs };
      console.log(body)
      const response = await fetch("http://localhost:5000/dashboard/company", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      setCompanyChange(true);
      setName("");


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
            nChange={e => setName(e.target.value)}
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
          <button className="btn btn-success ">Add</button>
        </form>
      </div>
    </>
  );
};

export default InputCompany;