//window.onload = function() {
if (localStorage.adminPriv == "true"){
    if (localStorage.destination == undefined){
        alert("Your destination could not be found. Redirecting to homepage")
        window.location.href = "https://www.gunner.online/"
    }
    else{
            window.location.href = localStorage.destination+".html"
    }
}
else {
    //alert("You do not have sufficient privileges. Please login")
    //window.location.href = "login.html"
    alert("This page is currently unavailable.")
    window.location.href = "https://www.gunner.online/"
    
}
