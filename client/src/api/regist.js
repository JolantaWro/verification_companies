
export function getCompanyData(krs, mark) {
    return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=${mark}&format=json`)
        .then((response) => response)
}


export function getCompanyKRSData(value) {
    return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${value.numberKRS}?rejestr=${value.register}&format=json`)
        .then((response) => response)
}