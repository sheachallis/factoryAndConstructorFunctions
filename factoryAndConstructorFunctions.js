
// REGULAR FUNCTION

// let address = {
//     street: '17 Brook Road',
//     town: 'Montpelier',
//     city: 'Bristol',
//     postCode: 'BS6 5LR'
// }

// function showAddress() {
//     for (let key in address)
//       console.log(key, address[key]);
// }







// FACTORY FUNCTION

// let address = createAddressFactory('17 Brook Road', 'Montpelier', 'Bristol', 'BS6 5LR');

// console.log(address);

// function createAddressFactory(street, town, city, postCode) {
//     return {
//         street,
//         town,
//         city,
//         postCode
//         };
//     }





// CONSTRUCTOR FUNCTION

let address = new Address('17 Brook Road', 'Montpelier', 'Bristol', 'BS6 5LR');

console.log(address);

function Address(street, town, city, postCode) {
    this.street = street;
    this.town = town;
    this.city = city;
    this.postCode = postCode;
}
