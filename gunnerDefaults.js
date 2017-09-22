var total = 0
var current = 0
function launch(type){
    console.log("Gunner Website "+type+" scripts initialising...")
    document.write('<meta name="googlebot" content="noarchive" />')
    if (type == "standard") {
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
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBar.js"></script>');
        current = current + 1
        console.log("Menubar script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/copyToClipboard.js"></script>');
        current = current + 1
        console.log("Clipboard script located ("+current+"/"+total+")")
    }
    else if (type == "standard-prefix") {
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
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarPrefix.js"></script>');
        current = current + 1
        console.log("Menubar (special) script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script located ("+current+"/"+total+")")
        
    }
    else if (type == "basic" | type == "lite") {
        total = 3
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script located ("+current+"/"+total+")")
    }
    
    else if (type == "deutsch") {
        total = 6
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarDE.js"></script>');
        current = current + 1
        console.log("Menubar script (de) gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script gelegen ("+current+"/"+total+")")
    }
    else if (type == "thai") {
        total = 6
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarTH.js"></script>');
        current = current + 1
        console.log("Menubar script (th) gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script gelegen ("+current+"/"+total+")")
    }
    else if (type == "francais") {
        total = 6
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarFR.js"></script>');
        current = current + 1
        console.log("Menubar script (th) gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script gelegen ("+current+"/"+total+")")
    }
    else if (type == "espanol") {
        total = 6
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarES.js"></script>');
        current = current + 1
        console.log("Menubar script (th) gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script gelegen ("+current+"/"+total+")")
    }
    else if (type == "latin") {
        total = 6
        document.write('<script src="https://scripts.gunner.online/CSS/responsiveCSS.js"></script>');
        current = current + 1
        console.log("responsive CSS gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/error.js"></script>');
        current = current + 1
        console.log("error notification gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarLA.js"></script>');
        current = current + 1
        console.log("Menubar script (la) gelegen ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/googleAnalytics.js"></script>');
        current = current + 1
        console.log("Google analytics script gelegen ("+current+"/"+total+")")
    }
    else if (type == "secure") {
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
    else if (type == "maintainance") {
        localStorage.prevPage = window.location.href;
        console.log("Gunner Intranet maintainance redirect initialising...")
        window.location.href = "https://www.gunner.online/hidden/maintainance"
    }
    else if (type == "home_redirect") {
        console.log("Gunner Intranet home portal redirect initialising...")
        window.location.href = "https://www.gunner.online/home";
        location.href="https://www.gunner.online/home"
        document.location.href="https://www.gunner.online/home";
    }
    //----------------LEGACY--------------
    else if (type == "legacy_desktop") {
        total = 4
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
    else if (type == "legacy_design") {
        total = 4
        document.write('<script src="https://scripts.gunner.online/CSS/legacyCSS.js"></script>');
        document.write('<script src="https://scripts.gunner.online/CSS/legacyCSS.js"></script>');
        current = current + 1
        console.log("Desktop CSS located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/jQuery.js"></script>');
        current = current + 1
        console.log("jQuery located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/email.js"></script>');
        current = current + 1
        console.log("Email script located ("+current+"/"+total+")")
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBar.js"></script>');
        document.write('<script src="https://scripts.gunner.online/menuBar/responsiveMenuBarBeta.js"></script>');
        current = current + 1
        console.log("Menubar script located ("+current+"/"+total+")")
    }
    else if (type === "legacy_mobile") {
        total = 4
        document.write('<script src="https://scripts.gunner.online/CSS/mobileCSS.js"></script>');
        current = current + 1
        console.log("Mobile CSS located ("+current+"/"+total+")")
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
    //---------------------NOT FOUND-----------------
    else {
        total = 4
        console.warn("Page type could not be found or identified. Type identifier: " + type )
        //alert("Script type MUST be updated: Page type could not be found or identified. Type identifier: " + type )
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
    document.write('<script src="https://scripts.gunner.online/removeLaunchAnimations.js"></script>');
    console.log("Remove launch animations script located")
    document.write('<script src="https://scripts.gunner.online/pageDetect.js"></script>')
    console.log("Page Detection script located")
    
    
    if (current != total){
        console.error("Error 004: Script count mismatch. Not all scripts may be loaded. Loading "+current+" out of "+total+" scripts")
    }
    else{
        console.log("All scripts located. Loading "+current+" scripts.")
    }
}
//SFTG 2017
