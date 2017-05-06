function login(username){
    if (username == "dev"){
        alert("This user is disabled")
        username = null
    }
    else if (username == "sebastian"){
        password = prompt("Please enter your password")
        if (password == "pippin"){
            localStorage.username = "Seb"
            localStorage.adminPriv = true
            console.log(localStorage.adminPriv)
            window.location.href = "https://betasite.gunner.online/homeBetaRedirect.html"
        }
        else {
            username = null
        }
    }
    else{
        localStorage.username = username
    }
}

function check(form)//function to check userid and password
{
    //Checks whether the username/password are matching
    if(form.userid.value == "sebastian" && sha256(form.pswrd.value) == sebastianHash256)
    {
        localStorage.username = "Sebastian"
        localStorage.adminPriv = true
        localStorage.betaPriv = "true"
        
        console.log("User " + localStorage.username + " logged in")
        window.location.href = "https://betasite.gunner.online/index.html"
    }
    else if(form.userid.value == "dev" && sha256(sha256(form.pswrd.value)) == devHash256_2)
    {
        localStorage.username = "Gunner Developer"
        localStorage.adminPriv = true
        localStorage.betaPriv = "true"
        
        console.log("User " + localStorage.username + " logged in")
        window.location.href = "https://betasite.gunner.online/index.html"
    }
    else
    {
        error(003)
        window.location.href = "https://www.gunner.online/index.html"
    }
    localStorage.user = 1;
    
}

function logout(){
    delete localStorage.username
    delete localStorage.adminPriv
    localStorage.betaPriv = "false"
    console.log("Logged out")
    document.getElementById("loginStatement").innerHTML = "You have been logged out";
    window.location.href = "https://www.gunner.online/index.html"
}
