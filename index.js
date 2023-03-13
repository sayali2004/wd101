const registrationForm = document.getElementById("registrationForm");

const dataTable = document

.getElementById("dataTable") .getElementsByTagName("tbody")[0];

registrationForm.addEventListener("submit", function (e) e.preventDefault();

const name = document.getElementById("name").value; const email = document.getElementById("email").value;

const dob= document.getElementById("dob").value; const password=document.getElementById("password").value;

const terms = document.getElementById("terms").checked;

const today = new Date();

const dobDate = new Date(dob);

const age = today.getFullYear() dobDate.getFullYear();

// Check if age is between 18 and 55 if (age<18 || age > 55) { alert("Age should be between 18 and 55 years."); return; }

// Save form data to localstorage

localstorage.setItem("name", name); localstorage.setItem("email", email);

localstorage.setItem("dob", dob);

localstorage.setItem("password", password);

localstorage.setItem("terms", terms);

// Add form data to table

const row = dataTable.insertRow(); const nameCell = row. insertCell();

const emailcell = row. insertCell();

const dobCell = row. insertCell();
const passwordcell=row.insertCell();
const termscell=row.insertCell();
nameCell.innerHTML = name;

emailcell.innerHTML email;

dobCell.innerHTML dob; passwordcell.innerHTML=password;

termscell.innerHTML=terms;

// Reset form fields registrationForm.reset();

alert("Registration successful.");

// Retrieve form data from localstorage const savedName= localstorage.getItem("name");

const savedEmail = localstorage.getItem("email");

const savedDob= localstorage.getItem("dob"); const savedPassword = localstorage.getItem("password");

const savedTerms = localstorage.getItem("terms");

// Display saved form data in table

if (savedName && savedEmail && savedDob && savedPassword && savedTerms) {

const row = dataTable.insertRow(); const nameCell = row. insertCell();

const emailcell = row. insertCell();

const dobCell = row. insertCell(); 
const passwordcell=row.insertCell();


// Retrieve form data from localstorage

const savedName = localstorage.getItem("name");

const savedEmail = localstorage.getItem("email");

const savedDob= localstorage.getItem("dob");

const savedPassword localstorage.getItem("password");

const savedTerms = localstorage.getItem("terms");

// Display saved form data in table

if (savedName && savedEmail && savedDob && savedPassword && savedTerms) {

const row=dataTable.insertRow();

const nameCell=row. insertCell();

const emailcell=row. insertCell();

const dobCell=row. insertCell();

const passwordcell=row. insertCell();

const termscell=row.insertcell();

nameCell.innerHTML=savedName;

emailcell.innerHTML=savedEmail;

dobCell.innerHTML savedDob;

passwordcell.innerHTML=savedPassword; 
termscell.innerHTML=savedTerms;
}
