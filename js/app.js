const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
let employees = [];

fetch(urlAPI) 
    .then(res => res.json())
    .then(res => res.results)
    .then(dispatchEmployees)
    .catch(error => console.log(error))

function dispatchEmployees(employeeData) {
    
}