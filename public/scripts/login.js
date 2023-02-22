const loginbtn = document.getElementById('login-btn');
const userName = document.getElementById('user-name');
const form = document.getElementById('form-login');
const toastMessage = document.getElementById('toast-text');
const toast = document.getElementById("toast");
const userAuth = document.getElementById('userPassword');

const toastError = () => {
    toast.className = "show";
    toastMessage.textContent = "Dados Inválidos"
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

const userAccess = () =>{
    if (userName.value.substring(0, 3) == "sec") {
        form.setAttribute("action", "home_sec.jsp")
    } else if (userName.value.substring(0, 3) == "med"){
        form.setAttribute("action", "home.ejs");
    } else{ toastError()}
    //const user = userName.value.substring(0, 3) == "sec" ? form.setAttribute("action", "home_sec.jsp") : form.setAttribute("action", "home.ejs");
}

loginbtn.onclick = (e) => {
    let userNamePattern = /^(?=[a-z]*\d)[^\s]{6}$/;
    let userNamePatternValue = userNamePattern.test(userName.value);
    let userAuthPattern = /^(?=[a-z]*[A-Z]*\D*\d)[^\s]{8,}$/;
    let userAuthPatternValue = userAuthPattern.test(userAuth.value);
    const handleLoginError = userNamePatternValue != true  || userAuthPatternValue != true ? toastError() : userAccess();

}