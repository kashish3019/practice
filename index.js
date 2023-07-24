document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e)
    
    let img = document.getElementById("img").value
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value;
    let gender=document.querySelector('input[name="gender"]').value
    let birthdate = document.getElementById("birthdate").value;
    
});