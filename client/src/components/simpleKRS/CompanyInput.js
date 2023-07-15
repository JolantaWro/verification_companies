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
        onSubmit(formKRS);
    };

    return (
        <>
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="number" className='form-field' placeholder="Wprowadź nr KRS" onChange={handleChangeInput}/>
                    <div>
                        <label htmlFor="register" className='form-label'>Typ Rejestru</label>
                        <select className='form-field form-field--select' onChange={handleChangeSelect}>
                            <option value="P">Przedsiębiorcy</option>
                            <option value="S">Stowarzyszenia i inne</option>
                        </select>
                    </div>
                    <div className='form-nav'>
                        <button type="submit" className="btn btn-primary">Szukaj</button>
                        {/* {message ? <h3>{message}</h3> : null } */}
                        {/* zabezpieczyc informowanie użytkownika */}
                    </div>
                </form>
            </div>
        </>
        
    );
};

export default CompanyInput;