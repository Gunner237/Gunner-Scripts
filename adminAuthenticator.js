//window.onload = function() {
if (localStorage.adminPriv == "true"){
    if (localStorage.destination == undefined){
        alert("Your destination could not be found. Redirecting to homepage")
        window.location.href = "index.html"
    }
    else{
            window.location.href = localStorage.destination+".html"
    }
}
else {
    alert("You do not have sufficient priviliages. Please login")
    window.location.href = "login.html"
}
