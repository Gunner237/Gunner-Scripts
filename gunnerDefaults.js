var total = 0
var current = 0
function launch(type){
    console.log("Gunner Intranet "+type+" scripts initialising...")
    if (type === "standard") {
        total = 6
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBar.js"></script>');
        current = current + 1
        console.log("Menubar script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script located ("+current+"/"+total+")")
    }
    else if (type === "secure") {
        total = 7
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/md5.js"></script>');
        current = current + 1
        console.log("MD5 located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/passwords.js"></script>');
        current = current + 1
        console.log("Password script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarSecure.js"></script>');
        current = current + 1
        console.log("Menubar secure script located ("+current+"/"+total+")")
    }
    else if (type === "maintainance") {
        localStorage.prevPage = window.location.href;
        console.log("Gunner Intranet maintainance redirect initialising...")
        window.location.href = "https://www.gunner.online/hidden/maintainance"
    }
    else if (type === "home_redirect") {
        console.log("Gunner Intranet home portal redirect initialising...")
        window.location.href = "https://www.gunner.online/home";
        location.href="https://www.gunner.online/home"
        document.location.href="https://www.gunner.online/home";
    }
else {
    total = 4
    console.warn("Page type could not be found or identified. Type identifier: " + type )
    alert("Script type MUST be updated")
    console.log("Gunner Intranet default scripts initialising...")
    document.write('<script src="https://scripts.gunner.online/CSS/desktopCSS.js"></script>');
    current = current + 1
    console.log("Desktop CSS located ("+current+"/"+total+")")
    document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
    current = current + 1
    console.log("jQuery located ("+current+"/"+total+")")
    document.write('<script src="https://scripts.gunner.online/email.js"></script>');
    current = current + 1
    console.log("Email script located ("+current+"/"+total+")")
    document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBar.js"></script>');
    current = current + 1
    console.log("Menubar script located ("+current+"/"+total+")")
}
if (current != total){
    console.error("Error 004: Script count mismatch. Not all scripts may be loaded. Loading "+current+" out of "+total+" scripts")
}
else{
    console.log("All scripts located. Loading "+current+" scripts.")
}
}
//SFTG 2017
