let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
   let date = document.getElementById("date").value;
   let condition = document.getElementById("check").value;




  let newArray = [name,email,password.date,condition];
  newArray.forEach((item)=>{
      var tr = document.createElement("tr");
  var text = document.createTextNode(item);
  tr.appendChild(text);
  table.appendChild(tr);
  })
  form.reset(); 
}
