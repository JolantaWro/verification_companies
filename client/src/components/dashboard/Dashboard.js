import React, { useEffect, useState } from "react";
import InputCompany from "./company/InputCompany";
import ListCompany from "./company/ListCompany";


const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allCompanys, setAllCompanys] = useState([]);
  const [companyChange, setCompanyChange] = useState(false);


  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();
      console.log(parseData)

      setAllCompanys(parseData);


      setName(parseData[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    setCompanyChange(false);
  }, [companyChange]);

  return (
    <div>
    <div className="d-flex mt-5 justify-content-around">
      <h2>{name} 's List</h2>
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
    </div>

    <InputCompany setCompanyChange={setCompanyChange} />
    <ListCompany allCompanys={allCompanys} setCompanyChange={setCompanyChange} />
  </div>
  );
};

export default Dashboard;