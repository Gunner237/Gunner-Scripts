console.log("mail.js loaded correctly")
function sendMail(type) {
    if (type == 'general'){
        var link = "mailto:gunnerwebsite@gmail.com?"
        + "&subject=" + escape("")
        + "&body=" + escape("")
        ;
    }
    else if (type == 'help'){
        var link = "mailto:gunnerwebsite@gmail.com?"
        + "&subject=" + escape("Help request | Gunner Website")
        + "&body=" + escape("")
        ;
    }
    else if (type == 'admin'){
        var link = "mailto:gunnerwebsite@gmail.com?"
        + "&subject=" + escape("Admin | Gunner Website")
        + "&body=" + escape("")
        ;
    }
    else if (type == 'yelland'){
        var link = "mailto:gunnerwebsite@gmail.com?"
        + "&subject=" + escape("Pi Finder | Gunner Website")
        + "&body=" + escape("")
        ;
    }
    else{
        console.warn("Mail request type: " + type + " unrecognised.")
        var link = "mailto:gunnerwebsite@gmail.com?"
        + "&subject=" + escape("Unknown request | Gunner Intranet")
        + "&body=" + escape("")
        ;
    }
    console.log(type + " mail request generated succesfully")
    window.location.href = link;
}
