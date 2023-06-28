// export function getCompanyData(value) {
//     return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${value.numberKRS}?rejestr=${value.register}&format=json`)
//         .then((response) => response)
// }

export function getCompanyData(krs, mark) {
    return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=${mark}&format=json`)
        .then((response) => response)
}

// export function getCompanyData (){
//     return fetch(`https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/0000018602?rejestr=P&format=json`)
//         .then((response) => response)
// }