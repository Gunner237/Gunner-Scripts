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
            window.location.href = "beta/indexBeta.html"
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
    }
    else if(form.userid.value == "xavier" && sha256(form.pswrd.value) == xavierHash256)
    {
        localStorage.username = "Xavier"
        localStorage.adminPriv = true
        localStorage.betaPriv = "false"
        
        console.log("User " + localStorage.username + " logged in")
    }
    else if(form.userid.value == "iona" && md5(md5(form.pswrd.value)) == xavierHash2)
    {
        localStorage.username = "Iona"
        localStorage.adminPriv = false
        localStorage.betaPriv = "false"
        
        console.log("User " + localStorage.username + " logged in")
    }
    else if(form.userid.value == "francesca" && md5(md5(form.pswrd.value)) == francescaHash2)
    {
        localStorage.username = "Francesca"
        localStorage.adminPriv = false
        localStorage.betaPriv = "false"
        
        console.log("User " + localStorage.username + " logged in")
    }
    else if(form.userid.value == "laurence" && md5(md5(form.pswrd.value)) == xavierHash2)
    {
        localStorage.username = "Laurence"
        localStorage.adminPriv = false
        localStorage.betaPriv = "false"
        
        console.log("User " + localStorage.username + " logged in")
    }
    else if(form.userid.value == "dev" && sha256(sha256(form.pswrd.value)) == devHash256_2)
    {
        localStorage.username = "Gunner Developer"
        localStorage.adminPriv = true
        localStorage.betaPriv = "true"
        
        console.log("User " + localStorage.username + " logged in")
    }
    else
    {
        error(003)
    }
    localStorage.user = 1;
    window.location.href = "index.html"
}

function logout(){
    delete localStorage.username
    delete localStorage.adminPriv
    localStorage.betaPriv = "false"
    console.log("Logged out")
    document.getElementById("loginStatement").innerHTML = "You have been logged out";
    window.location.href = "index.html"
}
