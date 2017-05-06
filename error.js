function error(code){
    //alert("ERROR. SEE CONSOLE FOR MORE DETAILS");
    if (code == 000){
        console.error("More information not avaliable")
    }
    else if (code == 001){
        console.error("Error #" + code + ". Section not repurposed to hide.")
    }
    else if (code == 002){
        console.error("Error #" + code + ". Section not repurposed to show.")
    }
    else if (code == 003){
        alert("Incorrect username or password.")
        console.error("Error #" + code + ". Incorrect username or password.")
    }
    else if (code == 004){
        console.error("Error #" + code + ". Script count mismatch.")
    }
    else {
        console.error("Error #" + code + ". Please consult error lookup for more details")
    }
}
console.log("Error Script loaded successfully. No further comments.")
