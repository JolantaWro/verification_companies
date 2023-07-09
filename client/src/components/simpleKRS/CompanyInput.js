import React, {useState} from 'react';


const CompanyInput = ({ onSubmit }) => {

    const [formKRS, setFormKRS] = useState({ numberKRS: "", register: "P"});
    const [message, setMessage] = useState("");

    const handleChangeInput = (event) => {
        setFormKRS({ ...formKRS, numberKRS: event.target.value});
    }

    const handleChangeSelect = (event) => {
        setFormKRS({ ...formKRS, register: event.target.value});
    }


    const handleSubmit = (event) => {

        event.preventDefault();
        if(formKRS.numberKRS.length <= 9) {
            setMessage("Wprowadzono mniej niż 10 znaków, sprawdź numer KRS")
            return
        } else if(formKRS.numberKRS.length > 10) {
            setMessage("Wprowadzono więcej niż 10 znaków, sprawdź numer KRS")
            return
        }
        setMessage("")
        console.log(formKRS)
        onSubmit(formKRS);
    };

    return (
        <>
            <div className="container-input">
                <form className="container-input-form" onSubmit={handleSubmit}>
                    <div className="numberKRS">
                        <label htmlFor="numberKRS" className="form-label">Number KRS </label>
                        <input type="number" placeholder="00000123.." className="form-control" id="numberKRS"
                            onChange={handleChangeInput}/>
                    </div>
                    <div className="registerKRS">
                        <label htmlFor="register" className="form-label">Registry type</label>
                        <select id="register" className="form-select" onChange={handleChangeSelect}>
                            <option value="P">Przedsiębiorcy</option>
                            <option value="S">Stowarzyszenia i inne</option>
                        </select>
                    </div>
                    <div className="searchKRS">
                        <button type="submit" className="btn btn-primary">Search</button>
                        {message ? <h3>{message}</h3> : null }
                    </div>
                </form>
            </div>
        </>
        
    );
};

export default CompanyInput;