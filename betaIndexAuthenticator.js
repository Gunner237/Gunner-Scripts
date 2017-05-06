//window.onload = function() {
if (localStorage.betaPriv == "true"){
    window.location.href = "homeBeta.html"
}
else {
    alert("You do not have sufficient priviliages. Please login")
    window.location.href = "../login.html"
}
